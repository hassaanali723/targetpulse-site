---
title: "Wat is een DMARC-record?"
seoTitle: "Wat is een DMARC-record? Tags, voorbeelden en rapporten (2026)"
description: "Een DMARC-record is een TXT-record op _dmarc.jouwdomein dat ontvangers zegt wat ze doen met mail die faalt voor authenticatie. Alle tags uit 2026, met uitleg."
slug: wat-is-een-dmarc-record
date: 2026-10-22
updated: 2026-10-22
keyword: wat is een dmarc record
image: /blog/covers/nl/wat-is-een-dmarc-record.webp
imageAlt: Gids over wat een DMARC-record is, met uitleg van de tags en een overzicht van het beleid
cta: Bescherm je domein en houd daarna je bounces laag
---

Een DMARC-record is één korte regel tekst die je toevoegt aan de DNS-instellingen van je domein. Het vertelt andere mailservers wat ze moeten doen met een e-mail die zegt van jouw domein te komen, maar niet door de beveiligingscontroles komt. Het vertelt ze ook waar ze rapporten naartoe sturen over de e-mail die ze uit jouw naam ontvangen.

**In één zin:** DMARC is een openbare regel die zegt: "als een e-mail zegt van mijn domein te komen maar niet echt van mij is, zet hem dan in spam of blokkeer hem, en stuur me een rapport."

## DMARC uitgelegd met een voorbeeld

### Het probleem

Iedereen kan een e-mail versturen en jouw adres op de From-regel zetten. Stel dat je domein `example.com` is. Een oplichter stuurt je klant deze e-mail:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Je klant ziet `example.com` en vertrouwt het. Maar jij hebt deze e-mail nooit verstuurd.

### De twee controles die al bestaan

Mailproviders zoals Gmail en Outlook kunnen al twee controles uitvoeren op elke e-mail:

- **SPF:** kwam deze e-mail van een server die e-mail mag versturen voor `example.com`?
- **DKIM:** heeft deze e-mail de digitale handtekening van `example.com`?

Op zichzelf hebben deze controles een gat. De oplichter kan voor zijn eigen domein wel slagen voor deze controles, terwijl de From-regel nog steeds jouw domein toont. Niets koppelt de controle aan het adres dat je klant ziet.

### Wat DMARC toevoegt

DMARC voegt één regel toe. SPF of DKIM moet slagen voor hetzelfde domein dat op de From-regel staat. Deze overeenkomst heet **alignment**. Slaagt geen van beide controles voor dat domein, dan faalt de e-mail voor DMARC.

Met DMARC bepaal je ook wat er gebeurt met een e-mail die faalt.

### Een DMARC-record, deel voor deel

