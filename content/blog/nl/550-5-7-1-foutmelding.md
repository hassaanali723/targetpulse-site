---
title: "Foutmelding 550 5.7.1: wat de bounce zegt en hoe je het oplost"
seoTitle: "Foutmelding 550 5.7.1: betekenis en oplossingen (Gmail, Outlook)"
description: "Foutmelding 550 5.7.1 betekent dat de ontvangende server je e-mail weigerde op basis van beleid. Lees de tekst in de bounce, zie wie hem stuurde en los het op."
slug: 550-5-7-1-foutmelding
date: 2026-10-22
updated: 2026-10-22
keyword: 550 5.7.1 foutmelding
image: /blog/covers/nl/550-5-7-1-foutmelding.webp
imageAlt: Gids voor de bouncefout 550 5.7.1 met blokkades op basis van beleid en weigeringen door Gmail en Outlook
cta: Vind de echte oorzaak van je bounces voor de volgende verzending
---

Een 550 5.7.1-bounce betekent dat de ontvangende server naar je bericht heeft gekeken en besloot het niet aan te nemen. Meestal komt dat door een beveiligings- of beleidsregel. Het betekent niet dat het e-mailadres dood of verwijderd is. Meestal is de mailbox in orde. Het probleem is dat dezelfde code heel verschillende problemen dekt, van een ontbrekend SPF-record tot een distributielijst die alleen interne mail accepteert. De code alleen zegt je dus niet wat je moet oplossen. De regel tekst erna zegt dat wel, samen met de naam van de server die de bounce stuurde.

## Lees eerst drie dingen in je bounce

Open de volledige bounce, niet alleen de samenvatting die je e-mailplatform toont. Je zoekt de code, de server die het bericht weigerde en de tekst na de code.

Een weigering van Gmail ziet er in de ruwe bounce zo uit:

```text
Remote-MTA: dns; gmail-smtp-in.l.google.com
Diagnostic-Code: smtp; 550-5.7.1 [203.0.113.10] Our system has detected that this message is likely unsolicited mail. To reduce the amount of spam sent to Gmail, this message has been blocked. - gsmtp
```

In dit fragment staat de server die antwoordde op de regel Remote-MTA: `gmail-smtp-in.l.google.com`. De code staat op de regel Diagnostic-Code als `550-5.7.1`. De tekst na het IP-adres zegt dat de filters van Gmail het bericht als spam zagen. De string `- gsmtp` aan het eind bevestigt dat Gmail de bounce heeft gemaakt. Zie je in plaats daarvan de markering `gcdp`, zoals in `550 5.7.1 This message violates example.com email policy. - gcdp <sessionid> - gsmtp`? Dan komt de weigering van een regel die de Google Workspace-beheerder van de ontvanger heeft gemaakt.

Dezelfde code van Outlook.com leest heel anders:

```text
Remote-MTA: dns; outlook-com.olc.protection.outlook.com
Diagnostic-Code: smtp; 550 5.7.1 Unfortunately, messages from [203.0.113.10] weren't sent. Please contact your Internet service provider since part of their network is on our block list (S3150).
```

Een host die eindigt op protection.outlook.com betekent dat de servers van Microsoft het bericht weigerden. Namen als outlook-com.olc.protection.outlook.com horen bij Outlook.com en Hotmail voor consumenten, niet bij de Microsoft 365-omgeving van een bedrijf. De code is dezelfde als in het voorbeeld van Gmail, maar de oorzaak is heel anders. S3150 betekent dat het IP-adres waarvandaan je verstuurde, of een deel van het netwerk ervan, op de blokkadelijst van Microsoft staat. Het heeft niets te maken met het adres van de ontvanger.

## Vind jouw exacte 550 5.7.1-melding

Elk mailsysteem formuleert zijn 550 5.7.1 anders. Zoek de tekst uit je bounce op in de tabel hieronder.

