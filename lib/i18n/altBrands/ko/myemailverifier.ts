// Korean MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27), structure from
// lib/i18n/altBrands/de/myemailverifier.ts. myemailverifier.com blocked our check
// on 2026-11-27, so its prices are from the August 2026 check and the page says so.
// The competitor's words live in lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'myemailverifier',
  path: '/ko/myemailverifier-alternative',
  cluster: 'altMyemailverifier',
  metaTitle: 'MyEmailVerifier 대안: MyEmailVerifier 요금과 캐치올 | Giggal.ai',
  ogTitle: 'B2B 리스트를 위한 MyEmailVerifier 대안',
  desc: 'MyEmailVerifier는 매일 무료 크레딧 100개를 제공하지만, 캐치올 주소는 상태로만 표시하고 확인하지 않습니다. Giggal.ai는 이메일 10,000개에 US$9.90로 캐치올 주소에도 결과를 돌려줍니다.',
  h1: ['캐치올 도메인이 있는 B2B 리스트를 위한 ', 'MyEmailVerifier 대안', ''],
  heroP:
    'MyEmailVerifier는 매일 무료 크레딧 100개를 제공하는 저가 이메일 검증 도구입니다. 캐치올(catch-all) 주소에는 별도 상태를 붙이고, 확인하지는 않습니다. Giggal.ai는 이 주소들에 결과를 돌려주며, 가격은 이메일 10,000개에 US$9.90입니다.',
  bluf: [
    { k: '캐치올', v: 'MyEmailVerifier는 캐치올을 상태로 표시합니다. Giggal.ai는 결과를 돌려줍니다.' },
    { k: '가격', v: '크레딧 10,000개는 MyEmailVerifier에서 US$15, Giggal.ai에서 US$9.90입니다.' },
    { k: '대량 구매', v: '크레딧 100만 개는 MyEmailVerifier에서 US$349, Giggal.ai에서 US$680입니다.' },
    { k: '무료 크레딧', v: 'MyEmailVerifier는 매일 100개를 제공합니다. Giggal.ai는 1,000개를 한 번 드리며, 신용카드는 필요 없습니다.' },
  ],
  about: {
    heading: 'MyEmailVerifier란?',
    paragraphs: [
      'MyEmailVerifier는 myemailverifier.com의 이메일 검증 서비스입니다. 대량 리스트와 단일 이메일을 검증하며, API도 있습니다.',
      '매일 무료 크레딧 100개를 제공합니다. 유료 크레딧은 1,000개에 US$4부터이며, 유효기간이 없습니다.',
      '캐치올 주소는 별도의 캐치올 상태로 돌려줍니다. 그 메일함이 있는지는 확인하지 않습니다.',
    ],
  },
  reasons: {
    heading: '사용자가 MyEmailVerifier 대안을 찾는 이유',
    items: [
      { k: '캐치올', v: '캐치올 주소는 분명한 답 없이 돌아옵니다. B2B 리스트에서는 이런 주소가 리스트의 큰 부분을 차지할 수 있습니다.' },
      { k: '게이트웨이', v: 'MyEmailVerifier는 Proofpoint, Mimecast 등 어떤 게이트웨이 뒤의 주소를 검사할 수 있는지 밝히지 않습니다.' },
    ],
  },
  catchAllHeading: 'MyEmailVerifier와 Giggal.ai의 캐치올 이메일 처리 비교',
  catchAllProse:
    '많은 회사 도메인은 모든 주소로 오는 메일을 받습니다. 그래서 기본 검사로는 실제 주소와 가짜 주소를 구분할 수 없습니다. MyEmailVerifier는 이런 주소를 캐치올로 표시하고, 판단을 사용자에게 맡깁니다. Giggal.ai는 이 주소들을 더 검사하고, 아래 네 가지 결과 중 하나를 돌려줍니다. 주소 1개에 크레딧 1개입니다.',
  pricingHeading: 'MyEmailVerifier와 Giggal.ai 요금 비교',
  pricingProse:
    'MyEmailVerifier는 유효기간이 없는 크레딧을 판매합니다. 저희가 2026년 8월에 확인한 가격은 크레딧 1,000개 US$4, 10,000개 US$15, 100,000개 US$99, 100만 개 US$349였습니다.',
  pricingExtra: [
    'Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76, 100만 개를 US$680에 판매합니다. 100만 개에서는 MyEmailVerifier가 더 저렴합니다. Giggal.ai는 캐치올 주소와 게이트웨이 뒤의 주소에도 결과를 돌려줍니다.',
  ],
  strengths: {
    heading: 'MyEmailVerifier가 잘 맞는 경우',
    intro: 'MyEmailVerifier는 일부 리스트에 좋은 선택입니다.',
  },
  others: {
    heading: '다른 MyEmailVerifier 대안',
    intro: '아래 검증 도구들도 가격이 낮거나 매일 무료 크레딧을 제공합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'QuickEmailVerification', text: '마찬가지로 매일 무료 크레딧 100개를 제공합니다. 영구 크레딧 10,000개는 US$60입니다.' },
      { name: 'Bounceless', text: '업무용 이메일로 가입하면 매월 무료 크레딧 1,000개를 제공합니다. 크레딧 10,000개는 US$29이며, 캐치올 근거가 포함됩니다.' },
      { name: 'no2bounce', text: '크레딧 10,000개는 US$20이며, 유효기간이 없습니다. 테스트 메시지를 보내 캐치올 메일함을 확인합니다.' },
    ],
  },
  testHeading: 'Giggal.ai로 캐치올 행 검사하기',
  testSteps: [
    'MyEmailVerifier로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'MyEmailVerifier가 캐치올로 표시한 행을 비교합니다.',
  ],
  ctaHeadline: '캐치올 주소에 대한 결과 받기',
  faqs: [
    {
      q: 'MyEmailVerifier 요금은 얼마입니까?',
      a: '저희가 2026년 8월에 확인한 가격은 크레딧 1,000개 US$4, 10,000개 US$15, 100,000개 US$99, 100만 개 US$349였습니다. 이 크레딧에는 유효기간이 없습니다.',
    },
    {
      q: 'MyEmailVerifier는 무료입니까?',
      a: '매일 무료 크레딧 100개를 제공합니다. 이 일일 크레딧은 체험 기간 후에 끝나지 않고 매일 다시 채워집니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 한 번 드립니다.',
    },
    {
      q: 'MyEmailVerifier는 캐치올 이메일을 검증합니까?',
      a: '캐치올 도메인을 감지하고 캐치올 상태를 돌려줍니다. 메일함은 확인하지 않습니다. Giggal.ai는 캐치올 주소에 결과를 돌려주며, 주소 1개에 크레딧 1개입니다.',
    },
    {
      q: 'Giggal.ai 크레딧에는 유효기간이 있습니까?',
      a: '아니요. Giggal.ai 크레딧에는 유효기간이 없습니다. MyEmailVerifier 크레딧에도 유효기간이 없습니다.',
    },
  ],
  breadcrumb: 'MyEmailVerifier 대안',
}

export default cfg
