// Korean LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'leadmagic',
  path: '/ko/leadmagic-alternative',
  cluster: 'altLeadmagic',
  metaTitle: 'LeadMagic 대안: LeadMagic 요금 비교 | Giggal.ai',
  ogTitle: '이메일 검증만을 위한 LeadMagic 대안',
  desc: 'LeadMagic 요금은 공유 크레딧 5,000개에 월 US$99부터입니다. 이 요금을 Giggal.ai와 비교해 보십시오. Giggal.ai는 크레딧 10,000개에 US$9.90인 이메일 검증 도구이며, 크레딧에 유효기간이 없습니다.',
  h1: ['이메일 검증만을 위한 ', 'LeadMagic 대안', ''],
  heroP:
    'LeadMagic은 B2B 데이터 플랫폼입니다. 이메일 유효성 검사는 그 제품 중 하나이며, 다른 제품과 하나의 월 크레딧 풀을 함께 씁니다. 이메일 리스트 검증만 필요하다면 Giggal.ai가 그 한 가지 작업을 합니다. 가격은 이메일 10,000개에 US$9.90이며, 한 번만 결제합니다.',
  bluf: [
    { k: '서비스 종류', v: 'LeadMagic은 연락처와 회사 데이터를 판매합니다. Giggal.ai는 이메일 주소만 검증합니다.' },
    { k: '가격', v: 'LeadMagic은 월 US$99부터입니다. Giggal.ai는 크레딧 10,000개에 US$9.90이며, 한 번만 결제합니다.' },
    { k: '무료 크레딧', v: 'LeadMagic은 무료 크레딧을 주지 않습니다. Giggal.ai는 신용카드 없이 1,000개를 드립니다.' },
    { k: '캐치올', v: '두 서비스 모두 캐치올(catch-all) 주소에 결과를 돌려줍니다. Giggal.ai는 이름을 밝힌 이메일 게이트웨이 15종 뒤의 주소도 검사합니다.' },
  ],
  about: {
    heading: 'LeadMagic이란?',
    paragraphs: [
      'LeadMagic은 영업팀을 위한 B2B 데이터 플랫폼입니다. 업무용 이메일 주소와 휴대폰 번호를 찾고, 연락처 기록에 회사 데이터를 추가합니다. 이직과 광고 활동도 추적합니다.',
      '이메일 유효성 검사는 LeadMagic 안의 제품 하나입니다. 결과는 유효, 무효, 알 수 없음 중 하나입니다. 확정 결과에는 크레딧 0.25개가 들고, 알 수 없음 결과는 무료입니다. 캐치올 검증은 같은 크레딧을 쓰는 별도 제품입니다.',
      '팀은 웹 앱, REST API, CLI, MCP 서버로 LeadMagic을 사용합니다. Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier, Make 같은 도구와 연결됩니다.',
    ],
  },
  pricingFirst: true,
  pricingHeading: '2026년 LeadMagic 요금',
  pricingProse:
    'LeadMagic은 월 구독입니다. Essential은 크레딧 5,000개에 US$99입니다. Growth는 20,000개에 US$249, Professional은 50,000개에 US$499, Ultimate은 100,000개에 US$849입니다. 모든 제품이 같은 크레딧을 씁니다.',
  pricingExtra: [
    '검증 1회에 크레딧 0.25개이므로, US$99 요금제로 매월 20,000회를 검사할 수 있습니다. 매월 100,000회를 검사하려면 US$499의 Professional이 필요합니다. 연간 결제 시 2개월이 무료입니다. 쓰지 않은 월 크레딧은 월 제공량의 2배까지 이월됩니다.',
    'Giggal.ai에는 구독이 없습니다. 크레딧 10,000개는 US$9.90, 100,000개는 US$76, 100만 개는 US$680입니다. 크레딧에 유효기간이 없습니다.',
  ],
  reasons: {
    heading: '팀이 LeadMagic 대안을 찾는 이유',
    items: [
      { k: '매월 청구', v: 'LeadMagic은 검증을 하지 않는 달에도 매월 요금을 청구합니다. Giggal.ai 크레딧은 한 번만 구매합니다.' },
      { k: '공유 크레딧', v: '유효성 검사와 데이터 보강이 같은 크레딧을 씁니다. 큰 리스트를 정리하면 연락처를 찾는 데 쓸 크레딧이 줄어듭니다.' },
      { k: '무료 테스트 없음', v: 'LeadMagic은 무료 크레딧을 주지 않습니다. 보유한 리스트로 테스트하기 전에 먼저 결제해야 합니다.' },
      { k: '게이트웨이', v: 'LeadMagic은 Proofpoint나 Mimecast 같은 보안 이메일 게이트웨이(SEG) 지원을 공개하지 않습니다.' },
    ],
  },
  catchAllHeading: 'LeadMagic과 Giggal.ai의 캐치올 주소 처리 비교',
  catchAllProse:
    'LeadMagic은 캐치올 도메인에서 유효, 무효, 알 수 없음 결과를 돌려주며, 알 수 없음에는 요금을 받지 않습니다. Giggal.ai도 캐치올 주소에 결과를 돌려주며, 주소 1개에 크레딧 1개입니다. 또한 Proofpoint, Mimecast, Barracuda 같은 보안 이메일 게이트웨이 15종 뒤에 있는 주소도 검사합니다. 이런 게이트웨이는 처음에 모든 주소를 받아들입니다. 그래서 기본 검사로는 실제 주소와 가짜 주소를 구별할 수 없습니다.',
  strengths: {
    heading: 'LeadMagic이 잘하는 것',
    intro: '다음 기능이 필요하다면 LeadMagic이 더 나은 선택입니다.',
  },
  others: {
    heading: '다른 LeadMagic 대안',
    intro: '찾기와 검증을 하나의 도구로 하려면 다음 도구도 있습니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Findymail', text: '검증도 하는 이메일 찾기 도구입니다. Starter 요금제는 월 US$99에 찾기 크레딧 5,000개와 검증 크레딧 5,000개입니다. 반송률 5% 미만을 약속합니다.' },
      { name: 'Anymail Finder', text: '별도의 검증 도구가 있는 이메일 찾기 도구입니다. 검증 1회에 크레딧 0.2개가 들며, 요금제는 월 US$29(크레딧 400개)부터입니다.' },
      { name: 'no2bounce', text: '유효기간이 없는 종량제 크레딧을 쓰는 검증 도구입니다. 크레딧 10,000개는 US$20입니다.' },
    ],
  },
  testHeading: 'LeadMagic이 이미 검사한 리스트로 Giggal.ai 테스트하기',
  testSteps: [
    'LeadMagic으로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 같은 주소에 대해 LeadMagic이 돌려준 결과와 비교합니다.',
  ],
  ctaHeadline: '월 요금제 없이 리스트를 검증하십시오',
  faqs: [
    {
      q: 'LeadMagic 요금은 얼마입니까?',
      a: 'LeadMagic은 크레딧 5,000개에 월 US$99부터입니다. 요금제는 크레딧 100,000개에 월 US$849까지 있습니다. 이메일 유효성 검사는 확정 결과 1건에 크레딧 0.25개이므로, US$99 요금제로 20,000회를 검사할 수 있습니다.',
    },
    {
      q: 'LeadMagic에 무료 요금제가 있습니까?',
      a: '아니요. LeadMagic은 무료 크레딧이 없다고 밝힙니다. 검색 기능에는 14일 체험이 있습니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드리며, 대량 업로드에도 쓸 수 있습니다.',
    },
    {
      q: 'Giggal.ai는 좋은 LeadMagic 대안입니까?',
      a: '이메일 검증만 필요하다면 그렇습니다. Giggal.ai는 리스트를 검증하고, 캐치올 주소에 결과를 돌려주며, 10,000개에 US$9.90입니다. 이메일이나 전화번호를 찾지는 않으므로, LeadMagic의 데이터 제품을 대신하지는 않습니다.',
    },
    {
      q: 'LeadMagic은 알 수 없음 결과에도 요금을 받습니까?',
      a: '아니요. LeadMagic은 확정 결과에 크레딧 0.25개를 받고, 알 수 없음에는 받지 않습니다. Giggal.ai도 결과가 알 수 없음이면 크레딧을 환불합니다.',
    },
    {
      q: '이메일 검증만 하려고 LeadMagic을 쓸 가치가 있습니까?',
      a: '데이터 제품을 매월 쓴다면 가치가 있습니다. 검증만 한다면 최소 월 US$99를 냅니다. Giggal.ai는 10,000회 검사를 US$9.90에 판매하며, 한 번만 결제합니다.',
    },
    {
      q: 'LeadMagic의 캐치올 테스트는 중립적입니까?',
      a: '아니요. LeadMagic은 2026년 2월에 이 테스트를 공개했고, 스스로를 1위에 올렸습니다. 판매 업체의 테스트로 보아야 합니다. Giggal.ai는 이 테스트 대상에 포함되지 않았습니다.',
    },
  ],
  breadcrumb: 'LeadMagic 대안',
}

export default cfg
