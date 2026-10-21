---
title: E-mailspoofing
description: Wat e-mailspoofing is, een voorbeeld van een nepmail van de CEO, waarom e-mail het toelaat, hoe je een gespoofte e-mail herkent en hoe je je domein beschermt.
slug: e-mail-spoofing
date: 2026-10-12
updated: 2026-10-12
keyword: email spoofing
short: E-mailspoofing is een e-mail versturen met een vals afzenderadres, zodat het lijkt alsof iemand anders hem heeft verstuurd. Oplichters gebruiken het om zich voor te doen als een bank, een leverancier of je eigen leidinggevende. SPF, DKIM en DMARC zijn de records die het voor een domein tegenhouden.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Verificatie controleert adressen. DMARC controleert afzenders
---

## Wat is e-mailspoofing?

E-mailspoofing (email spoofing) betekent een e-mail versturen met een vals afzenderadres. De e-mail lijkt te komen van een persoon of bedrijf dat je kent. In werkelijkheid heeft iemand anders hem verstuurd. Oplichters gebruiken spoofing om mensen nepfacturen te laten betalen, wachtwoorden te laten delen of schadelijke bestanden te laten openen.

Een gespoofte e-mail toont een echt adres in de From-regel. De From-regel is de naam en het adres van de afzender die je in je inbox ziet. Dit maakt e-mailspoofing anders dan een e-mail vanaf een adres dat erop lijkt. Beide worden hieronder uitgelegd.

## Een voorbeeld: een nepmail van de CEO

Sara werkt op de financiële afdeling van een bedrijf dat het domein example.com gebruikt. Een domein is de naam na de @ in een e-mailadres. Op een vrijdag om 16.00 uur krijgt Sara deze e-mail.

- **Van:** David Brown, david.brown@example.com
- **Onderwerp:** Dringende betaling vandaag
- **Tekst:** "Betaal de bijgevoegde factuur vóór 17.00 uur aan onze nieuwe leverancier. Ik zit in vergaderingen, dus antwoord alleen per e-mail."

David Brown is de echte CEO, en het adres is zijn echte adres. Maar David heeft deze e-mail niet verstuurd. Een oplichter heeft dat gedaan, vanaf een server die niets met example.com te maken heeft.

Als Sara betaalt, gaat het geld naar de bankrekening van de oplichter. Dit soort fraude heet vaak business email compromise (BEC). Het werkt omdat de e-mail er normaal uitziet en om snelheid vraagt.

## Waarom e-mailspoofing mogelijk is

SMTP is het protocol dat e-mail tussen servers verstuurt. Het werd voor het eerst vastgelegd in 1982. Het controleert het From-adres niet. Elke mailserver kan zo worden ingesteld dat hij elk adres in die regel zet, en de e-mail wordt toch verstuurd.

De ontvangende server heeft dus geen ingebouwde manier om te weten of het From-adres klopt. Daarom zijn er later drie controles bijgekomen. Domeineigenaren publiceren ze in DNS, het openbare register waarin een domein zijn instellingen vermeldt.

## Kenmerken van een gespoofte e-mail

Een gespoofte e-mail kan er tot in elk detail correct uitzien. Deze kenmerken helpen je er een te herkennen.

- **Het antwoordadres is anders.** Klik op Beantwoorden en kijk naar het adres. Als het verandert in een onbekend adres, kan de e-mail nep zijn.
- **De controles mislukken.** Open in Gmail de e-mail, klik op de drie puntjes en kies Origineel weergeven. Kijk naar de regels voor SPF, DKIM en DMARC. Een DMARC FAIL is een sterke waarschuwing.
- **De e-mail vraagt snel om geld of een wachtwoord.** Verzoeken om vandaag te betalen, bankgegevens te wijzigen of in te loggen zijn de gebruikelijke doelen van een gespoofte e-mail.
- **De e-mail zegt dat je andere kanalen moet vermijden.** "Alleen per e-mail" of "bel me niet" is een waarschuwingsteken.
- **De toon of de handtekening klopt niet.** De echte persoon schrijft misschien nooit op die manier.

## Zo bescherm je je domein tegen spoofing

Je kunt niet voorkomen dat iemand jouw adres in de From-regel typt. Je kunt ontvangende servers wel vragen om die e-mails te blokkeren. Daarvoor heb je drie DNS-records nodig.

1. **SPF** noemt de servers die e-mail mogen versturen voor je domein. Zie [SPF-record](/glossary/spf).
2. **DKIM** voegt een handtekening toe aan je echte e-mails, die een oplichter niet kan maken. Zie [DKIM](/glossary/dkim).
3. **DMARC** vertelt ontvangende servers wat ze moeten doen met e-mail die jouw domein in het From-adres gebruikt, maar niet slaagt voor beide controles. Zie [DMARC](/glossary/dmarc).

Met DMARC op `p=reject` blokkeren ontvangers die je beleid volgen de gespoofte e-mail voordat die iemand bereikt. Op `p=none` stuurt DMARC je alleen rapporten. Het houdt de e-mail niet tegen. Om DMARC te laten slagen, moet SPF of DKIM slagen voor hetzelfde domein dat in het From-adres staat. Dit heet [DMARC-alignment](/glossary/dmarc-alignment).

## Spoofing, phishing en lookalike-domeinen

Deze woorden worden vaak door elkaar gehaald. Ze betekenen verschillende dingen.

| Begrip | Wat het is | Voorbeeld |
| --- | --- | --- |
| E-mailspoofing | Een e-mail die zonder jouw toestemming je echte adres in de From-regel gebruikt | From: billing@example.com, verstuurd door een oplichter |
| Phishing | Elke e-mail die je probeert te misleiden zodat je geld, gegevens of wachtwoorden geeft | Een nepmail "je account is geblokkeerd" met een inloglink |
| Lookalike-domein | Een apart domein dat is geregistreerd om op het jouwe te lijken | exampel.com of example-billing.com |

Spoofing is één methode van phishing, en een lookalike-domein is een andere. DMARC stopt spoofing van je exacte domein. Het kan een lookalike-domein niet stoppen. De oplichter is eigenaar van dat domein, dus hij kan de SPF-, DKIM- en DMARC-records ervan zelf instellen.

## Wat je doet als je een gespoofte e-mail krijgt

1. Antwoord niet, klik niet op links en open geen bijlagen.
2. Controleer het verzoek op een andere manier. Bel de persoon op een telefoonnummer dat je al kent, niet op een nummer uit de e-mail.
3. Meld de e-mail. Gebruik in Gmail het menu met de drie puntjes en kies Phishing melden. Gebruik in Outlook de knop Melden.
4. Als de e-mail het domein van je bedrijf gebruikt, laat het je IT-team weten. Zij kunnen je DMARC-rapporten bekijken.
5. Als je al hebt betaald of een wachtwoord hebt gedeeld, neem dan meteen contact op met je bank of wijzig het wachtwoord meteen.

## E-mailspoofing en e-mailverificatie

Een [email checker](/email-checker) herkent geen spoofing. De tool vertelt je of een adres bestaat en e-mail accepteert, niet wie een bericht echt heeft verstuurd. Een gespoofte e-mail gebruikt een echt adres, dus dat adres zou bij een controle nog steeds geldig zijn. [Bulk e-mailverificatie](/bulk-email-verifier) helpt aan je eigen verzendkant, door dode adressen van je lijst te verwijderen voor een campagne. Gebruik SPF, DKIM en DMARC om spoofing te stoppen, en gebruik [e-mailverificatie](/) om je bouncepercentage laag te houden.
