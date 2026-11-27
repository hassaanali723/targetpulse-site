// Japanese Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'allegrow',
  path: '/ja/allegrow-alternative',
  cluster: 'altAllegrow',
  metaTitle: 'Allegrowの代替ツール：Allegrowの料金を比較 | Giggal.ai',
  ogTitle: 'メールアドレス1件ごとに料金を支払うAllegrowの代替ツール',
  desc: 'Allegrowの料金は5,000連絡先で月額US$99からです。Giggal.aiはキャッチオールドメインとゲートウェイの背後のメールアドレスを10,000件US$9.90で検証します。クレジットに有効期限はありません。',
  h1: ['メールアドレス1件ごとに料金を支払う', 'Allegrowの代替ツール', ''],
  heroP:
    'Allegrowは、営業チーム向けのメールアドレス検証と到達率のプラットフォームです。5,000連絡先で月額US$99からの月額プランで販売されています。Giggal.aiは、1回払いのクレジットでメールアドレスを検証します。10,000クレジットはUS$9.90で、有効期限はありません。',
  bluf: [
    { k: '請求', v: 'Allegrowは月額プランです。Giggal.aiのクレジットは1回払いで購入します。' },
    { k: '料金', v: 'AllegrowのStarterは5,000連絡先で月額US$99です。Giggal.aiは10,000件でUS$9.90です。' },
    { k: 'キャッチオールドメイン', v: 'どちらもキャッチオールドメインのアドレスに有効か無効かを返します。どちらもProofpointとMimecastの名前を挙げています。' },
    { k: '追加ツール', v: 'Allegrowは、受信トレイへの到達とドメインの状態もモニタリングします。Giggal.aiにこの機能はありません。' },
  ],
  about: {
    heading: 'Allegrowとは？',
    paragraphs: [
      'Allegrowは、営業部門と収益部門のチーム向けのB2Bメールアドレス検証プラットフォームです。キャッチオールドメインのアドレスを含めて連絡先を検証し、有効か無効かを返します。Allegrowによると、キャッチオールドメインのアドレスを検証するためにメールを送ることはありません。',
      '接続したメールボックスの送信者レピュテーションと、受信トレイへの到達もモニタリングします。Outreach、Salesloft、HubSpot、Apollo、ZoomInfo、Clayと連携します。',
      'AllegrowはSOC 2レポートを提供しています。SSOは、最上位プランの追加オプションです。',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Allegrowの料金（2026年）',
  pricingProse:
    'AllegrowのStarterは5,000連絡先で月額US$99です。追加の連絡先は1,000件ごとにUS$8です。Scale Plus Unlimitedは年払いで月額US$1,340で、クレジットの上限はありません。APIプランの料金は問い合わせ制です。',
  pricingExtra: [
    'そのため、Starterで月10,000連絡先を検証すると、月額US$139になります。これは公開料金をもとにした当社の計算で、掲載されているプランではありません。Giggal.aiは10,000クレジットをUS$9.90、100,000クレジットをUS$76で、1回払いで販売しています。',
  ],
  reasons: {
    heading: 'Allegrowの代替ツールが探される理由',
    items: [
      { k: '毎月の費用', v: 'Starterは毎月US$99かかります。年に数回しか検証しないチームは、使わない月の分も支払います。' },
      { k: '連携', v: 'HubSpot、Outreach、Salesloftとのネイティブ連携はScale Plusで使えます。StarterはAPIキーでClayと接続します。' },
      { k: 'トライアルの制限', v: '14日間のトライアルは1,000件のアドレスが対象で、連携とAPIは使えません。' },
    ],
  },
  catchAllHeading: 'キャッチオールメールとゲートウェイの背後のメール：AllegrowとGiggal.aiの比較',
  catchAllProse:
    'AllegrowとGiggal.aiは、どちらもキャッチオールドメインのアドレスに有効か無効かの結果を返します。どちらも、背後を確認するゲートウェイとしてProofpointとMimecastの名前を挙げています。主な違いは請求方法です。Allegrowは、月ごとの連絡先の付与量を使います。Giggal.aiは、有効期限のないクレジットからアドレス1件につき1クレジットを差し引きます。',
  strengths: {
    heading: 'Allegrowが得意なこと',
    intro: 'Allegrowは検証以外の機能も備えています。次の用途なら、Allegrowの方が適しています。',
  },
  others: {
    heading: 'Allegrowのほかの代替ツール',
    intro: 'これらのツールも、キャッチオールドメインのアドレスを検証します。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Scrubby', text: 'キャッチオールドメインと、ゲートウェイで保護されたドメインをチェックします。従量課金は1クレジットUS$0.008で、月額プランはUS$47からです。' },
      { name: 'Listmint', text: 'キャッチオールドメインのアドレスを、別のクレジットでチェックします。Starterは月額US$99で、標準クレジット20,000とキャッチオールドメイン用クレジット5,000が付きます。' },
      { name: 'Bounceless', text: '1クレジットのチェックに、キャッチオールドメインに関する手がかりを含めています。受信トレイへの到達を確認するツールもあります。10,000クレジットはUS$29です。' },
    ],
  },
  testHeading: 'Allegrowの結果と比べてGiggal.aiを試す',
  testSteps: [
    'Allegrowでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの結果を、同じ連絡先に対するAllegrowの結果と比べます。',
  ],
  ctaHeadline: '確認が難しい同じアドレスを、1件ごとの料金で検証',
  faqs: [
    {
      q: 'Allegrowの料金はいくらですか？',
      a: 'AllegrowのStarterは5,000連絡先で月額US$99で、追加の連絡先は1,000件ごとにUS$8です。Scale Plus Unlimitedは年払いで月額US$1,340です。APIプランの料金は問い合わせ制です。',
    },
    {
      q: 'Allegrowに無料トライアルはありますか？',
      a: 'はい。最大1,000件のアドレスを対象とする14日間のトライアルがあり、クレジットカードは不要です。連携とAPIはトライアルに含まれません。',
    },
    {
      q: 'Giggal.aiはAllegrowの代替ツールとして適していますか？',
      a: '必要なのが検証だけなら、適しています。Giggal.aiは、キャッチオールドメインとゲートウェイの背後のアドレスに、10,000件US$9.90で結果を返します。受信トレイへの到達や送信者レピュテーションはモニタリングしません。',
    },
    {
      q: 'Allegrowはキャッチオールドメインのアドレスを検証するためにメールを送りますか？',
      a: 'いいえ。Allegrowによると、キャッチオールドメインのアドレスを検証するためにメールを送ることはありません。',
    },
    {
      q: 'Allegrowに無制限プランはありますか？',
      a: 'はい。Scale Plus Unlimitedは年払いで月額US$1,340です。連携またはCSVを使って、無制限に検証できます。Giggal.aiに無制限プランはありません。',
    },
  ],
  breadcrumb: 'Allegrowの代替ツール',
}

export default cfg
