import { c, g, type Exercise } from './types'

export interface Lesson {
  id: string
  title: string
  /** jedno zdanie: czego dotyczy lekcja */
  sub: string
  body: string
  exercises: Exercise[]
}

/**
 * Gramatyka angielska na maturę podstawową (część „Znajomość środków językowych”).
 * Wyjaśnienia po polsku, przykłady „EN :: PL”.
 */
export const GRAMMAR: Lesson[] = [
  {
    id: 'present',
    title: 'Present Simple i Present Continuous',
    sub: 'Zwyczaje i fakty kontra to, co dzieje się teraz',
    body: `
## Present Simple – zwyczaje, fakty, rozkłady
Używasz, gdy coś dzieje się **regularnie**, jest **zawsze prawdą** albo wynika z **rozkładu** (pociąg, lekcje).

| | Budowa |
| Twierdzenie | I/you/we/they **work** · he/she/it **works** |
| Przeczenie | I **don't work** · she **doesn't work** |
| Pytanie | **Do** you work? · **Does** she work? |

She goes to the gym twice a week. :: Ona chodzi na siłownię dwa razy w tygodniu.
Water boils at 100°C. :: Woda wrze w 100°C.
The train leaves at 6:15. :: Pociąg odjeżdża o 6:15.

> Pułapka: w 3. osobie (he/she/it) dodajesz **-s/-es** (watches, goes, tries), ale po does/doesn't już nie: *Does she **like**…?*

**Słowa-sygnały:** always, usually, often, sometimes, rarely, never, every day, on Mondays, twice a week.

## Present Continuous – teraz, chwilowo, plany
**am/is/are + czasownik z -ing.** Coś dzieje się **w tej chwili**, **w tym okresie** (chwilowo) albo to **ustalony plan** na przyszłość.

I'm writing an email right now. :: Właśnie piszę maila.
She's staying with her aunt this week. :: W tym tygodniu mieszka u cioci.
We're meeting Tom tomorrow at 5. :: Jutro o 5 spotykamy się z Tomem (umówione).

**Słowa-sygnały:** now, at the moment, right now, today, this week, Look!, Listen!, currently.

## Czasowniki, które nie lubią -ing (stative verbs)
Uczucia, myślenie, posiadanie, zmysły: **like, love, hate, want, need, know, believe, understand, remember, mean, belong, own, seem, prefer**.

I know the answer. (nie: ~~I'm knowing~~) :: Znam odpowiedź.
This bag belongs to Ann. :: Ta torba należy do Ani.

> Na maturze najczęściej sprawdzają: słowo-sygnał (now vs usually) i 3. osobę (-s).`,
    exercises: [
      c('Listen! Someone ___ at the door.', ['knocks', 'is knocking', 'knock'], 1, '„Listen!” – dzieje się teraz → Present Continuous.'),
      c('My brother ___ football every Saturday.', ['plays', 'is playing', 'play'], 0, '„every Saturday” – zwyczaj → Present Simple, 3. os. → -s.'),
      c('___ your sister speak French?', ['Is', 'Do', 'Does'], 2, 'Pytanie w Present Simple, she → **does**.'),
      c('I ___ what you mean.', ['understand', 'am understanding', 'understands'], 0, '„understand” to czasownik stanu – nie ma formy -ing.'),
      c('We ___ to Spain next Friday – the tickets are booked.', ['fly', 'are flying', 'flies'], 1, 'Ustalony plan (bilety kupione) → Present Continuous.'),
      c('The film ___ at 8 p.m., so hurry up!', ['starts', 'is starting', 'start'], 0, 'Rozkład / program → Present Simple.'),
      g('She ___ (not / like) horror films.', ["doesn't like", 'does not like'], 'Przeczenie w 3. os.: doesn’t + forma podstawowa.'),
      g('Look! It ___ (snow).', ["'s snowing", 'is snowing', "it's snowing"], '„Look!” – teraz → is + -ing.'),
      c('How often ___ your grandparents?', ['are you visiting', 'do you visit', 'you visit'], 1, 'How often → zwyczaj → do + podmiot + forma podstawowa.'),
      c('This week Tom ___ in the morning because his car is broken.', ['cycles', 'is cycling', 'cycle'], 1, '„this week” + sytuacja chwilowa → Present Continuous.'),
    ],
  },
  {
    id: 'past',
    title: 'Past Simple, Past Continuous, used to',
    sub: 'Opowiadanie o przeszłości',
    body: `
## Past Simple – zakończone zdarzenia
Coś stało się i **skończyło** w konkretnym momencie przeszłości (yesterday, last week, in 2019, ago).

| | Budowa |
| Twierdzenie | regularne **-ed** (worked, stopped) · nieregularne z tabeli (went, saw, took) |
| Przeczenie | **didn't + forma podstawowa** (didn't go) |
| Pytanie | **Did** you go…? |

I saw her two days ago. :: Widziałem ją dwa dni temu.
We didn't go out last night. :: Wczoraj wieczorem nie wychodziliśmy.

> Po **did/didn't** zawsze forma podstawowa: *Did you **see**…?* (nie: ~~Did you saw~~).

## Past Continuous – tło, czynność w trakcie
**was/were + -ing.** Coś **trwało** w danym momencie przeszłości albo było **tłem**, kiedy coś innego się wydarzyło.

I was reading when the phone rang. :: Czytałem, kiedy zadzwonił telefon.
At 9 p.m. yesterday we were watching a film. :: Wczoraj o 21 oglądaliśmy film.
While she was cooking, he was cleaning. :: Kiedy ona gotowała, on sprzątał.

> **when** + krótkie zdarzenie (Past Simple), **while** + dłuższa czynność (Past Continuous).

## used to – dawne zwyczaje
**used to + forma podstawowa** – kiedyś tak było, teraz już nie.

I used to play the piano. :: Kiedyś grałem na pianinie.
Did you use to live here? :: Czy kiedyś tu mieszkałeś? (w pytaniu i przeczeniu **use to**)

> Nie myl: **be/get used to + -ing** = być przyzwyczajonym: *I'm used to getting up early.*

## Najważniejsze czasowniki nieregularne
| Forma | Past Simple | Past Participle |
| be | was/were | been |
| buy | bought | bought |
| catch | caught | caught |
| choose | chose | chosen |
| forget | forgot | forgotten |
| leave | left | left |
| lose | lost | lost |
| teach | taught | taught |
| think | thought | thought |
| write | wrote | written |`,
    exercises: [
      c('I ___ my keys yesterday and couldn’t get in.', ['lost', 'was losing', 'have lost'], 0, '„yesterday” – zakończone zdarzenie → Past Simple.'),
      c('When I came in, my parents ___ dinner.', ['had', 'were having', 'have'], 1, 'Czynność w trakcie (tło), gdy wszedłem → Past Continuous.'),
      c('Did you ___ the news last night?', ['heard', 'hear', 'hearing'], 1, 'Po „did” – forma podstawowa.'),
      c('We ___ live in Kraków, but now we live in Gdańsk.', ['used to', 'use to', 'were used to'], 0, 'Dawny stan, który się zmienił → used to.'),
      c('While I ___ , I saw an old friend.', ['jogged', 'was jogging', 'have jogged'], 1, '„while” + dłuższa czynność → Past Continuous.'),
      g('She ___ (not / come) to the party last Saturday.', ["didn't come", 'did not come'], 'Przeczenie w Past Simple: didn’t + forma podstawowa.'),
      g('They ___ (buy) a new car two months ago.', ['bought'], '„ago” → Past Simple; buy – bought – bought.'),
      c('What ___ at 8 o’clock yesterday evening?', ['did you do', 'were you doing', 'have you done'], 1, 'Konkretna godzina w przeszłości, czynność w trakcie → Past Continuous.'),
      c('I’m not ___ to driving on the left yet.', ['use', 'used', 'using'], 1, 'be used to + -ing = być przyzwyczajonym.'),
      c('He ___ his arm when he was skiing.', ['broke', 'was breaking', 'breaks'], 0, 'Krótkie zdarzenie przerywające czynność → Past Simple.'),
    ],
  },
  {
    id: 'perfect',
    title: 'Present Perfect czy Past Simple',
    sub: 'Have done vs did – najczęstsza pułapka na maturze',
    body: `
## Present Perfect: have/has + III forma
Przeszłość, która **ma znaczenie teraz**, albo okres, który **jeszcze trwa**. **Nie podajemy, kiedy dokładnie.**

I've lost my phone. (i nadal go nie mam) :: Zgubiłem telefon.
She has never been to London. :: Nigdy nie była w Londynie.
Have you finished yet? :: Skończyłeś już?
We've lived here for ten years. (i nadal mieszkamy) :: Mieszkamy tu od dziesięciu lat.

**Słowa-sygnały:** already, yet, just, ever, never, so far, recently, lately, this week (jeszcze trwa), for, since.

## Past Simple – konkretny czas w przeszłości
I lost my phone yesterday. :: Zgubiłem telefon wczoraj.
She went to London in 2022. :: Pojechała do Londynu w 2022.

> Jeśli w zdaniu jest **kiedy** (yesterday, ago, last…, in 2020, when I was a child) → **Past Simple**. Bez czasu albo z already/yet/ever/never → **Present Perfect**.

## for czy since
| for – przez (długość okresu) | since – od (punkt startu) |
| for two hours | since 8 o’clock |
| for ages | since Monday |
| for three years | since 2020 / since I was a child |

## been czy gone
She has **gone** to Italy. :: Pojechała do Włoch (i tam jest).
She has **been** to Italy. :: Była we Włoszech (i wróciła).

## Present Perfect Continuous
**have/has been + -ing** – czynność trwa od jakiegoś czasu do teraz, liczy się **jak długo**.

I've been waiting for an hour! :: Czekam od godziny!`,
    exercises: [
      c('I ___ this film twice – it’s great.', ['saw', 'have seen', 'was seeing'], 1, 'Doświadczenie bez podania czasu → Present Perfect.'),
      c('We ___ to Rome last summer.', ['have been', 'went', 'have gone'], 1, '„last summer” – konkretny czas → Past Simple.'),
      c('Have you ___ been to Asia?', ['ever', 'yet', 'ago'], 0, 'Pytanie o doświadczenie w życiu → ever.'),
      c('She’s lived in Poland ___ 2019.', ['for', 'since', 'ago'], 1, '2019 to punkt startu → since.'),
      c('I haven’t finished my homework ___ .', ['already', 'yet', 'just'], 1, '„yet” w przeczeniach i pytaniach, na końcu zdania.'),
      c('Where’s Mark? – He’s ___ to the shop. He’ll be back soon.', ['been', 'gone', 'went'], 1, 'Poszedł i jeszcze go nie ma → gone.'),
      g('They ___ (know) each other for five years.', ["'ve known", 'have known'], '„for five years” do teraz; know nie ma -ing → Present Perfect.'),
      g('I ___ (just / finish) my essay.', ["'ve just finished", 'have just finished'], '„just” = przed chwilą → have just + III forma.'),
      c('When ___ learning English?', ['have you started', 'did you start', 'do you start'], 1, 'Pytanie „kiedy?” → Past Simple (nie Present Perfect).'),
      c('I’m tired because I ___ all day.', ['have been studying', 'studied', 'study'], 0, 'Czynność trwająca do teraz, widać skutki → Present Perfect Continuous.'),
      c('How long ___ here?', ['are you living', 'have you lived', 'did you live'], 1, '„How long” + nadal mieszkasz → Present Perfect.'),
    ],
  },
  {
    id: 'pastperfect',
    title: 'Past Perfect',
    sub: 'Co wydarzyło się wcześniej w przeszłości',
    body: `
## had + III forma
Opisujesz dwa zdarzenia z przeszłości i chcesz pokazać, że jedno było **wcześniej**.

When I arrived, the film had already started. :: Kiedy przyszedłem, film już się zaczął.
She was upset because she had lost her purse. :: Była zdenerwowana, bo zgubiła portmonetkę (wcześniej).
I had never seen snow before I moved to Norway. :: Nigdy nie widziałem śniegu, zanim przeprowadziłem się do Norwegii.

> Sygnały: **before, after, by the time, already, never … before, when** (gdy coś było już zrobione).

Porównaj:
When I got home, my sister **cooked** dinner. :: Gdy wróciłem, siostra zrobiła obiad (dopiero wtedy).
When I got home, my sister **had cooked** dinner. :: Gdy wróciłem, obiad był już zrobiony.`,
    exercises: [
      c('By the time we got to the station, the train ___ .', ['left', 'had left', 'has left'], 1, 'Pociąg odjechał wcześniej, niż dotarliśmy → Past Perfect.'),
      c('She ___ the book before she saw the film.', ['had read', 'has read', 'reads'], 0, '„before” – czynność wcześniejsza → had read.'),
      g('I couldn’t pay because I ___ (leave) my wallet at home.', ["'d left", 'had left'], 'Zostawienie portfela było wcześniej → had left.'),
      g('They ___ (never / fly) before their trip to Canada.', ['had never flown'], 'never … before + przeszłość → had never flown (fly – flew – flown).'),
      c('After he ___ his homework, he went out.', ['finished', 'had finished', 'has finished'], 1, 'Najpierw lekcje, potem wyjście → Past Perfect (Past Simple też bywa akceptowane po „after”, ale Past Perfect jest najbezpieczniejsze).'),
      c('When I phoned her, she ___ to bed – she was asleep.', ['already went', 'had already gone', 'has already gone'], 1, 'Wcześniej niż telefon → had already gone.'),
    ],
  },
  {
    id: 'future',
    title: 'Przyszłość: will, going to, Present Continuous',
    sub: 'Decyzje, plany, przewidywania',
    body: `
## will – decyzja teraz, obietnica, przewidywanie (opinia)
It’s cold. I’ll close the window. :: Zimno. Zamknę okno (decyduję teraz).
I promise I’ll help you. :: Obiecuję, że ci pomogę.
I think it will rain tomorrow. :: Myślę, że jutro będzie padać.

## be going to – zamiar i przewidywanie na podstawie dowodów
I’m going to study medicine. :: Zamierzam studiować medycynę (plan już wcześniej).
Look at those clouds! It’s going to rain. :: Spójrz na chmury! Będzie padać (widzę dowód).

## Present Continuous – umówione spotkania
I’m seeing the dentist on Monday. :: W poniedziałek idę do dentysty (umówione).

## Present Simple – rozkłady
The concert starts at 7. :: Koncert zaczyna się o 7.

## Zdania czasowe – po when, as soon as, before, after, until, if NIE używamy will
I’ll call you **when I get** home. :: Zadzwonię, kiedy dotrę do domu.
(nie: ~~when I will get~~)

## Future Continuous i Future Perfect (rzadziej)
This time tomorrow I’ll be lying on the beach. :: Jutro o tej porze będę leżeć na plaży.
By June I’ll have finished school. :: Do czerwca skończę szkołę.`,
    exercises: [
      c('The phone is ringing. – OK, I ___ it.', ['answer', "'ll answer", "'m going to answer"], 1, 'Decyzja w chwili mówienia → will.'),
      c('Watch out! You ___ fall!', ['will', 'are going to', 'are'], 1, 'Widać dowód (zaraz spadnie) → going to.'),
      c('We ___ our grandparents next weekend – we arranged it last week.', ['visit', 'are visiting', 'will be visit'], 1, 'Umówiony plan → Present Continuous.'),
      c('I’ll tell him when he ___ .', ['arrives', 'will arrive', 'is going to arrive'], 0, 'Po „when” w zdaniu o przyszłości – Present Simple.'),
      c('I’ve decided. I ___ learn to drive this year.', ['will', 'am going to', 'learn'], 1, 'Zamiar podjęty wcześniej → going to.'),
      g('Don’t worry, I ___ (not / tell) anyone.', ["won't tell", 'will not tell'], 'Obietnica → won’t.'),
      g('By the end of the year, I ___ (save) enough money for a bike.', ["'ll have saved", 'will have saved'], '„By the end of…” – coś będzie zakończone → Future Perfect.'),
      c('As soon as I ___ the results, I’ll let you know.', ['get', "'ll get", 'got'], 0, 'as soon as + Present Simple.'),
      c('This time next week we ___ in the mountains.', ["'ll be hiking", "'ll hike", 'hike'], 0, 'Czynność w trakcie w danym momencie przyszłości → Future Continuous.'),
    ],
  },
  {
    id: 'conditionals',
    title: 'Okresy warunkowe (0, 1, 2, 3) i I wish',
    sub: 'If… – absolutny pewniak na maturze',
    body: `
## Przegląd
| Typ | Kiedy | If… | …skutek |
| 0 | zawsze prawda | If + Present Simple | Present Simple |
| 1 | realne w przyszłości | If + Present Simple | **will** + bezokolicznik |
| 2 | nierealne teraz / mało prawdopodobne | If + **Past Simple** | **would** + bezokolicznik |
| 3 | nierealne w przeszłości | If + **had + III forma** | **would have + III forma** |

If you heat ice, it melts. :: Jeśli podgrzejesz lód, topnieje.
If it rains, we’ll stay at home. :: Jeśli będzie padać, zostaniemy w domu.
If I had more time, I would learn Spanish. :: Gdybym miał więcej czasu, uczyłbym się hiszpańskiego.
If I were you, I wouldn’t buy it. :: Na twoim miejscu nie kupowałbym tego.
If you had told me, I would have helped you. :: Gdybyś mi powiedział, pomógłbym ci.

> W zdaniu z **if** nigdy nie ma **will** ani **would** (w typach 1–3). *If it ~~will rain~~…*

## unless = if not
We’ll miss the bus unless we hurry. :: Spóźnimy się na autobus, jeśli się nie pospieszymy.

## I wish / If only
| Życzenie dotyczy | Budowa |
| teraźniejszości | I wish + **Past Simple** – I wish I **had** a car. (szkoda, że nie mam) |
| przeszłości | I wish + **had + III forma** – I wish I **had studied** more. (żałuję, że się nie uczyłem) |
| irytującego zachowania | I wish + **would** – I wish you **would** stop talking. |`,
    exercises: [
      c('If it ___ tomorrow, we’ll cancel the trip.', ['rains', 'will rain', 'rained'], 0, 'Typ 1: If + Present Simple, … will.'),
      c('If I ___ rich, I would travel around the world.', ['am', 'were', 'will be'], 1, 'Typ 2: nierealne teraz → If + Past Simple (were).'),
      c('If she had studied harder, she ___ the exam.', ['would pass', 'would have passed', 'will pass'], 1, 'Typ 3: przeszłość nierealna → would have + III forma.'),
      c('You won’t get fit ___ you exercise regularly.', ['if', 'unless', 'when'], 1, 'unless = if not (jeśli nie).'),
      c('I wish I ___ how to swim.', ['know', 'knew', 'would know'], 1, 'Życzenie o teraźniejszości → Past Simple.'),
      g('If you ___ (mix) red and white, you get pink.', ['mix'], 'Typ 0 – zawsze prawda → Present Simple.'),
      g('If I ___ (have) more money, I would buy a new phone.', ['had'], 'Typ 2 → If + Past Simple.'),
      g('If we ___ (leave) earlier, we wouldn’t have missed the plane.', ["'d left", 'had left'], 'Typ 3 → If + had + III forma.'),
      g('I wish I ___ (not / eat) so much yesterday.', ["hadn't eaten", 'had not eaten'], 'Żal o przeszłość → wish + had + III forma.'),
      c('What would you do if you ___ a wallet in the street?', ['find', 'found', 'will find'], 1, 'Sytuacja hipotetyczna → typ 2.'),
      c('If you see Kate, ___ her to call me?', ['will you tell', 'would you have told', 'did you tell'], 0, 'Typ 1 – prośba dotycząca przyszłości.'),
    ],
  },
  {
    id: 'passive',
    title: 'Strona bierna (Passive Voice)',
    sub: 'Was built, is made, will be sent…',
    body: `
## Budowa: be (w odpowiednim czasie) + III forma
Ważne jest **co się dzieje**, a nie kto to robi. Wykonawcę dodajesz przez **by**.

| Czas | Strona bierna |
| Present Simple | English **is spoken** here. |
| Present Continuous | The road **is being repaired**. |
| Past Simple | The bridge **was built** in 1900. |
| Present Perfect | My bike **has been stolen**. |
| will | The results **will be published** tomorrow. |
| modal | This form **must be signed**. |

Pizza was invented in Italy. :: Pizzę wynaleziono we Włoszech.
The letter was written by my grandma. :: List został napisany przez moją babcię.

> Sztuczka: znajdź czas w zdaniu czynnym, wstaw **be** w tym samym czasie + III forma.
> They **are building** a school → A school **is being built**.

## have something done – ktoś coś dla ciebie robi
I had my hair cut. :: Obciąłem włosy (u fryzjera).
We're having our kitchen painted. :: Malują nam kuchnię.

## It is said that… / He is said to…
It is said that he is very rich. = He is said to be very rich. :: Mówi się, że jest bardzo bogaty.`,
    exercises: [
      c('This castle ___ in the 14th century.', ['built', 'was built', 'has built'], 1, 'Konkretna przeszłość, strona bierna → was built.'),
      c('Breakfast ___ from 7 to 10 every day.', ['serves', 'is served', 'is serving'], 1, 'Zwyczaj, strona bierna → is served.'),
      c('My car ___ at the moment, so I’m taking the bus.', ['is repaired', 'is being repaired', 'repairs'], 1, '„at the moment” → is being + III forma.'),
      g('The winners ___ (announce) next week.', ['will be announced'], 'Przyszłość, strona bierna → will be + III forma.'),
      g('My wallet ___ (steal)! I can’t find it anywhere.', ['has been stolen'], 'Skutek widoczny teraz → has been + III forma.'),
      g('Mobile phones must ___ (switch) off during the exam.', ['be switched'], 'Po czasowniku modalnym: be + III forma.'),
      c('I ___ my eyes tested last week.', ['had', 'made', 'did'], 0, 'have something done → had my eyes tested.'),
      c('The novel ___ into 30 languages so far.', ['has translated', 'has been translated', 'was translating'], 1, '„so far” → Present Perfect, strona bierna.'),
      c('He is said ___ a talented musician.', ['be', 'to be', 'being'], 1, 'He is said **to be** …'),
    ],
  },
  {
    id: 'reported',
    title: 'Mowa zależna (Reported Speech)',
    sub: 'He said that… / She asked if…',
    body: `
## Zdania twierdzące – czas „cofa się”
| Słowa | Relacja (po said/told) |
| “I **am** tired.” | He said (that) he **was** tired. |
| “I **live** in Paris.” | She said she **lived** in Paris. |
| “I **saw** it.” | He said he **had seen** it. |
| “I**’ve finished**.” | She said she **had finished**. |
| “I **will** help.” | He said he **would** help. |
| “I **can** swim.” | She said she **could** swim. |

> **say** – bez osoby: *He said that…* · **tell** – zawsze z osobą: *He told **me** that…*

## Zmiany określeń czasu i miejsca
| Było | Staje się |
| now | then |
| today | that day |
| yesterday | the day before / the previous day |
| tomorrow | the next day / the following day |
| here | there |
| this | that |
| ago | before |

## Pytania – szyk jak w zdaniu twierdzącym
“Where **do you** live?” → She asked me where **I lived**. :: Zapytała, gdzie mieszkam.
“**Are** you hungry?” → He asked **if/whether** I **was** hungry. :: Zapytał, czy jestem głodny.

## Polecenia i prośby – to / not to
“Close the door.” → She told me **to close** the door.
“Don’t be late.” → He told us **not to be** late.`,
    exercises: [
      c('“I’m busy,” she said. → She said that she ___ busy.', ['is', 'was', 'has been'], 1, 'am/is → was.'),
      c('He ___ me that he would call.', ['said', 'told', 'asked'], 1, 'tell + osoba.'),
      c('“Do you like pizza?” → She asked me ___ pizza.', ['do I like', 'if I liked', 'if did I like'], 1, 'Pytanie tak/nie → if + szyk twierdzący + czas cofnięty.'),
      c('“Don’t touch it!” → Mum told me ___ it.', ["don't touch", 'not to touch', 'to not touched'], 1, 'Zakaz → not to + bezokolicznik.'),
      g('“I will be there tomorrow.” → He said he ___ be there the next day.', ['would'], 'will → would.'),
      g('“Where are you going?” → She asked me where I ___ (go).', ['was going'], 'are going → was going; szyk twierdzący.'),
      g('“I lost my key.” → Tom said he ___ (lose) his key.', ["'d lost", 'had lost'], 'Past Simple → Past Perfect.'),
      c('“I can help you.” → She said she ___ help me.', ['can', 'could', 'will'], 1, 'can → could.'),
      c('He asked me what time ___ .', ['it was', 'was it', 'is it'], 0, 'W pytaniu zależnym szyk twierdzący: it was.'),
    ],
  },
  {
    id: 'modals',
    title: 'Czasowniki modalne',
    sub: 'must, have to, should, can, could, may, might…',
    body: `
## Obowiązek i zakaz
| | Znaczenie |
| **must** | muszę (sam tak uważam, przepis) |
| **have to** | muszę (z zewnątrz, okoliczności) |
| **mustn’t** | **nie wolno** |
| **don’t have to / needn’t** | **nie muszę** (nie ma potrzeby) |

You mustn’t use your phone during the exam. :: Nie wolno używać telefonu.
You don’t have to come if you don’t want to. :: Nie musisz przychodzić.

> Najczęstszy błąd: **mustn’t ≠ don’t have to**.

## Rada
You **should** / **ought to** see a doctor. :: Powinieneś iść do lekarza.
You **had better** hurry. :: Lepiej się pospiesz.

## Umiejętność i pozwolenie
I **can** swim. / I **could** swim when I was five. :: Umiem / umiałem pływać.
I **was able to** finish on time. :: Udało mi się skończyć (jednorazowo).
**Can / Could / May** I open the window? :: Czy mogę otworzyć okno?

## Prawdopodobieństwo
| Pewność | Teraz | O przeszłości |
| na pewno tak | **must** be | **must have** been |
| może | **may / might / could** be | **may/might have** been |
| na pewno nie | **can’t** be | **can’t have** been |

She must be at home – the lights are on. :: Musi być w domu.
He can’t have seen us – he was in Paris. :: Nie mógł nas widzieć.

## Krytyka przeszłości
You **should have told** me. :: Powinieneś był mi powiedzieć.
You **needn’t have bought** milk. :: Niepotrzebnie kupiłeś mleko.`,
    exercises: [
      c('You ___ smoke here. It’s forbidden.', ["mustn't", "don't have to", "needn't"], 0, 'Zakaz → mustn’t.'),
      c('Tomorrow is Sunday, so I ___ get up early.', ["mustn't", "don't have to", "can't"], 1, 'Nie ma potrzeby → don’t have to.'),
      c('You look tired. You ___ go to bed earlier.', ['should', 'must to', 'can'], 0, 'Rada → should.'),
      c('She ___ be at work – her car is in the car park.', ['must', "can't", 'should'], 0, 'Wniosek prawie pewny → must.'),
      c('That ___ be Tom – he’s on holiday in Spain.', ['must', "can't", 'may'], 1, 'Logicznie niemożliwe → can’t.'),
      g('I ___ (can / not) sleep last night because of the noise.', ["couldn't", 'could not'], 'can w przeszłości → couldn’t.'),
      g('You should ___ (tell) me earlier! (should + have + III forma)', ['have told'], 'Krytyka przeszłości → should have told.'),
      c('After many tries, he ___ open the jar.', ['could', 'was able to', 'can'], 1, 'Jednorazowy sukces w przeszłości → was able to.'),
      c('Take an umbrella. It ___ rain later.', ['might', 'must', 'has to'], 0, 'Możliwość → might/may.'),
      c('You ___ have bought bread – we already had some.', ["needn't", "mustn't", "can't"], 0, 'Niepotrzebnie coś zrobiłeś → needn’t have + III forma.'),
    ],
  },
  {
    id: 'gerund',
    title: 'Gerund (-ing) czy bezokolicznik (to)',
    sub: 'enjoy doing, want to do, stop doing / stop to do',
    body: `
## Po tych czasownikach: -ing
**enjoy, avoid, mind, finish, keep, suggest, consider, can’t stand, miss, practise, give up, look forward to, be used to, spend (time) doing**

I enjoy reading. :: Lubię czytać.
Would you mind opening the window? :: Czy mógłbyś otworzyć okno?
I’m looking forward to seeing you. :: Nie mogę się doczekać spotkania.

> Po **przyimkach** zawsze -ing: interested **in learning**, good **at drawing**, **before leaving**, **without saying**.

## Po tych czasownikach: to + bezokolicznik
**want, decide, hope, plan, agree, refuse, promise, manage, afford, learn, offer, seem, would like, need**

She decided to stay. :: Postanowiła zostać.
I can’t afford to buy it. :: Nie stać mnie, żeby to kupić.

## Bezokolicznik bez „to”
Po **czasownikach modalnych** (can, must, should…), po **make** i **let**:
My parents let me go. :: Rodzice mi pozwolili iść.
She made me laugh. :: Rozśmieszyła mnie.

## Zmiana znaczenia
| | -ing | to |
| stop | He stopped **smoking**. (rzucił palenie) | He stopped **to smoke**. (zatrzymał się, żeby zapalić) |
| remember | I remember **meeting** her. (pamiętam, że spotkałem) | Remember **to lock** the door. (pamiętaj, żeby…) |
| forget | I’ll never forget **seeing** it. | Don’t forget **to call**. |
| try | Try **restarting** it. (spróbuj, czy pomoże) | I tried **to lift** it. (usiłowałem) |`,
    exercises: [
      c('I really enjoy ___ to music.', ['listen', 'to listen', 'listening'], 2, 'enjoy + -ing.'),
      c('They decided ___ a new house.', ['buying', 'to buy', 'buy'], 1, 'decide + to.'),
      c('I’m looking forward to ___ from you.', ['hear', 'hearing', 'to hear'], 1, '„to” to tutaj przyimek → -ing.'),
      c('My dad finally stopped ___ . He hasn’t had a cigarette for a year.', ['smoking', 'to smoke', 'smoke'], 0, 'stop + -ing = przestać coś robić.'),
      c('Remember ___ the lights before you leave.', ['switching off', 'to switch off', 'switch off'], 1, 'remember + to = pamiętać, żeby coś zrobić.'),
      c('She’s good at ___ .', ['draw', 'to draw', 'drawing'], 2, 'Po przyimku (at) → -ing.'),
      g('My parents won’t let me ___ (go) to the concert.', ['go'], 'let + bezokolicznik bez „to”.'),
      g('Would you mind ___ (close) the door?', ['closing'], 'mind + -ing.'),
      g('He managed ___ (finish) the project on time.', ['to finish'], 'manage + to.'),
      c('I can’t afford ___ on holiday this year.', ['going', 'to go', 'go'], 1, 'afford + to.'),
    ],
  },
  {
    id: 'comparison',
    title: 'Stopniowanie przymiotników, too/enough, so/such',
    sub: 'bigger, the most interesting, as… as',
    body: `
## Stopniowanie
| Przymiotnik | Wyższy | Najwyższy |
| krótki: cheap | cheap**er** | the cheap**est** |
| zakończony na -y: easy | eas**ier** | the eas**iest** |
| długi: expensive | **more** expensive | **the most** expensive |
| good | **better** | **the best** |
| bad | **worse** | **the worst** |
| far | **further/farther** | **the furthest** |
| little | **less** | **the least** |
| many/much | **more** | **the most** |

This phone is cheaper than that one. :: Ten telefon jest tańszy niż tamten.
It's the best film I’ve ever seen. :: To najlepszy film, jaki widziałem.

## Porównania
She’s **as tall as** her brother. :: Jest tak wysoka jak brat.
It’s **not as / not so** cold **as** yesterday. :: Nie jest tak zimno jak wczoraj.
The more you practise, the better you get. :: Im więcej ćwiczysz, tym lepiej ci idzie.
much / far / a lot **better** :: dużo lepszy · a bit / slightly **better** :: trochę lepszy

## too i enough
It’s **too** expensive. :: Jest za drogie.
He isn’t old **enough** to drive. :: Nie jest wystarczająco dorosły (przymiotnik + enough).
We don’t have **enough** time. :: Nie mamy dość czasu (enough + rzeczownik).

## so i such
It was **so** cold that we stayed in. :: Było tak zimno, że… (so + przymiotnik)
It was **such a** cold day that… :: To był tak zimny dzień, że… (such + (a) przymiotnik + rzeczownik)`,
    exercises: [
      c('This exercise is ___ than the last one.', ['easyer', 'easier', 'more easy'], 1, 'easy → easier (y → i + er).'),
      c('It was ___ day of my life!', ['the best', 'the better', 'the most good'], 0, 'good – better – the best.'),
      c('My room isn’t as big ___ yours.', ['than', 'as', 'like'], 1, 'not as … as.'),
      c('She isn’t ___ to reach the top shelf.', ['tall enough', 'enough tall', 'too tall'], 0, 'przymiotnik + enough.'),
      c('It was ___ boring film that I fell asleep.', ['so', 'such a', 'such'], 1, 'such a + przymiotnik + rzeczownik policzalny.'),
      g('Today is ___ (bad) than yesterday.', ['worse'], 'bad – worse – the worst.'),
      g('This is the ___ (interesting) book I’ve read this year.', ['most interesting'], 'Długi przymiotnik → the most.'),
      c('The ___ you sleep, the more tired you feel.', ['less', 'least', 'fewer'], 0, 'The + stopień wyższy…, the + stopień wyższy.'),
      c('The coffee is ___ hot to drink.', ['so', 'too', 'enough'], 1, 'too + przymiotnik + to = zbyt…, żeby.'),
      c('My new laptop is ___ faster than the old one.', ['much', 'many', 'very'], 0, 'Wzmocnienie stopnia wyższego → much/far/a lot.'),
    ],
  },
  {
    id: 'articles',
    title: 'Przedimki i określenia ilości',
    sub: 'a/an/the, some/any, much/many, few/little',
    body: `
## a / an – jeden z wielu, pierwszy raz
I saw **a** dog. **The** dog was huge. :: Zobaczyłem psa. Ten pies był ogromny.
**an** przed samogłoską w wymowie: an apple, **an hour**, ale **a university** (czyt. ju-).
Zawody: She’s **a** doctor.

## the – konkretne, jedyne, znane
**the** sun, **the** Internet, **the** best, **the** same, **the** USA, **the** Thames, **the** Alps, play **the** guitar.

## Bez przedimka
Ogólnie o rzeczach w liczbie mnogiej / niepoliczalnych: *I like **dogs**. **Money** isn’t everything.*
Posiłki, języki, sporty, kraje (zwykle): have **breakfast**, speak **English**, play **tennis**, **Poland**.
**go to school / bed / work**, **at home**.

## Policzalne i niepoliczalne
| | Policzalne (books) | Niepoliczalne (water, advice) |
| dużo | **many** | **much** |
| mało | **few** (prawie nic), **a few** (kilka) | **little** (prawie nic), **a little** (trochę) |
| ile? | How **many**…? | How **much**…? |
| | a lot of / lots of – oba | |

> Niepoliczalne po angielsku (a w polsku policzalne!): **advice, information, news, furniture, luggage, equipment, homework, money, bread**.
> *some useful **information*** (nie: ~~informations~~), *a piece of advice*.

## some / any / no
**some** – w twierdzeniach i propozycjach (*Would you like some tea?*)
**any** – w przeczeniach i pytaniach (*Have you got any questions?*)`,
    exercises: [
      c('She wants to be ___ engineer.', ['a', 'an', 'the'], 1, 'Samogłoska w wymowie → an engineer.'),
      c('We had ___ breakfast at 8.', ['a', 'the', '— (nic)'], 2, 'Posiłki bez przedimka.'),
      c('Can you give me some ___ ?', ['advices', 'advice', 'an advice'], 1, 'advice jest niepoliczalne.'),
      c('How ___ money do you need?', ['many', 'much', 'few'], 1, 'money – niepoliczalne → much.'),
      c('There were only ___ people at the party – about five.', ['a few', 'a little', 'little'], 0, 'Kilka (policzalne) → a few.'),
      c('___ Moon goes round the Earth.', ['A', 'The', '— (nic)'], 1, 'Jedyny obiekt → the.'),
      c('Have you got ___ brothers or sisters?', ['some', 'any', 'no'], 1, 'Pytanie → any.'),
      g('She plays ___ piano beautifully.', ['the'], 'Instrumenty → the.'),
      c('I have ___ time, so I can’t help you now – sorry.', ['little', 'a little', 'few'], 0, 'little = prawie nic (negatywnie).'),
      c('It took me ___ hour to get there.', ['a', 'an', 'the'], 1, '„hour” – h nieme → an.'),
    ],
  },
  {
    id: 'relative',
    title: 'Zdania względne (who, which, that, whose, where)',
    sub: 'The man who…, the book which…',
    body: `
## Zaimki względne
| Zaimek | O czym | Przykład |
| **who** | ludzie | the girl **who** lives next door |
| **which** | rzeczy, zwierzęta | the phone **which** I bought |
| **that** | ludzie i rzeczy (w zdaniach definiujących) | the film **that** we saw |
| **whose** | czyj | the man **whose** car was stolen |
| **where** | miejsce | the town **where** I was born |
| **when** | czas | the day **when** we met |

The woman **who** called you is my aunt. :: Kobieta, która do ciebie dzwoniła, to moja ciocia.
That’s the boy **whose** dog bit me. :: To chłopiec, którego pies mnie ugryzł.

> Gdy zaimek jest **dopełnieniem** (po nim jest nowy podmiot), można go pominąć: *the book (that) **I** read*.

## Zdania niedefiniujące – z przecinkami
Dodatkowa informacja, **bez that**:
My brother, **who** lives in London, is a doctor. :: Mój brat, który mieszka w Londynie, jest lekarzem.`,
    exercises: [
      c('The man ___ helped me was very kind.', ['which', 'who', 'whose'], 1, 'Człowiek → who.'),
      c('This is the house ___ I grew up.', ['which', 'where', 'who'], 1, 'Miejsce → where.'),
      c('I met a girl ___ father is a famous actor.', ['who', 'whose', 'which'], 1, 'Czyj ojciec → whose.'),
      c('The laptop ___ I bought last week is already broken.', ['who', 'which', 'where'], 1, 'Rzecz → which/that.'),
      c('Warsaw, ___ is the capital of Poland, is on the Vistula.', ['that', 'which', 'where'], 1, 'Zdanie niedefiniujące (przecinki) – bez that → which.'),
      g('Do you remember the day ___ we first met?', ['when', 'that'], 'Czas → when.'),
      g('She’s the teacher ___ explained it to us. (who/which?)', ['who', 'that'], 'Osoba → who (that też poprawne).'),
      c('Is this the song ___ you were talking about?', ['who', 'which', 'whose'], 1, 'Rzecz → which/that.'),
    ],
  },
  {
    id: 'questions',
    title: 'Pytania, question tags, pytania pośrednie',
    sub: 'Do you…? Isn’t it? Could you tell me where…?',
    body: `
## Szyk pytania
**(Słowo pytające) + operator + podmiot + czasownik**
Where **do you** live? · What **is she** doing? · Why **did they** leave? · How long **have you** known him?

## Pytania o podmiot – bez do/does/did
**Who called** you? (nie: ~~Who did call~~) :: Kto do ciebie dzwonił?
**What happened**? :: Co się stało?

## Question tags – „prawda?”
Zdanie twierdzące → tag przeczący, i odwrotnie. Operator z tego samego czasu.
You’re tired, **aren’t you**? · She can swim, **can’t she**? · They didn’t come, **did they**?
He lives here, **doesn’t he**? · I’m late, **aren’t I**? · Let’s go, **shall we**?

## Pytania pośrednie – grzeczniej, szyk twierdzący
Could you tell me where **the station is**? (nie: ~~where is the station~~)
Do you know what time **the shop opens**? :: Wiesz, o której otwierają sklep?
I wonder **if** she’s coming. :: Ciekawe, czy przyjdzie.`,
    exercises: [
      c('You haven’t seen my glasses, ___ ?', ['haven’t you', 'have you', 'did you'], 1, 'Przeczenie → tag twierdzący: have you?'),
      c('She plays tennis, ___ ?', ["doesn't she", "isn't she", "don't she"], 0, 'Present Simple, she → doesn’t she?'),
      c('Who ___ the window?', ['did break', 'broke', 'did broke'], 1, 'Pytanie o podmiot – bez did.'),
      c('Could you tell me where ___ ?', ['is the museum', 'the museum is', 'does the museum'], 1, 'Pytanie pośrednie – szyk twierdzący.'),
      g('I’m right, ___ I?', ["aren't"], 'I am → aren’t I?'),
      g('How long ___ you been learning English?', ['have'], 'Present Perfect Continuous → have.'),
      c('Do you know what time the film ___ ?', ['does start', 'starts', 'start'], 1, 'Pytanie pośrednie → szyk twierdzący: the film starts.'),
      c('Let’s order pizza, ___ ?', ['shall we', "don't we", 'will we'], 0, 'Let’s → shall we?'),
    ],
  },
  {
    id: 'wordformation',
    title: 'Słowotwórstwo (word formation)',
    sub: 'Przedrostki i przyrostki – częste zadanie „przekształć wyraz”',
    body: `
## Przyrostki rzeczowników
| Końcówka | Przykłady |
| -tion / -sion | educate → educa**tion**, decide → deci**sion** |
| -ment | develop → develop**ment**, enjoy → enjoy**ment** |
| -ness | happy → happi**ness**, kind → kind**ness** |
| -ity | able → abil**ity**, possible → possibil**ity** |
| -ance / -ence | perform → perform**ance**, differ → differ**ence** |
| -er / -or / -ist / -ian (osoby) | teach**er**, act**or**, art**ist**, music**ian** |

## Przyrostki przymiotników
| Końcówka | Przykłady |
| -ful / -less | use**ful**, care**less**, help**less** |
| -able / -ible | comfort**able**, poss**ible** |
| -ous | danger**ous**, fam**ous** |
| -al | natur**al**, profession**al** |
| -ive | creat**ive**, attract**ive** |
| -y | sunn**y**, health**y** |
| -ed / -ing | bor**ed** (znudzony) / bor**ing** (nudny) |

## Przyrostki przysłówków i czasowników
**-ly**: quick → quick**ly**, careful → careful**ly**, easy → eas**ily** · **-en / -ise**: wide → wid**en**, modern → modern**ise**

## Przeczenia – przedrostki
| Przedrostek | Przykłady |
| un- | **un**happy, **un**usual, **un**fortunately |
| in- / im- / il- / ir- | **in**correct, **im**possible, **il**legal, **ir**regular |
| dis- | **dis**agree, **dis**honest, **dis**appear |
| mis- (źle) | **mis**understand, **mis**spell |
| re- (ponownie) | **re**write, **re**build |

> Sprawdź: jaka część mowy pasuje do luki? Po **the/a/my** → rzeczownik. Przed rzeczownikiem → przymiotnik. Opisuje czasownik → przysłówek (-ly). Czy sens jest przeczący → un-/dis-/im-.`,
    exercises: [
      g('Thank you for your ___ (kind).', ['kindness'], 'Po „your” rzeczownik → kindness.'),
      g('It is ___ (possible) to finish this in an hour – we need more time.', ['impossible'], 'Sens przeczący → im-possible.'),
      g('She drives very ___ (care).', ['carefully'], 'Opisuje czasownik → przysłówek careful-ly.'),
      g('The film was so ___ (bore) that I left.', ['boring'], 'Film jest nudny → -ing.'),
      g('He’s a famous ___ (music).', ['musician'], 'Osoba → music-ian.'),
      g('I ___ (agree) with you completely – you’re wrong.', ['disagree'], 'Sens przeczący → dis-agree.'),
      g('Smoking is bad for your ___ (healthy).', ['health'], 'Po „your” rzeczownik → health.'),
      g('The ___ (decide) was difficult.', ['decision'], 'Po „the” rzeczownik → decision.'),
      g('This chair is very ___ (comfort).', ['comfortable'], 'Przymiotnik → comfortable.'),
      g('___ (fortunate), we missed the last bus.', ['Unfortunately', 'unfortunately'], 'Przysłówek, sens negatywny → Un-fortunate-ly.'),
      g('Climbing without a rope is ___ (danger).', ['dangerous'], 'Przymiotnik → dangerous.'),
    ],
  },
  {
    id: 'collocations',
    title: 'Kolokacje, phrasal verbs, przyimki',
    sub: 'make/do, take/get, look for, interested in…',
    body: `
## make czy do
| make | do |
| make a mistake, a decision, a noise | do homework, the shopping, the washing-up |
| make friends, money, a phone call | do sport, exercise, your best |
| make a cake, an effort, progress | do a course, a favour, business |

## take, have, get, pay
**take** a photo, a break, part in, place, care of, an exam
**have** fun, a good time, a party, a look, a shower
**get** married, lost, better, ready, on well with
**pay** attention to, a visit, a compliment

## Najczęstsze phrasal verbs
| Czasownik | Znaczenie |
| look for | szukać |
| look after | opiekować się |
| look forward to (+ -ing) | nie móc się doczekać |
| find out | dowiedzieć się |
| give up | zrezygnować, rzucić |
| turn on / off | włączyć / wyłączyć |
| turn down | odrzucić, ściszyć |
| put off | odłożyć na później |
| set off | wyruszyć |
| run out of | skończyć się (czegoś) |
| get on with | dogadywać się |
| take up | zacząć (hobby) |
| come up with | wymyślić |
| break down | zepsuć się |

## Przyimki po przymiotnikach i czasownikach
interested **in**, good **at**, afraid **of**, proud **of**, keen **on**, responsible **for**, different **from**, famous **for**, tired **of**, worried **about**
depend **on**, listen **to**, wait **for**, apologise **for**, agree **with**, belong **to**, succeed **in**, insist **on**

## Przyimki czasu
**at** 5 o’clock, at night, at the weekend · **on** Monday, on 3rd May, on my birthday · **in** May, in 2025, in the morning, in summer`,
    exercises: [
      c('I ___ a terrible mistake in my essay.', ['did', 'made', 'took'], 1, 'make a mistake.'),
      c('Have you ___ your homework yet?', ['done', 'made', 'taken'], 0, 'do homework.'),
      c('Could you ___ my cat while I’m away?', ['look for', 'look after', 'look up'], 1, 'look after = opiekować się.'),
      c('We’ve ___ out of milk. Can you buy some?', ['run', 'got', 'gone'], 0, 'run out of = skończyć się.'),
      c('She’s really good ___ maths.', ['in', 'at', 'on'], 1, 'good at.'),
      c('It depends ___ the weather.', ['of', 'from', 'on'], 2, 'depend on.'),
      c('My birthday is ___ 15th June.', ['in', 'on', 'at'], 1, 'Data → on.'),
      g('I’m not interested ___ politics.', ['in'], 'interested in.'),
      g('Can you turn ___ the TV? I want to watch the news.', ['on'], 'turn on = włączyć.'),
      c('The concert will ___ place in the park.', ['take', 'make', 'have'], 0, 'take place = odbyć się.'),
      c('I’ve decided to ___ up yoga.', ['take', 'give', 'put'], 0, 'take up = zacząć (hobby).'),
      c('We set ___ early in the morning.', ['up', 'off', 'out of'], 1, 'set off = wyruszyć.'),
    ],
  },
]

/** wszystkie ćwiczenia – do losowego testu „jak na maturze” */
export const ALL_GRAMMAR_EXERCISES = GRAMMAR.flatMap((l) => l.exercises)
