---
title: Google Postmaster Tools
description: Wat Google Postmaster Tools laat zien over de e-mail die je naar Gmail stuurt, hoe je het instelt, de spamlimieten van Google en wat het niet laat zien.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools is een gratis website van Google die laat zien hoe Gmail je verzenddomein beoordeelt. Het toont je spampercentage, domeinreputatie, IP-reputatie, authenticatieresultaten en bezorgfouten voor e-mail naar Gmail-gebruikers.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools meldt problemen na verzending. Verificatie voorkomt ze
---

## Wat is Google Postmaster Tools?

Google Postmaster Tools is een gratis website van Google voor mensen die e-mail versturen. De site laat zien hoe Gmail omgaat met de e-mail die je domein naar Gmail-adressen stuurt.

Eerst een paar begrippen. Een domein is de naam na de @ in je e-mailadres, zoals example.com. DNS is het openbare register waarin een domein zijn instellingen publiceert. Elke instelling heet een record.

Je voegt je domein toe en bewijst dat het van jou is door een DNS-record toe te voegen. Google toont je daarna gegevens over de e-mail die je domein naar Gmail-adressen stuurt. Het is gratis. Het is de enige officiële bron van informatie over hoe Gmail je domein beoordeelt.

Het gaat alleen over Gmail. E-mail naar Outlook.com, Yahoo of bedrijfsmailservers verschijnt er niet in. Microsoft heeft een aparte dienst voor zijn eigen netwerk.

## Een eenvoudig voorbeeld

Zo kan een klein bedrijf het gebruiken. De cijfers zijn alleen een voorbeeld.

1. **Een reisbureau meldt zich aan.** Sunny Trips voegt zijn domein, sunnytrips.example, toe aan Google Postmaster Tools.
2. **Het bedrijf bewijst dat het domein van hem is.** Google geeft het bedrijf een code. Het bedrijf zet die code als record in zijn DNS.
3. **Het blijft versturen.** Het verstuurt zijn wekelijkse nieuwsbrief. Veel klanten gebruiken Gmail.
4. **Er verschijnen gegevens.** Zodra er genoeg e-mail naar Gmail is gegaan, toont Google Postmaster Tools grafieken.
5. **Het ziet een probleem.** In een bepaalde week stijgt het spampercentage naar 0,25 procent. Dat betekent dat lezers 25 van elke 10.000 bezorgde e-mails als spam hebben gemarkeerd.
6. **Het vindt de oorzaak.** De stijging begon toen het bedrijf een nieuwe lijst mailde met mensen die zich nooit hadden aangemeld. Het stopt met die lijst.

Zonder het dashboard had Sunny Trips alleen dalende openpercentages gezien, zonder reden.

## Wat het laat zien

- **Spampercentage.** Het percentage van je bezorgde e-mail dat Gmail-gebruikers als spam hebben gemarkeerd. De afzenderrichtlijnen van Google verwijzen naar dit getal.
- **Domeinreputatie en IP-reputatie.** Een beoordeling voor elk: bad, low, medium of high. Je IP-adres is het nummer dat je verzendende server aanduidt. High betekent dat Gmail je e-mail zelden filtert. Bad betekent dat de meeste van je e-mail in spam belandt of wordt geweigerd.
- **Authenticatie.** Het percentage van je e-mail dat slaagt voor [SPF](/glossary/spf), [DKIM](/glossary/dkim) en [DMARC](/glossary/dmarc). Dit zijn records op je domein die bewijzen dat een e-mail echt van jou komt.
- **Versleuteling.** Het percentage van je e-mail dat via TLS is verstuurd. TLS is een standaard die e-mail versleutelt terwijl die tussen servers reist.
- **Bezorgfouten.** Het percentage van je e-mail dat Gmail heeft geweigerd of vertraagd, met de reden.
- **Feedback loop.** Klachtenpercentages per campagne, voor grote afzenders die de header Feedback-ID gebruiken. Een header is een regel technische informatie bovenaan een e-mail.

## De limieten die Google publiceert

De afzenderrichtlijnen van Google zeggen:

1. Houd het spampercentage in Postmaster Tools onder 0,10 procent.
2. Bereik nooit een spampercentage van 0,30 procent of hoger.
3. Afzenders van 5.000 of meer berichten per dag moeten SPF, DKIM en DMARC hebben.
4. Marketingmail van deze afzenders moet afmelden met één klik bieden.

Bij afzenders die boven 0,30 procent komen, wordt de e-mail gefilterd of geweigerd. Deze limieten zijn klein. Op 10.000 bezorgde e-mails is 0,30 procent gelijk aan 30 klachten.

## Wat het niet laat zien

Postmaster Tools rapporteert over e-mail die is bezorgd. Het kan je geen adressen tonen die niet bestaan. Een e-mail naar een dood adres wordt geweigerd tijdens de SMTP-verbinding. SMTP is de standaardmanier waarop mailservers e-mail naar elkaar sturen. Die weigering is een bounce, het automatische bericht dat zegt dat een e-mail niet is bezorgd.

Bounces tellen niet mee in het spampercentage. Een lijst met veel ongeldige adressen kan een laag spampercentage tonen, terwijl het bouncepercentage je reputatie schaadt.

**Voorbeeld:** een winkel mailt naar 10.000 adressen, en 1.000 daarvan bestaan niet. Google Postmaster Tools toont een goed spampercentage, omdat het alleen de bezorgde e-mails telt. De 1.000 bounces zitten niet in dat getal.

Postmaster Tools heeft ook volume nodig. Als je domein maar weinig e-mail naar Gmail stuurt, blijven de grafieken leeg. Google publiceert het minimale volume niet.

## Hoe het samenwerkt met verificatie

Postmaster Tools meldt problemen nadat je hebt verstuurd. Verificatie neemt de oorzaken weg voordat je verstuurt. Als je een lijst door een [email checker](/email-checker) haalt, verwijder je adressen die bouncen. Je verwijdert ook wegwerp e-mailadressen en rol-adressen die klachten veroorzaken. Met [bulk e-mailverificatie](/bulk-email-verifier) doe je dit voor een hele lijst in één upload. Daarna heeft Postmaster Tools minder te melden.

[E-mailverificatie](/) verandert je beoordelingen bij Gmail niet uit zichzelf. Het voorkomt dat je mailt naar adressen die niet bestaan. De gids over het [bouncepercentage van e-mail](/blog/how-to-reduce-email-bounce-rate) legt beide kanten uit.
