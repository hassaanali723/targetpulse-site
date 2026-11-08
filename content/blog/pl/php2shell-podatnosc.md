---
title: "PHP2Shell (CVE-2026-109618 i CVE-2026-109619): czym jest ta podatność i jak załatać PHP"
seoTitle: "PHP2Shell: podatność w PHP i jak ją załatać"
description: "PHP2Shell to dwie krytyczne podatności w PHP, przez które atakujący uruchamiają kod na serwerach WWW. Sprawdź, które wersje PHP są bezpieczne i jak je załatać."
slug: php2shell-podatnosc
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell podatność
image: /blog/covers/pl/php2shell-podatnosc.webp
imageAlt: "PHP2Shell: CVE-2026-109618 i CVE-2026-109619, ocena 9,2 na 10, poprawione w PHP 8.5.12, 8.4.27, 8.3.36 i 8.2.35"
cta: Upewnij się, że twój e-mail trafi do prawdziwej skrzynki
---

PHP2Shell to nazwa dwóch krytycznych podatności w samym PHP: CVE-2026-109618 i CVE-2026-109619. Pozwalają one atakującemu uruchomić własny kod na serwerze WWW, na którym działa PHP. Atakujący nie potrzebuje do tego hasła ani konta. PHP naprawiło obie podatności 21 października 2026, a atakujący już z nich korzystają.

Jeśli przeczytasz tylko jedną linijkę, niech to będzie ta. Zaktualizuj PHP do wersji **8.5.12, 8.4.27, 8.3.36 lub 8.2.35** (albo nowszej), a potem **uruchom PHP ponownie**. Nowy pakiet nic nie zmienia, dopóki procesy PHP nie zostaną zrestartowane.

![Co zrobić w sprawie PHP2Shell w 4 krokach: znajdź każdą instalację PHP, zaktualizuj PHP do poprawionej wersji, zrestartuj PHP, a potem sprawdź, czy nie doszło do włamania](/blog/fig-pl-php2shell-what-to-do.webp)

## Czym jest PHP2Shell, w prostych słowach

PHP to język programowania, na którym działa duża część stron internetowych. WordPress, Laravel, Drupal, Magento i phpBB działają na PHP. Większość takich stron działa na serwerze, na którym PHP obsługuje każde żądanie strony.

PHP2Shell to nie błąd w WordPressie ani w twoim własnym kodzie. To błąd w PHP, czyli w silniku pod spodem. Dlatego każda strona w PHP na niezałatanym serwerze jest narażona, nawet jeśli jej własny kod jest bez zarzutu.

PHP oceniło obie podatności na 9,2 na 10 (CVSS v4.0). To poziom „krytyczny”. Nazwa PHP2Shell pochodzi od skutku ataku: powłoki (shell). Oznacza to, że atakujący może wpisywać polecenia na twoim serwerze.

## Jak działa PHP2Shell, krok po kroku

Najpierw potrzebujesz czterech faktów o tym, jak PHP obsługuje stronę internetową.

1. Serwer PHP utrzymuje kilka działających procesów roboczych PHP („workerów”). Każdy worker obsługuje jedno żądanie, potem następne i tak dalej.
2. Dla każdego żądania PHP rezerwuje pamięć na dane tego żądania. Należą do nich pola formularzy, pliki cookie, przesłane pliki i dane sesji.
3. Gdy żądanie się kończy, PHP czyści tę pamięć. Następne żądanie powinno zacząć się bez żadnych pozostałości.
4. Każde żądanie ma limit pamięci, ustawiony przez `memory_limit` w `php.ini`. Jeśli żądanie go przekroczy, PHP je przerywa.

Obie podatności PHP2Shell to błędy w krokach 2 i 3. PHP myli się co do tego, która pamięć jest prawidłowa.

### Podatność 1 (CVE-2026-109618): PHP wyczerpuje pamięć w połowie pracy

1. Atakujący wysyła żądanie przygotowane tak, aby zużyło dużo pamięci.
2. PHP osiąga limit pamięci, gdy wciąż wypełnia dane żądania. Część tych danych jest zapisana tylko w połowie.
3. PHP przerywa żądanie i uruchamia czyszczenie.
4. Czyszczenie traktuje dane zapisane w połowie jak kompletne. W efekcie PHP pracuje na pamięci, w której są przypadkowe dane albo dane wybrane przez atakującego.

Obejście zalecane przez samo PHP polega na usunięciu limitu pamięci i ograniczeniu rozmiaru przesyłanych plików. To pokazuje, że atak wymaga przekroczenia limitu dużym żądaniem.

### Podatność 2 (CVE-2026-109619): pozostałości po wcześniejszym żądaniu

