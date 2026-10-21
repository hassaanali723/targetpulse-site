---
title: Rozgrzewanie skrzynki e-mail
description: Czym jest rozgrzewanie skrzynki e-mail (warm-up), po co nowej domenie, przykładowy harmonogram, ręczny warm-up a narzędzia i błędy, które go niweczą.
slug: rozgrzewanie-skrzynki-email
date: 2026-10-12
updated: 2026-10-12
keyword: rozgrzewanie skrzynki email
short: Rozgrzewanie skrzynki e-mail (warm-up) oznacza powolne zwiększanie liczby e-maili, które wysyła nowy adres lub nowa domena. Dostawcy skrzynek nie mają żadnej historii nowej domeny, więc ostrożnie traktują jej e-maile. Rozgrzewanie buduje tę historię krok po kroku.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Zweryfikuj listę przed pierwszą prawdziwą kampanią
---

## Czym jest rozgrzewanie skrzynki e-mail?

Rozgrzewanie skrzynki e-mail (warm-up) to proces powolnego startu z nowym adresem e-mail lub nową domeną. Na początku wysyłasz niewiele e-maili. Potem co tydzień trochę zwiększasz ich liczbę. Domena to nazwa po znaku @ w adresie e-mail, na przykład example.com.

Celem jest pokazanie dostawcom skrzynek, takim jak Gmail i Outlook.com, że ludzie chcą dostawać twoje e-maile. Dostawcy obserwują, jak ludzie reagują na twoje pierwsze wiadomości. Jeśli niewiele e-maili zostaje odbitych i niewiele osób się skarży, dostawcy bardziej ufają twojej domenie. Wtedy przyjmują od niej więcej e-maili.

## Dlaczego nowa domena potrzebuje rozgrzewania

Dostawcy skrzynek oceniają nadawcę po jego historii. Nazywa się to [reputacją domeny](/glossary/domain-reputation). Nowa domena nie ma żadnej historii.

Spamerzy często rejestrują nowe domeny i już pierwszego dnia wysyłają tysiące e-maili. Dlatego dostawcy ostrożnie traktują domeny, których jeszcze nie znają. Duża pierwsza kampania z zupełnie nowej domeny może zostać spowolniona, przeniesiona do spamu albo częściowo odrzucona.

Rozgrzewanie pozwala tego uniknąć. Zaczynasz od małej liczby wysyłek, co jest normalne dla nowego nadawcy. Każdy dobry tydzień daje dostawcom więcej historii, na podstawie której cię oceniają.

## Przykładowy harmonogram rozgrzewania

Załóżmy, że Leo zakłada nową domenę sprzedażową leo-outreach.com. Chce wysyłać z niej 200 e-maili dziennie. Ten harmonogram pokazuje jeden ze sposobów stopniowego zwiększania wysyłek. Liczby są tylko przykładem. Prawdziwe harmonogramy zależą od dostawcy, listy i narzędzia.

| Tydzień | E-maile dziennie | Co obserwować |
| --- | --- | --- |
| 1 | Około 20 | Odpowiedzi i odbicia |
| 2 | Około 40 | Czy e-maile trafiają do spamu |
| 3 | Około 80 | Skargi na spam |
| 4 | Około 120 | Wskaźniki otwarć u każdego dostawcy |
| 5 i później | Do 200 | Utrzymuj stałą liczbę wysyłek |

W 1. tygodniu Leo wysyła e-maile do osób, które najchętniej odpowiedzą, na przykład do obecnych kontaktów. Jeśli w którymś tygodniu rośnie liczba odbić lub skarg, zostaje na tym samym poziomie przez kolejny tydzień.

## Ręczne rozgrzewanie a narzędzia do rozgrzewania

**Ręczne rozgrzewanie** oznacza, że wysyłasz prawdziwe e-maile do prawdziwych kontaktów. Zwiększasz ich liczbę według harmonogramu takiego jak powyżej. Zaczynasz od osób, które najchętniej otworzą wiadomość i odpowiedzą.

**Narzędzia do rozgrzewania** wykonują część tej pracy za ciebie. Łączysz swoją skrzynkę pocztową z narzędziem. Narzędzie wysyła e-maile między twoją skrzynką a siecią innych skrzynek, które korzystają z tego samego narzędzia. Te skrzynki otwierają e-maile, odpowiadają na nie i przenoszą je ze spamu. W ten sposób na twoim nowym adresie pojawia się aktywność, zanim wyślesz prawdziwe kampanie.

Obie metody mają dać stałą liczbę wysyłek i dobre reakcje. Narzędzie do rozgrzewania nie zastępuje dobrej listy. Twoja reputacja nadal zależy od tego, jak prawdziwi odbiorcy reagują na twoje prawdziwe kampanie.

## Rozgrzewanie skrzynki a rozgrzewanie IP

| | Rozgrzewanie skrzynki e-mail | Rozgrzewanie IP |
| --- | --- | --- |
| Co buduje | Zaufanie do nowej domeny lub skrzynki pocztowej | Zaufanie do nowego adresu IP, z którego wysyłasz |
| Kto je potrzebuje | Każdy, kto ma nową domenę lub skrzynkę pocztową | Nadawcy z nowym dedykowanym IP |
| Typowy nadawca | Zespoły sprzedaży i małe firmy | Duzi nadawcy z własnym IP |

Adres IP to numer, który identyfikuje serwer wysyłający. Jeśli wysyłasz przez współdzielone IP u dostawcy ESP, to IP ma już historię wysyłek. Musisz rozgrzać tylko swoją domenę. Zobacz [rozgrzewanie IP](/glossary/ip-warming).

## Błędy, które niweczą rozgrzewanie

- **Wysyłka na niezweryfikowaną listę.** Załóżmy, że 10 z twoich pierwszych 100 e-maili zostaje odbitych. Dostawcy widzą wtedy w pierwszym tygodniu nowego nadawcę ze złą listą.
- **Skoki liczby wysyłek.** Przejście od 40 e-maili dziennie do 1000 w jednym kroku to zachowanie typowe dla spamerów.
- **Brak uwierzytelniania.** Skonfiguruj [SPF](/glossary/spf), [DKIM](/glossary/dkim) i [DMARC](/glossary/dmarc) przed pierwszym e-mailem, a nie po nim.
- **Ignorowanie odpowiedzi.** Jeśli ktoś prosi, żeby więcej do niego nie pisać, od razu usuń go z listy. W przeciwnym razie może kliknąć „Zgłoś spam”.
- **Zbyt wiele zmian naraz.** Nowa domena, nowe narzędzie i nowa lista w tym samym tygodniu utrudniają znalezienie przyczyny problemów.

## Rozgrzewanie skrzynki a weryfikacja e-mail

Zweryfikuj listę przed pierwszą prawdziwą kampanią z nowej domeny. W pierwszych tygodniach dostawcy mają mało historii, na podstawie której mogą cię ocenić, więc każde odbicie się wyróżnia. [Weryfikator e-mail](/email-checker) pokazuje, czy adres istnieje, zanim do niego wyślesz. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to dla całej twojej listy, więc e-maile w czasie rozgrzewania trafiają do prawdziwych skrzynek pocztowych. Rozgrzewanie powoli buduje zaufanie, a [weryfikacja e-mail](/) nie pozwala, żeby odbicia zniweczyły tę pracę.
