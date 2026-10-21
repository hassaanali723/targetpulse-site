---
title: Raport o niedostarczeniu (NDR)
description: Czym jest raport o niedostarczeniu, kto go wysyła, jak odczytać kod i części w środku oraz co zrobić, gdy go dostaniesz. Z prostym przykładem.
slug: raport-niedostarczenia
date: 2026-10-22
updated: 2026-10-22
keyword: raport o niedostarczeniu
short: Raport o niedostarczeniu, czyli NDR, to automatyczny e-mail z informacją, że wysłana przez ciebie wiadomość nie została dostarczona. Podaje adres, na który nie udało się jej dostarczyć, i kod, który wyjaśnia przyczynę. Większość osób nazywa go wiadomością o odbiciu.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Usuń adresy, które odesłałyby ci raport NDR
---

## Czym jest raport o niedostarczeniu?

Raport o niedostarczeniu, czyli NDR (non-delivery report), to automatyczny e-mail z informacją, że wiadomość nie została dostarczona. Przychodzi kilka sekund albo kilka godzin po wysłaniu.

Większość osób nazywa go wiadomością o odbiciu. Spotkasz też nazwę raport niedostarczenia. Techniczna nazwa w standardach poczty e-mail to powiadomienie o stanie dostarczenia (delivery status notification), czyli DSN. Wszystkie te nazwy oznaczają to samo.

NDR przychodzi zwykle z adresu takiego jak `MAILER-DAEMON@` albo `postmaster@`. To automatyczni nadawcy na serwerze pocztowym. Nikt nie pisze tych wiadomości ręcznie. Tworzy je program o nazwie [mailer-daemon](/glossary/mailer-daemon).

## Prosty przykład

Oto jak NDR trafia do ciebie.

1. **Anna wysyła fakturę.** Anna jest księgową. Wysyła fakturę do klienta na adres mark@oldfirm.example.
2. **Adresu już nie ma.** Mark odszedł z tej firmy w zeszłym roku. Jego skrzynkę usunięto.
3. **Serwer go odrzuca.** Serwer pocztowy oldfirm.example nie ma skrzynki Marka. Odrzuca e-mail.
4. **Przychodzi NDR.** Minutę później Anna dostaje e-mail z tytułem „Undeliverable” albo „Delivery Status Notification (Failure)”.
5. **Anna czyta kod.** W środku znajduje `550 5.1.1`. Ten kod oznacza, że adres nie istnieje.
6. **Anna rozwiązuje problem.** Prosi klienta o nowy kontakt i wysyła tam fakturę.

NDR nie spowodował problemu. Tylko poinformował o nim Annę.

## Co zawiera NDR

Większość raportów NDR ma te same części, nawet jeśli w każdym programie pocztowym wyglądają inaczej.

| Część | Co pokazuje |
|---|---|
| **Adres, który zawiódł** | Adres, który nie mógł odebrać twojego e-maila |
| **Kod błędu** | Krótki kod, na przykład `550 5.1.1`, który wyjaśnia problem |
| **Komunikat serwera** | Zdanie od serwera odbiorcy, na przykład „user unknown”, czyli „nieznany użytkownik” |
| **Twój oryginalny e-mail** | Często dołączony, żeby było widać, co nie zostało dostarczone |

## Jak odczytać kod

Pierwsza cyfra kodu mówi ci, jaki to rodzaj problemu.

| Pierwsza cyfra | Rodzaj | Co to oznacza | Co zrobić |
|---|---|---|---|
| **5** | [Twarde odbicie (hard bounce)](/glossary/hard-bounce) | Błąd jest stały. Adres może nie istnieć albo serwer cię zablokował. | Nie wysyłaj ponownie na ten adres, dopóki nie wiesz, który to przypadek. |
| **4** | [Miękkie odbicie (soft bounce)](/glossary/soft-bounce) | Błąd jest tymczasowy. Skrzynka może być pełna albo serwer zajęty. | Poczekaj. Twój serwer pocztowy sam ponowi próbę. |

Dwa częste przykłady:

- `550 5.1.1` oznacza, że adres nie istnieje. Usuń go z listy.
- `452 4.2.2` oznacza, że skrzynka jest pełna. Spróbuj ponownie później.

## Gdy dostajesz NDR dla e-maila, który nie wyszedł od ciebie

Czasem przychodzi NDR dla e-maila, którego nigdy nie napisano z twojego konta. Nazywa się to [backscatter](/glossary/backscatter). Spamer wpisał twój adres w pole nadawcy, e-mail nie został dostarczony i NDR trafił do ciebie. Zwykle nikt nie włamał się na twoje konto. Opublikuj rekordy SPF, DKIM i DMARC dla swojej domeny. Wtedy serwery odbiorców mogą odrzucać fałszywe e-maile.

## Dlaczego raporty NDR mają znaczenie dla nadawców

Każdy NDR z nieaktywnego adresu działa na twoją niekorzyść. Dostawcy skrzynek, tacy jak Google i Microsoft, sprawdzają, ile twoich e-maili trafia na adresy, które nie istnieją. Wiele raportów NDR z kodem `5.1.1` mówi im, że twoja lista jest stara.

**Przykład:** sklep wysyła ofertę do 5000 starych kontaktów. Jeśli wróci 400 raportów NDR, to 8% listy. Wiele platform wysyłkowych sprawdza albo wstrzymuje konta z takimi wynikami. Te liczby są tylko przykładem.

## Jak pomaga weryfikator

[Weryfikator e-mail](/email-checker) pyta serwer odbiorcy o adres, zanim wyślesz wiadomość. Serwer podaje tę samą odpowiedź, którą umieściłby w raporcie NDR. Różnica polega na tym, że żaden e-mail nie został wysłany. Nic nie zostaje odbite, a twoja reputacja nie ucierpi.
