import { useState } from 'react'
import { askAi } from '../lib/ai-help'
import type { Task } from '../types'

/** „Zapytaj AI” – darmowo, przez aplikację ChatGPT / Claude / Gemini użytkownika (bez kluczy i kont w Matura Trenerze). */
export function AskAi({ task, given }: { task: Task; given?: string[] }) {
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [more, setMore] = useState(false)
  const go = async (s: 'share' | 'chatgpt' | 'claude' | 'gemini') => {
    setBusy(true)
    setMsg('')
    try {
      const r = await askAi(task, given, s)
      if (r === 'copied') setMsg('Pytanie skopiowane. Jeśli czat się nie uzupełnił – wklej je. Dołącz też zrzut ekranu zadania.')
    } finally {
      setBusy(false)
    }
  }
  return (
    <div className="ask-ai">
      <button className="btn block" disabled={busy} onClick={() => go('share')}>
        {busy ? 'Przygotowuję zdjęcie zadania…' : '🤖 Zapytaj AI – wytłumacz mi to'}
      </button>
      <div className="tiny muted" style={{ marginTop: 4 }}>
        Wyśle zdjęcie zadania i gotowe pytanie do Twojej aplikacji (ChatGPT, Claude, Gemini) – wybierz ją w menu „Udostępnij”.{' '}
        <button className="linkish" onClick={() => setMore(!more)}>
          {more ? 'mniej' : 'inne opcje'}
        </button>
      </div>
      {more && (
        <div className="chips" style={{ marginTop: 6 }}>
          <button className="chip" onClick={() => go('chatgpt')}>ChatGPT w przeglądarce</button>
          <button className="chip" onClick={() => go('claude')}>Claude w przeglądarce</button>
          <button className="chip" onClick={() => go('gemini')}>Gemini</button>
        </div>
      )}
      {msg && <div className="small muted" style={{ marginTop: 6 }}>{msg}</div>}
    </div>
  )
}
