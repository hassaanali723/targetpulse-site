import type { IntegrationPagesContent } from './types'

// Japanese copy for the integration pages, translated from the English pages
// with the Indonesian copy as the structural model. Keyword plan
// (SEO-Plan/i18n-batch3-ja-keyword-plan.md): the checker keyword
// "メールアドレスの存在確認" links to /ja/email-checker; "メールアドレス検証"
// carries the rest. Product UI labels (Zapier, n8n, HubSpot, Giggal.ai
// dashboard), property names, status values, scopes, tool names and code stay
// in English, as the apps show them. Polite style (です・ます). Numbers 1,000
// and 8,000. キャッチオール never stands alone in a title or heading.

const MCP_URL = 'https://mcp.giggal.ai/mcp'

const CATEGORIES: Record<string, string> = {
  'Marketing Automation': 'マーケティングオートメーション',
  'Email Marketing': 'メールマーケティング',
  CRM: 'CRM',
  Ecommerce: 'Eコマース',
  'Sales & Outreach': '営業とアウトリーチ',
  'Forms & Surveys': 'フォームとアンケート',
  'Website & Popups': 'Webサイトとポップアップ',
  'Spreadsheets & Data': 'スプレッドシートとデータ',
  Support: 'カスタマーサポート',
  Payments: '決済',
  Automation: '自動化',
  Spreadsheets: 'スプレッドシート',
  Forms: 'フォーム',
  'AI & Agents': 'AIとエージェント',
  Developer: '開発者向け',
}