1. Żądanie się kończy, a PHP zwalnia pamięć, której używało.
2. Przez pomyłkę PHP zachowuje notatkę o tym, gdzie była część tej zwolnionej pamięci.
3. Ten sam worker przyjmuje następne żądanie. To żądanie może pochodzić od atakującego.
4. Zanim PHP wyczyści notatkę, nowe żądanie z niej korzysta. Odczytuje albo zapisuje pamięć, w której teraz jest coś innego.

Programiści nazywają to błędem typu „use after free”. PHP podaje jeden skutek jako potwierdzony: atakujący może odczytać pamięć, której nie powinien widzieć. Obejście zalecane przez PHP wyłącza śledzenie postępu przesyłania plików w sesji (session upload progress). Ta funkcja informuje, jaka część pliku została już przesłana. Domyślnie jest włączona.

### Dlaczego błąd pamięci pozwala atakującemu uruchomić kod

Pamięć programu przechowuje dwa rodzaje rzeczy. Pierwszy to dane, na przykład tekst i liczby. Drugi to informacja o tym, gdzie leżą kolejne instrukcje, które program wykona.

Jeśli atakujący może wybrać, co PHP zapisze w pamięci, której nie powinno używać, może zmienić te informacje. PHP wykonuje wtedy instrukcje atakującego zamiast własnych. Nazywa się to uszkodzeniem pamięci (memory corruption). W ten sposób obie podatności prowadzą do zdalnego wykonania kodu (RCE): ktoś w internecie uruchamia polecenia na twoim serwerze.

![Jak PHP2Shell zamienia jedno żądanie WWW w kontrolę nad serwerem: atakujący bez logowania wysyła spreparowane żądanie, PHP źle obsługuje pamięć żądania, dane atakującego zastępują własne dane PHP, a PHP wykonuje polecenia atakującego](/blog/fig-pl-php2shell-how-it-works.webp)

Według PHP ryzyko jest największe w Apache z mod_php. Tam atak może się zacząć, zanim uruchomi się jakikolwiek kod twojej strony. Twoja strona nie musi mieć własnego błędu.

### Obie podatności obok siebie

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nazwa według PHP | RCE via OOM corruption | RCE via stale global state |
| Co idzie źle | PHP wyczerpuje pamięć w trakcie przygotowania żądania, a potem ufa danym zbudowanym w połowie | PHP ponownie używa pamięci pozostałej po wcześniejszym żądaniu |
| Czego potrzebuje atakujący | Jednego żądania WWW, bez logowania | Żądań do tego samego workera PHP, bez logowania |
| Potwierdzone skutki | Zdalne wykonanie kodu | Zdalne wykonanie kodu, odczyt pamięci |
| Waga (CVSS v4.0) | 9,2, krytyczna | 9,2, krytyczna |

## Jak wykryto podatność

PHP Foundation wymieniła kilka zespołów, które zgłosiły te podatności, w tym Calif, OpenAI i Wiz. Calif i Wiz poinformowały, że w swoich badaniach korzystały z modeli AI. PHP zapowiedziało poprawkę 20 października i wydało ją 21 października.

Atakujący byli szybsi niż poprawka. Amazon zauważył próbę wykorzystania podatności 17 października, cztery dni przed wydaniem.

## Co atakujący może zrobić przez PHP2Shell

Gdy atakujący uruchomi kod przez PHP, działa jako konto, na którym działa PHP. Na wielu serwerach z Linuksem to konto `www-data`. To konto może odczytywać i zmieniać pliki twojej strony.

| Co może zrobić atakujący | Co to oznacza dla ciebie |
|---|---|
| Uruchamiać polecenia na serwerze | Odczytać, zmienić lub usunąć pliki twojej strony. Opublikować fałszywe podstrony. |
| Odczytać poufne dane z pamięci | Według Wiz wyciek pamięci może ujawnić hasła, tokeny, klucze API i certyfikaty z żądań innych odwiedzających. |
| Odczytać twoje pliki konfiguracyjne | Pliki takie jak `wp-config.php` i `.env` zawierają hasła do bazy danych. Dzięki nim atakujący może skopiować dane klientów. |
| Zostawić tylną furtkę | Ukryty plik PHP pozwala mu wrócić nawet po załataniu. NCSC zaleca szukanie takich plików. |
| Wysyłać spam i phishing z twojego serwera | Twoja domena i adres IP trafiają na czarne listy, a twoje prawdziwe e-maile przestają docierać. |
| Przejąć całą maszynę | Dream Research poinformowało, że atakujący połączyli PHP2Shell z błędem w jądrze Linuksa (CVE-2026-46300) i przejęli pełną kontrolę nad 24 zaporami sieciowymi. Tenable nie potwierdził tego raportu. |

## Kogo dotyczy podatność

Komunikat bezpieczeństwa PHP wymienia każdą konfigurację PHP, która obsługuje żądania WWW:

