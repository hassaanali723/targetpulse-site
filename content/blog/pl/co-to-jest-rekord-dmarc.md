---
title: "Co to jest rekord DMARC?"
seoTitle: "Co to jest rekord DMARC? Tagi, przykłady i raporty (2026)"
description: "Rekord DMARC to rekord TXT pod _dmarc.twojadomena, który mówi serwerom, co zrobić z pocztą bez uwierzytelnienia. Każdy tag standardu z 2026 roku, z przykładami."
slug: co-to-jest-rekord-dmarc
date: 2026-10-22
updated: 2026-10-22
keyword: rekord dmarc
image: /blog/covers/pl/co-to-jest-rekord-dmarc.webp
imageAlt: Przewodnik po rekordzie DMARC z opisem tagów i przeglądem polityk
cta: Chroń domenę, a potem utrzymuj niski współczynnik odbić
---

Rekord DMARC to jedna krótka linia tekstu, którą dodajesz w ustawieniach DNS swojej domeny. Mówi innym serwerom pocztowym, co zrobić z e-mailem, który podaje się za wiadomość z twojej domeny, ale nie przechodzi kontroli bezpieczeństwa. Mówi im też, dokąd wysyłać ci raporty o poczcie, którą otrzymują w twoim imieniu.

**W jednym zdaniu:** DMARC to publiczna zasada, która mówi: „jeśli e-mail podaje się za wiadomość z mojej domeny, ale nie pochodzi ode mnie, przenieś go do spamu albo zablokuj i wyślij mi raport”.

## DMARC na przykładzie

### Problem

Każdy może wysłać e-mail i wpisać twój adres w polu From. Załóżmy, że twoja domena to `example.com`. Oszust wysyła twojemu klientowi taki e-mail:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Twój klient widzi `example.com` i ufa wiadomości. Ale ta wiadomość nigdy nie wyszła od ciebie.

### Dwie kontrole, które już istnieją

Dostawcy poczty, tacy jak Gmail i Outlook, już teraz mogą przeprowadzić dwie kontrole każdego e-maila:

- **SPF:** czy ten e-mail przyszedł z serwera, któremu `example.com` pozwala wysyłać swoją pocztę?
- **DKIM:** czy ten e-mail ma podpis cyfrowy domeny `example.com`?

Same te kontrole mają lukę. Oszust może je przejść dla własnej domeny, a w polu From nadal będzie widać twoją. Nic nie łączy kontroli z adresem, który widzi twój klient.

### Co dodaje DMARC

DMARC dodaje jedną zasadę. SPF lub DKIM musi przejść dla tej samej domeny, którą widać w polu From. Taka zgodność to **wyrównanie (alignment)**. Jeśli żadna kontrola nie przechodzi dla tej domeny, e-mail nie przechodzi DMARC.

DMARC pozwala też zdecydować, co stanie się z e-mailem, który nie przeszedł kontroli.

### Rekord DMARC, część po części

