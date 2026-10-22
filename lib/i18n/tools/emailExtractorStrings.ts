// All page copy for the email extractor, one object per language the page ships in.
// The page is components/tools/EmailExtractor/EmailExtractorPage.tsx; the URLs
// live in CLUSTERS.emailExtractor (lib/i18n/clusters.ts). The tool's own labels
// are in lib/i18n/tools/extractorToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists. FAQ answers use the
// same link markup (rendered by FaqAccordion).
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface ExtractorPageStrings {
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
  findsTitle: string
  /** The third paragraph carries a link. */
  findsParas: [string, string, string, string]
  filesTitle: string
  filesPara: string
  beforeTitle: string
  /** The first paragraph carries three links. */
  beforeParas: [string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: ExtractorPageStrings = {
  metaTitle: 'Free Email Extractor: Extract Emails From Text and Files | Giggal.ai',
  ogTitle: 'Free Email Extractor: Extract Emails From Text and Files',
  description:
    'Extract email addresses from text, CSV, Excel or HTML in your browser. Remove duplicates, group by domain and export a clean list. Free, no signup.',
  ogImage: '/tools/email-extractor-og-v2.webp',
  ogAlt: 'Free Email Extractor',
  crumb: 'Free Email Extractor',
  appName: 'Free Email Extractor',
  featureList: [
    'Extract email addresses from text, CSV, Excel or HTML',
    'Remove duplicates and filter by domain',
    'Convert written-out obfuscated addresses',
    'Export to TXT or CSV with domain column',
    'Runs 100% in-browser with Web Worker',
  ],
  h1: 'Free Email Extractor',
  heroIntro: 'Paste text or drop in files and get a clean, deduplicated list of email addresses.',
  howTitle: 'How to extract emails from text',
  howSteps: [
    'Paste text into the box, or drop in one or more files.',
    'Choose your options: remove duplicates, sort, filter by domain or hide role addresses like info@.',
    'Read the results below the box: the list, the counts and the top domains. They update as you type.',
    'Copy the list, or download it as TXT or as a CSV with a domain column.',
  ],
  howNote: 'Nothing you paste or upload leaves your browser, so you can run it on customer exports and internal documents.',
  imageAlt: 'Illustration of email addresses extracted from documents and deduplicated into a tidy list.',
  findsTitle: 'What this email extractor finds, and what it skips',
  findsParas: [
    'The extractor looks for anything shaped like name@domain.tld and then cleans each match. A link like mailto:anna@example.com comes out as anna@example.com, and a comma or bracket stuck to the end of an address is dropped. Retina image names such as logo@2x.png look like emails to a simple pattern, so the tool throws them away, along with other file names like icon@3x.svg.',
    "Pages that hide addresses from bots sometimes write them out as anna [at] example [dot] com. Turn on the written-out option and the tool converts the bracketed forms ([at], (at), {at} and the matching dot versions) back into normal addresses. It's off by default, because looser matching would pull in false positives.",
    'Addresses that differ only in capitals, like Anna@Example.com and anna@example.com, count as one, because the big mail providers treat them as the same mailbox. The reasoning is in [are email addresses case sensitive](/blog/are-email-addresses-case-sensitive).',
    "The tool only finds addresses that appear in your text. It doesn't search the web, guess missing addresses or fetch pages from a URL.",
  ],
  filesTitle: 'Files you can use',
  filesPara:
    "Plain text formats work as they are: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml and .vcf. Excel files (.xlsx and .xls) are read cell by cell. You can drop several files at once and the results are combined into one list. PDF and Word files aren't supported yet; open them, copy the text and paste it into the box.",
  beforeTitle: 'Before you email anyone on the list',
  beforeParas: [
    "Finding an address only proves it was written down somewhere. It doesn't tell you the mailbox still exists, and lists pulled from old documents are full of people who've moved on. Sending to those addresses produces [hard bounces](/blog/hard-bounce-vs-soft-bounce), which hurt your sender reputation. Run the list through [email list cleaning](/email-list-cleaning) before the first send, or test a single address with the [free email checker](/email-checker).",
    "Then think about who you're writing to. Email people who've agreed to hear from you, or where you have another lawful reason to contact them. Privacy and anti-spam rules such as GDPR and CAN-SPAM apply to how you use the list, whatever tool you used to build it.",
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Is this email extractor free?',
      a: 'Yes. There’s no signup and no limit on how many times you run it. Verifying the list afterwards is a separate step, and new Giggal accounts get 1,000 free verification credits.',
    },
    {
      q: 'Is my text uploaded anywhere?',
      a: 'No. The extraction runs in your browser tab, and nothing you paste or upload is sent to our servers. If you add an Excel file, the page loads the code it needs to read spreadsheets, but your file stays on your device.',
    },
    {
      q: 'Can it extract emails from a website URL?',
      a: 'Not yet. Open the page, select everything, copy it and paste it into the box. For addresses that only appear in the page code, paste the page source instead.',
    },
    {
      q: 'Does it check whether the emails are valid?',
      a: 'No. It only finds addresses that appear in your text. To find out whether each mailbox exists, verify the list with [email list cleaning](/email-list-cleaning) or test one address with the [email checker](/email-checker).',
    },
    {
      q: 'How much text can I paste?',
      a: 'Large inputs are fine, including exports of 20 MB or more, because the work runs in a background thread on your device. Very large files take a few seconds, and the page stays usable while they’re processed.',
    },
    {
      q: 'Can I extract emails from Excel or CSV files?',
      a: 'Yes. Drop .xlsx, .xls or .csv files onto the box. Every cell is scanned, so it doesn’t matter which column the addresses are in.',
    },
  ],
  ctaHeadline: 'Ready to verify your extracted contacts?',
  ctaSupporting: 'Check whether mailboxes exist before sending. 1,000 free credits, no card required.',
  ctaButton: 'Verify contacts for free',
}

const de: ExtractorPageStrings = {
  metaTitle: 'Email Extractor: E-Mail-Adressen aus Text extrahieren | Giggal.ai',
  ogTitle: 'Email Extractor: E-Mail-Adressen aus Text extrahieren',
  description:
    'Kostenloser Email Extractor: Extrahieren Sie E-Mail-Adressen aus Text, CSV, Excel oder HTML im Browser und entfernen Sie Duplikate. Ohne Anmeldung.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser Email Extractor von Giggal.ai',
  crumb: 'Email Extractor',
  appName: 'Kostenloser Email Extractor',
  featureList: [
    'E-Mail-Adressen aus Text, CSV, Excel oder HTML extrahieren',
    'Duplikate entfernen und nach Domain filtern',
    'Ausgeschriebene, verschleierte Adressen umwandeln',
    'Export als TXT oder als CSV mit Domain-Spalte',
    'Läuft zu 100 % im Browser, mit Web Worker',
  ],
  h1: 'Email Extractor',
  heroIntro:
    'Fügen Sie Text ein oder legen Sie Dateien ab. Der Email Extractor erstellt daraus eine saubere Liste von E-Mail-Adressen ohne Duplikate.',
  howTitle: 'So extrahieren Sie E-Mail-Adressen aus Text',
  howSteps: [
    'Fügen Sie Text in das Feld ein oder legen Sie eine oder mehrere Dateien ab.',
    'Wählen Sie Ihre Optionen: Duplikate entfernen, sortieren, nach Domain filtern oder Rollenadressen wie info@ ausblenden.',
    'Unter dem Feld sehen Sie die Liste, die Anzahl der Adressen und die häufigsten Domains. Die Ergebnisse aktualisieren sich während der Eingabe.',
    'Kopieren Sie die Liste oder laden Sie sie als TXT oder als CSV mit Domain-Spalte herunter.',
  ],
  howNote:
    'Was Sie einfügen oder hochladen, verlässt Ihren Browser nicht. Sie können den Email Extractor also auch für Kundenexporte und interne Dokumente nutzen.',
  imageAlt:
    'Illustration: Der Email Extractor holt E-Mail-Adressen aus Dokumenten und sammelt sie ohne Duplikate in einer geordneten Liste.',
  findsTitle: 'Was der Email Extractor findet und was er überspringt',
  findsParas: [
    'Das Tool sucht nach allem, was die Form name@domain.tld hat, und bereinigt dann jeden Treffer. Aus einem Link wie mailto:anna@beispiel.de wird anna@beispiel.de. Ein Komma oder eine Klammer direkt am Ende einer Adresse fällt weg. Retina-Bildnamen wie logo@2x.png sehen für ein einfaches Suchmuster wie E-Mail-Adressen aus. Das Tool verwirft sie deshalb, ebenso andere Dateinamen wie icon@3x.svg.',
    'Manche Seiten verbergen Adressen vor Bots und schreiben sie aus, etwa als anna [at] beispiel [dot] de. Schalten Sie in diesem Fall die Option für ausgeschriebene Adressen ein. Das Tool wandelt dann [at], (at), {at} und die passenden dot-Formen wieder in normale Adressen um. Die Option ist standardmäßig aus, weil eine lockerere Suche falsche Treffer liefern würde.',
    'Adressen, die sich nur in der Groß- und Kleinschreibung unterscheiden, zählen als eine, etwa Anna@Beispiel.de und anna@beispiel.de. Die großen E-Mail-Anbieter behandeln sie als dasselbe Postfach. Die Begründung lesen Sie unter [Groß- und Kleinschreibung bei E-Mail-Adressen](/blog/are-email-addresses-case-sensitive).',
    'Das Tool findet nur Adressen, die in Ihrem Text stehen. Es durchsucht nicht das Web, errät keine fehlenden Adressen und ruft keine Seiten über eine URL ab.',
  ],
  filesTitle: 'Dateien, die Sie nutzen können',
  filesPara:
    'Reine Textformate funktionieren direkt: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml und .vcf. Excel-Dateien (.xlsx und .xls) werden Zelle für Zelle gelesen. Sie können mehrere Dateien gleichzeitig ablegen und erhalten eine gemeinsame Liste. PDF- und Word-Dateien werden noch nicht unterstützt. Öffnen Sie die Datei, kopieren Sie den Text und fügen Sie ihn in das Feld ein.',
  beforeTitle: 'Bevor Sie jemandem auf der Liste schreiben',
  beforeParas: [
    'Eine gefundene Adresse beweist nur, dass sie irgendwo aufgeschrieben wurde. Sie zeigt nicht, ob das Postfach noch existiert. Listen aus alten Dokumenten enthalten viele Adressen, die längst nicht mehr genutzt werden. E-Mails an solche Adressen erzeugen [Hard Bounces](/blog/hard-bounce-vs-soft-bounce), die Ihrer Absenderreputation schaden. Prüfen Sie die Liste vor dem ersten Versand mit der [E-Mail-Listenbereinigung](/email-list-cleaning). Eine einzelne Adresse testen Sie mit dem [kostenlosen E-Mail-Prüfer](/email-checker).',
    'Überlegen Sie dann, an wen Sie schreiben. Schreiben Sie nur Personen an, die zugestimmt haben oder für die Sie eine andere Rechtsgrundlage haben. Datenschutz- und Anti-Spam-Regeln wie die DSGVO und CAN-SPAM gelten für die Nutzung der Liste. Das gilt unabhängig davon, mit welchem Tool Sie sie erstellt haben.',
  ],
  faqTitle: 'Häufige Fragen zum Email Extractor',
  faqs: [
    {
      q: 'Ist dieser Email Extractor kostenlos?',
      a: 'Ja. Sie brauchen keine Anmeldung und können ihn beliebig oft nutzen. Die Verifizierung der Liste ist ein eigener Schritt. Neue Giggal-Konten erhalten dafür 1.000 Gratis-Credits.',
    },
    {
      q: 'Wird mein Text irgendwo hochgeladen?',
      a: 'Nein. Die Extraktion läuft in Ihrem Browser-Tab. Nichts, was Sie einfügen oder hochladen, wird an unsere Server gesendet. Wenn Sie eine Excel-Datei hinzufügen, lädt die Seite den Code zum Lesen von Tabellen. Ihre Datei bleibt aber auf Ihrem Gerät.',
    },
    {
      q: 'Kann das Tool E-Mail-Adressen von einer Website-URL extrahieren?',
      a: 'Noch nicht. Öffnen Sie die Seite, markieren Sie alles, kopieren Sie es und fügen Sie es in das Feld ein. Stehen Adressen nur im Code der Seite, fügen Sie stattdessen den Quelltext ein.',
    },
    {
      q: 'Prüft das Tool, ob die E-Mail-Adressen gültig sind?',
      a: 'Nein. Es findet nur Adressen, die in Ihrem Text stehen. Ob jedes Postfach existiert, erfahren Sie mit der [E-Mail-Listenbereinigung](/email-list-cleaning). Eine einzelne Adresse testen Sie mit dem [E-Mail-Prüfer](/email-checker).',
    },
    {
      q: 'Wie viel Text kann ich einfügen?',
      a: 'Auch große Mengen funktionieren, etwa Exporte ab 20 MB. Die Arbeit läuft in einem Hintergrund-Thread auf Ihrem Gerät. Sehr große Dateien brauchen ein paar Sekunden. Die Seite bleibt währenddessen nutzbar.',
    },
    {
      q: 'Kann ich E-Mail-Adressen aus Excel- oder CSV-Dateien extrahieren?',
      a: 'Ja. Legen Sie .xlsx-, .xls- oder .csv-Dateien auf dem Feld ab. Jede Zelle wird durchsucht. Es spielt also keine Rolle, in welcher Spalte die Adressen stehen.',
    },
  ],
  ctaHeadline: 'Prüfen Sie die extrahierten Adressen, bevor Sie senden',
}

// Brazilian Portuguese: "você", URL /pt-br/extrator-de-email. Brazilians search the English
// term, so "Email Extractor" sits in the title, H1, description and one FAQ question.
const ptBr: ExtractorPageStrings = {
  metaTitle: 'Email Extractor: extrair e-mails de texto e arquivos | Giggal.ai',
  ogTitle: 'Email Extractor: extrair e-mails de texto e arquivos',
  description:
    'Email Extractor grátis: extraia e-mails de texto, CSV, Excel ou HTML no navegador. Remova duplicados, agrupe por domínio e exporte a lista. Sem cadastro.',
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Extrator de e-mail grátis da Giggal.ai',
  crumb: 'Extrator de e-mail',
  appName: 'Extrator de e-mail grátis',
  featureList: [
    'Extrai endereços de e-mail de texto, CSV, Excel ou HTML',
    'Remove os duplicados e filtra por domínio',
    'Converte endereços disfarçados escritos por extenso',
    'Exporta em TXT ou em CSV com uma coluna de domínio',
    'Roda 100% no navegador, com um Web Worker',
  ],
  h1: 'Extrator de e-mail (Email Extractor)',
  heroIntro: 'Cole um texto ou arraste arquivos para extrair e-mails. Você recebe uma lista limpa de endereços, sem duplicados.',
  howTitle: 'Como extrair e-mails de um texto',
  howSteps: [
    'Cole o texto no campo ou arraste um ou mais arquivos para ele.',
    'Escolha as opções: remover duplicados, ordenar, filtrar por domínio ou ocultar endereços de função como info@.',
    'Veja os resultados abaixo do campo: a lista, as contagens e os principais domínios. Eles são atualizados enquanto você digita.',
    'Copie a lista ou baixe-a em TXT ou em CSV, com uma coluna de domínio.',
  ],
  howNote:
    'Nada do que você cola ou carrega sai do seu navegador. Por isso você pode extrair e-mails de exportações de clientes e de documentos internos.',
  imageAlt: 'Ilustração do extrator de e-mail: endereços tirados de documentos formam uma lista organizada e sem duplicados.',
  findsTitle: 'O que este extrator de e-mail encontra e o que ele ignora',
  findsParas: [
    'O extrator procura tudo o que tem o formato nome@dominio.tld e depois limpa cada resultado. Um link como mailto:ana@exemplo.com.br vira ana@exemplo.com.br. Uma vírgula ou um parêntese colado no fim de um endereço é removido. Para um padrão de busca simples, nomes de imagens Retina, como logo@2x.png, parecem e-mails. Por isso a ferramenta os descarta, assim como outros nomes de arquivo, como icon@3x.svg.',
    'Para que robôs não encontrem os endereços, algumas páginas os escrevem assim: ana [at] exemplo [dot] com [dot] br. Ative a opção de endereços por extenso. A ferramenta então converte as formas [at], (at), {at} e as versões equivalentes com dot de volta em endereços normais. A opção vem desligada, porque uma busca menos rígida traria falsos positivos.',
    'Endereços que só diferem nas maiúsculas, como Ana@Exemplo.com.br e ana@exemplo.com.br, contam como um só. Isso porque os grandes provedores de e-mail tratam os dois como a mesma caixa. O motivo está no nosso artigo sobre [maiúsculas e minúsculas no e-mail](/blog/are-email-addresses-case-sensitive).',
    'A ferramenta só encontra endereços que aparecem no seu texto. Ela não pesquisa na web, não adivinha endereços que faltam e não abre páginas a partir de uma URL.',
  ],
  filesTitle: 'Arquivos que você pode usar',
  filesPara:
    'Os formatos de texto simples funcionam como estão: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml e .vcf. Os arquivos do Excel (.xlsx e .xls) são lidos célula por célula. Você pode arrastar vários arquivos de uma vez, e os resultados são reunidos em uma só lista. Arquivos PDF e Word ainda não são aceitos. Abra o arquivo, copie o texto e cole no campo.',
  beforeTitle: 'Antes de enviar e-mail para alguém da lista',
  beforeParas: [
    'Encontrar um endereço só prova que ele foi escrito em algum lugar. Isso não mostra se a caixa ainda existe. Listas tiradas de documentos antigos estão cheias de pessoas que já não usam aquele endereço. Enviar para esses endereços gera [hard bounces](/blog/hard-bounce-vs-soft-bounce), que prejudicam a sua reputação de remetente. Faça a [limpeza da lista de e-mails](/email-list-cleaning) antes do primeiro envio. Para testar um único endereço, use o [verificador de e-mail grátis](/email-checker).',
    'Depois, pense em quem vai receber seus e-mails. Escreva para pessoas que aceitaram receber suas mensagens, ou com quem você tem outro motivo lícito para entrar em contato. Regras de privacidade e antispam, como o GDPR europeu e o CAN-SPAM americano, se aplicam ao uso da lista. Não importa qual ferramenta você usou para montá-la.',
  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Este Email Extractor é grátis?',
      a: 'Sim. Não exige cadastro e não tem limite de uso. Verificar a lista depois é outra etapa. Contas novas da Giggal recebem 1.000 créditos de verificação grátis.',
    },
    {
      q: 'Meu texto é enviado para algum lugar?',
      a: 'Não. O extrator de e-mail roda na aba do seu navegador. Nada do que você cola ou carrega é enviado aos nossos servidores. Se você adicionar um arquivo do Excel, a página baixa o código necessário para ler planilhas. Mesmo assim, o seu arquivo continua no seu dispositivo.',
    },
    {
      q: 'É possível extrair e-mails da URL de um site?',
      a: 'Ainda não. Abra a página, selecione tudo, copie e cole no campo. Para endereços que só aparecem no código da página, cole o código-fonte dela.',
    },
    {
      q: 'A ferramenta verifica se os e-mails são válidos?',
      a: 'Não. Ela só encontra os endereços que aparecem no seu texto. Para saber se cada caixa existe, verifique a lista com a [limpeza de lista de e-mails](/email-list-cleaning). Para um só endereço, use o [verificador de e-mail](/email-checker).',
    },
    {
      q: 'Quanto texto posso colar?',
      a: 'Textos grandes funcionam, inclusive exportações de 20 MB ou mais, porque o trabalho roda em segundo plano no seu dispositivo. Arquivos muito grandes levam alguns segundos, e você pode continuar usando a página enquanto eles são processados.',
    },
    {
      q: 'Posso extrair e-mails de arquivos Excel ou CSV?',
      a: 'Sim. Arraste arquivos .xlsx, .xls ou .csv para o campo. Todas as células são lidas, então não importa em qual coluna estão os endereços.',
    },
  ],
  ctaHeadline: 'Verifique os contatos extraídos antes de enviar',
}

export const EXTRACTOR_PAGE_STRINGS: Partial<Record<Locale, ExtractorPageStrings>> & { en: ExtractorPageStrings } = { en, de, 'pt-br': ptBr }
