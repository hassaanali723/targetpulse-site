// Labels and messages of the spam word checker tool
// (components/tools/SpamWordChecker/SpamWordCheckerTool.tsx), one object per
// language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/spamWordCheckerStrings.ts.
//
// English is the original wording moved here unchanged, including the text that
// used to be written inside lib/tools/spamWordCheckerCore.ts. The core now returns
// ids and values only: a verdict id, a severity id, a structural finding id with
// its counts, or a matched phrase with its category.
//
// The trigger phrases and their suggested alternatives stay English in every
// language. They are data in the core and are shown as they are.
//
// Functions take the values a sentence needs. `countText` is the count written
// for the page's language (see numberLocale); `count` is the plain number, for
// choosing a plural form.

import type { Locale } from '@/lib/i18n/clusters'
import type {
  Finding,
  FindingSeverity,
  SpamCategory,
  SpamCheckResult,
  SpamMatch,
  StructuralFindingId,
  SummaryVerdict,
} from '@/lib/tools/spamWordCheckerCore'

/** A label with a count in it, such as "12 words". */
export type SpamCounted = (count: number, countText: string) => string

/** The values a structural finding's reason can use. Fields a check didn't set are 0, false or empty. */
export interface SpamFindingValues {
  count: number
  countText: string
  /** exclamation-marks: two or more stand in a row. */
  consecutive: boolean
  /** link-shorteners and unfilled-merge-tags: the items found, joined with ", ". */
  items: string
}

export interface SpamFindingText {
  /** The heading as shown in the list. */
  title: string
  reason: (v: SpamFindingValues) => string
  suggestion: string
}

export interface SpamToolStrings {
  /** Number format for counts, such as 'de-DE'. English leaves it out and shows plain digits. */
  numberLocale?: string

  // Form
  subjectLabel: string
  /** The counter next to the subject label, out of 60 characters. */
  subjectCounter: SpamCounted
  /** Added to the counter when the subject is longer than 60 characters. */
  subjectCaution: string
  subjectPlaceholder: string
  previewLabel: string
  optional: string
  previewPlaceholder: string
  bodyLabel: string
  bodyHint: string
  bodyPlaceholder: string
  clear: string
  button: string

  // Summary
  verdicts: Record<SummaryVerdict, string>
  summaryHeading: (verdict: string) => string
  summaryText: Record<SummaryVerdict, (p: { toFix: number; toFixText: string; findings: number; findingsText: string }) => string>
  statWords: SpamCounted
  statLinks: SpamCounted
  statFindings: SpamCounted

  // Highlighted copy
  previewHeading: string
  previewHint: string
  /** The tooltip on a highlighted phrase. `alternative` is the English phrase from the core. */
  markTitle: (category: string, alternative?: string) => string

  // Findings
  severities: Record<FindingSeverity, { label: SpamCounted; note: string }>
  /** Phrase list names, shown on the badge (in capitals by CSS) and in the tooltip. */
  categories: Record<SpamCategory, string>
  fields: Record<'subject' | 'preview' | 'body', string>
  /** The heading of a matched phrase, by the group it is listed in. */
  wordTitle: Record<FindingSeverity, (phrase: string, field: string) => string>
  wordReason: (category: string) => string
  /** `alternative` is the English phrase from the core. */
  wordSuggestion: (alternative: string) => string
  wordSuggestionPlain: string
  badgeFormatting: string
  badgeReadability: string
  /** Wraps every finding's suggestion. */
  suggestion: (text: string) => string
  findings: Record<StructuralFindingId, SpamFindingText>
  noFindings: string
}

const en: SpamToolStrings = {
  subjectLabel: 'Subject Line',
  subjectCounter: (_n, text) => `${text}/60 chars`,
  subjectCaution: '(readability caution)',
  subjectPlaceholder: 'e.g. Quick question about our proposal',
  previewLabel: 'Preview Text',
  optional: '(optional)',
  previewPlaceholder: 'e.g. A brief follow-up on our conversation last week',
  bodyLabel: 'Email Body',
  bodyHint: '(plain text or copied HTML)',
  bodyPlaceholder: 'Paste your email draft or newsletter HTML here...',
  clear: 'Clear',
  button: 'Check Email Copy',

  verdicts: {
    clean: 'Looks clean',
    'few-fixes': 'A few things to fix',
    'needs-work': 'Needs work',
  },
  summaryHeading: (verdict) => `Summary: ${verdict}`,
  summaryText: {
    clean: () => 'No critical spam triggers or structural flags detected in this draft.',
    'few-fixes': ({ findings, findingsText }) =>
      `Found ${findingsText} item${findings > 1 ? 's' : ''} that could increase filter scrutiny.`,
    'needs-work': ({ toFixText }) => `Multiple high-priority items (${toFixText} to fix) require attention before sending.`,
  },
  statWords: (_n, text) => `${text} words`,
  statLinks: (_n, text) => `${text} links`,
  statFindings: (_n, text) => `${text} findings`,

  previewHeading: 'Highlighted Copy Preview',
  previewHint: 'Hover over highlighted words to see the category and suggested plainer alternative.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `Try "${alternative}"` : 'Consider plainer phrasing'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Worth fixing (${text})`,
      note: 'Items that frequently trigger filter scrutiny',
    },
    'worth a look': {
      label: (_n, text) => `Worth a look (${text})`,
      note: 'Context-dependent words and readability recommendations',
    },
  },
  categories: {
    urgency: 'urgency',
    money: 'money',
    overpromising: 'overpromising',
    'shady wording': 'shady wording',
    clickbait: 'clickbait',
  },
  fields: { subject: 'subject', preview: 'preview', body: 'body' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Spam word: "${phrase}" (${field})`,
    'worth a look': (phrase) => `Phrase in body: "${phrase}"`,
  },
  wordReason: (category) =>
    `Flagged in the ${category} list. Mailbox filters score pushy words, especially in the subject line.`,
  wordSuggestion: (alternative) => `Consider replacing with "${alternative}".`,
  wordSuggestionPlain: 'Consider using plainer phrasing.',
  badgeFormatting: 'Formatting',
  badgeReadability: 'Readability note',
  suggestion: (text) => `Suggestion: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Subject mostly in capitals',
      reason: () => 'Subject lines with excessive capital letters trigger spam filters and feel like shouting to recipients.',
      suggestion: 'Use normal sentence case or standard title case instead.',
    },
    'exclamation-marks': {
      title: 'Excessive exclamation marks',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Multiple exclamation marks in a row (!!) are strongly penalized by content filters.'
          : `Found ${countText} exclamation marks in total. Overuse looks aggressive and spammy.`,
      suggestion: 'Use periods for calm, professional copy, keeping at most one exclamation mark.',
    },
    'repeated-currency': {
      title: 'Repeated currency symbols ($$$)',
      reason: () => 'Stacking dollar signs or currency symbols is a legacy spam marker.',
      suggestion: 'State the price clearly with a single symbol (e.g. "$100" instead of "$$$").',
    },
    'subject-emojis': {
      title: 'More than 2 emojis in the subject',
      reason: () =>
        'Multiple emojis reduce subject line readability and increase the risk of rendering issues on some email clients.',
      suggestion: 'Stick to at most one relevant emoji or remove them.',
    },
    'link-shorteners': {
      title: 'Link shorteners detected',
      reason: ({ items }) => `Found shortened URLs (${items}). Shorteners obscure destinations and are heavily filtered.`,
      suggestion: 'Replace with direct links on your own branded domain.',
    },
    'many-links': {
      title: 'More than 3 links in email body',
      reason: ({ countText }) =>
        `Found ${countText} links. Cold emails with multiple links look promotional and divide recipient attention.`,
      suggestion: 'Focus on a single clear call-to-action link.',
    },
    'unfilled-merge-tags': {
      title: 'Unfilled merge tags',
      reason: ({ items }) =>
        `Detected unpopulated placeholder tags (${items}). This signals an accidental template broadcast.`,
      suggestion: 'Ensure fallback values are configured in your sending tool before launching.',
    },
    'fake-reply': {
      title: 'Re: or Fwd: at the start of the subject',
      reason: () => 'Faking an existing thread or reply trick readers into opening, which quickly draws spam complaints.',
      suggestion: 'Only use Re: or Fwd: if this is an authentic reply to an incoming message.',
    },
    // The two readability notes are always listed under "worth a look", where the
    // tool used to add "Readability: " in front. The titles below include it.
    'subject-length': {
      title: 'Readability: Subject longer than 60 characters (readability)',
      reason: () => 'Most mobile email clients truncate subject lines after 50 to 60 characters.',
      suggestion: 'Front-load your key message so it is visible before mobile screens cut it off.',
    },
    'image-heavy': {
      title: 'HTML is mostly images with little text',
      reason: () =>
        'Emails consisting primarily of images with little body copy resemble image-based spam designed to evade text filters.',
      suggestion: 'Add substantive paragraphs of text to maintain a healthy text-to-image ratio.',
    },
    'body-word-count': {
      title: 'Readability: Body longer than 500 words (readability note)',
      reason: ({ countText }) =>
        `Found ${countText} words. Longer cold emails have lower reply rates. Mobile readers often skim or drop off after 150 to 200 words.`,
      suggestion: 'Trim secondary details and aim for 50 to 200 words for cold outreach.',
    },
  },
  noFindings:
    'No spam trigger phrases or structural warnings detected. Your subject line and copy follow clean standards.',
}

