---
title: "Waarom bouncen e-mails? Oorzaken en wat je daarna doet"
description: "Waarom e-mails bouncen, hard tegenover soft, de oorzaken op volgorde van hoe vaak ze voorkomen bij cold campagnes, wat een bounce betekent en wat je ermee doet."
slug: waarom-cold-e-mails-bouncen
date: 2026-10-22
updated: 2026-10-22
keyword: waarom bouncen e-mails
image: /blog/covers/nl/waarom-cold-e-mails-bouncen.webp
imageAlt: "SMTP-bouncecodes: 550 5.1.1 hard, 4.x.x soft en 5.7.1 geblokkeerd"
cta: Verlaag je bouncepercentage voor de volgende verzending
---

Een cold e-mail bouncet als de ontvangende server het bericht weigert en terugstuurt in plaats van het af te leveren. Heb je net een campagne verstuurd en wil je weten waarom cold e-mails vaker bouncen dan je gewone mail? Dan komt het meestal neer op twee dingen. Je mailt mensen die nooit om jouw bericht hebben gevraagd, dus de lijst is kouder en minder nauwkeurig. En je verstuurt vanaf een domein waar de server van de ontvanger geen geschiedenis mee heeft. De losse oorzaken vallen onder die twee.

## Wat is een gebouncete e-mail?

Een gebouncete e-mail is een bericht dat de ontvangende mailserver heeft geweigerd en teruggestuurd, met een redencode, in plaats van het in een mailbox te zetten. Het antwoord komt van de server, niet van de persoon. Het komt binnen als onbestelbaarheidsrapport (NDR) in de inbox van de afzender of in het bouncelog van de verzendtool. De code in dat rapport is het nuttige deel. Een 5xx-code is een permanente weigering, een 4xx-code is een tijdelijke. Vragen over wat een bounce betekent, komen bijna altijd neer op het lezen van die code.

## Hard bounces en soft bounces zijn niet hetzelfde probleem

Kijk eerst welk soort bounce je hebt gekregen. Dat bepaalt wat je daarna doet.

Een hard bounce is permanent. Het adres bestaat niet, het domein bestaat niet, of de server heeft het bericht botweg geweigerd. Een bericht met een hard bounce wordt nooit afgeleverd, en het adres moet direct van je lijst. Een soft bounce is tijdelijk. De mailbox was vol, de server was druk, of het bericht werd vastgehouden voor een nadere controle. Soft bounces lossen zich soms vanzelf op, en een verzendtool probeert ze meestal opnieuw voor je.

Het onderscheid is belangrijk vanwege je reputatie. Mailboxproviders letten op hoe vaak je mailt naar adressen die hard bouncen. Gebeurt dat vaak, dan zien ze je als iemand die met een slechte lijst werkt. Eén dood adres is ruis. Een campagne vol dode adressen is een signaal.

## De gebruikelijke oorzaken, de meest voorkomende eerst

Bounces hebben meestal een van een handvol oorzaken. Ongeveer in de volgorde waarin ze bij cold campagnes voorkomen:

- Het adres bestaat niet meer. Mensen wisselen van baan. De mailbox wordt verwijderd, maar het contact blijft staan in een database die je hebt gekocht of gescrapet.
- Het domein zelf is weg. Kleine bedrijven stoppen, hun domein werkt niet meer, en er is geen server meer die iets aanneemt.
- De mailbox is vol. Dit komt vaak voor bij verwaarloosde of persoonlijke adressen, en is meestal een soft bounce.
- De ontvangende server heeft je verzenddomein geweigerd. Dit is een blokkade op basis van reputatie of beleid, geen probleem met de ontvanger.
- Greylisting. De server weigert tijdelijk een eerste poging van een onbekende afzender en accepteert de nieuwe poging een paar minuten later.
- Spamfiltering. Het bericht werd geweigerd op basis van inhoud of beleid, voordat het de inbox bereikte.

De volgorde is belangrijk. De bovenste twee, dode adressen en dode domeinen, vangt verificatie af. Ze komen ook het meest voor op een gekochte of gescrapete lijst. De oorzaken lager in de lijst hebben meer te maken met timing en je eigen instellingen dan met het adres.

Je kunt de oorzaak vaak direct uit de bouncemelding lezen. Een regel als 550 5.1.1 user unknown is een hard bounce voor een adres dat niet bestaat. Een 451 4.7.1 greylisted, try again later is een soft, tijdelijke weigering die bij de nieuwe poging meestal verdwijnt. Als je de code leert lezen, hoef je niet te raden naar de reden.

## Wat betekent "e-mail bounce back"?

