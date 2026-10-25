import { useEffect, useRef, useState } from 'react'

export function fmtTime(s: number) {
  const m = Math.floor(Math.max(0, s) / 60)
  const r = Math.max(0, s) % 60
  return `${m}:${String(r).padStart(2, '0')}`
}

/** Odliczanie: startuje od razu; po czasie wywołuje onEnd (raz). */
export function Countdown({ seconds, label, onEnd }: { seconds: number; label: string; onEnd?: () => void }) {
  const [left, setLeft] = useState(seconds)
  const [paused, setPaused] = useState(false)
  const ended = useRef(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setLeft((l) => l - 1), 1000)
    return () => clearInterval(t)
  }, [paused])
  useEffect(() => {
    if (left <= 0 && !ended.current) {
      ended.current = true
      try {
        navigator.vibrate?.(300)
      } catch {
        /* brak wibracji */
      }
      onEnd?.()
    }
  }, [left, onEnd])
  const pct = Math.max(0, Math.min(100, (left / seconds) * 100))
  return (
    <div className="card countdown">
      <div className="row">
        <span className="grow muted small">{label}</span>
        <button className="chip" onClick={() => setPaused(!paused)}>
          {paused ? '▶ Wznów' : '⏸ Pauza'}
        </button>
      </div>
      <div className={`timer-big${left <= 60 ? ' warn' : ''}`}>{left > 0 ? fmtTime(left) : 'Czas minął'}</div>
      <div className="progress">
        <div style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

/** Nagrywanie wypowiedzi (mikrofon) – zostaje tylko w telefonie, do odsłuchania. */
export function Recorder({ autoStart = false }: { autoStart?: boolean }) {
  const [state, setState] = useState<'idle' | 'rec' | 'done' | 'error'>('idle')
  const [url, setUrl] = useState<string>()
  const rec = useRef<MediaRecorder | null>(null)
  const chunks = useRef<Blob[]>([])
  const stream = useRef<MediaStream | null>(null)

  const start = async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.current = s
      const r = new MediaRecorder(s)
      chunks.current = []
      r.ondataavailable = (e) => e.data.size && chunks.current.push(e.data)
      r.onstop = () => {
        const blob = new Blob(chunks.current, { type: r.mimeType || 'audio/mp4' })
        setUrl((old) => {
          if (old) URL.revokeObjectURL(old)
          return URL.createObjectURL(blob)
        })
        s.getTracks().forEach((t) => t.stop())
        setState('done')
      }
      r.start()
      rec.current = r
      setState('rec')
    } catch {
      setState('error')
    }
  }
  const stop = () => rec.current?.state === 'recording' && rec.current.stop()

  useEffect(() => {
    if (autoStart) void start()
    return () => {
      if (rec.current?.state === 'recording') rec.current.stop()
      stream.current?.getTracks().forEach((t) => t.stop())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (typeof MediaRecorder === 'undefined')
    return <div className="muted small">Ta przeglądarka nie obsługuje nagrywania – mów na głos albo nagraj się dyktafonem w telefonie.</div>
  return (
    <div className="card recorder">
      {state === 'idle' && (
        <button className="btn block" onClick={start}>
          🎙️ Nagrywaj swoją wypowiedź
        </button>
      )}
      {state === 'rec' && (
        <button className="btn danger block" onClick={stop}>
          <span className="rec-dot" /> Nagrywam… zatrzymaj
        </button>
      )}
      {state === 'done' && url && (
        <>
          <div className="small muted">Odsłuchaj się – czy mówisz płynnie, na temat, czy masz tezę i przykłady?</div>
          <audio controls src={url} style={{ width: '100%', marginTop: 6 }} />
          <button className="btn block" style={{ marginTop: 6 }} onClick={start}>
            Nagraj ponownie
          </button>
        </>
      )}
      {state === 'error' && <div className="muted small">Brak dostępu do mikrofonu. Zezwól na mikrofon w ustawieniach Safari albo ćwicz bez nagrywania.</div>}
    </div>
  )
}

/** Lista kontrolna samooceny – wynik 0–1. */
export function Checklist({ items, onChange }: { items: string[]; onChange: (score: number, checked: boolean[]) => void }) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false))
  return (
    <div className="checklist">
      {items.map((it, i) => (
        <label key={it} className="row check-row">
          <input
            type="checkbox"
            checked={checked[i]}
            onChange={() => {
              const next = checked.map((c, j) => (j === i ? !c : c))
              setChecked(next)
              onChange(next.filter(Boolean).length / items.length, next)
            }}
          />
          <span>{it}</span>
        </label>
      ))}
    </div>
  )
}
