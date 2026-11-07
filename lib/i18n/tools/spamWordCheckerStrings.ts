// All page copy for the spam word checker, one object per language the page ships in.
// The page is components/tools/SpamWordChecker/SpamWordCheckerPage.tsx; the URLs live in
// CLUSTERS.spamWordChecker (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/spamWordCheckerToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface SpamPageStrings {
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
  /**
   * Shown under the hero intro. Other languages use it to say that the phrase list
   * checks English trigger phrases, while the formatting, link and merge tag checks
   * work in any language. English leaves it out, so nothing shows.
   */
  wordListNote?: string
  howTitle: string
  howSteps: [string, string, string, string]
  imageAlt: string
  mattersTitle: string
  mattersParas: [string, string]
  looksTitle: string
  /** Phrase groups, formatting, links, bulk-send slips. */
  looksParas: [string, string, string, string]
  cleanTitle: string
  /** Carries the two links. */
  cleanPara: string
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: SpamPageStrings = {
  metaTitle: 'Free Spam Word Checker: Find Risky Words in Your Email | Giggal.ai',
  ogTitle: 'Free Spam Word Checker: Find Risky Words in Your Email',
  description:
    'Paste your subject line and email to highlight spam trigger words, all caps, link shorteners and broken merge tags. Runs in your browser. Free, no signup.',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Free Spam Word Checker',
  crumb: 'Spam Word Checker',
  appName: 'Free Spam Word Checker',
  featureList: [
    'Scan email subject line and body for 180+ spam trigger words across 5 categories',
    'Detect link shorteners, broken merge tags, and excessive punctuation',
    'Highlight risky words in-place with plainer phrasing suggestions',
    'Provide plain actionable summary without deceptive numeric scores',
    'Runs 100% in-browser with zero upload or telemetry',
  ],
  h1: 'Spam Word Checker',
  heroIntro:
    'Paste your subject line and email copy to see the words and habits that make filters and readers suspicious.',
  howTitle: 'How to use the spam word checker',
  howSteps: [
    'Paste your subject line, and the preview text if you use one.',
    'Paste the email body. Plain text and copied HTML both work.',
    'Click Check. Risky words are highlighted in place, and the list below explains each one and suggests a plainer alternative.',
    'Fix what makes sense, then check again.',
  ],
  imageAlt: 'Illustration of an email draft with highlighted words inspected by a magnifying glass.',
  mattersTitle: 'Do spam words still matter?',
  mattersParas: [
    "Less than most lists suggest. Gmail and Microsoft decide mostly on who's sending and how people react: whether your domain passes SPF, DKIM and DMARC, how many recipients mark you as spam, and whether your mail bounces. Google's sender guidelines, for example, cover authentication, spam complaint rates and easy unsubscribing, not banned words.",
    "Words still matter in two ways. Some filters score phrases, especially for senders without much history. And pushy wording makes people hit Report spam, which is the signal that really hurts. So treat a highlighted word as a question to ask yourself, not a rule: free shipping on orders over $50 is fine, while FREE MONEY, ACT NOW isn't.",
  ],
  looksTitle: 'What the checker looks for',
  looksParas: [
    "Words and phrases in five groups: urgency (act now, last chance), money (100% free, lowest price), overpromising (guaranteed, risk-free), shady wording that scams use (no credit check, this isn't spam) and clickbait (you won't believe).",
    'Formatting that looks careless or pushy: subject lines in capitals, strings of exclamation marks, and rows of dollar signs.',
    'Links: shortened links like bit.ly hide where they lead, and both filters and readers distrust them. Lots of links in a short cold email also stand out.',
    "Slips that give away a bulk send: merge tags that didn't fill in, like {{first_name}} or *|FNAME|*, and a Re: or Fwd: on a message that isn't a reply.",
  ],
  cleanTitle: "What a clean result doesn't tell you",
  cleanPara:
    "A clean check means the copy itself isn't raising flags. It says nothing about your sending domain or your list, which matter more. Mail from a domain without SPF, DKIM and DMARC, or sent to a list full of dead addresses, can land in spam however carefully it's written. [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained) covers the first, and [email list cleaning](/email-list-cleaning) covers the second.",
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Can I use the word free in my emails?',
      a: 'Yes, in normal context. Free trial or free shipping is ordinary marketing language. It becomes a problem when it’s stacked with other pushy phrases, written in capitals or used to promise something that sounds too good to be true.',
    },
    {
      q: 'Is my email copy sent anywhere?',
      a: 'No. The check runs in your browser, so you can paste unpublished campaigns safely.',
    },
    {
      q: 'Why does it flag Re: in my subject line?',
      a: 'A Re: or Fwd: on a first message is an old trick to fake a conversation. Readers notice, and it can earn spam reports. Keep it for real replies.',
    },
    {
      q: 'Will removing these words get me into the inbox?',
      a: 'Not on its own. It removes one set of warning signs. Inbox placement depends more on your sender reputation, your authentication and the quality of your list.',
    },
    {
      q: 'How many links should a cold email have?',
      a: 'There’s no official number. One link, or none in the first email, is common practice for cold outreach, because a message full of links looks like marketing.',
    },
    {
      q: 'Why doesn’t it give me a score out of 100?',
      a: 'Because no checker knows how a specific inbox will treat your mail, and a precise-looking score would suggest otherwise. You get a plain summary and a list of things worth fixing instead.',
    },
  ],
  ctaHeadline: 'Copy clean? Check the list.',
  ctaSupporting:
    'Bounces from dead addresses hurt your reputation more than any word. Verify your list before you send. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const ja: SpamPageStrings = {
  metaTitle: 'スパムワードチェッカー：メールの件名と本文を無料でチェック | Giggal.ai',
  ogTitle: 'スパムワードチェッカー：メールの件名と本文を無料でチェック',
  description:
    'メールの件名と本文を貼り付けると、英語のスパムワード、大文字の多用、短縮URL、置き換わっていない差し込みタグを強調表示します。ブラウザ内で動作し、無料で登録も不要です。',
  ogLocale: 'ja_JP',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: '無料のスパムワードチェッカー',
  crumb: 'スパムワードチェッカー',
  appName: '無料のスパムワードチェッカー',
  featureList: [
    'メールの件名と本文から、5つのカテゴリの英語のスパムワード180件以上を検出',
    '短縮URL、置き換わっていない差し込みタグ、多すぎる記号を検出',
    '危険な単語をその場で強調表示し、より平易な言い回しを提案',
    '誤解を招く数値スコアではなく、すぐ対応できる平易な概要を表示',
    '100%ブラウザ内で動作し、アップロードや利用データの送信（テレメトリー）なし',
  ],
  h1: 'スパムワードチェッカー',
  heroIntro: 'メールの件名と本文を貼り付けると、フィルタや読み手に疑われる単語や書き方がわかります。',
  wordListNote:
    'スパムワードの一覧が対象にするのは英語の単語とフレーズで、大文字、感嘆符、リンク、短縮URL、差し込みタグ、件名の長さのチェックはどの言語の文面にも使えます。',
  howTitle: 'スパムワードチェッカーの使い方',
  howSteps: [
    '件名を貼り付けます。プレビューテキストを使う場合は、それも貼り付けます。',
    'メールの本文を貼り付けます。プレーンテキストでも、コピーしたHTMLでも使えます。',
    '「メール文面をチェック」をクリックします。危険な単語がその場で強調表示されます。下の一覧では、それぞれの理由と、より平易な言い換えの案を確認できます。',
    '必要な箇所を直してから、もう一度チェックします。',
  ],
  imageAlt: '強調表示された単語のあるメールの下書きを、虫眼鏡で調べている様子のイラスト。',
  mattersTitle: 'スパムワードは今も影響するのか',
  mattersParas: [
    '多くの一覧が示すほどではありません。GmailとMicrosoftは主に、誰が送っているかと、受信者がどう反応するかで判断します。ドメインがSPF、DKIM、DMARCに合格しているか、迷惑メールとして報告する受信者がどれだけいるか、メールがバウンスしていないかです。たとえばGoogleの送信者ガイドラインが扱うのは、認証、迷惑メールの報告率、簡単な配信停止で、禁止ワードではありません。',
    'それでも、単語は2つの点で影響します。フレーズに点数を付けるフィルタがあり、特に送信実績の少ない送信者が影響を受けます。また、押しの強い言葉は受信者に「迷惑メールを報告」を押させます。これが実際に大きな悪影響を与える信号です。強調表示された単語は、決まりではなく、自分に問いかけるきっかけとして扱ってください。「free shipping on orders over $50」は問題ありませんが、「FREE MONEY, ACT NOW」は問題です。',
  ],
  looksTitle: 'チェックする内容',
  looksParas: [
    "5つのグループの単語とフレーズ：緊急性（act now、last chance）、お金（100% free、lowest price）、誇大な約束（guaranteed、risk-free）、詐欺で使われる怪しい言い回し（no credit check、this isn't spam）、クリックベイト（you won't believe）。",
    '雑に見える、または押しの強い書式：大文字だけの件名、連続した感嘆符、並んだドル記号。',
    'リンク：bit.lyのような短縮URLはリンク先を隠すため、フィルタにも読み手にも信用されません。短いコールドメールにリンクが多いことも目立ちます。',
    '一斉送信だとわかってしまうミス：{{first_name}}や*|FNAME|*のように置き換わっていない差し込みタグと、返信ではないメールに付いたRe:やFwd:。',
  ],
  cleanTitle: '問題なしの結果でもわからないこと',
  cleanPara:
    '問題なしの結果は、文面そのものに警告の要素がないことを意味します。送信ドメインやリストについては何もわかりませんが、こちらのほうが重要です。SPF、DKIM、DMARCのないドメインからのメールや、存在しないアドレスが多いリストに送ったメールは、どれだけ丁寧に書いても迷惑メールフォルダに入ることがあります。1つ目は[SPF・DKIM・DMARCの解説](/blog/spf-dkim-dmarc-explained)で、2つ目は[メールリストのクリーニング](/email-list-cleaning)（英語）で説明しています。',
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'メールでfreeという単語を使ってもよいですか？',
      a: 'はい、通常の文脈なら使えます。free trialやfree shippingは、普通のマーケティングの言葉です。ほかの押しの強いフレーズと重ねたり、大文字で書いたり、うますぎる話を約束するのに使ったりすると問題になります。',
    },
    {
      q: 'メールの文面はどこかに送信されますか？',
      a: 'いいえ。チェックはブラウザ内で行われるため、未公開のキャンペーンも安全に貼り付けられます。',
    },
    {
      q: '件名のRe:が指摘されるのはなぜですか？',
      a: '最初のメールにRe:やFwd:を付けるのは、やり取りがあったように見せる古い手口です。読み手は気づき、迷惑メールとして報告されることがあります。本当の返信だけに使ってください。',
    },
    {
      q: 'これらの単語を取り除けば受信トレイに届きますか？',
      a: 'それだけでは届きません。取り除けるのは、警告の要素の一部だけです。受信トレイへの到達は、送信者レピュテーション、認証、リストの質に大きく左右されます。',
    },
    {
      q: 'コールドメールにはリンクをいくつ入れるべきですか？',
      a: '公式の数はありません。コールドメールでは、リンクを1つにするか、最初のメールには入れないのが一般的です。リンクの多いメールは広告に見えるからです。',
    },
    {
      q: '100点満点のスコアが表示されないのはなぜですか？',
      a: '特定の受信トレイがメールをどう扱うかは、どのチェッカーにもわからないからです。正確そうなスコアを出すと、わかるかのように見えてしまいます。代わりに、平易な概要と直す価値のある項目の一覧を表示します。',
    },
  ],
  ctaHeadline: '文面に問題がなければ、リストを確認しましょう',
}

