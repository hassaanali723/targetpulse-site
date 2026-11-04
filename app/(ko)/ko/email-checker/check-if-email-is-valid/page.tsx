import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/ko'

// The "how do I check that this address is valid" question:
// 유효한 이메일 주소 확인 20, 이메일 주소 존재 확인 10, plus the
// "why a test email is unreliable" angle (SEO-Plan/i18n-batch4-ko-keyword-plan.md).
// Modelled on the Japanese child (/ja/email-checker/check-if-email-exists):
// the page answers in the first paragraph, embeds the checker and lists four
// methods with their limits. The test-email method is named as unreliable.
// No figures beyond what the method itself states. The "not stored
// permanently" line comes from the Terms of Service, section 12.

const PATH = '/ko/email-checker/check-if-email-is-valid'
const TITLE = '이메일 주소가 유효한지 확인하는 방법 4가지'
const DESC =
  '이메일 주소가 유효한지, 실제로 존재하는지 확인하는 방법 4가지와 각 방법의 한계를 설명합니다. 메일을 보내지 않고 메일함을 확인하는 무료 이메일 유효성 검사 도구도 쓸 수 있습니다.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
}

const steps = [
  {
    name: '이메일 유효성 검사 도구로 메일함 확인하기(메일을 보내지 않음)',
    text: '이메일 유효성 검사 도구는 해당 도메인의 메일 서버에 그 주소의 메일함이 있는지 묻습니다. 상대방에게는 어떤 메시지도 보내지 않습니다.',
  },
  {
    name: '이메일 주소 형식 확인하기',
    text: '올바른 주소에는 사용자 이름, @ 하나, “.co.kr”처럼 끝부분까지 갖춘 도메인(예: company.co.kr)이 있습니다. 도메인에 오타가 한 글자만 있어도 그 주소는 쓸 수 없습니다. 다만 형식이 올바르다고 해서 메일함이 있다는 뜻은 아닙니다.',
  },
  {
    name: '도메인의 MX 레코드 확인하기',
    text: 'MX 레코드는 해당 도메인의 메일을 받는 서버를 알려 주는 DNS 설정입니다. 도메인에 MX 레코드가 없으면 그 도메인의 메일함은 메일을 받을 수 없습니다. DNS 조회로 몇 초 만에 확인할 수 있습니다. 다만 MX 레코드가 있어도 특정 메일함이 있다는 증거는 되지 않습니다.',
  },
  {
    name: '테스트 메일을 보내고 반송을 기다리기(믿을 수 없는 방법)',
    text: '많은 안내 글이 이 방법을 소개합니다. 하지만 캐치올(catch-all) 도메인에서는 서버가 모든 수신자를 받아들이므로, 메일함이 없어도 메일이 반송되지 않습니다. 따라서 반송이 없다는 것은 아무것도 증명하지 못합니다. 이 방법은 캐치올 도메인이 아닌 경우에만 의미가 있습니다. 또 반송이 생길 때마다 발신자 평판이 떨어집니다.',
  },
]

