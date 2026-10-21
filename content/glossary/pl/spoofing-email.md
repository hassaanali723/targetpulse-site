---
title: Spoofing e-mail
description: Czym jest spoofing e-mail, przykład fałszywego e-maila od prezesa, dlaczego poczta na to pozwala, jak rozpoznać podszywanie się i jak chronić domenę.
slug: spoofing-email
date: 2026-10-12
updated: 2026-10-12
keyword: spoofing email
short: Spoofing e-mail to wysłanie wiadomości z fałszywym adresem nadawcy, tak żeby wyglądała, jakby pochodziła od kogoś innego. Oszuści podszywają się w ten sposób pod bank, dostawcę albo twojego przełożonego. SPF, DKIM i DMARC to rekordy, które blokują spoofing dla domeny.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Weryfikacja sprawdza adresy. DMARC sprawdza nadawców
---

## Czym jest spoofing e-mail?

Spoofing e-mail to wysyłanie wiadomości z fałszywym adresem nadawcy. E-mail wygląda, jakby pochodził od osoby lub firmy, którą znasz. W rzeczywistości wysłał go ktoś inny. Oszuści używają spoofingu, żeby ludzie płacili fałszywe faktury, podawali hasła lub otwierali szkodliwe pliki.

Sfałszowany e-mail pokazuje prawdziwy adres w polu Od (From). Pole Od to nazwa i adres nadawcy, które widzisz w skrzynce odbiorczej. To odróżnia spoofing od e-maila wysłanego z adresu, który tylko wygląda podobnie. Oba przypadki wyjaśniamy poniżej.

## Przykład: fałszywy e-mail od prezesa

Sara pracuje w dziale finansów firmy, która używa domeny example.com. Domena to nazwa po znaku @ w adresie e-mail. O 16:00 w piątek Sara dostaje taki e-mail.

- **Od:** David Brown, david.brown@example.com
- **Temat:** Pilna płatność dzisiaj
- **Treść:** „Zapłać, proszę, załączoną fakturę naszemu nowemu dostawcy przed 17:00. Jestem na spotkaniach, więc odpowiadaj tylko e-mailem”.

David Brown to prawdziwy prezes, a adres jest jego prawdziwym adresem. Ale David nie wysłał tego e-maila. Wysłał go oszust, z serwera, który nie ma nic wspólnego z example.com.

Jeśli Sara zapłaci, pieniądze trafią na konto bankowe oszusta. Ten rodzaj oszustwa często nazywa się business email compromise (BEC). Działa, bo e-mail wygląda normalnie i wymaga pośpiechu.

## Dlaczego spoofing e-mail jest możliwy

SMTP to protokół, który przesyła e-maile między serwerami. Został po raz pierwszy opisany w 1982 roku. Nie sprawdza adresu w polu Od. Każdy serwer pocztowy można ustawić tak, żeby wpisywał w tym polu dowolny adres, a e-mail i tak zostanie wysłany.

Serwer odbiorcy nie ma więc wbudowanego sposobu, żeby sprawdzić, czy adres w polu Od jest prawdziwy. Dlatego później dodano trzy sprawdzenia. Właściciele domen publikują je w DNS, czyli publicznym katalogu, w którym domena podaje swoje ustawienia.

## Jak rozpoznać sfałszowany e-mail

Sfałszowany e-mail może wyglądać poprawnie w każdym szczególe. Te znaki pomagają go rozpoznać.

- **Adres Reply-To jest inny.** Kliknij Odpowiedz i spójrz na adres. Jeśli zmienia się na nieznany adres, e-mail może być fałszywy.
- **Sprawdzenia kończą się błędem.** W Gmailu otwórz e-mail, kliknij trzy kropki i wybierz Pokaż oryginał. Spójrz na wiersze SPF, DKIM i DMARC. DMARC FAIL to poważne ostrzeżenie.
- **Prosi o pieniądze lub hasło, i to szybko.** Prośby o zapłatę dzisiaj, zmianę danych bankowych lub zalogowanie się to typowe cele sfałszowanego e-maila.
- **Każe unikać innych kanałów.** „Tylko e-mailem” albo „nie dzwoń do mnie” to sygnał ostrzegawczy.
- **Ton lub podpis się nie zgadza.** Prawdziwa osoba może nigdy tak nie pisać.

