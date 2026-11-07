// All page copy for the email permutator, one object per language the page ships in.
// The page is components/tools/EmailPermutator/EmailPermutatorPage.tsx; the URLs
// live in CLUSTERS.emailPermutator (lib/i18n/clusters.ts). The tool's own labels
// are in lib/i18n/tools/emailPermutatorToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// The pattern table (first.last, jane.doe@example.com and so on) is not here:
// address patterns are ASCII and the same in every language, so the page keeps
// them as a constant.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface PermutatorPageStrings {
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
  howNote: string
  imageAlt: string
  formatsTitle: string
  thPattern: string
  thExample: string
  formatsNote: string
  namesTitle: string
  namesText: string
  verifyTitle: string
  /** The second paragraph carries the links. */
  verifyParas: [string, string]
  responsibleTitle: string
  responsibleText: string
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: PermutatorPageStrings = {
  metaTitle: 'Free Email Permutator: Generate Every Email Format | Giggal.ai',
  ogTitle: 'Free Email Permutator: Generate Every Email Format',
  description:
    'Enter a name and company domain to get every likely work email format, from first.last@ to flast@. Bulk CSV, accents handled, runs in your browser. Free.',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Free Email Permutator',
  crumb: 'Email Permutator',
  appName: 'Free Email Permutator',
  featureList: [
    'Generate likely email address formats from name and domain',
    'Handle international accents, umlauts, hyphens, and multi-part names',
    'Bulk CSV generation for up to 5,000 contacts',
    'Export results to CSV or TXT',
    'Runs 100% in-browser with zero telemetry',
  ],
  h1: 'Email Permutator',
  heroIntro: 'Enter a name and a company domain to get every likely email address format, most common first.',
  howTitle: 'How to use the email permutator',
  howSteps: [
    "Enter the person's first and last name, exactly as they write it. Add a middle name or nickname if you know one.",
    "Enter the company's email domain, such as example.com. You can add more than one domain if the company uses several.",
    'Click Generate. The formats appear below, with the most common ones first.',
    'Copy the list or download it, then verify the addresses to find out which one exists.',
  ],
  howNote:
    'For a list of people, switch to Bulk and upload a CSV with first name, last name and domain columns. You get every format for every row in one file.',
  imageAlt: 'Illustration of one name branching into several email address formats with check mark.',
  formatsTitle: 'The email formats it generates',
  thPattern: 'Pattern',
  thExample: 'Example for Jane Doe at example.com',
  formatsNote:
    'The full list also covers hyphens, reversed orders and middle initials. first.last is the usual starting point for company addresses, with flast and first close behind, but every company picks its own convention, so treat the order as a guide rather than a rule.',
  namesTitle: 'Names with accents, apostrophes and two surnames',
  namesText:
    "Email addresses rarely contain accents, so the permutator writes José as jose and Zoë as zoe. German names get both spellings, because companies handle them differently: Müller becomes muller and mueller, and ß becomes ss. Apostrophes and full stops are dropped, so O'Brien becomes obrien. Two-part surnames like de la Cruz produce versions with the parts joined (delacruz) and with only the last part (cruz), and hyphenated names keep the hyphen in some formats and drop it in others.",
  verifyTitle: 'Why you still need to verify the list',
  verifyParas: [
    'A permutator only writes out guesses. At most one of these addresses belongs to the person, and sometimes none do. Sending to all of them means bouncing on the rest, which hurts your sender reputation.',
    'Verification tells you which mailbox exists, but it has a weak spot: catch-all domains. A catch-all server accepts mail for any address, so a basic checker reports every format on the list as valid. Giggal resolves catch-all addresses to valid or invalid, which is what makes a permutator list usable on those domains. Read more about [catch-all email addresses](/blog/what-is-a-catch-all-email-address), or test one address with the [email checker](/email-checker).',
  ],
  responsibleTitle: 'Using these addresses responsibly',
  responsibleText:
    'Guessing an address is common in B2B outreach, but how you use it still matters. Write to people who have a clear reason to hear from you, keep the message relevant to their job, and make it easy to opt out. Privacy and anti-spam rules such as GDPR and CAN-SPAM apply to the emails you send, however you found the address.',
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Is this email permutator free?',
      a: 'Yes, with no signup and no limit. It runs in your browser, so nothing you type is sent to us.',
    },
    {
      q: 'How many email formats does it generate?',
      a: '18 for a first and last name, and more when you add a middle name, a nickname or a second domain. Duplicates are removed.',
    },
    {
      q: 'Which email format is most common?',
      a: 'first.last@ is the one to try first at most companies, followed by flast@ and first@. Smaller companies often use the first name alone. Every company sets its own rule, so verify instead of assuming.',
    },
    {
      q: 'Can I generate emails for a whole list of people?',
      a: 'Yes. Use Bulk mode and upload a CSV with first name, last name and domain columns. The download has one row per generated address, with the pattern name next to it.',
    },
    {
      q: 'Does it tell me which address is correct?',
      a: 'No. It only generates the likely formats. Verify them to find the one that exists, and use a verifier that handles catch-all domains, or every format will look valid.',
    },
    {
      q: 'What if I only know a first name?',
      a: 'Leave the last name empty and you get the first-name formats only, like jane@. Those are much less likely to be right.',
    },
  ],
  ctaHeadline: 'Found the formats? Find the real one.',
  ctaSupporting: 'Verify the list and see which address exists, including on catch-all domains. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const ja: PermutatorPageStrings = {
  metaTitle: 'メールアドレスの組み合わせ作成ツール：よくある形式を無料で生成 | Giggal.ai',
  ogTitle: 'メールアドレスの組み合わせ作成ツール：よくある形式を無料で生成',
  description:
    '名前と会社のドメインを入力すると、first.last@からflast@まで、考えられる仕事用メールアドレスの形式をすべて表示します。CSVの一括処理とアクセント付きの名前に対応し、ブラウザ内で動作します。無料です。',
  ogLocale: 'ja_JP',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: '無料のメールアドレス組み合わせ作成ツール',
  crumb: 'メールアドレスの組み合わせ作成',
  appName: '無料のメールアドレス組み合わせ作成ツール',
  featureList: [
    '名前とドメインから、考えられるメールアドレスの形式を生成',
    '各国語のアクセント、ウムラウト、ハイフン、複数の部分からなる名前に対応',
    '最大5,000件の連絡先をCSVで一括生成',
    '結果をCSVまたはTXTで書き出し',
    '100%ブラウザ内で動作し、利用データの送信（テレメトリー）なし',
  ],
  h1: 'メールアドレスの組み合わせ作成',
  heroIntro: '名前と会社のドメインを入力すると、考えられるメールアドレスの形式をすべて、よく使われる順に表示します。',
  howTitle: 'メールアドレスの組み合わせ作成ツールの使い方',
  howSteps: [
    '相手の名と姓を、本人が使うローマ字の表記のまま入力します。ミドルネームやニックネームがわかれば、それも追加します。',
    '会社のメールドメイン（例：example.com）を入力します。会社が複数のドメインを使っている場合は、2つ以上入力できます。',
    '「形式を生成」をクリックします。下に形式が表示され、よく使われるものが先頭に並びます。',
    'リストをコピーまたはダウンロードします。次にアドレスを検証して、実在するものを確認します。',
  ],
  howNote:
    '複数の人のリストを処理するには、「CSVで一括」に切り替え、名、姓、ドメインの列があるCSVをアップロードします。すべての行のすべての形式を、1つのファイルで受け取れます。',
  imageAlt: '1つの名前が複数のメールアドレスの形式に分かれ、チェックマークが付いている様子のイラスト。',
  formatsTitle: '生成されるメールアドレスの形式',
  thPattern: 'パターン',
  thExample: 'example.comのJane Doeの場合の例',
  formatsNote:
    '完全なリストには、ハイフン付きの形式、名と姓の順番を逆にした形式、ミドルネームの頭文字を使った形式も含まれます。会社のアドレスでは通常first.lastから試し、flastとfirstがそれに続きます。ただし、形式は会社ごとに決めているため、この順番は決まりではなく目安として扱ってください。',
  namesTitle: 'アクセント、アポストロフィ、2つの姓を含む名前',
  namesText:
    "メールアドレスにアクセント記号が入ることはまれです。そのため、Joséはjose、Zoëはzoeとして書き出します。ドイツ語の名前は会社によって扱いが異なるため、両方の綴りを生成します。Müllerはmullerとmuellerになり、ßはssになります。アポストロフィとピリオドは取り除くため、O'Brienはobrienになります。de la Cruzのような複数の部分からなる姓では、つなげた形（delacruz）と最後の部分だけの形（cruz）を生成します。ハイフン付きの名前は、ハイフンを残す形式と取り除く形式があります。",
  verifyTitle: 'リストを検証する必要がある理由',
  verifyParas: [
    '組み合わせ作成ツールが書き出すのは推測だけです。本人のアドレスはこの中に多くても1つで、1つもない場合もあります。すべてに送ると残りのアドレスでバウンスが発生し、送信者レピュテーションが下がります。',
    '検証すればどのメールボックスが存在するかがわかりますが、弱点があります。キャッチオールドメインです。キャッチオールのサーバーはどのアドレス宛てのメールも受け付けるため、一般的なチェッカーはリストのすべての形式を有効と表示します。Giggalはキャッチオールのアドレスも有効か無効かに分けます。そのため、こうしたドメインでも組み合わせのリストを使えます。詳しくは[キャッチオールのメールアドレス](/blog/what-is-a-catch-all-email-address)の解説をご覧ください。1件だけ試すには[メールアドレスチェッカー](/email-checker)を使ってください。',
  ],
  responsibleTitle: '推測したアドレスの適切な使い方',
  responsibleText:
    'B2Bの営業では、アドレスを推測することはよくあります。それでも、その使い方は重要です。連絡を受ける明確な理由がある人に送り、内容は相手の仕事に関係するものにして、配信停止を簡単にしてください。GDPRやCAN-SPAMなどのプライバシーと迷惑メールに関する規則は、アドレスをどう見つけたかに関係なく、送信するメールに適用されます。',
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'このメールアドレス組み合わせ作成ツールは無料ですか？',
      a: 'はい。登録は不要で、回数の制限もありません。ブラウザ内で動作するため、入力した内容が当社に送信されることはありません。',
    },
    {
      q: 'メールアドレスの形式はいくつ生成されますか？',
      a: '名と姓の場合は18件です。ミドルネーム、ニックネーム、2つ目のドメインを追加すると、さらに増えます。重複は取り除かれます。',
    },
    {
      q: '最もよく使われるメールアドレスの形式は何ですか？',
      a: '多くの会社では、まずfirst.last@を試し、次にflast@とfirst@を試します。小さな会社では、名だけを使うことがよくあります。形式は会社ごとに決めているため、推測で決めつけずに検証してください。',
    },
    {
      q: '複数の人のリストからメールアドレスを生成できますか？',
      a: 'はい。「CSVで一括」モードで、名、姓、ドメインの列があるCSVをアップロードします。ダウンロードしたファイルには、生成したアドレスが1行に1件ずつ、パターン名と一緒に入っています。',
    },
    {
      q: 'どのアドレスが正しいかはわかりますか？',
      a: 'いいえ。考えられる形式を生成するだけです。実在するアドレスを見つけるには、検証してください。キャッチオールドメインに対応した検証ツールを使わないと、すべての形式が有効に見えます。',
    },
    {
      q: '名しかわからない場合はどうなりますか？',
      a: '姓を空欄にすると、jane@のような名だけの形式が生成されます。こうした形式が正しい可能性は、ずっと低くなります。',
    },
  ],
  ctaHeadline: '形式がわかったら、実在するアドレスを見つけましょう',
}

