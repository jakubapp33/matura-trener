import type { CSSProperties, ReactNode } from 'react'
import { useNavigate } from 'react-router'
import type { Subject } from '../types'

export function TopBar({ title, back = true, right }: { title: string; back?: boolean; right?: ReactNode }) {
  const nav = useNavigate()
  return (
    <div className="topbar">
      {back && (
        <button className="back" onClick={() => (history.length > 1 ? nav(-1) : nav('/'))} aria-label="Wstecz">
          ‹
        </button>
      )}
      <h1>{title}</h1>
      {right}
    </div>
  )
}

export function ProgressBar({ value, subject }: { value: number; subject?: Subject }) {
  return (
    <div className="progress" style={subjectStyle(subject)}>
      <div style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
}

export const subjectStyle = (s?: Subject) => (s ? ({ '--subject': `var(--${s})` } as CSSProperties) : undefined)

export const SUBJECT_BADGE: Record<Subject, string> = { polski: 'Pl', angielski: 'En', matematyka: 'Ma' }
