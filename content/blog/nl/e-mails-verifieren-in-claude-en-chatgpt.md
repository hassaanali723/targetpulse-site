---
title: "Zo verifieer je e-mails in Claude en ChatGPT"
description: Koppel een tool voor e-mailverificatie via MCP aan Claude, ChatGPT, Cursor of VS Code en controleer adressen in de chat, zonder een CSV-bestand te exporteren.
slug: e-mails-verifieren-in-claude-en-chatgpt
date: 2026-10-22
keyword: e-mails verifiëren in claude en chatgpt
image: /blog/covers/nl/e-mails-verifieren-in-claude-en-chatgpt.webp
imageAlt: E-mailadressen verifiëren in Claude en ChatGPT via MCP
cta: Verifieer e-mails zonder de chat te verlaten
---

De meeste e-mailverificatie gaat nog steeds zoals in 2015. Je exporteert een CSV, opent een browsertabblad, uploadt het bestand, wacht, downloadt een andere CSV en importeert die ergens. Het werkt. Het kost ook vier keer wisselen van context voor wat eigenlijk één vraag is: bestaat deze mailbox echt?

Doe je al een deel van je werk in Claude of ChatGPT, dan is er nu een kortere weg. Met het Model Context Protocol kan een assistent direct een externe tool aanroepen. De verificatie kan dus gebeuren in het gesprek dat je al voert.

## Wat MCP echt is

MCP is een specificatie voor hoe een AI-assistent met een externe dienst praat. Anthropic publiceerde het eind 2024, en sindsdien wordt het ook ver buiten Claude gebruikt. Zie het als een standaard voor stekkers. Voordat MCP bestond, had elke assistent voor elke tool een eigen koppeling nodig. Nu publiceert een dienst één MCP-server, en elke client die de standaard volgt, kan hem gebruiken.

Voor een verificatietool is dat een kleine set functies. Je vraagt maar een paar dingen: controleer dit adres, controleer deze lijst, laat me het volledige overzicht zien, vertel me hoeveel credits ik nog heb. Giggal.ai biedt precies die als drie tools aan: `verify_emails`, `get_verification_details` en `get_credit_balance`.

Het verschil met een API is dat je de aanroep niet zelf schrijft. Je zegt wat je wilt, in de zin die je toch al ging typen. De assistent bepaalt welke tool hij aanroept en met welke gegevens.

## Waar dit goed voor is, en waar niet

Eerlijk zijn over de grens voorkomt teleurstelling.

Dit werkt goed als verificatie één stap is in iets groters dat je al in het gesprek doet. Je plakte een lijst met deelnemers aan een congres en wilt de dode adressen eruit halen voordat je de outreach schrijft. Je zoekt een fout in een aanmeldproces en wilt weten of een specifiek adres echt is. Je schrijft een reeks e-mails en wilt de twaalf namen bij het doelaccount controleren voordat je verdergaat. In al die gevallen moet je anders het gesprek verlaten, en dan is de toolaanroep echt sneller.

Het werkt niet goed voor het opschonen van een lijst met 200.000 rijen. Dat is een taak voor een bulkupload of de API. Zo'n lijst via een chat laten lopen levert niets op, behalve langer wachten en veel tokens. Gebruik daarvoor het dashboard of het REST-endpoint. Daar zijn ze voor.

## Zo stel je het in

Je hebt een account bij Giggal.ai en een API-sleutel nodig. De sleutel staat in het tabblad Developer API van de app, niet in Settings. Dat is een klein detail, maar mensen lopen er vaker op vast dan nodig is.

De server draait op afstand. Je hoeft dus niets te installeren en hebt geen SDK nodig. Hij staat op `https://mcp.giggal.ai/mcp` en gebruikt je API-sleutel voor authenticatie.

Open in Claude Desktop de Settings, ga naar Connectors en voeg een eigen connector toe die naar die URL wijst. Claude Code neemt dezelfde server op via `claude mcp add`. Cursor en VS Code lezen MCP-servers allebei uit een JSON-configuratiebestand in de project- of gebruikersmap. De vorm van dat bestand staat op de [MCP-pagina](/mcp), samen met de exacte codefragmenten. ChatGPT ondersteunt MCP-servers op afstand via de instellingen voor connectors, bij de abonnementen waarop die functie aanstaat.

Zodra de koppeling werkt, toont de assistent de drie tools en kun je vragen stellen.

## Zo ziet het gebruik eruit

Je hebt geen speciale formulering nodig. Dit werkt allemaal:

- Verifieer hello@stripe.com en vertel me of het een echte mailbox is
- Hier zijn elf adressen van een webinaraanmelding, controleer welke gaan bouncen
- Welke hiervan zijn catch-all-domeinen, en bestaan de mailboxen echt
- Hoeveel verificatiecredits heb ik nog voordat ik dit uitvoer

De assistent roept `verify_emails` aan, krijgt per adres een resultaat terug en legt dat uit in zijn antwoord. Vroeg je naar een lijst, dan kun je in hetzelfde gesprek verdergaan. Vraag de assistent alles wat ongeldig is te verwijderen, de overgebleven adressen per domein te groeperen en ze als CSV-blok uit te schrijven. Dat blok plak je direct in je verzendtool. Juist dat tweede deel maakt het de moeite waard. De assistent heeft de data al en kan die omvormen zonder nog een keer heen en weer te gaan.

## Het catch-all-deel is hier belangrijker dan normaal

Ongeveer 30% van een B2B-lijst staat op domeinen die mail accepteren voor elk mogelijk adres, echt of niet. De meeste verificatietools geven die adressen terug met het label risky of accept-all. Dat betekent dat ze het niet konden vaststellen.

Dat label is in een dashboard al lastig. In een gesprek is het erger. De assistent geeft trouw door wat hij kreeg, en je krijgt een antwoord dat vier van je elf adressen onzeker zijn. Dan weet je precies even weinig als voordat je het vroeg. Giggal.ai zet die adressen om in geldig of ongeldig, net als mailboxen achter vijftien secure email gateways die we bij naam noemen. Wat er bij de assistent terugkomt, is dus een echt antwoord en geen schouderophalen.

## Kosten en een verstandige voorzorg

Verificaties via MCP gebruiken dezelfde credits als overal anders. Elke verificatie van een adres kost vast 1 credit (ook bij catch-all-adressen en adressen achter een SEG). De gratis versie geeft 1.000 credits zonder creditcard. Credits verlopen niet.

De voorzorg is eenvoudig. Een assistent doet wat je vraagt, ook als dat een grotere taak is dan je bedoelde. Vraag naar je tegoed aan credits voordat je iets groots doet. En plak adressen in het gesprek, in plaats van de assistent te wijzen naar een bestand dat je zelf niet hebt bekeken. Geen van beide is specifiek voor verificatie, maar bij een API waarvoor je per gebruik betaalt, is een fout vervelender dan normaal.

## Of het de moeite waard is om in te stellen

Open je Claude of ChatGPT bijna elke dag en zijn e-maillijsten deel van je werk, dan kost dit ongeveer twee minuten. Het haalt een stap weg die je met de hand deed. Is verificatie een maandelijkse bulktaak die je in een browser doet, dan is het dashboard echt de betere tool, en verandert dit weinig voor je.

De instructies en de codefragmenten voor elke client staan op de [MCP-pagina](/mcp). De [API-documentatie](/public/docs) beschrijft dezelfde handelingen via REST, als je het liever met een script doet.
