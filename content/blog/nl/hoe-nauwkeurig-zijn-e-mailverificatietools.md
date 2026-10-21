---
title: "Hoe nauwkeurig zijn e-mailverificatietools echt?"
description: Elke verificatietool claimt 97 tot 99 procent nauwkeurigheid. Wat dat getal meet, waarom alle claims op elkaar lijken en hoe je een tool test op je eigen lijst.
slug: hoe-nauwkeurig-zijn-e-mailverificatietools
date: 2026-10-22
updated: 2026-10-22
keyword: nauwkeurigheid e-mailverificatie
image: /blog/covers/nl/hoe-nauwkeurig-zijn-e-mailverificatietools.webp
imageAlt: Claims over de nauwkeurigheid van e-mailverificatie van 97 tot 99,9 procent en wat ze weglaten
cta: Test het op je eigen lijst
---

Open de prijspagina van tien willekeurige e-mailverificatietools en je vindt tien claims over nauwkeurigheid tussen 97% en 99,9%. Wij publiceren er ook een. De getallen liggen zo dicht bij elkaar dat ze bijna niets zeggen. Dat is vreemd voor een maatstaf die je juist moet helpen kiezen.

Achter die gelijkenis zit geen samenzwering. Het komt doordat er geen afgesproken definitie is van wat er wordt gemeten. Elke leverancier kiest een meting die klopt en gunstig uitvalt. En metingen die kloppen en gunstig uitvallen, komen vanzelf dicht bij elkaar uit.

## Wat het getal meestal meet

De gebruikelijke definitie is ongeveer: van de adressen waarvoor we een definitief resultaat gaven, welk deel hadden we goed. Lees dat zorgvuldig, want de voorwaarde in die zin doet heel veel werk.

Adressen die de tool niet wilde beoordelen, tellen niet mee in de noemer. Geeft een verificatietool geldig of ongeldig voor 70% van je lijst en labelt hij de andere 30% als riskant, dan wordt de nauwkeurigheid berekend op die 70%. Het moeilijke derde deel, waar je juist hulp bij nodig had, valt per definitie buiten de score.

Daarom zegt de nauwkeurigheid van e-mailverificatie alleen heel weinig. Een tweede getal is minstens zo belangrijk: dekking. Dat is het deel van de lijst waarover de tool een uitspraak durfde te doen. Een tool met 99% nauwkeurigheid en 70% dekking doet minder voor je dan een tool met 97% nauwkeurigheid en 95% dekking, ook al ziet het eerste getal er beter uit. Heel weinig leveranciers publiceren hun dekking. Anymail Finder doet het wel. Het noemt 86,4% dekking naast 98,9% nauwkeurigheid, en die combinatie is nuttiger dan elk getal apart.

## Waarom elke tool nauwkeurig is op het makkelijke deel

Op een gewoon domein met een normale mailserver is verificatie bijna een opgelost probleem. De server houdt een lijst van zijn mailboxen bij en antwoordt eerlijk als je het vraagt. Een verificatietool leest het antwoord en schrijft het op. Een leverancier kan hier nauwelijks beter of slechter in zijn.

Het nauwkeurigheidsgetal dat leveranciers bovenaan zetten, meet dus vooral hoe goed een tool is in het deel van het werk dat niet moeilijk is. De verschillen tussen tools zitten heel ergens anders.

## Waar ze echt verschillen

Twee categorieën laten de standaardcontrole mislukken. Hoe een tool daarmee omgaat, is het echte verschil tussen producten.

[Catch-all-domeinen](/blog/what-is-a-catch-all-email-address) accepteren mail voor elk mogelijk adres, echt of niet. De server is zo ingesteld dat hij alles aanneemt, zodat gedeelde aliassen, typefouten en vertrokken medewerkers allemaal ergens terechtkomen. Vraag hem naar een mailbox die nooit is aangemaakt, en hij zegt ja. Ongeveer 30% van een gewone B2B-lijst staat op zulke domeinen.

Secure email gateways geven hetzelfde symptoom om een andere reden. Proofpoint, Mimecast, Barracuda en vergelijkbare producten filteren mail aan de rand van het netwerk. Ze accepteren alles voordat ze beslissen wat ze ermee doen. De acceptatie die je terugkrijgt, zegt dus niets over of een mailbox bestaat. Grote bedrijfsdomeinen komen hier veel voor. De contacten die voor jou het belangrijkst zijn, worden dus het vaakst geraakt.

