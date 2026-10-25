import { Link, Navigate, useParams } from 'react-router'
import { subjectStyle, TopBar } from '../../components/ui'
import { ALL_GRAMMAR_EXERCISES, GRAMMAR } from '../../learn/grammar'
import { ScoreBadge, useLearn } from '../../learn/hooks'
import { Quiz } from '../../learn/Quiz'
import { Rich } from '../../learn/Rich'

export function GrammarList() {
  const learn = useLearn()
  return (
    <div style={subjectStyle('angielski')}>
      <TopBar title="Gramatyka angielska" />
      <p className="muted small" style={{ marginTop: 0 }}>
        Każda lekcja: krótkie wyjaśnienie po polsku, przykłady i ćwiczenia sprawdzane od razu. Zadania z „Znajomości środków językowych” na maturze
        sprawdzają właśnie te rzeczy.
      </p>
      <Link to="/nauka/gramatyka/test" className="btn primary block" style={{ marginBottom: 12 }}>
        🎯 Test mieszany – 20 losowych pytań
        <ScoreBadge r={learn.get('gram:test')} />
      </Link>
      <div className="list">
        {GRAMMAR.map((l, i) => (
          <Link key={l.id} to={`/nauka/gramatyka/${l.id}`} className="card row">
            <span className="muted small" style={{ width: 22 }}>
              {i + 1}.
            </span>
            <div className="grow">
              <b>{l.title}</b>
              <div className="muted small">{l.sub}</div>
            </div>
            <ScoreBadge r={learn.get(`gram:${l.id}`)} />
            <span className="chev">›</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function GrammarLesson() {
  const { id } = useParams()
  if (id === 'test') {
    return (
      <div style={subjectStyle('angielski')}>
        <TopBar title="Test mieszany" />
        <p className="muted small" style={{ marginTop: 0 }}>
          20 losowych pytań ze wszystkich lekcji. Po każdym zakończeniu możesz wylosować nowy zestaw.
        </p>
        <Quiz id="gram:test" exercises={ALL_GRAMMAR_EXERCISES} limit={20} />
      </div>
    )
  }
  const i = GRAMMAR.findIndex((l) => l.id === id)
  if (i < 0) return <Navigate to="/nauka/gramatyka" />
  const l = GRAMMAR[i]
  const next = GRAMMAR[i + 1]
  return (
    <div style={subjectStyle('angielski')}>
      <TopBar title={l.title} />
      <div className="card">
        <Rich text={l.body} />
      </div>
      <h2>Ćwiczenia</h2>
      <Quiz key={l.id} id={`gram:${l.id}`} exercises={l.exercises} />
      {next && (
        <Link to={`/nauka/gramatyka/${next.id}`} className="btn block" style={{ marginTop: 12 }}>
          Następna lekcja: {next.title} ›
        </Link>
      )}
    </div>
  )
}
