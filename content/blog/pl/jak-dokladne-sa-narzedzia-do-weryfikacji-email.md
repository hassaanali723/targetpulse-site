---
title: "Jak dokładne są narzędzia do weryfikacji email?"
description: Każdy weryfikator deklaruje 97 do 99 procent dokładności. Co mierzy ta liczba, dlaczego deklaracje są podobne i jak przetestować weryfikator na swojej liście.
slug: jak-dokladne-sa-narzedzia-do-weryfikacji-email
date: 2026-10-22
updated: 2026-10-22
keyword: dokładność weryfikacji email
image: /blog/covers/pl/jak-dokladne-sa-narzedzia-do-weryfikacji-email.webp
imageAlt: Jak dokładne są narzędzia do weryfikacji email?
cta: Przetestuj to na własnej liście
---

Otwórz cenniki dowolnych dziesięciu weryfikatorów email, a znajdziesz dziesięć deklaracji dokładności między 97% a 99,9%. My też publikujemy taką liczbę. Te wartości leżą tak blisko siebie, że prawie nic nie mówią. To dziwny wynik dla miary, która ma pomagać w wyborze.

To skupienie nie jest zmową. Wynika z tego, że nie ma uzgodnionej definicji tego, co się mierzy. Każdy dostawca wybiera pomiar, który jest prawdziwy i korzystny dla niego. Pomiary prawdziwe i korzystne zbiegają się do podobnych liczb.

## Co ta liczba zwykle mierzy

Popularna definicja brzmi mniej więcej tak: jaki odsetek adresów, dla których zwróciliśmy jednoznaczny wynik, oceniliśmy poprawnie. Przeczytaj to uważnie, bo to zastrzeżenie bardzo wiele zmienia.

Adresy, których narzędzie nie chciało ocenić, nie wchodzą do mianownika. Jeśli weryfikator zwraca wynik prawidłowy albo nieprawidłowy dla 70% twojej listy, a pozostałe 30% oznacza jako ryzykowne, jego dokładność liczy się na tych 70%. Trudna jedna trzecia, czyli część, w której naprawdę potrzebna była pomoc, z założenia nie wchodzi do wyniku.

Dlatego sama dokładność weryfikacji email mówi bardzo mało. Co najmniej tak samo ważna jest druga liczba: pokrycie, czyli odsetek listy, dla którego narzędzie zdecydowało się wydać wynik. Narzędzie z dokładnością 99% i pokryciem 70% robi dla ciebie mniej niż narzędzie z dokładnością 97% i pokryciem 95%, choć pierwsza liczba wygląda lepiej. Bardzo niewielu dostawców publikuje pokrycie. Anymail Finder to jeden z nich. Podaje 86,4% pokrycia obok 98,9% dokładności, a ta para mówi więcej niż każda z liczb osobno.

## Dlaczego każde narzędzie jest dokładne w łatwej części

Na zwykłej domenie z normalnym serwerem pocztowym weryfikacja jest prawie rozwiązanym problemem. Serwer prowadzi listę swoich skrzynek i zapytany odpowiada uczciwie. Weryfikator odczytuje odpowiedź i ją zapisuje. Dostawca nie ma tu wiele miejsca, by być lepszym albo gorszym.

To znaczy, że główna liczba dokładności mierzy głównie wynik w tej części pracy, która nie jest trudna. Różnice między narzędziami widać zupełnie gdzie indziej.

## Gdzie naprawdę się różnią

Dwie kategorie psują standardowe sprawdzenie. To, jak narzędzie je obsługuje, jest prawdziwą różnicą między produktami.

[Domeny catch-all](/blog/what-is-a-catch-all-email-address) przyjmują pocztę na każdy możliwy adres, prawdziwy lub nie. Serwer jest ustawiony tak, by przyjmować wszystko, żeby wspólne aliasy, literówki i adresy byłych pracowników zawsze gdzieś trafiały. Zapytaj go o skrzynkę, której nigdy nie utworzono, a odpowie „tak”. Około 30% typowej listy B2B leży na takich domenach.

Secure email gateways dają ten sam objaw z innego powodu. Proofpoint, Mimecast, Barracuda i podobne produkty filtrują pocztę na brzegu sieci. Przyjmują wszystko, zanim zdecydują, co z tym zrobić, więc odpowiedź „przyjęto” nic nie mówi o tym, czy skrzynka istnieje. Domen firmowych dużych przedsiębiorstw jest tu bardzo dużo. To znaczy, że problem najczęściej dotyczy kontaktów, na których zależy ci najbardziej.

W tych dwóch kategoriach narzędzie do weryfikacji albo jest warte swojej ceny, albo nie.

## Jak poprawnie czytać deklarację dostawcy

