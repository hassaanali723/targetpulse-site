---
title: "SPF, DKIM i DMARC: wyjaśnienie"
seoTitle: "SPF, DKIM i DMARC: co to jest i jak działają razem (2026)"
description: "SPF sprawdza serwer, DKIM podpis, a DMARC, czy jedno z nich pasuje do domeny w polu From. Jakie rekordy opublikować, typowe błędy i co zmieniło się w 2026 roku."
slug: spf-dkim-dmarc-wyjasnienie
date: 2026-10-22
updated: 2026-10-22
keyword: spf dkim dmarc co to jest
image: /blog/covers/pl/spf-dkim-dmarc-wyjasnienie.webp
imageAlt: Ciemnoniebieski baner z napisem SPF, DKIM, DMARC i trzema kolumnami z technicznym opisem każdego rekordu
cta: Popraw uwierzytelnianie, a potem wyczyść listę
---

SPF, DKIM i DMARC to trzy rekordy DNS. Każdy z nich odpowiada na inne pytanie o wiadomość e-mail. SPF (Sender Policy Framework) wymienia serwery, które mogą wysyłać pocztę w imieniu twojej domeny. DKIM (DomainKeys Identified Mail) dodaje do każdej wiadomości podpis, dzięki któremu odbiorca wie, że nic nie zmieniono po wysłaniu. DMARC (Domain-based Message Authentication, Reporting and Conformance) sprawdza, czy co najmniej jeden z tych dwóch mechanizmów pasuje do domeny w adresie From. Mówi też serwerowi odbiorcy, co zrobić, gdy żaden nie pasuje. Od 2024 roku te rekordy nie są już opcjonalne. Gmail i Outlook.com odrzucają dziś dużo poczty, która nie przechodzi tych kontroli, zamiast tylko przenosić ją do spamu.

| Rekord | Co sprawdza | Gdzie się znajduje |
| --- | --- | --- |
| SPF | Które serwery mogą wysyłać pocztę w imieniu domeny | Rekord TXT w twojej domenie |
| DKIM | Podpis cyfrowy każdej wiadomości | Rekord TXT pod adresem selector._domainkey.twojadomena |
| DMARC | Czy SPF lub DKIM pasuje do domeny From i co zrobić, jeśli nie | Rekord TXT pod adresem _dmarc.twojadomena |

## Dlaczego nie można ich już pominąć

Od 1 lutego 2024 roku Google wprowadził obowiązkowe zasady dla wszystkich, którzy wysyłają pocztę na prywatne konta Gmail. Zgodnie z tymi podstawowymi wymaganiami każdy nadawca musi skonfigurować SPF lub DKIM. Musi też mieć prawidłowy DNS prosty i odwrotny ze zgodnymi rekordami PTR dla adresów IP wysyłki, szyfrować transmisję przez TLS i przestrzegać specyfikacji RFC 5322. Twój wskaźnik spamu w Google Postmaster Tools musi być niższy niż 0,3%, a Google zaleca utrzymywać go poniżej 0,1%. Google ostrzega, że nieuwierzytelniona poczta może trafić do spamu albo zostać odrzucona z kodem błędu 5.7.26.

Jeśli wysyłasz 5000 lub więcej wiadomości dziennie na prywatne adresy Gmail, Google uznaje cię za nadawcę masowego i zasady stają się surowsze. Nadawca masowy nie może wybrać między SPF a DKIM. Musi skonfigurować oba protokoły. Musi też opublikować rekord DMARC, zapewnić wyrównanie (alignment) domeny w widocznym nagłówku From z SPF lub DKIM i dodać do wiadomości marketingowych działający link do wypisania się jednym kliknięciem. Google liczy próg 5000 wiadomości łącznie dla domeny głównej i wszystkich jej subdomen w ciągu 24 godzin. Gdy domena raz przekroczy ten próg, Google uznaje status nadawcy masowego za stały. Od listopada 2025 roku Gmail stopniowo zaostrza egzekwowanie zasad wobec niezgodnego ruchu. Stosuje tymczasowe opóźnienia dostarczenia i trwałe odrzucenia. Te wytyczne dotyczą prywatnych kont Gmail, a nie firmowych skrzynek Google Workspace.

