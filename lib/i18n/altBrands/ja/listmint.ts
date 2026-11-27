// Japanese Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'listmint',
  path: '/ja/listmint-alternative',
  cluster: 'altListmint',
  metaTitle: 'Listmintの代替ツール：キャッチオールメールの検証 | Giggal.ai',
  ogTitle: 'キャッチオールメールの検証に使えるListmintの代替ツール',
  desc: 'Listmintは月額US$99で、キャッチオールドメイン用クレジットは5,000です。Giggal.aiはキャッチオールメールを1件1クレジット、10,000件US$9.90でチェックします。クレジットに有効期限はありません。',
  h1: ['クレジットが1種類だけの', 'Listmintの代替ツール', ''],
  heroP:
    'Listmintは、キャッチオールドメインのアドレスに重点を置いたメールアドレス検証ツールです。各プランのクレジットを、標準クレジットと、より少ないキャッチオールドメイン用クレジットに分けています。Giggal.aiのクレジットは1種類です。キャッチオールドメインのチェックも、ほかのメールアドレスと同じ1クレジットです。',
  bluf: [
    { k: 'クレジット', v: 'Listmintのクレジットは2種類です。Giggal.aiは1種類で、メールアドレス1件につき1クレジットです。' },
    { k: '料金', v: 'ListmintのStarterは月額US$99です。Giggal.aiは10,000クレジットでUS$9.90、1回払いです。' },
    { k: 'キャッチオールドメイン', v: 'ListmintのStarterに付くキャッチオールドメイン用クレジットは月5,000です。Giggal.aiに別の上限はありません。' },
    { k: 'ゲートウェイ', v: 'Giggal.aiは、名称を公開している15種類のメールゲートウェイの背後のアドレスを確認します。Listmintは、対応するゲートウェイの名前を挙げていません。' },
  ],
  about: {
    heading: 'Listmintとは？',
    paragraphs: [
      'Listmintは、listmint.ioのメールアドレス検証サービスです。標準のSMTPチェックと、別のキャッチオールドメインのチェックを行います。Listmintによると、キャッチオールドメインのアドレスは手作業で検証しています。',
      'キャッチオールドメイン用クレジットは、標準クレジットより高くなっています。そのため、各プランには多くの標準クレジットと、より少ないキャッチオールドメイン用クレジットが含まれます。',
      'Listmintは、キャッチオールドメインのアドレスをリアルタイムで検証できるとも説明しています。',
    ],
  },
  reasons: {
    heading: 'Listmintの代替ツールが探される理由',
    items: [
      { k: 'キャッチオールドメインの上限', v: 'Starterに付くキャッチオールドメイン用クレジットは月5,000です。大きなB2Bリスト1つで使い切ることがあります。' },
      { k: '月額プラン', v: 'Listmintは毎月請求します。Giggal.aiのクレジットは1回払いで購入し、有効期限はありません。' },
      { k: '件数', v: '掲載されている最大のプランはAgencyで、標準クレジットは50,000です。それ以上には、Enterpriseの見積もりが必要です。' },
      { k: 'ゲートウェイ', v: 'Listmintは、背後を確認できるセキュアメールゲートウェイの名前を挙げていません。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインのアドレスでのListmintとGiggal.aiの違い',
  catchAllProse:
    'Listmintは、キャッチオールドメインのチェックを別のクレジットから差し引きます。US$99のStarterプランでは、そのクレジットは月5,000です。Giggal.aiに別のクレジットはありません。キャッチオールドメインかどうかに関係なく、どのアドレスも1クレジットです。Giggal.aiが答えを得られない場合、結果は不明となり、クレジットは返却されます。',
  pricingHeading: 'Listmintの料金とGiggal.aiの比較',
  pricingProse:
    'ListmintのStarterは月額US$99で、標準クレジット20,000とキャッチオールドメイン用クレジット5,000が付きます。Agencyは月額US$187で、標準クレジット50,000とキャッチオールドメイン用クレジット10,000が付きます。Enterpriseの料金は問い合わせ制です。',
  pricingExtra: [
    'Giggal.aiにプランの段階はありません。10,000クレジットはUS$9.90、100,000クレジットはUS$76です。どのクレジットも、キャッチオールドメインのアドレスに使えます。',
  ],
  strengths: {
    heading: 'Listmintが適している場合',
    intro: '次のものが必要なら、Listmintが合っています。',
  },
  others: {
    heading: 'Listmintのほかの代替ツール',
    intro: 'これらの検証ツールも、キャッチオールドメインのアドレスに結果を返します。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Scrubby', text: 'キャッチオールドメインと、ゲートウェイで保護されたドメインを1クレジットでチェックします。Deep Verificationは3クレジットで、実際のメールを送ります。従量課金は1クレジットUS$0.008です。' },
      { name: 'no2bounce', text: 'テストメッセージを送って、キャッチオールドメインのメールボックスを確認します。従量課金の10,000クレジットはUS$20で、有効期限はありません。' },
      { name: 'Allegrow', text: '営業チーム向けに、キャッチオールドメインの連絡先に有効か無効かを返します。Starterは月額US$99で5,000連絡先です。' },
    ],
  },
  testHeading: 'ListmintのリストをGiggal.aiでチェックする',
  testSteps: [
    'Listmintでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'キャッチオールドメインの行を、Listmintの結果と比べます。',
  ],
  ctaHeadline: 'キャッチオールメールを、別のクレジット上限なしでチェック',
  faqs: [
    {
      q: 'Listmintの料金はいくらですか？',
      a: 'ListmintのStarterは月額US$99で、標準クレジット20,000とキャッチオールドメイン用クレジット5,000が付きます。Agencyは月額US$187で、標準クレジット50,000とキャッチオールドメイン用クレジット10,000が付きます。Enterpriseの料金は問い合わせ制です。',
    },
    {
      q: 'Listmintにキャッチオールドメイン用の別クレジットがあるのはなぜですか？',
      a: 'Listmintによると、キャッチオールドメインのチェックは手間がかかるため、通常のSMTPクレジットより高くなっています。Giggal.aiは、キャッチオールドメインを含め、どのアドレスも1クレジットです。',
    },
    {
      q: 'Giggal.aiはListmintの代替ツールとして適していますか？',
      a: 'キャッチオールドメインのアドレスが多いリストを検証するなら、適しています。Giggal.aiには、キャッチオールドメインだけの上限も月額プランもありません。料金は10,000クレジットでUS$9.90です。',
    },
    {
      q: 'Listmintに無料トライアルはありますか？',
      a: 'Listmintは無料で始められますが、含まれるクレジット数は公開していません。Giggal.aiは無料クレジット1,000件を提供し、クレジットカードは不要です。',
    },
  ],
  breadcrumb: 'Listmintの代替ツール',
}

export default cfg
