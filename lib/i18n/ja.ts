// Japanese strings for the shared chrome and the two interactive components.
// One page set for Japan (SEO-Plan/i18n-batch3-ja-keyword-plan.md).
// Polite style (です・ます). Terms follow SEO-Plan/i18n-batch3-ja-terminology.md:
// メールアドレスの存在確認, メールアドレス検証, キャッチオールドメイン (never
// キャッチオール on its own in a title or heading), 有効 / 無効 / リスクあり / 不明.
// Numbers 1,000 and 10,000 (ja-JP), prices US$9.90 (currency stays USD),
// dates 2026年10月28日.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  // Same links, in the same order, as the English navbar (components/Navbar.tsx).
  links: [
    { name: 'キャッチオールドメイン検証', href: '/ja/catch-all-verification' },
    { name: '連携', href: '/ja/integrations' },
    { name: 'MCP', href: '/ja/mcp' },
    { name: '料金', href: '/ja/pricing' },
    { name: 'アフィリエイト', href: '/ja/affiliates' },
  ],
  login: 'ログイン',
  signup: '無料登録',
  menu: 'メニューを開く',
  homeAria: 'Giggal.aiのホーム',
}

export const footer = {
  blurb:
    'メールボックスが実在するかを確認するメールアドレス検証ツールです。キャンペーンを実在する人の受信トレイに届けます。ほかのツールが判定しないキャッチオールドメインやアクセプトオール（accept-all）のドメインにも対応しています。',
  solutions: {
    heading: 'ソリューション',
    links: [
      { name: 'キャッチオールドメインの検証', href: '/ja/catch-all-verification' },
      { name: 'MCPサーバー', href: '/ja/mcp' },
    ],
  },
  resources: {
    heading: 'リソース',
    links: [
      { name: 'ブログ', href: '/ja/blog' },
      { name: '用語集', href: '/ja/glossary' },
      { name: '検証ツールの比較（英語）', href: '/alternatives' },
      { name: 'ZeroBounceの代替ツール', href: '/ja/zerobounce-alternative' },
      { name: 'NeverBounceの代替ツール', href: '/ja/neverbounce-alternative' },
      { name: 'Snov.ioの代替ツール', href: '/ja/snovio-alternative' },
      { name: 'APIドキュメント', href: '/ja/api-docs' },
    ],
  },
  freeTools: {
    heading: '無料ツール',
    links: [
      { name: 'メールアドレス存在確認', href: '/ja/email-checker' },
      { name: '捨てメアド判定', href: '/ja/disposable-email-checker' },
      { name: '捨てアド・捨てメアド一覧', href: '/ja/disposable-email' },
      { name: 'フリーメール一覧', href: '/ja/free-email-providers' },
      { name: 'メールアドレス抽出ツール', href: '/ja/email-extractor' },
      { name: 'DKIM生成ツール', href: '/ja/dkim-generator' },
      { name: 'DMARCレコード生成ツール', href: '/ja/dmarc-generator' },
      { name: 'MXレコード確認', href: '/ja/mx-lookup' },
      { name: 'SPFレコードチェック', href: '/ja/spf-checker' },
      { name: 'Gmailのプラスアドレス（英語）', href: '/gmail-plus-addressing' },
      { name: 'バウンス率計算ツール', href: '/ja/bounce-rate-calculator' },
      { name: 'メールアドレスの組み合わせ作成（英語）', href: '/email-permutator' },
      { name: 'BIMIレコード生成ツール', href: '/ja/bimi-generator' },
      { name: 'スパムワードチェッカー（英語）', href: '/spam-word-checker' },
      { name: 'メール署名作成ツール', href: '/ja/email-signature-generator' },
    ],
  },
  product: {
    heading: '製品',
    // Same order as the English footer: the paid product only.
    links: [
      { name: 'メールアドレス検証', href: '/ja' },
      { name: 'メールアドレスの一括検証', href: '/ja/bulk-email-verifier' },
      { name: 'メールリストのクリーニング（英語）', href: '/email-list-cleaning' },
      { name: '連携', href: '/ja/integrations' },
      { name: 'メールアドレス検証API（英語）', href: '/email-verification-api' },
      { name: '料金', href: '/ja/pricing' },
    ],
  },
  company: {
    heading: '会社情報',
    links: [
      { name: 'お問い合わせ', href: '/ja/contact' },
      { name: 'アフィリエイトプログラム', href: '/ja/affiliates' },
    ],
  },
  legal: [
    { name: '利用規約', href: '/ja/terms' },
    { name: 'プライバシーポリシー', href: '/ja/privacy' },
    { name: '返金ポリシー', href: '/ja/refund-policy' },
  ],
  legalHeading: '法的情報',
  rights: '無断転載を禁じます。',
  operatedBy: 'Giggal.aiは、英国ロンドンのTargetPulse Ltdが運営しています。',
  abuseReports: '不正利用の報告：',
  language: '言語',
}

export const announcement = {
  // Empty on purpose: the bar renders text + " " + brand, and a leading space
  // at the start of the line collapses, so no space lands before PureMail.
  text: '',
  brand: 'PureMail',
  tail: 'なら、専用のGoogle・Outlook受信トレイを1受信トレイあたり月額US$2.90で使えます。',
  dismiss: 'お知らせを閉じる',
}

