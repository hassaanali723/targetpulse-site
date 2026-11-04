import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Korean catch-all page. Title from the keyword plan ("캐치올(catch-all)
// 이메일 검증", SEO-Plan/i18n-batch4-ko-keyword-plan.md). 캐치올 has no other
// meaning in Korean, so it is written 캐치올(catch-all) at first mention and
// then 캐치올 도메인 / 캐치올 이메일. Other tools label these addresses
// "risky" / "accept-all"; SEG-protected addresses "unknown".

const PATH = '/ko/catch-all-verification'
const TITLE = '캐치올(catch-all) 이메일 검증'
const DESC =
  '캐치올(catch-all) 도메인과 accept-all 도메인의 이메일 주소를 유효 또는 무효로 검증합니다. Mimecast, Proofpoint 뒤의 주소도 검증하며 정확도는 98.5%, 이메일 1개당 크레딧 1개입니다.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: '캐치올 이메일 검증',
  h1Accent: '캐치올(catch-all) 이메일 검증:',
  h1Tail: '캐치올 주소가 유효한지 확인',
  intro:
    '캐치올 도메인은 모든 주소에 “있음”이라고 답하는 도메인으로, accept-all(모든 주소 수신) 도메인이라고도 합니다. 그래서 대부분의 이메일 검증 도구는 이런 주소를 “위험” 또는 “accept-all”로 표시하고 확인을 멈춥니다. Giggal.ai는 메일함이 실제로 있는지 확인해 유효 또는 무효로 결과를 제공하며, 정확도는 98.5%입니다. Mimecast, Proofpoint 같은 보안 이메일 게이트웨이(SEG) 뒤에 있는 주소도 검증합니다. 다른 도구는 이런 주소를 “알 수 없음”으로 표시합니다.',
  toolLine: (
    <>
      주소 하나만 확인하려면{' '}
      <Link href="/ko/email-checker" className="text-indigo-600 font-bold hover:underline">무료 이메일 유효성 검사 도구</Link>를 이용하십시오.
    </>
  ),
  ctaPrimary: '캐치올 이메일 검증 시작하기',
  ctaSecondary: { label: '요금 보기', href: '/ko/pricing' },
  ctaNote: '무료 크레딧 1,000개로 시작할 수 있습니다. 신용카드는 필요 없습니다.',
  card: {
    kicker: '정밀 검증 진행 중', title: '리스트 결과', file: 'contacts_2026.csv',
    valid: '39,113', invalid: '10,508', risky: '0',
    note: '일반적인 리스트에서는 주소의 약 30%가 캐치올 도메인에 있습니다. 이 주소를 하나씩 확인합니다. 그중 대부분은 유효한 주소입니다.',
    labels: { valid: '유효', invalid: '무효', risky: '위험' },
  },
  whatKicker: '배경',
  whatTitle: '캐치올 도메인이란 무엇입니까?',
  whatParas: [
    '캐치올 도메인은 존재하지 않는 주소를 포함해 모든 주소로 오는 메일을 받아들이는 도메인입니다. 도메인은 @ 뒤에 오는 부분입니다. 예를 들어 company.example가 캐치올 도메인이라면, 메일 서버는 ann@company.example, sales@company.example, qx7z41@company.example를 모두 받아들입니다. 실제 사람이 Ann 한 명뿐이어도 세 주소 모두에 “있음”이라고 답합니다.',
    '회사는 메일을 하나도 놓치지 않으려고 이렇게 설정합니다. 예를 들어 보내는 사람이 이름 철자를 틀렸을 때도 메일을 받기 위해서입니다. 일반적인 영업·마케팅 리스트에서는 연락처의 약 30%가 캐치올 도메인에 있습니다.',
    '대부분의 검증 도구는 이 설정을 발견하면 확인을 멈추고, 해당 도메인의 모든 주소를 “위험” 또는 “accept-all”로 표시합니다. 그러면 선택지는 두 가지뿐입니다. 메일을 보내 반송, 스팸 트랩(스팸 발신자를 찾기 위한 주소), 발신자 평판 하락의 위험을 감수하거나, 연락처를 지워 실제 고객을 잃는 것입니다.',
  ],
  sameH3: '캐치올과 accept-all은 같은 뜻입니다',
  sameParas: [
    '어떤 검증 도구는 이런 주소를 “accept-all”로, 다른 도구는 “위험”으로 표시합니다. 설정 자체는 catch-all, catchall, accept-all이라고 부릅니다. 세 이름 모두 어떤 수신자에게나 250 OK를 돌려주는 메일 서버를 뜻합니다. 250 OK는 “이 메일을 받겠습니다”라는 서버의 응답 코드입니다. 이전에 쓰던 도구가 어떤 표시를 썼든 캐치올 검증은 같은 것을 확인합니다.',
  ],
  howKicker: '작동 방식',
  howTitle: 'Giggal.ai가 캐치올 이메일을 검증하는 방법',
  howText: '모든 캐치올 주소는 세 가지 검사를 거칩니다. 세 검사를 합쳐 유효 또는 무효라는 하나의 결과를 냅니다. 읽어야 할 기술 보고서는 없습니다.',
  signals: [
    { title: '메일함 확인', body: '도메인이 메일을 받는지만 보지 않고, 메일함 자체가 실제로 있는지 확인합니다. 일반 검사는 서버가 모든 주소에 주는 “있음” 응답을 받으면 멈춥니다. Giggal.ai는 결과가 나올 때까지 계속 확인합니다.' },
    { title: '도메인 신뢰 신호', body: '도메인 설정을 확인합니다. SPF, DKIM, DMARC 레코드, SSL 인증서, 호스팅을 봅니다. 제대로 설정된 도메인일수록 실제 메일함이 있을 가능성이 높습니다.' },
    { title: '이메일 게이트웨이 처리', body: '일부 주소는 Mimecast, Proofpoint, Barracuda 같은 보안 이메일 게이트웨이(SEG) 뒤에 있습니다. 다른 도구는 게이트웨이 너머를 보지 못해 이런 주소를 “알 수 없음”으로 표시합니다. Giggal.ai는 이런 주소를 직접 검증합니다.' },
  ],
  compareKicker: '분명한 결과',
  compareTitle: '추측 대신 확인된 결과',
  compareText: '이메일 주소 48,028개가 담긴 같은 예시 리스트를 일반적인 검증 도구와 Giggal.ai로 검사한 결과입니다.',
  compare: {
    typicalLabel: '일반적인 검증 도구', giggalLabel: 'Giggal.ai', count: '48,028개 검사', catchAllLabel: '캐치올',
    typical: ['31,566', '5,982', '10,480'], giggal: ['39,950', '8,078', '0'],
    typicalNote: '안심하고 메일을 보낼 수 없는 캐치올 연락처가 10,480개 남습니다. 약 80%는 실제 주소이지만, 어느 주소가 실제인지 알 수 없습니다.',
    giggalNote: '캐치올 그룹에서 전송 가능한 연락처가 8,384개 늘어납니다. 모든 주소에 분명한 결과가 있습니다.',
  },
  whoKicker: '대상',
  whoTitle: '캐치올 이메일 검증을 쓰는 팀',
  audience: [
    { title: '콜드메일 아웃리치 팀', body: '검증된 연락처에만 메일을 보냅니다. 반송이 줄어 발신 도메인의 평판을 지킬 수 있습니다.' },
    { title: '마케팅 대행사', body: '모든 고객사 리스트를 같은 캐치올 검증 도구로 검사해 결과와 보고서를 일관되게 유지합니다.' },
    { title: '영업 운영팀', body: '시퀀스 메일과 제품 소식을 실제로 받는 연락처만 CRM에 남깁니다.' },
    { title: '뉴스레터 발행자', body: '실제처럼 보이지만 메일을 받지 않는 주소를 지워 열람률과 클릭률을 정확하게 유지합니다.' },
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    { q: '캐치올 이메일 도메인이란 무엇입니까?', a: '존재하지 않는 주소를 포함해 모든 주소로 오는 메일을 받아들이는 도메인입니다. 메일 서버가 어떤 주소에나 “있음”이라고 답하므로, 일반 검사로는 실제 메일함이 있는지 알 수 없습니다.' },
    { q: '캐치올 이메일 검증에 크레딧이 더 필요합니까?', a: '아닙니다. 캐치올 검증도 일반 검증과 같이 이메일 1개당 크레딧 1개입니다.' },
    { q: '캐치올 검증의 정확도는 어느 정도입니까?', a: '일반적인 비즈니스 리스트에서 약 98.5%입니다. 서버의 첫 응답만 보지 않고 메일함이 있는지를 기준으로 결과를 내므로, 실제로 메일을 보낼 때도 맞는 결과입니다.' },
    { q: '캐치올 검사 때문에 리스트의 나머지 처리가 느려집니까?', a: '아닙니다. 캐치올 검사는 일반 검증이 끝난 뒤가 아니라 동시에 실행됩니다. 리스트 전체가 같은 시간 안에 끝납니다.' },
    { q: '다른 도구로 정리한 리스트에서 캐치올 이메일만 검증할 수 있습니까?', a: '네. 대시보드에서 “Catch-All Detection”을 열고 확인할 주소만 붙여 넣거나 업로드한 뒤 검증하면 됩니다. 이 경우에도 이메일 1개당 크레딧 1개입니다.' },
    { q: 'Giggal.ai의 캐치올 검사 결과가 “알 수 없음”으로 나오면 어떻게 됩니까?', a: '드문 경우입니다. 결과를 얻지 못하면 크레딧은 자동으로 환불됩니다. 결과가 나온 검증에 대해서만 비용을 냅니다.' },
  ],
  ctaHeadline: '리스트 하나를 검사해 결과를 비교해 보십시오',
}

export default function CatchAllVerificationKoPage() {
  return <CatchAllPageL10n locale="ko" content={content} />
}
