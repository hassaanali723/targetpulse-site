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


const fr: ExtractorPageStrings = {
  metaTitle: 'Extracteur d’e-mails gratuit : extraire des e-mails d’un texte ou fichier | Giggal.ai',
  ogTitle: 'Extracteur d’e-mails gratuit : extraire des e-mails d’un texte ou fichier',
  description:
    'Extrayez des adresses e-mail depuis du texte, CSV, Excel ou HTML dans votre navigateur. Dédupliquez, filtrez par domaine et exportez votre liste gratuitement.',
  ogLocale: 'fr_FR',
  ogImage: '/og-card.png',
  ogAlt: 'Extracteur d’e-mails gratuit par Giggal.ai',
  crumb: 'Extracteur d’e-mails',
  appName: 'Extracteur d’e-mails gratuit',
  featureList: [
    'Extraction d’adresses e-mail depuis du texte brut, CSV, Excel ou HTML',
    'Suppression automatique des doublons et filtrage par nom de domaine',
    'Conversion des adresses masquées écrites en toutes lettres ([at], [dot])',
    'Exportation en format TXT ou CSV avec colonne de domaine dédiée',
    'Exécution 100% dans le navigateur grâce à un Web Worker dédié',
  ],
  h1: 'Extracteur d’e-mails gratuit',
  heroIntro: 'Collez votre texte ou déposez vos fichiers pour obtenir instantanément une liste d’e-mails propre et dédupliquée.',
  howTitle: 'Comment extraire des e-mails d’un texte',
  howSteps: [
    'Collez votre texte dans la zone de saisie ou déposez un ou plusieurs fichiers.',
    'Sélectionnez vos options : déduplication, tri alphabétique, filtre par domaine ou masquage des adresses de rôle (info@, contact@).',
    'Consultez les résultats en temps réel : liste détaillée, statistiques et principaux domaines d’e-mails.',
    'Copiez la liste ou téléchargez-la au format TXT ou CSV avec colonne de domaine.',
  ],
  howNote:
    'Aucune donnée ne quitte votre navigateur. Vous pouvez traiter vos fichiers clients et documents confidentiels en toute sécurité.',
  imageAlt: 'Illustration d’un extracteur d’e-mails générant une liste propre et dédupliquée à partir de fichiers.',
  findsTitle: 'Ce que l’extracteur détecte et ignore',
  findsParas: [
    'L’outil détecte toute chaîne au format nom@domaine.tld et nettoie la ponctuation adjacente (liens mailto:, parenthèses ou virgules en fin d’adresse). Il ignore automatiquement les noms de fichiers web (ex. logo@2x.png, icon@3x.svg).',
    'Pour contourner les robots, certaines adresses sont rédigées sous la forme nom [at] domaine [dot] fr. Activez l’option de conversion pour transformer [at], (at), {at} et les variantes de point en adresses e-mail valides.',
    'Les variantes de casse telles que Jean@Exemple.fr et jean@exemple.fr sont regroupées sous une seule adresse. Consultez notre article sur [la sensibilité à la casse des adresses e-mail](/blog/are-email-addresses-case-sensitive).',
    'L’outil analyse exclusivement le contenu textuel fourni. Il n’explore pas le web externe et ne devine aucune adresse manquante.',
  ],
  filesTitle: 'Formats de fichiers pris en charge',
  filesPara:
    'Les formats texte sont pris en charge nativement : .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml et .vcf. Les classeurs Excel (.xlsx et .xls) sont analysés cellule par cellule. Vous pouvez déposer plusieurs fichiers simultanément. Pour les fichiers PDF ou Word, copiez simplement le texte et collez-le dans le champ.',
  beforeTitle: 'Avant d’envoyer vos e-mails',
  beforeParas: [
    'Trouver une adresse dans un document ne garantit pas que la boîte aux lettres existe encore. Les listes anciennes comportent des adresses abandonnées qui provoquent des [hard bounces](/blog/hard-bounce-vs-soft-bounce), nuisibles à votre délivrabilité. Effectuez un [nettoyage de liste d’e-mails](/email-list-cleaning) avant tout envoi. Pour tester une adresse individuelle, utilisez notre [vérificateur d’e-mail gratuit](/email-checker).',
    'Veillez à respecter les réglementations sur la protection des données (RGPD) et le consentement de vos destinataires avant de lancer vos campagnes.',
  ],
  faqTitle: 'Foire aux questions',
  faqs: [
    {
      q: 'Cet extracteur d’e-mails est-il gratuit ?',
      a: 'Oui, totalement gratuit, sans inscription requise et sans limite de volume.',
    },
    {
      q: 'Mes fichiers et textes sont-ils transmis à vos serveurs ?',
      a: 'Non. Le traitement s’effectue à 100% en local dans votre navigateur via un Web Worker. Rien n’est transmis ni enregistré.',
    },
    {
      q: 'Puis-je extraire des e-mails directement depuis une URL de site ?',
      a: 'Pas directement via l’URL. Ouvrez la page web, copiez son texte ou son code source HTML, puis collez-le dans l’extracteur.',
    },
    {
      q: 'L’extracteur vérifie-t-il la validité des adresses e-mail ?',
      a: 'Non. Il extrait uniquement les adresses présentes. Pour vérifier l’existence réelle des boîtes, utilisez notre [vérificateur d’e-mail](/email-checker) ou notre [service de nettoyage de liste](/email-list-cleaning).',
    },
    {
      q: 'Quelle quantité de texte puis-je traiter ?',
      a: 'Vous pouvez traiter des fichiers volumineux de plusieurs dizaines de mégaoctets sans ralentir votre navigateur grâce au traitement en arrière-plan.',
    },
    {
      q: 'Puis-je importer des fichiers Excel ou CSV ?',
      a: 'Oui. Déposez vos fichiers .xlsx, .xls ou .csv. Toutes les cellules sont scannées automatiquement.',
    },
  ],
  ctaHeadline: 'Vérifiez la validité de vos adresses extraites avant d’envoyer.',
}

