---
title: "Wat betekent Cleaned in Mailchimp?"
seoTitle: "Wat betekent Cleaned in Mailchimp? Oorzaken en wat je doet"
description: "Cleaned in Mailchimp betekent dat een adres hard of steeds soft bouncete, en dat Mailchimp er niet meer naar verstuurt. Waarom, wat het kost en wat je nu doet."
slug: wat-betekent-cleaned-in-mailchimp
date: 2026-10-22
updated: 2026-10-22
keyword: wat betekent cleaned in mailchimp
image: /blog/covers/nl/wat-betekent-cleaned-in-mailchimp.webp
imageAlt: Gids over Cleaned in je Mailchimp-audience met de oorzaken van bounces en de verschillen tussen statussen
cta: Vind ongeldige adressen voordat Mailchimp ze op Cleaned zet
---

Cleaned in Mailchimp betekent dat Mailchimp niet meer naar dat adres verstuurt. Het adres gaf een hard bounce, of te vaak een soft bounce, en Mailchimp beschouwt het als ongeldig. De naam zet mensen op het verkeerde been. Cleaned klinkt alsof Mailchimp iets voor je heeft opgeruimd of gerepareerd. In werkelijkheid is er niets hersteld. Het contact blijft in je audience staan met het label Cleaned. Het kan geen e-mail meer van je ontvangen en telt niet mee voor je maandelijkse limiet aan contacten.

## Waarom Mailchimp een adres op Cleaned zet

Hard bounces zijn permanente fouten in de aflevering, waarbij een ontvangende server een e-mail direct weigert. De gebruikelijke redenen volgens Mailchimp zijn een mailbox die niet bestaat en een ontvangende server die de aflevering permanent heeft geblokkeerd. Typfouten zoals con in plaats van com, en oude adressen van mensen die bij een bedrijf zijn vertrokken, zijn bekende voorbeelden. In de meeste gevallen zet Mailchimp adressen die hard bouncen automatisch en direct op Cleaned. Ze worden dan uitgesloten van elke volgende campagne naar je audience.

Soft bounces werken anders, omdat het tijdelijke fouten in de aflevering zijn. Bouncet een adres soft, dan probeert Mailchimp het bij volgende verzendingen opnieuw in plaats van het direct af te sluiten. Maar blijft een adres steeds falen, dan maakt Mailchimp er een hard bounce van en zet het op Cleaned. Mailchimp gebruikt daarvoor een vast aantal. Het zet een adres op Cleaned na 7 soft bounces als het contact geen eerdere activiteit als abonnee heeft. Voor contacten met eerdere activiteit als abonnee staat het tot 15 soft bounces toe.

