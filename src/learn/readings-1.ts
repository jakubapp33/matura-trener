import type { Reading } from './readings-types'
import { c } from './types'

/** Antyk, średniowiecze, renesans, barok, oświecenie */
export const READINGS_1: Reading[] = [
  {
    id: 'hiob',
    title: 'Księga Hioba',
    author: 'Biblia (Stary Testament)',
    epoch: 'Starożytność',
    year: 'ok. V w. p.n.e.',
    genre: 'księga dydaktyczna (mądrościowa), dialog filozoficzny ujęty w opowieść',
    summary: `
Hiob to bogaty, szczęśliwy i bardzo pobożny człowiek z ziemi Us. Ma żonę, siedmiu synów i trzy córki oraz ogromne stada. Wśród synów Bożych zjawia się szatan i twierdzi, że Hiob jest pobożny tylko dlatego, że Bóg go nagradza. Bóg pozwala wystawić Hioba na próbę.

## Próba
W jednym dniu Hiob traci cały majątek, a jego dzieci giną pod gruzami domu. Odpowiada słowami: **„Dał Pan i zabrał Pan; niech będzie imię Pańskie błogosławione”**. Potem zostaje porażony bolesnymi wrzodami od stóp do głów, siedzi na popiele i skrobie rany skorupą. Żona namawia go: „Złorzecz Bogu i umieraj!”, ale Hiob nie grzeszy słowem.

## Rozmowy z przyjaciółmi
Przychodzą trzej przyjaciele: **Elifaz, Bildad i Sofar** (później także młody **Elihu**). Przez siedem dni milczą, potem przekonują Hioba, że cierpienie musi być **karą za grzechy** – trzeba się przyznać i nawrócić. Hiob nie zgadza się: wie, że jest niewinny. Przeklina dzień swoich narodzin, skarży się, pyta, dlaczego cierpią sprawiedliwi, a niegodziwym się powodzi. Domaga się, by Bóg mu odpowiedział – ale nie odrzuca wiary.

## Odpowiedź Boga
Bóg przemawia do Hioba **z wichru (burzy)**. Nie tłumaczy przyczyn cierpienia, tylko pokazuje ogrom i tajemnicę stworzenia: „Gdzieś był, gdy zakładałem ziemię?”. Hiob rozumie, że człowiek nie pojmie Bożych zamysłów, i z pokorą odwołuje swoje skargi.

## Zakończenie
Bóg gani przyjaciół (mówili o Nim nieprawdę) i przywraca Hiobowi szczęście – **dwa razy więcej** majątku, nowe dzieci. Hiob żyje jeszcze 140 lat.

> Sens: cierpienie nie zawsze jest karą. Wiara Hioba jest bezinteresowna, a ludzki rozum nie obejmie Boskiego porządku świata.`,
    characters: [
      ['Hiob', 'sprawiedliwy, pobożny bogacz poddany próbie; wzór wierności i cierpliwości w cierpieniu'],
      ['Bóg', 'pozwala na próbę, na końcu przemawia z wichru i ukazuje tajemnicę stworzenia'],
      ['Szatan', 'oskarżyciel; twierdzi, że wiara Hioba jest interesowna'],
      ['Elifaz, Bildad, Sofar', 'przyjaciele; reprezentują pogląd, że cierpienie to kara za grzech'],
      ['Żona Hioba', 'namawia go, by przeklął Boga'],
    ],
    motifs: ['cierpienie niezawinione', 'próba wiary', 'teodycea – jak pogodzić dobroć Boga ze złem', 'bunt i pokora', 'przyjaźń (niepomocna)', 'niepojętość Boga'],
    contexts: [
      'Jan Kochanowski, „Treny” – ojciec cierpi po śmierci córki, kryzys i odbudowa wiary (Tren XIX).',
      'Albert Camus, „Dżuma” – śmierć niewinnego dziecka, kazania Paneloux o karze za grzechy.',
      'Mickiewicz, „Dziady cz. III” – cierpienie niewinnych (młodzież pod zaborami), bunt Konrada wobec Boga.',
      'Karol Wojtyła, „Hiob” (dramat) – Hiob jako symbol cierpiącej Polski.',
      'Leopold Staff, „Przedśpiew” – pogodzenie z losem, przyjmowanie radości i smutku.',
    ],
    must: [
      'Hiob jest niewinny – próba wynika z zakładu Boga z szatanem.',
      '„Dał Pan i zabrał Pan; niech będzie imię Pańskie błogosławione”.',
      'Przyjaciele: cierpienie = kara; Hiob: jestem niewinny.',
      'Bóg odpowiada z wichru, nie wyjaśnia przyczyn cierpienia.',
      'Szczęście zostaje przywrócone w dwójnasób.',
      'Pojęcie: hiobowa wieść = bardzo zła wiadomość.',
    ],
    quiz: [
      c('Kto twierdził, że Hiob jest pobożny tylko z wyrachowania?', ['szatan', 'Elifaz', 'żona Hioba', 'Elihu'], 0),
      c('Przyjaciele Hioba uważali, że jego cierpienie jest', ['karą za grzechy', 'próbą od Boga', 'przypadkiem', 'zemstą szatana'], 0),
      c('Bóg przemawia do Hioba', ['z wichru', 'we śnie', 'przez anioła', 'przez proroka'], 0),
      c('Na końcu Hiob otrzymuje', ['dwa razy więcej niż miał', 'tylko zdrowie', 'nic – umiera', 'wieczną młodość'], 0),
    ],
  },
  {
    id: 'kohelet',
    title: 'Księga Koheleta (Eklezjastesa)',
    author: 'Biblia (Stary Testament)',
    epoch: 'Starożytność',
    year: 'ok. III w. p.n.e.',
    genre: 'księga mądrościowa, refleksja filozoficzna',
    summary: `
Kohelet (gr. Eklezjastes – „przemawiający na zgromadzeniu”) przedstawia się jako syn Dawida, król w Jerozolimie. Jest człowiekiem, który miał wszystko: mądrość, bogactwo, pałace, ogrody, sługi, przyjemności. Po latach dochodzi do wniosku: **„Marność nad marnościami i wszystko marność”** (łac. *vanitas vanitatum et omnia vanitas*).

## Główne myśli
- **Przemijanie**: „Pokolenie przychodzi i pokolenie odchodzi, a ziemia trwa na wieki”. Słońce wschodzi i zachodzi, rzeki płyną do morza – świat kręci się w kółko.
- **„Nic nowego pod słońcem”** – wszystko już było.
- **Wszystko ma swój czas**: „Jest czas rodzenia i czas umierania, czas sadzenia i czas wyrywania, czas płaczu i czas śmiechu…”.
- Mądrość jest lepsza od głupoty, ale **mędrzec i głupiec umierają tak samo**; bogactwa zostawia się innym.
- Człowiek nie pozna do końca dzieła Boga.

## Wnioski
Kohelet nie zachęca do rozpaczy. Radzi **cieszyć się tym, co daje dzień**: jeść, pić, radować się owocami swojej pracy i życiem z ukochaną osobą – bo to dar od Boga. Końcowe przesłanie: **„Boga się bój i przykazania Jego zachowuj”** – Bóg osądzi każdy czyn.

> Księga to źródło motywu **vanitas**, bardzo ważnego w baroku (np. martwe natury z czaszką, poezja Naborowskiego i Sępa Szarzyńskiego).`,
    characters: [['Kohelet', 'mędrzec, król Jerozolimy; narrator rozmyślający o sensie życia']],
    motifs: ['vanitas – marność świata', 'przemijanie', 'cykliczność czasu', 'sens życia', 'carpe diem w wersji biblijnej', 'bojaźń Boża'],
    contexts: [
      'Daniel Naborowski, „Krótkość żywota” – barokowe vanitas, życie jako sen i cień.',
      'Mikołaj Sęp Szarzyński, sonety – niepokój człowieka wobec przemijania.',
      'Jan Kochanowski, pieśni – horacjańskie „korzystaj z dnia” i spokój wobec losu.',
      '„Rozmowa Mistrza Polikarpa ze Śmiercią” – przemijanie i nieuchronność śmierci.',
      'Malarstwo barokowe: martwe natury vanitas (czaszka, zgaszona świeca, klepsydra).',
    ],
    must: ['„Marność nad marnościami i wszystko marność”.', '„Nic nowego pod słońcem”.', '„Wszystko ma swój czas” – wyliczanka przeciwieństw.', 'Rada: ciesz się życiem jako darem Boga i bój się Boga.', 'Źródło motywu vanitas.'],
    quiz: [
      c('Słynne zdanie Koheleta to', ['„Marność nad marnościami i wszystko marność”', '„Myślę, więc jestem”', '„Pamiętaj, że jesteś prochem”', '„Kocham, więc jestem”'], 0),
      c('Motyw, którego źródłem jest Księga Koheleta, to', ['vanitas', 'danse macabre', 'mesjanizm', 'arkadia'], 0),
      c('Kohelet radzi, by', ['cieszyć się życiem jako darem Boga', 'odrzucić wszelkie przyjemności', 'zdobywać jak najwięcej bogactw', 'uciec od ludzi'], 0),
    ],
  },
  {
    id: 'apokalipsa',
    title: 'Apokalipsa św. Jana',
    author: 'Biblia (Nowy Testament), przypisywana św. Janowi',
    epoch: 'Starożytność',
    year: 'ok. 95 r. n.e.',
    genre: 'apokalipsa – księga prorocza, wizyjna; pełna symboli',
    summary: `
Jan, przebywający na wyspie **Patmos**, ma serię widzeń dotyczących końca świata. Księga pisana jest językiem **symboli i liczb** (7 – pełnia, 12 – lud Boży, 666 – liczba Bestii).

## Najważniejsze wizje
- **Tron Boga** otoczony przez starców i cztery istoty żyjące; **Baranek** (Chrystus) jako jedyny może otworzyć **księgę zapieczętowaną siedmioma pieczęciami**.
- Otwarcie pierwszych pieczęci wyzwala **czterech jeźdźców Apokalipsy**: na białym koniu (zwycięzca, podbój), na rudym (wojna), na karym (głód), na trupio bladym (**Śmierć**).
- **Siedem trąb** aniołów zapowiada kolejne katastrofy: grad i ogień, morze zamienione w krew, spadająca gwiazda Piołun, ciemność, szarańcza.
- **Niewiasta obleczona w słońce** rodzi syna; ściga ją **Smok** (szatan), którego pokonuje **archanioł Michał**.
- **Bestia** wychodząca z morza, oznaczona liczbą **666**, i **Wielka Nierządnica – Babilon** (symbol zepsutej potęgi; dla pierwszych chrześcijan – Rzym), który upada.
- Ostateczna bitwa (**Armagedon**), związanie szatana, **Sąd Ostateczny** – zmarli są sądzeni według uczynków zapisanych w księgach.

## Zakończenie
Pojawia się **nowe niebo i nowa ziemia** oraz **Niebieskie Jeruzalem** – miasto ze złota i drogocennych kamieni, w którym Bóg zamieszka z ludźmi i otrze z ich oczu wszelką łzę. „Oto czynię wszystko nowe”.

> Apokalipsa to nie tylko katastrofa – to także **nadzieja**: zło zostanie ostatecznie pokonane, a wierni nagrodzeni.`,
    characters: [
      ['Jan', 'narrator, wizjoner na Patmos'],
      ['Baranek', 'Chrystus – jedyny godny otworzyć księgę'],
      ['Czterej jeźdźcy', 'zwycięzca (podbój), wojna, głód, śmierć'],
      ['Smok, Bestia, Nierządnica Babilon', 'symbole zła i zepsutej władzy'],
      ['Niewiasta obleczona w słońce', 'symbol Kościoła / Maryi'],
    ],
    motifs: ['koniec świata', 'walka dobra ze złem', 'sąd ostateczny', 'kara i nagroda', 'nadzieja na odnowienie świata', 'symbolika liczb i kolorów'],
    contexts: [
      'Czesław Miłosz, „Piosenka o końcu świata” – koniec świata przychodzi niezauważony, w zwykły dzień.',
      'Albert Camus, „Dżuma” – epidemia jako apokaliptyczna kara (kazanie Paneloux).',
      'Krzysztof Kamil Baczyński, „Elegia o… [chłopcu polskim]”, wiersze wojenne – wojna jako apokalipsa.',
      'Albrecht Dürer, drzeworyty „Apokalipsa” (Czterej jeźdźcy).',
      'Mickiewicz, „Dziady cz. III” – walka dobra i zła o duszę, wizje.',
    ],
    must: ['Autor: Jan na wyspie Patmos.', 'Księga z siedmioma pieczęciami, otwiera ją Baranek.', 'Czterej jeźdźcy: podbój, wojna, głód, śmierć.', 'Liczba Bestii 666, Babilon – Wielka Nierządnica.', 'Koniec: Niebieskie Jeruzalem – nadzieja.'],
    quiz: [
      c('Księgę zapieczętowaną siedmioma pieczęciami otwiera', ['Baranek', 'archanioł Michał', 'Jan', 'Smok'], 0),
      c('Liczba Bestii w Apokalipsie to', ['666', '777', '144', '12'], 0),
      c('Apokalipsa kończy się wizją', ['Niebieskiego Jeruzalem', 'zagłady całej ludzkości', 'potopu', 'wieży Babel'], 0),
      c('Smoka pokonuje', ['archanioł Michał', 'Baranek', 'Niewiasta', 'Jan'], 0),
    ],
  },
  {
    id: 'mitologia',
    title: 'Mitologia (cz. I Grecja)',
    author: 'Jan Parandowski',
    epoch: 'Starożytność (opracowanie z 1924 r.)',
    year: '1924',
    genre: 'zbiór mitów opowiedzianych prozą',
    summary: `
Parandowski opowiada mity greckie o stworzeniu świata, bogach i bohaterach. Na maturze najważniejsze są mity, które pasują do pytań jawnych: **poświęcenie, wina i kara, miłość silniejsza niż śmierć**.

## Początek świata i bogowie
Z **Chaosu** wyłoniły się Gaja (Ziemia) i Uranos (Niebo). Władzę przejął Kronos, który pożerał swoje dzieci; ocalony **Zeus** pokonał go i z rodzeństwem zamieszkał na **Olimpie**. Bogowie olimpijscy: Zeus, Hera, Posejdon, Hades, Atena, Apollo, Artemida, Afrodyta, Ares, Hefajstos, Hermes, Demeter, Dionizos.

## Mity o poświęceniu
- **Prometeusz** – tytan, który ulepił ludzi z gliny, ukradł bogom **ogień** i dał go ludziom. Zeus przykuł go do skały na Kaukazie; orzeł codziennie wyjadał mu wątrobę, która odrastała. Uwolnił go Herakles. *Symbol buntu i poświęcenia dla ludzkości (prometeizm).*
- **Alkestis** – zgodziła się umrzeć za męża **Admeta**, gdy nikt inny (nawet jego starzy rodzice) nie chciał. Wyprowadził ją z Hadesu Herakles.
- **Demeter** szukająca porwanej przez Hadesa córki **Persefony** – miłość matki; odtąd Persefona część roku spędza w podziemiu (zima), część na ziemi (wiosna i lato).

## Mity o winie i karze
- **Tantal** – za zuchwalstwo (podał bogom do zjedzenia ciało syna, wykradał nektar) cierpi w Tartarze **wieczny głód i pragnienie**: owoce i woda uciekają, gdy sięga (*męki Tantala*).
- **Syzyf** – oszukał bogów (spętał Tanatosa – śmierć); za karę wtacza na górę głaz, który zawsze stacza się w dół (*syzyfowa praca*).
- **Niobe** – chwaliła się, że ma więcej dzieci niż Leto. Apollo i Artemida zabili jej dzieci; Niobe skamieniała z bólu.
- **Arachne** – wyzwała Atenę na pojedynek w tkaniu; zamieniona w pająka.
- **Dedal i Ikar** – Ikar wbrew przestrogom ojca wzleciał za blisko słońca, wosk się stopił, chłopiec spadł do morza.
- **Edyp** – nieświadomie zabił ojca i poślubił matkę (spełnienie wyroczni); oślepił się. Fatum ciąży nad rodem Labdakidów (ciąg dalszy – „Antygona”).

## Miłość silniejsza niż śmierć
- **Orfeusz i Eurydyka** – po śmierci żony śpiewak zszedł do Hadesu i wzruszył bogów podziemia muzyką. Mógł ją wyprowadzić pod warunkiem, że **nie obejrzy się** za siebie – obejrzał się i stracił ją na zawsze.
- **Filemon i Baucis** – ubodzy staruszkowie, którzy ugościli przebranych Zeusa i Hermesa. Poprosili, by umrzeć razem – zamienieni zostali w **dąb i lipę** rosnące obok siebie.
- **Alkestis i Admet** – miłość gotowa na śmierć.`,
    characters: [
      ['Prometeusz', 'tytan, dobroczyńca ludzi; ukradł ogień; ukarany przykuciem do skały'],
      ['Zeus', 'najwyższy bóg, władca Olimpu'],
      ['Orfeusz', 'śpiewak, zszedł po Eurydykę do Hadesu'],
      ['Syzyf, Tantal', 'przykłady wiecznej kary za pychę i oszustwo'],
      ['Alkestis', 'oddała życie za męża'],
      ['Niobe', 'symbol matczynej rozpaczy, ukarana za pychę'],
    ],
    motifs: ['poświęcenie (Prometeusz, Alkestis)', 'wina i kara, pycha (hybris)', 'miłość silniejsza niż śmierć (Orfeusz, Alkestis, Filemon i Baucis)', 'bunt przeciw bogom', 'fatum', 'cierpienie matki (Demeter, Niobe)'],
    contexts: [
      'Sofokles, „Antygona” – fatum Labdakidów, prawa boskie i ludzkie.',
      'Mickiewicz, „Dziady cz. III” – Konrad jako postać prometejska (bunt wobec Boga w imię narodu).',
      'Albert Camus, „Mit Syzyfa” – „trzeba wyobrażać sobie Syzyfa szczęśliwym”.',
      'Kochanowski, „Tren XIX” lub „Tren X” – motyw orfejski: ojciec szuka zmarłej córki.',
      'Czesław Miłosz, „Orfeusz i Eurydyka”.',
    ],
    must: ['Prometeusz – ogień dla ludzi, kara: orzeł wyjada wątrobę.', 'Syzyf – głaz; Tantal – głód i pragnienie.', 'Orfeusz obejrzał się i stracił Eurydykę.', 'Alkestis umarła za Admeta, uratował ją Herakles.', 'Filemon i Baucis – dąb i lipa.', 'Związki frazeologiczne: syzyfowa praca, męki Tantala, puszka Pandory, pięta Achillesa, nić Ariadny.'],
    quiz: [
      c('Kto ukradł bogom ogień dla ludzi?', ['Prometeusz', 'Syzyf', 'Tantal', 'Dedal'], 0),
      c('Orfeusz utracił Eurydykę, ponieważ', ['obejrzał się za siebie', 'przestał grać', 'zjadł owoc granatu', 'nie zapłacił Charonowi'], 0),
      c('Kto zgodził się umrzeć za męża?', ['Alkestis', 'Niobe', 'Persefona', 'Penelopa'], 0),
      c('„Syzyfowa praca” to praca', ['ciężka i bezowocna', 'twórcza', 'dobrze opłacona', 'wykonana w nocy'], 0),
      c('Filemon i Baucis po śmierci zostali zamienieni w', ['dąb i lipę', 'gwiazdy', 'ptaki', 'kamienie'], 0),
    ],
  },
  {
    id: 'iliada',
    title: 'Iliada (fragmenty)',
    author: 'Homer',
    epoch: 'Starożytność',
    year: 'VIII w. p.n.e.',
    genre: 'epos (epopeja) bohaterski',
    summary: `
„Iliada” opowiada o kilkudziesięciu dniach z **dziesiątego roku wojny trojańskiej**. Tytuł pochodzi od Ilionu – innej nazwy Troi. Utwór otwiera **inwokacja**: „Gniew, bogini, opiewaj Achilla, syna Peleusa…”.

## Gniew Achillesa
Wódz Greków (Achajów) **Agamemnon** odbiera **Achillesowi** brankę **Bryzeidę**. Obrażony Achilles – najdzielniejszy z Greków – wycofuje się z walki, a jego matka, nimfa **Tetyda**, prosi Zeusa, by Trojanie zwyciężali, dopóki Grecy nie oddadzą synowi czci. Trojanie pod wodzą **Hektora** spychają Greków aż do okrętów.

## Hektor i Andromacha (księga VI)
Słynna scena pożegnania: Hektor żegna się z żoną **Andromachą** i małym synkiem **Astianaksem**, który przestraszył się pióropusza na hełmie ojca. Andromacha błaga go, by został; Hektor wie, że Troja upadnie, ale **nie może uchylić się od obowiązku** i honoru – idzie walczyć.

## Śmierć Patroklosa i zemsta
**Patroklos**, przyjaciel Achillesa, w jego zbroi rusza do boju i ginie z ręki Hektora. Achilles w rozpaczy godzi się z Agamemnonem i wraca do walki w nowej zbroi wykutej przez Hefajstosa. Zabija Hektora w pojedynku pod murami Troi i **bezcześci jego ciało**, wlokąc je za rydwanem.

## Priam u Achillesa (księga XXIV)
Stary król Troi **Priam** nocą przychodzi do namiotu Achillesa, całuje ręce, które zabiły jego syna, i prosi o wydanie ciała. Achilles, wspominając własnego ojca, **wzrusza się i oddaje ciało**. Utwór kończy się **pogrzebem Hektora**. (Upadku Troi i konia trojańskiego w „Iliadzie” nie ma.)

## Cechy eposu
inwokacja, **heksametr**, **epitety stałe** („szybkonogi Achilles”, „Hektor błyszczący w hełmie”), **porównania homeryckie** (rozbudowane), **retardacja** (opóźnianie akcji), dwa plany: ludzki i boski – bogowie wspierają strony wojny, narrator obiektywny.`,
    characters: [
      ['Achilles', 'najdzielniejszy Grek, syn Tetydy; gniewny, dumny, ale zdolny do litości (scena z Priamem)'],
      ['Hektor', 'obrońca Troi, syn Priama; wzór odpowiedzialności, męża i ojca; walczy, choć wie, że przegra'],
      ['Agamemnon', 'wódz Greków; odebrał Achillesowi Bryzeidę'],
      ['Patroklos', 'przyjaciel Achillesa, zabity przez Hektora'],
      ['Priam', 'król Troi; błaga o ciało syna'],
      ['Andromacha', 'żona Hektora'],
    ],
    motifs: ['heroizm i honor', 'człowiek wobec losu (fatum)', 'przyjaźń', 'gniew i zemsta', 'rodzina i obowiązek', 'litość i szacunek dla zmarłych', 'wojna'],
    contexts: [
      'Sofokles, „Antygona” – prawo do pochówku (Polinejkes, Hektor).',
      '„Pieśń o Rolandzie” – heroizm rycerza, śmierć w walce.',
      'Hanna Krall, „Zdążyć przed Panem Bogiem” – heroizm w walce bez szans (powstanie w getcie).',
      'Henryk Sienkiewicz, „Potop” – odwaga w obronie ojczyzny.',
      'Zbigniew Herbert, „Tren Fortynbrasa” / „Przesłanie Pana Cogito” – postawa wierności wartościom.',
    ],
    must: ['Akcja: ostatni (10.) rok wojny trojańskiej, kilkadziesiąt dni.', 'Gniew Achillesa po odebraniu Bryzeidy.', 'Hektor zabija Patroklosa, Achilles zabija Hektora.', 'Priam wykupuje ciało syna; koniec – pogrzeb Hektora.', 'Cechy eposu: inwokacja, heksametr, epitety stałe, porównania homeryckie, retardacja.'],
    quiz: [
      c('Gniew Achillesa wywołał', ['Agamemnon, który odebrał mu Bryzeidę', 'Hektor', 'Parys', 'Zeus'], 0),
      c('Patroklosa zabija', ['Hektor', 'Achilles', 'Priam', 'Parys'], 0),
      c('„Iliada” kończy się', ['pogrzebem Hektora', 'zdobyciem Troi', 'powrotem Odyseusza', 'śmiercią Achillesa'], 0),
      c('„Szybkonogi Achilles” to przykład', ['epitetu stałego', 'porównania homeryckiego', 'inwokacji', 'retardacji'], 0),
    ],
  },
  {
    id: 'antygona',
    title: 'Antygona',
    author: 'Sofokles',
    epoch: 'Starożytność',
    year: 'ok. 442 r. p.n.e.',
    genre: 'tragedia antyczna',
    summary: `
## Tło – fatum rodu Labdakidów
Antygona jest córką **Edypa**, który nieświadomie zabił ojca i poślubił matkę Jokastę. Nad rodem ciąży klątwa. Po wygnaniu Edypa jego synowie **Eteokles i Polinejkes** walczyli o władzę w Tebach i zginęli z rąk siebie nawzajem. Władzę objął ich wuj **Kreon**.

## Przebieg
- Kreon wydaje **zakaz pochowania Polinejkesa**, bo ten napadł na Teby z obcym wojskiem (zdrajca). Eteoklesa chowa z honorami. Kto złamie zakaz – zginie.
- **Antygona** postanawia pochować brata, bo każe tak **prawo boskie** i miłość siostrzana. Jej siostra **Ismena** boi się i odmawia.
- Strażnik donosi, że ktoś posypał ciało ziemią. Antygona zostaje schwytana przy zwłokach. Przed Kreonem **nie zaprzecza** i broni się: prawa bogów są ważniejsze od rozkazów człowieka. „Współkochać przyszłam, nie współnienawidzić”.
- Ismena chce dzielić winę, ale Antygona nie pozwala.
- **Hajmon**, syn Kreona i narzeczony Antygony, prosi ojca o łaskę, mówi, że lud współczuje Antygonie. Kreon odrzuca radę i obraża syna.
- Kreon skazuje Antygonę na **zamurowanie żywcem w grocie**.
- Ślepy wróżbita **Tyrezjasz** ostrzega, że bogowie są zagniewani, i przepowiada nieszczęście. Kreon wreszcie ustępuje – **za późno**.
- Antygona **powiesiła się** w grocie. Hajmon przebija się mieczem przy jej ciele. Na wieść o śmierci syna samobójstwo popełnia żona Kreona, **Eurydyka**. Kreon zostaje sam, złamany: rozumie swoją winę.

## Tragizm
Obie strony mają **swoje racje**: Antygona – prawo boskie i rodzinne; Kreon – prawo państwa i porządek. Każdy wybór prowadzi do klęski → **konflikt tragiczny**. Kreon popełnia błąd **pychy (hybris)**.

## Budowa tragedii antycznej
prolog → parodos (wejście chóru) → epejsodia (sceny dialogowe) przeplatane **stasimonami** (pieśni chóru) → eksodos. Zasada **trzech jedności** (czasu, miejsca, akcji), **chór** komentuje, **katharsis** – oczyszczenie widza przez litość i trwogę. Na scenie są najwyżej trzej aktorzy; o śmierci dowiadujemy się z relacji posłańca. Słynny stasimon chóru: „Wiele jest dziwów, lecz nie ma nic dziwniejszego nad człowieka”.`,
    characters: [
      ['Antygona', 'córka Edypa; wierna prawom boskim i rodzinie, nieugięta, gotowa umrzeć'],
      ['Kreon', 'król Teb; broni prawa państwowego, uparty, pyszny; tragicznie traci rodzinę'],
      ['Ismena', 'siostra Antygony, łagodna i lękliwa'],
      ['Hajmon', 'syn Kreona, narzeczony Antygony'],
      ['Tyrezjasz', 'ślepy wróżbita, głos bogów'],
      ['Chór', 'starcy tebańscy, komentują zdarzenia'],
    ],
    motifs: ['prawa boskie a prawa ludzkie', 'człowiek wobec przeznaczenia (fatum)', 'władza i jej granice', 'pycha i jej kara', 'miłość siostrzana', 'bunt jednostki wobec państwa', 'obowiązek pochówku'],
    contexts: [
      'Homer, „Iliada” – Priam prosi o ciało Hektora (prawo do pochówku).',
      'Szekspir, „Makbet” – władza niszczy człowieka.',
      'Jean Anouilh, „Antygona” – współczesna wersja (1944).',
      'Zbigniew Herbert, „Potęga smaku” – nieugiętość jako sprawa smaku i godności.',
      'Ks. Jerzy Popiełuszko / prawo naturalne – przykład z historii: sprzeciw sumienia wobec władzy.',
    ],
    must: ['Kreon zakazuje pochowania Polinejkesa (najechał Teby).', 'Antygona: prawo boskie > prawo ludzkie; Ismena odmawia pomocy.', 'Kara: zamurowanie w grocie.', 'Giną: Antygona (powiesiła się), Hajmon, Eurydyka.', 'Konflikt tragiczny – obie strony mają racje; hybris Kreona.', 'Budowa: prolog, parodos, epejsodia, stasimony, eksodos; trzy jedności; chór; katharsis.'],
    quiz: [
      c('Kreon zakazał pochowania', ['Polinejkesa', 'Eteoklesa', 'Edypa', 'Hajmona'], 0),
      c('Antygona została skazana na', ['zamurowanie w grocie', 'ścięcie', 'wygnanie', 'ukamienowanie'], 0),
      c('Kto ostrzega Kreona przed gniewem bogów?', ['Tyrezjasz', 'Hajmon', 'Ismena', 'chór'], 0),
      c('Pieśń chóru w tragedii to', ['stasimon', 'epejsodion', 'prolog', 'eksodos'], 0),
      c('Konflikt tragiczny polega na tym, że', ['każdy wybór prowadzi do klęski', 'bohater wygrywa z losem', 'nie ma winnego', 'bogowie nie istnieją'], 0),
    ],
  },
  {
    id: 'lament',
    title: 'Lament świętokrzyski (Żale Matki Bożej pod krzyżem)',
    author: 'autor nieznany',
    epoch: 'Średniowiecze',
    year: 'XV w.',
    genre: 'liryka religijna; planctus (lament), monolog liryczny',
    summary: `
Utwór zaczyna się słowami **„Posłuchajcie, bracia miła”**. Mówi **Maryja stojąca pod krzyżem**, na którym umiera Jezus. Nazwa pochodzi od klasztoru na Świętym Krzyżu, gdzie odnaleziono rękopis.

## Przebieg monologu
1. Maryja zwraca się do **ludzi**, prosząc, by wysłuchali jej skargi i zobaczyli jej ból.
2. Zwraca się do **Syna**: prosi, by przemówił do niej, chce mu ulżyć, lecz nie może – nie dosięgnie, nie poda wody, nie otrze krwi. Prosi, by umarł razem z nią.
3. Wspomina **archanioła Gabriela**, który zwiastował jej radość („Gabryjelu, ty, sprawco wesela”) – teraz ta obietnica wydaje się kłamstwem.
4. Zwraca się do **matek**: prosi, by modliły się, żeby nie spotkało ich podobne nieszczęście.

## Znaczenie
Maryja nie jest tu Królową Niebios, lecz **zwykłą, zrozpaczoną matką** – to **humanizacja** postaci świętej, charakterystyczna dla średniowiecznej religijności franciszkańskiej (współczucie dla cierpienia Chrystusa i Matki). Język jest prosty, emocjonalny: pytania retoryczne, wykrzyknienia, zdrobnienia („Synku miły i wybrany”).`,
    characters: [['Maryja', 'matka cierpiąca pod krzyżem syna; przedstawiona po ludzku, bezradna i zrozpaczona']],
    motifs: ['cierpiąca matka (Mater Dolorosa)', 'cierpienie niezawinione', 'humanizacja sacrum', 'bezradność wobec śmierci', 'lament'],
    contexts: [
      '„Stabat Mater dolorosa” – średniowieczna sekwencja o Matce Bolesnej.',
      'Michał Anioł, „Pietà” – Maryja z ciałem Syna.',
      'Krzysztof Kamil Baczyński / Kazimierz Wierzyński – matki tracące synów w wojnie.',
      'Jan Parandowski, „Mitologia” – Demeter i Niobe jako cierpiące matki.',
      'Anna Akhmatowa, „Requiem” – matka czekająca pod więzieniem.',
    ],
    must: ['Pierwsze słowa: „Posłuchajcie, bracia miła”.', 'Monolog Maryi pod krzyżem – zwraca się do ludzi, Syna, Gabriela i matek.', 'Humanizacja Maryi – zwykła matka.', 'Gatunek: planctus (lament).', 'Wpływ duchowości franciszkańskiej.'],
    quiz: [
      c('W „Lamencie świętokrzyskim” mówi', ['Maryja', 'Chrystus', 'apostoł Jan', 'archanioł Gabriel'], 0),
      c('Maryja przedstawiona jest przede wszystkim jako', ['cierpiąca, bezradna matka', 'Królowa Niebios', 'surowy sędzia', 'nauczycielka'], 0),
      c('Do kogo Maryja NIE zwraca się w utworze?', ['do Piłata', 'do Syna', 'do matek', 'do Gabriela'], 0),
    ],
  },
  {
    id: 'polikarp',
    title: 'Rozmowa Mistrza Polikarpa ze Śmiercią',
    author: 'autor nieznany',
    epoch: 'Średniowiecze',
    year: 'XV w.',
    genre: 'dialog moralizatorski (wierszem), satyra',
    summary: `
Mistrz **Polikarp** – mędrzec, uczony – modli się, by mógł ujrzeć Śmierć. Jego prośba zostaje spełniona. Śmierć ukazuje mu się jako **odrażająca, chuda, naga kobieta** o żółtej twarzy, z odpadającym nosem, krwawymi łzami, przepasana chustą, **z kosą w ręku**. Polikarp ze strachu pada na ziemię.

## Rozmowa
- Polikarp pyta Śmierć o jej moc i o to, jak uniknąć śmierci. Śmierć odpowiada, że **nikt jej nie ucieknie** – ani mądry, ani bogaty, ani możny. Nie pomogą pieniądze, wiedza, medycyna.
- Śmierć wylicza **stany społeczne**, które zabiera: papieża, królów, rycerzy, mieszczan, kupców, księży, mnichów, chłopów. **Wobec śmierci wszyscy są równi** (egalitaryzm śmierci).
- Pojawiają się elementy **satyry**: Śmierć wytyka wady różnych grup – chciwość sędziów i urzędników, lichwę, nieuczciwość karczmarzy, lenistwo i obłudę zakonników – i zapowiada im karę.

## Sens
Utwór przypomina o **nieuchronności śmierci** (memento mori) i wzywa do życia moralnego, bo po śmierci czeka sąd. Jest polską wersją motywu **danse macabre (tańca śmierci)** – Śmierć prowadzi w korowodzie przedstawicieli wszystkich stanów. Groza miesza się tu z **groteską i humorem**.`,
    characters: [
      ['Mistrz Polikarp', 'uczony, który chciał zobaczyć Śmierć; przerażony, zadaje pytania'],
      ['Śmierć', 'odrażająca kobieta z kosą; pewna siebie, ironiczna; zabiera ludzi wszystkich stanów'],
    ],
    motifs: ['danse macabre – taniec śmierci', 'memento mori', 'egalitaryzm śmierci', 'przemijanie', 'satyra na stany', 'groteska'],
    contexts: [
      'Bernt Notke, „Taniec śmierci” (obraz w Tallinie) – korowód stanów ze Śmiercią.',
      'Księga Koheleta – przemijanie i marność.',
      'Wyspiański, „Wesele” – chocholi taniec jako taniec martwoty.',
      'Barokowe vanitas (Naborowski, „Krótkość żywota”).',
      'Tadeusz Borowski / literatura obozowa – śmierć masowa, odarta z godności (kontrast).',
    ],
    must: ['Polikarp prosi, by zobaczyć Śmierć.', 'Wygląd Śmierci: naga, chuda, żółta, z kosą.', 'Wszyscy są równi wobec śmierci.', 'Satyra na stany (sędziowie, karczmarze, zakonnicy…).', 'Motyw danse macabre i memento mori; groteska.'],
    quiz: [
      c('Śmierć w utworze ukazana jest jako', ['odrażająca, chuda kobieta z kosą', 'piękna młoda dziewczyna', 'rycerz w zbroi', 'anioł'], 0),
      c('Najważniejsza myśl utworu to', ['wszyscy są równi wobec śmierci', 'mądrzy mogą oszukać śmierć', 'bogaci żyją wiecznie', 'śmierć dotyczy tylko grzeszników'], 0),
      c('Motyw korowodu ludzi wszystkich stanów prowadzonego przez śmierć to', ['danse macabre', 'vanitas', 'carpe diem', 'arkadia'], 0),
    ],
  },
  {
    id: 'roland',
    title: 'Pieśń o Rolandzie (fragmenty)',
    author: 'autor nieznany (francuski)',
    epoch: 'Średniowiecze',
    year: 'XI/XII w.',
    genre: 'chanson de geste – epos rycerski',
    summary: `
Akcja dotyczy wyprawy **Karola Wielkiego** do Hiszpanii przeciw Saracenom (muzułmanom). Po siedmiu latach wojny opiera się tylko Saragossa, gdzie panuje król **Marsylion**.

## Zdrada
Marsylion udaje, że chce się poddać. Na posła do niego zostaje wysłany **Ganelon** – z namowy swojego pasierba **Rolanda**. Ganelon, urażony i zazdrosny, **zdradza**: umawia się z Saracenami, że napadną na **tylną straż** wojsk Karola, którą dowodzić będzie Roland.

## Roncevaux
W wąwozie **Roncevaux** (Roncesvalles) w Pirenejach na dwudziestotysięczną straż napada ogromna armia saraceńska. Przyjaciel Rolanda, rozważny **Oliwier**, trzykrotnie prosi go, by zadął w róg **Olifant** i wezwał Karola. Roland odmawia – uważa, że wzywanie pomocy byłoby **hańbą**. Rycerze walczą bohatersko, zabijając tysiące wrogów, ale giną jeden po drugim (także Oliwier i arcybiskup Turpin).

## Śmierć Rolanda
Gdy jest już za późno, Roland dmie w róg tak mocno, że pękają mu skronie. Umierając, próbuje skruszyć o skałę swój miecz **Durendal**, by nie dostał się w ręce wrogów (miecz się nie łamie). Kładzie się **twarzą w stronę wroga**, z mieczem i rogiem pod sobą, spowiada się i wyciąga ku niebu **rękawicę** w geście hołdu lennego dla Boga. Jego duszę zabierają do raju anioły (m.in. **archanioł Gabriel**).

## Zemsta
Karol Wielki wraca, pokonuje Saracenów (Bóg zatrzymuje słońce, by mógł dokończyć zemsty). Ganelon zostaje osądzony i **rozerwany końmi**.

## Wzorzec rycerza
Roland: **odwaga, wierność władcy (seniorowi), Bogu i ojczyźnie („słodka Francja”), honor** ważniejszy od życia, siła nadludzka (hiperbola). Wadą jest **pycha i brawura** – przez nie giną towarzysze.`,
    characters: [
      ['Roland', 'siostrzeniec Karola Wielkiego, wzorowy rycerz: odważny, wierny, honorowy, ale pyszny'],
      ['Oliwier', 'przyjaciel Rolanda, rozważny („Roland był mężny, Oliwier mądry”)'],
      ['Ganelon', 'ojczym Rolanda, zdrajca'],
      ['Karol Wielki', 'cesarz, wzór władcy, mściciel'],
      ['Turpin', 'arcybiskup-rycerz, ginie w bitwie'],
    ],
    motifs: ['wzorzec rycerza', 'honor i odwaga', 'zdrada', 'śmierć bohatera', 'przyjaźń', 'wiara i walka z niewiernymi', 'pycha'],
    contexts: [
      'Homer, „Iliada” – heroizm Hektora i Achillesa.',
      'Henryk Sienkiewicz, „Potop” – odwaga Kmicica, obrona ojczyzny i wiary.',
      'Miguel de Cervantes, „Don Kichot” – parodia ideału rycerskiego.',
      '„Kamienie na szaniec” A. Kamińskiego – Rudy, Alek, Zośka jako „rycerze” XX wieku.',
      '„Bogurodzica” – pieśń rycerstwa polskiego (Grunwald).',
    ],
    must: ['Zdrajca: Ganelon (ojczym Rolanda).', 'Bitwa w wąwozie Roncevaux, tylna straż.', 'Róg Olifant – Roland długo nie chce wezwać pomocy (honor).', 'Miecz Durendal, rękawica podana Bogu.', 'Ganelon rozerwany końmi.', 'Ideał rycerza: wierność Bogu, władcy, ojczyźnie; honor.'],
    quiz: [
      c('Kto zdradził Rolanda?', ['Ganelon', 'Oliwier', 'Turpin', 'Marsylion'], 0),
      c('Roland długo nie chciał zadąć w róg, bo', ['uważał to za hańbę', 'róg był pęknięty', 'nie umiał', 'Karol zakazał'], 0),
      c('Jak nazywał się miecz Rolanda?', ['Durendal', 'Excalibur', 'Szczerbiec', 'Olifant'], 0),
      c('Umierający Roland kładzie się', ['twarzą do wroga', 'twarzą do Francji', 'na wznak', 'obok Oliwiera'], 0),
    ],
  },
  {
    id: 'makbet',
    title: 'Makbet',
    author: 'William Szekspir',
    epoch: 'Renesans (teatr elżbietański)',
    year: 'ok. 1606',
    genre: 'tragedia',
    summary: `
Akcja dzieje się w średniowiecznej **Szkocji**. Dzielny wódz **Makbet**, tan Glamis, wraca z **Bankiem** ze zwycięskiej bitwy.

## Przepowiednie
Na wrzosowisku spotykają **trzy czarownice (wiedźmy)**. Przepowiadają Makbetowi, że będzie **tanem Kawdoru** i **królem**, a Bankowi – że będzie **ojcem królów**, choć sam królem nie zostanie. Wkrótce Makbet dowiaduje się, że król **Dunkan** nadał mu tytuł tana Kawdoru. W Makbecie budzi się żądza władzy.

## Zabójstwo króla
Makbet pisze o przepowiedni żonie. **Lady Makbet** jest bardziej zdecydowana od niego: zarzuca mu tchórzostwo i przekonuje, by zabił króla, który przyjeżdża do ich zamku w **Inverness**. Nocą Makbet morduje śpiącego Dunkana; Lady Makbet podrzuca sztylety i smaruje krwią śpiących strażników, a Makbet zabija ich rzekomo w gniewie. Synowie króla – **Malkolm** (do Anglii) i Donalbain (do Irlandii) – uciekają, co rzuca na nich podejrzenie. **Makbet zostaje królem.**

## Kolejne zbrodnie
- Bojąc się przepowiedni o potomkach Banka, Makbet nasyła morderców na **Banka**; jego syn **Fleance** ucieka.
- Na uczcie Makbet widzi **ducha Banka** – zachowuje się jak szalony.
- Ponownie odwiedza wiedźmy. Słyszy: strzeż się **Makdufa**; **nikt zrodzony z kobiety** mu nie zaszkodzi; nie zginie, **dopóki las birnamski nie podejdzie pod Dunsinane**. Czuje się bezpieczny.
- Makduf ucieka do Anglii, więc Makbet każe zabić jego **żonę i dzieci**. Staje się okrutnym tyranem.

## Upadek
- **Lady Makbet** popada w obłęd: **lunatykuje**, próbuje zmyć z rąk niewidzialną krew („Precz, przeklęta plamo!”). Umiera (prawdopodobnie samobójstwo).
- Makbet, słysząc o jej śmierci, wypowiada słynny monolog o bezsensie życia: życie to „przechodni półcień”, „opowieść idioty, pełna wrzasku i wściekłości, nic nie znacząca”.
- Żołnierze Malkolma idą zasłonięci **gałęziami z lasu birnamskiego** – „las” idzie na Dunsinane.
- Makduf wyjawia, że został „**przed czasem wyjęty z łona matki**” (nie urodził się normalnie) – i zabija Makbeta. Królem zostaje **Malkolm**.

## Sens
Makbet nie jest zły od początku – zbrodnia **pociąga kolejne zbrodnie**, a sumienie niszczy sprawców. Czy decydował o losie, czy był sterowany przez przepowiednie? Wiedźmy tylko przepowiedziały – **wybór należał do Makbeta**. Teatr szekspirowski: łamanie zasady trzech jedności, mieszanie tragizmu i komizmu (scena z odźwiernym), fantastyka, sceny zbiorowe, akcja na scenie.`,
    characters: [
      ['Makbet', 'wódz, potem król-tyran; ambitny, z czasem okrutny, dręczony wyrzutami sumienia i lękiem'],
      ['Lady Makbet', 'żona; ambitna i bezwzględna na początku, potem popada w obłęd (sumienie)'],
      ['Banko', 'towarzysz Makbeta, uczciwy; zamordowany'],
      ['Dunkan', 'dobry król Szkocji, zamordowany we śnie'],
      ['Makduf', 'szlachcic, któremu Makbet zabił rodzinę; pokonuje Makbeta'],
      ['Trzy wiedźmy', 'przepowiadają przyszłość, rozbudzają ambicję'],
      ['Malkolm', 'syn Dunkana, nowy król'],
    ],
    motifs: ['władza i jej demoralizujący wpływ', 'wina, kara i sumienie', 'przeznaczenie a wolna wola', 'ambicja', 'zbrodnia rodzi zbrodnię', 'szaleństwo', 'fantastyka (wiedźmy, duch)'],
    contexts: [
      'Sofokles, „Antygona” – władca uparty i pyszny (Kreon), kara za błędy.',
      'Fiodor Dostojewski, „Zbrodnia i kara” – zbrodnia i wyrzuty sumienia.',
      'Juliusz Słowacki, „Balladyna” – zbrodnie dla władzy (wzorowana na „Makbecie”).',
      'George Orwell, „Rok 1984” – totalitarna władza niszcząca człowieka.',
      'Niccolò Machiavelli, „Książę” – władza ponad moralnością.',
    ],
    must: ['Przepowiednie: tan Kawdoru, król; Banko – ojciec królów.', 'Lady Makbet namawia do zabójstwa Dunkana w Inverness.', 'Zabici: Dunkan, straże, Banko, rodzina Makdufa.', 'Las birnamski idzie na Dunsinane; Makduf nie urodził się „normalnie”.', 'Lady Makbet lunatykuje i zmywa krew z rąk; umiera.', 'Monolog „życie jest opowieścią idioty”.', 'Teatr elżbietański: łamie trzy jedności, łączy tragizm z komizmem.'],
    quiz: [
      c('Kto namawia Makbeta do zabicia króla?', ['Lady Makbet', 'Banko', 'wiedźmy', 'Makduf'], 0),
      c('Bankowi wiedźmy przepowiedziały, że', ['będzie ojcem królów', 'zostanie królem', 'zginie w bitwie', 'zostanie tanem Kawdoru'], 0),
      c('Makbeta zabija', ['Makduf', 'Malkolm', 'Fleance', 'Banko'], 0),
      c('Lady Makbet w obłędzie', ['zmywa z rąk niewidzialną krew', 'widzi ducha Dunkana na uczcie', 'śpiewa piosenki', 'pali listy'], 0),
      c('„Makbet” różni się od tragedii antycznej, bo', ['łamie zasadę trzech jedności', 'ma chór', 'nie ma bohatera tragicznego', 'jest pisany prozą bez dialogów'], 0),
    ],
  },
  {
    id: 'skapiec',
    title: 'Skąpiec',
    author: 'Molier',
    epoch: 'Klasycyzm francuski (XVII w.)',
    year: '1668',
    genre: 'komedia (charakterów)',
    summary: `
Akcja toczy się w **Paryżu**, w domu bogatego wdowca **Harpagona** – skąpca, który najbardziej na świecie kocha pieniądze.

## Sytuacja wyjściowa
- Córka **Eliza** kocha **Walerego**, który – by być blisko niej – zatrudnił się u Harpagona jako **rządca (intendent)** i schlebia skąpcowi.
- Syn **Kleant** kocha ubogą **Marianę**, ale nie ma pieniędzy, bo ojciec trzyma go krótko.
- Harpagon zakopał w ogrodzie **szkatułkę z 10 000 talarów** i stale drży o nią.

## Plany Harpagona
Harpagon postanawia:
- sam **poślubić Marianę** (swatką jest sprytna **Frozyna**),
- Elizę wydać za starego, bogatego **Anzelma**, bo ten weźmie ją **„bez posagu”** (Harpagon powtarza to zdanie jak zaklęcie),
- Kleanta ożenić z bogatą wdową.

## Komiczne sceny
- Kleant szuka pożyczki u lichwiarza na wysoki procent – okazuje się, że **lichwiarzem jest jego własny ojciec**. Ojciec i syn obrzucają się wyzwiskami.
- Przygotowania do kolacji: Harpagon każe kucharzowi (i stangretowi w jednej osobie) **Jakubowi** przyrządzić ucztę za grosze; Walery głosi, że „trzeba jeść, aby żyć, a nie żyć, aby jeść”.
- Harpagon i Kleant rywalizują o Marianę; Kleant zdejmuje ojcu z palca pierścień i daje go Marianie w imieniu ojca.

## Kradzież szkatułki
**Strzałka (La Flèche)**, sługa Kleanta, kradnie szkatułkę. Harpagon wpada w szał – słynny monolog: „Złodzieje! Rozbójnicy! … Ach, moje biedne pieniądze!” – podejrzewa wszystkich, nawet siebie. Jakub w zemście oskarża Walerego. Przesłuchiwany Walery myśli, że chodzi o jego zaręczyny z Elizą – zabawne **qui pro quo** (on mówi o Elizie, Harpagon o szkatułce).

## Rozwiązanie
Przybywa **Anzelm** i okazuje się, że jest **ojcem Walerego i Mariany** (rodzina rozdzielona przez katastrofę morską). Kleant oddaje szkatułkę w zamian za zgodę na ślub z Marianą. Harpagon zgadza się na **oba śluby**, pod warunkiem że Anzelm pokryje wszystkie koszty i sprawi mu nowe ubranie – a on sam wraca do **ukochanej szkatułki**.

## Sens
Pieniądze nie dają Harpagonowi szczęścia – czynią go **samotnym, podejrzliwym i śmiesznym**, niszczą relacje z dziećmi. Komedia klasycystyczna: **trzy jedności**, komizm postaci, sytuacji i słowa, dydaktyzm.`,
    characters: [
      ['Harpagon', 'skąpiec, wdowiec; tyran wobec dzieci, podejrzliwy, śmieszny; stawia pieniądze ponad ludzi'],
      ['Kleant', 'syn Harpagona, zakochany w Marianie, rozrzutny'],
      ['Eliza', 'córka Harpagona, kocha Walerego'],
      ['Walery', 'ukochany Elizy, udaje sługę; syn Anzelma'],
      ['Mariana', 'uboga dziewczyna kochana przez Kleanta; córka Anzelma'],
      ['Frozyna', 'sprytna swatka'],
      ['Strzałka (La Flèche)', 'sługa Kleanta, kradnie szkatułkę'],
      ['Anzelm', 'bogaty szlachcic, ojciec Walerego i Mariany'],
    ],
    motifs: ['chciwość, skąpstwo', 'pieniądz a szczęście', 'konflikt pokoleń (rodzice – dzieci)', 'miłość', 'władza ojca', 'komizm'],
    contexts: [
      'Bolesław Prus, „Lalka” – rola majątku w relacjach (Łęccy, Wokulski).',
      'Aleksander Fredro, „Zemsta” – Papkin, Cześnik, Rejent; komedia charakterów.',
      'Charles Dickens, „Opowieść wigilijna” – Scrooge, skąpiec przemieniony.',
      'Mrożek, „Tango” – konflikt pokoleń (odwrócony).',
      'Kochanowski, pieśni – horacjański złoty środek wobec bogactwa.',
    ],
    must: ['Harpagon – skąpiec, szkatułka z 10 000 talarów w ogrodzie.', '„Bez posagu!” – argument za wydaniem Elizy za Anzelma.', 'Kleant pożycza od lichwiarza – to jego ojciec.', 'Kradzież: Strzałka; qui pro quo z Walerym.', 'Anzelm ojcem Walerego i Mariany; happy end.', 'Klasycyzm: trzy jedności; komizm postaci, sytuacji, słowa.'],
    quiz: [
      c('Harpagon chce wydać Elizę za Anzelma, ponieważ', ['ten weźmie ją bez posagu', 'Eliza go kocha', 'Anzelm jest młody', 'tak każe król'], 0),
      c('Kto ukradł szkatułkę?', ['Strzałka', 'Walery', 'Jakub', 'Frozyna'], 0),
      c('Kim okazuje się Anzelm?', ['ojcem Walerego i Mariany', 'bratem Harpagona', 'lichwiarzem', 'sędzią'], 0),
      c('Kleant szukał pożyczki i okazało się, że lichwiarzem jest', ['jego ojciec', 'Anzelm', 'Walery', 'Frozyna'], 0),
    ],
  },
  {
    id: 'krasicki',
    title: 'Satyry (np. „Żona modna”, „Do króla”, „Pijaństwo”)',
    author: 'Ignacy Krasicki',
    epoch: 'Oświecenie',
    year: '1779–1784',
    genre: 'satyra',
    summary: `
**Satyra** to utwór, który **ośmiesza wady** ludzi, grup społecznych lub obyczajów, by je poprawić (dydaktyzm). Krasicki – „książę poetów”, biskup warmiński – posługuje się **ironią**, dialogiem i scenkami z życia.

## „Żona modna”
Dialog **pana Piotra** z przyjacielem (narratorem). Piotr ożenił się **dla posagu** (wioski) z kobietą **modną**, czyli zapatrzoną we francuskie wzory. Już w drodze do dworu żona żąda karety zamiast kolaski, a potem przerabia wszystko: dworek zamienia w salon pełen mebli w modnym stylu, sprowadza **egzotyczne zwierzęta** (papugi, małpy), wymaga strojów, koncertów, gości, francuskich książek, wiecznych zabaw. Szlacheckie gospodarstwo podupada, Piotr popada w długi. Puenta: **„Bóg dał żonę modną”** – żeniąc się dla pieniędzy, Piotr sam ściągnął na siebie nieszczęście.
*Wady:* ślepe naśladowanie mody cudzoziemskiej, rozrzutność, małżeństwo z wyrachowania.

## „Do króla”
Satyra **ironiczna** – narrator udaje, że wylicza „winy” króla **Stanisława Augusta Poniatowskiego**: że jest **Polakiem** (a nie cudzoziemcem), **młody**, pochodzi z rodu szlacheckiego, a nie królewskiego, że jest **wykształcony** i hojny dla artystów. W rzeczywistości to **zalety** króla – satyra ośmiesza jego krytyków: zacofaną, warcholską szlachtę.

## „Pijaństwo”
Dialog dwóch szlachciców: jeden opowiada, jak upił się na imieninach, kłócił się i bił, a obiecując poprawę, od razu daje się namówić na kolejny kieliszek. Krasicki pokazuje **nałóg** i słabość woli.

> Ważne pojęcia: ironia (mówienie odwrotnie do zamierzonego sensu), dydaktyzm, satyra, krytyka sarmatyzmu, klasycyzm.`,
    characters: [
      ['Pan Piotr', '„Żona modna” – szlachcic, który ożenił się dla posagu'],
      ['Żona modna', 'snobka zapatrzona w modę francuską, rozrzutna'],
      ['Stanisław August', '„Do króla” – król, którego „wady” są w istocie zaletami'],
    ],
    motifs: ['wady ludzkie w krzywym zwierciadle', 'moda cudzoziemska, snobizm', 'małżeństwo z rozsądku/dla pieniędzy', 'pijaństwo', 'krytyka szlachty', 'ironia'],
    contexts: [
      'Molier, „Skąpiec” – ośmieszenie wady (chciwość).',
      'Gombrowicz, „Ferdydurke” – groteskowa krytyka społeczeństwa (Młodziakowie – nowoczesność).',
      'Wyspiański, „Wesele” – krytyka społeczeństwa (inteligencja, chłopi).',
      'Krasicki, bajki („Jagnię i wilcy”) – dydaktyzm, alegoria.',
      'Mrożek, „Tango” – satyra na współczesność.',
    ],
    must: ['Satyra = ośmieszanie wad w celu poprawy.', '„Żona modna” – ożenek dla posagu, moda francuska, rozrzutność.', '„Do króla” – ironia: „wady” króla to zalety.', 'Krasicki – biskup, „książę poetów”, oświecenie.'],
    quiz: [
      c('Pan Piotr z „Żony modnej” ożenił się', ['dla posagu', 'z wielkiej miłości', 'z przymusu rodziców', 'dla tytułu'], 0),
      c('Główny środek w satyrze „Do króla” to', ['ironia', 'hiperbola', 'onomatopeja', 'anafora'], 0),
      c('Celem satyry jest', ['ośmieszenie wad, by je poprawić', 'opisanie przyrody', 'wyrażenie żalu po zmarłym', 'opowiedzenie o bohaterach'], 0),
    ],
  },
  {
    id: 'bogurodzica',
    title: 'Bogurodzica',
    author: 'autor nieznany',
    epoch: 'Średniowiecze',
    year: 'XIII–XIV w. (zapis z 1407 r.)',
    genre: 'pieśń religijna (modlitwa); hymn',
    summary: `
Najstarsza zachowana polska pieśń religijna i **najstarszy polski tekst poetycki**. Nazywana **carmen patrium** (pieśń ojczysta) – śpiewało ją rycerstwo przed bitwami, m.in. **pod Grunwaldem (1410)**; była też hymnem koronacyjnym.

## Budowa i treść (dwie najstarsze strofy)
- **Strofa I** – prośba do **Maryi** („Bogurodzico dziewico, Bogiem sławiena Maryja”), by uprosiła u Syna łaskę dla ludzi: „Zyszczy nam, spuści nam” (zdobądź dla nas, ześlij nam).
- **Strofa II** – prośba do **Jezusa** („Twego dziela Krzciciela, bożycze”) przez wstawiennictwo **Jana Chrzciciela**: o „zbożny pobyt” (pobożne, dostatnie życie na ziemi) i „po żywocie rajski przebyt” (zbawienie po śmierci).

Układ przypomina średniowieczną ikonografię **deesis** – Chrystus na tronie, po bokach wstawiający się za ludźmi Maryja i Jan Chrzciciel. Pośrednicy przekazują prośby ludzi Bogu – to **hierarchia** świata średniowiecznego.

## Język
**Archaizmy** (Bogiem sławiena, zwolena, bożycze, zbożny), wołacze, rymy wewnętrzne, paralelizm składniowy, refren **„Kyrieleison”**.`,
    characters: [['Maryja, Jan Chrzciciel, Chrystus', 'pośrednicy i adresat modlitwy (układ deesis)']],
    motifs: ['modlitwa', 'pośrednictwo świętych', 'hierarchia świata', 'pieśń rycerska i narodowa'],
    contexts: ['„Lament świętokrzyski” – inny obraz Maryi (cierpiąca matka).', '„Pieśń o Rolandzie” – wiara i rycerstwo.', 'Sienkiewicz, „Krzyżacy” – śpiewanie Bogurodzicy pod Grunwaldem.', 'Kochanowski, „Czego chcesz od nas, Panie” – inny obraz Boga (renesansowy).'],
    must: ['Najstarszy polski tekst poetycki (zapis 1407).', 'Śpiewana pod Grunwaldem – carmen patrium.', 'Strofa I do Maryi, II do Chrystusa przez Jana Chrzciciela.', 'Układ deesis, prośba o „zbożny pobyt” i „rajski przebyt”.', 'Archaizmy, refren Kyrieleison.'],
    quiz: [
      c('„Bogurodzica” była śpiewana przez rycerstwo m.in. pod', ['Grunwaldem', 'Wiedniem', 'Cedynią', 'Legnicą'], 0),
      c('Pośrednikiem w drugiej strofie jest', ['Jan Chrzciciel', 'św. Piotr', 'archanioł Michał', 'św. Wojciech'], 0),
      c('Układ: Chrystus, a po bokach Maryja i Jan, to', ['deesis', 'pieta', 'danse macabre', 'vanitas'], 0),
    ],
  },
  {
    id: 'kochanowski',
    title: 'Pieśni i Treny',
    author: 'Jan Kochanowski',
    epoch: 'Renesans',
    year: 'Pieśni – 1586 (wyd.), Treny – 1580',
    genre: 'pieśń, tren (liryka)',
    summary: `
## Pieśni – renesansowa filozofia życia
- **„Czego chcesz od nas, Panie, za Twe hojne dary?”** – hymn pochwalny: Bóg jako **Stwórca-architekt** harmonijnego, pięknego świata; nie potrzebuje złota, tylko wdzięczności. Obraz przyrody i ładu kosmosu (cztery pory roku).
- **Pieśni filozoficzne (horacjańskie)**: **carpe diem** – korzystaj z chwili („Chcemy sobie być radzi”), **złoty środek** (umiar), **stoicyzm** – zachowaj spokój w szczęściu i nieszczęściu („Nie porzucaj nadzieje”), **epikureizm** – ciesz się życiem z umiarem. Cnota i sława są trwalsze niż bogactwo („Pieśń IX”, „Pieśń XXIV” – „Nie umrę cały”, *non omnis moriar*, motyw horacjański).
- **Pieśń o dobrej sławie**, **Pieśń XII** (*Niezwykłym i nie leda piórem*) – poeta zostanie zapamiętany.

## Treny (1580) – po śmierci córki Urszulki
Cykl **19 trenów** napisanych po śmierci 2,5-letniej córki **Urszuli**. Tren to utwór żałobny – dotąd poświęcany ważnym osobom, a Kochanowski pisze go o małym dziecku (nowatorstwo).
- **Tren I** – rozpacz, ból („Wszytki płacze, wszytki łzy Heraklitowe…”).
- **Tren V** – Urszulka porównana do drzewka oliwnego ściętego przez ogrodnika.
- **Tren VII** – ubiory córeczki, które nie przydadzą się do ślubu.
- **Tren VIII** – „Wielkieś mi uczyniła pustki w domu moim, moja droga Orszulo, tym zniknienim swoim”.
- **Tren IX** – **kryzys światopoglądowy**: rozczarowanie filozofią, mądrością, stoicyzmem („Kupić by cię, Mądrości, za drogie pieniądze”).
- **Tren X** – gdzie jesteś? Ojciec szuka córki w różnych zaświatach, wątpi („Gdzieśkolwiek jest, jeśliś jest…”).
- **Tren XI** – „Cnota, skarb wieczny” – zwątpienie w cnotę i sprawiedliwość.
- **Tren XIX (Sen)** – **ukojenie**: we śnie ukazuje się zmarła matka poety z Urszulką na ręku. Mówi, że córka jest szczęśliwa w niebie, i radzi: **„Ludzkie przygody ludzkie noś”** – znoś los po ludzku, z umiarem.

Kompozycja jak w **pogrzebie antycznym**: pochwała zmarłej – żal – pocieszenie – pouczenie.`,
    characters: [['Podmiot liryczny (ojciec)', 'cierpiący po śmierci córki, przechodzi kryzys i odzyskuje równowagę'], ['Urszulka', 'zmarła córeczka poety'], ['Matka poety', 'pocieszycielka w Trenie XIX']],
    motifs: ['Bóg-architekt, harmonia świata', 'carpe diem, złoty środek, stoicyzm', 'śmierć dziecka, żałoba', 'kryzys światopoglądowy', 'nieśmiertelność poety (non omnis moriar)', 'cierpienie i pocieszenie'],
    contexts: ['Księga Hioba – cierpienie i wiara wystawiona na próbę.', 'Mitologia – Orfeusz szukający Eurydyki w zaświatach (Tren X).', 'Horacy, „Exegi monumentum” – „nie wszystek umrę”.', 'Księga Koheleta – przemijanie i umiar.', 'Wisława Szymborska, „Kot w pustym mieszkaniu” – żałoba, pustka po zmarłym.'],
    must: ['„Czego chcesz od nas, Panie” – Bóg-architekt, harmonia świata.', 'Pieśni: carpe diem, złoty środek, stoicyzm, epikureizm.', 'Treny: 19 utworów po śmierci Urszulki.', 'Tren IX – kryzys wiary w mądrość; Tren X – „gdzie jesteś?”.', 'Tren XIX – sen, matka z Urszulką, „Ludzkie przygody ludzkie noś”.'],
    quiz: [
      c('W hymnie „Czego chcesz od nas, Panie” Bóg ukazany jest jako', ['architekt i dobroczyńca świata', 'surowy sędzia', 'nieobecny i obojętny', 'wojownik'], 0),
      c('Ile trenów napisał Kochanowski?', ['19', '12', '7', '24'], 0),
      c('Ukojenie przynosi', ['Tren XIX', 'Tren I', 'Tren IX', 'Tren X'], 0),
      c('„Carpe diem” znaczy', ['korzystaj z dnia', 'pamiętaj o śmierci', 'złoty środek', 'nie wszystek umrę'], 0),
    ],
  },
]
