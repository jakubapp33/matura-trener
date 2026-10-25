import { describe, expect, it } from 'vitest'
import { TOPICS } from '../data/topics'
import { ALL_GRAMMAR_EXERCISES, GRAMMAR } from './grammar'
import { MATH } from './math'
import { ORAL_PL } from './oral-pl'
import { PICTURES, ROLE_PLAYS, STIMULI } from './oral-en'
import { TERMS, termQuiz } from './polish-extra'
import { READING_BY_ID, READINGS } from './readings'
import { isCorrect, normAnswer, type Exercise } from './types'

function checkExercises(name: string, list: Exercise[]) {
  for (const ex of list) {
    expect(ex.q.split('___').length, `${name}: „${ex.q}” – najwyżej jedna luka`).toBeLessThanOrEqual(2)
    if (ex.kind === 'choice') {
      expect(ex.answer, `${name}: ${ex.q}`).toBeLessThan(ex.options.length)
      expect(new Set(ex.options).size, `${name}: powtórzone odpowiedzi w „${ex.q}”`).toBe(ex.options.length)
    } else {
      expect(ex.answers.length, ex.q).toBeGreaterThan(0)
      expect(isCorrect(ex, ex.answers[0]), ex.q).toBe(true)
    }
  }
}

describe('treści do nauki', () => {
  it('gramatyka: unikalne id i poprawne ćwiczenia', () => {
    expect(new Set(GRAMMAR.map((l) => l.id)).size).toBe(GRAMMAR.length)
    for (const l of GRAMMAR) {
      expect(l.exercises.length, l.id).toBeGreaterThanOrEqual(5)
      checkExercises(l.id, l.exercises)
    }
    expect(ALL_GRAMMAR_EXERCISES.length).toBeGreaterThan(100)
  })
  it('matematyka: działy istnieją, ćwiczenia poprawne', () => {
    const topics = new Set(TOPICS.matematyka.map((t) => t.id))
    for (const m of MATH) {
      expect(topics.has(m.topic), m.id).toBe(true)
      checkExercises(m.id, m.exercises)
    }
  })
  it('lektury: komplet danych i quiz', () => {
    expect(new Set(READINGS.map((r) => r.id)).size).toBe(READINGS.length)
    for (const r of READINGS) {
      expect(r.summary.length, r.id).toBeGreaterThan(400)
      expect(r.characters.length, r.id).toBeGreaterThan(0)
      expect(r.must.length, r.id).toBeGreaterThan(2)
      expect(r.quiz.length, r.id).toBeGreaterThan(0)
      checkExercises(r.id, r.quiz)
    }
  })
  it('pytania jawne CKE: 76, każde ma swoją lekturę', () => {
    expect(ORAL_PL).toHaveLength(76)
    expect(ORAL_PL.map((o) => o.n)).toEqual(Array.from({ length: 76 }, (_, i) => i + 1))
    for (const o of ORAL_PL) {
      expect(READING_BY_ID.has(o.reading), `${o.n} → ${o.reading}`).toBe(true)
      expect(o.full.startsWith(o.topic)).toBe(true)
    }
  })
  it('słowniczek i matura ustna z angielskiego', () => {
    for (const g of TERMS) checkExercises(g.id, termQuiz(g))
    for (const r of ROLE_PLAYS) expect(r.points).toHaveLength(4)
    expect(PICTURES.every((p) => p.questions.length === 3)).toBe(true)
    expect(STIMULI.every((s) => s.options.length === 3 && s.questions.length === 2)).toBe(true)
  })
  it('sprawdzanie wpisanej odpowiedzi jest wyrozumiałe', () => {
    expect(normAnswer('  Have  Told. ')).toBe('have told')
    expect(normAnswer('doesn’t like')).toBe("doesn't like")
  })
})
