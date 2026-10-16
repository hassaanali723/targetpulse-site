import type { IntegrationPagesContent } from './types'

// German copy for the integration pages. Keyword targets (Ahrefs, Germany):
//   email adresse prüfen 2,300-2,900 / KD 2, email prüfen 1,600,
//   email checker 2,800 / KD 1 (all link to /de/email-adresse-pruefen),
//   E-Mail-Verifizierung (titles and H1s).
// Product UI labels (Zapier, n8n, HubSpot, Giggal.ai dashboard), HubSpot
// property names, status values, scopes and tool names stay in English,
// because the apps show them in English.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Marketing-Automatisierung',
  'Email Marketing': 'E-Mail-Marketing',
  CRM: 'CRM',
  Ecommerce: 'E-Commerce',
  'Sales & Outreach': 'Vertrieb & Outreach',
  'Forms & Surveys': 'Formulare & Umfragen',
  'Website & Popups': 'Website & Pop-ups',
  'Spreadsheets & Data': 'Tabellen & Daten',
  Support: 'Support',
  Payments: 'Zahlungen',
  Automation: 'Automatisierung',
  Spreadsheets: 'Tabellen',
  Forms: 'Formulare',
  'AI & Agents': 'KI & Agenten',
  Developer: 'Entwickler',
}

