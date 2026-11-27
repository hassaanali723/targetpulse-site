// German MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). myemailverifier.com blocked
// our check on 2026-11-27, so its prices are from the August 2026 check and the
// page says so. Competitor words come from lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'myemailverifier',
  path: '/de/myemailverifier-alternative',
  cluster: 'altMyemailverifier',
  metaTitle: 'MyEmailVerifier Alternative: MyEmailVerifier Preise | Giggal.ai',
  ogTitle: 'Eine MyEmailVerifier Alternative für B2B-Listen',
  desc: 'MyEmailVerifier gibt 100 Gratis-Credits pro Tag, meldet Catch-all-Adressen aber nur als Status. Giggal.ai liefert dafür ein Ergebnis, zu 9,90 $ pro 10.000.',
  h1: ['Eine ', 'MyEmailVerifier Alternative', ' für B2B-Listen mit Catch-all-Domains'],
  heroP:
    'MyEmailVerifier ist ein günstiger E-Mail-Verifizierer mit 100 Gratis-Credits pro Tag. Catch-all-Adressen bekommen einen eigenen Status und werden nicht bestätigt. Giggal.ai liefert für diese Adressen ein Ergebnis, zu 9,90 $ pro 10.000 E-Mails.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier meldet diese Adressen nur mit dem Status Catch-all. Giggal.ai liefert ein Ergebnis.' },
    { k: 'Preis', v: '10.000 Credits kosten bei MyEmailVerifier 15 $ und bei Giggal.ai 9,90 $.' },
    { k: 'Bei großem Volumen', v: 'Eine Million Credits kostet bei MyEmailVerifier 349 $ und bei Giggal.ai 680 $.' },
    { k: 'Gratis-Credits', v: 'MyEmailVerifier gibt 100 pro Tag. Giggal.ai gibt einmalig 1.000, ohne Karte.' },
  ],
  about: {
    heading: 'Was ist MyEmailVerifier?',
    paragraphs: [
      'MyEmailVerifier ist ein Dienst zur E-Mail-Verifizierung von myemailverifier.com. Das Tool prüft Listen per Massen-Upload und einzelne E-Mails und bietet eine API.',
      'MyEmailVerifier gibt jeden Tag 100 Gratis-Credits. Bezahlte Credits beginnen bei 4 $ für 1.000 und verfallen nie.',
      'Catch-all-Adressen bekommen einen eigenen Status: Catch-all. MyEmailVerifier bestätigt nicht, ob diese Postfächer existieren.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine MyEmailVerifier Alternative suchen',
    items: [
      { k: 'Catch-all', v: 'Catch-all-Adressen kommen ohne klare Antwort zurück. Bei B2B-Listen kann das ein großer Teil der Liste sein.' },
      { k: 'Gateways', v: 'MyEmailVerifier nennt weder Proofpoint noch Mimecast noch andere Gateways, hinter denen es prüfen kann.' },
    ],
  },
  catchAllHeading: 'Catch-all-E-Mails: MyEmailVerifier vs Giggal.ai',
  catchAllProse:
    'Viele Firmendomains nehmen jede Adresse an. Eine einfache Prüfung kann deshalb eine echte Adresse nicht von einer falschen unterscheiden. MyEmailVerifier markiert diese Adressen als Catch-all und überlässt Ihnen die Entscheidung. Giggal.ai prüft sie weiter und liefert eines der vier Ergebnisse weiter unten, für 1 Credit pro Adresse.',
  pricingHeading: 'MyEmailVerifier Preise im Vergleich zu Giggal.ai',
  pricingProse:
    'MyEmailVerifier verkauft Credits, die nie verfallen. Bei unserer Prüfung im August 2026 kosteten 1.000 Credits 4 $, 10.000 kosteten 15 $, 100.000 kosteten 99 $ und eine Million kostete 349 $.',
  pricingExtra: [
    'Giggal.ai verkauft 10.000 Credits für 9,90 $, 100.000 für 76 $ und eine Million für 680 $. Bei einer Million ist MyEmailVerifier günstiger. Giggal.ai liefert zusätzlich ein Ergebnis für Catch-all- und Gateway-Adressen.',
  ],
  strengths: {
    heading: 'Wofür MyEmailVerifier gut passt',
    intro: 'MyEmailVerifier ist für manche Listen eine gute Wahl:',
  },
  others: {
    heading: 'Weitere MyEmailVerifier Alternativen',
    intro: 'Diese Verifizierer haben ebenfalls niedrige Preise oder tägliche Gratis-Credits. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Gibt ebenfalls 100 Gratis-Credits pro Tag. 10.000 Credits ohne Verfallsdatum kosten 60 $.' },
      { name: 'Bounceless', text: 'Gibt 1.000 Gratis-Credits im Monat mit einer geschäftlichen E-Mail-Adresse. 10.000 Credits kosten 29 $. Hinweise zu Catch-all sind im Preis enthalten.' },
      { name: 'no2bounce', text: '10.000 Credits kosten 20 $ und verfallen nie. Es sendet Testnachrichten, um Catch-all-Postfächer zu bestätigen.' },
    ],
  },
  testHeading: 'Prüfen Sie Ihre Catch-all-Zeilen mit Giggal.ai',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit MyEmailVerifier geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Zeilen, die MyEmailVerifier als Catch-all markiert hat.',
  ],
  ctaHeadline: 'Ein Ergebnis für Catch-all-Adressen',
  faqs: [
    {
      q: 'Was kostet MyEmailVerifier?',
      a: 'Bei unserer Prüfung im August 2026 kosteten 1.000 Credits 4 $, 10.000 kosteten 15 $, 100.000 kosteten 99 $ und eine Million kostete 349 $. Die Credits verfallen nie.',
    },
    {
      q: 'Ist MyEmailVerifier kostenlos?',
      a: 'Es gibt jeden Tag 100 Gratis-Credits. Die täglichen Credits erneuern sich, statt nach einer Testphase zu enden. Giggal.ai gibt einmalig 1.000 Gratis-Credits, ohne Karte.',
    },
    {
      q: 'Prüft MyEmailVerifier Catch-all-E-Mails?',
      a: 'Es erkennt Catch-all-Domains und gibt den Status Catch-all zurück. Es bestätigt das Postfach nicht. Giggal.ai liefert für Catch-all-Adressen ein Ergebnis und berechnet 1 Credit pro Adresse.',
    },
    {
      q: 'Verfallen die Credits bei Giggal.ai?',
      a: 'Nein. Credits bei Giggal.ai verfallen nie. Auch die Credits von MyEmailVerifier verfallen nie.',
    },
  ],
  breadcrumb: 'MyEmailVerifier Alternative',
}

export default cfg
