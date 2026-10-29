// All page copy for the BIMI generator, one object per language the page ships in.
// The page is components/tools/BimiGenerator/BimiGeneratorPage.tsx; the URLs live
// in CLUSTERS.bimiGenerator (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/bimiToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists. FAQ answers use the
// same link markup (rendered by FaqAccordion).
//
// BIMI record syntax (the tag names v, l, a and the example values) is data in
// the page component and is not translated.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface BimiPageStrings {
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
  /** The first step carries a link. */
  howSteps: [string, string, string, string, string]
  imageAlt: string
  recordTitle: string
  thTag: string
  thDoes: string
  thExample: string
  /** What each tag does, in the order v, l, a. */
  tagMeanings: [string, string, string]
  recordNote: string
  logoTitle: string
  logoPara: string
  certTitle: string
  certPara: string
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: BimiPageStrings = {
  metaTitle: 'Free BIMI Record Generator and SVG Logo Checker | Giggal.ai',
  ogTitle: 'Free BIMI Record Generator and SVG Logo Checker',
  description:
    'Build your BIMI record and check your SVG logo against the Tiny PS rules in your browser. See what Gmail, Apple Mail and others need before your logo shows. Free.',
  ogImage: '/tools/bimi-generator-og-v2.webp',
  ogAlt: 'Free BIMI Record Generator',
  crumb: 'BIMI Record Generator',
  appName: 'Free BIMI Record Generator and SVG Logo Checker',
  featureList: [
    'Build BIMI TXT records with custom selector, logo, and certificate URLs',
    'Validate SVG logos against 11 strict SVG Tiny PS specifications',
    'Interactive BIMI readiness checklist for Gmail and Apple Mail support',
    'Zone-file line generation and copy helpers',
    'Runs 100% in-browser with zero upload or telemetry',
  ],
  h1: 'BIMI Record Generator',
  heroIntro:
    'Build the BIMI record for your domain and check that your logo file meets the rules, before you buy a certificate or publish anything.',
  howTitle: 'How to set up BIMI',
  howSteps: [
    "Get DMARC to enforcement. BIMI doesn't work at p=none; your policy has to be quarantine or reject. The [DMARC generator](/dmarc-generator) can build that record.",
    'Prepare your logo as an SVG Tiny PS file and test it with the logo checker above.',
    'Decide on a certificate. Gmail shows BIMI logos only with a VMC or a CMC, and Apple Mail only with a VMC.',
    "Host the SVG and, if you have one, the certificate's PEM file at HTTPS addresses.",
    'Publish the record from this generator as a TXT record at default._bimi.yourdomain.',
  ],
  imageAlt: 'Illustration of verified email avatar alongside a square SVG brand logo grid.',
  recordTitle: 'What a BIMI record contains',
  thTag: 'Tag',
  thDoes: 'What it does',
  thExample: 'Example',
  tagMeanings: [
    'Version, always BIMI1',
    'HTTPS address of your SVG logo',
    'HTTPS address of your VMC or CMC certificate (a PEM file)',
  ],
  recordNote:
    "Google's own examples show two forms: a record with only l=, and one with l= left empty and a= pointing to the certificate, because the logo is embedded in the PEM file. If you have a certificate, follow what your certificate provider recommends; the generator can produce either form. A newer optional avp= tag tells providers whether the logo is a brand or a personal avatar, and most senders leave it out.",
  logoTitle: 'The logo rules the checker tests',
  logoPara:
    "BIMI logos use SVG Tiny PS, a cut-down version of SVG built for safe display in inboxes. The root element needs baseProfile set to tiny-ps and version set to 1.2, the image has to be square, and it needs a title element with your brand name. Scripts, embedded raster images, animation and links to outside files aren't allowed, and the file should stay under 32 KB. A regular SVG exported from a design tool usually breaks at least one of these rules, which is why it's worth checking before you apply for a certificate.",
  certTitle: 'VMC or CMC: which certificate you need',
  certPara:
    "Gmail shows BIMI logos only when the record points to a certificate. A VMC (Verified Mark Certificate) needs a registered trademark and adds Gmail's blue checkmark. A CMC (Common Mark Certificate) is for logos that aren't trademarked; Gmail shows the logo, but without the checkmark. Apple Mail accepts only a VMC. Some other providers, Yahoo and Fastmail among them, can show a logo from a record with no certificate at all. Certificates come from a short list of certificate authorities, and Google publishes the ones it accepts.",
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Does BIMI work with DMARC at p=none?',
      a: 'No. Google states that BIMI doesn’t support a DMARC policy of none. Your policy needs to be quarantine or reject.',
    },
    {
      q: 'Do I need a VMC for Gmail?',
      a: 'You need either a VMC or a CMC. A VMC needs a registered trademark and gets the blue checkmark; a CMC doesn’t need a trademark and shows the logo without it.',
    },
    {
      q: 'Why isn’t my BIMI logo showing?',
      a: 'The usual causes are DMARC still at p=none, mail that doesn’t pass DMARC, an SVG that isn’t valid Tiny PS, a missing or expired certificate, or an inbox that doesn’t support BIMI. Providers can also take a while to pick up a new record.',
    },
    {
      q: 'Does BIMI improve deliverability?',
      a: 'Not directly. BIMI only shows a logo on mail that already passes DMARC at enforcement. The work it takes to get there, getting SPF, DKIM and DMARC right, is what helps your mail arrive. See [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'What is default._bimi?',
      a: 'The DNS name where providers look for your BIMI record. default is the selector. You only need a different selector, plus a BIMI-Selector header in your mail, if you want different logos for different kinds of mail.',
    },
    {
      q: 'Is my logo uploaded anywhere?',
      a: 'No. The checker reads the file in your browser.',
    },
  ],
  ctaHeadline: 'Logo ready? Check your list too.',
  ctaSupporting: "BIMI only helps mail that reaches the inbox. Verify your list so it doesn't bounce. 1,000 free credits.",
  ctaButton: 'Get 1,000 free credits',
}

