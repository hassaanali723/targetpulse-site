---
title: "Jak sprawdzić, czy domena e-mail jest na czarnej liście (i jak ją z niej usunąć)"
seoTitle: "Czarna lista email: sprawdź domenę i usuń wpis"
description: "Jak sprawdzić, czy twoja domena lub adres IP są na czarnej liście, jak czytać kody błędów SMTP, jak odpytać listy DNSBL i jak krok po kroku usunąć wpis."
slug: jak-sprawdzic-czy-domena-jest-na-czarnej-liscie
date: 2026-11-07
updated: 2026-11-07
keyword: czarna lista email
image: /blog/covers/pl/jak-sprawdzic-czy-domena-jest-na-czarnej-liscie.webp
imageAlt: "Ciemnoniebieski techniczny baner o sprawdzaniu czarnych list e-mail, zapytaniach DNSBL i usuwaniu wpisów"
cta: "Zweryfikuj listę przed wysyłką i nie trafiaj na czarne listy"
---

Nagły spadek dostarczalności to jeden z najbardziej uciążliwych problemów w pracy z e-mailem. Jednego dnia twoje kampanie mają zwykłe wyniki. Następnego dnia wskaźnik otwarć spada prawie do zera, odpowiedzi znikają, a kolejka poczty wychodzącej zapełnia się komunikatami o odrzuceniu:

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Gdy serwery pocztowe odbiorców odrzucają twoje wiadomości, zanim ocenią temat albo treść, twój adres IP lub domena trafiły na listę DNSBL (DNS-based Blackhole List). Potocznie mówi się na nią czarna lista e-mail, blacklista albo RBL.

Wpis na czarnej liście to nie jest tymczasowy filtr treści. To bezpośrednia blokada na poziomie sieci. Duże sieci odbiorców (w tym Google Workspace, Microsoft 365, Yahoo Mail i firmowe bramki pocztowe) odpytują te bazy w czasie rzeczywistym już na początku połączenia SMTP. Jeśli twój identyfikator jest na liście, połączenie zostaje od razu przerwane.

Z tego tekstu dowiesz się, jak działają czarne listy e-mail i jak sprawdzić, czy twoja domena lub adres IP są na głównych listach antyspamowych. Dowiesz się też, jak złożyć skuteczny wniosek o usunięcie z listy i jak chronić reputację nadawcy przed kolejnymi wpisami.

---

## Blokada z czarnej listy a filtr spamu: jaka jest różnica?

Zanim zaczniesz szukać przyczyny, ustal, czy masz do czynienia z wpisem na czarnej liście, czy z wiadomościami, które trafiają do folderu spam.

| Cecha | Czarna lista DNSBL / RBL | Filtr spamu dostawcy poczty |
| --- | --- | --- |
| **Moment wykrycia** | Początek połączenia SMTP (faza połączenia) | Analiza po dostarczeniu (sortowanie w skrzynce) |
| **Odpowiedź serwera** | Twarde odbicie (kod `550` lub `554`) albo zerwane połączenie | Przyjęcie z kodem `250 OK` |
| **Co widzi odbiorca** | Odbiorca nigdy nie dostaje e-maila | E-mail trafia do folderu Spam odbiorcy |
| **Zasięg** | Wszystkie serwery pocztowe, które korzystają z danej listy DNSBL | Jeden dostawca poczty (na przykład tylko Gmail) |
| **Główna przyczyna** | Trafienia w pułapki spamowe, wysoki współczynnik odbić, otwarte przekaźniki (open relay) | Niskie zaangażowanie odbiorców, treść podobna do spamu, brak SPF/DKIM |
| **Rozwiązanie** | Formalny wniosek o usunięcie do operatora listy | Rozgrzewanie domeny, czyszczenie listy, odbudowa reputacji |

Jeśli twoje wiadomości trafiają do folderu Spam, ale w logach serwera pocztowego mają status `250 OK`, twoja domena nie jest na czarnej liście DNSBL. Dostawca poczty odbiorcy sortuje wtedy wiadomość na podstawie algorytmicznej oceny reputacji.

Jeśli twój serwer pocztowy dostaje twarde odrzucenia z nazwami konkretnych czarnych list, masz aktywny wpis DNSBL. Trzeba od razu usunąć jego przyczynę.

