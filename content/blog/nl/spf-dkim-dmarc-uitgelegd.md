---
title: "SPF, DKIM en DMARC uitgelegd"
seoTitle: "SPF, DKIM en DMARC uitgelegd: zo werken ze samen (2026)"
description: "SPF controleert de server, DKIM de handtekening en DMARC of een van beide past bij je From-domein. De records, veelgemaakte fouten en wat in 2026 veranderde."
slug: spf-dkim-dmarc-uitgelegd
date: 2026-10-22
updated: 2026-10-22
keyword: spf dkim dmarc uitgelegd
image: /blog/covers/nl/spf-dkim-dmarc-uitgelegd.webp
imageAlt: Donkerblauwe banner met de tekst SPF, DKIM, DMARC en drie kolommen met technische uitleg
cta: Los eerst de authenticatie op, schoon daarna de lijst op
---

SPF, DKIM en DMARC zijn drie DNS-records die elk een andere vraag over een e-mail beantwoorden. SPF (Sender Policy Framework) noemt de servers die mail mogen versturen voor je domein. DKIM (DomainKeys Identified Mail) zet een handtekening op elk bericht. Zo kan de ontvanger zien dat er niets is veranderd nadat het bij jou vertrok. DMARC (Domain-based Message Authentication, Reporting and Conformance) controleert of minstens een van die twee overeenkomt met het domein in je From-adres. Het vertelt de ontvanger ook wat te doen als geen van beide overeenkomt. Sinds 2024 zijn ze niet meer optioneel. Gmail en Outlook.com weigeren nu veel mail die niet door deze controles komt, in plaats van die alleen naar spam te sturen.

| Record | Wat het controleert | Waar het staat |
| --- | --- | --- |
| SPF | Welke servers mogen versturen voor je domein | TXT-record op je domein |
| DKIM | Een digitale handtekening op elk bericht | TXT-record op selector._domainkey.jouwdomein |
| DMARC | Of SPF of DKIM overeenkomt met je From-domein, en wat te doen als dat niet zo is | TXT-record op _dmarc.jouwdomein |

## Waarom je ze niet meer kunt overslaan

Sinds 1 februari 2024 heeft Google verplichte regels voor iedereen die e-mail aflevert bij persoonlijke Gmail-accounts. Onder deze basisvereisten moet elke afzender SPF of DKIM instellen. Je moet ook geldige forward en reverse DNS instellen, met overeenkomende PTR-records voor verzendende IP's. Daarnaast moet je TLS-versleuteling gebruiken voor de verzending en je aan de specificaties van RFC 5322 houden. Je spampercentage in Google Postmaster Tools moet onder 0,3% blijven, en Google raadt aan het onder 0,1% te houden. Lever je mail af zonder authenticatie, dan waarschuwt Google dat berichten in de spammap kunnen belanden of direct worden geweigerd met foutcode 5.7.26.

Stuur je 5.000 of meer berichten per dag naar persoonlijke Gmail-adressen, dan ben je voor Google een bulkafzender en worden de regels strenger. Bulkafzenders kunnen niet kiezen tussen SPF of DKIM. Je moet beide protocollen instellen. Je moet ook een DMARC-record publiceren, en het domein in je zichtbare From-header moet overeenkomen met SPF of DKIM. Marketingberichten hebben bovendien een werkende afmelding met één klik nodig. Google telt deze grens van 5.000 berichten over je hoofddomein en al zijn subdomeinen samen, binnen 24 uur. Haalt je domein die grens eenmaal, dan beschouwt Google de bulkstatus als permanent. Vanaf november 2025 is Gmail strenger gaan optreden tegen verkeer dat niet aan de regels voldoet, met tijdelijke vertragingen in de aflevering en permanente weigeringen. Deze richtlijnen gelden voor persoonlijke Gmail-accounts, niet voor zakelijke mailboxen in Google Workspace.

