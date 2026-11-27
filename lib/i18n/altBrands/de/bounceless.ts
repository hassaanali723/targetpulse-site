// German Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). Numbers come from the English page; the competitor's words
// (free tier, expiry, strengths) from lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'bounceless',
  path: '/de/bounceless-alternative',
  cluster: 'altBounceless',
  metaTitle: 'Bounceless Alternative: Bounceless.io Preise | Giggal.ai',
  ogTitle: 'Eine Bounceless Alternative mit Prüfung hinter Gateways',
  desc: 'Bounceless kostet 29 $ pro 10.000 Credits. Giggal.ai kostet 9,90 $ und prüft Catch-all-Adressen und E-Mails hinter Secure Email Gateways. Credits verfallen nie.',
  h1: ['Eine ', 'Bounceless Alternative', ', die auch E-Mails hinter Gateways prüft'],
  heroP:
    'Bounceless ist ein günstiger E-Mail-Verifizierer mit einmaligen Paketen und Monatsabos. Hinweise zu Catch-all sind jetzt in der Standardprüfung enthalten. Giggal.ai liefert ebenfalls ein Ergebnis für Catch-all-Adressen. Es prüft außerdem hinter 15 namentlich genannten Secure Email Gateways.',
  bluf: [
    { k: 'Preis', v: '10.000 Credits kosten 29 $ bei Bounceless und 9,90 $ bei Giggal.ai.' },
    { k: 'Bei großem Volumen', v: 'Eine Million Credits kostet 579 $ bei Bounceless und 680 $ bei Giggal.ai.' },
    { k: 'Gateways', v: 'Giggal.ai nennt 15 E-Mail-Gateways, hinter denen es prüft. Bounceless nennt keine.' },
    { k: 'Gratis-Credits', v: 'Bounceless gibt 1.000 im Monat mit einer geschäftlichen E-Mail. Giggal.ai gibt einmalig 1.000.' },
  ],
  about: {
    heading: 'Was ist Bounceless?',
    paragraphs: [
      'Bounceless ist ein Dienst zur E-Mail-Verifizierung von bounceless.io. Er prüft Listen per Massen-Upload und einzelne E-Mails. Er bietet eine API und einen MCP-Server.',
      'Das Konto enthält auch Prüfungen für den Absender-Zustand, die Posteingangsplatzierung und Anmeldeformulare. Bounceless gibt an, mehr als 39.000 Kundenkonten zu haben.',
      'Bounceless hat noch keine nativen Integrationen mit Apps. Er bietet Anleitungen für CSV und API für Tools wie Mailchimp, HubSpot und ActiveCampaign.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine Bounceless Alternative suchen',
    items: [
      { k: 'Gateways', v: 'Bounceless nennt keine Secure Email Gateways wie Proofpoint oder Mimecast.' },
      { k: 'Integrationen', v: 'Es hat noch keine nativen Integrationen mit Apps, nur Anleitungen für CSV und API.' },
      { k: 'Preis bei 10.000', v: '10.000 Credits kosten 29 $. Giggal.ai verlangt 9,90 $ für dieselbe Menge.' },
      { k: 'Geschäftliche E-Mail', v: 'Die monatlichen Gratis-Credits erfordern eine geschäftliche E-Mail. Freemail-Adressen bekommen keine.' },
    ],
  },
  catchAllHeading: 'Bounceless vs Giggal.ai bei Catch-all-Adressen',
  catchAllProse:
    'Bounceless nimmt Hinweise zu Catch-all in seine Prüfung für 1 Credit auf und berechnet unbestätigte Ergebnisse nicht. Auch Giggal.ai liefert ein Ergebnis für Catch-all-Adressen. Es kostet 1 Credit, und unbekannte Ergebnisse werden erstattet. Der Hauptunterschied sind Secure Email Gateways. Giggal.ai prüft hinter 15 davon, darunter Proofpoint, Mimecast und Barracuda.',
  pricingHeading: 'Bounceless Preise im Vergleich mit Giggal.ai',
  pricingProse:
    'Die Pay-as-you-go-Pakete von Bounceless kosten 19 $ für 5.000, 29 $ für 10.000, 159 $ für 100.000 und 579 $ für eine Million. Monatsabos beginnen bei 19 $ für 6.500 Credits. Credits aus Paketen und aus Abos verfallen nie.',
  pricingExtra: [
    'Giggal.ai verkauft 10.000 Credits für 9,90 $, 100.000 für 76 $ und eine Million für 680 $. Bei einer Million ist Bounceless günstiger. Bei 10.000 und 100.000 ist Giggal.ai günstiger.',
  ],
  strengths: {
    heading: 'Wann Bounceless gut passt',
    intro: 'Bounceless hat diese Stärken:',
  },
  others: {
    heading: 'Weitere Bounceless Alternativen',
    intro: 'Diese Verifizierer liegen preislich nahe bei Bounceless. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 Credits kosten 20 $ und eine Million kostet 679 $. Die Credits verfallen nie.' },
      { name: 'QuickEmailVerification', text: 'Gibt jeden Tag 100 Gratis-Credits. 10.000 dauerhafte Credits kosten 60 $.' },
      { name: 'Mailfloss', text: 'Verbindet sich mit 41 E-Mail-Plattformen und entfernt jeden Tag ungültige Adressen. 10.000 vorausbezahlte Credits kosten 40 $.' },
    ],
  },
  testHeading: 'Prüfen Sie dieselbe Liste mit Bounceless und mit Giggal.ai',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Bounceless geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit den Hinweisen, die Bounceless geliefert hat.',
  ],
  ctaHeadline: 'Catch-all- und Gateway-E-Mails für 1 Credit pro Adresse',
  faqs: [
    {
      q: 'Was kostet Bounceless?',
      a: 'Die Pay-as-you-go-Pakete von Bounceless beginnen bei 19 $ für 5.000 Credits. 10.000 kosten 29 $, 100.000 kosten 159 $ und eine Million kostet 579 $. Monatsabos beginnen bei 19 $ für 6.500 Credits.',
    },
    {
      q: 'Ist Bounceless kostenlos?',
      a: 'Bounceless gibt 1.000 Gratis-Credits im Monat, wenn Sie sich mit einer geschäftlichen E-Mail anmelden. Eine Karte ist nicht nötig. Giggal.ai gibt einmalig 1.000 Gratis-Credits, ohne Karte.',
    },
    {
      q: 'Prüft Bounceless Catch-all-E-Mails?',
      a: 'Ja. Bounceless nimmt Hinweise zu Catch-all ohne Aufpreis in seine Standardprüfung für 1 Credit auf. Unbestätigte Ergebnisse werden nicht berechnet.',
    },
    {
      q: 'Ist Giggal.ai eine gute Bounceless Alternative?',
      a: 'Ja, wenn Ihre Liste viele Firmendomains enthält. Giggal.ai prüft hinter 15 namentlich genannten Secure Email Gateways und kostet 9,90 $ pro 10.000 Credits.',
    },
  ],
  breadcrumb: 'Bounceless Alternative',
}

export default cfg
