---
title: "メールアドレスの正規表現：JavaScript・Python・HTMLで使えるテスト済みパターン（と正規表現の限界）"
seoTitle: "メールアドレスの正規表現：JavaScript・Python・HTMLのパターン（2026年）"
description: "JavaScript、Python、HTML5フォームで使える、テスト済みのメールアドレスの正規表現パターンを紹介します。標準とRFC 5322の違い、例外的なケース、正規表現だけでは受信トレイを検証できない理由も解説します。"
slug: email-regex
date: 2026-10-28
updated: 2026-10-28
keyword: メールアドレス 正規表現
image: /blog/covers/ja/email-regex.webp
imageAlt: 「メールアドレスの正規表現と限界」と書かれた紺色のバナー。RFCに完全準拠した正規表現は6,500文字超、アドレスの長さの上限は254文字、大手プロバイダーのバウンス率の基準は2%
cta: Giggal.aiでメールリストを検証する
---

正規表現でメールアドレスのバリデーション（有効性確認）をするのは簡単そうに思えます。しかし、実際のアドレスを相手にすると話が変わります。`alex+newsletter@sub.domain.co.uk` のようなアドレスは完全に有効です。一方で、`user@localhost` や `test..123@domain.com` は本番環境で問題を起こします。

公式の標準（RFC 5321とRFC 5322）に従って、有効なケースをすべてカバーする正規表現を書こうとすると、6,500文字を超える式が必要になります。その式は、かっこで囲んだコメント、空白を含む引用符付きの文字列、IPアドレスを使ったドメインリテラルまで認めます。実際のウェブアプリケーションでは、この公式のパターンは使えません。処理が遅く、読みにくく、今どのメールのプロバイダーも使っていないような奇妙な文字列まで受け入れてしまうからです。

実務で必要なのは、現実的な正規表現です。つまり、実際の利用者をブロックせずに、明らかな入力ミスを見つけられる正規表現です。

| パターンの種類 | ローカル部で使える文字 | サブドメインとTLDの対応 | 最適な用途 |
| --- | --- | --- | --- |
| **本番環境向けの標準** | 英字、数字、`._%+*-` | 複数のサブドメイン、2文字以上のTLD | ウェブの登録フォーム、ユーザー登録 |
| **HTML5ネイティブ** | RFCのサブセット全体（ASCII） | Punycode、英数字 | HTMLフォームの手軽なバリデーション |
| **最小限** | 空白と `@` 以外のすべて | `@` の後ろにドットを含む任意の文字列 | ゆるい入力チェック、簡単なスクリプト |

---

## 本番環境で推奨するメールアドレスの正規表現

多くのウェブアプリケーションに必要なのは、標準的な命名規則を守らせつつ、新しいTLDも認めるパターンです。

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### このパターンの仕組みを一つずつ解説

各部分を分解すると、よくある入力ミスをどう防ぐのかがわかります。

1. `^`：文字列の先頭を示し、部分的な一致を防ぎます。
2. `[a-zA-Z0-9._%+-]+`：ユーザー名（ローカル部）で使える文字の1文字以上に一致します。小文字、大文字、数字、ドット、アンダースコア、パーセント記号、プラス記号、ハイフンを含みます。
3. `@`：必須の `@` 記号にちょうど1回だけ一致します。
4. `[a-zA-Z0-9.-]+`：ドメイン名に一致します。英字、数字、ハイフン、サブドメイン用のドットを認めます（例：`mail.marketing.example`）。
5. `\.`：ドメイン名とトップレベルドメイン（TLD）を区切るドットそのものに一致します。
6. `[a-zA-Z]{2,}`：TLDが2文字以上の英字であることを求めます。`.com`、`.org`、そして `.technology` や `.engineering` のような新しいTLDを認めます。一方で、`user@domain.c` のような1文字の入力ミスはブロックします。
7. `$`：文字列の末尾を示します。

---

## 別のパターン

利用者の入力をどこでバリデーションするかによって、より厳しいパターンや、よりゆるいパターンが適している場合があります。

