// Japanese no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'no2bounce',
  path: '/ja/no2bounce-alternative',
  cluster: 'altNo2bounce',
  metaTitle: 'no2bounceの代替ツール：料金とキャッチオールドメイン | Giggal.ai',
  ogTitle: 'キャッチオールドメインの検証に使えるno2bounceの代替ツール',
  desc: 'no2bounceは10,000クレジットでUS$20です。Giggal.aiはキャッチオールドメインやゲートウェイの背後のアドレスを10,000件US$9.90で検証します。無料クレジット1,000件付き、クレジットカードは不要です。',
  h1: ['メール1件あたりの料金が安い', 'no2bounceの代替ツール', ''],
  heroP:
    'no2bounceは、有効期限のない従量課金クレジットを使うメールアドレス検証ツールです。Giggal.aiも同じ仕組みです。違いは、料金、無料クレジット、キャッチオールドメインのアドレスの確認方法です。',
  bluf: [
    { k: '料金', v: '10,000クレジットは、no2bounceでUS$20、Giggal.aiでUS$9.90です。' },
    { k: '大量購入時', v: '100万クレジットは、no2bounceでUS$679、Giggal.aiでUS$680です。' },
    { k: '無料クレジット', v: 'no2bounceの無料クレジットは100件です。Giggal.aiは1,000件です。どちらもクレジットカードは不要です。' },
    { k: '有効期限', v: 'どちらのツールも、クレジットに有効期限はありません。' },
  ],
  about: {
    heading: 'no2bounceとは？',
    paragraphs: [
      'no2bounceは、メールアドレス検証サービスです。1件ずつの検証、リストの一括検証、API経由の検証に対応しています。同じクレジットで、メールアドレス検索、ドメイン検索、メールアドレスのスコアリングも使えます。',
      'キャッチオールドメインでは、no2bounceは管理されたテストメッセージを送り、メールボックスが存在するかを確認します。正確性は99.6%と主張しています。',
      'HubSpot、Salesforce、Clay、Zapier、Google Sheets、Zoho CRMなどと連携できます。',
    ],
  },
  reasons: {
    heading: 'no2bounceの代替ツールが探される理由',
    items: [
      { k: '10,000件の料金', v: 'no2bounceは10,000クレジットでUS$20です。Giggal.aiは同じ件数でUS$9.90です。' },
      { k: '100,000件の場合', v: '100,000クレジットは、no2bounceでUS$149、Giggal.aiでUS$76です。' },
      { k: '無料テスト', v: 'no2bounceの無料クレジットは100件です。Giggal.aiは1,000件で、実際のサンプルを試すのに十分な数です。' },
    ],
  },
  catchAllHeading: 'no2bounceとGiggal.aiは、キャッチオールドメインのアドレスをどう確認するか',
  catchAllProse:
    'no2bounceは、自社のサーバーから管理されたテストメッセージを送り、キャッチオールドメインのメールボックスを確認します。Giggal.aiは、キャッチオールドメインのアドレスにも結果を返します。料金は1件1クレジットで、追加料金はありません。Proofpoint、Mimecast、Barracudaなど、名称を公開している15種類のセキュアメールゲートウェイの背後のアドレスも確認します。',
  pricingHeading: 'no2bounceとGiggal.aiの料金比較',
  pricingProse:
    'no2bounceは、10,000クレジットUS$20から5,000万クレジットまでの従量課金パックを販売しています。100,000件はUS$149、100万件はUS$679です。月額プランは15%安く、年額プランは20%安くなります。',
  pricingExtra: [
    'Giggal.aiは、10,000クレジットをUS$9.90、100,000件をUS$76、100万件をUS$680で販売しています。プランを選ぶ必要はありません。どちらのツールも、クレジットに有効期限はありません。',
  ],
  strengths: {
    heading: 'no2bounceが向いているケース',
    intro: 'no2bounceは、次のような用途には妥当な選択です。',
  },
  others: {
    heading: 'no2bounceのほかの代替ツール',
    intro: 'これらの検証ツールも、有効期限のないクレジットを販売しています。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Bounceless', text: '10,000クレジットでUS$29、100万クレジットでUS$579です。仕事用メールアドレスで登録すると、毎月1,000件の無料クレジットが付与されます。' },
      { name: 'QuickEmailVerification', text: '10,000クレジットでUS$60です。毎日100件の無料クレジットがあります。' },
      { name: 'Scrubby', text: '従量課金は1クレジットUS$0.008です。検証が難しいアドレス向けにDeep Verificationがあります。' },
    ],
  },
  testHeading: 'no2bounceとGiggal.aiを同じリストで比べる',
  testSteps: [
    'no2bounceでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、no2bounceの結果と比べます。',
  ],
  ctaHeadline: '同じ検証を、メール1件あたりより安い料金で',
  faqs: [
    {
      q: 'no2bounceの料金はいくらですか？',
      a: 'no2bounceの従量課金パックは、10,000クレジットUS$20からです。100,000件はUS$149、100万件はUS$679です。月額プランは15%安く、年額プランは20%安くなります。',
    },
    {
      q: 'no2bounceは無料ですか？',
      a: 'no2bounceには、クレジットカード不要の無料クレジットが100件あり、有効期限はありません。それ以降はクレジットを購入します。Giggal.aiの無料クレジットは1,000件で、クレジットカードは不要です。',
    },
    {
      q: 'Giggal.aiはno2bounceの代替ツールとして適していますか？',
      a: 'はい。どちらも有効期限のないクレジットを販売しています。10,000件と100,000件では、Giggal.aiの方が安く、無料クレジットも10倍です。100万クレジットでは、両者の料金はほぼ同じです。',
    },
    {
      q: 'no2bounceのクレジットに有効期限はありますか？',
      a: 'ありません。購入したno2bounceのクレジットは、使うまでアカウントに残ります。サブスクリプションのクレジットは、サブスクリプションが有効な間は使えます。Giggal.aiのクレジットに有効期限はありません。',
    },
  ],
  breadcrumb: 'no2bounceの代替ツール',
}

export default cfg
