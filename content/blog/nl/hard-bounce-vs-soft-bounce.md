---
title: "Hard bounce vs soft bounce: wat ze betekenen en wat je moet doen"
seoTitle: "Hard bounce vs soft bounce: het verschil en wat je doet"
description: "Het verschil tussen hard bounce en soft bounce in gewone taal: de bouncecode lezen, waarom tools hem anders labelen en wat veilige bouncepercentages zijn."
slug: hard-bounce-vs-soft-bounce
date: 2026-10-22
updated: 2026-10-22
keyword: verschil hard bounce en soft bounce
image: /blog/covers/nl/hard-bounce-vs-soft-bounce.webp
imageAlt: Hard bounce vs soft bounce, een 5 in de code betekent permanent en een 4 betekent opnieuw proberen
cta: Vind hard bounces voordat je verstuurt
---

Een hard bounce is een permanente fout. Het e-mailadres bestaat niet, het domein bestaat niet, of de ontvangende server heeft je geblokkeerd. Als je opnieuw verstuurt, bouncet de mail opnieuw.

Een soft bounce is een tijdelijke fout. Het adres is echt, maar iets hield de bezorging voorlopig tegen. De inbox is vol, de server is druk, of de server wil dat je het later opnieuw probeert. Als je opnieuw verstuurt, komt de mail vaak wel aan.

Dat zijn de definities. Er zijn nog drie dingen die je moet weten, en die zijn belangrijker dan de definities:

- Verschillende verzendtools gebruiken verschillende regels. Dezelfde bounce kan in de ene tool hard tellen en in de andere soft.
- Een correct, werkend adres kan toch een hard bounce geven. Dat gebeurt als je e-mailinstellingen fout zijn, niet het adres.
- Het bouncepercentage waardoor je account wordt opgeschort, is niet altijd het percentage in je campagnerapport.

Deze gids behandelt alle drie.

## Hard bounce vs soft bounce: het verschil

| | Hard bounce | Soft bounce |
|---|---|---|
| Wat het betekent | Permanent. De e-mail wordt niet afgeleverd | Tijdelijk. Bij een volgende poging kan hij wel aankomen |
| Code in het bouncebericht | Begint met 5 (550, 5.1.1, 5.7.1) | Begint met 4 (421, 450, 4.2.2) |
| Veelvoorkomende oorzaken | Adres bestaat niet, domein bestaat niet, afzender geblokkeerd | Inbox vol, server druk, te veel e-mails tegelijk |
| Wat je verzendtool doet | Stopt met versturen naar dat adres, meestal meteen | Probeert het een tijd opnieuw, vaak tot 72 uur |
| Wat jij moet doen | Verwijder het adres. Verstuur niet opnieuw | Wacht. Verwijder het alleen als het blijft bouncen |
| Schade aan je reputatie | Hoog. Veel hard bounces vertellen providers dat je lijst slecht is | Laag bij één bounce. Telt op als dezelfde adressen blijven bouncen |

## Wat is een hard bounce?

Een hard bounce betekent dat de ontvangende server je e-mail definitief heeft geweigerd. Opnieuw proberen helpt niet.

De e-mailstandaard, RFC 5321, noemt dit een permanente fout. Letterlijk staat er dat de afzender "should not retry", dus hetzelfde verzoek niet opnieuw moet proberen.

Er zijn twee soorten hard bounce. In je rapport zien ze er hetzelfde uit, maar ze vragen om een andere oplossing.

**Soort één: het adres is fout.** De mailbox bestaat niet. Of het domein bestaat niet. Of het adres is verkeerd gespeld. Een geverifieerde lijst zou deze bounces nooit mogen geven. Zo zien ze eruit:

- Gmail zegt: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft zegt: `5.1.1 Bad destination mailbox address`
- Microsoft zegt ook: `5.4.1 Recipient address rejected: Access denied`. De eigen documentatie van Microsoft legt deze uit als "the recipient's address doesn't exist", het adres van de ontvanger bestaat niet.

Een adres dat is opgeheven toen iemand van baan wisselde, valt ook in deze groep.