### 1. HTML5のW3C標準の正規表現

World Wide Web Consortium（W3C）は、ブラウザの `<input type="email">` 要素専用のメールアドレスのバリデーション用正規表現を定めています。

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

このパターンはHTML5の仕様に一致します。ローカル部では `!` や `~` などの特殊文字を認め、ドメインの各ラベルが63文字を超えないことを確認します。

### 2. 最小限の正規表現

バックエンドの検証サービスに渡す前に、利用者がアドレスらしいものを入力したかだけを確認したい場合は、次のパターンを使います。

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

このパターンが確認するのは三つです。`@` の前に空白以外の文字があること、`@` の後に空白以外の文字があること、ドメインに少なくとも一つのドットがあることです。珍しい海外の名前を誤って拒否することはありません。

---

## JavaScript、Python、HTMLでの実装

最近のプログラミング環境で、メールアドレスの正規表現によるバリデーションを実装する方法を紹介します。

### 1. JavaScriptでのメールアドレスのバリデーション（ブラウザとNode.js）

JavaScriptでメールアドレスをバリデーションするときは、テストの前に必ず前後の空白を取り除き、入力を小文字に変換してください。

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Trim leading/trailing whitespace
  const cleanEmail = email.trim();
  
  // Guard against excessive string lengths (RFC limit is 254 chars)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Test cases
console.log(isValidEmail("sarah.connor+work@cyberdyne.com")); // true
console.log(isValidEmail("invalid..dots@domain.com"));        // true (syntax check)
console.log(isValidEmail("missing-at-domain.com"));           // false
console.log(isValidEmail("user@domain"));                     // false
```

コード内のコメントの意味は次のとおりです。最初のコメントは前後の空白を取り除く処理、二つ目は長すぎる文字列を防ぐ処理（RFCの上限は254文字）です。二つ目のテストケースでは、ドットが連続するアドレスも構文チェックとしてはtrueになる点に注意してください。

### 2. Pythonでのメールアドレスの正規表現

Pythonでアドレスのリストを処理する場合は、正規表現を一度だけコンパイルし、`re.fullmatch` を使います。

```python
import re

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

def validate_email_address(email: str) -> bool:
    if not isinstance(email, str):
        return False
    
    clean_email = email.strip()
    if len(clean_email) > 254:
        return False
        
    return bool(EMAIL_PATTERN.fullmatch(clean_email))

# Test cases
print(validate_email_address("dev@company.io"))      # True
print(validate_email_address("bad email@domain.com")) # False
print(validate_email_address("user@.domain.com"))     # False
```

### 3. HTML5フォームのネイティブのバリデーション（JavaScriptなし）

最近のブラウザは、`type="email"` 属性を使うとメールアドレスの構文をネイティブにバリデーションします。`pattern` 属性と組み合わせれば、トップレベルドメインを必須にできます。

```html
<form action="/signup" method="POST">
  <label for="user-email">Work Email</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="you@company.com"
  />
  <button type="submit">Continue</button>