const ko: PermutatorPageStrings = {
  metaTitle: '이메일 주소 조합 생성기: 모든 이메일 형식을 무료로 생성 | Giggal.ai',
  ogTitle: '이메일 주소 조합 생성기: 모든 이메일 형식을 무료로 생성',
  description:
    '이름과 회사 도메인을 입력하면 first.last@부터 flast@까지 가능성 있는 업무용 이메일 형식을 모두 보여 줍니다. CSV 일괄 처리와 악센트가 있는 이름을 지원하며, 브라우저 안에서 실행됩니다. 무료입니다.',
  ogLocale: 'ko_KR',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: '무료 이메일 주소 조합 생성기',
  crumb: '이메일 주소 조합 생성기',
  appName: '무료 이메일 주소 조합 생성기',
  featureList: [
    '이름과 도메인으로 가능성 있는 이메일 주소 형식 생성',
    '여러 언어의 악센트, 움라우트, 하이픈, 여러 부분으로 된 이름 처리',
    '최대 5,000명의 연락처를 CSV로 일괄 생성',
    '결과를 CSV 또는 TXT로 내보내기',
    '100% 브라우저 안에서 실행, 사용 데이터 전송 없음',
  ],
  h1: '이메일 주소 조합 생성기',
  heroIntro: '이름과 회사 도메인을 입력하면 가능성 있는 이메일 주소 형식을 가장 흔한 형식부터 모두 보여 줍니다.',
  howTitle: '이메일 주소 조합 생성기 사용 방법',
  howSteps: [
    '상대의 이름과 성을 본인이 쓰는 로마자 표기 그대로 입력합니다. 중간 이름이나 닉네임을 알면 함께 추가합니다.',
    '회사의 이메일 도메인(예: example.com)을 입력합니다. 회사가 여러 도메인을 쓰면 둘 이상 입력할 수 있습니다.',
    '“형식 생성”을 클릭합니다. 아래에 형식이 나타나며, 가장 흔한 형식이 먼저 나옵니다.',
    '리스트를 복사하거나 다운로드한 다음, 주소를 검증해 실제로 존재하는 주소를 찾습니다.',
  ],
  howNote:
    '여러 사람의 리스트는 “CSV 일괄”로 바꾸고 이름, 성, 도메인 열이 있는 CSV를 업로드하십시오. 모든 행의 모든 형식을 파일 하나로 받을 수 있습니다.',
  imageAlt: '이름 하나가 여러 이메일 주소 형식으로 나뉘고 체크 표시가 있는 그림.',
  formatsTitle: '생성되는 이메일 형식',
  thPattern: '패턴',
  thExample: 'example.com의 Jane Doe 예시',
  formatsNote:
    '전체 리스트에는 하이픈이 들어간 형식, 순서를 바꾼 형식, 중간 이름 이니셜을 쓴 형식도 포함됩니다. 회사 주소는 보통 first.last부터 시도하고, flast와 first가 그 뒤를 잇습니다. 하지만 회사마다 자체 규칙이 있으므로 이 순서는 규칙이 아니라 참고용으로 보십시오.',
  namesTitle: '악센트, 아포스트로피, 두 개의 성이 있는 이름',
  namesText:
    "이메일 주소에는 악센트가 거의 들어가지 않으므로 José는 jose로, Zoë는 zoe로 씁니다. 독일어 이름은 회사마다 처리 방식이 달라 두 가지 철자를 모두 만듭니다. Müller는 muller와 mueller가 되고, ß 문자는 ss가 됩니다. 아포스트로피와 마침표는 빼므로 O'Brien은 obrien이 됩니다. de la Cruz처럼 여러 부분으로 된 성은 부분을 붙인 형식(delacruz)과 마지막 부분만 쓴 형식(cruz)을 만듭니다. 하이픈이 있는 이름은 일부 형식에서는 하이픈을 남기고, 다른 형식에서는 뺍니다.",
  verifyTitle: '리스트를 꼭 검증해야 하는 이유',
  verifyParas: [
    '조합 생성기는 추측한 주소를 적어 줄 뿐입니다. 이 중 그 사람의 주소는 많아야 하나이고, 하나도 없을 때도 있습니다. 모두에게 보내면 나머지 주소에서 반송이 생기고, 발신자 평판이 떨어집니다.',
    '검증하면 어떤 메일함이 존재하는지 알 수 있지만, 약점이 하나 있습니다. 바로 캐치올(catch-all) 도메인입니다. 캐치올 서버는 어떤 주소로 온 메일이든 받기 때문에, 일반적인 검사 도구는 리스트의 모든 형식을 유효하다고 보고합니다. Giggal은 캐치올 주소도 유효 또는 무효로 판별합니다. 그래서 이런 도메인에서도 조합 리스트를 쓸 수 있습니다. [캐치올 이메일 주소](/blog/what-is-a-catch-all-email-address)에 대해 더 읽어 보거나, [이메일 유효성 검사 도구](/email-checker)로 주소 하나를 테스트해 보십시오.',
  ],
  responsibleTitle: '추측한 주소를 책임 있게 사용하기',
  responsibleText:
    'B2B 영업에서 주소를 추측하는 일은 흔하지만, 그 주소를 어떻게 쓰는지는 여전히 중요합니다. 연락을 받을 분명한 이유가 있는 사람에게 보내고, 내용은 상대의 업무와 관련되게 하며, 수신 거부를 쉽게 하십시오. GDPR, CAN-SPAM 같은 개인정보 보호 및 스팸 방지 규정은 주소를 어떻게 찾았든 보내는 이메일에 적용됩니다.',
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      q: '이 이메일 주소 조합 생성기는 무료입니까?',
      a: '예. 가입이 필요 없고 사용 한도도 없습니다. 브라우저 안에서 실행되므로 입력한 내용은 저희에게 전송되지 않습니다.',
    },
    {
      q: '이메일 형식을 몇 개나 생성합니까?',
      a: '이름과 성이 있으면 18개이고, 중간 이름, 닉네임, 두 번째 도메인을 추가하면 더 늘어납니다. 중복은 제거됩니다.',
    },
    {
      q: '가장 흔한 이메일 형식은 무엇입니까?',
      a: '대부분의 회사에서는 first.last@ 형식을 먼저 시도하고, 다음으로 flast@와 first@ 형식을 시도합니다. 작은 회사는 이름만 쓰는 경우가 많습니다. 규칙은 회사마다 정하므로 짐작하지 말고 검증하십시오.',
    },
    {
      q: '여러 사람의 리스트로 이메일 주소를 한꺼번에 생성할 수 있습니까?',
      a: '예. “CSV 일괄” 모드에서 이름, 성, 도메인 열이 있는 CSV를 업로드하십시오. 다운로드 파일에는 생성된 주소가 한 행에 하나씩, 패턴 이름과 함께 들어 있습니다.',
    },
    {
      q: '어느 주소가 맞는지 알려 줍니까?',
      a: '아니요. 가능성 있는 형식을 생성할 뿐입니다. 실제로 존재하는 주소를 찾으려면 검증하십시오. 캐치올 도메인을 처리하는 검증 도구를 쓰지 않으면 모든 형식이 유효해 보입니다.',
    },
    {
      q: '이름만 알고 있으면 어떻게 됩니까?',
      a: '성을 비워 두면 jane@ 같은 이름만 쓴 형식이 생성됩니다. 이런 형식이 맞을 가능성은 훨씬 낮습니다.',
    },
  ],
  ctaHeadline: '형식을 찾았다면, 실제 주소를 찾으십시오',
}

