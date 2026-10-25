// Wylicza, który fragment strony PDF należy do którego zadania (żeby nie pokazywać dwóch zadań naraz).
// Szuka nagłówków „Zadanie N.” / „Zadanie N.M.” i dzieli strony między nimi.
// Wynik zapisuje w src/data/tasks/<arkusz>.json jako:
//   crop    – fragmenty arkusza z treścią zadania (wraz ze wstępem zadania nadrzędnego, np. 12. dla 12.1),
//   context – wspólne teksty do kilku zadań (np. „Tekst 1.”, „Tekst 2.” w teście z polskiego),
//   keyCrop – fragment zasad oceniania dla tego zadania.
// Każdy fragment: { p: strona, t: góra, b: dół } – t i b jako ułamek wysokości strony (0–1).
// Uruchomienie: node tools/crop-tasks.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'

const root = new URL('../', import.meta.url)
const exams = JSON.parse(readFileSync(new URL('src/data/exams.json', root)))

const r3 = (x) => Math.round(x * 1000) / 1000

/** linie tekstu na stronie: { y (od góry, pt), t (tekst bez spacji), raw } – bez marginesu z polem punktów */
async function pageLines(doc, p) {
  const page = await doc.getPage(p)
  const vp = page.getViewport({ scale: 1 })
  const tc = await page.getTextContent()
  const lines = []
  for (const it of tc.items) {
    if (!it.str?.trim()) continue
    const x = it.transform[4]
    if (x < 50) continue // lewy margines: numer zadania i kratka na punkty
    const y = vp.height - it.transform[5]
    let l = lines.find((k) => Math.abs(k.y - y) <= 2.5)
    if (!l) lines.push((l = { y, items: [] }))
    l.items.push({ x, s: it.str, size: Math.abs(it.transform[0]) })
  }
  for (const l of lines) {
    l.items.sort((a, b) => a.x - b.x)
    l.raw = l.items.map((i) => i.s).join(' ').replace(/\s+/g, ' ').trim()
    l.t = l.raw.replace(/\s/g, '')
    l.x = l.items[0].x
    l.size = l.items[0].size
  }
  lines.sort((a, b) => a.y - b.y)
  return { h: vp.height, lines }
}

