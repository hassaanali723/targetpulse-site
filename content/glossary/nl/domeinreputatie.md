---
title: Domeinreputatie
description: Wat de domeinreputatie van je e-mail is, hoe die verschilt van IP-reputatie, wat haar schaadt, hoe je haar controleert en hoe je je verzenddomein beschermt.
slug: domeinreputatie
date: 2026-10-12
updated: 2026-10-12
keyword: domeinreputatie
short: Domeinreputatie is hoeveel mailboxproviders zoals Gmail je verzenddomein vertrouwen. Je domein is het deel van je e-mailadres na de @, zoals example.com. Een goede domeinreputatie blijft bij je, ook als je van verzenddienst wisselt.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Bescherm je domeinreputatie voor je volgende verzending
---

## Wat is domeinreputatie?

Je domein is de naam na de @ in je e-mailadres. In anna@example.com is het domein example.com. Mailboxproviders zoals Gmail, Outlook.com en Yahoo houden een geschiedenis bij van de e-mail die van elk domein komt. Ze volgen bounces, spamklachten en authenticatieresultaten. Ze volgen ook hoe mensen op de e-mail reageren. Op basis van die geschiedenis bepalen ze hoeveel ze het domein vertrouwen. Dat niveau van vertrouwen is de domeinreputatie.

Providers kunnen elke e-mail aan het echte domein koppelen dankzij drie records. [SPF](/glossary/spf), [DKIM](/glossary/dkim) en [DMARC](/glossary/dmarc) bewijzen van welk domein een e-mail echt komt. Een bedrijf wisselt misschien vaak van verzendservers, maar houdt zijn domein meestal jarenlang.

## Een voorbeeld: overstappen naar een nieuwe ESP

Een bedrijf dat Brightline heet, verstuurt nieuwsbrieven vanaf news@brightline.com. Het gebruikt al drie jaar dezelfde ESP. Een ESP is een bedrijf dat e-mail verstuurt voor zijn klanten, zoals Mailchimp of Brevo.

Brightline besluit over te stappen naar een andere ESP. Dit verandert er.

1. De nieuwe ESP verstuurt vanaf andere servers, dus het IP-adres verandert. Een IP-adres is het nummer dat een server op internet aanduidt.
2. Het domein blijft hetzelfde. E-mails komen nog steeds van news@brightline.com.
3. Gmail ziet nieuwe IP-adressen. Maar Gmail herkent brightline.com en de DKIM-handtekening.
4. De domeinreputatie van Brightline gaat mee. De drie jaar geschiedenis helpen de e-mails om de inbox te blijven bereiken.

Het omgekeerde is ook waar. Als Brightline een slechte domeinreputatie had, zou een nieuwe ESP dat niet oplossen. Het probleem zou bij het domein blijven.

## Domeinreputatie en IP-reputatie

| | Domeinreputatie | IP-reputatie |
| --- | --- | --- |
| Wat wordt beoordeeld | Je verzenddomein, zoals example.com | Het serveradres waarvandaan je e-mail vertrekt |
| Verandert als je van ESP wisselt | Nee | Ja |
| Gedeeld met andere afzenders | Nee, alleen jij gebruikt je domein | Vaak, op een gedeeld IP-adres |
| Hoe de provider het herkent | Aan het domein in SPF, DKIM en DMARC | Aan het IP-adres dat verbinding maakt |

Providers gebruiken allebei. De pagina over [IP-reputatie](/glossary/ip-reputation) legt de andere helft uit.

## Wat domeinreputatie schaadt

- **Bounces.** Veel e-mails naar adressen die niet bestaan, wijzen op een lijst die is gekocht of nooit is opgeschoond.
- **Spamklachten.** De afzenderrichtlijnen van Google zeggen dat je het spampercentage onder 0,10 procent moet houden en nooit 0,30 procent mag bereiken.
- **Spamvallen.** Dit zijn adressen die alleen bestaan om afzenders met slechte lijsten te betrappen. Zie [spamval (spam trap)](/glossary/spam-trap).
- **Ontbrekende authenticatie.** Zonder SPF, DKIM en DMARC kunnen providers niet zeker weten dat een e-mail echt van jou is.
- **Plotseling veel e-mail.** Een nieuw of stil domein dat plotseling duizenden e-mails verstuurt, lijkt op wat spammers doen.

## Zo controleer je je domeinreputatie

Er bestaat niet één openbare score. Elke provider heeft zijn eigen beeld van je domein. Dit zijn de belangrijkste manieren om het te zien.

- **Google Postmaster Tools.** Een gratis dienst van Google voor e-mail naar Gmail-gebruikers. Je voegt je domein toe en bewijst met een DNS-record dat het van jou is. Een DNS-record is een instelling in het openbare register van je domein. Daarna toont de dienst gegevens zoals je spampercentage en je authenticatieresultaten. Zie [Google Postmaster Tools](/glossary/postmaster-tools).
- **Je eigen cijfers.** Dalende openpercentages bij één provider kunnen betekenen dat je e-mail daar in spam belandt.
- **Blacklistcontroles.** Tools zoals MXToolbox laten zien of je domein op een openbare domeinblacklist staat.

## Zo bescherm je je domeinreputatie

1. Stel SPF, DKIM en DMARC in voor elke dienst die e-mail verstuurt als jouw domein.
2. Verifieer je lijst voor elke grote verzending en verwijder adressen die zouden bouncen.
3. Verstuur cold e-mail vanaf een apart domein of subdomein, zoals brightline-mail.com of outreach.brightline.com. Zo houd je wat afstand tussen cold e-mail en je hoofddomein. Providers kunnen een subdomein nog steeds aan het hoofddomein koppelen.
4. Begin langzaam met een nieuw domein. Verstuur kleine dagelijkse aantallen en verhoog die over een aantal weken. Zie [e-mail warm-up](/glossary/email-warmup).
5. Maak afmelden makkelijk, zodat mensen zich afmelden in plaats van op "Spam melden" te klikken.

## Domeinreputatie en e-mailverificatie

Bounces zijn een van de signalen die providers gebruiken om je domein te beoordelen, en die heb je in de hand voordat je verstuurt. Een [email verifier](/email-checker) vindt adressen die niet bestaan. [Bulk e-mailverificatie](/bulk-email-verifier) doet hetzelfde voor een hele lijst, zodat je campagne naar echte mailboxen gaat. Regelmatige [e-mailverificatie](/) verwijdert ook oude adressen voordat ze worden hergebruikt als spamval. Het lost klachten of ontbrekende authenticatie niet op, dus de andere stappen hierboven blijven gelden.
