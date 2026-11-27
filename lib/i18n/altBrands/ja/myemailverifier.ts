// Japanese MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices are from the
// August 2026 check and the page says so. The competitor's words (free tier,
// expiry, strengths) live in lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'myemailverifier',
  path: '/ja/myemailverifier-alternative',
  cluster: 'altMyemailverifier',
  metaTitle: 'MyEmailVerifierの代替ツール：料金とキャッチオールドメイン | Giggal.ai',
  ogTitle: 'B2Bリスト向けのMyEmailVerifierの代替ツール',
  desc: 'MyEmailVerifierは毎日100件の無料クレジットがありますが、キャッチオールドメインのアドレスにはステータスを付けるだけです。Giggal.aiは10,000件US$9.90で結果を返します。',
  h1: ['キャッチオールドメインを含むB2Bリスト向けの', 'MyEmailVerifierの代替ツール', ''],
  heroP:
    'MyEmailVerifierは、低価格のメールアドレス検証ツールで、毎日100件の無料クレジットがあります。キャッチオールドメインのアドレスには専用のステータスを付け、存在は確認しません。Giggal.aiはこれらのアドレスにも結果を返します。料金は10,000件でUS$9.90です。',
  bluf: [
    { k: 'キャッチオールドメイン', v: 'MyEmailVerifierは「catch-all」というステータスを付けるだけです。Giggal.aiは結果を返します。' },
    { k: '料金', v: '10,000クレジットは、MyEmailVerifierでUS$15、Giggal.aiでUS$9.90です。' },
    { k: '大量購入時', v: '100万クレジットは、MyEmailVerifierでUS$349、Giggal.aiでUS$680です。' },
    { k: '無料クレジット', v: 'MyEmailVerifierは毎日100件です。Giggal.aiは1回だけ1,000件で、クレジットカードは不要です。' },
  ],
  about: {
    heading: 'MyEmailVerifierとは？',
    paragraphs: [
      'MyEmailVerifierは、myemailverifier.comのメールアドレス検証サービスです。リストの一括検証と1件ずつの検証に対応し、APIもあります。',
      '毎日100件の無料クレジットがあります。有料クレジットは1,000件US$4からで、有効期限はありません。',
      'キャッチオールドメインのアドレスは、「catch-all」という専用のステータスで返します。そのメールボックスが存在するかは確認しません。',
    ],
  },
  reasons: {
    heading: 'MyEmailVerifierの代替ツールが探される理由',
    items: [
      { k: 'キャッチオールドメイン', v: 'キャッチオールドメインのアドレスは、はっきりした答えのないまま返ってきます。B2Bのリストでは、それがリストの大きな割合になることがあります。' },
      { k: 'ゲートウェイ', v: 'MyEmailVerifierは、背後を確認できるゲートウェイとして、ProofpointやMimecastなどの名前を挙げていません。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインのアドレス：MyEmailVerifierとGiggal.aiの比較',
  catchAllProse:
    '多くの企業ドメインは、どのアドレス宛てのメールも受け付けます。そのため、基本的なチェックでは、実在するアドレスと架空のアドレスを区別できません。MyEmailVerifierはこれらのアドレスを「catch-all」とし、判断をユーザーに任せます。Giggal.aiはこれらをさらにチェックし、下の4つの結果のいずれかを返します。料金は1件1クレジットです。',
  pricingHeading: 'MyEmailVerifierとGiggal.aiの料金比較',
  pricingProse:
    'MyEmailVerifierは、有効期限のないクレジットを販売しています。2026年8月に確認した時点では、1,000クレジットでUS$4、10,000件でUS$15、100,000件でUS$99、100万件でUS$349でした。',
  pricingExtra: [
    'Giggal.aiは、10,000クレジットをUS$9.90、100,000件をUS$76、100万件をUS$680で販売しています。100万件では、MyEmailVerifierの方が安くなります。Giggal.aiは、キャッチオールドメインやゲートウェイの背後のアドレスにも結果を返します。',
  ],
  strengths: {
    heading: 'MyEmailVerifierが向いているケース',
    intro: 'MyEmailVerifierは、一部のリストには良い選択です。',
  },
  others: {
    heading: 'MyEmailVerifierのほかの代替ツール',
    intro: 'これらの検証ツールも、料金が安いか、毎日の無料クレジットがあります。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'QuickEmailVerification', text: 'こちらも毎日100件の無料クレジットがあります。永続クレジットは10,000件でUS$60です。' },
      { name: 'Bounceless', text: '仕事用メールアドレスで登録すると、毎月1,000件の無料クレジットが付与されます。10,000クレジットでUS$29で、キャッチオールドメインに関する手がかりも含まれます。' },
      { name: 'no2bounce', text: '10,000クレジットでUS$20で、有効期限はありません。テストメッセージを送り、キャッチオールドメインのメールボックスを確認します。' },
    ],
  },
  testHeading: 'キャッチオールドメインの行をGiggal.aiでチェックする',
  testSteps: [
    'MyEmailVerifierでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'MyEmailVerifierが「catch-all」とした行を比べます。',
  ],
  ctaHeadline: 'キャッチオールドメインのアドレスにも結果を出します',
  faqs: [
    {
      q: 'MyEmailVerifierの料金はいくらですか？',
      a: '2026年8月に確認した時点では、1,000クレジットでUS$4、10,000件でUS$15、100,000件でUS$99、100万件でUS$349でした。クレジットに有効期限はありません。',
    },
    {
      q: 'MyEmailVerifierは無料ですか？',
      a: '毎日100件の無料クレジットがあります。この毎日のクレジットは、トライアル後に終わるのではなく、毎日リセットされます。Giggal.aiは無料クレジット1,000件を1回だけ提供します。クレジットカードは不要です。',
    },
    {
      q: 'MyEmailVerifierはキャッチオールドメインのアドレスを検証しますか？',
      a: 'キャッチオールドメインを検出し、「catch-all」のステータスを返します。メールボックスの存在は確認しません。Giggal.aiは、キャッチオールドメインのアドレスにも1件1クレジットで結果を返します。',
    },
    {
      q: 'Giggal.aiのクレジットに有効期限はありますか？',
      a: 'ありません。Giggal.aiのクレジットに有効期限はありません。MyEmailVerifierのクレジットにも有効期限はありません。',
    },
  ],
  breadcrumb: 'MyEmailVerifierの代替ツール',
}

export default cfg
