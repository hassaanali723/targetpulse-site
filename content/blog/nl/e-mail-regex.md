---
title: "E-mail Regex: Geteste Patronen voor JavaScript, Python en HTML (en Waar Regex Stopt)"
seoTitle: "E-mail Regex: Geteste Patronen voor JavaScript, Python & HTML"
description: "Geteste regex patronen voor e-mailvalidatie in JavaScript, Python en HTML5 formulieren. Verschil tussen standaard en RFC 5322 en waarom regex alleen niet volstaat."
slug: e-mail-regex
date: 2026-10-27
updated: 2026-10-27
keyword: e-mail regex
image: /blog/covers/nl/e-mail-regex.webp
imageAlt: E-mail regex syntax patronen en verificatielagen voor ontwikkelaars
cta: Controleer je e-maillijst met Giggal.ai
---

Het valideren van een e-mailadres met een reguliere expressie lijkt eenvoudig totdat je in productie echte adressen tegenkomt. Een adres als `daan+nieuwsbrief@sub.domein.nl` is volkomen geldig, terwijl `gebruiker@localhost` of `test..123@domein.nl` direct voor fouten zorgen.

Als je de officiële standaarden (RFC 5321 en RFC 5322) leest, zie je het probleem: een reguliere expressie die werkelijk elk theoretisch toegestaan geval dekt, telt meer dan 6.500 tekens. De standaard staat opmerkingen tussen haakjes toe, teksten tussen aanhalingstekens met spaties en IP-adressen tussen vierkante haken. In een moderne webapplicatie is dat officiële monster onbruikbaar. Het vertraagt de verwerking, is onleesbaar en keurt antieke formaten goed die geen enkele hedendaagse mailprovider accepteert.

In de praktijk zoek je een pragmatisch patroon: een regex die duidelijke typfouten tegenhoudt zonder echte gebruikers te blokkeren.

| Patroontype | Lokaal deel (voor de @) | Subdomeinen en TLD | Beste toepassing |
| --- | --- | --- | --- |
| **Standaard Productie** | Letters, cijfers, `._%+*-` | Meerdere subdomeinen, TLD van 2+ tekens | Aanmeldformulieren, webapplicaties |
| **HTML5 Ingebouwd** | RFC-subset (ASCII) | Punycode / Alfanumeriek | Snelle controle in de browser |
| **Minimalistisch** | Alles behalve spaties en `@` | Minstens één punt na de `@` | Soepele invoercontrole, snelle scripts |

---

## Het aanbevolen regex patroon voor productie

Voor de meeste webapplicaties raden we een patroon aan dat gangbare regels handhaaft en moderne domeinextensies toestaat:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Hoe het patroon deel voor deel werkt

Als we het patroon ontleden, wordt duidelijk hoe het veelvoorkomende invoerfouten voorkomt:

1. `^`: Bepaalt het begin van de regel en voorkomt gedeeltelijke overeenkomsten.
2. `[a-zA-Z0-9._%+-]+`: Accepteert één of meer toegestane tekens in de gebruikersnaam (het lokale deel): kleine letters, hoofdletters, cijfers, punten, underscores, percentages, plustekens en koppeltekens.
3. `@`: Vereist exact één apenstaartje.
4. `[a-zA-Z0-9.-]+`: Controleert de domeinnaam en staat letters, cijfers, koppeltekens en punten toe voor subdomeinen (bijvoorbeeld `mail.marketing.voorbeeld`).
5. `\.`: Matcht de punt die het domein scheidt van de extensie.
6. `[a-zA-Z]{2,}`: Vereist minimaal twee letters voor het topleveldomein (TLD). Dit ondersteunt `.nl`, `.com` en nieuwere extensies zoals `.technology` of `.amsterdam`, terwijl afgebroken invoer zoals `naam@domein.n` wordt geweigerd.
7. `$`: Bepaalt het einde van de tekstregel.

---

## Alternatieve patronen voor specifieke situaties

Afhankelijk van waar de controle plaatsvindt, kun je kiezen voor een strenger of juist soepeler patroon.

### 1. De W3C HTML5-standaard regex

Het World Wide Web Consortium (W3C) adviseert voor `<input type="email">` de volgende reguliere expressie:

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

Dit patroon volgt de HTML5-specificatie. Het staat speciale tekens toe zoals `!` en `~` in het lokale deel en zorgt ervoor dat domeinlabels niet langer zijn dan 63 tekens.

### 2. De minimalistische regex

Als je in de browser alleen wilt nagaan of de bezoeker niet per ongeluk een leeg veld of willekeurige tekst instuurt voordat je de controle aan een backend-validatiedienst overlaat:

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

Dit patroon controleert drie zaken: geen spaties voor de `@`, geen spaties na de `@` en minimaal één punt in het domein. Het leidt niet tot onterechte afwijzingen bij zeldzame internationale adressen.

---

## Implementatie in JavaScript, Python en HTML

Hieronder zie je hoe je deze validatie toepast in de meest gebruikte programmeeromgevingen.

