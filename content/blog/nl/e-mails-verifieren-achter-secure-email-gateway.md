---
title: "E-mails verifiëren achter een secure email gateway"
description: Proofpoint, Mimecast en Barracuda accepteren elk adres aan de rand. Dat breekt de gewone verificatie. Wat er dan gebeurt en hoe je toch een antwoord krijgt.
slug: e-mails-verifieren-achter-secure-email-gateway
date: 2026-10-22
keyword: e-mail verifiëren achter secure email gateway
image: /blog/covers/nl/e-mails-verifieren-achter-secure-email-gateway.webp
imageAlt: Proofpoint, Mimecast en Barracuda die elk adres accepteren aan de rand van de gateway
cta: Haal de contacten achter gateways terug
---

Heb je ooit een verificatierapport geëxporteerd en gezien dat verdacht veel van je beste contacten bij grote bedrijven terugkwamen als onbekend? Dan is de kans groot dat er een secure email gateway tussen zat. Geen catch-all-domein, ook al ziet het symptoom er precies hetzelfde uit. Een gateway.

Het verschil is belangrijk, omdat de oplossing anders is. En omdat de contacten achter gateways meestal de contacten zijn die je echt wilde hebben. Kleine bedrijven hebben er zelden een. Banken, verzekeraars, ziekenhuizen, universiteiten en het grootste deel van de Fortune 500 wel.

## Wat de verificatietool doet als het misgaat

Een standaardverificatie is een kort gesprek. Je verificatietool maakt verbinding met de mailserver die in de MX-records van het domein staat. Hij zegt hallo, noemt een afzender, noemt dan de ontvanger en wacht. Een server die een echte lijst van zijn mailboxen bijhoudt, antwoordt eerlijk. Hij zegt ja tegen een adres dat bestaat en nee tegen een adres dat niet bestaat. Je verificatietool schrijft het antwoord op.

Een secure email gateway is een filterlaag vóór de echte mailserver. Elk bericht voor het domein komt eerst bij de gateway aan. Daar wordt het gescand op malware, phishing en overtredingen van het beleid, en pas daarna wordt het doorgegeven. Proofpoint, Mimecast, Barracuda, Cisco en een stuk of twaalf kleinere leveranciers werken allemaal zo.

De gateway hoeft niet te weten welke mailboxen bestaan. Zijn taak is filteren, niet in een adresboek opzoeken. Vraagt je verificatietool naar een specifieke ontvanger, dan accepteert de gateway. Hij accepteert echte adressen, typefouten en namen van mensen die in 2019 zijn vertrokken. De acceptatie gebeurt aan de rand. De beslissing of een mailbox bestaat, valt ergens daarachter, op een plek die je verificatietool nooit bereikt.

Van buitenaf is dat gedrag niet te onderscheiden van een catch-all-domein. Hetzelfde gesprek, hetzelfde antwoord, hetzelfde nutteloze resultaat.

## Waarom je niet moet stoppen bij "riskant"

De meeste verificatietools reageren hierop door het adres een label te geven. Dat label verschilt per leverancier. Afhankelijk van wiens export je leest, zie je risky, unknown, accept-all, catch-all of ok_for_all. De betekenis is steeds dezelfde: we konden het niet vaststellen.

Dat is tot op zekere hoogte een eerlijk antwoord. Het probleem is wat er daarna gebeurt. Verzendtools behandelen die labels meestal als een voorzichtig nee, en de meeste mensen doen hetzelfde. Niemand wil zijn afzenderreputatie op het spel zetten voor een misschien. De adressen worden dus uit de campagne gefilterd en stilletjes vergeten.

Op een B2B-lijst gaat het om ongeveer 30% van je contacten. Op een lijst met veel grote bedrijven is het meer. Je betaalde om die contacten te krijgen en je betaalde opnieuw om ze te verifiëren, en de uitkomst was een schouderophalen.

## Wat een controle die gateways kent anders doet

Kort gezegd: je stopt met de gateway een vraag te stellen die hij niet kan beantwoorden. Je zoekt een andere vraag die hij wel kan beantwoorden.

Gateways zijn niet stil. Ze gedragen zich volgens vaste patronen, afhankelijk van het product, de instellingen en het specifieke adres. De reactietijd verschilt tussen een adres dat de gateway later doorstuurt en een adres dat hij later weigert. Foutcodes en hun precieze tekst verschillen per leverancier en per versie. Sommige gateways tonen een weigering pas later in de transactie, niet op het punt waar de meeste verificatietools stoppen met luisteren. Sommige gedragen zich anders bij een echte mailbox dan bij een willekeurige reeks tekens op hetzelfde domein, als je weet wat je moet vergelijken.

