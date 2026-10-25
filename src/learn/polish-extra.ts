import { c, type Exercise } from './types'

export interface Term {
  term: string
  def: string
  ex?: string
}

export interface TermGroup {
  id: string
  name: string
  terms: Term[]
}

/** Słowniczek pojęć potrzebnych w teście z polskiego i na maturze ustnej. */
export const TERMS: TermGroup[] = [
  {
    id: 'srodki',
    name: 'Środki stylistyczne',
    terms: [
      { term: 'epitet', def: 'określenie rzeczownika (najczęściej przymiotnik) uwydatniające jego cechę', ex: 'złota jesień, szybkonogi Achilles' },
      { term: 'metafora (przenośnia)', def: 'połączenie wyrazów, które razem tworzą nowe, przenośne znaczenie', ex: 'morze łez, wieczór życia' },
      { term: 'porównanie', def: 'zestawienie dwóch rzeczy za pomocą słów: jak, niby, jakby, niczym, podobny do', ex: 'oczy jak gwiazdy' },
      { term: 'porównanie homeryckie', def: 'rozbudowane porównanie, w którym drugi człon rozrasta się w osobny obraz', ex: '„Iliada”' },
      { term: 'personifikacja (uosobienie)', def: 'nadanie przedmiotom, zwierzętom lub pojęciom cech ludzkich', ex: 'wiatr szepcze, Śmierć mówi do Polikarpa' },
      { term: 'ożywienie (animizacja)', def: 'nadanie przedmiotom cech istot żywych (ale nie ludzkich)', ex: 'samochód zawarczał' },
      { term: 'apostrofa', def: 'bezpośredni zwrot do osoby, rzeczy lub pojęcia, często z wykrzyknieniem', ex: '„Litwo! Ojczyzno moja!”' },
      { term: 'pytanie retoryczne', def: 'pytanie, na które nie oczekuje się odpowiedzi; wzmacnia emocje lub skłania do refleksji', ex: '„Czego chcesz od nas, Panie…?”' },
      { term: 'wykrzyknienie', def: 'zdanie zakończone wykrzyknikiem, wyrażające silne emocje' },
      { term: 'anafora', def: 'powtórzenie tego samego wyrazu na początku kolejnych wersów lub zdań' },
      { term: 'epifora', def: 'powtórzenie tego samego wyrazu na końcu kolejnych wersów lub zdań' },
      { term: 'hiperbola', def: 'celowa przesada, wyolbrzymienie', ex: 'Roland zabijający tysiące wrogów' },
      { term: 'oksymoron', def: 'połączenie wyrazów o przeciwstawnych znaczeniach', ex: 'gorący lód, żywy trup' },
      { term: 'antyteza', def: 'zestawienie przeciwieństw (myśli, obrazów) dla podkreślenia kontrastu', ex: '„czas płaczu i czas śmiechu”' },
      { term: 'paradoks', def: 'wypowiedź pozornie sprzeczna, która kryje głęboką prawdę', ex: '„Wojna to pokój” (Orwell – jako narzędzie propagandy)' },
      { term: 'ironia', def: 'mówienie czegoś odwrotnego niż się myśli, by ośmieszyć lub skrytykować', ex: 'Krasicki, „Do króla”' },
      { term: 'symbol', def: 'motyw, który oprócz dosłownego ma ukryte, wieloznaczne znaczenie', ex: 'złoty róg w „Weselu”' },
      { term: 'alegoria', def: 'obraz o jednym, stałym, ukrytym znaczeniu (łatwym do odczytania)', ex: 'kobieta z wagą i przepaską = sprawiedliwość; zwierzęta w bajkach' },
      { term: 'eufemizm', def: 'łagodniejsze określenie czegoś przykrego lub nieprzyzwoitego', ex: '„odszedł” zamiast „umarł”' },
      { term: 'peryfraza (omówienie)', def: 'zastąpienie nazwy opisem', ex: '„król zwierząt” = lew' },
      { term: 'onomatopeja (dźwiękonaśladowczość)', def: 'wyraz naśladujący dźwięk', ex: 'szum, bęc, kukułka' },
      { term: 'inwersja (przestawnia)', def: 'odwrócenie naturalnego szyku wyrazów w zdaniu' },
      { term: 'wyliczenie (enumeracja)', def: 'wymienienie po kolei wielu elementów' },
      { term: 'zdrobnienie (deminutywum)', def: 'forma wyrazu wyrażająca czułość lub małość', ex: '„Synku miły” w „Lamencie”' },
      { term: 'neologizm', def: 'nowo utworzony wyraz', ex: 'nowomowa w „Roku 1984”' },
      { term: 'archaizm', def: 'wyraz lub forma dawna, przestarzała', ex: '„Bogurodzica”: zyszczy, spuści' },
      { term: 'kolokwializm', def: 'wyraz potoczny, z języka codziennego' },
      { term: 'synekdocha', def: 'nazwanie całości przez część lub odwrotnie', ex: '„dach nad głową” = dom' },
    ],
  },
  {
    id: 'pojecia',
    name: 'Pojęcia literackie',
    terms: [
      { term: 'tragizm', def: 'sytuacja, w której bohater musi wybierać między równorzędnymi racjami, a każdy wybór prowadzi do klęski', ex: '„Antygona”' },
      { term: 'katharsis', def: 'oczyszczenie widza przez przeżycie litości i trwogi (wg Arystotelesa)' },
      { term: 'fatum', def: 'nieuchronne przeznaczenie, któremu nie można się przeciwstawić' },
      { term: 'hybris', def: 'pycha, zuchwałość wobec bogów lub losu, prowadząca do upadku' },
      { term: 'groteska', def: 'konwencja łącząca elementy przeciwstawne (tragizm i komizm, realizm i fantastykę), deformująca świat', ex: '„Ferdydurke”, „Tango”' },
      { term: 'parabola', def: 'utwór, którego fabuła ma drugie, ogólne znaczenie – uniwersalną prawdę', ex: '„Dżuma”' },
      { term: 'antyutopia (dystopia)', def: 'wizja przyszłego społeczeństwa, które okazuje się koszmarem', ex: '„Rok 1984”' },
      { term: 'mesjanizm', def: 'przekonanie, że naród (Polska) ma szczególną misję – cierpi i odkupuje inne narody', ex: '„Dziady cz. III”, Widzenie ks. Piotra' },
      { term: 'prometeizm', def: 'postawa buntu i poświęcenia dla dobra innych, nawet wbrew bogom', ex: 'Prometeusz, Konrad' },
      { term: 'vanitas', def: 'motyw marności i przemijania wszystkiego, co ziemskie', ex: 'Kohelet' },
      { term: 'danse macabre', def: 'taniec śmierci – korowód ludzi wszystkich stanów prowadzony przez śmierć', ex: '„Rozmowa Mistrza Polikarpa ze Śmiercią”' },
      { term: 'memento mori', def: '„pamiętaj o śmierci” – przypomnienie o przemijaniu' },
      { term: 'carpe diem', def: '„chwytaj dzień” – korzystaj z chwili (Horacy)' },
      { term: 'intertekstualność', def: 'nawiązania jednego tekstu do innego (cytat, aluzja, parodia, kontynuacja)', ex: '„Górą »Edek«” → „Tango”' },
      { term: 'narrator wszechwiedzący', def: 'narrator trzecioosobowy, który wie wszystko o świecie i bohaterach' },
      { term: 'narrator pierwszoosobowy', def: 'narrator będący uczestnikiem wydarzeń (często bohaterem)', ex: 'Pamiętnik Rzeckiego, Tadek u Borowskiego' },
      { term: 'narracja behawiorystyczna', def: 'rzeczowy opis zachowań, bez komentarza i ujawniania uczuć', ex: 'Borowski' },
      { term: 'powieść polifoniczna', def: 'powieść wielu równorzędnych głosów i racji', ex: '„Zbrodnia i kara”' },
      { term: 'synkretyzm rodzajowy', def: 'łączenie cech różnych rodzajów literackich (epiki, liryki, dramatu)', ex: 'ballada, dramat romantyczny' },
      { term: 'stylizacja', def: 'naśladowanie cech innego języka/stylu (gwara, archaizmy, biblijny)', ex: 'gwara w „Chłopach”' },
      { term: 'kontekst', def: 'dodatkowe odniesienie pomagające zinterpretować utwór: historycznoliteracki, historyczny, biograficzny, filozoficzny, kulturowy, religijny' },
      { term: 'motyw', def: 'powtarzający się element treści (sytuacja, postać, przedmiot), np. motyw wędrówki, śmierci, miłości' },
      { term: 'topos', def: 'motyw stale obecny w kulturze od starożytności (np. theatrum mundi, homo viator, arkadia)' },
      { term: 'archetyp', def: 'pierwotny wzorzec postaci lub sytuacji (np. Prometeusz – buntownik)' },
    ],
  },
  {
    id: 'gatunki',
    name: 'Gatunki literackie',
    terms: [
      { term: 'epos (epopeja)', def: 'obszerny utwór epicki o losach bohaterów na tle ważnych wydarzeń historycznych; inwokacja, heksametr', ex: '„Iliada”' },
      { term: 'tragedia antyczna', def: 'dramat o nieuchronnej klęsce bohatera; chór, trzy jedności, katharsis', ex: '„Antygona”' },
      { term: 'komedia', def: 'dramat o pogodnym zakończeniu, wywołujący śmiech (komizm postaci, sytuacji, słowa)', ex: '„Skąpiec”' },
      { term: 'dramat romantyczny', def: 'luźna kompozycja, fantastyka, łączenie gatunków, brak trzech jedności', ex: '„Dziady cz. III”' },
      { term: 'ballada', def: 'utwór o niezwykłym zdarzeniu, często z fantastyką i ludowością; łączy epikę, lirykę i dramat', ex: '„Romantyczność”, „Lilije”' },
      { term: 'satyra', def: 'utwór ośmieszający wady ludzi i społeczeństwa', ex: 'Krasicki' },
      { term: 'tren', def: 'utwór żałobny opłakujący zmarłego', ex: 'Kochanowski' },
      { term: 'hymn', def: 'uroczysta pieśń pochwalna na cześć bóstwa, idei, ojczyzny', ex: '„Czego chcesz od nas, Panie”' },
      { term: 'pieśń', def: 'utwór liryczny o budowie stroficznej, często śpiewny' },
      { term: 'sonet', def: '14-wersowy utwór: dwie strofy 4-wersowe (opis) i dwie 3-wersowe (refleksja)' },
      { term: 'powieść', def: 'rozbudowany utwór epicki prozą, z wieloma wątkami i bohaterami' },
      { term: 'reportaż', def: 'gatunek dziennikarski oparty na faktach, relacja z miejsca zdarzeń', ex: 'Krall, Kapuściński' },
      { term: 'chanson de geste', def: 'średniowieczny francuski epos rycerski', ex: '„Pieśń o Rolandzie”' },
      { term: 'planctus', def: 'średniowieczny lament (np. Maryi pod krzyżem)', ex: '„Lament świętokrzyski”' },
    ],
  },
  {
    id: 'jezyk',
    name: 'Język w użyciu',
    terms: [
      { term: 'funkcja informatywna (poznawcza)', def: 'wypowiedź przekazuje informacje o świecie' },
      { term: 'funkcja ekspresywna', def: 'wypowiedź wyraża uczucia, stany i opinie nadawcy' },
      { term: 'funkcja impresywna (konatywna)', def: 'wypowiedź ma wpłynąć na odbiorcę, skłonić go do działania' },
      { term: 'funkcja perswazyjna', def: 'odmiana impresywnej: przekonywanie za pomocą argumentów i środków językowych' },
      { term: 'funkcja poetycka (estetyczna)', def: 'wypowiedź zwraca uwagę na swoją formę, ma walor artystyczny' },
      { term: 'funkcja fatyczna', def: 'podtrzymanie kontaktu między rozmówcami („halo?”, „no tak”)' },
      { term: 'frazeologizm (związek frazeologiczny)', def: 'utrwalone połączenie wyrazów o znaczeniu przenośnym', ex: 'syzyfowa praca, pięta Achillesa' },
      { term: 'etymologia', def: 'pochodzenie wyrazu i jego pierwotne znaczenie' },
      { term: 'zapożyczenie', def: 'wyraz przejęty z innego języka', ex: 'laptop, weekend' },
      { term: 'archaizacja', def: 'stylizacja na język dawny' },
      { term: 'eufemizacja', def: 'łagodzenie wypowiedzi za pomocą eufemizmów' },
      { term: 'manipulacja językowa', def: 'wpływanie na odbiorcę w ukryty, nieuczciwy sposób' },
      { term: 'styl naukowy / urzędowy / publicystyczny / potoczny / artystyczny', def: 'odmiany języka zależne od sytuacji i celu' },
      { term: 'teza', def: 'główna myśl, stanowisko, którego bronisz w wypowiedzi' },
      { term: 'argument', def: 'uzasadnienie tezy (np. przykład z lektury, fakt, autorytet)' },
      { term: 'notatka syntetyzująca', def: 'krótkie połączenie najważniejszych informacji z dwóch tekstów (limit słów podany w poleceniu)' },
    ],
  },
]