const de: BimiPageStrings = {
  metaTitle: 'BIMI-Record erstellen: Generator und SVG-Logo-Check | Giggal.ai',
  ogTitle: 'BIMI-Record erstellen: Generator und SVG-Logo-Check',
  description:
    'Erstellen Sie Ihren BIMI-Record und prüfen Sie Ihr SVG-Logo im Browser auf die Regeln von SVG Tiny PS. Sehen Sie, was Gmail und Apple Mail verlangen.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser BIMI-Record-Generator von Giggal.ai',
  crumb: 'BIMI-Record-Generator',
  appName: 'Kostenloser BIMI-Record-Generator und SVG-Logo-Check',
  featureList: [
    'BIMI-Records als TXT-Eintrag erstellen, mit eigenem Selector, Logo-URL und Zertifikats-URL',
    'SVG-Logos auf 11 strenge Vorgaben von SVG Tiny PS prüfen',
    'Interaktive Checkliste der BIMI-Voraussetzungen für Gmail und Apple Mail',
    'Zeile im Format der Zonendatei und Buttons zum Kopieren',
    'Läuft vollständig im Browser, ohne Upload und ohne Telemetrie',
  ],
  h1: 'BIMI-Record-Generator',
  heroIntro:
    'Erstellen Sie den BIMI-Record für Ihre Domain und prüfen Sie, ob Ihre Logo-Datei die Regeln erfüllt. Das geht schon, bevor Sie ein Zertifikat kaufen oder etwas veröffentlichen.',
  howTitle: 'So richten Sie BIMI ein',
  howSteps: [
    'Stellen Sie DMARC auf Durchsetzung um. Mit p=none funktioniert BIMI nicht. Ihre Richtlinie muss quarantine oder reject sein. Der [DMARC-Generator](/dmarc-generator) erstellt diesen Eintrag.',
    'Bereiten Sie Ihr Logo als Datei im Format SVG Tiny PS vor. Testen Sie die Datei mit dem Logo-Check oben.',
    'Entscheiden Sie sich für ein Zertifikat. Gmail zeigt BIMI-Logos nur mit einer VMC oder einer CMC, Apple Mail nur mit einer VMC.',
    'Legen Sie die SVG-Datei unter einer HTTPS-Adresse ab. Haben Sie ein Zertifikat, gilt das auch für seine PEM-Datei.',
    'Veröffentlichen Sie den BIMI-Record aus diesem Generator als TXT-Eintrag unter default._bimi.ihredomain.',
  ],
  imageAlt:
    'Illustration zu BIMI in E-Mails: ein bestätigter Absender-Avatar neben einem Raster aus quadratischen SVG-Markenlogos.',
  recordTitle: 'Was ein BIMI-Record enthält',
  thTag: 'Tag',
  thDoes: 'Funktion',
  thExample: 'Beispiel',
  tagMeanings: [
    'Version, immer BIMI1',
    'HTTPS-Adresse Ihres SVG-Logos',
    'HTTPS-Adresse Ihres VMC- oder CMC-Zertifikats (eine PEM-Datei)',
  ],
  recordNote:
    'Die Beispiele von Google zeigen zwei Formen des BIMI-Records. Die erste enthält nur l=. In der zweiten bleibt l= leer, und a= zeigt auf das Zertifikat, weil das Logo in der PEM-Datei steckt. Haben Sie ein Zertifikat, folgen Sie der Empfehlung Ihres Zertifikatsanbieters. Der Generator kann beide Formen erzeugen. Ein neueres, optionales Tag avp= sagt Anbietern, ob das Logo eine Marke oder ein persönlicher Avatar ist. Die meisten Absender lassen es weg.',
  logoTitle: 'Welche Regeln der Logo-Check prüft',
  logoPara:
    'BIMI-Logos nutzen SVG Tiny PS. Das ist eine eingeschränkte Form von SVG, gebaut für die sichere Anzeige in Postfächern. Im Wurzelelement muss baseProfile auf tiny-ps und version auf 1.2 stehen. Das Bild muss quadratisch sein und ein title-Element mit Ihrem Markennamen haben. Skripte, eingebettete Rastergrafiken, Animationen und Links zu externen Dateien sind nicht erlaubt. Die Datei sollte kleiner als 32 KB bleiben. Eine normale SVG-Datei aus einem Grafikprogramm verletzt meist mindestens eine dieser Regeln. Deshalb lohnt sich ein BIMI-Check der Datei, bevor Sie ein Zertifikat beantragen.',
  certTitle: 'VMC oder CMC: welches Zertifikat Sie brauchen',
  certPara:
    'Gmail zeigt BIMI-Logos nur, wenn der BIMI-Record auf ein Zertifikat verweist. Eine VMC (Verified Mark Certificate) setzt eine eingetragene Marke voraus und bringt in Gmail den blauen Haken. Eine CMC (Common Mark Certificate) ist für Logos ohne eingetragene Marke. Gmail zeigt das Logo dann an, aber ohne Haken. Apple Mail akzeptiert nur eine VMC. Einige andere Anbieter, darunter Yahoo und Fastmail, zeigen ein Logo auch dann, wenn der Record kein Zertifikat enthält. Zertifikate stellt nur eine kleine Zahl von Zertifizierungsstellen aus. Google veröffentlicht, welche davon es akzeptiert.',
  faqTitle: 'Häufige Fragen zum BIMI-Record',
  faqs: [
    {
      q: 'Funktioniert BIMI mit DMARC auf p=none?',
      a: 'Nein. Laut Google unterstützt BIMI keine DMARC-Richtlinie mit none. Ihre Richtlinie muss quarantine oder reject sein.',
    },
    {
      q: 'Brauche ich für Gmail eine VMC?',
      a: 'Sie brauchen eine VMC oder eine CMC. Eine VMC setzt eine eingetragene Marke voraus und bringt den blauen Haken. Eine CMC braucht keine Marke und zeigt das Logo ohne Haken.',
    },
    {
      q: 'Warum erscheint mein Logo trotz BIMI-Record nicht?',
      a: 'Meist steht DMARC noch auf p=none, oder Ihre E-Mails bestehen DMARC nicht. Weitere Ursachen sind ein SVG, das kein gültiges Tiny PS ist, ein fehlendes oder abgelaufenes Zertifikat oder ein Postfach, das BIMI nicht unterstützt. Außerdem brauchen Anbieter manchmal eine Weile, bis sie einen neuen Record erkennen.',
    },
    {
      q: 'Verbessert BIMI die Zustellbarkeit?',
      a: 'Nicht direkt. BIMI zeigt nur dann ein Logo, wenn eine E-Mail DMARC besteht und die Richtlinie quarantine oder reject ist. Was Ihrer Zustellung hilft, ist die Arbeit davor: SPF, DKIM und DMARC richtig einzurichten. Lesen Sie dazu [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'Was ist default._bimi?',
      a: 'Der DNS-Name, unter dem Anbieter Ihren BIMI-Record suchen. default ist der Selector. Einen anderen Selector brauchen Sie nur, wenn Sie für verschiedene Arten von E-Mails verschiedene Logos zeigen wollen. Ihre E-Mails brauchen dann zusätzlich einen BIMI-Selector-Header.',
    },
    {
      q: 'Wird mein Logo irgendwo hochgeladen?',
      a: 'Nein. Der Logo-Check liest die Datei in Ihrem Browser.',
    },
  ],
  ctaHeadline: 'Logo fertig? Prüfen Sie auch Ihre E-Mail-Liste',
}