Microsoft wprowadził własne wymagania dotyczące uwierzytelniania 5 maja 2025 roku. Dotyczą one nadawców, którzy wysyłają 5000 lub więcej wiadomości dziennie na konsumenckie konta Outlook.com, Hotmail i Live. Nadawcy powyżej tego progu potrzebują pozytywnej oceny SPF, prawidłowego podpisu DKIM i opublikowanego rekordu DMARC z polityką p=none lub surowszą, wyrównanego z SPF lub DKIM. Jeśli nie spełniasz tych wymagań, Microsoft blokuje twoje wiadomości z kodem odbicia 550 5.7.515 Access denied, sending domain does not meet the required authentication level. Yahoo wprowadził podobne zasady dla nadawców masowych w 2024 roku.

| Kod | Co nie przeszło |
| --- | --- |
| 4.7.27 i 5.7.27 | SPF nie przeszedł |
| 4.7.30 i 5.7.30 | DKIM nie przeszedł |
| 4.7.31 | Brak rekordu DMARC lub brak polityki |
| 4.7.32 | Domena From niewyrównana z SPF ani DKIM |
| 4.7.23 i 5.7.25 | Problemy z rekordem PTR |

Google używa kodów 4.x dla tymczasowego ograniczania tempa, a kodów 5.x dla trwałych blokad dostarczenia. Gdy twoje kampanie dają odbicia, nie zgaduj przyczyny na podstawie panelu marketingowego. Sprawdź surowe nagłówki odrzucenia z serwera, jak opisujemy w poradniku o [czytaniu komunikatów o odbiciach](/blog/550-5-7-1-error).

## SPF: które serwery mogą wysyłać w imieniu twojej domeny

Sender Policy Framework, opisany w standardzie RFC 7208, weryfikuje nadawcę kopertowego wiadomości przychodzącej. Nadawca kopertowy to adres Return-Path lub MAIL FROM, na który serwery pocztowe odsyłają odbicia. SPF może też sprawdzać nazwę serwera podaną na początku połączenia w poleceniu HELO lub EHLO. SPF sprawdza tylko nadawcę kopertowego i pomija widoczny adres From, który ludzie widzą w skrzynce. Dlatego sam SPF nie powstrzyma atakującego przed podszywaniem się pod twoją markę.

[Rekord SPF](/glossary/spf) to w DNS jeden rekord TXT. Mówi serwerom odbiorczym, które adresy IP, serwery MX i zewnętrzne platformy mogą wysyłać pocztę w imieniu twojej domeny. Typowy rekord wygląda tak:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Każdy rekord zaczyna się od `v=spf1`. Wpis `include:_spf.google.com` każe serwerom odbiorczym pobrać rekord SPF Google i dopuścić adresy IP, które się w nim znajdują. Drugi wpis include daje uprawnienia do wysyłki serwerom twojej platformy marketingowej lub usługi poczty transakcyjnej.

Dyrektywa na końcu mówi odbiorcom, jak traktować nadawców spoza listy. Kwalifikator softfail, zapisany jako `~all`, oznacza, że serwery spoza listy prawdopodobnie nie mają uprawnień. Sugeruje jednak odbiorcom, by przyjęli wiadomość i poddali ją filtrowaniu antyspamowemu. Kwalifikator fail, zapisany jako `-all`, oznacza serwery spoza listy jako twardy błąd, a niektórzy odbiorcy od razu odrzucają taką pocztę. Nadawcy, którzy porządkują złożoną konfigurację, często zaczynają od `~all`, żeby przypadkiem nie stracić prawidłowej poczty firmowej.

RFC 7208 ustala dwa ścisłe limity, których nie wolno przekroczyć. Po pierwsze, domena może mieć tylko jeden rekord SPF. Opublikowanie dwóch rekordów daje błąd permerror, który unieważnia SPF dla całej twojej poczty wychodzącej. Po drugie, SPF pozwala na najwyżej 10 zapytań DNS łącznie dla mechanizmów `include`, `a`, `mx`, `ptr`, `exists` i `redirect`. Jeśli odczytanie twojego rekordu wymaga jedenastego zapytania, serwery odbiorcze zwracają permerror. Przekazywanie dalej też psuje SPF. Gdy odbiorca przekaże twoją wiadomość, adres IP serwera przekazującego nie będzie pasował do twojego rekordu i SPF nie przejdzie.

## DKIM: podpis, który dowodzi, że wiadomości nie zmieniono

