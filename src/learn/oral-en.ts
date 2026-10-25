/**
 * Matura ustna z angielskiego – zadania treningowe w formacie CKE (bez określania poziomu).
 * Przebieg egzaminu: rozmowa wstępna → zadanie 1 (rozmowa z odgrywaniem roli) →
 * zadanie 2 (opis ilustracji + 3 pytania) → zadanie 3 (materiał stymulujący + 2 pytania). Ok. 15 minut.
 * Zestawy poniżej są autorskie (do treningu), wzorowane na formacie egzaminu.
 * W prawdziwym egzaminie zadanie 2 i 3 mają zdjęcia – tu zamiast nich jest opis sceny.
 */

export const WARMUP_QUESTIONS = [
  'What do you usually do in your free time?',
  'Tell me about your best friend.',
  'What is your favourite place in your town? Why?',
  'How do you usually spend your weekends?',
  'What kind of music do you like?',
  'Tell me about your last holiday.',
  'What would you like to do after finishing school?',
  'How do you usually travel to school?',
  'What do you like cooking or eating?',
  'Do you prefer spending time indoors or outdoors? Why?',
]

export interface RolePlay {
  title: string
  /** sytuacja (po polsku, jak w egzaminie) */
  situation: string
  /** 4 kwestie do omówienia */
  points: string[]
  /** kim jest egzaminujący */
  examiner: string
  /** przykładowe kwestie egzaminującego – do samodzielnego treningu */
  lines: string[]
}

export const ROLE_PLAYS: RolePlay[] = [
  {
    title: 'Wspólny wyjazd na koncert',
    situation: 'Planujesz z kolegą/koleżanką z Anglii wyjazd na koncert. Porozmawiaj o tym.',
    points: ['wybór koncertu i wykonawcy', 'transport', 'nocleg', 'koszty'],
    examiner: 'kolega/koleżanka z Anglii',
    lines: ['So, which concert would you like to go to?', 'How shall we get there?', 'Where are we going to stay?', 'Hmm, it might be expensive. How can we save some money?'],
  },
  {
    title: 'Reklamacja w sklepie',
    situation: 'Kupiłeś/kupiłaś w Londynie słuchawki, które nie działają. Wracasz do sklepu. Egzaminujący jest sprzedawcą.',
    points: ['kiedy i co kupiłeś/kupiłaś', 'na czym polega usterka', 'czego oczekujesz', 'termin załatwienia sprawy'],
    examiner: 'sprzedawca',
    lines: ['Good morning, how can I help you?', 'What exactly is wrong with them?', 'Would you like a refund or a replacement?', 'We need to send them to the producer – it can take two weeks. Is that OK?'],
  },
  {
    title: 'Wolontariat',
    situation: 'Chcesz zostać wolontariuszem w schronisku dla zwierząt w Irlandii. Rozmawiasz z koordynatorem.',
    points: ['dlaczego chcesz pomagać', 'twoje doświadczenie', 'dostępność (kiedy możesz pracować)', 'pytanie o zakwaterowanie'],
    examiner: 'koordynator wolontariatu',
    lines: ['Why would you like to work with us?', 'Have you ever worked with animals before?', 'When are you available?', 'Do you have any questions for me?'],
  },
  {
    title: 'Impreza urodzinowa',
    situation: 'Organizujesz z kolegą z Kanady przyjęcie urodzinowe dla wspólnej znajomej.',
    points: ['miejsce przyjęcia', 'jedzenie i napoje', 'prezent', 'zaproszeni goście'],
    examiner: 'kolega z Kanady',
    lines: ['Where should we have the party?', 'What food shall we prepare?', 'What present could we buy her?', 'Who should we invite?'],
  },
  {
    title: 'Kurs językowy',
    situation: 'Dzwonisz do szkoły językowej w Brighton, bo chcesz zapisać się na wakacyjny kurs.',
    points: ['termin i długość kursu', 'twój poziom języka', 'zajęcia dodatkowe', 'cena i sposób płatności'],
    examiner: 'pracownik szkoły',
    lines: ['Hello, Brighton Language School. How can I help?', 'How good is your English at the moment?', 'Are you interested in any extra activities?', 'Have you got any questions about the price?'],
  },
  {
    title: 'Problem w hotelu',
    situation: 'Mieszkasz w hotelu w Edynburgu. W pokoju jest problem. Rozmawiasz z recepcjonistą.',
    points: ['opis problemu', 'od kiedy trwa', 'propozycja rozwiązania', 'prośba o rekompensatę'],
    examiner: 'recepcjonista',
    lines: ['Good evening. What seems to be the problem?', 'When did you notice it?', 'What would you like us to do?', 'I am afraid we have no other rooms. What else can we offer you?'],
  },
  {
    title: 'Nowy sport',
    situation: 'Twój znajomy z Wielkiej Brytanii chce zacząć uprawiać sport i prosi cię o radę.',
    points: ['jaki sport polecasz i dlaczego', 'sprzęt', 'gdzie można trenować', 'jak często ćwiczyć'],
    examiner: 'znajomy z Wielkiej Brytanii',
    lines: ['I want to get fit. What sport would you recommend?', 'What do I need to buy?', 'Where can I train?', 'How often should I exercise?'],
  },
  {
    title: 'Wymiana uczniowska',
    situation: 'Przyjeżdża do ciebie uczeń z wymiany z Anglii. Rozmawiacie przez telefon przed jego przyjazdem.',
    points: ['plan pierwszego dnia', 'co warto zabrać', 'jedzenie (preferencje)', 'zwiedzanie okolicy'],
    examiner: 'uczeń z Anglii',
    lines: ['What are we going to do on my first day?', 'What should I pack?', 'I am a vegetarian. Is that a problem?', 'What can we visit in your area?'],
  },
]

