import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Japanese pricing page. Title starts with "メールアドレス検証の料金" and adds
// the 10,000-credit price. Money is written US$9.90, never converted to yen
// (SEO-Plan/i18n-batch3-ja-terminology.md, Formats).

const PATH = '/ja/pricing'
const TITLE = 'メールアドレス検証の料金：10,000クレジットでUS$9.90'
const DESC =
  'メールアドレス検証の料金は10,000クレジットでUS$9.90、1件あたり最安US$0.0007です。都度購入のほか、10%割引の月額サブスクリプションも選べます。クレジットに有効期限はありません。'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: 'メールアドレス検証の料金',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: '料金',
  h1Lead: 'メールアドレス検証の',
  h1Accent: '料金',
  intro: (
    <>
      使った分だけお支払いいただきます。毎月の固定費も隠れた費用もなく、クレジットに有効期限はありません。{''
      }まずは<strong className="text-indigo-600 font-extrabold">1,000件分の無料トライアルクレジット</strong>から始められます。クレジットカードは不要です。
    </>
  ),
  contactHref: '/ja/contact',
  includedTitle: 'すべてのプランにすべての機能',
  includedText: 'どのプランでもすべての機能を使えます。プランの階層や機能の制限はありません。',
  features: [
    'メールボックスのチェック',
    'ドメインとMXレコードのチェック',
    'セキュアメールゲートウェイ（SEG）の検出',
    '使い捨てメールアドレスの検出',
    '役割アドレス（info@など）の検出',
    'キャッチオールドメインの検証',
    '一括アップロードと一括検証',
    'CSV、Excel、JSONへのエクスポート',
    '重複アドレスの削除',
    '詳しい検証レポート',
    '有効期限のないクレジット',
  ],
  rulesTitle: 'わかりやすい料金体系',
  rulesText: '4つのルールで、料金を明確に、予測しやすくしています。',
  rules: [
    { title: '1クレジット＝1アドレス', body: '1回のチェックで、残高からちょうど1クレジットを使います。キャッチオールドメインのアドレスや、セキュアメールゲートウェイ（SEG）の背後にあるアドレスも同じです。' },
    { title: 'ボリューム割引', body: '購入するクレジットが多いほど、1クレジットあたりの単価が下がります。US$0.0017からUS$0.0007までです。' },
    { title: 'サブスクリプションで10%割引', body: '月額サブスクリプションでは、どのパッケージも自動で10%割引になります。' },
    { title: 'クレジットに有効期限なし', body: 'いつでも使えます。クレジットは必要な間ずっとアカウントに残ります。' },
  ],
  faqTitle: 'よくある質問',
  faqText: 'クレジット、お支払い、返金について。',
  faq: [
    { q: 'どの支払い方法が使えますか？', a: 'Stripeを通じて、主要なクレジットカードとデビットカードをすべてご利用いただけます。料金は米ドル建てです。為替レートはご利用のカード会社が適用します。' },
    { q: 'サブスクリプションはいつでも解約できますか？', a: 'いつでも解約できます。すべてのクレジットはアカウントに残り、それ以降の支払いは発生しません。' },
    { q: 'クレジットがなくなったらどうなりますか？', a: 'いつでも新しいクレジットを購入できます。残高はすぐに更新されます。' },
    { q: '返金は受けられますか？', a: '原則として、クレジットは返金できません。例外的な事情は個別に確認します。結果が「不明」の場合、クレジットは返却されます。詳しくは返金ポリシーをご覧ください。' },
    { q: '最低購入数はありますか？', a: '最小のパッケージは3,000クレジット（US$5.00）です。購入前に、1,000件分の無料トライアルクレジットを使えます。' },
    { q: 'クレジットに有効期限はありますか？', a: 'ありません。クレジットは使い切るまでアカウントに残ります。' },
  ],
  ctaTitle: '1,000件分の無料クレジットで始める',
  ctaText: 'クレジットカードは不要です。最初のメールアドレスを無料でチェックし、数秒で結果を確認できます。',
  ctaButton: '無料クレジットを受け取る',
  ctaHref: '/ja/sign-up',
}

export default function PricingJaPage() {
  return <PricingPageL10n locale="ja" content={content} />
}