DKIM, opisany w RFC 6376, działa na samej wiadomości, a nie na serwerze. Gdy twój serwer przygotowuje wiadomość do wysyłki, tworzy kryptograficzny skrót wybranych nagłówków i treści. Podpisuje ten skrót kluczem prywatnym i zapisuje wynik w nagłówku `DKIM-Signature`. Nagłówek zawiera dwie główne wartości: domenę podpisującą w tagu `d=` i selektor w tagu `s=`. DKIM mówi tylko, czy podpis jest prawidłowy. Decyzja, co zrobić, gdy nie jest, należy do DMARC.

Gdy wiadomość dociera, odbiorca odczytuje z nagłówka selektor i domenę, pobiera z DNS klucz publiczny spod adresu `s._domainkey.d` i sprawdza podpis. DKIM podpisuje nagłówki i treść, ale nie szyfruje samej wiadomości. Treść jest przesyłana jako czytelny tekst, a podpis dowodzi, że nikt po drodze nie zmienił tematu, danych nadawcy ani treści.

Zwykłe przekazywanie poczty zachowuje nagłówki i treść, więc prawidłowy podpis DKIM zwykle przetrwa przekazanie. Dlatego przy przekazywanej poczcie DKIM jest bardziej niezawodny niż SPF. Listy dyskusyjne, które dodają stopkę lub oznaczenie w temacie, mogą jednak zepsuć podpis. Gmail wymaga kluczy o długości co najmniej 1024 bitów i zaleca 2048.

Rekord klucza publicznego DKIM w DNS ma taką postać:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

Tag `v=DKIM1` określa wersję protokołu, `k=rsa` wskazuje algorytm klucza, a `p=` zawiera klucz publiczny zakodowany w base64. Jeśli prowadzisz własny serwer pocztowy, możesz utworzyć parę kluczy w naszym [generatorze DKIM](/dkim-generator).

Częsta pułapka pojawia się, gdy nadawcy polegają na domyślnym podpisie platformy. Wiele platform mailingowych domyślnie podpisuje pocztę własną, wspólną domeną (`d=shared-esp.example`). Podpis przechodzi, ale domena podpisująca nie pasuje do twojej widocznej domeny From, więc wyrównanie DMARC nie przechodzi. W ustawieniach platformy trzeba skonfigurować własny DKIM, żeby podpis zawierał twoją domenę w tagu `d=`.

## DMARC: kontrola, która łączy oba mechanizmy z adresem From

Domain-based Message Authentication, Reporting, and Conformance wiąże kontrolę koperty i podpisy kryptograficzne z widocznym adresem From, który czytają ludzie. Wyrównanie oznacza, że domena, która przeszła SPF lub DKIM, jest tą samą domeną co w linii From. DMARC przechodzi, gdy SPF lub DKIM przechodzi uwierzytelnianie ORAZ jest wyrównany z domeną w nagłówku From. Wiadomość nie musi mieć wyrównanych obu mechanizmów jednocześnie. Google zaleca jednak wyrównanie obu i zaznacza, że w przyszłości może to być wymagane.

Załóżmy, że twoja firma wysyła cotygodniowy newsletter. Wiadomość pokazuje `From: news@example.com`. Do obsługi odbić twoja usługa pocztowa używa własnego adresu kopertowego i ustawia Return-Path na `bounce-123@bounces.esp-mail.example`. Usługa podpisuje też wiadomość własnym DKIM z `d=example.com`.

Gdy serwer odbiorczy przetwarza tę wiadomość:
1. SPF sprawdza domenę kopertową `bounces.esp-mail.example` i przechodzi, ale `esp-mail.example` nie pasuje do `example.com`, więc SPF nie spełnia wyrównania DMARC.
2. DKIM sprawdza podpis dla `example.com`, weryfikuje skrót kryptograficzny i pasuje do domeny `example.com` w nagłówku From, więc DKIM przechodzi i spełnia wyrównanie DMARC.
3. DKIM przeszedł i jest wyrównany, więc wiadomość przechodzi DMARC.