**Soort twee: jij bent geblokkeerd.** Het adres is echt. Maar de ontvangende server accepteert geen mail van jou. Deze bounces hebben codes die met 5.7 beginnen:

- [550 5.7.1](/blog/550-5-7-1-error) betekent een blokkade door een beleid.
- `550 5.7.26` betekent dat Gmail je e-mail weigerde omdat je domein niet geauthenticeerd is.
- `550 5.7.30` betekent dat je e-mail niet door een DKIM-controle kwam.

Je verzendtool telt deze als hard bounces, omdat de code met 5 begint. Maar het adres is in orde. Het probleem ligt bij jou. Verderop leggen we dit uit, want sinds 2025 is dit de snelst groeiende oorzaak van hard bounces op schone lijsten.

## Wat is een soft bounce?

Een soft bounce betekent dat de ontvangende server "nu even niet" zei. RFC 5321 noemt dit een tijdelijke fout. Letterlijk staat er: "the error condition is temporary and the action may be requested again", de fout is tijdelijk en de actie mag opnieuw worden gevraagd. Je verzendtool leest dat en probeert het later opnieuw.

Dit zijn de veelvoorkomende oorzaken, met de codes die je ziet:

- **Inbox is vol.** Gmail zegt `452 4.2.2 The recipient's inbox is out of storage space`. De persoon kan e-mails verwijderen en ruimte maken.
- **Te veel e-mails te snel.** Gmail zegt `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Of `421 4.7.28` als Gmail te veel mail vanaf je IP-adres ziet. Microsoft zegt `4.7.500` tot `4.7.699 Access denied, please try again later` terwijl het je activiteit controleert.
- **Greylisting.** Sommige servers, en veel secure email gateways, weigeren de eerste e-mail van een afzender die ze niet kennen. Bij de tweede poging accepteren ze hem wel. Het wachten duurt meestal ongeveer 15 minuten.
- **Server is offline.** Een `421`-code betekent dat de server niet beschikbaar is. Een `4.4.1` of `4.4.2` betekent dat de verbinding mislukte of een time-out kreeg.
- **E-mail verlopen.** Een `4.4.7`-code betekent dat je server het bleef proberen en daarna opgaf. Volgens RFC 5321 horen servers het ongeveer vier tot vijf dagen te blijven proberen.

Eén soft bounce is normaal. Een soft bounce die zich herhaalt, is een probleem. Is een inbox zes weken lang bij elke verzending "vol", dan is die inbox niet vol. Hij is verlaten. Elke verzendtool gaat hem na verloop van tijd zo behandelen.

## Zo lees je de code in een bouncebericht

Elk bouncebericht heeft een code. Als je die kunt lezen, heb je niemands label nodig. Je ziet zelf wat er gebeurde.

Elk bericht bevat twee codes.

**De eerste code heeft drie cijfers**, zoals 550 of 421. Alleen het eerste cijfer telt hier. Een 4 betekent tijdelijk. Een 5 betekent permanent.

**De tweede code bestaat uit drie getallen met punten**, zoals 5.1.1. Het eerste getal herhaalt dezelfde regel: 4 is tijdelijk, 5 is permanent. Het tweede en derde getal geven de reden:

- `.1.1` betekent dat de mailbox niet bestaat (het deel vóór het @-teken klopt niet).
- `.1.2` betekent dat het domein niet bestaat (het deel na het @-teken klopt niet).
- `.2.2` betekent dat de inbox vol is.
- `.7.1` betekent dat de server je weigerde vanwege een beleid.

![Zo lees je een bouncecode: het eerste cijfer zegt hard of soft, de volledige code zegt waarom, en de actie volgt uit beide](/blog/fig-nl-bounce-code-reading.webp)
Lees het eerste cijfer om het type te kennen. Lees de volledige code om de reden te kennen. Handel dan op basis van de reden.

De tabel hieronder toont de codes die je echt tegenkomt. De berichttekst komt letterlijk uit de documentatie van Gmail en Microsoft.

| Code | Waar je hem ziet | Wat het betekent | Type | Wat je doet |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, de meeste servers | De mailbox bestaat niet | Hard | Verwijder het adres |
| 5.1.2 | Elke server | Het domein bestaat niet | Hard | Verwijder het adres |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | Het adres bestaat niet | Hard | Verwijder het adres |
| 550 5.2.1 | Gmail | Het account is inactief | Hard | Verwijder het adres |
| 552 5.2.2 | Gmail | Inbox is vol en het account is inactief | Hard | Verwijder het adres |
| 452 4.2.2 | Gmail | Inbox is vol | Soft | Wacht. Verwijder het als het blijft gebeuren |
| 450 4.2.1 | Gmail | De persoon krijgt te veel e-mails | Soft | Wacht |
| 421 4.7.28 | Gmail | Te veel mail vanaf je IP | Soft | Verstuur langzamer. Controleer je lijst |
| 550 5.7.28 | Gmail | Te veel ongewenste mail vanaf je IP | Hard | Stop met versturen. Herstel je lijst en je volume |
| 550 5.7.1 | Gmail, Microsoft | Geblokkeerd door een beleid | Hard, maar het adres is in orde | Controleer je authenticatie en reputatie |
| 550 5.7.26 | Gmail | Je domein is niet geauthenticeerd | Hard, maar het adres is in orde | Stel SPF en DKIM in |
| 550 5.7.30 | Gmail | Je e-mail kwam niet door DKIM | Hard, maar het adres is in orde | Herstel je DKIM-instellingen |
| 5.7.23 | Microsoft | Je e-mail kwam niet door SPF | Hard, maar het adres is in orde | Herstel je SPF-record |
| 5.7.606 tot 5.7.649 | Microsoft | Je verzend-IP is geblokkeerd | Hard, maar het adres is in orde | Vraag Microsoft de blokkade op te heffen en los daarna de oorzaak op |
| 4.7.500 tot 4.7.699 | Microsoft | Verdachte activiteit, tijdelijk geblokkeerd | Soft | Wacht. Het verdwijnt vanzelf als je legitiem bent |
| 4.4.7 | Elke server | De e-mail verliep na dagen proberen | Soft, maar de server gaf op | Verwijder het adres als dit zich herhaalt |

Kijk naar de laatste kolom. Twee codes kunnen allebei hard bounces zijn en toch om tegenovergestelde acties vragen. Een `5.1.1` betekent: verwijder het adres. Een `5.7.26` betekent: houd het adres en herstel je DNS.

## Waarom dezelfde bounce in de ene tool hard is en in de andere soft

Mensen vergelijken bouncepercentages tussen tools en raken in de war. Dit is waarom.

De ontvangende server stuurt een code. Meer doet hij niet. Je verzendtool beslist daarna wat hij met die code doet. Elke tool heeft zijn eigen regel, en die regels verschillen. De eigen gids van Twilio zegt: "not all ISPs adhere to that code consistently", niet alle providers houden zich consequent aan die code.

Dit zijn vier populaire tools en hun regels:

| Tool | Wat hij doet met een soft bounce | Wanneer een soft bounce een hard bounce wordt |
|---|---|---|
| Mailchimp | Probeert opnieuw en houdt het contact | Na 7 soft bounces als het contact nooit iets opende. Na 15 als het contact eerder wel opende |
| HubSpot | Noemt het "pending" en probeert tot 72 uur. Registreert daarna een soft bounce | Niet automatisch. Maar HubSpot zet "mailbox vol" in de groep hard bounces, niet soft |
| SendGrid | Probeert tot 72 uur opnieuw | Na 72 uur stopt hij. Hard bounces komen op een blokkeerlijst |
| Amazon SES | Probeert een tijd opnieuw en meldt dan dat hij gestopt is | Nooit automatisch. Alleen hard bounces tellen mee in je bouncepercentage. Automatische antwoorden tellen helemaal niet mee |

![Vier verzendplatforms en hun regels voor wanneer een soft bounce een hard bounce wordt](/blog/fig-nl-bounce-rules-by-platform.webp)
Dezelfde code, vier verschillende regels. Zet een lijst over van Mailchimp naar HubSpot en je aantal hard bounces verandert, terwijl de adressen hetzelfde blijven.

Een volle inbox is dus een soft bounce bij Gmail. Bij HubSpot is het een hard bounce. En bij Amazon SES is het een soft bounce die nooit hard wordt. Verandert je bouncepercentage nadat je van tool wisselt, controleer dan de regels voordat je de lijst de schuld geeft.

De simpele oplossing is: vertrouw het label niet en lees de code. Met elke tool kun je het bouncebericht exporteren. De code daarin is hetzelfde, welke tool hem ook heeft verzameld.

## Wat is een acceptabel percentage hard bounces?

De grens wordt bepaald door het bedrijf dat je mail verstuurt. De meeste publiceren die grens niet. Amazon SES doet dat wel, en de getallen van SES laten goed zien hoe providers denken.

| Percentage hard bounces | Wat Amazon SES doet |
|---|---|
| Onder 2% | Het niveau waaronder SES je adviseert te blijven "for best results", voor de beste resultaten |
| 5% of meer | Je account wordt onder review geplaatst |
| 10% of meer | Je verzending kan worden gepauzeerd totdat je het oplost |

Twee details zijn hier belangrijk. SES telt alleen hard bounces. Soft bounces en bounces door een geblokkeerd IP tellen niet tegen je. En SES gebruikt geen vaste periode. SES kijkt naar een normale hoeveelheid van je verzendingen, dus een kleine verzender wordt op dezelfde manier beoordeeld als een grote.

Spamklachten gaan samen met bounces. De richtlijnen van Google voor verzenders zeggen dat je je klachtenpercentage onder de 0,10 procent moet houden en nooit 0,30 procent mag halen. Amazon SES zet accounts onder review bij 0,1 procent en kan ze pauzeren bij 0,5 procent. Een lijst met meer dan 2 procent hard bounces krijgt meestal ook klachten. Beide hebben dezelfde oorzaak: mensen die niet om je mail vroegen, en adressen die niemand heeft gecontroleerd.

Het artikel met [richtwaarden voor het bouncepercentage](/blog/how-to-reduce-email-bounce-rate) zet de veilige grenzen uit per type e-mail en per herkomst van de lijst.

## Moet je hard bounces van je lijst verwijderen?

Ja. Meteen.

Amazon zegt letterlijk: "you should immediately remove the recipient's email address from your mailing list", je moet het e-mailadres van de ontvanger direct van je mailinglijst verwijderen. Dezelfde pagina waarschuwt dat je verzending kan worden gepauzeerd als je blijft versturen naar adressen met een hard bounce. Mailchimp geeft je niet eens de keuze. Adressen met een hard bounce worden "cleaned from your audience automatically and immediately", automatisch en direct uit je audience verwijderd, en krijgen nooit meer iets.

Probeer ze niet opnieuw. Bewaar ze niet voor de volgende campagne voor het geval de mailbox terugkomt. Een `5.1.1`-adres dat vorige maand bouncete, bouncet volgende maand ook. Elke extra poging vertelt de mailboxprovider dat je verstuurt naar adressen die je niet kent.

Er is één uitzondering. Is de code `5.7.26`, `5.7.30`, `5.7.23` of een code voor een geblokkeerd IP zoals `5.7.6xx`, dan is het adres niet het probleem. Het adres verwijderen lost niets op. Herstel je authenticatie of je reputatie. Verstuur daarna opnieuw naar hetzelfde adres.

Bij soft bounces is het andersom. Laat ze met rust. Je verzendtool probeert het zelf opnieuw. Heeft je tool geen regel voor herhaalde bounces, maak er dan een. Een adres dat bij drie verzendingen op rij binnen een maand een soft bounce geeft, komt niet meer terug. De regel van zeven van Mailchimp is voor iedereen een veilige grens.

## Waarom geeft een correct adres een hard bounce?

Omdat een hard bounce meet of de e-mail werd geaccepteerd. Hij meet niet of het adres bestaat. Vier dingen veroorzaken een 5xx-bounce bij een echte, werkende mailbox.

**Je e-mail is niet geauthenticeerd.** Op 5 mei 2025 begon Microsoft SPF, DKIM en DMARC af te dwingen voor elk domein dat meer dan 5.000 e-mails per dag stuurt naar adressen van Outlook.com, Hotmail en Live. Eerst verplaatste Microsoft mail die niet voldeed naar de map met ongewenste mail. Daarna begon het die mail te weigeren met `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Google eist dezelfde drie records van bulkverzenders. De codes `550 5.7.26` en `550 5.7.30` van Gmail zijn wat je aan jouw kant ziet als een record ontbreekt. Al deze codes beginnen met 5. Ze komen dus in je kolom hard bounces terecht, terwijl de adressen de e-mail wel zouden hebben geaccepteerd.

