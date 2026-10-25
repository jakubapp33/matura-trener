import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs'
import workerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

type PdfDoc = Awaited<ReturnType<typeof pdfjs.getDocument>['promise']>

const base = import.meta.env.BASE_URL
export const assetUrl = (file: string) => `${base}${file}`

const docs = new Map<string, Promise<PdfDoc>>()

/**
 * Otwiera PDF (z pamięci, jeśli był już otwarty). Plik jest pobierany w całości,
 * dzięki czemu service worker zapisuje go w cache i działa później offline.
 */
export function openPdf(file: string): Promise<PdfDoc> {
  let p = docs.get(file)
  if (!p) {
    p = pdfjs.getDocument({
      url: assetUrl(file),
      disableRange: true,
      disableStream: true,
      standardFontDataUrl: `${base}pdfjs/standard_fonts/`,
    }).promise
    p.catch(() => docs.delete(file))
    docs.set(file, p)
  }
  return p
}

/** Renderuje stronę na canvas o zadanej szerokości CSS (w pikselach). */
export async function renderPage(file: string, pageNo: number, canvas: HTMLCanvasElement, cssWidth: number) {
  const doc = await openPdf(file)
  const page = await doc.getPage(pageNo)
  const base = page.getViewport({ scale: 1 })
  const dpr = Math.min(window.devicePixelRatio || 1, 3)
  const viewport = page.getViewport({ scale: (cssWidth / base.width) * dpr })
  canvas.width = Math.floor(viewport.width)
  canvas.height = Math.floor(viewport.height)
  canvas.style.width = `${cssWidth}px`
  canvas.style.height = `${Math.floor(viewport.height / dpr)}px`
  const canvasContext = canvas.getContext('2d')
  if (!canvasContext) throw new Error('Brak kontekstu canvas')
  const task = page.render({ canvasContext, viewport })
  await task.promise
  return task
}

const CACHE = 'pdfs'

/** Czy plik jest zapisany w pamięci telefonu (Cache Storage service workera). */
export async function isCached(file: string) {
  if (!('caches' in window)) return false
  const c = await caches.open(CACHE)
  return !!(await c.match(new URL(assetUrl(file), location.href).href))
}

/** Pobiera pliki do pamięci offline. */
export async function downloadForOffline(files: string[], onProgress?: (done: number) => void) {
  const c = await caches.open(CACHE)
  let done = 0
  for (const f of files) {
    const url = new URL(assetUrl(f), location.href).href
    if (!(await c.match(url))) {
      const res = await fetch(url)
      if (res.ok) await c.put(url, res)
    }
    onProgress?.(++done)
  }
}

export async function removeCached(files: string[]) {
  const c = await caches.open(CACHE)
  await Promise.all(files.map((f) => c.delete(new URL(assetUrl(f), location.href).href)))
}
