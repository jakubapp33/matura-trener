import { TASKS } from '../data'
import type { Subject, Task, TaskType } from '../types'

/** Opis zestawu zadań – zapisywany w adresie strony (query string). */
export interface SetQuery {
  subject?: Subject
  exam?: string
  topic?: string
  type?: TaskType
  year?: number
  review?: boolean
  /** tylko zadania jeszcze nierobione */
  onlyNew?: boolean
}

export function parseSetQuery(p: URLSearchParams): SetQuery {
  return {
    subject: (p.get('s') as Subject) || undefined,
    exam: p.get('exam') || undefined,
    topic: p.get('topic') || undefined,
    type: (p.get('type') as TaskType) || undefined,
    year: p.get('year') ? Number(p.get('year')) : undefined,
    review: p.get('review') === '1',
    onlyNew: p.get('new') === '1',
  }
}

export function setQueryString(q: SetQuery): string {
  const p = new URLSearchParams()
  if (q.subject) p.set('s', q.subject)
  if (q.exam) p.set('exam', q.exam)
  if (q.topic) p.set('topic', q.topic)
  if (q.type) p.set('type', q.type)
  if (q.year) p.set('year', String(q.year))
  if (q.review) p.set('review', '1')
  if (q.onlyNew) p.set('new', '1')
  return p.toString()
}

/**
 * Zadania pasujące do zapytania.
 * @param wrongIds – dla powtórki błędów: zadania, których ostatnia próba nie dała maks. punktów.
 */
export function buildSet(q: SetQuery, tasks: Task[] = TASKS, wrongIds?: Set<string>): Task[] {
  return tasks.filter(
    (t) =>
      (!q.subject || t.subject === q.subject) &&
      (!q.exam || t.examId === q.exam) &&
      (!q.topic || t.topic === q.topic) &&
      (!q.type || t.type === q.type) &&
      (!q.year || t.examId.includes(`-${q.year}-`)) &&
      (!q.review || !!wrongIds?.has(t.id)),
  )
}
