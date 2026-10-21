---
title: "Dlaczego maile wracają? Przyczyny odbić i co zrobić dalej"
description: "Dlaczego maile wracają: twarde i miękkie odbicia, przyczyny od najczęstszych w cold mailingu, co oznacza odbity e-mail i co z nim zrobić w następnym kroku."
slug: dlaczego-maile-wracaja
date: 2026-10-22
updated: 2026-10-22
keyword: dlaczego maile wracają
image: /blog/covers/pl/dlaczego-maile-wracaja.webp
imageAlt: "Kody odbić SMTP: 550 5.1.1 twarde, 4.x.x miękkie i 5.7.1 zablokowane"
cta: Zmniejsz współczynnik odbić przed kolejną wysyłką
---

Cold maile wracają, gdy serwer odbiorcy odrzuca wiadomość i odsyła ją zamiast dostarczyć. Jeśli kampania właśnie się zakończyła i chcesz wiedzieć, dlaczego maile z cold mailingu wracają częściej niż zwykła poczta, chodzi głównie o dwie rzeczy. Piszesz do osób, które nie prosiły o kontakt, więc lista jest mniej aktualna i mniej dokładna. Do tego wysyłasz z domeny, której serwer odbiorcy wcześniej nie znał. Konkretne przyczyny wynikają z tych dwóch.

## Czym jest odbity e-mail?

Odbity e-mail (bounce) to wiadomość, którą serwer pocztowy odbiorcy odrzucił i odesłał z kodem przyczyny, zamiast umieścić ją w skrzynce. Odpowiedź wysyła serwer, a nie człowiek. Trafia ona jako raport o niedoręczeniu (NDR) do skrzynki nadawcy albo do dziennika odbić w narzędziu do wysyłki. Najważniejszy jest kod w tym raporcie. Kod 5xx oznacza trwałą odmowę, a kod 4xx tymczasową. Pytania o to, co oznacza odbity e-mail, prawie zawsze sprowadzają się do odczytania tego kodu.

## Twarde i miękkie odbicia to dwa różne problemy

Najpierw sprawdź, jaki rodzaj odbicia dostajesz, bo od tego zależy następny krok.

Twarde odbicie (hard bounce) jest trwałe. Adres nie istnieje, domena nie istnieje albo serwer stanowczo go odrzucił. Wiadomość z twardym odbiciem nigdy nie zostanie dostarczona, a adres trzeba od razu usunąć z listy. Miękkie odbicie (soft bounce) jest tymczasowe. Skrzynka była pełna, serwer był zajęty albo wiadomość zatrzymano do dokładniejszej kontroli. Miękkie odbicia czasem znikają same, a narzędzie do wysyłki zwykle ponawia próbę za ciebie.

To rozróżnienie ma znaczenie z powodu reputacji. Dostawcy skrzynek pocztowych sprawdzają, jak często wysyłasz na adresy, które dają twarde odbicie. Gdy zdarza się to regularnie, uznają, że pracujesz na złej liście. Jeden nieistniejący adres niewiele znaczy. Kampania pełna takich adresów to wyraźny sygnał.

## Typowe przyczyny, od najczęstszych

Odbicia mają zwykle kilka powtarzających się przyczyn. Oto one, mniej więcej w kolejności, w jakiej pojawiają się w kampaniach cold mailingowych:

- Adres już nie istnieje. Ludzie zmieniają pracę i skrzynka zostaje usunięta, a kontakt nadal jest w kupionej lub zescrapowanej bazie.
- Nie istnieje cała domena. Małe firmy się zamykają, ich domena przestaje działać w DNS i nie ma już serwera, który mógłby cokolwiek przyjąć.
- Skrzynka jest pełna. Zdarza się to często przy zaniedbanych lub prywatnych adresach i zwykle daje miękkie odbicie.
- Serwer odbiorcy odrzucił twoją domenę nadawczą. To blokada z powodu reputacji lub zasad serwera, a nie problem z odbiorcą.
- Greylisting. Serwer tymczasowo odrzuca pierwszą próbę od nieznanego nadawcy i przyjmuje ponowną próbę kilka minut później.
- Filtrowanie spamu. Wiadomość odrzucono z powodu treści lub zasad, zanim dotarła do skrzynki odbiorczej.

Kolejność ma znaczenie, bo dwie pierwsze przyczyny, nieistniejące adresy i nieistniejące domeny, wykrywa weryfikacja. Są też najczęstsze na kupionych lub zescrapowanych listach. Przyczyny niżej na liście zależą bardziej od momentu wysyłki i twojej konfiguracji niż od samego adresu.

Przyczynę często odczytasz wprost z komunikatu o odbiciu. Linia typu 550 5.1.1 user unknown to twarde odbicie dla adresu, który nie istnieje. Komunikat 451 4.7.1 greylisted, try again later to miękka, tymczasowa odmowa, która zwykle znika przy ponownej próbie. Gdy umiesz czytać kod, nie musisz zgadywać przyczyny.