| Tekst in de bounce | Verstuurd door | Wat het betekent | Wie het kan oplossen |
|---|---|---|---|
| Our system has detected that this message is likely unsolicited mail. To reduce the amount of spam sent to Gmail, this message has been blocked. - gsmtp | Gmail | Spamfilters blokkeerden het bericht vanwege afzenderreputatie, pieken in volume of klachten van gebruikers | Afzender |
| This message violates example.com email policy. - gcdp <sessionid> - gsmtp | Google Workspace | Een Workspace-beheerder maakte een eigen routeringsregel, compliancefilter of bijlagebeleid dat het bericht blokkeerde | Beheerder van de ontvanger |
| Invalid credentials for relay [IP]. | Google Workspace | De verzendende applicatie probeerde de SMTP-relayservice van Google Workspace te gebruiken zonder geldige inloggegevens | Afzender |
| Daily SMTP relay sending limit exceeded for this customer. | Google Workspace | Het Workspace-account heeft de dagelijkse limiet voor uitgaande relay bereikt | Afzender |
| Unfortunately, messages from [IP] weren't sent. Please contact your Internet service provider since part of their network is on our block list (S3150). | Outlook.com | Microsoft heeft het verzendende IP-adres of het netwerkbereik op zijn blokkadelijst voor consumenten gezet | Afzender of internetprovider |
| Unable to relay | Exchange en veel andere servers | De server weigerde het bericht door te sturen, omdat SMTP-authenticatie ontbrak of een connector verkeerd was ingesteld | Afzender of beheerder van de afzender |
| Delivery not authorized, message refused | Diverse mailservers | De ontvangende server weigerde het bericht op basis van intern beleid en gaf geen verdere details | Afzender of beheerder van de ontvanger |
| Relaying denied | Diverse mailservers | De server accepteert geen berichten van derden, tenzij de client zich eerst aanmeldt | Afzender |

De vaagste versie is de kale tekst uit RFC 3463, 550 5.7.1 Delivery not authorized, message refused (aflevering niet toegestaan, bericht geweigerd), zonder iets erna. Sommige servers houden de reden expres kort, zodat spammers niet kunnen zien waarop het filter reageerde. Verstuur je via een relay of smarthost? Controleer dan eerst of je app echt inlogt (SMTP AUTH) voordat hij verstuurt. Een verbinding zonder authenticatie is aan jouw kant een veelvoorkomende oorzaak. Logt de app wel in, vraag de ontvanger dan om het bericht op te zoeken in de eigen maillogs. Dat is meestal de enige plek waar de echte reden staat.

## Als het probleem aan jouw kant ligt

Wijst de bounce naar authenticatie, reputatie of relay, dan kun je het oplossen zonder de ontvanger. Controleer eerst de authenticatie. Werk aan je reputatie helpt niet zolang SPF of DKIM faalt.

Gmail en Outlook.com weigeren nu allebei veel mail zonder authenticatie direct. Begin dus bij DNS. Je verzenddomein heeft [SPF-, DKIM- en DMARC-records](/blog/spf-dkim-dmarc-explained) nodig (DKIM is vaak een CNAME die je e-mailprovider je geeft). Controleer eerst het [SPF-record](/glossary/spf). Het moet elk server-IP en elke verzenddienst noemen die namens jou berichten verstuurt. RFC 7208 beperkt een domein tot één SPF-record en tien DNS-lookups. Publiceer je meerdere records of ga je over de tien lookups, dan volgt automatisch een PermError. Stuur jezelf daarna een testbericht en open de headers. De weergave "Origineel weergeven" in Gmail toont SPF, DKIM en DMARC als PASS of FAIL. Dat gaat sneller dan DNS-records lezen. Het DMARC-record staat op _dmarc.jouwdomein.com, en het domein in je From-adres moet overeenkomen met het domein dat SPF of DKIM heeft doorstaan.

Slaagt de authenticatie en zegt Gmail nog steeds "likely unsolicited mail" (waarschijnlijk ongevraagde mail)? Dan is het probleem meestal reputatie, dus hoe ontvangers op je eerdere mail hebben gereageerd. [Google Postmaster Tools](/glossary/postmaster-tools) toont je spampercentage. Google vraagt afzenders om dat onder 0,1% te houden en het nooit 0,3% te laten bereiken. Stijgt het? Pauzeer de campagne dan, in plaats van er meer volume doorheen te sturen. Mail die in spam belandde, gaat vaak direct bouncen als je reputatie blijft dalen.

