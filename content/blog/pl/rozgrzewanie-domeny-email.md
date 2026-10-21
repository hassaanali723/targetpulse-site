---
title: "Rozgrzewanie domeny e-mail: ile trwa przed kampanią"
seoTitle: "Rozgrzewanie domeny email: ile trwa przed kampanią (2026)"
description: "Zaplanuj około 2 do 4 tygodni rozgrzewania nowej domeny, gdy ma już kilka tygodni. Czas według sytuacji, plan dzień po dniu i liczby, które pokazują gotowość."
slug: rozgrzewanie-domeny-email
date: 2026-10-22
updated: 2026-10-22
keyword: rozgrzewanie domeny email
image: /blog/covers/pl/rozgrzewanie-domeny-email.webp
imageAlt: "Ile trwa rozgrzewanie domeny e-mail: około 30 dni wieku domeny, 2 do 4 tygodni zwiększania wysyłki, a potem kampania, gdy odbicia są poniżej 2 procent"
cta: Sprawdź listę do pierwszej kampanii przed wysyłką
---

Nowa domena e-mail potrzebuje około 2 do 4 tygodni rozgrzewania przed prawdziwą kampanią. Ten czas warto liczyć dopiero wtedy, gdy domena ma już kilka tygodni. Nowa skrzynka w domenie, z której już wysyła się zwykłą pocztę firmową, jest zwykle gotowa po około 2 tygodniach. Jeśli pytasz, ile trwa rozgrzewanie domeny przed kampanią, to są liczby do planowania. O tym, kiedy naprawdę możesz zacząć, decydują potem twoje własne wskaźniki odbić i skarg.

Żaden dostawca skrzynek pocztowych nie podaje oficjalnej długości rozgrzewania. Google, Microsoft i Yahoo nie podają liczby dni dla poczty wysyłanej ze zwykłych skrzynek. Liczby, które widzisz w internecie, od 14 dni do 12 tygodni, pochodzą głównie od firm sprzedających narzędzia do rozgrzewania. Ten poradnik pokazuje, na czym opiera się każdy z tych terminów, żeby można było wybrać właściwy dla twojej sytuacji.

Jeśli najpierw potrzebujesz podstaw, zacznij od hasła [rozgrzewanie skrzynki (warm-up)](/glossary/email-warmup) w naszym słowniku.

## Ile trwa rozgrzewanie domeny e-mail w różnych sytuacjach

Właściwa długość zależy od tego, co jest nowe: domena, skrzynka, konto u dostawcy poczty czy adres IP do wysyłki.

| Sytuacja | Zaplanuj | Na czym to się opiera |
|---|---|---|
| Zupełnie nowa domena, nowe skrzynki | Odczekaj około 30 dni od rejestracji domeny, potem 2 do 4 tygodni zwiększania wysyłki | Spamhaus umieszcza nowo zarejestrowane domeny na liście blokad przez pierwsze 24 godziny. Al Iverson, autor piszący o dostarczalności, radzi, by domena przed rozgrzewaniem miała co najmniej 30 dni. |
| Nowa skrzynka w domenie, która już wysyła zwykłą pocztę | Około 2 tygodni zwiększania wysyłki | Domena ma już historię wysyłki. Nowy jest tylko wolumen nowej skrzynki. |
| Nowe konto Microsoft 365 (tenant) | 60 dni do pełnego limitu wysyłki zewnętrznej | Microsoft zmniejsza limit zewnętrznych odbiorców do 10% w pierwszych 30 dniach tenanta i do 25% w dniach od 31 do 60. Tenanty próbne mają limit 500 zewnętrznych odbiorców dziennie. |
| Domena wracająca po przerwie | Zacznij powoli, jak przy nowej domenie | Twilio SendGrid zaleca ponowne rozgrzanie adresu IP po ponad 30 dniach bez wysyłki. |
| Dedykowany adres IP na platformie mailingowej | 30 do 45 dni, według harmonogramu platformy | Amazon SES zwiększa wysyłkę przez 45 dni, Twilio SendGrid przez 41 dni, Mandrill od Mailchimp przez około 30 dni. Postmark zakłada od 3 do 6 tygodni. |