Microsoft voerde op 5 mei 2025 zijn eigen handhaving van authenticatie in, voor afzenders die dagelijks 5.000 of meer berichten afleveren bij consumentenaccounts van Outlook.com, Hotmail en Live. Afzenders boven die grens hebben een geslaagde SPF-controle nodig, een geslaagde DKIM-handtekening, en een gepubliceerd DMARC-record met p=none of strenger dat overeenkomt met SPF of DKIM. Voldoe je niet aan deze eisen, dan blokkeert Microsoft je berichten met bouncecode 550 5.7.515 Access denied, sending domain does not meet the required authentication level. Yahoo voerde in 2024 vergelijkbare regels in voor bulkafzenders.

| Code | Wat er faalde |
| --- | --- |
| 4.7.27 en 5.7.27 | SPF slaagde niet |
| 4.7.30 en 5.7.30 | DKIM slaagde niet |
| 4.7.31 | DMARC-record ontbreekt of heeft geen beleid |
| 4.7.32 | From-domein komt niet overeen met SPF of DKIM |
| 4.7.23 en 5.7.25 | Problemen met het PTR-record |

Google gebruikt de 4.x-codes voor tijdelijke snelheidslimieten en de 5.x-codes voor permanente blokkades. Bouncen je campagnes, raad dan niet wat er misging aan de hand van je marketingdashboard. Bekijk de ruwe weigeringsheaders van de server, zoals uitgelegd in onze gids over [het lezen van bouncemeldingen](/blog/550-5-7-1-error).

## SPF: welke servers mogen versturen voor je domein

Sender Policy Framework, vastgelegd in RFC 7208, controleert de envelope sender van een binnenkomend bericht. De envelope sender is het Return-Path- of MAIL FROM-adres dat mailservers gebruiken om bounces terug te sturen. SPF kan ook de servernaam controleren die bij de eerste HELO- of EHLO-handshake wordt opgegeven. SPF kijkt alleen naar de envelope sender en negeert het zichtbare From-adres dat mensen in hun inbox zien. Daarom kan SPF alleen niet voorkomen dat een aanvaller je merknaam vervalst.

Een [SPF-record](/glossary/spf) staat in DNS als één TXT-record. Het vertelt ontvangende servers welke IP-adressen, MX-servers en externe platforms mail mogen versturen voor je domein. Een gewoon record ziet er zo uit:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Elk record begint met `v=spf1`. De opdracht `include:_spf.google.com` zegt ontvangende servers dat ze het SPF-record van Google moeten opvragen en de IP-adressen daarin moeten toestaan. De tweede include geeft verzendrechten aan servers van je marketingplatform of je dienst voor transactionele e-mail.

De opdracht aan het eind vertelt ontvangers hoe ze afzenders behandelen die niet in de lijst staan. De softfail-kwalificatie, geschreven als `~all`, geeft aan dat servers die niet in de lijst staan waarschijnlijk geen toestemming hebben. Ontvangers wordt wel gevraagd het bericht aan te nemen en een spamfilter toe te passen. De fail-kwalificatie, geschreven als `-all`, markeert servers die niet in de lijst staan als hard fail, en sommige ontvangers weigeren die mail direct. Afzenders die een ingewikkelde opzet controleren, beginnen vaak met `~all`, zodat legitieme zakelijke mail niet per ongeluk wegvalt.

RFC 7208 stelt twee strikte limieten die je niet mag overschrijden. Ten eerste mag een domein maar één SPF-record publiceren. Publiceer je twee records, dan krijg je een permerror, en is SPF ongeldig voor al je uitgaande mail. Ten tweede beperkt SPF de controle tot maximaal 10 DNS-lookups via `include`, `a`, `mx`, `ptr`, `exists` en `redirect`. Is voor je record een elfde lookup nodig, dan geven ontvangende servers een permerror. Doorsturen breekt SPF ook. Stuurt een ontvanger je bericht door, dan komt het IP van de doorsturende server niet overeen met je record, en faalt SPF.

## DKIM: een handtekening die bewijst dat het bericht niet is veranderd

