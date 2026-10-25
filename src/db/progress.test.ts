import 'fake-indexeddb/auto'
import { beforeEach, describe, expect, it } from 'vitest'
import type { Attempt } from '../types'
import { db, exportBackup, importBackup, latestByTask, saveAttempt, wrongTaskIds } from './progress'

const a = (taskId: string, points: number, date: number): Attempt => ({
  taskId,
  examId: 'e',
  subject: 'matematyka',
  topic: 'liczby',
  points,
  maxPoints: 1,
  mode: 'trening',
  date,
})

describe('postęp', () => {
  beforeEach(() => db.attempts.clear())

  it('liczy się ostatnia próba zadania', () => {
    const list = [a('x', 0, 1), a('x', 1, 2), a('y', 0, 3)]
    expect(latestByTask(list).get('x')?.points).toBe(1)
    expect([...wrongTaskIds(list)]).toEqual(['y'])
  })

  it('kopia zapasowa: eksport i import bez duplikatów', async () => {
    await saveAttempt({ ...a('x', 1, 10) })
    const backup = await exportBackup()
    expect(await importBackup(backup)).toBe(0)
    await db.attempts.clear()
    expect(await importBackup(backup)).toBe(1)
    await expect(importBackup({ foo: 1 })).rejects.toThrow()
  })
})
