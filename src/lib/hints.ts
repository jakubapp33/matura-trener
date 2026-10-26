import explainJson from '../data/explain.json'
import { MATH } from '../learn/math'
import type { Subject, Task } from '../types'

const MATH_TITLES = Object.fromEntries(MATH.map((m) => [m.id, m.title]))

/** Krótkie wyjaśnienia do konkretnych zadań zamkniętych („jak to zrobić”). */
export const EXPLAIN = explainJson as Record<string, string>

export interface HintLink {
  to: string
  label: string
}

/** Lekcje z sekcji Nauka pasujące do działu zadania. */
const MATH_LINKS: Record<string, string[]> = {
  liczby: ['potegi', 'wartosc-bezwzgledna'],
  potegi: ['potegi'],
  logarytmy: ['logarytmy'],
  procenty: ['procenty'],
  wyrazenia: ['wzory-skrocone'],
  rownania: ['nierownosc-kwadratowa', 'wymierne', 'wartosc-bezwzgledna'],
  uklady: ['uklady'],
  funkcje: ['funkcja-wykres'],
  'f-liniowa': ['liniowa'],
  'f-kwadratowa': ['kwadratowa'],
  'f-wykladnicza': ['funkcja-wykres'],
  ciagi: ['arytmetyczny', 'geometryczny'],
  trygonometria: ['trygonometria'],
  planimetria: ['planimetria'],
  'geometria-analityczna': ['analityczna'],
  stereometria: ['stereometria'],
  kombinatoryka: ['kombinatoryka'],
  prawdopodobienstwo: ['prawdopodobienstwo', 'statystyka'],
  optymalizacja: ['optymalizacja'],
}

/** Ogólna strategia dla typu zadania (gdy nie ma wyjaśnienia konkretnego zadania). */
const STRATEGY: Partial<Record<`${Subject}:${string}`, string>> = {
  'angielski:sluchanie': `**Jak rozwiązywać zadania ze słuchu:**
- Przed nagraniem przeczytaj pytania i odpowiedzi, podkreśl **słowa-klucze**.
- Odpowiedź w nagraniu zwykle pada **innymi słowami** (synonimy, parafraza). Nie wybieraj opcji tylko dlatego, że usłyszałeś/aś to samo słowo – to częsta pułapka.
- Uważaj na zmiany zdania („I was going to…, but…”, „actually”), przeczenia i porównania.
- Po sprawdzeniu przejrzyj zasady oceniania CKE – zwykle jest tam też **transkrypcja nagrania**: znajdź zdanie, które daje odpowiedź.`,
  'angielski:czytanie': `**Jak rozwiązywać zadania z czytania:**
- Najpierw przeczytaj polecenie i pytania, potem szukaj w tekście **fragmentu, który na nie odpowiada**.
- Poprawna odpowiedź **parafrazuje** tekst; błędne często używają tych samych słów co tekst, ale zmieniają sens.
- Odrzucaj opcje zbyt ogólne lub zbyt mocne („always”, „never”, „all”), gdy tekst mówi ostrożniej.
- W dobieraniu zdań do luk patrz na **zaimki i spójniki** (this, they, however, so) – wskazują, co było przed luką.
- W pytaniach o intencję autora / główną myśl patrz na **cały akapit**, nie pojedyncze słowo.`,
  'angielski:srodki-jezykowe': `**Jak rozwiązywać zadania z gramatyki i słownictwa:**
- Ustal, czego wymaga luka: **czas** (słowa-sygnały: yesterday, since, by the time…), **część mowy** (po „the” – rzeczownik, przed rzeczownikiem – przymiotnik), **konstrukcja** (enjoy + -ing, want + to).
- Przeczytaj całe zdanie z wybraną odpowiedzią – musi brzmieć poprawnie i mieć sens.
- Przy parafrazach zachowaj **znaczenie** i **czas** zdania wyjściowego.`,
  'polski:jezyk-w-uzyciu': `**Jak rozwiązywać zadania do tekstów:**
- Każde stwierdzenie P/F sprawdź **w tekście** – szukaj konkretnego zdania, które je potwierdza.
- „W obu tekstach” / „w każdym z tekstów” = potwierdzenie musi być **w obu**.
- Przy funkcjach języka i środkach perswazji nazwij środek i powiedz, **czemu służy**.`,
  'polski:historycznoliteracki': `**Jak rozwiązywać zadania historycznoliterackie:**
- Rozpoznaj **środek stylistyczny** i jego **funkcję** w tym fragmencie.
- Odwołaj się do **całej lektury** (bohaterowie, wydarzenia), nie tylko do cytatu.
- Przy epokach dopasuj cechy: romantyzm – uczucie, fantastyka; pozytywizm – praca, nauka; Młoda Polska – dekadentyzm, symbolizm.`,
}

export function strategyFor(task: Task): string | undefined {
  return STRATEGY[`${task.subject}:${task.topic}`]
}

export function learnLinks(task: Task): HintLink[] {
  if (task.subject === 'matematyka') {
    return (MATH_LINKS[task.topic] ?? []).map((id) => ({ to: `/nauka/matematyka/${id}`, label: MATH_TITLES[id] ?? 'Metoda krok po kroku' }))
  }
  if (task.subject === 'angielski' && task.topic === 'srodki-jezykowe') return [{ to: '/nauka/gramatyka', label: 'Lekcje gramatyki' }]
  if (task.subject === 'polski' && task.topic === 'historycznoliteracki')
    return [
      { to: '/nauka/lektury', label: 'Lektury' },
      { to: '/nauka/pojecia', label: 'Słowniczek pojęć' },
    ]
  if (task.subject === 'polski') return [{ to: '/nauka/poradnik', label: 'Poradnik do pisemnego' }]
  return []
}
