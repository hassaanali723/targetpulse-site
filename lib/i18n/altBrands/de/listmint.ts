// German Listmint alternative page. Translated from
// app/(en)/listmint-alternative (2026-11-27). The competitor's words
// (free tier, credit pools, strengths) match lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'listmint',
  path: '/de/listmint-alternative',
  cluster: 'altListmint',
  metaTitle: 'Listmint Alternative: Catch-all-E-Mail-Verifizierung | Giggal.ai',
  ogTitle: 'Listmint Alternative für die Verifizierung von Catch-all-E-Mails',
  desc: 'Listmint kostet 99 $ im Monat mit 5.000 Catch-all-Credits. Giggal.ai prüft Catch-all-E-Mails für 1 Credit, also 9,90 $ pro 10.000. Die Credits verfallen nie.',
  h1: ['Eine ', 'Listmint Alternative', ' mit einem einzigen Credit-Pool'],
  heroP:
    'Listmint ist ein E-Mail-Verifizierer mit Fokus auf Catch-all-Adressen. Jeder Plan ist in Standard-Credits und einen kleineren Pool an Catch-all-Credits aufgeteilt. Giggal.ai nutzt einen einzigen Pool. Eine Catch-all-Prüfung kostet 1 Credit, genauso wie jede andere E-Mail.',
  bluf: [
    { k: 'Credits', v: 'Listmint hat zwei Credit-Pools. Giggal.ai hat einen, mit 1 Credit pro E-Mail.' },
    { k: 'Preis', v: 'Listmint Starter kostet 99 $ im Monat. Giggal.ai kostet 9,90 $ für 10.000 Credits, einmal bezahlt.' },
    { k: 'Catch-all', v: 'Listmint Starter enthält 5.000 Catch-all-Credits im Monat. Giggal.ai hat dafür kein eigenes Limit.' },
    { k: 'Gateways', v: 'Giggal.ai prüft Adressen hinter 15 benannten E-Mail-Gateways. Listmint nennt keine.' },
  ],
  about: {
    heading: 'Was ist Listmint?',
    paragraphs: [
      'Listmint ist ein Dienst zur E-Mail-Verifizierung von listmint.io. Er führt Standardprüfungen per SMTP und eine eigene Catch-all-Prüfung durch. Listmint gibt an, Catch-all-Adressen von Hand zu verifizieren.',
      'Die Catch-all-Credits kosten mehr als die Standard-Credits. Deshalb enthält jeder Plan einen großen Pool an Standard-Credits und einen kleineren Pool an Catch-all-Credits.',
      'Listmint gibt außerdem an, Catch-all-Adressen in Echtzeit verifizieren zu können.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine Listmint Alternative suchen',
    items: [
      { k: 'Catch-all-Limit', v: 'Starter enthält 5.000 Catch-all-Credits im Monat. Eine einzige große B2B-Liste kann sie alle verbrauchen.' },
      { k: 'Monatsabo', v: 'Listmint wird monatlich abgerechnet. Credits bei Giggal.ai kaufen Sie einmal, und sie verfallen nie.' },
      { k: 'Volumen', v: 'Der größte veröffentlichte Plan ist Agency mit 50.000 Standard-Credits. Für mehr brauchen Sie ein Enterprise-Angebot.' },
      { k: 'Gateways', v: 'Listmint nennt keine Secure Email Gateways, hinter denen es prüfen kann.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai bei Catch-all-Adressen',
  catchAllProse:
    'Listmint rechnet Catch-all-Prüfungen über einen eigenen Credit-Pool ab. Im Starter-Plan für 99 $ umfasst dieser Pool 5.000 Credits im Monat. Giggal.ai hat keinen eigenen Pool dafür. Jede Adresse kostet 1 Credit, ob Catch-all oder nicht. Wenn Giggal.ai keine Antwort bekommt, ist das Ergebnis unbekannt und der Credit wird erstattet.',
  pricingHeading: 'Listmint Preise im Vergleich zu Giggal.ai',
  pricingProse:
    'Listmint Starter kostet 99 $ im Monat für 20.000 Standard-Credits und 5.000 Catch-all-Credits. Agency kostet 187 $ im Monat für 50.000 Standard-Credits und 10.000 Catch-all-Credits. Den Preis für Enterprise nennt Listmint auf Anfrage.',
  pricingExtra: [
    'Giggal.ai hat keine Planstufen. 10.000 Credits kosten 9,90 $ und 100.000 kosten 76 $. Jeden dieser Credits können Sie für Catch-all-Adressen nutzen.',
  ],
  strengths: {
    heading: 'Wann Listmint gut passt',
    intro: 'Listmint ist sinnvoll, wenn Sie Folgendes wollen:',
  },
  others: {
    heading: 'Weitere Listmint Alternativen',
    intro: 'Diese Verifizierer liefern ebenfalls ein Ergebnis für Catch-all-Adressen. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Scrubby', text: 'Prüft Catch-all-Domains und Domains hinter Gateways für 1 Credit. Die Deep Verification kostet 3 Credits und sendet echte E-Mails. Pay-as-you-go kostet 0,008 $ pro Credit.' },
      { name: 'no2bounce', text: 'Sendet Testnachrichten, um Catch-all-Postfächer zu bestätigen. 10.000 Pay-as-you-go-Credits kosten 20 $ und verfallen nie.' },
      { name: 'Allegrow', text: 'Ein Verifizierer für Vertriebsteams. Er liefert für Catch-all-Kontakte das Ergebnis gültig oder ungültig. Starter kostet 99 $ im Monat für 5.000 Kontakte.' },
    ],
  },
  testHeading: 'Prüfen Sie eine Liste aus Listmint mit Giggal.ai',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Listmint geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit dem, was Listmint geliefert hat.',
  ],
  ctaHeadline: 'Prüfen Sie Catch-all-E-Mails ohne eigenes Credit-Limit',
  faqs: [
    {
      q: 'Was kostet Listmint?',
      a: 'Listmint Starter kostet 99 $ im Monat mit 20.000 Standard-Credits und 5.000 Catch-all-Credits. Agency kostet 187 $ im Monat mit 50.000 Standard-Credits und 10.000 Catch-all-Credits. Den Preis für Enterprise nennt Listmint auf Anfrage.',
    },
    {
      q: 'Warum hat Listmint eigene Catch-all-Credits?',
      a: 'Listmint gibt an, dass seine Catch-all-Credits mehr kosten als die normalen SMTP-Credits, weil eine Catch-all-Prüfung mehr Arbeit macht. Giggal.ai berechnet 1 Credit für jede Adresse, auch für Catch-all.',
    },
    {
      q: 'Ist Giggal.ai eine gute Listmint Alternative?',
      a: 'Ja, wenn Sie Listen mit vielen Catch-all-Adressen prüfen. Giggal.ai hat kein eigenes Catch-all-Limit und kein Monatsabo. Es kostet 9,90 $ pro 10.000 Credits.',
    },
    {
      q: 'Hat Listmint eine kostenlose Testphase?',
      a: 'Listmint bietet einen kostenlosen Start an, nennt aber nicht, wie viele Credits er enthält. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.',
    },
  ],
  breadcrumb: 'Listmint Alternative',
}

export default cfg
