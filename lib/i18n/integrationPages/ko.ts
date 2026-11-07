import type { IntegrationPagesContent } from './types'

// Korean copy for the integration pages, translated from the English pages
// (lib/i18n/integrationPages/en.ts and the app descriptions in
// lib/integrations.ts) with the Japanese copy as the structural model. Keyword
// plan (SEO-Plan/i18n-batch4-ko-keyword-plan.md): the checker keyword
// "이메일 유효성 검사" links to /ko/email-checker; "이메일 검증" carries the
// rest. Product UI labels (Zapier, n8n, HubSpot, the Giggal.ai dashboard),
// property names, status values, scopes, tool names and code stay in English,
// as the apps show them; UI labels sit in “ ” (terminology sheet). Formal
// polite style (합니다체). Numbers 1,000 and 8,000. Catch-all is 캐치올
// (catch-all) at first mention, then 캐치올 도메인.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': '마케팅 자동화',
  'Email Marketing': '이메일 마케팅',
  CRM: 'CRM',
  Ecommerce: '전자상거래',
  'Sales & Outreach': '영업 및 아웃리치',
  'Forms & Surveys': '양식 및 설문',
  'Website & Popups': '웹사이트 및 팝업',
  'Spreadsheets & Data': '스프레드시트 및 데이터',
  Support: '고객 지원',
  Payments: '결제',
  Automation: '자동화',
  Spreadsheets: '스프레드시트',
  Forms: '양식',
  'AI & Agents': 'AI 및 에이전트',
  Developer: '개발자',
}

