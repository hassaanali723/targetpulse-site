---
title: Hard bounce (twarde odbicie)
description: Czym jest hard bounce, czyli twarde odbicie, które kody oznaczają hard bounce, jakie są dwa rodzaje twardych odbić i co zrobić z każdym z nich.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: hard bounce
short: Hard bounce (twarde odbicie) to e-mail, który serwer odbiorcy odrzucił na stałe. Adres nie istnieje, domena nie istnieje albo serwer zablokował twój e-mail. Jeśli wyślesz ten sam e-mail jeszcze raz, znowu się nie uda.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Znajdź adresy, które dałyby hard bounce, zanim wyślesz
---

## Czym jest hard bounce?

Hard bounce, czyli twarde odbicie, to e-mail, który nie został dostarczony i nigdy nie zostanie. Serwer odbiorcy go odrzucił. Jeśli wyślesz go ponownie, serwer znowu go odrzuci.

Najpierw kilka pojęć. Serwer to komputer, który działa bez przerwy i obsługuje pocztę e-mail dla domeny. Domena to część adresu po znaku @, na przykład example.com. Odbicie (bounce) to automatyczna wiadomość, która informuje, że e-mail nie został dostarczony.

Każda wiadomość o odbiciu zawiera kod. Standard poczty e-mail RFC 5321 nazywa twarde odbicie stałą odpowiedzią negatywną. Jego kod zaczyna się od 5. Przykład: `550 5.1.1`. Kod, który zaczyna się od 4, oznacza [miękkie odbicie (soft bounce)](/glossary/soft-bounce). Miękkie odbicie jest tymczasowe, więc późniejsza próba może się udać.

## Prosty przykład

Oto jak powstaje twarde odbicie na zwykłej liście.

1. **Tomek zbiera adres.** Tomek prowadzi małą księgarnię internetową. W 2022 roku klient zapisuje się z adresem ben@company.example.
2. **Klient zmienia pracę.** W 2025 roku Ben odchodzi z Company Ltd. Firma zamyka jego skrzynkę pocztową.
3. **Tomek wysyła newsletter.** Jego narzędzie do wysyłki wysyła newsletter na adres ben@company.example.
4. **Serwer go odrzuca.** Serwer pocztowy company.example nie ma już skrzynki dla Bena. Odpowiada kodem `550 5.1.1`.
5. **Tomek dostaje wiadomość o odbiciu.** Jego narzędzie do wysyłki zapisuje hard bounce dla tego adresu.
6. **Tomek usuwa adres.** Stara skrzynka Bena nie wróci. Ponowna wysyłka na ten adres znowu by się nie udała.

Tomek nie zrobił nic złego, gdy zbierał ten adres. W 2022 roku adres był prawdziwy. Przestał działać później, a nikt mu o tym nie powiedział.

## Dwa rodzaje twardych odbić

Oba rodzaje pojawiają się w raporcie z kampanii jako „hard bounce”. Mają różne przyczyny i różne rozwiązania.

### Rodzaj 1: adres jest zły

Skrzynka pocztowa nie istnieje, domena nie istnieje albo adres zawiera literówkę. Do tej grupy należy też adres zamknięty po odejściu pracownika z firmy, taki jak adres Bena.

Duzi dostawcy formułują to po swojemu:

- Gmail zwraca `550 5.1.1 The email account that you tried to reach does not exist`, czyli „konto e-mail, z którym próbujesz się skontaktować, nie istnieje”.
- Microsoft zwraca `5.1.1 Bad destination mailbox address`, czyli „błędny adres skrzynki docelowej”.

**Przykład:** klient chce wpisać anna@example.com, ale wpisuje ana@example.com. Skrzynka o nazwie „ana” nie istnieje. Serwer zwraca twarde odbicie.

### Rodzaj 2: twój e-mail jest blokowany

Adres jest prawdziwy, ale serwer odrzuca e-maile od ciebie. Te kody zaczynają się od `5.7`.