const es: ExtractorPageStrings = {
  metaTitle: 'Extractor de correos gratis: extraer emails de texto y archivos | Giggal.ai',
  ogTitle: 'Extractor de correos gratis: extraer emails de texto y archivos',
  description:
    'Extraiga direcciones de email de texto, CSV, Excel o HTML en su navegador. Elimine duplicados, filtre por dominio y exporte su lista gratis y sin registro.',
  ogLocale: 'es_ES',
  ogImage: '/og-card.png',
  ogAlt: 'Extractor de correos electrónicos gratuito de Giggal.ai',
  crumb: 'Extractor de correos',
  appName: 'Extractor de correos gratuito',
  featureList: [
    'Extracción de emails desde texto, archivos CSV, Excel o código HTML',
    'Eliminación de duplicados y filtros avanzados por dominio',
    'Conversión de direcciones ofuscadas por escrito ([at], [dot])',
    'Exportación rápida a formato TXT o CSV con columna de dominio',
    'Ejecución 100% en el navegador mediante Web Worker local',
  ],
  h1: 'Extractor de correos electrónicos gratuito',
  heroIntro: 'Pegue texto o arrastre archivos para extraer una lista limpia de correos, sin duplicados y lista para usar.',
  howTitle: 'Cómo extraer correos de un texto',
  howSteps: [
    'Pegue su texto en el campo o arrastre uno o varios archivos compatibles.',
    'Configure sus filtros: eliminar duplicados, ordenar, filtrar por dominio u ocultar cuentas genéricas (info@, ventas@).',
    'Revise los resultados generados en tiempo real: recuento total, lista filtrada y principales dominios.',
    'Copie la lista o descárguela en formato TXT o CSV estructurado.',
  ],
  howNote:
    'Ningún dato sale de su navegador. Puede extraer correos de bases de clientes y documentos internos con total privacidad.',
  imageAlt: 'Ilustración del extractor de emails generando una lista organizada y deduplicada a partir de documentos.',
  findsTitle: 'Qué correos detecta el extractor y cuáles descarta',
  findsParas: [
    'El sistema identifica patrones con formato nombre@dominio.tld y limpia caracteres sobrantes como enlaces mailto:, comas o paréntesis finales. Descarta automáticamente nombres de archivos gráficos como logo@2x.png o icon@3x.svg.',
    'Para evitar robots, muchas webs publican correos como nombre [at] dominio [dot] com. Active la opción correspondiente para convertir [at], (at), {at} y formatos dot en direcciones válidas.',
    'Direcciones que solo difieren en mayúsculas (como Ana@Ejemplo.es y ana@ejemplo.es) se unifican, ya que los servidores de correo las tratan como la misma bandeja. Vea nuestro artículo sobre [mayúsculas y minúsculas en emails](/blog/are-email-addresses-case-sensitive).',
    'La herramienta analiza únicamente el contenido ingresado; no rastrea la web externa ni genera direcciones ficticias.',
  ],
  filesTitle: 'Formatos de archivo compatibles',
  filesPara:
    'Admite archivos de texto plano: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml y .vcf. Los documentos de Excel (.xlsx y .xls) se leen celda por celda. Puede arrastrar múltiples archivos simultáneamente. En documentos PDF o Word, copie el texto y péguelo directamente.',
  beforeTitle: 'Antes de realizar envíos a la lista',
  beforeParas: [
    'Extraer un correo no asegura que la cuenta siga activa. Documentos antiguos suelen incluir direcciones obsoletas que generan [hard bounces](/blog/hard-bounce-vs-soft-bounce) dañinos para su reputación. Realice una [limpieza de lista de correos](/email-list-cleaning) antes de enviar. Para verificar una dirección individual, use nuestro [validador de correos gratuito](/email-checker).',
    'Asegúrese de contar con consentimiento y cumplir con regulaciones como el RGPD o CAN-SPAM al gestionar listas de contacto.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Es completamente gratis este extractor de correos?',
      a: 'Sí, es 100% gratuito, sin necesidad de registro ni restricciones de volumen.',
    },
    {
      q: '¿Se cargan mis datos o archivos a algún servidor?',
      a: 'No. El proceso se ejecuta íntegramente en su navegador a través de un Web Worker local. Ningún dato se envía ni se almacena.',
    },
    {
      q: '¿Puedo extraer emails introduciendo la URL de una web?',
      a: 'No de forma automática. Abra la página, seleccione el texto o el código fuente HTML, cópielo y péguelo en la herramienta.',
    },
    {
      q: '¿Verifica la herramienta si los correos existen?',
      a: 'No, únicamente extrae los correos presentes en el texto. Para comprobar si una bandeja existe, use la [limpieza de listas](/email-list-cleaning) o el [validador de correo](/email-checker).',
    },
    {
      q: '¿Existe algún límite de tamaño de texto?',
      a: 'Puede procesar textos extensos y archivos de más de 20 MB sin bloquear su navegador, gracias al procesamiento en segundo plano.',
    },
    {
      q: '¿Funciona con hojas de cálculo de Excel o CSV?',
      a: 'Sí. Arrastre archivos .xlsx, .xls o .csv. Todas las celdas se examinan automáticamente.',
    },
  ],
  ctaHeadline: 'Compruebe sus correos extraídos antes de iniciar el envío.',
}

