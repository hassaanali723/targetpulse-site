---
title: Hard bounce
description: Wat een hard bounce is, welke codes op een hard bounce wijzen, de twee soorten hard bounce en wat je met elke soort doet.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: hard bounce
short: Een hard bounce is een e-mail die de ontvangende server definitief heeft geweigerd. Het adres bestaat niet, het domein bestaat niet, of de server heeft je e-mail geblokkeerd. Als je dezelfde e-mail opnieuw verstuurt, mislukt hij opnieuw.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Vind de adressen die een hard bounce zouden geven, voordat je verstuurt
---

## Wat is een hard bounce?

Een hard bounce is een e-mail die niet is bezorgd en ook nooit bezorgd wordt. De ontvangende server heeft hem geweigerd. Als je hem opnieuw verstuurt, weigert de server hem opnieuw.

Eerst een paar begrippen. Een server is een computer die altijd aanstaat en e-mail afhandelt voor een domein. Het domein is het deel van een adres na de @, zoals example.com. Een bounce is het automatische bericht dat je vertelt dat een e-mail niet is bezorgd.

Elk bouncebericht bevat een code. De e-mailstandaard RFC 5321 noemt een hard bounce een permanent negatief antwoord. De code begint met 5. Voorbeeld: `550 5.1.1`. Een code die met 4 begint, is een [soft bounce](/glossary/soft-bounce). Een soft bounce is tijdelijk, dus een latere poging kan wel lukken.

## Een eenvoudig voorbeeld

Zo ontstaat een hard bounce op een normale lijst.

1. **Tom verzamelt een adres.** Tom heeft een kleine online boekwinkel. In 2022 meldt een klant zich aan met ben@company.example.
2. **De klant verlaat zijn baan.** In 2025 vertrekt Ben bij Company Ltd. Het bedrijf sluit zijn mailbox.
3. **Tom verstuurt een nieuwsbrief.** Zijn verzendtool stuurt de nieuwsbrief naar ben@company.example.
4. **De server weigert hem.** De mailserver van company.example heeft geen mailbox meer voor Ben. Hij antwoordt met de code `550 5.1.1`.
5. **Tom krijgt een bouncebericht.** Zijn verzendtool noteert een hard bounce voor dat adres.
6. **Tom verwijdert het adres.** De oude mailbox van Ben komt niet terug. Opnieuw versturen zou alleen opnieuw mislukken.

Tom deed niets verkeerd toen hij het adres verzamelde. In 2022 was het echt. Het werkte later niet meer, en niemand vertelde het hem.

## De twee soorten hard bounce

Beide soorten verschijnen als "hard bounce" in je campagnerapport. Ze hebben verschillende oorzaken en verschillende oplossingen.

### Soort 1: het adres is slecht

De mailbox bestaat niet, het domein bestaat niet, of het adres bevat een spelfout. Een adres dat is gesloten toen een medewerker het bedrijf verliet, zoals dat van Ben, hoort ook in deze groep.

De grote providers zeggen het op hun eigen manier:

- Gmail geeft `550 5.1.1 The email account that you tried to reach does not exist` terug.
- Microsoft geeft `5.1.1 Bad destination mailbox address` terug.

**Voorbeeld:** een klant wil anna@example.com typen, maar typt ana@example.com. Er bestaat geen mailbox met de naam "ana". De server geeft een hard bounce terug.

### Soort 2: je e-mail wordt geblokkeerd

Het adres is echt, maar de server weigert e-mail van jou. Deze codes beginnen met `5.7`.

- `550 5.7.26` van Gmail betekent dat je domein niet geauthenticeerd is. Authenticatie betekent records op je domein die bewijzen dat een e-mail echt van jou komt.
- `5.7.23` van Microsoft betekent dat je e-mail niet slaagde voor de SPF-controle. SPF is een van die records. Het noemt de servers die e-mail mogen versturen voor je domein.

Je verzendtool telt deze als hard bounces, omdat de code met 5 begint. Maar het adres is in orde. Het probleem zit in je eigen e-mailinstellingen.

**Voorbeeld:** Maria richt een nieuw domein in, maria-design.example. Ze mailt een klant bij Gmail voordat ze authenticatierecords heeft toegevoegd. Gmail geeft `550 5.7.26` terug. Het adres van de klant werkt. De instellingen van Maria moeten worden aangepast.

## Waarom hard bounces belangrijk zijn

Mailboxproviders zijn de bedrijven die inboxen beheren, zoals Google en Microsoft. Ze tellen hoe vaak je mailt naar adressen die niet bestaan. Veel hard bounces vertellen hun dat je lijst niet is gecontroleerd.

Verzenddiensten houden dit getal ook in de gaten. Het bouncepercentage is het deel van je e-mails dat bouncet. 50 bounces op 1.000 e-mails is bijvoorbeeld een bouncepercentage van 5 procent. Amazon SES, de dienst van Amazon om e-mail te versturen, publiceert zijn limieten:

| Bouncepercentage | Wat Amazon SES doet |
|---|---|
| Onder 2 procent | Dit is het niveau dat Amazon SES aanraadt |
| 5 procent | Het account wordt gecontroleerd |
| 10 procent | Het account kan worden gepauzeerd |

Eén hard bounce is dus geen probleem. Een lijst vol dode adressen wel.

## Wat je doet met een hard bounce

Lees eerst de code in het bouncebericht. De code vertelt je welke soort hard bounce je hebt.

1. **De code is `5.1.1`, `5.1.2` of een andere adresfout.** Verwijder het adres nu van je lijst. Mail er niet meer naartoe. Mailchimp verwijdert deze adressen automatisch uit je doelgroep. Amazon zegt tegen afzenders dat ze ze "onmiddellijk" moeten verwijderen.
2. **De code begint met `5.7`.** Houd het adres. Herstel je SPF-, DKIM- en DMARC-records, of je afzenderreputatie. Je afzenderreputatie is hoe providers je beoordelen op basis van wat je eerder hebt verstuurd. Mail daarna opnieuw naar hetzelfde adres.

De volledige tabel met codes en wat je met elke code doet, staat in de gids [hard bounce en soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Hoe een verificatietool ermee omgaat

Een verificatietool stelt de ontvangende server dezelfde vraag voordat je verstuurt. Een [email verifier](/email-checker) maakt verbinding met de mailserver. Hij vraagt of de server e-mail accepteert voor precies dat adres, en hij stopt voordat er een e-mail wordt verstuurd. Als de server `550 5.1.1` antwoordt, markeert de verificatietool het adres als ongeldig. Je verwijdert het voor de campagne. Er is geen e-mail verstuurd, dus je reputatie loopt geen schade op.

Om een hele lijst in één keer te controleren, upload je hem voor [bulk e-mailverificatie](/bulk-email-verifier). [E-mailverificatie](/) vindt problemen van soort 1: adressen die niet bestaan. Het kan een hard bounce van soort 2 niet voorkomen, omdat die uit je eigen e-mailinstellingen komt.
