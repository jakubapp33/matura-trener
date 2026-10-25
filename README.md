# Matura Trener

Aplikacja (PWA na iPhone'a) do nauki do matury podstawowej z **polskiego, angielskiego i matematyki** na oryginalnych arkuszach CKE.

- cały arkusz (trening albo egzamin z zegarem), zadania z jednego działu, same zamknięte albo same otwarte,
- zamknięte sprawdzane automatycznie, otwarte – samoocena z oficjalnymi zasadami oceniania CKE,
- postęp, powtórka błędów, statystyki; wszystko zapisane w telefonie, działa offline.
- **Nauka**: gramatyka angielska (16 lekcji + ćwiczenia), typowe zadania z matematyki (metody, pułapki, trening), lektury z polskiego (streszczenia, bohaterowie, motywy, konteksty, quizy), słowniczek pojęć, poradnik do pisemnego,
- **matura ustna**: 76 pytań jawnych CKE z polskiego (2026–2028) i symulacja egzaminu z angielskiego – zegar, nagrywanie, samoocena.

Treści do nauki są w `src/learn/` (lekcje, lektury, pytania), lista pytań jawnych pochodzi z komunikatu CKE z 30.08.2024.

## Uruchomienie na Macu

```bash
npm install
npm run dev          # http://localhost:5173
npm test             # testy
npm run build        # wersja produkcyjna w dist/
```

## Dodawanie arkuszy

```bash
node tools/fetch-exams.mjs 2027     # pobiera arkusze i zasady oceniania z cke.gov.pl
node tools/extract-text.mjs         # tekst z PDF-ów (do tools/cache/)
node tools/draft-math.mjs           # baza zadań: matematyka
node tools/draft-english.mjs        #             angielski
node tools/draft-polish.mjs         #             polski
node tools/crop-tasks.mjs           # wycięcie każdego zadania ze strony (żeby nie było widać dwóch naraz)
node tools/validate.mjs             # sprawdzenie spójności
```

Zadania z nietypową odpowiedzią skrypty wypisują jako „DO SPRAWDZENIA" – poprawki wpisuje się w `tools/overrides/<przedmiot>.json`.

## Instalacja na iPhonie

Publikacja: `npm run deploy` (testy, build, wypchnięcie `dist/` na gałąź gh-pages). Adres: https://jakubapp33.github.io/matura-trener/ – otwórz go w Safari → **Udostępnij** → **Dodaj do ekranu początkowego**.

Arkusze i zasady oceniania: Centralna Komisja Egzaminacyjna (cke.gov.pl). Aplikacja nie jest oficjalnym produktem CKE.
