---
title: "Bouncepercentage van e-mail: richtwaarden en zo verlaag je het"
description: Wat het bouncepercentage van e-mail is, het gemiddelde en de richtwaarden, waarom branchetabellen misleiden en hoe je een hoog percentage verlaagt.
slug: bouncepercentage-verlagen
date: 2026-10-22
updated: 2026-10-22
keyword: bouncepercentage verlagen
image: /blog/covers/nl/bouncepercentage-verlagen.webp
imageAlt: "Richtwaarden voor het bouncepercentage van e-mail: hard bounces onder 0,3 procent en 22,5 procent verval van de lijst per jaar"
cta: Krijg je bouncepercentage weer onder controle
---

Een hoog bouncepercentage is zelden één probleem. Meestal zijn het drie of vier kleine problemen op een stapel. Mensen pakken ze vaak in de verkeerde volgorde aan. Ze beginnen met het interessante technische werk en eindigen met het saaie onderhoud van de lijst, dat het meeste had opgelost.

Daarom staan de stappen hier in volgorde van wat ze echt opleveren, niet van hoe leuk ze zijn om te doen.

## Wat is het bouncepercentage van e-mail?

Het bouncepercentage is het deel van de berichten in een verzending dat onbezorgd terugkwam. Je deelt het aantal gebouncete berichten door het aantal verstuurde berichten, als percentage. Verstuur je er 10.000 en krijg je er 250 terug, dan is het bouncepercentage 2,5 procent. De [bounce rate calculator](/bounce-rate-calculator) rekent het uit met je eigen getallen. De meeste tools tonen het per campagne en splitsen het in hard bounces (het adres of domein bestaat niet) en soft bounces (volle mailbox, drukke server, tijdelijke blokkade). Mailboxproviders letten het meest op het aandeel hard bounces. Dat is het duidelijkste teken van een lijst die nooit is geverifieerd.

## Richtwaarden voor het bouncepercentage

Welk getal acceptabel is, hangt af van het soort mail. Providers beoordelen elk soort anders.

| Soort verzending | Gezond | Opletten | Schadelijk |
|---|---|---|---|
| Marketing naar een lijst met opt-in | onder 1% | 1 tot 2% | boven 2% |
| Transactioneel (bonnen, wachtwoordresets) | onder 0,5% | 0,5 tot 1% | boven 1% |
| Cold outreach | onder 2% | 2 tot 5% | boven 5% |

![Gezonde, op te letten en schadelijke zones voor het bouncepercentage bij marketingmail, transactionele mail en cold e-mail](/blog/fig-nl-bounce-rate-bands.webp)
Hetzelfde bouncepercentage is bij het ene soort verzending prima en bij het andere een probleem.

[Cold e-mail](/blog/good-bounce-rate-for-cold-email) krijgt een bredere zone, omdat de lijst per definitie kouder is. Maar cold e-mail wordt ook strenger beoordeeld zodra de grens is overschreden. Een cold campagne op 6 procent krijgt sneller blokkades dan een nieuwsbrief met hetzelfde percentage. De zones zijn wat teams voor bezorgbaarheid in de praktijk gebruiken. De regels van Google en Yahoo voor bulkverzenders leggen de grens voor spamklachten op 0,3 procent. Een bouncepercentage boven deze zones gaat meestal samen met klachten.

## Wat is het gemiddelde bouncepercentage van e-mail?

Het getal dat het vaakst wordt genoemd, ligt rond 2 tot 2,5 procent over alle verzenders. Zie het als een weetje en niet als doel. Het gemiddelde is samengesteld uit verzenders met lijsten die bijna niets gemeen hebben, en de spreiding erbinnen is veel groter dan het getal doet denken.

Zoek je het gemiddelde bouncepercentage per branche, dan vind je een tabel die op tientallen sites terugkomt. Er staan nette getallen in voor e-commerce, zorg, onderwijs en zo verder. Die getallen gaan bijna allemaal terug op één benchmarkpagina van Mailchimp. En die pagina publiceert nu alleen openpercentages, klikpercentages en afmeldpercentages. Er staat geen tabel met bounces per branche op. De sites die de getallen noemen, citeren vooral elkaar, en een aantal van die sites verkoopt e-mailverificatie.

