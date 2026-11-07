// All page copy for Gmail plus addressing, one object per language the page ships in.
// The page is components/tools/PlusAddressing/PlusAddressingPage.tsx; the URLs live in
// CLUSTERS.plusAddressing (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/plusAddressingToolStrings.ts.
//
// Inline markup (rendered by the page's Text helper): **bold**, `code`,
// [label](/english-path) for an internal link and [label](https://...) for an
// external one, which opens in a new tab. Internal paths are always English; the
// page routes each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface PlusPageStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  appName: string
  featureList: string[]
  h1: string
  heroIntro: string
  howTitle: string
  howSteps: [string, string, string, string]
  imageAlt: string
  whatTitle: string
  /** The second carries the RFC links. */
  whatParas: [string, string]
  gmailTitle: string
  gmailParas: [string, string, string]
  filterTitle: string
  filterPara: string
  providersTitle: string
  providersIntro: string
  thProvider: string
  thSupport: string
  thNotes: string
  /** Badge on rows backed by independent tests rather than the provider's own pages. */
  testedBadge: string
  /** Support and notes by provider name. Names, links and the tested flag are in the page. */
  providerRows: Record<string, { supports: string; notes: string }>
  providersAfter: string
  sendTitle: string
  sendIntro: string
  /** Each starts with the provider in **bold**. */
  sendItems: [string, string, string, string]
  usesTitle: string
  usesParas: [string, string]
  usesLimits: [string, string, string]
  listTitle: string
  /** Before the list of rules. */
  listParas: [string, string]
  listRules: [string, string, string, string]
  /** After the list of rules. The second links to the other tools. */
  listAfter: [string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: PlusPageStrings = {
  metaTitle: 'Gmail Plus Addressing: Free Plus Address Generator | Giggal.ai',
  ogTitle: 'Gmail Plus Addressing: Free Plus Address Generator',
  description:
    'Create Gmail plus addresses like you+shopping@gmail.com, see which providers support plus addressing, and find plus and dot duplicates in an email list.',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Gmail Plus Addressing Tool',
  crumb: 'Gmail Plus Addressing',
  appName: 'Gmail Plus Addressing Tool',
  featureList: [
    'Create plus addresses for any email address',
    'Shows whether your email provider supports plus addressing',
    'Finds plus and dot versions of the same Gmail address in a list',
    'Keeps the first address of each group exactly as written',
    'Copy or download the list without duplicates',
  ],
  h1: 'Gmail Plus Addressing',
  heroIntro:
    'Create plus addresses like jane+shopping@gmail.com that all arrive in your inbox. Or clean a list of the plus and dot versions that belong to the same person.',
  howTitle: 'How to use the plus address generator',
  howSteps: [
    'On the Create tab, type your email address. A Gmail address works, and so do most others.',
    'Add a tag for each place you’ll use the address, such as newsletters or shopping. Separate tags with commas.',
    'Copy the plus addresses. The tool also tells you whether your provider delivers them.',
    'To clean a list, switch to the Clean tab and paste the addresses. The tool groups the ones that reach the same inbox and gives you the list without duplicates.',
  ],
  imageAlt: 'Illustration of several Gmail plus addresses with different tags arriving in one inbox.',
  whatTitle: 'What is plus addressing?',
  whatParas: [
    'Plus addressing means adding a plus sign and a tag to the part of an email address before the @. Mail to `jane+travel@gmail.com` arrives in the same inbox as mail to `jane@gmail.com`. The tag stays visible, so you can sort or filter on it.',
    'The standards call it sub-addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) uses the plus sign as its example but leaves the separator to each mail system. That fits a broader rule in [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): only the receiving server decides what the part before the @ means. So whether a plus address works depends entirely on the provider that hosts the inbox.',
  ],
  gmailTitle: 'How Gmail plus addressing works',
  gmailParas: [
    '[Google’s help page](https://support.google.com/mail/answer/12096) describes it in one line: add a plus sign and any word before the @. Every version arrives in your inbox. You don’t need to set anything up, and Google doesn’t mention a limit on how many you use.',
    'Gmail also ignores dots. For a gmail.com address, [mail sent to any dotted version](https://support.google.com/mail/answer/7436150) goes to the same person, so `j.a.n.e@gmail.com` is `jane@gmail.com`. And [gmail.com and googlemail.com](https://support.google.com/mail/answer/10313) are the same inbox.',
    'Google Workspace accounts on a company domain support plus addresses too. Dots work differently there: [Google says](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) periods aren’t ignored in Workspace usernames, so `jane.doe@company.com` and `janedoe@company.com` can be two different people.',
  ],
  filterTitle: 'Filtering mail sent to a plus address',
  filterPara:
    'Create a Gmail filter and put the full plus address in the To field. You can also search for it with the [deliveredto: operator](https://support.google.com/mail/answer/7190), for example `deliveredto:jane+travel@gmail.com`. Look in To or Delivered-To, not From. The tag is on the address the mail was sent to.',
  providersTitle: 'Which email providers support plus addressing',
  providersIntro:
    'Most large providers deliver plus addresses, but not all of them document it. Rows marked “tested” rely on independent tests rather than the provider’s own pages.',
  thProvider: 'Provider',
  thSupport: 'Plus addresses',
  thNotes: 'Notes',
  testedBadge: 'tested',
  providerRows: {
    Gmail: { supports: 'Yes', notes: 'Dots in the username are ignored. gmail.com and googlemail.com are the same inbox.' },
    'Google Workspace': { supports: 'Yes', notes: 'Works on company domains. Dots are part of the address.' },
    'Microsoft 365': { supports: 'Yes, on by default', notes: 'Receive only. An admin can turn it off for the organization.' },
    'Outlook.com': { supports: 'Yes', notes: 'Also for hotmail.com and live.com addresses. Dots are part of the address.' },
    'Proton Mail': { supports: 'Yes', notes: 'Free plan included. Replies go out from the plus address.' },
    Fastmail: { supports: 'Yes', notes: 'A tag that matches a folder name files the mail there. Subdomain addresses work too.' },
    'iCloud Mail': { supports: 'Yes, in tests', notes: 'Works for icloud.com and me.com in independent tests. Apple doesn’t document it.' },
    'Yandex Mail': { supports: 'Yes', notes: 'Addresses like login+word@yandex.ru.' },
    'Yahoo Mail': { supports: 'Not confirmed', notes: 'Yahoo documents disposable addresses with a dash instead: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'For AOL, Zoho Mail, GMX and mail.com we couldn’t find documentation either way. Send yourself a test email before you rely on a plus address there.',
  sendTitle: 'Can you send from a plus address?',
  sendIntro: 'It depends on the provider, and this is where many guides go wrong:',
  sendItems: [
    '**Microsoft 365:** no. [Microsoft’s documentation](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) says users can’t send email from plus addresses.',
    '**Proton Mail:** yes. Replies to a plus address go out from that address by default.',
    '**Fastmail:** yes, after you add the address in your settings.',
    '**Gmail:** Google doesn’t document it. Some guides add the plus address under [Send mail as](https://support.google.com/mail/answer/22370), which allows up to 99 addresses. Google has announced that Send mail as will stop working for third-party addresses from January 2027. Addresses you own in Gmail aren’t affected.',
  ],
  usesTitle: 'What plus addresses are good for, and their limits',
  usesParas: [
    'People use them to sort mail into folders and to spot who shared their address. Developers also use them to test sign-up forms with several accounts that land in one inbox. If spam arrives at `jane+shoestore@gmail.com`, you know where it came from.',
    'There are limits worth knowing before you rely on it:',
  ],
  usesLimits: [
    'Some websites reject the plus sign. It’s a valid character, and [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) tells programs to accept it, but Fastmail notes that some sites wrongly treat it as invalid.',
    'A plus address doesn’t hide your real address. Anyone can delete the tag, and Google itself says these addresses aren’t private.',
    'If you want privacy, use a forwarding alias instead. [Apple’s Hide My Email](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (with iCloud+) and [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) create random addresses that forward to you.',
  ],
  listTitle: 'Plus addresses and dots in an email list',
  listParas: [
    'For anyone who runs a sign-up form, plus addressing has a flip side. One person can sign up as `jane@gmail.com`, `j.ane@gmail.com` and `jane+2@gmail.com`, and your list counts three people. It also enables abuse. In one case [reported by security researchers](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), a group used dotted versions of Gmail addresses for 48 credit card applications and got at least $65,000 in fraudulent credit.',
    'The Clean tab finds these groups. It follows rules that are safe for each provider:',
  ],
  listRules: [
    'For gmail.com and googlemail.com, it removes dots and the plus tag.',
    'For Outlook.com, iCloud, Proton, Fastmail and Yandex, it removes only the plus tag. Dots stay, because they change the address there.',
    'It leaves Yahoo addresses alone. A Yahoo disposable address uses a nickname that isn’t the account name, so it can’t be traced back.',
    'It leaves company domains alone unless you tick the option. Each mail server decides what a plus sign means, and on some servers it’s part of a real mailbox name.',
  ],
  listAfter: [
    'Use the result to spot duplicates, not to rewrite addresses. Keep sending to the address exactly as the person entered it, so their filters keep working. The tool keeps the first address of each group unchanged for that reason.',
    'Merging duplicates doesn’t tell you whether an address still works. Run the cleaned list through the [bulk email verifier](/bulk-email-verifier) before you send, or check one address with the [email checker](/email-checker). To flag addresses from free providers, see the [list of free email providers](/free-email-providers), and for throwaway inboxes, the [disposable email checker](/disposable-email-checker).',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is Gmail plus addressing?',
      a: 'It’s a way to make extra versions of your Gmail address. You add a plus sign and a word before the @, such as jane+shopping@gmail.com. Mail sent to any of them arrives in your normal inbox, and you can filter on the word.',
    },
    {
      q: 'Does plus addressing work in Outlook?',
      a: 'Yes. Outlook.com addresses accept plus addresses, and Microsoft turns plus addressing on by default for Microsoft 365 business accounts. In Microsoft 365 you can receive at a plus address, but you can’t send from one.',
    },
    {
      q: 'Do dots matter in a Gmail address?',
      a: 'Not for gmail.com addresses. Google says mail sent to any dotted version of your address goes to you, so jane.doe@gmail.com and janedoe@gmail.com are one inbox. In Google Workspace accounts on a company domain, dots do change the address.',
    },
    {
      q: 'Can I send email from a plus address in Gmail?',
      a: 'Google doesn’t document it. Some guides add the plus address in Gmail’s settings under Send mail as, which lets you choose it as the From address. Microsoft 365 doesn’t allow sending from plus addresses at all, while Proton Mail replies from the plus address by default.',
    },
    {
      q: 'Why does a website reject my plus address?',
      a: 'Because its sign-up form checks addresses too strictly. The plus sign is a valid character in an email address, and RFC 3696 says programs should accept it. Fastmail notes that some websites wrongly treat it as invalid. Use your normal address on those sites.',
    },
    {
      q: 'Is a plus address the same as an email alias?',
      a: 'Not quite. A plus address is your real address with a tag, so anyone can remove the tag and see your inbox address. An alias from Apple’s Hide My Email or DuckDuckGo Email Protection is different. It’s a random address that forwards to you and hides your real one.',
    },
    {
      q: 'Does plus addressing work with Google Workspace?',
      a: 'Yes. Google’s own example uses a company domain: cassy+news@solarmora.com. The difference from gmail.com is that dots are part of the address in Workspace, so only the plus part is a tag.',
    },
    {
      q: 'How many plus addresses can I make?',
      a: 'Google doesn’t state a number. The practical limit is length. The part before the @ can be at most 64 characters, counting your name, the plus sign and the tag.',
    },
  ],
  ctaHeadline: 'Know which addresses on your list still work',
  ctaSupporting:
    'Giggal checks every address before you send, catch-all domains included, so merged duplicates and dead addresses don’t become bounces. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const ja: PlusPageStrings = {
  metaTitle: 'Gmailのプラスアドレス：無料の作成ツールと重複チェック | Giggal.ai',
  ogTitle: 'Gmailのプラスアドレス：無料の作成ツールと重複チェック',
  description:
    'you+shopping@gmail.comのようなGmailのプラスアドレスを無料で作成できます。対応しているメールサービスを確認し、メールリスト内のプラスやドットによる重複も見つけられます。',
  ogLocale: 'ja_JP',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Gmailのプラスアドレス作成ツール',
  crumb: 'Gmailのプラスアドレス',
  appName: 'Gmailのプラスアドレス作成ツール',
  featureList: [
    '任意のメールアドレスからプラスアドレスを作成',
    '利用中のメールサービスがプラスアドレスに対応しているかを表示',
    'リスト内で、同じGmailアドレスのプラス付き・ドット付きの表記を検出',
    '各グループの最初のアドレスを入力どおりに保持',
    '重複を除いたリストをコピーまたはダウンロード',
  ],
  h1: 'Gmailのプラスアドレス',
  heroIntro:
    'jane+shopping@gmail.comのようなプラスアドレスを作成できます。どのアドレス宛てのメールも、同じ受信トレイに届きます。同じ人のプラス付き・ドット付きのアドレスを、リストから整理することもできます。',
  howTitle: 'プラスアドレス作成ツールの使い方',
  howSteps: [
    '「アドレスを作成」タブで、メールアドレスを入力します。Gmailのアドレスのほか、多くのメールサービスのアドレスでも使えます。',
    'アドレスを使う場所ごとに、newslettersやshoppingのようなタグを追加します。タグはカンマで区切ります。',
    'プラスアドレスをコピーします。利用中のメールサービスがプラスアドレス宛てのメールを配信するかどうかも表示されます。',
    'リストを整理するには、「リストを整理」タブに切り替えてアドレスを貼り付けます。同じ受信トレイに届くアドレスをグループにまとめ、重複を除いたリストを表示します。',
  ],
  imageAlt: 'タグの異なる複数のGmailプラスアドレスが、1つの受信トレイに届く様子のイラスト。',
  whatTitle: 'プラスアドレスとは',
  whatParas: [
    'プラスアドレスとは、メールアドレスの@より前の部分に、プラス記号とタグを付け加えたものです。`jane+travel@gmail.com`宛てのメールは、`jane@gmail.com`宛てのメールと同じ受信トレイに届きます。タグは見える形で残るため、タグでメールを並べ替えたり、フィルタで振り分けたりできます。',
    '標準規格では、これをサブアドレス（sub-addressing）と呼びます。[RFC 5233](https://www.rfc-editor.org/rfc/rfc5233)はプラス記号を例に使っていますが、区切り文字は各メールシステムに任せています。これは[RFC 5321](https://www.rfc-editor.org/rfc/rfc5321)の、より広いルールに沿ったものです。@より前の部分の意味を決めるのは、受信側のサーバーだけです。そのため、プラスアドレスが使えるかどうかは、受信トレイを提供するメールサービスによって決まります。',
  ],
  gmailTitle: 'Gmailのプラスアドレスの仕組み',
  gmailParas: [
    '[Googleのヘルプページ](https://support.google.com/mail/answer/12096)では、1行で説明されています。@の前にプラス記号と任意の単語を付けるだけです。どの表記で送られたメールも受信トレイに届きます。設定は不要で、使える数の上限についてGoogleは触れていません。',
    'Gmailはドットも無視します。gmail.comのアドレスでは、[ドットの位置が異なるどの表記に送られたメールも](https://support.google.com/mail/answer/7436150)同じ人に届きます。つまり、`j.a.n.e@gmail.com`は`jane@gmail.com`と同じです。また、[gmail.comとgooglemail.com](https://support.google.com/mail/answer/10313)は同じ受信トレイです。',
    '独自ドメインのGoogle Workspaceアカウントも、プラスアドレスに対応しています。ただし、ドットの扱いは異なります。[Googleの説明](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups)によると、Workspaceのユーザー名のピリオドは無視されません。そのため、`jane.doe@company.com`と`janedoe@company.com`は別の人である場合があります。',
  ],
  filterTitle: 'プラスアドレス宛てのメールをフィルタで振り分ける方法',
  filterPara:
    'Gmailでフィルタを作成し、「To」欄にプラスアドレス全体を入力します。[deliveredto:演算子](https://support.google.com/mail/answer/7190)で検索することもできます。例：`deliveredto:jane+travel@gmail.com`。見るのは「To」か「Delivered-To」で、「From」ではありません。タグは、メールの宛先のアドレスに付いているからです。',
  providersTitle: 'プラスアドレスに対応しているメールサービス',
  providersIntro:
    '大手のメールサービスの多くはプラスアドレス宛てのメールを配信しますが、すべてが公式に説明しているわけではありません。「テスト済み」と表示した行は、サービス自身のページではなく、第三者によるテストに基づいています。',
  thProvider: 'メールサービス',
  thSupport: 'プラスアドレス',
  thNotes: '備考',
  testedBadge: 'テスト済み',
  providerRows: {
    Gmail: { supports: '対応', notes: 'ユーザー名のドットは無視されます。gmail.comとgooglemail.comは同じ受信トレイです。' },
    'Google Workspace': { supports: '対応', notes: '独自ドメインで使えます。ドットはアドレスの一部です。' },
    'Microsoft 365': { supports: '対応（初期設定で有効）', notes: '受信のみです。管理者は組織全体で無効にできます。' },
    'Outlook.com': { supports: '対応', notes: 'hotmail.comとlive.comのアドレスでも使えます。ドットはアドレスの一部です。' },
    'Proton Mail': { supports: '対応', notes: '無料プランでも使えます。返信はプラスアドレスから送信されます。' },
    Fastmail: { supports: '対応', notes: 'フォルダ名と同じタグのメールは、そのフォルダに入ります。サブドメインのアドレスも使えます。' },
    'iCloud Mail': { supports: '対応（テストで確認）', notes: '第三者のテストでは、icloud.comとme.comで使えました。Appleは公式に説明していません。' },
    'Yandex Mail': { supports: '対応', notes: 'login+word@yandex.ruのようなアドレスです。' },
    'Yahoo Mail': { supports: '未確認', notes: 'Yahooが説明しているのは、代わりにハイフンを使う使い捨てアドレスです（nickname-keyword@yahoo.com）。' },
  },
  providersAfter:
    'AOL、Zoho Mail、GMX、mail.comについては、対応か非対応かを示す資料が見つかりませんでした。これらのサービスでプラスアドレスを使う前に、自分宛てにテストメールを送ってください。',
  sendTitle: 'プラスアドレスから送信できるか',
  sendIntro: 'メールサービスによって異なります。多くの解説記事が間違えているのは、この点です。',
  sendItems: [
    '**Microsoft 365：**できません。[Microsoftのドキュメント](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online)には、ユーザーはプラスアドレスからメールを送信できないと書かれています。',
    '**Proton Mail：**できます。プラスアドレス宛てのメールに返信すると、初期設定でそのアドレスから送信されます。',
    '**Fastmail：**できます。設定でそのアドレスを追加すると送信できます。',
    '**Gmail：**Googleは説明していません。一部の解説記事では、[「Send mail as」](https://support.google.com/mail/answer/22370)（他のアドレスからメールを送信する設定）にプラスアドレスを追加しています。この設定では最大99件のアドレスを追加できます。Googleは、2027年1月から「Send mail as」が他社のメールサービスのアドレスで使えなくなると発表しています。Gmailで所有しているアドレスには影響しません。',
  ],
  usesTitle: 'プラスアドレスの使い道と限界',
  usesParas: [
    'プラスアドレスは、メールをフォルダに振り分けたり、誰がアドレスを共有したかを知ったりするために使われます。開発者は、1つの受信トレイに届く複数のアカウントで登録フォームをテストするのにも使います。`jane+shoestore@gmail.com`に迷惑メールが届けば、どこから来たのかがわかります。',
    '使う前に知っておきたい限界もあります。',
  ],
  usesLimits: [
    '一部のWebサイトはプラス記号を受け付けません。プラス記号は有効な文字で、[RFC 3696](https://www.rfc-editor.org/rfc/rfc3696)もプログラムに受け付けるよう求めています。それでもFastmailによると、一部のサイトは誤って無効な文字として扱います。',
    'プラスアドレスでは本当のアドレスを隠せません。タグは誰でも削除できます。Google自身も、こうしたアドレスは非公開ではないと説明しています。',
    'プライバシーを守りたい場合は、代わりに転送用のエイリアスを使ってください。[Appleの「メールを非公開」](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud)（iCloud+で利用可能）と[DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection)は、本来のアドレスに転送するランダムなアドレスを作成します。',
  ],
  listTitle: 'メールリスト内のプラスアドレスとドット',
  listParas: [
    '登録フォームを運営する側にとって、プラスアドレスには別の問題もあります。1人が`jane@gmail.com`、`j.ane@gmail.com`、`jane+2@gmail.com`で登録すると、リストでは3人として数えられます。不正にも使われます。[セキュリティ研究者が報告した事例](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html)では、あるグループがGmailアドレスのドット違いの表記を使って48件のクレジットカードを申し込み、少なくともUS$65,000の不正な与信を得ました。',
    '「リストを整理」タブは、こうしたグループを見つけます。メールサービスごとに安全なルールに従います。',
  ],
  listRules: [
    'gmail.comとgooglemail.comでは、ドットとプラスのタグを取り除きます。',
    'Outlook.com、iCloud、Proton、Fastmail、Yandexでは、プラスのタグだけを取り除きます。これらのサービスではドットでアドレスが変わるため、ドットは残します。',
    'Yahooのアドレスには手を加えません。Yahooの使い捨てアドレスはアカウント名ではないニックネームを使うため、元のアカウントをたどれません。',
    '独自ドメインのアドレスには、オプションにチェックを入れない限り手を加えません。プラス記号の意味は各メールサーバーが決めます。サーバーによっては、プラス記号が実際のメールボックス名の一部です。',
  ],
  listAfter: [
    '結果は重複を見つけるために使い、アドレスの書き換えには使わないでください。相手のフィルタが動き続けるよう、本人が入力したとおりのアドレスに送り続けてください。ツールが各グループの最初のアドレスを変更せずに残すのは、そのためです。',
    '重複をまとめても、アドレスが今も使えるかどうかはわかりません。送信前に、整理したリストを[メールアドレスの一括検証](/bulk-email-verifier)にかけるか、[メールアドレスチェッカー](/email-checker)で1件ずつ確認してください。フリーメールのアドレスを見分けるには[フリーメール一覧](/free-email-providers)を、使い捨てのメールアドレスには[捨てメアド判定](/disposable-email-checker)をご覧ください。',
  ],
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'Gmailのプラスアドレスとは何ですか？',
      a: 'Gmailアドレスの別の表記を作る方法です。jane+shopping@gmail.comのように、@の前にプラス記号と単語を付けます。どの表記に送られたメールもいつもの受信トレイに届き、その単語でフィルタを作れます。',
    },
    {
      q: 'Outlookでもプラスアドレスは使えますか？',
      a: 'はい。Outlook.comのアドレスはプラスアドレスを受け付けます。Microsoftは、Microsoft 365のビジネスアカウントでプラスアドレスを初期設定で有効にしています。Microsoft 365では、プラスアドレスで受信はできますが、プラスアドレスから送信はできません。',
    },
    {
      q: 'Gmailアドレスのドットに意味はありますか？',
      a: 'gmail.comのアドレスでは意味がありません。Googleによると、ドットの位置が異なるどの表記に送られたメールも本人に届きます。そのため、jane.doe@gmail.comとjanedoe@gmail.comは同じ受信トレイです。独自ドメインのGoogle Workspaceアカウントでは、ドットでアドレスが変わります。',
    },
    {
      q: 'Gmailでプラスアドレスから送信できますか？',
      a: 'Googleは説明していません。一部の解説記事では、Gmailの設定の「Send mail as」にプラスアドレスを追加し、差出人のアドレスとして選べるようにしています。Microsoft 365は、プラスアドレスからの送信をまったく認めていません。一方、Proton Mailは初期設定でプラスアドレスから返信します。',
    },
    {
      q: 'Webサイトでプラスアドレスが受け付けられないのはなぜですか？',
      a: 'そのサイトの登録フォームが、アドレスを厳しくチェックしすぎているためです。プラス記号はメールアドレスで有効な文字で、RFC 3696はプログラムに受け付けるよう求めています。Fastmailによると、一部のWebサイトは誤って無効な文字として扱います。そうしたサイトでは、通常のアドレスを使ってください。',
    },
    {
      q: 'プラスアドレスはメールエイリアスと同じですか？',
      a: '少し違います。プラスアドレスは本当のアドレスにタグを付けたものなので、誰でもタグを取り除いて受信トレイのアドレスを知ることができます。Appleの「メールを非公開」やDuckDuckGo Email Protectionのエイリアスは異なります。本来のアドレスに転送されるランダムなアドレスで、本当のアドレスを隠します。',
    },
    {
      q: 'Google Workspaceでもプラスアドレスは使えますか？',
      a: 'はい。Google自身の例でも、独自ドメインのcassy+news@solarmora.comが使われています。gmail.comとの違いは、Workspaceではドットがアドレスの一部である点です。タグになるのはプラスの部分だけです。',
    },
    {
      q: 'プラスアドレスはいくつ作れますか？',
      a: 'Googleは数を示していません。実際の上限は長さです。@より前の部分は、名前、プラス記号、タグを合わせて最大64文字です。',
    },
  ],
  ctaHeadline: 'リストのどのアドレスが今も使えるかを確認しましょう',
}

