import { useLiveQuery } from 'dexie-react-hooks'
import { db, type LearnResult } from '../db/progress'

/** wyniki z sekcji Nauka: id → wynik */
export function useLearn(): Map<string, LearnResult> {
  const list = useLiveQuery(() => db.learn.toArray(), [])
  return new Map((list ?? []).map((l) => [l.id, l]))
}

export function ScoreBadge({ r }: { r?: LearnResult }) {
  if (!r) return <span className="muted small">nowe</span>
  const pct = Math.round(r.best * 100)
  return <span className={`pill ${pct >= 80 ? 'good' : pct < 50 ? 'bad' : ''}`}>{pct}%</span>
}
