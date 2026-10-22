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

export const BIMI_PAGE_STRINGS: Partial<Record<Locale, BimiPageStrings>> & { en: BimiPageStrings } = { en, de }