const ja: SpamToolStrings = {
  numberLocale: 'ja-JP',

  subjectLabel: '件名',
  subjectCounter: (_n, text) => `${text}/60文字`,
  subjectCaution: '（読みやすさに注意）',
  subjectPlaceholder: '例：ご提案についての簡単なご質問',
  previewLabel: 'プレビューテキスト',
  optional: '（任意）',
  previewPlaceholder: '例：先週の打ち合わせについての簡単なフォローアップ',
  bodyLabel: 'メール本文',
  bodyHint: '（プレーンテキストまたはコピーしたHTML）',
  bodyPlaceholder: 'メールの下書きやニュースレターのHTMLをここに貼り付けてください…',
  clear: 'クリア',
  button: 'メール文面をチェック',

  verdicts: {
    clean: '問題なし',
    'few-fixes': '直す点がいくつかあります',
    'needs-work': '修正が必要です',
  },
  summaryHeading: (verdict) => `概要：${verdict}`,
  summaryText: {
    clean: () => 'この下書きには、重大なスパムワードや構成上の問題は見つかりませんでした。',
    'few-fixes': ({ findingsText }) => `フィルタに厳しく見られる可能性のある項目が${findingsText}件見つかりました。`,
    'needs-work': ({ toFixText }) => `優先度の高い項目が複数あります（直すべき項目：${toFixText}件）。送信前に対応してください。`,
  },
  statWords: (_n, text) => `${text}語`,
  statLinks: (_n, text) => `リンク${text}件`,
  statFindings: (_n, text) => `指摘${text}件`,

  previewHeading: '強調表示した文面のプレビュー',
  previewHint: '強調表示された単語にカーソルを合わせると、カテゴリと、より平易な言い換えの案（英語）が表示されます。',
  markTitle: (category, alternative) =>
    `${category}：${alternative ? `英語の言い換え案「${alternative}」` : 'より平易な言い回しを検討してください'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `直す価値あり（${text}）`,
      note: 'フィルタに厳しく見られることが多い項目',
    },
    'worth a look': {
      label: (_n, text) => `確認する価値あり（${text}）`,
      note: '文脈によって変わる単語と、読みやすさに関する推奨',
    },
  },
  categories: {
    urgency: '緊急性',
    money: 'お金',
    overpromising: '誇大な約束',
    'shady wording': '怪しい言い回し',
    clickbait: 'クリックベイト',
  },
  fields: { subject: '件名', preview: 'プレビュー', body: '本文' },
  wordTitle: {
    'worth fixing': (phrase, field) => `スパムワード：「${phrase}」（${field}）`,
    'worth a look': (phrase) => `本文のフレーズ：「${phrase}」`,
  },
  wordReason: (category) =>
    `「${category}」の一覧に該当しました。メールボックスのフィルタは、押しの強い単語に点数を付けます。件名では特にその傾向があります。`,
  wordSuggestion: (alternative) => `英語の「${alternative}」への置き換えを検討してください。`,
  wordSuggestionPlain: 'より平易な言い回しを検討してください。',
  badgeFormatting: '書式',
  badgeReadability: '読みやすさ',
  suggestion: (text) => `提案：${text}`,
  findings: {
    'subject-caps': {
      title: '件名の大半が大文字',
      reason: () => '大文字が多すぎる件名はスパムフィルタに引っかかりやすく、受信者には叫んでいるように感じられます。',
      suggestion: '大文字は文頭や固有名詞など、通常の書き方の範囲にとどめてください。',
    },
    'exclamation-marks': {
      title: '感嘆符が多すぎる',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? '感嘆符の連続（!!）は、コンテンツフィルタで強く減点されます。'
          : `感嘆符が全部で${countText}個見つかりました。使いすぎると攻撃的で、迷惑メールのように見えます。`,
      suggestion: '落ち着いたビジネスの文面にするため、句点を使ってください。感嘆符は多くても1つにします。',
    },
    'repeated-currency': {
      title: '通貨記号の連続（$$$）',
      reason: () => 'ドル記号などの通貨記号を重ねるのは、昔からある迷惑メールの特徴です。',
      suggestion: '価格は記号を1つだけ使って明確に書いてください（例：「$$$」ではなく「$100」）。',
    },
    'subject-emojis': {
      title: '件名に絵文字が3つ以上',
      reason: () =>
        '絵文字が多いと件名が読みにくくなり、一部のメールソフトで正しく表示されないおそれが高まります。',
      suggestion: '絵文字は内容に関係のあるものを1つまでにするか、取り除いてください。',
    },
    'link-shorteners': {
      title: '短縮URLを検出',
      reason: ({ items }) => `短縮URLが見つかりました（${items}）。短縮URLはリンク先を隠すため、厳しくフィルタされます。`,
      suggestion: '自社ドメインの直接のリンクに置き換えてください。',
    },
    'many-links': {
      title: '本文のリンクが4つ以上',
      reason: ({ countText }) =>
        `リンクが${countText}個見つかりました。リンクの多いコールドメールは広告のように見え、受信者の注意も分散します。`,
      suggestion: '行動を促すはっきりしたリンクを1つに絞ってください。',
    },
    'unfilled-merge-tags': {
      title: '置き換わっていない差し込みタグ',
      reason: ({ items }) =>
        `値が入っていない差し込みタグが見つかりました（${items}）。テンプレートを誤ってそのまま一斉送信したことがわかってしまいます。`,
      suggestion: '送信前に、配信ツールで代わりの値（フォールバック）を設定してください。',
    },
    'fake-reply': {
      title: '件名の先頭にRe:またはFwd:',
      reason: () => '既存のやり取りや返信に見せかけて開封させる手口です。すぐに迷惑メールの報告につながります。',
      suggestion: 'Re:やFwd:は、受信したメールへの本当の返信や転送のときだけ使ってください。',
    },
    'subject-length': {
      title: '読みやすさ：件名が60文字を超えています',
      reason: () => '多くのモバイルのメールアプリは、50〜60文字で件名を切り詰めます。',
      suggestion: '重要な内容を件名の前半に置き、モバイルの画面で切れる前に見えるようにしてください。',
    },
    'image-heavy': {
      title: 'HTMLの大半が画像で、テキストが少ない',
      reason: () =>
        '画像が中心で本文の少ないメールは、テキストのフィルタを避けるために作られた画像型の迷惑メールに似ています。',
      suggestion: '内容のある文章の段落を加え、テキストと画像のバランスを保ってください。',
    },
    'body-word-count': {
      title: '読みやすさ：本文が500語を超えています',
      reason: ({ countText }) =>
        `${countText}語ありました。長いコールドメールは返信率が下がります。モバイルの読み手は、150〜200語を過ぎると流し読みしたり、読むのをやめたりすることがよくあります。`,
      suggestion: '補足的な内容を削り、コールドメールでは50〜200語を目安にしてください。',
    },
  },
  noFindings: 'スパムワードや構成上の警告は見つかりませんでした。件名と文面は問題のない書き方になっています。',
}

const ko: SpamToolStrings = {
  numberLocale: 'ko-KR',

  subjectLabel: '제목',
  subjectCounter: (_n, text) => `${text}/60자`,
  subjectCaution: '(가독성 주의)',
  subjectPlaceholder: '예: 제안서 관련 간단한 질문',
  previewLabel: '미리 보기 텍스트',
  optional: '(선택)',
  previewPlaceholder: '예: 지난주 대화에 대한 짧은 후속 연락',
  bodyLabel: '이메일 본문',
  bodyHint: '(일반 텍스트 또는 복사한 HTML)',
  bodyPlaceholder: '이메일 초안이나 뉴스레터 HTML을 여기에 붙여 넣으십시오...',
  clear: '지우기',
  button: '이메일 문구 검사',

  verdicts: {
    clean: '깨끗함',
    'few-fixes': '고칠 부분이 몇 가지 있음',
    'needs-work': '수정 필요',
  },
  summaryHeading: (verdict) => `요약: ${verdict}`,
  summaryText: {
    clean: () => '이 초안에서 심각한 스팸 유발 요소나 구조적 문제가 발견되지 않았습니다.',
    'few-fixes': ({ findingsText }) => `필터가 더 엄격하게 검토할 수 있는 항목을 ${findingsText}개 찾았습니다.`,
    'needs-work': ({ toFixText }) => `우선순위가 높은 항목이 여러 개 있습니다(고칠 항목 ${toFixText}개). 보내기 전에 확인하십시오.`,
  },
  statWords: (_n, text) => `단어 ${text}개`,
  statLinks: (_n, text) => `링크 ${text}개`,
  statFindings: (_n, text) => `발견 항목 ${text}개`,

  previewHeading: '강조 표시된 문구 미리 보기',
  previewHint: '강조 표시된 단어에 마우스를 올리면 범주와 더 평이한 영어 대안을 볼 수 있습니다.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `영어 대안 “${alternative}”` : '더 평이한 표현을 고려하십시오'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `고칠 만한 항목(${text})`,
      note: '필터가 자주 엄격하게 검토하는 항목',
    },
    'worth a look': {
      label: (_n, text) => `살펴볼 만한 항목(${text})`,
      note: '맥락에 따라 달라지는 단어와 가독성 권장 사항',
    },
  },
  categories: {
    urgency: '긴급성',
    money: '돈',
    overpromising: '과장된 약속',
    'shady wording': '수상한 표현',
    clickbait: '낚시성 문구',
  },
  fields: { subject: '제목', preview: '미리 보기', body: '본문' },
  wordTitle: {
    'worth fixing': (phrase, field) => `스팸 단어: “${phrase}” (${field})`,
    'worth a look': (phrase) => `본문의 문구: “${phrase}”`,
  },
  wordReason: (category) =>
    `“${category}” 목록에서 발견되었습니다. 메일함 필터는 밀어붙이는 단어에 점수를 매기며, 특히 제목에서 그렇습니다.`,
  wordSuggestion: (alternative) => `영어 대안 “${alternative}” 사용을 고려하십시오.`,
  wordSuggestionPlain: '더 평이한 표현을 고려하십시오.',
  badgeFormatting: '서식',
  badgeReadability: '가독성 참고',
  suggestion: (text) => `제안: ${text}`,
  findings: {
    'subject-caps': {
      title: '제목 대부분이 대문자',
      reason: () => '대문자가 지나치게 많은 제목은 스팸 필터에 걸리기 쉽고, 수신자에게는 소리치는 것처럼 느껴집니다.',
      suggestion: '일반적인 문장식 대소문자나 표준 제목식 대소문자를 쓰십시오.',
    },
    'exclamation-marks': {
      title: '느낌표 과다',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? '느낌표를 연달아 쓰면(!!) 콘텐츠 필터에서 크게 감점됩니다.'
          : `느낌표가 모두 ${countText}개 있습니다. 너무 많이 쓰면 공격적이고 스팸처럼 보입니다.`,
      suggestion: '차분하고 전문적인 문구를 위해 마침표를 쓰고, 느낌표는 많아야 하나만 두십시오.',
    },
    'repeated-currency': {
      title: '통화 기호 반복($$$)',
      reason: () => '달러 기호나 통화 기호를 겹쳐 쓰는 것은 오래된 스팸 표시입니다.',
      suggestion: '가격은 기호 하나로 명확하게 쓰십시오(예: “$$$” 대신 “$100”).',
    },
    'subject-emojis': {
      title: '제목에 이모지 3개 이상',
      reason: () =>
        '이모지가 많으면 제목을 읽기 어려워지고, 일부 이메일 클라이언트에서 제대로 표시되지 않을 위험이 커집니다.',
      suggestion: '관련 있는 이모지를 하나까지만 쓰거나 모두 빼십시오.',
    },
    'link-shorteners': {
      title: '단축 링크 발견',
      reason: ({ items }) => `단축 URL이 있습니다(${items}). 단축 링크는 연결되는 곳을 숨기므로 강하게 필터링됩니다.`,
      suggestion: '자사 브랜드 도메인의 직접 링크로 바꾸십시오.',
    },
    'many-links': {
      title: '본문 링크 4개 이상',
      reason: ({ countText }) =>
        `링크가 ${countText}개 있습니다. 링크가 많은 콜드메일은 홍보 메일처럼 보이고 수신자의 주의를 분산시킵니다.`,
      suggestion: '분명한 행동 유도 링크 하나에 집중하십시오.',
    },
    'unfilled-merge-tags': {
      title: '채워지지 않은 병합 태그',
      reason: ({ items }) =>
        `값이 채워지지 않은 자리 표시자 태그가 있습니다(${items}). 템플릿을 실수로 대량 발송했다는 신호입니다.`,
      suggestion: '발송하기 전에 발송 도구에서 대체 값을 설정하십시오.',
    },
    'fake-reply': {
      title: '제목 앞의 Re: 또는 Fwd:',
      reason: () => '기존 대화나 답장인 것처럼 꾸며 독자가 메일을 열게 하는 수법이며, 금방 스팸 신고로 이어집니다.',
      suggestion: '받은 메일에 대한 실제 답장일 때만 Re:나 Fwd:를 쓰십시오.',
    },
    'subject-length': {
      title: '가독성: 제목이 60자 초과',
      reason: () => '대부분의 모바일 이메일 앱은 50~60자 뒤에서 제목을 자릅니다.',
      suggestion: '핵심 메시지를 앞에 두어 모바일 화면에서 잘리기 전에 보이게 하십시오.',
    },
    'image-heavy': {
      title: 'HTML 대부분이 이미지이고 텍스트가 적음',
      reason: () =>
        '이미지 위주에 본문이 적은 이메일은 텍스트 필터를 피하려고 만든 이미지 스팸과 비슷해 보입니다.',
      suggestion: '내용 있는 텍스트 문단을 추가해 텍스트와 이미지의 비율을 적절하게 유지하십시오.',
    },
    'body-word-count': {
      title: '가독성: 본문이 500단어 초과',
      reason: ({ countText }) =>
        `단어가 ${countText}개 있습니다. 긴 콜드메일은 답장률이 낮습니다. 모바일 독자는 150~200단어가 지나면 대충 훑어보거나 읽기를 그만두는 경우가 많습니다.`,
      suggestion: '부차적인 내용을 줄이고, 콜드메일은 50~200단어를 목표로 하십시오.',
    },
  },
  noFindings: '스팸 유발 문구나 구조적 경고가 발견되지 않았습니다. 제목과 문구가 깨끗한 기준을 따르고 있습니다.',
}

const tr: SpamToolStrings = {
  numberLocale: 'tr-TR',

  subjectLabel: 'Konu satırı',
  subjectCounter: (_n, text) => `${text}/60 karakter`,
  subjectCaution: '(okunabilirlik uyarısı)',
  subjectPlaceholder: 'ör. Teklifimiz hakkında kısa bir soru',
  previewLabel: 'Önizleme metni',
  optional: '(isteğe bağlı)',
  previewPlaceholder: 'ör. Geçen haftaki görüşmemizle ilgili kısa bir hatırlatma',
  bodyLabel: 'E-posta metni',
  bodyHint: '(düz metin veya kopyalanmış HTML)',
  bodyPlaceholder: "E-posta taslağınızı veya bülten HTML'inizi buraya yapıştırın...",
  clear: 'Temizle',
  button: 'E-posta metnini kontrol edin',

  verdicts: {
    clean: 'Temiz görünüyor',
    'few-fixes': 'Düzeltilecek birkaç şey var',
    'needs-work': 'Düzeltme gerekiyor',
  },
  summaryHeading: (verdict) => `Özet: ${verdict}`,
  summaryText: {
    clean: () => 'Bu taslakta kritik bir spam tetikleyicisi veya yapısal uyarı bulunamadı.',
    'few-fixes': ({ findingsText }) => `Filtrelerin daha sıkı incelemesine yol açabilecek ${findingsText} öğe bulundu.`,
    'needs-work': ({ toFixText }) =>
      `Göndermeden önce ilgilenmeniz gereken birden fazla yüksek öncelikli öğe var (düzeltilecek ${toFixText} öğe).`,
  },
  statWords: (_n, text) => `${text} kelime`,
  statLinks: (_n, text) => `${text} link`,
  statFindings: (_n, text) => `${text} bulgu`,

  previewHeading: 'Vurgulanmış metin önizlemesi',
  previewHint: 'Kategoriyi ve önerilen daha sade İngilizce alternatifi görmek için vurgulanmış kelimelerin üzerine gelin.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `İngilizce öneri: “${alternative}”` : 'Daha sade bir ifade düşünün'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Düzeltmeye değer (${text})`,
      note: 'Filtrelerin sıklıkla daha sıkı incelediği öğeler',
    },
    'worth a look': {
      label: (_n, text) => `Göz atmaya değer (${text})`,
      note: 'Bağlama göre değişen kelimeler ve okunabilirlik önerileri',
    },
  },
  categories: {
    urgency: 'aciliyet',
    money: 'para',
    overpromising: 'aşırı vaat',
    'shady wording': 'şüpheli ifade',
    clickbait: 'tık tuzağı',
  },
  fields: { subject: 'konu', preview: 'önizleme', body: 'metin' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Spam kelime: “${phrase}” (${field})`,
    'worth a look': (phrase) => `Metindeki ifade: “${phrase}”`,
  },
  wordReason: (category) =>
    `“${category}” listesinde işaretlendi. Posta kutusu filtreleri baskıcı kelimeleri puanlar, özellikle konu satırında.`,
  wordSuggestion: (alternative) => `İngilizce “${alternative}” ifadesiyle değiştirmeyi düşünün.`,
  wordSuggestionPlain: 'Daha sade bir ifade kullanmayı düşünün.',
  badgeFormatting: 'Biçimlendirme',
  badgeReadability: 'Okunabilirlik notu',
  suggestion: (text) => `Öneri: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Konu satırı çoğunlukla büyük harf',
      reason: () => 'Aşırı büyük harf içeren konu satırları spam filtrelerini tetikler ve alıcılara bağırıyormuş gibi gelir.',
      suggestion: 'Bunun yerine normal cümle düzeninde veya standart başlık düzeninde büyük harf kullanın.',
    },
    'exclamation-marks': {
      title: 'Aşırı ünlem işareti',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Art arda birden fazla ünlem işareti (!!) içerik filtreleri tarafından ağır şekilde cezalandırılır.'
          : `Toplam ${countText} ünlem işareti bulundu. Aşırı kullanım saldırgan ve spam gibi görünür.`,
      suggestion: 'Sakin ve profesyonel bir metin için nokta kullanın ve en fazla bir ünlem işareti bırakın.',
    },
    'repeated-currency': {
      title: 'Tekrarlanan para birimi simgeleri ($$$)',
      reason: () => 'Dolar işaretlerini veya para birimi simgelerini art arda dizmek eski bir spam işaretidir.',
      suggestion: 'Fiyatı tek bir simgeyle açıkça yazın (ör. “$$$” yerine “$100”).',
    },
    'subject-emojis': {
      title: "Konu satırında 2'den fazla emoji",
      reason: () =>
        'Çok sayıda emoji konu satırının okunmasını zorlaştırır ve bazı e-posta programlarında görüntüleme sorunları riskini artırır.',
      suggestion: 'En fazla bir ilgili emoji kullanın veya emojileri kaldırın.',
    },
    'link-shorteners': {
      title: 'Link kısaltıcı tespit edildi',
      reason: ({ items }) => `Kısaltılmış URL'ler bulundu (${items}). Kısaltıcılar hedefi gizler ve yoğun şekilde filtrelenir.`,
      suggestion: 'Bunları kendi markalı alan adınızdaki doğrudan linklerle değiştirin.',
    },
    'many-links': {
      title: "E-posta metninde 3'ten fazla link",
      reason: ({ countText }) =>
        `${countText} link bulundu. Çok sayıda link içeren soğuk e-postalar tanıtım e-postası gibi görünür ve alıcının dikkatini dağıtır.`,
      suggestion: 'Tek ve net bir eylem çağrısı linkine odaklanın.',
    },
    'unfilled-merge-tags': {
      title: 'Doldurulmamış birleştirme etiketleri',
      reason: ({ items }) =>
        `Doldurulmamış yer tutucu etiketler bulundu (${items}). Bu, bir şablonun yanlışlıkla toplu gönderildiğini gösterir.`,
      suggestion: 'Göndermeden önce gönderim aracınızda yedek değerlerin ayarlandığından emin olun.',
    },
    'fake-reply': {
      title: 'Konu satırının başında Re: veya Fwd:',
      reason: () =>
        'Var olan bir yazışma veya yanıt izlenimi vermek, okuyucuları e-postayı açmaya kandıran bir hiledir ve kısa sürede spam şikâyetlerine yol açar.',
      suggestion: 'Re: veya Fwd: önekini yalnızca gelen bir mesaja verilen gerçek bir yanıtta kullanın.',
    },
    'subject-length': {
      title: 'Okunabilirlik: Konu satırı 60 karakterden uzun',
      reason: () => 'Çoğu mobil e-posta uygulaması konu satırlarını 50 ila 60 karakterden sonra keser.',
      suggestion: 'Ana mesajınızı başa koyun, böylece mobil ekranlar kesmeden önce görünür.',
    },
    'image-heavy': {
      title: 'HTML çoğunlukla görsel, metin az',
      reason: () =>
        'Çoğunlukla görsellerden oluşan ve az metin içeren e-postalar, metin filtrelerinden kaçmak için tasarlanmış görsel tabanlı spam e-postalarına benzer.',
      suggestion: 'Metin ve görsel oranını dengeli tutmak için içerikli metin paragrafları ekleyin.',
    },
    'body-word-count': {
      title: 'Okunabilirlik: Metin 500 kelimeden uzun',
      reason: ({ countText }) =>
        `${countText} kelime bulundu. Uzun soğuk e-postaların yanıt oranı daha düşüktür. Mobil okuyucular 150 ila 200 kelimeden sonra genellikle metne göz gezdirir veya okumayı bırakır.`,
      suggestion: 'İkincil ayrıntıları çıkarın ve soğuk e-postalar için 50 ila 200 kelimeyi hedefleyin.',
    },
  },
  noFindings: 'Spam tetikleyici ifade veya yapısal uyarı bulunamadı. Konu satırınız ve metniniz temiz standartlara uyuyor.',
}

