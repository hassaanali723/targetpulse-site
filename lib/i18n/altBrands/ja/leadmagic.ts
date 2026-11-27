// Japanese LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'leadmagic',
  path: '/ja/leadmagic-alternative',
  cluster: 'altLeadmagic',
  metaTitle: 'LeadMagicの代替ツール：LeadMagicの料金を比較 | Giggal.ai',
  ogTitle: 'メールアドレス検証に特化したLeadMagicの代替ツール',
  desc: 'LeadMagicの料金は、共通クレジット5,000で月額US$99からです。Giggal.aiは、10,000クレジットUS$9.90のメールアドレス検証ツールです。クレジットに有効期限はありません。',
  h1: ['メールアドレス検証に特化した', 'LeadMagicの代替ツール', ''],
  heroP:
    'LeadMagicはB2Bデータのプラットフォームです。メールアドレスのバリデーションはその製品の1つで、ほかの製品と1つの月間クレジットを共有しています。メールリストの検証だけが必要なら、Giggal.aiはその作業だけを行います。料金はメールアドレス10,000件でUS$9.90で、1回払いです。',
  bluf: [
    { k: '製品の内容', v: 'LeadMagicは連絡先と企業のデータを販売しています。Giggal.aiはメールアドレスの検証だけを行います。' },
    { k: '料金', v: 'LeadMagicは月額US$99からです。Giggal.aiは10,000クレジットでUS$9.90、1回払いです。' },
    { k: '無料クレジット', v: 'LeadMagicに無料クレジットはありません。Giggal.aiは1,000クレジットを提供し、クレジットカードは不要です。' },
    { k: 'キャッチオールドメイン', v: 'どちらもキャッチオールドメインのアドレスに結果を返します。Giggal.aiは、名称を公開している15種類のメールゲートウェイの背後にあるアドレスも確認します。' },
  ],
  about: {
    heading: 'LeadMagicとは？',
    paragraphs: [
      'LeadMagicは営業チーム向けのB2Bデータプラットフォームです。仕事用のメールアドレスと携帯電話番号を見つけ、連絡先の情報に企業データを加えます。転職と広告の活動も追跡します。',
      'メールアドレスのバリデーションは、LeadMagicの中の1つの製品です。結果は有効、無効、不明のいずれかです。はっきりした結果は1件0.25クレジットで、不明の結果は無料です。キャッチオールドメインのバリデーションは別の製品で、同じクレジットを使います。',
      'LeadMagicは、Webアプリ、REST API、CLI、MCPサーバーから使えます。Clay、Apollo、Smartlead、Instantly、Salesforce、Zapier、Makeなどのツールと連携します。',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'LeadMagicの料金（2026年）',
  pricingProse:
    'LeadMagicは月額サブスクリプションです。Essentialは月額US$99で5,000クレジットです。Growthは月額US$249で20,000、Professionalは月額US$499で50,000、Ultimateは月額US$849で100,000です。すべての製品が同じクレジットを使います。',
  pricingExtra: [
    'バリデーションは1件0.25クレジットなので、US$99のプランで月20,000件をチェックできます。月100,000件には、月額US$499のProfessionalが必要です。年払いでは2か月分が無料になります。使わなかった月間クレジットは、月間付与量の2倍まで繰り越されます。',
    'Giggal.aiにサブスクリプションはありません。10,000クレジットはUS$9.90、100,000クレジットはUS$76、100万クレジットはUS$680です。クレジットに有効期限はありません。',
  ],
  reasons: {
    heading: 'LeadMagicの代替ツールが探される理由',
    items: [
      { k: '毎月の請求', v: 'LeadMagicは、何も検証しない月にも毎月請求します。Giggal.aiのクレジットは1回払いで購入します。' },
      { k: '共通のクレジット', v: 'バリデーションとデータ補完は同じクレジットを使います。大きなリストをクリーニングすると、連絡先の検索に使えるクレジットが減ります。' },
      { k: '無料で試せない', v: 'LeadMagicに無料クレジットはありません。自分のリストで試す前に、支払いが必要です。' },
      { k: 'ゲートウェイ', v: 'LeadMagicは、ProofpointやMimecastなどのセキュアメールゲートウェイへの対応を公表していません。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインのアドレスでのLeadMagicとGiggal.aiの違い',
  catchAllProse:
    'LeadMagicは、キャッチオールドメインで有効、無効、不明のいずれかを返し、不明には課金しません。Giggal.aiもキャッチオールドメインのアドレスに結果を返し、料金は1件1クレジットです。さらに、Proofpoint、Mimecast、Barracudaなど15種類のセキュアメールゲートウェイの背後にあるアドレスも確認します。これらのゲートウェイは、最初はどのアドレスも受け付けます。そのため、基本的なチェックでは実在するアドレスと偽のアドレスを区別できません。',
  strengths: {
    heading: 'LeadMagicが得意なこと',
    intro: '次のものが必要なら、LeadMagicの方が適しています。',
  },
  others: {
    heading: 'LeadMagicのほかの代替ツール',
    intro: '検索と検証を1つのツールで行いたい場合は、次のツールも選択肢になります。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Findymail', text: '検証も行うメールアドレス検索ツールです。Starterプランは月額US$99で、検索用5,000クレジットと検証用5,000クレジットが付きます。バウンス率5%未満を約束しています。' },
      { name: 'Anymail Finder', text: '別に検証ツールを持つメールアドレス検索ツールです。検証は1回0.2クレジットで、プランは月額US$29の400クレジットからです。' },
      { name: 'no2bounce', text: '従量課金のクレジットを使う検証ツールで、クレジットに有効期限はありません。10,000クレジットはUS$20です。' },
    ],
  },
  testHeading: 'LeadMagicでチェック済みのリストでGiggal.aiを試す',
  testSteps: [
    'LeadMagicでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、同じアドレスに対するLeadMagicの結果と比べます。',
  ],
  ctaHeadline: '月額プランなしでリストを検証',
  faqs: [
    {
      q: 'LeadMagicの料金はいくらですか？',
      a: 'LeadMagicは5,000クレジットで月額US$99からです。プランは100,000クレジットで月額US$849まであります。メールアドレスのバリデーションは、はっきりした結果1件につき0.25クレジットです。そのため、US$99のプランで20,000件をチェックできます。',
    },
    {
      q: 'LeadMagicに無料プランはありますか？',
      a: 'いいえ。LeadMagicによると、無料クレジットはありません。Search機能には14日間のトライアルがあります。Giggal.aiは無料クレジット1,000件を提供し、クレジットカードは不要です。一括アップロードにも使えます。',
    },
    {
      q: 'Giggal.aiはLeadMagicの代替ツールとして適していますか？',
      a: '必要なのがメールアドレス検証だけなら、適しています。Giggal.aiはリストを検証し、キャッチオールドメインのアドレスにも結果を返します。料金は10,000件でUS$9.90です。メールアドレスや電話番号は見つけないため、LeadMagicのデータ製品の代わりにはなりません。',
    },
    {
      q: 'LeadMagicは不明の結果に課金しますか？',
      a: 'いいえ。LeadMagicは、はっきりした結果に0.25クレジットを課金し、不明の結果には課金しません。Giggal.aiも、結果が不明の場合はクレジットを返却します。',
    },
    {
      q: 'メールアドレス検証だけのためにLeadMagicを使う価値はありますか？',
      a: 'データ製品を毎月使うなら、価値があります。検証だけなら、少なくとも月額US$99を支払うことになります。Giggal.aiなら、10,000件のチェックが1回払いでUS$9.90です。',
    },
    {
      q: 'LeadMagicのキャッチオールドメインのテストは中立ですか？',
      a: 'いいえ。LeadMagicは2026年2月にこのテストを公開し、自社を1位にしています。ベンダーによるテストとしてお読みください。Giggal.aiはテストの対象に含まれていません。',
    },
  ],
  breadcrumb: 'LeadMagicの代替ツール',
}

export default cfg