const it: ExtractorPageStrings = {
  metaTitle: 'Estrattore email gratis: estrarre email da testo e file | Giggal.ai',
  ogTitle: 'Estrattore email gratis: estrarre indirizzi email da testo e file',
  description:
    'Estrai indirizzi email da testo, CSV, Excel o HTML nel tuo browser. Rimuovi duplicati, filtra per dominio ed esporta la lista pulita gratis e senza registrazione.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Estrattore email gratuito di Giggal.ai',
  crumb: 'Estrattore email',
  appName: 'Estrattore email gratuito',
  featureList: [
    'Estrazione di indirizzi email da testo, file CSV, fogli Excel o codice HTML',
    'Rimozione automatica dei duplicati e filtri per dominio personalizzati',
    'Conversione di indirizzi email offuscati per esteso ([at], [dot])',
    'Esportazione rapida in formato TXT o CSV con colonna dominio',
    'Elaborazione 100% in locale nel browser tramite Web Worker',
  ],
  h1: 'Estrattore email gratuito',
  heroIntro: 'Incolla il testo o trascina i tuoi file per ottenere un elenco pulito di indirizzi email, senza duplicati.',
  howTitle: 'Come estrarre email da un testo',
  howSteps: [
    'Incolla il testo nel riquadro o trascina uno o più file supportati.',
    'Seleziona le opzioni desiderate: deduplica, ordinamento, filtro dominio o esclusione indirizzi di ruolo (info@, support@).',
    'Visualizza i risultati in tempo reale: conteggio totale, elenco filtrato e domini più frequenti.',
    'Copia l’elenco o scaricalo in formato TXT o CSV con colonne ordinate.',
  ],
  howNote:
    'Nessun dato esce dal tuo browser. Puoi estrarre email da documenti interni e file riservati con la massima sicurezza.',
  imageAlt: 'Illustrazione dell’estrattore email che trasforma file e testi in liste ordinate e prive di duplicati.',
  findsTitle: 'Cosa individua l’estrattore e cosa ignora',
  findsParas: [
    'L’algoritmo cerca stringhe conformi allo standard nome@dominio.tld e rimuove elementi superflui (prefissi mailto:, virgole o parentesi adiacenti). Vengono scartati in automatico i nomi di file grafici come logo@2x.png o icon@3x.svg.',
    'Per eludere lo spam, alcuni siti pubblicano email come nome [at] dominio [dot] it. Attivando l’opzione di conversione, i formati [at], (at), {at} e dot vengono ripristinati come email standard.',
    'Indirizzi che differiscono solo per le maiuscole (es. Mario@Esempio.it e mario@esempio.it) vengono unificati, poiché i provider li gestiscono come la stessa casella. Maggiori dettagli nel nostro articolo su [maiuscole e minuscole nelle email](/blog/are-email-addresses-case-sensitive).',
    'La ricerca si limita al testo inserito; non vengono effettuate ricerche web esterne né generati indirizzi ipotetici.',
  ],
  filesTitle: 'Formati di file supportati',
  filesPara:
    'Supporta file di testo semplice: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml e .vcf. I file Excel (.xlsx e .xls) vengono esaminati cella per cella. È possibile trascinare più file contemporaneamente. Per documenti Word o PDF, seleziona il testo e incollalo direttamente nel riquadro.',
  beforeTitle: 'Prima di inviare email all’elenco',
  beforeParas: [
    'Trovare un’email in un testo non garantisce che la casella sia attiva. Documenti datati possono contenere indirizzi inesistenti che causano [hard bounce](/blog/hard-bounce-vs-soft-bounce), danneggiando la tua reputazione di mittente. Esegui la [pulizia della lista email](/email-list-cleaning) prima di inviare. Per testare un singolo indirizzo, prova il nostro [verificatore email gratuito](/email-checker).',
    'Assicurati sempre di rispettare la normativa sulla privacy (GDPR) e di avere il consenso dei destinatari prima di procedere.',
  ],
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Questo estrattore email è gratuito?',
      a: 'Sì, è completamente gratuito, senza registrazione e senza limiti di utilizzo.',
    },
    {
      q: 'I miei file vengono inviati ai vostri server?',
      a: 'No. L’estrazione opera interamente in locale nel tuo browser tramite un Web Worker. Nessun dato viene trasmesso.',
    },
    {
      q: 'È possibile estrarre email da un URL web?',
      a: 'Non inserendo solo l’URL. È necessario aprire la pagina, copiare il testo o il sorgente HTML e incollarlo nello strumento.',
    },
    {
      q: 'L’estrattore verifica l’esistenza delle caselle email?',
      a: 'No, estrae solo gli indirizzi presenti. Per verificare l’effettiva esistenza, usa la [pulizia liste email](/email-list-cleaning) o il [verificatore email](/email-checker).',
    },
    {
      q: 'Qual è il limite di testo che posso incollare?',
      a: 'Puoi elaborare testi molto grandi e file di oltre 20 MB senza bloccare la pagina, grazie all’elaborazione in background.',
    },
    {
      q: 'Posso estrarre email da fogli Excel o file CSV?',
      a: 'Certamente. Trascina i tuoi file .xlsx, .xls o .csv. Tutte le celle verranno esaminate.',
    },
  ],
  ctaHeadline: 'Verifica la qualità degli indirizzi estratti prima di inviare.',
}

