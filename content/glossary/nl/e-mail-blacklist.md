---
title: E-mail blacklist
description: Wat een e-mail blacklist is, hoe IP- en domeinblacklists verschillen, hoe afzenders erop komen, hoe je je IP of domein controleert en hoe je eraf komt.
slug: e-mail-blacklist
date: 2026-10-12
updated: 2026-10-12
keyword: email blacklist
short: Een e-mail blacklist is een openbare lijst van IP-adressen of domeinen waarvan bekend is dat ze spam versturen. Ontvangende mailservers controleren deze lijsten en blokkeren of filteren e-mail van afzenders die erop staan. Spamhaus beheert een aantal van de bekendste lijsten.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Verwijder dode adressen die naar spamvallen en blacklists leiden
---

## Wat is een e-mail blacklist?

Een e-mail blacklist, of zwarte lijst, is een lijst van afzenders waarvan bekend is dat ze spam versturen. Een afzender kan op de lijst staan met zijn IP-adres of met zijn domein. Een IP-adres is het nummer dat een server op internet aanduidt. Een domein is de naam na de @ in een e-mailadres, zoals example.com.

Organisaties zoals Spamhaus stellen deze lijsten samen en publiceren ze. Mailservers bij bedrijven en e-mailproviders controleren elke binnenkomende e-mail met een of meer lijsten. Als de afzender op een lijst staat, kan de server de e-mail weigeren of naar spam sturen.

De meeste blacklists worden gepubliceerd via DNS, het openbare registersysteem van internet. Een lijst die op deze manier wordt gepubliceerd, heet een [DNSBL](/glossary/dnsbl).

## Een voorbeeld: e-mails beginnen te bouncen

Een bedrijf dat Orbit heet, verstuurt facturen vanaf een eigen mailserver. Op een maandag zeggen veel klanten dat ze hun factuur nooit hebben gekregen. Kofi beheert de IT van Orbit en leest de bounceberichten. Een aantal ervan zegt ongeveer dit:

`554 5.7.1 Service unavailable; Client host [192.0.2.25] blocked using zen.spamhaus.org`

Het bericht noemt Spamhaus. Kofi zoekt het IP-adres `192.0.2.25` op op de website van Spamhaus. Het staat op de lijst. Daarna vindt hij de oorzaak. In het weekend is het account van een medewerker gehackt en gebruikt om duizenden spammails te versturen.

Kofi wijzigt het wachtwoord en stopt de spam. Daarna vraagt hij Spamhaus om de vermelding te verwijderen. Zodra die is verwijderd, worden de facturen van Orbit weer bezorgd.

## IP-blacklists en domeinblacklists

| Type | Wat op de lijst staat | Wat de ontvangende server controleert |
| --- | --- | --- |
| IP-blacklist | Het IP-adres van een verzendende server | De server die verbinding maakt om de e-mail te bezorgen |
| Domeinblacklist | Een domeinnaam | Domeinen in het afzenderadres en in links in de e-mail |

Spamhaus beheert beide soorten. De Domain Blocklist, de DBL, bevat domeinen. De andere lijsten van Spamhaus, zoals de SBL en de XBL, bevatten IP-adressen.

## Blacklist of blocklist?

Beide woorden betekenen hetzelfde. Spamhaus gebruikt nu het woord "blocklist". Veel tools en mensen zeggen nog steeds "email blacklist". Je ziet soms ook "denylist". Zie [blocklist](/glossary/blocklist).

## Hoe afzenders op een blacklist komen

- **Spamvallen.** Je mailt naar een [spamval (spam trap)](/glossary/spam-trap). Dat is een adres dat alleen bestaat om afzenders met slechte lijsten te betrappen. Oude en gekochte lijsten bevatten ze.
- **Spamklachten.** Veel ontvangers markeren je e-mail als spam.
- **Een gehackt account of een gehackte server.** Iemand neemt een account over en verstuurt er spam mee, zoals in het voorbeeld van Orbit.
- **Plotseling veel e-mail vanaf een nieuw IP-adres.** Een nieuw IP-adres dat in één keer veel e-mail verstuurt, lijkt op wat spammers doen.
- **Een besmette computer.** Schadelijke software op een computer op je kantoor verstuurt spam via je netwerk.

## Zo controleer je of je op een e-mail blacklist staat

1. Zoek je verzendende IP-adres en je domein op. Je ESP of je IT-team kan je die geven.
2. Vul ze in bij een blacklist checker zoals MXToolbox. Die controleert veel lijsten tegelijk.
3. Als een lijst aangeeft dat je erop staat, ga dan naar de website van die lijst. Bevestig de vermelding en lees de reden.
4. Lees je bounceberichten. Een blokkeerbericht noemt vaak de lijst, zoals in het voorbeeld van Orbit.

Niet elke lijst heeft hetzelfde effect. Sommige kleine lijsten worden door weinig mailservers gebruikt. Een vermelding bij Spamhaus weegt zwaarder, omdat veel mailservers Spamhaus controleren.

## Zo kom je van een blacklist af

1. **Los eerst de oorzaak op.** Wijzig gehackte wachtwoorden, maak besmette computers schoon of stop met mailen naar slechte lijsten. Als de oorzaak blijft, kom je opnieuw op de lijst.
2. **Gebruik de verwijderpagina van de lijst.** De meeste lijsten hebben een formulier om verwijdering aan te vragen. Dat heet vaak delisting.
3. **Leg uit wat je hebt opgelost.** Sommige lijsten vragen wat er is gebeurd en wat je hebt veranderd.
4. **Wacht op het resultaat.** Sommige lijsten verwijderen je automatisch na een periode zonder spam. Andere handelen op basis van je verzoek.
5. **Houd je verzending daarna in de gaten.** Controleer een paar weken lang je bounceberichten en de blacklist checker.

## E-mail blacklists en e-mailverificatie

Spamvallen zijn een van de manieren waarop afzenders op een blacklist komen. Je vindt ze tussen oude, gekochte of verkeerd getypte adressen. Een [email checker](/email-checker) vindt adressen die niet meer bestaan, voordat ze worden hergebruikt als spamval. [Bulk e-mailverificatie](/bulk-email-verifier) doet dit voor een hele lijst en markeert ook adressen met een verkeerd getypt domein. Verificatie kan niet elke spamval herkennen, want sommige spamvallen zijn werkende mailboxen. Maar regelmatige [e-mailverificatie](/) verwijdert dode adressen. Zo daalt je aantal bounces en je risico om naar een hergebruikte spamval te mailen.
