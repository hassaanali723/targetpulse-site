// Labels and messages of the BIMI generator tool (components/tools/BimiGenerator/BimiGeneratorTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/bimiGeneratorStrings.ts.
//
// English is the original wording moved here unchanged. Text that comes from
// lib/tools/bimiGeneratorCore.ts (URL errors, the logo check titles and
// messages) stays there for English. The optional maps at the end of
// BimiToolStrings are used for the other languages, keyed by the core's codes.
//
// BIMI record syntax (v=BIMI1, l=, a=, TXT, the selector name "default") is data
// and is not translated.
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (a code span, a link). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type { BimiSvgCheckId, BimiUrlErrorCode, SvgCheckItem } from '@/lib/tools/bimiGeneratorCore'

export type BimiCertLevel = 'none' | 'CMC' | 'VMC'

/** Values a logo check message can use. */
export interface BimiCheckValues {
  /** Size of the checked SVG in bytes. */
  byteSize: number
}

export interface BimiToolStrings {
  // Tabs
  tabRecord: string
  tabChecker: string
  tabReadiness: string

  // Record builder
  domainLabel: string
  domainPlaceholder: string
  selectorLabel: string
  /** After the selector label, in lower case: "(default: default)". */
  selectorHint: string
  /** Shown when the selector is not "default". */
  selectorWarning: string
  logoLabel: string
  logoHint: string
  logoPlaceholder: string
  certLabel: string
  certHint: string
  certPlaceholder: string
  leaveLogoEmpty: string
  leaveLogoEmptyHelp: string
  outputTitle: string
  hostLabel: string
  copy: string
  copied: string
  /** Template: {host} (a code span with the short host, such as default._bimi). */
  hostShort: string
  typeLabel: string
  ttlNote: string
  valueLabel: string
  zoneLabel: string

  // SVG logo checker
  checkerTitle: string
  uploadButton: string
  pasteLabel: string
  previewAlt: string
  passBadge: string
  failBadge: string
  /** "File size: 12.3 KB". */
  fileSize: (byteSize: number) => string
  passText: string
  failText: string

  // Readiness checklist
  readinessTitle: string
  readinessIntro: string
  dmarcItem: string
  /** Template: {link} (a link to the DMARC generator). */
  dmarcItemText: string
  dmarcLabel: string
  dmarcHref: string
  alignItem: string
  alignItemText: string
  logoItem: string
  logoItemText: string
  certTitle: string
  certOptions: Record<BimiCertLevel, string>
  whereTitle: string
  /** Where the logo can appear with each certificate level. */
  where: Record<BimiCertLevel, string>
  prerequisitesNote: string

  // Text from the core. English leaves these out and shows the core's own text.
  /** URL errors by core code. `extension` gets "svg" or "pem". */
  urlErrors?: {
    required: string
    'not-https': string
    extension: (extension: 'svg' | 'pem') => string
    invalid: string
  }
  /** Logo checks by core id: the title, and the message when the check passes or fails. */
  checks?: Record<
    BimiSvgCheckId,
    { title: string; pass: (v: BimiCheckValues) => string; fail: (v: BimiCheckValues) => string }
  >
}

