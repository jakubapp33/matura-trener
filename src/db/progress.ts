import Dexie, { type EntityTable } from 'dexie'
import type { Attempt } from '../types'

/** Trwający egzamin w trybie z zegarem. */
export interface ExamSession {
  examId: string
  startedAt: number
  /** taskId → odpowiedzi na kolejne elementy */
  answers: Record<string, string[]>
}

/** Wynik ćwiczeń w sekcji Nauka (lekcja gramatyki, quiz z lektury, typ zadania z matematyki…). */
export interface LearnResult {
  id: string
  /** najlepszy wynik 0–1 */
  best: number
  last: number
  tries: number
  date: number
}

export const db = new Dexie('matura-trener') as Dexie & {
  attempts: EntityTable<Attempt, 'id'>
  sessions: EntityTable<ExamSession, 'examId'>
  learn: EntityTable<LearnResult, 'id'>
}

db.version(1).stores({
  attempts: '++id, taskId, examId, subject, topic, date, mode',
  sessions: 'examId',
})
db.version(2).stores({ learn: 'id' })

export async function saveLearn(id: string, score: number) {
  const prev = await db.learn.get(id)
  await db.learn.put({ id, best: Math.max(prev?.best ?? 0, score), last: score, tries: (prev?.tries ?? 0) + 1, date: Date.now() })
}

export async function saveAttempt(a: Omit<Attempt, 'id' | 'date'> & { date?: number }) {
  return db.attempts.add({ ...a, date: a.date ?? Date.now() })
}

/** Ostatnia próba każdego zadania. */
export function latestByTask(attempts: Attempt[]): Map<string, Attempt> {
  const m = new Map<string, Attempt>()
  for (const a of attempts) {
    const prev = m.get(a.taskId)
    if (!prev || a.date >= prev.date) m.set(a.taskId, a)
  }
  return m
}

/** Zadania do powtórki: ostatnia próba poniżej maksimum. */
export function wrongTaskIds(attempts: Attempt[]): Set<string> {
  const s = new Set<string>()
  for (const [id, a] of latestByTask(attempts)) if (a.points < a.maxPoints) s.add(id)
  return s
}

export interface Backup {
  app: 'matura-trener'
  version: 1
  exportedAt: string
  attempts: Attempt[]
  learn?: LearnResult[]
}

export async function exportBackup(): Promise<Backup> {
  return { app: 'matura-trener', version: 1, exportedAt: new Date().toISOString(), attempts: await db.attempts.toArray(), learn: await db.learn.toArray() }
}

/** Import kopii – dokłada próby, pomijając te, które już są (ten sam taskId i data). */
export async function importBackup(data: unknown): Promise<number> {
  const b = data as Backup
  if (b?.app !== 'matura-trener' || !Array.isArray(b.attempts)) throw new Error('To nie jest plik kopii Matura Trener.')
  if (Array.isArray(b.learn)) {
    for (const l of b.learn) {
      const prev = await db.learn.get(l.id)
      if (!prev || l.date > prev.date) await db.learn.put({ ...l, best: Math.max(l.best, prev?.best ?? 0) })
    }
  }
  const existing = new Set((await db.attempts.toArray()).map((a) => `${a.taskId}@${a.date}`))
  const fresh = b.attempts.filter((a) => !existing.has(`${a.taskId}@${a.date}`)).map(({ id: _id, ...a }) => a)
  await db.attempts.bulkAdd(fresh)
  return fresh.length
}
