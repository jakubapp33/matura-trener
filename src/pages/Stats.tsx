import { useMemo, useState } from 'react'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ProgressBar, subjectStyle, TopBar } from '../components/ui'
import { EXAM_BY_ID, examLabel, SUBJECTS, subjectName } from '../data'
import { topicName } from '../data/topics'
import { percent } from '../lib/grading'
import { coverage, tasksOfSubject, useProgress } from '../lib/hooks'
import type { Subject } from '../types'

const DAY = 86_400_000
const dayKey = (t: number) => new Date(t).toLocaleDateString('pl-PL', { day: 'numeric', month: 'numeric' })

const tooltipStyle = {
  contentStyle: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    color: 'var(--text)',
    fontSize: 13,
  },
  cursor: { fill: 'var(--surface-2)' },
}

export function Stats() {
  const { attempts, latest } = useProgress()
  const [subject, setSubject] = useState<Subject | 'all'>('all')
  const list = useMemo(
    () => (subject === 'all' ? attempts : attempts.filter((a) => a.subject === subject)),
    [attempts, subject],
  )

  // aktywność z ostatnich 14 dni
  const activity = useMemo(() => {
    const start = new Date().setHours(0, 0, 0, 0) - 13 * DAY
    const days = Array.from({ length: 14 }, (_, i) => ({ day: dayKey(start + i * DAY), zadania: 0 }))
    for (const a of list) {
      const i = Math.floor((a.date - start) / DAY)
      if (i >= 0 && i < 14) days[i].zadania++
    }
    return days
  }, [list])

  // wyniki egzaminów (tryb z zegarem) w czasie
  const exams = useMemo(() => {
    const groups = new Map<string, { examId: string; date: number; p: number; m: number }>()
    for (const a of list.filter((x) => x.mode === 'egzamin')) {
      const k = `${a.examId}@${a.date}`
      const g = groups.get(k) ?? { examId: a.examId, date: a.date, p: 0, m: 0 }
      g.p += a.points
      g.m += a.maxPoints
      groups.set(k, g)
    }
    return [...groups.values()]
      .sort((a, b) => a.date - b.date)
      .map((g) => {
        const e = EXAM_BY_ID.get(g.examId)!
        return { name: `${dayKey(g.date)}`, arkusz: `${subjectName(e.subject)} ${examLabel(e)}`, wynik: percent(g.p, g.m) }
      })
  }, [list])

  // najsłabsze działy – średni % z ostatnich prób zadań w dziale
  const topics = useMemo(() => {
    const m = new Map<string, { subject: Subject; topic: string; p: number; max: number; n: number }>()
    for (const a of latest.values()) {
      if (subject !== 'all' && a.subject !== subject) continue
      const k = `${a.subject}:${a.topic}`
      const g = m.get(k) ?? { subject: a.subject, topic: a.topic, p: 0, max: 0, n: 0 }
      g.p += a.points
      g.max += a.maxPoints
      g.n++
      m.set(k, g)
    }
    return [...m.values()].sort((a, b) => a.p / a.max - b.p / b.max)
  }, [latest, subject])

  const uniqueDone = new Set(list.map((a) => a.taskId)).size
  const pts = list.reduce((s, a) => s + a.points, 0)
  const max = list.reduce((s, a) => s + a.maxPoints, 0)

  return (
    <>
      <TopBar title="Postęp" back={false} />
      <div className="chips">
        <button className={`chip${subject === 'all' ? ' on' : ''}`} onClick={() => setSubject('all')}>
          Wszystko
        </button>
        {SUBJECTS.map((s) => (
          <button key={s.id} className={`chip${subject === s.id ? ' on' : ''}`} onClick={() => setSubject(s.id)}>
            {s.short}
          </button>
        ))}
      </div>

      <div className="grid2" style={{ marginTop: 12 }}>
        <div className="card stat">
          <span className="muted small">Zrobione zadania</span>
          <b>{uniqueDone}</b>
          <span className="muted small">{list.length} prób łącznie</span>
        </div>
        <div className="card stat">
          <span className="muted small">Skuteczność</span>
          <b>{percent(pts, max)}%</b>
          <span className="muted small">
            {pts}/{max} pkt
          </span>
        </div>
      </div>

      {subject === 'all' && (
        <>
          <h2>Przedmioty</h2>
          <div className="list">
            {SUBJECTS.map((s) => {
              const c = coverage(tasksOfSubject(s.id), latest)
              return (
                <div key={s.id} className="card" style={subjectStyle(s.id)}>
                  <div className="row">
                    <b className="grow">{s.name}</b>
                    <span className="small muted">
                      {c.done}/{c.total} zadań · {c.perfect} na max
                    </span>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <ProgressBar value={c.pct} subject={s.id} />
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}

      <h2>Aktywność – ostatnie 14 dni</h2>
      <div className="card" style={{ padding: '12px 4px 4px 0' }}>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={activity} margin={{ left: 0, right: 8 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--muted)' }} tickLine={false} axisLine={false} interval={1} />
            <YAxis allowDecimals={false} width={32} tick={{ fontSize: 11, fill: 'var(--muted)' }} tickLine={false} axisLine={false} />
            <Tooltip {...tooltipStyle} formatter={(v) => [`${v}`, 'zadań']} />
            <Bar dataKey="zadania" fill="var(--accent)" radius={[4, 4, 0, 0]} maxBarSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2>Wyniki egzaminów (%)</h2>
      {exams.length === 0 ? (
        <div className="card muted small">Zrób arkusz w trybie egzaminu, aby zobaczyć tu swoje wyniki w czasie.</div>
      ) : (
        <div className="card" style={{ padding: '12px 4px 4px 0' }}>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={exams} margin={{ left: 0, right: 12 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--muted)' }} tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} width={32} tick={{ fontSize: 11, fill: 'var(--muted)' }} tickLine={false} axisLine={false} />
              <Tooltip
                {...tooltipStyle}
                cursor={{ stroke: 'var(--muted)' }}
                formatter={(v) => [`${v}%`, 'wynik']}
                labelFormatter={(_, p) => p?.[0]?.payload?.arkusz ?? ''}
              />
              <Line dataKey="wynik" stroke="var(--accent)" strokeWidth={2} dot={{ r: 4, fill: 'var(--accent)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      <h2>Działy – od najsłabszego</h2>
      {topics.length === 0 ? (
        <div className="card muted small">Rozwiąż kilka zadań, a pokażę, które działy wymagają powtórki.</div>
      ) : (
        <div className="list">
          {topics.map((t) => (
            <div key={`${t.subject}:${t.topic}`} className="card" style={subjectStyle(t.subject)}>
              <div className="row">
                <span className="grow">
                  {topicName(t.subject, t.topic)}
                  {subject === 'all' && <span className="muted small"> · {subjectName(t.subject)}</span>}
                </span>
                <b>{percent(t.p, t.max)}%</b>
              </div>
              <div style={{ margin: '6px 0 2px' }}>
                <ProgressBar value={percent(t.p, t.max)} subject={t.subject} />
              </div>
              <span className="muted small">{t.n} zadań</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
