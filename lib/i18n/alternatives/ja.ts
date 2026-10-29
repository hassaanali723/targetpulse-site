// Japanese alternative pages (plans/15): translations of the English pages,
// same sections and FAQ. The searched form "<ブランド>の代替ツール" leads the
// title and H1. Numbers 10,000, prices US$9.90 (currency stays USD). Polite
// style (です・ます). キャッチオール never stands alone in a title or heading
// (SEO-Plan/i18n-batch3-ja-terminology.md); headings say キャッチオールドメイン.
// Only the three clusters registered for ja: zerobounce, neverbounce, snovio.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const zerobounce: AltL10nConfig = {
  locale: 'ja',
  slug: 'zerobounce',
  path: '/ja/zerobounce-alternative',
  cluster: 'altZerobounce',
  metaTitle: 'ZeroBounceの代替ツール：料金とキャッチオールドメイン | Giggal.ai',
  ogTitle: 'キャッチオールドメインを含むリスト向けのZeroBounce代替ツール',
  desc: 'ZeroBounceは10,000件でUS$129、キャッチオールドメインのアドレスには結果ではなく1〜10のスコアを付けます。Giggal.aiはUS$9.90で有効か無効かを確認します。無料クレジット1,000件付き、クレジットカードは不要です。',
  h1: ['キャッチオールドメインのアドレスまで確認する', 'ZeroBounceの代替ツール', ''],
  heroP: '同じ作業を10分の1ほどの料金で行えます。ZeroBounceは1〜10のスコアを返すだけですが、Giggal.aiは有効か無効かをはっきり返します。料金は10,000クレジットでUS$9.90です。ZeroBounceはUS$129です。',
  bluf: [
    { k: '料金', v: '10,000クレジットでUS$9.90、ZeroBounceはUS$129です。この差はどの数量でも変わりません。' },
    { k: 'キャッチオールドメイン', v: 'Giggal.aiは有効か無効かの結果を返します。ZeroBounceが返すのは1〜10のスコアで、結果ではありません。' },
    { k: '最低購入数', v: 'Giggal.aiに最低購入数はなく、無料クレジット1,000件から始められます。ZeroBounceは最低2,000クレジット（US$39）の購入が必要です。' },
    { k: '無料トライアル', v: '一括アップロードにも使える無料クレジット1,000件。クレジットカードは不要です。' },
  ],
  pricingFirst: true,
  pricingHeading: 'ZeroBounceとGiggal.aiの料金比較',
  pricingProse: 'ZeroBounceには最低2,000クレジットの購入条件と、月額US$99のサブスクリプションがあります。Giggal.aiにはどちらもありません。クレジットを購入して好きなだけ保有でき、無料クレジット1,000件から始められます。',
  pricingProseAfterLadder: true,
  catchAllHeading: 'Giggal.aiがキャッチオールドメインのアドレスを確認する方法',
  catchAllProse: 'キャッチオールドメインでは、サーバーがどのアドレス宛てのメールも受け付けます。ZeroBounceはこうしたアドレスをAI Scoringで1〜10のスコアにするだけで、存在を確認しません。Giggal.aiはこれらのアドレスを別のチェックに回し、4つの結果のいずれかを返します。',
  catchAllProse2: 'LeadMagicのテストでは、ZeroBounceが結果を出せたキャッチオールドメインのアドレスは12%でした。',
  benchmark: true,
  featureNote: 'ZeroBounceの正確性99.6%はベンダーの主張であり、測定された数値ではありません。',
  testSteps: [
    '普段ZeroBounceにかけているリストをエクスポートします。',
    'そのリストをここにアップロードし、無料クレジット1,000件でチェックします。クレジットカードは不要です。',
    'Catch-Allと表示された行を比べます。はっきりした結果が出たアドレスの数を数えてください。',
  ],
  faqs: [
    { q: '料金はどのくらい違いますか？', a: '10,000クレジットでUS$9.90とUS$129、100,000クレジットでUS$76とUS$649、100万クレジットでUS$680とUS$3,199です。両社の料金を確認した日付は表に記載しています。' },
    { q: 'ZeroBounceに最低購入数はありますか？', a: 'はい。2,000クレジットでUS$39です。Giggal.aiに最低購入数はなく、無料クレジット1,000件から始められます。クレジットカードは不要です。どちらのツールもクレジットに有効期限はありません。' },
    { q: 'ZeroBounceがスコアを付けるだけのキャッチオールドメインのアドレスを、Giggal.aiはどう扱いますか？', a: 'Catch-Allというラベルではなく、メールボックスが実在するか、配信可能か配信不可かを返します。Giggal.aiの検証は、どれも1件1クレジットです。' },
    { q: 'キャッチオールドメインのアドレスに対するGiggal.aiの正確性は？', a: 'Giggal.aiの検証の正確性は98.5%です。多くのツールがラベルを付けるだけで確認しないキャッチオールドメインやSEGの背後のアドレスにも、配信可能か配信不可かのはっきりした結果を返します。' },
    { q: '支払いの前にGiggal.aiを試せますか？', a: 'はい。一括アップロードにも使える無料クレジット1,000件があり、クレジットカードは不要です。ZeroBounceでクリーニング済みのリストをもう一度チェックし、Catch-Allと表示された行を比べてください。' },
  ],
  ctaHeadline: 'ZeroBounceがCatch-Allとしたアドレスを、Giggal.aiで確認してください',
  breadcrumb: 'ZeroBounceの代替ツール',
}