const fr: BimiPageStrings = {
  metaTitle: 'Générateur d’enregistrement BIMI et vérificateur SVG | Giggal.ai',
  ogTitle: 'Générateur d’enregistrement BIMI et vérificateur de logo SVG',
  description:
    'Créez votre enregistrement BIMI et vérifiez votre logo SVG selon les règles Tiny PS. Découvrez les prérequis Gmail et Apple Mail pour afficher votre logo.',
  ogLocale: 'fr_FR',
  ogImage: '/og-card.png',
  ogAlt: 'Générateur d’enregistrement BIMI gratuit par Giggal.ai',
  crumb: 'Générateur BIMI',
  appName: 'Générateur d’enregistrement BIMI et vérificateur SVG',
  featureList: [
    'Création d’enregistrements TXT BIMI avec sélecteur, URL du logo et certificat',
    'Validation des logos SVG selon les 11 critères stricts SVG Tiny PS',
    'Liste de contrôle interactive de préparation BIMI pour Gmail et Apple Mail',
    'Génération de la ligne au format zone DNS et copie instantanée',
    'Exécution 100% dans votre navigateur sans téléversement ni télémétrie',
  ],
  h1: 'Générateur d’enregistrement BIMI',
  heroIntro:
    'Générez l’enregistrement BIMI pour votre domaine et vérifiez que votre logo respecte les normes SVG Tiny PS avant d’acheter un certificat ou de publier dans vos DNS.',
  howTitle: 'Comment configurer BIMI',
  howSteps: [
    'Appliquez une politique DMARC stricte. BIMI ne fonctionne pas avec p=none ; votre politique doit être quarantine ou reject. Le [générateur DMARC](/dmarc-generator) peut créer cet enregistrement.',
    'Préparez votre logo au format SVG Tiny PS et testez-le avec notre outil de vérification ci-dessus.',
    'Choisissez votre certificat. Gmail affiche les logos BIMI avec un VMC ou CMC, et Apple Mail uniquement avec un VMC.',
    'Hébergez le fichier SVG et, si disponible, le fichier PEM du certificat sur des adresses HTTPS publiques sécurisées.',
    'Publiez l’enregistrement généré sous forme d’enregistrement TXT à l’hôte default._bimi.votredomaine.',
  ],
  imageAlt: 'Illustration d’un avatar d’e-mail vérifié aux côtés d’un logo de marque vectoriel SVG carré.',
  recordTitle: 'Structure d’un enregistrement BIMI',
  thTag: 'Balise',
  thDoes: 'Description',
  thExample: 'Exemple',
  tagMeanings: [
    'Version du protocole, obligatoirement BIMI1',
    'Adresse HTTPS publique de votre logo vectoriel SVG',
    'Adresse HTTPS de votre certificat VMC ou CMC (fichier PEM)',
  ],
  recordNote:
    'Les exemples de Google présentent deux variantes : un enregistrement avec l= renseignant l’URL du logo, ou un enregistrement avec l= vide et a= pointant vers le certificat (le logo étant encapsulé dans le fichier PEM). Suivez les recommandations de votre autorité de certification. La balise optionnelle avp= permet d’indiquer s’il s’agit d’une marque ou d’un avatar personnel.',
  logoTitle: 'Règles vérifiées pour le logo SVG',
  logoPara:
    'Les logos BIMI doivent impérativement respecter le profil SVG Tiny PS, un sous-ensemble sécurisé conçu pour les messageries. L’élément racine doit comporter baseProfile="tiny-ps" et version="1.2", l’image doit avoir un ratio carré (1:1), et inclure un élément title avec le nom de votre marque. Les scripts, images matricielles incorporées, animations et références externes sont strictement interdits, et le fichier ne doit pas dépasser 32 Ko.',
  certTitle: 'Certificat VMC ou CMC : que choisir ?',
  certPara:
    'Gmail exige un certificat numérique pour afficher votre logo BIMI. Un certificat VMC (Verified Mark Certificate) nécessite une marque officiellement déposée et affiche la coche bleue de certification dans Gmail. Un certificat CMC (Common Mark Certificate) s’adresse aux marques sans dépôt officiel ; le logo s’affiche sans la coche bleue. Apple Mail exige exclusivement un VMC. Yahoo et Fastmail peuvent afficher votre logo sans aucun certificat.',
  faqTitle: 'Foire aux questions sur BIMI',
  faqs: [
    {
      q: 'BIMI fonctionne-t-il avec une politique DMARC à p=none ?',
      a: 'Non. Google et les principaux fournisseurs exigent formellement une politique d’application stricte (quarantine ou reject). Avec p=none, aucun logo BIMI n’apparaîtra.',
    },
    {
      q: 'Un certificat VMC est-il obligatoire pour Gmail ?',
      a: 'Vous devez posséder un VMC ou un CMC. Le VMC confère la coche bleue de vérification officielle en plus du logo, tandis que le CMC affiche uniquement le logo.',
    },
    {
      q: 'Pourquoi mon logo BIMI ne s’affiche-t-il pas ?',
      a: 'Les causes courantes sont : politique DMARC insuffisante (p=none), échec d’alignement SPF/DKIM, fichier SVG non conforme à Tiny PS, certificat manquant ou expiré, ou mise en cache DNS chez les fournisseurs.',
    },
    {
      q: 'BIMI améliore-t-il directement la délivrabilité ?',
      a: 'Pas directement. BIMI est la récompense d’une authentification parfaite. C’est l’alignement irréprochable de SPF, DKIM et DMARC qui protège votre délivrabilité. Consultez notre guide [comprendre SPF, DKIM et DMARC](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'À quoi correspond l’hôte default._bimi ?',
      a: 'Il s’agit de l’adresse DNS standard où les serveurs récepteurs recherchent votre enregistrement BIMI. default est le sélecteur standard.',
    },
    {
      q: 'Mon fichier logo est-il téléversé sur vos serveurs ?',
      a: 'Non. L’analyseur de logo s’exécute à 100% en local dans votre navigateur.',
    },
  ],
  ctaHeadline: 'Logo prêt ? Vérifiez la validité de votre liste d’e-mails.',
}

const es: BimiPageStrings = {
  metaTitle: 'Generador de registros BIMI y validador SVG | Giggal.ai',
  ogTitle: 'Generador de registros BIMI y validador de logos SVG',
  description:
    'Cree su registro BIMI y compruebe su logotipo SVG con las normas Tiny PS en su navegador. Conozca los requisitos de Gmail y Apple Mail para mostrar su logo.',
  ogLocale: 'es_ES',
  ogImage: '/og-card.png',
  ogAlt: 'Generador gratuito de registros BIMI de Giggal.ai',
  crumb: 'Generador BIMI',
  appName: 'Generador de registros BIMI y comprobador SVG',
  featureList: [
    'Creación de registros TXT BIMI con selector, URL del logo y certificado',
    'Validación de logos SVG conforme a las 11 reglas estrictas de SVG Tiny PS',
    'Lista de comprobación interactiva de requisitos BIMI para Gmail y Apple Mail',
    'Formato de línea para archivos de zona DNS con copia rápida',
    'Ejecución 100% en el navegador sin subida de archivos ni telemetría',
  ],
  h1: 'Generador de registros BIMI',
  heroIntro:
    'Genere el registro BIMI para su dominio y verifique que el archivo de su logotipo cumpla con las especificaciones antes de adquirir un certificado o publicarlo en DNS.',
  howTitle: 'Cómo configurar BIMI',
  howSteps: [
    'Establezca una política DMARC estricta. BIMI no funciona con p=none; su política debe ser quarantine o reject. El [generador DMARC](/dmarc-generator) le ayuda a configurarla.',
    'Prepare su logotipo en formato SVG Tiny PS y verifíquelo con la herramienta de comprobación superior.',
    'Determine el certificado necesario. Gmail requiere un VMC o CMC para mostrar el logo, y Apple Mail exige exclusivamente un VMC.',
    'Aloje el archivo SVG y el archivo PEM del certificado en direcciones web HTTPS públicas y seguras.',
    'Publique el registro TXT generado bajo el host default._bimi.sudominio en su panel DNS.',
  ],
  imageAlt: 'Ilustración de avatar verificado en correo junto a cuadrícula de logotipos vectoriales cuadrados.',
  recordTitle: 'Componentes de un registro BIMI',
  thTag: 'Etiqueta',
  thDoes: 'Función',
  thExample: 'Ejemplo',
  tagMeanings: [
    'Versión del protocolo, siempre BIMI1',
    'Dirección HTTPS de su logotipo vectorial SVG',
    'Dirección HTTPS de su certificado VMC o CMC (archivo PEM)',
  ],
  recordNote:
    'Google muestra dos modalidades de registro: una con l= indicando la URL del logo, y otra con l= vacío y a= apuntando al certificado, ya que el logo viene incrustado en el archivo PEM. Siga las instrucciones de su entidad emisora de certificados. La etiqueta opcional avp= define si el logo corresponde a una marca o avatar personal.',
  logoTitle: 'Reglas de formato para logotipos SVG',
  logoPara:
    'Los logotipos BIMI deben ajustarse a SVG Tiny PS, un estándar seguro diseñado para bandejas de entrada. El elemento raíz debe incluir baseProfile="tiny-ps" y version="1.2", la imagen debe ser estrictamente cuadrada (proporción 1:1) y contener un elemento title con el nombre de su marca. Se prohíben scripts, mapas de bits incrustados, animaciones y enlaces externos, y el tamaño debe ser inferior a 32 KB.',
  certTitle: 'Certificados VMC o CMC: ¿cuál necesita?',
  certPara:
    'Gmail exige un certificado verificado para desplegar logotipos BIMI. Un certificado VMC (Verified Mark Certificate) requiere una marca registrada oficial y añade la insignia de verificación azul en Gmail. Un certificado CMC (Common Mark Certificate) permite mostrar el logo sin marca registrada, pero sin insignia azul. Apple Mail únicamente admite VMC. Otros proveedores como Yahoo y Fastmail pueden mostrar el logo sin certificado.',
  faqTitle: 'Preguntas frecuentes sobre BIMI',
  faqs: [
    {
      q: '¿Funciona BIMI si DMARC está configurado en p=none?',
      a: 'No. Google y los proveedores de correo exigen que DMARC esté en cumplimiento efectivo (quarantine o reject). Con p=none, el logotipo no se visualizará.',
    },
    {
      q: '¿Es obligatorio un certificado VMC para Gmail?',
      a: 'Requiere un VMC o un CMC. El VMC acredita su marca registrada y proporciona la insignia azul de verificación, mientras que el CMC muestra el logo sin insignia.',
    },
    {
      q: '¿Por qué no se visualiza mi logotipo BIMI?',
      a: 'Las razones habituales son una política DMARC insuficiente, envíos que no superan la alineación SPF/DKIM, un archivo SVG que no cumple las reglas Tiny PS o certificados caducados.',
    },
    {
      q: '¿BIMI mejora la entregabilidad de mis correos?',
      a: 'Indirectamente. BIMI certifica que sus correos ya superan estrictamente DMARC. Configurar correctamente SPF, DKIM y DMARC es lo que garantiza la entrega en bandeja de entrada. Vea nuestra guía [SPF, DKIM y DMARC explicados](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: '¿Qué es el host default._bimi?',
      a: 'Es el nombre de registro DNS donde los servidores buscan la configuración BIMI. default representa el selector predeterminado.',
    },
    {
      q: '¿Se almacena o sube mi logotipo a algún servidor?',
      a: 'No. La validación se realiza íntegramente de forma local en su propio navegador.',
    },
  ],
  ctaHeadline: '¿Logotipo listo? Compruebe también su lista de contactos.',
}