export const DE: IntegrationPagesContent = {
  common: {
    locale: 'de',
    hubPath: '/de/integrationen',
    hubCrumb: 'Integrationen',
    checkerPath: '/de/email-adresse-pruefen',
    signupLabel: 'Kostenlos starten mit 1.000 Credits',
    getStarted: 'Kostenlos starten',
    allIntegrations: 'Alle Integrationen ansehen',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'E-Mail-Verifizierung: HubSpot, Zapier, n8n, MCP | Giggal.ai',
      description:
        'Integrationen für die E-Mail-Verifizierung in HubSpot, Zapier, n8n, Mailchimp, Claude und ChatGPT. Prüfen Sie E-Mails in Ihren Tools, Catch-all inklusive.',
      ogTitle: 'Integrationen für die E-Mail-Verifizierung: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Verbinden Sie den E-Mail-Checker von Giggal.ai mit HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude und ChatGPT.',
    },
    h1Lead: 'E-Mail-Verifizierung in den',
    h1Accent: 'Tools, die Sie schon nutzen',
    intro:
      'Mit Giggal.ai können Sie [E-Mail-Adressen prüfen](/de/email-adresse-pruefen), direkt in Ihrem CRM, Ihrer E-Mail-Plattform, Ihren Tabellen und Ihrem KI-Assistenten. Jede Prüfung zeigt, ob ein Postfach existiert. Auch Catch-all-Adressen erhalten ein Ergebnis: gültig oder ungültig.',
    waysTitle: 'Vier Wege zur E-Mail-Verifizierung in Ihren Tools',
    waysIntro:
      'Wählen Sie den Weg, der zu Ihrer Arbeitsweise passt. Jeder Weg nutzt dieselben Credits und liefert dasselbe Ergebnis.',
    ways: [
      {
        label: 'Direkt',
        title: 'Direkte Integrationen',
        text: 'Verbinden Sie [HubSpot](/de/integrationen/hubspot), Mailchimp, SendGrid und andere Plattformen im Giggal.ai-Dashboard. Importieren Sie eine Liste, prüfen Sie sie und senden Sie die bereinigte Liste zurück.',
      },
      {
        label: 'Automatisierung',
        title: 'Zapier und n8n',
        text: 'Prüfen Sie jeden neuen Kontakt, jede Formularantwort und jede neue Tabellenzeile direkt beim Eingang. Nutzen Sie die Giggal.ai-App auf [Zapier](/de/integrationen/zapier) oder den offiziellen Node für [n8n](/de/integrationen/n8n).',
      },
      {
        label: 'MCP',
        title: 'KI-Assistenten',
        text: 'Fügen Sie den [MCP-Server von Giggal.ai](/de/mcp) in Claude, ChatGPT, Cursor oder VS Code hinzu. Dann bitten Sie den Assistenten, Adressen direkt im Chat zu prüfen.',
      },
      {
        label: 'API',
        title: 'REST-API',
        text: 'Senden Sie Einzel- oder Massenprüfungen aus Ihrem eigenen Code. Die Ergebnisse kommen als JSON zurück. Die [API-Dokumentation](/de/api-dokumentation) listet jeden Endpunkt auf.',
      },
    ],
    grid: {
      searchPlaceholder: 'Integrationen suchen…',
      searchAria: 'Integrationen suchen',
      connectionAria: 'Nach Verbindungsart filtern',
      connection: { all: 'Alle', direct: 'Direkt', zapier: 'Über Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Nach Kategorie filtern',
      allCategories: 'Alle Kategorien',
      categories: CATEGORIES,
      prevPage: 'Vorherige Seite',
      nextPage: 'Nächste Seite',
      pagination: 'Seitennavigation',
      showing: '{from}-{to} von {total} Integrationen',
      noMatchTitle: 'Keine Integration passt zu Ihrer Suche.',
      noMatchText:
        'Jedes Tool, das HTTP-Anfragen senden kann, kann die [REST-API](/de/api-dokumentation) nutzen.',
      descriptions: {
        zapier:
          'Prüfen Sie jede neue E-Mail in Echtzeit in über 8.000 Apps, Catch-all-Adressen inklusive. Ohne Code.',
        n8n: 'Prüfen Sie einzelne E-Mails und ganze Listen in n8n-Workflows mit dem offiziellen Community Node von Giggal.ai.',
        claude:
          'Fügen Sie den MCP-Server von Giggal.ai in Claude hinzu und prüfen Sie E-Mail-Adressen direkt im Chat.',
        chatgpt:
          'Fügen Sie den MCP-Server von Giggal.ai in ChatGPT hinzu und prüfen Sie E-Mail-Adressen direkt im Chat.',
        clay: 'Prüfen Sie Interessenten-E-Mails in Clay-Tabellen über die Giggal.ai-API, Catch-all-Adressen inklusive.',
        'rest-api':
          'REST-API für Einzel-, Massen- und Catch-all-Prüfungen von E-Mails. Bauen Sie jede eigene Integration.',
        mailchimp:
          'Importieren Sie eine Mailchimp-Zielgruppe, prüfen Sie sie und behalten Sie nur zustellbare Abonnenten.',
        mailgun: 'Verbinden Sie Mailgun und prüfen Sie Ihre Versandlisten vor jeder Kampagne.',
        mailjet:
          'Importieren Sie Mailjet-Kontaktlisten in Giggal.ai und prüfen Sie sie, Catch-all-Adressen inklusive.',
        sendgrid:
          'Prüfen Sie SendGrid-Kontakte in großen Mengen und schützen Sie so Ihre Absenderreputation.',
        activecampaign:
          'Importieren Sie ActiveCampaign-Kontakte, prüfen Sie sie und entfernen Sie ungültige Adressen vor dem Versand.',
        'campaign-monitor':
          'Verbinden Sie Campaign Monitor und prüfen Sie jede Abonnentenliste in Giggal.ai.',
        getresponse:
          'Prüfen Sie GetResponse-Listen und senken Sie Bounces, auch bei Kontakten auf Catch-all-Domains.',
        aweber:
          'Importieren Sie AWeber-Abonnenten, prüfen Sie sie und senden Sie eine bereinigte Liste zurück.',
        mailerlite:
          'Verbinden Sie MailerLite und prüfen Sie Abonnentenlisten vor Ihrer nächsten Kampagne.',
        drip: 'Prüfen Sie Drip-Kontakte in großen Mengen, damit Ihre automatischen E-Mails echte Postfächer erreichen.',
        'elastic-email':
          'Importieren Sie Elastic-Email-Listen und prüfen Sie sie, auch Catch-all-Adressen und Adressen hinter Sicherheits-Gateways.',
        'reply-io':
          'Prüfen Sie Interessenten-E-Mails, bevor Ihre Reply.io-Sequenzen starten. So erreicht Ihr Outreach echte Postfächer.',
        'zoho-crm':
          'Importieren Sie Kontakte und Leads aus Zoho CRM, prüfen Sie sie und halten Sie Ihre CRM-Daten sauber.',
        'google-sheets':
          'Prüfen Sie jede neue Zeile direkt beim Hinzufügen und schreiben Sie das Ergebnis zurück in Ihre Tabelle.',
        hubspot:
          'Prüfen Sie die Kontakte und Listen in Ihrem HubSpot-CRM und filtern Sie in HubSpot nach dem Ergebnis.',
        salesforce:
          'Prüfen Sie die E-Mail jedes neuen Salesforce-Leads direkt nach dem Anlegen.',
        typeform:
          'Prüfen Sie E-Mails aus Typeform-Antworten, bevor sie in Ihre anderen Tools gelangen.',
        slack: 'Senden Sie Prüfergebnisse und Hinweise zu Ihren Listen in einen Slack-Kanal.',
      },
      zapierAppDescription:
        'Prüfen Sie die E-Mail-Adressen, die in {name} ankommen, in Echtzeit über Zapier.',
      logoAlt: '{name} Integration für E-Mail-Verifizierung mit Giggal.ai',
    },
    appListTitle: 'Alle Zapier-Apps, die wir unterstützen',
    appListIntro:
      '{count} Apps lassen sich über Zapier mit Giggal.ai verbinden. Für jede App gibt es eine eigene Anleitung auf Englisch.',
    apiTitle: 'Ihr Tool ist nicht dabei?',
    apiText:
      'Jedes Tool, das HTTP-Anfragen senden kann, kann E-Mails mit Giggal.ai prüfen. Nutzen Sie die [API für E-Mail-Verifizierung](/email-verification-api) für Einzel- und Massenprüfungen, oder verbinden Sie Ihr Tool über Zapier.',
    apiCta: 'API-Dokumentation',
    apiHref: '/de/api-dokumentation',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'E-Mail-Verifizierung mit Zapier für 8.000+ Apps | Giggal.ai',
      description:
        'E-Mails in Zapier prüfen mit Giggal.ai. Jeder neue Kontakt wird in Echtzeit geprüft, Catch-all-Adressen erhalten gültig oder ungültig. Ohne Code.',
      ogTitle: 'E-Mail-Verifizierung mit Zapier für 8.000+ Apps',
      ogDescription:
        'Prüfen Sie jede neue E-Mail-Adresse in Zapier mit Giggal.ai. Funktioniert mit HubSpot, Google Sheets, Salesforce, Mailchimp und über 8.000 weiteren Apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'E-Mail-Verifizierung mit Zapier für',
    h1Accent: '8.000+ Apps',
    intro:
      'Fügen Sie den [E-Mail-Checker](/de/email-adresse-pruefen) von Giggal.ai in jeden Zap ein. Jede Adresse wird geprüft, sobald sie ankommt. Das funktioniert mit Formularen, CRMs, Tabellen und E-Mail-Plattformen. Catch-all-Adressen erhalten gültig oder ungültig. Sie müssen keinen Code schreiben.',
    viewOnZapier: 'Auf Zapier ansehen',
    tabsTitle: 'Zapier-Workflows und Einrichtungsanleitung',
    tabsIntro:
      'Starten Sie mit einem gängigen Workflow, oder bauen Sie mit der Anleitung Ihren eigenen Zap in etwa fünf Minuten.',
    tabs: {
      cardSubtitle: 'Giggal.ai mit über 8.000 Apps verbinden',
      tryFree: 'Kostenlos testen',
      actionsTitle: '4 Zapier-Aktionen',
      actions: [
        { name: 'Verify Email', description: 'Prüft eine E-Mail-Adresse in Echtzeit, Catch-all-Adressen inklusive.' },
        { name: 'Start Bulk Verification', description: 'Übermittelt eine Liste von Adressen. Gibt eine Job-ID zurück, die spätere Schritte nutzen können.' },
        { name: 'Get Bulk Verification Results', description: 'Ruft die Ergebnisse eines Massenjobs ab, sobald sein Status abgeschlossen ist.' },
        { name: 'Get Credit Balance', description: 'Zeigt, wie viele Giggal.ai-Credits Sie noch haben.' },
      ],
      workflowsTab: 'Workflows',
      guideTab: 'Integrationsanleitung',
      workflows: [
        {
          title: 'Neue HubSpot-Kontakte prüfen',
          description:
            'Wird in HubSpot ein Kontakt angelegt, prüft Giggal.ai die E-Mail und schreibt das Ergebnis in eine Kontakteigenschaft.',
        },
        {
          title: 'Neue Zeilen in Google Sheets prüfen',
          description:
            'Jede neue Zeile wird beim Hinzufügen geprüft. Status, Risikostufe und Catch-all-Ergebnis werden in die Zeile zurückgeschrieben.',
        },
        {
          title: 'Neue Salesforce-Leads prüfen',
          description:
            'Jeder neue Lead wird geprüft, bevor ein Vertriebsmitarbeiter ihn bearbeitet. So schreibt niemand an ein Postfach, das nicht existiert.',
        },
        {
          title: 'Mailchimp-Anmeldungen prüfen',
          description:
            'Prüfen Sie jeden neuen Abonnenten bei der Anmeldung und fügen Sie nur zustellbare Adressen zu Ihrer Mailchimp-Zielgruppe hinzu.',
        },
        {
          title: 'Typeform-Antworten prüfen',
          description:
            'Finden Sie vertippte E-Mails und Wegwerfadressen in Formularantworten, bevor sie in Ihre anderen Tools gelangen.',
        },
        {
          title: 'Ergebnisse an Slack senden',
          description:
            'Senden Sie eine Slack-Nachricht, wenn eine Prüfung fertig ist oder wenn ein Lead auf einer Catch-all-Domain als gültig bestätigt wird.',
        },
      ],
      workflowCta: 'Auf Zapier einrichten',
      guideTitle: 'Giggal.ai mit Zapier verbinden',
      guideIntro:
        'Die Einrichtung dauert etwa fünf Minuten. Das Beispiel unten prüft jede neue Zeile in einer Google-Tabelle.',
      steps: [
        {
          title: 'Trigger-App auswählen',
          text: 'Erstellen Sie einen Zap und wählen Sie die App, die ihn startet. Jede der über 8.000 Apps auf Zapier funktioniert. In diesem Beispiel wählen Sie Google Sheets und das Ereignis New or Updated Spreadsheet Row. Verbinden Sie Ihr Konto und klicken Sie auf Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Trigger-Einrichtung in Zapier mit Google Sheets und dem Ereignis New or Updated Spreadsheet Row',
        },
        {
          title: 'Giggal.ai als Aktionsschritt hinzufügen',
          text: 'Suchen Sie im Aktionsschritt in der App-Auswahl nach Giggal.ai und wählen Sie es aus.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Suche nach Giggal.ai in der App-Auswahl von Zapier',
        },
        {
          title: 'Aktionsereignis wählen',
          text: 'Giggal.ai hat vier Aktionen: Verify Email, Start Bulk Verification, Get Bulk Verification Results und Get Credit Balance. Wählen Sie für dieses Beispiel Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Die vier Aktionsereignisse von Giggal.ai in der Ereignisauswahl von Zapier',
        },
        {
          title: 'Ihr Giggal.ai-Konto verbinden',
          text: 'Beim ersten Mal fragt Zapier nach Ihrem API-Schlüssel. Öffnen Sie im Giggal.ai-Dashboard den Tab Developer API und klicken Sie auf Create API Key. Fügen Sie den Schlüssel in Zapier ein und klicken Sie auf Connect. Neue Konten erhalten 1.000 kostenlose Credits, keine Karte nötig.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Verbindung des Giggal.ai-Kontos mit Zapier per API-Schlüssel',
        },
        {
          title: 'E-Mail-Feld zuordnen und das Ergebnis nutzen',
          text: 'Setzen Sie das Feld Email auf die Spalte mit der Adresse und starten Sie einen Test. Giggal.ai liefert Status, Risikostufe, Score und Catch-all-Ergebnis. Fügen Sie nach diesem Schritt Zapier-Filter oder Pfade hinzu. Schreiben Sie zum Beispiel zustellbare Adressen zurück in die Tabelle und verschieben Sie ungültige in ein anderes Tabellenblatt.',
        },
      ],
      help: 'Kommen Sie bei einem Schritt nicht weiter? [Kontaktieren Sie unser Team](/de/kontakt) oder lesen Sie die [API-Dokumentation](/de/api-dokumentation) mit dem vollständigen Antwortformat.',
    },
    why: [
      {
        title: 'Ein E-Mail-Checker für Catch-all-Adressen in Zapier',
        text: 'Viele Prüftools markieren Catch-all-Adressen als riskant und hören dort auf. In einer B2B-Liste können das rund 30 % der Adressen sein. Giggal.ai prüft diese Adressen weiter und liefert in Ihrem Zap gültig oder ungültig.',
      },
      {
        title: 'Prüfung direkt bei der Eingabe',
        text: 'Leads werden geprüft, sobald sie aus einem Formular, CRM oder einer Tabelle kommen. Ungültige Adressen gelangen nie in Ihre Listen. So müssen Sie später weniger bereinigen.',
      },
      {
        title: 'Ergebnisse, nach denen Ihr Zap verzweigen kann',
        text: 'Jede Prüfung liefert Status, Risikostufe, Zustellbarkeits-Score und Catch-all-Ergebnis. Nutzen Sie diese Werte in Zapier-Filtern und Pfaden, um jeden Lead an die richtige Stelle zu leiten.',
      },
    ],
    appsTitle: 'E-Mails aus jeder dieser Apps prüfen',
    appsIntro:
      'Für jede App unten gibt es eine eigene Anleitung zur E-Mail-Verifizierung über Zapier. Die Anleitungen sind auf Englisch.',
    categories: CATEGORIES,
    faqTitle: 'Häufige Fragen zur E-Mail-Verifizierung mit Zapier',
    faq: [
      {
        q: 'Wie funktioniert die Zapier-Integration von Giggal.ai?',
        a: 'Sie fügen einem Zap einen Giggal.ai-Schritt hinzu. Wenn der Trigger auslöst, zum Beispiel bei einem neuen CRM-Kontakt oder einer Formularantwort, sendet Zapier die E-Mail-Adresse an Giggal.ai. Giggal.ai prüft, ob das Postfach existiert, und gibt das Ergebnis an den nächsten Schritt weiter. Sie brauchen keinen Code.',
      },
      {
        q: 'Kann Zapier Catch-all-E-Mail-Adressen prüfen?',
        a: 'Ja, mit Giggal.ai als Prüfschritt. Die meisten Prüftools liefern bei Catch-all-Domains riskant oder unbekannt. Giggal.ai führt für diese Adressen zusätzliche Prüfungen durch und liefert gültig oder ungültig mit einem Score.',
      },
      {
        q: 'Welche Apps kann ich verbinden?',
        a: 'Jede App auf Zapier, zum Beispiel HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform und Slack. Wenn eine App auf Zapier verfügbar ist, kann sie Adressen an Giggal.ai senden.',
      },
      {
        q: 'Wie viele Credits kostet eine Prüfung über Zapier?',
        a: 'Einen Credit pro E-Mail-Adresse, genau wie im Dashboard oder über die API. Catch-all-Prüfungen kosten ebenfalls 1 Credit. Neue Konten erhalten 1.000 kostenlose Credits, keine Karte nötig.',
      },
      {
        q: 'Soll ich in Echtzeit oder in großen Mengen prüfen?',
        a: 'Die meisten Teams machen beides. Echtzeit-Prüfungen in Zapier stoppen ungültige Adressen bei der Eingabe. Die Massenprüfung bereinigt Ihre bestehenden Listen, im Dashboard oder mit der Aktion Start Bulk Verification.',
      },
    ],
    howToName: 'So prüfen Sie E-Mails in Zapier mit Giggal.ai',
    howToDescription:
      'Richten Sie die E-Mail-Verifizierung in jedem Zapier-Workflow ein, Catch-all-Adressen inklusive.',
    cta: {
      title: 'Jede neue E-Mail-Adresse in Zapier prüfen',
      text: 'Bauen Sie Ihren ersten Prüf-Zap in etwa fünf Minuten. Sie erhalten 1.000 kostenlose Credits ohne Karte, und Catch-all-Prüfungen sind inklusive.',
      primary: 'Kostenlos starten',
      secondary: 'Alle Integrationen ansehen',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'E-Mail-Verifizierung in n8n: offizieller Community Node | Giggal.ai',
      description:
        'E-Mails in n8n prüfen mit dem offiziellen Community Node von Giggal.ai. Einzelne Adressen oder ganze Listen, Catch-all inklusive. Paket: n8n-nodes-giggal.',
      ogTitle: 'E-Mail-Verifizierung in n8n: offizieller Community Node',
      ogDescription:
        'Prüfen Sie einzelne E-Mails und ganze Listen in n8n-Workflows mit dem Community Node von Giggal.ai. Catch-all-Adressen inklusive.',
    },
    crumb: 'n8n',
    h1Lead: 'E-Mail-Verifizierung in n8n mit dem',
    h1Accent: 'offiziellen Giggal.ai-Node',
    intro:
      'Fügen Sie den [E-Mail-Checker](/de/email-adresse-pruefen) von Giggal.ai in Ihre n8n-Workflows ein. Prüfen Sie eine Adresse in Echtzeit oder senden Sie eine ganze Liste als Batch-Job. Catch-all-Adressen erhalten gültig oder ungültig. Sie installieren den Node einmal aus npm.',
    viewOnNpm: 'Auf npm ansehen',
    opsTitle: 'Was der n8n-Node kann',
    opsIntro:
      'Der Node hat zwei Ressourcen und vier Operationen. Nutzen Sie Email für einzelne Prüfungen und Job für Listen.',
    ops: [
      { name: 'Verify', detail: 'Prüft eine E-Mail-Adresse in Echtzeit, Catch-all inklusive. 1 Credit pro Prüfung.' },
      { name: 'Verify Batch', detail: 'Sendet eine ganze Liste in einer Anfrage. Gibt eine Job-ID zurück, die Ihr Workflow später abfragen kann.' },
      { name: 'Get Status', detail: 'Zeigt den Fortschritt eines Batch-Jobs: Anzahl verarbeiteter Adressen, Prozentsatz und Endzeit.' },
      { name: 'Get Results', detail: 'Ruft die fertigen Ergebnisse seitenweise ab, optional mit einem Filter wie deliverable oder catch_all.' },
    ],
    installTitle: 'Node installieren und die erste E-Mail prüfen',
    installIntro:
      'Sie brauchen eine n8n-Instanz, in der Cloud oder selbst gehostet, und ein kostenloses Giggal.ai-Konto. Die Einrichtung dauert etwa fünf Minuten.',
    installSteps: [
      {
        title: 'Community nodes in den n8n-Einstellungen öffnen',
        text: 'Klicken Sie in n8n unten links auf Ihr Kontomenü und öffnen Sie Settings. Wählen Sie dann Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'Der Eintrag Community nodes im Einstellungsmenü von n8n',
      },
      {
        title: 'n8n-nodes-giggal installieren',
        text: 'Klicken Sie auf Install a community node. Geben Sie `n8n-nodes-giggal` in das Feld npm Package Name ein, setzen Sie das Häkchen und klicken Sie auf Install. Der Giggal.ai-Node erscheint dann in Ihrer Node-Liste.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Installation des Pakets n8n-nodes-giggal im Dialog Install community nodes',
      },
      {
        title: 'Node hinzufügen und Zugangsdaten anlegen',
        text: 'Fügen Sie den Giggal.ai-Node zu einem Workflow hinzu. Wählen Sie im Dropdown Credential die Option Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Anlegen neuer Giggal.ai-Zugangsdaten am Node in n8n',
      },
      {
        title: 'API-Schlüssel einfügen',
        text: 'Öffnen Sie im Giggal.ai-Dashboard den Tab Developer API und klicken Sie auf Create API Key. Fügen Sie den Schlüssel in das Feld API Key ein und speichern Sie. Jeder Giggal.ai-Node in Ihrer Instanz kann ihn jetzt nutzen. Neue Konten erhalten 1.000 kostenlose Credits, keine Karte nötig.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Hinzufügen des Giggal.ai-API-Schlüssels zu den Zugangsdaten in n8n',
      },
      {
        title: 'Die erste E-Mail prüfen',
        text: 'Setzen Sie Resource auf Email und Operation auf Verify. Ordnen Sie das Feld Email Address Ihren Daten zu, mit einem Ausdruck wie `{{ $json.email }}`. Klicken Sie dann auf Execute step. Die Ausgabe zeigt Status, Risikostufe, Zustellbarkeits-Score und Catch-all-Details.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Prüfung einer einzelnen E-Mail in n8n mit der Ausgabe des Ergebnisses',
      },
    ],
    batchTitle: 'Eine ganze Liste in n8n prüfen',
    batchIntro:
      'Für mehr als ein paar Adressen nutzen Sie die Ressource Job. Der Ablauf ist: Liste senden, Status prüfen, Ergebnisse abrufen.',
    batchSteps: [
      {
        title: 'Liste mit Verify Batch senden',
        text: 'Setzen Sie Operation auf Verify Batch und richten Sie Email Field auf die Eigenschaft mit den Adressen. Sie können dem Batch einen Namen geben, um ihn später im Dashboard zu finden. Lassen Sie Enable Catch-All Rescue eingeschaltet, damit Catch-all-Adressen weiter geprüft werden. Der Node gibt sofort eine Job-ID zurück, und die Prüfung läuft im Hintergrund.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Senden eines E-Mail-Batches zur Prüfung mit dem Giggal.ai-Node in n8n',
      },
      {
        title: 'Fortschritt mit Get Status prüfen',
        text: 'Setzen Sie Resource auf Job und Operation auf Get Status und übergeben Sie die Job-ID aus dem vorherigen Schritt. Setzen Sie einen Wait-Node zwischen die Abfragen, damit die Schleife nicht zu oft abfragt.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Prüfung des Batch-Fortschritts mit der Operation Get Status in n8n',
      },
      {
        title: 'Ergebnisse mit Get Results abrufen',
        text: 'Wenn der Status completed zeigt, führen Sie Get Results mit derselben Job-ID aus. Sie erhalten ein Element pro E-Mail mit Status, Risikostufe und Score. Mit dem Feld Status Filter rufen Sie nur Zeilen mit deliverable, undeliverable oder catch_all ab.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Abruf fertiger Batch-Ergebnisse in n8n',
      },
    ],
    calloutTitle: 'Catch-all- und Gateway-Adressen erhalten gültig oder ungültig',
    calloutText:
      'Viele Prüftools liefern unbekannt für Adressen hinter Sicherheits-Gateways und riskant für Catch-all-Domains. Giggal.ai [prüft Adressen hinter Gateways](/seg-email-verification) wie Proofpoint und Mimecast und führt auf Catch-all-Domains zusätzliche Prüfungen durch. [So funktioniert die Catch-all-Verifizierung](/de/catch-all-verifizierung).',
    faqTitle: 'Häufige Fragen zur E-Mail-Verifizierung in n8n',
    faq: [
      {
        q: 'Funktioniert der Giggal.ai-Node in n8n Cloud?',
        a: 'Ja. Installieren Sie ihn unter Settings und dann Community nodes und fügen Sie Ihren API-Schlüssel hinzu. Er funktioniert in n8n Cloud genauso wie auf selbst gehosteten Instanzen.',
      },
      {
        q: 'Ist die Installation des Community Nodes sicher?',
        a: 'Das Giggal.ai-Team veröffentlicht das Paket als n8n-nodes-giggal auf npm, und jeder kann den Quellcode lesen. Der Node kommuniziert nur mit der Giggal.ai-API, mit den Zugangsdaten, die Sie eingerichtet haben.',
      },
      {
        q: 'Kann n8n Catch-all-E-Mails prüfen?',
        a: 'Ja, mit dem Giggal.ai-Node. Einzelprüfungen behandeln Catch-all-Domains automatisch. Batch-Jobs tun das auch, wenn Enable Catch-All Rescue eingeschaltet ist. Sie erhalten gültig oder ungültig mit einem Score, nicht die Markierung riskant.',
      },
      {
        q: 'Was kostet die Prüfung in n8n?',
        a: 'Einen Credit pro E-Mail-Adresse, wie überall in Giggal.ai. Catch-all-Prüfungen kosten ebenfalls 1 Credit. Neue Konten starten mit 1.000 kostenlosen Credits, ohne Karte.',
      },
      {
        q: 'Was gibt der Node aus?',
        a: 'Jede E-Mail liefert Status, Risikostufe und Zustellbarkeits-Score. Dazu kommen Kennzeichen für Freemail-, Rollen- und Wegwerfadressen, Angaben zum Mailserver und das Catch-all-Ergebnis. Die Ausgabe ist normales n8n-JSON, das Sie filtern und zuordnen können.',
      },
    ],
    howToName: 'So prüfen Sie E-Mails in n8n mit dem Community Node von Giggal.ai',
    howToDescription:
      'Installieren Sie n8n-nodes-giggal, fügen Sie Ihren API-Schlüssel hinzu und prüfen Sie einzelne E-Mails oder ganze Listen in n8n-Workflows.',
    cta: {
      title: 'E-Mail-Verifizierung in Ihre n8n-Workflows einbauen',
      text: 'Installieren Sie n8n-nodes-giggal, fügen Sie Ihren API-Schlüssel ein und lassen Sie keine ungültigen E-Mail-Adressen mehr durch Ihre Workflows laufen. Sie erhalten 1.000 kostenlose Credits, keine Karte nötig.',
      primary: 'Kostenlos starten',
      secondary: 'Alle Integrationen ansehen',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'E-Mail-Verifizierung und Validierung in HubSpot | Giggal.ai',
      description:
        'E-Mail-Verifizierung in HubSpot mit Giggal.ai. Prüfen Sie Kontakte und Listen im CRM, erhalten Sie ein Ergebnis für Catch-all-Adressen und filtern Sie danach.',
      ogTitle: 'E-Mail-Verifizierung und Validierung in HubSpot',
      ogDescription:
        'Verbinden Sie Giggal.ai mit HubSpot, prüfen Sie Ihre Kontakte und Listen und filtern Sie in Ihrem CRM nach dem Ergebnis.',
    },
    crumb: 'HubSpot',
    h1Lead: 'E-Mail-Verifizierung',
    h1Accent: 'und Validierung in HubSpot',
    intro:
      'Prüfen Sie die Kontakte, die schon in Ihrem HubSpot-CRM sind. Verbinden Sie einmal, wählen Sie eine Liste, und jeder Kontakt erhält ein Ergebnis in seinem Datensatz. Catch-all-Adressen erhalten zustellbar oder unzustellbar, nicht riskant. Sie müssen nichts exportieren oder neu importieren.',
    openDashboard: 'Dashboard öffnen',
    capsTitle: 'Was die HubSpot-Integration macht',
    capsIntro: 'Vier Schritte, alle in HubSpot und Giggal.ai.',
    caps: [
      {
        name: 'Kontakte oder eine Liste importieren',
        detail: 'Wählen Sie All contacts oder eine beliebige HubSpot-Liste. Sie sehen zuerst die Anzahl der E-Mails und kennen so die Credit-Kosten, bevor Sie starten.',
      },
      {
        name: 'Jede Adresse prüfen',
        detail: 'Für jedes Postfach wird geprüft, ob es existiert. Catch-all-Domains erhalten ein klares Ergebnis, nicht riskant. 1 Credit pro Adresse.',
      },
      {
        name: 'Ergebnisse zurückschreiben',
        detail: 'An jedem Kontakt werden fünf Giggal-Eigenschaften gesetzt. So bleibt das Ergebnis beim Datensatz.',
      },
      {
        name: 'Filtern und Listen erstellen',
        detail: 'Nutzen Sie Giggal email status in HubSpot-Filtern und aktiven Listen. Entfernen Sie ungültige Adressen vor Ihrem nächsten Versand.',
      },
    ],
    stepsTitle: 'So verbinden Sie HubSpot und prüfen Ihre erste Liste',
    stepsIntro:
      'Es sind vier Schritte, und sie dauern etwa zwei Minuten. Sie brauchen ein Giggal.ai-Konto und in HubSpot die Berechtigung, Apps zu installieren und Kontakteigenschaften zu bearbeiten.',
    steps: [
      {
        title: 'Den Tab Integration in Giggal.ai öffnen',
        text: 'Melden Sie sich bei Giggal.ai an, gehen Sie zu Email Validation und öffnen Sie den Tab Integration. Suchen Sie die HubSpot-Karte und klicken Sie auf Connect. Wenn Sie noch kein Konto haben: Die Registrierung dauert eine Minute und enthält 1.000 kostenlose Credits.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Die HubSpot-Karte und der Button Connect im Tab Integration von Giggal.ai',
      },
      {
        title: 'Berechtigungen in HubSpot bestätigen',
        text: 'HubSpot zeigt eine eigene Freigabeseite mit allem, worauf Giggal.ai zugreifen kann: Kontakteigenschaften ansehen, Kontakte ändern, Einstellungen von Kontakteigenschaften ändern, Kontaktlisten ansehen und das installierende Konto lesen. Prüfen Sie die Liste und klicken Sie auf Connect app. Sie kehren zu Giggal.ai zurück, und die HubSpot-Karte zeigt jetzt Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Berechtigungsseite in HubSpot für die App Giggal Email Verifier',
      },
      {
        title: 'Eine Kontaktliste importieren',
        text: 'Klicken Sie auf der HubSpot-Karte auf Verify, um das Fenster Import from HubSpot zu öffnen. Wählen Sie All contacts oder eine beliebige Liste in Ihrem Portal. Jede Zeile zeigt, wie viele E-Mails sie enthält. So kennen Sie die Kosten, bevor Sie starten. Klicken Sie auf Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Fenster Import from HubSpot mit Kontaktlisten und der Anzahl der E-Mails',
      },
      {
        title: 'Liste prüfen und Ergebnisse synchronisieren',
        text: 'Giggal.ai prüft jede Adresse und schreibt das Ergebnis in den jeweiligen HubSpot-Kontakt, sobald die Prüfung fertig ist. Die Aufgabenkarte zeigt die Aufteilung der Ergebnisse und die Anzahl Synced to HubSpot. Mit Sync to HubSpot können Sie das Zurückschreiben jederzeit erneut starten.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Fertige HubSpot-Prüfung in Giggal.ai mit Ergebnissen, die nach HubSpot synchronisiert wurden',
      },
    ],
    calloutTitle: 'Warum ein E-Mail-Checker für Catch-all-Adressen in HubSpot sinnvoll ist',
    calloutText:
      'Rund 30 % einer B2B-Liste liegen auf Catch-all-Domains. Viele Prüftools liefern diese Kontakte als riskant, und Sie können nichts damit anfangen. Mit Giggal.ai können Sie jede [E-Mail-Adresse prüfen](/de/email-adresse-pruefen). Giggal.ai führt auf Catch-all-Domains zusätzliche Prüfungen durch und [prüft Adressen hinter Sicherheits-Gateways](/seg-email-verification) wie Proofpoint und Mimecast. Die meisten dieser Kontakte erhalten zustellbar oder unzustellbar. [So funktioniert die Catch-all-Verifizierung](/de/catch-all-verifizierung).',
    propsTitle: 'HubSpot-Eigenschaften, die Giggal.ai an jeden Kontakt schreibt',
    propsIntro:
      'Die fünf Eigenschaften werden bei Ihrer ersten Prüfung angelegt. Sie liegen in einer Eigenschaftsgruppe namens Giggal Email Verifier. Ihre bestehenden HubSpot-Eigenschaften werden nicht geändert.',
    propsHead: ['Eigenschaft', 'Typ', 'Was sie aussagt'],
    props: [
      ['Giggal email is valid', 'Checkbox', 'Ja, wenn bestätigt wurde, dass das Postfach existiert.'],
      ['Giggal email status', 'Dropdown', 'Deliverable, Undeliverable, Risky oder Unknown.'],
      ['Giggal deliverability score', 'Zahl', 'Sicherheit des Ergebnisses von 0 bis 100.'],
      ['Giggal email detail', 'Text', 'Ein kurzer Grund für das Ergebnis.'],
      ['Giggal verified at', 'Datum', 'Wann die Adresse zuletzt geprüft wurde.'],
    ],
    scopesTitle: 'HubSpot-Berechtigungen und Daten',
    scopesIntro: 'Giggal.ai fragt vier HubSpot-Scopes an. Jeder hat genau einen Zweck.',
    scopes: [
      ['crm.objects.contacts.read', 'Die E-Mail-Adresse der Kontakte lesen, die Sie prüfen möchten.'],
      ['crm.objects.contacts.write', 'Das Prüfergebnis an diese Kontakte zurückschreiben.'],
      ['crm.schemas.contacts.write', 'Die fünf Giggal-Eigenschaften bei der ersten Nutzung anlegen.'],
      ['crm.lists.read', 'Ihre Kontaktlisten anzeigen, damit Sie eine zur Prüfung auswählen können.'],
    ],
    scopesNote:
      'Giggal.ai liest nur die E-Mail-Adresse der Kontakte, die Sie auswählen. Es legt keine Kontakte an und löscht keine. Es ändert keine Eigenschaften außer den fünf oben genannten. Und es sendet nie E-Mails an die geprüften Adressen.',
    faqTitle: 'Häufige Fragen zur E-Mail-Verifizierung in HubSpot',
    faq: [
      {
        q: 'Sendet Giggal.ai E-Mails an meine Kontakte?',
        a: 'Nein. Die Prüfung spricht mit dem empfangenden Mailserver und stoppt, bevor eine Nachricht gesendet wird. Ihre Kontakte erhalten nichts, weder im Posteingang noch im Spam-Ordner.',
      },
      {
        q: 'Was ändert sich in meinem HubSpot-Konto?',
        a: 'Bei der ersten Nutzung wird eine Eigenschaftsgruppe namens Giggal Email Verifier mit fünf eigenen Kontakteigenschaften angelegt. Danach schreibt Giggal.ai Ergebnisse nur in diese Eigenschaften. Bestehende HubSpot-Eigenschaften werden nicht geändert, und es werden keine Kontakte angelegt oder gelöscht.',
      },
      {
        q: 'Kann es Catch-all-Domains prüfen?',
        a: 'Ja. Das ist der Hauptgrund, Giggal.ai mit HubSpot zu nutzen. Viele Prüftools liefern bei Catch-all-Domains riskant oder unbekannt. Giggal.ai prüft weiter und liefert bei den meisten zustellbar oder unzustellbar.',
      },
      {
        q: 'Ist E-Mail-Validierung dasselbe wie E-Mail-Verifizierung?',
        a: 'In der Praxis ja. Beide Begriffe beschreiben die Prüfung, ob eine Adresse E-Mails empfangen kann. Giggal.ai prüft das Format, die Mailserver der Domain und das Postfach. Dann schreibt es ein Ergebnis in den HubSpot-Kontakt.',
      },
      {
        q: 'Was kostet es?',
        a: 'Einen Credit pro Adresse, Catch-all-Prüfungen inklusive. Neue Konten starten mit 1.000 kostenlosen Credits, und der Preis pro Adresse sinkt mit steigendem Volumen.',
      },
      {
        q: 'Wie nutze ich die Ergebnisse in HubSpot?',
        a: 'Filtern Sie Kontakte oder erstellen Sie eine aktive Liste nach Giggal email status. Üblich ist eine aktive Liste mit Deliverable-Kontakten als Versandzielgruppe und eine Sperrliste mit Undeliverable-Kontakten.',
      },
      {
        q: 'Wie trenne ich die Verbindung?',
        a: 'Öffnen Sie den Tab Integration in Giggal.ai, klicken Sie auf der HubSpot-Karte auf das Einstellungssymbol und wählen Sie Disconnect. Sie können die App auch in HubSpot entfernen, unter Settings, Integrations, Connected Apps. Bereits geschriebene Ergebnisse bleiben an Ihren Kontakten.',
      },
    ],
    howToName: 'So prüfen Sie HubSpot-Kontakte mit Giggal.ai',
    howToDescription:
      'Verbinden Sie Giggal.ai mit HubSpot, prüfen Sie eine Kontaktliste und lesen Sie das Ergebnis aus fünf Eigenschaften an jedem Kontakt.',
    cta: {
      title: 'Bereinigen Sie Ihre HubSpot-Kontakte',
      text: 'Verbinden Sie einmal, und jeder Kontakt in Ihrem CRM erhält ein Prüfergebnis, nach dem Sie filtern können. Sie starten mit 1.000 kostenlosen Credits, keine Karte nötig.',
      primary: 'Kostenlos starten',
      secondary: 'Alle Integrationen ansehen',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'MCP-Server zur E-Mail-Verifizierung in Claude, ChatGPT | Giggal.ai',
      description:
        'Verbinden Sie Giggal.ai per MCP mit Claude, ChatGPT, Cursor und VS Code und prüfen Sie E-Mails im Chat. Catch-all-Adressen erhalten gültig oder ungültig.',
      ogTitle: 'MCP-Server zur E-Mail-Verifizierung in Claude und ChatGPT',
      ogDescription:
        'Giggal.ai betreibt einen Remote-MCP-Server. So können Claude, ChatGPT, Cursor und VS Code E-Mail-Adressen prüfen. Catch-all-Prüfungen inklusive.',
    },
    crumb: 'MCP',
    h1Lead: 'Ein MCP-Server zur E-Mail-Verifizierung in',
    h1Accent: 'Claude und ChatGPT',
    intro:
      'Giggal.ai betreibt einen Remote-MCP-Server. Verbinden Sie ihn mit Claude, ChatGPT, Cursor oder VS Code, und Ihr KI-Assistent arbeitet als [E-Mail-Checker](/de/email-adresse-pruefen). Bitten Sie ihn, eine Adresse oder eine Liste zu prüfen. Er antwortet direkt im Chat.',
    urlLabel: 'MCP-URL',
    points: [
      'Claude und ChatGPT melden sich per OAuth an',
      'Code-Editoren nutzen Ihren API-Schlüssel',
      'Catch-all-Prüfungen inklusive',
    ],
    setupTitle: 'MCP-Server in Ihrem KI-Tool einrichten',
    setupSubtitle:
      'Wählen Sie Ihr Tool, um die Schritte zu sehen. Claude und ChatGPT verbinden sich über eine Anmeldung. Code-Editoren lesen eine Konfigurationsdatei.',
    toolsTitle: 'Was der KI-Assistent kann',
    toolsIntro:
      'Der Server gibt Ihrem Assistenten drei Tools. Sie fragen in normalen Sätzen, und er wählt das passende Tool.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Adressen prüfen',
        body: 'Prüft eine E-Mail oder eine Liste. Jede Adresse erhält gültig oder ungültig, auch Adressen auf Catch-all-Domains.',
      },
      {
        tool: 'get_verification_details',
        title: 'Vollständige Ergebnisse abrufen',
        body: 'Ruft die Details einer früheren Prüfung ab: Status, Grundcodes und Zustellbarkeits-Score für jede Adresse.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Credits abfragen',
        body: 'Fragen Sie, wie viele Credits übrig sind, bevor Sie eine große Prüfung starten.',
      },
    ],
    whyTitle: 'Warum das Catch-all-Ergebnis im Chat wichtig ist',
    why: [
      'Rund 30 % einer B2B-Liste liegen auf Catch-all-Domains. Diese Domains nehmen E-Mails für jede Adresse an, ob das Postfach existiert oder nicht. Viele Prüftools markieren diese Adressen als riskant. Das heißt: Sie konnten es nicht feststellen.',
      'Im Chat hilft diese Markierung nicht. Der Assistent gibt wieder, was er erhalten hat. Ein Drittel Ihrer Liste kommt dann als unsicher zurück. Giggal.ai prüft diese Adressen weiter und liefert gültig oder ungültig. Dasselbe gilt für Postfächer hinter 15 namentlich bekannten Sicherheits-Gateways, darunter Proofpoint, Mimecast und Barracuda.',
      'Beispiel-Prompts finden Sie im Artikel [E-Mails in Claude und ChatGPT prüfen](/de/blog/e-mails-in-claude-und-chatgpt-pruefen). Der MCP-Server nutzt dieselbe Prüftechnik wie die [API für E-Mail-Verifizierung](/email-verification-api).',
    ],
    faqTitle: 'Häufige Fragen zum MCP-Server für E-Mail-Verifizierung',
    faq: [
      {
        q: 'Kann Claude E-Mail-Adressen prüfen?',
        a: `Ja, sobald Sie ein Tool zur E-Mail-Verifizierung per MCP verbinden. Fügen Sie den Giggal.ai-Server unter ${MCP_URL} in Claude als benutzerdefinierten Connector hinzu, oder in Claude Code mit dem Befehl claude mcp add. Fragen Sie dann zum Beispiel: „Prüfe diese elf Adressen und sag mir, welche bouncen werden.“ Claude ruft das Tool verify_emails auf und zeigt das Ergebnis im Chat.`,
      },
      {
        q: 'Kann ChatGPT E-Mail-Adressen prüfen?',
        a: 'Ja, in ChatGPT-Tarifen, die benutzerdefinierte Connectors erlauben. Fügen Sie Giggal.ai als benutzerdefiniertes Plugin mit der MCP-Server-URL hinzu und melden Sie sich per OAuth an. Jeder Client mit Unterstützung für Remote-MCP kann denselben Server nutzen, zum Beispiel Cursor, VS Code, Windsurf, Cline und Zed.',
      },
      {
        q: 'Was kann der KI-Assistent tun?',
        a: 'Drei Dinge. verify_emails prüft eine Adresse oder eine Liste. get_verification_details liefert das vollständige Ergebnis für jede Adresse, mit Status und Grundcodes. get_credit_balance zeigt, wie viele Credits übrig sind.',
      },
      {
        q: 'Wie geht er mit Catch-all-Adressen um?',
        a: 'Genauso wie der Rest von Giggal.ai. Viele Prüftools markieren Catch-all-Adressen als riskant. Giggal.ai liefert für sie gültig oder ungültig. Das gilt auch für Postfächer hinter 15 namentlich bekannten Sicherheits-Gateways wie Proofpoint, Mimecast und Barracuda.',
      },
      {
        q: 'Brauche ich einen API-Schlüssel?',
        a: 'Nicht für Claude oder ChatGPT. Beide verbinden sich per OAuth, Sie melden sich also mit Ihrem Giggal.ai-Konto an. Code-Editoren wie Claude Code, Cursor und VS Code nutzen einen API-Schlüssel. Sie finden ihn im Tab Developer API der Giggal.ai-App.',
      },
      {
        q: 'Kostet die Prüfung über MCP mehr?',
        a: 'Nein. Sie nutzt dieselben Credits wie das Dashboard und die REST-API: 1 Credit pro Adresse, Catch-all inklusive. Neue Konten erhalten 1.000 kostenlose Credits ohne Karte, und Credits verfallen nicht.',
      },
      {
        q: 'Soll ich auf diesem Weg eine große Liste bereinigen?',
        a: 'Nein. MCP passt am besten, wenn die Prüfung ein Schritt in einer Aufgabe ist, zum Beispiel ein Dutzend Kontakte prüfen, bevor Sie eine Outreach-Nachricht schreiben. Für Zehntausende Adressen nutzen Sie den Massen-Upload in der App oder die REST-API.',
      },
    ],
    howToName: 'Die E-Mail-Verifizierung von Giggal.ai per MCP mit Claude oder ChatGPT verbinden',
    howToDescription:
      'Vier Schritte, um E-Mail-Adressen mit dem MCP-Server von Giggal.ai in Claude, ChatGPT, Cursor oder VS Code zu prüfen, Catch-all inklusive.',
    setupSteps: [
      {
        name: 'Ein Giggal.ai-Konto erstellen',
        text: 'Registrieren Sie sich bei Giggal.ai. Neue Konten erhalten 1.000 kostenlose Prüf-Credits, keine Karte nötig.',
      },
      {
        name: 'Den MCP-Server im Client hinzufügen',
        text: `Nutzen Sie die Server-URL ${MCP_URL}. In Claude fügen Sie sie unter Settings und dann Connectors hinzu. In ChatGPT fügen Sie sie als benutzerdefiniertes Plugin hinzu. Code-Editoren lesen eine JSON-Konfigurationsdatei. Diese Seite zeigt sie für jeden Editor.`,
      },
      {
        name: 'Anmelden oder API-Schlüssel hinzufügen',
        text: 'Claude und ChatGPT bitten Sie, sich bei Giggal.ai anzumelden und auf Allow zu klicken. Code-Editoren brauchen den API-Schlüssel aus dem Tab Developer API in der App.',
      },
      {
        name: 'Den Assistenten bitten, eine Adresse zu prüfen',
        text: 'Fragen Sie in normalen Sätzen, zum Beispiel: „Prüfe hello@example.com und sag mir, ob es ein echtes Postfach ist.“ Der Assistent ruft verify_emails auf und zeigt das Ergebnis.',
      },
    ],
    ctaTitle: 'Verbinden Sie Giggal.ai mit Ihrem KI-Assistenten',
    ctaText:
      'Starten Sie mit 1.000 kostenlosen Prüf-Credits, keine Karte nötig. Fügen Sie die MCP-URL in Claude, ChatGPT oder Ihrem Code-Editor hinzu.',
    ctaButton: 'Kostenlos starten',
  },
}
