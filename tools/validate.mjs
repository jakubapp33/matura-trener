// Sprawdza spójność bazy zadań: pliki PDF, strony, działy, odpowiedzi, sumy punktów.
// Użycie: node tools/validate.mjs   (kod wyjścia 1, jeśli są błędy)
import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { ROOT } from './lib.mjs'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

// oczekiwana suma punktów (poziom podstawowy, formuła 2023)
const EXPECTED = { mat: { 2023: 46, 2024: 46 }, mat_default: 50, ang: 60, pol1: 25, pol2: 35 }

const topicsSrc = await readFile(path.join(ROOT, 'src', 'data', 'topics.ts'), 'utf8')
const topicIds = new Set([...topicsSrc.matchAll(/id: '([^']+)'/g)].map((m) => m[1]))
const exams = JSON.parse(await readFile(path.join(ROOT, 'src', 'data', 'exams.json'), 'utf8'))

let errors = 0
const err = (msg) => {
  errors++
  console.log('✘ ' + msg)
}

async function numPages(file) {
  const data = new Uint8Array(await readFile(path.join(ROOT, 'public', file)))
  return (await getDocument({ data, verbosity: 0 }).promise).numPages
}

for (const e of exams) {
  for (const f of [e.examFile, e.keyFile]) await access(path.join(ROOT, 'public', f)).catch(() => err(`${e.id}: brak pliku ${f}`))
  const tasks = JSON.parse(await readFile(path.join(ROOT, 'src', 'data', 'tasks', `${e.id}.json`), 'utf8').catch(() => '[]'))
  if (!tasks.length) {
    err(`${e.id}: brak zadań`)
    continue
  }
  const [ep, kp] = [await numPages(e.examFile), await numPages(e.keyFile)]
  const ids = new Set()
  for (const t of tasks) {
    const where = `${t.id}`
    if (ids.has(t.id)) err(`${where}: powtórzone id`)
    ids.add(t.id)
    if (t.examId !== e.id || t.subject !== e.subject) err(`${where}: zły arkusz/przedmiot`)
    if (!topicIds.has(t.topic)) err(`${where}: nieznany dział "${t.topic}"`)
    if (!(t.maxPoints > 0)) err(`${where}: brak punktacji`)
    if (!t.examPages.length || t.examPages.some((p) => p < 1 || p > ep)) err(`${where}: złe strony arkusza ${t.examPages}`)
    if (!t.keyPages.length || t.keyPages.some((p) => p < 1 || p > kp)) err(`${where}: złe strony zasad ${t.keyPages}`)
    if (t.type === 'zamkniete') {
      if (!t.items?.length) err(`${where}: zamknięte bez odpowiedzi`)
      for (const it of t.items ?? []) {
        const need = it.pick ?? 1
        if ([...it.correct].length !== need || ![...it.correct].every((c) => it.options.includes(c)))
          err(`${where}: odpowiedź "${it.correct}" spoza opcji ${it.options.join('')}`)
      }
      if (t.scale && t.scale.length !== (t.items?.length ?? 0) + 1) err(`${where}: zła długość skali`)
    }
  }
  const sum = tasks.reduce((s, t) => s + t.maxPoints, 0)
  const key = e.id.split('-')[0]
  const want = key === 'mat' ? (EXPECTED.mat[e.year] ?? EXPECTED.mat_default) : EXPECTED[key]
  if (want && sum !== want) err(`${e.id}: suma punktów ${sum}, oczekiwano ${want}`)
  else console.log(`✔ ${e.id}: ${tasks.length} zadań, ${sum} pkt`)
}

console.log(errors ? `\n${errors} błędów` : '\nBaza zadań jest spójna.')
process.exit(errors ? 1 : 0)