export const JA: IntegrationPagesContent = {
  common: {
    locale: 'ja',
    hubPath: '/ja/integrations',
    hubCrumb: '連携',
    checkerPath: '/ja/email-checker',
    signupLabel: '無料クレジット1,000件で始める',
    getStarted: '無料で始める',
    allIntegrations: 'すべての連携を見る',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'メールアドレス検証の連携：HubSpot、Zapier、n8n、MCP | Giggal.ai',
      description:
        'HubSpot、Zapier、n8n、Mailchimp、Claude、ChatGPTとのメールアドレス検証の連携です。キャッチオールドメインのアドレスも含め、お使いのツールの中でメールアドレスをチェックできます。',
      ogTitle: 'メールアドレス検証の連携：HubSpot、Zapier、n8n、MCP',
      ogDescription:
        'Giggal.aiのメールアドレス検証を、HubSpot、Zapier、n8n、Mailchimp、Googleスプレッドシート、Claude、ChatGPTとつなげます。',
    },
    h1Lead: 'メールアドレス検証の連携：',
    h1Accent: 'いつものツールで使えます',
    intro:
      'Giggal.aiを使えば、CRM、メール配信サービス、スプレッドシート、AIアシスタントから[メールアドレスの存在確認](/ja/email-checker)を行えます。どのチェックでも、メールボックスが存在するかがわかります。キャッチオールドメインのアドレスにも、有効か無効かの結果が付きます。',
    waysTitle: 'お使いのツールにメールアドレス検証を追加する4つの方法',
    waysIntro:
      '仕事の進め方に合う方法を選んでください。どの方法でも同じクレジットを使い、同じ結果が返ります。',
    ways: [
      {
        label: '直接連携',
        title: '直接連携',
        text: '[HubSpot](/ja/integrations/hubspot)、Mailchimp、SendGridなどのプラットフォームを、Giggal.aiのダッシュボードからつなぎます。リストを取り込んでチェックし、クリーニング済みのリストを送り返します。',
      },
      {
        label: '自動化',
        title: 'Zapierとn8n',
        text: '新しい連絡先、フォームの回答、スプレッドシートの新しい行を、届いた時点でチェックします。[Zapier](/ja/integrations/zapier)のGiggal.aiアプリか、[n8n](/ja/integrations/n8n)の公式ノードを使ってください。',
      },
      {
        label: 'MCP',
        title: 'AIアシスタント',
        text: '[Giggal.aiのMCPサーバー](/ja/mcp)をClaude、ChatGPT、Cursor、VS Codeに追加します。その後、チャットの中でアシスタントにアドレスのチェックを頼めます。',
      },
      {
        label: 'API',
        title: 'REST API',
        text: '自社のコードから、1件ずつのチェックや一括チェックを送ります。結果はJSONで返ります。[APIドキュメント](/ja/api-docs)で、すべてのエンドポイントを説明しています。',
      },
    ],
    grid: {
      searchPlaceholder: '連携を検索…',
      searchAria: '連携を検索',
      connectionAria: '接続方法で絞り込む',
      connection: { all: 'すべて', direct: '直接連携', zapier: 'Zapier経由', api: 'API', mcp: 'MCP' },
      categoryAria: 'カテゴリで絞り込む',
      allCategories: 'すべてのカテゴリ',
      categories: CATEGORIES,
      prevPage: '前のページ',
      nextPage: '次のページ',
      pagination: 'ページ送り',
      showing: '全{total}件の連携のうち{from}〜{to}件を表示',
      noMatchTitle: '検索に一致する連携はありません。',
      noMatchText:
        'HTTPリクエストを送れるツールなら、どれでも[REST API](/ja/api-docs)を使えます。',
      descriptions: {
        zapier:
          '8,000以上のアプリで、新しいメールアドレスをリアルタイムにチェックします。キャッチオールドメインのアドレスも対象です。コードは不要です。',
        n8n:
          'Giggal.aiの公式コミュニティノードで、n8nのワークフローの中で1件のアドレスやリスト全体をチェックします。',
        claude:
          'Giggal.aiのMCPサーバーをClaudeに追加し、チャットの中でメールアドレスをチェックします。',
        chatgpt:
          'Giggal.aiのMCPサーバーをChatGPTに追加し、チャットの中でメールアドレスをチェックします。',
        clay:
          'Giggal.aiのAPIを使い、Clayのテーブルで見込み客のメールアドレスをチェックします。キャッチオールドメインのアドレスも対象です。',
        'rest-api':
          '1件ずつのチェック、一括チェック、キャッチオールドメインのチェックに使えるREST APIです。必要な連携を自分で作れます。',
        mailchimp:
          'Mailchimpのオーディエンスを取り込んでチェックし、メールを届けられる購読者だけを残します。',
        mailgun:
          'Mailgunをつなぎ、キャンペーンの前に配信リストをチェックします。',
        mailjet:
          'Mailjetの連絡先リストをGiggal.aiに取り込んでチェックします。キャッチオールドメインのアドレスも対象です。',
        sendgrid:
          'SendGridの連絡先を一括でチェックし、送信者レピュテーションを守ります。',
        activecampaign:
          'ActiveCampaignの連絡先を取り込んでチェックし、送信の前に問題のあるアドレスを削除します。',
        'campaign-monitor':
          'Campaign Monitorをつなぎ、購読者リストをGiggal.aiでチェックします。',
        getresponse:
          'GetResponseのリストをチェックしてバウンスを減らします。キャッチオールドメインも対象です。',
        aweber:
          'AWeberの購読者を取り込んでチェックし、クリーニング済みのリストを送り返します。',
        mailerlite:
          'MailerLiteをつなぎ、次のキャンペーンの前に購読者リストをチェックします。',
        drip:
          'Dripの連絡先を一括でチェックし、自動メールを実在する受信トレイに届けます。',
        'elastic-email':
          'Elastic Emailのリストを取り込んでチェックします。キャッチオールドメインのアドレスや、セキュアメールゲートウェイの背後のアドレスも対象です。',
        'reply-io':
          'Reply.ioのシーケンスを始める前に見込み客のメールアドレスをチェックし、実在する受信トレイに送ります。',
        'zoho-crm':
          'Zoho CRMの連絡先とリードを取り込んでチェックし、CRMのデータをきれいに保ちます。',
        'google-sheets':
          '新しい行が追加された時点でチェックし、結果をスプレッドシートに書き込みます。',
        hubspot:
          'HubSpot CRMの連絡先とリストをチェックし、その結果でHubSpotの中で絞り込みます。',
        salesforce:
          'Salesforceで新しいリードが作成された時点で、そのメールアドレスをチェックします。',
        typeform:
          'Typeformの回答に含まれるメールアドレスを、ほかのツールに渡る前にチェックします。',
        slack:
          '検証の結果やリストに関する通知をSlackのチャンネルに送ります。',
      },
      zapierAppDescription:
        '{name}に届いたメールアドレスを、Zapier経由でリアルタイムにチェックします。',
      logoAlt: '{name}とGiggal.aiのメールアドレス検証の連携',
    },
    appListTitle: '対応しているZapierアプリの一覧',
    appListIntro: '{count}個のアプリが、Zapier経由でGiggal.aiとつながります。各アプリに専用のガイドがあります（英語）。',
    apiTitle: 'お使いのツールが一覧にない場合',
    apiText:
      'HTTPリクエストを送れるツールなら、どれでもGiggal.aiでメールアドレスをチェックできます。1件ずつのチェックや一括チェックには[メールアドレス検証API](/email-verification-api)（英語）を使うか、Zapier経由でつないでください。',
    apiCta: 'APIドキュメント',
    apiHref: '/ja/api-docs',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier：8,000以上のアプリでメールアドレスをチェック | Giggal.ai',
      description:
        'Giggal.aiで、Zapierに届くすべてのメールアドレスをリアルタイムにチェックします。キャッチオールドメインのアドレスにも有効か無効かの結果が付き、リストをきれいに保てます。コードは不要です。',
      ogTitle: 'Zapier：8,000以上のアプリでメールアドレスをチェック',
      ogDescription:
        'Giggal.aiで、Zapierに届く新しいメールアドレスをチェックします。HubSpot、Googleスプレッドシート、Salesforce、Mailchimpなど8,000以上のアプリで使えます。',
    },
    crumb: 'Zapier',
    h1Lead: 'Zapierでメールアドレス検証：',
    h1Accent: '8,000以上のアプリに対応',
    intro:
      'どのZapにもGiggal.aiを追加でき、アドレスが届いた時点で[メールアドレスの存在確認](/ja/email-checker)を行えます。フォーム、CRM、スプレッドシート、メール配信サービスで使えます。キャッチオールドメインのアドレスにも、有効か無効かの結果が付きます。コードを書く必要はありません。',
    viewOnZapier: 'Zapierで見る',
    tabsTitle: 'Zapierのワークフローとガイド',
    tabsIntro:
      'よく使われるワークフローから始めるか、ガイドに沿って約5分で自分のZapを作ってください。',
    tabs: {
      cardSubtitle: 'Giggal.aiを8,000以上のアプリとつなぐ',
      tryFree: '無料で試す',
      actionsTitle: 'Zapierの4つのアクション',
      actions: [
        { name: 'Verify Email', description: 'メールアドレスをリアルタイムにチェックします。キャッチオールドメインのアドレスも対象です。' },
        { name: 'Start Bulk Verification', description: 'アドレスのリストを送ります。次のステップで使えるジョブIDを返します。' },
        { name: 'Get Bulk Verification Results', description: '一括チェックのジョブが終わった後に、結果を取得します。' },
        { name: 'Get Credit Balance', description: 'Giggal.aiのクレジット残高を表示します。' },
      ],
      workflowsTab: 'ワークフロー',
      guideTab: 'ガイド',
      workflows: [
        {
          title: 'HubSpotの新しい連絡先をチェック',
          description:
            'HubSpotで連絡先が作成されると、Giggal.aiがそのメールアドレスをチェックし、結果を連絡先のプロパティに書き込みます。',
        },
        {
          title: 'Googleスプレッドシートの新しい行をチェック',
          description:
            '新しい行が追加された時点でチェックします。ステータス、リスクの度合い、キャッチオールドメインの結果をその行に書き込みます。',
        },
        {
          title: 'Salesforceの新しいリードをチェック',
          description:
            '営業チームが連絡する前に、新しいリードをチェックします。存在しない受信トレイにメールを送ることがなくなります。',
        },
        {
          title: 'Mailchimpへの登録をチェック',
          description:
            '新しい購読者を登録時にチェックし、メールを届けられるアドレスだけをMailchimpのオーディエンスに追加します。',
        },
        {
          title: 'Typeformの回答をチェック',
          description:
            'フォームの回答に含まれる入力ミスのアドレスや使い捨てメールアドレスを、ほかのツールに渡る前に見つけます。',
        },
        {
          title: '結果をSlackに送る',
          description:
            'チェックが終わったときや、キャッチオールドメインのリードが有効と確認されたときに、Slackにメッセージを送ります。',
        },
      ],
      workflowCta: 'Zapierで設定する',
      guideTitle: 'Giggal.aiをZapierにつなぐ',
      guideIntro:
        '設定は約5分で終わります。次の例では、Googleスプレッドシートに追加された行を1行ずつチェックします。',
      steps: [
        {
          title: 'Zapを開始するアプリを選ぶ',
          text: 'Zapを作成し、Zapを開始するアプリを選びます。Zapierの8,000以上のアプリのどれでも使えます。この例では、Googleスプレッドシート（Google Sheets）とイベントNew or Updated Spreadsheet Rowを選びます。アカウントをつないでContinueをクリックしてください。',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
          imageAlt: 'ZapierでGoogle SheetsとイベントNew or Updated Spreadsheet Rowのトリガーを設定する画面',
        },
        {
          title: 'アクションのステップにGiggal.aiを追加する',
          text: 'アクションのステップで、アプリの一覧からGiggal.aiを検索して選びます。',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
          imageAlt: 'Zapierのアプリ一覧でGiggal.aiを検索する画面',
        },
        {
          title: 'アクションのイベントを選ぶ',
          text: 'Giggal.aiには4つのアクションがあります。Verify Email、Start Bulk Verification、Get Bulk Verification Results、Get Credit Balanceです。この例ではVerify Emailを選びます。',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'Zapierのイベント一覧に表示されたGiggal.aiの4つのアクション',
        },
        {
          title: 'Giggal.aiのアカウントをつなぐ',
          text: '初回は、ZapierがAPIキーを求めます。Giggal.aiのダッシュボードでDeveloper APIタブを開き、Create API Keyをクリックしてください。そのキーをZapierに貼り付け、Connectをクリックします。新しいアカウントには無料クレジット1,000件が付き、クレジットカードは不要です。',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'APIキーでGiggal.aiのアカウントをZapierにつなぐ画面',
        },
        {
          title: 'メールアドレスの列を割り当て、結果を使う',
          text: 'Emailの項目に、アドレスが入っている列を割り当ててテストを実行します。Giggal.aiは、ステータス、リスクの度合い、スコア、キャッチオールドメインの結果を返します。このステップの後に、ZapierのFilterやPathsを追加してください。たとえば、配信可能なアドレスをスプレッドシートに書き込み、無効なアドレスを別のタブに移せます。',
        },
      ],
      help: 'うまくいかないステップがありますか？　[チームにお問い合わせ](/ja/contact)いただくか、レスポンスの構造全体は[APIドキュメント](/ja/api-docs)をご覧ください。',
    },
    why: [
      {
        title: 'Zapierでキャッチオールドメインのアドレスを確認',
        text: '多くのツールは、キャッチオールドメインのアドレスを「リスクあり」として、そこで止まります。B2Bのリストでは、こうしたアドレスが約30%になることがあります。Giggal.aiはこれらのアドレスをより詳しくチェックし、Zapの中で有効か無効かの結果を返します。',
      },
      {
        title: 'データが届いた時点でチェック',
        text: 'リードは、フォーム、CRM、スプレッドシートから届いた時点でチェックされます。問題のあるアドレスがリストに入らないので、後からクリーニングする量が減ります。',
      },
      {
        title: 'Zapierのフィルターで使える結果',
        text: 'どのチェックでも、ステータス、リスクの度合い、到達率のスコア、キャッチオールドメインの結果が返ります。これをZapierのFilterやPathsで使い、各リードを適切な場所に振り分けてください。',
      },
    ],
    appsTitle: 'これらのアプリからメールアドレスをチェック',
    appsIntro: '次のアプリには、Zapier経由のメールアドレス検証の専用ガイドがあります（英語）。',
    categories: CATEGORIES,
    faqTitle: 'Zapierでのメールアドレス検証：よくある質問',
    faq: [
      {
        q: 'Giggal.aiのZapier連携はどのように動きますか？',
        a: 'ZapにGiggal.aiのステップを追加します。新しいCRMの連絡先やフォームの回答などでトリガーが動くと、ZapierがメールアドレスをGiggal.aiに送ります。Giggal.aiはメールボックスが存在するかをチェックし、結果を次のステップに渡します。コードは不要です。',
      },
      {
        q: 'Zapierでキャッチオールドメインのアドレスをチェックできますか？',
        a: 'はい。Giggal.aiをチェックのステップにすればできます。多くのツールは、キャッチオールドメインに「リスクあり」や「不明」の結果を返します。Giggal.aiはこれらのアドレスに追加のチェックを行い、スコア付きで有効か無効かの結果を返します。',
      },
      {
        q: 'どのアプリとつなげられますか？',
        a: 'Zapierのすべてのアプリです。HubSpot、Salesforce、Pipedrive、Googleスプレッドシート、Airtable、Mailchimp、Klaviyo、ActiveCampaign、Typeform、Slackなどが含まれます。Zapierにあるアプリなら、Giggal.aiにアドレスを送れます。',
      },
      {
        q: 'Zapier経由のチェックでは何クレジット使いますか？',
        a: 'メールアドレス1件あたり1クレジットです。ダッシュボードやAPIと同じです。キャッチオールドメインのチェックも同じく1クレジットです。新しいアカウントには無料クレジット1,000件が付き、クレジットカードは不要です。',
      },
      {
        q: 'リアルタイムでチェックすべきですか、一括でチェックすべきですか？',
        a: '多くのチームは両方を使います。Zapierでのリアルタイムのチェックは、データが届いた時点で問題のあるアドレスを止めます。一括チェックは、すでに持っているリストをクリーニングします。ダッシュボードか、アクションStart Bulk Verificationで行えます。',
      },
    ],
    howToName: 'Giggal.aiを使ってZapierでメールアドレスをチェックする方法',
    howToDescription:
      'キャッチオールドメインのアドレスも含めたメールアドレス検証を、Zapierのワークフローに設定します。',
    cta: {
      title: 'Zapierに届く新しいメールアドレスをすべてチェック',
      text: '最初のメールアドレス検証のZapは、約5分で作れます。無料クレジット1,000件が付き、クレジットカードは不要です。キャッチオールドメインのチェックも含まれます。',
      primary: '無料で始める',
      secondary: 'すべての連携を見る',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'n8nでメールアドレス検証：Giggal.aiの公式ノード | Giggal.ai',
      description:
        'Giggal.aiの公式コミュニティノードで、n8nの中でメールアドレスをチェックします。1件のアドレスもリスト全体もチェックでき、キャッチオールドメインも対象です。n8n-nodes-giggalをnpmからインストールします。',
      ogTitle: 'n8nでメールアドレス検証：公式コミュニティノード',
      ogDescription:
        'Giggal.aiのコミュニティノードで、n8nのワークフローの中で1件のアドレスやリスト全体をチェックします。キャッチオールドメインのアドレスも対象です。',
    },
    crumb: 'n8n',
    h1Lead: 'n8nでメールアドレス検証：',
    h1Accent: 'Giggal.aiの公式ノード',
    intro:
      'n8nのワークフローにGiggal.aiを追加し、リアルタイムで[メールアドレスの存在確認](/ja/email-checker)を行うか、リスト全体を一括チェックのジョブとして送ります。キャッチオールドメインのアドレスにも、有効か無効かの結果が付きます。ノードはnpmから一度インストールするだけです。',
    viewOnNpm: 'npmで見る',
    opsTitle: 'このn8nノードでできること',
    opsIntro:
      'このノードには2つのリソースと4つの操作があります。1件のアドレスにはEmail、リストにはJobを使います。',
    ops: [
      { name: 'Verify', detail: 'メールアドレスをリアルタイムにチェックします。キャッチオールドメインのアドレスも対象です。1回のチェックで1クレジットです。' },
      { name: 'Verify Batch', detail: 'リスト全体を1回のリクエストで送ります。ワークフローから後で呼び出せるジョブIDを返します。' },
      { name: 'Get Status', detail: '一括チェックのジョブの進行状況を表示します。処理済みのアドレス数、割合、完了時刻です。' },
      { name: 'Get Results', detail: '完了した結果をページごとに取得します。deliverableやcatch_allなどで絞り込むこともできます。' },
    ],
    installTitle: 'ノードをインストールして最初のアドレスをチェック',
    installIntro:
      'クラウドまたは自社サーバーのn8nインスタンスと、Giggal.aiの無料アカウントが必要です。設定は約5分で終わります。',
    installSteps: [
      {
        title: 'n8nの設定でCommunity nodesを開く',
        text: 'n8nで、左下のアカウントメニューをクリックしてSettingsを開きます。次にCommunity nodesを選びます。',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'n8nの設定メニューのCommunity nodesの画面',
      },
      {
        title: 'n8n-nodes-giggalをインストールする',
        text: 'Install a community nodeをクリックします。npm Package Nameに`n8n-nodes-giggal`と入力し、チェックボックスにチェックを入れてInstallをクリックします。Giggal.aiのノードがノードの一覧に表示されます。',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Install community nodesの画面でn8n-nodes-giggalパッケージをインストールする様子',
      },
      {
        title: 'ノードを追加して認証情報を作成する',
        text: 'ワークフローにGiggal.aiのノードを追加します。Credentialの一覧でCreate new credentialを選びます。',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'n8nのノードでGiggal.aiの新しい認証情報を作成する画面',
      },
      {
        title: 'APIキーを貼り付ける',
        text: 'Giggal.aiのダッシュボードでDeveloper APIタブを開き、Create API Keyをクリックします。そのキーをAPI Keyの項目に貼り付けて保存してください。インスタンス内のすべてのGiggal.aiノードで、このキーを使えるようになります。新しいアカウントには無料クレジット1,000件が付き、クレジットカードは不要です。',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'n8nの認証情報にGiggal.aiのAPIキーを追加する画面',
      },
      {
        title: '最初のアドレスをチェックする',
        text: 'ResourceをEmail、OperationをVerifyにします。`{{ $json.email }}`のような式でEmail Addressの項目をデータに割り当て、Execute stepをクリックします。出力には、ステータス、リスクの度合い、到達率のスコア、キャッチオールドメインの詳細が表示されます。',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'n8nでメールアドレスをチェックし、出力を確認する画面',
      },
    ],
    batchTitle: 'n8nでリスト全体をチェック',
    batchIntro:
      '数件より多いアドレスには、Jobリソースを使います。手順は、リストを送り、ステータスを確認し、結果を取得するだけです。',
    batchSteps: [
      {
        title: 'Verify Batchでリストを送る',
        text: 'OperationをVerify Batchにし、Email Fieldでアドレスが入っているプロパティを指定します。後でダッシュボードで見つけやすいように、ジョブに名前を付けられます。キャッチオールドメインのアドレスを詳しくチェックするため、Enable Catch-All Rescueはオンのままにしてください。ノードはすぐにジョブIDを返し、チェックはバックグラウンドで進みます。',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'n8nのGiggal.aiノードで、メールアドレスのリストをチェックのために送る画面',
      },
      {
        title: 'Get Statusで進行状況を確認する',
        text: 'ResourceをJob、OperationをGet Statusにし、前のステップのジョブIDを入力します。ループがAPIを頻繁に呼びすぎないように、2回のチェックの間にWaitノードを入れてください。',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'n8nのGet Status操作で一括チェックのジョブの進行状況を確認する画面',
      },
      {
        title: 'Get Resultsで結果を取得する',
        text: 'ステータスがcompletedになったら、同じジョブIDでGet Resultsを実行します。メールアドレスごとに1件のアイテムが返り、ステータス、リスクの度合い、スコアが入っています。Status Filterの項目を使うと、deliverable、undeliverable、catch_allの行だけを取得できます。',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'n8nで完了した一括チェックの結果を取得する画面',
      },
    ],
    calloutTitle: 'キャッチオールドメインとゲートウェイの背後のアドレスにも有効か無効かの結果',
    calloutText:
      '多くのツールは、セキュアメールゲートウェイ（SEG）の背後のアドレスには「不明」、キャッチオールドメインには「リスクあり」の結果を返します。Giggal.aiは、ProofpointやMimecastなどの[ゲートウェイの背後のアドレスもチェックします](/seg-email-verification)（英語）。キャッチオールドメインにも追加のチェックを行います。[キャッチオールドメインの検証のしくみを見る](/ja/catch-all-verification)。',
    faqTitle: 'n8nでのメールアドレス検証：よくある質問',
    faq: [
      {
        q: 'Giggal.aiのノードはn8n Cloudで動きますか？',
        a: 'はい。SettingsのCommunity nodesからノードをインストールし、APIキーを追加してください。n8n Cloudでも自社サーバーのインスタンスでも、同じように動きます。',
      },
      {
        q: 'このコミュニティノードはインストールしても安全ですか？',
        a: 'Giggal.aiのチームが、このパッケージをn8n-nodes-giggalとしてnpmで公開しています。ソースコードは誰でも読めます。このノードは、設定した認証情報を使ってGiggal.aiのAPIとだけ通信します。',
      },
      {
        q: 'n8nでキャッチオールドメインのアドレスをチェックできますか？',
        a: 'はい。Giggal.aiのノードでできます。1件ずつのチェックでは、キャッチオールドメインを自動で処理します。一括チェックのジョブでも、Enable Catch-All Rescueがオンなら同じように処理します。「リスクあり」のラベルではなく、スコア付きで有効か無効かの結果が返ります。',
      },
      {
        q: 'n8nでのメールアドレス検証の料金はいくらですか？',
        a: 'メールアドレス1件あたり1クレジットで、Giggal.aiのほかの機能と同じです。キャッチオールドメインのチェックも同じく1クレジットです。新しいアカウントは無料クレジット1,000件から始められ、クレジットカードは不要です。',
      },
      {
        q: 'このノードは何を返しますか？',
        a: 'メールアドレスごとに、ステータス、リスクの度合い、到達率のスコアを返します。フリーメール、役割アドレス、使い捨てメールアドレスのフラグ、メールサーバーの詳細、キャッチオールドメインの結果も返します。出力はn8nの標準的なJSONなので、絞り込みや割り当てに使えます。',
      },
    ],
    howToName: 'Giggal.aiのコミュニティノードを使ってn8nでメールアドレスをチェックする方法',
    howToDescription:
      'n8n-nodes-giggalをインストールし、APIキーを追加して、n8nのワークフローで1件のアドレスやリスト全体をチェックします。',
    cta: {
      title: 'n8nのワークフローにメールアドレス検証を追加',
      text: 'n8n-nodes-giggalをインストールしてAPIキーを貼り付ければ、使えないアドレスをワークフローに入る前に止められます。無料クレジット1,000件が付き、クレジットカードは不要です。',
      primary: '無料で始める',
      secondary: 'すべての連携を見る',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot：メールアドレスの検証とバリデーション | Giggal.ai',
      description:
        'Giggal.aiで、HubSpotのメールアドレスをチェックします。CRMの連絡先とリストを検証し、キャッチオールドメインのアドレスにも結果を出し、その結果で絞り込めます。',
      ogTitle: 'HubSpot：メールアドレスの検証とバリデーション',
      ogDescription:
        'Giggal.aiをHubSpotにつなぎ、連絡先とリストをチェックして、CRMの中で結果ごとに絞り込みます。',
    },
    crumb: 'HubSpot',
    h1Lead: 'HubSpotでメールアドレス検証：',
    h1Accent: '連絡先をまとめてチェック',
    intro:
      'HubSpot CRMにある連絡先をチェックします。アカウントを一度つなぎ、リストを選ぶと、各連絡先のレコードに結果が入ります。キャッチオールドメインのアドレスには、「リスクあり」ではなく配信可能か配信不可かの結果が付きます。エクスポートや再インポートは必要ありません。',
    openDashboard: 'ダッシュボードを開く',
    capsTitle: 'HubSpot連携でできること',
    capsIntro: '4つのステップで、すべてHubSpotとGiggal.aiの中で完結します。',
    caps: [
      {
        name: '連絡先やリストを取り込む',
        detail: 'All contactsか、HubSpotの任意のリストを選びます。先にメールアドレスの件数が表示されるので、始める前に使うクレジット数がわかります。',
      },
      {
        name: 'すべてのアドレスをチェック',
        detail: '各メールボックスが実在するかをチェックします。キャッチオールドメインにも、「リスクあり」ではなくはっきりした結果が付きます。1件あたり1クレジットです。',
      },
      {
        name: 'HubSpotに結果を書き込む',
        detail: '各連絡先に、Giggalの5つのプロパティが入ります。結果はレコードに残ります。',
      },
      {
        name: '絞り込みとリストの作成',
        detail: 'Giggal email statusを、HubSpotのフィルターやアクティブリストで使います。次の送信の前に、問題のあるアドレスを取り除けます。',
      },
    ],
    stepsTitle: 'HubSpotをつないで最初のリストをチェックする',
    stepsIntro:
      '4つのステップで、約2分かかります。Giggal.aiのアカウントと、HubSpotでアプリをインストールし連絡先のプロパティを編集する権限が必要です。',
    steps: [
      {
        title: 'Giggal.aiでIntegrationタブを開く',
        text: 'Giggal.aiにログインし、Email Validationを開いてIntegrationタブを開きます。HubSpotのカードを見つけてConnectをクリックします。アカウントをお持ちでない場合、登録は1分で終わり、無料クレジット1,000件を受け取れます。',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'Giggal.aiのIntegrationタブにあるHubSpotのカードとConnectボタン',
      },
      {
        title: 'HubSpotでアクセスを承認する',
        text: 'HubSpotの画面に、Giggal.aiが得るすべてのアクセスが表示されます。連絡先のプロパティの表示、連絡先の編集、連絡先のプロパティ設定の編集、連絡先リストの表示、アプリをインストールしたアカウントの読み取りです。一覧を確認してConnect appをクリックしてください。Giggal.aiに戻り、HubSpotのカードにVerifyが表示されます。',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'Giggal Email Verifierアプリのアクセスを承認するHubSpotの画面',
      },
      {
        title: '連絡先リストを取り込む',
        text: 'HubSpotのカードでVerifyをクリックすると、Import from HubSpotの画面が開きます。All contactsか、ポータル内の任意のリストを選びます。各行にメールアドレスの件数が表示されるので、始める前に料金がわかります。Importをクリックしてください。',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: '連絡先リストとメールアドレスの件数が表示されたImport from HubSpotの画面',
      },
      {
        title: 'リストをチェックして結果を同期する',
        text: 'Giggal.aiはすべてのアドレスをチェックし、終わった時点で各HubSpotの連絡先に結果を書き込みます。タスクのカードには、結果の内訳とSynced to HubSpotのカウンターが表示されます。Sync to HubSpotをクリックすると、いつでも書き込みをやり直せます。',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'HubSpotに同期済みの結果が表示された、Giggal.aiで完了したHubSpotのチェック',
      },
    ],
    calloutTitle: 'HubSpotでキャッチオールドメインのチェックを使う理由',
    calloutText:
      'B2Bのリストの約30%は、キャッチオールドメインのアドレスです。多くのツールは、こうした連絡先に「リスクあり」の結果を返し、その結果は使えません。Giggal.aiなら、追加のチェックによって、キャッチオールドメインでも[メールアドレスの存在確認](/ja/email-checker)を行えます。ProofpointやMimecastなどの[セキュアメールゲートウェイの背後のアドレスもチェックします](/seg-email-verification)（英語）。こうした連絡先のほとんどに、配信可能か配信不可かの結果が付きます。[キャッチオールドメインの検証のしくみを見る](/ja/catch-all-verification)。',
    propsTitle: 'Giggal.aiが各連絡先に書き込むHubSpotのプロパティ',
    propsIntro:
      '5つのプロパティは、最初のチェックのときに作成されます。Giggal Email Verifierというプロパティグループに入ります。既存のHubSpotのプロパティは変更しません。',
    propsHead: ['プロパティ', '種類', '表示される内容'],
    props: [
      ['Giggal email is valid', 'チェックボックス', 'メールボックスの存在が確認された場合はYes。'],
      ['Giggal email status', 'ドロップダウン', 'Deliverable、Undeliverable、Risky、Unknownのいずれか。'],
      ['Giggal deliverability score', '数値', '0〜100で表す信頼度。'],
      ['Giggal email detail', 'テキスト', '結果の短い理由。'],
      ['Giggal verified at', '日付', 'そのアドレスを最後にチェックした日付。'],
    ],
    scopesTitle: 'HubSpotのアクセス権とデータ',
    scopesIntro: 'Giggal.aiはHubSpotで4種類のアクセス（スコープ）を求めます。各スコープの目的は1つです。',
    scopes: [
      ['crm.objects.contacts.read', 'チェックしたい連絡先のメールアドレスを読み取ります。'],
      ['crm.objects.contacts.write', 'その連絡先にチェックの結果を書き込みます。'],
      ['crm.schemas.contacts.write', '初回の利用時に、Giggalの5つのプロパティを作成します。'],
      ['crm.lists.read', 'チェックするリストを選べるように、連絡先リストを表示します。'],
    ],
    scopesNote:
      'Giggal.aiは、選んだ連絡先のメールアドレスだけを読み取ります。連絡先の作成や削除は行いません。上の5つ以外のプロパティは変更しません。チェックしたアドレスにメールを送ることもありません。',
    faqTitle: 'HubSpotでのメールアドレス検証：よくある質問',
    faq: [
      {
        q: 'Giggal.aiは連絡先にメールを送りますか？',
        a: 'いいえ。チェックは受信側のメールサーバーと通信し、メッセージを送る前に止めます。連絡先には、受信トレイにも迷惑メールフォルダにも何も届きません。',
      },
      {
        q: 'この連携はHubSpotのアカウントで何を変更しますか？',
        a: '初回の利用時に、Giggal Email Verifierというプロパティグループと、5つのカスタムの連絡先プロパティを作成します。その後は、それらのプロパティに結果を書き込むだけです。既存のHubSpotのプロパティは変更せず、連絡先の作成や削除も行いません。',
      },
      {
        q: 'この連携でキャッチオールドメインをチェックできますか？',
        a: 'はい。それがHubSpotでGiggal.aiを使う主な理由です。多くのツールは、キャッチオールドメインに「リスクあり」や「不明」の結果を返します。Giggal.aiは追加のチェックを行い、こうしたアドレスのほとんどに配信可能か配信不可かの結果を返します。',
      },
      {
        q: 'メールアドレスのバリデーションと検証は同じですか？',
        a: '実際には同じです。どちらも、アドレスがメールを受け取れるかを示すチェックを指します。Giggal.aiは形式、ドメインのメールサーバー、メールボックスをチェックし、HubSpotの連絡先に1つの結果を書き込みます。',
      },
      {
        q: '料金はいくらですか？',
        a: 'アドレス1件あたり1クレジットで、キャッチオールドメインのチェックも含みます。新しいアカウントは無料クレジット1,000件から始められ、件数が増えるほど1件あたりの料金は下がります。',
      },
      {
        q: 'HubSpotで結果をどのように使えますか？',
        a: 'Giggal email statusで連絡先を絞り込むか、アクティブリストを作成します。よくある設定は、Deliverableの連絡先を集めたアクティブリストを送信リストにし、Undeliverableの連絡先を除外リストにする方法です。',
      },
      {
        q: '連携を解除するにはどうすればよいですか？',
        a: 'Giggal.aiでIntegrationタブを開き、HubSpotのカードの設定アイコンをクリックしてDisconnectを選びます。HubSpotのSettings、Integrations、Connected Appsからアプリを削除することもできます。すでに書き込まれた結果は、連絡先に残ります。',
      },
    ],
    howToName: 'Giggal.aiでHubSpotの連絡先をチェックする方法',
    howToDescription:
      'Giggal.aiをHubSpotにつなぎ、連絡先リストをチェックして、各連絡先の5つのプロパティで結果を確認します。',
    cta: {
      title: 'HubSpotの連絡先をクリーニング',
      text: 'アカウントを一度つなぐと、CRMのすべての連絡先に、絞り込みに使える検証の結果が付きます。無料クレジット1,000件から始められ、クレジットカードは不要です。',
      primary: '無料で始める',
      secondary: 'すべての連携を見る',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'メールアドレス検証のMCPサーバー：Claude、ChatGPT | Giggal.ai',
      description:
        'Giggal.aiをMCPでClaude、ChatGPT、Cursor、VS Codeにつなぎ、チャットの中でメールアドレスをチェックします。キャッチオールドメインのアドレスにも有効か無効かの結果が付きます。',
      ogTitle: 'ClaudeとChatGPTでメールアドレス検証ができるMCPサーバー',
      ogDescription:
        'Giggal.aiにはリモートのMCPサーバーがあります。Claude、ChatGPT、Cursor、VS Codeから、メールアドレスのチェックに使えます。キャッチオールドメインのチェックも含まれます。',
    },
    crumb: 'MCP',
    h1Lead: 'メールアドレス検証のMCPサーバー：',
    h1Accent: 'ClaudeとChatGPTに対応',
    intro:
      'Giggal.aiにはリモートのMCPサーバーがあります。Claude、ChatGPT、Cursor、VS Codeにつなぐと、AIアシスタントが代わりに[メールアドレスの存在確認](/ja/email-checker)を行えます。1件のアドレスやリストのチェックを頼むと、アシスタントがチャットで答えます。',
    urlLabel: 'MCPのURL',
    directoryLabel: 'Giggal.aiをClaudeに追加',
    points: [
      'ClaudeとChatGPTはOAuthで接続',
      'コードエディタはAPIキーを使用',
      'キャッチオールドメインのチェックを含む',
    ],
    setupTitle: 'お使いのAIツールにMCPサーバーを設定する',
    setupSubtitle:
      'ツールを選ぶと手順が表示されます。ClaudeとChatGPTはログインで接続します。コードエディタは設定ファイルを読み込みます。',
    toolsTitle: 'AIアシスタントにできること',
    toolsIntro:
      'このサーバーは、アシスタントに3つのツールを提供します。ふだんの言葉で頼むと、アシスタントが適切なツールを選びます。',
    tools: [
      {
        tool: 'verify_emails',
        title: 'アドレスをチェック',
        body: '1件のメールアドレスやリストをチェックします。キャッチオールドメインを含め、どのアドレスにも有効か無効かの結果が付きます。',
      },
      {
        tool: 'get_verification_details',
        title: '結果の詳細を見る',
        body: '過去のチェックの詳細を表示します。アドレスごとのステータス、理由コード、到達率のスコアです。',
      },
      {
        tool: 'get_credit_balance',
        title: 'クレジットを確認',
        body: '大きなチェックを始める前に、クレジットの残高を確認します。',
      },
    ],
    whyTitle: 'チャットでキャッチオールドメインの結果が重要な理由',
    why: [
      'B2Bのリストの約30%は、キャッチオールドメインのアドレスです。こうしたドメインは、メールボックスが存在するかどうかに関係なく、どのアドレス宛てのメールも受け付けます。多くのツールは、こうしたアドレスを「リスクあり」とします。これは、そのツールが確認できなかったという意味です。',
      'チャットでは、このラベルは役に立ちません。アシスタントは受け取った結果をそのまま伝えるので、リストの3分の1が不確かな結果で返ってきます。Giggal.aiはこうしたアドレスをより詳しくチェックし、有効か無効かの結果を返します。Giggal.aiが識別する15のセキュアメールゲートウェイ（Proofpoint、Mimecast、Barracudaなど）の背後のメールボックスにも、同じことを行います。',
      '質問の例は、[ClaudeとChatGPTでのメールアドレス検証](/ja/blog/verify-emails-inside-claude-and-chatgpt)をご覧ください。MCPサーバーは、[メールアドレス検証API](/email-verification-api)（英語）と同じエンジンを使っています。',
    ],
    faqTitle: 'メールアドレス検証のMCPサーバー：よくある質問',
    faq: [
      {
        q: 'Claudeでメールアドレスをチェックできますか？',
        a: `はい。メールアドレス検証のツールをMCPでつなげばできます。${MCP_URL}にあるGiggal.aiのサーバーを、Claudeのカスタムコネクタとして追加するか、Claude Codeでclaude mcp addコマンドで追加します。その後、たとえば「この11件のアドレスをチェックして、バウンスするものを教えて」と頼みます。Claudeがverify_emailsツールを呼び出し、チャットに結果を表示します。`,
      },
      {
        q: 'ChatGPTでメールアドレスをチェックできますか？',
        a: 'はい。カスタムコネクタを使えるChatGPTのプランならできます。MCPサーバーのURLでGiggal.aiをカスタムプラグインとして追加し、OAuthでログインします。リモートのMCPサーバーに対応したクライアントなら、Cursor、VS Code、Windsurf、Cline、Zedなども同じサーバーを使えます。',
      },
      {
        q: 'AIアシスタントは何ができますか？',
        a: '3つあります。verify_emailsは1件のアドレスやリストをチェックします。get_verification_detailsは、ステータスと理由コードを含むアドレスごとの詳しい結果を返します。get_credit_balanceはクレジットの残高を表示します。',
      },
      {
        q: 'キャッチオールドメインのアドレスはどう扱われますか？',
        a: 'Giggal.aiのほかの機能と同じです。多くのツールは、キャッチオールドメインのアドレスを「リスクあり」とします。Giggal.aiは、こうしたアドレスに有効か無効かの結果を返します。Giggal.aiが識別する15のセキュアメールゲートウェイ（Proofpoint、Mimecast、Barracudaなど）の背後のメールボックスにも、同じことを行います。',
      },
      {
        q: 'APIキーは必要ですか？',
        a: 'ClaudeとChatGPTでは不要です。どちらもOAuthで接続するので、Giggal.aiのアカウントでログインします。Claude Code、Cursor、VS Codeなどのコードエディタは、APIキーを使います。キーは、Giggal.aiのアプリのDeveloper APIタブにあります。',
      },
      {
        q: 'MCP経由のチェックは料金が高くなりますか？',
        a: 'いいえ。MCP経由のチェックは、ダッシュボードやREST APIと同じクレジットを使います。キャッチオールドメインを含め、アドレス1件あたり1クレジットです。新しいアカウントには無料クレジット1,000件が付き、クレジットカードは不要で、クレジットに有効期限はありません。',
      },
      {
        q: '大きなリストのクリーニングにもこの方法を使うべきですか？',
        a: 'いいえ。MCPがもっとも役立つのは、チェックが作業の1ステップのときです。たとえば、営業メッセージを書く前に十数件の連絡先をチェックする場合です。数万件のアドレスには、アプリの一括アップロードかREST APIを使ってください。',
      },
    ],
    howToName: 'Giggal.aiのメールアドレス検証をMCPでClaudeやChatGPTにつなぐ方法',
    howToDescription:
      'Giggal.aiのMCPサーバーを使い、Claude、ChatGPT、Cursor、VS Codeで、キャッチオールドメインも含めてメールアドレスをチェックする4つの手順です。',
    setupSteps: [
      {
        name: 'Giggal.aiのアカウントを作成する',
        text: 'Giggal.aiに登録します。新しいアカウントには、無料の検証クレジット1,000件が付きます。クレジットカードは不要です。',
      },
      {
        name: 'クライアントにMCPサーバーを追加する',
        text: `サーバーのURLは${MCP_URL}です。Claudeでは、SettingsのConnectorsから追加します。ChatGPTでは、カスタムプラグインとして追加します。コードエディタはJSONの設定ファイルを読み込みます。このページで、エディタごとの設定を表示しています。`,
      },
      {
        name: 'ログインするか、APIキーを追加する',
        text: 'ClaudeとChatGPTでは、Giggal.aiにログインしてAllowをクリックします。コードエディタには、アプリのDeveloper APIタブで作成したAPIキーが必要です。',
      },
      {
        name: 'アシスタントにアドレスのチェックを頼む',
        text: 'ふだんの言葉で頼んでください。たとえば「hello@example.comをチェックして、実在する受信トレイか教えて」と頼みます。アシスタントがverify_emailsを呼び出し、結果を表示します。',
      },
    ],
    ctaTitle: 'Giggal.aiをAIアシスタントにつなぐ',
    ctaText:
      '無料の検証クレジット1,000件から始められ、クレジットカードは不要です。MCPのURLを、Claude、ChatGPT、またはお使いのコードエディタに追加してください。',
    ctaButton: '無料で始める',
  },
}
