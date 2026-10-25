import { Fragment, type ReactNode } from 'react'

/** **pogrubienie**, *kursywa*, `kod` w linii */
function inline(s: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index))
    const t = m[0]
    if (t.startsWith('**')) out.push(<b key={k++}>{t.slice(2, -2)}</b>)
    else if (t.startsWith('`')) out.push(<code key={k++}>{t.slice(1, -1)}</code>)
    else out.push(<i key={k++}>{t.slice(1, -1)}</i>)
    last = m.index + t.length
  }
  if (last < s.length) out.push(s.slice(last))
  return out
}

/**
 * Prosty zapis treści lekcji:
 * akapity oddzielone pustą linią, „- ” lista, „| a | b |” tabela, „> ” ramka z ważną informacją,
 * „## ” śródtytuł, „EN :: PL” przykład z tłumaczeniem.
 */
export function Rich({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/)
  return (
    <div className="rich">
      {blocks.map((b, i) => {
        const lines = b.split('\n').map((l) => l.trim())
        if (lines[0].startsWith('## ')) {
          return (
            <Fragment key={i}>
              <h3>{inline(lines[0].slice(3))}</h3>
              {lines.length > 1 && <Rich text={lines.slice(1).join('\n')} />}
            </Fragment>
          )
        }
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.slice(2))}</li>
              ))}
            </ul>
          )
        }
        if (lines.every((l) => l.startsWith('|'))) {
          const rows = lines.map((l) => l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
          return (
            <div key={i} className="table-wrap">
              <table>
                <thead>
                  <tr>{rows[0].map((c, j) => <th key={j}>{inline(c)}</th>)}</tr>
                </thead>
                <tbody>
                  {rows.slice(1).map((r, j) => (
                    <tr key={j}>{r.map((c, n) => <td key={n}>{inline(c)}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
        if (lines.every((l) => l.includes(' :: '))) {
          return (
            <div key={i} className="examples">
              {lines.map((l, j) => {
                const [en, pl] = l.split(' :: ')
                return (
                  <div key={j} className="ex">
                    <div>{inline(en)}</div>
                    <div className="muted small">{inline(pl)}</div>
                  </div>
                )
              })}
            </div>
          )
        }
        if (lines[0].startsWith('> ')) {
          return (
            <div key={i} className="tip">
              {inline(lines.map((l) => l.replace(/^> ?/, '')).join(' '))}
            </div>
          )
        }
        return <p key={i}>{inline(lines.join(' '))}</p>
      })}
    </div>
  )
}
