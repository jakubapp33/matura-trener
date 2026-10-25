import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { subjectStyle, TopBar } from '../../components/ui'
import { ScoreBadge, useLearn } from '../../learn/hooks'
import { ORAL_PL } from '../../learn/oral-pl'
import { GUIDE_QUIZ, POLISH_GUIDE, TERMS, termQuiz } from '../../learn/polish-extra'
import { Quiz } from '../../learn/Quiz'
import { READING_BY_ID, READINGS } from '../../learn/readings'
import { Rich } from '../../learn/Rich'

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l')

export function ReadingList() {
  const learn = useLearn()
  const [q, setQ] = useState('')
  const words = norm(q).split(/\s+/).filter(Boolean)
  const list = READINGS.filter((r) => {
    const hay = norm(`${r.title} ${r.author} ${r.epoch} ${r.motifs.join(' ')} ${r.characters.map((c) => c[0]).join(' ')}`)
    return words.every((w) => hay.includes(w))
  })
  const epochs = [...new Set(list.map((r) => r.epoch))]
  return (
    <div style={subjectStyle('polski')}>
      <TopBar title="Lektury" />
      <p className="muted small" style={{ marginTop: 0 }}>
        Lektury obowiązkowe z listy pytań jawnych CKE na lata 2026–2028 (i kilka innych ważnych). Każda: streszczenie, bohaterowie, motywy, konteksty,
        pytania na maturę ustną i quiz.
      </p>
      <input className="search-input" type="search" placeholder="Szukaj: tytuł, autor, motyw (np. „wina”, „miłość”), bohater…" value={q} onChange={(e) => setQ(e.target.value)} />
      {epochs.map((ep) => (
        <div key={ep}>
          <h2>{ep}</h2>
          <div className="list">
            {list
              .filter((r) => r.epoch === ep)
              .map((r) => {
                const oral = ORAL_PL.filter((o) => o.reading === r.id).length
                return (
                  <Link key={r.id} to={`/nauka/lektury/${r.id}`} className="card row">
                    <div className="grow">
                      <b>{r.title}</b>
                      <div className="muted small">
                        {r.author}
                        {oral > 0 && ` · ${oral} pyt. ustne`}
                      </div>
                    </div>
                    <ScoreBadge r={learn.get(`lek:${r.id}`)} />
                    <span className="chev">›</span>
                  </Link>
                )
              })}
          </div>
        </div>
      ))}
      {!list.length && <div className="empty">Nic nie znaleziono.</div>}
    </div>
  )
}

export function ReadingPage() {
  const { id } = useParams()
  const r = id ? READING_BY_ID.get(id) : undefined
  if (!r) return <Navigate to="/nauka/lektury" />
  const oral = ORAL_PL.filter((o) => o.reading === r.id)
  return (
    <div style={subjectStyle('polski')}>
      <TopBar title={r.title} />
      <div className="read-meta">
        <span className="pill">{r.author}</span>
        <span className="pill">{r.epoch}</span>
        <span className="pill">{r.year}</span>
        <span className="pill">{r.genre}</span>
      </div>
      {r.note && <div className="tip">⚠️ {r.note}</div>}
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Streszczenie</h3>
        <Rich text={r.summary} />
      </div>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Bohaterowie</h3>
        <div className="rich">
          <ul>
            {r.characters.map(([n, d]) => (
              <li key={n}>
                <b>{n}</b> – {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Co musisz wiedzieć</h3>
        <div className="rich">
          <ul>
            {r.must.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Motywy i problemy</h3>
        <div className="chips" style={{ flexWrap: 'wrap' }}>
          {r.motifs.map((m) => (
            <span key={m} className="chip">
              {m}
            </span>
          ))}
        </div>
        <h3>Konteksty – z czym porównać</h3>
        <div className="rich">
          <ul>
            {r.contexts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      {oral.length > 0 && (
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Pytania na maturę ustną (CKE)</h3>
          <div className="list" style={{ gap: 6 }}>
            {oral.map((o) => (
              <Link key={o.n} to={`/nauka/ustna/polski?q=${o.n}`} className="row small">
                <span className="pill">{o.n}</span>
                <span className="grow">{o.topic}</span>
                <span className="chev">›</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <h2>Sprawdź się</h2>
      <Quiz key={r.id} id={`lek:${r.id}`} exercises={r.quiz} />
    </div>
  )
}

export function TermsPage() {
  const learn = useLearn()
  const [group, setGroup] = useState(TERMS[0].id)
  const [mode, setMode] = useState<'list' | 'quiz'>('list')
  const g = TERMS.find((x) => x.id === group)!
  return (
    <div style={subjectStyle('polski')}>
      <TopBar title="Słowniczek pojęć" />
      <div className="chips" style={{ flexWrap: 'wrap' }}>
        {TERMS.map((t) => (
          <button key={t.id} className={`chip${group === t.id ? ' on' : ''}`} onClick={() => setGroup(t.id)}>
            {t.name}
          </button>
        ))}
      </div>
      <div className="chips" style={{ margin: '10px 0' }}>
        <button className={`chip${mode === 'list' ? ' on' : ''}`} onClick={() => setMode('list')}>
          📖 Ucz się
        </button>
        <button className={`chip${mode === 'quiz' ? ' on' : ''}`} onClick={() => setMode('quiz')}>
          🎯 Quiz <ScoreBadge r={learn.get(`term:${group}`)} />
        </button>
      </div>
      {mode === 'list' ? (
        <div className="list" style={{ gap: 8 }}>
          {g.terms.map((t) => (
            <div key={t.term} className="card">
              <b>{t.term}</b>
              <div className="small">{t.def}</div>
              {t.ex && <div className="muted small">np. {t.ex}</div>}
            </div>
          ))}
        </div>
      ) : (
        <Quiz key={group} id={`term:${group}`} exercises={termQuiz(g)} limit={10} />
      )}
    </div>
  )
}

export function PolishGuide() {
  return (
    <div style={subjectStyle('polski')}>
      <TopBar title="Matura z polskiego – poradnik" />
      <div className="card">
        <Rich text={POLISH_GUIDE} />
      </div>
      <h2>Sprawdź się</h2>
      <Quiz id="pol:poradnik" exercises={GUIDE_QUIZ} />
    </div>
  )
}
