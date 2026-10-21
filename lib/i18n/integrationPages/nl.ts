import type { IntegrationPagesContent } from './types'

// Dutch copy for the integration pages, translated from the French copy.
// Keyword plan (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md): the checker
// keyword "mailadres controleren" links to /nl/mailadres-controleren;
// "e-mailverificatie" carries the rest. Product UI labels (Zapier, n8n,
// HubSpot, Giggal.ai dashboard), property names, status values, scopes, tool
// names and code stay in English, as the apps show them. Register "je".
// Numbers 1.000 and 8.000.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Marketingautomatisering',
  'Email Marketing': 'E-mailmarketing',
  CRM: 'CRM',
  Ecommerce: 'E-commerce',
  'Sales & Outreach': 'Sales en outreach',
  'Forms & Surveys': 'Formulieren en enquêtes',
  'Website & Popups': 'Website en pop-ups',
  'Spreadsheets & Data': 'Spreadsheets en data',
  Support: 'Klantenservice',
  Payments: 'Betalingen',
  Automation: 'Automatisering',
  Spreadsheets: 'Spreadsheets',
  Forms: 'Formulieren',
  'AI & Agents': 'AI en agents',
  Developer: 'Ontwikkelaars',
}

export const NL: IntegrationPagesContent = {
  common: {
    locale: 'nl',
    hubPath: '/nl/integraties',
    hubCrumb: 'Integraties',
    checkerPath: '/nl/mailadres-controleren',
    signupLabel: 'Begin met 1.000 gratis credits',
    getStarted: 'Gratis beginnen',
    allIntegrations: 'Alle integraties bekijken',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integraties voor e-mailverificatie in je tools | Giggal.ai',
      description:
        'Integraties voor e-mailverificatie met HubSpot, Zapier, n8n, Mailchimp, Claude en ChatGPT. Controleer e-mailadressen in je eigen tools, ook catch-all.',
      ogTitle: 'Integraties voor e-mailverificatie: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Koppel de e-mailverificatie van Giggal.ai aan HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude en ChatGPT.',
    },
    h1Lead: 'Integraties voor e-mailverificatie in',
    h1Accent: 'de tools die je al gebruikt',
    intro:
      'Met Giggal.ai kun je een [mailadres controleren](/nl/mailadres-controleren) vanuit je CRM, je e-mailplatform, je spreadsheets en je AI-assistent. Elke controle laat zien of de mailbox bestaat. Catch-all-adressen krijgen ook een resultaat: geldig of ongeldig.',
    waysTitle: 'Vier manieren om e-mailverificatie aan je tools toe te voegen',
    waysIntro:
      'Kies de manier die past bij hoe je werkt. Elke manier gebruikt dezelfde credits en geeft hetzelfde resultaat.',
    ways: [
      {
        label: 'Direct',
        title: 'Directe integraties',
        text: 'Koppel [HubSpot](/nl/integraties/hubspot), Mailchimp, SendGrid en andere platforms vanuit het dashboard van Giggal.ai. Importeer een lijst, controleer hem en stuur de opgeschoonde lijst terug.',
      },
      {
        label: 'Automatisering',
        title: 'Zapier en n8n',
        text: 'Controleer elk nieuw contact, elk formulierantwoord of elke nieuwe rij in een spreadsheet zodra die binnenkomt. Gebruik de Giggal.ai-app op [Zapier](/nl/integraties/zapier) of de officiële node voor [n8n](/nl/integraties/n8n).',
      },
      {
        label: 'MCP',
        title: 'AI-assistenten',
        text: 'Voeg de [MCP-server van Giggal.ai](/nl/mcp) toe aan Claude, ChatGPT, Cursor of VS Code. Vraag de assistent daarna in de chat om adressen te controleren.',
      },
      {
        label: 'API',
        title: 'REST API',
        text: 'Stuur losse controles of bulkcontroles vanuit je eigen code. De resultaten komen terug als JSON. De [API-documentatie](/nl/api-documentatie) beschrijft elk endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Zoek een integratie…',
      searchAria: 'Zoek een integratie',
      connectionAria: 'Filter op soort koppeling',
      connection: { all: 'Alle', direct: 'Direct', zapier: 'Via Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filter op categorie',
      allCategories: 'Alle categorieën',
      categories: CATEGORIES,
      prevPage: 'Vorige pagina',
      nextPage: 'Volgende pagina',
      pagination: 'Paginanavigatie',
      showing: 'Integraties {from} tot {to} van {total}',
      noMatchTitle: 'Geen integratie gevonden voor je zoekopdracht.',
      noMatchText:
        'Elke tool die een HTTP-verzoek kan sturen, kan de [REST API](/nl/api-documentatie) gebruiken.',
      descriptions: {
        zapier:
          'Controleer elk nieuw e-mailadres in realtime in meer dan 8.000 apps, ook catch-all. Zonder code.',
        n8n:
          'Controleer één adres of een hele lijst in je n8n-workflows met de officiële community node van Giggal.ai.',
        claude:
          'Voeg de MCP-server van Giggal.ai toe aan Claude en controleer e-mailadressen in de chat.',
        chatgpt:
          'Voeg de MCP-server van Giggal.ai toe aan ChatGPT en controleer e-mailadressen in de chat.',
        clay:
          'Controleer de e-mailadressen van je prospects in Clay-tabellen via de API van Giggal.ai, ook catch-all.',
        'rest-api':
          'REST API voor losse controles, bulkcontroles en catch-all-controles. Bouw de integratie die je nodig hebt.',
        mailchimp:
          'Importeer een Mailchimp-audience, controleer die en houd alleen de bezorgbare abonnees.',
        mailgun:
          'Koppel Mailgun en controleer je verzendlijsten voor elke campagne.',
        mailjet:
          'Importeer je contactlijsten uit Mailjet in Giggal.ai en controleer ze, ook catch-all.',
        sendgrid:
          'Controleer je SendGrid-contacten in bulk om je afzenderreputatie te beschermen.',
        activecampaign:
          'Importeer je ActiveCampaign-contacten, controleer ze en verwijder slechte adressen voordat je verstuurt.',
        'campaign-monitor':
          'Koppel Campaign Monitor en controleer elke abonneelijst in Giggal.ai.',
        getresponse:
          'Controleer je GetResponse-lijsten om bounces te verminderen, ook op catch-all-domeinen.',
        aweber:
          'Importeer je AWeber-abonnees, controleer ze en stuur een schone lijst terug.',
        mailerlite:
          'Koppel MailerLite en controleer je abonneelijsten voor je volgende campagne.',
        drip:
          'Controleer je Drip-contacten in bulk, zodat je automatische e-mails echte mailboxen bereiken.',
        'elastic-email':
          'Importeer je Elastic Email-lijsten en controleer ze, ook catch-all-adressen en adressen achter een beveiligingsgateway.',
        'reply-io':
          'Controleer de e-mailadressen van je prospects voordat je een Reply.io-sequentie start, zodat je echte mailboxen mailt.',
        'zoho-crm':
          'Importeer je contacten en leads uit Zoho CRM, controleer ze en houd je CRM-gegevens schoon.',
        'google-sheets':
          'Controleer elke nieuwe rij zodra die wordt toegevoegd en schrijf het resultaat in je spreadsheet.',
        hubspot:
          'Controleer de contacten en lijsten in je HubSpot CRM en filter daarna in HubSpot op het resultaat.',
        salesforce:
          'Controleer het e-mailadres van elke nieuwe Salesforce-lead zodra die wordt aangemaakt.',
        typeform:
          'Controleer de e-mailadressen in Typeform-antwoorden voordat ze in je andere tools terechtkomen.',
        slack:
          'Plaats verificatieresultaten en meldingen over lijsten in een Slack-kanaal.',
      },
      zapierAppDescription:
        'Controleer via Zapier in realtime de e-mailadressen die binnenkomen in {name}.',
      logoAlt: 'Integratie voor e-mailverificatie van {name} met Giggal.ai',
    },
    appListTitle: 'Alle ondersteunde Zapier-apps',
    appListIntro: '{count} apps koppelen via Zapier met Giggal.ai. Elke app heeft een eigen handleiding (in het Engels).',
    apiTitle: 'Staat je tool er niet bij?',
    apiText:
      'Elke tool die een HTTP-verzoek kan sturen, kan e-mailadressen controleren met Giggal.ai. Gebruik de [API voor e-mailverificatie](/email-verification-api) (in het Engels) voor losse controles en bulkcontroles, of koppel via Zapier.',
    apiCta: 'API-documentatie',
    apiHref: '/nl/api-documentatie',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier: e-mailadressen controleren in 8.000+ apps | Giggal.ai',
      description:
        'Controleer elk e-mailadres in Zapier met Giggal.ai, in realtime. Catch-all-adressen krijgen een resultaat: geldig of ongeldig. Zonder code.',
      ogTitle: 'Zapier: e-mailadressen controleren in meer dan 8.000 apps',
      ogDescription:
        'Controleer elk nieuw e-mailadres in Zapier met Giggal.ai. Werkt met HubSpot, Google Sheets, Salesforce, Mailchimp en meer dan 8.000 andere apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'E-mailverificatie met Zapier in',
    h1Accent: 'meer dan 8.000 apps',
    intro:
      'Voeg Giggal.ai toe aan elke Zap om een [mailadres te controleren](/nl/mailadres-controleren) zodra het binnenkomt. Dat werkt met formulieren, CRM’s, spreadsheets en e-mailplatforms. Catch-all-adressen krijgen een resultaat: geldig of ongeldig. Je hoeft geen code te schrijven.',
    viewOnZapier: 'Bekijken op Zapier',
    tabsTitle: 'Zapier-workflows en handleiding',
    tabsIntro:
      'Begin met een veelgebruikte workflow, of volg de handleiding om in ongeveer vijf minuten je eigen Zap te maken.',
    tabs: {
      cardSubtitle: 'Koppel Giggal.ai aan meer dan 8.000 apps',
      tryFree: 'Gratis proberen',
      actionsTitle: '4 Zapier-acties',
      actions: [
        { name: 'Verify Email', description: 'Controleert een e-mailadres in realtime, ook catch-all.' },
        { name: 'Start Bulk Verification', description: 'Stuurt een lijst met adressen. Geeft een taak-ID terug die de volgende stappen kunnen gebruiken.' },
        { name: 'Get Bulk Verification Results', description: 'Haalt de resultaten van een bulktaak op zodra die klaar is.' },
        { name: 'Get Credit Balance', description: 'Laat zien hoeveel Giggal.ai-credits je nog hebt.' },
      ],
      workflowsTab: 'Workflows',
      guideTab: 'Handleiding',
      workflows: [
        {
          title: 'Nieuwe HubSpot-contacten controleren',
          description:
            'Als er in HubSpot een contact wordt aangemaakt, controleert Giggal.ai het e-mailadres en schrijft het resultaat in een eigenschap van het contact.',
        },
        {
          title: 'Nieuwe rijen in Google Sheets controleren',
          description:
            'Elke nieuwe rij wordt gecontroleerd zodra die wordt toegevoegd. De status, het risiconiveau en het catch-all-resultaat komen in de rij.',
        },
        {
          title: 'Nieuwe Salesforce-leads controleren',
          description:
            'Elke nieuwe lead wordt gecontroleerd voordat een verkoper ermee aan de slag gaat. Niemand mailt naar een mailbox die niet bestaat.',
        },
        {
          title: 'Aanmeldingen in Mailchimp controleren',
          description:
            'Controleer elke nieuwe abonnee bij de aanmelding en voeg alleen bezorgbare adressen toe aan je Mailchimp-audience.',
        },
        {
          title: 'Typeform-antwoorden controleren',
          description:
            'Vind verkeerd getypte adressen en wegwerpadressen in formulierantwoorden, voordat ze in je andere tools terechtkomen.',
        },
        {
          title: 'Resultaten naar Slack sturen',
          description:
            'Plaats een bericht in Slack als een controle klaar is, of als een lead op een catch-all-domein als geldig is bevestigd.',
        },
      ],
      workflowCta: 'Instellen op Zapier',
      guideTitle: 'Giggal.ai koppelen aan Zapier',
      guideIntro:
        'Het instellen duurt ongeveer vijf minuten. Het voorbeeld hieronder controleert elke nieuwe rij in een Google Sheets-spreadsheet.',
      steps: [
        {
          title: 'Kies de app die de Zap start',
          text: 'Maak een Zap en kies de app die hem start. Elke app op Zapier werkt, dat zijn er meer dan 8.000. Kies in dit voorbeeld Google Sheets en het event New or Updated Spreadsheet Row. Koppel je account en klik op Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Trigger in Zapier instellen met Google Sheets en het event New or Updated Spreadsheet Row',
        },
        {
          title: 'Voeg Giggal.ai toe als actiestap',
          text: 'Zoek in de actiestap naar Giggal.ai in de lijst met apps en selecteer het.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Giggal.ai zoeken in de lijst met apps van Zapier',
        },
        {
          title: 'Kies een actie-event',
          text: 'Giggal.ai heeft vier acties: Verify Email, Start Bulk Verification, Get Bulk Verification Results en Get Credit Balance. Kies voor dit voorbeeld Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'De vier actie-events van Giggal.ai in de lijst met events van Zapier',
        },
        {
          title: 'Koppel je Giggal.ai-account',
          text: 'De eerste keer vraagt Zapier om je API-sleutel. Open in het dashboard van Giggal.ai het tabblad Developer API en klik op Create API Key. Plak de sleutel in Zapier en klik op Connect. Nieuwe accounts krijgen 1.000 gratis credits, zonder creditcard.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Het Giggal.ai-account koppelen aan Zapier met een API-sleutel',
        },
        {
          title: 'Koppel het e-mailveld en gebruik het resultaat',
          text: 'Koppel het veld Email aan de kolom met het adres en start een test. Giggal.ai geeft de status, het risiconiveau, de score en het catch-all-resultaat terug. Voeg na deze stap filters of paden (Filter, Paths) van Zapier toe. Schrijf bijvoorbeeld bezorgbare adressen in de spreadsheet en zet ongeldige adressen in een ander tabblad.',
        },
      ],
      help: 'Kom je niet verder bij een stap? [Neem contact op met ons team](/nl/contact) of lees de [API-documentatie](/nl/api-documentatie) voor de volledige opbouw van het antwoord.',
    },
    why: [
      {
        title: 'Een checker voor catch-all-adressen in Zapier',
        text: 'Veel tools markeren catch-all-adressen als "riskant" en stoppen daar. Op een B2B-lijst kan dat ongeveer 30% van de adressen zijn. Giggal.ai controleert ze grondiger en geeft geldig of ongeldig terug in je Zap.',
      },
      {
        title: 'Controle op het moment van invoer',
        text: 'Leads worden gecontroleerd zodra ze binnenkomen via een formulier, een CRM of een spreadsheet. Slechte adressen komen nooit in je lijsten, en je hoeft later minder op te schonen.',
      },
      {
        title: 'Resultaten die je in Zapier-filters kunt gebruiken',
        text: 'Elke controle geeft een status, een risiconiveau, een score voor bezorgbaarheid en een catch-all-resultaat. Gebruik ze in de filters en paden van Zapier om elke lead naar de juiste plek te sturen.',
      },
    ],
    appsTitle: 'Controleer de e-mailadressen uit al deze apps',
    appsIntro: 'Elke app hieronder heeft een eigen handleiding voor e-mailverificatie via Zapier (in het Engels).',
    categories: CATEGORIES,
    faqTitle: 'Veelgestelde vragen over e-mailverificatie met Zapier',
    faq: [
      {
        q: 'Hoe werkt de Zapier-integratie van Giggal.ai?',
        a: 'Je voegt een stap met Giggal.ai toe aan een Zap. Als de trigger afgaat, bijvoorbeeld bij een nieuw CRM-contact of een formulierantwoord, stuurt Zapier het e-mailadres naar Giggal.ai. Giggal.ai controleert of de mailbox bestaat en geeft het resultaat door aan de volgende stap. Je hebt geen code nodig.',
      },
      {
        q: 'Kan Zapier catch-all-adressen controleren?',
        a: 'Ja, met Giggal.ai als controlestap. De meeste tools geven "riskant" of "onbekend" terug voor catch-all-domeinen. Giggal.ai doet extra controles op deze adressen en geeft geldig of ongeldig terug, met een score.',
      },
      {
        q: 'Welke apps kan ik koppelen?',
        a: 'Alle apps op Zapier, waaronder HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform en Slack. Staat een app op Zapier, dan kan die adressen naar Giggal.ai sturen.',
      },
      {
        q: 'Hoeveel credits kost een controle via Zapier?',
        a: 'Eén credit per e-mailadres, net als in het dashboard of via de API. Een catch-all-controle kost dezelfde credit. Nieuwe accounts krijgen 1.000 gratis credits, zonder creditcard.',
      },
      {
        q: 'Moet ik in realtime of in bulk controleren?',
        a: 'De meeste teams doen allebei. Controle in realtime in Zapier houdt slechte adressen tegen bij de invoer. Bulkcontrole schoont de lijsten op die je al hebt, in het dashboard of met de actie Start Bulk Verification.',
      },
    ],
    howToName: 'Een e-mailadres controleren in Zapier met Giggal.ai',
    howToDescription:
      'Stel e-mailverificatie in, ook voor catch-all-adressen, in elke workflow in Zapier.',
    cta: {
      title: 'Controleer elk nieuw e-mailadres in Zapier',
      text: 'Maak je eerste Zap voor e-mailverificatie in ongeveer vijf minuten. Je krijgt 1.000 gratis credits, zonder creditcard, en de catch-all-controle zit erbij.',
      primary: 'Gratis beginnen',
      secondary: 'Alle integraties bekijken',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'E-mailverificatie in n8n: de officiële node | Giggal.ai',
      description:
        'Controleer e-mailadressen in n8n met de officiële community node van Giggal.ai. Eén adres of een hele lijst, ook catch-all. npm-pakket n8n-nodes-giggal.',
      ogTitle: 'E-mailverificatie in n8n: officiële community node',
      ogDescription:
        'Controleer één adres of een hele lijst in je n8n-workflows met de community node van Giggal.ai. Catch-all-adressen inbegrepen.',
    },
    crumb: 'n8n',
    h1Lead: 'E-mailverificatie in n8n met de',
    h1Accent: 'officiële node van Giggal.ai',
    intro:
      'Voeg Giggal.ai toe aan je n8n-workflows om in realtime een [mailadres te controleren](/nl/mailadres-controleren), of stuur een hele lijst als bulktaak. Catch-all-adressen krijgen een resultaat: geldig of ongeldig. Je installeert de node één keer vanuit npm.',
    viewOnNpm: 'Bekijken op npm',
    opsTitle: 'Wat de n8n-node doet',
    opsIntro:
      'De node heeft twee resources en vier operaties. Gebruik Email voor één adres en Job voor een lijst.',
    ops: [
      { name: 'Verify', detail: 'Controleert een e-mailadres in realtime, ook catch-all. 1 credit per controle.' },
      { name: 'Verify Batch', detail: 'Stuurt een hele lijst in één verzoek. Geeft een taak-ID terug die je workflow later kan opvragen.' },
      { name: 'Get Status', detail: 'Laat de voortgang van een bulktaak zien: aantal verwerkte adressen, percentage en eindtijd.' },
      { name: 'Get Results', detail: 'Haalt de afgeronde resultaten per pagina op, met een optioneel filter zoals deliverable of catch_all.' },
    ],
    installTitle: 'Installeer de node en controleer je eerste adres',
    installIntro:
      'Je hebt een n8n-instance nodig, in de cloud of op je eigen server, en een gratis Giggal.ai-account. Het instellen duurt ongeveer vijf minuten.',
    installSteps: [
      {
        title: 'Open Community nodes in de instellingen van n8n',
        text: 'Klik in n8n linksonder op het menu van je account en open Settings. Kies daarna Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'Het onderdeel Community nodes in het instellingenmenu van n8n',
      },
      {
        title: 'Installeer n8n-nodes-giggal',
        text: 'Klik op Install a community node. Vul `n8n-nodes-giggal` in bij npm Package Name, vink het vakje aan en klik op Install. De Giggal.ai-node staat daarna in je lijst met nodes.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Het pakket n8n-nodes-giggal installeren in het venster Install community nodes',
      },
      {
        title: 'Voeg de node toe en maak een credential aan',
        text: 'Voeg de Giggal.ai-node toe aan een workflow. Kies in de lijst Credential voor Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Een nieuwe Giggal.ai-credential aanmaken op de node in n8n',
      },
      {
        title: 'Plak je API-sleutel',
        text: 'Open in het dashboard van Giggal.ai het tabblad Developer API en klik op Create API Key. Plak de sleutel in het veld API Key en sla op. Alle Giggal.ai-nodes in je instance kunnen hem nu gebruiken. Nieuwe accounts krijgen 1.000 gratis credits, zonder creditcard.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'De API-sleutel van Giggal.ai toevoegen aan de credential in n8n',
      },
      {
        title: 'Controleer je eerste adres',
        text: 'Zet Resource op Email en Operation op Verify. Koppel het veld Email Address aan je data met een expressie zoals `{{ $json.email }}` en klik op Execute step. De uitvoer toont de status, het risiconiveau, de score voor bezorgbaarheid en de catch-all-details.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Een e-mailadres controleren in n8n en de uitvoer bekijken',
      },
    ],
    batchTitle: 'Een hele lijst controleren in n8n',
    batchIntro:
      'Bij meer dan een paar adressen gebruik je de resource Job. Dat gaat zo: je stuurt de lijst, je vraagt de status op en je haalt de resultaten op.',
    batchSteps: [
      {
        title: 'Stuur de lijst met Verify Batch',
        text: 'Zet Operation op Verify Batch en geef bij Email Field aan in welke eigenschap de adressen staan. Je kunt de taak een naam geven, zodat je hem later in het dashboard terugvindt. Laat Enable Catch-All Rescue aan staan, zodat catch-all-adressen grondiger worden gecontroleerd. De node geeft meteen een taak-ID terug en de controle loopt op de achtergrond.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Een lijst e-mailadressen ter controle sturen met de Giggal.ai-node in n8n',
      },
      {
        title: 'Volg de voortgang met Get Status',
        text: 'Zet Resource op Job en Operation op Get Status, en geef de taak-ID uit de vorige stap door. Zet een Wait-node tussen twee controles, zodat de lus de API niet te vaak opvraagt.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'De voortgang van een bulktaak volgen met de operatie Get Status in n8n',
      },
      {
        title: 'Haal de resultaten op met Get Results',
        text: 'Als de status completed is, start je Get Results met dezelfde taak-ID. Je krijgt één item per e-mailadres, met de status, het risiconiveau en de score. Gebruik het veld Status Filter om alleen de regels deliverable, undeliverable of catch_all op te halen.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'De resultaten van een afgeronde bulkcontrole ophalen in n8n',
      },
    ],
    calloutTitle: 'Catch-all-adressen en adressen achter een gateway krijgen geldig of ongeldig',
    calloutText:
      'Veel tools geven "onbekend" terug voor adressen achter een secure email gateway, en "riskant" voor catch-all-domeinen. Giggal.ai [controleert adressen achter deze gateways](/seg-email-verification) (in het Engels), zoals Proofpoint en Mimecast. Het doet ook extra controles op catch-all-domeinen. [Bekijk hoe catch-all-verificatie werkt](/nl/catch-all-verificatie).',
    faqTitle: 'Veelgestelde vragen over e-mailverificatie in n8n',
    faq: [
      {
        q: 'Werkt de Giggal.ai-node op n8n Cloud?',
        a: 'Ja. Installeer hem via Settings en dan Community nodes, en voeg je API-sleutel toe. Hij werkt op dezelfde manier op n8n Cloud en op instances op je eigen server.',
      },
      {
        q: 'Is de community node veilig om te installeren?',
        a: 'Het team van Giggal.ai publiceert het pakket als n8n-nodes-giggal op npm, en iedereen kan de broncode lezen. De node praat alleen met de API van Giggal.ai, met de credential die je hebt ingesteld.',
      },
      {
        q: 'Kan n8n catch-all-adressen controleren?',
        a: 'Ja, met de Giggal.ai-node. Losse controles verwerken catch-all-domeinen automatisch. Bulktaken doen dat ook als Enable Catch-All Rescue aan staat. Je krijgt geldig of ongeldig met een score, en geen label "riskant".',
      },
      {
        q: 'Wat kost e-mailverificatie in n8n?',
        a: 'Eén credit per e-mailadres, net als overal in Giggal.ai. Een catch-all-controle kost dezelfde credit. Nieuwe accounts beginnen met 1.000 gratis credits, zonder creditcard.',
      },
      {
        q: 'Wat geeft de node terug?',
        a: 'Elk e-mailadres krijgt een status, een risiconiveau en een score voor bezorgbaarheid. De node geeft ook kenmerken terug voor gratis adressen, rol-adressen en wegwerpadressen, details van de mailserver en het catch-all-resultaat. De uitvoer is standaard n8n-JSON die je kunt filteren en mappen.',
      },
    ],
    howToName: 'Een e-mailadres controleren in n8n met de community node van Giggal.ai',
    howToDescription:
      'Installeer n8n-nodes-giggal, voeg je API-sleutel toe en controleer één adres of een hele lijst in je n8n-workflows.',
    cta: {
      title: 'Voeg e-mailverificatie toe aan je n8n-workflows',
      text: 'Installeer n8n-nodes-giggal, plak je API-sleutel en laat geen dode adressen meer door je workflows gaan. Je krijgt 1.000 gratis credits, zonder creditcard.',
      primary: 'Gratis beginnen',
      secondary: 'Alle integraties bekijken',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot: e-mailadressen verifiëren en valideren | Giggal.ai',
      description:
        'Controleer de e-mailadressen in HubSpot met Giggal.ai. Valideer de contacten en lijsten in je CRM, krijg een resultaat voor catch-all en filter daarop.',
      ogTitle: 'HubSpot: e-mailadressen verifiëren en valideren',
      ogDescription:
        'Koppel Giggal.ai aan HubSpot, controleer je contacten en lijsten, en filter in je CRM op het resultaat.',
    },
    crumb: 'HubSpot',
    h1Lead: 'E-mailverificatie in HubSpot',
    h1Accent: 'en validatie van je contacten',
    intro:
      'Controleer de contacten die al in je HubSpot CRM staan. Koppel je account één keer, kies een lijst, en elk contact krijgt een resultaat in zijn record. Catch-all-adressen krijgen bezorgbaar of niet bezorgbaar, en geen "riskant". Je hoeft niets te exporteren en opnieuw te importeren.',
    openDashboard: 'Dashboard openen',
    capsTitle: 'Wat de HubSpot-integratie doet',
    capsIntro: 'Vier stappen, allemaal in HubSpot en Giggal.ai.',
    caps: [
      {
        name: 'Contacten of een lijst importeren',
        detail: 'Kies All contacts of een willekeurige lijst in HubSpot. Je ziet eerst het aantal e-mailadressen, dus je weet hoeveel credits het kost voordat je begint.',
      },
      {
        name: 'Elk adres controleren',
        detail: 'Van elke mailbox wordt gecontroleerd of hij bestaat. Catch-all-domeinen krijgen een duidelijk resultaat, en geen "riskant". 1 credit per adres.',
      },
      {
        name: 'Resultaten in HubSpot schrijven',
        detail: 'Bij elk contact worden vijf Giggal-eigenschappen ingevuld. Het resultaat blijft in het record staan.',
      },
      {
        name: 'Filteren en lijsten maken',
        detail: 'Gebruik Giggal email status in filters en actieve lijsten in HubSpot. Verwijder slechte adressen voor je volgende verzending.',
      },
    ],
    stepsTitle: 'HubSpot koppelen en je eerste lijst controleren',
    stepsIntro:
      'Het zijn vier stappen en ze duren ongeveer twee minuten. Je hebt een Giggal.ai-account nodig en in HubSpot het recht om apps te installeren en eigenschappen van contacten te wijzigen.',
    steps: [
      {
        title: 'Open het tabblad Integration in Giggal.ai',
        text: 'Log in bij Giggal.ai, ga naar Email Validation en open het tabblad Integration. Zoek de kaart van HubSpot en klik op Connect. Heb je nog geen account, dan duurt registreren een minuut en krijg je 1.000 gratis credits.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'De kaart van HubSpot en de knop Connect in het tabblad Integration van Giggal.ai',
      },
      {
        title: 'Keur de toegang goed in HubSpot',
        text: 'HubSpot toont een eigen scherm met alles waar Giggal.ai toegang toe krijgt: eigenschappen van contacten bekijken, contacten wijzigen, instellingen van contacteigenschappen wijzigen, contactlijsten bekijken en het account lezen dat de app installeert. Lees de lijst na en klik op Connect app. Je komt terug in Giggal.ai, en op de kaart van HubSpot staat nu Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Scherm in HubSpot om de toegang van de app Giggal Email Verifier goed te keuren',
      },
      {
        title: 'Importeer een contactlijst',
        text: 'Klik op Verify op de kaart van HubSpot om het venster Import from HubSpot te openen. Kies All contacts of een willekeurige lijst in je portal. Bij elke regel staat hoeveel e-mailadressen erin zitten, dus je weet de kosten voordat je begint. Klik op Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Venster Import from HubSpot met de contactlijsten en het aantal e-mailadressen',
      },
      {
        title: 'Controleer de lijst en synchroniseer de resultaten',
        text: 'Giggal.ai controleert elk adres en schrijft het resultaat in elk HubSpot-contact zodra het klaar is. De kaart van de taak toont de verdeling van de resultaten en een teller Synced to HubSpot. Klik op Sync to HubSpot om het schrijven op elk moment opnieuw te starten.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Afgeronde HubSpot-controle in Giggal.ai, met de resultaten gesynchroniseerd naar HubSpot',
      },
    ],
    calloutTitle: 'Waarom je een catch-all-checker gebruikt met HubSpot',
    calloutText:
      'Ongeveer 30% van een B2B-lijst staat op catch-all-domeinen. Veel tools geven deze contacten terug als "riskant", en daar kun je niets mee. Met Giggal.ai kun je een [mailadres controleren](/nl/mailadres-controleren), ook op een catch-all-domein, dankzij extra controles. Giggal.ai [controleert ook adressen achter een secure email gateway](/seg-email-verification) (in het Engels), zoals Proofpoint en Mimecast. De meeste van deze contacten komen terug als bezorgbaar of niet bezorgbaar. [Bekijk hoe catch-all-verificatie werkt](/nl/catch-all-verificatie).',
    propsTitle: 'De HubSpot-eigenschappen die Giggal.ai bij elk contact invult',
    propsIntro:
      'De vijf eigenschappen worden aangemaakt bij je eerste controle. Ze staan in een groep eigenschappen met de naam Giggal Email Verifier. Je bestaande HubSpot-eigenschappen worden niet gewijzigd.',
    propsHead: ['Eigenschap', 'Type', 'Wat het laat zien'],
    props: [
      ['Giggal email is valid', 'Selectievakje', 'Ja als bevestigd is dat de mailbox bestaat.'],
      ['Giggal email status', 'Keuzelijst', 'Deliverable, Undeliverable, Risky of Unknown.'],
      ['Giggal deliverability score', 'Getal', 'Mate van zekerheid van 0 tot 100.'],
      ['Giggal email detail', 'Tekst', 'Een korte reden voor het resultaat.'],
      ['Giggal verified at', 'Datum', 'Datum van de laatste controle van het adres.'],
    ],
    scopesTitle: 'Toegang in HubSpot en gegevens',
    scopesIntro: 'Giggal.ai vraagt vier soorten toegang (scopes) in HubSpot. Elke scope heeft één doel.',
    scopes: [
      ['crm.objects.contacts.read', 'Het e-mailadres lezen van de contacten die je wilt laten controleren.'],
      ['crm.objects.contacts.write', 'Het resultaat van de controle in die contacten schrijven.'],
      ['crm.schemas.contacts.write', 'De vijf Giggal-eigenschappen aanmaken bij het eerste gebruik.'],
      ['crm.lists.read', 'Je contactlijsten tonen, zodat je er een kunt kiezen om te controleren.'],
    ],
    scopesNote:
      'Giggal.ai leest alleen het e-mailadres van de contacten die je kiest. Het maakt geen contacten aan en verwijdert er geen. Het wijzigt geen eigenschappen buiten de vijf hierboven. Het stuurt nooit een e-mail naar de adressen die het controleert.',
    faqTitle: 'Veelgestelde vragen over e-mailverificatie in HubSpot',
    faq: [
      {
        q: 'Stuurt Giggal.ai e-mails naar mijn contacten?',
        a: 'Nee. De controle praat met de mailserver van de ontvanger en stopt voordat er een bericht wordt verstuurd. Je contacten ontvangen niets, niet in hun inbox en niet in hun spammap.',
      },
      {
        q: 'Wat verandert de integratie in mijn HubSpot-account?',
        a: 'Bij het eerste gebruik maakt de integratie een groep eigenschappen aan met de naam Giggal Email Verifier, met vijf eigen contacteigenschappen. Daarna schrijft ze resultaten alleen in die eigenschappen. Bestaande HubSpot-eigenschappen worden niet gewijzigd, en er worden geen contacten aangemaakt of verwijderd.',
      },
      {
        q: 'Kan de integratie catch-all-domeinen controleren?',
        a: 'Ja. Dat is de belangrijkste reden om Giggal.ai met HubSpot te gebruiken. Veel tools geven "riskant" of "onbekend" terug op catch-all-domeinen. Giggal.ai doet extra controles en geeft voor de meeste van deze adressen bezorgbaar of niet bezorgbaar terug.',
      },
      {
        q: 'Is e-mailvalidatie hetzelfde als e-mailverificatie?',
        a: 'In de praktijk wel. Beide woorden gaan over de controle die laat zien of een adres e-mail kan ontvangen. Giggal.ai controleert het formaat, de mailservers van het domein en de mailbox, en schrijft daarna één resultaat in het HubSpot-contact.',
      },
      {
        q: 'Wat kost het?',
        a: 'Eén credit per adres, en de catch-all-controle zit erbij. Nieuwe accounts beginnen met 1.000 gratis credits, en de prijs per adres daalt als het volume stijgt.',
      },
      {
        q: 'Hoe gebruik ik de resultaten in HubSpot?',
        a: 'Filter je contacten of maak een actieve lijst op Giggal email status. Een veelgebruikte opzet is een actieve lijst met Deliverable-contacten als verzendlijst, en een uitsluitingslijst met Undeliverable-contacten.',
      },
      {
        q: 'Hoe ontkoppel ik de integratie?',
        a: 'Open het tabblad Integration in Giggal.ai, klik op het instellingenicoon op de kaart van HubSpot en kies Disconnect. Je kunt de app ook verwijderen in HubSpot, onder Settings, Integrations, Connected Apps. De resultaten die al zijn geschreven, blijven bij je contacten staan.',
      },
    ],
    howToName: 'HubSpot-contacten controleren met Giggal.ai',
    howToDescription:
      'Koppel Giggal.ai aan HubSpot, controleer een contactlijst en lees het resultaat in vijf eigenschappen bij elk contact.',
    cta: {
      title: 'Schoon je HubSpot-contacten op',
      text: 'Koppel je account één keer, en elk contact in je CRM krijgt een verificatieresultaat waarop je kunt filteren. Je begint met 1.000 gratis credits, zonder creditcard.',
      primary: 'Gratis beginnen',
      secondary: 'Alle integraties bekijken',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'MCP-server voor e-mailverificatie: Claude, ChatGPT | Giggal.ai',
      description:
        'Koppel Giggal.ai via MCP aan Claude, ChatGPT, Cursor en VS Code en controleer een e-mailadres in de chat. Catch-all-adressen krijgen geldig of ongeldig.',
      ogTitle: 'MCP-server voor e-mailverificatie in Claude en ChatGPT',
      ogDescription:
        'Giggal.ai heeft een externe MCP-server. Claude, ChatGPT, Cursor en VS Code kunnen daarmee e-mailadressen controleren. Catch-all-controle inbegrepen.',
    },
    crumb: 'MCP',
    h1Lead: 'Een MCP-server voor e-mailverificatie in',
    h1Accent: 'Claude en ChatGPT',
    intro:
      'Giggal.ai heeft een externe MCP-server. Koppel die aan Claude, ChatGPT, Cursor of VS Code, en je AI-assistent kan voor jou een [mailadres controleren](/nl/mailadres-controleren). Vraag de assistent om een adres of een lijst te controleren, en hij antwoordt in de chat.',
    urlLabel: 'MCP-URL',
    directoryLabel: 'Giggal.ai toevoegen aan Claude',
    points: [
      'Claude en ChatGPT koppelen met OAuth',
      'Code-editors gebruiken je API-sleutel',
      'Catch-all-controle inbegrepen',
    ],
    setupTitle: 'Stel de MCP-server in je AI-tool in',
    setupSubtitle:
      'Kies je tool om de stappen te zien. Claude en ChatGPT koppelen met een login. Code-editors lezen een configuratiebestand.',
    toolsTitle: 'Wat de AI-assistent kan doen',
    toolsIntro:
      'De server geeft je assistent drie tools. Je stelt je vraag in gewone taal, en de assistent kiest de juiste tool.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Adressen controleren',
        body: 'Controleer één e-mailadres of een lijst. Elk adres krijgt geldig of ongeldig, ook op catch-all-domeinen.',
      },
      {
        tool: 'get_verification_details',
        title: 'Volledige resultaten opvragen',
        body: 'Vraag de details van een eerdere controle op: status, redencodes en score voor bezorgbaarheid per adres.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Je credits bekijken',
        body: 'Vraag hoeveel credits je nog hebt voordat je een grote controle start.',
      },
    ],
    whyTitle: 'Waarom het catch-all-resultaat telt in een chat',
    why: [
      'Ongeveer 30% van een B2B-lijst staat op catch-all-domeinen. Deze domeinen accepteren mail voor elk adres, of de mailbox nu bestaat of niet. Veel tools markeren deze adressen als "riskant". Dat betekent dat ze het niet konden vaststellen.',
      'In een chat helpt dat label niet. De assistent herhaalt wat hij krijgt, dus een derde van je lijst komt terug met een onzeker resultaat. Giggal.ai controleert deze adressen grondiger en geeft geldig of ongeldig terug. Het doet hetzelfde voor mailboxen achter een lijst van 15 secure email gateways, waaronder Proofpoint, Mimecast en Barracuda.',
      'Lees voor voorbeelden van vragen [e-mails verifiëren in Claude en ChatGPT](/nl/blog/e-mails-verifieren-in-claude-en-chatgpt). De MCP-server gebruikt dezelfde engine als de [API voor e-mailverificatie](/email-verification-api) (in het Engels).',
    ],
    faqTitle: 'Veelgestelde vragen over de MCP-server voor e-mailverificatie',
    faq: [
      {
        q: 'Kan Claude e-mailadressen controleren?',
        a: `Ja, zodra er via MCP een tool voor e-mailverificatie is gekoppeld. Voeg de server van Giggal.ai op ${MCP_URL} toe als eigen connector in Claude, of met de opdracht claude mcp add in Claude Code. Vraag daarna bijvoorbeeld: "controleer deze elf adressen en zeg welke gaan bouncen". Claude roept de tool verify_emails aan en toont het resultaat in de chat.`,
      },
      {
        q: 'Kan ChatGPT e-mailadressen controleren?',
        a: 'Ja, met de ChatGPT-abonnementen die eigen connectors toestaan. Voeg Giggal.ai toe als eigen plugin met de URL van de MCP-server en log in met OAuth. Elke client die een externe MCP-server ondersteunt, kan dezelfde server gebruiken, waaronder Cursor, VS Code, Windsurf, Cline en Zed.',
      },
      {
        q: 'Wat kan de AI-assistent doen?',
        a: 'Drie dingen. verify_emails controleert één adres of een lijst. get_verification_details geeft het volledige resultaat per adres, met de status en de redencodes. get_credit_balance laat zien hoeveel credits je nog hebt.',
      },
      {
        q: 'Hoe worden catch-all-adressen behandeld?',
        a: 'Net als in de rest van Giggal.ai. Veel tools markeren catch-all-adressen als "riskant". Giggal.ai geeft voor deze adressen geldig of ongeldig terug. Het doet hetzelfde voor mailboxen achter een lijst van 15 secure email gateways, zoals Proofpoint, Mimecast en Barracuda.',
      },
      {
        q: 'Heb ik een API-sleutel nodig?',
        a: 'Niet voor Claude en ChatGPT. Beide koppelen met OAuth, dus je logt in met je Giggal.ai-account. Code-editors zoals Claude Code, Cursor en VS Code gebruiken een API-sleutel. Die vind je in het tabblad Developer API van de Giggal.ai-app.',
      },
      {
        q: 'Kost een controle via MCP meer?',
        a: 'Nee. Een controle via MCP gebruikt dezelfde credits als het dashboard en de REST API: 1 credit per adres, ook catch-all. Nieuwe accounts krijgen 1.000 gratis credits, zonder creditcard, en de credits verlopen nooit.',
      },
      {
        q: 'Moet ik een grote lijst op deze manier opschonen?',
        a: 'Nee. MCP is het nuttigst als de controle één stap in een taak is, bijvoorbeeld een tiental contacten controleren voordat je een outreachbericht schrijft. Voor tienduizenden adressen gebruik je de bulkupload in de app of de REST API.',
      },
    ],
    howToName: 'E-mailverificatie van Giggal.ai via MCP koppelen aan Claude of ChatGPT',
    howToDescription:
      'Vier stappen om e-mailadressen te controleren, ook catch-all, in Claude, ChatGPT, Cursor of VS Code met de MCP-server van Giggal.ai.',
    setupSteps: [
      {
        name: 'Maak een Giggal.ai-account aan',
        text: 'Registreer je bij Giggal.ai. Nieuwe accounts krijgen 1.000 gratis verificatiecredits, zonder creditcard.',
      },
      {
        name: 'Voeg de MCP-server toe aan je client',
        text: `Gebruik de server-URL ${MCP_URL}. Voeg die in Claude toe onder Settings en dan Connectors. Voeg die in ChatGPT toe als eigen plugin. Code-editors lezen een JSON-configuratiebestand. Op deze pagina staat het voor elke editor.`,
      },
      {
        name: 'Log in of voeg je API-sleutel toe',
        text: 'Claude en ChatGPT vragen je om in te loggen bij Giggal.ai en op Allow te klikken. Code-editors hebben de API-sleutel uit het tabblad Developer API van de app nodig.',
      },
      {
        name: 'Vraag de assistent een adres te controleren',
        text: 'Stel je vraag in gewone taal, bijvoorbeeld: "controleer hello@example.com en zeg of dit een echte mailbox is". De assistent roept verify_emails aan en toont het resultaat.',
      },
    ],
    ctaTitle: 'Koppel Giggal.ai aan je AI-assistent',
    ctaText:
      'Begin met 1.000 gratis verificatiecredits, zonder creditcard. Voeg de MCP-URL toe aan Claude, ChatGPT of je code-editor.',
    ctaButton: 'Gratis beginnen',
  },
}
