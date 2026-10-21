---
title: Greylisting
description: Czym jest greylisting, dlaczego serwer odrzuca twój pierwszy e-mail i przyjmuje drugi, jak długo trwa opóźnienie i jak wpływa to na wyniki weryfikacji.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Greylisting to ochrona przed spamem. Serwer pocztowy odrzuca pierwszy e-mail od nieznanego nadawcy, a potem przyjmuje ten sam e-mail, gdy nadawca spróbuje ponownie kilka minut później. Prawdziwe serwery pocztowe ponawiają próbę, a większość programów do spamu nie.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Uzyskaj prawdziwą odpowiedź dla adresów, które stosują greylisting wobec twoich sprawdzeń
---

## Czym jest greylisting?

Greylisting to ochrona przed spamem, która działa z opóźnieniem. Serwer pocztowy odrzuca pierwszy e-mail od nowego nadawcy i przyjmuje go przy drugiej próbie. Opisuje go RFC 6647.

Najpierw kilka pojęć. Serwer to komputer, który działa bez przerwy i obsługuje pocztę e-mail. Adres IP to numer, który identyfikuje serwer w internecie. Spam to niechciana masowa poczta e-mail.

Serwer odbiorcy, który stosuje greylisting, zapisuje każdego nadawcę, którego widział. Sprawdza trzy rzeczy:

1. adres IP, z którego wysłano e-mail;
2. adres nadawcy;
3. adres odbiorcy.

Jeśli nie widział wcześniej takiego zestawu, odrzuca e-mail z błędem tymczasowym. Prawidłowo skonfigurowany serwer pocztowy umieszcza e-mail w kolejce i próbuje ponownie. Kolejka to lista e-maili, które czekają na wysłanie przez serwer. Większość programów do spamu wysyła raz i nie ponawia próby.

Gdy przychodzi ponowna próba, serwer przyjmuje e-mail i zapisuje nadawcę. Od tej chwili e-maile od tego samego nadawcy są przyjmowane przy pierwszej próbie.

## Prosty przykład

Oto greylisting od strony nadawcy.

1. **Nina pisze do nowego dostawcy.** Nina pracuje w kawiarni. O 9:00 po raz pierwszy wysyła e-mail na adres orders@supplier.example.
2. **Serwer dostawcy jej nie zna.** Nigdy nie widział takiego zestawu: serwer Niny, jej adres i ten odbiorca.
3. **Wysyła błąd tymczasowy.** Odpowiada kodem `451` z komunikatem w rodzaju „greylisted, try again later”, czyli „greylisting, spróbuj później”.
4. **Serwer Niny czeka.** Jej serwer pocztowy trzyma e-mail w kolejce. Nina niczego nie widzi.
5. **Próbuje ponownie.** Około 9:15 serwer Niny wysyła ten sam e-mail jeszcze raz.
6. **E-mail zostaje przyjęty.** Serwer dostawcy widzi drugą próbę. Przyjmuje e-mail i zapisuje dane Niny.
7. **Następnym razem nie ma czekania.** Gdy w przyszłym tygodniu Nina znowu napisze do dostawcy, e-mail zostanie przyjęty przy pierwszej próbie.

Program do spamu, który wysyła tysiące e-maili, zwykle nie próbuje drugi raz. Dlatego jego e-maile nigdy nie docierają.

## Jak to wygląda dla nadawcy

Pierwsza próba dostaje kod, który zaczyna się od 4. Zwykle jest to `450` lub `451` z komunikatem w rodzaju „greylisted, try again later”. Twój serwer pocztowy traktuje to jako [miękkie odbicie (soft bounce)](/glossary/soft-bounce) i ponawia próbę według własnego harmonogramu. Miękkie odbicie to tymczasowy błąd dostarczenia.

Serwer odbiorcy decyduje, jak długo czekać, zanim przyjmie ponowną próbę. Często jest to około 15 minut. Niektóre serwery stosują krótsze lub dłuższe opóźnienie.

Zwykle nie zauważasz greylistingu. E-mail przychodzi kilka minut później. Jeśli twoje narzędzie w ogóle pokaże powiadomienie o odbiciu, zniknie ono samo.

## Kiedy greylisting ma znaczenie

Greylisting nie wpływa na zwykłą kampanię. Ma znaczenie w dwóch przypadkach.

**E-maile, w których liczy się czas.** Reset hasła lub jednorazowy kod, który przychodzi 15 minut za późno, jest dla użytkownika bezużyteczny. Dlatego nadawcy e-maili transakcyjnych czasem proszą domeny odbiorców o dodanie ich adresów IP do listy dozwolonych. E-mail transakcyjny to wiadomość wysłana w wyniku działania użytkownika, na przykład potwierdzenie zakupu lub kod logowania.

**Przykład:** Leo prosi stronę internetową o kod logowania. Kod trafia na jego służbowy adres, który stosuje greylisting. Kod przychodzi 15 minut później. Wtedy Leo już nie próbuje się zalogować.

**Weryfikacja.** Weryfikator sprawdza adres, rozpoczynając rozmowę SMTP i przerywając ją, zanim cokolwiek wyśle. SMTP to standardowy sposób, w jaki serwery pocztowe porozumiewają się ze sobą, żeby wysyłać e-maile. Na serwerze z greylistingiem pierwsza próba dostaje odpowiedź `4xx`, czyli kod zaczynający się od 4. Weryfikator, który kończy po jednej próbie, podaje wynik nieznany. Adres może być prawidłowy.

## Greylisting a secure email gateway

Wiele domen firmowych korzysta z [secure email gateway](/glossary/secure-email-gateway) (bramki bezpieczeństwa poczty), na przykład Proofpoint lub Mimecast. Secure email gateway to usługa bezpieczeństwa, która sprawdza e-maile firmy, zanim trafią do skrzynek pracowników. Te bramki domyślnie stosują greylisting wobec nieznanych nadawców. To jeden z powodów, dla których podstawowe sprawdzenie zwraca wynik nieznany dla wielu adresów B2B. Adresy B2B to służbowe adresy osób z innych firm.

## Jak radzi sobie z tym weryfikator

Dobry [weryfikator e-mail](/email-checker) traktuje odpowiedź `4xx` jako „spróbuj ponownie”, a nie jako wynik. Czeka, ponawia próbę z tego samego adresu IP i podaje odpowiedź, którą serwer daje po opóźnieniu greylistingu. Giggal.ai robi tak, gdy rozstrzyga wynik dla domen za bramkami. Dzięki temu zwraca wynik prawidłowy lub nieprawidłowy tam, gdzie sprawdzenie z jedną próbą zwraca wynik nieznany.

[Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to samo dla każdego adresu na liście. [Weryfikacja e-mail](/) nie może wyłączyć greylistingu. Czeka, aż opóźnienie minie, a potem podaje, czy każdy adres istnieje.
