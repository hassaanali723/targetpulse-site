---
title: Adres e-mail catch-all
description: Czym jest domena catch-all, dlaczego firmy ją ustawiają, dlaczego zwykłe sprawdzenie adresu email nie potwierdza adresów w takiej domenie i co z nimi zrobić.
slug: adres-email-catch-all
date: 2026-10-22
updated: 2026-10-22
keyword: adres email catch-all
short: Domena catch-all przyjmuje pocztę wysłaną na każdy adres w tej domenie, nawet na nazwy, które nie istnieją. Serwer odpowiada „tak” na wszystko, więc zwykłe sprawdzenie adresu e-mail nie pokaże, czy konkretna skrzynka pocztowa jest prawdziwa.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Uzyskaj prawdziwą odpowiedź dla adresów catch-all
---

## Czym jest adres e-mail catch-all?

Domena catch-all przyjmuje pocztę wysłaną na każdy adres w tej domenie. Adres nie musi istnieć. Adres e-mail catch-all to adres w takiej domenie.

Większość domen odrzuca e-maile wysłane na nazwę, której nie ma. Domena catch-all tego nie robi. Przyjmuje e-mail i umieszcza go w jednej wspólnej skrzynce pocztowej, a czasem usuwa go bez informowania kogokolwiek.

To samo ustawienie nazywa się też **accept-all** albo **domeną catch-all**. Wiele narzędzi do weryfikacji oznacza takie adresy jako „catch-all”, „accept-all” albo „ryzykowny”.

## Prosty przykład

1. **Acme ustawia catch-all.** Acme to mała firma z domeną acme.example. Jej kierowniczka biura włącza catch-all, żeby nie zgubić żadnego e-maila od klientów.
2. **Sara pisze do prawdziwej osoby.** Wysyła e-mail na adres jon@acme.example. Jon tam pracuje. Dostaje ten e-mail.
3. **Sara robi literówkę.** Następnym razem wpisuje jonn@acme.example. Nie ma takiej osoby.
4. **Serwer i tak odpowiada „tak”.** E-mail nie zostaje odbity. Trafia do wspólnej skrzynki i może go nikt nie przeczytać.

Sara nie widzi żadnego błędu, więc myśli, że oba e-maile dotarły. Tylko jeden trafił do Jona.

## Dlaczego firmy używają catch-all

Firmy włączają catch-all, żeby nie przegapić żadnego e-maila. Klienci robią literówki. Na nazwiska byłych pracowników wciąż przychodzi poczta. Catch-all zbiera to wszystko w jednym miejscu.

## Dlaczego catch-all to problem dla weryfikacji e-mail

Zwykłe sprawdzenie adresu zadaje serwerowi jedno pytanie: „Czy przyjmujesz pocztę dla tego adresu?”. W domenie catch-all odpowiedź zawsze brzmi „tak”. Prawdziwa osoba i wymyślona nazwa dostają tę samą odpowiedź.

Podstawowe sprawdzenie nie może więc potwierdzić skrzynki pocztowej. Może tylko podać, że domena przyjmuje wszystko.

Ma to największe znaczenie dla list B2B. W jednym opublikowanym teście 10 000 prawdziwych firmowych adresów e-mail 28% znajdowało się w domenach catch-all. Test przeprowadziła firma LeadMagic, która sprzedaje weryfikację e-mail, więc traktuj go jako test dostawcy.

## Co zrobić z adresami catch-all

Masz trzy możliwości:

| Możliwość | Co się dzieje |
|---|---|
| **Usunąć je** | Nie ma ryzyka, ale tracisz też prawdziwe kontakty |
| **Wysłać do nich** | Część e-maili dotrze do prawdziwych osób, część przepadnie albo zostanie odbita później |
| **Sprawdzić je dokładniej** | Weryfikator, który sprawdza więcej niż podstawowe sprawdzenie, oddziela prawdziwe adresy od fałszywych |

## Jak pomaga weryfikator

Giggal.ai wykonuje [weryfikację adresów catch-all](/catch-all-verification) w ramach każdego sprawdzenia. Używa dodatkowych sygnałów, żeby zwrócić prawdziwy wynik, dostarczalny lub niedostarczalny, zamiast etykiety „ryzykowny”. Dłuższy poradnik z większą liczbą przykładów znajdziesz w artykule [co to jest adres email catch-all](/blog/what-is-a-catch-all-email-address).
