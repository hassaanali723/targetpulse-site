---
title: Czarna lista e-mail
description: Czym jest czarna lista e-mail, czym różnią się czarne listy IP i domen, jak nadawcy na nie trafiają, jak sprawdzić swój IP lub domenę i jak z nich zejść.
slug: czarna-lista-email
date: 2026-10-12
updated: 2026-10-12
keyword: czarna lista email
short: Czarna lista e-mail (blacklist) to publiczna lista adresów IP lub domen, o których wiadomo, że wysyłają spam. Serwery pocztowe odbiorców sprawdzają te listy i blokują lub filtrują e-maile od nadawców, którzy na nich są. Spamhaus prowadzi jedne z najbardziej znanych list.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Usuń nieaktywne adresy, które prowadzą do pułapek spamowych i czarnych list
---

## Czym jest czarna lista e-mail?

Czarna lista e-mail (blacklist) to lista nadawców, o których wiadomo, że wysyłają spam. Nadawca może trafić na listę ze względu na swój adres IP lub swoją domenę. Adres IP to numer, który identyfikuje serwer w internecie. Domena to nazwa po znaku @ w adresie e-mail, na przykład example.com.

Organizacje takie jak Spamhaus tworzą te listy i je publikują. Serwery pocztowe firm i dostawców poczty sprawdzają każdy przychodzący e-mail na jednej lub kilku listach. Jeśli nadawca jest na liście, serwer może odrzucić e-mail albo przenieść go do spamu.

Większość czarnych list jest publikowana przez DNS, publiczny system katalogowy internetu. Lista publikowana w ten sposób nazywa się [DNSBL](/glossary/dnsbl).

## Przykład: e-maile zaczynają być odbijane

Firma Orbit wysyła faktury z własnego serwera pocztowego. W pewien poniedziałek wielu klientów mówi, że nie dostało faktury. Kofi, który prowadzi dział IT w Orbit, czyta komunikaty o odbiciach. Kilka z nich wygląda mniej więcej tak:

`554 5.7.1 Service unavailable; Client host [192.0.2.25] blocked using zen.spamhaus.org`

Komunikat wymienia Spamhaus. Kofi sprawdza adres IP `192.0.2.25` na stronie Spamhaus. Adres jest na liście. Potem Kofi znajduje przyczynę. W weekend ktoś włamał się na konto jednego z pracowników i wysłał z niego tysiące wiadomości ze spamem.

Kofi zmienia hasło i zatrzymuje spam. Potem prosi Spamhaus o usunięcie wpisu. Po jego usunięciu faktury Orbit znowu są dostarczane.

## Czarne listy IP a czarne listy domen

| Rodzaj | Co jest na liście | Co sprawdza serwer odbiorcy |
| --- | --- | --- |
| Czarna lista IP | Adres IP serwera wysyłającego | Serwer, który łączy się, żeby dostarczyć e-mail |
| Czarna lista domen | Nazwa domeny | Domeny w adresie nadawcy i w linkach w treści e-maila |

Spamhaus prowadzi oba rodzaje. Jego Domain Blocklist, czyli DBL, zawiera domeny. Inne jego listy, takie jak SBL i XBL, zawierają adresy IP.

## Blacklist czy blocklist?

Oba słowa oznaczają to samo. Spamhaus używa teraz słowa „blocklist”. Wiele narzędzi i osób nadal mówi „email blacklist”, a czasem spotkasz też „denylist”. Zobacz [blocklist](/glossary/blocklist).

## Jak nadawcy trafiają na czarne listy

- **Pułapki spamowe.** Wysyłka do [pułapki spamowej](/glossary/spam-trap), czyli adresu, który istnieje tylko po to, żeby wyłapywać nadawców ze złymi listami. Zawierają je stare i kupione listy.
- **Skargi na spam.** Wielu odbiorców oznacza twoje e-maile jako spam.
- **Przejęte konto lub serwer.** Ktoś przejmuje konto i wysyła z niego spam, jak w przykładzie z Orbit.
- **Nagła duża liczba wysyłek z nowego IP.** Nowy adres IP, który od razu wysyła dużo e-maili, zachowuje się tak jak spamerzy.
- **Zainfekowany komputer.** Złośliwe oprogramowanie na komputerze w twoim biurze wysyła spam przez twoją sieć.

## Jak sprawdzić, czy jesteś na czarnej liście e-mail

1. Ustal adres IP, z którego wysyłasz, i swoją domenę. Poda ci je twój ESP lub dział IT.
2. Wpisz je w narzędziu do sprawdzania czarnych list, na przykład MXToolbox. Sprawdza ono wiele list naraz.
3. Jeśli któraś lista pokazuje, że na niej jesteś, wejdź na stronę tej listy. Potwierdź wpis i przeczytaj jego przyczynę.
4. Czytaj komunikaty o odbiciach. Komunikat o blokadzie często podaje nazwę listy, jak w przykładzie z Orbit.

Nie każda lista ma taki sam skutek. Niektórych małych list używa niewiele serwerów pocztowych. Wpis na liście Spamhaus ma większe znaczenie, bo wiele serwerów pocztowych sprawdza Spamhaus.

## Jak usunąć się z czarnej listy

1. **Najpierw usuń przyczynę.** Zmień przejęte hasła, wyczyść zainfekowane komputery albo przestań wysyłać na złe listy. Jeśli przyczyna zostanie, znowu trafisz na listę.
2. **Skorzystaj ze strony usuwania wpisów.** Większość list ma formularz do zgłoszenia usunięcia, często nazywanego delistingiem.
3. **Wyjaśnij, co naprawiono.** Niektóre listy pytają, co się stało i co zmieniono.
4. **Poczekaj na wynik.** Niektóre listy usuwają wpis automatycznie po okresie bez spamu. Inne działają na podstawie twojej prośby.
5. **Obserwuj potem swoje wysyłki.** Przez kilka tygodni sprawdzaj komunikaty o odbiciach i ponownie korzystaj z narzędzia do sprawdzania czarnych list.

## Czarne listy e-mail a weryfikacja e-mail

Pułapki spamowe to jeden ze sposobów, w jaki nadawcy trafiają na czarne listy, a pułapki znajdują się wśród starych, kupionych lub błędnie wpisanych adresów. [Weryfikator e-mail](/email-checker) znajduje adresy, które już nie istnieją, zanim zostaną zamienione w pułapki. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to dla całej listy, a także oznacza adresy z błędnie wpisaną domeną. Weryfikacja nie wykryje każdej pułapki spamowej, bo niektóre pułapki to działające skrzynki pocztowe. Ale regularna [weryfikacja e-mail](/) usuwa nieaktywne adresy, co zmniejsza liczbę odbić i ryzyko wysyłki do odnowionej pułapki.
