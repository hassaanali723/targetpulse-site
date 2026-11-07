// Labels and messages of the email permutator tool
// (components/tools/EmailPermutator/EmailPermutatorTool.tsx), one object per
// language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/emailPermutatorStrings.ts.
//
// English is the original wording moved here unchanged. The download file names
// and the CSV header rows are user-visible, so they are here too.
//
// Not here, because they are the same in every language: the pattern names the
// core returns (first.last, flast, ...) and the addresses built from them, which
// are ASCII. The core (lib/tools/emailPermutatorCore.ts) returns no other text.
// Its CSV header detection matches English column names only; in other languages
// the reader picks the columns from the drop-downs.
//
// Counts are passed as numbers. English shows them without a thousands separator,
// as the tool always did; other languages may format them with toLocaleString.

import type { Locale } from '@/lib/i18n/clusters'

export interface PermutatorToolStrings {
  modeSingle: string
  modeBulk: string
  firstName: string
  lastName: string
  middleName: string
  nickname: string
  domains: string
  /** Shown after the label of each optional field. */
  optional: string
  firstPlaceholder: string
  lastPlaceholder: string
  middlePlaceholder: string
  nicknamePlaceholder: string
  domainsPlaceholder: string
  domainsHelp: string
  /** The domains that can't be used, joined with commas. */
  invalidDomains: (list: string) => string
  generate: string
  /** Heading over the results: the number of addresses. */
  resultsTitle: (n: number) => string
  resultsNote: string
  copyAll: string
  copiedAll: string
  downloadTxt: string
  downloadCsv: string
  filterPlaceholder: string
  /** Label of the copy button on one address. */
  copyOne: (email: string) => string
  nextText: string
  verifyButton: string
  checkOneButton: string
  /** The single-address checker page in this language. */
  checkOneHref: string
  bulkTitle: string
  uploadButton: string
  pasteLabel: string
  /** Example rows in the paste box: a header row, then two people. */
  bulkPlaceholder: string
  /** The number of rows read from the CSV, header included. */
  loadedRows: (n: number) => string
  headerRow: string
  colFirst: string
  colLast: string
  colDomain: string
  /** The "no column" choice for the optional last name. */
  colNone: string
  /** One choice in a column drop-down: its position (from 1) and the value in the first row. */
  colOption: (n: number, value: string) => string
  /** Stands in for an empty first-row cell in colOption. */
  colEmpty: string
  generateBulk: string
  /** Heading over the bulk results: the number of addresses. */
  bulkResultsTitle: (n: number) => string
  bulkResultsNote: string
  downloadBulk: string
  /** Single-mode download name without the extension; `domain` is the cleaned domain field. */
  fileSingle: (domain: string) => string
  /** Used for the file name when the domain field is empty. */
  fileFallback: string
  fileBulk: string
  /** First row of the single-mode CSV. Three columns: pattern, email, domain. */
  csvHeaderSingle: string
  /** First row of the bulk CSV. Five columns: first name, last name, domain, email, pattern. */
  csvHeaderBulk: string
}

