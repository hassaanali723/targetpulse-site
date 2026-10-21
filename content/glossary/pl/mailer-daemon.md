---
title: Mailer-daemon
description: Czym jest wiadomość od mailer-daemon, dlaczego ją dostajesz, jak odczytać kod w środku i co zrobić, gdy dotyczy e-maila, który nie wyszedł od ciebie.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: Mailer-daemon to program na serwerze pocztowym, który wysyła automatyczne wiadomości. Większość tych wiadomości to powiadomienia o odbiciu. Wiadomość od mailer-daemon oznacza, że wysłany przez ciebie e-mail nie został dostarczony.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Usuń adresy, które są odbijane, zanim wyślesz
---

## Czym jest mailer-daemon?

Mailer-daemon to program na serwerze pocztowym, który wysyła automatyczne powiadomienia. Większość tych powiadomień informuje, że wysłany przez ciebie e-mail nie został dostarczony.

Najpierw kilka pojęć. Serwer to komputer, który działa bez przerwy i obsługuje pocztę e-mail. Daemon to program, który działa w tle na serwerze, bez nadzoru człowieka. Mailer-daemon to więc program działający w tle, który zajmuje się e-mailami, których nie da się dostarczyć.

Gdy twój e-mail zostaje odrzucony, mailer-daemon wysyła ci powiadomienie. Nadawcą jest zwykle `MAILER-DAEMON@` z domeną serwera albo `postmaster@`. Domena to część adresu po znaku @, na przykład example.com.

Takie powiadomienie nazywa się [raportem o niedostarczeniu (NDR)](/glossary/ndr). Mówi ci, na który adres nie udało się dostarczyć wiadomości, kiedy i dlaczego. Wiele osób nazywa je po prostu wiadomością o odbiciu.

## Prosty przykład

Oto jak wiadomość od mailer-daemon trafia do twojej skrzynki odbiorczej.

1. **Priya wysyła wycenę.** Priya prowadzi drukarnię. Wysyła wycenę nowemu klientowi na adres sam@client.example.
2. **Adres jest błędny.** Prawdziwy adres klienta to sam.lee@client.example. Priya przepisała go z wizytówki i pominęła „.lee”.
3. **Serwer go odrzuca.** Serwer pocztowy client.example nie ma skrzynki o nazwie „sam”. Odrzuca e-mail.
4. **Przychodzi powiadomienie.** Kilka sekund później Priya dostaje e-mail od MAILER-DAEMON. Jest w nim napisane, że jej e-mail nie mógł zostać dostarczony.
5. **Priya czyta kod.** W środku znajduje `550 5.1.1`. Ten kod oznacza, że adres nie istnieje.
6. **Priya poprawia błąd.** Sprawdza wizytówkę, poprawia adres i wysyła wycenę ponownie.

Mailer-daemon nie zablokował e-maila Priyi. Odrzucił go drugi serwer. Mailer-daemon tylko ją o tym poinformował.

## Jak odczytać wiadomość

Najważniejszą częścią wiadomości jest kod. Szukaj trzycyfrowej liczby i liczby z kropkami. Przykład: `550 5.1.1`. Pierwsza cyfra mówi ci, jaki to rodzaj problemu.

| Pierwsza cyfra | Rodzaj | Co to oznacza | Co zrobić |
|---|---|---|---|
| **5** | [Twarde odbicie (hard bounce)](/glossary/hard-bounce) | Adres nie istnieje albo serwer zablokował twój e-mail. | Nie wysyłaj ponownie, dopóki nie wiesz, który to przypadek. |
| **4** | [Miękkie odbicie (soft bounce)](/glossary/soft-bounce) | Skrzynka jest pełna albo serwer jest zajęty. | Poczekaj. Twój serwer pocztowy sam ponowi próbę. |

Tekst obok kodu pisze serwer odbiorcy. Dwa przykłady:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Dokumentacja Microsoftu mówi, że oznacza to „the recipient's address doesn't exist”, czyli „adres odbiorcy nie istnieje”.

## Wiadomości od mailer-daemon dla e-maili, które nie wyszły od ciebie

Czasem dostajesz powiadomienie o odbiciu e-maila, który nigdy nie wyszedł od ciebie. Nazywa się to [backscatter](/glossary/backscatter). Oto jak do tego dochodzi.

1. Spamer wysyła tysiące e-maili. W polu Od (From) wpisuje twój adres, na przykład info@shop.example.
2. Wiele z tych e-maili trafia na adresy, które nie istnieją.
3. Serwery odbiorców je odrzucają. Ich mailer-daemon wysyła każde powiadomienie na adres z pola Od, czyli na twój.
4. Twoja skrzynka zapełnia się powiadomieniami od mailer-daemon o e-mailach, które nigdy nie wyszły od ciebie.

Nikt nie włamał się na twoje konto. Rozwiązanie leży po stronie twojej domeny. Opublikuj rekordy SPF, DKIM i DMARC. To ustawienia twojej domeny, które mówią serwerom odbiorców, które e-maile naprawdę pochodzą od ciebie. Wtedy serwery odbiorców mogą odrzucać fałszywe e-maile, zamiast wysyłać ci powiadomienia o odbiciu.

## Dlaczego to ma znaczenie dla nadawców

Każda wiadomość od mailer-daemon to odbicie. Dostawcy skrzynek, tacy jak Google i Microsoft, liczą, ile twoich e-maili trafia na adresy, które nie istnieją. Wiele powiadomień z kodem `5.1.1` mówi im, że twoja lista nie została sprawdzona.

**Przykład:** firma wysyła newsletter na starą listę 2000 kontaktów. Wraca dwieście powiadomień od mailer-daemon, wszystkie z kodem `5.1.1`. Każde z nich to dla dostawców sygnał, że nikt nie oczyścił listy. Te liczby są tylko przykładem.

## Jak pomaga weryfikator

[Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy przyjmuje e-maile dla danego adresu. Robi to, zanim cokolwiek wyślesz. Serwer podaje ten sam kod, który mailer-daemon wysłałby ci później. Różnica polega na tym, że żaden e-mail nie został wysłany, a twoja reputacja nie ucierpiała.

[Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) wykonuje to samo sprawdzenie dla każdego adresu na liście. [Weryfikacja e-mail](/) nie zatrzyma backscatter, bo te e-maile nie wyszły od ciebie. Zatrzymuje powiadomienia od mailer-daemon, które pochodzą z nieaktywnych adresów na twojej własnej liście.
