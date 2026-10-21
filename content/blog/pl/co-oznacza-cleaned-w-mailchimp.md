---
title: "Co oznacza Cleaned w Mailchimp?"
seoTitle: "Co oznacza Cleaned w Mailchimp? Przyczyny i co zrobić"
description: "Cleaned w Mailchimp oznacza, że adres dał twarde odbicie lub wiele razy miękkie, więc Mailchimp przestał na niego wysyłać. Przyczyny, koszty i co dalej."
slug: co-oznacza-cleaned-w-mailchimp
date: 2026-10-22
updated: 2026-10-22
keyword: co oznacza cleaned w mailchimp
image: /blog/covers/pl/co-oznacza-cleaned-w-mailchimp.webp
imageAlt: Przewodnik po statusie Cleaned w odbiorcach Mailchimp z przyczynami odbić i różnicami między statusami
cta: Znajdź nieprawidłowe adresy, zanim Mailchimp je wyczyści
---

Status Cleaned (wyczyszczony) w Mailchimp oznacza, że Mailchimp przestał wysyłać na dany adres. Adres dał twarde odbicie albo zbyt wiele razy miękkie odbicie, więc Mailchimp uznaje go za nieprawidłowy. Nazwa wprowadza w błąd, bo sugeruje, że Mailchimp coś za ciebie uporządkował lub naprawił. W rzeczywistości nic nie zostało naprawione. Kontakt zostaje w twojej grupie odbiorców (audience) z oznaczeniem Cleaned, nie może dostać od ciebie żadnej wiadomości i nie wlicza się do miesięcznego limitu kontaktów.

## Dlaczego Mailchimp czyści adres

Twarde odbicia to trwałe błędy dostarczenia, gdy serwer odbiorcy od razu odrzuca wiadomość. Według Mailchimpa najczęstsze przyczyny to skrzynka, która nie istnieje, i serwer odbiorcy, który trwale zablokował dostarczanie. Typowe przykłady to literówki, takie jak con zamiast com, i stare adresy osób, które odeszły z firmy. W większości przypadków Mailchimp automatycznie i od razu czyści adresy z twardym odbiciem. Wyklucza je wtedy z każdej przyszłej kampanii wysyłanej do twoich odbiorców.

Miękkie odbicia działają inaczej, bo oznaczają tymczasowe błędy dostarczenia. Gdy adres daje miękkie odbicie, Mailchimp próbuje dostarczyć pocztę przy kolejnych wysyłkach, zamiast od razu go odcinać. Jeśli jednak adres wciąż zawodzi, Mailchimp zamienia go na twarde odbicie i czyści. Mailchimp stosuje tu konkretne liczby. Czyści adres po 7 miękkich odbiciach, jeśli kontakt nie miał wcześniej żadnej aktywności jako subskrybent. Kontaktom z wcześniejszą aktywnością pozwala na maksymalnie 15 miękkich odbić.

