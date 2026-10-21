---
title: Rekord PTR
description: Czym jest rekord PTR, dlaczego serwery pocztowe go sprawdzają, co się dzieje, gdy adres IP nadawcy nie ma rekordu PTR, i jak go skonfigurować.
slug: rekord-ptr
date: 2026-09-29
updated: 2026-10-12
keyword: rekord ptr
short: Rekord PTR to rekord DNS, który łączy adres IP z nazwą serwera. To odwrotność zwykłego rekordu DNS. Serwery pocztowe sprawdzają rekord PTR adresu IP, który do nich wysyła, a niektóre odrzucają e-maile z adresu IP bez rekordu PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Sprawdź swoją listę, a nie tylko swój DNS
---

## Czym jest rekord PTR?

Rekord PTR to ustawienie, które łączy adres IP z nazwą serwera. PTR to skrót od pointer, czyli wskaźnik.

Najpierw kilka pojęć. Serwer to komputer, który działa bez przerwy, na przykład po to, żeby wysyłać e-maile. Adres IP to numer, który identyfikuje serwer w internecie, na przykład `203.0.113.10`. Nazwa hosta (hostname) to nazwa jednego serwera, na przykład `mail.example.com`. DNS to publiczny katalog, który łączy nazwy z numerami. Każdy wpis w DNS nazywa się rekordem.

Zwykły rekord DNS łączy nazwę z adresem IP. Na przykład `mail.example.com` wskazuje na `203.0.113.10`. Rekord PTR działa odwrotnie. Łączy `203.0.113.10` z `mail.example.com`. Nazywa się to odwrotnym DNS (reverse DNS).

Rekordu PTR nie ma w DNS twojej domeny. Znajduje się w osobnej strefie DNS, która należy do właściciela adresu IP. Strefa to zestaw rekordów DNS, które kontroluje jeden właściciel. Właścicielem jest zwykle twoja firma hostingowa lub twój dostawca poczty. Żeby ustawić lub zmienić rekord PTR, prosisz o to właśnie ich.

## Prosty przykład

Oto co się dzieje, gdy serwer wysyłający nie ma rekordu PTR.

1. **Firma konfiguruje serwer pocztowy.** Green Garden Ltd prowadzi własny serwer pocztowy pod adresem IP `203.0.113.10`.
2. **Wysyła e-mail.** Serwer wysyła newsletter do klienta z adresem w Gmailu.
3. **Gmail wyszukuje rekord PTR.** Gmail widzi adres IP `203.0.113.10`. Pyta DNS, jaka nazwa do niego należy.
4. **Nie ma odpowiedzi.** Nikt nie ustawił rekordu PTR dla tego adresu IP.
5. **Gmail odrzuca e-mail.** Zwraca kod `550 5.7.25`. Komunikat mówi, że adres IP nadawcy nie ma rekordu PTR.
6. **Green Garden naprawia problem.** Prosi firmę hostingową o ustawienie rekordu PTR dla `203.0.113.10` na `mail.greengarden.example`.
7. **Następny e-mail przechodzi to sprawdzenie.** Gmail ponownie wyszukuje rekord PTR i znajduje nazwę, która wskazuje z powrotem na ten sam adres IP.

Adres klienta był cały czas w porządku. Brakowało tylko ustawienia po stronie nadawcy.

## Dlaczego serwery pocztowe go sprawdzają

Gdy twój serwer łączy się z serwerem odbiorcy, serwer odbiorcy widzi twój adres IP. Wyszukuje rekord PTR dla tego IP. Potem sprawdza dwie rzeczy:

1. Czy adres IP ma rekord PTR?
2. Czy nazwa hosta w rekordzie PTR wskazuje z powrotem na ten sam adres IP?

**Przykład:** rekord PTR dla `203.0.113.10` podaje `mail.greengarden.example`. Zwykły rekord DNS dla `mail.greengarden.example` podaje `203.0.113.10`. Każdy wskazuje na drugi, więc na oba pytania odpowiedź brzmi „tak”.

Jeśli oba warunki są spełnione, nadawca wygląda na prawdziwy serwer pocztowy, który ktoś celowo skonfigurował. Jeśli nie ma rekordu PTR, nadawca wygląda na jedną z trzech rzeczy:

- domowe łącze internetowe;
- zainfekowany komputer;
- serwer, którego nikt nie skonfigurował.

Spam często pochodzi właśnie z takich źródeł.

## Co się dzieje bez rekordu PTR

Niektórzy dostawcy odrzucają e-mail. Lista błędów Gmaila zawiera `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`, czyli „wiadomość została zablokowana, bo adres IP nadawcy nie ma rekordu PTR”. To stałe odrzucenie. Twoje narzędzie do wysyłki zapisuje je jako [twarde odbicie (hard bounce)](/glossary/hard-bounce), chociaż adres istnieje. Twarde odbicie to e-mail odrzucony na stałe.

Inni dostawcy przyjmują e-mail, ale dają mu niższą ocenę. Niższa ocena oznacza, że e-mail częściej trafia do folderu spam. Brak rekordu PTR może więc ci szkodzić nawet wtedy, gdy nie wraca żaden błąd.

## Jak skonfigurować rekord PTR

1. Ustal adres IP, z którego wysyłane są twoje e-maile.
2. Wybierz nazwę hosta, na którą ma wskazywać. Przykład: `mail.example.com`.
3. Upewnij się, że ta nazwa hosta ma zwykły rekord DNS, który wskazuje na ten sam adres IP.
4. Poproś firmę hostingową lub dostawcę poczty o ustawienie rekordu PTR dla tego adresu IP na tę nazwę hosta.
5. Wykonaj odwrotne wyszukiwanie DNS (reverse DNS lookup) dla adresu IP. Powinno pokazać nazwę hosta wybraną w kroku 2.

Jeśli wysyłasz przez Google Workspace, Microsoft 365, SendGrid lub Amazon SES, adresy IP, z których idą wysyłki, należą do dostawcy. Rekordy PTR są już ustawione. Rekord PTR musisz ustawić tylko wtedy, gdy masz własny serwer pocztowy albo korzystasz z dedykowanego adresu IP. Dedykowany adres IP to adres, z którego e-maile wysyła tylko twoja firma.

## Rekordy PTR a weryfikacja

Rekord PTR dotyczy adresu IP nadawcy. Nie dotyczy adresu odbiorcy. [Weryfikator e-mail](/email-checker) nie potrzebuje twojego rekordu PTR, żeby zweryfikować twoją listę. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) też go nie potrzebuje.

Weryfikator potrzebuje za to rekordu PTR na każdym ze swoich własnych adresów IP. Bez nich serwery odbiorców odmawiają z nim rozmowy. To jeden z powodów, dla których usługa weryfikacji dostaje inne odpowiedzi niż skrypt uruchomiony na laptopie. [Weryfikacja e-mail](/) sprawdza, czy adresy na twojej liście istnieją. Twój własny rekord PTR to osobne ustawienie, które naprawiasz z firmą hostingową lub dostawcą poczty.
