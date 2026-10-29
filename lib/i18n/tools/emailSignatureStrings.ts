// All page copy for the email signature generator, one object per language the
// page ships in. The page is components/tools/EmailSignature/EmailSignaturePage.tsx;
// the URLs live in CLUSTERS.emailSignature (lib/i18n/clusters.ts). The tool's own
// labels and sample details are in lib/i18n/tools/signatureToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists. FAQ answers use the
// same link markup (rendered by FaqAccordion).
//
// `extraSection` is an optional section that only some languages render, right
// after the first content section (for example a note on signature size for
// Brazilian Portuguese). English leaves it out.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

/** One example card: a mock signature and when to use that style. */
export interface SignatureExample {
  title: string
  /** Bold first line: a person's or a team's name. */
  name: string
}

export interface EmailSignaturePageStrings {
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
  /** Optional section after the first content section; only some languages have one. */
  extraSection?: { title: string; paras: string[] }
  addTitle: string
  /** Gmail, Outlook, Apple Mail. */
  addParas: [string, string, string]
  worksTitle: string
  /** The last one carries a link. */
  worksParas: [string, string, string, string, string]
  examplesTitle: string
  /** Before each "when to use" note, bold. Ends with a colon. */
  whenLabel: string
  examples: {
    simple: SignatureExample & { role: string; contact: string; when: string }
    cta: SignatureExample & { role: string; phone: string; button: string; when: string }
    /** `logo` is the text in the grey logo placeholder. */
    logo: SignatureExample & { logo: string; role: string; contact: string; when: string }
    shared: SignatureExample & { link: string; hours: string; when: string }
  }
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: EmailSignaturePageStrings = {
  metaTitle: 'Free Email Signature Generator for Gmail and Outlook | Giggal.ai',
  ogTitle: 'Free Email Signature Generator for Gmail and Outlook',
  description:
    'Create a clean email signature for Gmail, Outlook or Apple Mail. Pick a template, add your details and copy it in one click. Free, no signup, no watermark.',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Free Email Signature Generator',
  crumb: 'Email Signature Generator',
  appName: 'Free Email Signature Generator',
  featureList: [
    'Create table-based HTML signatures for Gmail, Outlook, and Apple Mail',
    'Pick from 4 responsive templates with custom accent colors and fonts',
    'Rich HTML clipboard copying and plain-text export for mobile apps',
    'Live character counter to stay within Gmail 10,000 character limit',
    'Runs 100% in-browser with zero tracking or stored data',
  ],
  h1: 'Free Email Signature Generator',
  heroIntro: 'Fill in your details, pick a layout and copy a signature that works in Gmail, Outlook and Apple Mail.',
  howTitle: 'How to make your email signature',
  howSteps: [
    'Fill in the details you want to show. Leave anything optional empty and it disappears from the layout.',
    'Pick a template and an accent color, and check the preview.',
    'Add your logo or photo by pasting a link to the image. It has to be hosted at a public HTTPS address, such as your company website.',
    "Click Copy signature and paste it into your email app's signature settings. Steps for each app are below.",
  ],
  imageAlt: 'Illustration of a professional email signature layout with avatar, details, and social icons.',
  addTitle: 'How to add it in Gmail, Outlook and Apple Mail',
  addParas: [
    'Gmail on the web: open Settings, then See all settings. On the General tab, find Signature, click Create new, give it a name and paste. Scroll to the bottom and click Save changes.',
    'Outlook: in Outlook on the web or the new Outlook, open Settings, then Account, then Signatures. Paste the signature, name it and save. In classic Outlook for Windows, go to File, Options, Mail, Signatures.',
    'Apple Mail: open Mail, then Settings (Preferences on older versions), then Signatures. Select the account, click the plus button and paste. If the formatting changes, untick Always match my default message font.',
  ],
  worksTitle: 'What makes a signature work everywhere',
  worksParas: [
    "Keep the important details as text. Outlook often blocks images until the reader allows them, so a signature that's one big image can show up blank. Your name, phone number and website in text always appear.",
    'Keep it short. Gmail limits a signature to 10,000 characters, and images count toward that limit. The counter above shows how close you are.',
    "Keep images small and hosted. Google suggests signature images around 300 to 400 pixels wide and 70 to 100 pixels high. Images must load from a public link; files on an internal server or behind a login won't show for people outside your company.",
    'Expect plain text on phones. The Gmail mobile app only supports plain-text signatures, so use the plain-text copy there.',
    'The signature sits under your sign-off. For which sign-off to use, and the closing line above it, see [how to end an email](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Professional email signature examples',
  whenLabel: 'When to use it:',
  examples: {
    simple: {
      title: '1. Simple',
      name: 'Jane Doe',
      role: 'Account Manager, Example Ltd',
      contact: '+44 20 7946 0000 · example.com',
      when: 'everyday email, where less is better.',
    },
    cta: {
      title: '2. With a call to action',
      name: 'Jane Doe',
      role: 'Account Manager, Example Ltd',
      phone: '+44 20 7946 0000',
      button: 'Book a 15-minute call',
      when: 'sales and account work, when you want replies to turn into meetings.',
    },
    logo: {
      title: '3. With a logo',
      logo: 'LOGO',
      name: 'Sam Lee',
      role: 'Head of Partnerships / Example Inc.',
      contact: '(555) 010-4477 · example.com',
      when: 'when your brand helps people recognize you.',
    },
    shared: {
      title: '4. Shared inbox',
      name: 'Example Support Team',
      link: 'help.example.com',
      hours: 'Monday to Friday, 9am to 5pm GMT',
      when: 'team addresses like support@, where no single person signs off.',
    },
  },
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Is this email signature generator free?',
      a: 'Yes. No signup, no watermark and no limit on how many signatures you make.',
    },
    {
      q: 'Does the signature include a link to Giggal?',
      a: 'Only if you tick that option. It’s off by default.',
    },
    {
      q: 'Why isn’t my logo showing?',
      a: 'The image link has to be public and start with https. Links to files on internal servers, in private cloud folders or behind a login don’t load for recipients. Some apps, Outlook in particular, also hide images until the reader allows them.',
    },
    {
      q: 'Can I upload my logo here?',
      a: 'Not yet. Paste a link to an image that’s already online. In Gmail you can also insert an image from Google Drive or your computer in the signature editor itself.',
    },
    {
      q: 'What should an email signature include?',
      a: 'Your name, job title, company and one or two ways to reach you are enough for most people. Add a logo, a photo or one link if they’re useful to the reader, and leave out quotes, long disclaimers and every social network you’re on.',
    },
    {
      q: 'Why does my signature look different on my phone?',
      a: 'Many phone email apps show signatures as plain text, and the Gmail app only supports plain text. Use the plain-text copy for mobile.',
    },
    {
      q: 'Is my information stored anywhere?',
      a: 'No. The generator runs in your browser, and your details aren’t saved on our servers.',
    },
  ],
  ctaHeadline: "Signature done? Check who you're writing to.",
  ctaSupporting:
    'Verify your contact list before your next campaign so your emails reach real inboxes. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const ptBr: EmailSignaturePageStrings = {
  metaTitle: 'Assinatura de e-mail: modelos grátis e tamanho máximo | Giggal.ai',
  ogTitle: 'Assinatura de e-mail: modelos grátis e tamanho máximo',
  description:
    'Escolha um modelo de assinatura de e-mail para Gmail, Outlook ou Apple Mail, preencha os dados e copie com um clique. Grátis, sem cadastro e sem marca d’água.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Gerador de assinatura de e-mail grátis da Giggal.ai',
  crumb: 'Gerador de assinatura de e-mail',
  appName: 'Gerador de assinatura de e-mail grátis',
  featureList: [
    'Cria assinaturas em HTML com tabelas para Gmail, Outlook e Apple Mail',
    'Oferece 4 modelos responsivos, com cor de destaque e fonte à sua escolha',
    'Copia a assinatura em HTML formatado e exporta em texto simples para apps de celular',
    'Contador de caracteres em tempo real para ficar dentro do limite de 10.000 caracteres do Gmail',
    'Funciona 100% no navegador, sem rastreamento e sem guardar dados',
  ],
  h1: 'Gerador de assinatura de e-mail',
  heroIntro:
    'Preencha seus dados, escolha um modelo de assinatura de e-mail e copie a assinatura pronta. Ela funciona no Gmail, no Outlook e no Apple Mail.',
  howTitle: 'Como criar sua assinatura de e-mail',
  howSteps: [
    'Preencha os dados que você quer mostrar. Se deixar um campo opcional vazio, ele não aparece na assinatura.',
    'Escolha um modelo e uma cor de destaque e confira a prévia.',
    'Adicione seu logo ou sua foto colando o link da imagem. A imagem precisa estar em um endereço HTTPS público, como o site da sua empresa.',
    'Clique em Copiar assinatura e cole nas configurações de assinatura do seu app de e-mail. Os passos para cada app estão abaixo.',
  ],
  imageAlt:
    'Ilustração de um modelo de assinatura de e-mail profissional, com foto, dados de contato e ícones de redes sociais.',
  extraSection: {
    title: 'Qual deve ser o tamanho da assinatura de e-mail?',
    paras: [
      'Segundo a Central de Ajuda do Gmail, a assinatura pode ter até 10.000 caracteres. As imagens também contam nesse limite. O contador da ferramenta acima avisa quando a assinatura passa dele.',
      'Na prática, a assinatura deve ficar bem abaixo desse limite. Poucas linhas são mais fáceis de ler no celular. Mantenha só o essencial: nome, cargo, empresa e uma ou duas formas de contato.',
      'Se usar um logo ou uma foto, escolha uma imagem pequena. Os tamanhos que o Google sugere para imagens estão mais abaixo nesta página.',
    ],
  },
  addTitle: 'Como adicionar a assinatura no Gmail, no Outlook e no Apple Mail',
  addParas: [
    'Gmail na web: abra Configurações e depois Ver todas as configurações. Na guia Geral, encontre Assinatura, clique em Criar nova, dê um nome e cole. Role até o fim da página e clique em Salvar alterações.',
    'Outlook: no Outlook na Web ou no novo Outlook, abra Configurações, depois Contas e depois Assinaturas. Cole a assinatura, dê um nome e salve. No Outlook clássico para Windows, vá em Arquivo, Opções, Email, Assinaturas.',
    'Apple Mail: abra o Mail, depois Ajustes (Preferências em versões mais antigas) e depois Assinaturas. Selecione a conta, clique no botão Adicionar (+) e cole. Se a formatação mudar, desmarque Sempre usar fonte da mensagem padrão.',
  ],
  worksTitle: 'O que faz uma assinatura de e-mail funcionar em qualquer app',
  worksParas: [
    'Deixe os dados importantes em texto. O Outlook costuma bloquear imagens até o leitor permitir. Por isso, uma assinatura feita de uma única imagem grande pode aparecer em branco. Seu nome, telefone e site em texto sempre aparecem.',
    'Seja breve. O Gmail limita a assinatura a 10.000 caracteres, e as imagens contam nesse limite. O contador acima mostra quão perto você está desse limite.',
    'Use imagens pequenas e hospedadas na web. O Google sugere imagens de assinatura com cerca de 300 a 400 pixels de largura e 70 a 100 pixels de altura. As imagens precisam carregar de um link público. Arquivos em um servidor interno ou atrás de um login não aparecem para pessoas de fora da sua empresa.',
    'No celular, a assinatura costuma aparecer em texto simples. O app do Gmail para celular só aceita assinaturas em texto simples, então use a versão em texto simples nele.',
    'A assinatura fica abaixo da sua despedida. Para escolher a despedida e a frase de fechamento acima dela, veja [como finalizar um e-mail](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Modelos de assinatura de e-mail profissional',
  whenLabel: 'Quando usar:',
  examples: {
    simple: {
      title: '1. Simples',
      name: 'Ana Souza',
      role: 'Gerente de Contas, Exemplo Ltda.',
      contact: '+55 11 3000-0000 · exemplo.com.br',
      when: 'e-mails do dia a dia, em que menos é melhor.',
    },
    cta: {
      title: '2. Com chamada para ação',
      name: 'Ana Souza',
      role: 'Gerente de Contas, Exemplo Ltda.',
      phone: '+55 11 3000-0000',
      button: 'Agende uma conversa de 15 minutos',
      when: 'vendas e gestão de contas, quando você quer que as respostas virem reuniões.',
    },
    logo: {
      title: '3. Com logo',
      logo: 'LOGO',
      name: 'Rafael Lima',
      role: 'Diretor de Parcerias / Exemplo S.A.',
      contact: '(21) 3000-4477 · exemplo.com.br',
      when: 'quando a sua marca ajuda as pessoas a reconhecer você.',
    },
    shared: {
      title: '4. Caixa compartilhada',
      name: 'Equipe de Suporte Exemplo',
      link: 'ajuda.exemplo.com.br',
      hours: 'Segunda a sexta, das 9h às 17h (horário de Brasília)',
      when: 'endereços de equipe, como suporte@, em que nenhuma pessoa assina sozinha.',
    },
  },
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Este gerador de assinatura de e-mail é grátis?',
      a: 'Sim. Não precisa de cadastro, não há marca d’água e não há limite para o número de assinaturas que você cria.',
    },
    {
      q: 'A assinatura inclui um link para a Giggal?',
      a: 'Só se você marcar essa opção. Ela vem desativada.',
    },
    {
      q: 'Por que meu logo não aparece?',
      a: 'O link da imagem precisa ser público e começar com https. Links para arquivos em servidores internos, em pastas privadas na nuvem ou atrás de um login não carregam para quem recebe. Alguns apps, principalmente o Outlook, também escondem imagens até o leitor permitir.',
    },
    {
      q: 'Posso enviar meu logo aqui?',
      a: 'Ainda não. Cole o link de uma imagem que já esteja on-line. No Gmail, você também pode inserir uma imagem do Google Drive ou do seu computador direto no editor de assinatura.',
    },
    {
      q: 'O que colocar na assinatura de e-mail?',
      a: 'Para a maioria das pessoas, bastam nome, cargo, empresa e uma ou duas formas de contato. Adicione um logo, uma foto ou um link se forem úteis para o leitor. Deixe de fora citações, avisos legais longos e a lista de todas as suas redes sociais.',
    },
    {
      q: 'Por que minha assinatura fica diferente no celular?',
      a: 'Muitos apps de e-mail para celular mostram a assinatura em texto simples, e o app do Gmail só aceita texto simples. Use a versão em texto simples no celular.',
    },
    {
      q: 'Meus dados ficam guardados em algum lugar?',
      a: 'Não. O gerador funciona no seu navegador, e seus dados não são salvos nos nossos servidores.',
    },
  ],
  ctaHeadline: 'Assinatura pronta? Verifique os endereços dos seus destinatários',
}

