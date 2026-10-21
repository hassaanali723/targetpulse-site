---
title: Double opt-in
description: Co oznacza double opt-in, jak działa e-mail potwierdzający, czym różni się single i double opt-in, dlaczego firmy z niego korzystają i jak go włączyć.
slug: double-opt-in
date: 2026-10-12
updated: 2026-10-12
keyword: double opt in
short: Double opt-in oznacza, że osoba zapisuje się na twoje e-maile, a potem potwierdza zapis, klikając link w e-mailu potwierdzającym. Dopiero po tym kliknięciu trafia na twoją listę. To pokazuje, że osoba jest właścicielem adresu i chce dostawać twoje e-maile.
related: single-opt-in, list-cleaning, email-hygiene, suppression-list, spam-trap, typo-domain
cta: Wyłapuj literówki przy zapisie, zanim e-mail potwierdzający zostanie odbity
---

## Czym jest double opt-in?

Double opt-in to sposób dodawania osób do listy mailingowej w dwóch krokach. Najpierw osoba wpisuje swój adres e-mail na twojej stronie. Potem klika link w e-mailu, który wysyłasz na ten adres. Dopiero wtedy adres trafia na twoją listę.

Opt-in oznacza świadomą decyzję o dołączeniu. „Double” oznacza, że osoba decyduje dwa razy, raz w formularzu i raz w e-mailu. Adres, który nigdy nie zostanie potwierdzony, nigdy nie trafia na listę.

## Przykład: Maria zapisuje się na newsletter piekarni

Maria wchodzi na stronę swojej lokalnej piekarni. Chce dostawać jej comiesięczny newsletter.

1. Wpisuje swój adres maria.lopez@gmail.com w formularzu zapisu i klika Zapisz się.
2. Strona pokazuje komunikat: „Sprawdź skrzynkę odbiorczą, żeby potwierdzić swój e-mail”.
3. Minutę później Maria dostaje e-mail od piekarni. Temat brzmi „Potwierdź swój e-mail”.
4. E-mail ma jeden przycisk z napisem „Tak, zapisz mnie”.
5. Maria go klika. Otwiera się strona z napisem „Dziękujemy, jesteś zapisana”.
6. Narzędzie e-mail piekarni dodaje Marię do listy. Zapisuje datę i godzinę jej kliknięcia.

Teraz załóżmy, że Maria przez pomyłkę wpisała maria.lopez@gmial.com. E-mail potwierdzający nigdy by do niej nie dotarł. Maria nigdy by nie kliknęła, więc błędny adres nigdy nie trafiłby na listę.

## Single opt-in a double opt-in

Przy [single opt-in](/glossary/single-opt-in) osoba wpisuje swój adres i od razu trafia na listę. Nie ma kroku potwierdzenia.

| | Single opt-in | Double opt-in |
| --- | --- | --- |
| Kroki dla subskrybenta | Jeden: wypełnić formularz | Dwa: wypełnić formularz, potem kliknąć link |
| Wzrost listy | Szybszy, bo dodawany jest każdy | Wolniejszy, bo niektórzy nigdy nie potwierdzają |
| Adresy z literówkami | Trafiają na listę, a potem są odbijane | Nigdy nie trafiają na listę |
| Fałszywe zapisy przez boty | Trafiają na listę | Nigdy nie trafiają na listę, chyba że ktoś kliknie link |
| Dowód zgody | Tylko formularz zapisu | Zapis kliknięcia potwierdzającego |
| Ryzyko pułapek spamowych | Wyższe | Niższe |

## Dlaczego firmy korzystają z double opt-in

- **Dowód zgody.** Zgoda oznacza, że osoba zgodziła się dostawać twoje e-maile. Przy double opt-in firma może pokazać, kiedy każda osoba potwierdziła zapis.
- **Mniej fałszywych adresów i adresów z literówkami.** Adresy, które nie mogą odbierać poczty, nigdy nie potwierdzają zapisu, więc nigdy nie trafiają na listę.
- **Mniej pułapek spamowych.** Adres w [domenie z literówką](/glossary/typo-domain) może dostać ten jeden e-mail potwierdzający. Ale nikt nie klika linku, więc adres nigdy nie trafia na listę. To samo dotyczy innych [pułapek spamowych](/glossary/spam-trap).
- **Czytelnicy, którzy sami wykonali krok, żeby dołączyć.** Każda osoba na liście kliknęła link, żeby potwierdzić, że chce dostawać twoje e-maile.

## Jak włączyć double opt-in w swoim ESP

ESP to usługa, której używasz do wysyłania e-maili do swojej listy, na przykład Mailchimp lub Brevo. Wiele ESP oferuje double opt-in jako ustawienie. Nazwy menu się różnią, ale kroki są podobne.

1. Otwórz ustawienia swojej listy, grupy odbiorców lub formularza zapisu.
2. Włącz double opt-in lub e-mail potwierdzający.
3. Edytuj e-mail potwierdzający. Użyj jasnego tematu, na przykład „Potwierdź swój e-mail”, i jednego dużego przycisku.
4. Ustaw stronę, którą ludzie widzą po kliknięciu.
5. Przetestuj formularz na własnym adresie, zanim go opublikujesz.
6. Sprawdź, czy twój ESP zapisuje datę i godzinę potwierdzenia dla każdego subskrybenta.

E-mail potwierdzający powinien być krótki. Wyślij go od razu, póki osoba pamięta, że się zapisała.

## Double opt-in a weryfikacja e-mail

Double opt-in i weryfikacja wykonują różne zadania i dobrze działają razem. Sprawdzenie przy zapisie, takie samo jak to, które wykonuje [weryfikator e-mail](/email-checker), wyłapuje literówki takie jak gmial.com, zanim e-mail potwierdzający zostanie odbity. Double opt-in pokazuje potem, że osoba jest właścicielem adresu i chce dostawać twoje e-maile. Do starszych adresów, zebranych przed włączeniem double opt-in, użyj [narzędzia do masowej weryfikacji e-mail](/bulk-email-verifier). Usuwa ono adresy, które zostałyby odbite, w ramach regularnej [weryfikacji e-mail](/).