## Jak chronić domenę przed spoofingiem

Nie możesz nikomu zabronić wpisania twojego adresu w polu Od. Możesz za to powiedzieć serwerom odbiorców, żeby blokowały takie e-maile. Potrzebujesz do tego trzech rekordów DNS.

1. **SPF** wymienia serwery, które mogą wysyłać e-maile dla twojej domeny. Zobacz [rekord SPF](/glossary/spf).
2. **DKIM** dodaje do twoich prawdziwych e-maili podpis, którego oszust nie może utworzyć. Zobacz [DKIM](/glossary/dkim).
3. **DMARC** mówi serwerom odbiorców, co zrobić z e-mailem, który używa twojej domeny w polu Od, ale nie przechodzi obu sprawdzeń. Zobacz [DMARC](/glossary/dmarc).

Przy DMARC z `p=reject` serwery odbiorców, które stosują twoją politykę, blokują sfałszowany e-mail, zanim do kogokolwiek dotrze. Przy `p=none` DMARC tylko wysyła ci raporty. Nie zatrzymuje e-maila. Żeby DMARC przeszedł, SPF lub DKIM musi przejść dla tej samej domeny, która jest widoczna w polu Od. Nazywa się to [wyrównaniem DMARC](/glossary/dmarc-alignment).

## Spoofing, phishing i domeny łudząco podobne

Te pojęcia są często mylone. Oznaczają różne rzeczy.

| Pojęcie | Co to jest | Przykład |
| --- | --- | --- |
| Spoofing e-mail | E-mail, który używa twojego prawdziwego adresu w polu Od bez twojej zgody | Od: billing@example.com, wysłany przez oszusta |
| Phishing | Każdy e-mail, który próbuje nakłonić cię do oddania pieniędzy, danych lub haseł | Fałszywy e-mail „twoje konto jest zablokowane” z linkiem do logowania |
| Domena łudząco podobna | Osobna domena zarejestrowana tak, żeby wyglądała jak twoja | exampel.com lub example-billing.com |

Spoofing to jedna z metod phishingu, a domena łudząco podobna to inna. DMARC blokuje spoofing twojej dokładnej domeny. Nie może zablokować domeny łudząco podobnej. Oszust jest właścicielem takiej domeny, więc sam może skonfigurować jej rekordy SPF, DKIM i DMARC.

## Co zrobić, gdy dostaniesz sfałszowany e-mail

1. Nie odpowiadaj, nie klikaj linków i nie otwieraj załączników.
2. Sprawdź prośbę inną drogą. Zadzwoń do tej osoby na numer, który już znasz, a nie na numer z e-maila.
3. Zgłoś go. W Gmailu otwórz menu z trzema kropkami i wybierz Zgłoś phishing. W Outlooku użyj przycisku Zgłoś.
4. Jeśli e-mail używa domeny twojej firmy, powiadom dział IT. Może sprawdzić raporty DMARC.
5. Jeśli pieniądze zostały już przelane lub hasło zostało podane, od razu skontaktuj się z bankiem albo zmień hasło.

## Spoofing e-mail a weryfikacja e-mail

[Weryfikator e-mail](/email-checker) nie wykrywa spoofingu. Mówi, czy adres istnieje i przyjmuje e-maile, a nie kto naprawdę wysłał wiadomość. Sfałszowany e-mail używa prawdziwego adresu, więc ten adres i tak zostałby uznany za prawidłowy. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) pomaga po twojej stronie wysyłki, bo usuwa nieaktywne adresy z listy przed kampanią. Żeby zatrzymać spoofing, używaj SPF, DKIM i DMARC, a [weryfikacji e-mail](/) używaj, żeby utrzymać niski współczynnik odbić.
