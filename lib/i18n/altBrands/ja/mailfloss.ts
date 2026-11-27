// Japanese Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'mailfloss',
  path: '/ja/mailfloss-alternative',
  cluster: 'altMailfloss',
  metaTitle: 'Mailflossの代替ツール：料金とキャッチオールドメイン | Giggal.ai',
  ogTitle: 'キャッチオールドメインのアドレスも確認するMailflossの代替ツール',
  desc: 'Mailflossはメール配信プラットフォームのリストを毎日クリーニングしますが、キャッチオールドメインのアドレスにはフラグを付けるだけです。Giggal.aiは10,000クレジットUS$9.90で結果を返します。',
  h1: ['1回限りのリストクリーニングに使える', 'Mailflossの代替ツール', ''],
  heroP:
    'Mailflossは、メールマーケティングのプラットフォームと連携し、毎日リストをクリーニングします。キャッチオールドメインのアドレスにはフラグを付けますが、存在は確認しません。Giggal.aiは、アップロードしたリストを検証し、キャッチオールドメインのアドレスにも結果を返します。料金は10,000件でUS$9.90です。',
  bluf: [
    { k: '仕組み', v: 'Mailflossは、メール配信プラットフォームの中でリストをクリーニングします。Giggal.aiは、アップロードしたリストやAPIで送信したリストをチェックします。' },
    { k: 'キャッチオールドメイン', v: 'Mailflossはキャッチオールドメインのアドレスにフラグを付けます。Giggal.aiは結果を返します。' },
    { k: '料金', v: 'Mailflossの前払いクレジットは10,000件でUS$40です。Giggal.aiはUS$9.90です。' },
    { k: '無料利用', v: 'Mailflossには毎月500件の無料チェックがあります。Giggal.aiは1回だけ1,000件で、クレジットカードは不要です。' },
  ],
  about: {
    heading: 'Mailflossとは？',
    paragraphs: [
      'Mailflossは、メールリストのクリーニングサービスです。Mailchimp、Klaviyo、HubSpot、ActiveCampaignなど、41のメール配信プラットフォームと連携します。そのうえで、毎日リストから無効なアドレスを削除します。',
      'メールアドレスのよくある入力ミスも修正します。リアルタイムAPI、Webhook、フォームウィジェットもあります。',
      'Mailflossは、月額サブスクリプションと前払いクレジットを販売しています。前払いクレジットに有効期限はありません。',
    ],
  },
  reasons: {
    heading: 'Mailflossの代替ツールが探される理由',
    items: [
      { k: 'キャッチオールドメイン', v: 'Mailflossはキャッチオールドメインのアドレスにフラグを付けます。メールボックスが存在するかは確認しません。' },
      { k: 'トライアルにカードが必要', v: 'サブスクリプションの7日間のトライアルには、クレジットカードが必要です。' },
      { k: '連携数の上限', v: 'Liteは1つのメール配信プラットフォーム、Businessは10のプラットフォームと連携できます。' },
      { k: '料金', v: '前払いクレジットは10,000件でUS$40、100,000件でUS$300です。' },
    ],
  },
  catchAllHeading: 'MailflossとGiggal.aiによるキャッチオールドメインのアドレスの扱い',
  catchAllProse:
    'Mailflossはキャッチオールドメインのアドレスにフラグを付け、判断をユーザーに任せます。Giggal.aiはこれらをさらにチェックし、4つの結果のいずれかを返します。料金は1件1クレジットです。名称を公開している15種類のセキュアメールゲートウェイの背後のアドレスも確認します。',
  pricingHeading: 'MailflossとGiggal.aiの料金比較',
  pricingProse:
    'Mailflossのサブスクリプションは、Liteが10,000クレジットで月額US$29、Businessが25,000クレジットで月額US$59、Proが125,000クレジットで月額US$209です。前払いクレジットは、1,000件でUS$8、10,000件でUS$40、100,000件でUS$300、100万件でUS$1,200です。',
  pricingExtra: [
    'Mailflossのすべてのアカウントには、毎月500件の無料検証も付きます。Giggal.aiは、10,000クレジットをUS$9.90、100万件をUS$680で販売しています。サブスクリプションはありません。',
  ],
  strengths: {
    heading: 'Mailflossが向いているケース',
    intro: 'Mailflossには、Giggal.aiにはない機能があります。',
  },
  others: {
    heading: 'Mailflossのほかの代替ツール',
    intro: 'これらの検証ツールも、マーケティング用のリストをクリーニングします。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'QuickEmailVerification', text: '50以上のマーケティングツールと連携します。永続クレジットは10,000件でUS$60です。' },
      { name: 'Bounceless', text: '10,000クレジットでUS$29です。仕事用メールアドレスで登録すると、毎月1,000件の無料クレジットが付与されます。' },
      { name: 'no2bounce', text: 'HubSpot、Klaviyo、Zohoと連携します。10,000クレジットでUS$20で、有効期限はありません。' },
    ],
  },
  testHeading: 'メール配信プラットフォームからエクスポートしたリストでGiggal.aiを試す',
  testSteps: [
    'Mailflossでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、Mailflossがフラグを付けたアドレスと比べます。',
  ],
  ctaHeadline: 'キャッチオールドメインのアドレスに、フラグではなく結果を返します',
  faqs: [
    {
      q: 'Mailflossの料金はいくらですか？',
      a: 'サブスクリプションは、10,000クレジットで月額US$29からです。前払いクレジットは10,000件でUS$40、100万件でUS$1,200で、有効期限はありません。',
    },
    {
      q: 'Mailflossに無料プランはありますか？',
      a: 'はい。すべてのアカウントに、毎月500件の無料検証が付きます。サブスクリプションには7日間のトライアルもありますが、クレジットカードが必要です。',
    },
    {
      q: 'Mailflossはキャッチオールドメインのアドレスを検証しますか？',
      a: 'フラグを付けるだけです。メールボックスが存在するかは確認しません。Giggal.aiは、キャッチオールドメインのアドレスにも1件1クレジットで結果を返します。',
    },
    {
      q: 'Giggal.aiは、Mailflossのようにメール配信プラットフォームのリストをクリーニングしますか？',
      a: 'いいえ。Giggal.aiは、アップロード、API、Zapier、n8n、HubSpotで使えます。メール配信プラットフォームの中で、毎日のクリーニングを実行することはありません。',
    },
  ],
  breadcrumb: 'Mailflossの代替ツール',
}

export default cfg
