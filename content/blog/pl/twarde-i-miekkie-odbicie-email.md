---
title: "Hard bounce i soft bounce: twarde i miękkie odbicia email"
seoTitle: "Hard bounce i soft bounce: co oznaczają i co zrobić"
description: Twarde i miękkie odbicie prostymi słowami. Jak czytać kod odbicia, dlaczego narzędzia różnie je nazywają i jaki współczynnik odbić jest bezpieczny.
slug: twarde-i-miekkie-odbicie-email
date: 2026-10-22
updated: 2026-10-22
keyword: hard bounce i soft bounce
image: /blog/covers/pl/twarde-i-miekkie-odbicie-email.webp
imageAlt: "Hard bounce i soft bounce: twarde i miękkie odbicia email"
cta: Znajdź twarde odbicia przed wysyłką
---

Twarde odbicie (hard bounce) to trwały błąd doręczenia. Adres e-mail nie istnieje, domena nie istnieje albo serwer odbiorcy cię zablokował. Jeśli wyślesz ponownie, wiadomość znowu się odbije.

Miękkie odbicie (soft bounce) to tymczasowy błąd doręczenia. Adres jest prawdziwy, ale coś na razie zatrzymało doręczenie. Skrzynka jest pełna, serwer jest zajęty albo serwer prosi o ponowną próbę później. Jeśli wyślesz ponownie, wiadomość często dotrze.

To są definicje. Musisz wiedzieć jeszcze trzy rzeczy, a one mają większe znaczenie niż definicje:

- Różne narzędzia do wysyłki stosują różne reguły. To samo odbicie może być twarde w jednym narzędziu i miękkie w innym.
- Poprawny, działający adres też może dać twarde odbicie. Dzieje się tak, gdy błąd jest w twojej konfiguracji poczty, a nie w adresie.
- Współczynnik odbić, przez który twoje konto zostaje zawieszone, nie zawsze jest tym, który widzisz w raporcie kampanii.

Ten poradnik omawia wszystkie trzy.

## Hard bounce i soft bounce: różnica

| | Twarde odbicie (hard bounce) | Miękkie odbicie (soft bounce) |
|---|---|---|
| Co oznacza | Trwały błąd. Wiadomość nie zostanie doręczona | Tymczasowy błąd. Wiadomość może zostać doręczona przy kolejnej próbie |
| Kod w komunikacie o odbiciu | Zaczyna się od 5 (550, 5.1.1, 5.7.1) | Zaczyna się od 4 (421, 450, 4.2.2) |
| Częste przyczyny | Adres nie istnieje, domena nie istnieje, nadawca zablokowany | Pełna skrzynka, zajęty serwer, za dużo wiadomości naraz |
| Co robi twoje narzędzie do wysyłki | Przestaje wysyłać na ten adres, zwykle od razu | Przez pewien czas ponawia próby, często do 72 godzin |
| Co zrobić | Usuń adres. Nie wysyłaj ponownie | Poczekaj. Usuń adres tylko wtedy, gdy wciąż się odbija |
| Szkoda dla reputacji | Duża. Wiele twardych odbić mówi dostawcom, że twoja lista jest zła | Mała przy jednym odbiciu. Rośnie, jeśli te same adresy wciąż się odbijają |

## Czym jest twarde odbicie (hard bounce)?

Twarde odbicie oznacza, że serwer odbiorcy odrzucił twoją wiadomość na stałe. Ponowna próba nie pomoże.

Standard poczty e-mail, RFC 5321, nazywa to trwałym błędem. Dokładnie mówi, że nadawca „should not retry”, czyli nie powinien ponawiać tego samego żądania.

Są dwa rodzaje twardych odbić. W raporcie wyglądają tak samo, ale wymagają różnych rozwiązań.

**Rodzaj pierwszy: adres jest zły.** Skrzynka nie istnieje. Albo domena nie istnieje. Albo adres jest źle zapisany. Zweryfikowana lista nigdy nie powinna dawać takich odbić. Tak wyglądają:

- Gmail pisze: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft pisze: `5.1.1 Bad destination mailbox address`
- Microsoft pisze też: `5.4.1 Recipient address rejected: Access denied`. Dokumentacja Microsoftu wyjaśnia ten kod tak: „the recipient's address doesn't exist”, czyli adres odbiorcy nie istnieje.

Do tej grupy należy też adres, który zamknięto, gdy ktoś odszedł z pracy.

