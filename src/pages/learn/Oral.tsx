import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { subjectStyle, TopBar } from '../../components/ui'
import { saveLearn } from '../../db/progress'
import { useLearn } from '../../learn/hooks'
import { EN_PHRASES, PICTURES, ROLE_PLAYS, STIMULI, WARMUP_QUESTIONS } from '../../learn/oral-en'
import { Checklist, Countdown, Recorder } from '../../learn/oral-kit'
import { ORAL_PL } from '../../learn/oral-pl'
import { READING_BY_ID, READINGS } from '../../learn/readings'
import { Rich } from '../../learn/Rich'

const pick = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)]

export function OralHub() {
  const learn = useLearn()
  const donePl = ORAL_PL.filter((o) => learn.has(`ustny-pl:${o.n}`)).length
  return (
    <>
      <TopBar title="Matura ustna" />
      <p className="muted small" style={{ marginTop: 0 }}>
        Symulacja egzaminu: losujesz zadanie, masz czas na przygotowanie, mówisz (możesz się nagrać i odsłuchać), a potem oceniasz się według kryteriów.
      </p>
      <div className="list">
        <Link to="/nauka/ustna/polski" className="card row learn-tile" style={subjectStyle('polski')}>
          <span className="learn-ico">🗣️</span>
          <div className="grow">
            <b>Język polski</b>
            <div className="muted small">76 pytań jawnych CKE (2026–2028) · przećwiczone: {donePl}</div>
          </div>
          <span className="chev">›</span>
        </Link>
        <Link to="/nauka/ustna/angielski" className="card row learn-tile" style={subjectStyle('angielski')}>
          <span className="learn-ico">💬</span>
          <div className="grow">
            <b>Język angielski</b>
            <div className="muted small">rozmowa wstępna, odgrywanie roli, ilustracja, materiał stymulujący</div>
          </div>
          <span className="chev">›</span>
        </Link>
      </div>
    </>
  )
}

const PL_CRITERIA = [
  'Sformułowałem/am stanowisko (tezę) odpowiadające na pytanie',
  'Odwołałem/am się do lektury konkretnie (wydarzenia, bohaterowie, cytaty)',
  'Argumenty naprawdę uzasadniają tezę (nie samo streszczenie)',
  'Uwzględniłem/am kontekst i pokazałem/am, co z niego wynika',
  'Wypowiedź miała wstęp, rozwinięcie i wniosek',
  'Mówiłem/am poprawnie i płynnie, ok. 10 minut',
]

type Phase = 'choose' | 'prep' | 'speak' | 'review'