Bounce back is de gewone naam voor hetzelfde: je bericht kwam bij je terug. De tekst in het rapport verschilt per provider. Gmail zegt "Address not found", Microsoft 365 zegt "Recipient address rejected", en servers in de stijl van Postfix citeren de ruwe SMTP-regel, 550 5.1.1 User unknown. Alle drie betekenen dat de mailbox er niet is. Een bounce back met "mailbox full", "greylisted" of "try again later" is tijdelijk. Die verdwijnt meestal bij de nieuwe poging die je verzendtool doet.

## Niet elke bounce is een probleem met je lijst

Het is verleidelijk om elke bounce te zien als een slecht adres. Maar een flink deel van de bounces bij cold e-mail heeft niets met je lijst te maken. Is je verzenddomein nieuw en niet opgewarmd, dan behandelen servers het met argwaan en weigeren ze meer van je mail. Een gloednieuw domein dat op de eerste dag een paar honderd cold e-mails verstuurt, krijgt bounces die een domein van zes maanden oud met dezelfde lijst niet zou krijgen. Ontbreken je SPF-, DKIM- of DMARC-records, of zijn ze verkeerd ingesteld? Dan weigeren sommige providers je al voordat ze naar de ontvanger kijken.

Geen van beide los je op door adressen op te schonen. Het zijn problemen aan de kant van de afzender. Ze verschijnen als bounces die er precies uitzien als een bounce voor een dood adres, totdat je de reden erachter leest.

## Wat doe ik met een gebouncete e-mail?

Eén adres: lees de code. Een 5.1.1 of "user unknown" betekent dat de mailbox weg is. Verwijder het adres. Is het contact belangrijk, zoek dan het huidige adres in plaats van het opnieuw te proberen. Een 4.x.x of "mailbox full" betekent wachten. Je tool probeert het zelf opnieuw. Een 5.7.1 of "blocked" wijst naar je verzenddomein, niet naar de ontvanger. Controleer dan SPF, DKIM en DMARC voordat je nog iets verstuurt. Weet je niet zeker of een adres nog werkt, haal het dan door de [email checker](/email-checker) voordat je opnieuw verstuurt.

## Wat je doet nadat een campagne bouncet

Haal eerst elke hard bounce uit je lijst en mail die adressen niet meer. Probeer ze niet opnieuw. Laat ze ook niet staan voor de volgende verzending in de hoop dat ze herstellen. Dat gebeurt niet, en elke nieuwe poging kost je reputatie. Laat de soft bounces met rust. Je verzendtool regelt die nieuwe pogingen.

Kijk daarna naar de verhouding. Bouncete een groot deel van een nieuwe lijst bij de eerste verzending? Dan was de lijst al slecht voordat je hem gebruikte. De oplossing ligt dan eerder in het proces, op het punt waar je adressen verzamelt of koopt. Opschonen achteraf helpt de volgende verzending, maar het maakt de reputatieschade van deze verzending niet ongedaan.

## De bron van de lijst is meestal de echte oorzaak

Waar een lijst vandaan komt, voorspelt hoe hij gaat bouncen. Een lijst die je uit je eigen CRM hebt geëxporteerd, met mensen die je eerder hebben geantwoord, bouncet heel weinig. Een lijst die van het web is gescrapet of bij een broker is gekocht, bouncet veel meer. De adressen zijn één keer verzameld en daarna nooit meer gecontroleerd, en een deel is in de tussentijd verdwenen. Weet je dat een lijst gekocht of gescrapet is, ga er dan van uit dat een deel verouderd is. Haal hem door een [tool om je e-maillijst op te schonen](/email-list-cleaning) (in het Engels) voor de eerste verzending, in plaats van het uit het bouncerapport te leren.

## Waar verificatie helpt, en waar niet

Verificatie verwijdert de adressen die hard zouden bouncen voordat je verstuurt. Dat is bij een cold lijst de grootste stap die je kunt zetten. Door de lijst eerst te controleren, wordt een gok een bekend getal. Het loont bij elke lijst die je niet zelf hebt opgebouwd.

Wat verificatie niet doet, is een verkeerd ingesteld DNS-record repareren of een koud domein opwarmen. Dat zijn problemen van de afzender, en hoeveel je de lijst ook opschoont, daar verandert het niets aan. Verdeel je bounces dus naar oorzaak. Gaat het om adressen die niet meer bestaan, haal de lijst dan door [e-mailverificatie](/) voor de volgende verzending. Gaat het om fouten in authenticatie of reputatie, dan ligt het werk bij je eigen domein, niet bij de lijst.
