import { Link } from 'react-router'
import { SUBJECT_BADGE, subjectStyle, TopBar } from '../components/ui'
import { EXAM_BY_ID, examLabel, SUBJECTS, TASK_BY_ID } from '../data'
import { topicName } from '../data/topics'
import { useProgress } from '../lib/hooks'
import { setQueryString } from '../lib/sets'

export function Review() {
  const { latest, wrong } = useProgress()
  const wrongTasks = [...wrong].map((id) => TASK_BY_ID.get(id)).filter((t) => !!t)

  return (
    <>
      <TopBar title="Powtórka błędów" back={false} />
      <p className="muted small" style={{ marginTop: 0 }}>
        Tu trafiają zadania, za które przy ostatniej próbie nie dostałeś kompletu punktów. Gdy rozwiążesz je poprawnie,
        znikną z listy.
      </p>
      {wrongTasks.length === 0 && <div className="empty">Brak zadań do powtórki. Tak trzymaj! 💪</div>}
      <div className="list">
        {SUBJECTS.map((s) => {
          const list = wrongTasks.filter((t) => t.subject === s.id)
          if (!list.length) return null
          return (
            <div key={s.id} className="card" style={subjectStyle(s.id)}>
              <div className="row subject-tile" style={{ borderLeft: 0 }}>
                <span className="badge">{SUBJECT_BADGE[s.id]}</span>
                <b className="grow">{s.name}</b>
                <span className="pill bad">{list.length}</span>
              </div>
              <ul className="small" style={{ paddingLeft: 18, margin: '10px 0' }}>
                {list.slice(0, 6).map((t) => {
                  const a = latest.get(t.id)!
                  return (
                    <li key={t.id}>
                      Zad. {t.number} ({examLabel(EXAM_BY_ID.get(t.examId)!)}) – {topicName(t.subject, t.topic)} ·{' '}
                      {a.points}/{a.maxPoints} pkt
                    </li>
                  )
                })}
                {list.length > 6 && <li className="muted">i {list.length - 6} więcej…</li>}
              </ul>
              <Link className="btn primary block" to={`/zadania?${setQueryString({ subject: s.id, review: true })}`}>
                Powtórz ({list.length})
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
