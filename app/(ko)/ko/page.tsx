import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Korean home. The title follows the keyword plan ("이메일 검증 도구: 이메일
// 유효성 검사와 대량 검증", SEO-Plan/i18n-batch4-ko-keyword-plan.md). The
// main search demand (이메일 유효성 검사) sits on /ko/email-checker, so the
// hero sends the visitor to the free checker first and to sign-up second.
// "이메일 주소 확인" (people looking up their own address) and "이메일 인증"
// (verification codes) are different searches and are not used as head
// terms. Only the alternatives registered for ko are listed.

const DESC =
  '이메일 주소가 실제로 존재하는지 확인하는 이메일 검증 도구입니다. 캐치올(catch-all) 도메인도 검증합니다. 대량 검증, API, 무료 크레딧 1,000개를 제공하며 정리한 리스트의 반송률은 3% 미만입니다.'

const TITLE = '이메일 검증 도구: 이메일 유효성 검사와 대량 검증'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/ko', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/ko',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: '이메일 반송을 줄이는',
  h1Accent: '이메일 검증 서비스',
  heroSub: (
    <>
      실제로 존재하는 이메일 주소를 알려 주는 대량 이메일 검증 소프트웨어입니다.{' '}
      <Link href="/ko/catch-all-verification" className={heroLink}>캐치올(catch-all) 도메인</Link>의 주소도 검증합니다.
    </>
  ),
  rating: { on: '', reviews: (n) => `(리뷰 ${n}개)` },
  email: { label: '검사할 이메일 주소', placeholder: 'name@company.co.kr', button: '무료로 검사' },
  listQuestion: '리스트 전체를 정리하려면',
  listCta: '무료 이메일 유효성 검사 1,000건 받기',
  noCard: '신용카드는 필요 없습니다.',
  stats: [
    { n: '5억', suf: '+', l: '검증한 이메일 주소' },
    { n: '98.5', suf: '%', l: '비즈니스 리스트 정확도' },
    { pre: '< ', n: '3', suf: '%', l: '정리한 리스트의 반송률' },
    { n: '1,000', l: '무료 크레딧(카드 불필요)' },
  ],
  bulk: {
    id: 'bulk',
    title: '리스트 전체를 검사하는 대량 이메일 검증',
    sub: '리스트를 한 번만 업로드하면 됩니다. 대량 이메일 검증 서비스가 리스트에 있는 모든 주소를 확인합니다.',
    points: [
      '모든 주소에 전송 가능 또는 전송 불가 결과 표시',
      '캐치올 주소에도 분명한 결과 제공',
      'CSV 또는 Excel, 파일당 최대 50,000개 주소',
      '완료되면 정리된 리스트 다운로드',
    ],
  },
  catchAll: {
    title: '캐치올 주소를 따로 확인해야 하는 이유',
    intro: (
      <>
        일부 회사 메일 서버는 실제 주소든 만들어 낸 주소든 모든 주소를 받아들입니다. 이런 도메인을{' '}
        <Link href="/ko/catch-all-verification" className={link}>캐치올 도메인</Link>이라고 합니다. 대부분의 검증 도구는
        이 차이를 구별하지 못합니다. 그래서 이런 주소를 “위험”으로 표시하고 판단을 사용자에게 맡깁니다.
      </>
    ),
    others: '대부분의 이메일 검증 도구',
    othersDetail: '캐치올, 분명한 결과 없음',
    ourDetail: '캐치올, 메일함 확인됨',
    risky: '위험',
    deliverable: '전송 가능',
    othersText: '판단은 사용자 몫이 됩니다. 메일을 보내 반송 위험을 감수하거나, 실제 연락처일 수도 있는 주소를 지워야 합니다.',
    ourText: '실제로 있는 주소라는 것을 알 수 있으므로 안심하고 보낼 수 있습니다. 추측할 필요가 없습니다.',
  },
  features: {
    title: '이메일 검증: 대량 정리, API, 연동을 하나의 크레딧 잔액으로',
    intro: '리스트를 업로드하든, API를 호출하든, CRM을 연동하든 같은 이메일 유효성 검사가 실행됩니다.',
    items: [
      { title: '리스트 대량 정리', body: 'CSV 또는 Excel 파일을 업로드하면 몇 분 안에 결과가 나옵니다.', points: ['파일당 최대 50,000개 주소', '정리된 리스트를 CSV로 다운로드'], link: '무료로 리스트 정리하기' },
      { title: '캐치올 검증', body: '캐치올 도메인에서도 “위험”이 아닌 분명한 결과를 제공합니다.', points: ['다른 검사와 같은 크레딧 1개', 'Mimecast, Proofpoint 같은 게이트웨이 뒤의 주소도 검증'], link: '캐치올 검증 방식 알아보기' },
      { title: '개발자용 API', body: '가입 양식과 앱에서 이메일 주소를 검증할 수 있습니다.', points: ['한 번 호출로 주소 1개 또는 리스트 전체', 'API 키는 대시보드에서 발급'], link: 'API 문서 보기' },
      { title: 'CRM 및 앱 연동', body: '정리된 연락처를 HubSpot, Mailchimp 등으로 보낼 수 있습니다.', points: ['지금 쓰는 도구와 연동', '그 밖의 도구는 Zapier와 n8n으로 연결'], link: '모든 연동 보기' },
      { title: '사용한 만큼만 결제', body: '모든 가격을 공개합니다. 크레딧에는 유효기간이 없습니다.', points: ['월 약정 없음', '필요할 때만 추가 구매'], link: '전체 요금 보기' },
      { title: '우선 지원', body: '막히는 부분이 있으면 엔지니어가 직접 도와드립니다.', points: ['봇이 아닌 실제 담당자가 답변', '이메일 또는 문의 양식으로 연락'], link: '지원팀에 문의하기' },
    ],
    preview: {
      done: '완료',
      deliverable: '전송 가능',
      undeliverable: '전송 불가',
      otherTools: '다른 도구',
      risky: '위험',
      credit: '크레딧 1개',
      email: '이메일 1개',
      creditNote: '캐치올 검증 포함',
      reply: '24시간',
      replyNote: '보통 이 시간 안에 답변합니다.',
    },
  },
  pricing: {
    id: 'pricing',
    claimTop: '낮은 가격,',
    claimBottom: '높은 가치',
    fallbackTitle: '미국 달러 기준의 단순한 요금',
    priceLine: (p) => `이메일 10,000개에 ${p}이며, 캐치올 검사도 포함됩니다.`,
    claim: { before: '', link: '다른 검증 도구와 요금 비교하기', after: '' },
    text: '숨은 수수료가 없습니다. 발송량에 맞춰 일회성 크레딧 패키지나 월간 플랜을 고를 수 있습니다.',
  },
  switcher: {
    id: 'alternatives',
    title: '다른 검증 도구에서 전환하려고 하십니까?',
    intro: 'Giggal.ai와 다른 이메일 검증 도구를 캐치올 처리, 요금, 정확도 측면에서 비교해 보십시오.',
    items: [
      { name: 'ZeroBounce', href: '/ko/zerobounce-alternative', blurb: 'ZeroBounce가 “위험”으로 표시하는 캐치올 주소에도 결과를 제공합니다.' },
      { name: 'NeverBounce', href: '/ko/neverbounce-alternative', blurb: '사용한 만큼만 결제하며, 크레딧에는 유효기간이 없습니다.' },
      { name: 'Snov.io', href: '/ko/snovio-alternative', blurb: '아웃리치 플랫폼의 부가 기능이 아닌 검증 전용 도구입니다.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/ko/compare/zerobounce-vs-neverbounce', blurb: '캐치올 처리, 요금, 크레딧 측면에서 두 도구를 비교합니다.' },
    ],
    all: '검증 도구 28개 전체 비교하기(영어)',
  },
  integrations: {
    title: '마케팅 도구와 연동',
    sub: 'Giggal.ai는 주요 CRM 및 이메일 서비스 제공업체(ESP)와 직접 연동되어 정리된 연락처를 자동으로 동기화합니다.',
    more: '그 외 80개 이상',
    alt: (n) => `Giggal.ai 이메일 검증과 ${n} 연동`,
  },
  reviewBadges: REVIEW_BADGES.ko,
  reviewWall: REVIEW_WALL.ko,
  mcp: MCP.ko,
  faq: {
    title: '자주 묻는 질문',
    sub: '캐치올 검사, 정확도, 요금, 시작 방법에 관한 짧은 답변입니다.',
    more: '다른 질문이 있으십니까?',
    moreLink: '메시지 보내기',
    items: [
      {
        q: 'Giggal.ai는 다른 검증 도구와 무엇이 다릅니까?',
        a: 'Giggal.ai는 캐치올 도메인의 주소와 보안 이메일 게이트웨이(SEG) 뒤에 있는 주소에도 유효 또는 무효로 분명한 결과를 제공합니다. SEG의 예로는 Mimecast, Proofpoint, Barracuda가 있습니다. 다른 도구는 캐치올 주소를 “위험”으로, SEG 뒤의 주소를 “알 수 없음”으로 표시하고 확인을 멈춥니다. 일반적인 영업·마케팅 리스트에서는 연락처의 약 30%가 캐치올 도메인에 있습니다.',
      },
      {
        q: '검증 정확도는 어느 정도입니까?',
        a: '비즈니스 이메일 리스트에서 약 98.5%입니다. 정리한 리스트의 반송률은 보통 3% 미만입니다. 결과가 “알 수 없음”이면 크레딧을 돌려드립니다.',
      },
      {
        q: '크레딧은 어떻게 차감됩니까?',
        a: '주소 하나를 검사할 때마다 크레딧 1개를 씁니다. 주소 종류와 상관없이 같으며, 캐치올 도메인이나 게이트웨이 뒤에 있는 주소도 마찬가지입니다. 크레딧에는 유효기간이 없습니다. 처음 크레딧 1,000개는 무료이며 신용카드는 필요 없습니다.',
      },
      {
        q: '파일을 업로드할 수 있습니까?',
        a: '네. CSV 또는 Excel 파일로 파일당 최대 50,000개 주소를 올릴 수 있습니다. 큰 리스트도 몇 분 안에 결과가 나옵니다. 정리된 리스트는 CSV로 다운로드할 수 있습니다.',
      },
      {
        q: 'API가 있습니까?',
        a: '네. 단일 검사와 대량 이메일 검증에 쓸 수 있는 REST API가 있습니다. MCP 서버도 있어 Claude, ChatGPT, Cursor에서 이메일 주소를 검사할 수 있습니다.',
      },
      {
        q: '계정 없이 주소 하나만 검사할 수 있습니까?',
        a: '네. 무료 이메일 유효성 검사 도구를 쓰면 됩니다. 계정과 신용카드가 필요 없고, 상대방에게 메일이 가지도 않습니다.',
      },
    ],
  },
  ctaHeadline: '이메일 검증 1,000건을 무료로 시작하기',
}

export default function HomeKo() {
  return <HomeL10n locale="ko" content={content} />
}
