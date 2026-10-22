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
  ogImage: '/og-card.png',
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
  ogImage: '/og-card.png',
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

export const EMAIL_SIGNATURE_PAGE_STRINGS: Partial<Record<Locale, EmailSignaturePageStrings>> & {
  en: EmailSignaturePageStrings
} = { en, 'pt-br': ptBr, de }