const it: BimiPageStrings = {
  metaTitle: 'Generatore record BIMI e verifica logo SVG | Giggal.ai',
  ogTitle: 'Generatore record BIMI e verifica logo SVG',
  description:
    'Crea il tuo record BIMI e verifica il tuo logo SVG rispetto alle regole Tiny PS nel browser. Scopri i requisiti di Gmail e Apple Mail per mostrare il logo.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Generatore record BIMI gratuito di Giggal.ai',
  crumb: 'Generatore BIMI',
  appName: 'Generatore record BIMI e verifica logo SVG',
  featureList: [
    'Creazione di record TXT BIMI con selettore personalizzato, URL logo e certificato',
    'Verifica dei loghi SVG in base a 11 rigidi requisiti dello standard SVG Tiny PS',
    'Checklist interattiva dei requisiti BIMI per il supporto di Gmail e Apple Mail',
    'Generazione del formato per file di zona DNS con pulsanti di copia rapida',
    'Funzionamento al 100% nel browser senza caricamento di file né telemetria',
  ],
  h1: 'Generatore record BIMI',
  heroIntro:
    'Crea il record BIMI per il tuo dominio e verifica che il logo rispetti tutti i requisiti SVG Tiny PS prima di acquistare un certificato o pubblicare le modifiche DNS.',
  howTitle: 'Come configurare BIMI',
  howSteps: [
    'Imposta una policy DMARC restrittiva. BIMI non funziona con p=none; la policy deve essere quarantine o reject. Usa il nostro [generatore DMARC](/dmarc-generator).',
    'Prepara il tuo logo in formato SVG Tiny PS e testalo con il nostro verificatore in alto.',
    'Scegli il certificato appropriato. Gmail richiede un certificato VMC o CMC per mostrare il logo, mentre Apple Mail accetta solo VMC.',
    'Carica il file SVG e il certificato PEM su indirizzi web HTTPS pubblici e sicuri.',
    'Pubblica il record TXT generato all’indirizzo host default._bimi.tuodominio.',
  ],
  imageAlt: 'Illustrazione di avatar email certificato accanto a loghi aziendali vettoriali quadrati.',
  recordTitle: 'Cosa contiene un record BIMI',
  thTag: 'Tag',
  thDoes: 'Funzione',
  thExample: 'Esempio',
  tagMeanings: [
    'Versione del protocollo, sempre BIMI1',
    'Indirizzo HTTPS del tuo logo vettoriale SVG',
    'Indirizzo HTTPS del tuo certificato VMC o CMC (file PEM)',
  ],
  recordNote:
    'Google illustra due modalità di configurazione: una con l= indicante l’URL del logo, e una con l= vuoto e a= che punta al certificato (poiché il logo è già incorporato nel file PEM). Segui le istruzioni fornite dall’autorità di certificazione.',
  logoTitle: 'Regole verificate per il logo SVG',
  logoPara:
    'I loghi BIMI devono adottare il profilo SVG Tiny PS, una versione sicura creata per i client di posta. L’elemento radice deve specificare baseProfile="tiny-ps" e version="1.2", l’immagine deve essere quadrata (1:1) e contenere un elemento title con il nome del marchio. Script, immagini raster incorporate, animazioni e riferimenti esterni sono vietati, e la dimensione massima consentita è 32 KB.',
  certTitle: 'Certificato VMC o CMC: quale scegliere?',
  certPara:
    'Gmail richiede un certificato digitale per mostrare il logo BIMI. Un certificato VMC (Verified Mark Certificate) richiede un marchio registrato e aggiunge la spunta blu di verifica in Gmail. Un certificato CMC (Common Mark Certificate) è per loghi senza marchio registrato; il logo viene mostrato senza la spunta blu. Apple Mail supporta solo certificati VMC. Yahoo e Fastmail possono mostrare il logo anche senza certificato.',
  faqTitle: 'Domande frequenti su BIMI',
  faqs: [
    {
      q: 'BIMI funziona se la policy DMARC è impostata su p=none?',
      a: 'No. Google e gli altri provider richiedono una policy DMARC di applicazione attiva (quarantine o reject). Con p=none il logo non verrà mostrato.',
    },
    {
      q: 'È obbligatorio un certificato VMC per Gmail?',
      a: 'È necessario un certificato VMC o CMC. Il VMC richiede un marchio registrato e garantisce la spunta blu, mentre il CMC visualizza il logo senza la spunta.',
    },
    {
      q: 'Perché il mio logo BIMI non compare nella posta?',
      a: 'Le cause frequenti sono DMARC ancora su p=none, mancato allineamento SPF/DKIM, logo SVG non conforme a Tiny PS o certificato non valido o scaduto.',
    },
    {
      q: 'BIMI migliora la recapitabilità delle email?',
      a: 'Non direttamente. BIMI premia i domini che già superano DMARC. È l’impostazione corretta di SPF, DKIM e DMARC che assicura l’arrivo nella posta in arrivo. Consulta la nostra guida su [SPF, DKIM e DMARC spiegati](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'Cos’è default._bimi?',
      a: 'È l’host DNS in cui i client cercano il record BIMI. default indica il selettore predefinito per il dominio.',
    },
    {
      q: 'Il mio logo viene memorizzato sui vostri server?',
      a: 'No. La verifica del file SVG avviene interamente in locale nel tuo browser.',
    },
  ],
  ctaHeadline: 'Logo verificato? Controlla anche la tua lista contatti.',
}