Trzy pytania pozwalają oddzielić fakty od marketingu.

Jaki jest mianownik? Zapytaj, czy liczba dokładności obejmuje adresy zwrócone jako ryzykowne albo nieznane. Jeśli nie, zapytaj, jaki procent typowej listy trafia do tej grupy. Dostawca, który nie odpowie na drugie pytanie, już coś ci powiedział.

Czy test był niezależny? Większość opublikowanych testów porównawczych przeprowadzają dostawcy, a takie testy zwykle stawiają tego dostawcę na pierwszym miejscu. Na tej stronie cytujemy jeden z nich: test LeadMagic z lutego 2026 roku na 10 000 prawdziwych adresów B2B, z których 28% było na domenach catch-all. To naprawdę przydatne dane, ale LeadMagic umieścił w nim siebie na pierwszym miejscu i warto to uwzględnić. Giggal.ai nie był jednym z badanych narzędzi.

Czy dokładność znaczy to samo co dostarczalność? Nie. Skrzynka może istnieć, a mimo to odrzucić twoją wiadomość z powodu filtrowania, reputacji albo treści. Weryfikacja mówi ci, że adres jest prawdziwy. Nie obiecuje, że wiadomość dotrze. Dostawcy, którzy zacierają tę różnicę, sprzedają ci coś, czego nie mogą dostarczyć.

## Przetestuj to samodzielnie, bo tylko to rozstrzyga sprawę

Zajmie ci to jedno popołudnie i da więcej niż każda deklaracja w każdym cenniku.

Przygotuj próbkę około 500 adresów z własnych danych, a nie z publicznego zestawu testowego. Celowo je wymieszaj. Dodaj adresy, o których wiesz, że działają, bo te osoby ci odpisały. Dodaj adresy, o których wiesz, że są martwe, bo wcześniej się odbiły. Dodaj też sporą część adresów z domen catch-all i domen dużych firm. Adresy znane jako dobre i znane jako martwe to twoja grupa kontrolna, bo odpowiedź narzędzia możesz porównać z faktem, który już znasz.

Przepuść tę próbkę przez dwa albo trzy narzędzia. Potem porównaj trzy rzeczy.

Po pierwsze, znane adresy. Ile działających adresów narzędzie poprawnie oznaczyło jako prawidłowe, a ile martwych poprawnie jako nieprawidłowe. Narzędzie, które oznacza twoje znane, działające kontakty jako nieprawidłowe, jest gorsze niż bezużyteczne. Na jego podstawie usuniesz prawdziwe leady.

Po drugie, pokrycie. Policz wiersze zwrócone jako ryzykowne, nieznane, accept-all albo catch-all. Ta liczba to część twojej listy, w której narzędzie nie pomogło. Zwykle to najbardziej odkrywcza liczba w całym teście.

Po trzecie, i tylko jeśli możesz, wyślij wiadomości do części adresów, które każde narzędzie oznaczyło jako prawidłowe na domenach catch-all, i sprawdź rzeczywisty współczynnik odbić. To jedyny pomiar, który testuje deklarację, a nie marketing. Z tego powodu darmowy plan, który pozwala tylko na pojedyncze sprawdzenia, nie jest wiele wart. Żeby w ogóle przeprowadzić ten test, potrzebujesz weryfikacji masowej.

## Co deklarujemy i ile to jest warte

Giggal.ai deklaruje 98,5% dokładności na standardowych listach firmowych i typowy współczynnik odbić poniżej 3% na wyczyszczonej liście. To nasze liczby, zmierzone przez nas. Traktuj je z taką samą podejrzliwością jak liczby wszystkich innych, dopóki nie przeprowadzisz testu opisanego wyżej.

Wolimy być oceniani po pokryciu. Celem projektu było zwracanie wyniku prawidłowy albo nieprawidłowy dla adresów catch-all i chronionych przez bramki, zamiast samej etykiety, na piętnastu nazwanych bramkach. Dzięki temu grupa ryzykownych adresów jest mała, a nie stanowi jednej trzeciej pliku. Czy tak jest na twoich danych, lepiej niż ta strona powie twoja własna próbka 500 adresów.

Darmowy plan to 1000 kredytów bez karty płatniczej. Działa na masowym wgrywaniu plików właśnie po to, żeby ten test był możliwy. Żeby najpierw sprawdzić pojedynczy adres, użyj [weryfikatora adresu email](/email-checker). Jeśli najpierw chcesz poznać tło, opisaliśmy, [co naprawdę oznacza wynik ryzykowny](/blog/what-does-risky-mean-in-email-verification) i [jak weryfikuje się skrzynki chronione przez bramkę](/blog/how-to-verify-emails-behind-secure-email-gateways).
