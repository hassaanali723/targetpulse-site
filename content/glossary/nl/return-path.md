---
title: Return-Path
description: Wat het Return-Path-adres is, hoe het verschilt van het From-adres, waar bouncemeldingen heen gaan en waarom SPF en DMARC het controleren. Met een eenvoudig voorbeeld.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: Het Return-Path is het adres waar bouncemeldingen heen gaan. De verzendende server stelt het in, en het is vaak anders dan het From-adres dat je in je inbox ziet. SPF controleert het domein in het Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Verwijder dode adressen voordat ze bouncen
---

## Wat is het Return-Path?

Het Return-Path is het adres waar bouncemeldingen heen gaan. Een bouncemelding is het automatische bericht dat een server stuurt als een e-mail niet kan worden bezorgd.

Elke e-mail heeft twee afzenderadressen. Het eerste is het **From**-adres. Dit is de naam en het adres die de lezer in de inbox ziet. Het tweede is het **Return-Path**. Lezers zien het niet. Mailservers gebruiken het.

Denk aan een papieren brief. Bovenaan de brief in de envelop staat jouw naam. Dat is het From-adres. Op de envelop staat in de hoek een retouradres. Het postbedrijf gebruikt dat alleen als het de brief niet kan bezorgen. Dat is het Return-Path.

Het Return-Path heet ook de envelopafzender (envelope sender) of het bounce-adres. De verzendende server geeft het aan het begin van de bezorging door aan de ontvangende server. De ontvangende server schrijft het daarna in een regel bovenaan de e-mail die begint met `Return-Path:`.

## Een eenvoudig voorbeeld

Zo werkt het Return-Path als een e-mail bouncet.

1. **Tom verstuurt een nieuwsbrief.** Tom heeft een bakkerij. Hij verstuurt elke maand een nieuwsbrief via een e-mailserviceprovider. Een provider is een bedrijf dat bulkmail voor je verstuurt.
2. **Er worden twee adressen ingesteld.** Het From-adres is tom@bakery.example. De provider stelt het Return-Path in op zijn eigen bounce-adres, bijvoorbeeld bounces@mail.provider.example.
3. **Eén klant is vertrokken.** Een klant op de lijst heeft een andere baan. Haar oude adres bestaat niet meer.
4. **De bounce gaat naar het Return-Path.** De ontvangende server stuurt de bouncemelding naar bounces@mail.provider.example, niet naar Tom.
5. **De provider handelt het af.** De provider leest de bounce en stopt met versturen naar dat adres. Tom ziet de melding nooit.

Daarom komen bounces van nieuwsbrieven vaak niet in je eigen inbox. Ze gaan naar het Return-Path, en je provider handelt ze af.

## Return-Path vs From-adres

| | From-adres | Return-Path |
|---|---|---|
| **Wie het ziet** | De lezer, in de inbox | Mailservers |
| **Wie het instelt** | Jij, of je e-mailprogramma | De verzendende server |
| **Waarvoor het dient** | Laten zien wie de e-mail heeft verstuurd | Bouncemeldingen ontvangen |
| **Gecontroleerd door SPF** | Nee | Ja |

De twee adressen kunnen hetzelfde zijn. Als je een gewone e-mail verstuurt vanuit Gmail of Outlook, is dat meestal zo. Als je via een provider verstuurt, zijn ze meestal verschillend.

## Zo vind je het Return-Path van een e-mail

Open de volledige headers van de e-mail. Open in Gmail de e-mail, klik op de drie puntjes en kies **Origineel weergeven**. Open in Outlook de eigenschappen van het bericht. Zoek bovenaan naar een regel zoals deze:

`Return-Path: <bounces@mail.provider.example>`

## Waarom het belangrijk is voor SPF en DMARC

[SPF](/glossary/spf) is een regel op je domein die de servers noemt die jouw e-mail mogen versturen. SPF controleert het domein in het Return-Path. Het controleert het From-adres niet.

[DMARC](/glossary/dmarc) voegt een tweede test toe. Het kijkt of het domein dat voor SPF slaagde, overeenkomt met het domein in het From-adres. Gebruikt je provider zijn eigen domein in het Return-Path? Dan kan SPF slagen voor de provider, terwijl het niet overeenkomt met jouw From-domein.

Veel providers laten je een Return-Path op je eigen domein instellen. Dit heet vaak een eigen bouncedomein (custom bounce domain). Daarmee slaagt SPF voor je eigen domein, en kan DMARC dat resultaat meetellen.

**Voorbeeld:** het From-adres van Tom staat op bakery.example. Zijn provider laat hem het Return-Path instellen op bounces.bakery.example. Nu komt het domein dat voor SPF slaagt overeen met het domein in het From-adres.

## Hoe een verificatietool helpt

Elke bounce van je lijst gaat naar het Return-Path. Je provider telt ze. Als er te veel terugkomen, pauzeren veel providers je account of vragen ze je de lijst op te schonen.

Een [email checker](/email-checker) vraagt de ontvangende server of een adres bestaat, voordat je iets verstuurt. Dode adressen worden eerst verwijderd, dus er komen veel minder bounces bij het Return-Path aan.