**Het bedrijf blokkeert onbekende adressen aan de deur.** Microsoft Exchange kan zo worden ingesteld dat het elk adres weigert dat niet in de bedrijfsdirectory staat. Dat doet het met `5.4.1 Recipient address rejected: Access denied`. Meestal is dat een echte hard bounce. Soms is het een nieuwe medewerker van wie de mailbox nog niet is toegevoegd. Daarom geeft een verificatietool die de mailbox zelf controleert je een beter antwoord dan de bounce.

**Er staat een secure email gateway vóór de mailbox.** Veel bedrijven sturen alle inkomende mail door een [secure email gateway](/blog/what-is-a-secure-email-gateway) zoals Proofpoint, Mimecast of Barracuda. De gateway antwoordt voor het hele domein. Hij scant elke e-mail en weigert alles wat een van zijn regels overtreedt, meestal met een beleidscode `5.7.1`. Dat is een hard bounce bij een mailbox die bestaat. Gateways veroorzaken ook late bounces. De gateway accepteert de e-mail aan de deur zonder te controleren of de mailbox bestaat. De bounce komt minuten of uren later, als de mailserver achter de gateway geen mailbox vindt. Je rapport toont een hard bounce, maar die kwam na de verzending binnen, niet tijdens de verzending.

**Het domein is catch-all.** Dit is het omgekeerde probleem. Een [catch-all-domein](/blog/what-is-a-catch-all-email-address) accepteert mail voor elk adres, echt of niet. Het zegt dus nooit `5.1.1` aan de deur. De e-mail wordt geaccepteerd en bouncet later, of verdwijnt zonder melding. Ongeveer 30 procent van een B2B-lijst staat op zulke domeinen. Daar komen de onverwachte hard bounces vandaan.

