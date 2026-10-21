---
title: "Beste e-mailverificatietools in 2026, getest"
seoTitle: "Beste e-mailverificatietools in 2026: zes tools getest"
description: Zes tools voor e-mailverificatie getest op catch-all-adressen en adressen achter een SEG, met de techniek achter elk resultaat en wat elke tool kost.
slug: beste-e-mailverificatietools
date: 2026-10-22
updated: 2026-10-22
keyword: beste e-mailverificatietool
image: /blog/covers/nl/beste-e-mailverificatietools.webp
imageAlt: Zes e-mailverificatietools getest op catch-all-adressen en adressen achter een gateway
cta: Los de catch-all- en SEG-rijen op die andere tools alleen markeren
---

## De korte versie

Dit is een test van zes tools voor e-mailverificatie op de adressen waar de meeste verificatietools op vastlopen. De volledige ranglijst van 28 tools op catch-all-verwerking, SEG-ondersteuning en prijs vind je in de [volledige vergelijking van 28 verificatietools](/alternatives) (in het Engels).

Het moeilijkste deel van het kiezen van een e-mailverificatietool in 2026 zijn catch-all-adressen en adressen achter een SEG. Ongeveer 30% van een B2B-e-maillijst staat op catch-all-domeinen (ook accept-all genoemd) of op domeinen achter een SEG. Dat zijn de twee gevallen waarin een mailserver een verificatietool niet vertelt of een mailbox echt bestaat. Op catch-all-domeinen accepteert de server elk adres, dus geven verificatietools Riskant terug. Op domeinen achter een SEG verbergt een beveiligingsgateway de echte server, dus geven verificatietools Onbekend terug. Deze gids legt catch-all- en SEG-verificatie vanaf de basis uit. Daarna vergelijkt hij de zes beste e-mailverificatietools van 2026 op de vraag of ze deze adressen echt oplossen of alleen markeren. De gids beantwoordt de echte vraag: bestaat er een echte manier om catch-all-adressen en adressen achter een SEG te verifiëren, en zo ja, waarom doet niet elke tool het? Met de antwoorden kies je de verificatietool die bij je eigen lijst past.

## Eerst: wat een verificatietool echt vraagt

E-mailverificatie is één simpele vraag aan de ontvangende mailserver: accepteer je mail voor precies deze mailbox?

Op een gewoon domein antwoordt de server eerlijk. Vraag naar een echte mailbox en hij accepteert. Vraag naar een mailbox die niet bestaat en hij weigert met een antwoord als "no such user". Op basis van dat antwoord geeft de tool een duidelijk resultaat: Geldig of Ongeldig.

Catch-all-domeinen en domeinen achter een SEG zijn de twee situaties waarin de server geen duidelijk antwoord geeft. Ze mislukken om verschillende redenen en geven verschillende resultaten. De rest van deze gids gaat over hoe je ze uit elkaar houdt.

## 1. Wat een catch-all-domein is

Een catch-all-domein (ook accept-all genoemd) is zo ingesteld dat het mail accepteert voor elk adres op dat domein, of de mailbox nu bestaat of niet. Intern sorteert het de mail, stuurt het hem door of gooit het hem stilletjes weg.

Stel dat een bedrijf brand.com als catch-all gebruikt. Verstuur naar een echte mailbox, een afdelingsadres of een duidelijke typefout: jane@brand.com, sales@brand.com en xqwp@brand.com worden allemaal geaccepteerd.

Alle drie worden geaccepteerd. Bedrijven doen dit bewust, zodat ze nooit een bericht verliezen door een verkeerd gespeld adres. Het komt veel voor op domeinen van Google Workspace en Microsoft 365. Het bijeffect is dat een verificatietool niet meer kan bewijzen dat één bepaalde mailbox bestaat.

**Waarom tools catch-all als Riskant markeren en niet als Onbekend.** De server antwoordt wel. Hij antwoordt alleen "geaccepteerd" bij de echte mailbox en bij de typefout. De verificatietool krijgt een antwoord, maar kan de twee niet uit elkaar halen. Daarom worden beide adressen als Riskant gemarkeerd. Verstuur je ernaar, dan bouncet de mail of niet, en de tool laat die keuze aan jou.

