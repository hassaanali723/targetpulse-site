// Korean Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27), structure from lib/i18n/altBrands/de/bounceless.ts. The competitor's
// words live in lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'bounceless',
  path: '/ko/bounceless-alternative',
  cluster: 'altBounceless',
  metaTitle: 'Bounceless 대안: Bounceless.io 요금 비교 | Giggal.ai',
  ogTitle: '게이트웨이 뒤의 주소까지 검증하는 Bounceless 대안',
  desc: 'Bounceless는 크레딧 10,000개에 US$29입니다. Giggal.ai는 같은 수량에 US$9.90이며, 캐치올 주소와 보안 이메일 게이트웨이(SEG) 뒤의 주소를 검사합니다. Giggal.ai 크레딧에는 유효기간이 없습니다.',
  h1: ['게이트웨이 뒤의 이메일도 검사하는 ', 'Bounceless 대안', ''],
  heroP:
    'Bounceless는 1회 구매 패키지와 월 구독이 있는 저가 이메일 검증 도구입니다. 지금은 표준 검사에 캐치올(catch-all) 관련 근거를 포함합니다. Giggal.ai도 캐치올 주소에 결과를 돌려줍니다. 또한 이름을 밝힌 보안 이메일 게이트웨이(SEG) 15종 뒤의 주소도 검사합니다.',
  bluf: [
    { k: '가격', v: '크레딧 10,000개는 Bounceless에서 US$29, Giggal.ai에서 US$9.90입니다.' },
    { k: '대량 구매', v: '크레딧 100만 개는 Bounceless에서 US$579, Giggal.ai에서 US$680입니다.' },
    { k: '게이트웨이', v: 'Giggal.ai는 이메일 게이트웨이 15종의 이름을 밝히고, 그 뒤의 주소를 검사합니다. Bounceless는 게이트웨이 이름을 밝히지 않습니다.' },
    { k: '무료 크레딧', v: 'Bounceless는 업무용 이메일로 가입하면 매월 1,000개를 제공합니다. Giggal.ai는 1,000개를 한 번 드립니다.' },
  ],
  about: {
    heading: 'Bounceless란?',
    paragraphs: [
      'Bounceless는 bounceless.io의 이메일 검증 서비스입니다. 대량 리스트와 단일 이메일을 검증하며, API와 MCP 서버를 제공합니다.',
      '계정에는 발신자 상태, 받은편지함 도달, 가입 양식 검사도 포함됩니다. Bounceless는 고객 계정이 39,000개가 넘는다고 밝힙니다.',
      'Bounceless에는 아직 네이티브 앱 연동이 없습니다. Mailchimp, HubSpot, ActiveCampaign 같은 도구를 위한 CSV 및 API 가이드를 제공합니다.',
    ],
  },
  reasons: {
    heading: '사용자가 Bounceless 대안을 찾는 이유',
    items: [
      { k: '게이트웨이', v: 'Bounceless는 Proofpoint나 Mimecast 같은 보안 이메일 게이트웨이의 이름을 밝히지 않습니다.' },
      { k: '연동', v: '아직 네이티브 앱 연동이 없고, CSV와 API 가이드만 있습니다.' },
      { k: '10,000개 가격', v: '크레딧 10,000개는 US$29입니다. Giggal.ai는 같은 수량에 US$9.90를 받습니다.' },
      { k: '업무용 이메일', v: '매월 무료 크레딧을 받으려면 업무용 이메일이 필요합니다. 무료 공용 메일 주소에는 제공되지 않습니다.' },
    ],
  },
  catchAllHeading: 'Bounceless와 Giggal.ai의 캐치올 주소 처리 비교',
  catchAllProse:
    'Bounceless는 크레딧 1개짜리 검사에 캐치올 근거를 포함하며, 확인되지 않은 결과에는 과금하지 않습니다. Giggal.ai도 크레딧 1개로 캐치올 주소에 결과를 돌려주며, “알 수 없음” 결과는 환불합니다. 가장 큰 차이는 보안 이메일 게이트웨이입니다. Giggal.ai는 Proofpoint, Mimecast, Barracuda를 포함한 게이트웨이 15종 뒤의 주소를 검사합니다.',
  pricingHeading: 'Bounceless와 Giggal.ai 요금 비교',
  pricingProse:
    'Bounceless 종량제 패키지는 5,000개에 US$19, 10,000개에 US$29, 100,000개에 US$159, 100만 개에 US$579입니다. 월 구독은 크레딧 6,500개에 US$19부터입니다. 패키지와 구독 모두 크레딧에 유효기간이 없습니다.',
  pricingExtra: [
    'Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76, 100만 개를 US$680에 판매합니다. 100만 개에서는 Bounceless가 더 저렴합니다. 10,000개와 100,000개에서는 Giggal.ai가 더 저렴합니다.',
  ],
  strengths: {
    heading: 'Bounceless가 잘 맞는 경우',
    intro: 'Bounceless에는 다음과 같은 분명한 장점이 있습니다.',
  },
  others: {
    heading: '다른 Bounceless 대안',
    intro: '아래 검증 도구들은 가격이 Bounceless와 비슷합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'no2bounce', text: '크레딧 10,000개는 US$20, 100만 개는 US$679입니다. 크레딧에 유효기간이 없습니다.' },
      { name: 'QuickEmailVerification', text: '매일 무료 크레딧 100개를 제공합니다. 영구 크레딧 10,000개는 US$60입니다.' },
      { name: 'Mailfloss', text: '41개 이메일 플랫폼에 연결해 매일 무효 주소를 제거합니다. 선불 크레딧 10,000개는 US$40입니다.' },
    ],
  },
  testHeading: '한 리스트를 Bounceless와 Giggal.ai로 검사하기',
  testSteps: [
    'Bounceless로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 Bounceless가 돌려준 근거와 비교합니다.',
  ],
  ctaHeadline: '캐치올 이메일과 게이트웨이 이메일을 주소당 크레딧 1개로',
  faqs: [
    {
      q: 'Bounceless 요금은 얼마입니까?',
      a: 'Bounceless 종량제 패키지는 크레딧 5,000개에 US$19부터입니다. 10,000개는 US$29, 100,000개는 US$159, 100만 개는 US$579입니다. 월 구독은 크레딧 6,500개에 US$19부터입니다.',
    },
    {
      q: 'Bounceless는 무료입니까?',
      a: 'Bounceless는 업무용 이메일로 가입하면 매월 무료 크레딧 1,000개를 제공합니다. 신용카드는 필요 없습니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 한 번 드립니다.',
    },
    {
      q: 'Bounceless는 캐치올 이메일을 검증합니까?',
      a: '네. Bounceless는 크레딧 1개짜리 표준 검사에 캐치올 근거를 추가 요금 없이 포함합니다. 확인되지 않은 결과에는 과금하지 않습니다.',
    },
    {
      q: 'Giggal.ai는 좋은 Bounceless 대안입니까?',
      a: '네, 리스트에 회사 도메인이 많다면 그렇습니다. Giggal.ai는 이름을 밝힌 보안 이메일 게이트웨이 15종 뒤의 주소를 검사하며, 크레딧 10,000개에 US$9.90입니다.',
    },
  ],
  breadcrumb: 'Bounceless 대안',
}

export default cfg