---

## Jak sprawdzić, czy twoja domena lub adres IP są na czarnej liście

Sprawdzenie polega na odpytaniu serwerów DNSBL, czy dla twojego adresu IP lub domeny istnieje pozytywny rekord. Możesz to zrobić za pomocą automatycznych skanerów wielu list RBL albo ręcznie, zapytaniami DNS z terminala.

### 1. Automatyczne skanery wielu list RBL

Usługi, które sprawdzają wiele list RBL, odpytują dziesiątki publicznych czarnych list jednocześnie, w kilka sekund. Najbardziej niezawodne darmowe skanery to:

- **MXToolbox Blacklist Check**: skanuje ponad 100 list DNSBL dla twojego adresu IP lub nazwy domeny.
- **DNSChecker Email Blacklist**: szybkie, równoczesne sprawdzenie ponad 50 baz DNSBL i SURBL.
- **MultiRBL (valli.org)**: lekka wyszukiwarka dla programistów, która odpytuje ponad 200 czarnych list.

Aby uruchomić skan, wpisz adres IP, z którego wysyłasz (adres IP serwera pocztowego, a nie biurowej sieci Wi-Fi), albo domenę, z której wysyłasz (np. `company.com`).

```youtube
wOIJHhHZt04
Obejrzyj: [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04) z kanału InboxAlly: Mastering Email Deliverability
```

### 2. Ręczne sprawdzanie DNSBL z wiersza poleceń (dla administratorów)

Automatyczne narzędzia w przeglądarce są wygodne. Ręczne zapytania przez `dig` lub `nslookup` dają jednak surowy wynik bez pamięci podręcznej, prosto z autorytatywnych serwerów nazw operatora czarnej listy.

