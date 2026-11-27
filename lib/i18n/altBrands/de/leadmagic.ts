// German LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'leadmagic',
  path: '/de/leadmagic-alternative',
  cluster: 'altLeadmagic',
  metaTitle: 'LeadMagic Alternative: LeadMagic Preise im Vergleich | Giggal.ai',
  ogTitle: 'Eine LeadMagic Alternative nur für die E-Mail-Verifizierung',
  desc: 'LeadMagic Preise: ab 99 $ im Monat für 5.000 gemeinsame Credits. Giggal.ai ist ein E-Mail-Verifizierer für 9,90 $ pro 10.000 Credits, die nie verfallen.',
  h1: ['Eine ', 'LeadMagic Alternative', ' nur für die E-Mail-Verifizierung'],
  heroP:
    'LeadMagic ist eine Plattform für B2B-Daten. Die E-Mail-Validierung ist eines ihrer Produkte und teilt sich einen monatlichen Credit-Pool mit den anderen. Wenn Sie nur E-Mail-Listen prüfen wollen, macht Giggal.ai genau diese eine Aufgabe. Es kostet 9,90 $ pro 10.000 E-Mails, einmal bezahlt.',
  bluf: [
    { k: 'Was es ist', v: 'LeadMagic verkauft Kontakt- und Firmendaten. Giggal.ai prüft nur E-Mail-Adressen.' },
    { k: 'Preis', v: 'LeadMagic kostet ab 99 $ im Monat. Giggal.ai kostet 9,90 $ für 10.000 Credits, einmal bezahlt.' },
    { k: 'Gratis-Credits', v: 'LeadMagic gibt keine Gratis-Credits. Giggal.ai gibt 1.000 ohne Karte.' },
    { k: 'Catch-all', v: 'Beide liefern ein Ergebnis für Catch-all-Adressen. Giggal.ai prüft auch hinter 15 namentlich genannten E-Mail-Gateways.' },
  ],
  about: {
    heading: 'Was ist LeadMagic?',
    paragraphs: [
      'LeadMagic ist eine B2B-Datenplattform für Vertriebsteams. Sie findet geschäftliche E-Mail-Adressen und Mobilnummern und ergänzt Kontakte um Firmendaten. Außerdem verfolgt sie Jobwechsel und Werbeaktivitäten.',
      'Die E-Mail-Validierung ist ein Produkt innerhalb von LeadMagic. Sie liefert die Ergebnisse gültig, ungültig oder unbekannt. Ein eindeutiges Ergebnis kostet 0,25 Credit, ein unbekanntes Ergebnis ist kostenlos. Die Catch-all-Validierung ist ein eigenes Produkt mit denselben Credits.',
      'Teams nutzen LeadMagic über die Web-App, eine REST-API, eine CLI oder einen MCP-Server. LeadMagic lässt sich mit Tools wie Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier und Make verbinden.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'LeadMagic Preise 2026',
  pricingProse:
    'LeadMagic ist ein Monatsabo. Essential kostet 99 $ für 5.000 Credits. Growth kostet 249 $ für 20.000, Professional 499 $ für 50.000 und Ultimate 849 $ für 100.000. Alle Produkte nutzen dieselben Credits.',
  pricingExtra: [
    'Bei 0,25 Credit pro Validierung reicht Essential (99 $) für 20.000 Prüfungen im Monat. Für 100.000 Prüfungen im Monat brauchen Sie Professional für 499 $. Bei jährlicher Zahlung sind zwei Monate gratis. Ungenutzte Monats-Credits werden übertragen, bis zum Zweifachen des Monatskontingents.',
    'Giggal.ai hat kein Abo. 10.000 Credits kosten 9,90 $, 100.000 kosten 76 $ und eine Million kostet 680 $. Die Credits verfallen nie.',
  ],
  reasons: {
    heading: 'Warum Teams eine LeadMagic Alternative suchen',
    items: [
      { k: 'Monatliche Rechnung', v: 'LeadMagic rechnet jeden Monat ab, auch in Monaten, in denen Sie nichts prüfen. Credits bei Giggal.ai kaufen Sie einmal.' },
      { k: 'Gemeinsame Credits', v: 'Validierung und Anreicherung nutzen dieselben Credits. Eine große Listenbereinigung lässt weniger Credits für die Kontaktsuche übrig.' },
      { k: 'Kein Gratis-Test', v: 'LeadMagic gibt keine Gratis-Credits. Sie zahlen, bevor Sie es an Ihrer eigenen Liste testen können.' },
      { k: 'Gateways', v: 'LeadMagic gibt keine Unterstützung für Secure Email Gateways wie Proofpoint oder Mimecast an.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai bei Catch-all-Adressen',
  catchAllProse:
    'LeadMagic liefert auf Catch-all-Domains die Ergebnisse gültig, ungültig oder unbekannt und berechnet unbekannte Ergebnisse nicht. Giggal.ai liefert ebenfalls ein Ergebnis für Catch-all-Adressen, für 1 Credit pro Adresse. Es prüft außerdem Adressen hinter 15 Secure Email Gateways wie Proofpoint, Mimecast und Barracuda. Diese Gateways nehmen zuerst jede Adresse an. Eine einfache Prüfung kann deshalb eine echte Adresse nicht von einer falschen unterscheiden.',
  strengths: {
    heading: 'Was LeadMagic gut macht',
    intro: 'LeadMagic ist die bessere Wahl, wenn Sie Folgendes brauchen:',
  },
  others: {
    heading: 'Weitere LeadMagic Alternativen',
    intro: 'Wenn Sie Suche und Prüfung in einem Tool brauchen, kommen diese Tools infrage. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Findymail', text: 'Ein E-Mail-Finder, der auch prüft. Der Starter-Plan kostet 99 $ im Monat für 5.000 Finder-Credits und 5.000 Verifier-Credits. Findymail verspricht eine Bounce-Rate unter 5 %.' },
      { name: 'Anymail Finder', text: 'Ein E-Mail-Finder mit eigenem Verifizierer. Eine Prüfung kostet 0,2 Credit, und die Pläne beginnen bei 29 $ im Monat für 400 Credits.' },
      { name: 'no2bounce', text: 'Ein Verifizierer mit Pay-as-you-go-Credits, die nie verfallen. 10.000 Credits kosten 20 $.' },
    ],
  },
  testHeading: 'Testen Sie Giggal.ai an einer Liste, die LeadMagic schon geprüft hat',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit LeadMagic geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit dem, was LeadMagic für dieselben Adressen geliefert hat.',
  ],
  ctaHeadline: 'Prüfen Sie Ihre Liste ohne Monatsabo',
  faqs: [
    {
      q: 'Was kostet LeadMagic?',
      a: 'LeadMagic kostet ab 99 $ im Monat für 5.000 Credits. Die Pläne gehen bis 849 $ im Monat für 100.000 Credits. Die E-Mail-Validierung kostet 0,25 Credit pro eindeutigem Ergebnis. Mit dem Plan für 99 $ sind also 20.000 Prüfungen möglich.',
    },
    {
      q: 'Hat LeadMagic einen kostenlosen Plan?',
      a: 'Nein. LeadMagic gibt nach eigener Aussage keine Gratis-Credits. Die Suchfunktion hat eine Testphase von 14 Tagen. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte, auch für einen Massen-Upload.',
    },
    {
      q: 'Ist Giggal.ai eine gute LeadMagic Alternative?',
      a: 'Ja, wenn Sie nur E-Mails verifizieren wollen. Giggal.ai prüft Listen, liefert ein Ergebnis für Catch-all-Adressen und kostet 9,90 $ pro 10.000. Es findet weder E-Mails noch Telefonnummern und ersetzt deshalb nicht die Datenprodukte von LeadMagic.',
    },
    {
      q: 'Berechnet LeadMagic unbekannte Ergebnisse?',
      a: 'Nein. LeadMagic berechnet 0,25 Credit für ein eindeutiges Ergebnis und nichts für unbekannt. Auch Giggal.ai erstattet den Credit, wenn ein Ergebnis unbekannt ist.',
    },
    {
      q: 'Lohnt sich LeadMagic allein für die E-Mail-Verifizierung?',
      a: 'Es lohnt sich, wenn Sie die Datenprodukte jeden Monat nutzen. Nur für die Verifizierung zahlen Sie mindestens 99 $ im Monat. Giggal.ai verkauft 10.000 Prüfungen für 9,90 $, einmal bezahlt.',
    },
    {
      q: 'Ist der Catch-all-Test von LeadMagic neutral?',
      a: 'Nein. LeadMagic hat ihn im Februar 2026 veröffentlicht und sich selbst auf Platz eins gesetzt. Lesen Sie ihn als Test eines Anbieters. Giggal.ai gehörte nicht zu den Tools in diesem Test.',
    },
  ],
  breadcrumb: 'LeadMagic Alternative',
}

export default cfg