const en: PermutatorToolStrings = {
  modeSingle: 'Single Person',
  modeBulk: 'Bulk CSV',
  firstName: 'First Name',
  lastName: 'Last Name',
  middleName: 'Middle Name',
  nickname: 'Nickname',
  domains: 'Company Domain(s)',
  optional: '(optional)',
  firstPlaceholder: 'Jane',
  lastPlaceholder: 'Doe',
  middlePlaceholder: 'Marie',
  nicknamePlaceholder: 'Janey',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Separate multiple domains with commas. We strip http://, www., paths, and leading @ automatically.',
  invalidDomains: (list) => `Invalid hostnames will be ignored: ${list}`,
  generate: 'Generate Formats',
  resultsTitle: (n) => `Generated Formats (${n})`,
  resultsNote: 'Ordered with most common company standards first.',
  copyAll: 'Copy All',
  copiedAll: 'Copied All',
  downloadTxt: 'Download TXT',
  downloadCsv: 'Download CSV',
  filterPlaceholder: 'Filter generated formats...',
  copyOne: (email) => `Copy ${email}`,
  nextText:
    'These are guesses. Verify them to find the one that exists. On catch-all domains, most checkers report every format as valid.',
  verifyButton: 'Verify these addresses',
  checkOneButton: 'Check one address',
  checkOneHref: '/email-checker',
  bulkTitle: 'Upload CSV or Paste Rows (Up to 5,000)',
  uploadButton: 'Upload CSV File',
  pasteLabel: 'Or paste CSV rows:',
  // The live page has always shown these rows on one line, separated by spaces.
  bulkPlaceholder: 'First Name,Last Name,Domain Jane,Doe,example.com Alex,Smith,acme.org',
  loadedRows: (n) => `Loaded ${n} rows`,
  headerRow: 'First row is header',
  colFirst: 'First Name Column',
  colLast: 'Last Name Column',
  colDomain: 'Domain Column',
  colNone: '(None / Optional)',
  colOption: (n, value) => `Col ${n}: ${value}`,
  colEmpty: '(empty)',
  generateBulk: 'Generate All Permutations',
  bulkResultsTitle: (n) => `Generated ${n} permutations`,
  bulkResultsNote: 'Download the CSV with first_name, last_name, domain, email, and pattern columns.',
  downloadBulk: 'Download Bulk CSV',
  fileSingle: (domain) => `permutations-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'email-permutator-bulk.csv',
  csvHeaderSingle: 'pattern,email,domain',
  csvHeaderBulk: 'first_name,last_name,domain,email,pattern',
}

// ja, ko and tr keep the CSV header rows and file names in English ASCII: the
// download is UTF-8, and Excel in these locales opens such files in a legacy
// code page, which would garble non-ASCII headers.
const ja: PermutatorToolStrings = {
  modeSingle: '1人ずつ',
  modeBulk: 'CSVで一括',
  firstName: '名',
  lastName: '姓',
  middleName: 'ミドルネーム',
  nickname: 'ニックネーム',
  domains: '会社のドメイン',
  optional: '（任意）',
  firstPlaceholder: 'Hanako',
  lastPlaceholder: 'Yamada',
  middlePlaceholder: 'Mari',
  nicknamePlaceholder: 'Hana',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: '複数のドメインはカンマで区切ります。http://、www.、パス、先頭の@は自動で取り除きます。',
  invalidDomains: (list) => `無効なホスト名は無視されます：${list}`,
  generate: '形式を生成',
  resultsTitle: (n) => `生成した形式（${n.toLocaleString('ja-JP')}件）`,
  resultsNote: '会社でよく使われる形式から順に並べています。',
  copyAll: 'すべてコピー',
  copiedAll: 'すべてコピーしました',
  downloadTxt: 'TXTでダウンロード',
  downloadCsv: 'CSVでダウンロード',
  filterPlaceholder: '生成した形式を絞り込み…',
  copyOne: (email) => `${email}をコピー`,
  nextText:
    'これらは推測です。検証して、実在するアドレスを見つけてください。キャッチオールドメインでは、多くのチェッカーがすべての形式を有効と表示します。',
  verifyButton: 'これらのアドレスを検証する',
  checkOneButton: '1件だけ確認する',
  checkOneHref: '/ja/email-checker',
  bulkTitle: 'CSVのアップロードまたは行の貼り付け（最大5,000件）',
  uploadButton: 'CSVファイルをアップロード',
  pasteLabel: 'またはCSVの行を貼り付け：',
  bulkPlaceholder: '名,姓,ドメイン Hanako,Yamada,example.com Taro,Suzuki,acme.org',
  loadedRows: (n) => `${n.toLocaleString('ja-JP')}行を読み込みました`,
  headerRow: '1行目は見出し',
  colFirst: '名の列',
  colLast: '姓の列',
  colDomain: 'ドメインの列',
  colNone: '（なし／任意）',
  colOption: (n, value) => `${n}列目：${value}`,
  colEmpty: '（空欄）',
  generateBulk: 'すべての組み合わせを生成',
  bulkResultsTitle: (n) => `${n.toLocaleString('ja-JP')}件の組み合わせを生成しました`,
  bulkResultsNote: 'first_name、last_name、domain、email、patternの列があるCSVをダウンロードします。',
  downloadBulk: '一括CSVをダウンロード',
  fileSingle: (domain) => `permutations-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'email-permutator-bulk.csv',
  csvHeaderSingle: 'pattern,email,domain',
  csvHeaderBulk: 'first_name,last_name,domain,email,pattern',
}