Limity Microsoft 365 są najważniejsze dla zespołów, które zakładają nowego tenanta tylko do cold mailingu. Microsoft ogłosił zmianę w sierpniu 2026 roku i wprowadza ją od połowy września do końca listopada 2026 roku. Dopóki nowy tenant nie ma dwóch miesięcy, nie może wysyłać pełnego wolumenu na zewnątrz, bez względu na to, co pokazuje twoje narzędzie do rozgrzewania.

![Czas rozgrzewania domeny e-mail według sytuacji: zupełnie nowa domena, nowa skrzynka w istniejącej domenie, nowy tenant Microsoft 365, domena po przerwie i dedykowany adres IP](/blog/fig-pl-warm-up-time-by-situation.webp)

## Dlaczego liczby w internecie się różnią

Gdy szukasz odpowiedzi na to pytanie, znajdziesz 14 dni, 3 tygodnie, minimum 30 dni, 4 do 6 tygodni i 45 dni. Ten rozrzut ma trzy przyczyny.

Po pierwsze, nie ma oficjalnej liczby, którą można by przepisać. Wytyczne Google dla nadawców mówią, by „zaczynać od niskiego wolumenu wysyłki do zaangażowanych użytkowników i powoli zwiększać wolumen w czasie”. Nie mówią, jak długo. Zalecenia Yahoo dla nadawców w ogóle nie omawiają stopniowego zwiększania wysyłki.

Po drugie, niektóre liczby są cytowane ze źródeł, w których ich nie ma. Kilka poradników przypisuje Microsoftowi okres „od 4 do 8 tygodni” i zasadę zwiększania wolumenu 1,5 raza na każdym etapie. Nie znaleźliśmy żadnej z tych liczb na żadnej stronie Microsoftu. Jedyny okres zwiększania wysyłki, jaki publikuje Microsoft, dotyczy jego usługi poczty Azure Communication Services: „od dwóch do czterech tygodni”.

Po trzecie, większość stron, które pojawiają się wysoko w wynikach na to pytanie, należy do firm sprzedających narzędzia do rozgrzewania. Dłuższy zalecany okres oznacza też więcej tygodni płatnej subskrypcji.

Nadawcy w praktyce rozgrzewają skrzynki znacznie krócej, niż mówią porady. Smartlead przeanalizował ponad 850 milionów maili wysłanych przez swoją platformę w pierwszej połowie 2026 roku. Ustalił, że „przeciętny nadawca rozgrzewa nową skrzynkę przez 8 dni przed pierwszą kampanią, wobec 9,4 dnia rok wcześniej”. Smartlead sam zaznacza, że tak postępują nadawcy, a nie jest to udowodnione bezpieczne minimum.

## Od czego zależy czas rozgrzewania

Na czas rozgrzewania wpływa pięć rzeczy.

**Wiek domeny.** Domena zarejestrowana w tym tygodniu nie ma żadnej historii. Spamhaus dodaje nowo zarejestrowane i wcześniej nieaktywne domeny do listy blokad na pierwsze 24 godziny, a część serwerów odbiorczych korzysta z tej listy. Kupienie domen do cold mailingu miesiąc przed ich użyciem nic nie kosztuje i usuwa to ryzyko.

**Ile musisz wysyłać.** Google mówi, że „im więcej maili wysyłasz, tym wolniej należy zwiększać wolumen wysyłki”. Zespół, który potrzebuje 30 maili dziennie z jednej skrzynki, skończy dużo szybciej niż zespół, który potrzebuje 3000.