const faqs: FaqItem[] = [
  {
    q: '메일을 보내지 않고 이메일 주소가 존재하는지 확인하려면 어떻게 합니까?',
    a: '이 페이지의 이메일 유효성 검사 도구에 주소를 입력하십시오. 도구가 메일 서버에 메일함이 있는지 묻고, 메시지는 보내지 않습니다. 결과(유효, 무효, 알 수 없음)는 몇 초 안에 표시됩니다.',
  },
  {
    q: '형식이 올바르면 유효한 이메일 주소입니까?',
    a: '꼭 그렇지는 않습니다. 형식이 올바르다는 것은 사용자 이름, @, 도메인이 갖춰져 있다는 뜻일 뿐입니다. 형식이 올바르더라도 메일 서버가 없는 도메인이나 만들어지지 않은 메일함을 가리킬 수 있습니다. 유효한 이메일 주소인지 알려면 메일함까지 확인해야 합니다.',
  },
  {
    q: '보낸 메일이 반송되지 않으면 그 이메일 주소는 유효합니까?',
    a: '꼭 그렇지는 않습니다. 캐치올 도메인에서는 서버가 모든 주소를 받아들이고 반송 메시지를 보내지 않습니다. 오류 메시지가 오지 않는다는 것은 아무것도 증명하지 못합니다. 이런 경우에는 캐치올 검증이 필요합니다.',
  },
  {
    q: '이메일 주소 존재 확인은 어떻게 작동합니까?',
    a: '먼저 주소 형식을 확인하고, 도메인의 MX 레코드로 메일 서버를 찾습니다. 그다음 메일 서버에 해당 메일함이 있는지 묻습니다. 메시지 본문은 보내지 않습니다. 캐치올 도메인에서는 서버와 메일함에서 추가 신호를 확인합니다.',
  },
  {
    q: '이메일 주소 존재 확인은 안전합니까?',
    a: '확인할 때 메시지를 보내지 않으므로 상대방의 받은편지함에는 아무것도 도착하지 않습니다. 검증을 위해 입력한 이메일 주소는 안전하게 처리되며 영구적으로 저장되지 않습니다(이용약관 제12조).',
  },
  {
    q: '결과가 “알 수 없음”으로 나오는 이유는 무엇입니까?',
    a: '서버가 제시간에 응답하지 않았거나, 새로운 발신자를 일시적으로 거부하는 그레이리스팅을 쓰거나, 주소가 모든 메시지를 받아들이는 보안 이메일 게이트웨이(SEG) 뒤에 있는 경우입니다. 시간을 두고 다시 시도하거나 캐치올 검증을 이용하십시오.',
  },
  {
    q: '이메일 유효성 검사로 주소의 주인을 알 수 있습니까?',
    a: '알 수 없습니다. 메일 서버는 메일함이 있는지만 답하고 주인의 이름은 알려 주지 않습니다. 도메인으로 회사나 메일 서비스는 알 수 있지만 개인은 알 수 없습니다.',
  },
  {
    q: '존재하지 않는 이메일 주소는 어떻게 해야 합니까?',
    a: '리스트에서 지우고 다시는 보내지 마십시오. 존재하지 않는 메일함으로 메일을 보낼 때마다 도메인 평판이 떨어집니다. 중요한 연락처라면 최신 주소를 찾아보십시오.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function CheckIfEmailIsValidKoPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('ko', [
          { name: '이메일 유효성 검사', path: '/ko/email-checker' },
          { name: '유효한지 확인하는 방법', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: '이메일 주소가 유효한지 확인하는 방법',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="ko" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/ko/email-checker" className="hover:underline">이메일 유효성 검사</Link> › 유효한지 확인하는 방법
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          이메일 주소가 유효한지 확인하는 방법
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          이메일 주소는 메일함이 만들어져 있고 지금도 사용 중일 때 유효합니다. 이는 메일을 보내지 않고도 확인할 수 있습니다.
          아래 도구로 확인하면 몇 초 안에 결과가 나옵니다. 주소가 유효한지에 대한 답은 해당 도메인의 메일 서버에서 얻습니다.
          캐치올(catch-all) 도메인은 모든 주소를 받아들이므로 추가 검사가 필요하며, 이 도구는 그 검사도 합니다.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          이 이메일 주소 존재 확인 도구는 무료이며 가입이 필요 없습니다.{' '}
          <Link href="/ko/email-checker" className={link}>이메일 유효성 검사</Link> 페이지와 같은 도구입니다.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>방법 {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              가장 확실하고 빠른 방법이지만 한계도 있습니다. 어떤 서버는 처음 보는 발신자에게 바로 응답하지 않습니다(그레이리스팅이라고 하며, 새로운 발신자를 일시적으로 거부하는 방식입니다).
              반대로 어떤 서버는 모든 주소에 “있음”이라고 답합니다. 앞의 경우에는 결과가 “알 수 없음”으로 나오므로 시간을 두고 다시 시도하십시오.
              뒤의 경우 그 도메인은 캐치올 도메인이며, 아래에서 설명하는 단계가 필요합니다.
            </p>
          )}
          {i === 2 && (
            <p className={proseP}>
              올바른 MX 레코드와 응답하는 서버는 최소 조건입니다. 이 조건을 갖추지 못한 주소는 다른 검사 없이 제외할 수 있습니다.
              조건을 갖췄더라도 특정 메일함을 확인하려면 방법 1이 필요합니다.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>보낸 메일이 반송되지 않으면 유효한 이메일 주소입니까?</h2>
        <p className={proseP}>
          그렇다고 할 수 없습니다. 캐치올 도메인에서는 서버가 모든 수신자를 받아들이므로, 메일함이 없어도 메일이 반송되지 않습니다.
          메일은 아무도 읽지 않는 폴더로 가거나 알림 없이 삭제됩니다. 따라서 반송이 없다는 것은 증거가 되지 않습니다.
          형식과 MX 레코드로도 판단할 수 없습니다. 둘 다 주소와 도메인만 확인할 뿐 메일함은 확인하지 않기 때문입니다.
          Giggal.ai의{' '}
          <Link href="/ko/catch-all-verification" className={link}>
            캐치올 검증
          </Link>
          은 서버와 메일함에서 추가 신호를 확인하고, 이 경우에도 유효 또는 무효로 결과를 보여 줍니다.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>이메일 유효성 검사로 알 수 없는 것: 주소의 주인</h2>
        <p className={proseP}>
          메일 서버는 해당 메일함으로 오는 메일을 받아들이거나 거부할 뿐, 주인의 이름은 알려 주지 않습니다.
          이메일 주소와 개인을 연결하는 공개 데이터베이스도 없습니다. 확인으로 알 수 있는 것은 도메인, 즉 회사나 메일 서비스입니다.
          Giggal.ai의 전체 검증은 역할 기반 주소(info@ 등), 일회용 이메일 주소, 무료 메일 서비스 주소인지도 표시합니다.
          주인을 찾으려면 회사의 주소 형식(예: firstname.lastname@)을 회사 웹사이트나 LinkedIn 같은 공개 프로필과 비교해 보십시오.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>이메일 주소가 존재하지 않을 때 할 일</h2>
        <p className={proseP}>
          그 주소를 리스트에서 지우고 다시 보내지 마십시오. 존재하지 않는 메일함으로 보낸 메일은 모두 하드 바운스(영구적으로 거부된 메일)가 됩니다.
          메일 서비스 제공업체는 도메인이 믿을 수 있는 발신자인지 판단할 때 하드 바운스를 셉니다. 중요한 연락처라면 최신 주소를 찾아보십시오.
          리스트 전체에서 유효한 이메일 주소를 확인하려면 보내기 전에{' '}
          <Link href="/ko/bulk-email-verifier" className={link}>
            대량 이메일 검증
          </Link>
          을 이용하십시오. 모든 행을 검사합니다.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>자주 묻는 질문</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="ko" headline="이메일 리스트 전체 검사하기" />
      <FooterL10n locale="ko" />
    </main>
  )
}
