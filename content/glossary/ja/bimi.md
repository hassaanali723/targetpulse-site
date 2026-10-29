---
title: BIMI
seoTitle: BIMIとは？メールにロゴを表示する条件と設定方法
description: メールのBIMIとは何か、受信トレイにブランドのロゴをどう表示するか、事前に必要なもの、BIMIレコードの形、どの受信トレイで表示されるかを説明します。
slug: bimi
date: 2026-10-28
updated: 2026-10-28
keyword: BIMI メール
short: BIMIは、対応している受信トレイで、メールの横にブランドのロゴを表示するメールの標準規格です。Brand Indicators for Message Identificationの略です。ドメインがquarantineかrejectのポリシーでDMARCに合格している場合にだけ機能します。
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: ロゴが役立つのは、メールが実在する受信トレイに届いたときだけです
---

## メールのBIMIとは？

BIMIはBrand Indicators for Message Identificationの略です。ブランドが、自社のメールの横にロゴを表示できるようにするメールの標準規格です。ロゴは、GmailやApple Mailなど、BIMIに対応した受信トレイに表示されます。標準規格は、メール関連企業のワーキンググループであるBIMI Groupが公開しています。

BIMIそのものは、セキュリティを高めるものではありません。すでにDMARCに合格しているメールに、ロゴを表示するだけです。ドメインを守るのは、そこにたどり着くまでに行う設定です。

## 例：Gmailに表示されるブランドロゴ

スマートフォンでGmailを開きます。一覧の各メールの左側に、小さな丸い画像があります。ほとんどの送信者については、Gmailは送信者名の最初の1文字が入った丸を表示します。一部のブランドについては、その丸の中にブランド自身のロゴを表示します。そのブランドはBIMIを使っています。

example.comの靴店がBIMIを設定したとします。靴店は、プリヤのGmailアドレスにニュースレターを送ります。何が起きるかを見てみます。

1. Gmailがexample.comについてSPF、DKIM、DMARCを確認します。メールはDMARCに合格します。
2. Gmailは、靴店のDMARCポリシーがquarantineかrejectであることを確認します。
3. Gmailは `default._bimi.example.com` にあるBIMIレコードを調べます。
4. レコードには、靴店のロゴファイルとマーク証明書の場所が書かれています。
5. Gmailは証明書を確認し、メールの横にロゴを表示します。

どこかの手順で失敗すると、プリヤにはいつもの1文字が表示されます。メール自体は通常どおり配信されます。

## BIMIに必要なもの

Gmailでロゴが表示されるには、事前に3つのものが必要です。

- **強制ポリシーのDMARC。**[DMARC](/glossary/dmarc)のポリシーが `p=quarantine` か `p=reject` である必要があります。Googleは、BIMIは `p=none` に対応していないと明記しています。
- **SVG Tiny PS形式のロゴ。**SVGとは、ピクセルではなく図形で描かれた画像形式です。SVG Tiny PSは、受信トレイ用に機能を絞ったSVGです。画像は正方形で、ブランド名を入れたタイトルを含める必要があります。スクリプト、アニメーション、ほかのファイルへのリンクは入れられません。ファイルサイズは32 KB未満に収めます。
- **マーク証明書。**認証局が発行するファイルです。認証局とは、ロゴを使う権利があるかを確認する会社です。Gmailは2種類の証明書を受け付けます。

| 証明書 | 登録商標が必要か | Gmailでの表示 |
| --- | --- | --- |
| VMC（Verified Mark Certificate） | 必要 | ロゴと青いチェックマーク |
| CMC（Common Mark Certificate） | 不要 | ロゴのみ（チェックマークなし） |

## BIMIレコード

BIMIレコードは[DNS TXTレコード](/glossary/dns-txt-record)です。DNSとは、ドメインが自分の設定を公開する、インターネット上の公開ディレクトリです。TXTレコードとは、テキストを保存するDNSのエントリーです。BIMIレコードは `default._bimi.example.com` に置きます。ここで `default` はセレクター、つまりレコードに付ける名前です。

```text
v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/certificate.pem
```

- `v=BIMI1` は、これがBIMIレコードであることを示します。
- `l=` は、SVGロゴのURLです。
- `a=` は、VMCまたはCMCの証明書のURLです。証明書はPEMファイルです。

Google自身の例には、`l=` を空にして `a=` だけを入れたレコードもあります。これは、ロゴが証明書ファイルの中に保存されているので機能します。証明書の発行元が推奨する方法に従ってください。

## BIMIロゴを表示する受信トレイ

対応状況はプロバイダーによって異なります。以下は、Giggal.aiのBIMIジェネレーターのページに記載しているルールです。

- **Gmail**は、VMCかCMCがある場合にだけロゴを表示します。
- **Apple Mail**は、VMCがある場合にだけロゴを表示します。
- **YahooとFastmail**は、証明書がまったくないレコードからでもロゴを表示できます。

BIMIに対応していない受信トレイでは、表示は何も変わりません。プロバイダーが新しいBIMIレコードを読み込むまでに、時間がかかることもあります。そのため、初日にロゴが表示されなくても、必ずしもエラーではありません。

## BIMIの設定方法

1. メールを送るすべてのサービスについて、SPFとDKIMを設定します。
2. DMARCのポリシーをquarantineかrejectに変更します。Giggal.aiの[DMARCジェネレーター](/dmarc-generator)でレコードを作成できます。
3. ロゴをSVG Tiny PSファイルに変換します。
4. Gmailでロゴを表示したい場合は、VMCかCMCを購入します。
5. Giggal.aiの[BIMIジェネレーター](/bimi-generator)でBIMIレコードを作成します。SVGファイルもブラウザ上で確認できます。
6. DNSの `default._bimi` にレコードを公開します。
7. Gmailのアカウントにテストメールを送り、ロゴが表示されるかを確認します。

## BIMIとメールアドレス検証

BIMIそのものは、配信を改善するものではありません。受信トレイに届き、DMARCに合格したメールにロゴを表示するだけです。存在しないアドレスに送ったメールはバウンスするので、誰もロゴを見ません。[メールアドレスチェッカー](/email-checker)と[メールアドレスの一括検証ツール](/bulk-email-verifier)は、そのようなアドレスを見つけるので、送信前に削除できます。[メールアドレス検証](/)を行うとバウンスするメールが減り、より多くの実在する人がロゴを目にします。
