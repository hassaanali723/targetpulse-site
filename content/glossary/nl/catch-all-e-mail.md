---
title: Catch-all e-mail
description: Wat een catch-all-domein voor e-mail is, waarom bedrijven het instellen, waarom een gewone controle adressen erop niet kan bevestigen en wat je ermee doet.
slug: catch-all-e-mail
date: 2026-10-22
updated: 2026-10-22
keyword: catch all e-mail
short: Een catch-all-domein accepteert e-mail die naar elk adres op dat domein wordt gestuurd, ook naar namen die niet bestaan. Omdat de server op alles ja zegt, kan een gewone e-mailcontrole niet zien of een bepaalde mailbox echt is.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Krijg een echt antwoord voor catch-all-adressen
---

## Wat is een catch-all e-mail?

Een catch-all-domein accepteert e-mail die naar elk adres op dat domein wordt gestuurd. Het adres hoeft niet te bestaan.

De meeste domeinen weigeren e-mail voor een naam die ze niet hebben. Een catch-all-domein doet dat niet. Het accepteert de e-mail en zet die in één gedeelde mailbox, of verwijdert hem soms zonder iemand iets te laten weten.

Andere namen voor dezelfde instelling zijn **accept-all** en **catch-all-domein**. Veel verificatietools labelen deze adressen als "catch-all", "accept-all" of "riskant" (risky).

## Een eenvoudig voorbeeld

1. **Acme stelt een catch-all in.** Acme is een klein bedrijf met het domein acme.example. De officemanager zet catch-all aan, zodat er geen e-mail van klanten verloren gaat.
2. **Sara schrijft naar een echt persoon.** Ze mailt naar jon@acme.example. Jon werkt daar. Hij krijgt de e-mail.
3. **Sara maakt een typefout.** De volgende keer typt ze jonn@acme.example. Zo iemand bestaat niet.
4. **De server zegt toch ja.** De e-mail bouncet niet. Hij komt in de gedeelde mailbox terecht, en misschien leest niemand hem.

Sara ziet geen foutmelding, dus ze denkt dat beide e-mails zijn aangekomen. Maar één e-mail heeft Jon bereikt.

## Waarom bedrijven catch-all gebruiken

Bedrijven zetten catch-all aan om geen e-mail te missen. Klanten maken typefouten. De namen van oud-medewerkers blijven e-mail ontvangen. Een catch-all bewaart alles op één plek.

## Waarom catch-all een probleem is voor e-mailverificatie

Een gewone e-mailcontrole stelt de server één vraag: "Accepteer je e-mail voor dit adres?" Op een catch-all-domein is het antwoord altijd ja. Een echt persoon en een verzonnen naam krijgen hetzelfde antwoord.

Een basiscontrole kan de mailbox dus niet bevestigen. Die kan alleen melden dat het domein alles accepteert.

Dit speelt vooral bij B2B-lijsten. In één gepubliceerde test met 10.000 echte zakelijke e-mailadressen stond 28% op catch-all-domeinen. De test is uitgevoerd door LeadMagic, een bedrijf dat e-mailverificatie verkoopt. Zie het dus als een test van een leverancier.

## Wat je doet met catch-all-adressen

Je hebt drie keuzes:

| Keuze | Wat er gebeurt |
|---|---|
| **Verwijderen** | Geen risico, maar je verliest ook echte contacten |
| **Toch versturen** | Sommige komen bij echte mensen aan, andere gaan verloren of bouncen later |
| **Dieper controleren** | Een verificatietool die verder gaat dan de basiscontrole, scheidt de echte adressen van de nepadressen |

## Hoe een verificatietool helpt

Giggal.ai voert bij elke controle [catch-all-verificatie](/catch-all-verification) uit. Het gebruikt extra signalen om een echt resultaat te geven, bezorgbaar of onbestelbaar, in plaats van het label "riskant". Lees voor een langere gids met meer voorbeelden [wat een catch-all e-mailadres is](/blog/what-is-a-catch-all-email-address).
