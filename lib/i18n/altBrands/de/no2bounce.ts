// German no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'no2bounce',
  path: '/de/no2bounce-alternative',
  cluster: 'altNo2bounce',
  metaTitle: 'no2bounce Alternative: no2bounce Preise im Vergleich | Giggal.ai',
  ogTitle: 'Eine no2bounce Alternative für die Catch-all-Verifizierung',
  desc: 'no2bounce berechnet 20 $ pro 10.000 Credits. Giggal.ai prüft Catch-all- und Gateway-Adressen für 9,90 $ pro 10.000, mit 1.000 Gratis-Credits ohne Karte.',
  h1: ['Eine ', 'no2bounce Alternative', ' mit niedrigerem Preis pro E-Mail'],
  heroP:
    'no2bounce ist ein E-Mail-Verifizierer mit Pay-as-you-go-Credits, die nie verfallen. Giggal.ai funktioniert genauso. Die Unterschiede liegen beim Preis, bei den Gratis-Credits und darin, wie die beiden Tools Catch-all-Adressen prüfen.',
  bluf: [
    { k: 'Preis', v: '10.000 Credits kosten bei no2bounce 20 $ und bei Giggal.ai 9,90 $.' },
    { k: 'Bei großem Volumen', v: 'Eine Million Credits kostet bei no2bounce 679 $ und bei Giggal.ai 680 $.' },
    { k: 'Gratis-Credits', v: 'no2bounce gibt 100 Gratis-Credits. Giggal.ai gibt 1.000. Bei keinem der beiden Tools brauchen Sie eine Karte.' },
    { k: 'Verfall', v: 'Bei beiden Tools verfallen die Credits nie.' },
  ],
  about: {
    heading: 'Was ist no2bounce?',
    paragraphs: [
      'no2bounce ist ein Dienst zur E-Mail-Verifizierung. Er prüft einzelne E-Mails, Listen per Massen-Upload und E-Mails, die über seine API kommen. Mit denselben Credits bezahlen Sie auch den E-Mail-Finder, die Domain-Suche und das E-Mail-Scoring.',
      'Für Catch-all-Domains sendet no2bounce kontrollierte Testnachrichten, um zu bestätigen, ob ein Postfach existiert. Der Anbieter gibt eine Genauigkeit von 99,6 % an.',
      'no2bounce lässt sich unter anderem mit HubSpot, Salesforce, Clay, Zapier, Google Sheets und Zoho CRM verbinden.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine no2bounce Alternative suchen',
    items: [
      { k: 'Preis bei 10.000', v: 'no2bounce berechnet 20 $ für 10.000 Credits. Giggal.ai berechnet 9,90 $ für dieselbe Menge.' },
      { k: 'Bei 100.000', v: '100.000 Credits kosten bei no2bounce 149 $ und bei Giggal.ai 76 $.' },
      { k: 'Gratis-Test', v: 'no2bounce gibt 100 Gratis-Credits. Giggal.ai gibt 1.000. Das reicht, um eine echte Stichprobe zu testen.' },
    ],
  },
  catchAllHeading: 'Wie no2bounce und Giggal.ai Catch-all-Adressen prüfen',
  catchAllProse:
    'no2bounce sendet kontrollierte Testnachrichten über eigene Server, um Catch-all-Postfächer zu bestätigen. Giggal.ai liefert für Catch-all-Adressen ein Ergebnis. Das kostet 1 Credit pro Adresse, ohne Aufpreis. Es prüft außerdem Adressen hinter 15 namentlich genannten Secure Email Gateways, darunter Proofpoint, Mimecast und Barracuda.',
  pricingHeading: 'no2bounce Preise im Vergleich zu Giggal.ai',
  pricingProse:
    'no2bounce verkauft Pay-as-you-go-Pakete von 10.000 Credits für 20 $ bis zu 50 Millionen Credits. 100.000 kosten 149 $ und eine Million kostet 679 $. Monatsabos kosten 15 % weniger, Jahresabos 20 % weniger.',
  pricingExtra: [
    'Giggal.ai verkauft 10.000 Credits für 9,90 $, 100.000 für 76 $ und eine Million für 680 $. Sie müssen keinen Plan wählen. Bei beiden Tools verfallen die Credits nie.',
  ],
  strengths: {
    heading: 'Wofür no2bounce gut passt',
    intro: 'no2bounce ist eine vernünftige Wahl für diese Anforderungen:',
  },
  others: {
    heading: 'Weitere no2bounce Alternativen',
    intro: 'Diese Verifizierer verkaufen ebenfalls Credits, die nie verfallen. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 Credits kosten 29 $ und eine Million kostet 579 $. Mit einer geschäftlichen E-Mail-Adresse gibt es 1.000 Gratis-Credits im Monat.' },
      { name: 'QuickEmailVerification', text: '10.000 Credits kosten 60 $. Es gibt jeden Tag 100 Gratis-Credits.' },
      { name: 'Scrubby', text: 'Pay-as-you-go kostet 0,008 $ pro Credit. Für schwer prüfbare Adressen gibt es eine Deep Verification.' },
    ],
  },
  testHeading: 'Vergleichen Sie no2bounce und Giggal.ai anhand einer Liste',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit no2bounce geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit den Ergebnissen von no2bounce.',
  ],
  ctaHeadline: 'Dieselbe Aufgabe zu einem niedrigeren Preis pro E-Mail',
  faqs: [
    {
      q: 'Was kostet no2bounce?',
      a: 'Die Pay-as-you-go-Pakete von no2bounce beginnen bei 20 $ für 10.000 Credits. 100.000 kosten 149 $ und eine Million kostet 679 $. Monatsabos kosten 15 % weniger, Jahresabos 20 % weniger.',
    },
    {
      q: 'Ist no2bounce kostenlos?',
      a: 'no2bounce gibt 100 Gratis-Credits ohne Karte, und sie verfallen nie. Danach kaufen Sie Credits. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.',
    },
    {
      q: 'Ist Giggal.ai eine gute no2bounce Alternative?',
      a: 'Ja. Beide verkaufen Credits, die nie verfallen. Giggal.ai kostet bei 10.000 und 100.000 Credits weniger und gibt zehnmal so viele Gratis-Credits. Bei einer Million Credits sind die beiden Preise fast gleich.',
    },
    {
      q: 'Verfallen Credits bei no2bounce?',
      a: 'Nein. Bei no2bounce bleiben gekaufte Credits in Ihrem Konto, bis Sie sie nutzen. Credits aus einem Abo gelten, solange das Abo aktiv ist. Credits bei Giggal.ai verfallen nie.',
    },
  ],
  breadcrumb: 'no2bounce Alternative',
}

export default cfg