const ptBr: BimiPageStrings = {
  metaTitle: 'Gerador de registro BIMI e validador de logo SVG | Giggal.ai',
  ogTitle: 'Gerador de registro BIMI e validador de logo SVG',
  description:
    'Crie seu registro BIMI e valide seu logotipo SVG nas regras Tiny PS direto no navegador. Conheça as exigências do Gmail e Apple Mail para exibir seu logo.',
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Gerador gratuito de registro BIMI da Giggal.ai',
  crumb: 'Gerador BIMI',
  appName: 'Gerador de registro BIMI e validador SVG',
  featureList: [
    'Geração de registros TXT BIMI com seletor, URL do logo e certificado',
    'Validação de logotipos SVG conforme as 11 diretrizes rigorosas do SVG Tiny PS',
    'Lista de checagem interativa de conformidade BIMI para Gmail e Apple Mail',
    'Formatação compatível com arquivo de zona DNS e cópia em um clique',
    'Execução 100% no navegador sem envio de arquivos para servidores',
  ],
  h1: 'Gerador de registro BIMI',
  heroIntro:
    'Gere o registro BIMI para o seu domínio e confira se o arquivo do seu logotipo atende a todas as exigências antes de investir em um certificado ou editar seu DNS.',
  howTitle: 'Como configurar o BIMI',
  howSteps: [
    'Aplique uma política rigorosa no DMARC. O BIMI não funciona com p=none; sua política deve ser quarantine ou reject. Use o [gerador de DMARC](/dmarc-generator).',
    'Prepare seu logotipo no formato SVG Tiny PS e valide-o com nossa ferramenta acima.',
    'Escolha o certificado necessário. O Gmail exige certificado VMC ou CMC para exibir logotipos, e o Apple Mail exige exclusivamente VMC.',
    'Hospede o arquivo SVG e o certificado PEM em endereços HTTPS públicos e seguros.',
    'Crie um registro TXT com os valores gerados no host default._bimi.seudominio.',
  ],
  imageAlt: 'Ilustração de avatar verificado em mensagem de e-mail ao lado de grade de logotipos vetoriais.',
  recordTitle: 'O que contém um registro BIMI',
  thTag: 'Tag',
  thDoes: 'Função',
  thExample: 'Exemplo',
  tagMeanings: [
    'Versão do protocolo, obrigatoriamente BIMI1',
    'Endereço HTTPS do seu logotipo vetorial SVG',
    'Endereço HTTPS do seu certificado VMC ou CMC (arquivo PEM)',
  ],
  recordNote:
    'O Google aceita duas configurações: uma com a tag l= indicando o link do logo, e outra com l= vazio e a tag a= apontando para o certificado PEM (já que o logo vem incorporado nele). Siga a recomendação da sua autoridade certificadora.',
  logoTitle: 'Regras validadas para o logo SVG',
  logoPara:
    'Os logotipos BIMI exigem o formato SVG Tiny PS, uma versão reduzida e segura para caixas de entrada. O elemento raiz deve ter baseProfile="tiny-ps" e version="1.2", a imagem deve ser perfeitamente quadrada (proporção 1:1) e incluir um elemento title com o nome da sua marca. Códigos script, imagens rasterizadas incorporadas, animações e links externos são proibidos, e o arquivo não deve exceder 32 KB.',
  certTitle: 'Certificados VMC ou CMC: qual escolher?',
  certPara:
    'O Gmail exige um certificado digital para exibir logotipos BIMI. O certificado VMC (Verified Mark Certificate) exige registro oficial de marca e adiciona o selo azul de verificação no Gmail. O certificado CMC (Common Mark Certificate) atende marcas sem registro formal; o logo é exibido, mas sem o selo azul. O Apple Mail aceita unicamente VMC. Outros serviços como Yahoo e Fastmail podem exibir o logo sem certificado.',
  faqTitle: 'Perguntas frequentes sobre BIMI',
  faqs: [
    {
      q: 'O BIMI funciona com DMARC configurado em p=none?',
      a: 'Não. O Google e demais provedores exigem uma política ativa de proteção (quarantine ou reject). Com p=none, o logotipo não será renderizado.',
    },
    {
      q: 'Preciso de um certificado VMC para o Gmail?',
      a: 'Você precisa de um VMC ou de um CMC. O VMC exige marca registrada e garante o selo azul; o CMC exibe o logo sem a necessidade de registro de marca.',
    },
    {
      q: 'Por que o logotipo BIMI não aparece na caixa de entrada?',
      a: 'As causas mais comuns incluem DMARC ainda em p=none, falhas de alinhamento SPF/DKIM, arquivo SVG fora do padrão Tiny PS ou certificados expirados.',
    },
    {
      q: 'O BIMI melhora a entregabilidade dos meus e-mails?',
      a: 'Indiretamente. O BIMI é o benefício visual para quem já possui autenticação perfeita. Configurar corretamente SPF, DKIM e DMARC é o que assegura a entrega. Saiba mais em [guia completo de SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'O que significa o seletor default._bimi?',
      a: 'É o local no DNS onde os provedores de e-mail consultam as instruções BIMI. default é o seletor padrão da especificação.',
    },
    {
      q: 'Meu arquivo de logotipo é enviado para seus servidores?',
      a: 'Não. Toda a validação gráfica do SVG ocorre de maneira 100% local no seu próprio navegador.',
    },
  ],
  ctaHeadline: 'Logotipo pronto? Valide também a sua lista de e-mails.',
}