**Jak często wysyłasz.** Google mówi też, że można „szybciej zwiększać wolumen wysyłki, gdy wysyłasz codziennie, a nie raz w tygodniu”. Domena, która wysyła trochę w każdy dzień roboczy, buduje historię szybciej niż domena wysyłająca duże partie raz w tygodniu.

**Z jakich dostawców korzystają twoi odbiorcy.** Poczta do Gmaila, Outlook.com i serwerów firmowych jest oceniana osobno. Amazon SES zauważa, że u niektórych dostawców „dobrą reputację można zbudować w około dwa tygodnie, a u innych może to potrwać nawet sześć tygodni”.

**Jakość listy.** Odbicia i zgłoszenia spamu w czasie rozgrzewania wydłużają cały proces, czasem o kilka tygodni. Na ten czynnik większość zespołów ma bezpośredni wpływ. Omawiamy go niżej.

## Plan rozgrzewania dzień po dniu

Bezpieczne zwiększanie wysyłki odbywa się małymi krokami, a każdy krok trwa na tyle długo, by zobaczyć wyniki. Poradnik Customer.io o rozgrzewaniu domeny stosuje kroki, w których wolumen jest mniej więcej 1,5 raza większy niż w poprzednim, a każdy etap trwa od 2 do 3 dni. Oto ten schemat dla jednej skrzynki, której celem jest 50 cold maili dziennie.

| Dni | Maili dziennie | Przejdź dalej tylko wtedy, gdy |
|---|---|---|
| Przed dniem 1 | Domena ma odpowiedni wiek, SPF, DKIM i DMARC są ustawione, płynie prawdziwa poczta | Testowy mail przechodzi uwierzytelnianie |
| 1 do 3 | 10 | Brak twardych odbić, brak zgłoszeń spamu |
| 4 do 6 | 15 | Współczynnik odbić poniżej 2% |
| 7 do 9 | 22 | Przychodzą odpowiedzi, brak odroczeń |
| 10 do 12 | 33 | Współczynnik odbić poniżej 2%, wskaźnik spamu poniżej 0,08% |
| 13 do 15 | 50 | Jak wyżej, potem utrzymaj ten poziom |

Najpierw wysyłaj do najbardziej zaangażowanych kontaktów. Google zaleca zaczynać „od zaangażowanych użytkowników”, czyli w praktyce od osób, które cię znają, obecnych klientów i osób, które niedawno odpisały.

Dwie zasady sprawiają, że ten plan działa. Jeśli etap wypada źle, powtórz go zamiast iść dalej. Wysyłaj też w każdy dzień roboczy. Mailgun zwraca uwagę, że jego limity rozgrzewania zakładają codzienną wysyłkę. Jeśli przestaniesz, „nie możesz wrócić od razu do limitu z ósmego dnia”.

Jeśli potrzebujesz więcej niż 50 maili dziennie, dodaj kolejne rozgrzane skrzynki, zamiast mocniej obciążać jedną.

![Plan rozgrzewania e-mail dzień po dniu od 10 do 50 maili dziennie, w krokach około 1,5x, z kontrolą współczynnika odbić i wskaźnika spamu przed każdym krokiem](/blog/fig-pl-warm-up-ramp-schedule.webp)

## Jak poznać, że domena jest gotowa

Domena jest gotowa, gdy jej wskaźniki pozostają dobre przy rosnącym wolumenie. Sprawdź te punkty przed pierwszą prawdziwą kampanią:

