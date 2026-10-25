import { useState } from 'react'
import { EXAM_BY_ID, examLabel } from '../data'
import { topicName } from '../data/topics'
import type { Segment, Task } from '../types'
import { PdfPages } from './PdfPages'

/** Nagłówek zadania + strony arkusza (+ nagranie przy zadaniach ze słuchu). */
export function TaskView({ task }: { task: Task }) {
  const exam = EXAM_BY_ID.get(task.examId)!
  return (
    <>
      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
        <b style={{ fontSize: '1.1rem' }}>Zadanie {task.number}</b>
        <span className="pill">{examLabel(exam)}</span>
        <span className="pill">{topicName(task.subject, task.topic)}</span>
        <span className="pill">
          {task.type === 'zamkniete' ? 'zamknięte' : 'otwarte'} · {task.maxPoints} pkt
        </span>
      </div>
      {task.topic === 'sluchanie' && exam.audioUrl && (
        <div className="card" style={{ padding: 10, marginBottom: 8 }}>
          <div className="small muted">Nagranie CKE (potrzebny internet) – zadanie {task.number}</div>
          <audio controls preload="none" src={exam.audioUrl} />
        </div>
      )}
      {task.context && <ContextTexts file={exam.examFile} segments={task.context} />}
      <PdfPages file={exam.examFile} pages={task.examPages} segments={task.crop} />
    </>
  )
}

/** Rozwijany fragment zasad oceniania CKE dla zadania. */
export function KeyPages({ task, open: initial = false }: { task: Task; open?: boolean }) {
  const [open, setOpen] = useState(initial)
  const exam = EXAM_BY_ID.get(task.examId)!
  if (!task.keyPages.length) return null
  return (
    <div style={{ marginTop: 10 }}>
      <button className="btn block" onClick={() => setOpen(!open)}>
        {open ? 'Ukryj zasady oceniania' : '📘 Pokaż rozwiązanie i zasady oceniania CKE'}
      </button>
      {open && (
        <div style={{ marginTop: 8 }}>
          <PdfPages file={exam.keyFile} pages={task.keyPages} segments={task.keyCrop} />
        </div>
      )}
    </div>
  )
}

/** Wybór liczby punktów przy samoocenie. */
export function PointsPicker({ max, value, onChange }: { max: number; value?: number; onChange: (n: number) => void }) {
  return (
    <div className="options">
      {Array.from({ length: max + 1 }, (_, n) => (
        <button key={n} className={`opt${value === n ? ' sel' : ''}`} onClick={() => onChange(n)}>
          {n}
        </button>
      ))}
    </div>
  )
}

/** Wspólne teksty do kilku zadań (np. „Tekst 1.” i „Tekst 2.” w teście z polskiego) – zwinięte, by nie zasłaniać zadania. */
function ContextTexts({ file, segments }: { file: string; segments: Segment[] }) {
  const k = `ctx:${file}:${segments[0].p}`
  const [open, setOpen] = useState(() => {
    try {
      return sessionStorage.getItem(k) === '1'
    } catch {
      return false
    }
  })
  const toggle = () => {
    setOpen(!open)
    try {
      sessionStorage.setItem(k, open ? '0' : '1')
    } catch {
      /* ignoruj */
    }
  }
  const pages = [...new Set(segments.map((s) => s.p))]
  return (
    <div style={{ marginBottom: 10 }}>
      <button className="btn block" onClick={toggle}>
        {open ? 'Ukryj teksty' : `📖 Teksty do tego zadania (str. ${pages[0]}${pages.length > 1 ? `–${pages[pages.length - 1]}` : ''})`}
      </button>
      {open && (
        <div style={{ marginTop: 8 }}>
          <PdfPages file={file} pages={pages} segments={segments} />
        </div>
      )}
    </div>
  )
}
