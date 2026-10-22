// Labels and messages of the email extractor tool
// (components/tools/EmailExtractor/EmailExtractorTool.tsx), one object per
// language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/emailExtractorStrings.ts.
//
// English is the original wording moved here unchanged. The download file names
// and the CSV header row are user-visible, so they are here too.
//
// The background worker (extractor.worker.ts) sends no text: on failure it sends
// a code, and the tool then reruns the extraction on the main thread without
// showing a message. The progress lines come from the tool itself (readingFiles,
// readingFile, processing).

import type { Locale } from '@/lib/i18n/clusters'

export interface ExtractorToolStrings {
  inputLabel: string
  clearAll: string
  /** The drop box line: before, the "browse" link text, after. `after` may be empty. */
  dropBefore: string
  dropLink: string
  dropAfter: string
  supports: string
  placeholder: string
  /** Overlay text while the worker runs and no file progress line is set. */
  processing: string
  readingFiles: string
  /** Progress while reading the files: name, its position (from 1) and the number of files. */
  readingFile: (name: string, index: number, total: number) => string
  /** Shown in an alert when a file can't be read. */
  fileError: string
  optDeduplicate: string
  optLowercase: string
  optWrittenOut: string
  optHideRole: string
  sortLabel: string
  sortNone: string
  sortAlpha: string
  sortDomain: string
  domainFilters: string
  includeLabel: string
  includePlaceholder: string
  excludeLabel: string
  excludePlaceholder: string
  /** Label under the count, with duplicates removed. */
  uniqueAddresses: string
  /** Label under the count, with duplicates kept. */
  addressesListed: string
  totalDetected: string
  copied: string
  copyList: string
  copyComma: string
  downloadTxt: string
  downloadCsv: string
  topDomains: string
  /** After the first ten domain chips: the number of domains not shown. */
  moreDomains: (n: number) => string
  thIndex: string
  thEmail: string
  thDomain: string
  thTld: string
  /** Pagination: first and last row shown, and the number of rows. */
  showing: (from: number, to: number, total: number) => string
  nextTitle: string
  nextText: string
  verifyButton: string
  checkOneButton: string
  /** The single-address checker page in this language. */
  checkOneHref: string
  noResults: string
  /** Download file names. */
  fileTxt: string
  fileCsv: string
  /** First row of the CSV download. Three columns: email, domain, top-level domain. */
  csvHeader: string
}

const en: ExtractorToolStrings = {
  inputLabel: 'Paste text or drop files',
  clearAll: 'Clear all',
  dropBefore: 'Drop files here, or ',
  dropLink: 'browse',
  dropAfter: '',
  supports: 'Supports TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF, and log files',
  placeholder: 'Paste raw text, HTML source code, document content, or contact lists with addresses like anna@example.com...',
  processing: 'Processing in background worker...',
  readingFiles: 'Reading files...',
  readingFile: (name, index, total) => `Reading ${name} (${index}/${total})...`,
  fileError: 'Could not read one of the uploaded files. Please check the file format.',
  optDeduplicate: 'Remove duplicates',
  optLowercase: 'Lowercase whole address',
  optWrittenOut: 'Convert written-out ([at], [dot])',
  optHideRole: 'Hide role addresses (info@, support@)',
  sortLabel: 'Sort:',
  sortNone: 'Appearance order',
  sortAlpha: 'Alphabetical (A-Z)',
  sortDomain: 'By Domain',
  domainFilters: 'Domain filters',
  includeLabel: 'Include only these domains (comma-separated):',
  includePlaceholder: 'e.g. example.com, company.com',
  excludeLabel: 'Exclude these domains (comma-separated):',
  excludePlaceholder: 'e.g. mailinator.com, tempmail.com',
  uniqueAddresses: 'Unique addresses',
  addressesListed: 'Addresses listed',
  totalDetected: 'Total detected',
  copied: 'Copied',
  copyList: 'Copy list',
  copyComma: 'Copy comma-separated',
  downloadTxt: 'Download TXT',
  downloadCsv: 'Download CSV',
  topDomains: 'Top domains detected:',
  moreDomains: (n) => `+${n} more domains`,
  thIndex: '#',
  thEmail: 'Email Address',
  thDomain: 'Domain',
  thTld: 'TLD',
  showing: (from, to, total) => `Showing ${from} to ${to} of ${total}`,
  nextTitle: 'Next step: verify these addresses before sending',
  nextText:
    "Finding an address doesn't tell you whether the mailbox exists. Check whether they are valid or clean a full list with 1,000 free credits.",
  verifyButton: 'Verify these addresses',
  checkOneButton: 'Check one address',
  checkOneHref: '/email-checker',
  noResults: 'No valid email addresses were found with the current filter settings.',
  fileTxt: 'extracted-emails.txt',
  fileCsv: 'extracted-emails.csv',
  csvHeader: 'Email,Domain,Top-Level Domain',
}

