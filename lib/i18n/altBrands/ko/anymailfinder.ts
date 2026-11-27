// Korean Anymailfinder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). "Anymailfinder" as one word
// in the title, H1 and H2s; "Anymail Finder" in body text, as in English.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ko',
  slug: 'anymailfinder',
  path: '/ko/anymailfinder-alternative',
  cluster: 'altAnymailfinder',
  metaTitle: 'Anymailfinder 대안: 이메일 리스트 검증 | Giggal.ai',
  ogTitle: '이메일 리스트 검증을 위한 Anymailfinder 대안',
  desc: 'Anymailfinder 대안을 찾고 있습니까? Anymail Finder 요금을 Giggal.ai와 비교해 보십시오. Giggal.ai는 크레딧 10,000개에 US$9.90인 종량제 이메일 검증 도구이며, 구독이 필요 없습니다.',
  h1: ['이미 보유한 리스트를 위한 ', 'Anymailfinder 대안', ''],
  heroP:
    'Anymail Finder는 이메일 주소를 찾기 위해 만든 도구입니다. 검증 기능은 부가 도구이며, 월 요금제에서 비용이 나갑니다. 리스트가 이미 있고 검증만 필요하다면 Giggal.ai가 이메일 10,000개에 US$9.90로 검증합니다. 구독은 없습니다.',
  bluf: [
    { k: '주요 용도', v: 'Anymail Finder는 이메일을 찾습니다. Giggal.ai는 이미 보유한 이메일을 검증합니다.' },
    { k: '가격', v: '검증 1회에 크레딧 0.2개가 들며, 요금제는 월 US$29부터입니다. Giggal.ai는 10,000개에 US$9.90이며, 한 번만 결제합니다.' },
    { k: '크레딧', v: 'Anymail Finder 크레딧은 해지하면 만료됩니다. Giggal.ai 크레딧에는 유효기간이 없습니다.' },
    { k: '알 수 없음', v: 'Anymail Finder는 모든 검사에 요금을 받습니다. Giggal.ai는 알 수 없음 결과에 크레딧을 환불합니다.' },
  ],
  about: {
    heading: 'Anymail Finder란?',
    paragraphs: [
      'Anymail Finder는 Anymailfinder라고도 쓰며, B2B 영업을 위한 이메일 찾기 도구입니다. 이름과 회사를 입력하면 검증된 업무용 이메일을 돌려줍니다. 도메인, 직함, LinkedIn URL로도 검색할 수 있습니다.',
      'Chrome 확장 프로그램, 최대 100,000행의 대량 업로드, API가 있습니다. 한 사람의 이메일을 찾는 데 크레딧 1개가 들며, 검증된 이메일을 찾았을 때만 차감됩니다.',
      'Anymail Finder에는 다른 출처의 리스트를 위한 이메일 검증 도구도 있습니다. 검사 1회에 크레딧 0.2개가 들며, 매번 차감됩니다. 결과는 유효, 위험, 무효 중 하나입니다.',
    ],
  },
  reasons: {
    heading: '사용자가 Anymailfinder 대안을 찾는 이유',
    items: [
      { k: '월 요금제', v: '크레딧은 구독을 유지하는 동안만 남아 있습니다. 해지하면 결제 기간이 끝날 때 만료됩니다.' },
      { k: '검사마다 과금', v: '검증 도구는 확인할 수 없는 주소를 포함해 모든 검사에 크레딧 0.2개를 차감합니다.' },
      { k: '체험에 카드 필요', v: '7일 체험에는 신용카드가 필요합니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.' },
      { k: '게이트웨이', v: 'Anymail Finder는 Proofpoint나 Mimecast 같은 보안 이메일 게이트웨이(SEG) 지원을 공개하지 않습니다.' },
    ],
  },
  catchAllHeading: 'Anymail Finder와 Giggal.ai의 캐치올 이메일 처리 방식',
  catchAllProse:
    'Anymail Finder는 대부분의 캐치올(catch-all) 주소를 유효 또는 무효로 검증한다고 밝힙니다. 확인하지 못한 소수의 주소는 위험으로 남습니다. Giggal.ai도 캐치올 주소에 결과를 돌려주며, 주소 1개에 크레딧 1개입니다. 이름을 밝힌 보안 이메일 게이트웨이 15종 뒤의 주소도 검사합니다. Giggal.ai가 답을 얻지 못하면 결과는 알 수 없음이 되고, 크레딧은 환불됩니다.',
  pricingHeading: '이메일 검증용 Anymail Finder 요금',
  pricingProse:
    'Anymail Finder는 크레딧 400개에 US$29부터 100,000개에 US$799까지 월 요금제를 판매합니다. 연간 결제 시 33%를 절약할 수 있습니다. 검증 1회에 크레딧 0.2개가 들므로, 10,000회 검사에는 크레딧 2,000개가 듭니다.',
  pricingExtra: [
    '따라서 매월 10,000회 검사는 US$89 요금제, 100,000회 검사는 US$299 요금제에 해당합니다. 쓰지 않은 크레딧은 구독을 유지하는 동안 이월됩니다. Giggal.ai는 크레딧 10,000개를 US$9.90, 100,000개를 US$76에 판매합니다. 한 번만 결제하며, 유효기간이 없습니다.',
  ],
  strengths: {
    heading: 'Anymail Finder가 더 나은 선택인 경우',
    intro: 'Anymail Finder는 Giggal.ai가 하지 않는 일을 합니다. 다음이 필요하다면 Anymail Finder를 선택하십시오.',
  },
  others: {
    heading: '다른 Anymailfinder 대안',
    intro: '다음 도구는 이메일을 찾거나, 검증하거나, 둘 다 합니다. 가격은 2026년 11월 27일 각 업체 사이트 기준입니다.',
    items: [
      { name: 'Findymail', text: '이메일을 찾고 검증하며, LinkedIn과 Sales Navigator용 Chrome 확장 프로그램이 있습니다. Starter는 월 US$99에 찾기 크레딧 5,000개와 검증 크레딧 5,000개입니다.' },
      { name: 'LeadMagic', text: '이메일 찾기, 휴대폰 번호, 유효성 검사를 제공하는 B2B 데이터 플랫폼입니다. 유효성 검사는 확정 결과 1건에 크레딧 0.25개이며, 요금제는 월 US$99부터입니다.' },
      { name: 'Scrubby', text: '캐치올 주소와 게이트웨이로 보호되는 주소를 위한 검증 도구입니다. 종량제 크레딧은 1개에 US$0.008이며, 유효기간이 없습니다.' },
    ],
  },
  testHeading: 'Anymail Finder에서 내보낸 리스트를 Giggal.ai로 검사하기',
  testSteps: [
    'Anymail Finder로 이미 검사한 리스트를 내보냅니다.',
    '그 리스트를 여기에서 무료 크레딧 1,000개로 검사합니다. 신용카드는 필요 없습니다.',
    'Anymail Finder가 위험으로 표시한 행을 Giggal.ai가 돌려준 결과와 비교합니다.',
  ],
  ctaHeadline: '이미 찾은 이메일을 검증하십시오',
  faqs: [
    {
      q: '어떤 Anymailfinder 대안이 좋습니까?',
      a: '용도에 따라 다릅니다. 이메일을 찾으려면 Findymail이나 LeadMagic을 보십시오. 이미 보유한 리스트를 검증하려면 Giggal.ai가 크레딧 10,000개에 US$9.90입니다. 구독이 없고, 크레딧에 유효기간도 없습니다.',
    },
    {
      q: 'Anymail Finder 요금은 얼마입니까?',
      a: '월 요금제는 크레딧 400개에 US$29부터 100,000개에 US$799까지입니다. 연간 결제 시 33%를 절약할 수 있습니다. 다른 출처의 이메일을 검증하면 크레딧 0.2개가 듭니다.',
    },
    {
      q: 'Anymail Finder에 무료 체험이 있습니까?',
      a: '네. 크레딧 100개가 포함된 7일 체험이 있습니다. 신용카드를 등록해야 하며, 카드는 확인만 하고 결제하지 않습니다. Giggal.ai는 신용카드 없이 무료 크레딧 1,000개를 드립니다.',
    },
    {
      q: 'Giggal.ai는 Anymail Finder처럼 이메일 주소를 찾을 수 있습니까?',
      a: '아니요. Giggal.ai는 이미 보유한 주소만 검증합니다. 먼저 찾기 도구를 쓰고, 발송 전에 Giggal.ai로 리스트를 검증하십시오.',
    },
    {
      q: 'Anymail Finder 크레딧은 만료됩니까?',
      a: '요금제가 유지되는 동안에는 한도 없이 이월됩니다. 해지하면 결제 기간이 끝날 때 만료됩니다. Giggal.ai 크레딧에는 유효기간이 없습니다.',
    },
  ],
  breadcrumb: 'Anymail Finder 대안',
}

export default cfg