const ko: PlusPageStrings = {
  metaTitle: 'Gmail 플러스 주소: 무료 플러스 주소 생성기와 중복 찾기 | Giggal.ai',
  ogTitle: 'Gmail 플러스 주소: 무료 플러스 주소 생성기와 중복 찾기',
  description:
    'you+shopping@gmail.com 같은 Gmail 플러스 주소를 무료로 만들 수 있습니다. 플러스 주소를 지원하는 메일 서비스를 확인하고, 이메일 리스트에서 플러스와 점으로 생긴 중복 주소도 찾습니다.',
  ogLocale: 'ko_KR',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Gmail 플러스 주소 도구',
  crumb: 'Gmail 플러스 주소',
  appName: 'Gmail 플러스 주소 생성기',
  featureList: [
    '모든 이메일 주소로 플러스 주소 만들기',
    '사용 중인 메일 서비스가 플러스 주소를 지원하는지 표시',
    '리스트에서 같은 Gmail 주소의 플러스 표기와 점 표기 찾기',
    '각 그룹의 첫 번째 주소를 입력한 그대로 유지',
    '중복을 제거한 리스트 복사 또는 다운로드',
  ],
  h1: 'Gmail 플러스 주소',
  heroIntro:
    'jane+shopping@gmail.com 같은 플러스 주소를 만들 수 있습니다. 이런 주소로 보낸 메일은 모두 같은 받은편지함에 도착합니다. 같은 사람의 플러스 표기와 점 표기 주소를 리스트에서 정리할 수도 있습니다.',
  howTitle: '플러스 주소 생성기 사용 방법',
  howSteps: [
    '“주소 만들기” 탭에서 이메일 주소를 입력합니다. Gmail 주소뿐 아니라 대부분의 다른 주소도 사용할 수 있습니다.',
    '주소를 사용할 곳마다 newsletters나 shopping 같은 태그를 추가합니다. 태그는 쉼표로 구분합니다.',
    '플러스 주소를 복사합니다. 사용 중인 메일 서비스가 플러스 주소로 온 메일을 전달하는지도 알려 줍니다.',
    '리스트를 정리하려면 “리스트 정리” 탭으로 바꾸고 주소를 붙여 넣습니다. 같은 받은편지함에 도착하는 주소를 그룹으로 묶고, 중복을 제거한 리스트를 보여 줍니다.',
  ],
  imageAlt: '태그가 다른 여러 Gmail 플러스 주소가 하나의 받은편지함에 도착하는 모습을 나타낸 그림.',
  whatTitle: '플러스 주소란?',
  whatParas: [
    '플러스 주소는 이메일 주소의 @ 앞부분에 더하기 기호(+)와 태그를 붙인 주소입니다. `jane+travel@gmail.com`으로 보낸 메일은 `jane@gmail.com`으로 보낸 메일과 같은 받은편지함에 도착합니다. 태그가 그대로 보이므로 태그를 기준으로 메일을 정렬하거나 필터링할 수 있습니다.',
    '표준 문서에서는 이것을 하위 주소 지정(sub-addressing)이라고 부릅니다. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233)은 더하기 기호를 예로 들지만, 구분 기호는 각 메일 시스템이 정하도록 맡깁니다. 이는 [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321)의 더 넓은 규칙과 맞습니다. @ 앞부분의 의미는 수신 서버만 정합니다. 따라서 플러스 주소가 작동하는지는 전적으로 받은편지함을 제공하는 메일 서비스에 달려 있습니다.',
  ],
  gmailTitle: 'Gmail 플러스 주소의 작동 방식',
  gmailParas: [
    '[Google 도움말](https://support.google.com/mail/answer/12096)은 한 줄로 설명합니다. @ 앞에 더하기 기호와 원하는 단어를 붙이면 됩니다. 어떤 표기로 보낸 메일이든 받은편지함에 도착합니다. 따로 설정할 것은 없으며, Google은 사용할 수 있는 개수의 한도를 언급하지 않습니다.',
    'Gmail은 점(.)도 무시합니다. gmail.com 주소에서는 [점을 어디에 넣은 표기로 보낸 메일이든](https://support.google.com/mail/answer/7436150) 같은 사람에게 전달됩니다. 따라서 `j.a.n.e@gmail.com`은 `jane@gmail.com`과 같습니다. 또한 [gmail.com과 googlemail.com](https://support.google.com/mail/answer/10313)은 같은 받은편지함입니다.',
    '회사 도메인을 쓰는 Google Workspace 계정도 플러스 주소를 지원합니다. 다만 점은 다르게 처리됩니다. [Google 설명](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups)에 따르면 Workspace 사용자 이름의 마침표는 무시되지 않습니다. 따라서 `jane.doe@company.com`과 `janedoe@company.com`은 서로 다른 사람일 수 있습니다.',
  ],
  filterTitle: '플러스 주소로 온 메일 필터링하기',
  filterPara:
    'Gmail에서 필터를 만들고 “받는사람” 입력란에 플러스 주소 전체를 넣습니다. [deliveredto: 연산자](https://support.google.com/mail/answer/7190)로 검색할 수도 있습니다. 예: `deliveredto:jane+travel@gmail.com`. “보낸사람”이 아니라 “받는사람” 또는 Delivered-To를 확인하십시오. 태그는 메일을 받은 주소에 붙어 있기 때문입니다.',
  providersTitle: '플러스 주소를 지원하는 메일 서비스',
  providersIntro:
    '대형 메일 서비스는 대부분 플러스 주소로 온 메일을 전달하지만, 모두가 공식 문서로 설명하지는 않습니다. “테스트됨”으로 표시한 행은 서비스 자체 문서가 아니라 독립적인 테스트를 근거로 합니다.',
  thProvider: '메일 서비스',
  thSupport: '플러스 주소',
  thNotes: '참고',
  testedBadge: '테스트됨',
  providerRows: {
    Gmail: { supports: '지원', notes: '사용자 이름의 점은 무시됩니다. gmail.com과 googlemail.com은 같은 받은편지함입니다.' },
    'Google Workspace': { supports: '지원', notes: '회사 도메인에서 작동합니다. 점은 주소의 일부입니다.' },
    'Microsoft 365': { supports: '지원(기본으로 켜짐)', notes: '수신만 가능합니다. 관리자가 조직 전체에서 끌 수 있습니다.' },
    'Outlook.com': { supports: '지원', notes: 'hotmail.com과 live.com 주소도 해당됩니다. 점은 주소의 일부입니다.' },
    'Proton Mail': { supports: '지원', notes: '무료 요금제도 포함됩니다. 답장은 플러스 주소에서 발송됩니다.' },
    Fastmail: { supports: '지원', notes: '폴더 이름과 같은 태그가 붙은 메일은 그 폴더로 들어갑니다. 하위 도메인 주소도 작동합니다.' },
    'iCloud Mail': { supports: '지원(테스트 결과)', notes: '독립적인 테스트에서 icloud.com과 me.com 주소로 작동했습니다. Apple은 공식 문서로 설명하지 않습니다.' },
    'Yandex Mail': { supports: '지원', notes: 'login+word@yandex.ru 같은 주소입니다.' },
    'Yahoo Mail': { supports: '확인되지 않음', notes: 'Yahoo가 설명하는 것은 대신 하이픈을 쓰는 일회용 주소입니다(nickname-keyword@yahoo.com).' },
  },
  providersAfter:
    'AOL, Zoho Mail, GMX, mail.com은 지원 여부를 알려 주는 문서를 찾지 못했습니다. 이런 서비스에서 플러스 주소를 쓰기 전에 자신에게 테스트 메일을 보내 보십시오.',
  sendTitle: '플러스 주소에서 메일을 보낼 수 있습니까?',
  sendIntro: '메일 서비스마다 다릅니다. 많은 가이드가 이 부분을 잘못 설명합니다.',
  sendItems: [
    '**Microsoft 365:** 보낼 수 없습니다. [Microsoft 문서](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online)에 따르면 사용자는 플러스 주소에서 이메일을 보낼 수 없습니다.',
    '**Proton Mail:** 보낼 수 있습니다. 플러스 주소로 받은 메일에 답장하면 기본적으로 그 주소에서 발송됩니다.',
    '**Fastmail:** 설정에서 그 주소를 추가하면 보낼 수 있습니다.',
    '**Gmail:** Google은 이에 대해 설명하지 않습니다. 일부 가이드는 [“Send mail as”](https://support.google.com/mail/answer/22370) 설정에 플러스 주소를 추가하며, 이 설정에는 주소를 최대 99개까지 추가할 수 있습니다. Google은 2027년 1월부터 “Send mail as”를 다른 서비스의 주소에 쓸 수 없게 된다고 발표했습니다. Gmail에서 소유한 주소는 영향을 받지 않습니다.',
  ],
  usesTitle: '플러스 주소의 용도와 한계',
  usesParas: [
    '플러스 주소는 메일을 폴더로 분류하거나 누가 주소를 공유했는지 알아내는 데 쓰입니다. 개발자는 하나의 받은편지함으로 모이는 여러 계정으로 가입 양식을 테스트할 때도 씁니다. `jane+shoestore@gmail.com`으로 스팸이 오면 어디서 왔는지 알 수 있습니다.',
    '사용하기 전에 알아 두어야 할 한계도 있습니다.',
  ],
  usesLimits: [
    '일부 웹사이트는 더하기 기호를 거부합니다. 더하기 기호는 유효한 문자이고 [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696)도 프로그램이 이를 허용해야 한다고 말합니다. 하지만 Fastmail에 따르면 일부 사이트는 이를 유효하지 않은 문자로 잘못 처리합니다.',
    '플러스 주소는 실제 주소를 숨기지 않습니다. 누구나 태그를 지울 수 있으며, Google도 이런 주소가 비공개가 아니라고 설명합니다.',
    '개인정보를 보호하려면 대신 전달용 별칭을 사용하십시오. [Apple의 나의 이메일 가리기](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud)(iCloud+ 필요)와 [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection)은 실제 주소로 전달되는 무작위 주소를 만듭니다.',
  ],
  listTitle: '이메일 리스트 속 플러스 주소와 점',
  listParas: [
    '가입 양식을 운영하는 쪽에서 보면 플러스 주소에는 다른 문제도 있습니다. 한 사람이 `jane@gmail.com`, `j.ane@gmail.com`, `jane+2@gmail.com`으로 가입하면 리스트에서는 세 명으로 집계됩니다. 악용될 수도 있습니다. [보안 연구자들이 보고한 사례](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html)에서는 한 그룹이 Gmail 주소의 점 표기를 바꿔 신용카드 48건을 신청했고, 최소 US$65,000 규모의 신용을 부정하게 얻었습니다.',
    '“리스트 정리” 탭은 이런 그룹을 찾습니다. 메일 서비스별로 안전한 규칙을 따릅니다.',
  ],
  listRules: [
    'gmail.com과 googlemail.com에서는 점과 플러스 태그를 제거합니다.',
    'Outlook.com, iCloud, Proton, Fastmail, Yandex에서는 플러스 태그만 제거합니다. 이 서비스들에서는 점이 주소를 바꾸므로 점은 그대로 둡니다.',
    'Yahoo 주소는 건드리지 않습니다. Yahoo 일회용 주소는 계정 이름이 아닌 닉네임을 쓰므로 원래 계정을 추적할 수 없습니다.',
    '회사 도메인은 옵션을 선택하지 않으면 건드리지 않습니다. 더하기 기호의 의미는 각 메일 서버가 정하며, 일부 서버에서는 실제 메일함 이름의 일부입니다.',
  ],
  listAfter: [
    '결과는 중복을 찾는 데 쓰고, 주소를 고쳐 쓰는 데는 쓰지 마십시오. 상대의 필터가 계속 작동하도록 본인이 입력한 주소 그대로 계속 보내십시오. 도구가 각 그룹의 첫 번째 주소를 바꾸지 않고 남기는 이유입니다.',
    '중복을 합쳐도 주소가 아직 작동하는지는 알 수 없습니다. 보내기 전에 정리한 리스트를 [대량 이메일 검증](/bulk-email-verifier)으로 확인하거나, [이메일 유효성 검사 도구](/email-checker)로 주소 하나를 확인하십시오. 무료 메일 서비스의 주소를 표시하려면 [무료 이메일 도메인 목록](/free-email-providers)을, 일회용 메일함은 [일회용 이메일 판별](/disposable-email-checker)을 참고하십시오.',
  ],
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      q: 'Gmail 플러스 주소란 무엇입니까?',
      a: 'Gmail 주소의 다른 표기를 추가로 만드는 방법입니다. jane+shopping@gmail.com처럼 @ 앞에 더하기 기호와 단어를 붙입니다. 이런 주소로 보낸 메일은 모두 평소 받은편지함에 도착하고, 그 단어로 필터를 만들 수 있습니다.',
    },
    {
      q: 'Outlook에서도 플러스 주소를 쓸 수 있습니까?',
      a: '예. Outlook.com 주소는 플러스 주소를 받습니다. Microsoft는 Microsoft 365 비즈니스 계정에서 플러스 주소를 기본으로 켜 둡니다. Microsoft 365에서는 플러스 주소로 메일을 받을 수 있지만, 플러스 주소에서 보낼 수는 없습니다.',
    },
    {
      q: 'Gmail 주소의 점은 의미가 있습니까?',
      a: 'gmail.com 주소에서는 의미가 없습니다. Google에 따르면 주소에 점을 어디에 넣어 보내든 본인에게 전달됩니다. 따라서 jane.doe@gmail.com과 janedoe@gmail.com은 같은 받은편지함입니다. 회사 도메인을 쓰는 Google Workspace 계정에서는 점이 주소를 바꿉니다.',
    },
    {
      q: 'Gmail에서 플러스 주소를 발신 주소로 쓸 수 있습니까?',
      a: 'Google은 이에 대해 설명하지 않습니다. 일부 가이드는 Gmail 설정의 “Send mail as”에 플러스 주소를 추가해 보낸사람 주소로 선택할 수 있게 합니다. Microsoft 365는 플러스 주소에서 보내는 것을 아예 허용하지 않고, Proton Mail은 기본적으로 플러스 주소에서 답장합니다.',
    },
    {
      q: '웹사이트가 플러스 주소를 거부하는 이유는 무엇입니까?',
      a: '가입 양식이 주소를 너무 엄격하게 검사하기 때문입니다. 더하기 기호는 이메일 주소에서 유효한 문자이며, RFC 3696은 프로그램이 이를 허용해야 한다고 말합니다. Fastmail에 따르면 일부 웹사이트는 이를 유효하지 않은 문자로 잘못 처리합니다. 그런 사이트에서는 평소 주소를 사용하십시오.',
    },
    {
      q: '플러스 주소는 이메일 별칭과 같습니까?',
      a: '조금 다릅니다. 플러스 주소는 실제 주소에 태그를 붙인 것이므로 누구나 태그를 지우고 받은편지함 주소를 알 수 있습니다. Apple의 나의 이메일 가리기나 DuckDuckGo Email Protection의 별칭은 다릅니다. 실제 주소로 전달되는 무작위 주소이며, 실제 주소를 숨깁니다.',
    },
    {
      q: 'Google Workspace에서도 플러스 주소가 작동합니까?',
      a: '예. Google의 예시도 회사 도메인을 사용합니다: cassy+news@solarmora.com. gmail.com과 다른 점은 Workspace에서는 점이 주소의 일부라는 것입니다. 따라서 플러스 부분만 태그입니다.',
    },
    {
      q: '플러스 주소는 몇 개까지 만들 수 있습니까?',
      a: 'Google은 개수를 밝히지 않습니다. 실제 한도는 길이입니다. @ 앞부분은 이름, 더하기 기호, 태그를 합쳐 최대 64자입니다.',
    },
  ],
  ctaHeadline: '리스트에서 아직 작동하는 주소를 확인하십시오',
}

