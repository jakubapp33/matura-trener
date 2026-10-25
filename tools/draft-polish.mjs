// Tworzy bazę zadań z polskiego (część 1 – test, część 2 – wypracowanie).
// Zamknięte: odpowiedź po słowie „Rozwiązanie" w postaci A–F albo ciągu P/F; reszta – otwarte.
// Nietypowe odpowiedzi (np. „A1, B4") trzeba dopisać w tools/overrides/polski.json.
//
// Użycie: node tools/draft-polish.mjs
import { writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import { ROOT, loadSources, loadPages, findHeaders, pageRanges, sectionText, leafNumbers } from './lib.mjs'

const overrides = JSON.parse(await readFile(path.join(ROOT, 'tools', 'overrides', 'polski.json'), 'utf8').catch(() => '{}'))

/** Numer pierwszego zadania testu historycznoliterackiego (wg nagłówka „Test historycznoliteracki" w arkuszu). */
function historyStart(pages) {
  const lines = pages.join('\n').split('\n')
  const at = lines.findIndex((l) => /Test historycznoliteracki/.test(l) && !/Język polski w użyciu/.test(l))
  if (at < 0) return Infinity
  const next = lines.slice(at).find((l) => /^Zadanie \d+/.test(l.trim()))
  return next ? Number(next.trim().match(/^Zadanie (\d+)/)[1]) : Infinity
}

/** Litery opcji występujące na początku wierszy w treści zadania (co najmniej do poprawnej). */
function optionLetters(pages, headers, num, correct) {
  const idx = headers.findIndex((h) => h.number === num)
  const text = idx >= 0 ? sectionText(pages, headers, idx) : ''
  let max = correct > 'B' ? correct : 'B'
  for (const m of text.matchAll(/^([A-F])\.\s/gm)) if (m[1] > max) max = m[1]
  return 'ABCDEF'.slice(0, 'ABCDEF'.indexOf(max) + 1).split('')
}

for (const ex of (await loadSources()).filter((s) => s.subject === 'polski')) {
  const examPages = await loadPages(ex.examFile)
  const keyPages = await loadPages(ex.keyFile)
  const eh = findHeaders(examPages)
  const kh = findHeaders(keyPages)
  const khScored = kh.filter((h) => h.points !== undefined)
  const er = pageRanges(eh, examPages.length - 1)
  const kr = pageRanges(kh, keyPages.length)
  const hist = historyStart(examPages)
  const isEssay = ex.id.startsWith('pol2')
  const tasks = []
  for (const num of leafNumbers(khScored.map((h) => h.number))) {
    const idx = khScored.findIndex((h) => h.number === num)
    const text = sectionText(keyPages, khScored, idx)
    const id = `${ex.id}-z${num}`
    const tok = text.match(/\nRozwiązanie\s*\n\s*([^\n]+)/)?.[1].trim()
    let items
    if (tok && /^[A-F]$/.test(tok)) items = [{ label: num, options: optionLetters(examPages, eh, num, tok), correct: tok }]
    else if (tok && /^[PF]+$/.test(tok))
      items = [...tok].map((c, i) => ({ label: `${num} – zdanie ${i + 1}`, options: ['P', 'F'], correct: c }))
    else if (tok && tok.length < 20 && !overrides[id]) console.log(`DO SPRAWDZENIA ${id}: odpowiedź "${tok}"`)
    const task = {
      id,
      examId: ex.id,
      subject: 'polski',
      number: num,
      topic: isEssay ? 'wypracowanie' : Number(num.split('.')[0]) >= hist ? 'historycznoliteracki' : 'jezyk-w-uzyciu',
      type: items ? 'zamkniete' : 'otwarte',
      maxPoints: khScored[idx].points,
      examPages: er.get(num) ?? [],
      keyPages: kr.get(num) ?? [],
      ...(items && { items }),
      ...overrides[id],
    }
    if (!task.examPages.length) console.log(`DO SPRAWDZENIA ${id}: brak strony w arkuszu`)
    tasks.push(task)
  }
  const sum = tasks.reduce((s, t) => s + t.maxPoints, 0)
  console.log(`${ex.id}: ${tasks.length} zadań (${tasks.filter((t) => t.type === 'zamkniete').length} zamkn.), ${sum} pkt`)
  await writeFile(path.join(ROOT, 'src', 'data', 'tasks', `${ex.id}.json`), JSON.stringify(tasks, null, 1) + '\n')
}