Samen bepalen deze twee categorieën of een verificatietool zijn prijs waard is of niet.

## De claim van een leverancier goed lezen

Met drie vragen kom je voorbij de marketing.

Wat is de noemer? Vraag of het nauwkeurigheidsgetal ook de adressen bevat die als riskant of onbekend terugkwamen. Is dat niet zo, vraag dan welk percentage van een gewone lijst in die groep valt. Een leverancier die die tweede vraag niet beantwoordt, heeft je daarmee iets verteld.

Was de test onafhankelijk? De meeste gepubliceerde benchmarks worden door leveranciers zelf uitgevoerd. En in benchmarks van leveranciers staat de leverancier opvallend vaak op de eerste plaats. Wij noemen er één op deze site: een test van LeadMagic uit februari 2026 met 10.000 echte B2B-adressen, waarvan 28% op catch-all-domeinen. Het zijn echt nuttige gegevens, en LeadMagic zette zichzelf in die test op de eerste plaats. Houd daar rekening mee. Giggal.ai was niet een van de geteste tools.

Betekent nauwkeurigheid hetzelfde als bezorgbaarheid? Nee. Een mailbox kan bestaan en je bericht toch weigeren door filters, reputatie of inhoud. Verificatie vertelt je dat het adres echt is. Het belooft niet dat het bericht aankomt. Leveranciers die dit vaag houden, verkopen je iets wat ze niet kunnen leveren.

## Zelf testen, het enige wat de vraag beslist

Dit kost een middag en zegt meer dan elke claim op elke prijspagina.

Stel een steekproef samen van ongeveer 500 adressen uit je eigen data, niet uit een openbare testset. Meng ze bewust. Neem adressen waarvan je weet dat ze werken omdat die mensen je hebben geantwoord. Neem adressen waarvan je door eerdere bounces weet dat ze dood zijn. En neem een flink deel van catch-all-domeinen en grote bedrijfsdomeinen. De adressen waarvan je zeker weet of ze werken, zijn je controlegroep. Je kunt het antwoord van de tool vergelijken met een feit dat je al hebt.

Haal die steekproef door twee of drie tools. Vergelijk dan drie dingen.

Ten eerste de bekende adressen. Hoeveel werkende adressen kregen terecht het label geldig, en hoeveel dode adressen terecht het label ongeldig. Een tool die je bekende werkende contacten als ongeldig markeert, is erger dan nutteloos. Op zijn advies verwijder je dan echte leads.

Ten tweede de dekking. Tel de rijen die terugkwamen als riskant, onbekend, accept-all of catch-all. Dat aantal is het deel van je lijst waar de tool je niet mee kon helpen. Meestal is dit het getal dat in de hele test het meest zegt.

Ten derde, en alleen als het kan: verstuur naar een deel van wat elke tool op de catch-all-domeinen geldig noemde, en bekijk het echte bouncepercentage. Dit is de enige meting die de claim test in plaats van de marketing. Het is ook de reden dat een gratis versie met alleen losse controles weinig waard is. Je hebt bulk nodig om dit überhaupt te doen.

## Wat wij claimen, en wat dat waard is

Giggal.ai claimt 98,5% nauwkeurigheid op gewone zakelijke lijsten, en gangbare bouncepercentages onder 3% op een opgeschoonde lijst. Dat zijn onze getallen, door ons gemeten. Behandel ze met hetzelfde wantrouwen als die van iedereen anders, totdat je de test hierboven hebt gedaan.

Wij worden liever beoordeeld op dekking. Het ontwerpdoel was om op catch-all-adressen en adressen achter een gateway geldig of ongeldig terug te geven in plaats van een label, bij vijftien genoemde gateways. Zo blijft de groep riskant klein, in plaats van een derde van het bestand. Of dat op jouw data klopt, beantwoordt je eigen steekproef van 500 adressen beter dan deze pagina.

De gratis versie geeft 1.000 credits, zonder creditcard, en werkt juist met een bulkupload zodat de test mogelijk is. Wil je eerst één adres controleren, gebruik dan de [email address checker](/email-checker). Wil je eerst de achtergrond kennen, lees dan [wat riskant echt betekent](/blog/what-does-risky-mean-in-email-verification) en [hoe mailboxen achter een gateway worden geverifieerd](/blog/how-to-verify-emails-behind-secure-email-gateways).
