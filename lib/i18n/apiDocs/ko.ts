import type { ApiDocsStrings } from './types'

// Korean API reference text, translated from lib/i18n/apiDocs/en.ts. Endpoint
// paths, HTTP methods, parameter names, JSON fields and values, header names
// and status codes stay in English. Formal polite style (합니다체), as in
// lib/i18n/ko.ts. Numbers 50,000. Particles never follow code directly; a
// Korean noun (필드, 헤더, 엔드포인트) sits in between.

export const API_DOCS_KO: ApiDocsStrings = {
  breadcrumbName: 'API 문서',
  schema: {
    headline: 'Giggal.ai API 문서',
    description:
      '이메일 주소 1개 검증, 대량 검증, 캐치올 도메인 주소와 SEG로 보호되는 주소의 정밀 검사를 위한 REST API입니다. JSON 엔드포인트와 API 키 인증을 쓰며, 성공한 검증에만 요금이 부과됩니다.',
  },
  contactPath: '/ko/contact',

  overviewBanner:
    '개요가 필요하십니까? [이메일 검증 API](/ko/email-verification-api) 또는 [가입 양식용 이메일 유효성 검사 API](/ko/email-validation-api) 페이지를 참고하십시오.',
  hero: {
    h1: '이메일 검증 API 문서',
    lead: '이메일 주소 1개 검증, 대량 검증, 캐치올 도메인 주소와 SEG로 보호되는 주소의 정밀 검사를 할 수 있습니다. 모든 엔드포인트는 JSON을 쓰고 API 키로 인증하며, 성공한 검증에만 요금이 부과됩니다.',
  },

  sidebar: {
    searchPlaceholder: '검색…',
    collapse: '접기',
    expand: '펼치기',
  },

  intro: {
    h2: '소개',
    body: 'Giggal.ai API로 이메일 주소 1개 검증, 작업 1건당 최대 50,000개의 대량 검증, 캐치올 도메인 주소와 SEG로 보호되는 주소의 정밀 검사를 할 수 있습니다. JSON을 쓰는 간단한 REST API입니다. 검증이 성공할 때마다 계정의 크레딧이 차감됩니다.',
    baseUrlLabel: '기본 URL',
    apiKeyLabel: 'API 키 발급',
    apiKeyBody:
      'API 키는 Giggal.ai 대시보드에서 만듭니다. 사이드바에서 “Developer API” 탭을 열고 “Create API Key”를 클릭하십시오. 각 키는 계정에 연결되고, 키별로 사용량이 기록되며, 언제든지 폐기할 수 있습니다.',
    apiKeyLink: '“Developer API” 탭 열기',
    envelopeLabel: '응답 구조',
    envelopeBody: '모든 응답은 같은 JSON 구조를 따릅니다.',
    quickStartLabel: '빠른 시작: cURL로 이메일 주소 1개 검증하기',
  },

  auth: {
    h2: '인증',
    body: '모든 요청에 다음 두 헤더 중 하나로 API 키를 보내십시오. 둘 다 작동합니다.',
    bearerLabel: '방법 1: Bearer 토큰',
    xApiKeyLabel: '방법 2: X-API-Key 헤더',
    note: '키가 없거나, 잘못되었거나, 폐기된 경우 HTTP 401 오류가 반환됩니다. API 키를 클라이언트 측 코드에 노출하지 마십시오. 대신 자체 백엔드를 거쳐 API를 호출하십시오.',
    idempotencyLabel: '멱등성(대량 검증과 캐치올 검증)',
    idempotencyBody:
      '`POST /v1/verify-batch` 요청과 `POST /v1/catchall` 요청에는 `Idempotency-Key` 헤더를 보내십시오. 같은 키로 다시 요청하면 처음 응답이 그대로 반환됩니다. 작업이 중복으로 만들어지지 않고, 크레딧이 두 번 차감되지도 않습니다.',
  },

  groups: {
    'single-verification': '단일 검증',
    'bulk-verification': '대량 검증',
    'catchall-verification': '캐치올 검증',
    account: '계정',
  },
  groupCount: {
    one: '이 그룹에는 엔드포인트가 {n}개 있습니다.',
    other: '이 그룹에는 엔드포인트가 {n}개 있습니다.',
  },

  endpoint: {
    authorizations: '인증',
    pathParams: '경로 및 쿼리 매개변수',
    requestBody: '요청 본문',
    required: '필수',
    responseSamples: '응답 예시',
  },

  endpoints: {
    'verify-single': {
      title: '이메일 주소 1개 검증',
      description:
        '이메일 주소 1개를 동기 방식으로 검증합니다. 크레딧 1개가 차감됩니다. 도메인이 캐치올 도메인이면 같은 요청 안에서 정밀 검사가 실행되고, 응답에 catch_all_score 필드와 catch_all_verdict 필드가 포함됩니다.',
      bodyParams: {
        email: '검증할 이메일 주소입니다.',
      },
    },
    'submit-batch': {
      title: '대량 검증 작업 제출',
      description:
        '작업 1건당 이메일 주소를 최대 50,000개까지 보낼 수 있습니다. 처리는 비동기로 진행되므로, GET /v1/jobs/:jobId 엔드포인트로 진행 상황을 확인하십시오. Idempotency-Key 헤더를 보내면 이중 과금 없이 작업 생성을 안전하게 다시 시도할 수 있습니다.',
      bodyParams: {
        emails:
          '검증할 이메일 주소의 배열입니다. 작업 1건당 최대 50,000개입니다. 중복 주소와 형식이 잘못된 주소는 서버에서 제거됩니다.',
        name: '작업에 붙이는 이름입니다(선택 사항). 대시보드에 표시됩니다.',
      },
    },
    'get-job': {
      title: '대량 검증 작업 상태 조회',
      description:
        '진행 상황을 확인할 때 호출합니다. 상태는 processing에서 completed(또는 failed)로 바뀝니다. 권장 조회 간격은 10~15초입니다. 작은 작업(이메일 50개 미만)은 보통 30초 안에 끝납니다.',
      params: {
        jobId: 'POST /v1/verify-batch 요청이 반환한 작업 ID입니다.',
      },
    },
    'get-job-results': {
      title: '대량 검증 작업 결과 조회',
      description:
        '상태가 "completed"가 되면 이메일 주소별 결과를 가져옵니다. 결과는 페이지로 나뉘어 있으므로 page 및 limit 쿼리 매개변수를 보내십시오. 결과는 48시간 동안 보관됩니다(작업의 resultsExpiresAt 필드 참고).',
      params: {
        jobId: '작업 ID입니다.',
        page: '페이지 번호입니다. 기본값은 1입니다.',
        limit: '페이지당 결과 수입니다. 기본값은 25, 최댓값은 500입니다.',
      },
    },
    'start-catchall': {
      title: '캐치올 검증 작업 시작',
      description:
        '완료된 대량 검증 작업에 대해 캐치올 도메인 정밀 검사를 시작합니다. 원래 작업에서 캐치올 도메인으로 표시된 주소만 다시 검사합니다. 주소 1개당 크레딧 1개가 부과됩니다(응답의 creditsRequired 필드 참고).',
      bodyParams: {
        jobId:
          '완료된 대량 검증 작업의 ID입니다. 그 작업의 캐치올 도메인 주소만 정밀 검사합니다.',
        name: '작업에 붙이는 이름입니다(선택 사항).',
      },
    },
    'get-catchall': {
      title: '캐치올 검증 작업 상태 조회',
      description:
        '진행 상황과 실시간 verdictCounts 값을 확인할 때 호출합니다. 캐치올 검증 작업은 주소 수에 따라 보통 몇 초에서 몇 분 안에 끝납니다.',
      params: {
        taskId: 'POST /v1/catchall 요청이 반환한 작업 ID입니다.',
      },
    },
    'catchall-results': {
      title: '캐치올 검증 작업 결과 조회',
      description:
        '이메일 주소별 결과를 페이지로 나누어 가져옵니다. 점수의 세부 내역(도메인 분류 신호와 도메인 연령)도 포함됩니다.',
      params: {
        taskId: '작업 ID입니다.',
        page: '페이지 번호입니다. 기본값은 1입니다.',
        limit: '페이지당 결과 수입니다. 기본값은 25, 최댓값은 500입니다.',
        verdict: '결과로 걸러냅니다: valid | invalid.',
      },
    },
    'catchall-download': {
      title: '캐치올 검증 결과 CSV 다운로드',
      description:
        '완료된 캐치올 검증 작업의 전체 결과를 Email, Score, Verdict 열이 있는 CSV 파일로 내려받습니다. Content-Type 값은 text/csv입니다.',
      params: {
        taskId: '작업 ID입니다.',
        verdict: '결과로 걸러냅니다: valid | invalid.',
      },
    },
    'get-credits': {
      title: '현재 크레딧 잔액 조회',
      description:
        '계정 잔액을 반환합니다. 사용 가능한 크레딧, 예약된 크레딧(진행 중인 작업을 위해 확보한 크레딧), 계정 개설 이후 누적 합계가 포함됩니다. 결과가 "unknown"인 검증의 크레딧은 자동으로 환불되며 여기에도 반영됩니다.',
    },
  },

  errors: {
    h2: '오류와 요청 한도',
    statusHeader: '상태',
    meaningHeader: '의미',
    statusRows: [
      { status: '200 OK', meaning: '요청이 성공했습니다(동기 검증, 또는 상태나 결과 조회).' },
      { status: '202 Accepted', meaning: '비동기 작업이 만들어져 대기열에 들어갔습니다.' },
      { status: '400 Bad Request', meaning: '매개변수가 없거나 잘못되었습니다(잘못된 이메일 형식, 비어 있는 emails 배열, jobId 누락).' },
      { status: '401 Unauthorized', meaning: 'API 키가 없거나, 잘못되었거나, 폐기되었습니다.' },
      { status: '402 Payment Required', meaning: '요청한 작업에 필요한 크레딧이 부족합니다.' },
      { status: '404 Not Found', meaning: '해당 작업 ID가 계정에 존재하지 않습니다.' },
      { status: '409 Conflict', meaning: '작업이 필요한 상태가 아닙니다(예: 작업이 끝나기 전에 결과를 요청한 경우).' },
      { status: '410 Gone', meaning: '작업 결과의 48시간 보관 기간이 지났습니다.' },
      { status: '429 Too Many Requests', meaning: '요청 한도를 넘었습니다. 잠시 기다린 후 다시 시도하십시오.' },
      { status: '500 / 502 / 503', meaning: '서버 또는 그 뒤의 검증 서비스를 일시적으로 사용할 수 없습니다.' },
    ],
    rateLimitsH3: '요청 한도',
    rateLimitsBody:
      '모든 응답에는 `RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset` 헤더(RFC 표기)가 들어 있어 요청 간격을 조절할 수 있습니다. `RateLimit-Reset` 값은 현재 시간 창이 초기화될 때까지 남은 초입니다.',
    categoryHeader: '구분',
    limitHeader: '한도',
    rateLimitRows: [
      { category: '모든 엔드포인트(기본값)', limit: '15분당 요청 300회' },
      { category: '작업 생성(POST /v1/verify-batch, POST /v1/catchall)', limit: '15분당 요청 30회' },
      { category: '작업 상태 조회(GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '15분당 요청 600회' },
      { category: '대량 검증 작업 1건당 최대 이메일 수', limit: '50,000' },
      { category: '작업 결과 보관 기간', limit: '48시간' },
    ],
    tierNote:
      '한도를 세 구간으로 나눈 이유는 상태 조회가 작업 생성보다 자연스럽게 더 자주 일어나기 때문입니다. 작업이 실행되는 동안 몇 초마다 상태를 조회할 수도 있습니다. `600 / 15 min` 한도(1분에 약 40회)라면 서버에 부담을 주지 않고 충분히 조회할 수 있습니다.',
    higherLimitsTitle: '더 높은 한도가 필요하십니까?',
    higherLimitsBody: '확인된 연동 파트너에게는 평소에도 한도를 높여 드리고 있습니다.',
    higherLimitsCta: '문의하기',
    h429: '429 응답 형식',
    body429: '요청 한도에 도달하면 API는 다음 본문과 함께 HTTP 429 오류를 반환합니다.',
    backoff:
      '다시 시도하기 전에 `RateLimit-Reset` 헤더 값(시간 창이 초기화될 때까지 남은 초)만큼 기다리십시오.',
  },

  cta: {
    h3: 'API를 연동할 준비가 되셨습니까?',
    body: 'API 키는 몇 초 만에 만들 수 있습니다. 무료 체험 크레딧이 포함되어 있어, 비용을 쓰기 전에 처음부터 끝까지 연동을 시험할 수 있습니다.',
    primary: 'API 키 발급받기',
    secondary: '팀에 문의하기',
  },
}
