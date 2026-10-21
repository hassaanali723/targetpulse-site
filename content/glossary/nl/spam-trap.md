---
title: Spam trap (spamval)
description: Wat een spam trap is, uitgelegd met voorbeelden. De drie soorten, hoe ze op je lijst komen, wat er gebeurt als je er een mailt en hoe je ze vermijdt.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Een spam trap, of spamval, is een e-mailadres dat geen echt persoon gebruikt. Het bestaat alleen om afzenders te betrappen die mensen zonder toestemming mailen. Als je een e-mail naar een spamval stuurt, blijkt daaruit dat je lijst is gekocht, van websites is gekopieerd of lange tijd niet is opgeschoond.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Verwijder dode adressen voordat ze spamvallen worden
---

## Wat is een spam trap?

Een spam trap, in het Nederlands een spamval, is een e-mailadres dat er normaal uitziet, maar dat geen echt persoon leest. Niemand heeft zich er ooit mee aangemeld voor een nieuwsbrief. Niemand heeft het ooit aan een bedrijf gegeven.

Als er een e-mail op dat adres binnenkomt, weet de organisatie achter de spamval dus één ding zeker. De afzender heeft het adres niet van de persoon zelf gekregen. Hij heeft het gekocht, van een website gekopieerd of te lang op een oude lijst laten staan.

Wie beheert spamvallen? De documentatie van Amazon voor zijn verzenddienst (Amazon SES) zegt dat internetproviders, mailboxproviders zoals de grote gratis e-maildiensten en antispamorganisaties ze beheren. De adressen worden bewust geheimgehouden. Als afzenders ze kenden, zouden ze ze gewoon verwijderen.

## Een eenvoudig voorbeeld

Zo stuurt een bedrijf een e-mail naar een spamval zonder het te merken.

1. **Een winkel koopt een lijst.** "Shop Online Ltd" koopt een lijst van 10.000 e-mailadressen van een website die contactgegevens verkoopt.
2. **De lijst bevat een spamval.** Een van die adressen is info@hidden-page.example. Een organisatie die spamvallen beheert, heeft het jaren geleden op een webpagina gezet, waar tools die adressen verzamelen het zouden vinden. Geen enkel persoon heeft het ooit gebruikt.
3. **De winkel verstuurt een aanbieding.** De e-mail gaat naar alle 10.000 adressen, ook naar de spamval.
4. **Er lijkt niets mis.** De spamval bouncet niet. De e-mail wordt geaccepteerd zoals elke andere. De winkel ziet geen foutmelding.
5. **De spamval registreert de afzender.** De organisatie achter de spamval noteert de verzendende server en het domein van de winkel.
6. **De problemen beginnen later.** Een paar dagen later komen meer e-mails van de winkel in spammappen terecht. Sommige klanten krijgen geen orderbevestigingen meer. De winkel heeft geen idee waarom.

De winkel ziet nooit een bericht als "je hebt een spamval geraakt". De winkel ziet alleen het gevolg.

## De drie soorten spamvallen

### 1. Pristine traps (nooit door iemand gebruikt)

Deze adressen zijn alleen gemaakt om als spamval te dienen. Ze staan verborgen op webpagina's waar tools die adressen van internet kopiëren (scrapingtools) ze vinden.

**Voorbeeld:** een adres zoals contact-7731@some-domain.example staat in de code van een webpagina. Een echte bezoeker ziet het nooit. Een scrapingtool verzamelt het wel.

Alleen gekochte of gescrapete lijsten bevatten pristine traps. Iemand die zich op je website heeft aangemeld, kan er nooit een zijn.

### 2. Recycled traps (oude adressen die terugkwamen als spamval)

Dit waren ooit echte adressen. Daarna stopte de persoon met het gebruik ervan. Lange tijd liet de e-mailprovider elke e-mail naar die adressen bouncen. Dat betekent dat de provider de e-mail terugstuurde als onbestelbaar. Daarna zette de provider het adres weer aan, nu als spamval.

