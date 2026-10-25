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


const frTool: BimiToolStrings = {
  tabRecord: 'Générateur d’enregistrement',
  tabChecker: 'Vérificateur de logo SVG',
  tabReadiness: 'Liste de préparation',

  domainLabel: 'Domaine',
  domainPlaceholder: 'exemple.fr',
  selectorLabel: 'Sélecteur',
  selectorHint: '(défaut : default)',
  selectorWarning: 'Les e-mails nécessitent un en-tête BIMI-Selector si vous utilisez un autre sélecteur que default.',
  logoLabel: 'URL du logo',
  logoHint: '(doit commencer par https:// et se terminer par .svg)',
  logoPlaceholder: 'https://exemple.fr/bimi/logo.svg',
  certLabel: 'URL du certificat',
  certHint: '(optionnel ; doit commencer par https:// et se terminer par .pem)',
  certPlaceholder: 'https://exemple.fr/bimi/cert.pem',
  leaveLogoEmpty: 'Laisser l= vide (le logo est inclus dans le certificat)',
  leaveLogoEmptyHelp: 'Certains certificats VMC intègrent directement le logo dans les données PEM.',
  outputTitle: 'Publiez cet enregistrement DNS TXT',
  hostLabel: 'Nom d’hôte',
  copy: 'Copier',
  copied: 'Copié',
  hostShort: 'Nom abrégé pour les consoles DNS ajoutant le domaine : {host}',
  typeLabel: 'Type d’enregistrement',
  ttlNote: 'TTL : 3600 (1 heure recommandée)',
  valueLabel: 'Valeur de l’enregistrement TXT',
  zoneLabel: 'Format de fichier de zone',

  checkerTitle: 'Sélectionnez un fichier SVG ou collez le code SVG',
  uploadButton: 'Sélectionner un fichier SVG',
  pasteLabel: 'Ou collez le balisage SVG :',
  previewAlt: 'Aperçu du logo SVG',
  passBadge: 'Conforme à toutes les règles Tiny PS',
  failBadge: 'Non conforme aux règles Tiny PS',
  fileSize: (byteSize) =>
    `Taille : ${(byteSize / 1024).toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Ko`,
  passText: 'Votre logo SVG respecte tous les critères des messageries et des autorités de certification.',
  failText: 'Consultez les critères non validés ci-dessous pour corriger votre fichier avant publication.',

  readinessTitle: 'Votre domaine est-il prêt pour BIMI ?',
  readinessIntro: 'Cochez les critères validés pour voir où votre logo de marque s’affichera.',
  dmarcItem: 'DMARC configuré en quarantine ou reject',
  dmarcItemText: 'BIMI nécessite une politique DMARC stricte. Pas encore en place ? Utilisez notre {link}.',
  dmarcLabel: 'Générateur DMARC',
  dmarcHref: '/fr/generateur-dmarc',
  alignItem: 'SPF et DKIM alignés avec le domaine expéditeur',
  alignItemText: 'L’authentification doit concorder exactement avec le domaine présent dans l’adresse From.',
  logoItem: 'Logo SVG validé par le vérificateur',
  logoItemText: 'Conforme à SVG Tiny PS, ratio 1:1 carré, sans scripts ni images matricielles.',
  certTitle: 'Niveau de certificat',
  certOptions: {
    none: 'Aucun (logo SVG hébergé seul)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Où votre logo pourra s’afficher :',
  where: {
    VMC: 'Avec VMC : Gmail avec coche bleue officielle, Apple Mail et services compatibles',
    CMC: 'Avec CMC : Gmail sans coche bleue, non supporté sur Apple Mail',
    none: 'Sans certificat : uniquement les fournisseurs sans exigence de certificat (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Rappel : Les prérequis d’authentification sont obligatoires. Sans politique DMARC quarantine ou reject, aucun fournisseur n’affichera le logo.',

  urlErrors: {
    required: 'Veuillez saisir une URL',
    'not-https': 'L’URL doit débuter par https://',
    extension: (extension) => `L’URL doit se terminer par .${extension}`,
    invalid: 'Format d’URL invalide',
  },
  checks: {
    baseProfile: {
      title: 'Élément racine svg avec baseProfile tiny-ps',
      pass: () => 'L’élément racine est <svg> avec baseProfile="tiny-ps".',
      fail: () => 'L’élément racine <svg> doit comporter baseProfile="tiny-ps".',
    },
    version: {
      title: 'Version 1.2',
      pass: () => 'L’attribut version a pour valeur 1.2.',
      fail: () => 'L’élément racine <svg> doit comporter version="1.2".',
    },
    viewBox: {
      title: 'viewBox carrée',
      pass: () => 'La viewBox possède une largeur et une hauteur identiques.',
      fail: () => 'La viewBox doit être carrée (ratio d’aspect 1:1).',
    },
    'no-root-xy': {
      title: 'Aucun attribut x ou y sur la balise svg',
      pass: () => 'L’élément racine <svg> ne comporte aucun attribut x ou y.',
      fail: () => 'L’élément racine <svg> ne doit pas comporter de coordonnées x ou y.',
    },
    title: {
      title: 'Présence d’une balise title',
      pass: () => 'Contient un élément <title> non vide avec le nom de votre marque.',
      fail: () => 'Un élément <title> indiquant votre marque ou entreprise est obligatoire.',
    },
    filesize: {
      title: 'Taille maximale de 32 Ko',
      pass: ({ byteSize }) =>
        `Le fichier pèse ${(byteSize / 1024).toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Ko (inférieur à 32 Ko).`,
      fail: ({ byteSize }) =>
        `Le fichier pèse ${(byteSize / 1024).toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Ko et dépasse la limite de 32 Ko.`,
    },
    'no-script': {
      title: 'Aucun élément script',
      pass: () => 'Aucun script exécutable détecté.',
      fail: () => 'Les éléments <script> sont formellement proscrits dans Tiny PS.',
    },
    'no-image': {
      title: 'Aucune image matricielle incorporée (balise image)',
      pass: () => 'Aucune image matricielle incorporée détectée.',
      fail: () => 'Tiny PS exige du vectoriel pur. Les balises <image> avec pixels sont interdites.',
    },
    'no-foreignObject': {
      title: 'Aucun foreignObject',
      pass: () => 'Aucune balise <foreignObject> présente.',
      fail: () => 'Les éléments <foreignObject> ne sont pas autorisés dans Tiny PS.',
    },
    'no-animation': {
      title: 'Aucune animation',
      pass: () => 'Aucune balise d’animation détectée.',
      fail: () => 'Les éléments d’animation (<animate>, <set>) sont interdits.',
    },
    'no-external-ref': {
      title: 'Aucune référence vers des ressources externes',
      pass: () => 'Aucune ressource externe ou URL externe détectée.',
      fail: () => 'Les liens vers des fichiers ou serveurs externes ne sont pas autorisés.',
    },
    'text-elements': {
      title: 'Éléments textuels',
      pass: () => 'Aucune balise <text> trouvée.',
      fail: () =>
        'Le texte brut peut s’afficher différemment selon les plateformes. Convertissez votre texte en courbes vectorielles (chemins).',
    },
  },
}

const esTool: BimiToolStrings = {
  tabRecord: 'Generador de registro',
  tabChecker: 'Validador de logo SVG',
  tabReadiness: 'Lista de requisitos',

  domainLabel: 'Dominio',
  domainPlaceholder: 'ejemplo.es',
  selectorLabel: 'Selector',
  selectorHint: '(predeterminado: default)',
  selectorWarning: 'Los correos requieren una cabecera BIMI-Selector si utiliza un selector diferente a default.',
  logoLabel: 'URL del logo',
  logoHint: '(debe empezar por https:// y terminar en .svg)',
  logoPlaceholder: 'https://ejemplo.es/bimi/logo.svg',
  certLabel: 'URL del certificado',
  certHint: '(opcional; debe empezar por https:// y terminar en .pem)',
  certPlaceholder: 'https://ejemplo.es/bimi/cert.pem',
  leaveLogoEmpty: 'Dejar l= vacío (el logo está incorporado en el certificado)',
  leaveLogoEmptyHelp: 'Ciertos certificados VMC integran la imagen del logo dentro del propio archivo PEM.',
  outputTitle: 'Publique este registro DNS TXT',
  hostLabel: 'Nombre de host',
  copy: 'Copiar',
  copied: 'Copiado',
  hostShort: 'Formato corto para paneles que agregan el dominio: {host}',
  typeLabel: 'Tipo de registro',
  ttlNote: 'TTL: 3600 (1 hora recomendada)',
  valueLabel: 'Valor del registro TXT',
  zoneLabel: 'Formato de archivo de zona',

  checkerTitle: 'Seleccione un archivo SVG o pegue el código SVG',
  uploadButton: 'Subir archivo SVG',
  pasteLabel: 'O pegue el marcado SVG:',
  previewAlt: 'Vista previa de SVG',
  passBadge: 'Cumple todas las reglas Tiny PS',
  failBadge: 'No cumple las reglas Tiny PS',
  fileSize: (byteSize) =>
    `Tamaño: ${(byteSize / 1024).toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Su logotipo SVG cumple las exigencias de los proveedores de correo y autoridades de certificación.',
  failText: 'Revise los puntos señalados abajo para ajustar su archivo antes de publicarlo.',

  readinessTitle: '¿Está preparado su dominio para BIMI?',
  readinessIntro: 'Marque los requisitos cumplidos para conocer dónde se mostrará su logotipo.',
  dmarcItem: 'DMARC en quarantine o reject',
  dmarcItemText: 'BIMI exige una política DMARC estricta. ¿Aún no la tiene? Utilice nuestro {link}.',
  dmarcLabel: 'Generador DMARC',
  dmarcHref: '/es/generador-dmarc',
  alignItem: 'SPF y DKIM alineados con el dominio del remitente',
  alignItemText: 'La autenticación debe coincidir con el dominio visible en la dirección From.',
  logoItem: 'Logotipo verificado por el validador',
  logoItemText: 'Conforme a SVG Tiny PS, formato cuadrado 1:1, sin scripts ni imágenes de mapa de bits.',
  certTitle: 'Tipo de certificado',
  certOptions: {
    none: 'Ninguno (solo SVG alojado)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Dónde se mostrará su logotipo:',
  where: {
    VMC: 'Con VMC: Gmail con insignia azul verificada, Apple Mail y clientes compatibles',
    CMC: 'Con CMC: Gmail sin insignia azul, no compatible con Apple Mail',
    none: 'Sin certificado: solo clientes que aceptan registros sin certificado (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Nota: Los requisitos previos son indispensables. Si DMARC no está en quarantine o reject, ningún proveedor mostrará el logo.',

  urlErrors: {
    required: 'Por favor, introduzca una URL',
    'not-https': 'La URL debe comenzar por https://',
    extension: (extension) => `La URL debe terminar en .${extension}`,
    invalid: 'Formato de URL no válido',
  },
  checks: {
    baseProfile: {
      title: 'Elemento raíz svg con baseProfile tiny-ps',
      pass: () => 'El elemento raíz es <svg> con baseProfile="tiny-ps".',
      fail: () => 'El elemento raíz <svg> debe especificar baseProfile="tiny-ps".',
    },
    version: {
      title: 'Versión 1.2',
      pass: () => 'El atributo version tiene valor 1.2.',
      fail: () => 'El elemento raíz <svg> debe especificar version="1.2".',
    },
    viewBox: {
      title: 'viewBox cuadrada',
      pass: () => 'La viewBox tiene la misma anchura y altura.',
      fail: () => 'La viewBox debe ser cuadrada (proporción 1:1).',
    },
    'no-root-xy': {
      title: 'Sin atributos x o y en el elemento svg',
      pass: () => 'El elemento raíz <svg> no contiene atributos x o y.',
      fail: () => 'El elemento raíz <svg> no debe contener coordenadas x o y.',
    },
    title: {
      title: 'Elemento title presente',
      pass: () => 'Contiene un elemento <title> no vacío con el nombre de su marca.',
      fail: () => 'Es obligatorio incluir un elemento <title> con el nombre de su empresa.',
    },
    filesize: {
      title: 'Tamaño inferior a 32 KB',
      pass: ({ byteSize }) =>
        `El archivo mide ${(byteSize / 1024).toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (dentro del límite de 32 KB).`,
      fail: ({ byteSize }) =>
        `El archivo mide ${(byteSize / 1024).toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB y supera el límite de 32 KB.`,
    },
    'no-script': {
      title: 'Sin elementos script',
      pass: () => 'No se han detectado scripts ejecutables.',
      fail: () => 'Los elementos <script> están prohibidos en Tiny PS por motivos de seguridad.',
    },
    'no-image': {
      title: 'Sin mapas de bits incrustados (etiqueta image)',
      pass: () => 'No se encontraron imágenes matriciales incrustadas.',
      fail: () => 'Tiny PS exige gráficos vectoriales puros. No se permiten etiquetas <image>.',
    },
    'no-foreignObject': {
      title: 'Sin foreignObject',
      pass: () => 'No se encontraron etiquetas <foreignObject>.',
      fail: () => 'Las etiquetas <foreignObject> no están permitidas en Tiny PS.',
    },
    'no-animation': {
      title: 'Sin animaciones',
      pass: () => 'No se detectaron etiquetas de animación.',
      fail: () => 'Los elementos de animación (<animate>, <set>) están prohibidos.',
    },
    'no-external-ref': {
      title: 'Sin referencias a archivos externos',
      pass: () => 'No hay referencias a recursos o URLs externas.',
      fail: () => 'No se permiten enlaces a archivos o servidores externos.',
    },
    'text-elements': {
      title: 'Elementos de texto',
      pass: () => 'No se encontraron elementos <text>.',
      fail: () =>
        'El texto puede visualizarse de forma dispar según la plataforma. Se recomienda convertir el texto a trazados o curvas.',
    },
  },
}

const itTool: BimiToolStrings = {
  tabRecord: 'Generatore record',
  tabChecker: 'Verifica logo SVG',
  tabReadiness: 'Checklist di verifica',

  domainLabel: 'Dominio',
  domainPlaceholder: 'esempio.it',
  selectorLabel: 'Selettore',
  selectorHint: '(predefinito: default)',
  selectorWarning: 'Le email richiedono un’intestazione BIMI-Selector se utilizzi un selettore diverso da default.',
  logoLabel: 'URL del logo',
  logoHint: '(deve iniziare con https:// e terminare in .svg)',
  logoPlaceholder: 'https://esempio.it/bimi/logo.svg',
  certLabel: 'URL del certificato',
  certHint: '(opzionale; deve iniziare con https:// e terminare in .pem)',
  certPlaceholder: 'https://esempio.it/bimi/cert.pem',
  leaveLogoEmpty: 'Lascia l= vuoto (il logo è incorporato nel certificato)',
  leaveLogoEmptyHelp: 'Alcuni certificati VMC includono il file grafico direttamente nel file PEM.',
  outputTitle: 'Pubblica questo record DNS TXT',
  hostLabel: 'Host / Nome',
  copy: 'Copia',
  copied: 'Copiato',
  hostShort: 'Nome breve per i pannelli DNS che aggiungono il dominio: {host}',
  typeLabel: 'Tipo di record',
  ttlNote: 'TTL: 3600 (consigliato 1 ora)',
  valueLabel: 'Valore record TXT',
  zoneLabel: 'Formato file di zona',

  checkerTitle: 'Seleziona un file SVG o incolla il codice SVG',
  uploadButton: 'Carica file SVG',
  pasteLabel: 'Oppure incolla il codice SVG:',
  previewAlt: 'Anteprima SVG',
  passBadge: 'Conforme a tutte le regole Tiny PS',
  failBadge: 'Non conforme alle regole Tiny PS',
  fileSize: (byteSize) =>
    `Dimensione: ${(byteSize / 1024).toLocaleString('it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Il tuo logo SVG rispetta tutti i requisiti dei client di posta e delle autorità di certificazione.',
  failText: 'Verifica i punti non superati in basso e correggi il file prima di pubblicarlo.',

  readinessTitle: 'Il tuo dominio è pronto per BIMI?',
  readinessIntro: 'Verifica i requisiti soddisfatti per visualizzare dove potrà apparire il tuo logo.',
  dmarcItem: 'DMARC impostato su quarantine o reject',
  dmarcItemText: 'BIMI richiede una policy DMARC restrittiva. Non l’hai ancora configurata? Usa il nostro {link}.',
  dmarcLabel: 'Generatore DMARC',
  dmarcHref: '/it/generatore-dmarc',
  alignItem: 'SPF e DKIM allineati con il dominio mittente',
  alignItemText: 'L’autenticazione deve corrispondere esattamente al dominio visibile nell’indirizzo From.',
  logoItem: 'Logo verificato dal validatore',
  logoItemText: 'Conforme a SVG Tiny PS, formato quadrato 1:1, senza script né immagini raster.',
  certTitle: 'Tipo di certificato',
  certOptions: {
    none: 'Nessuno (solo SVG ospitato)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Dove comparirà il tuo logo:',
  where: {
    VMC: 'Con VMC: Gmail con spunta blu verificata, Apple Mail e provider compatibili',
    CMC: 'Con CMC: Gmail senza spunta blu, non supportato su Apple Mail',
    none: 'Senza certificato: solo provider che accettano record senza certificato (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Nota: I requisiti sono obbligatori. Se DMARC non è impostato su quarantine o reject, nessun provider mostrerà il logo.',

  urlErrors: {
    required: 'Inserisci un URL valido',
    'not-https': 'L’URL deve iniziare con https://',
    extension: (extension) => `L’URL deve terminare in .${extension}`,
    invalid: 'Formato URL non valido',
  },
  checks: {
    baseProfile: {
      title: 'Elemento radice svg con baseProfile tiny-ps',
      pass: () => 'L’elemento radice è <svg> con baseProfile="tiny-ps".',
      fail: () => 'L’elemento radice <svg> deve definire baseProfile="tiny-ps".',
    },
    version: {
      title: 'Versione 1.2',
      pass: () => 'L’attributo version è impostato su 1.2.',
      fail: () => 'L’elemento radice <svg> deve specificare version="1.2".',
    },
    viewBox: {
      title: 'viewBox quadrata',
      pass: () => 'La viewBox ha larghezza e altezza uguali.',
      fail: () => 'La viewBox deve essere quadrata (proporzioni 1:1).',
    },
    'no-root-xy': {
      title: 'Nessun attributo x o y sul tag svg',
      pass: () => 'L’elemento radice <svg> non presenta attributi x o y.',
      fail: () => 'L’elemento radice <svg> non deve contenere coordinate x o y.',
    },
    title: {
      title: 'Presenza tag title',
      pass: () => 'Contiene un elemento <title> non vuoto con il nome del marchio.',
      fail: () => 'È obbligatorio un elemento <title> con il nome della tua azienda.',
    },
    filesize: {
      title: 'Dimensione massima 32 KB',
      pass: ({ byteSize }) =>
        `Il file è di ${(byteSize / 1024).toLocaleString('it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (inferiore a 32 KB).`,
      fail: ({ byteSize }) =>
        `Il file è di ${(byteSize / 1024).toLocaleString('it-IT', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB e supera il limite di 32 KB.`,
    },
    'no-script': {
      title: 'Nessun elemento script',
      pass: () => 'Nessun elemento eseguibile <script> rilevato.',
      fail: () => 'Gli elementi <script> sono vietati in Tiny PS per sicurezza.',
    },
    'no-image': {
      title: 'Nessuna immagine raster incorporata (tag image)',
      pass: () => 'Nessuna immagine raster incorporata trovata.',
      fail: () => 'Tiny PS richiede solo grafica vettoriale pura. Le immagini raster sono vietate.',
    },
    'no-foreignObject': {
      title: 'Nessun foreignObject',
      pass: () => 'Nessun tag <foreignObject> presente.',
      fail: () => 'I tag <foreignObject> non sono ammessi in Tiny PS.',
    },
    'no-animation': {
      title: 'Nessuna animazione',
      pass: () => 'Nessun elemento di animazione rilevato.',
      fail: () => 'Gli elementi di animazione (<animate>, <set>) sono vietati.',
    },
    'no-external-ref': {
      title: 'Nessun riferimento a file esterni',
      pass: () => 'Nessuna risorsa o link a file esterni rilevato.',
      fail: () => 'Non sono consentiti collegamenti a server o file esterni.',
    },
    'text-elements': {
      title: 'Elementi di testo',
      pass: () => 'Nessun elemento <text> rilevato.',
      fail: () =>
        'I caratteri di testo possono differire a seconda della piattaforma. Si raccomanda di convertire il testo in tracciati vettoriali.',
    },
  },
}

const ptBrTool: BimiToolStrings = {
  tabRecord: 'Gerador de registro',
  tabChecker: 'Validador de logo SVG',
  tabReadiness: 'Checklist de requisitos',

  domainLabel: 'Domínio',
  domainPlaceholder: 'exemplo.com.br',
  selectorLabel: 'Seletor',
  selectorHint: '(padrão: default)',
  selectorWarning: 'Mensagens exigem cabeçalho BIMI-Selector caso utilizem um seletor diferente de default.',
  logoLabel: 'URL do logotipo',
  logoHint: '(deve começar com https:// e terminar em .svg)',
  logoPlaceholder: 'https://exemplo.com.br/bimi/logo.svg',
  certLabel: 'URL do certificado',
  certHint: '(opcional; deve começar com https:// e terminar em .pem)',
  certPlaceholder: 'https://exemplo.com.br/bimi/cert.pem',
  leaveLogoEmpty: 'Deixar l= vazio (o logotipo está incluso no certificado)',
  leaveLogoEmptyHelp: 'Alguns certificados VMC incluem a imagem diretamente na carga do arquivo PEM.',
  outputTitle: 'Publique este registro DNS TXT',
  hostLabel: 'Host / Nome',
  copy: 'Copiar',
  copied: 'Copiado',
  hostShort: 'Formato curto para painéis que adicionam o domínio: {host}',
  typeLabel: 'Tipo de registro',
  ttlNote: 'TTL: 3600 (1 hora recomendada)',
  valueLabel: 'Valor do registro TXT',
  zoneLabel: 'Formato de arquivo de zona',

  checkerTitle: 'Selecione um arquivo SVG ou cole o código SVG',
  uploadButton: 'Enviar arquivo SVG',
  pasteLabel: 'Ou cole a marcação SVG:',
  previewAlt: 'Prévia do SVG',
  passBadge: 'Atende a todas as regras Tiny PS',
  failBadge: 'Não atende às regras Tiny PS',
  fileSize: (byteSize) =>
    `Tamanho: ${(byteSize / 1024).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Seu logotipo SVG cumpre as exigências dos provedores de e-mail e autoridades certificadoras.',
  failText: 'Confira os itens reprovados abaixo e ajuste seu arquivo antes de publicá-lo.',

  readinessTitle: 'Seu domínio está pronto para o BIMI?',
  readinessIntro: 'Marque os pré-requisitos cumpridos para verificar onde seu logotipo poderá ser exibido.',
  dmarcItem: 'DMARC em quarantine ou reject',
  dmarcItemText: 'O BIMI exige uma política ativa de DMARC. Ainda não configurou? Use nosso {link}.',
  dmarcLabel: 'Gerador de DMARC',
  dmarcHref: '/pt-br/gerador-dmarc',
  alignItem: 'SPF e DKIM alinhados com o domínio remetente',
  alignItemText: 'A autenticação deve coincidir com o domínio visível no endereço From.',
  logoItem: 'Logotipo aprovado pelo validador',
  logoItemText: 'Compatível com SVG Tiny PS, proporção quadrada 1:1, sem scripts ou imagens rasterizadas.',
  certTitle: 'Tipo de certificado',
  certOptions: {
    none: 'Nenhum (apenas SVG hospedado)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Onde seu logotipo será exibido:',
  where: {
    VMC: 'Com VMC: Gmail com selo azul oficial, Apple Mail e provedores compatíveis',
    CMC: 'Com CMC: Gmail sem selo azul, não suportado no Apple Mail',
    none: 'Sem certificado: apenas provedores que aceitam registros sem certificado (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Lembrete: Os requisitos são indispensáveis. Se o DMARC não estiver em quarantine ou reject, nenhum provedor exibirá o logotipo.',

  urlErrors: {
    required: 'Por favor, insira uma URL',
    'not-https': 'A URL deve começar com https://',
    extension: (extension) => `A URL deve terminar com .${extension}`,
    invalid: 'Formato de URL inválido',
  },
  checks: {
    baseProfile: {
      title: 'Elemento raiz svg com baseProfile tiny-ps',
      pass: () => 'O elemento raiz é <svg> com baseProfile="tiny-ps".',
      fail: () => 'O elemento raiz <svg> deve especificar baseProfile="tiny-ps".',
    },
    version: {
      title: 'Versão 1.2',
      pass: () => 'O atributo version está definido como 1.2.',
      fail: () => 'O elemento raiz <svg> deve indicar version="1.2".',
    },
    viewBox: {
      title: 'viewBox quadrada',
      pass: () => 'A viewBox possui largura e altura perfeitamente iguais.',
      fail: () => 'A viewBox deve ser quadrada (proporção 1:1).',
    },
    'no-root-xy': {
      title: 'Sem atributos x ou y na tag svg',
      pass: () => 'O elemento raiz <svg> não possui coordenadas x ou y.',
      fail: () => 'O elemento raiz <svg> não deve conter atributos x ou y.',
    },
    title: {
      title: 'Elemento title presente',
      pass: () => 'Contém uma tag <title> não vazia com o nome da sua marca.',
      fail: () => 'É obrigatório incluir um elemento <title> com o nome da empresa.',
    },
    filesize: {
      title: 'Tamanho máximo de 32 KB',
      pass: ({ byteSize }) =>
        `O arquivo tem ${(byteSize / 1024).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (abaixo do limite de 32 KB).`,
      fail: ({ byteSize }) =>
        `O arquivo tem ${(byteSize / 1024).toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB e excede o limite de 32 KB.`,
    },
    'no-script': {
      title: 'Sem elementos script',
      pass: () => 'Nenhum script executável encontrado.',
      fail: () => 'Elementos <script> são expressamente proibidos no SVG Tiny PS.',
    },
    'no-image': {
      title: 'Sem imagens rasterizadas incorporadas (tag image)',
      pass: () => 'Nenhuma imagem rasterizada incorporada detectada.',
      fail: () => 'O Tiny PS exige apenas vetores. Imagens rasterizadas em tags <image> são proibidas.',
    },
    'no-foreignObject': {
      title: 'Sem foreignObject',
      pass: () => 'Nenhuma tag <foreignObject> encontrada.',
      fail: () => 'Tags <foreignObject> não são permitidas no Tiny PS.',
    },
    'no-animation': {
      title: 'Sem animações',
      pass: () => 'Nenhum elemento de animação detectado.',
      fail: () => 'Elementos de animação (<animate>, <set>) são proibidos.',
    },
    'no-external-ref': {
      title: 'Sem referências a arquivos externos',
      pass: () => 'Nenhuma referência a arquivos ou servidores externos.',
      fail: () => 'Links para arquivos ou recursos externos não são permitidos.',
    },
    'text-elements': {
      title: 'Elementos de texto',
      pass: () => 'Nenhum elemento <text> encontrado.',
      fail: () =>
        'Textos podem ser renderizados de forma inconsistente entre sistemas. Recomenda-se converter o texto em curvas (caminhos).',
    },
  },
}

const nlTool: BimiToolStrings = {
  tabRecord: 'Record Generator',
  tabChecker: 'SVG-logo Checker',
  tabReadiness: 'Gereedheidscontrole',

  domainLabel: 'Domein',
  domainPlaceholder: 'voorbeeld.nl',
  selectorLabel: 'Selector',
  selectorHint: '(standaard: default)',
  selectorWarning: 'E-mails vereisen een BIMI-Selector header indien een andere selector dan default wordt gebruikt.',
  logoLabel: 'Logo-URL',
  logoHint: '(moet beginnen met https:// en eindigen op .svg)',
  logoPlaceholder: 'https://voorbeeld.nl/bimi/logo.svg',
  certLabel: 'Certificaat-URL',
  certHint: '(optioneel; moet beginnen met https:// en eindigen op .pem)',
  certPlaceholder: 'https://voorbeeld.nl/bimi/cert.pem',
  leaveLogoEmpty: 'Laat l= leeg (het logo bevindt zich in het certificaat)',
  leaveLogoEmptyHelp: 'Sommige VMC-certificaten bevatten het vectorlogo rechtstreeks in het PEM-bestand.',
  outputTitle: 'Publiceer dit DNS TXT-record',
  hostLabel: 'Host / Naam',
  copy: 'Kopiëren',
  copied: 'Gekopieerd',
  hostShort: 'Korte naam voor DNS-panelen die het domein toevoegen: {host}',
  typeLabel: 'Recordtype',
  ttlNote: 'TTL: 3600 (1 uur aanbevolen)',
  valueLabel: 'TXT-recordwaarde',
  zoneLabel: 'Zone-bestandsformaat',

  checkerTitle: 'Selecteer SVG-logobestand of plak SVG-code',
  uploadButton: 'Upload SVG-bestand',
  pasteLabel: 'Of plak de SVG-opmaak:',
  previewAlt: 'SVG-voorvertoning',
  passBadge: 'Voldoet aan alle Tiny PS-regels',
  failBadge: 'Voldoet niet aan de Tiny PS-regels',
  fileSize: (byteSize) =>
    `Bestandsgrootte: ${(byteSize / 1024).toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Uw SVG-logo voldoet aan de eisen van mailproviders en certificeringsinstanties.',
  failText: 'Bekijk de afgekeurde punten hieronder en pas uw bestand aan voordat u publiceert.',

  readinessTitle: 'Is uw domein klaar voor BIMI?',
  readinessIntro: 'Vink de voldane voorwaarden af om te zien waar uw merklogo kan verschijnen.',
  dmarcItem: 'DMARC op quarantine of reject',
  dmarcItemText: 'BIMI vereist een strikt DMARC-beleid. Nog geen DMARC ingesteld? Gebruik onze {link}.',
  dmarcLabel: 'DMARC-generator',
  dmarcHref: '/nl/dmarc-generator',
  alignItem: 'SPF en DKIM afgestemd op het afzenderdomein',
  alignItemText: 'De authenticatie moet exact overeenkomen met het domein in het From-adres.',
  logoItem: 'Logo goedgekeurd door de checker',
  logoItemText: 'Voldoet aan SVG Tiny PS, vierkante verhouding 1:1, zonder scripts of rasterafbeeldingen.',
  certTitle: 'Soort certificaat',
  certOptions: {
    none: 'Geen (alleen zelf gehoste SVG)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Waar uw logo kan worden weergegeven:',
  where: {
    VMC: 'Met VMC: Gmail met officieel blauw vinkje, Apple Mail en ondersteunende clients',
    CMC: 'Met CMC: Gmail zonder blauw vinkje, niet ondersteund op Apple Mail',
    none: 'Zonder certificaat: alleen providers die records zonder certificaat accepteren (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Let op: De voorwaarden zijn verplicht. Zonder DMARC op quarantine of reject toont geen enkele provider het logo.',

  urlErrors: {
    required: 'Voer een geldige URL in',
    'not-https': 'De URL moet beginnen met https://',
    extension: (extension) => `De URL moet eindigen op .${extension}`,
    invalid: 'Ongeldig URL-formaat',
  },
  checks: {
    baseProfile: {
      title: 'Hoofdelement svg met baseProfile tiny-ps',
      pass: () => 'Het hoofdelement is <svg> met baseProfile="tiny-ps".',
      fail: () => 'Het hoofdelement <svg> moet baseProfile="tiny-ps" specificeren.',
    },
    version: {
      title: 'Versie 1.2',
      pass: () => 'Het attribuut version staat op 1.2.',
      fail: () => 'Het hoofdelement <svg> moet version="1.2" specificeren.',
    },
    viewBox: {
      title: 'Vierkante viewBox',
      pass: () => 'De viewBox heeft exact gelijke breedte en hoogte.',
      fail: () => 'De viewBox moet vierkant zijn (verhouding 1:1).',
    },
    'no-root-xy': {
      title: 'Geen x- of y-attributen op het svg-element',
      pass: () => 'Het hoofdelement <svg> bevat geen x- of y-coördinaten.',
      fail: () => 'Het hoofdelement <svg> mag geen x- of y-attributen bevatten.',
    },
    title: {
      title: 'Element title aanwezig',
      pass: () => 'Bevat een niet-leeg <title>-element met uw merknaam.',
      fail: () => 'Een <title>-element met de naam van uw bedrijf is verplicht.',
    },
    filesize: {
      title: 'Bestandsgrootte maximaal 32 KB',
      pass: ({ byteSize }) =>
        `Het bestand is ${(byteSize / 1024).toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (onder de limiet van 32 KB).`,
      fail: ({ byteSize }) =>
        `Het bestand is ${(byteSize / 1024).toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB en overschrijdt de limiet van 32 KB.`,
    },
    'no-script': {
      title: 'Geen script-elementen',
      pass: () => 'Geen uitvoerbare <script>-elementen aangetroffen.',
      fail: () => '<script>-elementen zijn verboden in Tiny PS voor de veiligheid.',
    },
    'no-image': {
      title: 'Geen ingesloten rasterafbeeldingen (image-tag)',
      pass: () => 'Geen ingesloten rasterafbeeldingen gevonden.',
      fail: () => 'Tiny PS vereist zuivere vectorafbeeldingen. <image>-tags zijn verboden.',
    },
    'no-foreignObject': {
      title: 'Geen foreignObject',
      pass: () => 'Geen <foreignObject>-elementen aanwezig.',
      fail: () => '<foreignObject>-elementen zijn niet toegestaan in Tiny PS.',
    },
    'no-animation': {
      title: 'Geen animaties',
      pass: () => 'Geen animatie-elementen aangetroffen.',
      fail: () => 'Animatie-elementen (<animate>, <set>) zijn niet toegestaan.',
    },
    'no-external-ref': {
      title: 'Geen verwijzingen naar externe bestanden',
      pass: () => 'Geen verwijzingen naar externe servers of bestanden.',
      fail: () => 'Koppelingen naar externe bestanden zijn verboden.',
    },
    'text-elements': {
      title: 'Tekstelementen',
      pass: () => 'Geen <text>-elementen gevonden.',
      fail: () =>
        'Tekst kan op verschillende platforms afwijkend worden getoond. Zet tekst om in lettercontouren (paden).',
    },
  },
}

const plTool: BimiToolStrings = {
  tabRecord: 'Generator rekordu',
  tabChecker: 'Walidator logo SVG',
  tabReadiness: 'Lista gotowości',

  domainLabel: 'Domena',
  domainPlaceholder: 'przyklad.pl',
  selectorLabel: 'Selektor',
  selectorHint: '(domyślnie: default)',
  selectorWarning: 'Wiadomości pocztowe wymagają nagłówka BIMI-Selector w przypadku użycia selektora innego niż default.',
  logoLabel: 'Adres URL logo',
  logoHint: '(musi zaczynać się od https:// i kończyć na .svg)',
  logoPlaceholder: 'https://przyklad.pl/bimi/logo.svg',
  certLabel: 'Adres URL certyfikatu',
  certHint: '(opcjonalnie; musi zaczynać się od https:// i kończyć na .pem)',
  certPlaceholder: 'https://przyklad.pl/bimi/cert.pem',
  leaveLogoEmpty: 'Pozostaw l= puste (logo znajduje się wewnątrz certyfikatu)',
  leaveLogoEmptyHelp: 'Niektóre certyfikaty VMC zawierają plik wektorowy osadzony bezpośrednio w certyfikacie PEM.',
  outputTitle: 'Opublikuj poniższy rekord DNS TXT',
  hostLabel: 'Nazwa hosta',
  copy: 'Kopiuj',
  copied: 'Skopiowano',
  hostShort: 'Krótka nazwa dla paneli DNS dodających domenę: {host}',
  typeLabel: 'Typ rekordu',
  ttlNote: 'TTL: 3600 (zalecana 1 godzina)',
  valueLabel: 'Wartość rekordu TXT',
  zoneLabel: 'Format pliku strefy',

  checkerTitle: 'Wybierz plik SVG lub wklej kod SVG',
  uploadButton: 'Wczytaj plik SVG',
  pasteLabel: 'Lub wklej kod SVG:',
  previewAlt: 'Podgląd SVG',
  passBadge: 'Spełnia wszystkie reguły Tiny PS',
  failBadge: 'Nie spełnia reguł Tiny PS',
  fileSize: (byteSize) =>
    `Rozmiar: ${(byteSize / 1024).toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Twoje logo SVG spełnia wytyczne dostawców poczty i urzędów certyfikacji.',
  failText: 'Sprawdź poniższe uwagi i popraw plik przed wdrożeniem do DNS.',

  readinessTitle: 'Czy Twoja domena jest gotowa na BIMI?',
  readinessIntro: 'Zaznacz spełnione warunki, aby dowiedzieć się, gdzie pojawi się Twoje logo.',
  dmarcItem: 'DMARC ustawione na quarantine lub reject',
  dmarcItemText: 'BIMI bezwzględnie wymaga restrykcyjnego DMARC. Jeszcze go nie masz? Użyj naszego {link}.',
  dmarcLabel: 'Generator DMARC',
  dmarcHref: '/pl/generator-dmarc',
  alignItem: 'SPF i DKIM zgodne z domeną nadawcy',
  alignItemText: 'Uwierzytelnienie musi być zgodne z domeną w polu From.',
  logoItem: 'Logo zweryfikowane pozytywnie',
  logoItemText: 'Format SVG Tiny PS, kwadratowe proporcje 1:1, bez skryptów i grafiki rastrowej.',
  certTitle: 'Rodzaj certyfikatu',
  certOptions: {
    none: 'Brak (tylko samodzielnie hostowany plik SVG)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Gdzie wyświetli się Twoje logo:',
  where: {
    VMC: 'Z VMC: Gmail z niebieskim znaczkiem weryfikacji, Apple Mail i zgodni dostawcy',
    CMC: 'Z CMC: Gmail bez niebieskiego znaczka, brak wsparcia w Apple Mail',
    none: 'Bez certyfikatu: wyłącznie dostawcy akceptujący rekordy bez certyfikatu (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Uwaga: Wymogi są bezwzględne. Bez polityki DMARC na poziomie quarantine lub reject żaden dostawca nie wyświetli logo.',

  urlErrors: {
    required: 'Wprowadź prawidłowy adres URL',
    'not-https': 'Adres URL musi zaczynać się od https://',
    extension: (extension) => `Adres URL musi kończyć się na .${extension}`,
    invalid: 'Nieprawidłowy format adresu URL',
  },
  checks: {
    baseProfile: {
      title: 'Element główny svg z baseProfile tiny-ps',
      pass: () => 'Elementem głównym jest <svg> z baseProfile="tiny-ps".',
      fail: () => 'Element główny <svg> musi deklarować baseProfile="tiny-ps".',
    },
    version: {
      title: 'Wersja 1.2',
      pass: () => 'Atrybut version ma wartość 1.2.',
      fail: () => 'Element główny <svg> musi określać version="1.2".',
    },
    viewBox: {
      title: 'Kwadratowy viewBox',
      pass: () => 'viewBox posiada dokładnie taką samą szerokość i wysokość.',
      fail: () => 'viewBox musi być kwadratowy (proporcje 1:1).',
    },
    'no-root-xy': {
      title: 'Brak atrybutów x oraz y w znaczniku svg',
      pass: () => 'Element główny <svg> nie posiada atrybutów x ani y.',
      fail: () => 'Element główny <svg> nie może zawierać współrzędnych x ani y.',
    },
    title: {
      title: 'Obecność znacznika title',
      pass: () => 'Zawiera niepusty element <title> z nazwą marki.',
      fail: () => 'Wymagany jest element <title> z nazwą Twojej marki.',
    },
    filesize: {
      title: 'Rozmiar pliku do 32 KB',
      pass: ({ byteSize }) =>
        `Plik waży ${(byteSize / 1024).toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (poniżej limitu 32 KB).`,
      fail: ({ byteSize }) =>
        `Plik waży ${(byteSize / 1024).toLocaleString('pl-PL', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB i przekracza limit 32 KB.`,
    },
    'no-script': {
      title: 'Brak skryptów',
      pass: () => 'Nie wykryto elementów <script>.',
      fail: () => 'Elementy <script> są zabronione w profilu Tiny PS.',
    },
    'no-image': {
      title: 'Brak osadzonych obrazów rastrowych (tag image)',
      pass: () => 'Nie znaleziono osadzonych grafik rastrowych.',
      fail: () => 'Tiny PS wymaga czystej grafiki wektorowej. Tagi <image> są niedozwolone.',
    },
    'no-foreignObject': {
      title: 'Brak foreignObject',
      pass: () => 'Brak elementów <foreignObject>.',
      fail: () => 'Znaczniki <foreignObject> są zabronione w Tiny PS.',
    },
    'no-animation': {
      title: 'Brak animacji',
      pass: () => 'Nie wykryto znaczników animacji.',
      fail: () => 'Elementy animacji (<animate>, <set>) są zabronione.',
    },
    'no-external-ref': {
      title: 'Brak odwołań do zasobów zewnętrznych',
      pass: () => 'Brak odwołań do zewnętrznych serwerów czy plików.',
      fail: () => 'Odwołania do zewnętrznych zasobów są niedozwolone.',
    },
    'text-elements': {
      title: 'Elementy tekstowe',
      pass: () => 'Nie znaleziono elementów <text>.',
      fail: () =>
        'Tekst może być różnie interpretowany przez systemy. Zaleca się przekształcenie tekstu w krzywe wektorowe.',
    },
  },
}

const idTool: BimiToolStrings = {
  tabRecord: 'Pembuat Catatan',
  tabChecker: 'Pemeriksa Logo SVG',
  tabReadiness: 'Daftar Kesiapan',

  domainLabel: 'Domain',
  domainPlaceholder: 'contoh.id',
  selectorLabel: 'Selector',
  selectorHint: '(bawaan: default)',
  selectorWarning: 'Email membutuhkan header BIMI-Selector apabila menggunakan selector selain default.',
  logoLabel: 'URL Logo',
  logoHint: '(wajib diawali https:// dan diakhiri .svg)',
  logoPlaceholder: 'https://contoh.id/bimi/logo.svg',
  certLabel: 'URL Sertifikat',
  certHint: '(opsional; wajib diawali https:// dan diakhiri .pem)',
  certPlaceholder: 'https://contoh.id/bimi/cert.pem',
  leaveLogoEmpty: 'Biarkan l= kosong (logo sudah tersemat dalam sertifikat)',
  leaveLogoEmptyHelp: 'Beberapa sertifikat VMC menyematkan file logo langsung di dalam payload PEM.',
  outputTitle: 'Publikasikan Catatan DNS TXT Ini',
  hostLabel: 'Host / Nama',
  copy: 'Salin',
  copied: 'Disalin',
  hostShort: 'Format ringkas untuk panel yang menambahkan domain: {host}',
  typeLabel: 'Tipe Catatan',
  ttlNote: 'TTL: 3600 (disarankan 1 jam)',
  valueLabel: 'Nilai Catatan TXT',
  zoneLabel: 'Format Zone File',

  checkerTitle: 'Pilih File Logo SVG atau Tempelkan Kode SVG',
  uploadButton: 'Unggah File SVG',
  pasteLabel: 'Atau tempelkan markup SVG:',
  previewAlt: 'Pratinjau SVG',
  passBadge: 'Memenuhi Seluruh Standar Tiny PS',
  failBadge: 'Belum Memenuhi Standar Tiny PS',
  fileSize: (byteSize) =>
    `Ukuran file: ${(byteSize / 1024).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB`,
  passText: 'Logo SVG Anda memenuhi persyaratan penyedia email dan otoritas sertifikat.',
  failText: 'Tinjau poin yang belum lolos di bawah untuk memperbaiki file logo Anda sebelum dipublikasikan.',

  readinessTitle: 'Apakah domain Anda siap menerapkan BIMI?',
  readinessIntro: 'Centang syarat yang sudah terpenuhi untuk melihat di mana logo brand Anda dapat tampil.',
  dmarcItem: 'DMARC pada kebijakan quarantine atau reject',
  dmarcItemText: 'BIMI mewajibkan kebijakan DMARC penegakan. Belum menyiapkannya? Gunakan {link} kami.',
  dmarcLabel: 'Generator DMARC',
  dmarcHref: '/id/dmarc-generator',
  alignItem: 'SPF dan DKIM selaras dengan domain pengirim',
  alignItemText: 'Otentikasi harus cocok dengan domain yang tertera pada alamat From.',
  logoItem: 'Logo lolos pemeriksaan validator',
  logoItemText: 'Sesuai dengan SVG Tiny PS, rasio persegi 1:1, tanpa script maupun gambar raster.',
  certTitle: 'Tingkatan Sertifikat',
  certOptions: {
    none: 'Tidak ada (hanya file SVG yang di-hosting sendiri)',
    CMC: 'CMC (Common Mark Certificate)',
    VMC: 'VMC (Verified Mark Certificate)',
  },
  whereTitle: 'Di mana logo brand Anda akan tampil:',
  where: {
    VMC: 'Dengan VMC: Gmail dengan tanda centang biru resmi, Apple Mail, dan penyedia yang mendukung',
    CMC: 'Dengan CMC: Gmail tanpa tanda centang biru, tidak didukung di Apple Mail',
    none: 'Tanpa sertifikat: hanya penyedia yang menerima catatan tanpa sertifikat (Yahoo, Fastmail)',
  },
  prerequisitesNote:
    'Catatan: Syarat wajib dipenuhi. Tanpa kebijakan DMARC quarantine atau reject, penyedia email tidak akan menampilkan logo.',

  urlErrors: {
    required: 'Silakan masukkan URL yang valid',
    'not-https': 'URL wajib diawali dengan https://',
    extension: (extension) => `URL wajib diakhiri dengan .${extension}`,
    invalid: 'Format URL tidak valid',
  },
  checks: {
    baseProfile: {
      title: 'Elemen root svg dengan baseProfile tiny-ps',
      pass: () => 'Elemen root adalah <svg> dengan baseProfile="tiny-ps".',
      fail: () => 'Elemen root <svg> wajib menyertakan baseProfile="tiny-ps".',
    },
    version: {
      title: 'Versi 1.2',
      pass: () => 'Atribut version bernilai 1.2.',
      fail: () => 'Elemen root <svg> wajib menyertakan version="1.2".',
    },
    viewBox: {
      title: 'viewBox persegi seimbang',
      pass: () => 'viewBox memiliki lebar dan tinggi yang sama persis.',
      fail: () => 'viewBox wajib berbentuk persegi (rasio 1:1).',
    },
    'no-root-xy': {
      title: 'Tanpa atribut x atau y pada elemen svg',
      pass: () => 'Elemen root <svg> tidak memiliki atribut x maupun y.',
      fail: () => 'Elemen root <svg> tidak boleh memuat koordinat x atau y.',
    },
    title: {
      title: 'Memiliki elemen title',
      pass: () => 'Memuat elemen <title> berisi nama brand Anda.',
      fail: () => 'Elemen <title> dengan nama perusahaan/brand wajib ada.',
    },
    filesize: {
      title: 'Ukuran file maksimal 32 KB',
      pass: ({ byteSize }) =>
        `Ukuran file ${(byteSize / 1024).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (di bawah batas 32 KB).`,
      fail: ({ byteSize }) =>
        `Ukuran file ${(byteSize / 1024).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} KB (melebihi batas 32 KB).`,
    },
    'no-script': {
      title: 'Tanpa elemen script',
      pass: () => 'Tidak ada elemen <script> yang dapat dieksekusi.',
      fail: () => 'Elemen <script> dilarang keras demi alasan keamanan.',
    },
    'no-image': {
      title: 'Tanpa gambar bitmap raster (tag image)',
      pass: () => 'Tidak ditemukan gambar raster yang disematkan.',
      fail: () => 'Tiny PS mewajibkan vektor murni. Tag <image> dengan piksel dilarang.',
    },
    'no-foreignObject': {
      title: 'Tanpa foreignObject',
      pass: () => 'Tidak ada elemen <foreignObject>.',
      fail: () => 'Tag <foreignObject> tidak diizinkan dalam Tiny PS.',
    },
    'no-animation': {
      title: 'Tanpa animasi',
      pass: () => 'Tidak ditemukan elemen animasi SVG.',
      fail: () => 'Elemen animasi (<animate>, <set>) dilarang.',
    },
    'no-external-ref': {
      title: 'Tanpa tautan ke file eksternal',
      pass: () => 'Tidak ada referensi ke server atau URL luar.',
      fail: () => 'Tautan ke file atau server eksternal tidak diizinkan.',
    },
    'text-elements': {
      title: 'Elemen teks',
      pass: () => 'Tidak ditemukan elemen <text>.',
      fail: () =>
        'Teks mungkin tampil berbeda tergantung perangkat pengguna. Disarankan mengubah teks menjadi bentuk kurva vektor (path).',
    },
  },
}

export const BIMI_TOOL_STRINGS: Record<Locale, BimiToolStrings> = { en, de: deTool, fr: frTool, es: esTool, it: itTool, 'pt-br': ptBrTool, nl: nlTool, pl: plTool, id: idTool }

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
