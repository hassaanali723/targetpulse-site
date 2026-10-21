---
title: Soft bounce
description: Wat een soft bounce is, de gebruikelijke oorzaken en codes, hoe lang verzendtools het opnieuw proberen en wanneer je een adres verwijdert dat blijft bouncen.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Een soft bounce is een e-mail die deze keer niet is bezorgd door een tijdelijk probleem. Het adres is echt. De inbox is vol, de server is druk, of de server vraagt je het later opnieuw te proberen.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Zie welke van je adressen echt zijn voordat je verstuurt
---

## Wat is een soft bounce?

Een soft bounce is een e-mail die deze keer niet is bezorgd, maar later misschien wel. Het probleem is tijdelijk. De ontvangende server laat je het opnieuw proberen.

Eerst een paar begrippen. Een server is een computer die altijd aanstaat en e-mail afhandelt voor een domein. Het domein is het deel van een adres na de @, zoals example.com. Een bounce is het automatische bericht dat je vertelt dat een e-mail niet is bezorgd.

De e-mailstandaard RFC 5321 noemt een soft bounce een tijdelijk negatief antwoord. De code in het bouncebericht begint met 4. Voorbeeld: `452 4.2.2`. Een code die met 5 begint, is een [hard bounce](/glossary/hard-bounce). Een hard bounce is definitief.

## Een eenvoudig voorbeeld

Dit is een normale soft bounce van begin tot eind.

1. **Lucy verstuurt een factuur.** Lucy heeft een schoonmaakbedrijf. Op maandag mailt ze een factuur naar een klant op james@example.com.
2. **De inbox is vol.** James heeft al jaren geen e-mail verwijderd. Zijn mailbox heeft geen ruimte meer.
3. **De server weigert de e-mail voorlopig.** De server antwoordt met een code die met 4 begint. Die betekent "nu niet, probeer het later".
4. **De tool van Lucy probeert het opnieuw.** Haar verzendtool wacht en verstuurt de factuur een paar uur later opnieuw. Dat doet de tool zelf.
5. **James ruimt zijn inbox op.** Op dinsdagochtend verwijdert James oude e-mails.
6. **De volgende poging lukt.** De factuur komt op dinsdagmiddag aan. Lucy hoefde niets te doen.

Het adres was de hele tijd echt. Alleen het moment was verkeerd.

## Gebruikelijke oorzaken

Elke oorzaak heeft een eigen code. Dit zijn de gebruikelijke.

- **De inbox is vol.** Gmail geeft `452 4.2.2 The recipient's inbox is out of storage space` terug. De persoon moet wat e-mail verwijderen. Dit gebeurde bij James hierboven.
- **Te veel e-mails te snel.** Gmail geeft `450 4.2.1 The user you are trying to contact is receiving email too quickly` terug. Gmail geeft `421 4.7.28` terug als er te veel e-mail van je IP-adres komt. Een IP-adres is het nummer dat de server aanduidt waarvandaan je e-mail kwam. Voorbeeld: een winkel stuurt een grote uitverkoopmail in één keer naar al zijn Gmail-klanten, en Gmail vraagt de winkel om langzamer te versturen.
- **Greylisting.** De server weigert de eerste e-mail van een afzender die hij niet kent. Bij de tweede poging accepteert hij dezelfde e-mail. Zie [greylisting](/glossary/greylisting).
- **De server is uit de lucht of traag.** Een code `421` betekent dat de server niet beschikbaar is. Een code `4.4.1` of `4.4.2` betekent dat de verbinding mislukte of te lang duurde. Voorbeeld: de mailserver van een klein bedrijf staat een uur uit voor onderhoud.
- **De e-mail is verlopen.** Een code `4.4.7` betekent dat je server het gedurende de hele herhaalperiode opnieuw heeft geprobeerd en daarna is gestopt. RFC 5321 zegt dat servers het ongeveer vier tot vijf dagen opnieuw horen te proberen.

## Wat je verzendtool doet

Je verzendtool probeert een soft bounce automatisch opnieuw. Elke tool heeft eigen regels.

| Tool | Wat de tool doet |
|---|---|
| SendGrid | Probeert het tot 72 uur lang opnieuw. |
| HubSpot | Markeert de e-mail tot 72 uur lang als in behandeling. Daarna noteert HubSpot een soft bounce. |
| Mailchimp | Maakt van een adres een hard bounce na 7 soft bounces als het contact nooit een e-mail heeft geopend. Als het contact eerder een e-mail heeft geopend, is de grens 15 soft bounces. |

Dezelfde soft bounce kan in verschillende tools een ander label krijgen. Lees de code in het bouncebericht, niet het label.

## Wat je doet met een soft bounce

1. **Doe eerst niets.** Laat je verzendtool het opnieuw proberen. Eén soft bounce is normaal.
2. **Let bij de volgende verzendingen op het adres.** Noteer of het volgende week opnieuw bouncet, en de week daarna.
3. **Verwijder het als het blijft bouncen.** Verwijder een adres dat bij meerdere verzendingen achter elkaar een soft bounce geeft. De grens van Mailchimp van 7 soft bounces is een veilige regel.

**Voorbeeld:** je verstuurt een wekelijkse nieuwsbrief. Eén adres geeft zes weken lang elke week "inbox vol" terug. Die inbox is niet vol. Niemand gebruikt hem. Verwijder het adres.

## Hoe een verificatietool ermee omgaat

Een verificatietool maakt verbinding met de mailserver voordat je verstuurt. Als de server antwoordt met een 4xx-code, dus een code die met 4 begint, probeert de tool het opnieuw. Als het antwoord hetzelfde blijft, markeert de tool het adres als onbekend, niet als geldig. Onbekend betekent dat de mailbox bestaat, maar misschien geen e-mail ontvangt. De gids [hard bounce en soft bounce](/blog/hard-bounce-vs-soft-bounce) legt elke code uit en wat je ermee doet.

Een [email verifier](/email-checker) voert deze test uit op één adres. [Bulk e-mailverificatie](/bulk-email-verifier) voert hem uit op een hele lijst. [E-mailverificatie](/) kan geen volle inbox leegmaken of een server starten die uit de lucht is. Het vertelt je welke adressen bestaan voordat je verstuurt, en welke je nog een keer moet bekijken.