const neverbounce: AltL10nConfig = {
  locale: 'ja',
  slug: 'neverbounce',
  path: '/ja/neverbounce-alternative',
  cluster: 'altNeverbounce',
  metaTitle: 'NeverBounceの代替ツール：料金と正確性 | Giggal.ai',
  ogTitle: 'キャッチオールドメインのアドレスまで確認するNeverBounce代替ツール',
  desc: 'NeverBounceは10,000件でUS$50、あるテストではキャッチオールドメインのアドレスの8%しか結果を出せませんでした。Giggal.aiはUS$9.90で確認します。無料クレジット1,000件付き、クレジットカードは不要です。',
  h1: ['キャッチオールドメインのアドレスまで確認する', 'NeverBounceの代替ツール', ''],
  heroP: 'NeverBounceが結果を出せるキャッチオールドメインのアドレスはわずかで、LeadMagicのテストでは8%でした。料金は10,000件でUS$50です。Giggal.aiはこれらのアドレスが有効か無効かを確認し、料金はUS$9.90です。',
  bluf: [
    { k: '料金', v: '10,000件でUS$50に対してGiggal.aiはUS$9.90、100万件ではUS$2,500に対してUS$680です。' },
    { k: 'キャッチオールドメイン', v: 'Giggal.aiは有効か無効かの結果を返します。NeverBounceが結果を出せるのはわずかです（LeadMagicのテストで8%）。' },
    { k: 'クレジット', v: 'Giggal.aiのクレジットに有効期限はありません。NeverBounceのクレジットは購入から12か月で失効します。' },
    { k: '無料トライアル', v: '一括アップロードにも使える無料クレジット1,000件。クレジットカードは不要です。' },
  ],
  catchAllHeading: 'Giggal.aiがキャッチオールドメインのアドレスを確認する方法',
  catchAllProse: 'NeverBounceはキャッチオールドメインのアドレスをAccept-Allとして表示し、結果を出せるのはわずかです。LeadMagicのテストでは8%でした。Giggal.aiはこれらのアドレスを別のチェックに回し、4つの結果のいずれかを返します。',
  benchmark: true,
  pricingHeading: 'NeverBounceとGiggal.aiの料金比較',
  pricingProse: 'NeverBounceの料金は、10,000件でUS$50、100,000件でUS$400、100万件でUS$2,500です。Giggal.aiは同じ件数でUS$9.90、US$76、US$680です。最低購入数も月額サブスクリプションもありません。',
  featureNote: 'ダッシュ（-）は公開されていない数値を示します。NeverBounceの無料枠の大きさなどです。推測で埋めることはしていません。',
  testSteps: [
    'NeverBounceでクリーニング済みのリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'NeverBounceがCatch-Allとした行を見て、実在するアドレスの数を数えてください。',
  ],
  faqs: [
    { q: '料金はどのくらい違いますか？', a: 'NeverBounceは10,000件でUS$50、Giggal.aiはUS$9.90です。100万件ではUS$2,500とUS$680です。両社ともすべての料金帯を公開しているので、数値はご自身で確認できます。' },
    { q: 'NeverBounceがラベルを付けたキャッチオールドメインのアドレスを、Giggal.aiはどう扱いますか？', a: 'Accept-Allというラベルではなく、メールボックスが実在するか、配信可能か配信不可かを返します。LeadMagicのテストでは、NeverBounceが結果を出せたキャッチオールドメインのアドレスは8%でした。Giggal.aiの検証は、どれも1件1クレジットです。' },
    { q: 'Giggal.aiとNeverBounceで、クレジットの有効期限はどう違いますか？', a: 'Giggal.aiのクレジットに有効期限はありません。NeverBounceのクレジットは購入から12か月で失効します。これはNeverBounce自身の料金ページに書かれています。' },
    { q: 'Giggal.aiにAPIはありますか？', a: 'はい。Giggal.aiには公開APIドキュメントとMCPサーバーがあります。自社のツールやワークフローから検証を実行できます。' },
    { q: '乗り換える前にGiggal.aiを試せますか？', a: 'はい。一括アップロードに使える無料クレジット1,000件があり、クレジットカードは不要です。NeverBounceでクリーニング済みのリストをもう一度チェックし、Catch-Allと表示された行を確認してください。' },
  ],
  ctaHeadline: 'NeverBounceのCatch-Allの行を、はっきりした結果に変えましょう',
  breadcrumb: 'NeverBounceの代替ツール',
}