Wil je weten [waarom e-mails bouncen](/blog/why-cold-emails-bounce) bij cold outreach in het bijzonder, dan liggen de oorzaken anders. Daar doet de leeftijd van de lijst de meeste schade.

## Zo voorkom je hard bounces voordat je verstuurt

Bijna elke `5.1.1` in een campagnerapport was te voorkomen geweest. De mailbox was al weg voordat je op verzenden drukte. Verificatie stelt de ontvangende server dezelfde vraag die de bounce zou hebben gesteld, maar vóór de campagne in plaats van erna.

Een [email address checker](/email-checker) voert drie controles uit, in deze volgorde:

- **Syntaxis.** Vangt fouten zoals `name@gmail..com` op voordat ze je een verzending kosten.
- **Domein.** Vangt typefouten zoals `gmial.com` op, en domeinen die verlopen zijn.
- **Mailbox.** Maakt verbinding met de ontvangende server en vraagt of die mail accepteert voor precies dat adres. Is het antwoord `5.1.1`, dan is dat dezelfde bounce die je van de campagne had gekregen. Maar het kost je geen reputatie, omdat er geen e-mail is verstuurd.

Standaardverificatie werkt op één plek niet meer. Op een catch-all-domein zegt de server ja tegen elk adres. De controle komt dus terug als "riskant" of "accept-all", en jij moet gokken. Giggal.ai is gebouwd om dat deel van de lijst om te zetten in een echt geldig of ongeldig antwoord. De pagina over [catch-all-verificatie](/catch-all-verification) legt uit hoe.

