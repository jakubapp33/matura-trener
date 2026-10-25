import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { AnswerPanel } from '../components/AnswerPanel'
import { TaskView } from '../components/TaskView'
import { Timer } from '../components/Timer'
import { subjectStyle, TopBar } from '../components/ui'
import { EXAM_BY_ID, examLabel, examMaxPoints, subjectName, tasksOfExam } from '../data'
import { db } from '../db/progress'
import { isAutoGraded } from '../lib/grading'

export function ExamMode() {
  const { examId = '' } = useParams()
  const nav = useNavigate()
  const exam = EXAM_BY_ID.get(examId)
  const session = useLiveQuery(() => db.sessions.get(examId), [examId], null)
  const [i, setI] = useState(0)
  if (!exam) return <Navigate to="/" />
  const tasks = tasksOfExam(examId)
  const title = `${subjectName(exam.subject)} ${examLabel(exam)}`

  if (session === null) return <TopBar title={title} />

  if (!session)
    return (
      <div style={subjectStyle(exam.subject)}>
        <TopBar title={title} />
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Tryb egzaminu</h2>
          <p>
            {exam.name}: <b>{tasks.length} zadań</b>, <b>{examMaxPoints(examId)} pkt</b>, czas <b>{exam.minutes} min</b>.
          </p>
          <ul className="muted small" style={{ paddingLeft: 18 }}>
            <li>Zegar odlicza czas także wtedy, gdy zamkniesz aplikację.</li>
            <li>Odpowiedzi nie są sprawdzane w trakcie – wynik zobaczysz po kliknięciu „Zakończ egzamin”.</li>
            <li>Zadania otwarte rozwiązuj na kartce; po zakończeniu ocenisz je według zasad CKE.</li>
          </ul>
          <button
            className="btn primary block"
            onClick={() => db.sessions.put({ examId, startedAt: Date.now(), answers: {} })}
          >
            Rozpocznij egzamin
          </button>
        </div>
      </div>
    )

  const cur = Math.min(i, tasks.length - 1)
  const task = tasks[cur]
  const answers = session.answers[task.id] ?? []
  // modify zamiast update({'answers.id': …}) – id zadań zawierają kropki (np. „z12.1")
  const setAnswers = (a: (string | undefined)[]) =>
    db.sessions
      .where('examId')
      .equals(examId)
      .modify((s) => {
        s.answers[task.id] = a.map((x) => x ?? '')
      })
  const go = (n: number) => {
    setI(n)
    window.scrollTo(0, 0)
  }
  const finish = () => nav(`/egzamin/${examId}/wynik`, { replace: true })

  return (
    <div style={subjectStyle(exam.subject)}>
      <TopBar title={title} right={<Timer startedAt={session.startedAt} minutes={exam.minutes} />} />
      <div className="task-dots">
        {tasks.map((t, n) => (
          <button
            key={t.id}
            className={`${session.answers[t.id]?.some(Boolean) ? 'done' : ''}${n === cur ? ' cur' : ''}`}
            onClick={() => go(n)}
          >
            {t.number}
          </button>
        ))}
      </div>
      <TaskView task={task} />
      <div className="answer-panel card">
        {isAutoGraded(task) ? (
          <AnswerPanel key={task.id} items={task.items!} answers={answers} onChange={setAnswers} />
        ) : (
          <>
            <div className="small muted" style={{ marginBottom: 6 }}>
              Zadanie otwarte – rozwiąż na kartce. Możesz zapisać notatki:
            </div>
            <textarea
              key={task.id}
              defaultValue={answers[0] ?? ''}
              onBlur={(e) => setAnswers([e.target.value])}
              placeholder="Notatki (opcjonalnie)"
            />
          </>
        )}
      </div>
      <div className="navbar">
        <button className="btn" disabled={cur === 0} onClick={() => go(cur - 1)}>
          ‹ Poprzednie
        </button>
        {cur < tasks.length - 1 ? (
          <button className="btn" onClick={() => go(cur + 1)}>
            Następne ›
          </button>
        ) : (
          <button className="btn primary" onClick={() => confirm('Zakończyć egzamin i zobaczyć wynik?') && finish()}>
            Zakończ egzamin
          </button>
        )}
      </div>
      <button
        className="btn block"
        style={{ marginTop: 10 }}
        onClick={() => confirm('Zakończyć egzamin i zobaczyć wynik?') && finish()}
      >
        🏁 Zakończ egzamin
      </button>
      <button
        className="btn block danger"
        style={{ marginTop: 10 }}
        onClick={async () => {
          if (confirm('Przerwać egzamin? Odpowiedzi zostaną usunięte.')) {
            await db.sessions.delete(examId)
            nav(-1)
          }
        }}
      >
        Przerwij bez zapisywania
      </button>
    </div>
  )
}