const en: BimiToolStrings = {
  tabRecord: 'Record Builder',
  tabChecker: 'SVG Logo Checker',
  tabReadiness: 'Readiness Checklist',

  domainLabel: 'Domain',
  domainPlaceholder: 'example.com',
  selectorLabel: 'Selector',
  selectorHint: '(default: default)',
  selectorWarning: 'Mail needs a BIMI-Selector header for a non-default selector.',
  logoLabel: 'Logo URL',
  logoHint: '(must start with https:// and end in .svg)',
  logoPlaceholder: 'https://example.com/bimi/logo.svg',
  certLabel: 'Certificate URL',
  certHint: '(optional; must start with https:// and end in .pem)',
  certPlaceholder: 'https://example.com/bimi/cert.pem',
  leaveLogoEmpty: 'Leave l= empty (the logo is inside the certificate)',
  leaveLogoEmptyHelp: 'Google\'s examples show both forms: some certificates embed the logo within the PEM payload.',
  outputTitle: 'Publish this DNS TXT Record',
  hostLabel: 'Host / Name',
  copy: 'Copy',
  copied: 'Copied',
  hostShort: 'Short form for panels that append domain: {host}',
  typeLabel: 'Record Type',
  ttlNote: 'TTL: 3600 (1 hour recommended)',
  valueLabel: 'TXT Record Value',
  zoneLabel: 'Zone-File Format',

  checkerTitle: 'Upload SVG Logo File or Paste SVG Code',
  uploadButton: 'Upload SVG File',
  pasteLabel: 'Or paste SVG markup:',
  previewAlt: 'SVG Preview',
  passBadge: 'Passes All Tiny PS Rules',
  failBadge: 'Does Not Meet Tiny PS Rules',
  fileSize: (byteSize) => `File size: ${(byteSize / 1024).toFixed(1)} KB`,
  passText: 'Your SVG logo meets the specifications for mailbox providers and certificate authorities.',
  failText: 'Review the failing items below to make your logo compliant before publishing.',

  readinessTitle: 'BIMI Deployment Readiness',
  readinessIntro: 'Check off your prerequisites to determine where your brand logo will appear.',
  dmarcItem: 'DMARC at quarantine or reject',
  dmarcItemText: 'BIMI requires policy enforcement. Need a record? Use our {link}.',
  dmarcLabel: 'DMARC generator',
  dmarcHref: '/dmarc-generator',
  alignItem: 'SPF and DKIM pass and align',
  alignItemText: 'Mail headers must authenticate cleanly with the domain in the From address.',
  logoItem: 'Logo passes the checker',
  logoItemText: 'SVG Tiny PS compliant, square viewBox, no script or raster elements.',
  certTitle: 'Certificate Level',
  certOptions: {
    none: 'None (Self-hosted SVG only)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Where your logo can appear:',
  where: {
    VMC: 'With VMC: Gmail with checkmark, Apple Mail, and providers that support BIMI',
    CMC: 'With CMC: Gmail without checkmark, not Apple Mail',
    none: 'With none: only providers that accept records without a certificate, such as Yahoo and Fastmail',
  },
  prerequisitesNote:
    'Note: Prerequisites must be met first. If DMARC is not at quarantine or reject, no provider will display your logo.',
}

const deTool: BimiToolStrings = {
  tabRecord: 'Record erstellen',
  tabChecker: 'SVG-Logo-Check',
  tabReadiness: 'Checkliste',

  domainLabel: 'Domain',
  domainPlaceholder: 'beispiel.de',
  selectorLabel: 'Selector',
  // Shown in lower case by the tool's CSS, so it has no German noun.
  selectorHint: '(voreingestellt: default)',
  selectorWarning: 'Bei einem anderen Selector als default brauchen Ihre E-Mails einen BIMI-Selector-Header.',
  logoLabel: 'Logo-URL',
  logoHint: '(muss mit https:// beginnen und auf .svg enden)',
  logoPlaceholder: 'https://beispiel.de/bimi/logo.svg',
  certLabel: 'Zertifikats-URL',
  certHint: '(optional; muss mit https:// beginnen und auf .pem enden)',
  certPlaceholder: 'https://beispiel.de/bimi/cert.pem',
  leaveLogoEmpty: 'l= leer lassen (das Logo steckt im Zertifikat)',
  leaveLogoEmptyHelp: 'Die Beispiele von Google zeigen beide Formen. Manche Zertifikate enthalten das Logo in der PEM-Datei.',
  outputTitle: 'Diesen TXT-Eintrag im DNS veröffentlichen',
  hostLabel: 'Host / Name',
  copy: 'Kopieren',
  copied: 'Kopiert',
  hostShort: 'Kurzform, falls Ihr DNS-Anbieter die Domain selbst anhängt: {host}',
  typeLabel: 'Eintragstyp',
  ttlNote: 'TTL: 3600 (1 Stunde empfohlen)',
  valueLabel: 'Wert des TXT-Eintrags',
  zoneLabel: 'Format der Zonendatei',

  // "Auswählen", not "hochladen": the file is read in the browser and never uploaded.
  checkerTitle: 'SVG-Logo-Datei auswählen oder SVG-Code einfügen',
  uploadButton: 'SVG-Datei auswählen',
  pasteLabel: 'Oder fügen Sie den SVG-Code ein:',
  previewAlt: 'SVG-Vorschau',
  passBadge: 'Erfüllt alle Tiny-PS-Regeln',
  failBadge: 'Erfüllt die Tiny-PS-Regeln nicht',
  fileSize: (byteSize) =>
    `Dateigröße: ${(byteSize / 1024).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Ihr SVG-Logo erfüllt die Vorgaben der Postfach-Anbieter und der Zertifizierungsstellen.',
  failText: 'Prüfen Sie die fehlgeschlagenen Punkte unten. Passen Sie Ihr Logo an, bevor Sie es veröffentlichen.',

  readinessTitle: 'Ist Ihre Domain bereit für BIMI?',
  readinessIntro: 'Haken Sie die erfüllten Voraussetzungen ab. Dann sehen Sie, wo Ihr Markenlogo erscheinen kann.',
  dmarcItem: 'DMARC auf quarantine oder reject',
  dmarcItemText: 'BIMI setzt eine DMARC-Richtlinie mit Durchsetzung voraus. Noch kein Eintrag? Nutzen Sie unseren {link}.',
  dmarcLabel: 'DMARC-Generator',
  dmarcHref: '/de/dmarc-generator',
  alignItem: 'SPF und DKIM bestehen und passen zur From-Domain',
  alignItemText: 'Die Authentifizierung muss für dieselbe Domain bestehen, die in der From-Adresse steht.',
  logoItem: 'Logo besteht den Logo-Check',
  logoItemText: 'Entspricht SVG Tiny PS, quadratische viewBox, keine Skripte und keine Rastergrafiken.',
  certTitle: 'Art des Zertifikats',
  certOptions: {
    none: 'Keines (nur selbst gehostetes SVG)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Wo Ihr Logo erscheinen kann:',
  where: {
    VMC: 'Mit VMC: Gmail mit Haken, Apple Mail und Anbieter, die BIMI unterstützen',
    CMC: 'Mit CMC: Gmail ohne Haken, nicht Apple Mail',
    none: 'Ohne Zertifikat: nur Anbieter, die Records ohne Zertifikat akzeptieren, etwa Yahoo und Fastmail',
  },
  prerequisitesNote:
    'Hinweis: Zuerst müssen die Voraussetzungen erfüllt sein. Steht DMARC nicht auf quarantine oder reject, zeigt kein Anbieter Ihr Logo.',

  urlErrors: {
    required: 'Bitte geben Sie eine URL ein',
    'not-https': 'Die URL muss mit https:// beginnen',
    extension: (extension) => `Die URL muss auf .${extension} enden`,
    invalid: 'Das Format der URL ist ungültig',
  },
  checks: {
    baseProfile: {
      title: 'Wurzelelement ist svg mit baseProfile tiny-ps',
      pass: () => 'Das Wurzelelement ist <svg> mit baseProfile="tiny-ps".',
      fail: () => 'Das Wurzelelement <svg> muss baseProfile="tiny-ps" angeben.',
    },
    version: {
      title: 'Version 1.2',
      pass: () => 'Das Attribut version steht auf 1.2.',
      fail: () => 'Das Wurzelelement <svg> muss version="1.2" angeben.',
    },
    viewBox: {
      title: 'viewBox ist quadratisch',
      pass: () => 'Die viewBox hat dieselbe Breite und Höhe.',
      fail: () => 'Die viewBox muss gleich breit und hoch sein (Seitenverhältnis 1:1).',
    },
    'no-root-xy': {
      title: 'Keine x- oder y-Attribute am Wurzelelement svg',
      pass: () => 'Das Wurzelelement <svg> hat keine x- oder y-Attribute.',
      fail: () => 'Das Wurzelelement <svg> darf keine x- oder y-Koordinaten enthalten.',
    },
    title: {
      title: 'Hat ein title-Element',
      pass: () => 'Enthält ein nicht leeres <title>-Element mit Ihrem Markennamen.',
      fail: () => 'Ein <title>-Element mit dem Namen Ihrer Firma oder Marke ist Pflicht.',
    },
    filesize: {
      title: 'Dateigröße höchstens 32 KB',
      pass: ({ byteSize }) =>
        `Die Datei ist ${(byteSize / 1024).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB groß und liegt unter der Grenze von 32 KB.`,
      fail: ({ byteSize }) =>
        `Die Datei ist ${(byteSize / 1024).toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB groß und überschreitet die Grenze von 32 KB.`,
    },
    'no-script': {
      title: 'Keine script-Elemente',
      pass: () => 'Keine ausführbaren <script>-Elemente gefunden.',
      fail: () => 'Skripte sind in Tiny PS zum Schutz der Postfächer verboten.',
    },
    'no-image': {
      title: 'Keine eingebetteten Rastergrafiken (image-Elemente)',
      pass: () => 'Keine eingebetteten <image>-Elemente mit Rastergrafiken gefunden.',
      fail: () => 'Tiny PS verlangt reine Vektorgrafik. <image>-Elemente mit Rastergrafiken sind nicht erlaubt.',
    },
    'no-foreignObject': {
      title: 'Kein foreignObject',
      pass: () => 'Keine <foreignObject>-Elemente gefunden.',
      fail: () => '<foreignObject>-Elemente sind in Tiny PS nicht erlaubt.',
    },
    'no-animation': {
      title: 'Keine Animationselemente',
      pass: () => 'Keine SVG-Animationselemente gefunden.',
      fail: () => 'Animierte SVG-Elemente (<animate>, <set> und andere) sind verboten.',
    },
    'no-external-ref': {
      title: 'Keine Verweise auf externe Dateien',
      pass: () => 'Keine externen URLs und keine Verweise auf externe Dateien.',
      fail: () => 'Verweise auf externe Dateien oder Links zu anderen Servern sind nicht erlaubt.',
    },
    // A warning: `fail` is shown when the logo has text, `pass` when it has none.
    'text-elements': {
      title: 'Textelemente',
      pass: () => 'Keine <text>-Elemente gefunden.',
      fail: () =>
        'Text in einem Logo wird eventuell nicht überall gleich dargestellt. Wandeln Sie den Text in Ihrem Grafikprogramm in Pfade um.',
    },
  },
}

export const BIMI_TOOL_STRINGS: Partial<Record<Locale, BimiToolStrings>> & { en: BimiToolStrings } = { en, de: deTool }

export function bimiToolStrings(locale: Locale): BimiToolStrings {
  return BIMI_TOOL_STRINGS[locale] ?? en
}

/** The error to show under a URL field: the core's English text, or the localized one by code. */
export function bimiUrlErrorText(
  t: BimiToolStrings,
  v: { error?: string; code?: BimiUrlErrorCode },
  extension: 'svg' | 'pem',
): string | undefined {
  if (!t.urlErrors || !v.code) return v.error
  return v.code === 'extension' ? t.urlErrors.extension(extension) : t.urlErrors[v.code]
}

/** Title and message of one logo check: the core's English text, or the localized one by id. */
export function bimiCheckText(t: BimiToolStrings, c: SvgCheckItem, byteSize: number): { title: string; message: string } {
  const m = t.checks?.[c.id]
  if (!m) return { title: c.title, message: c.message }
  const v = { byteSize }
  return { title: m.title, message: c.passed ? m.pass(v) : m.fail(v) }
}
