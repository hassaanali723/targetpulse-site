---
title: Google Postmaster Tools
description: Co Google Postmaster Tools pokazuje o e-mailach wysyłanych do Gmaila, jak je skonfigurować, jakie limity spamu podaje Google i czego nie pokazuje.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools to bezpłatna strona Google, która pokazuje, jak Gmail ocenia domenę, z której wysyłasz. Podaje wskaźnik spamu, reputację domeny, reputację IP, wyniki uwierzytelniania i błędy dostarczenia dla e-maili wysyłanych do użytkowników Gmaila.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools zgłasza problemy po wysyłce. Weryfikacja im zapobiega
---

## Czym jest Google Postmaster Tools?

Google Postmaster Tools to bezpłatna strona Google dla osób, które wysyłają e-maile. Pokazuje, jak Gmail traktuje e-maile, które twoja domena wysyła na adresy Gmail.

Najpierw kilka pojęć. Domena to nazwa po znaku @ w twoim adresie e-mail, na przykład example.com. DNS to publiczny katalog, w którym domena publikuje swoje ustawienia. Każde ustawienie nazywa się rekordem.

Dodajesz swoją domenę i potwierdzasz, że należy do ciebie, dodając rekord DNS. Potem Google pokazuje ci dane o e-mailach, które twoja domena wysyła na adresy Gmail. Usługa jest bezpłatna. To jedyne oficjalne źródło informacji o tym, jak Gmail ocenia twoją domenę.

Obejmuje tylko Gmaila. E-maile wysyłane do Outlook.com, Yahoo lub na firmowe serwery pocztowe się w niej nie pojawiają. Microsoft ma osobną usługę dla własnej sieci.

## Prosty przykład

Oto jak mała firma może z niej korzystać. Liczby są tylko przykładem.

1. **Biuro podróży się rejestruje.** Sunny Trips dodaje swoją domenę sunnytrips.example do Google Postmaster Tools.
2. **Firma potwierdza, że domena należy do niej.** Google podaje jej kod. Firma dodaje ten kod do swojego DNS jako rekord.
3. **Firma wysyła dalej.** Wysyła cotygodniowy newsletter. Wielu jej klientów korzysta z Gmaila.
4. **Pojawiają się dane.** Gdy do Gmaila trafi wystarczająco dużo e-maili, Google Postmaster Tools zaczyna pokazywać wykresy.
5. **Firma zauważa problem.** W jednym tygodniu wskaźnik spamu rośnie do 0,25%. To oznacza, że czytelnicy oznaczyli jako spam 25 z każdych 10 000 dostarczonych e-maili.
6. **Firma znajduje przyczynę.** Wzrost zaczął się, gdy firma wysłała e-maile do nowej listy osób, które nigdy się nie zapisały. Przestaje używać tej listy.

Bez tego panelu firma Sunny Trips widziałaby tylko spadające wskaźniki otwarć, bez podanej przyczyny.

## Co pokazuje

- **Wskaźnik spamu.** Odsetek twoich dostarczonych e-maili, które użytkownicy Gmaila oznaczyli jako spam. Do tej liczby odnoszą się wytyczne Google dla nadawców.
- **Reputacja domeny i reputacja IP.** Ocena każdej z nich: zła, niska, średnia lub wysoka. Twój adres IP to numer, który identyfikuje twój serwer wysyłający. Wysoka oznacza, że Gmail rzadko filtruje twoje e-maile. Zła oznacza, że większość twoich e-maili trafia do spamu albo jest odrzucana.
- **Uwierzytelnianie.** Odsetek twoich e-maili, które przechodzą [SPF](/glossary/spf), [DKIM](/glossary/dkim) i [DMARC](/glossary/dmarc). To rekordy w twojej domenie, które dowodzą, że e-mail naprawdę pochodzi od ciebie.
- **Szyfrowanie.** Odsetek twoich e-maili wysłanych przez TLS. TLS to standard, który szyfruje e-mail podczas przesyłania między serwerami.
- **Błędy dostarczenia.** Odsetek twoich e-maili, które Gmail odrzucił lub opóźnił, wraz z przyczyną.
- **Pętla informacji zwrotnej (feedback loop).** Wskaźniki skarg dla każdej kampanii, dla dużych nadawców, którzy używają nagłówka Feedback-ID. Nagłówek to wiersz z informacjami technicznymi na początku e-maila.

## Limity, które publikuje Google

Wytyczne Google dla nadawców mówią:

1. Utrzymuj wskaźnik spamu pokazywany w Postmaster Tools poniżej 0,10%.
2. Nigdy nie dopuść do wskaźnika spamu 0,30% lub wyższego.
3. Nadawcy, którzy wysyłają 5000 lub więcej wiadomości dziennie, muszą mieć SPF, DKIM i DMARC.
4. E-maile marketingowe od tych nadawców muszą mieć wypisanie się jednym kliknięciem.

E-maile nadawców, którzy przekroczą 0,30%, są filtrowane lub odrzucane. Te limity są niskie. Przy 10 000 dostarczonych e-maili 0,30% to 30 skarg.

## Czego nie pokazuje

Postmaster Tools raportuje e-maile, które zostały dostarczone. Nie pokaże ci adresów, które nie istnieją. E-mail na nieaktywny adres zostaje odrzucony podczas połączenia SMTP. SMTP to standardowy sposób, w jaki serwery pocztowe przesyłają sobie e-maile. Takie odrzucenie to odbicie (bounce), czyli automatyczna wiadomość, że e-mail nie został dostarczony.

Odbicia nie wchodzą do wskaźnika spamu. Lista z wieloma nieprawidłowymi adresami może pokazywać niski wskaźnik spamu, a jednocześnie współczynnik odbić szkodzi twojej reputacji.

**Przykład:** sklep wysyła e-maile na 10 000 adresów, a 1000 z nich nie istnieje. Google Postmaster Tools pokazuje dobry wskaźnik spamu, bo liczy tylko dostarczone e-maile. 1000 odbić nie pojawia się w tej liczbie.

Postmaster Tools potrzebuje też odpowiedniej liczby wysyłek. Jeśli twoja domena wysyła do Gmaila niewiele e-maili, wykresy są puste. Google nie publikuje minimalnej liczby.

## Jak współpracuje z weryfikacją

Postmaster Tools zgłasza problemy po wysyłce. Weryfikacja usuwa ich przyczyny przed wysyłką. Sprawdzenie listy [weryfikatorem e-mail](/email-checker) usuwa adresy, które zostałyby odbite. Usuwa też jednorazowe adresy e-mail i adresy funkcyjne, które powodują skargi. [Narzędzie do masowej weryfikacji e-mail](/bulk-email-verifier) robi to dla całej listy w jednym przesłanym pliku. Potem Postmaster Tools ma mniej do zgłoszenia.

[Weryfikacja e-mail](/) sama nie zmienia twoich ocen w Gmailu. Sprawia tylko, że nie wysyłasz na adresy, które nie istnieją. Poradnik o [współczynniku odbić e-mail](/blog/how-to-reduce-email-bounce-rate) wyjaśnia obie strony.
