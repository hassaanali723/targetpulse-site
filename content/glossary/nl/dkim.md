---
title: DKIM
description: Wat DKIM is, hoe een DKIM-handtekening bewijst dat een e-mail van je domein komt, hoe een DKIM-record eruitziet en hoe je het instelt en controleert.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM staat voor DomainKeys Identified Mail. Het voegt een digitale handtekening toe aan elke e-mail die je verstuurt. De ontvangende server controleert de handtekening om te bevestigen dat de e-mail van je domein komt en na verzending niet is gewijzigd.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Ook een ondertekende e-mail bouncet als het adres niet bestaat
---

## Wat is DKIM?

DKIM staat voor DomainKeys Identified Mail. Het is vastgelegd in RFC 6376. DKIM voegt een digitale handtekening toe aan elke e-mail die je server verlaat. Een digitale handtekening is een lange code die alleen jouw server kan maken.

De ontvangende server controleert de code. Als die geldig is, zijn twee dingen waar. De e-mail is ondertekend door jouw domein. En niemand heeft hem na verzending gewijzigd.

Een domein is de naam na de @ in een e-mailadres, zoals example.com. DKIM werkt per domein. Elk domein dat e-mail verstuurt, hoort die te ondertekenen met een eigen sleutel.

## Een voorbeeld: een winkel stuurt een bon

Een winkel draait op example.com. Lena koopt een lamp, en de winkel mailt een bon naar haar Gmail-adres. Dit doet DKIM.

1. De verzendende server van de winkel maakt de bon.
2. De server gebruikt een privésleutel om een handtekening voor de e-mail te maken. Een privésleutel is een geheim bestand dat op de verzendende server blijft.
3. De server voegt de handtekening aan de e-mail toe als een header met de naam `DKIM-Signature`. Een header is een regel technische informatie bovenaan een e-mail. Lezers zien die normaal niet.
4. De e-mail komt aan bij Gmail.
5. Gmail leest de header. Gmail vindt het domein example.com en de selector s2026a.
6. Gmail zoekt de openbare sleutel voor die selector op in de DNS van de winkel. DNS is het openbare register waarin een domein zijn instellingen publiceert.
7. Gmail gebruikt de openbare sleutel om de handtekening te controleren. De controle slaagt.
8. Gmail noteert het resultaat als DKIM pass voor example.com.

Stel dat iemand het bedrag op de bon na verzending heeft gewijzigd. Dan mislukt de controle in stap 7. Met de openbare sleutel kun je een handtekening bevestigen, maar niet maken. Alleen de privésleutel kan dat.

## De DKIM-handtekening

De DKIM-handtekening is één header met meerdere onderdelen, die tags heten. Elke tag is een letter, een isgelijkteken en een waarde. Twee tags zijn het belangrijkst.

- `d=` is het ondertekenende domein, bijvoorbeeld `d=example.com`.
- `s=` is de selector, bijvoorbeeld `s=s2026a`. Een selector is een label dat één sleutel benoemt. Een domein kan meerdere sleutels tegelijk hebben, elk met een eigen selector.

De header bevat ook de handtekening zelf in `b=`, en een code voor de tekst van de e-mail in `bh=`. De ontvangende server gebruikt ze allemaal voor de controle.

## Het DKIM-record

De openbare sleutel wordt gepubliceerd in een DKIM-record. Dit is een [DNS TXT-record](/glossary/dns-txt-record), een DNS-regel met platte tekst. De naam bestaat uit de selector en het domein:

`s2026a._domainkey.example.com`

De waarde van het record ziet er zo uit:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` zegt dat dit een DKIM-record is.
- `k=rsa` noemt het type sleutel.
- `p=` bevat de openbare sleutel. De echte waarde is een paar honderd tekens lang.

De privésleutel komt nooit in DNS. Die blijft op de verzendende server. Gebruik voor de sleutellengte 2048 bits. Gmail accepteert minimaal 1024 bits, maar raadt 2048 aan. RFC 8301 zegt dat afzenders 2048 bits horen te gebruiken.

## Waarom DKIM belangrijk is

DKIM blijft werken bij doorsturen. Stel dat iemand de bon van de winkel doorstuurt naar een ander account. De doorstuurserver verstuurt hem vanaf zijn eigen IP-adres. Een IP-adres is het nummer dat een server op internet aanduidt. Dat IP-adres staat niet in het [SPF-record](/glossary/spf) van de winkel, dus SPF mislukt. De DKIM-handtekening reist mee in de e-mail en slaagt dus nog steeds.

[DMARC](/glossary/dmarc) gebruikt DKIM. DMARC slaagt als SPF of DKIM slaagt voor hetzelfde domein dat in het From-adres staat. Doorsturen breekt SPF, dus vaak is DKIM de controle die DMARC laat slagen.

DKIM is ook verplicht voor bulkafzenders. De afzenderrichtlijnen van Google eisen SPF, DKIM en DMARC van afzenders die 5.000 of meer e-mails per dag naar Gmail sturen. Microsoft heeft dezelfde regel voor Outlook.com, Hotmail en Live.

## Zo stel je DKIM in

Hoe je DKIM instelt, hangt af van wie je e-mail verstuurt.

- **Je gebruikt een e-maildienst** zoals Google Workspace, Microsoft 365, Mailchimp of SendGrid. De dienst maakt de sleutel voor je. De dienst toont je het DKIM-record dat je bij je DNS-host toevoegt. Je DNS-host is meestal het bedrijf waar je het domein hebt gekocht.
- **Je beheert je eigen mailserver.** Je maakt het sleutelpaar zelf. Onze [DKIM-generator](/dkim-generator) maakt in je browser een sleutelpaar van 2048 bits en het TXT-record. Je installeert de privésleutel op je server en publiceert het record in DNS.

Controleer één veelvoorkomend probleem. Veel e-maildiensten ondertekenen standaard met hun eigen gedeelde domein. De handtekening slaagt, maar het domein in `d=` is niet van jou, dus DMARC-alignment mislukt. Zet custom DKIM aan in de instellingen van de dienst, zodat `d=` jouw domein toont. De pagina over [DMARC-alignment](/glossary/dmarc-alignment) legt uit waarom dit belangrijk is.

## Zo controleer je of DKIM werkt

1. Stuur een e-mail vanaf je domein naar een persoonlijk Gmail-account.
2. Open de e-mail in Gmail.
3. Klik op het menu met de drie puntjes en kies Origineel weergeven.
4. Zoek de DKIM-regel bovenaan. Daar hoort PASS te staan, met je domein.

Staat er FAIL, controleer dan twee dingen. Misschien is het DNS-record nog niet helemaal gepubliceerd. Of de selector op je server komt niet precies overeen met de selector in DNS.

## DKIM en e-mailverificatie

DKIM bewijst dat een e-mail van je domein komt, niet dat het adres van de ontvanger bestaat. Een correct ondertekende e-mail naar een dood adres bouncet nog steeds. Een [email verifier](/email-checker) vraagt de ontvangende server of elke mailbox bestaat, voordat je verstuurt. [Bulk e-mailverificatie](/bulk-email-verifier) doet hetzelfde voor een hele lijst. DKIM bewijst wie de e-mail heeft verstuurd, en [e-mailverificatie](/) zorgt ervoor dat hij naar adressen gaat die hem kunnen ontvangen.