const tr: PlusPageStrings = {
  metaTitle: 'Gmail artı adresleme: ücretsiz artı adres oluşturucu | Giggal.ai',
  ogTitle: 'Gmail artı adresleme: ücretsiz artı adres oluşturucu',
  description:
    'you+shopping@gmail.com gibi Gmail artı adresleri oluşturun, destekleyen mail sağlayıcılarını görün ve mail listenizdeki artılı ve noktalı kopyaları bulun.',
  ogLocale: 'tr_TR',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Gmail artı adresleme aracı',
  crumb: 'Gmail artı adresleme',
  appName: 'Gmail artı adresleme aracı',
  featureList: [
    'Her e-posta adresi için artı adres oluşturur',
    'E-posta sağlayıcınızın artı adreslemeyi destekleyip desteklemediğini gösterir',
    'Bir listede aynı Gmail adresinin artılı ve noktalı sürümlerini bulur',
    'Her grubun ilk adresini yazıldığı gibi korur',
    'Yinelenen adresleri çıkarılmış listeyi kopyalamanızı veya indirmenizi sağlar',
  ],
  h1: 'Gmail artı adresleme',
  heroIntro:
    'jane+shopping@gmail.com gibi, hepsi aynı gelen kutusuna ulaşan artı adresler oluşturun. Ya da aynı kişiye ait artılı ve noktalı sürümleri listenizden temizleyin.',
  howTitle: 'Artı adres oluşturucu nasıl kullanılır?',
  howSteps: [
    'Adres oluşturma sekmesinde e-posta adresinizi yazın. Gmail adresleri çalışır, diğer adreslerin çoğu da çalışır.',
    'Adresi kullanacağınız her yer için haberler veya kampanya gibi bir etiket ekleyin. Etiketleri virgülle ayırın.',
    "Artı adresleri kopyalayın. Araç, sağlayıcınızın bu adreslere gelen e-postaları teslim edip etmediğini de gösterir.",
    'Bir listeyi temizlemek için Liste temizleme sekmesine geçin ve adresleri yapıştırın. Araç, aynı gelen kutusuna ulaşan adresleri gruplar ve yinelenenleri çıkarılmış listeyi verir.',
  ],
  imageAlt: 'Farklı etiketli birkaç Gmail artı adresinin tek bir gelen kutusuna ulaştığını gösteren çizim.',
  whatTitle: 'Artı adresleme nedir?',
  whatParas: [
    'Artı adresleme, bir e-posta adresinin @ işaretinden önceki kısmına bir artı işareti ve bir etiket eklemektir. `jane+travel@gmail.com` adresine gönderilen e-posta, `jane@gmail.com` adresine gönderilenlerle aynı gelen kutusuna gelir. Etiket görünür kalır, bu yüzden e-postaları etikete göre sıralayabilir veya filtreleyebilirsiniz.',
    "Standartlar buna alt adresleme (sub-addressing) der. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) örnek olarak artı işaretini kullanır, ancak ayırıcıyı her e-posta sistemine bırakır. Bu, [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321)'deki daha genel bir kurala uyar: @ işaretinden önceki kısmın ne anlama geldiğine yalnızca alıcı sunucu karar verir. Bu yüzden bir artı adresin çalışıp çalışmadığı tamamen gelen kutusunu barındıran sağlayıcıya bağlıdır.",
  ],
  gmailTitle: 'Gmail artı adresleme nasıl çalışır?',
  gmailParas: [
    "[Google'ın yardım sayfası](https://support.google.com/mail/answer/12096) bunu tek satırda anlatır: @ işaretinden önce bir artı işareti ve herhangi bir kelime ekleyin. Her sürüm gelen kutunuza gelir. Hiçbir ayar yapmanız gerekmez ve Google kaç tane kullanabileceğinize dair bir sınırdan söz etmez.",
    'Gmail noktaları da yok sayar. Bir gmail.com adresinde [noktalı sürümlerden herhangi birine gönderilen e-posta](https://support.google.com/mail/answer/7436150) aynı kişiye gider, yani `j.a.n.e@gmail.com` ile `jane@gmail.com` aynı adrestir. Ayrıca [gmail.com ve googlemail.com](https://support.google.com/mail/answer/10313) aynı gelen kutusudur.',
    "Şirket alan adındaki Google Workspace hesapları da artı adresleri destekler. Noktalar orada farklı çalışır: [Google'a göre](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) Workspace kullanıcı adlarındaki noktalar yok sayılmaz. Bu yüzden `jane.doe@company.com` ile `janedoe@company.com` iki farklı kişi olabilir.",
  ],
  filterTitle: 'Artı adrese gelen e-postaları filtreleme',
  filterPara:
    'Bir Gmail filtresi oluşturun ve tam artı adresi “Kime” alanına yazın. [deliveredto: operatörüyle](https://support.google.com/mail/answer/7190) de arama yapabilirsiniz, örneğin `deliveredto:jane+travel@gmail.com`. “Kimden” alanına değil, “Kime” veya Delivered-To alanına bakın. Etiket, e-postanın gönderildiği adrestedir.',
  providersTitle: 'Hangi mail sağlayıcıları artı adreslemeyi destekler?',
  providersIntro:
    'Büyük sağlayıcıların çoğu artı adreslere gelen e-postaları teslim eder, ancak hepsi bunu belgelemez. “Test edildi” olarak işaretlenen satırlar, sağlayıcının kendi sayfalarına değil bağımsız testlere dayanır.',
  thProvider: 'Sağlayıcı',
  thSupport: 'Artı adresler',
  thNotes: 'Notlar',
  testedBadge: 'test edildi',
  providerRows: {
    Gmail: { supports: 'Evet', notes: 'Kullanıcı adındaki noktalar yok sayılır. gmail.com ve googlemail.com aynı gelen kutusudur.' },
    'Google Workspace': { supports: 'Evet', notes: 'Şirket alan adlarında çalışır. Noktalar adresin parçasıdır.' },
    'Microsoft 365': { supports: 'Evet, varsayılan olarak açık', notes: 'Yalnızca e-posta almak için. Yönetici bunu kuruluş için kapatabilir.' },
    'Outlook.com': { supports: 'Evet', notes: 'hotmail.com ve live.com adresleri için de geçerlidir. Noktalar adresin parçasıdır.' },
    'Proton Mail': { supports: 'Evet', notes: 'Ücretsiz plan dahil. Yanıtlar artı adresten gönderilir.' },
    Fastmail: { supports: 'Evet', notes: 'Bir klasör adıyla eşleşen etiket, e-postayı o klasöre koyar. Alt alan adı adresleri de çalışır.' },
    'iCloud Mail': { supports: 'Evet, testlerde', notes: 'Bağımsız testlerde icloud.com ve me.com için çalışır. Apple bunu belgelemez.' },
    'Yandex Mail': { supports: 'Evet', notes: 'login+word@yandex.ru gibi adresler.' },
    'Yahoo Mail': { supports: 'Doğrulanmadı', notes: 'Yahoo bunun yerine tire kullanan tek kullanımlık adresleri belgeler: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'AOL, Zoho Mail, GMX ve mail.com için artı adresleri destekleyip desteklemediklerini gösteren bir belge bulamadık. Bu sağlayıcılarda bir artı adrese güvenmeden önce kendinize bir test e-postası gönderin.',
  sendTitle: 'Artı adresten e-posta gönderebilir misiniz?',
  sendIntro: 'Bu, sağlayıcıya bağlıdır ve birçok rehber tam da bu noktada yanılır:',
  sendItems: [
    "**Microsoft 365:** hayır. [Microsoft'un belgeleri](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online), kullanıcıların artı adreslerden e-posta gönderemeyeceğini belirtir.",
    '**Proton Mail:** evet. Bir artı adrese gelen e-postalara verilen yanıtlar varsayılan olarak o adresten gönderilir.',
    '**Fastmail:** evet, adresi ayarlarınıza ekledikten sonra.',
    "**Gmail:** Google bunu belgelemez. Bazı rehberler artı adresi [“Send mail as”](https://support.google.com/mail/answer/22370) ayarına ekler. Bu ayar en fazla 99 adrese izin verir. Google, “Send mail as” özelliğinin Ocak 2027'den itibaren üçüncü taraf adresler için çalışmayacağını duyurdu. Gmail'de sahip olduğunuz adresler bundan etkilenmez.",
  ],
  usesTitle: 'Artı adresler ne işe yarar, sınırları nelerdir?',
  usesParas: [
    'İnsanlar artı adresleri e-postaları klasörlere ayırmak ve adreslerini kimin paylaştığını fark etmek için kullanır. Geliştiriciler de kayıt formlarını tek bir gelen kutusuna ulaşan birkaç hesapla test etmek için kullanır. `jane+shoestore@gmail.com` adresine spam gelirse, nereden geldiğini bilirsiniz.',
    'Artı adreslere güvenmeden önce bilmeniz gereken sınırlar var:',
  ],
  usesLimits: [
    'Bazı web siteleri artı işaretini reddeder. Bu geçerli bir karakterdir ve [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) programların onu kabul etmesini söyler, ancak Fastmail bazı sitelerin onu yanlışlıkla geçersiz saydığını belirtir.',
    "Artı adres gerçek adresinizi gizlemez. Herkes etiketi silebilir ve Google'ın kendisi de bu adreslerin gizli olmadığını söyler.",
    "Gizlilik istiyorsanız bunun yerine bir yönlendirme takma adı kullanın. [Apple'ın E-postamı Gizle özelliği](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (iCloud+ ile) ve [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection), size yönlendirilen rastgele adresler oluşturur.",
  ],
  listTitle: 'Mail listesinde artı adresler ve noktalar',
  listParas: [
    'Kayıt formu işleten herkes için artı adreslemenin bir sakıncası da vardır. Bir kişi `jane@gmail.com`, `j.ane@gmail.com` ve `jane+2@gmail.com` olarak kaydolabilir ve listeniz bunu üç kişi olarak sayar. Bu durum kötüye kullanıma da imkân verir. [Güvenlik araştırmacılarının bildirdiği](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html) bir vakada bir grup, Gmail adreslerinin noktalı sürümlerini 48 kredi kartı başvurusu için kullandı ve dolandırıcılık yoluyla en az $65.000 tutarında kredi aldı.',
    'Liste temizleme sekmesi bu grupları bulur. Her sağlayıcı için güvenli olan kuralları izler:',
  ],
  listRules: [
    'gmail.com ve googlemail.com için noktaları ve artı etiketini kaldırır.',
    'Outlook.com, iCloud, Proton, Fastmail ve Yandex için yalnızca artı etiketini kaldırır. Noktalar kalır, çünkü bu sağlayıcılarda noktalar adresi değiştirir.',
    "Yahoo adreslerine dokunmaz. Yahoo'nun tek kullanımlık adresi hesap adı olmayan bir takma ad kullanır, bu yüzden asıl hesaba kadar izlenemez.",
    'Seçeneği işaretlemediğiniz sürece şirket alan adlarına dokunmaz. Artı işaretinin ne anlama geldiğine her e-posta sunucusu kendisi karar verir ve bazı sunucularda bu işaret gerçek bir posta kutusu adının parçasıdır.',
  ],
  listAfter: [
    'Sonucu adresleri yeniden yazmak için değil, yinelenen adresleri fark etmek için kullanın. Kişinin filtreleri çalışmaya devam etsin diye e-postaları kişinin girdiği adrese aynen göndermeye devam edin. Araç bu nedenle her grubun ilk adresini değiştirmeden bırakır.',
    'Yinelenen adresleri birleştirmek, bir adresin hâlâ çalışıp çalışmadığını söylemez. Göndermeden önce temizlenmiş listeyi [toplu mail doğrulama](/bulk-email-verifier) aracından geçirin veya tek bir adresi [mail adresi doğrulama](/email-checker) aracıyla kontrol edin. Ücretsiz sağlayıcıların adreslerini işaretlemek için [ücretsiz mail sağlayıcıları](/free-email-providers) listesine, tek kullanımlık gelen kutuları için [geçici mail kontrolü](/disposable-email-checker) aracına bakın.',
  ],
  faqTitle: 'Sıkça sorulan sorular',
  faqs: [
    {
      q: 'Gmail artı adresleme nedir?',
      a: 'Gmail adresinizin ek sürümlerini oluşturmanın bir yoludur. @ işaretinden önce bir artı işareti ve bir kelime eklersiniz, örneğin jane+shopping@gmail.com. Bu adreslerin herhangi birine gönderilen e-posta normal gelen kutunuza gelir ve o kelimeye göre filtre oluşturabilirsiniz.',
    },
    {
      q: "Artı adresleme Outlook'ta çalışır mı?",
      a: "Evet. Outlook.com adresleri artı adresleri kabul eder ve Microsoft, Microsoft 365 iş hesaplarında artı adreslemeyi varsayılan olarak açar. Microsoft 365'te bir artı adrese e-posta alabilirsiniz, ancak artı adresten e-posta gönderemezsiniz.",
    },
    {
      q: 'Gmail adresinde noktalar önemli mi?',
      a: "gmail.com adresleri için önemli değildir. Google'a göre adresinizin noktalı herhangi bir sürümüne gönderilen e-posta size gelir, yani jane.doe@gmail.com ve janedoe@gmail.com aynı gelen kutusudur. Şirket alan adındaki Google Workspace hesaplarında ise noktalar adresi değiştirir.",
    },
    {
      q: "Gmail'de artı adresten mail gönderebilir miyim?",
      a: 'Google bunu belgelemez. Bazı rehberler artı adresi Gmail ayarlarındaki “Send mail as” bölümüne ekler, böylece adres “Kimden” adresi olarak seçilebilir. Microsoft 365 artı adreslerden göndermeye hiç izin vermez, Proton Mail ise varsayılan olarak artı adresten yanıt verir.',
    },
    {
      q: 'Bir web sitesi artı adresimi neden reddediyor?',
      a: 'Çünkü kayıt formu adresleri fazla katı kontrol ediyor. Artı işareti bir e-posta adresinde geçerli bir karakterdir ve RFC 3696 programların onu kabul etmesi gerektiğini söyler. Fastmail, bazı web sitelerinin onu yanlışlıkla geçersiz saydığını belirtir. Bu sitelerde normal adresinizi kullanın.',
    },
    {
      q: 'Artı adres ile mail takma adı aynı şey mi?',
      a: "Tam olarak değil. Artı adres, etiket eklenmiş gerçek adresinizdir, bu yüzden herkes etiketi kaldırıp gelen kutunuzun adresini görebilir. Apple'ın E-postamı Gizle özelliğinden veya DuckDuckGo Email Protection'dan alınan bir takma ad farklıdır. Size yönlendirilen ve gerçek adresinizi gizleyen rastgele bir adrestir.",
    },
    {
      q: 'Artı adresleme Google Workspace ile çalışır mı?',
      a: "Evet. Google'ın kendi örneği bir şirket alan adı kullanır: cassy+news@solarmora.com. gmail.com'dan farkı, Workspace'te noktaların adresin parçası olmasıdır. Bu yüzden yalnızca artı kısmı bir etikettir.",
    },
    {
      q: 'Kaç tane artı adres oluşturabilirim?',
      a: 'Google bir sayı belirtmez. Pratikteki sınır uzunluktur. @ işaretinden önceki kısım, adınız, artı işareti ve etiket dahil en fazla 64 karakter olabilir.',
    },
  ],
  ctaHeadline: 'Listenizdeki hangi adreslerin hâlâ çalıştığını öğrenin',
}

// Italian: register "tu", as the Italian tool pages. "plus addressing" names the
// feature, "indirizzo con +" the address, as the footer ("Indirizzi Gmail con +").
const it: PlusPageStrings = {
  metaTitle: 'Indirizzi Gmail con +: generatore gratuito | Giggal.ai',
  ogTitle: 'Indirizzi Gmail con +: generatore gratuito',
  description:
    'Crea indirizzi Gmail con il + come tu+shopping@gmail.com, scopri quali provider li supportano e trova i duplicati con + e con punti in una lista email.',
  ogLocale: 'it_IT',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Strumento per indirizzi Gmail con +',
  crumb: 'Indirizzi Gmail con +',
  appName: 'Strumento per indirizzi Gmail con +',
  featureList: [
    'Crea indirizzi con il + per qualsiasi indirizzo email',
    'Mostra se il tuo provider email supporta gli indirizzi con il +',
    'Trova in una lista le varianti con + e con punti dello stesso indirizzo Gmail',
    'Mantiene il primo indirizzo di ogni gruppo esattamente come è scritto',
    'Copia o scarica la lista senza duplicati',
  ],
  h1: 'Indirizzi Gmail con +',
  heroIntro:
    'Crea indirizzi come jane+shopping@gmail.com che arrivano tutti nella tua casella. Oppure pulisci una lista dalle varianti con + e con punti che appartengono alla stessa persona.',
  howTitle: 'Come usare il generatore di indirizzi con +',
  howSteps: [
    'Nella scheda Crea, scrivi il tuo indirizzo email. Funziona un indirizzo Gmail, e funziona anche la maggior parte degli altri.',
    'Aggiungi un tag per ogni posto in cui userai l’indirizzo, per esempio newsletter o shopping. Separa i tag con virgole.',
    'Copia gli indirizzi con il +. Lo strumento ti dice anche se il tuo provider li consegna.',
    'Per pulire una lista, passa alla scheda Pulisci e incolla gli indirizzi. Lo strumento raggruppa quelli che arrivano nella stessa casella e ti dà la lista senza duplicati.',
  ],
  imageAlt: 'Illustrazione di diversi indirizzi Gmail con + e tag diversi che arrivano in una sola casella.',
  whatTitle: 'Cos’è il plus addressing?',
  whatParas: [
    'Plus addressing significa aggiungere un segno + e un tag alla parte dell’indirizzo email prima della @. La posta inviata a `jane+travel@gmail.com` arriva nella stessa casella della posta inviata a `jane@gmail.com`. Il tag resta visibile, quindi puoi usarlo per ordinare o filtrare la posta.',
    'Gli standard lo chiamano sub-addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) usa il segno + come esempio, ma lascia la scelta del separatore a ogni sistema di posta. Questo segue una regola più generale di [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): solo il server che riceve decide cosa significa la parte prima della @. Quindi il funzionamento di un indirizzo con + dipende interamente dal provider che ospita la casella.',
  ],
  gmailTitle: 'Come funziona il plus addressing in Gmail',
  gmailParas: [
    '[La pagina di assistenza di Google](https://support.google.com/mail/answer/12096) lo descrive in una riga: aggiungi un segno + e una parola qualsiasi prima della @. Ogni variante arriva nella tua casella. Non devi configurare nulla, e Google non indica un limite al numero di varianti che puoi usare.',
    'Gmail ignora anche i punti. Per un indirizzo gmail.com, [la posta inviata a qualsiasi variante con punti](https://support.google.com/mail/answer/7436150) arriva alla stessa persona, quindi `j.a.n.e@gmail.com` è `jane@gmail.com`. E [gmail.com e googlemail.com](https://support.google.com/mail/answer/10313) sono la stessa casella.',
    'Anche gli account Google Workspace su un dominio aziendale supportano gli indirizzi con +. Lì però i punti funzionano in modo diverso: [secondo Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) i punti non vengono ignorati nei nomi utente di Workspace, quindi `jane.doe@company.com` e `janedoe@company.com` possono essere due persone diverse.',
  ],
  filterTitle: 'Filtrare la posta inviata a un indirizzo con +',
  filterPara:
    'Crea un filtro in Gmail e inserisci l’indirizzo con + completo nel campo A. Puoi anche cercarlo con l’[operatore deliveredto:](https://support.google.com/mail/answer/7190), per esempio `deliveredto:jane+travel@gmail.com`. Cerca nel campo A o in Delivered-To, non in Da. Il tag si trova nell’indirizzo a cui è stata inviata la posta.',
  providersTitle: 'Quali provider email supportano il plus addressing',
  providersIntro:
    'La maggior parte dei grandi provider consegna gli indirizzi con +, ma non tutti lo documentano. Le righe con l’etichetta “testato” si basano su test indipendenti e non sulle pagine del provider.',
  thProvider: 'Provider',
  thSupport: 'Indirizzi con +',
  thNotes: 'Note',
  testedBadge: 'testato',
  providerRows: {
    Gmail: { supports: 'Sì', notes: 'I punti nel nome utente vengono ignorati. gmail.com e googlemail.com sono la stessa casella.' },
    'Google Workspace': { supports: 'Sì', notes: 'Funziona sui domini aziendali. I punti fanno parte dell’indirizzo.' },
    'Microsoft 365': { supports: 'Sì, attivo di default', notes: 'Solo in ricezione. Un amministratore può disattivarlo per l’organizzazione.' },
    'Outlook.com': { supports: 'Sì', notes: 'Vale anche per gli indirizzi hotmail.com e live.com. I punti fanno parte dell’indirizzo.' },
    'Proton Mail': { supports: 'Sì', notes: 'Incluso nel piano gratuito. Le risposte partono dall’indirizzo con +.' },
    Fastmail: { supports: 'Sì', notes: 'Un tag uguale al nome di una cartella sposta la posta in quella cartella. Funzionano anche gli indirizzi con sottodominio.' },
    'iCloud Mail': { supports: 'Sì, nei test', notes: 'Funziona per icloud.com e me.com in test indipendenti. Apple non lo documenta.' },
    'Yandex Mail': { supports: 'Sì', notes: 'Indirizzi come login+word@yandex.ru.' },
    'Yahoo Mail': { supports: 'Non confermato', notes: 'Yahoo documenta invece indirizzi usa e getta con il trattino: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'Per AOL, Zoho Mail, GMX e mail.com non abbiamo trovato documentazione né a favore né contro. Prima di contare su un indirizzo con + su questi servizi, invia un’email di prova a te stesso.',
  sendTitle: 'Puoi inviare email da un indirizzo con +?',
  sendIntro: 'Dipende dal provider, ed è qui che molte guide sbagliano:',
  sendItems: [
    '**Microsoft 365:** no. [La documentazione di Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) dice che gli utenti non possono inviare email da indirizzi con +.',
    '**Proton Mail:** sì. Le risposte a un indirizzo con + partono da quell’indirizzo per impostazione predefinita.',
    '**Fastmail:** sì, dopo che hai aggiunto l’indirizzo nelle impostazioni.',
    '**Gmail:** Google non lo documenta. Alcune guide aggiungono l’indirizzo con + in [Invia messaggio come](https://support.google.com/mail/answer/22370), che permette fino a 99 indirizzi. Google ha annunciato che da gennaio 2027 Invia messaggio come smetterà di funzionare per gli indirizzi di terze parti. Gli indirizzi di tua proprietà in Gmail non sono interessati.',
  ],
  usesTitle: 'A cosa servono gli indirizzi con + e quali limiti hanno',
  usesParas: [
    'Le persone li usano per smistare la posta in cartelle e per capire chi ha condiviso il loro indirizzo. Gli sviluppatori li usano anche per testare i moduli di iscrizione con più account che arrivano in una sola casella. Se arriva spam a `jane+shoestore@gmail.com`, sai da dove viene.',
    'Prima di contarci, è utile conoscere alcuni limiti:',
  ],
  usesLimits: [
    'Alcuni siti rifiutano il segno +. È un carattere valido, e [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) chiede ai programmi di accettarlo, ma Fastmail segnala che alcuni siti lo considerano per errore non valido.',
    'Un indirizzo con + non nasconde il tuo indirizzo reale. Chiunque può cancellare il tag, e Google stessa dice che questi indirizzi non sono privati.',
    'Se vuoi privacy, usa invece un alias di inoltro. [Nascondi la mia email di Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (con iCloud+) e [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) creano indirizzi casuali che inoltrano la posta a te.',
  ],
  listTitle: 'Indirizzi con + e punti in una lista email',
  listParas: [
    'Per chi gestisce un modulo di iscrizione, il plus addressing ha anche un lato negativo. Una persona può iscriversi come `jane@gmail.com`, `j.ane@gmail.com` e `jane+2@gmail.com`, e la tua lista conta tre persone. Questo rende possibili anche gli abusi. In un caso [segnalato da ricercatori di sicurezza](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), un gruppo ha usato varianti con punti di indirizzi Gmail per 48 richieste di carte di credito e ha ottenuto con la frode almeno 65.000 dollari di credito.',
    'La scheda Pulisci trova questi gruppi. Segue regole sicure per ogni provider:',
  ],
  listRules: [
    'Per gmail.com e googlemail.com rimuove i punti e il tag dopo il +.',
    'Per Outlook.com, iCloud, Proton, Fastmail e Yandex rimuove solo il tag dopo il +. I punti restano, perché su questi servizi cambiano l’indirizzo.',
    'Non modifica gli indirizzi Yahoo. Un indirizzo usa e getta di Yahoo si basa su un nickname diverso dal nome dell’account, quindi non si può risalire all’account.',
    'Non modifica i domini aziendali, a meno che tu non selezioni l’opzione. Ogni server di posta decide cosa significa il segno +, e su alcuni server fa parte del nome di una casella reale.',
  ],
  listAfter: [
    'Usa il risultato per individuare i duplicati, non per riscrivere gli indirizzi. Continua a inviare all’indirizzo esattamente come la persona l’ha inserito, così i suoi filtri continuano a funzionare. Per questo lo strumento mantiene invariato il primo indirizzo di ogni gruppo.',
    'Unire i duplicati non ti dice se un indirizzo funziona ancora. Prima di inviare, passa la lista pulita nella [verifica email in blocco](/bulk-email-verifier), oppure controlla un singolo indirizzo con la [verifica email](/email-checker). Per segnalare gli indirizzi dei provider gratuiti, consulta la [lista dei provider email gratuiti](/free-email-providers). Per le caselle usa e getta, usa la [verifica email temporanea](/disposable-email-checker).',
  ],
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Cos’è il plus addressing di Gmail?',
      a: 'È un modo per creare versioni aggiuntive del tuo indirizzo Gmail. Aggiungi un segno + e una parola prima della @, per esempio jane+shopping@gmail.com. La posta inviata a ognuna di queste versioni arriva nella tua casella normale, e puoi filtrare la posta in base alla parola.',
    },
    {
      q: 'Il plus addressing funziona in Outlook?',
      a: 'Sì. Gli indirizzi Outlook.com accettano gli indirizzi con +, e Microsoft attiva il plus addressing di default per gli account aziendali Microsoft 365. In Microsoft 365 puoi ricevere posta su un indirizzo con +, ma non puoi inviarla da questo indirizzo.',
    },
    {
      q: 'I punti contano in un indirizzo Gmail?',
      a: 'Non per gli indirizzi gmail.com. Google dice che la posta inviata a qualsiasi variante con punti del tuo indirizzo arriva a te, quindi jane.doe@gmail.com e janedoe@gmail.com sono una sola casella. Negli account Google Workspace su un dominio aziendale, invece, i punti cambiano l’indirizzo.',
    },
    {
      q: 'Posso inviare email da un indirizzo con + in Gmail?',
      a: 'Google non lo documenta. Alcune guide aggiungono l’indirizzo con + nelle impostazioni di Gmail, in Invia messaggio come, che ti permette di sceglierlo come indirizzo del mittente. Microsoft 365 non permette affatto di inviare da indirizzi con +, mentre Proton Mail risponde dall’indirizzo con + per impostazione predefinita.',
    },
    {
      q: 'Perché un sito rifiuta il mio indirizzo con +?',
      a: 'Perché il suo modulo di iscrizione controlla gli indirizzi in modo troppo rigido. Il segno + è un carattere valido in un indirizzo email, e RFC 3696 dice che i programmi dovrebbero accettarlo. Fastmail segnala che alcuni siti lo considerano per errore non valido. Su quei siti usa il tuo indirizzo normale.',
    },
    {
      q: 'Un indirizzo con + è la stessa cosa di un alias email?',
      a: 'Non proprio. Un indirizzo con + è il tuo indirizzo reale con un tag, quindi chiunque può togliere il tag e vedere l’indirizzo della tua casella. Un alias creato con Nascondi la mia email di Apple o con DuckDuckGo Email Protection è diverso. È un indirizzo casuale che inoltra la posta a te e nasconde quello reale.',
    },
    {
      q: 'Il plus addressing funziona con Google Workspace?',
      a: 'Sì. L’esempio di Google stessa usa un dominio aziendale: cassy+news@solarmora.com. La differenza rispetto a gmail.com è che in Workspace i punti fanno parte dell’indirizzo, quindi solo la parte con il + è un tag.',
    },
    {
      q: 'Quanti indirizzi con + posso creare?',
      a: 'Google non indica un numero. Il limite pratico è la lunghezza. La parte prima della @ può avere al massimo 64 caratteri, contando il tuo nome, il segno + e il tag.',
    },
  ],
  ctaHeadline: 'Scopri quali indirizzi della tua lista funzionano ancora',
}

// German: register "Sie", as the German tool pages. "Plus-Adresse" for the
// address, "Plus-Adressierung" for the feature, as the footer ("Gmail-Plus-Adressen").
const de: PlusPageStrings = {
  metaTitle: 'Gmail-Plus-Adressen: kostenloser Generator | Giggal.ai',
  ogTitle: 'Gmail-Plus-Adressen: kostenloser Generator',
  description:
    'Erstellen Sie Gmail-Plus-Adressen wie name+shopping@gmail.com, prüfen Sie, welche Anbieter sie zustellen, und finden Sie Duplikate in E-Mail-Listen.',
  ogLocale: 'de_DE',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Tool für Gmail-Plus-Adressen',
  crumb: 'Gmail-Plus-Adressen',
  appName: 'Tool für Gmail-Plus-Adressen',
  featureList: [
    'Plus-Adressen für jede E-Mail-Adresse erstellen',
    'Zeigt, ob Ihr E-Mail-Anbieter Plus-Adressen unterstützt',
    'Findet Plus- und Punkt-Varianten derselben Gmail-Adresse in einer Liste',
    'Behält die erste Adresse jeder Gruppe genau so, wie sie geschrieben wurde',
    'Liste ohne Duplikate kopieren oder herunterladen',
  ],
  h1: 'Gmail-Plus-Adressen',
  heroIntro:
    'Erstellen Sie Plus-Adressen wie jane+shopping@gmail.com, die alle in Ihrem Posteingang ankommen. Oder bereinigen Sie eine Liste von Plus- und Punkt-Varianten, die zur selben Person gehören.',
  howTitle: 'So nutzen Sie den Generator für Plus-Adressen',
  howSteps: [
    'Geben Sie im Reiter Plus-Adressen erstellen Ihre E-Mail-Adresse ein. Eine Gmail-Adresse funktioniert, die meisten anderen Adressen auch.',
    'Fügen Sie für jeden Ort, an dem Sie die Adresse nutzen, ein Tag hinzu, etwa newsletter oder shopping. Trennen Sie die Tags mit Kommas.',
    'Kopieren Sie die Plus-Adressen. Das Tool zeigt auch, ob Ihr Anbieter sie zustellt.',
    'Um eine Liste zu bereinigen, wechseln Sie in den Reiter Liste bereinigen und fügen die Adressen ein. Das Tool gruppiert die Adressen, die im selben Posteingang landen, und gibt Ihnen die Liste ohne Duplikate.',
  ],
  imageAlt: 'Illustration mehrerer Gmail-Plus-Adressen mit unterschiedlichen Tags, die in einem Posteingang ankommen.',
  whatTitle: 'Was ist Plus-Adressierung?',
  whatParas: [
    'Bei der Plus-Adressierung fügen Sie dem Teil einer E-Mail-Adresse vor dem @ ein Pluszeichen und ein Tag hinzu. Mails an `jane+travel@gmail.com` landen im selben Posteingang wie Mails an `jane@gmail.com`. Das Tag bleibt sichtbar, sodass Sie danach sortieren oder filtern können.',
    'Die Standards nennen das Sub-Addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) nutzt das Pluszeichen als Beispiel, überlässt das Trennzeichen aber jedem Mailsystem. Das passt zu einer allgemeineren Regel in [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): Nur der empfangende Server entscheidet, was der Teil vor dem @ bedeutet. Ob eine Plus-Adresse funktioniert, hängt also ganz vom Anbieter ab, der das Postfach betreibt.',
  ],
  gmailTitle: 'So funktionieren Plus-Adressen in Gmail',
  gmailParas: [
    '[Die Google-Hilfe](https://support.google.com/mail/answer/12096) beschreibt es in einem Satz: Fügen Sie vor dem @ ein Pluszeichen und ein beliebiges Wort ein. Jede Variante kommt in Ihrem Posteingang an. Sie müssen nichts einrichten, und Google nennt keine Obergrenze für die Anzahl.',
    'Gmail ignoriert außerdem Punkte. Bei einer gmail.com-Adresse [gehen Mails an jede Variante mit Punkten](https://support.google.com/mail/answer/7436150) an dieselbe Person. `j.a.n.e@gmail.com` ist also `jane@gmail.com`. Und [gmail.com und googlemail.com](https://support.google.com/mail/answer/10313) sind derselbe Posteingang.',
    'Google-Workspace-Konten mit Firmendomain unterstützen Plus-Adressen ebenfalls. Bei Punkten gilt dort aber etwas anderes: [Laut Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) werden Punkte in Workspace-Nutzernamen nicht ignoriert. `jane.doe@company.com` und `janedoe@company.com` können also zwei verschiedene Personen sein.',
  ],
  filterTitle: 'Mails an eine Plus-Adresse filtern',
  filterPara:
    'Erstellen Sie einen Gmail-Filter und tragen Sie die vollständige Plus-Adresse in das Feld An ein. Sie können auch mit dem [Operator deliveredto:](https://support.google.com/mail/answer/7190) danach suchen, zum Beispiel `deliveredto:jane+travel@gmail.com`. Suchen Sie in An oder Delivered-To, nicht in Von. Das Tag steht in der Adresse, an die die Mail gesendet wurde.',
  providersTitle: 'Welche E-Mail-Anbieter Plus-Adressen unterstützen',
  providersIntro:
    'Die meisten großen Anbieter stellen Plus-Adressen zu, aber nicht alle dokumentieren das. Zeilen mit der Markierung „getestet“ beruhen auf unabhängigen Tests statt auf den Seiten des Anbieters.',
  thProvider: 'Anbieter',
  thSupport: 'Plus-Adressen',
  thNotes: 'Hinweise',
  testedBadge: 'getestet',
  providerRows: {
    Gmail: { supports: 'Ja', notes: 'Punkte im Nutzernamen werden ignoriert. gmail.com und googlemail.com sind derselbe Posteingang.' },
    'Google Workspace': { supports: 'Ja', notes: 'Funktioniert mit Firmendomains. Punkte sind Teil der Adresse.' },
    'Microsoft 365': { supports: 'Ja, standardmäßig aktiv', notes: 'Nur für den Empfang. Ein Admin kann die Funktion für die Organisation abschalten.' },
    'Outlook.com': { supports: 'Ja', notes: 'Auch für hotmail.com- und live.com-Adressen. Punkte sind Teil der Adresse.' },
    'Proton Mail': { supports: 'Ja', notes: 'Auch im kostenlosen Tarif. Antworten gehen von der Plus-Adresse aus.' },
    Fastmail: { supports: 'Ja', notes: 'Passt das Tag zu einem Ordnernamen, landet die Mail in diesem Ordner. Subdomain-Adressen funktionieren auch.' },
    'iCloud Mail': { supports: 'Ja, in Tests', notes: 'Funktioniert in unabhängigen Tests für icloud.com und me.com. Apple dokumentiert es nicht.' },
    'Yandex Mail': { supports: 'Ja', notes: 'Adressen wie login+word@yandex.ru.' },
    'Yahoo Mail': { supports: 'Nicht bestätigt', notes: 'Yahoo dokumentiert stattdessen Wegwerfadressen mit Bindestrich: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'Für AOL, Zoho Mail, GMX und mail.com haben wir keine Dokumentation gefunden, weder dafür noch dagegen. Schicken Sie sich dort zuerst eine Test-E-Mail, bevor Sie sich auf eine Plus-Adresse verlassen.',
  sendTitle: 'Können Sie von einer Plus-Adresse senden?',
  sendIntro: 'Das hängt vom Anbieter ab, und genau hier liegen viele Anleitungen falsch:',
  sendItems: [
    '**Microsoft 365:** nein. [Laut der Microsoft-Dokumentation](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) können Nutzer keine E-Mails von Plus-Adressen senden.',
    '**Proton Mail:** ja. Antworten an eine Plus-Adresse gehen standardmäßig von dieser Adresse aus.',
    '**Fastmail:** ja, nachdem Sie die Adresse in den Einstellungen hinzugefügt haben.',
    '**Gmail:** Google dokumentiert es nicht. Manche Anleitungen fügen die Plus-Adresse unter [E-Mail senden als](https://support.google.com/mail/answer/22370) hinzu. Dort sind bis zu 99 Adressen möglich. Google hat angekündigt, dass „E-Mail senden als“ ab Januar 2027 für Adressen von Drittanbietern nicht mehr funktioniert. Adressen, die Ihnen in Gmail gehören, sind davon nicht betroffen.',
  ],
  usesTitle: 'Wofür Plus-Adressen nützlich sind und wo ihre Grenzen liegen',
  usesParas: [
    'Viele nutzen sie, um Mails in Ordner zu sortieren und um zu erkennen, wer ihre Adresse weitergegeben hat. Entwickler testen damit auch Anmeldeformulare mit mehreren Konten, die in einem Posteingang landen. Kommt Spam an `jane+shoestore@gmail.com`, wissen Sie, woher er stammt.',
    'Bevor Sie sich darauf verlassen, sollten Sie diese Grenzen kennen:',
  ],
  usesLimits: [
    'Manche Websites lehnen das Pluszeichen ab. Es ist ein gültiges Zeichen, und [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) fordert Programme auf, es zu akzeptieren. Fastmail weist aber darauf hin, dass manche Websites es fälschlich als ungültig behandeln.',
    'Eine Plus-Adresse verbirgt Ihre echte Adresse nicht. Jeder kann das Tag löschen, und Google selbst sagt, dass diese Adressen nicht privat sind.',
    'Wenn Sie Privatsphäre möchten, nutzen Sie stattdessen einen Weiterleitungs-Alias. [„E-Mail-Adresse verbergen“ von Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (mit iCloud+) und [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) erstellen zufällige Adressen, die an Sie weiterleiten.',
  ],
  listTitle: 'Plus-Adressen und Punkte in einer E-Mail-Liste',
  listParas: [
    'Wer ein Anmeldeformular betreibt, sieht auch die Nachteile der Plus-Adressierung. Eine Person kann sich als `jane@gmail.com`, `j.ane@gmail.com` und `jane+2@gmail.com` anmelden, und Ihre Liste zählt drei Personen. Das ermöglicht auch Missbrauch. In einem [von Sicherheitsforschern beschriebenen Fall](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html) nutzte eine Gruppe Punkt-Varianten von Gmail-Adressen für 48 Kreditkartenanträge. Sie erhielt so betrügerisch Kredite über mindestens 65.000 US-Dollar.',
    'Der Reiter Liste bereinigen findet diese Gruppen. Er folgt Regeln, die für jeden Anbieter sicher sind:',
  ],
  listRules: [
    'Bei gmail.com und googlemail.com entfernt er Punkte und das Plus-Tag.',
    'Bei Outlook.com, iCloud, Proton, Fastmail und Yandex entfernt er nur das Plus-Tag. Punkte bleiben, weil sie dort die Adresse ändern.',
    'Yahoo-Adressen lässt er unverändert. Eine Yahoo-Wegwerfadresse nutzt einen Spitznamen, der nicht der Kontoname ist. Sie lässt sich deshalb nicht auf das Konto zurückführen.',
    'Firmendomains lässt er unverändert, außer Sie aktivieren die Option. Jeder Mailserver entscheidet selbst, was ein Pluszeichen bedeutet, und auf manchen Servern ist es Teil eines echten Postfachnamens.',
  ],
  listAfter: [
    'Nutzen Sie das Ergebnis, um Duplikate zu erkennen, nicht um Adressen umzuschreiben. Senden Sie weiter an die Adresse genau so, wie die Person sie eingegeben hat, damit ihre Filter weiter funktionieren. Aus diesem Grund behält das Tool die erste Adresse jeder Gruppe unverändert.',
    'Das Zusammenführen von Duplikaten sagt nichts darüber, ob eine Adresse noch funktioniert. Prüfen Sie die bereinigte Liste vor dem Versand mit der [E-Mail-Massenprüfung](/bulk-email-verifier), oder prüfen Sie eine einzelne Adresse mit [E-Mail-Adresse prüfen](/email-checker). Adressen von Freemail-Anbietern erkennen Sie mit der [Liste kostenloser E-Mail-Anbieter](/free-email-providers), Wegwerf-Postfächer mit der [Wegwerf-E-Mail-Prüfung](/disposable-email-checker).',
  ],
  faqTitle: 'Häufige Fragen zu Gmail-Plus-Adressen',
  faqs: [
    {
      q: 'Was ist Gmail-Plus-Adressierung?',
      a: 'Damit erstellen Sie zusätzliche Varianten Ihrer Gmail-Adresse. Sie fügen vor dem @ ein Pluszeichen und ein Wort ein, etwa jane+shopping@gmail.com. Mails an jede dieser Varianten kommen in Ihrem normalen Posteingang an, und Sie können nach dem Wort filtern.',
    },
    {
      q: 'Funktioniert Plus-Adressierung in Outlook?',
      a: 'Ja. Outlook.com-Adressen akzeptieren Plus-Adressen, und Microsoft aktiviert Plus-Adressierung für Microsoft-365-Geschäftskonten standardmäßig. In Microsoft 365 können Sie Mails an einer Plus-Adresse empfangen, aber nicht von ihr senden.',
    },
    {
      q: 'Spielen Punkte in einer Gmail-Adresse eine Rolle?',
      a: 'Bei gmail.com-Adressen nicht. Laut Google gehen Mails an jede Variante Ihrer Adresse mit Punkten an Sie. jane.doe@gmail.com und janedoe@gmail.com sind also ein Posteingang. In Google-Workspace-Konten mit Firmendomain ändern Punkte dagegen die Adresse.',
    },
    {
      q: 'Kann ich in Gmail von einer Plus-Adresse senden?',
      a: 'Google dokumentiert es nicht. Manche Anleitungen fügen die Plus-Adresse in den Gmail-Einstellungen unter „E-Mail senden als“ hinzu. Dann können Sie sie als Absenderadresse wählen. Microsoft 365 erlaubt das Senden von Plus-Adressen gar nicht, während Proton Mail standardmäßig von der Plus-Adresse antwortet.',
    },
    {
      q: 'Warum lehnt eine Website meine Plus-Adresse ab?',
      a: 'Weil ihr Anmeldeformular Adressen zu streng prüft. Das Pluszeichen ist ein gültiges Zeichen in einer E-Mail-Adresse, und laut RFC 3696 sollten Programme es akzeptieren. Fastmail weist darauf hin, dass manche Websites es fälschlich als ungültig behandeln. Nutzen Sie auf diesen Websites Ihre normale Adresse.',
    },
    {
      q: 'Ist eine Plus-Adresse dasselbe wie ein E-Mail-Alias?',
      a: 'Nicht ganz. Eine Plus-Adresse ist Ihre echte Adresse mit einem Tag. Jeder kann das Tag entfernen und Ihre Postfachadresse sehen. Ein Alias von „E-Mail-Adresse verbergen“ (Apple) oder von DuckDuckGo Email Protection ist etwas anderes. Es ist eine zufällige Adresse, die an Sie weiterleitet und Ihre echte Adresse verbirgt.',
    },
    {
      q: 'Funktioniert Plus-Adressierung mit Google Workspace?',
      a: 'Ja. Googles eigenes Beispiel nutzt eine Firmendomain: cassy+news@solarmora.com. Der Unterschied zu gmail.com: In Workspace sind Punkte Teil der Adresse, also ist nur der Plus-Teil ein Tag.',
    },
    {
      q: 'Wie viele Plus-Adressen kann ich erstellen?',
      a: 'Google nennt keine Zahl. Die praktische Grenze ist die Länge. Der Teil vor dem @ darf höchstens 64 Zeichen lang sein, einschließlich Ihres Namens, des Pluszeichens und des Tags.',
    },
  ],
  ctaHeadline: 'Erfahren Sie, welche Adressen in Ihrer Liste noch funktionieren',
}

// Spanish: register "tú", neutral vocabulary as the other Spanish tool pages.
// "dirección con +" for the address, as the footer ("Direcciones con + de Gmail").
const es: PlusPageStrings = {
  metaTitle: 'Direcciones con + de Gmail: generador gratis | Giggal.ai',
  ogTitle: 'Direcciones con + de Gmail: generador gratis',
  description:
    'Crea direcciones de Gmail con + como tu+compras@gmail.com, mira qué proveedores las admiten y encuentra duplicados con + y con puntos en tu lista de correos.',
  ogLocale: 'es_ES',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Herramienta de direcciones con + de Gmail',
  crumb: 'Direcciones con + de Gmail',
  appName: 'Herramienta de direcciones con + de Gmail',
  featureList: [
    'Crea direcciones con + para cualquier dirección de correo',
    'Muestra si tu proveedor de correo admite direcciones con +',
    'Encuentra en una lista las versiones con + y con puntos de la misma dirección de Gmail',
    'Conserva la primera dirección de cada grupo tal como está escrita',
    'Copia o descarga la lista sin duplicados',
  ],
  h1: 'Direcciones con + de Gmail',
  heroIntro:
    'Crea direcciones como jane+shopping@gmail.com que llegan todas a tu bandeja de entrada. O limpia una lista de las versiones con + y con puntos que pertenecen a la misma persona.',
  howTitle: 'Cómo usar el generador de direcciones con +',
  howSteps: [
    'En la pestaña Crear, escribe tu dirección de correo. Funciona una dirección de Gmail, y también la mayoría de las demás.',
    'Agrega una etiqueta para cada sitio donde vayas a usar la dirección, como boletines o compras. Separa las etiquetas con comas.',
    'Copia las direcciones con +. La herramienta también te dice si tu proveedor las entrega.',
    'Para limpiar una lista, cambia a la pestaña Limpiar y pega las direcciones. La herramienta agrupa las que llegan a la misma bandeja y te da la lista sin duplicados.',
  ],
  imageAlt: 'Ilustración de varias direcciones de Gmail con + y distintas etiquetas que llegan a una sola bandeja de entrada.',
  whatTitle: '¿Qué es el plus addressing?',
  whatParas: [
    'El plus addressing consiste en añadir un signo más y una etiqueta a la parte de la dirección de correo que va antes de la @. El correo enviado a `jane+travel@gmail.com` llega a la misma bandeja que el correo enviado a `jane@gmail.com`. La etiqueta sigue visible, así que puedes ordenar o filtrar el correo con ella.',
    'Los estándares lo llaman subdireccionamiento (sub-addressing). [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) usa el signo más como ejemplo, pero deja la elección del separador a cada sistema de correo. Eso encaja con una regla más general de [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): solo el servidor que recibe decide qué significa la parte antes de la @. Por eso, que una dirección con + funcione depende por completo del proveedor que aloja el buzón.',
  ],
  gmailTitle: 'Cómo funcionan las direcciones con + en Gmail',
  gmailParas: [
    '[La página de ayuda de Google](https://support.google.com/mail/answer/12096) lo describe en una línea: añade un signo más y cualquier palabra antes de la @. Todas las versiones llegan a tu bandeja de entrada. No tienes que configurar nada, y Google no menciona un límite de cuántas puedes usar.',
    'Gmail también ignora los puntos. En una dirección gmail.com, [el correo enviado a cualquier versión con puntos](https://support.google.com/mail/answer/7436150) llega a la misma persona, así que `j.a.n.e@gmail.com` es `jane@gmail.com`. Y [gmail.com y googlemail.com](https://support.google.com/mail/answer/10313) son la misma bandeja.',
    'Las cuentas de Google Workspace con dominio de empresa también admiten direcciones con +. Allí los puntos funcionan de otra forma: [Google indica](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) que los puntos no se ignoran en los nombres de usuario de Workspace. Por eso `jane.doe@company.com` y `janedoe@company.com` pueden ser dos personas distintas.',
  ],
  filterTitle: 'Cómo filtrar el correo enviado a una dirección con +',
  filterPara:
    'Crea un filtro de Gmail y pon la dirección con + completa en el campo Para. También puedes buscarla con el [operador deliveredto:](https://support.google.com/mail/answer/7190), por ejemplo `deliveredto:jane+travel@gmail.com`. Busca en Para o en Delivered-To, no en De. La etiqueta está en la dirección a la que se envió el correo.',
  providersTitle: 'Qué proveedores de correo admiten direcciones con +',
  providersIntro:
    'La mayoría de los grandes proveedores entregan las direcciones con +, pero no todos lo documentan. Las filas marcadas como “probado” se basan en pruebas independientes y no en las páginas del propio proveedor.',
  thProvider: 'Proveedor',
  thSupport: 'Direcciones con +',
  thNotes: 'Notas',
  testedBadge: 'probado',
  providerRows: {
    Gmail: { supports: 'Sí', notes: 'Se ignoran los puntos del nombre de usuario. gmail.com y googlemail.com son la misma bandeja.' },
    'Google Workspace': { supports: 'Sí', notes: 'Funciona con dominios de empresa. Los puntos forman parte de la dirección.' },
    'Microsoft 365': { supports: 'Sí, activado por defecto', notes: 'Solo para recibir. Un administrador puede desactivarlo para la organización.' },
    'Outlook.com': { supports: 'Sí', notes: 'También para direcciones hotmail.com y live.com. Los puntos forman parte de la dirección.' },
    'Proton Mail': { supports: 'Sí', notes: 'Incluido en el plan gratuito. Las respuestas salen desde la dirección con +.' },
    Fastmail: { supports: 'Sí', notes: 'Si la etiqueta coincide con el nombre de una carpeta, el correo se guarda en esa carpeta. Las direcciones con subdominio también funcionan.' },
    'iCloud Mail': { supports: 'Sí, en pruebas', notes: 'Funciona con icloud.com y me.com en pruebas independientes. Apple no lo documenta.' },
    'Yandex Mail': { supports: 'Sí', notes: 'Direcciones como login+word@yandex.ru.' },
    'Yahoo Mail': { supports: 'No confirmado', notes: 'Yahoo documenta en su lugar direcciones desechables con guion: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'Para AOL, Zoho Mail, GMX y mail.com no encontramos documentación ni a favor ni en contra. Envíate un correo de prueba antes de confiar en una dirección con + en esos servicios.',
  sendTitle: '¿Puedes enviar correo desde una dirección con +?',
  sendIntro: 'Depende del proveedor, y aquí es donde muchas guías se equivocan:',
  sendItems: [
    '**Microsoft 365:** no. [La documentación de Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) dice que los usuarios no pueden enviar correo desde direcciones con +.',
    '**Proton Mail:** sí. Las respuestas a una dirección con + salen desde esa dirección por defecto.',
    '**Fastmail:** sí, después de añadir la dirección en la configuración.',
    '**Gmail:** Google no lo documenta. Algunas guías añaden la dirección con + en [Enviar como](https://support.google.com/mail/answer/22370), que permite hasta 99 direcciones. Google anunció que Enviar como dejará de funcionar para direcciones de terceros a partir de enero de 2027. Las direcciones que son tuyas en Gmail no se ven afectadas.',
  ],
  usesTitle: 'Para qué sirven las direcciones con + y cuáles son sus límites',
  usesParas: [
    'La gente las usa para ordenar el correo en carpetas y para saber quién compartió su dirección. Los desarrolladores también las usan para probar formularios de registro con varias cuentas que llegan a una sola bandeja. Si llega spam a `jane+shoestore@gmail.com`, sabes de dónde vino.',
    'Antes de confiar en ellas, conviene conocer estos límites:',
  ],
  usesLimits: [
    'Algunos sitios web rechazan el signo más. Es un carácter válido, y [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) pide a los programas que lo acepten, pero Fastmail señala que algunos sitios lo tratan por error como no válido.',
    'Una dirección con + no oculta tu dirección real. Cualquiera puede borrar la etiqueta, y la propia Google dice que estas direcciones no son privadas.',
    'Si buscas privacidad, usa un alias de reenvío. [Ocultar mi correo electrónico de Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (con iCloud+) y [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) crean direcciones aleatorias que te reenvían el correo.',
  ],
  listTitle: 'Direcciones con + y puntos en una lista de correos',
  listParas: [
    'Si tienes un formulario de registro, el plus addressing también tiene un lado negativo. Una persona puede registrarse como `jane@gmail.com`, `j.ane@gmail.com` y `jane+2@gmail.com`, y tu lista cuenta tres personas. También facilita el abuso. En un caso [publicado por investigadores de seguridad](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), un grupo usó versiones con puntos de direcciones de Gmail para 48 solicitudes de tarjetas de crédito y obtuvo al menos 65.000 dólares en crédito fraudulento.',
    'La pestaña Limpiar encuentra estos grupos. Sigue reglas seguras para cada proveedor:',
  ],
  listRules: [
    'En gmail.com y googlemail.com, elimina los puntos y la etiqueta con +.',
    'En Outlook.com, iCloud, Proton, Fastmail y Yandex, elimina solo la etiqueta con +. Los puntos se mantienen, porque en esos servicios cambian la dirección.',
    'No modifica las direcciones de Yahoo. Una dirección desechable de Yahoo usa un apodo que no es el nombre de la cuenta, así que no se puede relacionar con la cuenta.',
    'No modifica los dominios de empresa, salvo que marques la opción. Cada servidor de correo decide qué significa el signo más, y en algunos servidores forma parte del nombre de un buzón real.',
  ],
  listAfter: [
    'Usa el resultado para detectar duplicados, no para reescribir direcciones. Sigue enviando a la dirección tal como la escribió la persona, para que sus filtros sigan funcionando. Por eso la herramienta conserva sin cambios la primera dirección de cada grupo.',
    'Fusionar duplicados no te dice si una dirección sigue funcionando. Antes de enviar, pasa la lista limpia por el [validador de correos masivos](/bulk-email-verifier), o comprueba una sola dirección con el [validador de correo](/email-checker). Para marcar direcciones de proveedores gratuitos, consulta la [lista de proveedores de correo gratuitos](/free-email-providers). Para buzones desechables, usa el [verificador de correo desechable](/disposable-email-checker).',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Qué es el plus addressing de Gmail?',
      a: 'Es una forma de crear versiones extra de tu dirección de Gmail. Añades un signo más y una palabra antes de la @, por ejemplo jane+shopping@gmail.com. El correo enviado a cualquiera de ellas llega a tu bandeja de entrada normal, y puedes filtrar por esa palabra.',
    },
    {
      q: '¿Funcionan las direcciones con + en Outlook?',
      a: 'Sí. Las direcciones de Outlook.com aceptan direcciones con +, y Microsoft activa el plus addressing por defecto en las cuentas de empresa de Microsoft 365. En Microsoft 365 puedes recibir correo en una dirección con +, pero no puedes enviar desde ella.',
    },
    {
      q: '¿Importan los puntos en una dirección de Gmail?',
      a: 'No en las direcciones gmail.com. Google dice que el correo enviado a cualquier versión con puntos de tu dirección te llega a ti, así que jane.doe@gmail.com y janedoe@gmail.com son una sola bandeja. En las cuentas de Google Workspace con dominio de empresa, los puntos sí cambian la dirección.',
    },
    {
      q: '¿Puedo enviar correo desde una dirección con + en Gmail?',
      a: 'Google no lo documenta. Algunas guías añaden la dirección con + en la configuración de Gmail, en Enviar como, y así se puede elegir como dirección del remitente. Microsoft 365 no permite enviar desde direcciones con +, mientras que Proton Mail responde desde la dirección con + por defecto.',
    },
    {
      q: '¿Por qué un sitio web rechaza mi dirección con +?',
      a: 'Porque su formulario de registro revisa las direcciones de forma demasiado estricta. El signo más es un carácter válido en una dirección de correo, y RFC 3696 dice que los programas deben aceptarlo. Fastmail señala que algunos sitios lo tratan por error como no válido. En esos sitios, usa tu dirección normal.',
    },
    {
      q: '¿Una dirección con + es lo mismo que un alias de correo?',
      a: 'No exactamente. Una dirección con + es tu dirección real con una etiqueta, así que cualquiera puede quitar la etiqueta y ver la dirección de tu bandeja. Un alias de Ocultar mi correo electrónico de Apple o de DuckDuckGo Email Protection es distinto. Es una dirección aleatoria que te reenvía el correo y oculta tu dirección real.',
    },
    {
      q: '¿Funciona el plus addressing con Google Workspace?',
      a: 'Sí. El propio ejemplo de Google usa un dominio de empresa: cassy+news@solarmora.com. La diferencia con gmail.com es que en Workspace los puntos forman parte de la dirección, así que solo la parte con + es una etiqueta.',
    },
    {
      q: '¿Cuántas direcciones con + puedo crear?',
      a: 'Google no indica un número. El límite práctico es la longitud. La parte antes de la @ puede tener como máximo 64 caracteres, contando tu nombre, el signo más y la etiqueta.',
    },
  ],
  ctaHeadline: 'Descubre qué direcciones de tu lista siguen funcionando',
}

// Brazilian Portuguese: register "você", "e-mail" with the hyphen. "endereço com +"
// for the address, as the footer ("Endereços do Gmail com +").
const ptBr: PlusPageStrings = {
  metaTitle: 'Endereços do Gmail com +: gerador grátis | Giggal.ai',
  ogTitle: 'Endereços do Gmail com +: gerador grátis',
  description:
    'Crie endereços do Gmail com + como voce+compras@gmail.com, veja quais provedores os aceitam e encontre duplicatas com + e com pontos em listas de e-mail.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Ferramenta de endereços do Gmail com +',
  crumb: 'Endereços do Gmail com +',
  appName: 'Ferramenta de endereços do Gmail com +',
  featureList: [
    'Crie endereços com + para qualquer endereço de e-mail',
    'Mostra se o seu provedor de e-mail aceita endereços com +',
    'Encontra em uma lista as versões com + e com pontos do mesmo endereço do Gmail',
    'Mantém o primeiro endereço de cada grupo exatamente como foi escrito',
    'Copie ou baixe a lista sem duplicatas',
  ],
  h1: 'Endereços do Gmail com +',
  heroIntro:
    'Crie endereços como jane+shopping@gmail.com que chegam todos à sua caixa de entrada. Ou limpe uma lista das versões com + e com pontos que pertencem à mesma pessoa.',
  howTitle: 'Como usar o gerador de endereços com +',
  howSteps: [
    'Na aba Criar, digite o seu endereço de e-mail. Um endereço do Gmail funciona, e a maioria dos outros também.',
    'Adicione uma tag para cada lugar onde você vai usar o endereço, como newsletters ou compras. Separe as tags com vírgulas.',
    'Copie os endereços com +. A ferramenta também mostra se o seu provedor os entrega.',
    'Para limpar uma lista, mude para a aba Limpar e cole os endereços. A ferramenta agrupa os que chegam à mesma caixa de entrada e entrega a lista sem duplicatas.',
  ],
  imageAlt: 'Ilustração de vários endereços do Gmail com + e tags diferentes chegando a uma única caixa de entrada.',
  whatTitle: 'O que é plus addressing?',
  whatParas: [
    'Plus addressing é adicionar um sinal de mais e uma tag à parte do endereço de e-mail antes do @. Um e-mail enviado para `jane+travel@gmail.com` chega à mesma caixa de entrada que um e-mail enviado para `jane@gmail.com`. A tag continua visível, então você pode ordenar ou filtrar os e-mails por ela.',
    'Os padrões chamam isso de subendereçamento (sub-addressing). A [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) usa o sinal de mais como exemplo, mas deixa a escolha do separador para cada sistema de e-mail. Isso segue uma regra mais ampla da [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): só o servidor que recebe decide o que significa a parte antes do @. Por isso, se um endereço com + funciona ou não depende totalmente do provedor que hospeda a caixa de entrada.',
  ],
  gmailTitle: 'Como funcionam os endereços com + no Gmail',
  gmailParas: [
    '[A página de ajuda do Google](https://support.google.com/mail/answer/12096) descreve isso em uma linha: adicione um sinal de mais e qualquer palavra antes do @. Todas as versões chegam à sua caixa de entrada. Você não precisa configurar nada, e o Google não menciona um limite de quantas você pode usar.',
    'O Gmail também ignora pontos. Em um endereço gmail.com, [e-mails enviados para qualquer versão com pontos](https://support.google.com/mail/answer/7436150) chegam à mesma pessoa, então `j.a.n.e@gmail.com` é `jane@gmail.com`. E [gmail.com e googlemail.com](https://support.google.com/mail/answer/10313) são a mesma caixa de entrada.',
    'Contas do Google Workspace em um domínio de empresa também aceitam endereços com +. Lá os pontos funcionam de outro jeito: [segundo o Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups), os pontos não são ignorados nos nomes de usuário do Workspace. Então `jane.doe@company.com` e `janedoe@company.com` podem ser duas pessoas diferentes.',
  ],
  filterTitle: 'Como filtrar e-mails enviados para um endereço com +',
  filterPara:
    'Crie um filtro no Gmail e coloque o endereço com + completo no campo Para. Você também pode pesquisá-lo com o [operador deliveredto:](https://support.google.com/mail/answer/7190), por exemplo `deliveredto:jane+travel@gmail.com`. Procure em Para ou em Delivered-To, não em De. A tag fica no endereço para o qual o e-mail foi enviado.',
  providersTitle: 'Quais provedores de e-mail aceitam endereços com +',
  providersIntro:
    'A maioria dos grandes provedores entrega endereços com +, mas nem todos documentam isso. As linhas marcadas como “testado” se baseiam em testes independentes, e não nas páginas do próprio provedor.',
  thProvider: 'Provedor',
  thSupport: 'Endereços com +',
  thNotes: 'Observações',
  testedBadge: 'testado',
  providerRows: {
    Gmail: { supports: 'Sim', notes: 'Os pontos no nome de usuário são ignorados. gmail.com e googlemail.com são a mesma caixa de entrada.' },
    'Google Workspace': { supports: 'Sim', notes: 'Funciona em domínios de empresa. Os pontos fazem parte do endereço.' },
    'Microsoft 365': { supports: 'Sim, ativado por padrão', notes: 'Somente para recebimento. Um administrador pode desativar o recurso para a organização.' },
    'Outlook.com': { supports: 'Sim', notes: 'Também para endereços hotmail.com e live.com. Os pontos fazem parte do endereço.' },
    'Proton Mail': { supports: 'Sim', notes: 'Também no plano gratuito. As respostas saem do endereço com +.' },
    Fastmail: { supports: 'Sim', notes: 'Uma tag igual ao nome de uma pasta coloca o e-mail nessa pasta. Endereços com subdomínio também funcionam.' },
    'iCloud Mail': { supports: 'Sim, em testes', notes: 'Funciona para icloud.com e me.com em testes independentes. A Apple não documenta isso.' },
    'Yandex Mail': { supports: 'Sim', notes: 'Endereços como login+word@yandex.ru.' },
    'Yahoo Mail': { supports: 'Não confirmado', notes: 'Em vez disso, o Yahoo documenta endereços descartáveis com hífen: nickname-keyword@yahoo.com.' },
  },
  providersAfter:
    'Para AOL, Zoho Mail, GMX e mail.com, não encontramos documentação nem a favor nem contra. Envie um e-mail de teste para você mesmo antes de contar com um endereço com + nesses serviços.',
  sendTitle: 'Dá para enviar e-mails a partir de um endereço com +?',
  sendIntro: 'Depende do provedor, e é aqui que muitos guias erram:',
  sendItems: [
    '**Microsoft 365:** não. [A documentação da Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) diz que os usuários não podem enviar e-mails a partir de endereços com +.',
    '**Proton Mail:** sim. As respostas a um endereço com + saem desse endereço por padrão.',
    '**Fastmail:** sim, depois que você adiciona o endereço nas configurações.',
    '**Gmail:** o Google não documenta isso. Alguns guias adicionam o endereço com + em [Enviar e-mail como](https://support.google.com/mail/answer/22370), que permite até 99 endereços. O Google anunciou que Enviar e-mail como vai deixar de funcionar para endereços de terceiros a partir de janeiro de 2027. Endereços que são seus no Gmail não são afetados.',
  ],
  usesTitle: 'Para que servem os endereços com + e quais são os limites',
  usesParas: [
    'As pessoas os usam para organizar e-mails em pastas e para descobrir quem compartilhou o seu endereço. Desenvolvedores também os usam para testar formulários de cadastro com várias contas que chegam a uma única caixa de entrada. Se chegar spam em `jane+shoestore@gmail.com`, você sabe de onde ele veio.',
    'Antes de contar com isso, vale conhecer estes limites:',
  ],
  usesLimits: [
    'Alguns sites rejeitam o sinal de mais. Ele é um caractere válido, e a [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) orienta os programas a aceitá-lo, mas a Fastmail observa que alguns sites o tratam como inválido por engano.',
    'Um endereço com + não esconde o seu endereço real. Qualquer pessoa pode apagar a tag, e o próprio Google diz que esses endereços não são privados.',
    'Se você quer privacidade, use um alias de encaminhamento. O [Ocultar Meu E-mail da Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (com o iCloud+) e o [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) criam endereços aleatórios que encaminham os e-mails para você.',
  ],
  listTitle: 'Endereços com + e pontos em uma lista de e-mails',
  listParas: [
    'Para quem mantém um formulário de cadastro, o plus addressing também tem um lado negativo. Uma pessoa pode se cadastrar como `jane@gmail.com`, `j.ane@gmail.com` e `jane+2@gmail.com`, e a sua lista conta três pessoas. Isso também facilita abusos. Em um caso [relatado por pesquisadores de segurança](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), um grupo usou versões com pontos de endereços do Gmail em 48 pedidos de cartão de crédito e obteve pelo menos US$ 65.000 em crédito fraudulento.',
    'A aba Limpar encontra esses grupos. Ela segue regras seguras para cada provedor:',
  ],
  listRules: [
    'Para gmail.com e googlemail.com, remove os pontos e a tag com +.',
    'Para Outlook.com, iCloud, Proton, Fastmail e Yandex, remove só a tag com +. Os pontos ficam, porque nesses serviços eles mudam o endereço.',
    'Não altera endereços do Yahoo. Um endereço descartável do Yahoo usa um apelido que não é o nome da conta, então não é possível chegar à conta a partir dele.',
    'Não altera domínios de empresa, a menos que você marque a opção. Cada servidor de e-mail decide o que significa o sinal de mais, e em alguns servidores ele faz parte do nome de uma caixa postal real.',
  ],
  listAfter: [
    'Use o resultado para identificar duplicatas, não para reescrever endereços. Continue enviando para o endereço exatamente como a pessoa o digitou, para que os filtros dela continuem funcionando. Por isso a ferramenta mantém sem alteração o primeiro endereço de cada grupo.',
    'Mesclar duplicatas não mostra se um endereço ainda funciona. Antes de enviar, passe a lista limpa pelo [validador de e-mail em massa](/bulk-email-verifier), ou verifique um único endereço com a [verificação de e-mail](/email-checker). Para marcar endereços de provedores gratuitos, veja a [lista de provedores de e-mail gratuito](/free-email-providers). Para caixas descartáveis, use o [verificador de e-mail descartável](/disposable-email-checker).',
  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'O que é plus addressing no Gmail?',
      a: 'É uma forma de criar versões extras do seu endereço do Gmail. Você adiciona um sinal de mais e uma palavra antes do @, como jane+shopping@gmail.com. E-mails enviados para qualquer uma dessas versões chegam à sua caixa de entrada normal, e você pode filtrar pela palavra.',
    },
    {
      q: 'Endereços com + funcionam no Outlook?',
      a: 'Sim. Endereços do Outlook.com aceitam endereços com +, e a Microsoft ativa o plus addressing por padrão nas contas empresariais do Microsoft 365. No Microsoft 365, você pode receber e-mails em um endereço com +, mas não pode enviar a partir dele.',
    },
    {
      q: 'Os pontos fazem diferença em um endereço do Gmail?',
      a: 'Não em endereços gmail.com. O Google diz que e-mails enviados para qualquer versão com pontos do seu endereço chegam a você, então jane.doe@gmail.com e janedoe@gmail.com são uma única caixa de entrada. Já em contas do Google Workspace em um domínio de empresa, os pontos mudam o endereço.',
    },
    {
      q: 'Posso enviar e-mails de um endereço com + no Gmail?',
      a: 'O Google não documenta isso. Alguns guias adicionam o endereço com + nas configurações do Gmail, em Enviar e-mail como, o que permite escolhê-lo como endereço do remetente. O Microsoft 365 não permite enviar a partir de endereços com +, enquanto o Proton Mail responde a partir do endereço com + por padrão.',
    },
    {
      q: 'Por que um site rejeita o meu endereço com +?',
      a: 'Porque o formulário de cadastro dele verifica os endereços de forma rígida demais. O sinal de mais é um caractere válido em um endereço de e-mail, e a RFC 3696 diz que os programas devem aceitá-lo. A Fastmail observa que alguns sites o tratam como inválido por engano. Nesses sites, use o seu endereço normal.',
    },
    {
      q: 'Um endereço com + é o mesmo que um alias de e-mail?',
      a: 'Não exatamente. Um endereço com + é o seu endereço real com uma tag, então qualquer pessoa pode remover a tag e ver o endereço da sua caixa de entrada. Um alias do Ocultar Meu E-mail da Apple ou do DuckDuckGo Email Protection é diferente. É um endereço aleatório que encaminha os e-mails para você e esconde o seu endereço real.',
    },
    {
      q: 'Plus addressing funciona com o Google Workspace?',
      a: 'Sim. O próprio exemplo do Google usa um domínio de empresa: cassy+news@solarmora.com. A diferença em relação ao gmail.com é que, no Workspace, os pontos fazem parte do endereço, então só a parte com + é uma tag.',
    },
    {
      q: 'Quantos endereços com + posso criar?',
      a: 'O Google não informa um número. O limite prático é o tamanho. A parte antes do @ pode ter no máximo 64 caracteres, contando o seu nome, o sinal de mais e a tag.',
    },
  ],
  ctaHeadline: 'Saiba quais endereços da sua lista ainda funcionam',
}

const fr: PlusPageStrings = {
  metaTitle: 'Adresses Gmail avec + : générateur d’adresses plus | Giggal.ai',
  ogTitle: 'Adresses Gmail avec + : générateur d’adresses plus',
  description:
    'Créez des adresses Gmail avec + comme vous+achats@gmail.com, voyez quels fournisseurs les acceptent et trouvez les doublons avec + et points dans une liste.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Outil d’adresses Gmail avec +',
  crumb: 'Adresses Gmail avec +',
  appName: 'Outil d’adresses Gmail avec +',
  featureList: [
    'Créer des adresses plus pour n’importe quelle adresse mail',
    'Indique si votre fournisseur de messagerie accepte les adresses plus',
    'Trouve dans une liste les versions avec + et avec points d’une même adresse Gmail',
    'Garde la première adresse de chaque groupe telle qu’elle a été saisie',
    'Copier ou télécharger la liste sans doublons',
  ],
  h1: 'Adresses Gmail avec +',
  heroIntro:
    'Créez des adresses plus comme marie+achats@gmail.com, qui arrivent toutes dans votre boîte de réception. Ou nettoyez une liste des versions avec + et avec points qui appartiennent à la même personne.',
  howTitle: 'Comment utiliser le générateur d’adresses plus',
  howSteps: [
    'Dans l’onglet Créer, saisissez votre adresse mail. Une adresse Gmail fonctionne, comme la plupart des autres.',
    'Ajoutez une étiquette pour chaque endroit où vous utiliserez l’adresse, par exemple newsletters ou achats. Séparez les étiquettes par des virgules.',
    'Copiez les adresses plus. L’outil vous indique aussi si votre fournisseur les distribue.',
    'Pour nettoyer une liste, passez à l’onglet Nettoyer et collez les adresses. L’outil regroupe celles qui arrivent dans la même boîte de réception et vous donne la liste sans doublons.',
  ],
  imageAlt: 'Illustration de plusieurs adresses Gmail avec + et des étiquettes différentes qui arrivent dans une seule boîte de réception.',
  whatTitle: 'Qu’est-ce que l’adressage plus ?',
  whatParas: [
    'L’adressage plus (plus addressing) consiste à ajouter un signe plus et une étiquette à la partie de l’adresse mail située avant le @. Un message envoyé à `marie+voyage@gmail.com` arrive dans la même boîte que les messages envoyés à `marie@gmail.com`. L’étiquette reste visible, vous pouvez donc trier ou filtrer les messages avec elle.',
    'Les normes parlent de sous-adressage. La [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) prend le signe plus comme exemple, mais laisse chaque système de messagerie choisir le séparateur. Cela suit une règle plus large de la [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321) : seul le serveur qui reçoit le message décide du sens de la partie avant le @. Qu’une adresse plus fonctionne ou non dépend donc entièrement du fournisseur qui héberge la boîte de réception.',
  ],
  gmailTitle: 'Comment fonctionnent les adresses Gmail avec +',
  gmailParas: [
    'La [page d’aide de Google](https://support.google.com/mail/answer/12096) le décrit en une ligne : ajoutez un signe plus et n’importe quel mot avant le @. Toutes les versions arrivent dans votre boîte de réception. Vous n’avez rien à configurer, et Google ne mentionne aucune limite sur le nombre d’adresses utilisées.',
    'Gmail ignore aussi les points. Pour une adresse gmail.com, [un message envoyé à une version avec points](https://support.google.com/mail/answer/7436150) arrive chez la même personne, donc `m.a.r.i.e@gmail.com` équivaut à `marie@gmail.com`. Et [gmail.com et googlemail.com](https://support.google.com/mail/answer/10313) sont la même boîte de réception.',
    'Les comptes Google Workspace sur un domaine d’entreprise acceptent aussi les adresses plus. Les points fonctionnent autrement : [selon Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups), les points ne sont pas ignorés dans les noms d’utilisateur Workspace, donc `marie.dupont@entreprise.fr` et `mariedupont@entreprise.fr` peuvent être deux personnes différentes.',
  ],
  filterTitle: 'Filtrer les messages envoyés à une adresse plus',
  filterPara:
    'Créez un filtre Gmail et indiquez l’adresse plus complète dans le champ À. Vous pouvez aussi la rechercher avec l’[opérateur deliveredto:](https://support.google.com/mail/answer/7190), par exemple `deliveredto:marie+voyage@gmail.com`. Regardez le champ À ou Delivered-To, pas le champ De. L’étiquette se trouve dans l’adresse à laquelle le message a été envoyé.',
  providersTitle: 'Quels fournisseurs de messagerie acceptent l’adressage plus',
  providersIntro:
    'La plupart des grands fournisseurs distribuent les adresses plus, mais tous ne le documentent pas. Les lignes marquées « testé » reposent sur des tests indépendants, pas sur les pages du fournisseur.',
  thProvider: 'Fournisseur',
  thSupport: 'Adresses plus',
  thNotes: 'Remarques',
  testedBadge: 'testé',
  providerRows: {
    Gmail: { supports: 'Oui', notes: 'Les points dans le nom d’utilisateur sont ignorés. gmail.com et googlemail.com sont la même boîte.' },
    'Google Workspace': { supports: 'Oui', notes: 'Fonctionne sur les domaines d’entreprise. Les points font partie de l’adresse.' },
    'Microsoft 365': { supports: 'Oui, activé par défaut', notes: 'Réception uniquement. Un administrateur peut le désactiver pour l’organisation.' },
    'Outlook.com': { supports: 'Oui', notes: 'Aussi pour les adresses hotmail.com et live.com. Les points font partie de l’adresse.' },
    'Proton Mail': { supports: 'Oui', notes: 'Offre gratuite comprise. Les réponses partent de l’adresse plus.' },
    Fastmail: { supports: 'Oui', notes: 'Une étiquette identique au nom d’un dossier y range le message. Les adresses de sous-domaine fonctionnent aussi.' },
    'iCloud Mail': { supports: 'Oui, dans des tests', notes: 'Fonctionne pour icloud.com et me.com dans des tests indépendants. Apple ne le documente pas.' },
    'Yandex Mail': { supports: 'Oui', notes: 'Adresses comme login+mot@yandex.ru.' },
    'Yahoo Mail': { supports: 'Non confirmé', notes: 'Yahoo documente plutôt des adresses jetables avec un tiret : surnom-motcle@yahoo.com.' },
  },
  providersAfter:
    'Pour AOL, Zoho Mail, GMX et mail.com, nous n’avons trouvé aucune documentation, ni pour ni contre. Envoyez-vous un message de test avant de compter sur une adresse plus chez eux.',
  sendTitle: 'Peut-on envoyer depuis une adresse plus ?',
  sendIntro: 'Cela dépend du fournisseur, et c’est sur ce point que beaucoup de guides se trompent :',
  sendItems: [
    '**Microsoft 365 :** non. [La documentation de Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) indique que les utilisateurs ne peuvent pas envoyer de messages depuis une adresse plus.',
    '**Proton Mail :** oui. Les réponses à une adresse plus partent de cette adresse par défaut.',
    '**Fastmail :** oui, après avoir ajouté l’adresse dans vos paramètres.',
    '**Gmail :** Google ne le documente pas. Certains guides ajoutent l’adresse plus dans [Envoyer des e-mails en tant que](https://support.google.com/mail/answer/22370), qui accepte jusqu’à 99 adresses. Google a annoncé que cette fonction ne marchera plus pour les adresses tierces à partir de janvier 2027. Les adresses que vous possédez dans Gmail ne sont pas concernées.',
  ],
  usesTitle: 'À quoi servent les adresses plus et quelles sont leurs limites',
  usesParas: [
    'On les utilise pour trier les messages dans des dossiers et pour repérer qui a partagé son adresse. Les développeurs s’en servent aussi pour tester des formulaires d’inscription avec plusieurs comptes qui arrivent dans une seule boîte. Si du spam arrive sur `marie+chaussures@gmail.com`, vous savez d’où il vient.',
    'Voici les limites à connaître avant de compter dessus :',
  ],
  usesLimits: [
    'Certains sites refusent le signe plus. C’est un caractère valide, et la [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) demande aux programmes de l’accepter, mais Fastmail note que certains sites le considèrent à tort comme invalide.',
    'Une adresse plus ne cache pas votre vraie adresse. N’importe qui peut supprimer l’étiquette, et Google indique lui-même que ces adresses ne sont pas privées.',
    'Si vous voulez protéger votre vie privée, utilisez plutôt un alias de transfert. [Masquer mon adresse e-mail d’Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (avec iCloud+) et [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) créent des adresses aléatoires qui vous transfèrent les messages.',
  ],
  listTitle: 'Adresses plus et points dans une liste d’adresses mail',
  listParas: [
    'Si vous gérez un formulaire d’inscription, l’adressage plus a aussi un inconvénient. Une même personne peut s’inscrire avec `marie@gmail.com`, `m.arie@gmail.com` et `marie+2@gmail.com`, et votre liste compte alors trois personnes. Cela permet aussi des abus. Dans un cas [signalé par des chercheurs en sécurité](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), un groupe a utilisé des versions avec points d’adresses Gmail pour 48 demandes de carte de crédit et a obtenu au moins 65 000 $ de crédit frauduleux.',
    'L’onglet Nettoyer trouve ces groupes. Il suit des règles sûres pour chaque fournisseur :',
  ],
  listRules: [
    'Pour gmail.com et googlemail.com, il supprime les points et l’étiquette plus.',
    'Pour Outlook.com, iCloud, Proton, Fastmail et Yandex, il supprime seulement l’étiquette plus. Les points restent, car ils changent l’adresse chez ces fournisseurs.',
    'Il ne modifie pas les adresses Yahoo. Une adresse jetable Yahoo utilise un surnom qui n’est pas le nom du compte, on ne peut donc pas remonter au compte.',
    'Il ne modifie pas les domaines d’entreprise, sauf si vous cochez l’option. Chaque serveur de messagerie décide du sens du signe plus, et sur certains serveurs il fait partie d’un vrai nom de boîte.',
  ],
  listAfter: [
    'Utilisez le résultat pour repérer les doublons, pas pour réécrire les adresses. Continuez à écrire à l’adresse exacte que la personne a saisie, pour que ses filtres continuent de fonctionner. C’est pour cette raison que l’outil garde la première adresse de chaque groupe sans la modifier.',
    'Fusionner les doublons ne vous dit pas si une adresse fonctionne encore. Passez la liste nettoyée dans le [vérificateur d’emails en masse](/bulk-email-verifier) avant d’envoyer, ou vérifiez une adresse avec l’[outil de vérification d’adresse mail](/email-checker). Pour repérer les adresses de fournisseurs gratuits, consultez la [liste des fournisseurs de messagerie gratuite](/free-email-providers), et pour les boîtes jetables, le [vérificateur d’adresse mail jetable](/disposable-email-checker).',
  ],
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Qu’est-ce que l’adressage plus de Gmail ?',
      a: 'C’est une façon de créer des versions supplémentaires de votre adresse Gmail. Vous ajoutez un signe plus et un mot avant le @, par exemple marie+achats@gmail.com. Les messages envoyés à chacune de ces versions arrivent dans votre boîte de réception habituelle, et vous pouvez filtrer sur ce mot.',
    },
    {
      q: 'L’adressage plus fonctionne-t-il dans Outlook ?',
      a: 'Oui. Les adresses Outlook.com acceptent les adresses plus, et Microsoft active l’adressage plus par défaut pour les comptes professionnels Microsoft 365. Dans Microsoft 365, vous pouvez recevoir des messages sur une adresse plus, mais vous ne pouvez pas en envoyer depuis une adresse plus.',
    },
    {
      q: 'Les points comptent-ils dans une adresse Gmail ?',
      a: 'Pas pour les adresses gmail.com. Selon Google, un message envoyé à une version avec points de votre adresse vous parvient, donc marie.dupont@gmail.com et mariedupont@gmail.com sont une seule boîte. Dans les comptes Google Workspace sur un domaine d’entreprise, les points changent bien l’adresse.',
    },
    {
      q: 'Puis-je envoyer des messages depuis une adresse plus dans Gmail ?',
      a: 'Google ne le documente pas. Certains guides ajoutent l’adresse plus dans les paramètres de Gmail, sous Envoyer des e-mails en tant que, ce qui permet de la choisir comme adresse d’expédition. Microsoft 365 n’autorise pas du tout l’envoi depuis une adresse plus, tandis que Proton Mail répond depuis l’adresse plus par défaut.',
    },
    {
      q: 'Pourquoi un site refuse-t-il mon adresse plus ?',
      a: 'Parce que son formulaire d’inscription vérifie les adresses de façon trop stricte. Le signe plus est un caractère valide dans une adresse mail, et la RFC 3696 indique que les programmes doivent l’accepter. Fastmail note que certains sites le considèrent à tort comme invalide. Utilisez votre adresse habituelle sur ces sites.',
    },
    {
      q: 'Une adresse plus est-elle la même chose qu’un alias mail ?',
      a: 'Pas tout à fait. Une adresse plus est votre vraie adresse avec une étiquette, donc n’importe qui peut retirer l’étiquette et voir l’adresse de votre boîte. Un alias créé avec Masquer mon adresse e-mail d’Apple ou avec DuckDuckGo Email Protection est différent. C’est une adresse aléatoire qui vous transfère les messages et cache votre vraie adresse.',
    },
    {
      q: 'L’adressage plus fonctionne-t-il avec Google Workspace ?',
      a: 'Oui. L’exemple de Google lui-même utilise un domaine d’entreprise : cassy+news@solarmora.com. La différence avec gmail.com, c’est que les points font partie de l’adresse dans Workspace, donc seule la partie avec le plus est une étiquette.',
    },
    {
      q: 'Combien d’adresses plus puis-je créer ?',
      a: 'Google n’indique pas de nombre. La limite pratique est la longueur. La partie avant le @ peut compter au maximum 64 caractères, en incluant votre nom, le signe plus et l’étiquette.',
    },
  ],
  ctaHeadline: 'Sachez quelles adresses de votre liste fonctionnent encore',
}

const nl: PlusPageStrings = {
  metaTitle: 'Gmail-adressen met +: gratis plusadressen maken | Giggal.ai',
  ogTitle: 'Gmail-adressen met +: gratis plusadressen maken',
  description:
    'Maak Gmail-adressen met + zoals jij+winkelen@gmail.com, zie welke providers plusadressen ondersteunen en vind dubbele plus- en puntadressen in een lijst.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Tool voor Gmail-adressen met +',
  crumb: 'Gmail-adressen met +',
  appName: 'Tool voor Gmail-adressen met +',
  featureList: [
    'Plusadressen maken voor elk e-mailadres',
    'Laat zien of je e-mailprovider plusadressen ondersteunt',
    'Vindt plus- en puntversies van hetzelfde Gmail-adres in een lijst',
    'Houdt het eerste adres van elke groep precies zoals het is geschreven',
    'Kopieer of download de lijst zonder dubbele adressen',
  ],
  h1: 'Gmail-adressen met +',
  heroIntro:
    'Maak plusadressen zoals sanne+winkelen@gmail.com die allemaal in je inbox aankomen. Of haal uit een lijst de plus- en puntversies die bij dezelfde persoon horen.',
  howTitle: 'Zo gebruik je de plusadresgenerator',
  howSteps: [
    'Typ op het tabblad Plusadressen maken je e-mailadres. Een Gmail-adres werkt, en de meeste andere adressen ook.',
    'Voeg een tag toe voor elke plek waar je het adres gebruikt, zoals nieuwsbrieven of winkelen. Scheid tags met komma’s.',
    'Kopieer de plusadressen. De tool laat ook zien of je provider ze aflevert.',
    'Wil je een lijst opschonen? Ga naar het tabblad Lijst opschonen en plak de adressen. De tool groepeert de adressen die in dezelfde inbox aankomen en geeft je de lijst zonder dubbele adressen.',
  ],
  imageAlt: 'Illustratie van meerdere Gmail-plusadressen met verschillende tags die in één inbox aankomen.',
  whatTitle: 'Wat is een plusadres?',
  whatParas: [
    'Bij plus addressing zet je een plusteken en een tag in het deel van een e-mailadres vóór de @. Mail naar `sanne+reizen@gmail.com` komt in dezelfde inbox aan als mail naar `sanne@gmail.com`. De tag blijft zichtbaar, dus je kunt erop sorteren of filteren.',
    'De standaarden noemen het sub-addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) gebruikt het plusteken als voorbeeld, maar laat het scheidingsteken over aan elk mailsysteem. Dat past bij een bredere regel in [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): alleen de ontvangende server bepaalt wat het deel vóór de @ betekent. Of een plusadres werkt, hangt dus helemaal af van de provider die de inbox host.',
  ],
  gmailTitle: 'Zo werken Gmail-adressen met +',
  gmailParas: [
    '[De helppagina van Google](https://support.google.com/mail/answer/12096) beschrijft het in één zin: zet een plusteken en een willekeurig woord vóór de @. Elke versie komt in je inbox aan. Je hoeft niets in te stellen, en Google noemt geen limiet voor het aantal adressen dat je gebruikt.',
    'Gmail negeert ook punten. Voor een gmail.com-adres gaat [mail naar elke versie met punten](https://support.google.com/mail/answer/7436150) naar dezelfde persoon, dus `s.a.n.n.e@gmail.com` is `sanne@gmail.com`. En [gmail.com en googlemail.com](https://support.google.com/mail/answer/10313) zijn dezelfde inbox.',
    'Google Workspace-accounts op een bedrijfsdomein ondersteunen ook plusadressen. Punten werken daar anders: [volgens Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) worden punten in Workspace-gebruikersnamen niet genegeerd, dus `sanne.jansen@bedrijf.nl` en `sannejansen@bedrijf.nl` kunnen twee verschillende personen zijn.',
  ],
  filterTitle: 'Mail naar een plusadres filteren',
  filterPara:
    'Maak een filter in Gmail en zet het volledige plusadres in het veld Aan. Je kunt er ook op zoeken met de [operator deliveredto:](https://support.google.com/mail/answer/7190), bijvoorbeeld `deliveredto:sanne+reizen@gmail.com`. Kijk naar Aan of Delivered-To, niet naar Van. De tag staat in het adres waar de mail naartoe is gestuurd.',
  providersTitle: 'Welke e-mailproviders ondersteunen plusadressen',
  providersIntro:
    'De meeste grote providers leveren plusadressen af, maar niet allemaal documenteren ze dat. Rijen met “getest” zijn gebaseerd op onafhankelijke tests en niet op de eigen pagina’s van de provider.',
  thProvider: 'Provider',
  thSupport: 'Plusadressen',
  thNotes: 'Opmerkingen',
  testedBadge: 'getest',
  providerRows: {
    Gmail: { supports: 'Ja', notes: 'Punten in de gebruikersnaam worden genegeerd. gmail.com en googlemail.com zijn dezelfde inbox.' },
    'Google Workspace': { supports: 'Ja', notes: 'Werkt op bedrijfsdomeinen. Punten horen bij het adres.' },
    'Microsoft 365': { supports: 'Ja, standaard aan', notes: 'Alleen ontvangen. Een beheerder kan het voor de organisatie uitzetten.' },
    'Outlook.com': { supports: 'Ja', notes: 'Ook voor hotmail.com- en live.com-adressen. Punten horen bij het adres.' },
    'Proton Mail': { supports: 'Ja', notes: 'Ook in het gratis abonnement. Antwoorden worden vanaf het plusadres verstuurd.' },
    Fastmail: { supports: 'Ja', notes: 'Een tag die gelijk is aan een mapnaam zet de mail in die map. Subdomeinadressen werken ook.' },
    'iCloud Mail': { supports: 'Ja, in tests', notes: 'Werkt voor icloud.com en me.com in onafhankelijke tests. Apple documenteert het niet.' },
    'Yandex Mail': { supports: 'Ja', notes: 'Adressen zoals login+woord@yandex.ru.' },
    'Yahoo Mail': { supports: 'Niet bevestigd', notes: 'Yahoo documenteert in plaats daarvan wegwerpadressen met een streepje: bijnaam-trefwoord@yahoo.com.' },
  },
  providersAfter:
    'Voor AOL, Zoho Mail, GMX en mail.com vonden we geen documentatie, niet voor en niet tegen. Stuur jezelf een testmail voordat je daar op een plusadres vertrouwt.',
  sendTitle: 'Kun je verzenden vanaf een plusadres?',
  sendIntro: 'Dat hangt af van de provider, en op dit punt maken veel handleidingen een fout:',
  sendItems: [
    '**Microsoft 365:** nee. [De documentatie van Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) zegt dat gebruikers geen e-mail kunnen verzenden vanaf plusadressen.',
    '**Proton Mail:** ja. Antwoorden op een plusadres worden standaard vanaf dat adres verstuurd.',
    '**Fastmail:** ja, nadat je het adres in je instellingen hebt toegevoegd.',
    '**Gmail:** Google documenteert het niet. Sommige handleidingen voegen het plusadres toe onder [E-mail verzenden als](https://support.google.com/mail/answer/22370), waarmee tot 99 adressen mogelijk zijn. Google heeft aangekondigd dat E-mail verzenden als vanaf januari 2027 niet meer werkt voor adressen van derden. Adressen die je zelf in Gmail hebt, vallen daar niet onder.',
  ],
  usesTitle: 'Waarvoor plusadressen handig zijn, en hun grenzen',
  usesParas: [
    'Mensen gebruiken ze om mail in mappen te sorteren en om te zien wie hun adres heeft gedeeld. Ontwikkelaars gebruiken ze ook om aanmeldformulieren te testen met meerdere accounts die in één inbox aankomen. Komt er spam binnen op `sanne+schoenwinkel@gmail.com`, dan weet je waar die vandaan komt.',
    'Er zijn grenzen die je moet kennen voordat je erop vertrouwt:',
  ],
  usesLimits: [
    'Sommige websites weigeren het plusteken. Het is een geldig teken, en [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) zegt dat programma’s het moeten accepteren, maar Fastmail merkt op dat sommige sites het ten onrechte als ongeldig zien.',
    'Een plusadres verbergt je echte adres niet. Iedereen kan de tag weghalen, en Google zegt zelf dat deze adressen niet privé zijn.',
    'Wil je privacy? Gebruik dan een doorstuuralias. [Verberg mijn e-mailadres van Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (met iCloud+) en [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) maken willekeurige adressen die mail naar je doorsturen.',
  ],
  listTitle: 'Plusadressen en punten in een e-maillijst',
  listParas: [
    'Heb je een aanmeldformulier, dan heeft plus addressing ook een nadeel. Eén persoon kan zich aanmelden als `sanne@gmail.com`, `s.anne@gmail.com` en `sanne+2@gmail.com`, en je lijst telt dan drie personen. Het maakt ook misbruik mogelijk. In één geval dat [door beveiligingsonderzoekers is gemeld](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), gebruikte een groep versies met punten van Gmail-adressen voor 48 creditcardaanvragen en kreeg zo minstens US$ 65.000 aan frauduleus krediet.',
    'Het tabblad Lijst opschonen vindt deze groepen. Het volgt regels die voor elke provider veilig zijn:',
  ],
  listRules: [
    'Voor gmail.com en googlemail.com verwijdert het de punten en de plustag.',
    'Voor Outlook.com, iCloud, Proton, Fastmail en Yandex verwijdert het alleen de plustag. Punten blijven staan, omdat ze daar het adres veranderen.',
    'Yahoo-adressen laat het zoals ze zijn. Een Yahoo-wegwerpadres gebruikt een bijnaam die niet de accountnaam is, dus het is niet terug te leiden naar het account.',
    'Bedrijfsdomeinen laat het zoals ze zijn, tenzij je de optie aanvinkt. Elke mailserver bepaalt wat een plusteken betekent, en op sommige servers hoort het bij een echte mailboxnaam.',
  ],
  listAfter: [
    'Gebruik het resultaat om dubbele adressen te vinden, niet om adressen te herschrijven. Blijf mailen naar het adres precies zoals de persoon het heeft ingevuld, zodat de filters van die persoon blijven werken. Daarom houdt de tool het eerste adres van elke groep ongewijzigd.',
    'Dubbele adressen samenvoegen zegt niet of een adres nog werkt. Haal de opgeschoonde lijst door de [bulk email checker](/bulk-email-verifier) voordat je verstuurt, of controleer één adres met de [email checker](/email-checker). Wil je adressen van gratis providers markeren, bekijk dan de [lijst met gratis e-mailproviders](/free-email-providers), en voor wegwerpinboxen de [checker voor wegwerp e-mailadressen](/disposable-email-checker).',
  ],
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Wat is Gmail plus addressing?',
      a: 'Het is een manier om extra versies van je Gmail-adres te maken. Je zet een plusteken en een woord vóór de @, zoals sanne+winkelen@gmail.com. Mail naar elk van die adressen komt in je gewone inbox aan, en je kunt filteren op het woord.',
    },
    {
      q: 'Werken plusadressen in Outlook?',
      a: 'Ja. Outlook.com-adressen accepteren plusadressen, en Microsoft zet plus addressing standaard aan voor zakelijke Microsoft 365-accounts. In Microsoft 365 kun je mail ontvangen op een plusadres, maar je kunt er niet vanaf verzenden.',
    },
    {
      q: 'Maken punten verschil in een Gmail-adres?',
      a: 'Niet voor gmail.com-adressen. Google zegt dat mail naar elke versie met punten van je adres bij jou aankomt, dus sanne.jansen@gmail.com en sannejansen@gmail.com zijn één inbox. In Google Workspace-accounts op een bedrijfsdomein veranderen punten het adres wel.',
    },
    {
      q: 'Kan ik in Gmail e-mail verzenden vanaf een plusadres?',
      a: 'Google documenteert het niet. Sommige handleidingen voegen het plusadres toe in de instellingen van Gmail onder E-mail verzenden als, zodat je het als afzenderadres kunt kiezen. Microsoft 365 staat verzenden vanaf plusadressen helemaal niet toe, terwijl Proton Mail standaard vanaf het plusadres antwoordt.',
    },
    {
      q: 'Waarom weigert een website mijn plusadres?',
      a: 'Omdat het aanmeldformulier adressen te streng controleert. Het plusteken is een geldig teken in een e-mailadres, en RFC 3696 zegt dat programma’s het moeten accepteren. Fastmail merkt op dat sommige websites het ten onrechte als ongeldig zien. Gebruik op die sites je gewone adres.',
    },
    {
      q: 'Is een plusadres hetzelfde als een e-mailalias?',
      a: 'Niet helemaal. Een plusadres is je echte adres met een tag, dus iedereen kan de tag weghalen en je inboxadres zien. Een alias van Verberg mijn e-mailadres van Apple of van DuckDuckGo Email Protection is anders. Dat is een willekeurig adres dat mail naar je doorstuurt en je echte adres verbergt.',
    },
    {
      q: 'Werken plusadressen met Google Workspace?',
      a: 'Ja. Het voorbeeld van Google zelf gebruikt een bedrijfsdomein: cassy+news@solarmora.com. Het verschil met gmail.com is dat punten in Workspace bij het adres horen, dus alleen het plusdeel is een tag.',
    },
    {
      q: 'Hoeveel plusadressen kan ik maken?',
      a: 'Google noemt geen aantal. De praktische grens is de lengte. Het deel vóór de @ mag maximaal 64 tekens lang zijn, inclusief je naam, het plusteken en de tag.',
    },
  ],
  ctaHeadline: 'Weet welke adressen op je lijst nog werken',
}