- **Współczynnik odbić poniżej 2%.** Customer.io podaje, że współczynnik odbić powyżej 2% „wskazuje na problemy z higieną listy, które trzeba rozwiązać przed przejściem dalej”. Nasz [poradnik o współczynniku odbić w cold mailingu](/blog/good-bounce-rate-for-cold-email) wyjaśnia poszczególne progi.
- **Wskaźnik zgłoszeń spamu poniżej 0,08%.** To cel Customer.io na czas rozgrzewania. Twardy limit Google dla Gmaila to 0,3%, więc trzymanie się daleko poniżej daje ci zapas na błędy.
- **Brak błędów limitu.** Jeśli Gmail zwraca kod 421 4.7.28, to znaczy, że „wykrył nietypowe tempo wysyłki” od ciebie. Zwolnij. Google radzi zmniejszać wolumen, aż błędy ustaną, „a potem znów powoli go zwiększać”.
- **Uwierzytelnianie przechodzi.** Wyślij test na konto Gmail, otwórz „Pokaż oryginał” i sprawdź, czy SPF, DKIM i DMARC mają status PASS. Nasz [poradnik o SPF, DKIM i DMARC](/blog/spf-dkim-dmarc-explained) omawia każdy rekord.
- **Przychodzą prawdziwe odpowiedzi.** Odpowiedzi od prawdziwych ludzi to lepszy znak niż jakikolwiek wynik w panelu.

Google Postmaster Tools może pomóc, z jednym ograniczeniem. Panel stanu zgodności jest dostępny dla wszystkich nadawców. Google podaje jednak, że może brakować danych „w dniach, gdy wolumen wychodzącej poczty jest niski”, a tak właśnie jest w czasie rozgrzewania. Nie czekaj, aż Postmaster Tools pokaże dane, zanim zaufasz własnym liczbom odbić i skarg.

## Czy narzędzia do rozgrzewania to przyspieszają?

Automatyczne narzędzia do rozgrzewania wysyłają maile w sieci skrzynek. Maile są automatycznie otwierane, dostają odpowiedzi i są przenoszone ze spamu do skrzynki odbiorczej. Chodzi o to, by twoja domena miała pozytywne interakcje, zanim zacznie się prawdziwa kampania.

Dowody na to, że skraca to rozgrzewanie, są słabe:

- **Google nie korzysta z otwarć.** Jego wytyczne dla nadawców mówią: „Google nie śledzi wskaźników otwarć”.
- **Sztuczne interakcje mogą się nie liczyć.** Customer.io, platforma do wysyłki maili, podaje, że „dostawcy skrzynek wykrywają sztuczne interakcje i nie dają za nie żadnej reputacji”. Firma nie obsługuje takich usług.
- **Poczta rozgrzewająca trafia gdzie indziej niż prawdziwa.** Dane samego Smartleadu pokazują, że maile rozgrzewające trafiają do skrzynki odbiorczej w około 99% przypadków. Smartlead dodaje, że to wynik dla maili rozgrzewających, „a nie dla kampanii cold mailingowych”.
- **Google już wcześniej reagował.** GMass, narzędzie do wysyłki maili, podaje, że jesienią 2022 roku Google kazał mu wyłączyć system rozgrzewania pod groźbą utraty dostępu do API Gmaila.

Google i Microsoft nie opublikowały żadnej konkretnej zasady dotyczącej narzędzi do rozgrzewania. Jeśli korzystasz z takiego narzędzia, traktuj jego wynik dostarczalności jako miarę narzędzia, a nie dowód, że kampania trafi do skrzynki odbiorczej. Historię, która się liczy, budują prawdziwe rozmowy z prawdziwymi kontaktami.

## Czego rozgrzewanie nie naprawi: lista do pierwszej kampanii

Jedna zła wysyłka może zniweczyć tygodnie rozgrzewania. Zwykle przyczyną jest lista do pierwszej kampanii. Listy leadów się starzeją, bo ludzie zmieniają pracę, a firmy zamykają skrzynki. Jeśli 16. dnia wyślesz maile na kilkaset starych adresów, współczynnik odbić może skoczyć wyraźnie powyżej 2%.

Odbicia na tym etapie uderzają w domenę, która ma tylko dwa tygodnie historii. Nie ma wystarczająco dobrej historii, która mogłaby je zrównoważyć. Google każe nadawcom zmniejszać wolumen, gdy rośnie liczba odbić, więc zwiększanie wysyłki trzeba zaczynać od nowa.

