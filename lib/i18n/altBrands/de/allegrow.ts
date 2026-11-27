// German Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). The competitor's words (trial, strengths) match
// lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'allegrow',
  path: '/de/allegrow-alternative',
  cluster: 'altAllegrow',
  metaTitle: 'Allegrow Alternative: Allegrow Preise im Vergleich | Giggal.ai',
  ogTitle: 'Eine Allegrow Alternative, die Sie pro E-Mail bezahlen',
  desc: 'Die Allegrow Preise beginnen bei 99 $ im Monat für 5.000 Kontakte. Giggal.ai prüft Catch-all- und Gateway-Adressen für 9,90 $ pro 10.000. Credits verfallen nie.',
  h1: ['Eine ', 'Allegrow Alternative', ', die Sie pro E-Mail bezahlen'],
  heroP:
    'Allegrow ist eine Plattform für E-Mail-Verifizierung und Zustellbarkeit, die sich an Vertriebsteams richtet. Sie wird als Monatsabo ab 99 $ für 5.000 Kontakte verkauft. Giggal.ai prüft E-Mails mit Credits, die Sie einmal kaufen. 10.000 Credits kosten 9,90 $ und verfallen nie.',
  bluf: [
    { k: 'Abrechnung', v: 'Allegrow ist ein Monatsabo. Credits bei Giggal.ai kaufen Sie einmal.' },
    { k: 'Preis', v: 'Allegrow Starter kostet 99 $ im Monat für 5.000 Kontakte. Giggal.ai kostet 9,90 $ für 10.000.' },
    { k: 'Catch-all', v: 'Beide liefern für Catch-all-Adressen das Ergebnis gültig oder ungültig. Beide nennen Proofpoint und Mimecast als Gateways, hinter denen sie prüfen.' },
    { k: 'Weitere Tools', v: 'Allegrow überwacht auch die Posteingangsplatzierung und den Zustand der Domain. Giggal.ai tut das nicht.' },
  ],
  about: {
    heading: 'Was ist Allegrow?',
    paragraphs: [
      'Allegrow ist eine Plattform für B2B-E-Mail-Verifizierung für Vertriebs- und Revenue-Teams. Sie prüft Kontakte, auch Catch-all-Adressen, und liefert das Ergebnis gültig oder ungültig. Nach eigener Aussage sendet Allegrow nie E-Mails, um eine Catch-all-Adresse zu prüfen.',
      'Außerdem überwacht Allegrow die Absender-Reputation und die Posteingangsplatzierung verbundener Postfächer. Es lässt sich mit Outreach, Salesloft, HubSpot, Apollo, ZoomInfo und Clay verbinden.',
      'Allegrow bietet SOC-2-Berichte an. SSO gibt es als Zusatzoption im höchsten Plan.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Allegrow Preise 2026',
  pricingProse:
    'Allegrow Starter kostet 99 $ im Monat für 5.000 Kontakte. Zusätzliche Kontakte kosten 8 $ pro 1.000. Scale Plus Unlimited kostet 1.340 $ im Monat bei jährlicher Zahlung, ohne Credit-Limit. Den Preis für einen API-Plan gibt es auf Anfrage.',
  pricingExtra: [
    '10.000 Kontakte im Monat kosten mit Starter also 139 $. Das haben wir aus den veröffentlichten Preisen berechnet. Allegrow bietet diesen Plan nicht an. Giggal.ai verkauft 10.000 Credits für 9,90 $ und 100.000 für 76 $, jeweils als Einmalkauf.',
  ],
  reasons: {
    heading: 'Warum Teams eine Allegrow Alternative suchen',
    items: [
      { k: 'Monatliche Kosten', v: 'Starter kostet jeden Monat 99 $. Teams, die nur ein paar Mal im Jahr prüfen, zahlen für Monate, die sie nicht nutzen.' },
      { k: 'Integrationen', v: 'Native Integrationen für HubSpot, Outreach und Salesloft gibt es erst mit Scale Plus. Starter verbindet sich per API-Schlüssel mit Clay.' },
      { k: 'Grenzen der Testphase', v: 'Die 14-tägige Testphase umfasst 1.000 Adressen, ohne Integrationen und ohne API-Zugang.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai bei Catch-all- und Gateway-Adressen',
  catchAllProse:
    'Allegrow und Giggal.ai liefern beide für Catch-all-Adressen das Ergebnis gültig oder ungültig. Beide nennen außerdem Proofpoint und Mimecast unter den Gateways, hinter denen sie prüfen. Der Hauptunterschied ist die Abrechnung. Allegrow nutzt ein monatliches Kontingent an Kontakten. Giggal.ai berechnet 1 Credit pro Adresse. Diese Credits verfallen nie.',
  strengths: {
    heading: 'Was Allegrow gut macht',
    intro: 'Allegrow kann mehr als Verifizierung. Für diese Anforderungen ist es die bessere Wahl:',
  },
  others: {
    heading: 'Weitere Allegrow Alternativen',
    intro: 'Diese Tools prüfen ebenfalls Catch-all-Adressen. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Scrubby', text: 'Prüft Catch-all-Domains und Domains hinter Gateways. Pay-as-you-go kostet 0,008 $ pro Credit, und Monatspläne beginnen bei 47 $.' },
      { name: 'Listmint', text: 'Prüft Catch-all-Adressen mit einem eigenen Credit-Pool. Starter kostet 99 $ im Monat für 20.000 Standard-Credits und 5.000 Catch-all-Credits.' },
      { name: 'Bounceless', text: 'Hinweise zu Catch-all sind in der Prüfung für 1 Credit enthalten. Dazu kommen Tools für die Posteingangsplatzierung. 10.000 Credits kosten 29 $.' },
    ],
  },
  testHeading: 'Testen Sie Giggal.ai im Vergleich zu Ihren Ergebnissen aus Allegrow',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Allegrow geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Catch-all-Ergebnisse mit denen von Allegrow für dieselben Kontakte.',
  ],
  ctaHeadline: 'Prüfen Sie dieselben schwierigen Adressen und zahlen Sie pro E-Mail',
  faqs: [
    {
      q: 'Was kostet Allegrow?',
      a: 'Allegrow Starter kostet 99 $ im Monat für 5.000 Kontakte. Zusätzliche Kontakte kosten 8 $ pro 1.000. Scale Plus Unlimited kostet 1.340 $ im Monat bei jährlicher Zahlung. Den Preis für den API-Plan gibt es auf Anfrage.',
    },
    {
      q: 'Hat Allegrow eine kostenlose Testphase?',
      a: 'Ja. Allegrow hat eine 14-tägige Testphase für bis zu 1.000 Adressen, ohne Karte. Integrationen und API-Zugang sind in der Testphase nicht enthalten.',
    },
    {
      q: 'Ist Giggal.ai eine gute Allegrow Alternative?',
      a: 'Ja, wenn Sie nur Verifizierung brauchen. Giggal.ai liefert für Catch-all- und Gateway-Adressen ein Ergebnis und kostet 9,90 $ pro 10.000. Es überwacht weder die Posteingangsplatzierung noch die Absender-Reputation.',
    },
    {
      q: 'Sendet Allegrow E-Mails, um Catch-all-Adressen zu prüfen?',
      a: 'Nein. Nach eigener Aussage sendet Allegrow nie E-Mails, um eine Catch-all-Adresse zu prüfen.',
    },
    {
      q: 'Hat Allegrow einen unbegrenzten Plan?',
      a: 'Ja. Scale Plus Unlimited kostet 1.340 $ im Monat bei jährlicher Zahlung, mit unbegrenzter Verifizierung über Integrationen oder CSV. Giggal.ai hat keinen unbegrenzten Plan.',
    },
  ],
  breadcrumb: 'Allegrow Alternative',
}

export default cfg