DKIM, vastgelegd in RFC 6376, werkt op het bericht zelf in plaats van op de server. Als je server een bericht klaarmaakt om te versturen, maakt hij een cryptografische hash van bepaalde headers en de body. Hij ondertekent die hash met een private sleutel en schrijft het resultaat in een `DKIM-Signature`-header. De header bevat twee belangrijke waarden: het ondertekenende domein in de tag `d=` en de selector in de tag `s=`. DKIM zegt alleen of de handtekening geldig is. Beslissen wat er bij een fout gebeurt, is de taak van DMARC.

Komt het bericht aan, dan leest de ontvanger de selector en het domein uit de header. Hij vraagt in DNS de publieke sleutel op bij `s._domainkey.d` en controleert de handtekening. DKIM ondertekent headers en inhoud. Het versleutelt de e-mail zelf niet. De body reist als leesbare tekst, maar de handtekening bewijst dat niemand de onderwerpregel, de afzendergegevens of de tekst onderweg heeft veranderd.

Gewoon doorsturen van e-mail laat headers en inhoud intact. Een geldige DKIM-handtekening overleeft doorsturen daarom meestal. Dat maakt DKIM betrouwbaarder dan SPF voor doorgestuurde mail. Mailinglijsten die een voettekst toevoegen of iets aan de onderwerpregel toevoegen, kunnen de handtekening nog wel breken. Gmail vereist sleutels van minstens 1024 bits en raadt 2048 aan.

Een DKIM-record met de publieke sleutel ziet er in DNS zo uit:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

De tag `v=DKIM1` geeft de versie van het protocol aan, `k=rsa` noemt het algoritme van de sleutel, en `p=` bevat de publieke sleutel in base64. Draai je je eigen mailserver, dan kun je een sleutelpaar maken met onze [DKIM-generator](/dkim-generator).

Een veelvoorkomende valkuil ontstaat als afzenders vertrouwen op de standaardhandtekening van een platform. Veel e-mailplatforms ondertekenen uitgaande mail standaard met hun eigen gedeelde domein (`d=shared-esp.example`). De handtekening slaagt dan wel, maar het ondertekenende domein komt niet overeen met je zichtbare From-domein. Daardoor faalt de DMARC-alignment. Stel in de instellingen van je platform een eigen DKIM in, zodat de handtekening jouw domein gebruikt in de tag `d=`.

## DMARC: de controle die beide koppelt aan je From-adres

Domain-based Message Authentication, Reporting and Conformance koppelt de controles op de envelope en de cryptografische handtekeningen aan het zichtbare From-adres dat mensen lezen. Alignment betekent dat het domein dat voor SPF of DKIM slaagde, hetzelfde is als het domein op de From-regel. DMARC slaagt als SPF of DKIM slaagt voor de authenticatie EN overeenkomt met het domein in de From-header. Een bericht hoeft niet met beide tegelijk overeen te komen. Google raadt wel aan beide af te stemmen, en merkt op dat beide later verplicht kunnen worden.

Stel dat je bedrijf een wekelijkse nieuwsbrief verstuurt. Het bericht toont `From: news@example.com`. Voor de bounces gebruikt je e-maildienst een eigen envelope-adres, met Return-Path `bounce-123@bounces.esp-mail.example`. Je dienst ondertekent het bericht ook met een eigen DKIM met `d=example.com`.

Als de ontvangende server dit binnenkomende bericht verwerkt:
1. SPF controleert het envelope-domein `bounces.esp-mail.example` en slaagt. Maar `esp-mail.example` komt niet overeen met `example.com`, dus SPF haalt de DMARC-alignment niet.
2. DKIM controleert de handtekening voor `example.com`, verifieert de cryptografische hash en komt overeen met het domein in de From-header, `example.com`. DKIM slaagt dus en haalt de DMARC-alignment.
3. Omdat DKIM slaagde en overeenkwam, slaagt het bericht voor DMARC.