const nl: BimiPageStrings = {
  metaTitle: 'BIMI-record generator en SVG-logo checker | Giggal.ai',
  ogTitle: 'Gratis BIMI-record generator en SVG-logo checker',
  description:
    'Genereer uw BIMI-record en controleer uw SVG-logo volgens de Tiny PS-richtlijnen in uw browser. Bekijk wat Gmail en Apple Mail vereisen voor weergave.',
  ogLocale: 'nl_NL',
  ogImage: '/og-card.png',
  ogAlt: 'Gratis BIMI-record generator van Giggal.ai',
  crumb: 'BIMI Generator',
  appName: 'BIMI-record generator en SVG-logo checker',
  featureList: [
    'Genereer BIMI TXT-records met selector, logo-URL en certificaat-URL',
    'Valideer SVG-logo’s aan de hand van 11 strikte SVG Tiny PS-specificaties',
    'Interactieve BIMI-checklist voor compatibiliteit met Gmail en Apple Mail',
    'Generatie van zone-bestand regels met snelle kopieerknoppen',
    'Draait 100% in uw browser zonder bestanden te uploaden of data te verzamelen',
  ],
  h1: 'BIMI-record generator',
  heroIntro:
    'Genereer het officiële BIMI-record voor uw domein en controleer of uw logo-bestand aan alle eisen voldoet, nog voordat u een certificaat aanschaft of DNS aanpast.',
  howTitle: 'Hoe stelt u BIMI in',
  howSteps: [
    'Zorg voor een actieve DMARC-handhaving. BIMI werkt niet bij p=none; uw beleid moet quarantine of reject zijn. Onze [DMARC generator](/dmarc-generator) helpt hierbij.',
    'Maak uw logo gereed in het formaat SVG Tiny PS en test het bestand via de checker hierboven.',
    'Kies het gewenste certificaat. Gmail vereist een VMC of CMC om logo’s te tonen; Apple Mail accepteert uitsluitend een VMC.',
    'Plaats het SVG-bestand en het PEM-certificaatbestand op beveiligde, openbare HTTPS-adressen.',
    'Publiceer het gegenereerde TXT-record onder default._bimi.uwdomein in uw DNS-beheer.',
  ],
  imageAlt: 'Illustratie van geverifieerde e-mailavatar naast vierkante vectorlogo’s.',
  recordTitle: 'Opbouw van een BIMI-record',
  thTag: 'Tag',
  thDoes: 'Functie',
  thExample: 'Voorbeeld',
  tagMeanings: [
    'Protocolversie, altijd BIMI1',
    'HTTPS-adres van uw SVG-vectorlogo',
    'HTTPS-adres van uw VMC- of CMC-certificaat (PEM-bestand)',
  ],
  recordNote:
    'Google toont twee geldige varianten: een record met l= voor de logo-URL, en een record met l= leeg en a= verwijzend naar het certificaat waarin het logo is ingesloten. Volg het advies van uw certificaatuitgever. De optionele tag avp= geeft aan of het logo een merk of persoonlijk profiel betreft.',
  logoTitle: 'Regels waarop het SVG-logo wordt gecontroleerd',
  logoPara:
    'BIMI-logo’s moeten voldoen aan het SVG Tiny PS-profiel, een veilige subset van SVG voor e-mailclients. Het hoofdelement moet baseProfile="tiny-ps" en version="1.2" bevatten, de afbeelding moet zuiver vierkant zijn (verhouding 1:1) en een title-element met uw merknaam bevatten. Scripts, ingesloten rasterafbeeldingen, animaties en externe links zijn strikt verboden, en de bestandsgrootte mag maximaal 32 KB zijn.',
  certTitle: 'VMC of CMC: welk certificaat heeft u nodig?',
  certPara:
    'Gmail toont BIMI-logo’s alleen als het record naar een geldig certificaat verwijst. Een VMC (Verified Mark Certificate) vereist een officieel geregistreerd handelsmerk en voegt het blauwe verificatievinkje toe in Gmail. Een CMC (Common Mark Certificate) is bedoeld voor niet-geregistreerde logo’s; Gmail toont het logo zonder vinkje. Apple Mail accepteert alleen een VMC. Providers zoals Yahoo en Fastmail tonen logo’s desgewenst zonder certificaat.',
  faqTitle: 'Veelgestelde vragen over BIMI',
  faqs: [
    {
      q: 'Werkt BIMI als DMARC op p=none staat?',
      a: 'Nee. Google en andere mailproviders vereisen een actief handhavend beleid (quarantine of reject). Bij p=none wordt uw logo niet weergegeven.',
    },
    {
      q: 'Is een VMC-certificaat verplicht voor Gmail?',
      a: 'U heeft een VMC of een CMC nodig. Een VMC vereist een geregistreerd merk en levert het blauwe vinkje op; een CMC toont het logo zonder verificatievinkje.',
    },
    {
      q: 'Waarom verschijnt mijn BIMI-logo niet in de inbox?',
      a: 'Veelvoorkomende oorzaken zijn DMARC op p=none, e-mails die de SPF/DKIM-afstemming niet halen, een SVG-bestand dat niet voldoet aan Tiny PS of een verlopen certificaat.',
    },
    {
      q: 'Verbetert BIMI direct de bezorgbaarheid van mijn e-mail?',
      a: 'Niet rechtstreeks. BIMI is een visuele bevestiging voor e-mail die al volledig aan DMARC voldoet. Een correcte inrichting van SPF, DKIM en DMARC zorgt voor de inboxbezorging. Lees onze gids [uitleg over SPF, DKIM en DMARC](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'Wat betekent default._bimi?',
      a: 'Dit is de DNS-hostnaam waar e-mailservers naar uw BIMI-record zoeken. default is de standaard selector.',
    },
    {
      q: 'Wordt mijn logo geüpload naar jullie servers?',
      a: 'Nee. De logo-controle wordt 100% lokaal in uw eigen browser uitgevoerd.',
    },
  ],
  ctaHeadline: 'Logo klaar? Controleer ook direct uw e-maillijst.',
}

const pl: BimiPageStrings = {
  metaTitle: 'Generator rekordów BIMI i weryfikator logo SVG | Giggal.ai',
  ogTitle: 'Darmowy generator rekordów BIMI i walidator logo SVG',
  description:
    'Wygeneruj rekord BIMI i sprawdź logo SVG pod kątem standardu Tiny PS w przeglądarce. Zobacz wymagania Gmaila i Apple Mail dotyczące wyświetlania logo.',
  ogLocale: 'pl_PL',
  ogImage: '/og-card.png',
  ogAlt: 'Darmowy generator rekordów BIMI od Giggal.ai',
  crumb: 'Generator BIMI',
  appName: 'Generator rekordów BIMI i weryfikator SVG',
  featureList: [
    'Tworzenie rekordów TXT BIMI z selektorem, adresem logo i certyfikatem',
    'Walidacja plików SVG pod kątem 11 rygorystycznych reguł profilu SVG Tiny PS',
    'Interaktywna lista kontrolna gotowości BIMI dla Gmaila i Apple Mail',
    'Generowanie gotowego wpisu strefy DNS z opcją szybkiego kopiowania',
    'Działanie w 100% lokalnie w przeglądarce bez przesyłania plików na serwer',
  ],
  h1: 'Generator rekordów BIMI',
  heroIntro:
    'Utwórz poprawny rekord BIMI dla swojej domeny i upewnij się, że plik logo spełnia wszystkie wymogi, zanim zamówisz certyfikat lub wprowadzisz zmiany w DNS.',
  howTitle: 'Jak skonfigurować BIMI',
  howSteps: [
    'Wprowadź restrykcyjną politykę DMARC. BIMI nie działa przy p=none; polityka musi mieć wartość quarantine lub reject. Użyj naszego [generatora DMARC](/dmarc-generator).',
    'Przygotuj logo w standardzie SVG Tiny PS i przetestuj je w powyższym walidatorze.',
    'Wybierz odpowiedni certyfikat. Gmail wymaga certyfikatu VMC lub CMC, a Apple Mail akceptuje wyłącznie VMC.',
    'Umieść plik SVG oraz plik certyfikatu PEM pod publicznymi, bezpiecznymi adresami HTTPS.',
    'Opublikuj wygenerowany rekord TXT jako default._bimi.twojadomena w konfiguracji DNS.',
  ],
  imageAlt: 'Ilustracja zweryfikowanego awatara pocztowego obok wektorowych logo marek.',
  recordTitle: 'Co zawiera rekord BIMI',
  thTag: 'Tag',
  thDoes: 'Znaczenie',
  thExample: 'Przykład',
  tagMeanings: [
    'Wersja protokołu, zawsze BIMI1',
    'Adres HTTPS wektorowego pliku logo w formacie SVG',
    'Adres HTTPS certyfikatu VMC lub CMC (plik w formacie PEM)',
  ],
  recordNote:
    'Google prezentuje dwa prawidłowe schematy rekordu: z tagiem l= wskazującym plik SVG lub z pustym l= i tagiem a= wskazującym certyfikat PEM, w którym logo jest zagnieżdżone. Zastosuj wytyczne wystawcy Twojego certyfikatu.',
  logoTitle: 'Zasady weryfikacji logo SVG',
  logoPara:
    'Logotypy BIMI muszą być zgodne z profilem SVG Tiny PS – bezpiecznym wariantem wektorowym dla programów pocztowych. Główny znacznik musi definiować baseProfile="tiny-ps" oraz version="1.2", grafika musi być idealnie kwadratowa (proporcje 1:1) i zawierać element title z nazwą marki. Skrypty, osadzone obrazy rastrowe, animacje i linki zewnętrzne są niedozwolone, a waga pliku nie może przekraczać 32 KB.',
  certTitle: 'Certyfikat VMC czy CMC: który wybrać?',
  certPara:
    'Gmail wymaga certyfikatu, aby wyświetlać logo BIMI. Certyfikat VMC (Verified Mark Certificate) wymaga zarejestrowanego znaku towarowego i dodaje niebieski znaczek weryfikacji w Gmailu. Certyfikat CMC (Common Mark Certificate) jest dla firm bez zastrzeżonego znaku – logo wyświetla się bez niebieskiego znaczka. Apple Mail akceptuje wyłącznie certyfikaty VMC. Yahoo i Fastmail potrafią wyświetlać logo również bez certyfikatu.',
  faqTitle: 'Często zadawane pytania o BIMI',
  faqs: [
    {
      q: 'Czy BIMI działa przy polityce DMARC p=none?',
      a: 'Nie. Google i inni dostawcy bezwzględnie wymagają aktywnej polityki ochrony (quarantine lub reject). Przy p=none logo nie pojawi się w skrzynce.',
    },
    {
      q: 'Czy do wyświetlania logo w Gmailu potrzebuję certyfikatu VMC?',
      a: 'Wymagany jest certyfikat VMC lub CMC. VMC wymaga zastrzeżonego znaku towarowego i daje niebieski znaczek; CMC prezentuje logo bez znaczka.',
    },
    {
      q: 'Dlaczego moje logo BIMI się nie wyświetla?',
      a: 'Najczęstsze powody to DMARC ustawione na p=none, brak pełnej zgodności SPF/DKIM, błędy w strukturze SVG Tiny PS lub wygasły certyfikat.',
    },
    {
      q: 'Czy BIMI bezpośrednio poprawia dostarczalność wiadomości?',
      a: 'Pośrednio. BIMI to nagroda za nienaganne wdrożenie DMARC. To właściwa konfiguracja SPF, DKIM i DMARC gwarantuje trafianie do folderu odebrane. Zobacz nasz poradnik [SPF, DKIM i DMARC w praktyce](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'Czym jest nazwa default._bimi?',
      a: 'To adres rekordu w DNS, pod którym serwery pocztowe szukają instrukcji BIMI. default to domyślny selektor.',
    },
    {
      q: 'Czy mój plik graficzny jest wysyłany na Wasze serwery?',
      a: 'Nie. Cała analiza pliku SVG wykonywana jest lokalnie w Twojej przeglądarce.',
    },
  ],
  ctaHeadline: 'Logo gotowe? Sprawdź jakość swojej bazy adresowej.',
}

