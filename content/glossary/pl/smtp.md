---
title: SMTP
description: Co oznacza SMTP, jak e-mail przechodzi z jednego serwera na drugi, czym jest serwer SMTP, których portów SMTP używać i co oznaczają odpowiedzi z błędem.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP to skrót od Simple Mail Transfer Protocol. To zestaw zasad, według których serwery pocztowe przesyłają sobie e-maile. Każdy e-mail, który wysyłasz, przechodzi od serwera do serwera przez SMTP.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Sprawdź każdy adres na serwerze odbiorcy, zanim wyślesz
---

## Czym jest SMTP? (co oznacza SMTP)

SMTP to skrót od Simple Mail Transfer Protocol. Protokół to stały zestaw zasad, według których dwa komputery się porozumiewają. SMTP to zestaw zasad do wysyłania e-maili. Obecną wersję opisuje RFC 5321. RFC to publiczny dokument, który ustala standard internetowy.

Serwer to komputer, który działa bez przerwy i wykonuje zadania dla innych komputerów. Serwer pocztowy wysyła, odbiera lub przechowuje e-maile. Krótka odpowiedź na pytanie „czym jest SMTP” brzmi więc tak. To sposób, w jaki serwery pocztowe przekazują sobie e-maile.

SMTP tylko przenosi e-maile. Nie pokazuje ci skrzynki odbiorczej. Robią to inne protokoły, opisane niżej.

## Przykład: Ana wysyła e-mail do Bena

Ana korzysta z Gmaila. Ben pracuje w firmie Northwind. Jego adres to ben@northwind.com, a jego firma korzysta z Outlooka w ramach Microsoft 365. Ana pisze e-mail i klika Wyślij. Oto co się dzieje.

1. Serwer wysyłający Gmaila przyjmuje e-mail Any.
2. Odczytuje część po znaku @, czyli northwind.com. To domena, czyli nazwa firmy Bena w internecie.
3. Wyszukuje rekord MX domeny northwind.com w DNS. DNS to publiczny katalog internetu. [Rekord MX](/glossary/mx-record) wskazuje serwer, który odbiera e-maile dla domeny.
4. Rekord MX wskazuje serwer Microsoftu. Serwer Gmaila otwiera z nim połączenie.
5. Serwer Gmaila przedstawia się poleceniem `EHLO`. Potem podaje adres nadawcy poleceniem `MAIL FROM`.
6. Podaje adres odbiorcy poleceniem `RCPT TO:<ben@northwind.com>`.
7. Serwer Microsoftu odpowiada `250`. To oznacza, że przyjmuje e-maile dla tego adresu.
8. Serwer Gmaila wysyła sam e-mail poleceniem `DATA`.
9. Serwer Microsoftu znowu odpowiada `250`. Przyjął e-mail i umieszcza go w skrzynce pocztowej Bena.
10. Serwer Gmaila kończy połączenie poleceniem `QUIT`.

Ana i Ben nie widzą żadnego z tych kroków. Ana widzi „Wysłano”, a Ben widzi nowy e-mail.

## Czym jest serwer SMTP

Serwer SMTP to serwer, który wysyła lub odbiera e-maile przez SMTP. W przykładzie zarówno serwer wysyłający Gmaila, jak i serwer odbierający Microsoftu to serwery SMTP. Oprogramowanie, które na nich działa, nazywa się [mail transfer agent](/glossary/mta), czyli MTA.

Z serwerami SMTP masz do czynienia, gdy konfigurujesz program pocztowy lub aplikację. Załóżmy, że chcesz, żeby formularz kontaktowy na stronie wysyłał e-maile przez konto Gmail. Formularz potrzebuje adresu serwera SMTP Gmaila, czyli `smtp.gmail.com`. Potrzebuje też numeru portu, nazwy użytkownika i hasła. Formularz przekazuje każdy e-mail do tego serwera, a serwer wysyła go dalej.