![E-mailverificatie op een standaarddomein en op een catch-all-domein, en waarom catch-all-adressen als Riskant worden gemarkeerd](/blog/catch-all-vs-standard-domain.svg)
Op een standaarddomein weigert de server een nepadres, dus geeft de verificatietool Geldig of Ongeldig terug. Een catch-all-server accepteert elk adres op dezelfde manier, dus komen de echte mailbox en de typefout allebei terug als Riskant.

Een aparte gids over dit onderwerp vind je hier: [Wat is een catch-all e-mailadres](/blog/what-is-a-catch-all-email-address).

## 2. Waarom catch-all belangrijk is voor je lijst

Op een gewone B2B-lijst staat ongeveer 30% van de contacten op catch-all-domeinen of domeinen achter een SEG. Met het label Riskant geven ze je een slechte keuze:

- Verwijder je ze, dan gooi je echte, bereikbare kopers weg die op die domeinen zitten.
- Houd je ze en verstuur je ernaar, dan bouncen de dode adressen ertussen. Dat schaadt je afzenderreputatie en je inbox placement.

Dat is het hele probleem. Een tool die 30% van je lijst gemarkeerd laat, heeft het werk niet afgemaakt. Hij heeft het moeilijkste deel aan jou teruggegeven. De tools die hun geld waard zijn, gaan een stap verder. Ze zetten die adressen om in een echt Geldig of Ongeldig door te bevestigen of de mailbox zelf bestaat, ook op een domein dat alles accepteert.

## 3. Wat een secure email gateway (SEG) is

Een secure email gateway, in het Nederlands een beveiligingsgateway voor e-mail, is een beveiligingslaag vóór de echte mailserver van een organisatie. Hij filtert elk inkomend bericht op spam, phishing en malware voordat het een mailbox bereikt. De organisatie laat het MX-record van haar domein naar de gateway wijzen. Alle mail gaat dus eerst door de SEG, en alleen schone mail gaat door naar de echte server.

### Wie er een gebruikt, en waarom sommige domeinen er een hebben en andere niet

Een SEG wordt ingezet door het IT- of beveiligingsteam van de ontvangende organisatie. Grote bedrijven en elke organisatie met gevoelige gegevens, zoals financiële instellingen, zorg, juridische kantoren en overheid, hebben er bijna altijd een. Een kleine startup op gewone Google Workspace heeft er meestal geen. Dat is de hele reden dat sommige adressen achter een SEG staan en andere niet. Het hangt ervan af of het bedrijf aan de andere kant een gateway vóór zijn mail heeft gezet. Het heeft niets met het individuele adres te maken.

### Zo zie je of een domein achter een SEG staat

Meestal kun je het direct uit het MX-record aflezen. Wijzen de mailservers van een domein naar een bekende gatewayleverancier, dan staat dat domein achter een SEG.

| Secure email gateway | Leverancier | MX-kenmerk | Meestal gebruikt door |
|---|---|---|---|
| Proofpoint | Proofpoint | *.pphosted.com | Grote bedrijven, financiële sector, zorg |
| Mimecast | Mimecast | *.mimecast.com | Middelgrote tot grote bedrijven, juridische sector |
| Barracuda | Barracuda | *.barracudanetworks.com | Kleine bedrijven tot middenmarkt |
| Secure Email | Cisco (IronPort) | *.iphmx.com | Zeer grote bedrijven, telecom |
| Defender for O365 | Microsoft | *.mail.protection.outlook.com | Elke organisatie met Microsoft 365 |
| Email Security.cloud | Broadcom (Symantec) | *.messagelabs.com | Grote bedrijven |
| FortiMail | Fortinet | verschilt per installatie | IT-afdelingen die op Fortinet werken |
| Sophos Email | Sophos | *.sophos.com | Kleine bedrijven tot middenmarkt |

De kenmerken zijn de gangbare patronen. Sommige organisaties sturen mail via een SEG zonder duidelijke MX-naam. Het record is dus een sterke aanwijzing, geen bewijs.

**Waarom tools e-mails achter een SEG als Onbekend markeren.** De gateway onderschept de verbinding en laat nooit zien of de mailbox erachter bestaat. Zonder bruikbaar antwoord van de echte server heeft een standaardtool niets om te beoordelen, dus geeft hij Onbekend terug. In plaats van een duidelijke 250 (bestaat) of 550 (no such user) geeft de gateway vaak tijdelijke of ontwijkende antwoorden die de mailbox niet bevestigen en niet ontkennen. Bijvoorbeeld: 451 4.7.1 greylisted, 421 service not available, 450 4.2.1 mailbox temporarily unavailable, of de verbinding krijgt gewoon een time-out.

