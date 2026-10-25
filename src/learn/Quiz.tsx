import { useMemo, useState } from 'react'
import { saveLearn } from '../db/progress'
import { Rich } from './Rich'
import { isCorrect, type Exercise } from './types'

function shuffle<T>(xs: T[]) {
  const a = [...xs]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Zestaw ćwiczeń: każde sprawdzane od razu, na końcu wynik zapisany w postępie. */
export function Quiz({ id, exercises, limit, onDone }: { id: string; exercises: Exercise[]; limit?: number; onDone?: (score: number) => void }) {
  const [seed, setSeed] = useState(0)
  // kolejność odpowiedzi jest losowana, żeby poprawna nie była zawsze w tym samym miejscu
  const list = useMemo(
    () =>
      (limit ? shuffle(exercises).slice(0, limit) : exercises).map((ex) => {
        if (ex.kind !== 'choice') return ex
        const order = shuffle(ex.options.map((_, i) => i))
        return { ...ex, options: order.map((i) => ex.options[i]), answer: order.indexOf(ex.answer) }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exercises, limit, seed],
  )
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [finished, setFinished] = useState(false)
  const good = list.filter((ex, i) => checked[i] && isCorrect(ex, answers[i])).length
  const allChecked = list.every((_, i) => checked[i])

  const finish = async () => {
    setFinished(true)
    const score = good / list.length
    await saveLearn(id, score)
    onDone?.(score)
  }
  const restart = () => {
    setAnswers({})
    setChecked({})
    setFinished(false)
    setSeed((s) => s + 1)
    window.scrollTo(0, 0)
  }

  return (
    <div className="quiz">
      {list.map((ex, i) => {
        const done = checked[i]
        const ok = done && isCorrect(ex, answers[i])
        const parts = ex.q.split('___')
        return (
          <div key={`${seed}-${i}`} className={`card quiz-item${done ? (ok ? ' ok' : ' no') : ''}`}>
            <div className="small muted">{i + 1}.</div>
            {ex.kind === 'choice' ? (
              <>
                <div className="q">{parts.length > 1 ? <>{parts[0]}<span className="gap">{done ? ex.options[ex.answer] : '…'}</span>{parts.slice(1).join('___')}</> : ex.q}</div>
                <div className="options">
                  {ex.options.map((o, n) => {
                    let cls = 'opt'
                    if (done) {
                      if (n === ex.answer) cls += ' right'
                      else if (answers[i] === n) cls += ' wrong'
                    } else if (answers[i] === n) cls += ' sel'
                    return (
                      <button
                        key={n}
                        className={cls}
                        onClick={() => {
                          if (done) return
                          setAnswers({ ...answers, [i]: n })
                          setChecked({ ...checked, [i]: true })
                        }}
                      >
                        {o}
                      </button>
                    )
                  })}
                </div>
              </>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (String(answers[i] ?? '').trim()) setChecked({ ...checked, [i]: true })
                }}
              >
                <div className="q">
                  {parts[0]}
                  <input
                    className="gap-input"
                    value={String(answers[i] ?? '')}
                    disabled={done}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
                    aria-label={`Odpowiedź ${i + 1}`}
                  />
                  {parts.slice(1).join('___')}
                </div>
                {!done && (
                  <button className="btn small-btn" type="submit" disabled={!String(answers[i] ?? '').trim()}>
                    Sprawdź
                  </button>
                )}
              </form>
            )}
            {done && (
              <div className={`result ${ok ? 'good' : 'bad'}`}>
                {ok ? '✔ Dobrze' : ex.kind === 'gap' ? `✘ Poprawnie: ${ex.answers[0]}` : '✘ Źle'}
                {ex.why && (
                  <div className="small" style={{ fontWeight: 400, marginTop: 4 }}>
                    <Rich text={ex.why} />
                  </div>
                )}
              </div>
            )}
          </div>
        )
      })}
      {!finished ? (
        <button className="btn primary block" disabled={!allChecked} onClick={finish}>
          {allChecked ? `Zakończ – ${good}/${list.length}` : `Odpowiedz na wszystkie (${Object.keys(checked).length}/${list.length})`}
        </button>
      ) : (
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800 }}>
            {good}/{list.length}
          </div>
          <div className="muted">{good === list.length ? 'Perfekcyjnie! 🎉' : good / list.length >= 0.8 ? 'Bardzo dobrze 💪' : good / list.length >= 0.5 ? 'Nieźle – przejrzyj błędy i spróbuj jeszcze raz.' : 'Wróć do wyjaśnień powyżej i spróbuj jeszcze raz.'}</div>
          <button className="btn block" style={{ marginTop: 10 }} onClick={restart}>
            {limit ? 'Nowy losowy zestaw' : 'Jeszcze raz'}
          </button>
        </div>
      )}
    </div>
  )
}
