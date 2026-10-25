import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { subjectStyle, TopBar } from '../components/ui'
import { examsOf, subjectName } from '../data'
import { TOPICS } from '../data/topics'
import { isSubject, useProgress } from '../lib/hooks'
import { buildSet, setQueryString } from '../lib/sets'
import type { TaskType } from '../types'

export function TypeFilter() {
  const { subject, type } = useParams()
  const { latest } = useProgress()
  const [year, setYear] = useState<number>()
  const [topic, setTopic] = useState<string>()
  const [onlyNew, setOnlyNew] = useState(false)
  if (!isSubject(subject) || (type !== 'zamkniete' && type !== 'otwarte')) return <Navigate to="/" />

  const q = { subject, type: type as TaskType, year, topic }
  const all = buildSet(q)
  const set = onlyNew ? all.filter((t) => !latest.has(t.id)) : all
  const years = [...new Set(examsOf(subject).map((e) => e.year))]
  const topics = TOPICS[subject].filter((t) => buildSet({ subject, type: type as TaskType }).some((x) => x.topic === t.id))

  return (
    <div style={subjectStyle(subject)}>
      <TopBar title={`${subjectName(subject)} – ${type === 'zamkniete' ? 'zamknięte' : 'otwarte'}`} />
      <p className="muted small" style={{ marginTop: 0 }}>
        {type === 'zamkniete'
          ? 'Zadania zamknięte są sprawdzane automatycznie zaraz po kliknięciu „Sprawdź”.'
          : 'Przy zadaniach otwartych po kliknięciu „Sprawdź” zobaczysz oficjalne zasady oceniania CKE i sam przyznasz sobie punkty.'}
      </p>

      <h2>Rok</h2>
      <div className="chips">
        <button className={`chip${!year ? ' on' : ''}`} onClick={() => setYear(undefined)}>
          Wszystkie
        </button>
        {years.map((y) => (
          <button key={y} className={`chip${year === y ? ' on' : ''}`} onClick={() => setYear(y)}>
            {y}
          </button>
        ))}
      </div>

      {topics.length > 1 && (
        <>
          <h2>Dział</h2>
          <div className="chips" style={{ flexWrap: 'wrap' }}>
            <button className={`chip${!topic ? ' on' : ''}`} onClick={() => setTopic(undefined)}>
              Wszystkie
            </button>
            {topics.map((t) => (
              <button key={t.id} className={`chip${topic === t.id ? ' on' : ''}`} onClick={() => setTopic(t.id)}>
                {t.name}
              </button>
            ))}
          </div>
        </>
      )}

      <label className="row" style={{ margin: '18px 0' }}>
        <input type="checkbox" checked={onlyNew} onChange={(e) => setOnlyNew(e.target.checked)} />
        <span>Tylko zadania, których jeszcze nie robiłem</span>
      </label>

      <Link
        className="btn primary block"
        to={`/zadania?${setQueryString({ ...q, onlyNew })}`}
        style={set.length ? undefined : { pointerEvents: 'none', opacity: 0.5 }}
      >
        Start – {set.length} zadań
      </Link>
    </div>
  )
}
