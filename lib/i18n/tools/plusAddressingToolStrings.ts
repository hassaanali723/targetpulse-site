// Labels and messages of the Gmail plus addressing tool
// (components/tools/PlusAddressing/PlusAddressingTool.tsx), one object per
// language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/plusAddressingStrings.ts.
//
// English is the original wording moved here unchanged. lib/tools/plusAddressingCore.ts
// returns keys only (input error codes, skip reasons, provider names); the text
// for each key is here, for every language including English.
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (a bold word, a code span). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type { PlusInputCode, PlusSkipReason } from '@/lib/tools/plusAddressingCore'

export interface PlusToolStrings {
  tabsAria: string
  /** Tab names. The `More` part is hidden on phones, so start it with a space. */
  tabCreate: string
  tabCreateMore: string
  tabClean: string
  tabCleanMore: string

  addressLabel: string
  addressPlaceholder: string
  tagsLabel: string
  tagsPlaceholder: string
  ideasLabel: string
  /** Clickable tag ideas. Letters, numbers, dots, dashes and underscores only, or the tool skips them. */
  tagIdeas: string[]

  /** Input errors by core code, plus a fallback for anything unexpected. */
  inputErrors: Record<PlusInputCode, string>
  inputFallback: string
  /** Skip reasons by core code. */
  skipReasons: Record<PlusSkipReason, string>
  /** {tag} is the tag as typed, {reason} one of skipReasons. */
  skipped: string

  /** Notes by core provider name (PROVIDER_RULES in the core). */
  providerNotes: Record<string, string>
  /** For a domain with no provider rule. {domain} is the domain. */
  unknownProvider: string

  addressesHeading: (n: number) => string
  copy: string
  copied: string
  copyAll: string
  noTags: string
  /** Shown for Gmail addresses. {to} is the bold field name (toField), {query} the search in a code span. */
  gmailFilter: string
  toField: string

  listLabel: string
  listPlaceholder: string
  listHelp: string
  stripAllLabel: string
  stripAllHelp: string