Branche voorspelt het getal toch al slecht. Twee SaaS-bedrijven in dezelfde categorie kunnen bouncepercentages hebben die een factor tien verschillen, als het ene zijn lijst via opt-in-formulieren opbouwde en het andere de lijst kocht. Wat het getal echt voorspelt, is waar de adressen vandaan komen en hoe lang geleden.

| Herkomst van de lijst | Gangbaar totaal aan bounces | Waarom |
|---|---|---|
| Consumenten met opt-in, verstuurd binnen 90 dagen | onder 0,5% | Mensen gaven de adressen zelf op en ze zijn kort geleden bevestigd |
| Zakelijk met opt-in, verstuurd binnen 90 dagen | onder 1% | Hetzelfde, maar zakelijke mailboxen sluiten als mensen vertrekken |
| Zakelijk met opt-in, 12 maanden niet verstuurd | 2 tot 5% | Ongeveer een kwart van de B2B-contactgegevens veroudert binnen een jaar |
| Cold B2B, geverifieerd vóór verzending | 1 tot 3% | Wat overblijft, zijn vooral catch-all-domeinen die een verificatietool niet kon oplossen |
| Cold B2B, niet geverifieerd | 5 tot 15% | Niets heeft de adressen verwijderd die niet meer bestaan |
| Gekocht of gescrapet, niet geverifieerd | 10 tot 30% | Doorverkochte data veroudert bij de leverancier voordat hij bij jou aankomt |

![Gangbaar bouncepercentage per herkomst van de lijst, van consumenten met opt-in onder 0,5 procent tot gekocht en niet geverifieerd op 10 tot 30 procent](/blog/fig-nl-bounce-by-list-source.webp)
Tussen de bovenste en de onderste rij zit een factor zestig. Geen enkel branchegemiddelde komt daar ook maar in de buurt.

B2B ligt in elke vergelijkbare fase hoger dan B2C. De reden heeft niets met de sector te maken. Mensen wisselen van baan, en een zakelijke mailbox sluit meestal als ze dat doen. Een privéadres bij een gratis provider kan jaren ongebruikt blijven en toch mail accepteren.

De nuttige vraag is dus niet hoe jouw percentage zich verhoudt tot je branche. De vraag is welke rij hierboven bij jouw lijst past, en of je de ene stap hebt gezet die het getal verandert.

## Weet eerst welk soort bounce je hebt

Je verzendtool splitst bounces in hard en soft. De twee betekenen iets anders, en de oplossing voor de ene doet niets voor de andere.

Een [hard bounce](/blog/why-cold-emails-bounce) is permanent. De mailbox bestaat niet, het domein bestaat niet, of de server heeft je botweg geweigerd. Opnieuw versturen geeft altijd hetzelfde resultaat. Dit is de categorie die je schaadt. Mailboxproviders lezen een patroon van hard bounces als een verzender die niet weet wie zijn ontvangers zijn. Van buitenaf ziet een spammer er precies zo uit.

Een soft bounce is tijdelijk. De mailbox is vol, de server ligt eruit, het bericht was te groot, of je bent gegreylist en moet het zo meteen opnieuw proberen. De meeste verzendtools proberen deze automatisch opnieuw, en een flink deel lost zichzelf op.

Pak het rapport van je laatste campagne en zoek de verdeling op voordat je iets anders doet. Zijn het vooral hard bounces, dan is het een probleem met je lijst, en daar gaat de rest van dit artikel vooral over. Zijn het vooral soft bounces, in een vast tempo bij elke campagne, dan ligt het probleem eerder bij je reputatie of je infrastructuur. Dan helpt het opschonen van de lijst weinig.

## Wat telt als slecht

Er is geen grens die overal geldt, maar de getallen waar mensen mee werken, zijn redelijk vast.

