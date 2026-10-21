---
title: IP-reputatie
description: Wat de IP-reputatie van je e-mail is, hoe gedeelde en dedicated IP-adressen verschillen, wat haar opbouwt of schaadt, hoe je haar controleert en verbetert.
slug: ip-reputatie
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputatie
short: IP-reputatie is hoeveel mailboxproviders zoals Gmail en Outlook het IP-adres vertrouwen waarvandaan je e-mails komen. Een IP-adres is het nummer dat een server op internet aanduidt. Met een slechte IP-reputatie komen je e-mails in spam terecht of worden ze geblokkeerd.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Houd dode adressen van je lijst om je IP-reputatie te beschermen
---

## Wat is IP-reputatie?

Elke server op internet heeft een IP-adres. Dat is een nummer, zoals `192.0.2.10`, dat de server aanduidt. Als je een e-mail verstuurt, vertrekt die vanaf een server met een IP-adres.

Mailboxproviders zoals Gmail, Outlook.com en Yahoo volgen de e-mail die van elk IP-adres komt. Ze tellen hoeveel e-mails bouncen en hoeveel mensen ze als spam markeren. Ze kijken ook of het IP-adres op [blacklists](/glossary/email-blacklist) staat. Op basis van die geschiedenis bepalen ze hoeveel ze het IP-adres vertrouwen. Dat niveau van vertrouwen is de IP-reputatie.

Een goede IP-reputatie voor e-mail helpt je e-mails de inbox te bereiken. Een slechte leidt tot de spammap, tragere bezorging of geweigerde e-mails.

## Een voorbeeld: twee afzenders op één gedeeld IP-adres

Een ESP is een bedrijf dat e-mail verstuurt voor zijn klanten, zoals Mailchimp of SendGrid. Stel dat twee klanten van een ESP vanaf hetzelfde IP-adres versturen, `192.0.2.10`.

- **Klant A** is een boekwinkel. Die mailt mensen die zich op de website hebben aangemeld. Weinig e-mails bouncen, en weinig mensen klagen.
- **Klant B** heeft een lijst van 50.000 adressen gekocht. Duizenden daarvan bouncen. Veel ontvangers klikken op "Spam melden".

Gmail koppelt de bounces en klachten aan `192.0.2.10`. De reputatie van dat IP-adres daalt. Sommige e-mails van de boekwinkel kunnen nu ook in spam belanden, terwijl de boekwinkel niets verkeerd heeft gedaan.

ESP's proberen dit te voorkomen. Veel van hen houden de bounce- en klachtenpercentages van elke klant in de gaten. Ze pauzeren accounts zoals dat van klant B, om de andere klanten op hetzelfde IP-adres te beschermen.

## Gedeeld IP-adres en dedicated IP-adres

| | Gedeeld IP-adres | Dedicated IP-adres |
| --- | --- | --- |
| Wie ervandaan verstuurt | Veel klanten van dezelfde ESP | Alleen jij |
| Waar de reputatie van afhangt | Iedereen die ervandaan verstuurt | Alleen jouw e-mail |
| Voor wie het geschikt is | Kleine en middelgrote afzenders | Grote afzenders met een vast volume |
| Instellen | Direct te gebruiken | Moet eerst worden opgewarmd |

Met een dedicated IP-adres heb je de reputatie volledig zelf in de hand. Het betekent ook dat de goede e-mail van anderen je niet helpt. Een nieuw dedicated IP-adres heeft geen geschiedenis, dus je bouwt de reputatie langzaam op.

## Wat IP-reputatie opbouwt of schaadt

Dit bouwt een goede IP-reputatie op:

- Een vaste hoeveelheid e-mail versturen, zonder plotselinge sprongen.
- Lage bouncepercentages, omdat je lijst schoon is.
- Weinig spamklachten, omdat mensen om je e-mail hebben gevraagd.

Dit schaadt haar:

- Veel [hard bounces](/glossary/hard-bounce) van adressen die niet bestaan.
- E-mails naar [spamvallen (spam traps)](/glossary/spam-trap). Dat zijn adressen die alleen bestaan om afzenders met slechte lijsten te betrappen.
- Spamklachten van mensen die je e-mail niet verwachtten.
- Een vermelding op een blacklist zoals Spamhaus.
- Een grote hoeveelheid e-mail vanaf een nieuw IP-adres zonder geschiedenis.

## Zo controleer je je IP-reputatie

1. Zoek je verzendende IP-adres op. Stuur jezelf een e-mail op Gmail, open die en kies Origineel weergeven. Gmail toont het IP-adres naast het SPF-resultaat. Je ESP kan het je ook vertellen.
2. Vul het IP-adres in bij een blacklist checker zoals MXToolbox. Die controleert het IP-adres in één keer op veel openbare blacklists.
3. Meld je voor Outlook.com aan bij Microsoft SNDS (Smart Network Data Services). Dat toont gegevens over de e-mail die je IP-adres naar Outlook.com-gebruikers stuurt.
4. Gebruik voor Gmail [Google Postmaster Tools](/glossary/postmaster-tools). Dat toont gegevens over de e-mail die je domein naar Gmail-gebruikers stuurt.

## Zo verbeter je je IP-reputatie

1. Zoek en herstel eerst de oorzaak, zoals een slechte lijst of een gehackt account.
2. Verwijder adressen die bouncen en verifieer je lijst voor de volgende verzending.
3. Stop met mailen naar mensen die je e-mail nooit openen.
4. Staat je IP-adres op een blacklist, vraag dan om verwijdering nadat je de oorzaak hebt opgelost.
5. Begin langzaam met elk nieuw IP-adres. Verstuur kleine dagelijkse aantallen en verhoog die over een aantal weken. Zie [IP warming](/glossary/ip-warming).

## IP-reputatie en domeinreputatie

IP-reputatie hoort bij het serveradres. [Domeinreputatie](/glossary/domain-reputation) hoort bij de naam na de @ in je e-mailadres, zoals example.com. Als je overstapt naar een nieuwe ESP, verandert je IP-adres, maar blijft je domein hetzelfde. Providers gebruiken allebei, en een probleem met een van de twee kan je bezorging schaden.

## IP-reputatie en e-mailverificatie

Bounces en spamvallen schaden allebei de IP-reputatie, en ze komen allebei van slechte adressen op je lijst. Een [email checker](/email-checker) vraagt de ontvangende server of een adres bestaat, voordat je verstuurt. [Bulk e-mailverificatie](/bulk-email-verifier) doet dit voor een hele lijst en markeert de adressen die zouden bouncen. Als je ze verwijdert met [e-mailverificatie](/), worden er minder bounces aan je IP-adres gekoppeld. Verificatie kan niet elke spamval vinden, want sommige spamvallen zijn werkende mailboxen. Maar het verwijdert dode adressen voordat ze in spamvallen worden veranderd.