const tr: PermutatorPageStrings = {
  metaTitle: 'Mail adresi kombinasyonları: ücretsiz oluşturucu | Giggal.ai',
  ogTitle: 'Mail adresi kombinasyonları: ücretsiz oluşturucu',
  description:
    'Ad ve şirket alan adı girin, first.last@ ve flast@ gibi olası tüm iş mail adresi formatlarını görün. Toplu CSV ve aksanlı adlar desteklenir. Ücretsizdir.',
  ogLocale: 'tr_TR',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Ücretsiz mail adresi kombinasyonları aracı',
  crumb: 'Mail adresi kombinasyonları',
  appName: 'Ücretsiz mail adresi kombinasyonları aracı',
  featureList: [
    'Ad ve alan adından olası e-posta adresi formatlarını oluşturur',
    'Uluslararası aksanları, umlautları, tireleri ve birden fazla parçadan oluşan adları işler',
    'En fazla 5.000 kişi için toplu CSV ile adres oluşturur',
    'Sonuçları CSV veya TXT olarak dışa aktarır',
    '%100 tarayıcıda çalışır, hiçbir kullanım verisi gönderilmez',
  ],
  h1: 'Mail adresi kombinasyonları',
  heroIntro: 'Bir ad ve şirket alan adı girin, olası tüm mail adresi formatlarını en yaygın olandan başlayarak görün.',
  howTitle: 'Mail adresi kombinasyonları aracı nasıl kullanılır?',
  howSteps: [
    'Kişinin adını ve soyadını tam olarak kendisinin yazdığı gibi girin. Biliyorsanız ikinci adını veya lakabını da ekleyin.',
    'Şirketin e-posta alan adını girin, örneğin example.com. Şirket birden fazla alan adı kullanıyorsa birden fazla alan adı ekleyebilirsiniz.',
    'Formatları oluşturun düğmesine tıklayın. Formatlar aşağıda görünür, en yaygın olanlar en üstte yer alır.',
    'Listeyi kopyalayın veya indirin, ardından hangisinin var olduğunu öğrenmek için adresleri doğrulayın.',
  ],
  howNote:
    'Bir kişi listesi için Toplu CSV moduna geçin ve ad, soyad ve alan adı sütunları olan bir CSV dosyası yükleyin. Her satırın tüm formatlarını tek bir dosyada alırsınız.',
  imageAlt: 'Tek bir adın birkaç e-posta adresi formatına ayrıldığını ve bir onay işaretini gösteren çizim.',
  formatsTitle: 'Aracın oluşturduğu mail adresi formatları',
  thPattern: 'Kalıp',
  thExample: "example.com'daki Jane Doe için örnek",
  formatsNote:
    'Tam liste tireli formatları, ters sıralamaları ve ikinci adın baş harfini kullanan formatları da kapsar. Şirket adresleri için genellikle ilk denenen format first.last olur, onu flast ve first izler. Ancak her şirket kendi kuralını seçer, bu yüzden bu sırayı bir kural olarak değil bir yol gösterici olarak kabul edin.',
  namesTitle: 'Aksanlı, kesme işaretli ve iki soyadlı adlar',
  namesText:
    "E-posta adreslerinde aksanlı harf nadiren bulunur, bu yüzden araç José'yi jose, Zoë'yi zoe olarak yazar. Şirketler Almanca adları farklı şekillerde ele aldığı için araç bu adlarda iki yazımı da üretir: Müller hem muller hem mueller olur, ß ise ss olur. Kesme işaretleri ve noktalar kaldırılır, bu yüzden O'Brien obrien olur. de la Cruz gibi iki parçalı soyadlarında parçaların birleştirildiği (delacruz) ve yalnızca son parçanın kullanıldığı (cruz) sürümler üretilir. Tireli adlar bazı formatlarda tireyi korur, bazılarında kaldırır.",
  verifyTitle: 'Listeyi neden yine de doğrulamanız gerekir?',
  verifyParas: [
    'Bir kombinasyon aracı yalnızca tahminleri yazar. Bu adreslerden en fazla biri kişiye aittir, bazen hiçbiri ait değildir. Hepsine göndermek, geri kalan adreslerde bounce almak demektir ve bu gönderen itibarınıza zarar verir.',
    'Doğrulama hangi posta kutusunun var olduğunu söyler, ancak zayıf bir noktası vardır: catch-all alan adları. Catch-all bir sunucu her adrese gelen e-postayı kabul eder, bu yüzden basit bir doğrulama aracı listedeki her formatı geçerli olarak bildirir. Giggal, catch-all adresleri de geçerli veya geçersiz olarak sonuçlandırır. Kombinasyon listesini bu alan adlarında kullanılabilir yapan da budur. [Catch-all e-posta adresleri](/blog/what-is-a-catch-all-email-address) hakkında daha fazla bilgi edinin veya tek bir adresi [mail adresi doğrulama](/email-checker) aracıyla test edin.',
  ],
  responsibleTitle: 'Bu adresleri sorumlu bir şekilde kullanma',
  responsibleText:
    'B2B satış iletişiminde adres tahmin etmek yaygındır, ancak adresi nasıl kullandığınız yine de önemlidir. Sizden haber almak için açık bir nedeni olan kişilere yazın, mesajı işleriyle ilgili tutun ve listeden çıkmayı kolaylaştırın. GDPR ve CAN-SPAM gibi gizlilik ve spam karşıtı kurallar, adresi nasıl bulduğunuzdan bağımsız olarak gönderdiğiniz e-postalar için geçerlidir.',
  faqTitle: 'Sıkça sorulan sorular',
  faqs: [
    {
      q: 'Bu mail adresi kombinasyonları aracı ücretsiz mi?',
      a: 'Evet, kayıt gerekmez ve bir sınır yoktur. Tarayıcınızda çalışır, bu yüzden yazdığınız hiçbir şey bize gönderilmez.',
    },
    {
      q: 'Kaç tane mail adresi formatı oluşturur?',
      a: 'Ad ve soyad için 18 format oluşturur. İkinci ad, lakap veya ikinci bir alan adı eklediğinizde sayı artar. Yinelenen formatlar kaldırılır.',
    },
    {
      q: 'En yaygın mail adresi formatı hangisidir?',
      a: 'Çoğu şirkette ilk denenecek format first.last@ biçimidir, ardından flast@ ve first@ gelir. Küçük şirketler genellikle yalnızca adı kullanır. Her şirket kendi kuralını belirler, bu yüzden varsaymak yerine doğrulayın.',
    },
    {
      q: 'Bir kişi listesinin tamamı için mail adresi oluşturabilir miyim?',
      a: 'Evet. Toplu CSV modunu kullanın ve ad, soyad ve alan adı sütunları olan bir CSV dosyası yükleyin. İndirilen dosyada oluşturulan her adres için bir satır bulunur ve adresin yanında kalıp adı yer alır.',
    },
    {
      q: 'Hangi adresin doğru olduğunu söyler mi?',
      a: 'Hayır. Yalnızca olası formatları oluşturur. Var olan adresi bulmak için bunları doğrulayın. Catch-all alan adlarını işleyebilen bir doğrulama aracı kullanın, yoksa her format geçerli görünür.',
    },
    {
      q: 'Yalnızca adı biliyorsam ne olur?',
      a: 'Soyadı alanını boş bırakırsanız yalnızca jane@ gibi ad formatlarını alırsınız. Bunların doğru olma olasılığı çok daha düşüktür.',
    },
  ],
  ctaHeadline: 'Formatları buldunuz mu? Şimdi gerçek adresi bulun.',
}

