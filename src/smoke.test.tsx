// @vitest-environment jsdom
import 'fake-indexeddb/auto'
import { act, cleanup, render } from '@testing-library/react'
import { RouterProvider } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import { router } from './App'
import { READINGS } from './learn/readings'
import { GRAMMAR } from './learn/grammar'
import { MATH } from './learn/math'
import { db } from './db/progress'

afterEach(cleanup)
window.scrollTo = () => {}

async function show(path: string) {
  await act(async () => {
    await router.navigate(path)
  })
  const r = render(<RouterProvider router={router} />)
  await act(async () => {
    await new Promise((res) => setTimeout(res, 50))
  })
  return r
}

const ROUTES = [
  '/nauka', '/nauka/gramatyka', '/nauka/gramatyka/test', '/nauka/matematyka', '/nauka/lektury', '/nauka/pojecia', '/nauka/poradnik',
  '/nauka/ustna', '/nauka/ustna/polski', '/nauka/ustna/polski?q=22', '/nauka/ustna/angielski',
  ...GRAMMAR.map((l) => `/nauka/gramatyka/${l.id}`),
  ...MATH.map((m) => `/nauka/matematyka/${m.id}`),
  ...READINGS.map((r) => `/nauka/lektury/${r.id}`),
]

describe('ekrany Nauki renderują się', () => {
  for (const path of ROUTES) {
    it(path, async () => {
      const { container } = await show(path)
      expect(container.textContent!.length).toBeGreaterThan(50)
    })
  }
})

describe('zachowanie', () => {
  it('przedmiot polski nie podpowiada logarytmów', async () => {
    const { container } = await show('/p/polski')
    expect(container.textContent).not.toContain('logarytm')
    expect(container.textContent).toContain('historycznoliteracki')
  })
  it('quiz: odpowiedź jest sprawdzana i wynik zapisany', async () => {
    const { container } = await show('/nauka/lektury/antygona')
    const items = [...container.querySelectorAll('.quiz-item')]
    expect(items.length).toBeGreaterThan(0)
    for (const it of items) {
      const opts = [...it.querySelectorAll<HTMLButtonElement>('.opt')]
      await act(async () => opts[0].click())
    }
    expect(container.querySelectorAll('.result').length).toBe(items.length)
    const finish = [...container.querySelectorAll<HTMLButtonElement>('.btn.primary')].find((b) => b.textContent?.startsWith('Zakończ'))!
    await act(async () => finish.click())
    await act(async () => new Promise((r) => setTimeout(r, 50)))
    expect((await db.learn.get('lek:antygona'))?.tries).toBe(1)
  })
  it('ustny polski: pytanie 22 to mesjanizm w Dziadach', async () => {
    const { container } = await show('/nauka/ustna/polski?q=22')
    expect(container.textContent).toContain('Mesjanizm')
  })
})