export interface PictureTask {
  /** opis sceny (zamiast zdjęcia) */
  scene: string
  questions: [string, string, string]
}

export const PICTURES: PictureTask[] = [
  {
    scene: 'Rodzina (rodzice i dwoje dzieci) w kuchni wspólnie przygotowuje obiad. Dziecko kroi warzywa, mama miesza w garnku, tata nakrywa do stołu. Wszyscy się uśmiechają.',
    questions: ['Why do some families like cooking together?', 'Tell me about a meal you remember well.', 'Do you think young people should learn to cook at school? Why?'],
  },
  {
    scene: 'Grupa nastolatków w parku – siedzą na trawie, każdy patrzy w swój telefon, nikt ze sobą nie rozmawia.',
    questions: ['What do you think these people are doing?', 'How much time do you spend on your phone every day?', 'Do you think smartphones make people lonely? Why/Why not?'],
  },
  {
    scene: 'Starszy mężczyzna uczy wnuczka jeździć na rowerze na wiejskiej drodze. Chłopiec ma kask, dziadek trzyma siodełko.',
    questions: ['How do you think the boy is feeling?', 'Tell me about something an older person taught you.', 'Why is it important for grandparents and grandchildren to spend time together?'],
  },
  {
    scene: 'Młodzi ludzie w żółtych kamizelkach zbierają śmieci na plaży. W tle widać morze i worki pełne plastiku.',
    questions: ['Why do you think these people are doing this?', 'Have you ever taken part in a similar action?', 'What can young people do to protect the environment?'],
  },
  {
    scene: 'Uczeń siedzi w nocy przy biurku zawalonym książkami, obok kubek kawy; wygląda na bardzo zmęczonego.',
    questions: ['Why do you think the student is studying so late?', 'How do you usually prepare for important exams?', 'Is it better to study alone or with other people? Why?'],
  },
  {
    scene: 'Koncert na świeżym powietrzu – tłum ludzi z uniesionymi rękami, na scenie zespół, światła, wieczór.',
    questions: ['What do you think the atmosphere is like?', 'Tell me about a concert or event you have been to.', 'Do you prefer listening to music live or at home? Why?'],
  },
  {
    scene: 'Dwoje turystów z plecakami patrzy na mapę na rozstaju górskich szlaków; jest mgła.',
    questions: ['What problem do you think these people have?', 'Tell me about a trip when something went wrong.', 'Do you prefer active holidays or relaxing ones? Why?'],
  },
  {
    scene: 'Sklep z używaną odzieżą (second-hand). Dziewczyna przymierza kurtkę przed lustrem, przyjaciółka robi jej zdjęcie.',
    questions: ['Why do you think the girls are shopping here?', 'Tell me about the last time you bought clothes.', 'Do you think people buy too many clothes nowadays? Why?'],
  },
]

