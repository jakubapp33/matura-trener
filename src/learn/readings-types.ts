import type { Exercise } from './types'

export interface Reading {
  id: string
  title: string
  author: string
  epoch: string
  /** rok powstania / wydania (orientacyjnie) */
  year: string
  genre: string
  /** dłuższe streszczenie (zapis jak w lekcjach: akapity, ## śródtytuły, listy) */
  summary: string
  /** [postać, opis] */
  characters: [string, string][]
  /** motywy i problemy – do wypracowania i matury ustnej */
  motifs: string[]
  /** gotowe konteksty: z czym porównać */
  contexts: string[]
  /** co trzeba wiedzieć (fakty, które najczęściej sprawdza test) */
  must: string[]
  quiz: Exercise[]
  /** gdy materiał jest skrócony – uczciwa informacja */
  note?: string
}
