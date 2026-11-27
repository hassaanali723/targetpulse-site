// ko words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
// Terms follow SEO-Plan/i18n-batch4-ko-terminology.md: 크레딧, 캐치올, 검증,
// 종량제, 월 구독, 합니다체. Prices as US$99, numbers as 10,000.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: '무료 크레딧 없음',
    creditsExpire: '쓰지 않은 월 크레딧은 월 제공량의 2배까지 이월됩니다',
    catchAllCreditCost: '확정 결과 1건에 크레딧 0.25개, 알 수 없음 결과는 무료',
    claimedAccuracy: '검증 정확도 99.5% 주장',
    pricingBasisNote:
      'LeadMagic은 하나의 크레딧 풀을 쓰는 월 구독입니다. Essential US$99(크레딧 5,000개), Growth US$249(20,000개), Professional US$499(50,000개), Ultimate US$849(100,000개)입니다. 확정 결과가 나온 검증에는 크레딧 0.25개가 들고, 알 수 없음 결과는 무료입니다. 위 수치는 해당 검증 횟수를 감당하는 가장 작은 월 요금제입니다. 연간 결제 시 2개월이 무료입니다. Giggal.ai의 수치는 종량제 1회 결제 가격입니다.',
    betterFitFor: [
      '검증 외의 폭넓은 데이터 보강 기능: 휴대폰 번호, 회사 데이터, 이직 정보, 광고 데이터',
      '대부분의 업체가 공개하지 않는 자체 캐치올 테스트 데이터 공개',
      '찾기, 데이터 보강, 검증을 하나의 구독으로 쓰려는 팀',
      '엔드포인트별 크레딧 가격이 정해진 개발자 중심 API',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: '7일 체험에 크레딧 100개, 신용카드는 확인만 하고 결제하지 않음',
    creditsExpire: '구독이 유지되는 동안 크레딧이 한도 없이 이월되며, 해지하면 결제 기간이 끝날 때 만료됩니다',
    catchAllCreditCost: '검사 1회에 크레딧 0.2개, 다른 검증과 같음',
    claimedAccuracy: '커버리지 86.4%에서 정확도 98.9% 주장',
    pricingBasisNote:
      'Anymail Finder는 월 구독이며, 크레딧 구간은 월 US$29에 400개부터 US$799에 100,000개까지입니다. 다른 곳에서 찾은 이메일을 검증하면 검사 1회에 크레딧 0.2개가 듭니다. 위 수치는 해당 검사 횟수를 감당하는 가장 작은 월 요금제입니다. 연간 결제 시 33%를 절약할 수 있습니다. 매월 100만 회는 월 요금제의 가장 높은 구간을 넘습니다. Giggal.ai의 수치는 종량제 1회 결제 가격입니다.',
    betterFitFor: [
      '이름과 도메인으로 이메일 주소 찾기(Giggal.ai에는 없는 기능)',
      '97% 이상의 전송률을 보장한다고 명시',
      '구독을 유지하는 동안 한도 없이 이월되는 크레딧',
      '오래 운영된 브랜드와 많은 양의 공개 콘텐츠',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '가입 시 크레딧 10개, 신용카드 불필요',
    creditsExpire: '쓰지 않은 크레딧은 월 제공량의 2배까지 이월됩니다',
    catchAllCreditCost: '크레딧 1개, 다른 검증과 같음',
    claimedAccuracy: '반송률 5% 미만 보장, 넘으면 크레딧 환불',
    pricingBasisNote:
      'Findymail은 크레딧 수를 밝히지 않는 사용량 기반 요금제를 월 US$99~US$999에 판매합니다. 크레딧 기반 요금제는 하나이며, Starter가 월 US$99에 찾기 크레딧 5,000개와 검증 크레딧 5,000개를 제공합니다. 그 이상은 Enterprise로 견적을 받아야 합니다. 그래서 매월 10,000회, 100,000회, 100만 회 검증에 대한 공개 가격은 없습니다. Giggal.ai의 수치는 종량제 1회 결제 가격입니다.',
    betterFitFor: [
      '이메일 주소를 처음부터 찾는 기능(Giggal.ai에는 이 기능이 전혀 없음)',
      '크레딧 환불이 따르는 반송률 보장',
      'LinkedIn과 Sales Navigator에서 이메일을 찾고 검증하는 Chrome 확장 프로그램',
      'SOC 2 Type 2와 EU 내 호스팅',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: '무료로 시작 가능, 제공량은 공개되지 않음',
    creditsExpire: '공개되지 않음',
    catchAllCreditCost: '별도의 캐치올 크레딧: US$99 요금제에서 매월 5,000개',
    pricingBasisNote:
      'Listmint는 크레딧 풀이 두 개인 월 구독입니다. Starter는 월 US$99에 표준 크레딧 20,000개와 캐치올 크레딧 5,000개입니다. Agency는 월 US$187에 표준 크레딧 50,000개와 캐치올 크레딧 10,000개입니다. 더 많은 수량은 Enterprise이며, 가격은 문의해야 합니다. Giggal.ai의 수치는 종량제 1회 결제 가격입니다.',
    betterFitFor: [
      'Listmint가 사람이 직접 한다고 밝힌 캐치올 검사',
      '실시간 캐치올 검증',
      '기본 요금제에 포함된 많은 월 표준 크레딧',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: '최대 1,000개 주소에 쓸 수 있는 14일 체험',
    creditsExpire: '요금제 제공량은 월 단위이며, 체험은 14일 후 종료됩니다',
    catchAllCreditCost: '요금제 제공량에서 연락처 1개 차감',
    claimedAccuracy: '99% 주장',
    pricingBasisNote:
      'Allegrow는 월 구독입니다. Starter는 월 US$99에 연락처 5,000개이며, 추가 크레딧은 1,000개당 US$8입니다. 따라서 매월 10,000개는 US$139가 됩니다. 이 금액은 공개된 요금으로 저희가 계산한 것이며, Allegrow가 제공하는 요금제가 아닙니다. 100,000개와 1,000,000개 행은 Scale Plus Unlimited로, 연간 결제 시 월 US$1,340이며 검증 횟수에 제한이 없습니다. Giggal.ai의 수치는 종량제 1회 결제 가격입니다.',
    betterFitFor: [
      '무제한 검증 요금제(Giggal.ai에는 같은 요금제가 없음)',
      '검증과 함께 제공되는 발신자 평판 점수와 받은편지함 도달 모니터링',
      'SSO와 SOC 2 보고서를 갖춘 HubSpot, Outreach, Salesloft 기본 연동',
      '가상의 주소를 대상으로 한 오탐(false positive) 연구 공개',
    ],
    estimateNote: 'Allegrow의 공개 요금으로 저희가 계산한 금액이며, Allegrow가 제공하는 요금제가 아닙니다.',
    notes: { unlimited: '무제한' },
  },
  no2bounce: {
    freeTier: '크레딧 100개, 신용카드 불필요, 유효기간 없음',
    creditsExpire: '크레딧에 유효기간이 없으며, 월 사용 한도도 없습니다',
    catchAllCreditCost: '이메일 1개에 크레딧 1개, 표준 검사와 같음',
    claimedAccuracy: '99.6% 주장',
    betterFitFor: [
      '크레딧 10,000개부터 5,000만 개까지 이어지는 많은 가격 구간',
      'Giggal.ai처럼 유효기간이 없는 크레딧',
      '종량제보다 15%, 20% 저렴한 월간 및 연간 요금제',
      '같은 크레딧으로 쓰는 이메일 찾기와 도메인 검색',
    ],
  },
  quickemailverification: {
    freeTier: '매일 크레딧 100개 무료',
    creditsExpire: '영구 종량제 크레딧은 유효기간이 없습니다',
    catchAllCreditCost: '캐치올 상태로 표시, 확인하지 않음',
    claimedAccuracy: '99% 주장',
    betterFitFor: [
      '매일 무료 크레딧 100개와 월 무료 제공량',
      '유효기간이 없는 영구 종량제 크레딧',
      '크레딧 500개에 US$4부터 시작하는 낮은 가격',
      '오래 운영된 실시간 API',
    ],
  },
  myemailverifier: {
    freeTier: '매일 크레딧 100개 무료',
    creditsExpire: '크레딧에 유효기간이 없습니다',
    catchAllCreditCost: '캐치올 상태로 표시, 확인하지 않음',
    betterFitFor: [
      '검증 1건에 US$0.0025라는 매우 낮은 기본 가격',
      '체험 후 끝나지 않고 매일 다시 채워지는 무료 크레딧 100개',
      '유효기간이 없는 크레딧과 대량 구매 시 보너스 크레딧 프로모션',
      'G2, Capterra, Trustpilot에 쌓인 많은 공개 리뷰',
    ],
  },
  scrubby: {
    freeTier: '크레딧 200개',
    creditsExpire: '종량제 크레딧은 유효기간이 없으며, 요금제 크레딧은 이월됩니다',
    catchAllCreditCost: 'Quick Verification은 크레딧 1개. Deep Verification은 크레딧 3개이며 최대 72시간이 걸립니다',
    claimedAccuracy: '요금 페이지에 공개되지 않음',
    betterFitFor: [
      '검증하기 어려운 주소에 실제 이메일을 보내는 Deep Verification',
      '신용카드 없이 쓰는 무료 크레딧 200개',
      '종량제와 월 요금제를 모두 제공하며, 요금제 크레딧은 이월',
      '여러 기능을 묶은 제품이 아니라 한 가지 작업에 집중한 도구',
    ],
    notes: { 'Quote only': '견적 문의' },
  },
  mailfloss: {
    freeTier: '매월 검증 500회, 구독 시 7일 체험 추가',
    creditsExpire: '선불 크레딧은 유효기간이 없으며, 구독 크레딧은 매월 초기화됩니다',
    catchAllCreditCost: '표시만 하고 확인하지 않음',
    betterFitFor: [
      '이메일 플랫폼에 직접 연결되어 매일 자동으로 하는 리스트 정리',
      'Mailchimp, Klaviyo, HubSpot을 포함한 41개 기본 연동',
      '수동 업로드 없이 설정 후 자동으로 실행되는 구독',
      '구독과 선불 크레딧 중 선택 가능',
    ],
  },
  bounceless: {
    freeTier: '업무용 이메일로 매월 크레딧 1,000개, 신용카드 불필요',
    creditsExpire: '패키지나 구독으로 받은 크레딧은 유효기간이 없습니다',
    catchAllCreditCost: '크레딧 1개짜리 검사에 캐치올 근거 포함',
    betterFitFor: [
      '업무용 이메일로 매월 받는 무료 크레딧 1,000개',
      '1회 구매 패키지와 월 구독을 모두 제공하며, 크레딧은 유효기간 없음',
      '한 계정에서 쓰는 추가 도구: 발신자 상태, 받은편지함 도달, 가입 양식 검사',
      '대량에서 낮은 가격, 100만 개에 US$579',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n} 주요 정보`,
  factRows: { price10k: '10,000회 검증', free: '무료 크레딧', expiry: '크레딧 유효기간', catchAll: '캐치올' },
  perMonth: '/월',
  notPublished: '공개되지 않음',
}