const nl: ExtractorPageStrings = {
  metaTitle: 'Gratis e-mail extractor: e-mailadressen uit tekst en bestanden halen | Giggal.ai',
  ogTitle: 'Gratis e-mail extractor: e-mailadressen uit tekst en bestanden halen',
  description:
    'Haal e-mailadressen uit tekst, CSV, Excel of HTML in uw browser. Verwijder duplicaten, filter op domein en exporteer een schone lijst. Gratis en zonder registratie.',
  ogLocale: 'nl_NL',
  ogImage: '/og-card.png',
  ogAlt: 'Gratis e-mail extractor van Giggal.ai',
  crumb: 'E-mail extractor',
  appName: 'Gratis e-mail extractor',
  featureList: [
    'E-mailadressen extraheren uit tekst, CSV, Excel-spreadsheets of HTML',
    'Automatisch duplicaten verwijderen en filteren op domeinnaam',
    'Vermomde uitgeschreven adressen converteren ([at], [dot])',
    'Exporteren naar TXT of CSV met een aparte domeinkolom',
    'Draait 100% lokaal in uw browser met een Web Worker',
  ],
  h1: 'Gratis e-mail extractor',
  heroIntro: 'Plak tekst of sleep bestanden naar het veld voor een opgeschoonde, ontdubbelde lijst van e-mailadressen.',
  howTitle: 'Hoe e-mailadressen uit tekst te halen',
  howSteps: [
    'Plak uw tekst in het veld of sleep een of meerdere bestanden naar het vak.',
    'Kies uw filters: duplicaten verwijderen, alfabetisch sorteren, filteren op domein of rol-adressen uitsluiten (zoals info@).',
    'Bekijk de live resultaten: totaal aantal adressen, de lijst en de meest voorkomende domeinen.',
    'Kopieer de lijst of download deze als TXT-bestand of gestructureerd CSV-bestand.',
  ],
  howNote:
    'Niets van wat u invoert verlaat uw browser. U kunt vertrouwelijke klantlijsten en interne documenten veilig verwerken.',
  imageAlt: 'Illustratie van de e-mail extractor die documenten omzet in een schone, ontdubbelde lijst adressen.',
  findsTitle: 'Wat de extractor herkent en wat wordt genegeerd',
  findsParas: [
    'De tool scant op het patroon naam@domein.tld en schoont aangrenzende leestekens op (zoals mailto:-links, komma’s of haakjes). Bestandsnamen van webafbeeldingen zoals logo@2x.png of icon@3x.svg worden automatisch overgeslagen.',
    'Om spam te voorkomen schrijven sommige websites adressen als naam [at] domein [dot] nl. Schakel de optie voor uitgeschreven adressen in om vormen zoals [at], (at), {at} en dot om te zetten naar standaard e-mailadressen.',
    'Adressen die alleen verschillen in hoofdletters (bijv. Anna@Voorbeeld.nl en anna@voorbeeld.nl) worden samengevoegd, omdat mailservers ze identiek behandelen. Lees meer in ons artikel over [hoofdlettergevoeligheid van e-mailadressen](/blog/are-email-addresses-case-sensitive).',
    'De tool analyseert uitsluitend de ingevoerde tekst; er worden geen externe websites gescand of ontbrekende adressen gegokt.',
  ],
  filesTitle: 'Ondersteunde bestandsformaten',
  filesPara:
    'Tekstformaten werken direct: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml en .vcf. Excel-bestanden (.xlsx en .xls) worden cel voor cel uitgelezen. U kunt meerdere bestanden tegelijk toevoegen. Voor PDF- of Word-documenten kopieert u eenvoudig de tekst naar het veld.',
  beforeTitle: 'Voordat u e-mails naar de lijst verstuurt',
  beforeParas: [
    'Een gevonden e-mailadres bewijst niet dat de mailbox nog bestaat. Verouderde documenten bevatten vaak verlopen adressen die leiden tot [hard bounces](/blog/hard-bounce-vs-soft-bounce), wat uw afzenderreputatie schaadt. Voer eerst een [e-maillijst opschoning](/email-list-cleaning) uit. Voor een enkel adres gebruikt u onze [gratis e-mail checker](/email-checker).',
    'Zorg dat u voldoet aan de privacywetgeving (AVG) en toestemming heeft van ontvangers voordat u mailings verzendt.',
  ],
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Is deze e-mail extractor gratis?',
      a: 'Ja, volledig gratis, zonder verplichte registratie en zonder limiet op het aantal adressen.',
    },
    {
      q: 'Wordt mijn tekst geüpload naar jullie servers?',
      a: 'Nee. De extractie gebeurt 100% lokaal in uw eigen browser via een Web Worker. Geen enkele data wordt verstuurd.',
    },
    {
      q: 'Kan ik e-mails extraheren via een website-URL?',
      a: 'Niet rechtstreeks via de URL. Open de gewenste pagina, kopieer de tekst of de HTML-broncode en plak deze in het veld.',
    },
    {
      q: 'Controleert de tool of de e-mailadressen echt bestaan?',
      a: 'Nee, de tool haalt alleen de adressen uit de tekst. Gebruik onze [e-maillijst opschoning](/email-list-cleaning) of [e-mail checker](/email-checker) om te verifiëren.',
    },
    {
      q: 'Hoeveel tekst kan ik tegelijk verwerken?',
      a: 'Dankzij verwerking op de achtergrond kunt u probleemloos grote bestanden van 20 MB of meer verwerken.',
    },
    {
      q: 'Kan ik Excel- of CSV-bestanden gebruiken?',
      a: 'Ja. Sleep .xlsx, .xls of .csv bestanden direct in het vak. Alle cellen worden automatisch doorzocht.',
    },
  ],
  ctaHeadline: 'Controleer uw geëxtraheerde adressen voor verzending.',
}

