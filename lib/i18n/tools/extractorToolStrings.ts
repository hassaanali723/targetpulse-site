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


const frTool: ExtractorToolStrings = {
  inputLabel: 'Collez du texte ou déposez des fichiers',
  clearAll: 'Tout effacer',
  dropBefore: 'Glissez des fichiers ici ou ',
  dropLink: 'parcourez votre appareil',
  dropAfter: '',
  supports: 'Formats acceptés : TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF et fichiers de log',
  placeholder: 'Collez du texte brut, code source HTML, documents ou listes de contacts contenant des adresses comme marie@exemple.fr...',
  processing: 'Extraction en cours en arrière-plan...',
  readingFiles: 'Lecture des fichiers...',
  readingFile: (name, index, total) => `Lecture de ${name} (${index}/${total})...`,
  fileError: 'Impossible de lire l’un des fichiers sélectionnés. Veuillez vérifier son format.',
  optDeduplicate: 'Supprimer les doublons',
  optLowercase: 'Convertir les adresses en minuscules',
  optWrittenOut: 'Convertir les adresses écrites ([at], [dot])',
  optHideRole: 'Masquer les adresses de rôle (info@, support@)',
  sortLabel: 'Trier par :',
  sortNone: 'Ordre d’apparition',
  sortAlpha: 'Ordre alphabétique (A-Z)',
  sortDomain: 'Par domaine',
  domainFilters: 'Filtres de domaine',
  includeLabel: 'Inclure uniquement ces domaines (séparés par des virgules) :',
  includePlaceholder: 'ex. exemple.fr, societe.fr',
  excludeLabel: 'Exclure ces domaines (séparés par des virgules) :',
  excludePlaceholder: 'ex. jetable.fr, mailinator.com',
  uniqueAddresses: 'Adresses uniques',
  addressesListed: 'Adresses listées',
  totalDetected: 'Total détecté',
  copied: 'Copié',
  copyList: 'Copier la liste',
  copyComma: 'Copier séparé par des virgules',
  downloadTxt: 'Télécharger TXT',
  downloadCsv: 'Télécharger CSV',
  topDomains: 'Principaux domaines détectés :',
  moreDomains: (n) => `+${n.toLocaleString('fr-FR')} autre${n === 1 ? ' domaine' : 's domaines'}`,
  thIndex: '#',
  thEmail: 'Adresse e-mail',
  thDomain: 'Domaine',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Affichage de ${from.toLocaleString('fr-FR')} à ${to.toLocaleString('fr-FR')} sur ${total.toLocaleString('fr-FR')}`,
  nextTitle: 'Étape suivante : Vérifiez ces adresses avant tout envoi',
  nextText:
    'Détecter une adresse ne prouve pas que la boîte existe toujours. Vérifiez leur validité ou nettoyez toute votre liste avec 1 000 crédits offerts.',
  verifyButton: 'Vérifier ces adresses',
  checkOneButton: 'Vérifier une adresse',
  checkOneHref: '/fr/verifier-adresse-mail',
  noResults: 'Aucune adresse e-mail valide n’a été trouvée avec les filtres sélectionnés.',
  fileTxt: 'emails-extraits.txt',
  fileCsv: 'emails-extraits.csv',
  csvHeader: 'E-mail,Domaine,Domaine de premier niveau',
}

const esTool: ExtractorToolStrings = {
  inputLabel: 'Pegue texto o arrastre archivos',
  clearAll: 'Borrar todo',
  dropBefore: 'Arrastre archivos aquí o ',
  dropLink: 'seleccione de su equipo',
  dropAfter: '',
  supports: 'Formatos compatibles: TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF y archivos de registro',
  placeholder: 'Pegue texto sin formato, código HTML, listas de contactos o documentos con direcciones como carmen@ejemplo.es...',
  processing: 'Extrayendo en segundo plano...',
  readingFiles: 'Leyendo archivos...',
  readingFile: (name, index, total) => `Leyendo ${name} (${index}/${total})...`,
  fileError: 'No se pudo leer uno de los archivos cargados. Compruebe el formato.',
  optDeduplicate: 'Eliminar duplicados',
  optLowercase: 'Convertir todo a minúsculas',
  optWrittenOut: 'Convertir direcciones ofuscadas ([at], [dot])',
  optHideRole: 'Ocultar correos genéricos (info@, soporte@)',
  sortLabel: 'Ordenar por:',
  sortNone: 'Orden de aparición',
  sortAlpha: 'Alfabético (A-Z)',
  sortDomain: 'Por dominio',
  domainFilters: 'Filtros de dominio',
  includeLabel: 'Incluir solo estos dominios (separados por coma):',
  includePlaceholder: 'ej. ejemplo.es, empresa.es',
  excludeLabel: 'Excluir estos dominios (separados por coma):',
  excludePlaceholder: 'ej. temporal.com, mailinator.com',
  uniqueAddresses: 'Direcciones únicas',
  addressesListed: 'Direcciones listadas',
  totalDetected: 'Total detectado',
  copied: 'Copiado',
  copyList: 'Copiar lista',
  copyComma: 'Copiar separados por comas',
  downloadTxt: 'Descargar TXT',
  downloadCsv: 'Descargar CSV',
  topDomains: 'Principales dominios encontrados:',
  moreDomains: (n) => `+${n.toLocaleString('es-ES')} ${n === 1 ? 'dominio más' : 'dominios más'}`,
  thIndex: '#',
  thEmail: 'Dirección de correo',
  thDomain: 'Dominio',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Mostrando de ${from.toLocaleString('es-ES')} a ${to.toLocaleString('es-ES')} de ${total.toLocaleString('es-ES')}`,
  nextTitle: 'Siguiente paso: Compruebe estas direcciones antes del envío',
  nextText:
    'Extraer un correo no asegura que la cuenta siga activa. Compruebe la validez de sus contactos o limpie su lista entera con 1.000 créditos gratis.',
  verifyButton: 'Verificar estas direcciones',
  checkOneButton: 'Verificar un correo',
  checkOneHref: '/es/validar-correo',
  noResults: 'No se encontraron direcciones de correo válidas con los filtros actuales.',
  fileTxt: 'emails-extraidos.txt',
  fileCsv: 'emails-extraidos.csv',
  csvHeader: 'Email,Dominio,TLD',
}

