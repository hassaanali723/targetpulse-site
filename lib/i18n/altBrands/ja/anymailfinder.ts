// Japanese Anymailfinder alternative page. Translated from app/(en)/anymailfinder-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'anymailfinder',
  path: '/ja/anymailfinder-alternative',
  cluster: 'altAnymailfinder',
  metaTitle: 'Anymailfinderの代替ツール：メールアドレス検証向け | Giggal.ai',
  ogTitle: 'メールリストの検証に使えるAnymailfinderの代替ツール',
  desc: 'Anymailfinderの代替ツールをお探しですか？Anymail Finderの料金と、10,000クレジットUS$9.90の従量課金制メールアドレス検証ツールGiggal.aiを比較します。',
  h1: ['すでにあるリストを検証する', 'Anymailfinderの代替ツール', ''],
  heroP:
    'Anymail Finderは、メールアドレスを見つけるためのツールです。検証ツールは補助的な機能で、月額プランから支払います。リストがすでにあり、検証だけが必要なら、Giggal.aiが10,000件US$9.90で行います。サブスクリプションはありません。',
  bluf: [
    { k: '主な用途', v: 'Anymail Finderはメールアドレスを見つけます。Giggal.aiは、すでにあるメールアドレスを検証します。' },
    { k: '料金', v: '検証ツールのチェックは1回0.2クレジットで、プランは月額US$29からです。Giggal.aiは10,000件でUS$9.90、1回払いです。' },
    { k: 'クレジット', v: 'Anymail Finderのクレジットは、解約すると失効します。Giggal.aiのクレジットに有効期限はありません。' },
    { k: '不明', v: 'Anymail Finderはすべてのチェックに課金します。Giggal.aiは、結果が不明の場合にクレジットを返却します。' },
  ],
  about: {
    heading: 'Anymail Finderとは？',
    paragraphs: [
      'Anymail Finder（Anymailfinderとも表記）は、B2B営業向けのメールアドレス検索ツールです。氏名と会社名を入力すると、検証済みの仕事用メールアドレスを返します。ドメイン、役職、LinkedInのURLでも検索できます。',
      'Chrome拡張機能、最大100,000行の一括アップロード、APIがあります。1人のメールアドレスを見つけるのに1クレジットを使います。課金されるのは、検証済みのメールアドレスが見つかった場合だけです。',
      'Anymail Finderには、ほかの入手元のリスト向けにメールアドレス検証ツールもあります。チェックは1回0.2クレジットで、毎回課金されます。結果は有効、リスクあり、無効のいずれかです。',
    ],
  },
  reasons: {
    heading: 'Anymailfinderの代替ツールが探される理由',
    items: [
      { k: '月額プラン', v: 'クレジットが残るのは、サブスクリプションを続けている間だけです。解約すると、請求期間の終わりに失効します。' },
      { k: 'チェックごとの課金', v: '検証ツールは、確認できなかったアドレスも含め、すべてのチェックに0.2クレジットを課金します。' },
      { k: 'トライアルにカードが必要', v: '7日間のトライアルにはクレジットカードが必要です。Giggal.aiは無料クレジット1,000件を提供し、クレジットカードは不要です。' },
      { k: 'ゲートウェイ', v: 'Anymail Finderは、ProofpointやMimecastなどのセキュアメールゲートウェイへの対応を公表していません。' },
    ],
  },
  catchAllHeading: 'Anymail FinderとGiggal.aiはキャッチオールメールをどう扱うか',
  catchAllProse:
    'Anymail Finderによると、キャッチオールドメインのアドレスの大半を有効か無効かに判定します。確認できない少数のアドレスは、リスクありのままです。Giggal.aiもキャッチオールドメインのアドレスに結果を返し、料金は1件1クレジットです。さらに、名称を公開している15種類のセキュアメールゲートウェイの背後にあるアドレスも確認します。Giggal.aiが答えを得られない場合、結果は不明となり、クレジットは返却されます。',
  pricingHeading: 'メールアドレス検証にかかるAnymail Finderの料金',
  pricingProse:
    'Anymail Finderは、月額US$29の400クレジットから、月額US$799の100,000クレジットまでの月額プランを販売しています。年払いでは33%安くなります。検証ツールのチェックは1回0.2クレジットなので、10,000件のチェックには2,000クレジットを使います。',
  pricingExtra: [
    'そのため、月10,000件のチェックにはUS$89のプラン、月100,000件にはUS$299のプランが必要です。使わなかったクレジットは、サブスクリプションを続けている間は繰り越されます。Giggal.aiは10,000クレジットをUS$9.90、100,000クレジットをUS$76で、1回払いで販売しています。有効期限はありません。',
  ],
  strengths: {
    heading: 'Anymail Finderの方が適している場合',
    intro: 'Anymail Finderには、Giggal.aiにない機能があります。次の用途なら、Anymail Finderを選んでください。',
  },
  others: {
    heading: 'Anymailfinderのほかの代替ツール',
    intro: 'これらのツールは、メールアドレスの検索、検証、またはその両方を行います。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'Findymail', text: 'メールアドレスを見つけて検証します。LinkedInとSales Navigator用のChrome拡張機能があります。Starterは月額US$99で、検索用5,000クレジットと検証用5,000クレジットが付きます。' },
      { name: 'LeadMagic', text: 'メールアドレス検索、携帯電話番号、バリデーションを備えたB2Bデータプラットフォームです。バリデーションは、はっきりした結果1件につき0.25クレジットで、プランは月額US$99からです。' },
      { name: 'Scrubby', text: 'キャッチオールドメインと、ゲートウェイで保護されたアドレスに対応した検証ツールです。従量課金のクレジットは1件US$0.008で、有効期限はありません。' },
    ],
  },
  testHeading: 'Anymail FinderのエクスポートをGiggal.aiでチェックする',
  testSteps: [
    'Anymail Finderでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'Anymail Finderがリスクありとした行を、Giggal.aiの結果と比べます。',
  ],
  ctaHeadline: 'すでに見つけたメールアドレスを検証',
  faqs: [
    {
      q: 'Anymailfinderの代替ツールで最適なものは？',
      a: 'どの作業をするかによります。メールアドレスを見つけるなら、FindymailかLeadMagicを検討してください。すでにあるリストの検証なら、Giggal.aiは10,000クレジットでUS$9.90です。サブスクリプションはなく、クレジットに有効期限もありません。',
    },
    {
      q: 'Anymail Finderの料金はいくらですか？',
      a: '月額プランは、400クレジットでUS$29から、100,000クレジットでUS$799までです。年払いでは33%安くなります。ほかの入手元のメールアドレスの検証は、0.2クレジットです。',
    },
    {
      q: 'Anymail Finderに無料トライアルはありますか？',
      a: 'はい。100クレジット付きの7日間トライアルがあります。クレジットカードの登録が必要で、カードは確認されますが、請求はされません。Giggal.aiは無料クレジット1,000件を提供し、クレジットカードは不要です。',
    },
    {
      q: 'Giggal.aiはAnymail Finderのようにメールアドレスを見つけられますか？',
      a: 'いいえ。Giggal.aiは、すでにあるアドレスの検証だけを行います。先に検索ツールを使い、送信前にGiggal.aiでリストを検証してください。',
    },
    {
      q: 'Anymail Finderのクレジットに有効期限はありますか？',
      a: 'プランが有効な間は、上限なしで繰り越されます。解約すると、請求期間の終わりに失効します。Giggal.aiのクレジットに有効期限はありません。',
    },
  ],
  breadcrumb: 'Anymailfinderの代替ツール',
}

export default cfg