DMARC ma dwa tryby wyrównania dla SPF i DKIM. Wyrównanie łagodne (relaxed) to ustawienie domyślne. Pozwala, by subdomeny domeny organizacji były wyrównane z domeną główną. Na przykład poczta wysłana z `news.example.com` jest wyrównana z domeną SPF lub DKIM `example.com`. Wyrównanie ścisłe (strict), ustawiane przez `aspf=s` lub `adkim=s`, wymaga dokładnej zgodności domen i nie dopuszcza różnic w subdomenach.

Twój rekord DMARC może zawierać jedną z trzech polityk:
- `p=none`: włącza tryb monitorowania. Odbiorcy dostarczają pocztę normalnie i zbierają raporty uwierzytelniania.
- `p=quarantine`: prosi odbiorców, by pocztę, która nie przeszła DMARC, przenosili do folderu spamu.
- `p=reject`: prosi odbiorców, by odrzucali pocztę, która nie przeszła DMARC.

Tag rua mówi odbiorcom, dokąd wysyłać raporty zbiorcze. Są to zwykle codzienne pliki XML, które pokazują, z jakich adresów IP wysłano pocztę z użyciem twojej domeny. Typowy rekord startowy opublikowany pod adresem `_dmarc.example.com` wygląda tak:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

W maju 2026 roku Internet Engineering Task Force opublikowała RFC 9989 na ścieżce standardów (Standards Track), razem z RFC 9990 o raportach zbiorczych i RFC 9991 o raportach o błędach. Nowe standardy oficjalnie zastępują RFC 7489 i RFC 9091. Istniejące rekordy zaczynające się od `v=DMARC1` nadal działają, ale zaktualizowana specyfikacja zmienia kilka tagów. Tag procentowy (`pct`) i tag formatu raportu (`rf`) zostały wycofane i nie są już częścią standardu, a tag interwału raportów (`ri`) ma status historyczny. Nadawcy, którzy testują wdrożenie polityki, używają teraz nowego tagu `t` dla trybu testowego. Administratorzy mogą też określić politykę dla nieistniejących subdomen tagiem `np`. Jeśli twój obecny rekord DNS zawiera tag procentowy, zaplanuj jego usunięcie. Nowy rekord zbudujesz albo stare tagi usuniesz w naszym [generatorze DMARC](/dmarc-generator).

## Jak serwer odbiorczy sprawdza wiadomość

Gdy e-mail dociera do bramki odbiorczej, serwer wykonuje kontrole uwierzytelniania w określonej kolejności:

1. Serwer przyjmuje połączenie sieciowe, zapisuje adres IP nadawcy i ocenia powitanie HELO lub EHLO.
2. Serwer odczytuje domenę z kopertowego adresu Return-Path i pyta DNS o uprawnienia SPF dla adresu IP nadawcy.
3. Serwer znajduje nagłówek `DKIM-Signature`, pobiera z DNS klucz publiczny spod adresu `selector._domainkey.domain` i ponownie oblicza skróty kryptograficzne nagłówków i treści.
4. Serwer sprawdza widoczny nagłówek From i pyta DNS o rekord polityki DMARC pod adresem `_dmarc.domain`.
5. Serwer ocenia wyrównanie domen. Sprawdza, czy uwierzytelniona domena SPF lub uwierzytelniona domena DKIM pasuje do widocznej domeny From.
6. Serwer stosuje opublikowaną politykę DMARC (none, quarantine lub reject) zależnie od wyniku wyrównania.
7. Jeśli poprosisz o raporty tagiem rua, serwer doda wynik do kolejnego raportu zbiorczego dla ciebie.

W Gmailu wszystkie trzy wyniki zobaczysz w opcji „Pokaż oryginał” przy każdej wiadomości.

## Gdzie SPF, DKIM i DMARC najczęściej zawodzą

Dwa rekordy SPF to częsty błąd przy dodawaniu nowej usługi pocztowej. Administrator postępuje zgodnie z instrukcją, dodaje `v=spf1 include:sendgrid.net ~all` i publikuje drugi rekord TXT obok istniejącego rekordu Google. RFC 7208 zabrania publikowania kilku rekordów SPF w jednej domenie. Gdy serwery odbiorcze znajdą dwa rekordy, przerywają sprawdzanie z błędem permerror i SPF nie przechodzi. Naprawisz to, łącząc wszystkich dopuszczonych dostawców w jeden ciąg: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Przekroczenie limitu 10 zapytań to kolejna przyczyna problemów z dostarczaniem, których nic nie sygnalizuje. Każdy tag `include`, `a`, `mx`, `ptr`, `exists` lub `redirect` wlicza się do tego limitu. Liczą się też wpisy include zagnieżdżone w rekordach dostawców. Jeśli twój rekord wymaga jedenastego zapytania, serwery odbiorcze automatycznie zwracają permerror. Problem rozwiążesz, usuwając rekordy starych dostawców, korzystając z narzędzi do liczenia zapytań albo zastępując wpisy include konkretnymi zakresami `ip4`. Rób to jednak tylko dla adresów IP wysyłki, które kontrolujesz i które się nie zmieniają.

