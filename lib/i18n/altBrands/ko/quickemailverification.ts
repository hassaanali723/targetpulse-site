// Korean QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27), structure from
// lib/i18n/altBrands/de/quickemailverification.ts. The competitor's words live in
// lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'quickemailverification',
  path: '/ko/quickemailverification-alternative',
  cluster: 'altQuickemailverification',
  metaTitle: 'QuickEmailVerification 대안과 요금 비교 | Giggal.ai',
  ogTitle: '캐치올 주소를 검사하는 QuickEmailVerification 대안',
  desc: 'QuickEmailVerification은 크레딧 10,000개에 US$60이며, 캐치올 주소를 상태로만 표시하고 확인하지 않습니다. Giggal.ai는 이메일 10,000개에 US$9.90로 캐치올 주소에도 결과를 돌려줍니다.',
  h1: ['캐치올 이메일을 검사하는 ', 'QuickEmailVerification 대안', ''],
  heroP:
    'QuickEmailVerification은 오래 운영된 이메일 검증 도구이며, 매일 무료 크레딧 100개를 제공합니다. 캐치올(catch-all) 주소는 캐치올로 표시하고, 더 검사하지 않습니다. Giggal.ai는 이 주소들에 결과를 돌려주며, 가격은 이메일 10,000개에 US$9.90입니다.',
  bluf: [
    { k: '캐치올', v: 'QuickEmailVerification은 캐치올을 상태로 표시합니다. Giggal.ai는 결과를 돌려줍니다.' },
    { k: '가격', v: '크레딧 10,000개는 QuickEmailVerification에서 US$60, Giggal.ai에서 US$9.90입니다.' },
    { k: '무료 크레딧', v: 'QuickEmailVerification은 매일 100개를 제공합니다. Giggal.ai는 1,000개를 한 번 드리며, 신용카드는 필요 없습니다.' },
    { k: '유효기간', v: '두 도구 모두 종량제 크레딧에 유효기간이 없습니다.' },
  ],
  about: {
    heading: 'QuickEmailVerification이란?',
    paragraphs: [
      'QuickEmailVerification은 quickemailverification.com의 이메일 검증 서비스입니다. REST API로 대량 리스트, 단일 이메일, 가입 양식을 검증합니다.',
      '무료 요금제에서 매일 무료 크레딧 100개를 제공합니다. Zapier와 WordPress를 포함해 50개가 넘는 마케팅 도구와 연동된다고 밝힙니다.',
      '사이트에 ISO 27001, GDPR, CCPA, HIPAA 배지를 표시합니다. 정확도는 99%라고 주장합니다.',
    ],
  },
  reasons: {
    heading: '팀이 QuickEmailVerification 대안을 찾는 이유',
    items: [
      { k: '캐치올', v: '캐치올 주소는 캐치올 상태로 돌아옵니다. 발송할지는 여전히 직접 판단해야 합니다.' },
      { k: '가격', v: '크레딧 10,000개는 US$60, 100,000개는 US$320입니다.' },
      { k: '게이트웨이', v: 'Proofpoint나 Mimecast 같은 보안 이메일 게이트웨이(SEG)를 지원한다고 밝히지 않습니다.' },
    ],
  },
  catchAllHeading: 'QuickEmailVerification과 Giggal.ai의 캐치올 이메일 처리 방식',
  catchAllProse:
    'QuickEmailVerification은 캐치올 주소에 캐치올 상태를 붙여 돌려줍니다. 메일함은 확인하지 않습니다. B2B 리스트에서는 분명한 답이 없는 주소가 많이 남을 수 있습니다. Giggal.ai는 이 주소들을 더 검사하고, 네 가지 결과 중 하나를 돌려줍니다. 주소 1개에 크레딧 1개입니다.',
  pricingHeading: 'QuickEmailVerification과 Giggal.ai 요금 비교',
  pricingProse:
    'QuickEmailVerification은 유효기간이 없는 영구 크레딧을 판매합니다. 크레딧 500개는 US$4, 10,000개는 US$60, 100,000개는 US$320, 100만 개는 US$1,350입니다. 무료 일일 요금제는 매일 크레딧 100개를 제공합니다.',
  pricingExtra: ['Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76, 100만 개를 US$680에 판매합니다. Giggal.ai 크레딧에도 유효기간이 없습니다.'],
  strengths: {
    heading: 'QuickEmailVerification이 잘 맞는 경우',
    intro: 'QuickEmailVerification에는 다음과 같은 분명한 장점이 있습니다.',
  },
  others: {
    heading: '다른 QuickEmailVerification 대안',
    intro: '아래 검증 도구들은 캐치올 주소를 서로 다른 방식으로 처리합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Bounceless', text: '크레딧 10,000개는 US$29이며, 캐치올 근거가 가격에 포함됩니다.' },
      { name: 'no2bounce', text: '크레딧 10,000개는 US$20입니다. 테스트 메시지를 보내 캐치올 메일함을 확인합니다.' },
      { name: 'Mailfloss', text: '41개 이메일 플랫폼 안에서 매일 리스트를 정리합니다. 선불 크레딧은 10,000개에 US$40입니다.' },
    ],
  },
  testHeading: 'Giggal.ai로 캐치올 행 다시 검사하기',
  testSteps: [
    'QuickEmailVerification으로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'QuickEmailVerification이 캐치올로 표시한 행을 보고 결과를 비교합니다.',
  ],
  ctaHeadline: '캐치올로 표시된 주소에 대한 결과 받기',
  faqs: [
    {
      q: 'QuickEmailVerification 요금은 얼마입니까?',
      a: '영구 크레딧은 500개에 US$4부터입니다. 10,000개는 US$60, 100,000개는 US$320, 100만 개는 US$1,350입니다. 이 크레딧에는 유효기간이 없습니다.',
    },
    {
      q: 'QuickEmailVerification은 무료입니까?',
      a: '매일 크레딧 100개를 주는 무료 요금제가 있습니다. 이 크레딧은 매일 초기화됩니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 한 번 드리며, 대량 업로드에도 쓸 수 있습니다.',
    },
    {
      q: 'QuickEmailVerification은 캐치올 이메일을 검증합니까?',
      a: '캐치올 도메인을 감지하고 캐치올 상태를 돌려줍니다. 메일함이 있는지는 확인하지 않습니다. Giggal.ai는 이 주소들에 결과를 돌려줍니다.',
    },
    {
      q: 'Giggal.ai는 좋은 QuickEmailVerification 대안입니까?',
      a: '네, 캐치올 주소가 많은 B2B 리스트라면 그렇습니다. Giggal.ai는 크레딧 10,000개에 US$9.90이며, 이 주소들에 결과를 돌려줍니다.',
    },
  ],
  breadcrumb: 'QuickEmailVerification 대안',
}

export default cfg
