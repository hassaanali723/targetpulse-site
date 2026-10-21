---
title: "Is een e-mailadres hoofdlettergevoelig?"
seoTitle: "Is een e-mailadres hoofdlettergevoelig? (Gmail en Outlook)"
description: "Meestal niet. Gmail en Outlook negeren hoofdletters, maar de standaard staat hoofdlettergevoeligheid voor de @ toe. Wanneer dat telt en hoe je adressen opslaat."
slug: is-een-e-mailadres-hoofdlettergevoelig
date: 2026-10-22
updated: 2026-10-22
keyword: is een e-mailadres hoofdlettergevoelig
image: /blog/covers/nl/is-een-e-mailadres-hoofdlettergevoelig.webp
imageAlt: Omslag over hoofdlettergevoeligheid met de regels voor domeinen, Gmail, Outlook en databases
cta: Controleer of een e-mailadres echt bestaat
---

Een e-mailadres is meestal niet hoofdlettergevoelig. Typ je John.Smith@gmail.com of john.smith@gmail.com, dan komt de mail in dezelfde inbox terecht. Het deel na de @ negeert hoofdletters volledig. De uitzondering zit in het deel voor de @. De e-mailstandaard staat technisch toe dat een server Smith en smith als twee verschillende personen behandelt. Dat is goed om te weten als je een aanmeldformulier of een mailinglijst beheert.

## Na de @ maken hoofdletters nooit uit

De domeinnaam na het @-teken is nooit hoofdlettergevoelig. RFC 5321 zegt dat mailboxdomeinen de normale DNS-regels volgen, en DNS negeert hoofdletters. GMAIL.COM, Gmail.com en gmail.com wijzen dus naar precies dezelfde mailserver. Je kunt het domein in hoofdletters of kleine letters typen zonder dat het verandert waar je bericht naartoe gaat.

## Is een e-mailadres hoofdlettergevoelig voor de @?

Het local part, de gebruikersnaam links van de @, werkt anders. Volgens RFC 5321, sectie 2.4, "MOET het local part van een mailbox als hoofdlettergevoelig worden behandeld". Servers die je bericht doorgeven, moeten hoofdletters en kleine letters precies zo laten als ze geschreven zijn. De ontvangende server waar de mailbox staat, beslist of `Smith` en `smith` bij twee verschillende personen horen.

Dezelfde sectie waarschuwt ook: "het benutten van de hoofdlettergevoeligheid van local parts van mailboxen belemmert de interoperabiliteit en wordt afgeraden." Stel je twee collega's bij één bedrijf voor, JSmith@ en jsmith@, en hoe vaak hun mail door elkaar zou raken. De grote providers voorkomen dat door hoofdletters helemaal te negeren.

## Gmail en Outlook

De providers die de meeste consumentenmail verwerken, hebben besloten hoofdletters volledig te negeren. Productexperts in de helpcommunity van Gmail bevestigen dat Gmail hoofdletters negeert, zowel bij het aanmaken van een account als bij binnenkomende mail. Of iemand nu mailt naar `JaneDoe@gmail.com` of naar `janedoe@gmail.com`, Google levert beide af in dezelfde mailbox. Google behandelt `@googlemail.com` en `@gmail.com` ook als hetzelfde adres.

Gmail negeert ook punten in consumentenadressen. `jane.doe@gmail.com` en `janedoe@gmail.com` komen dus in dezelfde inbox. Ga er alleen niet van uit dat dat overal geldt. Volgens de documentatie van Google tellen punten wel mee bij Google Workspace-accounts die via domeinen van werk of school worden beheerd. Punten en hoofdletters zijn aparte regels. Ga er dus niet van uit dat een andere provider punten negeert alleen omdat Gmail dat doet.

Het antwoord van Microsoft lijkt erop. In een reactie op het supportforum van Microsoft legt iemand uit dat het deel na de @ nooit hoofdlettergevoelig is. Of hoofdletters in de gebruikersnaam tellen, hangt af van de provider, en grote providers zoals Outlook en Gmail negeren ze. Dezelfde reactie voegt toe dat een paar bedrijven wel eigen servers draaien die hoofdlettergevoelig zijn.

## Wanneer hoofdletters toch problemen geven

Bij inloggen gaat het meestal mis. Stel dat je je op een telefoon aanmeldt als `Sarah@example.com`, omdat het toetsenbord de eerste letter een hoofdletter gaf. Later log je in met `sarah@example.com`. Een simpel systeem meldt dan dat er geen account is gevonden. De gebruiker heeft zijn adres niet veranderd, maar het inlogformulier vergeleek de tekst strikt hoofdlettergevoelig.

Lijsten en CRM's hebben hun eigen versie van het probleem. Meldt iemand zich aan als `Bob@company.com` en downloadt hij later een gids als `bob@company.com`? Dan tellen veel platforms twee aparte leads. Dat blaast je cijfers op en stuurt mensen dubbele campagnes. Ontdubbel je records zonder op hoofdletters te letten voordat je een marketinglijst [verifieert of ernaar verstuurt](/email-list-cleaning) (in het Engels).