![Een secure email gateway die een verificatieverbinding onderschept, en waarom e-mails achter een SEG Onbekend teruggeven](/blog/seg-gateway-email-verification.svg)
De gateway beantwoordt de controle zelf en geeft alleen schone mail door aan de echte server. Een standaardverificatietool komt dus nooit te weten of de mailbox bestaat en geeft Onbekend terug.

Omdat de gateway de mailbox afschermt, is voor een adres achter een SEG meer nodig dan een standaardcontrole. Een tool heeft ofwel een manier om de mailbox achter de gateway te bevestigen, ofwel geeft hij het op en geeft hij Onbekend terug. Precies dat vermogen maakt het verschil tussen de tools hieronder.

## 4. Is er een manier om catch-all te verifiëren en langs een SEG te komen?

Ja, maar dat is pas de laatste paar jaar mogelijk. Om te begrijpen hoe, helpt het om te kijken hoe tools het vroeger deden.

### Vóór 2023

Vóór 2023 was het verifiëren van een catch-all-adres vooral een raadsel, en de meeste mensen wisten niet eens dat secure email gateways bestonden. Bijna elke tool gebruikte dezelfde methode: een SMTP-controle, vaak SMTP-ping genoemd.

Het werkt zo. De tool maakt verbinding met de ontvangende mailserver en begint aan de stappen om een bericht te versturen: HELO, MAIL FROM en daarna RCPT TO met het adres dat hij controleert. Hij leest de code waarmee de server antwoordt en stopt daar, zonder iets te versturen. Met die antwoordcode bepaalt de tool of het adres geldig is.

De meeste tools keken maar naar één code: 250. Die betekent dat de server de ontvanger accepteerde. Zagen ze 250, dan markeerden ze het adres als geldig. Zagen ze iets anders, dan markeerden ze het als ongeldig. Veel bounces kwamen precies hiervandaan, want 250 is niet de enige code, en hij betekent niet altijd dat de mailbox bestaat. Een paar andere codes zijn ook belangrijk:

- **250**: Geaccepteerd. De mailbox ontvangt mail, maar een catch-all-server zegt dit tegen elk adres, echt of nep.
- **251 / 252**: Geaccepteerd om door te sturen, of kan niet verifiëren maar probeert af te leveren. Onduidelijk, geen echt ja.
- **450 / 451 / 452**: Tijdelijke fout door greylisting, afremmen of een drukke server. Probeer het later opnieuw. Simpele tools lezen deze ten onrechte als ongeldig.
- **421**: Dienst nu niet beschikbaar. Tijdelijk, geen echt antwoord over de mailbox.
- **550**: No such user. De mailbox bestaat echt niet.
- **551 / 553**: Gebruiker niet lokaal, of het adres is niet toegestaan.
- **552**: Mailbox vol of over de limiet.

De regel "250 is goed, al het andere is slecht" geeft twee problemen. Een catch-all-server antwoordt 250 op elk adres, echt of nep. Een 250 bewijst dus niet dat de mailbox bestaat, en tools die erop vertrouwden, stuurden dode adressen mee in campagnes. Bij greylisting komt er bij de eerste poging een tijdelijke 4xx en bij een latere poging een acceptatie. Tools die die 4xx als ongeldig lazen, gooiden goede adressen weg. Tools die hem als onbekend lazen, gaven die adressen op.

De SMTP-controle werkte dus prima op gewone domeinen, maar had moeite met catch-all-domeinen en mail achter een gateway. Er is ook een tweede probleem dat de meeste tools over het hoofd zien: het antwoord dat je krijgt, hangt af van het IP-adres waarvandaan je controleert.

### Waarom de IP-infrastructuur belangrijk is

Als een tool verbinding maakt met een mailserver, kijkt de server eerst naar het IP-adres van de verbinding. Heeft het IP een goede reputatie, dan antwoordt de server normaal. Is het IP nieuw, onbekend of staat het al op een blokkeerlijst, dan kan de server antwoorden met een tijdelijke 4xx, de verbinding blokkeren of een antwoord geven dat niets te maken heeft met of de mailbox bestaat.