## Co znaczy, że mail wrócił?

„Mail wrócił” to potoczna nazwa tego samego zjawiska: wiadomość wróciła do ciebie. Treść raportu zależy od dostawcy. Gmail pisze „Address not found”, Microsoft 365 pisze „Recipient address rejected”, a serwery typu Postfix cytują surową linię SMTP, 550 5.1.1 User unknown. Wszystkie trzy komunikaty oznaczają, że skrzynki nie ma. Zwrot z informacją „mailbox full”, „greylisted” lub „try again later” jest tymczasowy. Zwykle znika przy ponownej próbie, którą wykona twoje narzędzie do wysyłki.

## Nie każde odbicie oznacza problem z listą

Łatwo uznać każde odbicie za zły adres. Jednak spora część odbić w cold mailingu nie ma nic wspólnego z listą. Jeśli twoja domena nadawcza jest nowa i nie przeszła rozgrzewania, serwery traktują ją podejrzliwie i odrzucają więcej twoich wiadomości. Zupełnie nowa domena, która pierwszego dnia wysyła kilkaset cold maili, dostanie odbicia, których nie dostałaby domena działająca od sześciu miesięcy przy tej samej liście. Jeśli brakuje rekordów SPF, DKIM lub DMARC albo są źle ustawione, niektórzy dostawcy odrzucą cię, zanim w ogóle sprawdzą odbiorcę.

Żadnego z tych problemów nie rozwiąże czyszczenie adresów. To problemy po stronie nadawcy. Wyglądają dokładnie jak odbicia od nieistniejących adresów, dopóki nie przeczytasz podanej przyczyny.

## Co zrobić z odbitym e-mailem?

Przy jednym adresie przeczytaj kod. Kod 5.1.1 lub „user unknown” oznacza, że skrzynki już nie ma. Usuń adres, a jeśli kontakt jest ważny, znajdź jego aktualny adres zamiast ponawiać wysyłkę. Kod 4.x.x lub „mailbox full” oznacza, że trzeba poczekać. Twoje narzędzie samo ponowi próbę. Kod 5.7.1 lub „blocked” wskazuje na twoją domenę nadawczą, a nie na odbiorcę. Sprawdź więc SPF, DKIM i DMARC, zanim wyślesz cokolwiek innego. Jeśli nie wiesz, czy adres nadal działa, sprawdź go w [weryfikatorze e-mail](/email-checker) przed kolejną wysyłką.

## Co zrobić, gdy kampania ma odbicia

Najpierw usuń z listy wszystkie twarde odbicia i nie wysyłaj już na te adresy. Nie ponawiaj prób i nie zostawiaj ich na następną wysyłkę w nadziei, że zaczną działać. Nie zaczną, a każda kolejna próba obniża twoją reputację. Miękkie odbicia zostaw w spokoju. Ponowne próby obsłuży narzędzie do wysyłki.

Potem spójrz na proporcje. Jeśli duża część nowej listy odbiła się przy pierwszej wysyłce, lista była zła już wcześniej. Rozwiązanie leży na początku procesu, tam, gdzie zbierasz lub kupujesz adresy. Czyszczenie po fakcie pomoże przy następnej wysyłce, ale nie cofnie spadku reputacji po tej.

## Źródło listy zwykle wyjaśnia najwięcej

To, skąd pochodzi lista, pozwala przewidzieć liczbę odbić. Lista wyeksportowana z twojego CRM, złożona z osób, które już ci odpisywały, ma bardzo mało odbić. Lista zescrapowana z internetu lub kupiona od brokera ma ich znacznie więcej. Adresy zebrano tam raz i nigdy więcej ich nie sprawdzano, a część z nich w tym czasie przestała działać. Jeśli wiesz, że lista jest kupiona lub zescrapowana, załóż, że część jest nieaktualna. Przepuść ją przez [narzędzie do czyszczenia listy mailingowej](/email-list-cleaning) (po angielsku) przed pierwszą wysyłką, zamiast dowiadywać się tego z raportu odbić.

## Kiedy weryfikacja pomaga, a kiedy nie

Weryfikacja usuwa przed wysyłką adresy, które dałyby twarde odbicie. To najskuteczniejszy pojedynczy krok przy liście do cold mailingu. Sprawdzenie listy przed wysyłką zamienia przypuszczenie w znaną liczbę. Warto to robić przy każdej liście, która nie pochodzi od ciebie.

Weryfikacja nie naprawi jednak źle skonfigurowanego rekordu DNS ani nie rozgrzeje nowej domeny. To problemy nadawcy i żadne czyszczenie listy ich nie rozwiąże. Podziel więc odbicia według przyczyny. Jeśli chodzi o adresy, które już nie istnieją, przed następną wysyłką przepuść listę przez [weryfikację e-mail](/). Jeśli chodzi o błędy uwierzytelniania lub reputacji, pracę trzeba wykonać na własnej domenie, a nie na liście.
