// Japanese Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'findymail',
  path: '/ja/findymail-alternative',
  cluster: 'altFindymail',
  metaTitle: 'Findymailの代替ツールとFindymailの料金 | Giggal.ai',
  ogTitle: 'Findymailの代替ツールと料金の比較',
  desc: 'Findymailの料金は月額US$99からです。Giggal.aiを含むFindymailの代替ツールと競合を比較します。Giggal.aiは10,000クレジットUS$9.90のメールアドレス検証ツールです。',
  h1: ['すでにあるメールアドレスを検証する', 'Findymailの代替ツール', ''],
  heroP:
    'FindymailはB2Bのメールアドレスを見つけて検証します。プランは月額US$99からです。リストがすでにあり、検証だけが必要なら、Giggal.aiが10,000件US$9.90で行います。クレジットは1回払いで購入し、有効期限はありません。',
  bluf: [
    { k: '主な用途', v: 'Findymailはメールアドレスを見つけてから検証します。Giggal.aiは検証だけを行います。' },
    { k: '料金', v: 'Findymailは月額US$99からです。Giggal.aiは10,000クレジットでUS$9.90、1回払いです。' },
    { k: '無料クレジット', v: 'Findymailの無料クレジットは10件です。Giggal.aiは1,000件で、クレジットカードは不要です。' },
    { k: '保証', v: 'Findymailはバウンス率5%未満を約束し、超えた場合はクレジットを返却します。' },
  ],
  about: {
    heading: 'Findymailとは？',
    paragraphs: [
      'FindymailはB2B向けのメールアドレス検索ツールです。氏名と会社名、LinkedInのURL、Sales Navigatorの検索から、仕事用のメールアドレスを見つけます。見つけたメールアドレスは、ユーザーに渡す前にすべて検証されます。',
      'Chrome拡張機能、Googleスプレッドシートのアドオン、一括アップロード、API、電話番号の検索機能があります。Clay、HubSpot、Salesforce、Pipedrive、Instantly、Smartlead、Lemlistなどと連携します。',
      'Findymailは、ほかの入手元のリスト向けに検証用のクレジットも販売しています。ほかのツールがリスクありとするキャッチオールメールも検証できるとしています。',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Findymailの料金（2026年）',
  pricingProse:
    'Findymailには2種類のプランがあります。利用量ベースのプランは、Individualが月額US$99、ProがUS$249、TeamがUS$399、ScaleがUS$999です。これらのプランに記載されているのはシート数とファイルサイズで、クレジット数ではありません。',
  pricingExtra: [
    'クレジット制のStarterプランは月額US$99です。検索用5,000クレジットと検証用5,000クレジットが付きます。それより多い件数はEnterpriseで、個別見積もりです。使わなかったクレジットは、月間付与量の2倍まで繰り越されます。',
    'Giggal.aiに月額プランはありません。10,000クレジットはUS$9.90、100,000クレジットはUS$76、100万クレジットはUS$680です。',
  ],
  reasons: {
    heading: 'Findymailの代替ツールが探される理由',
    items: [
      { k: '検証だけが必要', v: '多くのチームは、すでにリストを持っています。必要なのは検索ツールではなく、検証ツールだけです。' },
      { k: '件数', v: 'Starterに付く検証用クレジットは月5,000です。それより多い件数には、Enterpriseの見積もりが必要です。' },
      { k: '毎月の請求', v: 'Findymailは毎月請求します。Giggal.aiのクレジットは1回払いで購入し、有効期限はありません。' },
      { k: '少ないトライアル', v: 'Findymailの無料クレジットは10件です。実際のリストを試すには少なすぎます。' },
    ],
  },
  catchAllHeading: 'キャッチオールメールでのFindymailとGiggal.aiの違い',
  catchAllProse:
    'Findymailは、ほかのツールがリスクありとするキャッチオールメールを検証します。Giggal.aiもキャッチオールドメインのアドレスに結果を返し、料金は1件1クレジットです。さらに、Proofpoint、Mimecast、Barracudaなど、名称を公開している15種類のセキュアメールゲートウェイの背後にあるアドレスも確認します。Findymailはゲートウェイへの対応を公表していません。',
  strengths: {
    heading: 'Findymailが得意なこと',
    intro: '次のものが必要なら、Findymailの方が適しています。',
  },
  others: {
    heading: 'Findymailのほかの代替ツールと競合',
    intro: 'これらのツールも、B2Bのメールアドレスの検索か検証を行います。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Anymail Finder', text: '月額US$29の400クレジットからのプランがある、メールアドレス検索ツールです。見つけたメールアドレスの97%以上がハードバウンスしないと約束しています。' },
      { name: 'LeadMagic', text: 'メールアドレス検索、携帯電話番号、企業データを備えたB2Bデータプラットフォームです。プランは共通クレジット5,000で月額US$99からです。' },
      { name: 'Allegrow', text: '営業チーム向けの検証ツールで、受信トレイへの到達とドメインの状態も追跡します。Starterは月額US$99で5,000連絡先です。' },
    ],
  },
  testHeading: 'FindymailのエクスポートをGiggal.aiで検証する',
  testSteps: [
    'Findymailでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、同じ連絡先に対するFindymailの結果と比べます。',
  ],
  ctaHeadline: 'サブスクリプションなしでリストを検証',
  faqs: [
    {
      q: 'Findymailの料金はいくらですか？',
      a: 'Findymailのプランは月額US$99からです。クレジット制のStarterプランには、検索用5,000クレジットと検証用5,000クレジットが付きます。利用量ベースのプランは月額US$99〜US$999です。それより多い件数は個別見積もりです。',
    },
    {
      q: 'Findymailに無料プランはありますか？',
      a: 'Findymailは試用のための無料クレジットを10件提供し、クレジットカードは不要です。継続して使える無料プランはありません。Giggal.aiは無料クレジット1,000件を提供し、クレジットカードは不要です。',
    },
    {
      q: 'Findymailの代替ツールで最適なものは？',
      a: 'メールアドレスを見つけるなら、Anymail FinderとLeadMagicがよく使われる選択肢です。すでにあるリストの検証なら、Giggal.aiは10,000クレジットでUS$9.90です。サブスクリプションはありません。',
    },
    {
      q: 'Findymailはメールアドレス検証に向いていますか？',
      a: 'はい。Findymailは見つけたメールアドレスをすべて検証し、バウンス率5%未満を約束しています。Starterに付く検証用クレジットは月5,000です。そのため、大きなリストにはEnterpriseプランか別の検証ツールが必要です。',
    },
    {
      q: 'Giggal.aiはFindymailのようにメールアドレスを見つけられますか？',
      a: 'いいえ。Giggal.aiは検証だけを行います。先にメールアドレスを見つけ、送信前にGiggal.aiでリストをチェックしてください。',
    },
    {
      q: 'Findymailのクレジットに有効期限はありますか？',
      a: '使わなかったクレジットは、月間付与量の2倍まで翌月に繰り越されます。Giggal.aiのクレジットに有効期限はありません。',
    },
  ],
  breadcrumb: 'Findymailの代替ツール',
}

export default cfg