Daarom kan hetzelfde e-mailadres bij de ene tool Geldig terugkomen en bij een andere Riskant of Onbekend. Het adres is hetzelfde. De tools maakten alleen verbinding vanaf verschillende IP's, en de server behandelde elk IP anders.

![Hetzelfde e-mailadres dat bij twee tools verschillende resultaten geeft door de reputatie van het IP](/blog/email-verification-ip-reputation.svg)
Het adres is precies hetzelfde. Tool A controleert vanaf een IP dat de provider vertrouwt en krijgt een juist resultaat. Tool B controleert vanaf een gemarkeerd IP en wordt uitgesteld of geblokkeerd. De resultaten verschillen per tool, omdat de server de verbinding beoordeelt en niet alleen de mailbox.

Een goed IP is wat een juist antwoord van de server oplevert. Een pool van goede IP's bijhouden is duur. Ze hebben correcte reverse DNS nodig, een schone verzendgeschiedenis en bewaking, en je moet ze vervangen zodra er een gemarkeerd wordt. Een tool met reputatie en middelen kan zo'n infrastructuur draaien. Een goedkopere tool op een paar IP's van lage kwaliteit kan dat niet, en zijn resultaten zijn daardoor minder betrouwbaar. Bij het vergelijken van tools gaat het dus niet alleen om de methode. Het gaat er ook om of de mailserver het IP vertrouwt waarvandaan de tool controleert.

### Hoe doen de nieuwere tools het dan?

Na 2023 vonden sommige tools manieren om catch-all-mailboxen te verifiëren en langs SEG-gateways te komen. Om de echte methoden uit te leggen, is een apart artikel nodig. Maar het is goed om te zeggen wat ze niet zijn.

Het zijn geen naampatronen, zoals aannemen dat voornaam.achternaam@ bestaat. Het is geen gok door AI. Het is geen grote database met adressen, en het is niet je eerdere verificatiegeschiedenis. Geen van die dingen kan de echte vraag beantwoorden: bestaat deze mailbox nu, op het moment dat je controleert?

Wat werkt, is een maas vinden in hoe de grote providers antwoorden. Een manier om voorbij het catch-all-label en de gateway te komen en te zien of de mailbox er echt is.

Als dit kan, waarom doet niet elke tool het? Omdat het geen vaste, betrouwbare regel is. Het is een grote stap, en deze mazen kunnen op elk moment dichtgaan. Verandert een provider hoe hij antwoordt, dan kan de methode stoppen met werken en loopt de hele opzet vast. De tool moet dan een andere manier vinden. Daarom hebben een aantal grote tools, zoals NeverBounce en Reoon, deze stap nog niet gezet.

En zelfs de tools die het wel doen, kunnen geen perfecte resultaten beloven. Geen enkele tool kan eerlijk ook maar 90% nauwkeurigheid garanderen bij catch-all- en SEG-verificatie. Deze methoden hangen namelijk nog steeds af van het IP en de reputatie ervan. Hoe je er ook komt, aan het eind moet je de server van de e-mailprovider bereiken. En die server beoordeelt je nog steeds op het IP waarvandaan je verbinding maakt.

De tools die het kiezen waard zijn, doen dus twee dingen: een methode die werkt op de moeilijke adressen, en de IP-infrastructuur die het resultaat betrouwbaar maakt. Daar kijkt de vergelijking hieronder naar.

## 5. Hoe de e-mailverificatietools van 2026 zich verhouden, en hoe je de beste kiest

Elke tool op deze lijst doet de basis al goed: controle van de syntaxis, herkenning van wegwerp e-mailadressen en rol-adressen, herkenning van catch-all, een REST API en koppelingen met andere software. Dat is standaard in deze categorie, dus het beslist niets. Ik heb de zes geselecteerd en vergeleken op de punten die je resultaten en je kosten echt veranderen:

- De nauwkeurigheid die ze claimen
- Het bouncepercentage of de garantie die ze bieden
- Of ze catch-all-adressen verifiëren of alleen markeren
- Of ze kunnen verifiëren achter een SEG
- Of je ze kunt gebruiken in AI-tools zoals Claude en ChatGPT via MCP
- Hun klantbeoordeling op G2 en Trustpilot
- De startprijs

