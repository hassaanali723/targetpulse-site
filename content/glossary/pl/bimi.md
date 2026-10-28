---
title: BIMI
description: Czym jest BIMI w e-mailu, jak pokazuje logo marki w skrzynce odbiorczej, czego potrzebujesz najpierw, jak wygląda rekord BIMI i które skrzynki go obsługują.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi email
short: BIMI to standard poczty e-mail, który pokazuje logo twojej marki obok twoich wiadomości w skrzynkach, które go obsługują. Skrót oznacza Brand Indicators for Message Identification. Działa tylko wtedy, gdy twoja domena przechodzi DMARC z polityką quarantine lub reject.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Logo pomaga tylko wtedy, gdy e-mail trafia do prawdziwej skrzynki
---

## Czym jest BIMI w e-mailu?

BIMI to skrót od Brand Indicators for Message Identification. To standard poczty e-mail, który pozwala marce pokazać logo obok jej wiadomości. Logo pojawia się w skrzynkach, które obsługują BIMI, na przykład w Gmailu i Apple Mail. Standard publikuje BIMI Group, grupa robocza firm z branży poczty e-mail.

BIMI samo w sobie nie zwiększa bezpieczeństwa. Pokazuje logo przy wiadomościach, które już przechodzą DMARC. Twoją domenę chroni praca, którą wykonujesz, żeby do tego dojść.

## Przykład: logo marki w Gmailu

Otwórz Gmaila na telefonie. Każda wiadomość na liście ma po lewej małe okrągłe zdjęcie. Przy większości nadawców Gmail pokazuje kółko z pierwszą literą nazwy nadawcy. Przy niektórych markach Gmail pokazuje w tym kółku logo marki. Te marki używają BIMI.

Załóżmy, że sklep z butami w domenie example.com konfiguruje BIMI. Wysyła newsletter na adres Gmail Priyi. Oto co się dzieje.

1. Gmail sprawdza SPF, DKIM i DMARC dla example.com. Wiadomość przechodzi DMARC.
2. Gmail widzi, że polityka DMARC sklepu to quarantine lub reject.
3. Gmail wyszukuje rekord BIMI pod adresem `default._bimi.example.com`.
4. Rekord wskazuje plik z logo sklepu i jego certyfikat znaku.
5. Gmail sprawdza certyfikat, a potem pokazuje logo obok wiadomości.

Jeśli którykolwiek krok się nie powiedzie, Priya zobaczy zwykłą literę. Sama wiadomość i tak zostanie normalnie dostarczona.

## Czego potrzebujesz do BIMI

Zanim logo pojawi się w Gmailu, potrzebujesz trzech rzeczy.

- **DMARC w trybie egzekwowania.** Twoja polityka [DMARC](/glossary/dmarc) musi mieć wartość `p=quarantine` lub `p=reject`. Google podaje, że BIMI nie obsługuje `p=none`.
- **Logo w pliku SVG Tiny PS.** SVG to format obrazu zbudowany z kształtów, a nie z pikseli. SVG Tiny PS to uproszczona wersja SVG przygotowana dla skrzynek pocztowych. Obraz musi być kwadratowy i zawierać tytuł z nazwą twojej marki. Nie może zawierać skryptów, animacji ani odwołań do innych plików. Plik powinien mieć mniej niż 32 KB.
- **Certyfikat znaku.** To plik od urzędu certyfikacji, czyli firmy, która sprawdza twoje prawo do używania logo. Gmail akceptuje dwa rodzaje.

| Certyfikat | Wymaga zarejestrowanego znaku towarowego | Co pokazuje Gmail |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Tak | Twoje logo i niebieski znacznik |
| CMC (Common Mark Certificate) | Nie | Twoje logo, bez znacznika |

## Rekord BIMI

Rekord BIMI to [rekord DNS TXT](/glossary/dns-txt-record). DNS to publiczny katalog, w którym domena publikuje swoje ustawienia. Rekord TXT to wpis w DNS, który zawiera zwykły tekst. Rekord BIMI znajduje się pod adresem `default._bimi.example.com`. Tutaj `default` to selektor, czyli etykieta rekordu.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1` oznacza, że to rekord BIMI.
- `l=` to adres internetowy twojego logo w formacie SVG.
- `a=` to adres internetowy twojego certyfikatu VMC lub CMC, czyli pliku PEM.

Przykłady od Google pokazują też rekord z pustym `l=` i wypełnionym tylko `a=`. To działa, bo logo jest zapisane w pliku certyfikatu. Postępuj zgodnie z zaleceniami dostawcy certyfikatu.

## Które skrzynki pokazują logo BIMI

Obsługa zależy od dostawcy. Poniższe zasady podajemy na naszej stronie generatora BIMI.

- **Gmail** pokazuje logo tylko z certyfikatem VMC lub CMC.
- **Apple Mail** pokazuje logo tylko z certyfikatem VMC.
- **Yahoo i Fastmail** mogą pokazać logo z rekordu w ogóle bez certyfikatu.

Skrzynki, które nie obsługują BIMI, nie pokazują niczego innego niż zwykle. Dostawcy mogą też potrzebować trochę czasu, żeby odczytać nowy rekord BIMI. Dlatego brak logo pierwszego dnia nie zawsze oznacza błąd.

## Jak skonfigurować BIMI

1. Skonfiguruj SPF i DKIM dla każdej usługi, która wysyła twoje e-maile.
2. Zmień politykę DMARC na quarantine lub reject. Nasz [generator DMARC](/dmarc-generator) tworzy rekord.
3. Zapisz logo jako plik SVG Tiny PS.
4. Kup certyfikat VMC lub CMC, jeśli chcesz, żeby logo pojawiało się w Gmailu.
5. Utwórz rekord BIMI w naszym [generatorze BIMI](/bimi-generator). Sprawdza on też twój plik SVG w przeglądarce.
6. Opublikuj rekord pod `default._bimi` w swoim DNS.
7. Wyślij testowy e-mail na konto Gmail i sprawdź, czy logo się pojawia.

## BIMI a weryfikacja e-mail

BIMI samo nie poprawia dostarczania. Pokazuje tylko logo przy wiadomościach, które trafiają do skrzynki odbiorczej i przechodzą DMARC. E-mail wysłany na adres, który nie istnieje, zostaje odbity, więc nikt nie widzi logo. [Weryfikator e-mail](/email-checker) i [narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) znajdują takie adresy, a ty usuwasz je przed wysyłką. Dzięki [weryfikacji e-mail](/) mniej twoich wiadomości zostaje odbitych, więc więcej prawdziwych osób widzi twoje logo.
