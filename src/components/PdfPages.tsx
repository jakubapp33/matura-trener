import { useEffect, useRef, useState } from 'react'
import { renderPage } from '../lib/pdf'
import type { Segment } from '../types'

interface Props {
  file: string
  pages: number[]
  /** pokaż tylko te fragmenty stron (np. jedno zadanie zamiast całej strony z dwoma zadaniami) */
  segments?: Segment[]
}

const ZOOMS = [1, 1.5, 2]

/** Wyświetla wybrane strony PDF jedna pod drugą. Przy powiększeniu można przewijać w bok. */
export function PdfPages({ file, pages, segments }: Props) {
  const wrap = useRef<HTMLDivElement>(null)
  const holder = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [zoom, setZoom] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')
  const [full, setFull] = useState(false)
  const parts: Segment[] = segments?.length && !full ? segments : pages.map((p) => ({ p, t: 0, b: 1 }))

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(Math.floor(e.contentRect.width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const key = `${file}|${parts.map((x) => `${x.p}:${x.t}-${x.b}`).join(',')}`
  useEffect(() => {
    const el = holder.current
    if (!el || !width) return
    let cancelled = false
    setStatus('loading')
    el.replaceChildren()
    ;(async () => {
      try {
        for (const part of parts) {
          const box = document.createElement('div')
          box.className = 'pdf-seg'
          const canvas = document.createElement('canvas')
          box.appendChild(canvas)
          el.appendChild(box)
          await renderPage(file, part.p, canvas, Math.floor(width * ZOOMS[zoom]))
          if (cancelled) return
          // przycięcie: widać tylko pasek strony od t do b
          const h = parseFloat(canvas.style.height)
          box.style.height = `${Math.round((part.b - part.t) * h)}px`
          canvas.style.marginTop = `${-Math.round(part.t * h)}px`
        }
        setStatus('ok')
      } catch (e) {
        console.error(e)
        if (!cancelled) setStatus('error')
      }
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, width, zoom])

  return (
    <div>
      <div className="pdf-tools">
        <span className="muted small grow">
          {(() => {
            const ps = [...new Set(parts.map((x) => x.p))]
            return ps.length === 1 ? `Strona ${ps[0]}` : `Strony ${ps[0]}–${ps[ps.length - 1]}`
          })()}
        </span>
        {!!segments?.length && (
          <button className="chip" onClick={() => setFull(!full)}>
            {full ? 'Tylko to zadanie' : 'Cała strona'}
          </button>
        )}
        <button className="chip" onClick={() => setZoom((z) => Math.max(0, z - 1))} disabled={zoom === 0} aria-label="Pomniejsz">
          −
        </button>
        <span className="small muted">{Math.round(ZOOMS[zoom] * 100)}%</span>
        <button
          className="chip"
          onClick={() => setZoom((z) => Math.min(ZOOMS.length - 1, z + 1))}
          disabled={zoom === ZOOMS.length - 1}
          aria-label="Powiększ"
        >
          +
        </button>
      </div>
      <div className="pdf-wrap" ref={wrap}>
        {status === 'loading' && <div className="pdf-status">Wczytywanie arkusza…</div>}
        {status === 'error' && (
          <div className="pdf-status">
            Nie udało się wczytać arkusza. Jeśli jesteś offline, otwórz go raz z internetem albo pobierz arkusze w
            Ustawieniach.
          </div>
        )}
        <div ref={holder} />
      </div>
    </div>
  )
}