// Italian: register "tu". Name as the footer ("Permutatore email").
const it: PermutatorPageStrings = {
  metaTitle: 'Permutatore email gratis: tutti i formati email | Giggal.ai',
  ogTitle: 'Permutatore email gratis: tutti i formati email',
  description:
    'Inserisci nome e dominio aziendale e ottieni tutti i formati probabili dell’email di lavoro, da first.last@ a flast@. Anche da CSV, nel browser e gratis.',
  ogLocale: 'it_IT',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Permutatore email gratis',
  crumb: 'Permutatore email',
  appName: 'Permutatore email gratis',
  featureList: [
    'Genera i formati probabili di un indirizzo email da nome e dominio',
    'Gestisce accenti, dieresi, trattini e nomi composti da più parti',
    'Generazione in blocco da CSV per un massimo di 5.000 contatti',
    'Esporta i risultati in CSV o TXT',
    'Funziona al 100% nel browser, senza telemetria',
  ],
  h1: 'Permutatore email',
  heroIntro: 'Inserisci un nome e un dominio aziendale per ottenere tutti i formati probabili dell’indirizzo email, a partire dai più comuni.',
  howTitle: 'Come usare il permutatore email',
  howSteps: [
    'Inserisci il nome e il cognome della persona, esattamente come li scrive. Aggiungi un secondo nome o un soprannome, se lo conosci.',
    'Inserisci il dominio email dell’azienda, per esempio example.com. Puoi aggiungere più domini se l’azienda ne usa diversi.',
    'Fai clic su Genera formati. I formati compaiono qui sotto, con i più comuni per primi.',
    'Copia la lista o scaricala, poi verifica gli indirizzi per scoprire quale esiste.',
  ],
  howNote:
    'Per una lista di persone, passa a CSV in blocco e carica un CSV con le colonne nome, cognome e dominio. Ottieni tutti i formati per ogni riga in un solo file.',
  imageAlt: 'Illustrazione di un nome che si divide in diversi formati di indirizzo email con un segno di spunta.',
  formatsTitle: 'I formati email che genera',
  thPattern: 'Schema',
  thExample: 'Esempio per Jane Doe su example.com',
  formatsNote:
    'La lista completa include anche trattini, ordini invertiti e iniziali del secondo nome. first.last è il punto di partenza abituale per gli indirizzi aziendali, seguito da vicino da flast e first. Ogni azienda però sceglie la propria convenzione, quindi considera l’ordine un’indicazione e non una regola.',
  namesTitle: 'Nomi con accenti, apostrofi e due cognomi',
  namesText:
    "Gli indirizzi email contengono raramente accenti, quindi il permutatore scrive José come jose e Zoë come zoe. I nomi tedeschi ottengono entrambe le grafie, perché le aziende li gestiscono in modo diverso: Müller diventa muller e mueller, e ß diventa ss. Apostrofi e punti vengono eliminati, quindi O'Brien diventa obrien. I cognomi in due parti come de la Cruz producono versioni con le parti unite (delacruz) e con la sola ultima parte (cruz). I nomi con il trattino mantengono il trattino in alcuni formati e lo eliminano in altri.",
  verifyTitle: 'Perché devi comunque verificare la lista',
  verifyParas: [
    'Un permutatore scrive solo ipotesi. Al massimo uno di questi indirizzi appartiene alla persona, e a volte nessuno. Se invii a tutti, ottieni bounce sugli altri, e questo danneggia la tua reputazione di mittente.',
    'La verifica ti dice quale casella esiste, ma ha un punto debole: i domini catch-all. Un server catch-all accetta posta per qualsiasi indirizzo, quindi un controllo di base segnala come valido ogni formato della lista. Giggal classifica gli indirizzi catch-all come validi o non validi, ed è questo che rende utilizzabile una lista del permutatore su quei domini. Leggi di più sugli [indirizzi email catch-all](/blog/what-is-a-catch-all-email-address), oppure prova un indirizzo con la [verifica email](/email-checker).',
  ],
  responsibleTitle: 'Usare questi indirizzi in modo responsabile',
  responsibleText:
    'Indovinare un indirizzo è comune nella prospezione B2B, ma conta comunque come lo usi. Scrivi a persone che hanno un motivo chiaro per ricevere i tuoi messaggi, mantieni il messaggio pertinente al loro lavoro e rendi semplice la disiscrizione. Le norme su privacy e spam come il GDPR e il CAN-SPAM si applicano alle email che invii, in qualunque modo tu abbia trovato l’indirizzo.',
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Questo permutatore email è gratis?',
      a: 'Sì, senza registrazione e senza limiti. Funziona nel tuo browser, quindi nulla di quello che scrivi viene inviato a noi.',
    },
    {
      q: 'Quanti formati email genera?',
      a: '18 per un nome e un cognome, e di più se aggiungi un secondo nome, un soprannome o un secondo dominio. I duplicati vengono rimossi.',
    },
    {
      q: 'Qual è il formato email più comune?',
      a: 'first.last@ è il primo da provare nella maggior parte delle aziende, seguito da flast@ e first@. Le aziende più piccole usano spesso solo il nome. Ogni azienda stabilisce la propria regola, quindi verifica invece di dare per scontato il formato.',
    },
    {
      q: 'Posso generare email per un’intera lista di persone?',
      a: 'Sì. Usa la modalità CSV in blocco e carica un CSV con le colonne nome, cognome e dominio. Il file scaricato ha una riga per ogni indirizzo generato, con il nome dello schema accanto.',
    },
    {
      q: 'Mi dice quale indirizzo è quello giusto?',
      a: 'No. Genera solo i formati probabili. Verificali per trovare quello che esiste, e usa un servizio di verifica che gestisce i domini catch-all, altrimenti ogni formato sembrerà valido.',
    },
    {
      q: 'E se conosco solo il nome?',
      a: 'Lascia vuoto il cognome e otterrai solo i formati con il nome, come jane@. Hanno molte meno probabilità di essere corretti.',
    },
  ],
  ctaHeadline: 'Hai i formati? Trova quello reale.',
}

// German: register "Sie". Name as the footer ("E-Mail-Permutator").
const de: PermutatorPageStrings = {
  metaTitle: 'Kostenloser E-Mail-Permutator: alle E-Mail-Formate | Giggal.ai',
  ogTitle: 'Kostenloser E-Mail-Permutator: alle E-Mail-Formate',
  description:
    'Geben Sie Name und Firmendomain ein und erhalten Sie jedes wahrscheinliche E-Mail-Format, von first.last@ bis flast@. Auch per CSV, im Browser, kostenlos.',
  ogLocale: 'de_DE',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Kostenloser E-Mail-Permutator',
  crumb: 'E-Mail-Permutator',
  appName: 'Kostenloser E-Mail-Permutator',
  featureList: [
    'Wahrscheinliche E-Mail-Adressformate aus Name und Domain erstellen',
    'Berücksichtigt Akzente, Umlaute, Bindestriche und mehrteilige Namen',
    'CSV-Massenmodus für bis zu 5.000 Kontakte',
    'Ergebnisse als CSV oder TXT exportieren',
    'Läuft zu 100 % im Browser, ohne Telemetrie',
  ],
  h1: 'E-Mail-Permutator',
  heroIntro:
    'Geben Sie einen Namen und eine Firmendomain ein und erhalten Sie jedes wahrscheinliche Format der E-Mail-Adresse, die häufigsten zuerst.',
  howTitle: 'So nutzen Sie den E-Mail-Permutator',
  howSteps: [
    'Geben Sie Vor- und Nachnamen genau so ein, wie die Person sie schreibt. Fügen Sie einen zweiten Vornamen oder Spitznamen hinzu, wenn Sie einen kennen.',
    'Geben Sie die E-Mail-Domain der Firma ein, etwa example.com. Nutzt die Firma mehrere Domains, können Sie mehrere eingeben.',
    'Klicken Sie auf Formate erstellen. Die Formate erscheinen darunter, die häufigsten zuerst.',
    'Kopieren Sie die Liste oder laden Sie sie herunter. Prüfen Sie dann die Adressen, um herauszufinden, welche existiert.',
  ],
  howNote:
    'Für eine Liste von Personen wechseln Sie zu CSV-Liste und laden eine CSV-Datei mit Spalten für Vorname, Nachname und Domain hoch. Sie erhalten jedes Format für jede Zeile in einer Datei.',
  imageAlt: 'Illustration eines Namens, der sich in mehrere E-Mail-Adressformate mit Häkchen aufteilt.',
  formatsTitle: 'Diese E-Mail-Formate erstellt das Tool',
  thPattern: 'Muster',
  thExample: 'Beispiel für Jane Doe bei example.com',
  formatsNote:
    'Die vollständige Liste enthält auch Bindestriche, umgekehrte Reihenfolgen und Initialen des zweiten Vornamens. first.last ist der übliche Ausgangspunkt für Firmenadressen, dicht gefolgt von flast und first. Jede Firma wählt aber ihre eigene Konvention. Sehen Sie die Reihenfolge deshalb als Orientierung, nicht als Regel.',
  namesTitle: 'Namen mit Akzenten, Apostrophen und zwei Nachnamen',
  namesText:
    "E-Mail-Adressen enthalten selten Akzente, daher schreibt der Permutator José als jose und Zoë als zoe. Deutsche Namen erhalten beide Schreibweisen, weil Firmen sie unterschiedlich behandeln: Müller wird zu muller und mueller, und ß wird zu ss. Apostrophe und Punkte entfallen, O'Brien wird also zu obrien. Zweiteilige Nachnamen wie de la Cruz ergeben Varianten mit verbundenen Teilen (delacruz) und nur mit dem letzten Teil (cruz). Bei Namen mit Bindestrich bleibt der Bindestrich in manchen Formaten erhalten, in anderen entfällt er.",
  verifyTitle: 'Warum Sie die Liste trotzdem prüfen müssen',
  verifyParas: [
    'Ein Permutator schreibt nur Vermutungen auf. Höchstens eine dieser Adressen gehört der Person, manchmal keine. Wenn Sie an alle senden, erhalten Sie für die übrigen Bounces, und das schadet Ihrer Absenderreputation.',
    'Die Verifizierung zeigt, welches Postfach existiert, hat aber eine Schwachstelle: Catch-all-Domains. Ein Catch-all-Server nimmt Mails für jede Adresse an, daher meldet ein einfacher Prüfer jedes Format der Liste als gültig. Giggal ordnet Catch-all-Adressen als gültig oder ungültig ein. Erst dadurch wird eine Permutator-Liste auf diesen Domains brauchbar. Lesen Sie mehr über [Catch-all-E-Mail-Adressen](/blog/what-is-a-catch-all-email-address), oder testen Sie eine Adresse mit [E-Mail-Adresse prüfen](/email-checker).',
  ],
  responsibleTitle: 'Diese Adressen verantwortungsvoll nutzen',
  responsibleText:
    'Adressen zu erraten ist in der B2B-Ansprache üblich, aber es kommt darauf an, wie Sie sie nutzen. Schreiben Sie Menschen, die einen klaren Grund haben, von Ihnen zu hören. Halten Sie die Nachricht relevant für ihre Arbeit, und machen Sie die Abmeldung einfach. Datenschutz- und Anti-Spam-Regeln wie die DSGVO und CAN-SPAM gelten für die E-Mails, die Sie senden, egal wie Sie die Adresse gefunden haben.',
  faqTitle: 'Häufige Fragen zum E-Mail-Permutator',
  faqs: [
    {
      q: 'Ist dieser E-Mail-Permutator kostenlos?',
      a: 'Ja, ohne Anmeldung und ohne Limit. Er läuft in Ihrem Browser, daher wird nichts, was Sie eingeben, an uns gesendet.',
    },
    {
      q: 'Wie viele E-Mail-Formate erstellt er?',
      a: '18 für einen Vor- und Nachnamen, und mehr, wenn Sie einen zweiten Vornamen, einen Spitznamen oder eine zweite Domain hinzufügen. Duplikate werden entfernt.',
    },
    {
      q: 'Welches E-Mail-Format ist am häufigsten?',
      a: 'first.last@ sollten Sie bei den meisten Firmen zuerst probieren, danach flast@ und first@. Kleinere Firmen nutzen oft nur den Vornamen. Jede Firma legt ihre eigene Regel fest. Prüfen Sie die Adresse also, statt das Format anzunehmen.',
    },
    {
      q: 'Kann ich E-Mail-Adressen für eine ganze Liste von Personen erstellen?',
      a: 'Ja. Nutzen Sie den Modus CSV-Liste und laden Sie eine CSV-Datei mit Spalten für Vorname, Nachname und Domain hoch. Der Download enthält eine Zeile pro erstellter Adresse, mit dem Namen des Musters daneben.',
    },
    {
      q: 'Zeigt mir das Tool, welche Adresse richtig ist?',
      a: 'Nein. Es erstellt nur die wahrscheinlichen Formate. Prüfen Sie diese, um die existierende Adresse zu finden. Nutzen Sie dafür einen Verifizierer, der mit Catch-all-Domains umgehen kann, sonst sieht jedes Format gültig aus.',
    },
    {
      q: 'Was, wenn ich nur den Vornamen kenne?',
      a: 'Lassen Sie den Nachnamen leer. Dann erhalten Sie nur die Formate mit dem Vornamen, etwa jane@. Diese sind deutlich seltener richtig.',
    },
  ],
  ctaHeadline: 'Formate gefunden? Finden Sie die echte Adresse.',
}

