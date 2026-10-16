import type { IntegrationPagesContent } from './types'

// Italian copy for the integration pages. Keyword targets (Ahrefs, Italy):
//   verifica email 27,000 / KD 0 (links to /it/verifica-email)
//   verifica indirizzo email 3,200, controllo email 1,400
// Register "tu", as in lib/i18n/it.ts. Product UI labels (Zapier, n8n and
// HubSpot actions, fields and menus), HubSpot property names and status
// values, scopes, tool names and package names stay in English, as the apps
// show them.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

export const IT: IntegrationPagesContent = {
  common: {
    locale: 'it',
    hubPath: '/it/integrazioni',
    hubCrumb: 'Integrazioni',
    checkerPath: '/it/verifica-email',
    signupLabel: 'Inizia gratis con 1.000 crediti',
    getStarted: 'Inizia gratis',
    allIntegrations: 'Vedi tutte le integrazioni',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integrazioni Verifica Email: HubSpot, Zapier, n8n | Giggal.ai',
      description:
        'Integrazioni per la verifica email con HubSpot, Zapier, n8n, Mailchimp, Claude e ChatGPT. Verifica gli indirizzi negli strumenti che usi, catch-all inclusi.',
      ogTitle: 'Integrazioni per la verifica email: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Collega la verifica email di Giggal.ai a HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude e ChatGPT.',
    },
    h1Lead: 'Integrazioni per la verifica email negli',
    h1Accent: 'strumenti che già usi',
    intro:
      "Giggal.ai è uno strumento di [verifica email](/it/verifica-email) che si collega al tuo CRM, alla piattaforma di email marketing, ai fogli di calcolo e al tuo assistente AI. Ogni controllo ti dice se la casella esiste. Anche gli indirizzi catch-all ricevono un risultato valida o non valida.",
    waysTitle: 'Quattro modi per aggiungere la verifica email ai tuoi strumenti',
    waysIntro:
      'Scegli il modo adatto al tuo lavoro. Ogni modo usa gli stessi crediti e restituisce lo stesso risultato.',
    ways: [
      {
        label: 'Diretta',
        title: 'Integrazioni dirette',
        text: 'Collega [HubSpot](/it/integrazioni/hubspot), Mailchimp, SendGrid e altre piattaforme dalla dashboard di Giggal.ai. Importa una lista, verificala e rimanda indietro la lista pulita.',
      },
      {
        label: 'Automazione',
        title: 'Zapier e n8n',
        text: "Verifica ogni nuovo contatto, risposta a un modulo o riga di un foglio appena arriva. Usa l'app Giggal.ai su [Zapier](/it/integrazioni/zapier) o il nodo ufficiale per [n8n](/it/integrazioni/n8n).",
      },
      {
        label: 'MCP',
        title: 'Assistenti AI',
        text: "Aggiungi il [server MCP di Giggal.ai](/it/mcp) a Claude, ChatGPT, Cursor o VS Code. Poi chiedi all'assistente di verificare gli indirizzi nella chat.",
      },
      {
        label: 'API',
        title: 'REST API',
        text: 'Invia richieste di verifica singole o in blocco dal tuo codice. I risultati arrivano in JSON. La [documentazione API](/it/documentazione-api) elenca tutti gli endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Cerca integrazioni…',
      searchAria: 'Cerca integrazioni',
      connectionAria: 'Filtra per tipo di collegamento',
      connection: { all: 'Tutte', direct: 'Diretta', zapier: 'Tramite Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filtra per categoria',
      allCategories: 'Tutte le categorie',
      categories: {
        'Email Marketing': 'Email marketing',
        Automation: 'Automazione',
        CRM: 'CRM',
        'Sales & Outreach': 'Vendite e outreach',
        Spreadsheets: 'Fogli di calcolo',
        Forms: 'Moduli',
        'AI & Agents': 'AI e agenti',
        Developer: 'Sviluppatori',
        'Marketing Automation': 'Marketing automation',
        Ecommerce: 'Ecommerce',
        'Forms & Surveys': 'Moduli e sondaggi',
        'Website & Popups': 'Siti web e popup',
        'Spreadsheets & Data': 'Fogli di calcolo e dati',
        Support: 'Assistenza clienti',
        Payments: 'Pagamenti',
      },
      prevPage: 'Pagina precedente',
      nextPage: 'Pagina successiva',
      pagination: 'Paginazione',
      showing: 'Integrazioni da {from} a {to} su {total}',
      noMatchTitle: 'Nessuna integrazione corrisponde alla ricerca.',
      noMatchText:
        'Qualsiasi strumento che invia una richiesta HTTP può usare la [REST API](/it/documentazione-api).',
      descriptions: {
        zapier:
          'Verifica ogni nuova email in tempo reale su più di 8.000 app, indirizzi catch-all inclusi. Senza codice.',
        n8n: 'Verifica email singole e liste intere nei flussi n8n con il nodo community ufficiale di Giggal.ai.',
        claude: 'Aggiungi il server MCP di Giggal.ai a Claude e verifica gli indirizzi email nella chat.',
        chatgpt: 'Aggiungi il server MCP di Giggal.ai a ChatGPT e verifica gli indirizzi email nella chat.',
        clay: "Verifica le email dei prospect nelle tabelle di Clay tramite l'API di Giggal.ai, indirizzi catch-all inclusi.",
        'rest-api':
          'REST API per la verifica email singola, in blocco e catch-all. Crea qualsiasi integrazione su misura.',
        mailchimp: 'Importa un pubblico di Mailchimp, verificalo e tieni solo gli iscritti con email valida.',
        mailgun: 'Collega Mailgun e verifica le tue liste di invio prima di ogni campagna.',
        mailjet:
          'Importa le liste di contatti di Mailjet in Giggal.ai e verificale, indirizzi catch-all inclusi.',
        sendgrid: 'Verifica in blocco i contatti di SendGrid per proteggere la tua reputazione di mittente.',
        activecampaign:
          'Importa i contatti di ActiveCampaign, verificali e togli gli indirizzi non validi prima di inviare.',
        'campaign-monitor': 'Collega Campaign Monitor e verifica in Giggal.ai ogni lista di iscritti.',
        getresponse:
          'Verifica le liste di GetResponse per ridurre i bounce, compresi i contatti sui domini catch-all.',
        aweber: 'Importa gli iscritti di AWeber, verificali e rimanda indietro una lista pulita.',
        mailerlite: 'Collega MailerLite e verifica le liste di iscritti prima della prossima campagna.',
        drip: 'Verifica in blocco i contatti di Drip, così le email automatiche arrivano a caselle reali.',
        'elastic-email':
          'Importa le liste di Elastic Email e verificale, compresi gli indirizzi catch-all e dietro gateway di sicurezza.',
        'reply-io':
          'Verifica le email dei prospect prima che partano le sequenze di Reply.io, così le email arrivano a caselle reali.',
        'zoho-crm': 'Importa contatti e lead da Zoho CRM, verificali e tieni puliti i dati del CRM.',
        'google-sheets':
          'Verifica ogni nuova riga appena viene aggiunta e scrivi il risultato nel foglio.',
        hubspot: 'Verifica i contatti e le liste del tuo CRM HubSpot, poi filtra per risultato in HubSpot.',
        salesforce: "Verifica l'email di ogni nuovo lead di Salesforce appena viene creato.",
        typeform: 'Verifica le email delle risposte di Typeform prima che arrivino agli altri strumenti.',
        slack: 'Pubblica i risultati delle verifiche e gli avvisi sulle liste in un canale Slack.',
      },
      zapierAppDescription:
        'Verifica in tempo reale, tramite Zapier, gli indirizzi email che arrivano in {name}.',
      logoAlt: 'Integrazione di verifica email tra {name} e Giggal.ai',
    },
    appListTitle: 'Tutte le app Zapier che supportiamo',
    appListIntro:
      '{count} app si collegano a Giggal.ai tramite Zapier. Ognuna ha la sua guida di configurazione.',
    apiTitle: 'Il tuo strumento non è nella lista?',
    apiText:
      "Qualsiasi strumento che invia una richiesta HTTP può verificare email con Giggal.ai. Usa l'[API di verifica email](/email-verification-api) per controlli singoli e in blocco, oppure collegati tramite Zapier.",
    apiCta: 'Documentazione API',
    apiHref: '/it/documentazione-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Verifica Email su Zapier per oltre 8.000 App | Giggal.ai',
      description:
        'Verifica email su Zapier con Giggal.ai. Controlla ogni nuovo contatto in tempo reale e ricevi valida o non valida anche sui catch-all. Senza codice.',
      ogTitle: 'Verifica email su Zapier per oltre 8.000 app',
      ogDescription:
        'Verifica ogni nuovo indirizzo email su Zapier con Giggal.ai. Funziona con HubSpot, Google Sheets, Salesforce, Mailchimp e oltre 8.000 altre app.',
    },
    crumb: 'Zapier',
    h1Lead: 'Verifica email su Zapier per',
    h1Accent: 'oltre 8.000 app',
    intro:
      "Aggiungi la [verifica email](/it/verifica-email) di Giggal.ai a qualsiasi Zap e controlla ogni indirizzo appena arriva. Funziona con moduli, CRM, fogli di calcolo e piattaforme di email marketing. Gli indirizzi catch-all ricevono un risultato valida o non valida. Non serve scrivere codice.",
    viewOnZapier: 'Vedi su Zapier',
    tabsTitle: 'Flussi Zapier e guida alla configurazione',
    tabsIntro:
      'Parti da un flusso comune, oppure segui la guida e crea il tuo Zap in circa cinque minuti.',
    tabs: {
      cardSubtitle: 'Collega Giggal.ai a oltre 8.000 app',
      tryFree: 'Provalo gratis',
      actionsTitle: '4 azioni Zapier',
      actions: [
        { name: 'Verify Email', description: 'Verifica un indirizzo email in tempo reale, indirizzi catch-all inclusi.' },
        { name: 'Start Bulk Verification', description: "Invia una lista di indirizzi. Restituisce l'ID di un job che i passaggi successivi possono usare." },
        { name: 'Get Bulk Verification Results', description: 'Recupera i risultati di un job in blocco quando il suo stato è completato.' },
        { name: 'Get Credit Balance', description: 'Controlla quanti crediti Giggal.ai ti restano.' },
      ],
      workflowsTab: 'Flussi',
      guideTab: "Guida all'integrazione",
      workflows: [
        {
          title: 'Verifica i nuovi contatti di HubSpot',
          description:
            "Quando crei un contatto in HubSpot, Giggal.ai verifica l'email e scrive il risultato in una proprietà del contatto.",
        },
        {
          title: 'Verifica le nuove righe di Google Sheets',
          description:
            'Ogni nuova riga viene verificata appena viene aggiunta. Lo stato, il livello di rischio e il risultato catch-all vengono scritti nella riga.',
        },
        {
          title: 'Verifica i nuovi lead di Salesforce',
          description:
            'Ogni nuovo lead viene verificato prima che un commerciale ci lavori, così nessuno scrive a una casella che non esiste.',
        },
        {
          title: 'Verifica le iscrizioni a Mailchimp',
          description:
            "Verifica ogni nuovo iscritto al momento dell'iscrizione e aggiungi al pubblico di Mailchimp solo gli indirizzi validi.",
        },
        {
          title: 'Controlla le risposte di Typeform',
          description:
            'Trova le email scritte male e le email temporanee nelle risposte ai moduli prima che arrivino agli altri strumenti.',
        },
        {
          title: 'Invia i risultati su Slack',
          description:
            'Pubblica un messaggio su Slack quando una verifica finisce, o quando un lead su un dominio catch-all risulta valido.',
        },
      ],
      workflowCta: 'Configura su Zapier',
      guideTitle: 'Come collegare Giggal.ai a Zapier',
      guideIntro:
        "La configurazione richiede circa cinque minuti. L'esempio qui sotto verifica ogni nuova riga di un foglio Google Sheets.",
      steps: [
        {
          title: "Scegli l'app trigger",
          text: "Crea uno Zap e scegli l'app che lo avvia. Va bene una qualsiasi delle oltre 8.000 app su Zapier. In questo esempio scegli Google Sheets e l'evento New or Updated Spreadsheet Row. Collega il tuo account e clicca Continue.",
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: "Configurazione del trigger su Zapier con Google Sheets e l'evento New or Updated Spreadsheet Row",
        },
        {
          title: "Aggiungi Giggal.ai come passaggio di azione",
          text: "Nel passaggio di azione, cerca Giggal.ai nel selettore delle app e selezionalo.",
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Ricerca di Giggal.ai nel selettore delle app di Zapier',
        },
        {
          title: "Scegli l'evento di azione",
          text: 'Giggal.ai ha quattro azioni: Verify Email, Start Bulk Verification, Get Bulk Verification Results e Get Credit Balance. Per questo esempio scegli Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'I quattro eventi di azione di Giggal.ai nel selettore degli eventi di Zapier',
        },
        {
          title: 'Collega il tuo account Giggal.ai',
          text: 'La prima volta Zapier ti chiede la chiave API. Nella dashboard di Giggal.ai apri la scheda Developer API e clicca Create API Key. Incolla la chiave in Zapier e clicca Connect. I nuovi account ricevono 1.000 crediti gratis, senza carta.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: "Collegamento dell'account Giggal.ai a Zapier con una chiave API",
        },
        {
          title: "Mappa il campo email e usa il risultato",
          text: "Imposta il campo Email sulla colonna che contiene l'indirizzo, poi esegui un test. Giggal.ai restituisce lo stato, il livello di rischio, il punteggio e il risultato catch-all. Dopo questo passaggio aggiungi filtri o percorsi di Zapier. Per esempio, scrivi gli indirizzi validi nel foglio e sposta quelli non validi in un'altra scheda.",
        },
      ],
      help: 'Sei bloccato su un passaggio? [Contatta il nostro team](/it/contatti) o leggi la [documentazione API](/it/documentazione-api) per il formato completo della risposta.',
    },
    why: [
      {
        title: 'Verifica email catch-all su Zapier',
        text: 'Molti strumenti di verifica segnano gli indirizzi catch-all come a rischio e si fermano lì. In una lista B2B possono essere circa il 30% degli indirizzi. Giggal.ai li controlla ancora e restituisce valida o non valida dentro il tuo Zap.',
      },
      {
        title: "Verifica nel momento in cui il contatto entra",
        text: 'I lead vengono verificati appena arrivano da un modulo, un CRM o un foglio. Gli indirizzi non validi non entrano mai nelle tue liste, quindi dopo c\'è meno da pulire.',
      },
      {
        title: 'Risultati che il tuo Zap può usare per smistare i lead',
        text: 'Ogni controllo restituisce uno stato, un livello di rischio, un punteggio di consegna e il risultato catch-all. Usali nei filtri e nei percorsi di Zapier per mandare ogni lead nel posto giusto.',
      },
    ],
    appsTitle: 'Verifica le email da una di queste app',
    appsIntro: 'Ogni app qui sotto ha la sua guida per la verifica email tramite Zapier.',
    categories: {
      'Marketing Automation': 'Marketing automation',
      'Email Marketing': 'Email marketing',
      CRM: 'CRM',
      Ecommerce: 'Ecommerce',
      'Sales & Outreach': 'Vendite e outreach',
      'Forms & Surveys': 'Moduli e sondaggi',
      'Website & Popups': 'Siti web e popup',
      'Spreadsheets & Data': 'Fogli di calcolo e dati',
      Support: 'Assistenza clienti',
      Payments: 'Pagamenti',
      Automation: 'Automazione',
      Spreadsheets: 'Fogli di calcolo',
      Forms: 'Moduli',
      'AI & Agents': 'AI e agenti',
      Developer: 'Sviluppatori',
    },
    faqTitle: 'Domande frequenti sulla verifica email su Zapier',
    faq: [
      {
        q: "Come funziona l'integrazione di Giggal.ai con Zapier?",
        a: "Aggiungi un passaggio Giggal.ai a uno Zap. Quando parte il trigger, per esempio un nuovo contatto nel CRM o una nuova risposta a un modulo, Zapier invia l'indirizzo email a Giggal.ai. Giggal.ai controlla se la casella esiste e passa il risultato al passaggio successivo. Non serve codice.",
      },
      {
        q: 'Zapier può verificare gli indirizzi email catch-all?',
        a: 'Sì, con Giggal.ai come passaggio di verifica. La maggior parte degli strumenti restituisce a rischio o sconosciuta per i domini catch-all. Giggal.ai esegue controlli aggiuntivi su quegli indirizzi e restituisce valida o non valida con un punteggio.',
      },
      {
        q: 'Quali app posso collegare?',
        a: "Qualsiasi app su Zapier, tra cui HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform e Slack. Se un'app è su Zapier, può inviare indirizzi a Giggal.ai.",
      },
      {
        q: 'Quanti crediti costa un controllo tramite Zapier?',
        a: "Un credito per indirizzo email, come nella dashboard o con l'API. Anche i controlli catch-all costano 1 credito. I nuovi account ricevono 1.000 crediti gratis, senza carta.",
      },
      {
        q: 'Meglio verificare in tempo reale o in blocco?',
        a: "La maggior parte dei team fa entrambe le cose. I controlli in tempo reale su Zapier bloccano gli indirizzi non validi all'ingresso. La verifica in blocco pulisce le liste che hai già, nella dashboard o con l'azione Start Bulk Verification.",
      },
    ],
    howToName: 'Come verificare le email su Zapier con Giggal.ai',
    howToDescription:
      'Configura la verifica email, compresi gli indirizzi catch-all, in qualsiasi flusso Zapier.',
    cta: {
      title: 'Verifica ogni nuovo indirizzo email su Zapier',
      text: 'Crea il tuo primo Zap di verifica in circa cinque minuti. Ricevi 1.000 crediti gratis, senza carta, e i controlli catch-all sono inclusi.',
      primary: 'Inizia gratis',
      secondary: 'Vedi tutte le integrazioni',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Verifica Email su n8n: Nodo Community Ufficiale | Giggal.ai',
      description:
        'Verifica email su n8n con il nodo community ufficiale di Giggal.ai. Controlla singoli indirizzi o liste, catch-all inclusi. Installa n8n-nodes-giggal da npm.',
      ogTitle: 'Verifica email su n8n: nodo community ufficiale',
      ogDescription:
        'Verifica email singole e liste intere nei flussi n8n con il nodo community di Giggal.ai. Indirizzi catch-all inclusi.',
    },
    crumb: 'n8n',
    h1Lead: 'Verifica email su n8n con il',
    h1Accent: 'nodo ufficiale di Giggal.ai',
    intro:
      "Aggiungi la [verifica email](/it/verifica-email) di Giggal.ai ai tuoi flussi n8n. Verifica un indirizzo in tempo reale o invia una lista intera come job in blocco. Gli indirizzi catch-all ricevono un risultato valida o non valida. Installi il nodo una sola volta da npm.",
    viewOnNpm: 'Vedi su npm',
    opsTitle: 'Cosa può fare il nodo n8n',
    opsIntro:
      'Il nodo ha due risorse e quattro operazioni. Usa Email per i controlli singoli e Job per le liste.',
    ops: [
      { name: 'Verify', detail: 'Verifica un indirizzo email in tempo reale, catch-all inclusi. 1 credito per controllo.' },
      { name: 'Verify Batch', detail: "Invia una lista intera in una sola richiesta. Restituisce l'ID di un job che il flusso può controllare dopo." },
      { name: 'Get Status', detail: 'Mostra a che punto è un job in blocco: indirizzi elaborati, percentuale e ora di fine.' },
      { name: 'Get Results', detail: 'Recupera i risultati finiti pagina per pagina, con un filtro opzionale come deliverable o catch_all.' },
    ],
    installTitle: 'Installa il nodo e verifica la tua prima email',
    installIntro:
      "Ti servono un'istanza n8n, cloud o self-hosted, e un account Giggal.ai gratuito. La configurazione richiede circa cinque minuti.",
    installSteps: [
      {
        title: 'Apri Community nodes nelle impostazioni di n8n',
        text: 'In n8n clicca sul menu del tuo account in basso a sinistra e apri Settings. Poi seleziona Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'La voce Community nodes nel menu Settings di n8n',
      },
      {
        title: 'Installa n8n-nodes-giggal',
        text: "Clicca Install a community node. Scrivi `n8n-nodes-giggal` nel campo npm Package Name, spunta la casella e clicca Install. Il nodo Giggal.ai compare nell'elenco dei nodi.",
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Installazione del pacchetto n8n-nodes-giggal nella finestra Install community nodes',
      },
      {
        title: 'Aggiungi il nodo e crea una credenziale',
        text: 'Aggiungi il nodo Giggal.ai a un flusso. Nel menu Credential scegli Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Creazione di una nuova credenziale Giggal.ai sul nodo in n8n',
      },
      {
        title: 'Incolla la tua chiave API',
        text: 'Nella dashboard di Giggal.ai apri la scheda Developer API e clicca Create API Key. Incolla la chiave nel campo API Key e salva. Ora ogni nodo Giggal.ai della tua istanza può usarla. I nuovi account ricevono 1.000 crediti gratis, senza carta.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Aggiunta della chiave API di Giggal.ai alla credenziale di n8n',
      },
      {
        title: 'Verifica la tua prima email',
        text: "Imposta Resource su Email e Operation su Verify. Collega il campo Email Address ai tuoi dati con un'espressione come `{{ $json.email }}`, poi clicca Execute step. L'output mostra lo stato, il livello di rischio, il punteggio di consegna e i dettagli catch-all.",
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: "Verifica di una singola email in n8n e lettura dell'output",
      },
    ],
    batchTitle: 'Verifica una lista intera su n8n',
    batchIntro:
      'Per più di qualche indirizzo usa la risorsa Job. Lo schema è: invii la lista, controlli lo stato, poi recuperi i risultati.',
    batchSteps: [
      {
        title: 'Invia la lista con Verify Batch',
        text: "Imposta Operation su Verify Batch e indica in Email Field la proprietà che contiene gli indirizzi. Puoi dare un nome al batch per trovarlo poi nella dashboard. Lascia attivo Enable Catch-All Rescue, così gli indirizzi catch-all ricevono controlli aggiuntivi. Il nodo restituisce subito l'ID del job e la verifica prosegue in background.",
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Invio di un batch di email da verificare con il nodo n8n di Giggal.ai',
      },
      {
        title: "Controlla l'avanzamento con Get Status",
        text: "Imposta Resource su Job e Operation su Get Status, e passa l'ID del job del passaggio precedente. Metti un nodo Wait tra un controllo e l'altro, così il ciclo non interroga il servizio troppo spesso.",
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: "Controllo dell'avanzamento di un job in blocco con l'operazione Get Status in n8n",
      },
      {
        title: 'Recupera i risultati con Get Results',
        text: 'Quando lo stato indica completed, esegui Get Results con lo stesso ID del job. Ricevi un elemento per ogni email, con stato, livello di rischio e punteggio. Usa il campo Status Filter per recuperare solo le righe deliverable, undeliverable o catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Recupero dei risultati di una verifica in blocco completata in n8n',
      },
    ],
    calloutTitle: 'Gli indirizzi catch-all e dietro gateway ricevono valida o non valida',
    calloutText:
      'Molti strumenti di verifica restituiscono sconosciuta per gli indirizzi dietro un secure email gateway e a rischio per i domini catch-all. Giggal.ai [verifica gli indirizzi dietro i gateway](/it/verifica-seg) come Proofpoint e Mimecast, ed esegue controlli aggiuntivi sui domini catch-all. [Scopri come funziona la verifica catch-all](/it/verifica-catch-all).',
    faqTitle: 'Domande frequenti sulla verifica email su n8n',
    faq: [
      {
        q: 'Il nodo Giggal.ai funziona su n8n Cloud?',
        a: 'Sì. Installalo da Settings, poi Community nodes, e aggiungi la tua chiave API. Funziona allo stesso modo su n8n Cloud e sulle istanze self-hosted.',
      },
      {
        q: 'Il nodo community è sicuro da installare?',
        a: "Il team di Giggal.ai pubblica il pacchetto su npm con il nome n8n-nodes-giggal, e chiunque può leggere il codice sorgente. Il nodo comunica solo con l'API di Giggal.ai, con la credenziale che hai configurato.",
      },
      {
        q: 'n8n può verificare le email catch-all?',
        a: 'Sì, con il nodo Giggal.ai. I controlli singoli gestiscono i domini catch-all in automatico. I job in blocco fanno lo stesso quando Enable Catch-All Rescue è attivo. Ricevi valida o non valida con un punteggio, non un\'etichetta a rischio.',
      },
      {
        q: 'Quanto costa la verifica su n8n?',
        a: 'Un credito per indirizzo email, come in tutto il resto di Giggal.ai. Anche i controlli catch-all costano 1 credito. I nuovi account partono con 1.000 crediti gratis, senza carta.',
      },
      {
        q: 'Cosa restituisce il nodo?',
        a: "Per ogni email restituisce uno stato, un livello di rischio e un punteggio di consegna. Restituisce anche i flag per indirizzi gratuiti, di ruolo e temporanei, i dettagli del server di posta e il risultato catch-all. L'output è normale JSON di n8n che puoi filtrare e mappare.",
      },
    ],
    howToName: 'Come verificare le email su n8n con il nodo community di Giggal.ai',
    howToDescription:
      'Installa n8n-nodes-giggal, aggiungi la tua chiave API e verifica email singole o liste intere nei flussi n8n.',
    cta: {
      title: 'Aggiungi la verifica email ai tuoi flussi n8n',
      text: 'Installa n8n-nodes-giggal, incolla la tua chiave API e smetti di far passare indirizzi email inesistenti nei tuoi flussi. Ricevi 1.000 crediti gratis, senza carta.',
      primary: 'Inizia gratis',
      secondary: 'Vedi tutte le integrazioni',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'Verifica Email su HubSpot: Validazione dei Contatti | Giggal.ai',
      description:
        'Verifica email su HubSpot con Giggal.ai. Valida i contatti e le liste del CRM, ricevi un risultato anche sugli indirizzi catch-all e filtra su HubSpot.',
      ogTitle: 'Verifica email su HubSpot: validazione dei contatti',
      ogDescription:
        'Collega Giggal.ai a HubSpot, verifica contatti e liste, e filtra per risultato nel tuo CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Verifica email su HubSpot',
    h1Accent: 'e validazione dei contatti',
    intro:
      'Verifica i contatti che hai già nel CRM di HubSpot. Ti colleghi una volta, scegli una lista e ogni contatto riceve un risultato scritto nella sua scheda. Gli indirizzi catch-all ricevono Deliverable o Undeliverable, non Risky. Non devi esportare né reimportare nulla.',
    openDashboard: 'Apri la dashboard',
    capsTitle: "Cosa fa l'integrazione con HubSpot",
    capsIntro: 'Quattro passaggi, tutti dentro HubSpot e Giggal.ai.',
    caps: [
      {
        name: 'Importa i contatti o una lista',
        detail: 'Scegli All contacts o una qualsiasi lista di HubSpot. Prima vedi il numero di email, così conosci il costo in crediti prima di iniziare.',
      },
      {
        name: 'Verifica ogni indirizzo',
        detail: 'Per ogni casella viene controllato se esiste. I domini catch-all ricevono un risultato chiaro, non Risky. 1 credito per indirizzo.',
      },
      {
        name: 'Scrivi i risultati nei contatti',
        detail: 'Su ogni contatto vengono impostate cinque proprietà Giggal, così il risultato resta nella scheda.',
      },
      {
        name: 'Filtra e crea liste',
        detail: "Usa Giggal email status nei filtri e nelle liste attive di HubSpot. Togli gli indirizzi non validi prima del prossimo invio.",
      },
    ],
    stepsTitle: 'Come collegare HubSpot e verificare la tua prima lista',
    stepsIntro:
      'I passaggi sono quattro e richiedono circa due minuti. Ti servono un account Giggal.ai e il permesso su HubSpot di installare app e modificare le proprietà dei contatti.',
    steps: [
      {
        title: 'Apri la scheda Integration in Giggal.ai',
        text: "Accedi a Giggal.ai, vai su Email Validation e apri la scheda Integration. Trova la scheda HubSpot e clicca Connect. Se non hai ancora un account, la registrazione richiede un minuto e include 1.000 crediti gratis.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'La scheda HubSpot e il pulsante Connect nella scheda Integration di Giggal.ai',
      },
      {
        title: 'Approva i permessi in HubSpot',
        text: "HubSpot mostra la sua schermata di approvazione con tutto ciò a cui Giggal.ai può accedere: vedere le proprietà dei contatti, modificare i contatti, modificare le impostazioni delle proprietà dei contatti, vedere le liste di contatti e leggere l'account che installa l'app. Controlla l'elenco e clicca Connect app. Torni su Giggal.ai, e la scheda HubSpot ora mostra Verify.",
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: "Schermata di HubSpot per l'approvazione dei permessi dell'app Giggal Email Verifier",
      },
      {
        title: 'Importa una lista di contatti',
        text: 'Clicca Verify sulla scheda HubSpot per aprire la finestra Import from HubSpot. Scegli All contacts o una qualsiasi lista del tuo portale. Ogni riga mostra quante email contiene, così conosci il costo prima di iniziare. Clicca Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Finestra Import from HubSpot con le liste di contatti e il numero di email',
      },
      {
        title: 'Verifica la lista e sincronizza i risultati',
        text: 'Giggal.ai controlla ogni indirizzo e scrive il risultato in ogni contatto di HubSpot appena finisce. La scheda del task mostra il dettaglio dei risultati e il conteggio Synced to HubSpot. Clicca Sync to HubSpot per ripetere la scrittura quando vuoi.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Task di verifica HubSpot completato in Giggal.ai con i risultati sincronizzati su HubSpot',
      },
    ],
    calloutTitle: 'Perché usare una verifica email catch-all con HubSpot',
    calloutText:
      "Circa il 30% di una lista B2B è su domini catch-all. Molti strumenti di verifica restituiscono quei contatti come a rischio, quindi non puoi farci nulla. Giggal.ai è uno strumento di [verifica email](/it/verifica-email) che esegue controlli aggiuntivi sui domini catch-all e [verifica gli indirizzi dietro i secure email gateway](/it/verifica-seg) come Proofpoint e Mimecast. La maggior parte di quei contatti torna come Deliverable o Undeliverable. [Scopri come funziona la verifica catch-all](/it/verifica-catch-all).",
    propsTitle: 'Le proprietà HubSpot che Giggal.ai scrive in ogni contatto',
    propsIntro:
      'Le cinque proprietà vengono create la prima volta che esegui una verifica. Si trovano in un gruppo di proprietà chiamato Giggal Email Verifier. Le proprietà HubSpot che hai già non vengono modificate.',
    propsHead: ['Proprietà', 'Tipo', 'Cosa ti dice'],
    props: [
      ['Giggal email is valid', 'Casella di spunta', 'Sì quando è stato confermato che la casella esiste.'],
      ['Giggal email status', 'Menu a discesa', 'Deliverable, Undeliverable, Risky o Unknown.'],
      ['Giggal deliverability score', 'Numero', 'Affidabilità da 0 a 100.'],
      ['Giggal email detail', 'Testo', 'Un breve motivo del risultato.'],
      ['Giggal verified at', 'Data', "Quando l'indirizzo è stato controllato l'ultima volta."],
    ],
    scopesTitle: 'Permessi e dati di HubSpot',
    scopesIntro: 'Giggal.ai chiede quattro scope di HubSpot. Ognuno ha un solo uso.',
    scopes: [
      ['crm.objects.contacts.read', "Leggere l'indirizzo email dei contatti che scegli di verificare."],
      ['crm.objects.contacts.write', 'Scrivere il risultato della verifica in quei contatti.'],
      ['crm.schemas.contacts.write', 'Creare le cinque proprietà Giggal al primo utilizzo.'],
      ['crm.lists.read', 'Mostrare le tue liste di contatti, così puoi sceglierne una da verificare.'],
    ],
    scopesNote:
      "Giggal.ai legge solo l'indirizzo email dei contatti che scegli. Non crea e non elimina contatti, non modifica proprietà diverse dalle cinque qui sopra e non invia mai email agli indirizzi che controlla.",
    faqTitle: 'Domande frequenti sulla verifica email su HubSpot',
    faq: [
      {
        q: 'Giggal.ai invia email ai miei contatti?',
        a: 'No. La verifica comunica con il server di posta del destinatario e si ferma prima che venga inviato qualsiasi messaggio. I tuoi contatti non ricevono nulla, né nella posta in arrivo né nello spam.',
      },
      {
        q: 'Cosa modifica nel mio account HubSpot?',
        a: 'Al primo utilizzo crea un gruppo di proprietà chiamato Giggal Email Verifier con cinque proprietà personalizzate dei contatti. Poi scrive i risultati solo in quelle proprietà. Le proprietà HubSpot esistenti non vengono modificate, e nessun contatto viene creato o eliminato.',
      },
      {
        q: 'Può verificare i domini catch-all?',
        a: 'Sì. È il motivo principale per usare Giggal.ai con HubSpot. Molti strumenti di verifica restituiscono a rischio o sconosciuta sui domini catch-all. Giggal.ai continua i controlli e sulla maggior parte di essi restituisce Deliverable o Undeliverable.',
      },
      {
        q: 'Validazione email e verifica email sono la stessa cosa?',
        a: "In pratica sì. Entrambi i termini indicano il controllo che un indirizzo possa ricevere posta. Giggal.ai controlla il formato, i server di posta del dominio e la casella, poi scrive un solo risultato nel contatto di HubSpot.",
      },
      {
        q: 'Quanto costa?',
        a: "Un credito per indirizzo, e i controlli catch-all sono inclusi. I nuovi account partono con 1.000 crediti gratis, e il prezzo per indirizzo scende quando il volume sale.",
      },
      {
        q: 'Come uso i risultati in HubSpot?',
        a: 'Filtra i contatti o crea una lista attiva su Giggal email status. Una configurazione comune è una lista attiva di contatti Deliverable come pubblico di invio e una lista di esclusione di contatti Undeliverable.',
      },
      {
        q: 'Come mi scollego?',
        a: "Apri la scheda Integration in Giggal.ai, clicca l'icona delle impostazioni sulla scheda HubSpot e scegli Disconnect. Puoi anche rimuovere l'app in HubSpot da Settings, Integrations, Connected Apps. I risultati già scritti restano sui tuoi contatti.",
      },
    ],
    howToName: 'Come verificare i contatti di HubSpot con Giggal.ai',
    howToDescription:
      'Collega Giggal.ai a HubSpot, verifica una lista di contatti e leggi il risultato in cinque proprietà su ogni contatto.',
    cta: {
      title: 'Pulisci i tuoi contatti HubSpot',
      text: 'Ti colleghi una volta e ogni contatto del CRM riceve un risultato di verifica su cui puoi filtrare. Parti con 1.000 crediti gratis, senza carta.',
      primary: 'Inizia gratis',
      secondary: 'Vedi tutte le integrazioni',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Server MCP per la Verifica Email in Claude e ChatGPT | Giggal.ai',
      description:
        'Collega Giggal.ai a Claude, ChatGPT, Cursor e VS Code tramite MCP e verifica le email nella chat. Gli indirizzi catch-all ricevono valida o non valida.',
      ogTitle: 'Server MCP per la verifica email in Claude e ChatGPT',
      ogDescription:
        'Giggal.ai ha un server MCP remoto, così Claude, ChatGPT, Cursor e VS Code possono verificare gli indirizzi email. Controlli catch-all inclusi.',
    },
    crumb: 'MCP',
    h1Lead: 'Un server MCP per la verifica email in',
    h1Accent: 'Claude e ChatGPT',
    intro:
      "Giggal.ai ha un server MCP remoto. Collegalo a Claude, ChatGPT, Cursor o VS Code, e il tuo assistente AI può fare la [verifica email](/it/verifica-email). Chiedigli di controllare un indirizzo o una lista, e ti risponde nella chat.",
    urlLabel: 'URL MCP',
    directoryLabel: 'Aggiungi Giggal.ai a Claude',
    points: [
      'Claude e ChatGPT accedono con OAuth',
      'Gli editor di codice usano la tua chiave API',
      'Controlli catch-all inclusi',
    ],
    setupTitle: 'Configura il server MCP nel tuo strumento AI',
    setupSubtitle:
      'Scegli il tuo strumento per vedere i passaggi. Claude e ChatGPT si collegano con un accesso. Gli editor di codice leggono un file di configurazione.',
    toolsTitle: "Cosa può fare l'assistente AI",
    toolsIntro:
      'Il server dà al tuo assistente tre strumenti. Fai la richiesta in linguaggio naturale, e l\'assistente sceglie quello giusto.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Verifica gli indirizzi',
        body: 'Controlla una email o una lista. Ogni indirizzo riceve valida o non valida, anche gli indirizzi sui domini catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Ottieni i risultati completi',
        body: 'Recupera i dettagli di un controllo passato: stato, codici del motivo e punteggio di consegna per ogni indirizzo.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Controlla i tuoi crediti',
        body: 'Chiedi quanti crediti ti restano prima di avviare un controllo grande.',
      },
    ],
    whyTitle: 'Perché il risultato catch-all conta in una chat',
    why: [
      "Circa il 30% di una lista B2B è su domini catch-all. Questi domini accettano posta per qualsiasi indirizzo, che la casella esista o no. Molti strumenti di verifica segnano quegli indirizzi come a rischio, cioè non sono riusciti a capirlo.",
      "In una chat quell'etichetta non aiuta. L'assistente ripete quello che riceve, quindi un terzo della tua lista torna come incerto. Giggal.ai controlla ancora quegli indirizzi e restituisce valida o non valida. Fa lo stesso per le caselle dietro 15 secure email gateway noti, tra cui Proofpoint, Mimecast e Barracuda.",
      "Per esempi di richieste, leggi [come verificare le email in Claude e ChatGPT](/it/blog/verificare-email-in-claude-e-chatgpt). Il server MCP usa lo stesso motore dell'[API di verifica email](/email-verification-api).",
    ],
    faqTitle: 'Domande frequenti sul server MCP per la verifica email',
    faq: [
      {
        q: 'Claude può verificare gli indirizzi email?',
        a: `Sì, dopo che colleghi uno strumento di verifica email tramite MCP. Aggiungi il server di Giggal.ai all'indirizzo ${MCP_URL} come connettore personalizzato in Claude, oppure con il comando claude mcp add in Claude Code. Poi chiedi, per esempio, "verifica questi undici indirizzi e dimmi quali daranno bounce". Claude chiama lo strumento verify_emails e mostra il risultato nella chat.`,
      },
      {
        q: 'ChatGPT può verificare gli indirizzi email?',
        a: "Sì, sui piani ChatGPT che permettono i connettori personalizzati. Aggiungi Giggal.ai come plugin personalizzato con l'URL del server MCP e accedi con OAuth. Qualsiasi client che supporta MCP remoto può usare lo stesso server, tra cui Cursor, VS Code, Windsurf, Cline e Zed.",
      },
      {
        q: "Cosa può fare l'assistente AI?",
        a: "Tre cose. verify_emails controlla un indirizzo o una lista. get_verification_details restituisce il risultato completo per ogni indirizzo, con stato e codici del motivo. get_credit_balance mostra quanti crediti ti restano.",
      },
      {
        q: 'Come gestisce gli indirizzi catch-all?',
        a: 'Come il resto di Giggal.ai. Molti strumenti di verifica segnano gli indirizzi catch-all come a rischio. Giggal.ai restituisce valida o non valida per questi indirizzi, e per le caselle dietro 15 secure email gateway noti come Proofpoint, Mimecast e Barracuda.',
      },
      {
        q: 'Mi serve una chiave API?',
        a: "Non per Claude o ChatGPT. Entrambi si collegano con OAuth, quindi accedi con il tuo account Giggal.ai. Gli editor di codice come Claude Code, Cursor e VS Code usano una chiave API, che trovi nella scheda Developer API dell'app Giggal.ai.",
      },
      {
        q: 'Verificare tramite MCP costa di più?',
        a: 'No. Usa gli stessi crediti della dashboard e della REST API: 1 credito per indirizzo, catch-all incluso. I nuovi account ricevono 1.000 crediti gratis, senza carta, e i crediti non scadono.',
      },
      {
        q: 'Conviene pulire una lista grande in questo modo?',
        a: "No. MCP funziona meglio quando la verifica è un passaggio di un'attività, per esempio controllare una dozzina di contatti prima di scrivere le email di outreach. Per decine di migliaia di indirizzi usa il caricamento in blocco nell'app o la REST API.",
      },
    ],
    howToName: 'Collega la verifica email di Giggal.ai a Claude o ChatGPT tramite MCP',
    howToDescription:
      'Quattro passaggi per verificare indirizzi email, catch-all inclusi, in Claude, ChatGPT, Cursor o VS Code con il server MCP di Giggal.ai.',
    setupSteps: [
      {
        name: 'Crea un account Giggal.ai',
        text: 'Registrati su Giggal.ai. I nuovi account includono 1.000 crediti di verifica gratis, senza carta.',
      },
      {
        name: 'Aggiungi il server MCP al tuo client',
        text: `Usa l'URL del server ${MCP_URL}. In Claude aggiungilo da Settings, poi Connectors. In ChatGPT aggiungilo come plugin personalizzato. Gli editor di codice leggono un file di configurazione JSON, mostrato in questa pagina per ogni editor.`,
      },
      {
        name: 'Accedi o aggiungi la tua chiave API',
        text: "Claude e ChatGPT ti chiedono di accedere a Giggal.ai e cliccare Allow. Gli editor di codice hanno bisogno della chiave API dalla scheda Developer API dell'app.",
      },
      {
        name: "Chiedi all'assistente di verificare un indirizzo",
        text: 'Scrivi la richiesta in linguaggio naturale, per esempio "verifica hello@example.com e dimmi se è una casella reale". L\'assistente chiama verify_emails e mostra il risultato.',
      },
    ],
    ctaTitle: 'Collega Giggal.ai al tuo assistente AI',
    ctaText:
      "Parti con 1.000 crediti di verifica gratis, senza carta. Aggiungi l'URL MCP a Claude, ChatGPT o al tuo editor di codice.",
    ctaButton: 'Inizia gratis',
  },
}