export function OralPolish() {
  const [params, setParams] = useSearchParams()
  const learn = useLearn()
  const qn = Number(params.get('q')) || undefined
  const [filter, setFilter] = useState('')
  const [phase, setPhase] = useState<Phase>('choose')
  const [hints, setHints] = useState(false)
  const [notes, setNotes] = useState('')
  const [score, setScore] = useState(0)
  const [saved, setSaved] = useState(false)
  const q = ORAL_PL.find((o) => o.n === qn)
  const reading = q ? READING_BY_ID.get(q.reading) : undefined

  const draw = () => {
    const pool = ORAL_PL.filter((o) => !filter || o.reading === filter)
    // najpierw te jeszcze nieprzećwiczone
    const fresh = pool.filter((o) => !learn.has(`ustny-pl:${o.n}`))
    const next = pick(fresh.length ? fresh : pool)
    setParams({ q: String(next.n) }, { replace: true })
    setPhase('choose')
    setNotes('')
    setHints(false)
    setSaved(false)
  }

  return (
    <div style={subjectStyle('polski')}>
      <TopBar title="Ustny polski" />
      {phase === 'choose' && (
        <>
          <div className="card">
            <Rich
              text={`> Egzamin: **ok. 15 min przygotowania**, potem **wypowiedź ok. 10 min** i **rozmowa z komisją ok. 5 min**. Losujesz zadanie jawne (z tej listy) i niejawne (krótki tekst). Tu ćwiczysz zadanie jawne.`}
            />
            <select className="search-input" value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Lektura">
              <option value="">Wszystkie lektury</option>
              {READINGS.filter((r) => ORAL_PL.some((o) => o.reading === r.id)).map((r) => (
                <option key={r.id} value={r.id}>
                  {r.title}
                </option>
              ))}
            </select>
            <button className="btn primary block" onClick={draw}>
              🎲 Losuj pytanie
            </button>
          </div>
          {q && (
            <div className="card">
              <div className="muted small">Zadanie {q.n}</div>
              <div className="oral-q">{q.full}</div>
              <button className="btn primary block" onClick={() => setPhase('prep')}>
                Zaczynam przygotowanie (15 min)
              </button>
              <button className="btn block" style={{ marginTop: 6 }} onClick={() => setPhase('speak')}>
                Pomiń przygotowanie – od razu mówię
              </button>
            </div>
          )}
        </>
      )}

      {q && phase !== 'choose' && (
        <div className="card">
          <div className="muted small">Zadanie {q.n}</div>
          <div className="oral-q">{q.full}</div>
        </div>
      )}

      {q && phase === 'prep' && (
        <>
          <Countdown key="prep" seconds={15 * 60} label="Przygotowanie" />
          <textarea
            className="notes"
            placeholder={'Plan: teza…\nArgument 1 (lektura): …\nArgument 2: …\nKontekst: …\nWniosek: …'}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          {reading && (
            <button className="btn block" onClick={() => setHints(!hints)}>
              {hints ? 'Ukryj podpowiedzi' : '💡 Podpowiedzi (motywy i konteksty)'}
            </button>
          )}
          {hints && reading && (
            <div className="card small">
              <b>Motywy:</b> {reading.motifs.join(', ')}
              <div className="rich">
                <ul>
                  {reading.contexts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <Link to={`/nauka/lektury/${reading.id}`}>Pełne opracowanie lektury ›</Link>
            </div>
          )}
          <button className="btn primary block" style={{ marginTop: 8 }} onClick={() => setPhase('speak')}>
            Jestem gotowy/a – mówię
          </button>
        </>
      )}

      {q && phase === 'speak' && (
        <>
          <Countdown key="speak" seconds={10 * 60} label="Wypowiedź" />
          {notes && <div className="card small notes-view">{notes}</div>}
          <button className="btn primary block" style={{ marginTop: 8 }} onClick={() => setPhase('review')}>
            Skończyłem/am – samoocena
          </button>
        </>
      )}

      {/* to samo miejsce w drzewie – nagranie nie znika po przejściu do samooceny */}
      {q && (phase === 'speak' || phase === 'review') && <Recorder key={q.n} />}

      {q && phase === 'review' && (
        <div className="card">
          <b>Oceń swoją wypowiedź</b>
          <Checklist items={PL_CRITERIA} onChange={(s) => setScore(s)} />
          {!saved ? (
            <button
              className="btn primary block"
              onClick={async () => {
                await saveLearn(`ustny-pl:${q.n}`, score)
                setSaved(true)
              }}
            >
              Zapisz wynik ({Math.round(score * 100)}%)
            </button>
          ) : (
            <div className="result good">Zapisano. Spróbuj kolejnego pytania!</div>
          )}
          {reading && (
            <Link to={`/nauka/lektury/${reading.id}`} className="btn block" style={{ marginTop: 8 }}>
              Sprawdź opracowanie: {reading.title}
            </Link>
          )}
          <button className="btn block" style={{ marginTop: 8 }} onClick={draw}>
            🎲 Następne pytanie
          </button>
        </div>
      )}

      {phase === 'choose' && (
        <>
          <h2>Wszystkie pytania</h2>
          <div className="list" style={{ gap: 6 }}>
            {ORAL_PL.filter((o) => !filter || o.reading === filter).map((o) => {
              const r = learn.get(`ustny-pl:${o.n}`)
              return (
                <button key={o.n} className="card row small" style={{ textAlign: 'left' }} onClick={() => setParams({ q: String(o.n) }, { replace: true })}>
                  <span className="pill">{o.n}</span>
                  <span className="grow">
                    {o.topic} <span className="muted">– {READING_BY_ID.get(o.reading)?.title}</span>
                  </span>
                  {r && <span className="pill good">✓</span>}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

const EN_CRITERIA = [
  'Odniosłem/am się do wszystkich 4 elementów rozmowy',
  'Opisałem/am ilustrację (kto, gdzie, co robi) i odpowiedziałem/am na 3 pytania',
  'Wybrałem/am opcję, uzasadniłem/am wybór i odrzucenie pozostałych',
  'Rozwijałem/am odpowiedzi (because…, przykład, własne doświadczenie)',
  'Mówiłem/am płynnie, bez długich przerw',
  'Używałem/am poprawnej gramatyki i różnorodnego słownictwa',
]

export function OralEnglish() {
  const [seed, setSeed] = useState(0)
  const set = useMemo(
    () => ({ warm: [pick(WARMUP_QUESTIONS), pick(WARMUP_QUESTIONS)], role: pick(ROLE_PLAYS), pic: pick(PICTURES), stim: pick(STIMULI) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  )
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [saved, setSaved] = useState(false)
  const [lines, setLines] = useState(false)
  const restart = () => {
    setSeed((s) => s + 1)
    setStep(0)
    setSaved(false)
    setLines(false)
    window.scrollTo(0, 0)
  }
  const steps = ['Start', 'Rozmowa wstępna', 'Zadanie 1', 'Zadanie 2', 'Zadanie 3', 'Samoocena']
  const next = () => {
    setStep((s) => s + 1)
    setLines(false)
    window.scrollTo(0, 0)
  }

  return (
    <div style={subjectStyle('angielski')}>
      <TopBar title="Ustny angielski" right={<span className="muted small">{steps[step]}</span>} />
      {step === 0 && (
        <>
          <div className="card">
            <Rich
              text={`Egzamin trwa ok. **15 minut**:
- **Rozmowa wstępna** – kilka pytań o Ciebie (ok. 2 min, nieoceniana).
- **Zadanie 1 – rozmowa z odgrywaniem roli** (ok. 3 min): egzaminujący gra drugą osobę, musisz omówić **4 elementy**.
- **Zadanie 2 – opis ilustracji i 3 pytania** (ok. 4 min).
- **Zadanie 3 – materiał stymulujący i 2 pytania** (ok. 5 min): wybierasz jedną z trzech opcji, uzasadniasz wybór i mówisz, dlaczego odrzucasz pozostałe.

> Zestawy tutaj są treningowe, w formacie CKE. Zamiast zdjęć jest opis sceny – opisz ją po angielsku tak, jakbyś patrzył/a na zdjęcie. Pytania egzaminującego przeczytaj na głos sam/a albo poproś kogoś, by je zadał.`}
            />
          </div>
          <button className="btn primary block" style={{ marginTop: 8 }} onClick={next}>
            Zaczynamy
          </button>
          <details className="card" style={{ marginTop: 10 }}>
            <summary>
              <b>Przydatne zwroty</b>
            </summary>
            <Rich text={EN_PHRASES} />
          </details>
        </>
      )}

      {step === 1 && (
        <>
          <Countdown key="w" seconds={120} label="Rozmowa wstępna" />
          <div className="card">
            {set.warm.map((w) => (
              <div key={w} className="oral-q">
                {w}
              </div>
            ))}
          </div>
          <button className="btn primary block" onClick={next}>
            Dalej – zadanie 1
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <Countdown key="r" seconds={180} label="Zadanie 1 – rozmowa z odgrywaniem roli" />
          <div className="card">
            <b>{set.role.title}</b>
            <p>{set.role.situation}</p>
            <div className="small muted">Egzaminujący: {set.role.examiner}. Omów:</div>
            <ul>
              {set.role.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <button className="btn block" onClick={() => setLines(!lines)}>
              {lines ? 'Ukryj kwestie egzaminującego' : 'Pokaż kwestie egzaminującego'}
            </button>
            {lines && (
              <ol className="small">
                {set.role.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ol>
            )}
          </div>
          <button className="btn primary block" onClick={next}>
            Dalej – zadanie 2
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <Countdown key="p" seconds={240} label="Zadanie 2 – ilustracja" />
          <div className="card">
            <div className="small muted">Opisz ilustrację:</div>
            <div className="scene">🖼️ {set.pic.scene}</div>
            <div className="small muted" style={{ marginTop: 8 }}>
              Potem odpowiedz na pytania:
            </div>
            <ol>
              {set.pic.questions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
          </div>
          <button className="btn primary block" onClick={next}>
            Dalej – zadanie 3
          </button>
        </>
      )}

      {step === 4 && (
        <>
          <Countdown key="s" seconds={300} label="Zadanie 3 – materiał stymulujący" />
          <div className="card">
            <p>{set.stim.task}</p>
            <div className="list" style={{ gap: 6 }}>
              {set.stim.options.map((o, i) => (
                <div key={o} className="scene">
                  {String.fromCharCode(65 + i)}. {o}
                </div>
              ))}
            </div>
            <div className="small muted" style={{ marginTop: 8 }}>
              Potem odpowiedz na pytania:
            </div>
            <ol>
              {set.stim.questions.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
          </div>
          <button className="btn primary block" onClick={next}>
            Koniec – samoocena
          </button>
        </>
      )}

      {step === 5 && (
        <div className="card">
          <b>Oceń swoją wypowiedź</b>
          <Checklist items={EN_CRITERIA} onChange={(s) => setScore(s)} />
          {!saved ? (
            <button
              className="btn primary block"
              onClick={async () => {
                await saveLearn('ustny-en', score)
                setSaved(true)
              }}
            >
              Zapisz wynik ({Math.round(score * 100)}%)
            </button>
          ) : (
            <div className="result good">Zapisano.</div>
          )}
          <button className="btn block" style={{ marginTop: 8 }} onClick={restart}>
            🎲 Nowy zestaw
          </button>
        </div>
      )}

      {/* jedno nagranie przez cały zestaw – można nagrać całą symulację i odsłuchać przy samoocenie */}
      <div style={{ marginTop: 10 }}>
        <Recorder key={seed} />
      </div>
    </div>
  )
}