**Rodzaj drugi: blokada nadawcy.** Adres jest prawdziwy. Ale serwer odbiorcy nie przyjmie od ciebie poczty. Te odbicia mają kody zaczynające się od 5.7:

- [550 5.7.1](/blog/550-5-7-1-error) oznacza blokadę wynikającą z zasad serwera.
- `550 5.7.26` oznacza, że Gmail odrzucił twoją wiadomość, bo twoja domena nie jest uwierzytelniona.
- `550 5.7.30` oznacza, że twoja wiadomość nie przeszła sprawdzenia DKIM.

Twoje narzędzie do wysyłki liczy je jako twarde odbicia, bo kod zaczyna się od 5. Ale adres jest w porządku. Problem leży po twojej stronie. Wyjaśniamy to dokładniej niżej, bo od 2025 roku to najszybciej rosnąca przyczyna twardych odbić na czystych listach.

## Czym jest miękkie odbicie (soft bounce)?

Miękkie odbicie oznacza, że serwer odbiorcy odpowiedział „nie teraz”. RFC 5321 nazywa to tymczasowym błędem. Jego słowa to: „the error condition is temporary and the action may be requested again”, czyli stan błędu jest tymczasowy i można ponownie zażądać wykonania tej operacji. Twoje narzędzie do wysyłki to odczytuje i ponawia próbę później.

Oto częste przyczyny i kody, które zobaczysz:

