// Wyciąga tekst z PDF-ów arkuszy i zasad oceniania (strona po stronie)
// do tools/cache/text/<plik>.txt i wypisuje, na których stronach
// pojawiają się nagłówki „Zadanie N.".
//
// Użycie: node tools/extract-text.mjs [filtr-id]   np. node tools/extract-text.mjs mat-2025
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT = path.join(ROOT, 'tools', 'cache', 'text')
const sources = JSON.parse(await readFile(path.join(ROOT, 'tools', 'sources.json'), 'utf8'))
const filter = process.argv[2]

export async function pagesText(file) {
  const data = new Uint8Array(await readFile(path.join(ROOT, 'public', file)))
  const doc = await getDocument({ data, verbosity: 0 }).promise
  const pages = []
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i)
    const tc = await page.getTextContent()
    let line = ''
    const lines = []
    for (const it of tc.items) {
      line += it.str
      if (it.hasEOL) {
        lines.push(line)
        line = ''
      }
    }
    if (line) lines.push(line)
    pages.push(lines.join('\n'))
  }
  return pages
}

await mkdir(OUT, { recursive: true })
for (const s of sources.filter((s) => !filter || s.id.startsWith(filter))) {
  for (const f of [s.examFile, s.keyFile]) {
    const pages = await pagesText(f)
    const txt = pages.map((p, i) => `===== STRONA ${i + 1} =====\n${p}`).join('\n')
    await writeFile(path.join(OUT, path.basename(f, '.pdf') + '.txt'), txt)
    const hits = []
    pages.forEach((p, i) => {
      for (const m of p.matchAll(/Zadanie\s+(\d+(?:\.\d+)?)\.?/g)) hits.push(`${m[1]}→s${i + 1}`)
    })
    console.log(`${s.id} ${f.endsWith('zasady.pdf') ? 'ZASADY' : 'ARKUSZ'} (${pages.length} s.): ${[...new Set(hits)].join(' ')}`)
  }
}
