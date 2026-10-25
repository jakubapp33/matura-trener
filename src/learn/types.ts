/** Ćwiczenie sprawdzane od razu. */
export type Exercise =
  | { kind: 'choice'; q: string; options: string[]; answer: number; why?: string }
  | { kind: 'gap'; q: string; answers: string[]; why?: string }

/** wybór jednej odpowiedzi: c('She ___ every day.', ['go', 'goes'], 1, 'wyjaśnienie') */
export const c = (q: string, options: string[], answer: number, why?: string): Exercise => ({ kind: 'choice', q, options, answer, why })
/** wpisanie odpowiedzi (kilka poprawnych wariantów): g('I ___ (be) tired.', ['am', "'m"], 'wyjaśnienie') */
export const g = (q: string, answers: string[], why?: string): Exercise => ({ kind: 'gap', q, answers, why })

/** Normalizacja wpisanej odpowiedzi: wielkość liter, spacje, apostrofy, kropka na końcu. */
export function normAnswer(s: string) {
  return s
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim()
}

export function isCorrect(ex: Exercise, given: string | number | undefined): boolean {
  if (given === undefined || given === '') return false
  if (ex.kind === 'choice') return given === ex.answer
  const a = normAnswer(String(given))
  return ex.answers.some((x) => normAnswer(x) === a)
}
