// Japanese QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, expiry, strengths) live in lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'quickemailverification',
  path: '/ja/quickemailverification-alternative',
  cluster: 'altQuickemailverification',
  metaTitle: 'QuickEmailVerificationの代替ツールと料金 | Giggal.ai',
  ogTitle: 'キャッチオールドメインのアドレスも確認するQuickEmailVerificationの代替ツール',
  desc: 'QuickEmailVerificationは10,000件でUS$60、キャッチオールドメインのアドレスにはステータスを付けるだけです。Giggal.aiは10,000件US$9.90で、これらのアドレスにも結果を返します。',
  h1: ['キャッチオールドメインのアドレスも確認する', 'QuickEmailVerificationの代替ツール', ''],
  heroP:
    'QuickEmailVerificationは、長く運営されているメールアドレス検証ツールで、毎日100件の無料クレジットがあります。キャッチオールドメインのアドレスには「catch-all」のステータスを付けるだけで、それ以上は確認しません。Giggal.aiはこれらのアドレスにも結果を返します。料金は10,000件でUS$9.90です。',
  bluf: [
    { k: 'キャッチオールドメイン', v: 'QuickEmailVerificationは「catch-all」というステータスを付けるだけです。Giggal.aiは結果を返します。' },
    { k: '料金', v: '10,000クレジットは、QuickEmailVerificationでUS$60、Giggal.aiでUS$9.90です。' },
    { k: '無料クレジット', v: 'QuickEmailVerificationは毎日100件です。Giggal.aiは1回だけ1,000件で、クレジットカードは不要です。' },
    { k: '有効期限', v: 'どちらのツールも、従量課金のクレジットに有効期限はありません。' },
  ],
  about: {
    heading: 'QuickEmailVerificationとは？',
    paragraphs: [
      'QuickEmailVerificationは、quickemailverification.comのメールアドレス検証サービスです。リストの一括検証、1件ずつの検証、REST APIによる登録フォームの検証に対応しています。',
      '無料プランでは、毎日100件の無料クレジットがあります。ZapierやWordPressなど、50以上のマーケティングツールと連携できるとしています。',
      'サイトにはISO 27001、GDPR、CCPA、HIPAAのバッジを表示しており、正確性は99%と主張しています。',
    ],
  },
  reasons: {
    heading: 'QuickEmailVerificationの代替ツールが探される理由',
    items: [
      { k: 'キャッチオールドメイン', v: 'キャッチオールドメインのアドレスは、「catch-all」のまま返ってきます。送信するかどうかは、自分で決める必要があります。' },
      { k: '料金', v: '10,000クレジットでUS$60、100,000クレジットでUS$320です。' },
      { k: 'ゲートウェイ', v: 'ProofpointやMimecastなどのセキュアメールゲートウェイへの対応は、公表していません。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインのアドレスは、それぞれのツールでどう扱われるか',
  catchAllProse:
    'QuickEmailVerificationは、キャッチオールドメインのアドレスを「catch-all」のステータスで返します。メールボックスの存在は確認しません。B2Bのリストでは、はっきりした答えのないアドレスが多く残ることがあります。Giggal.aiはこれらのアドレスをさらにチェックし、4つの結果のいずれかを返します。料金は1件1クレジットです。',
  pricingHeading: 'QuickEmailVerificationとGiggal.aiの料金比較',
  pricingProse:
    'QuickEmailVerificationは、有効期限のない永続クレジットを販売しています。500クレジットでUS$4、10,000件でUS$60、100,000件でUS$320、100万件でUS$1,350です。無料の日次プランでは、毎日100クレジットが使えます。',
  pricingExtra: ['Giggal.aiは、10,000クレジットをUS$9.90、100,000件をUS$76、100万件をUS$680で販売しています。こちらのクレジットにも有効期限はありません。'],
  strengths: {
    heading: 'QuickEmailVerificationが向いているケース',
    intro: 'QuickEmailVerificationには、はっきりした強みがあります。',
  },
  others: {
    heading: 'QuickEmailVerificationのほかの代替ツール',
    intro: 'これらの検証ツールは、キャッチオールドメインのアドレスをそれぞれ違う方法で扱います。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Bounceless', text: '10,000クレジットでUS$29です。キャッチオールドメインに関する手がかりも料金に含まれます。' },
      { name: 'no2bounce', text: '10,000クレジットでUS$20です。テストメッセージを送り、キャッチオールドメインのメールボックスを確認します。' },
      { name: 'Mailfloss', text: '41のメール配信プラットフォームの中で、毎日リストをクリーニングします。前払いクレジットは10,000件でUS$40です。' },
    ],
  },
  testHeading: 'キャッチオールドメインの行をGiggal.aiでもう一度チェックする',
  testSteps: [
    'QuickEmailVerificationでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'QuickEmailVerificationが「catch-all」とした行を見て、結果を比べます。',
  ],
  ctaHeadline: '「catch-all」と表示されたアドレスにも結果を出します',
  faqs: [
    {
      q: 'QuickEmailVerificationの料金はいくらですか？',
      a: '永続クレジットは500件US$4からです。10,000件はUS$60、100,000件はUS$320、100万件はUS$1,350です。これらのクレジットに有効期限はありません。',
    },
    {
      q: 'QuickEmailVerificationは無料ですか？',
      a: '無料プランがあり、毎日100クレジットが使えます。このクレジットは毎日リセットされます。Giggal.aiは無料クレジット1,000件を1回だけ提供します。クレジットカードは不要で、一括アップロードにも使えます。',
    },
    {
      q: 'QuickEmailVerificationはキャッチオールドメインのアドレスを検証しますか？',
      a: 'キャッチオールドメインを検出し、「catch-all」のステータスを返します。メールボックスが存在するかは確認しません。Giggal.aiはこれらのアドレスにも結果を返します。',
    },
    {
      q: 'Giggal.aiはQuickEmailVerificationの代替ツールとして適していますか？',
      a: 'はい。キャッチオールドメインのアドレスが多いB2Bのリストに向いています。Giggal.aiの料金は10,000クレジットでUS$9.90です。これらのアドレスにも結果を返します。',
    },
  ],
  breadcrumb: 'QuickEmailVerificationの代替ツール',
}

export default cfg
