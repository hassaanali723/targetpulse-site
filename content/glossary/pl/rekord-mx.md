---
title: Rekord MX
description: Czym jest rekord MX, jak serwery pocztowe ustalają dzięki niemu, dokąd dostarczyć e-mail, co oznacza priorytet i co brak rekordu MX mówi weryfikatorowi.
slug: rekord-mx
date: 2026-09-29
updated: 2026-10-12
keyword: rekord mx
short: Rekord MX to ustawienie domeny, które wskazuje, który serwer odbiera e-maile dla tej domeny. Gdy wysyłasz wiadomość na adres name@example.com, twój serwer pocztowy wyszukuje rekord MX domeny example.com, żeby ustalić, dokąd dostarczyć e-mail.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Sprawdź, czy adres może odbierać e-maile
---

## Czym jest rekord MX?

Rekord MX to ustawienie domeny, które wskazuje, który serwer odbiera jej e-maile. MX to skrót od mail exchanger.

Najpierw kilka pojęć. Domena to nazwa taka jak example.com. To także część adresu e-mail po znaku @. Serwer to komputer, który działa bez przerwy i obsługuje pocztę e-mail. DNS to publiczny katalog, który łączy nazwy domen z serwerami. Każdy wpis w DNS nazywa się rekordem. Rekord MX to więc jeden z rodzajów rekordów DNS.

Rekordy MX domeny wymieniają serwery, które przyjmują przychodzące e-maile dla tej domeny. Każdy może je sprawdzić.

Domena może mieć więcej niż jeden rekord MX. Każdy rekord MX ma liczbę priorytetu. Serwery z niższymi liczbami są próbowane jako pierwsze. Oto typowa konfiguracja dla domeny w Google Workspace:

| priorytet | serwer pocztowy |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Jeśli serwer z priorytetem 1 nie odpowiada, serwer wysyłający próbuje następnego.

## Prosty przykład

Oto co dzieje się z jednym e-mailem.

1. **Omar pisze e-mail.** Omar chce napisać do swojego księgowego na adres name@example.com. Klika Wyślij.
2. **Jego serwer pocztowy odczytuje domenę.** Widzi, że adres kończy się na example.com.
3. **Wyszukuje rekord MX.** Pyta DNS, który serwer odbiera e-maile dla example.com.
4. **DNS odpowiada.** Rekord MX domeny example.com podaje: mail.example.com, priorytet 10.
5. **Serwer dostarcza e-mail.** Serwer pocztowy Omara łączy się z mail.example.com i przekazuje e-mail.
6. **Księgowy go dostaje.** E-mail trafia do skrzynki odbiorczej księgowego.

Omar nigdy nie widzi tych kroków. Jego serwer pocztowy wykonuje je za niego. Ale bez rekordu MX w kroku 4 e-mail nie miałby dokąd trafić.

## Jak poczta e-mail korzysta z rekordów MX

Gdy wysyłasz wiadomość na `name@example.com`, twój serwer pocztowy robi trzy rzeczy:

1. Wyszukuje rekordy MX domeny `example.com`.
2. Łączy się z serwerem o najniższej liczbie priorytetu.
3. Przekazuje e-mail przez SMTP. SMTP to standardowy sposób, w jaki serwery pocztowe przesyłają sobie e-maile.

RFC 5321, standard poczty e-mail, opisuje ten proces. Opisuje też domeny bez rekordu MX. Jeśli domena ma zwykły rekord A, serwery pocztowe traktują go jak rekord MX. Rekord A to rekord DNS, który łączy nazwę domeny z numerem jednego serwera, czyli jego adresem IP.

## Co rekord MX mówi o adresie

Rekord MX to pierwsze prawdziwe sprawdzenie w weryfikacji e-mail. Wcześniej jest tylko sprawdzenie składni. Sprawdzenie składni dotyczy wyłącznie formatu, na przykład tego, czy adres ma jeden znak @ i nie zawiera spacji.

Wyszukanie rekordu MX może dać trzy wyniki:

- **Brak rekordu MX i brak rekordu A.** Domena nie może odbierać e-maili. Każdy adres w tej domenie jest nieprawidłowy. **Przykład:** ktoś wpisuje znaną domenę, taką jak gmail.com, z zamienionymi dwiema literami. Taka literówka zwykle odpada na tym etapie.
- **Rekord MX istnieje.** Domena może odbierać e-maile. To nie mówi, czy konkretna skrzynka pocztowa istnieje. Do tego potrzebny jest kolejny krok: rozmowa SMTP z serwerem. **Przykład:** example.com ma rekord MX, ale to nie dowodzi, że skrzynka anna@example.com jest prawdziwa.
- **Rekord MX wskazuje znaną bramkę.** Jeśli serwerem pocztowym jest Proofpoint, Mimecast lub Barracuda, domena korzysta z [secure email gateway](/glossary/secure-email-gateway) (bramki bezpieczeństwa poczty). Bramka to usługa bezpieczeństwa, która sprawdza e-maile firmy, zanim trafią do skrzynek pracowników. Sprawdzenie skrzynki działa w tych domenach inaczej.

## Dlaczego to ma znaczenie dla nadawców

Każdy może odczytać rekord MX domeny przez zapytanie DNS. Nasze bezpłatne narzędzie [MX lookup](/mx-lookup) pokazuje rekordy MX dowolnej domeny. Gdy firma zmienia dostawcę poczty lub kończy działalność, jej rekordy MX się zmieniają albo znikają. Adresy przestają działać. Nikt ci o tym nie mówi. To częsta przyczyna [twardych odbić (hard bounce)](/glossary/hard-bounce) na starych listach. Twarde odbicie to e-mail odrzucony na stałe.

**Przykład:** masz 40 kontaktów z old-firm.example, zebranych na targach w 2021 roku. Firma zostaje zamknięta w 2024 roku, a jej domena nie ma już rekordu MX. Każdy e-mail, który wysyłasz do tych 40 kontaktów, zostaje teraz odbity.

## Jak radzi sobie z tym weryfikator

[Weryfikator e-mail](/email-checker) najpierw wyszukuje rekord MX. Jeśli rekordu MX nie ma, adres zostaje oznaczony jako nieprawidłowy i dalsze sprawdzenia nie są wykonywane. Jeśli rekord MX istnieje, weryfikator łączy się z tym serwerem i pyta, czy skrzynka pocztowa istnieje. Wyszukanie MX mówi też weryfikatorowi, jaki to rodzaj serwera. Ma to znaczenie dla [domen catch-all](/glossary/catch-all-email) i bramek.

[Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) wykonuje to samo wyszukanie rekordu MX dla każdej domeny na twojej liście. [Weryfikacja e-mail](/) używa rekordu MX, żeby znaleźć domeny, które nie mogą odbierać e-maili, zanim do nich wyślesz. Nie zmienia niczego w twoim własnym DNS.
