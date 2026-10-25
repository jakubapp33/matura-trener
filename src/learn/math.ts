import { c, type Exercise } from './types'

export interface MathMethod {
  id: string
  title: string
  /** dział z topics.ts – do ćwiczenia na zadaniach z arkuszy */
  topic: string
  /** jak często pojawia się na maturze podstawowej (1–3) */
  freq: 1 | 2 | 3
  body: string
  exercises: Exercise[]
}

/**
 * Najczęstsze typy zadań z matury podstawowej (formuła 2023) i sposoby rozwiązania.
 * Wzory z „Wybranych wzorów matematycznych” CKE są dostępne na egzaminie – tu ćwiczymy, KIEDY którego użyć.
 */
export const MATH: MathMethod[] = [
  {
    id: 'potegi',
    title: 'Potęgi i pierwiastki',
    topic: 'potegi',
    freq: 3,
    body: `
## Jak wygląda zadanie
„Liczba (√32 − √2)² jest równa…”, „Liczba 5¹² + 5¹³ + 5¹⁴ podzielona przez 5¹² jest równa…”, „Wartość wyrażenia 3⁴·9⁻² wynosi…”.

## Sposób
- Sprowadź wszystko do **tej samej podstawy** (9 = 3², 8 = 2³, 0,25 = 2⁻², √2 = 2^(1/2)).
- Stosuj prawa: aⁿ·aᵐ = aⁿ⁺ᵐ, aⁿ : aᵐ = aⁿ⁻ᵐ, (aⁿ)ᵐ = aⁿᵐ, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a.
- Przy sumie potęg **wyłącz najmniejszą potęgę przed nawias**: 5¹² + 5¹³ + 5¹⁴ = 5¹²(1 + 5 + 25) = 31·5¹².
- Pierwiastki upraszczaj, wyciągając kwadraty: √32 = √(16·2) = 4√2.

## Przykład
(√32 − √2)² = (4√2 − √2)² = (3√2)² = 9·2 = **18**.

> Pułapka: (a + b)² ≠ a² + b². Najpierw uprość w nawiasie, potem podnoś do potęgi.
> Pułapka: 2⁵ + 2⁵ = 2·2⁵ = 2⁶, a nie 2¹⁰.`,
    exercises: [
      c('Liczba 2⁵ · 4³ jest równa', ['2¹¹', '8⁸', '2¹⁵', '6⁸'], 0, '4³ = (2²)³ = 2⁶, więc 2⁵·2⁶ = 2¹¹.'),
      c('Liczba (3⁻²)·27 jest równa', ['3', '1/3', '9', '3⁻⁶'], 0, '3⁻²·3³ = 3¹ = 3.'),
      c('Liczba √50 − √18 jest równa', ['√32', '2√2', '4√2', '8'], 1, '√50 = 5√2, √18 = 3√2, różnica = 2√2.'),
      c('Liczba (2¹⁰ + 2¹⁰) : 2⁸ jest równa', ['2³', '2²', '2¹²', '4¹⁰'], 0, '2¹⁰ + 2¹⁰ = 2¹¹; 2¹¹ : 2⁸ = 2³ = 8.'),
      c('Liczba 8^(2/3) jest równa', ['4', '16/3', '2', '64'], 0, '8^(1/3) = 2, a 2² = 4.'),
    ],
  },
  {
    id: 'logarytmy',
    title: 'Logarytmy',
    topic: 'logarytmy',
    freq: 3,
    body: `
## Definicja – najważniejsze
**logₐ b = c ⟺ aᶜ = b** (a > 0, a ≠ 1, b > 0). Logarytm odpowiada na pytanie: **do jakiej potęgi podnieść a, żeby dostać b?**

log₂ 8 = 3, bo 2³ = 8 · log₃ (1/9) = −2, bo 3⁻² = 1/9 · log 100 = 2 (log bez podstawy = podstawa 10).

## Własności (są w wybranych wzorach)
- logₐ x + logₐ y = logₐ (x·y)
- logₐ x − logₐ y = logₐ (x : y)
- n·logₐ x = logₐ xⁿ
- logₐ a = 1, logₐ 1 = 0

## Sposób
1. Połącz logarytmy o **tej samej podstawie** w jeden (dodawanie → mnożenie, odejmowanie → dzielenie, liczba przed → wykładnik).
2. Policz z definicji: „2 do której daje…?”.

## Przykład
log₆ 9 + log₆ 4 = log₆ 36 = **2**.
2·log₃ 6 − log₃ 4 = log₃ 36 − log₃ 4 = log₃ 9 = **2**.

> Pułapka: log 5 + log 2 = log 10 = 1, a nie log 7.`,
    exercises: [
      c('Liczba log₂ 32 jest równa', ['5', '16', '1/5', '6'], 0, '2⁵ = 32.'),
      c('Liczba log₅ 0,04 jest równa', ['−2', '2', '−1/2', '1/25'], 0, '0,04 = 1/25 = 5⁻².'),
      c('Liczba log₄ 8 + log₄ 2 jest równa', ['2', '4', 'log₄ 10', '1'], 0, 'log₄ 16 = 2.'),
      c('Liczba log 50 + log 2 jest równa', ['2', 'log 52', '100', '1'], 0, 'log 100 = 2.'),
      c('Liczba 3·log₂ 4 jest równa', ['6', '12', '64', '3'], 0, 'log₂ 4 = 2, więc 3·2 = 6.'),
    ],
  },
  {
    id: 'procenty',
    title: 'Procenty',
    topic: 'procenty',
    freq: 2,
    body: `
## Najważniejsze zależności
- p% liczby x to **(p/100)·x**.
- Wzrost o p% → mnożysz przez **(1 + p/100)**; spadek o p% → przez **(1 − p/100)**.
- Dwie zmiany z rzędu → **mnożysz oba czynniki**: +20%, potem −20% → 1,2·0,8 = 0,96, czyli spadek o 4%.
- „O ile procent a jest większe od b?” → **(a − b)/b · 100%** – dzielisz przez to, **od czego** porównujesz.

## Punkty procentowe
Z 20% do 25% to wzrost o **5 punktów procentowych**, ale o **25%** (5/20).

## Przykład
Cenę podniesiono o 10%, potem obniżono o 10%. Teraz wynosi 99 zł. Ile wynosiła na początku?
x·1,1·0,9 = 99 → 0,99x = 99 → x = **100 zł**.

> Pułapka: +10% i −10% to NIE jest powrót do ceny wyjściowej.`,
    exercises: [
      c('Liczba 30% liczby 240 jest równa', ['72', '80', '7,2', '210'], 0, '0,3·240 = 72.'),
      c('Cena 200 zł wzrosła o 15%. Nowa cena to', ['230 zł', '215 zł', '170 zł', '300 zł'], 0, '200·1,15 = 230.'),
      c('Liczba a jest o 25% większa od b. Wtedy', ['a = 1,25b', 'b = 1,25a', 'a = 0,75b', 'a = b + 25'], 0, 'Większa o 25% od b → b·1,25.'),
      c('Oprocentowanie wzrosło z 4% do 5%. Wzrosło o', ['1 punkt procentowy, czyli o 25%', '1%', '20%', '5 punktów procentowych'], 0, 'Różnica 1 p.p.; względnie 1/4 = 25%.'),
    ],
  },
  {
    id: 'wartosc-bezwzgledna',
    title: 'Wartość bezwzględna na osi liczbowej',
    topic: 'rownania',
    freq: 2,
    body: `
## Znaczenie geometryczne
**|x − a|** to **odległość** liczby x od liczby a na osi.

| Zapis | Znaczenie | Rozwiązanie |
| |x − a| = r | odległość od a równa r | x = a − r lub x = a + r |
| |x − a| < r | bliżej niż r od a | (a − r, a + r) |
| |x − a| ≥ r | co najmniej r od a | (−∞, a − r] ∪ [a + r, ∞) |

## Przykład
|x − 1| ≥ 3 → odległość od 1 co najmniej 3 → **x ≤ −2 lub x ≥ 4**. Na rysunku: dwa promienie na zewnątrz, kółka **zamalowane** (≥).

|x + 2| < 5 → |x − (−2)| < 5 → **(−7, 3)**, kółka puste.

> Pułapka: |x + 2| to odległość od **−2**, nie od 2.
> < i > → kółka puste; ≤ i ≥ → kółka zamalowane.`,
    exercises: [
      c('Zbiorem rozwiązań nierówności |x − 3| ≤ 2 jest', ['[1, 5]', '(1, 5)', '(−∞, 1] ∪ [5, ∞)', '[−5, −1]'], 0, 'Odległość od 3 najwyżej 2 → od 1 do 5, z końcami.'),
      c('Zbiorem rozwiązań nierówności |x + 1| > 4 jest', ['(−∞, −5) ∪ (3, ∞)', '(−5, 3)', '(−∞, −3) ∪ (5, ∞)', '(3, ∞)'], 0, 'Odległość od −1 większa niż 4.'),
      c('Równanie |x − 2| = 5 ma rozwiązania', ['−3 i 7', '3 i 7', '−7 i 3', 'tylko 7'], 0, '2 − 5 = −3, 2 + 5 = 7.'),
    ],
  },
  {
    id: 'wzory-skrocone',
    title: 'Wzory skróconego mnożenia i wyrażenia algebraiczne',
    topic: 'wyrazenia',
    freq: 2,
    body: `
## Wzory
- (a + b)² = a² + 2ab + b²
- (a − b)² = a² − 2ab + b²
- a² − b² = (a − b)(a + b)
- (a + b)³, (a − b)³, a³ ± b³ – są w wybranych wzorach CKE.

## Kiedy się przydają
- Upraszczanie: (x − 3)² − (x + 3)² = −12x.
- **Usuwanie niewymierności z mianownika**: 1/(√3 − 1) – pomnóż licznik i mianownik przez (√3 + 1): = (√3 + 1)/(3 − 1) = (√3 + 1)/2.
- Rozkład na czynniki: x² − 9 = (x − 3)(x + 3).

## Przykład
(2√3 − 1)² = 12 − 4√3 + 1 = **13 − 4√3**.

> Pułapka: (2√3)² = 4·3 = 12, nie 6.`,
    exercises: [
      c('Wyrażenie (x + 4)² jest równe', ['x² + 8x + 16', 'x² + 16', 'x² + 4x + 16', 'x² + 8x + 8'], 0, '(a + b)² = a² + 2ab + b².'),
      c('Wyrażenie 49 − x² można zapisać jako', ['(7 − x)(7 + x)', '(7 − x)²', '(x − 7)(x + 7)', '(49 − x)(49 + x)'], 0, 'a² − b² = (a − b)(a + b).'),
      c('Liczba (√5 − 2)(√5 + 2) jest równa', ['1', '9', '3', '√5'], 0, '5 − 4 = 1.'),
      c('Liczba 2/(√3 + 1) jest równa', ['√3 − 1', '√3 + 1', '2√3 − 2', '(√3 − 1)/2'], 0, 'Pomnóż przez (√3 − 1): 2(√3 − 1)/(3 − 1) = √3 − 1.'),
    ],
  },
  {
    id: 'nierownosc-kwadratowa',
    title: 'Równania i nierówności kwadratowe',
    topic: 'rownania',
    freq: 3,
    body: `
## Sposób na nierówność kwadratową (np. x² − 5x + 6 ≤ 0)
1. Znajdź **miejsca zerowe** (Δ = b² − 4ac, x = (−b ± √Δ)/2a) albo rozłóż na czynniki: (x − 2)(x − 3).
2. Narysuj **parabolę**: ramiona w górę, gdy a > 0; w dół, gdy a < 0.
3. Odczytaj: ≤ 0 → tam, gdzie wykres **pod** osią (lub na niej); ≥ 0 → **nad** osią.

Dla a > 0: **≤ 0 → [x₁, x₂]** (między pierwiastkami), **≥ 0 → (−∞, x₁] ∪ [x₂, ∞)**.

## Przykład
−x² + 4x > 0 → −x(x − 4) > 0 → miejsca zerowe 0 i 4, a < 0 (ramiona w dół) → nad osią między pierwiastkami → **(0, 4)**.

## Równanie w postaci iloczynowej
(x − 2)(x + 5) = 0 → x = 2 lub x = −5. Nie wymnażaj!

> Pułapka: x² ≥ 9 → x ≤ −3 **lub** x ≥ 3 (nie tylko x ≥ 3).
> Pułapka: przy a < 0 odwracasz odczyt.`,
    exercises: [
      c('Zbiorem rozwiązań nierówności x² − 9 < 0 jest', ['(−3, 3)', '(−∞, −3) ∪ (3, ∞)', '(3, ∞)', '(−9, 9)'], 0, 'Parabola w górę, pod osią między −3 i 3.'),
      c('Zbiorem rozwiązań nierówności (x − 1)(x + 4) ≥ 0 jest', ['(−∞, −4] ∪ [1, ∞)', '[−4, 1]', '[−1, 4]', '(−∞, −1] ∪ [4, ∞)'], 0, 'Miejsca zerowe −4 i 1, ramiona w górę, ≥ 0 → na zewnątrz.'),
      c('Równanie x² = 2x ma rozwiązania', ['0 i 2', 'tylko 2', '−2 i 2', '0 i −2'], 0, 'x² − 2x = 0 → x(x − 2) = 0. Nie dziel przez x – zgubisz 0!'),
      c('Zbiorem rozwiązań nierówności −x² + 1 ≥ 0 jest', ['[−1, 1]', '(−∞, −1] ∪ [1, ∞)', '[1, ∞)', '∅'], 0, 'Ramiona w dół, nad osią między −1 a 1.'),
    ],
  },
  {
    id: 'wymierne',
    title: 'Równania wymierne (z ułamkiem) i dziedzina',
    topic: 'rownania',
    freq: 2,
    body: `
## Sposób
1. **Dziedzina**: mianownik ≠ 0. Wypisz, jakich x nie wolno.
2. Ułamek = 0 ⟺ **licznik = 0** (i x z dziedziny).
3. Na koniec **odrzuć** rozwiązania spoza dziedziny.

## Przykład
(x² − 4)/(x − 2) = 0 → licznik: x = 2 lub x = −2; ale x ≠ 2 (mianownik) → **tylko x = −2**.

(x + 3)/(x − 1) = 2 → x ≠ 1, mnożysz na krzyż: x + 3 = 2(x − 1) → **x = 5**.

> Pułapka: CKE lubi pytać „ile rozwiązań ma równanie” – sprawdź dziedzinę, często odpada jedno.`,
    exercises: [
      c('Równanie (x − 3)(x + 1)/(x − 3) = 0 ma', ['jedno rozwiązanie: −1', 'dwa rozwiązania: 3 i −1', 'jedno rozwiązanie: 3', 'zero rozwiązań'], 0, 'x = 3 nie należy do dziedziny.'),
      c('Rozwiązaniem równania (2x − 1)/(x + 2) = 1 jest', ['x = 3', 'x = −2', 'x = 1', 'x = −3'], 0, '2x − 1 = x + 2 → x = 3; x ≠ −2 – OK.'),
      c('Dziedziną wyrażenia 5/(x² − 16) jest', ['ℝ \\ {−4, 4}', 'ℝ \\ {4}', 'ℝ \\ {16}', 'ℝ'], 0, 'x² − 16 ≠ 0 → x ≠ ±4.'),
    ],
  },
  {
    id: 'uklady',
    title: 'Układy równań',
    topic: 'uklady',
    freq: 2,
    body: `
## Sposoby
- **Podstawianie**: z jednego równania wyznacz y (albo x) i wstaw do drugiego.
- **Przeciwne współczynniki**: pomnóż równania tak, by po dodaniu jedna niewiadoma zniknęła.
- W zadaniach zamkniętych często najszybciej: **wstaw odpowiedzi A–D** i sprawdź, która pasuje do obu równań.

## Interpretacja graficzna
Każde równanie to prosta. Rozwiązanie = **punkt przecięcia**.
- jedno rozwiązanie – proste się przecinają,
- brak rozwiązań (układ sprzeczny) – proste **równoległe** (ten sam współczynnik kierunkowy, inny wyraz wolny),
- nieskończenie wiele – ta **sama prosta**.

## Przykład
x + y = 5 i x − y = 1 → dodajesz: 2x = 6 → x = 3, y = 2.`,
    exercises: [
      c('Rozwiązaniem układu x + 2y = 7, x − y = 1 jest para', ['x = 3, y = 2', 'x = 2, y = 3', 'x = 1, y = 3', 'x = 5, y = 1'], 0, 'Odejmij: 3y = 6 → y = 2, x = 3.'),
      c('Układ y = 2x + 1 i y = 2x − 3', ['nie ma rozwiązań', 'ma jedno rozwiązanie', 'ma nieskończenie wiele rozwiązań', 'ma dwa rozwiązania'], 0, 'Proste równoległe (ten sam współczynnik 2, różne b).'),
      c('Układ x + y = 2, 2x + 2y = 4', ['ma nieskończenie wiele rozwiązań', 'nie ma rozwiązań', 'ma jedno rozwiązanie', 'ma rozwiązanie x = 1, y = 1 i tylko to'], 0, 'Drugie równanie to pierwsze pomnożone przez 2 – ta sama prosta.'),
    ],
  },
  {
    id: 'funkcja-wykres',
    title: 'Funkcja z wykresu',
    topic: 'funkcje',
    freq: 3,
    body: `
## Co trzeba umieć odczytać
| Pojęcie | Gdzie patrzysz |
| **dziedzina** | rzut wykresu na oś **x** (od lewej do prawej) |
| **zbiór wartości** | rzut na oś **y** (od dołu do góry) |
| **miejsca zerowe** | gdzie wykres **przecina/dotyka osi x** |
| f(x) > 0 | gdzie wykres jest **nad** osią x |
| rosnąca / malejąca | idąc w prawo: w górę / w dół |
| f(a) | idziesz od x = a pionowo do wykresu, odczytujesz y |
| największa/najmniejsza wartość | najwyższy / najniższy punkt (y!) |

## Przesunięcia wykresu
- y = f(x) + q → o q w **górę**
- y = f(x − p) → o p w **prawo** (minus w środku = w prawo!)
- y = f(x + p) → o p w **lewo**
- y = −f(x) → odbicie względem osi x · y = f(−x) → względem osi y

> Pułapka: zbiór wartości to wartości **y**, nie x.
> Pułapka: kółko puste na końcu wykresu = punkt **nie należy**.`,
    exercises: [
      c('Wykres y = f(x − 3) powstaje z wykresu y = f(x) przez przesunięcie o 3 jednostki', ['w prawo', 'w lewo', 'w górę', 'w dół'], 0, 'Minus w nawiasie → w prawo.'),
      c('Wykres y = f(x) + 2 powstaje przez przesunięcie o 2 jednostki', ['w górę', 'w dół', 'w prawo', 'w lewo'], 0, 'Dodajesz do wartości → w górę.'),
      c('Funkcja f(x) = x² − 4 ma miejsca zerowe', ['−2 i 2', 'tylko 2', '−4 i 4', 'nie ma'], 0, 'x² = 4 → x = ±2.'),
      c('Jeżeli f(x) = 3x − 5, to f(−2) jest równe', ['−11', '1', '11', '−1'], 0, '3·(−2) − 5 = −11.'),
    ],
  },
  {
    id: 'liniowa',
    title: 'Funkcja liniowa i proste',
    topic: 'f-liniowa',
    freq: 3,
    body: `
## y = ax + b
- **a** – współczynnik kierunkowy: a > 0 rosnąca, a < 0 malejąca, a = 0 stała. a = tg kąta nachylenia do osi x.
- **b** – punkt przecięcia z osią **y**: (0, b).
- **miejsce zerowe**: x = −b/a.

## Proste równoległe i prostopadłe
- równoległe: **a₁ = a₂**
- prostopadłe: **a₁·a₂ = −1** (np. 2 i −1/2)

## Prosta przez dwa punkty A(x₁, y₁), B(x₂, y₂)
a = (y₂ − y₁)/(x₂ − x₁), potem b z podstawienia jednego punktu.

## Przykład
Prosta prostopadła do y = 2x − 1, przechodząca przez (4, 1): a = −1/2, 1 = −1/2·4 + b → b = 3 → **y = −1/2 x + 3**.

> Pułapka: „punkt należy do wykresu” → wstaw x i y do wzoru i sprawdź równość.`,
    exercises: [
      c('Prosta prostopadła do y = 3x + 2 ma współczynnik kierunkowy', ['−1/3', '3', '−3', '1/3'], 0, 'a₁·a₂ = −1.'),
      c('Miejscem zerowym funkcji f(x) = −2x + 6 jest', ['3', '−3', '6', '2'], 0, '−2x + 6 = 0 → x = 3.'),
      c('Funkcja f(x) = (m − 2)x + 1 jest malejąca dla', ['m < 2', 'm > 2', 'm = 2', 'm < −2'], 0, 'Malejąca, gdy a = m − 2 < 0.'),
      c('Prosta przechodząca przez (0, 3) i (2, 7) ma równanie', ['y = 2x + 3', 'y = 3x + 2', 'y = 4x + 3', 'y = 2x + 7'], 0, 'a = (7 − 3)/2 = 2, b = 3.'),
    ],
  },
  {
    id: 'kwadratowa',
    title: 'Funkcja kwadratowa – wierzchołek i postacie',
    topic: 'f-kwadratowa',
    freq: 3,
    body: `
## Trzy postacie
| Postać | Wzór | Co od razu widać |
| ogólna | y = ax² + bx + c | c – przecięcie z osią y |
| kanoniczna | y = a(x − p)² + q | **wierzchołek W = (p, q)** |
| iloczynowa | y = a(x − x₁)(x − x₂) | **miejsca zerowe** x₁, x₂ |

## Wierzchołek z postaci ogólnej
**p = −b/(2a)**, **q = f(p)** (albo q = −Δ/(4a)). Oś symetrii: **x = p**. Też: p = (x₁ + x₂)/2.

## Zbiór wartości i monotoniczność
- a > 0: zbiór wartości **[q, ∞)**, malejąca na (−∞, p], rosnąca na [p, ∞).
- a < 0: zbiór wartości **(−∞, q]**, rosnąca do p, potem malejąca.
- Największa/najmniejsza wartość w przedziale: sprawdź **końce przedziału i wierzchołek** (jeśli leży w przedziale).

## Przykład
f(x) = −2(x − 3)² + 5 → wierzchołek (3, 5), a < 0 → zbiór wartości **(−∞, 5]**, oś symetrii x = 3.

> Pułapka: w y = (x **+** 2)² − 1 wierzchołek to (**−2**, −1).`,
    exercises: [
      c('Wierzchołkiem paraboli y = (x − 4)² + 1 jest punkt', ['(4, 1)', '(−4, 1)', '(1, 4)', '(4, −1)'], 0, 'Postać kanoniczna a(x − p)² + q → (p, q).'),
      c('Osią symetrii wykresu f(x) = x² − 6x + 2 jest prosta', ['x = 3', 'x = −3', 'x = 6', 'y = 3'], 0, 'p = −b/2a = 6/2 = 3.'),
      c('Zbiorem wartości funkcji f(x) = −(x + 1)² + 7 jest', ['(−∞, 7]', '[7, ∞)', '(−∞, −1]', '[−1, ∞)'], 0, 'a < 0, q = 7.'),
      c('Funkcja f(x) = 2(x − 1)(x + 5) ma miejsca zerowe', ['1 i −5', '−1 i 5', '2, 1 i −5', '1 i 5'], 0, 'Postać iloczynowa: x₁ = 1, x₂ = −5.'),
      c('Funkcja f(x) = x² − 4x jest rosnąca w przedziale', ['[2, ∞)', '(−∞, 2]', '[−2, ∞)', '[0, 4]'], 0, 'p = 2, a > 0 → rośnie od wierzchołka w prawo.'),
    ],
  },
  {
    id: 'arytmetyczny',
    title: 'Ciąg arytmetyczny',
    topic: 'ciagi',
    freq: 3,
    body: `
## Wzory
- **aₙ = a₁ + (n − 1)·r**
- **Sₙ = (a₁ + aₙ)/2 · n** albo Sₙ = (2a₁ + (n − 1)r)/2 · n
- Trzy kolejne wyrazy a, b, c: **2b = a + c** (środkowy = średnia sąsiednich)

## Sposób
Masz dane dwa wyrazy (np. a₃ = 7, a₈ = 22)? Różnica numerów to 5, więc 5r = 22 − 7 → r = 3, a₁ = a₃ − 2r = 1.

## Przykład
Liczby x − 1, 5, 2x + 3 tworzą ciąg arytmetyczny → 2·5 = (x − 1) + (2x + 3) → 10 = 3x + 2 → **x = 8/3**.

> Pułapka: aₙ = a₁ + (n **− 1**)r – nie zapomnij o −1.`,
    exercises: [
      c('W ciągu arytmetycznym a₁ = 2, r = 3. Wtedy a₁₀ jest równe', ['29', '32', '30', '27'], 0, '2 + 9·3 = 29.'),
      c('W ciągu arytmetycznym a₂ = 5, a₆ = 17. Różnica r jest równa', ['3', '12', '4', '2'], 0, '4r = 12 → r = 3.'),
      c('Suma 20 początkowych wyrazów ciągu aₙ = 2n jest równa', ['420', '400', '210', '840'], 0, 'a₁ = 2, a₂₀ = 40, S = (2 + 40)/2·20 = 420.'),
      c('Liczby 3, x, 11 tworzą ciąg arytmetyczny. Wtedy x =', ['7', '8', '√33', '14'], 0, '2x = 3 + 11 → x = 7.'),
    ],
  },
  {
    id: 'geometryczny',
    title: 'Ciąg geometryczny',
    topic: 'ciagi',
    freq: 3,
    body: `
## Wzory
- **aₙ = a₁·qⁿ⁻¹**
- **Sₙ = a₁·(1 − qⁿ)/(1 − q)** (q ≠ 1)
- Trzy kolejne wyrazy a, b, c: **b² = a·c**

## Przykład
Liczby 2, x, 18 tworzą ciąg geometryczny → x² = 36 → **x = 6 lub x = −6** (obie!).

Ciąg 3, 6, 12… → q = 2, a₆ = 3·2⁵ = 96.

> Pułapka: b² = ac daje **dwa** rozwiązania, jeśli zadanie nie mówi, że wyrazy są dodatnie.
> Pułapka: wykładnik to **n − 1**.`,
    exercises: [
      c('W ciągu geometrycznym a₁ = 5, q = 2. Wtedy a₄ jest równe', ['40', '80', '20', '10'], 0, '5·2³ = 40.'),
      c('Liczby 4, x, 25 (x > 0) tworzą ciąg geometryczny. Wtedy x =', ['10', '14,5', '100', '21'], 0, 'x² = 100.'),
      c('Iloraz ciągu 81, 27, 9, … jest równy', ['1/3', '3', '−3', '−54'], 0, '27/81 = 1/3.'),
      c('Ciąg geometryczny o a₁ = 2 i q = −1 ma a₂₅ równe', ['2', '−2', '0', '50'], 0, '2·(−1)²⁴ = 2.'),
    ],
  },
  {
    id: 'trygonometria',
    title: 'Trygonometria',
    topic: 'trygonometria',
    freq: 3,
    body: `
## W trójkącie prostokątnym (kąt α ostry)
| Funkcja | Stosunek |
| sin α | przyprostokątna **naprzeciw** α / przeciwprostokątna |
| cos α | przyprostokątna **przy** α / przeciwprostokątna |
| tg α | naprzeciw / przy = sin α / cos α |

## Najważniejsze tożsamości
- **sin²α + cos²α = 1** (jedynka trygonometryczna)
- tg α = sin α / cos α
- sin(90° − α) = cos α

## Wartości do zapamiętania (są też w tablicach)
| | 30° | 45° | 60° |
| sin | 1/2 | √2/2 | √3/2 |
| cos | √3/2 | √2/2 | 1/2 |
| tg | √3/3 | 1 | √3 |

## Przykład
α ostry, sin α = 3/5. Oblicz tg α.
cos²α = 1 − 9/25 = 16/25 → cos α = 4/5 (ostry → dodatni) → tg α = (3/5)/(4/5) = **3/4**.

> Sztuczka: narysuj trójkąt 3-4-5 z dobranymi bokami – szybciej niż ze wzorów.`,
    exercises: [
      c('Kąt α jest ostry i cos α = 12/13. Wtedy sin α =', ['5/13', '12/5', '1/13', '13/12'], 0, 'sin²α = 1 − 144/169 = 25/169.'),
      c('Kąt α jest ostry i tg α = 1. Wtedy α =', ['45°', '30°', '60°', '90°'], 0, 'tg 45° = 1.'),
      c('Wartość wyrażenia sin²37° + cos²37° jest równa', ['1', '0', '2', 'nie da się obliczyć'], 0, 'Jedynka trygonometryczna.'),
      c('W trójkącie prostokątnym przyprostokątne mają długości 6 i 8. Sinus kąta leżącego naprzeciw boku 6 to', ['3/5', '4/5', '3/4', '6/8'], 0, 'Przeciwprostokątna 10, sin = 6/10.'),
    ],
  },
  {
    id: 'planimetria',
    title: 'Planimetria: kąty w okręgu, podobieństwo, pola',
    topic: 'planimetria',
    freq: 3,
    body: `
## Kąty w okręgu
- **Kąt środkowy = 2 × kąt wpisany** oparty na tym samym łuku.
- Kąty wpisane oparte na tym samym łuku są **równe**.
- Kąt wpisany oparty na **średnicy** = **90°**.
- Styczna jest **prostopadła** do promienia w punkcie styczności.

## Trójkąty
- Suma kątów: 180°. W równoramiennym kąty przy podstawie równe.
- **Pitagoras**: a² + b² = c².
- Trójkąt równoboczny: h = a√3/2, P = a²√3/4.
- **Podobieństwo** w skali k: boki ×k, **pola ×k²**.

## Pola (są w wybranych wzorach)
trójkąt ½·a·h = ½·a·b·sin γ · równoległobok a·h · romb ½·d₁·d₂ · trapez ½(a + b)·h · koło πr²

## Wielokąty
Suma kątów n-kąta: (n − 2)·180°. Kąt foremnego: (n − 2)·180°/n.

> Pułapka: skala podobieństwa 3 → pole 9 razy większe, nie 3.`,
    exercises: [
      c('Kąt wpisany ma miarę 35°. Kąt środkowy oparty na tym samym łuku ma miarę', ['70°', '35°', '17,5°', '145°'], 0, 'Środkowy = 2 × wpisany.'),
      c('Trójkąty są podobne w skali 2. Pole mniejszego to 5. Pole większego to', ['20', '10', '25', '7'], 0, 'Pola × k² = 4.'),
      c('Pole trójkąta równobocznego o boku 4 jest równe', ['4√3', '8√3', '16', '2√3'], 0, 'a²√3/4 = 16√3/4.'),
      c('Suma kątów wewnętrznych sześciokąta jest równa', ['720°', '540°', '1080°', '360°'], 0, '(6 − 2)·180° = 720°.'),
      c('Kąt wpisany oparty na średnicy ma miarę', ['90°', '180°', '45°', '60°'], 0, 'Zawsze 90°.'),
    ],
  },
  {
    id: 'analityczna',
    title: 'Geometria analityczna',
    topic: 'geometria-analityczna',
    freq: 3,
    body: `
## Wzory (są w wybranych wzorach)
- **Środek odcinka** AB: S = ((x₁ + x₂)/2, (y₁ + y₂)/2)
- **Długość odcinka**: |AB| = √((x₂ − x₁)² + (y₂ − y₁)²)
- **Okrąg** o środku (a, b) i promieniu r: (x − a)² + (y − b)² = r²
- Prosta przez dwa punkty, równoległość i prostopadłość – jak w funkcji liniowej.

## Typowe zadania
- Dany środek S i koniec A → drugi koniec: B = 2S − A (dla każdej współrzędnej osobno).
- Odczytanie środka i promienia z równania okręgu: (x + 2)² + (y − 1)² = 9 → środek (−2, 1), r = 3.
- Symetria względem osi x: (x, y) → (x, −y); względem osi y: (x, y) → (−x, y); względem (0,0): (−x, −y).

> Pułapka: w równaniu okręgu jest r², więc = 9 oznacza r = 3.`,
    exercises: [
      c('Środek odcinka o końcach A(2, 5) i B(6, −1) to', ['(4, 2)', '(4, 3)', '(8, 4)', '(2, −3)'], 0, '((2+6)/2, (5−1)/2).'),
      c('Długość odcinka o końcach (1, 1) i (4, 5) jest równa', ['5', '7', '√7', '25'], 0, '√(9 + 16) = 5.'),
      c('Okrąg (x − 3)² + (y + 4)² = 16 ma środek i promień', ['(3, −4), r = 4', '(−3, 4), r = 4', '(3, −4), r = 16', '(3, 4), r = 4'], 0, '(x − a)² + (y − b)² = r².'),
      c('Punkt S(1, 2) jest środkiem odcinka AB, A(−3, 0). Wtedy B =', ['(5, 4)', '(−1, 1)', '(4, 2)', '(−7, −2)'], 0, 'B = 2S − A = (2 + 3, 4 − 0).'),
    ],
  },
  {
    id: 'stereometria',
    title: 'Stereometria',
    topic: 'stereometria',
    freq: 2,
    body: `
## Co trzeba umieć
- **Objętość**: graniastosłup **V = Pp·H**, ostrosłup **V = ⅓·Pp·H**, walec πr²H, stożek ⅓πr²H, kula 4/3·πr³.
- **Przekątna sześcianu** a√3, przekątna ściany a√2. Prostopadłościan: d = √(a² + b² + c²).
- **Kąt między przekątną a podstawą**: znajdź trójkąt prostokątny (wysokość, rzut przekątnej na podstawę, przekątna) i użyj tg/sin/cos.

## Sposób
Zawsze **wyrysuj trójkąt prostokątny** w bryle: wysokość bryły + odcinek w podstawie + odcinek „skośny”. Potem Pitagoras albo trygonometria.

## Przykład
Sześcian o krawędzi 2. Przekątna = 2√3. Kąt α między przekątną sześcianu a podstawą: tg α = 2/(2√2) = √2/2.

> Pułapka: w ostrosłupie **⅓**! W graniastosłupie nie.`,
    exercises: [
      c('Objętość sześcianu o przekątnej ściany 4√2 jest równa', ['64', '32√2', '16', '128'], 0, 'a√2 = 4√2 → a = 4, V = 64.'),
      c('Przekątna sześcianu o krawędzi 3 ma długość', ['3√3', '3√2', '9', '6'], 0, 'a√3.'),
      c('Ostrosłup ma pole podstawy 12 i wysokość 5. Jego objętość to', ['20', '60', '30', '17'], 0, '⅓·12·5 = 20.'),
      c('Walec ma promień 2 i wysokość 5. Jego objętość to', ['20π', '10π', '40π', '50π'], 0, 'πr²H = π·4·5.'),
    ],
  },
  {
    id: 'kombinatoryka',
    title: 'Kombinatoryka',
    topic: 'kombinatoryka',
    freq: 2,
    body: `
## Reguła mnożenia – najważniejsza
Wybierasz po kolei: liczba możliwości na 1. miejscu × na 2. × …

## Liczby n-cyfrowe
- Pierwsza cyfra **nie może być 0**: liczb trzycyfrowych jest 9·10·10 = 900.
- „o różnych cyfrach”: 9·9·8 (pierwsza bez 0, druga bez pierwszej, ale może być 0…).
- „parzyste” – zacznij od **ostatniej cyfry** (0, 2, 4, 6, 8).

## Inne
- Ustawienie n osób w rzędzie: n! = 1·2·…·n.
- Wybór k osób z n, kolejność **nie** ma znaczenia: C(n, k) = n!/(k!(n − k)!) – np. C(5, 2) = 10.
- Uściski dłoni / mecze „każdy z każdym”: n(n − 1)/2.

> Pułapka: zastanów się, czy **kolejność ma znaczenie** (hasło, podium – tak; wybór delegacji – nie).`,
    exercises: [
      c('Ile jest liczb dwucyfrowych?', ['90', '100', '99', '81'], 0, '9·10.'),
      c('Ile jest liczb trzycyfrowych o cyfrach ze zbioru {1, 2, 3, 4, 5} (cyfry mogą się powtarzać)?', ['125', '60', '15', '243'], 0, '5·5·5.'),
      c('Na ile sposobów można ustawić 4 osoby w kolejce?', ['24', '16', '12', '4'], 0, '4! = 24.'),
      c('6 drużyn gra „każdy z każdym” jeden mecz. Ile meczów?', ['15', '30', '36', '12'], 0, '6·5/2.'),
      c('Ile jest liczb dwucyfrowych o różnych cyfrach?', ['81', '90', '72', '100'], 0, '9·9 (pierwsza bez 0, druga dowolna oprócz pierwszej).'),
    ],
  },
  {
    id: 'prawdopodobienstwo',
    title: 'Prawdopodobieństwo',
    topic: 'prawdopodobienstwo',
    freq: 3,
    body: `
## Klasyczne
**P(A) = |A| / |Ω|** – liczba wyników sprzyjających / liczba wszystkich wyników.

## Sposób
1. Opisz Ω: co jest jednym wynikiem? Dwa rzuty kostką → pary (a, b), |Ω| = 36. Dwa rzuty monetą → 4.
2. Policz zdarzenia sprzyjające (wypisz albo regułą mnożenia).
3. Dziel. Sprawdź, czy wynik jest od 0 do 1.

## Przydatne
- P(A′) = 1 − P(A) – „co najmniej jeden” często łatwiej przez przeciwne.
- Losowanie **bez zwracania** – w drugim losowaniu jest o 1 element mniej.

## Przykład
Dwa rzuty kostką. Suma oczek równa 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 wyników → P = **5/36**.

> Pułapka: (2, 6) i (6, 2) to **różne** wyniki.`,
    exercises: [
      c('Rzucamy raz kostką. Prawdopodobieństwo wyrzucenia liczby podzielnej przez 3 to', ['1/3', '1/2', '1/6', '2/3'], 0, '3 i 6 → 2/6.'),
      c('Rzucamy dwa razy monetą. Prawdopodobieństwo, że wypadnie co najmniej jeden orzeł', ['3/4', '1/2', '1/4', '2/3'], 0, '1 − P(dwie reszki) = 1 − 1/4.'),
      c('Rzucamy dwa razy kostką. Prawdopodobieństwo, że suma oczek jest równa 12', ['1/36', '1/12', '2/36', '1/6'], 0, 'Tylko (6, 6).'),
      c('Z liczb 1–20 losujemy jedną. Prawdopodobieństwo wylosowania liczby pierwszej', ['2/5', '9/20', '1/2', '7/20'], 0, '2, 3, 5, 7, 11, 13, 17, 19 → 8/20.'),
    ],
  },
  {
    id: 'statystyka',
    title: 'Statystyka: średnia, mediana, dominanta',
    topic: 'prawdopodobienstwo',
    freq: 2,
    body: `
## Pojęcia
- **Średnia** – suma / liczba danych. Średnia ważona: Σ(wartość·liczność) / Σ liczności.
- **Mediana** – środkowa wartość **po uporządkowaniu**. Parzysta liczba danych → średnia dwóch środkowych.
- **Dominanta** – wartość występująca **najczęściej**.
- **Odchylenie standardowe** – wzór w tablicach; mówi, jak bardzo dane są rozrzucone.

## Przykład
Dane: 3, 7, 2, 7, 5, 6 → uporządkuj: 2, 3, 5, 6, 7, 7. Mediana = (5 + 6)/2 = **5,5**, dominanta **7**, średnia 30/6 = **5**.

## Typowe zadanie z niewiadomą
Średnia liczb 4, 6, x, 10 jest równa 7 → (20 + x)/4 = 7 → **x = 8**.

> Pułapka: medianę liczysz po **posortowaniu**. Z tabeli liczności – pamiętaj, ile razy każda wartość się powtarza.`,
    exercises: [
      c('Mediana liczb 5, 1, 9, 3, 7 jest równa', ['5', '9', '3', '25/5'], 0, 'Po uporządkowaniu 1, 3, 5, 7, 9 – środkowa 5.'),
      c('Średnia arytmetyczna liczb 2, 4, 6, x jest równa 5. Wtedy x =', ['8', '5', '20', '3'], 0, '(12 + x)/4 = 5.'),
      c('Dominanta zestawu 2, 3, 3, 4, 4, 4, 5 to', ['4', '3', '3,57', '5'], 0, '4 występuje najczęściej.'),
      c('Mediana liczb 1, 2, 4, 8 jest równa', ['3', '2', '4', '3,75'], 0, '(2 + 4)/2.'),
    ],
  },
  {
    id: 'optymalizacja',
    title: 'Optymalizacja (zadanie otwarte za 3–4 pkt)',
    topic: 'optymalizacja',
    freq: 3,
    body: `
## Jak wygląda
„Z siatki o długości 40 m ogradzamy prostokątny wybieg… Jakie wymiary dadzą największe pole?”. Prawie zawsze kończy się **wierzchołkiem paraboli**.

## Sposób (za każdy krok są punkty!)
1. Oznacz jedną wielkość jako **x**, drugą **wyraź przez x** (z warunku zadania).
2. Zapisz funkcję do zoptymalizowania, np. P(x) = x·(20 − x).
3. **Dziedzina** – długości dodatnie: 0 < x < 20.
4. Funkcja kwadratowa z a < 0 → maksimum w **wierzchołku p = −b/(2a)**.
5. Sprawdź, czy p należy do dziedziny, policz drugą wielkość i odpowiedz na pytanie.

## Przykład
Obwód prostokąta 40 → boki x i 20 − x. P(x) = −x² + 20x, p = 10 → kwadrat 10 × 10, **P max = 100**.

> CKE punktuje osobno: funkcja jednej zmiennej, dziedzina, wierzchołek, odpowiedź. Nawet bez wyniku zapisz funkcję i dziedzinę.`,
    exercises: [
      c('Suma dwóch liczb dodatnich wynosi 12. Ich iloczyn jest największy, gdy liczby są równe', ['6 i 6', '4 i 8', '1 i 11', '3 i 9'], 0, 'x(12 − x), wierzchołek x = 6.'),
      c('Funkcja f(x) = −x² + 8x − 3 osiąga największą wartość dla x =', ['4', '−4', '8', '13'], 0, 'p = −8/(−2) = 4.'),
      c('Największa wartość funkcji f(x) = −(x − 2)² + 9 to', ['9', '2', '−9', 'nie istnieje'], 0, 'q = 9.'),
    ],
  },
]
