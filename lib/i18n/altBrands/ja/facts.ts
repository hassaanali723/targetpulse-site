// ja words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: '無料クレジットなし',
    creditsExpire: '使わなかった月間クレジットは、月間付与量の2倍まで繰り越されます',
    catchAllCreditCost: 'はっきりした結果1件につき0.25クレジット。不明の結果は無料です',
    claimedAccuracy: 'バリデーションの正確性99.5%と主張',
    pricingBasisNote: 'LeadMagicは、1つの共通クレジットを使う月額サブスクリプションです。EssentialはUS$99（5,000クレジット）、GrowthはUS$249（20,000）、ProfessionalはUS$499（50,000）、UltimateはUS$849（100,000）です。はっきりした結果のバリデーションは1件0.25クレジットで、不明の結果は無料です。上の数値は、その件数のバリデーションに対応する最小の月額プランです。年払いでは2か月分が無料になります。Giggal.aiの数値は、従量課金の1回払いの料金です。',
    betterFitFor: [
      '検証以外の幅広いデータ補完（携帯電話番号、企業データ、転職情報、広告に関するデータ）',
      'キャッチオールドメインのアドレスに関する自社のテストデータの公開。ほとんどのベンダーは公開していません',
      '検索、データ補完、検証を1つのサブスクリプションで使いたいチーム',
      'エンドポイントごとにクレジット料金が決まっている、開発者向けのAPI',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  anymailfinder: {
    freeTier: '100クレジット付きの7日間トライアル。クレジットカードは確認されますが、請求はされません',
    creditsExpire: 'サブスクリプションが有効な間は上限なしで繰り越されます。解約すると、請求期間の終わりに失効します',
    catchAllCreditCost: '1回のチェックに0.2クレジット（ほかの検証と同じ）',
    claimedAccuracy: 'カバー率86.4%で正確性98.9%と主張',
    pricingBasisNote: 'Anymail Finderは月額サブスクリプションです。クレジットの段階は、月額US$29の400クレジットから、月額US$799の100,000クレジットまであります。ほかで見つけたメールアドレスの検証は、1回のチェックに0.2クレジットを使います。上の数値は、その件数のチェックに対応する最小の月額プランです。年払いでは33%安くなります。月100万件のチェックは、月額プランの最上位の段階を超えています。Giggal.aiの数値は、従量課金の1回払いの料金です。',
    betterFitFor: [
      '氏名とドメインからメールアドレスを見つける機能。Giggal.aiにはこの機能がありません',
      '97%以上の配信を明記した保証',
      'サブスクリプションを続けている間、上限なしで繰り越されるクレジット',
      '長く続いているブランドと、多くの公開コンテンツ',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  findymail: {
    freeTier: '登録時に10クレジット（クレジットカード不要）',
    creditsExpire: '使わなかったクレジットは、月間付与量の2倍まで繰り越されます',
    catchAllCreditCost: '1クレジット（ほかの検証と同じ）',
    claimedAccuracy: 'バウンス率5%未満を保証し、超えた場合はクレジットを返却',
    pricingBasisNote: 'Findymailは、月額US$99〜US$999の利用量ベースのプランを販売しています。これらのプランにはクレジット数の記載がありません。ほかにクレジット制のプランが1つあり、Starterは月額US$99で、検索用5,000クレジットと検証用5,000クレジットが付きます。それより多い件数はEnterpriseで、個別見積もりです。そのため、月10,000件、100,000件、100万件の検証について公開された料金はありません。Giggal.aiの数値は、従量課金の1回払いの料金です。',
    betterFitFor: [
      'そもそもメールアドレスを見つける機能。Giggal.aiにはこの機能がまったくありません',
      'クレジットの返却で裏付けられたバウンス率の保証',
      'LinkedInとSales Navigatorでメールアドレスを見つけて検証するChrome拡張機能',
      'SOC 2 Type 2への対応と、EU内でのホスティング',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  listmint: {
    freeTier: '無料で始められます（クレジット数は非公開）',
    creditsExpire: '公開されていません',
    catchAllCreditCost: 'キャッチオールドメイン用の別クレジット。US$99のプランで月5,000',
    pricingBasisNote: 'Listmintは月額サブスクリプションで、クレジットが2種類に分かれています。Starterは月額US$99で、標準クレジット20,000とキャッチオールドメイン用クレジット5,000が付きます。Agencyは月額US$187で、標準クレジット50,000とキャッチオールドメイン用クレジット10,000が付きます。それより多い件数はEnterpriseで、料金は問い合わせ制です。Giggal.aiの数値は、従量課金の1回払いの料金です。',
    betterFitFor: [
      'Listmintが手作業で行うと説明しているキャッチオールドメインのチェック',
      'キャッチオールドメインのアドレスのリアルタイム検証',
      'エントリープランに付く、標準クレジットの大きな月間付与量',
    ],
    notes: { Enterprise: 'Enterprise' },
  },
  allegrow: {
    freeTier: '最大1,000件のアドレスを対象とする14日間トライアル',
    creditsExpire: 'プランの付与量は月単位です。トライアルは14日で終了します',
    catchAllCreditCost: 'プランの付与量から1連絡先',
    claimedAccuracy: '99%と主張',
    pricingBasisNote: 'Allegrowは月額サブスクリプションです。Starterは月額US$99で5,000連絡先、追加クレジットは1,000件ごとにUS$8です。そのため、月10,000件ではUS$139になります。これは公開料金をもとにした当社の計算で、Allegrowが掲載しているプランではありません。100,000件と1,000,000件の行は、年払いで月額US$1,340のScale Plus Unlimitedで、検証は無制限です。Giggal.aiの数値は、従量課金の1回払いの料金です。',
    betterFitFor: [
      '無制限の検証プラン。Giggal.aiには同等のプランがありません',
      '検証に加えて、送信者レピュテーションの評価と受信トレイへの到達のモニタリング',
      'HubSpot、Outreach、Salesloftとのネイティブ連携、SSO、SOC 2レポート',
      '架空のアドレスでの誤検出（false positive）に関する調査の公開',
    ],
    estimateNote: 'Allegrowの公開料金をもとにした当社の計算です。Allegrowが掲載しているプランではありません。',
    notes: { unlimited: '無制限' },
  },
  no2bounce: {
    freeTier: '100クレジット（クレジットカード不要、有効期限なし）',
    creditsExpire: 'クレジットに有効期限はありません。月ごとの利用上限もありません',
    catchAllCreditCost: 'メールアドレス1件につき1クレジット（標準のチェックと同じ）',
    claimedAccuracy: '99.6%と主張',
    betterFitFor: [
      '10,000クレジットから5,000万クレジットまでの多くの料金段階',
      'Giggal.aiと同じく、有効期限のないクレジット',
      '従量課金より15%安い月額プランと、20%安い年額プラン',
      '同じクレジットで使えるメールアドレス検索とドメイン検索',
    ],
  },
  quickemailverification: {
    freeTier: '毎日100クレジット（無料）',
    creditsExpire: '従量課金の永続クレジットに有効期限はありません',
    catchAllCreditCost: '「catch-all」というステータスで返され、存在は確認されません',
    claimedAccuracy: '99%と主張',
    betterFitFor: [
      '毎日100件の無料クレジットと、毎月の無料枠',
      '有効期限のない、従量課金の永続クレジット',
      '500クレジットでUS$4からという低い初期料金',
      '実績のあるリアルタイムAPI',
    ],
  },
  myemailverifier: {
    freeTier: '毎日100クレジット（無料）',
    creditsExpire: 'クレジットに有効期限はありません',
    catchAllCreditCost: '「catch-all」というステータスで返され、存在は確認されません',
    betterFitFor: [
      '検証1件あたりUS$0.0025という非常に低い基本料金',
      'トライアル後に終わるのではなく、毎日リセットされる100件の無料クレジット',
      '有効期限のないクレジットと、大量購入時のボーナスクレジットのキャンペーン',
      'G2、Capterra、Trustpilotでの評価の高い公開レビューの実績',
    ],
  },
  scrubby: {
    freeTier: '200クレジット',
    creditsExpire: '従量課金のクレジットに有効期限はありません。プランのクレジットは繰り越されます',
    catchAllCreditCost: 'Quick Verificationでは1クレジット。Deep Verificationは3クレジットで、最長72時間かかります',
    claimedAccuracy: '料金ページには記載がありません',
    betterFitFor: [
      '検証が難しいアドレスに実際のメールを送るDeep Verificationのオプション',
      'クレジットカード不要の、200クレジットの無料枠',
      '従量課金と月額プランの両方。プランのクレジットは繰り越されます',
      '幅広いツール群ではなく、1つの作業に絞ったサービス',
    ],
    notes: { 'Quote only': '見積もりのみ' },
  },
  mailfloss: {
    freeTier: '毎月500件の検証。サブスクリプションには7日間のトライアルもあります',
    creditsExpire: '前払いのクレジットに有効期限はありません。サブスクリプションのクレジットは毎月リセットされます',
    catchAllCreditCost: 'フラグを付けるのみで、存在は確認しません',
    betterFitFor: [
      'メール配信プラットフォームに直接つながる、毎日の自動クリーニング',
      'Mailchimp、Klaviyo、HubSpotなど41のネイティブ連携',
      '手動アップロードではなく、設定後は自動で動くサブスクリプション',
      'サブスクリプションと前払いクレジットの両方の選択肢',
    ],
  },
  bounceless: {
    freeTier: '仕事用メールアドレスで毎月1,000クレジット（クレジットカード不要）',
    creditsExpire: 'パックとサブスクリプションのどちらのクレジットにも有効期限はありません',
    catchAllCreditCost: 'キャッチオールドメインに関する手がかりは、1クレジットのチェックに含まれます',
    betterFitFor: [
      '仕事用メールアドレスで毎月1,000クレジットの無料枠',
      '1回払いのパックと月額サブスクリプションの両方。クレジットに有効期限はありません',
      '1つのアカウントで使える追加ツール（送信元の状態、受信トレイへの到達、登録フォームのチェック）',
      '非常に大きな件数での低い料金（100万件でUS$579）',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n}の主な情報`,
  factRows: { price10k: '10,000件のチェック', free: '無料クレジット', expiry: 'クレジットの有効期限', catchAll: 'キャッチオールドメイン' },
  perMonth: '/月',
  notPublished: '公開されていません',
}
