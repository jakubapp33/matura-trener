import type { Item } from '../types'

interface Props {
  items: Item[]
  answers: (string | undefined)[]
  onChange: (answers: (string | undefined)[]) => void
  /** Po sprawdzeniu: koloruje odpowiedzi i blokuje zmiany. */
  checked?: boolean
}

/** Przyciski do zaznaczania odpowiedzi w zadaniach zamkniętych. */
export function AnswerPanel({ items, answers, onChange, checked }: Props) {
  const toggle = (i: number, opt: string) => {
    if (checked) return
    const item = items[i]
    const pick = item.pick ?? 1
    const cur = answers[i] ?? ''
    let next: string
    if (pick > 1) {
      next = cur.includes(opt) ? cur.replace(opt, '') : cur.length < pick ? cur + opt : cur.slice(1) + opt
      next = [...next].sort().join('')
    } else next = cur === opt ? '' : opt
    const copy = [...answers]
    copy[i] = next || undefined
    onChange(copy)
  }

  return (
    <div>
      {items.map((it, i) => {
        const ans = answers[i] ?? ''
        return (
          <div key={it.label}>
            <div className="small muted">
              {it.label}
              {(it.pick ?? 1) > 1 && ` (wybierz ${it.pick})`}
            </div>
            <div className="options">
              {it.options.map((o) => {
                const multi = (it.pick ?? 1) > 1
                const sel = multi ? ans.includes(o) : ans === o
                const right = multi ? it.correct.includes(o) : it.correct === o
                let cls = 'opt'
                if (checked) {
                  if (right) cls += ' right'
                  else if (sel) cls += ' wrong'
                } else if (sel) cls += ' sel'
                return (
                  <button key={o} className={cls} onClick={() => toggle(i, o)} aria-pressed={sel}>
                    {o}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