- PHP-FPM (najczęstsza konfiguracja z Nginx)
- Apache z mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

Brytyjskie National Cyber Security Centre (NCSC) idzie dalej. Według NCSC każda organizacja, która używa PHP, powinna zakładać, że jest narażona, niezależnie od wersji. Dotyczy to też PHP wbudowanego w kupowane produkty, takie jak urządzenia sieciowe i narzędzia w chmurze.

26 października firma Trail of Bits poinformowała, że działające exploity atakują niezałatane PHP od 8.2 do 8.5. Pokazała je na MediaWiki, Symfony, Laravel i phpBB.

## Czy podatność jest wykorzystywana w prawdziwych atakach?

Tak. To nie jest teoria.

![Oś czasu PHP2Shell: pierwsza próba ataku zauważona 17 października, poprawka wydana 21 października, wpis na listę CISA KEV 26 października, termin łatania dla federalnych agencji USA 29 października](/blog/fig-pl-php2shell-timeline.webp)

- **17 października:** Zespół analizy zagrożeń Amazona zauważył próbę wykorzystania podatności. Było to cztery dni przed wydaniem poprawki.
- **21 października:** PHP wydało poprawione wersje. Cloudflare poinformował, że tego samego dnia widział pierwsze ataki.
- **26 października:** CISA, amerykańska agencja cyberbezpieczeństwa, dodała obie podatności do katalogu Known Exploited Vulnerabilities (KEV). Na tej liście są tylko podatności, dla których istnieją dowody prawdziwych ataków.
- **29 października:** Termin, do którego CISA kazała federalnym agencjom USA załatać systemy.

## Które wersje PHP są bezpieczne

Znajdź swoją gałąź PHP w tabeli. Jeśli twoja wersja jest niższa niż poprawiona wersja, jesteś narażony.

| Twoja gałąź PHP | Narażona poniżej | Poprawiona wersja | Uwagi |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | 8.2 przestaje dostawać poprawki 31 grudnia 2026 |
| 8.1, 8.0, 7.4 | wszystkie wersje | brak oficjalnego wydania | PHP opublikowało małe łatki do kodu źródłowego. Dostawca twojej dystrybucji Linuksa może mieć poprawkę. |
| od 7.3 do 5.4 | wszystkie wersje | brak | Bez wsparcia. Przejdź na nowszą wersję. |

**Dystrybucje Linuksa używają innych numerów wersji.** Debian, Ubuntu i Red Hat często dodają poprawkę do starszej wersji bez zmiany numeru. Dlatego `php -v` może pokazać „stary” numer na serwerze, który jest już bezpieczny. Na takich systemach sprawdź komunikat bezpieczeństwa dostawcy dotyczący CVE-2026-109618, a nie tylko numer.

## Jak sprawdzić wersję PHP

Wybierz metodę, która pasuje do twojej konfiguracji.

| Gdzie działa twoja strona | Jak zobaczyć wersję PHP |
|---|---|
| Własny serwer (SSH) | Uruchom `php -v`. Aby poznać wersję używaną przez stronę, sprawdź też pakiet PHP-FPM lub Apache. |
| WordPress | Wejdź w **Narzędzia**, potem **Stan witryny**, potem **Informacja**, potem **Serwer**. |
| Hosting z cPanel | Otwórz **MultiPHP Manager**. Pokazuje wersję PHP dla każdej domeny. |
| Inny hosting współdzielony | Sprawdź w panelu hostingu albo zapytaj pomoc techniczną. |

Wiersz poleceń i strona mogą na tym samym serwerze używać różnych wersji PHP. Sprawdź tę wersję, która obsługuje strony WWW.

## Jak załatać PHP

Rozwiązanie to instalacja nowej wersji PHP i restart PHP. PHP pisze wprost: „Nie ma pełnych środków zaradczych, aktualizacja jest jedynym bezpiecznym wyborem”.

**Hosting współdzielony.** Twój dostawca hostingu łata PHP za ciebie. Poproś pomoc techniczną o potwierdzenie, że serwer działa na poprawionej wersji. Jeśli panel pozwala wybrać wersję PHP, wybierz gałąź, która ma jeszcze wsparcie.

**Serwer z Debianem lub Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Serwer z Red Hat, AlmaLinux lub Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Zmień obraz na poprawiony tag, na przykład `php:8.4.27-fpm`. Zbuduj i wdróż ponownie każdy kontener. Stary, działający kontener pozostaje narażony.

Potem sprawdź jeszcze raz. Uruchom `php -v` albo odśwież w WordPressie stronę Stan witryny. Potwierdź nową wersję albo poprawiony pakiet od dostawcy.

## Jeśli nie możesz załatać dziś

