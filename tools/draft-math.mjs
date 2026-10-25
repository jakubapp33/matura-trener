// Tworzy wstępną bazę zadań z matematyki na podstawie tekstu arkusza i zasad oceniania.
// Wynik: src/data/tasks/<examId>.json. Zadania z nietypową odpowiedzią są wypisywane
// jako „DO SPRAWDZENIA" i trzeba je poprawić ręcznie (patrz tools/overrides/).
//
// Użycie: node tools/draft-math.mjs
import { writeFile, mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { ROOT, loadSources, loadPages, findHeaders, pageRanges, sectionText, leafNumbers } from './lib.mjs'

const SECTION_TOPIC = {
  II: 'wyrazenia', III: 'rownania', IV: 'uklady', VI: 'ciagi', VII: 'trygonometria',
  VIII: 'planimetria', IX: 'geometria-analityczna', X: 'stereometria', XI: 'kombinatoryka',
  XII: 'prawdopodobienstwo', XIII: 'optymalizacja',
}

export function mathTopic(text) {
  const req = text.split(/Zdający:/)[1]?.split(/Zasady oceniania/)[0] ?? ''
  const m = req.match(/\b([IVX]+)(?:\.\d+)?\)/)
  const sec = m?.[1]
  const low = req.toLowerCase()
  if (sec === 'I' || !sec) {
    if (/logarytm/.test(low)) return 'logarytmy'
    if (/procent/.test(low)) return 'procenty'
    if (/potęg|pierwiast/.test(low)) return 'potegi'
    return 'liczby'
  }
  if (sec === 'V') {
    if (/kwadratow/.test(low)) return 'f-kwadratowa'
    if (/liniow/.test(low)) return 'f-liniowa'
    if (/wykładnicz/.test(low)) return 'f-wykladnicza'
    return 'funkcje'
  }
  return SECTION_TOPIC[sec] ?? 'liczby'
}

/** Zamienia token odpowiedzi (wersja A) na listę elementów do zaznaczenia. */
export function itemsFromToken(tok, number, letters = ['A', 'B', 'C', 'D']) {
  if (/^[A-F]$/.test(tok)) return [{ label: number, options: letters, correct: tok }]
  if (/^[PF]+$/.test(tok))
    return [...tok].map((c, i) => ({ label: `${number} – zdanie ${i + 1}`, options: ['P', 'F'], correct: c }))
  return null
}

/** Litery odpowiedzi występujące w treści zadania w arkuszu (co najmniej A–D). */
function optionLetters(pages, headers, num) {
  const idx = headers.findIndex((h) => h.number === num)
  if (idx < 0) return ['A', 'B', 'C', 'D']
  const text = sectionText(pages, headers, idx)
  let max = 'D'
  for (const m of text.matchAll(/(?:^|\s)([A-F])\.\s/gm)) if (m[1] > max) max = m[1]
  return 'ABCDEF'.slice(0, 'ABCDEF'.indexOf(max) + 1).split('')
}

const overridesFile = path.join(ROOT, 'tools', 'overrides', 'matematyka.json')
const overrides = JSON.parse(await readFile(overridesFile, 'utf8').catch(() => '{}'))

await mkdir(path.join(ROOT, 'src', 'data', 'tasks'), { recursive: true })
for (const ex of (await loadSources()).filter((s) => s.subject === 'matematyka')) {
  const examPages = await loadPages(ex.examFile)
  const keyPages = await loadPages(ex.keyFile)
  const eh = findHeaders(examPages)
  const kh = findHeaders(keyPages)
  // w zasadach oceniania liczą się tylko nagłówki z punktacją, np. „Zadanie 5. (0–2)"
  const khScored = kh.filter((h) => h.points !== undefined)
  const er = pageRanges(eh, examPages.length - 1)
  // zakresy liczone po wszystkich nagłówkach, żeby ostatnie zadanie kończyło się przed aneksem
  const kr = pageRanges(kh, keyPages.length)
  const tasks = []
  for (const num of leafNumbers(khScored.map((h) => h.number))) {
    const idx = khScored.findIndex((h) => h.number === num)
    const text = sectionText(keyPages, khScored, idx)
    const id = `${ex.id}-z${num}`
    const ans = text.match(/Wersja A\s+Wersja B\s*\n\s*(\S+)\s+(\S+)/)
    const task = {
      id,
      examId: ex.id,
      subject: 'matematyka',
      number: num,
      topic: mathTopic(text),
      type: ans ? 'zamkniete' : 'otwarte',
      maxPoints: khScored[idx].points,
      examPages: er.get(num) ?? [],
      keyPages: kr.get(num) ?? [],
    }
    if (ans) {
      const items = itemsFromToken(ans[1], num, optionLetters(examPages, eh, num))
      if (items) task.items = items
      else if (!overrides[id]) console.log(`DO SPRAWDZENIA ${id}: nietypowa odpowiedź "${ans[1]}"`)
    }
    Object.assign(task, overrides[id])
    if (!task.examPages.length) console.log(`DO SPRAWDZENIA ${id}: brak strony w arkuszu`)
    tasks.push(task)
  }
  const sum = tasks.reduce((s, t) => s + t.maxPoints, 0)
  const closed = tasks.filter((t) => t.type === 'zamkniete').length
  console.log(`${ex.id}: ${tasks.length} zadań (${closed} zamkn.), ${sum} pkt`)
  await writeFile(path.join(ROOT, 'src', 'data', 'tasks', `${ex.id}.json`), JSON.stringify(tasks, null, 1) + '\n')
}
