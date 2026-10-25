import { useEffect, useState } from 'react'

/** Odliczanie do końca egzaminu. Liczone od zapisanego czasu startu, więc działa też po zamknięciu aplikacji. */
export function Timer({ startedAt, minutes, onEnd }: { startedAt: number; minutes: number; onEnd?: () => void }) {
  const end = startedAt + minutes * 60_000
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  const left = Math.max(0, end - now)
  useEffect(() => {
    if (left === 0) onEnd?.()
  }, [left === 0]) // eslint-disable-line react-hooks/exhaustive-deps
  const h = Math.floor(left / 3_600_000)
  const m = Math.floor((left % 3_600_000) / 60_000)
  const s = Math.floor((left % 60_000) / 1000)
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    <span className={`timer${left < 10 * 60_000 ? ' low' : ''}`} aria-label="Pozostały czas">
      {h}:{pad(m)}:{pad(s)}
    </span>
  )
}