const itTool: ExtractorToolStrings = {
  inputLabel: 'Incolla il testo o trascina i file',
  clearAll: 'Cancella tutto',
  dropBefore: 'Trascina i file qui oppure ',
  dropLink: 'seleziona dal computer',
  dropAfter: '',
  supports: 'Supporta file TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF e log',
  placeholder: 'Incolla testo, codice HTML, elenchi di contatti o documenti con indirizzi come laura@esempio.it...',
  processing: 'Estrazione in corso in background...',
  readingFiles: 'Lettura dei file in corso...',
  readingFile: (name, index, total) => `Lettura di ${name} (${index}/${total})...`,
  fileError: 'Impossibile leggere uno dei file caricati. Verifica il formato.',
  optDeduplicate: 'Rimuovi duplicati',
  optLowercase: 'Converti tutto in minuscolo',
  optWrittenOut: 'Converti indirizzi offuscati ([at], [dot])',
  optHideRole: 'Nascondi indirizzi di ruolo (info@, supporto@)',
  sortLabel: 'Ordina per:',
  sortNone: 'Ordine di comparsa',
  sortAlpha: 'Alfabetico (A-Z)',
  sortDomain: 'Per dominio',
  domainFilters: 'Filtri di dominio',
  includeLabel: 'Includi solo questi domini (separati da virgola):',
  includePlaceholder: 'es. esempio.it, azienda.it',
  excludeLabel: 'Escludi questi domini (separati da virgola):',
  excludePlaceholder: 'es. tempmail.com, mailinator.com',
  uniqueAddresses: 'Indirizzi unici',
  addressesListed: 'Indirizzi elencati',
  totalDetected: 'Totale rilevato',
  copied: 'Copiato',
  copyList: 'Copia elenco',
  copyComma: 'Copia separati da virgola',
  downloadTxt: 'Scarica TXT',
  downloadCsv: 'Scarica CSV',
  topDomains: 'Domini principali trovati:',
  moreDomains: (n) => `+${n.toLocaleString('it-IT')} ${n === 1 ? 'altro dominio' : 'altri domini'}`,
  thIndex: '#',
  thEmail: 'Indirizzo email',
  thDomain: 'Dominio',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Mostrati da ${from.toLocaleString('it-IT')} a ${to.toLocaleString('it-IT')} di ${total.toLocaleString('it-IT')}`,
  nextTitle: 'Passo successivo: Verifica questi indirizzi prima dell’invio',
  nextText:
    'Estrarre un indirizzo non garantisce che la casella esista. Verifica la validità dei tuoi contatti o pulisci un’intera lista con 1.000 crediti gratuiti.',
  verifyButton: 'Verifica questi indirizzi',
  checkOneButton: 'Verifica un indirizzo',
  checkOneHref: '/it/verifica-email',
  noResults: 'Nessun indirizzo email valido trovato con i filtri correnti.',
  fileTxt: 'email-estratte.txt',
  fileCsv: 'email-estratte.csv',
  csvHeader: 'Email,Dominio,TLD',
}

const nlTool: ExtractorToolStrings = {
  inputLabel: 'Plak tekst of sleep bestanden',
  clearAll: 'Alles wissen',
  dropBefore: 'Sleep bestanden hierheen of ',
  dropLink: 'blader op uw apparaat',
  dropAfter: '',
  supports: 'Ondersteunt TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF en logbestanden',
  placeholder: 'Plak platte tekst, HTML-broncode, documenten of contactlijsten met adressen zoals lisa@voorbeeld.nl...',
  processing: 'Bezig met extraheren op de achtergrond...',
  readingFiles: 'Bestanden inlezen...',
  readingFile: (name, index, total) => `Inlezen van ${name} (${index}/${total})...`,
  fileError: 'Kan een van de geüploade bestanden niet openen. Controleer het bestandsformaat.',
  optDeduplicate: 'Duplicaten verwijderen',
  optLowercase: 'Alle adressen in kleine letters',
  optWrittenOut: 'Uitgeschreven adressen converteren ([at], [dot])',
  optHideRole: 'Rol-adressen verbergen (info@, support@)',
  sortLabel: 'Sorteren op:',
  sortNone: 'Volgorde van aantreffen',
  sortAlpha: 'Alfabetisch (A-Z)',
  sortDomain: 'Op domein',
  domainFilters: 'Domeinfilters',
  includeLabel: 'Alleen deze domeinen opnemen (komma-gescheiden):',
  includePlaceholder: 'bijv. voorbeeld.nl, bedrijf.nl',
  excludeLabel: 'Deze domeinen uitsluiten (komma-gescheiden):',
  excludePlaceholder: 'bijv. mailinator.com, tempmail.com',
  uniqueAddresses: 'Unieke adressen',
  addressesListed: 'Getoonde adressen',
  totalDetected: 'Totaal gevonden',
  copied: 'Gekopieerd',
  copyList: 'Lijst kopiëren',
  copyComma: 'Komma-gescheiden kopiëren',
  downloadTxt: 'TXT downloaden',
  downloadCsv: 'CSV downloaden',
  topDomains: 'Meest voorkomende domeinen:',
  moreDomains: (n) => `+${n.toLocaleString('nl-NL')} ${n === 1 ? 'ander domein' : 'andere domeinen'}`,
  thIndex: '#',
  thEmail: 'E-mailadres',
  thDomain: 'Domein',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Weergave van ${from.toLocaleString('nl-NL')} tot ${to.toLocaleString('nl-NL')} van ${total.toLocaleString('nl-NL')}`,
  nextTitle: 'Volgende stap: Controleer deze adressen voor verzending',
  nextText:
    'Een geëxtraheerd adres garandeert niet dat de inbox bestaat. Controleer de geldigheid van uw adressen of reinig een hele lijst met 1.000 gratis credits.',
  verifyButton: 'Deze adressen controleren',
  checkOneButton: 'Eén adres controleren',
  checkOneHref: '/nl/email-checker',
  noResults: 'Geen geldige e-mailadressen gevonden met de huidige filters.',
  fileTxt: 'geextraheerde-emails.txt',
  fileCsv: 'geextraheerde-emails.csv',
  csvHeader: 'E-mail,Domein,TLD',
}