DMARC heeft twee alignmentmodi, voor SPF en voor DKIM. Relaxed alignment is de standaardinstelling. Daarbij mogen subdomeinen van je organisatiedomein overeenkomen met het hoofddomein. Mail vanaf `news.example.com` komt bijvoorbeeld overeen met een SPF- of DKIM-domein `example.com`. Strict alignment, ingesteld met `aspf=s` of `adkim=s`, vereist dat het domein precies overeenkomt en staat geen verschil in subdomein toe.

Je DMARC-record publiceert een van drie mogelijke beleidsinstructies:
- `p=none`: zet DMARC in monitoringmodus. Ontvangers leveren mail gewoon af en verzamelen intussen rapporten over authenticatie.
- `p=quarantine`: vraagt ontvangers om mail die niet slaagt voor DMARC naar de spam- of junkmap te sturen.
- `p=reject`: vraagt ontvangers om mail die niet slaagt voor DMARC te weigeren.

De tag rua vertelt ontvangers waar ze geaggregeerde rapporten naartoe sturen. Dat zijn meestal dagelijkse XML-bestanden die laten zien welke IP-adressen mail met je domein hebben verstuurd. Een gewoon startrecord op `_dmarc.example.com` ziet er zo uit:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

In mei 2026 publiceerde de Internet Engineering Task Force RFC 9989 op de Standards Track, samen met RFC 9990 voor geaggregeerde rapporten en RFC 9991 voor foutrapporten. Deze nieuwe standaarden vervangen officieel RFC 7489 en RFC 9091. Bestaande records die beginnen met `v=DMARC1` blijven werken, maar de bijgewerkte specificatie past een aantal tags aan. De percentagetag (`pct`) en de tag voor het rapportformaat (`rf`) zijn geschrapt en horen niet meer bij de standaard. De tag voor het rapportinterval (`ri`) heeft de status historisch gekregen. Afzenders die een beleid testen, gebruiken nu de nieuwe tag `t` voor de testmodus. Beheerders kunnen met de tag `np` een beleid instellen voor subdomeinen die niet bestaan. Bevat je huidige DNS-record een percentagetag, plan dan om die te verwijderen. Je kunt een bijgewerkt record maken of oude tags opruimen met onze [DMARC-generator](/dmarc-generator).

## Hoe een ontvangende server een bericht controleert

Komt een e-mail binnen bij een ontvangende gateway, dan voert de server de controles op authenticatie in een vaste volgorde uit:

1. De server accepteert de netwerkverbinding, noteert het IP-adres van de afzender en beoordeelt de HELO- of EHLO-begroeting.
2. De server haalt het domein uit het envelope Return-Path en vraagt in DNS op of het verzendende IP volgens SPF mag versturen.
3. De server zoekt de `DKIM-Signature`-header, vraagt in DNS de publieke sleutel op bij `selector._domainkey.domain` en berekent de cryptografische hashes van headers en inhoud opnieuw.
4. De server bekijkt de zichtbare From-header en vraagt in DNS het DMARC-beleidsrecord op bij `_dmarc.domain`.
5. De server beoordeelt de alignment. Hij controleert of het geauthenticeerde SPF-domein of het geauthenticeerde DKIM-domein overeenkomt met het zichtbare From-domein.
6. De server past het gepubliceerde DMARC-beleid toe, none, quarantine of reject, op basis van de uitkomst van de alignment.
7. Heb je met rua om rapporten gevraagd, dan voegt de server het resultaat toe aan zijn volgende geaggregeerde rapport aan jou.

In Gmail zie je alle drie de resultaten via "Origineel weergeven" bij elk bericht.

## Waar SPF, DKIM en DMARC meestal misgaan

