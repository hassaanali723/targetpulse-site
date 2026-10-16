import type { IntegrationPagesContent } from './types'

// Brazilian Portuguese copy for the integration pages. Translated from en.ts.
// Site conventions (lib/i18n/pt-br.ts): "e-mail" with the hyphen, register
// "você", "a Giggal.ai" (feminine), "painel" for the dashboard, "créditos".
// Technical terms stay in English: catch-all, bounce, API, MCP, OAuth.
// Keyword targets (Ahrefs, BR): "verificação de e-mail" 3,000-3,500 / KD 0-5,
// "verificar email" 1,100, "validador de email" 900, "verificador de email"
// 700, "validar email" 600. The checker links go to /pt-br/verificacao-de-email.
// UI labels, field names, HubSpot property names, status values, scopes and
// tool names stay exactly as the apps show them (in English).

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'Automação de marketing',
  'Email Marketing': 'E-mail marketing',
  CRM: 'CRM',
  Ecommerce: 'E-commerce',
  'Sales & Outreach': 'Vendas e prospecção',
  'Forms & Surveys': 'Formulários e pesquisas',
  'Website & Popups': 'Sites e pop-ups',
  'Spreadsheets & Data': 'Planilhas e dados',
  Support: 'Suporte',
  Payments: 'Pagamentos',
  Automation: 'Automação',
  Spreadsheets: 'Planilhas',
  Forms: 'Formulários',
  'AI & Agents': 'IA e agentes',
  Developer: 'Desenvolvedores',
}