Firmy, które wysyłają dużo e-maili, zwykle korzystają z [dostawcy usług e-mail](/glossary/esp), takiego jak SendGrid lub Amazon SES. Te usługi utrzymują serwery SMTP dla swoich klientów.

## Porty SMTP: 25, 587 i 465

Port to numer, który mówi serwerowi, do jakiej usługi jest połączenie. SMTP używa trzech popularnych numerów portów.

| Port | Do czego służy | Szyfrowanie |
| --- | --- | --- |
| 25 | Jeden serwer pocztowy wysyła e-mail do drugiego serwera pocztowego | Opcjonalne, włączane przez STARTTLS |
| 587 | Aplikacja lub program pocztowy przekazuje e-mail do własnego serwera SMTP | Włączane przez STARTTLS przed logowaniem |
| 465 | To samo zadanie co port 587 | Szyfrowane od pierwszej chwili |

STARTTLS to polecenie, które przełącza otwarte połączenie na szyfrowane. Szyfrowanie zmienia treść tak, żeby nikt między dwoma serwerami nie mógł jej odczytać.

Jeśli konfigurujesz aplikację lub program pocztowy, używaj portu 587 lub 465. Wielu dostawców domowego internetu i hostingu w chmurze blokuje połączenia wychodzące na porcie 25. Robią to, żeby zainfekowane komputery nie wysyłały spamu.

## SMTP a IMAP i POP3

SMTP wysyła e-maile. Nie pozwala ich czytać. Czytaniem zajmują się dwa inne protokoły.

- **SMTP** wysyła e-maile na zewnątrz, z twojego programu do twojego serwera oraz z serwera do serwera.
- **IMAP** pozwala programowi pocztowemu czytać e-maile, które zostają na serwerze. Widzisz tę samą skrzynkę odbiorczą na telefonie i na laptopie.
- **POP3** pobiera e-maile na jedno urządzenie. Starsze konfiguracje często usuwały je potem z serwera.

Program pocztowy, taki jak Outlook lub Apple Mail, używa więc dwóch ustawień. Używa IMAP lub POP3, żeby czytać twoją skrzynkę odbiorczą. Używa SMTP, żeby wysyłać.

## Gdy serwer SMTP odmawia

Każda odpowiedź SMTP zaczyna się od trzycyfrowego kodu. Pierwsza cyfra mówi, jaki to rodzaj odpowiedzi.

- **2xx oznacza sukces.** `250` oznacza, że żądanie zostało przyjęte.
- **4xx oznacza tymczasowy problem.** Serwer wysyłający próbuje ponownie później. Przykład: `451`, spróbuj później.
- **5xx oznacza trwały błąd.** Ponowna wysyłka się nie uda. Przykład: `550 5.1.1`, skrzynka pocztowa nie istnieje.

Odpowiedź 5xx na prawdziwy e-mail staje się [twardym odbiciem (hard bounce)](/glossary/hard-bounce). Odpowiedź 4xx to [miękkie odbicie (soft bounce)](/glossary/soft-bounce). Strona [kody błędów SMTP](/glossary/smtp-error-codes) wymienia popularne kody i to, co każdy z nich oznacza.

Niektóre serwery celowo wysyłają odpowiedź 4xx nadawcom, których jeszcze nie znają. Nazywa się to [greylistingiem](/glossary/greylisting). Pierwsza próba się nie udaje, a późniejsza zostaje przyjęta.

## SMTP a weryfikacja e-mail

[Weryfikator e-mail](/email-checker) korzysta z tej samej rozmowy SMTP co w przykładzie powyżej, ale przerywa ją przed krokiem 8. Pyta o adres poleceniem `RCPT TO`, a odpowiedź `250` oznacza, że serwer przyjmuje dla niego e-maile. Odpowiedź `550 5.1.1` oznacza, że skrzynka pocztowa nie istnieje. Weryfikator wysyła wtedy `QUIT`, więc żaden e-mail nie zostaje wysłany. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) wykonuje tę [weryfikację e-mail](/) dla całej listy, więc możesz usunąć adresy, które zostałyby odbite.
