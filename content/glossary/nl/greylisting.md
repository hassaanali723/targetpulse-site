---
title: Greylisting
description: Wat greylisting is, waarom een server je eerste e-mail weigert en de tweede accepteert, hoe lang de vertraging meestal duurt en wat het doet met verificatie.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Greylisting is een bescherming tegen spam. Een mailserver weigert de eerste e-mail van een afzender die hij niet kent, en accepteert dezelfde e-mail als de afzender het een paar minuten later opnieuw probeert. Echte mailservers proberen het opnieuw, maar de meeste spamsoftware doet dat niet.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Krijg een echt antwoord voor adressen die je controles greylisten
---

## Wat is greylisting?

Greylisting is een bescherming tegen spam die met een vertraging werkt. Een mailserver weigert de eerste e-mail van een nieuwe afzender en accepteert hem bij de tweede poging. Het is beschreven in RFC 6647.

Eerst een paar begrippen. Een server is een computer die altijd aanstaat en e-mail afhandelt. Een IP-adres is het nummer dat een server op internet aanduidt. Spam is ongewenste bulkmail.

Een ontvangende server die greylisting gebruikt, houdt een register bij van elke afzender die hij heeft gezien. Hij kijkt naar drie dingen:

1. het verzendende IP-adres;
2. het adres van de afzender;
3. het adres van de ontvanger.

Als hij deze combinatie nog niet eerder heeft gezien, weigert hij de e-mail met een tijdelijke fout. Een goed ingestelde mailserver zet de e-mail in een wachtrij en probeert het opnieuw. Een wachtrij is een lijst van e-mails die een server nog moet versturen. De meeste spamsoftware verstuurt één keer en probeert het niet opnieuw.

Als de nieuwe poging binnenkomt, accepteert de server de e-mail en slaat hij de afzender op in zijn register. Daarna wordt e-mail van dezelfde afzender bij de eerste poging geaccepteerd.

## Een eenvoudig voorbeeld

Zo ziet greylisting eruit vanaf de kant van de afzender.

1. **Nina mailt een nieuwe leverancier.** Nina werkt in een café. Om 9.00 uur mailt ze voor het eerst naar orders@supplier.example.
2. **De server van de leverancier kent haar niet.** Hij heeft deze combinatie van de server van Nina, haar adres en deze ontvanger nog nooit gezien.
3. **Hij stuurt een tijdelijke fout.** Hij antwoordt `451` met een bericht zoals "greylisted, try again later".
4. **De server van Nina wacht.** Haar mailserver houdt de e-mail in de wachtrij. Nina merkt er niets van.
5. **Hij probeert het opnieuw.** Rond 9.15 uur stuurt de server van Nina dezelfde e-mail nog een keer.
6. **De e-mail wordt geaccepteerd.** De server van de leverancier ziet de tweede poging. Hij accepteert de e-mail en slaat de gegevens van Nina op.
7. **De volgende keer is er geen wachttijd.** Als Nina de leverancier volgende week mailt, wordt de e-mail bij de eerste poging geaccepteerd.

Een spamprogramma dat duizenden e-mails verstuurt, probeert het meestal geen tweede keer. Zijn e-mails komen dus nooit aan.

## Wat de afzender ziet

De eerste poging krijgt een code die met 4 begint. Meestal is dat `450` of `451`, met een bericht zoals "greylisted, try again later". Je mailserver behandelt dit als een [soft bounce](/glossary/soft-bounce) en probeert het volgens zijn eigen schema opnieuw. Een soft bounce is een tijdelijke bezorgfout.

De ontvangende server bepaalt hoe lang hij wacht voordat hij de nieuwe poging accepteert. Ongeveer 15 minuten is gebruikelijk. Sommige servers gebruiken een kortere of langere vertraging.

Meestal merk je niets van greylisting. De e-mail komt een paar minuten later aan. Als je tool al een bouncemelding toont, verdwijnt die vanzelf.

## Wanneer greylisting belangrijk is

Greylisting heeft geen invloed op een normale campagne. Het is belangrijk in twee gevallen.

**Tijdgevoelige e-mails.** Een wachtwoordreset of een eenmalige code die 15 minuten te laat komt, heeft de gebruiker niets aan. Daarom vragen afzenders van transactionele e-mail ontvangende domeinen soms om hun IP-adressen op een allowlist te zetten. Transactionele e-mail is e-mail die wordt verstuurd omdat de gebruiker iets heeft gedaan, zoals een bon of een inlogcode.

**Voorbeeld:** Leo vraagt een website om een inlogcode. De code gaat naar zijn werkadres, dat greylisting gebruikt. De code komt 15 minuten later aan. Tegen die tijd is Leo al gestopt met inloggen.

**Verificatie.** Een verificatietool controleert een adres door een SMTP-gesprek te beginnen en te stoppen voordat er iets wordt verstuurd. SMTP is de standaardmanier waarop mailservers met elkaar praten om e-mail te versturen. Op een server met greylisting krijgt de eerste poging een `4xx`-antwoord, dus een code die met 4 begint. Een verificatietool die na één poging stopt, meldt het adres als onbekend. Het adres kan geldig zijn.

## Greylisting en secure email gateways

Veel bedrijfsdomeinen gebruiken een [secure email gateway (SEG)](/glossary/secure-email-gateway) zoals Proofpoint of Mimecast. Een secure email gateway is een beveiligingsgateway voor e-mail: een beveiligingsdienst die de e-mail van een bedrijf controleert voordat die de inbox van medewerkers bereikt. Deze gateways greylisten onbekende afzenders standaard. Dit is een van de redenen waarom een eenvoudige controle voor veel B2B-adressen onbekend teruggeeft. B2B-adressen zijn de werkadressen van mensen bij andere bedrijven.

## Hoe een verificatietool ermee omgaat

Een goede [email checker](/email-checker) behandelt een `4xx`-antwoord als "probeer het opnieuw", niet als een resultaat. Hij wacht, probeert het opnieuw vanaf hetzelfde IP-adres en meldt het antwoord dat de server na de greylistingvertraging geeft. Giggal.ai doet dit bij het controleren van gatewaydomeinen. Zo geeft het geldig of ongeldig terug waar een controle met één poging onbekend teruggeeft.

[Bulk e-mailverificatie](/bulk-email-verifier) doet hetzelfde voor elk adres op een lijst. [E-mailverificatie](/) kan greylisting niet uitzetten. Het wacht tot de vertraging voorbij is en meldt dan of elk adres bestaat.
