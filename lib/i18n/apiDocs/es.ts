import type { ApiDocsStrings } from './types'

// Spanish text for the API reference (/es/documentacion-api). Neutral Latin
// American Spanish, register "tú", as in lib/i18n/es.ts. Endpoint paths, HTTP
// methods, parameter names, JSON fields and values, header names, code and
// status codes stay in English. Field names that contain "verdict" stay as
// the API returns them; prose uses "resultado".

export const API_DOCS_ES: ApiDocsStrings = {
  breadcrumbName: 'Documentación de la API',
  schema: {
    headline: 'Referencia de la API de Giggal.ai',
    description:
      'API REST para verificar correos uno a uno, procesar lotes en bloque y hacer una verificación profunda de direcciones catch-all y protegidas por SEG. Endpoints JSON, autenticación con clave de API y cobro por cada verificación correcta.',
  },
  contactPath: '/es/contacto',

  overviewBanner:
    '¿Buscas una visión general? Consulta la [API de verificación de correo](/email-verification-api) o la [API de validación de correo para formularios de registro](/email-validation-api) (en inglés).',
  hero: {
    h1: 'Referencia de la API para validar correos',
    lead: 'Verifica correos uno a uno, procesa lotes en bloque y haz una verificación profunda de direcciones catch-all y protegidas por SEG. Todos los endpoints usan JSON, se autentican con una clave de API y se cobran por cada verificación correcta.',
  },

  sidebar: {
    searchPlaceholder: 'Buscar…',
    collapse: 'Contraer',
    expand: 'Expandir',
  },

  intro: {
    h2: 'Introducción',
    body: 'La API de Giggal.ai te permite verificar direcciones de correo una a una, procesar lotes de hasta 50.000 correos por tarea y hacer una verificación profunda de direcciones catch-all y protegidas por SEG, con una API REST sencilla en JSON. Cada verificación correcta descuenta créditos de tu cuenta.',
    baseUrlLabel: 'URL base',
    apiKeyLabel: 'Consigue una clave de API',
    apiKeyBody:
      'Crea una clave de API desde tu panel de Giggal.ai. Abre la pestaña Developer API en la barra lateral y haz clic en Create API Key. Cada clave pertenece a tu cuenta, registra su propio uso y se puede revocar en cualquier momento.',
    apiKeyLink: 'Abrir la pestaña Developer API',
    envelopeLabel: 'Estructura de la respuesta',
    envelopeBody: 'Todas las respuestas siguen la misma estructura JSON:',
    quickStartLabel: 'Inicio rápido: verifica un correo con cURL',
  },

  auth: {
    h2: 'Autenticación',
    body: 'Envía tu clave de API en cada solicitud con una de estas dos cabeceras. Las dos funcionan.',
    bearerLabel: 'Opción 1: token Bearer',
    xApiKeyLabel: 'Opción 2: cabecera X-API-Key',
    note: 'Si la clave falta, no es válida o fue revocada, la API devuelve HTTP 401. No expongas nunca tus claves de API en el código del lado del cliente. Haz las llamadas a través de tu backend.',
    idempotencyLabel: 'Idempotencia (en bloque y catch-all)',
    idempotencyBody:
      'En `POST /v1/verify-batch` y `POST /v1/catchall`, envía una cabecera `Idempotency-Key`. Si repites la solicitud con la misma clave, recibes la respuesta original. No se crea una tarea duplicada ni se cobran los créditos dos veces.',
  },

  groups: {
    'single-verification': 'Verificación individual',
    'bulk-verification': 'Verificación en bloque',
    'catchall-verification': 'Verificación catch-all',
    account: 'Cuenta',
  },
  groupCount: {
    one: '{n} endpoint en este grupo.',
    other: '{n} endpoints en este grupo.',
  },

  endpoint: {
    authorizations: 'Autorizaciones',
    pathParams: 'Parámetros de ruta y de consulta',
    requestBody: 'Cuerpo de la solicitud',
    required: 'Obligatorio',
    responseSamples: 'Ejemplos de respuesta',
  },

  endpoints: {
    'verify-single': {
      title: 'Verificar un solo correo',
      description:
        'Verifica una dirección de correo de forma síncrona. Cuesta 1 crédito. Si el dominio es catch-all, la verificación profunda se hace en la misma solicitud y la respuesta incluye catch_all_score y catch_all_verdict.',
      bodyParams: {
        email: 'La dirección de correo que quieres verificar.',
      },
    },
    'submit-batch': {
      title: 'Enviar una tarea de verificación en bloque',
      description:
        'Envía hasta 50.000 correos por tarea. El procesamiento es asíncrono, así que consulta GET /v1/jobs/:jobId para ver el avance. Envía una cabecera Idempotency-Key para repetir la creación de la tarea sin riesgo de cobros dobles.',
      bodyParams: {
        emails:
          'Lista de direcciones de correo a verificar. Máximo 50.000 por tarea. El servidor elimina los duplicados y las direcciones mal formadas.',
        name: 'Nombre opcional de la tarea, fácil de leer. Aparece en tu panel.',
      },
    },
    'get-job': {
      title: 'Consultar el estado de una tarea en bloque',
      description:
        'Consulta este endpoint para ver el avance. Cambios de estado: processing → completed (o failed). Intervalo de consulta recomendado: de 10 a 15 segundos. Los lotes pequeños (< 50 correos) suelen terminar en menos de 30 segundos.',
      params: {
        jobId: 'El ID de tarea que devuelve POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Obtener los resultados de una tarea en bloque',
      description:
        'Cuando el estado sea "completed", obtén los resultados de cada correo. Los resultados están paginados, así que envía los parámetros de consulta page y limit. Los resultados se guardan durante 48 horas (consulta resultsExpiresAt en la tarea).',
      params: {
        jobId: 'El ID de la tarea.',
        page: 'Número de página. Por defecto, 1.',
        limit: 'Resultados por página. Por defecto, 25. Máximo, 500.',
      },
    },
    'start-catchall': {
      title: 'Iniciar una tarea de verificación catch-all',
      description:
        'Inicia la verificación profunda catch-all de una tarea en bloque terminada. Solo se vuelven a comprobar las direcciones marcadas como catch-all en la tarea de origen. Se cobra 1 crédito por dirección (consulta creditsRequired en la respuesta).',
      bodyParams: {
        jobId:
          'El ID de una tarea de verificación en bloque terminada. Solo se verifican a fondo las direcciones catch-all de esa tarea.',
        name: 'Nombre opcional de la tarea, fácil de leer.',
      },
    },
    'get-catchall': {
      title: 'Consultar el estado de una tarea catch-all',
      description:
        'Consulta este endpoint para ver el avance y los verdictCounts en tiempo real. Las tareas catch-all suelen terminar en unos segundos o en unos minutos, según el volumen.',
      params: {
        taskId: 'El ID de tarea que devuelve POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Obtener los resultados de una tarea catch-all',
      description:
        'Obtén los resultados paginados de cada correo con el desglose de la puntuación (señales de clasificación del dominio y antigüedad del dominio).',
      params: {
        taskId: 'El ID de la tarea.',
        page: 'Número de página. Por defecto, 1.',
        limit: 'Resultados por página. Por defecto, 25. Máximo, 500.',
        verdict: 'Filtra por resultado: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Descargar los resultados catch-all en CSV',
      description:
        'Descarga todos los resultados de una tarea catch-all terminada en un archivo CSV con las columnas Email, Score y Verdict. El Content-Type es text/csv.',
      params: {
        taskId: 'El ID de la tarea.',
        verdict: 'Filtra por resultado: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Consultar el saldo de créditos',
      description:
        'Devuelve el saldo de tu cuenta: créditos disponibles, reservados (retenidos para tareas en curso) y totales históricos. Las verificaciones que vuelven como "unknown" se reembolsan de forma automática y se reflejan aquí.',
    },
  },

  errors: {
    h2: 'Errores y límites de uso',
    statusHeader: 'Estado',
    meaningHeader: 'Significado',
    statusRows: [
      { status: '200 OK', meaning: 'La solicitud se completó (verificación síncrona o consulta de estado o resultados).' },
      { status: '202 Accepted', meaning: 'La tarea asíncrona se creó y está en cola.' },
      { status: '400 Bad Request', meaning: 'Faltan parámetros o no son válidos (formato de correo incorrecto, lista emails vacía, falta jobId).' },
      { status: '401 Unauthorized', meaning: 'La clave de API falta, no es válida o fue revocada.' },
      { status: '402 Payment Required', meaning: 'No tienes créditos suficientes para la operación solicitada.' },
      { status: '404 Not Found', meaning: 'El ID de tarea no existe en tu cuenta.' },
      { status: '409 Conflict', meaning: 'La tarea no está en el estado necesario (por ejemplo, pides los resultados antes de que termine).' },
      { status: '410 Gone', meaning: 'Los resultados de la tarea superaron el plazo de conservación de 48 horas.' },
      { status: '429 Too Many Requests', meaning: 'Se superó el límite de uso. Espera y vuelve a intentarlo.' },
      { status: '500 / 502 / 503', meaning: 'El servidor o el servicio de verificación no está disponible por el momento.' },
    ],
    rateLimitsH3: 'Límites de uso',
    rateLimitsBody:
      'Cada respuesta incluye las cabeceras `RateLimit-Limit`, `RateLimit-Remaining` y `RateLimit-Reset` (con la escritura del RFC) para que puedas espaciar tus solicitudes. `RateLimit-Reset` es el número de segundos que faltan para que se reinicie la ventana actual.',
    categoryHeader: 'Categoría',
    limitHeader: 'Límite',
    rateLimitRows: [
      { category: 'Todos los endpoints (por defecto)', limit: '300 solicitudes / 15 minutos' },
      { category: 'Creación de lotes (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 solicitudes / 15 minutos' },
      { category: 'Consulta de tareas (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 solicitudes / 15 minutos' },
      { category: 'Máximo de correos por tarea en bloque', limit: '50.000' },
      { category: 'Conservación de los resultados', limit: '48 horas' },
    ],
    tierNote:
      'Hay tres niveles porque las consultas de estado se hacen más a menudo que la creación de lotes. Puedes consultar cada pocos segundos mientras una tarea está en curso. Por eso `600 / 15 min` (≈ 40/min) te da margen sin sobrecargar el backend.',
    higherLimitsTitle: '¿Necesitas límites más altos?',
    higherLimitsBody: 'Subimos los límites de forma habitual para los socios de integración verificados.',
    higherLimitsCta: 'Habla con nosotros',
    h429: 'Formato de la respuesta 429',
    body429: 'Cuando alcanzas un límite de uso, la API devuelve HTTP 429 con este cuerpo:',
    backoff:
      'Antes de volver a intentarlo, espera el tiempo que indica la cabecera `RateLimit-Reset` (segundos hasta que se reinicia la ventana).',
  },

  cta: {
    h3: '¿Listo para integrar la API?',
    body: 'Crea tu clave de API en segundos. Incluye créditos de prueba gratis para que conectes todo de principio a fin antes de gastar nada.',
    primary: 'Consigue tu clave de API',
    secondary: 'Habla con nuestro equipo',
  },
}
