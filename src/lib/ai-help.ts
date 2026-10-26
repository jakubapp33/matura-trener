import { EXAM_BY_ID, examLabel, subjectName } from '../data'
import { topicName } from '../data/topics'
import type { Segment, Task } from '../types'
import { openPdf } from './pdf'

/** Obraz zadania (wycięte fragmenty arkusza, jeden pod drugim) jako PNG – do wysłania asystentowi AI. */
export async function taskImage(task: Task): Promise<Blob> {
  const exam = EXAM_BY_ID.get(task.examId)!
  const doc = await openPdf(exam.examFile)
  const segs: Segment[] = [...(task.crop?.length ? task.crop : task.examPages.map((p) => ({ p, t: 0, b: 1 })))]
  const W = 1100
  const parts: { c: HTMLCanvasElement; y: number; h: number }[] = []
  for (const s of segs) {
    const page = await doc.getPage(s.p)
    const base = page.getViewport({ scale: 1 })
    const vp = page.getViewport({ scale: W / base.width })
    const c = document.createElement('canvas')
    c.width = W
    c.height = Math.floor(vp.height)
    const ctx = c.getContext('2d')!
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, c.width, c.height)
    await page.render({ canvasContext: ctx, viewport: vp }).promise
    parts.push({ c, y: Math.round(s.t * vp.height), h: Math.round((s.b - s.t) * vp.height) })
  }
  const out = document.createElement('canvas')
  out.width = W
  out.height = parts.reduce((a, p) => a + p.h + 8, 0)
  const ctx = out.getContext('2d')!
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, out.width, out.height)
  let y = 0
  for (const p of parts) {
    ctx.drawImage(p.c, 0, p.y, W, p.h, 0, y, W, p.h)
    y += p.h + 8
  }
  return new Promise((res, rej) => out.toBlob((b) => (b ? res(b) : rej(new Error('Nie udało się utworzyć obrazu'))), 'image/png'))
}

/** Gotowe pytanie do asystenta AI. */
export function aiPrompt(task: Task, given?: string[]): string {
  const exam = EXAM_BY_ID.get(task.examId)!
  const where = `zadanie ${task.number} z matury: ${subjectName(task.subject)}, poziom podstawowy, ${examLabel(exam)} (dział: ${topicName(task.subject, task.topic)})`
  const lines = [`Uczę się do matury. Na zdjęciu jest ${where}.`]
  if (task.items?.length) {
    const correct = task.items.map((it) => `${it.label}: ${it.correct}`).join('; ')
    if (given?.some(Boolean)) lines.push(`Zaznaczyłem: ${task.items.map((it, i) => `${it.label}: ${given[i] || '—'}`).join('; ')}. Poprawna odpowiedź według klucza CKE: ${correct}.`)
    else lines.push(`Poprawna odpowiedź według klucza CKE: ${correct}.`)
    lines.push('Wyjaśnij krok po kroku, prostym językiem, jak dojść do poprawnej odpowiedzi, i pokaż, gdzie mogłem popełnić błąd. Na końcu podaj krótką wskazówkę, jak rozpoznawać takie zadania.')
  } else {
    lines.push('To zadanie otwarte. Pokaż przykładowe pełne rozwiązanie krok po kroku, prostym językiem, i powiedz, za co CKE zwykle przyznaje punkty.')
  }
  lines.push('Nie podawaj od razu samego wyniku – najpierw zapytaj mnie, czy chcę spróbować sam po pierwszej wskazówce.')
  return lines.join('\n')
}

export type AiResult = 'shared' | 'copied' | 'cancelled'

/**
 * Wysyła zadanie do aplikacji AI przez systemowe menu „Udostępnij” (obraz + pytanie).
 * Gdy się nie da – kopiuje pytanie i otwiera czat w przeglądarce.
 */
export async function askAi(task: Task, given: string[] | undefined, service: 'share' | 'chatgpt' | 'claude' | 'gemini'): Promise<AiResult> {
  const text = aiPrompt(task, given)
  if (service === 'share') {
    try {
      const blob = await taskImage(task)
      const file = new File([blob], `zadanie-${task.number}.png`, { type: 'image/png' })
      if (navigator.canShare?.({ files: [file], text })) {
        await navigator.share({ files: [file], text })
        return 'shared'
      }
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelled'
    }
    service = 'chatgpt'
  }
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    /* schowek niedostępny – pytanie i tak trafia w adresie */
  }
  const q = encodeURIComponent(text)
  const url =
    service === 'claude' ? `https://claude.ai/new?q=${q}` : service === 'gemini' ? 'https://gemini.google.com/app' : `https://chatgpt.com/?q=${q}`
  window.open(url, '_blank')
  return 'copied'
}