Gateways veroorzaken hetzelfde probleem. Een gateway accepteert de vraag van de verificatietool voor elk adres, dus daar komt een standaardcontrole terug als "onbekend". Giggal.ai controleert deze adressen op een andere manier. Het artikel over [e-mails verifiëren achter secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) legt uit wat de gateway doet en hoe de controle erlangs komt.

Voeg bij aanmeldformulieren een aanroep voor [realtime verificatie](/public/docs) toe op het moment dat het formulier wordt verstuurd. Een verkeerd getypt adres wordt dan opgemerkt terwijl de persoon nog op de pagina is. Dit is de enige stap die bounces vermindert op lijsten die je nog niet hebt opgebouwd.

Pak daarna twee soorten adressen aan die door de verificatie komen maar je toch schaden. Rol-adressen zoals info@ en support@ bestaan, dus ze komen erdoor. Maar niemand is er persoonlijk eigenaar van, en ze krijgen meer klachten. Wegwerp e-mailadressen komen erdoor zolang ze bestaan en verdwijnen later. Elke goede verificatietool markeert beide. Vooral een lijst voor [cold e-mail](/blog/good-bounce-rate-for-cold-email) hoort ze te verwijderen vóór de eerste verzending.

## Veelgestelde vragen

**Wat is het verschil tussen het percentage hard bounces en het percentage soft bounces?**
Elk percentage is dat type bounce gedeeld door het aantal verstuurde e-mails. Het percentage hard bounces is het percentage dat je in de problemen brengt, omdat het de kwaliteit van je lijst laat zien. Amazon SES telt bijvoorbeeld alleen hard bounces als het besluit een account te reviewen of te pauzeren. Het percentage soft bounces zegt meer over je verzendsnelheid, je volume en je reputatie. Lees het apart.