Podłączenie nowej usługi do wysyłki bez dodania jej do DNS wystawia twoją pocztę wychodzącą na filtry antyspamowe. Zespoły sprzedaży lub obsługi klienta często podłączają narzędzia do umawiania spotkań, systemy helpdesk albo systemy fakturowe bez informowania osoby, która zarządza DNS. Te nowe serwery nie są w twoim rekordzie SPF i nie podpisują poczty twoimi kluczami DKIM. Ich wiadomości nie przechodzą więc uwierzytelniania i trafiają do spamu. Rozwiązaniem jest prosta zasada: każdy, kto podłącza nowe narzędzie, informuje osobę zarządzającą DNS. Do tego warto przeglądać raporty DMARC pod kątem nieznanych nadawców.

Poleganie na podpisie DKIM platformy psuje wyrównanie DMARC, mimo że podpis jest kryptograficznie poprawny. Gdy usługa pocztowa podpisuje wiadomości z `d=platform-mail.example`, a linia From pokazuje `From: support@yourcompany.example`, DKIM przechodzi kontrolę techniczną, ale nie jest wyrównany z twoją domeną. Aby to naprawić, otwórz ustawienia platformy, wygeneruj własne klucze DKIM dla swojej domeny i opublikuj rekordy selektora w panelu DNS.

Przekazywanie wiadomości regularnie psuje SPF, gdy odbiorca przekazuje pocztę służbową na prywatną skrzynkę. Serwer pośredniczący przesyła wiadomość dalej ze swojego adresu IP, który nie pasuje do twojego rekordu SPF. Nie masz wpływu na zewnętrzne ustawienia przekazywania. Jeśli jednak twoje wiadomości mają prawidłowe podpisy DKIM, przetrwają przekazanie i spełnią wymagania DMARC na kolejnych serwerach.

Wysyłanie masowych kampanii przez inną platformę z darmowym adresem From `@gmail.com` z założenia nie przejdzie DMARC. Wytyczne Google dla nadawców wprost ostrzegają, że podszywanie się pod adresy Gmail z zewnętrznych serwerów szkodzi dostarczalności. Zewnętrzne platformy nie mogą utworzyć prawidłowych podpisów ani przejść SPF dla domeny Google, więc dostawcy skrzynek odrzucają taką pocztę albo przenoszą ją do spamu. Do kontaktu z odbiorcami zawsze używaj własnej domeny.

Zostawienie DMARC na stałe z `p=none` naraża twoją domenę na podszywanie się. Polityka monitorowania spełnia minimum Gmaila i Microsoftu, ale `p=none` mówi serwerom odbiorczym, żeby nie podejmowały żadnych działań ochronnych, gdy pojawi się podrobiona poczta. Przy tym ustawieniu DMARC nie zatrzyma kogoś, kto podszywa się dokładnie pod twoją domenę. Przez kilka tygodni przeglądaj codzienne raporty zbiorcze, sprawdź, czy wszystkie prawidłowe źródła wysyłki są wyrównane, i zmień politykę na `p=quarantine`, a potem na `p=reject`.

## Lista kontrolna konfiguracji SPF, DKIM i DMARC

Przejdź przez te kroki po kolei:

