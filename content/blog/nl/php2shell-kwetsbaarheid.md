---
title: "PHP2Shell (CVE-2026-109618 en CVE-2026-109619): wat de kwetsbaarheid is en hoe je PHP patcht"
seoTitle: "PHP2Shell-kwetsbaarheid: zo patch je PHP nu"
description: "PHP2Shell bestaat uit twee kritieke kwetsbaarheden in PHP waarmee aanvallers code op webservers uitvoeren. Welke PHP-versies veilig zijn en hoe je patcht."
slug: php2shell-kwetsbaarheid
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell kwetsbaarheid
image: /blog/covers/nl/php2shell-kwetsbaarheid.webp
imageAlt: "PHP2Shell: CVE-2026-109618 en CVE-2026-109619, beoordeeld met 9,2 op 10, opgelost in PHP 8.5.12, 8.4.27, 8.3.36 en 8.2.35"
cta: Controleer of een e-mailadres echt bestaat
---

PHP2Shell is de naam voor twee kritieke kwetsbaarheden in PHP zelf: CVE-2026-109618 en CVE-2026-109619. Daarmee kan een aanvaller zijn eigen code uitvoeren op een webserver waarop PHP draait. De aanvaller heeft geen wachtwoord of account nodig. PHP heeft beide kwetsbaarheden op 21 oktober 2026 verholpen, en aanvallers misbruiken ze al.

Lees je maar één regel, lees dan deze. Werk PHP bij naar **8.5.12, 8.4.27, 8.3.36 of 8.2.35** (of nieuwer) en **herstart daarna PHP**. Een nieuw pakket doet niets totdat de PHP-processen opnieuw zijn gestart.

![Wat je moet doen tegen PHP2Shell, in 4 stappen: vind elke PHP-installatie, werk PHP bij naar een versie met de fix, herstart PHP en controleer daarna op een inbraak](/blog/fig-nl-php2shell-what-to-do.webp)

## Wat PHP2Shell is, in gewone taal

PHP is de programmeertaal achter een groot deel van alle websites. WordPress, Laravel, Drupal, Magento en phpBB draaien er allemaal op. De meeste van deze sites draaien op een server waar PHP elk paginaverzoek afhandelt.

PHP2Shell is geen fout in WordPress of in je eigen code. Het is een fout in PHP, de basis eronder. Daarom is elke PHP-site op een ongepatchte server kwetsbaar, ook als de eigen code van de site foutloos is.

PHP heeft beide kwetsbaarheden een score van 9,2 op 10 gegeven (CVSS v4.0). Dat valt in de categorie "kritiek". De naam PHP2Shell komt van het resultaat: een shell. Dat betekent dat de aanvaller opdrachten op je server kan intypen.

## Hoe PHP2Shell werkt, stap voor stap

Je hebt eerst vier feiten nodig over hoe PHP een webpagina afhandelt.

1. Een PHP-server houdt een paar PHP-"workers" actief. Elke worker handelt één webverzoek af, dan het volgende, enzovoort.
2. Voor elk verzoek reserveert PHP geheugen voor de gegevens van dat verzoek. Daaronder vallen formuliervelden, cookies, geüploade bestanden en sessiegegevens.
3. Als het verzoek klaar is, ruimt PHP dat geheugen op. Het volgende verzoek hoort te beginnen zonder restanten.
4. Elk verzoek heeft een geheugenlimiet, ingesteld met `memory_limit` in `php.ini`. Gaat een verzoek daarboven, dan stopt PHP het verzoek.

Beide PHP2Shell-kwetsbaarheden zijn fouten in stap 2 en 3. PHP haalt door elkaar welk geheugen geldig is.

### Kwetsbaarheid 1 (CVE-2026-109618): PHP heeft halverwege geen geheugen meer

1. De aanvaller stuurt een verzoek dat zo is gemaakt dat het veel geheugen gebruikt.
2. PHP bereikt de geheugenlimiet terwijl het de gegevens van het verzoek nog invult. Een deel van die gegevens is pas half geschreven.
3. PHP stopt het verzoek en ruimt op.
4. Bij het opruimen behandelt PHP de half geschreven gegevens als compleet. Zo werkt PHP met geheugen dat onzin bevat, of gegevens die de aanvaller heeft gekozen.

De eigen tijdelijke oplossing van PHP voor deze kwetsbaarheid is de geheugenlimiet weghalen en uploads klein houden. Daaraan zie je dat de aanval afhangt van het bereiken van de limiet met een groot verzoek.

### Kwetsbaarheid 2 (CVE-2026-109619): restanten van een eerder verzoek

