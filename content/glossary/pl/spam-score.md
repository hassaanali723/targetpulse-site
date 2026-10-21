---
title: Spam score
description: Czym jest spam score e-maila, jak SpamAssassin sumuje punkty, co podnosi wynik, jak sprawdzić spam score swojego e-maila i jak go obniżyć.
slug: spam-score
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: Spam score to liczba, którą filtr antyspamowy przypisuje e-mailowi. Im wyższa liczba, tym większa szansa, że e-mail trafi do folderu spam. Każdy sygnał ostrzegawczy, który znajdzie filtr, dodaje punkty.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Obniż liczbę odbić, a nie tylko spam score
---

## Czym jest spam score?

Spam score to liczba, którą [filtr antyspamowy](/glossary/spam-filter) oblicza dla każdego e-maila. Filtr antyspamowy to oprogramowanie, które decyduje, czy e-mail trafi do skrzynki odbiorczej, czy do spamu. Filtr porównuje e-mail z listą reguł. Każda pasująca reguła dodaje punkty, a kilka reguł punkty odejmuje. Suma to spam score e-maila.

Jeśli wynik osiągnie ustalony limit, filtr oznacza e-mail jako spam. Najbardziej znanym przykładem jest SpamAssassin, bezpłatny filtr antyspamowy, którego używa wiele serwerów pocztowych. Duzi dostawcy, tacy jak Gmail i Outlook.com, korzystają z własnych systemów. Nie pokazują nadawcom żadnego wyniku.

## Jak działa spam score: przykład ze SpamAssassin

SpamAssassin to projekt Apache Software Foundation. Domyślnie oznacza e-mail jako spam, gdy wynik osiągnie 5,0 punktu. Właściciel każdego serwera pocztowego może zmienić ten limit.

Załóżmy, że sklep wysyła e-mail z trzema problemami.

- Temat wiadomości brzmi „FREE GIFT!!! ACT NOW”.
- E-mail nie ma prawidłowego podpisu DKIM.
- E-mail to jeden duży obraz prawie bez tekstu.

Pasują trzy reguły. Punkty poniżej to przykładowe wartości dla ilustracji. Prawdziwe reguły SpamAssassin mają własne punkty, które zmieniają się między wersjami.

| Reguła, która pasuje | Przykładowe punkty |
| --- | --- |
| Temat jest pisany głównie wielkimi literami | 1,5 |
| Brak prawidłowego podpisu DKIM | 1,0 |
| E-mail to głównie jeden obraz z małą ilością tekstu | 2,0 |
| **Suma** | **4,5** |

Suma to 4,5, więc e-mail zostaje tuż poniżej domyślnego limitu 5,0. Jedna reguła więcej, na przykład za skracacz linków, mogłaby podnieść wynik powyżej limitu. Wtedy e-mail trafiłby do spamu.

## Co podnosi spam score

- **Brak uwierzytelniania.** Brak rekordu [SPF](/glossary/spf), [DKIM](/glossary/dkim) lub [DMARC](/glossary/dmarc) albo rekordy, które nie przechodzą sprawdzenia.
- **Adres IP nadawcy na czarnej liście.** Adres IP to numer, który identyfikuje serwer w internecie. Wiele filtrów sprawdza publiczne listy znanych źródeł spamu. Zobacz [czarna lista e-mail](/glossary/email-blacklist).
- **Słowa typowe dla spamu i WIELKIE LITERY.** Zwroty takie jak „act now” lub „100% free”, rzędy wykrzykników i tematy pisane wielkimi literami.
- **Uszkodzony HTML.** HTML to kod, który formatuje e-mail. Kod z błędami albo kod skopiowany ze strony internetowej wygląda dla filtra na niedbały.
- **Skracacze linków.** Krótkie linki, na przykład bit.ly, ukrywają, dokąd prowadzą. Nie ufają im ani filtry, ani czytelnicy.

## Spam score dla stron internetowych to coś innego

W narzędziach SEO możesz też zobaczyć „Spam Score”. SEO to działania, dzięki którym strona internetowa pojawia się wyżej w wynikach wyszukiwania. Moz, firma zajmująca się SEO, używa Spam Score, żeby oszacować, jak bardzo strona przypomina strony ukarane przez Google. To wynik dla stron internetowych, a nie dla e-maili. Nie ma nic wspólnego z tym, czy twój e-mail trafia do skrzynki odbiorczej.

## Jak sprawdzić spam score e-maila

1. Wejdź na mail-tester.com. Strona pokaże ci testowy adres e-mail.
2. Wyślij na ten adres swój prawdziwy e-mail z narzędzia, którego zwykle używasz.
3. Otwórz stronę z wynikami. Pokazuje ona wynik w skali do 10 i wymienia każdy znaleziony problem.
4. Wklej temat i tekst wiadomości do naszego narzędzia [spam word checker](/spam-word-checker) (po angielsku). W przeglądarce zaznacza ono ryzykowne słowa, wielkie litery i skracacze linków.

Na mail-tester.com wyższy wynik jest lepszy. W SpamAssassin lepszy jest niższy wynik. Czytaj listę problemów, a nie tylko liczbę.

## Jak obniżyć spam score

1. Skonfiguruj SPF, DKIM i DMARC dla domeny, z której wysyłasz.
2. Sprawdź, czy adres IP, z którego wysyłasz, nie jest na czarnej liście. Może to zrobić narzędzie takie jak MXToolbox.
3. Pisz tematy wiadomości normalnymi literami. Używaj najwyżej jednego wykrzyknika.
4. Zamiast skracaczy używaj pełnych linków do własnej domeny.
5. Wysyłaj połączenie tekstu i obrazów, a nie jeden duży obraz.
6. Używaj czystego HTML z edytora twojego narzędzia do e-maili, a nie kodu skopiowanego ze strony internetowej.
7. Testuj ponownie po każdej zmianie.

## Spam score a weryfikacja e-mail

[Weryfikacja e-mail](/) nie zmienia twojego spam score. Wynik dotyczy treści i konfiguracji twojego e-maila, a weryfikator nie dotyka ani jednego, ani drugiego. [Weryfikator e-mail](/email-checker) znajduje adresy, które nie istnieją, zanim do nich wyślesz. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) usuwa je z całej listy, co zmniejsza liczbę odbić i usuwa nieaktywne adresy, zanim staną się [pułapkami spamowymi](/glossary/spam-trap). Odbicia i pułapki spamowe wpływają na twoją reputację nadawcy, a duzi dostawcy, tacy jak Gmail, decydują głównie na podstawie reputacji, a nie wyniku za treść.
