---
title: Backscatter
description: Wat backscatter is, waarom je bouncemeldingen krijgt voor e-mails die je nooit hebt verstuurd, of je account is gehackt en hoe je het op je eigen domein stopt.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter e-mail
short: Backscatter zijn bouncemeldingen die je krijgt voor e-mails die je nooit hebt verstuurd. Een spammer heeft jouw adres in het afzenderveld van zijn e-mails gezet. Toen die e-mails mislukten, kwamen de bouncemeldingen bij jou terug.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Houd je eigen bounces laag met een schone lijst
---

## Wat is backscatter?

Backscatter zijn bouncemeldingen die je krijgt voor e-mails die je nooit hebt verstuurd.

Het begint met spam. Een spammer verstuurt duizenden e-mails en typt jouw adres in het afzenderveld. Veel van die e-mails gaan naar adressen die niet bestaan. De ontvangende servers sturen een bouncemelding terug naar het afzenderadres. Dat adres is het jouwe, dus de bounces komen in jouw inbox terecht.

Een bouncemelding is het automatische bericht dat een server stuurt als een e-mail niet kan worden bezorgd. De officiële naam is een [onbestelbaarheidsrapport](/glossary/ndr).

## Een eenvoudig voorbeeld

Zo komt backscatter bij een klein bedrijf terecht.

1. **Lena heeft een bloemenwinkel.** Haar adres is hello@flowers.example.
2. **Een spammer kopieert haar adres.** De spammer verstuurt 10.000 nepmails. In elke e-mail staat dat hij van hello@flowers.example komt.
3. **Veel e-mails mislukken.** Ongeveer een derde gaat naar adressen die niet bestaan.
4. **Sommige servers accepteren eerst en controleren later.** Deze servers nemen de e-mail aan en ontdekken daarna dat de mailbox niet bestaat.
5. **De bounces gaan naar Lena.** Die servers sturen bouncemeldingen naar hello@flowers.example.
6. **De inbox van Lena loopt vol.** Op een ochtend vindt ze honderden "Undeliverable"-berichten voor e-mails die ze nooit heeft geschreven.

Deze cijfers zijn alleen een voorbeeld. Het patroon komt vaak voor.

## Is mijn account gehackt?

Meestal niet. Om een e-mail met een nep-afzenderadres te versturen, heb je geen toegang tot jouw account nodig. Het is alsof iemand het retouradres van een ander op een envelop schrijft. Daar was de sleutel van die ander niet voor nodig.

Kijk in je map Verzonden. Staan de e-mails daar niet in, dan heeft je account ze niet verstuurd. Staan ze er wel in, verander dan je wachtwoord en zet verificatie in twee stappen aan.

## Waarom het gebeurt

Backscatter ontstaat doordat sommige servers een e-mail eerst accepteren en het adres later controleren. Als de controle mislukt, sturen ze een bounce naar het afzenderadres. Ze kunnen niet weten dat het afzenderadres nep was.

Goed ingestelde servers controleren het adres terwijl de andere server nog verbonden is. Als het adres niet bestaat, weigeren ze de e-mail meteen. Er ontstaat dan geen bouncemelding, dus er komt bij niemand backscatter aan.

## Zo stop je het op je domein

Je kunt spammers niet tegenhouden als ze jouw adres typen. Je kunt er wel voor zorgen dat ontvangende servers hun nepmails weigeren. Dat doe je met drie records op je domein.

| Record | Wat het doet |
|---|---|
| [SPF](/glossary/spf) | Noemt de servers die e-mail mogen versturen voor je domein |
| [DKIM](/glossary/dkim) | Voegt een handtekening toe die bewijst dat een e-mail echt van jou komt |
| [DMARC](/glossary/dmarc) | Vertelt ontvangende servers wat ze moeten doen met e-mails die voor die controles zakken |

Begin DMARC met `p=none` en lees de rapporten. Als alleen je eigen diensten slagen, ga dan naar `p=quarantine` en daarna naar `p=reject`. Met `p=reject` weigeren servers de nepmails, in plaats van ze als bounce naar jou terug te sturen.

Tot die tijd kun je de bouncemeldingen met een filter in een aparte map zetten. Beantwoord ze niet.

## Waarom serverbeheerders erom geven

Beheer je een mailserver? Controleer dan hoe die omgaat met onbekende adressen. Een server die e-mail accepteert en later laat bouncen, stuurt backscatter naar onschuldige mensen. Sommige blocklists vermelden servers die dit doen, bijvoorbeeld de lijst op backscatterer.org. Als je op een blocklist staat, kan dat de bezorging van je eigen e-mail tegenhouden.

## Hoe een verificatietool helpt

[E-mailverificatie](/) stopt backscatter niet, want je hebt die e-mails niet verstuurd. Het helpt wel bij de bounces die je zelf veroorzaakt. Verwijder dode adressen van je eigen lijst voordat je verstuurt. Dan is elke bounce in je inbox er een die je kunt verklaren.