1. Een verzoek is klaar, en PHP geeft het geheugen vrij dat het gebruikte.
2. Per vergissing houdt PHP een notitie bij van waar een deel van dat vrijgegeven geheugen zat.
3. Dezelfde worker pakt het volgende verzoek op. Dat verzoek kan van de aanvaller komen.
4. Voordat PHP de notitie wist, volgt het nieuwe verzoek die notitie. Het leest of schrijft geheugen waar nu iets anders in staat.

Programmeurs noemen dit een "use after free"-fout. PHP noemt één gevolg als bevestigd: de aanvaller kan geheugen lezen dat hij niet mag zien. De tijdelijke oplossing van PHP zet de uploadvoortgang van sessies uit (session upload progress). Die functie meldt hoe ver een bestandsupload is. Ze staat standaard aan.

### Waarom een geheugenfout een aanvaller code laat uitvoeren

Het geheugen van een programma bevat twee soorten dingen. Het ene is data, zoals tekst en getallen. Het andere is de plek van de volgende instructies die het programma uitvoert.

Als een aanvaller kan kiezen wat PHP schrijft in geheugen dat het niet hoort te gebruiken, kan hij die plekken veranderen. PHP voert dan de instructies van de aanvaller uit in plaats van zijn eigen instructies. Dit heet geheugencorruptie (memory corruption). Zo worden beide kwetsbaarheden remote code execution (RCE): iemand op internet voert opdrachten uit op je server.

![Hoe PHP2Shell van één webverzoek controle over een server maakt: de aanvaller stuurt zonder login een speciaal gemaakt verzoek, PHP gaat verkeerd om met het geheugen van het verzoek, de gegevens van de aanvaller vervangen de eigen gegevens van PHP en PHP voert de opdrachten van de aanvaller uit](/blog/fig-nl-php2shell-how-it-works.webp)

Volgens PHP is het risico het grootst bij Apache met mod_php. Daar kan de aanval beginnen voordat er code van je site draait. Je site hoeft zelf geen fout te hebben.

### De twee kwetsbaarheden naast elkaar

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Naam bij PHP | RCE via OOM corruption | RCE via stale global state |
| Wat er misgaat | PHP heeft tijdens het opbouwen geen geheugen meer en vertrouwt daarna half opgebouwde gegevens | PHP hergebruikt geheugen dat over is van een eerder verzoek |
| Wat de aanvaller nodig heeft | Eén webverzoek, geen login | Verzoeken aan dezelfde PHP-worker, geen login |
| Bevestigde gevolgen | Remote code execution | Remote code execution, geheugen lezen |
| Ernst (CVSS v4.0) | 9,2 kritiek | 9,2 kritiek |

## Hoe de kwetsbaarheid is gevonden

De PHP Foundation noemde meerdere teams als vinders, waaronder Calif, OpenAI en Wiz. Calif en Wiz zeiden dat ze AI-modellen gebruikten bij hun onderzoek. PHP kondigde de fix op 20 oktober vooraf aan en bracht hem uit op 21 oktober.

Aanvallers waren sneller dan de fix. Amazon zag op 17 oktober een poging om de kwetsbaarheid te misbruiken. Dat was vier dagen voor de release.

## Wat een aanvaller met PHP2Shell kan doen

Zodra de aanvaller code uitvoert via PHP, handelt hij als het account waaronder PHP draait. Op veel Linux-servers is dat `www-data`. Dat account kan de bestanden van je website lezen en wijzigen.

| Wat de aanvaller kan doen | Wat het voor jou betekent |
|---|---|
| Opdrachten uitvoeren op de server | De bestanden van je site lezen, wijzigen of verwijderen. Neppagina's plaatsen. |
| Geheimen uit het geheugen lezen | Volgens Wiz kan gelekt geheugen wachtwoorden, tokens, API-sleutels en certificaten uit verzoeken van andere bezoekers prijsgeven. |
| Je configuratiebestanden lezen | Bestanden zoals `wp-config.php` en `.env` bevatten databasewachtwoorden. Daarmee kan de aanvaller klantgegevens kopiëren. |
| Een achterdeur plaatsen | Met een verborgen PHP-bestand komt hij ook na je patch weer binnen. Het NCSC vraagt je om hiernaar te zoeken. |
| Spam en phishing versturen vanaf je server | Je domein en IP komen op blacklists, en je echte e-mails komen niet meer aan. |
| De hele machine overnemen | Dream Research meldde dat aanvallers PHP2Shell combineerden met een fout in de Linux-kernel (CVE-2026-46300) en zo volledige controle kregen over 24 firewalls. Tenable heeft deze melding niet bevestigd. |