**Functies in één overzicht.**

| Tool | Catch-all | Langs een SEG | AI (MCP) | Beoordeling (G2 · Trustpilot) |
|---|---|---|---|---|
| Giggal.ai | Ja | Ja | Ingebouwd (Claude + ChatGPT) | 4,8 · 4,1 |
| BounceBan | Ja | Ja | Officiële MCP | 4,8 · 3,1 |
| ZeroBounce | Gedeeltelijk | Ja | Officiële MCP | 4,7 · 4,8 |
| MillionVerifier | Gedeeltelijk | Nee | Via Apify | 4,2 · 4,1 |
| Reoon | Alleen herkenning | Nee | Nee | 4,8 · Geen |
| NeverBounce | Gedeeltelijk | Nee | Nee | 4,1 · 2,0 |

**Nauwkeurigheid en prijzen.**

| Tool | Nauwkeurigheid | Bouncebeleid | Vanaf |
|---|---|---|---|
| Giggal.ai | 98,5% | Onder 3% | 1.000 gratis, US$ 9,90 per 10.000 |
| BounceBan | 97%+ | Onder 3% | 100 gratis, ca. US$ 34 per 10.000 |
| ZeroBounce | 99,6% | Geen belofte | 5 gratis per maand, US$ 129 eenmalig, of US$ 99 per maand (ZeroBounce ONE) |
| MillionVerifier | 99% | Terugbetaling boven 4% | 500 gratis, US$ 39 per 10.000 |
| Reoon | 99% | Betaalt onbekende resultaten terug | 600 gratis + 20 per dag, US$ 12 per 10.000 |
| NeverBounce | 97 tot 99% | Onder 2% | 10 gratis, US$ 8 per 1.000 |

### Giggal.ai

Gebouwd voor de moeilijke adressen. Giggal.ai controleert of de mailbox bestaat op [catch-all](/catch-all-verification)-domeinen, accept-all-domeinen en domeinen achter een SEG. Het geeft een echt geldig of ongeldig terug, waar de meeste tools stoppen bij riskant of onbekend. Het meldt 98,5% nauwkeurigheid over meer dan 500 miljoen geverifieerde e-mails en houdt bouncepercentages onder 3%. Bij het label Onbekend krijg je je credits terug. Het koppelt via een REST API en werkt direct in Claude en ChatGPT via MCP, zonder configuratiebestanden. Volgens het prijsbeleid verlopen credits nooit, en het heeft een sterke beoordeling van 4,8 op G2.

**[Koppelingen](/integrations):** HubSpot, Mailchimp, ActiveCampaign, SendGrid, Zapier en n8n, plus meer dan 80 andere, en AI-clients (Claude, ChatGPT, Cursor, VS Code en meer) via MCP.

**[Prijzen](/pricing):** 1.000 gratis, daarna US$ 9,90 per 10.000

### BounceBan

Richt zich op dezelfde moeilijke gevallen als Giggal. BounceBan claimt meer dan 97% nauwkeurigheid in totaal en 85 tot 95% op catch-all-adressen, adressen met greylisting en adressen achter een SEG, allemaal in realtime en zonder mail te versturen. Er is een officiële MCP-server voor AI-clients. Credits op basis van betalen per gebruik blijven staan en verlopen niet, en het heeft een sterke beoordeling van 4,8 op G2.

**Koppelingen:** Google Sheets, Clay, n8n, een plug-in voor Claude Code en een GPT voor ChatGPT, naast de REST API.

