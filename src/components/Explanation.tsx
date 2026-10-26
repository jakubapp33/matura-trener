import { useState } from 'react'
import { Link } from 'react-router'
import { Rich } from '../learn/Rich'
import { EXPLAIN, learnLinks, strategyFor } from '../lib/hints'
import type { Task } from '../types'

/** „Jak to zrobić” – wyjaśnienie zadania, strategia dla typu zadania i link do lekcji. Rozwinięte od razu po błędzie. */
export function Explanation({ task, wrong }: { task: Task; wrong: boolean }) {
  const [open, setOpen] = useState(wrong)
  const text = EXPLAIN[task.id]
  const strategy = strategyFor(task)
  const links = learnLinks(task)
  if (!text && !strategy && !links.length) return null
  return (
    <div className="explain">
      <button className="linkish" style={{ fontWeight: 600, textDecoration: 'none' }} onClick={() => setOpen(!open)}>
        💡 {open ? 'Jak to zrobić' : 'Pokaż, jak to zrobić'} {open ? '▴' : '▾'}
      </button>
      {open && (
        <div style={{ marginTop: 6 }}>
          {text ? <Rich text={text} /> : strategy && <Rich text={strategy} />}
          {links.length > 0 && (
            <div className="chips" style={{ flexWrap: 'wrap', marginTop: 6 }}>
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="chip">
                  📘 {l.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
