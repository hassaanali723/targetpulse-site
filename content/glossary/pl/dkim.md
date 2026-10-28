---
title: DKIM
description: Czym jest DKIM, jak podpis DKIM dowodzi, że e-mail pochodzi z twojej domeny, jak wygląda rekord DKIM oraz jak go skonfigurować i sprawdzić.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM to skrót od DomainKeys Identified Mail. Dodaje podpis cyfrowy do każdego wysyłanego przez ciebie e-maila. Serwer odbiorcy sprawdza podpis, żeby potwierdzić, że e-mail pochodzi z twojej domeny i nie został zmieniony po wysłaniu.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Podpisany e-mail i tak zostaje odbity, gdy adres nie istnieje
---

## Czym jest DKIM?

DKIM to skrót od DomainKeys Identified Mail. Standard opisuje RFC 6376. DKIM dodaje podpis cyfrowy do każdego e-maila, który opuszcza twój serwer. Podpis cyfrowy to długi kod, który może utworzyć tylko twój serwer.

Serwer odbiorcy sprawdza ten kod. Jeśli kod jest prawidłowy, prawdziwe są dwie rzeczy. E-mail został podpisany przez twoją domenę. Nikt go nie zmienił po wysłaniu.

Domena to nazwa po znaku @ w adresie e-mail, na przykład example.com. DKIM działa dla każdej domeny osobno. Każda domena, która wysyła e-maile, powinna je podpisywać własnym kluczem.

## Przykład: sklep wysyła paragon

Sklep działa w domenie example.com. Lena kupuje lampę, a sklep wysyła jej paragon na adres w Gmailu. Oto co robi DKIM.

1. Serwer wysyłający sklepu tworzy paragon.
2. Używa klucza prywatnego, żeby utworzyć podpis dla e-maila. Klucz prywatny to tajny plik, który zostaje na serwerze wysyłającym.
3. Dodaje podpis do e-maila jako nagłówek o nazwie `DKIM-Signature`. Nagłówek to wiersz z informacjami technicznymi na początku e-maila. Czytelnicy zwykle go nie widzą.
4. E-mail trafia do Gmaila.
5. Gmail odczytuje nagłówek. Znajduje w nim domenę example.com i selektor s2026a.
6. Gmail wyszukuje klucz publiczny dla tego selektora w DNS sklepu. DNS to publiczny katalog, w którym domena publikuje swoje ustawienia.
7. Gmail używa klucza publicznego, żeby sprawdzić podpis. Sprawdzenie kończy się sukcesem.
8. Gmail zapisuje wynik jako DKIM pass dla example.com.

Załóżmy, że ktoś zmienił kwotę na paragonie po wysłaniu. Wtedy sprawdzenie w kroku 7 zakończyłoby się błędem. Klucz publiczny może potwierdzić podpis, ale nie może go utworzyć. Może to zrobić tylko klucz prywatny.

## Podpis DKIM

Podpis DKIM to jeden nagłówek z kilkoma częściami, które nazywają się tagami. Każdy tag to litera, znak równości i wartość. Najważniejsze są dwa tagi.

- `d=` to domena podpisująca, na przykład `d=example.com`.
- `s=` to selektor, na przykład `s=s2026a`. Selektor to etykieta, która nazywa jeden klucz. Domena może mieć jednocześnie kilka kluczy, każdy z własnym selektorem.

Nagłówek zawiera też sam podpis w `b=` oraz kod treści e-maila w `bh=`. Serwer odbiorcy używa ich wszystkich do sprawdzenia.

## Rekord DKIM

Klucz publiczny jest publikowany w rekordzie DKIM. To [rekord DNS TXT](/glossary/dns-txt-record), czyli wpis w DNS, który zawiera zwykły tekst. Jego nazwa składa się z selektora i domeny:

`s2026a._domainkey.example.com`