Dodajesz tę linię w ustawieniach DNS domeny `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Oto, co mówi każda część:

- `v=DMARC1`: „To jest moja zasada DMARC”.
- `p=reject`: „Jeśli e-mail podaje się za wiadomość z example.com, ale nie przechodzi kontroli, zablokuj go”.
- `rua=mailto:reports@example.com`: „Wysyłaj mi codzienny raport o wszystkich, którzy wysyłają pocztę w moim imieniu”.

### Co dzieje się z fałszywym e-mailem

1. E-mail oszusta z adresu `billing@example.com` dociera do Gmaila.
2. Gmail sprawdza SPF i DKIM. Żadna kontrola nie przechodzi dla `example.com`.
3. Gmail czyta twój rekord DMARC. Rekord mówi `p=reject`.
4. Gmail blokuje e-mail. Twój klient nigdy go nie zobaczy.

Twoje prawdziwe e-maile przechodzą te same kontrole, więc są dostarczane normalnie.

### Trzy możliwe wartości p

| Ustawienie | Co dzieje się z e-mailem, który nie przeszedł DMARC | Kiedy go użyć |
| --- | --- | --- |
| p=none | Nic. Jest dostarczany normalnie, a ty dostajesz raporty. | Na początku, gdy szukasz wszystkich prawdziwych nadawców |
| p=quarantine | Trafia do folderu spamu. | Gdy wszyscy prawdziwi nadawcy przechodzą kontrole |
| p=reject | Jest całkowicie blokowany. | Gdy masz pewność, że nic prawdziwego nie zostanie odrzucone |

### Jak konfiguruje to większość domen

1. Zacznij od `p=none` i czytaj codzienne raporty.
2. Znajdź każdą prawdziwą usługę, która wysyła pocztę w twoim imieniu, na przykład narzędzie do mailingu i system obsługi klienta. Upewnij się, że każda z nich przechodzi kontrole.
3. Przejdź na `p=quarantine`, a potem na `p=reject`. Od tej chwili nikt nie podrobi twojej domeny u odbiorców, którzy stosują twoją politykę.

Dlatego większość domen zaczyna od rekordu takiego jak ten, który tylko obserwuje:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Dalsza część poradnika szczegółowo wyjaśnia każdą część rekordu DMARC i dodatkowe opcje, które możesz dodać później.

## SPF, DKIM i adres From dokładniej

DMARC działa na podstawie SPF i DKIM. Nasz poradnik o [SPF i DKIM](/blog/spf-dkim-dmarc-explained) omawia je w całości. Poniżej krótka wersja.

**SPF** to lista serwerów, które mogą wysyłać pocztę w imieniu twojej domeny. Serwer odbiorczy sprawdza, czy e-mail przyszedł z serwera z tej listy.

**DKIM** to podpis cyfrowy dodawany do każdego e-maila. Serwer odbiorczy sprawdza podpis za pomocą klucza w twoim DNS. Jeśli podpis jest prawidłowy, e-mail nie został po drodze zmieniony i podpisała go twoja domena.

**Adres From** to adres nadawcy, który odbiorca widzi w swojej skrzynce, na przykład `hello@example.com`. DMARC sprawdza, czy SPF lub DKIM przeszedł dla tej samej domeny.

## Jak wygląda rekord DMARC

### Gdzie umieścić go w DNS

DNS to publiczna lista ustawień twojej domeny. Edytujesz ją u dostawcy DNS, którym zwykle jest firma, w której kupiono domenę, albo dostawca hostingu. Rekord DMARC to rekord TXT, czyli wpis DNS zawierający zwykły tekst.

Dodajesz go pod nazwą hosta `_dmarc`. Większość paneli DNS automatycznie dopisuje na końcu twoją domenę, więc `_dmarc` staje się `_dmarc.example.com`.

Uważaj na jeden częsty błąd. Niektóre panele oczekują tylko `_dmarc`. Jeśli wpiszesz tam pełną nazwę `_dmarc.example.com`, rekord trafi pod adres `_dmarc.example.com.example.com`. Serwery odbiorcze go tam nie znajdą.

### Zasady zapisu

- **Rekord musi zaczynać się od `v=DMARC1`.** To musi być pierwsza część rekordu. `DMARC1` trzeba zapisać wielkimi literami. Jeśli napiszesz `v=dmarc1`, umieścisz inną część na początku albo zrobisz literówkę, serwery odbiorcze zignorują cały rekord. Twoja domena będzie wtedy traktowana tak, jakby nie miała polityki DMARC.
- **Oddzielaj części średnikami.** Spacje wokół średników są dozwolone.
- **Gdy brakuje polityki.** Załóżmy, że brakuje części `p` albo jest błędna, ale rekord ma prawidłowy adres raportów w `rua`. Odbiorcy traktują wtedy politykę jako `p=none`. Jeśli brakuje zarówno `p`, jak i `rua` albo obie są błędne, odbiorcy całkowicie pomijają DMARC dla twojej domeny.
- **Publikuj tylko jeden rekord DMARC.** Jeśli serwer odbiorczy znajdzie dwa lub więcej rekordów TXT zaczynających się od `v=DMARC1`, odrzuca je wszystkie. Ta zasada pochodzi z [RFC 9989](https://www.rfc-editor.org/info/rfc9989), obecnego standardu DMARC. Dwa rekordy nie dają dwóch polityk. Zostawiają twoją domenę zupełnie bez ochrony.

### Jak sprawdzić rekord

Możesz sprawdzić swój rekord poleceniem w terminalu komputera:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Używaj `dig` w systemach Linux i macOS. Polecenie wyświetla rekord w jednej linii, w cudzysłowie. W Windows używaj `nslookup`. Pokazuje on rekord, który zwraca twój serwer DNS.

Jeśli polecenie nic nie zwraca, prawdziwa jest jedna z dwóch rzeczy. Albo rekord jeszcze się nie rozpropagował w DNS, albo dodano go pod złą nazwą hosta.

## Wszystkie tagi DMARC i te, których potrzebujesz

Każda część rekordu DMARC, na przykład `p=none`, to tag. Obecny standard z maja 2026 roku ma jedenaście tagów.

| Tag | Co robi, prostymi słowami | Możliwe wartości | Gdy go pominiesz | Czy go potrzebujesz? |
| --- | --- | --- | --- | --- |
| v | Mówi „to jest rekord DMARC”. Musi być pierwszy. | DMARC1 | Wymagany | Tak |
| p | Twoja polityka: co zrobić z pocztą, która nie przeszła kontroli. Obejmuje domenę i jej subdomeny. | none, quarantine, reject | Traktowany jako none, jeśli rua jest prawidłowy | Tak |
| rua | Dokąd wysyłać codzienne raporty zbiorcze | Jeden lub więcej adresów mailto:, oddzielonych przecinkami | Nie dostajesz raportów | Tak |
| sp | Osobna polityka dla istniejących subdomen, na przykład news.example.com | none, quarantine, reject | Tak samo jak p | Tylko gdy subdomeny potrzebują innych zasad |
| np | Polityka dla subdomen, które nie istnieją w DNS | none, quarantine, reject | Tak samo jak sp albo p, jeśli brakuje sp | Tylko do blokowania wymyślonych subdomen |
| adkim | Jak dokładnie musi zgadzać się domena DKIM. r = łagodnie, s = ściśle | r, s | r | Rzadko. Zwykle wybiera się tryb łagodny |
| aspf | Jak dokładnie musi zgadzać się domena SPF. r = łagodnie, s = ściśle | r, s | r | Rzadko. Zwykle wybiera się tryb łagodny |
| t | Tryb testowy. Odbiorcy stosują twoją politykę o jeden stopień łagodniej | y, n | n | Tylko podczas przechodzenia na surowszą politykę |
| ruf | Dokąd wysyłać raport o każdym pojedynczym e-mailu, który nie przeszedł kontroli | Jeden lub więcej adresów mailto:, oddzielonych przecinkami | Nie dostajesz raportów | Rzadko, z powodu ograniczeń prywatności |
| fo | Opcje raportów o pojedynczych e-mailach | 0, 1, d, s | 0 | Tylko jeśli używasz ruf |
| psd | Oznacza domenę sufiksu publicznego | y, n, u | u | Tylko dla sufiksów publicznych lub dużych organizacji, które przekazują części swojego DNS |

Tryb łagodny i ścisły działają tak. W trybie łagodnym subdomena liczy się jako zgodna, więc `mail.example.com` zgadza się z `example.com`. W trybie ścisłym obie domeny muszą być dokładnie takie same.

Standard z 2026 roku wycofał trzy starsze tagi. To tag procentowy (`pct`), tag formatu raportu (`rf`) i tag interwału raportów (`ri`). Pozostawiony `pct=100` nie szkodzi. `pct` poniżej 100 służył do stosowania polityki tylko do części poczty podczas wdrażania. Tę funkcję pełni teraz nowy tag `t`.

**Czego potrzebuje większość domen:** tylko `v`, `p` i `rua`.

- Dodaj `sp` lub `np`, jeśli twoje subdomeny potrzebują innych zasad.
- Nie ruszaj `psd`. Potrzebujesz go tylko, jeśli prowadzisz dużą organizację, która przekazuje części swojego DNS (`psd=n`), albo sufiks publiczny, na przykład `co.uk` (`psd=y`).
- Łagodne dopasowanie (`adkim=r` i `aspf=r`) to ustawienie domyślne, które działa w prawie każdej domenie. Tagi wyrównania są potrzebne tylko wtedy, gdy surowe wymagania zgodności zabraniają podpisywania subdomeną.

Rekord z tymi tagami zbudujesz albo stary rekord uporządkujesz w naszym [generatorze DMARC](/dmarc-generator) (po angielsku).

## Co naprawdę robią p=none, quarantine i reject

Tag `p` to najważniejsza część rekordu. Mówi serwerom odbiorczym, co zrobić z e-mailem, który nie przeszedł DMARC. Są trzy możliwości. Każda z nich to etap na drodze do pełnej ochrony.

**p=none: tylko obserwacja.** Odbiorcy nie robią nic szczególnego z pocztą, która nie przeszła kontroli. Jest dostarczana normalnie i działają tylko zwykłe filtry antyspamowe. W połączeniu z raportami w `rua` RFC 9989 nazywa to trybem monitorowania (Monitoring Mode). Pokazuje ci każdą usługę, która wysyła pocztę jako twoja domena, bez żadnego ryzyka dla dostarczania.

**p=quarantine: przenieś do spamu.** Odbiorcy traktują pocztę, która nie przeszła kontroli, jako podejrzaną. U większości dostawców skrzynek trafia ona do folderu spamu odbiorcy. To chroni twoich odbiorców przed fałszywymi e-mailami. Prawdziwa poczta ze źle skonfigurowanego narzędzia nie przepada, bo nadal można ją znaleźć w spamie.

**p=reject: zablokuj.** Odbiorcy odrzucają pocztę, która nie przeszła kontroli. Większość robi to w trakcie dostarczania, z trwałym kodem błędu zaczynającym się od 5. E-mail nigdy nie trafia do skrzynki. Serwer nadawcy dostaje zamiast tego komunikat o odbiciu.

### Odbiorcy nie zawsze stosują twoją politykę

Twoja polityka to prośba, a nie polecenie. Standard mówi, że odbiorcy nie powinni odrzucać e-maila tylko z powodu `p=reject`. Jeśli nie wiedzą o e-mailu nic więcej, powinni potraktować go jak quarantine. Dostawcy skrzynek korzystają też obok twojej polityki z własnych danych o reputacji nadawców i własnych filtrów antyspamowych.

### Dlaczego reject wymaga DKIM, a nie tylko SPF

Przekazywanie poczty psuje SPF. Załóżmy, że ktoś przekazuje pocztę służbową na konto prywatne. Serwer przekazujący wysyła e-mail ze swojego adresu IP. Tego adresu nie ma w twoim rekordzie SPF, więc kontrola SPF nie przechodzi.

DKIM przetrwa przekazanie. Podpis jest w samym e-mailu, więc pozostaje prawidłowy i nadal pasuje do twojej domeny. Dlatego domena z `p=reject` musi używać DKIM i nie może polegać tylko na SPF.

### Tryb testowy z t=y

RFC 9989 dodaje tryb testowy. Ustaw `t=y`, a odbiorcy zastosują twoją politykę o jeden stopień łagodniej, niż ją opublikowano:

- `reject` jest traktowane jak `quarantine`.
- `quarantine` jest traktowane jak `none`.

Tryb testowy nie zmienia raportów. Nie działa też, gdy twoja polityka to `p=none`. Pozwala zobaczyć, jak surowsza polityka zachowuje się przy prawdziwej poczcie, zanim wprowadzisz ją na stałe.

## Subdomeny: sp i np

Subdomena to dodatkowa nazwa przed twoją domeną, na przykład `marketing.example.com` albo `support.example.com`. Wiele firm wysyła pocztę z subdomen. Tagi `sp` i `np` ustalają zasady dla każdej subdomeny, która nie ma własnego rekordu DMARC.

### Jak odbiorca znajduje właściwy rekord

1. Odbiorca najpierw szuka rekordu DMARC dla dokładnie tej domeny, która jest w polu From. Jeśli wysyłasz z `news.example.com` i istnieje `_dmarc.news.example.com`, używa tego rekordu.
2. Jeśli tam nie ma rekordu, szuka twojego głównego rekordu pod `_dmarc.example.com`. Znajduje go, przesuwając się w górę nazwy domeny, po jednej części w stronę końca nazwy. Nie korzysta przy tym z Public Suffix List.
3. Gdy ma już twój główny rekord, sprawdza, czy subdomena nadawcy istnieje w DNS.

Potem wybiera zasadę:

- Jeśli subdomena istnieje, stosuje `sp`. Jeśli nie ma `sp`, stosuje `p`.
- Jeśli subdomena nie istnieje (DNS zwraca NXDOMAIN, czyli „nie ma takiej nazwy”), stosuje `np`. Jeśli nie ma `np`, używa `sp`. Jeśli nie ma też `sp`, używa `p`.

### Przykład

Załóżmy, że pod `_dmarc.example.com` opublikowano taki rekord:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Ustala on trzy różne zasady:

- **Poczta z samej domeny `example.com`** podlega `p=reject`. Jeśli nie przejdzie DMARC, odbiorcy są proszeni o jej zablokowanie.
- **Poczta z `news.example.com`**, subdomeny, która istnieje w DNS, podlega `sp=quarantine`. Załóżmy, że newsletter nie przechodzi kontroli, bo dostawca coś źle skonfigurował. Trafi do spamu, zamiast wrócić jako odbicie.
- **Poczta z wymyślonej nazwy, takiej jak `invoices-2026.example.com`**, która nie istnieje w DNS, podlega `np=reject`. Subdomena, którą ktoś po prostu wymyślił, dostaje surową zasadę, choć twoje prawdziwe subdomeny podlegają kwarantannie.

## Czym jest raport DMARC?

DMARC ma dwa rodzaje raportów:

- **Raporty zbiorcze**, ustawiane tagiem `rua`. To codzienne podsumowania.
- **Raporty o błędach**, ustawiane tagiem `ruf`. Opisują pojedyncze e-maile, które nie przeszły kontroli.

### Raporty zbiorcze (rua)

Raport zbiorczy to podsumowanie od jednego dostawcy skrzynek, na przykład Gmaila. Wymienia całą pocztę, którą ten dostawca otrzymał jako pocztę z twojej domeny. To plik XML, czyli uporządkowany plik tekstowy przeznaczony do odczytu przez programy. Dostawcy wysyłają go jako załącznik do e-maila, jako zwykły plik `.xml` albo plik skompresowany, na przykład `.xml.gz`.

Każdy raport zwykle obejmuje jeden dzień w czasie UTC. Standard mówi, że odbiorcy powinni wysyłać raporty zbiorcze co najmniej raz na 24 godziny. Nie mają jednak obowiązku wysyłania żadnych raportów.

Oto skrócony przykład raportu:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Oto, co mówi raport, blok po bloku:

- **`<report_metadata>`**: raport przyszedł od `mail.receiver.example`. Obejmuje jeden pełny dzień UTC.
- **`<policy_published>`**: polityka, którą odbiorca zobaczył dla `example.com`. Tutaj to `p=none` i `sp=none`.
- **`<row>`**: z adresu IP `192.0.2.10` przyszło 412 e-maili.
- **SPF**: w `<auth_results>` SPF przeszedł, ale dla domeny `bounces.esp-mail.example`. Ta domena to nie twoja domena From, czyli `example.com`. Dlatego w `<policy_evaluated>` SPF ma wartość `fail`, bo domeny się nie zgadzały.
- **DKIM**: w `<auth_results>` DKIM przeszedł dla `example.com`. To zgadza się z domeną From podaną w `<identifiers>`. DKIM przeszedł więc i był zgodny, a te 412 e-maili przeszło DMARC.

Najważniejsza rzecz jest prosta. `<auth_results>` pokazuje surowe wyniki kontroli SPF i DKIM. `<policy_evaluated>` pokazuje, czy każda kontrola była też zgodna z twoją domeną From. DMARC korzysta z tego drugiego.

### Raporty o błędach (ruf)

Raporty o błędach, często nazywane raportami szczegółowymi (forensic), opisują każdy po jednym e-mailu, który nie przeszedł kontroli. Mogą zawierać nagłówki e-maila i dane o odbiorcy. Z powodu tego ryzyka dla prywatności wielu odbiorców usuwa większość szczegółów albo w ogóle nie wysyła raportów o błędach. Tag `fo` ustawia opcje tych raportów. Ma znaczenie tylko wtedy, gdy używasz `ruf`.

### Czytanie raportów

Standard zaleca czytanie raportów zbiorczych za pomocą oprogramowania, a nie ręcznie. Jeśli wysyłasz pocztę do wielu dostawców skrzynek, każdy z nich codziennie wysyła ci własny raport.

## Dlaczego dostaję maile od DMARC?

Dostajesz te codzienne maile, bo tag `rua` w twoim rekordzie DMARC zawiera twój adres. Każdy dostawca skrzynek, który otrzymuje pocztę w twoim imieniu, wysyła codzienne podsumowanie na każdy adres z tego tagu.

Temat ma stały format, określony w [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Submitter to dostawca, który sprawdził pocztę, na przykład Google lub Microsoft. Raport XML jest w załączniku, często skompresowany.

Nie wysyłaj tych raportów na prywatną skrzynkę. Skieruj `rua` na osobną skrzynkę albo do usługi przetwarzającej raporty. Jeśli nie wiesz, skąd biorą się te raporty, sprawdź swój rekord DMARC. Mógł go dodać poprzedni administrator albo ktoś, kto postępował zgodnie z instrukcją konfiguracji platformy mailingowej.

### Wysyłanie raportów do innej domeny

Załóżmy, że twoja domena to `example.com`, a raporty mają trafiać na adres w `reports.example.net`. Domena odbierająca raporty musi zgodzić się na ich przyjmowanie. Robi to, publikując rekord TXT w swoim DNS. Bez tego rekordu odbiorcy ignorują adres i nie wysyłają raportów.

Rekord umieszcza się pod taką nazwą hosta:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Usługi raportowe często publikują zamiast tego rekord wieloznaczny (`*._report._dmarc.reports.example.net`). Jeden taki rekord obejmuje wszystkie domeny klientów, więc nie trzeba niczego konfigurować dla każdej z nich.

## Przejście z p=none na reject bez utraty poczty

Nie przechodź od razu na reject. Idź krok po kroku:

1. **Zacznij od obserwacji.** Opublikuj rekord DMARC pod `_dmarc` z `p=none` i działającym adresem `rua`. Zaczniesz dostawać raporty, a w dostarczaniu nic się nie zmieni.
2. **Napraw nadawców.** Czytaj raporty. Znajdź każdą prawdziwą usługę, która wysyła pocztę w imieniu twojej domeny i nie przechodzi kontroli, a potem popraw jej konfigurację.
3. **Przejdź na quarantine.** Zmień politykę na `p=quarantine`, gdy wszyscy prawdziwi nadawcy stale przechodzą kontrole. Sprawdzaj foldery spamu, żeby upewnić się, że nie trafia tam prawdziwa poczta.
4. **Przejdź na reject.** Zmień politykę na `p=reject`. Fałszywa poczta w twoim imieniu jest teraz blokowana, zanim do kogokolwiek dotrze.

To może potrwać. Standard mówi, że doprowadzenie wszystkich nadawców do zaliczania kontroli może zająć wiele miesięcy, zależnie od tego, jak często wysyłasz. Łatwo pominąć narzędzia do fakturowania, systemy obsługi klienta i platformy marketingowe, więc stale przeglądaj raporty.

**Jeśli twoi użytkownicy piszą na listy dyskusyjne**, działaj wolniej. Standard sugeruje co najmniej miesiąc na `p=none`, a potem tyle samo na quarantine. Porównaj wyniki, zanim przejdziesz na reject. Listy dyskusyjne często zmieniają temat, dodają stopki albo ponownie wysyłają wiadomości. Te zmiany psują SPF, a czasem też DKIM. Porównanie raportów z kilku tygodni pokazuje te problemy, zanim reject zacznie blokować pocztę.

**W ostatnim kroku użyj trybu testowego.** Z `t=y` możesz opublikować `p=reject`, a odbiorcy nadal będą stosować quarantine. Widzisz, jak odbiorcy reagują na reject, ale poczta, która nie przechodzi kontroli, nadal trafia do spamu, zamiast wracać jako odbicie.

**Uwaga o ścisłym SPF.** Jeśli twój rekord SPF kończy się na `-all`, niektórzy odbiorcy odrzucają pocztę już przy kontroli SPF, zanim zadziała DMARC. Takie e-maile nigdy nie docierają do kontroli DMARC. Nie pojawiają się też w twoich codziennych raportach.

## Typowe błędy w rekordzie DMARC

### Dwa rekordy DMARC

Zdarza się to często, gdy ktoś dodaje drugi rekord TXT zamiast edytować pierwszy. Odbiorcy widzą oba i odrzucają oba, tak jak mówi RFC 9989. Twoja domena działa wtedy tak, jakby w ogóle nie miała rekordu DMARC.

**Rozwiązanie:** sprawdź DNS i połącz wszystkie tagi w jeden rekord TXT.

### Rekord jest w domenie głównej, a nie pod _dmarc

Jeśli jako nazwę hosta wpiszesz `example.com`, rekord powstanie w domenie głównej, a nie pod `_dmarc.example.com`. Serwery pocztowe szukają DMARC tylko pod nazwą `_dmarc`, więc nigdy go nie znajdą.

**Rozwiązanie:** ustaw nazwę hosta na `_dmarc`.

### v=DMARC1 nie jest na początku albo ma złą wielkość liter

Wpisanie `v=dmarc1` albo rozpoczęcie od `p=none; v=DMARC1` psuje rekord. Odbiorcy go ignorują.

**Rozwiązanie:** umieść `v=DMARC1` na samym początku rekordu, a po nim średnik.

### Adresy raportów bez mailto:

Wpisanie `rua=dmarc@example.com` zamiast `rua=mailto:dmarc@example.com` psuje format adresu. Odbiorcy nie mogą użyć samego adresu, więc raporty nie przychodzą.

**Rozwiązanie:** zaczynaj każdy adres w `rua` i `ruf` od `mailto:`.

### Raporty wysyłane do innej domeny bez jej zgody

Jeśli wysyłasz raporty do domeny dostawcy, a ta domena nie opublikowała rekordu zgody, nie dostaniesz raportów.

**Rozwiązanie:** upewnij się, że każdy zewnętrzny adres raportów ma odpowiedni rekord `_report._dmarc`, jak opisano wyżej.

### Reject tylko z SPF

Przekazywanie zmienia adres IP, z którego wysyłany jest e-mail, więc przekazana poczta nie przechodzi SPF. Bez DKIM prawdziwa przekazana poczta nie przechodzi DMARC i przy polityce reject wraca jako odbicie.

**Rozwiązanie:** skonfiguruj podpisywanie DKIM w każdej usłudze, która wysyła twoją pocztę, zanim wyjdziesz poza `p=none`.

### Wycofane tagi ze starych poradników

Wiele starszych poradników dodawało tag procentowy z wartościami typu 100 albo 20 przy częściowym wdrożeniu. Pozostawiony `pct=100` nie szkodzi, ale wdrożenia procentowe nie są już częścią standardu.

**Rozwiązanie:** usuń stare tagi procentowe. Użyj `t=y`, jeśli potrzebujesz łagodniejszej polityki na czas zmian.

## Najczęściej zadawane pytania

**Czy naprawdę potrzebuję rekordu DMARC?**
Tak, jeśli wysyłasz pocztę na prywatne konta Gmail lub Outlook. Google i Microsoft wymagają od nadawców, którzy wysyłają 5000 lub więcej maili dziennie, opublikowania rekordu DMARC i zgodności domeny From. Mniejsi nadawcy też powinni go mieć. Rekord `p=none` z `rua` nic nie kosztuje, a raporty pokazują, kto wysyła pocztę w twoim imieniu.

**Jak sprawdzić rekord DMARC?**
Uruchom w terminalu `dig TXT _dmarc.yourdomain.com +short` albo w Windows `nslookup -type=TXT _dmarc.yourdomain.com`. Wynikiem powinien być twój rekord zaczynający się od `v=DMARC1`. Możesz też wysłać testowy e-mail na konto Gmail, otworzyć go i wybrać „Pokaż oryginał”. Zobaczysz tam, czy DMARC przeszedł.

**Co oznacza DMARC fail?**
Oznacza, że e-mail nie przeszedł żadnej z dwóch kontroli. Ani SPF, ani DKIM nie przeszedł dla domeny zgodnej z widoczną domeną From. Odbiorcy stosują wtedy twoją politykę. Niektórzy odsyłają jasny komunikat o odrzuceniu, na przykład `550 5.7.1 Email rejected per DMARC policy for example.com`. Przyczynę znajdziesz, [czytając komunikat o odbiciu](/blog/550-5-7-1-error). Gmail używa kodu błędu `4.7.31`, gdy brakuje rekordu DMARC, i `4.7.32`, gdy domena From nie jest zgodna.

**Czy mogę mieć więcej niż jeden rekord DMARC?**
Nie. Domena może mieć tylko jeden rekord DMARC. RFC 9989 mówi, że jeśli serwer odbiorczy znajdzie więcej niż jeden, musi odrzucić je wszystkie. Twoja domena zostaje wtedy bez polityki DMARC. Edytuj istniejący rekord zamiast dodawać drugi.

**Czy DMARC chroni przed podobnymi domenami?**
Nie. DMARC chroni tylko dokładnie tę domenę, która jest w twoim DNS. Nie powstrzyma nikogo przed zarejestrowaniem podobnie wyglądającej domeny, na przykład z dwiema zamienionymi literami albo z inną końcówką, taką jak .net. Nie powstrzyma też fałszywej nazwy wyświetlanej nadawcy. Przed podobnymi domenami chronią inne metody, na przykład śledzenie nowych rejestracji domen, które kopiują twoją nazwę.

Rekord DMARC dowodzi, że twoja poczta naprawdę pochodzi od ciebie. Nie pomoże jednak, gdy wysyłasz na adresy, które już nie istnieją. Przed kolejną wysyłką przepuść listę przez [Giggal.ai](/email-list-cleaning) (po angielsku), aby usunąć nieprawidłowe adresy i utrzymać niski współczynnik odbić.
