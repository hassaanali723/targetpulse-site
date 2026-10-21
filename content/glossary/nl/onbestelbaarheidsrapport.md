---
title: Onbestelbaarheidsrapport (NDR)
description: Wat een onbestelbaarheidsrapport is, wie het stuurt, hoe je de code en de onderdelen leest en wat je doet als je er een krijgt. Met een eenvoudig voorbeeld.
slug: onbestelbaarheidsrapport
date: 2026-10-22
updated: 2026-10-22
keyword: onbestelbaarheidsrapport
short: Een onbestelbaarheidsrapport, of NDR (non-delivery report), is een automatische e-mail die je vertelt dat een bericht dat je hebt verstuurd niet is bezorgd. Het noemt het adres dat mislukte en geeft een code die uitlegt waarom. De meeste mensen noemen het een bouncebericht.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Verwijder de adressen die je een NDR zouden sturen
---

## Wat is een onbestelbaarheidsrapport?

Een onbestelbaarheidsrapport, of NDR (non-delivery report), is een automatische e-mail die je vertelt dat een bericht niet is bezorgd. Het komt een paar seconden of een paar uur nadat je hebt verstuurd.

De meeste mensen noemen het een bouncebericht. De technische naam in de e-mailstandaarden is delivery status notification, of DSN. Dat betekent bezorgstatusmelding. Alle drie de namen betekenen hetzelfde.

Een NDR komt meestal van een adres zoals `MAILER-DAEMON@` of `postmaster@`. Dit zijn automatische afzenders op een mailserver. Niemand schrijft deze berichten met de hand. Een programma dat de [mailer-daemon](/glossary/mailer-daemon) heet, maakt ze.

## Een eenvoudig voorbeeld

Zo komt een NDR bij je aan.

1. **Ana verstuurt een factuur.** Ana is boekhouder. Ze mailt een factuur naar een klant op mark@oldfirm.example.
2. **Het adres is weg.** Mark is vorig jaar bij dat bedrijf vertrokken. Zijn mailbox is verwijderd.
3. **De server weigert de e-mail.** De mailserver van oldfirm.example heeft geen mailbox voor Mark. Hij weigert de e-mail.
4. **De NDR komt binnen.** Een minuut later krijgt Ana een e-mail met de titel "Undeliverable" of "Delivery Status Notification (Failure)".
5. **Ana leest de code.** Daarin vindt ze `550 5.1.1`. Deze code betekent dat het adres niet bestaat.
6. **Ana lost het op.** Ze vraagt de klant om een nieuw contactadres en stuurt de factuur daarheen.

De NDR heeft het probleem niet veroorzaakt. Hij heeft Ana er alleen over verteld.

## Wat een NDR bevat

De meeste NDR's hebben dezelfde onderdelen, ook al zien ze er in elk e-mailprogramma anders uit.

| Onderdeel | Wat het laat zien |
|---|---|
| **Mislukt adres** | Het adres dat je e-mail niet kon ontvangen |
| **Foutcode** | Een korte code, bijvoorbeeld `550 5.1.1`, die het probleem uitlegt |
| **Servermelding** | Een zin van de ontvangende server, bijvoorbeeld "user unknown" (onbekende gebruiker) |
| **Je oorspronkelijke e-mail** | Vaak als bijlage, zodat je ziet wat er mislukte |

## Zo lees je de code

Het eerste cijfer van de code vertelt je wat voor probleem het is.

| Eerste cijfer | Soort | Wat het betekent | Wat je doet |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | De fout is blijvend. Het adres bestaat misschien niet, of de server heeft je geblokkeerd. | Verstuur niet opnieuw naar het adres voordat je weet welke van de twee het is. |
| **4** | [Soft bounce](/glossary/soft-bounce) | De fout is tijdelijk. De inbox is misschien vol of de server is druk. | Wacht. Je mailserver probeert het zelf opnieuw. |

Twee veelvoorkomende voorbeelden:

- `550 5.1.1` betekent dat het adres niet bestaat. Verwijder het van je lijst.
- `452 4.2.2` betekent dat de mailbox vol is. Probeer het later opnieuw.

## Als je een NDR krijgt voor een e-mail die je niet hebt verstuurd

Soms krijg je een NDR voor een e-mail die je nooit hebt geschreven. Dit heet [backscatter](/glossary/backscatter). Een spammer heeft jouw adres in het afzenderveld gezet, de e-mail mislukte en de NDR kwam naar jou. Je account is meestal niet gehackt. Publiceer SPF-, DKIM- en DMARC-records voor je domein. Dan kunnen ontvangende servers de nepmails weigeren, in plaats van een NDR naar jou te sturen.

## Waarom NDR's belangrijk zijn voor afzenders

Elke NDR van een dood adres telt tegen je. Mailboxproviders zoals Google en Microsoft houden bij hoeveel van je e-mails naar adressen gaan die niet bestaan. Veel NDR's met `5.1.1` vertellen hun dat je lijst oud is.

**Voorbeeld:** een webwinkel stuurt een aanbieding naar 5.000 oude contacten. Als er 400 NDR's terugkomen, is dat 8% van de lijst. Veel verzendplatforms beoordelen of pauzeren accounts met zulke cijfers. Deze cijfers zijn alleen een voorbeeld.

## Hoe een verificatietool helpt

Een [email checker](/email-checker) vraagt de ontvangende server naar een adres voordat je verstuurt. De server geeft hetzelfde antwoord dat hij in een NDR zou zetten. Het verschil is dat er geen e-mail is verstuurd. Er bouncet dus niets en je reputatie loopt geen schade op.
