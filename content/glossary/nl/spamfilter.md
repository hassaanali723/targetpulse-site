---
title: Spamfilter
description: Wat een spamfilter controleert voordat het je e-mail bezorgt, in spam zet of weigert, hoe een weigering verschilt van de spammap en de spamlimieten van Google.
slug: spamfilter
date: 2026-09-29
updated: 2026-10-12
keyword: spamfilter
short: Een spamfilter is het systeem dat een mailboxprovider gebruikt om te bepalen waar een binnenkomende e-mail heen gaat. Het kan de e-mail naar de inbox of de spammap sturen, of weigeren. Het controleert de afzender, de inhoud van de e-mail en hoe eerdere ontvangers reageerden op e-mails van die afzender.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Mail naar echte adressen, dan hebben spamfilters minder tegen je
---

## Wat is een spamfilter?

Een spamfilter is een systeem dat elke binnenkomende e-mail controleert en bepaalt wat ermee gebeurt. Het kan de e-mail in de inbox bezorgen, naar de spammap verplaatsen of weigeren. Spam is ongewenste bulkmail.

Elke mailboxprovider heeft een spamfilter. Een mailboxprovider is een bedrijf of server die inboxen beheert. Gmail, Outlook.com en Yahoo hebben er een. Bedrijfsmailservers achter een [secure email gateway (SEG)](/glossary/secure-email-gateway) hebben er ook een. Een secure email gateway is een beveiligingsgateway voor e-mail: een beveiligingsdienst die de e-mail van een bedrijf controleert voordat die de inbox van medewerkers bereikt.

De beslissing valt op een van twee momenten.

**Tijdens de SMTP-verbinding.** SMTP is de standaardmanier waarop mailservers e-mail naar elkaar sturen. De ontvangende server kan de e-mail weigeren voordat hij hem accepteert. Je krijgt dan een bounce met een `5.7.x`-code. Een bounce is het automatische bericht dat je vertelt dat een e-mail niet is bezorgd. Voorbeelden: `550 5.7.1` van Gmail voor een blokkade vanwege beleid, of `550 5.7.28` voor een ongewoon grote hoeveelheid ongewenste e-mail vanaf je IP-adres. Een IP-adres is het nummer dat je verzendende server aanduidt. De e-mail bereikt de mailbox nooit.

**Nadat de e-mail is geaccepteerd.** De server accepteert de e-mail en zet hem daarna in de inbox, het tabblad Reclame of de spammap. Je krijgt geen bounce. De enige signalen zijn lagere openpercentages en de gegevens in [Google Postmaster Tools](/glossary/postmaster-tools).

## Een eenvoudig voorbeeld

Zo kan een spamfilter een normaal aanbod naar de spammap sturen. De cijfers zijn alleen een voorbeeld.

1. **Een sportschool stuurt een aanbieding.** City Gym mailt een kortingsaanbod naar 8.000 leden.
2. **Het filter controleert de afzender.** De SPF-, DKIM- en DMARC-records van de sportschool slagen. De e-mail komt echt van de sportschool.
3. **Het filter controleert de geschiedenis van de sportschool.** Vorige maand mailde de sportschool een oude lijst. Veel van die adressen bestonden niet, en de e-mails bouncten.
4. **Het filter kijkt hoe mensen eerder reageerden.** Veel leden hebben het vorige aanbod verwijderd zonder het te openen. Sommigen klikten op "spam melden".
5. **Het filter beslist.** Het filter zet het nieuwe aanbod bij veel leden in de spammap.
6. **De sportschool krijgt geen foutmelding.** Er komt geen bounce terug. De sportschool ziet alleen een lager openpercentage.

De woorden in het aanbod waren niet het probleem. De lijst wel.

## Wat het filter controleert

Providers publiceren hun precieze regels niet. Dit zijn de bekende factoren:

- **Authenticatie.** Of [SPF](/glossary/spf), [DKIM](/glossary/dkim) en [DMARC](/glossary/dmarc) slagen. Dit zijn records op je domein die bewijzen dat een e-mail echt van jou komt. Google en Microsoft weigeren nu bulkmail die niet slaagt voor deze controles.
- **Reputatie.** De verzendgeschiedenis van je domein en je IP-adres. Je domein is het deel van je adres na de @. Zie [domeinreputatie](/glossary/domain-reputation) en [IP-reputatie](/glossary/ip-reputation).
- **Klachten.** Hoe vaak ontvangers op "spam melden" klikken. De richtlijnen van Google zeggen dat je het klachtenpercentage in Postmaster Tools onder 0,10 procent moet houden en nooit 0,30 procent mag bereiken. 0,10 procent is bijvoorbeeld 10 klachten op 10.000 e-mails.
- **Bounces.** Hoe vaak je mailt naar adressen die niet bestaan. Een lijst met veel dode adressen lijkt op een lijst die is gekocht of gescrapet. Gescrapet betekent dat een programma de adressen van websites heeft gekopieerd.
- **Betrokkenheid.** Of mensen je e-mails openen, erop antwoorden, ze ongelezen verwijderen of naar een andere map verplaatsen.
- **Inhoud.** Links, bijlagen, afbeeldingen en tekstpatronen die lijken op bekende spam. Inhoud telt minder zwaar dan vroeger. Reputatie en authenticatie tellen zwaarder.

## Waarom afzenders worden gefilterd

Het meeste filteren komt niet door de woorden in de e-mail. Het komt door de lijst. Dode adressen veroorzaken bounces. Mensen die niet om je e-mail hebben gevraagd, veroorzaken klachten. Beide problemen komen van adressen die nooit zijn gecontroleerd.

**Voorbeeld:** een bedrijf verandert "GRATIS" in "gratis" in elke onderwerpregel, maar blijft mailen naar een oude, ongecontroleerde lijst. De e-mails komen nog steeds in spam, omdat de lijst de oorzaak is.

## Hoe een verificatietool helpt

Een verificatietool heeft geen contact met spamfilters. Hij verwijdert de adressen die bounces en klachten veroorzaken. Haal je lijst door een [email checker](/email-checker) voordat je verstuurt. Die verwijdert mailboxen die niet meer bestaan. Hij verwijdert ook wegwerp e-mailadressen en rol-adressen zoals info@, die meer klachten opleveren. De gids over het [bouncepercentage van e-mail](/blog/how-to-reduce-email-bounce-rate) laat zien hoe groot dit deel van een lijst meestal is.

Gebruik voor een grote lijst [bulk e-mailverificatie](/bulk-email-verifier). [E-mailverificatie](/) kan een spamfilter niet dwingen je e-mail te accepteren. Het neemt één oorzaak van filtering weg: mailen naar adressen die niet bestaan.