## Wie er getroffen is

De beveiligingsmelding van PHP noemt elke PHP-opstelling die webverzoeken afhandelt:

- PHP-FPM (de meest gebruikte opstelling met Nginx)
- Apache met mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

Het Britse National Cyber Security Centre (NCSC) gaat verder. Het zegt dat elke organisatie die PHP gebruikt ervan uit moet gaan dat ze kwetsbaar is, welke versie ze ook draait. Dat geldt ook voor PHP in producten die je koopt, zoals appliances en gehoste tools.

Op 26 oktober zei beveiligingsbedrijf Trail of Bits dat werkende exploits ongepatchte PHP 8.2 tot en met 8.5 treffen. Het liet ze zien op MediaWiki, Symfony, Laravel en phpBB.

## Wordt de kwetsbaarheid in echte aanvallen gebruikt?

Ja. Dit is geen theorie.

![Tijdlijn van PHP2Shell: eerste aanvalspoging gezien op 17 oktober, fix uitgebracht op 21 oktober, op 26 oktober toegevoegd aan de CISA KEV-lijst, deadline voor Amerikaanse federale instanties op 29 oktober](/blog/fig-nl-php2shell-timeline.webp)

- **17 oktober:** Het threat intelligence-team van Amazon zag een poging om de kwetsbaarheid te misbruiken. Dat was vier dagen voordat de fix uitkwam.
- **21 oktober:** PHP bracht de versies met de fix uit. Cloudflare zei dat het dezelfde dag al vroege aanvallen zag.
- **26 oktober:** CISA, de Amerikaanse overheidsdienst voor cyberverdediging, voegde beide kwetsbaarheden toe aan zijn catalogus Known Exploited Vulnerabilities (KEV). Die lijst bevat alleen kwetsbaarheden waarvoor echte aanvallen zijn aangetoond.
- **29 oktober:** De deadline die CISA aan Amerikaanse federale instanties gaf om te patchen.

## Welke PHP-versies veilig zijn

Zoek je PHP-branch op in de tabel. Is je versie lager dan de versie met de fix, dan ben je kwetsbaar.

| Je PHP-branch | Kwetsbaar onder | Versie met fix | Opmerkingen |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | 8.2 krijgt na 31 december 2026 geen fixes meer |
| 8.1, 8.0, 7.4 | alle versies | geen officiële release | PHP heeft kleine patches voor de broncode gepubliceerd. Je Linux-leverancier heeft mogelijk een fix. |
| 7.3 tot en met 5.4 | alle versies | geen | Geen ondersteuning meer. Upgrade. |

**Linux-distributies gebruiken andere versienummers.** Debian, Ubuntu en Red Hat voegen een fix vaak toe aan een oudere versie zonder het nummer te veranderen. Daardoor kan `php -v` een "oud" nummer tonen op een server die al veilig is. Kijk op deze systemen in de beveiligingsmelding van je leverancier over CVE-2026-109618, en niet alleen naar het nummer.

## Zo controleer je je PHP-versie

Kies de methode die bij je opstelling past.

| Waar je site draait | Zo zie je de PHP-versie |
|---|---|
| Je eigen server (SSH) | Voer `php -v` uit. Controleer voor de versie die de website gebruikt ook het pakket van PHP-FPM of Apache. |
| WordPress | Ga naar **Tools**, dan **Sitediagnose**, dan **Informatie**, dan **Server**. |
| cPanel-hosting | Open **MultiPHP Manager**. Daar staat de PHP-versie per domein. |
| Andere shared hosting | Kijk in het paneel van je hostingprovider, of vraag het aan support. |

De opdrachtregel en de website kunnen op dezelfde server verschillende PHP-versies gebruiken. Controleer de versie die de webpagina's levert.

## Zo patch je

De fix is de nieuwe PHP-versie installeren en PHP herstarten. PHP zegt het zelf zo: "Er zijn geen volledige maatregelen om het risico weg te nemen, updaten is de enige veilige keuze."

**Shared hosting.** Je hostingprovider patcht PHP voor je. Vraag support om te bevestigen dat de server een versie met de fix draait. Kun je in je paneel een PHP-versie kiezen, kies dan een branch die nog ondersteund wordt.

**Debian- of Ubuntu-server.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Red Hat-, AlmaLinux- of Rocky Linux-server.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Zet je image op een tag met de fix, bijvoorbeeld `php:8.4.27-fpm`. Bouw elke container opnieuw en rol hem opnieuw uit. Een oude container die nog draait, blijft kwetsbaar.

