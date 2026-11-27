// Japanese Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'bounceless',
  path: '/ja/bounceless-alternative',
  cluster: 'altBounceless',
  metaTitle: 'Bouncelessの代替ツール：Bounceless.ioの料金 | Giggal.ai',
  ogTitle: 'ゲートウェイの背後のアドレスも検証するBouncelessの代替ツール',
  desc: 'Bouncelessは10,000クレジットでUS$29です。Giggal.aiはUS$9.90で、キャッチオールドメインとセキュアメールゲートウェイの背後のアドレスを確認します。クレジットに有効期限はありません。',
  h1: ['ゲートウェイの背後のアドレスも確認する', 'Bouncelessの代替ツール', ''],
  heroP:
    'Bouncelessは、1回限りのパックと月額プランがある低価格のメールアドレス検証ツールです。現在は、標準のチェックにキャッチオールドメインに関する手がかりを含めています。Giggal.aiもキャッチオールドメインのアドレスに結果を返し、名称を公開している15種類のセキュアメールゲートウェイの背後も確認します。',
  bluf: [
    { k: '料金', v: '10,000クレジットは、BouncelessでUS$29、Giggal.aiでUS$9.90です。' },
    { k: '大量購入時', v: '100万クレジットは、BouncelessでUS$579、Giggal.aiでUS$680です。' },
    { k: 'ゲートウェイ', v: 'Giggal.aiは、背後を確認できる15種類のゲートウェイの名前を挙げています。Bouncelessは挙げていません。' },
    { k: '無料クレジット', v: 'Bouncelessは、仕事用メールアドレスで毎月1,000件です。Giggal.aiは1回だけ1,000件です。' },
  ],
  about: {
    heading: 'Bouncelessとは？',
    paragraphs: [
      'Bouncelessは、bounceless.ioのメールアドレス検証サービスです。リストの一括検証と1件ずつの検証に対応し、APIとMCPサーバーも提供しています。',
      'アカウントには、送信元の状態、受信トレイへの到達、登録フォームのチェックも含まれます。Bouncelessは、顧客アカウントが39,000以上あるとしています。',
      'Bouncelessには、まだアプリとのネイティブ連携がありません。Mailchimp、HubSpot、ActiveCampaignなどのツール向けに、CSVとAPIのガイドを用意しています。',
    ],
  },
  reasons: {
    heading: 'Bouncelessの代替ツールが探される理由',
    items: [
      { k: 'ゲートウェイ', v: 'Bouncelessは、ProofpointやMimecastなどのセキュアメールゲートウェイの名前を挙げていません。' },
      { k: '連携', v: 'アプリとのネイティブ連携はまだなく、CSVとAPIのガイドだけです。' },
      { k: '10,000件の料金', v: '10,000クレジットでUS$29です。Giggal.aiは同じ件数でUS$9.90です。' },
      { k: '仕事用メールアドレス', v: '毎月の無料クレジットには、仕事用メールアドレスが必要です。フリーメールのアドレスには付与されません。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインのアドレス：BouncelessとGiggal.aiの比較',
  catchAllProse:
    'Bouncelessは、1クレジットのチェックにキャッチオールドメインに関する手がかりを含めており、確認できなかった結果には課金しません。Giggal.aiもキャッチオールドメインのアドレスに1クレジットで結果を返し、不明の結果のクレジットは返却します。主な違いはセキュアメールゲートウェイです。Giggal.aiは、Proofpoint、Mimecast、Barracudaなど15種類のゲートウェイの背後を確認します。',
  pricingHeading: 'BouncelessとGiggal.aiの料金比較',
  pricingProse:
    'Bouncelessの従量課金パックは、5,000件でUS$19、10,000件でUS$29、100,000件でUS$159、100万件でUS$579です。月額プランは6,500クレジットでUS$19からです。パックでもプランでも、クレジットに有効期限はありません。',
  pricingExtra: [
    'Giggal.aiは、10,000クレジットをUS$9.90、100,000件をUS$76、100万件をUS$680で販売しています。100万件ではBouncelessの方が安くなります。10,000件と100,000件ではGiggal.aiの方が安くなります。',
  ],
  strengths: {
    heading: 'Bouncelessが向いているケース',
    intro: 'Bouncelessには、はっきりした強みがあります。',
  },
  others: {
    heading: 'Bouncelessのほかの代替ツール',
    intro: 'これらの検証ツールは、料金がBouncelessに近いです。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'no2bounce', text: '10,000クレジットでUS$20、100万クレジットでUS$679です。クレジットに有効期限はありません。' },
      { name: 'QuickEmailVerification', text: '毎日100件の無料クレジットがあります。永続クレジットは10,000件でUS$60です。' },
      { name: 'Mailfloss', text: '41のメール配信プラットフォームと連携し、毎日無効なアドレスを削除します。前払いクレジットは10,000件でUS$40です。' },
    ],
  },
  testHeading: '同じリストをBouncelessとGiggal.aiでチェックする',
  testSteps: [
    'Bouncelessでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、Bouncelessが返した手がかりと比べます。',
  ],
  ctaHeadline: 'キャッチオールドメインとゲートウェイの背後のアドレスを、1件1クレジットで確認します',
  faqs: [
    {
      q: 'Bouncelessの料金はいくらですか？',
      a: 'Bouncelessの従量課金パックは、5,000クレジットでUS$19からです。10,000件はUS$29、100,000件はUS$159、100万件はUS$579です。月額プランは6,500クレジットでUS$19からです。',
    },
    {
      q: 'Bouncelessは無料ですか？',
      a: '仕事用メールアドレスで登録すると、毎月1,000件の無料クレジットが付与されます。クレジットカードは不要です。Giggal.aiは無料クレジット1,000件を1回だけ提供します。こちらもクレジットカードは不要です。',
    },
    {
      q: 'Bouncelessはキャッチオールドメインのアドレスを検証しますか？',
      a: 'はい。Bouncelessは、1クレジットの標準チェックにキャッチオールドメインに関する手がかりを含めており、追加料金はかかりません。確認できなかった結果には課金されません。',
    },
    {
      q: 'Giggal.aiはBouncelessの代替ツールとして適していますか？',
      a: 'リストに企業ドメインが多いなら、適しています。Giggal.aiは、名称を公開している15種類のセキュアメールゲートウェイの背後を確認し、料金は10,000クレジットでUS$9.90です。',
    },
  ],
  breadcrumb: 'Bouncelessの代替ツール',
}

export default cfg
