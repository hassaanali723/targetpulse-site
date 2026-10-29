import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Japanese catch-all page. Title and H1 from the keyword plan
// ("キャッチオールドメインのメールアドレス検証",
// SEO-Plan/i18n-batch3-ja-keyword-plan.md section 2). The bare word
// キャッチオール means Japan's export-control law (キャッチオール規制), so every
// title, H1 and H2 says キャッチオールドメイン. Other tools label these
// addresses "risky" / "accept-all", never "unknown".

const PATH = '/ja/catch-all-verification'
const TITLE = 'キャッチオールドメインのメールアドレス検証'
const DESC =
  'キャッチオールドメインとアクセプトオール（accept-all）のドメインのメールアドレスを、有効か無効かで判定します。MimecastやProofpointの背後にも対応し、精度は98.5%、1件1クレジットです。'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'キャッチオールドメインの検証',
  h1Accent: 'キャッチオールドメインの検証：',
  h1Tail: 'アドレスごとに明確な結果を出します',
  intro:
    '多くの検証ツールは、キャッチオールドメインとアクセプトオール（accept-all）のドメインで確認を止めます。Giggal.aiは、各メールボックスが実在するかを確認します。MimecastやProofpointなどのセキュアメールゲートウェイ（SEG）の背後にあるアドレスにも対応しています。精度は98.5%です。',
  toolLine: (
    <>
      1件だけ確認したい場合は、
      <Link href="/ja/email-checker" className="text-indigo-600 font-bold hover:underline">無料のメールアドレスチェッカー</Link>をお使いください。
    </>
  ),
  ctaPrimary: 'キャッチオールドメインのアドレスをチェック',
  ctaSecondary: { label: '料金を見る', href: '/ja/pricing' },
  ctaNote: '1,000件分の無料クレジットから始められます。クレジットカードは不要です。',
  card: {
    kicker: '詳細検証を実行中', title: 'リストの結果', file: 'contacts_2026.csv',
    valid: '39,113', invalid: '10,508', risky: '0',
    note: '平均的なリストでは、約30%のアドレスがキャッチオールドメインにあります。これらを1件ずつ確認します。多くは有効なアドレスです。',
    labels: { valid: '有効', invalid: '無効', risky: 'リスクあり' },
  },
  whatKicker: '背景',
  whatTitle: 'キャッチオールドメインのメールアドレスとは',
  whatParas: [
    'キャッチオールドメインは、届いたメールをすべて受け付けるドメインです。存在しないアドレス宛てのメールも受け付けます。サーバーはどのアドレスにも同じ受信確認を返します。そのため、通常のチェックでは、アドレスの先に実在するメールボックスがあるかがわかりません。',
    '平均的なビジネス用のリストでは、約30%の連絡先がキャッチオールドメインにあります。多くのツールはこのパターンを見つけると確認を止め、すべてを「リスクあり」または「アクセプトオール」とします。その結果、自信を持って使えない連絡先が大量に残ります。',
    'そこで残る選択肢は2つで、どちらも良くありません。送信して、バウンス、スパムトラップ（スパム送信者を見つけるためのアドレス）、レピュテーションの低下のリスクを負うか。連絡先を削除して、実在する顧客を失うか。キャッチオールドメインの検証はこの問題を解決します。推測ではなく、メールボックスが実在するかを確認します。',
  ],
  sameH3: 'キャッチオールドメインとアクセプトオール（accept-all）は同じものです',
  sameParas: [
    'ツールによって「accept all」「catch-all」「catchall」と表記が異なります。どれも同じ設定を指します。すべての宛先に250 OKを返すメールサーバーを持つドメインです。これまでのツールがどの表記を使っていても、解決方法は同じです。その方法をこのページで説明します。',
  ],
  howKicker: '仕組み',
  howTitle: 'Giggal.aiがキャッチオールドメインのアドレスを確認する方法',
  howText: 'キャッチオールドメインの各アドレスに、複数のチェックを行います。これらを合わせて、1つの明確な結果を出します。表示されるのは技術的なレポートではなく、有効か無効かです。',
  signals: [
    { title: 'メールボックスの詳細チェック', body: 'ドメインがすべてのメールを受け付けるかどうかだけでなく、各メールボックスが実在するかを確認します。通常のチェックは一般的な受信確認を見た時点で止まります。Giggal.aiは明確な答えが出るまで確認を続けます。' },
    { title: 'ドメインの信頼性シグナル', body: '各ドメインの設定を確認します。SPF、DKIM、DMARCの各レコード、SSL証明書、ホスティングのレピュテーションです。設定が整ったドメインほど、実在するメールボックスがある可能性が高くなります。' },
    { title: 'セキュアメールゲートウェイ（SEG）', body: 'Mimecast、Proofpoint、Barracudaなどのゲートウェイの背後にあるアドレスも直接確認します。ゲートウェイがあっても、実在するメールボックスかどうかがわかります。' },
  ],
  compareKicker: '明確な結果',
  compareTitle: '推測ではなく、確かな結果へ',
  compareText: '48,000件のアドレスを含む同じリストでの、一般的な検証ツールとGiggal.aiの違いです。',
  compare: {
    typicalLabel: '一般的な検証ツール', giggalLabel: 'Giggal.ai', count: '48,028件をチェック', catchAllLabel: 'キャッチオールドメイン',
    typical: ['31,566', '5,982', '10,480'], giggal: ['39,950', '8,078', '0'],
    typicalNote: '自信を持ってメールを送れないキャッチオールドメインの連絡先が10,000件以上あります。約80%は実在しますが、どれが実在するかはわかりません。',
    giggalNote: 'キャッチオールドメインのグループから、配信可能な連絡先が約8,400件増えます。すべてのアドレスに明確な結果があります。',
  },
  whoKicker: '対象',
  whoTitle: 'キャッチオールドメインの検証を使うチーム',
  audience: [
    { title: 'アウトリーチチーム', body: '検証済みの連絡先にだけメールを送れます。バウンスが減り、返信が増え、送信ドメインの状態を保てます。' },
    { title: 'エージェンシー', body: 'すべてのクライアントのリストを同じツールでクリーニングできます。レポートとメールの到達率を予測しやすくなります。' },
    { title: 'セールスオペレーション', body: 'メールシーケンスや案内を実際に受け取れる連絡先だけをCRMに残せます。' },
    { title: 'ニュースレター', body: '開封率とクリック率を守れます。実在しそうに見えても、メールを受け取らないアドレスを削除できます。' },
  ],
  faqTitle: 'よくある質問',
  faq: [
    { q: 'キャッチオールドメインとは何ですか？', a: '存在しないアドレス宛てのメールも含めて、すべてのメールを受け付けるドメインです。サーバーはどのアドレスにも「このアドレスは存在します」と答えます。そのため、通常のチェックでは特定のメールボックスが実在するかがわかりません。' },
    { q: 'キャッチオールドメインの検証には追加のクレジットが必要ですか？', a: '必要ありません。通常のチェックと同じく、1件あたり1クレジットです。' },
    { q: 'キャッチオールドメインの検証の精度はどのくらいですか？', a: 'ビジネス用メールアドレスのリストで約98.5%です。サーバーの表面的な応答から推測するのではなく、メールボックスが実在するかを確認します。そのため、送信する時点でも結果は正しいままです。' },
    { q: 'リストのほかの部分の処理が遅くなりますか？', a: '遅くなりません。キャッチオールドメインのチェックは、通常の検証の後ではなく、同時に実行されます。リスト全体が同じ時間で終わります。' },
    { q: 'ほかのツールでクリーニングしたリストから、キャッチオールドメインのアドレスだけを確認できますか？', a: 'できます。ダッシュボードで「Catch-All Detection」を開きます。確認したいアドレスだけを貼り付けるかアップロードして、検証を始めてください。料金は同じく1件1クレジットです。' },
    { q: 'キャッチオールドメインのチェックで結果が「不明」になった場合は？', a: 'まれにあります。結果が得られなかった場合、クレジットは自動で返却されます。お支払いは結果が出たチェックの分だけです。' },
  ],
  ctaHeadline: 'リストを1つチェックして、結果を比べてください',
}

export default function CatchAllVerificationJaPage() {
  return <CatchAllPageL10n locale="ja" content={content} />
}
