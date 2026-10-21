---
title: "Czy wielkość liter w adresie e-mail ma znaczenie?"
seoTitle: "Czy wielkość liter w adresie email ma znaczenie? Gmail i Outlook"
description: "Zwykle nie: Gmail i Outlook ignorują wielkie litery, ale standard poczty pozwala rozróżniać je przed @. Kiedy ma to znaczenie i jak zapisywać adresy w bazie."
slug: czy-wielkosc-liter-w-adresie-email-ma-znaczenie
date: 2026-10-22
updated: 2026-10-22
keyword: czy wielkość liter w adresie email ma znaczenie
image: /blog/covers/pl/czy-wielkosc-liter-w-adresie-email-ma-znaczenie.webp
imageAlt: Okładka o wielkości liter w adresie e-mail z zasadami dla domen, Gmaila, Outlooka i baz danych
cta: Sprawdź, czy adres e-mail naprawdę istnieje
---

W adresach e-mail wielkość liter zwykle nie ma znaczenia. Wpisz John.Smith@gmail.com albo john.smith@gmail.com, a wiadomość trafi do tej samej skrzynki. Część po znaku @ całkowicie ignoruje wielkie litery. Wyjątkiem jest część przed @. Standard poczty formalnie pozwala serwerowi traktować Smith i smith jako dwie różne osoby. Warto o tym wiedzieć, jeśli prowadzisz formularz rejestracji albo listę mailingową.

## Część po @ nigdy nie rozróżnia wielkości liter

Nazwa domeny po znaku @ nigdy nie rozróżnia wielkości liter. RFC 5321 mówi, że domeny skrzynek pocztowych podlegają zwykłym zasadom DNS, a DNS ignoruje wielkość liter. Dlatego GMAIL.COM, Gmail.com i gmail.com wskazują ten sam serwer pocztowy. Możesz wpisać domenę wielkimi lub małymi literami, a wiadomość trafi w to samo miejsce.

## Czy wielkość liter przed @ ma znaczenie?

Część lokalna, czyli nazwa użytkownika po lewej stronie @, działa inaczej. Według RFC 5321, sekcja 2.4, „the local-part of a mailbox MUST BE treated as case sensitive” (część lokalna skrzynki MUSI być traktowana z rozróżnieniem wielkości liter). Serwery, które przekazują wiadomość dalej, muszą zachować wielkie i małe litery dokładnie tak, jak je zapisano. O tym, czy `Smith` i `smith` to dwie różne osoby, decyduje serwer odbiorcy, na którym jest skrzynka.

Ta sama sekcja ostrzega też, że „exploiting the case sensitivity of mailbox local-parts impedes interoperability and is discouraged” (wykorzystywanie rozróżniania wielkości liter w części lokalnej utrudnia współpracę systemów i nie jest zalecane). Wyobraź sobie dwóch pracowników jednej firmy, JSmith@ i jsmith@, i to, jak często ich poczta by się myliła. Duzi dostawcy unikają tego problemu, bo w ogóle ignorują wielkość liter.

## Gmail i Outlook

Dostawcy, którzy obsługują większość prywatnej poczty, zdecydowali się całkowicie ignorować wielkość liter. Eksperci produktowi na forum pomocy Gmaila potwierdzają, że Gmail ignoruje wielkie litery zarówno przy zakładaniu konta, jak i przy odbieraniu poczty. Bez względu na to, czy ktoś napisze na `JaneDoe@gmail.com`, czy na `janedoe@gmail.com`, Google dostarczy obie wiadomości do tej samej skrzynki. Google traktuje też `@googlemail.com` i `@gmail.com` jako ten sam adres.

Gmail ignoruje również kropki w prywatnych adresach, więc `jane.doe@gmail.com` i `janedoe@gmail.com` trafiają do tej samej skrzynki. Nie zakładaj jednak, że działa to wszędzie. Dokumentacja Google podaje, że kropki mają znaczenie w kontach Google Workspace zarządzanych w domenach firmowych lub szkolnych. Kropki i wielkie litery to osobne zasady. Nie zakładaj, że inny dostawca ignoruje kropki tylko dlatego, że robi to Gmail.

Odpowiedź Microsoftu jest podobna. W odpowiedzi na forum pomocy Microsoftu jedna z osób wyjaśnia, że część po @ nigdy nie rozróżnia wielkości liter. Wielkość liter w nazwie użytkownika zależy od dostawcy, a duzi dostawcy, tacy jak Outlook i Gmail, ją ignorują. Ta sama odpowiedź dodaje, że kilka firm prowadzi własne serwery, które rozróżniają wielkość liter.

## Kiedy wielkie litery nadal sprawiają kłopot

Najczęściej problem pojawia się przy logowaniu. Załóżmy, że rejestrujesz się na telefonie jako `Sarah@example.com`, bo klawiatura zamieniła pierwszą literę na wielką. Później logujesz się, wpisując `sarah@example.com`, a prosty system odpowiada, że nie ma takiego konta. Użytkownik nie zmienił adresu, ale formularz logowania porównał tekst z rozróżnieniem wielkości liter.

Listy i systemy CRM mają własną wersję tego problemu. Gdy ktoś zapisuje się jako `Bob@company.com`, a później pobiera poradnik jako `bob@company.com`, wiele platform liczy dwa osobne leady. To zawyża statystyki i powoduje, że ludzie dostają podwójne kampanie. Usuń duplikaty bez względu na wielkość liter, zanim [zweryfikujesz listę lub wyślesz kampanię](/email-list-cleaning) (po angielsku).