Dan is er nog de zeldzame bedrijfsserver die hoofdletters wel strikt behandelt, de uitzondering die Microsoft in de reactie noemt. Schrijft een contact zijn adres op een visitekaartje als `M.MacDonald@specialtycorp.com`, houd die hoofdletters dan aan als je hem mailt. Het kan bij standaardsystemen geen kwaad, en je voorkomt problemen met aflevering bij systemen waar het wel uitmaakt.

## Als je e-mailadressen opslaat

Bouw je webapplicaties of beheer je contactdatabases? Bewaar dan de oorspronkelijke schrijfwijze. Sla het adres op precies zoals de gebruiker het typte, maar doe alle vergelijkingen, opzoekingen en controles op uniekheid in kleine letters.

Door de oorspronkelijke invoer te bewaren, respecteer je hoe de gebruiker het adres in profielen en e-mailheaders wil zien. Door te normaliseren naar kleine letters voorkom je dubbele accounts. Meldt iemand zich aan als `IStillUse@AOL.COM`, zet de weergavenaam dan niet geforceerd in kleine letters. Behandel `iSTilLUSE@aol.com` wel als een dubbel van dat adres.

Voor uniekheid in PostgreSQL indexeer je de expressie in kleine letters, in plaats van een gewone unique constraint toe te voegen:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL heeft ook de extensie `citext`, die strings vergelijkt zonder op hoofdletters te letten. In MySQL is de standaardcollatie (`utf8mb4_0900_ai_ci`) al niet hoofdlettergevoelig. Gewone unique keys vangen dubbele schrijfwijzen daar dus op zonder extra functies.

Let op de valkuil bij het omzetten naar kleine letters in backendtalen, vooral in Java. In Java gebruikt `email.toLowerCase()` de standaardlocale van de server. In een Turkse locale wordt de Latijnse hoofdletter `I` omgezet naar `ı` (een kleine i zonder punt) in plaats van `i`. Dat maakt adressen als `INFO@example.com` kapot. Geef `Locale.ROOT` mee om deze bug te voorkomen:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

`toLowerCase()` in JavaScript heeft deze valkuil niet, omdat het de standaardmappings van Unicode gebruikt en niet de locale van de host. Alleen `toLocaleLowerCase()` hangt af van de locale.

Wil je kapotte opmaak en foute invoer opvangen voordat ze in je database komen? Valideer adressen dan bij de aanmelding met een [API voor e-mailvalidatie](/email-validation-api) (in het Engels). Die vangt typfouten en dode domeinen op terwijl de persoon nog op de pagina is.

## Veelgestelde vragen

**Is Gmail hoofdlettergevoelig?**
Nee, Gmail negeert hoofdletters bij het aanmaken van accounts en bij het afleveren van berichten. Is je adres john.doe@gmail.com, dan ontvang je ook berichten die naar JOHN.DOE@gmail.com en John.Doe@googlemail.com zijn gestuurd. Je kunt geen nieuw account registreren waarvan de letters alleen in hoofdletters verschillen van een bestaande gebruiker.

**Maakt het uit als ik mijn e-mailadres met hoofdletters typ?**
Bij gewone mail naar inboxen van consumenten en bedrijven houden hoofdletters de aflevering niet tegen. De ontvangende mailserver negeert de hoofdletters en levert het bericht gewoon af. Je hoeft alleen op te letten bij inlogformulieren die e-mailadressen als exacte strings vergelijken.

**Is een e-mail-ID hoofdlettergevoelig?**
In de praktijk niet. Een e-mail-ID is gewoon een andere naam voor een e-mailadres, en Gmail, Outlook en de andere grote providers negeren hoofdletters erin. De standaard staat een server wel toe om hoofdletters voor de @ als verschillend te behandelen, maar dat is zeldzaam. Schrijf je je ID met hoofdletters zodat hij beter leesbaar is, dan kost je dat vrijwel zeker geen mail.

**Moet ik e-mailadressen in kleine letters opslaan?**
Vergelijk en indexeer e-mailadressen in kleine letters, zodat je dubbele accounts en mislukte logins voorkomt. Bewaar je de oorspronkelijke hoofdletters van de gebruiker in een aparte weergavekolom, dan kun je meldingen netjes opmaken. Kun je maar één kolom bewaren, sla het adres dan op zoals het getypt is en vergelijk het met lower(). Zo raak je het origineel niet kwijt.

**Kunnen hoofdletters een e-mail laten bouncen?**
Heel zelden. Het gebeurt alleen op een ongebruikelijke server die is ingesteld om Admin@ en admin@ als aparte mailboxen te behandelen. Bouncet een adres met hoofdletters, zoek dan eerst naar iets anders, zoals een typfout of een mailbox die niet meer bestaat. De code in de bouncemelding vertelt je welke van de twee het is, zoals uitgelegd in [hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

Hoofdletters houden een e-mail niet tegen, maar [een typfout](/email-checker) wel. Schoon je een contactlijst op voor de volgende verzending, haal hem dan door [Giggal.ai](/email-list-cleaning) (in het Engels) om eerst dode mailboxen en kapotte domeinen te vinden.
