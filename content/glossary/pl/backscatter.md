---
title: Backscatter
description: Czym jest backscatter, dlaczego dostajesz powiadomienia o odbiciu e-maili, które nie wyszły od ciebie, czy ktoś włamał się na twoje konto i jak to zatrzymać w swojej domenie.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter
short: Backscatter to powiadomienia o odbiciu, które dostajesz dla e-maili, które nie wyszły od ciebie. Spamer wpisał twój adres w pole nadawcy swoich e-maili. Gdy tych e-maili nie udało się dostarczyć, powiadomienia o odbiciu wróciły do ciebie.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Utrzymuj niski poziom własnych odbić dzięki czystej liście
---

## Czym jest backscatter?

Backscatter to powiadomienia o odbiciu, które dostajesz dla e-maili, które nie wyszły od ciebie.

Wszystko zaczyna się od spamu. Spamer wysyła tysiące e-maili i wpisuje twój adres w pole nadawcy. Wiele z tych e-maili trafia na adresy, które nie istnieją. Serwery odbiorców wysyłają powiadomienie o odbiciu na adres nadawcy. Ten adres jest twój, więc odbicia trafiają do twojej skrzynki odbiorczej.

Powiadomienie o odbiciu to automatyczna wiadomość, którą serwer wysyła, gdy nie może dostarczyć e-maila. Jego formalna nazwa to [raport o niedostarczeniu](/glossary/ndr).

## Prosty przykład

Oto jak backscatter dociera do małej firmy.

1. **Lena prowadzi kwiaciarnię.** Jej adres to hello@flowers.example.
2. **Spamer kopiuje jej adres.** Spamer wysyła 10 000 fałszywych e-maili. Każdy z nich podaje, że pochodzi z hello@flowers.example.
3. **Wiele e-maili nie dociera.** Mniej więcej jedna trzecia trafia na adresy, które nie istnieją.
4. **Niektóre serwery najpierw przyjmują, a sprawdzają później.** Takie serwery przyjmują e-mail, a potem stwierdzają, że takiej skrzynki nie ma.
5. **Odbicia trafiają do Leny.** Te serwery wysyłają powiadomienia o odbiciu na hello@flowers.example.
6. **Skrzynka Leny się zapełnia.** Pewnego ranka Lena znajduje setki wiadomości „Undeliverable” dotyczących e-maili, których nigdy nie napisała.

Te liczby są tylko przykładem. Ten schemat jest częsty.

## Czy ktoś włamał się na moje konto?

Zwykle nie. Do wysłania e-maila z fałszywym adresem nadawcy nie jest potrzebny dostęp do twojego konta. To tak, jakby ktoś napisał na kopercie cudzy adres zwrotny. Nie trzeba do tego niczyjego klucza.

Sprawdź folder Wysłane. Jeśli tych e-maili tam nie ma, nie wyszły z twojego konta. Jeśli tam są, zmień hasło i włącz weryfikację dwuetapową.

## Dlaczego tak się dzieje

Backscatter powstaje, bo niektóre serwery najpierw przyjmują e-mail, a adres sprawdzają później. Gdy sprawdzenie się nie powiedzie, wysyłają odbicie na adres nadawcy. Nie mogą wiedzieć, że adres nadawcy był fałszywy.

Dobrze skonfigurowane serwery sprawdzają adres, gdy drugi serwer jest jeszcze połączony. Jeśli adres nie istnieje, od razu odrzucają e-mail. Nie powstaje żadne powiadomienie o odbiciu, więc backscatter do nikogo nie trafia.

## Jak to zatrzymać w swojej domenie

Nie możesz zabronić spamerom wpisywania twojego adresu. Możesz sprawić, że serwery odbiorców będą odrzucać ich fałszywe e-maile. Służą do tego trzy rekordy w twojej domenie.

| Rekord | Co robi |
|---|---|
| [SPF](/glossary/spf) | Wymienia serwery uprawnione do wysyłania e-maili z twojej domeny |
| [DKIM](/glossary/dkim) | Dodaje podpis, który dowodzi, że e-mail naprawdę pochodzi od ciebie |
| [DMARC](/glossary/dmarc) | Mówi serwerom odbiorców, co zrobić z e-mailami, które nie przejdą tych sprawdzeń |

Zacznij DMARC od `p=none` i czytaj raporty. Gdy przechodzą już tylko twoje własne usługi, przejdź na `p=quarantine`, a potem na `p=reject`. Przy `p=reject` serwery odrzucają fałszywe e-maile, zamiast odsyłać ci odbicia.

Do tego czasu możesz przenosić powiadomienia o odbiciu do osobnego folderu za pomocą filtra. Nie odpowiadaj na nie.

## Dlaczego to ważne dla właścicieli serwerów

Jeśli prowadzisz serwer pocztowy, sprawdź, jak obsługuje nieznane adresy. Serwer, który przyjmuje pocztę, a później ją odbija, wysyła backscatter do niewinnych osób. Niektóre czarne listy wpisują takie serwery, na przykład lista na backscatterer.org. Obecność na czarnej liście może blokować dostarczanie twoich własnych e-maili.

## Jak pomaga weryfikator

[Weryfikacja e-mail](/) nie zatrzyma backscatter, bo te e-maile nie wyszły od ciebie. Pomaga przy odbiciach, za które naprawdę odpowiadasz. Usuń nieaktywne adresy z własnej listy przed wysyłką. Wtedy każde odbicie w twojej skrzynce będzie takie, które potrafisz wyjaśnić.