De kwaliteit van je lijst speelt daar direct in mee. Oude lijsten zitten vol verlaten mailboxen, en sommige providers maken van lang geleden opgeheven adressen [spamvallen](/glossary/spam-trap). Raak je die, of bounce je op veel adressen die niet meer bestaan, dan zien filters dat je je lijst niet schoon houdt. Is de lijst meer dan een paar maanden oud, of komt hij uit scraping of een aankoop? [Controleer de lijst dan voor je verstuurt](/email-list-cleaning) (in het Engels).

Relayfouten zijn een apart probleem. Unable to relay of Invalid credentials for relay [IP] betekent dat de server waarlangs je verstuurt je app niet herkent als toegestaan.

Stuur je berichten via de SMTP-relayservice van Google Workspace? Open dan de Google Admin-console, ga naar Apps, kies Google Workspace, open Gmail en bekijk Routering. Controleer de instellingen van de SMTP-relayservice. Gebruik je authenticatie op basis van IP-adres? Controleer dan of het IP van je server in de lijst met toegestane adressen staat. Gebruik je inloggegevens? Controleer dan of je applicatie verbindt via poort 587 met TLS en de juiste accountgegevens. Verstuur je via Microsoft 365, open dan het Exchange-beheercentrum en bekijk je connectors voor de mailstroom. Apps en apparaten die via Microsoft 365 versturen, zoals een CRM of een scanner op kantoor, gaan meestal via een connector. Een verkeerd IP-adres of een verkeerde certificaatnaam op die connector is een veelvoorkomende reden voor 550 5.7.1 Unable to relay.

## Als alleen de ontvanger het kan oplossen

Soms is de blokkade bewust. Bedrijven op Microsoft 365 of Google Workspace stellen vaak regels in die externe afzenders tegenhouden bij bepaalde adressen.

Een veelvoorkomend voorbeeld is een distributielijst als all-staff@ die alleen mail van binnen het bedrijf accepteert. Mail je die van buitenaf, dan stuurt Exchange Online je een 550 5.7.1 terug, vaak met de naam van de groep. Op de eigen pagina met probleemoplossing van Microsoft staat dat de afzender dit meestal niet kan oplossen. De eigenaar van de groep of een Exchange-beheerder moet de groep aanpassen in het Microsoft 365-beheercentrum en jouw adres toevoegen aan de lijst met toegestane afzenders.

Google Workspace werkt op dezelfde manier. De string `gcdp` in een bounce van Gmail betekent dat een beheerder in Google Admin een eigen regel heeft gemaakt die je bericht weigerde op basis van inhoud, bijlagen of het domein van de afzender. Niets wat je aan jouw kant verandert, komt daar langs.

Vraag de ontvanger in dat geval om de bounce door te sturen naar de eigen IT-afdeling. Geef het verzendadres, het adres van de ontvanger, het tijdstip van de bounce en de volledige bounce, bijvoorbeeld:

```text
Hoi [Naam], een e-mail die ik je op [Datum] om [Tijd] stuurde, kwam terug met een beleidsfout 550 5.7.1. Het lijkt erop dat een regel in jullie mailsysteem hem heeft geblokkeerd. Wil je de gegevens van de bounce hieronder doorsturen naar jullie IT-afdeling, zodat zij mail van mijn adres kunnen toestaan?
Afzender: [Jouw e-mailadres]
Ontvanger: [Hun e-mailadres]
Diagnose: [Plak de regel Diagnostic-Code]
```

## Codes die je naast 550 5.7.1 kunt zien

Dit zijn de SMTP-foutcodes die het vaakst in hetzelfde bouncerapport opduiken. Sommige betekenen dat het adres weg is. Andere betekenen dat het adres in orde is en dat je instellingen werk nodig hebben.

