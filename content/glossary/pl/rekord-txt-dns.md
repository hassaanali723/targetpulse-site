---
title: Rekord TXT DNS
description: Czym jest rekord TXT w DNS, do czego służy w poczcie e-mail (SPF, DKIM i DMARC), jak go dodać, jakie błędy go psują i jak go sprawdzić. Z przykładami.
slug: rekord-txt-dns
date: 2026-10-22
updated: 2026-10-22
keyword: rekord txt
short: Rekord TXT DNS to wiersz tekstu zapisany w ustawieniach twojej domeny. Serwery pocztowe odczytują rekordy TXT, żeby sprawdzić SPF, DKIM i DMARC. Inne usługi odczytują je, żeby potwierdzić, że domena należy do ciebie.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Twoje rekordy są ustawione. Teraz sprawdź adresy, na które wysyłasz
---

## Czym jest rekord TXT DNS?

Rekord TXT DNS to wiersz tekstu zapisany w ustawieniach twojej domeny. Każdy w internecie może go odczytać.

Najpierw kilka słów o tym, czym jest DNS. DNS to skrót od Domain Name System. Działa jak publiczna książka telefoniczna dla domen. Gdy ktoś wpisuje twoją domenę, DNS mówi jego komputerowi, gdzie ją znaleźć. DNS przechowuje różne rodzaje wpisów, nazywane rekordami. Każdy rodzaj rekordu ma jedno zadanie.

Rekord TXT przechowuje zwykły tekst. Nikogo nigdzie nie kieruje. To notatka dołączona do twojej domeny. Inne systemy odczytują tę notatkę i na jej podstawie działają.

## Do czego służą rekordy TXT

W poczcie e-mail rekordy TXT przechowują reguły, które dowodzą, że twoje e-maile są prawdziwe.

| Zastosowanie | Gdzie umieszcza się rekord | Przykładowa wartość |
|---|---|---|
| **[SPF](/glossary/spf)** | twoja domena, na przykład `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Potwierdzenie własności domeny** | twoja domena | `google-site-verification=abc123...` |

Powyższe wartości to skrócone przykłady. Prawdziwe wartości podaje twój dostawca poczty albo usługa, którą podłączasz.

## Prosty przykład

Oto jak dodaje się rekord TXT.

1. **Marco zaczyna korzystać z Google Workspace.** Chce, żeby jego e-maile z adresu marco@studio.example trafiały do skrzynek odbiorczych.
2. **Google podaje mu wartość.** Instrukcja konfiguracji mówi, żeby dodał rekord SPF z wartością `v=spf1 include:_spf.google.com ~all`.
3. **Marco otwiera ustawienia domeny.** Loguje się tam, gdzie kupił domenę. To miejsce nazywa się rejestratorem domeny albo dostawcą DNS.
4. **Dodaje rekord TXT.** Wybiera typ TXT, zostawia nazwę swojej domeny i wkleja wartość.
5. **Czeka.** Zmiana może być widoczna wszędzie po kilku minutach albo dopiero po kilku godzinach.
6. **Serwery mogą go teraz sprawdzić.** Gdy Marco wysyła e-mail, serwer odbiorcy odczytuje jego rekord TXT. Widzi, że serwery Google mogą wysyłać e-maile z domeny studio.example.

## Błędy, które psują rekordy TXT

Większość problemów z rekordami TXT wynika z kilku prostych błędów.

- **Tylko jeden rekord SPF na domenę.** Jeśli domena ma dwa rekordy TXT zaczynające się od `v=spf1`, SPF kończy się błędem. Połącz je w jeden rekord.
- **Długie wartości są dzielone.** Jeden fragment tekstu w rekordzie TXT może mieć maksymalnie 255 znaków. Długie wartości, takie jak klucze DKIM, są zapisywane jako kilka fragmentów. Większość dostawców DNS robi to za ciebie.
- **Użyj dokładnej nazwy.** Rekord DMARC musi znajdować się pod nazwą `_dmarc`, a nie w głównej domenie. Rekord DKIM musi znajdować się pod nazwą selektora, którą podaje twój dostawca.
- **Skopiuj wartość dokładnie.** Brak jednego znaku sprawia, że rekord jest bezużyteczny.

## Jak sprawdzić rekord TXT

Możesz odczytać rekordy TXT każdej domeny. Na komputerze z systemem macOS lub Linux otwórz terminal i wpisz `dig TXT example.com`. W systemie Windows wpisz `nslookup -type=TXT example.com`.

Możesz też użyć naszego narzędzia [SPF checker](/spf-checker) (po angielsku). Odczytuje rekord SPF domeny i wyjaśnia, na co pozwala.

## Rekordy TXT a weryfikacja

Rekordy TXT chronią e-maile, które wysyłasz. Dowodzą, że e-mail pochodzi od ciebie. Nie mówią nic o tym, czy osoba, do której piszesz, nadal ma skrzynkę pocztową.

To inne sprawdzenie. [Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy adres istnieje. Potrzebujesz obu rzeczy: poprawnych rekordów w swojej domenie i czystej listy prawdziwych adresów.
