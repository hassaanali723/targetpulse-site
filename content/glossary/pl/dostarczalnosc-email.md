---
title: Dostarczalność e-mail
description: Czym jest dostarczalność e-mail, czym różni się od dostarczenia, co na nią wpływa, jak ją mierzyć i jakie kroki ją poprawiają.
slug: dostarczalnosc-email
date: 2026-10-12
updated: 2026-10-12
keyword: dostarczalność email
short: Dostarczalność e-mail mówi, czy twoje wiadomości trafiają do skrzynki odbiorczej. E-mail może zostać dostarczony, a mimo to trafić do folderu spam. Dobra dostarczalność oznacza, że większość twoich wiadomości trafia do skrzynki odbiorczej, a nie do spamu i nie zostaje zablokowana.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Mniej odbić to pierwszy krok do lepszej dostarczalności
---

## Czym jest dostarczalność e-mail?

Dostarczalność e-mail to zdolność twoich wiadomości do trafiania do skrzynki odbiorczej. Wysłany e-mail może trafić w jedno z trzech miejsc. Może trafić do skrzynki odbiorczej. Może trafić do folderu spam. Może też zostać odrzucony przez serwer odbiorcy, co nazywa się odbiciem (bounce).

Dostarczalność dotyczy pierwszego miejsca, czyli skrzynki odbiorczej. O tym, gdzie trafia każdy e-mail, decyduje dostawca skrzynki. Dostawca skrzynki to firma, która utrzymuje skrzynkę odbiorcy, na przykład Gmail, Outlook.com lub Yahoo. Każdy dostawca ma [filtr antyspamowy](/glossary/spam-filter), który podejmuje tę decyzję dla każdej wiadomości.

## Dostarczenie a dostarczalność

Te dwa słowa brzmią podobnie, ale mierzą różne rzeczy. Dostarczenie liczy wiadomości, które serwer odbiorcy przyjął. Dostarczalność pyta, gdzie trafiły te przyjęte wiadomości.

Załóżmy, że wysyłasz 1000 e-maili do swoich klientów. To przykładowe liczby.

| Etap | E-maile | Co to oznacza |
| --- | --- | --- |
| Wysłane | 1000 | Klikasz „wyślij” |
| Odbite | 40 | Serwery odbiorców je odrzuciły |
| Dostarczone | 960 | Serwery odbiorców je przyjęły |
| W skrzynce odbiorczej | 800 | Klienci widzą je w skrzynce odbiorczej |
| W spamie | 160 | Klienci zobaczą je tylko wtedy, gdy otworzą folder spam |

Twoje narzędzie do wysyłki pokazuje współczynnik dostarczenia 96%. Wygląda to dobrze. Ale tylko 800 z 1000 e-maili trafiło do skrzynki odbiorczej. To [umieszczenie w skrzynce odbiorczej](/glossary/inbox-placement) na poziomie 80%. Narzędzie do wysyłki nie widzi, do którego folderu trafił e-mail, więc podaje 96%.

## Co wpływa na dostarczalność e-mail

Dostawcy nie publikują swoich dokładnych zasad. Oto znane czynniki.

- **Uwierzytelnianie.** Czy twoja domena przechodzi [SPF](/glossary/spf), [DKIM](/glossary/dkim) i [DMARC](/glossary/dmarc). Te rekordy dowodzą, że e-mail naprawdę pochodzi od ciebie.
- **Reputacja nadawcy.** Jak bardzo dostawcy ufają twojej domenie i twojemu adresowi IP, na podstawie twoich wcześniejszych wysyłek. Adres IP to numer, który identyfikuje serwer w internecie. Zobacz [reputacja nadawcy](/glossary/sender-reputation).
- **Odbicia.** Wysyłka na adresy, które nie istnieją, mówi dostawcom, że twoja lista nie została sprawdzona.
- **Skargi na spam.** Jak często ludzie klikają „Zgłoś spam”. Wytyczne Google dla nadawców mówią, żeby utrzymywać ten wskaźnik poniżej 0,10% i nigdy nie dojść do 0,30%.
- **Jakość listy.** Czy ludzie prosili o twoje wiadomości i czy lista zawiera [pułapki spamowe](/glossary/spam-trap).
- **Treść.** Linki, obrazy i sformułowania. Treść ma mniejsze znaczenie niż czynniki powyżej.

## Jak mierzyć dostarczalność

Nie możesz zajrzeć do cudzych skrzynek. Dlatego dostarczalność mierzysz na dwa sposoby.

**Test na skrzynkach testowych.** Wysyłasz e-mail do zestawu testowych skrzynek, które kontrolujesz, w Gmailu, Outlook.com, Yahoo i u innych dostawców. Potem sprawdzasz, gdzie e-mail trafił w każdej z nich. Taki zestaw adresów testowych nazywa się [seed list](/glossary/seed-list).

**Dane od dostawców.** [Google Postmaster Tools](/glossary/postmaster-tools) to bezpłatna usługa Google. Pokazuje dane o e-mailach, które twoja domena wysyła do użytkowników Gmaila, na przykład wskaźnik skarg na spam i wyniki uwierzytelniania. Microsoft ma podobną usługę dla Outlook.com o nazwie SNDS.

Obserwuj też własne liczby. Nagły spadek otwarć u jednego dostawcy może oznaczać, że twoje e-maile zaczęły tam trafiać do spamu.

## Jak poprawić dostarczalność e-mail

1. Skonfiguruj SPF, DKIM i DMARC dla każdej usługi, która wysyła e-maile z twojej domeny.
2. Zweryfikuj listę przed wysyłką i usuń adresy, które nie istnieją.
3. Pisz tylko do osób, które o to prosiły. Nigdy nie kupuj listy.
4. Dodaj wyraźny link do wypisania się. Google wymaga wypisania się jednym kliknięciem w e-mailach marketingowych od nadawców, którzy wysyłają 5000 lub więcej e-maili dziennie.
5. Przestań wysyłać do osób, które od miesięcy niczego nie otworzyły.
6. Zaczynaj powoli z nową domeną lub nowym adresem IP. Zobacz [rozgrzewanie skrzynki e-mail](/glossary/email-warmup).
7. Obserwuj wskaźnik skarg w Postmaster Tools i szukaj przyczyny, gdy rośnie.

## Dostarczalność e-mail a weryfikacja e-mail

Weryfikacja poprawia jedną część dostarczalności, czyli twój współczynnik odbić. [Weryfikator e-mail](/email-checker) znajduje adresy, które nie istnieją, zanim do nich wyślesz. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to dla całej listy w jednym przesłanym pliku. Mniej odbić chroni twoją reputację nadawcy, a reputacja wpływa na to, czy twoje e-maile trafiają do skrzynki odbiorczej. Mimo to [weryfikacja e-mail](/) nie naprawia uwierzytelniania, treści ani skarg, więc pozostałe kroki powyżej nadal mają znaczenie.
