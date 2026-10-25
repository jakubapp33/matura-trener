import { Link } from 'react-router'
import { ProgressBar, SUBJECT_BADGE, subjectStyle } from '../components/ui'
import { SUBJECTS } from '../data'
import { coverage, tasksOfSubject, useProgress } from '../lib/hooks'

const startOfDay = () => new Date().setHours(0, 0, 0, 0)

export function Home() {
  const { attempts, latest, wrong } = useProgress()
  const today = attempts.filter((a) => a.date >= startOfDay()).length

  return (
    <>
      <div className="topbar">
        <h1>Matura Trener</h1>
      </div>

      <div className="grid2">
        <div className="card stat">
          <span className="muted small">Dziś zrobione</span>
          <b>{today}</b>
          <span className="muted small">zadań</span>
        </div>
        <Link to="/powtorka" className="card stat">
          <span className="muted small">Do powtórki</span>
          <b style={{ color: wrong.size ? 'var(--bad)' : undefined }}>{wrong.size}</b>
          <span className="muted small">zadań z błędem ›</span>
        </Link>
      </div>

      <h2>Przedmioty</h2>
      <div className="list">
        {SUBJECTS.map((s) => {
          const c = coverage(tasksOfSubject(s.id), latest)
          return (
            <Link key={s.id} to={`/p/${s.id}`} className="card subject-tile" style={subjectStyle(s.id)}>
              <span className="badge">{SUBJECT_BADGE[s.id]}</span>
              <div className="grow">
                <div className="row">
                  <b className="grow">{s.name}</b>
                  <span className="muted small">
                    {c.done}/{c.total}
                  </span>
                </div>
                <div style={{ margin: '8px 0 4px' }}>
                  <ProgressBar value={c.pct} subject={s.id} />
                </div>
                <span className="muted small">{c.total ? `${c.pct}% zadań zrobionych` : 'Brak zadań w bazie'}</span>
              </div>
              <span className="chev">›</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