const ko: SpamPageStrings = {
  metaTitle: '스팸 단어 검사기: 이메일 제목과 본문 무료 검사 | Giggal.ai',
  ogTitle: '스팸 단어 검사기: 이메일 제목과 본문 무료 검사',
  description:
    '이메일 제목과 본문을 붙여 넣으면 영어 스팸 유발 단어, 대문자 남용, 단축 URL, 채워지지 않은 병합 태그를 강조 표시합니다. 브라우저 안에서 실행되며, 무료이고 가입도 필요 없습니다.',
  ogLocale: 'ko_KR',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: '무료 스팸 단어 검사기',
  crumb: '스팸 단어 검사기',
  appName: '무료 스팸 단어 검사기',
  featureList: [
    '이메일 제목과 본문에서 5개 범주, 180개 이상의 영어 스팸 유발 단어 검사',
    '단축 URL, 채워지지 않은 병합 태그, 과도한 문장 부호 감지',
    '위험한 단어를 그 자리에서 강조 표시하고 더 평이한 표현 제안',
    '오해를 부르는 숫자 점수 대신 바로 실천할 수 있는 평이한 요약 제공',
    '100% 브라우저 안에서 실행, 업로드나 사용 데이터 전송 없음',
  ],
  h1: '스팸 단어 검사기',
  heroIntro: '이메일 제목과 본문을 붙여 넣으면 필터와 독자가 의심하게 만드는 단어와 습관을 확인할 수 있습니다.',
  wordListNote:
    '단어 목록은 영어 스팸 유발 단어를 검사하며, 대문자, 느낌표, 링크, 단축 URL, 병합 태그, 길이 검사는 모든 언어의 텍스트에서 작동합니다.',
  howTitle: '스팸 단어 검사기 사용 방법',
  howSteps: [
    '제목을 붙여 넣고, 미리 보기 텍스트를 쓴다면 그것도 붙여 넣습니다.',
    '이메일 본문을 붙여 넣습니다. 일반 텍스트와 복사한 HTML 모두 사용할 수 있습니다.',
    '“이메일 문구 검사”를 클릭합니다. 위험한 단어가 그 자리에서 강조 표시되고, 아래 목록에서 각 단어의 이유와 더 평이한 대안을 확인할 수 있습니다.',
    '필요한 부분을 고친 다음 다시 검사합니다.',
  ],
  imageAlt: '강조 표시된 단어가 있는 이메일 초안을 돋보기로 살펴보는 그림.',
  mattersTitle: '스팸 단어는 지금도 중요합니까?',
  mattersParas: [
    '대부분의 목록이 말하는 것보다는 덜 중요합니다. Gmail과 Microsoft는 주로 누가 보내는지와 수신자가 어떻게 반응하는지로 판단합니다. 도메인이 SPF, DKIM, DMARC를 통과하는지, 얼마나 많은 수신자가 스팸으로 신고하는지, 메일이 반송되는지입니다. 예를 들어 Google의 발신자 가이드라인은 인증, 스팸 신고율, 쉬운 수신 거부를 다루며, 금지 단어는 다루지 않습니다.',
    '그래도 단어는 두 가지 면에서 중요합니다. 일부 필터는 문구에 점수를 매기며, 발송 이력이 적은 발신자에게 특히 그렇습니다. 그리고 밀어붙이는 표현은 사람들이 “스팸 신고”를 누르게 만들며, 이것이 실제로 큰 피해를 주는 신호입니다. 그러니 강조 표시된 단어를 규칙이 아니라 스스로에게 던지는 질문으로 보십시오. “free shipping on orders over $50” 같은 문구는 괜찮지만 “FREE MONEY, ACT NOW” 같은 문구는 그렇지 않습니다.',
  ],
  looksTitle: '검사 항목',
  looksParas: [
    "다섯 그룹의 단어와 문구: 긴급성(act now, last chance), 돈(100% free, lowest price), 과장된 약속(guaranteed, risk-free), 사기에 쓰이는 수상한 표현(no credit check, this isn't spam), 낚시성 문구(you won't believe).",
    '부주의하거나 밀어붙이는 듯 보이는 서식: 대문자로 쓴 제목, 연달아 쓴 느낌표, 줄지어 쓴 달러 기호.',
    '링크: bit.ly 같은 단축 링크는 연결되는 곳을 숨기므로 필터와 독자 모두 신뢰하지 않습니다. 짧은 콜드메일에 링크가 많아도 눈에 띕니다.',
    '대량 발송임을 드러내는 실수: {{first_name}}이나 *|FNAME|*처럼 채워지지 않은 병합 태그, 그리고 답장이 아닌 메일에 붙은 Re: 또는 Fwd:.',
  ],
  cleanTitle: '깨끗한 결과가 알려 주지 않는 것',
  cleanPara:
    '깨끗한 결과는 문구 자체에 경고 신호가 없다는 뜻입니다. 발송 도메인이나 리스트에 대해서는 아무것도 알려 주지 않는데, 이 둘이 더 중요합니다. SPF, DKIM, DMARC가 없는 도메인에서 보낸 메일이나, 존재하지 않는 주소가 많은 리스트로 보낸 메일은 아무리 신경 써서 써도 스팸함에 들어갈 수 있습니다. 첫 번째는 [SPF, DKIM, DMARC 설명](/blog/spf-dkim-dmarc-explained)에서, 두 번째는 [이메일 리스트 정리](/email-list-cleaning)(영어)에서 다룹니다.',
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      q: 'free라는 단어를 이메일에 써도 됩니까?',
      a: '예, 일반적인 맥락이라면 괜찮습니다. free trial이나 free shipping은 흔한 마케팅 용어입니다. 다른 밀어붙이는 문구와 함께 쌓이거나, 대문자로 쓰이거나, 믿기 어려울 만큼 좋은 것을 약속하는 데 쓰일 때 문제가 됩니다.',
    },
    {
      q: '이메일 문구가 어딘가로 전송됩니까?',
      a: '아니요. 검사는 브라우저 안에서 실행되므로 공개 전 캠페인도 안심하고 붙여 넣을 수 있습니다.',
    },
    {
      q: '제목의 Re:를 지적하는 이유는 무엇입니까?',
      a: '첫 메일에 Re:나 Fwd:를 붙이는 것은 대화가 있었던 것처럼 꾸미는 오래된 수법입니다. 독자는 알아차리고, 스팸 신고로 이어질 수 있습니다. 실제 답장에만 쓰십시오.',
    },
    {
      q: '이 단어들을 없애면 받은편지함에 도착합니까?',
      a: '그것만으로는 안 됩니다. 경고 신호 한 가지를 없앨 뿐입니다. 받은편지함 도달은 발신자 평판, 인증, 리스트 품질에 더 크게 좌우됩니다.',
    },
    {
      q: '콜드메일에는 링크를 몇 개 넣어야 합니까?',
      a: '공식적인 숫자는 없습니다. 콜드메일에서는 링크를 하나만 넣거나 첫 메일에는 넣지 않는 것이 일반적입니다. 링크가 많은 메일은 마케팅 메일처럼 보이기 때문입니다.',
    },
    {
      q: '100점 만점 점수를 주지 않는 이유는 무엇입니까?',
      a: '특정 받은편지함이 메일을 어떻게 처리할지는 어떤 검사 도구도 알 수 없고, 정밀해 보이는 점수는 마치 알 수 있는 것처럼 보이게 하기 때문입니다. 대신 평이한 요약과 고칠 만한 항목 목록을 보여 드립니다.',
    },
  ],
  ctaHeadline: '문구가 깨끗하다면, 리스트를 확인하십시오',
}