Wartość rekordu wygląda tak:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` oznacza, że to rekord DKIM.
- `k=rsa` podaje rodzaj klucza.
- `p=` zawiera klucz publiczny. Prawdziwa wartość ma kilkaset znaków.

Klucz prywatny nigdy nie trafia do DNS. Zostaje na serwerze wysyłającym. Jako rozmiar klucza wybierz 2048 bitów. Gmail akceptuje minimum 1024 bity, ale zaleca 2048. RFC 8301 mówi, że podpisujący powinni używać 2048 bitów.

## Dlaczego DKIM ma znaczenie

DKIM działa również po przekazaniu wiadomości. Załóżmy, że ktoś przekazuje paragon ze sklepu na inne konto. Serwer przekazujący wysyła go ze swojego adresu IP. Adres IP to numer, który identyfikuje serwer w internecie. Tego adresu IP nie ma w [rekordzie SPF](/glossary/spf) sklepu, więc SPF kończy się błędem. Podpis DKIM jest częścią e-maila, więc nadal przechodzi.

[DMARC](/glossary/dmarc) korzysta z DKIM. DMARC przechodzi, gdy SPF lub DKIM przechodzi dla tej samej domeny, która jest widoczna w adresie nadawcy (From). Przekazanie psuje SPF, więc to DKIM często sprawia, że DMARC przechodzi.

DKIM jest też wymagany od nadawców masowych. Wytyczne Google dla nadawców wymagają SPF, DKIM i DMARC od nadawców, którzy wysyłają 5000 lub więcej e-maili dziennie do Gmaila. Microsoft ma tę samą zasadę dla Outlook.com, Hotmail i Live.

## Jak skonfigurować DKIM

Sposób konfiguracji DKIM zależy od tego, kto wysyła twoje e-maile.

- **Korzystasz z usługi e-mail**, takiej jak Google Workspace, Microsoft 365, Mailchimp lub SendGrid. Usługa tworzy klucz za ciebie. Pokazuje ci rekord DKIM, który dodajesz u swojego dostawcy DNS. Dostawca DNS to zwykle firma, w której została kupiona domena.
- **Masz własny serwer pocztowy.** Parę kluczy tworzysz samodzielnie. Nasz [generator DKIM](/dkim-generator) tworzy w przeglądarce parę kluczy 2048-bitowych i rekord TXT. Klucz prywatny instalujesz na serwerze, a rekord publikujesz w DNS.

Sprawdź jeden częsty problem. Wiele usług e-mail domyślnie podpisuje wiadomości własną, wspólną domeną. Podpis przechodzi, ale domena w `d=` nie jest twoja, więc wyrównanie DMARC kończy się błędem. Włącz własny DKIM w ustawieniach usługi, żeby `d=` pokazywało twoją domenę. Strona [wyrównanie DMARC](/glossary/dmarc-alignment) wyjaśnia, dlaczego to ważne.

## Jak sprawdzić, czy DKIM działa

1. Wyślij e-mail ze swojej domeny na prywatne konto Gmail.
2. Otwórz tę wiadomość w Gmailu.
3. Kliknij menu z trzema kropkami i wybierz Pokaż oryginał.
4. Znajdź wiersz DKIM u góry. Powinien pokazywać PASS z twoją domeną.

Jeśli pokazuje FAIL, sprawdź dwie rzeczy. Rekord DNS mógł jeszcze nie zostać w pełni opublikowany. Albo selektor na twoim serwerze nie jest dokładnie taki sam jak selektor w DNS.

## DKIM a weryfikacja e-mail

DKIM dowodzi, że e-mail pochodzi z twojej domeny, ale nie dowodzi, że adres odbiorcy istnieje. Poprawnie podpisany e-mail wysłany na nieistniejący adres i tak zostaje odbity. [Weryfikator e-mail](/email-checker) pyta serwer odbiorcy, czy każda skrzynka pocztowa istnieje, zanim wyślesz wiadomość. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to samo dla całej listy. DKIM dowodzi, kto wysłał e-mail, a [weryfikacja e-mail](/) sprawia, że trafia on na adresy, które mogą go odebrać.