- **Skrzynka jest pełna.** Gmail pisze `452 4.2.2 The recipient's inbox is out of storage space`. Odbiorca może usunąć część wiadomości i zrobić miejsce.
- **Za dużo wiadomości za szybko.** Gmail pisze `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Albo `421 4.7.28`, gdy widzi za dużo poczty z twojego adresu IP. Microsoft pisze `4.7.500` do `4.7.699 Access denied, please try again later`, gdy sprawdza twoją aktywność.
- **Greylisting.** Niektóre serwery i wiele bramek bezpieczeństwa poczty (secure email gateway) odrzucają pierwszą wiadomość od nieznanego nadawcy. Potem przyjmują ją przy drugiej próbie. Czas oczekiwania to zwykle około 15 minut.
- **Serwer nie działa.** Kod `421` oznacza, że serwer jest niedostępny. Kod `4.4.1` albo `4.4.2` oznacza, że połączenie się nie udało albo przekroczyło limit czasu.
- **Wiadomość wygasła.** Kod `4.4.7` oznacza, że twój serwer próbował, a potem zrezygnował. RFC 5321 mówi, że serwery powinny ponawiać próby przez około cztery do pięciu dni.

Jedno miękkie odbicie to norma. Miękkie odbicie, które się powtarza, to problem. Jeśli skrzynka jest „pełna” przy każdej wysyłce przez sześć tygodni, to ta skrzynka nie jest pełna. Jest porzucona. Każde narzędzie do wysyłki w końcu potraktuje ją w ten sposób.

## Jak czytać kod w komunikacie o odbiciu

Każdy komunikat o odbiciu ma kod. Gdy umiesz go przeczytać, nie potrzebujesz niczyjej etykiety. Kod sam pokazuje, co się stało.

W każdym komunikacie są dwa kody.

**Pierwszy kod ma trzy cyfry**, na przykład 550 albo 421. Liczy się tu tylko pierwsza cyfra. 4 oznacza błąd tymczasowy. 5 oznacza błąd trwały.

**Drugi kod ma trzy liczby oddzielone kropkami**, na przykład 5.1.1. Pierwsza liczba powtarza tę samą zasadę: 4 to błąd tymczasowy, 5 to błąd trwały. Druga i trzecia liczba podają przyczynę:

- `.1.1` oznacza, że skrzynka nie istnieje (część przed znakiem @ jest błędna).
- `.1.2` oznacza, że domena nie istnieje (część po znaku @ jest błędna).
- `.2.2` oznacza, że skrzynka jest pełna.
- `.7.1` oznacza, że serwer odrzucił cię z powodu swoich zasad.

![Jak czytać kod odbicia: pierwsza cyfra mówi, czy odbicie jest twarde, czy miękkie, rozszerzony kod mówi dlaczego, a działanie wynika z obu](/blog/fig-pl-bounce-code-reading.webp)
Przeczytaj pierwszą cyfrę, żeby poznać rodzaj odbicia. Przeczytaj cały kod, żeby poznać przyczynę. Potem działaj zgodnie z przyczyną.

Tabela poniżej pokazuje kody, które naprawdę zobaczysz. Treść komunikatów pochodzi z dokumentacji Gmaila i Microsoftu.

| Kod | Gdzie go zobaczysz | Co oznacza | Rodzaj | Co zrobić |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, większość serwerów | Skrzynka nie istnieje | Twarde | Usuń adres |
| 5.1.2 | Każdy serwer | Domena nie istnieje | Twarde | Usuń adres |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | Adres nie istnieje | Twarde | Usuń adres |
| 550 5.2.1 | Gmail | Konto jest nieaktywne | Twarde | Usuń adres |
| 552 5.2.2 | Gmail | Skrzynka jest pełna, a konto nieaktywne | Twarde | Usuń adres |
| 452 4.2.2 | Gmail | Skrzynka jest pełna | Miękkie | Poczekaj. Usuń adres, jeśli to się powtarza |
| 450 4.2.1 | Gmail | Odbiorca dostaje za dużo wiadomości | Miękkie | Poczekaj |
| 421 4.7.28 | Gmail | Za dużo poczty z twojego IP | Miękkie | Wysyłaj wolniej. Sprawdź listę |
| 550 5.7.28 | Gmail | Za dużo niechcianej poczty z twojego IP | Twarde | Przestań wysyłać. Popraw listę i wolumen |
| 550 5.7.1 | Gmail, Microsoft | Blokada wynikająca z zasad | Twarde, ale adres jest w porządku | Sprawdź uwierzytelnianie i reputację |
| 550 5.7.26 | Gmail | Twoja domena nie jest uwierzytelniona | Twarde, ale adres jest w porządku | Skonfiguruj SPF i DKIM |
| 550 5.7.30 | Gmail | Twoja wiadomość nie przeszła DKIM | Twarde, ale adres jest w porządku | Popraw konfigurację DKIM |
| 5.7.23 | Microsoft | Twoja wiadomość nie przeszła SPF | Twarde, ale adres jest w porządku | Popraw rekord SPF |
| 5.7.606 do 5.7.649 | Microsoft | Twój adres IP do wysyłki jest zablokowany | Twarde, ale adres jest w porządku | Poproś Microsoft o zdjęcie blokady, potem usuń przyczynę |
| 4.7.500 do 4.7.699 | Microsoft | Podejrzana aktywność, tymczasowa blokada | Miękkie | Poczekaj. Blokada sama zniknie, jeśli działasz zgodnie z zasadami |
| 4.4.7 | Każdy serwer | Wiadomość wygasła po kilku dniach prób | Miękkie, ale serwer zrezygnował | Usuń adres, jeśli to się powtarza |

Spójrz na ostatnią kolumnę. Dwa kody mogą oznaczać twarde odbicie, a mimo to wymagać przeciwnych działań. `5.1.1` oznacza: usuń adres. `5.7.26` oznacza: zachowaj adres i popraw DNS.

## Dlaczego to samo odbicie jest twarde w jednym narzędziu i miękkie w innym

Ludzie porównują współczynniki odbić między narzędziami i nie wiedzą, skąd różnice. Oto powód.

Serwer odbiorcy wysyła kod. Na tym kończy się jego rola. Potem twoje narzędzie do wysyłki decyduje, co zrobić z tym kodem. Każde narzędzie ma własną regułę, a reguły są różne. Poradnik Twilio mówi wprost: „not all ISPs adhere to that code consistently”, czyli nie wszyscy dostawcy usług internetowych konsekwentnie stosują ten kod.

Oto cztery popularne narzędzia i ich reguły:

| Narzędzie | Co robi z miękkim odbiciem | Kiedy miękkie odbicie staje się twardym |
|---|---|---|
| Mailchimp | Ponawia próbę i zachowuje kontakt | Po 7 miękkich odbiciach, jeśli kontakt nigdy niczego nie otworzył. Po 15, jeśli wcześniej otwierał wiadomości |
| HubSpot | Nazywa je „pending” i próbuje przez maksymalnie 72 godziny. Potem zapisuje miękkie odbicie | Nie automatycznie. Ale HubSpot zalicza „mailbox full” do grupy twardych odbić, a nie miękkich |
| SendGrid | Ponawia próby przez maksymalnie 72 godziny | Po 72 godzinach przestaje próbować. Twarde odbicia trafiają na listę blokad |
| Amazon SES | Ponawia próby przez pewien czas, potem informuje, że przestał | Nigdy automatycznie. Do współczynnika odbić liczą się tylko twarde odbicia. Automatyczne odpowiedzi w ogóle się nie liczą |

![Cztery platformy do wysyłki i ich reguły, kiedy miękkie odbicie staje się twardym](/blog/fig-pl-bounce-rules-by-platform.webp)
Ten sam kod, cztery różne reguły. Przenieś listę z Mailchimp do HubSpot, a liczba twardych odbić się zmieni, choć adresy się nie zmieniły.

Pełna skrzynka to więc miękkie odbicie w Gmailu. W HubSpot to twarde odbicie. A w Amazon SES to miękkie odbicie, które nigdy nie staje się twarde. Jeśli twój współczynnik odbić zmienił się po zmianie narzędzia, sprawdź reguły, zanim obwinisz listę.

Proste rozwiązanie: przestań ufać etykiecie i czytaj kod. Każde narzędzie pozwala wyeksportować komunikat o odbiciu. Kod w środku jest taki sam, niezależnie od tego, które narzędzie go zebrało.

## Jaki współczynnik twardych odbić jest akceptowalny?

Limit ustala firma, która wysyła twoją pocztę. Większość z nich go nie publikuje. Amazon SES go publikuje, a jego liczby dobrze pokazują, jak myślą dostawcy.

| Współczynnik twardych odbić | Co robi Amazon SES |
|---|---|
| Poniżej 2% | Poziom, poniżej którego SES każe ci zostać „for best results”, czyli dla najlepszych wyników |
| 5% lub więcej | Twoje konto trafia do przeglądu |
| 10% lub więcej | Twoja wysyłka może zostać wstrzymana, dopóki nie usuniesz problemu |

Ważne są tu dwa szczegóły. SES liczy tylko twarde odbicia. Miękkie odbicia i odbicia z powodu zablokowanego IP nie liczą się przeciwko tobie. SES nie stosuje też stałego okna czasowego. Patrzy na typową ilość twojej wysyłki, więc mały nadawca jest oceniany tak samo jak duży.

Zgłoszenia spamu idą w parze z odbiciami. Wytyczne Google dla nadawców mówią, żeby utrzymywać odsetek zgłoszeń poniżej 0,10 procent i nigdy nie dopuścić do 0,30 procent. Amazon SES kieruje konta do przeglądu przy 0,1 procent i może je wstrzymać przy 0,5 procent. Lista, która ma ponad 2 procent twardych odbić, zwykle dostaje też zgłoszenia spamu. Oba problemy mają tę samą przyczynę: ludzi, którzy nie prosili o twoją pocztę, i adresy, których nikt nie sprawdził.

Artykuł z [wartościami referencyjnymi współczynnika odbić email](/blog/how-to-reduce-email-bounce-rate) pokazuje bezpieczne limity według rodzaju poczty i źródła listy.

## Czy usuwać twarde odbicia z listy?

Tak. Od razu.

Dokładne słowa Amazonu to: „you should immediately remove the recipient's email address from your mailing list”, czyli należy natychmiast usunąć adres odbiorcy z listy mailingowej. Ta sama strona ostrzega, że jeśli dalej wysyłasz na adresy z twardym odbiciem, twoja wysyłka może zostać wstrzymana. Mailchimp nawet nie daje wyboru. Adresy z twardym odbiciem są „cleaned from your audience automatically and immediately”, czyli automatycznie i natychmiast usuwane z twojej grupy odbiorców. Nikt już na nie nie wysyła.

Nie ponawiaj prób. Nie zostawiaj tych adresów na następną kampanię na wypadek, gdyby skrzynka wróciła. Adres `5.1.1`, który odbił się w zeszłym miesiącu, odbije się też w przyszłym. Każda dodatkowa próba mówi dostawcy skrzynek, że wysyłasz na adresy, których nie znasz.

Jest jeden wyjątek. Jeśli kod to `5.7.26`, `5.7.30`, `5.7.23` albo kod zablokowanego IP, taki jak `5.7.6xx`, problemem nie jest adres. Jego usunięcie niczego nie naprawi. Popraw uwierzytelnianie albo reputację. Potem wyślij ponownie na ten sam adres.

Z miękkimi odbiciami jest odwrotnie. Zostaw je w spokoju. Twoje narzędzie do wysyłki samo ponowi próby. Jeśli twoje narzędzie nie ma reguły dla powtarzających się odbić, ustal ją. Adres, który daje miękkie odbicie przy trzech kolejnych wysyłkach w ciągu miesiąca, już nie zacznie działać. Reguła siedmiu odbić z Mailchimp to bezpieczny limit dla każdego.

## Dlaczego poprawny adres daje twarde odbicie?

Bo twarde odbicie mierzy, czy wiadomość została przyjęta. Nie mierzy, czy adres istnieje. Cztery rzeczy powodują odbicie 5xx na prawdziwej, działającej skrzynce.

**Twoja poczta nie jest uwierzytelniona.** 5 maja 2025 roku Microsoft zaczął wymagać SPF, DKIM i DMARC od każdej domeny, która wysyła ponad 5000 wiadomości dziennie na adresy Outlook.com, Hotmail i Live. Najpierw przenosił pocztę, która nie spełniała wymagań, do folderu wiadomości śmieci. Potem zaczął ją odrzucać kodem `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Google wymaga tych samych trzech rekordów od nadawców masowych. Kody Gmaila `550 5.7.26` i `550 5.7.30` to sposób, w jaki brakujący rekord wygląda z twojej strony. Wszystkie te kody zaczynają się od 5. Trafiają więc do kolumny twardych odbić, choć adresy przyjęłyby wiadomość.