const pl: ExtractorPageStrings = {
  metaTitle: 'Darmowy ekstraktor email: wyciągaj adresy email z tekstu i plików | Giggal.ai',
  ogTitle: 'Darmowy ekstraktor email: wyciągaj adresy email z tekstu i plików',
  description:
    'Wyodrębniaj adresy email z tekstu, plików CSV, Excel lub kodu HTML w przeglądarce. Usuwaj duplikaty, filtruj według domen i eksportuj listę za darmo bez rejestracji.',
  ogLocale: 'pl_PL',
  ogImage: '/og-card.png',
  ogAlt: 'Darmowy ekstraktor adresów email od Giggal.ai',
  crumb: 'Ekstraktor email',
  appName: 'Darmowy ekstraktor email',
  featureList: [
    'Wyodrębnianie adresów email z tekstu, plików CSV, arkuszy Excel lub HTML',
    'Automatyczne usuwanie duplikatów i zaawansowane filtrowanie domen',
    'Konwersja ukrytych adresów zapisanych słownie ([at], [dot])',
    'Eksport listy do formatu TXT lub CSV z kolumną domen',
    'Przetwarzanie w 100% lokalne w przeglądarce za pomocą Web Workera',
  ],
  h1: 'Darmowy ekstraktor adresów email',
  heroIntro: 'Wklej tekst lub przeciągnij pliki, aby natychmiast uzyskać czystą listę adresów email bez powtórzeń.',
  howTitle: 'Jak wyodrębnić adresy email z tekstu',
  howSteps: [
    'Wklej tekst w pole robocze lub przeciągnij jeden bądź kilka plików.',
    'Wybierz opcje: usuwanie duplikatów, sortowanie, filtr domen lub ukrywanie adresów funkcyjnych (np. info@, kontakt@).',
    'Sprawdź wyniki na żywo: całkowitą liczbę wykrytych adresów, listę i zestawienie domen.',
    'Skopiuj listę lub pobierz ją w formacie TXT bądź w arkuszu CSV.',
  ],
  howNote:
    'Żadne dane nie opuszczają Twojej przeglądarki. Możesz bezpiecznie analizować poufne dokumenty i bazy klientów.',
  imageAlt: 'Ilustracja ekstraktora adresów email tworzącego uporządkowaną listę bez duplikatów z różnych plików.',
  findsTitle: 'Co wykrywa ekstraktor, a co odrzuca',
  findsParas: [
    'Narzędzie wyszukuje ciągi znaków o strukturze nazwa@domena.tld i czyści przylegające znaki interpunkcyjne (odnośniki mailto:, przecinki, nawiasy). Automatycznie ignoruje nazwy plików graficznych, takie jak logo@2x.png czy icon@3x.svg.',
    'Aby uniknąć spamu, adresy bywają zapisywane w formie nazwa [at] domena [dot] pl. Opcja konwersji zamienia zapisy [at], (at), {at} oraz dot na standardowe adresy email.',
    'Adresy różniące się jedynie wielkością liter (np. Jan@Przyklad.pl i jan@przyklad.pl) są traktowane jako jeden adres. Szczegóły znajdziesz w artykule o [wielkości liter w adresach email](/blog/are-email-addresses-case-sensitive).',
    'Narzędzie bada wyłącznie wprowadzony tekst; nie przeszukuje zewnętrznych stron internetowych ani nie generuje adresów.',
  ],
  filesTitle: 'Obsługiwane formaty plików',
  filesPara:
    'Obsługuje formaty tekstowe: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml oraz .vcf. Arkusze Excela (.xlsx i .xls) są skanowane komórka po komórce. Możesz upuścić wiele plików naraz. W przypadku plików PDF lub Word wystarczy zaznaczyć tekst i wkleić go w pole narzędzia.',
  beforeTitle: 'Zanim wyślesz wiadomość do listy',
  beforeParas: [
    'Obecność adresu w dokumencie nie oznacza, że skrzynka wciąż istnieje. Starsze listy zawierają nieaktywne adresy generujące [twarde odbicia (hard bounces)](/blog/hard-bounce-vs-soft-bounce), które niszczą reputację nadawcy. Wykonaj [czyszczenie listy mailingowej](/email-list-cleaning) przed wysyłką. Do sprawdzenia pojedynczego adresu użyj [darmowego weryfikatora email](/email-checker).',
    'Pamiętaj o zgodności z przepisami o ochronie danych osobowych (RODO) i wymaganej zgodzie odbiorców.',
  ],
  faqTitle: 'Często zadawane pytania',
  faqs: [
    {
      q: 'Czy ten ekstraktor email jest darmowy?',
      a: 'Tak, w 100% darmowy, bez konieczności rejestracji i bez limitu przetwarzanych danych.',
    },
    {
      q: 'Czy moje pliki lub teksty są przesyłane na serwer?',
      a: 'Nie. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce dzięki technologii Web Worker.',
    },
    {
      q: 'Czy mogę wyciągnąć adresy email bezpośrednio z linku do strony?',
      a: 'Nie bezpośrednio z adresu URL. Należy otworzyć stronę, skopiować jej treść lub kod źródłowy HTML i wkleić do pola.',
    },
    {
      q: 'Czy narzędzie sprawdza poprawność i istnienie adresów?',
      a: 'Nie, jedynie wyodrębnia adresy z tekstu. Do sprawdzenia istnienia skrzynek służy [czyszczenie listy email](/email-list-cleaning) oraz [weryfikator email](/email-checker).',
    },
    {
      q: 'Ile tekstu mogę wkleić jednocześnie?',
      a: 'Narzędzie radzi sobie z plikami o wielkości kilkudziesięciu megabajtów bez zawieszania przeglądarki.',
    },
    {
      q: 'Czy mogę importować pliki Excel lub CSV?',
      a: 'Tak. Przeciągnij pliki .xlsx, .xls lub .csv – wszystkie komórki zostaną przeskanowane.',
    },
  ],
  ctaHeadline: 'Zweryfikuj wyodrębnione kontakty przed rozpoczęciem wysyłki.',
}