export const KO: IntegrationPagesContent = {
  common: {
    locale: 'ko',
    hubPath: '/ko/integrations',
    hubCrumb: '연동',
    checkerPath: '/ko/email-checker',
    signupLabel: '무료 크레딧 1,000개로 시작하기',
    getStarted: '무료로 시작하기',
    allIntegrations: '모든 연동 보기',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: '이메일 검증 연동: HubSpot, Zapier, n8n, MCP | Giggal.ai',
      description:
        'HubSpot, Zapier, n8n, Mailchimp, Claude, ChatGPT용 이메일 검증 연동입니다. 캐치올 도메인 주소를 포함해, 지금 쓰는 도구 안에서 이메일을 검증할 수 있습니다.',
      ogTitle: '이메일 검증 연동: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Giggal.ai 이메일 검증 도구를 HubSpot, Zapier, n8n, Mailchimp, Google 스프레드시트, Claude, ChatGPT와 연결합니다.',
    },
    h1Lead: '이메일 검증 연동:',
    h1Accent: '이미 쓰는 도구에서 바로 사용',
    intro:
      'Giggal.ai를 쓰면 CRM, 이메일 플랫폼, 스프레드시트, AI 어시스턴트 안에서 [이메일 유효성 검사](/ko/email-checker)를 할 수 있습니다. 모든 검사는 메일함이 있는지 알려 줍니다. 캐치올(catch-all) 도메인 주소에도 유효 또는 무효 결과가 붙습니다.',
    waysTitle: '지금 쓰는 도구에 이메일 검증을 추가하는 4가지 방법',
    waysIntro:
      '일하는 방식에 맞는 방법을 고르십시오. 어떤 방법이든 같은 크레딧을 쓰고 같은 결과를 돌려줍니다.',
    ways: [
      {
        label: '직접 연동',
        title: '직접 연동',
        text: 'Giggal.ai 대시보드에서 [HubSpot](/ko/integrations/hubspot), Mailchimp, SendGrid 등의 플랫폼을 연결합니다. 리스트를 가져와 검증하고, 정리된 리스트를 다시 보냅니다.',
      },
      {
        label: '자동화',
        title: 'Zapier와 n8n',
        text: '새 연락처, 양식 응답, 시트의 새 행이 들어오는 즉시 검증합니다. [Zapier](/ko/integrations/zapier)의 Giggal.ai 앱 또는 [n8n](/ko/integrations/n8n)의 공식 노드를 쓰십시오.',
      },
      {
        label: 'MCP',
        title: 'AI 어시스턴트',
        text: '[Giggal.ai MCP 서버](/ko/mcp)를 Claude, ChatGPT, Cursor, VS Code에 추가합니다. 그다음 채팅 안에서 어시스턴트에게 주소 검증을 요청하면 됩니다.',
      },
      {
        label: 'API',
        title: 'REST API',
        text: '자체 코드에서 단일 검증 요청이나 대량 검증 요청을 보냅니다. 결과는 JSON으로 돌아옵니다. [API 문서](/ko/api-docs)에 모든 엔드포인트가 나와 있습니다.',
      },
    ],
    grid: {
      searchPlaceholder: '연동 검색…',
      searchAria: '연동 검색',
      connectionAria: '연결 방식으로 걸러내기',
      connection: { all: '전체', direct: '직접 연동', zapier: 'Zapier 경유', api: 'API', mcp: 'MCP' },
      categoryAria: '카테고리로 걸러내기',
      allCategories: '모든 카테고리',
      categories: CATEGORIES,
      prevPage: '이전 페이지',
      nextPage: '다음 페이지',
      pagination: '페이지 이동',
      showing: '전체 연동 {total}개 중 {from}~{to}번째 표시',
      noMatchTitle: '검색과 일치하는 연동이 없습니다.',
      noMatchText:
        'HTTP 요청을 보낼 수 있는 도구라면 어떤 도구든 [REST API](/ko/api-docs)를 쓸 수 있습니다.',
      descriptions: {
        zapier:
          '8,000개 이상의 앱에서 새 이메일을 실시간으로 검증합니다. 캐치올 도메인 주소도 포함됩니다. 코드는 필요 없습니다.',
        n8n:
          'Giggal.ai 공식 커뮤니티 노드로 n8n 워크플로 안에서 이메일 1개나 리스트 전체를 검증합니다.',
        claude:
          'Giggal.ai MCP 서버를 Claude에 추가하고, 채팅 안에서 이메일 주소를 검증합니다.',
        chatgpt:
          'Giggal.ai MCP 서버를 ChatGPT에 추가하고, 채팅 안에서 이메일 주소를 검증합니다.',
        clay:
          'Giggal.ai API로 Clay 테이블의 잠재 고객 이메일을 검증합니다. 캐치올 도메인 주소도 포함됩니다.',
        'rest-api':
          '단일 검증, 대량 검증, 캐치올 검증을 위한 REST API입니다. 원하는 맞춤 연동을 직접 만들 수 있습니다.',
        mailchimp:
          'Mailchimp 오디언스를 가져와 검증하고, 메일을 받을 수 있는 구독자만 남깁니다.',
        mailgun:
          'Mailgun을 연결하고, 캠페인마다 발송 전에 발송 리스트를 검증합니다.',
        mailjet:
          'Mailjet 연락처 리스트를 Giggal.ai로 가져와 검증합니다. 캐치올 도메인 주소도 포함됩니다.',
        sendgrid:
          'SendGrid 연락처를 대량으로 검증해 발신자 평판을 지킵니다.',
        activecampaign:
          'ActiveCampaign 연락처를 가져와 검증하고, 발송 전에 잘못된 주소를 지웁니다.',
        'campaign-monitor':
          'Campaign Monitor를 연결하고, 모든 구독자 리스트를 Giggal.ai에서 검증합니다.',
        getresponse:
          'GetResponse 리스트를 검증해 반송을 줄입니다. 캐치올 도메인의 연락처도 포함됩니다.',
        aweber:
          'AWeber 구독자를 가져와 검증하고, 정리된 리스트를 다시 보냅니다.',
        mailerlite:
          'MailerLite를 연결하고, 다음 캠페인 전에 구독자 리스트를 검증합니다.',
        drip:
          'Drip 연락처를 대량으로 검증해 자동 이메일이 실제 메일함에 도착하게 합니다.',
        'elastic-email':
          'Elastic Email 리스트를 가져와 검증합니다. 캐치올 도메인 주소와 보안 게이트웨이 뒤의 주소도 포함됩니다.',
        'reply-io':
          'Reply.io 시퀀스가 시작되기 전에 잠재 고객 이메일을 검증해, 아웃리치가 실제 메일함에 도착하게 합니다.',
        'zoho-crm':
          'Zoho CRM의 연락처와 리드를 가져와 검증하고, CRM 데이터를 깨끗하게 유지합니다.',
        'google-sheets':
          '새 행이 추가되는 즉시 검증하고, 결과를 시트에 다시 씁니다.',
        hubspot:
          'HubSpot CRM의 연락처와 리스트를 검증하고, 그 결과로 HubSpot 안에서 걸러냅니다.',
        salesforce:
          'Salesforce에서 새 리드가 만들어지는 즉시 그 이메일을 검증합니다.',
        typeform:
          'Typeform 응답의 이메일을 다른 도구로 넘어가기 전에 검증합니다.',
        slack:
          '검증 결과와 리스트 알림을 Slack 채널에 게시합니다.',
      },
      zapierAppDescription:
        '{name}에 들어오는 이메일 주소를 Zapier를 통해 실시간으로 검증합니다.',
      logoAlt: '{name} 및 Giggal.ai 이메일 검증 연동',
    },
    appListTitle: '지원하는 모든 Zapier 앱',
    appListIntro: '앱 {count}개가 Zapier를 통해 Giggal.ai와 연결됩니다. 앱마다 별도의 설정 가이드가 있습니다(영어).',
    apiTitle: '쓰는 도구가 목록에 없습니까?',
    apiText:
      'HTTP 요청을 보낼 수 있는 도구라면 어떤 도구든 Giggal.ai로 이메일을 검증할 수 있습니다. 단일 검사와 대량 검사에는 [이메일 검증 API](/ko/email-verification-api)를 쓰거나, Zapier를 통해 연결하십시오.',
    apiCta: 'API 문서',
    apiHref: '/ko/api-docs',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier 이메일 검증: 8,000개 이상의 앱 지원 | Giggal.ai',
      description:
        'Giggal.ai로 Zapier에서 이메일을 검증합니다. 새 연락처를 실시간으로 검사하고, 캐치올 도메인 주소에도 유효 또는 무효 결과를 받아 리스트를 깨끗하게 유지합니다. 코드는 필요 없습니다.',
      ogTitle: 'Zapier 이메일 검증: 8,000개 이상의 앱 지원',
      ogDescription:
        'Giggal.ai로 Zapier에 들어오는 새 이메일 주소를 검증합니다. HubSpot, Google 스프레드시트, Salesforce, Mailchimp 등 8,000개 이상의 앱에서 작동합니다.',
    },
    crumb: 'Zapier',
    h1Lead: 'Zapier 이메일 검증:',
    h1Accent: '8,000개 이상의 앱 지원',
    intro:
      '어떤 Zap에든 Giggal.ai를 추가해, 주소가 들어오는 즉시 [이메일 유효성 검사](/ko/email-checker)를 할 수 있습니다. 양식, CRM, 스프레드시트, 이메일 플랫폼에서 작동합니다. 캐치올(catch-all) 도메인 주소에도 유효 또는 무효 결과가 붙습니다. 코드를 작성할 필요는 없습니다.',
    viewOnZapier: 'Zapier에서 보기',
    tabsTitle: 'Zapier 워크플로와 설정 가이드',
    tabsIntro:
      '자주 쓰는 워크플로에서 시작하거나, 가이드를 따라 약 5분 만에 직접 Zap을 만드십시오.',
    tabs: {
      cardSubtitle: 'Giggal.ai를 8,000개 이상의 앱과 연결',
      tryFree: '무료로 써 보기',
      actionsTitle: 'Zapier 액션 4가지',
      actions: [
        { name: 'Verify Email', description: '이메일 주소 1개를 실시간으로 검증합니다. 캐치올 도메인 주소도 포함됩니다.' },
        { name: 'Start Bulk Verification', description: '주소 리스트를 제출합니다. 다음 단계에서 쓸 수 있는 작업 ID를 반환합니다.' },
        { name: 'Get Bulk Verification Results', description: '대량 검증 작업의 상태가 완료되면 결과를 가져옵니다.' },
        { name: 'Get Credit Balance', description: 'Giggal.ai 크레딧이 얼마나 남았는지 확인합니다.' },
      ],
      workflowsTab: '워크플로',
      guideTab: '연동 가이드',
      workflows: [
        {
          title: 'HubSpot의 새 연락처 검증',
          description:
            'HubSpot에서 연락처가 만들어지면 Giggal.ai가 이메일을 검증하고, 결과를 연락처 속성에 씁니다.',
        },
        {
          title: 'Google 스프레드시트의 새 행 검증',
          description:
            '새 행이 추가될 때마다 검증합니다. 상태, 위험 수준, 캐치올 검사 결과를 그 행에 다시 씁니다.',
        },
        {
          title: 'Salesforce의 새 리드 검증',
          description:
            '영업 담당자가 리드를 다루기 전에 모든 새 리드를 검증합니다. 그래서 존재하지 않는 메일함에 메일을 보내는 일이 없습니다.',
        },
        {
          title: 'Mailchimp 가입자 검증',
          description:
            '새 구독자를 가입 시점에 검증하고, 전송 가능한 주소만 Mailchimp 오디언스에 추가합니다.',
        },
        {
          title: 'Typeform 응답 검사',
          description:
            '양식 응답에서 오타가 있는 이메일과 일회용 이메일을 다른 도구로 넘어가기 전에 찾아냅니다.',
        },
        {
          title: '결과를 Slack으로 보내기',
          description:
            '검증이 끝났을 때나, 캐치올 도메인의 리드가 유효로 확인되었을 때 Slack 메시지를 게시합니다.',
        },
      ],
      workflowCta: 'Zapier에서 설정하기',
      guideTitle: 'Giggal.ai와 Zapier 연결하기',
      guideIntro:
        '설정은 약 5분 걸립니다. 아래 예시는 Google 스프레드시트의 모든 새 행을 검증합니다.',
      steps: [
        {
          title: '트리거 앱 고르기',
          text: 'Zap을 만들고 Zap을 시작할 앱을 고릅니다. Zapier의 8,000개 이상의 앱 중 어떤 앱이든 됩니다. 이 예시에서는 Google Sheets와 “New or Updated Spreadsheet Row” 이벤트를 고릅니다. 계정을 연결하고 “Continue”를 클릭하십시오.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'Google Sheets와 New or Updated Spreadsheet Row 이벤트를 고른 Zapier 트리거 설정 화면',
        },
        {
          title: 'Giggal.ai를 액션 단계로 추가하기',
          text: '액션 단계의 앱 선택 화면에서 Giggal.ai를 검색하고 선택합니다.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Zapier 앱 선택 화면에서 Giggal.ai를 검색하는 모습',
        },
        {
          title: '액션 이벤트 고르기',
          text: 'Giggal.ai에는 “Verify Email”, “Start Bulk Verification”, “Get Bulk Verification Results”, “Get Credit Balance”의 네 가지 액션이 있습니다. 이 예시에서는 “Verify Email”을 고릅니다.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Zapier 이벤트 선택 화면의 Giggal.ai 액션 이벤트 4가지',
        },
        {
          title: 'Giggal.ai 계정 연결하기',
          text: '처음에는 Zapier가 API 키를 요청합니다. Giggal.ai 대시보드에서 “Developer API” 탭을 열고 “Create API Key”를 클릭합니다. 키를 Zapier에 붙여 넣고 “Connect”를 클릭하십시오. 신규 계정에는 무료 크레딧 1,000개가 제공되며, 신용카드는 필요 없습니다.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'API 키로 Giggal.ai 계정을 Zapier에 연결하는 화면',
        },
        {
          title: '이메일 필드를 연결하고 결과 활용하기',
          text: '“Email” 입력란을 주소가 들어 있는 열로 지정하고 테스트를 실행합니다. Giggal.ai는 상태, 위험 수준, 점수, 캐치올 검사 결과를 반환합니다. 이 단계 뒤에 Zapier의 필터나 경로를 추가하십시오. 예를 들어 전송 가능한 주소는 시트에 다시 쓰고, 무효 주소는 다른 탭으로 옮길 수 있습니다.',
        },
      ],
      help: '진행이 막히셨습니까? [저희 팀에 문의](/ko/contact)하거나, 전체 응답 형식은 [API 문서](/ko/api-docs)를 참고하십시오.',
    },
    why: [
      {
        title: 'Zapier에서 쓰는 캐치올 이메일 검증 도구',
        text: '많은 검증 도구는 캐치올 도메인 주소를 위험으로 표시하는 데서 그칩니다. B2B 리스트에서는 이런 주소가 약 30%에 이를 수 있습니다. Giggal.ai는 이 주소들을 더 검사하고, Zap 안에서 유효 또는 무효 결과를 돌려줍니다.',
      },
      {
        title: '입력되는 시점의 검증',
        text: '리드는 양식, CRM, 시트에서 들어오는 즉시 검증됩니다. 잘못된 주소가 리스트에 들어가지 않으므로 나중에 정리할 일이 줄어듭니다.',
      },
      {
        title: 'Zap에서 분기에 쓸 수 있는 결과',
        text: '모든 검사는 상태, 위험 수준, 전송 가능성 점수, 캐치올 검사 결과를 반환합니다. 이 값을 Zapier의 필터와 경로에 써서 각 리드를 알맞은 곳으로 보내십시오.',
      },
    ],
    appsTitle: '다음 앱에서 이메일 검증하기',
    appsIntro: '아래 앱마다 Zapier를 통한 이메일 검증 설정 가이드가 따로 있습니다(영어).',
    categories: CATEGORIES,
    faqTitle: 'Zapier 이메일 검증: 자주 묻는 질문',
    faq: [
      {
        q: 'Giggal.ai Zapier 연동은 어떻게 작동합니까?',
        a: 'Zap에 Giggal.ai 단계를 추가합니다. 새 CRM 연락처나 양식 응답 같은 트리거가 실행되면 Zapier가 이메일 주소를 Giggal.ai로 보냅니다. Giggal.ai는 메일함이 있는지 검사하고, 결과를 다음 단계로 넘깁니다. 코드는 필요 없습니다.',
      },
      {
        q: 'Zapier로 캐치올 이메일 주소를 검증할 수 있습니까?',
        a: '네, Giggal.ai를 검증 단계로 쓰면 됩니다. 대부분의 검증 도구는 캐치올 도메인에 위험 또는 알 수 없음 결과를 돌려줍니다. Giggal.ai는 이런 주소에 추가 검사를 실행하고, 점수와 함께 유효 또는 무효 결과를 돌려줍니다.',
      },
      {
        q: '어떤 앱을 연결할 수 있습니까?',
        a: 'HubSpot, Salesforce, Pipedrive, Google 스프레드시트, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform, Slack 등 Zapier에 있는 모든 앱입니다. Zapier에 있는 앱이라면 Giggal.ai로 주소를 보낼 수 있습니다.',
      },
      {
        q: 'Zapier를 통한 검사에는 크레딧이 얼마나 듭니까?',
        a: '이메일 주소 1개당 크레딧 1개로, 대시보드나 API와 같습니다. 캐치올 검사도 똑같이 크레딧 1개입니다. 신규 계정에는 무료 크레딧 1,000개가 제공되며, 신용카드는 필요 없습니다.',
      },
      {
        q: '실시간으로 검증해야 합니까, 대량으로 검증해야 합니까?',
        a: '대부분의 팀은 둘 다 합니다. Zapier의 실시간 검사는 잘못된 주소를 입력 시점에 막습니다. 대량 검증은 이미 가진 리스트를 대시보드에서 또는 “Start Bulk Verification” 액션으로 정리합니다.',
      },
    ],
    howToName: 'Giggal.ai로 Zapier에서 이메일을 검증하는 방법',
    howToDescription:
      '어떤 Zapier 워크플로에든 캐치올 도메인 주소를 포함한 이메일 검증을 설정합니다.',
    cta: {
      title: 'Zapier에 들어오는 모든 새 이메일 주소를 검증하십시오',
      text: '첫 검증 Zap을 약 5분 만에 만들 수 있습니다. 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없고, 캐치올 검사도 포함됩니다.',
      primary: '무료로 시작하기',
      secondary: '모든 연동 보기',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'n8n 이메일 검증: 공식 커뮤니티 노드 | Giggal.ai',
      description:
        'Giggal.ai 공식 커뮤니티 노드로 n8n에서 이메일을 검증합니다. 주소 1개나 리스트 전체를 검사하며, 캐치올 도메인 주소도 포함됩니다. npm에서 n8n-nodes-giggal을 설치하십시오.',
      ogTitle: 'n8n 이메일 검증: 공식 커뮤니티 노드',
      ogDescription:
        'Giggal.ai 커뮤니티 노드로 n8n 워크플로에서 이메일 1개와 리스트 전체를 검증합니다. 캐치올 도메인 주소도 포함됩니다.',
    },
    crumb: 'n8n',
    h1Lead: 'n8n 이메일 검증:',
    h1Accent: 'Giggal.ai 공식 노드',
    intro:
      'n8n 워크플로에 Giggal.ai를 추가해 [이메일 유효성 검사](/ko/email-checker)를 하십시오. 주소 1개를 실시간으로 검증하거나, 리스트 전체를 배치 작업으로 보낼 수 있습니다. 캐치올(catch-all) 도메인 주소에도 유효 또는 무효 결과가 붙습니다. 노드는 npm에서 한 번만 설치하면 됩니다.',
    viewOnNpm: 'npm에서 보기',
    opsTitle: 'n8n 노드로 할 수 있는 일',
    opsIntro:
      '노드에는 리소스 2개와 작업 4개가 있습니다. 단일 검사에는 Email을, 리스트에는 Job을 쓰십시오.',
    ops: [
      { name: 'Verify', detail: '이메일 주소 1개를 실시간으로 검증합니다. 캐치올 도메인 주소도 포함되며, 검사 1회에 크레딧 1개입니다.' },
      { name: 'Verify Batch', detail: '리스트 전체를 요청 한 번으로 보냅니다. 워크플로에서 나중에 확인할 수 있는 작업 ID를 반환합니다.' },
      { name: 'Get Status', detail: '배치 작업이 얼마나 진행되었는지 보여 줍니다. 처리된 수, 진행률(%), 완료 시각을 확인할 수 있습니다.' },
      { name: 'Get Results', detail: '완료된 결과를 페이지별로 가져옵니다. deliverable 또는 catch_all 같은 필터를 선택적으로 쓸 수 있습니다.' },
    ],
    installTitle: '노드를 설치하고 첫 이메일 검증하기',
    installIntro:
      '클라우드 또는 자체 호스팅 n8n 인스턴스와 Giggal.ai 무료 계정이 필요합니다. 설정은 약 5분 걸립니다.',
    installSteps: [
      {
        title: 'n8n 설정에서 Community nodes 열기',
        text: 'n8n에서 왼쪽 아래의 계정 메뉴를 클릭하고 “Settings”를 엽니다. 그다음 “Community nodes”를 선택합니다.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'n8n 설정 메뉴의 Community nodes 항목',
      },
      {
        title: 'n8n-nodes-giggal 설치하기',
        text: '“Install a community node”를 클릭합니다. “npm Package Name” 필드에 `n8n-nodes-giggal`을 입력하고, 체크박스를 선택한 뒤 “Install”을 클릭합니다. 그러면 노드 목록에 Giggal.ai 노드가 나타납니다.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Install community nodes 대화 상자에서 n8n-nodes-giggal 패키지를 설치하는 화면',
      },
      {
        title: '노드를 추가하고 자격 증명 만들기',
        text: '워크플로에 Giggal.ai 노드를 추가합니다. “Credential” 드롭다운에서 “Create new credential”을 고릅니다.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'n8n의 노드에서 새 Giggal.ai 자격 증명을 만드는 화면',
      },
      {
        title: 'API 키 붙여 넣기',
        text: 'Giggal.ai 대시보드에서 “Developer API” 탭을 열고 “Create API Key”를 클릭합니다. 키를 “API Key” 필드에 붙여 넣고 저장합니다. 이제 인스턴스의 모든 Giggal.ai 노드가 이 키를 쓸 수 있습니다. 신규 계정에는 무료 크레딧 1,000개가 제공되며, 신용카드는 필요 없습니다.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'n8n 자격 증명에 Giggal.ai API 키를 추가하는 화면',
      },
      {
        title: '첫 이메일 검증하기',
        text: '“Resource”를 “Email”로, “Operation”을 “Verify”로 설정합니다. `{{ $json.email }}` 같은 표현식으로 “Email Address” 필드를 데이터에 연결하고 “Execute step”을 클릭합니다. 출력에는 상태, 위험 수준, 전송 가능성 점수, 캐치올 검사 세부 정보가 표시됩니다.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'n8n에서 이메일 1개를 검증하고 출력을 확인하는 화면',
      },
    ],
    batchTitle: 'n8n에서 리스트 전체 검증하기',
    batchIntro:
      '주소가 여러 개라면 Job 리소스를 쓰십시오. 제출하고, 상태를 확인하고, 결과를 가져오는 순서입니다.',
    batchSteps: [
      {
        title: 'Verify Batch로 리스트 제출하기',
        text: '“Operation”을 “Verify Batch”로 설정하고, “Email Field”가 주소가 들어 있는 속성을 가리키게 합니다. 나중에 대시보드에서 찾기 쉽도록 배치에 이름을 붙일 수 있습니다. 캐치올 도메인 주소를 더 검사하도록 “Enable Catch-All Rescue”는 켜 둔 채로 두십시오. 노드는 바로 작업 ID를 반환하고, 검증은 백그라운드에서 진행됩니다.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Giggal.ai n8n 노드로 이메일 배치를 검증용으로 제출하는 화면',
      },
      {
        title: 'Get Status로 진행 상황 확인하기',
        text: '“Resource”를 “Job”으로, “Operation”을 “Get Status”로 설정하고, 이전 단계의 작업 ID를 넣습니다. 반복 실행 중에 상태를 너무 자주 조회하지 않도록 확인 사이에 Wait 노드를 넣으십시오.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'n8n의 Get Status 작업으로 배치 작업 진행 상황을 확인하는 화면',
      },
      {
        title: 'Get Results로 결과 가져오기',
        text: '상태가 completed로 표시되면 같은 작업 ID로 “Get Results”를 실행합니다. 이메일마다 상태, 위험 수준, 점수가 담긴 항목을 하나씩 받습니다. “Status Filter” 필드로 deliverable, undeliverable, catch_all 행만 가져올 수 있습니다.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'n8n에서 완료된 배치 검증 결과를 가져오는 화면',
      },
    ],
    calloutTitle: '캐치올 도메인 주소와 게이트웨이 뒤의 주소에도 유효 또는 무효 결과',
    calloutText:
      '많은 검증 도구는 보안 이메일 게이트웨이(SEG) 뒤의 주소에 “알 수 없음”을, 캐치올 도메인에 “위험”을 돌려줍니다. Giggal.ai는 Proofpoint, Mimecast 같은 [게이트웨이 뒤의 주소도 검증](/ko/seg-email-verification)하며, 캐치올 도메인에도 추가 검사를 실행합니다. [캐치올 검증 방식 보기](/ko/catch-all-verification).',
    faqTitle: 'n8n 이메일 검증: 자주 묻는 질문',
    faq: [
      {
        q: 'Giggal.ai 노드는 n8n Cloud에서도 작동합니까?',
        a: '네. “Settings”에서 “Community nodes”로 들어가 설치하고 API 키를 추가하십시오. n8n Cloud와 자체 호스팅 인스턴스에서 똑같이 작동합니다.',
      },
      {
        q: '커뮤니티 노드를 설치해도 안전합니까?',
        a: 'Giggal.ai 팀이 npm에 n8n-nodes-giggal 패키지로 배포하며, 누구나 소스 코드를 읽을 수 있습니다. 노드는 사용자가 설정한 자격 증명으로 Giggal.ai API와만 통신합니다.',
      },
      {
        q: 'n8n으로 캐치올 이메일을 검증할 수 있습니까?',
        a: '네, Giggal.ai 노드로 할 수 있습니다. 단일 검사는 캐치올 도메인을 자동으로 처리합니다. 배치 작업도 “Enable Catch-All Rescue”가 켜져 있으면 똑같이 처리합니다. 위험 표시가 아니라 점수와 함께 유효 또는 무효 결과를 받습니다.',
      },
      {
        q: 'n8n에서 검증하는 비용은 얼마입니까?',
        a: '이메일 주소 1개당 크레딧 1개로, Giggal.ai의 다른 모든 곳과 같습니다. 캐치올 검사도 똑같이 크레딧 1개입니다. 신규 계정은 무료 크레딧 1,000개로 시작하며, 신용카드는 필요 없습니다.',
      },
      {
        q: '노드는 무엇을 출력합니까?',
        a: '이메일마다 상태, 위험 수준, 전송 가능성 점수를 반환합니다. 무료 메일 주소, 역할 기반 주소, 일회용 이메일 주소 여부, 메일 서버 세부 정보, 캐치올 검사 결과도 반환합니다. 출력은 일반적인 n8n JSON이므로 걸러내거나 연결할 수 있습니다.',
      },
    ],
    howToName: 'Giggal.ai 커뮤니티 노드로 n8n에서 이메일을 검증하는 방법',
    howToDescription:
      'n8n-nodes-giggal을 설치하고 API 키를 추가한 뒤, n8n 워크플로에서 이메일 1개나 리스트 전체를 검증합니다.',
    cta: {
      title: 'n8n 워크플로에 이메일 검증을 추가하십시오',
      text: 'n8n-nodes-giggal을 설치하고 API 키를 붙여 넣으면, 쓸 수 없는 이메일 주소가 워크플로를 지나가지 않게 할 수 있습니다. 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없습니다.',
      primary: '무료로 시작하기',
      secondary: '모든 연동 보기',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot 이메일 검증 및 유효성 검사 | Giggal.ai',
      description:
        'Giggal.ai로 HubSpot의 이메일을 검증합니다. CRM의 연락처와 리스트의 유효성을 검사하고, 캐치올 도메인 주소에도 결과를 받아 HubSpot에서 그 결과로 걸러냅니다.',
      ogTitle: 'HubSpot 이메일 검증 및 유효성 검사',
      ogDescription:
        'Giggal.ai를 HubSpot에 연결하고, 연락처와 리스트를 검증한 뒤 CRM에서 그 결과로 걸러냅니다.',
    },
    crumb: 'HubSpot',
    h1Lead: 'HubSpot 이메일 검증',
    h1Accent: '및 유효성 검사',
    intro:
      'HubSpot CRM에 이미 있는 연락처를 검증하십시오. 한 번 연결하고 리스트를 고르면, 각 연락처의 레코드에 결과가 기록됩니다. 캐치올(catch-all) 도메인 주소에는 위험이 아니라 전송 가능 또는 전송 불가 결과가 붙습니다. 내보내기나 다시 가져오기는 필요 없습니다.',
    openDashboard: '대시보드 열기',
    capsTitle: 'HubSpot 연동으로 할 수 있는 일',
    capsIntro: 'HubSpot과 Giggal.ai 안에서 진행되는 4단계입니다.',
    caps: [
      {
        name: '연락처 또는 리스트 가져오기',
        detail: '“All contacts” 또는 원하는 HubSpot 리스트를 고릅니다. 먼저 이메일 수가 표시되므로, 시작하기 전에 필요한 크레딧을 알 수 있습니다.',
      },
      {
        name: '모든 주소 검증',
        detail: '각 메일함이 있는지 검사합니다. 캐치올 도메인에는 위험이 아니라 분명한 결과가 붙습니다. 주소 1개당 크레딧 1개입니다.',
      },
      {
        name: '결과를 다시 기록',
        detail: '각 연락처에 Giggal 속성 5개가 설정되므로, 결과가 레코드와 함께 남습니다.',
      },
      {
        name: '걸러내고 리스트 만들기',
        detail: 'HubSpot 필터와 활성 리스트에서 Giggal email status를 쓰십시오. 다음 발송 전에 잘못된 주소를 지울 수 있습니다.',
      },
    ],
    stepsTitle: 'HubSpot을 연결하고 첫 리스트를 검증하는 방법',
    stepsIntro:
      '4단계이며 약 2분 걸립니다. Giggal.ai 계정과, 앱을 설치하고 연락처 속성을 편집할 수 있는 HubSpot 권한이 필요합니다.',
    steps: [
      {
        title: 'Giggal.ai에서 Integration 탭 열기',
        text: 'Giggal.ai에 로그인하고 “Email Validation”으로 이동한 뒤 “Integration” 탭을 엽니다. HubSpot 카드를 찾아 “Connect”를 클릭합니다. 아직 계정이 없다면 가입은 1분이면 끝나며, 무료 크레딧 1,000개가 포함됩니다.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Giggal.ai Integration 탭의 HubSpot 카드와 Connect 버튼',
      },
      {
        title: 'HubSpot에서 권한 승인하기',
        text: 'HubSpot은 Giggal.ai가 접근할 수 있는 모든 항목을 보여 주는 자체 승인 화면을 표시합니다. 연락처 속성 보기, 연락처 변경, 연락처 속성 설정 변경, 연락처 리스트 보기, 설치하는 계정 읽기입니다. 목록을 검토하고 “Connect app”을 클릭하십시오. Giggal.ai로 돌아오면 HubSpot 카드에 “Verify”가 표시됩니다.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Giggal Email Verifier 앱의 HubSpot 권한 검토 화면',
      },
      {
        title: '연락처 리스트 가져오기',
        text: 'HubSpot 카드에서 “Verify”를 클릭해 “Import from HubSpot” 창을 엽니다. “All contacts” 또는 포털의 원하는 리스트를 고릅니다. 각 행에 이메일 수가 표시되므로, 시작하기 전에 비용을 알 수 있습니다. “Import”를 클릭하십시오.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: '연락처 리스트와 이메일 수가 표시된 Import from HubSpot 창',
      },
      {
        title: '리스트를 검증하고 결과 동기화하기',
        text: 'Giggal.ai는 모든 주소를 검사하고, 검사가 끝나는 대로 각 HubSpot 연락처에 결과를 씁니다. 작업 카드에는 결과 분포와 “Synced to HubSpot” 수가 표시됩니다. 언제든지 “Sync to HubSpot”을 클릭해 다시 기록할 수 있습니다.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: '결과가 HubSpot에 동기화된, Giggal.ai의 완료된 HubSpot 검증 작업',
      },
    ],
    calloutTitle: 'HubSpot과 함께 캐치올 이메일 검증 도구를 써야 하는 이유',
    calloutText:
      'B2B 리스트의 약 30%는 캐치올 도메인에 있습니다. 많은 검증 도구는 이런 연락처를 위험으로 돌려주므로, 그 결과로는 아무 조치도 할 수 없습니다. Giggal.ai는 캐치올 도메인에 추가 검사를 실행해 [이메일 유효성 검사](/ko/email-checker)를 하고, Proofpoint, Mimecast 같은 [보안 이메일 게이트웨이 뒤의 주소도 검증](/ko/seg-email-verification)합니다. 이런 연락처 대부분은 전송 가능 또는 전송 불가 결과를 받습니다. [캐치올 검증 방식 보기](/ko/catch-all-verification).',
    propsTitle: 'Giggal.ai가 각 연락처에 기록하는 HubSpot 속성',
    propsIntro:
      '속성 5개는 처음 검증을 실행할 때 만들어집니다. Giggal Email Verifier라는 속성 그룹에 들어갑니다. 기존 HubSpot 속성은 바뀌지 않습니다.',
    propsHead: ['속성', '유형', '알려 주는 내용'],
    props: [
      ['Giggal email is valid', '체크박스', '메일함이 있다고 확인되면 Yes입니다.'],
      ['Giggal email status', '드롭다운', 'Deliverable, Undeliverable, Risky, Unknown 중 하나입니다.'],
      ['Giggal deliverability score', '숫자', '0~100의 신뢰도입니다.'],
      ['Giggal email detail', '텍스트', '결과의 짧은 이유입니다.'],
      ['Giggal verified at', '날짜', '주소를 마지막으로 검사한 시각입니다.'],
    ],
    scopesTitle: 'HubSpot 권한과 데이터',
    scopesIntro: 'Giggal.ai는 HubSpot 범위(scope) 4개를 요청합니다. 각 범위의 용도는 하나뿐입니다.',
    scopes: [
      ['crm.objects.contacts.read', '검증하기로 고른 연락처의 이메일 주소를 읽습니다.'],
      ['crm.objects.contacts.write', '검증 결과를 그 연락처에 다시 씁니다.'],
      ['crm.schemas.contacts.write', '처음 사용할 때 Giggal 속성 5개를 만듭니다.'],
      ['crm.lists.read', '검증할 리스트를 고를 수 있도록 연락처 리스트를 보여 줍니다.'],
    ],
    scopesNote:
      'Giggal.ai는 고른 연락처의 이메일 주소만 읽습니다. 연락처를 만들거나 지우지 않고, 위의 속성 5개 외에는 어떤 속성도 바꾸지 않으며, 검사하는 주소로 이메일을 보내지 않습니다.',
    faqTitle: 'HubSpot 이메일 검증: 자주 묻는 질문',
    faq: [
      {
        q: 'Giggal.ai가 연락처에 이메일을 보냅니까?',
        a: '아니요. 검증은 받는 쪽 메일 서버와 통신하고, 메시지를 보내기 전에 멈춥니다. 연락처의 받은편지함에도 스팸함에도 아무것도 도착하지 않습니다.',
      },
      {
        q: 'HubSpot 계정에서 무엇이 바뀝니까?',
        a: '처음 사용할 때 Giggal Email Verifier라는 속성 그룹과 맞춤 연락처 속성 5개를 만듭니다. 그 후에는 이 속성에만 결과를 씁니다. 기존 HubSpot 속성은 바뀌지 않으며, 연락처를 만들거나 지우지 않습니다.',
      },
      {
        q: '캐치올 도메인을 검증할 수 있습니까?',
        a: '네. 이것이 HubSpot과 함께 Giggal.ai를 쓰는 가장 큰 이유입니다. 많은 검증 도구는 캐치올 도메인에 위험 또는 알 수 없음 결과를 돌려줍니다. Giggal.ai는 더 검사해서 대부분의 주소에 전송 가능 또는 전송 불가 결과를 돌려줍니다.',
      },
      {
        q: '이메일 유효성 검사와 이메일 검증은 같은 것입니까?',
        a: '실제로는 같습니다. 두 용어 모두 주소가 메일을 받을 수 있는지 검사하는 일을 말합니다. Giggal.ai는 형식, 도메인의 메일 서버, 메일함을 검사한 뒤 HubSpot 연락처에 결과 하나를 씁니다.',
      },
      {
        q: '비용은 얼마입니까?',
        a: '주소 1개당 크레딧 1개이며, 캐치올 검사도 포함됩니다. 신규 계정은 무료 크레딧 1,000개로 시작하며, 수량이 늘어날수록 주소당 가격이 낮아집니다.',
      },
      {
        q: 'HubSpot에서 결과를 어떻게 활용합니까?',
        a: 'Giggal email status로 연락처를 걸러내거나 활성 리스트를 만드십시오. 흔한 설정은 Deliverable 연락처의 활성 리스트를 발송 대상으로 쓰고, Undeliverable 연락처는 발송 제외 리스트에 넣는 것입니다.',
      },
      {
        q: '연결을 해제하려면 어떻게 합니까?',
        a: 'Giggal.ai에서 “Integration” 탭을 열고, HubSpot 카드의 설정 아이콘을 클릭한 뒤 “Disconnect”를 고르십시오. HubSpot의 “Settings”, “Integrations”, “Connected Apps”에서 앱을 제거할 수도 있습니다. 이미 기록된 결과는 연락처에 그대로 남습니다.',
      },
    ],
    howToName: 'Giggal.ai로 HubSpot 연락처를 검증하는 방법',
    howToDescription:
      'Giggal.ai를 HubSpot에 연결하고 연락처 리스트를 검증한 뒤, 모든 연락처의 속성 5개에서 결과를 확인합니다.',
    cta: {
      title: 'HubSpot 연락처를 정리하십시오',
      text: '한 번 연결하면 CRM의 모든 연락처에 걸러내기에 쓸 수 있는 검증 결과가 붙습니다. 무료 크레딧 1,000개로 시작하며, 신용카드는 필요 없습니다.',
      primary: '무료로 시작하기',
      secondary: '모든 연동 보기',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Claude·ChatGPT용 이메일 검증 MCP 서버 | Giggal.ai',
      description:
        'MCP로 Giggal.ai를 Claude, ChatGPT, Cursor, VS Code에 연결하고 채팅 안에서 이메일을 검증합니다. 캐치올 도메인 주소에도 유효 또는 무효 결과가 붙습니다.',
      ogTitle: 'Claude·ChatGPT용 이메일 검증 MCP 서버',
      ogDescription:
        'Giggal.ai는 원격 MCP 서버를 운영하므로 Claude, ChatGPT, Cursor, VS Code에서 이메일 주소를 검증할 수 있습니다. 캐치올 검사도 포함됩니다.',
    },
    crumb: 'MCP',
    h1Lead: '이메일 검증 MCP 서버:',
    h1Accent: 'Claude와 ChatGPT에서 사용',
    intro:
      'Giggal.ai는 원격 MCP 서버를 운영합니다. Claude, ChatGPT, Cursor, VS Code에 연결하면 AI 어시스턴트로 [이메일 유효성 검사](/ko/email-checker)를 할 수 있습니다. 주소 하나나 리스트의 검사를 요청하면 채팅 안에서 답합니다.',
    urlLabel: 'MCP URL',
    directoryLabel: 'Claude에 Giggal.ai 추가하기',
    points: [
      'Claude와 ChatGPT는 OAuth로 로그인',
      '코드 편집기는 API 키 사용',
      '캐치올 검사 포함',
    ],
    setupTitle: 'AI 도구에 MCP 서버 설정하기',
    setupSubtitle:
      '도구를 고르면 단계가 표시됩니다. Claude와 ChatGPT는 로그인으로 연결합니다. 코드 편집기는 설정 파일을 읽습니다.',
    toolsTitle: 'AI 어시스턴트가 할 수 있는 일',
    toolsIntro:
      '서버는 어시스턴트에게 도구 3개를 제공합니다. 평소에 쓰는 말로 요청하면 어시스턴트가 알맞은 도구를 고릅니다.',
    tools: [
      {
        tool: 'verify_emails',
        title: '주소 검증',
        body: '이메일 1개나 리스트를 검사합니다. 캐치올 도메인 주소를 포함해 모든 주소에 유효 또는 무효 결과가 붙습니다.',
      },
      {
        tool: 'get_verification_details',
        title: '전체 결과 조회',
        body: '지난 검사의 세부 정보를 가져옵니다. 주소별 상태, 사유 코드, 전송 가능성 점수입니다.',
      },
      {
        tool: 'get_credit_balance',
        title: '크레딧 확인',
        body: '큰 검사를 시작하기 전에 크레딧이 얼마나 남았는지 물어볼 수 있습니다.',
      },
    ],
    whyTitle: '채팅에서 캐치올 검사 결과가 중요한 이유',
    why: [
      'B2B 리스트의 약 30%는 캐치올 도메인에 있습니다. 이런 도메인은 메일함이 있든 없든 모든 주소로 오는 메일을 받습니다. 많은 검증 도구는 이런 주소를 위험으로 표시하는데, 이는 확인하지 못했다는 뜻입니다.',
      '채팅에서는 이 표시가 도움이 되지 않습니다. 어시스턴트는 받은 결과를 그대로 전하므로, 리스트의 3분의 1이 불확실한 결과로 돌아옵니다. Giggal.ai는 이런 주소를 더 검사하고 유효 또는 무효 결과를 돌려줍니다. Proofpoint, Mimecast, Barracuda를 포함해 이름이 확인된 15개 보안 이메일 게이트웨이 뒤의 메일함에도 똑같이 합니다.',
      '요청 예시는 [Claude와 ChatGPT 안에서 이메일 검증하기](/ko/blog/verify-emails-inside-claude-and-chatgpt)를 참고하십시오. MCP 서버는 [이메일 검증 API](/ko/email-verification-api)와 같은 엔진을 씁니다.',
    ],
    faqTitle: '이메일 검증 MCP: 자주 묻는 질문',
    faq: [
      {
        q: 'Claude로 이메일 주소를 검증할 수 있습니까?',
        a: `네, MCP로 이메일 검증 도구를 연결하면 됩니다. Claude에서는 ${MCP_URL} 주소의 Giggal.ai 서버를 맞춤 커넥터로 추가하고, Claude Code에서는 claude mcp add 명령으로 추가합니다. 그다음 예를 들어 “이 주소 11개를 검증하고 어떤 주소가 반송될지 알려 줘”라고 요청하십시오. Claude가 verify_emails 도구를 호출하고 채팅에 결과를 보여 줍니다.`,
      },
      {
        q: 'ChatGPT로 이메일 주소를 검증할 수 있습니까?',
        a: '네, 맞춤 커넥터를 쓸 수 있는 ChatGPT 요금제라면 가능합니다. MCP 서버 URL로 Giggal.ai를 맞춤 플러그인으로 추가하고 OAuth로 로그인하십시오. 원격 MCP를 지원하는 클라이언트라면 Cursor, VS Code, Windsurf, Cline, Zed 등 어떤 클라이언트든 같은 서버를 쓸 수 있습니다.',
      },
      {
        q: 'AI 어시스턴트는 무엇을 할 수 있습니까?',
        a: '세 가지입니다. verify_emails는 주소 1개나 리스트를 검사합니다. get_verification_details는 상태와 사유 코드를 포함해 주소별 전체 결과를 돌려줍니다. get_credit_balance는 남은 크레딧을 보여 줍니다.',
      },
      {
        q: '캐치올 도메인 주소는 어떻게 처리합니까?',
        a: 'Giggal.ai의 다른 기능과 같습니다. 많은 검증 도구는 캐치올 도메인 주소를 위험으로 표시합니다. Giggal.ai는 이런 주소에 유효 또는 무효 결과를 돌려주며, Proofpoint, Mimecast, Barracuda 같은 이름이 확인된 15개 보안 이메일 게이트웨이 뒤의 메일함에도 그렇게 합니다.',
      },
      {
        q: 'API 키가 필요합니까?',
        a: 'Claude와 ChatGPT에는 필요 없습니다. 둘 다 OAuth로 연결하므로 Giggal.ai 계정으로 로그인하면 됩니다. Claude Code, Cursor, VS Code 같은 코드 편집기는 API 키를 쓰며, 키는 Giggal.ai 앱의 “Developer API” 탭에서 찾을 수 있습니다.',
      },
      {
        q: 'MCP로 검증하면 비용이 더 듭니까?',
        a: '아니요. 대시보드, REST API와 같은 크레딧을 씁니다. 주소 1개당 크레딧 1개이며, 캐치올 검사도 포함됩니다. 신규 계정에는 무료 크레딧 1,000개가 제공되며, 신용카드는 필요 없고 크레딧에 유효기간도 없습니다.',
      },
      {
        q: '큰 리스트도 이 방법으로 정리해야 합니까?',
        a: '아니요. MCP는 검증이 작업의 한 단계일 때 가장 잘 맞습니다. 예를 들어 아웃리치 메일을 쓰기 전에 연락처 십여 개를 검사하는 경우입니다. 주소가 수만 개라면 앱의 대량 업로드나 REST API를 쓰십시오.',
      },
    ],
    howToName: 'MCP로 Giggal.ai 이메일 검증을 Claude 또는 ChatGPT에 연결하는 방법',
    howToDescription:
      'Giggal.ai MCP 서버로 Claude, ChatGPT, Cursor, VS Code에서 캐치올 도메인 주소를 포함해 이메일 주소를 검증하는 4단계입니다.',
    setupSteps: [
      {
        name: 'Giggal.ai 계정 만들기',
        text: 'Giggal.ai에 가입합니다. 신규 계정에는 무료 검증 크레딧 1,000개가 포함되며, 신용카드는 필요 없습니다.',
      },
      {
        name: '클라이언트에 MCP 서버 추가하기',
        text: `서버 URL ${MCP_URL} 주소를 쓰십시오. Claude에서는 “Settings”의 “Connectors”에서 추가합니다. ChatGPT에서는 맞춤 플러그인으로 추가합니다. 코드 편집기는 JSON 설정 파일을 읽으며, 편집기별 설정은 이 페이지에 나와 있습니다.`,
      },
      {
        name: '로그인하거나 API 키 추가하기',
        text: 'Claude와 ChatGPT는 Giggal.ai에 로그인하고 “Allow”를 클릭하라고 요청합니다. 코드 편집기에는 앱의 “Developer API” 탭에서 만든 API 키가 필요합니다.',
      },
      {
        name: '어시스턴트에게 주소 검증 요청하기',
        text: '평소에 쓰는 말로 요청하십시오. 예를 들어 “hello@example.com을 검증하고 실제 메일함인지 알려 줘”라고 요청합니다. 어시스턴트가 verify_emails를 호출하고 결과를 보여 줍니다.',
      },
    ],
    ctaTitle: 'Giggal.ai를 AI 어시스턴트에 연결하십시오',
    ctaText:
      '무료 검증 크레딧 1,000개로 시작하며, 신용카드는 필요 없습니다. MCP URL을 Claude, ChatGPT 또는 코드 편집기에 추가하십시오.',
    ctaButton: '무료로 시작하기',
  },
}