| Percentage hard bounces | Wat het betekent |
|---|---|
| Onder 2% | Normaal voor een onderhouden lijst |
| 2% tot 5% | De lijst veroudert of is vóór verzending niet geverifieerd |
| Boven 5% | Providers remmen je waarschijnlijk al af |
| Boven 10% | Reken op opschorting door de meeste verzendplatforms |

Cold outreach zit aan de hoge kant van normaal, omdat de data gekocht of gescrapet is in plaats van met opt-in verzameld. Onder 3% is een redelijk doel voor een opgeschoonde cold lijst. Werk je met een warme lijst van mensen die zich aanmeldden, dan hoor je ruim onder 1% te zitten.

## De stap die het meeste oplost

Verifieer de lijst voordat je verstuurt. Dat is de hele stap, en die voorkomt het overgrote deel van de hard bounces op bijna elke lijst die wij zien.

Een [email address checker](/email-checker) controleert de syntaxis, bevestigt dat het domein bestaat en mailservers heeft, en controleert daarna of de specifieke mailbox echt is. Doe dit met de hele lijst vóór een campagne. Doe het opnieuw met alles wat ouder is dan ongeveer zes maanden, want B2B-adressen verouderen snel. Mensen wisselen van baan. Bedrijven reorganiseren. Een adres dat in februari goed was, is dat in augustus niet per se nog. Ongeveer een kwart van de B2B-contactgegevens veroudert binnen een jaar.

Eén ding moet je hier in de gaten houden. Het is de reden dat veel mensen verifiëren en toch bounces krijgen. Ongeveer 30% van een zakelijke lijst staat op [catch-all-domeinen](/blog/what-is-a-catch-all-email-address). Die accepteren mail voor elk mogelijk adres, of er nu een mailbox bestaat of niet. De meeste verificatietools kunnen die adressen niet oplossen en geven ze terug met het label risky, unknown of accept-all. Dan heb je twee slechte opties: een derde van je lijst verwijderen, of ernaar versturen en het op de harde manier ontdekken.

![Een ringdiagram dat laat zien dat ongeveer 70 procent van een B2B-lijst een duidelijk resultaat krijgt en ongeveer 30 procent op catch-all-domeinen staat](/blog/fig-nl-catch-all-share.webp)
Het oranje deel is wat een standaardcontrole zonder antwoord teruggeeft. Daar komen de bounces vandaan die je niet verwachtte.

Verwijderen is de veiligste van de twee, en de meeste mensen doen dat. Daarom kan een geverifieerde lijst toch dun aanvoelen. Een verificatietool die catch-all-adressen omzet in een echt resultaat, geldig of ongeldig, haalt je uit die keuze. Daarvoor is Giggal.ai gebouwd. Het past dezelfde aanpak toe op mailboxen achter [secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) zoals Proofpoint en Mimecast. Daar mislukt de gewone controle op een vergelijkbare manier, om een andere reden.

## Verwijder daarna de adressen die nooit gingen werken

Twee categorieën kun je beter weghalen, ook als ze als geldig uit de verificatie komen.

Rol-adressen zijn gedeelde adressen: info@, sales@, support@, admin@. Ze bestaan meestal, dus ze komen door de verificatie. Maar ze komen uit in een gedeelde inbox waar niemand persoonlijk eigenaar van is. De betrokkenheid is laag en het aantal klachten hoger dan gemiddeld. Voor cold outreach zijn ze bijna waardeloos.

Wegwerp e-mailadressen komen van diensten voor tijdelijke mail en bestaan een paar minuten. Ze komen door de verificatie zolang ze bestaan en verdwijnen daarna. Als je [je e-maillijst opschoont](/email-list-cleaning) (in het Engels), markeert elke fatsoenlijke verificatietool beide categorieën los van geldig. Het is dus een filterstap, geen extra werk.

## Los de instroom op, niet alleen de lijst

Blijven er slechte adressen binnenkomen, dan blijf je eindeloos opschonen.

Zet [realtime verificatie](/public/docs) op je aanmeldformulieren. Een typefout wordt dan opgemerkt terwijl de persoon nog op de pagina is. Het is één API-aanroep op het moment dat het formulier wordt verstuurd. De meeste waarde zit in het opvangen van gmial.com en hotmial.com op het moment dat ze worden getypt. Dat helpt je bezorgbaarheid, en het is een betere ervaring voor iemand die echt iets van je wilde horen.

