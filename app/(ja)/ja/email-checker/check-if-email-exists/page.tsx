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
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/ja'

// The "how do I check that this address exists" question:
// メールアドレスが存在するか確認 200, メールアドレスが有効か確認する方法 90,
// メールアドレス 生きてるか確認 80, plus the 仕組み (how it works) and 安全
// (is it safe) variants for the FAQ (SEO-Plan/i18n-batch3-ja-keyword-plan.md
// sections 1 and 2). Modelled on the Indonesian child
// (/id/cek-email-valid/cara-cek-email-aktif): the page answers in the first
// paragraph, embeds the checker and lists four methods with their limits.
// The test-email method is named as unreliable. No figures beyond what the
// method itself states. The "not stored permanently" line comes from the
// Terms of Service, section 12.

const PATH = '/ja/email-checker/check-if-email-exists'
const TITLE = 'メールアドレスが存在するか確認する4つの方法'
const DESC =
  'メールアドレスが存在するか、有効かを確認する4つの方法と、それぞれの限界を説明します。メールを送らずにメールボックスを確認できる無料チェッカーも使えます。キャッチオールドメインにも対応しています。'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
}

const steps = [
  {
    name: 'メールアドレスチェッカーでメールボックスを確認する（メールは送りません）',
    text: 'メールアドレスチェッカーは、そのドメインのメールサーバーに、アドレスが存在するかを問い合わせます。相手にメッセージは一切送りません。',
  },
  {
    name: 'メールアドレスの形式を確認する',
    text: '正しいアドレスには、ユーザー名、1つの@、「.co.jp」などの末尾まで入ったドメイン（例：company.co.jp）があります。ドメインの入力ミスが1文字あるだけで、アドレスは使えなくなります。ただし、形式が正しくても、メールボックスが存在するとは限りません。',
  },
  {
    name: 'ドメインのMXレコードを確認する',
    text: 'MXレコードは、そのドメインのメールを受け取るサーバーを示すDNSの設定です。ドメインにMXレコードがなければ、そのドメインのメールボックスはメールを受け取れません。DNSの検索で数秒で確認できます。ただし、MXレコードがあっても、特定のメールボックスが存在する証明にはなりません。',
  },
  {
    name: 'テストメールを送ってバウンスを待つ（確実ではない方法）',
    text: '多くの解説がこの方法を紹介しています。しかし、キャッチオールドメインでは、サーバーがすべての宛先を受け付けます。メールボックスが存在しなくてもバウンスしません。つまり、バウンスがないことは何の証明にもなりません。この方法が使えるのはキャッチオールドメインではない場合だけです。また、バウンスが発生するたびに送信者レピュテーションが下がります。',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'メールを送らずに、メールアドレスが存在するか確認するにはどうすればよいですか？',
    a: 'このページのメールアドレスチェッカーにアドレスを入力してください。ツールがメールサーバーにメールボックスが存在するかを問い合わせます。メッセージは一切送りません。結果（有効、無効、不明）は数秒で表示されます。',
  },
  {
    q: '形式が正しければ、メールアドレスは有効ですか？',
    a: 'そうとは限りません。形式が正しいとは、ユーザー名、@、ドメインがそろっているという意味だけです。形式が正しくても、メールサーバーのないドメインや、作成されていないメールボックスを指している場合があります。メールアドレスが有効か確認するには、メールボックスまで確認する必要があります。',
  },
  {
    q: '送ったメールが戻ってこなければ、そのメールアドレスは生きていますか？',
    a: 'そうとは限りません。キャッチオールドメインでは、サーバーがすべてのアドレスを受け付け、バウンスを返しません。エラーメッセージが届かないことは何の証明にもなりません。このような場合は、キャッチオールドメインの検証が必要です。',
  },
  {
    q: 'メールアドレスの存在確認はどのような仕組みですか？',
    a: 'まずアドレスの形式を確認し、次にドメインのMXレコードからメールサーバーを特定します。そのうえで、メールサーバーに宛先のメールボックスが存在するかを問い合わせます。メッセージ本文は送りません。キャッチオールドメインでは、サーバーとメールボックスから追加のシグナルを確認します。',
  },
  {
    q: 'メールアドレスの存在確認は安全ですか？',
    a: '確認の際にメッセージは送らないため、相手の受信トレイには何も届きません。検証のために送信されたメールアドレスは安全に処理され、永続的には保存されません（利用規約の第12条）。',
  },
  {
    q: '結果が「不明」になるのはなぜですか？',
    a: 'サーバーが時間内に応答しなかった場合、新しい送信者を一時的に拒否するグレーリスティングを行っている場合、すべてのメッセージを受け付けるセキュアメールゲートウェイ（SEG）の背後にある場合です。時間をおいて再度試すか、キャッチオールドメインの完全な検証を使ってください。',
  },
  {
    q: 'メールアドレスチェッカーで持ち主はわかりますか？',
    a: 'わかりません。メールサーバーは、メールボックスが存在するかどうかを答えるだけです。持ち主の名前は返しません。ドメインから会社やメールサービスはわかりますが、個人はわかりません。',
  },
  {
    q: '存在しないメールアドレスはどうすればよいですか？',
    a: 'リストから削除し、二度と送信しないでください。存在しないメールボックスへの送信は、そのたびにドメインのレピュテーションを下げます。大切な連絡先であれば、最新のアドレスを探してください。',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function CheckIfEmailExistsJaPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('ja', [
          { name: 'メールアドレスの存在確認', path: '/ja/email-checker' },
          { name: '存在するか確認する方法', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'メールアドレスが存在するか確認する方法',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="ja" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/ja/email-checker" className="hover:underline">メールアドレスの存在確認</Link> › 存在するか確認する方法
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          メールアドレスが存在するか確認する方法
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          メールアドレスが存在するのは、そのメールボックスが作成されていて、現在も有効な場合です。これはメールを送らずに確認できます。{''
          }下のツールがその確認を行い、数秒で結果を表示します。アドレスが有効かどうかの答えは、そのドメインのメールサーバーから得られます。{''
          }キャッチオールドメインはすべてのアドレスを受け付けるため、追加のチェックが必要です。このツールはそのチェックも行います。
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
          このメールアドレスの存在確認は無料で、登録は不要です。
          <Link href="/ja/email-checker" className={link}>メールアドレスの存在確認</Link>のページと同じツールです。
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>方法{i + 1}：{s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              最も確実で速い方法ですが、限界もあります。知らない送信者に応答しないサーバーがあります（グレーリスティング。新しい送信者を一時的に拒否する仕組みです）。{''
              }一方で、どのアドレスにも「存在する」と答えるサーバーもあります。前者の場合、結果は「不明」になるため、時間をおいて再度試してください。{''
              }後者の場合、そのドメインはキャッチオールドメインです。下で説明する手順が必要になります。
            </p>
          )}
          {i === 2 && (
            <p className={proseP}>
              正しいMXレコードがあり、応答するサーバーがあることは、最低限の条件です。この条件を満たさなければ、ほかのチェックをせずにそのアドレスを除外できます。{''
              }条件を満たしていても、特定のメールボックスを確認するには方法1が必要です。
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>メールが戻ってこなければ、そのメールアドレスは生きていますか？</h2>
        <p className={proseP}>
          そうとは言えません。キャッチオールドメインでは、サーバーがすべての宛先を受け付けます。メールボックスが存在しなくても、メールは戻ってきません。{''
          }メールは誰も読まないフォルダに入るか、通知なしに削除されます。つまり、バウンスがないことは証明になりません。{''
          }形式とMXレコードでも判断できません。どちらもアドレスとドメインを確認するだけで、メールボックスは確認しないためです。{''
          }Giggal.aiの
          <Link href="/ja/catch-all-verification" className={link}>
            キャッチオールドメインの検証
          </Link>
          は、サーバーとメールボックスから追加のシグナルを確認します。この場合でも、結果は有効か無効かで表示されます。
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>存在確認でわからないこと：メールアドレスの持ち主</h2>
        <p className={proseP}>
          メールサーバーは、メールボックスの存在を認めるか拒否するだけです。持ち主の名前は返しません。{''
          }メールアドレスと個人を結びつける公開データベースもありません。確認でわかるのはドメイン、つまり会社やメールサービスです。{''
          }Giggal.aiの完全な検証では、役割アドレス（info@など）、使い捨てメールアドレス、無料メールサービスのアドレスかどうかも表示します。{''
          }持ち主を探す場合は、会社のアドレスの形式（例：firstname.lastname@）を、会社のサイトやLinkedInなどの公開プロフィールと照らし合わせてください。
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>メールアドレスが存在しない場合の対応</h2>
        <p className={proseP}>
          そのアドレスをリストから削除し、再送しないでください。存在しないメールボックスへのメールは、すべてハードバウンス（恒久的に拒否されたメール）になります。{''
          }メールサービスは、ドメインが信頼できる送信者かどうかを判断するときに、ハードバウンスを数えます。大切な連絡先であれば、最新のアドレスを探してください。{''
          }リスト全体でメールアドレスが生きてるか確認したい場合は、送信前に
          <Link href="/ja/bulk-email-verifier" className={link}>
            メールアドレスの一括検証
          </Link>
          を使ってください。すべての行をチェックします。
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>よくある質問</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="ja" headline="メールリスト全体をチェックする" />
      <FooterL10n locale="ja" />
    </main>
  )
}