// Italian. Matched phrases and their alternatives come from the English list in
// the core; the tooltip and the suggestion say the alternative is English.
const it: SpamToolStrings = {
  numberLocale: 'it-IT',
  subjectLabel: 'Oggetto',
  subjectCounter: (_n, text) => `${text}/60 caratteri`,
  subjectCaution: '(attenzione alla leggibilità)',
  subjectPlaceholder: 'es. Una domanda veloce sulla nostra proposta',
  previewLabel: 'Testo di anteprima',
  optional: '(facoltativo)',
  previewPlaceholder: 'es. Un breve seguito della nostra conversazione della settimana scorsa',
  bodyLabel: 'Corpo dell’email',
  bodyHint: '(testo semplice o HTML copiato)',
  bodyPlaceholder: 'Incolla qui la bozza della tua email o l’HTML della newsletter...',
  clear: 'Cancella',
  button: 'Controlla il testo',

  verdicts: {
    clean: 'Sembra pulito',
    'few-fixes': 'Alcune cose da correggere',
    'needs-work': 'Da migliorare',
  },
  summaryHeading: (verdict) => `Riepilogo: ${verdict}`,
  summaryText: {
    clean: () => 'In questa bozza non ci sono parole spam critiche né problemi strutturali.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `Trovato ${findingsText} elemento che potrebbe aumentare l’attenzione dei filtri.`
        : `Trovati ${findingsText} elementi che potrebbero aumentare l’attenzione dei filtri.`,
    'needs-work': ({ toFixText }) =>
      `Diversi elementi ad alta priorità (${toFixText} da correggere) richiedono attenzione prima dell’invio.`,
  },
  statWords: (n, text) => `${text} ${n === 1 ? 'parola' : 'parole'}`,
  statLinks: (_n, text) => `${text} link`,
  statFindings: (n, text) => `${text} ${n === 1 ? 'segnalazione' : 'segnalazioni'}`,

  previewHeading: 'Anteprima del testo evidenziato',
  previewHint: 'Passa il mouse sulle parole evidenziate per vedere la categoria e un’alternativa più semplice in inglese.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `prova “${alternative}” (alternativa in inglese)` : 'valuta una formulazione più semplice'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Da correggere (${text})`,
      note: 'Elementi che spesso attirano l’attenzione dei filtri',
    },
    'worth a look': {
      label: (_n, text) => `Da valutare (${text})`,
      note: 'Parole che dipendono dal contesto e consigli sulla leggibilità',
    },
  },
  categories: {
    urgency: 'urgenza',
    money: 'denaro',
    overpromising: 'promesse eccessive',
    'shady wording': 'formulazioni ambigue',
    clickbait: 'clickbait',
  },
  fields: { subject: 'oggetto', preview: 'anteprima', body: 'corpo' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Parola spam: “${phrase}” (${field})`,
    'worth a look': (phrase) => `Frase nel corpo: “${phrase}”`,
  },
  wordReason: (category) =>
    `Presente nella lista “${category}”. I filtri delle caselle di posta assegnano un punteggio alle parole insistenti, soprattutto nell’oggetto.`,
  wordSuggestion: (alternative) => `valuta di sostituirla con “${alternative}” (alternativa in inglese).`,
  wordSuggestionPlain: 'valuta una formulazione più semplice.',
  badgeFormatting: 'Formattazione',
  badgeReadability: 'Nota sulla leggibilità',
  suggestion: (text) => `Suggerimento: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Oggetto quasi tutto in maiuscolo',
      reason: () => 'Gli oggetti con troppe lettere maiuscole attivano i filtri antispam e ai destinatari danno l’impressione di un testo urlato.',
      suggestion: 'usa le maiuscole normali, solo dove servono.',
    },
    'exclamation-marks': {
      title: 'Troppi punti esclamativi',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Più punti esclamativi di seguito (!!) sono penalizzati molto dai filtri dei contenuti.'
          : `Trovati ${countText} punti esclamativi in totale. Usarne troppi sembra aggressivo e fa pensare allo spam.`,
      suggestion: 'usa il punto per un testo calmo e professionale, con al massimo un punto esclamativo.',
    },
    'repeated-currency': {
      title: 'Simboli di valuta ripetuti ($$$)',
      reason: () => 'Mettere in fila simboli del dollaro o di altre valute è un vecchio segnale di spam.',
      suggestion: 'indica il prezzo in modo chiaro con un solo simbolo (per esempio "$100" invece di "$$$").',
    },
    'subject-emojis': {
      title: 'Più di 2 emoji nell’oggetto',
      reason: () =>
        'Molte emoji rendono l’oggetto meno leggibile e aumentano il rischio di problemi di visualizzazione in alcuni client email.',
      suggestion: 'usa al massimo un’emoji pertinente, oppure toglile.',
    },
    'link-shorteners': {
      title: 'Accorciatori di link trovati',
      reason: ({ items }) => `Trovati URL accorciati (${items}). Gli accorciatori nascondono la destinazione e vengono filtrati molto.`,
      suggestion: 'sostituiscili con link diretti sul tuo dominio.',
    },
    'many-links': {
      title: 'Più di 3 link nel corpo dell’email',
      reason: ({ countText }) =>
        `Trovati ${countText} link. Le cold email con molti link sembrano promozionali e dividono l’attenzione del destinatario.`,
      suggestion: 'concentrati su un solo link chiaro per l’azione che chiedi.',
    },
    'unfilled-merge-tags': {
      title: 'Merge tag non compilati',
      reason: ({ items }) =>
        `Trovati segnaposto non compilati (${items}). Fanno capire che il modello è stato inviato per errore senza i dati.`,
      suggestion: 'prima dell’invio, imposta i valori di riserva nel tuo strumento di invio.',
    },
    'fake-reply': {
      title: 'Re: o Fwd: all’inizio dell’oggetto',
      reason: () => 'Fingere una conversazione o una risposta esistente spinge i lettori ad aprire con un trucco, e questo porta presto a segnalazioni di spam.',
      suggestion: 'usa Re: o Fwd: solo se è una vera risposta a un messaggio ricevuto.',
    },
    'subject-length': {
      title: 'Leggibilità: oggetto più lungo di 60 caratteri',
      reason: () => 'La maggior parte dei client email su mobile taglia l’oggetto dopo 50 o 60 caratteri.',
      suggestion: 'metti il messaggio principale all’inizio, così è visibile prima del taglio sugli schermi mobile.',
    },
    'image-heavy': {
      title: 'HTML fatto quasi solo di immagini, con poco testo',
      reason: () =>
        'Le email fatte soprattutto di immagini, con poco testo, somigliano allo spam basato su immagini pensato per aggirare i filtri del testo.',
      suggestion: 'aggiungi paragrafi di testo veri per mantenere un buon rapporto tra testo e immagini.',
    },
    'body-word-count': {
      title: 'Leggibilità: corpo più lungo di 500 parole',
      reason: ({ countText }) =>
        `Trovate ${countText} parole. Le cold email più lunghe ricevono meno risposte. Chi legge da mobile spesso scorre o smette di leggere dopo 150 o 200 parole.`,
      suggestion: 'togli i dettagli secondari e per le cold email punta a una lunghezza tra 50 e 200 parole.',
    },
  },
  noFindings:
    'Nessuna frase spam e nessun avviso strutturale. L’oggetto e il testo rispettano buone pratiche di scrittura.',
}

