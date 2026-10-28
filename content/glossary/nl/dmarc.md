---
title: DMARC
description: Wat DMARC is, waarom het bestaat, hoe het SPF en DKIM gebruikt, de drie DMARC-beleidsregels, een eenvoudig DMARC-record uitgelegd en wie het verplicht stelt.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC is een regel die je publiceert in de DNS van je domein. Die vertelt ontvangende servers wat ze moeten doen met een e-mail die zegt van jouw domein te komen, maar niet slaagt voor SPF en DKIM. Hij vertelt ze ook waar ze rapporten naartoe moeten sturen.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC beschermt je domein. Verificatie beschermt je bouncepercentage
---

## Wat is DMARC?

DMARC staat voor Domain-based Message Authentication, Reporting and Conformance. Het is een regel die je publiceert in DNS. DNS is het openbare register waarin een domein zijn instellingen vermeldt. De regel beantwoordt één vraag voor ontvangende servers. Wat moet er gebeuren met een e-mail die jouw domein in het From-adres gebruikt, maar niet slaagt voor de controles?

Het From-adres is het afzenderadres dat mensen in hun inbox zien. Zonder DMARC kan iedereen jouw domein daar invullen. Met DMARC kun je Gmail, Outlook.com en andere providers vragen om zulke e-mails naar spam te sturen of te blokkeren. Je kunt ze ook vragen om je rapporten te sturen over elke server die e-mail verstuurt op jouw naam.

## Een voorbeeld: een nepfactuur van billing@example.com

Example Ltd verstuurt zijn echte facturen vanaf billing@example.com. Een oplichter wil de klanten van het bedrijf misleiden. Dit gebeurt er.

1. De oplichter verstuurt een e-mail vanaf zijn eigen server. Het From-adres is billing@example.com. Het onderwerp is "Achterstallige factuur, betaal vandaag".
2. De e-mail komt aan bij Tom, een van de klanten van het bedrijf.
3. De e-mailprovider van Tom voert twee controles uit. [SPF](/glossary/spf) controleert of de verzendende server namens example.com mag versturen. Dat mag hij niet. [DKIM](/glossary/dkim) zoekt een geldige handtekening van example.com. Die is er niet.
4. De provider zoekt het DMARC-record van example.com op. Het record zegt `p=reject`.
5. De provider blokkeert de e-mail. Tom ziet hem nooit.

Zonder DMARC-record vindt stap 4 niets. De provider beslist dan zelf, en de nepfactuur kan in de inbox van Tom terechtkomen.

Ontvangers zien je beleid als een verzoek. Ze kunnen daarnaast ook hun eigen spamfilters gebruiken.

## Hoe DMARC beslist: alignment

SPF en DKIM controleren elk een domein. Maar dat domein kan anders zijn dan het domein in het From-adres. Een oplichter kan slagen voor SPF met zijn eigen domein, zoals scam-mail.example, terwijl het From-adres example.com toont.

DMARC voegt één regel toe om dit op te lossen. SPF of DKIM moet slagen voor hetzelfde domein dat in het From-adres staat. Deze overeenkomst heet alignment. Slechts één van de twee controles hoeft te slagen en overeen te komen. De pagina over [DMARC-alignment](/glossary/dmarc-alignment) legt de soepele en de strikte versie van deze regel uit.

## De drie DMARC-beleidsregels

Het beleid is het onderdeel `p=` van het record. Het heeft drie mogelijke waarden.

| Beleid | Wat er gebeurt met een e-mail die niet slaagt voor DMARC | Wanneer je het gebruikt |
| --- | --- | --- |
| `p=none` | Hij wordt normaal bezorgd. Je krijgt alleen rapporten. | In het begin, terwijl je al je afzenders opspoort |
| `p=quarantine` | Hij gaat naar de spammap. | Als al je echte afzenders slagen |
| `p=reject` | Hij wordt geblokkeerd en bereikt nooit een mailbox. | Als je zeker weet dat geen echte e-mail mislukt |

## Een eenvoudig DMARC-record

Een DMARC-record is een [DNS TXT-record](/glossary/dns-txt-record) met de naam `_dmarc`. Voor example.com staat het op `_dmarc.example.com`. Dit is een eenvoudig record:

```text
v=DMARC1; p=none; rua=mailto:reports@example.com
```

Het heeft drie onderdelen, gescheiden door puntkomma's.

- `v=DMARC1` zegt dat dit een DMARC-record is. Dit moet vooraan staan.
- `p=none` is het beleid. Hier staat: doe niets bijzonders, stuur alleen rapporten.
- `rua=mailto:reports@example.com` is het adres dat de dagelijkse samenvattende rapporten ontvangt.

Een domein mag maar één DMARC-record hebben. Als een ontvangende server er twee vindt, negeert hij ze allebei. De gids [wat is een DMARC-record](/blog/what-is-a-dmarc-record) legt alle andere tags uit en hoe je de rapporten leest.

## Zo begin je met DMARC

De meeste domeinen gaan in drie stappen omhoog.

1. Publiceer een record met `p=none` en een `rua`-adres. Er verandert niets aan je e-mail, en de rapporten beginnen binnen te komen.
2. Lees de rapporten. Ze tonen elke server die e-mail verstuurt als jouw domein. Zorg dat elke echte dienst slaagt voor SPF of DKIM voor jouw domein. Je nieuwsbrieftool en je helpdesk zijn twee voorbeelden.
3. Ga naar `p=quarantine`. Als er geen echte e-mail meer in spam belandt, ga dan naar `p=reject`.

De standaard zegt dat het vele maanden kan duren voordat elke echte afzender slaagt. Diensten die weinig versturen, zoals factuurtools, zie je makkelijk over het hoofd. Onze [DMARC-generator](/dmarc-generator) maakt het record voor elke stap.

Zorg dat al je e-mail met DKIM is ondertekend voordat je `p=reject` gebruikt. Doorsturen breekt SPF. Een reject-beleid dat alleen op SPF steunt, kan echte doorgestuurde e-mail blokkeren.

## Wie DMARC verplicht stelt

De afzenderrichtlijnen van Google eisen een DMARC-record van afzenders die 5.000 of meer e-mails per dag naar persoonlijke Gmail-accounts sturen. Microsoft heeft dezelfde regel voor Outlook.com, Hotmail en Live. Microsoft handhaaft die sinds 5 mei 2025. Voor allebei voldoet `p=none` aan het minimum. Het From-domein moet ook in alignment zijn met SPF of DKIM.

De huidige DMARC-standaard is RFC 9989, gepubliceerd in mei 2026. Die verving RFC 7489. Records die beginnen met `v=DMARC1` blijven werken.

## DMARC en e-mailverificatie

DMARC beschermt je domein tegen mensen die e-mail versturen op jouw naam. Het doet niets aan de adressen op je eigen lijst. Een e-mail naar een mailbox die niet meer bestaat, bouncet, ook als hij slaagt voor DMARC. Een [email checker](/email-checker) vindt die adressen voordat je verstuurt, en met [bulk e-mailverificatie](/bulk-email-verifier) vind je ze in een hele lijst. Met [e-mailverificatie](/) blijft je bouncepercentage laag, en DMARC voorkomt dat oplichters je domein gebruiken.
