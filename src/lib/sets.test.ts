import { describe, expect, it } from 'vitest'
import { TASKS } from '../data'
import { buildSet, parseSetQuery, setQueryString } from './sets'

describe('buildSet', () => {
  it('filtruje po przedmiocie, dziale i typie', () => {
    const set = buildSet({ subject: 'matematyka', topic: 'logarytmy', type: 'zamkniete' })
    expect(set.length).toBeGreaterThan(0)
    expect(set.every((t) => t.subject === 'matematyka' && t.topic === 'logarytmy' && t.type === 'zamkniete')).toBe(true)
  })

  it('cały arkusz – wszystkie zadania z arkusza', () => {
    const set = buildSet({ exam: 'mat-2025-maj' })
    expect(set.length).toBe(TASKS.filter((t) => t.examId === 'mat-2025-maj').length)
  })

  it('powtórka – tylko zadania z błędem', () => {
    const wrong = new Set([TASKS[0].id])
    expect(buildSet({ review: true }, TASKS, wrong).map((t) => t.id)).toEqual([TASKS[0].id])
  })

  it('zapytanie przechodzi przez adres URL bez zmian', () => {
    const q = { subject: 'matematyka' as const, type: 'otwarte' as const, year: 2024, topic: 'ciagi', onlyNew: true, review: false }
    expect(parseSetQuery(new URLSearchParams(setQueryString(q)))).toEqual({ ...q, exam: undefined })
  })
})

describe('wycięcia zadań z arkusza', () => {
  it('każde zadanie ma swój fragment strony i fragment zasad oceniania', () => {
    for (const t of TASKS) {
      expect(t.crop?.length, t.id).toBeGreaterThan(0)
      expect(t.keyCrop?.length, t.id).toBeGreaterThan(0)
      for (const s of [...t.crop!, ...t.keyCrop!, ...(t.context ?? [])]) {
        expect(s.t, t.id).toBeGreaterThanOrEqual(0)
        expect(s.b, t.id).toBeLessThanOrEqual(1)
        expect(s.b - s.t, t.id).toBeGreaterThan(0.05)
      }
    }
  })
  it('zadania z jednej strony nie nachodzą na siebie', () => {
    const exams = new Set(TASKS.map((t) => t.examId))
    for (const e of exams) {
      const own = TASKS.filter((t) => t.examId === e && !t.number.includes('.') && !t.number.includes('('))
      for (const a of own)
        for (const b of own) {
          if (a === b) continue
          for (const x of a.crop!) for (const y of b.crop!) {
            if (x.p !== y.p) continue
            const overlap = Math.min(x.b, y.b) - Math.max(x.t, y.t)
            expect(overlap, `${a.id} vs ${b.id}`).toBeLessThan(0.02)
          }
        }
    }
  })
})
