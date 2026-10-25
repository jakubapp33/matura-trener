// Kopiuje czcionki i moduły wasm pdf.js do public/pdfjs/ (uruchamiane przed dev/build).
import { existsSync } from 'node:fs'
import { cp } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'node_modules', 'pdfjs-dist')
for (const dir of ['standard_fonts', 'wasm']) {
  if (!existsSync(path.join(SRC, dir))) continue
  await cp(path.join(SRC, dir), path.join(ROOT, 'public', 'pdfjs', dir), { recursive: true })
}
