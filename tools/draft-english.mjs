// Tworzy bazę zadań z angielskiego: zadania 1–12, w zamkniętych odpowiedzi do każdej pozycji (np. 4.2 → F).
// Pozycje bez litery w kluczu (luki do uzupełnienia, e-mail) → zadanie otwarte, sprawdzane z kluczem CKE.
//
// Użycie: node tools/draft-english.mjs
import { writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import { ROOT, loadSources, loadPages, findHeaders, pageRanges, sectionText } from './lib.mjs'

const SECTIONS = [
  [/^Rozumienie ze słuchu/, 'sluchanie'],
  [/^Rozumienie tekstów pisanych/, 'czytanie'],
  [/^Znajomość środków językowych/, 'srodki-jezykowe'],
  [/^Wypowiedź pisemna/, 'pisanie'],
]

const overrides = JSON.parse(
  await readFile(path.join(ROOT, 'tools', 'overrides', 'angielski.json'), 'utf8').catch(() => '{}'),
)

/** Dział każdego zadania wg nagłówków sekcji w zasadach oceniania. */
function topicsByTask(keyPages) {
  const map = new Map()
  let cur = 'sluchanie'
  for (const line of keyPages.join('\n').split('\n')) {
    for (const [re, t] of SECTIONS) if (re.test(line.trim())) cur = t
    const m = line.trim().match(/^Zadanie (\d+)\.$/)
    if (m && !map.has(m[1])) map.set(m[1], cur)
  }
  return map
}

/** Litery poprawnych odpowiedzi (wersja A) dla pozycji N.1, N.2… */
function answersOf(text, num) {
  const lines = text.split('\n')
  const out = []
  let cur = null
  for (const l of lines) {
    const m = l.trim().match(new RegExp(`^(${num.replace('.', '\\.')}\\.\\d+)\\.(.*)$`))
    if (m) {
      cur = { label: m[1], chunk: [m[2]] }
      out.push(cur)
    } else if (cur) cur.chunk.push(l)
  }
  const seen = new Set()
  return out
    .filter((o) => !seen.has(o.label) && seen.add(o.label))
    .map((o) => {
      const chunk = o.chunk.join('\n')
      // dwie kolumny (wersja A i B) albo jedna (np. T/F wspólne dla obu wersji)
      const pairs = [...chunk.matchAll(/(?:^|\s)([A-H])\s+([A-H])\s*$/gm)]
      const single = [...chunk.matchAll(/(?:^|\s)([A-HT])\s*$/gm)]
      const correct = pairs.length ? pairs[pairs.length - 1][1] : single.length ? single[single.length - 1][1] : undefined
      return { label: o.label, correct }
    })
}

function optionLetters(examText, correct) {
  if (correct.every((c) => c === 'T' || c === 'F')) return ['T', 'F']
  let max = 'C'
  // tylko litery na początku wiersza – w tekście bywają inicjały (np. „H. EVANS")
  for (const m of examText.matchAll(/^([A-H])\.\s/gm)) if (m[1] > max) max = m[1]
  for (const c of correct) if (c > max) max = c
  return 'ABCDEFGH'.slice(0, 'ABCDEFGH'.indexOf(max) + 1).split('')
}

for (const ex of (await loadSources()).filter((s) => s.subject === 'angielski')) {
  const examPages = await loadPages(ex.examFile)
  const keyPages = await loadPages(ex.keyFile)
  const eh = findHeaders(examPages).filter((h) => !h.number.includes('.'))
  const kh = findHeaders(keyPages).filter((h) => !h.number.includes('.'))
  const er = pageRanges(eh, examPages.length - 1)
  const kr = pageRanges(kh, keyPages.length)
  const topics = topicsByTask(keyPages)
  const tasks = []
  for (const h of eh.filter((h) => h.points !== undefined)) {
    const num = h.number
    const examText = sectionText(examPages, eh, eh.indexOf(h))
    const ki = kh.findIndex((k) => k.number === num)
    const keyText = ki >= 0 ? sectionText(keyPages, kh, ki) : ''
    const ans = answersOf(keyText, num)
    const base = {
      examId: ex.id,
      subject: 'angielski',
      topic: topics.get(num) ?? 'sluchanie',
      examPages: er.get(num) ?? [],
      keyPages: kr.get(num) ?? [],
    }
    const closedPart = ans.filter((a) => a.correct)
    const openPart = ans.filter((a) => !a.correct)
    const range = (l) => (l.length > 1 ? `${num} (${l[0].label}–${l[l.length - 1].label})` : `${num} (${l[0].label})`)
    const parts = []
    if (closedPart.length && closedPart.length + openPart.length === h.points) {
      const letters = optionLetters(examText, closedPart.map((a) => a.correct))
      const items = closedPart.map((a) => ({ label: a.label, options: letters, correct: a.correct }))
      if (!openPart.length) parts.push({ id: `${ex.id}-z${num}`, number: num, type: 'zamkniete', maxPoints: h.points, items })
      else {
        // zadanie mieszane (np. 5.1–5.3 wybór, 5.4–5.7 odpowiedź własnymi słowami) → dwie części
        parts.push({ id: `${ex.id}-z${num}a`, number: range(closedPart), type: 'zamkniete', maxPoints: closedPart.length, items })
        parts.push({ id: `${ex.id}-z${num}b`, number: range(openPart), type: 'otwarte', maxPoints: openPart.length })
      }
    } else parts.push({ id: `${ex.id}-z${num}`, number: num, type: 'otwarte', maxPoints: h.points })
    for (const p of parts) tasks.push({ ...base, ...p, ...overrides[p.id] })
  }
  const sum = tasks.reduce((s, t) => s + t.maxPoints, 0)
  console.log(`${ex.id}: ${tasks.length} zadań (${tasks.filter((t) => t.type === 'zamkniete').length} zamkn.), ${sum} pkt`)
  await writeFile(path.join(ROOT, 'src', 'data', 'tasks', `${ex.id}.json`), JSON.stringify(tasks, null, 1) + '\n')
}
