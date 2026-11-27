// Korean Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths, estimate note) from
// lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'allegrow',
  path: '/ko/allegrow-alternative',
  cluster: 'altAllegrow',
  metaTitle: 'Allegrow 대안: Allegrow 요금 비교 | Giggal.ai',
  ogTitle: '이메일 1개 단위로 결제하는 Allegrow 대안',
  desc: 'Allegrow 요금은 연락처 5,000개에 월 US$99부터 시작합니다. Giggal.ai는 캐치올 이메일과 게이트웨이 뒤에 있는 이메일을 10,000개에 US$9.90로 검증합니다. 크레딧에는 유효기간이 없습니다.',
  h1: ['이메일 1개 단위로 결제하는 ', 'Allegrow 대안', ''],
  heroP:
    'Allegrow는 영업팀을 위한 이메일 검증 및 이메일 도달률 플랫폼입니다. 연락처 5,000개에 US$99부터인 월 요금제로 판매됩니다. Giggal.ai는 1회 구매 크레딧으로 이메일을 검증합니다. 크레딧 10,000개는 US$9.90이며, 유효기간이 없습니다.',
  bluf: [
    { k: '결제 방식', v: 'Allegrow는 월 요금제입니다. Giggal.ai 크레딧은 한 번만 구매합니다.' },
    { k: '가격', v: 'Allegrow Starter는 연락처 5,000개에 월 US$99입니다. Giggal.ai는 10,000개에 US$9.90입니다.' },
    { k: '캐치올', v: '두 서비스 모두 캐치올(catch-all) 주소에 유효 또는 무효 결과를 돌려줍니다. 둘 다 Proofpoint와 Mimecast를 명시합니다.' },
    { k: '추가 도구', v: 'Allegrow는 받은편지함 도달과 도메인 상태도 모니터링합니다. Giggal.ai에는 이 기능이 없습니다.' },
  ],
  about: {
    heading: 'Allegrow란?',
    paragraphs: [
      'Allegrow는 영업팀과 매출팀을 위한 B2B 이메일 검증 플랫폼입니다. 캐치올 주소를 포함한 연락처를 검증하고, 유효 또는 무효 결과를 돌려줍니다. Allegrow는 캐치올 주소를 검증하려고 이메일을 보내는 일이 없다고 밝힙니다.',
      '연결된 메일함의 발신자 평판과 받은편지함 도달도 모니터링합니다. Outreach, Salesloft, HubSpot, Apollo, ZoomInfo, Clay와 연동됩니다.',
      'Allegrow는 SOC 2 보고서를 제공하며, 최상위 요금제에서는 SSO를 추가 옵션으로 제공합니다.',
    ],
  },
  pricingFirst: true,
  pricingHeading: '2026년 Allegrow 요금',
  pricingProse:
    'Allegrow Starter는 연락처 5,000개에 월 US$99입니다. 추가 연락처는 1,000개당 US$8입니다. Scale Plus Unlimited는 연간 결제 시 월 US$1,340이며, 크레딧 한도가 없습니다. API 요금제는 가격을 문의해야 합니다.',
  pricingExtra: [
    '따라서 Starter로 매월 연락처 10,000개를 검증하면 US$139가 됩니다. 이 금액은 공개된 요금으로 저희가 계산한 것이며, Allegrow가 제공하는 요금제가 아닙니다. Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76에 판매하며, 한 번만 결제합니다.',
  ],
  reasons: {
    heading: '팀이 Allegrow 대안을 찾는 이유',
    items: [
      { k: '월 비용', v: 'Starter는 매월 US$99입니다. 1년에 몇 번만 검증하는 팀은 쓰지 않는 달에도 요금을 냅니다.' },
      { k: '연동', v: 'HubSpot, Outreach, Salesloft 기본 연동은 Scale Plus에 있습니다. Starter는 API 키로 Clay에 연결됩니다.' },
      { k: '체험 제한', v: '14일 체험은 주소 1,000개까지이며, 연동과 API 접근은 포함되지 않습니다.' },
    ],
  },
  catchAllHeading: 'Allegrow와 Giggal.ai의 캐치올 및 게이트웨이 이메일 처리 비교',
  catchAllProse:
    'Allegrow와 Giggal.ai는 모두 캐치올 주소에 유효 또는 무효 결과를 돌려줍니다. 둘 다 주소 검사가 가능한 게이트웨이로 Proofpoint와 Mimecast를 명시합니다. 주된 차이는 결제 방식입니다. Allegrow는 월 연락처 제공량을 씁니다. Giggal.ai는 유효기간이 없는 크레딧에서 주소 1개에 크레딧 1개를 차감합니다.',
  strengths: {
    heading: 'Allegrow가 잘하는 것',
    intro: 'Allegrow는 검증 외의 기능도 제공합니다. 다음이 필요하다면 Allegrow가 더 나은 선택입니다.',
  },
  others: {
    heading: '다른 Allegrow 대안',
    intro: '다음 도구도 캐치올 주소를 검증합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Scrubby', text: '캐치올 도메인과 게이트웨이로 보호되는 도메인을 검사합니다. 종량제는 크레딧 1개에 US$0.008이며, 월 요금제는 US$47부터입니다.' },
      { name: 'Listmint', text: '별도의 크레딧 풀로 캐치올 주소를 검사합니다. Starter는 월 US$99에 표준 크레딧 20,000개와 캐치올 크레딧 5,000개입니다.' },
      { name: 'Bounceless', text: '크레딧 1개짜리 검사에 캐치올 근거를 포함하며, 받은편지함 도달 도구가 있습니다. 크레딧 10,000개는 US$29입니다.' },
    ],
  },
  testHeading: 'Allegrow 결과와 비교해 Giggal.ai 테스트하기',
  testSteps: [
    'Allegrow로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '같은 연락처에 대한 캐치올 결과를 Allegrow의 결과와 비교합니다.',
  ],
  ctaHeadline: '검증하기 어려운 주소도 이메일 1개 단위 가격으로 검증하십시오',
  faqs: [
    {
      q: 'Allegrow 요금은 얼마입니까?',
      a: 'Allegrow Starter는 연락처 5,000개에 월 US$99이며, 추가 연락처는 1,000개당 US$8입니다. Scale Plus Unlimited는 연간 결제 시 월 US$1,340입니다. API 요금제는 가격을 문의해야 합니다.',
    },
    {
      q: 'Allegrow에 무료 체험이 있습니까?',
      a: '네. Allegrow에는 주소 1,000개까지 쓸 수 있는 14일 체험이 있으며, 신용카드는 필요 없습니다. 연동과 API 접근은 체험에 포함되지 않습니다.',
    },
    {
      q: 'Giggal.ai는 좋은 Allegrow 대안입니까?',
      a: '검증만 필요하다면 그렇습니다. Giggal.ai는 캐치올 주소와 게이트웨이 뒤의 주소에 결과를 돌려주며, 10,000개에 US$9.90입니다. 받은편지함 도달이나 발신자 평판은 모니터링하지 않습니다.',
    },
    {
      q: 'Allegrow는 캐치올 주소를 검증하려고 이메일을 보냅니까?',
      a: '아니요. Allegrow는 캐치올 주소를 검증하려고 이메일을 보내는 일이 없다고 밝힙니다.',
    },
    {
      q: 'Allegrow에 무제한 요금제가 있습니까?',
      a: '네. Scale Plus Unlimited는 연간 결제 시 월 US$1,340이며, 연동이나 CSV를 통한 검증이 무제한입니다. Giggal.ai에는 무제한 요금제가 없습니다.',
    },
  ],
  breadcrumb: 'Allegrow 대안',
}

export default cfg
