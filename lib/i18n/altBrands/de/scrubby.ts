// German Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/alternativesL10n.ts.
// Scrubby's product names "Quick Verification" and "Deep Verification" stay in English.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'scrubby',
  path: '/de/scrubby-alternative',
  cluster: 'altScrubby',
  metaTitle: 'Scrubby Alternative: Scrubby.io Preise im Vergleich | Giggal.ai',
  ogTitle: 'Eine Scrubby Alternative für Catch-all- und Gateway-E-Mails',
  desc: 'Scrubby berechnet 0,008 $ pro Credit, und Deep Verification dauert bis zu 72 Stunden. Giggal.ai prüft Catch-all- und Gateway-E-Mails für 9,90 $ pro 10.000.',
  h1: ['Eine ', 'Scrubby Alternative', ' für 9,90 $ pro 10.000 E-Mails'],
  heroP:
    'Scrubby prüft Catch-all-Adressen und E-Mails hinter Gateways. Auf genau diese schwer prüfbaren Adressen konzentriert sich auch Giggal.ai. Die Unterschiede liegen im Preis und in der Art der Prüfung. Scrubby berechnet 0,008 $ pro Credit. Giggal.ai berechnet 9,90 $ pro 10.000.',
  bluf: [
    { k: 'Preis', v: '10.000 Credits kosten 80 $ bei Scrubby und 9,90 $ bei Giggal.ai.' },
    { k: 'Tiefe Prüfung', v: 'Deep Verification von Scrubby kostet 3 Credits und sendet echte E-Mails. Die endgültigen Ergebnisse liegen nach bis zu 72 Stunden vor.' },
    { k: 'Gratis-Credits', v: 'Scrubby gibt 200 Gratis-Credits. Giggal.ai gibt 1.000. Keiner der beiden verlangt eine Karte.' },
    { k: 'Erstattungen', v: 'Laut Scrubby sind alle Käufe endgültig. Giggal.ai erstattet den Credit bei unbekannten Ergebnissen.' },
  ],
  about: {
    heading: 'Was ist Scrubby?',
    paragraphs: [
      'Scrubby ist ein Tool zur E-Mail-Verifizierung von scrubby.io. Es konzentriert sich auf Catch-all-Adressen und riskante Adressen, die andere Verifizierer nicht bestätigen können.',
      'Es hat zwei Prüfungen. Quick Verification kostet 1 Credit und deckt Standard-Domains, Catch-all-Domains und Domains hinter SEGs ab. Deep Verification kostet 3 Credits. Scrubby sendet dabei echte E-Mails an jede Adresse und liefert endgültige Ergebnisse innerhalb von 72 Stunden.',
      'Scrubby verbindet sich mit Tools wie Clay, Instantly, Smartlead, Apollo und HubSpot.',
    ],
  },
  reasons: {
    heading: 'Warum Teams eine Scrubby Alternative suchen',
    items: [
      { k: 'Preis', v: 'Pay-as-you-go kostet 0,008 $ pro Credit. 10.000 Prüfungen kosten 80 $, 100.000 kosten 800 $.' },
      { k: 'Wartezeit', v: 'Die Ergebnisse der Deep Verification liegen nach bis zu 72 Stunden vor.' },
      { k: 'Echte E-Mails', v: 'Deep Verification sendet echte E-Mails an jede Adresse auf Ihrer Liste.' },
      { k: 'Keine Erstattung', v: 'Laut Scrubby sind alle Käufe endgültig.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai bei Catch-all- und Gateway-E-Mails',
  catchAllProse:
    'Scrubby und Giggal.ai liefern beide ein Ergebnis für Catch-all-Adressen und Adressen hinter Gateways. Giggal.ai berechnet 1 Credit für jede Adresse, ohne tiefere Stufe. Es nennt 15 Gateways, hinter denen es prüft, darunter Proofpoint, Mimecast und Barracuda. Wenn es keine Antwort bekommt, wird der Credit erstattet.',
  pricingHeading: 'Scrubby Preise vs Giggal.ai',
  pricingProse:
    'Pay-as-you-go bei Scrubby kostet 0,008 $ pro Credit, 10.000 Credits kosten also 80 $. Die Monatspläne sind Starter für 47 $ mit 6.000 Credits, Growth für 97 $ mit 15.000 und Pro für 497 $ mit 100.000. Pay-as-you-go-Credits verfallen nie, und Plan-Credits werden übertragen.',
  pricingExtra: [
    'Eine Deep Verification verbraucht 3 Credits, 10.000 tiefe Prüfungen verbrauchen also 30.000 Credits. Giggal.ai verkauft 10.000 Credits für 9,90 $ und 100.000 für 76 $.',
  ],
  strengths: {
    heading: 'Wann Scrubby gut passt',
    intro: 'Scrubby hat Stärken, die Sie kennen sollten:',
  },
  others: {
    heading: 'Weitere Scrubby Alternativen',
    intro: 'Diese Tools liefern ebenfalls ein Ergebnis für Catch-all-Adressen. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'no2bounce', text: 'Sendet Testnachrichten, um Catch-all-Postfächer zu bestätigen. 10.000 Credits kosten 20 $ und verfallen nie.' },
      { name: 'Listmint', text: 'Prüft Catch-all-Adressen von Hand. Starter kostet 99 $ im Monat für 20.000 Standard-Credits und 5.000 Catch-all-Credits.' },
      { name: 'Allegrow', text: 'Liefert für Catch-all-Kontakte das Ergebnis gültig oder ungültig und nennt Proofpoint und Mimecast als Gateways. Starter kostet 99 $ im Monat.' },
    ],
  },
  testHeading: 'Testen Sie Giggal.ai an Ihren Catch-all-Adressen',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Scrubby geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Ergebnisse mit denen von Scrubby für dieselben Catch-all-Adressen.',
  ],
  ctaHeadline: 'Prüfen Sie dieselben schwer prüfbaren Adressen für 9,90 $ pro 10.000',
  faqs: [
    {
      q: 'Was kostet Scrubby?',
      a: 'Pay-as-you-go bei Scrubby kostet 0,008 $ pro Credit, also 80 $ für 10.000. Monatspläne beginnen bei 47 $ für 6.000 Credits. Deep Verification verbraucht 3 Credits pro E-Mail.',
    },
    {
      q: 'Was ist Deep Verification von Scrubby?',
      a: 'Das ist die langsamere Prüfung von Scrubby für schwer prüfbare Adressen. Sie kostet 3 Credits, sendet echte E-Mails an jede Adresse und liefert endgültige Ergebnisse innerhalb von 72 Stunden.',
    },
    {
      q: 'Hat Scrubby eine kostenlose Testphase?',
      a: 'Ja. Scrubby gibt 200 Gratis-Credits ohne Karte. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.',
    },
    {
      q: 'Ist Giggal.ai eine gute Scrubby Alternative?',
      a: 'Ja. Beide liefern ein Ergebnis für Catch-all- und Gateway-Adressen. Giggal.ai kostet 9,90 $ pro 10.000 Credits und erstattet unbekannte Ergebnisse.',
    },
  ],
  breadcrumb: 'Scrubby Alternative',
}

export default cfg