const tr: SpamPageStrings = {
  metaTitle: 'Spam kelime kontrolü: mail metnini ücretsiz tarayın | Giggal.ai',
  ogTitle: 'Spam kelime kontrolü: mail metnini ücretsiz tarayın',
  description:
    'Mail konu satırınızı ve metninizi yapıştırın. İngilizce spam kelimeleri, büyük harfler, kısa linkler ve boş birleştirme etiketleri işaretlenir. Ücretsizdir.',
  ogLocale: 'tr_TR',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Ücretsiz spam kelime kontrolü aracı',
  crumb: 'Spam kelime kontrolü',
  appName: 'Ücretsiz spam kelime kontrolü aracı',
  featureList: [
    "Mail konu satırını ve metnini 5 kategoride 180'den fazla İngilizce spam tetikleyici kelime için tarar",
    'Link kısaltıcıları, doldurulmamış birleştirme etiketlerini ve aşırı noktalama işaretlerini tespit eder',
    'Riskli kelimeleri metnin içinde vurgular ve daha sade ifadeler önerir',
    'Yanıltıcı sayısal puanlar yerine sade ve uygulanabilir bir özet sunar',
    '%100 tarayıcıda çalışır, hiçbir şey yüklenmez ve kullanım verisi gönderilmez',
  ],
  h1: 'Spam kelime kontrolü',
  heroIntro:
    'Konu satırınızı ve mail metninizi yapıştırın. Filtreleri ve okuyucuları şüphelendiren kelimeleri ve alışkanlıkları görün.',
  wordListNote:
    'Kelime listesi İngilizce spam tetikleyici kelimeleri kontrol eder, büyük harf, ünlem işareti, link, link kısaltıcı, birleştirme etiketi ve uzunluk kontrolleri ise her dildeki metinde çalışır.',
  howTitle: 'Spam kelime kontrolü aracı nasıl kullanılır?',
  howSteps: [
    'Konu satırınızı ve kullanıyorsanız önizleme metnini yapıştırın.',
    'E-posta metnini yapıştırın. Düz metin de kopyalanmış HTML de çalışır.',
    'E-posta metnini kontrol edin düğmesine tıklayın. Riskli kelimeler metnin içinde vurgulanır. Aşağıdaki liste her birini açıklar ve daha sade bir alternatif önerir.',
    'Mantıklı olanları düzeltin, ardından yeniden kontrol edin.',
  ],
  imageAlt: 'Vurgulanmış kelimeler içeren bir e-posta taslağının büyüteçle incelendiğini gösteren çizim.',
  mattersTitle: 'Spam kelimeler hâlâ önemli mi?',
  mattersParas: [
    "Çoğu listenin düşündürdüğünden daha az. Gmail ve Microsoft kararı çoğunlukla kimin gönderdiğine ve insanların nasıl tepki verdiğine göre verir: alan adınızın SPF, DKIM ve DMARC kontrollerinden geçip geçmediği, kaç alıcının sizi spam olarak işaretlediği ve e-postalarınızın geri dönüp dönmediği. Örneğin Google'ın gönderen yönergeleri yasaklı kelimeleri değil, kimlik doğrulamayı, spam şikâyet oranlarını ve kolay abonelikten çıkmayı ele alır.",
    'Kelimeler yine de iki şekilde önemlidir. Bazı filtreler ifadeleri puanlar, özellikle fazla gönderim geçmişi olmayan gönderenler için. Ayrıca baskıcı ifadeler insanların “Spam olarak bildir” düğmesine basmasına yol açar ve asıl zarar veren sinyal budur. Bu yüzden vurgulanan bir kelimeyi bir kural olarak değil, kendinize sormanız gereken bir soru olarak görün: “free shipping on orders over $50” sorun değildir, “FREE MONEY, ACT NOW” ise sorundur.',
  ],
  looksTitle: 'Araç neleri kontrol eder?',
  looksParas: [
    "Beş gruptaki kelime ve ifadeler: aciliyet (act now, last chance), para (100% free, lowest price), aşırı vaat (guaranteed, risk-free), dolandırıcıların kullandığı şüpheli ifadeler (no credit check, this isn't spam) ve tık tuzağı (you won't believe).",
    'Özensiz veya baskıcı görünen biçimlendirme: büyük harfle yazılmış konu satırları, art arda ünlem işaretleri ve sıra sıra dolar işaretleri.',
    'Linkler: bit.ly gibi kısaltılmış linkler nereye gittiklerini gizler ve hem filtreler hem okuyucular onlara güvenmez. Kısa bir soğuk e-postada çok sayıda link olması da dikkat çeker.',
    'Toplu gönderimi ele veren hatalar: {{first_name}} veya *|FNAME|* gibi doldurulmamış birleştirme etiketleri ve yanıt olmayan bir mesajın başındaki Re: veya Fwd:.',
  ],
  cleanTitle: 'Temiz bir sonucun size söylemedikleri',
  cleanPara:
    'Temiz bir kontrol, metnin kendisinin uyarı işareti taşımadığı anlamına gelir. Gönderen alan adınız veya listeniz hakkında hiçbir şey söylemez, oysa bunlar daha önemlidir. SPF, DKIM ve DMARC olmayan bir alan adından gelen veya artık var olmayan adreslerle dolu bir listeye gönderilen e-posta, ne kadar özenle yazılmış olursa olsun spam klasörüne düşebilir. İlki için [SPF, DKIM ve DMARC nedir](/blog/spf-dkim-dmarc-explained) yazısına, ikincisi için [e-posta listesi temizleme](/email-list-cleaning) (İngilizce) sayfasına bakın.',
  faqTitle: 'Sıkça sorulan sorular',
  faqs: [
    {
      q: 'Maillerimde free kelimesini kullanabilir miyim?',
      a: 'Evet, normal bir bağlamda. Free trial veya free shipping sıradan pazarlama dilidir. Başka baskıcı ifadelerle bir araya getirildiğinde, büyük harflerle yazıldığında veya gerçek olamayacak kadar iyi görünen bir şey vaat etmek için kullanıldığında sorun olur.',
    },
    {
      q: 'Mail metnim bir yere gönderiliyor mu?',
      a: 'Hayır. Kontrol tarayıcınızda çalışır, bu yüzden yayımlanmamış kampanyaları güvenle yapıştırabilirsiniz.',
    },
    {
      q: 'Konu satırımdaki Re: neden işaretleniyor?',
      a: 'İlk mesajdaki Re: veya Fwd:, sahte bir yazışma izlenimi vermek için kullanılan eski bir hiledir. Okuyucular bunu fark eder ve bu durum spam şikâyetlerine yol açabilir. Bunu yalnızca gerçek yanıtlarda kullanın.',
    },
    {
      q: 'Bu kelimeleri kaldırmak mailimi gelen kutusuna ulaştırır mı?',
      a: 'Tek başına hayır. Yalnızca bir grup uyarı işaretini kaldırır. Gelen kutusuna ulaşma daha çok gönderen itibarınıza, kimlik doğrulamanıza ve listenizin kalitesine bağlıdır.',
    },
    {
      q: 'Bir cold mailde kaç link olmalı?',
      a: 'Resmi bir sayı yoktur. Soğuk e-postalarda tek link kullanmak veya ilk e-postada hiç link kullanmamak yaygın bir uygulamadır, çünkü linklerle dolu bir mesaj pazarlama e-postası gibi görünür.',
    },
    {
      q: 'Neden 100 üzerinden bir puan vermiyor?',
      a: 'Çünkü hiçbir kontrol aracı belirli bir gelen kutusunun e-postanıza nasıl davranacağını bilemez ve kesin görünen bir puan bunun aksini ima ederdi. Bunun yerine sade bir özet ve düzeltmeye değer şeylerin bir listesini alırsınız.',
    },
  ],
  ctaHeadline: 'Metin temiz mi? Şimdi listeyi kontrol edin.',
}

// Italian: register "tu". Name as the footer ("Controllo parole spam"). The phrase
// list and its alternatives are English, so the examples from it stay English.
const it: SpamPageStrings = {
  metaTitle: 'Controllo parole spam gratis per le tue email | Giggal.ai',
  ogTitle: 'Controllo parole spam gratis per le tue email',
  description:
    'Incolla oggetto e testo dell’email per evidenziare parole spam, maiuscole, link accorciati e merge tag vuoti. Nel browser, gratis e senza registrazione.',
  ogLocale: 'it_IT',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Controllo parole spam gratis',
  crumb: 'Controllo parole spam',
  appName: 'Controllo parole spam gratis',
  featureList: [
    'Controlla oggetto e testo dell’email con oltre 180 parole spam inglesi in 5 categorie',
    'Rileva accorciatori di link, merge tag non compilati e punteggiatura eccessiva',
    'Evidenzia le parole a rischio nel testo, con alternative più semplici in inglese',
    'Fornisce un riepilogo chiaro e pratico, senza punteggi numerici ingannevoli',
    'Funziona al 100% nel browser, senza caricamenti né telemetria',
  ],
  h1: 'Controllo parole spam',
  heroIntro:
    'Incolla l’oggetto e il testo della tua email per vedere le parole e le abitudini che rendono sospettosi i filtri e i lettori.',
  wordListNote:
    'L’elenco delle frasi copre le parole spam in inglese, mentre gli altri controlli (maiuscole, punti esclamativi, link, accorciatori di link, merge tag e lunghezza) funzionano con testi in qualsiasi lingua.',
  howTitle: 'Come usare il controllo parole spam',
  howSteps: [
    'Incolla l’oggetto, e anche il testo di anteprima se lo usi.',
    'Incolla il corpo dell’email. Funzionano sia il testo semplice sia l’HTML copiato.',
    'Fai clic su Controlla il testo. Le parole a rischio vengono evidenziate nel testo, e la lista sotto spiega ognuna e suggerisce un’alternativa più semplice.',
    'Correggi ciò che ha senso, poi controlla di nuovo.',
  ],
  imageAlt: 'Illustrazione di una bozza di email con parole evidenziate esaminate con una lente d’ingrandimento.',
  mattersTitle: 'Le parole spam contano ancora?',
  mattersParas: [
    'Meno di quanto suggerisce la maggior parte delle liste. Gmail e Microsoft decidono soprattutto in base a chi invia e a come reagiscono le persone: se il tuo dominio supera SPF, DKIM e DMARC, quanti destinatari ti segnalano come spam e se la tua posta rimbalza. Le linee guida di Google per i mittenti, per esempio, riguardano autenticazione, tassi di reclamo per spam e disiscrizione semplice, non parole vietate.',
    'Le parole contano comunque in due modi. Alcuni filtri assegnano un punteggio alle frasi, soprattutto per i mittenti con poca storia di invio. E un linguaggio insistente spinge le persone a fare clic su Segnala spam, che è il segnale che fa davvero danni. Quindi considera una parola evidenziata come una domanda da farti, non come una regola: “free shipping on orders over $50” va bene, mentre “FREE MONEY, ACT NOW” no.',
  ],
  looksTitle: 'Cosa controlla lo strumento',
  looksParas: [
    "Parole e frasi in inglese divise in cinque gruppi: urgenza (act now, last chance), denaro (100% free, lowest price), promesse eccessive (guaranteed, risk-free), formulazioni ambigue usate nelle truffe (no credit check, this isn't spam) e clickbait (you won't believe).",
    'Formattazione che sembra trascurata o insistente: oggetti in maiuscolo, serie di punti esclamativi e file di simboli del dollaro.',
    'Link: i link accorciati come bit.ly nascondono la loro destinazione, e sia i filtri sia i lettori non si fidano. Anche molti link in una cold email breve si notano.',
    'Errori che rivelano un invio di massa: merge tag non compilati, come {{first_name}} o *|FNAME|*, e un Re: o Fwd: in un messaggio che non è una risposta.',
  ],
  cleanTitle: 'Cosa non ti dice un risultato pulito',
  cleanPara:
    'Un controllo pulito significa che il testo in sé non fa scattare segnali di allarme. Non dice nulla sul tuo dominio di invio o sulla tua lista, che contano di più. La posta da un dominio senza SPF, DKIM e DMARC, o inviata a una lista piena di indirizzi non più validi, può finire nello spam anche se è scritta con cura. [SPF, DKIM e DMARC: cosa sono](/blog/spf-dkim-dmarc-explained) spiega il primo punto, e la [pulizia delle liste email](/email-list-cleaning) (in inglese) spiega il secondo.',
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Posso usare parole come “gratis” o “free” nelle mie email?',
      a: 'Sì, in un contesto normale. Prova gratuita o spedizione gratuita sono espressioni normali del marketing. Diventano un problema quando sono accumulate insieme ad altre frasi insistenti, scritte in maiuscolo o usate per promettere qualcosa che sembra troppo bello per essere vero.',
    },
    {
      q: 'Il testo della mia email viene inviato da qualche parte?',
      a: 'No. Il controllo avviene nel tuo browser, quindi puoi incollare in sicurezza campagne non ancora pubblicate.',
    },
    {
      q: 'Perché segnala Re: nel mio oggetto?',
      a: 'Un Re: o Fwd: in un primo messaggio è un vecchio trucco per simulare una conversazione. I lettori se ne accorgono, e può portare a segnalazioni di spam. Usalo solo per le risposte vere.',
    },
    {
      q: 'Togliere queste parole basta per arrivare nella posta in arrivo?',
      a: 'Da solo no. Togli un gruppo di segnali di allarme. Il recapito nella posta in arrivo dipende di più dalla tua reputazione di mittente, dalla tua autenticazione e dalla qualità della tua lista.',
    },
    {
      q: 'Quanti link dovrebbe avere una cold email?',
      a: 'Non c’è un numero ufficiale. Un solo link, o nessun link nella prima email, è una pratica comune nella prospezione a freddo, perché un messaggio pieno di link sembra marketing.',
    },
    {
      q: 'Perché non mi dà un punteggio su 100?',
      a: 'Perché nessuno strumento sa come una specifica casella tratterà la tua posta, e un punteggio dall’aspetto preciso farebbe pensare il contrario. Ricevi invece un riepilogo chiaro e una lista di cose da correggere.',
    },
  ],
  ctaHeadline: 'Testo pulito? Controlla la lista.',
}