Controleer daarna opnieuw. Voer `php -v` uit of laad de pagina Sitediagnose in WordPress opnieuw. Bevestig de nieuwe versie, of bevestig het pakket met de fix van je leverancier.

## Als je vandaag niet kunt patchen

PHP noemt een paar instellingen die het risico verkleinen. PHP zegt duidelijk dat ze een server niet veilig maken. Gebruik ze alleen terwijl je de update voorbereidt.

| Instelling | Helpt tegen | Waar je het instelt |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, op een manier die apps niet kunnen overschrijven |
| Lage `post_max_size` | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` of de configuratie van de FPM-pool. Niet `ini_set()` of `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, alleen PHP 8.5 | `php.ini` |

Herstart elke PHP-worker nadat je dit hebt aangepast. PHP waarschuwt ook om `RLIMIT_AS` of `RLIMIT_DATA` niet als geheugengrens te gebruiken. Die kunnen de fout juist uitlokken.

Het NCSC geeft nog een optie. Kun je niet snel updaten of het risico niet snel verkleinen, haal het systeem dan offline tot dat wel kan.

## Controleer of je al gehackt bent

Aanvallers hadden een voorsprong. De eerste poging kwam vier dagen voor de fix. Een server die nu gepatcht is, kan dus al eerder gehackt zijn.

Het NCSC vraagt je om ongepatchte systemen te controleren op tekenen van een inbraak en op achterdeuren. Veelvoorkomende tekenen op een PHP-server:

- Nieuwe `.php`-bestanden die je niet zelf hebt gemaakt, vaak in upload- of cachemappen.
- Nieuwe beheerders in WordPress of in je app.
- Ongewone uitgaande verbindingen, of CPU-gebruik dat je niet kunt verklaren.
- Een plotselinge stijging van uitgaande e-mail vanaf je server.
- Bounces die melden dat je IP of domein op een blacklist staat.

De laatste twee tellen ook als je site er normaal uitziet. Een gehackte server wordt vaak gebruikt om spam of phishing vanaf je domein te versturen. Daardoor kan je domein op blacklists komen, en dan bereiken je echte e-mails de inbox niet meer. In onze uitleg over [hoe je controleert of je e-maildomein op een blacklist staat](/blog/how-to-check-if-email-domain-is-blacklisted) lees je hoe je een vermelding opzoekt en oplost.

Vind je tekenen van een inbraak, dan is patchen niet genoeg. De aanvaller heeft misschien een achterdeur achtergelaten. Zet een schone back-up terug of schakel een incident response-team in.

## Twee verwante problemen die je moet kennen

**CVE-2026-115560.** Op 23 oktober publiceerde PHP een aparte beveiligingsmelding over de uploadvoortgang van sessies. PHP acht misbruik daarvan onwaarschijnlijk. De instelling `session.upload_progress.enabled=0` uit de tabel hierboven dekt dit ook af.

**Een probleem met SimpleXML in de versies met de fix.** PHP 8.4.27 en 8.5.12 kunnen sommige apps die SimpleXML gebruiken laten crashen (php-src issue #24488). De oorzaak is een andere wijziging, niet de beveiligingsfix. Op 26 oktober was een oplossing samengevoegd maar nog niet uitgebracht. Test je app nadat je hebt geüpdatet. Blijf hierdoor niet op de kwetsbare versie.

## Bekijk: hoe het beveiligingsteam van PHP het aanpakte

```youtube
No3T8JQqhtM
Bekijk: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) door Laravel News
```

## Korte antwoorden

| Vraag | Antwoord |
|---|---|
| Wat is PHP2Shell? | Twee kritieke kwetsbaarheden in PHP, CVE-2026-109618 en CVE-2026-109619, waarmee aanvallers code op een server kunnen uitvoeren. |
| Is er een login nodig? | Nee. Een aanvaller op internet kan het zonder account gebruiken. |
| Wordt het gebruikt bij aanvallen? | Ja. CISA heeft beide kwetsbaarheden op 26 oktober 2026 toegevoegd aan zijn KEV-catalogus. |
| Welke versies bevatten de fix? | 8.5.12, 8.4.27, 8.3.36 en 8.2.35. |
| Is het genoeg om het pakket bij te werken? | Nee. Herstart ook PHP-FPM, Apache of je containers. |
| Lost een firewall het op? | Nee. Regels in een webfirewall kunnen sommige aanvallen blokkeren, maar alleen updaten lost de fout op. |

## Bronnen

- [PHP news archive 2026](https://www.php.net/archive/2026.php): release notes en de beveiligingsmelding
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): meldingen van misbruik van Amazon, Cloudflare en Trail of Bits
