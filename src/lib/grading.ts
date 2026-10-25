import type { Item, Task } from '../types'

/** Punkty za jeden element: 1 za trafienie, przy wyborze kilku liter – 1 za każdą trafioną. */
export function itemScore(item: Item, answer: string | undefined): number {
  if (!answer) return 0
  if ((item.pick ?? 1) > 1) {
    const chosen = new Set(answer)
    return [...item.correct].filter((c) => chosen.has(c)).length - Math.max(0, chosen.size - item.correct.length)
  }
  return answer === item.correct ? 1 : 0
}

const itemWeight = (i: Item) => i.pick ?? 1

/**
 * Wynik zadania zamkniętego.
 * Jeśli suma wag elementów = maks. punktów → punkt za każdy element,
 * w przeciwnym razie (np. 2 zdania P/F za 1 pkt) – wszystko albo nic.
 */
export function gradeClosed(task: Task, answers: (string | undefined)[]): number {
  const items = task.items ?? []
  const scores = items.map((it, i) => Math.max(0, itemScore(it, answers[i])))
  if (task.scale) return task.scale[scores.filter((s, i) => s === itemWeight(items[i])).length] ?? 0
  const weight = items.reduce((s, it) => s + itemWeight(it), 0)
  if (weight === task.maxPoints) return scores.reduce((a, b) => a + b, 0)
  const perfect = items.every((it, i) => scores[i] === itemWeight(it))
  return perfect ? task.maxPoints : 0
}

export const isAutoGraded = (t: Task) => t.type === 'zamkniete' && !!t.items?.length

export const percent = (points: number, max: number) => (max ? Math.round((points / max) * 100) : 0)