</form>
```

利用者がこのフォームを送信したとき、文字列がパターンに一致しなければ、ブラウザは送信を止め、利用者の言語でメッセージを表示します。日本語のサイトで使う場合は、ラベル（Work Email）、プレースホルダー、ボタン（Continue）の文言を日本語に置き換えてください。

---

## 多くのメールアドレスの正規表現が失敗する例外的なケース

正規表現のパターンを決める前に、アプリケーションが次の四つのよくある例外的なケースに対応する必要があるかを確認してください。

### 1. プラス記号を使ったアドレス（サブアドレス）
Gmail、Outlook、Fastmailなどのサービスでは、ユーザー名の後にプラス記号と任意のタグを付けられます（例：`alex+finance@gmail.com`）。文字クラスに `+` を含めない厳しすぎる正規表現は、こうした正当なアドレスを拒否し、利用者を困らせます。

### 2. 長い分野別トップレベルドメイン（gTLD）
以前の正規表現のガイドでは、すべてのドメインが `.com`、`.net`、`.org` で終わると考えて、`\.[a-zA-Z]{2,4}$` で終わるものがよくありました。今では、`.management`、`.technology`、`.international` など、より長いTLDが数百あります。必ず、根拠のない上限を付けずに `[a-zA-Z]{2,}` を使ってください。

### 3. 国際化ドメイン名（IDN）
ドイツ、フランス、スペイン、アジアの利用者を対象にしている場合、受信者のドメインにASCII以外の文字が含まれることがあります（`kontakt@münchen.de` や `info@académie.fr` など）。標準的なASCIIの正規表現は、こうした文字列を拒否します。システムで国際化ドメインを受け付ける場合は、構文のバリデーションの前に、Punycode（`xn--...`）を使ってドメイン部分をASCIIに変換してください。

### 4. 連続するドット
技術的には、RFC 5322は引用符で囲んだ文字列の中のドットを認めています（`"john..doe"@domain.com`）。しかし、引用符で囲まないドットの連続（`john..doe@domain.com`）を認めるメールサーバーはほとんどありません。ローカル部でドットの連続を禁止する必要がある場合は、否定先読み `(?!.*\.\.)` を追加できます。

---

## 正規表現の限界：到達率の盲点

正規表現が確認するのは、**構文の形**の一つだけです。答えられるのは「この文字列はメールアドレスのように見えるか」という質問です。

本当に重要な質問、つまり「このアドレスに送ったメールは受信トレイに届くか」には答えられません。

### 設計の観点から：正規表現だけではメールアドレスをバリデーションできない理由

ソフトウェア開発では、メールアドレスのバリデーションを単純なパターンマッチングの問題として扱うことが、よくある設計上の落とし穴です。次の動画（英語）では、ソフトウェアアーキテクトのDerek Comartin氏（Code Opinion）が、RFCに準拠したメールアドレスを正規表現で解析するとコードが壊れやすくなる理由と、構文の確認と受信トレイの存在の検証がまったく別のものである理由を説明しています。

```youtube
M6itpAfbvas
動画：[Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas)（Derek Comartin氏、Code Opinion）
```

この解説の主な要点は次のとおりです。
- **RFCの仕様の落とし穴**：RFCの例外的なケースをすべてカバーしようとすると、何千文字もの読めない正規表現になり、最近のメールアドレスでたびたび失敗します。
- **形式とメールボックスの存在は別**：`nonexistent.user.991@gmail.com` のようなアドレスは、どの正規表現のルールにも問題なく合格します。しかし、受信側のメールサーバーに一致するアカウントがないため、すぐにバウンスします。
- **複数の段階で確認する方法**：本番のアプリケーションでは、フロントエンドでは明らかな入力ミスを見つけるための軽いパターンだけを使います。そして、連絡先をデータベースに保存する前に、実際のメールボックスの検証に頼るべきです。

正規表現にきれいに一致しても、メッセージを送ったときに失敗することがある理由は五つあります。次の図は、利用者がfake.account.8821@gmail.comと入力した場合の流れです。正規表現の構文チェックには合格し（使える文字で、@とTLDがある）、DNSのMXレコードのチェックにも合格します（gmail.comには実際のGoogleのメールサーバーがある）。しかしSMTPのメールボックスのチェックで失敗し（Googleのサーバーが550 5.1.1 User Unknownと応答）、結果はハードバウンスになります。

```
[ User types: fake.account.8821@gmail.com ]
                      │
                      ▼
 1. Regex Syntax Check ────────► PASSES (Valid characters, has @, has TLD)
                      │
                      ▼
 2. DNS MX Record Check ───────► PASSES (gmail.com has real Google mail servers)
                      │
                      ▼
 3. SMTP Mailbox Check ────────► FAILS (Google server responds: 550 5.1.1 User Unknown)
                      │
                      ▼
          [ RESULT: HARD BOUNCE ]
