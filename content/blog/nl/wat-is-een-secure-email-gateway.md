---
title: "Wat is een secure email gateway (SEG)?"
description: Een secure email gateway is een filterlaag vóór de mailserver van een bedrijf. Wat zo'n gateway doet, wie ze maakt en waarom hij verificatie lastiger maakt.
slug: wat-is-een-secure-email-gateway
date: 2026-10-22
keyword: wat is een secure email gateway
image: /blog/covers/nl/wat-is-een-secure-email-gateway.webp
imageAlt: Een secure email gateway die antwoordt namens de mailserver en de status van de mailbox verbergt
cta: Verifieer ook de adressen achter een SEG
---

Een secure email gateway, in het Nederlands een beveiligingsgateway voor e-mail, is een filterlaag vóór de mailserver van een bedrijf. Hij controleert elk bericht voordat het door mag. Zie je steeds SEG in verificatieresultaten staan en wil je weten wat een secure email gateway in de praktijk is? Het is het controlepunt waar alle inkomende en uitgaande mail van een bedrijf doorheen gaat. Onderweg scant de gateway op dreigingen en past hij beleidsregels toe. De mailserver erachter ziet nooit een bericht dat de gateway blokkeert.

## SEG is gewoon de afkorting

SEG staat voor secure email gateway. Als je erop let, zie je de afkorting vaker dan de volledige naam. De twee worden door elkaar gebruikt. Markeert een verificatietool een adres als adres achter een SEG, of noemt een rapport over bezorgbaarheid SEG-filtering, dan gaat het om de filterlaag die hier wordt beschreven. De term klinkt technischer dan het idee. Het is een bewaker vóór de postkamer.

## Wat de gateway echt doet

Een gateway is er om slechte mail buiten te houden en gevoelige mail binnen. Aan de inkomende kant scant hij op spam, malware en phishing. Alles wat een regel overtreedt, zet hij in quarantaine of weigert hij. Aan de uitgaande kant past hij regels toe tegen datalekken en voor compliance. Hij houdt berichten tegen die klantgegevens zouden lekken of een wet zouden overtreden. Veel gateways regelen ook versleuteling en archivering voor lange tijd.

Een bedrijf neemt een gateway omdat al dat werk op de mailserver zelf moeilijker te beheren is en vaker fout gaat. De gateway zet de regels op één plek waar elk bericht langs moet.

## De gateways die je het vaakst tegenkomt

Een handvol leveranciers bepaalt deze markt. Proofpoint, Mimecast, Barracuda en Cisco IronPort zijn de namen die je op zakelijke domeinen het vaakst ziet. Daarachter zitten veel kleinere leveranciers. Wij herkennen in totaal 15 secure email gateways.

Ze verschillen in functies en prijs, maar van buitenaf gedragen ze zich hetzelfde. Elke gateway staat vóór het echte mailsysteem en beslist wat daar aankomt. Daarom vertelt een bepaalde leverancier je alleen dat een bedrijf voor dat product koos, en weinig over de adressen erachter.

## Een gateway is niet de mailboxprovider

Je haalt de gateway makkelijk door elkaar met het e-mailsysteem van het bedrijf, maar het zijn aparte lagen. Een bedrijf kan zijn mailboxen op Microsoft 365 of Google Workspace hebben en er toch een gateway van een andere leverancier voor zetten. Het ene bedrijf levert dan de beveiligingslaag en het andere host de inboxen. Daarom vertelt een gateway in het mailpad je niet welke provider de mailbox echt beheert. En een beveiligingsproduct aan de voorkant laat niets zien van de inbox erachter. De twee keuzes worden los van elkaar gemaakt, vaak door verschillende teams met verschillende budgetten.

## Hoe een gateway de route van een e-mail verandert

Normaal gaat een bericht direct naar de mailserver van het domein. Met een gateway stuurt het domein zijn mail eerst naar de gateway. Elk binnenkomend bericht komt dus eerst daar aan. De gateway controleert het, en alleen als het bericht slaagt, stuurt hij het door naar de echte server waar de mailbox staat.

De ontvanger merkt hier niets van. Voor alles aan de buitenkant is de gateway het mailsysteem van het domein, omdat alleen de gateway antwoordt. Sommige gateways gaan nog een stap verder en houden onbekende afzenders bewust op. Ze houden een eerste contact vast en antwoorden pas echt bij een latere poging.

## Waarom gateways verificatie verstoren

Verificatie werkt door de mailserver een directe vraag te stellen en een direct antwoord te lezen. Een gateway breekt die keten. Omdat hij namens het domein antwoordt, kan hij een bericht accepteren of vasthouden voor controle, zonder ooit na te gaan of de mailbox erachter bestaat.

Een verificatietool die naar een specifiek adres vraagt, kan dus een accepterend of vaag antwoord krijgen. Dat antwoord geeft het beleid van de gateway weer, niet de toestand van de mailbox. Het ophouden van afzenders maakt het erger. Een eerste poging die wordt vastgehouden, lijkt een onduidelijk resultaat, ook als de mailbox gewoon echt is. De standaardcontrole wordt beantwoord door de verkeerde partij.

Een concreet voorbeeld helpt. Een verificatietool test een adres op een domein met een gateway. De gateway volgt zijn eigen regels voor onbekende afzenders en accepteert de test of houdt hem op. In beide gevallen registreert de verificatietool een antwoord dat van de gateway kwam, niet van de server die weet of de mailbox bestaat. Er is niets aan de echte inbox getest, maar de controle heeft toch een antwoord om te melden.

## Een gateway zegt niet of de mailbox echt is

Dit is het deel om te onthouden. Een gateway laat zien dat een bedrijf beveiliging serieus neemt. Hij zegt helemaal niets over de vraag of een bepaald adres erachter bij een echte, actieve mailbox hoort. Een dood adres en een werkend adres kunnen achter dezelfde gateway staan en er van buitenaf hetzelfde uitzien. Precies daarom komen adressen achter een gateway zo vaak op dezelfde onopgeloste stapel terecht als catch-all-domeinen.

Voor een marketeer gaat het hier om bereik. Op een B2B-lijst staat een flink deel van je beste contacten precies achter deze gateways. Dat zijn de contacten bij grotere bedrijven die meer op beveiliging letten. Schrijf je ze allemaal af, dan verlies je het deel van je lijst met grote bedrijven. Verstuur je blind, dan komen de blokkades op je afzenderreputatie terecht. Wil je één adres controleren, dan kun je met onze gratis tool je [mailadres controleren](/email-checker). Staat je lijst er vol mee, dan lees je hier hoe wij [e-mails achter SEG-gateways](/seg-email-verification) (in het Engels) verwerken.