Sprawdź więc listę przed pierwszą kampanią, a nie dopiero po odbiciach:

1. Przepuść listę przez [weryfikator e-mail](/email-checker) albo pełne [czyszczenie listy mailingowej](/email-list-cleaning) (po angielsku).
2. Usuń adresy nieprawidłowe, jednorazowe i funkcyjne.
3. Adresy catch-all trzymaj w osobnej, wolniejszej grupie. Domena catch-all przyjmuje każdy adres, więc podstawowa kontrola nie powie ci, czy dana osoba istnieje. [Weryfikacja catch-all](/catch-all-verification) to sprawdza.
4. Wyślij pierwszą kampanię do najczystszej części listy, a potem rozszerzaj grupę odbiorców.

## Po rozgrzewaniu: utrzymuj stały wolumen

Rozgrzewanie nie kończy się nagłym przejściem na pełny wolumen. Google prosi nadawców, by „wysyłali pocztę w stałym tempie” i „unikali wysyłania poczty dużymi partiami”. Podaje też jasny przykład tego, czego nie robić: „nagłe podwojenie dotychczasowego wolumenu może skutkować ograniczeniem tempa lub spadkiem reputacji”.

Amazon SES daje tę samą radę dla swoich dedykowanych adresów IP: „Należy unikać wysyłania dużych wolumenów poczty od razu po zakończeniu rozgrzewania”. Zwiększaj wysyłkę od ostatniego poziomu rozgrzewania tymi samymi małymi krokami i wysyłaj regularnie w dni robocze.

## Najczęściej zadawane pytania

**Czy można rozgrzać domenę e-mail w 7 dni?**
Po tygodniu możesz zacząć wysyłać niewielkie ilości i wielu nadawców tak robi. Według danych Smartleadu średnia to 8 dni. Jednak 7-dniowe rozgrzewanie zupełnie nowej domeny daje bardzo mało historii, która mogłaby zamortyzować złą wysyłkę. Jeśli domena jest nowa, zaplanuj co najmniej 2 tygodnie zwiększania wysyłki, gdy domena ma już kilka tygodni.

**Ile maili dziennie wysyłać w czasie rozgrzewania?**
Zacznij od około 10 dziennie na skrzynkę i zwiększaj mniej więcej 1,5 raza co 2 do 3 dni, jak w planie powyżej. Zatrzymaj się na poziomie, którego potrzebujesz. Poradniki o cold mailingu zwykle ograniczają jedną skrzynkę do 30 do 50 maili dziennie.

**Czy stara domena wymaga rozgrzewania?**
W mniejszym stopniu, jeśli codziennie wysyła zwykłą pocztę. Domenę, która milczała przez miesiąc lub dłużej, traktuj prawie jak nową. Twilio SendGrid uznaje 30 dni bez wysyłki za moment, po którym adres IP trzeba rozgrzać ponownie.

**Czy po starcie kampanii zostawić rozgrzewanie włączone?**
Utrzymuj stałą i prawdziwą wysyłkę. Dostawcy narzędzi do rozgrzewania zwykle radzą zostawić rozgrzewanie na niskim poziomie. Prawdziwe odpowiedzi i czysta lista są ważniejsze niż wolumen rozgrzewania.

**Czy Google publikuje oficjalny plan rozgrzewania?**
Nie. Google każe nadawcom zaczynać od niskiego wolumenu do zaangażowanych odbiorców, zwiększać go powoli i unikać nagłych skoków. Nie podaje liczby dni.

**Dlaczego moje maile wracają w czasie rozgrzewania?**
Zwykle z powodu listy, a nie rozgrzewania. Sprawdź adresy w [weryfikatorze e-mail](/email-checker) i przeczytaj w [tym poradniku](/blog/why-cold-emails-bounce), dlaczego cold maile wracają.
