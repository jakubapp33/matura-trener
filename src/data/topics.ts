import type { Subject } from '../types'

export interface Topic {
  id: string
  name: string
}

export const TOPICS: Record<Subject, Topic[]> = {
  matematyka: [
    { id: 'liczby', name: 'Liczby rzeczywiste' },
    { id: 'potegi', name: 'Potęgi i pierwiastki' },
    { id: 'logarytmy', name: 'Logarytmy' },
    { id: 'procenty', name: 'Procenty' },
    { id: 'wyrazenia', name: 'Wyrażenia algebraiczne' },
    { id: 'rownania', name: 'Równania i nierówności' },
    { id: 'uklady', name: 'Układy równań' },
    { id: 'funkcje', name: 'Funkcje – własności i wykresy' },
    { id: 'f-liniowa', name: 'Funkcja liniowa' },
    { id: 'f-kwadratowa', name: 'Funkcja kwadratowa' },
    { id: 'f-wykladnicza', name: 'Funkcja wykładnicza' },
    { id: 'ciagi', name: 'Ciągi' },
    { id: 'trygonometria', name: 'Trygonometria' },
    { id: 'planimetria', name: 'Planimetria' },
    { id: 'geometria-analityczna', name: 'Geometria analityczna' },
    { id: 'stereometria', name: 'Stereometria' },
    { id: 'kombinatoryka', name: 'Kombinatoryka' },
    { id: 'prawdopodobienstwo', name: 'Prawdopodobieństwo i statystyka' },
    { id: 'optymalizacja', name: 'Optymalizacja' },
  ],
  polski: [
    { id: 'jezyk-w-uzyciu', name: 'Język polski w użyciu' },
    { id: 'historycznoliteracki', name: 'Test historycznoliteracki' },
    { id: 'wypracowanie', name: 'Wypracowanie' },
  ],
  angielski: [
    { id: 'sluchanie', name: 'Rozumienie ze słuchu' },
    { id: 'czytanie', name: 'Rozumienie tekstów pisanych' },
    { id: 'srodki-jezykowe', name: 'Znajomość środków językowych' },
    { id: 'pisanie', name: 'Wypowiedź pisemna' },
  ],
}

export const topicName = (subject: Subject, id: string) =>
  TOPICS[subject].find((t) => t.id === id)?.name ?? id