// German. Matched phrases and their alternatives come from the English list in
// the core; the tooltip and the suggestion say the alternative is English.
const de: SpamToolStrings = {
  numberLocale: 'de-DE',
  subjectLabel: 'Betreff',
  subjectCounter: (_n, text) => `${text}/60 Zeichen`,
  subjectCaution: '(auf Lesbarkeit achten)',
  subjectPlaceholder: 'z. B. Kurze Frage zu unserem Angebot',
  previewLabel: 'Vorschautext',
  optional: '(optional)',
  previewPlaceholder: 'z. B. Eine kurze Rückmeldung zu unserem Gespräch letzte Woche',
  bodyLabel: 'E-Mail-Text',
  bodyHint: '(reiner Text oder kopiertes HTML)',
  bodyPlaceholder: 'Fügen Sie hier Ihren E-Mail-Entwurf oder das HTML Ihres Newsletters ein...',
  clear: 'Leeren',
  button: 'E-Mail-Text prüfen',

  verdicts: {
    clean: 'Sieht sauber aus',
    'few-fixes': 'Einige Punkte zu beheben',
    'needs-work': 'Überarbeitung nötig',
  },
  summaryHeading: (verdict) => `Zusammenfassung: ${verdict}`,
  summaryText: {
    clean: () => 'In diesem Entwurf wurden keine kritischen Spam-Wörter und keine strukturellen Probleme gefunden.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `${findingsText} Punkt gefunden, der die Prüfung durch Filter verschärfen könnte.`
        : `${findingsText} Punkte gefunden, die die Prüfung durch Filter verschärfen könnten.`,
    'needs-work': ({ toFixText }) =>
      `Mehrere Punkte mit hoher Priorität (${toFixText} zu beheben) brauchen vor dem Versand Ihre Aufmerksamkeit.`,
  },
  statWords: (n, text) => `${text} ${n === 1 ? 'Wort' : 'Wörter'}`,
  statLinks: (n, text) => `${text} ${n === 1 ? 'Link' : 'Links'}`,
  statFindings: (n, text) => `${text} ${n === 1 ? 'Hinweis' : 'Hinweise'}`,

  previewHeading: 'Vorschau mit Markierungen',
  previewHint: 'Fahren Sie mit der Maus über markierte Wörter, um die Kategorie und eine schlichtere englische Alternative zu sehen.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `englische Alternative „${alternative}“` : 'schlichtere Formulierung erwägen'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Beheben empfohlen (${text})`,
      note: 'Punkte, die häufig eine genauere Prüfung durch Filter auslösen',
    },
    'worth a look': {
      label: (_n, text) => `Prüfenswert (${text})`,
      note: 'Wörter, die vom Zusammenhang abhängen, und Hinweise zur Lesbarkeit',
    },
  },
  categories: {
    urgency: 'Dringlichkeit',
    money: 'Geld',
    overpromising: 'Übertreibung',
    'shady wording': 'zwielichtige Formulierung',
    clickbait: 'Clickbait',
  },
  fields: { subject: 'Betreff', preview: 'Vorschau', body: 'Text' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Spam-Wort: „${phrase}“ (${field})`,
    'worth a look': (phrase) => `Phrase im Text: „${phrase}“`,
  },
  wordReason: (category) =>
    `Steht in der Liste „${category}“. Postfach-Filter bewerten aufdringliche Wörter, besonders im Betreff.`,
  wordSuggestion: (alternative) => `Ersetzen Sie es eventuell durch „${alternative}“ (englische Formulierung).`,
  wordSuggestionPlain: 'Erwägen Sie eine schlichtere Formulierung.',
  badgeFormatting: 'Formatierung',
  badgeReadability: 'Hinweis zur Lesbarkeit',
  suggestion: (text) => `Vorschlag: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Betreff fast nur in Großbuchstaben',
      reason: () => 'Betreffzeilen mit zu vielen Großbuchstaben lösen Spamfilter aus und wirken auf Empfänger wie Schreien.',
      suggestion: 'Nutzen Sie normale Groß- und Kleinschreibung.',
    },
    'exclamation-marks': {
      title: 'Zu viele Ausrufezeichen',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Mehrere Ausrufezeichen hintereinander (!!) werden von Inhaltsfiltern stark abgewertet.'
          : `Insgesamt ${countText} Ausrufezeichen gefunden. Zu viele wirken aggressiv und nach Spam.`,
      suggestion: 'Nutzen Sie Punkte für einen ruhigen, professionellen Text und höchstens ein Ausrufezeichen.',
    },
    'repeated-currency': {
      title: 'Wiederholte Währungszeichen ($$$)',
      reason: () => 'Gehäufte Dollar- oder Währungszeichen sind ein altes Spam-Merkmal.',
      suggestion: 'Nennen Sie den Preis klar mit einem einzigen Zeichen (z. B. „100 $“ statt „$$$“).',
    },
    'subject-emojis': {
      title: 'Mehr als 2 Emojis im Betreff',
      reason: () =>
        'Mehrere Emojis machen den Betreff schwerer lesbar und erhöhen das Risiko von Darstellungsfehlern in manchen E-Mail-Programmen.',
      suggestion: 'Nutzen Sie höchstens ein passendes Emoji, oder entfernen Sie sie.',
    },
    'link-shorteners': {
      title: 'Linkverkürzer gefunden',
      reason: ({ items }) => `Verkürzte URLs gefunden (${items}). Linkverkürzer verbergen das Ziel und werden stark gefiltert.`,
      suggestion: 'Ersetzen Sie sie durch direkte Links auf Ihrer eigenen Domain.',
    },
    'many-links': {
      title: 'Mehr als 3 Links im E-Mail-Text',
      reason: ({ countText }) =>
        `${countText} Links gefunden. Cold-E-Mails mit mehreren Links wirken werblich und teilen die Aufmerksamkeit der Empfänger.`,
      suggestion: 'Beschränken Sie sich auf einen klaren Link für die gewünschte Handlung.',
    },
    'unfilled-merge-tags': {
      title: 'Nicht ausgefüllte Platzhalter',
      reason: ({ items }) =>
        `Nicht befüllte Platzhalter gefunden (${items}). Das zeigt, dass eine Vorlage versehentlich ohne Daten versendet wurde.`,
      suggestion: 'Legen Sie vor dem Versand in Ihrem Versandtool Ersatzwerte fest.',
    },
    'fake-reply': {
      title: 'Re: oder Fwd: am Anfang des Betreffs',
      reason: () => 'Ein vorgetäuschter Verlauf oder eine vorgetäuschte Antwort verleitet Leser zum Öffnen. Das führt schnell zu Spam-Beschwerden.',
      suggestion: 'Nutzen Sie Re: oder Fwd: nur, wenn es eine echte Antwort auf eine erhaltene Nachricht ist.',
    },
    'subject-length': {
      title: 'Lesbarkeit: Betreff länger als 60 Zeichen',
      reason: () => 'Die meisten mobilen E-Mail-Programme kürzen Betreffzeilen nach 50 bis 60 Zeichen.',
      suggestion: 'Stellen Sie die wichtigste Aussage an den Anfang, damit sie vor der Kürzung auf dem Handy sichtbar ist.',
    },
    'image-heavy': {
      title: 'HTML besteht fast nur aus Bildern mit wenig Text',
      reason: () =>
        'E-Mails, die vor allem aus Bildern mit wenig Text bestehen, ähneln Bild-Spam, der Textfilter umgehen soll.',
      suggestion: 'Fügen Sie echte Textabsätze hinzu, damit Text und Bilder in einem guten Verhältnis stehen.',
    },
    'body-word-count': {
      title: 'Lesbarkeit: Text länger als 500 Wörter',
      reason: ({ countText }) =>
        `${countText} Wörter gefunden. Längere Cold-E-Mails erhalten weniger Antworten. Mobile Leser überfliegen den Text oft oder hören nach 150 bis 200 Wörtern auf.`,
      suggestion: 'Kürzen Sie Nebensächliches. Für Cold-E-Mails sind 50 bis 200 Wörter ein gutes Ziel.',
    },
  },
  noFindings:
    'Keine Spam-Phrasen und keine strukturellen Warnungen gefunden. Betreff und Text folgen sauberen Standards.',
}

