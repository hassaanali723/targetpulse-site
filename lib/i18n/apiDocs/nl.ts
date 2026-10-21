import type { ApiDocsStrings } from './types'

// Dutch API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register "je", as in lib/i18n/nl.ts. Numbers 50.000.

export const API_DOCS_NL: ApiDocsStrings = {
  breadcrumbName: 'API-documentatie',
  schema: {
    headline: 'API-documentatie van Giggal.ai',
    description:
      'REST API om een e-mailadres te controleren, bulkcontroles te starten en catch-all-adressen en adressen achter een SEG grondig te controleren. JSON-endpoints, authenticatie met een API-sleutel, kosten alleen per geslaagde controle.',
  },
  contactPath: '/nl/contact',

  overviewBanner:
    'Zoek je een algemeen overzicht? Lees de pagina over de [API voor e-mailverificatie](/email-verification-api) of over de [API voor e-mailvalidatie in aanmeldformulieren](/email-validation-api) (in het Engels).',
  hero: {
    h1: 'API-documentatie voor e-mailverificatie',
    lead: 'Controleer een e-mailadres, start bulkcontroles en controleer catch-all-adressen en adressen achter een SEG grondig. Alle endpoints gebruiken JSON en authenticatie met een API-sleutel. Je betaalt alleen voor geslaagde controles.',
  },

  sidebar: {
    searchPlaceholder: 'Zoeken…',
    collapse: 'Inklappen',
    expand: 'Uitklappen',
  },

  intro: {
    h2: 'Introductie',
    body: 'Met de API van Giggal.ai controleer je een e-mailadres, start je bulkcontroles tot 50.000 e-mailadressen per taak en controleer je catch-all-adressen en adressen achter een SEG grondig. Het is een eenvoudige REST API met JSON. Elke geslaagde controle gebruikt credits van je account.',
    baseUrlLabel: 'Basis-URL',
    apiKeyLabel: 'Een API-sleutel aanmaken',
    apiKeyBody:
      'Maak een API-sleutel aan in je Giggal.ai-dashboard: open het tabblad Developer API in de zijbalk en klik op Create API Key. Elke sleutel hoort bij je account en houdt zijn eigen gebruik bij. Je kunt een sleutel op elk moment intrekken.',
    apiKeyLink: 'Tabblad Developer API openen',
    envelopeLabel: 'Opbouw van het antwoord',
    envelopeBody: 'Elk antwoord heeft dezelfde JSON-structuur:',
    quickStartLabel: 'Snel starten: een adres controleren met cURL',
  },

  auth: {
    h2: 'Authenticatie',
    body: 'Stuur je API-sleutel mee met elk verzoek, in een van deze twee headers. Beide werken.',
    bearerLabel: 'Optie 1: Bearer-token',
    xApiKeyLabel: 'Optie 2: header X-API-Key',
    note: 'Een ontbrekende, ongeldige of ingetrokken sleutel geeft een HTTP 401-fout. Zet je API-sleutels nooit in code aan de clientkant. Stuur de aanroepen via je eigen backend.',
    idempotencyLabel: 'Idempotentie (bulk en catch-all)',
    idempotencyBody:
      'Stuur bij `POST /v1/verify-batch` en `POST /v1/catchall` een header `Idempotency-Key` mee. Een nieuwe poging met dezelfde sleutel geeft het oorspronkelijke antwoord terug. Er ontstaat geen dubbele taak en de credits worden niet twee keer afgeschreven.',
  },

  groups: {
    'single-verification': 'Losse controle',
    'bulk-verification': 'Bulkcontrole',
    'catchall-verification': 'Catch-all-controle',
    account: 'Account',
  },
  groupCount: {
    one: '{n} endpoint in deze groep.',
    other: '{n} endpoints in deze groep.',
  },

  endpoint: {
    authorizations: 'Autorisatie',
    pathParams: 'Pad- en queryparameters',
    requestBody: 'Body van het verzoek',
    required: 'Verplicht',
    responseSamples: 'Voorbeelden van antwoorden',
  },

  endpoints: {
    'verify-single': {
      title: 'Een e-mailadres controleren',
      description:
        'Controleert één e-mailadres synchroon. Kost 1 credit. Is het domein catch-all, dan gebeurt de grondige controle in hetzelfde verzoek en bevat het antwoord catch_all_score en catch_all_verdict.',
      bodyParams: {
        email: 'Het e-mailadres dat je wilt controleren.',
      },
    },
    'submit-batch': {
      title: 'Een bulkcontrole starten',
      description:
        'Stuur tot 50.000 e-mailadressen per taak. De verwerking is asynchroon: vraag GET /v1/jobs/:jobId op om de voortgang te volgen. Stuur een header Idempotency-Key mee om het aanmaken van een taak opnieuw te proberen zonder dubbele kosten.',
      bodyParams: {
        emails:
          'Lijst met e-mailadressen om te controleren. Maximaal 50.000 per taak. Dubbele en verkeerd opgebouwde adressen haalt de server eruit.',
        name: 'Optionele naam voor de taak, leesbaar voor mensen. Wordt getoond in je dashboard.',
      },
    },
    'get-job': {
      title: 'Status van een bulktaak opvragen',
      description:
        'Vraag dit endpoint op om de voortgang te volgen. De status gaat van processing naar completed (of failed). Aanbevolen interval: elke 10 tot 15 seconden. Kleine lijsten (minder dan 50 e-mailadressen) zijn meestal binnen 30 seconden klaar.',
      params: {
        jobId: 'De taak-ID die POST /v1/verify-batch teruggaf.',
      },
    },
    'get-job-results': {
      title: 'Resultaten van een bulktaak opvragen',
      description:
        'Als de status "completed" is, haal je de resultaten per e-mailadres op. De resultaten zijn verdeeld over pagina’s: stuur de queryparameters page en limit mee. Resultaten worden 48 uur bewaard (zie resultsExpiresAt bij de taak).',
      params: {
        jobId: 'De ID van de taak.',
        page: 'Paginanummer, standaard 1.',
        limit: 'Resultaten per pagina, standaard 25, maximaal 500.',
      },
    },
    'start-catchall': {
      title: 'Een catch-all-controle starten',
      description:
        'Start de grondige catch-all-controle voor een afgeronde bulktaak. Alleen de adressen die in de oorspronkelijke taak als catch-all zijn gemarkeerd, worden opnieuw gecontroleerd. Kost 1 credit per adres (zie creditsRequired in het antwoord).',
      bodyParams: {
        jobId:
          'De ID van een afgeronde bulktaak. Alleen de catch-all-adressen uit die taak worden grondig gecontroleerd.',
        name: 'Optionele naam voor de taak, leesbaar voor mensen.',
      },
    },
    'get-catchall': {
      title: 'Status van een catch-all-taak opvragen',
      description:
        'Vraag dit endpoint op om de voortgang en de bijgewerkte tellingen in verdictCounts te volgen. Een catch-all-taak duurt meestal een paar seconden tot een paar minuten, afhankelijk van het aantal adressen.',
      params: {
        taskId: 'De taak-ID die POST /v1/catchall teruggaf.',
      },
    },
    'catchall-results': {
      title: 'Resultaten van een catch-all-taak opvragen',
      description:
        'Haalt de resultaten per e-mailadres op, verdeeld over pagina’s, met de opbouw van de score (signalen van het domein en de leeftijd van het domein).',
      params: {
        taskId: 'De ID van de taak.',
        page: 'Paginanummer, standaard 1.',
        limit: 'Resultaten per pagina, standaard 25, maximaal 500.',
        verdict: 'Filteren op resultaat: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Catch-all-resultaten downloaden als CSV',
      description:
        'Downloadt alle resultaten van een afgeronde catch-all-taak als CSV-bestand met de kolommen Email, Score en Verdict. Het Content-Type is text/csv.',
      params: {
        taskId: 'De ID van de taak.',
        verdict: 'Filteren op resultaat: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Saldo van je credits opvragen',
      description:
        'Geeft het saldo van je account: beschikbare credits, gereserveerde credits (vastgezet voor lopende taken) en totalen sinds het openen van je account. Controles met het resultaat "unknown" worden automatisch terugbetaald en staan hier ook.',
    },
  },

  errors: {
    h2: 'Fouten en limieten',
    statusHeader: 'Status',
    meaningHeader: 'Betekenis',
    statusRows: [
      { status: '200 OK', meaning: 'Het verzoek is gelukt (synchrone controle, of het opvragen van een status of resultaten).' },
      { status: '202 Accepted', meaning: 'De asynchrone taak is aangemaakt en staat in de wachtrij.' },
      { status: '400 Bad Request', meaning: 'Parameters ontbreken of zijn ongeldig (verkeerd e-mailformaat, lege lijst emails, jobId ontbreekt).' },
      { status: '401 Unauthorized', meaning: 'API-sleutel ontbreekt, is ongeldig of is ingetrokken.' },
      { status: '402 Payment Required', meaning: 'Niet genoeg credits voor deze actie.' },
      { status: '404 Not Found', meaning: 'Deze taak-ID bestaat niet in je account.' },
      { status: '409 Conflict', meaning: 'De taak heeft niet de vereiste status (bijvoorbeeld resultaten opgevraagd voordat de taak klaar is).' },
      { status: '410 Gone', meaning: 'De resultaten van de taak zijn ouder dan de bewaartermijn van 48 uur.' },
      { status: '429 Too Many Requests', meaning: 'Limiet voor verzoeken overschreden. Wacht even en probeer het opnieuw.' },
      { status: '500 / 502 / 503', meaning: 'De server of de onderliggende verificatiedienst is tijdelijk niet beschikbaar.' },
    ],
    rateLimitsH3: 'Limieten voor verzoeken',
    rateLimitsBody:
      'Elk antwoord bevat de headers `RateLimit-Limit`, `RateLimit-Remaining` en `RateLimit-Reset` (schrijfwijze volgens de RFC), zodat je je verzoeken kunt spreiden. `RateLimit-Reset` geeft het aantal seconden tot het huidige venster opnieuw begint.',
    categoryHeader: 'Categorie',
    limitHeader: 'Limiet',
    rateLimitRows: [
      { category: 'Alle endpoints (standaard)', limit: '300 verzoeken / 15 minuten' },
      { category: 'Taken aanmaken (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 verzoeken / 15 minuten' },
      { category: 'Taken volgen (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 verzoeken / 15 minuten' },
      { category: 'Maximaal aantal e-mailadressen per bulktaak', limit: '50.000' },
      { category: 'Bewaartermijn van resultaten', limit: '48 uur' },
    ],
    tierNote:
      'Er zijn drie limieten, omdat je een taak vaker volgt dan dat je er een aanmaakt. Je kunt de API elke paar seconden opvragen terwijl een taak loopt. De limiet van `600 / 15 min` (ongeveer 40 per minuut) geeft je dus genoeg ruimte zonder de server te overbelasten.',
    higherLimitsTitle: 'Hogere limieten nodig?',
    higherLimitsBody: 'We verhogen de limieten regelmatig voor geverifieerde integratiepartners.',
    higherLimitsCta: 'Neem contact op',
    h429: 'Opbouw van het 429-antwoord',
    body429: 'Als je een limiet bereikt, geeft de API een HTTP 429-fout met deze body:',
    backoff:
      'Wacht voor een nieuwe poging het aantal seconden dat in de header `RateLimit-Reset` staat (de tijd tot het venster opnieuw begint).',
  },

  cta: {
    h3: 'Klaar om de API te koppelen?',
    body: 'Maak in een paar seconden je API-sleutel aan. Gratis proefcredits zitten erbij, zodat je alles van begin tot eind kunt testen voordat je betaalt.',
    primary: 'Je API-sleutel aanmaken',
    secondary: 'Praat met ons team',
  },
}