const pl: PlusPageStrings = {
  metaTitle: 'Adresy Gmail z plusem: darmowy generator adresów | Giggal.ai',
  ogTitle: 'Adresy Gmail z plusem: darmowy generator adresów',
  description:
    'Twórz adresy Gmail z plusem, np. ty+zakupy@gmail.com, sprawdź, którzy dostawcy obsługują plus addressing, i znajdź na liście duplikaty z plusem i kropkami.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Narzędzie do adresów Gmail z plusem',
  crumb: 'Adresy Gmail z plusem',
  appName: 'Narzędzie do adresów Gmail z plusem',
  featureList: [
    'Tworzenie adresów z plusem dla dowolnego adresu e-mail',
    'Pokazuje, czy twój dostawca poczty obsługuje adresy z plusem',
    'Znajduje na liście wersje z plusem i kropkami tego samego adresu Gmail',
    'Zachowuje pierwszy adres z każdej grupy dokładnie w zapisanej formie',
    'Kopiowanie lub pobieranie listy bez duplikatów',
  ],
  h1: 'Adresy Gmail z plusem',
  heroIntro:
    'Twórz adresy z plusem, takie jak anna+zakupy@gmail.com, które trafiają do twojej skrzynki odbiorczej. Możesz też oczyścić listę z wersji z plusem i kropkami, które należą do tej samej osoby.',
  howTitle: 'Jak korzystać z generatora adresów z plusem',
  howSteps: [
    'Na karcie Utwórz wpisz swój adres e-mail. Działa adres Gmail i większość innych adresów.',
    'Dodaj tag dla każdego miejsca, w którym użyjesz adresu, np. newsletter albo zakupy. Oddziel tagi przecinkami.',
    'Skopiuj adresy z plusem. Narzędzie pokazuje też, czy twój dostawca je dostarcza.',
    'Aby oczyścić listę, przejdź na kartę Oczyść i wklej adresy. Narzędzie grupuje adresy, które trafiają do tej samej skrzynki, i daje ci listę bez duplikatów.',
  ],
  imageAlt: 'Ilustracja kilku adresów Gmail z plusem i różnymi tagami, które trafiają do jednej skrzynki odbiorczej.',
  whatTitle: 'Czym jest plus addressing?',
  whatParas: [
    'Plus addressing to dodanie znaku plus i tagu do części adresu e-mail przed @. Wiadomość wysłana na `anna+wyjazdy@gmail.com` trafia do tej samej skrzynki co wiadomość wysłana na `anna@gmail.com`. Tag pozostaje widoczny, więc możesz według niego sortować lub filtrować pocztę.',
    'Standardy nazywają to sub-addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) podaje znak plus jako przykład, ale wybór separatora zostawia każdemu systemowi pocztowemu. To zgodne z szerszą zasadą z [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): tylko serwer odbiorcy decyduje, co znaczy część adresu przed @. Czy adres z plusem działa, zależy więc wyłącznie od dostawcy, który obsługuje skrzynkę.',
  ],
  gmailTitle: 'Jak działają adresy Gmail z plusem',
  gmailParas: [
    '[Strona pomocy Google](https://support.google.com/mail/answer/12096) opisuje to w jednym zdaniu: dodaj znak plus i dowolne słowo przed @. Każda wersja trafia do twojej skrzynki odbiorczej. Nie musisz niczego konfigurować, a Google nie podaje limitu liczby takich adresów.',
    'Gmail ignoruje też kropki. W przypadku adresu gmail.com [wiadomości wysłane na dowolną wersję z kropkami](https://support.google.com/mail/answer/7436150) trafiają do tej samej osoby, więc `a.n.n.a@gmail.com` to `anna@gmail.com`. A [gmail.com i googlemail.com](https://support.google.com/mail/answer/10313) to ta sama skrzynka.',
    'Konta Google Workspace w domenie firmowej też obsługują adresy z plusem. Kropki działają tam inaczej: [według Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups) kropki w nazwach użytkowników Workspace nie są ignorowane, więc `anna.nowak@firma.pl` i `annanowak@firma.pl` mogą należeć do dwóch różnych osób.',
  ],
  filterTitle: 'Filtrowanie poczty wysłanej na adres z plusem',
  filterPara:
    'Utwórz filtr w Gmailu i wpisz pełny adres z plusem w polu Do. Możesz go też wyszukać za pomocą [operatora deliveredto:](https://support.google.com/mail/answer/7190), np. `deliveredto:anna+wyjazdy@gmail.com`. Sprawdzaj pole Do lub Delivered-To, a nie Od. Tag jest w adresie, na który wysłano wiadomość.',
  providersTitle: 'Którzy dostawcy poczty obsługują adresy z plusem',
  providersIntro:
    'Większość dużych dostawców dostarcza wiadomości na adresy z plusem, ale nie wszyscy to dokumentują. Wiersze oznaczone jako „testowane” opierają się na niezależnych testach, a nie na stronach dostawcy.',
  thProvider: 'Dostawca',
  thSupport: 'Adresy z plusem',
  thNotes: 'Uwagi',
  testedBadge: 'testowane',
  providerRows: {
    Gmail: { supports: 'Tak', notes: 'Kropki w nazwie użytkownika są ignorowane. gmail.com i googlemail.com to ta sama skrzynka.' },
    'Google Workspace': { supports: 'Tak', notes: 'Działa w domenach firmowych. Kropki są częścią adresu.' },
    'Microsoft 365': { supports: 'Tak, domyślnie włączone', notes: 'Tylko odbieranie. Administrator może to wyłączyć dla organizacji.' },
    'Outlook.com': { supports: 'Tak', notes: 'Również dla adresów hotmail.com i live.com. Kropki są częścią adresu.' },
    'Proton Mail': { supports: 'Tak', notes: 'Także w darmowym planie. Odpowiedzi wychodzą z adresu z plusem.' },
    Fastmail: { supports: 'Tak', notes: 'Tag zgodny z nazwą folderu umieszcza wiadomość w tym folderze. Działają też adresy w subdomenie.' },
    'iCloud Mail': { supports: 'Tak, w testach', notes: 'Działa dla icloud.com i me.com w niezależnych testach. Apple tego nie dokumentuje.' },
    'Yandex Mail': { supports: 'Tak', notes: 'Adresy typu login+slowo@yandex.ru.' },
    'Yahoo Mail': { supports: 'Niepotwierdzone', notes: 'Yahoo dokumentuje zamiast tego adresy jednorazowe z łącznikiem: pseudonim-slowo@yahoo.com.' },
  },
  providersAfter:
    'Dla AOL, Zoho Mail, GMX i mail.com nie znaleźliśmy dokumentacji, ani na tak, ani na nie. Zanim zaczniesz polegać na adresie z plusem u tych dostawców, wyślij do siebie testową wiadomość.',
  sendTitle: 'Czy można wysyłać z adresu z plusem?',
  sendIntro: 'To zależy od dostawcy i właśnie w tym miejscu wiele poradników się myli:',
  sendItems: [
    '**Microsoft 365:** nie. [Dokumentacja Microsoftu](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) mówi, że użytkownicy nie mogą wysyłać wiadomości z adresów z plusem.',
    '**Proton Mail:** tak. Odpowiedzi na adres z plusem domyślnie wychodzą z tego adresu.',
    '**Fastmail:** tak, po dodaniu adresu w ustawieniach.',
    '**Gmail:** Google tego nie dokumentuje. Niektóre poradniki dodają adres z plusem w opcji [Wyślij pocztę jako (Send mail as)](https://support.google.com/mail/answer/22370), która pozwala na maksymalnie 99 adresów. Google ogłosiło, że od stycznia 2027 r. ta opcja przestanie działać dla adresów zewnętrznych. Nie dotyczy to adresów, które masz w Gmailu.',
  ],
  usesTitle: 'Do czego przydają się adresy z plusem i jakie mają ograniczenia',
  usesParas: [
    'Ludzie używają ich do sortowania poczty w folderach i do sprawdzania, kto udostępnił ich adres. Programiści używają ich też do testowania formularzy rejestracji na kilku kontach, których poczta trafia do jednej skrzynki. Jeśli spam przyjdzie na `anna+obuwie@gmail.com`, wiesz, skąd pochodzi.',
    'Zanim zaczniesz na nich polegać, poznaj ich ograniczenia:',
  ],
  usesLimits: [
    'Niektóre strony odrzucają znak plus. To prawidłowy znak, a [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) każe programom go akceptować, ale Fastmail zauważa, że niektóre strony błędnie uznają go za nieprawidłowy.',
    'Adres z plusem nie ukrywa twojego prawdziwego adresu. Każdy może usunąć tag, a samo Google mówi, że te adresy nie są prywatne.',
    'Jeśli zależy ci na prywatności, użyj aliasu przekierowującego. [Ukryj mój adres e-mail od Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (z iCloud+) i [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) tworzą losowe adresy, które przekazują pocztę do ciebie.',
  ],
  listTitle: 'Adresy z plusem i kropki na liście adresów e-mail',
  listParas: [
    'Jeśli prowadzisz formularz zapisu, plus addressing ma też wadę. Jedna osoba może zapisać się jako `anna@gmail.com`, `a.nna@gmail.com` i `anna+2@gmail.com`, a twoja lista liczy wtedy trzy osoby. To umożliwia też nadużycia. W jednym przypadku [opisanym przez badaczy bezpieczeństwa](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html) grupa użyła wersji adresów Gmail z kropkami do 48 wniosków o karty kredytowe i uzyskała co najmniej 65 000 USD kredytu w wyniku oszustwa.',
    'Karta Oczyść znajduje takie grupy. Stosuje reguły bezpieczne dla każdego dostawcy:',
  ],
  listRules: [
    'Dla gmail.com i googlemail.com usuwa kropki i tag po plusie.',
    'Dla Outlook.com, iCloud, Proton, Fastmail i Yandex usuwa tylko tag po plusie. Kropki zostają, bo u tych dostawców zmieniają adres.',
    'Nie zmienia adresów Yahoo. Adres jednorazowy Yahoo używa pseudonimu, który nie jest nazwą konta, więc nie da się go powiązać z kontem.',
    'Nie zmienia adresów w domenach firmowych, chyba że zaznaczysz tę opcję. Każdy serwer pocztowy sam decyduje, co znaczy znak plus, a na niektórych serwerach jest on częścią prawdziwej nazwy skrzynki.',
  ],
  listAfter: [
    'Używaj wyniku do znajdowania duplikatów, a nie do zmieniania adresów. Wysyłaj dalej na adres dokładnie w takiej formie, w jakiej podała go dana osoba, aby jej filtry nadal działały. Dlatego narzędzie zostawia pierwszy adres z każdej grupy bez zmian.',
    'Połączenie duplikatów nie mówi, czy adres nadal działa. Przed wysyłką sprawdź oczyszczoną listę w [narzędziu do masowej weryfikacji e-mail](/bulk-email-verifier) albo sprawdź jeden adres w [weryfikatorze e-mail](/email-checker). Aby oznaczyć adresy od darmowych dostawców, zobacz [listę darmowych dostawców poczty](/free-email-providers), a skrzynki jednorazowe wykryjesz narzędziem [Sprawdź jednorazowy email](/disposable-email-checker).',
  ],
  faqTitle: 'Najczęściej zadawane pytania',
  faqs: [
    {
      q: 'Czym jest plus addressing w Gmailu?',
      a: 'To sposób na tworzenie dodatkowych wersji adresu Gmail. Dodajesz znak plus i słowo przed @, np. anna+zakupy@gmail.com. Wiadomości wysłane na każdą z tych wersji trafiają do twojej zwykłej skrzynki odbiorczej, a słowo możesz wykorzystać w filtrach.',
    },
    {
      q: 'Czy adresy z plusem działają w Outlooku?',
      a: 'Tak. Adresy Outlook.com przyjmują adresy z plusem, a Microsoft domyślnie włącza plus addressing w firmowych kontach Microsoft 365. W Microsoft 365 możesz odbierać pocztę na adres z plusem, ale nie możesz z niego wysyłać.',
    },
    {
      q: 'Czy kropki mają znaczenie w adresie Gmail?',
      a: 'Nie w adresach gmail.com. Google podaje, że poczta wysłana na dowolną wersję twojego adresu z kropkami trafia do ciebie, więc anna.nowak@gmail.com i annanowak@gmail.com to jedna skrzynka. W kontach Google Workspace w domenie firmowej kropki zmieniają adres.',
    },
    {
      q: 'Czy mogę wysyłać pocztę z adresu z plusem w Gmailu?',
      a: 'Google tego nie dokumentuje. Niektóre poradniki dodają adres z plusem w ustawieniach Gmaila w opcji Wyślij pocztę jako, co pozwala wybrać go jako adres nadawcy. Microsoft 365 w ogóle nie pozwala wysyłać z adresów z plusem, a Proton Mail domyślnie odpowiada z adresu z plusem.',
    },
    {
      q: 'Dlaczego strona odrzuca mój adres z plusem?',
      a: 'Ponieważ jej formularz rejestracji sprawdza adresy zbyt rygorystycznie. Znak plus jest prawidłowym znakiem w adresie e-mail, a RFC 3696 mówi, że programy powinny go akceptować. Fastmail zauważa, że niektóre strony błędnie uznają go za nieprawidłowy. Na takich stronach używaj swojego zwykłego adresu.',
    },
    {
      q: 'Czy adres z plusem to to samo co alias e-mail?',
      a: 'Nie do końca. Adres z plusem to twój prawdziwy adres z tagiem, więc każdy może usunąć tag i zobaczyć adres twojej skrzynki. Alias z usługi Ukryj mój adres e-mail od Apple lub z DuckDuckGo Email Protection działa inaczej. To losowy adres, który przekazuje pocztę do ciebie i ukrywa twój prawdziwy adres.',
    },
    {
      q: 'Czy plus addressing działa w Google Workspace?',
      a: 'Tak. Przykład podany przez samo Google używa domeny firmowej: cassy+news@solarmora.com. Różnica wobec gmail.com polega na tym, że w Workspace kropki są częścią adresu, więc tagiem jest tylko część z plusem.',
    },
    {
      q: 'Ile adresów z plusem mogę utworzyć?',
      a: 'Google nie podaje liczby. Praktycznym limitem jest długość. Część przed @ może mieć maksymalnie 64 znaki, łącznie z twoją nazwą, znakiem plus i tagiem.',
    },
  ],
  ctaHeadline: 'Sprawdź, które adresy na twojej liście nadal działają',
}

