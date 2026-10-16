import type { ApiDocsStrings } from './types'

// Brazilian Portuguese text for the API reference (/pt-br/documentacao-api).
// Register "você", "e-mail" with the hyphen, as in lib/i18n/pt-br.ts. Endpoint
// paths, HTTP methods, parameter names, JSON fields and values, header names,
// code and status codes stay in English. Field names that contain "verdict"
// stay as the API returns them; prose uses "resultado".

export const API_DOCS_PT_BR: ApiDocsStrings = {
  breadcrumbName: 'Documentação da API',
  schema: {
    headline: 'Referência da API da Giggal.ai',
    description:
      'API REST para verificar e-mails individuais, processar lotes em massa e fazer uma verificação aprofundada de endereços catch-all e protegidos por SEG. Endpoints JSON, autenticação com chave de API e cobrança por verificação concluída com sucesso.',
  },
  contactPath: '/pt-br/contato',

  overviewBanner:
    'Procura uma visão geral? Veja a [API de verificação de e-mail](/email-verification-api) ou a [API de validação de e-mail para formulários de cadastro](/email-validation-api) (em inglês).',
  hero: {
    h1: 'Referência da API de verificação de e-mail',
    lead: 'Verifique e-mails individuais, processe lotes em massa e faça uma verificação aprofundada de endereços catch-all e protegidos por SEG. Todos os endpoints usam JSON, são autenticados com uma chave de API e são cobrados por verificação concluída com sucesso.',
  },

  sidebar: {
    searchPlaceholder: 'Buscar…',
    collapse: 'Recolher',
    expand: 'Expandir',
  },

  intro: {
    h2: 'Introdução',
    body: 'A API da Giggal.ai permite verificar endereços de e-mail individuais, processar lotes de até 50.000 e-mails por tarefa e fazer uma verificação aprofundada de endereços catch-all e protegidos por SEG, com uma API REST simples em JSON. Cada verificação concluída com sucesso consome créditos da sua conta.',
    baseUrlLabel: 'URL base',
    apiKeyLabel: 'Obtenha uma chave de API',
    apiKeyBody:
      'Crie uma chave de API no painel da Giggal.ai. Abra a aba Developer API na barra lateral e clique em Create API Key. Cada chave pertence à sua conta, registra o próprio uso e pode ser revogada a qualquer momento.',
    apiKeyLink: 'Abrir a aba Developer API',
    envelopeLabel: 'Formato da resposta',
    envelopeBody: 'Todas as respostas seguem o mesmo formato JSON:',
    quickStartLabel: 'Início rápido: verifique um e-mail com cURL',
  },

  auth: {
    h2: 'Autenticação',
    body: 'Envie a sua chave de API em cada requisição, usando um destes dois cabeçalhos. Qualquer um funciona.',
    bearerLabel: 'Opção 1: token Bearer',
    xApiKeyLabel: 'Opção 2: cabeçalho X-API-Key',
    note: 'Chaves ausentes, inválidas ou revogadas devolvem HTTP 401. Nunca exponha chaves de API no código do lado do cliente. Faça as chamadas passarem pelo seu backend.',
    idempotencyLabel: 'Idempotência (em massa e catch-all)',
    idempotencyBody:
      'Para `POST /v1/verify-batch` e `POST /v1/catchall`, envie um cabeçalho `Idempotency-Key`. Novas tentativas com a mesma chave devolvem a resposta original, sem criar uma tarefa duplicada e sem cobrar os créditos duas vezes.',
  },

  groups: {
    'single-verification': 'Verificação individual',
    'bulk-verification': 'Verificação em massa',
    'catchall-verification': 'Verificação catch-all',
    account: 'Conta',
  },
  groupCount: {
    one: '{n} endpoint neste grupo.',
    other: '{n} endpoints neste grupo.',
  },

  endpoint: {
    authorizations: 'Autorizações',
    pathParams: 'Parâmetros de caminho e de consulta',
    requestBody: 'Corpo da requisição',
    required: 'Obrigatório',
    responseSamples: 'Exemplos de resposta',
  },

  endpoints: {
    'verify-single': {
      title: 'Verificar um único e-mail',
      description:
        'Verifica um endereço de e-mail de forma síncrona. Custa 1 crédito. Quando o domínio é catch-all, a verificação aprofundada roda na mesma chamada, e a resposta inclui catch_all_score e catch_all_verdict.',
      bodyParams: {
        email: 'O endereço de e-mail a verificar.',
      },
    },
    'submit-batch': {
      title: 'Enviar uma tarefa de verificação em massa',
      description:
        'Envie até 50.000 e-mails por tarefa. O processamento é assíncrono, então consulte GET /v1/jobs/:jobId para ver o andamento. Envie um cabeçalho Idempotency-Key para repetir a criação da tarefa com segurança, sem cobrança dupla.',
      bodyParams: {
        emails:
          'Lista (array) de endereços de e-mail a verificar. Máximo de 50.000 por tarefa. Endereços duplicados e mal formatados são removidos no servidor.',
        name: 'Nome opcional e legível para a tarefa. Aparece no seu painel.',
      },
    },
    'get-job': {
      title: 'Consultar o status de uma tarefa em massa',
      description:
        'Consulte para acompanhar o andamento. O status passa de processing para completed (ou failed). Intervalo de consulta recomendado: 10 a 15 segundos. Lotes pequenos (menos de 50 e-mails) costumam terminar em até 30 segundos.',
      params: {
        jobId: 'O ID da tarefa devolvido por POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Obter os resultados de uma tarefa em massa',
      description:
        'Quando o status for "completed", busque os resultados de cada e-mail. Os resultados são paginados, então envie os parâmetros de consulta page e limit. Os resultados ficam guardados por 48 horas (veja resultsExpiresAt na tarefa).',
      params: {
        jobId: 'O ID da tarefa.',
        page: 'Número da página. O padrão é 1.',
        limit: 'Resultados por página. O padrão é 25, e o máximo é 500.',
      },
    },
    'start-catchall': {
      title: 'Iniciar uma tarefa de verificação catch-all',
      description:
        'Inicia a verificação catch-all aprofundada de uma tarefa em massa já concluída. Só os endereços marcados como catch-all na tarefa de origem são verificados de novo. A cobrança é de 1 crédito por endereço (veja creditsRequired na resposta).',
      bodyParams: {
        jobId:
          'O ID de uma tarefa de verificação em massa concluída. Só os endereços catch-all dessa tarefa passam pela verificação aprofundada.',
        name: 'Nome opcional e legível para a tarefa.',
      },
    },
    'get-catchall': {
      title: 'Consultar o status de uma tarefa catch-all',
      description:
        'Consulte para acompanhar o andamento e a contagem de resultados em tempo real (verdictCounts). As tarefas catch-all costumam terminar entre alguns segundos e alguns minutos, conforme o volume.',
      params: {
        taskId: 'O ID da tarefa devolvido por POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Obter os resultados de uma tarefa catch-all',
      description:
        'Busca os resultados paginados de cada e-mail, com o detalhamento da pontuação (sinais de triagem do domínio e idade do domínio).',
      params: {
        taskId: 'O ID da tarefa.',
        page: 'Número da página. O padrão é 1.',
        limit: 'Resultados por página. O padrão é 25, e o máximo é 500.',
        verdict: 'Filtrar por resultado: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Baixar os resultados catch-all em CSV',
      description:
        'Baixa todos os resultados de uma tarefa catch-all concluída em um arquivo CSV com as colunas Email, Score e Verdict. O Content-Type é text/csv.',
      params: {
        taskId: 'O ID da tarefa.',
        verdict: 'Filtrar por resultado: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Consultar o saldo atual de créditos',
      description:
        'Devolve o saldo da sua conta, com os créditos disponíveis, os reservados (separados para tarefas em andamento) e os totais desde a criação da conta. As verificações que voltam como "unknown" são reembolsadas automaticamente e aparecem aqui.',
    },
  },

  errors: {
    h2: 'Erros e limites de requisição',
    statusHeader: 'Status',
    meaningHeader: 'Significado',
    statusRows: [
      { status: '200 OK', meaning: 'A requisição foi concluída (verificação síncrona ou consulta de status e resultados).' },
      { status: '202 Accepted', meaning: 'Tarefa assíncrona criada e colocada na fila.' },
      { status: '400 Bad Request', meaning: 'Parâmetros ausentes ou inválidos (formato de e-mail incorreto, lista emails vazia, jobId ausente).' },
      { status: '401 Unauthorized', meaning: 'Chave de API ausente, inválida ou revogada.' },
      { status: '402 Payment Required', meaning: 'Créditos insuficientes para a operação pedida.' },
      { status: '404 Not Found', meaning: 'O ID da tarefa não existe na sua conta.' },
      { status: '409 Conflict', meaning: 'A tarefa não está no estado exigido (por exemplo, ao pedir resultados antes da conclusão).' },
      { status: '410 Gone', meaning: 'Os resultados da tarefa passaram do prazo de 48 horas de armazenamento.' },
      { status: '429 Too Many Requests', meaning: 'Limite de requisições excedido. Espere e tente de novo.' },
      { status: '500 / 502 / 503', meaning: 'O servidor ou o serviço de verificação está temporariamente indisponível.' },
    ],
    rateLimitsH3: 'Limites de requisição',
    rateLimitsBody:
      'Todas as respostas incluem os cabeçalhos `RateLimit-Limit`, `RateLimit-Remaining` e `RateLimit-Reset` (grafia da RFC), para que você controle o ritmo das requisições. `RateLimit-Reset` é o número de segundos até a janela atual reiniciar.',
    categoryHeader: 'Categoria',
    limitHeader: 'Limite',
    rateLimitRows: [
      { category: 'Todos os endpoints (padrão)', limit: '300 requisições / 15 minutos' },
      { category: 'Criação de lotes (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 requisições / 15 minutos' },
      { category: 'Consulta de tarefas (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 requisições / 15 minutos' },
      { category: 'Máximo de e-mails por tarefa em massa', limit: '50.000' },
      { category: 'Armazenamento dos resultados das tarefas', limit: '48 horas' },
    ],
    tierNote:
      'Existem três faixas porque as consultas de status acontecem com mais frequência do que a criação de lotes. Você pode consultar a cada poucos segundos enquanto uma tarefa roda. Por isso, `600 / 15 min` (cerca de 40 por minuto) dá margem sem sobrecarregar o backend.',
    higherLimitsTitle: 'Precisa de limites maiores?',
    higherLimitsBody: 'Aumentamos os limites com frequência para parceiros de integração verificados.',
    higherLimitsCta: 'Fale com a gente',
    h429: 'Formato da resposta 429',
    body429: 'Quando você atinge um limite, a API devolve HTTP 429 com este corpo:',
    backoff:
      'Antes de tentar de novo, espere o tempo indicado no cabeçalho `RateLimit-Reset` (segundos até a janela reiniciar).',
  },

  cta: {
    h3: 'Pronto para integrar?',
    body: 'Crie a sua chave de API em segundos. Os créditos de teste grátis estão incluídos, para que você monte a integração de ponta a ponta antes de gastar qualquer valor.',
    primary: 'Obtenha a sua chave de API',
    secondary: 'Fale com a nossa equipe',
  },
}