**Firma blokuje nieznane adresy na wejściu.** Microsoft Exchange można ustawić tak, by odrzucał każdy adres, którego nie ma w katalogu firmy. Robi to kodem `5.4.1 Recipient address rejected: Access denied`. Zwykle to prawdziwe twarde odbicie. Czasem to nowy pracownik, którego skrzynki jeszcze nie dodano. Dlatego weryfikator, który sprawdza samą skrzynkę, daje ci lepszą odpowiedź niż odbicie.

**Przed skrzynką stoi secure email gateway.** Wiele firm kieruje całą przychodzącą pocztę przez [secure email gateway](/blog/what-is-a-secure-email-gateway), taką jak Proofpoint, Mimecast albo Barracuda. Bramka odpowiada za całą domenę. Skanuje każdą wiadomość i odrzuca wszystko, co narusza którąś z jej reguł, zwykle kodem zasad `5.7.1`. To twarde odbicie na skrzynce, która istnieje. Bramki powodują też opóźnione odbicia. Bramka przyjmuje wiadomość na wejściu, nie sprawdzając, czy skrzynka istnieje. Odbicie przychodzi minuty albo godziny później, gdy serwer pocztowy za bramką nie znajdzie takiej skrzynki. Twój raport pokazuje twarde odbicie, ale przyszło ono po wysyłce, a nie w jej trakcie.