Zostaje rzadki serwer firmowy, który ściśle rozróżnia wielkość liter, czyli wyjątek wspomniany w odpowiedzi Microsoftu. Jeśli kontakt zapisał na wizytówce adres `M.MacDonald@specialtycorp.com`, zachowaj tę pisownię, gdy do niego piszesz. Standardowym systemom to nie zaszkodzi, a na systemach, które rozróżniają litery, pozwoli uniknąć problemów z dostarczeniem.

## Jeśli zapisujesz adresy e-mail w bazie

Jeśli tworzysz aplikacje internetowe albo zarządzasz bazą kontaktów, zachowuj oryginalną pisownię. Zapisz adres dokładnie tak, jak wpisał go użytkownik, ale wszystkie porównania, wyszukiwania i sprawdzenia unikalności wykonuj na małych literach.

Zachowanie oryginalnego zapisu szanuje to, jak użytkownik chce widzieć adres w profilu i w nagłówkach wiadomości. Zamiana na małe litery przy porównaniu zapobiega z kolei podwójnym kontom. Jeśli ktoś zarejestruje się jako `IStillUse@AOL.COM`, nie zmieniaj jego wyświetlanej nazwy na małe litery, ale traktuj `iSTilLUSE@aol.com` jako duplikat tego adresu.

Aby zapewnić unikalność w PostgreSQL, utwórz indeks na wyrażeniu zamienionym na małe litery zamiast zwykłego ograniczenia unikalności:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL ma też rozszerzenie `citext`, które porównuje tekst bez rozróżniania wielkości liter. W MySQL domyślne porównywanie (`utf8mb4_0900_ai_ci`) już nie rozróżnia wielkości liter, więc zwykłe klucze unikalne wyłapią duplikaty różniące się tylko wielkością liter bez dodatkowych funkcji.

Uważaj na pułapkę przy zamianie na małe litery w językach backendowych, zwłaszcza w Javie. W Javie wywołanie `email.toLowerCase()` korzysta z domyślnych ustawień regionalnych serwera. W tureckich ustawieniach regionalnych wielka łacińska litera `I` zmienia się w `ı` (małe i bez kropki) zamiast w `i`. Psuje to adresy takie jak `INFO@example.com`. Aby uniknąć tego błędu, przekaż `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

W JavaScripcie `toLowerCase()` nie ma tego problemu, bo korzysta z domyślnych mapowań Unicode, a nie z ustawień regionalnych systemu. Od ustawień regionalnych zależy tylko `toLocaleLowerCase()`.

Aby wyłapać błędny format i złe wpisy, zanim trafią do bazy, sprawdzaj adresy przy rejestracji przez [API do walidacji e-mail](/email-validation-api) (po angielsku). Wykrywa ono literówki i nieistniejące domeny, gdy użytkownik jest jeszcze na stronie.

## Najczęściej zadawane pytania

**Czy Gmail rozróżnia wielkość liter?**
Nie. Gmail ignoruje wielkość liter przy zakładaniu konta i przy dostarczaniu wiadomości. Jeśli twój adres to john.doe@gmail.com, dostaniesz wiadomości wysłane na JOHN.DOE@gmail.com i John.Doe@googlemail.com. Nie da się założyć nowego konta, którego adres różni się od istniejącego tylko wielkością liter.

**Czy ma znaczenie, że wpisuję adres e-mail wielkimi literami?**
Przy zwykłej wysyłce do prywatnych i firmowych skrzynek wielkie litery nie zablokują dostarczenia. Serwer pocztowy odbiorcy ignoruje wielkość liter i dostarcza wiadomość normalnie. Uważać trzeba tylko na formularze logowania, które porównują adresy e-mail jako dokładne ciągi znaków.

**Czy login e-mail rozróżnia wielkość liter?**
W praktyce nie. Login e-mail to po prostu inna nazwa adresu e-mail, a Gmail, Outlook i inni duzi dostawcy ignorują w nim wielkie litery. Standard pozwala serwerowi traktować wielkie litery przed @ jako inne znaki, ale zdarza się to rzadko. Jeśli zapiszesz login z wielkimi literami dla czytelności, bardzo mało prawdopodobne jest, że stracisz przez to jakąś wiadomość.

**Czy zapisywać adresy e-mail małymi literami?**
Porównuj i indeksuj adresy e-mail małymi literami, aby uniknąć podwójnych kont i błędów logowania. Oryginalną pisownię użytkownika zachowaj w osobnej kolumnie do wyświetlania, żeby powiadomienia wyglądały poprawnie. Jeśli możesz mieć tylko jedną kolumnę, zapisz adres tak, jak go wpisano, i porównuj go przez lower(), żeby nie stracić oryginału.

**Czy wielkie litery mogą spowodować odbicie e-maila?**
Bardzo rzadko. Dzieje się tak tylko na nietypowym serwerze, który traktuje Admin@ i admin@ jako osobne skrzynki. Jeśli adres z wielkimi literami daje odbicie, najpierw szukaj innej przyczyny, na przykład literówki albo skrzynki, która już nie istnieje. Kod w komunikacie o odbiciu powie ci, o co chodzi, co wyjaśniamy w poradniku o [twardych i miękkich odbiciach](/blog/hard-bounce-vs-soft-bounce).

Wielkie litery nie zatrzymają wiadomości, ale [literówka](/email-checker) już tak. Jeśli czyścisz listę kontaktów przed kolejną wysyłką, przepuść ją przez [Giggal.ai](/email-list-cleaning) (po angielsku), aby najpierw wyłapać nieistniejące skrzynki i niedziałające domeny.
