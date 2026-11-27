// Korean Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ko/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'listmint',
  path: '/ko/listmint-alternative',
  cluster: 'altListmint',
  metaTitle: 'Listmint 대안: 캐치올 이메일 검증 | Giggal.ai',
  ogTitle: '캐치올 이메일 검증을 위한 Listmint 대안',
  desc: 'Listmint 요금은 캐치올 크레딧 5,000개가 포함된 월 US$99입니다. Giggal.ai는 캐치올 이메일을 1개에 크레딧 1개, 즉 10,000개에 US$9.90로 검사합니다. 크레딧에는 유효기간이 없습니다.',
  h1: ['크레딧 풀이 하나인 ', 'Listmint 대안', ''],
  heroP:
    'Listmint는 캐치올(catch-all) 주소에 집중하는 이메일 검증 도구입니다. 각 요금제를 표준 크레딧과 더 작은 캐치올 크레딧 풀로 나눕니다. Giggal.ai는 하나의 풀을 씁니다. 캐치올 검사도 다른 이메일과 같이 크레딧 1개입니다.',
  bluf: [
    { k: '크레딧', v: 'Listmint에는 크레딧 풀이 두 개 있습니다. Giggal.ai는 하나이며, 이메일 1개에 크레딧 1개입니다.' },
    { k: '가격', v: 'Listmint Starter는 월 US$99입니다. Giggal.ai는 크레딧 10,000개에 US$9.90이며, 한 번만 결제합니다.' },
    { k: '캐치올', v: 'Listmint Starter는 매월 캐치올 크레딧 5,000개를 제공합니다. Giggal.ai에는 별도 한도가 없습니다.' },
    { k: '게이트웨이', v: 'Giggal.ai는 이름을 밝힌 이메일 게이트웨이 15종 뒤의 주소를 검사합니다. Listmint는 게이트웨이 이름을 하나도 밝히지 않습니다.' },
  ],
  about: {
    heading: 'Listmint란?',
    paragraphs: [
      'Listmint는 listmint.io의 이메일 검증 서비스입니다. 표준 SMTP 검사와 별도의 캐치올 검사를 합니다. Listmint는 캐치올 주소를 사람이 직접 검증한다고 밝힙니다.',
      '캐치올 크레딧은 표준 크레딧보다 비쌉니다. 그래서 각 요금제에는 많은 표준 크레딧과 더 적은 캐치올 크레딧이 포함됩니다.',
      'Listmint는 캐치올 주소를 실시간으로 검증할 수 있다고도 밝힙니다.',
    ],
  },
  reasons: {
    heading: '사용자가 Listmint 대안을 찾는 이유',
    items: [
      { k: '캐치올 한도', v: 'Starter에는 매월 캐치올 크레딧 5,000개가 포함됩니다. 큰 B2B 리스트 하나에 모두 쓰일 수 있습니다.' },
      { k: '월 요금제', v: 'Listmint는 매월 청구됩니다. Giggal.ai 크레딧은 한 번만 구매하며, 유효기간이 없습니다.' },
      { k: '수량', v: '공개된 가장 큰 요금제는 표준 크레딧 50,000개의 Agency입니다. 그 이상은 Enterprise 견적이 필요합니다.' },
      { k: '게이트웨이', v: 'Listmint는 어떤 보안 이메일 게이트웨이(SEG) 뒤의 주소를 검사할 수 있는지 밝히지 않습니다.' },
    ],
  },
  catchAllHeading: 'Listmint와 Giggal.ai의 캐치올 주소 처리 비교',
  catchAllProse:
    'Listmint는 캐치올 검사를 별도의 크레딧 풀에서 차감합니다. US$99 Starter 요금제에서 이 풀은 매월 5,000개입니다. Giggal.ai에는 별도의 풀이 없습니다. 캐치올이든 아니든 모든 주소가 크레딧 1개입니다. Giggal.ai가 답을 얻지 못하면 결과는 알 수 없음이 되고, 크레딧은 환불됩니다.',
  pricingHeading: 'Listmint 요금과 Giggal.ai 비교',
  pricingProse:
    'Listmint Starter는 월 US$99에 표준 크레딧 20,000개와 캐치올 크레딧 5,000개입니다. Agency는 월 US$187에 표준 크레딧 50,000개와 캐치올 크레딧 10,000개입니다. Enterprise는 가격을 문의해야 합니다.',
  pricingExtra: [
    'Giggal.ai에는 요금제 등급이 없습니다. 크레딧 10,000개는 US$9.90, 100,000개는 US$76입니다. 어떤 크레딧이든 캐치올 주소에 쓸 수 있습니다.',
  ],
  strengths: {
    heading: 'Listmint가 잘 맞는 경우',
    intro: '다음을 원한다면 Listmint가 적합합니다.',
  },
  others: {
    heading: '다른 Listmint 대안',
    intro: '다음 검증 도구도 캐치올 주소에 결과를 돌려줍니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Scrubby', text: '캐치올 도메인과 게이트웨이로 보호되는 도메인을 크레딧 1개로 검사합니다. Deep Verification은 크레딧 3개이며, 실제 이메일을 보냅니다. 종량제는 크레딧 1개에 US$0.008입니다.' },
      { name: 'no2bounce', text: '테스트 메시지를 보내 캐치올 메일함을 확인합니다. 종량제 크레딧 10,000개는 US$20이며, 유효기간이 없습니다.' },
      { name: 'Allegrow', text: '영업팀을 위해 캐치올 연락처에 유효 또는 무효 결과를 돌려줍니다. Starter는 연락처 5,000개에 월 US$99입니다.' },
    ],
  },
  testHeading: 'Listmint 리스트를 Giggal.ai로 검사하기',
  testSteps: [
    'Listmint로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    '캐치올 행을 Listmint가 돌려준 결과와 비교합니다.',
  ],
  ctaHeadline: '별도 크레딧 한도 없이 캐치올 이메일을 검사하십시오',
  faqs: [
    {
      q: 'Listmint 요금은 얼마입니까?',
      a: 'Listmint Starter는 월 US$99에 표준 크레딧 20,000개와 캐치올 크레딧 5,000개입니다. Agency는 월 US$187에 표준 크레딧 50,000개와 캐치올 크레딧 10,000개입니다. Enterprise는 가격을 문의해야 합니다.',
    },
    {
      q: 'Listmint에는 왜 별도의 캐치올 크레딧이 있습니까?',
      a: 'Listmint는 캐치올 검사에 더 많은 작업이 들기 때문에, 캐치올 크레딧이 일반 SMTP 크레딧보다 비싸다고 밝힙니다. Giggal.ai는 캐치올을 포함해 모든 주소에 크레딧 1개를 받습니다.',
    },
    {
      q: 'Giggal.ai는 좋은 Listmint 대안입니까?',
      a: '캐치올 주소가 많은 리스트를 검증한다면 그렇습니다. Giggal.ai에는 별도의 캐치올 한도도, 월 요금제도 없습니다. 가격은 크레딧 10,000개에 US$9.90입니다.',
    },
    {
      q: 'Listmint에 무료 체험이 있습니까?',
      a: 'Listmint는 무료로 시작할 수 있지만, 포함된 크레딧 수는 공개하지 않습니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.',
    },
  ],
  breadcrumb: 'Listmint 대안',
}

export default cfg
