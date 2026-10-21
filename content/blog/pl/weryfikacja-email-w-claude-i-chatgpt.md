---
title: "Weryfikacja email w Claude i ChatGPT"
description: Podłącz narzędzie do weryfikacji email do Claude, ChatGPT, Cursor albo VS Code przez MCP i sprawdzaj adresy w czacie, zamiast eksportować plik CSV.
slug: weryfikacja-email-w-claude-i-chatgpt
date: 2026-10-22
keyword: weryfikacja email w claude i chatgpt
image: /blog/covers/pl/weryfikacja-email-w-claude-i-chatgpt.webp
imageAlt: Weryfikacja email w Claude i ChatGPT
cta: Weryfikuj adresy e-mail bez wychodzenia z czatu
---

Większość weryfikacji e-mail nadal wygląda tak samo jak w 2015 roku. Eksportujesz plik CSV, otwierasz kartę przeglądarki, wgrywasz plik, czekasz, pobierasz inny plik CSV i gdzieś go importujesz. To działa. To także cztery przełączenia między narzędziami dla czegoś, co w gruncie rzeczy jest jednym pytaniem: czy ta skrzynka jest prawdziwa.

Jeśli już teraz wykonujesz część pracy w Claude albo ChatGPT, masz krótszą drogę. Model Context Protocol pozwala asystentowi bezpośrednio wywołać zewnętrzne narzędzie. Weryfikacja może więc odbyć się w rozmowie, którą już prowadzisz.

## Czym właściwie jest MCP

MCP to specyfikacja tego, jak asystent AI komunikuje się z zewnętrzną usługą. Anthropic opublikował ją pod koniec 2024 roku i od tego czasu przyjęła się daleko poza Claude. Najłatwiej myśleć o niej jak o standardzie złącza. Zanim powstała, każdy asystent potrzebował osobnej integracji z każdym narzędziem. Teraz usługa publikuje jeden serwer MCP, a każdy zgodny klient może z niego korzystać.

Dla narzędzia do weryfikacji to niewielki zakres. Jest tylko kilka rzeczy, o które w ogóle można poprosić: sprawdź ten adres, sprawdź tę listę, pokaż pełne szczegóły, powiedz, ile kredytów mi zostało. Giggal.ai udostępnia dokładnie te funkcje jako trzy narzędzia: `verify_emails`, `get_verification_details` i `get_credit_balance`.

Różnica w porównaniu z API polega na tym, że nie piszesz wywołania. Mówisz, czego chcesz, w zdaniu, które i tak chcesz napisać, a asystent sam ustala, które narzędzie wywołać i z jakimi argumentami.

## Do czego to się nadaje, a do czego nie

Uczciwe określenie granic oszczędza rozczarowań.

To dobre rozwiązanie, gdy weryfikacja jest jednym krokiem w czymś większym, co już robisz w rozmowie. Wklejasz listę uczestników konferencji i chcesz usunąć martwe adresy, zanim napiszesz wiadomości. Debugujesz proces rejestracji i chcesz wiedzieć, czy konkretny adres jest prawdziwy. Piszesz sekwencję i chcesz sprawdzić dwanaście nazwisk z docelowej firmy, zanim uruchomisz sekwencję. We wszystkich tych przypadkach alternatywą jest wyjście z rozmowy, a wywołanie narzędzia jest naprawdę szybsze.

To nie jest dobre rozwiązanie do czyszczenia listy z 200 000 wierszy. Do tego służy masowe wgrywanie pliku albo API. Przepuszczanie takiej listy przez czat nic nie daje poza dłuższym czekaniem i dużą liczbą tokenów. Do tego używaj panelu albo endpointu REST, bo po to one są.

## Konfiguracja

Potrzebujesz konta Giggal.ai i klucza API. Klucz znajdziesz w zakładce Developer API w aplikacji, a nie w ustawieniach. To drobiazg, ale myli ludzi częściej, niż powinien.

Serwer jest zdalny, więc nie trzeba niczego instalować i nie ma SDK. Działa pod adresem `https://mcp.giggal.ai/mcp` i uwierzytelnia się twoim kluczem API.