const id: BimiPageStrings = {
  metaTitle: 'Generator Catatan BIMI dan Validator Logo SVG | Giggal.ai',
  ogTitle: 'Generator Catatan BIMI Gratis dan Pemeriksa Logo SVG',
  description:
    'Buat catatan BIMI dan validasi logo SVG Anda sesuai aturan Tiny PS di peramban. Pelajari syarat Gmail dan Apple Mail agar logo brand Anda tampil di kotak masuk.',
  ogLocale: 'id_ID',
  ogImage: '/og-card.png',
  ogAlt: 'Generator Catatan BIMI Gratis oleh Giggal.ai',
  crumb: 'Generator BIMI',
  appName: 'Generator Catatan BIMI dan Validator SVG',
  featureList: [
    'Pembuatan catatan TXT BIMI dengan selector, URL logo, dan sertifikat',
    'Validasi logo SVG terhadap 11 standar ketat spesifikasi SVG Tiny PS',
    'Daftar periksa interaktif kesiapan BIMI untuk dukungan Gmail dan Apple Mail',
    'Format baris zone file DNS lengkap dengan tombol salin instan',
    'Berjalan 100% di browser tanpa unggah file maupun pelacakan',
  ],
  h1: 'Generator Catatan BIMI',
  heroIntro:
    'Susun catatan BIMI resmi untuk domain Anda dan pastikan file logo memenuhi seluruh standar SVG Tiny PS sebelum membeli sertifikat atau memperbarui DNS.',
  howTitle: 'Cara Mengonfigurasi BIMI',
  howSteps: [
    'Terapkan kebijakan DMARC yang ketat. BIMI tidak berfungsi pada p=none; kebijakan wajib quarantine atau reject. Gunakan [generator DMARC](/dmarc-generator).',
    'Siapkan file logo Anda dalam format SVG Tiny PS dan uji dengan validator di atas.',
    'Tentukan kebutuhan sertifikat. Gmail mewajibkan sertifikat VMC atau CMC, sementara Apple Mail hanya mendukung VMC.',
    'Simpan file SVG dan file sertifikat PEM pada URL HTTPS publik yang aman.',
    'Publikasikan catatan TXT hasil generator pada host default._bimi.domainanda di panel DNS.',
  ],
  imageAlt: 'Ilustrasi avatar email terverifikasi berdampingan dengan logo brand vektor persegi.',
  recordTitle: 'Komponen dalam Catatan BIMI',
  thTag: 'Tag',
  thDoes: 'Fungsi',
  thExample: 'Contoh',
  tagMeanings: [
    'Versi protokol, selalu bernilai BIMI1',
    'Alamat HTTPS file logo vektor SVG Anda',
    'Alamat HTTPS sertifikat VMC atau CMC Anda (file PEM)',
  ],
  recordNote:
    'Google menampilkan dua opsi pencatatan: catatan dengan tag l= menyertakan URL logo, atau catatan dengan l= kosong dan tag a= mengarah ke sertifikat PEM (karena logo sudah tersemat di dalamnya). Ikuti panduan penerbit sertifikat Anda.',
  logoTitle: 'Standar Logo SVG yang Diuji',
  logoPara:
    'Logo BIMI wajib mengikuti standar SVG Tiny PS, format vektor aman yang dirancang khusus untuk kotak masuk email. Elemen root harus memiliki atribut baseProfile="tiny-ps" dan version="1.2", dimensi persegi seimbang (rasio 1:1), serta elemen title berisi nama brand Anda. Kode script, gambar bitmap raster, animasi, dan tautan eksternal dilarang keras, dengan ukuran file maksimal 32 KB.',
  certTitle: 'Sertifikat VMC vs CMC: Mana yang Anda Butuhkan?',
  certPara:
    'Gmail mewajibkan sertifikat digital agar logo BIMI dapat tampil. Sertifikat VMC (Verified Mark Certificate) memerlukan merek dagang terdaftar resmi dan memberikan tanda centang biru verifikasi di Gmail. Sertifikat CMC (Common Mark Certificate) berlaku untuk logo tanpa merek dagang; logo tetap tampil namun tanpa centang biru. Apple Mail hanya menerima VMC. Provider lain seperti Yahoo dan Fastmail dapat menampilkan logo tanpa sertifikat.',
  faqTitle: 'Pertanyaan Umum Seputar BIMI',
  faqs: [
    {
      q: 'Apakah BIMI berfungsi jika DMARC berada pada kebijakan p=none?',
      a: 'Tidak. Google dan penyedia email lainnya mewajibkan kebijakan penegakan aktif (quarantine atau reject). Pada p=none, logo tidak akan pernah ditampilkan.',
    },
    {
      q: 'Apakah sertifikat VMC wajib untuk Gmail?',
      a: 'Anda memerlukan sertifikat VMC atau CMC. VMC membutuhkan merek dagang resmi dan memberikan centang biru; CMC menampilkan logo tanpa tanda centang.',
    },
    {
      q: 'Mengapa logo BIMI saya belum muncul di email penerima?',
      a: 'Penyebab umum meliputi kebijakan DMARC yang masih p=none, email gagal dalam penyelarasan SPF/DKIM, logo SVG tidak valid menurut Tiny PS, atau sertifikat kedaluwarsa.',
    },
    {
      q: 'Apakah BIMI langsung meningkatkan keterkiriman email (deliverability)?',
      a: 'Secara tidak langsung. BIMI merupakan verifikasi visual bagi pengirim yang telah mengamankan DMARC dengan sempurna. Pengaturan SPF, DKIM, dan DMARC yang benar adalah kunci utama email masuk ke inbox. Pelajari [panduan SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained).',
    },
    {
      q: 'Apa fungsi dari host default._bimi?',
      a: 'Ini adalah lokasi nama DNS tempat server email penerima mencari catatan BIMI domain Anda. default adalah nama selector standar.',
    },
    {
      q: 'Apakah file logo saya diunggah ke server Anda?',
      a: 'Tidak. Pemeriksaan logo dilakukan sepenuhnya secara lokal di dalam peramban Anda.',
    },
  ],
  ctaHeadline: 'Logo siap? Periksa dan bersihkan juga daftar email Anda.',
}

