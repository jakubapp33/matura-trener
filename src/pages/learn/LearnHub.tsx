import { Link } from 'react-router'
import { SUBJECT_BADGE, subjectStyle } from '../../components/ui'
import { GRAMMAR } from '../../learn/grammar'
import { useLearn } from '../../learn/hooks'
import { MATH } from '../../learn/math'
import { ORAL_PL } from '../../learn/oral-pl'
import { TERMS } from '../../learn/polish-extra'
import { READINGS } from '../../learn/readings'
import type { Subject } from '../../types'

interface Entry {
  to: string
  ico: string
  title: string
  sub: string
  ids?: string[]
}

export function LearnHub() {
  const learn = useLearn()
  const sections: { subject: Subject; name: string; entries: Entry[] }[] = [
    {
      subject: 'polski',
      name: 'Polski',
      entries: [
        { to: '/nauka/lektury', ico: '📚', title: 'Lektury', sub: `${READINGS.length} lektur: streszczenia, bohaterowie, motywy, konteksty, quiz`, ids: READINGS.map((r) => `lek:${r.id}`) },
        { to: '/nauka/pojecia', ico: '🔤', title: 'Słowniczek pojęć', sub: 'środki stylistyczne, pojęcia, gatunki, język w użyciu', ids: TERMS.map((t) => `term:${t.id}`) },
        { to: '/nauka/poradnik', ico: '📝', title: 'Jak zdać pisemny', sub: 'najczęstsze typy zadań, plan wypracowania, przydatne zwroty' },
        { to: '/nauka/ustna/polski', ico: '🗣️', title: 'Matura ustna', sub: `${ORAL_PL.length} pytań jawnych CKE, zegar, nagrywanie, samoocena`, ids: ORAL_PL.map((o) => `ustny-pl:${o.n}`) },
      ],
    },
    {
      subject: 'angielski',
      name: 'Angielski',
      entries: [
        { to: '/nauka/gramatyka', ico: '🧠', title: 'Gramatyka', sub: `${GRAMMAR.length} lekcji z ćwiczeniami sprawdzanymi od razu`, ids: GRAMMAR.map((l) => `gram:${l.id}`) },
        { to: '/nauka/ustna/angielski', ico: '💬', title: 'Matura ustna', sub: 'symulacja: rozmowa, odgrywanie roli, ilustracja, materiał stymulujący' },
      ],
    },
    {
      subject: 'matematyka',
      name: 'Matematyka',
      entries: [
        { to: '/nauka/matematyka', ico: '📐', title: 'Typowe zadania i sposoby', sub: `${MATH.length} typów zadań: metoda, przykład, pułapki, trening`, ids: MATH.map((m) => `mat:${m.id}`) },
      ],
    },
  ]
  return (
    <>
      <div className="topbar">
        <h1>Nauka</h1>
      </div>
      <p className="muted small" style={{ marginTop: 0 }}>
        Teoria w pigułce i ćwiczenia – uzupełnienie zadań z arkuszy.
      </p>
      {sections.map((s) => (
        <div key={s.subject} style={subjectStyle(s.subject)}>
          <h2 className="row" style={{ gap: 8 }}>
            <span className="badge">{SUBJECT_BADGE[s.subject]}</span> {s.name}
          </h2>
          <div className="list">
            {s.entries.map((e) => {
              const done = e.ids ? e.ids.filter((id) => learn.has(id)).length : undefined
              return (
                <Link key={e.to} to={e.to} className="card row learn-tile">
                  <span className="learn-ico">{e.ico}</span>
                  <div className="grow">
                    <b>{e.title}</b>
                    <div className="muted small">{e.sub}</div>
                  </div>
                  {done !== undefined && (
                    <span className="muted small">
                      {done}/{e.ids!.length}
                    </span>
                  )}
                  <span className="chev">›</span>
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