const id: PlusPageStrings = {
  metaTitle: 'Alamat Gmail dengan +: Generator Alamat Plus Gratis | Giggal.ai',
  ogTitle: 'Alamat Gmail dengan +: Generator Alamat Plus Gratis',
  description:
    'Buat alamat Gmail dengan + seperti anda+belanja@gmail.com, cek penyedia yang mendukung plus addressing, dan temukan duplikat plus dan titik di daftar email.',
  ogLocale: 'id_ID',
  ogImage: '/tools/gmail-plus-addressing-og-v2.webp',
  ogAlt: 'Alat alamat Gmail dengan +',
  crumb: 'Alamat Gmail dengan +',
  appName: 'Alat Alamat Gmail dengan +',
  featureList: [
    'Membuat alamat plus untuk alamat email apa pun',
    'Menunjukkan apakah penyedia email Anda mendukung alamat plus',
    'Menemukan versi plus dan titik dari alamat Gmail yang sama di dalam daftar',
    'Menyimpan alamat pertama setiap grup persis seperti yang ditulis',
    'Menyalin atau mengunduh daftar tanpa duplikat',
  ],
  h1: 'Alamat Gmail dengan +',
  heroIntro:
    'Buat alamat plus seperti budi+belanja@gmail.com yang semuanya masuk ke kotak masuk Anda. Atau bersihkan daftar dari versi plus dan titik yang dimiliki orang yang sama.',
  howTitle: 'Cara menggunakan generator alamat plus',
  howSteps: [
    'Di tab Buat, ketik alamat email Anda. Alamat Gmail bisa dipakai, begitu juga sebagian besar alamat lain.',
    'Tambahkan tag untuk setiap tempat Anda akan memakai alamat itu, misalnya newsletter atau belanja. Pisahkan tag dengan koma.',
    'Salin alamat plus tersebut. Alat ini juga memberi tahu apakah penyedia Anda mengirimkan email ke alamat itu.',
    'Untuk membersihkan daftar, pindah ke tab Bersihkan dan tempel alamatnya. Alat ini mengelompokkan alamat yang masuk ke kotak masuk yang sama dan memberi Anda daftar tanpa duplikat.',
  ],
  imageAlt: 'Ilustrasi beberapa alamat plus Gmail dengan tag berbeda yang masuk ke satu kotak masuk.',
  whatTitle: 'Apa itu plus addressing?',
  whatParas: [
    'Plus addressing berarti menambahkan tanda plus dan sebuah tag pada bagian alamat email sebelum @. Email ke `budi+liburan@gmail.com` masuk ke kotak masuk yang sama dengan email ke `budi@gmail.com`. Tag tetap terlihat, jadi Anda bisa mengurutkan atau memfilter email berdasarkan tag itu.',
    'Standar email menyebutnya sub-addressing. [RFC 5233](https://www.rfc-editor.org/rfc/rfc5233) memakai tanda plus sebagai contoh, tetapi menyerahkan pilihan pemisahnya kepada setiap sistem email. Ini sesuai dengan aturan yang lebih luas di [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321): hanya server penerima yang menentukan arti bagian sebelum @. Jadi, berfungsi atau tidaknya alamat plus sepenuhnya bergantung pada penyedia yang mengelola kotak masuk itu.',
  ],
  gmailTitle: 'Cara kerja alamat Gmail dengan +',
  gmailParas: [
    '[Halaman bantuan Google](https://support.google.com/mail/answer/12096) menjelaskannya dalam satu kalimat: tambahkan tanda plus dan kata apa saja sebelum @. Setiap versi masuk ke kotak masuk Anda. Anda tidak perlu mengatur apa pun, dan Google tidak menyebut batas jumlah alamat yang bisa Anda pakai.',
    'Gmail juga mengabaikan titik. Untuk alamat gmail.com, [email yang dikirim ke versi bertitik mana pun](https://support.google.com/mail/answer/7436150) sampai ke orang yang sama, jadi `b.u.d.i@gmail.com` sama dengan `budi@gmail.com`. Selain itu, [gmail.com dan googlemail.com](https://support.google.com/mail/answer/10313) adalah kotak masuk yang sama.',
    'Akun Google Workspace di domain perusahaan juga mendukung alamat plus. Titik bekerja berbeda di sana: [menurut Google](https://knowledge.workspace.google.com/admin/users/name-guidelines-for-users-and-groups), titik pada nama pengguna Workspace tidak diabaikan, jadi `budi.santoso@perusahaan.co.id` dan `budisantoso@perusahaan.co.id` bisa jadi milik dua orang yang berbeda.',
  ],
  filterTitle: 'Memfilter email yang dikirim ke alamat plus',
  filterPara:
    'Buat filter Gmail dan isi kolom Kepada dengan alamat plus lengkap. Anda juga bisa mencarinya dengan [operator deliveredto:](https://support.google.com/mail/answer/7190), misalnya `deliveredto:budi+liburan@gmail.com`. Lihat kolom Kepada atau Delivered-To, bukan Dari. Tag ada di alamat tujuan email tersebut.',
  providersTitle: 'Penyedia email mana yang mendukung plus addressing',
  providersIntro:
    'Sebagian besar penyedia besar mengirimkan email ke alamat plus, tetapi tidak semuanya mendokumentasikannya. Baris yang bertanda "diuji" berdasarkan pengujian independen, bukan halaman resmi penyedia.',
  thProvider: 'Penyedia',
  thSupport: 'Alamat plus',
  thNotes: 'Catatan',
  testedBadge: 'diuji',
  providerRows: {
    Gmail: { supports: 'Ya', notes: 'Titik di nama pengguna diabaikan. gmail.com dan googlemail.com adalah kotak masuk yang sama.' },
    'Google Workspace': { supports: 'Ya', notes: 'Berfungsi di domain perusahaan. Titik adalah bagian dari alamat.' },
    'Microsoft 365': { supports: 'Ya, aktif secara default', notes: 'Hanya untuk menerima. Admin bisa menonaktifkannya untuk organisasi.' },
    'Outlook.com': { supports: 'Ya', notes: 'Juga untuk alamat hotmail.com dan live.com. Titik adalah bagian dari alamat.' },
    'Proton Mail': { supports: 'Ya', notes: 'Termasuk paket gratis. Balasan dikirim dari alamat plus.' },
    Fastmail: { supports: 'Ya', notes: 'Tag yang sama dengan nama folder akan menyimpan email di folder itu. Alamat subdomain juga berfungsi.' },
    'iCloud Mail': { supports: 'Ya, dalam pengujian', notes: 'Berfungsi untuk icloud.com dan me.com dalam pengujian independen. Apple tidak mendokumentasikannya.' },
    'Yandex Mail': { supports: 'Ya', notes: 'Alamat seperti login+kata@yandex.ru.' },
    'Yahoo Mail': { supports: 'Belum dipastikan', notes: 'Yahoo justru mendokumentasikan alamat sekali pakai dengan tanda hubung: namapanggilan-katakunci@yahoo.com.' },
  },
  providersAfter:
    'Untuk AOL, Zoho Mail, GMX, dan mail.com, kami tidak menemukan dokumentasi yang mendukung maupun menolaknya. Kirim email uji ke diri sendiri sebelum Anda mengandalkan alamat plus di sana.',
  sendTitle: 'Bisakah Anda mengirim email dari alamat plus?',
  sendIntro: 'Tergantung penyedianya, dan di bagian inilah banyak panduan keliru:',
  sendItems: [
    '**Microsoft 365:** tidak. [Dokumentasi Microsoft](https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/plus-addressing-in-exchange-online) menyatakan bahwa pengguna tidak bisa mengirim email dari alamat plus.',
    '**Proton Mail:** bisa. Balasan ke alamat plus dikirim dari alamat itu secara default.',
    '**Fastmail:** bisa, setelah Anda menambahkan alamat itu di pengaturan.',
    '**Gmail:** Google tidak mendokumentasikannya. Beberapa panduan menambahkan alamat plus di [Kirim email sebagai](https://support.google.com/mail/answer/22370), yang memungkinkan hingga 99 alamat. Google telah mengumumkan bahwa Kirim email sebagai tidak akan berfungsi lagi untuk alamat pihak ketiga mulai Januari 2027. Alamat yang Anda miliki di Gmail tidak terpengaruh.',
  ],
  usesTitle: 'Kegunaan alamat plus dan batasannya',
  usesParas: [
    'Orang memakainya untuk memilah email ke dalam folder dan untuk mengetahui siapa yang membagikan alamat mereka. Developer juga memakainya untuk menguji formulir pendaftaran dengan beberapa akun yang masuk ke satu kotak masuk. Jika spam datang ke `budi+tokosepatu@gmail.com`, Anda tahu asalnya.',
    'Ada batasan yang perlu Anda ketahui sebelum mengandalkannya:',
  ],
  usesLimits: [
    'Beberapa situs menolak tanda plus. Tanda ini adalah karakter yang valid, dan [RFC 3696](https://www.rfc-editor.org/rfc/rfc3696) meminta program untuk menerimanya, tetapi Fastmail mencatat bahwa beberapa situs keliru menganggapnya tidak valid.',
    'Alamat plus tidak menyembunyikan alamat asli Anda. Siapa pun bisa menghapus tagnya, dan Google sendiri menyatakan bahwa alamat ini tidak bersifat pribadi.',
    'Jika Anda menginginkan privasi, gunakan alias penerusan. [Sembunyikan Email Saya dari Apple](https://support.apple.com/en-gb/guide/icloud/mm1a876f7aed/icloud) (dengan iCloud+) dan [DuckDuckGo Email Protection](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection) membuat alamat acak yang meneruskan email kepada Anda.',
  ],
  listTitle: 'Alamat plus dan titik di dalam daftar email',
  listParas: [
    'Bagi Anda yang mengelola formulir pendaftaran, plus addressing juga punya sisi negatif. Satu orang bisa mendaftar sebagai `budi@gmail.com`, `b.udi@gmail.com`, dan `budi+2@gmail.com`, dan daftar Anda menghitungnya sebagai tiga orang. Ini juga membuka peluang penyalahgunaan. Dalam satu kasus yang [dilaporkan oleh peneliti keamanan](https://www.schneier.com/blog/archives/2019/02/using_gmail_dot.html), sebuah kelompok memakai versi bertitik dari alamat Gmail untuk 48 pengajuan kartu kredit dan mendapatkan kredit hasil penipuan senilai setidaknya US$65.000.',
    'Tab Bersihkan menemukan grup seperti ini. Tab ini mengikuti aturan yang aman untuk setiap penyedia:',
  ],
  listRules: [
    'Untuk gmail.com dan googlemail.com, titik dan tag plus dihapus.',
    'Untuk Outlook.com, iCloud, Proton, Fastmail, dan Yandex, hanya tag plus yang dihapus. Titik tetap ada, karena di penyedia tersebut titik mengubah alamat.',
    'Alamat Yahoo tidak diubah. Alamat sekali pakai Yahoo memakai nama panggilan yang bukan nama akun, jadi tidak bisa dilacak kembali ke akunnya.',
    'Domain perusahaan tidak diubah, kecuali Anda mencentang opsinya. Setiap server email menentukan sendiri arti tanda plus, dan di beberapa server tanda itu adalah bagian dari nama kotak surat yang asli.',
  ],
  listAfter: [
    'Gunakan hasilnya untuk menemukan duplikat, bukan untuk menulis ulang alamat. Tetap kirim ke alamat persis seperti yang dimasukkan orang tersebut, agar filter mereka tetap berfungsi. Karena itu, alat ini menyimpan alamat pertama setiap grup tanpa perubahan.',
    'Menggabungkan duplikat tidak memberi tahu apakah sebuah alamat masih berfungsi. Periksa daftar yang sudah dibersihkan dengan [verifikasi email massal](/bulk-email-verifier) sebelum mengirim, atau cek satu alamat dengan [email checker](/email-checker). Untuk menandai alamat dari penyedia gratis, lihat [daftar penyedia email gratis](/free-email-providers), dan untuk kotak masuk sekali pakai, gunakan [cek email sementara](/disposable-email-checker).',
  ],
  faqTitle: 'Pertanyaan umum',
  faqs: [
    {
      q: 'Apa itu plus addressing di Gmail?',
      a: 'Ini adalah cara membuat versi tambahan dari alamat Gmail Anda. Anda menambahkan tanda plus dan sebuah kata sebelum @, misalnya budi+belanja@gmail.com. Email yang dikirim ke versi mana pun masuk ke kotak masuk biasa Anda, dan Anda bisa memfilter berdasarkan kata tersebut.',
    },
    {
      q: 'Apakah plus addressing berfungsi di Outlook?',
      a: 'Ya. Alamat Outlook.com menerima alamat plus, dan Microsoft mengaktifkan plus addressing secara default untuk akun bisnis Microsoft 365. Di Microsoft 365, Anda bisa menerima email di alamat plus, tetapi tidak bisa mengirim dari alamat plus.',
    },
    {
      q: 'Apakah titik berpengaruh pada alamat Gmail?',
      a: 'Tidak untuk alamat gmail.com. Google menyatakan bahwa email yang dikirim ke versi bertitik mana pun dari alamat Anda akan sampai kepada Anda, jadi budi.santoso@gmail.com dan budisantoso@gmail.com adalah satu kotak masuk. Di akun Google Workspace dengan domain perusahaan, titik memang mengubah alamat.',
    },
    {
      q: 'Bisakah saya mengirim email dari alamat plus di Gmail?',
      a: 'Google tidak mendokumentasikannya. Beberapa panduan menambahkan alamat plus di pengaturan Gmail pada bagian Kirim email sebagai, sehingga Anda bisa memilihnya sebagai alamat Dari. Microsoft 365 sama sekali tidak mengizinkan pengiriman dari alamat plus, sedangkan Proton Mail membalas dari alamat plus secara default.',
    },
    {
      q: 'Mengapa sebuah situs menolak alamat plus saya?',
      a: 'Karena formulir pendaftarannya memeriksa alamat terlalu ketat. Tanda plus adalah karakter yang valid dalam alamat email, dan RFC 3696 menyatakan bahwa program harus menerimanya. Fastmail mencatat bahwa beberapa situs keliru menganggapnya tidak valid. Gunakan alamat biasa Anda di situs tersebut.',
    },
    {
      q: 'Apakah alamat plus sama dengan alias email?',
      a: 'Tidak sepenuhnya. Alamat plus adalah alamat asli Anda yang diberi tag, jadi siapa pun bisa menghapus tagnya dan melihat alamat kotak masuk Anda. Alias dari Sembunyikan Email Saya milik Apple atau dari DuckDuckGo Email Protection berbeda. Alias itu adalah alamat acak yang meneruskan email kepada Anda dan menyembunyikan alamat asli Anda.',
    },
    {
      q: 'Apakah plus addressing berfungsi di Google Workspace?',
      a: 'Ya. Contoh dari Google sendiri memakai domain perusahaan: cassy+news@solarmora.com. Bedanya dengan gmail.com, titik adalah bagian dari alamat di Workspace, jadi hanya bagian plus yang menjadi tag.',
    },
    {
      q: 'Berapa banyak alamat plus yang bisa saya buat?',
      a: 'Google tidak menyebutkan angkanya. Batas praktisnya adalah panjang alamat. Bagian sebelum @ maksimal 64 karakter, termasuk nama Anda, tanda plus, dan tagnya.',
    },
  ],
  ctaHeadline: 'Ketahui alamat mana di daftar Anda yang masih berfungsi',
}

export const PLUS_PAGE_STRINGS: Partial<Record<Locale, PlusPageStrings>> & { en: PlusPageStrings } = {
  en,
  it,
  de,
  es,
  'pt-br': ptBr,
  ja,
  ko,
  tr,
  fr,
  nl,
  pl,
  id,
}
