// Japanese Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Scrubby's product names Quick Verification and Deep Verification
// stay in English. The competitor's words (free tier, expiry, strengths) live
// in lib/i18n/altBrands/ja/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'ja',
  slug: 'scrubby',
  path: '/ja/scrubby-alternative',
  cluster: 'altScrubby',
  metaTitle: 'Scrubbyの代替ツール：Scrubby.ioの料金を比較 | Giggal.ai',
  ogTitle: 'キャッチオールドメインとゲートウェイの背後のアドレスに対応するScrubbyの代替ツール',
  desc: 'Scrubbyは1クレジットUS$0.008で、Deep Verificationは最長72時間かかります。Giggal.aiは、キャッチオールドメインやゲートウェイの背後のアドレスを10,000件US$9.90で確認します。',
  h1: ['メール10,000件あたりUS$9.90の', 'Scrubbyの代替ツール', ''],
  heroP:
    'Scrubbyは、キャッチオールドメインのアドレスと、ゲートウェイで保護されたアドレスを検証します。Giggal.aiが重点を置くのと同じ、検証が難しいアドレスです。違いは、料金とそれぞれのチェックの仕組みです。Scrubbyは1クレジットUS$0.008です。Giggal.aiは10,000件でUS$9.90です。',
  bluf: [
    { k: '料金', v: '10,000クレジットは、ScrubbyでUS$80、Giggal.aiでUS$9.90です。' },
    { k: '詳細チェック', v: 'ScrubbyのDeep Verificationは3クレジットを使い、実際のメールを送ります。最終結果が出るまで最長72時間かかります。' },
    { k: '無料クレジット', v: 'Scrubbyの無料クレジットは200件です。Giggal.aiは1,000件です。どちらもクレジットカードは不要です。' },
    { k: '返金', v: 'Scrubbyは、すべての購入を返金不可としています。Giggal.aiは、不明の結果のクレジットを返却します。' },
  ],
  about: {
    heading: 'Scrubbyとは？',
    paragraphs: [
      'Scrubbyは、scrubby.ioのメールアドレス検証ツールです。ほかの検証ツールでは確認できない、キャッチオールドメインのアドレスやリスクのあるアドレスに重点を置いています。',
      'チェックは2種類あります。Quick Verificationは1クレジットで、通常のドメイン、キャッチオールドメイン、SEGで保護されたドメインに対応します。Deep Verificationは3クレジットです。Scrubbyが各アドレスに実際のメールを送り、72時間以内に最終結果を出します。',
      'Clay、Instantly、Smartlead、Apollo、HubSpotなどのツールと連携できます。',
    ],
  },
  reasons: {
    heading: 'Scrubbyの代替ツールが探される理由',
    items: [
      { k: '料金', v: '従量課金は1クレジットUS$0.008です。10,000件のチェックでUS$80、100,000件でUS$800です。' },
      { k: '待ち時間', v: 'Deep Verificationの結果が出るまで、最長72時間かかります。' },
      { k: '実際のメール送信', v: 'Deep Verificationは、リストの各アドレスに実際のメールを送ります。' },
      { k: '返金なし', v: 'Scrubbyは、すべての購入を返金不可としています。' },
    ],
  },
  catchAllHeading: 'キャッチオールドメインとゲートウェイの背後のアドレス：ScrubbyとGiggal.aiの比較',
  catchAllProse:
    'ScrubbyもGiggal.aiも、キャッチオールドメインのアドレスとゲートウェイで保護されたアドレスに結果を返します。Giggal.aiはどのアドレスも1クレジットで、より詳細なチェックの区分はありません。Proofpoint、Mimecast、Barracudaなど、背後を確認できる15種類のゲートウェイの名前を挙げています。答えが得られなかった場合、クレジットは返却されます。',
  pricingHeading: 'ScrubbyとGiggal.aiの料金比較',
  pricingProse:
    'Scrubbyの従量課金は1クレジットUS$0.008で、10,000クレジットはUS$80です。月額プランは、Starterが6,000クレジットで月額US$47、Growthが15,000クレジットで月額US$97、Proが100,000クレジットで月額US$497です。従量課金のクレジットに有効期限はなく、プランのクレジットは繰り越されます。',
  pricingExtra: [
    'Deep Verificationは1件で3クレジットを使います。そのため、10,000件の詳細チェックには30,000クレジットが必要です。Giggal.aiは、10,000クレジットをUS$9.90、100,000件をUS$76で販売しています。',
  ],
  strengths: {
    heading: 'Scrubbyが向いているケース',
    intro: 'Scrubbyには、知っておきたい強みがあります。',
  },
  others: {
    heading: 'Scrubbyのほかの代替ツール',
    intro: 'これらのツールも、キャッチオールドメインのアドレスに結果を返します。料金は2026年11月27日に各社のサイトで確認したものです。',
    items: [
      { name: 'no2bounce', text: 'テストメッセージを送り、キャッチオールドメインのメールボックスを確認します。10,000クレジットでUS$20で、有効期限はありません。' },
      { name: 'Listmint', text: 'キャッチオールドメインのアドレスを手作業で確認します。Starterは月額US$99で、標準クレジット20,000とキャッチオールドメイン用クレジット5,000が付きます。' },
      { name: 'Allegrow', text: 'キャッチオールドメインの連絡先に有効か無効かを返し、ProofpointとMimecastの名前を挙げています。Starterは月額US$99です。' },
    ],
  },
  testHeading: 'キャッチオールドメインのアドレスでGiggal.aiを試す',
  testSteps: [
    'Scrubbyでチェック済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    '同じキャッチオールドメインのアドレスについて、Scrubbyの結果と比べます。',
  ],
  ctaHeadline: '検証が難しい同じアドレスを、10,000件US$9.90でチェック',
  faqs: [
    {
      q: 'Scrubbyの料金はいくらですか？',
      a: 'Scrubbyの従量課金は1クレジットUS$0.008で、10,000件ではUS$80です。月額プランは6,000クレジットでUS$47からです。Deep Verificationは、メールアドレス1件につき3クレジットを使います。',
    },
    {
      q: 'ScrubbyのDeep Verificationとは何ですか？',
      a: '検証が難しいアドレス向けの、Scrubbyの時間がかかるチェックです。3クレジットを使い、各アドレスに実際のメールを送り、72時間以内に最終結果を出します。',
    },
    {
      q: 'Scrubbyに無料トライアルはありますか？',
      a: 'はい。Scrubbyには、クレジットカード不要の無料クレジットが200件あります。Giggal.aiには、クレジットカード不要の無料クレジットが1,000件あります。',
    },
    {
      q: 'Giggal.aiはScrubbyの代替ツールとして適していますか？',
      a: 'はい。どちらも、キャッチオールドメインやゲートウェイの背後のアドレスに結果を返します。Giggal.aiは10,000クレジットでUS$9.90です。結果が不明の場合はクレジットを返却します。',
    },
  ],
  breadcrumb: 'Scrubbyの代替ツール',
}

export default cfg