W Claude Desktop otwórz ustawienia, potem Connectors, i dodaj własny konektor wskazujący na ten adres URL. Claude Code przyjmuje ten sam serwer przez `claude mcp add`. Cursor i VS Code odczytują serwery MCP z pliku konfiguracyjnego JSON w katalogu projektu albo użytkownika. Format tego pliku opisuje [strona MCP](/mcp) razem z gotowymi fragmentami konfiguracji. ChatGPT obsługuje zdalne serwery MCP w ustawieniach konektorów w planach, w których ta funkcja jest włączona.

Po połączeniu asystent wyświetla trzy narzędzia i możesz zacząć zadawać pytania.

## Jak wygląda korzystanie

Nie potrzebujesz specjalnych sformułowań. Wszystkie te polecenia działają:

- Zweryfikuj hello@stripe.com i powiedz mi, czy to prawdziwa skrzynka
- Oto jedenaście adresów z zapisów na webinar, sprawdź, które się odbiją
- Które z nich są na domenach catch-all i czy te skrzynki naprawdę istnieją
- Ile kredytów weryfikacyjnych mi zostało, zanim to uruchomię

Asystent wywołuje `verify_emails`, dostaje wynik dla każdego adresu i wyjaśnia go w odpowiedzi. Jeśli pytanie dotyczyło listy, możesz kontynuować w tej samej rozmowie. Poproś, żeby usunął wszystkie nieprawidłowe adresy, pogrupował pozostałe według domeny i wypisał je jako blok CSV, który wkleisz bezpośrednio do narzędzia do wysyłki. Ta druga część sprawia, że warto to robić. Asystent ma już dane i może je przekształcić bez kolejnego przesyłania.

## Catch-all ma tu większe znaczenie niż zwykle

Mniej więcej 30% listy B2B leży na domenach, które przyjmują pocztę na każdy możliwy adres, prawdziwy lub nie. Większość weryfikatorów zwraca takie adresy z etykietą ryzykowny albo accept-all, co oznacza, że nie udało się tego ustalić.

W panelu taka etykieta jest niewygodna. W rozmowie jest jeszcze gorzej. Asystent wiernie przekaże to, co dostał, i dostaniesz odpowiedź, że cztery z twoich jedenastu adresów są niepewne. To dokładnie ta sama sytuacja co przed zadaniem pytania. Giggal.ai rozstrzyga takie adresy jako prawidłowe albo nieprawidłowe, podobnie jak skrzynki za piętnastoma nazwanymi secure email gateways. Asystent dostaje więc prawdziwą odpowiedź, a nie niepewną etykietę.

## Koszt i rozsądna ostrożność

Weryfikacje przez MCP zużywają te same kredyty co wszędzie indziej. Każda weryfikacja adresu kosztuje stały 1 kredyt (także weryfikacja adresów catch-all i chronionych przez SEG). Darmowy plan to 1000 kredytów bez karty płatniczej. Kredyty nie wygasają.

Ostrożność jest prosta. Asystent zrobi to, o co poprosisz, także uruchomi większe zadanie, niż planujesz. Przed czymś dużym zapytaj o saldo kredytów. Wklejaj adresy, zamiast wskazywać plik, którego zawartości nie znasz. Żadna z tych zasad nie dotyczy tylko weryfikacji, ale przy płatnym API taki błąd jest bardziej uciążliwy niż zwykle.

## Czy warto to konfigurować

Jeśli prawie codziennie otwierasz Claude albo ChatGPT, a listy mailingowe są częścią twojej pracy, konfiguracja zajmie około dwóch minut i usunie krok, który dziś robisz ręcznie. Jeśli weryfikacja to comiesięczne masowe zadanie uruchamiane w przeglądarce, panel jest naprawdę lepszym narzędziem i to rozwiązanie niewiele zmieni.

Instrukcje konfiguracji i fragmenty konfiguracji dla każdego klienta są na [stronie MCP](/mcp). [Dokumentacja API](/public/docs) opisuje te same operacje przez REST, jeśli wolisz napisać skrypt.
