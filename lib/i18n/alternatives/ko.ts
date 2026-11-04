// Korean alternative pages (plans/15): translations of the English pages,
// same sections and FAQ. The searched form "<브랜드> 대안" leads the title and
// H1. Numbers 10,000, prices US$9.90 (currency stays USD). Formal polite style
// (합니다체). Catch-all is 캐치올(catch-all) at first mention, then 캐치올 도메인
// (SEO-Plan/i18n-batch4-ko-terminology.md).
// Only the three clusters registered for ko: zerobounce, neverbounce, snovio.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const zerobounce: AltL10nConfig = {
  locale: 'ko',
  slug: 'zerobounce',
  path: '/ko/zerobounce-alternative',
  cluster: 'altZerobounce',
  metaTitle: 'ZeroBounce 대안: 요금과 캐치올 도메인 검증 | Giggal.ai',
  ogTitle: '캐치올 도메인이 있는 리스트를 위한 ZeroBounce 대안',
  desc: 'ZeroBounce는 10,000개에 US$129이며, 캐치올 도메인 주소에는 결과 대신 1~10점의 점수를 매깁니다. Giggal.ai는 US$9.90에 유효인지 무효인지 확인합니다. 무료 크레딧 1,000개, 신용카드 불필요.',
  h1: ['캐치올 도메인 주소까지 확인하는 ', 'ZeroBounce 대안', ''],
  heroP: '같은 작업을 약 10분의 1 가격으로 할 수 있습니다. ZeroBounce가 1~10점의 점수만 돌려주는 캐치올 도메인 주소에도 Giggal.ai는 유효인지 무효인지 분명한 결과를 돌려줍니다. 가격은 크레딧 10,000개에 US$9.90이고, ZeroBounce는 US$129입니다.',
  bluf: [
    { k: '가격', v: '크레딧 10,000개에 US$9.90, ZeroBounce는 US$129입니다. 이 가격 차이는 모든 수량 구간에서 유지됩니다.' },
    { k: '캐치올 도메인', v: 'Giggal.ai는 유효 또는 무효 결과를 돌려줍니다. ZeroBounce가 돌려주는 것은 1~10점의 점수이며, 실제 결과가 아닙니다.' },
    { k: '최소 구매량', v: 'Giggal.ai에는 최소 구매량이 없으며, 무료 크레딧 1,000개로 시작할 수 있습니다. ZeroBounce는 최소 크레딧 2,000개(US$39)를 구매해야 합니다.' },
    { k: '무료 체험', v: '대량 업로드에도 쓸 수 있는 무료 크레딧 1,000개를 드립니다. 신용카드는 필요 없습니다.' },
  ],
  pricingFirst: true,
  pricingHeading: 'ZeroBounce와 Giggal.ai 요금 비교',
  pricingProse: 'ZeroBounce에는 최소 크레딧 2,000개 구매 조건과 월 US$99 구독이 있습니다. Giggal.ai에는 둘 다 없습니다. 크레딧을 구매해 기한 없이 보관할 수 있으며, 무료 크레딧 1,000개로 시작할 수 있습니다.',
  pricingProseAfterLadder: true,
  catchAllHeading: 'Giggal.ai가 캐치올 도메인 주소를 검증하는 방법',
  catchAllProse: '캐치올(catch-all) 도메인에서는 서버가 모든 주소로 오는 메일을 받습니다. ZeroBounce는 이런 주소를 AI Scoring으로 1~10점까지 점수만 매기고, 존재 여부는 확인하지 않습니다. Giggal.ai는 이 주소들을 별도의 검사 경로로 보내고, 네 가지 결과 중 하나를 돌려줍니다.',
  catchAllProse2: 'LeadMagic의 테스트에서 ZeroBounce가 결과를 낸 캐치올 도메인 주소는 12%였습니다.',
  benchmark: true,
  featureNote: 'ZeroBounce의 정확도 99.6%는 ZeroBounce 자체의 주장이며, 측정된 수치가 아닙니다.',
  testSteps: [
    'ZeroBounce로 보내려던 리스트를 내보냅니다.',
    '그 리스트를 여기에 업로드하고 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'Catch-All로 표시된 행을 비교합니다. 실제 결과가 나온 주소의 수를 세어 보십시오.',
  ],
  faqs: [
    { q: '두 서비스의 가격은 얼마나 다릅니까?', a: '크레딧 10,000개에 Giggal.ai는 US$9.90, ZeroBounce는 US$129입니다. 100,000개에서는 US$76 대 US$649, 100만 개에서는 US$680 대 US$3,199입니다. 두 회사의 가격을 확인한 날짜는 표 옆에 적혀 있습니다.' },
    { q: 'ZeroBounce에 최소 구매량이 있습니까?', a: '네. 크레딧 2,000개에 US$39입니다. Giggal.ai에는 최소 구매량이 없으며, 신용카드 없이 무료 크레딧 1,000개로 시작할 수 있습니다. 두 도구 모두 크레딧에 유효기간이 없습니다.' },
    { q: 'ZeroBounce가 점수만 매기는 캐치올 도메인 주소를 Giggal.ai는 어떻게 처리합니까?', a: 'Catch-All 태그만 붙이는 대신, 메일함이 실제로 있는지, 즉 전송 가능인지 전송 불가인지 알려 드립니다. Giggal.ai의 모든 검증은 1건에 크레딧 1개로 일정합니다.' },
    { q: '캐치올 도메인 주소에 대한 Giggal.ai의 정확도는 어느 정도입니까?', a: 'Giggal.ai의 검증 정확도는 98.5%입니다. 대부분의 도구가 표시만 하고 확인하지 않는 캐치올 도메인 주소와 SEG로 보호되는 주소에도 전송 가능 또는 전송 불가의 실제 결과를 돌려줍니다.' },
    { q: '결제하기 전에 Giggal.ai를 써 볼 수 있습니까?', a: '네. 대량 업로드에 쓸 수 있는 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없습니다. ZeroBounce로 정리한 리스트를 다시 검사하고 Catch-All 행을 비교해 보십시오.' },
  ],
  ctaHeadline: 'ZeroBounce가 Catch-All로 표시한 주소를 Giggal.ai로 확인하십시오',
  breadcrumb: 'ZeroBounce 대안',
}