1. Wypisz każdą wewnętrzną usługę, platformę marketingową, system obsługi klienta i narzędzie transakcyjne, które wysyła pocztę z użyciem twojej domeny.
2. Opublikuj jeden wspólny [rekord SPF](/glossary/spf) obejmujący dopuszczone serwery wysyłkowe i utrzymaj łączną liczbę zapytań poniżej 10. [Narzędzie do sprawdzania SPF](/spf-checker) policzy je za ciebie.
3. Włącz na każdej platformie wysyłkowej podpisywanie DKIM własną domeną i opublikuj w DNS odpowiednie rekordy selektora.
4. Upewnij się, że adresy IP wysyłki mają prawidłowy DNS prosty i pasujący [rekord PTR](/glossary/ptr-record) w odwrotnym DNS.
5. Opublikuj pierwszy [rekord DMARC](/blog/what-is-a-dmarc-record) pod `_dmarc` z `p=none` i działającą skrzynką `rua`, żeby zacząć dostawać zbiorcze raporty XML.
6. Zarejestruj domenę wysyłkową w [Google Postmaster Tools](/glossary/postmaster-tools), aby śledzić reputację domeny, błędy dostarczenia i wskaźnik zgłoszeń spamu.
7. Przez kilka tygodni przeglądaj zbiorcze raporty DMARC i sprawdź, czy każdy prawidłowy strumień wysyłki ma wyrównany SPF lub DKIM.
8. Zmień politykę DMARC z `p=none` na `p=quarantine`, oceń stabilność dostarczania, a potem przejdź na `p=reject`.
9. Wyślij wiadomość testową na prywatne konto Gmail i otwórz „Pokaż oryginał”, aby potwierdzić, że SPF, DKIM i DMARC mają status PASS.

## Najczęściej zadawane pytania

**Czy DMARC wymaga zarówno SPF, jak i DKIM?**
Nie. DMARC wymaga, by SPF lub DKIM przeszedł uwierzytelnianie i był wyrównany z domeną w widocznym nagłówku From. Oba protokoły w domenie dają lepszą odporność, gdy przekazywanie psuje SPF, a Google zaleca konfigurację obu przy dużych wolumenach. Wiadomość przejdzie jednak DMARC, jeśli tylko jeden mechanizm ma prawidłowe wyrównanie.

**Czym różni się SPF od DMARC?**
SPF pozwala konkretnym adresom IP serwerów pocztowych wysyłać pocztę w imieniu technicznego nadawcy kopertowego z nagłówka Return-Path. DMARC sprawdza widoczny adres From, który ludzie widzą w programie pocztowym. Weryfikuje, czy SPF lub DKIM jest wyrównany z tą domeną, i mówi serwerom odbiorczym, czy przyjąć, przenieść do kwarantanny, czy odrzucić wiadomości, które nie przeszły weryfikacji.

**Czy potrzebuję DMARC, jeśli wysyłam mniej niż 5000 maili dziennie?**
Gmail wymaga DMARC tylko od nadawców masowych, więc przy małym wolumenie nie zostaniesz zablokowany za jego brak. Nadal potrzebujesz jednak SPF lub DKIM. Mimo to warto opublikować rekord p=none z rua. Raporty pokażą ci, które usługi wysyłają pocztę jako twoja domena, w tym te, o których zapomniano, i każdego, kto się pod ciebie podszywa.

**Czy mogę mieć dwa rekordy SPF?**
Nie. RFC 7208 zabrania publikowania więcej niż jednego rekordu SPF w domenie. Jeśli serwery odbiorcze znajdą w DNS kilka rekordów SPF, od razu przerywają sprawdzanie z błędem permerror i uznają SPF za niezaliczony. Musisz połączyć wszystkie dopuszczone adresy IP i wpisy include zewnętrznych usług w jeden rekord zaczynający się od `v=spf1`.

**Jak najprościej wyjaśnić DMARC?**
SPF sprawdza, czy serwer, który wysyła wiadomość, może wysyłać w imieniu twojej domeny. DKIM sprawdza podpis, który pokazuje, że wiadomości nie zmieniono. DMARC to kontrola końcowa: potwierdza, że jeden z tych dwóch mechanizmów należy do tej samej domeny co adres From. Jeśli żaden nie należy, DMARC mówi serwerowi odbiorczemu, czy mimo to dostarczyć wiadomość, przenieść ją do spamu, czy ją odrzucić.

Te rekordy potwierdzają, kim jesteś, ale nie naprawiają tego, dokąd wysyłasz. Poczta wysłana na nieistniejące adresy nadal wraca. Tę stronę problemu omawia nasz poradnik o tym, [jak zmniejszyć współczynnik odbić](/blog/how-to-reduce-email-bounce-rate). Przed kolejną wysyłką możesz też sprawdzić listę w [Giggal.ai](/email-list-cleaning) (po angielsku).
