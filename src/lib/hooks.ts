import { useLiveQuery } from 'dexie-react-hooks'
import { useMemo } from 'react'
import { TASKS } from '../data'
import { db, latestByTask, wrongTaskIds } from '../db/progress'
import type { Attempt, Subject, Task } from '../types'

const EMPTY: Attempt[] = []

/** Wszystkie próby (aktualizują się na żywo). `undefined` dopóki baza się nie wczyta. */
export function useAttempts(): Attempt[] | undefined {
  return useLiveQuery(() => db.attempts.toArray(), [])
}

export function useProgress() {
  const attempts = useAttempts()
  return useMemo(() => {
    const list = attempts ?? EMPTY
    const latest = latestByTask(list)
    const wrong = wrongTaskIds(list)
    return { loaded: !!attempts, attempts: list, latest, wrong }
  }, [attempts])
}

/** Ile zadań z listy zostało zrobionych (choć raz) i ile z nich na maks. punktów. */
export function coverage(tasks: Task[], latest: Map<string, Attempt>) {
  let done = 0
  let perfect = 0
  for (const t of tasks) {
    const a = latest.get(t.id)
    if (a) {
      done++
      if (a.points >= a.maxPoints) perfect++
    }
  }
  return { done, perfect, total: tasks.length, pct: tasks.length ? Math.round((done / tasks.length) * 100) : 0 }
}

export const tasksOfSubject = (s: Subject) => TASKS.filter((t) => t.subject === s)

export const isSubject = (s: string | undefined): s is Subject =>
  s === 'polski' || s === 'angielski' || s === 'matematyka'