Twee SPF-records publiceren is een veelgemaakte fout bij het toevoegen van een nieuwe e-maildienst. Een beheerder volgt de installatie-instructies, voegt `v=spf1 include:sendgrid.net ~all` toe en publiceert zo een tweede TXT-record naast een bestaand record van Google. RFC 7208 verbiedt meerdere SPF-records op één domein. Vinden ontvangende servers twee records, dan stoppen ze met een permerror en faalt SPF. Je lost dit op door alle toegestane leveranciers samen te voegen in één string: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Over de limiet van 10 lookups gaan, veroorzaakt nog een stille fout in de aflevering. Elke tag `include`, `a`, `mx`, `ptr`, `exists` of `redirect` telt mee voor deze limiet, en includes in de records van leveranciers tellen ook mee. Is voor je record een elfde lookup nodig, dan geven ontvangende servers automatisch een permerror. Je lost te veel lookups op door oude records van leveranciers op te ruimen, tools te gebruiken die je lookups controleren, of includes te vervangen door expliciete `ip4`-reeksen. Doe dat laatste alleen voor verzendende IP's die je zelf beheert en die niet veranderen.

Koppel je een nieuwe verzenddienst zonder hem aan DNS toe te voegen, dan staat je uitgaande mail bloot aan spamfilters. Sales- of supportteams koppelen vaak afsprakenplanners, helpdeskplatforms of factuursystemen zonder degene te waarschuwen die DNS beheert. Deze nieuwe servers staan niet in je SPF-record en ondertekenen niet met je DKIM-sleutels. Hun berichten falen dus voor de authenticatie en belanden in spammappen. De oplossing is een eenvoudige regel: wie een nieuwe tool koppelt, meldt dat bij degene die DNS beheert. Kijk daarnaast in je DMARC-rapporten naar afzenders die je niet herkent.

Vertrouwen op DKIM met de handtekening van een platform breekt de DMARC-alignment, ook al is de handtekening cryptografisch geldig. Ondertekent een e-maildienst berichten met `d=platform-mail.example` terwijl je From-regel `From: support@yourcompany.example` toont, dan slaagt DKIM voor de technische controles. Maar het faalt voor de alignment met je domein. Open de instellingen van je platform om dit op te lossen, maak eigen DKIM-sleutels voor je domein en publiceer de selectorrecords in je DNS-beheer.

Doorsturen breekt SPF elke keer dat een ontvanger werkmail doorstuurt naar een persoonlijke inbox. De tussenliggende server stuurt het bericht door met zijn eigen IP-adres, en dat komt niet overeen met je SPF-record. Je hebt geen invloed op hoe anderen doorsturen. Maar zorg je dat je berichten geldige DKIM-handtekeningen hebben, dan overleven ze het doorsturen en voldoen ze ook na extra tussenstappen aan de eisen van DMARC.

Bulkcampagnes versturen via een ander platform met een gratis `@gmail.com`-adres als From faalt per definitie voor DMARC. De richtlijnen voor afzenders van Google waarschuwen uitdrukkelijk dat het nadoen van Gmail-adressen vanaf externe servers de bezorgbaarheid schaadt. Externe platforms kunnen geen geldige cryptografische handtekeningen maken of slagen voor SPF voor het domein van Google. Mailboxproviders weigeren de mail daarom of zetten hem in quarantaine. Doe outreach altijd vanaf een eigen domein.

DMARC voor altijd op `p=none` laten staan, laat je domein kwetsbaar voor nabootsing. Een monitoringbeleid voldoet aan het minimum van Gmail en Microsoft. Maar `p=none` zegt ontvangende servers dat ze helemaal niets hoeven te doen als er vervalste mail verschijnt. Iemand die precies jouw domein vervalst, wordt bij die instelling niet door DMARC tegengehouden. Bekijk een paar weken lang je dagelijkse geaggregeerde rapporten. Controleer of al je legitieme verzendbronnen overeenkomen, en verhoog je beleid dan naar `p=quarantine` en daarna naar `p=reject`.

## Checklist voor het instellen van SPF, DKIM en DMARC

Werk deze stappen op volgorde af:

