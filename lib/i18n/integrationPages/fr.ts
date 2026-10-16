import type { IntegrationPagesContent } from './types'

// French copy for the integration pages. Keyword targets (Ahrefs, France):
//   vérifier adresse mail 900-1,600 / KD 3-4, vérifier une adresse mail 1,300,
//   vérification adresse mail 700, test adresse mail 700.
// The checker keyword links to /fr/verifier-adresse-mail. Product UI labels
// (Zapier, n8n, HubSpot, Giggal.ai dashboard), property names, status values,
// scopes, tool names and code stay in English, as the apps show them.
// Typography: no-break space before : ? ! ; and inside « », "vous" register.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Automatisation marketing',
  'Email Marketing': 'Emailing',
  CRM: 'CRM',
  Ecommerce: 'E-commerce',
  'Sales & Outreach': 'Vente et prospection',
  'Forms & Surveys': 'Formulaires et sondages',
  'Website & Popups': 'Site web et pop-ups',
  'Spreadsheets & Data': 'Tableurs et données',
  Support: 'Support client',
  Payments: 'Paiements',
  Automation: 'Automatisation',
  Spreadsheets: 'Tableurs',
  Forms: 'Formulaires',
  'AI & Agents': 'IA et agents',
  Developer: 'Développeurs',
}