Mailchimp noemt meerdere redenen waarom een campagnebericht soft kan bouncen. De mailbox van de ontvanger kan vol, inactief of verkeerd ingesteld zijn. De mailserver kan uitgevallen of offline zijn, of je campagne heeft in korte tijd te veel e-mails naar die server gestuurd. Andere redenen voor een soft bounce zijn berichten die te groot zijn, domeinen die tijdelijk niet bestaan, inhoudsfilters, of berichten die niet kunnen worden doorgestuurd. Een e-mail kan ook soft bouncen als hij niet voldoet aan de eisen van de doelserver voor antivirus, antispam of afzenders, of als het bericht [niet slaagde voor DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp zegt dat het niet kan voorspellen of een e-mail gaat bouncen voordat je hem verstuurt. Elke mailboxprovider laat mail bouncen volgens zijn eigen regels. Is een campagne verstuurd, dan blijven de bouncemeldingen 30 dagen beschikbaar in je e-mailrapporten in Mailchimp. Lees meer over hoe mailservers problemen met de aflevering indelen in onze gids over [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce), of bekijk de gids van Mailchimp over [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned tegenover Unsubscribed, Archived en andere soorten contacten

Mailchimp deelt contacten in aparte groepen in. Die bepalen of ze berichten kunnen ontvangen en of je voor ze betaalt:

| Status | Wat het betekent | Kan ontvangen | Telt mee voor de limiet aan contacten |
| --- | --- | --- | --- |
| Subscribed | Heeft zich aangemeld voor je e-mailcampagnes | Marketingmails, marketing-sms'jes, advertenties, transactionele e-mails | Ja |
| Unsubscribed | Heeft zich afgemeld voor je marketingcampagnes | Advertenties en transactionele e-mails | Ja |
| Non-subscribed | Had contact met je (een winkel, integratie of import) maar heeft zich nooit aangemeld | Advertenties en transactionele e-mails | Ja |
| Cleaned | Het adres gaf een hard bounce of herhaalde soft bounces en is onbestelbaar | Niets | Nee |
| Pending | Heeft een aanmeldformulier ingevuld maar de double opt-in niet bevestigd | Niets | Nee |
| Archived | Uit de actieve audience gehaald, met behoud van de profielgegevens | Niets | Nee |
| Deleted | Permanent verwijderd, kan niet ongedaan worden gemaakt | Niets | Nee |

De statussen Cleaned en Unsubscribed voorkomen allebei dat je marketingcampagnes naar een e-mailadres stuurt. Maar het verschil telt voor je maandelijkse rekening. Unsubscribed is de keuze van de abonnee, en Mailchimp telt dat contact nog steeds mee voor je maandelijkse limiet aan contacten. Cleaned is de beslissing van Mailchimp nadat de aflevering mislukte. Het adres kan niets ontvangen, en Mailchimp rekent er niets voor. Pending-contacten die onbevestigd blijven, worden na 60 dagen automatisch uit je audience verwijderd. Accounts op oude betaalde abonnementen die vóór 15 mei 2019 zijn aangemaakt, kunnen andere regels hebben voor de limiet aan contacten.

## Wat je doet met contacten op Cleaned

Mailchimp raadt aan contacten op Cleaned te archiveren in plaats van te verwijderen. Archiveren bewaart de geschiedenis van het contact en houdt het slechte adres vastgelegd in je audience. Volgens Mailchimp helpt dat je om niet opnieuw naar dat adres te bouncen. Mailchimp raadt aan contacten alleen te verwijderen voor verzoeken onder de AVG (GDPR), omdat verwijderen het record permanent wist en niet ongedaan kan worden gemaakt. Contacten op Cleaned archiveren verlaagt je maandelijkse rekening niet, omdat adressen op Cleaned toch al niet meetellen voor de limiet van je abonnement. Mailchimp legt dit beleid uit in de documentatie [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Wil je alle adressen op Cleaned in je Mailchimp-audience bekijken of exporteren, dan kun je ze apart zetten met segmenten. De namen hieronder zijn die uit de Engelse versie van Mailchimp:

1. Open het tabblad Audience in je Mailchimp-dashboard en klik op Segments.
2. Klik op Create segment.
3. Stel de voorwaarde in zodat Email subscription status is one of Cleaned.
4. Klik op Use segment, geef het segment een naam en sla het op.
5. Open het opgeslagen segment, klik op Export segment en bevestig de export.
6. Klik op View exports in de melding bovenaan, en klik daarna op Download CSV om het bestand op te slaan.

Komt een contact op Cleaned door een simpele typfout, zoals user@gmai.com of name@conpany.com, dan kun je het bestaande contact niet bewerken. Voeg het verbeterde e-mailadres toe als een gloednieuw contact om de fout te herstellen. Mailchimp rekent niets voor adressen op Cleaned. Het oorspronkelijke record met de typfout laten staan, kost je dus niets.

Geldige e-mailadressen geven soms toch een hard bounce. Bekijk de reden van de bounce in je campagnerapport voordat je iets doet. Een strenge bedrijfsfirewall of een spamfilter kan het bericht hebben geweigerd met SMTP-antwoorden als Denied, Unacceptable Content of Blocked. Bij bedrijven kan een filter de verzendende IP-adressen van Mailchimp volledig blokkeren. De IT-afdeling van de ontvanger kan dat oplossen door de IP-adressen van Mailchimp aan de allowlist toe te voegen. In andere gevallen blokkeert een grote mailboxprovider je tijdelijk. Volgens Mailchimp kan dat binnen een dag of twee worden opgeheven zodra de spamklachten afnemen. Je kunt de foutmeldingen van een server ontleden door [bouncemeldingen te lezen](/blog/550-5-7-1-error). Is het adres zeker geldig en is het probleem met de aflevering opgelost? Dan moet het contact zich opnieuw aanmelden via je aanmeldformulier om weer in je audience te komen. Mailchimp laat je een contact op Cleaned niet zelf terugzetten naar Subscribed.

## Als veel contacten tegelijk op Cleaned komen

Kwamen door een recente campagne veel contacten tegelijk op Cleaned, dan kan je account automatisch worden opgeschort. Mailchimp schort accounts automatisch op als één verzending de gangbare grenzen in de branche overschrijdt voor bounces, afmeldingen of klachten over misbruik. Mailchimp zegt dat internetproviders en antispamorganisaties eisen dat het deze limieten handhaaft. Schort Mailchimp je account op, dan is versturen uitgeschakeld terwijl compliance-teams het onderzoeken. Inloggen, API-aanroepen en toegang tot je data blijven gewoon werken.

Oude lijsten zijn meestal de oorzaak, omdat mensen van baan wisselen, mailboxen verlaten en accounts opheffen. Heb je je audience een tijd niet gemaild, dan raadt Mailchimp aan je contacten opnieuw te laten bevestigen voordat je een grote campagne inplant. Je vraagt abonnees dan te bevestigen dat ze je berichten nog willen ontvangen.

Mailchimp raadt ook sterk aan je verzenddomein te authenticeren, [DMARC in te stellen](/blog/what-is-a-dmarc-record) en nooit een gratis e-mailadres van Gmail of Yahoo als From-adres te gebruiken.

## Zo voorkom je dat contacten op Cleaned komen

De meest directe manier om te voorkomen dat adressen op Cleaned komen, is je lijsten verifiëren voordat je ze importeert of campagnes verstuurt. Een tool voor e-mailverificatie test vóór een campagne of elke mailbox echt bestaat op de doelserver. Zo bouncen ongeldige adressen niet in je account. Daarvoor kan [Giggal met Mailchimp verbinden](/integrations) via een API-sleutel. Giggal importeert de contacten in je audience met de status Subscribed, controleert of elke mailbox bestaat en geeft een resultaat voor adressen op [catch-all-domeinen](/catch-all-verification). Is de verificatie klaar, dan download je de resultaten als CSV-bestand. Daarna archiveer je de slechte adressen in Mailchimp of zet je ze zelf op Unsubscribed. Giggal verandert zelf niets in je Mailchimp-audience.

Verifiëren voor je verstuurt, houdt bounces laag. Heb je een ouder segment dat een tijd geen e-mail heeft gekregen? Haal het dan door een verificatietool of stuur een campagne om de aanmelding te laten bevestigen, voordat je het in een grote nieuwsbrief opneemt. Zorg dat de records voor de authenticatie van je domein geldig blijven in DNS. Een fout in de DMARC-alignment is namelijk een van de bekende oorzaken van een soft bounce bij Mailchimp. Onthoud dat je audience verifiëren geen contacten herstelt die Mailchimp al op Cleaned heeft gezet. Heeft een adres eenmaal de status Cleaned, dan laat Mailchimp die persoon alleen terugkomen via een nieuwe aanmelding op je aanmeldformulier.

## Veelgestelde vragen

**Tellen contacten op Cleaned mee voor mijn rekening bij Mailchimp?**
Nee. Contacten op Cleaned tellen niet mee voor je maandelijkse limiet aan contacten, en Mailchimp rekent er niets voor. Van alle soorten contacten tellen alleen Subscribed, Unsubscribed en Non-subscribed mee voor de limiet van je abonnement.

**Kan ik een contact op Cleaned opnieuw aanmelden?**
Nee. Je kunt een contact op Cleaned niet zelf terugzetten naar Subscribed in je Mailchimp-dashboard. De abonnee moet zijn gegevens opnieuw invullen via je aanmeldformulier van Mailchimp of een formulier op je website om zich opnieuw aan te melden.

**Na hoeveel soft bounces zet Mailchimp een contact op Cleaned?**
Mailchimp zet een adres op Cleaned na 7 soft bounces als het contact geen eerdere activiteit als abonnee heeft. Heeft het contact wel eerdere activiteit als abonnee, dan staat Mailchimp tot 15 soft bounces toe voordat het het adres omzet naar een hard bounce en op Cleaned zet.

**Moet ik contacten op Cleaned verwijderen?**
Nee. Mailchimp raadt aan contacten op Cleaned te archiveren in plaats van te verwijderen. Archiveren houdt het record in je audience. Volgens Mailchimp helpt dat je om niet opnieuw naar dat adres te bouncen. Mailchimp zegt dat je contacten alleen voor de AVG (GDPR) moet verwijderen.

**Waarom zette Mailchimp een adres op Cleaned waarvan ik weet dat het geldig is?**
Geldige e-mailadressen kunnen hard bouncen als een spamfilter of firewall van een bedrijf de servers van Mailchimp blokkeert met SMTP-antwoorden als Denied of Blocked. Vraagt de ontvanger de netwerkbeheerder om de verzendende IP-adressen van Mailchimp op de allowlist te zetten, dan kan die persoon zich via je aanmeldformulier opnieuw bij je audience aanmelden.

Met het label Cleaned beschermt Mailchimp je afzenderreputatie achteraf. Eerst verifiëren voorkomt dat de bounce überhaupt gebeurt. Haal je lijst met abonnees voor je volgende verzending door [Giggal.ai](/email-list-cleaning) (in het Engels) om ongeldige adressen te vinden voordat Mailchimp ze op Cleaned zet.
