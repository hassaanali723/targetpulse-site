// German Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). Numbers come from the English page; the competitor's words
// (free tier, expiry, strengths) from lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'mailfloss',
  path: '/de/mailfloss-alternative',
  cluster: 'altMailfloss',
  metaTitle: 'Mailfloss Alternative: Mailfloss Preise im Vergleich | Giggal.ai',
  ogTitle: 'Eine Mailfloss Alternative, die Catch-all-E-Mails prüft',
  desc: 'Mailfloss bereinigt Listen täglich in Ihrer E-Mail-Plattform, markiert Catch-all-Adressen aber nur. Giggal.ai liefert dafür ein Ergebnis, zu 9,90 $ pro 10.000.',
  h1: ['Eine ', 'Mailfloss Alternative', ' für die einmalige Listenbereinigung'],
  heroP:
    'Mailfloss verbindet sich mit Ihrer E-Mail-Marketing-Plattform und bereinigt die Liste jeden Tag. Es markiert Catch-all-Adressen, bestätigt sie aber nicht. Giggal.ai prüft Listen, die Sie hochladen, und liefert ein Ergebnis für Catch-all-Adressen. Es kostet 9,90 $ pro 10.000 E-Mails.',
  bluf: [
    { k: 'So funktioniert es', v: 'Mailfloss bereinigt Ihre Liste direkt in Ihrer E-Mail-Plattform. Giggal.ai prüft Listen, die Sie hochladen oder per API senden.' },
    { k: 'Catch-all', v: 'Mailfloss markiert Catch-all-Adressen. Giggal.ai liefert ein Ergebnis für sie.' },
    { k: 'Preis', v: 'Vorausbezahlte Credits von Mailfloss kosten 40 $ pro 10.000. Giggal.ai kostet 9,90 $.' },
    { k: 'Gratis-Nutzung', v: 'Mailfloss gibt 500 Gratis-Prüfungen im Monat. Giggal.ai gibt einmalig 1.000, ohne Karte.' },
  ],
  about: {
    heading: 'Was ist Mailfloss?',
    paragraphs: [
      'Mailfloss ist ein Dienst zur Bereinigung von E-Mail-Listen. Er verbindet sich mit 41 E-Mail-Plattformen, etwa Mailchimp, Klaviyo, HubSpot und ActiveCampaign. Dann entfernt er jeden Tag ungültige Adressen aus Ihrer Liste.',
      'Er korrigiert auch häufige Tippfehler in E-Mail-Adressen. Es gibt eine Echtzeit-API, Webhooks und ein Formular-Widget.',
      'Mailfloss verkauft Monatsabos und vorausbezahlte Credits. Vorausbezahlte Credits verfallen nie.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine Mailfloss Alternative suchen',
    items: [
      { k: 'Catch-all', v: 'Mailfloss markiert Catch-all-Adressen. Es bestätigt nicht, ob das Postfach existiert.' },
      { k: 'Karte für die Testphase', v: 'Die 7-tägige Testphase bei Abos erfordert eine Kreditkarte.' },
      { k: 'Plattform-Limits', v: 'Lite verbindet sich mit 1 E-Mail-Plattform, Business mit 10.' },
      { k: 'Preis', v: 'Vorausbezahlte Credits kosten 40 $ pro 10.000 und 300 $ pro 100.000.' },
    ],
  },
  catchAllHeading: 'Wie Mailfloss und Giggal.ai mit Catch-all-E-Mails umgehen',
  catchAllProse:
    'Mailfloss markiert Catch-all-Adressen und überlässt Ihnen die Entscheidung. Giggal.ai prüft sie weiter und liefert eines von vier Ergebnissen, für 1 Credit pro Adresse. Es prüft außerdem Adressen hinter 15 benannten Secure Email Gateways.',
  pricingHeading: 'Mailfloss Preise im Vergleich zu Giggal.ai',
  pricingProse:
    'Die Abos von Mailfloss sind Lite für 29 $ im Monat mit 10.000 Credits, Business für 59 $ mit 25.000 und Pro für 209 $ mit 125.000. Vorausbezahlte Credits kosten 8 $ für 1.000, 40 $ für 10.000, 300 $ für 100.000 und 1.200 $ für eine Million.',
  pricingExtra: [
    'Jedes Mailfloss-Konto bekommt außerdem 500 Gratis-Verifizierungen im Monat. Giggal.ai verkauft 10.000 Credits für 9,90 $ und eine Million für 680 $, ohne Abo.',
  ],
  strengths: {
    heading: 'Wann Mailfloss gut passt',
    intro: 'Mailfloss kann einige Dinge, die Giggal.ai nicht kann:',
  },
  others: {
    heading: 'Weitere Mailfloss Alternativen',
    intro: 'Diese Verifizierer bereinigen auch Marketing-Listen. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Lässt sich mit mehr als 50 Marketing-Tools verbinden. 10.000 Credits ohne Verfallsdatum kosten 60 $.' },
      { name: 'Bounceless', text: '10.000 Credits kosten 29 $. Mit einer geschäftlichen E-Mail-Adresse gibt es 1.000 Gratis-Credits im Monat.' },
      { name: 'no2bounce', text: 'Lässt sich mit HubSpot, Klaviyo und Zoho verbinden. 10.000 Credits kosten 20 $ und verfallen nie.' },
    ],
  },
  testHeading: 'Testen Sie Giggal.ai an einem Export aus Ihrer E-Mail-Plattform',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Mailfloss geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit dem, was Mailfloss markiert hat.',
  ],
  ctaHeadline: 'Ein Ergebnis für Catch-all-Adressen statt einer Markierung',
  faqs: [
    {
      q: 'Was kostet Mailfloss?',
      a: 'Abos beginnen bei 29 $ im Monat für 10.000 Credits. Vorausbezahlte Credits kosten 40 $ für 10.000 und 1.200 $ für eine Million, und sie verfallen nie.',
    },
    {
      q: 'Hat Mailfloss einen kostenlosen Plan?',
      a: 'Ja. Jedes Konto bekommt 500 Gratis-Verifizierungen im Monat. Abos haben außerdem eine 7-tägige Testphase, für die eine Karte nötig ist.',
    },
    {
      q: 'Prüft Mailfloss Catch-all-E-Mails?',
      a: 'Es markiert sie. Es bestätigt nicht, ob das Postfach existiert. Giggal.ai liefert ein Ergebnis für Catch-all-Adressen, für 1 Credit pro Adresse.',
    },
    {
      q: 'Bereinigt Giggal.ai meine Liste in der E-Mail-Plattform wie Mailfloss?',
      a: 'Nein. Giggal.ai arbeitet mit Uploads, einer API, Zapier, n8n und HubSpot. Es führt keine tägliche Bereinigung in Ihrer E-Mail-Plattform aus.',
    },
  ],
  breadcrumb: 'Mailfloss Alternative',
}

export default cfg
