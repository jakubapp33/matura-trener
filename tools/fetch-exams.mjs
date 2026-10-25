// Pobiera główne arkusze CKE (poziom podstawowy: polski, angielski, matematyka)
// razem z zasadami oceniania i nagraniami, zapisuje PDF-y do public/pdf/<rok>/
// i tworzy tools/sources.json z listą znalezionych plików.
//
// Użycie: node tools/fetch-exams.mjs 2023 2024 2025 2026
import { mkdir, writeFile, access, readFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const BASE = 'https://cke.gov.pl'
const F2023 = (y) => `${BASE}/egzamin-maturalny/egzamin-maturalny-w-formule-2023/arkusze/${y}-2/`

// Główne arkusze (wersja dla zdających bez dostosowań: kod 100, wariant A jeśli jest).
const PARTS = [
  { key: 'mat', subject: 'matematyka', code: 'MMAP-P0-100', name: 'Matematyka', minutes: 180 },
  { key: 'ang', subject: 'angielski', code: 'MJAP-P0-100', name: 'Język angielski', minutes: 120 },
  { key: 'pol1', subject: 'polski', code: 'MPOP-P1-100', name: 'Język polski – część 1 (test)', minutes: 60 },
  { key: 'pol2', subject: 'polski', code: 'MPOP-P2-100', name: 'Język polski – część 2 (wypracowanie)', minutes: 180 },
]

const abs = (href) => (href.startsWith('http') ? href.replace(/^http:/, 'https:') : BASE + href)

async function fetchText(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

async function download(url, dest) {
  try {
    await access(dest)
    return 'cached'
  } catch {}
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  await mkdir(path.dirname(dest), { recursive: true })
  await writeFile(dest, Buffer.from(await res.arrayBuffer()))
  return 'ok'
}

function pickLinks(html, year) {
  const links = [...html.matchAll(/href="([^"]+\.(?:pdf|mp3))"/g)].map((m) => abs(m[1]))
  const yy = String(year).slice(2)
  const out = []
  for (const p of PARTS) {
    const file = (l) => decodeURIComponent(l.split('/').pop())
    // arkusz: MMAP-P0-100-A-2505-arkusz.pdf albo (2023) MMAP-P0-100-2305.pdf
    const exam =
      links.find((l) => file(l) === `${p.code}-A-${yy}05-arkusz.pdf`) ??
      links.find((l) => file(l) === `${p.code}-${yy}05.pdf`)
    // zasady: pierwszy plik *-zasady.pdf zaczynający się od kodu (bez "-100")
    const prefix = p.code.replace(/-100$/, '')
    const key =
      links.find((l) => file(l) === `${p.code}-${yy}05-zasady.pdf`) ??
      links.find((l) => file(l).startsWith(`${prefix}-100`) && file(l).endsWith('-zasady.pdf') && file(l).includes(`${yy}05`))
    const audio =
      p.subject === 'angielski'
        ? links.find((l) => /poziom_podstawowy/.test(l) && l.endsWith('.mp3') && /-P0?-100-/.test(file(l)))
        : undefined
    if (!exam || !key) {
      console.warn(`! ${year} ${p.key}: brak ${!exam ? 'arkusza' : 'zasad oceniania'}`)
      continue
    }
    out.push({
      id: `${p.key}-${year}-maj`,
      subject: p.subject,
      name: p.name,
      year,
      session: 'maj',
      formula: 2023,
      minutes: p.minutes,
      examUrl: exam,
      keyUrl: key,
      audioUrl: audio,
      examFile: `pdf/${year}/${file(exam)}`,
      keyFile: `pdf/${year}/${file(key)}`,
    })
  }
  return out
}

const years = process.argv.slice(2).map(Number)
if (!years.length) {
  console.error('Podaj lata, np.: node tools/fetch-exams.mjs 2023 2024')
  process.exit(1)
}

const all = []
for (const y of years) {
  const found = pickLinks(await fetchText(F2023(y)), y)
  for (const e of found) {
    for (const [url, f] of [[e.examUrl, e.examFile], [e.keyUrl, e.keyFile]]) {
      const r = await download(url, path.join(ROOT, 'public', f))
      console.log(`${r.padEnd(6)} ${f}`)
    }
  }
  all.push(...found)
}
// łączymy z wcześniej pobranymi latami, żeby można było dopisywać kolejne partie
const prev = JSON.parse(await readFile(path.join(ROOT, 'tools', 'sources.json'), 'utf8').catch(() => '[]'))
const merged = [...prev.filter((p) => !all.some((a) => a.id === p.id)), ...all].sort(
  (a, b) => b.year - a.year || a.id.localeCompare(b.id),
)
const json = JSON.stringify(merged, null, 2) + '\n'
await writeFile(path.join(ROOT, 'tools', 'sources.json'), json)
await writeFile(path.join(ROOT, 'src', 'data', 'exams.json'), json)
console.log(`\nZapisano ${merged.length} arkuszy do tools/sources.json i src/data/exams.json`)
