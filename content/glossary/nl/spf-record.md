---
title: SPF-record
description: Wat een SPF-record is, hoe het eruitziet, hoe ontvangende servers het controleren, de limiet van tien DNS-opzoekingen en de bouncecodes als de controle mislukt.
slug: spf-record
date: 2026-09-29
updated: 2026-10-12
keyword: spf record
short: Een SPF-record is een regel tekst op je domein die de servers noemt die e-mail mogen versturen voor dat domein. Ontvangende servers controleren het om te bevestigen dat een e-mail die zegt van jouw domein te komen, door een van jouw servers is verstuurd.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: Authenticatie lost het ene soort bounce op. Verificatie lost het andere op
---

## Wat is een SPF-record?

Een SPF-record is een regel tekst op je domein die de servers noemt die e-mail mogen versturen voor dat domein. SPF staat voor Sender Policy Framework. Het is vastgelegd in RFC 7208.

Eerst een paar begrippen. Een domein is de naam na de @ in een e-mailadres, zoals example.com. Een server is een computer die e-mail verstuurt of ontvangt. DNS is het openbare register waarin een domein zijn instellingen publiceert. Elke instelling heet een record. Een SPF-record is een [DNS TXT-record](/glossary/dns-txt-record). Dat is een DNS-record met platte tekst.

Een eenvoudig SPF-record ziet er zo uit:

`v=spf1 include:_spf.google.com -all`

Elk onderdeel heeft een betekenis:

- `v=spf1` zegt dat dit een SPF-record is.
- `include:_spf.google.com` zegt dat elke server die Google vermeldt, voor dit domein mag versturen.
- `-all` zegt dat e-mail van alle andere servers geweigerd moet worden.
- `~all` is een zachtere afsluiting. Die zegt dat e-mail van andere servers verdacht is, maar niet geweigerd hoeft te worden.

## Een eenvoudig voorbeeld

Zo beschermt één SPF-record een klein bedrijf.

1. **Een bakkerij gebruikt Google Workspace.** Rosa's Bakery verstuurt haar e-mail vanaf rosa@bakery.example via Google Workspace.
2. **De bakkerij publiceert een SPF-record.** Het record zegt `v=spf1 include:_spf.google.com -all`. Dit betekent dat alleen de servers van Google e-mail mogen versturen voor bakery.example.
3. **Rosa mailt een klant.** De e-mail vertrekt vanaf een van de servers van Google.
4. **De server van de klant controleert.** Die zoekt het SPF-record van bakery.example op. De server van Google mag versturen, dus het resultaat is pass.
5. **Iemand verstuurt een nepmail.** Een oplichter verstuurt een e-mail die zegt van bakery.example te komen. De e-mail komt van een server die niet in het record staat.
6. **De controle mislukt.** Het record eindigt met `-all`, dus de server van de klant mag de nepmail weigeren.

## Hoe ontvangende servers het controleren

Als er een e-mail binnenkomt, leest de ontvangende server het domein in het [Return-Path](/glossary/return-path). Het Return-Path is het adres waar bounces naartoe gaan. Een bounce is het automatische bericht dat een afzender vertelt dat een e-mail niet is bezorgd.

De server haalt het SPF-record van dat domein op. Daarna controleert hij of het IP-adres dat de e-mail heeft afgeleverd in het record staat. Een IP-adres is het nummer dat een server op internet aanduidt. Er zijn drie gebruikelijke resultaten:

- **Pass.** Het IP-adres staat in het record. De e-mail kwam van een toegestane server.
- **Fail.** Het IP-adres staat niet in het record en het record eindigt met `-all`. De server mag de e-mail weigeren.
- **Softfail.** Het IP-adres staat niet in het record en het record eindigt met `~all`. De server accepteert de e-mail, maar markeert hem als verdacht.

Microsoft Exchange Online weigert een e-mail die niet slaagt met `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail geeft `550 5.7.26` terug voor een e-mail zonder enige authenticatie. Beide codes beginnen met 5. Je verzendtool noteert ze als [hard bounces](/glossary/hard-bounce), ook al is het adres in orde.

## Wie een SPF-record nodig heeft

Iedereen die bulkmail verstuurt, heeft er een nodig. De afzenderrichtlijnen van Google eisen SPF en DKIM van afzenders die 5.000 of meer berichten per dag naar Gmail sturen. Ze eisen ook DMARC. Microsoft eist dezelfde drie records van domeinen die meer dan 5.000 e-mails per dag naar Outlook.com, Hotmail en Live sturen. Microsoft handhaaft dit sinds 5 mei 2025.

Verstuur je minder, dan zijn de records nog steeds belangrijk. Zonder deze records komt je e-mail eerder in de spammap terecht.

## De limiet van tien DNS-opzoekingen

RFC 7208 beperkt een SPF-controle tot tien DNS-opzoekingen. Een opzoeking is één vraag die de ontvangende server aan DNS stelt. Elke `include:`, `a`, `mx` en `redirect` in je record telt als één opzoeking. Opzoekingen in de records die je insluit, tellen ook mee. Als het totaal boven de tien komt, geeft de controle een permanente fout. De meeste ontvangende servers behandelen deze fout als een fail.

Dit is de meest voorkomende manier waarop een SPF-record kapotgaat. Een bedrijf voegt de ene e-mailtool na de andere aan het record toe. Bij de elfde opzoeking werkt het hele record niet meer. De [SPF checker](/spf-checker) telt de opzoekingen in je record, ook die binnen elke include.

**Voorbeeld:** het SPF-record van een bedrijf bevat de kantoormail, de nieuwsbrieftool, de helpdesktool en de factuurtool. Sommige daarvan sluiten zelf weer andere records in. Samen hebben ze 11 opzoekingen nodig. Vanaf die dag mislukt de SPF-controle voor de e-mail van het bedrijf, zelfs voor e-mail vanaf het eigen kantoor.

## SPF is een van drie records

- SPF controleert welke server de e-mail heeft verstuurd.
- [DKIM](/glossary/dkim) controleert of de e-mail na verzending niet is gewijzigd.
- [DMARC](/glossary/dmarc) koppelt beide controles aan het From-adres dat de lezer ziet. Het vertelt ontvangende servers ook wat ze moeten doen als de controles mislukken.

Een domein heeft alle drie nodig. De gids [hard bounce en soft bounce](/blog/hard-bounce-vs-soft-bounce) laat zien hoe de foutcodes eruitzien in een bouncerapport.

## SPF-records en e-mailverificatie

Een SPF-record bewijst welke servers e-mail mogen versturen voor je domein. Het bewijst niet dat het adres van de ontvanger bestaat. Een correct geauthenticeerde e-mail naar een dood adres bouncet nog steeds. Een [email checker](/email-checker) vraagt de ontvangende server of een mailbox bestaat, voordat je verstuurt. [Bulk e-mailverificatie](/bulk-email-verifier) doet hetzelfde voor een hele lijst. Een correct SPF-record helpt authenticatiebounces zoals `5.7.23` te voorkomen, en [e-mailverificatie](/) vindt de adressen die zouden bouncen met codes zoals `5.1.1`.
