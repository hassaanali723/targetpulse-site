---
title: "Controleren of je e-maildomein op een blacklist staat (en hoe je eraf komt)"
seoTitle: "Blacklist controleren en je domein eraf halen (2026)"
description: "Zo controleer je of je e-maildomein of IP-adres op een blacklist staat, lees je SMTP-foutcodes, doe je een DNSBL-lookup en vraag je verwijdering aan."
slug: controleren-of-domein-op-blacklist-staat
date: 2026-11-07
updated: 2026-11-07
keyword: blacklist controleren
image: /blog/covers/nl/controleren-of-domein-op-blacklist-staat.webp
imageAlt: "Donkerblauwe banner over blacklistcontrole van e-mail, DNSBL-lookups en het verwijderen van een listing"
cta: "Controleer je lijst voordat je verstuurt"
---

Weinig problemen in e-mail zijn zo ingrijpend als een plotselinge daling van je bezorgbaarheid. De ene ochtend leveren je campagnes nog gewone reacties op. De volgende ochtend dalen de openpercentages bijna tot nul, komen er geen antwoorden meer en loopt je wachtrij voor uitgaande mail vol met weigeringen:

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Als ontvangende mailservers je berichten weigeren voordat ze de onderwerpregel of de inhoud bekijken, staat je verzendende IP-adres of je domein op een DNS-based Blackhole List (DNSBL). Die heet ook wel e-mailblacklist of RBL.

Een blacklistvermelding is geen tijdelijk inhoudsfilter. Het is een directe blokkade op netwerkniveau. Grote ontvangende netwerken (zoals Google Workspace, Microsoft 365, Yahoo Mail en gateways van bedrijven) raadplegen deze databases in realtime tijdens de eerste SMTP-handshake. Staat je IP-adres of domein erop, dan wordt de verbinding meteen verbroken.

Hieronder lees je hoe e-mailblacklists werken en hoe je controleert of je domein of IP-adres op de belangrijke antispamlijsten staat. Je leest ook hoe je een verwijderingsverzoek indient dat wordt goedgekeurd, en hoe je je afzenderreputatie beschermt tegen nieuwe vermeldingen.

---

## Blokkade door een blacklist of een spamfilter: wat is het verschil?

Zoek eerst uit of je te maken hebt met een blacklistvermelding of met een bericht dat in de spammap van de ontvanger belandt.

| Kenmerk | DNSBL / RBL-blacklist | Spamfilter van de mailboxprovider |
| --- | --- | --- |
| **Moment van detectie** | Eerste SMTP-handshake (verbindingsfase) | Analyse na de bezorging (sorteren in de inbox) |
| **Antwoord van de server** | Hard bounce (code `550` of `554`) of verbroken verbinding | Geaccepteerd met code `250 OK` |
| **Wat de ontvanger ziet** | De ontvanger krijgt de e-mail nooit | De e-mail komt in de spammap van de ontvanger |
| **Bereik** | Alle mailservers die die DNSBL gebruiken | Eén mailboxprovider (bijvoorbeeld alleen Gmail) |
| **Belangrijkste oorzaak** | Spamvallen geraakt, hoge bouncepercentages, open relays | Weinig betrokkenheid, spamachtige tekst, geen SPF/DKIM |
| **Oplossing** | Formeel verwijderingsverzoek bij de beheerder van de blacklist | Domein opwarmen, lijst opschonen, reputatie herstellen |

Komen je berichten in de spammap, maar tonen de logs van je mailserver de bezorgstatus `250 OK`? Dan staat je domein niet op een DNSBL. De ontvangende mailboxprovider sorteert je bericht dan op basis van zijn eigen reputatiescores.

Krijgt je mailserver harde weigeringen waarin de namen van blacklists staan? Dan heb je een actieve DNSBL-vermelding die je direct moet oplossen.

---

## Zo controleer je of je e-maildomein of IP-adres op een blacklist staat

Je controleert een blacklistvermelding door DNSBL-servers te vragen of je verzendende IP-adres of domein een positief record oplevert. Dat kan met automatische scanners die veel RBL's tegelijk controleren, of met handmatige DNS-lookups in je terminal.

### 1. Automatische scanners voor meerdere RBL's

Diensten voor een multi-RBL-lookup controleren tientallen openbare blacklists tegelijk, binnen een paar seconden. De betrouwbaarste gratis scanners zijn:

- **MXToolbox Blacklist Check**: controleert meer dan 100 DNSBL's voor je verzendende IP-adres of domeinnaam.
- **DNSChecker Email Blacklist**: snelle lookup tegelijk in meer dan 50 DNSBL- en SURBL-databases.
- **MultiRBL (valli.org)**: een lichte lookuptool voor ontwikkelaars die meer dan 200 blacklists controleert.

