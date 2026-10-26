import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { AnswerPanel } from '../components/AnswerPanel'
import { AskAi } from '../components/AskAi'
import { Explanation } from '../components/Explanation'
import { KeyPages, PointsPicker, TaskView } from '../components/TaskView'
import { TopBar } from '../components/ui'
import { EXAM_BY_ID, examLabel, subjectName, TASK_BY_ID } from '../data'
import { topicName } from '../data/topics'
import { db, saveAttempt } from '../db/progress'
import { gradeClosed, isAutoGraded } from '../lib/grading'
import { useProgress } from '../lib/hooks'
import { buildSet, parseSetQuery, type SetQuery } from '../lib/sets'
import type { Task } from '../types'

function setTitle(q: SetQuery) {
  if (q.exam) {
    const e = EXAM_BY_ID.get(q.exam)
    return e ? `${subjectName(e.subject)} ${examLabel(e)}` : 'Arkusz'
  }
  if (q.review) return 'Powtórka błędów'
  if (q.subject && q.topic) return topicName(q.subject, q.topic)
  if (q.type) return q.type === 'zamkniete' ? 'Zadania zamknięte' : 'Zadania otwarte'
  return 'Zadania'
}

export function TaskSet() {
  const [params, setParams] = useSearchParams()
  const q = useMemo(() => parseSetQuery(params), [params])
  const { loaded, latest, wrong } = useProgress()

  // Zestaw ustalany raz po wczytaniu postępu – nie zmienia się w trakcie rozwiązywania
  // (np. poprawione zadanie nie znika z powtórki, dopóki jej nie zamkniesz).
  const [state, setState] = useState<{ key: string; ids: string[] }>()
  const qKey = params.toString().replace(/&?i=\d+/, '')
  useEffect(() => {
    if (!loaded) return
    let set = buildSet(q, undefined, wrong)
    if (q.onlyNew) set = set.filter((t) => !latest.has(t.id))
    setState({ key: qKey, ids: set.map((t) => t.id) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, qKey])
  // zestaw z innego zapytania (np. poprzedniego przedmiotu) nigdy nie jest pokazywany
  const ids = state?.key === qKey ? state.ids : undefined

  const idx = Math.max(0, Number(params.get('i') ?? 0))
  const go = (i: number) => {
    const p = new URLSearchParams(params)
    p.set('i', String(i))
    setParams(p, { replace: true })
    window.scrollTo(0, 0)
  }

  if (!ids) return <TopBar title={setTitle(q)} />
  if (!ids.length)
    return (
      <>
        <TopBar title={setTitle(q)} />
        <div className="empty">Brak zadań w tym zestawie. 🎉</div>
      </>
    )

  const i = Math.min(idx, ids.length - 1)
  const task = TASK_BY_ID.get(ids[i])!

  return (
    <>
      <TopBar title={setTitle(q)} right={<span className="muted small">{`${i + 1}/${ids.length}`}</span>} />
      <div className="task-dots">
        {ids.map((id, n) => {
          const a = latest.get(id)
          const cls = a ? (a.points >= a.maxPoints ? 'good' : 'bad') : ''
          return (
            <button key={id} className={`${cls}${n === i ? ' cur' : ''}`} onClick={() => go(n)}>
              {TASK_BY_ID.get(id)!.number}
            </button>
          )
        })}
      </div>
      <TaskView task={task} />
      <TrainingAnswer key={task.id} task={task} />
      <div className="navbar">
        <button className="btn" disabled={i === 0} onClick={() => go(i - 1)}>
          ‹ Poprzednie
        </button>
        <button className="btn" disabled={i === ids.length - 1} onClick={() => go(i + 1)}>
          Następne ›
        </button>
      </div>
    </>
  )
}

/** Panel odpowiedzi w trybie treningu: sprawdzenie od razu + zapis próby. */
function TrainingAnswer({ task }: { task: Task }) {
  const auto = isAutoGraded(task)
  const [answers, setAnswers] = useState<(string | undefined)[]>([])
  const [checked, setChecked] = useState(false)
  const [points, setPoints] = useState<number>()
  const [saved, setSaved] = useState(false)
  const [attemptId, setAttemptId] = useState<number>()
  const base = { taskId: task.id, examId: task.examId, subject: task.subject, topic: task.topic, maxPoints: task.maxPoints, mode: 'trening' as const }

  const check = async () => {
    setChecked(true)
    if (auto) {
      const pts = gradeClosed(task, answers)
      setPoints(pts)
      await saveAttempt({ ...base, points: pts, answers: answers.map((a) => a ?? '') })
      setSaved(true)
    }
  }

  // zmiana zdania przy samoocenie poprawia zapisaną próbę zamiast dodawać nową
  const saveSelf = async (n: number) => {
    setPoints(n)
    if (attemptId !== undefined) await db.attempts.update(attemptId, { points: n })
    else setAttemptId(await saveAttempt({ ...base, points: n }))
    setSaved(true)
  }

  return (
    <div className="answer-panel card">
      {auto ? (
        <>
          <AnswerPanel items={task.items!} answers={answers} onChange={setAnswers} checked={checked} />
          {!checked ? (
            <button className="btn primary block" onClick={check} disabled={!answers.some(Boolean)}>
              Sprawdź
            </button>
          ) : (
            <>
              <div className={`result ${points === task.maxPoints ? 'good' : 'bad'}`}>
                {points === task.maxPoints ? '✔ Dobrze!' : '✘ Niestety, błąd.'} {points}/{task.maxPoints} pkt
                {points !== task.maxPoints && (
                  <div className="small" style={{ fontWeight: 400 }}>
                    Poprawna odpowiedź: {task.items!.map((it) => it.correct).join(', ')}
                  </div>
                )}
              </div>
              <Explanation task={task} wrong={points !== task.maxPoints} />
              <AskAi task={task} given={answers.map((a) => a ?? '')} />
              <KeyPages task={task} />
              <button
                className="btn block"
                style={{ marginTop: 8 }}
                onClick={() => {
                  setChecked(false)
                  setAnswers([])
                  setPoints(undefined)
                  setSaved(false)
                }}
              >
                Spróbuj jeszcze raz
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <div className="small muted" style={{ marginBottom: 6 }}>
            Rozwiąż zadanie na kartce lub zapisz notatki poniżej, potem kliknij „Sprawdź”.
          </div>
          <textarea placeholder="Twoje rozwiązanie / notatki (opcjonalnie)" />
          {!checked ? (
            <button className="btn primary block" style={{ marginTop: 8 }} onClick={check}>
              Sprawdź
            </button>
          ) : (
            <>
              <KeyPages task={task} open />
              <AskAi task={task} />
              <div style={{ marginTop: 12 }}>
                <b>Ile punktów zdobyłeś według zasad oceniania?</b>
                <PointsPicker max={task.maxPoints} value={points} onChange={saveSelf} />
                {saved && (
                  <div className={`result ${points === task.maxPoints ? 'good' : 'neutral'}`}>
                    Zapisano: {points}/{task.maxPoints} pkt
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
