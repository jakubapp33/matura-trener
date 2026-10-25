import type { Reading } from './readings-types'
import { c } from './types'

/** Dwudziestolecie międzywojenne, wojna, współczesność */
export const READINGS_3: Reading[] = [
  {
    id: 'przedwiosnie',
    title: 'Przedwiośnie',
    author: 'Stefan Żeromski',
    epoch: 'Dwudziestolecie międzywojenne',
    year: '1924',
    genre: 'powieść (inicjacyjna, polityczna, „powieść-dyskusja”)',
    summary: `
Powieść ma trzy części: **„Szklane domy”, „Nawłoć”, „Wiatr od wschodu”**. Bohater, **Cezary Baryka**, dojrzewa razem z odradzającą się Polską.

## Baku – młodość i rewolucja
Cezary urodził się w 1900 r. w **Baku** (nad Morzem Kaspijskim) w rodzinie polskiej. Ojciec **Seweryn** – inżynier – w czasie I wojny jest w armii rosyjskiej. Cezary to rozpieszczony, zbuntowany nastolatek. Wybucha **rewolucja**: Cezary zachwyca się nią, ale widzi też jej okrucieństwo – **rzeź Ormian i Tatarów (Azerów)**, egzekucje, głód. Jego **matka umiera** wyczerpana pracą i nędzą. Wraca ojciec; razem wyjeżdżają do Polski.

## „Szklane domy”
W drodze ojciec opowiada o Polsce, w której **wynalazca Baryka** zbudował **szklane domy** – czyste, tanie, zdrowe, a kraj jest nowoczesny i sprawiedliwy. To **mit/utopia**. Ojciec umiera w drodze. Cezary przyjeżdża do Polski i widzi **brudne, biedne przygraniczne miasteczka** – szklanych domów nie ma. Utopia zderza się z rzeczywistością.

## Warszawa, wojna i Nawłoć
Cezary studiuje medycynę, dzięki **Szymonowi Gajowcowi** (przyjacielowi matki) ma oparcie. Zgłasza się do wojska w **wojnie polsko-bolszewickiej 1920**, gdzie poznaje **Hipolita Wielosławskiego**. Spędza czas w jego majątku **Nawłoć** – świat ziemiański: zabawy, polowania, flirt, ale też **nędza chłopów i fornali**, której ziemianie nie widzą. Cezary przeżywa romans z **Laurą Kościeniecką**, a zakochana w nim **Karolina (Karusia)** zostaje otruta przez zazdrosną **Wandę Okszyńską**. Cezary wyjeżdża.

## Wizje Polski
- **Gajowiec** – zwolennik **ewolucyjnych reform** i budowy państwa krok po kroku (urzędnik, patriota, „szklane domy” to bajka).
- **Antoni Lulek** – **komunista**, chce rewolucji wzorowanej na Rosji.
- Cezary nie przyjmuje w pełni żadnej. W finale idzie w **marszu robotników na Belweder**, ale **„występuje z szeregu”** i idzie samotnie na czele, prosto na kordon wojska – **zakończenie otwarte**.

## Tytuł
**Przedwiośnie** to czas przejściowy między zimą a wiosną – **niepewny, pełen nadziei i zagrożeń**. To obraz młodej Polski po odzyskaniu niepodległości, a także dojrzewania Cezarego. Według Żeromskiego to też ostrzeżenie: jeśli państwo nie przeprowadzi reform, przyjdzie burza (rewolucja).`,
    characters: [
      ['Cezary Baryka', 'młody Polak z Baku; poszukuje swojej drogi i tożsamości, zbuntowany, krytyczny'],
      ['Seweryn Baryka', 'ojciec, autor mitu „szklanych domów”'],
      ['Szymon Gajowiec', 'urzędnik, zwolennik reform ewolucyjnych, autorytet'],
      ['Antoni Lulek', 'komunista'],
      ['Hipolit Wielosławski', 'przyjaciel z wojska, ziemianin z Nawłoci'],
      ['Laura Kościeniecka', 'kobieta, z którą Cezary ma romans'],
      ['Karolina (Karusia)', 'zakochana w Cezarym, otruta'],
    ],
    motifs: ['znaczenie tytułu', 'wojna i rewolucja jako doświadczenie', 'wizje odbudowy Polski', 'młodość i kształtowanie tożsamości', 'rola autorytetu (ojciec, Gajowiec)', 'utopia a rzeczywistość (szklane domy)'],
    contexts: ['Prus, „Lalka” – konfrontacja marzeń z rzeczywistością.', 'Wyspiański, „Wesele” – inteligencja, chłopi, sprawa narodowa.', 'Orwell, „Rok 1984” – utopia i antyutopia.', 'Mickiewicz, „Dziady cz. III” – młodzież i sprawa narodowa.', 'Gombrowicz, „Ferdydurke” – młodość, tożsamość, ziemiaństwo (Hurleccy).'],
    must: ['Trzy części: Szklane domy, Nawłoć, Wiatr od wschodu.', 'Baku, rewolucja, śmierć matki.', 'Mit szklanych domów – opowieść ojca.', 'Nawłoć – ziemiaństwo; Laura, Karusia, Wanda.', 'Gajowiec (reformy) vs Lulek (rewolucja).', 'Finał: marsz na Belweder, otwarte zakończenie.'],
    quiz: [
      c('Mit „szklanych domów” opowiada Cezaremu', ['ojciec', 'Gajowiec', 'Lulek', 'Hipolit'], 0),
      c('Nawłoć to', ['majątek Wielosławskich', 'dzielnica Baku', 'miasto graniczne', 'nazwisko komunisty'], 0),
      c('Gajowiec jest zwolennikiem', ['reform ewolucyjnych', 'rewolucji', 'monarchii', 'emigracji'], 0),
      c('Tytuł „Przedwiośnie” oznacza m.in.', ['czas przejściowy, niepewny, pełen nadziei', 'koniec wojny', 'rozkwit Polski', 'jesień życia'], 0),
    ],
  },
  {
    id: 'ferdydurke',
    title: 'Ferdydurke (fragmenty)',
    author: 'Witold Gombrowicz',
    epoch: 'Dwudziestolecie międzywojenne',
    year: '1937',
    genre: 'powieść groteskowa (filozoficzna)',
    summary: `
Narrator **Józio (Józef Kowalski)** ma **30 lat**, ale czuje się niedojrzały. Pewnego dnia odwiedza go profesor **Pimko** – nauczyciel, który traktuje go jak ucznia i **„upupia”** (robi mu „pupę” – czyni go dzieckiem). Józio nagle zamienia się w 17-latka i trafia do **szkoły**.

## Szkoła
Szkoła dyrektora **Piórkowskiego** to miejsce, gdzie dorośli „robią” uczniom **gębę** (narzucają im formę). Lekcja polskiego: nauczyciel **Bladaczka** powtarza, że **„Słowacki wielkim poetą był”** i zachwyca, a uczeń **Gałkiewicz** pyta: „jak zachwyca, kiedy nie zachwyca?”. Uczniowie dzielą się na **chłopiąt** (niewinnych, idealistycznych – **Syfon**) i **chłopaków** (zbuntowanych – **Miętus**). Dochodzi do **pojedynku na miny** między Syfonem a Miętusem.

## Stancja u Młodziaków
Pimko umieszcza Józia na stancji u **Młodziaków** – rodziny „nowoczesnej” (inżynier i jego żona), a Józio zakochuje się w ich córce, **pensjonarce Zucie**, wysportowanej i nowoczesnej (**„łydka”** pensjonarki). By uwolnić się od jej czaru, Józio ośmiesza Młodziaków: wysyła fałszywe liściki, sprowadza do pokoju Zuty Pimkę i Kopyrdę – kończy się to „kupą” (bójką wszystkich).

## Wieś – Hurleccy
Józio ucieka z **Miętusem**, który chce **zbratać się z parobkiem** – symbolem prostego ludu. Jadą do dworu **Hurleckich** (rodzina Józia, ziemiaństwo). Miętus brata się z parobkiem **Walkiem**, czym łamie porządek „pan – sługa”; dochodzi do bójki państwa z czeladzią. Józio ucieka z kuzynką **Zosią** – ale znów wpada w inną formę.

## Groteska i forma
Kluczowe pojęcia: **forma** (sposób bycia narzucany przez innych), **gęba** (twarz, rola, którą inni nam przyklejają), **pupa** (upupienie – infantylizacja), **łydka** (nowoczesność, młodość). Człowiek **nie może uciec od formy** – może tylko przejść z jednej w drugą. Zakończenie: **„Koniec i bomba, a kto czytał, ten trąba!”**.`,
    characters: [
      ['Józio Kowalski', '30-letni narrator „upupiony” przez Pimkę, szuka siebie, ucieka od formy'],
      ['Pimko', 'profesor, filolog, symbol szkolnego schematu i belferstwa'],
      ['Syfon / Miętus', 'uczniowie – „chłopię” idealista i „chłopak” buntownik'],
      ['Zuta Młodziakówna', 'nowoczesna pensjonarka'],
      ['Młodziakowie', 'rodzina pozorujących nowoczesność'],
      ['Hurleccy', 'ziemiaństwo; patriarchalny porządek wsi'],
    ],
    motifs: ['groteskowy obraz świata', 'człowiek wobec presji otoczenia (forma, gęba)', 'dojrzałość i niedojrzałość', 'szkoła jako machina upupiania', 'nowoczesność', 'ziemiaństwo a lud'],
    contexts: ['Mrożek, „Tango” – groteska, forma, normy społeczne.', 'Krasicki, satyry – ośmieszanie społeczeństwa.', 'Orwell, „Rok 1984” – presja systemu na jednostkę.', 'Żeromski, „Przedwiośnie” – Nawłoć, ziemiaństwo (inne ujęcie).', 'Franz Kafka, „Proces” – absurd i bezradność wobec systemu.'],
    must: ['Józio, 30 lat, „upupiony” przez Pimkę.', 'Szkoła: Bladaczka, „Słowacki wielkim poetą był”, Gałkiewicz; pojedynek na miny (Syfon vs Miętus).', 'Młodziakowie, Zuta – łydka, nowoczesność.', 'Hurleccy, Miętus brata się z parobkiem.', 'Pojęcia: forma, gęba, pupa, łydka; groteska.', '„Koniec i bomba, a kto czytał, ten trąba”.'],
    quiz: [
      c('Kto „upupia” Józia?', ['Pimko', 'Miętus', 'Młodziak', 'Syfon'], 0),
      c('Pojedynek na miny stoczyli', ['Syfon i Miętus', 'Józio i Pimko', 'Miętus i Walek', 'Józio i Zuta'], 0),
      c('„Gęba” w „Ferdydurke” to', ['forma narzucona przez innych', 'twarz parobka', 'ocena szkolna', 'przezwisko Pimki'], 0),
      c('Dominująca konwencja „Ferdydurke” to', ['groteska', 'realizm', 'symbolizm', 'naturalizm'], 0),
    ],
  },
  {
    id: 'borowski',
    title: 'Proszę państwa do gazu',
    author: 'Tadeusz Borowski',
    epoch: 'Literatura wojenna i okupacyjna',
    year: '1946/1948',
    genre: 'opowiadanie',
    summary: `
Opowiadanie z tomu **„Pożegnanie z Marią”**. Borowski był więźniem **Auschwitz**; narrator **Tadek** (tzw. **narrator uwikłany**, alter ego autora) to więzień-Polak, który ma w obozie stosunkowo „dobre” warunki.

## Przebieg
Jest **upał**, więźniowie walczą z wszami. Tadek z Francuzem **Henrim** należy do komanda **„Kanada”** – więźniów, którzy przy **rampie** rozładowują **transporty Żydów** i zabierają im bagaże (bogactwo z bagaży – jedzenie, ubrania – to w obozie „Kanada”). Na rampę przyjeżdża **transport z Sosnowca i Będzina**.

- Więźniowie wyciągają ludzi z wagonów, zabierają rzeczy, poganiają – ludzie idą do samochodów, które jadą do **komór gazowych**. Z wagonów wyrzuca się **ciała zaduszonych dzieci**.
- **Młoda matka ucieka od własnego dziecka**, wypiera się go, by ratować siebie – Rosjanin-więzień rzuca ją z dzieckiem na samochód („Ty, żydowska… od własnego dziecka uciekasz!”).
- **Dziewczyna** sama pyta, gdzie jadą, i wsiada spokojnie do auta.
- Tadek odczuwa **złość na ofiary** – że przez nie musi tu być; wymiotuje ze zmęczenia i obrzydzenia. Henri tłumaczy: „To jest normalne… najłatwiej się złościć na tych, co idą do gazu”.
- Po kolejnych transportach obóz ma jedzenie na długo.

## Człowiek zlagrowany
Borowski pokazuje, że obóz **niszczy moralność także ocalałych**: więźniowie przystosowują się, obojętnieją, żyją z tego, że inni giną. **„Człowiek zlagrowany”** – zredukowany do instynktu przetrwania, ofiara systemu, który odbiera ludziom człowieczeństwo. Narracja jest **behawiorystyczna** – rzeczowa, bez komentarza i bez współczucia, co potęguje grozę.`,
    characters: [
      ['Tadek', 'narrator, więzień-Polak z Kanady; zobojętniały, „zlagrowany”'],
      ['Henri', 'Francuz, doświadczony więzień, cyniczny przewodnik Tadka'],
      ['Ofiary transportu', 'Żydzi z Sosnowca i Będzina'],
    ],
    motifs: ['„człowiek zlagrowany”', 'odczłowieczenie, relatywizm moralny', 'Zagłada', 'instynkt przetrwania', 'obojętność', 'ofiara i kat'],
    contexts: ['Herling-Grudziński, „Inny świat” – łagier sowiecki, odczłowieczenie.', 'Krall, „Zdążyć przed Panem Bogiem” – Zagłada, godność.', 'Zofia Nałkowska, „Medaliony” – „Ludzie ludziom zgotowali ten los”.', 'Orwell, „Rok 1984” – totalitaryzm.', 'Camus, „Dżuma” – postawy wobec zła.'],
    must: ['Tom „Pożegnanie z Marią”, narrator Tadek, Henri.', 'Komando „Kanada” rozładowuje transporty na rampie w Birkenau.', 'Transport z Sosnowca-Będzina.', 'Matka wypiera się dziecka; Tadek złości się na ofiary.', 'Narracja behawiorystyczna, „człowiek zlagrowany”.'],
    quiz: [
      c('Tadek należy do komanda', ['„Kanada”', 'kuchennego', 'szpitalnego', 'budowlanego'], 0),
      c('Narracja Borowskiego jest', ['behawiorystyczna – rzeczowa, bez komentarza', 'pełna patosu', 'baśniowa', 'liryczna'], 0),
      c('„Człowiek zlagrowany” to więzień', ['przystosowany do obozu, zobojętniały', 'który uciekł z obozu', 'strażnik SS', 'bohater ruchu oporu'], 0),
    ],
  },
  {
    id: 'inny-swiat',
    title: 'Inny świat (fragmenty)',
    author: 'Gustaw Herling-Grudziński',
    epoch: 'Literatura wojenna (emigracyjna)',
    year: '1951 (Londyn)',
    genre: 'relacja / wspomnienie (literatura łagrowa)',
    summary: `
Podtytuł: **„Zapiski sowieckie”**. Herling-Grudziński w 1940 r. został aresztowany przez NKWD przy próbie przekroczenia granicy z Litwą i skazany na łagier w **Jercewie** koło Archangielska (północ Rosji). Uwolniony po **amnestii** (1941/42) dołączył do **armii Andersa**. Książkę wydał na emigracji – w PRL była zakazana.

## Świat łagru
- **Głód i praca ponad siły** (wyrąb lasu, normy, od których zależą racje żywnościowe – „kocioł”).
- **Hierarchia więźniów**: politycznych, kryminalistów (urkowie), donosicieli; zasada: przeżyje silniejszy.
- **Upodlenie**: więźniowie donoszą na siebie, kobiety zmuszane są do prostytucji (gwałty, szantaż), ludzie tracą godność.
- **Dom swiadanij (dom widzeń)** – miejsce rzadkich spotkań z bliskimi; więźniowie kłamią, że jest im dobrze.
- **Kostylew** – były komunista, który rozczarował się do systemu; celowo **pali rękę w ogniu**, by nie pracować dla niewoli. Gdy ma zostać wysłany do Kołymy, popełnia samobójstwo (oblewa się wrzątkiem).
- **Narrator** w akcie protestu **głoduje**, by zwrócić uwagę na swój los, i wygrywa – wychodzi na wolność w ramach amnestii.
- **Natalia Lwowna** – więźniarka, która pożycza narratorowi „**Zapiski z martwego domu**” Dostojewskiego.

## Epilog „Upadek Paryża”
Po wojnie we Włoszech narrator spotyka dawnego współwięźnia (Żyda), który wyznaje, że w łagrze **donosił** – przez niego **czterech Niemców** zostało rozstrzelanych za rzekome planowanie ucieczki; zrobił to, by ratować siebie. Prosi o zrozumienie. Narrator **nie potrafi** mu odpowiedzieć ani przebaczyć – milczy i odchodzi. Pytanie: czy można oceniać ludzi postawionych w nieludzkich warunkach?

## Tytuł
Nawiązuje do Dostojewskiego: łagier to **„inny świat”** – rządzący się własnymi prawami, w którym zwykła moralność nie obowiązuje.`,
    characters: [
      ['Narrator (Herling)', 'polski więzień łagru, świadek; zachowuje godność, protestuje głodówką'],
      ['Kostylew', 'buntownik, okalecza się, by nie pracować; ginie'],
      ['Natalia Lwowna', 'więźniarka, pożycza „Zapiski z martwego domu”'],
      ['Współwięzień z epilogu', 'donosiciel dręczony winą'],
    ],
    motifs: ['znaczenie tytułu', 'konsekwencje zniewolenia', 'odczłowieczenie i godność', 'głód', 'totalitaryzm sowiecki', 'wina i przebaczenie'],
    contexts: ['Borowski, „Proszę państwa do gazu” – obóz niemiecki, człowiek zlagrowany.', 'Dostojewski, „Zapiski z martwego domu” i „Zbrodnia i kara” – katorga.', 'Orwell, „Rok 1984” – totalitaryzm.', 'Mickiewicz, „Dziady cz. III” – więzienie i zsyłki na Sybir.', 'Aleksander Sołżenicyn, „Archipelag GUŁag”.'],
    must: ['Podtytuł „Zapiski sowieckie”; łagier w Jercewie.', 'Kostylew pali rękę; dom swiadanij; głodówka narratora.', 'Natalia Lwowna – „Zapiski z martwego domu”.', 'Epilog: donosiciel prosi o zrozumienie, narrator milczy.', 'Tytuł z Dostojewskiego.'],
    quiz: [
      c('Narrator trafił do łagru w', ['Jercewie', 'Oświęcimiu', 'Kołymie', 'Workucie'], 0),
      c('Tytuł „Inny świat” nawiązuje do utworu', ['Dostojewskiego', 'Tołstoja', 'Orwella', 'Puszkina'], 0),
      c('Kostylew', ['celowo okaleczał rękę, by nie pracować', 'był donosicielem', 'był komendantem łagru', 'uciekł z łagru'], 0),
    ],
  },
  {
    id: 'krall',
    title: 'Zdążyć przed Panem Bogiem',
    author: 'Hanna Krall',
    epoch: 'Literatura współczesna (reportaż)',
    year: '1977',
    genre: 'reportaż (wywiad-rzeka)',
    summary: `
To zapis rozmów Hanny Krall z **Markiem Edelmanem** – jednym z przywódców **powstania w getcie warszawskim (kwiecień–maj 1943)**, ostatnim żyjącym członkiem dowództwa **Żydowskiej Organizacji Bojowej (ŻOB)**, a po wojnie **wybitnym kardiologiem** w Łodzi. Narracja przeplata **dwie płaszczyzny czasowe**: getto w czasie wojny i szpital w latach 70. (operacje serca z prof. Molem).

## Getto i Umschlagplatz
Edelman jako goniec szpitala stał przy **Umschlagplatzu** – placu, z którego Niemcy wywozili Żydów do Treblinki. Wyciągał niektórych z kolumny, ratując ich życie. Opowiada o głodzie, o ludziach, którzy szli spokojnie do wagonów, o lekarzach, którzy chcieli uchronić chorych dzieci przed gazem, podając im truciznę. Wspomina **Polę Lifszyc**, która dobiegła do transportu, by zginąć razem z matką.

## Powstanie
ŻOB liczyła ok. **220 bojowników**, słabo uzbrojonych. Dowodził **Mordechaj Anielewicz**, który zginął w bunkrze przy **Miłej 18**. Edelman mówi, że **nie chodziło o zwycięstwo**, lecz o to, by **wybrać sposób umierania** – z bronią w ręku, a nie w komorze gazowej. Odrzuca patos i romantyczne wyobrażenia o bohaterstwie: „łatwiej umrzeć ze strzałem niż iść spokojnie do wagonu” – według niego to ci idący w milczeniu na śmierć byli bardziej heroiczni.

## Tytuł
Edelman jako lekarz mówi: **„Pan Bóg chce zgasić świeczkę, a ja muszę prędko osłonić płomień”** – trzeba **zdążyć przed Panem Bogiem**, wydrzeć śmierci choć jeszcze trochę życia. W getcie nie zdążył ocalić wielu – jako kardiolog walczy o każdego pacjenta.

## Godność
Godność w skrajnych sytuacjach: wybór sposobu śmierci, troska o innych (lekarze, Pola), zachowanie człowieczeństwa.`,
    characters: [
      ['Marek Edelman', 'zastępca dowódcy ŻOB, później kardiolog; bohater bez patosu'],
      ['Mordechaj Anielewicz', 'dowódca ŻOB, zginął na Miłej 18'],
      ['Pola Lifszyc', 'dziewczyna, która poszła na śmierć z matką'],
      ['Hanna Krall', 'reporterka, rozmówczyni'],
    ],
    motifs: ['godność w skrajnych sytuacjach', 'Zagłada z perspektywy świadka i uczestnika', 'walka o życie (wojna i medycyna)', 'heroizm bez patosu', 'pamięć'],
    contexts: ['Borowski, „Proszę państwa do gazu” – Zagłada, utrata godności.', 'Homer, „Iliada” – heroizm w walce bez nadziei (Hektor).', 'Camus, „Dżuma” – lekarz Rieux walczący ze śmiercią.', 'Kamiński, „Kamienie na szaniec” – walka młodzieży z okupantem.', 'Herling-Grudziński, „Inny świat” – człowiek w systemie zniewolenia.'],
    must: ['Wywiad z Markiem Edelmanem (1977).', 'Dwie płaszczyzny: getto 1943 i kardiologia w latach 70.', 'Umschlagplatz, Pola Lifszyc, Anielewicz (Miła 18).', 'ok. 220 bojowników ŻOB; chodziło o sposób umierania.', 'Tytuł: osłanianie płomienia świeczki przed Bogiem.'],
    quiz: [
      c('Marek Edelman po wojnie był', ['kardiologiem', 'pisarzem', 'politykiem', 'nauczycielem'], 0),
      c('Kto dowodził ŻOB?', ['Mordechaj Anielewicz', 'Marek Edelman', 'Pola Lifszyc', 'prof. Moll'], 0),
      c('Według Edelmana w powstaniu chodziło o', ['wybór sposobu umierania', 'zwycięstwo nad Niemcami', 'ucieczkę z getta', 'zdobycie broni'], 0),
    ],
  },
  {
    id: 'dzuma',
    title: 'Dżuma',
    author: 'Albert Camus',
    epoch: 'Literatura powojenna (egzystencjalizm)',
    year: '1947',
    genre: 'powieść-parabola',
    summary: `
Akcja dzieje się w latach 194… w **Oranie** w Algierii. Narratorem okazuje się (na końcu) **doktor Bernard Rieux** – pisze **kronikę** zarazy obiektywnie, w 3. osobie.

## Przebieg epidemii
- Wiosną na ulicach pojawiają się **martwe szczury**. Potem ludzie zaczynają chorować i umierać.
- Władze długo zwlekają z nazwaniem choroby „dżumą”. W końcu ogłaszają **zamknięcie miasta** – nikt nie może wyjechać ani wjechać.
- Miasto żyje w izolacji: rozłąka z bliskimi, strach, przyzwyczajenie, monotonia. Umierają tysiące; zmarłych grzebie się w zbiorowych mogiłach, palą ich krematoria.
- Po niemal roku dżuma **ustępuje**. Ludzie świętują na ulicach. Rieux wie jednak, że **bakcyl dżumy nigdy nie umiera** – może wrócić.

## Postawy wobec zarazy (zła)
- **Rieux** – lekarz, ateista; **walczy**, bo to jego obowiązek, „uczciwość”; nie jest bohaterem, robi swoje. Jego żona umiera w sanatorium poza miastem.
- **Jean Tarrou** – przybysz, organizuje **ochotnicze formacje sanitarne**; chce być **„świętym bez Boga”**. Umiera na dżumę jako jedna z ostatnich ofiar.
- **Rambert** – dziennikarz z Paryża, chce uciec do ukochanej, ale w końcu **zostaje i pomaga**: „wstyd być szczęśliwym samemu”.
- **Ojciec Paneloux** – jezuita; w pierwszym kazaniu mówi, że dżuma to **kara za grzechy**. Po **śmierci w męczarniach synka sędziego Othona** zmienia zdanie – trzeba przyjąć wszystko z wiarą. Umiera.
- **Joseph Grand** – skromny urzędnik, pomaga w formacjach; od lat pisze pierwsze zdanie powieści. Choruje i wyzdrowieje.
- **Cottard** – przestępca, który **cieszy się z dżumy**, bo w chaosie nikt go nie ściga; robi interesy na przemycie. Po ustąpieniu epidemii strzela do ludzi i zostaje aresztowany.

## Sens
Dżuma to **parabola**: symbol **zła** – wojny, okupacji, faszyzmu, totalitaryzmu, ale też cierpienia i śmierci w ogóle. Ważna jest **solidarność** i **przyjaźń** (Rieux i Tarrou kąpią się nocą w morzu – chwila wspólnoty). Człowiek nie może pokonać zła raz na zawsze, ale **musi z nim walczyć**.`,
    characters: [
      ['Bernard Rieux', 'lekarz i narrator; walczy z dżumą z poczucia obowiązku'],
      ['Jean Tarrou', 'organizator formacji sanitarnych, „święty bez Boga”; umiera'],
      ['Raymond Rambert', 'dziennikarz, zostaje i pomaga z solidarności'],
      ['Ojciec Paneloux', 'jezuita; kazania o karze za grzechy, kryzys po śmierci dziecka'],
      ['Joseph Grand', 'skromny urzędnik, „cichy bohater”'],
      ['Cottard', 'przestępca, zyskuje na dżumie'],
      ['Othon', 'sędzia; jego synek umiera w męczarniach'],
    ],
    motifs: ['co skłania do poświęceń', 'człowiek wobec cierpienia i śmierci', 'przyjaźń w sytuacji skrajnej', 'postawy wobec zła', 'solidarność', 'parabola, egzystencjalizm', 'cierpienie niewinnego dziecka'],
    contexts: ['Księga Hioba – cierpienie niewinnych.', 'Apokalipsa – zaraza jako kara/koniec świata.', 'Krall, „Zdążyć przed Panem Bogiem” – lekarz walczący o życie.', 'Herling-Grudziński, „Inny świat” – zło totalitaryzmu.', 'Orwell, „Rok 1984” – zło systemu.'],
    must: ['Oran, lata 40.; szczury, zamknięcie miasta.', 'Narrator: doktor Rieux (ujawnia się na końcu).', 'Tarrou – formacje sanitarne, umiera; Rambert zostaje.', 'Paneloux – dżuma karą; śmierć synka Othona.', 'Cottard zyskuje na zarazie; Grand – cichy bohater.', 'Parabola: dżuma = zło (np. faszyzm).'],
    quiz: [
      c('Narratorem „Dżumy” jest', ['doktor Rieux', 'Tarrou', 'Rambert', 'Grand'], 0),
      c('Kto twierdził, że dżuma jest karą za grzechy?', ['ojciec Paneloux', 'Rieux', 'Cottard', 'Tarrou'], 0),
      c('Kto cieszył się z epidemii?', ['Cottard', 'Grand', 'Rambert', 'Othon'], 0),
      c('Rambert ostatecznie', ['zostaje w mieście i pomaga', 'ucieka do Paryża', 'umiera', 'zostaje aresztowany'], 0),
      c('„Dżuma” to powieść-parabola, czyli', ['ma drugie, ogólniejsze znaczenie', 'jest kroniką historyczną', 'opowiada baśń', 'jest reportażem'], 0),
    ],
  },
  {
    id: 'rok1984',
    title: 'Rok 1984',
    author: 'George Orwell',
    epoch: 'Literatura powojenna',
    year: '1949',
    genre: 'powieść antyutopijna (dystopia), polityczna',
    summary: `
Świat podzielony jest na trzy supermocarstwa: **Oceanię, Eurazję i Wschódazję**, prowadzące wieczną wojnę. Akcja dzieje się w **Londynie** (Pas Startowy Jeden) w Oceanii, którą rządzi **Partia** z **Wielkim Bratem** na czele („Wielki Brat patrzy”).

## Państwo totalitarne
- **Teleekrany** w każdym mieszkaniu – nadają propagandę i **podglądają** obywateli. **Policja Myśli** ściga nawet myślozbrodnię.
- Ministerstwa o nazwach przeciwnych do ich działań: **Prawdy** (fałszuje informacje i historię), **Pokoju** (wojna), **Miłości** (tortury), **Obfitości** (racjonowanie, głód).
- Hasła Partii: **„Wojna to pokój, Wolność to niewola, Ignorancja to siła”**.
- **Dwie Minuty Nienawiści** wobec wroga **Emmanuela Goldsteina**.
- **Dwójmyślenie** – zdolność wierzenia jednocześnie w dwie sprzeczne rzeczy.
- **Nowomowa** – język, z którego usuwa się słowa, by **nie dało się pomyśleć buntu** (np. „dobry – plusdobry – nieplusdobry”).
- **Prole** (85% społeczeństwa) – zaniedbani, ogłupiani rozrywką, nie są groźni.

## Winston i Julia
**Winston Smith** pracuje w Ministerstwie Prawdy, gdzie **fałszuje stare artykuły**. W głębi duszy nienawidzi Partii. Zaczyna pisać **pamiętnik** (zbrodnia). Nawiązuje **romans z Julią** – młodą członkinią Partii, buntującą się w sposób prywatny (seks, przyjemności). Spotykają się w pokoju nad sklepem **pana Charringtona**. Winston wierzy, że **O’Brien** – członek Partii Wewnętrznej – należy do tajnego **Bractwa**; O’Brien daje im książkę Goldsteina.

## Złamanie
To pułapka: Charrington to agent Policji Myśli, a O’Brien – oprawca. Winston i Julia zostają aresztowani. W **Ministerstwie Miłości** O’Brien torturuje Winstona, każe mu uwierzyć, że **2 + 2 = 5**, jeśli tak mówi Partia. W **pokoju 101** – miejscu największego strachu – Winston, przerażony **szczurami**, **zdradza Julię** („Zróbcie to Julii!”). Na wolności jest wrakiem; spotyka Julię – nic już do siebie nie czują. Na końcu: **„Kochał Wielkiego Brata”**.

## Sens
Ostrzeżenie przed **totalitaryzmem**: władza dąży do kontroli nie tylko czynów, ale **myśli i języka**; manipuluje przeszłością („Kto kontroluje przeszłość, ten kontroluje przyszłość”). Wolność człowieka w takim państwie jest prawie niemożliwa – zostaje mu tylko wnętrze, ale i to można zniszczyć.`,
    characters: [
      ['Winston Smith', 'urzędnik Ministerstwa Prawdy, buntownik, złamany przez system'],
      ['Julia', 'kochanka Winstona, buntuje się „prywatnie”'],
      ['O’Brien', 'członek Partii Wewnętrznej, oprawca i manipulator'],
      ['Wielki Brat', 'symbol Partii, może nie istnieć jako osoba'],
      ['Goldstein', 'oficjalny wróg, autor rzekomej „książki”'],
      ['Pan Charrington', 'antykwariusz, agent Policji Myśli'],
      ['Syme', 'współtwórca słownika nowomowy, „zewaporyzowany”'],
    ],
    motifs: ['czy możliwe jest doskonałe państwo (utopia/antyutopia)', 'wolność w państwie totalitarnym', 'propaganda', 'nowomowa i kontrola języka', 'inwigilacja', 'manipulacja historią', 'miłość jako bunt', 'zdrada'],
    contexts: ['Żeromski, „Przedwiośnie” – utopia szklanych domów.', 'Herling-Grudziński, „Inny świat” – totalitaryzm sowiecki.', 'Mrożek, „Tango” – władza oparta na sile (Edek).', 'Gombrowicz, „Ferdydurke” – presja otoczenia, forma.', 'Aldous Huxley, „Nowy wspaniały świat”.'],
    must: ['Oceania, Wielki Brat, Partia; teleekrany, Policja Myśli.', 'Ministerstwa: Prawdy, Pokoju, Miłości, Obfitości.', 'Hasła: Wojna to pokój, Wolność to niewola, Ignorancja to siła.', 'Nowomowa, dwójmyślenie, Dwie Minuty Nienawiści.', 'Winston, Julia, O’Brien, Charrington; pokój 101 (szczury).', 'Koniec: Winston kocha Wielkiego Brata.'],
    quiz: [
      c('Winston pracuje w Ministerstwie', ['Prawdy', 'Miłości', 'Pokoju', 'Obfitości'], 0),
      c('Nowomowa służy do tego, by', ['uniemożliwić myślenie o buncie', 'ułatwić naukę języków', 'pisać poezję', 'kontaktować się z Eurazją'], 0),
      c('W pokoju 101 Winston zdradza Julię ze strachu przed', ['szczurami', 'ogniem', 'wodą', 'ciemnością'], 0),
      c('Hasło Partii brzmi:', ['„Wojna to pokój”', '„Praca to wolność”', '„Wiedza to władza”', '„Wolność albo śmierć”'], 0),
    ],
  },
  {
    id: 'tango',
    title: 'Tango',
    author: 'Sławomir Mrożek',
    epoch: 'Literatura współczesna',
    year: '1964',
    genre: 'dramat (groteska, tragifarsa)',
    summary: `
Akcja toczy się w mieszkaniu **rodziny Stomilów**, gdzie panuje **chaos**: wszystko dozwolone, żadnych zasad. Rodzice to dawni awangardowi buntownicy – zniszczyli konwenanse i teraz nie ma się już przeciw czemu buntować.

## Postacie i sytuacja
- **Stomil** – ojciec, artysta awangardy, wyznawca wolności, robi „eksperymenty” teatralne.
- **Eleonora** – matka, swobodna obyczajowo, romansuje z **Edkiem**.
- **Eugenia** – babcia, gra w karty, chodzi w trampkach; **Eugeniusz** – stary wuj, ceni dawne zasady.
- **Edek** – prymitywny, prostacki, siłacz, przyszedł do domu i został; je, gra w karty, nikt mu się nie sprzeciwia.
- **Artur** – 25-letni syn, student medycyny. Buntuje się **przeciw braku zasad** – chce przywrócić **normy i porządek**. To **odwrócony konflikt pokoleń**: młody chce tradycji, starzy – anarchii.

## Bunt Artura
Artur, z pomocą wuja Eugeniusza, wprowadza „rewolucję”: zmusza rodzinę do porządnych ubrań, chce urządzić tradycyjny **ślub** z kuzynką **Alą**. Rozumie jednak, że **sama forma (konwencja) nie wystarczy** – nie ma już idei, w którą wszyscy by wierzyli. Szuka nowej idei: **śmierci**, potem **władzy opartej na sile**. Ogłasza, że sam będzie rządził.

## Finał
Ala wyznaje, że zdradziła Artura z Edkiem (by wzbudzić jego zazdrość). Artur chce zabić Edka, ale **Edek zabija Artura** ciosem w kark. Władzę przejmuje **Edek** – prostak, który ma siłę. Wszyscy się mu podporządkowują. Na końcu Edek tańczy z Eugeniuszem **tango „La Cumparsita”** nad ciałem Artura.

## Sens
**Groteska** pokazuje kryzys wartości: rozbite normy prowadzą do pustki, którą wypełnia **brutalna siła**. Inteligencja (Artur) przegrywa z chamstwem i siłą (Edek). Tango – taniec dawniej **skandaliczny i buntowniczy** – staje się symbolem nowego porządku.`,
    characters: [
      ['Artur', 'syn, student; buntuje się w imię porządku, szuka idei; ginie'],
      ['Stomil', 'ojciec, awangardowy artysta, zwolennik wolności bez granic'],
      ['Eleonora', 'matka, swobodna, zdradza męża z Edkiem'],
      ['Eugenia', 'babcia, „luzaczka”'],
      ['Eugeniusz', 'wuj, tęskni za dawnym porządkiem'],
      ['Edek', 'prostak i cham, siła fizyczna; przejmuje władzę'],
      ['Ala', 'kuzynka i narzeczona Artura'],
    ],
    motifs: ['bunt przeciw porządkowi społecznemu', 'konflikt pokoleń (odwrócony)', 'normy społeczne – ograniczają czy porządkują', 'władza i siła', 'kryzys wartości', 'groteska', 'taniec'],
    contexts: ['Wyspiański, „Wesele” – chocholi taniec, marazm.', 'Molier, „Skąpiec” – konflikt ojca z dziećmi.', 'Gombrowicz, „Ferdydurke” – forma, groteska.', 'Orwell, „Rok 1984” – władza oparta na sile.', 'Nowakowski, „Górą »Edek«” – nawiązanie do Edka z „Tanga”.'],
    must: ['Rodzina bez zasad; Artur chce przywrócić porządek – odwrócony konflikt pokoleń.', 'Ślub Artura z Alą jako powrót do formy.', 'Edek zabija Artura i przejmuje władzę.', 'Edek i Eugeniusz tańczą tango „La Cumparsita”.', 'Groteska, tragifarsa.'],
    quiz: [
      c('Artur buntuje się przeciw', ['brakowi zasad w domu', 'surowym rodzicom', 'władzy państwa', 'religii'], 0),
      c('Kto zabija Artura?', ['Edek', 'Stomil', 'Eugeniusz', 'Ala'], 0),
      c('Na końcu tango tańczą', ['Edek i Eugeniusz', 'Artur i Ala', 'Stomil i Eleonora', 'Edek i Ala'], 0),
    ],
  },
  {
    id: 'gora-edek',
    title: 'Górą „Edek”',
    author: 'Marek Nowakowski',
    epoch: 'Literatura współczesna',
    year: '1999 (tom „Prawo prerii”)',
    genre: 'opowiadanie',
    note: 'Omówienie skrócone – opowiadanie ma 2–3 strony, przeczytaj je przed maturą, żeby znać szczegóły zakończenia.',
    summary: `
Krótkie opowiadanie z tomu **„Prawo prerii” (1999)**. Nowakowski obserwuje **Polskę lat 90.** – czas przemian ustrojowych, rodzącego się kapitalizmu, pogoni za pieniędzmi i siłą.

## O czym jest
Na **zatłoczonej ulicy w dużym mieście** dochodzi do konfliktu o **miejsce parkingowe**. Kierowca dużego samochodu (Forda) – tytułowy **„Edek”** – wymusza swoje: jest bezczelny, agresywny, pewny siebie, wykorzystuje przewagę silniejszego. Drugi kierowca staje się ofiarą jego **agresji i chamstwa**. **Narrator** jest obserwatorem – nie wtrąca się, tylko patrzy i komentuje. Banalna sytuacja z życia codziennego staje się obrazem szerszego zjawiska: **brutalizacji relacji międzyludzkich**, w której wygrywa ten, kto silniejszy i bardziej bezwzględny („prawo prerii”).

## Nawiązanie do „Tanga” – po co?
Imię i tytuł odsyłają do **Edka z „Tanga” Mrożka** – prostaka, który dzięki **sile** przejmuje władzę nad rodziną i tańczy tango nad ciałem zabitego Artura. Cudzysłów w tytule pokazuje, że „Edek” to **typ, symbol**.
- Nawiązanie pozwala **jednym słowem przywołać cały sens „Tanga”** (kryzys wartości → władza siły i chamstwa).
- Nowakowski **aktualizuje** diagnozę Mrożka: „Edek” wygrał także w nowej, kapitalistycznej rzeczywistości – „Górą Edek!”.
- Ogólnie autorzy nawiązują do innych tekstów, by: **dopowiedzieć, polemizować, ironizować, uwiarygodnić, aktualizować** sens albo wpisać się w tradycję i nawiązać porozumienie z czytelnikiem, który zna pierwowzór.`,
    characters: [['„Edek”', 'kierowca Forda – bezwzględny, agresywny, wymusza swoje; typ prostaka z „Tanga”'], ['Drugi kierowca', 'ofiara agresji'], ['Narrator', 'obserwator, nie ingeruje']],
    motifs: ['intertekstualność – w jakim celu autor nawiązuje do innego tekstu', 'triumf siły i chamstwa', 'agresja w relacjach międzyludzkich', 'Polska lat 90., przemiany', 'kryzys wartości'],
    contexts: ['Mrożek, „Tango” – pierwowzór Edka.', 'Wyspiański, „Wesele” – nawiązania do historii i literatury (Wernyhora, Szela).', 'Mickiewicz, „Dziady cz. III” – nawiązania do Biblii.', 'Orwell, „Rok 1984” – władza oparta na sile.'],
    must: ['Tom „Prawo prerii” (1999), lata 90.', 'Konflikt o miejsce parkingowe; Edek – kierowca Forda.', 'Narrator – obserwator.', 'Tytuł nawiązuje do Edka z „Tanga” Mrożka – symbol siły i chamstwa, które biorą górę.'],
    quiz: [
      c('Tytuł opowiadania nawiązuje do postaci z', ['„Tanga” Mrożka', '„Wesela” Wyspiańskiego', '„Lalki” Prusa', '„Ferdydurke” Gombrowicza'], 0),
      c('Konflikt w opowiadaniu dotyczy', ['miejsca parkingowego', 'spadku', 'pracy w biurze', 'meczu piłkarskiego'], 0),
      c('Nawiązanie do innego tekstu to', ['intertekstualność', 'onomatopeja', 'inwokacja', 'retardacja'], 0),
    ],
  },
  {
    id: 'miejsce',
    title: 'Miejsce',
    author: 'Andrzej Stasiuk',
    epoch: 'Literatura współczesna',
    year: '1995 („Opowieści galicyjskie”)',
    genre: 'opowiadanie',
    note: 'Omówienie skrócone – przeczytaj samo opowiadanie (kilka stron), żeby znać szczegóły.',
    summary: `
Opowiadanie z tomu **„Opowieści galicyjskie”**. Stasiuk pisze o **Beskidzie Niskim** – prowincji, w której po wojnie zniknęli dawni mieszkańcy (**Łemkowie**, wysiedleni m.in. w **akcji „Wisła” 1947**), a w ich miejsce przyszli nowi ludzie.

## O czym jest
Akcja toczy się w małej, opustoszałej wsi w Beskidzie Niskim, która kiedyś była **łemkowska**. Narrator opowiada o **pustym placu**, na którym stała **cerkiew**. Świątynię **rozebrano i przeniesiono do muzeum (skansenu)** – straciła swoją funkcję i związek z miejscem, a po niej zostało puste miejsce porośnięte trawą. Narrator spotyka tam m.in. przybysza z aparatem fotograficznym. Ślady dawnego życia (zarys fundamentów, drzewa, cmentarz) przypominają o społeczności, która tu się modliła i zniknęła. Opowieść jest refleksją nad **pamięcią miejsca**, **przemijaniem** i tym, jak historia i **sacrum** zostają w krajobrazie, nawet gdy ludzie o nich zapominają.

## Jak to wykorzystać
- **Miejsca ważne w życiu człowieka**: miejsce to nie tylko przestrzeń, ale **pamięć, tożsamość, wspólnota** i ślady przeszłości.
- Puste miejsce po świątyni – znak **utraconego świata** i krzywdy wysiedlonych; przeniesienie cerkwi do muzeum ratuje budynek, ale odbiera mu sens.
- Opis prowincji, codzienności, przyrody – charakterystyczny dla prozy Stasiuka.`,
    characters: [['Narrator', 'obserwator życia wsi w Beskidzie Niskim, refleksyjny']],
    motifs: ['miejsca ważne w życiu człowieka', 'pamięć miejsca', 'przemijanie', 'sacrum w krajobrazie', 'prowincja', 'utracony świat (Łemkowie)'],
    contexts: ['Wisława Szymborska, „Spis ludności” – postawy wobec przeszłości.', 'Mickiewicz, „Pan Tadeusz” – Soplicowo jako miejsce-mit.', 'Żeromski, „Przedwiośnie” – Nawłoć.', 'Kapuściński, „Podróże z Herodotem” – miejsca i spotkania z innymi.', 'Czesław Miłosz, „Dolina Issy” / wiersze o Wilnie – pamięć miejsca.'],
    must: ['Tom „Opowieści galicyjskie” (1995).', 'Beskid Niski, dawna wieś łemkowska; akcja „Wisła” (1947).', 'Puste miejsce po cerkwi przeniesionej do muzeum.', 'Pamięć miejsca, ślady przeszłości.'],
    quiz: [c('Opowiadanie „Miejsce” pochodzi z tomu', ['„Opowieści galicyjskie”', '„Pożegnanie z Marią”', '„Gra na wielu bębenkach”', '„Raport o stanie wojennym”'], 0)],
  },
  {
    id: 'andrews',
    title: 'Profesor Andrews w Warszawie',
    author: 'Olga Tokarczuk',
    epoch: 'Literatura współczesna',
    year: '2001 („Gra na wielu bębenkach”)',
    genre: 'opowiadanie',
    summary: `
Opowiadanie z tomu **„Gra na wielu bębenkach”** (Tokarczuk – Nagroda Nobla 2018).

## O czym jest
Angielski psycholog, **profesor Andrews**, przylatuje do **Warszawy 12 grudnia 1981 r.** na tydzień, by wygłosić wykłady o swojej metodzie terapeutycznej. Już na lotnisku zostawia i traci **walizkę** (z materiałami i ciepłymi ubraniami). Zostaje zakwaterowany w mieszkaniu na blokowisku; gospodarz miał się odezwać następnego dnia.

Rano – **13 grudnia 1981** – wprowadzono **stan wojenny**: nie działa telefon, nikt po niego nie przychodzi, na ulicach są **czołgi**, wojsko, mróz i śnieg, przed sklepami stoją **kolejki**. Andrews **nie zna polskiego** i **nie rozumie**, co się dzieje. Zaczyna **naśladować ludzi** – stoi w kolejkach, kupuje to co inni (ocet zamiast wódki, **żywego karpia**, choinkę). Miasto staje się dla niego **piekielnym labiryntem**, z którego nie umie się wydostać; próbuje dotrzeć do **ambasady**, ale nikt go nie rozumie.

W końcu otyły mężczyzna z osiedla zaprasza go do domu, częstuje herbatą i alkoholem; na słowo „embassy” profesor słyszy „war”. W łazience widzi **aparaturę do pędzenia bimbru i żywego karpia w wannie**. Ostatecznie **dociera do ambasady**. Absurd i groza codzienności stanu wojennego zostają pokazane oczami kogoś, kto nic z tego nie rozumie.

## Jak to wykorzystać
- **Stan wojenny z perspektywy obcokrajowca**: obcy widzi to, czego mieszkańcy już nie zauważają – absurd, przemoc systemu, zastraszenie.
- Motywy: **obcość, samotność, komunikacja (jej brak), zderzenie kultur**, miasto jako przestrzeń wroga.`,
    characters: [['Profesor Andrews', 'brytyjski psycholog, obcokrajowiec zagubiony w Warszawie w stanie wojennym']],
    motifs: ['stan wojenny z perspektywy obcokrajowca', 'obcość i samotność', 'brak komunikacji', 'miasto wrogie człowiekowi', 'absurd systemu'],
    contexts: ['Orwell, „Rok 1984” – państwo totalitarne, propaganda.', 'Prus, „Lalka” – miasto (Warszawa) przyjazne czy wrogie.', 'Kapuściński, „Podróże z Herodotem” – spotkanie z obcą kulturą.', 'Camus, „Dżuma” – zamknięte miasto.'],
    must: ['Tom „Gra na wielu bębenkach” (2001).', 'Przylot 12 grudnia 1981, rano stan wojenny.', 'Zgubiona walizka, nieczynny telefon, nikt się nie zgłasza; nie zna języka.', 'Naśladuje ludzi: kolejki, ocet, żywy karp, choinka.', 'Na końcu dociera do ambasady.', 'Perspektywa obcokrajowca – absurd stanu wojennego.'],
    quiz: [
      c('Profesor Andrews przyjeżdża do Warszawy tuż przed', ['wprowadzeniem stanu wojennego', 'wybuchem II wojny światowej', 'powstaniem warszawskim', 'wyborami 1989'], 0),
      c('Andrews próbuje się dostać do', ['ambasady', 'szpitala', 'uniwersytetu', 'dworca'], 0),
    ],
  },
  {
    id: 'herodot',
    title: 'Podróże z Herodotem (fragmenty)',
    author: 'Ryszard Kapuściński',
    epoch: 'Literatura współczesna (reportaż)',
    year: '2004',
    genre: 'reportaż literacki, wspomnienie',
    summary: `
Kapuściński wspomina swoje **pierwsze zagraniczne podróże** jako młody reporter w latach 50. – do **Indii**, **Chin** i później Afryki. Przed wyjazdem redaktorka (Irena Tarłowska) dała mu **„Dzieje” Herodota** – greckiego historyka z V w. p.n.e. Książka stała się jego **towarzyszem podróży**.

## Główne wątki
- **Przekroczyć granicę** – młody reporter marzy, by po prostu wyjechać poza granice PRL, zobaczyć świat. Podróż zaczyna się od pragnienia.
- **Zderzenie z obcym światem**: Indie przytłaczają go wielkością, różnorodnością, biedą; **nie zna języka** – czuje się bezradny, uczy się angielskiego, czytając Hemingwaya. W Chinach doświadcza obcości i kontroli.
- **Herodot jako pierwszy reporter** – podróżował, słuchał ludzi, zapisywał ich opowieści, chciał zrozumieć innych (Persów, Scytów, Egipcjan). Kapuściński opowiada fragmenty „Dziejów” (np. wojny grecko-perskie, Krezus, Kserkses).
- Refleksja: **poznanie innych** prowadzi do **poznania siebie**; kultury trzeba rozumieć, a nie oceniać; ważna jest **pamięć** i opowieść.

## Czym może być podróżowanie
**ciekawością świata, przekraczaniem granic (dosłownych i w sobie), spotkaniem z Innym, poznawaniem siebie, nauką pokory, pracą reportera.**`,
    characters: [['Narrator (Kapuściński)', 'młody reporter, ciekawy świata'], ['Herodot', 'grecki historyk, „ojciec historii”, wzór reportera']],
    motifs: ['podróż i jej sens', 'spotkanie z Innym', 'przekraczanie granic', 'język i komunikacja', 'pamięć i historia'],
    contexts: ['Homer, „Odyseja” – podróż jako poznanie.', 'Tokarczuk, „Profesor Andrews w Warszawie” – obcokrajowiec w obcym świecie.', 'Mickiewicz, „Sonety krymskie” – romantyczny podróżnik.', 'Stasiuk, „Miejsce” – sens miejsca.'],
    must: ['Wspomnienia pierwszych podróży (Indie, Chiny) w latach 50.', '„Dzieje” Herodota jako towarzysz podróży.', 'Herodot – pierwszy reporter.', 'Podróż = poznanie innych i siebie.'],
    quiz: [
      c('Kapuściński w podróżach czytał', ['„Dzieje” Herodota', '„Iliadę”', '„Biblię”', '„Mitologię”'], 0),
      c('Pierwszą dużą podróżą reportera były', ['Indie', 'Stany Zjednoczone', 'Francja', 'Brazylia'], 0),
    ],
  },
]