Amazon beschrijft deze als adressen "die ooit geldig waren, maar lange tijd ongebruikt zijn geweest (en hebben gebouncet)".

**Voorbeeld:** Sarah meldde zich in 2019 aan voor je nieuwsbrief met sarah.m@oldjob.example. Ze verliet die baan. Haar adres begon te bouncen, maar jij bleef mailen. Jaren later wordt het adres een spamval. Je volgende e-mail komt daarin terecht.

Lijsten die nooit worden opgeschoond, verzamelen in de loop van de tijd recycled traps.

### 3. Typo traps (spelfouten in het domein)

Deze spamvallen staan op domeinen die lijken op een bekend domein, maar met een kleine spelfout. Het domein is het deel na de @.

**Voorbeeld:** iemand typt zijn adres in je aanmeldformulier met één verkeerde letter in het domein. Het domein lijkt daardoor bijna op dat van een grote e-mailprovider, maar is het niet. Als dat verkeerd gespelde domein als spamval wordt gebruikt, wordt elke e-mail die je naar dat adres stuurt geregistreerd.

Typo traps betrappen afzenders die nooit controleren wat mensen in hun formulieren typen.

## Wat er gebeurt als je naar een spamval mailt

Je krijgt geen bounce. De spamval accepteert de e-mail als een normale mailbox. Daarna noteert de organisatie achter de spamval je verzendgegevens, zoals je IP-adres (het nummer dat de server aanduidt waarvandaan je e-mail kwam) en je domein.

Wat er daarna gebeurt, hangt af van wie de spamval beheert:

- **Je IP-adres of domein kan op een [blacklist](/glossary/email-blacklist) komen.** Veel mailservers controleren deze lijsten en weigeren e-mail van afzenders die erop staan.
- **Je reputatie bij die e-mailprovider kan dalen.** Meer van je e-mails komen dan in spam terecht.
- **Je verzenddienst kan je account controleren.** De dienst kan je verzending pauzeren totdat je je lijst hebt opgeschoond.

Hoeveel hits op spamvallen zijn er nodig? Amazon noemt geen aantal. Amazon zegt dat "zelfs een klein aantal hits op spamvallen een zeer negatief effect kan hebben".

## Zo houd je spamvallen van je lijst

Niemand kan je een lijst met spamvaladressen geven. Ze zijn geheim. Je beschermt je lijst dus met goede gewoonten:

1. **Koop, huur of scrape nooit e-mailadressen.** Dit is de enige manier waarop pristine traps op een lijst komen.
2. **Verwijder elk adres dat een [hard bounce](/glossary/hard-bounce) geeft, meteen.** Een hard bounce betekent dat het adres niet bestaat. Amazon zegt dat je deze adressen moet verwijderen "lang voordat ze in spamvallen worden omgezet".
3. **Stop met mailen naar mensen die al maanden niets hebben geopend of aangeklikt.** Recycled traps zitten verstopt tussen oude, stille adressen.
4. **Controleer adressen bij de aanmelding.** Een typefout die je op de aanmeldpagina opvangt, wordt nooit een typo trap op je lijst.

## Spamvallen en e-mailverificatie

Een [email verifier](/email-checker) kan niet elke spamval herkennen. Een recycled trap is een echte mailbox die e-mail accepteert, dus die kan bij een controle als geldig uitkomen. Wees voorzichtig met elke tool die belooft alle spamvallen te vinden.

Wat [e-mailverificatie](/) wel doet, is de adressen verwijderen die spamvallen zouden worden. Het vindt adressen die niet meer bestaan, zodat je ze kunt verwijderen voordat een provider ze hergebruikt. Het vangt ook verkeerd getypte domeinen op voordat je je eerste e-mail verstuurt. Om een hele lijst in één keer op te schonen, upload je hem voor [bulk e-mailverificatie](/bulk-email-verifier). Een gekochte lijst wordt daar niet veilig van. Geen lijsten kopen is een besluit, geen controle.
