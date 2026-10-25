// Wspólne funkcje skryptów budujących bazę zadań.
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const ROOT = path.resolve(import.meta.dirname, '..')

export async function loadSources() {
  return JSON.parse(await readFile(path.join(ROOT, 'tools', 'sources.json'), 'utf8'))
}

/** Tekst wyciągnięty przez extract-text.mjs, podzielony na strony (indeks 0 = strona 1). */
export async function loadPages(file) {
  const txt = await readFile(path.join(ROOT, 'tools', 'cache', 'text', path.basename(file, '.pdf') + '.txt'), 'utf8')
  return txt.split(/===== STRONA \d+ =====\n/).slice(1)
}

const HEADER = /^Zadanie\s+(\d+(?:\.\d+)?)\.(?:\s*\((\d+)[–-](\d+)\))?/

/**
 * Znajduje nagłówki „Zadanie N." w dokumencie.
 * Zwraca [{ number, points, page, line, lineInPage }] w kolejności występowania.
 */
export function findHeaders(pages) {
  const out = []
  pages.forEach((p, pi) => {
    p.split('\n').forEach((l, li) => {
      const m = l.trim().match(HEADER)
      if (m) out.push({ number: m[1], points: m[3] ? Number(m[3]) : undefined, page: pi + 1, lineInPage: li })
    })
  })
  return out
}

/**
 * Zakres stron każdego zadania: od strony nagłówka do strony przed następnym zadaniem
 * (albo do strony następnego zadania, jeśli ono zaczyna się w połowie strony).
 * Podzadania (12.1) dostają też stronę wstępu zadania głównego (12.).
 */
export function pageRanges(headers, lastPage, { topLines = 4 } = {}) {
  const firstIdx = new Map()
  headers.forEach((h, i) => {
    if (!firstIdx.has(h.number)) firstIdx.set(h.number, i)
  })
  const ranges = new Map()
  for (const [num, i] of firstIdx) {
    const h = headers[i]
    const next = headers.slice(i + 1).find((n) => n.number !== num && !n.number.startsWith(num + '.') && n.page >= h.page)
    let end = lastPage
    if (next) end = next.lineInPage <= topLines ? Math.max(h.page, next.page - 1) : next.page
    // zadanie główne z podzadaniami – zakres to tylko wstęp do pierwszego podzadania
    const firstSub = headers.slice(i + 1).find((n) => n.number.startsWith(num + '.'))
    if (firstSub && !num.includes('.')) end = Math.max(h.page, firstSub.lineInPage <= topLines ? firstSub.page - 1 : firstSub.page)
    let start = h.page
    if (num.includes('.')) {
      const parent = firstIdx.get(num.split('.')[0])
      if (parent !== undefined) start = Math.min(start, headers[parent].page)
    }
    const arr = []
    for (let p = start; p <= end; p++) arr.push(p)
    ranges.set(num, arr)
  }
  return ranges
}

/** Fragment tekstu zadania (od nagłówka do następnego nagłówka) w jednym ciągu. */
export function sectionText(pages, headers, idx) {
  const flat = []
  pages.forEach((p, pi) => p.split('\n').forEach((l, li) => flat.push({ l, pi: pi + 1, li })))
  const pos = (h) => flat.findIndex((f) => f.pi === h.page && f.li === h.lineInPage)
  const a = pos(headers[idx])
  const b = idx + 1 < headers.length ? pos(headers[idx + 1]) : flat.length
  return flat.slice(a, b).map((f) => f.l).join('\n')
}

/** Zadania „liście" – bez zadań głównych, które mają podzadania (12. gdy istnieje 12.1). */
export function leafNumbers(numbers) {
  const uniq = [...new Set(numbers)]
  return uniq.filter((n) => !uniq.some((m) => m.startsWith(n + '.')))
}