// Spanish: register "tú". Name as the footer ("Permutador de correos").
const es: PermutatorPageStrings = {
  metaTitle: 'Permutador de correos gratis: todos los formatos | Giggal.ai',
  ogTitle: 'Permutador de correos gratis: todos los formatos',
  description:
    'Escribe un nombre y el dominio de la empresa y obtén todos los formatos probables del correo, de first.last@ a flast@. Con CSV, en tu navegador y gratis.',
  ogLocale: 'es_ES',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Permutador de correos gratis',
  crumb: 'Permutador de correos',
  appName: 'Permutador de correos gratis',
  featureList: [
    'Genera los formatos probables de una dirección de correo a partir del nombre y el dominio',
    'Maneja tildes, diéresis, guiones y nombres de varias partes',
    'Generación masiva desde CSV para un máximo de 5.000 contactos',
    'Exporta los resultados en CSV o TXT',
    'Funciona al 100% en el navegador, sin telemetría',
  ],
  h1: 'Permutador de correos',
  heroIntro:
    'Escribe un nombre y el dominio de una empresa para obtener todos los formatos probables de la dirección de correo, empezando por los más comunes.',
  howTitle: 'Cómo usar el permutador de correos',
  howSteps: [
    'Escribe el nombre y el apellido de la persona, tal como los escribe. Agrega un segundo nombre o un apodo si lo conoces.',
    'Escribe el dominio de correo de la empresa, como example.com. Puedes agregar más de un dominio si la empresa usa varios.',
    'Haz clic en Generar formatos. Los formatos aparecen abajo, con los más comunes primero.',
    'Copia la lista o descárgala, y después verifica las direcciones para saber cuál existe.',
  ],
  howNote:
    'Para una lista de personas, cambia a CSV masivo y sube un CSV con columnas de nombre, apellido y dominio. Obtienes todos los formatos de cada fila en un solo archivo.',
  imageAlt: 'Ilustración de un nombre que se divide en varios formatos de dirección de correo con una marca de verificación.',
  formatsTitle: 'Los formatos de correo que genera',
  thPattern: 'Patrón',
  thExample: 'Ejemplo para Jane Doe en example.com',
  formatsNote:
    'La lista completa también incluye guiones, órdenes invertidos e iniciales del segundo nombre. first.last es el punto de partida habitual para las direcciones de empresa, seguido de cerca por flast y first. Pero cada empresa elige su propia convención, así que toma el orden como una guía y no como una regla.',
  namesTitle: 'Nombres con tildes, apóstrofos y dos apellidos',
  namesText:
    "Las direcciones de correo casi nunca llevan tildes, así que el permutador escribe José como jose y Zoë como zoe. Los nombres alemanes reciben las dos grafías, porque las empresas los tratan de forma distinta: Müller se convierte en muller y mueller, y ß se convierte en ss. Los apóstrofos y los puntos se eliminan, así que O'Brien se convierte en obrien. Los apellidos de dos partes como de la Cruz generan versiones con las partes unidas (delacruz) y solo con la última parte (cruz). Los nombres con guion conservan el guion en algunos formatos y lo quitan en otros.",
  verifyTitle: 'Por qué tienes que verificar la lista de todas formas',
  verifyParas: [
    'Un permutador solo escribe suposiciones. Como mucho una de estas direcciones pertenece a la persona, y a veces ninguna. Si envías a todas, el resto rebota, y eso perjudica tu reputación como remitente.',
    'La verificación te dice qué buzón existe, pero tiene un punto débil: los dominios catch-all. Un servidor catch-all acepta correo para cualquier dirección, así que un verificador básico marca como válido cada formato de la lista. Giggal resuelve las direcciones catch-all como válidas o no válidas, y eso es lo que hace útil una lista del permutador en esos dominios. Lee más sobre las [direcciones de correo catch-all](/blog/what-is-a-catch-all-email-address), o prueba una dirección con el [validador de correo](/email-checker).',
  ],
  responsibleTitle: 'Cómo usar estas direcciones de forma responsable',
  responsibleText:
    'Adivinar una dirección es habitual en la prospección B2B, pero importa cómo la usas. Escribe a personas que tengan un motivo claro para saber de ti, mantén el mensaje relacionado con su trabajo y haz que darse de baja sea fácil. Las normas de privacidad y antispam como el RGPD y la ley CAN-SPAM se aplican a los correos que envías, sin importar cómo encontraste la dirección.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Este permutador de correos es gratis?',
      a: 'Sí, sin registro y sin límite. Funciona en tu navegador, así que nada de lo que escribes se nos envía.',
    },
    {
      q: '¿Cuántos formatos de correo genera?',
      a: '18 para un nombre y un apellido, y más si agregas un segundo nombre, un apodo o un segundo dominio. Los duplicados se eliminan.',
    },
    {
      q: '¿Cuál es el formato de correo más común?',
      a: 'first.last@ es el primero que conviene probar en la mayoría de las empresas, seguido de flast@ y first@. Las empresas pequeñas suelen usar solo el nombre. Cada empresa fija su propia regla, así que verifica en lugar de suponer.',
    },
    {
      q: '¿Puedo generar correos para una lista completa de personas?',
      a: 'Sí. Usa el modo CSV masivo y sube un CSV con columnas de nombre, apellido y dominio. La descarga tiene una fila por cada dirección generada, con el nombre del patrón al lado.',
    },
    {
      q: '¿Me dice cuál es la dirección correcta?',
      a: 'No. Solo genera los formatos probables. Verifícalos para encontrar el que existe, y usa un verificador que maneje dominios catch-all, porque si no todos los formatos parecerán válidos.',
    },
    {
      q: '¿Y si solo sé el nombre?',
      a: 'Deja vacío el apellido y obtendrás solo los formatos con el nombre, como jane@. Es mucho menos probable que sean correctos.',
    },
  ],
  ctaHeadline: '¿Ya tienes los formatos? Encuentra el real.',
}

// Brazilian Portuguese: register "você". Name as the footer ("Permutador de e-mails").
const ptBr: PermutatorPageStrings = {
  metaTitle: 'Permutador de e-mails grátis: todos os formatos | Giggal.ai',
  ogTitle: 'Permutador de e-mails grátis: todos os formatos',
  description:
    'Digite um nome e o domínio da empresa e veja todos os formatos prováveis do e-mail corporativo, de first.last@ a flast@. Também por CSV, no navegador e grátis.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Permutador de e-mails grátis',
  crumb: 'Permutador de e-mails',
  appName: 'Permutador de e-mails grátis',
  featureList: [
    'Gera os formatos prováveis de um endereço de e-mail a partir do nome e do domínio',
    'Trata acentos, tremas, hifens e nomes com várias partes',
    'Geração em massa por CSV para até 5.000 contatos',
    'Exporta os resultados em CSV ou TXT',
    'Funciona 100% no navegador, sem telemetria',
  ],
  h1: 'Permutador de e-mails',
  heroIntro:
    'Digite um nome e o domínio de uma empresa para ver todos os formatos prováveis do endereço de e-mail, começando pelos mais comuns.',
  howTitle: 'Como usar o permutador de e-mails',
  howSteps: [
    'Digite o nome e o sobrenome da pessoa, exatamente como ela escreve. Adicione um nome do meio ou um apelido, se você souber.',
    'Digite o domínio de e-mail da empresa, como example.com. Você pode adicionar mais de um domínio se a empresa usar vários.',
    'Clique em Gerar formatos. Os formatos aparecem abaixo, com os mais comuns primeiro.',
    'Copie a lista ou baixe o arquivo, depois verifique os endereços para descobrir qual existe.',
  ],
  howNote:
    'Para uma lista de pessoas, mude para CSV em massa e envie um CSV com colunas de nome, sobrenome e domínio. Você recebe todos os formatos de cada linha em um único arquivo.',
  imageAlt: 'Ilustração de um nome que se divide em vários formatos de endereço de e-mail com uma marca de seleção.',
  formatsTitle: 'Os formatos de e-mail que ele gera',
  thPattern: 'Padrão',
  thExample: 'Exemplo para Jane Doe em example.com',
  formatsNote:
    'A lista completa também inclui hifens, ordens invertidas e iniciais do nome do meio. first.last é o ponto de partida mais comum para endereços corporativos, seguido de perto por flast e first. Mas cada empresa escolhe a sua própria convenção, então use a ordem como um guia, não como uma regra.',
  namesTitle: 'Nomes com acentos, apóstrofos e dois sobrenomes',
  namesText:
    "Endereços de e-mail raramente têm acentos, então o permutador escreve José como jose e Zoë como zoe. Nomes alemães recebem as duas grafias, porque as empresas tratam esses nomes de formas diferentes: Müller vira muller e mueller, e ß vira ss. Apóstrofos e pontos são removidos, então O'Brien vira obrien. Sobrenomes com duas partes, como de la Cruz, geram versões com as partes juntas (delacruz) e só com a última parte (cruz). Nomes com hífen mantêm o hífen em alguns formatos e o removem em outros.",
  verifyTitle: 'Por que você ainda precisa verificar a lista',
  verifyParas: [
    'Um permutador só escreve palpites. No máximo um desses endereços pertence à pessoa, e às vezes nenhum. Se você enviar para todos, os outros geram bounce, e isso prejudica a sua reputação de remetente.',
    'A verificação mostra qual caixa postal existe, mas tem um ponto fraco: os domínios catch-all. Um servidor catch-all aceita e-mails para qualquer endereço, então um verificador básico marca como válido cada formato da lista. A Giggal classifica os endereços catch-all como válidos ou inválidos, e é isso que torna uma lista do permutador útil nesses domínios. Leia mais sobre [endereços de e-mail catch-all](/blog/what-is-a-catch-all-email-address), ou teste um endereço com a [verificação de e-mail](/email-checker).',
  ],
  responsibleTitle: 'Como usar esses endereços com responsabilidade',
  responsibleText:
    'Adivinhar um endereço é comum na prospecção B2B, mas a forma como você o usa continua importando. Escreva para pessoas que tenham um motivo claro para receber a sua mensagem, mantenha a mensagem relacionada ao trabalho delas e facilite o descadastro. Regras de privacidade e antispam como o GDPR e a CAN-SPAM se aplicam aos e-mails que você envia, não importa como você encontrou o endereço.',
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Este permutador de e-mails é grátis?',
      a: 'Sim, sem cadastro e sem limite. Ele funciona no seu navegador, então nada do que você digita é enviado para nós.',
    },
    {
      q: 'Quantos formatos de e-mail ele gera?',
      a: '18 para um nome e um sobrenome, e mais quando você adiciona um nome do meio, um apelido ou um segundo domínio. Os duplicados são removidos.',
    },
    {
      q: 'Qual é o formato de e-mail mais comum?',
      a: 'first.last@ é o primeiro a testar na maioria das empresas, seguido de flast@ e first@. Empresas menores costumam usar só o primeiro nome. Cada empresa define a sua própria regra, então verifique em vez de supor.',
    },
    {
      q: 'Posso gerar e-mails para uma lista inteira de pessoas?',
      a: 'Sim. Use o modo CSV em massa e envie um CSV com colunas de nome, sobrenome e domínio. O download tem uma linha por endereço gerado, com o nome do padrão ao lado.',
    },
    {
      q: 'Ele mostra qual endereço é o correto?',
      a: 'Não. Ele só gera os formatos prováveis. Verifique esses formatos para encontrar o que existe, e use um verificador que trate domínios catch-all, senão todos os formatos vão parecer válidos.',
    },
    {
      q: 'E se eu só souber o primeiro nome?',
      a: 'Deixe o sobrenome em branco e você recebe só os formatos com o primeiro nome, como jane@. Esses formatos têm muito menos chance de estar certos.',
    },
  ],
  ctaHeadline: 'Já tem os formatos? Encontre o endereço real.',
}