**[Prijzen](https://bounceban.com/pricing):** 100 gratis, ca. US$ 34 per 10.000

### ZeroBounce

Een volwassen, compleet platform met 99,6% geclaimde nauwkeurigheid en een garantie waarbij je 5 keer het bedrag terugkrijgt. Die garantie geldt alleen voor adressen die het als geldig markeert, niet voor catch-all of onbekend. Catch-all-adressen krijgen een AI-score van 1 tot 10 in plaats van een bevestiging per mailbox. ZeroBounce zegt dat het veel domeinen achter gateways zoals Proofpoint en Mimecast kan herkennen en indelen. Er is een officiële MCP-server voor Claude, Cursor en VS Code, plus meer dan 60 koppelingen. Het heeft hier de hoogste openbare beoordelingen, G2 4,7 en Trustpilot 4,8, en zit qua prijs aan de dure kant.

**[Koppelingen](https://www.zerobounce.net/integrations):** meer dan 60 ingebouwde, waaronder HubSpot, Salesforce, Mailchimp, Constant Contact, MailerLite, AWeber, Zoho CRM, Shopify en WordPress, plus Zapier.

**[Prijzen](https://www.zerobounce.net/pricing):** 5 gratis per maand, US$ 129 eenmalig, of US$ 99 per maand (ZeroBounce ONE)

**Vergelijking:** [ZeroBounce-alternatief](/zerobounce-alternative) · [ZeroBounce vs NeverBounce](/compare/zerobounce-vs-neverbounce)

### MillionVerifier

Vóór 2023 was dit de enige echt goedkope optie op grote schaal, met een miljoen credits voor US$ 449 en credits die nooit verlopen. Na 2023 kwamen BounceBan en [Giggal](/) met veel betere prijzen. De Catch-All Verifier lost ongeveer 30 tot 40% van de accept-all-adressen op en markeert de rest als Riskant. MillionVerifier verifieert niet achter een SEG. Het staat achter zijn resultaten met een terugbetaling als hard bounces boven 4% komen, en rekent niets voor catch-all- of onbekende resultaten. Een MCP-server is beschikbaar via Apify.

**Koppelingen:** Mailchimp, HubSpot, ActiveCampaign, Salesforce, ConvertKit en Intercom, naast meer dan 30 andere, plus Zapier en Make, met dagelijkse automatische opschoning via EverClean.

**[Prijzen](https://www.millionverifier.com/):** 500 gratis, US$ 39 per 10.000

### Reoon

Snelle, goedkope bulkverificatie met 99% geclaimde nauwkeurigheid. Reoon herkent catch-all-domeinen en markeert ze, maar lost de individuele mailbox niet op. Het verwerkt geen adressen achter een SEG. Bij het label Onbekend krijg je je credits terug. Er is geen toegang via MCP of AI-clients. Het heeft een van de goedkoopste instapprijzen in de categorie, met een gratis dagelijks tegoed en pakketten met levenslange credits.

**Koppelingen:** Mailchimp, HubSpot, Salesforce, SendGrid en ActiveCampaign, via Zapier, Make, Pabbly Connect, Albato en een plug-in voor WordPress.

**[Prijzen](https://www.reoon.com/email-verifier/):** 600 gratis + 20 per dag, US$ 12 per 10.000

### NeverBounce

Een betrouwbare standaardverificatietool met een realtime API en een bouncegarantie die de credit terugbetaalt als een geverifieerd adres bouncet. Het lost maar een klein deel van de catch-all-adressen op (8% in de test van LeadMagic) en markeert de rest. Het verifieert niet achter een SEG. Er is geen MCP. De prijs per e-mail begint rond US$ 0,008 en daalt tot ongeveer US$ 0,003 bij grote volumes.

**[Koppelingen](https://www.neverbounce.com/integrations):** Mailchimp, HubSpot, Marketo, Salesforce Marketing Cloud, Drip, Campaign Monitor, iContact en MailerLite, plus Zapier.

**[Prijzen](https://www.neverbounce.com/pricing):** 10 gratis, US$ 8 per 1.000

**Vergelijking:** [NeverBounce-alternatief](/neverbounce-alternative) · [ZeroBounce vs NeverBounce](/compare/zerobounce-vs-neverbounce)

## Conclusie

Bestaan je lijsten vooral uit gewone domeinen, dan doet elke betrouwbare verificatietool hier het werk. De meeste B2B-lijsten zijn zo niet. Ongeveer een derde van je contacten staat op catch-all-domeinen of domeinen achter een SEG. Dat zijn de adressen die ongemerkt bouncen en je afzenderreputatie kosten. Voor die lijsten heb je een tool nodig die de moeilijke adressen oplost, in plaats van ze te markeren en de beslissing aan jou terug te geven.

De test is dus simpel. Neem een steekproef uit je eigen lijst, haal die door de tools die je overweegt en houd de tool die de meeste moeilijke adressen omzet in een duidelijk resultaat zonder bounces. Voor lijsten met veel catch-all- en SEG-adressen is dat rijtje kort, en [Giggal.ai](/) staat erop.
