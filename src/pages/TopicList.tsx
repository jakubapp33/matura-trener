import { Link, Navigate, useParams } from 'react-router'
import { ProgressBar, subjectStyle, TopBar } from '../components/ui'
import { subjectName } from '../data'
import { TOPICS } from '../data/topics'
import { coverage, isSubject, tasksOfSubject, useProgress } from '../lib/hooks'
import { setQueryString } from '../lib/sets'

export function TopicList() {
  const { subject } = useParams()
  const { latest } = useProgress()
  if (!isSubject(subject)) return <Navigate to="/" />
  const tasks = tasksOfSubject(subject)

  return (
    <div style={subjectStyle(subject)}>
      <TopBar title={`${subjectName(subject)} – działy`} />
      <div className="list">
        {TOPICS[subject].map((t) => {
          const inTopic = tasks.filter((x) => x.topic === t.id)
          if (!inTopic.length) return null
          const c = coverage(inTopic, latest)
          return (
            <Link key={t.id} to={`/zadania?${setQueryString({ subject, topic: t.id })}`} className="card">
              <div className="row">
                <b className="grow">{t.name}</b>
                <span className="muted small">
                  {c.done}/{c.total}
                </span>
                <span className="chev">›</span>
              </div>
              <div style={{ marginTop: 8 }}>
                <ProgressBar value={c.pct} subject={subject} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