**Domena jest catch-all.** To problem odwrotny. [Domena catch-all](/blog/what-is-a-catch-all-email-address) przyjmuje pocztę na każdy adres, prawdziwy lub nie. Dlatego nigdy nie odpowiada `5.1.1` na wejściu. Wiadomość zostaje przyjęta, a potem odbita później albo usunięta bez żadnej informacji. Około 30 procent listy B2B leży na takich domenach. To z nich pochodzą niespodziewane twarde odbicia.

Jeśli chcesz wiedzieć, [dlaczego maile wracają](/blog/why-cold-emails-bounce) konkretnie w cold outreachu, przyczyny układają się tam inaczej. Najwięcej szkód robi tam wiek listy.

## Jak zatrzymać twarde odbicia przed wysyłką

Prawie każdego `5.1.1` w raporcie kampanii dało się uniknąć. Skrzynki już nie było w chwili wysyłki. Weryfikacja zadaje serwerowi odbiorcy to samo pytanie, które zadałoby odbicie, ale przed kampanią, a nie po niej.

[Weryfikator adresu email](/email-checker) wykonuje trzy sprawdzenia po kolei:

- **Składnia.** Wychwytuje błędy takie jak `name@gmail..com`, zanim zmarnują wysyłkę.
- **Domena.** Wychwytuje literówki takie jak `gmial.com` i domeny, które wygasły.
- **Skrzynka.** Łączy się z serwerem odbiorcy i pyta, czy przyjmie pocztę dla tego konkretnego adresu. Jeśli odpowiedź to `5.1.1`, to jest to samo odbicie, które przyszłoby z kampanii. Ale nie kosztuje cię ono reputacji, bo żadna wiadomość nie została wysłana.

Standardowa weryfikacja przestaje działać w jednym miejscu. W domenie catch-all serwer odpowiada „tak” na każdy adres. Sprawdzenie zwraca więc wynik „ryzykowny” albo „accept-all” i musisz zgadywać. Giggal.ai zbudowano po to, by tę część listy zamienić w prawdziwą odpowiedź: prawidłowy albo nieprawidłowy. Strona o [weryfikacji catch-all](/catch-all-verification) wyjaśnia, jak to działa.

