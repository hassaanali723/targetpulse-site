---
title: Spamscore
description: Wat de spamscore van een e-mail is, hoe SpamAssassin punten optelt, wat een score verhoogt, hoe je je spamscore controleert en hoe je hem verlaagt.
slug: spamscore
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: Een spamscore is een getal dat een spamfilter aan een e-mail geeft. Hoe hoger het getal, hoe groter de kans dat de e-mail in de spammap belandt. Elk waarschuwingsteken dat het filter vindt, levert punten op.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Verlaag je bounces, niet alleen je spamscore
---

## Wat is een spamscore?

Een spamscore (spam score) is een getal dat een [spamfilter](/glossary/spam-filter) voor elke e-mail berekent. Een spamfilter is de software die bepaalt of een e-mail in de inbox of in spam terechtkomt. Het filter legt de e-mail naast een lijst met regels. Elke regel die overeenkomt, telt punten op, en een paar regels trekken punten af. Het totaal is de spamscore van de e-mail.

Als de score een vaste grens bereikt, markeert het filter de e-mail als spam. Het bekendste voorbeeld is SpamAssassin, een gratis spamfilter dat veel mailservers gebruiken. Grote providers zoals Gmail en Outlook.com gebruiken hun eigen systemen. Die tonen afzenders geen score.

## Zo werkt een spamscore: een voorbeeld met SpamAssassin

SpamAssassin is een project van de Apache Software Foundation. Standaard markeert het een e-mail als spam als de score 5,0 punten bereikt. De beheerder van elke mailserver kan deze grens aanpassen.

Stel dat een winkel een e-mail verstuurt met deze drie problemen.

- De onderwerpregel is "GRATIS CADEAU!!! KOM NU IN ACTIE".
- De e-mail heeft geen geldige DKIM-handtekening.
- De e-mail is één grote afbeelding met bijna geen tekst.

Drie regels komen overeen. De punten hieronder zijn voorbeeldwaarden ter illustratie. Echte SpamAssassin-regels hebben hun eigen scores, en die veranderen per versie.

| Regel die overeenkwam | Voorbeeldpunten |
| --- | --- |
| Onderwerp staat grotendeels in hoofdletters | 1,5 |
| Geen geldige DKIM-handtekening | 1,0 |
| E-mail is vooral één afbeelding met weinig tekst | 2,0 |
| **Totaal** | **4,5** |

Het totaal is 4,5, dus de e-mail blijft net onder de standaardgrens van 5,0. Nog één regel, zoals een linkverkorter, kan de e-mail over de grens brengen. Dan zou de e-mail in spam terechtkomen.

## Wat een spamscore verhoogt

- **Ontbrekende authenticatie.** Geen [SPF](/glossary/spf)-, [DKIM](/glossary/dkim)- of [DMARC](/glossary/dmarc)-record, of records die niet slagen.
- **Een verzendend IP-adres op een blacklist.** Een IP-adres is het nummer dat een server op internet aanduidt. Veel filters controleren openbare lijsten van bekende spambronnen. Zie [e-mail blacklist](/glossary/email-blacklist).
- **Spamwoorden en ALLES IN HOOFDLETTERS.** Zinnen zoals "kom nu in actie" of "100% gratis", rijen uitroeptekens en onderwerpregels in hoofdletters.
- **Kapotte HTML.** HTML is de code die een e-mail opmaakt. Code met fouten, of code die van een webpagina is gekopieerd, ziet er voor een filter slordig uit.
- **Linkverkorters.** Korte links zoals bit.ly verbergen waar ze naartoe gaan. Filters en lezers wantrouwen ze allebei.

## Spamscore voor websites is iets anders

Je ziet "Spam Score" misschien ook in SEO-tools. SEO betekent zorgen dat een website hoger in de zoekresultaten verschijnt. Moz, een SEO-bedrijf, gebruikt Spam Score om in te schatten hoeveel een website lijkt op sites die Google heeft bestraft. Het is een score voor websites, niet voor e-mails. Het heeft niets te maken met de vraag of je e-mail de inbox bereikt.

## Zo controleer je de spamscore van je e-mail

1. Ga naar mail-tester.com. Je krijgt een testadres te zien.
2. Stuur je echte e-mail naar dat adres, vanuit de tool die je normaal gebruikt.
3. Open de resultatenpagina. Die toont een score op 10 en noemt elk probleem dat is gevonden.
4. Plak je onderwerpregel en je tekst in onze [spam word checker](/spam-word-checker) (in het Engels). Die markeert in je browser riskante woorden, hoofdletters en linkverkorters.

Op mail-tester.com is een hogere score beter. Bij SpamAssassin is een lagere score beter. Lees de lijst met problemen, niet alleen het getal.

## Zo verlaag je je spamscore

1. Stel SPF, DKIM en DMARC in voor je verzenddomein.
2. Controleer of je verzendende IP-adres niet op een blacklist staat. Een tool zoals MXToolbox kan dit doen.
3. Schrijf onderwerpregels in gewone letters. Gebruik hooguit één uitroepteken.
4. Gebruik volledige links naar je eigen domein in plaats van linkverkorters.
5. Verstuur een mix van tekst en afbeeldingen, niet één grote afbeelding.
6. Gebruik schone HTML uit de editor van je e-mailtool, geen code die van een website is gekopieerd.
7. Test opnieuw na elke wijziging.

## Spamscore en e-mailverificatie

[E-mailverificatie](/) verandert je spamscore niet. De score gaat over de inhoud en de instellingen van je e-mail, en een verificatietool komt aan geen van beide. Wat een [email checker](/email-checker) wel doet, is adressen vinden die niet bestaan, voordat je verstuurt. [Bulk e-mailverificatie](/bulk-email-verifier) verwijdert ze uit een hele lijst. Dat vermindert bounces en verwijdert dode adressen voordat ze [spamvallen (spam traps)](/glossary/spam-trap) worden. Bounces en spamvallen beïnvloeden je afzenderreputatie, en grote providers zoals Gmail beslissen vooral op basis van reputatie, niet op basis van een inhoudsscore.
