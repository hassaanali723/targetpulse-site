---
title: BIMI
description: Wat BIMI in e-mail is, hoe het je merklogo in de inbox toont, wat je eerst nodig hebt, hoe een BIMI-record eruitziet en welke inboxen het tonen.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi email
short: BIMI is een e-mailstandaard die je merklogo naast je e-mails toont in inboxen die het ondersteunen. Het staat voor Brand Indicators for Message Identification. Het werkt alleen als je domein slaagt voor DMARC met een quarantine- of reject-beleid.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Een logo helpt alleen als de e-mail een echte inbox bereikt
---

## Wat is BIMI in e-mail?

BIMI staat voor Brand Indicators for Message Identification. Het is een e-mailstandaard waarmee een merk zijn logo naast zijn e-mails kan tonen. Het logo verschijnt in inboxen die BIMI ondersteunen, zoals Gmail en Apple Mail. De BIMI Group publiceert de standaard. Dat is een werkgroep van e-mailbedrijven.

BIMI voegt zelf geen beveiliging toe. Het toont een logo bij e-mail die al slaagt voor DMARC. Het werk dat je daarvoor doet, is wat je domein beschermt.

## Een voorbeeld: een merklogo in Gmail

Open Gmail op je telefoon. Elke e-mail in de lijst heeft links een klein rond plaatje. Bij de meeste afzenders toont Gmail een cirkel met de eerste letter van de naam van de afzender. Bij sommige merken toont Gmail in die cirkel het eigen logo van het merk. Die merken gebruiken BIMI.

Stel dat een schoenenwinkel op example.com BIMI instelt. De winkel stuurt een nieuwsbrief naar het Gmail-adres van Priya. Dit gebeurt er.

1. Gmail controleert SPF, DKIM en DMARC voor example.com. De e-mail slaagt voor DMARC.
2. Gmail ziet dat het DMARC-beleid van de winkel quarantine of reject is.
3. Gmail zoekt het BIMI-record op `default._bimi.example.com` op.
4. Het record verwijst naar het logobestand van de winkel en naar het merkcertificaat.
5. Gmail controleert het certificaat en toont daarna het logo naast de e-mail.

Als een van deze stappen mislukt, ziet Priya de gewone letter. De e-mail zelf wordt nog steeds normaal bezorgd.

## Wat je nodig hebt voor BIMI

Je hebt drie dingen nodig voordat een logo in Gmail verschijnt.

- **DMARC met handhaving.** Je [DMARC](/glossary/dmarc)-beleid moet `p=quarantine` of `p=reject` zijn. Google zegt dat BIMI `p=none` niet ondersteunt.
- **Het logo als SVG Tiny PS-bestand.** SVG is een beeldformaat dat uit vormen bestaat, niet uit pixels. SVG Tiny PS is een beperkte versie van SVG, gemaakt voor inboxen. De afbeelding moet vierkant zijn en een titel met je merknaam bevatten. Er mogen geen scripts, animaties of links naar andere bestanden in staan. Het bestand blijft het best onder 32 KB.
- **Een merkcertificaat.** Dit is een bestand van een certificaatautoriteit. Dat is een bedrijf dat controleert of je het recht hebt om het logo te gebruiken. Gmail accepteert twee soorten.

| Certificaat | Geregistreerd handelsmerk nodig | Wat Gmail toont |
| --- | --- | --- |
| VMC (Verified Mark Certificate) | Ja | Je logo en een blauw vinkje |
| CMC (Common Mark Certificate) | Nee | Je logo, zonder het vinkje |

## Het BIMI-record

Een BIMI-record is een [DNS TXT-record](/glossary/dns-txt-record). DNS is het openbare register waarin een domein zijn instellingen publiceert. Een TXT-record is een regel in DNS met platte tekst. Het BIMI-record staat op `default._bimi.example.com`. Hier is `default` de selector, een label voor het record.

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1` zegt dat dit een BIMI-record is.
- `l=` is het webadres van je SVG-logo.
- `a=` is het webadres van je VMC- of CMC-certificaat. Dat is een PEM-bestand.

De eigen voorbeelden van Google tonen ook een record waarin `l=` leeg is en alleen `a=` is ingevuld. Dat werkt, omdat het logo in het certificaatbestand zit. Volg wat je certificaatleverancier aanraadt.

## Welke inboxen BIMI-logo's tonen

De ondersteuning verschilt per provider. Dit zijn de regels die op onze BIMI-generatorpagina staan.

- **Gmail** toont het logo alleen met een VMC of een CMC.
- **Apple Mail** toont het logo alleen met een VMC.
- **Yahoo en Fastmail** kunnen een logo tonen van een record zonder certificaat.

Inboxen die BIMI niet ondersteunen, tonen niets anders dan normaal. Providers kunnen ook even nodig hebben om een nieuw BIMI-record op te pikken. Een logo dat op de eerste dag niet verschijnt, is dus niet altijd een fout.

## Zo stel je BIMI in

1. Stel SPF en DKIM in voor elke dienst die je e-mail verstuurt.
2. Zet je DMARC-beleid op quarantine of reject. Onze [DMARC-generator](/dmarc-generator) maakt het record.
3. Zet je logo om naar een SVG Tiny PS-bestand.
4. Koop een VMC of een CMC als je het logo in Gmail wilt tonen.
5. Maak het BIMI-record met onze [BIMI-generator](/bimi-generator). Die controleert ook je SVG-bestand in je browser.
6. Publiceer het record op `default._bimi` in je DNS.
7. Stuur een testmail naar een Gmail-account en kijk of het logo verschijnt.

## BIMI en e-mailverificatie

BIMI verbetert de bezorging niet uit zichzelf. Het toont alleen een logo bij e-mail die de inbox bereikt en slaagt voor DMARC. Een e-mail naar een adres dat niet bestaat, bouncet, dus niemand ziet het logo. Met een [email checker](/email-checker) en [bulk e-mailverificatie](/bulk-email-verifier) vind je die adressen, zodat je ze kunt verwijderen voordat je verstuurt. Met [e-mailverificatie](/) bouncen minder van je e-mails, dus zien meer echte mensen je logo.
