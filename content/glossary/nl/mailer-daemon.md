---
title: Mailer-daemon
description: Wat een mailer-daemon-bericht is, waarom je er een krijgt, hoe je de code leest en wat je doet bij een melding voor een e-mail die je niet hebt verstuurd.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: De mailer-daemon is het programma op een mailserver dat automatische berichten verstuurt. De meeste van deze berichten zijn bouncemeldingen. Een bericht van de mailer-daemon betekent dat een e-mail die je hebt verstuurd niet is bezorgd.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Verwijder de adressen die bouncen voordat je verstuurt
---

## Wat is een mailer-daemon?

De mailer-daemon is een programma op een mailserver dat automatische meldingen verstuurt. De meeste van deze meldingen vertellen je dat een e-mail die je hebt verstuurd niet is bezorgd.

Eerst een paar begrippen. Een server is een computer die altijd aanstaat en e-mail afhandelt. Een daemon is een programma dat op de achtergrond op een server draait, zonder dat iemand ernaar kijkt. De mailer-daemon is dus het achtergrondprogramma dat e-mail afhandelt die niet kan worden bezorgd.

Als je e-mail wordt geweigerd, stuurt de mailer-daemon je een melding. De naam van de afzender is meestal `MAILER-DAEMON@` gevolgd door het domein van de server, of `postmaster@`. Het domein is het deel van een adres na de @, zoals example.com.

De melding heet een [onbestelbaarheidsrapport](/glossary/ndr) (non-delivery report, NDR). Die vertelt je welk adres mislukte, wanneer en waarom. Veel mensen noemen het gewoon een bouncebericht.

## Een eenvoudig voorbeeld

Zo komt een mailer-daemon-bericht in je inbox.

1. **Priya verstuurt een offerte.** Priya heeft een drukkerij. Ze mailt een prijsofferte naar een nieuwe klant op sam@client.example.
2. **Het adres klopt niet.** Het echte adres van de klant is sam.lee@client.example. Priya nam het over van een visitekaartje en liet ".lee" weg.
3. **De server weigert de e-mail.** De mailserver van client.example heeft geen mailbox met de naam "sam". Hij weigert de e-mail.
4. **Er komt een melding.** Een paar seconden later krijgt Priya een e-mail van MAILER-DAEMON. Daarin staat dat haar e-mail niet kon worden bezorgd.
5. **Priya leest de code.** Ze vindt `550 5.1.1`. Deze code betekent dat het adres niet bestaat.
6. **Priya lost het op.** Ze kijkt op het visitekaartje, verbetert het adres en verstuurt de offerte opnieuw.

De mailer-daemon heeft de e-mail van Priya niet geblokkeerd. De andere server heeft hem geweigerd. De mailer-daemon heeft haar dat alleen laten weten.

## Zo lees je het bericht

Het belangrijkste deel van het bericht is de code. Zoek naar een getal van drie cijfers en een getal met punten. Voorbeeld: `550 5.1.1`. Het eerste cijfer vertelt je wat voor probleem het is.

| Eerste cijfer | Soort | Wat het betekent | Wat je doet |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | Het adres bestaat niet, of de server heeft je e-mail geblokkeerd. | Verstuur niet opnieuw voordat je weet welke van de twee het is. |
| **4** | [Soft bounce](/glossary/soft-bounce) | De inbox is vol of de server is druk. | Wacht. Je mailserver probeert het zelf opnieuw. |

De tekst naast de code komt van de ontvangende server. Twee voorbeelden:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. Volgens de documentatie van Microsoft betekent dit dat "het adres van de ontvanger niet bestaat".

## Mailer-daemon-berichten voor e-mails die je niet hebt verstuurd

Soms krijg je een bouncemelding voor een e-mail die je nooit hebt verstuurd. Dit heet [backscatter](/glossary/backscatter). Zo gebeurt het.

1. Een spammer verstuurt duizenden e-mails. In het From-veld typt hij jouw adres, bijvoorbeeld info@shop.example.
2. Veel van die e-mails gaan naar adressen die niet bestaan.
3. De ontvangende servers weigeren ze. Hun mailer-daemon stuurt elke melding naar het From-adres, en dat is het jouwe.
4. Je inbox loopt vol met mailer-daemon-meldingen voor e-mails die je nooit hebt geschreven.

Je account is niet gehackt. De oplossing zit in je domein. Publiceer SPF-, DKIM- en DMARC-records. Dit zijn instellingen van je domein die ontvangende servers vertellen welke e-mails echt van jou komen. Dan kunnen ontvangende servers de nepmails weigeren, in plaats van bouncemeldingen naar jou te sturen.

## Waarom het belangrijk is voor afzenders

Elk mailer-daemon-bericht is een bounce. Mailboxproviders, zoals Google en Microsoft, tellen hoeveel van je e-mails naar adressen gaan die niet bestaan. Veel meldingen met `5.1.1` vertellen hun dat je je lijst niet hebt gecontroleerd.

**Voorbeeld:** een bedrijf stuurt een nieuwsbrief naar een oude lijst van 2.000 contacten. Er komen tweehonderd mailer-daemon-meldingen terug, allemaal met `5.1.1`. Elke melding is voor de providers een teken dat niemand de lijst heeft opgeschoond. Deze cijfers zijn alleen een voorbeeld.

## Hoe een verificatietool helpt

Een [email checker](/email-checker) vraagt de ontvangende server of die e-mail accepteert voor een adres. Dat gebeurt voordat je iets verstuurt. De server geeft dezelfde code die de mailer-daemon je later zou sturen. Het verschil is dat er geen e-mail is verstuurd en dat je reputatie geen schade oploopt.

[Bulk e-mailverificatie](/bulk-email-verifier) voert dezelfde controle uit op elk adres in een lijst. [E-mailverificatie](/) stopt backscatter niet, want die e-mails heb jij niet verstuurd. Het stopt wel de mailer-daemon-meldingen die komen van dode adressen op je eigen lijst.