const snovio: AltL10nConfig = {
  locale: 'ja',
  slug: 'snovio',
  path: '/ja/snovio-alternative',
  cluster: 'altSnovio',
  metaTitle: 'Snov.ioの代替ツール：メールアドレス検証に特化 | Giggal.ai',
  ogTitle: '検証に特化したSnov.ioの代替ツール',
  desc: 'Snov.ioは、メールアドレス検索や営業メール配信と共通のクレジットから検証分を差し引きます。Giggal.aiはキャッチオールドメインのアドレスも10,000件US$9.90で確認します。無料クレジット1,000件付き。',
  h1: ['検証に特化した', 'Snov.ioの代替ツール', ''],
  heroP: 'Snov.ioは、メールアドレスの検索、検証、配信を1つのクレジット制プラットフォームにまとめています。必要なのが検証だけなら、Giggal.aiは検証専用のツールです。キャッチオールドメインのアドレスまで確認し、公開料金は10,000件でUS$9.90です。',
  bluf: [
    { k: '用途', v: 'Snov.ioはメールアドレス検索と営業メール配信のためのツール群です。Giggal.aiは検証を行い、キャッチオールドメインのアドレスも確認します。' },
    { k: 'キャッチオールドメイン', v: 'Giggal.aiは有効か無効かの結果を返します。Snov.ioはラベルを付けるだけで、そこで終わります。' },
    { k: '課金', v: 'Snov.ioはサブスクリプションのクレジットから検証分を差し引きます。Giggal.aiは従量課金で、10,000件US$9.90からです。' },
    { k: '無料トライアル', v: '一括アップロードにも使える無料クレジット1,000件。クレジットカードは不要です。' },
  ],
  catchAllHeading: 'Giggal.aiがキャッチオールドメインのアドレスを確認する方法',
  catchAllProse: 'Snov.ioは、より大きな営業メールの流れの一部として検証を行い、1回のチェックに1クレジットを使います。キャッチオールドメインでは、Snov.ioはアドレスにラベルを付けるだけで、メールボックスの存在を確認しません。Giggal.aiは検証に特化したツールです。これらのアドレスを別のチェックに回し、4つの結果のいずれかを返します。セキュアメールゲートウェイ（SEG）の背後にあるアドレスも検証します。',
  pricingHeading: 'Snov.ioとGiggal.aiの料金比較',
  pricingProse: 'Snov.ioは、共通クレジットを使う月額サブスクリプションとして販売されており、1回のチェックに1クレジットを使います。月10,000件のチェックに対応する最小のプランはPro Mで、月額US$189です。100,000件ではUltraで月額US$738です（年払いにすると約25%安くなります）。月100万件は個別プランです。使わなかったクレジットは、サブスクリプションが有効な間は翌月に繰り越されます。Giggal.aiは従量課金で、10,000件でUS$9.90、100,000件でUS$76、100万件でUS$680です。月ごとの契約はありません。',
  featureNote: 'Snov.ioは月額課金です。そのため数値はその件数に対応する最小のプランで、買い切りの料金ではありません。月100万件は個別プランです。',
  testSteps: [
    'Snov.ioでチェックしたリストをエクスポートします。',
    'そのリストをここで、無料クレジット1,000件を使ってチェックします。クレジットカードは不要です。',
    'Snov.ioがcatch-allとした行を見て、実在するアドレスの数を数えてください。',
  ],
  faqs: [
    { q: 'メールアドレス検証で、Giggal.aiはSnov.ioの代わりになりますか？', a: '必要なのが検証なら、なります。Giggal.aiは検証専用のツールで、キャッチオールドメインのアドレスまで確認し、セキュアメールゲートウェイの背後のアドレスも検証します。従量課金で、10,000件US$9.90からです。Snov.ioはメールアドレスの検索や営業メールの管理も行います。Giggal.aiはそれらを行いません。' },
    { q: 'Giggal.aiはSnov.ioのようにメールアドレスを検索したり、キャンペーンを配信したりしますか？', a: 'いいえ。Giggal.aiは検証だけを行うツールです。検索、検証、配信を1つのプラットフォームで行いたいなら、Snov.ioの方が合っています。キャッチオールドメインのアドレスにも結果を出す検証だけが必要なら、Giggal.aiはそのために作られています。' },
    { q: 'Snov.ioがラベルを付けるだけのキャッチオールドメインのアドレスを、Giggal.aiはどう扱いますか？', a: 'Snov.ioはキャッチオールドメインのアドレスにラベルを付けますが、メールボックスの存在は確認しません。Giggal.aiは配信可能か配信不可かのはっきりした結果を返します。料金はメールアドレス1件あたり1クレジットで一定です。' },
    { q: '料金はどのくらい違いますか？', a: 'Snov.ioは、すべてのチェックをサブスクリプションのクレジットから差し引きます。1,000クレジットで月額US$39からです（年払いではUS$29.25）。Giggal.aiは従量課金で10,000件US$9.90です。月ごとの契約はなく、クレジットに有効期限もありません。' },
    { q: '乗り換える前にGiggal.aiを試せますか？', a: 'はい。一括アップロードに使える無料クレジット1,000件があり、クレジットカードは不要です。Snov.ioがcatch-allとしたリストをチェックし、はっきりした結果が出たアドレスの数を確認してください。' },
  ],
  ctaHeadline: 'プラットフォーム全体ではなく、メールアドレス検証だけを使えます',
  breadcrumb: 'Snov.ioの代替ツール',
}

export const ALT_JA = { zerobounce, neverbounce, snovio }