Om die signalen te lezen, herken je eerst welke gateway het is. Daarna pas je een controle toe die voor dat specifieke product is gebouwd, niet de algemene controle. Daarom noemen leveranciers hun dekking van gateways meestal als een getal. Giggal.ai herkent er vijftien, waaronder Proofpoint, Mimecast en Barracuda. Andere tools die dit proberen, noemen er drie of vijf. Een verificatietool die er geen enkele noemt, geeft vrijwel zeker het algemene resultaat terug en labelt het als riskant.

Het is goed om eerlijk te zijn over de grenzen. Dit is een afleiding uit waargenomen gedrag, geen opzoeking in een adresboek. Het is dus niet foutloos, en geen eerlijke leverancier zal zeggen dat het dat wel is. Wat het betrouwbaar doet, is een groot onbruikbaar deel van je lijst grotendeels bruikbaar maken. Dat is een andere en bescheidener claim dan perfectie.

## Uitzoeken hoeveel van je lijst dit raakt

Je hebt geen tool nodig om te zien of gateways je probleem zijn. Je hebt de MX-records nodig van de domeinen op je lijst.

Neem het domeindeel van elk adres, haal dubbele domeinen weg en [zoek de MX-records op](/mx-lookup) (in het Engels) voor elk domein. Een domein achter Proofpoint wijst naar hostnamen met pphosted of ppe-hosted erin. Domeinen van Mimecast wijzen naar hosts van mimecast.com, meestal met een regiocode. Barracuda zie je als barracudanetworks.com. Cisco verschijnt als iphmx.com. Domeinen van Microsoft 365 en Google Workspace wijzen naar hosts van outlook.com en google.com. Dat zijn geen gateways, al kunnen ze wel als catch-all zijn ingesteld.

Vergelijk die lijst met de adressen waar je verificatietool mee stopte. Is de overlap groot, dan ligt het aan de gateway. Dan verandert het resultaat niet, hoe vaak je dezelfde tool ook opnieuw laat lopen.

## Een tool hiervoor kiezen

Met drie vragen onderscheid je een verificatietool die dit aankan van een tool die dat niet kan.

Noemt de tool de gateways die hij herkent? Een leverancier die hier echt werk doet, publiceert een lijst of op zijn minst een aantal, want dat is precies wat hij verkoopt. Vage taal over geavanceerde detectie zonder productnamen betekent meestal detectie, geen oplossing. De tool kan je dan vertellen dat er een gateway is, maar nog steeds niet of de mailbox echt is.

Geeft de tool geldig of ongeldig terug, of een label? Vraag precies hoe het resultaat eruitziet voor een adres achter Mimecast. Krijg je het label riskant en een betrouwbaarheidsscore, dan heb je een iets beter label gekocht.

Wat kost het bij de adressen waar het werk zit? Gateways en catch-all-adressen oplossen kost een leverancier meer, dus de meeste rekenen er anders voor. Sommige rekenen een veelvoud van een gewone credit. Andere halen het van een apart, kleiner tegoed dat eerder op is dan het gewone tegoed. Geen van beide is onredelijk, maar je wilt het weten voordat je een lijst uploadt die voor 40% uit domeinen van grote bedrijven bestaat. Giggal.ai rekent voor elke verificatie vast 1 credit per adres, van hetzelfde tegoed als al het andere.

## De praktische volgorde

Haal je lijst door de tool die je nu gebruikt en bewaar de export. Haal elke rij eruit die terugkwam als risky, unknown of accept-all. Controleer de MX-records van die domeinen om te zien hoeveel gateways zijn en hoeveel gewone catch-all-domeinen. Laat dat deel daarna apart door een tool gaan die ervoor gebouwd is, en leg de twee exports naast elkaar.

Die vergelijking is waar het om gaat. Elke leverancier hier, wij ook, doet claims over nauwkeurigheid die op een prijspagina op elkaar lijken. Het enige getal dat iets betekent, is hoeveel van je eigen dode contacten weer tot leven kwamen. En of de adressen met het label geldig echt mail accepteerden toen je ernaar verstuurde.

Wil je dat proberen? Giggal.ai geeft 1.000 gratis credits zonder creditcard. Ze werken met een bulkupload in plaats van één adres per keer, en alleen zo vertelt deze test je iets. Je kunt ook meer lezen over [hoe we catch-all- en accept-all-domeinen verifiëren](/catch-all-verification), of over onze [aanpak voor SEG-verificatie](/seg-email-verification) (in het Engels).
