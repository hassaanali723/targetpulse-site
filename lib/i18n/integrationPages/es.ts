import type { IntegrationPagesContent } from './types'

// Spanish copy for the integration pages. One neutral Latin American Spanish,
// register "tú", as in lib/i18n/es.ts. Keyword targets (Ahrefs, PE/MX/CO/ES):
//   validar correo 1,300 / KD 0 (links to /es/validar-correo)
//   verificador de correo 800, validación de correo 800, verificar correo 700
// Product UI labels in Zapier, n8n, HubSpot, Claude and ChatGPT stay as the
// apps show them in English. HubSpot property names and status values,
// scopes, tool names and package names stay in English too.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

export const ES: IntegrationPagesContent = {
  common: {
    locale: 'es',
    hubPath: '/es/integraciones',
    hubCrumb: 'Integraciones',
    checkerPath: '/es/validar-correo',
    signupLabel: 'Empieza gratis con 1.000 créditos',
    getStarted: 'Empieza gratis',
    allIntegrations: 'Ver todas las integraciones',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integraciones para validar correo: HubSpot, Zapier, n8n | Giggal.ai',
      description:
        'Integraciones de verificación de correo para HubSpot, Zapier, n8n, Mailchimp, Claude y ChatGPT. Valida correos en tus herramientas, catch-all incluidos.',
      ogTitle: 'Integraciones para validar correo: HubSpot, Zapier, n8n y MCP',
      ogDescription:
        'Conecta el verificador de correo de Giggal.ai a HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude y ChatGPT.',
    },
    h1Lead: 'Integraciones de verificación de correo para',
    h1Accent: 'las herramientas que ya usas',
    intro:
      'Giggal.ai es un [verificador de correo](/es/validar-correo) que se conecta a tu CRM, a tu plataforma de email, a tus hojas de cálculo y a tu asistente de IA. Cada comprobación te dice si un buzón existe. Las direcciones catch-all también reciben un resultado válido o no válido.',
    waysTitle: 'Cuatro formas de añadir la validación de correo a tus herramientas',
    waysIntro:
      'Elige la opción que mejor encaja con tu forma de trabajar. Todas usan los mismos créditos y dan el mismo resultado.',
    ways: [
      {
        label: 'Directa',
        title: 'Integraciones directas',
        text: 'Conecta [HubSpot](/es/integraciones/hubspot), Mailchimp, SendGrid y otras plataformas desde el panel de Giggal.ai. Importa una lista, verifícala y envía de vuelta la lista limpia.',
      },
      {
        label: 'Automatización',
        title: 'Zapier y n8n',
        text: 'Verifica cada contacto nuevo, cada respuesta de formulario o cada fila de una hoja en cuanto llega. Usa la app de Giggal.ai en [Zapier](/es/integraciones/zapier) o el nodo oficial para [n8n](/es/integraciones/n8n).',
      },
      {
        label: 'MCP',
        title: 'Asistentes de IA',
        text: 'Añade el [servidor MCP de Giggal.ai](/es/mcp) a Claude, ChatGPT, Cursor o VS Code. Después pide al asistente que verifique direcciones dentro del chat.',
      },
      {
        label: 'API',
        title: 'API REST',
        text: 'Envía solicitudes de verificación individual o en bloque desde tu propio código. Los resultados llegan en JSON. La [referencia de la API](/es/documentacion-api) muestra todos los endpoints.',
      },
    ],
    grid: {
      searchPlaceholder: 'Buscar integraciones…',
      searchAria: 'Buscar integraciones',
      connectionAria: 'Filtrar por tipo de conexión',
      connection: { all: 'Todas', direct: 'Directa', zapier: 'Vía Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filtrar por categoría',
      allCategories: 'Todas las categorías',
      categories: {
        'Email Marketing': 'Email marketing',
        Automation: 'Automatización',
        CRM: 'CRM',
        'Sales & Outreach': 'Ventas y prospección',
        Spreadsheets: 'Hojas de cálculo',
        Forms: 'Formularios',
        'AI & Agents': 'IA y agentes',
        Developer: 'Desarrolladores',
        'Marketing Automation': 'Automatización de marketing',
        Ecommerce: 'Comercio electrónico',
        'Forms & Surveys': 'Formularios y encuestas',
        'Website & Popups': 'Sitios web y ventanas emergentes',
        'Spreadsheets & Data': 'Hojas de cálculo y datos',
        Support: 'Atención al cliente',
        Payments: 'Pagos',
      },
      prevPage: 'Página anterior',
      nextPage: 'Página siguiente',
      pagination: 'Paginación',
      showing: 'Mostrando {from}-{to} de {total} integraciones',
      noMatchTitle: 'Ninguna integración coincide con tu búsqueda.',
      noMatchText:
        'Cualquier herramienta que pueda enviar una solicitud HTTP puede usar la [API REST](/es/documentacion-api).',
      descriptions: {
        zapier:
          'Verifica cada correo nuevo en tiempo real en más de 8.000 apps, direcciones catch-all incluidas. Sin código.',
        n8n:
          'Verifica correos sueltos y listas completas en tus flujos de n8n con el nodo oficial de Giggal.ai.',
        claude:
          'Añade el servidor MCP de Giggal.ai a Claude y verifica direcciones de correo dentro del chat.',
        chatgpt:
          'Añade el servidor MCP de Giggal.ai a ChatGPT y verifica direcciones de correo dentro del chat.',
        clay:
          'Verifica los correos de tus prospectos en las tablas de Clay con la API de Giggal.ai, catch-all incluidos.',
        'rest-api':
          'API REST para verificar correos uno a uno, en bloque y en dominios catch-all. Crea cualquier integración a medida.',
        mailchimp:
          'Importa una audiencia de Mailchimp, verifícala y quédate solo con los suscriptores entregables.',
        mailgun:
          'Conecta Mailgun y verifica tus listas de envío antes de cada campaña.',
        mailjet:
          'Importa tus listas de contactos de Mailjet en Giggal.ai y verifícalas, direcciones catch-all incluidas.',
        sendgrid:
          'Verifica en bloque tus contactos de SendGrid para proteger tu reputación como remitente.',
        activecampaign:
          'Importa tus contactos de ActiveCampaign, verifícalos y elimina las direcciones malas antes de enviar.',
        'campaign-monitor':
          'Conecta Campaign Monitor y verifica cada lista de suscriptores en Giggal.ai.',
        getresponse:
          'Verifica tus listas de GetResponse para reducir los rebotes, también en contactos de dominios catch-all.',
        aweber:
          'Importa tus suscriptores de AWeber, verifícalos y envía de vuelta una lista limpia.',
        mailerlite:
          'Conecta MailerLite y verifica tus listas de suscriptores antes de la próxima campaña.',
        drip:
          'Verifica en bloque tus contactos de Drip para que tus correos automáticos lleguen a buzones reales.',
        'elastic-email':
          'Importa tus listas de Elastic Email y verifícalas, incluidas las direcciones catch-all y las protegidas por gateways de seguridad.',
        'reply-io':
          'Verifica los correos de tus prospectos antes de que empiecen tus secuencias de Reply.io, para que lleguen a buzones reales.',
        'zoho-crm':
          'Importa contactos y leads de Zoho CRM, verifícalos y mantén limpios los datos de tu CRM.',
        'google-sheets':
          'Verifica cada fila nueva en cuanto se añade y escribe el resultado en tu hoja.',
        hubspot:
          'Verifica los contactos y las listas de tu CRM de HubSpot y filtra por el resultado en HubSpot.',
        salesforce:
          'Verifica el correo de cada lead nuevo de Salesforce en cuanto se crea.',
        typeform:
          'Verifica los correos de las respuestas de Typeform antes de que lleguen a tus otras herramientas.',
        slack:
          'Publica los resultados de verificación y los avisos sobre tus listas en un canal de Slack.',
      },
      zapierAppDescription:
        'Verifica en tiempo real, a través de Zapier, las direcciones de correo que llegan a {name}.',
      logoAlt: 'Integración de verificación de correo de {name} con Giggal.ai',
    },
    appListTitle: 'Todas las apps de Zapier compatibles',
    appListIntro: '{count} apps se conectan a Giggal.ai a través de Zapier. Cada una tiene su propia guía de configuración.',
    apiTitle: '¿Tu herramienta no está en la lista?',
    apiText:
      'Cualquier herramienta que pueda enviar una solicitud HTTP puede verificar correos con Giggal.ai. Usa la [API de verificación de correo](/email-verification-api) para comprobaciones individuales o en bloque, o conéctate a través de Zapier.',
    apiCta: 'Referencia de la API',
    apiHref: '/es/documentacion-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Validar correo en Zapier con más de 8.000 apps | Giggal.ai',
      description:
        'Verifica correos en Zapier con Giggal.ai. Valida cada contacto nuevo en tiempo real, con resultado válido o no válido en los catch-all. Sin código.',
      ogTitle: 'Validar correo en Zapier con más de 8.000 apps',
      ogDescription:
        'Verifica cada dirección de correo nueva en Zapier con Giggal.ai. Funciona con HubSpot, Google Sheets, Salesforce, Mailchimp y más de 8.000 apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'Verificación de correo en Zapier para',
    h1Accent: 'más de 8.000 apps',
    intro:
      'Añade el [verificador de correo](/es/validar-correo) de Giggal.ai a cualquier Zap y comprueba cada dirección en el momento en que llega. Funciona con formularios, CRM, hojas de cálculo y plataformas de email. Las direcciones catch-all reciben un resultado válido o no válido. No necesitas escribir código.',
    viewOnZapier: 'Ver en Zapier',
    tabsTitle: 'Flujos de Zapier y guía de configuración',
    tabsIntro:
      'Parte de un flujo habitual o sigue la guía para crear tu propio Zap en unos cinco minutos.',
    tabs: {
      cardSubtitle: 'Conecta Giggal.ai con más de 8.000 apps',
      tryFree: 'Pruébalo gratis',
      actionsTitle: '4 acciones de Zapier',
      actions: [
        { name: 'Verify Email', description: 'Verifica una dirección de correo en tiempo real, direcciones catch-all incluidas.' },
        { name: 'Start Bulk Verification', description: 'Envía una lista de direcciones. Devuelve un ID de tarea que los pasos siguientes pueden usar.' },
        { name: 'Get Bulk Verification Results', description: 'Obtiene los resultados de una tarea en bloque cuando su estado es completado.' },
        { name: 'Get Credit Balance', description: 'Consulta cuántos créditos de Giggal.ai te quedan.' },
      ],
      workflowsTab: 'Flujos',
      guideTab: 'Guía de integración',
      workflows: [
        {
          title: 'Verificar contactos nuevos de HubSpot',
          description:
            'Cuando se crea un contacto en HubSpot, Giggal.ai verifica el correo y guarda el resultado en una propiedad del contacto.',
        },
        {
          title: 'Verificar filas nuevas en Google Sheets',
          description:
            'Cada fila nueva se verifica en cuanto se añade. El estado, el nivel de riesgo y el resultado catch-all se escriben en la misma fila.',
        },
        {
          title: 'Verificar leads nuevos de Salesforce',
          description:
            'Cada lead nuevo se verifica antes de que un vendedor lo trabaje. Así nadie escribe a un buzón que no existe.',
        },
        {
          title: 'Verificar altas en Mailchimp',
          description:
            'Verifica cada suscriptor nuevo al darse de alta y añade a tu audiencia de Mailchimp solo las direcciones entregables.',
        },
        {
          title: 'Revisar respuestas de Typeform',
          description:
            'Detecta correos mal escritos y desechables en las respuestas de formularios antes de que lleguen a tus otras herramientas.',
        },
        {
          title: 'Enviar resultados a Slack',
          description:
            'Publica un mensaje en Slack cuando termina una verificación o cuando se confirma como válido un lead de un dominio catch-all.',
        },
      ],
      workflowCta: 'Configurar en Zapier',
      guideTitle: 'Cómo conectar Giggal.ai con Zapier',
      guideIntro:
        'La configuración tarda unos cinco minutos. El ejemplo de abajo verifica cada fila nueva de una hoja de Google Sheets.',
      steps: [
        {
          title: 'Elige la app que activa el Zap',
          text: 'Crea un Zap y elige la app que lo inicia. Sirve cualquiera de las más de 8.000 apps de Zapier. En este ejemplo, elige Google Sheets y el evento New or Updated Spreadsheet Row. Conecta tu cuenta y haz clic en Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Configuración del disparador en Zapier con Google Sheets y el evento New or Updated Spreadsheet Row',
        },
        {
          title: 'Añade Giggal.ai como paso de acción',
          text: 'En el paso de acción, busca Giggal.ai en el selector de apps y selecciónalo.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Búsqueda de Giggal.ai en el selector de apps de Zapier',
        },
        {
          title: 'Elige un evento de acción',
          text: 'Giggal.ai tiene cuatro acciones: Verify Email, Start Bulk Verification, Get Bulk Verification Results y Get Credit Balance. Para este ejemplo, elige Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Los cuatro eventos de acción de Giggal.ai en el selector de eventos de Zapier',
        },
        {
          title: 'Conecta tu cuenta de Giggal.ai',
          text: 'La primera vez, Zapier te pide tu clave de API. En el panel de Giggal.ai, abre la pestaña Developer API y haz clic en Create API Key. Pega la clave en Zapier y haz clic en Connect. Las cuentas nuevas reciben 1.000 créditos gratis, sin tarjeta.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Conexión de la cuenta de Giggal.ai con Zapier mediante una clave de API',
        },
        {
          title: 'Asigna el campo de correo y usa el resultado',
          text: 'En el campo Email, elige la columna que contiene la dirección y haz una prueba. Giggal.ai devuelve el estado, el nivel de riesgo, la puntuación y el resultado catch-all. Después de este paso puedes añadir filtros o rutas de Zapier. Por ejemplo, escribe las direcciones entregables en la hoja y mueve las no válidas a otra pestaña.',
        },
      ],
      help: '¿Te quedaste en algún paso? [Contacta con nuestro equipo](/es/contacto) o lee la [referencia de la API](/es/documentacion-api) para ver el formato completo de la respuesta.',
    },
    why: [
      {
        title: 'Un verificador de correo catch-all en Zapier',
        text: 'Muchos verificadores marcan las direcciones catch-all como arriesgadas y no hacen nada más. En una lista B2B pueden ser cerca del 30 % de las direcciones. Giggal.ai sigue comprobándolas y devuelve válido o no válido dentro de tu Zap.',
      },
      {
        title: 'Validación de correo en el momento de la entrada',
        text: 'Los leads se verifican en cuanto llegan desde un formulario, un CRM o una hoja. Las direcciones malas no entran en tus listas, así que luego hay menos que limpiar.',
      },
      {
        title: 'Resultados que tu Zap puede usar para decidir la ruta',
        text: 'Cada comprobación devuelve un estado, un nivel de riesgo, una puntuación de entregabilidad y un resultado catch-all. Úsalos en los filtros y rutas de Zapier para enviar cada lead al lugar correcto.',
      },
    ],
    appsTitle: 'Verifica correos desde cualquiera de estas apps',
    appsIntro: 'Cada app de abajo tiene su propia guía para configurar la verificación de correo con Zapier.',
    categories: {
      'Marketing Automation': 'Automatización de marketing',
      'Email Marketing': 'Email marketing',
      CRM: 'CRM',
      Ecommerce: 'Comercio electrónico',
      'Sales & Outreach': 'Ventas y prospección',
      'Forms & Surveys': 'Formularios y encuestas',
      'Website & Popups': 'Sitios web y ventanas emergentes',
      'Spreadsheets & Data': 'Hojas de cálculo y datos',
      Support: 'Atención al cliente',
      Payments: 'Pagos',
      Automation: 'Automatización',
      Spreadsheets: 'Hojas de cálculo',
      Forms: 'Formularios',
      'AI & Agents': 'IA y agentes',
      Developer: 'Desarrolladores',
    },
    faqTitle: 'Preguntas frecuentes sobre la verificación de correo en Zapier',
    faq: [
      {
        q: '¿Cómo funciona la integración de Giggal.ai con Zapier?',
        a: 'Añades un paso de Giggal.ai a un Zap. Cuando se activa el disparador, por ejemplo un contacto nuevo en el CRM o una respuesta de formulario, Zapier envía la dirección de correo a Giggal.ai. Giggal.ai comprueba si el buzón existe y pasa el resultado al siguiente paso. No hace falta código.',
      },
      {
        q: '¿Zapier puede verificar direcciones catch-all?',
        a: 'Sí, si usas Giggal.ai como paso de verificación. La mayoría de los verificadores devuelve arriesgado o desconocido en los dominios catch-all. Giggal.ai hace comprobaciones adicionales en esas direcciones y devuelve válido o no válido con una puntuación.',
      },
      {
        q: '¿Qué apps puedo conectar?',
        a: 'Cualquier app de Zapier, por ejemplo HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform y Slack. Si una app está en Zapier, puede enviar direcciones a Giggal.ai.',
      },
      {
        q: '¿Cuántos créditos cuesta una comprobación a través de Zapier?',
        a: 'Un crédito por dirección de correo, igual que en el panel o en la API. Las comprobaciones catch-all cuestan el mismo crédito. Las cuentas nuevas reciben 1.000 créditos gratis, sin tarjeta.',
      },
      {
        q: '¿Es mejor verificar en tiempo real o en bloque?',
        a: 'La mayoría de los equipos hace las dos cosas. Las comprobaciones en tiempo real en Zapier frenan las direcciones malas al entrar. La verificación en bloque limpia las listas que ya tienes, en el panel o con la acción Start Bulk Verification.',
      },
    ],
    howToName: 'Cómo verificar correos en Zapier con Giggal.ai',
    howToDescription:
      'Configura la verificación de correo, direcciones catch-all incluidas, en cualquier flujo de Zapier.',
    cta: {
      title: 'Verifica cada dirección de correo nueva en Zapier',
      text: 'Crea tu primer Zap de verificación en unos cinco minutos. Recibes 1.000 créditos gratis, sin tarjeta, y las comprobaciones catch-all están incluidas.',
      primary: 'Empieza gratis',
      secondary: 'Ver todas las integraciones',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Verificar correo en n8n con el nodo oficial | Giggal.ai',
      description:
        'Verifica correos en n8n con el nodo oficial de Giggal.ai. Valida direcciones sueltas o listas enteras, catch-all incluidos. Instala n8n-nodes-giggal desde npm.',
      ogTitle: 'Verificar correo en n8n con el nodo oficial de Giggal.ai',
      ogDescription:
        'Verifica correos sueltos y listas completas en tus flujos de n8n con el nodo de Giggal.ai. Direcciones catch-all incluidas.',
    },
    crumb: 'n8n',
    h1Lead: 'Verificación de correo en n8n con el',
    h1Accent: 'nodo oficial de Giggal.ai',
    intro:
      'Añade el [verificador de correo](/es/validar-correo) de Giggal.ai a tus flujos de n8n. Verifica una dirección en tiempo real o envía una lista completa como tarea en bloque. Las direcciones catch-all reciben un resultado válido o no válido. Instalas el nodo una sola vez desde npm.',
    viewOnNpm: 'Ver en npm',
    opsTitle: 'Qué puede hacer el nodo de n8n',
    opsIntro:
      'El nodo tiene dos recursos y cuatro operaciones. Usa Email para comprobaciones sueltas y Job para listas.',
    ops: [
      { name: 'Verify', detail: 'Verifica una dirección de correo en tiempo real, catch-all incluidos. 1 crédito por comprobación.' },
      { name: 'Verify Batch', detail: 'Envía una lista completa en una sola solicitud. Devuelve un ID de tarea que tu flujo puede consultar después.' },
      { name: 'Get Status', detail: 'Muestra el avance de una tarea en bloque: direcciones procesadas, porcentaje y hora de finalización.' },
      { name: 'Get Results', detail: 'Obtiene los resultados terminados página a página, con un filtro opcional como deliverable o catch_all.' },
    ],
    installTitle: 'Instala el nodo y verifica tu primer correo',
    installIntro:
      'Necesitas una instancia de n8n, en la nube o en tu propio servidor, y una cuenta gratuita de Giggal.ai. La configuración tarda unos cinco minutos.',
    installSteps: [
      {
        title: 'Abre Community nodes en los ajustes de n8n',
        text: 'En n8n, haz clic en el menú de tu cuenta, abajo a la izquierda, y abre Settings. Después selecciona Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'La opción Community nodes en el menú de ajustes de n8n',
      },
      {
        title: 'Instala n8n-nodes-giggal',
        text: 'Haz clic en Install a community node. Escribe `n8n-nodes-giggal` en el campo npm Package Name, marca la casilla y haz clic en Install. El nodo de Giggal.ai aparece entonces en tu lista de nodos.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Instalación del paquete n8n-nodes-giggal en el cuadro Install community nodes',
      },
      {
        title: 'Añade el nodo y crea una credencial',
        text: 'Añade el nodo de Giggal.ai a un flujo. En el desplegable Credential, elige Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Creación de una credencial nueva de Giggal.ai en el nodo de n8n',
      },
      {
        title: 'Pega tu clave de API',
        text: 'En el panel de Giggal.ai, abre la pestaña Developer API y haz clic en Create API Key. Pega la clave en el campo API Key y guarda. Todos los nodos de Giggal.ai de tu instancia ya pueden usarla. Las cuentas nuevas reciben 1.000 créditos gratis, sin tarjeta.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'La clave de API de Giggal.ai añadida a la credencial de n8n',
      },
      {
        title: 'Verifica tu primer correo',
        text: 'Pon Resource en Email y Operation en Verify. Asigna el campo Email Address a tus datos con una expresión como `{{ $json.email }}` y haz clic en Execute step. La salida muestra el estado, el nivel de riesgo, la puntuación de entregabilidad y los detalles catch-all.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Verificación de un solo correo en n8n y lectura de la salida',
      },
    ],
    batchTitle: 'Verifica una lista completa en n8n',
    batchIntro:
      'Si tienes más de unas pocas direcciones, usa el recurso Job. El proceso es enviar la lista, consultar el estado y después obtener los resultados.',
    batchSteps: [
      {
        title: 'Envía la lista con Verify Batch',
        text: 'Pon Operation en Verify Batch y apunta Email Field a la propiedad que contiene las direcciones. Puedes ponerle un nombre a la tarea para encontrarla luego en el panel. Deja activado Enable Catch-All Rescue para que las direcciones catch-all se sigan comprobando. El nodo devuelve un ID de tarea al momento, y la verificación sigue en segundo plano.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Envío de un lote de correos a verificar con el nodo de Giggal.ai en n8n',
      },
      {
        title: 'Consulta el avance con Get Status',
        text: 'Pon Resource en Job y Operation en Get Status, y pasa el ID de tarea del paso anterior. Coloca un nodo Wait entre consultas para que el bucle no pregunte demasiado seguido.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Consulta del avance de una tarea en bloque con la operación Get Status en n8n',
      },
      {
        title: 'Obtén los resultados con Get Results',
        text: 'Cuando el estado sea completed, ejecuta Get Results con el mismo ID de tarea. Recibes un elemento por correo con su estado, su nivel de riesgo y su puntuación. Usa el campo Status Filter para obtener solo las filas deliverable, undeliverable o catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Obtención de los resultados de una verificación en bloque terminada en n8n',
      },
    ],
    calloutTitle: 'Las direcciones catch-all y las protegidas por gateways reciben válido o no válido',
    calloutText:
      'Muchos verificadores devuelven desconocido para las direcciones protegidas por gateways de seguridad de correo, y arriesgado para los dominios catch-all. Giggal.ai [verifica direcciones protegidas por gateways](/seg-email-verification) como Proofpoint y Mimecast, y hace comprobaciones adicionales en los dominios catch-all. [Mira cómo funciona la verificación catch-all](/es/verificacion-catch-all).',
    faqTitle: 'Preguntas frecuentes sobre la verificación de correo en n8n',
    faq: [
      {
        q: '¿El nodo de Giggal.ai funciona en n8n Cloud?',
        a: 'Sí. Instálalo desde Settings, luego Community nodes, y añade tu clave de API. Funciona igual en n8n Cloud y en instancias en tu propio servidor.',
      },
      {
        q: '¿Es seguro instalar el nodo de la comunidad?',
        a: 'El equipo de Giggal.ai publica el paquete en npm con el nombre n8n-nodes-giggal, y cualquiera puede leer el código fuente. El nodo solo se comunica con la API de Giggal.ai, con la credencial que configuraste.',
      },
      {
        q: '¿n8n puede verificar correos catch-all?',
        a: 'Sí, con el nodo de Giggal.ai. Las comprobaciones sueltas tratan los dominios catch-all de forma automática. Las tareas en bloque hacen lo mismo cuando Enable Catch-All Rescue está activado. Recibes válido o no válido con una puntuación, no una etiqueta de arriesgado.',
      },
      {
        q: '¿Cuánto cuesta la verificación en n8n?',
        a: 'Un crédito por dirección de correo, igual que en el resto de Giggal.ai. Las comprobaciones catch-all cuestan el mismo crédito. Las cuentas nuevas empiezan con 1.000 créditos gratis y sin tarjeta.',
      },
      {
        q: '¿Qué devuelve el nodo?',
        a: 'Cada correo devuelve un estado, un nivel de riesgo y una puntuación de entregabilidad. También devuelve indicadores de direcciones gratuitas, de rol y desechables, datos del servidor de correo y el resultado catch-all. La salida es JSON normal de n8n que puedes filtrar y asignar.',
      },
    ],
    howToName: 'Cómo verificar correos en n8n con el nodo de comunidad de Giggal.ai',
    howToDescription:
      'Instala n8n-nodes-giggal, añade tu clave de API y verifica correos sueltos o listas completas en tus flujos de n8n.',
    cta: {
      title: 'Añade la verificación de correo a tus flujos de n8n',
      text: 'Instala n8n-nodes-giggal, pega tu clave de API y deja de pasar direcciones de correo inexistentes por tus flujos. Recibes 1.000 créditos gratis, sin tarjeta.',
      primary: 'Empieza gratis',
      secondary: 'Ver todas las integraciones',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'Validación y verificación de correo en HubSpot | Giggal.ai',
      description:
        'Verificación de correo en HubSpot con Giggal.ai. Valida los contactos y listas de tu CRM, obtén un resultado en los catch-all y filtra por él en HubSpot.',
      ogTitle: 'Validación y verificación de correo en HubSpot',
      ogDescription:
        'Conecta Giggal.ai a HubSpot, verifica tus contactos y listas, y filtra por el resultado en tu CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Validación de correo en HubSpot',
    h1Accent: 'y verificación de contactos',
    intro:
      'Verifica los contactos que ya tienes en tu CRM de HubSpot. Conecta una vez, elige una lista y cada contacto recibe un resultado en su ficha. Las direcciones catch-all reciben entregable o no entregable, no arriesgado. No tienes que exportar ni volver a importar nada.',
    openDashboard: 'Abrir el panel',
    capsTitle: 'Qué hace la integración con HubSpot',
    capsIntro: 'Cuatro pasos, todos dentro de HubSpot y Giggal.ai.',
    caps: [
      {
        name: 'Importa contactos o una lista',
        detail: 'Elige All contacts o cualquier lista de HubSpot. Primero ves el número de correos, así que sabes cuántos créditos vas a usar antes de empezar.',
      },
      {
        name: 'Verifica cada dirección',
        detail: 'Se comprueba si cada buzón existe. Los dominios catch-all reciben un resultado claro, no arriesgado. 1 crédito por dirección.',
      },
      {
        name: 'Guarda los resultados en HubSpot',
        detail: 'Se rellenan cinco propiedades de Giggal en cada contacto, así que el resultado queda en la ficha.',
      },
      {
        name: 'Filtra y crea listas',
        detail: 'Usa Giggal email status en los filtros y las listas activas de HubSpot. Quita las direcciones malas antes de tu próximo envío.',
      },
    ],
    stepsTitle: 'Cómo conectar HubSpot y verificar tu primera lista',
    stepsIntro:
      'Son cuatro pasos y tardan unos dos minutos. Necesitas una cuenta de Giggal.ai y permiso en HubSpot para instalar apps y editar propiedades de contacto.',
    steps: [
      {
        title: 'Abre la pestaña Integration en Giggal.ai',
        text: 'Inicia sesión en Giggal.ai, ve a Email Validation y abre la pestaña Integration. Busca la tarjeta de HubSpot y haz clic en Connect. Si aún no tienes cuenta, el registro tarda un minuto e incluye 1.000 créditos gratis.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'La tarjeta de HubSpot y el botón Connect en la pestaña Integration de Giggal.ai',
      },
      {
        title: 'Aprueba los permisos en HubSpot',
        text: 'HubSpot muestra su propia pantalla de aprobación con todo lo que Giggal.ai puede consultar: ver las propiedades de contacto, modificar contactos, modificar la configuración de las propiedades de contacto, ver las listas de contactos y leer la cuenta que instala la app. Revisa la lista y haz clic en Connect app. Vuelves a Giggal.ai, y la tarjeta de HubSpot ahora muestra Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Pantalla de revisión de permisos de HubSpot para la app Giggal Email Verifier',
      },
      {
        title: 'Importa una lista de contactos',
        text: 'Haz clic en Verify en la tarjeta de HubSpot para abrir la ventana Import from HubSpot. Elige All contacts o cualquier lista de tu portal. Cada fila muestra cuántos correos contiene, así que sabes el costo antes de empezar. Haz clic en Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Ventana Import from HubSpot con las listas de contactos y el número de correos',
      },
      {
        title: 'Verifica la lista y sincroniza los resultados',
        text: 'Giggal.ai comprueba cada dirección y escribe el resultado en cada contacto de HubSpot a medida que termina. La tarjeta de la tarea muestra el desglose y un contador Synced to HubSpot. Haz clic en Sync to HubSpot para volver a escribir los resultados cuando quieras.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Tarea de verificación de HubSpot terminada en Giggal.ai con los resultados sincronizados en HubSpot',
      },
    ],
    calloutTitle: 'Por qué usar un verificador de correo catch-all con HubSpot',
    calloutText:
      'Cerca del 30 % de una lista B2B está en dominios catch-all. Muchos verificadores devuelven esos contactos como arriesgados, así que no puedes hacer nada con ellos. Giggal.ai es un [verificador de correo](/es/validar-correo) que hace comprobaciones adicionales en los dominios catch-all y [verifica direcciones protegidas por gateways de seguridad de correo](/seg-email-verification) como Proofpoint y Mimecast. La mayoría de esos contactos vuelve como entregable o no entregable. [Mira cómo funciona la verificación catch-all](/es/verificacion-catch-all).',
    propsTitle: 'Propiedades de HubSpot que Giggal.ai escribe en cada contacto',
    propsIntro:
      'Las cinco propiedades se crean la primera vez que haces una verificación. Están en un grupo de propiedades llamado Giggal Email Verifier. Tus propiedades de HubSpot actuales no cambian.',
    propsHead: ['Propiedad', 'Tipo', 'Qué te indica'],
    props: [
      ['Giggal email is valid', 'Casilla de verificación', 'Marcada cuando se confirmó que el buzón existe.'],
      ['Giggal email status', 'Desplegable', 'Deliverable, Undeliverable, Risky o Unknown.'],
      ['Giggal deliverability score', 'Número', 'Nivel de confianza de 0 a 100.'],
      ['Giggal email detail', 'Texto', 'Un motivo breve del resultado.'],
      ['Giggal verified at', 'Fecha', 'Cuándo se comprobó la dirección por última vez.'],
    ],
    scopesTitle: 'Permisos y datos de HubSpot',
    scopesIntro: 'Giggal.ai pide cuatro scopes de HubSpot. Cada uno tiene un solo uso.',
    scopes: [
      ['crm.objects.contacts.read', 'Leer la dirección de correo de los contactos que eliges verificar.'],
      ['crm.objects.contacts.write', 'Escribir el resultado de la verificación en esos contactos.'],
      ['crm.schemas.contacts.write', 'Crear las cinco propiedades de Giggal la primera vez.'],
      ['crm.lists.read', 'Mostrar tus listas de contactos para que elijas cuál verificar.'],
    ],
    scopesNote:
      'Giggal.ai solo lee la dirección de correo de los contactos que eliges. No crea ni elimina contactos, no cambia ninguna propiedad aparte de las cinco de arriba y nunca envía correos a las direcciones que comprueba.',
    faqTitle: 'Preguntas frecuentes sobre la verificación de correo en HubSpot',
    faq: [
      {
        q: '¿Giggal.ai envía correos a mis contactos?',
        a: 'No. La verificación se comunica con el servidor de correo de destino y se detiene antes de enviar ningún mensaje. Tus contactos no reciben nada, ni en la bandeja de entrada ni en la carpeta de spam.',
      },
      {
        q: '¿Qué cambia en mi cuenta de HubSpot?',
        a: 'La primera vez crea un grupo de propiedades llamado Giggal Email Verifier con cinco propiedades de contacto personalizadas. Después solo escribe resultados en esas propiedades. Tus propiedades de HubSpot actuales no cambian, y no se crean ni se eliminan contactos.',
      },
      {
        q: '¿Puede verificar dominios catch-all?',
        a: 'Sí. Es el motivo principal para usar Giggal.ai con HubSpot. Muchos verificadores devuelven arriesgado o desconocido en los dominios catch-all. Giggal.ai sigue comprobando y devuelve entregable o no entregable en la mayoría de ellos.',
      },
      {
        q: '¿La validación de correo es lo mismo que la verificación de correo?',
        a: 'En la práctica, sí. Los dos términos describen la comprobación de si una dirección puede recibir correo. Giggal.ai revisa el formato, los servidores de correo del dominio y el buzón, y después escribe un solo resultado en el contacto de HubSpot.',
      },
      {
        q: '¿Cuánto cuesta?',
        a: 'Un crédito por dirección, y las comprobaciones catch-all están incluidas. Las cuentas nuevas empiezan con 1.000 créditos gratis, y el precio por dirección baja a medida que sube el volumen.',
      },
      {
        q: '¿Cómo uso los resultados en HubSpot?',
        a: 'Filtra los contactos o crea una lista activa a partir de Giggal email status. Una configuración habitual es una lista activa de contactos Deliverable como audiencia de envío y una lista de exclusión de contactos Undeliverable.',
      },
      {
        q: '¿Cómo desconecto la integración?',
        a: 'Abre la pestaña Integration en Giggal.ai, haz clic en el icono de ajustes de la tarjeta de HubSpot y elige Disconnect. También puedes quitar la app en HubSpot, en Settings, Integrations, Connected Apps. Los resultados ya escritos se quedan en tus contactos.',
      },
    ],
    howToName: 'Cómo verificar contactos de HubSpot con Giggal.ai',
    howToDescription:
      'Conecta Giggal.ai a HubSpot, verifica una lista de contactos y lee el resultado en cinco propiedades de cada contacto.',
    cta: {
      title: 'Limpia tus contactos de HubSpot',
      text: 'Conecta una vez y cada contacto de tu CRM recibe un resultado de verificación por el que puedes filtrar. Empiezas con 1.000 créditos gratis, sin tarjeta.',
      primary: 'Empieza gratis',
      secondary: 'Ver todas las integraciones',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Verificar correos en Claude y ChatGPT por MCP | Giggal.ai',
      description:
        'Conecta Giggal.ai a Claude, ChatGPT, Cursor y VS Code por MCP y verifica correos dentro del chat. Las direcciones catch-all reciben válido o no válido.',
      ogTitle: 'Servidor MCP para verificar correos en Claude y ChatGPT',
      ogDescription:
        'Giggal.ai tiene un servidor MCP remoto para que Claude, ChatGPT, Cursor y VS Code verifiquen direcciones de correo. Comprobaciones catch-all incluidas.',
    },
    crumb: 'MCP',
    h1Lead: 'Un servidor MCP de verificación de correo para',
    h1Accent: 'Claude y ChatGPT',
    intro:
      'Giggal.ai tiene un servidor MCP remoto. Conéctalo a Claude, ChatGPT, Cursor o VS Code, y tu asistente de IA puede funcionar como [verificador de correo](/es/validar-correo). Pídele que compruebe una dirección o una lista, y te responde dentro del chat.',
    urlLabel: 'URL MCP',
    points: [
      'Claude y ChatGPT inician sesión con OAuth',
      'Los editores de código usan tu clave de API',
      'Comprobaciones catch-all incluidas',
    ],
    setupTitle: 'Configura el servidor MCP en tu herramienta de IA',
    setupSubtitle:
      'Elige tu herramienta para ver los pasos. Claude y ChatGPT se conectan con un inicio de sesión. Los editores de código leen un archivo de configuración.',
    toolsTitle: 'Qué puede hacer el asistente de IA',
    toolsIntro:
      'El servidor le da tres herramientas a tu asistente. Lo pides con tus propias palabras y el asistente elige la herramienta correcta.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Verificar direcciones',
        body: 'Comprueba un correo o una lista. Cada dirección recibe válido o no válido, también las de dominios catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Ver los resultados completos',
        body: 'Obtiene los detalles de una comprobación anterior: estado, códigos de motivo y puntuación de entregabilidad de cada dirección.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Consultar tus créditos',
        body: 'Pregunta cuántos créditos te quedan antes de empezar una comprobación grande.',
      },
    ],
    whyTitle: 'Por qué importa el resultado catch-all en un chat',
    why: [
      'Cerca del 30 % de una lista B2B está en dominios catch-all. Estos dominios aceptan correo para cualquier dirección, exista o no el buzón. Muchos verificadores marcan esas direcciones como arriesgadas, lo que significa que no pudieron saberlo.',
      'En un chat, esa etiqueta no sirve de nada. El asistente repite lo que recibe, así que un tercio de tu lista vuelve como dudosa. Giggal.ai sigue comprobando esas direcciones y devuelve válido o no válido. Hace lo mismo con los buzones protegidos por 15 gateways de seguridad de correo concretos, entre ellos Proofpoint, Mimecast y Barracuda.',
      'Para ver ejemplos de instrucciones, lee [cómo verificar correos dentro de Claude y ChatGPT](/es/blog/verificar-correos-en-claude-y-chatgpt). El servidor MCP usa el mismo motor que la [API de verificación de correo](/email-verification-api).',
    ],
    faqTitle: 'Preguntas frecuentes sobre el servidor MCP de verificación de correo',
    faq: [
      {
        q: '¿Claude puede verificar direcciones de correo?',
        a: `Sí, cuando conectas una herramienta de verificación de correo por MCP. Añade el servidor de Giggal.ai en ${MCP_URL} como conector personalizado en Claude, o con el comando claude mcp add en Claude Code. Después pide, por ejemplo, "verifica estas once direcciones y dime cuáles van a rebotar". Claude llama a la herramienta verify_emails y muestra el resultado en el chat.`,
      },
      {
        q: '¿ChatGPT puede verificar direcciones de correo?',
        a: 'Sí, en los planes de ChatGPT que permiten conectores personalizados. Añade Giggal.ai como plugin personalizado con la URL del servidor MCP e inicia sesión con OAuth. Cualquier cliente compatible con MCP remoto puede usar el mismo servidor, por ejemplo Cursor, VS Code, Windsurf, Cline y Zed.',
      },
      {
        q: '¿Qué puede hacer el asistente de IA?',
        a: 'Tres cosas. verify_emails comprueba una dirección o una lista. get_verification_details devuelve el resultado completo de cada dirección, con el estado y los códigos de motivo. get_credit_balance muestra cuántos créditos te quedan.',
      },
      {
        q: '¿Cómo trata las direcciones catch-all?',
        a: 'Igual que el resto de Giggal.ai. Muchos verificadores marcan las direcciones catch-all como arriesgadas. Giggal.ai devuelve válido o no válido para ellas, y también para los buzones protegidos por 15 gateways de seguridad de correo concretos, como Proofpoint, Mimecast y Barracuda.',
      },
      {
        q: '¿Necesito una clave de API?',
        a: 'No para Claude ni para ChatGPT. Los dos se conectan con OAuth, así que inicias sesión con tu cuenta de Giggal.ai. Los editores de código como Claude Code, Cursor y VS Code usan una clave de API, que encuentras en la pestaña Developer API de la app de Giggal.ai.',
      },
      {
        q: '¿Verificar por MCP cuesta más?',
        a: 'No. Usa los mismos créditos que el panel y la API REST: 1 crédito por dirección, catch-all incluido. Las cuentas nuevas reciben 1.000 créditos gratis sin tarjeta, y los créditos no caducan.',
      },
      {
        q: '¿Conviene limpiar una lista grande de esta forma?',
        a: 'No. MCP funciona mejor cuando la verificación es un paso dentro de una tarea, por ejemplo comprobar una docena de contactos antes de escribir un correo de prospección. Para decenas de miles de direcciones, usa la carga en bloque de la app o la API REST.',
      },
    ],
    howToName: 'Conecta la verificación de correo de Giggal.ai a Claude o ChatGPT por MCP',
    howToDescription:
      'Cuatro pasos para verificar direcciones de correo, catch-all incluidos, en Claude, ChatGPT, Cursor o VS Code con el servidor MCP de Giggal.ai.',
    setupSteps: [
      {
        name: 'Crea una cuenta de Giggal.ai',
        text: 'Regístrate en Giggal.ai. Las cuentas nuevas incluyen 1.000 créditos de verificación gratis, sin tarjeta.',
      },
      {
        name: 'Añade el servidor MCP a tu cliente',
        text: `Usa la URL del servidor ${MCP_URL}. En Claude, añádelo en Settings, luego Connectors. En ChatGPT, añádelo como plugin personalizado. Los editores de código leen un archivo de configuración JSON, que esta página muestra para cada editor.`,
      },
      {
        name: 'Inicia sesión o añade tu clave de API',
        text: 'Claude y ChatGPT te piden iniciar sesión en Giggal.ai y hacer clic en Allow. Los editores de código necesitan la clave de API de la pestaña Developer API de la app.',
      },
      {
        name: 'Pide al asistente que verifique una dirección',
        text: 'Pídelo con tus propias palabras, por ejemplo "verifica hola@ejemplo.com y dime si es un buzón real". El asistente llama a verify_emails y muestra el resultado.',
      },
    ],
    ctaTitle: 'Conecta Giggal.ai a tu asistente de IA',
    ctaText:
      'Empieza con 1.000 créditos de verificación gratis, sin tarjeta. Añade la URL MCP a Claude, ChatGPT o tu editor de código.',
    ctaButton: 'Empieza gratis',
  },
}