Voor een scan vul je je verzendende IP-adres in (het IP-adres van je mailserver, niet dat van de wifi op kantoor) of je verzenddomein (bijvoorbeeld `company.com`).

```youtube
wOIJHhHZt04
Bekijk: [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04) door InboxAlly: Mastering Email Deliverability
```

### 2. Handmatige DNSBL-controle via de opdrachtregel (voor systeembeheerders)

Webtools voor automatische lookups zijn handig. Met een handmatige query via `dig` of `nslookup` krijg je het antwoord rechtstreeks van de gezaghebbende nameservers van de blacklistbeheerder, zonder cache.

DNS-blacklists gebruiken de omgekeerde notatie van het IP-adres volgens [IETF RFC 5782](https://datatracker.ietf.org/doc/html/rfc5782). Zo controleer je een blacklist met de hand:

1. Draai de vier octetten van je verzendende IPv4-adres om. Is het IP-adres van je mailserver `198.51.100.24`, dan wordt dat `24.100.51.198`.
2. Zet het hoofddomein van de DNSBL erachter (bijvoorbeeld `zen.spamhaus.org`).
3. Voer een gewone DNS-query voor een `A`-record uit met `dig`:

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### De antwoordcode lezen

- **Geen antwoord / `NXDOMAIN`**: je IP-adres is schoon. De blacklist heeft geen negatief record voor je adres.
- **Antwoord `127.0.0.X`**: je IP-adres staat op de lijst. Het laatste octet geeft de soort vermelding aan:

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

Wil je weten of je domeinnaam (en niet je verzendende IP-adres) op een domeinblacklist (DBL) staat? Vraag dan de domeinnaam zelf op:

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

Het antwoord `127.0.1.2` betekent dat de domeinnaam zelf als spamdomein is gemarkeerd. Mailproviders weigeren je berichten dan, ook als je een ander verzendend IP-adres gaat gebruiken.

---

## De 5 blacklists die er echt toe doen

Er bestaan honderden openbare en private e-mailblacklists, maar slechts een paar bepalen echt of je e-mails in de inbox van ontvangers komen.

Veel kleine blacklists (zoals lijsten van individuele hobbyisten of diensten die geld vragen voor verwijdering) worden door de grote mailboxproviders genegeerd. Een vermelding op een onbekende lijst die niemand gebruikt, schaadt je bezorgbaarheid niet.

Richt je op de belangrijkste lijsten:

### 1. Spamhaus (ZEN: SBL, XBL, CSS, DBL)

Spamhaus is de antispamorganisatie met de meeste invloed ter wereld. De gegevens van Spamhaus beschermen wereldwijd meer dan 3 miljard mailboxen, waaronder grote telecomnetwerken, e-mailgateways van Fortune 500-bedrijven en e-mailproviders voor consumenten.

- **SBL (Spamhaus Block List)**: richt zich op bevestigde spambronnen, niet-bevestigde mailinglijsten en afzenders die spamvallen raken.
- **XBL (Exploit Block List)**: richt zich op servers die zijn besmet met exploits van derden, botnets en malware.
- **DBL (Domain Block List)**: markeert domeinen die voorkomen in spamberichten, phishing of bij hosting die misbruik niet aanpakt (bulletproof hosting).
- **ZEN**: de gecombineerde zone met de records van SBL, SBLCSS, XBL en PBL.

Een vermelding bij Spamhaus is een direct noodgeval voor je bedrijf. Ze blokkeert bezorging bij grote mailservers van bedrijven en bij internetproviders over de hele wereld.

### 2. Barracuda (BRBL)

De Barracuda Reputation Block List (`b.barracudacentral.org`) wordt beheerd door Barracuda Networks. De lijst is gebaseerd op verkeersgegevens van duizenden Barracuda Email Security Gateway-apparaten in bedrijfsnetwerken.

Stuur je B2B cold outreach of marketingmails naar grote bedrijven? Dan zorgt een vermelding bij Barracuda direct voor bounces bij zakelijke ontvangers die een Barracuda-filter gebruiken, op hun eigen servers of in de cloud.

### 3. SpamCop (SCBL)

SpamCop beheert een van de oudste blacklists op basis van meldingen (`bl.spamcop.net`). Afzenders komen er automatisch op als ontvangers e-mails als spam melden, of als automatische spamvallen ongewenste berichten ontvangen.

Anders dan bij Spamhaus zijn vermeldingen bij SpamCop dynamisch en kort. Ze verlopen meestal automatisch binnen 24 tot 48 uur, zodra de spamklachten onder de drempel zakken.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement is een commerciële reputatiedatabase voor bedrijven. Ze wordt vaak gebruikt door e-mailfilters van bedrijven met veel verkeer en door beveiligingssoftware. Invaluement staat bekend om het snel herkennen van snowshoe-spam (spam verspreid over grote blokken IP-adressen) en om het volgen van de reputatie van URL's op domeinniveau.

### 5. Waarom je UCEPROTECT Level 3 kunt negeren

Wie een multi-RBL-lookup gebruikt, schrikt vaak van een felrode vermelding op **UCEPROTECT Level 3**.

UCEPROTECT Level 3 zet hele subnetten en autonome systeemnummers (ASN's) op de lijst, en niet losse verzendende IP-adressen. Stuurt een andere klant van je cloudhostingprovider (zoals DigitalOcean, AWS, Linode of Hetzner) spam, dan markeert UCEPROTECT duizenden schone IP-adressen van dezelfde provider.

Omdat dit zoveel onschuldige afzenders raakt, gebruiken grote e-mailproviders (zoals Google, Microsoft en Yahoo) UCEPROTECT Level 3 niet om over bezorging te beslissen. Deliverability-specialisten en postmasters negeren vermeldingen op Level 3 meestal. Betaal geen kosten aan diensten die geld vragen voor verwijdering.

---

## Stappenplan om van een blacklist af te komen

Bevestigt je blacklistcontrole een actieve vermelding op een belangrijke database? Volg dan dit herstelplan in vier stappen.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

### Stap 1: stop direct met uitgaande verzending

Dien geen verwijderingsverzoek in zolang je mailserver nog berichten verstuurt. Vraag je verwijdering aan terwijl je server nog spamvallen raakt of bounces veroorzaakt, dan wordt je verzoek afgewezen. Je IP-adres wordt dan gemarkeerd als een overtreder die niet meewerkt en het steeds opnieuw doet.

- Pauzeer automatische reeksen en cold outreach-campagnes.
- Controleer de wachtrij van je mailserver (`mailq` bij Postfix) op grote hoeveelheden uitgaande spam door gehackte accounts of kwetsbare contactformulieren.

### Stap 2: zoek de oorzaak en los die op

Blacklists markeren geen IP-adressen zonder aanleiding. Bekijk je logs en je infrastructuur om te zien welke van deze vier veelvoorkomende oorzaken de vermelding veroorzaakte:

1. **Pristine spamvallen**: je stuurde mail naar adressen die nooit van een persoon zijn geweest. Deze adressen worden alleen gepubliceerd om bots te vangen die websites scrapen. Heb je een leadlijst gekocht of contactpagina's van websites gescrapet zonder verificatie, dan heb je waarschijnlijk een pristine spamval geraakt.
2. **Hoge bouncepercentages**: je bouncepercentage kwam boven 2,0% tot 5,0%. Dat wijst op verouderde, niet geverifieerde of verzonnen contactgegevens.
3. **Gehackte inloggegevens**: een gebruikersaccount op je server is gehackt en gebruikt om phishing of spam te versturen.
4. **Geen authenticatie**: je domein heeft geen kloppende SPF- en DKIM-records. Daardoor kunnen anderen je domeinnaam vervalsen.

### Stap 3: dien verwijderingsverzoeken in bij de belangrijkste beheerders

Is het probleem opgelost en zijn je logs schoon? Dien dan formele verwijderingsverzoeken in via de officiële portals:

#### Verwijdering bij Spamhaus
1. Ga naar de officiële [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/).
2. Vul je IP-adres of domein in dat op de lijst staat.
3. Bekijk de code en de beschrijving van de vermelding die Spamhaus toont.
4. Klik op de knop **Request Removal** en vul het verificatieformulier in.
5. Geef een werkend beheerdersadres op je eigen domein op. Een eerste verwijdering voor een schone afzender wordt meestal binnen 1 tot 4 uur verwerkt.

#### Verwijdering bij Barracuda
1. Ga naar het [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups).
2. Vul het IP-adres van je mailserver in.
3. Klik door naar het formulier **Barracuda Removal Request**.
4. Vul je contactgegevens in en leg duidelijk en feitelijk uit welke maatregelen je hebt genomen. De verwerking duurt meestal 12 tot 24 uur.

#### Verwijdering bij SpamCop
- Bij [SpamCop](https://www.spamcop.net/bl.shtml) is een handmatig verzoek zelden nodig. Heb je de mailstroom die het probleem veroorzaakte gestopt, dan haalt SpamCop de vermelding automatisch weg, 24 tot 48 uur na de laatste klacht.

### Wat je in een verwijderingsverzoek schrijft (en wat niet)

Verwijderingsverzoeken worden beoordeeld door ervaren netwerkengineers. Hoe je je verzoek formuleert, bepaalt of het wordt goedgekeurd:

> **Schrijf niet:**  
> *"Wij zijn een legitiem bedrijf en dit is een dringende vergissing. Dit kost ons geld. Verwijder ons IP-adres direct."*  
> (Dit geeft geen enkele technische zekerheid en krijgt een lagere prioriteit.)

> **Schrijf wel:**  
> *"We hebben een niet geverifieerde marketinglijst gevonden, geüpload op 24 oktober, die een piek in bounces en klachten veroorzaakte. We hebben de uitgaande verzending direct stopgezet. We hebben alle niet geverifieerde records verwijderd, voor elke verzending een automatische controle van de lijst ingesteld die ongeldige adressen en wegwerpadressen verwijdert, en we hebben de alignment van SPF en DKIM gecontroleerd. Onze wachtrij voor uitgaande mail is schoon."*

---

## Zo blijf je voorgoed van blacklists af

Een verwijdering is pas de eerste stap. Als je manier van verzenden niet verandert, staat je domein binnen een paar dagen weer op dezelfde blacklists.

Je afzenderreputatie beschermen vraagt drie maatregelen die je blijft toepassen:

### 1. Stel strikte e-mailauthenticatie in

Mailstromen zonder authenticatie zijn kwetsbaar voor domeinvervalsing. Gebruikt een spammer je domeinnaam in de `From:`-header van een phishingcampagne, dan lijdt de reputatie van je domein eronder.

- **SPF (Sender Policy Framework)**: geef expliciet aan welke mailservers namens je domein mogen versturen. Controleer je instellingen met onze gratis [SPF-checker](/spf-checker).
- **DKIM (DomainKeys Identified Mail)**: onderteken elk uitgaand bericht cryptografisch met een sleutel van 2048 bits. Met onze [DKIM-generator](/dkim-generator) maak je correcte DNS-sleutels.
- **DMARC**: vertel ontvangende servers dat ze niet geautoriseerde berichten die van je domein lijken te komen moeten weigeren.

### 2. Houd je bouncepercentage en SMR-gegevens in de gaten

Houd je bouncepercentage strikt onder 2,0%. Een bouncepercentage boven 3,0% wijst op slecht lijstonderhoud. Boven 5,0% volgt automatisch een blacklistvermelding bij filters van bedrijven.

- Gebruik onze tool [Bouncepercentage berekenen](/bounce-rate-calculator) om je bezorgcijfers van de afgelopen periode te meten en te vergelijken.
- Lees ons artikel over [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) om tijdelijke serverproblemen te onderscheiden van adressen die blijvend ongeldig zijn.

### 3. Schoon elke leadlijst op voordat je verstuurt

Meer dan 85% van de blacklistvermeldingen ontstaat doordat afzenders pristine spamvallen raken of steeds opnieuw mailen naar verwijderde mailboxen.

Gescrapete lijsten met prospects, verouderde CRM-databases en aanmeldingen voor webinars bevatten vaak domeinen met tikfouten, tijdelijke wegwerpadressen en verlaten adressen die zijn omgezet in recycled spamvallen.

Verifieer de adressen in een aparte verificatieronde voordat je contactlijsten importeert in je verzendplatform of je tool voor cold e-mail. Losse adressen controleer je met onze [gratis email checker](/email-checker). Wegwerpdomeinen herken je met onze [wegwerp-e-mailchecker](/disposable-email-checker). Lijsthygiëne filtert dode domeinen, syntaxisfouten, tijdelijke providers en bekende netwerken van spamvallen eruit voordat je mailserver ze bereikt.

---

## Veelgestelde vragen

### Hoe lang duurt het voordat een verwijdering van een blacklist werkt?
Keurt een beheerder je verwijderingsverzoek goed, dan worden zijn gezaghebbende DNSBL-servers bijna direct bijgewerkt. Ontvangende mailservers bewaren DNS-records echter lokaal in een cache. Afhankelijk van de TTL-instelling (Time to Live) van de ontvangende server duurt het meestal 2 tot 24 uur voordat de bezorging op alle netwerken weer normaal werkt.

### Kan mijn domein op een blacklist komen als ik een betrouwbare ESP gebruik, zoals Google Workspace of SendGrid?
Ja. E-mailproviders regelen de infrastructuur, maar jij blijft verantwoordelijk voor de adressen waar je naar mailt. Stuur je cold outreach of niet geverifieerde bulklijsten via Google Workspace of SendGrid en raak je spamvallen, dan kan Spamhaus je verzenddomein op de Domain Blocklist (DBL) zetten. Je mail wordt dan geweigerd, welk verzendplatform je ook gebruikt.

### Moet ik een nieuwe domeinnaam nemen als mijn domein op een blacklist staat?
Nee. Een domein op een blacklist opgeven en een nieuw domein registreren is een fout. Nieuwe domeinen hebben geen afzenderreputatie en krijgen bij mailboxproviders te maken met strenge limieten en greylisting. Het is sneller en beter voor je bezorgbaarheid op lange termijn om de oorzaak op te lossen, je lijst op te schonen en het formele verwijderingsproces voor je bestaande domein af te ronden.
