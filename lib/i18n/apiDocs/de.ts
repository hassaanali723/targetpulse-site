import type { ApiDocsStrings } from './types'

// German API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register "Sie", as in lib/i18n/de.ts.

export const API_DOCS_DE: ApiDocsStrings = {
  breadcrumbName: 'API-Dokumentation',
  schema: {
    headline: 'API-Dokumentation von Giggal.ai',
    description:
      'REST-API für die Prüfung einzelner E-Mails, Massenprüfungen in Batches und die Tiefenprüfung von Catch-all-Adressen und Adressen hinter Sicherheits-Gateways (SEG). JSON-Endpunkte, Authentifizierung per API-Schlüssel, Abrechnung pro erfolgreicher Prüfung.',
  },
  contactPath: '/de/kontakt',

  overviewBanner:
    'Sie suchen einen Überblick? Lesen Sie die Seite zur [API für E-Mail-Verifizierung](/email-verification-api) oder zur [API für E-Mail-Validierung in Anmeldeformularen](/email-validation-api).',
  hero: {
    h1: 'Dokumentation der API für E-Mail-Verifizierung',
    lead: 'Prüfen Sie einzelne E-Mails, starten Sie Massenprüfungen in Batches und prüfen Sie Catch-all-Adressen und Adressen hinter Sicherheits-Gateways (SEG) im Detail. Alle Endpunkte nutzen JSON und werden per API-Schlüssel authentifiziert. Abgerechnet wird nur jede erfolgreiche Prüfung.',
  },

  sidebar: {
    searchPlaceholder: 'Suchen…',
    collapse: 'Einklappen',
    expand: 'Ausklappen',
  },

  intro: {
    h2: 'Einführung',
    body: 'Mit der API von Giggal.ai prüfen Sie einzelne E-Mail-Adressen und starten Batches mit bis zu 50.000 E-Mails pro Job. Catch-all-Adressen und Adressen hinter Sicherheits-Gateways (SEG) prüfen Sie im Detail. Das alles läuft über eine einfache JSON-REST-API. Jede erfolgreiche Prüfung kostet Credits aus Ihrem Konto.',
    baseUrlLabel: 'Basis-URL',
    apiKeyLabel: 'API-Schlüssel erstellen',
    apiKeyBody:
      'Erstellen Sie einen API-Schlüssel in Ihrem Giggal.ai-Dashboard. Öffnen Sie in der Seitenleiste den Tab Developer API und klicken Sie auf Create API Key. Jeder Schlüssel gehört zu Ihrem Konto, erfasst seine eigene Nutzung und lässt sich jederzeit widerrufen.',
    apiKeyLink: 'Tab Developer API öffnen',
    envelopeLabel: 'Antwortformat',
    envelopeBody: 'Jede Antwort folgt demselben JSON-Format:',
    quickStartLabel: 'Schnellstart: eine E-Mail mit cURL prüfen',
  },

  auth: {
    h2: 'Authentifizierung',
    body: 'Senden Sie Ihren API-Schlüssel bei jeder Anfrage in einem von zwei Headern. Beide funktionieren.',
    bearerLabel: 'Option 1: Bearer-Token',
    xApiKeyLabel: 'Option 2: Header X-API-Key',
    note: 'Fehlende, ungültige oder widerrufene Schlüssel liefern HTTP 401. Legen Sie API-Schlüssel nie im clientseitigen Code offen. Leiten Sie die Aufrufe stattdessen über Ihr Backend.',
    idempotencyLabel: 'Idempotenz (Massenprüfung und Catch-all)',
    idempotencyBody:
      'Senden Sie bei `POST /v1/verify-batch` und `POST /v1/catchall` einen Header `Idempotency-Key`. Eine Wiederholung mit demselben Schlüssel liefert die ursprüngliche Antwort. Es entsteht kein doppelter Job, und es werden keine Credits doppelt abgebucht.',
  },

  groups: {
    'single-verification': 'Einzelprüfung',
    'bulk-verification': 'Massenprüfung',
    'catchall-verification': 'Catch-all-Verifizierung',
    account: 'Konto',
  },
  groupCount: {
    one: '{n} Endpunkt in dieser Gruppe.',
    other: '{n} Endpunkte in dieser Gruppe.',
  },

  endpoint: {
    authorizations: 'Autorisierung',
    pathParams: 'Pfad- und Query-Parameter',
    requestBody: 'Request-Body',
    required: 'Pflichtfeld',
    responseSamples: 'Beispielantworten',
  },

  endpoints: {
    'verify-single': {
      title: 'Eine einzelne E-Mail prüfen',
      description:
        'Prüft eine E-Mail-Adresse synchron. Kostet 1 Credit. Ist die Domain Catch-all, läuft die Tiefenprüfung direkt mit, und die Antwort enthält catch_all_score und catch_all_verdict.',
      bodyParams: {
        email: 'Die E-Mail-Adresse, die geprüft werden soll.',
      },
    },
    'submit-batch': {
      title: 'Einen Job zur Massenprüfung senden',
      description:
        'Senden Sie bis zu 50.000 E-Mails pro Job. Die Verarbeitung läuft asynchron. Fragen Sie den Fortschritt über GET /v1/jobs/:jobId ab. Mit einem Header Idempotency-Key können Sie das Anlegen eines Jobs sicher wiederholen, ohne doppelte Kosten.',
      bodyParams: {
        emails:
          'Array der E-Mail-Adressen, die geprüft werden sollen. Maximal 50.000 pro Job. Doppelte und fehlerhafte Adressen entfernt der Server.',
        name: 'Optionaler, lesbarer Name für den Job. Er wird in Ihrem Dashboard angezeigt.',
      },
    },
    'get-job': {
      title: 'Status eines Massenjobs abrufen',
      description:
        'Fragen Sie diesen Endpunkt ab, um den Fortschritt zu prüfen. Statuswechsel: processing → completed (oder failed). Empfohlener Abstand zwischen Abfragen: 10 bis 15 Sekunden. Kleine Batches (unter 50 E-Mails) sind meist innerhalb von 30 Sekunden fertig.',
      params: {
        jobId: 'Die Job-ID, die POST /v1/verify-batch zurückgegeben hat.',
      },
    },
    'get-job-results': {
      title: 'Ergebnisse eines Massenjobs abrufen',
      description:
        'Sobald der Status "completed" ist, rufen Sie die Ergebnisse pro E-Mail ab. Die Ergebnisse sind seitenweise aufgeteilt. Übergeben Sie dazu die Query-Parameter page und limit. Die Ergebnisse werden 48 Stunden gespeichert (siehe resultsExpiresAt im Job).',
      params: {
        jobId: 'Die Job-ID.',
        page: 'Seitennummer, Standard ist 1.',
        limit: 'Ergebnisse pro Seite, Standard ist 25, maximal 500.',
      },
    },
    'start-catchall': {
      title: 'Eine Catch-all-Prüfung starten',
      description:
        'Startet die Catch-all-Tiefenprüfung für einen abgeschlossenen Massenjob. Nur Adressen, die im ursprünglichen Job als Catch-all markiert sind, werden erneut geprüft. Abgerechnet wird 1 Credit pro Adresse (siehe creditsRequired in der Antwort).',
      bodyParams: {
        jobId:
          'Die ID eines abgeschlossenen Massenjobs. Nur die Catch-all-Adressen aus diesem Job werden im Detail geprüft.',
        name: 'Optionaler, lesbarer Name für die Aufgabe.',
      },
    },
    'get-catchall': {
      title: 'Status einer Catch-all-Aufgabe abrufen',
      description:
        'Fragen Sie diesen Endpunkt ab, um den Fortschritt und die laufend aktualisierten verdictCounts zu sehen. Catch-all-Aufgaben sind je nach Menge meist nach wenigen Sekunden bis wenigen Minuten fertig.',
      params: {
        taskId: 'Die Task-ID, die POST /v1/catchall zurückgegeben hat.',
      },
    },
    'catchall-results': {
      title: 'Ergebnisse einer Catch-all-Aufgabe abrufen',
      description:
        'Ruft die Ergebnisse pro E-Mail seitenweise ab, mit der zugrunde liegenden Aufschlüsselung des Scores (Signale aus der Domain-Prüfung und Alter der Domain).',
      params: {
        taskId: 'Die Task-ID.',
        page: 'Seitennummer, Standard ist 1.',
        limit: 'Ergebnisse pro Seite, Standard ist 25, maximal 500.',
        verdict: 'Nach Ergebnis filtern: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Catch-all-Ergebnisse als CSV herunterladen',
      description:
        'Lädt alle Ergebnisse einer abgeschlossenen Catch-all-Aufgabe als CSV-Datei mit den Spalten Email, Score und Verdict herunter. Der Content-Type ist text/csv.',
      params: {
        taskId: 'Die Task-ID.',
        verdict: 'Nach Ergebnis filtern: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Aktuelles Credit-Guthaben abrufen',
      description:
        'Liefert Ihr Kontoguthaben mit verfügbaren Credits, reservierten Credits (für laufende Jobs zurückgehalten) und Gesamtwerten seit Kontoeröffnung. Prüfungen mit dem Ergebnis "unknown" werden automatisch erstattet und hier berücksichtigt.',
    },
  },

  errors: {
    h2: 'Fehler und Rate-Limits',
    statusHeader: 'Status',
    meaningHeader: 'Bedeutung',
    statusRows: [
      { status: '200 OK', meaning: 'Anfrage erfolgreich (synchrone Prüfung oder Abruf von Status oder Ergebnissen).' },
      { status: '202 Accepted', meaning: 'Asynchroner Job oder Aufgabe angelegt und in die Warteschlange gestellt.' },
      { status: '400 Bad Request', meaning: 'Fehlende oder ungültige Parameter (falsches E-Mail-Format, leeres Array emails, fehlende jobId).' },
      { status: '401 Unauthorized', meaning: 'Fehlender, ungültiger oder widerrufener API-Schlüssel.' },
      { status: '402 Payment Required', meaning: 'Nicht genug Credits für die angefragte Aktion.' },
      { status: '404 Not Found', meaning: 'Die Job- oder Task-ID existiert in Ihrem Konto nicht.' },
      { status: '409 Conflict', meaning: 'Der Job hat nicht den nötigen Status (zum Beispiel Abruf von Ergebnissen vor dem Abschluss).' },
      { status: '410 Gone', meaning: 'Die Ergebnisse des Jobs sind älter als die Speicherdauer von 48 Stunden.' },
      { status: '429 Too Many Requests', meaning: 'Rate-Limit überschritten. Warten Sie und versuchen Sie es erneut.' },
      { status: '500 / 502 / 503', meaning: 'Der Server oder der vorgelagerte Prüfdienst ist vorübergehend nicht erreichbar.' },
    ],
    rateLimitsH3: 'Rate-Limits',
    rateLimitsBody:
      'Jede Antwort enthält die Header `RateLimit-Limit`, `RateLimit-Remaining` und `RateLimit-Reset` (Schreibweise nach RFC). So können Sie Ihre Anfragen takten. `RateLimit-Reset` ist die Anzahl der Sekunden, bis das aktuelle Zeitfenster zurückgesetzt wird.',
    categoryHeader: 'Kategorie',
    limitHeader: 'Limit',
    rateLimitRows: [
      { category: 'Alle Endpunkte (Standard)', limit: '300 Anfragen / 15 Minuten' },
      { category: 'Anlegen von Batches (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 Anfragen / 15 Minuten' },
      { category: 'Abfrage von Jobs (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 Anfragen / 15 Minuten' },
      { category: 'Maximale E-Mails pro Massenjob', limit: '50.000' },
      { category: 'Speicherdauer der Job-Ergebnisse', limit: '48 Stunden' },
    ],
    tierNote:
      'Die Limits sind in drei Stufen aufgeteilt, weil Statusabfragen häufiger vorkommen als das Anlegen von Batches. Während ein Job läuft, fragen Sie vielleicht alle paar Sekunden ab. Das Limit von `600 / 15 min` (etwa 40 pro Minute) lässt Ihnen Spielraum, ohne das Backend zu überlasten.',
    higherLimitsTitle: 'Sie brauchen höhere Limits?',
    higherLimitsBody: 'Für geprüfte Integrationspartner heben wir die Limits regelmäßig an.',
    higherLimitsCta: 'Sprechen Sie uns an',
    h429: 'Format der Antwort 429',
    body429: 'Wenn Sie ein Rate-Limit erreichen, liefert die API HTTP 429 mit diesem Body:',
    backoff:
      'Warten Sie vor einem neuen Versuch so lange, wie der Header `RateLimit-Reset` angibt (Sekunden bis zum Zurücksetzen des Zeitfensters).',
  },

  cta: {
    h3: 'Bereit für die Integration?',
    body: 'Erstellen Sie Ihren API-Schlüssel in wenigen Sekunden. Kostenlose Test-Credits sind inklusive. So können Sie die Integration vollständig aufbauen, bevor Sie etwas bezahlen.',
    primary: 'API-Schlüssel erstellen',
    secondary: 'Mit unserem Team sprechen',
  },
}
