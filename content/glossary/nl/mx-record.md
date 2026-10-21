---
title: MX-record
description: Wat een MX-record is, hoe servers ermee bepalen waar e-mail heen gaat, wat het prioriteitsnummer is en wat een ontbrekend MX-record een verificatietool vertelt.
slug: mx-record
date: 2026-09-29
updated: 2026-10-12
keyword: mx record
short: Een MX-record is een instelling van een domein die aangeeft welke server de e-mail voor dat domein ontvangt. Als je mailt naar name@example.com, zoekt je mailserver het MX-record van example.com op om te zien waar de e-mail heen moet.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Controleer of een adres e-mail kan ontvangen
---

## Wat is een MX-record?

Een MX-record is een instelling van een domein die aangeeft welke server de e-mail van dat domein ontvangt. MX staat voor mail exchanger.

Eerst een paar begrippen. Een domein is een naam zoals example.com. Het is ook het deel van een e-mailadres na de @. Een server is een computer die altijd aanstaat en e-mail afhandelt. DNS is het openbare register dat domeinnamen aan servers koppelt. Elke regel in DNS heet een record. Een MX-record is dus één soort DNS-record.

De MX-records van een domein noemen de servers die inkomende e-mail voor dat domein accepteren. Iedereen kan ze opzoeken.

Een domein kan meer dan één MX-record hebben. Elk MX-record heeft een prioriteitsnummer. Servers met een lager nummer worden eerst geprobeerd. Dit is een gebruikelijke opzet voor een Google Workspace-domein:

| prioriteit | mailserver |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Als de server met prioriteit 1 niet antwoordt, probeert de verzendende server de volgende.

## Een eenvoudig voorbeeld

Dit gebeurt er met één e-mail.

1. **Omar schrijft een e-mail.** Omar wil zijn boekhouder mailen op name@example.com. Hij klikt op Verzenden.
2. **Zijn mailserver leest het domein.** De server ziet dat het adres eindigt op example.com.
3. **De server zoekt het MX-record op.** Hij vraagt aan DNS welke server e-mail ontvangt voor example.com.
4. **DNS antwoordt.** Het MX-record van example.com zegt: mail.example.com, prioriteit 10.
5. **De server bezorgt de e-mail.** De mailserver van Omar maakt verbinding met mail.example.com en geeft de e-mail af.
6. **De boekhouder ontvangt hem.** De e-mail komt aan in de inbox van de boekhouder.

Omar ziet deze stappen nooit. Zijn mailserver doet ze voor hem. Maar zonder MX-record in stap 4 zou de e-mail nergens heen kunnen.

## Hoe e-mail MX-records gebruikt

Als je mailt naar `name@example.com`, doet je mailserver drie dingen:

1. Hij zoekt de MX-records van `example.com` op.
2. Hij maakt verbinding met de server met het laagste prioriteitsnummer.
3. Hij geeft de e-mail af via SMTP. SMTP is de standaardmanier waarop mailservers e-mail naar elkaar sturen.

RFC 5321, de e-mailstandaard, beschrijft dit proces. Die behandelt ook domeinen zonder MX-record. Als het domein een normaal A-record heeft, behandelen mailservers dat record als het MX-record. Een A-record is een DNS-record dat een domeinnaam koppelt aan het nummer van één server, het IP-adres.

## Wat een MX-record je vertelt over een adres

Het MX-record is de eerste echte controle bij e-mailverificatie. De syntaxcontrole komt ervoor. De syntaxcontrole kijkt alleen naar de vorm, bijvoorbeeld of het adres één @ heeft en geen spaties.

Het opzoeken van het MX-record heeft drie mogelijke uitkomsten:

- **Geen MX-record en geen A-record.** Het domein kan geen e-mail ontvangen. Elk adres op dat domein is ongeldig. **Voorbeeld:** iemand typt een bekend domein zoals gmail.com met twee letters omgewisseld. Zo'n typefout loopt meestal bij deze stap vast.
- **Er is een MX-record.** Het domein kan e-mail ontvangen. Dit zegt niet of de specifieke mailbox bestaat. Daarvoor is de volgende stap nodig: een SMTP-gesprek met de server. **Voorbeeld:** example.com heeft een MX-record, maar dat bewijst niet dat de mailbox anna@example.com echt is.
- **Het MX-record verwijst naar een bekende gateway.** Als de mailserver van Proofpoint, Mimecast of Barracuda is, gebruikt het domein een [secure email gateway (SEG)](/glossary/secure-email-gateway), een beveiligingsgateway voor e-mail. Zo'n gateway is een beveiligingsdienst die de e-mail van een bedrijf controleert voordat die de inbox van medewerkers bereikt. De mailboxcontrole werkt anders op deze domeinen.

## Waarom het belangrijk is voor afzenders

Iedereen kan het MX-record van een domein lezen met een DNS-opzoeking. Onze gratis tool [MX lookup](/mx-lookup) (in het Engels) toont de MX-records van elk domein. Als een bedrijf overstapt naar een andere e-mailprovider of stopt, veranderen de MX-records of verdwijnen ze. De adressen werken dan niet meer. Niemand laat je dat weten. Dit is een veelvoorkomende oorzaak van [hard bounces](/glossary/hard-bounce) op oude lijsten. Een hard bounce is een e-mail die definitief wordt geweigerd.

**Voorbeeld:** je hebt in 2021 op een beurs 40 mensen van old-firm.example ontmoet. Het bedrijf sluit in 2024, en het domein heeft geen MX-record meer. Elke e-mail die je naar die 40 contacten stuurt, bouncet nu.

## Hoe een verificatietool ermee omgaat

Een [email verifier](/email-checker) zoekt eerst het MX-record op. Als er geen MX-record is, wordt het adres als ongeldig gemarkeerd en volgen er geen controles meer. Als er wel een MX-record is, maakt de verificatietool verbinding met die server en vraagt of de mailbox bestaat. Het opzoeken van het MX-record vertelt de tool ook wat voor server het is. Dat is belangrijk voor [catch-all-domeinen](/glossary/catch-all-email) en gateways.

[Bulk e-mailverificatie](/bulk-email-verifier) zoekt hetzelfde MX-record op voor elk domein op je lijst. [E-mailverificatie](/) gebruikt het MX-record om domeinen te vinden die geen e-mail kunnen ontvangen, voordat je ernaar verstuurt. Het verandert niets in je eigen DNS.