// Spanish. Matched phrases and their alternatives come from the English list in
// the core; the tooltip and the suggestion say the alternative is English.
const es: SpamToolStrings = {
  numberLocale: 'es-ES',
  subjectLabel: 'Asunto',
  subjectCounter: (_n, text) => `${text}/60 caracteres`,
  subjectCaution: '(atención a la legibilidad)',
  subjectPlaceholder: 'p. ej., Una pregunta rápida sobre nuestra propuesta',
  previewLabel: 'Texto de vista previa',
  optional: '(opcional)',
  previewPlaceholder: 'p. ej., Un breve seguimiento de nuestra conversación de la semana pasada',
  bodyLabel: 'Cuerpo del correo',
  bodyHint: '(texto plano o HTML copiado)',
  bodyPlaceholder: 'Pega aquí el borrador de tu correo o el HTML de tu newsletter...',
  clear: 'Borrar',
  button: 'Revisar el texto',

  verdicts: {
    clean: 'Parece limpio',
    'few-fixes': 'Hay algunas cosas que corregir',
    'needs-work': 'Necesita cambios',
  },
  summaryHeading: (verdict) => `Resumen: ${verdict}`,
  summaryText: {
    clean: () => 'No se detectaron palabras spam críticas ni problemas de estructura en este borrador.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `Se encontró ${findingsText} elemento que puede aumentar el control de los filtros.`
        : `Se encontraron ${findingsText} elementos que pueden aumentar el control de los filtros.`,
    'needs-work': ({ toFixText }) =>
      `Varios elementos de alta prioridad (${toFixText} por corregir) requieren atención antes del envío.`,
  },
  statWords: (n, text) => `${text} ${n === 1 ? 'palabra' : 'palabras'}`,
  statLinks: (n, text) => `${text} ${n === 1 ? 'enlace' : 'enlaces'}`,
  statFindings: (n, text) => `${text} ${n === 1 ? 'aviso' : 'avisos'}`,

  previewHeading: 'Vista previa del texto resaltado',
  previewHint: 'Pasa el cursor sobre las palabras resaltadas para ver la categoría y una alternativa más sencilla en inglés.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `prueba “${alternative}” (alternativa en inglés)` : 'considera una redacción más sencilla'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Conviene corregir (${text})`,
      note: 'Elementos que suelen hacer que los filtros revisen más el correo',
    },
    'worth a look': {
      label: (_n, text) => `Conviene revisar (${text})`,
      note: 'Palabras que dependen del contexto y recomendaciones de legibilidad',
    },
  },
  categories: {
    urgency: 'urgencia',
    money: 'dinero',
    overpromising: 'promesas exageradas',
    'shady wording': 'expresiones turbias',
    clickbait: 'clickbait',
  },
  fields: { subject: 'asunto', preview: 'vista previa', body: 'cuerpo' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Palabra spam: “${phrase}” (${field})`,
    'worth a look': (phrase) => `Frase en el cuerpo: “${phrase}”`,
  },
  wordReason: (category) =>
    `Aparece en la lista “${category}”. Los filtros de correo puntúan las palabras insistentes, sobre todo en el asunto.`,
  wordSuggestion: (alternative) => `considera sustituirla por “${alternative}” (alternativa en inglés).`,
  wordSuggestionPlain: 'considera una redacción más sencilla.',
  badgeFormatting: 'Formato',
  badgeReadability: 'Nota de legibilidad',
  suggestion: (text) => `Sugerencia: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Asunto casi todo en mayúsculas',
      reason: () => 'Los asuntos con demasiadas mayúsculas activan los filtros de spam y a los destinatarios les parece que les gritan.',
      suggestion: 'usa mayúsculas normales, solo donde corresponden.',
    },
    'exclamation-marks': {
      title: 'Demasiados signos de exclamación',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Varios signos de exclamación seguidos (!!) reciben una penalización fuerte de los filtros de contenido.'
          : `Se encontraron ${countText} signos de exclamación en total. Usar demasiados parece agresivo y suena a spam.`,
      suggestion: 'usa puntos para un texto tranquilo y profesional, con un signo de exclamación como máximo.',
    },
    'repeated-currency': {
      title: 'Símbolos de moneda repetidos ($$$)',
      reason: () => 'Acumular signos de dólar u otros símbolos de moneda es una señal clásica de spam.',
      suggestion: 'indica el precio con claridad y con un solo símbolo (por ejemplo, "100 $" en lugar de "$$$").',
    },
    'subject-emojis': {
      title: 'Más de 2 emojis en el asunto',
      reason: () =>
        'Varios emojis hacen el asunto menos legible y aumentan el riesgo de errores de visualización en algunos clientes de correo.',
      suggestion: 'usa como máximo un emoji relevante, o quítalos.',
    },
    'link-shorteners': {
      title: 'Se detectaron acortadores de enlaces',
      reason: ({ items }) => `Se encontraron URL acortadas (${items}). Los acortadores ocultan el destino y los filtros los vigilan mucho.`,
      suggestion: 'reemplázalos por enlaces directos en tu propio dominio.',
    },
    'many-links': {
      title: 'Más de 3 enlaces en el cuerpo del correo',
      reason: ({ countText }) =>
        `Se encontraron ${countText} enlaces. Los cold emails con varios enlaces parecen promocionales y dividen la atención del destinatario.`,
      suggestion: 'céntrate en un solo enlace claro para la acción que pides.',
    },
    'unfilled-merge-tags': {
      title: 'Etiquetas de combinación sin rellenar',
      reason: ({ items }) =>
        `Se detectaron etiquetas sin rellenar (${items}). Indican que se envió una plantilla por error sin los datos.`,
      suggestion: 'configura valores de respaldo en tu herramienta de envío antes de lanzar la campaña.',
    },
    'fake-reply': {
      title: 'Re: o Fwd: al inicio del asunto',
      reason: () => 'Fingir una conversación o una respuesta previa engaña a los lectores para que abran, y eso genera quejas de spam muy rápido.',
      suggestion: 'usa Re: o Fwd: solo si es una respuesta real a un mensaje recibido.',
    },
    'subject-length': {
      title: 'Legibilidad: asunto de más de 60 caracteres',
      reason: () => 'La mayoría de los clientes de correo en el móvil cortan el asunto después de 50 a 60 caracteres.',
      suggestion: 'pon el mensaje principal al inicio para que se vea antes del corte en pantallas móviles.',
    },
    'image-heavy': {
      title: 'HTML hecho casi solo de imágenes, con poco texto',
      reason: () =>
        'Los correos formados sobre todo por imágenes, con poco texto, se parecen al spam en imágenes que busca evitar los filtros de texto.',
      suggestion: 'agrega párrafos de texto reales para mantener una buena proporción entre texto e imágenes.',
    },
    'body-word-count': {
      title: 'Legibilidad: cuerpo de más de 500 palabras',
      reason: ({ countText }) =>
        `Se encontraron ${countText} palabras. Los cold emails largos reciben menos respuestas. Quien lee en el móvil suele leer por encima o dejar de leer después de 150 a 200 palabras.`,
      suggestion: 'quita los detalles secundarios y procura que los cold emails tengan entre 50 y 200 palabras.',
    },
  },
  noFindings:
    'No se detectaron frases spam ni avisos de estructura. Tu asunto y tu texto siguen buenas prácticas.',
}

// Brazilian Portuguese. Matched phrases and their alternatives come from the
// English list in the core; the tooltip and the suggestion say the alternative is English.
const ptBr: SpamToolStrings = {
  numberLocale: 'pt-BR',
  subjectLabel: 'Assunto',
  subjectCounter: (_n, text) => `${text}/60 caracteres`,
  subjectCaution: '(atenção à legibilidade)',
  subjectPlaceholder: 'ex.: Uma pergunta rápida sobre a nossa proposta',
  previewLabel: 'Texto de pré-visualização',
  optional: '(opcional)',
  previewPlaceholder: 'ex.: Um breve retorno sobre a nossa conversa da semana passada',
  bodyLabel: 'Corpo do e-mail',
  bodyHint: '(texto simples ou HTML copiado)',
  bodyPlaceholder: 'Cole aqui o rascunho do seu e-mail ou o HTML da sua newsletter...',
  clear: 'Limpar',
  button: 'Verificar o texto',

  verdicts: {
    clean: 'Parece limpo',
    'few-fixes': 'Algumas coisas para corrigir',
    'needs-work': 'Precisa de ajustes',
  },
  summaryHeading: (verdict) => `Resumo: ${verdict}`,
  summaryText: {
    clean: () => 'Não encontramos palavras de spam críticas nem problemas de estrutura neste rascunho.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `Foi encontrado ${findingsText} item que pode aumentar a atenção dos filtros.`
        : `Foram encontrados ${findingsText} itens que podem aumentar a atenção dos filtros.`,
    'needs-work': ({ toFixText }) =>
      `Vários itens de alta prioridade (${toFixText} para corrigir) precisam de atenção antes do envio.`,
  },
  statWords: (n, text) => `${text} ${n === 1 ? 'palavra' : 'palavras'}`,
  statLinks: (n, text) => `${text} ${n === 1 ? 'link' : 'links'}`,
  statFindings: (n, text) => `${text} ${n === 1 ? 'alerta' : 'alertas'}`,

  previewHeading: 'Pré-visualização do texto destacado',
  previewHint: 'Passe o mouse sobre as palavras destacadas para ver a categoria e uma alternativa mais simples em inglês.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `tente “${alternative}” (alternativa em inglês)` : 'considere uma redação mais simples'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Vale corrigir (${text})`,
      note: 'Itens que costumam atrair a atenção dos filtros',
    },
    'worth a look': {
      label: (_n, text) => `Vale revisar (${text})`,
      note: 'Palavras que dependem do contexto e recomendações de legibilidade',
    },
  },
  categories: {
    urgency: 'urgência',
    money: 'dinheiro',
    overpromising: 'promessas exageradas',
    'shady wording': 'termos suspeitos',
    clickbait: 'clickbait',
  },
  fields: { subject: 'assunto', preview: 'pré-visualização', body: 'corpo' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Palavra de spam: “${phrase}” (${field})`,
    'worth a look': (phrase) => `Frase no corpo: “${phrase}”`,
  },
  wordReason: (category) =>
    `Aparece na lista “${category}”. Os filtros das caixas de entrada pontuam palavras insistentes, principalmente no assunto.`,
  wordSuggestion: (alternative) => `considere trocar por “${alternative}” (alternativa em inglês).`,
  wordSuggestionPlain: 'considere uma redação mais simples.',
  badgeFormatting: 'Formatação',
  badgeReadability: 'Nota de legibilidade',
  suggestion: (text) => `Sugestão: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Assunto quase todo em maiúsculas',
      reason: () => 'Assuntos com letras maiúsculas demais acionam filtros de spam e parecem gritos para os destinatários.',
      suggestion: 'use maiúsculas normais, só onde elas são necessárias.',
    },
    'exclamation-marks': {
      title: 'Pontos de exclamação demais',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Vários pontos de exclamação seguidos (!!) são muito penalizados pelos filtros de conteúdo.'
          : `Foram encontrados ${countText} pontos de exclamação no total. O excesso parece agressivo e lembra spam.`,
      suggestion: 'use pontos finais para um texto calmo e profissional, com no máximo um ponto de exclamação.',
    },
    'repeated-currency': {
      title: 'Símbolos de moeda repetidos ($$$)',
      reason: () => 'Acumular cifrões ou outros símbolos de moeda é um sinal antigo de spam.',
      suggestion: 'informe o preço com clareza e um único símbolo (por exemplo, "US$ 100" em vez de "$$$").',
    },
    'subject-emojis': {
      title: 'Mais de 2 emojis no assunto',
      reason: () =>
        'Vários emojis deixam o assunto menos legível e aumentam o risco de problemas de exibição em alguns clientes de e-mail.',
      suggestion: 'use no máximo um emoji relevante, ou remova todos.',
    },
    'link-shorteners': {
      title: 'Encurtadores de links encontrados',
      reason: ({ items }) => `Foram encontradas URLs encurtadas (${items}). Encurtadores escondem o destino e são muito filtrados.`,
      suggestion: 'troque por links diretos no seu próprio domínio.',
    },
    'many-links': {
      title: 'Mais de 3 links no corpo do e-mail',
      reason: ({ countText }) =>
        `Foram encontrados ${countText} links. E-mails de prospecção com vários links parecem promocionais e dividem a atenção do destinatário.`,
      suggestion: 'concentre-se em um único link claro para a ação que você pede.',
    },
    'unfilled-merge-tags': {
      title: 'Merge tags não preenchidas',
      reason: ({ items }) =>
        `Foram encontradas tags de personalização sem preencher (${items}). Isso indica que um modelo foi enviado por engano sem os dados.`,
      suggestion: 'antes do envio, configure valores padrão na sua ferramenta de envio.',
    },
    'fake-reply': {
      title: 'Re: ou Fwd: no início do assunto',
      reason: () => 'Fingir uma conversa ou uma resposta anterior engana os leitores para que abram o e-mail, e isso gera denúncias de spam rapidamente.',
      suggestion: 'use Re: ou Fwd: só se for uma resposta real a uma mensagem recebida.',
    },
    'subject-length': {
      title: 'Legibilidade: assunto com mais de 60 caracteres',
      reason: () => 'A maioria dos clientes de e-mail no celular corta o assunto depois de 50 a 60 caracteres.',
      suggestion: 'coloque a mensagem principal no início, para que ela apareça antes do corte nas telas de celular.',
    },
    'image-heavy': {
      title: 'HTML quase só com imagens e pouco texto',
      reason: () =>
        'E-mails formados principalmente por imagens, com pouco texto, se parecem com spam em imagem feito para escapar dos filtros de texto.',
      suggestion: 'adicione parágrafos de texto de verdade para manter uma boa proporção entre texto e imagens.',
    },
    'body-word-count': {
      title: 'Legibilidade: corpo com mais de 500 palavras',
      reason: ({ countText }) =>
        `Foram encontradas ${countText} palavras. E-mails de prospecção mais longos recebem menos respostas. Quem lê no celular costuma passar os olhos ou parar de ler depois de 150 a 200 palavras.`,
      suggestion: 'corte detalhes secundários e procure ficar entre 50 e 200 palavras em e-mails de prospecção.',
    },
  },
  noFindings:
    'Não encontramos frases de spam nem alertas de estrutura. O seu assunto e o seu texto seguem boas práticas.',
}