Je voegt deze regel toe aan de DNS-instellingen van `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Dit zegt elk deel:

- `v=DMARC1`: "Dit is mijn DMARC-regel."
- `p=reject`: "Zegt een e-mail van example.com te komen maar faalt hij voor de controle, blokkeer hem dan."
- `rua=mailto:reports@example.com`: "Stuur me elke dag een rapport over iedereen die e-mail uit mijn naam verstuurt."

### Wat er met de nep-e-mail gebeurt

1. De e-mail van de oplichter vanaf `billing@example.com` komt aan bij Gmail.
2. Gmail voert SPF en DKIM uit. Geen van beide controles slaagt voor `example.com`.
3. Gmail leest je DMARC-record. Daarin staat `p=reject`.
4. Gmail blokkeert de e-mail. Je klant ziet hem nooit.

Je echte e-mails slagen voor dezelfde controles, dus die worden gewoon afgeleverd.

### De drie keuzes voor p

| Instelling | Wat er gebeurt met een e-mail die faalt voor DMARC | Wanneer je het gebruikt |
| --- | --- | --- |
| p=none | Niets. Hij wordt gewoon afgeleverd, en jij krijgt rapporten. | Eerst, terwijl je al je echte afzenders opspoort |
| p=quarantine | Hij gaat naar de spammap. | Zodra al je echte afzenders slagen |
| p=reject | Hij wordt volledig geblokkeerd. | Als je zeker weet dat niets echts zal falen |

### Hoe de meeste domeinen het instellen

1. Begin met `p=none` en lees de dagelijkse rapporten.
2. Zoek elke echte dienst die e-mail voor je verstuurt, zoals je e-mailtool en je supportdesk. Zorg dat elke dienst slaagt.
3. Ga naar `p=quarantine`, en daarna naar `p=reject`. Nu kan niemand je domein meer vervalsen bij ontvangers die je beleid volgen.

De meeste domeinen beginnen dus met een record zoals dit, dat alleen meekijkt:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

De rest van deze gids legt elk deel van een DMARC-record verder uit, en de extra opties die je later kunt toevoegen.

## SPF, DKIM en het From-adres in meer detail

DMARC bouwt voort op SPF en DKIM. Onze gids over [SPF en DKIM](/blog/spf-dkim-dmarc-explained) behandelt ze volledig. Hieronder staat de korte versie.

**SPF** is een lijst van de servers die e-mail mogen versturen voor je domein. Een ontvangende server controleert of de e-mail van een server op die lijst kwam.

**DKIM** is een digitale handtekening die aan elke e-mail wordt toegevoegd. De ontvangende server controleert de handtekening met een sleutel in je DNS. Is de handtekening geldig, dan is de e-mail onderweg niet veranderd en door jouw domein ondertekend.

**Het From-adres** is het afzenderadres dat je ontvanger in de inbox ziet, bijvoorbeeld `hello@example.com`. DMARC controleert of SPF of DKIM voor ditzelfde domein slaagde.

## Hoe een DMARC-record eruitziet

### Waar het in DNS komt

DNS is de openbare lijst met instellingen van je domein. Je bewerkt hem bij je DNS-host. Dat is meestal het bedrijf waar je het domein hebt gekocht, of je hostingprovider. Een DMARC-record is een TXT-record, een DNS-regel die gewone tekst bevat.

Je voegt het toe onder de hostnaam `_dmarc`. De meeste DNS-dashboards zetten je domein er automatisch achter, zodat `_dmarc` verandert in `_dmarc.example.com`.

Let op één veelgemaakte fout. Sommige dashboards verwachten alleen `_dmarc`. Typ je daar de volledige naam `_dmarc.example.com`, dan komt het record op `_dmarc.example.com.example.com` te staan. Ontvangende servers vinden het daar niet.

### De regels voor het schrijven

- **Het moet beginnen met `v=DMARC1`.** Dit moet het eerste deel van het record zijn. `DMARC1` moet in hoofdletters staan. Schrijf je `v=dmarc1`, zet je een ander deel ervoor, of maak je een spelfout, dan negeren ontvangende servers het hele record. Je domein wordt dan behandeld alsof het geen DMARC-beleid heeft.
- **Scheid de delen met puntkomma's.** Spaties rond de puntkomma's zijn toegestaan.
- **Als het beleid ontbreekt.** Stel dat het deel `p` ontbreekt of fout is, maar het record heeft wel een geldig rapportadres in `rua`. Ontvangers behandelen het beleid dan als `p=none`. Ontbreken `p` en `rua` allebei of zijn ze allebei fout, dan slaan ontvangers DMARC voor je domein helemaal over.
- **Publiceer maar één DMARC-record.** Vindt een ontvangende server twee of meer TXT-records die beginnen met `v=DMARC1`, dan gooit hij ze allemaal weg. Deze regel komt uit [RFC 9989](https://www.rfc-editor.org/info/rfc9989), de huidige DMARC-standaard. Twee records geven je geen twee beleidsregels. Ze laten je domein helemaal onbeschermd.

### Zo controleer je je record

Je kunt je record opzoeken met een opdracht in de terminal van je computer:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Gebruik `dig` op Linux en macOS. Het toont je record op één regel, tussen aanhalingstekens. Gebruik `nslookup` op Windows. Het toont het record dat je DNS-server teruggeeft.

Geeft de opdracht niets terug, dan is een van twee dingen waar. Het record is nog niet door DNS verspreid, of het is onder de verkeerde hostnaam toegevoegd.

## Elke DMARC-tag, en welke je nodig hebt

Elk deel van een DMARC-record, zoals `p=none`, heet een tag. De huidige standaard, van mei 2026, heeft elf tags.

| Tag | Wat hij doet, in gewone woorden | Mogelijke waarden | Als je hem weglaat | Heb je hem nodig? |
| --- | --- | --- | --- | --- |
| v | Zegt "dit is een DMARC-record". Moet als eerste komen. | DMARC1 | Verplicht | Ja |
| p | Je beleid: wat er gebeurt met e-mail die faalt. Geldt voor je domein en zijn subdomeinen. | none, quarantine, reject | Behandeld als none, als rua geldig is | Ja |
| rua | Waar de dagelijkse samenvattende rapporten naartoe gaan | Een of meer mailto:-adressen, gescheiden door komma's | Je krijgt geen rapporten | Ja |
| sp | Een apart beleid voor subdomeinen die bestaan, zoals news.example.com | none, quarantine, reject | Hetzelfde als p | Alleen als subdomeinen andere regels nodig hebben |
| np | Een beleid voor subdomeinen die niet in DNS bestaan | none, quarantine, reject | Hetzelfde als sp, of p als sp ontbreekt | Alleen om verzonnen subdomeinen te blokkeren |
| adkim | Hoe precies het DKIM-domein moet overeenkomen. r = relaxed, s = strict | r, s | r | Zelden. Relaxed is de gewone keuze |
| aspf | Hoe precies het SPF-domein moet overeenkomen. r = relaxed, s = strict | r, s | r | Zelden. Relaxed is de gewone keuze |
| t | Testmodus. Laat ontvangers je beleid een stap milder toepassen | y, n | n | Alleen terwijl je overstapt naar een strenger beleid |
| ruf | Waar een rapport over elke losse mislukte e-mail naartoe gaat | Een of meer mailto:-adressen, gescheiden door komma's | Je krijgt geen rapporten | Zelden, vanwege privacybeperkingen |
| fo | Opties voor de rapporten over losse e-mails | 0, 1, d, s | 0 | Alleen als je ruf gebruikt |
| psd | Markeert een public suffix-domein | y, n, u | u | Alleen voor public suffixes of grote organisaties die delen van hun DNS uitgeven |

Relaxed en strict werken zo. Bij relaxed telt een subdomein als overeenkomst, dus `mail.example.com` komt overeen met `example.com`. Bij strict moeten de twee domeinen precies hetzelfde zijn.

Drie oudere tags zijn in de standaard van 2026 geschrapt. Dat zijn de percentagetag (`pct`), de tag voor het rapportformaat (`rf`) en de tag voor het rapportinterval (`ri`). Een achtergebleven `pct=100` kan geen kwaad. Een `pct` onder 100 werd gebruikt om tijdens een invoering een beleid op maar een deel van je e-mail toe te passen. De nieuwe tag `t` doet dat werk nu.

**Wat de meeste domeinen nodig hebben:** alleen `v`, `p` en `rua`.

- Voeg `sp` of `np` toe als je subdomeinen andere regels nodig hebben.
- Laat `psd` met rust. Die heb je alleen nodig als je een grote organisatie hebt die delen van haar DNS uitgeeft (`psd=n`), of een public suffix zoals `co.uk` (`psd=y`).
- Relaxed overeenkomst (`adkim=r` en `aspf=r`) is de standaard en werkt voor bijna elk domein. Je hebt de alignmenttags alleen nodig als strenge compliance-regels ondertekenen met een subdomein verbieden.

Je kunt een record met deze tags maken, of een oud record opschonen, met onze [DMARC-generator](/dmarc-generator) (in het Engels).

## Wat p=none, quarantine en reject echt doen

De tag `p` is het belangrijkste deel van het record. Hij vertelt ontvangende servers wat ze moeten doen met een e-mail die faalt voor DMARC. Er zijn drie keuzes. Elke keuze is een fase op weg naar volledige bescherming.

**p=none: alleen meekijken.** Ontvangers doen niets bijzonders met e-mail die faalt. Die wordt gewoon afgeleverd, en alleen de gewone spamfilters gelden. Samen met rapporten via `rua` noemt RFC 9989 dit Monitoring Mode. Het laat je elke dienst zien die e-mail verstuurt als jouw domein, zonder enig risico voor je aflevering.

**p=quarantine: naar spam sturen.** Ontvangers behandelen e-mail die faalt als verdacht. Bij de meeste mailboxproviders gaat die naar de spammap van de ontvanger. Dit beschermt je ontvangers tegen nep-e-mails. Echte e-mail van een slecht ingestelde tool gaat niet verloren, omdat die nog in de spammap te vinden is.

**p=reject: blokkeren.** Ontvangers weigeren e-mail die faalt. De meeste doen dat tijdens de aflevering, met een permanente foutcode die met 5 begint. De e-mail bereikt nooit een mailbox. De verzendende server krijgt in plaats daarvan een bouncemelding.

### Ontvangers volgen je beleid niet altijd

Je beleid is een verzoek, geen bevel. De standaard zegt dat ontvangers een e-mail niet alleen vanwege `p=reject` moeten weigeren. Weten ze verder niets over de e-mail, dan moeten ze hem als quarantine behandelen. Mailboxproviders gebruiken naast je beleid ook hun eigen data over afzenderreputatie en hun eigen spamfilters.

### Waarom reject DKIM nodig heeft, niet alleen SPF

Doorsturen breekt SPF. Stel dat iemand zijn werkmail doorstuurt naar een persoonlijk account. De doorsturende server verstuurt de e-mail vanaf zijn eigen IP-adres. Dat adres staat niet in je SPF-record, dus de SPF-controle faalt.

DKIM overleeft doorsturen. De handtekening reist mee in de e-mail zelf, dus die blijft geldig en komt nog steeds overeen met je domein. Daarom moet een domein met `p=reject` DKIM gebruiken en niet alleen op SPF vertrouwen.

### Testmodus met t=y

RFC 9989 voegt een testmodus toe. Stel `t=y` in en ontvangers passen je beleid een stap milder toe dan wat je publiceerde:

- `reject` wordt behandeld als `quarantine`.
- `quarantine` wordt behandeld als `none`.

De testmodus verandert je rapporten niet. Hij doet ook niets als je beleid `p=none` is. Je ziet ermee hoe een strenger beleid uitpakt bij echte e-mail, voordat je het permanent maakt.

## Subdomeinen: sp en np

Een subdomein is een extra naam voor je domein, zoals `marketing.example.com` of `support.example.com`. Veel bedrijven versturen e-mail vanaf subdomeinen. De tags `sp` en `np` bepalen de regels voor elk subdomein dat geen eigen DMARC-record heeft.

### Hoe een ontvanger het juiste record vindt

1. De ontvanger zoekt eerst naar een DMARC-record voor het exacte domein op de From-regel. Verstuur je vanaf `news.example.com` en bestaat `_dmarc.news.example.com`, dan gebruikt hij dat record.
2. Staat daar geen record, dan zoekt hij je hoofdrecord op `_dmarc.example.com`. Hij vindt het door de domeinnaam deel voor deel op te lopen, richting het eind van de naam. Hij gebruikt hiervoor niet de Public Suffix List.
3. Heeft hij je hoofdrecord, dan controleert hij of het verzendende subdomein in DNS bestaat.

Daarna kiest hij de regel:

- Bestaat het subdomein, dan past hij `sp` toe. Is er geen `sp`, dan past hij `p` toe.
- Bestaat het subdomein niet (DNS geeft NXDOMAIN terug, wat "naam bestaat niet" betekent), dan past hij `np` toe. Is er geen `np`, dan gebruikt hij `sp`. Is er ook geen `sp`, dan gebruikt hij `p`.

### Een voorbeeld

Stel dat dit record op `_dmarc.example.com` staat:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Het stelt drie verschillende regels in:

- **E-mail van `example.com` zelf** gebruikt `p=reject`. Faalt die voor DMARC, dan wordt ontvangers gevraagd hem te blokkeren.
- **E-mail van `news.example.com`**, een subdomein dat in DNS bestaat, gebruikt `sp=quarantine`. Stel dat een nieuwsbrief faalt omdat een leverancier iets verkeerd heeft ingesteld. Die gaat dan naar spam in plaats van te bouncen.
- **E-mail van een verzonnen naam als `invoices-2026.example.com`**, die niet in DNS bestaat, gebruikt `np=reject`. Een subdomein dat iemand gewoon heeft verzonnen, krijgt de strenge regel, ook al krijgen je echte subdomeinen quarantine.

## Wat is een DMARC-rapport?

DMARC kent twee soorten rapporten:

- **Geaggregeerde rapporten**, ingesteld met `rua`. Dit zijn dagelijkse samenvattingen.
- **Foutrapporten**, ingesteld met `ruf`. Die beschrijven losse mislukte e-mails.

### Geaggregeerde rapporten (rua)

Een geaggregeerd rapport is een samenvatting van één mailboxprovider, zoals Gmail. Het noemt alle e-mail die deze provider ontving en die zei van jouw domein te komen. Het is een XML-bestand, een gestructureerd tekstbestand dat bedoeld is om door software te worden gelezen. Providers sturen het als bijlage bij een e-mail, als gewoon `.xml`-bestand of als gecomprimeerd bestand zoals `.xml.gz`.

Elk rapport beslaat meestal één UTC-dag. De standaard zegt dat ontvangers minstens elke 24 uur geaggregeerde rapporten moeten sturen. Ze zijn niet verplicht om er een te sturen.

Hier is een ingekort voorbeeld van een rapport:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Dit staat erin, blok voor blok:

- **`<report_metadata>`**: het rapport kwam van `mail.receiver.example`. Het beslaat één volledige UTC-dag.
- **`<policy_published>`**: het beleid dat de ontvanger zag voor `example.com`. Hier is dat `p=none` en `sp=none`.
- **`<row>`**: er kwamen 412 e-mails binnen vanaf het IP-adres `192.0.2.10`.
- **SPF**: onder `<auth_results>` slaagde SPF, maar voor het domein `bounces.esp-mail.example`. Dat domein is niet je From-domein, `example.com`. Onder `<policy_evaluated>` toont SPF daarom `fail`, omdat het niet overeenkwam.
- **DKIM**: onder `<auth_results>` slaagde DKIM voor `example.com`. Dat komt overeen met het From-domein in `<identifiers>`. DKIM slaagde dus en kwam overeen, en deze 412 e-mails slaagden voor DMARC.

Het belangrijkste punt is eenvoudig. `<auth_results>` toont de ruwe controles van SPF en DKIM. `<policy_evaluated>` toont of elke controle ook overeenkwam met je From-domein. DMARC gebruikt dat tweede.

### Foutrapporten (ruf)

Foutrapporten, vaak forensische rapporten genoemd, beschrijven elk één mislukte e-mail. Ze kunnen de headers van de e-mail en gegevens over de ontvanger bevatten. Vanwege dit privacyrisico halen veel ontvangers de meeste details weg, of sturen ze helemaal geen foutrapporten. De tag `fo` stelt opties in voor deze rapporten. Die doet alleen iets als je `ruf` gebruikt.

### Rapporten lezen

De standaard raadt aan geaggregeerde rapporten met software te lezen, niet met de hand. Mail je naar veel mailboxproviders, dan stuurt elke provider je elke dag een eigen rapport.

## Waarom krijg ik DMARC-e-mails?

Je krijgt deze dagelijkse e-mails omdat je adres in de tag `rua` van je DMARC-record staat. Elke mailboxprovider die e-mail uit jouw naam ontvangt, stuurt een dagelijkse samenvatting naar elk adres in die tag.

De onderwerpregel heeft een vaste vorm, vastgelegd in [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

De Submitter is de provider die de e-mail controleerde, zoals Google of Microsoft. Het XML-rapport zit als bijlage bij de e-mail, vaak gecomprimeerd.

Stuur deze rapporten niet naar een persoonlijke inbox. Laat `rua` in plaats daarvan wijzen naar een aparte mailbox of een dienst die rapporten verwerkt. Weet je niet meer dat je dit hebt ingesteld, controleer dan je DMARC-record. Een vorige beheerder, of de installatiegids van een e-mailplatform, kan het hebben toegevoegd.

### Rapporten naar een ander domein sturen

Stel dat je domein `example.com` is, en je wilt rapporten laten sturen naar een adres op `reports.example.net`. Het ontvangende domein moet ermee instemmen dat het ze accepteert. Dat doet het door een TXT-record in zijn DNS te publiceren. Zonder dat record negeren ontvangers het adres en sturen ze geen rapporten.

Het record komt op deze hostnaam:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Diensten voor rapporten publiceren vaak in plaats daarvan een wildcardrecord (`*._report._dmarc.reports.example.net`). Dat ene record dekt elk klantdomein, zodat je niets per klant hoeft in te stellen.

## Van p=none naar reject zonder mail te verliezen

Spring niet direct naar reject. Ga stap voor stap omhoog:

1. **Begin met meekijken.** Publiceer een DMARC-record op `_dmarc` met `p=none` en een werkend adres in `rua`. Je begint rapporten te krijgen, en er verandert niets aan je aflevering.
2. **Repareer je afzenders.** Lees de rapporten. Zoek elke echte dienst die e-mail voor je domein verstuurt en faalt voor de controles, en repareer de instellingen.
3. **Ga naar quarantine.** Stap over op `p=quarantine` zodra al je echte afzenders steeds slagen. Kijk in spammappen om zeker te weten dat er geen echte e-mail in terechtkomt.
4. **Ga naar reject.** Stap over op `p=reject`. Nep-e-mail uit jouw naam wordt nu geblokkeerd voordat hij iemand bereikt.

Dit kan even duren. De standaard zegt dat het vele maanden kan duren voordat elke afzender slaagt, afhankelijk van hoe vaak je verstuurt. Factuurtools, supportdesks en marketingplatforms worden makkelijk vergeten. Blijf je rapporten dus bekijken.

**Plaatsen je gebruikers berichten op mailinglijsten**, ga dan langzamer. De standaard raadt minstens een maand op `p=none` aan, en daarna even lang op quarantine. Vergelijk de resultaten voordat je naar reject gaat. Mailinglijsten veranderen vaak onderwerpregels, voegen voetteksten toe of versturen berichten opnieuw. Deze wijzigingen breken SPF en soms ook DKIM. Als je een aantal weken rapporten vergelijkt, zie je deze problemen voordat reject mail gaat blokkeren.

**Gebruik de testmodus voor de laatste stap.** Met `t=y` kun je `p=reject` publiceren terwijl ontvangers nog quarantine toepassen. Je ziet hoe ontvangers op reject reageren, maar e-mail die faalt gaat nog naar spam in plaats van te bouncen.

**Een opmerking over strikte SPF.** Eindigt je SPF-record op `-all`, dan weigeren sommige ontvangers e-mail die faalt al bij de SPF-controle, voordat DMARC wordt uitgevoerd. Die e-mails bereiken de DMARC-controle nooit. Ze verschijnen ook niet in je dagelijkse rapporten.

## Veelgemaakte fouten in een DMARC-record

### Twee DMARC-records

Dit gebeurt vaak als iemand een tweede TXT-record toevoegt in plaats van het eerste te bewerken. Ontvangers zien beide en gooien beide weg, zoals RFC 9989 voorschrijft. Je domein gedraagt zich dan alsof het helemaal geen DMARC-record heeft.

**Oplossing:** controleer je DNS en voeg alle tags samen in één TXT-record.

### Het record staat op het hoofddomein, niet op _dmarc

Vul je `example.com` in als hostnaam, dan wordt het record op je hoofddomein gemaakt en niet op `_dmarc.example.com`. Mailservers zoeken DMARC alleen op de naam `_dmarc`, dus ze vinden het nooit.

**Oplossing:** stel de hostnaam in op `_dmarc`.

### v=DMARC1 staat niet vooraan, of heeft de verkeerde hoofdletters

Typ je `v=dmarc1`, of begin je met `p=none; v=DMARC1`, dan is het record kapot. Ontvangers negeren het.

**Oplossing:** zet `v=DMARC1` helemaal vooraan in het record, gevolgd door een puntkomma.

### Rapportadressen zonder mailto:

Schrijf je `rua=dmarc@example.com` in plaats van `rua=mailto:dmarc@example.com`, dan klopt de vorm van het adres niet. Ontvangers kunnen een kaal adres niet gebruiken, dus er komen geen rapporten binnen.

**Oplossing:** begin elk adres in `rua` en `ruf` met `mailto:`.

### Rapporten naar een ander domein zonder toestemming van dat domein

Stuur je rapporten naar het domein van een leverancier, en heeft dat domein het toestemmingsrecord niet gepubliceerd, dan krijg je geen rapporten.

**Oplossing:** zorg dat elk extern rapportadres een bijbehorend `_report._dmarc`-record heeft, zoals hierboven uitgelegd.

### Reject met alleen SPF

Doorsturen verandert het IP-adres dat de e-mail verstuurt, dus doorgestuurde e-mail faalt voor SPF. Zonder DKIM faalt echte doorgestuurde e-mail voor DMARC en bouncet hij onder een reject-beleid.

**Oplossing:** stel DKIM-ondertekening in voor elke dienst die je e-mail verstuurt, voordat je verder gaat dan `p=none`.

### Geschrapte tags uit oude gidsen

Veel oudere gidsen voegden een percentagetag toe, met waarden als 100, of 20 voor een gedeeltelijke invoering. Een achtergebleven `pct=100` kan geen kwaad, maar invoering per percentage hoort niet meer bij de standaard.

**Oplossing:** verwijder oude percentagetags. Gebruik `t=y` als je een milder beleid nodig hebt terwijl je wijzigingen doorvoert.

## Veelgestelde vragen

**Heb ik echt een DMARC-record nodig?**
Ja, als je e-mail verstuurt naar persoonlijke accounts van Gmail of Outlook. Google en Microsoft eisen allebei dat afzenders van 5.000 of meer e-mails per dag een DMARC-record publiceren, met een From-domein dat overeenkomt. Kleinere afzenders horen er ook een te hebben. Een record met `p=none` en `rua` kost niets, en de rapporten laten zien wie e-mail uit jouw naam verstuurt.

**Hoe controleer ik mijn DMARC-record?**
Voer `dig TXT _dmarc.yourdomain.com +short` uit in je terminal, of `nslookup -type=TXT _dmarc.yourdomain.com` op Windows. Het resultaat hoort je record te zijn, beginnend met `v=DMARC1`. Je kunt ook een test-e-mail naar een Gmail-account sturen, hem openen en "Origineel weergeven" kiezen. Daar zie je of DMARC slaagde.

**Wat betekent DMARC fail?**
Het betekent dat de e-mail voor beide controles faalde. SPF noch DKIM slaagde voor een domein dat overeenkomt met het zichtbare From-domein. Ontvangers volgen dan je beleid. Sommige sturen een duidelijke weigering terug, zoals `550 5.7.1 Email rejected per DMARC policy for example.com`. Je kunt de oorzaak vinden door [de bouncemelding te lezen](/blog/550-5-7-1-error). Gmail gebruikt de foutcode `4.7.31` als het DMARC-record ontbreekt, en `4.7.32` als het From-domein niet overeenkomt.

**Mag ik meer dan één DMARC-record hebben?**
Nee. Een domein mag maar één DMARC-record publiceren. RFC 9989 zegt dat een ontvangende server die er meer dan één vindt, ze allemaal moet weggooien. Je domein heeft dan geen DMARC-beleid. Bewerk je bestaande record in plaats van een tweede toe te voegen.

**Houdt DMARC domeinen tegen die op het mijne lijken?**
Nee. DMARC beschermt alleen het exacte domein in je DNS. Het kan niet voorkomen dat iemand een domein registreert dat er vergelijkbaar uitziet, bijvoorbeeld met twee letters omgewisseld of met een andere extensie zoals .net. Het kan ook geen valse weergavenaam tegenhouden. Voor domeinen die op het jouwe lijken, heb je andere maatregelen nodig, zoals letten op nieuwe domeinregistraties die je naam kopiëren.

Een DMARC-record bewijst dat je e-mail echt van jou komt. Het helpt niet als je verstuurt naar adressen die niet meer bestaan. Haal je lijst voor je volgende verzending door [Giggal.ai](/email-list-cleaning) (in het Engels) om ongeldige adressen te verwijderen en je bouncepercentage laag te houden.
