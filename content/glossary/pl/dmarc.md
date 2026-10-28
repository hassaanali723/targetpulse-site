---
title: DMARC
description: Czym jest DMARC, po co powstał, jak korzysta z SPF i DKIM, jakie są trzy polityki DMARC, jak wygląda prosty rekord DMARC i kto go wymaga.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC to reguła, którą publikujesz w DNS swojej domeny. Mówi serwerom odbiorców, co zrobić z e-mailem, który podaje się za wiadomość z twojej domeny, ale nie przechodzi SPF i DKIM. Mówi im też, dokąd wysyłać ci raporty.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC chroni twoją domenę. Weryfikacja chroni twój współczynnik odbić
---

## Czym jest DMARC?

DMARC to skrót od Domain-based Message Authentication, Reporting and Conformance. To reguła, którą publikujesz w DNS. DNS to publiczny katalog, w którym domena podaje swoje ustawienia. Reguła odpowiada serwerom odbiorców na jedno pytanie. Co zrobić z e-mailem, który używa twojej domeny w adresie nadawcy (From), ale nie przechodzi sprawdzeń?

Adres nadawcy (From) to adres, który ludzie widzą w swojej skrzynce odbiorczej. Bez DMARC każdy może wpisać tam twoją domenę. Z DMARC możesz poprosić Gmaila, Outlook.com i innych dostawców, żeby takie e-maile przenosili do spamu albo blokowali. Możesz ich też poprosić o raporty o każdym serwerze, który wysyła e-maile w twoim imieniu.

## Przykład: fałszywa faktura z billing@example.com

Firma Example Ltd wysyła swoje prawdziwe faktury z adresu billing@example.com. Oszust chce oszukać jej klientów. Oto co się dzieje.

1. Oszust wysyła e-mail ze swojego serwera. W adresie nadawcy jest billing@example.com. Temat brzmi „Invoice overdue, pay today”, czyli „Faktura po terminie, zapłać dziś”.
2. E-mail trafia do Tomka, jednego z klientów firmy.
3. Dostawca poczty Tomka wykonuje dwa sprawdzenia. [SPF](/glossary/spf) sprawdza, czy serwer wysyłający może wysyłać pocztę dla example.com. Nie może. [DKIM](/glossary/dkim) szuka prawidłowego podpisu od example.com. Nie ma go.
4. Dostawca wyszukuje rekord DMARC domeny example.com. Rekord zawiera `p=reject`.
5. Dostawca blokuje e-mail. Tomek nigdy go nie widzi.

Bez rekordu DMARC krok 4 niczego nie znajduje. Dostawca decyduje wtedy sam, a fałszywa faktura może trafić do skrzynki odbiorczej Tomka.

Serwery odbiorców traktują twoją politykę jako prośbę. Mogą też stosować obok niej własne filtry antyspamowe.

## Jak DMARC podejmuje decyzję: wyrównanie

SPF i DKIM sprawdzają domenę. Ale ta domena może się różnić od domeny w adresie nadawcy (From). Oszust może przejść SPF dla własnej domeny, na przykład scam-mail.example, a adres nadawcy pokaże example.com.

DMARC dodaje jedną regułę, która to naprawia. SPF lub DKIM musi przejść dla tej samej domeny, która jest w adresie nadawcy (From). Ta zgodność nazywa się wyrównaniem (alignment). Wystarczy, że jedno z dwóch sprawdzeń przejdzie i będzie zgodne. Strona [wyrównanie DMARC](/glossary/dmarc-alignment) wyjaśnia łagodną (relaxed) i ścisłą (strict) wersję tej reguły.

## Trzy polityki DMARC

Polityka to część `p=` rekordu. Ma trzy możliwe wartości.