const ko: PermutatorToolStrings = {
  modeSingle: '한 사람',
  modeBulk: 'CSV 일괄',
  firstName: '이름',
  lastName: '성',
  middleName: '중간 이름',
  nickname: '닉네임',
  domains: '회사 도메인',
  optional: '(선택)',
  firstPlaceholder: 'Minjun',
  lastPlaceholder: 'Kim',
  middlePlaceholder: 'Hyun',
  nicknamePlaceholder: 'MJ',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: '여러 도메인은 쉼표로 구분하십시오. http://, www., 경로, 앞에 붙은 @ 기호는 자동으로 제거합니다.',
  invalidDomains: (list) => `잘못된 호스트 이름은 무시됩니다: ${list}`,
  generate: '형식 생성',
  resultsTitle: (n) => `생성된 형식(${n.toLocaleString('ko-KR')}개)`,
  resultsNote: '회사에서 가장 흔히 쓰는 형식부터 정렬했습니다.',
  copyAll: '모두 복사',
  copiedAll: '모두 복사됨',
  downloadTxt: 'TXT 다운로드',
  downloadCsv: 'CSV 다운로드',
  filterPlaceholder: '생성된 형식 필터...',
  copyOne: (email) => `${email} 복사`,
  nextText:
    '이 주소들은 추측입니다. 검증해서 실제로 존재하는 주소를 찾으십시오. 캐치올 도메인에서는 대부분의 검사 도구가 모든 형식을 유효하다고 보고합니다.',
  verifyButton: '이 주소들 검증하기',
  checkOneButton: '주소 하나 확인하기',
  checkOneHref: '/ko/email-checker',
  bulkTitle: 'CSV 업로드 또는 행 붙여 넣기(최대 5,000개)',
  uploadButton: 'CSV 파일 업로드',
  pasteLabel: '또는 CSV 행 붙여 넣기:',
  bulkPlaceholder: '이름,성,도메인 Minjun,Kim,example.com Jiwoo,Lee,acme.org',
  loadedRows: (n) => `${n.toLocaleString('ko-KR')}개 행을 불러왔습니다`,
  headerRow: '첫 행은 머리글',
  colFirst: '이름 열',
  colLast: '성 열',
  colDomain: '도메인 열',
  colNone: '(없음/선택)',
  colOption: (n, value) => `${n}열: ${value}`,
  colEmpty: '(비어 있음)',
  generateBulk: '모든 조합 생성',
  bulkResultsTitle: (n) => `조합 ${n.toLocaleString('ko-KR')}개를 생성했습니다`,
  bulkResultsNote: 'first_name, last_name, domain, email, pattern 열이 있는 CSV를 다운로드하십시오.',
  downloadBulk: '일괄 CSV 다운로드',
  fileSingle: (domain) => `permutations-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'email-permutator-bulk.csv',
  csvHeaderSingle: 'pattern,email,domain',
  csvHeaderBulk: 'first_name,last_name,domain,email,pattern',
}

const tr: PermutatorToolStrings = {
  modeSingle: 'Tek kişi',
  modeBulk: 'Toplu CSV',
  firstName: 'Ad',
  lastName: 'Soyad',
  middleName: 'İkinci ad',
  nickname: 'Lakap',
  domains: 'Şirket alan adları',
  optional: '(isteğe bağlı)',
  firstPlaceholder: 'Mehmet',
  lastPlaceholder: 'Demir',
  middlePlaceholder: 'Ali',
  nicknamePlaceholder: 'Memo',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Birden fazla alan adını virgülle ayırın. http://, www., yollar ve baştaki @ işareti otomatik olarak kaldırılır.',
  invalidDomains: (list) => `Geçersiz ana makine adları yok sayılacak: ${list}`,
  generate: 'Formatları oluşturun',
  resultsTitle: (n) => `Oluşturulan formatlar (${n.toLocaleString('tr-TR')})`,
  resultsNote: 'En yaygın şirket standartları en üstte olacak şekilde sıralandı.',
  copyAll: 'Tümünü kopyalayın',
  copiedAll: 'Tümü kopyalandı',
  downloadTxt: 'TXT olarak indirin',
  downloadCsv: 'CSV olarak indirin',
  filterPlaceholder: 'Oluşturulan formatları filtreleyin...',
  copyOne: (email) => `${email} adresini kopyalayın`,
  nextText:
    'Bunlar tahmindir. Var olan adresi bulmak için doğrulayın. Catch-all alan adlarında çoğu doğrulama aracı her formatı geçerli olarak bildirir.',
  verifyButton: 'Bu adresleri doğrulayın',
  checkOneButton: 'Tek bir adresi kontrol edin',
  checkOneHref: '/tr/mail-adresi-dogrulama',
  bulkTitle: 'CSV yükleyin veya satırları yapıştırın (en fazla 5.000)',
  uploadButton: 'CSV dosyası yükleyin',
  pasteLabel: 'Veya CSV satırlarını yapıştırın:',
  bulkPlaceholder: 'Ad,Soyad,Alan adı Mehmet,Demir,example.com Ayşe,Kaya,acme.org',
  loadedRows: (n) => `${n.toLocaleString('tr-TR')} satır yüklendi`,
  headerRow: 'İlk satır başlık satırı',
  colFirst: 'Ad sütunu',
  colLast: 'Soyad sütunu',
  colDomain: 'Alan adı sütunu',
  colNone: '(Yok / isteğe bağlı)',
  colOption: (n, value) => `Sütun ${n}: ${value}`,
  colEmpty: '(boş)',
  generateBulk: 'Tüm kombinasyonları oluşturun',
  bulkResultsTitle: (n) => `${n.toLocaleString('tr-TR')} kombinasyon oluşturuldu`,
  bulkResultsNote: 'first_name, last_name, domain, email ve pattern sütunlarını içeren CSV dosyasını indirin.',
  downloadBulk: 'Toplu CSV dosyasını indirin',
  fileSingle: (domain) => `permutations-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'email-permutator-bulk.csv',
  csvHeaderSingle: 'pattern,email,domain',
  csvHeaderBulk: 'first_name,last_name,domain,email,pattern',
}