export const cta = {
  headline: 'リスト全体をチェックして、結果を比べてください',
  offer: '無料クレジット1,000件付き。クレジットカードは不要です。',
  button: '無料で始める',
  trust: ['無料で試せます', 'クレジットに有効期限はありません', '結果が不明のときはクレジットを返却'],
}

export const consoleStrings = {
  header: 'リアルタイムでテスト',
  live: 'ライブテスト',
  actionLabel: '操作',
  actionTitle: 'メールボックスの確認',
  placeholder: '確認したいメールアドレスを入力...',
  ariaInput: '確認したいメールアドレス',
  button: '確認する',
  buttonRunning: '確認中',
  diagnostics: 'チェックの状況',
  checks: {
    basic: '基本チェック',
    dns: 'メールサーバーの検索',
    catchall: 'キャッチオールドメインのチェック',
    mailbox: 'メールボックスのチェック',
  },
  idleTitle: '確認の準備ができました',
  idleText: '会社または個人のメールアドレスを入力すると、メールボックスが存在するかを確認できます。',
  spawning: 'チェックを開始しています...',
  initLog: '[INIT] チェック用の安全な接続を開いています...',
  limitTitle: '無料チェックの上限に達しました',
  limitText: 'この1時間の無料チェック5回を使い切りました。無料登録すると、無料クレジット1,000件を受け取れます。クレジットカードは不要です。その後、リスト全体をチェックできます。',
  limitButton: '無料クレジット1,000件を受け取る',
  errorTitle: 'チェックに失敗しました',
  errorFailed: 'チェックが完了しませんでした。数秒後にもう一度お試しください。',
  errorUnreachable: '検証サービスから応答がありません。',
  invalidSyntax: '有効なメールアドレスの形式ではありません。',
  isCatchAll: 'はキャッチオールドメインです',
  notCatchAll: 'はキャッチオールドメインではありません',
  catchAllText: 'このドメインはどのアドレス宛てのメールも受け付けます。そのため、基本チェックだけではこのメールボックスが存在するかを確認できません。',
  notCatchAllText: 'このドメインでは、通常のチェックの結果を信頼できます。',
  resultLabel: '結果',
  verdictTitle: {
    deliverable: '有効',
    undeliverable: '無効',
    risky: 'リスクあり',
    unknown: '不明',
    catchall: 'キャッチオールドメイン',
    error: 'エラー',
  },
  verdictLine: {
    deliverable: 'このメールボックスは存在します。',
    undeliverable: 'このメールボックスは存在しません。',
    risky: 'サーバーはメールを受け付けますが、このメールボックスが存在するかを完全には確認できません。',
    unknown: 'このメールボックスを確認できませんでした。',
    catchall: 'このメールボックスを確認できませんでした。',
    error: '',
  },
}

export const pricing = {
  payg: '従量課金（買い切り）',
  subscription: '月額サブスクリプション',
  save: '10%お得',
  colVolume: 'クレジット',
  colRate: '1クレジットあたりの料金',
  colSave: '割引',
  colTotal: '合計金額',
  credits: 'クレジット',
  popular: '人気のプラン',
  perCredit: '/ クレジット',
  oneTime: '1回払い',
  perMonth: '/月',
  saveBadge: '{pct}%お得',
  buy: '購入する',
  subscribe: '申し込む',
  noDiscount: '割引なし',
  mobVolume: 'クレジット',
  mobRate: '単価',
  mobSave: '割引',
  mobPrice: '合計',
  numberLocale: 'ja-JP',
  currencySuffix: false,
  currencyPrefix: 'US$',
  formula: 'メールアドレス1件の検証',
  formulaNote: '（キャッチオールドメイン、アクセプトオール、SEGの背後にあるアドレスの検証を含む）',
  formulaCredit: '1クレジット',
  customTitle: '大量の検証が必要ですか？',
  customText: '大量の検証には、個別のプランと専用のIPプールをご用意しています。',
  customButton: 'お問い合わせ',
}

export const notFound = {
  kicker: '404',
  title: 'このページは存在しません',
  text: 'URLの入力ミスか、ページが移動した可能性があります。無料のメールアドレス存在確認ツールと料金ページは、ここからワンクリックで開けます。',
  primary: 'メールアドレス存在確認',
  secondary: 'ホームに戻る',
}

export const legal = {
  updated: '最終更新日',
  // Rendered as notice + " " + link + tail, so the sentence ends before the link.
  notice: 'このページは参考のための翻訳です。法的な拘束力を持つのは英語版だけで、内容に違いがある場合は英語版が優先します。',
  noticeLink: '英語版を読む',
  noticeTail: '',
  breadcrumbHome: 'ホーム',
}

/** Japanese number formatting: 10,000 and US$9.90 (currency stays USD). */
export function jaNumber(n: number, decimals = 0): string {
  return n.toLocaleString('ja-JP', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function jaUsd(n: number, decimals = 2): string {
  return `US$${jaNumber(n, decimals)}`
}

/** 2026-10-28 -> "2026年10月28日" */
export function formatDateJa(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return `${y}年${m}月${d}日`
}