PHP podaje kilka ustawień, które zmniejszają ryzyko. PHP jasno mówi, że nie czynią one serwera bezpiecznym. Używaj ich tylko na czas przygotowania aktualizacji.

| Ustawienie | Pomaga przeciw | Gdzie je ustawić |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, tak aby aplikacje nie mogły go nadpisać |
| Niski `post_max_size` | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` lub konfiguracja puli FPM. Nie `ini_set()` ani `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, tylko PHP 8.5 | `php.ini` |

Po zmianie tych ustawień zrestartuj każdy worker PHP. PHP ostrzega też, aby nie używać `RLIMIT_AS` ani `RLIMIT_DATA` jako limitu pamięci. Mogą one wywołać błąd.

NCSC podaje jeszcze jedną opcję. Jeśli nie możesz szybko zaktualizować PHP ani zmniejszyć ryzyka, odłącz system od sieci, dopóki nie będzie to możliwe.

## Sprawdź, czy nie doszło już do włamania

Atakujący mieli przewagę. Pierwsza próba nastąpiła cztery dni przed poprawką. Serwer, który jest teraz załatany, mógł więc zostać zhakowany wcześniej.

NCSC zaleca sprawdzenie niezałatanych systemów pod kątem śladów włamania i tylnych furtek. Typowe ślady na serwerze z PHP:

- Nowe pliki `.php`, których nie tworzyłeś, często w folderach na przesłane pliki lub w folderach cache.
- Nowi administratorzy w WordPressie lub w twojej aplikacji.
- Nietypowe połączenia wychodzące albo użycie procesora, którego nie umiesz wyjaśnić.
- Nagły wzrost liczby e-maili wysyłanych z twojego serwera.
- Odbicia (bounce) z informacją, że twój adres IP lub domena są na czarnej liście.

Dwa ostatnie punkty mają znaczenie, nawet jeśli strona wygląda normalnie. Zhakowany serwer często służy do wysyłania spamu lub phishingu z twojej domeny. Przez to domena może trafić na czarne listy, a wtedy twoje prawdziwe e-maile przestają docierać do skrzynek odbiorczych. Nasz poradnik o tym, [jak sprawdzić, czy domena e-mail jest na czarnej liście](/blog/how-to-check-if-email-domain-is-blacklisted), pokazuje, jak znaleźć wpis i go usunąć.

Jeśli znajdziesz ślady włamania, samo załatanie nie wystarczy. Atakujący mógł zostawić tylną furtkę. Przywróć system z czystej kopii zapasowej albo wezwij zespół reagowania na incydenty.

## Dwa powiązane problemy, o których warto wiedzieć

**CVE-2026-115560.** 23 października PHP opublikowało osobny komunikat bezpieczeństwa o śledzeniu postępu przesyłania plików w sesji. PHP uważa jego wykorzystanie za mało prawdopodobne. Ustawienie `session.upload_progress.enabled=0` z tabeli powyżej obejmuje także ten problem.

**Problem z SimpleXML w poprawionych wersjach.** PHP 8.4.27 i 8.5.12 mogą powodować awarie niektórych aplikacji, które używają SimpleXML (zgłoszenie php-src #24488). Przyczyną jest inna zmiana, a nie poprawka bezpieczeństwa. Według stanu na 26 października poprawka została scalona, ale jeszcze nie wydana. Przetestuj aplikację po aktualizacji. Nie zostawaj z tego powodu na podatnej wersji.

## Obejrzyj: jak zespół bezpieczeństwa PHP poradził sobie z problemem

```youtube
No3T8JQqhtM
Obejrzyj: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) z kanału Laravel News
```

## Krótkie odpowiedzi

| Pytanie | Odpowiedź |
|---|---|
| Czym jest PHP2Shell? | To dwie krytyczne podatności w PHP, CVE-2026-109618 i CVE-2026-109619, które pozwalają atakującym uruchomić kod na serwerze. |
| Czy atak wymaga logowania? | Nie. Atakujący w internecie może wykorzystać PHP2Shell bez konta. |
| Czy PHP2Shell jest wykorzystywany w atakach? | Tak. CISA dodała obie podatności do katalogu KEV 26 października 2026. |
| Które wersje usuwają te podatności? | 8.5.12, 8.4.27, 8.3.36 i 8.2.35. |
| Czy wystarczy zaktualizować pakiet? | Nie. Zrestartuj też PHP-FPM, Apache lub kontenery. |
| Czy zapora sieciowa rozwiązuje problem? | Nie. Reguły zapory aplikacji WWW mogą blokować część ataków, ale tylko aktualizacja usuwa błąd. |

## Źródła

- [PHP news archive 2026](https://www.php.net/archive/2026.php): informacje o wydaniach i komunikat bezpieczeństwa
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): doniesienia o atakach od Amazona, Cloudflare i Trail of Bits
