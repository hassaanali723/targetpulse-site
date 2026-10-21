---
title: Secure email gateway (SEG)
description: Czym jest secure email gateway, czyli bramka bezpieczeństwa poczty, jak filtruje e-maile przed skrzynkami firmy, jak rozpoznać ją po rekordzie MX i jak wpływa na weryfikację.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Secure email gateway, czyli SEG, to filtr ustawiony przed skrzynkami pocztowymi firmy. Sprawdza każdy przychodzący e-mail pod kątem spamu, phishingu i szkodliwych plików, zanim ktokolwiek go dostanie. Popularne przykłady to Mimecast, Proofpoint i Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Weryfikuj adresy za bramkami bezpieczeństwa poczty
---

## Czym jest secure email gateway?

Secure email gateway, czyli SEG (bramka bezpieczeństwa poczty), to filtr bezpieczeństwa dla poczty e-mail firmy. Znajduje się między internetem a skrzynkami pocztowymi firmy.

Każdy e-mail wysłany do firmy trafia najpierw do bramki. Bramka go skanuje. Szuka spamu, linków phishingowych i szkodliwych załączników. Phishing to próba wyłudzenia danych, na przykład haseł, przez fałszywą wiadomość. Bezpieczne e-maile trafiają dalej do skrzynki. Niebezpieczne e-maile są blokowane albo zatrzymywane.

Z bramek często korzystają duże firmy, banki, szpitale i urzędy. Do najbardziej znanych produktów należą Mimecast, Proofpoint i Barracuda.

## Prosty przykład

1. **Daniel pisze e-mail do banku.** Daniel sprzedaje oprogramowanie. Pisze do kierownika w banku.
2. **Najpierw odbiera go bramka.** Poczta banku przechodzi przez bramkę Proofpoint.
3. **Bramka go skanuje.** Sprawdza linki i załącznik w e-mailu Daniela.
4. **E-mail zostaje dostarczony.** Nic nie wygląda na szkodliwe, więc bramka przekazuje go do skrzynki odbiorczej kierownika.

Daniel nigdy nie widzi bramki. Gdyby jego e-mail zawierał niebezpieczny link, zostałby zatrzymany właśnie tam.

## Jak rozpoznać bramkę

Sprawdź [rekord MX](/glossary/mx-record) domeny. Rekord MX wskazuje, który serwer odbiera e-maile dla domeny. Gdy domena korzysta z bramki, rekord MX wskazuje bramkę zamiast dostawcy skrzynek.

| Bramka | Rekord MX często kończy się na |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Rekord MX dowolnej domeny sprawdzisz w narzędziu do wyszukiwania rekordów MX.

## Dlaczego bramki wpływają na weryfikację e-mail

Weryfikator e-mail pyta serwer odbiorcy, czy adres istnieje. W domenie z bramką odpowiada bramka, a nie prawdziwy serwer pocztowy.

Niektóre bramki w ogóle nie odpowiadają na sprawdzenia. Większość narzędzi zwraca wtedy wynik „nieznany”, nawet jeśli osoba jest prawdziwa. Inne bramki odpowiadają „tak” dla każdego adresu, co wygląda tak samo jak domena [catch-all](/glossary/catch-all-email).

Najbardziej dotyka to list firmowych, bo kontakty pracujące w dużych firmach często znajdują się za bramkami.

## Jak pomaga weryfikator

Giggal.ai rozpoznaje 15 konkretnych bramek, w tym Mimecast, Proofpoint i Barracuda, i zwraca prawdziwy wynik dla adresów za nimi. Jak to działa krok po kroku, opisuje artykuł [jak weryfikować adresy e-mail za secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