**Moet ik gebouncete e-mails verwijderen?**
Verwijder hard bounces met adrescodes meteen: `5.1.1`, `5.1.2`, `5.2.1` en vergelijkbare codes. Houd hard bounces met authenticatiecodes, `5.7.26`, `5.7.30` en `5.7.23`, en herstel in plaats daarvan je authenticatie. Houd soft bounces en laat de nieuwe pogingen doorlopen. Verwijder elk adres dat meerdere keren op rij een soft bounce geeft.

**Kan een soft bounce een hard bounce worden?**
Ja, op twee manieren. De ontvangende server kan zijn antwoord veranderen. Gmail meldt een volle inbox als `452 4.2.2` zolang het account actief is, en als `552 5.2.2` zodra het account inactief wordt. Of je verzendtool kan het label veranderen. Mailchimp maakt van een adres een hard bounce na 7 soft bounces zonder activiteit, of 15 met activiteit.

**Schaden soft bounces je afzenderreputatie?**
Eén soft bounce niet. Een constante stroom wel. Mailboxproviders zien dat je steeds weer verstuurt naar inboxen die niets kunnen ontvangen. En een hoog percentage soft bounces is vaak zelf al een waarschuwing. Een code als `421 4.7.28` is de provider die je direct zegt dat je langzamer moet versturen.

**Waarom gaf mijn e-mail een hard bounce terwijl het adres klopt?**
Bijna altijd door authenticatie. Gmail en Outlook.com weigeren nu bulkmail zonder SPF, DKIM en DMARC. Die weigering is een 5xx-code, dus je tool registreert hem als hard bounce. Controleer de code. Begint hij met `5.7`, dan is het adres niet het probleem.

Een bouncerapport is alleen nuttig als je het kunt lezen. Lees het eerste cijfer. Lees dan de reden. Handel dan op basis van de reden. De adressen die met `5.1.1` zouden bouncen, zijn het makkelijke deel, omdat je ze kunt vinden voordat je verstuurt. Haal de lijst eerst door [Giggal.ai](/). De kolom hard bounces in je volgende rapport bevat dan vooral dingen die je niet had kunnen weten.