const plTool: ExtractorToolStrings = {
  inputLabel: 'Wklej tekst lub przeciągnij pliki',
  clearAll: 'Wyczyść wszystko',
  dropBefore: 'Przeciągnij pliki tutaj lub ',
  dropLink: 'wybierz z dysku',
  dropAfter: '',
  supports: 'Obsługuje formaty TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF oraz pliki logów',
  placeholder: 'Wklej tekst, kod HTML, dokumenty lub listy kontaktów z adresami takimi jak anna@przyklad.pl...',
  processing: 'Ekstrakcja w toku w tle...',
  readingFiles: 'Wczytywanie plików...',
  readingFile: (name, index, total) => `Wczytywanie ${name} (${index}/${total})...`,
  fileError: 'Nie udało się odczytać jednego z plików. Sprawdź format pliku.',
  optDeduplicate: 'Usuń duplikaty',
  optLowercase: 'Konwertuj na małe litery',
  optWrittenOut: 'Konwertuj adresy zapisane słownie ([at], [dot])',
  optHideRole: 'Ukryj adresy funkcyjne (info@, pomoc@)',
  sortLabel: 'Sortuj według:',
  sortNone: 'Kolejności wystąpienia',
  sortAlpha: 'Alfabetycznie (A-Z)',
  sortDomain: 'Według domen',
  domainFilters: 'Filtry domen',
  includeLabel: 'Uwzględnij tylko te domeny (oddzielone przecinkami):',
  includePlaceholder: 'np. przyklad.pl, firma.pl',
  excludeLabel: 'Wyklucz te domeny (oddzielone przecinkami):',
  excludePlaceholder: 'np. mailinator.com, tempmail.com',
  uniqueAddresses: 'Unikalne adresy',
  addressesListed: 'Wyświetlone adresy',
  totalDetected: 'Łącznie wykryto',
  copied: 'Skopiowano',
  copyList: 'Kopiuj listę',
  copyComma: 'Kopiuj z przecinkami',
  downloadTxt: 'Pobierz TXT',
  downloadCsv: 'Pobierz CSV',
  topDomains: 'Najczęstsze domeny:',
  moreDomains: (n) => `+${n.toLocaleString('pl-PL')} ${n === 1 ? 'inna domena' : 'inne domeny'}`,
  thIndex: '#',
  thEmail: 'Adres email',
  thDomain: 'Domena',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Wyświetlono od ${from.toLocaleString('pl-PL')} do ${to.toLocaleString('pl-PL')} z ${total.toLocaleString('pl-PL')}`,
  nextTitle: 'Następny krok: Sprawdź te adresy przed wysyłką',
  nextText:
    'Wyodrębnienie adresu nie gwarantuje, że skrzynka pocztowa istnieje. Sprawdź poprawność adresów lub oczyść całą bazę za pomocą 1 000 darmowych kredytów.',
  verifyButton: 'Sprawdź te adresy',
  checkOneButton: 'Sprawdź pojedynczy adres',
  checkOneHref: '/pl/weryfikator-email',
  noResults: 'Nie znaleziono prawidłowych adresów email przy obecnych filtrach.',
  fileTxt: 'wyekstrahowane-maile.txt',
  fileCsv: 'wyekstrahowane-maile.csv',
  csvHeader: 'Email,Domena,TLD',
}

const idTool: ExtractorToolStrings = {
  inputLabel: 'Tempel teks atau seret file',
  clearAll: 'Hapus semua',
  dropBefore: 'Seret file ke sini atau ',
  dropLink: 'pilih dari perangkat Anda',
  dropAfter: '',
  supports: 'Mendukung file TXT, CSV, TSV, XLSX, XLS, HTML, JSON, EML, VCF, dan file log',
  placeholder: 'Tempel teks biasa, kode HTML, dokumen, atau daftar kontak dengan alamat seperti dewi@contoh.id...',
  processing: 'Mengekstrak di latar belakang...',
  readingFiles: 'Membaca file...',
  readingFile: (name, index, total) => `Membaca ${name} (${index}/${total})...`,
  fileError: 'Gagal membaca salah satu file yang diunggah. Periksa format file.',
  optDeduplicate: 'Hapus duplikat',
  optLowercase: 'Ubah ke huruf kecil',
  optWrittenOut: 'Konversi alamat format tulisan ([at], [dot])',
  optHideRole: 'Sembunyikan alamat peran (info@, support@)',
  sortLabel: 'Urutkan berdasarkan:',
  sortNone: 'Urutan kemunculan',
  sortAlpha: 'Alfabet (A-Z)',
  sortDomain: 'Berdasarkan domain',
  domainFilters: 'Filter domain',
  includeLabel: 'Hanya sertakan domain ini (pisahkan dengan koma):',
  includePlaceholder: 'contoh: contoh.id, bisnis.id',
  excludeLabel: 'Kecualikan domain ini (pisahkan dengan koma):',
  excludePlaceholder: 'contoh: mailinator.com, tempmail.com',
  uniqueAddresses: 'Alamat unik',
  addressesListed: 'Alamat ditampilkan',
  totalDetected: 'Total terdeteksi',
  copied: 'Disalin',
  copyList: 'Salin daftar',
  copyComma: 'Salin dipisahkan koma',
  downloadTxt: 'Unduh TXT',
  downloadCsv: 'Unduh CSV',
  topDomains: 'Domain terbanyak ditemukan:',
  moreDomains: (n) => `+${n.toLocaleString('id-ID')} domain lainnya`,
  thIndex: '#',
  thEmail: 'Alamat email',
  thDomain: 'Domain',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `Menampilkan ${from.toLocaleString('id-ID')} hingga ${to.toLocaleString('id-ID')} dari ${total.toLocaleString('id-ID')}`,
  nextTitle: 'Langkah berikutnya: Verifikasi alamat ini sebelum mengirim email',
  nextText:
    'Alamat yang diekstrak belum tentu memiliki kotak surat aktif. Uji keaktifan email atau bersihkan daftar kontak Anda dengan 1.000 kredit gratis.',
  verifyButton: 'Verifikasi alamat ini',
  checkOneButton: 'Periksa satu alamat',
  checkOneHref: '/id/cek-email-valid',
  noResults: 'Tidak ada alamat email valid yang ditemukan dengan filter saat ini.',
  fileTxt: 'email-terekstrak.txt',
  fileCsv: 'email-terekstrak.csv',
  csvHeader: 'Email,Domain,TLD',
}

const jaTool: ExtractorToolStrings = {
  inputLabel: 'テキストを貼り付けるか、ファイルをドロップ',
  clearAll: 'すべてクリア',
  dropBefore: 'ここにファイルをドロップするか、',
  dropLink: 'ファイルを選択',
  dropAfter: 'してください',
  supports: 'TXT、CSV、TSV、XLSX、XLS、HTML、JSON、EML、VCF、ログファイルに対応',
  placeholder: 'テキスト、HTMLのソースコード、文書の内容、または anna@example.com のようなアドレスを含む連絡先リストを貼り付けてください...',
  processing: 'バックグラウンドで処理しています...',
  readingFiles: 'ファイルを読み込んでいます...',
  readingFile: (name, index, total) => `${name} を読み込んでいます（${index}/${total}）...`,
  fileError: 'アップロードしたファイルのうち1つを読み込めませんでした。ファイル形式を確認してください。',
  optDeduplicate: '重複を削除',
  optLowercase: 'アドレス全体を小文字にする',
  optWrittenOut: '文字で書かれたアドレスを変換（[at]、[dot]）',
  optHideRole: '役割アドレスを非表示（info@、support@）',
  sortLabel: '並べ替え：',
  sortNone: '出現順',
  sortAlpha: 'アルファベット順（A-Z）',
  sortDomain: 'ドメイン順',
  domainFilters: 'ドメインの絞り込み',
  includeLabel: '次のドメインだけを含める（カンマ区切り）：',
  includePlaceholder: '例：example.com, company.com',
  excludeLabel: '次のドメインを除外する（カンマ区切り）：',
  excludePlaceholder: '例：mailinator.com, tempmail.com',
  uniqueAddresses: '重複なしのアドレス',
  addressesListed: '表示中のアドレス',
  totalDetected: '検出した総数',
  copied: 'コピーしました',
  copyList: 'リストをコピー',
  copyComma: 'カンマ区切りでコピー',
  downloadTxt: 'TXTをダウンロード',
  downloadCsv: 'CSVをダウンロード',
  topDomains: '検出数の多いドメイン：',
  moreDomains: (n) => `ほか${n.toLocaleString('ja-JP')}件のドメイン`,
  thIndex: '#',
  thEmail: 'メールアドレス',
  thDomain: 'ドメイン',
  thTld: 'TLD',
  showing: (from, to, total) =>
    `${total.toLocaleString('ja-JP')}件中${from.toLocaleString('ja-JP')}〜${to.toLocaleString('ja-JP')}件を表示`,
  nextTitle: '次のステップ：送信前にこれらのアドレスを検証する',
  nextText:
    'アドレスが見つかっても、メールボックスが存在するかどうかはわかりません。1,000回分の無料クレジットで、アドレスが有効かを確認したり、リスト全体をクリーニングしたりできます。',
  verifyButton: 'これらのアドレスを検証',
  checkOneButton: '1件だけ確認する',
  checkOneHref: '/ja/email-checker',
  noResults: '現在の絞り込み条件では、有効なメールアドレスが見つかりませんでした。',
  fileTxt: 'extracted-emails.txt',
  fileCsv: 'extracted-emails.csv',
  csvHeader: 'Email,Domain,Top-Level Domain',
}

export const EXTRACTOR_TOOL_STRINGS: Record<Locale, ExtractorToolStrings> = { en, de: deTool, fr: frTool, es: esTool, it: itTool, 'pt-br': ptBrTool, nl: nlTool, pl: plTool, id: idTool, ja: jaTool }

export function extractorToolStrings(locale: Locale): ExtractorToolStrings {
  return EXTRACTOR_TOOL_STRINGS[locale] ?? en
}