// German: register "Sie". Name as the footer ("Spam-Wörter-Prüfer"). The phrase
// list and its alternatives are English, so the examples from it stay English.
const de: SpamPageStrings = {
  metaTitle: 'Spam-Wörter-Prüfer: riskante Wörter in E-Mails | Giggal.ai',
  ogTitle: 'Spam-Wörter-Prüfer: riskante Wörter in E-Mails',
  description:
    'Fügen Sie Betreff und E-Mail-Text ein und markieren Sie Spam-Wörter, Großbuchstaben, Linkverkürzer und leere Platzhalter. Im Browser und kostenlos.',
  ogLocale: 'de_DE',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Kostenloser Spam-Wörter-Prüfer',
  crumb: 'Spam-Wörter-Prüfer',
  appName: 'Kostenloser Spam-Wörter-Prüfer',
  featureList: [
    'Prüft Betreff und Text auf über 180 englische Spam-Wörter in 5 Kategorien',
    'Erkennt Linkverkürzer, nicht ausgefüllte Platzhalter und zu viele Satzzeichen',
    'Markiert riskante Wörter direkt im Text und schlägt schlichtere englische Formulierungen vor',
    'Klare Zusammenfassung mit konkreten Hinweisen statt einer irreführenden Punktzahl',
    'Läuft zu 100 % im Browser, ohne Upload und ohne Telemetrie',
  ],
  h1: 'Spam-Wörter-Prüfer',
  heroIntro:
    'Fügen Sie Betreff und E-Mail-Text ein. Sie sehen die Wörter und Gewohnheiten, die Filter und Leser misstrauisch machen.',
  wordListNote:
    'Die Phrasenliste umfasst englische Spam-Wörter, die übrigen Prüfungen (Großbuchstaben, Ausrufezeichen, Links, Linkverkürzer, Platzhalter und Länge) funktionieren für Texte in jeder Sprache.',
  howTitle: 'So nutzen Sie den Spam-Wörter-Prüfer',
  howSteps: [
    'Fügen Sie Ihren Betreff ein, und den Vorschautext, falls Sie einen nutzen.',
    'Fügen Sie den E-Mail-Text ein. Reiner Text und kopiertes HTML funktionieren beide.',
    'Klicken Sie auf E-Mail-Text prüfen. Riskante Wörter werden direkt im Text markiert. Die Liste darunter erklärt jedes Wort und schlägt eine schlichtere Alternative vor.',
    'Ändern Sie, was sinnvoll ist, und prüfen Sie dann erneut.',
  ],
  imageAlt: 'Illustration eines E-Mail-Entwurfs mit markierten Wörtern, die mit einer Lupe geprüft werden.',
  mattersTitle: 'Spielen Spam-Wörter noch eine Rolle?',
  mattersParas: [
    'Eine kleinere Rolle, als die meisten Listen nahelegen. Gmail und Microsoft entscheiden vor allem danach, wer sendet und wie Empfänger reagieren: ob Ihre Domain SPF, DKIM und DMARC besteht, wie viele Empfänger Sie als Spam melden und ob Ihre Mails bouncen. Die Absender-Richtlinien von Google behandeln zum Beispiel Authentifizierung, Spam-Beschwerderaten und einfaches Abmelden, aber keine verbotenen Wörter.',
    'Wörter spielen trotzdem auf zwei Arten eine Rolle. Manche Filter bewerten Formulierungen, besonders bei Absendern ohne lange Versandhistorie. Und aufdringliche Formulierungen bringen Menschen dazu, auf Spam melden zu klicken. Genau dieses Signal schadet wirklich. Sehen Sie ein markiertes Wort deshalb als Frage an sich selbst, nicht als Regel: „free shipping on orders over $50“ ist in Ordnung, „FREE MONEY, ACT NOW“ dagegen nicht.',
  ],
  looksTitle: 'Worauf der Prüfer achtet',
  looksParas: [
    "Englische Wörter und Phrasen in fünf Gruppen: Dringlichkeit (act now, last chance), Geld (100% free, lowest price), Übertreibung (guaranteed, risk-free), zwielichtige Formulierungen, wie Betrüger sie nutzen (no credit check, this isn't spam), und Clickbait (you won't believe).",
    'Formatierung, die nachlässig oder aufdringlich wirkt: Betreffzeilen in Großbuchstaben, Ketten von Ausrufezeichen und Reihen von Dollarzeichen.',
    'Links: Verkürzte Links wie bit.ly verbergen ihr Ziel, und Filter wie Leser misstrauen ihnen. Viele Links in einer kurzen Cold-E-Mail fallen ebenfalls auf.',
    'Fehler, die einen Massenversand verraten: Platzhalter, die nicht ausgefüllt wurden, wie {{first_name}} oder *|FNAME|*, und ein Re: oder Fwd: in einer Nachricht, die keine Antwort ist.',
  ],
  cleanTitle: 'Was ein sauberes Ergebnis nicht aussagt',
  cleanPara:
    'Ein sauberes Ergebnis bedeutet, dass der Text selbst keine Warnsignale auslöst. Über Ihre Versanddomain oder Ihre Liste sagt es nichts, und beide sind wichtiger. Mails von einer Domain ohne SPF, DKIM und DMARC oder an eine Liste voller ungültiger Adressen können im Spam landen, egal wie sorgfältig sie geschrieben sind. [SPF, DKIM und DMARC einfach erklärt](/blog/spf-dkim-dmarc-explained) behandelt den ersten Punkt, [E-Mail-Listen bereinigen](/email-list-cleaning) (Englisch) den zweiten.',
  faqTitle: 'Häufige Fragen zu Spam-Wörtern',
  faqs: [
    {
      q: 'Darf ich Wörter wie „kostenlos“ oder „free“ in E-Mails verwenden?',
      a: 'Ja, im normalen Zusammenhang. Kostenlose Testphase oder kostenloser Versand ist gewöhnliche Marketingsprache. Zum Problem wird es, wenn es mit anderen aufdringlichen Phrasen gehäuft, in Großbuchstaben geschrieben oder für ein Versprechen genutzt wird, das zu gut klingt, um wahr zu sein.',
    },
    {
      q: 'Wird mein E-Mail-Text irgendwohin gesendet?',
      a: 'Nein. Die Prüfung läuft in Ihrem Browser, daher können Sie auch unveröffentlichte Kampagnen sicher einfügen.',
    },
    {
      q: 'Warum markiert das Tool Re: in meinem Betreff?',
      a: 'Ein Re: oder Fwd: in einer ersten Nachricht ist ein alter Trick, um ein laufendes Gespräch vorzutäuschen. Leser bemerken das, und es kann zu Spam-Meldungen führen. Nutzen Sie es nur für echte Antworten.',
    },
    {
      q: 'Lande ich im Posteingang, wenn ich diese Wörter entferne?',
      a: 'Nicht allein dadurch. Sie entfernen damit eine Gruppe von Warnsignalen. Ob Mails im Posteingang landen, hängt stärker von Ihrer Absenderreputation, Ihrer Authentifizierung und der Qualität Ihrer Liste ab.',
    },
    {
      q: 'Wie viele Links sollte eine Cold-E-Mail enthalten?',
      a: 'Es gibt keine offizielle Zahl. Ein Link, oder in der ersten E-Mail gar keiner, ist in der Kaltakquise üblich, weil eine Nachricht voller Links nach Werbung aussieht.',
    },
    {
      q: 'Warum zeigt das Tool keine Punktzahl von 0 bis 100?',
      a: 'Weil kein Prüfer weiß, wie ein bestimmter Posteingang Ihre Mail behandelt, und eine genau wirkende Punktzahl etwas anderes nahelegen würde. Sie erhalten stattdessen eine klare Zusammenfassung und eine Liste der Punkte, die Sie beheben sollten.',
    },
  ],
  ctaHeadline: 'Text sauber? Prüfen Sie die Liste.',
}