const deTool: ExtractorToolStrings = {
  inputLabel: 'Text einfügen oder Dateien ablegen',
  clearAll: 'Alles löschen',
  dropBefore: 'Dateien hier ablegen oder ',
  dropLink: 'auswählen',
  dropAfter: '',
  supports: 'Unterstützt TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF und Log-Dateien',
  placeholder: 'Fügen Sie Rohtext, HTML-Quellcode, Dokumentinhalte oder Kontaktlisten mit Adressen wie anna@beispiel.de ein...',
  processing: 'Wird im Hintergrund verarbeitet...',
  readingFiles: 'Dateien werden gelesen...',
  readingFile: (name, index, total) => `${name} wird gelesen (${index}/${total})...`,
  fileError: 'Eine der Dateien ließ sich nicht lesen. Bitte prüfen Sie das Dateiformat.',
  optDeduplicate: 'Duplikate entfernen',
  optLowercase: 'Ganze Adresse in Kleinbuchstaben',
  optWrittenOut: 'Ausgeschriebene Adressen umwandeln ([at], [dot])',
  optHideRole: 'Rollenadressen ausblenden (info@, support@)',
  sortLabel: 'Sortierung:',
  sortNone: 'Reihenfolge im Text',
  sortAlpha: 'Alphabetisch (A-Z)',
  sortDomain: 'Nach Domain',
  domainFilters: 'Domain-Filter',
  includeLabel: 'Nur diese Domains einbeziehen (kommagetrennt):',
  includePlaceholder: 'z. B. beispiel.de, firma.de',
  excludeLabel: 'Diese Domains ausschließen (kommagetrennt):',
  excludePlaceholder: 'z. B. mailinator.com, tempmail.com',
  uniqueAddresses: 'Eindeutige Adressen',
  addressesListed: 'Aufgelistete Adressen',
  totalDetected: 'Insgesamt gefunden',
  copied: 'Kopiert',
  copyList: 'Liste kopieren',
  copyComma: 'Kommagetrennt kopieren',
  downloadTxt: 'TXT herunterladen',
  downloadCsv: 'CSV herunterladen',
  topDomains: 'Häufigste Domains:',
  // "+1 weitere Domain", "+12 weitere Domains".
  moreDomains: (n) => `+${n.toLocaleString('de-DE')} weitere ${n === 1 ? 'Domain' : 'Domains'}`,
  thIndex: '#',
  thEmail: 'E-Mail-Adresse',
  thDomain: 'Domain',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Angezeigt: ${from.toLocaleString('de-DE')} bis ${to.toLocaleString('de-DE')} von ${total.toLocaleString('de-DE')}`,
  nextTitle: 'Nächster Schritt: Prüfen Sie diese Adressen vor dem Versand',
  nextText:
    'Eine gefundene Adresse zeigt nicht, ob das Postfach existiert. Prüfen Sie, ob die Adressen gültig sind, oder bereinigen Sie eine ganze Liste mit 1.000 Gratis-Credits.',
  verifyButton: 'Diese Adressen prüfen',
  checkOneButton: 'Eine Adresse prüfen',
  checkOneHref: '/de/email-adresse-pruefen',
  noResults: 'Mit den aktuellen Filtern wurden keine gültigen E-Mail-Adressen gefunden.',
  fileTxt: 'extrahierte-e-mails.txt',
  fileCsv: 'extrahierte-e-mails.csv',
  csvHeader: 'E-Mail,Domain,Top-Level-Domain',
}

const ptBrTool: ExtractorToolStrings = {
  inputLabel: 'Cole um texto ou arraste arquivos',
  clearAll: 'Limpar tudo',
  dropBefore: 'Arraste arquivos para cá ou ',
  dropLink: 'clique para escolher',
  dropAfter: '',
  supports: 'Aceita arquivos TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF e de log',
  placeholder: 'Cole texto puro, código-fonte HTML, conteúdo de documentos ou listas de contatos com endereços como ana@exemplo.com.br...',
  processing: 'Processando em segundo plano...',
  readingFiles: 'Lendo os arquivos...',
  readingFile: (name, index, total) => `Lendo ${name} (${index}/${total})...`,
  fileError: 'Não foi possível ler um dos arquivos carregados. Confira o formato do arquivo.',
  optDeduplicate: 'Remover duplicados',
  optLowercase: 'Endereço inteiro em minúsculas',
  optWrittenOut: 'Converter endereços por extenso ([at], [dot])',
  optHideRole: 'Ocultar endereços de função (info@, support@)',
  sortLabel: 'Ordenar:',
  sortNone: 'Ordem em que aparecem',
  sortAlpha: 'Alfabética (A-Z)',
  sortDomain: 'Por domínio',
  domainFilters: 'Filtros de domínio',
  includeLabel: 'Incluir só estes domínios (separados por vírgula):',
  includePlaceholder: 'ex.: exemplo.com.br, empresa.com.br',
  excludeLabel: 'Excluir estes domínios (separados por vírgula):',
  excludePlaceholder: 'ex.: mailinator.com, tempmail.com',
  uniqueAddresses: 'Endereços únicos',
  addressesListed: 'Endereços listados',
  totalDetected: 'Total encontrado',
  copied: 'Copiado',
  copyList: 'Copiar lista',
  copyComma: 'Copiar separados por vírgula',
  downloadTxt: 'Baixar TXT',
  downloadCsv: 'Baixar CSV',
  topDomains: 'Principais domínios encontrados:',
  moreDomains: (n) => `+${n.toLocaleString('pt-BR')} ${n === 1 ? 'outro domínio' : 'outros domínios'}`,
  thIndex: '#',
  thEmail: 'Endereço de e-mail',
  thDomain: 'Domínio',
  thTld: 'TLD',
  showing: (from, to, total) => `Mostrando ${from.toLocaleString('pt-BR')} a ${to.toLocaleString('pt-BR')} de ${total.toLocaleString('pt-BR')}`,
  nextTitle: 'Próximo passo: verifique estes endereços antes de enviar',
  nextText:
    'Encontrar um endereço não mostra se a caixa de e-mail existe. Confira se os endereços são válidos ou limpe uma lista inteira com 1.000 créditos grátis.',
  verifyButton: 'Verificar estes endereços',
  checkOneButton: 'Verificar um endereço',
  checkOneHref: '/pt-br/verificacao-de-email',
  noResults: 'Nenhum endereço de e-mail válido foi encontrado com os filtros atuais.',
  fileTxt: 'emails-extraidos.txt',
  fileCsv: 'emails-extraidos.csv',
  csvHeader: 'E-mail,Domínio,Domínio de topo',
}

export const EXTRACTOR_TOOL_STRINGS: Partial<Record<Locale, ExtractorToolStrings>> & { en: ExtractorToolStrings } = { en, de: deTool, 'pt-br': ptBrTool }

export function extractorToolStrings(locale: Locale): ExtractorToolStrings {
  return EXTRACTOR_TOOL_STRINGS[locale] ?? en
}