const neverbounce: AltL10nConfig = {
  locale: 'ko',
  slug: 'neverbounce',
  path: '/ko/neverbounce-alternative',
  cluster: 'altNeverbounce',
  metaTitle: 'NeverBounce 대안: 요금과 정확도 비교 | Giggal.ai',
  ogTitle: '캐치올 도메인 주소까지 확인하는 NeverBounce 대안',
  desc: 'NeverBounce는 10,000개에 US$50이며, 한 테스트에서 캐치올 도메인 주소의 8%만 결과를 냈습니다. Giggal.ai는 US$9.90에 이 주소들을 확인합니다. 무료 크레딧 1,000개, 신용카드 불필요.',
  h1: ['캐치올 도메인 주소까지 확인하는 ', 'NeverBounce 대안', ''],
  heroP: 'NeverBounce가 결과를 내는 캐치올 도메인 주소는 일부뿐이며, LeadMagic의 테스트에서는 8%였습니다. 가격은 10,000개에 US$50입니다. Giggal.ai는 이 주소들이 유효인지 무효인지 확인하며, 가격은 US$9.90입니다.',
  bluf: [
    { k: '가격', v: '10,000개에 NeverBounce는 US$50, Giggal.ai는 US$9.90입니다. 100만 개에서는 NeverBounce가 US$2,500, Giggal.ai가 US$680입니다.' },
    { k: '캐치올 도메인', v: 'Giggal.ai는 유효 또는 무효 결과를 돌려줍니다. NeverBounce가 결과를 내는 주소는 일부뿐입니다(LeadMagic 테스트에서 8%).' },
    { k: '크레딧', v: 'Giggal.ai의 크레딧에는 유효기간이 없습니다. NeverBounce의 크레딧은 구매 후 12개월이 지나면 만료됩니다.' },
    { k: '무료 체험', v: '대량 업로드에도 쓸 수 있는 무료 크레딧 1,000개를 드립니다. 신용카드는 필요 없습니다.' },
  ],
  catchAllHeading: 'Giggal.ai가 캐치올 도메인 주소를 검증하는 방법',
  catchAllProse: 'NeverBounce는 캐치올(catch-all) 도메인 주소를 Accept-All로 표시하며, 결과를 내는 주소는 일부뿐입니다. LeadMagic의 테스트에서는 8%였습니다. Giggal.ai는 이 주소들을 별도의 검사 경로로 보내고, 네 가지 결과 중 하나를 돌려줍니다.',
  benchmark: true,
  pricingHeading: 'NeverBounce와 Giggal.ai 요금 비교',
  pricingProse: 'NeverBounce의 가격은 10,000개에 US$50, 100,000개에 US$400, 100만 개에 US$2,500입니다. Giggal.ai는 같은 수량에 US$9.90, US$76, US$680입니다. 최소 구매량도 월 구독도 없습니다.',
  featureNote: '대시(-)는 공개되지 않은 수치를 뜻합니다. 예를 들어 NeverBounce의 무료 제공량입니다. 추측으로 채우지 않았습니다.',
  testSteps: [
    'NeverBounce로 이미 정리한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'NeverBounce가 Catch-All로 표시한 행을 보고, 실제로 있는 주소의 수를 세어 보십시오.',
  ],
  faqs: [
    { q: '두 서비스의 가격은 얼마나 다릅니까?', a: '10,000개에 NeverBounce는 US$50, Giggal.ai는 US$9.90입니다. 100만 개에서는 NeverBounce가 US$2,500, Giggal.ai가 US$680입니다. 두 회사 모두 모든 가격 구간을 공개하므로 직접 확인할 수 있습니다.' },
    { q: 'NeverBounce가 표시만 한 캐치올 도메인 주소를 Giggal.ai는 어떻게 처리합니까?', a: 'Accept-All 표시만 붙이는 대신, 메일함이 실제로 있는지, 즉 전송 가능인지 전송 불가인지 알려 드립니다. LeadMagic의 테스트에서 NeverBounce가 결과를 낸 캐치올 도메인 주소는 8%였습니다. Giggal.ai의 모든 검증은 1건에 크레딧 1개로 일정합니다.' },
    { q: 'Giggal.ai와 NeverBounce의 크레딧 유효기간은 어떻게 다릅니까?', a: 'Giggal.ai의 크레딧에는 유효기간이 없습니다. NeverBounce의 크레딧은 구매 후 12개월이 지나면 만료됩니다. 이 내용은 NeverBounce의 요금 페이지에 나와 있습니다.' },
    { q: 'Giggal.ai에 API가 있습니까?', a: '네. Giggal.ai에는 공개 API 문서와 MCP 서버가 있습니다. 자체 도구나 워크플로에서 검증을 실행할 수 있습니다.' },
    { q: '서비스를 바꾸기 전에 Giggal.ai를 써 볼 수 있습니까?', a: '네. 대량 업로드에 쓸 수 있는 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없습니다. NeverBounce로 정리한 리스트를 다시 검사하고 Catch-All로 표시된 행을 확인해 보십시오.' },
  ],
  ctaHeadline: 'NeverBounce의 Catch-All 행을 실제 결과로 바꾸십시오',
  breadcrumb: 'NeverBounce 대안',
}