```

### 1. 存在しないドメイン
`contact@thisdomaindoesnotexist99238.com` という文字列は、標準的な正規表現のパターンに一致します。しかし、このドメインは一度も登録されておらず、メールの配送先を示すMX（Mail Exchange）レコードもありません。このアドレスにメールを送ると、すぐにバウンスします。

### 2. 削除された、または使われていないメールボックス
`alex.smith@largecorp.example` というアドレスは、正規表現のどのルールにも一致します。しかし、Alexさんが6か月前に退職していれば、メールボックスは削除されています。自社のメールサーバーがその会社のメールサーバーに接続すると、サーバーはエラー `550 5.1.1: Recipient address rejected: User unknown` を返します。これはハードバウンスとして数えられ、自社のドメインのレピュテーションに影響します。

### 3. 一時的なメールアドレスと使い捨てメールアドレス
10MinuteMail、GuerrillaMail、Mailinatorなどのサービスは、一時的なメールアドレスを作ります（例：`temp992@guerrillamail.com`）。これらのアドレスは正規表現の構文テストに問題なく合格しますが、メールボックスは数分で期限切れになります。オンボーディングのメールや領収書を送ると、その後のメールはバウンスします。

### 4. キャッチオールドメインのメールサーバー
多くの企業のドメインは、特定のメールボックスが存在するかどうかにかかわらず、届いたすべてのメッセージを受け入れるようにメールサーバーを設定しています。正規表現のチェックでは、`steve.jobs@company.com` が現役の社員なのか、形だけのアドレスなのかはわかりません。

### 5. スパムトラップ
スパムトラップのアドレスは、普通の個人のメールアドレスとまったく同じに見えます（例：`info.audits@security-network.org`）。正規表現のチェックに合格し、SMTPの接続も受け入れます。このアドレスにメールを送ると、送信IPがSpamhausなどのブロックリストに登録されます。

---

## 2段階のバリデーションの方法

利用者の登録をスムーズに保ちながら、問題のあるデータがデータベースに入るのを防ぐには、バリデーションを二つの段階に分けます。次の図のとおり、第1段階はフロントエンドでの速い構文のバリデーション（HTML5と軽い正規表現）です。入力ミスをその場で見つけ、@の抜けや壊れたTLDを防ぎ、利用者にすぐに結果を返します。第2段階はバックエンドでの到達率の検証（DNSとSMTPのチェック）です。ドメインのDNSのMXレコードを確認し、メールを送らずにSMTPのやり取りを再現し、使い捨てのドメインとキャッチオールのサーバーを検出します。

```
┌────────────────────────────────────────────────────────┐
│                   TIER 1: FRONTEND                     │
│  Fast Syntax Validation (HTML5 + Lightweight Regex)    │
│  - Catches typing errors in real time                  │
│  - Prevents missing @ and broken TLDs                  │
│  - Instant feedback to the user                        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   TIER 2: BACKEND                      │
│  Deliverability Verification (DNS + SMTP Check)        │
│  - Checks DNS MX records for the domain                │
│  - Simulates SMTP handshake without sending email      │
│  - Detects disposable domains and catch-all servers    │
└────────────────────────────────────────────────────────┘
```

1. **クライアント側（すぐに結果を返す）**：フロントエンドでは、標準的なメールアドレスの正規表現か、HTML5ネイティブの `<input type="email">` を使います。これにより、ピリオドの代わりにカンマを入力する（`user@gmail,com`）などのうっかりした入力ミスのまま送信されるのを防げます。
2. **サーバー側（リアルタイムの到達率の確認）**：利用者がフォームを送信したら、データベースに保存する前に、メールボックスが存在するかを検証します。アドレスを一つずつ確認するなら当社の[無料のメールアドレスチェッカー](/email-checker)、使い捨てのアカウントを除くなら[使い捨てメールアドレスチェッカー](/disposable-email-checker)を使えます。[メールアドレス検証API](/public/docs)でチェックを自動化することもできます。

正規表現で形式を確認するのは、必要な最初の一歩です。到達率のチェックと組み合わせれば、送信者レピュテーションを守り、大手のプロバイダーが求める2%の基準よりバウンス率を低く保てます。