const it: PermutatorToolStrings = {
  modeSingle: 'Persona singola',
  modeBulk: 'CSV in blocco',
  firstName: 'Nome',
  lastName: 'Cognome',
  middleName: 'Secondo nome',
  nickname: 'Soprannome',
  domains: 'Dominio aziendale (uno o più)',
  optional: '(facoltativo)',
  firstPlaceholder: 'Giulia',
  lastPlaceholder: 'Rossi',
  middlePlaceholder: 'Maria',
  nicknamePlaceholder: 'Giuli',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Separa più domini con virgole. Rimuoviamo in automatico http://, www., i percorsi e la @ iniziale.',
  invalidDomains: (list) => `Questi nomi host non sono validi e verranno ignorati: ${list}`,
  generate: 'Genera formati',
  resultsTitle: (n) => `Formati generati (${n.toLocaleString('it-IT')})`,
  resultsNote: 'In ordine, dagli standard aziendali più comuni.',
  copyAll: 'Copia tutti',
  copiedAll: 'Tutti copiati',
  downloadTxt: 'Scarica TXT',
  downloadCsv: 'Scarica CSV',
  filterPlaceholder: 'Filtra i formati generati...',
  copyOne: (email) => `Copia ${email}`,
  nextText:
    'Sono ipotesi. Verificale per trovare quella che esiste. Sui domini catch-all, la maggior parte dei servizi di verifica segnala ogni formato come valido.',
  verifyButton: 'Verifica questi indirizzi',
  checkOneButton: 'Controlla un indirizzo',
  checkOneHref: '/it/verifica-email',
  bulkTitle: 'Carica un CSV o incolla le righe (fino a 5.000)',
  uploadButton: 'Carica file CSV',
  pasteLabel: 'Oppure incolla le righe CSV:',
  bulkPlaceholder: 'Nome,Cognome,Dominio Giulia,Rossi,example.com Marco,Bianchi,acme.org',
  loadedRows: (n) => (n === 1 ? '1 riga caricata' : `${n.toLocaleString('it-IT')} righe caricate`),
  headerRow: 'La prima riga è l’intestazione',
  colFirst: 'Colonna del nome',
  colLast: 'Colonna del cognome',
  colDomain: 'Colonna del dominio',
  colNone: '(Nessuna / facoltativa)',
  colOption: (n, value) => `Col. ${n}: ${value}`,
  colEmpty: '(vuota)',
  generateBulk: 'Genera tutte le combinazioni',
  bulkResultsTitle: (n) => `${n.toLocaleString('it-IT')} combinazioni generate`,
  bulkResultsNote: 'Scarica il CSV con le colonne nome, cognome, dominio, email e schema.',
  downloadBulk: 'Scarica CSV completo',
  fileSingle: (domain) => `combinazioni-${domain}`,
  fileFallback: 'email',
  fileBulk: 'permutatore-email-blocco.csv',
  csvHeaderSingle: 'schema,email,dominio',
  csvHeaderBulk: 'nome,cognome,dominio,email,schema',
}