// Spanish: register "tú". Name as the footer ("Comprobador de palabras spam"). The
// phrase list and its alternatives are English, so the examples from it stay English.
const es: SpamPageStrings = {
  metaTitle: 'Comprobador de palabras spam gratis para tus correos | Giggal.ai',
  ogTitle: 'Comprobador de palabras spam gratis para tus correos',
  description:
    'Pega el asunto y el texto de tu correo para resaltar palabras spam, mayúsculas, acortadores de enlaces y etiquetas de combinación vacías. Gratis y sin registro.',
  ogLocale: 'es_ES',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Comprobador de palabras spam gratis',
  crumb: 'Comprobador de palabras spam',
  appName: 'Comprobador de palabras spam gratis',
  featureList: [
    'Revisa el asunto y el cuerpo del correo con más de 180 palabras spam en inglés de 5 categorías',
    'Detecta acortadores de enlaces, etiquetas de combinación sin rellenar y puntuación excesiva',
    'Resalta las palabras de riesgo en el texto, con alternativas más sencillas en inglés',
    'Da un resumen claro y práctico, sin puntuaciones numéricas engañosas',
    'Funciona al 100% en el navegador, sin subir datos ni telemetría',
  ],
  h1: 'Comprobador de palabras spam',
  heroIntro:
    'Pega el asunto y el texto de tu correo para ver las palabras y los hábitos que hacen desconfiar a los filtros y a los lectores.',
  wordListNote:
    'La lista de frases cubre palabras spam en inglés, mientras que las demás comprobaciones (mayúsculas, signos de exclamación, enlaces, acortadores de enlaces, etiquetas de combinación y longitud) funcionan con textos en cualquier idioma.',
  howTitle: 'Cómo usar el comprobador de palabras spam',
  howSteps: [
    'Pega el asunto, y también el texto de vista previa si usas uno.',
    'Pega el cuerpo del correo. Funcionan tanto el texto plano como el HTML copiado.',
    'Haz clic en Revisar el texto. Las palabras de riesgo se resaltan en el texto, y la lista de abajo explica cada una y sugiere una alternativa más sencilla.',
    'Corrige lo que tenga sentido y vuelve a revisar.',
  ],
  imageAlt: 'Ilustración de un borrador de correo con palabras resaltadas que se revisan con una lupa.',
  mattersTitle: '¿Siguen importando las palabras spam?',
  mattersParas: [
    'Menos de lo que sugieren la mayoría de las listas. Gmail y Microsoft deciden sobre todo según quién envía y cómo reaccionan las personas: si tu dominio pasa SPF, DKIM y DMARC, cuántos destinatarios te marcan como spam y si tus correos rebotan. Las directrices de Google para remitentes, por ejemplo, tratan la autenticación, las tasas de quejas por spam y la baja sencilla, no las palabras prohibidas.',
    'Aun así, las palabras importan de dos formas. Algunos filtros puntúan frases, sobre todo en remitentes con poco historial. Y un lenguaje insistente hace que la gente pulse Marcar como spam, que es la señal que de verdad perjudica. Así que toma una palabra resaltada como una pregunta que debes hacerte, no como una regla: “free shipping on orders over $50” está bien, mientras que “FREE MONEY, ACT NOW” no.',
  ],
  looksTitle: 'Qué revisa el comprobador',
  looksParas: [
    "Palabras y frases en inglés de cinco grupos: urgencia (act now, last chance), dinero (100% free, lowest price), promesas exageradas (guaranteed, risk-free), expresiones turbias que usan las estafas (no credit check, this isn't spam) y clickbait (you won't believe).",
    'Formato que parece descuidado o insistente: asuntos en mayúsculas, cadenas de signos de exclamación y filas de signos de dólar.',
    'Enlaces: los enlaces acortados como bit.ly ocultan su destino, y tanto los filtros como los lectores desconfían de ellos. Muchos enlaces en un cold email corto también llaman la atención.',
    'Errores que delatan un envío masivo: etiquetas de combinación que no se rellenaron, como {{first_name}} o *|FNAME|*, y un Re: o Fwd: en un mensaje que no es una respuesta.',
  ],
  cleanTitle: 'Lo que un resultado limpio no te dice',
  cleanPara:
    'Una revisión limpia significa que el texto en sí no levanta sospechas. No dice nada de tu dominio de envío ni de tu lista, que importan más. El correo de un dominio sin SPF, DKIM y DMARC, o enviado a una lista llena de direcciones que ya no existen, puede acabar en spam por muy cuidado que esté. [SPF, DKIM y DMARC explicados](/blog/spf-dkim-dmarc-explained) trata lo primero, y la [limpieza de listas de correo](/email-list-cleaning) (en inglés) trata lo segundo.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Puedo usar palabras como “gratis” o “free” en mis correos?',
      a: 'Sí, en un contexto normal. Prueba gratis o envío gratis es lenguaje de marketing habitual. Se convierte en un problema cuando se junta con otras frases insistentes, se escribe en mayúsculas o se usa para prometer algo que parece demasiado bueno para ser verdad.',
    },
    {
      q: '¿Se envía mi texto a algún sitio?',
      a: 'No. La revisión se hace en tu navegador, así que puedes pegar campañas sin publicar con seguridad.',
    },
    {
      q: '¿Por qué marca el Re: de mi asunto?',
      a: 'Un Re: o Fwd: en un primer mensaje es un truco antiguo para simular una conversación. Los lectores lo notan, y puede generar denuncias de spam. Úsalo solo en respuestas reales.',
    },
    {
      q: 'Si quito estas palabras, ¿llegaré a la bandeja de entrada?',
      a: 'No por sí solo. Quitas un grupo de señales de alerta. Llegar a la bandeja de entrada depende más de tu reputación como remitente, de tu autenticación y de la calidad de tu lista.',
    },
    {
      q: '¿Cuántos enlaces debe tener un cold email?',
      a: 'No hay un número oficial. Un enlace, o ninguno en el primer correo, es la práctica habitual en la prospección en frío, porque un mensaje lleno de enlaces parece publicidad.',
    },
    {
      q: '¿Por qué no me da una puntuación sobre 100?',
      a: 'Porque ningún verificador sabe cómo tratará tu correo una bandeja concreta, y una puntuación de aspecto preciso daría a entender lo contrario. En su lugar, recibes un resumen claro y una lista de cosas que vale la pena corregir.',
    },
  ],
  ctaHeadline: '¿Texto limpio? Revisa la lista.',
}

// Brazilian Portuguese: register "você". Name as the footer ("Verificador de
// palavras de spam"). The phrase list and its alternatives are English, so the
// examples from it stay English.
const ptBr: SpamPageStrings = {
  metaTitle: 'Verificador de palavras de spam grátis para e-mails | Giggal.ai',
  ogTitle: 'Verificador de palavras de spam grátis para e-mails',
  description:
    'Cole o assunto e o texto do e-mail para destacar palavras de spam, maiúsculas, encurtadores de links e merge tags vazias. No navegador, grátis e sem cadastro.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Verificador de palavras de spam grátis',
  crumb: 'Verificador de palavras de spam',
  appName: 'Verificador de palavras de spam grátis',
  featureList: [
    'Verifica o assunto e o corpo do e-mail com mais de 180 palavras de spam em inglês, em 5 categorias',
    'Detecta encurtadores de links, merge tags não preenchidas e pontuação excessiva',
    'Destaca as palavras de risco no próprio texto, com alternativas mais simples em inglês',
    'Mostra um resumo claro e prático, sem pontuações numéricas enganosas',
    'Funciona 100% no navegador, sem upload e sem telemetria',
  ],
  h1: 'Verificador de palavras de spam',
  heroIntro:
    'Cole o assunto e o texto do seu e-mail para ver as palavras e os hábitos que deixam filtros e leitores desconfiados.',
  wordListNote:
    'A lista de frases cobre palavras de spam em inglês, enquanto as outras verificações (maiúsculas, pontos de exclamação, links, encurtadores de links, merge tags e tamanho) funcionam para textos em qualquer idioma.',
  howTitle: 'Como usar o verificador de palavras de spam',
  howSteps: [
    'Cole o assunto, e também o texto de pré-visualização se você usar um.',
    'Cole o corpo do e-mail. Texto simples e HTML copiado funcionam.',
    'Clique em Verificar o texto. As palavras de risco ficam destacadas no texto, e a lista abaixo explica cada uma e sugere uma alternativa mais simples.',
    'Corrija o que fizer sentido e verifique de novo.',
  ],
  imageAlt: 'Ilustração de um rascunho de e-mail com palavras destacadas sendo examinadas com uma lupa.',
  mattersTitle: 'As palavras de spam ainda importam?',
  mattersParas: [
    'Menos do que a maioria das listas sugere. O Gmail e a Microsoft decidem principalmente com base em quem envia e em como as pessoas reagem: se o seu domínio passa no SPF, DKIM e DMARC, quantos destinatários marcam você como spam e se os seus e-mails geram bounce. As diretrizes do Google para remetentes, por exemplo, tratam de autenticação, taxas de denúncia de spam e descadastro fácil, não de palavras proibidas.',
    'Mesmo assim, as palavras importam de duas formas. Alguns filtros pontuam frases, principalmente de remetentes com pouco histórico. E uma linguagem insistente faz as pessoas clicarem em Denunciar spam, que é o sinal que realmente prejudica. Então trate uma palavra destacada como uma pergunta para você mesmo, não como uma regra: “free shipping on orders over $50” não tem problema, mas “FREE MONEY, ACT NOW” tem.',
  ],
  looksTitle: 'O que o verificador procura',
  looksParas: [
    "Palavras e frases em inglês de cinco grupos: urgência (act now, last chance), dinheiro (100% free, lowest price), promessas exageradas (guaranteed, risk-free), termos suspeitos usados em golpes (no credit check, this isn't spam) e clickbait (you won't believe).",
    'Formatação que parece descuidada ou insistente: assuntos em maiúsculas, sequências de pontos de exclamação e fileiras de cifrões.',
    'Links: links encurtados como bit.ly escondem o destino, e tanto filtros quanto leitores desconfiam deles. Muitos links em um e-mail de prospecção curto também chamam a atenção.',
    'Falhas que revelam um envio em massa: merge tags que não foram preenchidas, como {{first_name}} ou *|FNAME|*, e um Re: ou Fwd: em uma mensagem que não é uma resposta.',
  ],
  cleanTitle: 'O que um resultado limpo não diz',
  cleanPara:
    'Uma verificação limpa significa que o texto em si não levanta alertas. Ela não diz nada sobre o seu domínio de envio ou a sua lista, que importam mais. E-mails de um domínio sem SPF, DKIM e DMARC, ou enviados para uma lista cheia de endereços que não existem mais, podem cair no spam por mais cuidadoso que seja o texto. [SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained) trata do primeiro ponto, e a [limpeza de listas de e-mail](/email-list-cleaning) (em inglês) trata do segundo.',
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Posso usar palavras como “grátis” ou “free” nos meus e-mails?',
      a: 'Sim, em um contexto normal. Teste grátis ou frete grátis é linguagem comum de marketing. Vira um problema quando aparece junto com outras frases insistentes, em letras maiúsculas ou para prometer algo que parece bom demais para ser verdade.',
    },
    {
      q: 'O texto do meu e-mail é enviado para algum lugar?',
      a: 'Não. A verificação roda no seu navegador, então você pode colar campanhas ainda não publicadas com segurança.',
    },
    {
      q: 'Por que ele marca o Re: no meu assunto?',
      a: 'Um Re: ou Fwd: em uma primeira mensagem é um truque antigo para simular uma conversa. Os leitores percebem, e isso pode gerar denúncias de spam. Use apenas em respostas reais.',
    },
    {
      q: 'Se eu tirar essas palavras, vou chegar à caixa de entrada?',
      a: 'Não só por isso. Você remove um conjunto de sinais de alerta. Chegar à caixa de entrada depende mais da sua reputação de remetente, da sua autenticação e da qualidade da sua lista.',
    },
    {
      q: 'Quantos links um e-mail de prospecção deve ter?',
      a: 'Não existe um número oficial. Um link, ou nenhum no primeiro e-mail, é a prática comum na prospecção a frio, porque uma mensagem cheia de links parece marketing.',
    },
    {
      q: 'Por que ele não dá uma nota de 0 a 100?',
      a: 'Porque nenhum verificador sabe como uma caixa de entrada específica vai tratar o seu e-mail, e uma nota com aparência precisa sugeriria o contrário. Em vez disso, você recebe um resumo claro e uma lista do que vale corrigir.',
    },
  ],
  ctaHeadline: 'Texto limpo? Verifique a lista.',
}

