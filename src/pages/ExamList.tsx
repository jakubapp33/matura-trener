import { useLiveQuery } from 'dexie-react-hooks'
import { Link, Navigate, useParams } from 'react-router'
import { ProgressBar, subjectStyle, TopBar } from '../components/ui'
import { examLabel, examMaxPoints, examsOf, subjectName, tasksOfExam } from '../data'
import { db } from '../db/progress'
import { percent } from '../lib/grading'
import { coverage, isSubject, useProgress } from '../lib/hooks'
import { setQueryString } from '../lib/sets'

export function ExamList() {
  const { subject } = useParams()
  const { attempts, latest } = useProgress()
  const sessions = useLiveQuery(() => db.sessions.toArray(), [], [])
  if (!isSubject(subject)) return <Navigate to="/" />
  const exams = examsOf(subject)

  return (
    <div style={subjectStyle(subject)}>
      <TopBar title={`${subjectName(subject)} – arkusze`} />
      <p className="muted small" style={{ marginTop: 0 }}>
        <b>Trening</b> – sprawdzasz każde zadanie od razu. <b>Egzamin</b> – z zegarem, wynik dopiero na końcu.
      </p>
      <div className="list">
        {exams.map((e) => {
          const tasks = tasksOfExam(e.id)
          const c = coverage(tasks, latest)
          // ostatni wynik w trybie egzaminu
          const examAttempts = attempts.filter((a) => a.examId === e.id && a.mode === 'egzamin')
          const lastDate = Math.max(0, ...examAttempts.map((a) => a.date))
          const last = examAttempts.filter((a) => a.date === lastDate)
          const lastPts = last.reduce((s, a) => s + a.points, 0)
          const running = sessions.some((s) => s.examId === e.id)
          return (
            <div key={e.id} className="card">
              <div className="row">
                <div className="grow">
                  <b>{examLabel(e)}</b>
                  <div className="muted small">
                    {e.name} · {tasks.length} zadań · {examMaxPoints(e.id)} pkt · {e.minutes} min
                  </div>
                </div>
                {last.length > 0 && <span className="pill">egzamin: {percent(lastPts, examMaxPoints(e.id))}%</span>}
              </div>
              <div style={{ margin: '10px 0' }}>
                <ProgressBar value={c.pct} subject={subject} />
                <span className="muted small">
                  {c.done}/{c.total} zadań zrobionych
                </span>
              </div>
              {tasks.length === 0 ? (
                <span className="muted small">Zadania z tego arkusza nie są jeszcze opisane.</span>
              ) : (
                <div className="grid2">
                  <Link className="btn" to={`/zadania?${setQueryString({ exam: e.id })}`}>
                    Trening
                  </Link>
                  <Link className="btn primary" to={`/egzamin/${e.id}`}>
                    {running ? '⏱ Wróć do egzaminu' : '⏱ Egzamin'}
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
