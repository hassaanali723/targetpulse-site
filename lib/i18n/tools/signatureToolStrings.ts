// Labels and messages of the email signature generator (components/tools/EmailSignature/EmailSignatureTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/emailSignatureStrings.ts.
//
// English is the original wording moved here unchanged. The words the generator
// writes into the signature itself (Phone:, Email:, the credit line) are in
// `signature`; English uses the core's SIGNATURE_LABELS_EN. The image URL
// warnings come from lib/tools/emailSignatureCore.ts for English; the optional
// `imageWarnings` map is used for the other languages, keyed by the core's codes.
//
// `defaults` are the sample details the form starts with, so the preview is not
// empty. A language can use local examples (a local name, company and phone format).
// Font names, social network names and accent colors are data and stay in the core.

import type { Locale } from '@/lib/i18n/clusters'
import {
  SIGNATURE_LABELS_EN,
  type ImageUrlWarningCode,
  type SignatureLabels,
  type SignatureTemplateId,
} from '@/lib/tools/emailSignatureCore'

/** Every input of the form, by the name of the value it sets. */
export type SignatureField =
  | 'fullName'
  | 'jobTitle'
  | 'company'
  | 'department'
  | 'pronouns'
  | 'phone'
  | 'mobile'
  | 'email'
  | 'website'
  | 'address'
  | 'logoUrl'
  | 'photoUrl'
  | 'linkedin'
  | 'x'
  | 'facebook'
  | 'instagram'
  | 'youtube'
  | 'ctaText'
  | 'ctaUrl'
  | 'disclaimer'

export interface SignatureToolStrings {
  /** Sample details the form starts with. Fields left out here start empty. */
  defaults: {
    fullName: string
    jobTitle: string
    company: string
    phone: string
    email: string
    website: string
  }
  /** Label (with "(optional)" or "*" where shown) and placeholder of each input. */
  fields: Record<SignatureField, { label: string; placeholder: string }>

  // Form steps
  templateStep: string
  templates: Record<SignatureTemplateId, string>
  fontLabel: string
  colorLabel: string
  /** aria-label of an accent color swatch. */
  colorAria: (hex: string) => string
  personalStep: string
  contactStep: string
  imagesStep: string
  imagesHelp: string
  socialStep: string
  socialIcons: string
  ctaStep: string
  madeWith: string

  // Output
  tabPreview: string
  tabHtml: string
  tabPlain: string
  /** Character counter: "1,234/10,000 chars". */
  chars: (n: number) => string
  overLimit: string
  plainHelp: string
  copySignature: string
  copiedSignature: string
  copyHtml: string
  download: string
  /** File name of the downloaded signature. */
  downloadName: string
  copyPlain: string

  /** Words written into the signature itself. */
  signature: SignatureLabels

  /** Image URL warnings by core code. English leaves this out and shows the core's own text. */
  imageWarnings?: Record<ImageUrlWarningCode, string>
}