export const PT_BR: IntegrationPagesContent = {
  common: {
    locale: 'pt-br',
    hubPath: '/pt-br/integracoes',
    hubCrumb: 'Integrações',
    checkerPath: '/pt-br/verificacao-de-email',
    signupLabel: 'Comece grátis com 1.000 créditos',
    getStarted: 'Comece grátis',
    allIntegrations: 'Ver todas as integrações',
    ogLocale: 'pt_BR',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Integrações de verificação de e-mail: HubSpot, Zapier, n8n | Giggal.ai',
      description:
        'Integrações de verificação de e-mail para HubSpot, Zapier, n8n, Mailchimp, Claude e ChatGPT. Verifique e-mails nas suas ferramentas, inclusive catch-all.',
      ogTitle: 'Integrações de verificação de e-mail: HubSpot, Zapier, n8n e MCP',
      ogDescription:
        'Conecte o verificador de e-mail da Giggal.ai ao HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude e ChatGPT.',
    },
    h1Lead: 'Integrações de verificação de e-mail para',
    h1Accent: 'as ferramentas que você já usa',
    intro:
      'A Giggal.ai é um [verificador de e-mail](/pt-br/verificacao-de-email) que se conecta ao seu CRM, à sua plataforma de e-mail, às suas planilhas e ao seu assistente de IA. Cada verificação informa se a caixa de e-mail existe. Os endereços catch-all também recebem um resultado válido ou inválido.',
    waysTitle: 'Quatro formas de adicionar a verificação de e-mail às suas ferramentas',
    waysIntro:
      'Escolha a opção que serve para o seu fluxo de trabalho. Todas usam os mesmos créditos e devolvem o mesmo resultado.',
    ways: [
      {
        label: 'Direta',
        title: 'Integrações diretas',
        text: 'Conecte o [HubSpot](/pt-br/integracoes/hubspot), o Mailchimp, o SendGrid e outras plataformas dentro do painel da Giggal.ai. Importe uma lista, verifique-a e envie a lista limpa de volta.',
      },
      {
        label: 'Automação',
        title: 'Zapier e n8n',
        text: 'Verifique cada contato novo, resposta de formulário ou linha de planilha assim que ele chega. Use o app da Giggal.ai no [Zapier](/pt-br/integracoes/zapier) ou o nó oficial para o [n8n](/pt-br/integracoes/n8n).',
      },
      {
        label: 'MCP',
        title: 'Assistentes de IA',
        text: 'Adicione o [servidor MCP da Giggal.ai](/pt-br/mcp) ao Claude, ChatGPT, Cursor ou VS Code. Depois, peça ao assistente para verificar endereços dentro do chat.',
      },
      {
        label: 'API',
        title: 'API REST',
        text: 'Envie requisições de verificação individual ou em massa a partir do seu próprio código. Os resultados chegam em JSON. A [referência da API](/pt-br/documentacao-api) lista todos os endpoints.',
      },
    ],
    grid: {
      searchPlaceholder: 'Buscar integrações…',
      searchAria: 'Buscar integrações',
      connectionAria: 'Filtrar por tipo de conexão',
      connection: { all: 'Todas', direct: 'Direta', zapier: 'Via Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filtrar por categoria',
      allCategories: 'Todas as categorias',
      categories: CATEGORIES,
      prevPage: 'Página anterior',
      nextPage: 'Próxima página',
      pagination: 'Paginação',
      showing: 'Mostrando {from}-{to} de {total} integrações',
      noMatchTitle: 'Nenhuma integração corresponde à sua busca.',
      noMatchText:
        'Qualquer ferramenta que envie uma requisição HTTP pode usar a [API REST](/pt-br/documentacao-api).',
      descriptions: {
        zapier:
          'Verifique cada e-mail novo em tempo real em mais de 8.000 apps, inclusive endereços catch-all. Sem código.',
        n8n:
          'Verifique e-mails individuais e listas inteiras em fluxos do n8n com o community node oficial da Giggal.ai.',
        claude:
          'Adicione o servidor MCP da Giggal.ai ao Claude e verifique endereços de e-mail dentro do chat.',
        chatgpt:
          'Adicione o servidor MCP da Giggal.ai ao ChatGPT e verifique endereços de e-mail dentro do chat.',
        clay:
          'Verifique os e-mails de prospects em tabelas do Clay pela API da Giggal.ai, inclusive endereços catch-all.',
        'rest-api':
          'API REST para verificação de e-mail individual, em massa e catch-all. Crie qualquer integração própria.',
        mailchimp:
          'Importe um público do Mailchimp, verifique-o e mantenha só os assinantes entregáveis.',
        mailgun:
          'Conecte o Mailgun e verifique as suas listas de envio antes de cada campanha.',
        mailjet:
          'Importe listas de contatos do Mailjet para a Giggal.ai e verifique-as, inclusive endereços catch-all.',
        sendgrid:
          'Verifique contatos do SendGrid em massa para proteger a sua reputação de remetente.',
        activecampaign:
          'Importe contatos do ActiveCampaign, verifique-os e remova os endereços ruins antes de enviar.',
        'campaign-monitor':
          'Conecte o Campaign Monitor e verifique cada lista de assinantes na Giggal.ai.',
        getresponse:
          'Verifique listas do GetResponse para reduzir os bounces, inclusive contatos em domínios catch-all.',
        aweber:
          'Importe assinantes do AWeber, verifique-os e envie uma lista limpa de volta.',
        mailerlite:
          'Conecte o MailerLite e verifique as listas de assinantes antes da próxima campanha.',
        drip:
          'Verifique contatos do Drip em massa para que os seus e-mails automáticos cheguem a caixas reais.',
        'elastic-email':
          'Importe listas do Elastic Email e verifique-as, inclusive endereços catch-all e atrás de gateways de segurança.',
        'reply-io':
          'Verifique os e-mails de prospects antes de iniciar as sequências do Reply.io, para que o outreach chegue a caixas reais.',
        'zoho-crm':
          'Importe contatos e leads do Zoho CRM, verifique-os e mantenha os dados do CRM limpos.',
        'google-sheets':
          'Verifique cada linha nova assim que ela é adicionada e grave o resultado de volta na planilha.',
        hubspot:
          'Verifique os contatos e as listas do seu CRM HubSpot e depois filtre pelo resultado no HubSpot.',
        salesforce:
          'Verifique o e-mail de cada lead novo do Salesforce assim que ele é criado.',
        typeform:
          'Verifique os e-mails das respostas do Typeform antes que eles cheguem às suas outras ferramentas.',
        slack:
          'Publique resultados de verificação e alertas de listas em um canal do Slack.',
      },
      zapierAppDescription:
        'Verifique os endereços de e-mail que chegam ao {name}, em tempo real, pelo Zapier.',
      logoAlt: 'Integração de verificação de e-mail do {name} com a Giggal.ai',
    },
    appListTitle: 'Todos os apps do Zapier compatíveis',
    appListIntro:
      '{count} apps se conectam à Giggal.ai pelo Zapier. Cada um tem o seu próprio guia de configuração, em inglês.',
    apiTitle: 'A sua ferramenta não está na lista?',
    apiText:
      'Qualquer ferramenta que envie uma requisição HTTP pode verificar e-mails com a Giggal.ai. Use a [API de verificação de e-mail](/email-verification-api) (em inglês) para verificações individuais e em massa, ou conecte pelo Zapier.',
    apiCta: 'Referência da API',
    apiHref: '/pt-br/documentacao-api',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Verificação de e-mail no Zapier para mais de 8.000 apps | Giggal.ai',
      description:
        'Verifique e-mails no Zapier com a Giggal.ai. Cada contato novo é verificado em tempo real, e os endereços catch-all recebem válido ou inválido. Sem código.',
      ogTitle: 'Verificação de e-mail no Zapier para mais de 8.000 apps',
      ogDescription:
        'Verifique cada endereço de e-mail novo no Zapier com a Giggal.ai. Funciona com HubSpot, Google Sheets, Salesforce, Mailchimp e mais de 8.000 outros apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'Verificação de e-mail no Zapier para',
    h1Accent: 'mais de 8.000 apps',
    intro:
      'Adicione o [verificador de e-mail](/pt-br/verificacao-de-email) da Giggal.ai a qualquer Zap e confira cada endereço no momento em que ele chega. Funciona com formulários, CRMs, planilhas e plataformas de e-mail. Os endereços catch-all recebem um resultado válido ou inválido. Você não precisa escrever código.',
    viewOnZapier: 'Ver no Zapier',
    tabsTitle: 'Fluxos do Zapier e guia de configuração',
    tabsIntro:
      'Comece por um fluxo comum ou siga o guia para criar o seu próprio Zap em cerca de cinco minutos.',
    tabs: {
      cardSubtitle: 'Conecte a Giggal.ai a mais de 8.000 apps',
      tryFree: 'Teste grátis',
      actionsTitle: '4 ações do Zapier',
      actions: [
        { name: 'Verify Email', description: 'Verifica um endereço de e-mail em tempo real, inclusive endereços catch-all.' },
        { name: 'Start Bulk Verification', description: 'Envia uma lista de endereços. Devolve um ID de tarefa que os passos seguintes podem usar.' },
        { name: 'Get Bulk Verification Results', description: 'Busca os resultados de uma tarefa em massa quando o status dela é concluído.' },
        { name: 'Get Credit Balance', description: 'Mostra quantos créditos da Giggal.ai você ainda tem.' },
      ],
      workflowsTab: 'Fluxos',
      guideTab: 'Guia de integração',
      workflows: [
        {
          title: 'Verificar contatos novos do HubSpot',
          description:
            'Quando um contato é criado no HubSpot, a Giggal.ai verifica o e-mail e grava o resultado em uma propriedade do contato.',
        },
        {
          title: 'Verificar linhas novas no Google Sheets',
          description:
            'Cada linha nova é verificada assim que é adicionada. O status, o nível de risco e o resultado catch-all são gravados de volta na linha.',
        },
        {
          title: 'Verificar leads novos do Salesforce',
          description:
            'Cada lead novo é verificado antes que um vendedor trabalhe nele. Assim, ninguém escreve para uma caixa de e-mail que não existe.',
        },
        {
          title: 'Verificar inscrições no Mailchimp',
          description:
            'Verifique cada assinante novo no momento da inscrição e adicione ao seu público do Mailchimp só os endereços entregáveis.',
        },
        {
          title: 'Conferir respostas do Typeform',
          description:
            'Encontre e-mails digitados errado e e-mails descartáveis nas respostas de formulário antes que cheguem às suas outras ferramentas.',
        },
        {
          title: 'Enviar resultados ao Slack',
          description:
            'Publique uma mensagem no Slack quando uma verificação terminar, ou quando um lead em um domínio catch-all for confirmado como válido.',
        },
      ],
      workflowCta: 'Configurar no Zapier',
      guideTitle: 'Como conectar a Giggal.ai ao Zapier',
      guideIntro:
        'A configuração leva cerca de cinco minutos. O exemplo abaixo verifica cada linha nova de uma planilha do Google Sheets.',
      steps: [
        {
          title: 'Escolha o app de gatilho',
          text: 'Crie um Zap e escolha o app que dá início a ele. Qualquer um dos mais de 8.000 apps do Zapier funciona. Neste exemplo, escolha Google Sheets e o evento New or Updated Spreadsheet Row. Conecte a sua conta e clique em Continue.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Configuração do gatilho no Zapier com o Google Sheets e o evento New or Updated Spreadsheet Row',
        },
        {
          title: 'Adicione a Giggal.ai como passo de ação',
          text: 'No passo de ação, procure Giggal.ai no seletor de apps e selecione o app.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Busca pela Giggal.ai no seletor de apps do Zapier',
        },
        {
          title: 'Escolha um evento de ação',
          text: 'A Giggal.ai tem quatro ações: Verify Email, Start Bulk Verification, Get Bulk Verification Results e Get Credit Balance. Para este exemplo, escolha Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Os quatro eventos de ação da Giggal.ai no seletor de eventos do Zapier',
        },
        {
          title: 'Conecte a sua conta da Giggal.ai',
          text: 'Na primeira vez, o Zapier pede a sua chave de API. No painel da Giggal.ai, abra a aba Developer API e clique em Create API Key. Cole a chave no Zapier e clique em Connect. Contas novas recebem 1.000 créditos grátis, sem cartão.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Conexão da conta da Giggal.ai ao Zapier com uma chave de API',
        },
        {
          title: 'Mapeie o campo de e-mail e use o resultado',
          text: 'Aponte o campo Email para a coluna que contém o endereço e rode um teste. A Giggal.ai devolve o status, o nível de risco, a pontuação e o resultado catch-all. Depois deste passo, adicione filtros ou caminhos (paths) do Zapier. Por exemplo, grave os endereços entregáveis de volta na planilha e mova os inválidos para outra aba.',
        },
      ],
      help: 'Precisa de ajuda em algum passo? [Fale com a nossa equipe](/pt-br/contato) ou leia a [referência da API](/pt-br/documentacao-api) para ver o formato completo da resposta.',
    },
    why: [
      {
        title: 'Um verificador de e-mail catch-all no Zapier',
        text: 'Muitos verificadores marcam os endereços catch-all como arriscados e param aí. Em uma lista B2B, isso pode ser cerca de 30% dos endereços. A Giggal.ai continua a verificação e devolve válido ou inválido dentro do seu Zap.',
      },
      {
        title: 'Verificação no momento da entrada',
        text: 'Os leads são verificados no momento em que chegam de um formulário, CRM ou planilha. Os endereços ruins não entram nas suas listas, então há menos para limpar depois.',
      },
      {
        title: 'Resultados que o seu Zap usa para direcionar cada lead',
        text: 'Cada verificação devolve um status, um nível de risco, uma pontuação de entregabilidade e um resultado catch-all. Use esses dados nos filtros e caminhos do Zapier para mandar cada lead para o lugar certo.',
      },
    ],
    appsTitle: 'Verifique e-mails de qualquer um destes apps',
    appsIntro:
      'Cada app abaixo tem o seu próprio guia de verificação de e-mail pelo Zapier, em inglês.',
    categories: CATEGORIES,
    faqTitle: 'Perguntas frequentes sobre verificação de e-mail no Zapier',
    faq: [
      {
        q: 'Como funciona a integração da Giggal.ai com o Zapier?',
        a: 'Você adiciona um passo da Giggal.ai a um Zap. Quando o gatilho dispara, por exemplo com um contato novo no CRM ou uma resposta de formulário, o Zapier envia o endereço de e-mail para a Giggal.ai. A Giggal.ai confere se a caixa de e-mail existe e passa o resultado para o passo seguinte. Não é preciso código.',
      },
      {
        q: 'O Zapier consegue verificar endereços de e-mail catch-all?',
        a: 'Sim, com a Giggal.ai como passo de verificação. A maioria dos verificadores devolve arriscado ou desconhecido para domínios catch-all. A Giggal.ai faz verificações extras nesses endereços e devolve válido ou inválido com uma pontuação.',
      },
      {
        q: 'Quais apps posso conectar?',
        a: 'Qualquer app do Zapier, incluindo HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform e Slack. Se o app está no Zapier, ele pode enviar endereços para a Giggal.ai.',
      },
      {
        q: 'Quantos créditos custa uma verificação pelo Zapier?',
        a: 'Um crédito por endereço de e-mail, o mesmo que no painel ou na API. As verificações catch-all custam o mesmo 1 crédito. Contas novas recebem 1.000 créditos grátis, sem cartão.',
      },
      {
        q: 'Devo verificar em tempo real ou em massa?',
        a: 'A maioria das equipes faz as duas coisas. As verificações em tempo real no Zapier barram os endereços ruins na entrada. A verificação em massa limpa as listas que você já tem, no painel ou com a ação Start Bulk Verification.',
      },
    ],
    howToName: 'Como verificar e-mails no Zapier com a Giggal.ai',
    howToDescription:
      'Configure a verificação de e-mail, inclusive de endereços catch-all, em qualquer fluxo do Zapier.',
    cta: {
      title: 'Verifique cada endereço de e-mail novo no Zapier',
      text: 'Crie o seu primeiro Zap de verificação em cerca de cinco minutos. Você recebe 1.000 créditos grátis, sem cartão, e as verificações catch-all estão incluídas.',
      primary: 'Comece grátis',
      secondary: 'Ver todas as integrações',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'Verificação de e-mail no n8n com o nó oficial | Giggal.ai',
      description:
        'Verifique e-mails no n8n com o community node oficial da Giggal.ai. Confira endereços ou listas inteiras, inclusive catch-all. Instale o n8n-nodes-giggal.',
      ogTitle: 'Verificação de e-mail no n8n com o nó oficial da Giggal.ai',
      ogDescription:
        'Verifique e-mails individuais e listas inteiras em fluxos do n8n com o community node da Giggal.ai. Inclui endereços catch-all.',
    },
    crumb: 'n8n',
    h1Lead: 'Verificação de e-mail no n8n com o',
    h1Accent: 'nó oficial da Giggal.ai',
    intro:
      'Adicione o [validador de e-mail](/pt-br/verificacao-de-email) da Giggal.ai aos seus fluxos do n8n. Verifique um endereço em tempo real ou envie uma lista inteira como uma tarefa em lote. Os endereços catch-all recebem um resultado válido ou inválido. Você instala o nó uma única vez, pelo npm.',
    viewOnNpm: 'Ver no npm',
    opsTitle: 'O que o nó do n8n faz',
    opsIntro:
      'O nó tem dois recursos (Resource) e quatro operações (Operation). Use Email para verificações individuais e Job para listas.',
    ops: [
      { name: 'Verify', detail: 'Verifica um endereço de e-mail em tempo real, inclusive catch-all. 1 crédito por verificação.' },
      { name: 'Verify Batch', detail: 'Envia uma lista inteira em uma única requisição. Devolve um ID de tarefa que o seu fluxo pode consultar depois.' },
      { name: 'Get Status', detail: 'Mostra o andamento de uma tarefa em lote: quantidade processada, porcentagem e horário de conclusão.' },
      { name: 'Get Results', detail: 'Busca os resultados finais página por página, com um filtro opcional como deliverable ou catch_all.' },
    ],
    installTitle: 'Instale o nó e verifique o seu primeiro e-mail',
    installIntro:
      'Você precisa de uma instância do n8n, na nuvem ou auto-hospedada, e de uma conta grátis da Giggal.ai. A configuração leva cerca de cinco minutos.',
    installSteps: [
      {
        title: 'Abra Community nodes nas configurações do n8n',
        text: 'No n8n, clique no menu da sua conta, no canto inferior esquerdo, e abra Settings. Depois, selecione Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'A opção Community nodes no menu de configurações do n8n',
      },
      {
        title: 'Instale o n8n-nodes-giggal',
        text: 'Clique em Install a community node. Digite `n8n-nodes-giggal` no campo npm Package Name, marque a caixa de seleção e clique em Install. O nó da Giggal.ai passa a aparecer na sua lista de nós.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Instalação do pacote n8n-nodes-giggal na janela Install community nodes',
      },
      {
        title: 'Adicione o nó e crie uma credencial',
        text: 'Adicione o nó da Giggal.ai a um fluxo. No menu Credential, escolha Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Criação de uma nova credencial da Giggal.ai no nó do n8n',
      },
      {
        title: 'Cole a sua chave de API',
        text: 'No painel da Giggal.ai, abra a aba Developer API e clique em Create API Key. Cole a chave no campo API Key e salve. Todos os nós da Giggal.ai da sua instância já podem usar essa chave. Contas novas recebem 1.000 créditos grátis, sem cartão.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Inclusão da chave de API da Giggal.ai na credencial do n8n',
      },
      {
        title: 'Verifique o seu primeiro e-mail',
        text: 'Defina Resource como Email e Operation como Verify. Mapeie o campo Email Address para os seus dados com uma expressão como `{{ $json.email }}` e clique em Execute step. A saída mostra o status, o nível de risco, a pontuação de entregabilidade e os detalhes catch-all.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Verificação de um único e-mail no n8n e leitura da saída',
      },
    ],
    batchTitle: 'Verifique uma lista inteira no n8n',
    batchIntro:
      'Para mais do que alguns endereços, use o recurso Job. A sequência é enviar a lista, conferir o status e depois buscar os resultados.',
    batchSteps: [
      {
        title: 'Envie a lista com Verify Batch',
        text: 'Defina Operation como Verify Batch e aponte Email Field para a propriedade que contém os endereços. Você pode dar um nome ao lote para encontrá-lo depois no painel. Deixe Enable Catch-All Rescue ativado para que os endereços catch-all passem por verificações extras. O nó devolve um ID de tarefa na hora, e a verificação roda em segundo plano.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Envio de um lote de e-mails para verificação com o nó da Giggal.ai no n8n',
      },
      {
        title: 'Acompanhe o andamento com Get Status',
        text: 'Defina Resource como Job e Operation como Get Status, e informe o ID de tarefa do passo anterior. Coloque um nó Wait entre as consultas para que o loop não consulte o status com frequência demais.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Consulta do andamento de uma tarefa em lote com a operação Get Status no n8n',
      },
      {
        title: 'Busque os resultados com Get Results',
        text: 'Quando o status mostrar completed, rode Get Results com o mesmo ID de tarefa. Você recebe um item por e-mail, com status, nível de risco e pontuação. Use o campo Status Filter para buscar só as linhas deliverable, undeliverable ou catch_all.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Busca dos resultados finais de uma verificação em lote no n8n',
      },
    ],
    calloutTitle: 'Endereços catch-all e atrás de gateways recebem válido ou inválido',
    calloutText:
      'Muitos verificadores devolvem desconhecido para endereços atrás de gateways de segurança de e-mail e arriscado para domínios catch-all. A Giggal.ai [verifica endereços atrás de gateways](/seg-email-verification) (em inglês), como Proofpoint e Mimecast, e faz verificações extras em domínios catch-all. [Veja como funciona a verificação catch-all](/pt-br/verificacao-catch-all).',
    faqTitle: 'Perguntas frequentes sobre verificação de e-mail no n8n',
    faq: [
      {
        q: 'O nó da Giggal.ai funciona no n8n Cloud?',
        a: 'Sim. Instale o nó em Settings, depois em Community nodes, e adicione a sua chave de API. Ele funciona da mesma forma no n8n Cloud e em instâncias auto-hospedadas.',
      },
      {
        q: 'É seguro instalar o community node?',
        a: 'A equipe da Giggal.ai publica o pacote como n8n-nodes-giggal no npm, e qualquer pessoa pode ler o código-fonte. O nó só se comunica com a API da Giggal.ai, usando a credencial que você configurou.',
      },
      {
        q: 'O n8n consegue verificar e-mails catch-all?',
        a: 'Sim, com o nó da Giggal.ai. As verificações individuais tratam os domínios catch-all automaticamente. As tarefas em lote fazem o mesmo quando Enable Catch-All Rescue está ativado. Você recebe válido ou inválido com uma pontuação, e não um rótulo de arriscado.',
      },
      {
        q: 'Quanto custa a verificação no n8n?',
        a: 'Um crédito por endereço de e-mail, o mesmo que em todo o resto da Giggal.ai. As verificações catch-all custam o mesmo 1 crédito. Contas novas começam com 1.000 créditos grátis, sem cartão.',
      },
      {
        q: 'O que o nó devolve?',
        a: 'Cada e-mail devolve um status, um nível de risco e uma pontuação de entregabilidade. Ele também devolve indicadores para endereços gratuitos, de função e descartáveis, dados do servidor de e-mail e o resultado catch-all. A saída é JSON padrão do n8n, que você pode filtrar e mapear.',
      },
    ],
    howToName: 'Como verificar e-mails no n8n com o community node da Giggal.ai',
    howToDescription:
      'Instale o n8n-nodes-giggal, adicione a sua chave de API e verifique e-mails individuais ou listas inteiras em fluxos do n8n.',
    cta: {
      title: 'Adicione a verificação de e-mail aos seus fluxos do n8n',
      text: 'Instale o n8n-nodes-giggal, cole a sua chave de API e pare de passar endereços de e-mail inexistentes pelos seus fluxos. Você recebe 1.000 créditos grátis, sem cartão.',
      primary: 'Comece grátis',
      secondary: 'Ver todas as integrações',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'Verificação e validação de e-mail no HubSpot | Giggal.ai',
      description:
        'Verificação de e-mail no HubSpot com a Giggal.ai. Valide os contatos e as listas do seu CRM, receba um resultado nos endereços catch-all e filtre por ele.',
      ogTitle: 'Verificação e validação de e-mail no HubSpot',
      ogDescription:
        'Conecte a Giggal.ai ao HubSpot, verifique os seus contatos e listas e filtre pelo resultado no CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'Verificação e validação',
    h1Accent: 'de e-mail no HubSpot',
    intro:
      'Verifique os contatos que já estão no seu CRM HubSpot. Conecte uma vez, escolha uma lista, e cada contato recebe um resultado gravado no próprio registro. Os endereços catch-all recebem entregável (Deliverable) ou não entregável (Undeliverable), e não arriscado (Risky). Você não precisa exportar nem reimportar nada.',
    openDashboard: 'Abrir o painel',
    capsTitle: 'O que a integração com o HubSpot faz',
    capsIntro: 'Quatro etapas, todas dentro do HubSpot e da Giggal.ai.',
    caps: [
      {
        name: 'Importe contatos ou uma lista',
        detail: 'Escolha All contacts ou qualquer lista do HubSpot. Você vê primeiro o número de e-mails e sabe o custo em créditos antes de começar.',
      },
      {
        name: 'Verifique cada endereço',
        detail: 'Cada caixa de e-mail é conferida para saber se ela existe. Os domínios catch-all recebem um resultado claro, e não arriscado. 1 crédito por endereço.',
      },
      {
        name: 'Grave os resultados de volta',
        detail: 'Cinco propriedades da Giggal são preenchidas em cada contato, então o resultado fica junto com o registro.',
      },
      {
        name: 'Filtre e crie listas',
        detail: 'Use a propriedade Giggal email status nos filtros e nas listas ativas do HubSpot. Remova os endereços ruins antes do próximo envio.',
      },
    ],
    stepsTitle: 'Como conectar o HubSpot e verificar a sua primeira lista',
    stepsIntro:
      'São quatro etapas, e elas levam cerca de dois minutos. Você precisa de uma conta da Giggal.ai e de permissão no HubSpot para instalar apps e editar propriedades de contato.',
    steps: [
      {
        title: 'Abra a aba Integration na Giggal.ai',
        text: 'Entre na Giggal.ai, vá em Email Validation e abra a aba Integration. Encontre o cartão do HubSpot e clique em Connect. Se você ainda não tem conta, o cadastro leva um minuto e inclui 1.000 créditos grátis.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'O cartão do HubSpot e o botão Connect na aba Integration da Giggal.ai',
      },
      {
        title: 'Aprove as permissões no HubSpot',
        text: 'O HubSpot mostra a sua própria tela de aprovação, com tudo o que a Giggal.ai pode acessar: ver propriedades de contato, alterar contatos, alterar as configurações de propriedades de contato, ver listas de contatos e ler a conta que faz a instalação. Revise a lista e clique em Connect app. Você volta para a Giggal.ai, e o cartão do HubSpot passa a mostrar Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Tela de revisão de permissões do HubSpot para o app Giggal Email Verifier',
      },
      {
        title: 'Importe uma lista de contatos',
        text: 'Clique em Verify no cartão do HubSpot para abrir a janela Import from HubSpot. Escolha All contacts ou qualquer lista do seu portal. Cada linha mostra quantos e-mails ela tem, então você sabe o custo antes de começar. Clique em Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Janela Import from HubSpot com as listas de contatos e a quantidade de e-mails',
      },
      {
        title: 'Verifique a lista e sincronize os resultados',
        text: 'A Giggal.ai confere cada endereço e grava o resultado em cada contato do HubSpot assim que termina. O cartão da tarefa mostra a divisão dos resultados e a contagem Synced to HubSpot. Clique em Sync to HubSpot para gravar os resultados de novo a qualquer momento.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Tarefa de verificação do HubSpot concluída na Giggal.ai, com os resultados sincronizados no HubSpot',
      },
    ],
    calloutTitle: 'Por que usar um validador de e-mail catch-all com o HubSpot',
    calloutText:
      'Cerca de 30% de uma lista B2B está em domínios catch-all. Muitos verificadores devolvem esses contatos como arriscados, e você não consegue agir sobre eles. A Giggal.ai é um [validador de e-mail](/pt-br/verificacao-de-email) que faz verificações extras em domínios catch-all e [verifica endereços atrás de gateways de segurança de e-mail](/seg-email-verification) (em inglês), como Proofpoint e Mimecast. A maioria desses contatos volta como entregável ou não entregável. [Veja como funciona a verificação catch-all](/pt-br/verificacao-catch-all).',
    propsTitle: 'Propriedades do HubSpot que a Giggal.ai grava em cada contato',
    propsIntro:
      'As cinco propriedades são criadas na primeira vez que você roda uma verificação. Elas ficam em um grupo de propriedades chamado Giggal Email Verifier. As propriedades que você já tem no HubSpot não são alteradas.',
    propsHead: ['Propriedade', 'Tipo', 'O que ela informa'],
    props: [
      ['Giggal email is valid', 'Caixa de seleção', 'Sim quando a existência da caixa de e-mail foi confirmada.'],
      ['Giggal email status', 'Menu suspenso', 'Deliverable, Undeliverable, Risky ou Unknown.'],
      ['Giggal deliverability score', 'Número', 'Nível de confiança de 0 a 100.'],
      ['Giggal email detail', 'Texto', 'Um motivo curto para o resultado.'],
      ['Giggal verified at', 'Data', 'Quando o endereço foi verificado pela última vez.'],
    ],
    scopesTitle: 'Permissões e dados no HubSpot',
    scopesIntro: 'A Giggal.ai pede quatro escopos do HubSpot. Cada um tem um único uso.',
    scopes: [
      ['crm.objects.contacts.read', 'Ler o endereço de e-mail dos contatos que você escolhe verificar.'],
      ['crm.objects.contacts.write', 'Gravar o resultado da verificação de volta nesses contatos.'],
      ['crm.schemas.contacts.write', 'Criar as cinco propriedades da Giggal no primeiro uso.'],
      ['crm.lists.read', 'Mostrar as suas listas de contatos para você escolher uma para verificar.'],
    ],
    scopesNote:
      'A Giggal.ai lê apenas o endereço de e-mail dos contatos que você escolhe. Ela não cria nem exclui contatos, não altera nenhuma propriedade além das cinco acima e nunca envia e-mail para os endereços que verifica.',
    faqTitle: 'Perguntas frequentes sobre verificação de e-mail no HubSpot',
    faq: [
      {
        q: 'A Giggal.ai envia e-mail para os meus contatos?',
        a: 'Não. A verificação se comunica com o servidor de e-mail de destino e para antes que qualquer mensagem seja enviada. Os seus contatos não recebem nada, nem na caixa de entrada nem na pasta de spam.',
      },
      {
        q: 'O que ela altera na minha conta do HubSpot?',
        a: 'No primeiro uso, ela cria um grupo de propriedades chamado Giggal Email Verifier, com cinco propriedades de contato personalizadas. Depois, grava os resultados só nessas propriedades. As propriedades existentes do HubSpot não são alteradas, e nenhum contato é criado ou excluído.',
      },
      {
        q: 'Ela consegue verificar domínios catch-all?',
        a: 'Sim. Esse é o principal motivo para usar a Giggal.ai com o HubSpot. Muitos verificadores devolvem arriscado ou desconhecido em domínios catch-all. A Giggal.ai continua a verificação e devolve entregável ou não entregável na maioria deles.',
      },
      {
        q: 'Validação de e-mail é o mesmo que verificação de e-mail?',
        a: 'Na prática, sim. Os dois termos descrevem a conferência de que um endereço pode receber e-mails. A Giggal.ai confere o formato, os servidores de e-mail do domínio e a caixa de e-mail, e depois grava um único resultado no contato do HubSpot.',
      },
      {
        q: 'Quanto custa?',
        a: 'Um crédito por endereço, com as verificações catch-all incluídas. Contas novas começam com 1.000 créditos grátis, e o preço por endereço cai conforme o volume aumenta.',
      },
      {
        q: 'Como uso os resultados no HubSpot?',
        a: 'Filtre os contatos ou crie uma lista ativa pela propriedade Giggal email status. Uma configuração comum é uma lista ativa de contatos Deliverable como público de envio e uma lista de supressão de contatos Undeliverable.',
      },
      {
        q: 'Como faço para desconectar?',
        a: 'Abra a aba Integration na Giggal.ai, clique no ícone de configurações no cartão do HubSpot e escolha Disconnect. Você também pode remover o app no HubSpot, em Settings, Integrations, Connected Apps. Os resultados já gravados continuam nos seus contatos.',
      },
    ],
    howToName: 'Como verificar contatos do HubSpot com a Giggal.ai',
    howToDescription:
      'Conecte a Giggal.ai ao HubSpot, verifique uma lista de contatos e leia o resultado em cinco propriedades de cada contato.',
    cta: {
      title: 'Limpe os seus contatos do HubSpot',
      text: 'Conecte uma vez, e cada contato do seu CRM recebe um resultado de verificação que você pode usar em filtros. Você começa com 1.000 créditos grátis, sem cartão.',
      primary: 'Comece grátis',
      secondary: 'Ver todas as integrações',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Servidor MCP para verificar e-mail no Claude e ChatGPT | Giggal.ai',
      description:
        'Conecte a Giggal.ai ao Claude, ChatGPT, Cursor e VS Code via MCP e verifique e-mails dentro do chat. Endereços catch-all recebem válido ou inválido.',
      ogTitle: 'Servidor MCP de verificação de e-mail para Claude e ChatGPT',
      ogDescription:
        'A Giggal.ai mantém um servidor MCP remoto, para que Claude, ChatGPT, Cursor e VS Code possam verificar endereços de e-mail. Inclui verificações catch-all.',
    },
    crumb: 'MCP',
    h1Lead: 'Um servidor MCP de verificação de e-mail para',
    h1Accent: 'o Claude e o ChatGPT',
    intro:
      'A Giggal.ai mantém um servidor MCP remoto. Conecte-o ao Claude, ChatGPT, Cursor ou VS Code, e o seu assistente de IA passa a funcionar como um [verificador de e-mail](/pt-br/verificacao-de-email). Peça para ele conferir um endereço ou uma lista, e ele responde dentro do chat.',
    urlLabel: 'URL do MCP',
    directoryLabel: 'Adicionar a Giggal.ai ao Claude',
    points: [
      'O Claude e o ChatGPT entram com OAuth',
      'Os editores de código usam a sua chave de API',
      'Verificações catch-all incluídas',
    ],
    setupTitle: 'Configure o servidor MCP na sua ferramenta de IA',
    setupSubtitle:
      'Escolha a sua ferramenta para ver as etapas. O Claude e o ChatGPT se conectam com um login. Os editores de código leem um arquivo de configuração.',
    toolsTitle: 'O que o assistente de IA pode fazer',
    toolsIntro:
      'O servidor dá três ferramentas ao seu assistente. Você faz o pedido em linguagem comum, e ele escolhe a ferramenta certa.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Verificar endereços',
        body: 'Confira um e-mail ou uma lista. Cada endereço recebe válido ou inválido, inclusive os endereços em domínios catch-all.',
      },
      {
        tool: 'get_verification_details',
        title: 'Ver os resultados completos',
        body: 'Busque os detalhes de uma verificação anterior: status, códigos de motivo e pontuação de entregabilidade de cada endereço.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Consultar os seus créditos',
        body: 'Pergunte quantos créditos restam antes de iniciar uma verificação grande.',
      },
    ],
    whyTitle: 'Por que o resultado catch-all importa em um chat',
    why: [
      'Cerca de 30% de uma lista B2B está em domínios catch-all. Esses domínios aceitam e-mails para qualquer endereço, exista a caixa de e-mail ou não. Muitos verificadores marcam esses endereços como arriscados, o que significa que não conseguiram saber.',
      'Em um chat, esse rótulo não ajuda. O assistente repete o que recebeu, então um terço da sua lista volta como incerto. A Giggal.ai continua a verificação desses endereços e devolve válido ou inválido. Ela faz o mesmo com caixas de e-mail atrás de 15 gateways de segurança de e-mail específicos, entre eles Proofpoint, Mimecast e Barracuda.',
      'Para ver exemplos de prompts, leia [como verificar e-mails no Claude e no ChatGPT](/pt-br/blog/verificar-emails-no-claude-e-no-chatgpt). O servidor MCP usa o mesmo mecanismo da [API de verificação de e-mail](/email-verification-api) (em inglês).',
    ],
    faqTitle: 'Perguntas frequentes sobre o MCP de verificação de e-mail',
    faq: [
      {
        q: 'O Claude consegue verificar endereços de e-mail?',
        a: `Sim, depois que você conecta uma ferramenta de verificação de e-mail via MCP. Adicione o servidor da Giggal.ai em ${MCP_URL} como conector personalizado no Claude, ou com o comando claude mcp add no Claude Code. Depois, peça, por exemplo, "verifique estes onze endereços e diga quais vão dar bounce". O Claude chama a ferramenta verify_emails e mostra o resultado no chat.`,
      },
      {
        q: 'O ChatGPT consegue verificar endereços de e-mail?',
        a: 'Sim, nos planos do ChatGPT que permitem conectores personalizados. Adicione a Giggal.ai como plugin personalizado com a URL do servidor MCP e entre com OAuth. Qualquer cliente compatível com MCP remoto pode usar o mesmo servidor, incluindo Cursor, VS Code, Windsurf, Cline e Zed.',
      },
      {
        q: 'O que o assistente de IA pode fazer?',
        a: 'Três coisas. A ferramenta verify_emails confere um endereço ou uma lista. A get_verification_details devolve o resultado completo de cada endereço, incluindo o status e os códigos de motivo. A get_credit_balance mostra quantos créditos restam.',
      },
      {
        q: 'Como ele trata os endereços catch-all?',
        a: 'Da mesma forma que o resto da Giggal.ai. Muitos verificadores marcam os endereços catch-all como arriscados. A Giggal.ai devolve válido ou inválido para eles, e também para caixas de e-mail atrás de 15 gateways de segurança de e-mail específicos, como Proofpoint, Mimecast e Barracuda.',
      },
      {
        q: 'Preciso de uma chave de API?',
        a: 'Não para o Claude nem para o ChatGPT. Os dois se conectam com OAuth, então você entra com a sua conta da Giggal.ai. Editores de código como Claude Code, Cursor e VS Code usam uma chave de API, que fica na aba Developer API do app da Giggal.ai.',
      },
      {
        q: 'Verificar via MCP custa mais?',
        a: 'Não. A verificação usa os mesmos créditos do painel e da API REST: 1 crédito por endereço, catch-all incluído. Contas novas recebem 1.000 créditos grátis, sem cartão, e os créditos não expiram.',
      },
      {
        q: 'Devo limpar uma lista grande desta forma?',
        a: 'Não. O MCP funciona melhor quando a verificação é uma etapa de uma tarefa, como conferir uma dúzia de contatos antes de escrever uma mensagem de prospecção. Para dezenas de milhares de endereços, use o upload em massa no app ou a API REST.',
      },
    ],
    howToName: 'Conecte a verificação de e-mail da Giggal.ai ao Claude ou ao ChatGPT via MCP',
    howToDescription:
      'Quatro etapas para verificar endereços de e-mail, inclusive catch-all, no Claude, ChatGPT, Cursor ou VS Code com o servidor MCP da Giggal.ai.',
    setupSteps: [
      {
        name: 'Crie uma conta na Giggal.ai',
        text: 'Cadastre-se na Giggal.ai. Contas novas incluem 1.000 créditos de verificação grátis, sem cartão.',
      },
      {
        name: 'Adicione o servidor MCP ao seu cliente',
        text: `Use a URL do servidor ${MCP_URL}. No Claude, adicione o servidor em Settings e depois em Connectors. No ChatGPT, adicione-o como plugin personalizado. Os editores de código leem um arquivo de configuração JSON, mostrado nesta página para cada editor.`,
      },
      {
        name: 'Entre ou adicione a sua chave de API',
        text: 'O Claude e o ChatGPT pedem que você entre na Giggal.ai e clique em Allow. Os editores de código precisam da chave de API da aba Developer API do app.',
      },
      {
        name: 'Peça ao assistente para verificar um endereço',
        text: 'Faça o pedido em linguagem comum, por exemplo "verifique hello@example.com e diga se é uma caixa de e-mail real". O assistente chama verify_emails e mostra o resultado.',
      },
    ],
    ctaTitle: 'Conecte a Giggal.ai ao seu assistente de IA',
    ctaText:
      'Comece com 1.000 créditos de verificação grátis, sem cartão. Adicione a URL do MCP ao Claude, ao ChatGPT ou ao seu editor de código.',
    ctaButton: 'Comece grátis',
  },
}