export interface StimulusTask {
  /** polecenie (po polsku) */
  task: string
  /** opcje do wyboru (w egzaminie – zdjęcia) */
  options: [string, string, string]
  questions: [string, string]
}

export const STIMULI: StimulusTask[] = [
  {
    task: 'Twoja klasa organizuje jednodniową wycieczkę. Wybierz jedną z propozycji i uzasadnij wybór. Wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['wycieczka do parku rozrywki', 'spływ kajakowy', 'zwiedzanie muzeum nauki'],
    questions: ['Why do school trips matter?', 'Tell me about the best trip you have ever had.'],
  },
  {
    task: 'Chcesz kupić prezent dla młodszego brata. Wybierz jedną z propozycji, uzasadnij wybór i wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['gra planszowa', 'piłka nożna', 'książka przygodowa'],
    questions: ['Is it better to give presents or money? Why?', 'Tell me about a present you remember well.'],
  },
  {
    task: 'Szkoła chce zachęcić uczniów do zdrowego trybu życia. Wybierz jedną z propozycji, uzasadnij wybór i wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['zdrowe przekąski w sklepiku', 'turniej sportowy', 'warsztaty o radzeniu sobie ze stresem'],
    questions: ['Why do many teenagers have unhealthy habits?', 'What do you do to stay healthy?'],
  },
  {
    task: 'Planujesz wakacyjną pracę. Wybierz jedną z ofert, uzasadnij wybór i wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['kelner w kawiarni nad morzem', 'animator na obozie dla dzieci', 'praca w sklepie internetowym z domu'],
    questions: ['What can teenagers learn from summer jobs?', 'Would you like to work abroad in the future? Why?'],
  },
  {
    task: 'Twoje miasto chce stworzyć nowe miejsce dla młodzieży. Wybierz jedną propozycję, uzasadnij wybór i wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['skatepark', 'kawiarnia z grami planszowymi', 'centrum z salą kinową i warsztatami'],
    questions: ['What do young people in your town need most?', 'Where do you usually meet your friends?'],
  },
  {
    task: 'Chcesz zacząć nowe hobby. Wybierz jedną propozycję, uzasadnij wybór i wyjaśnij, dlaczego odrzucasz pozostałe.',
    options: ['nauka gry na gitarze', 'fotografia', 'wspinaczka na ściance'],
    questions: ['Why is it good to have a hobby?', 'Tell me about something new you have learnt recently.'],
  },
]

/** przydatne zwroty do matury ustnej */
export const EN_PHRASES = `
## Rozmowa z odgrywaniem roli
I’d like to… · Could you…? · Would it be possible to…? · Why don’t we…? · How about…? · I’d rather… · I’m afraid I can’t… · That’s a good idea, but… · What do you think about…? · Let’s… · I suggest… · I’d prefer… because…

## Opis ilustracji
In the picture I can see… · In the foreground / In the background… · On the left / On the right… · In the middle… · It looks like… · They seem to be… · I think they are… because… · Perhaps / Probably…

## Wybór i uzasadnienie (materiał stymulujący)
I’d choose… because… · The main reason is that… · What’s more… · I’ve decided not to choose… because… · Although… is interesting, … · The problem with… is that… · On the one hand… on the other hand…

## Gdy czegoś nie wiesz / zapomnisz słowa
Sorry, could you repeat that, please? · What I mean is… · It’s a kind of… · It’s something you use to… · Let me think…

> Na egzaminie liczy się **odniesienie się do wszystkich elementów** zadania i **rozwinięcie** wypowiedzi (nie odpowiadaj jednym zdaniem – dodaj „because…”, przykład, swoje doświadczenie).
`
