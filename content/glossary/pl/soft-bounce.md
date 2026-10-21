---
title: Soft bounce (miękkie odbicie)
description: Czym jest soft bounce (miękkie odbicie), częste przyczyny i ich kody, jak długo narzędzia ponawiają wysyłkę i kiedy usunąć adres, który ciągle się odbija.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Soft bounce (miękkie odbicie) to e-mail, który tym razem nie został dostarczony z powodu tymczasowego problemu. Adres jest prawdziwy. Skrzynka jest pełna, serwer jest zajęty albo serwer poprosił, żeby spróbować później.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Zobacz, które adresy na twojej liście są prawdziwe, zanim wyślesz
---

## Czym jest soft bounce?

Soft bounce, czyli miękkie odbicie, to e-mail, który tym razem nie został dostarczony, ale może zostać dostarczony później. Problem jest tymczasowy. Serwer odbiorcy pozwala spróbować ponownie.

Najpierw kilka pojęć. Serwer to komputer, który działa bez przerwy i obsługuje pocztę e-mail dla domeny. Domena to część adresu po znaku @, na przykład example.com. Odbicie (bounce) to automatyczna wiadomość, która informuje, że e-mail nie został dostarczony.

Standard poczty e-mail RFC 5321 nazywa miękkie odbicie tymczasową odpowiedzią negatywną. Kod w wiadomości o odbiciu zaczyna się od 4. Przykład: `452 4.2.2`. Kod, który zaczyna się od 5, oznacza [twarde odbicie (hard bounce)](/glossary/hard-bounce). Twarde odbicie jest trwałe.

## Prosty przykład

Oto zwykłe miękkie odbicie od początku do końca.

1. **Lucy wysyła fakturę.** Lucy prowadzi firmę sprzątającą. W poniedziałek wysyła fakturę klientowi na adres james@example.com.
2. **Skrzynka jest pełna.** James od lat nie usunął żadnego e-maila. W jego skrzynce pocztowej nie ma już miejsca.
3. **Serwer na razie go odrzuca.** Serwer odpowiada kodem, który zaczyna się od 4. Oznacza to „nie teraz, spróbuj później”.
4. **Narzędzie Lucy próbuje ponownie.** Jej narzędzie do wysyłki czeka i wysyła fakturę ponownie kilka godzin później. Robi to samodzielnie.
5. **James czyści skrzynkę.** We wtorek rano James usuwa stare e-maile.
6. **Następna próba się udaje.** Faktura dociera we wtorek po południu. Lucy nie musiała nic robić.

Adres był cały czas prawdziwy. Nie pasował tylko moment wysyłki.

## Częste przyczyny

Każda przyczyna ma własny kod. Oto najczęstsze.

- **Skrzynka jest pełna.** Gmail zwraca `452 4.2.2 The recipient's inbox is out of storage space`, czyli „w skrzynce odbiorcy brakuje miejsca”. Odbiorca musi usunąć część e-maili. Tak było w przypadku Jamesa powyżej.
- **Za dużo e-maili w zbyt krótkim czasie.** Gmail zwraca `450 4.2.1 The user you are trying to contact is receiving email too quickly`, czyli „użytkownik, z którym próbujesz się skontaktować, dostaje e-maile zbyt szybko”. Gmail zwraca `421 4.7.28`, gdy z twojego adresu IP przychodzi za dużo e-maili. Adres IP to numer, który identyfikuje serwer, z którego przyszedł twój e-mail. Przykład: sklep wysyła duży e-mail o wyprzedaży do wszystkich swoich klientów w Gmailu naraz, a Gmail prosi go o zwolnienie tempa.
- **Greylisting.** Serwer odrzuca pierwszy e-mail od nieznanego nadawcy. Przyjmuje ten sam e-mail przy drugiej próbie. Zobacz [greylisting](/glossary/greylisting).
- **Serwer nie działa lub działa wolno.** Kod `421` oznacza, że serwer jest niedostępny. Kod `4.4.1` lub `4.4.2` oznacza, że połączenie się nie udało albo przekroczyło limit czasu. Przykład: serwer pocztowy małej firmy zostaje wyłączony na godzinę z powodu naprawy.
- **E-mail wygasł.** Kod `4.4.7` oznacza, że twój serwer ponawiał próby przez cały swój okres ponawiania, a potem przestał. RFC 5321 mówi, że serwery powinny ponawiać próby przez około cztery do pięciu dni.

## Co robi twoje narzędzie do wysyłki

Twoje narzędzie do wysyłki automatycznie ponawia próbę po miękkim odbiciu. Każde narzędzie ma własne zasady.

| Narzędzie | Co robi |
|---|---|
| SendGrid | Ponawia próby przez maksymalnie 72 godziny. |
| HubSpot | Oznacza e-mail jako oczekujący przez maksymalnie 72 godziny. Potem zapisuje soft bounce. |
| Mailchimp | Zmienia adres na hard bounce po 7 miękkich odbiciach, jeśli kontakt nigdy nie otworzył e-maila. Jeśli kontakt wcześniej otworzył e-mail, limit to 15 miękkich odbić. |

To samo miękkie odbicie może mieć różne etykiety w różnych narzędziach. Czytaj kod w wiadomości o odbiciu, a nie etykietę.

## Co zrobić z miękkim odbiciem

1. **Na początku nic nie rób.** Pozwól narzędziu do wysyłki ponowić próbę. Jedno miękkie odbicie to normalna sytuacja.
2. **Obserwuj adres przy kolejnych wysyłkach.** Zanotuj, czy odbije się znowu w przyszłym tygodniu i tydzień później.
3. **Usuń go, jeśli ciągle się odbija.** Usuń adres, który daje miękkie odbicie przy kilku wysyłkach z rzędu. Limit Mailchimpa, czyli 7 miękkich odbić, to bezpieczna zasada.

**Przykład:** wysyłasz cotygodniowy newsletter. Jeden adres przez sześć tygodni co tydzień zwraca „skrzynka pełna”. Ta skrzynka nie jest pełna. Nikt z niej nie korzysta. Usuń ten adres.

## Jak radzi sobie z tym weryfikator

Weryfikator łączy się z serwerem pocztowym, zanim wyślesz e-mail. Jeśli serwer odpowie kodem 4xx, czyli dowolnym kodem zaczynającym się od 4, weryfikator próbuje ponownie. Jeśli odpowiedź się nie zmienia, weryfikator oznacza adres jako nieznany, a nie prawidłowy. Nieznany oznacza, że skrzynka pocztowa istnieje, ale może nie odbierać e-maili. Poradnik [hard bounce a soft bounce](/blog/hard-bounce-vs-soft-bounce) wyjaśnia każdy kod i to, co z nim zrobić.

[Weryfikator e-mail](/email-checker) wykonuje ten test dla jednego adresu. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) wykonuje go dla całej listy. [Weryfikacja e-mail](/) nie opróżni pełnej skrzynki ani nie uruchomi serwera, który nie działa. Mówi ci, które adresy istnieją, zanim wyślesz, i które wymagają ponownego sprawdzenia.
