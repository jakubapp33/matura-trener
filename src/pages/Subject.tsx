import { Link, Navigate, useParams } from 'react-router'
import { ProgressBar, subjectStyle, TopBar } from '../components/ui'
import { examsOf, subjectName } from '../data'
import { coverage, isSubject, tasksOfSubject, useProgress } from '../lib/hooks'
import { setQueryString } from '../lib/sets'
import type { Subject } from '../types'

const TOPIC_HINT: Record<Subject, string> = {
  matematyka: 'np. same logarytmy',
  polski: 'np. test historycznoliteracki',
  angielski: 'np. same środki językowe',
}

export function SubjectPage() {
  const { subject } = useParams()
  const { latest, wrong } = useProgress()
  if (!isSubject(subject)) return <Navigate to="/" />
  const tasks = tasksOfSubject(subject)
  const c = coverage(tasks, latest)
  const closed = tasks.filter((t) => t.type === 'zamkniete').length
  const wrongHere = tasks.filter((t) => wrong.has(t.id)).length

  return (
    <div style={subjectStyle(subject)}>
      <TopBar title={subjectName(subject)} />

      <div className="card">
        <div className="row">
          <span className="grow">
            Zrobione <b>{c.done}</b> z {c.total} zadań
          </span>
          <span className="pill good">{c.perfect} na max</span>
        </div>
        <div style={{ marginTop: 10 }}>
          <ProgressBar value={c.pct} subject={subject} />
        </div>
      </div>

      <h2>Co chcesz robić?</h2>
      <div className="grid2">
        <Link to={`/p/${subject}/arkusze`} className="btn mode-btn">
          <span className="ico">📄</span>
          Cały arkusz
          <span className="muted small">{examsOf(subject).length} arkuszy · trening lub egzamin</span>
        </Link>
        <Link to={`/p/${subject}/dzialy`} className="btn mode-btn">
          <span className="ico">🧩</span>
          Działami
          <span className="muted small">{TOPIC_HINT[subject]}</span>
        </Link>
        <Link to={`/p/${subject}/typ/zamkniete`} className="btn mode-btn">
          <span className="ico">☑️</span>
          Zamknięte
          <span className="muted small">{closed} zadań · sprawdzane od razu</span>
        </Link>
        <Link to={`/p/${subject}/typ/otwarte`} className="btn mode-btn">
          <span className="ico">✍️</span>
          Otwarte
          <span className="muted small">{tasks.length - closed} zadań · z kluczem CKE</span>
        </Link>
      </div>

      <div style={{ marginTop: 10 }}>
        <Link
          to={`/zadania?${setQueryString({ subject, review: true })}`}
          className={`btn block${wrongHere ? '' : ' muted'}`}
          style={wrongHere ? undefined : { pointerEvents: 'none', opacity: 0.5 }}
        >
          ↻ Powtórka błędów ({wrongHere})
        </Link>
      </div>
    </div>
  )
}
