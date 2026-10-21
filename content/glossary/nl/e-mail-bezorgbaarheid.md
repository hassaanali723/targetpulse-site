---
title: E-mailbezorgbaarheid
description: Wat e-mailbezorgbaarheid betekent, hoe het verschilt van bezorging, wat het beïnvloedt, hoe je het meet en welke stappen het verbeteren.
slug: e-mail-bezorgbaarheid
date: 2026-10-12
updated: 2026-10-12
keyword: e-mail bezorgbaarheid
short: E-mailbezorgbaarheid (email deliverability) gaat over de vraag of je e-mails de inbox bereiken. Een e-mail kan bezorgd zijn en toch in de spammap belanden. Een goede bezorgbaarheid betekent dat de meeste van je e-mails in de inbox aankomen, niet in spam en niet geblokkeerd.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Minder bounces is de eerste stap naar een betere bezorgbaarheid
---

## Wat is e-mailbezorgbaarheid?

E-mailbezorgbaarheid, in het Engels email deliverability, is het vermogen van je e-mails om de inbox te bereiken. Een e-mail die je verstuurt, kan op drie plekken terechtkomen. Hij kan de inbox bereiken. Hij kan in de spammap komen. Of de ontvangende server kan hem weigeren. Dat heet een bounce.

Bezorgbaarheid gaat over de eerste plek, de inbox. De mailboxprovider bepaalt waar elke e-mail terechtkomt. Een mailboxprovider is het bedrijf dat de inbox van de ontvanger host, zoals Gmail, Outlook.com of Yahoo. Elke provider gebruikt een [spamfilter](/glossary/spam-filter) dat deze beslissing voor elke e-mail neemt.

## Bezorging en bezorgbaarheid

Deze twee woorden lijken op elkaar, maar ze meten verschillende dingen. Bezorging telt de e-mails die de ontvangende server heeft geaccepteerd. Bezorgbaarheid kijkt waar die geaccepteerde e-mails terecht zijn gekomen.

Stel dat je 1.000 e-mails naar je klanten stuurt. Dit zijn voorbeeldcijfers.

| Stap | E-mails | Wat het betekent |
| --- | --- | --- |
| Verstuurd | 1.000 | Je hebt op verzenden geklikt |
| Gebouncet | 40 | De ontvangende servers hebben ze geweigerd |
| Bezorgd | 960 | De ontvangende servers hebben ze geaccepteerd |
| In de inbox | 800 | Klanten zien ze in hun inbox |
| In spam | 160 | Klanten zien ze alleen als ze de spammap openen |

Je verzendtool toont een bezorgpercentage van 96 procent. Dat ziet er goed uit. Maar slechts 800 van de 1.000 e-mails bereikten een inbox. Dat is 80 procent [plaatsing in de inbox](/glossary/inbox-placement). Een verzendtool kan niet zien in welke map een e-mail is beland. Daarom meldt hij de 96 procent.

## Wat e-mailbezorgbaarheid beïnvloedt

Providers publiceren hun precieze regels niet. Dit zijn de bekende factoren.

- **Authenticatie.** Of je domein slaagt voor [SPF](/glossary/spf), [DKIM](/glossary/dkim) en [DMARC](/glossary/dmarc). Deze records bewijzen dat de e-mail echt van jou komt.
- **Afzenderreputatie.** Hoeveel providers je domein en je verzendende IP-adres vertrouwen, op basis van je eerdere e-mail. Een IP-adres is het nummer dat een server op internet aanduidt. Zie [afzenderreputatie](/glossary/sender-reputation).
- **Bounces.** Als je mailt naar adressen die niet bestaan, zien providers dat je lijst niet is gecontroleerd.
- **Spamklachten.** Hoe vaak mensen op "Spam melden" klikken. De afzenderrichtlijnen van Google zeggen dat je dit onder 0,10 procent moet houden en nooit 0,30 procent mag bereiken.
- **Kwaliteit van de lijst.** Of mensen om je e-mail hebben gevraagd, en of de lijst [spamvallen (spam traps)](/glossary/spam-trap) bevat.
- **Inhoud.** Links, afbeeldingen en woordkeuze. Inhoud telt minder zwaar dan de factoren hierboven.

## Zo meet je bezorgbaarheid

Je kunt niet in de inbox van andere mensen kijken. Daarom meet je bezorgbaarheid op twee manieren.

**Een seedtest.** Je stuurt je e-mail naar een reeks testinboxen die je zelf beheert, bij Gmail, Outlook.com, Yahoo en andere providers. Daarna kijk je bij elke inbox waar de e-mail is beland. Deze reeks testadressen heet een [seedlijst](/glossary/seed-list).

**Gegevens van de provider.** [Google Postmaster Tools](/glossary/postmaster-tools) is een gratis dienst van Google. Het toont gegevens over de e-mail die je domein naar Gmail-gebruikers stuurt, zoals je spamklachtenpercentage en je authenticatieresultaten. Microsoft heeft een vergelijkbare dienst voor Outlook.com, die SNDS heet.

Let ook op je eigen cijfers. Als het aantal opens bij één provider plotseling daalt, kan dat betekenen dat je e-mail daar in spam is beland.

## Zo verbeter je e-mailbezorgbaarheid

1. Stel SPF, DKIM en DMARC in voor elke dienst die e-mail verstuurt voor je domein.
2. Verifieer je lijst voordat je verstuurt en verwijder adressen die niet bestaan.
3. Mail alleen mensen die erom hebben gevraagd. Koop nooit een lijst.
4. Voeg een duidelijke afmeldlink toe. Google eist afmelden met één klik in marketingmail van afzenders die 5.000 of meer e-mails per dag versturen.
5. Stop met mailen naar mensen die al maanden niets hebben geopend.
6. Begin langzaam met een nieuw domein of een nieuw IP-adres. Zie [e-mail warm-up](/glossary/email-warmup).
7. Houd je klachtenpercentage in Postmaster Tools in de gaten en zoek de oorzaak als het stijgt.

## E-mailbezorgbaarheid en e-mailverificatie

Verificatie verbetert één deel van de bezorgbaarheid, namelijk je bouncepercentage. Een [email checker](/email-checker) vindt adressen die niet bestaan, voordat je ernaar verstuurt. Met [bulk e-mailverificatie](/bulk-email-verifier) doe je dit voor een hele lijst in één upload. Minder bounces beschermen je afzenderreputatie, en die reputatie bepaalt mee of je e-mails de inbox bereiken. Toch lost [e-mailverificatie](/) authenticatie, inhoud of klachten niet op. De andere stappen hierboven blijven dus belangrijk.