/** znaczniki w kolejności czytania: nagłówki zadań, początki tekstów wspólnych, brudnopisy */
async function markers(file) {
  const doc = await pdfjs.getDocument({ url: fileURLToPath(new URL('public/' + file, root)), verbosity: 0 }).promise
  const pages = []
  const out = []
  for (let p = 1; p <= doc.numPages; p++) {
    const { h, lines } = await pageLines(doc, p)
    // stopka: „Strona X z Y”, kod arkusza – zawsze na dole
    const footer = lines.filter((l) => l.y > h - 70 && /Strona\d+z\d+|^M[A-Z]{3}-|^\d+$/.test(l.t))
    const bottom = footer.length ? Math.min(...footer.map((l) => l.y)) - 10 : h - 45
    pages[p] = { h, bottom, top: 40 }
    for (const l of lines) {
      if (l.y > bottom) continue
      const m = l.t.match(/^Zadanie(\d+)(?:\.(\d+))?\.?(?:\(|$|[^\d])/)
      if (m && l.x < 110) {
        out.push({ kind: 'task', num: m[2] ? `${m[1]}.${m[2]}` : m[1], p, y: l.y })
        continue
      }
      if (/^Brudnopis$/i.test(l.t)) out.push({ kind: 'stop', p, y: l.y + 8 })
      // początek części z tekstami (np. „Część 1. Test…”, „Przeczytaj uważnie teksty…”)
      if (/^Część\d+\./.test(l.t)) out.push({ kind: 'context', p, y: l.y })
    }
  }
  return { pages, list: out, numPages: doc.numPages }
}

/** fragmenty strony od (p1,y1) do (p2,y2) */
function segments(pages, p1, y1, p2, y2) {
  const segs = []
  for (let p = p1; p <= p2; p++) {
    const pg = pages[p]
    if (!pg) continue
    const top = p === p1 ? Math.max(pg.top, y1 - 20) : pg.top
    const bot = p === p2 ? Math.min(pg.bottom, y2 - 22) : pg.bottom
    if (bot - top < 50) continue // sam nagłówek strony / pusty pasek
    segs.push({ p, t: r3(top / pg.h), b: r3(bot / pg.h) })
  }
  return segs
}

/** scala nakładające się fragmenty tej samej strony (wstęp zadania + podpunkt) */
function merge(segs) {
  const out = []
  for (const s of segs) {
    const last = out[out.length - 1]
    if (last && last.p === s.p && s.t <= last.b + 0.01) last.b = Math.max(last.b, s.b)
    else out.push({ ...s })
  }
  return out
}

/** koniec fragmentu zaczynającego się od znacznika i: następne zadanie, kontekst lub brudnopis */
function endOf(list, i, pages, numPages, { stopAtDraft = true } = {}) {
  for (let j = i + 1; j < list.length; j++) {
    const m = list[j]
    if (m.kind === 'task' || m.kind === 'context' || (stopAtDraft && m.kind === 'stop')) return m
  }
  return { p: numPages, y: pages[numPages].bottom + 4 }
}

const baseNum = (n) => n.split(/[ (]/)[0] // „5 (5.1–5.3)” → „5”

let ok = 0
let missing = 0
for (const exam of exams) {
  const path = new URL(`src/data/tasks/${exam.id}.json`, root)
  let tasks
  try {
    tasks = JSON.parse(readFileSync(path))
  } catch {
    continue
  }
  const ex = await markers(exam.examFile)
  const key = await markers(exam.keyFile)
  const list = ex.list
  const taskIdx = (l, num) => l.findIndex((m) => m.kind === 'task' && m.num === num)

  for (const t of tasks) {
    delete t.crop
    delete t.context
    delete t.keyCrop
    const num = baseNum(t.number)
    let i = taskIdx(list, num)
    const parentNum = num.includes('.') ? num.split('.')[0] : undefined
    if (i < 0 && parentNum) i = taskIdx(list, parentNum)
    if (i < 0) {
      console.warn(`⚠ ${exam.id}: nie znalazłem nagłówka zadania ${t.number}`)
      missing++
      continue
    }
    const crop = []
    // wstęp zadania nadrzędnego (np. „Zadanie 12.” z danymi do 12.1–12.3)
    if (parentNum && list[i].num === num) {
      const pi = taskIdx(list, parentNum)
      if (pi >= 0 && pi < i) {
        const e = list.slice(pi + 1).find((m) => m.kind === 'task')
        crop.push(...segments(ex.pages, list[pi].p, list[pi].y, e.p, e.y))
      }
    }
    // zadanie z podpunktami bez osobnych nagłówków (np. angielski 5.1–5.7) – cały blok
    let e = endOf(list, i, ex.pages, ex.numPages)
    crop.push(...segments(ex.pages, list[i].p, list[i].y, e.p, e.y))
    t.crop = merge(crop)

    // wspólne teksty: ostatni znacznik „Część…” przed zadaniem, jeśli między nim a zadaniem nie ma innych zadań
    // z innym kontekstem (teksty z polskiego: Tekst 1., Tekst 2. → zadania 1–5)
    let ci = -1
    for (let j = i - 1; j >= 0; j--) {
      if (list[j].kind === 'context') {
        ci = j
        break
      }
    }
    if (ci >= 0) {
      const first = list.slice(ci + 1).find((m) => m.kind === 'task')
      const seg = segments(ex.pages, list[ci].p, list[ci].y, first.p, first.y)
      // tylko gdy przed pierwszym zadaniem rzeczywiście jest tekst (min. pół strony)
      const size = seg.reduce((s, x) => s + (x.b - x.t), 0)
      if (size > 0.4) t.context = seg
    }

    // zasady oceniania
    let k = taskIdx(key.list, num)
    if (k < 0 && parentNum) k = taskIdx(key.list, parentNum)
    if (k >= 0) {
      e = endOf(key.list, k, key.pages, key.numPages, { stopAtDraft: false })
      t.keyCrop = segments(key.pages, key.list[k].p, key.list[k].y, e.p, e.y)
    }
    ok++
  }
  writeFileSync(path, JSON.stringify(tasks, null, 2) + '\n')
}
console.log(`✓ Wycięte zadania: ${ok}, bez nagłówka: ${missing}`)
