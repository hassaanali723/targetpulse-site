import type { ApiDocsStrings } from './types'

// Italian API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register "tu", as in lib/i18n/it.ts.

export const API_DOCS_IT: ApiDocsStrings = {
  breadcrumbName: 'Documentazione API',
  schema: {
    headline: 'Documentazione API di Giggal.ai',
    description:
      "REST API per la verifica email singola, i batch in blocco e il controllo approfondito degli indirizzi catch-all e protetti da SEG. Endpoint JSON, autenticazione con chiave API, addebito per ogni verifica riuscita.",
  },
  contactPath: '/it/contatti',

  overviewBanner:
    "Cerchi una panoramica? Leggi la pagina sull'[API di verifica email](/email-verification-api) o sull'[API di validazione email per i moduli di iscrizione](/email-validation-api).",
  hero: {
    h1: 'Documentazione API di verifica email',
    lead: 'Verifica email singole, avvia batch in blocco e controlla a fondo gli indirizzi catch-all e protetti da SEG. Tutti gli endpoint usano JSON, si autenticano con una chiave API e ti addebitano solo le verifiche riuscite.',
  },

  sidebar: {
    searchPlaceholder: 'Cerca…',
    collapse: 'Comprimi',
    expand: 'Espandi',
  },

  intro: {
    h2: 'Introduzione',
    body: "L'API di Giggal.ai ti permette di verificare singoli indirizzi email, avviare batch fino a 50.000 email per job e controllare a fondo gli indirizzi catch-all e protetti da SEG, con una semplice REST API in JSON. Ogni verifica riuscita usa crediti del tuo account.",
    baseUrlLabel: 'URL di base',
    apiKeyLabel: 'Ottieni una chiave API',
    apiKeyBody:
      'Crea una chiave API dalla dashboard di Giggal.ai: apri la scheda Developer API nella barra laterale e clicca Create API Key. Ogni chiave è legata al tuo account, registra il proprio utilizzo e puoi revocarla in qualsiasi momento.',
    apiKeyLink: 'Apri la scheda Developer API',
    envelopeLabel: 'Struttura della risposta',
    envelopeBody: 'Ogni risposta segue la stessa struttura JSON:',
    quickStartLabel: 'Avvio rapido: verifica una email con cURL',
  },

  auth: {
    h2: 'Autenticazione',
    body: 'Invia la tua chiave API con ogni richiesta, in uno di questi due header. Funzionano entrambi.',
    bearerLabel: 'Opzione 1: token Bearer',
    xApiKeyLabel: 'Opzione 2: header X-API-Key',
    note: 'Una chiave mancante, non valida o revocata restituisce HTTP 401. Non mettere mai le chiavi API nel codice lato client. Fai passare le chiamate dal tuo backend.',
    idempotencyLabel: 'Idempotenza (verifica in blocco e catch-all)',
    idempotencyBody:
      "Per `POST /v1/verify-batch` e `POST /v1/catchall`, invia un header `Idempotency-Key`. I nuovi tentativi con la stessa chiave restituiscono la risposta originale, senza creare un job doppio e senza addebitare due volte i crediti.",
  },

  groups: {
    'single-verification': 'Verifica singola',
    'bulk-verification': 'Verifica in blocco',
    'catchall-verification': 'Verifica catch-all',
    account: 'Account',
  },
  groupCount: {
    one: '{n} endpoint in questo gruppo.',
    other: '{n} endpoint in questo gruppo.',
  },

  endpoint: {
    authorizations: 'Autorizzazioni',
    pathParams: 'Parametri di percorso e di query',
    requestBody: 'Corpo della richiesta',
    required: 'Obbligatorio',
    responseSamples: 'Esempi di risposta',
  },

  endpoints: {
    'verify-single': {
      title: 'Verifica una singola email',
      description:
        'Verifica un indirizzo email in modo sincrono. Costa 1 credito. Se il dominio è catch-all, la verifica approfondita parte subito e la risposta include catch_all_score e catch_all_verdict.',
      bodyParams: {
        email: "L'indirizzo email da verificare.",
      },
    },
    'submit-batch': {
      title: 'Invia un job di verifica in blocco',
      description:
        "Invia fino a 50.000 email per job. L'elaborazione è asincrona, quindi interroga GET /v1/jobs/:jobId per vedere l'avanzamento. Invia un header Idempotency-Key per ripetere in sicurezza la creazione del job senza addebiti doppi.",
      bodyParams: {
        emails:
          'Array di indirizzi email da verificare. Massimo 50.000 per job. I duplicati e gli indirizzi con formato errato vengono rimossi dal server.',
        name: 'Etichetta leggibile opzionale per il job. Compare nella tua dashboard.',
      },
    },
    'get-job': {
      title: 'Ottieni lo stato di un job in blocco',
      description:
        "Interroga questo endpoint per controllare l'avanzamento. Passaggi di stato: processing → completed (oppure failed). Intervallo consigliato tra le richieste: da 10 a 15 secondi. I batch piccoli (meno di 50 email) di solito finiscono entro 30 secondi.",
      params: {
        jobId: "L'ID del job restituito da POST /v1/verify-batch.",
      },
    },
    'get-job-results': {
      title: 'Ottieni i risultati di un job in blocco',
      description:
        'Quando lo stato è "completed", recupera i risultati per ogni email. I risultati sono paginati, quindi invia i parametri di query page e limit. I risultati restano disponibili per 48 ore (vedi resultsExpiresAt nel job).',
      params: {
        jobId: "L'ID del job.",
        page: 'Numero di pagina, predefinito 1.',
        limit: 'Risultati per pagina, predefinito 25, massimo 500.',
      },
    },
    'start-catchall': {
      title: 'Avvia un task di verifica catch-all',
      description:
        "Avvia la verifica catch-all approfondita per un job in blocco completato. Vengono ricontrollati solo gli indirizzi segnati come catch-all nel job di origine. Costa 1 credito per indirizzo (vedi creditsRequired nella risposta).",
      bodyParams: {
        jobId:
          "L'ID di un job di verifica in blocco completato. Solo gli indirizzi catch-all di quel job ricevono la verifica approfondita.",
        name: 'Etichetta leggibile opzionale per il task.',
      },
    },
    'get-catchall': {
      title: 'Ottieni lo stato di un task catch-all',
      description:
        "Interroga questo endpoint per controllare l'avanzamento e i conteggi aggiornati in verdictCounts. I task catch-all di solito finiscono in un tempo che va da pochi secondi a pochi minuti, in base al volume.",
      params: {
        taskId: "L'ID del task restituito da POST /v1/catchall.",
      },
    },
    'catchall-results': {
      title: 'Ottieni i risultati di un task catch-all',
      description:
        "Recupera i risultati paginati per ogni email, con il dettaglio del punteggio (segnali di analisi del dominio ed età del dominio).",
      params: {
        taskId: "L'ID del task.",
        page: 'Numero di pagina, predefinito 1.',
        limit: 'Risultati per pagina, predefinito 25, massimo 500.',
        verdict: 'Filtra per risultato: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Scarica i risultati catch-all in CSV',
      description:
        'Scarica tutti i risultati di un task catch-all completato in un file CSV con le colonne Email, Score e Verdict. Il Content-Type è text/csv.',
      params: {
        taskId: "L'ID del task.",
        verdict: 'Filtra per risultato: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Ottieni il saldo crediti attuale',
      description:
        'Restituisce il saldo del tuo account: crediti disponibili, riservati (bloccati per i job in corso) e totali storici. Le verifiche con risultato "unknown" vengono rimborsate in automatico e compaiono qui.',
    },
  },

  errors: {
    h2: 'Errori e limiti di frequenza',
    statusHeader: 'Stato',
    meaningHeader: 'Significato',
    statusRows: [
      { status: '200 OK', meaning: 'Richiesta riuscita (verifica sincrona o lettura di stato e risultati).' },
      { status: '202 Accepted', meaning: 'Job o task asincrono creato e messo in coda.' },
      { status: '400 Bad Request', meaning: 'Parametri mancanti o non validi (formato email errato, array emails vuoto, jobId mancante).' },
      { status: '401 Unauthorized', meaning: 'Chiave API mancante, non valida o revocata.' },
      { status: '402 Payment Required', meaning: "Crediti insufficienti per l'operazione richiesta." },
      { status: '404 Not Found', meaning: "L'ID del job o del task non esiste nel tuo account." },
      { status: '409 Conflict', meaning: 'Il job non è nello stato richiesto (per esempio, chiedi i risultati prima che finisca).' },
      { status: '410 Gone', meaning: 'I risultati del job hanno superato il periodo di conservazione di 48 ore.' },
      { status: '429 Too Many Requests', meaning: 'Limite di frequenza superato. Aspetta e riprova.' },
      { status: '500 / 502 / 503', meaning: 'Il server o il servizio di verifica a monte non è disponibile per il momento.' },
    ],
    rateLimitsH3: 'Limiti di frequenza',
    rateLimitsBody:
      "Ogni risposta include gli header `RateLimit-Limit`, `RateLimit-Remaining` e `RateLimit-Reset` (con le maiuscole dello standard RFC), così puoi regolare il ritmo delle richieste. `RateLimit-Reset` indica i secondi che mancano al reset della finestra attuale.",
    categoryHeader: 'Categoria',
    limitHeader: 'Limite',
    rateLimitRows: [
      { category: 'Tutti gli endpoint (predefinito)', limit: '300 richieste / 15 minuti' },
      { category: 'Creazione di batch (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 richieste / 15 minuti' },
      { category: 'Controllo dei job (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 richieste / 15 minuti' },
      { category: 'Email massime per job in blocco', limit: '50.000' },
      { category: 'Conservazione dei risultati del job', limit: '48 ore' },
    ],
    tierNote:
      "I limiti sono divisi in tre livelli perché i controlli di stato sono più frequenti della creazione di batch. Mentre un job è in corso puoi controllarlo ogni pochi secondi. Il limite di `600 / 15 min` (circa 40 al minuto) ti lascia margine senza sovraccaricare il backend.",
    higherLimitsTitle: 'Ti servono limiti più alti?',
    higherLimitsBody: 'Alziamo spesso i limiti per i partner di integrazione verificati.',
    higherLimitsCta: 'Parla con noi',
    h429: 'Formato della risposta 429',
    body429: "Quando superi un limite di frequenza, l'API restituisce HTTP 429 con questo corpo:",
    backoff:
      "Prima di riprovare, aspetta il numero di secondi indicato nell'header `RateLimit-Reset` (i secondi che mancano al reset della finestra).",
  },

  cta: {
    h3: 'Pronto a integrare?',
    body: 'Crea la tua chiave API in pochi secondi. Sono inclusi crediti di prova gratuiti, così puoi provare l\'integrazione completa prima di pagare.',
    primary: 'Ottieni la tua chiave API',
    secondary: 'Parla con il nostro team',
  },
}
