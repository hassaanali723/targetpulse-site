import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Japanese home. The title follows the keyword plan ("メールアドレス検証ツール
// （一括チェック対応）", SEO-Plan/i18n-batch3-ja-keyword-plan.md section 2).
// The main search demand (メールアドレス 存在確認) sits on /ja/email-checker,
// so the hero sends the visitor to the free checker first and to sign-up
// second. "メールアドレス確認" (people looking up their own address) is a
// different search and is not used as a head term. Only the alternatives
// registered for ja are listed.

const DESC =
  'メールアドレスが実在するかを確認する検証ツールです。キャッチオールドメインにも対応しています。一括チェック、API、1,000件分の無料クレジットを用意しています。リストのクリーニング後のバウンス率は3%未満です。'

const TITLE = 'メールアドレス検証ツール（一括チェック対応）'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/ja', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/ja',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'メールアドレス検証で',
  h1Accent: 'バウンスを減らす',
  heroSub: (
    <>
      1件のアドレスでも、リスト全体でも検証できます。実在するメールアドレスがどれかがわかります。
      <Link href="/ja/catch-all-verification" className={heroLink}>キャッチオールドメイン</Link>のアドレスにも対応しています。
    </>
  ),
  rating: { on: '', reviews: (n) => `（レビュー${n}件）` },
  email: { label: '確認したいメールアドレス', placeholder: 'name@company.co.jp', button: '無料でチェック' },
  listQuestion: 'リスト全体をクリーニングしたい場合は',
  listCta: '1,000件分のメールアドレス検証を無料で試す',
  noCard: 'クレジットカードは不要です。',
  stats: [
    { n: '5億', suf: '+', l: 'チェック済みのメールアドレス' },
    { n: '98.5', suf: '%', l: 'B2Bリストでの精度' },
    { pre: '< ', n: '3', suf: '%', l: 'リストのクリーニング後のバウンス率' },
    { n: '1,000', l: '無料クレジット（カード不要）' },
  ],
  bulk: {
    id: 'bulk',
    title: 'リスト全体のメールアドレスを一括で検証',
    sub: 'リストを一度アップロードするだけです。含まれるすべてのアドレスをチェックします。',
    points: [
      'アドレスごとに有効か無効かを表示',
      'キャッチオールドメインのアドレスにも明確な結果',
      'CSVまたはExcel、1ファイルあたり最大50,000件',
      '完了後にクリーニング済みのリストをダウンロード',
    ],
  },
  catchAll: {
    title: 'キャッチオールドメインのアドレスに特別な確認が必要な理由',
    intro: (
      <>
        企業のメールサーバーの中には、実在するアドレスも存在しないアドレスもすべて受け付けるものがあります。このようなサーバーのドメインを
        <Link href="/ja/catch-all-verification" className={link}>キャッチオールドメイン</Link>と呼びます。多くの検証ツールは、この区別ができません。{''
        }これらのアドレスを「リスクあり」として、判断を利用者に任せます。
      </>
    ),
    others: '多くの検証ツール',
    othersDetail: 'キャッチオールドメイン、結果は不明確',
    ourDetail: 'キャッチオールドメイン、メールボックスあり',
    risky: 'リスクあり',
    deliverable: '配信可能',
    othersText: '送信してバウンスのリスクを負うか、実在するかもしれない連絡先を削除するか、どちらかを選ぶ必要があります。',
    ourText: 'そのアドレスが実在することがわかります。安心してメールを送れます。',
  },
  features: {
    title: 'メールアドレスチェックと検証：一括、API、連携を1つの残高で',
    intro: 'リストのアップロード、APIの呼び出し、CRMとの連携のどれを使っても、同じメールアドレスのチェックが実行されます。',
    items: [
      { title: 'リストを一括でクリーニング', body: 'CSVまたはExcelファイルをアップロードすると、数分で結果が出ます。', points: ['1ファイルあたり最大50,000件', 'クリーニング済みのリストをCSVでダウンロード'], link: 'リストを無料でクリーニング' },
      { title: 'キャッチオールドメインの検証', body: 'キャッチオールドメインにも、「リスクあり」ではなく明確な結果を出します。', points: ['ほかのチェックと同じ1クレジット', 'MimecastやProofpointなどのゲートウェイの背後にあるアドレスにも対応'], link: 'キャッチオールドメイン検証の仕組み' },
      { title: '開発者向けAPI', body: '登録フォームやアプリでメールアドレスをチェックできます。', points: ['1回の呼び出しで1件またはリスト全体', 'APIキーはダッシュボードで確認できます'], link: 'APIドキュメント' },
      { title: 'CRMやアプリとの連携', body: 'クリーニング済みの連絡先をHubSpot、Mailchimpなどに送れます。', points: ['今使っているツールと連携できます', 'そのほかのツールにはZapierとn8n'], link: 'すべての連携を見る' },
      { title: '使った分だけのお支払い', body: '料金はすべて公開しています。クレジットに有効期限はありません。', points: ['月額の契約は不要です', '必要なときだけクレジットを追加購入できます'], link: 'すべての料金を見る' },
      { title: '優先サポート', body: '問題があれば、エンジニアが直接対応します。', points: ['ボットではなく担当者が対応します', 'メールまたはお問い合わせフォームから'], link: 'サポートに問い合わせる' },
    ],
    preview: {
      done: '完了',
      deliverable: '配信可能',
      undeliverable: '配信不可',
      otherTools: 'ほかのツール',
      risky: 'リスクあり',
      credit: '1クレジット',
      email: '1件',
      creditNote: 'キャッチオールドメインの検証を含みます',
      reply: '24時間',
      replyNote: '通常の返信までの時間です。',
    },
  },
  pricing: {
    id: 'pricing',
    claimTop: '低い料金で、',
    claimBottom: '明確な結果を。',
    fallbackTitle: '米ドル建てのシンプルな料金',
    priceLine: (p) => `10,000件で${p}。キャッチオールドメインの検証を含みます。`,
    claim: { before: '', link: 'ほかの検証ツールと比較する', after: '' },
    text: '使った分だけお支払いいただきます。クレジットに有効期限はありません。',
  },
  switcher: {
    id: 'alternatives',
    title: 'ほかの検証ツールからの乗り換えをご検討ですか？',
    intro: 'キャッチオールドメインへの対応、料金、精度の点で、Giggal.aiとほかのメールアドレス検証ツールを比較できます。',
    items: [
      { name: 'ZeroBounce', href: '/ja/zerobounce-alternative', blurb: 'ZeroBounceが「リスクあり」とするキャッチオールドメインのアドレスにも結果を出します。' },
      { name: 'NeverBounce', href: '/ja/neverbounce-alternative', blurb: '使った分だけのお支払いで、クレジットに有効期限はありません。' },
      { name: 'Snov.io', href: '/ja/snovio-alternative', blurb: 'アウトリーチ用プラットフォームの一機能ではなく、検証専用のツールです。' },
      { name: 'ZeroBounce vs NeverBounce', href: '/ja/compare/zerobounce-vs-neverbounce', blurb: 'キャッチオールドメインへの対応、料金、クレジットの点で2つのツールを比較します。' },
    ],
    all: '28の検証ツールを比較する（英語）',
  },
  integrations: {
    title: 'マーケティングツールと連携',
    sub: 'Giggal.aiは主要なCRMやメールマーケティングのプラットフォームと連携し、クリーニング済みの連絡先を自動で同期します。',
    more: 'ほか80以上',
    alt: (n) => `Giggal.aiのメールアドレス検証と${n}の連携`,
  },
  reviewBadges: REVIEW_BADGES.ja,
  reviewWall: REVIEW_WALL.ja,
  mcp: MCP.ja,
  faq: {
    title: 'よくある質問',
    sub: 'キャッチオールドメイン、精度、料金、始め方についての短い回答です。',
    more: 'ほかにご質問がありますか？',
    moreLink: 'メッセージを送る',
    items: [
      {
        q: 'Giggal.aiはほかの検証ツールと何が違いますか？',
        a: 'Giggal.aiは、キャッチオールドメインのアドレスや、セキュアメールゲートウェイ（SEG。Mimecast、Proofpoint、Barracudaなど）の背後にあるアドレスにも、有効か無効かの明確な結果を出します。ほかのツールは、こうしたアドレスを「リスクあり」として確認を止めます。B2Bリストでは、このようなアドレスが全体の約3分の1を占めます。',
      },
      {
        q: '検証の精度はどのくらいですか？',
        a: 'ビジネス用メールアドレスのリストで約98.5%です。リストのクリーニング後のバウンス率は通常3%未満です。結果が「不明」の場合、クレジットは返却されます。',
      },
      {
        q: 'クレジットの仕組みを教えてください。',
        a: '1回のチェックで1クレジットを使います。アドレスの種類は問いません。キャッチオールドメインやゲートウェイの背後にあるアドレスも同じです。クレジットに有効期限はありません。最初の1,000クレジットは無料で、クレジットカードは不要です。',
      },
      {
        q: 'ファイルをアップロードできますか？',
        a: 'できます。CSVまたはExcelで、1ファイルあたり最大50,000件です。大きなリストでも、数分で結果が出ます。クリーニング済みのリストはCSVでダウンロードできます。',
      },
      {
        q: 'APIはありますか？',
        a: 'あります。1件のチェックとメールアドレスの一括検証に使えるREST APIです。MCPサーバーもあり、Claude、ChatGPT、Cursorからアドレスをチェックできます。',
      },
      {
        q: 'アカウントなしで1件だけチェックできますか？',
        a: 'できます。無料のメールアドレスチェッカーを使ってください。アカウントもクレジットカードも不要です。相手にメッセージが届くこともありません。',
      },
    ],
  },
  ctaHeadline: '1,000件分のメールアドレス検証を無料で始める',
}

export default function HomeJa() {
  return <HomeL10n locale="ja" content={content} />
}
