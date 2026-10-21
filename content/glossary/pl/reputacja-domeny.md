---
title: Reputacja domeny
description: Czym jest reputacja domeny w e-mailu, czym różni się od reputacji IP, co jej szkodzi, jak ją sprawdzić i jak chronić domenę, z której wysyłasz.
slug: reputacja-domeny
date: 2026-10-12
updated: 2026-10-12
keyword: reputacja domeny
short: Reputacja domeny to poziom zaufania, jakim dostawcy skrzynek, na przykład Gmail, darzą domenę, z której wysyłasz. Domena to część twojego adresu e-mail po znaku @, na przykład example.com. Dobra reputacja domeny zostaje z tobą, nawet gdy zmieniasz usługę do wysyłki.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Chroń reputację domeny przed kolejną wysyłką
---

## Czym jest reputacja domeny?

Domena to nazwa po znaku @ w twoim adresie e-mail. W adresie anna@example.com domeną jest example.com. Dostawcy skrzynek, tacy jak Gmail, Outlook.com i Yahoo, przechowują historię e-maili, które przychodzą z każdej domeny. Śledzą odbicia, skargi na spam i wyniki uwierzytelniania. Śledzą też, jak ludzie reagują na te e-maile. Na podstawie tej historii decydują, jak bardzo ufać domenie. Ten poziom zaufania to reputacja domeny.

Dostawcy mogą powiązać każdy e-mail z jego prawdziwą domeną dzięki trzem rekordom. [SPF](/glossary/spf), [DKIM](/glossary/dkim) i [DMARC](/glossary/dmarc) dowodzą, z której domeny naprawdę pochodzi e-mail. Firma może często zmieniać serwery wysyłające, ale swoją domenę zwykle zachowuje przez lata.

## Przykład: przejście do nowego ESP

Firma Brightline wysyła newslettery z adresu news@brightline.com. Od trzech lat korzysta z jednego ESP. ESP to firma, która wysyła e-maile dla swoich klientów, na przykład Mailchimp lub Brevo.

Brightline postanawia przejść do innego ESP. Oto co się zmienia.

1. Nowy ESP wysyła z innych serwerów, więc zmienia się adres IP. Adres IP to numer, który identyfikuje serwer w internecie.
2. Domena pozostaje taka sama. E-maile nadal przychodzą z news@brightline.com.
3. Gmail widzi nowe adresy IP. Rozpoznaje jednak brightline.com i jej podpis DKIM.
4. Reputacja domeny Brightline przechodzi razem z firmą. Trzy lata historii pomagają jej e-mailom nadal trafiać do skrzynki odbiorczej.

Działa to też w drugą stronę. Gdyby Brightline miała słabą reputację domeny, nowy ESP by tego nie naprawił. Problem zostałby przy domenie.

## Reputacja domeny a reputacja IP

| | Reputacja domeny | Reputacja IP |
| --- | --- | --- |
| Co ocenia | Domenę, z której wysyłasz, na przykład example.com | Adres serwera, z którego wychodzi twój e-mail |
| Zmienia się przy zmianie ESP | Nie | Tak |
| Wspólna z innymi nadawcami | Nie, tylko ty używasz swojej domeny | Często, na współdzielonym IP |
| Jak dostawca ją rozpoznaje | Po domenie w SPF, DKIM i DMARC | Po adresie IP, który się łączy |

Dostawcy używają obu. Strona [reputacja IP](/glossary/ip-reputation) wyjaśnia drugą połowę.

## Co szkodzi reputacji domeny

- **Odbicia.** Wiele e-maili na adresy, które nie istnieją, sugeruje listę kupioną albo nigdy nieczyszczoną.
- **Skargi na spam.** Wytyczne Google dla nadawców mówią, żeby utrzymywać wskaźnik spamu poniżej 0,10% i nigdy nie dojść do 0,30%.
- **Pułapki spamowe.** To adresy, które istnieją tylko po to, żeby wyłapywać nadawców ze złymi listami. Zobacz [pułapka spamowa](/glossary/spam-trap).
- **Brak uwierzytelniania.** Bez SPF, DKIM i DMARC dostawcy nie mogą mieć pewności, że e-mail naprawdę pochodzi od ciebie.
- **Nagły wzrost liczby wysyłek.** Nowa lub dotąd cicha domena, która nagle wysyła tysiące e-maili, zachowuje się tak jak spamerzy.

## Jak sprawdzić reputację domeny

Nie ma jednej publicznej oceny. Każdy dostawca ma własny obraz twojej domeny. Oto główne sposoby, żeby go zobaczyć.

- **Google Postmaster Tools.** Bezpłatna usługa Google dla e-maili wysyłanych do użytkowników Gmaila. Dodajesz swoją domenę i potwierdzasz, że należy do ciebie, za pomocą rekordu DNS, czyli ustawienia w publicznym katalogu twojej domeny. Potem usługa pokazuje dane, na przykład wskaźnik spamu i wyniki uwierzytelniania. Zobacz [Google Postmaster Tools](/glossary/postmaster-tools).
- **Twoje własne liczby.** Spadające wskaźniki otwarć u jednego dostawcy mogą oznaczać, że twoje e-maile trafiają tam do spamu.
- **Sprawdzanie czarnych list.** Narzędzia takie jak MXToolbox pokazują, czy twoja domena jest na publicznej czarnej liście domen.

## Jak chronić reputację domeny

1. Skonfiguruj SPF, DKIM i DMARC dla każdej usługi, która wysyła e-maile jako twoja domena.
2. Weryfikuj listę przed każdą dużą wysyłką i usuwaj adresy, które zostałyby odbite.
3. Wysyłaj cold mailing z osobnej domeny lub subdomeny, na przykład brightline-mail.com lub outreach.brightline.com. To daje pewien dystans między cold mailingiem a twoją główną domeną. Dostawcy nadal mogą powiązać subdomenę z jej domeną główną.
4. Z nową domeną zaczynaj powoli. Wysyłaj niewielkie dzienne ilości i zwiększaj je przez kilka tygodni. Zobacz [rozgrzewanie skrzynki e-mail](/glossary/email-warmup).
5. Ułatw wypisanie się, żeby ludzie wypisywali się zamiast klikać „Zgłoś spam”.

## Reputacja domeny a weryfikacja e-mail

Odbicia to jeden z sygnałów, których dostawcy używają do oceny twojej domeny, i możesz je kontrolować przed wysyłką. [Weryfikator e-mail](/email-checker) znajduje adresy, które nie istnieją. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to samo dla całej listy, więc twoja kampania trafia do prawdziwych skrzynek pocztowych. Regularna [weryfikacja e-mail](/) usuwa też stare adresy, zanim staną się odnowionymi pułapkami spamowymi. Nie naprawia skarg ani braku uwierzytelniania, więc pozostałe kroki powyżej nadal obowiązują.
