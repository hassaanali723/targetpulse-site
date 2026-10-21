---
title: Filtr antyspamowy
description: Co sprawdza filtr antyspamowy, zanim dostarczy, przeniesie lub odrzuci e-mail, czym odrzucenie różni się od folderu spam i jakie limity podaje Google.
slug: filtr-antyspamowy
date: 2026-09-29
updated: 2026-10-12
keyword: filtr antyspamowy
short: Filtr antyspamowy to system, którego dostawca skrzynek używa, żeby zdecydować, dokąd trafi przychodzący e-mail. Może skierować e-mail do skrzynki odbiorczej lub do folderu spam albo go odrzucić. Sprawdza nadawcę, treść e-maila i to, jak wcześniejsi odbiorcy reagowali na e-maile od tego nadawcy.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Wysyłaj na prawdziwe adresy, a filtry antyspamowe będą miały mniej powodów, żeby cię blokować
---

## Czym jest filtr antyspamowy?

Filtr antyspamowy to system, który sprawdza każdy przychodzący e-mail i decyduje, co się z nim stanie. Może dostarczyć e-mail do skrzynki odbiorczej, przenieść go do folderu spam albo go odrzucić. Spam to niechciana masowa poczta e-mail.

Każdy dostawca skrzynek ma filtr antyspamowy. Dostawca skrzynek to firma lub serwer, który prowadzi skrzynki pocztowe. Gmail, Outlook.com i Yahoo mają taki filtr. Mają go też firmowe serwery pocztowe za [secure email gateway](/glossary/secure-email-gateway) (bramką bezpieczeństwa poczty). Secure email gateway to usługa bezpieczeństwa, która sprawdza e-maile firmy, zanim trafią do skrzynek pracowników.

Decyzja zapada w jednym z dwóch momentów.

**Podczas połączenia SMTP.** SMTP to standardowy sposób, w jaki serwery pocztowe przesyłają sobie e-maile. Serwer odbiorcy może odrzucić e-mail, zanim go przyjmie. Dostajesz wtedy odbicie z kodem `5.7.x`. Odbicie (bounce) to automatyczna wiadomość, która informuje, że e-mail nie został dostarczony. Przykłady: kod Gmaila `550 5.7.1` przy blokadzie wynikającej z zasad albo `550 5.7.28` przy nietypowo dużej liczbie niechcianych e-maili z twojego adresu IP. Adres IP to numer, który identyfikuje twój serwer wysyłający. E-mail nigdy nie trafia do skrzynki pocztowej.

**Po przyjęciu e-maila.** Serwer przyjmuje e-mail, a potem umieszcza go w skrzynce odbiorczej, w zakładce Oferty lub w folderze spam. Nie dostajesz odbicia. Jedyne sygnały to niższe wskaźniki otwarć i dane w [Google Postmaster Tools](/glossary/postmaster-tools).

## Prosty przykład

Oto jak filtr antyspamowy może przenieść zwykłą ofertę do folderu spam. Liczby są tylko przykładem.

1. **Siłownia wysyła ofertę.** City Gym wysyła ofertę rabatową do 8000 członków.
2. **Filtr sprawdza nadawcę.** Rekordy SPF, DKIM i DMARC siłowni przechodzą. E-mail naprawdę pochodzi od siłowni.
3. **Sprawdza historię siłowni.** W zeszłym miesiącu siłownia wysłała e-maile na starą listę. Wiele z tych adresów nie istniało i e-maile zostały odbite.
4. **Sprawdza, jak ludzie reagowali wcześniej.** Wielu członków usunęło poprzednią ofertę bez otwierania. Niektórzy kliknęli „zgłoś spam”.
5. **Podejmuje decyzję.** Filtr przenosi nową ofertę do folderu spam u wielu członków.
6. **Siłownia nie dostaje błędu.** Nie wraca żadne odbicie. Siłownia widzi tylko niższy wskaźnik otwarć.

Problemem nie były słowa w ofercie. Problemem była lista.

## Co sprawdza filtr

Dostawcy nie publikują swoich dokładnych zasad. Oto znane czynniki:

- **Uwierzytelnianie.** Czy [SPF](/glossary/spf), [DKIM](/glossary/dkim) i [DMARC](/glossary/dmarc) przechodzą. To rekordy w twojej domenie, które dowodzą, że e-mail naprawdę pochodzi od ciebie. Google i Microsoft odrzucają teraz masowe e-maile, które nie przechodzą tych sprawdzeń.
- **Reputacja.** Historia wysyłek twojej domeny i twojego adresu IP. Twoja domena to część twojego adresu po znaku @. Zobacz [reputacja domeny](/glossary/domain-reputation) i [reputacja IP](/glossary/ip-reputation).
- **Skargi.** Jak często odbiorcy klikają „zgłoś spam”. Wytyczne Google mówią, żeby utrzymywać wskaźnik skarg w Postmaster Tools poniżej 0,10% i nigdy nie dojść do 0,30%. Na przykład 0,10% to 10 skarg na 10 000 e-maili.
- **Odbicia.** Jak często wysyłasz na adresy, które nie istnieją. Lista z wieloma nieaktywnymi adresami wygląda jak lista kupiona lub zebrana automatycznie (scraping). Scraping oznacza kopiowanie danych ze stron internetowych przez program.
- **Zaangażowanie.** Czy ludzie otwierają twoje e-maile, odpowiadają na nie, usuwają je bez czytania albo przenoszą do innego folderu.
- **Treść.** Linki, załączniki, obrazy i wzorce tekstu, które pasują do znanego spamu. Treść ma mniejsze znaczenie niż kiedyś. Większe znaczenie mają reputacja i uwierzytelnianie.

## Dlaczego nadawcy są filtrowani

Większość filtrowania nie wynika ze słów w e-mailu. Wynika z listy. Nieaktywne adresy powodują odbicia. Osoby, które nie prosiły o twoje e-maile, składają skargi. Oba problemy biorą się z adresów, których nikt nigdy nie sprawdził.

**Przykład:** firma zmienia „FREE” na „free” w każdym temacie wiadomości, ale dalej wysyła na starą, niesprawdzoną listę. Jej e-maile nadal trafiają do spamu, bo przyczyną jest lista.

## Jak pomaga weryfikator

Weryfikator nie ma kontaktu z filtrami antyspamowymi. Usuwa adresy, które powodują odbicia i skargi. Sprawdź listę [weryfikatorem e-mail](/email-checker), zanim wyślesz. Usuwa on skrzynki pocztowe, które już nie istnieją. Usuwa też jednorazowe adresy e-mail i adresy funkcyjne, takie jak info@, które dostają więcej skarg. Poradnik o [współczynniku odbić e-mail](/blog/how-to-reduce-email-bounce-rate) pokazuje, jak duża jest zwykle ta część listy.

Przy dużej liście użyj [narzędzia do masowej weryfikacji e-mail](/bulk-email-verifier). [Weryfikacja e-mail](/) nie sprawi, że filtr antyspamowy przyjmie twój e-mail. Usuwa jedną z przyczyn filtrowania: wysyłkę na adresy, które nie istnieją.