const id: ExtractorPageStrings = {
  metaTitle: 'Ekstraktor Email Gratis: Ekstrak Alamat Email dari Teks dan File | Giggal.ai',
  ogTitle: 'Ekstraktor Email Gratis: Ekstrak Alamat Email dari Teks dan File',
  description:
    'Ekstrak alamat email dari teks, CSV, Excel, atau HTML langsung di browser Anda. Hapus duplikat, filter domain, dan unduh daftar bersih gratis tanpa daftar.',
  ogLocale: 'id_ID',
  ogImage: '/og-card.png',
  ogAlt: 'Ekstraktor email gratis dari Giggal.ai',
  crumb: 'Ekstraktor Email',
  appName: 'Ekstraktor Email Gratis',
  featureList: [
    'Ekstrak alamat email dari teks biasa, CSV, spreadsheet Excel, atau kode HTML',
    'Hapus duplikat secara otomatis dan terapkan filter domain kustom',
    'Konversi alamat email terselubung format tulisan ([at], [dot])',
    'Ekspor hasil ke format TXT atau CSV dengan kolom domain terpisah',
    'Berjalan 100% di browser lokal menggunakan Web Worker',
  ],
  h1: 'Ekstraktor Email Gratis',
  heroIntro: 'Tempel teks atau seret file Anda untuk mendapatkan daftar alamat email yang bersih dan bebas duplikat.',
  howTitle: 'Cara mengekstrak email dari teks',
  howSteps: [
    'Tempel teks ke dalam kotak input atau seret satu atau beberapa file.',
    'Pilih opsi filter: hapus duplikat, urutkan abjad, filter domain, atau sembunyikan alamat peran umum (info@, admin@).',
    'Lihat hasil ekstraksi langsung: jumlah total, daftar email, dan daftar domain terbanyak.',
    'Salin daftar email atau unduh sebagai file TXT maupun spreadsheet CSV.',
  ],
  howNote:
    'Tidak ada data yang keluar dari browser Anda. Data pelanggan dan dokumen rahasia Anda tetap aman.',
  imageAlt: 'Ilustrasi ekstraktor email yang mengorganisir dokumen menjadi daftar kontak bersih bebas duplikat.',
  findsTitle: 'Apa yang diekstrak dan apa yang diabaikan',
  findsParas: [
    'Alat ini mendeteksi pola nama@domain.tld dan membersihkan tanda baca di sekitarnya (seperti tautan mailto:, koma, atau tanda kurung). Nama file gambar web seperti logo@2x.png atau icon@3x.svg akan diabaikan secara otomatis.',
    'Untuk menghindari bot spam, beberapa situs menuliskan alamat seperti nama [at] domain [dot] com. Aktifkan opsi konversi agar format [at], (at), {at}, dan dot diubah kembali menjadi alamat email standar.',
    'Alamat yang hanya berbeda huruf besar dan kecil (misal Budi@Contoh.id dan budi@contoh.id) disatukan karena penyedia email memperlakukannya sama. Baca artikel kami tentang [sensitivitas huruf pada alamat email](/blog/are-email-addresses-case-sensitive).',
    'Alat hanya mengekstrak teks yang Anda masukkan; tidak melakukan scraping web luar atau membuat alamat acak.',
  ],
  filesTitle: 'Format file yang didukung',
  filesPara:
    'Mendukung format teks langsung: .txt, .csv, .tsv, .log, .md, .json, .xml, .html, .eml, dan .vcf. File Excel (.xlsx dan .xls) dibaca sel demi sel. Anda dapat menyeret banyak file sekaligus. Untuk file PDF atau Word, salin teksnya lalu tempelkan ke dalam alat.',
  beforeTitle: 'Sebelum mengirim email ke daftar kontak',
  beforeParas: [
    'Menemukan email dalam dokumen tidak menjamin akun tersebut masih aktif. Dokumen lama sering berisi alamat kedaluwarsa yang memicu [hard bounce](/blog/hard-bounce-vs-soft-bounce) dan merusak reputasi domain Anda. Lakukan [pembersihan daftar email](/email-list-cleaning) terlebih dahulu. Untuk menguji satu alamat, gunakan [pemeriksa email gratis](/email-checker).',
    'Pastikan Anda mematuhi regulasi privasi data dan mengantongi izin dari penerima sebelum mengirimkan email massal.',
  ],
  faqTitle: 'Pertanyaan Umum',
  faqs: [
    {
      q: 'Apakah ekstraktor email ini gratis digunakan?',
      a: 'Ya, 100% gratis tanpa perlu registrasi akun dan tanpa batasan jumlah email.',
    },
    {
      q: 'Apakah teks atau file saya dikirim ke server?',
      a: 'Tidak. Seluruh pemrosesan berjalan secara lokal di browser Anda dengan Web Worker. Data Anda tidak pernah diunggah.',
    },
    {
      q: 'Bisakah mengekstrak email langsung dari URL tautan web?',
      a: 'Tidak secara otomatis dari URL. Buka halaman yang diinginkan, salin teks atau kode HTML halamannya, lalu tempelkan ke kotak input.',
    },
    {
      q: 'Apakah alat ini memeriksa apakah email tersebut aktif?',
      a: 'Tidak, alat hanya mengekstrak teks. Untuk memverifikasi keaktifan akun, gunakan layanan [pembersih email massal](/email-list-cleaning) atau [pemeriksa email](/email-checker).',
    },
    {
      q: 'Berapa banyak teks yang bisa diproses sekaligus?',
      a: 'Anda dapat memproses file berukuran lebih dari 20 MB tanpa hambatan berkat pemrosesan di latar belakang.',
    },
    {
      q: 'Apakah mendukung file Excel atau CSV?',
      a: 'Ya. Seret file .xlsx, .xls, atau .csv ke dalam alat. Semua sel akan dipindai secara otomatis.',
    },
  ],
  ctaHeadline: 'Verifikasi daftar email hasil ekstraksi sebelum mengirim kampanye.',
}