| Polityka | Co dzieje się z e-mailem, który nie przechodzi DMARC | Kiedy jej używać |
| --- | --- | --- |
| `p=none` | Jest normalnie dostarczany. Dostajesz tylko raporty. | Na początku, gdy szukasz wszystkich swoich nadawców |
| `p=quarantine` | Trafia do folderu spam. | Gdy wszyscy twoi prawdziwi nadawcy przechodzą kontrole |
| `p=reject` | Jest blokowany i nigdy nie trafia do skrzynki pocztowej. | Gdy masz pewność, że żaden prawdziwy e-mail nie kończy się błędem |

## Prosty rekord DMARC

Rekord DMARC to [rekord DNS TXT](/glossary/dns-txt-record) o nazwie `_dmarc`. Dla example.com znajduje się pod adresem `_dmarc.example.com`. Oto prosty rekord:

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

Ma trzy części, oddzielone średnikami.

- `v=DMARC1` oznacza, że to rekord DMARC. Musi być na początku.
- `p=none` to polityka. Tutaj mówi: nie rób nic szczególnego, tylko raportuj.
- `rua=mailto:reports@example.com` to adres, na który trafiają codzienne raporty zbiorcze.

Domena może mieć tylko jeden rekord DMARC. Jeśli serwer odbiorcy znajdzie dwa, ignoruje oba. Poradnik [czym jest rekord DMARC](/blog/what-is-a-dmarc-record) wyjaśnia wszystkie pozostałe tagi i to, jak czytać raporty.

## Jak zacząć z DMARC

Większość domen przechodzi na wyższy poziom w trzech krokach.

1. Opublikuj rekord z `p=none` i adresem `rua`. Dla twoich e-maili nic się nie zmienia, a raporty zaczynają przychodzić.
2. Czytaj raporty. Wymieniają każdy serwer, który wysyła e-maile jako twoja domena. Upewnij się, że każda prawdziwa usługa przechodzi SPF lub DKIM dla twojej domeny. Dwa przykłady to twoje narzędzie do newslettera i twój system obsługi klienta (help desk).
3. Przejdź na `p=quarantine`. Gdy żaden prawdziwy e-mail nie trafia do spamu, przejdź na `p=reject`.

Standard podaje, że doprowadzenie do tego, by każdy prawdziwy nadawca przechodził, może zająć wiele miesięcy. Łatwo przeoczyć usługi, które wysyłają rzadko, na przykład narzędzia do fakturowania. Nasz [generator DMARC](/dmarc-generator) tworzy rekord dla każdego kroku.

Zanim użyjesz `p=reject`, upewnij się, że wszystkie twoje e-maile są podpisane DKIM. Przekazanie wiadomości psuje SPF. Polityka reject, która opiera się tylko na SPF, może blokować prawdziwe przekazane e-maile.

## Kto wymaga DMARC

Wytyczne Google dla nadawców wymagają rekordu DMARC od nadawców, którzy wysyłają 5000 lub więcej e-maili dziennie na prywatne konta Gmail. Microsoft ma tę samą zasadę dla Outlook.com, Hotmail i Live. Zaczął ją egzekwować 5 maja 2025. U obu dostawców `p=none` spełnia minimum. Domena w adresie nadawcy (From) musi też być wyrównana z SPF lub DKIM.

Obecny standard DMARC to RFC 9989, opublikowany w maju 2026. Zastąpił RFC 7489. Rekordy, które zaczynają się od `v=DMARC1`, nadal działają.

## DMARC a weryfikacja e-mail

DMARC chroni twoją domenę przed osobami, które wysyłają e-maile w twoim imieniu. Nie ma wpływu na adresy na twojej własnej liście. E-mail wysłany do skrzynki pocztowej, która już nie istnieje, zostaje odbity, nawet jeśli przechodzi DMARC. [Weryfikator e-mail](/email-checker) znajduje takie adresy przed wysyłką, a [narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) znajduje je na całej liście. Dzięki [weryfikacji e-mail](/) twój współczynnik odbić pozostaje niski, a DMARC nie pozwala oszustom używać twojej domeny.
