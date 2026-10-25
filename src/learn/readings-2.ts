import type { Reading } from './readings-types'
import { c } from './types'

/** Romantyzm, pozytywizm, Młoda Polska */
export const READINGS_2: Reading[] = [
  {
    id: 'ballady',
    title: 'Romantyczność i wybrane ballady',
    author: 'Adam Mickiewicz',
    epoch: 'Romantyzm',
    year: '1822 („Ballady i romanse”)',
    genre: 'ballada',
    summary: `
Tomik **„Ballady i romanse” (1822)** uznaje się za początek romantyzmu w Polsce. **Ballada** łączy cechy epiki (fabuła), liryki (uczucia, rytm, refreny) i dramatu (dialogi) – to gatunek **synkretyczny**. Czerpie z **folkloru** i wierzeń ludowych.

## „Romantyczność” – ballada programowa
Na środku miasteczka **Karusia** – prosta dziewczyna – rozmawia z niewidzialnym ukochanym **Jasieńkiem**, który zmarł dwa lata wcześniej. Lud wierzy jej, modli się i współczuje. Pojawia się **Starzec** z „szkiełkiem i okiem” (symbol nauki, racjonalizmu, oświecenia), który mówi: „Widzę i wierzę: nic tu nie ma”, a dziewczynę nazywa szaloną. Narrator staje po stronie Karusi i ludu:
**„Czucie i wiara silniej mówi do mnie / Niż mędrca szkło i oko”**, a puenta brzmi: **„Miej serce i patrzaj w serce!”**.
To manifest romantyzmu: **świat ducha i uczuć** ważniejszy od **świata rozumu**; prawdy żywe dostępne są sercu, nie tylko nauce.

## Ballady o ludowej sprawiedliwości
W balladach działa **moralność ludowa**: zło musi zostać ukarane, kara jest **surowa i nieuchronna**, a wymierzają ją **siły nadprzyrodzone** (duchy, natura).
- **„Świtezianka”** – młody strzelec przysięga wierność tajemniczej dziewczynie znad jeziora Świteź. Potem ulega urokowi pięknej nimfy (to ta sama dziewczyna, która go sprawdzała) – **łamie przysięgę**. Kara: woda pochłania go, a jego dusza będzie wiecznie cierpieć pod modrzewiem.
- **„Lilije”** – pani **zabija męża**, który wrócił z wojny, i zakopuje go w gaju, sieje na grobie lilie. Pustelnik obiecuje, że jej zbrodnia się nie wyda, jeśli sama się nie zdradzi. Gdy o jej rękę starają się bracia męża, w kościele podczas ślubu **duch męża wstaje z grobu** – kościół się zapada, wszyscy giną, a nad miejscem rosną lilie.
- **„Rybka”** – uboga **Krysia**, uwiedziona i porzucona przez pana, który poślubia bogatą, rzuca się do strumienia i staje się rybką; karmi swoje dziecko. Pan i jego żona za karę **zamieniają się w kamień**.
- **„Świteź”** – opowieść o mieście zatopionym w jeziorze: kobiety, by nie wpaść w ręce najeźdźców, modliły się o śmierć – zostały zamienione w białe kwiaty rosnące na jeziorze; kto je zerwie, sprowadza na siebie nieszczęście.
- **„Powrót taty”** – modlitwa dzieci ratuje kupca przed zbójcami (moc modlitwy niewinnych).`,
    characters: [
      ['Karusia', '„Romantyczność” – dziewczyna rozmawiająca z duchem ukochanego; symbol czucia i wiary'],
      ['Starzec', 'racjonalista, symbol oświeceniowego rozumu („szkiełko i oko”)'],
      ['Narrator', 'romantyk – staje po stronie ludu i serca'],
      ['Strzelec / Świtezianka', '„Świtezianka” – wiarołomny kochanek i nimfa wymierzająca karę'],
      ['Pani', '„Lilije” – zabójczyni męża, ukarana'],
    ],
    motifs: ['świat ducha a świat rozumu', 'ludowa sprawiedliwość, wina i kara', 'fantastyka, zaświaty', 'miłość silniejsza niż śmierć (Karusia)', 'wierność i zdrada', 'natura jako siła moralna'],
    contexts: [
      'Mickiewicz, „Dziady cz. II” – ludowa moralność: „Kto nie zaznał goryczy ni razu…”.',
      'Słowacki, „Balladyna” – zbrodnia i kara z udziałem sił natury (Goplana, piorun).',
      'Oświecenie: Krasicki, satyry – racjonalizm (kontrast).',
      'Bolesław Prus, „Lalka” – Ochocki/Wokulski: nauka a marzenia (konfrontacja romantyzmu i pozytywizmu).',
      'Mitologia, Orfeusz – kontakt z zaświatami z miłości.',
    ],
    must: ['„Ballady i romanse” (1822) – początek romantyzmu w Polsce.', '„Romantyczność”: Karusia, Jasieńko, Starzec ze „szkiełkiem i okiem”.', '„Czucie i wiara silniej mówi do mnie / Niż mędrca szkło i oko”; „Miej serce i patrzaj w serce”.', 'Ballada – gatunek synkretyczny (epika + liryka + dramat).', 'Ludowa sprawiedliwość: kara surowa, nieuchronna, nadprzyrodzona.'],
    quiz: [
      c('Starzec w „Romantyczności” symbolizuje', ['rozum i naukę', 'lud', 'uczucie', 'religię'], 0),
      c('Karusia rozmawia z', ['duchem zmarłego Jasieńka', 'aniołem', 'Starcem', 'matką'], 0),
      c('W „Lilijach” pani', ['zabiła męża', 'utopiła się', 'zamieniła się w rybkę', 'złamała przysięgę daną nimfie'], 0),
      c('Ballada to gatunek', ['synkretyczny', 'wyłącznie epicki', 'wyłącznie liryczny', 'dramatyczny'], 0),
      c('Ludowa sprawiedliwość w balladach oznacza, że', ['zło zostaje surowo i nieuchronnie ukarane', 'winni zawsze dostają przebaczenie', 'kara zależy od sądu', 'nie ma kary'], 0),
    ],
  },
  {
    id: 'dziady3',
    title: 'Dziady część III',
    author: 'Adam Mickiewicz',
    epoch: 'Romantyzm',
    year: '1832 (Drezno)',
    genre: 'dramat romantyczny',
    summary: `
Utwór powstał w Dreźnie po upadku **powstania listopadowego**. Dotyczy **procesu filomatów i filaretów** (1823–1824) w Wilnie – tajnych stowarzyszeń studenckich, do których należał sam Mickiewicz. Prześladowania prowadził senator **Nowosilcow**.

## Prolog
Więzień w celi klasztoru Bazylianów w Wilnie (to dawny Gustaw z „Dziadów cz. IV”) budzi się, a nad nim spierają się anioły i złe duchy. Pisze na ścianie: *„Gustavus obiit… hic natus est Conradus”* – **umarł Gustaw (kochanek), narodził się Konrad** – bojownik, patriota.

## Scena I (więzienna)
**Wigilia** w celi więźnia **Konrada**, odwiedzają go inni uwięzieni: Tomasz (Zan), Żegota, Feliks Kołakowski, Jakub, Frejend, Sobolewski i in. Rozmawiają o śledztwie i cierpieniach. **Sobolewski** opowiada, jak wywożono na Sybir młodzież w **kibitkach** – m.in. **Janczewskiego**, który pozdrowił tłum okrzykiem „Jeszcze Polska nie zginęła”, oraz okrutnie pobitego **Wasilewskiego**. Żegota opowiada **bajkę ks. Piotra** o diable i ziarnie (zło nie zniszczy dobra, bo z cierpienia wyrośnie nowe). Konrad śpiewa **pieśń zemsty**. Losy młodzieży: więzienie, śledztwa, zsyłki, męczeństwo.

## Scena II – Wielka Improwizacja
Samotny Konrad w natchnieniu mówi do Boga. Uważa się za **największego poetę**, czuje się równy Bogu. Kocha naród („Ja kocham cały naród!… Nazywam się Milijon – bo za milijony / Kocham i cierpię katusze”). Żąda od Boga **„rządu dusz”**, by uszczęśliwić naród, ale Bóg milczy. Konrad oskarża Boga, że nie jest miłością, lecz tylko mądrością – i wypowiedziałby bluźnierstwo, że Bóg jest **„nie ojcem świata, ale…”** – słowo **„carem”** dopowiada diabeł. Konrad pada zemdlony. To **bunt prometejski** – w imię miłości do narodu, ale z pychy.

## Sceny III–V
- **Scena III** – **ks. Piotr** (bernardyn) **egzorcyzmuje** Konrada; diabeł wyjawia, że Konrada ratuje modlitwa ks. Piotra i Ewy.
- **Scena IV** – **Ewa**, młoda dziewczyna, modli się za Konrada; ma piękny sen (kwiaty, Matka Boska).
- **Scena V – Widzenie księdza Piotra**: wizja **mesjanistyczna**: Polska jako **Chrystus narodów** – rozpięta na krzyżu przez Rosję (Herod – car), Prusy i Austrię, zmartwychwstanie i zbawi Europę; pojawia się tajemniczy wybawiciel **„z matki obcej, krew jego dawne bohatery, a imię jego czterdzieści i cztery”**. Cierpienie narodu ma sens – **ofiara** za wolność wszystkich.

## Scena VI–IX i Ustęp
- **Scena VI** – sen **Senatora** – diabły dręczą Nowosilcowa.
- **Scena VII – Salon warszawski**: przy stoliku **arystokracja**, która mówi po francusku, ignoruje los narodu, przy drzwiach **młodzież patriotyczna** (Adolf opowiada o **Cichowskim**, którego więzienie i tortury zamieniły w obłąkanego). **Podział społeczeństwa**.
- **Scena VIII – Pan Senator**: przesłuchania, bal u Nowosilcowa; **pani Rollisonowa**, niewidoma matka bitego syna, błaga o litość; doktor **Bécu** – kolaborant – ginie od pioruna, gdy ks. Piotr przepowiada mu śmierć. Postawy wobec zaborcy: **kolaboracja, służalczość** (urzędnicy, arystokraci) kontra **opór i męczeństwo** (młodzież).
- **Scena IX – Noc dziadów** – Guślarz i Kobieta na cmentarzu widzą upiora/Konrada wiezionego w kibitce.
- **Ustęp** – cykl wierszy o Rosji: „Droga do Rosji”, „Pomnik Piotra Wielkiego”, „Do przyjaciół Moskali”.

## Cechy dramatu romantycznego
**Luźna, fragmentaryczna kompozycja**, **mieszanie realizmu i fantastyki** (anioły, diabły, widzenia), łączenie gatunków (liryka – Improwizacja, epika – opowiadania), brak trzech jedności, bohater romantyczny – samotny, zbuntowany, wybitny.`,
    characters: [
      ['Konrad', 'więzień, poeta, bohater romantyczny – samotny, pyszny, kocha naród, buntuje się przeciw Bogu'],
      ['Ksiądz Piotr', 'pokorny bernardyn; egzorcyzmuje Konrada, ma widzenie mesjanistyczne'],
      ['Senator Nowosilcow', 'okrutny prześladowca młodzieży, karierowicz'],
      ['Pani Rollison', 'niewidoma matka torturowanego syna'],
      ['Ewa', 'młoda, czysta dziewczyna modląca się za Konrada'],
      ['Doktor Bécu', 'kolaborant, ginie od pioruna'],
      ['Sobolewski, Tomasz, Żegota, Feliks', 'więzieni filomaci – różne postawy wobec cierpienia'],
    ],
    motifs: ['losy młodzieży pod zaborami', 'mesjanizm – Polska Chrystusem narodów', 'postawy wobec zaborcy (opór, kolaboracja)', 'bunt przeciw Bogu (prometeizm) i pokora', 'walka dobra ze złem o duszę', 'sny i widzenia', 'samotność', 'wolność (narodu i jednostki)', 'motywy biblijne (Herod, Chrystus, Apokalipsa)'],
    contexts: [
      'Mitologia – Prometeusz (bunt przeciw bogom dla dobra ludzi).',
      'Księga Hioba – cierpienie niewinnych, spór z Bogiem.',
      'Apokalipsa – wizja zmagań dobra i zła, 44 (tajemnicza liczba).',
      'Słowacki, „Kordian” – inna wersja bohatera romantycznego (spisek, samotność).',
      'Herling-Grudziński, „Inny świat” / Orwell, „Rok 1984” – represje systemu wobec jednostki.',
      'Kamiński, „Kamienie na szaniec” – młodzież walcząca z okupantem.',
    ],
    must: ['Tło: proces filomatów i filaretów (1823–24), senator Nowosilcow.', 'Prolog: „umarł Gustaw, narodził się Konrad”.', 'Wielka Improwizacja (sc. II): bunt, żądanie „rządu dusz”, „carem” dopowiada diabeł.', 'Widzenie ks. Piotra (sc. V): mesjanizm, „imię jego czterdzieści i cztery”.', 'Salon warszawski (sc. VII): podział społeczeństwa.', 'Kibitki, Cichowski, pani Rollison, Bécu.', 'Dramat romantyczny: fantastyka, luźna kompozycja, synkretyzm.'],
    quiz: [
      c('W Wielkiej Improwizacji Konrad żąda od Boga', ['„rządu dusz”', 'przebaczenia', 'śmierci', 'wolności dla siebie'], 0),
      c('Kto ma widzenie mesjanistyczne?', ['ksiądz Piotr', 'Konrad', 'Ewa', 'Senator'], 0),
      c('Scena „Salon warszawski” pokazuje', ['podział społeczeństwa polskiego', 'śledztwo u senatora', 'Wigilię w więzieniu', 'egzorcyzmy'], 0),
      c('Słowo „carem” w Improwizacji wypowiada', ['diabeł', 'Konrad', 'anioł', 'ks. Piotr'], 0),
      c('Tłem utworu jest', ['proces filomatów i filaretów', 'powstanie styczniowe', 'potop szwedzki', 'rozbiory'], 0),
    ],
  },
  {
    id: 'lalka',
    title: 'Lalka',
    author: 'Bolesław Prus',
    epoch: 'Pozytywizm',
    year: '1887–1889 (w odcinkach), 1890',
    genre: 'powieść realistyczna (społeczno-obyczajowa)',
    summary: `
Akcja toczy się w **Warszawie w latach 1878–1879** (oraz w Paryżu i Zasławku). Powieść ma **dwóch narratorów**: wszechwiedzącego narratora trzecioosobowego i **Ignacego Rzeckiego**, który pisze „**Pamiętnik starego subiekta**”.

## Stanisław Wokulski – kim jest
Pochodzi ze zubożałej szlachty. Jako młody chłopak pracował jako **subiekt w winiarni Hopfera**, nocami się uczył, poszedł na studia (Szkoła Przygotowawcza). Wziął udział w **powstaniu styczniowym**, za co został zesłany na **Syberię**, gdzie zajmował się nauką. Po powrocie ożenił się ze starszą wdową **Małgorzatą Minclową** i przejął jej **sklep galanteryjny**. Po jej śmierci zarobił **fortunę** na dostawach dla wojska w czasie **wojny rosyjsko-tureckiej** (z kupcem Suzinem).

## Miłość do Izabeli
Wokulski zakochuje się od pierwszego wejrzenia w **Izabeli Łęckiej**, pięknej arystokratce, córce zrujnowanego **Tomasza Łęckiego**. To miłość romantyczna, idealizująca. Wszystkie działania podporządkowuje zdobyciu Izabeli:
- skupuje **weksle** Łęckiego i daje mu fikcyjne zyski,
- kupuje **kamienicę Łęckich** (przepłacając) i ich **serwis**,
- kupuje **konia wyścigowego** (wygrywa wyścig),
- wchodzi w towarzystwo arystokracji, **pojedynkuje się z baronem Krzeszowskim** po jego obraźliwych słowach o Izabeli,
- tworzy spółkę do handlu ze Wschodem.
Izabela – zimna, próżna, wychowana w świecie salonów – gardzi „kupcem”, ale przyjmuje jego adorację, bo ojciec potrzebuje pieniędzy.

## Paryż i Geist
W Paryżu Wokulski poznaje uczonego **Geista**, który pracuje nad **metalem lżejszym od powietrza**. Wokulski waha się między nauką a miłością – wraca do Warszawy dla Izabeli.

## Klęska
W końcu Izabela przyjmuje oświadczyny. W pociągu do Krakowa (koło Skierniewic) Wokulski słyszy, jak Izabela **flirtuje po angielsku ze swoim kuzynem Starskim** i z niego kpi. Załamany wysiada i **kładzie się na torach**; ratuje go dróżnik **Wysocki**, któremu wcześniej pomógł. Wokulski likwiduje interesy, wyjeżdża. Ostatnie wieści: zapiski mówią o wybuchu w ruinach zamku w **Zasławku** – nie wiadomo, czy zginął. **Izabela** wstępuje do klasztoru, **Rzecki** umiera, a sklep przejmuje **Szlangbaum**. Zakończenie jest **otwarte**.

## Inne wątki
- **Pamiętnik Rzeckiego** – wspomnienia o ojcu-bonapartyście, o **Wiośnie Ludów** i walce na Węgrzech (1848–49), o Wokulskim. Rzecki – romantyk, idealista, wierzy w Napoleona i „politykę”; całe życie przy sklepie – praca to jego sens.
- **Pani Stawska** – zakochana w Wokulskim, oskarżona przez baronową Krzeszowską o kradzież lalki – stąd tytuł (proces o lalkę). Lalka to też **Izabela** – piękna, ale pusta.
- **Ochocki** – młody wynalazca, marzy o maszynie latającej.
- **Powiśle** – Wokulski widzi nędzę biedoty, pomaga **Wysockiemu** i prostytutce **Marii** (Magdalence).

## Wokulski – romantyk i pozytywista
**Romantyk**: miłość idealna i obsesyjna, udział w powstaniu, marzenia. **Pozytywista**: praca, nauka, filantropia, praca u podstaw (pomoc biednym), zarabianie pieniędzy.`,
    characters: [
      ['Stanisław Wokulski', 'kupiec, były powstaniec i zesłaniec; romantyk i pozytywista; obsesyjnie kocha Izabelę'],
      ['Izabela Łęcka', 'arystokratka, piękna, próżna, chłodna – „lalka”'],
      ['Ignacy Rzecki', 'stary subiekt, autor pamiętnika, idealista, bonapartysta, wierny przyjaciel'],
      ['Tomasz Łęcki', 'zrujnowany arystokrata, ojciec Izabeli'],
      ['Julian Ochocki', 'kuzyn Izabeli, naukowiec-marzyciel'],
      ['Geist', 'paryski uczony (metal lżejszy od powietrza)'],
      ['Kazimierz Starski', 'kuzyn Izabeli, lekkoduch, flirtuje z nią'],
      ['Helena Stawska', 'skromna, szlachetna kobieta, kocha Wokulskiego'],
      ['Szlangbaum', 'Żyd, pracowity kupiec, przejmuje sklep'],
      ['Wysocki', 'dróżnik, ratuje Wokulskiego'],
    ],
    motifs: ['miłość niszcząca i motywująca', 'praca jako pasja (Rzecki, Wokulski, Geist)', 'majątek i pochodzenie a relacje (arystokracja vs mieszczaństwo, Żydzi)', 'konfrontacja marzeń z rzeczywistością', 'miasto – Warszawa (bogactwo i nędza Powiśla)', 'wspomnienia (Pamiętnik Rzeckiego)', 'romantyzm vs pozytywizm', 'samotność'],
    contexts: [
      'Molier, „Skąpiec” – pieniądze a szczęście.',
      'Mickiewicz, „Romantyczność” – wiara w uczucie (Wokulski-romantyk).',
      'Żeromski, „Przedwiośnie” – rozczarowanie rzeczywistością, wizje Polski.',
      'Dostojewski, „Zbrodnia i kara” – miasto (Petersburg) jako przestrzeń wroga.',
      'Hanna Krall / Kapuściński – inne ujęcie miasta i pamięci.',
    ],
    must: ['Warszawa 1878–1879; dwóch narratorów (wszechwiedzący + Pamiętnik starego subiekta).', 'Wokulski: subiekt u Hopfera, powstanie styczniowe, Syberia, sklep Minclowej, fortuna z wojny rosyjsko-tureckiej.', 'Kupuje kamienicę Łęckich, weksle, konia; pojedynek z Krzeszowskim.', 'Pociąg koło Skierniewic: Izabela i Starski rozmawiają po angielsku; ratuje go Wysocki.', 'Geist – metal lżejszy od powietrza; Zasławek – otwarte zakończenie.', 'Tytuł: proces o lalkę (Stawska vs Krzeszowska) + Izabela jak lalka.'],
    quiz: [
      c('Autorem „Pamiętnika starego subiekta” jest', ['Rzecki', 'Wokulski', 'Ochocki', 'Szlangbaum'], 0),
      c('Wokulski zdobył majątek głównie', ['na dostawach w czasie wojny rosyjsko-tureckiej', 'w spadku po ojcu', 'na loterii', 'na handlu z Paryżem'], 0),
      c('Kto ratuje Wokulskiego, gdy kładzie się na torach?', ['Wysocki', 'Rzecki', 'Ochocki', 'Suzin'], 0),
      c('Geist pracuje nad', ['metalem lżejszym od powietrza', 'maszyną parową', 'lekiem na gruźlicę', 'telegrafem'], 0),
      c('Akcja „Lalki” rozgrywa się głównie w latach', ['1878–1879', '1863–1864', '1830–1831', '1918–1920'], 0),
    ],
  },
  {
    id: 'potop',
    title: 'Potop (fragmenty)',
    author: 'Henryk Sienkiewicz',
    epoch: 'Pozytywizm',
    year: '1884–1886',
    genre: 'powieść historyczna (część Trylogii)',
    summary: `
Druga część **Trylogii**, pisanej **„ku pokrzepieniu serc”** Polaków pod zaborami. Akcja: **potop szwedzki 1655–1657**.

## Kmicic i Oleńka
Na Laudzie (Żmudź) młoda **Aleksandra (Oleńka) Billewiczówna** ma według testamentu dziadka poślubić **Andrzeja Kmicica**, chorążego orszańskiego. Kmicic jest dzielny, ale **porywczy i swawolny**: jego kompani hulają i zostają zabici przez szlachtę laudańską, Kmicic w odwecie pali Wołmontowicze, porywa Oleńkę. Ratuje ją **Michał Wołodyjowski**, który pokonuje Kmicica w pojedynku, ale daruje mu życie.

## Zdrada w Kiejdanach
Hetman **Janusz Radziwiłł** podpisuje w Kiejdanach **ugodę ze Szwedami** (zdrada króla Jana Kazimierza). Kmicic, przysięgły Radziwiłłowi, zostaje przy nim, wierząc, że hetman chce dobra kraju. Oleńka nazywa go **zdrajcą**. Kmicic **porywa księcia Bogusława Radziwiłła** i słyszy z jego ust prawdę o planach Radziwiłłów (chcą korony dla siebie). Bogusław ucieka, a Kmicic rusza naprawiać swoje winy.

## Przemiana – Babinicz
Pod nazwiskiem **Babinicz** Kmicic walczy dla króla i ojczyzny:
- bierze udział w **obronie Jasnej Góry** (przeor **ks. Augustyn Kordecki**) i **wysadza szwedzką kolubrynę** (ogromne działo), zostaje ranny i pojmany,
- zdrajca **Kuklinowski** chce go zamęczyć – Kmicic się uwalnia i karze go,
- **ratuje króla Jana Kazimierza** z zasadzki w górach,
- walczy z najeźdźcą do końca wojny, odzyskuje cześć.
Na koniec zostaje **publicznie oczyszczony** (list królewski odczytany w kościele w Upicie) i poślubia Oleńkę.

## Odwaga i tchórzostwo
- **Odwaga**: Kmicic (brawura → odwaga świadoma), Wołodyjowski, obrońcy Częstochowy, ks. Kordecki (odwaga moralna).
- **Tchórzostwo i zdrada**: szlachta i magnaci przechodzący na stronę Szwedów, Radziwiłłowie, Kuklinowski; **Zagłoba** – komiczny „tchórz”, który jednak w potrzebie wykazuje spryt i odwagę.`,
    characters: [
      ['Andrzej Kmicic', 'porywczy szlachcic, który przechodzi przemianę: od warchoła do bohatera (Babinicz)'],
      ['Oleńka Billewiczówna', 'szlachetna, dumna patriotka; kocha Kmicica'],
      ['Janusz Radziwiłł', 'hetman, zdrajca'],
      ['Bogusław Radziwiłł', 'książę, intrygant, wróg Kmicica'],
      ['Michał Wołodyjowski', 'mistrz szabli, wierny żołnierz'],
      ['Jan Onufry Zagłoba', 'gawędziarz, komiczny, sprytny'],
      ['ks. Augustyn Kordecki', 'przeor Jasnej Góry, przywódca obrony'],
    ],
    motifs: ['odwaga i tchórzostwo', 'zdrada i wierność', 'przemiana bohatera', 'patriotyzm, obrona ojczyzny i wiary', 'honor', 'miłość'],
    contexts: ['„Pieśń o Rolandzie” – wierność i zdrada (Ganelon).', 'Homer, „Iliada” – heroizm w obronie ojczyzny.', 'Dostojewski, „Zbrodnia i kara” – przemiana bohatera.', 'Kamiński, „Kamienie na szaniec” – odwaga młodych.', 'Mickiewicz, „Pan Tadeusz” – Jacek Soplica: grzech i odkupienie.'],
    must: ['Potop szwedzki 1655–1657; Trylogia „ku pokrzepieniu serc”.', 'Kiejdany – zdrada Janusza Radziwiłła.', 'Kmicic jako Babinicz: wysadzenie kolubryny pod Jasną Górą, ratuje króla.', 'Ks. Kordecki – obrona Jasnej Góry.', 'Przemiana Kmicica i ślub z Oleńką.'],
    quiz: [
      c('Kmicic walczył później pod nazwiskiem', ['Babinicz', 'Kordecki', 'Kuklinowski', 'Butrym'], 0),
      c('Ugodę ze Szwedami w Kiejdanach zawarł', ['Janusz Radziwiłł', 'Jan Kazimierz', 'Wołodyjowski', 'Kordecki'], 0),
      c('Pod Jasną Górą Kmicic', ['wysadził kolubrynę', 'zdradził obrońców', 'uciekł', 'porwał Oleńkę'], 0),
    ],
  },
  {
    id: 'zbrodnia',
    title: 'Zbrodnia i kara',
    author: 'Fiodor Dostojewski',
    epoch: 'Realizm rosyjski (II poł. XIX w.)',
    year: '1866',
    genre: 'powieść psychologiczna (polifoniczna)',
    summary: `
Akcja toczy się w **Petersburgu**, latem, w biednych, dusznych dzielnicach. Bohaterem jest **Rodion Raskolnikow** – były student prawa, żyjący w nędzy w ciasnej klitce.

## Teoria i zbrodnia
Raskolnikow stworzył teorię, że ludzie dzielą się na **zwykłych** (muszą słuchać prawa) i **niezwykłych** (jak **Napoleon**), którym wolno przekroczyć prawo, a nawet zabić, dla wyższego celu. Chce sprawdzić, czy sam jest „niezwykły”. Zabija **siekierą** starą lichwiarkę **Alonę Iwanownę**, a potem także jej łagodną siostrę **Lizawietę**, która niespodziewanie weszła. Zabiera trochę rzeczy, ale ich nie wykorzystuje – ukrywa pod kamieniem.

## Kara – wewnętrzna
Po zbrodni Raskolnikow choruje, majaczy, izoluje się od matki **Pulcherii** i siostry **Duni**, które przyjechały do Petersburga. Dręczy go strach i **sumienie** – to jest prawdziwa kara.
- Śledczy **Porfiry Pietrowicz** podejrzewa go i prowadzi z nim **psychologiczną grę**, czekając, aż sam się przyzna.
- Przyjaciel **Razumichin** opiekuje się nim (i zakochuje w Duni).
- **Łużyn** – wyrachowany narzeczony Duni – zostaje odprawiony.
- **Swidrygajłow** – cyniczny rozpustnik, który nękał Dunię – na końcu **popełnia samobójstwo**.

## Sonia
Raskolnikow poznaje pijaka-urzędnika **Marmieładowa**, który ginie pod kołami powozu, i jego córkę **Sonię Marmieładową**, która została prostytutką, by utrzymać rodzinę (macochę Katarzynę Iwanownę i rodzeństwo). Sonia – **pokorna, wierząca, pełna miłości** – czyta mu Ewangelię o **wskrzeszeniu Łazarza**. To jej Raskolnikow **wyznaje zbrodnię**; Sonia namawia go, by przyjął cierpienie i się przyznał.

## Przyznanie i epilog
Raskolnikow przyznaje się na policji. Dostaje **8 lat katorgi na Syberii** (wyrok złagodzony). Sonia jedzie za nim. Dopiero w epilogu, na zesłaniu, Raskolnikow pod wpływem **miłości** Soni zaczyna się **odradzać duchowo** – pod poduszką ma Ewangelię.

## Sens
Teoria „nadczłowieka” upada: zabijając, Raskolnikow **zabił samego siebie** (jak mówi Soni). Odkupienie przez **cierpienie, pokorę i miłość**. Powieść polifoniczna (wiele równorzędnych głosów), psychologiczna (monologi wewnętrzne, sny – np. sen o zakatowanym koniu).`,
    characters: [
      ['Rodion Raskolnikow', 'były student, autor teorii o ludziach niezwykłych; morderca dręczony sumieniem, przechodzi przemianę'],
      ['Sonia Marmieładowa', 'prostytutka z konieczności; pokorna, wierząca, symbol miłości i odkupienia'],
      ['Porfiry Pietrowicz', 'sędzia śledczy, psycholog'],
      ['Dunia', 'siostra Raskolnikowa, dumna i szlachetna'],
      ['Razumichin', 'wierny przyjaciel, pracowity'],
      ['Swidrygajłow', 'rozpustnik, popełnia samobójstwo'],
      ['Alona Iwanowna', 'lichwiarka, ofiara'],
      ['Marmieładow', 'pijak-urzędnik, ojciec Soni'],
    ],
    motifs: ['wina i kara (zewnętrzna i wewnętrzna)', 'walka ze swoimi słabościami', 'przemiana bohatera', 'poświęcenie dla innych (Sonia, Dunia)', 'co determinuje postępowanie (bieda, teoria, pycha)', 'miasto jako przestrzeń wroga', 'odkupienie przez cierpienie i miłość', 'motywy biblijne (Łazarz)'],
    contexts: ['Szekspir, „Makbet” – zbrodnia i sumienie.', 'Księga Hioba – sens cierpienia.', 'Camus, „Dżuma” – postawy wobec zła.', 'Prus, „Lalka” – miasto i nędza.', 'Mitologia – Prometeusz/pycha, hybris.'],
    must: ['Petersburg; Raskolnikow – teoria ludzi zwykłych i niezwykłych (Napoleon).', 'Zabija siekierą Alonę Iwanownę i jej siostrę Lizawietę.', 'Porfiry Pietrowicz – śledczy.', 'Sonia czyta o wskrzeszeniu Łazarza; jej wyznaje zbrodnię.', '8 lat katorgi na Syberii; odrodzenie przez miłość w epilogu.', 'Powieść psychologiczna, polifoniczna.'],
    quiz: [
      c('Raskolnikow zabił', ['lichwiarkę i jej siostrę', 'Marmieładowa', 'Swidrygajłowa', 'Łużyna'], 0),
      c('Według teorii Raskolnikowa ludzie niezwykli', ['mogą przekroczyć prawo dla wyższego celu', 'muszą słuchać prawa', 'są zawsze biedni', 'nie istnieją'], 0),
      c('Komu Raskolnikow wyznaje zbrodnię jako pierwszej osobie?', ['Soni', 'Porfiremu', 'Duni', 'Razumichinowi'], 0),
      c('Sonia czyta Raskolnikowowi fragment o', ['wskrzeszeniu Łazarza', 'synu marnotrawnym', 'Hiobie', 'Apokalipsie'], 0),
      c('Raskolnikow zostaje skazany na', ['8 lat katorgi', 'śmierć', 'dożywocie', 'uniewinnienie'], 0),
    ],
  },
  {
    id: 'wesele',
    title: 'Wesele',
    author: 'Stanisław Wyspiański',
    epoch: 'Młoda Polska',
    year: '1901',
    genre: 'dramat symboliczny (narodowy)',
    summary: `
Inspiracją było prawdziwe **wesele poety Lucjana Rydla z chłopką Jadwigą Mikołajczykówną** w **Bronowicach** pod Krakowem (20 listopada 1900), w domu **Włodzimierza Tetmajera** (Gospodarz). Akcja trwa jedną noc w izbie bronowickiej chaty. Modne było wtedy zainteresowanie wsią – **chłopomania** inteligencji.

## Akt I – realistyczny
Krótkie rozmowy gości weselnych pokazują, że **inteligencja i chłopi się nie rozumieją**:
- **Czepiec** pyta **Dziennikarza** o politykę w Chinach; Dziennikarz zbywa go: „Niech na całym świecie wojna, / byle polska wieś zaciszna, / byle polska wieś spokojna”. Czepiec odpowiada, że chłopi są gotowi do walki („my nie gęsi”).
- **Pan Młody** zachwyca się wsią w sposób powierzchowny, nie zna jej problemów.
- **Rachela** – córka Żyda karczmarza, wrażliwa, zakochana w poezji – podsuwa **Poecie** pomysł, by zaprosić na wesele **Chochoła** (słomiane okrycie krzewu róży).

## Akt II – fantastyczny (Osoby dramatu)
Do bohaterów przychodzą **zjawy** – każda pokazuje ukryte myśli i lęki rozmówcy:
- **Chochoł** → Isia (zaproszony),
- **Widmo** (zmarły narzeczony) → **Marysia** (miłość i przeszłość),
- **Stańczyk** (błazen królewski) → **Dziennikarz**: wyrzuca mu bierność i pesymizm, daje „kaduceusz” (błazeńską laskę),
- **Rycerz Czarny** (Zawisza) → **Poeta**: dawna chwała rycerska, poezja bez czynu,
- **Hetman** (Branicki, zdrajca targowicki) → **Pan Młody**: zdrada, sprzedajność szlachty,
- **Upiór** (Jakub **Szela**, przywódca rabacji 1846) → **Dziad**: krwawa przeszłość, rzeź szlachty przez chłopów,
- **Wernyhora** (legendarny lirnik, wieszcz) → **Gospodarz**: wzywa do **powstania**, daje **złoty róg**, którego głos ma zgromadzić naród o świcie; zostawia złotą podkowę.

## Akt III – oczekiwanie na znak
Gospodarz przekazuje misję chłopskiemu chłopcu **Jaśkowi**, który ma objechać wsie i zwołać ludzi. Wszyscy (chłopi z kosami) czekają na znak, ale Jasiek **zgubił złoty róg**, bo schylił się po **czapkę z pawimi piórami**. Zostaje mu tylko **sznur**. Chochoł gra na skrzypcach i wszyscy wpadają w **chocholi taniec** – senny, bezwładny. Jasiek woła: **„Miałeś, chamie, złoty róg… ostał ci się ino sznur”**.

## Symbole
| Symbol | Znaczenie |
| **złoty róg** | wezwanie do czynu, szansa na niepodległość |
| **czapka z pawich piór** | prywata, próżność, dbałość o własne interesy |
| **sznur** | niewola, bezsilność (też: samobójstwo, pętla) |
| **Chochoł** | uśpienie, marazm, ale też uśpiona siła (pod słomą róża – wiosna) |
| **chocholi taniec** | bezwład, niezdolność społeczeństwa do działania |
| **złota podkowa** | szczęście (schowana przez Gospodynię – zachłanność) |

## Sens
Wyspiański robi **„sąd nad Polską”**: ani inteligencja (bierna, gadatliwa, zapatrzona w siebie), ani chłopi (gotowi, ale bez przywódcy i świadomości) nie są gotowi, by walczyć o niepodległość. Pozostaje pytanie: **sen o Polsce czy sąd nad Polską?** – oba.`,
    characters: [
      ['Gospodarz', 'gospodarz wesela (Włodzimierz Tetmajer), malarz ożeniony z chłopką; otrzymuje misję od Wernyhory'],
      ['Pan Młody', 'poeta (Lucjan Rydel), zachwycony wsią powierzchownie'],
      ['Poeta', 'artysta oderwany od życia (Kazimierz Przerwa-Tetmajer)'],
      ['Dziennikarz', 'redaktor „Czasu”, pesymista, krytyk bierności'],
      ['Czepiec', 'wójt, chłop gotowy do walki („Chłop potęgą jest i basta”)'],
      ['Rachela', 'córka karczmarza, wrażliwa, egzaltowana'],
      ['Jasiek', 'drużba; gubi złoty róg'],
      ['Wernyhora', 'legendarny lirnik, daje złoty róg'],
      ['Chochoł', 'słomiana postać, symbol marazmu'],
    ],
    motifs: ['brak porozumienia między grupami społecznymi (inteligencja – chłopi)', 'rola chłopów i inteligencji w sprawie niepodległości', 'sen o Polsce / sąd nad Polską', 'symboliczne znaczenie widm i zjaw', 'motyw tańca (chocholi taniec)', 'chłopomania', 'niewola i marazm'],
    contexts: ['Mickiewicz, „Dziady cz. III” – Salon warszawski, podział społeczeństwa; zjawy i widzenia.', 'Żeromski, „Przedwiośnie” – wizje Polski, chłopi i ziemiaństwo.', '„Rozmowa Mistrza Polikarpa ze Śmiercią” – taniec śmierci (danse macabre).', 'Mrożek, „Tango” – taniec w finale (Edek i Eugeniusz).', 'Reymont, „Chłopi” – obraz wsi i obyczaju (wesele).'],
    must: ['Wesele Lucjana Rydla z Jadwigą Mikołajczykówną w Bronowicach (1900).', 'Akt I realistyczny, akt II fantastyczny (osoby dramatu), akt III – czekanie na znak.', 'Wernyhora → Gospodarz: złoty róg; Jasiek gubi róg (czapka z piór).', 'Pary zjawa – bohater: Stańczyk–Dziennikarz, Rycerz–Poeta, Hetman–Pan Młody, Upiór (Szela)–Dziad, Widmo–Marysia.', '„Miałeś, chamie, złoty róg…”; chocholi taniec.', 'Chłopomania; sąd nad Polską.'],
    quiz: [
      c('Złoty róg Gospodarzowi daje', ['Wernyhora', 'Stańczyk', 'Rycerz', 'Chochoł'], 0),
      c('Jasiek zgubił róg, bo', ['schylił się po czapkę z pawimi piórami', 'zasnął', 'oddał go Czepcowi', 'rozbił go'], 0),
      c('Upiór (Jakub Szela) ukazuje się', ['Dziadowi', 'Gospodarzowi', 'Poecie', 'Pannie Młodej'], 0),
      c('Chocholi taniec symbolizuje', ['marazm i bezwład społeczeństwa', 'radość weselną', 'zwycięstwo powstania', 'pojednanie stanów'], 0),
      c('Dziennikarzowi ukazuje się', ['Stańczyk', 'Hetman', 'Upiór', 'Widmo'], 0),
    ],
  },
  {
    id: 'chlopi',
    title: 'Chłopi (fragmenty)',
    author: 'Władysław Stanisław Reymont',
    epoch: 'Młoda Polska',
    year: '1904–1909 (Nagroda Nobla 1924)',
    genre: 'powieść obyczajowa (epopeja chłopska)',
    summary: `
Powieść ma **cztery tomy: Jesień, Zima, Wiosna, Lato** – akcja trwa **jeden rok** we wsi **Lipce**. Życie wsi wyznacza **rytm przyrody** (prace polowe) i **kalendarz liturgiczny** (święta). Narracja przeplata się z **gwarą** bohaterów (stylizacja gwarowa).

## Główne wątki
- **Maciej Boryna** – najbogatszy gospodarz w Lipcach, wdowiec (ok. 58 lat), żeni się z młodą, piękną **Jagną Paczesiówną**, zapisując jej sześć morgów ziemi (zgoda matki Jagny, **Dominikowej**, za ziemię). Wywołuje to **konflikt z synem Antkiem**, który uważa, że ziemia należy się dzieciom.
- **Antek Boryna** – syn Macieja, mąż **Hanki**, ojciec dzieci; kochał Jagnę i nawiązuje z nią **romans**. Ojciec wyrzuca go z domu; dochodzi do bójki, Antek popada w biedę i pijaństwo.
- **Bitwa o las** – dwór sprzedaje las, z którego chłopi mieli prawo brać drewno. Gromada idzie bronić lasu. Boryna, ciężko ranny, zostaje **uratowany przez Antka**, który przy okazji zabija **borowego** (strażnika leśnego) – mszcząc się za ojca. Mężczyźni trafiają do **więzienia**; kobiety muszą same prowadzić gospodarstwa (wiosna).
- **Hanka** – z pokornej, słabej żony staje się **dzielną gospodynią**, która prowadzi dom pod nieobecność męża.
- **Śmierć Boryny** – nieprzytomny po ranie, w malignie wychodzi w nocy na pole i **sieje ziemię garściami** – umiera na polu (symboliczna śmierć rolnika).
- **Kara dla Jagny** – Jagna wdaje się w romanse (Antek, wójt, Jasio – syn organisty). Gromada uznaje ją za zagrożenie dla porządku: **wywozi ją ze wsi na wozie z gnojem** (samosąd).

## Obyczaj i tradycja
Ważne sceny obrzędowe: **wesele Boryny i Jagny** (zmówiny, oczepiny, tańce – trwa kilka dni), **Zaduszki, Wigilia** (opłatek, mówiące zwierzęta), **Wielkanoc**, **Boże Ciało**, **jarmark**, kiszenie kapusty, **wspólna praca** i **prawo zwyczajowe** – gromada sama sądzi i karze. Wieś to **wspólnota**, w której jednostka podlega zbiorowości, a **ziemia** ma wartość najwyższą.`,
    characters: [
      ['Maciej Boryna', 'najbogatszy gospodarz Lipiec; autorytet; żeni się z Jagną'],
      ['Jagna (Jagusia)', 'piękna, wrażliwa, impulsywna; nie pasuje do norm wsi, ukarana'],
      ['Antek Boryna', 'syn Macieja, porywczy, kocha Jagnę'],
      ['Hanka', 'żona Antka, z czasem silna gospodyni'],
      ['Dominikowa', 'matka Jagny, chciwa, pobożna'],
      ['Kuba', 'parobek Borynów, prosty i dobry'],
    ],
    motifs: ['obyczaj i tradycja', 'rytm przyrody i świąt', 'ziemia jako wartość', 'wspólnota i prawo zbiorowości', 'konflikt pokoleń (ojciec – syn)', 'miłość i namiętność', 'samosąd'],
    contexts: ['Wyspiański, „Wesele” – obrzęd wesela i obraz chłopów.', 'Kochanowski / literatura ziemiańska – wieś idealizowana (kontrast).', 'Mickiewicz, ballady – ludowa moralność i kara.', 'Żeromski, „Przedwiośnie” – Nawłoć: wieś ziemiańska i nędza chłopów.', 'Mrożek, „Tango” – konflikt pokoleń i normy społeczne.'],
    must: ['Cztery tomy – pory roku; akcja w Lipcach, jeden rok.', 'Boryna żeni się z Jagną; konflikt z Antkiem o ziemię.', 'Bitwa o las z dworem; Antek zabija borowego.', 'Boryna umiera na polu, siejąc.', 'Jagna wywieziona na gnoju – kara gromady.', 'Nobel 1924, stylizacja gwarowa.'],
    quiz: [
      c('Tomy „Chłopów” noszą tytuły', ['pór roku', 'imion bohaterów', 'świąt kościelnych', 'miesięcy'], 0),
      c('Boryna umiera', ['na polu, siejąc ziemię', 'w bitwie o las', 'w więzieniu', 'na weselu'], 0),
      c('Jagna zostaje ukarana przez gromadę', ['wywiezieniem ze wsi na wozie z gnojem', 'więzieniem', 'grzywną', 'chłostą w kościele'], 0),
      c('Reymont otrzymał Nagrodę Nobla w roku', ['1924', '1905', '1918', '1939'], 0),
    ],
  },
]
