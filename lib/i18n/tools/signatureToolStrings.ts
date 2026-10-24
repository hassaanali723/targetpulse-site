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

const frTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Sophie Martin',
    jobTitle: 'Responsable Marketing',
    company: 'Exemple SAS',
    phone: '+33 1 23 45 67 89',
    email: 'sophie.martin@exemple.fr',
    website: 'exemple.fr',
  },
  fields: {
    fullName: { label: 'Nom complet *', placeholder: 'Sophie Martin' },
    jobTitle: { label: 'Poste / Titre', placeholder: 'Responsable Marketing' },
    company: { label: 'Entreprise', placeholder: 'Exemple SAS' },
    department: { label: 'Département (facultatif)', placeholder: 'Marketing & Communication' },
    pronouns: { label: 'Pronoms (facultatif)', placeholder: 'elle/elle' },
    phone: { label: 'Téléphone', placeholder: '+33 1 23 45 67 89' },
    mobile: { label: 'Mobile (facultatif)', placeholder: '+33 6 12 34 56 78' },
    email: { label: 'E-mail', placeholder: 'sophie.martin@exemple.fr' },
    website: { label: 'Site web', placeholder: 'exemple.fr' },
    address: { label: 'Adresse du bureau (facultatif)', placeholder: '10 Rue de la Paix, 75002 Paris' },
    logoUrl: { label: "URL du logo de l'entreprise", placeholder: 'https://exemple.fr/logo.png' },
    photoUrl: { label: 'URL de la photo de profil', placeholder: 'https://exemple.fr/photo.jpg' },
    linkedin: { label: 'Lien profil LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'Lien X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'Lien Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'Lien Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'Lien chaîne YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Texte du bouton (facultatif)', placeholder: 'Réserver un créneau de 15 min' },
    ctaUrl: { label: 'Lien du bouton', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Mention légale (facultatif)', placeholder: 'Ce message et ses pièces jointes sont confidentiels...' },
  },

  templateStep: '1. Choisir un modèle de signature',
  templates: {
    'simple-text': 'Texte simple',
    'logo-left': 'Logo à gauche',
    'photo-divider': 'Photo avec séparateur',
    compact: 'Compact',
  },
  fontLabel: 'Police',
  colorLabel: "Couleur d'accent",
  colorAria: (hex) => `Couleur ${hex}`,
  personalStep: '2. Coordonnées personnelles et entreprise',
  contactStep: '3. Moyens de contact',
  imagesStep: '4. Liens vers le logo et la photo',
  imagesHelp: "Collez l'URL de votre image. Elle doit être accessible publiquement en HTTPS (pas de téléversement direct de fichiers).",
  socialStep: '5. Réseaux sociaux (facultatif)',
  socialIcons: 'Afficher de petites icônes au lieu du texte',
  ctaStep: "6. Bouton d'action et mentions légales",
  madeWith: 'Afficher le lien « Créé avec Giggal.ai » (désactivé par défaut)',

  tabPreview: 'Aperçu',
  tabHtml: 'Code HTML',
  tabPlain: 'Texte brut',
  chars: (n) => `${n.toLocaleString('fr-FR')}/10 000 caractères`,
  overLimit: 'Dépasse la limite de 10 000 caractères de Gmail pour les signatures. Raccourcissez le texte ou les liens.',
  plainHelp: 'Recommandé pour les applications mobiles telles que Gmail sur iOS et Android.',
  copySignature: 'Copier la signature',
  copiedSignature: 'Signature copiée ! Collez-la dans votre messagerie',
  copyHtml: 'Copier le code HTML',
  download: 'Télécharger .html',
  downloadName: 'signature.html',
  copyPlain: 'Copier la version texte brut',

  signature: {
    phone: 'Tél. :',
    mobile: 'Port. :',
    email: 'E-mail :',
    web: 'Web :',
    address: 'Adresse :',
    logoAlt: 'Logo',
    madeWith: 'Créé avec Giggal.ai',
  },

  imageWarnings: {
    'not-https': "L'URL de l'image doit commencer par https://",
    invalid: "L'URL de l'image est invalide",
  },
}

const esTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Carlos Rodríguez',
    jobTitle: 'Director de Cuentas',
    company: 'Empresa Ejemplo S.L.',
    phone: '+34 91 123 45 67',
    email: 'carlos.rodriguez@ejemplo.es',
    website: 'ejemplo.es',
  },
  fields: {
    fullName: { label: 'Nombre completo *', placeholder: 'Carlos Rodríguez' },
    jobTitle: { label: 'Puesto o cargo', placeholder: 'Director de Cuentas' },
    company: { label: 'Empresa', placeholder: 'Empresa Ejemplo S.L.' },
    department: { label: 'Departamento (opcional)', placeholder: 'Atención al Cliente' },
    pronouns: { label: 'Pronombres (opcional)', placeholder: 'él' },
    phone: { label: 'Teléfono', placeholder: '+34 91 123 45 67' },
    mobile: { label: 'Móvil (opcional)', placeholder: '+34 612 34 56 78' },
    email: { label: 'Correo electrónico', placeholder: 'carlos.rodriguez@ejemplo.es' },
    website: { label: 'Sitio web', placeholder: 'ejemplo.es' },
    address: { label: 'Dirección (opcional)', placeholder: 'Calle Mayor 10, 28013 Madrid' },
    logoUrl: { label: 'URL del logotipo de la empresa', placeholder: 'https://ejemplo.es/logo.png' },
    photoUrl: { label: 'URL de la foto de perfil', placeholder: 'https://ejemplo.es/foto.jpg' },
    linkedin: { label: 'URL de LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'URL de X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'URL de Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'URL de Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'URL de YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Texto del botón (opcional)', placeholder: 'Reservar reunión de 15 min' },
    ctaUrl: { label: 'URL del enlace del botón', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Aviso legal (opcional)', placeholder: 'Este correo y sus archivos adjuntos son confidenciales...' },
  },

  templateStep: '1. Elige una plantilla de firma',
  templates: {
    'simple-text': 'Texto simple',
    'logo-left': 'Logo a la izquierda',
    'photo-divider': 'Foto con división',
    compact: 'Compacto',
  },
  fontLabel: 'Tipografía',
  colorLabel: 'Color de acento',
  colorAria: (hex) => `Color ${hex}`,
  personalStep: '2. Datos personales y de la empresa',
  contactStep: '3. Información de contacto',
  imagesStep: '4. Enlaces de logo y fotografía',
  imagesHelp: 'Pega el enlace de una imagen. Debe ser una URL pública con HTTPS (no se admite subida directa de archivos).',
  socialStep: '5. Redes sociales (opcional)',
  socialIcons: 'Mostrar iconos pequeños en vez de texto',
  ctaStep: '6. Llamada a la acción y aviso legal',
  madeWith: 'Mostrar enlace «Creado con Giggal.ai» (desactivado por defecto)',

  tabPreview: 'Vista previa',
  tabHtml: 'Código HTML',
  tabPlain: 'Texto sin formato',
  chars: (n) => `${n.toLocaleString('es-ES')}/10.000 caracteres`,
  overLimit: 'Supera el límite de 10.000 caracteres de firma en Gmail. Reduce el texto o las URLs.',
  plainHelp: 'Recomendado para apps de correo en móviles como Gmail en iOS o Android.',
  copySignature: 'Copiar firma',
  copiedSignature: '¡Firma copiada! Pégala en tu cliente de correo',
  copyHtml: 'Copiar código HTML',
  download: 'Descargar .html',
  downloadName: 'firma.html',
  copyPlain: 'Copiar versión en texto sin formato',

  signature: {
    phone: 'Teléfono:',
    mobile: 'Móvil:',
    email: 'Correo:',
    web: 'Web:',
    address: 'Dirección:',
    logoAlt: 'Logo',
    madeWith: 'Creado con Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'La URL de la imagen debe comenzar por https://',
    invalid: 'La URL de la imagen no es válida',
  },
}

const itTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Marco Rossi',
    jobTitle: 'Responsabile Vendite',
    company: 'Esempio S.r.l.',
    phone: '+39 02 1234 5678',
    email: 'marco.rossi@esempio.it',
    website: 'esempio.it',
  },
  fields: {
    fullName: { label: 'Nome completo *', placeholder: 'Marco Rossi' },
    jobTitle: { label: 'Ruolo / Posizione', placeholder: 'Responsabile Vendite' },
    company: { label: 'Azienda', placeholder: 'Esempio S.r.l.' },
    department: { label: 'Reparto (facoltativo)', placeholder: 'Vendite & Sviluppo' },
    pronouns: { label: 'Pronomi (facoltativo)', placeholder: 'lui' },
    phone: { label: 'Telefono', placeholder: '+39 02 1234 5678' },
    mobile: { label: 'Cellulare (facoltativo)', placeholder: '+39 340 123 4567' },
    email: { label: 'Email', placeholder: 'marco.rossi@esempio.it' },
    website: { label: 'Sito web', placeholder: 'esempio.it' },
    address: { label: 'Indirizzo sede (facoltativo)', placeholder: 'Via Roma 10, 20121 Milano' },
    logoUrl: { label: 'URL del logo aziendale', placeholder: 'https://esempio.it/logo.png' },
    photoUrl: { label: 'URL della foto profilo', placeholder: 'https://esempio.it/foto.jpg' },
    linkedin: { label: 'URL profilo LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'URL X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'URL Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'URL Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'URL canale YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Testo del pulsante (facoltativo)', placeholder: 'Prenota una chiamata di 15 min' },
    ctaUrl: { label: 'URL del pulsante', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Disclaimer legale (facoltativo)', placeholder: 'Le informazioni contenute in questo messaggio sono riservate...' },
  },

  templateStep: '1. Scegli il modello di firma',
  templates: {
    'simple-text': 'Testo semplice',
    'logo-left': 'Logo a sinistra',
    'photo-divider': 'Foto con divisore',
    compact: 'Compatto',
  },
  fontLabel: 'Carattere',
  colorLabel: 'Colore in risalto',
  colorAria: (hex) => `Colore ${hex}`,
  personalStep: '2. Dati personali e aziendali',
  contactStep: '3. Informazioni di contatto',
  imagesStep: '4. Link per logo e foto',
  imagesHelp: "Incolla l'URL di un'immagine. Deve essere un link HTTPS pubblico (non è possibile caricare file direttamente).",
  socialStep: '5. Link social (facoltativo)',
  socialIcons: 'Usa icone piccole invece del testo',
  ctaStep: '6. Call-to-action e note legali',
  madeWith: 'Mostra link “Creata con Giggal.ai” (disattivato di default)',

  tabPreview: 'Anteprima',
  tabHtml: 'Codice HTML',
  tabPlain: 'Solo testo',
  chars: (n) => `${n.toLocaleString('it-IT')}/10.000 caratteri`,
  overLimit: 'Supera il limite di 10.000 caratteri di Gmail per le firme. Riduci il testo o i link.',
  plainHelp: 'Consigliato per le app email su smartphone, come Gmail su iOS o Android.',
  copySignature: 'Copia firma',
  copiedSignature: 'Firma copiata! Incollala nel tuo client email',
  copyHtml: 'Copia codice HTML',
  download: 'Scarica .html',
  downloadName: 'firma.html',
  copyPlain: 'Copia versione solo testo',

  signature: {
    phone: 'Tel:',
    mobile: 'Cell:',
    email: 'Email:',
    web: 'Web:',
    address: 'Indirizzo:',
    logoAlt: 'Logo',
    madeWith: 'Creata con Giggal.ai',
  },

  imageWarnings: {
    'not-https': "L'URL dell'immagine deve iniziare con https://",
    invalid: "L'URL dell'immagine non è valido",
  },
}

const nlTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Daan Jansen',
    jobTitle: 'Marketing Manager',
    company: 'Voorbeeld BV',
    phone: '+31 20 123 4567',
    email: 'daan.jansen@voorbeeld.nl',
    website: 'voorbeeld.nl',
  },
  fields: {
    fullName: { label: 'Volledige naam *', placeholder: 'Daan Jansen' },
    jobTitle: { label: 'Functietitel', placeholder: 'Marketing Manager' },
    company: { label: 'Bedrijf', placeholder: 'Voorbeeld BV' },
    department: { label: 'Afdeling (optioneel)', placeholder: 'Marketing & Communicatie' },
    pronouns: { label: 'Voornaamwoorden (optioneel)', placeholder: 'hij/hem' },
    phone: { label: 'Telefoon', placeholder: '+31 20 123 4567' },
    mobile: { label: 'Mobiel (optioneel)', placeholder: '+31 6 1234 5678' },
    email: { label: 'E-mailadres', placeholder: 'daan.jansen@voorbeeld.nl' },
    website: { label: 'Website', placeholder: 'voorbeeld.nl' },
    address: { label: 'Kantooradres (optioneel)', placeholder: 'Keizersgracht 100, 1015 AA Amsterdam' },
    logoUrl: { label: 'URL bedrijfslogo', placeholder: 'https://voorbeeld.nl/logo.png' },
    photoUrl: { label: 'URL profielfoto', placeholder: 'https://voorbeeld.nl/foto.jpg' },
    linkedin: { label: 'LinkedIn-profiel URL', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'X / Twitter URL', placeholder: 'https://x.com/...' },
    facebook: { label: 'Facebook URL', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'Instagram URL', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'YouTube-kanaal URL', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Knoptekst (optioneel)', placeholder: 'Plan een gesprek van 15 min' },
    ctaUrl: { label: 'Knop-URL', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Juridische disclaimer (optioneel)', placeholder: 'De inhoud van dit e-mailbericht is vertrouwelijk...' },
  },

  templateStep: '1. Kies een lay-outsjabloon',
  templates: {
    'simple-text': 'Eenvoudige tekst',
    'logo-left': 'Logo links',
    'photo-divider': 'Foto met scheidingslijn',
    compact: 'Compact',
  },
  fontLabel: 'Lettertype',
  colorLabel: 'Accentkleur',
  colorAria: (hex) => `Kleur ${hex}`,
  personalStep: '2. Persoonlijke en bedrijfsgegevens',
  contactStep: '3. Contactgegevens',
  imagesStep: '4. Links naar logo en foto',
  imagesHelp: 'Plak een afbeeldingslink. Dit moet een openbare HTTPS-URL zijn (direct bestanden uploaden is niet mogelijk).',
  socialStep: '5. Socialmedias links (optioneel)',
  socialIcons: 'Kleine iconen gebruiken in plaats van tekst',
  ctaStep: '6. Call-to-action en disclaimer',
  madeWith: 'Toon link “Gemaakt met Giggal.ai” (standaard uit)',

  tabPreview: 'Voorbeeld',
  tabHtml: 'HTML-code',
  tabPlain: 'Platte tekst',
  chars: (n) => `${n.toLocaleString('nl-NL')}/10.000 tekens`,
  overLimit: 'Overschrijdt de limiet van 10.000 tekens van Gmail voor handtekeningen. Kort de tekst of links in.',
  plainHelp: 'Aanbevolen voor mobiele e-mailapps zoals Gmail op iOS of Android.',
  copySignature: 'Handtekening kopiëren',
  copiedSignature: 'Handtekening gekopieerd! Plak deze in je e-mailprogramma',
  copyHtml: 'HTML-code kopiëren',
  download: '.html downloaden',
  downloadName: 'handtekening.html',
  copyPlain: 'Platte tekst kopiëren',

  signature: {
    phone: 'Tel:',
    mobile: 'Mobiel:',
    email: 'E-mail:',
    web: 'Web:',
    address: 'Adres:',
    logoAlt: 'Logo',
    madeWith: 'Gemaakt met Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'De afbeeldings-URL moet beginnen met https://',
    invalid: 'De afbeeldings-URL is ongeldig',
  },
}

const plTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Michał Kowalski',
    jobTitle: 'Kierownik ds. Rozwoju',
    company: 'Przykładowa Sp. z o.o.',
    phone: '+48 22 123 45 67',
    email: 'michal.kowalski@przyklad.pl',
    website: 'przyklad.pl',
  },
  fields: {
    fullName: { label: 'Imię i nazwisko *', placeholder: 'Michał Kowalski' },
    jobTitle: { label: 'Stanowisko', placeholder: 'Kierownik ds. Rozwoju' },
    company: { label: 'Firma', placeholder: 'Przykładowa Sp. z o.o.' },
    department: { label: 'Dział (opcjonalnie)', placeholder: 'Obsługa Klienta' },
    pronouns: { label: 'Zaimki (opcjonalnie)', placeholder: 'on/jego' },
    phone: { label: 'Telefon', placeholder: '+48 22 123 45 67' },
    mobile: { label: 'Telefon komórkowy (opcjonalnie)', placeholder: '+48 600 123 456' },
    email: { label: 'Adres e-mail', placeholder: 'michal.kowalski@przyklad.pl' },
    website: { label: 'Strona WWW', placeholder: 'przyklad.pl' },
    address: { label: 'Adres biura (opcjonalnie)', placeholder: 'ul. Marszałkowska 10, 00-001 Warszawa' },
    logoUrl: { label: 'URL logo firmy', placeholder: 'https://przyklad.pl/logo.png' },
    photoUrl: { label: 'URL zdjęcia profilowego', placeholder: 'https://przyklad.pl/foto.jpg' },
    linkedin: { label: 'URL profilu LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'URL X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'URL Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'URL Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'URL kanału YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Treść przycisku (opcjonalnie)', placeholder: 'Umów rozmowę (15 min)' },
    ctaUrl: { label: 'URL przycisku', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Klauzula poufności (opcjonalnie)', placeholder: 'Treść tej wiadomości jest poufna...' },
  },

  templateStep: '1. Wybierz szablon stopki',
  templates: {
    'simple-text': 'Prosty tekst',
    'logo-left': 'Logo po lewej',
    'photo-divider': 'Zdjęcie z separatorem',
    compact: 'Kompaktowy',
  },
  fontLabel: 'Czcionka',
  colorLabel: 'Kolor akcentu',
  colorAria: (hex) => `Kolor ${hex}`,
  personalStep: '2. Dane osobowe i firmowe',
  contactStep: '3. Dane kontaktowe',
  imagesStep: '4. Linki do logo i zdjęcia',
  imagesHelp: 'Wklej bezpośredni link do grafiki. Musi to być publiczny adres HTTPS (brak możliwości bezpośredniego przesyłania plików).',
  socialStep: '5. Media społecznościowe (opcjonalnie)',
  socialIcons: 'Używaj małych ikon zamiast tekstu',
  ctaStep: '6. Przycisk wezwania do działania (CTA) i klauzule',
  madeWith: 'Pokaż link „Stworzono z Giggal.ai” (domyślnie wyłączony)',

  tabPreview: 'Podgląd',
  tabHtml: 'Kod HTML',
  tabPlain: 'Zwykły tekst',
  chars: (n) => `${n.toLocaleString('pl-PL')}/10 000 znaków`,
  overLimit: 'Przekroczono limit 10 000 znaków dla stopki w Gmailu. Skróć tekst lub linki.',
  plainHelp: 'Zalecane dla aplikacji mobilnych, takich jak Gmail na Androida i iOS.',
  copySignature: 'Kopiuj stopkę',
  copiedSignature: 'Stopka skopiowana! Wklej ją w programie pocztowym',
  copyHtml: 'Kopiuj kod HTML',
  download: 'Pobierz .html',
  downloadName: 'stopka.html',
  copyPlain: 'Kopiuj wersję tekstową',

  signature: {
    phone: 'Tel.:',
    mobile: 'Kom.:',
    email: 'E-mail:',
    web: 'WWW:',
    address: 'Adres:',
    logoAlt: 'Logo',
    madeWith: 'Stworzono z Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'URL obrazu musi zaczynać się od https://',
    invalid: 'Nieprawidłowy adres URL obrazu',
  },
}

