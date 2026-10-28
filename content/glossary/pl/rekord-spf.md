---
title: Rekord SPF
description: Czym jest rekord SPF, jak wygląda, jak serwery odbiorców go sprawdzają, jaki jest limit dziesięciu zapytań DNS i jakie kody odbić oznaczają błąd SPF.
slug: rekord-spf
date: 2026-09-29
updated: 2026-10-12
keyword: rekord spf
short: Rekord SPF to wiersz tekstu w twojej domenie, który wymienia serwery uprawnione do wysyłania e-maili z tej domeny. Serwery odbiorców sprawdzają go, żeby potwierdzić, że e-mail podający się za wiadomość z twojej domeny wysłał jeden z twoich serwerów.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Uwierzytelnianie usuwa jeden rodzaj odbić. Weryfikacja usuwa drugi
---

## Czym jest rekord SPF?

Rekord SPF to wiersz tekstu w twojej domenie, który wymienia serwery uprawnione do wysyłania z niej e-maili. SPF to skrót od Sender Policy Framework. Standard opisuje RFC 7208.

Najpierw kilka pojęć. Domena to nazwa po znaku @ w adresie e-mail, na przykład example.com. Serwer to komputer, który wysyła lub odbiera e-maile. DNS to publiczny katalog, w którym domena publikuje swoje ustawienia. Każde ustawienie nazywa się rekordem. Rekord SPF to [rekord DNS TXT](/glossary/dns-txt-record), czyli rekord DNS, który zawiera zwykły tekst.

Prosty rekord SPF wygląda tak:

`v=spf1 include:_spf.google.com -all`

Każda część coś oznacza:

- `v=spf1` oznacza, że to rekord SPF.
- `include:_spf.google.com` oznacza, że każdy serwer z listy Google może wysyłać e-maile z tej domeny.
- `-all` oznacza: odrzucaj e-maile ze wszystkich innych serwerów.
- `~all` to łagodniejsze zakończenie. Oznacza: traktuj e-maile z innych serwerów jako podejrzane, ale ich nie odrzucaj.

## Prosty przykład

Oto jak jeden rekord SPF chroni małą firmę.

1. **Piekarnia korzysta z Google Workspace.** Piekarnia Rosy wysyła e-maile z adresu rosa@bakery.example przez Google Workspace.
2. **Publikuje rekord SPF.** Rekord brzmi `v=spf1 include:_spf.google.com -all`. Oznacza to, że tylko serwery Google mogą wysyłać e-maile z domeny bakery.example.
3. **Rosa pisze do klienta.** E-mail wychodzi z jednego z serwerów Google.
4. **Serwer klienta sprawdza.** Wyszukuje rekord SPF domeny bakery.example. Serwer Google jest uprawniony, więc wynik to pass.
5. **Ktoś wysyła fałszywy e-mail.** Oszust wysyła e-mail, który podaje się za wiadomość z bakery.example. Przychodzi on z serwera, którego nie ma w rekordzie.
6. **Sprawdzenie kończy się błędem.** Rekord kończy się na `-all`, więc serwer klienta może odrzucić fałszywy e-mail.

## Jak serwery odbiorców go sprawdzają

Gdy przychodzi e-mail, serwer odbiorcy odczytuje domenę z adresu [Return-Path](/glossary/return-path). Return-Path to adres, na który wysyłane są odbicia. Odbicie (bounce) to automatyczna wiadomość, która informuje nadawcę, że e-mail nie został dostarczony.

Serwer pobiera rekord SPF tej domeny. Potem sprawdza, czy adres IP, który dostarczył e-mail, jest w rekordzie. Adres IP to numer, który identyfikuje serwer w internecie. Są trzy częste wyniki:

- **Pass.** Adres IP jest w rekordzie. E-mail przyszedł z uprawnionego serwera.
- **Fail.** Adresu IP nie ma w rekordzie, a rekord kończy się na `-all`. Serwer może odrzucić e-mail.
- **Softfail.** Adresu IP nie ma w rekordzie, a rekord kończy się na `~all`. Serwer przyjmuje e-mail, ale oznacza go jako podejrzany.