const ja: BimiPageStrings = {
  metaTitle: 'BIMIレコード生成ツールとSVGロゴチェック（無料） | Giggal.ai',
  ogTitle: 'BIMIレコード生成ツールとSVGロゴチェック（無料）',
  description:
    'BIMIレコードを生成し、SVGロゴがTiny PSのルールに合っているかをブラウザ上で確認できます。Gmail、Apple Mailなどでロゴを表示するための条件もわかります。無料です。',
  ogLocale: 'ja_JP',
  ogImage: '/og-card.png',
  ogAlt: 'Giggal.aiの無料BIMIレコード生成ツール',
  crumb: 'BIMIレコード生成',
  appName: 'BIMIレコード生成ツールとSVGロゴチェック',
  featureList: [
    'セレクター、ロゴURL、証明書URLを指定してBIMIのTXTレコードを生成',
    'SVGロゴをSVG Tiny PSの11項目の厳格な仕様で検証',
    'GmailとApple Mailに対応するためのBIMI準備チェックリスト',
    'ゾーンファイル形式の行の生成とコピー機能',
    '処理は100%ブラウザ内で完結し、アップロードやトラッキングはありません',
  ],
  h1: 'BIMIレコード生成ツール',
  heroIntro:
    '証明書の購入やDNSへの公開の前に、ドメインのBIMIレコードを生成し、ロゴファイルがルールを満たしているかを確認できます。',
  howTitle: 'BIMIの設定手順',
  howSteps: [
    'DMARCを強制ポリシーにします。BIMIはp=noneでは機能しません。ポリシーはquarantineまたはrejectにする必要があります。このレコードは[DMARCレコード生成ツール](/dmarc-generator)で作成できます。',
    'ロゴをSVG Tiny PS形式のファイルとして用意し、上のロゴチェックで確認します。',
    '証明書を決めます。GmailはVMCまたはCMCがある場合にのみBIMIロゴを表示し、Apple MailはVMCがある場合にのみ表示します。',
    'SVGファイルと、証明書がある場合はそのPEMファイルを、HTTPSのアドレスで公開します。',
    'この生成ツールで作成したレコードを、default._bimi.yourdomain にTXTレコードとして公開します。',
  ],
  imageAlt: '認証済みのメールアバターと、正方形のSVGブランドロゴが並ぶイラスト。',
  recordTitle: 'BIMIレコードに含まれる内容',
  thTag: 'タグ',
  thDoes: '役割',
  thExample: '例',
  tagMeanings: [
    'バージョン。常にBIMI1です',
    'SVGロゴのHTTPSアドレス',
    'VMCまたはCMC証明書（PEMファイル）のHTTPSアドレス',
  ],
  recordNote:
    'Google自身の例では2つの形式が示されています。l=だけを含むレコードと、ロゴがPEMファイルに埋め込まれているためl=を空にしてa=で証明書を指定するレコードです。証明書がある場合は、証明書の発行元が推奨する形式に従ってください。この生成ツールはどちらの形式も作成できます。新しい任意のavp=タグは、ロゴがブランドのものか個人のアバターかをメールプロバイダーに伝えるものですが、多くの送信者は指定していません。',
  logoTitle: 'ロゴチェックで確認するルール',
  logoPara:
    'BIMIロゴにはSVG Tiny PSを使います。これは受信トレイで安全に表示するために機能を絞ったSVGです。ルート要素ではbaseProfileをtiny-ps、versionを1.2にする必要があります。画像は正方形で、ブランド名を入れたtitle要素も必要です。スクリプト、埋め込みのラスター画像、アニメーション、外部ファイルへのリンクは使えません。ファイルサイズは32 KB未満にしてください。デザインツールから書き出した通常のSVGは、たいていこのうち1つ以上のルールに違反します。そのため、証明書を申請する前に確認しておく価値があります。',
  certTitle: 'VMCとCMC：必要な証明書の選び方',
  certPara:
    'Gmailは、レコードが証明書を指している場合にのみBIMIロゴを表示します。VMC（Verified Mark Certificate）には登録商標が必要で、Gmailの青いチェックマークも表示されます。CMC（Common Mark Certificate）は商標登録されていないロゴ向けです。Gmailにロゴは表示されますが、チェックマークは付きません。Apple MailはVMCのみに対応しています。YahooやFastmailなど一部のメールプロバイダーは、証明書のないレコードでもロゴを表示できます。証明書は限られた認証局から発行され、Googleは受け入れる認証局を公開しています。',
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'DMARCがp=noneでもBIMIは機能しますか？',
      a: 'いいえ。Googleは、BIMIはDMARCポリシーnoneに対応していないと明記しています。ポリシーはquarantineまたはrejectにする必要があります。',
    },
    {
      q: 'GmailにはVMCが必要ですか？',
      a: 'VMCかCMCのどちらかが必要です。VMCには登録商標が必要で、青いチェックマークが表示されます。CMCは商標が不要で、チェックマークなしでロゴが表示されます。',
    },
    {
      q: 'BIMIロゴが表示されないのはなぜですか？',
      a: 'よくある原因は、DMARCがまだp=noneのままである、メールがDMARCに合格していない、SVGが有効なTiny PSではない、証明書がないか期限切れである、受信側のメールサービスがBIMIに対応していない、のいずれかです。また、メールプロバイダーが新しいレコードを読み込むまで時間がかかることもあります。',
    },
    {
      q: 'BIMIでメールの到達率は上がりますか？',
      a: '直接は上がりません。BIMIは、強制ポリシーのDMARCにすでに合格しているメールにロゴを表示するだけです。そこに至るまでの作業、つまりSPF、DKIM、DMARCを正しく設定することが、メールの到達に役立ちます。詳しくは[SPF・DKIM・DMARCの解説](/ja/blog/spf-dkim-dmarc-explained)をご覧ください。',
    },
    {
      q: 'default._bimiとは何ですか？',
      a: 'メールプロバイダーがBIMIレコードを探すDNS名です。defaultはセレクターです。メールの種類ごとに異なるロゴを使いたい場合にのみ、別のセレクターと、メールのBIMI-Selectorヘッダーが必要になります。',
    },
    {
      q: 'ロゴはどこかにアップロードされますか？',
      a: 'いいえ。ロゴチェックはブラウザ内でファイルを読み込みます。',
    },
  ],
  ctaHeadline: 'ロゴの準備ができたら、メールリストも確認しましょう。',
}

export const BIMI_PAGE_STRINGS: Record<Locale, BimiPageStrings> = { en, de, fr, es, it, 'pt-br': ptBr, nl, pl, id, ja }