const de: EmailSignaturePageStrings = {
  metaTitle: 'E-Mail-Signatur erstellen für Gmail und Outlook | Giggal.ai',
  ogTitle: 'E-Mail-Signatur erstellen für Gmail und Outlook',
  description:
    'E-Mail-Signatur erstellen für Gmail, Outlook oder Apple Mail: Vorlage wählen, Daten eintragen, mit einem Klick kopieren. Kostenlos und ohne Anmeldung.',
  ogLocale: 'de_DE',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Kostenloser E-Mail-Signatur-Generator von Giggal.ai',
  crumb: 'E-Mail-Signatur-Generator',
  appName: 'Kostenloser E-Mail-Signatur-Generator',
  featureList: [
    'HTML-Signaturen auf Tabellenbasis für Gmail, Outlook und Apple Mail erstellen',
    '4 responsive Vorlagen mit eigener Akzentfarbe und Schriftart',
    'Kopiert formatiertes HTML in die Zwischenablage, dazu eine Nur-Text-Version für mobile Apps',
    'Live-Zeichenzähler für das Limit von 10.000 Zeichen in Gmail',
    'Läuft vollständig im Browser, ohne Tracking und ohne gespeicherte Daten',
  ],
  h1: 'E-Mail-Signatur erstellen',
  heroIntro:
    'Hier können Sie Ihre E-Mail-Signatur erstellen: Daten eintragen, Layout wählen, Signatur kopieren. Sie funktioniert in Gmail, Outlook und Apple Mail.',
  howTitle: 'So erstellen Sie Ihre E-Mail-Signatur',
  howSteps: [
    'Tragen Sie die Angaben ein, die Sie zeigen möchten. Optionale Felder können Sie leer lassen. Sie erscheinen dann nicht im Layout.',
    'Wählen Sie eine Vorlage und eine Akzentfarbe, und prüfen Sie die Vorschau.',
    'Fügen Sie Ihr Logo oder Foto als Link zum Bild ein. Das Bild muss unter einer öffentlichen HTTPS-Adresse liegen, etwa auf Ihrer Firmenwebsite.',
    'Klicken Sie auf "Signatur kopieren" und fügen Sie die Signatur in den Einstellungen Ihres E-Mail-Programms ein. Die Schritte für jedes Programm stehen unten.',
  ],
  imageAlt: 'Illustration: eine geschäftliche E-Mail-Signatur mit Profilbild, Kontaktdaten und Social-Media-Icons.',
  addTitle: 'So fügen Sie die Signatur in Gmail, Outlook und Apple Mail ein',
  addParas: [
    'Gmail im Browser: Klicken Sie oben rechts auf "Einstellungen" und dann auf "Alle Einstellungen aufrufen". Scrollen Sie auf dem Tab "Allgemein" zum Bereich "Signatur". Legen Sie dort eine neue Signatur an, geben Sie ihr einen Namen und fügen Sie sie ein. Klicken Sie ganz unten auf "Änderungen speichern".',
    'Outlook: Öffnen Sie in Outlook im Web oder im neuen Outlook die Einstellungen und dort die Signaturen Ihres Kontos. Fügen Sie die Signatur ein, geben Sie ihr einen Namen und speichern Sie. Im klassischen Outlook für Windows gehen Sie auf "Datei", "Optionen", "E-Mail", "Signaturen".',
    'Apple Mail: Wählen Sie in Mail das Menü "Mail" und dann "Einstellungen". Klicken Sie auf "Signaturen". Wählen Sie das Konto aus, klicken Sie auf das Pluszeichen und fügen Sie die Signatur ein. Ändert sich die Formatierung, deaktivieren Sie die Option, die Signaturen immer an Ihre Standardschrift anpasst.',
  ],
  worksTitle: 'Damit Ihre E-Mail-Signatur überall funktioniert',
  worksParas: [
    'Schreiben Sie die wichtigen Angaben als Text. Outlook blockiert Bilder oft, bis der Empfänger sie freigibt. Eine Signatur, die nur aus einem großen Bild besteht, kann dann leer erscheinen. Name, Telefonnummer und Website als Text sind immer zu sehen.',
    'Halten Sie die Signatur kurz. Gmail erlaubt höchstens 10.000 Zeichen pro Signatur, und Bilder zählen dabei mit. Der Zähler oben zeigt, wie nah Sie an dieser Grenze sind.',
    'Halten Sie Bilder klein und online abrufbar. Google empfiehlt für Signaturbilder etwa 300 bis 400 Pixel Breite und 70 bis 100 Pixel Höhe. Bilder müssen über einen öffentlichen Link erreichbar sein. Menschen außerhalb Ihrer Firma sehen keine Dateien, die auf einem internen Server oder hinter einem Login liegen.',
    'Rechnen Sie auf dem Smartphone mit reinem Text. Die Gmail-App unterstützt nur Signaturen als reinen Text. Nutzen Sie dort die Nur-Text-Version.',
    'Die Signatur steht unter Ihrer Grußformel. Welche Grußformel passt und welcher Schlusssatz darüber steht, lesen Sie in [So beenden Sie eine E-Mail](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Beispiele für geschäftliche E-Mail-Signaturen',
  whenLabel: 'Wann es passt:',
  examples: {
    simple: {
      title: '1. Einfach',
      name: 'Julia Becker',
      role: 'Kundenbetreuerin, Beispiel GmbH',
      contact: '+49 30 23125 100 · beispiel.de',
      when: 'für alltägliche E-Mails, bei denen weniger besser ist.',
    },
    cta: {
      title: '2. Mit Call-to-Action',
      name: 'Julia Becker',
      role: 'Kundenbetreuerin, Beispiel GmbH',
      phone: '+49 30 23125 100',
      button: '15-Minuten-Termin buchen',
      when: 'für Vertrieb und Kundenbetreuung, wenn aus Antworten Termine werden sollen.',
    },
    logo: {
      title: '3. Mit Logo',
      logo: 'LOGO',
      name: 'Lukas Wagner',
      role: 'Leiter Partnerschaften / Beispiel AG',
      contact: '089 99998 100 · beispiel.de',
      when: 'wenn Ihre Marke den Menschen hilft, Sie zu erkennen.',
    },
    shared: {
      title: '4. Gemeinsames Postfach',
      name: 'Support-Team der Beispiel GmbH',
      link: 'hilfe.beispiel.de',
      hours: 'Montag bis Freitag, 9 bis 17 Uhr',
      when: 'für Team-Adressen wie support@, bei denen keine einzelne Person unterschreibt.',
    },
  },
  faqTitle: 'Häufige Fragen zur E-Mail-Signatur',
  faqs: [
    {
      q: 'Kann ich hier kostenlos eine E-Mail-Signatur erstellen?',
      a: 'Ja. Ohne Anmeldung, ohne Wasserzeichen und ohne Limit für die Zahl der Signaturen.',
    },
    {
      q: 'Enthält die Signatur einen Link zu Giggal?',
      a: 'Nur, wenn Sie diese Option ankreuzen. Standardmäßig ist sie aus.',
    },
    {
      q: 'Warum wird mein Logo nicht angezeigt?',
      a: 'Der Bildlink muss öffentlich sein und mit https beginnen. Links zu Dateien auf internen Servern, in privaten Cloud-Ordnern oder hinter einem Login laden bei Empfängern nicht. Manche Programme blenden Bilder außerdem aus, bis der Empfänger sie freigibt. Das gilt vor allem für Outlook.',
    },
    {
      q: 'Kann ich mein Logo hier hochladen?',
      a: 'Noch nicht. Fügen Sie einen Link zu einem Bild ein, das schon online ist. In Gmail können Sie im Signatur-Editor auch direkt ein Bild aus Google Drive oder von Ihrem Computer einfügen.',
    },
    {
      q: 'Was gehört in eine E-Mail-Signatur?',
      a: 'Für die meisten Menschen reichen Name, Position, Firma und ein oder zwei Kontaktwege. Fügen Sie ein Logo, ein Foto oder einen Link hinzu, wenn das dem Leser nützt. Lassen Sie Zitate, lange Haftungsausschlüsse und die Liste aller Ihrer sozialen Netzwerke weg.',
    },
    {
      q: 'Warum sieht meine Signatur auf dem Smartphone anders aus?',
      a: 'Viele E-Mail-Apps auf dem Smartphone zeigen Signaturen als reinen Text, und die Gmail-App unterstützt nur reinen Text. Nutzen Sie für Mobilgeräte die Nur-Text-Version.',
    },
    {
      q: 'Werden meine Daten irgendwo gespeichert?',
      a: 'Nein. Der Generator läuft in Ihrem Browser, und Ihre Angaben werden nicht auf unseren Servern gespeichert.',
    },
  ],
  ctaHeadline: 'Signatur fertig? Prüfen Sie die Adressen, an die Sie schreiben',
}

const fr: EmailSignaturePageStrings = {
  metaTitle: 'Générateur de signature mail gratuit pour Gmail et Outlook | Giggal.ai',
  ogTitle: 'Générateur de signature mail gratuit pour Gmail et Outlook',
  description:
    'Créez une signature mail professionnelle pour Gmail, Outlook ou Apple Mail. Choisissez un modèle, complétez vos coordonnées et copiez en un clic. Gratuit et sans inscription.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Générateur de signature mail gratuit par Giggal.ai',
  crumb: 'Générateur de signature mail',
  appName: 'Générateur de signature mail gratuit',
  featureList: [
    'Génère des signatures HTML basées sur des tableaux pour Gmail, Outlook et Apple Mail',
    "Propose 4 modèles responsives avec couleur d'accent et police personnalisées",
    'Copie en HTML enrichi pour client messagerie et export texte brut pour mobile',
    'Compteur de caractères en direct pour respecter la limite de 10 000 caractères de Gmail',
    'Fonctionne à 100 % dans le navigateur sans traçage ni stockage de données',
  ],
  h1: 'Générateur de signature mail gratuit',
  heroIntro:
    'Renseignez vos coordonnées, choisissez une mise en page et copiez une signature mail prête à l’emploi pour Gmail, Outlook et Apple Mail.',
  howTitle: 'Comment créer votre signature mail',
  howSteps: [
    'Renseignez les informations que vous souhaitez afficher. Laissez vides les champs facultatifs pour les masquer.',
    "Choisissez un modèle, sélectionnez une couleur d'accent et vérifiez l'aperçu instantané.",
    "Ajoutez votre logo ou votre photo en collant le lien de l'image. Elle doit être hébergée sur une URL HTTPS publique (comme le site de votre entreprise).",
    "Cliquez sur « Copier la signature » et collez-la dans les paramètres de signature de votre messagerie. Les étapes détaillées sont indiquées ci-dessous.",
  ],
  imageAlt: "Illustration d'une signature mail professionnelle avec avatar, coordonnées et icônes sociales.",
  extraSection: {
    title: 'Quelle taille pour une signature mail ?',
    paras: [
      'Selon le centre d’aide de Google, une signature dans Gmail peut contenir jusqu’à 10 000 caractères, images comprises. Le compteur intégré à l’outil vous alerte dès que vous approchez ou dépassez ce seuil.',
      'En pratique, une signature mail doit rester concise et lisible sur smartphone. Privilégiez l’essentiel : nom, fonction, entreprise et un ou deux moyens de contact directs.',
      'Si vous insérez un logo ou une photo, veillez à utiliser un format réduit. Les dimensions recommandées se situent généralement autour de 300 à 400 pixels de largeur pour 70 à 100 pixels de hauteur.',
    ],
  },
  addTitle: 'Comment ajouter votre signature dans Gmail, Outlook et Apple Mail',
  addParas: [
    'Gmail sur le web : ouvrez Paramètres, puis Voir tous les paramètres. Dans l’onglet Général, faites défiler jusqu’à Signature, cliquez sur Créer, donnez un nom et collez votre signature. En bas de page, cliquez sur Enregistrer les modifications.',
    'Outlook : dans Outlook sur le web ou le nouvel Outlook, ouvrez Paramètres, puis Comptes et Signatures. Collez la signature, nommez-la et enregistrez. Dans Outlook classique pour Windows, allez dans Fichier > Options > Courrier > Signatures.',
    'Apple Mail : ouvrez Mail, puis Réglages (ou Préférences), puis Signatures. Sélectionnez votre compte, cliquez sur le bouton « + » et collez. Si la mise en forme change, décochez « Toujours utiliser ma police de message par défaut ».',
  ],
  worksTitle: 'Ce qui rend une signature mail compatible partout',
  worksParas: [
    'Conservez les coordonnées essentielles sous forme de texte brut. De nombreux clients de messagerie comme Outlook bloquent les images externes par défaut. Une signature constituée uniquement d’une grande image risque d’apparaître blanche chez votre destinataire.',
    'Restez concis. Gmail limite les signatures à 10 000 caractères de code HTML. Le compteur en temps réel ci-dessus vous aide à garder un code léger et rapide à charger.',
    'Utilisez des images hébergées sur un serveur HTTPS public. Les liens vers des réseaux d’entreprise internes, des dossiers Cloud privés ou protégés par mot de passe ne s’afficheront pas pour vos contacts externes.',
    'Sur smartphone, la signature s’affiche souvent en texte simple. L’application mobile Gmail n’acceptant que le texte brut, utilisez la version texte dédiée générée par notre outil pour vos appareils mobiles.',
    'La signature s’insère directement sous votre formule de politesse. Pour bien choisir votre conclusion, découvrez [comment terminer un mail](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Exemples de signature mail professionnelle',
  whenLabel: 'Quand l’utiliser :',
  examples: {
    simple: {
      title: '1. Épurée',
      name: 'Sophie Martin',
      role: 'Responsable Marketing, Exemple SAS',
      contact: '+33 1 23 45 67 89 · exemple.fr',
      when: 'pour les échanges quotidiens où la clarté et la sobriété sont prioritaires.',
    },
    cta: {
      title: '2. Avec appel à l’action (CTA)',
      name: 'Sophie Martin',
      role: 'Responsable Marketing, Exemple SAS',
      phone: '+33 1 23 45 67 89',
      button: 'Réserver un appel de 15 min',
      when: 'pour les équipes commerciales et support souhaitant faciliter la prise de rendez-vous.',
    },
    logo: {
      title: '3. Avec logo d’entreprise',
      logo: 'LOGO',
      name: 'Thomas Bernard',
      role: 'Directeur des Partenariats / Exemple SAS',
      contact: '01 23 45 67 89 · exemple.fr',
      when: 'pour renforcer immédiatement l’image de marque de votre société.',
    },
    shared: {
      title: '4. Boîte partagée ou équipe',
      name: 'Équipe Support Exemple SAS',
      link: 'assistance.exemple.fr',
      hours: 'Du lundi au vendredi, de 9h à 18h',
      when: 'pour les adresses génériques comme support@ ou contact@ sans expéditeur individuel.',
    },
  },
  faqTitle: 'Questions fréquentes sur la signature mail',
  faqs: [
    {
      q: 'Puis-je créer une signature mail gratuitement ?',
      a: 'Oui. L’outil est entièrement gratuit, sans inscription requise, sans filigrane et sans limite de création.',
    },
    {
      q: 'La signature contient-elle un lien vers Giggal ?',
      a: 'Uniquement si vous cochez volontairement cette option. Elle est désactivée par défaut.',
    },
    {
      q: 'Pourquoi mon logo ou ma photo ne s’affiche-t-il pas ?',
      a: 'L’URL de votre image doit être accessible publiquement et commencer par https://. Les liens situés sur des serveurs internes ou dans des espaces de stockage privés ne peuvent pas être téléchargés par vos correspondants.',
    },
    {
      q: 'Puis-je importer directement mon image ?',
      a: 'Pas pour le moment. Collez simplement le lien d’une image déjà en ligne. Dans Gmail, vous pouvez également insérer une image depuis Google Drive directement dans l’éditeur de signature.',
    },
    {
      q: 'Que doit contenir une signature mail ?',
      a: 'Votre nom complet, votre fonction, le nom de votre entreprise et un ou deux canaux de contact direct suffisent dans la plupart des cas. Évitez les citations superflues et les disclaimers interminables.',
    },
    {
      q: 'Pourquoi ma signature est-elle différente sur mobile ?',
      a: 'Les applications de messagerie sur smartphone privilégient le texte brut, et l’application Gmail mobile ne prend pas en charge le code HTML. Utilisez l’option « Copier la version texte brut ».',
    },
    {
      q: 'Mes données personnelles sont-elles conservées ?',
      a: 'Non. Le générateur s’exécute exclusivement dans votre navigateur web. Aucune de vos coordonnées n’est enregistrée sur nos serveurs.',
    },
  ],
  ctaHeadline: 'Signature créée ? Vérifiez la validité de vos adresses email',
}

const es: EmailSignaturePageStrings = {
  metaTitle: 'Generador de firmas de correo gratis para Gmail y Outlook | Giggal.ai',
  ogTitle: 'Generador de firmas de correo gratis para Gmail y Outlook',
  description:
    'Crea una firma de correo profesional para Gmail, Outlook o Apple Mail. Elige una plantilla, añade tus datos y cópiala en un clic. Gratis, sin registro y sin marcas de agua.',
  ogLocale: 'es_ES',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Generador de firmas de correo electrónico gratis',
  crumb: 'Generador de firmas de correo',
  appName: 'Generador de firmas de correo gratis',
  featureList: [
    'Crea firmas HTML basadas en tablas compatibles con Gmail, Outlook y Apple Mail',
    'Ofrece 4 plantillas adaptables con tipografía y color de acento personalizables',
    'Copia al portapapeles en formato HTML enriquecido y texto plano para móviles',
    'Contador de caracteres en vivo para no superar el límite de 10.000 caracteres de Gmail',
    'Funciona al 100% en el navegador sin rastreo ni almacenamiento de datos',
  ],
  h1: 'Generador de firmas de correo gratis',
  heroIntro:
    'Completa tus datos, selecciona una plantilla y obtén una firma de correo profesional lista para Gmail, Outlook y Apple Mail.',
  howTitle: 'Cómo crear tu firma de correo',
  howSteps: [
    'Introduce la información que deseas mostrar. Los campos opcionales que dejes vacíos no aparecerán.',
    'Elige una plantilla y un color de acento, y comprueba la vista previa al instante.',
    'Añade tu logotipo o foto de perfil pegando el enlace de la imagen en HTTPS público.',
    'Haz clic en «Copiar firma» y pégala en los ajustes de firma de tu cliente de correo.',
  ],
  imageAlt: 'Ejemplo de diseño de firma de correo profesional con avatar, contacto e iconos sociales.',
  extraSection: {
    title: '¿Qué tamaño debe tener una firma de correo?',
    paras: [
      'De acuerdo con las directrices de Gmail, una firma admite un máximo de 10.000 caracteres incluyendo el código HTML y las imágenes. El contador integrado en la herramienta te indicará si superas este límite.',
      'En la práctica profesional, conviene mantener la firma lo más concisa posible. Tres o cuatro líneas facilitan su lectura en teléfonos móviles: nombre, cargo, empresa y métodos de contacto directo.',
      'Si agregas un logo o fotografía, procura que sea una imagen pequeña (alrededor de 300 a 400 píxeles de ancho por 70 a 100 píxeles de alto) para no sobrecargar el correo.',
    ],
  },
  addTitle: 'Cómo añadir tu firma en Gmail, Outlook y Apple Mail',
  addParas: [
    'Gmail en la web: abre Configuración y luego Ver todos los ajustes. En la pestaña General, baja hasta Firma, pulsa Crear nueva, asígnale un nombre y pega el contenido. Baja hasta el final y haz clic en Guardar cambios.',
    'Outlook: en Outlook web o el nuevo Outlook para Windows, abre Configuración > Cuentas > Firmas. Pega la firma y guarda. En Outlook clásico, ve a Archivo > Opciones > Correo > Firmas.',
    'Apple Mail: abre Mail, entra en Ajustes (o Preferencias) > Firmas. Selecciona tu cuenta, pulsa en el botón «+» y pega. Si el formato se altera, desmarca «Usar siempre mi tipo de letra predeterminado».',
  ],
  worksTitle: 'Cómo lograr que una firma funcione en todos los clientes',
  worksParas: [
    'Mantén los datos principales en texto. Outlook suele bloquear las imágenes externas hasta que el lector las autoriza expresamente. Si tu firma es solo una imagen, el destinatario verá un recuadro en blanco.',
    'Sé breve y directo. Gmail impone un límite estricto de 10.000 caracteres de código. Nuestro contador en directo te ayuda a mantener un código limpio y ligero.',
    'Usa imágenes alojadas en servidores web públicos mediante HTTPS. Los archivos en intranets o servicios en la nube protegidos por contraseña no cargarán para destinatarios externos.',
    'En dispositivos móviles se prioriza el texto plano. La app oficial de Gmail para Android e iOS solo admite firmas de texto, por lo que te recomendamos utilizar la versión en texto sin formato que generamos.',
    'La firma se coloca siempre tras tu despedida. Para elegir la fórmula de cierre adecuada, consulta [cómo terminar un correo](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Modelos y ejemplos de firmas de correo',
  whenLabel: 'Cuándo utilizar:',
  examples: {
    simple: {
      title: '1. Sencilla',
      name: 'Carlos Rodríguez',
      role: 'Director de Cuentas, Empresa Ejemplo S.L.',
      contact: '+34 91 123 45 67 · ejemplo.es',
      when: 'correos cotidianos donde se busca rapidez, claridad y sencillez.',
    },
    cta: {
      title: '2. Con llamada a la acción (CTA)',
      name: 'Carlos Rodríguez',
      role: 'Director de Cuentas, Empresa Ejemplo S.L.',
      phone: '+34 91 123 45 67',
      button: 'Reservar reunión de 15 min',
      when: 'para equipos de ventas y soporte que buscan cerrar reuniones y llamadas.',
    },
    logo: {
      title: '3. Con logotipo',
      logo: 'LOGO',
      name: 'Javier Morales',
      role: 'Responsable de Alianzas / Empresa Ejemplo S.L.',
      contact: '91 123 45 67 · ejemplo.es',
      when: 'cuando la imagen corporativa ayuda a generar confianza y reconocimiento.',
    },
    shared: {
      title: '4. Buzón compartido o equipo',
      name: 'Equipo de Soporte Empresa Ejemplo S.L.',
      link: 'ayuda.ejemplo.es',
      hours: 'Lunes a viernes de 9:00 a 18:00',
      when: 'para cuentas grupales tipo soporte@ o contacto@ sin un remitente individual.',
    },
  },
  faqTitle: 'Preguntas frecuentes sobre firmas de correo',
  faqs: [
    {
      q: '¿Puedo crear mi firma de correo gratis?',
      a: 'Sí. Esta herramienta es 100% gratuita, sin necesidad de registro, sin marcas de agua y sin límite de uso.',
    },
    {
      q: '¿La firma incluye algún enlace hacia Giggal?',
      a: 'Únicamente si activas de forma voluntaria la casilla correspondiente. Por defecto está desactivada.',
    },
    {
      q: '¿Por qué no se visualiza mi logotipo o imagen?',
      a: 'El enlace debe ser público y usar el protocolo seguro https://. Las rutas locales o de carpetas privadas en la nube no pueden ser leídas por clientes de correo externos.',
    },
    {
      q: '¿Es posible subir la imagen directamente aquí?',
      a: 'Por el momento no. Pega el enlace de una imagen que ya esté alojada en la web. En Gmail también puedes insertar imágenes desde Google Drive en su propio editor.',
    },
    {
      q: '¿Qué elementos debe contener una firma profesional?',
      a: 'Nombre y apellidos, puesto de trabajo, empresa y una o dos vías de comunicación directa. Conviene prescindir de citas célebres, cláusulas interminables o enlaces a todas las redes sociales.',
    },
    {
      q: '¿Por qué mi firma se ve diferente en el móvil?',
      a: 'La mayoría de lectores móviles y la app de Gmail solo procesan texto plano. Usa la opción «Copiar versión en texto sin formato» para móviles.',
    },
    {
      q: '¿Se almacenan mis datos personales?',
      a: 'No. El generador se ejecuta íntegramente en tu navegador web y no envía tus datos a nuestros servidores.',
    },
  ],
  ctaHeadline: '¿Firma lista? Comprueba la entregabilidad de tus contactos',
}

const it: EmailSignaturePageStrings = {
  metaTitle: 'Generatore di firma email gratis per Gmail e Outlook | Giggal.ai',
  ogTitle: 'Generatore di firma email gratis per Gmail e Outlook',
  description:
    'Crea una firma email professionale per Gmail, Outlook e Apple Mail. Scegli il modello, compila i dati e copia con un clic. Gratis, senza registrazione e senza watermark.',
  ogLocale: 'it_IT',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Generatore di firma email gratis Giggal.ai',
  crumb: 'Generatore di firma email',
  appName: 'Generatore di firma email gratis',
  featureList: [
    'Genera firme HTML basate su tabelle per Gmail, Outlook e Apple Mail',
    '4 modelli responsive con colori d’accento e caratteri personalizzabili',
    'Copia con un clic in HTML formattato o esportazione in solo testo per dispositivi mobili',
    'Conteggio caratteri in tempo reale per rispettare il limite di 10.000 caratteri di Gmail',
    'Elaborazione 100% nel browser: nessun dato salvato o tracciato',
  ],
  h1: 'Generatore di firma email gratis',
  heroIntro:
    'Inserisci i tuoi recapiti, seleziona un layout e copia una firma email perfetta per Gmail, Outlook e Apple Mail.',
  howTitle: 'Come creare la tua firma email',
  howSteps: [
    'Compila le informazioni desiderate. I campi facoltativi lasciati vuoti non compariranno nella firma.',
    'Seleziona il modello e il colore d’accento e controlla l’anteprima in tempo reale.',
    'Aggiungi il logo o la foto profilo incollando l’indirizzo URL pubblico dell’immagine in HTTPS.',
    'Fai clic su «Copia firma» e incollala nelle impostazioni di firma del tuo client di posta.',
  ],
  imageAlt: 'Layout di una firma email professionale con foto profilo, contatti e icone social.',
  extraSection: {
    title: 'Dimensioni e formato della firma email',
    paras: [
      'Secondo la guida di Gmail, una firma può contenere fino a 10.000 caratteri, compresi codice HTML e immagini. Il contatore dell’applicazione ti avverte quando ti avvicini al limite.',
      'Per una leggibilità ottimale su smartphone, è consigliabile mantenere la firma snella: nome, qualifica, azienda e uno o due canali di contatto prioritari.',
      'Se utilizzi un logo, scegli una risoluzione contenuta (indicativamente tra 300 e 400 pixel di larghezza per 70-100 pixel di altezza).',
    ],
  },
  addTitle: 'Come inserire la firma in Gmail, Outlook e Apple Mail',
  addParas: [
    'Gmail web: apri Impostazioni > Visualizza tutte le impostazioni. Nella scheda Generali, scorri fino a Firma, clicca Crea nuova, assegna un nome e incolla. Salva le modifiche in fondo alla pagina.',
    'Outlook: nella versione web o nel nuovo Outlook, apri Impostazioni > Account > Firme. Incolla e salva. In Outlook classico per Windows, vai su File > Opzioni > Posta > Firme.',
    'Apple Mail: apri Mail > Impostazioni (o Preferenze) > Firme. Seleziona l’account, clicca sul pulsante «+» e incolla. Se il layout si modifica, disattiva «Usa sempre font messaggio predefinito».',
  ],
  worksTitle: 'I segreti di una firma email compatibile ovunque',
  worksParas: [
    'Mantieni le informazioni di contatto in testo reale. Client come Outlook bloccano le immagini esterne di default: una firma composta da una sola immagine rischia di apparire completamente bianca.',
    'Evita firme eccessivamente pesanti. Gmail blocca le firme che superano 10.000 caratteri di codice HTML. Il nostro contatore ti garantisce di rimanere nei parametri.',
    'Utilizza immagini caricate su server web pubblici via HTTPS. Cartelle condivise private, drive protetti o server aziendali interni non consentono la visualizzazione ai destinatari esterni.',
    'Sui telefoni cellulari le firme compaiono spesso in solo testo. L’app Gmail per iOS e Android supporta solo testo semplice: per i dispositivi mobili usa la versione solo testo generata.',
    'La firma va posizionata subito sotto la formula di chiusura. Per consigli su saluti e congedi, leggi [come chiudere una email](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Esempi di firma email aziendale',
  whenLabel: 'Quando usarla:',
  examples: {
    simple: {
      title: '1. Essenziale',
      name: 'Marco Rossi',
      role: 'Responsabile Vendite, Esempio S.r.l.',
      contact: '+39 02 1234 5678 · esempio.it',
      when: 'per le comunicazioni di ogni giorno dove la sintesi è fondamentale.',
    },
    cta: {
      title: '2. Con Call to Action',
      name: 'Marco Rossi',
      role: 'Responsabile Vendite, Esempio S.r.l.',
      phone: '+39 02 1234 5678',
      button: 'Prenota chiamata di 15 min',
      when: 'per vendite e account manager che desiderano fissare appuntamenti.',
    },
    logo: {
      title: '3. Con logo aziendale',
      logo: 'LOGO',
      name: 'Stefano Bianchi',
      role: 'Responsabile Partnership / Esempio S.r.l.',
      contact: '02 1234 5678 · esempio.it',
      when: 'quando il brand favorisce il riconoscimento immediato dell’azienda.',
    },
    shared: {
      title: '4. Casella condivisa o team',
      name: 'Supporto Clienti Esempio S.r.l.',
      link: 'assistenza.esempio.it',
      hours: 'Lun - Ven, 09:00 - 18:00',
      when: 'per indirizzi generici come supporto@ o info@ senza un singolo firmatario.',
    },
  },
  faqTitle: 'Domande frequenti sulla firma email',
  faqs: [
    {
      q: 'Posso creare una firma email gratis?',
      a: 'Sì. Il generatore è gratuito, senza registrazione, senza watermark e senza limitazioni.',
    },
    {
      q: 'La firma include link a Giggal?',
      a: 'Solo se selezioni l’opzione esplicita. Di base è disattivata.',
    },
    {
      q: 'Perché il mio logo non viene mostrato?',
      a: 'Il link dell’immagine deve essere pubblico e iniziare con https://. I file memorizzati su server interni o cloud protetti non vengono caricati.',
    },
    {
      q: 'Posso caricare direttamente il file del mio logo?',
      a: 'Non direttamente: è sufficiente incollare l’indirizzo URL di un’immagine già presente online.',
    },
    {
      q: 'Cosa inserire in una firma professionale?',
      a: 'Nome, cognome, ruolo aziendale, nome dell’azienda e un paio di canali di recapito diretto. Evita citazioni prolisse o avvertenze legali chilometriche.',
    },
    {
      q: 'Perché la firma cambia aspetto su smartphone?',
      a: 'La maggior parte dei client mobili visualizza solo testo semplice. Per lo smartphone ti consigliamo di copiare la versione testo semplice.',
    },
    {
      q: 'I miei dati vengono salvati sui vostri server?',
      a: 'No. Il generatore opera interamente nel tuo browser e i dati non vengono trasmessi a server esterni.',
    },
  ],
  ctaHeadline: 'Firma completata? Controlla la validità delle email a cui scrivi',
}

const nl: EmailSignaturePageStrings = {
  metaTitle: 'Gratis e-mail handtekening generator voor Gmail en Outlook | Giggal.ai',
  ogTitle: 'Gratis e-mail handtekening generator voor Gmail en Outlook',
  description:
    'Maak een professionele e-mail handtekening voor Gmail, Outlook en Apple Mail. Kies een template, vul je gegevens in en kopieer in één klik. Gratis en zonder registratie.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Gratis e-mail handtekening generator van Giggal.ai',
  crumb: 'E-mail handtekening generator',
  appName: 'Gratis e-mail handtekening generator',
  featureList: [
    'Genereert tabelgebaseerde HTML-handtekeningen voor Gmail, Outlook en Apple Mail',
    '4 responsieve sjablonen met aanpasbare accentkleuren en lettertypen',
    'Kopieer direct opgemaakte HTML of exporteer platte tekst voor mobiele telefoons',
    'Live tekenteller om binnen de limiet van 10.000 tekens van Gmail te blijven',
    'Werkt 100% lokaal in je browser zonder gegevensopslag of tracking',
  ],
  h1: 'Gratis e-mail handtekening generator',
  heroIntro:
    'Vul je gegevens in, kies een lay-out en kopieer een professionele handtekening voor Gmail, Outlook en Apple Mail.',
  howTitle: 'Hoe maak je een e-mail handtekening',
  howSteps: [
    'Vul de gewenste contactgegevens in. Optionele velden die je leeg laat, verdwijnen automatisch uit de handtekening.',
    'Kies een lay-outsjabloon en een accentkleur, en bekijk het live voorbeeld.',
    'Voeg je bedrijfslogo of profielfoto toe door de openbare HTTPS-afbeeldingslink in te plakken.',
    'Klik op «Handtekening kopiëren» en plak deze in de instellingen van je e-mailprogramma.',
  ],
  imageAlt: 'Voorbeeld van een professionele e-mailhandtekening met profielfoto, gegevens en socialmedia-iconen.',
  extraSection: {
    title: 'Formaat en lengte van een e-mail handtekening',
    paras: [
      'Volgens Google Gmail mag een handtekening maximaal 10.000 tekens bevatten, inclusief HTML-code en afbeeldingen. De teller in onze generator geeft direct aan of je deze limiet overschrijdt.',
      'In de praktijk geldt: houd het beknopt. Een handtekening van drie tot vier regels leest veel prettiger op mobiele schermen: naam, functie, bedrijfsnaam en directe contactmogelijkheden.',
      'Gebruik bij voorkeur compacte afbeeldingen (ongeveer 300 tot 400 pixels breed en 70 tot 100 pixels hoog).',
    ],
  },
  addTitle: 'Zo stel je de handtekening in voor Gmail, Outlook en Apple Mail',
  addParas: [
    'Gmail op internet: open Instellingen > Alle instellingen bekijken. Zoek onder Algemeen naar Handtekening, klik op Nieuwe maken, geef een naam en plak de handtekening. Klik onderaan op Wijzigingen opslaan.',
    'Outlook: in Outlook op het web of het nieuwe Outlook ga je naar Instellingen > Accounts > Handtekeningen. Plak en bewaar. In klassiek Outlook voor Windows: Bestand > Opties > E-mail > Handtekeningen.',
    'Apple Mail: open Mail > Instellingen (of Voorkeuren) > Handtekeningen. Selecteer het account, klik op het «+» symbool en plak de inhoud. Vink indien nodig «Gebruik altijd standaardlettertype» uit.',
  ],
  worksTitle: 'Wat maakt een e-mail handtekening overal compatibel',
  worksParas: [
    'Houd de belangrijkste contactgegevens in platte tekst. Veel e-mailprogramma’s zoals Outlook blokkeren externe afbeeldingen standaard. Een handtekening die alleen uit een afbeelding bestaat, blijft dan leeg.',
    'Houd de code compact. Gmail weigert handtekeningen groter dan 10.000 tekens. Onze handtekening generator zorgt voor efficiënte HTML zonder overbodige stijlen.',
    'Gebruik afbeeldingen op een openbare HTTPS-locatie. Bestanden op interne bedrijfsservers of beveiligde clouddiensten laden niet voor externe ontvangers.',
    'Op smartphones schakelen veel apps over naar platte tekst. Omdat de mobiele Gmail-app geen HTML-handtekeningen ondersteunt, bieden we een handige knop voor platte tekst.',
    'De handtekening sluit aan op je groet. Bekijk voor de juiste formulering ons artikel over [e-mail afsluiten](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Voorbeelden van een professionele e-mail handtekening',
  whenLabel: 'Wanneer te gebruiken:',
  examples: {
    simple: {
      title: '1. Eenvoudig & strak',
      name: 'Daan Jansen',
      role: 'Marketing Manager, Voorbeeld BV',
      contact: '+31 20 123 4567 · voorbeeld.nl',
      when: 'voor dagelijkse zakelijke e-mails waar overzicht vooropstaat.',
    },
    cta: {
      title: '2. Met actieknop (CTA)',
      name: 'Daan Jansen',
      role: 'Marketing Manager, Voorbeeld BV',
      phone: '+31 20 123 4567',
      button: 'Plan een gesprek van 15 min',
      when: 'voor sales en klantcontact om vlot afspraken in te plannen.',
    },
    logo: {
      title: '3. Met bedrijfslogo',
      logo: 'LOGO',
      name: 'Lars van Dijk',
      role: 'Directeur Partnerschappen / Voorbeeld BV',
      contact: '020 123 4567 · voorbeeld.nl',
      when: 'om de herkenbaarheid van je merk direct te versterken.',
    },
    shared: {
      title: '4. Gedeelde mailbox of team',
      name: 'Supportteam Voorbeeld BV',
      link: 'help.voorbeeld.nl',
      hours: 'Maandag t/m vrijdag, 09:00 - 17:00',
      when: 'voor algemene teamadressen zoals support@ of info@.',
    },
  },
  faqTitle: 'Veelgestelde vragen over e-mail handtekeningen',
  faqs: [
    {
      q: 'Kan ik hier gratis een e-mail handtekening maken?',
      a: 'Ja, volledig gratis. Geen account nodig, geen watermerk en onbeperkt aantal handtekeningen.',
    },
    {
      q: 'Bevat de handtekening reclame voor Giggal?',
      a: 'Alleen als je dit zelf aanvinkt in het formulier. Standaard staat dit uit.',
    },
    {
      q: 'Waarom wordt mijn logo of foto niet weergegeven?',
      a: 'De link moet openbaar bereikbaar zijn en beginnen met https://. Links achter een login of in privé mappen laden niet bij de ontvanger.',
    },
    {
      q: 'Kan ik direct een afbeelding uploaden?',
      a: 'Nog niet. Plak een openbare link naar een afbeelding die al online staat.',
    },
    {
      q: 'Wat hoort er in een professionele handtekening te staan?',
      a: 'Naam, functie, bedrijfsnaam en één of twee directe manieren om contact op te nemen. Vermijd lange juridische disclaimers of citaten.',
    },
    {
      q: 'Waarom toont mijn mobiele telefoon de handtekening anders?',
      a: 'Mobiele apps tonen handtekeningen vaak in platte tekst. Gebruik voor telefoons de optie «Platte tekst kopiëren».',
    },
    {
      q: 'Worden mijn gegevens opgeslagen?',
      a: 'Nee. De generator werkt volledig in je eigen webbrowser en stuurt geen gegevens door naar servers.',
    },
  ],
  ctaHeadline: 'Handtekening klaar? Controleer de adressen van je mailinglijst',
}

const pl: EmailSignaturePageStrings = {
  metaTitle: 'Darmowy generator stopki maila dla Gmail i Outlook | Giggal.ai',
  ogTitle: 'Darmowy generator stopki maila dla Gmail i Outlook',
  description:
    'Stwórz profesjonalną stopkę do maila dla programów Gmail, Outlook i Apple Mail. Wybierz szablon, uzupełnij dane i skopiuj jednym kliknięciem. Za darmo i bez rejestracji.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Darmowy generator stopki maila Giggal.ai',
  crumb: 'Generator stopki maila',
  appName: 'Darmowy generator stopki maila',
  featureList: [
    'Tworzy oparte na tabelach stopki HTML dla Gmail, Outlook i Apple Mail',
    '4 responsywne szablony z wyborem krojów pisma i kolorów akcentu',
    'Kopiowanie sformatowanego HTML do schowka oraz eksport czystego tekstu na telefon',
    'Licznik znaków na żywo gwarantujący zgodność z limitem 10 000 znaków w Gmailu',
    'Działa w 100% w przeglądarce bez śledzenia i zapisywania danych',
  ],
  h1: 'Darmowy generator stopki maila',
  heroIntro:
    'Uzupełnij swoje dane, wybierz układ graficzny i skopiuj gotowy podpis do maila w programach Gmail, Outlook oraz Apple Mail.',
  howTitle: 'Jak stworzyć podpis i stopkę do maila',
  howSteps: [
    'Wpisz dane kontaktowe, które chcesz wyświetlić. Puste pola opcjonalne zostaną pominięte w projekcie.',
    'Wybierz szablon oraz kolor akcentu i sprawdź natychmiastowy podgląd stopki.',
    'Dodaj logo firmy lub zdjęcie profilowe, wklejając bezpośredni link HTTPS do grafiki.',
    'Kliknij «Kopiuj stopkę» i wklej ją w ustawieniach podpisu swojego programu pocztowego.',
  ],
  imageAlt: 'Układ profesjonalnej stopki e-mail ze zdjęciem, danymi kontaktowymi i ikonami społecznościowymi.',
  extraSection: {
    title: 'Jaki rozmiar powinna mieć stopka do maila?',
    paras: [
      'Zgodnie z wytycznymi Gmaila, podpis e-mail może mieć maksymalnie 10 000 znaków wraz z kodem HTML. Licznik w naszym narzędziu powiadomi Cię, jeśli zbliżysz się do tej granicy.',
      'W praktyce biznesowej mniej znaczy więcej. Zwięzła stopka złożona z 3–4 linii jest czytelna na ekranach smartfonów: imię i nazwisko, stanowisko, nazwa firmy i bezpośredni kontakt.',
      'W przypadku logo lub zdjęcia zaleca się zachowanie umiarkowanych rozmiarów (ok. 300–400 pikseli szerokości i 70–100 pikseli wysokości).',
    ],
  },
  addTitle: 'Jak wkleić stopkę w Gmailu, Outlooku i Apple Mail',
  addParas: [
    'Gmail w przeglądarce: wejdź w Ustawienia > Zobacz wszystkie ustawienia. W zakładce Ogólne znajdź sekcję Podpis, kliknij Utwórz nowy, nazwij go i wklej skopiowaną zawartość. Zapisz zmiany na dole strony.',
    'Outlook: w Outlook Web lub nowej aplikacji przejdź do Ustawienia > Konta > Podpisy. Wklej stopkę i zapisz. W klasycznym programie Outlook dla Windows wybierz Plik > Opcje > Poczta > Podpisy.',
    'Apple Mail: otwórz program Mail > Ustawienia (lub Preferencje) > Podpisy. Wybierz konto pocztowe, kliknij znak «+» i wklej. W razie potrzeby odznacz opcję «Zawsze dopasowuj domyślną czcionkę».',
  ],
  worksTitle: 'Co sprawia, że stopka wyświetla się poprawnie u każdego odbiorcy',
  worksParas: [
    'Kluczowe informacje zawsze zapisuj jako tekst. Wiele programów pocztowych, w tym Outlook, domyślnie blokuje zewnętrzne grafiki. Stopka złożona wyłącznie z jednego dużego obrazka może wyświetlić się jako puste pole.',
    'Ogranicz nadmiar kodu. Gmail nie akceptuje stopek przekraczających 10 000 znaków HTML. Nasz generator tworzy czysty kod tabelaryczny o minimalnej wadze.',
    'Wykorzystuj grafiki umieszczone na publicznych serwerach z protokołem HTTPS. Grafiki z dysków prywatnych lub sieci wewnętrznych nie załadują się u zewnętrznych odbiorców.',
    'Na telefonach komórkowych aplikacje często preferują zwykły tekst. Mobilny Gmail nie obsługuje sformatowanego HTML w podpisach, dlatego warto skorzystać z wygenerowanej wersji tekstowej.',
    'Stopka znajduje się bezpośrednio pod formułą kończącą list. Zobacz nasze wskazówki, [jak zakończyć maila](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Wzory i szablony stopki maila',
  whenLabel: 'Kiedy stosować:',
  examples: {
    simple: {
      title: '1. Prosta i czytelna',
      name: 'Michał Kowalski',
      role: 'Kierownik ds. Rozwoju, Przykładowa Sp. z o.o.',
      contact: '+48 22 123 45 67 · przyklad.pl',
      when: 'do codziennej korespondencji służbowej, w której liczy się zwięzłość.',
    },
    cta: {
      title: '2. Z przyciskiem akcji (CTA)',
      name: 'Michał Kowalski',
      role: 'Kierownik ds. Rozwoju, Przykładowa Sp. z o.o.',
      phone: '+48 22 123 45 67',
      button: 'Umów rozmowę (15 min)',
      when: 'dla działów sprzedaży i wsparcia, aby ułatwić rezerwację spotkań.',
    },
    logo: {
      title: '3. Z logo firmy',
      logo: 'LOGO',
      name: 'Piotr Wiśniewski',
      role: 'Dyrektor ds. Partnerstw / Przykładowa Sp. z o.o.',
      contact: '22 123 45 67 · przyklad.pl',
      when: 'gdy identyfikacja wizualna buduje zaufanie do marki.',
    },
    shared: {
      title: '4. Skrzynka zespołowa',
      name: 'Dział Obsługi Klienta Przykładowa Sp. z o.o.',
      link: 'pomoc.przyklad.pl',
      hours: 'Poniedziałek – piątek, 9:00 – 17:00',
      when: 'dla ogólnych adresów typu pomoc@ lub kontakt@ bez podpisu imiennego.',
    },
  },
  faqTitle: 'Często zadawane pytania o stopkę maila',
  faqs: [
    {
      q: 'Czy generator stopki jest w pełni darmowy?',
      a: 'Tak. Narzędzie jest bezpłatne, nie wymaga logowania, nie dodaje znaku wodnego i nie nakłada limitów.',
    },
    {
      q: 'Czy stopka zawiera link do Giggal?',
      a: 'Tylko jeśli sam zaznaczysz tę opcję w formularzu. Domyślnie jest wyłączona.',
    },
    {
      q: 'Dlaczego moje logo się nie wyświetla?',
      a: 'Adres grafiki musi być publiczny i zaczynać się od https://. Linki do plików na dyskach prywatnych nie będą widoczne dla odbiorcy.',
    },
    {
      q: 'Czy mogę przesłać plik graficzny z dysku?',
      a: 'Obecnie nie. Wklej bezpośredni link URL do pliku znajdującego się w sieci.',
    },
    {
      q: 'Co powinna zawierać dobra stopka biznesowa?',
      a: 'Imię, nazwisko, stanowisko, nazwę przedsiębiorstwa oraz jeden lub dwa numery kontaktowe. Warto unikać długich cytatów czy wielostronicowych formuł prawnych.',
    },
    {
      q: 'Dlaczego stopka inaczej wygląda na smartfonie?',
      a: 'Programy mobilne (w tym Gmail na smartfonach) obsługują wyłącznie zwykły tekst. Skopiuj wersję tekstową za pomocą dedykowanego przycisku.',
    },
    {
      q: 'Czy moje dane są zapisywane na serwerze?',
      a: 'Nie. Generowanie stopki odbywa się w całości w Twojej przeglądarce, a wprowadzone dane nie trafiają do naszej bazy.',
    },
  ],
  ctaHeadline: 'Stopka gotowa? Sprawdź jakość adresów na swojej liście mailingowej',
}

const id: EmailSignaturePageStrings = {
  metaTitle: 'Generator Tanda Tangan Email Gratis untuk Gmail dan Outlook | Giggal.ai',
  ogTitle: 'Generator Tanda Tangan Email Gratis untuk Gmail dan Outlook',
  description:
    'Buat tanda tangan email profesional untuk Gmail, Outlook, atau Apple Mail. Pilih templat, isi kontak, dan salin dalam satu klik. Gratis tanpa registrasi dan tanpa watermark.',
  ogLocale: 'id_ID',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Generator tanda tangan email gratis dari Giggal.ai',
  crumb: 'Generator Tanda Tangan Email',
  appName: 'Generator Tanda Tangan Email Gratis',
  featureList: [
    'Membuat tanda tangan email berbasis tabel HTML yang kompatibel dengan Gmail, Outlook, dan Apple Mail',
    'Menyediakan 4 templat responsif dengan warna aksen dan jenis huruf kustom',
    'Salin kode HTML kaya atau ekspor format teks polos untuk aplikasi seluler',
    'Penghitung karakter langsung agar tetap berada di bawah batas 10.000 karakter Gmail',
    'Berjalan 100% di browser tanpa pelacakan atau penyimpanan data pribadi',
  ],
  h1: 'Generator Tanda Tangan Email Gratis',
  heroIntro:
    'Lengkapi data Anda, pilih tata letak, dan salin tanda tangan email profesional yang siap digunakan di Gmail, Outlook, dan Apple Mail.',
  howTitle: 'Cara membuat tanda tangan di email',
  howSteps: [
    'Isi informasi yang ingin Anda tampilkan. Bagian opsional yang dikosongkan tidak akan muncul pada hasil akhir.',
    'Pilih templat tata letak dan warna aksen, lalu periksa pratinjau langsung di layar.',
    'Tambahkan logo perusahaan atau foto profil dengan menempelkan tautan gambar publik berprotokol HTTPS.',
    'Klik «Salin Tanda Tangan» dan tempelkan ke menu pengaturan tanda tangan pada aplikasi email Anda.',
  ],
  imageAlt: 'Ilustrasi tata letak tanda tangan email profesional dengan foto profil, data kontak, dan ikon medsos.',
  extraSection: {
    title: 'Berapa batas ukuran tanda tangan email?',
    paras: [
      'Berdasarkan Pusat Bantuan Gmail, tanda tangan email dapat memuat hingga 10.000 karakter termasuk kode HTML dan gambar. Penghitung karakter kami akan memberi tahu jika ukuran melebihi batas.',
      'Secara praktis, tanda tangan email sebaiknya dibuat ringkas agar nyaman dibaca di layar ponsel pintar. Cukup cantumkan nama, jabatan, nama instansi/perusahaan, dan saluran kontak utama.',
      'Jika menyematkan logo atau foto, gunakan dimensi yang proporsional (sekitar 300–400 piksel lebar dan 70–100 piksel tinggi).',
    ],
  },
  addTitle: 'Cara memasang tanda tangan di Gmail, Outlook, dan Apple Mail',
  addParas: [
    'Gmail di peramban web: buka Pengaturan (ikon roda gigi) > Lihat semua setelan. Pada tab Umum, cari bagian Tanda Tangan, klik Buat baru, beri nama, dan tempel tanda tangan. Gulir ke bawah lalu klik Simpan Perubahan.',
    'Outlook: pada Outlook web atau versi baru, buka Pengaturan > Akun > Tanda Tangan. Tempel dan simpan. Di Outlook klasik Windows, buka File > Opsi > Email > Tanda Tangan.',
    'Apple Mail: buka Mail > Pengaturan (atau Preferensi) > Tanda Tangan. Pilih akun yang diinginkan, klik ikon «+», lalu tempel tanda tangan. Jika font berubah, nonaktifkan opsi font pesan default.',
  ],
  worksTitle: 'Faktor penting agar tanda tangan email tampil rapi di semua aplikasi',
  worksParas: [
    'Pastikan informasi penting tetap berupa teks asli. Banyak aplikasi email (terutama Outlook) memblokir gambar eksternal secara default. Jika tanda tangan hanya berupa satu gambar besar, penerima mungkin hanya melihat kotak kosong.',
    'Buat tata letak yang efisien. Gmail membatasi kode tanda tangan maksimal 10.000 karakter. Generator kami menghasilkan kode HTML yang ringan dan terstruktur.',
    'Gunakan tautan gambar HTTPS publik. Tautan dari folder penyimpanan cloud privat atau jaringan lokal kantor tidak akan bisa diakses oleh pihak luar.',
    'Pada aplikasi email ponsel, tanda tangan sering ditampilkan sebagai teks polos. Aplikasi Gmail di Android dan iOS hanya mendukung teks biasa, jadi manfaatkan tombol «Salin Versi Teks Polos» kami.',
    'Tanda tangan diletakkan tepat di bawah kalimat penutup surat. Untuk panduan salam penutup, baca artikel kami tentang [cara menutup email](/blog/how-to-end-an-email).',
  ],
  examplesTitle: 'Contoh tanda tangan email profesional',
  whenLabel: 'Waktu penggunaan:',
  examples: {
    simple: {
      title: '1. Sederhana & Bersih',
      name: 'Budi Santoso',
      role: 'Manajer Pemasaran, PT Contoh Abadi',
      contact: '+62 21 555 1234 · contoh.id',
      when: 'untuk korespondensi harian yang membutuhkan tampilan rapi dan ringkas.',
    },
    cta: {
      title: '2. Dengan Tombol Aksi (CTA)',
      name: 'Budi Santoso',
      role: 'Manajer Pemasaran, PT Contoh Abadi',
      phone: '+62 21 555 1234',
      button: 'Jadwalkan Konsultasi 15 Menit',
      when: 'untuk tim penjualan atau layanan pelanggan guna mendorong pertemuan.',
    },
    logo: {
      title: '3. Dengan Logo Perusahaan',
      logo: 'LOGO',
      name: 'Hendra Wijaya',
      role: 'Direktur Kemitraan / PT Contoh Abadi',
      contact: '021 555 1234 · contoh.id',
      when: 'untuk memperkuat identitas dan kredibilitas merek bisnis Anda.',
    },
    shared: {
      title: '4. Akun Tim atau Bersama',
      name: 'Tim Layanan Pelanggan PT Contoh Abadi',
      link: 'bantuan.contoh.id',
      hours: 'Senin - Jumat, 09.00 - 17.00 WIB',
      when: 'untuk email bersama seperti support@ atau halo@ tanpa nama perorangan.',
    },
  },
  faqTitle: 'Pertanyaan umum seputar tanda tangan email',
  faqs: [
    {
      q: 'Apakah generator tanda tangan email ini gratis?',
      a: 'Ya, 100% gratis tanpa perlu registrasi akun, tanpa watermark, dan tanpa batasan jumlah pembuatan.',
    },
    {
      q: 'Apakah tanda tangan akan memuat tautan promosi Giggal?',
      a: 'Hanya jika Anda secara sengaja mencentang opsi tersebut. Secara bawaan opsi ini mati.',
    },
    {
      q: 'Mengapa logo atau foto saya tidak muncul?',
      a: 'Tautan gambar harus berupa URL HTTPS publik. Berkas dari folder Google Drive privat atau penyimpanan lokal tidak dapat dimuat oleh email penerima.',
    },
    {
      q: 'Bisakah saya mengunggah berkas gambar langsung dari laptop?',
      a: 'Untuk saat ini belum tersedia unggah langsung. Tempelkan tautan gambar yang sudah online di internet.',
    },
    {
      q: 'Informasi apa saja yang wajib dicantumkan dalam tanda tangan email?',
      a: 'Nama lengkap, jabatan, nama perusahaan, serta 1–2 saluran kontak utama. Hindari kutipan motivasi yang terlalu panjang atau disclaimer berlebihan.',
    },
    {
      q: 'Mengapa tanda tangan tampak berbeda di ponsel?',
      a: 'Aplikasi email seluler sering kali menyederhanakan format HTML menjadi teks polos. Anda dapat menyalin versi teks polos khusus untuk perangkat ponsel.',
    },
    {
      q: 'Apakah data pribadi saya disimpan di server Giggal?',
      a: 'Tidak. Seluruh pembuatan tanda tangan diproses langsung di dalam peramban web Anda dan tidak disimpan di server kami.',
    },
  ],
  ctaHeadline: 'Tanda tangan sudah siap? Pastikan alamat email kontak Anda aktif dan valid',
}

const ja: EmailSignaturePageStrings = {
  metaTitle: 'メール署名作成ツール（無料）：Gmail・Outlook対応 | Giggal.ai',
  ogTitle: 'メール署名作成ツール（無料）：Gmail・Outlook対応',
  description:
    'Gmail、Outlook、Apple Mailで使えるメール署名を無料で作成できます。テンプレートを選んで情報を入力し、ワンクリックでコピーします。登録は不要で、透かしも入りません。',
  ogLocale: 'ja_JP',
  ogImage: '/tools/email-signature-generator-og-v2.webp',
  ogAlt: 'Giggal.aiの無料メール署名作成ツール',
  crumb: 'メール署名作成ツール',
  appName: '無料メール署名作成ツール',
  featureList: [
    'Gmail、Outlook、Apple Mailで使えるテーブル形式のHTML署名を作成',
    '4種類のレスポンシブなテンプレートから選択し、アクセントカラーとフォントを変更',
    'HTML形式でのコピーと、スマートフォンのメールアプリ向けのテキスト形式での書き出し',
    'Gmailの10,000文字の上限を超えないよう、文字数をリアルタイムで表示',
    '100%ブラウザ内で動作し、トラッキングやデータの保存はありません',
  ],
  h1: '無料のメール署名作成ツール',
  heroIntro: '情報を入力してレイアウトを選ぶと、Gmail、Outlook、Apple Mailで使えるメール署名をコピーできます。',
  howTitle: 'メール署名の作り方',
  howSteps: [
    '表示したい情報を入力します。任意の項目を空欄にすると、その項目はレイアウトから消えます。',
    'テンプレートとアクセントカラーを選び、プレビューを確認します。',
    'ロゴや写真は、画像のリンクを貼り付けて追加します。画像は、会社のウェブサイトなど公開されたHTTPSのアドレスに置かれている必要があります。',
    '「署名をコピー」をクリックし、メールアプリの署名設定に貼り付けます。アプリごとの手順は下記のとおりです。',
  ],
  imageAlt: 'アイコン画像、連絡先、SNSアイコンを配置したビジネス向けメール署名のレイアウトのイラスト。',
  addTitle: 'Gmail、Outlook、Apple Mailに署名を設定する方法',
  addParas: [
    'ウェブ版Gmail：「設定」を開き、「すべての設定を表示」を選びます。「全般」タブの「署名」で「新規作成」をクリックし、名前を付けて貼り付けます。ページの一番下までスクロールし、「変更を保存」をクリックします。',
    'Outlook：ウェブ版Outlookまたは新しいOutlookでは、「設定」から「アカウント」、「署名」の順に開きます。署名を貼り付け、名前を付けて保存します。Windows版の従来のOutlookでは、「ファイル」、「オプション」、「メール」、「署名」の順に進みます。',
    'Apple Mail：「メール」から「設定」（古いバージョンでは「環境設定」）、「署名」の順に開きます。アカウントを選び、「+」ボタンをクリックして貼り付けます。書式が変わる場合は、「常にデフォルトのメッセージフォントに合わせる」のチェックを外します。',
  ],
  worksTitle: 'どのメールアプリでも正しく表示される署名のポイント',
  worksParas: [
    '大切な情報はテキストで入れます。Outlookは、読み手が許可するまで画像をブロックすることがよくあります。署名全体が1枚の大きな画像だと、空白で表示される場合があります。名前、電話番号、ウェブサイトをテキストで入れておけば、必ず表示されます。',
    '署名は短くまとめます。Gmailの署名の上限は10,000文字で、画像もこの上限に含まれます。上の文字数カウンターで、上限までの残りを確認できます。',
    '画像は小さくし、公開された場所に置きます。Googleは、署名画像の目安を幅300〜400ピクセル、高さ70〜100ピクセルとしています。画像は公開リンクから読み込まれる必要があります。社内サーバー上のファイルやログインが必要な場所のファイルは、社外の相手には表示されません。',
    'スマートフォンではテキスト形式で表示されると考えておきます。Gmailのモバイルアプリはテキスト形式の署名にしか対応していないため、そちらではテキスト版のコピーを使います。',
    '署名は結びの言葉の下に置きます。結びの言葉の選び方とその前に置く一文については、[メールの締め方](/blog/how-to-end-an-email)をご覧ください。',
  ],
  examplesTitle: 'ビジネス向けメール署名の例',
  whenLabel: '使う場面：',
  examples: {
    simple: {
      title: '1. シンプル',
      name: '山田 花子',
      role: '株式会社サンプル アカウントマネージャー',
      contact: '03-0000-1234 · example.com',
      when: '情報が少ないほうがよい、普段のメール。',
    },
    cta: {
      title: '2. 行動を促すボタン付き',
      name: '山田 花子',
      role: '株式会社サンプル アカウントマネージャー',
      phone: '03-0000-1234',
      button: '15分の打ち合わせを予約する',
      when: '営業や顧客対応で、返信を打ち合わせにつなげたいとき。',
    },
    logo: {
      title: '3. ロゴ付き',
      logo: 'LOGO',
      name: '佐藤 健',
      role: 'パートナーシップ責任者／Example Inc.',
      contact: '06-0000-4477 · example.com',
      when: 'ブランドを見て相手に気づいてもらいたいとき。',
    },
    shared: {
      title: '4. 共有アドレス',
      name: '株式会社サンプル サポートチーム',
      link: 'help.example.com',
      hours: '月曜〜金曜 9:00〜17:00（日本時間）',
      when: 'support@ のような、特定の個人が署名しないチームのアドレス。',
    },
  },
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'このメール署名作成ツールは無料ですか？',
      a: 'はい。登録は不要で、透かしも入らず、作成できる署名の数にも制限はありません。',
    },
    {
      q: '署名にGiggalへのリンクは入りますか？',
      a: 'そのオプションにチェックを入れた場合だけ入ります。初期設定ではオフです。',
    },
    {
      q: 'ロゴが表示されないのはなぜですか？',
      a: '画像のリンクは公開されていて、httpsで始まる必要があります。社内サーバー上のファイル、非公開のクラウドフォルダ、ログインが必要な場所へのリンクは、受信者側で読み込まれません。また、一部のアプリ、特にOutlookは、読み手が許可するまで画像を表示しません。',
    },
    {
      q: 'ここでロゴをアップロードできますか？',
      a: '現在はできません。すでにオンラインにある画像のリンクを貼り付けてください。Gmailでは、署名の編集画面からGoogleドライブやパソコンの画像を挿入することもできます。',
    },
    {
      q: 'メール署名には何を入れればよいですか？',
      a: '多くの場合、名前、役職、会社名と、1〜2つの連絡先があれば十分です。読み手の役に立つなら、ロゴ、写真、リンクを1つ加えます。名言、長い免責事項、利用しているすべてのSNSは入れないようにします。',
    },
    {
      q: 'スマートフォンで署名の見た目が変わるのはなぜですか？',
      a: 'スマートフォンのメールアプリの多くは署名をテキスト形式で表示し、Gmailアプリはテキスト形式にしか対応していません。モバイルではテキスト版のコピーを使ってください。',
    },
    {
      q: '入力した情報はどこかに保存されますか？',
      a: 'いいえ。このツールはブラウザ内で動作し、入力した情報は当社のサーバーに保存されません。',
    },
  ],
  ctaHeadline: '署名ができたら、送信先のメールアドレスも確認しましょう。',
}

export const EMAIL_SIGNATURE_PAGE_STRINGS: Partial<Record<Locale, EmailSignaturePageStrings>> & {
  en: EmailSignaturePageStrings
} = { en, 'pt-br': ptBr, de, fr, es, it, nl, pl, id, ja }