### 1. E-mailvalidatie in JavaScript (Browser en Node.js)

In JavaScript is het verstandig om altijd overbodige spaties weg te halen en de lengte van de invoer te controleren:

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Verwijder spaties aan begin en einde
  const cleanEmail = email.trim();
  
  // RFC-limiet controleren (maximaal 254 tekens)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Testvoorbeelden
console.log(isValidEmail("sophie.bakker+werk@bedrijf.nl")); // true
console.log(isValidEmail("dubbele..punt@domein.nl"));        // true (syntaxcontrole)
console.log(isValidEmail("adres-zonder-apenstaartje.nl"));   // false
console.log(isValidEmail("gebruiker@domein"));               // false
```

### 2. E-mail regex in Python

In Python compileer je het patroon bij voorkeur eenmalig met `re.compile` en controleer je de invoer met `re.fullmatch`:

```python
import re

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

def validate_email_address(email: str) -> bool:
    if not isinstance(email, str):
        return False
    
    clean_email = email.strip()
    if len(clean_email) > 254:
        return False
        
    return bool(EMAIL_PATTERN.fullmatch(clean_email))

# Testvoorbeelden
print(validate_email_address("dev@onderneming.nl"))        # True
print(validate_email_address("adres met spatie@web.nl"))   # False
print(validate_email_address("gebruiker@.domein.nl"))      # False
```

### 3. Ingebouwde HTML5-formuliervalidatie (zonder JavaScript)

Moderne browsers controleren de invoer automatisch met het attribuut `type="email"`. In combinatie met het `pattern`-attribuut dwing je af dat er ook een geldige domeinextensie wordt opgegeven:

```html
<form action="/aanmelden" method="POST">
  <label for="user-email">Zakelijk e-mailadres</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="naam@bedrijf.nl"
  />
  <button type="submit">Aanmelden</button>
</form>
```

Als de invoer niet overeenkomt, stopt de browser de verzending en toont een melding in de taal van de gebruiker.

---

## Randgevallen waar veel regex patronen op stuklopen

Voordat je een patroon vastlegt, controleer je of je applicatie met deze vier situaties moet kunnen omgaan:

### 1. Adressen met plusteken (Subaddressing)
Diensten zoals Gmail, Outlook en Fastmail laten gebruikers een plusteken met een extra label toevoegen (zoals `daan+nieuws@gmail.com`). Te strenge regex patronen die het plusteken `+` overslaan, wijzen deze legitieme adressen af, wat leidt tot afgebroken registraties.

### 2. Lange topleveldomeinen (gTLDs)
Oudere handleidingen adviseerden vaak patronen die eindigden op `\.[a-zA-Z]{2,4}$`, uitgaande van extensies zoals `.nl`, `.com` of `.org`. Tegenwoordig zijn er honderden langere domeinextensies zoals `.amsterdam`, `.technology` of `.international`. Gebruik daarom altijd `[a-zA-Z]{2,}` zonder willekeurige bovengrens.

### 3. Geïnternationaliseerde domeinnamen (IDN)
In verschillende Europese landen bevatten domeinnamen soms speciale tekens of accenten. Reguliere expressies die alleen op ASCII letten, keuren deze adressen af. Als jouw systeem deze domeinen moet accepteren, zet je het domein eerst om naar ASCII via Punycode (`xn--...`) voordat je de syntaxis valideert.

### 4. Opeenvolgende punten
Volgens RFC 5322 zijn opeenvolgende punten tussen aanhalingstekens formeel toegestaan (`"jan..smit"@domein.nl`), maar mailservers weigeren dubbele punten in gewone adressen (`jan..smit@domein.nl`) vrijwel altijd. Wie opeenvolgende punten in het gebruikersdeel wil uitsluiten, kan een negatieve lookahead toevoegen: `(?!.*\.\.)`.

---

## Waar regex stopt: de blinde vlek van afleverbaarheid

Een reguliere expressie controleert slechts één onderdeel: **de syntactische opbouw**. Het geeft antwoord op de vraag: *“Lijkt deze tekstreeks op een e-mailadres?”*

Het kan echter geen antwoord geven op de vraag waar het werkelijk om draait: *“Komt een e-mail naar dit adres ook daadwerkelijk aan in een werkende inbox?”*

### Architectuuranalyse: waarom regex alleen een postbus niet kan controleren

In softwareontwikkeling is het een veelvoorkomende misvatting om e-mailvalidatie uitsluitend als een patroonherkenningsprobleem te zien. In de onderstaande video legt softwarearchitect Derek Comartin (Code Opinion) uit waarom het parsen van RFC-conforme e-mailadressen met reguliere expressies leidt tot kwetsbare code, en waarom syntaxcontrole wezenlijk verschilt van het controleren of een postbus daadwerkelijk bestaat:

```youtube
M6itpAfbvas
Bekijk de video: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas) door Derek Comartin (Code Opinion)
```

De belangrijkste inzichten uit deze toelichting:
- **De RFC-valkuil**: Wie elke theoretische RFC-uitzondering probeert af te vangen, eindigt met een onleesbaar monster van duizenden tekens dat alsnog spaak loopt op hedendaagse adressen.
- **Vorm versus werkelijk bestaan**: Een adres als `onbestaand.404@gmail.com` doorstaat elke syntactische regex-test glansrijk, maar bounced onmiddellijk omdat er bij de mailserver geen account aan gekoppeld is.
- **De aanpak in twee stappen**: Productieapplicaties doen er verstandig aan om in de browser een lichtgewicht patroon voor duidelijke typefouten te hanteren en de echte postbuscontrole uit te voeren voordat het adres in de database wordt opgeslagen.

Hier zijn vijf veelvoorkomende situaties waarin een adres dat aan alle regex-regels voldoet alsnog direct faalt:

```
[ Invoer gebruiker: onbestaand.adres.404@gmail.com ]
                        │
                        ▼
 1. Regex Syntaxcontrole ───────► GESLAAGD (Geldige tekens, bevat @ en TLD)
                        │
                        ▼
 2. DNS MX-recordcontrole ──────► GESLAAGD (gmail.com heeft echte mailservers)
                        │
                        ▼
 3. SMTP Mailboxcontrole ───────► GEFAALD (Google antwoordt: 550 5.1.1 User Unknown)
                        │
                        ▼
             [ RESULTAAT: HARD BOUNCE ]
