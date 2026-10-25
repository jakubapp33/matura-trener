import { Link, Navigate, useParams } from 'react-router'
import { subjectStyle, TopBar } from '../../components/ui'
import { ScoreBadge, useLearn } from '../../learn/hooks'
import { MATH } from '../../learn/math'
import { Quiz } from '../../learn/Quiz'
import { Rich } from '../../learn/Rich'
import { buildSet, setQueryString } from '../../lib/sets'

const FREQ = ['', 'czasem', 'często', 'prawie zawsze']

export function MathList() {
  const learn = useLearn()
  return (
    <div style={subjectStyle('matematyka')}>
      <TopBar title="Typowe zadania z matematyki" />
      <p className="muted small" style={{ marginTop: 0 }}>
        Najczęstsze typy zadań z matury podstawowej: jak je rozpoznać, sposób krok po kroku, przykład i pułapki. Po każdym – krótki trening i link do
        prawdziwych zadań z arkuszy.
      </p>
      <div className="list">
        {MATH.map((m) => (
          <Link key={m.id} to={`/nauka/matematyka/${m.id}`} className="card row">
            <div className="grow">
              <b>{m.title}</b>
              <div className="muted small">na maturze: {FREQ[m.freq]}</div>
            </div>
            <ScoreBadge r={learn.get(`mat:${m.id}`)} />
            <span className="chev">›</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function MathMethodPage() {
  const { id } = useParams()
  const i = MATH.findIndex((m) => m.id === id)
  if (i < 0) return <Navigate to="/nauka/matematyka" />
  const m = MATH[i]
  const next = MATH[i + 1]
  const real = buildSet({ subject: 'matematyka', topic: m.topic })
  return (
    <div style={subjectStyle('matematyka')}>
      <TopBar title={m.title} />
      <div className="card">
        <Rich text={m.body} />
      </div>
      <h2>Sprawdź się</h2>
      <Quiz key={m.id} id={`mat:${m.id}`} exercises={m.exercises} />
      {real.length > 0 && (
        <Link to={`/zadania?${setQueryString({ subject: 'matematyka', topic: m.topic })}`} className="btn primary block" style={{ marginTop: 12 }}>
          📄 Zadania z matur z tego działu ({real.length})
        </Link>
      )}
      {next && (
        <Link to={`/nauka/matematyka/${next.id}`} className="btn block" style={{ marginTop: 8 }}>
          Dalej: {next.title} ›
        </Link>
      )}
    </div>
  )
}
