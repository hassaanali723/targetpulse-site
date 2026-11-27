// Korean no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27), structure from lib/i18n/altBrands/de/no2bounce.ts. The competitor's
// words (free tier, expiry, strengths) live in lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'no2bounce',
  path: '/ko/no2bounce-alternative',
  cluster: 'altNo2bounce',
  metaTitle: 'no2bounce 대안: no2bounce 요금과 캐치올 검증 | Giggal.ai',
  ogTitle: '캐치올 이메일 검증을 위한 no2bounce 대안',
  desc: 'no2bounce는 크레딧 10,000개에 US$20입니다. Giggal.ai는 캐치올 이메일과 게이트웨이 뒤의 이메일을 10,000개에 US$9.90로 검증합니다. 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없습니다.',
  h1: ['이메일당 가격이 더 낮은 ', 'no2bounce 대안', ''],
  heroP:
    'no2bounce는 종량제 크레딧을 쓰는 이메일 검증 도구이며, 크레딧에 유효기간이 없습니다. Giggal.ai도 같은 방식입니다. 차이는 가격, 무료 크레딧, 그리고 캐치올(catch-all) 주소를 검사하는 방법입니다.',
  bluf: [
    { k: '가격', v: '크레딧 10,000개는 no2bounce에서 US$20, Giggal.ai에서 US$9.90입니다.' },
    { k: '대량 구매', v: '크레딧 100만 개는 no2bounce에서 US$679, Giggal.ai에서 US$680입니다.' },
    { k: '무료 크레딧', v: 'no2bounce는 무료 크레딧 100개를 제공합니다. Giggal.ai는 1,000개를 드립니다. 두 도구 모두 신용카드가 필요 없습니다.' },
    { k: '유효기간', v: '두 도구 모두 크레딧에 유효기간이 없습니다.' },
  ],
  about: {
    heading: 'no2bounce란?',
    paragraphs: [
      'no2bounce는 이메일 검증 서비스입니다. 단일 이메일, 대량 리스트, API로 보낸 이메일을 검증합니다. 같은 크레딧으로 이메일 찾기, 도메인 검색, 이메일 점수 기능도 쓸 수 있습니다.',
      '캐치올 도메인에서는 통제된 테스트 메시지를 보내 메일함이 있는지 확인합니다. no2bounce는 정확도가 99.6%라고 주장합니다.',
      'HubSpot, Salesforce, Clay, Zapier, Google Sheets, Zoho CRM 등과 연동됩니다.',
    ],
  },
  reasons: {
    heading: '사용자가 no2bounce 대안을 찾는 이유',
    items: [
      { k: '10,000개 가격', v: 'no2bounce는 크레딧 10,000개에 US$20를 받습니다. Giggal.ai는 같은 수량에 US$9.90를 받습니다.' },
      { k: '100,000개 가격', v: '크레딧 100,000개는 no2bounce에서 US$149, Giggal.ai에서 US$76입니다.' },
      { k: '무료 테스트', v: 'no2bounce는 무료 크레딧 100개를 제공합니다. Giggal.ai는 1,000개를 드리며, 실제 샘플을 테스트하기에 충분합니다.' },
    ],
  },
  catchAllHeading: 'no2bounce와 Giggal.ai가 캐치올 주소를 검사하는 방법',
  catchAllProse:
    'no2bounce는 자체 서버로 통제된 테스트 메시지를 보내 캐치올 메일함을 확인합니다. Giggal.ai는 캐치올 주소에 결과를 돌려줍니다. 주소 1개에 크레딧 1개이며, 별도 요금은 없습니다. 또한 Proofpoint, Mimecast, Barracuda를 포함해 이름을 밝힌 보안 이메일 게이트웨이(SEG) 15종 뒤의 주소도 검사합니다.',
  pricingHeading: 'no2bounce와 Giggal.ai 요금 비교',
  pricingProse:
    'no2bounce는 크레딧 10,000개 US$20부터 5,000만 개까지 종량제 패키지를 판매합니다. 100,000개는 US$149, 100만 개는 US$679입니다. 월간 요금제는 15%, 연간 요금제는 20% 더 저렴합니다.',
  pricingExtra: [
    'Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76, 100만 개를 US$680에 판매합니다. 고를 요금제가 없습니다. 두 도구 모두 크레딧에 유효기간이 없습니다.',
  ],
  strengths: {
    heading: 'no2bounce가 잘 맞는 경우',
    intro: '다음 용도라면 no2bounce가 적합한 선택입니다.',
  },
  others: {
    heading: '다른 no2bounce 대안',
    intro: '아래 검증 도구들도 유효기간이 없는 크레딧을 판매합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Bounceless', text: '크레딧 10,000개는 US$29, 100만 개는 US$579입니다. 업무용 이메일로 가입하면 매월 무료 크레딧 1,000개를 제공합니다.' },
      { name: 'QuickEmailVerification', text: '크레딧 10,000개는 US$60입니다. 매일 무료 크레딧 100개를 제공합니다.' },
      { name: 'Scrubby', text: '종량제는 크레딧 1개에 US$0.008입니다. 검증이 어려운 주소를 위한 Deep Verification 옵션이 있습니다.' },
    ],
  },
  testHeading: '한 리스트로 no2bounce와 Giggal.ai 비교하기',
  testSteps: [
    'no2bounce로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 no2bounce가 돌려준 결과와 비교합니다.',
  ],
  ctaHeadline: '같은 작업을 이메일당 더 낮은 가격으로',
  faqs: [
    {
      q: 'no2bounce 요금은 얼마입니까?',
      a: 'no2bounce의 종량제 패키지는 크레딧 10,000개에 US$20부터입니다. 100,000개는 US$149, 100만 개는 US$679입니다. 월간 요금제는 15%, 연간 요금제는 20% 더 저렴합니다.',
    },
    {
      q: 'no2bounce는 무료입니까?',
      a: 'no2bounce는 신용카드 없이 무료 크레딧 100개를 제공합니다. 이 크레딧에는 유효기간이 없습니다. 그 뒤에는 크레딧을 구매해야 합니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.',
    },
    {
      q: 'Giggal.ai는 좋은 no2bounce 대안입니까?',
      a: '네. 두 도구 모두 유효기간이 없는 크레딧을 판매합니다. Giggal.ai는 크레딧 10,000개와 100,000개에서 더 저렴하고, 무료 크레딧을 10배 드립니다. 크레딧 100만 개에서는 두 가격이 거의 같습니다.',
    },
    {
      q: 'no2bounce 크레딧에는 유효기간이 있습니까?',
      a: '아니요. 구매한 no2bounce 크레딧은 사용할 때까지 계정에 남습니다. 구독 크레딧은 구독이 유지되는 동안 유효합니다. Giggal.ai 크레딧에는 유효기간이 없습니다.',
    },
  ],
  breadcrumb: 'no2bounce 대안',
}

export default cfg