const ja: ExtractorPageStrings = {
  metaTitle: 'メールアドレス抽出ツール（無料）：テキストやファイルから抽出 | Giggal.ai',
  ogTitle: 'メールアドレス抽出ツール（無料）：テキストやファイルから抽出',
  description:
    'テキスト、CSV、Excel、HTMLからメールアドレスをブラウザ上で抽出できます。重複を削除し、ドメインごとにまとめて、整理されたリストを書き出せます。無料で、登録も不要です。',
  ogLocale: 'ja_JP',
  ogImage: '/og-card.png',
  ogAlt: 'Giggal.aiの無料メールアドレス抽出ツール',
  crumb: 'メールアドレス抽出ツール',
  appName: '無料メールアドレス抽出ツール',
  featureList: [
    'テキスト、CSV、Excel、HTMLからメールアドレスを抽出',
    '重複を削除し、ドメインで絞り込み',
    '文字で書き換えられたアドレス（[at]、[dot]）を通常の形式に変換',
    'ドメイン列付きのTXTまたはCSVで書き出し',
    'Web Workerを使い、100%ブラウザ内で動作',
  ],
  h1: '無料のメールアドレス抽出ツール',
  heroIntro: 'テキストを貼り付けるかファイルをドロップすると、重複のないメールアドレスのリストが得られます。',
  howTitle: 'テキストからメールアドレスを抽出する方法',
  howSteps: [
    'ボックスにテキストを貼り付けるか、1つ以上のファイルをドロップします。',
    'オプションを選びます。重複の削除、並べ替え、ドメインでの絞り込み、info@ のような役割アドレスの非表示を設定できます。',
    'ボックスの下に、リスト、件数、上位のドメインが表示されます。入力に合わせて結果は更新されます。',
    'リストをコピーするか、TXT、またはドメイン列付きのCSVでダウンロードします。',
  ],
  howNote: '貼り付けたテキストやアップロードしたファイルはブラウザの外に送信されません。顧客データの書き出しファイルや社内文書にも使えます。',
  imageAlt: '文書から抽出したメールアドレスの重複を削除し、整理されたリストにまとめる様子のイラスト。',
  findsTitle: 'このツールが抽出するものと、除外するもの',
  findsParas: [
    'このツールは、name@domain.tld の形をした文字列を探し、見つかったものを1つずつ整えます。mailto:anna@example.com のようなリンクは anna@example.com として取り出し、アドレスの末尾に付いたカンマやかっこは取り除きます。logo@2x.png のようなRetina用の画像ファイル名は、単純なパターンではメールアドレスに見えます。そのため、icon@3x.svg などのファイル名と同様に除外します。',
    'ボット対策のため、アドレスを anna [at] example [dot] com のように書いているページがあります。「文字で書かれたアドレスを変換」をオンにすると、かっこ付きの形式（[at]、(at)、{at} と、それに対応する dot の形式）を通常のアドレスに戻します。条件をゆるめると誤検出が増えるため、初期設定ではオフです。',
    'Anna@Example.com と anna@example.com のように大文字と小文字だけが違うアドレスは、1件として数えます。大手のメールプロバイダーは、これらを同じメールボックスとして扱うためです。理由は[メールアドレスの大文字と小文字は区別されるか](/blog/are-email-addresses-case-sensitive)で説明しています。',
    'このツールが見つけるのは、入力したテキストに含まれるアドレスだけです。ウェブの検索、不足しているアドレスの推測、URLからのページ取得は行いません。',
  ],
  filesTitle: '使えるファイル',
  filesPara:
    'テキスト形式のファイルはそのまま使えます。対応形式は .txt、.csv、.tsv、.log、.md、.json、.xml、.html、.eml、.vcf です。Excelファイル（.xlsx と .xls）はセルごとに読み取ります。複数のファイルを一度にドロップすると、結果は1つのリストにまとまります。PDFとWordのファイルにはまだ対応していません。ファイルを開いてテキストをコピーし、ボックスに貼り付けてください。',
  beforeTitle: 'リストの相手にメールを送る前に',
  beforeParas: [
    'アドレスが見つかっても、それはどこかに書かれていたことを示すだけです。メールボックスが今も存在するかどうかはわかりません。古い文書から取り出したリストには、すでに退職や異動をした人のアドレスが多く含まれます。こうしたアドレスに送ると[ハードバウンス](/blog/hard-bounce-vs-soft-bounce)が発生し、送信者レピュテーションが下がります。最初に送信する前に[メールリストのクリーニング](/email-list-cleaning)（英語）を行うか、[無料のメールアドレスチェッカー](/email-checker)で1件ずつ確認してください。',
    '次に、送信する相手について考えます。メールの受信に同意した人、または連絡する別の正当な理由がある人にだけ送ってください。GDPRやCAN-SPAMなどのプライバシーや迷惑メールに関する規制は、どのツールでリストを作ったかに関係なく、リストの使い方に適用されます。',
  ],
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'このメールアドレス抽出ツールは無料ですか？',
      a: 'はい。登録は不要で、使用回数の制限もありません。抽出後のリストの検証は別の作業です。Giggalの新規アカウントには、1,000回分の無料検証クレジットが付きます。',
    },
    {
      q: '入力したテキストはどこかにアップロードされますか？',
      a: 'いいえ。抽出はブラウザのタブ内で行われ、貼り付けたテキストやアップロードしたファイルは当社のサーバーに送信されません。Excelファイルを追加すると、スプレッドシートを読むためのコードがページに読み込まれますが、ファイルはお使いの端末から出ません。',
    },
    {
      q: 'ウェブサイトのURLからメールアドレスを抽出できますか？',
      a: '現在はできません。ページを開いてすべて選択してコピーし、ボックスに貼り付けてください。ページのコードにしか書かれていないアドレスは、ページのソースを貼り付けてください。',
    },
    {
      q: '抽出したメールアドレスが有効かどうかも確認できますか？',
      a: 'いいえ。このツールは、テキストに含まれるアドレスを見つけるだけです。各メールボックスが存在するかを調べるには、[メールリストのクリーニング](/email-list-cleaning)（英語）でリストを検証するか、[メールアドレスチェッカー](/ja/email-checker)で1件ずつ確認してください。',
    },
    {
      q: 'どのくらいの量のテキストを貼り付けられますか？',
      a: '20 MB以上の書き出しファイルなど、大きな入力にも対応しています。処理はお使いの端末のバックグラウンドスレッドで行われます。とても大きなファイルは数秒かかりますが、処理中もページは操作できます。',
    },
    {
      q: 'ExcelやCSVのファイルからメールアドレスを抽出できますか？',
      a: 'はい。.xlsx、.xls、.csv のファイルをボックスにドロップしてください。すべてのセルを読み取るため、アドレスがどの列にあっても抽出できます。',
    },
  ],
  ctaHeadline: '抽出したメールアドレスを、送信前に検証しましょう。',
}

export const EXTRACTOR_PAGE_STRINGS: Record<Locale, ExtractorPageStrings> = { en, de, fr, es, it, 'pt-br': ptBr, nl, pl, id, ja }