const fr: SpamPageStrings = {
  metaTitle: 'Vérificateur de mots spam gratuit pour vos emails | Giggal.ai',
  ogTitle: 'Vérificateur de mots spam gratuit pour vos emails',
  description:
    'Collez l’objet et le texte de votre email pour repérer les mots spam, les majuscules, les liens raccourcis et les balises de fusion vides. Gratuit.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Vérificateur de mots spam gratuit',
  crumb: 'Vérificateur de mots spam',
  appName: 'Vérificateur de mots spam gratuit',
  featureList: [
    'Analyse l’objet et le corps de l’email avec plus de 180 mots déclencheurs de spam en anglais, répartis en 5 catégories',
    'Détecte les liens raccourcis, les balises de fusion vides et la ponctuation excessive',
    'Surligne les mots à risque dans le texte et propose des formulations plus simples en anglais',
    'Donne un résumé clair et concret, sans score chiffré trompeur',
    'Fonctionne à 100 % dans le navigateur, sans envoi de données ni télémétrie',
  ],
  h1: 'Vérificateur de mots spam',
  heroIntro:
    'Collez l’objet et le texte de votre email pour voir les mots et les habitudes qui rendent les filtres et les lecteurs méfiants.',
  wordListNote:
    'La liste d’expressions couvre les mots déclencheurs anglais, mais les autres contrôles (majuscules, points d’exclamation, liens, liens raccourcis, balises de fusion, longueur) fonctionnent pour un texte dans n’importe quelle langue.',
  howTitle: 'Comment utiliser le vérificateur de mots spam',
  howSteps: [
    'Collez l’objet, et le texte d’aperçu si vous en utilisez un.',
    'Collez le corps de l’email. Le texte brut et le HTML copié fonctionnent tous les deux.',
    'Cliquez sur Vérifier le texte. Les mots à risque sont surlignés dans le texte, et la liste en dessous explique chacun d’eux et propose une formulation plus simple.',
    'Corrigez ce qui a du sens, puis vérifiez de nouveau.',
  ],
  imageAlt: 'Illustration d’un brouillon d’email avec des mots surlignés, examinés à la loupe.',
  mattersTitle: 'Les mots spam comptent-ils encore ?',
  mattersParas: [
    'Moins que ne le laissent penser la plupart des listes. Gmail et Microsoft décident surtout en fonction de l’expéditeur et de la réaction des destinataires : si votre domaine passe SPF, DKIM et DMARC, combien de destinataires vous signalent comme spam et si vos emails rebondissent. Les consignes de Google pour les expéditeurs, par exemple, portent sur l’authentification, le taux de plaintes pour spam et la désinscription facile, pas sur des mots interdits.',
    'Les mots comptent encore de deux façons. Certains filtres attribuent des points aux expressions, surtout pour les expéditeurs qui ont peu d’historique. Et une formulation insistante pousse les gens à cliquer sur Signaler comme spam, et c’est ce signal qui fait le plus de tort. Voyez donc un mot surligné comme une question à vous poser, pas comme une règle : « free shipping on orders over $50 » ne pose pas de problème, alors que « FREE MONEY, ACT NOW » en pose un.',
  ],
  looksTitle: 'Ce que le vérificateur recherche',
  looksParas: [
    'Des mots et expressions en anglais, répartis en cinq groupes : urgence (act now, last chance), argent (100% free, lowest price), promesses excessives (guaranteed, risk-free), formulations douteuses utilisées par les arnaques (no credit check, this isn’t spam) et pièges à clics (you won’t believe).',
    'Une mise en forme qui paraît négligée ou insistante : objets en majuscules, séries de points d’exclamation et suites de symboles dollar.',
    'Les liens : les liens raccourcis comme bit.ly cachent leur destination, et les filtres comme les lecteurs s’en méfient. Beaucoup de liens dans un court email de prospection se remarquent aussi.',
    'Les oublis qui trahissent un envoi en masse : des balises de fusion non remplies, comme {{first_name}} ou *|FNAME|*, et un Re: ou Fwd: sur un message qui n’est pas une réponse.',
  ],
  cleanTitle: 'Ce qu’un résultat propre ne vous dit pas',
  cleanPara:
    'Une vérification propre signifie que le texte lui-même ne déclenche pas d’alerte. Elle ne dit rien de votre domaine d’envoi ni de votre liste, qui comptent davantage. Un email envoyé depuis un domaine sans SPF, DKIM et DMARC, ou à une liste pleine d’adresses mortes, peut arriver dans les spams même s’il est bien écrit. [SPF, DKIM et DMARC expliqués](/blog/spf-dkim-dmarc-explained) traite le premier point, et [le nettoyage de liste email](/email-list-cleaning) (en anglais) traite le second.',
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Puis-je utiliser des mots comme « gratuit » ou « free » dans mes emails ?',
      a: 'Oui, dans un contexte normal. Essai gratuit ou livraison gratuite sont des formules marketing ordinaires. Le mot pose problème quand il s’accumule avec d’autres expressions insistantes, quand il est écrit en majuscules ou quand il sert à promettre quelque chose de trop beau pour être vrai.',
    },
    {
      q: 'Mon texte est-il envoyé quelque part ?',
      a: 'Non. La vérification se fait dans votre navigateur, vous pouvez donc coller sans risque des campagnes qui ne sont pas encore publiées.',
    },
    {
      q: 'Pourquoi signale-t-il Re: dans mon objet ?',
      a: 'Un Re: ou Fwd: sur un premier message est une vieille astuce pour simuler une conversation. Les lecteurs le remarquent, et cela peut entraîner des signalements pour spam. Gardez-le pour les vraies réponses.',
    },
    {
      q: 'Supprimer ces mots me fera-t-il arriver en boîte de réception ?',
      a: 'Pas à lui seul. Cela supprime une série de signaux d’alerte. L’arrivée en boîte de réception dépend davantage de votre réputation d’expéditeur, de votre authentification et de la qualité de votre liste.',
    },
    {
      q: 'Combien de liens doit contenir un email de prospection ?',
      a: 'Il n’y a pas de chiffre officiel. Un lien, ou aucun dans le premier email, est une pratique courante en prospection à froid, car un message plein de liens ressemble à du marketing.',
    },
    {
      q: 'Pourquoi ne donne-t-il pas de score sur 100 ?',
      a: 'Parce qu’aucun outil ne sait comment une boîte de réception précise traitera votre email, et un score qui semble précis laisserait penser le contraire. Vous obtenez à la place un résumé clair et une liste de points à corriger.',
    },
  ],
  ctaHeadline: 'Texte propre ? Vérifiez la liste.',
}