1. Maak een lijst van elke interne dienst, elk marketingplatform, elke supportdesk en elke transactionele tool die e-mail met je domein verstuurt.
2. Publiceer één samengevoegd [SPF-record](/glossary/spf) met de toegestane verzendservers, en houd het totaal aantal lookups onder 10. De [SPF-checker](/spf-checker) telt ze voor je.
3. Zet eigen DKIM-ondertekening met je eigen domein aan voor elk verzendplatform en publiceer de bijbehorende selectorrecords in DNS.
4. Zorg dat je verzendende IP-adressen een geldige forward DNS hebben en een overeenkomend [PTR-record](/glossary/ptr-record) in reverse DNS.
5. Publiceer een eerste [DMARC-record](/blog/what-is-a-dmarc-record) op `_dmarc` met `p=none` en een actieve `rua`-mailbox, zodat je geaggregeerde XML-rapporten gaat ontvangen.
6. Registreer je verzenddomein in [Google Postmaster Tools](/glossary/postmaster-tools) om je domeinreputatie, afleverfouten en spamklachtenpercentages te volgen.
7. Bekijk een paar weken lang je geaggregeerde DMARC-rapporten en controleer of elke legitieme verzendstroom SPF- of DKIM-alignment haalt.
8. Verhoog je DMARC-beleid van `p=none` naar `p=quarantine`, beoordeel of de aflevering stabiel blijft, en zet je beleid daarna op `p=reject`.
9. Stuur een testbericht naar een persoonlijk Gmail-account en open "Origineel weergeven" om te controleren dat SPF, DKIM en DMARC allemaal PASS tonen.

## Veelgestelde vragen

**Heeft DMARC zowel SPF als DKIM nodig?**
Nee. DMARC vereist dat SPF of DKIM slaagt voor de authenticatie en overeenkomt met het domein in je zichtbare From-header. Heb je beide protocollen actief op je domein, dan sta je sterker als doorsturen SPF breekt. Google raadt aan beide in te stellen als je veel verstuurt. Maar een bericht slaagt voor DMARC als maar één van de twee een geldige alignment haalt.

**Wat is het verschil tussen SPF en DMARC?**
SPF geeft bepaalde IP-adressen van mailservers toestemming om mail te versturen voor het technische envelope-adres in de Return-Path-header. DMARC bekijkt het zichtbare From-adres dat mensen in hun e-mailprogramma zien. Het controleert of SPF of DKIM overeenkomt met dat zichtbare domein. En het vertelt ontvangende servers of ze berichten die niet slagen moeten accepteren, in quarantaine moeten zetten of moeten weigeren.

**Heb ik DMARC nodig als ik minder dan 5.000 e-mails per dag verstuur?**
Gmail vereist DMARC alleen van bulkafzenders. Je wordt dus niet geblokkeerd als je het bij een laag volume overslaat, al heb je wel SPF of DKIM nodig. Toch loont het om een record met p=none en rua te publiceren. De rapporten laten zien welke diensten namens je domein versturen, ook diensten die je was vergeten en iedereen die je vervalst.

**Mag ik twee SPF-records hebben?**
Nee. RFC 7208 verbiedt meer dan één SPF-record op een domein. Vinden ontvangende servers meerdere SPF-records in DNS, dan stoppen ze direct de controle met een permerror en behandelen ze SPF als mislukt. Voeg alle toegestane IP-adressen en includes van externe partijen samen in één record dat begint met `v=spf1`.

**Wat is de eenvoudigste uitleg van DMARC?**
SPF controleert of de server die het bericht verstuurt, mag versturen voor je domein. DKIM controleert een handtekening die laat zien dat het bericht niet is veranderd. DMARC is de laatste controle: het bevestigt dat een van die twee bij hetzelfde domein hoort als het From-adres. Is dat bij geen van beide zo, dan vertelt DMARC de ontvangende server of hij het bericht toch moet afleveren, naar spam moet sturen of moet weigeren.

Deze records bewijzen wie je bent, maar ze veranderen niets aan de adressen waar je naartoe verstuurt. Mail naar dode adressen bouncet nog steeds. Onze gids over [hoe je je bouncepercentage verlaagt](/blog/how-to-reduce-email-bounce-rate) behandelt die kant, en je kunt je lijst door [Giggal.ai](/email-list-cleaning) (in het Engels) halen voor de volgende verzending.