Bramki powodują ten sam problem. Bramka przyjmuje pytanie weryfikatora dla każdego adresu, więc standardowe sprawdzenie zwraca tam wynik „nieznany”. Giggal.ai sprawdza te adresy inaczej. Artykuł o [weryfikacji adresów za secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) wyjaśnia, co robi bramka i jak sprawdzenie przez nią przechodzi.

W formularzach rejestracji dodaj wywołanie [weryfikacji w czasie rzeczywistym](/public/docs) w chwili wysłania formularza. Literówka w adresie zostanie wychwycona, gdy osoba jest jeszcze na stronie. To jedyny krok, który zmniejsza odbicia na listach, które dopiero powstają.

Potem zajmij się dwoma rodzajami adresów, które przechodzą weryfikację, ale nadal ci szkodzą. Adresy funkcyjne, takie jak info@ i support@, istnieją, więc przechodzą weryfikację. Ale nikt nie jest ich osobistym właścicielem i dostają więcej zgłoszeń spamu. Jednorazowe adresy przechodzą weryfikację, dopóki istnieją, a później znikają. Każdy dobry weryfikator oznacza oba rodzaje. Zwłaszcza lista do [cold mailingu](/blog/good-bounce-rate-for-cold-email) powinna się ich pozbyć przed pierwszą wysyłką.

## Najczęściej zadawane pytania

**Czym różni się współczynnik twardych odbić od współczynnika miękkich odbić?**
Każdy z nich to liczba odbić danego rodzaju podzielona przez liczbę wysłanych wiadomości. To współczynnik twardych odbić przysparza kłopotów, bo pokazuje jakość twojej listy. Amazon SES na przykład liczy tylko twarde odbicia, gdy decyduje o przeglądzie albo wstrzymaniu konta. Współczynnik miękkich odbić mówi więcej o tempie wysyłki, wolumenie i reputacji. Czytaj go osobno.

**Czy usuwać adresy, z których wiadomości się odbiły?**
Twarde odbicia z kodami adresowymi usuń od razu: `5.1.1`, `5.1.2`, `5.2.1` i podobne. Twarde odbicia z kodami uwierzytelniania, `5.7.26`, `5.7.30` i `5.7.23`, zachowaj i zamiast tego popraw uwierzytelnianie. Miękkie odbicia zachowaj i pozwól, by ponawianie prób się zakończyło. Usuń każdy adres, który kilka razy z rzędu daje miękkie odbicie.

**Czy miękkie odbicie może stać się twardym?**
Tak, na dwa sposoby. Serwer odbiorcy może zmienić odpowiedź. Gmail zgłasza pełną skrzynkę jako `452 4.2.2`, dopóki konto jest aktywne, i jako `552 5.2.2`, gdy konto stanie się nieaktywne. Albo twoje narzędzie do wysyłki może zmienić etykietę. Mailchimp zmienia adres w twarde odbicie po 7 miękkich odbiciach bez aktywności albo po 15 z aktywnością.

**Czy miękkie odbicia szkodzą reputacji nadawcy?**
Jedno nie. Stały strumień takich odbić tak. Dostawcy skrzynek widzą, że raz po raz wysyłasz do skrzynek, które nie mogą odbierać poczty. Wysoki współczynnik miękkich odbić często sam w sobie jest ostrzeżeniem. Kod taki jak `421 4.7.28` to dostawca, który wprost każe ci zwolnić.

**Dlaczego moja wiadomość dała twarde odbicie, skoro adres jest poprawny?**
Prawie zawsze z powodu uwierzytelniania. Gmail i Outlook.com odrzucają teraz pocztę masową bez SPF, DKIM i DMARC. To odrzucenie ma kod 5xx, więc twoje narzędzie zapisuje je jako twarde odbicie. Sprawdź kod. Jeśli zaczyna się od `5.7`, problemem nie jest adres.

Raport odbić jest przydatny tylko wtedy, gdy umiesz go przeczytać. Przeczytaj pierwszą cyfrę. Potem przeczytaj przyczynę. Potem działaj zgodnie z przyczyną. Adresy, które odbiłyby się z kodem `5.1.1`, to łatwa część, bo możesz je znaleźć przed wysyłką. Najpierw przepuść listę przez [Giggal.ai](/). Kolumna twardych odbić w następnym raporcie będzie zawierać głównie przypadki, o których nie dało się wiedzieć wcześniej.