const nl: SpamPageStrings = {
  metaTitle: 'Spamwoorden controleren: gratis email spam checker | Giggal.ai',
  ogTitle: 'Spamwoorden controleren: gratis email spam checker',
  description:
    'Plak je onderwerpregel en e-mail en zie spamwoorden, hoofdletters, verkorte links en lege merge tags gemarkeerd. Gratis, in je browser, zonder account.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Gratis tool om spamwoorden te controleren',
  crumb: 'Spamwoorden controleren',
  appName: 'Gratis tool om spamwoorden te controleren',
  featureList: [
    'Scant onderwerpregel en tekst op meer dan 180 Engelse spamwoorden in 5 categorieën',
    'Herkent verkorte links, lege merge tags en overdreven leestekens',
    'Markeert riskante woorden in de tekst, met eenvoudigere alternatieven',
    'Geeft een duidelijke samenvatting zonder misleidende score',
    'Werkt 100% in je browser, zonder upload of telemetrie',
  ],
  h1: 'Spamwoorden controleren',
  heroIntro: 'Plak je onderwerpregel en e-mailtekst en zie welke woorden en gewoonten filters en lezers wantrouwig maken.',
  wordListNote:
    'De woordenlijst controleert Engelse spamwoorden, maar de andere controles (hoofdletters, uitroeptekens, links, verkorte links, merge tags en lengte) werken voor tekst in elke taal.',
  howTitle: 'Zo controleer je spamwoorden in je e-mail',
  howSteps: [
    'Plak je onderwerpregel, en de previewtekst als je die gebruikt.',
    'Plak de tekst van de e-mail. Platte tekst en gekopieerde HTML werken allebei.',
    'Klik op E-mailtekst controleren. Riskante woorden worden in de tekst gemarkeerd, en de lijst eronder legt elk woord uit en stelt een eenvoudiger alternatief voor.',
    'Pas aan wat zinvol is en controleer daarna opnieuw.',
  ],
  imageAlt: 'Illustratie van een e-mailconcept met gemarkeerde woorden onder een vergrootglas.',
  mattersTitle: 'Doen spamwoorden er nog toe?',
  mattersParas: [
    'Minder dan de meeste lijsten doen vermoeden. Gmail en Microsoft beslissen vooral op basis van wie er verstuurt en hoe mensen reageren: of je domein slaagt voor SPF, DKIM en DMARC, hoeveel ontvangers je als spam markeren en of je mail bouncet. De richtlijnen van Google voor afzenders gaan bijvoorbeeld over authenticatie, het percentage spamklachten en makkelijk afmelden, niet over verboden woorden.',
    'Woorden tellen nog op twee manieren mee. Sommige filters geven punten aan woordcombinaties, vooral bij afzenders zonder veel geschiedenis. En opdringerige formuleringen zorgen ervoor dat mensen op Spam melden klikken, en dat signaal doet echt schade. Zie een gemarkeerd woord dus als een vraag aan jezelf, niet als een regel: “free shipping on orders over $50” is prima, maar “FREE MONEY, ACT NOW” niet.',
  ],
  looksTitle: 'Waar de checker op let',
  looksParas: [
    'Engelse woorden en woordcombinaties in vijf groepen: urgentie (act now, last chance), geld (100% free, lowest price), te mooie beloftes (guaranteed, risk-free), verdachte formuleringen die oplichters gebruiken (no credit check, this isn’t spam) en clickbait (you won’t believe).',
    'Opmaak die slordig of opdringerig oogt: onderwerpregels in hoofdletters, reeksen uitroeptekens en rijen dollartekens.',
    'Links: verkorte links zoals bit.ly verbergen waar ze naartoe gaan, en zowel filters als lezers wantrouwen ze. Veel links in een korte cold e-mail vallen ook op.',
    'Slordigheden die een bulkverzending verraden: merge tags die niet zijn ingevuld, zoals {{first_name}} of *|FNAME|*, en Re: of Fwd: bij een bericht dat geen antwoord is.',
  ],
  cleanTitle: 'Wat een schoon resultaat je niet vertelt',
  cleanPara:
    'Een schone controle betekent dat de tekst zelf geen waarschuwingen oplevert. Het zegt niets over je verzenddomein of je lijst, en die wegen zwaarder. Mail vanaf een domein zonder SPF, DKIM en DMARC, of naar een lijst vol dode adressen, kan in de spam belanden, hoe zorgvuldig de tekst ook is. [SPF, DKIM en DMARC uitgelegd](/blog/spf-dkim-dmarc-explained) behandelt het eerste, en [e-maillijst opschonen](/email-list-cleaning) (in het Engels) het tweede.',
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Mag ik het woord gratis in mijn e-mails gebruiken?',
      a: 'Ja, in een normale context. Gratis proefperiode of gratis verzending is gewone marketingtaal. Het wordt een probleem als het samen met andere opdringerige formuleringen staat, in hoofdletters staat of iets belooft dat te mooi klinkt om waar te zijn.',
    },
    {
      q: 'Wordt mijn tekst ergens naartoe gestuurd?',
      a: 'Nee. De controle draait in je browser, dus je kunt veilig campagnes plakken die nog niet zijn gepubliceerd.',
    },
    {
      q: 'Waarom markeert de tool Re: in mijn onderwerpregel?',
      a: 'Re: of Fwd: bij een eerste bericht is een oude truc om een gesprek te veinzen. Lezers merken het, en het kan spammeldingen opleveren. Gebruik het alleen voor echte antwoorden.',
    },
    {
      q: 'Kom ik in de inbox als ik deze woorden weghaal?',
      a: 'Niet alleen daardoor. Het haalt één groep waarschuwingssignalen weg. Inbox placement hangt meer af van je afzenderreputatie, je authenticatie en de kwaliteit van je lijst.',
    },
    {
      q: 'Hoeveel links mag een cold e-mail bevatten?',
      a: 'Er is geen officieel aantal. Eén link, of geen link in de eerste e-mail, is gebruikelijk bij cold outreach, omdat een bericht vol links op marketing lijkt.',
    },
    {
      q: 'Waarom krijg ik geen score van 0 tot 100?',
      a: 'Omdat geen enkele checker weet hoe een specifieke inbox je mail behandelt, en een score die precies lijkt, zou het tegendeel suggereren. Je krijgt in plaats daarvan een duidelijke samenvatting en een lijst met punten die het verbeteren waard zijn.',
    },
  ],
  ctaHeadline: 'Tekst in orde? Controleer de lijst.',
}

const pl: SpamPageStrings = {
  metaTitle: 'Wykrywanie słów spamowych: email spam checker | Giggal.ai',
  ogTitle: 'Wykrywanie słów spamowych: email spam checker',
  description:
    'Wklej temat i treść e-maila, aby zobaczyć słowa spamowe, wielkie litery, skrócone linki i puste znaczniki. Działa w przeglądarce. Za darmo, bez rejestracji.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Darmowe wykrywanie słów spamowych',
  crumb: 'Wykrywanie słów spamowych',
  appName: 'Darmowe wykrywanie słów spamowych',
  featureList: [
    'Sprawdza temat i treść e-maila pod kątem ponad 180 angielskich słów spamowych w 5 kategoriach',
    'Wykrywa skrócone linki, niewypełnione znaczniki personalizacji i nadmiar znaków interpunkcyjnych',
    'Podświetla ryzykowne słowa w tekście i podpowiada prostsze sformułowania',
    'Daje jasne podsumowanie bez mylącego wyniku liczbowego',
    'Działa w 100% w przeglądarce, bez wysyłania danych i bez telemetrii',
  ],
  h1: 'Wykrywanie słów spamowych',
  heroIntro: 'Wklej temat i treść e-maila, aby zobaczyć słowa i nawyki, które budzą podejrzenia filtrów i czytelników.',
  wordListNote:
    'Lista fraz obejmuje angielskie słowa spamowe, a pozostałe testy (wielkie litery, wykrzykniki, linki, skrócone linki, znaczniki personalizacji, długość) działają dla tekstu w każdym języku.',
  howTitle: 'Jak korzystać z wykrywania słów spamowych',
  howSteps: [
    'Wklej temat wiadomości oraz tekst podglądu, jeśli go używasz.',
    'Wklej treść e-maila. Działa zwykły tekst i skopiowany kod HTML.',
    'Kliknij Sprawdź treść e-maila. Ryzykowne słowa zostaną podświetlone w tekście, a lista poniżej wyjaśni każde z nich i zaproponuje prostsze sformułowanie.',
    'Popraw to, co ma sens, i sprawdź ponownie.',
  ],
  imageAlt: 'Ilustracja wersji roboczej e-maila z podświetlonymi słowami pod lupą.',
  mattersTitle: 'Czy słowa spamowe nadal mają znaczenie?',
  mattersParas: [
    'Mniejsze, niż sugeruje większość list. Gmail i Microsoft decydują głównie na podstawie tego, kto wysyła wiadomość i jak reagują odbiorcy: czy twoja domena przechodzi SPF, DKIM i DMARC, ilu odbiorców oznacza cię jako spam i czy twoje wiadomości się odbijają. Wytyczne Google dla nadawców dotyczą na przykład uwierzytelniania, odsetka zgłoszeń spamu i łatwego wypisywania się, a nie zakazanych słów.',
    'Słowa nadal mają znaczenie na dwa sposoby. Niektóre filtry punktują frazy, zwłaszcza u nadawców bez długiej historii. A nachalne sformułowania skłaniają ludzi do kliknięcia Zgłoś spam, a to jest sygnał, który naprawdę szkodzi. Traktuj więc podświetlone słowo jako pytanie do siebie, a nie jako regułę: „free shipping on orders over $50” jest w porządku, ale „FREE MONEY, ACT NOW” już nie.',
  ],
  looksTitle: 'Czego szuka narzędzie',
  looksParas: [
    'Angielskich słów i fraz w pięciu grupach: pilność (act now, last chance), pieniądze (100% free, lowest price), przesadne obietnice (guaranteed, risk-free), podejrzane sformułowania używane przez oszustów (no credit check, this isn’t spam) i clickbait (you won’t believe).',
    'Formatowania, które wygląda niedbale lub nachalnie: tematów pisanych wielkimi literami, ciągów wykrzykników i rzędów znaków dolara.',
    'Linków: skrócone linki, takie jak bit.ly, ukrywają, dokąd prowadzą, i nie ufają im ani filtry, ani czytelnicy. Wiele linków w krótkim cold e-mailu też zwraca uwagę.',
    'Błędów, które zdradzają masową wysyłkę: niewypełnionych znaczników personalizacji, takich jak {{first_name}} czy *|FNAME|*, oraz Re: lub Fwd: w wiadomości, która nie jest odpowiedzią.',
  ],
  cleanTitle: 'Czego nie mówi ci czysty wynik',
  cleanPara:
    'Czysty wynik oznacza, że sama treść nie budzi zastrzeżeń. Nie mówi nic o twojej domenie wysyłkowej ani o liście, a one mają większe znaczenie. Wiadomość z domeny bez SPF, DKIM i DMARC albo wysłana na listę pełną nieaktywnych adresów może trafić do spamu, nawet jeśli jest starannie napisana. Artykuł [SPF, DKIM i DMARC: wyjaśnienie](/blog/spf-dkim-dmarc-explained) omawia pierwszą kwestię, a [czyszczenie listy mailingowej](/email-list-cleaning) (po angielsku) drugą.',
  faqTitle: 'Najczęściej zadawane pytania',
  faqs: [
    {
      q: 'Czy mogę używać słowa „darmowy” w e-mailach?',
      a: 'Tak, w zwykłym kontekście. Darmowy okres próbny albo darmowa dostawa to zwykły język marketingu. Problem pojawia się, gdy słowo występuje obok innych nachalnych fraz, jest pisane wielkimi literami albo służy do obiecywania czegoś, co brzmi zbyt dobrze, by było prawdziwe.',
    },
    {
      q: 'Czy moja treść jest gdzieś wysyłana?',
      a: 'Nie. Sprawdzanie działa w twojej przeglądarce, więc możesz bezpiecznie wklejać nieopublikowane kampanie.',
    },
    {
      q: 'Dlaczego narzędzie oznacza Re: w temacie?',
      a: 'Re: lub Fwd: w pierwszej wiadomości to stara sztuczka, która udaje rozmowę. Czytelnicy to zauważają, a skutkiem mogą być zgłoszenia spamu. Używaj tego tylko w prawdziwych odpowiedziach.',
    },
    {
      q: 'Czy usunięcie tych słów zapewni mi trafienie do skrzynki odbiorczej?',
      a: 'Nie samo w sobie. Usuwa jeden zestaw sygnałów ostrzegawczych. Umieszczenie w skrzynce odbiorczej zależy bardziej od reputacji nadawcy, uwierzytelniania i jakości twojej listy.',
    },
    {
      q: 'Ile linków powinien mieć cold e-mail?',
      a: 'Nie ma oficjalnej liczby. Jeden link albo żaden w pierwszym e-mailu to częsta praktyka w cold mailingu, bo wiadomość pełna linków wygląda jak marketing.',
    },
    {
      q: 'Dlaczego nie dostaję wyniku w skali do 100?',
      a: 'Ponieważ żadne narzędzie nie wie, jak konkretna skrzynka potraktuje twoją wiadomość, a precyzyjnie wyglądający wynik sugerowałby coś innego. Zamiast tego dostajesz jasne podsumowanie i listę rzeczy wartych poprawy.',
    },
  ],
  ctaHeadline: 'Treść jest czysta? Sprawdź listę.',
}