Schrap het tweede veld waarin mensen hun e-mailadres moeten bevestigen. Het werkt niet. Mensen kopiëren en plakken uit het eerste veld, en je hebt een drempel toegevoegd zonder voordeel.

Koop je lijsten, verifieer ze dan op de dag dat ze binnenkomen en niet op de dag dat je verstuurt. Leveranciers verkopen dezelfde data steeds opnieuw, en die veroudert bij hen, niet alleen bij jou.

## Het werk aan authenticatie

Dit viel vroeger onder dingen die bounces niet verminderen. Dat advies klopt niet meer. SPF, DKIM en DMARC bepalen of ontvangende servers erop vertrouwen dat je bent wie je zegt dat je bent. Twee van de grootste providers weigeren nu direct mail als die records ontbreken.

Microsoft begon op 5 mei 2025 niet-geauthenticeerde bulkmail aan adressen van Outlook.com, Hotmail en Live te weigeren. Verzenders boven 5.000 berichten per dag zonder alle drie de records krijgen `550 5.7.515 Access denied, sending domain does not meet the required authentication level`. Dat is een 5xx-code, dus je verzendtool registreert het als hard bounce, bij een mailbox die bestaat en het bericht had geaccepteerd. Gmail werd in november 2025 in dezelfde richting strenger. Het ging van verdachte mail in de spam zetten naar die mail weigeren op SMTP-niveau.

In de praktijk betekent dit dat een gat in je authenticatie nu in je bouncerapport opduikt, en niet meer stil in je openpercentage. Hebben veel van je bounces 5.7.x-codes en zitten je ontvangers vooral bij Outlook of Gmail, dan is je lijst niet het probleem. Dan helpt opnieuw verifiëren niet.

Stel de drie records goed in, controleer ze één keer met een van de gratis DMARC-checkers en denk er daarna niet meer aan. Zijn je bounces juist fouten omdat de mailbox niet bestaat, met code 5.1.1, dan verandert geen enkele aanpassing in je DNS daar iets aan.

## Warm het domein op als het nieuw is

Een gloednieuw verzenddomein dat op de eerste dag 5.000 berichten verstuurt, wordt afgeremd. Dat afremmen geeft soft bounces die op een probleem met je lijst lijken.

Begin met een laag volume en verhoog dat in twee tot vier weken. De meeste verzendplatforms doen dit nu automatisch. Doet het jouwe dat niet, voer het volume dan met de hand op en sla geen stappen over. De reputatie die je opbouwt, bepaalt of je volgende campagne aankomt.

## Een volgorde die werkt

Lees de verdeling tussen hard en soft uit je laatste campagne. Verifieer de hele lijst, [inclusief het catch-all-deel](/catch-all-verification), in plaats van dat deel weg te gooien. Verwijder rol-adressen en wegwerp e-mailadressen. Zet verificatie op het aanmeldformulier, zodat het probleem niet terugkomt. Controleer SPF, DKIM en DMARC één keer. Warm het domein op als het nieuw is. Verstuur dan, lees de nieuwe getallen en herhaal de verificatie elk kwartaal.

De meeste lijsten gaan alleen al met de tweede stap van een vervelend getal naar een acceptabel getal. De rest van de lijst is er om te voorkomen dat het getal weer oploopt.

Niets in die volgorde is slim, en daar gaat het om. Bijna iedereen die zijn bouncepercentage wil verlagen, begint met de authenticatierecords omdat dat als techniek voelt. En eindigt met de lijst omdat dat als administratie voelt. De volgorde hierboven is niet voor niets andersom.

Wil je weten in welke rij van die tabel jouw lijst staat? Neem de laatste 500 adressen waarnaar je verstuurde en controleer ze vóór de volgende campagne. [Giggal.ai](/) geeft 1.000 gratis credits zonder creditcard, en ze werken met een bulkupload. De steekproef en de echte lijst kosten dus hetzelfde: niets.
