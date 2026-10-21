---
title: Dostawca usług e-mail (ESP)
description: Czym jest dostawca usług e-mail (ESP), przykłady takie jak Mailchimp i SendGrid, czym ESP różni się od Gmaila lub Outlooka i dlaczego pilnuje twoich odbić.
slug: dostawca-uslug-email
date: 2026-10-12
updated: 2026-10-12
keyword: dostawca usług email
short: Dostawca usług e-mail, czyli ESP (email service provider), to firma, której usługa wysyła e-maile za ciebie. Firmy korzystają z niego, żeby wysyłać do wielu osób newslettery, potwierdzenia zakupu i e-maile do resetowania hasła. Przykłady to Mailchimp, Brevo i SendGrid.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Zweryfikuj listę, zanim prześlesz ją do swojego ESP
---

## Czym jest dostawca usług e-mail (ESP)?

Dostawca usług e-mail, czyli ESP (email service provider), to firma, która wysyła e-maile dla innych firm. E-maile wysyłane w ten sposób czasem nazywa się ESP email. Ty piszesz e-mail i wybierasz odbiorców. Serwery ESP wysyłają go na każdy adres. Serwer to komputer, który działa bez przerwy i wykonuje zadania dla innych komputerów.

Firmy korzystają z ESP, bo zwykła skrzynka pocztowa nie jest przeznaczona do wysyłki do wielu osób. Gmail i Outlook.com ograniczają liczbę e-maili, które jedno konto może wysłać dziennie. Nie mają też narzędzi do linków wypisania się, obsługi odbić ani raportów z kampanii.

## Przykład: piekarnia wysyła newsletter

Rosa ma piekarnię. Na jej liście mailingowej jest 3000 klientów. Co miesiąc wysyła newsletter o nowych ciastach i godzinach otwarcia.

Na początku próbowała wysyłać go ze swojego prywatnego konta Gmail. Gmail zatrzymał ją po kilkuset e-mailach, bo konta prywatne mają dzienny limit wysyłki. Jej klienci nie mieli też jak się wypisać.

Dlatego założyła konto u ESP. Teraz co miesiąc robi tak.

1. Przesyła do ESP swoją listę 3000 adresów.
2. Pisze newsletter w edytorze ESP.
3. Klika „wyślij”. Serwery ESP wysyłają e-mail na wszystkie 3000 adresów.
4. ESP dodaje do każdego e-maila link do wypisania się. Usuwa osoby, które go klikną.
5. Następnego dnia Rosa czyta raport. Pokazuje on, ile e-maili zostało odbitych, otwartych i klikniętych.

## Przykłady dostawców usług e-mail

| ESP | Do czego jest często używany |
| --- | --- |
| Mailchimp | Newslettery i kampanie marketingowe |
| Brevo | Kampanie marketingowe i e-maile transakcyjne |
| SendGrid | E-maile transakcyjne z aplikacji oraz e-maile marketingowe |
| Amazon SES | Wysyłka e-maili z aplikacji i stron internetowych |
| Postmark | E-maile transakcyjne, takie jak potwierdzenia zakupu i resetowanie hasła |

## ESP a dostawca skrzynki pocztowej

Te dwa pojęcia są często mylone. Wykonują różne zadania.

- **Dostawca usług e-mail** wysyła e-maile za ciebie. Przykłady: Mailchimp, SendGrid, Amazon SES.
- **Dostawca skrzynki pocztowej** utrzymuje skrzynkę, w której ludzie czytają swoje e-maile. Przykłady: Gmail, Outlook.com, Yahoo Mail.

W przykładzie z piekarnią ESP wysyła newsletter Rosy. Gmail, Outlook.com i Yahoo Mail to miejsca, w których czytają go jej klienci. Dostawca skrzynki decyduje, czy newsletter trafi do skrzynki odbiorczej, czy do spamu. ESP nie może podjąć tej decyzji.

## ESP marketingowy a ESP transakcyjny

ESP obsługują dwa rodzaje e-maili.

- **E-maile marketingowe** trafiają do wielu osób naraz, według twojego harmonogramu. Newslettery i ogłoszenia o wyprzedażach to e-maile marketingowe.
- **E-maile transakcyjne** trafiają do jednej osoby po tym, jak coś zrobi. Potwierdzenia zakupu, resetowanie hasła i informacje o wysyłce to e-maile transakcyjne.

Niektórzy ESP skupiają się na jednym rodzaju. Postmark i Amazon SES służą głównie do e-maili transakcyjnych. Mailchimp jest najbardziej znany z e-maili marketingowych. Inni, tacy jak Brevo i SendGrid, oferują oba rodzaje. Wiele firm wysyła te dwa rodzaje e-maili przez osobne konta lub usługi. Dzięki temu problem z kampanią nie opóźnia e-maili do resetowania hasła.

## Co robi dla ciebie dostawca usług e-mail

- Utrzymuje serwery wysyłające i działające na nich oprogramowanie [mail transfer agent](/glossary/mta) (MTA).
- Wysyła każdy e-mail przez [SMTP](/glossary/smtp), czyli standardowe zasady, według których serwery przekazują sobie e-maile.
- Dodaje linki do wypisania się i prowadzi listę osób, które się wypisały.
- Czyta komunikaty o odbiciach i przestaje wysyłać na adresy, które dają twarde odbicie (hard bounce).
- Pokazuje raporty o otwarciach, kliknięciach, odbiciach i skargach na spam.
- Pomaga skonfigurować SPF i DKIM, żeby twoje e-maile dowodziły, że pochodzą z twojej domeny.

## Dlaczego ESP pilnuje twoich odbić

Gdy wysyłasz przez ESP, korzystasz z jego serwerów i często z jego adresów IP. Adres IP to numer, który identyfikuje serwer w internecie. Jeśli twoje e-maile są odbijane lub dostają skargi na spam, reputacja tych adresów IP spada. Może to dotknąć też innych klientów, którzy korzystają z tych samych adresów IP.

Dlatego wielu ESP pilnuje współczynnika odbić każdego konta. Jeśli jest zbyt wysoki, mogą sprawdzić konto albo wstrzymać jego działanie. Lista z wieloma starymi lub błędnie wpisanymi adresami prowadzi do wysokiego [współczynnika odbić](/glossary/bounce-rate).

## Dostawcy usług e-mail a weryfikacja e-mail

Zweryfikuj listę, zanim prześlesz ją do swojego ESP. [Weryfikator e-mail](/email-checker) mówi ci, czy jeden adres istnieje. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) sprawdza cały plik, na przykład 3000 adresów Rosy, i oznacza te, które zostałyby odbite. Usuwasz je i przesyłasz oczyszczoną listę. Ten krok [weryfikacji e-mail](/) nie zastępuje twojego ESP, ale obniża współczynnik odbić i chroni twoje konto u ESP.