const fr: SpamToolStrings = {
  numberLocale: 'fr-FR',

  subjectLabel: 'Objet',
  subjectCounter: (_n, text) => `${text}/60 caractères`,
  subjectCaution: '(attention à la lisibilité)',
  subjectPlaceholder: 'ex. Petite question sur notre proposition',
  previewLabel: 'Texte d’aperçu',
  optional: '(facultatif)',
  previewPlaceholder: 'ex. Un court suivi de notre échange de la semaine dernière',
  bodyLabel: 'Corps de l’email',
  bodyHint: '(texte brut ou HTML copié)',
  bodyPlaceholder: 'Collez ici le brouillon de votre email ou le HTML de votre newsletter...',
  clear: 'Effacer',
  button: 'Vérifier le texte',

  verdicts: {
    clean: 'Texte propre',
    'few-fixes': 'Quelques points à corriger',
    'needs-work': 'Texte à retravailler',
  },
  summaryHeading: (verdict) => `Résumé : ${verdict}`,
  summaryText: {
    clean: () => 'Aucun déclencheur de spam important ni problème de structure détecté dans ce brouillon.',
    'few-fixes': ({ findings, findingsText }) =>
      findings > 1
        ? `Nous avons trouvé ${findingsText} points qui pourraient attirer l’attention des filtres.`
        : `Nous avons trouvé ${findingsText} point qui pourrait attirer l’attention des filtres.`,
    'needs-work': ({ toFixText }) =>
      `Plusieurs points prioritaires (${toFixText} à corriger) demandent votre attention avant l’envoi.`,
  },
  statWords: (n, text) => `${text} ${n > 1 ? 'mots' : 'mot'}`,
  statLinks: (n, text) => `${text} ${n > 1 ? 'liens' : 'lien'}`,
  statFindings: (n, text) => `${text} ${n > 1 ? 'points relevés' : 'point relevé'}`,

  previewHeading: 'Aperçu du texte surligné',
  previewHint: 'Survolez les mots surlignés pour voir leur catégorie et une formulation plus simple, proposée en anglais.',
  markTitle: (category, alternative) =>
    `${category} : ${alternative ? `essayez « ${alternative} » (suggestion en anglais)` : 'préférez une formulation plus simple'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `À corriger (${text})`,
      note: 'Points qui attirent souvent l’attention des filtres',
    },
    'worth a look': {
      label: (_n, text) => `À examiner (${text})`,
      note: 'Mots qui dépendent du contexte et conseils de lisibilité',
    },
  },
  categories: {
    urgency: 'urgence',
    money: 'argent',
    overpromising: 'promesses excessives',
    'shady wording': 'formulations douteuses',
    clickbait: 'piège à clics',
  },
  fields: { subject: 'objet', preview: 'aperçu', body: 'corps' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Mot spam : « ${phrase} » (${field})`,
    'worth a look': (phrase, field) => `Expression à vérifier : « ${phrase} » (${field})`,
  },
  wordReason: (category) =>
    `Repéré dans la liste « ${category} ». Les filtres des messageries attribuent des points aux mots insistants, surtout dans l’objet.`,
  wordSuggestion: (alternative) => `Vous pouvez le remplacer par « ${alternative} » (suggestion en anglais).`,
  wordSuggestionPlain: 'Préférez une formulation plus simple.',
  badgeFormatting: 'Mise en forme',
  badgeReadability: 'Lisibilité',
  suggestion: (text) => `Suggestion : ${text}`,
  findings: {
    'subject-caps': {
      title: 'Objet presque entièrement en majuscules',
      reason: () =>
        'Les objets avec trop de majuscules déclenchent les filtres anti-spam et donnent aux destinataires l’impression qu’on leur crie dessus.',
      suggestion: 'Écrivez l’objet normalement, avec une majuscule au début et pour les noms propres.',
    },
    'exclamation-marks': {
      title: 'Trop de points d’exclamation',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Plusieurs points d’exclamation à la suite (!!) sont fortement pénalisés par les filtres de contenu.'
          : `${countText} points d’exclamation trouvés au total. Trop de points d’exclamation donnent un ton agressif qui ressemble à du spam.`,
      suggestion: 'Utilisez des points pour un ton calme et professionnel, avec au maximum un point d’exclamation.',
    },
    'repeated-currency': {
      title: 'Symboles monétaires répétés ($$$)',
      reason: () => 'Empiler les symboles dollar ou d’autres symboles monétaires est un ancien marqueur de spam.',
      suggestion: 'Indiquez le prix clairement avec un seul symbole (par exemple « 100 $ » au lieu de « $$$ »).',
    },
    'subject-emojis': {
      title: 'Plus de 2 emojis dans l’objet',
      reason: () =>
        'Plusieurs emojis rendent l’objet moins lisible et augmentent le risque de problèmes d’affichage dans certaines messageries.',
      suggestion: 'Gardez au maximum un emoji pertinent, ou supprimez-les.',
    },
    'link-shorteners': {
      title: 'Liens raccourcis détectés',
      reason: ({ items }) =>
        `URL raccourcies trouvées (${items}). Les raccourcisseurs cachent la destination du lien et sont très filtrés.`,
      suggestion: 'Remplacez-les par des liens directs sur votre propre domaine.',
    },
    'many-links': {
      title: 'Plus de 3 liens dans le corps de l’email',
      reason: ({ countText }) =>
        `${countText} liens trouvés. Les emails de prospection avec plusieurs liens ressemblent à de la publicité et dispersent l’attention du destinataire.`,
      suggestion: 'Gardez un seul lien clair vers l’action que vous attendez.',
    },
    'unfilled-merge-tags': {
      title: 'Balises de fusion non remplies',
      reason: ({ items }) =>
        `Balises de personnalisation non remplies détectées (${items}). Cela montre qu’un modèle a été envoyé par erreur.`,
      suggestion: 'Configurez des valeurs par défaut dans votre outil d’envoi avant de lancer la campagne.',
    },
    'fake-reply': {
      title: 'Re: ou Fwd: au début de l’objet',
      reason: () =>
        'Faire croire à une conversation ou à une réponse existante pousse les lecteurs à ouvrir le message, ce qui entraîne vite des plaintes pour spam.',
      suggestion: 'N’utilisez Re: ou Fwd: que s’il s’agit d’une vraie réponse à un message reçu.',
    },
    'subject-length': {
      title: 'Lisibilité : objet de plus de 60 caractères',
      reason: () => 'La plupart des messageries mobiles coupent l’objet après 50 à 60 caractères.',
      suggestion: 'Placez votre message principal au début, pour qu’il soit visible avant la coupure sur mobile.',
    },
    'image-heavy': {
      title: 'HTML composé surtout d’images, avec peu de texte',
      reason: () =>
        'Les emails composés surtout d’images, avec peu de texte, ressemblent au spam en images conçu pour échapper aux filtres de texte.',
      suggestion: 'Ajoutez de vrais paragraphes de texte pour garder un bon équilibre entre texte et images.',
    },
    'body-word-count': {
      title: 'Lisibilité : corps de plus de 500 mots',
      reason: ({ countText }) =>
        `${countText} mots trouvés. Les emails de prospection plus longs obtiennent moins de réponses. Sur mobile, les lecteurs survolent souvent le texte ou arrêtent de lire après 150 à 200 mots.`,
      suggestion: 'Supprimez les détails secondaires et visez 50 à 200 mots pour la prospection à froid.',
    },
  },
  noFindings:
    'Aucune expression déclencheuse de spam ni alerte de structure détectée. Votre objet et votre texte respectent les bonnes pratiques.',
}