const de: PermutatorToolStrings = {
  modeSingle: 'Einzelne Person',
  modeBulk: 'CSV-Liste',
  firstName: 'Vorname',
  lastName: 'Nachname',
  middleName: 'Zweiter Vorname',
  nickname: 'Spitzname',
  domains: 'Firmendomain(s)',
  optional: '(optional)',
  firstPlaceholder: 'Anna',
  lastPlaceholder: 'Müller',
  middlePlaceholder: 'Maria',
  nicknamePlaceholder: 'Anni',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Trennen Sie mehrere Domains mit Kommas. http://, www., Pfade und ein führendes @ entfernen wir automatisch.',
  invalidDomains: (list) => `Ungültige Hostnamen werden ignoriert: ${list}`,
  generate: 'Formate erstellen',
  resultsTitle: (n) => `Erstellte Formate (${n.toLocaleString('de-DE')})`,
  resultsNote: 'Sortiert nach Häufigkeit in Firmen, die häufigsten zuerst.',
  copyAll: 'Alle kopieren',
  copiedAll: 'Alle kopiert',
  downloadTxt: 'TXT herunterladen',
  downloadCsv: 'CSV herunterladen',
  filterPlaceholder: 'Erstellte Formate filtern...',
  copyOne: (email) => `${email} kopieren`,
  nextText:
    'Das sind Vermutungen. Prüfen Sie sie, um die existierende Adresse zu finden. Auf Catch-all-Domains melden die meisten Prüfer jedes Format als gültig.',
  verifyButton: 'Diese Adressen prüfen',
  checkOneButton: 'Eine Adresse prüfen',
  checkOneHref: '/de/email-adresse-pruefen',
  bulkTitle: 'CSV hochladen oder Zeilen einfügen (bis zu 5.000)',
  uploadButton: 'CSV-Datei hochladen',
  pasteLabel: 'Oder CSV-Zeilen einfügen:',
  bulkPlaceholder: 'Vorname,Nachname,Domain Anna,Müller,example.com Jonas,Schmidt,acme.org',
  loadedRows: (n) => (n === 1 ? '1 Zeile geladen' : `${n.toLocaleString('de-DE')} Zeilen geladen`),
  headerRow: 'Erste Zeile ist Kopfzeile',
  colFirst: 'Spalte Vorname',
  colLast: 'Spalte Nachname',
  colDomain: 'Spalte Domain',
  colNone: '(Keine / optional)',
  colOption: (n, value) => `Spalte ${n}: ${value}`,
  colEmpty: '(leer)',
  generateBulk: 'Alle Varianten erstellen',
  bulkResultsTitle: (n) => (n === 1 ? '1 Variante erstellt' : `${n.toLocaleString('de-DE')} Varianten erstellt`),
  bulkResultsNote: 'Laden Sie die CSV-Datei mit den Spalten vorname, nachname, domain, email und muster herunter.',
  downloadBulk: 'CSV-Liste herunterladen',
  fileSingle: (domain) => `varianten-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'e-mail-permutator-liste.csv',
  csvHeaderSingle: 'muster,email,domain',
  csvHeaderBulk: 'vorname,nachname,domain,email,muster',
}

const es: PermutatorToolStrings = {
  modeSingle: 'Una persona',
  modeBulk: 'CSV masivo',
  firstName: 'Nombre',
  lastName: 'Apellido',
  middleName: 'Segundo nombre',
  nickname: 'Apodo',
  domains: 'Dominio(s) de la empresa',
  optional: '(opcional)',
  firstPlaceholder: 'Lucía',
  lastPlaceholder: 'García',
  middlePlaceholder: 'María',
  nicknamePlaceholder: 'Lu',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Separa varios dominios con comas. Quitamos automáticamente http://, www., las rutas y la @ inicial.',
  invalidDomains: (list) => `Se ignorarán estos nombres de host no válidos: ${list}`,
  generate: 'Generar formatos',
  resultsTitle: (n) => `Formatos generados (${n.toLocaleString('es-ES')})`,
  resultsNote: 'Ordenados con los estándares de empresa más comunes primero.',
  copyAll: 'Copiar todo',
  copiedAll: 'Todo copiado',
  downloadTxt: 'Descargar TXT',
  downloadCsv: 'Descargar CSV',
  filterPlaceholder: 'Filtrar los formatos generados...',
  copyOne: (email) => `Copiar ${email}`,
  nextText:
    'Son suposiciones. Verifícalas para encontrar la que existe. En los dominios catch-all, la mayoría de los verificadores marcan cada formato como válido.',
  verifyButton: 'Verificar estas direcciones',
  checkOneButton: 'Comprobar una dirección',
  checkOneHref: '/es/validar-correo',
  bulkTitle: 'Sube un CSV o pega filas (hasta 5.000)',
  uploadButton: 'Subir archivo CSV',
  pasteLabel: 'O pega filas CSV:',
  bulkPlaceholder: 'Nombre,Apellido,Dominio Lucía,García,example.com Carlos,López,acme.org',
  loadedRows: (n) => (n === 1 ? '1 fila cargada' : `${n.toLocaleString('es-ES')} filas cargadas`),
  headerRow: 'La primera fila es el encabezado',
  colFirst: 'Columna de nombre',
  colLast: 'Columna de apellido',
  colDomain: 'Columna de dominio',
  colNone: '(Ninguna / opcional)',
  colOption: (n, value) => `Col. ${n}: ${value}`,
  colEmpty: '(vacía)',
  generateBulk: 'Generar todas las combinaciones',
  bulkResultsTitle: (n) => `${n.toLocaleString('es-ES')} combinaciones generadas`,
  bulkResultsNote: 'Descarga el CSV con las columnas nombre, apellido, dominio, email y patron.',
  downloadBulk: 'Descargar CSV completo',
  fileSingle: (domain) => `combinaciones-${domain}`,
  fileFallback: 'correos',
  fileBulk: 'permutador-de-correos-masivo.csv',
  csvHeaderSingle: 'patron,email,dominio',
  csvHeaderBulk: 'nombre,apellido,dominio,email,patron',
}

const ptBr: PermutatorToolStrings = {
  modeSingle: 'Uma pessoa',
  modeBulk: 'CSV em massa',
  firstName: 'Nome',
  lastName: 'Sobrenome',
  middleName: 'Nome do meio',
  nickname: 'Apelido',
  domains: 'Domínio(s) da empresa',
  optional: '(opcional)',
  firstPlaceholder: 'Ana',
  lastPlaceholder: 'Souza',
  middlePlaceholder: 'Maria',
  nicknamePlaceholder: 'Aninha',
  domainsPlaceholder: 'example.com, acme.org',
  domainsHelp: 'Separe vários domínios com vírgulas. Removemos automaticamente http://, www., caminhos e o @ inicial.',
  invalidDomains: (list) => `Estes nomes de host são inválidos e serão ignorados: ${list}`,
  generate: 'Gerar formatos',
  resultsTitle: (n) => `Formatos gerados (${n.toLocaleString('pt-BR')})`,
  resultsNote: 'Em ordem, com os padrões corporativos mais comuns primeiro.',
  copyAll: 'Copiar tudo',
  copiedAll: 'Tudo copiado',
  downloadTxt: 'Baixar TXT',
  downloadCsv: 'Baixar CSV',
  filterPlaceholder: 'Filtrar os formatos gerados...',
  copyOne: (email) => `Copiar ${email}`,
  nextText:
    'São palpites. Verifique-os para encontrar o que existe. Em domínios catch-all, a maioria dos verificadores marca todos os formatos como válidos.',
  verifyButton: 'Verificar estes endereços',
  checkOneButton: 'Verificar um endereço',
  checkOneHref: '/pt-br/verificacao-de-email',
  bulkTitle: 'Envie um CSV ou cole as linhas (até 5.000)',
  uploadButton: 'Enviar arquivo CSV',
  pasteLabel: 'Ou cole as linhas do CSV:',
  bulkPlaceholder: 'Nome,Sobrenome,Domínio Ana,Souza,example.com Pedro,Lima,acme.org',
  loadedRows: (n) => (n === 1 ? '1 linha carregada' : `${n.toLocaleString('pt-BR')} linhas carregadas`),
  headerRow: 'A primeira linha é o cabeçalho',
  colFirst: 'Coluna do nome',
  colLast: 'Coluna do sobrenome',
  colDomain: 'Coluna do domínio',
  colNone: '(Nenhuma / opcional)',
  colOption: (n, value) => `Col. ${n}: ${value}`,
  colEmpty: '(vazia)',
  generateBulk: 'Gerar todas as combinações',
  bulkResultsTitle: (n) => `${n.toLocaleString('pt-BR')} combinações geradas`,
  bulkResultsNote: 'Baixe o CSV com as colunas nome, sobrenome, dominio, email e padrao.',
  downloadBulk: 'Baixar CSV completo',
  fileSingle: (domain) => `combinacoes-${domain}`,
  fileFallback: 'emails',
  fileBulk: 'permutador-de-emails-em-massa.csv',
  csvHeaderSingle: 'padrao,email,dominio',
  csvHeaderBulk: 'nome,sobrenome,dominio,email,padrao',
}

const fr: PermutatorToolStrings = {
  modeSingle: 'Une personne',
  modeBulk: 'CSV en masse',
  firstName: 'Prénom',
  lastName: 'Nom',
  middleName: 'Deuxième prénom',
  nickname: 'Surnom',
  domains: 'Domaine(s) de l’entreprise',
  optional: '(facultatif)',
  firstPlaceholder: 'Marie',
  lastPlaceholder: 'Dupont',
  middlePlaceholder: 'Claire',
  nicknamePlaceholder: 'Mimi',
  domainsPlaceholder: 'exemple.fr, acme.org',
  domainsHelp: 'Séparez plusieurs domaines par des virgules. Nous retirons automatiquement http://, www., les chemins et le @ au début.',
  invalidDomains: (list) => `Les noms d’hôte invalides seront ignorés : ${list}`,
  generate: 'Générer les formats',
  resultsTitle: (n) => `Formats générés (${n.toLocaleString('fr-FR')})`,
  resultsNote: 'Classés avec les conventions d’entreprise les plus courantes en premier.',
  copyAll: 'Tout copier',
  copiedAll: 'Tout est copié',
  downloadTxt: 'Télécharger en TXT',
  downloadCsv: 'Télécharger en CSV',
  filterPlaceholder: 'Filtrer les formats générés...',
  copyOne: (email) => `Copier ${email}`,
  nextText:
    'Ce sont des suppositions. Vérifiez-les pour trouver celle qui existe. Sur les domaines catch-all, la plupart des outils de vérification indiquent que tous les formats sont valides.',
  verifyButton: 'Vérifier ces adresses',
  checkOneButton: 'Vérifier une adresse',
  checkOneHref: '/fr/verifier-adresse-mail',
  bulkTitle: 'Importez un CSV ou collez des lignes (jusqu’à 5 000)',
  uploadButton: 'Importer un fichier CSV',
  pasteLabel: 'Ou collez des lignes CSV :',
  bulkPlaceholder: 'Prénom,Nom,Domaine Marie,Dupont,exemple.fr Luc,Martin,acme.org',
  loadedRows: (n) => (n > 1 ? `${n.toLocaleString('fr-FR')} lignes chargées` : `${n} ligne chargée`),
  headerRow: 'La première ligne est un en-tête',
  colFirst: 'Colonne du prénom',
  colLast: 'Colonne du nom',
  colDomain: 'Colonne du domaine',
  colNone: '(Aucune / facultative)',
  colOption: (n, value) => `Col. ${n} : ${value}`,
  colEmpty: '(vide)',
  generateBulk: 'Générer toutes les permutations',
  bulkResultsTitle: (n) =>
    n > 1 ? `${n.toLocaleString('fr-FR')} permutations générées` : `${n} permutation générée`,
  bulkResultsNote: 'Téléchargez le CSV avec les colonnes prenom, nom, domaine, email et modele.',
  downloadBulk: 'Télécharger le CSV complet',
  fileSingle: (domain) => `permutations-${domain}`,
  fileFallback: 'adresses',
  fileBulk: 'permutateur-email-masse.csv',
  csvHeaderSingle: 'modele,email,domaine',
  csvHeaderBulk: 'prenom,nom,domaine,email,modele',
}

const nl: PermutatorToolStrings = {
  modeSingle: 'Eén persoon',
  modeBulk: 'Bulk CSV',
  firstName: 'Voornaam',
  lastName: 'Achternaam',
  middleName: 'Tweede voornaam',
  nickname: 'Bijnaam',
  domains: 'Bedrijfsdomein(en)',
  optional: '(optioneel)',
  firstPlaceholder: 'Sanne',
  lastPlaceholder: 'Jansen',
  middlePlaceholder: 'Marie',
  nicknamePlaceholder: 'San',
  domainsPlaceholder: 'voorbeeld.nl, acme.org',
  domainsHelp: 'Scheid meerdere domeinen met komma’s. We halen http://, www., paden en een @ aan het begin automatisch weg.',
  invalidDomains: (list) => `Ongeldige hostnamen worden genegeerd: ${list}`,
  generate: 'Formaten maken',
  resultsTitle: (n) => `Gemaakte formaten (${n.toLocaleString('nl-NL')})`,
  resultsNote: 'Gesorteerd met de meest gebruikte bedrijfsstandaarden eerst.',
  copyAll: 'Alles kopiëren',
  copiedAll: 'Alles gekopieerd',
  downloadTxt: 'TXT downloaden',
  downloadCsv: 'CSV downloaden',
  filterPlaceholder: 'Gemaakte formaten filteren...',
  copyOne: (email) => `${email} kopiëren`,
  nextText:
    'Dit zijn gokken. Verifieer ze om het adres te vinden dat bestaat. Op catch-all-domeinen melden de meeste checkers elk formaat als geldig.',
  verifyButton: 'Deze adressen verifiëren',
  checkOneButton: 'Eén adres controleren',
  checkOneHref: '/nl/mailadres-controleren',
  bulkTitle: 'Upload een CSV of plak rijen (maximaal 5.000)',
  uploadButton: 'CSV-bestand uploaden',
  pasteLabel: 'Of plak CSV-rijen:',
  bulkPlaceholder: 'Voornaam,Achternaam,Domein Sanne,Jansen,voorbeeld.nl Thijs,Bakker,acme.org',
  loadedRows: (n) => (n === 1 ? '1 rij geladen' : `${n.toLocaleString('nl-NL')} rijen geladen`),
  headerRow: 'Eerste rij is de kopregel',
  colFirst: 'Kolom voornaam',
  colLast: 'Kolom achternaam',
  colDomain: 'Kolom domein',
  colNone: '(Geen / optioneel)',
  colOption: (n, value) => `Kol. ${n}: ${value}`,
  colEmpty: '(leeg)',
  generateBulk: 'Alle combinaties maken',
  bulkResultsTitle: (n) => (n === 1 ? '1 combinatie gemaakt' : `${n.toLocaleString('nl-NL')} combinaties gemaakt`),
  bulkResultsNote: 'Download de CSV met de kolommen voornaam, achternaam, domein, email en patroon.',
  downloadBulk: 'Bulk-CSV downloaden',
  fileSingle: (domain) => `combinaties-${domain}`,
  fileFallback: 'e-mailadressen',
  fileBulk: 'e-mailadressen-combineren-bulk.csv',
  csvHeaderSingle: 'patroon,email,domein',
  csvHeaderBulk: 'voornaam,achternaam,domein,email,patroon',
}

/** Polish plural form: 1 wiersz, 2 wiersze, 5 wierszy. */
function plPermForm(n: number, one: string, few: string, many: string): string {
  if (n === 1) return one
  const d = n % 10
  const t = n % 100
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many
}

const pl: PermutatorToolStrings = {
  modeSingle: 'Jedna osoba',
  modeBulk: 'Masowo z CSV',
  firstName: 'Imię',
  lastName: 'Nazwisko',
  middleName: 'Drugie imię',
  nickname: 'Zdrobnienie',
  domains: 'Domeny firmy',
  optional: '(opcjonalnie)',
  firstPlaceholder: 'Anna',
  lastPlaceholder: 'Nowak',
  middlePlaceholder: 'Maria',
  nicknamePlaceholder: 'Ania',
  domainsPlaceholder: 'przyklad.pl, acme.org',
  domainsHelp: 'Oddziel kilka domen przecinkami. Automatycznie usuwamy http://, www., ścieżki i znak @ na początku.',
  invalidDomains: (list) => `Nieprawidłowe nazwy hostów zostaną pominięte: ${list}`,
  generate: 'Generuj formaty',
  resultsTitle: (n) => `Wygenerowane formaty (${n.toLocaleString('pl-PL')})`,
  resultsNote: 'Najpierw najczęstsze standardy firmowe.',
  copyAll: 'Kopiuj wszystkie',
  copiedAll: 'Skopiowano wszystkie',
  downloadTxt: 'Pobierz TXT',
  downloadCsv: 'Pobierz CSV',
  filterPlaceholder: 'Filtruj wygenerowane formaty...',
  copyOne: (email) => `Kopiuj ${email}`,
  nextText:
    'To są przypuszczenia. Zweryfikuj je, aby znaleźć adres, który istnieje. W domenach catch-all większość weryfikatorów uznaje każdy format za prawidłowy.',
  verifyButton: 'Zweryfikuj te adresy',
  checkOneButton: 'Sprawdź jeden adres',
  checkOneHref: '/pl/weryfikator-email',
  bulkTitle: 'Prześlij plik CSV lub wklej wiersze (do 5000)',
  uploadButton: 'Prześlij plik CSV',
  pasteLabel: 'Albo wklej wiersze CSV:',
  bulkPlaceholder: 'Imię,Nazwisko,Domena Anna,Nowak,przyklad.pl Piotr,Wiśniewski,acme.org',
  loadedRows: (n) => `Wczytano ${n.toLocaleString('pl-PL')} ${plPermForm(n, 'wiersz', 'wiersze', 'wierszy')}`,
  headerRow: 'Pierwszy wiersz to nagłówek',
  colFirst: 'Kolumna z imieniem',
  colLast: 'Kolumna z nazwiskiem',
  colDomain: 'Kolumna z domeną',
  colNone: '(Brak / opcjonalnie)',
  colOption: (n, value) => `Kol. ${n}: ${value}`,
  colEmpty: '(puste)',
  generateBulk: 'Generuj wszystkie warianty',
  bulkResultsTitle: (n) => `Wygenerowano ${n.toLocaleString('pl-PL')} ${plPermForm(n, 'wariant', 'warianty', 'wariantów')}`,
  bulkResultsNote: 'Pobierz plik CSV z kolumnami imie, nazwisko, domena, email i wzorzec.',
  downloadBulk: 'Pobierz pełny plik CSV',
  fileSingle: (domain) => `warianty-${domain}`,
  fileFallback: 'adresy',
  fileBulk: 'warianty-adresu-email.csv',
  csvHeaderSingle: 'wzorzec,email,domena',
  csvHeaderBulk: 'imie,nazwisko,domena,email,wzorzec',
}

const id: PermutatorToolStrings = {
  modeSingle: 'Satu Orang',
  modeBulk: 'CSV Massal',
  firstName: 'Nama Depan',
  lastName: 'Nama Belakang',
  middleName: 'Nama Tengah',
  nickname: 'Nama Panggilan',
  domains: 'Domain Perusahaan',
  optional: '(opsional)',
  firstPlaceholder: 'Budi',
  lastPlaceholder: 'Santoso',
  middlePlaceholder: 'Agus',
  nicknamePlaceholder: 'Bud',
  domainsPlaceholder: 'contoh.co.id, acme.org',
  domainsHelp: 'Pisahkan beberapa domain dengan koma. Kami otomatis menghapus http://, www., path, dan @ di awal.',
  invalidDomains: (list) => `Nama host yang tidak valid akan diabaikan: ${list}`,
  generate: 'Buat Format',
  resultsTitle: (n) => `Format yang Dibuat (${n.toLocaleString('id-ID')})`,
  resultsNote: 'Diurutkan dengan standar perusahaan yang paling umum di urutan pertama.',
  copyAll: 'Salin Semua',
  copiedAll: 'Semua Tersalin',
  downloadTxt: 'Unduh TXT',
  downloadCsv: 'Unduh CSV',
  filterPlaceholder: 'Filter format yang dibuat...',
  copyOne: (email) => `Salin ${email}`,
  nextText:
    'Ini adalah tebakan. Verifikasi untuk menemukan alamat yang ada. Di domain catch-all, sebagian besar pemeriksa email menyatakan setiap format valid.',
  verifyButton: 'Verifikasi alamat ini',
  checkOneButton: 'Cek satu alamat',
  checkOneHref: '/id/cek-email-valid',
  bulkTitle: 'Unggah CSV atau Tempel Baris (Hingga 5.000)',
  uploadButton: 'Unggah File CSV',
  pasteLabel: 'Atau tempel baris CSV:',
  bulkPlaceholder: 'Nama Depan,Nama Belakang,Domain Budi,Santoso,contoh.co.id Siti,Rahayu,acme.org',
  loadedRows: (n) => `${n.toLocaleString('id-ID')} baris dimuat`,
  headerRow: 'Baris pertama adalah header',
  colFirst: 'Kolom Nama Depan',
  colLast: 'Kolom Nama Belakang',
  colDomain: 'Kolom Domain',
  colNone: '(Tidak Ada / Opsional)',
  colOption: (n, value) => `Kol ${n}: ${value}`,
  colEmpty: '(kosong)',
  generateBulk: 'Buat Semua Kombinasi',
  bulkResultsTitle: (n) => `${n.toLocaleString('id-ID')} kombinasi dibuat`,
  bulkResultsNote: 'Unduh CSV dengan kolom nama_depan, nama_belakang, domain, email, dan pola.',
  downloadBulk: 'Unduh CSV Massal',
  fileSingle: (domain) => `kombinasi-${domain}`,
  fileFallback: 'email',
  fileBulk: 'kombinasi-alamat-email-massal.csv',
  csvHeaderSingle: 'pola,email,domain',
  csvHeaderBulk: 'nama_depan,nama_belakang,domain,email,pola',
}

export const PERMUTATOR_TOOL_STRINGS: Partial<Record<Locale, PermutatorToolStrings>> & { en: PermutatorToolStrings } = {
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

export function permutatorToolStrings(locale: Locale): PermutatorToolStrings {
  return PERMUTATOR_TOOL_STRINGS[locale] ?? en
}