const id: SpamPageStrings = {
  metaTitle: 'Cek Kata Spam: Email Spam Checker Gratis | Giggal.ai',
  ogTitle: 'Cek Kata Spam: Email Spam Checker Gratis',
  description:
    'Cek spam email sebelum dikirim. Tempel subjek dan isi email untuk menandai kata pemicu spam, huruf kapital, link pendek, dan merge tag yang rusak. Gratis.',
  ogLocale: 'id_ID',
  ogImage: '/tools/spam-word-checker-og-v2.webp',
  ogAlt: 'Alat cek kata spam gratis',
  crumb: 'Cek kata spam',
  appName: 'Alat Cek Kata Spam Gratis',
  featureList: [
    'Memindai subjek dan isi email untuk lebih dari 180 kata pemicu spam bahasa Inggris dalam 5 kategori',
    'Mendeteksi link pendek, merge tag yang tidak terisi, dan tanda baca berlebihan',
    'Menandai kata berisiko langsung di teks dengan saran kata yang lebih sederhana',
    'Memberi ringkasan yang jelas tanpa skor angka yang menyesatkan',
    'Berjalan 100% di browser tanpa unggahan atau telemetri',
  ],
  h1: 'Cek Kata Spam',
  heroIntro: 'Tempel subjek dan isi email Anda untuk melihat kata dan kebiasaan yang membuat filter dan pembaca curiga.',
  wordListNote:
    'Daftar frasa memeriksa kata pemicu spam dalam bahasa Inggris, sedangkan pemeriksaan lainnya (huruf kapital, tanda seru, link, link pendek, merge tag, dan panjang teks) berfungsi untuk teks dalam bahasa apa pun.',
  howTitle: 'Cara cek kata spam di email Anda',
  howSteps: [
    'Tempel subjek email, dan teks pratinjau jika Anda memakainya.',
    'Tempel isi email. Teks biasa dan HTML yang disalin sama-sama bisa dipakai.',
    'Klik Cek Isi Email. Kata berisiko ditandai langsung di teks, dan daftar di bawahnya menjelaskan setiap kata serta menyarankan alternatif yang lebih sederhana.',
    'Perbaiki yang masuk akal, lalu cek lagi.',
  ],
  imageAlt: 'Ilustrasi draf email dengan kata-kata yang ditandai dan diperiksa dengan kaca pembesar.',
  mattersTitle: 'Apakah kata spam masih berpengaruh?',
  mattersParas: [
    'Tidak sebesar yang disebut kebanyakan daftar. Gmail dan Microsoft lebih banyak menilai siapa pengirimnya dan bagaimana penerima bereaksi: apakah domain Anda lolos SPF, DKIM, dan DMARC, berapa banyak penerima yang menandai email Anda sebagai spam, dan apakah email Anda mengalami bounce. Pedoman pengirim dari Google, misalnya, membahas autentikasi, tingkat keluhan spam, dan kemudahan berhenti berlangganan, bukan kata-kata terlarang.',
    'Kata-kata tetap berpengaruh dalam dua hal. Beberapa filter memberi skor pada frasa, terutama untuk pengirim yang belum punya banyak riwayat. Selain itu, kata-kata yang memaksa membuat orang menekan Laporkan spam, dan sinyal inilah yang paling merugikan. Jadi, anggap kata yang ditandai sebagai pertanyaan untuk diri sendiri, bukan aturan: “free shipping on orders over $50” masih wajar, sedangkan “FREE MONEY, ACT NOW” tidak.',
  ],
  looksTitle: 'Apa saja yang diperiksa',
  looksParas: [
    'Kata dan frasa bahasa Inggris dalam lima kelompok: urgensi (act now, last chance), uang (100% free, lowest price), janji berlebihan (guaranteed, risk-free), kata-kata mencurigakan yang dipakai penipu (no credit check, this isn’t spam), dan clickbait (you won’t believe).',
    'Format yang terlihat ceroboh atau memaksa: subjek yang seluruhnya huruf kapital, deretan tanda seru, dan deretan tanda dolar.',
    'Link: link pendek seperti bit.ly menyembunyikan tujuannya, dan filter maupun pembaca tidak memercayainya. Banyak link dalam cold email yang pendek juga menarik perhatian.',
    'Kesalahan yang menunjukkan pengiriman massal: merge tag yang tidak terisi, seperti {{first_name}} atau *|FNAME|*, dan Re: atau Fwd: pada pesan yang bukan balasan.',
  ],
  cleanTitle: 'Yang tidak ditunjukkan oleh hasil yang bersih',
  cleanPara:
    'Hasil yang bersih berarti isi email itu sendiri tidak memicu peringatan. Hasil ini tidak menunjukkan apa pun tentang domain pengirim atau daftar email Anda, padahal keduanya lebih berpengaruh. Email dari domain tanpa SPF, DKIM, dan DMARC, atau yang dikirim ke daftar penuh alamat mati, bisa masuk spam meskipun ditulis dengan hati-hati. [Apa itu SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained) membahas hal pertama, dan [membersihkan daftar email](/email-list-cleaning) (dalam bahasa Inggris) membahas hal kedua.',
  faqTitle: 'Pertanyaan umum',
  faqs: [
    {
      q: 'Bolehkah saya memakai kata gratis di email?',
      a: 'Boleh, dalam konteks yang wajar. Uji coba gratis atau gratis ongkir adalah bahasa pemasaran biasa. Kata ini menjadi masalah jika ditumpuk dengan frasa lain yang memaksa, ditulis dengan huruf kapital, atau dipakai untuk menjanjikan sesuatu yang terdengar terlalu bagus untuk jadi kenyataan.',
    },
    {
      q: 'Apakah isi email saya dikirim ke suatu tempat?',
      a: 'Tidak. Pemeriksaan berjalan di browser Anda, jadi Anda bisa menempel kampanye yang belum dipublikasikan dengan aman.',
    },
    {
      q: 'Mengapa alat ini menandai Re: di subjek saya?',
      a: 'Re: atau Fwd: pada pesan pertama adalah trik lama untuk berpura-pura sudah ada percakapan. Pembaca menyadarinya, dan ini bisa memicu laporan spam. Pakai hanya untuk balasan yang sebenarnya.',
    },
    {
      q: 'Apakah menghapus kata-kata ini membuat email saya masuk inbox?',
      a: 'Tidak dengan sendirinya. Langkah ini hanya menghapus satu kelompok tanda peringatan. Inbox placement lebih bergantung pada reputasi pengirim, autentikasi, dan kualitas daftar email Anda.',
    },
    {
      q: 'Berapa link yang sebaiknya ada di cold email?',
      a: 'Tidak ada angka resmi. Satu link, atau tanpa link di email pertama, adalah praktik umum untuk cold outreach, karena pesan yang penuh link terlihat seperti email pemasaran.',
    },
    {
      q: 'Mengapa alat ini tidak memberi skor dari 100?',
      a: 'Karena tidak ada pemeriksa yang tahu bagaimana kotak masuk tertentu akan memperlakukan email Anda, dan skor yang tampak presisi akan memberi kesan sebaliknya. Sebagai gantinya, Anda mendapat ringkasan yang jelas dan daftar hal yang perlu diperbaiki.',
    },
  ],
  ctaHeadline: 'Isi email sudah bersih? Cek daftar emailnya.',
}

export const SPAM_PAGE_STRINGS: Partial<Record<Locale, SpamPageStrings>> & { en: SpamPageStrings } = {
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