export const FR: IntegrationPagesContent = {
  common: {
    locale: 'fr',
    hubPath: '/fr/integrations',
    hubCrumb: 'Intégrations',
    checkerPath: '/fr/verifier-adresse-mail',
    signupLabel: 'Commencer avec 1 000 crédits offerts',
    getStarted: 'Commencer gratuitement',
    allIntegrations: 'Voir toutes les intégrations',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Intégrations de vérification d’adresse mail | Giggal.ai',
      description:
        'Intégrations de vérification d’adresse mail pour HubSpot, Zapier, n8n, Mailchimp, Claude et ChatGPT. Vérifiez vos emails dans vos outils, catch-all compris.',
      ogTitle: 'Intégrations de vérification d’adresse mail : HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Connectez le vérificateur d’adresse mail Giggal.ai à HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude et ChatGPT.',
    },
    h1Lead: 'Intégrations de vérification d’adresse mail pour',
    h1Accent: 'les outils que vous utilisez déjà',
    intro:
      'Giggal.ai vous permet de [vérifier une adresse mail](/fr/verifier-adresse-mail) depuis votre CRM, votre plateforme d’emailing, vos feuilles de calcul et votre assistant IA. Chaque vérification indique si la boîte mail existe. Les adresses catch-all reçoivent aussi un résultat valide ou invalide.',
    waysTitle: 'Quatre façons d’ajouter la vérification d’email à vos outils',
    waysIntro:
      'Choisissez la méthode qui correspond à votre façon de travailler. Chaque méthode utilise les mêmes crédits et renvoie le même résultat.',
    ways: [
      {
        label: 'Direct',
        title: 'Intégrations directes',
        text: 'Connectez [HubSpot](/fr/integrations/hubspot), Mailchimp, SendGrid et d’autres plateformes depuis le tableau de bord Giggal.ai. Importez une liste, vérifiez-la, puis renvoyez la liste nettoyée.',
      },
      {
        label: 'Automatisation',
        title: 'Zapier et n8n',
        text: 'Vérifiez chaque nouveau contact, chaque réponse de formulaire ou chaque ligne de tableur dès son arrivée. Utilisez l’application Giggal.ai sur [Zapier](/fr/integrations/zapier) ou le nœud officiel pour [n8n](/fr/integrations/n8n).',
      },
      {
        label: 'MCP',
        title: 'Assistants IA',
        text: 'Ajoutez le [serveur MCP Giggal.ai](/fr/mcp) à Claude, ChatGPT, Cursor ou VS Code. Demandez ensuite à l’assistant de vérifier des adresses dans le chat.',
      },
      {
        label: 'API',
        title: 'API REST',
        text: 'Envoyez des demandes de vérification unitaire ou en masse depuis votre propre code. Les résultats arrivent au format JSON. La [documentation de l’API](/fr/documentation-api) liste chaque endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Rechercher une intégration…',
      searchAria: 'Rechercher une intégration',
      connectionAria: 'Filtrer par type de connexion',
      connection: { all: 'Toutes', direct: 'Directe', zapier: 'Via Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filtrer par catégorie',
      allCategories: 'Toutes les catégories',
      categories: CATEGORIES,
      prevPage: 'Page précédente',
      nextPage: 'Page suivante',
      pagination: 'Pagination',
      showing: 'Intégrations {from} à {to} sur {total}',
      noMatchTitle: 'Aucune intégration ne correspond à votre recherche.',
      noMatchText:
        'Tout outil capable d’envoyer une requête HTTP peut utiliser l’[API REST](/fr/documentation-api).',
      descriptions: {
        zapier:
          'Vérifiez chaque nouvel email en temps réel dans plus de 8 000 applications, catch-all compris. Sans code.',
        n8n:
          'Vérifiez une adresse ou une liste entière dans vos workflows n8n avec le nœud communautaire officiel Giggal.ai.',
        claude:
          'Ajoutez le serveur MCP Giggal.ai à Claude et vérifiez des adresses mail dans le chat.',
        chatgpt:
          'Ajoutez le serveur MCP Giggal.ai à ChatGPT et vérifiez des adresses mail dans le chat.',
        clay:
          'Vérifiez les emails de vos prospects dans les tables Clay via l’API Giggal.ai, catch-all compris.',
        'rest-api':
          'API REST pour la vérification d’email unitaire, en masse et catch-all. Créez l’intégration dont vous avez besoin.',
        mailchimp:
          'Importez une audience Mailchimp, vérifiez-la et gardez uniquement les abonnés délivrables.',
        mailgun:
          'Connectez Mailgun et vérifiez vos listes d’envoi avant chaque campagne.',
        mailjet:
          'Importez vos listes de contacts Mailjet dans Giggal.ai et vérifiez-les, catch-all compris.',
        sendgrid:
          'Vérifiez vos contacts SendGrid en masse pour protéger votre réputation d’expéditeur.',
        activecampaign:
          'Importez vos contacts ActiveCampaign, vérifiez-les et retirez les mauvaises adresses avant l’envoi.',
        'campaign-monitor':
          'Connectez Campaign Monitor et vérifiez chaque liste d’abonnés dans Giggal.ai.',
        getresponse:
          'Vérifiez vos listes GetResponse pour réduire les rebonds, y compris sur les domaines catch-all.',
        aweber:
          'Importez vos abonnés AWeber, vérifiez-les et renvoyez une liste propre.',
        mailerlite:
          'Connectez MailerLite et vérifiez vos listes d’abonnés avant votre prochaine campagne.',
        drip:
          'Vérifiez vos contacts Drip en masse pour que vos emails automatiques atteignent de vraies boîtes.',
        'elastic-email':
          'Importez vos listes Elastic Email et vérifiez-les, y compris les adresses catch-all et derrière une passerelle sécurisée.',
        'reply-io':
          'Vérifiez les emails de vos prospects avant le départ de vos séquences Reply.io, pour écrire à de vraies boîtes.',
        'zoho-crm':
          'Importez vos contacts et leads Zoho CRM, vérifiez-les et gardez des données CRM propres.',
        'google-sheets':
          'Vérifiez chaque nouvelle ligne dès son ajout et écrivez le résultat dans votre feuille.',
        hubspot:
          'Vérifiez les contacts et les listes de votre CRM HubSpot, puis filtrez sur le résultat dans HubSpot.',
        salesforce:
          'Vérifiez l’email de chaque nouveau lead Salesforce dès sa création.',
        typeform:
          'Vérifiez les emails des réponses Typeform avant qu’ils n’arrivent dans vos autres outils.',
        slack:
          'Publiez les résultats de vérification et les alertes de liste dans un canal Slack.',
      },
      zapierAppDescription:
        'Vérifiez en temps réel, via Zapier, les adresses mail qui arrivent dans {name}.',
      logoAlt: 'Intégration de vérification d’email {name} avec Giggal.ai',
    },
    appListTitle: 'Toutes les applications Zapier prises en charge',
    appListIntro: '{count} applications se connectent à Giggal.ai via Zapier. Chacune a son propre guide de configuration (en anglais).',
    apiTitle: 'Votre outil n’est pas dans la liste ?',
    apiText:
      'Tout outil capable d’envoyer une requête HTTP peut vérifier des emails avec Giggal.ai. Utilisez l’[API de vérification d’email](/email-verification-api) (en anglais) pour les vérifications unitaires et en masse, ou connectez-vous via Zapier.',
    apiCta: 'Documentation de l’API',
    apiHref: '/fr/documentation-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier : vérifier une adresse mail dans 8 000+ apps | Giggal.ai',
      description:
        'Vérifiez chaque adresse mail dans Zapier avec Giggal.ai, en temps réel. Les adresses catch-all reçoivent un résultat valide ou invalide. Sans code.',
      ogTitle: 'Zapier : vérifier une adresse mail dans plus de 8 000 apps',
      ogDescription:
        'Vérifiez chaque nouvelle adresse mail dans Zapier avec Giggal.ai. Fonctionne avec HubSpot, Google Sheets, Salesforce, Mailchimp et plus de 8 000 autres apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'Vérification d’adresse mail avec Zapier dans',
    h1Accent: 'plus de 8 000 applications',
    intro:
      'Ajoutez Giggal.ai à n’importe quel Zap pour [vérifier une adresse mail](/fr/verifier-adresse-mail) dès son arrivée. Cela fonctionne avec les formulaires, les CRM, les tableurs et les plateformes d’emailing. Les adresses catch-all reçoivent un résultat valide ou invalide. Vous n’avez pas besoin d’écrire de code.',
    viewOnZapier: 'Voir sur Zapier',
    tabsTitle: 'Workflows Zapier et guide de configuration',
    tabsIntro:
      'Partez d’un workflow courant, ou suivez le guide pour créer votre propre Zap en cinq minutes environ.',
    tabs: {
      cardSubtitle: 'Connectez Giggal.ai à plus de 8 000 applications',
      tryFree: 'Essayer gratuitement',
      actionsTitle: '4 actions Zapier',
      actions: [
        { name: 'Verify Email', description: 'Vérifie une adresse mail en temps réel, catch-all compris.' },
        { name: 'Start Bulk Verification', description: 'Envoie une liste d’adresses. Renvoie un identifiant de tâche que les étapes suivantes peuvent utiliser.' },
        { name: 'Get Bulk Verification Results', description: 'Récupère les résultats d’une tâche en masse une fois son statut terminé.' },
        { name: 'Get Credit Balance', description: 'Indique combien de crédits Giggal.ai il vous reste.' },
      ],
      workflowsTab: 'Workflows',
      guideTab: 'Guide d’intégration',
      workflows: [
        {
          title: 'Vérifier les nouveaux contacts HubSpot',
          description:
            'Quand un contact est créé dans HubSpot, Giggal.ai vérifie son email et écrit le résultat dans une propriété du contact.',
        },
        {
          title: 'Vérifier les nouvelles lignes Google Sheets',
          description:
            'Chaque nouvelle ligne est vérifiée dès son ajout. Le statut, le niveau de risque et le résultat catch-all sont écrits dans la ligne.',
        },
        {
          title: 'Vérifier les nouveaux leads Salesforce',
          description:
            'Chaque nouveau lead est vérifié avant qu’un commercial ne le traite. Personne n’écrit à une boîte mail qui n’existe pas.',
        },
        {
          title: 'Vérifier les inscriptions Mailchimp',
          description:
            'Vérifiez chaque nouvel abonné à l’inscription et ajoutez uniquement les adresses délivrables à votre audience Mailchimp.',
        },
        {
          title: 'Contrôler les réponses Typeform',
          description:
            'Repérez les emails mal saisis et jetables dans les réponses aux formulaires, avant qu’ils n’arrivent dans vos autres outils.',
        },
        {
          title: 'Envoyer les résultats dans Slack',
          description:
            'Publiez un message Slack quand une vérification se termine, ou quand un lead sur un domaine catch-all est confirmé comme valide.',
        },
      ],
      workflowCta: 'Configurer sur Zapier',
      guideTitle: 'Connecter Giggal.ai à Zapier',
      guideIntro:
        'La configuration prend environ cinq minutes. L’exemple ci-dessous vérifie chaque nouvelle ligne d’une feuille Google Sheets.',
      steps: [
        {
          title: 'Choisissez l’application de déclenchement',
          text: 'Créez un Zap et choisissez l’application qui le déclenche. Toutes les applications de Zapier fonctionnent, soit plus de 8 000. Dans cet exemple, choisissez Google Sheets et l’événement New or Updated Spreadsheet Row. Connectez votre compte et cliquez sur Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Configuration du déclencheur Zapier avec Google Sheets et l’événement New or Updated Spreadsheet Row',
        },
        {
          title: 'Ajoutez Giggal.ai comme étape d’action',
          text: 'Dans l’étape d’action, cherchez Giggal.ai dans le sélecteur d’applications et sélectionnez-le.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Recherche de Giggal.ai dans le sélecteur d’applications de Zapier',
        },
        {
          title: 'Choisissez un événement d’action',
          text: 'Giggal.ai propose quatre actions : Verify Email, Start Bulk Verification, Get Bulk Verification Results et Get Credit Balance. Pour cet exemple, choisissez Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Les quatre événements d’action Giggal.ai dans le sélecteur d’événements de Zapier',
        },
        {
          title: 'Connectez votre compte Giggal.ai',
          text: 'La première fois, Zapier demande votre clé API. Dans le tableau de bord Giggal.ai, ouvrez l’onglet Developer API et cliquez sur Create API Key. Collez la clé dans Zapier et cliquez sur Connect. Les nouveaux comptes reçoivent 1 000 crédits offerts, sans carte bancaire.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Connexion du compte Giggal.ai à Zapier avec une clé API',
        },
        {
          title: 'Associez le champ email et utilisez le résultat',
          text: 'Reliez le champ Email à la colonne qui contient l’adresse, puis lancez un test. Giggal.ai renvoie le statut, le niveau de risque, le score et le résultat catch-all. Ajoutez des filtres ou des chemins (Filter, Paths) Zapier après cette étape. Par exemple, écrivez les adresses délivrables dans la feuille et déplacez les adresses invalides dans un autre onglet.',
        },
      ],
      help: 'Vous bloquez sur une étape ? [Contactez notre équipe](/fr/contact) ou lisez la [documentation de l’API](/fr/documentation-api) pour le format complet de la réponse.',
    },
    why: [
      {
        title: 'Un vérificateur d’adresses catch-all sur Zapier',
        text: 'Beaucoup de vérificateurs classent les adresses catch-all comme « risquées » et s’arrêtent là. Sur une liste B2B, cela peut représenter environ 30 % des adresses. Giggal.ai les contrôle plus en détail et renvoie valide ou invalide dans votre Zap.',
      },
      {
        title: 'La vérification au moment de la saisie',
        text: 'Les leads sont vérifiés dès leur arrivée depuis un formulaire, un CRM ou un tableur. Les mauvaises adresses n’entrent jamais dans vos listes, et vous avez moins à nettoyer ensuite.',
      },
      {
        title: 'Des résultats utilisables dans vos filtres Zapier',
        text: 'Chaque vérification renvoie un statut, un niveau de risque, un score de délivrabilité et un résultat catch-all. Utilisez-les dans les filtres et les chemins Zapier pour envoyer chaque lead au bon endroit.',
      },
    ],
    appsTitle: 'Vérifiez les emails de toutes ces applications',
    appsIntro: 'Chaque application ci-dessous a son propre guide de vérification d’email via Zapier (en anglais).',
    categories: CATEGORIES,
    faqTitle: 'FAQ sur la vérification d’adresse mail avec Zapier',
    faq: [
      {
        q: 'Comment fonctionne l’intégration Zapier de Giggal.ai ?',
        a: 'Vous ajoutez une étape Giggal.ai à un Zap. Quand le déclencheur s’active, par exemple pour un nouveau contact CRM ou une réponse de formulaire, Zapier envoie l’adresse mail à Giggal.ai. Giggal.ai vérifie si la boîte mail existe et transmet le résultat à l’étape suivante. Aucun code n’est nécessaire.',
      },
      {
        q: 'Zapier peut-il vérifier les adresses catch-all ?',
        a: 'Oui, avec Giggal.ai comme étape de vérification. La plupart des vérificateurs renvoient « risquée » ou « inconnue » pour les domaines catch-all. Giggal.ai fait des contrôles supplémentaires sur ces adresses et renvoie valide ou invalide, avec un score.',
      },
      {
        q: 'Quelles applications puis-je connecter ?',
        a: 'Toutes les applications de Zapier, dont HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform et Slack. Si une application est sur Zapier, elle peut envoyer des adresses à Giggal.ai.',
      },
      {
        q: 'Combien de crédits coûte une vérification via Zapier ?',
        a: 'Un crédit par adresse mail, comme dans le tableau de bord ou avec l’API. Une vérification catch-all coûte le même crédit. Les nouveaux comptes reçoivent 1 000 crédits offerts, sans carte bancaire.',
      },
      {
        q: 'Faut-il vérifier en temps réel ou en masse ?',
        a: 'La plupart des équipes font les deux. La vérification en temps réel dans Zapier bloque les mauvaises adresses à l’entrée. La vérification en masse nettoie les listes que vous avez déjà, dans le tableau de bord ou avec l’action Start Bulk Verification.',
      },
    ],
    howToName: 'Comment vérifier une adresse mail dans Zapier avec Giggal.ai',
    howToDescription:
      'Configurez la vérification d’adresse mail, catch-all compris, dans n’importe quel workflow Zapier.',
    cta: {
      title: 'Vérifiez chaque nouvelle adresse mail dans Zapier',
      text: 'Créez votre premier Zap de vérification en cinq minutes environ. Vous recevez 1 000 crédits offerts, sans carte bancaire, et la vérification catch-all est incluse.',
      primary: 'Commencer gratuitement',
      secondary: 'Voir toutes les intégrations',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Vérification d’adresse mail dans n8n : nœud officiel | Giggal.ai',
      description:
        'Vérifiez vos emails dans n8n avec le nœud communautaire officiel Giggal.ai. Une adresse ou une liste entière, catch-all compris. Paquet npm n8n-nodes-giggal.',
      ogTitle: 'Vérification d’adresse mail dans n8n : nœud communautaire officiel',
      ogDescription:
        'Vérifiez une adresse ou une liste entière dans vos workflows n8n avec le nœud communautaire Giggal.ai. Adresses catch-all comprises.',
    },
    crumb: 'n8n',
    h1Lead: 'Vérification d’adresse mail dans n8n avec le',
    h1Accent: 'nœud officiel Giggal.ai',
    intro:
      'Ajoutez Giggal.ai à vos workflows n8n pour [vérifier une adresse mail](/fr/verifier-adresse-mail) en temps réel, ou envoyez une liste entière en tâche groupée. Les adresses catch-all reçoivent un résultat valide ou invalide. Vous installez le nœud une seule fois depuis npm.',
    viewOnNpm: 'Voir sur npm',
    opsTitle: 'Ce que fait le nœud n8n',
    opsIntro:
      'Le nœud propose deux ressources et quatre opérations. Utilisez Email pour une adresse et Job pour une liste.',
    ops: [
      { name: 'Verify', detail: 'Vérifie une adresse mail en temps réel, catch-all compris. 1 crédit par vérification.' },
      { name: 'Verify Batch', detail: 'Envoie une liste entière en une seule requête. Renvoie un identifiant de tâche que votre workflow peut consulter plus tard.' },
      { name: 'Get Status', detail: 'Indique l’avancement d’une tâche groupée : nombre d’adresses traitées, pourcentage et heure de fin.' },
      { name: 'Get Results', detail: 'Récupère les résultats terminés page par page, avec un filtre facultatif comme deliverable ou catch_all.' },
    ],
    installTitle: 'Installez le nœud et vérifiez votre première adresse',
    installIntro:
      'Il vous faut une instance n8n, cloud ou auto-hébergée, et un compte Giggal.ai gratuit. La configuration prend environ cinq minutes.',
    installSteps: [
      {
        title: 'Ouvrez Community nodes dans les paramètres n8n',
        text: 'Dans n8n, cliquez sur le menu de votre compte en bas à gauche et ouvrez Settings. Sélectionnez ensuite Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'L’entrée Community nodes dans le menu des paramètres de n8n',
      },
      {
        title: 'Installez n8n-nodes-giggal',
        text: 'Cliquez sur Install a community node. Saisissez `n8n-nodes-giggal` dans le champ npm Package Name, cochez la case et cliquez sur Install. Le nœud Giggal.ai apparaît alors dans votre liste de nœuds.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Installation du paquet n8n-nodes-giggal dans la fenêtre Install community nodes',
      },
      {
        title: 'Ajoutez le nœud et créez un identifiant',
        text: 'Ajoutez le nœud Giggal.ai à un workflow. Dans la liste Credential, choisissez Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Création d’un nouvel identifiant Giggal.ai sur le nœud dans n8n',
      },
      {
        title: 'Collez votre clé API',
        text: 'Dans le tableau de bord Giggal.ai, ouvrez l’onglet Developer API et cliquez sur Create API Key. Collez la clé dans le champ API Key et enregistrez. Tous les nœuds Giggal.ai de votre instance peuvent maintenant l’utiliser. Les nouveaux comptes reçoivent 1 000 crédits offerts, sans carte bancaire.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Ajout de la clé API Giggal.ai à l’identifiant n8n',
      },
      {
        title: 'Vérifiez votre première adresse',
        text: 'Réglez Resource sur Email et Operation sur Verify. Reliez le champ Email Address à vos données avec une expression comme `{{ $json.email }}`, puis cliquez sur Execute step. La sortie affiche le statut, le niveau de risque, le score de délivrabilité et les détails catch-all.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Vérification d’une adresse mail dans n8n et lecture de la sortie',
      },
    ],
    batchTitle: 'Vérifier une liste entière dans n8n',
    batchIntro:
      'Au-delà de quelques adresses, utilisez la ressource Job. La méthode est la suivante : envoyer la liste, consulter le statut, puis récupérer les résultats.',
    batchSteps: [
      {
        title: 'Envoyez la liste avec Verify Batch',
        text: 'Réglez Operation sur Verify Batch et indiquez dans Email Field la propriété qui contient les adresses. Vous pouvez nommer la tâche pour la retrouver ensuite dans le tableau de bord. Laissez Enable Catch-All Rescue activé pour que les adresses catch-all soient contrôlées plus en détail. Le nœud renvoie tout de suite un identifiant de tâche, et la vérification se fait en arrière-plan.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Envoi d’une liste d’emails à vérifier avec le nœud n8n Giggal.ai',
      },
      {
        title: 'Suivez l’avancement avec Get Status',
        text: 'Réglez Resource sur Job et Operation sur Get Status, puis transmettez l’identifiant de tâche de l’étape précédente. Placez un nœud Wait entre deux vérifications pour que la boucle n’interroge pas l’API trop souvent.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Suivi de l’avancement d’une tâche groupée avec l’opération Get Status dans n8n',
      },
      {
        title: 'Récupérez les résultats avec Get Results',
        text: 'Quand le statut indique completed, lancez Get Results avec le même identifiant de tâche. Vous obtenez un élément par email, avec son statut, son niveau de risque et son score. Utilisez le champ Status Filter pour récupérer uniquement les lignes deliverable, undeliverable ou catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Récupération des résultats d’une vérification groupée terminée dans n8n',
      },
    ],
    calloutTitle: 'Les adresses catch-all et derrière une passerelle reçoivent un résultat valide ou invalide',
    calloutText:
      'Beaucoup de vérificateurs renvoient « inconnue » pour les adresses derrière une passerelle de messagerie sécurisée, et « risquée » pour les domaines catch-all. Giggal.ai [vérifie les adresses derrière ces passerelles](/seg-email-verification) (en anglais), comme Proofpoint et Mimecast. Il fait aussi des contrôles supplémentaires sur les domaines catch-all. [Voir comment fonctionne la vérification catch-all](/fr/verification-catch-all).',
    faqTitle: 'FAQ sur la vérification d’adresse mail dans n8n',
    faq: [
      {
        q: 'Le nœud Giggal.ai fonctionne-t-il sur n8n Cloud ?',
        a: 'Oui. Installez-le depuis Settings, puis Community nodes, et ajoutez votre clé API. Il fonctionne de la même façon sur n8n Cloud et sur les instances auto-hébergées.',
      },
      {
        q: 'Le nœud communautaire est-il sûr à installer ?',
        a: 'L’équipe Giggal.ai publie le paquet sous le nom n8n-nodes-giggal sur npm, et tout le monde peut lire le code source. Le nœud communique uniquement avec l’API Giggal.ai, avec l’identifiant que vous avez configuré.',
      },
      {
        q: 'n8n peut-il vérifier les adresses catch-all ?',
        a: 'Oui, avec le nœud Giggal.ai. Les vérifications unitaires traitent les domaines catch-all automatiquement. Les tâches groupées font de même quand Enable Catch-All Rescue est activé. Vous obtenez valide ou invalide avec un score, et non une étiquette « risquée ».',
      },
      {
        q: 'Combien coûte la vérification dans n8n ?',
        a: 'Un crédit par adresse mail, comme partout ailleurs dans Giggal.ai. Une vérification catch-all coûte le même crédit. Les nouveaux comptes commencent avec 1 000 crédits offerts, sans carte bancaire.',
      },
      {
        q: 'Que renvoie le nœud ?',
        a: 'Chaque email renvoie un statut, un niveau de risque et un score de délivrabilité. Il renvoie aussi des indicateurs pour les adresses gratuites, génériques et jetables, les détails du serveur mail et le résultat catch-all. La sortie est du JSON n8n standard, que vous pouvez filtrer et mapper.',
      },
    ],
    howToName: 'Comment vérifier une adresse mail dans n8n avec le nœud communautaire Giggal.ai',
    howToDescription:
      'Installez n8n-nodes-giggal, ajoutez votre clé API et vérifiez une adresse ou une liste entière dans vos workflows n8n.',
    cta: {
      title: 'Ajoutez la vérification d’adresse mail à vos workflows n8n',
      text: 'Installez n8n-nodes-giggal, collez votre clé API et ne faites plus passer d’adresses mortes dans vos workflows. Vous recevez 1 000 crédits offerts, sans carte bancaire.',
      primary: 'Commencer gratuitement',
      secondary: 'Voir toutes les intégrations',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot : vérification et validation des adresses mail | Giggal.ai',
      description:
        'Vérifiez les adresses mail de HubSpot avec Giggal.ai. Validez les contacts et les listes de votre CRM, obtenez un résultat sur les catch-all et filtrez dessus.',
      ogTitle: 'HubSpot : vérification et validation des adresses mail',
      ogDescription:
        'Connectez Giggal.ai à HubSpot, vérifiez vos contacts et vos listes, et filtrez sur le résultat dans votre CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Vérification des adresses mail dans HubSpot',
    h1Accent: 'et validation des contacts',
    intro:
      'Vérifiez les contacts déjà présents dans votre CRM HubSpot. Connectez votre compte une fois, choisissez une liste, et chaque contact reçoit un résultat écrit dans sa fiche. Les adresses catch-all reçoivent délivrable ou non délivrable, et non « risquée ». Vous n’exportez et ne réimportez rien.',
    openDashboard: 'Ouvrir le tableau de bord',
    capsTitle: 'Ce que fait l’intégration HubSpot',
    capsIntro: 'Quatre étapes, toutes dans HubSpot et Giggal.ai.',
    caps: [
      {
        name: 'Importer des contacts ou une liste',
        detail: 'Choisissez All contacts ou n’importe quelle liste HubSpot. Vous voyez d’abord le nombre d’emails, donc vous connaissez le coût en crédits avant de commencer.',
      },
      {
        name: 'Vérifier chaque adresse',
        detail: 'Chaque boîte mail est contrôlée pour savoir si elle existe. Les domaines catch-all reçoivent un résultat clair, et non « risquée ». 1 crédit par adresse.',
      },
      {
        name: 'Écrire les résultats dans HubSpot',
        detail: 'Cinq propriétés Giggal sont renseignées sur chaque contact. Le résultat reste dans la fiche.',
      },
      {
        name: 'Filtrer et créer des listes',
        detail: 'Utilisez Giggal email status dans les filtres et les listes actives HubSpot. Retirez les mauvaises adresses avant votre prochain envoi.',
      },
    ],
    stepsTitle: 'Connecter HubSpot et vérifier votre première liste',
    stepsIntro:
      'Il y a quatre étapes et elles prennent environ deux minutes. Il vous faut un compte Giggal.ai et le droit, dans HubSpot, d’installer des applications et de modifier les propriétés des contacts.',
    steps: [
      {
        title: 'Ouvrez l’onglet Integration dans Giggal.ai',
        text: 'Connectez-vous à Giggal.ai, allez dans Email Validation et ouvrez l’onglet Integration. Trouvez la carte HubSpot et cliquez sur Connect. Si vous n’avez pas encore de compte, l’inscription prend une minute et inclut 1 000 crédits offerts.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'La carte HubSpot et le bouton Connect dans l’onglet Integration de Giggal.ai',
      },
      {
        title: 'Validez les autorisations dans HubSpot',
        text: 'HubSpot affiche son propre écran de validation avec tout ce à quoi Giggal.ai peut accéder : voir les propriétés des contacts, modifier les contacts, modifier les paramètres des propriétés de contact, voir les listes de contacts et lire le compte qui installe l’application. Relisez la liste et cliquez sur Connect app. Vous revenez dans Giggal.ai, et la carte HubSpot affiche maintenant Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Écran HubSpot de validation des autorisations pour l’application Giggal Email Verifier',
      },
      {
        title: 'Importez une liste de contacts',
        text: 'Cliquez sur Verify sur la carte HubSpot pour ouvrir la fenêtre Import from HubSpot. Choisissez All contacts ou n’importe quelle liste de votre portail. Chaque ligne indique combien d’emails elle contient, donc vous connaissez le coût avant de commencer. Cliquez sur Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Fenêtre Import from HubSpot avec les listes de contacts et le nombre d’emails',
      },
      {
        title: 'Vérifiez la liste et synchronisez les résultats',
        text: 'Giggal.ai vérifie chaque adresse et écrit le résultat dans chaque contact HubSpot dès qu’il est prêt. La carte de la tâche affiche la répartition des résultats et un compteur Synced to HubSpot. Cliquez sur Sync to HubSpot pour relancer l’écriture à tout moment.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Tâche de vérification HubSpot terminée dans Giggal.ai, avec les résultats synchronisés dans HubSpot',
      },
    ],
    calloutTitle: 'Pourquoi utiliser un vérificateur catch-all avec HubSpot',
    calloutText:
      'Environ 30 % d’une liste B2B se trouve sur des domaines catch-all. Beaucoup de vérificateurs renvoient ces contacts comme « risqués », et vous ne pouvez rien en faire. Avec Giggal.ai, vous pouvez [vérifier une adresse mail](/fr/verifier-adresse-mail) même sur un domaine catch-all, grâce à des contrôles supplémentaires. Giggal.ai [vérifie aussi les adresses derrière une passerelle de messagerie sécurisée](/seg-email-verification) (en anglais), comme Proofpoint et Mimecast. La plupart de ces contacts reviennent délivrables ou non délivrables. [Voir comment fonctionne la vérification catch-all](/fr/verification-catch-all).',
    propsTitle: 'Les propriétés HubSpot que Giggal.ai écrit sur chaque contact',
    propsIntro:
      'Les cinq propriétés sont créées lors de votre première vérification. Elles se trouvent dans un groupe de propriétés nommé Giggal Email Verifier. Vos propriétés HubSpot existantes ne sont pas modifiées.',
    propsHead: ['Propriété', 'Type', 'Ce qu’elle indique'],
    props: [
      ['Giggal email is valid', 'Case à cocher', 'Oui quand l’existence de la boîte mail a été confirmée.'],
      ['Giggal email status', 'Liste déroulante', 'Deliverable, Undeliverable, Risky ou Unknown.'],
      ['Giggal deliverability score', 'Nombre', 'Niveau de confiance de 0 à 100.'],
      ['Giggal email detail', 'Texte', 'Une courte raison pour le résultat.'],
      ['Giggal verified at', 'Date', 'Date de la dernière vérification de l’adresse.'],
    ],
    scopesTitle: 'Autorisations HubSpot et données',
    scopesIntro: 'Giggal.ai demande quatre autorisations (scopes) HubSpot. Chacune a un seul usage.',
    scopes: [
      ['crm.objects.contacts.read', 'Lire l’adresse mail des contacts que vous choisissez de vérifier.'],
      ['crm.objects.contacts.write', 'Écrire le résultat de la vérification dans ces contacts.'],
      ['crm.schemas.contacts.write', 'Créer les cinq propriétés Giggal lors de la première utilisation.'],
      ['crm.lists.read', 'Afficher vos listes de contacts pour que vous en choisissiez une à vérifier.'],
    ],
    scopesNote:
      'Giggal.ai lit uniquement l’adresse mail des contacts que vous choisissez. Il ne crée ni ne supprime aucun contact. Il ne modifie aucune propriété en dehors des cinq ci-dessus. Il n’envoie jamais d’email aux adresses qu’il vérifie.',
    faqTitle: 'FAQ sur la vérification d’adresse mail dans HubSpot',
    faq: [
      {
        q: 'Giggal.ai envoie-t-il des emails à mes contacts ?',
        a: 'Non. La vérification échange avec le serveur mail de destination et s’arrête avant l’envoi de tout message. Vos contacts ne reçoivent rien, ni dans leur boîte de réception ni dans leurs spams.',
      },
      {
        q: 'Que modifie l’intégration dans mon compte HubSpot ?',
        a: 'À la première utilisation, elle crée un groupe de propriétés nommé Giggal Email Verifier avec cinq propriétés de contact personnalisées. Elle écrit ensuite les résultats dans ces propriétés uniquement. Les propriétés HubSpot existantes ne sont pas modifiées, et aucun contact n’est créé ni supprimé.',
      },
      {
        q: 'Peut-elle vérifier les domaines catch-all ?',
        a: 'Oui. C’est la raison principale d’utiliser Giggal.ai avec HubSpot. Beaucoup de vérificateurs renvoient « risquée » ou « inconnue » sur les domaines catch-all. Giggal.ai fait des contrôles supplémentaires et renvoie délivrable ou non délivrable sur la plupart d’entre eux.',
      },
      {
        q: 'La validation d’email est-elle la même chose que la vérification d’email ?',
        a: 'En pratique, oui. Les deux termes désignent le contrôle qui indique si une adresse peut recevoir des emails. Giggal.ai contrôle le format, les serveurs mail du domaine et la boîte mail, puis écrit un seul résultat dans le contact HubSpot.',
      },
      {
        q: 'Combien cela coûte-t-il ?',
        a: 'Un crédit par adresse, et la vérification catch-all est incluse. Les nouveaux comptes commencent avec 1 000 crédits offerts, et le prix par adresse baisse quand le volume augmente.',
      },
      {
        q: 'Comment utiliser les résultats dans HubSpot ?',
        a: 'Filtrez vos contacts ou créez une liste active sur Giggal email status. Une configuration courante utilise une liste active des contacts Deliverable comme audience d’envoi, et une liste d’exclusion des contacts Undeliverable.',
      },
      {
        q: 'Comment déconnecter l’intégration ?',
        a: 'Ouvrez l’onglet Integration dans Giggal.ai, cliquez sur l’icône des paramètres de la carte HubSpot et choisissez Disconnect. Vous pouvez aussi supprimer l’application dans HubSpot, sous Settings, Integrations, Connected Apps. Les résultats déjà écrits restent sur vos contacts.',
      },
    ],
    howToName: 'Comment vérifier les contacts HubSpot avec Giggal.ai',
    howToDescription:
      'Connectez Giggal.ai à HubSpot, vérifiez une liste de contacts et lisez le résultat dans cinq propriétés sur chaque contact.',
    cta: {
      title: 'Nettoyez vos contacts HubSpot',
      text: 'Connectez votre compte une fois, et chaque contact de votre CRM reçoit un résultat de vérification sur lequel vous pouvez filtrer. Vous commencez avec 1 000 crédits offerts, sans carte bancaire.',
      primary: 'Commencer gratuitement',
      secondary: 'Voir toutes les intégrations',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Serveur MCP de vérification d’email : Claude, ChatGPT | Giggal.ai',
      description:
        'Connectez Giggal.ai à Claude, ChatGPT, Cursor et VS Code via MCP pour vérifier une adresse mail dans le chat. Les catch-all reçoivent un résultat valide ou invalide.',
      ogTitle: 'Serveur MCP de vérification d’email pour Claude et ChatGPT',
      ogDescription:
        'Giggal.ai propose un serveur MCP distant. Claude, ChatGPT, Cursor et VS Code peuvent ainsi vérifier des adresses mail. Vérification catch-all incluse.',
    },
    crumb: 'MCP',
    h1Lead: 'Un serveur MCP de vérification d’email pour',
    h1Accent: 'Claude et ChatGPT',
    intro:
      'Giggal.ai propose un serveur MCP distant. Connectez-le à Claude, ChatGPT, Cursor ou VS Code, et votre assistant IA peut [vérifier une adresse mail](/fr/verifier-adresse-mail) pour vous. Demandez-lui de vérifier une adresse ou une liste, et il répond dans le chat.',
    urlLabel: 'URL MCP',
    directoryLabel: 'Ajouter Giggal.ai à Claude',
    points: [
      'Claude et ChatGPT se connectent avec OAuth',
      'Les éditeurs de code utilisent votre clé API',
      'Vérification catch-all incluse',
    ],
    setupTitle: 'Configurez le serveur MCP dans votre outil IA',
    setupSubtitle:
      'Choisissez votre outil pour voir les étapes. Claude et ChatGPT se connectent avec un identifiant. Les éditeurs de code lisent un fichier de configuration.',
    toolsTitle: 'Ce que peut faire l’assistant IA',
    toolsIntro:
      'Le serveur donne trois outils à votre assistant. Vous posez votre question en langage courant, et il choisit le bon outil.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Vérifier des adresses',
        body: 'Vérifiez un email ou une liste. Chaque adresse reçoit valide ou invalide, y compris sur les domaines catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Obtenir les résultats complets',
        body: 'Récupérez les détails d’une vérification passée : statut, codes de raison et score de délivrabilité pour chaque adresse.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Consulter vos crédits',
        body: 'Demandez combien de crédits il vous reste avant de lancer une grosse vérification.',
      },
    ],
    whyTitle: 'Pourquoi le résultat catch-all compte dans un chat',
    why: [
      'Environ 30 % d’une liste B2B se trouve sur des domaines catch-all. Ces domaines acceptent les emails pour n’importe quelle adresse, que la boîte mail existe ou non. Beaucoup de vérificateurs classent ces adresses comme « risquées », ce qui veut dire qu’ils n’ont pas pu conclure.',
      'Dans un chat, cette étiquette n’aide pas. L’assistant répète ce qu’on lui donne, donc un tiers de votre liste revient avec un résultat incertain. Giggal.ai contrôle ces adresses plus en détail et renvoie valide ou invalide. Il fait de même pour les boîtes mail derrière une liste de 15 passerelles de messagerie sécurisées, dont Proofpoint, Mimecast et Barracuda.',
      'Pour des exemples de demandes, lisez [vérifier des emails dans Claude et ChatGPT](/fr/blog/verifier-emails-dans-claude-et-chatgpt). Le serveur MCP utilise le même moteur que l’[API de vérification d’email](/email-verification-api) (en anglais).',
    ],
    faqTitle: 'FAQ sur le serveur MCP de vérification d’email',
    faq: [
      {
        q: 'Claude peut-il vérifier des adresses mail ?',
        a: `Oui, une fois qu’un outil de vérification d’email est connecté via MCP. Ajoutez le serveur Giggal.ai à l’adresse ${MCP_URL} comme connecteur personnalisé dans Claude, ou avec la commande claude mcp add dans Claude Code. Demandez ensuite, par exemple : « vérifie ces onze adresses et dis-moi lesquelles vont rebondir ». Claude appelle l’outil verify_emails et affiche le résultat dans le chat.`,
      },
      {
        q: 'ChatGPT peut-il vérifier des adresses mail ?',
        a: 'Oui, avec les offres ChatGPT qui autorisent les connecteurs personnalisés. Ajoutez Giggal.ai comme plugin personnalisé avec l’URL du serveur MCP, puis connectez-vous avec OAuth. Tout client compatible avec le MCP distant peut utiliser le même serveur, dont Cursor, VS Code, Windsurf, Cline et Zed.',
      },
      {
        q: 'Que peut faire l’assistant IA ?',
        a: 'Trois choses. verify_emails vérifie une adresse ou une liste. get_verification_details renvoie le résultat complet de chaque adresse, avec le statut et les codes de raison. get_credit_balance indique combien de crédits il vous reste.',
      },
      {
        q: 'Comment sont traitées les adresses catch-all ?',
        a: 'Comme dans le reste de Giggal.ai. Beaucoup de vérificateurs classent les adresses catch-all comme « risquées ». Giggal.ai renvoie valide ou invalide pour ces adresses. Il fait de même pour les boîtes mail derrière une liste de 15 passerelles de messagerie sécurisées, comme Proofpoint, Mimecast et Barracuda.',
      },
      {
        q: 'Ai-je besoin d’une clé API ?',
        a: 'Pas pour Claude ni pour ChatGPT. Les deux se connectent avec OAuth, donc vous vous connectez avec votre compte Giggal.ai. Les éditeurs de code comme Claude Code, Cursor et VS Code utilisent une clé API. Vous la trouvez dans l’onglet Developer API de l’application Giggal.ai.',
      },
      {
        q: 'La vérification via MCP coûte-t-elle plus cher ?',
        a: 'Non. Elle utilise les mêmes crédits que le tableau de bord et l’API REST : 1 crédit par adresse, catch-all compris. Les nouveaux comptes reçoivent 1 000 crédits offerts, sans carte bancaire, et les crédits n’expirent jamais.',
      },
      {
        q: 'Faut-il nettoyer une grande liste de cette façon ?',
        a: 'Non. Le MCP est le plus utile quand la vérification est une étape d’une tâche, par exemple vérifier une douzaine de contacts avant d’écrire un message de prospection. Pour des dizaines de milliers d’adresses, utilisez l’import en masse dans l’application ou l’API REST.',
      },
    ],
    howToName: 'Connecter la vérification d’email Giggal.ai à Claude ou ChatGPT via MCP',
    howToDescription:
      'Quatre étapes pour vérifier des adresses mail, catch-all compris, dans Claude, ChatGPT, Cursor ou VS Code avec le serveur MCP Giggal.ai.',
    setupSteps: [
      {
        name: 'Créez un compte Giggal.ai',
        text: 'Inscrivez-vous sur Giggal.ai. Les nouveaux comptes incluent 1 000 crédits de vérification offerts, sans carte bancaire.',
      },
      {
        name: 'Ajoutez le serveur MCP à votre client',
        text: `Utilisez l’URL du serveur ${MCP_URL}. Dans Claude, ajoutez-la sous Settings, puis Connectors. Dans ChatGPT, ajoutez-la comme plugin personnalisé. Les éditeurs de code lisent un fichier de configuration JSON, présenté sur cette page pour chaque éditeur.`,
      },
      {
        name: 'Connectez-vous ou ajoutez votre clé API',
        text: 'Claude et ChatGPT vous demandent de vous connecter à Giggal.ai et de cliquer sur Allow. Les éditeurs de code ont besoin de la clé API de l’onglet Developer API de l’application.',
      },
      {
        name: 'Demandez à l’assistant de vérifier une adresse',
        text: 'Posez votre question en langage courant, par exemple : « vérifie hello@example.com et dis-moi si c’est une vraie boîte mail ». L’assistant appelle verify_emails et affiche le résultat.',
      },
    ],
    ctaTitle: 'Connectez Giggal.ai à votre assistant IA',
    ctaText:
      'Commencez avec 1 000 crédits de vérification offerts, sans carte bancaire. Ajoutez l’URL MCP à Claude, ChatGPT ou à votre éditeur de code.',
    ctaButton: 'Commencer gratuitement',
  },
}
