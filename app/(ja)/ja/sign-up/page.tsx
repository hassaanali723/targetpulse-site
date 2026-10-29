import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Japanese sign-up. "無料登録" is the sign-up term of the terminology sheet;
// the title carries メールアドレス検証 and the 1,000 free credits.

const PATH = '/ja/sign-up'
const DESC =
  'Giggal.aiのアカウントは数秒で作成できます。1,000件分の無料クレジットが付き、クレジットカードは不要です。キャッチオールドメインのアドレスも精度98.5%でチェックできます。'

export const metadata: Metadata = {
  title: { absolute: '無料登録：メールアドレス検証1,000件分が無料 | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: '無料登録：メールアドレス検証1,000件分が無料',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: '無料登録',
  h1Lead: 'アカウントを作成して',
  h1Accent: '1,000クレジットで始める',
  intro: 'Giggal.aiのアカウントは30秒以内で作成できます。最初の1,000件のチェックは無料です。ほかのツールが「リスクあり」とするキャッチオールドメインやアクセプトオール（accept-all）のドメインにも使えます。現在、ダッシュボードは英語のみです。',
  ctaPrimary: '無料でアカウントを作成',
  pricingLabel: '料金を見る',
  pricingHref: '/ja/pricing',
  trustPoints: ['クレジットカード不要', 'クレジットに有効期限なし', 'いつでも利用をやめられます'],
  perksKicker: '利用できる内容',
  perksTitle: 'メールリストのクリーニングに必要な機能がそろっています',
  perksText: '無料トライアル中もすべての機能を使えます。機能の制限や隠れた条件はありません。',
  perks: [
    { title: '1,000件分の無料クレジット', body: '最初の1,000件のチェックは無料です。クレジットカードは不要で、クレジットに有効期限はありません。' },
    { title: 'リアルタイムの結果', body: 'リストをアップロードすると、結果が1行ずつ表示されます。' },
    { title: 'キャッチオールドメインの検証', body: 'ほかのツールが確認を止めるキャッチオールドメインにも、有効か無効かの明確な結果を出します。' },
    { title: '使った分だけのお支払い', body: '3,000クレジットでUS$5から購入できます。クレジットに有効期限はなく、いつでも利用をやめられます。' },
  ],
  ctaTitle: 'メールリストのクリーニングを始めませんか？',
  ctaText: '登録は30秒で終わります。最初の1,000件のチェックは無料です。',
  ctaButton: '無料登録',
}

export default function SignUpJaPage() {
  return <SignupPageL10n locale="ja" content={content} />
}
