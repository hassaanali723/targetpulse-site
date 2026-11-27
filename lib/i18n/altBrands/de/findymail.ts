// German Findymail alternative page. Translated from
// app/(en)/findymail-alternative (2026-11-27). The competitor's words
// (free tier, expiry, strengths) match lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'findymail',
  path: '/de/findymail-alternative',
  cluster: 'altFindymail',
  metaTitle: 'Findymail Alternativen und Findymail Preise | Giggal.ai',
  ogTitle: 'Findymail Alternativen und Preise im Vergleich',
  desc: 'Findymail Preise: ab 99 $ im Monat. Vergleichen Sie Findymail Alternativen und Konkurrenten, etwa Giggal.ai, einen Verifizierer für 9,90 $ pro 10.000 Credits.',
  h1: ['Eine ', 'Findymail Alternative', ' zum Prüfen von E-Mails, die Sie schon haben'],
  heroP:
    'Findymail findet B2B-E-Mails und prüft sie. Die Pläne beginnen bei 99 $ im Monat. Wenn Sie schon eine Liste haben und sie nur prüfen wollen, macht Giggal.ai das für 9,90 $ pro 10.000 E-Mails. Sie kaufen Credits einmal, und sie verfallen nie.',
  bluf: [
    { k: 'Hauptaufgabe', v: 'Findymail findet E-Mails und prüft sie dann. Giggal.ai prüft nur.' },
    { k: 'Preis', v: 'Findymail kostet ab 99 $ im Monat. Giggal.ai kostet 9,90 $ für 10.000 Credits, einmal bezahlt.' },
    { k: 'Gratis-Credits', v: 'Findymail gibt 10 Gratis-Credits. Giggal.ai gibt 1.000, ohne Karte.' },
    { k: 'Garantie', v: 'Findymail verspricht eine Bounce-Rate unter 5 % und erstattet Credits, wenn sie darüber liegt.' },
  ],
  about: {
    heading: 'Was ist Findymail?',
    paragraphs: [
      'Findymail ist ein B2B-E-Mail-Finder. Es findet geschäftliche E-Mail-Adressen anhand von Name und Firma, einer LinkedIn-URL oder einer Suche im Sales Navigator. Jede gefundene E-Mail wird geprüft, bevor Sie sie bekommen.',
      'Es hat eine Chrome-Erweiterung, ein Add-on für Google Sheets, einen Massen-Upload, eine API und eine Suche nach Telefonnummern. Es lässt sich unter anderem mit Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead und Lemlist verbinden.',
      'Findymail verkauft außerdem Verifier-Credits für Listen aus anderen Quellen. Nach eigener Aussage verifiziert es Catch-all-E-Mails, die andere Tools als riskant markieren.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Findymail Preise 2026',
  pricingProse:
    'Findymail hat zwei Arten von Plänen. Die nutzungsbasierten Pläne sind Individual für 99 $ im Monat, Pro für 249 $, Team für 399 $ und Scale für 999 $. Diese Pläne nennen Nutzerplätze und Dateigrößen, aber keine Credit-Zahl.',
  pricingExtra: [
    'Der Starter-Plan mit Credits kostet 99 $ im Monat. Er enthält 5.000 Finder-Credits und 5.000 Verifier-Credits. Größere Volumen laufen über Enterprise. Den Preis dafür nennt Findymail auf Anfrage. Ungenutzte Credits werden übertragen, bis zum Zweifachen des Monatskontingents.',
    'Giggal.ai hat kein Monatsabo. 10.000 Credits kosten 9,90 $, 100.000 kosten 76 $ und eine Million kostet 680 $.',
  ],
  reasons: {
    heading: 'Warum Teams eine Findymail Alternative suchen',
    items: [
      { k: 'Nur prüfen', v: 'Viele Teams haben schon eine Liste. Diese Teams brauchen keinen E-Mail-Finder, nur einen Verifizierer.' },
      { k: 'Volumen', v: 'Starter enthält 5.000 Verifier-Credits im Monat. Für größere Volumen brauchen Sie ein Enterprise-Angebot.' },
      { k: 'Monatliche Rechnung', v: 'Findymail rechnet jeden Monat ab. Credits bei Giggal.ai kaufen Sie einmal, und sie verfallen nie.' },
      { k: 'Kleines Testkontingent', v: 'Findymail gibt 10 Gratis-Credits. Das ist zu wenig, um eine echte Liste zu testen.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai bei Catch-all-E-Mails',
  catchAllProse:
    'Findymail verifiziert Catch-all-E-Mails, die andere Tools als riskant markieren. Giggal.ai liefert ebenfalls ein Ergebnis für Catch-all-Adressen, für 1 Credit pro Adresse. Es prüft außerdem Adressen hinter 15 namentlich genannten Secure Email Gateways wie Proofpoint, Mimecast und Barracuda. Findymail gibt keine Unterstützung für Gateways an.',
  strengths: {
    heading: 'Was Findymail gut macht',
    intro: 'Findymail ist die bessere Wahl, wenn Sie Folgendes brauchen:',
  },
  others: {
    heading: 'Weitere Findymail Alternativen und Konkurrenten',
    intro: 'Diese Tools finden oder prüfen ebenfalls B2B-E-Mails. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Ein E-Mail-Finder mit Plänen ab 29 $ im Monat für 400 Credits. Er verspricht, dass mindestens 97 % der gefundenen E-Mails keinen Hard Bounce erzeugen.' },
      { name: 'LeadMagic', text: 'Eine Plattform für B2B-Daten mit E-Mail-Suche, Mobilnummern und Firmendaten. Die Pläne beginnen bei 99 $ im Monat für 5.000 gemeinsame Credits.' },
      { name: 'Allegrow', text: 'Ein Verifizierer für Vertriebsteams, der auch die Posteingangsplatzierung und den Zustand der Domain verfolgt. Starter kostet 99 $ im Monat für 5.000 Kontakte.' },
    ],
  },
  testHeading: 'Prüfen Sie einen Export aus Findymail mit Giggal.ai',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Findymail geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Zeilen mit dem, was Findymail für dieselben Kontakte geliefert hat.',
  ],
  ctaHeadline: 'Prüfen Sie Ihre Liste ohne Abo',
  faqs: [
    {
      q: 'Was kostet Findymail?',
      a: 'Die Pläne von Findymail beginnen bei 99 $ im Monat. Der Starter-Plan mit Credits enthält 5.000 Finder-Credits und 5.000 Verifier-Credits. Die nutzungsbasierten Pläne reichen von 99 $ bis 999 $ im Monat. Den Preis für größere Volumen nennt Findymail auf Anfrage.',
    },
    {
      q: 'Hat Findymail einen kostenlosen Plan?',
      a: 'Findymail gibt 10 Gratis-Credits zum Testen, ohne Karte. Einen dauerhaften kostenlosen Plan gibt es nicht. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.',
    },
    {
      q: 'Was sind die besten Findymail Alternativen?',
      a: 'Zum Finden von E-Mails sind Anymail Finder und LeadMagic häufige Optionen. Wenn Sie eine vorhandene Liste prüfen wollen, kostet Giggal.ai 9,90 $ pro 10.000 Credits, ohne Abo.',
    },
    {
      q: 'Ist Findymail gut für die E-Mail-Verifizierung?',
      a: 'Ja. Findymail prüft jede E-Mail, die es findet, und verspricht eine Bounce-Rate unter 5 %. Starter enthält 5.000 Verifier-Credits im Monat. Große Listen brauchen deshalb einen Enterprise-Plan oder einen anderen Verifizierer.',
    },
    {
      q: 'Kann Giggal.ai wie Findymail E-Mails finden?',
      a: 'Nein. Giggal.ai prüft nur. Finden Sie die E-Mails zuerst und prüfen Sie die Liste dann mit Giggal.ai, bevor Sie E-Mails versenden.',
    },
    {
      q: 'Verfallen die Credits bei Findymail?',
      a: 'Ungenutzte Credits werden von Monat zu Monat übertragen, bis zum Zweifachen Ihres Monatskontingents. Credits bei Giggal.ai verfallen nie.',
    },
  ],
  breadcrumb: 'Findymail Alternative',
}

export default cfg