Czarne listy DNS używają odwróconego zapisu adresu IP zgodnie z [IETF RFC 5782](https://datatracker.ietf.org/doc/html/rfc5782). Aby ręcznie odpytać czarną listę:

1. Odwróć kolejność czterech oktetów adresu IPv4, z którego wysyłasz. Jeśli na przykład adres IP twojego serwera pocztowego to `198.51.100.24`, odwrócony ciąg to `24.100.51.198`.
2. Dodaj na końcu domenę główną listy DNSBL (np. `zen.spamhaus.org`).
3. Wykonaj standardowe zapytanie DNS o rekord `A` za pomocą `dig`:

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### Jak odczytać kod odpowiedzi

- **Brak odpowiedzi / `NXDOMAIN`**: twój adres IP jest czysty. Czarna lista nie ma negatywnego wpisu dla twojego adresu.
- **Odpowiedź `127.0.0.X`**: twój adres IP jest na liście. Ostatni oktet wskazuje kategorię wpisu:

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

Aby sprawdzić, czy na liście domen (DBL) jest twoja nazwa domeny, a nie adres IP, odpytaj bezpośrednio nazwę domeny:

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

Odpowiedź `127.0.1.2` oznacza, że sama nazwa domeny jest oznaczona jako domena spamowa. Dostawcy poczty odrzucają wtedy wiadomości nawet po zmianie adresu IP, z którego wysyłasz.

---

## 5 czarnych list, które naprawdę mają znaczenie

W internecie są setki publicznych i prywatnych czarnych list e-mail. Tylko kilka z nich naprawdę decyduje o tym, czy twoje e-maile trafią do skrzynek odbiorców.

Duzi dostawcy poczty ignorują wiele małych list, na przykład amatorskie listy prowadzone przez pojedyncze osoby albo usługi, które żądają opłat za usunięcie wpisu. Wpis na mało znanej liście, której nikt nie używa, nie zaszkodzi twojej dostarczalności.

Skup się na głównych listach, które mają znaczenie:

### 1. Spamhaus (ZEN: SBL, XBL, CSS, DBL)

Spamhaus to najbardziej wpływowa organizacja antyspamowa na świecie. Jej dane chronią ponad 3 miliardy skrzynek na całym świecie, w tym duże sieci telekomunikacyjne, bramki pocztowe firm z listy Fortune 500 i dostawców poczty dla konsumentów.

- **SBL (Spamhaus Block List)**: obejmuje potwierdzone źródła spamu, niepotwierdzone listy mailingowe i nadawców, którzy trafiają w pułapki spamowe.
- **XBL (Exploit Block List)**: obejmuje serwery zainfekowane exploitami, botnetami i złośliwym oprogramowaniem.
- **DBL (Domain Block List)**: oznacza domeny znalezione w wiadomościach spamowych, w phishingu albo w usługach hostingu typu „bulletproof”.
- **ZEN**: połączona strefa, która zawiera wpisy SBL, SBLCSS, XBL i PBL.

Wpis w Spamhaus wymaga natychmiastowej reakcji. Zablokuje dostarczanie poczty na dużych firmowych serwerach pocztowych i u dostawców internetu na całym świecie.

### 2. Barracuda (BRBL)

Barracuda Reputation Block List (`b.barracudacentral.org`) prowadzi firma Barracuda Networks. Lista powstaje z danych o ruchu, które zbierają tysiące urządzeń Barracuda Email Security Gateway działających w sieciach firm.

Jeśli wysyłasz cold maile B2B albo e-maile marketingowe do dużych firm, wpis w Barracuda od razu spowoduje odbicia u firmowych odbiorców. Dotyczy to odbiorców, którzy używają lokalnych lub chmurowych filtrów Barracuda.

### 3. SpamCop (SCBL)

SpamCop prowadzi jedną z najstarszych czarnych list opartych na zgłoszeniach (`bl.spamcop.net`). Nadawcy trafiają na nią automatycznie, gdy odbiorcy oznaczają e-maile jako spam albo gdy automatyczne pułapki dostają niechciane wiadomości.

W przeciwieństwie do Spamhaus wpisy w SpamCop są dynamiczne i krótkotrwałe. Zwykle wygasają automatycznie w ciągu 24 do 48 godzin, gdy liczba skarg spadnie poniżej progu.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement to komercyjna baza reputacji dla dużych firm. Często używają jej firmowe filtry poczty o dużym wolumenie i oprogramowanie zabezpieczające. Jest znana z szybkiego wykrywania snowshoe spamu (rozsyłania spamu z dużych bloków adresów IP) i ze śledzenia reputacji adresów URL na poziomie domen.

### 5. Dlaczego możesz zignorować UCEPROTECT Level 3

Gdy nadawcy używają narzędzi, które sprawdzają wiele list RBL, często wpadają w panikę na widok czerwonego wpisu na **UCEPROTECT Level 3**.

UCEPROTECT Level 3 blokuje całe podsieci i numery systemów autonomicznych (ASN), a nie pojedyncze adresy IP nadawców. Jeśli niezwiązany z tobą klient twojego dostawcy hostingu w chmurze (np. DigitalOcean, AWS, Linode lub Hetzner) wysyła spam, UCEPROTECT oznacza tysiące sąsiednich, czystych adresów IP w całej sieci tego dostawcy.

Z powodu tak szerokich szkód ubocznych duzi dostawcy poczty (w tym Google, Microsoft i Yahoo) nie używają UCEPROTECT Level 3 przy decyzjach o dostarczeniu. Specjaliści od dostarczalności i administratorzy poczty zwykle ignorują wpisy na Level 3. Nie płać za usunięcie z listy usługom, które żądają za to pieniędzy.

---

## Usuwanie z czarnej listy krok po kroku

Jeśli test potwierdzi aktywny wpis na jednej z głównych list, wykonaj ten proces naprawczy w czterech krokach.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

### Krok 1: Natychmiast zatrzymaj wysyłkę

Nie składaj wniosku o usunięcie z listy, dopóki twój serwer pocztowy nadal wysyła wiadomości. Jeśli poprosisz o usunięcie, a serwer wciąż trafia w pułapki spamowe albo powoduje odbicia, wniosek zostanie odrzucony. Twój adres IP zostanie wtedy oznaczony jako adres, który nie współpracuje i powtarza naruszenia.

- Wstrzymaj automatyczne sekwencje i kampanie cold mailingowe.
- Sprawdź kolejkę serwera pocztowego (`mailq` w Postfix). Szukaj w niej dużej liczby wiadomości spamowych z przejętych kont albo z podatnych formularzy kontaktowych.

### Krok 2: Znajdź i usuń przyczynę

Czarne listy nie dodają adresów IP bez powodu. Przejrzyj logi i infrastrukturę, aby ustalić, która z tych czterech częstych przyczyn spowodowała wpis:

1. **Czyste pułapki spamowe (pristine spam traps)**: twoja poczta trafiła na adresy, które nigdy nie należały do człowieka. Takie adresy są publikowane wyłącznie po to, aby wyłapywać boty, które zbierają adresy ze stron. Jeśli twoja lista leadów była kupiona albo zebrana ze stron kontaktowych bez weryfikacji, wysyłka najpewniej trafiła w taką pułapkę.
2. **Wysoki współczynnik odbić**: współczynnik odbić twoich wysyłek przekroczył próg od 2,0% do 5,0%. To wskazuje na nieaktualne, niezweryfikowane albo zmyślone kontakty.
3. **Przejęte dane logowania**: ktoś włamał się na konto użytkownika na twoim serwerze i użył go do wysyłki phishingu albo spamu.
4. **Brak uwierzytelnienia**: twoja domena nie ma zgodnych rekordów SPF i DKIM, więc osoby trzecie mogą podszywać się pod twoją domenę.

### Krok 3: Złóż wnioski o usunięcie u głównych operatorów

Gdy problem jest rozwiązany, a logi są czyste, złóż formalne wnioski o usunięcie bezpośrednio przez oficjalne strony:

#### Usunięcie ze Spamhaus
1. Wejdź na oficjalną stronę [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/).
2. Wpisz adres IP lub domenę, które są na liście.
3. Sprawdź dokładny kod i opis wpisu podany przez Spamhaus.
4. Kliknij przycisk **Request Removal** i wypełnij formularz weryfikacyjny.
5. Podaj działający adres e-mail administratora w twojej domenie. Pierwsze usunięcie dla czystych nadawców jest zwykle realizowane w ciągu 1 do 4 godzin.

#### Usunięcie z Barracuda
1. Wejdź na stronę [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups).
2. Wpisz adres IP swojego serwera pocztowego.
3. Przejdź do formularza **Barracuda Removal Request**.
4. Podaj dane kontaktowe i napisz jasne, rzeczowe wyjaśnienie podjętych działań naprawczych. Zwykle trwa to od 12 do 24 godzin.

#### Usunięcie ze SpamCop
- W przypadku [SpamCop](https://www.spamcop.net/bl.shtml) ręczne zgłoszenia rzadko są potrzebne. Jeśli wstrzymasz problematyczną wysyłkę, SpamCop automatycznie usuwa wpis po 24 do 48 godzinach od ostatniej zgłoszonej skargi.

### Co napisać we wniosku o usunięcie z listy (a czego NIE pisać)

Wnioski o usunięcie sprawdzają doświadczeni inżynierowie sieci. Od tego, jak sformułujesz wniosek, zależy, czy zostanie zaakceptowany:

> **Nie pisz:**  
> *„Jesteśmy legalną firmą, a to jest pilna pomyłka. Przez was tracimy pieniądze. Natychmiast usuńcie nasz adres IP.”*  
> (Takie zdanie nie daje żadnego technicznego zapewnienia i trafia na koniec kolejki.)

> **Napisz:**  
> *„Ustaliliśmy, że 24 października wgrano niezweryfikowaną listę marketingową, która spowodowała gwałtowny wzrost odbić i skarg. Wysyłka została natychmiast wstrzymana. Usunęliśmy wszystkie niezweryfikowane rekordy i wdrożyliśmy automatyczne czyszczenie listy przed wysyłką, które usuwa adresy nieprawidłowe i jednorazowe. Sprawdziliśmy też zgodność SPF i DKIM. Nasza kolejka wychodząca jest czysta.”*

---

## Jak trwale uniknąć czarnych list

Usunięcie z listy to dopiero połowa pracy. Jeśli nie zmienisz sposobu wysyłki, twoja domena w ciągu kilku dni wróci na te same czarne listy.

Ochrona reputacji nadawcy wymaga trzech stałych zabezpieczeń:

### 1. Wprowadź ścisłe uwierzytelnianie poczty

Poczta bez uwierzytelnienia ułatwia podszywanie się pod domenę. Jeśli spamer użyje twojej domeny w nagłówku `From:` w kampanii phishingowej, ucierpi reputacja twojej domeny.

- **SPF (Sender Policy Framework)**: wskaż wprost, które serwery pocztowe mogą wysyłać pocztę w imieniu twojej domeny. Sprawdź konfigurację w naszym darmowym [narzędziu do sprawdzania SPF](/spf-checker).
- **DKIM (DomainKeys Identified Mail)**: podpisuj kryptograficznie każdą wychodzącą wiadomość kluczem 2048-bitowym. Poprawne klucze DNS wygenerujesz w naszym [generatorze DKIM](/dkim-generator).
- **DMARC**: poinstruuj serwery odbiorców, aby odrzucały nieautoryzowane wiadomości, które podają się za pocztę z twojej domeny.

### 2. Monitoruj współczynnik odbić i dane telemetryczne SMR

Utrzymuj współczynnik odbić wyraźnie poniżej 2,0%. Współczynnik powyżej 3,0% wskazuje na zaniedbaną listę, a powyżej 5,0% uruchamia automatyczne wpisy na czarne listy w firmowych filtrach.

- Mierz i porównuj swoje historyczne wskaźniki dostarczania w naszym [kalkulatorze współczynnika odbić](/bounce-rate-calculator).
- Odróżniaj chwilowe problemy serwera od trwale nieprawidłowych adresów dzięki naszemu omówieniu [twardego i miękkiego odbicia](/blog/hard-bounce-vs-soft-bounce).

### 3. Czyść każdą listę leadów przed wysyłką

Ponad 85% wpisów na czarne listy e-mail wynika z trafień w czyste pułapki spamowe albo z powtarzanej wysyłki na usunięte skrzynki.

Listy zebrane ze stron, nieaktualne bazy CRM i zapisy na webinary często zawierają domeny z literówkami i tymczasowe adresy jednorazowe. Zawierają też porzucone adresy, które zamieniono w pułapki spamowe (recycled spam traps).

Zanim zaimportujesz listę kontaktów do platformy wysyłkowej albo narzędzia do cold mailingu, zweryfikuj adresy w osobnym przebiegu weryfikacji. Pojedyncze adresy sprawdzisz w naszym [darmowym weryfikatorze email](/email-checker), a domeny jednorazowe wykryjesz w naszym [narzędziu do sprawdzania jednorazowych adresów e-mail](/disposable-email-checker). Czyszczenie listy usuwa nieistniejące domeny, błędy składni, tymczasowych dostawców i znane sieci pułapek, zanim zajmie się nimi twój serwer pocztowy.

---

## Najczęstsze pytania

### Ile trwa, zanim usunięcie z czarnej listy zacznie działać?
Gdy operator zaakceptuje twój wniosek, jego autorytatywne serwery DNSBL aktualizują się prawie od razu. Serwery pocztowe odbiorców przechowują jednak rekordy DNS w lokalnej pamięci podręcznej. W zależności od ustawień TTL (Time to Live) serwera odbiorcy zwykle mija od 2 do 24 godzin, zanim normalne dostarczanie poczty wróci we wszystkich sieciach.

### Czy moja domena może trafić na czarną listę, jeśli używam znanego dostawcy, takiego jak Google Workspace albo SendGrid?
Tak. Dostawcy usług e-mail zapewniają infrastrukturę, ale nadal odpowiadasz za adresy, na które wysyłasz. Jeśli przez Google Workspace albo SendGrid wysyłasz cold maile albo niezweryfikowane listy masowe i trafiasz w pułapki spamowe, Spamhaus może dodać twoją domenę nadawcy do listy Domain Blocklist (DBL). Twoja poczta będzie wtedy odrzucana bez względu na platformę wysyłkową.

### Czy zmienić nazwę domeny, jeśli moja domena jest na czarnej liście?
Nie. Porzucenie domeny z czarnej listy i rejestracja nowej to błąd. Zupełnie nowe domeny nie mają żadnej reputacji nadawcy. Dostawcy poczty mocno ograniczają ich wysyłkę i stosują wobec nich greylisting. Szybciej i lepiej dla długoterminowej dostarczalności jest usunąć przyczynę, wyczyścić listę subskrybentów i przejść formalny proces usuwania z listy na obecnej domenie.
