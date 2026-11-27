// Korean Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27), structure from lib/i18n/altBrands/de/scrubby.ts. Scrubby's product
// names "Quick Verification" and "Deep Verification" stay in English. The
// competitor's words live in lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'scrubby',
  path: '/ko/scrubby-alternative',
  cluster: 'altScrubby',
  metaTitle: 'Scrubby 대안: Scrubby.io 요금 비교 | Giggal.ai',
  ogTitle: '캐치올 이메일과 게이트웨이 이메일을 위한 Scrubby 대안',
  desc: 'Scrubby는 크레딧 1개에 US$0.008이며, Deep Verification은 최대 72시간이 걸립니다. Giggal.ai는 캐치올 이메일과 게이트웨이 뒤의 이메일을 10,000개에 US$9.90로 검사합니다.',
  h1: ['이메일 10,000개에 US$9.90인 ', 'Scrubby 대안', ''],
  heroP:
    'Scrubby는 캐치올(catch-all) 이메일과 게이트웨이로 보호되는 이메일을 검증합니다. Giggal.ai가 중점을 두는 것과 같은 어려운 주소입니다. 차이는 가격과 각 검사의 방식입니다. Scrubby는 크레딧 1개에 US$0.008를 받습니다. Giggal.ai는 10,000개에 US$9.90를 받습니다.',
  bluf: [
    { k: '가격', v: '크레딧 10,000개는 Scrubby에서 US$80, Giggal.ai에서 US$9.90입니다.' },
    { k: '정밀 검사', v: 'Scrubby Deep Verification은 크레딧 3개가 들고, 실제 이메일을 보냅니다. 최종 결과까지 최대 72시간이 걸립니다.' },
    { k: '무료 크레딧', v: 'Scrubby는 무료 크레딧 200개를 제공합니다. Giggal.ai는 1,000개를 드립니다. 두 도구 모두 신용카드가 필요 없습니다.' },
    { k: '환불', v: 'Scrubby는 모든 구매가 최종이라고 밝힙니다. Giggal.ai는 “알 수 없음” 결과에 크레딧을 환불합니다.' },
  ],
  about: {
    heading: 'Scrubby란?',
    paragraphs: [
      'Scrubby는 scrubby.io의 이메일 검증 도구입니다. 다른 검증 도구가 확인하지 못하는 캐치올 주소와 위험 주소에 중점을 둡니다.',
      '검사는 두 가지입니다. Quick Verification은 크레딧 1개가 들며, 일반 도메인, 캐치올 도메인, SEG로 보호되는 도메인을 다룹니다. Deep Verification은 크레딧 3개가 듭니다. Scrubby는 각 주소로 실제 이메일을 보내고, 72시간 안에 최종 결과를 줍니다.',
      'Scrubby는 Clay, Instantly, Smartlead, Apollo, HubSpot 같은 도구와 연동됩니다.',
    ],
  },
  reasons: {
    heading: '팀이 Scrubby 대안을 찾는 이유',
    items: [
      { k: '가격', v: '종량제는 크레딧 1개에 US$0.008입니다. 검사 10,000건은 US$80, 100,000건은 US$800입니다.' },
      { k: '대기 시간', v: 'Deep Verification 결과는 최대 72시간이 걸립니다.' },
      { k: '실제 이메일 발송', v: 'Deep Verification은 리스트의 각 주소로 실제 이메일을 보냅니다.' },
      { k: '환불 없음', v: 'Scrubby는 모든 구매가 최종이라고 밝힙니다.' },
    ],
  },
  catchAllHeading: 'Scrubby와 Giggal.ai의 캐치올 및 게이트웨이 이메일 처리 비교',
  catchAllProse:
    'Scrubby와 Giggal.ai는 둘 다 캐치올 주소와 게이트웨이로 보호되는 주소에 결과를 돌려줍니다. Giggal.ai는 모든 주소에 크레딧 1개를 받으며, 더 깊은 단계는 없습니다. Proofpoint, Mimecast, Barracuda를 포함한 게이트웨이 15종의 이름을 밝히고, 그 뒤의 주소를 검사합니다. 답을 얻지 못하면 크레딧이 환불됩니다.',
  pricingHeading: 'Scrubby와 Giggal.ai 요금 비교',
  pricingProse:
    'Scrubby 종량제는 크레딧 1개에 US$0.008이므로, 크레딧 10,000개는 US$80입니다. 월 요금제는 Starter가 크레딧 6,000개에 US$47, Growth가 15,000개에 US$97, Pro가 100,000개에 US$497입니다. 종량제 크레딧에는 유효기간이 없고, 요금제 크레딧은 이월됩니다.',
  pricingExtra: [
    'Deep Verification 1회에는 크레딧 3개가 듭니다. 그래서 정밀 검사 10,000건에는 크레딧 30,000개가 듭니다. Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76에 판매합니다.',
  ],
  strengths: {
    heading: 'Scrubby가 잘 맞는 경우',
    intro: 'Scrubby에는 다음과 같이 알아 둘 만한 장점이 있습니다.',
  },
  others: {
    heading: '다른 Scrubby 대안',
    intro: '아래 도구들도 캐치올 주소에 결과를 돌려줍니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'no2bounce', text: '테스트 메시지를 보내 캐치올 메일함을 확인합니다. 크레딧 10,000개는 US$20이며, 유효기간이 없습니다.' },
      { name: 'Listmint', text: '캐치올 주소를 사람이 직접 검사합니다. Starter는 월 US$99에 표준 크레딧 20,000개와 캐치올 크레딧 5,000개입니다.' },
      { name: 'Allegrow', text: '캐치올 연락처에 유효 또는 무효 결과를 돌려주며, Proofpoint와 Mimecast의 이름을 밝힙니다. Starter는 월 US$99입니다.' },
    ],
  },
  testHeading: '보유한 캐치올 주소로 Giggal.ai 테스트하기',
  testSteps: [
    'Scrubby로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '같은 캐치올 주소에 대한 결과를 Scrubby의 결과와 비교합니다.',
  ],
  ctaHeadline: '검증하기 어려운 주소도 10,000개에 US$9.90로 검사하십시오',
  faqs: [
    {
      q: 'Scrubby 요금은 얼마입니까?',
      a: 'Scrubby 종량제는 크레딧 1개에 US$0.008, 즉 10,000개에 US$80입니다. 월 요금제는 크레딧 6,000개에 US$47부터입니다. Deep Verification은 이메일 1개에 크레딧 3개를 씁니다.',
    },
    {
      q: 'Scrubby Deep Verification이란 무엇입니까?',
      a: 'Scrubby가 어려운 주소를 위해 제공하는 더 느린 검사입니다. 크레딧 3개가 들고, 각 주소로 실제 이메일을 보냅니다. 최종 결과는 72시간 안에 나옵니다.',
    },
    {
      q: 'Scrubby에 무료 체험이 있습니까?',
      a: '네. Scrubby는 신용카드 없이 무료 크레딧 200개를 제공합니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.',
    },
    {
      q: 'Giggal.ai는 좋은 Scrubby 대안입니까?',
      a: '네. 두 도구 모두 캐치올 주소와 게이트웨이 뒤의 주소에 결과를 돌려줍니다. Giggal.ai는 크레딧 10,000개에 US$9.90이며, “알 수 없음” 결과는 환불합니다.',
    },
  ],
  breadcrumb: 'Scrubby 대안',
}

export default cfg
