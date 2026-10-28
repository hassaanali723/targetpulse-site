---
title: DNS TXT-record
description: Wat een DNS TXT-record is, waarvoor het in e-mail dient (SPF, DKIM en DMARC), hoe je er een toevoegt, welke fouten het breken en hoe je het controleert. Met voorbeelden.
slug: dns-txt-record
date: 2026-10-22
updated: 2026-10-22
keyword: dns txt record
short: Een DNS TXT-record is een regel tekst in de instellingen van je domein. Mailservers lezen TXT-records om SPF, DKIM en DMARC te controleren. Andere diensten lezen ze om te bevestigen dat het domein van jou is.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Je records staan goed. Controleer nu de adressen waar je naar verstuurt
---

## Wat is een DNS TXT-record?

Een DNS TXT-record is een regel tekst in de instellingen van je domein. Iedereen op internet kan die tekst lezen.

Eerst wat DNS is. DNS staat voor Domain Name System. Het werkt als een openbaar telefoonboek voor domeinen. Als iemand jouw domein intypt, vertelt DNS de computer van die persoon waar het te vinden is. DNS bevat verschillende soorten regels, die records heten. Elk soort record heeft één taak.

Een TXT-record bevat platte tekst. Het stuurt niemand ergens heen. Het is een notitie bij je domein. Andere systemen lezen de notitie en handelen ernaar.

## Waarvoor TXT-records dienen

Bij e-mail bevatten TXT-records de regels die bewijzen dat je e-mails echt zijn.

| Gebruik | Waar het record staat | Voorbeeldwaarde |
|---|---|---|
| **[SPF](/glossary/spf)** | je domein, bijvoorbeeld `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Eigendom van het domein** | je domein | `google-site-verification=abc123...` |

De waarden hierboven zijn ingekorte voorbeelden. Je echte waarden krijg je van je e-mailprovider of van de dienst die je koppelt.

## Een eenvoudig voorbeeld

Zo voeg je een TXT-record toe.

1. **Marco gaat Google Workspace gebruiken.** Hij wil dat zijn e-mails van marco@studio.example in de inbox aankomen.
2. **Google geeft hem een waarde.** De installatiehandleiding zegt dat hij een SPF-record moet toevoegen met `v=spf1 include:_spf.google.com ~all`.
3. **Marco opent zijn domeininstellingen.** Hij logt in bij het bedrijf waar hij het domein heeft gekocht. Dat heet de registrar of DNS-host.
4. **Hij voegt een TXT-record toe.** Hij kiest het type TXT, laat de naam op zijn domein staan en plakt de waarde.
5. **Hij wacht.** Het kan een paar minuten tot een paar uur duren voordat de wijziging overal zichtbaar is.
6. **Servers kunnen hem nu controleren.** Als Marco een e-mail verstuurt, leest de ontvangende server zijn TXT-record. Die ziet dat de servers van Google voor studio.example mogen versturen.

## Fouten die TXT-records breken

De meeste problemen met TXT-records komen door een paar eenvoudige fouten.

- **Maar één SPF-record per domein.** Als een domein twee TXT-records heeft die met `v=spf1` beginnen, mislukt SPF. Voeg ze samen tot één record.
- **Lange waarden worden opgesplitst.** Eén stuk tekst in een TXT-record mag maximaal 255 tekens bevatten. Lange waarden, zoals DKIM-sleutels, worden als meerdere stukken opgeslagen. De meeste DNS-hosts doen dit voor je.
- **Gebruik de exacte naam.** Een DMARC-record moet op `_dmarc` staan, niet op je hoofddomein. Een DKIM-record moet op de selectornaam staan die je provider je geeft.
- **Kopieer de waarde precies.** Eén ontbrekend teken maakt het record onbruikbaar.

## Zo controleer je een TXT-record

Je kunt de TXT-records van elk domein lezen. Open op een Mac of Linux-computer de terminal en typ `dig TXT example.com`. Typ op Windows `nslookup -type=TXT example.com`.

Je kunt ook onze [SPF checker](/spf-checker) gebruiken. Die leest het SPF-record van een domein en legt uit wat het toestaat.

## Hoe TXT-records zich verhouden tot verificatie

TXT-records beschermen de e-mail die je verstuurt. Ze bewijzen dat de e-mail van jou komt. Ze zeggen niets over de vraag of de persoon aan wie je schrijft nog een mailbox heeft.

Dat is een andere controle. Een [email checker](/email-checker) vraagt de ontvangende server of een adres bestaat. Je hebt allebei nodig: correcte records op je domein en een schone lijst met echte adressen.