Mailchimp podaje kilka powodów, dla których wiadomość z kampanii może dać miękkie odbicie. Skrzynka odbiorcy może być pełna, nieaktywna albo źle skonfigurowana. Jego serwer pocztowy może nie działać albo twoja kampania wysłała na ten serwer zbyt wiele maili w krótkim czasie. Inne przyczyny miękkich odbić to zbyt duże wiadomości, domeny, które tymczasowo nie istnieją, filtry treści albo wiadomości, których nie da się przekazać dalej. E-mail może też dać miękkie odbicie, jeśli nie spełnia wymagań antywirusowych, antyspamowych lub wymagań wobec nadawców na serwerze docelowym albo jeśli wiadomość [nie przeszła DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp podaje, że nie potrafi przewidzieć, czy e-mail da odbicie, zanim go wyślesz, i że każdy dostawca skrzynek odrzuca pocztę według własnych zasad. Po zakończeniu wysyłki kampanii potwierdzenia odbić są dostępne w raportach Mailchimpa przez 30 dni. Więcej o tym, jak serwery pocztowe klasyfikują problemy z dostarczeniem, przeczytasz w naszym poradniku o [twardych i miękkich odbiciach](/blog/hard-bounce-vs-soft-bounce). Możesz też zajrzeć do poradnika Mailchimpa [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned a Unsubscribed, Archived i inne typy kontaktów

Mailchimp dzieli kontakty na osobne kategorie. Od kategorii zależy, czy kontakt może dostawać wiadomości i czy za niego płacisz:

| Status | Co oznacza | Może dostawać | Wlicza się do limitu kontaktów |
| --- | --- | --- | --- |
| Subscribed | Zgodził się na otrzymywanie twoich kampanii | Maile marketingowe, SMS-y marketingowe, reklamy, maile transakcyjne | Tak |
| Unsubscribed | Zrezygnował z otrzymywania twoich kampanii marketingowych | Reklamy i maile transakcyjne | Tak |
| Non-subscribed | Miał z tobą kontakt (sklep, integracja lub import), ale nigdy nie wyraził zgody | Reklamy i maile transakcyjne | Tak |
| Cleaned | Adres dał twarde odbicie lub powtarzające się miękkie odbicia i nie da się na niego dostarczyć poczty | Nic | Nie |
| Pending | Wysłał formularz zapisu, ale nie potwierdził zapisu (double opt-in) | Nic | Nie |
| Archived | Usunięty z aktywnych odbiorców, ale dane profilu są zachowane | Nic | Nie |
| Deleted | Usunięty na stałe, bez możliwości cofnięcia | Nic | Nie |

Statusy Cleaned i Unsubscribed blokują wysyłkę kampanii marketingowych na dany adres, ale różnica ma znaczenie dla twojego miesięcznego rachunku. Unsubscribed to decyzja subskrybenta, a Mailchimp nadal wlicza taki kontakt do miesięcznego limitu kontaktów. Cleaned to decyzja Mailchimpa po nieudanym dostarczeniu. Na taki adres nic nie można wysłać, a Mailchimp za niego nie pobiera opłat. Kontakty Pending, które pozostają niepotwierdzone, są automatycznie usuwane z odbiorców po 60 dniach. Konta na starszych planach płatnych utworzonych przed 15 maja 2019 roku mogą mieć inne zasady limitu kontaktów.

## Co zrobić z kontaktami Cleaned

Mailchimp zaleca archiwizowanie kontaktów Cleaned zamiast ich usuwania. Archiwizacja zachowuje historię kontaktu i zapis złego adresu w twoich odbiorcach. Według Mailchimpa pomaga to uniknąć ponownego odbicia od tego adresu. Mailchimp radzi usuwać kontakty tylko na podstawie żądań wynikających z RODO, bo usunięcie trwale kasuje rekord i nie da się go cofnąć. Archiwizacja kontaktów Cleaned nie zmniejszy twojego miesięcznego rachunku, bo adresy Cleaned i tak nie wliczają się do limitu planu. Mailchimp opisuje te zasady w dokumentacji [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Aby przejrzeć lub wyeksportować wszystkie adresy Cleaned ze swoich odbiorców w Mailchimp, możesz wydzielić je w segmencie:

1. Otwórz kartę Audience w panelu Mailchimp i kliknij Segments.
2. Kliknij Create segment.
3. Ustaw warunek segmentu tak, by Email subscription status is one of Cleaned.
4. Kliknij Use segment, wpisz nazwę segmentu i zapisz go.
5. Otwórz zapisany segment, kliknij Export segment i potwierdź eksport.
6. Kliknij View exports w powiadomieniu, a potem Download CSV, żeby zapisać plik.

Gdy kontakt zostanie wyczyszczony z powodu zwykłej literówki, na przykład user@gmai.com albo name@conpany.com, nie możesz edytować istniejącego rekordu. Aby poprawić błąd, dodaj poprawiony adres jako zupełnie nowy kontakt. Mailchimp nie pobiera opłat za adresy Cleaned, więc zachowanie pierwotnego rekordu z literówką nic cię nie kosztuje.

Prawidłowe adresy e-mail czasem dają twarde odbicie. Zanim cokolwiek zrobisz, sprawdź przyczynę odbicia w raporcie kampanii. Restrykcyjna zapora sieciowa firmy lub filtr antyspamowy mógł odrzucić wiadomość z odpowiedzią SMTP typu Denied, Unacceptable Content lub Blocked. W firmach filtr może całkowicie blokować adresy IP, z których wysyła Mailchimp. Dział IT odbiorcy może to naprawić, dodając adresy IP Mailchimpa do listy dozwolonych. W innych przypadkach duży dostawca skrzynek może blokować cię tymczasowo. Według Mailchimpa taka blokada może zniknąć w ciągu jednego lub dwóch dni, gdy ustaną zgłoszenia spamu. Konkretne odpowiedzi serwera zdiagnozujesz, [czytając komunikaty o odbiciach](/blog/550-5-7-1-error). Jeśli adres na pewno jest prawidłowy, a przeszkoda w dostarczaniu została usunięta, kontakt musi ponownie zapisać się przez twój formularz zapisu, żeby wrócić do odbiorców. Mailchimp nie pozwala samodzielnie zmienić statusu kontaktu z Cleaned z powrotem na Subscribed.

## Gdy wiele kontaktów zostaje wyczyszczonych naraz

Jeśli po ostatniej kampanii wiele kontaktów zostało wyczyszczonych naraz, twojemu kontu może grozić automatyczne zawieszenie. Mailchimp automatycznie zawiesza konta, gdy pojedyncza wysyłka przekroczy przyjęte w branży progi odbić, rezygnacji z subskrypcji lub zgłoszeń nadużyć. Mailchimp podaje, że dostawcy internetu i organizacje antyspamowe wymagają od niego egzekwowania tych limitów. Jeśli Mailchimp zawiesi twoje konto, wysyłka jest wyłączona na czas sprawdzania przez zespół ds. zgodności. Logowanie, wywołania API i dostęp do danych działają jednak normalnie.

Zwykle przyczyną są stare listy, bo ludzie zmieniają pracę, porzucają skrzynki i zamykają konta. Jeśli od dawna nie wysyłasz maili do swoich odbiorców, Mailchimp proponuje ponownie potwierdzić kontakty przed zaplanowaniem masowej kampanii. Poproś subskrybentów, żeby potwierdzili, że nadal chcą dostawać twoje wiadomości.

Mailchimp stanowczo zaleca też uwierzytelnienie domeny wysyłkowej, [skonfigurowanie DMARC](/blog/what-is-a-dmarc-record) i nieużywanie darmowego adresu z Gmaila lub Yahoo jako adresu From.

## Jak zapobiec czyszczeniu kontaktów

Najprostszy sposób, by adresy nie były czyszczone, to weryfikacja list przed importem lub wysyłką kampanii. Narzędzie do weryfikacji e-mail sprawdza, czy każda skrzynka naprawdę istnieje na serwerze docelowym, zanim kampania wyjdzie. Dzięki temu nieprawidłowe adresy nie dają odbić na twoim koncie. Tu przydaje się [połączenie Giggal z Mailchimp](/integrations) przez klucz API. Giggal importuje subskrybowane kontakty z twoich odbiorców, sprawdza, czy każda skrzynka istnieje, i rozstrzyga adresy w [domenach catch-all](/catch-all-verification). Po zakończeniu weryfikacji pobierasz wyniki jako plik CSV i ręcznie archiwizujesz złe adresy w Mailchimp albo wypisujesz je z subskrypcji. Samo połączenie niczego nie zmienia w twoich odbiorcach w Mailchimp.

Weryfikacja przed wysyłką ogranicza liczbę odbić. Jeśli masz starszy segment, który od dawna nie dostawał maili, sprawdź go w weryfikatorze albo wyślij kampanię z prośbą o ponowne potwierdzenie, zanim dodasz go do głównego newslettera. Dbaj o to, by rekordy uwierzytelniania domeny w DNS były prawidłowe, bo błąd wyrównania DMARC to jedna z uznanych przez Mailchimp przyczyn miękkich odbić. Pamiętaj, że weryfikacja odbiorców nie przywróci kontaktów, które Mailchimp już wyczyścił. Gdy adres dostanie status Cleaned, Mailchimp pozwala tej osobie wrócić tylko przez nowe zgłoszenie w formularzu zapisu.

## Najczęściej zadawane pytania

**Czy kontakty Cleaned wliczają się do mojego rachunku w Mailchimp?**
Nie. Kontakty Cleaned nie wliczają się do miesięcznego limitu kontaktów, a Mailchimp nie pobiera za nie opłat. Spośród typów kontaktów do limitu planu wliczają się tylko kontakty Subscribed, Unsubscribed i Non-subscribed.

**Czy mogę ponownie zapisać kontakt Cleaned?**
Nie. W panelu Mailchimp nie można ręcznie zmienić statusu kontaktu Cleaned z powrotem na Subscribed. Subskrybent musi ponownie podać swoje dane w formularzu zapisu hostowanym przez Mailchimp albo w formularzu osadzonym na twojej stronie.

**Po ilu miękkich odbiciach Mailchimp czyści kontakt?**
Mailchimp czyści adres po 7 miękkich odbiciach, jeśli kontakt nie ma zapisanej wcześniejszej aktywności jako subskrybent. Jeśli kontakt miał wcześniejszą aktywność, Mailchimp pozwala na maksymalnie 15 miękkich odbić, zanim zamieni adres na twarde odbicie i go wyczyści.

**Czy usuwać kontakty Cleaned?**
Nie. Mailchimp zaleca archiwizowanie kontaktów Cleaned zamiast ich usuwania. Archiwizacja zachowuje rekord w twoich odbiorcach, co według Mailchimpa pomaga uniknąć ponownego odbicia od tego adresu. Mailchimp zaleca usuwanie kontaktów tylko w celu spełnienia wymagań RODO.

**Dlaczego Mailchimp wyczyścił adres, który na pewno jest prawidłowy?**
Prawidłowe adresy e-mail mogą dać twarde odbicie, jeśli firmowy filtr antyspamowy lub zapora blokuje serwery Mailchimpa z odpowiedziami SMTP typu Denied lub Blocked. Jeśli odbiorca poprosi administratora sieci o dodanie adresów IP Mailchimpa do listy dozwolonych, może ponownie dołączyć do twoich odbiorców przez formularz zapisu.

Oznaczenie Cleaned to sposób, w jaki Mailchimp chroni twoją reputację nadawcy już po fakcie. Weryfikacja przed wysyłką sprawia, że do odbicia w ogóle nie dochodzi. Przed kolejną wysyłką przepuść listę subskrybentów przez [Giggal.ai](/email-list-cleaning) (po angielsku), aby znaleźć nieprawidłowe adresy, zanim Mailchimp je wyczyści.