const snovio: AltL10nConfig = {
  locale: 'ko',
  slug: 'snovio',
  path: '/ko/snovio-alternative',
  cluster: 'altSnovio',
  metaTitle: 'Snov.io 대안: 이메일 검증 전용 도구 | Giggal.ai',
  ogTitle: '이메일 검증을 위해 만든 Snov.io 대안',
  desc: 'Snov.io는 이메일 찾기와 아웃리치에 함께 쓰는 크레딧에서 검증 비용을 차감합니다. Giggal.ai는 캐치올 도메인 주소까지 10,000개에 US$9.90로 확인하는 검증 도구입니다. 무료 크레딧 1,000개.',
  h1: ['검증을 위해 만든 ', 'Snov.io 대안', ''],
  heroP: 'Snov.io는 이메일 찾기, 검증, 발송을 하나의 크레딧 기반 플랫폼으로 묶어 제공합니다. 필요한 것이 검증이라면 Giggal.ai는 검증 전용 도구입니다. 캐치올 도메인 주소까지 확인하며, 공개 가격은 10,000개에 US$9.90입니다.',
  bluf: [
    { k: '용도', v: 'Snov.io는 이메일 찾기와 아웃리치를 위한 도구 모음입니다. Giggal.ai는 검증을 하며, 캐치올 도메인 주소도 확인합니다.' },
    { k: '캐치올 도메인', v: 'Giggal.ai는 유효 또는 무효 결과를 돌려줍니다. Snov.io는 표시만 하고 더 확인하지 않습니다.' },
    { k: '과금', v: 'Snov.io는 요금제 크레딧에서 검증 비용을 차감합니다. Giggal.ai는 종량제이며, 10,000개에 US$9.90부터입니다.' },
    { k: '무료 체험', v: '대량 업로드에도 쓸 수 있는 무료 크레딧 1,000개를 드립니다. 신용카드는 필요 없습니다.' },
  ],
  catchAllHeading: 'Giggal.ai가 캐치올 도메인 주소를 검증하는 방법',
  catchAllProse: 'Snov.io는 더 넓은 잠재 고객 발굴 워크플로 안에서 검증을 하며, 검사 1회에 크레딧 1개를 씁니다. 캐치올(catch-all) 도메인에서는 주소를 표시만 하고, 메일함이 있는지는 확인하지 않습니다. Giggal.ai는 검증을 위해 만든 도구입니다. 이 주소들을 별도의 검사 경로로 보내고, 네 가지 결과 중 하나를 돌려줍니다. 보안 이메일 게이트웨이(SEG) 뒤에 있는 주소도 검증합니다.',
  pricingHeading: 'Snov.io와 Giggal.ai 요금 비교',
  pricingProse: 'Snov.io는 크레딧을 함께 쓰는 월 구독으로 판매되며, 검증 1회에 크레딧 1개를 씁니다. 매월 10,000회 검증을 감당하는 가장 작은 요금제는 Pro M으로 월 US$189입니다. 100,000회는 Ultra로 월 US$738입니다(연간 결제 시 약 25% 저렴). 매월 100만 회는 맞춤 요금제입니다. 쓰지 않은 크레딧은 구독이 유지되는 동안 다음 달로 이월됩니다. Giggal.ai는 종량제이며, 10,000개에 US$9.90, 100,000개에 US$76, 100만 개에 US$680입니다. 월 약정은 없습니다.',
  featureNote: 'Snov.io는 월 단위로 과금됩니다. 그래서 표의 수치는 해당 수량을 감당하는 가장 작은 요금제이며, 1회 결제 가격이 아닙니다. 매월 100만 회는 맞춤 요금제입니다.',
  testSteps: [
    'Snov.io로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'Snov.io가 catch-all로 표시한 행을 보고, 실제로 있는 주소의 수를 세어 보십시오.',
  ],
  faqs: [
    { q: '이메일 검증용으로 Giggal.ai는 좋은 Snov.io 대안입니까?', a: '필요한 것이 검증이라면 그렇습니다. Giggal.ai는 검증 전용 도구로, 캐치올 도메인 주소까지 확인하고 보안 이메일 게이트웨이 뒤에 있는 주소도 검증합니다. 종량제이며 10,000개에 US$9.90부터입니다. Snov.io는 이메일 찾기와 아웃리치도 하지만, Giggal.ai는 이런 기능이 없습니다.' },
    { q: 'Giggal.ai는 Snov.io처럼 이메일을 찾거나 캠페인을 실행합니까?', a: '아니요. Giggal.ai는 검증만 하는 도구입니다. 찾기, 검증, 발송을 하나의 플랫폼에서 하고 싶다면 Snov.io가 맞습니다. 캐치올 도메인 주소까지 확인하는 검증만 필요하다면 Giggal.ai가 그 용도로 만들어졌습니다.' },
    { q: 'Snov.io가 표시만 하는 캐치올 도메인 주소를 Giggal.ai는 어떻게 처리합니까?', a: 'Snov.io는 캐치올 도메인 주소를 표시하지만, 메일함이 있는지는 확인하지 않습니다. Giggal.ai는 전송 가능 또는 전송 불가의 실제 결과를 돌려줍니다. 가격은 이메일 1개당 크레딧 1개로 일정합니다.' },
    { q: '두 서비스의 가격은 얼마나 다릅니까?', a: 'Snov.io는 모든 검증을 요금제 크레딧에서 차감하며, 크레딧 1,000개에 월 US$39부터입니다(연간 결제 시 US$29.25). Giggal.ai는 종량제로 10,000개에 US$9.90입니다. 월 약정이 없고, 크레딧에 유효기간도 없습니다.' },
    { q: '서비스를 바꾸기 전에 Giggal.ai를 써 볼 수 있습니까?', a: '네. 대량 업로드에 쓸 수 있는 무료 크레딧 1,000개를 드리며, 신용카드는 필요 없습니다. Snov.io가 catch-all로 표시한 리스트를 검사하고, 실제 결과가 나온 주소의 수를 확인해 보십시오.' },
  ],
  ctaHeadline: '플랫폼 전체가 아니라 이메일 검증만 쓰십시오',
  breadcrumb: 'Snov.io 대안',
}

export const ALT_KO = { zerobounce, neverbounce, snovio }