const nl: SpamToolStrings = {
  numberLocale: 'nl-NL',

  subjectLabel: 'Onderwerpregel',
  subjectCounter: (_n, text) => `${text}/60 tekens`,
  subjectCaution: '(let op leesbaarheid)',
  subjectPlaceholder: 'bijv. Korte vraag over ons voorstel',
  previewLabel: 'Previewtekst',
  optional: '(optioneel)',
  previewPlaceholder: 'bijv. Een korte follow-up op ons gesprek van vorige week',
  bodyLabel: 'Tekst van de e-mail',
  bodyHint: '(platte tekst of gekopieerde HTML)',
  bodyPlaceholder: 'Plak hier je e-mailconcept of de HTML van je nieuwsbrief...',
  clear: 'Wissen',
  button: 'E-mailtekst controleren',

  verdicts: {
    clean: 'Ziet er schoon uit',
    'few-fixes': 'Een paar punten om te verbeteren',
    'needs-work': 'Verbetering nodig',
  },
  summaryHeading: (verdict) => `Samenvatting: ${verdict}`,
  summaryText: {
    clean: () => 'Geen ernstige spamtriggers of structurele problemen gevonden in dit concept.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `${findingsText} punt gevonden dat filters extra kritisch kan maken.`
        : `${findingsText} punten gevonden die filters extra kritisch kunnen maken.`,
    'needs-work': ({ toFixText }) =>
      `Meerdere belangrijke punten (${toFixText} te verbeteren) vragen aandacht voordat je verstuurt.`,
  },
  statWords: (n, text) => `${text} ${n === 1 ? 'woord' : 'woorden'}`,
  statLinks: (n, text) => `${text} ${n === 1 ? 'link' : 'links'}`,
  statFindings: (n, text) => `${text} ${n === 1 ? 'bevinding' : 'bevindingen'}`,

  previewHeading: 'Voorbeeld met gemarkeerde tekst',
  previewHint: 'Beweeg over gemarkeerde woorden om de categorie en een eenvoudiger Engels alternatief te zien.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `probeer “${alternative}” (Engelse suggestie)` : 'kies een eenvoudiger formulering'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Verbeteren waard (${text})`,
      note: 'Punten waardoor filters vaak extra kritisch kijken',
    },
    'worth a look': {
      label: (_n, text) => `Bekijken waard (${text})`,
      note: 'Woorden die van de context afhangen en tips voor leesbaarheid',
    },
  },
  categories: {
    urgency: 'urgentie',
    money: 'geld',
    overpromising: 'te mooie beloftes',
    'shady wording': 'verdachte formulering',
    clickbait: 'clickbait',
  },
  fields: { subject: 'onderwerp', preview: 'preview', body: 'tekst' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Spamwoord: “${phrase}” (${field})`,
    'worth a look': (phrase, field) => `Woordcombinatie om na te kijken: “${phrase}” (${field})`,
  },
  wordReason: (category) =>
    `Gevonden in de lijst “${category}”. Mailfilters geven punten aan opdringerige woorden, vooral in de onderwerpregel.`,
  wordSuggestion: (alternative) => `Vervang het eventueel door “${alternative}” (Engelse suggestie).`,
  wordSuggestionPlain: 'Kies eventueel een eenvoudiger formulering.',
  badgeFormatting: 'Opmaak',
  badgeReadability: 'Leesbaarheid',
  suggestion: (text) => `Suggestie: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Onderwerpregel grotendeels in hoofdletters',
      reason: () =>
        'Onderwerpregels met veel hoofdletters activeren spamfilters en komen bij ontvangers over als schreeuwen.',
      suggestion: 'Schrijf de onderwerpregel gewoon, met alleen een hoofdletter aan het begin en bij namen.',
    },
    'exclamation-marks': {
      title: 'Te veel uitroeptekens',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Meerdere uitroeptekens achter elkaar (!!) worden zwaar bestraft door inhoudsfilters.'
          : `In totaal ${countText} uitroeptekens gevonden. Te veel uitroeptekens komen agressief en spammerig over.`,
      suggestion: 'Gebruik punten voor een rustige, professionele tekst, met hooguit één uitroepteken.',
    },
    'repeated-currency': {
      title: 'Herhaalde valutasymbolen ($$$)',
      reason: () => 'Een reeks dollartekens of andere valutasymbolen is een oud kenmerk van spam.',
      suggestion: 'Noem de prijs duidelijk met één symbool (bijv. “US$ 100” in plaats van “$$$”).',
    },
    'subject-emojis': {
      title: 'Meer dan 2 emoji’s in de onderwerpregel',
      reason: () =>
        'Meerdere emoji’s maken de onderwerpregel minder leesbaar en vergroten de kans op weergaveproblemen in sommige mailprogramma’s.',
      suggestion: 'Gebruik hooguit één passende emoji, of laat ze weg.',
    },
    'link-shorteners': {
      title: 'Verkorte links gevonden',
      reason: ({ items }) =>
        `Verkorte URL’s gevonden (${items}). Linkverkorters verbergen de bestemming en worden streng gefilterd.`,
      suggestion: 'Vervang ze door directe links op je eigen domein.',
    },
    'many-links': {
      title: 'Meer dan 3 links in de tekst',
      reason: ({ countText }) =>
        `${countText} links gevonden. Cold e-mails met meerdere links ogen als reclame en verdelen de aandacht van de ontvanger.`,
      suggestion: 'Kies één duidelijke link naar de actie die je van de lezer vraagt.',
    },
    'unfilled-merge-tags': {
      title: 'Niet-ingevulde merge tags',
      reason: ({ items }) =>
        `Niet-ingevulde placeholders gevonden (${items}). Dat wijst op een sjabloon dat per ongeluk is verstuurd.`,
      suggestion: 'Stel standaardwaarden in je verzendtool in voordat je de campagne start.',
    },
    'fake-reply': {
      title: 'Re: of Fwd: aan het begin van de onderwerpregel',
      reason: () =>
        'Een bestaand gesprek of antwoord nadoen verleidt lezers om de mail te openen, en dat leidt snel tot spamklachten.',
      suggestion: 'Gebruik Re: of Fwd: alleen als dit echt een antwoord is op een ontvangen bericht.',
    },
    'subject-length': {
      title: 'Leesbaarheid: onderwerpregel langer dan 60 tekens',
      reason: () => 'De meeste mobiele mailprogramma’s korten onderwerpregels af na 50 tot 60 tekens.',
      suggestion: 'Zet je belangrijkste boodschap vooraan, zodat die zichtbaar is voordat een mobiel scherm de regel afkapt.',
    },
    'image-heavy': {
      title: 'HTML bestaat vooral uit afbeeldingen met weinig tekst',
      reason: () =>
        'E-mails die vooral uit afbeeldingen met weinig tekst bestaan, lijken op spam met afbeeldingen die tekstfilters wil omzeilen.',
      suggestion: 'Voeg echte alinea’s tekst toe voor een gezonde verhouding tussen tekst en afbeeldingen.',
    },
    'body-word-count': {
      title: 'Leesbaarheid: tekst langer dan 500 woorden',
      reason: ({ countText }) =>
        `${countText} woorden gevonden. Langere cold e-mails krijgen minder antwoorden. Mobiele lezers scannen vaak of haken af na 150 tot 200 woorden.`,
      suggestion: 'Schrap bijzaken en mik op 50 tot 200 woorden voor cold outreach.',
    },
  },
  noFindings:
    'Geen spamwoorden of structurele waarschuwingen gevonden. Je onderwerpregel en tekst volgen de gangbare regels.',
}

/** Polish plural form: 1 słowo, 2 słowa, 5 słów. */
function plSpamForm(n: number, one: string, few: string, many: string): string {
  if (n === 1) return one
  const d = n % 10
  const t = n % 100
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many
}

const pl: SpamToolStrings = {
  numberLocale: 'pl-PL',

  subjectLabel: 'Temat',
  subjectCounter: (_n, text) => `${text}/60 znaków`,
  subjectCaution: '(uwaga na czytelność)',
  subjectPlaceholder: 'np. Krótkie pytanie o naszą ofertę',
  previewLabel: 'Tekst podglądu',
  optional: '(opcjonalnie)',
  previewPlaceholder: 'np. Krótka kontynuacja naszej rozmowy z zeszłego tygodnia',
  bodyLabel: 'Treść e-maila',
  bodyHint: '(zwykły tekst lub skopiowany HTML)',
  bodyPlaceholder: 'Wklej tutaj wersję roboczą e-maila lub kod HTML newslettera...',
  clear: 'Wyczyść',
  button: 'Sprawdź treść e-maila',

  verdicts: {
    clean: 'Wygląda dobrze',
    'few-fixes': 'Kilka rzeczy do poprawy',
    'needs-work': 'Wymaga poprawek',
  },
  summaryHeading: (verdict) => `Podsumowanie: ${verdict}`,
  summaryText: {
    clean: () => 'W tej wersji nie wykryto poważnych wyzwalaczy spamu ani problemów ze strukturą.',
    'few-fixes': ({ findings, findingsText }) =>
      findings === 1
        ? `Znaleziono ${findingsText} element, który może zwiększyć czujność filtrów.`
        : `Znaleziono ${findingsText} ${plSpamForm(findings, 'element', 'elementy', 'elementów')}, które mogą zwiększyć czujność filtrów.`,
    'needs-work': ({ toFixText }) =>
      `Kilka ważnych elementów (do poprawy: ${toFixText}) wymaga uwagi przed wysyłką.`,
  },
  statWords: (n, text) => `${text} ${plSpamForm(n, 'słowo', 'słowa', 'słów')}`,
  statLinks: (n, text) => `${text} ${plSpamForm(n, 'link', 'linki', 'linków')}`,
  statFindings: (n, text) => `${text} ${plSpamForm(n, 'uwaga', 'uwagi', 'uwag')}`,

  previewHeading: 'Podgląd treści z podświetleniami',
  previewHint: 'Najedź na podświetlone słowa, aby zobaczyć kategorię i prostsze sformułowanie po angielsku.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `spróbuj „${alternative}” (sugestia po angielsku)` : 'rozważ prostsze sformułowanie'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Warto poprawić (${text})`,
      note: 'Elementy, które często zwiększają czujność filtrów',
    },
    'worth a look': {
      label: (_n, text) => `Warto sprawdzić (${text})`,
      note: 'Słowa zależne od kontekstu i wskazówki dotyczące czytelności',
    },
  },
  categories: {
    urgency: 'pilność',
    money: 'pieniądze',
    overpromising: 'przesadne obietnice',
    'shady wording': 'podejrzane sformułowania',
    clickbait: 'clickbait',
  },
  fields: { subject: 'temat', preview: 'podgląd', body: 'treść' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Słowo spamowe: „${phrase}” (${field})`,
    'worth a look': (phrase, field) => `Fraza do sprawdzenia: „${phrase}” (${field})`,
  },
  wordReason: (category) =>
    `Fraza z listy „${category}”. Filtry poczty punktują nachalne słowa, zwłaszcza w temacie.`,
  wordSuggestion: (alternative) => `Rozważ zamianę na „${alternative}” (sugestia po angielsku).`,
  wordSuggestionPlain: 'Rozważ prostsze sformułowanie.',
  badgeFormatting: 'Formatowanie',
  badgeReadability: 'Czytelność',
  suggestion: (text) => `Sugestia: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Temat głównie wielkimi literami',
      reason: () =>
        'Tematy z dużą liczbą wielkich liter uruchamiają filtry antyspamowe, a odbiorcy odbierają je jak krzyk.',
      suggestion: 'Pisz temat zwykłymi literami, z wielką literą tylko na początku i w nazwach własnych.',
    },
    'exclamation-marks': {
      title: 'Za dużo wykrzykników',
      reason: ({ consecutive, count, countText }) =>
        consecutive
          ? 'Filtry treści mocno karzą kilka wykrzykników z rzędu (!!).'
          : `Łącznie znaleziono ${countText} ${plSpamForm(count, 'wykrzyknik', 'wykrzykniki', 'wykrzykników')}. Nadmiar wykrzykników wygląda agresywnie i przypomina spam.`,
      suggestion: 'Używaj kropek, aby tekst brzmiał spokojnie i profesjonalnie. Zostaw najwyżej jeden wykrzyknik.',
    },
    'repeated-currency': {
      title: 'Powtórzone symbole walut ($$$)',
      reason: () => 'Wiele znaków dolara lub innych symboli walut obok siebie to stary znak spamu.',
      suggestion: 'Podaj cenę jasno, z jednym symbolem (np. „100 USD” zamiast „$$$”).',
    },
    'subject-emojis': {
      title: 'Więcej niż 2 emoji w temacie',
      reason: () =>
        'Kilka emoji obniża czytelność tematu i zwiększa ryzyko problemów z wyświetlaniem w niektórych programach pocztowych.',
      suggestion: 'Użyj najwyżej jednego pasującego emoji albo usuń je.',
    },
    'link-shorteners': {
      title: 'Wykryto skrócone linki',
      reason: ({ items }) =>
        `Znaleziono skrócone adresy URL (${items}). Skracacze ukrywają, dokąd prowadzi link, i są mocno filtrowane.`,
      suggestion: 'Zastąp je bezpośrednimi linkami we własnej domenie.',
    },
    'many-links': {
      title: 'Więcej niż 3 linki w treści',
      reason: ({ count, countText }) =>
        `Znaleziono ${countText} ${plSpamForm(count, 'link', 'linki', 'linków')}. Cold e-maile z wieloma linkami wyglądają reklamowo i rozpraszają uwagę odbiorcy.`,
      suggestion: 'Zostaw jeden wyraźny link do działania, którego oczekujesz od odbiorcy.',
    },
    'unfilled-merge-tags': {
      title: 'Niewypełnione znaczniki personalizacji',
      reason: ({ items }) =>
        `Wykryto niewypełnione znaczniki (${items}). To znak, że szablon został wysłany przez pomyłkę.`,
      suggestion: 'Przed wysyłką ustaw wartości domyślne w swoim narzędziu do wysyłki.',
    },
    'fake-reply': {
      title: 'Re: lub Fwd: na początku tematu',
      reason: () =>
        'Udawanie istniejącego wątku lub odpowiedzi skłania czytelników do otwarcia wiadomości, ale szybko prowadzi do zgłoszeń spamu.',
      suggestion: 'Używaj Re: lub Fwd: tylko wtedy, gdy to prawdziwa odpowiedź na otrzymaną wiadomość.',
    },
    'subject-length': {
      title: 'Czytelność: temat dłuższy niż 60 znaków',
      reason: () => 'Większość mobilnych programów pocztowych ucina temat po 50 do 60 znakach.',
      suggestion: 'Umieść najważniejszą informację na początku, aby była widoczna, zanim ekran telefonu utnie temat.',
    },
    'image-heavy': {
      title: 'HTML to głównie obrazy z małą ilością tekstu',
      reason: () =>
        'E-maile złożone głównie z obrazów, z małą ilością tekstu, przypominają spam obrazkowy, który ma omijać filtry tekstu.',
      suggestion: 'Dodaj akapity z konkretną treścią, aby zachować dobrą proporcję tekstu do obrazów.',
    },
    'body-word-count': {
      title: 'Czytelność: treść dłuższa niż 500 słów',
      reason: ({ count, countText }) =>
        `Znaleziono ${countText} ${plSpamForm(count, 'słowo', 'słowa', 'słów')}. Dłuższe cold e-maile dostają mniej odpowiedzi. Czytelnicy na telefonach często przeglądają tekst pobieżnie albo przerywają czytanie po 150 do 200 słowach.`,
      suggestion: 'Usuń poboczne szczegóły i celuj w 50 do 200 słów w cold mailingu.',
    },
  },
  noFindings:
    'Nie wykryto fraz spamowych ani ostrzeżeń dotyczących struktury. Temat i treść spełniają dobre praktyki.',
}

