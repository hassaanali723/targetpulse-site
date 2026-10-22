// All page copy for the DMARC generator, one object per language the page ships in.
// The page is components/tools/DmarcGenerator/DmarcGeneratorPage.tsx; the URLs live in
// CLUSTERS.dmarcGenerator (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/dmarcToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface DmarcPageStrings {
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
  /** The first step names the tool's "Already have a DMARC record?" toggle. */
  howSteps: [string, string, string, string]
  imageAlt: string
  changedTitle: string
  /** May carry a link. */
  changedText: string
  policyTitle: string
  /** The third may carry a link. */
  policyParas: [string, string, string]
  reportsTitle: string
  reportsParas: [string, string]
  mistakesTitle: string
  /** The second may carry a link. */
  mistakesParas: [string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: DmarcPageStrings = {
  metaTitle: 'Free DMARC Generator: Build a DMARC Record (2026) | Giggal.ai',
  ogTitle: 'Free DMARC Generator: Build a DMARC Record (2026)',
  description:
    'Build a valid DMARC record for the 2026 standard (RFC 9989): policy, subdomains, reports and test mode. Paste an old record to remove retired tags. Free.',
  ogImage: '/tools/dmarc-generator-og-v2.webp',
  ogAlt: 'Free DMARC Record Generator',
  crumb: 'DMARC Record Generator',
  appName: 'Free DMARC Record Generator',
  featureList: [
    'Build valid DMARC records for RFC 9989 (2026 standard)',
    'Clean old records by removing retired tags (pct, rf, ri)',
    'Configure policy, subdomains, reporting and test mode (t=y)',
    'Generate external destination consent authorization records',
    'Runs 100% in-browser with zero telemetry',
  ],
  h1: 'DMARC Record Generator',
  heroIntro:
    'A DMARC record tells mail providers what to do with email that fakes your domain. Answer three questions to build yours.',
  howTitle: 'How to publish your DMARC record',
  howSteps: [
    'Fill in the three steps above. If you already have a record, paste it under “Already have a DMARC record?” to clean it up.',
    'At your DNS host, create a TXT record with the host name _dmarc. Some providers want the full name, _dmarc.yourdomain.com.',
    "Paste the value and save. Make sure it's the only DMARC record on the domain; receivers that find two ignore both.",
    'Wait for DNS to update, then watch your report inbox (the rua address). Providers that send aggregate reports should send them at least once every 24 hours.',
  ],
  imageAlt: 'Illustration of a DMARC policy record with three enforcement steps and protective shield.',
  changedTitle: 'What changed for DMARC records in 2026',
  changedText:
    "In May 2026, RFC 9989 replaced RFC 7489 and put DMARC on the Standards Track. Records still start with v=DMARC1, so existing records keep working. Three tags are retired: pct, rf and ri. Two are new: t, a test mode, and np, a policy for subdomains that don't exist. This DMARC record generator never writes the retired tags, and the check for existing records strips them out. The full tag list is in [what is a DMARC record](/blog/what-is-a-dmarc-record).",
  policyTitle: 'Which DMARC policy to choose',
  policyParas: [
    'Start with p=none and a rua address. Nothing changes for your mail, and the reports show you which services send as your domain. The standard says getting every legitimate source authenticated can take many months. For domains whose users post to mailing lists, it suggests p=none for at least a month, then quarantine for an equally long period, comparing results before you move to reject.',
    "The t=y option helps with the last step. Publish p=reject with t=y and receivers apply quarantine instead, so you can see what would have been rejected without losing mail. Remove t=y when you're ready.",
    'Before you publish reject, make sure all your mail is DKIM-signed. The standard says a domain at p=reject must not rely on SPF alone, because forwarding breaks SPF. If you run your own mail server, the [DKIM generator](/dkim-generator) can create a key.',
  ],
  reportsTitle: 'Reporting addresses',
  reportsParas: [
    "rua is where aggregate reports go: XML files, usually covering one day each, listing which IP addresses sent mail as your domain and whether they passed. ruf is for per-message failure reports, which many receivers redact heavily or don't send at all for privacy reasons, so don't rely on them.",
    "If a report address is on a different domain than the one you're protecting, for example a reporting service, that domain has to publish a consent record before receivers will send anything there. The helper above writes the record for you; send it to whoever runs the reporting domain. The rule is in section 4 of RFC 9990.",
  ],
  mistakesTitle: 'Mistakes this DMARC generator prevents',
  mistakesParas: [
    "The generator always puts v=DMARC1 first, because receivers ignore a record that starts with anything else. It adds the mailto: prefix that rua and ruf addresses need, and flags addresses that look wrong. It never writes pct, and when you check an old record with pct below 100, it suggests t=y instead. It warns you when you choose reject, since that's only safe once all your mail is DKIM-signed, and when strict alignment would make mail from your subdomains fail.",
    "The one thing it can't check is your DNS. Publish the result as the only DMARC record on the domain. For how DMARC works with SPF and DKIM, see [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).",
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What should my first DMARC record be?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com. It doesn’t change how your mail is handled, and it starts the reports. Choose Monitor only in the tool to build it.',
    },
    {
      q: 'Is pct still supported?',
      a: 'Not in the current standard. RFC 9989 retired pct along with rf and ri. A leftover pct=100 is harmless, but if you want a softer rollout, use t=y instead of a percentage.',
    },
    {
      q: 'What does t=y do?',
      a: 'It asks receivers to apply one level below your published policy, so reject is treated as quarantine and quarantine as none. It doesn’t change the reports, and it does nothing on p=none.',
    },
    {
      q: 'Do I need rua and ruf?',
      a: 'You need rua if you want to see what’s happening; without it you get no aggregate reports. ruf is optional, and many receivers don’t send failure reports at all.',
    },
    {
      q: 'What is np?',
      a: 'The policy for subdomains that don’t exist in DNS, such as a made-up invoices-2026.yourdomain.com. If you leave it out, sp applies, and if sp is missing too, p does.',
    },
    {
      q: 'Where do I publish the record?',
      a: 'As a TXT record at _dmarc.yourdomain.com. Most DNS panels only need _dmarc in the host field and add the domain themselves.',
    },
  ],
  ctaHeadline: 'DMARC done? Check your list next.',
  ctaSupporting:
    'Authentication proves the mail is yours. Verifying your list stops bounces from addresses that no longer exist. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const de: DmarcPageStrings = {
  metaTitle: 'DMARC-Generator: DMARC-Eintrag kostenlos erstellen | Giggal.ai',
  ogTitle: 'DMARC-Generator: DMARC-Eintrag kostenlos erstellen',
  description:
    'Kostenloser DMARC-Generator: gültiger DMARC-Eintrag nach RFC 9989 (2026) mit Richtlinie, Subdomains, Berichten und Testmodus. Bereinigt auch alte Einträge.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser DMARC-Generator von Giggal.ai',
  crumb: 'DMARC-Generator',
  appName: 'Kostenloser DMARC-Generator',
  featureList: [
    'Erstellt gültige DMARC-Einträge nach RFC 9989 (Standard von 2026)',
    'Bereinigt alte Einträge und entfernt abgeschaffte Tags (pct, rf, ri)',
    'Richtlinie, Subdomains, Berichte und Testmodus (t=y) einstellen',
    'Erstellt Freigabe-Einträge für externe Berichtsadressen',
    'Läuft vollständig im Browser, ohne Telemetrie',
  ],
  h1: 'DMARC-Generator',
  heroIntro:
    'Ein DMARC-Eintrag sagt E-Mail-Anbietern, was mit gefälschten E-Mails unter Ihrer Domain passieren soll. Beantworten Sie drei Fragen, und der DMARC-Generator erstellt Ihren Eintrag.',
  howTitle: 'So veröffentlichen Sie Ihren DMARC-Eintrag',
  howSteps: [
    'Gehen Sie die drei Schritte oben durch. Haben Sie schon einen Eintrag, fügen Sie ihn unter "Sie haben schon einen DMARC-Eintrag?" ein, um ihn zu bereinigen.',
    'Legen Sie bei Ihrem DNS-Anbieter einen TXT-Eintrag mit dem Hostnamen _dmarc an. Manche Anbieter wollen den vollständigen Namen, _dmarc.ihredomain.de.',
    'Fügen Sie den Wert ein und speichern Sie. Achten Sie darauf, dass es der einzige DMARC-Eintrag der Domain ist. Empfänger, die zwei finden, ignorieren beide.',
    'Warten Sie, bis das DNS aktualisiert ist. Beobachten Sie dann das Postfach für Ihre Berichte (die rua-Adresse). Anbieter, die Sammelberichte senden, sollen das mindestens alle 24 Stunden tun.',
  ],
  imageAlt: 'Illustration: Ein DMARC-Eintrag mit einer Richtlinie in drei Stufen und einem Schutzschild.',
  changedTitle: 'Was sich 2026 für DMARC-Einträge geändert hat',
  changedText:
    'Im Mai 2026 hat RFC 9989 den RFC 7489 ersetzt. DMARC ist damit Teil des Standards Track. Einträge beginnen weiterhin mit v=DMARC1. Bestehende Einträge funktionieren also weiter. Drei Tags sind abgeschafft: pct, rf und ri. Zwei sind neu: t, ein Testmodus, und np, eine Richtlinie für Subdomains, die es nicht gibt. Dieser DMARC-Generator schreibt die abgeschafften Tags nie, und die Prüfung bestehender Einträge entfernt sie. Alle Tags finden Sie in [Was ist ein DMARC-Eintrag?](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Welche DMARC-Richtlinie Sie wählen sollten',
  policyParas: [
    'Beginnen Sie mit p=none und einer rua-Adresse. Für Ihre E-Mails ändert sich nichts. Die Berichte zeigen Ihnen, welche Dienste unter Ihrer Domain senden. Der Standard sagt, dass es viele Monate dauern kann, bis jede legitime Quelle authentifiziert ist. Für Domains, deren Nutzer an Mailinglisten schreiben, schlägt er mindestens einen Monat p=none vor. Danach folgt quarantine für einen ebenso langen Zeitraum. Vergleichen Sie die Ergebnisse, bevor Sie zu reject wechseln.',
    'Die Option t=y hilft beim letzten Schritt. Wenn Sie p=reject mit t=y veröffentlichen, wenden Empfänger stattdessen quarantine an. So sehen Sie, was abgelehnt worden wäre, ohne E-Mails zu verlieren. Entfernen Sie t=y, wenn Sie bereit sind.',
    'Bevor Sie reject veröffentlichen, sollten alle Ihre E-Mails eine DKIM-Signatur tragen. Laut Standard darf sich eine Domain mit p=reject nicht allein auf SPF verlassen, weil SPF bei Weiterleitungen fehlschlägt. Wenn Sie einen eigenen Mailserver betreiben, erstellt der [DKIM-Generator](/dkim-generator) einen Schlüssel.',
  ],
  reportsTitle: 'Adressen für Berichte',
  reportsParas: [
    'An die rua-Adresse gehen die Sammelberichte. Das sind XML-Dateien, die meist je einen Tag abdecken. Sie zeigen, welche IP-Adressen unter Ihrer Domain gesendet haben und ob diese E-Mails die Prüfung bestanden haben. An die ruf-Adresse gehen Fehlerberichte zu einzelnen Nachrichten. Viele Empfänger schwärzen diese aus Datenschutzgründen stark oder senden sie gar nicht. Verlassen Sie sich deshalb nicht darauf.',
    'Liegt eine Berichtsadresse auf einer anderen Domain als der, die Sie schützen? Das ist zum Beispiel bei einem Berichtsdienst der Fall. Dann muss diese Domain einen Freigabe-Eintrag veröffentlichen, bevor Empfänger Berichte dorthin senden. Das Tool oben schreibt diesen Eintrag für Sie. Senden Sie ihn an die Person, die die Berichtsdomain verwaltet. Die Regel steht in Abschnitt 4 von RFC 9990.',
  ],
  mistakesTitle: 'Fehler, die dieser DMARC-Generator verhindert',
  mistakesParas: [
    'Der Generator setzt v=DMARC1 immer an den Anfang, denn Empfänger ignorieren einen Eintrag, der anders beginnt. Er ergänzt das Präfix mailto:, das rua- und ruf-Adressen brauchen, und markiert Adressen, die falsch aussehen. Er schreibt nie pct. Wenn Sie einen alten Eintrag mit pct unter 100 prüfen, schlägt er stattdessen t=y vor. Er warnt Sie, wenn Sie reject wählen, denn das ist erst sicher, wenn alle Ihre E-Mails DKIM-signiert sind. Er warnt auch, wenn striktes Alignment E-Mails von Ihren Subdomains durchfallen ließe.',
    'Nur Ihr DNS kann er nicht prüfen. Veröffentlichen Sie das Ergebnis als einzigen DMARC-Eintrag der Domain. Wie DMARC mit SPF und DKIM zusammenarbeitet, lesen Sie in [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Häufige Fragen zum DMARC-Eintrag',
  faqs: [
    {
      q: 'Wie sollte mein erster DMARC-Eintrag aussehen?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc-berichte@ihredomain.de. Er ändert nichts daran, wie Ihre E-Mails behandelt werden, und startet die Berichte. Wählen Sie im Tool "Nur beobachten", um ihn zu erstellen.',
    },
    {
      q: 'Wird pct noch unterstützt?',
      a: 'Im aktuellen Standard nicht. RFC 9989 hat pct zusammen mit rf und ri abgeschafft. Ein übrig gebliebenes pct=100 schadet nicht. Für eine schrittweise Einführung nutzen Sie aber t=y statt eines Prozentsatzes.',
    },
    {
      q: 'Was bewirkt t=y?',
      a: 'Es bittet Empfänger, eine Stufe milder vorzugehen als Ihre veröffentlichte Richtlinie. Aus reject wird also quarantine, und aus quarantine wird none. Die Berichte ändern sich nicht, und bei p=none hat es keine Wirkung.',
    },
    {
      q: 'Brauche ich rua und ruf?',
      a: 'rua brauchen Sie, wenn Sie sehen wollen, was passiert. Ohne rua bekommen Sie keine Sammelberichte. ruf ist optional, und viele Empfänger senden gar keine Fehlerberichte.',
    },
    {
      q: 'Was ist np?',
      a: 'Die Richtlinie für Subdomains, die es im DNS nicht gibt, etwa ein erfundenes rechnungen-2026.ihredomain.de. Fehlt np, gilt sp. Fehlt auch sp, gilt p.',
    },
    {
      q: 'Wo veröffentliche ich den DMARC-Eintrag?',
      a: 'Als TXT-Eintrag unter _dmarc.ihredomain.de. Bei den meisten DNS-Oberflächen tragen Sie nur _dmarc in das Feld für den Host ein. Die Domain hängt die Oberfläche selbst an.',
    },
  ],
  ctaHeadline: 'DMARC eingerichtet? Prüfen Sie als Nächstes Ihre E-Mail-Liste',
}

export const DMARC_PAGE_STRINGS: Partial<Record<Locale, DmarcPageStrings>> & { en: DmarcPageStrings } = { en, de }