const en: SignatureToolStrings = {
  defaults: {
    fullName: 'Jane Doe',
    jobTitle: 'Account Manager',
    company: 'Example Ltd',
    phone: '+44 20 7946 0000',
    email: 'jane@example.com',
    website: 'example.com',
  },
  fields: {
    fullName: { label: 'Full Name *', placeholder: 'Jane Doe' },
    jobTitle: { label: 'Job Title', placeholder: 'Account Manager' },
    company: { label: 'Company', placeholder: 'Example Ltd' },
    department: { label: 'Department (optional)', placeholder: 'Client Success' },
    pronouns: { label: 'Pronouns (optional)', placeholder: 'she/her' },
    phone: { label: 'Phone', placeholder: '+44 20 7946 0000' },
    mobile: { label: 'Mobile (optional)', placeholder: '+44 7700 900077' },
    email: { label: 'Email', placeholder: 'jane@example.com' },
    website: { label: 'Website', placeholder: 'example.com' },
    address: { label: 'Office Address (optional)', placeholder: '100 Business Way, London' },
    logoUrl: { label: 'Company Logo URL', placeholder: 'https://example.com/logo.png' },
    photoUrl: { label: 'Profile Photo URL', placeholder: 'https://example.com/photo.jpg' },
    linkedin: { label: 'LinkedIn Profile URL', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'X / Twitter URL', placeholder: 'https://x.com/...' },
    facebook: { label: 'Facebook URL', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'Instagram URL', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'YouTube Channel URL', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Button Text (optional)', placeholder: 'Book a 15-minute call' },
    ctaUrl: { label: 'Button URL', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Legal Disclaimer (optional)', placeholder: 'The content of this email is confidential...' },
  },

  templateStep: '1. Select Layout Template',
  templates: {
    'simple-text': 'Simple text',
    'logo-left': 'Logo left',
    'photo-divider': 'Photo divider',
    compact: 'Compact',
  },
  fontLabel: 'Font Family',
  colorLabel: 'Accent Color',
  colorAria: (hex) => `Color ${hex}`,
  personalStep: '2. Personal & Company Details',
  contactStep: '3. Contact Information',
  imagesStep: '4. Logo & Photo Links',
  imagesHelp: 'Paste an image link. Must be a public HTTPS URL (no direct file uploads).',
  socialStep: '5. Social Links (Optional)',
  socialIcons: 'Use small icons instead of text',
  ctaStep: '6. Call-to-Action & Legal',
  madeWith: 'Show “Made with Giggal” link (off by default)',

  tabPreview: 'Preview',
  tabHtml: 'HTML Code',
  tabPlain: 'Plain Text',
  chars: (n) => `${n.toLocaleString()}/10,000 chars`,
  overLimit: "Exceeds Gmail's 10,000 character signature limit. Shorten text or URLs.",
  plainHelp: 'Recommended for mobile email apps such as Gmail on iOS/Android.',
  copySignature: 'Copy signature',
  copiedSignature: 'Signature Copied! Paste into Email Client',
  copyHtml: 'Copy HTML code',
  download: 'Download .html',
  downloadName: 'signature.html',
  copyPlain: 'Copy plain-text version',

  signature: SIGNATURE_LABELS_EN,
}

const ptBrTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Ana Souza',
    jobTitle: 'Gerente de Contas',
    company: 'Exemplo Ltda.',
    phone: '+55 11 3000-0000',
    email: 'ana@exemplo.com.br',
    website: 'exemplo.com.br',
  },
  fields: {
    fullName: { label: 'Nome completo *', placeholder: 'Ana Souza' },
    jobTitle: { label: 'Cargo', placeholder: 'Gerente de Contas' },
    company: { label: 'Empresa', placeholder: 'Exemplo Ltda.' },
    department: { label: 'Departamento (opcional)', placeholder: 'Sucesso do Cliente' },
    pronouns: { label: 'Pronomes (opcional)', placeholder: 'ela/dela' },
    phone: { label: 'Telefone', placeholder: '+55 11 3000-0000' },
    mobile: { label: 'Celular (opcional)', placeholder: '+55 11 90000-0000' },
    email: { label: 'E-mail', placeholder: 'ana@exemplo.com.br' },
    website: { label: 'Site', placeholder: 'exemplo.com.br' },
    address: { label: 'Endereço do escritório (opcional)', placeholder: 'Rua Exemplo, 100, São Paulo, SP' },
    logoUrl: { label: 'URL do logo da empresa', placeholder: 'https://exemplo.com.br/logo.png' },
    photoUrl: { label: 'URL da foto de perfil', placeholder: 'https://exemplo.com.br/foto.jpg' },
    linkedin: { label: 'URL do perfil no LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'URL do X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'URL do Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'URL do Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'URL do canal no YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Texto do botão (opcional)', placeholder: 'Agende uma conversa de 15 minutos' },
    ctaUrl: { label: 'URL do botão', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Aviso legal (opcional)', placeholder: 'O conteúdo deste e-mail é confidencial...' },
  },

  templateStep: '1. Escolha o modelo de assinatura',
  templates: {
    'simple-text': 'Texto simples',
    'logo-left': 'Logo à esquerda',
    'photo-divider': 'Foto com divisória',
    compact: 'Compacto',
  },
  fontLabel: 'Fonte',
  colorLabel: 'Cor de destaque',
  colorAria: (hex) => `Cor ${hex}`,
  personalStep: '2. Dados pessoais e da empresa',
  contactStep: '3. Informações de contato',
  imagesStep: '4. Links do logo e da foto',
  imagesHelp: 'Cole o link de uma imagem. Precisa ser uma URL HTTPS pública (sem envio de arquivos).',
  socialStep: '5. Redes sociais (opcional)',
  socialIcons: 'Usar ícones pequenos em vez de texto',
  ctaStep: '6. Chamada para ação e aviso legal',
  madeWith: 'Mostrar o link “Criado com Giggal.ai” (vem desativado)',

  tabPreview: 'Prévia',
  tabHtml: 'Código HTML',
  tabPlain: 'Texto simples',
  chars: (n) => `${n.toLocaleString('pt-BR')}/10.000 caracteres`,
  overLimit: 'Passa do limite de 10.000 caracteres do Gmail. Encurte o texto ou os links.',
  plainHelp: 'Recomendado para apps de e-mail no celular, como o Gmail no iOS e no Android.',
  copySignature: 'Copiar assinatura',
  copiedSignature: 'Assinatura copiada! Cole no seu app de e-mail',
  copyHtml: 'Copiar código HTML',
  download: 'Baixar .html',
  downloadName: 'assinatura.html',
  copyPlain: 'Copiar versão em texto simples',

  signature: {
    phone: 'Telefone:',
    mobile: 'Celular:',
    email: 'E-mail:',
    web: 'Site:',
    address: 'Endereço:',
    logoAlt: 'Logo',
    madeWith: 'Criado com Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'A URL da imagem precisa começar com https://',
    invalid: 'URL de imagem inválida',
  },
}

const deTool: SignatureToolStrings = {
  // German sample details: a German name, beispiel.de and German phone formats.
  // Phone numbers are Bundesnetzagentur "Drama Numbers" (never assigned):
  // 030 23125 000-999, 089 99998 000-999 and the listed mobile 0152 28817386.
  // https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Nummerierung/DramaNumbers/artikel.html
  defaults: {
    fullName: 'Julia Becker',
    jobTitle: 'Kundenbetreuerin',
    company: 'Beispiel GmbH',
    phone: '+49 30 23125 100',
    email: 'julia.becker@beispiel.de',
    website: 'beispiel.de',
  },
  fields: {
    fullName: { label: 'Vollständiger Name *', placeholder: 'Julia Becker' },
    jobTitle: { label: 'Position', placeholder: 'Kundenbetreuerin' },
    company: { label: 'Firma', placeholder: 'Beispiel GmbH' },
    department: { label: 'Abteilung (optional)', placeholder: 'Kundenservice' },
    pronouns: { label: 'Pronomen (optional)', placeholder: 'sie/ihr' },
    phone: { label: 'Telefon', placeholder: '+49 30 23125 100' },
    mobile: { label: 'Mobil (optional)', placeholder: '+49 152 28817386' },
    email: { label: 'E-Mail', placeholder: 'julia.becker@beispiel.de' },
    website: { label: 'Website', placeholder: 'beispiel.de' },
    address: { label: 'Büroadresse (optional)', placeholder: 'Musterstraße 1, 10115 Berlin' },
    logoUrl: { label: 'Firmenlogo-URL', placeholder: 'https://beispiel.de/logo.png' },
    photoUrl: { label: 'Profilfoto-URL', placeholder: 'https://beispiel.de/foto.jpg' },
    linkedin: { label: 'LinkedIn-Profil-URL', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'X-/Twitter-URL', placeholder: 'https://x.com/...' },
    facebook: { label: 'Facebook-URL', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'Instagram-URL', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'YouTube-Kanal-URL', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Button-Text (optional)', placeholder: '15-Minuten-Termin buchen' },
    ctaUrl: { label: 'Button-URL', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Rechtlicher Hinweis (optional)', placeholder: 'Der Inhalt dieser E-Mail ist vertraulich...' },
  },

  templateStep: '1. Layout-Vorlage wählen',
  templates: {
    'simple-text': 'Einfacher Text',
    'logo-left': 'Logo links',
    'photo-divider': 'Foto mit Linie',
    compact: 'Kompakt',
  },
  fontLabel: 'Schriftart',
  colorLabel: 'Akzentfarbe',
  colorAria: (hex) => `Farbe ${hex}`,
  personalStep: '2. Persönliche Angaben und Firma',
  contactStep: '3. Kontaktdaten',
  imagesStep: '4. Links zu Logo und Foto',
  imagesHelp: 'Fügen Sie einen Bildlink ein. Er muss eine öffentliche HTTPS-URL sein. Direktes Hochladen von Dateien ist nicht möglich.',
  socialStep: '5. Social-Media-Links (optional)',
  socialIcons: 'Kleine Icons statt Text verwenden',
  ctaStep: '6. Button und rechtlicher Hinweis',
  madeWith: 'Link "Erstellt mit Giggal.ai" anzeigen (standardmäßig aus)',

  tabPreview: 'Vorschau',
  tabHtml: 'HTML-Code',
  tabPlain: 'Nur Text',
  chars: (n) => `${n.toLocaleString('de-DE')}/10.000 Zeichen`,
  overLimit: 'Überschreitet das Limit von 10.000 Zeichen für Signaturen in Gmail. Kürzen Sie Text oder URLs.',
  plainHelp: 'Empfohlen für E-Mail-Apps auf dem Smartphone, etwa Gmail unter iOS oder Android.',
  copySignature: 'Signatur kopieren',
  copiedSignature: 'Signatur kopiert. Jetzt im E-Mail-Programm einfügen',
  copyHtml: 'HTML-Code kopieren',
  download: '.html herunterladen',
  downloadName: 'signatur.html',
  copyPlain: 'Nur-Text-Version kopieren',

  signature: {
    phone: 'Telefon:',
    mobile: 'Mobil:',
    email: 'E-Mail:',
    web: 'Web:',
    address: 'Adresse:',
    logoAlt: 'Logo',
    madeWith: 'Erstellt mit Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'Die Bild-URL muss mit https:// beginnen',
    invalid: 'Die Bild-URL ist ungültig',
  },
}

export const SIGNATURE_TOOL_STRINGS: Partial<Record<Locale, SignatureToolStrings>> & { en: SignatureToolStrings } = { en, 'pt-br': ptBrTool, de: deTool }

export function signatureToolStrings(locale: Locale): SignatureToolStrings {
  return SIGNATURE_TOOL_STRINGS[locale] ?? en
}

/** The warning under an image URL field: the core's English text, or the localized one by code. */
export function signatureImageWarning(
  t: SignatureToolStrings,
  v: { warning?: string; code?: ImageUrlWarningCode },
): string | undefined {
  return (t.imageWarnings && v.code && t.imageWarnings[v.code]) || v.warning
}