Microsoft Exchange Online odrzuca e-mail, który nie przechodzi sprawdzenia, z komunikatem `5.7.23 The message was rejected because of Sender Policy Framework violation`, czyli „wiadomość została odrzucona z powodu naruszenia Sender Policy Framework”. Gmail zwraca `550 5.7.26` dla e-maila, który w ogóle nie ma uwierzytelniania. Oba kody zaczynają się od 5. Twoje narzędzie do wysyłki zapisuje je jako [twarde odbicia (hard bounce)](/glossary/hard-bounce), chociaż adres jest w porządku.

## Kto potrzebuje rekordu SPF

Potrzebuje go każdy, kto wysyła masowe e-maile. Wytyczne Google dla nadawców wymagają SPF i DKIM od nadawców, którzy wysyłają 5000 lub więcej wiadomości dziennie do Gmaila. Wymagają też DMARC. Microsoft wymaga tych samych trzech rekordów od domen, które wysyłają ponad 5000 e-maili dziennie do Outlook.com, Hotmail i Live. Microsoft zaczął to egzekwować 5 maja 2025.

Jeśli wysyłasz mniej, te rekordy nadal mają znaczenie. Bez nich twoje e-maile częściej trafiają do folderu spam.

## Limit dziesięciu zapytań DNS

RFC 7208 ogranicza sprawdzenie SPF do dziesięciu zapytań DNS. Zapytanie to jedno pytanie, które serwer odbiorcy zadaje DNS. Każde `include:`, `a`, `mx` i `redirect` w twoim rekordzie liczy się jako jedno zapytanie. Liczą się też zapytania w rekordach, które dołączasz. Jeśli suma przekracza dziesięć, sprawdzenie zwraca trwały błąd. Większość serwerów odbiorców traktuje ten błąd jak fail.

To najczęstszy sposób, w jaki psuje się rekord SPF. Firma dodaje do rekordu kolejne narzędzia do e-maili. Gdy zostaje dodane jedenaste zapytanie, cały rekord przestaje działać. Narzędzie [SPF checker](/spf-checker) liczy zapytania w twoim rekordzie, w tym te w każdym include.

**Przykład:** rekord SPF firmy dołącza jej pocztę biurową, narzędzie do newslettera, narzędzie do obsługi klienta (help desk) i narzędzie do faktur. Niektóre z nich dołączają w środku kolejne rekordy. Razem potrzebują 11 zapytań. Od tego dnia sprawdzenie SPF dla e-maili firmy kończy się błędem, nawet dla e-maili wysyłanych z jej własnego biura.

## SPF to jeden z trzech rekordów

- SPF sprawdza, który serwer wysłał e-mail.
- [DKIM](/glossary/dkim) sprawdza, czy e-mail nie został zmieniony po wysłaniu.
- [DMARC](/glossary/dmarc) łączy oba sprawdzenia z adresem w polu Od (From), który widzi czytelnik. Mówi też serwerom odbiorców, co zrobić, gdy sprawdzenia się nie udają.

Domena potrzebuje wszystkich trzech. Poradnik [hard bounce a soft bounce](/blog/hard-bounce-vs-soft-bounce) pokazuje, jak kody błędów wyglądają w raporcie odbić.

## Rekordy SPF a weryfikacja e-mail

Rekord SPF dowodzi, które serwery mogą wysyłać e-maile z twojej domeny. Nie dowodzi, że adres odbiorcy istnieje. Poprawnie uwierzytelniony e-mail wysłany na nieaktywny adres i tak zostaje odbity. [Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy skrzynka pocztowa istnieje, zanim wyślesz wiadomość. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to samo dla całej listy. Poprawny rekord SPF pomaga zapobiegać odbiciom z powodu uwierzytelniania, takim jak `5.7.23`, a [weryfikacja e-mail](/) znajduje adresy, które zostałyby odbite z kodami takimi jak `5.1.1`.
