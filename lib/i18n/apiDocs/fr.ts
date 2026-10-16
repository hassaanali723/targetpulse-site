import type { ApiDocsStrings } from './types'

// French API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Register "vous", as in lib/i18n/fr.ts. No-break space before : ? ! ;

export const API_DOCS_FR: ApiDocsStrings = {
  breadcrumbName: 'Documentation de l’API',
  schema: {
    headline: 'Documentation de l’API Giggal.ai',
    description:
      'API REST pour vérifier une adresse mail, lancer des vérifications en masse et contrôler en détail les adresses catch-all et protégées par une SEG. Endpoints JSON, authentification par clé API, facturation à chaque vérification réussie.',
  },
  contactPath: '/fr/contact',

  overviewBanner:
    'Vous cherchez une présentation générale ? Consultez la page sur l’[API de vérification d’email](/email-verification-api) ou sur l’[API de validation d’email pour les formulaires d’inscription](/email-validation-api) (en anglais).',
  hero: {
    h1: 'Documentation de l’API de vérification d’adresse mail',
    lead: 'Vérifiez une adresse mail, lancez des vérifications en masse et contrôlez en détail les adresses catch-all et protégées par une SEG. Tous les endpoints utilisent JSON et une authentification par clé API. Seules les vérifications réussies sont facturées.',
  },

  sidebar: {
    searchPlaceholder: 'Rechercher…',
    collapse: 'Réduire',
    expand: 'Développer',
  },

  intro: {
    h2: 'Introduction',
    body: 'L’API Giggal.ai vous permet de vérifier une adresse mail, de lancer des vérifications en masse jusqu’à 50 000 emails par tâche et de contrôler en détail les adresses catch-all et protégées par une SEG. Elle utilise une API REST simple au format JSON. Chaque vérification réussie consomme des crédits de votre compte.',
    baseUrlLabel: 'URL de base',
    apiKeyLabel: 'Obtenir une clé API',
    apiKeyBody:
      'Créez une clé API depuis votre tableau de bord Giggal.ai : ouvrez l’onglet Developer API dans la barre latérale et cliquez sur Create API Key. Chaque clé est liée à votre compte, suit sa propre utilisation et peut être révoquée à tout moment.',
    apiKeyLink: 'Ouvrir l’onglet Developer API',
    envelopeLabel: 'Format de la réponse',
    envelopeBody: 'Chaque réponse suit la même structure JSON :',
    quickStartLabel: 'Démarrage rapide : vérifier une adresse avec cURL',
  },

  auth: {
    h2: 'Authentification',
    body: 'Envoyez votre clé API avec chaque requête, dans l’un des deux en-têtes suivants. Les deux fonctionnent.',
    bearerLabel: 'Option 1 : jeton Bearer',
    xApiKeyLabel: 'Option 2 : en-tête X-API-Key',
    note: 'Une clé absente, invalide ou révoquée renvoie une erreur HTTP 401. N’exposez jamais vos clés API dans du code côté client. Faites passer les appels par votre backend.',
    idempotencyLabel: 'Idempotence (en masse et catch-all)',
    idempotencyBody:
      'Pour `POST /v1/verify-batch` et `POST /v1/catchall`, envoyez un en-tête `Idempotency-Key`. Une nouvelle tentative avec la même clé renvoie la réponse d’origine. Aucune tâche en double n’est créée et les crédits ne sont pas débités deux fois.',
  },

  groups: {
    'single-verification': 'Vérification unitaire',
    'bulk-verification': 'Vérification en masse',
    'catchall-verification': 'Vérification catch-all',
    account: 'Compte',
  },
  groupCount: {
    one: '{n} endpoint dans ce groupe.',
    other: '{n} endpoints dans ce groupe.',
  },

  endpoint: {
    authorizations: 'Autorisations',
    pathParams: 'Paramètres de chemin et de requête',
    requestBody: 'Corps de la requête',
    required: 'Obligatoire',
    responseSamples: 'Exemples de réponse',
  },

  endpoints: {
    'verify-single': {
      title: 'Vérifier une adresse mail',
      description:
        'Vérifie une adresse mail de façon synchrone. Coûte 1 crédit. Si le domaine est catch-all, la vérification approfondie se fait dans la même requête et la réponse inclut catch_all_score et catch_all_verdict.',
      bodyParams: {
        email: 'L’adresse mail à vérifier.',
      },
    },
    'submit-batch': {
      title: 'Envoyer une tâche de vérification en masse',
      description:
        'Envoyez jusqu’à 50 000 emails par tâche. Le traitement est asynchrone : interrogez GET /v1/jobs/:jobId pour suivre l’avancement. Envoyez un en-tête Idempotency-Key pour relancer la création d’une tâche sans double facturation.',
      bodyParams: {
        emails:
          'Liste des adresses mail à vérifier. 50 000 au maximum par tâche. Les doublons et les adresses mal formées sont retirés côté serveur.',
        name: 'Nom facultatif de la tâche, lisible par un humain. Affiché dans votre tableau de bord.',
      },
    },
    'get-job': {
      title: 'Obtenir le statut d’une tâche en masse',
      description:
        'Interrogez cet endpoint pour suivre l’avancement. Évolution du statut : processing → completed (ou failed). Intervalle d’interrogation conseillé : 10 à 15 secondes. Les petites listes (moins de 50 emails) se terminent en général en moins de 30 secondes.',
      params: {
        jobId: 'L’identifiant de tâche renvoyé par POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Obtenir les résultats d’une tâche en masse',
      description:
        'Quand le statut est "completed", récupérez les résultats de chaque email. Les résultats sont paginés : envoyez les paramètres de requête page et limit. Les résultats sont conservés 48 heures (voir resultsExpiresAt sur la tâche).',
      params: {
        jobId: 'L’identifiant de la tâche.',
        page: 'Numéro de page, 1 par défaut.',
        limit: 'Résultats par page, 25 par défaut, 500 au maximum.',
      },
    },
    'start-catchall': {
      title: 'Lancer une tâche de vérification catch-all',
      description:
        'Lance la vérification catch-all approfondie pour une tâche en masse terminée. Seules les adresses marquées catch-all dans la tâche d’origine sont vérifiées à nouveau. Facturé 1 crédit par adresse (voir creditsRequired dans la réponse).',
      bodyParams: {
        jobId:
          'L’identifiant d’une tâche de vérification en masse terminée. Seules les adresses catch-all de cette tâche sont vérifiées en détail.',
        name: 'Nom facultatif de la tâche, lisible par un humain.',
      },
    },
    'get-catchall': {
      title: 'Obtenir le statut d’une tâche catch-all',
      description:
        'Interrogez cet endpoint pour suivre l’avancement et les compteurs verdictCounts mis à jour. Une tâche catch-all prend en général de quelques secondes à quelques minutes, selon le volume.',
      params: {
        taskId: 'L’identifiant de tâche renvoyé par POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Obtenir les résultats d’une tâche catch-all',
      description:
        'Récupère les résultats paginés de chaque email, avec le détail du score (signaux de tri du domaine et âge du domaine).',
      params: {
        taskId: 'L’identifiant de la tâche.',
        page: 'Numéro de page, 1 par défaut.',
        limit: 'Résultats par page, 25 par défaut, 500 au maximum.',
        verdict: 'Filtrer par résultat : valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Télécharger les résultats catch-all en CSV',
      description:
        'Télécharge tous les résultats d’une tâche catch-all terminée dans un fichier CSV avec les colonnes Email, Score et Verdict. Le Content-Type est text/csv.',
      params: {
        taskId: 'L’identifiant de la tâche.',
        verdict: 'Filtrer par résultat : valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Obtenir le solde de crédits',
      description:
        'Renvoie le solde de votre compte : crédits disponibles, réservés (bloqués pour les tâches en cours) et totaux depuis l’ouverture du compte. Les vérifications au résultat "unknown" sont remboursées automatiquement et apparaissent ici.',
    },
  },

  errors: {
    h2: 'Erreurs et limites de requêtes',
    statusHeader: 'Statut',
    meaningHeader: 'Signification',
    statusRows: [
      { status: '200 OK', meaning: 'La requête a réussi (vérification synchrone, ou lecture d’un statut ou de résultats).' },
      { status: '202 Accepted', meaning: 'La tâche asynchrone a été créée et mise en file d’attente.' },
      { status: '400 Bad Request', meaning: 'Paramètres absents ou invalides (format d’email incorrect, liste emails vide, jobId absent).' },
      { status: '401 Unauthorized', meaning: 'Clé API absente, invalide ou révoquée.' },
      { status: '402 Payment Required', meaning: 'Crédits insuffisants pour l’opération demandée.' },
      { status: '404 Not Found', meaning: 'L’identifiant de tâche n’existe pas dans votre compte.' },
      { status: '409 Conflict', meaning: 'La tâche n’est pas dans l’état requis (par exemple, résultats demandés avant la fin).' },
      { status: '410 Gone', meaning: 'Les résultats de la tâche ont dépassé la durée de conservation de 48 heures.' },
      { status: '429 Too Many Requests', meaning: 'Limite de requêtes dépassée. Attendez, puis réessayez.' },
      { status: '500 / 502 / 503', meaning: 'Le serveur ou le service de vérification en amont est temporairement indisponible.' },
    ],
    rateLimitsH3: 'Limites de requêtes',
    rateLimitsBody:
      'Chaque réponse inclut les en-têtes `RateLimit-Limit`, `RateLimit-Remaining` et `RateLimit-Reset` (casse RFC), pour vous aider à espacer vos requêtes. `RateLimit-Reset` indique le nombre de secondes avant la réinitialisation de la fenêtre en cours.',
    categoryHeader: 'Catégorie',
    limitHeader: 'Limite',
    rateLimitRows: [
      { category: 'Tous les endpoints (par défaut)', limit: '300 requêtes / 15 minutes' },
      { category: 'Création de tâches (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 requêtes / 15 minutes' },
      { category: 'Suivi des tâches (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 requêtes / 15 minutes' },
      { category: 'Nombre maximal d’emails par tâche en masse', limit: '50 000' },
      { category: 'Conservation des résultats', limit: '48 heures' },
    ],
    tierNote:
      'Il y a trois niveaux de limite, car le suivi d’une tâche se fait plus souvent que sa création. Vous pouvez interroger l’API toutes les quelques secondes pendant qu’une tâche tourne. La limite de `600 / 15 min` (environ 40 par minute) vous laisse donc de la marge sans surcharger le serveur.',
    higherLimitsTitle: 'Besoin de limites plus élevées ?',
    higherLimitsBody: 'Nous relevons régulièrement les limites pour les partenaires d’intégration vérifiés.',
    higherLimitsCta: 'Nous contacter',
    h429: 'Format de la réponse 429',
    body429: 'Quand vous atteignez une limite, l’API renvoie une erreur HTTP 429 avec ce corps :',
    backoff:
      'Avant de réessayer, attendez le nombre de secondes indiqué dans l’en-tête `RateLimit-Reset` (temps restant avant la réinitialisation de la fenêtre).',
  },

  cta: {
    h3: 'Prêt à intégrer l’API ?',
    body: 'Créez votre clé API en quelques secondes. Des crédits d’essai gratuits sont inclus, pour tout tester de bout en bout avant de payer.',
    primary: 'Obtenir votre clé API',
    secondary: 'Parler à notre équipe',
  },
}
