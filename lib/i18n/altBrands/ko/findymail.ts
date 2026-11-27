// Korean Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'findymail',
  path: '/ko/findymail-alternative',
  cluster: 'altFindymail',
  metaTitle: 'Findymail 대안과 Findymail 요금 | Giggal.ai',
  ogTitle: 'Findymail 대안과 요금 비교',
  desc: 'Findymail 요금은 월 US$99부터 시작합니다. 이 페이지에서 Findymail 대안과 경쟁 서비스를 비교해 보십시오. 비교 대상에는 크레딧 10,000개에 US$9.90인 이메일 검증 도구 Giggal.ai도 포함됩니다.',
  h1: ['이미 보유한 이메일을 검증하는 ', 'Findymail 대안', ''],
  heroP:
    'Findymail은 B2B 이메일을 찾고 검증합니다. 요금제는 월 US$99부터입니다. 리스트가 이미 있고 검증만 필요하다면 Giggal.ai가 이메일 10,000개에 US$9.90로 검증합니다. 크레딧은 한 번만 구매하며, 유효기간이 없습니다.',
  bluf: [
    { k: '주요 용도', v: 'Findymail은 이메일을 찾은 뒤 검증합니다. Giggal.ai는 검증만 합니다.' },
    { k: '가격', v: 'Findymail은 월 US$99부터입니다. Giggal.ai는 크레딧 10,000개에 US$9.90이며, 한 번만 결제합니다.' },
    { k: '무료 크레딧', v: 'Findymail은 무료 크레딧 10개를 제공합니다. Giggal.ai는 신용카드 없이 1,000개를 드립니다.' },
    { k: '보장', v: 'Findymail은 반송률 5% 미만을 약속하며, 이를 넘으면 크레딧을 환불합니다.' },
  ],
  about: {
    heading: 'Findymail이란?',
    paragraphs: [
      'Findymail은 B2B 이메일 찾기 도구입니다. 이름과 회사, LinkedIn URL, Sales Navigator 검색으로 업무용 이메일을 찾습니다. 찾은 이메일은 모두 전달하기 전에 검증합니다.',
      'Chrome 확장 프로그램, Google Sheets 애드온, 대량 업로드, API, 전화번호 찾기 기능이 있습니다. Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead, Lemlist 등과 연결됩니다.',
      'Findymail은 다른 출처의 리스트를 위한 검증 크레딧도 판매합니다. 다른 도구가 위험으로 표시하는 캐치올(catch-all) 이메일도 검증한다고 밝힙니다.',
    ],
  },
  pricingFirst: true,
  pricingHeading: '2026년 Findymail 요금',
  pricingProse:
    'Findymail에는 두 종류의 요금제가 있습니다. 사용량 기반 요금제는 Individual 월 US$99, Pro US$249, Team US$399, Scale US$999입니다. 이 요금제에는 크레딧 수가 아니라 사용자 수와 파일 크기가 나와 있습니다.',
  pricingExtra: [
    '크레딧 기반 Starter 요금제는 월 US$99입니다. 찾기 크레딧 5,000개와 검증 크레딧 5,000개가 포함됩니다. 더 많은 수량은 Enterprise이며, 가격은 문의해야 합니다. 쓰지 않은 크레딧은 월 제공량의 2배까지 이월됩니다.',
    'Giggal.ai에는 월 요금제가 없습니다. 크레딧 10,000개는 US$9.90, 100,000개는 US$76, 100만 개는 US$680입니다.',
  ],
  reasons: {
    heading: '팀이 Findymail 대안을 찾는 이유',
    items: [
      { k: '검증만 필요', v: '많은 팀은 이미 리스트를 가지고 있습니다. 찾기 도구가 아니라 검증 도구만 필요합니다.' },
      { k: '수량', v: 'Starter에는 매월 검증 크레딧 5,000개가 포함됩니다. 더 많은 수량은 Enterprise 견적이 필요합니다.' },
      { k: '매월 청구', v: 'Findymail은 매월 요금을 청구합니다. Giggal.ai 크레딧은 한 번만 구매하며, 유효기간이 없습니다.' },
      { k: '적은 체험 크레딧', v: 'Findymail은 무료 크레딧 10개를 제공합니다. 실제 리스트를 테스트하기에는 너무 적습니다.' },
    ],
  },
  catchAllHeading: 'Findymail과 Giggal.ai의 캐치올 이메일 처리 비교',
  catchAllProse:
    'Findymail은 다른 도구가 위험으로 표시하는 캐치올 이메일을 검증합니다. Giggal.ai도 캐치올 주소에 결과를 돌려주며, 주소 1개에 크레딧 1개입니다. Proofpoint, Mimecast, Barracuda처럼 이름을 밝힌 보안 이메일 게이트웨이 15종 뒤의 주소도 검사합니다. Findymail은 게이트웨이 지원을 공개하지 않습니다.',
  strengths: {
    heading: 'Findymail이 잘하는 것',
    intro: '다음 기능이 필요하다면 Findymail이 더 나은 선택입니다.',
  },
  others: {
    heading: '다른 Findymail 대안과 경쟁 서비스',
    intro: '다음 도구도 B2B 이메일을 찾거나 검증합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Anymail Finder', text: '월 US$29(크레딧 400개)부터 시작하는 이메일 찾기 도구입니다. 찾은 이메일의 97% 이상이 하드 바운스되지 않는다고 약속합니다.' },
      { name: 'LeadMagic', text: '이메일 찾기, 휴대폰 번호, 회사 데이터를 제공하는 B2B 데이터 플랫폼입니다. 요금제는 공유 크레딧 5,000개에 월 US$99부터입니다.' },
      { name: 'Allegrow', text: '받은편지함 도달과 도메인 상태도 추적하는 영업팀용 검증 도구입니다. Starter는 연락처 5,000개에 월 US$99입니다.' },
    ],
  },
  testHeading: 'Findymail에서 내보낸 리스트를 Giggal.ai로 검증하기',
  testSteps: [
    'Findymail로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 같은 연락처에 대해 Findymail이 돌려준 결과와 비교합니다.',
  ],
  ctaHeadline: '구독 없이 리스트를 검증하십시오',
  faqs: [
    {
      q: 'Findymail 요금은 얼마입니까?',
      a: 'Findymail 요금제는 월 US$99부터입니다. 크레딧 기반 Starter 요금제에는 찾기 크레딧 5,000개와 검증 크레딧 5,000개가 포함됩니다. 사용량 기반 요금제는 월 US$99~US$999입니다. 더 많은 수량은 가격을 문의해야 합니다.',
    },
    {
      q: 'Findymail에 무료 요금제가 있습니까?',
      a: 'Findymail은 테스트용 무료 크레딧 10개를 주며, 신용카드는 필요 없습니다. 계속 쓸 수 있는 무료 요금제는 없습니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.',
    },
    {
      q: '어떤 Findymail 대안이 좋습니까?',
      a: '이메일을 찾으려면 Anymail Finder와 LeadMagic이 흔히 쓰입니다. 이미 보유한 리스트를 검증하려면 Giggal.ai가 크레딧 10,000개에 US$9.90이며, 구독이 없습니다.',
    },
    {
      q: 'Findymail은 이메일 검증에 적합합니까?',
      a: '네. Findymail은 찾은 이메일을 모두 검증하며, 반송률 5% 미만을 약속합니다. Starter에는 매월 검증 크레딧 5,000개가 포함되므로, 큰 리스트에는 Enterprise 요금제나 다른 검증 도구가 필요합니다.',
    },
    {
      q: 'Giggal.ai는 Findymail처럼 이메일을 찾을 수 있습니까?',
      a: '아니요. Giggal.ai는 검증만 합니다. 먼저 이메일을 찾고, 발송 전에 Giggal.ai로 리스트를 검사하십시오.',
    },
    {
      q: 'Findymail 크레딧은 만료됩니까?',
      a: '쓰지 않은 크레딧은 매월 이월되며, 월 제공량의 2배까지 쌓입니다. Giggal.ai 크레딧에는 유효기간이 없습니다.',
    },
  ],
  breadcrumb: 'Findymail 대안',
}

export default cfg
