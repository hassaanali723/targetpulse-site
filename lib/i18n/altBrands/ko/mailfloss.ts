// Korean Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27), structure from lib/i18n/altBrands/de/mailfloss.ts. The competitor's
// words live in lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'mailfloss',
  path: '/ko/mailfloss-alternative',
  cluster: 'altMailfloss',
  metaTitle: 'Mailfloss 대안: Mailfloss 요금과 캐치올 검증 | Giggal.ai',
  ogTitle: '캐치올 이메일을 검사하는 Mailfloss 대안',
  desc: 'Mailfloss는 이메일 마케팅 플랫폼에 연결해 리스트를 매일 정리하지만, 캐치올 이메일은 표시만 하고 확인하지 않습니다. Giggal.ai는 크레딧 10,000개에 US$9.90로 이 주소들에 결과를 돌려줍니다.',
  h1: ['일회성 리스트 정리를 위한 ', 'Mailfloss 대안', ''],
  heroP:
    'Mailfloss는 이메일 마케팅 플랫폼에 연결해 매일 리스트를 정리합니다. 캐치올(catch-all) 주소는 표시하지만, 확인하지는 않습니다. Giggal.ai는 업로드한 리스트를 검증하고, 캐치올 주소에 결과를 돌려줍니다. 가격은 이메일 10,000개에 US$9.90입니다.',
  bluf: [
    { k: '작동 방식', v: 'Mailfloss는 이메일 플랫폼 안에서 리스트를 정리합니다. Giggal.ai는 업로드하거나 API로 보낸 리스트를 검사합니다.' },
    { k: '캐치올', v: 'Mailfloss는 캐치올 주소를 표시합니다. Giggal.ai는 이 주소들에 결과를 돌려줍니다.' },
    { k: '가격', v: 'Mailfloss 선불 크레딧은 10,000개에 US$40입니다. Giggal.ai는 US$9.90입니다.' },
    { k: '무료 사용', v: 'Mailfloss는 매월 무료 검증 500회를 제공합니다. Giggal.ai는 1,000개를 한 번 드리며, 신용카드는 필요 없습니다.' },
  ],
  about: {
    heading: 'Mailfloss란?',
    paragraphs: [
      'Mailfloss는 이메일 리스트 정리 서비스입니다. Mailchimp, Klaviyo, HubSpot, ActiveCampaign 등 41개 이메일 플랫폼에 연결됩니다. 그런 다음 매일 리스트에서 무효 주소를 제거합니다.',
      '이메일 주소의 흔한 오타도 고쳐 줍니다. 실시간 API, 웹훅, 양식 위젯이 있습니다.',
      'Mailfloss는 월 구독과 선불 크레딧을 판매합니다. 선불 크레딧에는 유효기간이 없습니다.',
    ],
  },
  reasons: {
    heading: '사용자가 Mailfloss 대안을 찾는 이유',
    items: [
      { k: '캐치올', v: 'Mailfloss는 캐치올 주소를 표시합니다. 메일함이 있는지는 확인하지 않습니다.' },
      { k: '체험에 카드 필요', v: '구독의 7일 체험에는 신용카드가 필요합니다.' },
      { k: '플랫폼 수 제한', v: 'Lite는 이메일 플랫폼 1개, Business는 10개에 연결됩니다.' },
      { k: '가격', v: '선불 크레딧은 10,000개에 US$40, 100,000개에 US$300입니다.' },
    ],
  },
  catchAllHeading: 'Mailfloss와 Giggal.ai의 캐치올 이메일 처리 방식',
  catchAllProse:
    'Mailfloss는 캐치올 주소를 표시하고, 판단을 사용자에게 맡깁니다. Giggal.ai는 이 주소들을 더 검사하고, 네 가지 결과 중 하나를 돌려줍니다. 주소 1개에 크레딧 1개입니다. 이름을 밝힌 보안 이메일 게이트웨이(SEG) 15종 뒤의 주소도 검사합니다.',
  pricingHeading: 'Mailfloss와 Giggal.ai 요금 비교',
  pricingProse:
    'Mailfloss 구독은 Lite가 크레딧 10,000개에 월 US$29, Business가 25,000개에 US$59, Pro가 125,000개에 US$209입니다. 선불 크레딧은 1,000개에 US$8, 10,000개에 US$40, 100,000개에 US$300, 100만 개에 US$1,200입니다.',
  pricingExtra: [
    '모든 Mailfloss 계정은 매월 무료 검증 500회도 받습니다. Giggal.ai는 구독 없이 크레딧 10,000개를 US$9.90, 100만 개를 US$680에 판매합니다.',
  ],
  strengths: {
    heading: 'Mailfloss가 잘 맞는 경우',
    intro: 'Mailfloss는 Giggal.ai가 하지 않는 몇 가지 일을 합니다.',
  },
  others: {
    heading: '다른 Mailfloss 대안',
    intro: '아래 검증 도구들도 마케팅 리스트를 정리합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'QuickEmailVerification', text: '50개가 넘는 마케팅 도구와 연동됩니다. 영구 크레딧 10,000개는 US$60입니다.' },
      { name: 'Bounceless', text: '크레딧 10,000개는 US$29입니다. 업무용 이메일로 가입하면 매월 무료 크레딧 1,000개를 제공합니다.' },
      { name: 'no2bounce', text: 'HubSpot, Klaviyo, Zoho와 연동됩니다. 크레딧 10,000개는 US$20이며, 유효기간이 없습니다.' },
    ],
  },
  testHeading: '이메일 플랫폼에서 내보낸 리스트로 Giggal.ai 테스트하기',
  testSteps: [
    'Mailfloss로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 Mailfloss가 표시한 내용과 비교합니다.',
  ],
  ctaHeadline: '캐치올 주소에 표시가 아닌 결과 받기',
  faqs: [
    {
      q: 'Mailfloss 요금은 얼마입니까?',
      a: '구독은 크레딧 10,000개에 월 US$29부터입니다. 선불 크레딧은 10,000개에 US$40, 100만 개에 US$1,200입니다. 선불 크레딧에는 유효기간이 없습니다.',
    },
    {
      q: 'Mailfloss에 무료 요금제가 있습니까?',
      a: '네. 모든 계정이 매월 무료 검증 500회를 받습니다. 구독에는 7일 체험도 있으며, 체험에는 신용카드가 필요합니다.',
    },
    {
      q: 'Mailfloss는 캐치올 이메일을 검증합니까?',
      a: '표시만 합니다. 메일함이 있는지는 확인하지 않습니다. Giggal.ai는 캐치올 주소에 결과를 돌려주며, 주소 1개에 크레딧 1개입니다.',
    },
    {
      q: 'Giggal.ai도 Mailfloss처럼 이메일 플랫폼의 리스트를 정리합니까?',
      a: '아니요. Giggal.ai는 업로드, API, Zapier, n8n, HubSpot으로 작동합니다. 이메일 플랫폼 안에서 매일 정리 작업을 실행하지는 않습니다.',
    },
  ],
  breadcrumb: 'Mailfloss 대안',
}

export default cfg