```

### 1. Niet-bestaande domeinen
Het adres `contact@dit-domein-bestaat-echt-niet-882.nl` voldoet aan alle regels van een reguliere expressie. Het domein is echter nooit geregistreerd en bezit geen MX-records. Een e-mail sturen levert meteen een bounce op.

### 2. Verwijderde of inactieve postbussen
Het adres `lisa.visser@grootbedrijf.nl` is qua syntaxis perfect. Heeft Lisa het bedrijf enkele maanden geleden verlaten, dan is haar postbus verwijderd. Bij de SMTP-handshake meldt de ontvangende server `550 5.1.1 Recipient rejected: User unknown`. Dit leidt tot een hard bounce die je verzendreputatie schaadt.

### 3. Tijdelijke en wegwerp-adressen (Disposable Inboxes)
Diensten zoals 10MinuteMail of GuerrillaMail leveren adressen die na een kwartier verlopen. De regex keurt het adres direct goed. Stuur je later facturen of notificaties naar dat adres, dan komen die nooit meer aan.

### 4. Catch-all mailservers
Veel bedrijven stellen hun mailserver zo in dat alle inkomende berichten worden aangenomen, of het specifieke postvak nu bestaat of niet. Een regex patroon kan niet achterhalen of een adres daadwerkelijk aan een actieve medewerker toebehoort of dat de server simpelweg alles accepteert.

### 5. Spam traps (Spamvallen)
Spam traps zien eruit als doodgewone adressen. Ze slagen voor elke syntaxtest en reageren netjes op SMTP-verbindingen. Wie berichten naar deze adressen stuurt, riskeert dat zijn verzend-IP op zwarte lijsten zoals Spamhaus belandt.

---

## De validatiestrategie in twee lagen

Om aanmeldingen vlot te laten verlopen en gelijktijdig ongeldige data uit je database te weren, deel je de controle op in twee stappen:

```
┌────────────────────────────────────────────────────────┐
│                   LAAG 1: FRONTEND                     │
│  Snelle syntaxvalidatie (HTML5 + Lichte Regex)         │
│  - Vangt typefouten direct op tijdens het invoeren     │
│  - Voorkomt ontbrekende @-tekens en afgebroken TLD's   │
│  - Directe terugkoppeling naar de gebruiker            │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   LAAG 2: BACKEND                      │
│  Afleverbaarheidscontrole (DNS + SMTP-verificatie)     │
│  - Controleert MX-records van het domein               │
│  - Simuleert SMTP-verbinding zonder mail te verzenden  │
│  - Herkent wegwerp-domeinen en catch-all servers       │
└────────────────────────────────────────────────────────┘
```

1. **Aan de clientzijde (Directe terugkoppeling)**: Gebruik de standaard regex of het HTML5-veld `<input type="email">`. Daarmee voorkom je simpele vergissingen, zoals een komma in plaats van een punt (`naam@gmail,com`).
2. **Aan de serverzijde (Echte afleverbaarheid)**: Voordat je het e-mailadres opslaat in je database, controleer je of de mailbox echt bestaat. Je kunt individuele adressen testen met onze [gratis e-mail checker](/email-checker), tijdelijke adressen filteren met de [wegwerp e-mail controle](/disposable-email-checker) of de controle automatiseren via onze [e-mail verificatie API](/public/docs).

Het controleren van de opmaak met een reguliere expressie is een onmisbare eerste stap. Door dit te combineren met een diepgaande afleverbaarheidscontrole bescherm je je verzendreputatie en houd je het bouncepercentage ruim onder de norm van 2 procent.
