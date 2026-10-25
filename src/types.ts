export type Subject = 'matematyka' | 'polski' | 'angielski'
export type TaskType = 'zamkniete' | 'otwarte'

export interface Exam {
  id: string // np. "mat-2025-maj"
  subject: Subject
  name: string
  year: number
  session: string // maj | czerwiec | sierpien | probna | ...
  formula: 2015 | 2023
  minutes: number
  examFile: string // ścieżka względna w public/, np. "pdf/2025/MMAP-P0-100-A-2505-arkusz.pdf"
  keyFile: string
  examUrl: string // oryginalny adres CKE
  keyUrl: string
  audioUrl?: string
}

/** Pojedyncza odpowiedź do zaznaczenia (np. 1.1 → B albo stwierdzenie → P/F). */
export interface Item {
  label: string
  options: string[]
  /** Poprawna odpowiedź; przy `pick` > 1 – zestaw liter w dowolnej kolejności, np. "CE". */
  correct: string
  /** Ile opcji trzeba wybrać (domyślnie 1). Każda trafiona = 1 pkt. */
  pick?: number
}

/** Fragment strony PDF. */
export interface Segment {
  p: number
  t: number
  b: number
}

export interface Task {
  id: string // np. "mat-2025-maj-z12.1"
  examId: string
  subject: Subject
  number: string // "12.1"
  topic: string // id działu z topics.ts
  type: TaskType
  maxPoints: number
  /** Tylko zadania zamknięte: odpowiedzi sprawdzane automatycznie. */
  items?: Item[]
  /** Punkty wg liczby poprawnych elementów, np. [0, 0, 1, 2] = 2 dobre → 1 pkt, 3 dobre → 2 pkt. */
  scale?: number[]
  examPages: number[]
  keyPages: number[]
  /** fragmenty arkusza z tym zadaniem (bez sąsiednich zadań); t, b – ułamek wysokości strony */
  crop?: Segment[]
  /** wspólne teksty do kilku zadań (np. teksty w teście z polskiego) */
  context?: Segment[]
  /** fragment zasad oceniania dla tego zadania */
  keyCrop?: Segment[]
}

export type Mode = 'trening' | 'egzamin'

export interface Attempt {
  id?: number
  taskId: string
  examId: string
  subject: Subject
  topic: string
  answers?: string[]
  points: number
  maxPoints: number
  mode: Mode
  date: number // ms
}