const fr: PermutatorPageStrings = {
  metaTitle: 'Permutateur d’adresses email : tous les formats | Giggal.ai',
  ogTitle: 'Permutateur d’adresses email : tous les formats',
  description:
    'Saisissez un nom et un domaine d’entreprise pour obtenir les formats d’adresse email probables, de first.last@ à flast@. CSV en masse, accents gérés, gratuit.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Permutateur d’adresses email gratuit',
  crumb: 'Permutateur d’adresses email',
  appName: 'Permutateur d’adresses email gratuit',
  featureList: [
    'Génère les formats d’adresse email probables à partir d’un nom et d’un domaine',
    'Gère les accents, les trémas, les traits d’union et les noms en plusieurs parties',
    'Génération en masse par CSV jusqu’à 5 000 contacts',
    'Export des résultats en CSV ou en TXT',
    'Fonctionne à 100 % dans le navigateur, sans télémétrie',
  ],
  h1: 'Permutateur d’adresses email',
  heroIntro: 'Saisissez un nom et le domaine d’une entreprise pour obtenir tous les formats d’adresse email probables, les plus courants en premier.',
  howTitle: 'Comment utiliser le permutateur d’adresses email',
  howSteps: [
    'Saisissez le prénom et le nom de la personne, exactement comme elle les écrit. Ajoutez un deuxième prénom ou un surnom si vous en connaissez un.',
    'Saisissez le domaine email de l’entreprise, par exemple exemple.fr. Vous pouvez ajouter plusieurs domaines si l’entreprise en utilise plusieurs.',
    'Cliquez sur Générer les formats. Les formats s’affichent en dessous, les plus courants en premier.',
    'Copiez ou téléchargez la liste, puis vérifiez les adresses pour savoir laquelle existe.',
  ],
  howNote:
    'Pour une liste de personnes, passez en mode CSV en masse et importez un fichier CSV avec des colonnes prénom, nom et domaine. Vous obtenez tous les formats de chaque ligne dans un seul fichier.',
  imageAlt: 'Illustration d’un nom qui se divise en plusieurs formats d’adresse email, avec une coche.',
  formatsTitle: 'Les formats d’adresse email générés',
  thPattern: 'Modèle',
  thExample: 'Exemple pour Jane Doe chez example.com',
  formatsNote:
    'La liste complète couvre aussi les traits d’union, les ordres inversés et les initiales du deuxième prénom. first.last est le point de départ habituel pour les adresses d’entreprise, suivi de près par flast et first. Mais chaque entreprise choisit sa propre convention, donc considérez l’ordre comme une indication et non comme une règle.',
  namesTitle: 'Noms avec accents, apostrophes et deux noms de famille',
  namesText:
    'Les adresses email contiennent rarement des accents, donc le permutateur écrit José en jose et Zoë en zoe. Les noms allemands reçoivent les deux orthographes, car les entreprises les traitent de façons différentes : Müller devient muller et mueller, et ß devient ss. Les apostrophes et les points sont supprimés, donc O’Brien devient obrien. Les noms de famille en deux parties comme de la Cruz donnent des versions avec les parties jointes (delacruz) et avec la dernière partie seule (cruz). Les noms avec trait d’union gardent le trait d’union dans certains formats et le perdent dans d’autres.',
  verifyTitle: 'Pourquoi il faut quand même vérifier la liste',
  verifyParas: [
    'Un permutateur ne produit que des suppositions. Au plus une de ces adresses appartient à la personne, et parfois aucune. Si vous écrivez à toutes ces adresses, les autres provoquent des rebonds, ce qui nuit à votre réputation d’expéditeur.',
    'La vérification indique quelle boîte mail existe, mais elle a un point faible : les domaines catch-all. Un serveur catch-all accepte les messages pour n’importe quelle adresse, donc un outil de vérification simple indique que tous les formats de la liste sont valides. Giggal classe les adresses catch-all en valides ou invalides, et c’est ce qui rend une liste de permutations utilisable sur ces domaines. Pour en savoir plus, lisez notre article sur les [adresses email catch-all](/blog/what-is-a-catch-all-email-address), ou testez une adresse avec l’[outil de vérification d’adresse mail](/email-checker).',
  ],
  responsibleTitle: 'Utiliser ces adresses de façon responsable',
  responsibleText:
    'Deviner une adresse est courant en prospection B2B, mais la façon de l’utiliser compte toujours. Écrivez à des personnes qui ont une raison claire d’avoir de vos nouvelles, gardez un message en rapport avec leur métier et permettez-leur de se désinscrire facilement. Les règles sur la vie privée et contre le spam, comme le RGPD et le CAN-SPAM, s’appliquent aux emails que vous envoyez, quelle que soit la façon dont vous avez trouvé l’adresse.',
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Ce permutateur d’adresses email est-il gratuit ?',
      a: 'Oui, sans inscription et sans limite. Il fonctionne dans votre navigateur, donc rien de ce que vous saisissez ne nous est envoyé.',
    },
    {
      q: 'Combien de formats d’adresse email génère-t-il ?',
      a: '18 pour un prénom et un nom, et davantage si vous ajoutez un deuxième prénom, un surnom ou un deuxième domaine. Les doublons sont supprimés.',
    },
    {
      q: 'Quel format d’adresse email est le plus courant ?',
      a: 'first.last@ (prenom.nom@) est le format à essayer en premier dans la plupart des entreprises, suivi de flast@ et first@. Les petites entreprises utilisent souvent le prénom seul. Chaque entreprise fixe sa propre règle, donc vérifiez au lieu de supposer.',
    },
    {
      q: 'Puis-je générer des adresses pour toute une liste de personnes ?',
      a: 'Oui. Utilisez le mode CSV en masse et importez un fichier CSV avec des colonnes prénom, nom et domaine. Le fichier téléchargé contient une ligne par adresse générée, avec le nom du modèle à côté.',
    },
    {
      q: 'Me dit-il quelle adresse est la bonne ?',
      a: 'Non. Il génère seulement les formats probables. Vérifiez-les pour trouver celui qui existe, et utilisez un outil de vérification qui gère les domaines catch-all, sinon tous les formats sembleront valides.',
    },
    {
      q: 'Et si je ne connais que le prénom ?',
      a: 'Laissez le nom vide et vous obtenez uniquement les formats avec le prénom, comme marie@. Ils ont beaucoup moins de chances d’être corrects.',
    },
  ],
  ctaHeadline: 'Vous avez les formats ? Trouvez la vraie adresse.',
}