const idTool: SignatureToolStrings = {
  defaults: {
    fullName: 'Budi Santoso',
    jobTitle: 'Manajer Pemasaran',
    company: 'PT Contoh Abadi',
    phone: '+62 21 555 1234',
    email: 'budi.santoso@contoh.id',
    website: 'contoh.id',
  },
  fields: {
    fullName: { label: 'Nama Lengkap *', placeholder: 'Budi Santoso' },
    jobTitle: { label: 'Jabatan / Posisi', placeholder: 'Manajer Pemasaran' },
    company: { label: 'Perusahaan', placeholder: 'PT Contoh Abadi' },
    department: { label: 'Departemen (opsional)', placeholder: 'Pemasaran & Komunikasi' },
    pronouns: { label: 'Kata Ganti (opsional)', placeholder: 'dia' },
    phone: { label: 'Telepon', placeholder: '+62 21 555 1234' },
    mobile: { label: 'Ponsel / WhatsApp (opsional)', placeholder: '+62 812 3456 7890' },
    email: { label: 'Email', placeholder: 'budi.santoso@contoh.id' },
    website: { label: 'Situs Web', placeholder: 'contoh.id' },
    address: { label: 'Alamat Kantor (opsional)', placeholder: 'Jl. Sudirman No. 10, Jakarta Pusat' },
    logoUrl: { label: 'URL Logo Perusahaan', placeholder: 'https://contoh.id/logo.png' },
    photoUrl: { label: 'URL Foto Profil', placeholder: 'https://contoh.id/foto.jpg' },
    linkedin: { label: 'URL Profil LinkedIn', placeholder: 'https://linkedin.com/in/...' },
    x: { label: 'URL X / Twitter', placeholder: 'https://x.com/...' },
    facebook: { label: 'URL Facebook', placeholder: 'https://facebook.com/...' },
    instagram: { label: 'URL Instagram', placeholder: 'https://instagram.com/...' },
    youtube: { label: 'URL Saluran YouTube', placeholder: 'https://youtube.com/@...' },
    ctaText: { label: 'Teks Tombol CTA (opsional)', placeholder: 'Jadwalkan Konsultasi 15 Menit' },
    ctaUrl: { label: 'URL Tombol', placeholder: 'https://cal.com/...' },
    disclaimer: { label: 'Pernyataan Privasi / Legal (opsional)', placeholder: 'Isi email ini bersifat rahasia...' },
  },

  templateStep: '1. Pilih Templat Tata Letak',
  templates: {
    'simple-text': 'Teks Sederhana',
    'logo-left': 'Logo di Kiri',
    'photo-divider': 'Foto Bersekat',
    compact: 'Kompak',
  },
  fontLabel: 'Jenis Huruf (Font)',
  colorLabel: 'Warna Aksen',
  colorAria: (hex) => `Warna ${hex}`,
  personalStep: '2. Data Pribadi & Perusahaan',
  contactStep: '3. Informasi Kontak',
  imagesStep: '4. Tautan Logo & Foto',
  imagesHelp: 'Tempel tautan gambar publik berformat HTTPS (tidak mendukung unggah file langsung dari komputer).',
  socialStep: '5. Media Sosial (Opsional)',
  socialIcons: 'Gunakan ikon kecil pengganti teks',
  ctaStep: '6. Tombol Aksi (CTA) & Pernyataan Legal',
  madeWith: 'Tampilkan tautan “Dibuat dengan Giggal.ai” (nonaktif secara default)',

  tabPreview: 'Pratinjau',
  tabHtml: 'Kode HTML',
  tabPlain: 'Teks Polos',
  chars: (n) => `${n.toLocaleString('id-ID')}/10.000 karakter`,
  overLimit: 'Melebihi batas tanda tangan 10.000 karakter Gmail. Kurangi panjang teks atau tautan.',
  plainHelp: 'Disarankan untuk aplikasi email seluler seperti Gmail di Android dan iOS.',
  copySignature: 'Salin Tanda Tangan',
  copiedSignature: 'Tanda Tangan Disalin! Tempel di pengaturan email Anda',
  copyHtml: 'Salin Kode HTML',
  download: 'Unduh .html',
  downloadName: 'tanda-tangan.html',
  copyPlain: 'Salin Versi Teks Polos',

  signature: {
    phone: 'Telp:',
    mobile: 'Ponsel:',
    email: 'Email:',
    web: 'Web:',
    address: 'Alamat:',
    logoAlt: 'Logo',
    madeWith: 'Dibuat dengan Giggal.ai',
  },

  imageWarnings: {
    'not-https': 'URL gambar harus diawali dengan https://',
    invalid: 'URL gambar tidak valid',
  },
}

export const SIGNATURE_TOOL_STRINGS: Partial<Record<Locale, SignatureToolStrings>> & { en: SignatureToolStrings } = {
  en,
  'pt-br': ptBrTool,
  de: deTool,
  fr: frTool,
  es: esTool,
  it: itTool,
  nl: nlTool,
  pl: plTool,
  id: idTool,
}

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
