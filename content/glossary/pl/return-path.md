---
title: Return-Path
description: Czym jest adres Return-Path, czym różni się od adresu From, dokąd trafiają powiadomienia o odbiciu i dlaczego sprawdzają go SPF i DMARC. Z prostym przykładem.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: Return-Path to adres, na który trafiają powiadomienia o odbiciu. Ustawia go serwer wysyłający i często różni się od adresu From, który widzisz w skrzynce odbiorczej. SPF sprawdza domenę w adresie Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Usuń nieaktywne adresy, zanim zostaną odbite
---

## Czym jest Return-Path?

Return-Path to adres, na który trafiają powiadomienia o odbiciu. Powiadomienie o odbiciu to automatyczna wiadomość, którą serwer wysyła, gdy nie może dostarczyć e-maila.

Każdy e-mail ma dwa adresy nadawcy. Pierwszy to adres **From** (Od). To nazwa i adres, które odbiorca widzi w swojej skrzynce odbiorczej. Drugi to **Return-Path**. Odbiorca go nie widzi. Używają go serwery pocztowe.

Pomyśl o papierowym liście. List w kopercie ma na górze twoje imię i nazwisko. To jest adres From. Na kopercie w rogu jest adres zwrotny. Poczta używa go tylko wtedy, gdy nie może doręczyć listu. To jest Return-Path.

Return-Path nazywa się też nadawcą koperty (envelope sender) albo adresem dla odbić (bounce address). Serwer wysyłający podaje go serwerowi odbiorcy na początku dostarczania. Serwer odbiorcy zapisuje go potem w wierszu na początku e-maila, który zaczyna się od `Return-Path:`.

## Prosty przykład

Oto jak działa Return-Path, gdy e-mail zostaje odbity.

1. **Tomek wysyła newsletter.** Tomek prowadzi piekarnię. Co miesiąc wysyła newsletter przez dostawcę usług e-mail. Dostawca to firma, która wysyła masowe e-maile w twoim imieniu.
2. **Ustawione są dwa adresy.** Adres From to tom@bakery.example. Dostawca ustawia Return-Path na własny adres dla odbić, na przykład bounces@mail.provider.example.
3. **Jedna klientka odeszła.** Klientka z listy zmieniła pracę. Jej stary adres już nie istnieje.
4. **Odbicie trafia na adres Return-Path.** Serwer odbiorcy wysyła powiadomienie o odbiciu na bounces@mail.provider.example, a nie do Tomka.
5. **Dostawca reaguje.** Dostawca odczytuje odbicie i przestaje wysyłać na ten adres. Tomek nigdy nie widzi tego powiadomienia.

Dlatego odbicia newsletterów często nie trafiają do twojej własnej skrzynki. Trafiają na adres Return-Path, a obsługuje je twój dostawca.

## Return-Path a adres From

| | Adres From | Return-Path |
|---|---|---|
| **Kto go widzi** | Odbiorca, w swojej skrzynce odbiorczej | Serwery pocztowe |
| **Kto go ustawia** | Ty albo twój program pocztowy | Serwer wysyłający |
| **Do czego służy** | Pokazuje, kto wysłał e-mail | Odbiera powiadomienia o odbiciu |
| **Sprawdzany przez SPF** | Nie | Tak |

Oba adresy mogą być takie same. Gdy wysyłasz zwykły e-mail z Gmaila lub Outlooka, zwykle są takie same. Gdy wysyłasz przez dostawcę, zwykle się różnią.

## Jak znaleźć Return-Path e-maila

Otwórz pełne nagłówki e-maila. Nagłówki to wiersze z informacjami technicznymi na początku e-maila. W Gmailu otwórz e-mail, kliknij trzy kropki i wybierz **Pokaż oryginał**. W Outlooku otwórz właściwości wiadomości. Poszukaj u góry takiego wiersza:

`Return-Path: <bounces@mail.provider.example>`

## Dlaczego to ma znaczenie dla SPF i DMARC

[SPF](/glossary/spf) to reguła w twojej domenie, która wymienia serwery uprawnione do wysyłania twoich e-maili. SPF sprawdza domenę w adresie Return-Path. Nie sprawdza adresu From.

[DMARC](/glossary/dmarc) dodaje drugi test. Sprawdza, czy domena, która przeszła SPF, zgadza się z domeną w adresie From. Jeśli dostawca używa własnej domeny w Return-Path, SPF może przejść dla dostawcy, a mimo to nie zgadzać się z twoją domeną w adresie From.

Wielu dostawców pozwala ustawić Return-Path we własnej domenie. Często nazywa się to własną domeną dla odbić (custom bounce domain). Wtedy SPF przechodzi dla twojej własnej domeny, a DMARC może uwzględnić ten wynik.

**Przykład:** adres From Tomka jest w domenie bakery.example. Jego dostawca pozwala mu ustawić Return-Path na bounces.bakery.example. Teraz domena, która przechodzi SPF, zgadza się z domeną w adresie From.

## Jak pomaga weryfikator

Każde odbicie z twojej listy trafia na adres Return-Path. Twój dostawca je liczy. Gdy wraca ich zbyt wiele, wielu dostawców wstrzymuje konto albo prosi o oczyszczenie listy.

[Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy adres istnieje, zanim cokolwiek wyślesz. Nieaktywne adresy zostają usunięte wcześniej, więc na adres Return-Path trafia znacznie mniej odbić.