const id: SpamToolStrings = {
  numberLocale: 'id-ID',

  subjectLabel: 'Subjek Email',
  subjectCounter: (_n, text) => `${text}/60 karakter`,
  subjectCaution: '(perhatikan keterbacaan)',
  subjectPlaceholder: 'mis. Pertanyaan singkat tentang proposal kami',
  previewLabel: 'Teks Pratinjau',
  optional: '(opsional)',
  previewPlaceholder: 'mis. Tindak lanjut singkat dari obrolan kita minggu lalu',
  bodyLabel: 'Isi Email',
  bodyHint: '(teks biasa atau HTML yang disalin)',
  bodyPlaceholder: 'Tempel draf email atau HTML newsletter Anda di sini...',
  clear: 'Hapus',
  button: 'Cek Isi Email',

  verdicts: {
    clean: 'Terlihat bersih',
    'few-fixes': 'Ada beberapa hal yang perlu diperbaiki',
    'needs-work': 'Perlu banyak perbaikan',
  },
  summaryHeading: (verdict) => `Ringkasan: ${verdict}`,
  summaryText: {
    clean: () => 'Tidak ada pemicu spam penting atau masalah struktur yang terdeteksi di draf ini.',
    'few-fixes': ({ findingsText }) =>
      `Ditemukan ${findingsText} hal yang bisa membuat filter memeriksa email ini lebih ketat.`,
    'needs-work': ({ toFixText }) =>
      `Ada beberapa hal prioritas tinggi (${toFixText} perlu diperbaiki) yang harus ditangani sebelum mengirim.`,
  },
  statWords: (_n, text) => `${text} kata`,
  statLinks: (_n, text) => `${text} link`,
  statFindings: (_n, text) => `${text} temuan`,

  previewHeading: 'Pratinjau Teks yang Ditandai',
  previewHint: 'Arahkan kursor ke kata yang ditandai untuk melihat kategori dan saran alternatif yang lebih sederhana dalam bahasa Inggris.',
  markTitle: (category, alternative) =>
    `${category}: ${alternative ? `coba "${alternative}" (saran dalam bahasa Inggris)` : 'pertimbangkan kata yang lebih sederhana'}`,

  severities: {
    'worth fixing': {
      label: (_n, text) => `Perlu diperbaiki (${text})`,
      note: 'Hal yang sering membuat filter memeriksa lebih ketat',
    },
    'worth a look': {
      label: (_n, text) => `Perlu dicek (${text})`,
      note: 'Kata yang tergantung konteks dan saran keterbacaan',
    },
  },
  categories: {
    urgency: 'urgensi',
    money: 'uang',
    overpromising: 'janji berlebihan',
    'shady wording': 'kata mencurigakan',
    clickbait: 'clickbait',
  },
  fields: { subject: 'subjek', preview: 'pratinjau', body: 'isi' },
  wordTitle: {
    'worth fixing': (phrase, field) => `Kata spam: "${phrase}" (${field})`,
    'worth a look': (phrase, field) => `Frasa untuk dicek: "${phrase}" (${field})`,
  },
  wordReason: (category) =>
    `Ada di daftar "${category}". Filter email memberi skor pada kata-kata yang memaksa, terutama di subjek.`,
  wordSuggestion: (alternative) => `Pertimbangkan untuk menggantinya dengan "${alternative}" (saran dalam bahasa Inggris).`,
  wordSuggestionPlain: 'Pertimbangkan kata yang lebih sederhana.',
  badgeFormatting: 'Format',
  badgeReadability: 'Keterbacaan',
  suggestion: (text) => `Saran: ${text}`,
  findings: {
    'subject-caps': {
      title: 'Subjek sebagian besar huruf kapital',
      reason: () =>
        'Subjek dengan terlalu banyak huruf kapital memicu filter spam dan terasa seperti berteriak bagi penerima.',
      suggestion: 'Gunakan huruf kapital biasa, hanya di awal kalimat dan pada nama.',
    },
    'exclamation-marks': {
      title: 'Tanda seru berlebihan',
      reason: ({ consecutive, countText }) =>
        consecutive
          ? 'Beberapa tanda seru berturut-turut (!!) diberi penalti berat oleh filter konten.'
          : `Ditemukan total ${countText} tanda seru. Terlalu banyak tanda seru terlihat agresif dan seperti spam.`,
      suggestion: 'Gunakan titik agar teks terdengar tenang dan profesional, dengan paling banyak satu tanda seru.',
    },
    'repeated-currency': {
      title: 'Simbol mata uang berulang ($$$)',
      reason: () => 'Menumpuk tanda dolar atau simbol mata uang adalah ciri spam lama.',
      suggestion: 'Tulis harga dengan jelas memakai satu simbol (misalnya "US$100", bukan "$$$").',
    },
    'subject-emojis': {
      title: 'Lebih dari 2 emoji di subjek',
      reason: () =>
        'Beberapa emoji membuat subjek sulit dibaca dan menambah risiko masalah tampilan di beberapa aplikasi email.',
      suggestion: 'Pakai paling banyak satu emoji yang relevan, atau hapus semuanya.',
    },
    'link-shorteners': {
      title: 'Link pendek terdeteksi',
      reason: ({ items }) =>
        `Ditemukan URL pendek (${items}). Layanan pemendek link menyembunyikan tujuan dan sangat sering difilter.`,
      suggestion: 'Ganti dengan link langsung di domain Anda sendiri.',
    },
    'many-links': {
      title: 'Lebih dari 3 link di isi email',
      reason: ({ countText }) =>
        `Ditemukan ${countText} link. Cold email dengan banyak link terlihat seperti promosi dan memecah perhatian penerima.`,
      suggestion: 'Pakai satu link yang jelas untuk tindakan yang Anda harapkan dari penerima.',
    },
    'unfilled-merge-tags': {
      title: 'Merge tag tidak terisi',
      reason: ({ items }) =>
        `Terdeteksi tag placeholder yang tidak terisi (${items}). Ini menandakan template terkirim secara tidak sengaja.`,
      suggestion: 'Pastikan nilai cadangan sudah diatur di alat pengiriman Anda sebelum mengirim.',
    },
    'fake-reply': {
      title: 'Re: atau Fwd: di awal subjek',
      reason: () =>
        'Berpura-pura melanjutkan percakapan atau membalas pesan membuat pembaca tertipu untuk membuka email, dan ini cepat memicu keluhan spam.',
      suggestion: 'Gunakan Re: atau Fwd: hanya jika ini benar-benar balasan untuk pesan yang Anda terima.',
    },
    'subject-length': {
      title: 'Keterbacaan: subjek lebih dari 60 karakter',
      reason: () => 'Sebagian besar aplikasi email di ponsel memotong subjek setelah 50 sampai 60 karakter.',
      suggestion: 'Letakkan pesan utama di awal agar terlihat sebelum terpotong di layar ponsel.',
    },
    'image-heavy': {
      title: 'HTML sebagian besar berisi gambar dengan sedikit teks',
      reason: () =>
        'Email yang sebagian besar berisi gambar dengan sedikit teks mirip spam berbasis gambar yang dibuat untuk menghindari filter teks.',
      suggestion: 'Tambahkan beberapa paragraf teks yang berisi agar perbandingan teks dan gambar tetap seimbang.',
    },
    'body-word-count': {
      title: 'Keterbacaan: isi lebih dari 500 kata',
      reason: ({ countText }) =>
        `Ditemukan ${countText} kata. Cold email yang lebih panjang mendapat lebih sedikit balasan. Pembaca di ponsel sering hanya membaca sekilas atau berhenti setelah 150 sampai 200 kata.`,
      suggestion: 'Buang detail tambahan dan targetkan 50 sampai 200 kata untuk cold outreach.',
    },
  },
  noFindings:
    'Tidak ada frasa pemicu spam atau peringatan struktur yang terdeteksi. Subjek dan isi email Anda mengikuti praktik yang baik.',
}

export const SPAM_TOOL_STRINGS: Partial<Record<Locale, SpamToolStrings>> & { en: SpamToolStrings } = {
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

export function spamToolStrings(locale: Locale): SpamToolStrings {
  return SPAM_TOOL_STRINGS[locale] ?? en
}

/** A count written for the page's language. */
export function spamNumber(t: SpamToolStrings, n: number): string {
  if (!t.numberLocale) return String(n)
  try {
    return n.toLocaleString(t.numberLocale)
  } catch {
    return String(n)
  }
}

/** Calls a counted label with both forms of the number. */
export function spamCount(t: SpamToolStrings, label: SpamCounted, n: number): string {
  return label(n, spamNumber(t, n))
}

/** The summary box: the heading and the sentence under it. */
export function spamSummary(t: SpamToolStrings, r: SpamCheckResult): { heading: string; text: string } {
  const toFix = r.worthFixing.length
  const findings = r.findings.length
  return {
    heading: t.summaryHeading(t.verdicts[r.verdict]),
    text: t.summaryText[r.verdict]({
      toFix,
      toFixText: spamNumber(t, toFix),
      findings,
      findingsText: spamNumber(t, findings),
    }),
  }
}

/** The tooltip on a highlighted phrase in the body preview. */
export function spamMarkTitle(t: SpamToolStrings, m: SpamMatch): string {
  return t.markTitle(t.categories[m.category], m.alternative)
}

/** Everything a finding shows in its list: heading, badge, reason and the wrapped suggestion. */
export function spamFindingView(
  t: SpamToolStrings,
  f: Finding,
): { title: string; badge: string; reason: string; suggestion: string } {
  if (f.type === 'word') {
    const category = t.categories[f.category]
    return {
      title: t.wordTitle[f.severity](f.phrase, t.fields[f.field]),
      badge: category,
      reason: t.wordReason(category),
      suggestion: t.suggestion(f.alternative ? t.wordSuggestion(f.alternative) : t.wordSuggestionPlain),
    }
  }
  const text = t.findings[f.id]
  const count = f.params?.count ?? 0
  return {
    title: text.title,
    // Readability notes are only ever listed under "worth a look".
    badge: f.severity === 'worth a look' && f.categoryLabel === 'readability' ? t.badgeReadability : t.badgeFormatting,
    reason: text.reason({
      count,
      countText: spamNumber(t, count),
      consecutive: f.params?.consecutive ?? false,
      items: (f.params?.items ?? []).join(', '),
    }),
    suggestion: t.suggestion(text.suggestion),
  }
}