  statFound: string
  statUnique: string
  statGroups: string
  statSkipped: string
  groupsHeading: string
  /** Prefixes of each member of a group. Keep the trailing space. */
  kept: string
  merged: string
  noDuplicates: string
  /** {n} is the formatted number of addresses. */
  copyUnique: (n: string) => string
  download: string
  downloadFile: string
  keptNote: string

  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const en: PlusToolStrings = {
  tabsAria: 'Plus addressing tool mode',
  tabCreate: 'Create',
  tabCreateMore: ' plus addresses',
  tabClean: 'Clean',
  tabCleanMore: ' a list',

  addressLabel: 'Your email address',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Tags, separated by commas',
  tagsPlaceholder: 'newsletters, shopping',
  ideasLabel: 'Ideas:',
  tagIdeas: ['newsletters', 'shopping', 'banking', 'jobs', 'travel'],

  inputErrors: {
    empty: 'Enter your email address first.',
    invalid: 'That doesn’t look like an email address. Enter something like jane@gmail.com.',
  },
  inputFallback: 'Check the address.',
  skipReasons: {
    chars: 'Use letters, numbers, dots, dashes or underscores only.',
    'too-long': 'This tag makes the address too long (64 characters before the @ at most).',
  },
  skipped: 'Skipped “{tag}”: {reason}',

  providerNotes: {
    Gmail: 'Gmail delivers every +tag to your inbox and ignores dots in the username. gmail.com and googlemail.com are the same inbox.',
    'Outlook.com': 'Outlook.com accepts +tags. Dots are part of the address, so leave them as they are.',
    'iCloud Mail': 'Independent tests show iCloud delivers +tags, but Apple doesn’t document it. Send yourself a test first.',
    'Proton Mail': 'Proton supports +tags on every plan. When you reply, Proton uses the tagged address as the sender.',
    Fastmail: 'Fastmail supports +tags. If the tag matches a folder name, the mail goes into that folder.',
    'Yandex Mail': 'Yandex supports +tags, such as login+word@yandex.ru.',
    'Yahoo Mail':
      'Yahoo documents disposable addresses with a dash instead (nickname-keyword@yahoo.com), and the nickname is not your account name. Its support for + is not confirmed.',
  },
  unknownProvider:
    '{domain} isn’t a provider we have rules for. If it runs on Google Workspace or Microsoft 365, plus addresses work there too. Otherwise send yourself a test email before you use one.',

  addressesHeading: (n) => `Your plus addresses (${n})`,
  copy: 'Copy',
  copied: 'Copied',
  copyAll: 'Copy all',
  noTags: 'Add one or more tags to build your addresses.',
  gmailFilter: 'To sort them in Gmail, create a filter with the plus address in the {to} field, or search for {query}.',
  toField: 'To',

  listLabel: 'Paste your list',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'One address per line, or a column copied from a spreadsheet. Names and other text are ignored.',
  stripAllLabel: 'Also treat + as a tag on company domains',
  stripAllHelp:
    'Fine for lists of Google Workspace and Microsoft 365 users. Leave it off otherwise, because on some mail servers the + is part of a real address.',

  statFound: 'Addresses found',
  statUnique: 'After merging',
  statGroups: 'Duplicate groups',
  statSkipped: 'Lines skipped',
  groupsHeading: 'These addresses reach the same inbox',
  kept: 'kept: ',
  merged: 'merged: ',
  noDuplicates: 'No two addresses in this list reach the same inbox.',
  copyUnique: (n) => `Copy ${n} addresses`,
  download: 'Download as .txt',
  downloadFile: 'emails-without-duplicates.txt',
  keptNote: 'The first address of each group is kept exactly as written, so the person’s filters keep working.',

  ctaTitle: 'No duplicates doesn’t mean no bounces',
  ctaText: 'Check that each address still exists before you send to the cleaned list.',
  ctaButton: 'Verify the list',
}

const ja: PlusToolStrings = {
  tabsAria: 'プラスアドレスツールのモード',
  tabCreate: 'アドレスを作成',
  tabCreateMore: '',
  tabClean: 'リストを整理',
  tabCleanMore: '',

  addressLabel: 'メールアドレス',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'タグ（カンマ区切り）',
  tagsPlaceholder: 'newsletters, shopping',
  ideasLabel: '例：',
  tagIdeas: ['newsletters', 'shopping', 'banking', 'jobs', 'travel'],

  inputErrors: {
    empty: '先にメールアドレスを入力してください。',
    invalid: 'メールアドレスの形式ではないようです。jane@gmail.comのように入力してください。',
  },
  inputFallback: 'アドレスを確認してください。',
  skipReasons: {
    chars: '半角の英字、数字、ドット、ハイフン、アンダースコアだけを使ってください。',
    'too-long': 'このタグを付けるとアドレスが長すぎます（@より前は最大64文字です）。',
  },
  skipped: '「{tag}」をスキップしました：{reason}',

  providerNotes: {
    Gmail: 'Gmailは、+タグ付きのどのアドレス宛てのメールも受信トレイに配信し、ユーザー名のドットを無視します。gmail.comとgooglemail.comは同じ受信トレイです。',
    'Outlook.com': 'Outlook.comは+タグを受け付けます。ドットはアドレスの一部なので、そのままにしてください。',
    'iCloud Mail': '第三者のテストでは、iCloudは+タグ付きのメールを配信します。ただし、Appleは公式に説明していません。先に自分宛てにテストしてください。',
    'Proton Mail': 'Protonは、すべてのプランで+タグに対応しています。返信するときは、タグ付きのアドレスが差出人になります。',
    Fastmail: 'Fastmailは+タグに対応しています。タグがフォルダ名と同じ場合、メールはそのフォルダに入ります。',
    'Yandex Mail': 'Yandexは、login+word@yandex.ruのような+タグに対応しています。',
    'Yahoo Mail':
      'Yahooが説明しているのは、代わりにハイフンを使う使い捨てアドレスです（nickname-keyword@yahoo.com）。このニックネームはアカウント名ではありません。+への対応は確認されていません。',
  },
  unknownProvider:
    '{domain}は、ルールを用意しているメールサービスではありません。Google WorkspaceかMicrosoft 365で運用されているドメインなら、プラスアドレスも使えます。それ以外の場合は、使う前に自分宛てにテストメールを送ってください。',

  addressesHeading: (n) => `プラスアドレス（${n.toLocaleString('ja-JP')}件）`,
  copy: 'コピー',
  copied: 'コピーしました',
  copyAll: 'すべてコピー',
  noTags: 'アドレスを作るには、タグを1つ以上追加してください。',
  gmailFilter: 'Gmailで振り分けるには、{to}欄にプラスアドレスを入れたフィルタを作成するか、{query}で検索します。',
  toField: 'To',

  listLabel: 'リストを貼り付け',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: '1行に1件のアドレスを入力するか、スプレッドシートからコピーした列を貼り付けます。名前などのテキストは無視されます。',
  stripAllLabel: '独自ドメインでも+をタグとして扱う',
  stripAllHelp:
    'Google WorkspaceやMicrosoft 365のユーザーのリストなら問題ありません。それ以外ではオフのままにしてください。メールサーバーによっては、+が実際のアドレスの一部だからです。',

  statFound: '見つかったアドレス',
  statUnique: 'まとめた後',
  statGroups: '重複グループ',
  statSkipped: 'スキップした行',
  groupsHeading: '次のアドレスは同じ受信トレイに届きます',
  kept: '残す：',
  merged: 'まとめる：',
  noDuplicates: 'このリストには、同じ受信トレイに届くアドレスはありません。',
  copyUnique: (n) => `${n}件のアドレスをコピー`,
  download: '.txtでダウンロード',
  downloadFile: 'emails-without-duplicates.txt',
  keptNote: '各グループの最初のアドレスは入力どおりに残します。そのため、相手のフィルタはそのまま動きます。',

  ctaTitle: '重複がなくても、バウンスがないとは限りません',
  ctaText: '整理したリストに送る前に、各アドレスが今も存在するかを確認してください。',
  ctaButton: 'リストを検証する',
}

const ko: PlusToolStrings = {
  tabsAria: '플러스 주소 도구 모드',
  tabCreate: '주소 만들기',
  tabCreateMore: '',
  tabClean: '리스트 정리',
  tabCleanMore: '',

  addressLabel: '이메일 주소',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: '태그(쉼표로 구분)',
  tagsPlaceholder: 'newsletters, shopping',
  ideasLabel: '예시:',
  tagIdeas: ['newsletters', 'shopping', 'banking', 'jobs', 'travel'],

  inputErrors: {
    empty: '먼저 이메일 주소를 입력하십시오.',
    invalid: '이메일 주소 형식이 아닌 것 같습니다. jane@gmail.com처럼 입력하십시오.',
  },
  inputFallback: '주소를 확인하십시오.',
  skipReasons: {
    chars: '영문자, 숫자, 점, 하이픈, 밑줄만 사용하십시오.',
    'too-long': '이 태그를 붙이면 주소가 너무 깁니다(@ 앞부분은 최대 64자).',
  },
  skipped: '“{tag}” 건너뜀: {reason}',

  providerNotes: {
    Gmail: 'Gmail은 모든 +태그 주소로 온 메일을 받은편지함으로 전달하고, 사용자 이름의 점을 무시합니다. gmail.com과 googlemail.com은 같은 받은편지함입니다.',
    'Outlook.com': 'Outlook.com은 +태그를 받습니다. 점은 주소의 일부이므로 그대로 두십시오.',
    'iCloud Mail': '독립적인 테스트에 따르면 iCloud는 +태그 메일을 전달하지만, Apple은 이를 공식 문서로 설명하지 않습니다. 먼저 자신에게 테스트 메일을 보내 보십시오.',
    'Proton Mail': 'Proton은 모든 요금제에서 +태그를 지원합니다. 답장할 때는 태그가 붙은 주소가 발신자로 사용됩니다.',
    Fastmail: 'Fastmail은 +태그를 지원합니다. 태그가 폴더 이름과 같으면 메일이 그 폴더로 들어갑니다.',
    'Yandex Mail': 'Yandex는 login+word@yandex.ru 같은 +태그를 지원합니다.',
    'Yahoo Mail':
      'Yahoo가 설명하는 것은 대신 하이픈을 쓰는 일회용 주소이며(nickname-keyword@yahoo.com), 이 닉네임은 계정 이름이 아닙니다. +의 지원 여부는 확인되지 않았습니다.',
  },
  unknownProvider:
    '{domain} 도메인에 대한 메일 서비스 규칙은 없습니다. Google Workspace나 Microsoft 365를 쓰는 도메인이라면 플러스 주소도 작동합니다. 그렇지 않다면 사용하기 전에 자신에게 테스트 메일을 보내 보십시오.',

  addressesHeading: (n) => `플러스 주소(${n.toLocaleString('ko-KR')}개)`,
  copy: '복사',
  copied: '복사됨',
  copyAll: '모두 복사',
  noTags: '주소를 만들려면 태그를 하나 이상 추가하십시오.',
  gmailFilter: 'Gmail에서 분류하려면 {to} 입력란에 플러스 주소를 넣은 필터를 만들거나, 검색창에 {query} 검색어를 입력하십시오.',
  toField: '받는사람',

  listLabel: '리스트 붙여 넣기',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: '한 줄에 주소를 하나씩 입력하거나, 스프레드시트에서 복사한 열을 붙여 넣으십시오. 이름 등 다른 텍스트는 무시됩니다.',
  stripAllLabel: '회사 도메인에서도 +를 태그로 처리',
  stripAllHelp:
    'Google Workspace와 Microsoft 365 사용자 리스트라면 문제없습니다. 그 밖의 경우에는 끈 상태로 두십시오. 일부 메일 서버에서는 +가 실제 주소의 일부이기 때문입니다.',

  statFound: '찾은 주소',
  statUnique: '합친 후',
  statGroups: '중복 그룹',
  statSkipped: '건너뛴 줄',
  groupsHeading: '이 주소들은 같은 받은편지함에 도착합니다',
  kept: '유지: ',
  merged: '합침: ',
  noDuplicates: '이 리스트에는 같은 받은편지함에 도착하는 주소가 없습니다.',
  copyUnique: (n) => `주소 ${n}개 복사`,
  download: '.txt로 다운로드',
  downloadFile: 'emails-without-duplicates.txt',
  keptNote: '각 그룹의 첫 번째 주소는 입력한 그대로 유지하므로 상대의 필터가 계속 작동합니다.',

  ctaTitle: '중복이 없다고 반송이 없는 것은 아닙니다',
  ctaText: '정리한 리스트로 보내기 전에 각 주소가 아직 존재하는지 확인하십시오.',
  ctaButton: '리스트 검증하기',
}

const tr: PlusToolStrings = {
  tabsAria: 'Artı adresleme aracı modu',
  tabCreate: 'Adres oluşturma',
  tabCreateMore: '',
  tabClean: 'Liste temizleme',
  tabCleanMore: '',

  addressLabel: 'E-posta adresiniz',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Virgülle ayrılmış etiketler',
  tagsPlaceholder: 'haberler, kampanya',
  ideasLabel: 'Öneriler:',
  tagIdeas: ['haberler', 'kampanya', 'banka', 'kariyer', 'seyahat'],

  inputErrors: {
    empty: 'Önce e-posta adresinizi girin.',
    invalid: 'Bu bir e-posta adresine benzemiyor. jane@gmail.com gibi bir adres girin.',
  },
  inputFallback: 'Adresi kontrol edin.',
  skipReasons: {
    chars: 'Yalnızca a-z harfleri, rakamlar, nokta, tire veya alt çizgi kullanın.',
    'too-long': 'Bu etiket adresi çok uzun yapıyor (@ işaretinden önce en fazla 64 karakter).',
  },
  skipped: '“{tag}” atlandı: {reason}',

  providerNotes: {
    Gmail: 'Gmail her +etiketi gelen kutunuza teslim eder ve kullanıcı adındaki noktaları yok sayar. gmail.com ve googlemail.com aynı gelen kutusudur.',
    'Outlook.com': 'Outlook.com +etiketleri kabul eder. Noktalar adresin parçasıdır, bu yüzden onları olduğu gibi bırakın.',
    'iCloud Mail': "Bağımsız testler iCloud'un +etiketleri teslim ettiğini gösteriyor, ancak Apple bunu belgelemez. Önce kendinize bir test e-postası gönderin.",
    'Proton Mail': 'Proton her planda +etiketleri destekler. Yanıt verdiğinizde Proton, etiketli adresi gönderen olarak kullanır.',
    Fastmail: 'Fastmail +etiketleri destekler. Etiket bir klasör adıyla eşleşirse e-posta o klasöre gider.',
    'Yandex Mail': 'Yandex, login+word@yandex.ru gibi +etiketleri destekler.',
    'Yahoo Mail':
      'Yahoo bunun yerine tire kullanan tek kullanımlık adresleri belgeler (nickname-keyword@yahoo.com) ve buradaki takma ad hesap adınız değildir. + desteği doğrulanmadı.',
  },
  unknownProvider:
    '{domain} için hazır bir sağlayıcı kuralımız yok. Alan adı Google Workspace veya Microsoft 365 üzerinde çalışıyorsa artı adresler orada da çalışır. Aksi halde kullanmadan önce kendinize bir test e-postası gönderin.',

  addressesHeading: (n) => `Artı adresleriniz (${n.toLocaleString('tr-TR')})`,
  copy: 'Kopyala',
  copied: 'Kopyalandı',
  copyAll: 'Tümünü kopyalayın',
  noTags: 'Adreslerinizi oluşturmak için bir veya daha fazla etiket ekleyin.',
  gmailFilter: "Bunları Gmail'de ayırmak için {to} alanında artı adresin yer aldığı bir filtre oluşturun veya {query} araması yapın.",
  toField: 'Kime',

  listLabel: 'Listenizi yapıştırın',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'Her satıra bir adres yazın veya bir tablodan kopyalanmış bir sütunu yapıştırın. Adlar ve diğer metinler yok sayılır.',
  stripAllLabel: 'Şirket alan adlarında da + işareti etiket olarak değerlendirilsin',
  stripAllHelp:
    'Google Workspace ve Microsoft 365 kullanıcılarından oluşan listeler için uygundur. Diğer durumlarda kapalı bırakın, çünkü bazı e-posta sunucularında + işareti gerçek bir adresin parçasıdır.',

  statFound: 'Bulunan adresler',
  statUnique: 'Birleştirmeden sonra',
  statGroups: 'Yinelenen gruplar',
  statSkipped: 'Atlanan satırlar',
  groupsHeading: 'Bu adresler aynı gelen kutusuna ulaşır',
  kept: 'korundu: ',
  merged: 'birleştirildi: ',
  noDuplicates: 'Bu listede aynı gelen kutusuna ulaşan iki adres yok.',
  copyUnique: (n) => `${n} adresi kopyalayın`,
  download: '.txt olarak indirin',
  downloadFile: 'emails-without-duplicates.txt',
  keptNote: 'Her grubun ilk adresi yazıldığı gibi korunur, böylece kişinin filtreleri çalışmaya devam eder.',

  ctaTitle: 'Yinelenen adres olmaması bounce olmayacağı anlamına gelmez',
  ctaText: 'Temizlenmiş listeye göndermeden önce her adresin hâlâ var olduğunu kontrol edin.',
  ctaButton: 'Listeyi doğrulayın',
}

const it: PlusToolStrings = {
  tabsAria: 'Modalità dello strumento per indirizzi con +',
  tabCreate: 'Crea',
  tabCreateMore: ' indirizzi con +',
  tabClean: 'Pulisci',
  tabCleanMore: ' una lista',

  addressLabel: 'Il tuo indirizzo email',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Tag, separati da virgole',
  tagsPlaceholder: 'newsletter, shopping',
  ideasLabel: 'Idee:',
  tagIdeas: ['newsletter', 'shopping', 'banca', 'lavoro', 'viaggi'],

  inputErrors: {
    empty: 'Inserisci prima il tuo indirizzo email.',
    invalid: 'Questo non sembra un indirizzo email. Inserisci qualcosa come jane@gmail.com.',
  },
  inputFallback: 'Controlla l’indirizzo.',
  skipReasons: {
    chars: 'Usa solo lettere senza accenti, numeri, punti, trattini o trattini bassi.',
    'too-long': 'Questo tag rende l’indirizzo troppo lungo (al massimo 64 caratteri prima della @).',
  },
  skipped: 'Saltato “{tag}”: {reason}',

  providerNotes: {
    Gmail: 'Gmail consegna ogni +tag nella tua casella e ignora i punti nel nome utente. gmail.com e googlemail.com sono la stessa casella.',
    'Outlook.com': 'Outlook.com accetta i +tag. I punti fanno parte dell’indirizzo, quindi lasciali come sono.',
    'iCloud Mail': 'Test indipendenti mostrano che iCloud consegna i +tag, ma Apple non lo documenta. Prima fai una prova inviando un’email a te stesso.',
    'Proton Mail': 'Proton supporta i +tag in tutti i piani. Quando rispondi, Proton usa l’indirizzo con il tag come mittente.',
    Fastmail: 'Fastmail supporta i +tag. Se il tag corrisponde al nome di una cartella, la posta finisce in quella cartella.',
    'Yandex Mail': 'Yandex supporta i +tag, per esempio login+word@yandex.ru.',
    'Yahoo Mail':
      'Yahoo documenta invece indirizzi usa e getta con il trattino (nickname-keyword@yahoo.com), e il nickname non è il nome del tuo account. Il supporto per il + non è confermato.',
  },
  unknownProvider:
    '{domain} non è un provider per cui abbiamo regole. Se usa Google Workspace o Microsoft 365, gli indirizzi con + funzionano anche lì. Altrimenti invia un’email di prova a te stesso prima di usarne uno.',

  addressesHeading: (n) => `I tuoi indirizzi con + (${n.toLocaleString('it-IT')})`,
  copy: 'Copia',
  copied: 'Copiato',
  copyAll: 'Copia tutti',
  noTags: 'Aggiungi uno o più tag per creare i tuoi indirizzi.',
  gmailFilter: 'Per smistarli in Gmail, crea un filtro con l’indirizzo con + nel campo {to}, oppure cerca {query}.',
  toField: 'A',

  listLabel: 'Incolla la tua lista',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'Un indirizzo per riga, oppure una colonna copiata da un foglio di calcolo. Nomi e altro testo vengono ignorati.',
  stripAllLabel: 'Tratta il + come tag anche sui domini aziendali',
  stripAllHelp:
    'Va bene per liste di utenti Google Workspace e Microsoft 365. Negli altri casi lascia l’opzione disattivata, perché su alcuni server di posta il + fa parte di un indirizzo reale.',

  statFound: 'Indirizzi trovati',
  statUnique: 'Dopo l’unione',
  statGroups: 'Gruppi di duplicati',
  statSkipped: 'Righe saltate',
  groupsHeading: 'Questi indirizzi arrivano nella stessa casella',
  kept: 'mantenuto: ',
  merged: 'unito: ',
  noDuplicates: 'In questa lista non ci sono due indirizzi che arrivano nella stessa casella.',
  copyUnique: (n) => (n === '1' ? 'Copia 1 indirizzo' : `Copia ${n} indirizzi`),
  download: 'Scarica come .txt',
  downloadFile: 'email-senza-duplicati.txt',
  keptNote: 'Il primo indirizzo di ogni gruppo resta esattamente come è scritto, così i filtri della persona continuano a funzionare.',

  ctaTitle: 'Nessun duplicato non significa nessun bounce',
  ctaText: 'Prima di inviare alla lista pulita, controlla che ogni indirizzo esista ancora.',
  ctaButton: 'Verifica la lista',
}

const de: PlusToolStrings = {
  tabsAria: 'Modus des Plus-Adressen-Tools',
  tabCreate: 'Plus-Adressen',
  tabCreateMore: ' erstellen',
  tabClean: 'Liste',
  tabCleanMore: ' bereinigen',

  addressLabel: 'Ihre E-Mail-Adresse',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Tags, durch Kommas getrennt',
  tagsPlaceholder: 'newsletter, shopping',
  ideasLabel: 'Ideen:',
  tagIdeas: ['newsletter', 'shopping', 'banking', 'jobs', 'reisen'],

  inputErrors: {
    empty: 'Geben Sie zuerst Ihre E-Mail-Adresse ein.',
    invalid: 'Das sieht nicht wie eine E-Mail-Adresse aus. Geben Sie etwas wie jane@gmail.com ein.',
  },
  inputFallback: 'Prüfen Sie die Adresse.',
  skipReasons: {
    chars: 'Nutzen Sie nur Buchstaben ohne Umlaute, Ziffern, Punkte, Bindestriche oder Unterstriche.',
    'too-long': 'Mit diesem Tag wird die Adresse zu lang (höchstens 64 Zeichen vor dem @).',
  },
  skipped: '„{tag}“ übersprungen: {reason}',

  providerNotes: {
    Gmail: 'Gmail stellt jedes +Tag in Ihren Posteingang zu und ignoriert Punkte im Nutzernamen. gmail.com und googlemail.com sind derselbe Posteingang.',
    'Outlook.com': 'Outlook.com akzeptiert +Tags. Punkte sind Teil der Adresse, lassen Sie sie also unverändert.',
    'iCloud Mail': 'Unabhängige Tests zeigen, dass iCloud +Tags zustellt, aber Apple dokumentiert es nicht. Schicken Sie sich zuerst eine Test-E-Mail.',
    'Proton Mail': 'Proton unterstützt +Tags in jedem Tarif. Wenn Sie antworten, nutzt Proton die Adresse mit dem Tag als Absender.',
    Fastmail: 'Fastmail unterstützt +Tags. Passt das Tag zu einem Ordnernamen, landet die Mail in diesem Ordner.',
    'Yandex Mail': 'Yandex unterstützt +Tags, zum Beispiel login+word@yandex.ru.',
    'Yahoo Mail':
      'Yahoo dokumentiert stattdessen Wegwerfadressen mit Bindestrich (nickname-keyword@yahoo.com), und der Spitzname ist nicht Ihr Kontoname. Ob Yahoo das + unterstützt, ist nicht bestätigt.',
  },
  unknownProvider:
    'Für {domain} haben wir keine Regeln. Läuft die Domain über Google Workspace oder Microsoft 365, funktionieren Plus-Adressen dort auch. Andernfalls schicken Sie sich eine Test-E-Mail, bevor Sie eine Plus-Adresse nutzen.',

  addressesHeading: (n) => `Ihre Plus-Adressen (${n.toLocaleString('de-DE')})`,
  copy: 'Kopieren',
  copied: 'Kopiert',
  copyAll: 'Alle kopieren',
  noTags: 'Fügen Sie ein oder mehrere Tags hinzu, um Ihre Adressen zu erstellen.',
  gmailFilter: 'Um sie in Gmail zu sortieren, erstellen Sie einen Filter mit der Plus-Adresse im Feld {to}, oder suchen Sie nach {query}.',
  toField: 'An',

  listLabel: 'Fügen Sie Ihre Liste ein',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'Eine Adresse pro Zeile oder eine aus einer Tabelle kopierte Spalte. Namen und anderer Text werden ignoriert.',
  stripAllLabel: '+ auch bei Firmendomains als Tag behandeln',
  stripAllHelp:
    'Geeignet für Listen mit Nutzern von Google Workspace und Microsoft 365. Lassen Sie die Option sonst aus, weil das + auf manchen Mailservern Teil einer echten Adresse ist.',

  statFound: 'Gefundene Adressen',
  statUnique: 'Nach dem Zusammenführen',
  statGroups: 'Duplikat-Gruppen',
  statSkipped: 'Übersprungene Zeilen',
  groupsHeading: 'Diese Adressen erreichen denselben Posteingang',
  kept: 'behalten: ',
  merged: 'zusammengeführt: ',
  noDuplicates: 'In dieser Liste erreichen keine zwei Adressen denselben Posteingang.',
  copyUnique: (n) => (n === '1' ? '1 Adresse kopieren' : `${n} Adressen kopieren`),
  download: 'Als .txt herunterladen',
  downloadFile: 'e-mails-ohne-duplikate.txt',
  keptNote: 'Die erste Adresse jeder Gruppe bleibt genau so, wie sie geschrieben wurde, damit die Filter der Person weiter funktionieren.',

  ctaTitle: 'Keine Duplikate heißt nicht keine Bounces',
  ctaText: 'Prüfen Sie vor dem Versand an die bereinigte Liste, ob jede Adresse noch existiert.',
  ctaButton: 'Liste prüfen',
}

const es: PlusToolStrings = {
  tabsAria: 'Modo de la herramienta de direcciones con +',
  tabCreate: 'Crear',
  tabCreateMore: ' direcciones con +',
  tabClean: 'Limpiar',
  tabCleanMore: ' una lista',

  addressLabel: 'Tu dirección de correo',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Etiquetas, separadas por comas',
  tagsPlaceholder: 'boletines, compras',
  ideasLabel: 'Ideas:',
  tagIdeas: ['boletines', 'compras', 'banco', 'empleo', 'viajes'],

  inputErrors: {
    empty: 'Primero escribe tu dirección de correo.',
    invalid: 'Eso no parece una dirección de correo. Escribe algo como jane@gmail.com.',
  },
  inputFallback: 'Revisa la dirección.',
  skipReasons: {
    chars: 'Usa solo letras sin tildes ni ñ, números, puntos, guiones o guiones bajos.',
    'too-long': 'Esta etiqueta hace que la dirección sea demasiado larga (como máximo 64 caracteres antes de la @).',
  },
  skipped: 'Se omitió “{tag}”: {reason}',

  providerNotes: {
    Gmail: 'Gmail entrega cada +etiqueta en tu bandeja de entrada e ignora los puntos del nombre de usuario. gmail.com y googlemail.com son la misma bandeja.',
    'Outlook.com': 'Outlook.com acepta +etiquetas. Los puntos forman parte de la dirección, así que déjalos como están.',
    'iCloud Mail': 'Pruebas independientes muestran que iCloud entrega las +etiquetas, pero Apple no lo documenta. Envíate primero un correo de prueba.',
    'Proton Mail': 'Proton admite +etiquetas en todos los planes. Cuando respondes, Proton usa la dirección con la etiqueta como remitente.',
    Fastmail: 'Fastmail admite +etiquetas. Si la etiqueta coincide con el nombre de una carpeta, el correo va a esa carpeta.',
    'Yandex Mail': 'Yandex admite +etiquetas, como login+word@yandex.ru.',
    'Yahoo Mail':
      'Yahoo documenta en su lugar direcciones desechables con guion (nickname-keyword@yahoo.com), y el apodo no es el nombre de tu cuenta. Su compatibilidad con el + no está confirmada.',
  },
  unknownProvider:
    'No tenemos reglas para {domain}. Si funciona con Google Workspace o Microsoft 365, las direcciones con + también funcionan ahí. Si no, envíate un correo de prueba antes de usar una.',

  addressesHeading: (n) => `Tus direcciones con + (${n.toLocaleString('es-ES')})`,
  copy: 'Copiar',
  copied: 'Copiado',
  copyAll: 'Copiar todas',
  noTags: 'Agrega una o más etiquetas para crear tus direcciones.',
  gmailFilter: 'Para ordenarlas en Gmail, crea un filtro con la dirección con + en el campo {to}, o busca {query}.',
  toField: 'Para',

  listLabel: 'Pega tu lista',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'Una dirección por línea, o una columna copiada de una hoja de cálculo. Los nombres y el resto del texto se ignoran.',
  stripAllLabel: 'Tratar también el + como etiqueta en dominios de empresa',
  stripAllHelp:
    'Sirve para listas de usuarios de Google Workspace y Microsoft 365. En otros casos déjalo desactivado, porque en algunos servidores de correo el + forma parte de una dirección real.',

  statFound: 'Direcciones encontradas',
  statUnique: 'Después de fusionar',
  statGroups: 'Grupos de duplicados',
  statSkipped: 'Líneas omitidas',
  groupsHeading: 'Estas direcciones llegan a la misma bandeja',
  kept: 'se conserva: ',
  merged: 'se fusiona: ',
  noDuplicates: 'En esta lista no hay dos direcciones que lleguen a la misma bandeja.',
  copyUnique: (n) => (n === '1' ? 'Copiar 1 dirección' : `Copiar ${n} direcciones`),
  download: 'Descargar como .txt',
  downloadFile: 'correos-sin-duplicados.txt',
  keptNote: 'La primera dirección de cada grupo se conserva tal como está escrita, para que los filtros de la persona sigan funcionando.',

  ctaTitle: 'Sin duplicados no significa sin rebotes',
  ctaText: 'Comprueba que cada dirección siga existiendo antes de enviar a la lista limpia.',
  ctaButton: 'Verificar la lista',
}

const ptBr: PlusToolStrings = {
  tabsAria: 'Modo da ferramenta de endereços com +',
  tabCreate: 'Criar',
  tabCreateMore: ' endereços com +',
  tabClean: 'Limpar',
  tabCleanMore: ' uma lista',

  addressLabel: 'Seu endereço de e-mail',
  addressPlaceholder: 'jane@gmail.com',
  tagsLabel: 'Tags, separadas por vírgulas',
  tagsPlaceholder: 'newsletters, compras',
  ideasLabel: 'Ideias:',
  tagIdeas: ['newsletters', 'compras', 'banco', 'empregos', 'viagens'],

  inputErrors: {
    empty: 'Digite primeiro o seu endereço de e-mail.',
    invalid: 'Isso não parece um endereço de e-mail. Digite algo como jane@gmail.com.',
  },
  inputFallback: 'Confira o endereço.',
  skipReasons: {
    chars: 'Use apenas letras sem acento ou cedilha, números, pontos, hifens ou sublinhados.',
    'too-long': 'Esta tag deixa o endereço longo demais (no máximo 64 caracteres antes do @).',
  },
  skipped: '“{tag}” ignorada: {reason}',

  providerNotes: {
    Gmail: 'O Gmail entrega cada +tag na sua caixa de entrada e ignora pontos no nome de usuário. gmail.com e googlemail.com são a mesma caixa de entrada.',
    'Outlook.com': 'O Outlook.com aceita +tags. Os pontos fazem parte do endereço, então deixe-os como estão.',
    'iCloud Mail': 'Testes independentes mostram que o iCloud entrega +tags, mas a Apple não documenta isso. Envie primeiro um e-mail de teste para você mesmo.',
    'Proton Mail': 'O Proton aceita +tags em todos os planos. Quando você responde, o Proton usa o endereço com a tag como remetente.',
    Fastmail: 'A Fastmail aceita +tags. Se a tag for igual ao nome de uma pasta, o e-mail vai para essa pasta.',
    'Yandex Mail': 'O Yandex aceita +tags, como login+word@yandex.ru.',
    'Yahoo Mail':
      'Em vez disso, o Yahoo documenta endereços descartáveis com hífen (nickname-keyword@yahoo.com), e o apelido não é o nome da sua conta. O suporte ao + não está confirmado.',
  },
  unknownProvider:
    'Não temos regras para {domain}. Se ele usa o Google Workspace ou o Microsoft 365, endereços com + também funcionam lá. Caso contrário, envie um e-mail de teste para você mesmo antes de usar um.',

  addressesHeading: (n) => `Seus endereços com + (${n.toLocaleString('pt-BR')})`,
  copy: 'Copiar',
  copied: 'Copiado',
  copyAll: 'Copiar todos',
  noTags: 'Adicione uma ou mais tags para criar os seus endereços.',
  gmailFilter: 'Para organizá-los no Gmail, crie um filtro com o endereço com + no campo {to}, ou pesquise {query}.',
  toField: 'Para',

  listLabel: 'Cole a sua lista',
  listPlaceholder: 'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com',
  listHelp: 'Um endereço por linha, ou uma coluna copiada de uma planilha. Nomes e outros textos são ignorados.',
  stripAllLabel: 'Tratar o + como tag também em domínios de empresa',
  stripAllHelp:
    'Serve para listas de usuários do Google Workspace e do Microsoft 365. Nos outros casos, deixe desmarcado, porque em alguns servidores de e-mail o + faz parte de um endereço real.',

  statFound: 'Endereços encontrados',
  statUnique: 'Depois de mesclar',
  statGroups: 'Grupos de duplicatas',
  statSkipped: 'Linhas ignoradas',
  groupsHeading: 'Estes endereços chegam à mesma caixa de entrada',
  kept: 'mantido: ',
  merged: 'mesclado: ',
  noDuplicates: 'Nesta lista, não há dois endereços que cheguem à mesma caixa de entrada.',
  copyUnique: (n) => (n === '1' ? 'Copiar 1 endereço' : `Copiar ${n} endereços`),
  download: 'Baixar como .txt',
  downloadFile: 'emails-sem-duplicatas.txt',
  keptNote: 'O primeiro endereço de cada grupo é mantido exatamente como foi escrito, para que os filtros da pessoa continuem funcionando.',

  ctaTitle: 'Sem duplicatas não quer dizer sem bounces',
  ctaText: 'Antes de enviar para a lista limpa, verifique se cada endereço ainda existe.',
  ctaButton: 'Verificar a lista',
}

const fr: PlusToolStrings = {
  tabsAria: 'Mode de l’outil d’adresses plus',
  tabCreate: 'Créer',
  tabCreateMore: ' des adresses plus',
  tabClean: 'Nettoyer',
  tabCleanMore: ' une liste',

  addressLabel: 'Votre adresse mail',
  addressPlaceholder: 'marie@gmail.com',
  tagsLabel: 'Étiquettes, séparées par des virgules',
  tagsPlaceholder: 'newsletters, achats',
  ideasLabel: 'Idées :',
  tagIdeas: ['newsletters', 'achats', 'banque', 'emploi', 'voyages'],

  inputErrors: {
    empty: 'Saisissez d’abord votre adresse mail.',
    invalid: 'Cela ne ressemble pas à une adresse mail. Saisissez par exemple marie@gmail.com.',
  },
  inputFallback: 'Vérifiez l’adresse.',
  skipReasons: {
    chars: 'Utilisez uniquement des lettres sans accents, des chiffres, des points, des tirets ou des tirets bas.',
    'too-long': 'Cette étiquette rend l’adresse trop longue (64 caractères au maximum avant le @).',
  },
  skipped: 'Étiquette « {tag} » ignorée : {reason}',

  providerNotes: {
    Gmail: 'Gmail distribue chaque +étiquette dans votre boîte de réception et ignore les points dans le nom d’utilisateur. gmail.com et googlemail.com sont la même boîte.',
    'Outlook.com': 'Outlook.com accepte les +étiquettes. Les points font partie de l’adresse, laissez-les tels quels.',
    'iCloud Mail': 'Des tests indépendants montrent qu’iCloud distribue les +étiquettes, mais Apple ne le documente pas. Envoyez-vous d’abord un message de test.',
    'Proton Mail': 'Proton accepte les +étiquettes sur toutes les offres. Quand vous répondez, Proton utilise l’adresse avec étiquette comme expéditeur.',
    Fastmail: 'Fastmail accepte les +étiquettes. Si l’étiquette correspond au nom d’un dossier, le message va dans ce dossier.',
    'Yandex Mail': 'Yandex accepte les +étiquettes, par exemple login+mot@yandex.ru.',
    'Yahoo Mail':
      'Yahoo documente plutôt des adresses jetables avec un tiret (surnom-motcle@yahoo.com), et le surnom n’est pas le nom de votre compte. La prise en charge du + n’est pas confirmée.',
  },
  unknownProvider:
    '{domain} ne fait pas partie des fournisseurs pour lesquels nous avons des règles. Si ce domaine fonctionne avec Google Workspace ou Microsoft 365, les adresses plus y fonctionnent aussi. Sinon, envoyez-vous un message de test avant d’en utiliser une.',

  addressesHeading: (n) => `Vos adresses plus (${n})`,
  copy: 'Copier',
  copied: 'Copié',
  copyAll: 'Tout copier',
  noTags: 'Ajoutez une ou plusieurs étiquettes pour créer vos adresses.',
  gmailFilter: 'Pour les trier dans Gmail, créez un filtre avec l’adresse plus dans le champ {to}, ou recherchez {query}.',
  toField: 'À',

  listLabel: 'Collez votre liste',
  listPlaceholder: 'marie.dupont@gmail.com\nmariedupont+news@googlemail.com\nluc+promo@outlook.com\nluc@outlook.com',
  listHelp: 'Une adresse par ligne, ou une colonne copiée depuis un tableur. Les noms et le reste du texte sont ignorés.',
  stripAllLabel: 'Traiter aussi le + comme une étiquette sur les domaines d’entreprise',
  stripAllHelp:
    'Convient aux listes d’utilisateurs Google Workspace et Microsoft 365. Sinon, laissez l’option décochée, car sur certains serveurs de messagerie le + fait partie d’une vraie adresse.',

  statFound: 'Adresses trouvées',
  statUnique: 'Après fusion',
  statGroups: 'Groupes de doublons',
  statSkipped: 'Lignes ignorées',
  groupsHeading: 'Ces adresses arrivent dans la même boîte de réception',
  kept: 'gardée : ',
  merged: 'fusionnée : ',
  noDuplicates: 'Dans cette liste, aucune adresse n’arrive dans la même boîte qu’une autre.',
  copyUnique: (n) => (n === '1' ? 'Copier 1 adresse' : `Copier ${n} adresses`),
  download: 'Télécharger en .txt',
  downloadFile: 'adresses-sans-doublons.txt',
  keptNote: 'La première adresse de chaque groupe est gardée telle qu’elle a été saisie, pour que les filtres de la personne continuent de fonctionner.',

  ctaTitle: 'Sans doublons ne veut pas dire sans rebonds',
  ctaText: 'Vérifiez que chaque adresse existe encore avant d’envoyer vos messages à la liste nettoyée.',
  ctaButton: 'Vérifier la liste',
}

const nl: PlusToolStrings = {
  tabsAria: 'Modus van de plusadrestool',
  tabCreate: 'Plusadressen',
  tabCreateMore: ' maken',
  tabClean: 'Lijst',
  tabCleanMore: ' opschonen',

  addressLabel: 'Je e-mailadres',
  addressPlaceholder: 'sanne@gmail.com',
  tagsLabel: 'Tags, gescheiden door komma’s',
  tagsPlaceholder: 'nieuwsbrieven, winkelen',
  ideasLabel: 'Ideeën:',
  tagIdeas: ['nieuwsbrieven', 'winkelen', 'bank', 'vacatures', 'reizen'],

  inputErrors: {
    empty: 'Vul eerst je e-mailadres in.',
    invalid: 'Dat lijkt geen e-mailadres. Vul iets in zoals sanne@gmail.com.',
  },
  inputFallback: 'Controleer het adres.',
  skipReasons: {
    chars: 'Gebruik alleen letters zonder accenten, cijfers, punten, streepjes of underscores.',
    'too-long': 'Met deze tag wordt het adres te lang (maximaal 64 tekens vóór de @).',
  },
  skipped: '“{tag}” overgeslagen: {reason}',

  providerNotes: {
    Gmail: 'Gmail levert elke +tag af in je inbox en negeert punten in de gebruikersnaam. gmail.com en googlemail.com zijn dezelfde inbox.',
    'Outlook.com': 'Outlook.com accepteert +tags. Punten horen bij het adres, dus laat ze staan.',
    'iCloud Mail': 'Onafhankelijke tests laten zien dat iCloud +tags aflevert, maar Apple documenteert het niet. Stuur jezelf eerst een testmail.',
    'Proton Mail': 'Proton ondersteunt +tags in elk abonnement. Als je antwoordt, gebruikt Proton het adres met de tag als afzender.',
    Fastmail: 'Fastmail ondersteunt +tags. Als de tag gelijk is aan een mapnaam, komt de mail in die map.',
    'Yandex Mail': 'Yandex ondersteunt +tags, zoals login+woord@yandex.ru.',
    'Yahoo Mail':
      'Yahoo documenteert in plaats daarvan wegwerpadressen met een streepje (bijnaam-trefwoord@yahoo.com), en de bijnaam is niet je accountnaam. Ondersteuning voor + is niet bevestigd.',
  },
  unknownProvider:
    'Voor {domain} hebben we geen providerregels. Draait het domein op Google Workspace of Microsoft 365, dan werken plusadressen daar ook. Stuur jezelf anders een testmail voordat je er een gebruikt.',

  addressesHeading: (n) => `Je plusadressen (${n})`,
  copy: 'Kopiëren',
  copied: 'Gekopieerd',
  copyAll: 'Alles kopiëren',
  noTags: 'Voeg een of meer tags toe om je adressen te maken.',
  gmailFilter: 'Om ze in Gmail te sorteren, maak je een filter met het plusadres in het veld {to}, of zoek je op {query}.',
  toField: 'Aan',

  listLabel: 'Plak je lijst',
  listPlaceholder: 'sanne.jansen@gmail.com\nsannejansen+news@googlemail.com\nthijs+promo@outlook.com\nthijs@outlook.com',
  listHelp: 'Eén adres per regel, of een kolom gekopieerd uit een spreadsheet. Namen en andere tekst worden genegeerd.',
  stripAllLabel: 'Behandel + ook als tag op bedrijfsdomeinen',
  stripAllHelp:
    'Prima voor lijsten met gebruikers van Google Workspace en Microsoft 365. Laat het anders uit, want op sommige mailservers hoort de + bij een echt adres.',

  statFound: 'Gevonden adressen',
  statUnique: 'Na samenvoegen',
  statGroups: 'Groepen dubbele adressen',
  statSkipped: 'Overgeslagen regels',
  groupsHeading: 'Deze adressen komen in dezelfde inbox aan',
  kept: 'behouden: ',
  merged: 'samengevoegd: ',
  noDuplicates: 'Geen twee adressen in deze lijst komen in dezelfde inbox aan.',
  copyUnique: (n) => (n === '1' ? '1 adres kopiëren' : `${n} adressen kopiëren`),
  download: 'Downloaden als .txt',
  downloadFile: 'e-mailadressen-zonder-dubbele.txt',
  keptNote: 'Het eerste adres van elke groep blijft precies zoals het is geschreven, zodat de filters van de persoon blijven werken.',

  ctaTitle: 'Geen dubbele adressen betekent niet geen bounces',
  ctaText: 'Controleer of elk adres nog bestaat voordat je naar de opgeschoonde lijst verstuurt.',
  ctaButton: 'Lijst verifiëren',
}

/** Polish plural form: 1 adres, 2 adresy, 5 adresów. `n` is the formatted number. */
function plPlusForm(n: string, one: string, few: string, many: string): string {
  const k = Number(n.replace(/\D/g, ''))
  if (k === 1) return one
  const d = k % 10
  const t = k % 100
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many
}

const pl: PlusToolStrings = {
  tabsAria: 'Tryb narzędzia do adresów z plusem',
  tabCreate: 'Utwórz',
  tabCreateMore: ' adresy z plusem',
  tabClean: 'Oczyść',
  tabCleanMore: ' listę',

  addressLabel: 'Twój adres e-mail',
  addressPlaceholder: 'anna@gmail.com',
  tagsLabel: 'Tagi oddzielone przecinkami',
  tagsPlaceholder: 'newsletter, zakupy',
  ideasLabel: 'Pomysły:',
  tagIdeas: ['newsletter', 'zakupy', 'bank', 'praca', 'wyjazdy'],

  inputErrors: {
    empty: 'Najpierw wpisz swój adres e-mail.',
    invalid: 'To nie wygląda na adres e-mail. Wpisz adres w rodzaju anna@gmail.com.',
  },
  inputFallback: 'Sprawdź adres.',
  skipReasons: {
    chars: 'Używaj tylko liter bez polskich znaków, cyfr, kropek, łączników lub podkreśleń.',
    'too-long': 'Ten tag sprawia, że adres jest za długi (najwyżej 64 znaki przed @).',
  },
  skipped: 'Pominięto „{tag}”: {reason}',

  providerNotes: {
    Gmail: 'Gmail dostarcza każdy +tag do twojej skrzynki i ignoruje kropki w nazwie użytkownika. gmail.com i googlemail.com to ta sama skrzynka.',
    'Outlook.com': 'Outlook.com przyjmuje +tagi. Kropki są częścią adresu, więc zostaw je bez zmian.',
    'iCloud Mail': 'Niezależne testy pokazują, że iCloud dostarcza +tagi, ale Apple tego nie dokumentuje. Najpierw wyślij do siebie testową wiadomość.',
    'Proton Mail': 'Proton obsługuje +tagi w każdym planie. Gdy odpowiadasz, Proton używa adresu z tagiem jako nadawcy.',
    Fastmail: 'Fastmail obsługuje +tagi. Jeśli tag zgadza się z nazwą folderu, wiadomość trafia do tego folderu.',
    'Yandex Mail': 'Yandex obsługuje +tagi, np. login+slowo@yandex.ru.',
    'Yahoo Mail':
      'Yahoo dokumentuje zamiast tego adresy jednorazowe z łącznikiem (pseudonim-slowo@yahoo.com), a pseudonim nie jest nazwą twojego konta. Obsługa znaku + nie jest potwierdzona.',
  },
  unknownProvider:
    'Nie mamy reguł dla dostawcy domeny {domain}. Jeśli ta domena działa na Google Workspace lub Microsoft 365, adresy z plusem też tam działają. W przeciwnym razie wyślij do siebie testową wiadomość, zanim użyjesz takiego adresu.',

  addressesHeading: (n) => `Twoje adresy z plusem (${n})`,
  copy: 'Kopiuj',
  copied: 'Skopiowano',
  copyAll: 'Kopiuj wszystkie',
  noTags: 'Dodaj co najmniej jeden tag, aby utworzyć adresy.',
  gmailFilter: 'Aby sortować je w Gmailu, utwórz filtr z adresem z plusem w polu {to} albo wyszukaj {query}.',
  toField: 'Do',

  listLabel: 'Wklej swoją listę',
  listPlaceholder: 'anna.nowak@gmail.com\nannanowak+news@googlemail.com\npiotr+promo@outlook.com\npiotr@outlook.com',
  listHelp: 'Jeden adres w wierszu albo kolumna skopiowana z arkusza. Imiona i inny tekst są pomijane.',
  stripAllLabel: 'Traktuj + jako tag również w domenach firmowych',
  stripAllHelp:
    'Dobre dla list użytkowników Google Workspace i Microsoft 365. W innych przypadkach zostaw tę opcję wyłączoną, bo na niektórych serwerach pocztowych + jest częścią prawdziwego adresu.',

  statFound: 'Znalezione adresy',
  statUnique: 'Po połączeniu',
  statGroups: 'Grupy duplikatów',
  statSkipped: 'Pominięte wiersze',
  groupsHeading: 'Te adresy trafiają do tej samej skrzynki',
  kept: 'zachowany: ',
  merged: 'połączony: ',
  noDuplicates: 'Na tej liście żadne dwa adresy nie trafiają do tej samej skrzynki.',
  copyUnique: (n) => `Kopiuj ${n} ${plPlusForm(n, 'adres', 'adresy', 'adresów')}`,
  download: 'Pobierz jako .txt',
  downloadFile: 'adresy-bez-duplikatow.txt',
  keptNote: 'Pierwszy adres z każdej grupy zostaje dokładnie w zapisanej formie, aby filtry tej osoby nadal działały.',

  ctaTitle: 'Brak duplikatów nie oznacza braku odbić',
  ctaText: 'Zanim wyślesz wiadomości na oczyszczoną listę, sprawdź, czy każdy adres nadal istnieje.',
  ctaButton: 'Zweryfikuj listę',
}

const id: PlusToolStrings = {
  tabsAria: 'Mode alat alamat plus',
  tabCreate: 'Buat',
  tabCreateMore: ' alamat plus',
  tabClean: 'Bersihkan',
  tabCleanMore: ' daftar',

  addressLabel: 'Alamat email Anda',
  addressPlaceholder: 'budi@gmail.com',
  tagsLabel: 'Tag, pisahkan dengan koma',
  tagsPlaceholder: 'newsletter, belanja',
  ideasLabel: 'Ide:',
  tagIdeas: ['newsletter', 'belanja', 'bank', 'lowongan', 'liburan'],

  inputErrors: {
    empty: 'Masukkan alamat email Anda terlebih dahulu.',
    invalid: 'Itu tidak terlihat seperti alamat email. Masukkan alamat seperti budi@gmail.com.',
  },
  inputFallback: 'Periksa alamatnya.',
  skipReasons: {
    chars: 'Gunakan hanya huruf, angka, titik, tanda hubung, atau garis bawah.',
    'too-long': 'Tag ini membuat alamat terlalu panjang (maksimal 64 karakter sebelum @).',
  },
  skipped: '"{tag}" dilewati: {reason}',

  providerNotes: {
    Gmail: 'Gmail mengirimkan setiap +tag ke kotak masuk Anda dan mengabaikan titik di nama pengguna. gmail.com dan googlemail.com adalah kotak masuk yang sama.',
    'Outlook.com': 'Outlook.com menerima +tag. Titik adalah bagian dari alamat, jadi biarkan apa adanya.',
    'iCloud Mail': 'Pengujian independen menunjukkan bahwa iCloud mengirimkan +tag, tetapi Apple tidak mendokumentasikannya. Kirim email uji ke diri sendiri terlebih dahulu.',
    'Proton Mail': 'Proton mendukung +tag di semua paket. Saat Anda membalas, Proton memakai alamat bertag sebagai pengirim.',
    Fastmail: 'Fastmail mendukung +tag. Jika tag sama dengan nama folder, email masuk ke folder itu.',
    'Yandex Mail': 'Yandex mendukung +tag, misalnya login+kata@yandex.ru.',
    'Yahoo Mail':
      'Yahoo justru mendokumentasikan alamat sekali pakai dengan tanda hubung (namapanggilan-katakunci@yahoo.com), dan nama panggilan itu bukan nama akun Anda. Dukungannya untuk + belum dipastikan.',
  },
  unknownProvider:
    'Kami belum punya aturan untuk penyedia {domain}. Jika domain ini memakai Google Workspace atau Microsoft 365, alamat plus juga berfungsi di sana. Jika tidak, kirim email uji ke diri sendiri sebelum Anda memakainya.',

  addressesHeading: (n) => `Alamat plus Anda (${n})`,
  copy: 'Salin',
  copied: 'Tersalin',
  copyAll: 'Salin semua',
  noTags: 'Tambahkan satu tag atau lebih untuk membuat alamat Anda.',
  gmailFilter: 'Untuk memilahnya di Gmail, buat filter dengan alamat plus di kolom {to}, atau cari {query}.',
  toField: 'Kepada',

  listLabel: 'Tempel daftar Anda',
  listPlaceholder: 'budi.santoso@gmail.com\nbudisantoso+news@googlemail.com\nsiti+promo@outlook.com\nsiti@outlook.com',
  listHelp: 'Satu alamat per baris, atau satu kolom yang disalin dari spreadsheet. Nama dan teks lain diabaikan.',
  stripAllLabel: 'Anggap + sebagai tag juga di domain perusahaan',
  stripAllHelp:
    'Cocok untuk daftar pengguna Google Workspace dan Microsoft 365. Jika bukan, biarkan nonaktif, karena di beberapa server email tanda + adalah bagian dari alamat yang asli.',

  statFound: 'Alamat ditemukan',
  statUnique: 'Setelah digabung',
  statGroups: 'Grup duplikat',
  statSkipped: 'Baris dilewati',
  groupsHeading: 'Alamat-alamat ini masuk ke kotak masuk yang sama',
  kept: 'disimpan: ',
  merged: 'digabung: ',
  noDuplicates: 'Tidak ada dua alamat di daftar ini yang masuk ke kotak masuk yang sama.',
  copyUnique: (n) => `Salin ${n} alamat`,
  download: 'Unduh sebagai .txt',
  downloadFile: 'email-tanpa-duplikat.txt',
  keptNote: 'Alamat pertama setiap grup disimpan persis seperti yang ditulis, agar filter orang tersebut tetap berfungsi.',

  ctaTitle: 'Tanpa duplikat bukan berarti tanpa bounce',
  ctaText: 'Periksa apakah setiap alamat masih ada sebelum Anda mengirim ke daftar yang sudah dibersihkan.',
  ctaButton: 'Verifikasi daftar',
}

export const PLUS_TOOL_STRINGS: Partial<Record<Locale, PlusToolStrings>> & { en: PlusToolStrings } = {
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

/** The tool strings for `locale`, English when the language has none yet. */
export function plusToolStrings(locale: Locale): PlusToolStrings {
  return PLUS_TOOL_STRINGS[locale] ?? en
}