| Code | Meestal van | Wat het betekent | Wat je eerst probeert |
|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, de meeste servers | De mailbox van de ontvanger bestaat niet op de doelserver | Verwijder het ongeldige adres definitief van je mailinglijst |
| 550 5.4.1 | Microsoft 365 | Adres van de ontvanger geweigerd door Directory-Based Edge Blocking | Controleer of de ontvanger nog bij het doelbedrijf werkt |
| 550 5.7.25 | Gmail | Het verzendende IP-adres heeft geen geldig reverse DNS-record (PTR) | Stel bij je hostingprovider een PTR-record in dat overeenkomt met je hostnaam |
| 550 5.7.26 | Gmail | Het bericht kwam niet door de authenticatiecontroles van SPF of DMARC | Verbeter de syntax van je SPF-record en stem de DKIM-ondertekeningsdomeinen af |
| 550 5.7.27 | Gmail | Je bericht kwam niet door de SPF-controle | Voeg het IP-adres van je uitgaande server toe aan het SPF-record van je domein |
| 550 5.7.28 | Gmail | Het verzendende IP stuurde een ongewone hoeveelheid ongevraagde mail | Verlaag je verzendtempo en controleer de spamklachten van gebruikers |
| 550 5.7.515 | Outlook.com | Een domein met veel volume mist de vereiste SPF-, DKIM- of DMARC-records | Stem SPF en DKIM af en publiceer een DMARC-record dat aan de eisen voldoet |

Wil je weten hoe tijdelijke en permanente bounces in het algemeen verschillen, lees dan onze gids over [hard bounces en soft bounces](/blog/hard-bounce-vs-soft-bounce). In de praktijk verwijder je een adres na een 550 5.1.1, maar houd je het na een 550 5.7.26. Bij die tweede code is het adres in orde en faalde je authenticatie.

550 5.7.515 geldt alleen voor grotere afzenders. Sinds 5 mei 2025 weigert Microsoft mail van domeinen die 5.000 of meer berichten per dag sturen naar adressen van Outlook.com, Hotmail en Live, tenzij SPF slaagt, DKIM slaagt en een DMARC-record (p=none is genoeg) is afgestemd op een van de twee.

Online zie je dit soms geschreven als 5.7.15, maar dat is een andere code (prioriteit te laag). In de bounce van Microsoft staat 5.7.515.

## Veelgestelde vragen

**Hoe los ik foutcode 550 5.7.1 op?**
Lees de diagnoseregel in je bounce om te zien of authenticatie, reputatie of een regel aan de kant van de ontvanger de fout veroorzaakte. Faalde de authenticatie, werk dan je SPF-, DKIM- en DMARC-records bij en controleer je uitgaande SMTP-inloggegevens. Kwam de blokkade door een regel van de beheerder van de ontvanger of door een beperkte groep? Stuur de bounceheaders dan naar de ontvanger, zodat de IT-afdeling daar jouw adres kan toestaan.

**Wat is 550 5.7.1 unsolicited mail?**
Dat is Gmail die zegt dat zijn filters je bericht als spam zien, vooral op basis van je verzendreputatie. De gebruikelijke oorzaken zijn ontvangers die je mail als spam markeren, een plotselinge stijging in volume vanaf een nieuw domein of IP, of mailen naar een oude lijst. Controleer je spampercentage in Google Postmaster Tools en verstuur langzamer tot het weer onder 0,1% ligt.

**Wat betekent statuscode 5.7.1 van Outlook?**
In Microsoft 365 betekent een 5.7.1 van Outlook meestal dat een Exchange-beleid of een groepsbeperking de aflevering blokkeerde. Bij consumentenaccounts van Outlook.com en Hotmail staat er vaak code S3150 bij. Die betekent dat Microsoft je verzendende IP op zijn blokkadelijst voor consumenten heeft gezet. Zie je S3150, neem dan contact op met wie je verzendserver beheert en wijs die persoon op de link voor probleemoplossing in de bounce.

**Wat betekent "550 5.7.1 outbound relay not allowed"?**
Deze fout betekent dat een verzendende applicatie mail probeerde te versturen via een SMTP-server zonder geldige authenticatie. Mailservers weigeren mail door te sturen voor afzenders zonder authenticatie, zodat spammers er niet via kunnen versturen. Los het op door je applicatie te laten inloggen met een geldige gebruikersnaam, een geldig wachtwoord en een TLS-verbinding op poort 587.

Wat de oorzaak ook is, bewaar de volledige bounce. Daar vraagt de IT-afdeling van een ontvanger of je e-mailprovider als eerste om.

Zijn de meeste van je bounces 550 5.1.1 in plaats van 5.7.1, dan is de lijst het probleem. Dan loont het om [hem te verifiëren met Giggal.ai](/email-list-cleaning) (in het Engels) voor de volgende verzending.