const nl: PermutatorPageStrings = {
  metaTitle: 'E-mailadressen combineren: gratis e-mailpermutator | Giggal.ai',
  ogTitle: 'E-mailadressen combineren: gratis e-mailpermutator',
  description:
    'Vul een naam en bedrijfsdomein in en krijg elk waarschijnlijk e-mailformaat, van first.last@ tot flast@. Bulk via CSV, accenten verwerkt, in je browser. Gratis.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Gratis tool om e-mailadressen te combineren',
  crumb: 'E-mailadressen combineren',
  appName: 'Gratis tool om e-mailadressen te combineren',
  featureList: [
    'Maakt waarschijnlijke e-mailadresformaten op basis van naam en domein',
    'Verwerkt accenten, umlauts, koppeltekens en namen uit meerdere delen',
    'Bulk via CSV voor maximaal 5.000 contacten',
    'Exporteer resultaten naar CSV of TXT',
    'Werkt 100% in je browser, zonder telemetrie',
  ],
  h1: 'E-mailadressen combineren',
  heroIntro: 'Vul een naam en een bedrijfsdomein in en krijg elk waarschijnlijk e-mailadresformaat, de meest gebruikte eerst.',
  howTitle: 'Zo combineer je e-mailadressen met deze tool',
  howSteps: [
    'Vul de voor- en achternaam van de persoon in, precies zoals die persoon ze schrijft. Voeg een tweede voornaam of bijnaam toe als je die kent.',
    'Vul het e-maildomein van het bedrijf in, zoals voorbeeld.nl. Je kunt meer dan één domein toevoegen als het bedrijf er meerdere gebruikt.',
    'Klik op Formaten maken. De formaten verschijnen hieronder, met de meest gebruikte eerst.',
    'Kopieer of download de lijst en verifieer daarna de adressen om te zien welk adres bestaat.',
  ],
  howNote:
    'Voor een lijst met personen schakel je over naar Bulk CSV en upload je een CSV met kolommen voor voornaam, achternaam en domein. Je krijgt alle formaten voor elke rij in één bestand.',
  imageAlt: 'Illustratie van één naam die zich vertakt in meerdere e-mailadresformaten, met een vinkje.',
  formatsTitle: 'De e-mailformaten die de tool maakt',
  thPattern: 'Patroon',
  thExample: 'Voorbeeld voor Jane Doe bij example.com',
  formatsNote:
    'De volledige lijst bevat ook koppeltekens, omgekeerde volgordes en initialen van een tweede voornaam. first.last is het gebruikelijke startpunt voor zakelijke adressen, met flast en first kort daarna. Maar elk bedrijf kiest zijn eigen afspraak, dus zie de volgorde als richtlijn en niet als regel.',
  namesTitle: 'Namen met accenten, apostrofs en twee achternamen',
  namesText:
    'E-mailadressen bevatten zelden accenten, dus de tool schrijft José als jose en Zoë als zoe. Duitse namen krijgen beide spellingen, omdat bedrijven ze verschillend verwerken: Müller wordt muller en mueller, en ß wordt ss. Apostrofs en punten vallen weg, dus O’Brien wordt obrien. Achternamen uit twee delen zoals de la Cruz geven versies met de delen aan elkaar (delacruz) en met alleen het laatste deel (cruz). Namen met een koppelteken houden het koppelteken in sommige formaten en verliezen het in andere.',
  verifyTitle: 'Waarom je de lijst toch moet verifiëren',
  verifyParas: [
    'Een permutator schrijft alleen gokken uit. Hooguit één van deze adressen hoort bij de persoon, en soms geen enkel. Als je naar alle adressen mailt, krijg je bounces op de rest, en dat schaadt je afzenderreputatie.',
    'Verificatie laat zien welke mailbox bestaat, maar heeft een zwak punt: catch-all-domeinen. Een catch-all-server accepteert mail voor elk adres, dus een eenvoudige checker meldt elk formaat op de lijst als geldig. Giggal bepaalt voor catch-all-adressen of ze geldig of ongeldig zijn, en daardoor is een lijst uit een permutator bruikbaar op die domeinen. Lees meer over [catch-all e-mailadressen](/blog/what-is-a-catch-all-email-address), of test één adres met de [email checker](/email-checker).',
  ],
  responsibleTitle: 'Deze adressen verantwoord gebruiken',
  responsibleText:
    'Een adres raden is gebruikelijk bij B2B-outreach, maar hoe je het gebruikt blijft belangrijk. Schrijf naar mensen die een duidelijke reden hebben om iets van je te horen, houd het bericht relevant voor hun werk en maak afmelden makkelijk. Privacy- en antispamregels zoals de AVG en CAN-SPAM gelden voor de e-mails die je verstuurt, hoe je het adres ook hebt gevonden.',
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Is deze tool gratis?',
      a: 'Ja, zonder registratie en zonder limiet. De tool werkt in je browser, dus niets wat je typt wordt naar ons verstuurd.',
    },
    {
      q: 'Hoeveel e-mailformaten maakt de tool?',
      a: '18 voor een voor- en achternaam, en meer als je een tweede voornaam, een bijnaam of een tweede domein toevoegt. Dubbele adressen worden verwijderd.',
    },
    {
      q: 'Welk e-mailformaat komt het meest voor?',
      a: 'first.last@ probeer je bij de meeste bedrijven als eerste, gevolgd door flast@ en first@. Kleinere bedrijven gebruiken vaak alleen de voornaam. Elk bedrijf bepaalt zijn eigen regel, dus verifieer in plaats van aan te nemen.',
    },
    {
      q: 'Kan ik e-mailadressen maken voor een hele lijst met personen?',
      a: 'Ja. Gebruik de modus Bulk CSV en upload een CSV met kolommen voor voornaam, achternaam en domein. De download bevat één rij per gemaakt adres, met de naam van het patroon ernaast.',
    },
    {
      q: 'Vertelt de tool welk adres juist is?',
      a: 'Nee. De tool maakt alleen de waarschijnlijke formaten. Verifieer ze om het adres te vinden dat bestaat, en gebruik een verificatietool die catch-all-domeinen aankan, anders lijkt elk formaat geldig.',
    },
    {
      q: 'Wat als ik alleen een voornaam ken?',
      a: 'Laat de achternaam leeg en je krijgt alleen de formaten met de voornaam, zoals sanne@. Die zijn veel minder vaak juist.',
    },
  ],
  ctaHeadline: 'Formaten gevonden? Vind nu het echte adres.',
}

const pl: PermutatorPageStrings = {
  metaTitle: 'Generator wariantów adresu e-mail: wszystkie formaty | Giggal.ai',
  ogTitle: 'Generator wariantów adresu e-mail: wszystkie formaty',
  description:
    'Wpisz imię, nazwisko i domenę firmy, a dostaniesz wszystkie prawdopodobne formaty adresu e-mail, od first.last@ do flast@. Tryb CSV, działa w przeglądarce.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Darmowy generator wariantów adresu e-mail',
  crumb: 'Generator wariantów adresu e-mail',
  appName: 'Darmowy generator wariantów adresu e-mail',
  featureList: [
    'Generuje prawdopodobne formaty adresu e-mail na podstawie imienia, nazwiska i domeny',
    'Obsługuje akcenty, umlauty, łączniki i nazwiska wieloczłonowe',
    'Masowe generowanie z pliku CSV dla maksymalnie 5000 kontaktów',
    'Eksport wyników do CSV lub TXT',
    'Działa w 100% w przeglądarce, bez telemetrii',
  ],
  h1: 'Generator wariantów adresu e-mail',
  heroIntro: 'Wpisz imię i nazwisko oraz domenę firmy, aby zobaczyć wszystkie prawdopodobne formaty adresu e-mail, od najczęstszych.',
  howTitle: 'Jak korzystać z generatora wariantów adresu e-mail',
  howSteps: [
    'Wpisz imię i nazwisko osoby dokładnie tak, jak ona je zapisuje. Dodaj drugie imię lub zdrobnienie imienia, jeśli je znasz.',
    'Wpisz domenę e-mail firmy, np. przyklad.pl. Możesz dodać więcej niż jedną domenę, jeśli firma używa kilku.',
    'Kliknij Generuj formaty. Formaty pojawią się poniżej, najczęstsze na początku.',
    'Skopiuj lub pobierz listę, a potem zweryfikuj adresy, aby sprawdzić, który z nich istnieje.',
  ],
  howNote:
    'Dla listy osób przełącz się na tryb Masowo z CSV i prześlij plik CSV z kolumnami imię, nazwisko i domena. Wszystkie formaty dla każdego wiersza dostaniesz w jednym pliku.',
  imageAlt: 'Ilustracja jednego imienia i nazwiska, z którego powstaje kilka formatów adresu e-mail, ze znakiem zaznaczenia.',
  formatsTitle: 'Formaty adresu e-mail, które generuje narzędzie',
  thPattern: 'Wzorzec',
  thExample: 'Przykład dla Jane Doe w example.com',
  formatsNote:
    'Pełna lista obejmuje też łączniki, odwróconą kolejność i inicjały drugiego imienia. first.last to typowy punkt wyjścia dla adresów firmowych, a tuż za nim są flast i first. Każda firma wybiera jednak własną konwencję, więc traktuj tę kolejność jako wskazówkę, a nie regułę.',
  namesTitle: 'Imiona i nazwiska z akcentami, apostrofami i dwoma członami',
  namesText:
    'Adresy e-mail rzadko zawierają akcenty, więc generator zapisuje José jako jose, a Zoë jako zoe. Nazwiska niemieckie dostają obie pisownie, bo firmy zapisują je różnie: Müller to muller i mueller, a ß to ss. Apostrofy i kropki są usuwane, więc O’Brien to obrien. Nazwiska dwuczłonowe, takie jak de la Cruz, dają wersje z połączonymi członami (delacruz) i tylko z ostatnim członem (cruz). Nazwiska z łącznikiem zachowują łącznik w niektórych formatach, a w innych go tracą.',
  verifyTitle: 'Dlaczego nadal trzeba zweryfikować listę',
  verifyParas: [
    'Generator wypisuje tylko przypuszczenia. Do danej osoby należy najwyżej jeden z tych adresów, a czasem żaden. Wysyłka na wszystkie oznacza odbicia na pozostałych, co szkodzi twojej reputacji nadawcy.',
    'Weryfikacja pokazuje, która skrzynka istnieje, ale ma słaby punkt: domeny catch-all. Serwer catch-all przyjmuje pocztę na dowolny adres, więc prosty weryfikator uznaje każdy format z listy za prawidłowy. Giggal rozstrzyga, czy adres catch-all jest prawidłowy, czy nieprawidłowy, i dzięki temu lista z generatora jest użyteczna w takich domenach. Przeczytaj więcej o [adresach e-mail catch-all](/blog/what-is-a-catch-all-email-address) albo sprawdź jeden adres w [weryfikatorze e-mail](/email-checker).',
  ],
  responsibleTitle: 'Odpowiedzialne korzystanie z tych adresów',
  responsibleText:
    'Odgadywanie adresów jest częste w outreachu B2B, ale sposób ich użycia nadal ma znaczenie. Pisz do osób, które mają jasny powód, by otrzymać od ciebie wiadomość, dbaj, by treść dotyczyła ich pracy, i ułatw rezygnację z kolejnych wiadomości. Przepisy o prywatności i przeciw spamowi, takie jak RODO i CAN-SPAM, dotyczą e-maili, które wysyłasz, bez względu na to, skąd pochodzi adres.',
  faqTitle: 'Najczęściej zadawane pytania',
  faqs: [
    {
      q: 'Czy ten generator wariantów adresu e-mail jest darmowy?',
      a: 'Tak, bez rejestracji i bez limitu. Działa w twojej przeglądarce, więc nic, co wpiszesz, nie jest do nas wysyłane.',
    },
    {
      q: 'Ile formatów adresu e-mail generuje?',
      a: '18 dla imienia i nazwiska, a więcej, gdy dodasz drugie imię, zdrobnienie imienia lub drugą domenę. Duplikaty są usuwane.',
    },
    {
      q: 'Który format adresu e-mail jest najczęstszy?',
      a: 'W większości firm najpierw warto spróbować first.last@ (imie.nazwisko@), a potem flast@ i first@. Mniejsze firmy często używają samego imienia. Każda firma ustala własną zasadę, więc weryfikuj adresy, zamiast zakładać.',
    },
    {
      q: 'Czy mogę wygenerować adresy dla całej listy osób?',
      a: 'Tak. Użyj trybu Masowo z CSV i prześlij plik CSV z kolumnami imię, nazwisko i domena. Pobrany plik ma jeden wiersz na każdy wygenerowany adres, z nazwą wzorca obok.',
    },
    {
      q: 'Czy narzędzie mówi, który adres jest prawidłowy?',
      a: 'Nie. Generuje tylko prawdopodobne formaty. Zweryfikuj je, aby znaleźć ten, który istnieje, i użyj weryfikatora obsługującego domeny catch-all, bo inaczej każdy format będzie wyglądał na prawidłowy.',
    },
    {
      q: 'Co, jeśli znam tylko imię?',
      a: 'Zostaw nazwisko puste, a dostaniesz tylko formaty z imieniem, np. anna@. Takie adresy są dużo rzadziej trafne.',
    },
  ],
  ctaHeadline: 'Masz formaty? Znajdź prawdziwy adres.',
}