/** quiz: definicja → pojęcie (3 losowe błędne odpowiedzi z tej samej grupy) */
export function termQuiz(group: TermGroup): Exercise[] {
  return group.terms.map((t, i) => {
    const others = group.terms.filter((_, j) => j !== i)
    const picks: string[] = []
    let k = (i * 7 + 3) % others.length
    while (picks.length < 3) {
      const o = others[k % others.length].term
      if (!picks.includes(o)) picks.push(o)
      k += 5
    }
    return c(`Jak nazywa się: ${t.def}?`, [t.term, ...picks], 0, t.ex ? `Przykład: ${t.ex}` : undefined)
  })
}

/** Poradnik: jak pisać wypracowanie i jakie zadania są najczęstsze. */
export const POLISH_GUIDE = `
## Arkusz z polskiego (poziom podstawowy, formuła 2023)
**Część 1** – test (język polski w użyciu + test historycznoliteracki) i **Część 2** – wypracowanie. Wypracowanie musi mieć **co najmniej 300 słów** i odwoływać się do **lektury obowiązkowej** oraz innego utworu literackiego, a także zawierać **kontekst**.

## Najczęstsze zadania w teście – „Język polski w użyciu”
- **Wyjaśnij znaczenie** wyrażenia / frazeologizmu w kontekście tekstu – nie definiuj ogólnie, odnieś się do tekstu.
- **Funkcja wypowiedzi / środka językowego** (np. pytania retorycznego, przykładu, cytatu, ironii) – pisz: *„Służy temu, by… (podkreślić, przekonać, zaciekawić, uwiarygodnić)”*.
- **Zgodność z tekstem: prawda/fałsz** – szukaj w tekście dokładnego potwierdzenia, nie zgaduj.
- **Teza i argumenty** – sformułuj tezę jednym zdaniem; argument to „dlaczego”.
- **Porównaj stanowiska autorów dwóch tekstów** – zawsze podaj stanowisko obu i to, czy są zgodne.
- **Notatka syntetyzująca** – połącz informacje z obu tekstów: wspólny temat + stanowisko pierwszego + stanowisko drugiego; trzymaj się limitu słów, bez cytowania całych zdań.
- **Etymologia, styl, zapożyczenia, poprawność** – np. „z jakiego języka pochodzi”, „jaki styl”.

## Najczęstsze zadania – test historycznoliteracki
- **Rozpoznaj środek stylistyczny i jego funkcję** – nazwij (epitet, metafora, apostrofa…) + napisz, co daje w tekście.
- **Rozpoznaj epokę / prąd** po cechach fragmentu (np. romantyzm: uczucie, fantastyka, ludowość).
- **Interpretacja fragmentu** w odniesieniu do całej lektury – pokaż, że znasz całość (bohaterowie, wydarzenia).
- **Porównanie dwóch tekstów** (np. dwóch postaw bohaterów) – podobieństwo i różnica, oba z uzasadnieniem.
- **Kto mówi / do kogo / w jakiej sytuacji** – sytuacja liryczna, adresat.

## Wypracowanie – plan, który działa
1. **Wstęp (3–5 zdań)** – wprowadzenie w temat + **teza** (Twoje stanowisko odpowiadające na pytanie z tematu).
2. **Argument 1** – lektura obowiązkowa: konkretne wydarzenia, bohaterowie, cytaty lub parafrazy; **wyjaśnij, jak to potwierdza tezę**.
3. **Argument 2** – inny utwór (może być kolejna lektura).
4. **Argument 3 / kontrargument** (opcjonalnie).
5. **Kontekst** – historyczny, biograficzny, filozoficzny, kulturowy… **funkcjonalnie**: napisz, co z niego wynika dla tematu.
6. **Zakończenie** – wniosek, potwierdzenie tezy, refleksja.

> Najczęstsze błędy: streszczanie zamiast argumentowania; brak odwołania do lektury obowiązkowej; ogólniki bez przykładów; błędy w faktach (pomylone postacie!). Każdy akapit zacznij zdaniem, które łączy go z tezą.

## Przydatne zwroty
**Teza:** „Uważam, że…”, „Moim zdaniem…”, „Spróbuję udowodnić, że…”
**Argumentacja:** „Potwierdzeniem tej tezy jest…”, „Dobrym przykładem jest…”, „Świadczy o tym…”, „Warto zwrócić uwagę na…”
**Kontekst:** „Aby lepiej zrozumieć…, warto przywołać kontekst historyczny…”, „Podobny problem porusza…”
**Wniosek:** „Podsumowując…”, „Z przedstawionych przykładów wynika, że…”, „Tym samym moja teza…”

## Matura ustna z polskiego – jak wygląda
- Losujesz zestaw: **zadanie 1 – jawne** (jedno z 76 pytań CKE do lektur) i **zadanie 2 – niejawne** (na podstawie krótkiego tekstu).
- **Ok. 15 minut przygotowania**, potem **wypowiedź (ok. 10 min)** i **rozmowa z komisją (ok. 5 min)**.
- Wypowiedź: **teza → argumenty z lektury → kontekst → wniosek**. Komisja może dopytać o szczegóły lektury i kontekst.
`

export const GUIDE_QUIZ: Exercise[] = [
  c('Ile słów co najmniej musi mieć wypracowanie na poziomie podstawowym?', ['300', '150', '250', '400'], 0),
  c('Co musi pojawić się w wypracowaniu obowiązkowo?', ['odwołanie do lektury obowiązkowej', 'cytat z Biblii', 'trzy konteksty', 'odwołanie do filmu'], 0),
  c('Kontekst powinien być użyty', ['funkcjonalnie – wyjaśniać coś w odniesieniu do tematu', 'jako ozdobnik na końcu', 'tylko historyczny', 'zamiast lektury'], 0),
  c('Notatka syntetyzująca to', ['połączenie najważniejszych informacji z dwóch tekstów', 'streszczenie jednego tekstu', 'opinia o tekście', 'plan wypracowania'], 0),
]
