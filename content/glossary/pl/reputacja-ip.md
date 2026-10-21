---
title: Reputacja IP
description: Czym jest reputacja IP w e-mailu, czym różni się IP współdzielone od dedykowanego, co buduje reputację, a co jej szkodzi, jak ją sprawdzić i poprawić.
slug: reputacja-ip
date: 2026-10-12
updated: 2026-10-12
keyword: reputacja ip
short: Reputacja IP to poziom zaufania, jakim dostawcy skrzynek, tacy jak Gmail i Outlook, darzą adres IP, z którego przychodzą twoje e-maile. Adres IP to numer, który identyfikuje serwer w internecie. Przy słabej reputacji IP twoje e-maile trafiają do spamu albo są blokowane.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Usuwaj nieaktywne adresy z listy, żeby chronić reputację IP
---

## Czym jest reputacja IP?

Każdy serwer w internecie ma adres IP. To numer, na przykład `192.0.2.10`, który identyfikuje serwer. Gdy wysyłasz e-mail, wychodzi on z serwera, który ma adres IP.

Dostawcy skrzynek, tacy jak Gmail, Outlook.com i Yahoo, śledzą e-maile, które przychodzą z każdego adresu IP. Liczą, ile e-maili zostaje odbitych i ile osób oznacza je jako spam. Sprawdzają też, czy adres IP jest na [czarnych listach](/glossary/email-blacklist). Na podstawie tej historii decydują, jak bardzo ufać adresowi IP. Ten poziom zaufania to reputacja IP.

Dobra reputacja IP pomaga twoim e-mailom trafiać do skrzynki odbiorczej. Słaba prowadzi do folderu spam, wolniejszego dostarczania lub odrzucania e-maili.

## Przykład: dwóch nadawców na jednym współdzielonym IP

ESP to firma, która wysyła e-maile dla swoich klientów, na przykład Mailchimp lub SendGrid. Załóżmy, że dwóch jej klientów wysyła z tego samego adresu IP, `192.0.2.10`.

- **Klient A** to księgarnia. Wysyła e-maile do osób, które zapisały się na jej stronie. Niewiele e-maili zostaje odbitych i niewiele osób się skarży.
- **Klient B** kupił listę 50 000 adresów. Tysiące z nich zostają odbite. Wielu odbiorców klika „Zgłoś spam”.

Gmail zapisuje odbicia i skargi na konto adresu `192.0.2.10`. Reputacja tego IP spada. Część e-maili księgarni może teraz również trafiać do spamu, chociaż księgarnia nie zrobiła nic złego.

ESP starają się temu zapobiegać. Wielu z nich pilnuje współczynnika odbić i skarg każdego klienta. Wstrzymują konta takie jak konto klienta B, żeby chronić innych klientów na tym samym IP.

## IP współdzielone a IP dedykowane

| | IP współdzielone | IP dedykowane |
| --- | --- | --- |
| Kto z niego wysyła | Wielu klientów tego samego ESP | Tylko ty |
| Od czego zależy jego reputacja | Od wszystkich, którzy z niego wysyłają | Tylko od twoich e-maili |
| Dla kogo się nadaje | Dla małych i średnich nadawców | Dla dużych nadawców ze stałą liczbą wysyłek |
| Konfiguracja | Gotowe do użycia | Najpierw trzeba je rozgrzać |

Dedykowane IP daje ci pełną kontrolę nad jego reputacją. Oznacza też, że nie pomagają ci dobre e-maile nikogo innego. Nowe dedykowane IP nie ma historii, więc budujesz jego reputację powoli.

## Co buduje reputację IP, a co jej szkodzi

Dobrą reputację IP budują:

- Wysyłanie stałej liczby e-maili, bez nagłych skoków.
- Niski współczynnik odbić, bo twoja lista jest czysta.
- Niewiele skarg na spam, bo ludzie prosili o twoje e-maile.

Szkodzą jej:

- Wiele [twardych odbić (hard bounce)](/glossary/hard-bounce) od adresów, które nie istnieją.
- E-maile do [pułapek spamowych](/glossary/spam-trap), czyli adresów, które istnieją tylko po to, żeby wyłapywać nadawców ze złymi listami.
- Skargi na spam od osób, które nie spodziewały się twoich e-maili.
- Wpis na czarnej liście, na przykład Spamhaus.
- Duża liczba e-maili z nowego IP bez historii.

## Jak sprawdzić reputację IP

1. Ustal swój adres IP, z którego wysyłasz. Wyślij do siebie e-mail na Gmaila, otwórz go i wybierz Pokaż oryginał. Gmail pokazuje adres IP obok wyniku SPF. Może ci go też podać twój ESP.
2. Wpisz adres IP w narzędziu do sprawdzania czarnych list, na przykład MXToolbox. Sprawdza ono IP na wielu publicznych czarnych listach naraz.
3. Dla Outlook.com zarejestruj się w Microsoft SNDS (Smart Network Data Services). Usługa pokazuje dane o e-mailach, które twoje IP wysyła do użytkowników Outlook.com.
4. Dla Gmaila użyj [Google Postmaster Tools](/glossary/postmaster-tools). Usługa pokazuje dane o e-mailach, które twoja domena wysyła do użytkowników Gmaila.

## Jak poprawić reputację IP

1. Najpierw znajdź i usuń przyczynę, na przykład złą listę lub przejęte konto.
2. Usuń adresy, które są odbijane, i zweryfikuj listę przed kolejną wysyłką.
3. Przestań wysyłać do osób, które nigdy nie otwierają twoich e-maili.
4. Jeśli twoje IP jest na czarnej liście, poproś o usunięcie, gdy już usuniesz przyczynę.
5. Z każdym nowym IP zaczynaj powoli. Wysyłaj niewielkie dzienne ilości i zwiększaj je przez kilka tygodni. Zobacz [rozgrzewanie IP](/glossary/ip-warming).

## Reputacja IP a reputacja domeny

Reputacja IP należy do adresu serwera. [Reputacja domeny](/glossary/domain-reputation) należy do nazwy po znaku @ w twoim adresie e-mail, na przykład example.com. Jeśli przejdziesz do nowego ESP, twoje IP się zmieni, ale domena pozostanie taka sama. Dostawcy używają obu, a problem z którąkolwiek z nich może zaszkodzić dostarczaniu.

## Reputacja IP a weryfikacja e-mail

Odbicia i pułapki spamowe szkodzą reputacji IP i oba problemy biorą się ze złych adresów na twojej liście. [Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy adres istnieje, zanim wyślesz wiadomość. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to dla całej listy i oznacza adresy, które zostałyby odbite. Usunięcie ich dzięki [weryfikacji e-mail](/) oznacza, że na konto twojego IP trafia mniej odbić. Weryfikacja nie znajdzie każdej pułapki spamowej, bo niektóre pułapki to działające skrzynki pocztowe, ale usuwa nieaktywne adresy, zanim zostaną zamienione w pułapki.
