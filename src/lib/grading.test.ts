import { describe, expect, it } from 'vitest'
import type { Task } from '../types'
import { gradeClosed, itemScore } from './grading'

const task = (over: Partial<Task>): Task => ({
  id: 't',
  examId: 'e',
  subject: 'matematyka',
  number: '1',
  topic: 'liczby',
  type: 'zamkniete',
  maxPoints: 1,
  examPages: [1],
  keyPages: [1],
  ...over,
})

describe('gradeClosed', () => {
  it('ABCD: 1 pkt za poprawną odpowiedź, 0 za złą lub brak', () => {
    const t = task({ items: [{ label: '1', options: ['A', 'B', 'C', 'D'], correct: 'C' }] })
    expect(gradeClosed(t, ['C'])).toBe(1)
    expect(gradeClosed(t, ['A'])).toBe(0)
    expect(gradeClosed(t, [])).toBe(0)
  })

  it('dwa zdania P/F za 1 pkt – wszystko albo nic', () => {
    const t = task({
      items: [
        { label: 'a', options: ['P', 'F'], correct: 'F' },
        { label: 'b', options: ['P', 'F'], correct: 'P' },
      ],
    })
    expect(gradeClosed(t, ['F', 'P'])).toBe(1)
    expect(gradeClosed(t, ['F', 'F'])).toBe(0)
  })

  it('podzadania po 1 pkt (np. 29.1 i 29.2 za 0–2) – punkt za każde', () => {
    const t = task({
      maxPoints: 2,
      items: [
        { label: '29.1', options: ['A', 'B', 'C', 'D', 'E'], correct: 'C' },
        { label: '29.2', options: ['A', 'B', 'C', 'D', 'E'], correct: 'A' },
      ],
    })
    expect(gradeClosed(t, ['C', 'A'])).toBe(2)
    expect(gradeClosed(t, ['C', 'B'])).toBe(1)
  })

  it('wybór dwóch liter za 0–2 – punkt za każdą trafioną', () => {
    const t = task({ maxPoints: 2, items: [{ label: '11', options: [...'ABCDEF'], correct: 'CE', pick: 2 }] })
    expect(gradeClosed(t, ['CE'])).toBe(2)
    expect(gradeClosed(t, ['CD'])).toBe(1)
    expect(gradeClosed(t, ['AB'])).toBe(0)
  })

  it('skala punktów: 3 zdania P/F za 0–2 (3 dobre = 2, 2 dobre = 1)', () => {
    const pf = (correct: string) => ({ label: correct, options: ['P', 'F'], correct })
    const t = task({ maxPoints: 2, scale: [0, 0, 1, 2], items: [pf('P'), pf('P'), pf('P')] })
    expect(gradeClosed(t, ['P', 'P', 'P'])).toBe(2)
    expect(gradeClosed(t, ['P', 'F', 'P'])).toBe(1)
    expect(gradeClosed(t, ['F', 'F', 'P'])).toBe(0)
  })

  it('A/B + 1/2/3 za 1 pkt – obie części muszą być dobre', () => {
    const t = task({
      items: [
        { label: 'x', options: ['A', 'B'], correct: 'B' },
        { label: 'y', options: ['1', '2', '3'], correct: '2' },
      ],
    })
    expect(gradeClosed(t, ['B', '2'])).toBe(1)
    expect(gradeClosed(t, ['B', '3'])).toBe(0)
  })
})

describe('itemScore', () => {
  it('nadmiarowe litery odejmują punkty', () => {
    expect(itemScore({ label: '', options: [...'ABCDEF'], correct: 'CE', pick: 2 }, 'CDE')).toBe(1)
  })
})
