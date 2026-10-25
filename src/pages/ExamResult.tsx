import { useLiveQuery } from 'dexie-react-hooks'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { KeyPages, PointsPicker } from '../components/TaskView'
import { ProgressBar, subjectStyle, TopBar } from '../components/ui'
import { EXAM_BY_ID, examLabel, subjectName, tasksOfExam } from '../data'
import { topicName } from '../data/topics'
import { db } from '../db/progress'
import { gradeClosed, isAutoGraded, percent } from '../lib/grading'

export function ExamResult() {
  const { examId = '' } = useParams()
  const exam = EXAM_BY_ID.get(examId)
  const session = useLiveQuery(() => db.sessions.get(examId), [examId], null)
  const [self, setSelf] = useState<Record<string, number>>({})
  const [saved, setSaved] = useState<{ points: number; max: number; byTopic: [string, number, number][] }>()
  if (!exam) return <Navigate to="/" />
  const tasks = tasksOfExam(examId)
  const title = `Wynik – ${subjectName(exam.subject)} ${examLabel(exam)}`

  if (saved) {
    const pct = percent(saved.points, saved.max)
    return (
      <div style={subjectStyle(exam.subject)}>
        <TopBar title={title} back={false} />
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="muted">Twój wynik</div>
          <div style={{ fontSize: '3rem', fontWeight: 800 }}>{pct}%</div>
          <div className="muted">
            {saved.points} / {saved.max} pkt · {pct >= 30 ? 'zdane (próg 30%)' : 'poniżej progu 30%'}
          </div>
        </div>
        <h2>Wynik w działach</h2>
        <div className="list">
          {saved.byTopic.map(([t, p, m]) => (
            <div key={t} className="card">
              <div className="row">
                <span className="grow">{topicName(exam.subject, t)}</span>
                <b>
                  {p}/{m}
                </b>
              </div>
              <div style={{ marginTop: 6 }}>
                <ProgressBar value={percent(p, m)} subject={exam.subject} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid2" style={{ marginTop: 16 }}>
          <Link className="btn" to={`/p/${exam.subject}/arkusze`}>
            Arkusze
          </Link>
          <Link className="btn primary" to="/powtorka">
            Powtórka błędów
          </Link>
        </div>
      </div>
    )
  }

  if (session === null) return <TopBar title={title} />
  if (!session) return <Navigate to={`/egzamin/${examId}`} replace />

  const open = tasks.filter((t) => !isAutoGraded(t))
  const closedPts = tasks.filter(isAutoGraded).map((t) => gradeClosed(t, session.answers[t.id] ?? []))
  const missing = open.filter((t) => self[t.id] === undefined).length

  const save = async () => {
    const date = Date.now()
    const rows = tasks.map((t) => {
      const ans = session.answers[t.id] ?? []
      const points = isAutoGraded(t) ? gradeClosed(t, ans) : self[t.id]
      return {
        taskId: t.id,
        examId,
        subject: t.subject,
        topic: t.topic,
        points,
        maxPoints: t.maxPoints,
        answers: isAutoGraded(t) ? ans : undefined,
        mode: 'egzamin' as const,
        date,
      }
    })
    await db.transaction('rw', db.attempts, db.sessions, async () => {
      await db.attempts.bulkAdd(rows)
      await db.sessions.delete(examId)
    })
    const topics = new Map<string, [number, number]>()
    for (const r of rows) {
      const [p, m] = topics.get(r.topic) ?? [0, 0]
      topics.set(r.topic, [p + r.points, m + r.maxPoints])
    }
    setSaved({
      points: rows.reduce((s, r) => s + r.points, 0),
      max: rows.reduce((s, r) => s + r.maxPoints, 0),
      byTopic: [...topics].map(([t, [p, m]]) => [t, p, m]),
    })
    window.scrollTo(0, 0)
  }

  return (
    <div style={subjectStyle(exam.subject)}>
      <TopBar title={title} back={false} />
      <div className="card">
        Zadania zamknięte: <b>{closedPts.reduce((a, b) => a + b, 0)}</b> /{' '}
        {tasks.filter(isAutoGraded).reduce((s, t) => s + t.maxPoints, 0)} pkt (sprawdzone automatycznie)
      </div>
      {open.length > 0 && (
        <>
          <h2>Oceń zadania otwarte ({open.length})</h2>
          <p className="muted small" style={{ marginTop: 0 }}>
            Otwórz zasady oceniania przy każdym zadaniu, porównaj ze swoim rozwiązaniem i wybierz liczbę punktów.
          </p>
          <div className="list">
            {open.map((t) => (
              <div key={t.id} className="card">
                <b>Zadanie {t.number}</b> <span className="muted small">(0–{t.maxPoints} pkt)</span>
                {session.answers[t.id]?.[0] && (
                  <div className="small muted" style={{ whiteSpace: 'pre-wrap', marginTop: 6 }}>
                    Twoje notatki: {session.answers[t.id][0]}
                  </div>
                )}
                <KeyPages task={t} />
                <PointsPicker max={t.maxPoints} value={self[t.id]} onChange={(n) => setSelf({ ...self, [t.id]: n })} />
              </div>
            ))}
          </div>
        </>
      )}
      <button className="btn primary block" style={{ marginTop: 16 }} disabled={missing > 0} onClick={save}>
        {missing > 0 ? `Oceń jeszcze ${missing} zadań` : 'Zapisz wynik'}
      </button>
    </div>
  )
}