- Kod `550 5.7.26` od Gmaila oznacza, że twoja domena nie jest uwierzytelniona. Uwierzytelnianie to rekordy w twojej domenie, które dowodzą, że e-mail naprawdę pochodzi od ciebie.
- Kod `5.7.23` od Microsoftu oznacza, że twój e-mail nie przeszedł sprawdzenia SPF. SPF to jeden z tych rekordów. Wymienia serwery, które mogą wysyłać e-maile dla twojej domeny.

Twoje narzędzie do wysyłki liczy je jako twarde odbicia, bo kod zaczyna się od 5. Ale adres jest w porządku. Problem leży w konfiguracji twojej poczty.

**Przykład:** Maria zakłada nową domenę maria-design.example. Pisze do klienta w Gmailu, zanim doda jakiekolwiek rekordy uwierzytelniające. Gmail zwraca `550 5.7.26`. Adres klienta działa. Naprawy wymaga konfiguracja Marii.

## Dlaczego twarde odbicia mają znaczenie

Dostawcy skrzynek to firmy, które prowadzą skrzynki pocztowe, na przykład Google i Microsoft. Liczą, jak często wysyłasz na adresy, które nie istnieją. Wiele twardych odbić mówi im, że twoja lista nie została sprawdzona.

Usługi do wysyłki e-maili też pilnują tej liczby. Współczynnik odbić to odsetek twoich e-maili, które zostały odbite. Na przykład 50 odbić na 1000 e-maili to współczynnik odbić 5%. Amazon SES, usługa Amazon do wysyłki e-maili, publikuje swoje limity:

| Współczynnik odbić | Co robi Amazon SES |
|---|---|
| Poniżej 2% | To poziom, który zaleca |
| 5% | Poddaje konto przeglądowi |
| 10% | Może wstrzymać konto |

Jedno twarde odbicie nie jest więc problemem. Problemem jest lista pełna nieaktywnych adresów.

## Co zrobić z twardym odbiciem

Najpierw przeczytaj kod w wiadomości o odbiciu. Kod mówi ci, z którym rodzajem twardego odbicia masz do czynienia.

1. **Kod to `5.1.1`, `5.1.2` lub inny błąd adresu.** Usuń adres z listy od razu. Nie wysyłaj na niego więcej. Mailchimp usuwa takie adresy z twojej grupy odbiorców automatycznie. Amazon każe nadawcom usuwać je „immediately”, czyli natychmiast.
2. **Kod zaczyna się od `5.7`.** Zachowaj adres. Napraw rekordy SPF, DKIM i DMARC albo swoją reputację nadawcy. Reputacja nadawcy to ocena, którą wystawiają ci dostawcy na podstawie twoich wcześniejszych wysyłek. Potem wyślij ponownie na ten sam adres.

Pełna tabela kodów i działań dla każdego z nich jest w poradniku [hard bounce a soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Jak radzi sobie z tym weryfikator

Weryfikator zadaje serwerowi odbiorcy to samo pytanie, zanim wyślesz e-mail. [Weryfikator e-mail](/email-checker) łączy się z serwerem pocztowym. Pyta, czy serwer przyjmuje e-maile dla tego dokładnego adresu, i przerywa, zanim jakikolwiek e-mail zostanie wysłany. Jeśli serwer odpowie `550 5.1.1`, weryfikator oznacza adres jako nieprawidłowy. Usuwasz go przed kampanią. Żaden e-mail nie został wysłany, więc twoja reputacja nie ucierpi.

Żeby sprawdzić całą listę naraz, prześlij ją do [narzędzia do masowej weryfikacji e-mail](/bulk-email-verifier). [Weryfikacja e-mail](/) znajduje problemy rodzaju 1, czyli adresy, które nie istnieją. Nie zapobiegnie twardemu odbiciu rodzaju 2, bo ono wynika z konfiguracji twojej własnej poczty.
