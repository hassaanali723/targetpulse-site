import type { ApiDocsStrings } from './types'

// Japanese API reference text. Endpoint paths, HTTP methods, parameter names,
// JSON fields and values, header names and status codes stay in English.
// Polite style (です・ます), as in lib/i18n/ja.ts. Numbers 50,000.

export const API_DOCS_JA: ApiDocsStrings = {
  breadcrumbName: 'APIドキュメント',
  schema: {
    headline: 'Giggal.ai APIドキュメント',
    description:
      'メールアドレスの検証、一括チェック、キャッチオールドメインやSEGの背後にあるアドレスの詳細チェックを行うREST APIです。JSONのエンドポイントとAPIキーによる認証を使い、課金は成功したチェックの分だけです。',
  },
  contactPath: '/ja/contact',

  overviewBanner:
    '概要をお探しですか？　[メールアドレス検証API](/email-verification-api)と[登録フォーム向けのメールアドレスのバリデーションAPI](/email-validation-api)のページ（英語）をご覧ください。',
  hero: {
    h1: 'メールアドレス検証APIのドキュメント',
    lead: 'メールアドレスの検証、一括チェック、キャッチオールドメインやSEGの背後にあるアドレスの詳細チェックを行えます。すべてのエンドポイントはJSONを使い、APIキーで認証します。料金がかかるのは成功したチェックだけです。',
  },

  sidebar: {
    searchPlaceholder: '検索…',
    collapse: '折りたたむ',
    expand: '展開する',
  },

  intro: {
    h2: 'はじめに',
    body: 'Giggal.aiのAPIでは、メールアドレスの検証、1ジョブあたり最大50,000件の一括チェック、キャッチオールドメインやSEGの背後にあるアドレスの詳細チェックを行えます。JSONを使うシンプルなREST APIです。成功したチェックごとに、アカウントのクレジットを使います。',
    baseUrlLabel: 'ベースURL',
    apiKeyLabel: 'APIキーの作成',
    apiKeyBody:
      'APIキーはGiggal.aiのダッシュボードで作成します。サイドバーのDeveloper APIタブを開き、Create API Keyをクリックしてください。各キーはアカウントにひも付き、使用量をキーごとに記録します。キーはいつでも無効にできます。',
    apiKeyLink: 'Developer APIタブを開く',
    envelopeLabel: 'レスポンスの構造',
    envelopeBody: 'すべてのレスポンスは同じJSON構造です。',
    quickStartLabel: 'クイックスタート：cURLでメールアドレスを1件チェックする',
  },

  auth: {
    h2: '認証',
    body: 'すべてのリクエストで、次のどちらかのヘッダーにAPIキーを入れて送ってください。どちらでも動作します。',
    bearerLabel: '方法1：Bearerトークン',
    xApiKeyLabel: '方法2：X-API-Keyヘッダー',
    note: 'キーがない、無効、または無効化されている場合は、HTTP 401エラーになります。APIキーをクライアント側のコードに置かないでください。API呼び出しはご自身のバックエンドから送ってください。',
    idempotencyLabel: '冪等性（一括チェックとキャッチオールドメインのチェック）',
    idempotencyBody:
      '`POST /v1/verify-batch`と`POST /v1/catchall`では、`Idempotency-Key`ヘッダーを送ってください。同じキーで再試行すると、最初のレスポンスが返ります。ジョブが重複せず、クレジットが二重に差し引かれることもありません。',
  },

  groups: {
    'single-verification': '1件ずつのチェック',
    'bulk-verification': '一括チェック',
    'catchall-verification': 'キャッチオールドメインのチェック',
    account: 'アカウント',
  },
  groupCount: {
    one: 'このグループには{n}個のエンドポイントがあります。',
    other: 'このグループには{n}個のエンドポイントがあります。',
  },

  endpoint: {
    authorizations: '認証',
    pathParams: 'パスパラメーターとクエリパラメーター',
    requestBody: 'リクエストボディ',
    required: '必須',
    responseSamples: 'レスポンスの例',
  },

  endpoints: {
    'verify-single': {
      title: 'メールアドレスを1件チェックする',
      description:
        'メールアドレスを1件、同期的にチェックします。1クレジットを使います。ドメインがキャッチオールドメインの場合は、同じリクエストの中で詳細チェックを行い、レスポンスにcatch_all_scoreとcatch_all_verdictが入ります。',
      bodyParams: {
        email: 'チェックしたいメールアドレス。',
      },
    },
    'submit-batch': {
      title: '一括チェックを開始する',
      description:
        '1ジョブあたり最大50,000件のメールアドレスを送れます。処理は非同期です。進行状況はGET /v1/jobs/:jobIdで確認してください。Idempotency-Keyヘッダーを送ると、二重課金なしでジョブの作成を再試行できます。',
      bodyParams: {
        emails:
          'チェックしたいメールアドレスのリスト。1ジョブあたり最大50,000件です。重複したアドレスと形式が正しくないアドレスは、サーバーが除外します。',
        name: 'ジョブのわかりやすい名前（任意）。ダッシュボードに表示されます。',
      },
    },
    'get-job': {
      title: '一括チェックのジョブの状況を確認する',
      description:
        '進行状況を確認するときに呼び出します。ステータスはprocessingからcompleted（またはfailed）に変わります。推奨する間隔は10〜15秒ごとです。小さなリスト（メールアドレス50件未満）は、通常30秒以内に終わります。',
      params: {
        jobId: 'POST /v1/verify-batchが返したジョブID。',
      },
    },
    'get-job-results': {
      title: '一括チェックのジョブの結果を取得する',
      description:
        'ステータスがcompletedになったら、メールアドレスごとの結果を取得します。結果はページに分かれています。クエリパラメーターのpageとlimitを指定してください。結果は48時間保存されます（ジョブのresultsExpiresAtを参照）。',
      params: {
        jobId: 'ジョブID。',
        page: 'ページ番号。初期値は1です。',
        limit: '1ページあたりの結果数。初期値は25、最大500です。',
      },
    },
    'start-catchall': {
      title: 'キャッチオールドメインのチェックを開始する',
      description:
        '完了した一括チェックのジョブに対して、キャッチオールドメインの詳細チェックを実行します。元のジョブでキャッチオールドメインと判定されたアドレスだけを再チェックします。1件あたり1クレジットを使います（レスポンスのcreditsRequiredを参照）。',
      bodyParams: {
        jobId:
          '完了した一括チェックのジョブID。そのジョブのキャッチオールドメインのアドレスだけを詳細にチェックします。',
        name: 'タスクのわかりやすい名前（任意）。',
      },
    },
    'get-catchall': {
      title: 'キャッチオールドメインのタスクの状況を確認する',
      description:
        '進行状況とverdictCountsの最新の件数を確認するときに呼び出します。キャッチオールドメインのタスクは、アドレスの件数に応じて、通常数秒から数分で終わります。',
      params: {
        taskId: 'POST /v1/catchallが返したタスクID。',
      },
    },
    'catchall-results': {
      title: 'キャッチオールドメインのタスクの結果を取得する',
      description:
        'メールアドレスごとの結果を、ページに分けて取得します。スコアの内訳（ドメインからのシグナルとドメインの経過年数）も含まれます。',
      params: {
        taskId: 'タスクID。',
        page: 'ページ番号。初期値は1です。',
        limit: '1ページあたりの結果数。初期値は25、最大500です。',
        verdict: '結果で絞り込みます：valid | invalid。',
      },
    },
    'catchall-download': {
      title: 'キャッチオールドメインの結果をCSVでダウンロードする',
      description:
        '完了したキャッチオールドメインのタスクの全結果を、Email、Score、Verdictの列を持つCSVファイルでダウンロードします。Content-Typeはtext/csvです。',
      params: {
        taskId: 'タスクID。',
        verdict: '結果で絞り込みます：valid | invalid。',
      },
    },
    'get-credits': {
      title: 'クレジット残高を確認する',
      description:
        'アカウントの残高を表示します。使えるクレジット、予約済みのクレジット（実行中のジョブのために確保した分）、アカウント開設からの合計です。結果がunknownのチェックのクレジットは自動で返却され、ここにも記録されます。',
    },
  },

  errors: {
    h2: 'エラーと制限',
    statusHeader: 'ステータス',
    meaningHeader: '意味',
    statusRows: [
      { status: '200 OK', meaning: 'リクエストが成功しました（同期チェック、またはステータスや結果の取得）。' },
      { status: '202 Accepted', meaning: '非同期のジョブまたはタスクが作成され、キューに入りました。' },
      { status: '400 Bad Request', meaning: 'パラメーターがない、または無効です（メールアドレスの形式が正しくない、emailsのリストが空、jobIdがない）。' },
      { status: '401 Unauthorized', meaning: 'APIキーがない、無効、または無効化されています。' },
      { status: '402 Payment Required', meaning: 'この操作に必要なクレジットが足りません。' },
      { status: '404 Not Found', meaning: 'このジョブIDまたはタスクIDは、お使いのアカウントに存在しません。' },
      { status: '409 Conflict', meaning: 'ジョブが必要な状態になっていません（例：ジョブの完了前に結果を要求した）。' },
      { status: '410 Gone', meaning: 'ジョブの結果が48時間の保存期間を過ぎています。' },
      { status: '429 Too Many Requests', meaning: 'リクエストの上限を超えました。少し待ってから再試行してください。' },
      { status: '500 / 502 / 503', meaning: 'サーバー、またはその背後の検証サービスが一時的に利用できません。' },
    ],
    rateLimitsH3: 'リクエストの上限',
    rateLimitsBody:
      'すべてのレスポンスに`RateLimit-Limit`、`RateLimit-Remaining`、`RateLimit-Reset`のヘッダー（RFCの表記）が入ります。これを使ってリクエストの間隔を調整できます。`RateLimit-Reset`は、現在の時間枠がリセットされるまでの秒数です。',
    categoryHeader: '区分',
    limitHeader: '上限',
    rateLimitRows: [
      { category: 'すべてのエンドポイント（初期値）', limit: '300リクエスト / 15分' },
      { category: 'ジョブの作成（POST /v1/verify-batch、POST /v1/catchall）', limit: '30リクエスト / 15分' },
      { category: 'ジョブの確認（GET /v1/jobs/:id、GET /v1/jobs/:id/results）', limit: '600リクエスト / 15分' },
      { category: '一括チェックの1ジョブあたりの最大メールアドレス数', limit: '50,000' },
      { category: '結果の保存期間', limit: '48時間' },
    ],
    tierNote:
      'ジョブは作成するよりも確認する回数の方が多いため、上限を3つに分けています。ジョブの実行中は、数秒ごとに状況を確認することもあります。`600 / 15 min`（1分あたり約40回）の上限なら、サーバーに過度な負担をかけずに、余裕を持って確認できます。',
    higherLimitsTitle: 'もっと高い上限が必要ですか？',
    higherLimitsBody: '確認済みの連携パートナーには、上限の引き上げを日常的に行っています。',
    higherLimitsCta: 'お問い合わせ',
    h429: '429レスポンスの構造',
    body429: '上限に達すると、APIは次のボディとともにHTTP 429エラーを返します。',
    backoff:
      '再試行する前に、`RateLimit-Reset`ヘッダーに書かれた秒数（時間枠がリセットされるまでの時間）だけ待ってください。',
  },

  cta: {
    h3: 'APIをつなぐ準備はできましたか？',
    body: 'APIキーは数秒で作成できます。無料のお試しクレジットが付いているので、支払いの前にすべてを最初から最後まで試せます。',
    primary: 'APIキーを作成する',
    secondary: 'チームに相談する',
  },
}