const id: PermutatorPageStrings = {
  metaTitle: 'Kombinasi Alamat Email: Email Permutator Gratis | Giggal.ai',
  ogTitle: 'Kombinasi Alamat Email: Email Permutator Gratis',
  description:
    'Masukkan nama dan domain perusahaan untuk mendapatkan semua kemungkinan format email kantor, dari first.last@ sampai flast@. Bisa massal lewat CSV, gratis.',
  ogLocale: 'id_ID',
  ogImage: '/tools/email-permutator-og-v2.webp',
  ogAlt: 'Alat kombinasi alamat email gratis',
  crumb: 'Kombinasi alamat email',
  appName: 'Alat Kombinasi Alamat Email Gratis',
  featureList: [
    'Membuat kemungkinan format alamat email dari nama dan domain',
    'Menangani aksen, umlaut, tanda hubung, dan nama yang terdiri dari beberapa bagian',
    'Pembuatan massal lewat CSV hingga 5.000 kontak',
    'Ekspor hasil ke CSV atau TXT',
    'Berjalan 100% di browser tanpa telemetri',
  ],
  h1: 'Kombinasi Alamat Email',
  heroIntro: 'Masukkan nama dan domain perusahaan untuk mendapatkan semua kemungkinan format alamat email, mulai dari yang paling umum.',
  howTitle: 'Cara menggunakan alat kombinasi alamat email',
  howSteps: [
    'Masukkan nama depan dan nama belakang orang tersebut, persis seperti yang ia tulis. Tambahkan nama tengah atau nama panggilan jika Anda mengetahuinya.',
    'Masukkan domain email perusahaan, misalnya contoh.co.id. Anda bisa menambahkan lebih dari satu domain jika perusahaan memakai beberapa domain.',
    'Klik Buat Format. Format akan muncul di bawah, dengan yang paling umum di urutan pertama.',
    'Salin atau unduh daftarnya, lalu verifikasi alamatnya untuk mengetahui mana yang benar-benar ada.',
  ],
  howNote:
    'Untuk daftar beberapa orang, pindah ke mode CSV Massal dan unggah CSV dengan kolom nama depan, nama belakang, dan domain. Anda mendapatkan semua format untuk setiap baris dalam satu file.',
  imageAlt: 'Ilustrasi satu nama yang bercabang menjadi beberapa format alamat email dengan tanda centang.',
  formatsTitle: 'Format email yang dibuat',
  thPattern: 'Pola',
  thExample: 'Contoh untuk Jane Doe di example.com',
  formatsNote:
    'Daftar lengkapnya juga mencakup tanda hubung, urutan terbalik, dan inisial nama tengah. first.last adalah titik awal yang umum untuk alamat perusahaan, disusul flast dan first. Namun, setiap perusahaan memilih aturannya sendiri, jadi anggap urutan ini sebagai panduan, bukan aturan.',
  namesTitle: 'Nama dengan aksen, apostrof, dan dua nama keluarga',
  namesText:
    'Alamat email jarang memakai aksen, jadi alat ini menulis José menjadi jose dan Zoë menjadi zoe. Nama Jerman mendapat dua ejaan, karena perusahaan menanganinya dengan cara berbeda: Müller menjadi muller dan mueller, dan ß menjadi ss. Apostrof dan titik dihapus, jadi O’Brien menjadi obrien. Nama keluarga dua bagian seperti de la Cruz menghasilkan versi dengan bagian yang digabung (delacruz) dan versi dengan bagian terakhir saja (cruz). Nama dengan tanda hubung tetap memakai tanda hubung di beberapa format dan tanpa tanda hubung di format lain.',
  verifyTitle: 'Mengapa Anda tetap perlu memverifikasi daftarnya',
  verifyParas: [
    'Alat ini hanya menuliskan tebakan. Paling banyak satu dari alamat ini milik orang tersebut, dan kadang tidak ada sama sekali. Mengirim ke semuanya berarti terjadi bounce (email ditolak) pada sisanya, dan ini merusak reputasi pengirim Anda.',
    'Verifikasi memberi tahu kotak masuk mana yang ada, tetapi ada titik lemahnya: domain catch-all. Server catch-all menerima email untuk alamat apa pun, jadi pemeriksa email biasa menyatakan setiap format di daftar valid. Giggal menentukan apakah alamat catch-all valid atau tidak valid, dan itulah yang membuat daftar hasil kombinasi bisa dipakai di domain tersebut. Baca selengkapnya tentang [alamat email catch-all](/blog/what-is-a-catch-all-email-address), atau uji satu alamat dengan [email checker](/email-checker).',
  ],
  responsibleTitle: 'Menggunakan alamat ini secara bertanggung jawab',
  responsibleText:
    'Menebak alamat email sudah umum dalam outreach B2B, tetapi cara Anda memakainya tetap penting. Kirim email kepada orang yang punya alasan jelas untuk mendengar dari Anda, jaga agar pesan relevan dengan pekerjaan mereka, dan permudah mereka untuk berhenti berlangganan. Aturan privasi dan antispam seperti GDPR dan CAN-SPAM berlaku untuk email yang Anda kirim, dari mana pun Anda menemukan alamatnya.',
  faqTitle: 'Pertanyaan umum',
  faqs: [
    {
      q: 'Apakah alat kombinasi alamat email ini gratis?',
      a: 'Ya, tanpa pendaftaran dan tanpa batas. Alat ini berjalan di browser Anda, jadi apa pun yang Anda ketik tidak dikirim ke kami.',
    },
    {
      q: 'Berapa banyak format email yang dibuat?',
      a: '18 untuk nama depan dan nama belakang, dan lebih banyak jika Anda menambahkan nama tengah, nama panggilan, atau domain kedua. Duplikat dihapus.',
    },
    {
      q: 'Format email mana yang paling umum?',
      a: 'first.last@ adalah format yang pertama dicoba di sebagian besar perusahaan, disusul flast@ dan first@. Perusahaan kecil sering memakai nama depan saja. Setiap perusahaan menentukan aturannya sendiri, jadi verifikasi alamatnya, jangan berasumsi.',
    },
    {
      q: 'Bisakah saya membuat email untuk seluruh daftar orang?',
      a: 'Bisa. Gunakan mode CSV Massal dan unggah CSV dengan kolom nama depan, nama belakang, dan domain. File unduhan berisi satu baris untuk setiap alamat yang dibuat, dengan nama polanya di sebelahnya.',
    },
    {
      q: 'Apakah alat ini memberi tahu alamat mana yang benar?',
      a: 'Tidak. Alat ini hanya membuat format yang mungkin. Verifikasi format tersebut untuk menemukan alamat yang ada, dan gunakan alat verifikasi yang menangani domain catch-all, karena jika tidak, setiap format akan terlihat valid.',
    },
    {
      q: 'Bagaimana jika saya hanya tahu nama depannya?',
      a: 'Kosongkan nama belakang, dan Anda hanya mendapatkan format nama depan, seperti budi@. Format ini jauh lebih kecil kemungkinannya untuk benar.',
    },
  ],
  ctaHeadline: 'Sudah dapat formatnya? Temukan alamat yang asli.',
}

export const PERMUTATOR_PAGE_STRINGS: Partial<Record<Locale, PermutatorPageStrings>> & { en: PermutatorPageStrings } = {
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
