// German Anymail Finder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). The competitor's words
// (free tier, expiry, strengths) match lib/i18n/alternativesL10n.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'de',
  slug: 'anymailfinder',
  path: '/de/anymailfinder-alternative',
  cluster: 'altAnymailfinder',
  metaTitle: 'Anymailfinder Alternative für E-Mail-Verifizierung | Giggal.ai',
  ogTitle: 'Eine Anymailfinder Alternative zum Prüfen von E-Mail-Listen',
  desc: 'Sie suchen eine Anymailfinder Alternative? Vergleichen Sie Anymail Finder Preise mit Giggal.ai, einem Pay-as-you-go-Verifizierer für 9,90 $ pro 10.000 Credits.',
  h1: ['Eine ', 'Anymailfinder Alternative', ' für Listen, die Sie schon haben'],
  heroP:
    'Anymail Finder ist darauf ausgelegt, E-Mail-Adressen zu finden. Der Verifizierer ist ein Zusatzwerkzeug und wird über ein Monatsabo bezahlt. Wenn Sie Ihre Liste schon haben und sie nur prüfen wollen, macht Giggal.ai das für 9,90 $ pro 10.000 E-Mails, ohne Abo.',
  bluf: [
    { k: 'Hauptaufgabe', v: 'Anymail Finder findet E-Mails. Giggal.ai prüft E-Mails, die Sie schon haben.' },
    { k: 'Preis', v: 'Eine Prüfung mit dem Verifizierer kostet 0,2 Credit, in Plänen ab 29 $ im Monat. Giggal.ai kostet 9,90 $ für 10.000, einmal bezahlt.' },
    { k: 'Credits', v: 'Credits bei Anymail Finder verfallen, wenn Sie kündigen. Credits bei Giggal.ai verfallen nie.' },
    { k: 'Unbekannt', v: 'Anymail Finder berechnet jede Prüfung. Giggal.ai erstattet den Credit bei unbekannten Ergebnissen.' },
  ],
  about: {
    heading: 'Was ist Anymail Finder?',
    paragraphs: [
      'Anymail Finder, auch Anymailfinder geschrieben, ist ein E-Mail-Finder für den B2B-Vertrieb. Sie geben einen Namen und eine Firma ein, und es liefert eine verifizierte geschäftliche E-Mail. Es kann auch nach Domain, Jobtitel oder LinkedIn-URL suchen.',
      'Es hat eine Chrome-Erweiterung, einen Massen-Upload für bis zu 100.000 Zeilen und eine API. Die Suche nach der E-Mail einer Person kostet 1 Credit, und zwar nur, wenn eine verifizierte E-Mail gefunden wird.',
      'Anymail Finder hat außerdem einen E-Mail-Verifizierer für Listen aus anderen Quellen. Jede Prüfung kostet 0,2 Credit und wird jedes Mal berechnet. Er liefert die Ergebnisse gültig, riskant oder ungültig.',
    ],
  },
  reasons: {
    heading: 'Warum Nutzer eine Anymailfinder Alternative suchen',
    items: [
      { k: 'Monatsabo', v: 'Ihre Credits bleiben nur erhalten, solange Ihr Abo läuft. Wenn Sie kündigen, verfallen sie am Ende des Abrechnungszeitraums.' },
      { k: 'Pro Prüfung', v: 'Der Verifizierer berechnet 0,2 Credit für jede Prüfung, auch für Adressen, die er nicht bestätigen kann.' },
      { k: 'Karte für die Testphase', v: 'Für die Testphase von 7 Tagen brauchen Sie eine Karte. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.' },
      { k: 'Gateways', v: 'Anymail Finder gibt keine Unterstützung für Secure Email Gateways wie Proofpoint oder Mimecast an.' },
    ],
  },
  catchAllHeading: 'Wie Anymail Finder und Giggal.ai Catch-all-E-Mails behandeln',
  catchAllProse:
    'Anymail Finder gibt an, die meisten Catch-all-Adressen als gültig oder ungültig zu verifizieren. Die wenigen, die es nicht erreicht, bleiben riskant. Giggal.ai liefert ebenfalls ein Ergebnis für Catch-all-Adressen, für 1 Credit pro Adresse. Es prüft außerdem Adressen hinter 15 benannten Secure Email Gateways. Wenn Giggal.ai keine Antwort bekommt, ist das Ergebnis unbekannt und Sie bekommen den Credit zurück.',
  pricingHeading: 'Anymail Finder Preise für die E-Mail-Verifizierung',
  pricingProse:
    'Anymail Finder verkauft Monatsabos von 29 $ für 400 Credits bis 799 $ für 100.000 Credits. Bei jährlicher Zahlung sparen Sie 33 %. Eine Prüfung mit dem Verifizierer kostet 0,2 Credit. 10.000 Prüfungen verbrauchen also 2.000 Credits.',
  pricingExtra: [
    'Damit passen 10.000 Prüfungen im Monat in den Plan für 89 $ und 100.000 Prüfungen in den Plan für 299 $. Ungenutzte Credits werden übertragen, solange das Abo läuft. Giggal.ai verkauft 10.000 Credits für 9,90 $ und 100.000 für 76 $, einmal bezahlt und ohne Verfallsdatum.',
  ],
  strengths: {
    heading: 'Wann Anymail Finder die bessere Wahl ist',
    intro: 'Anymail Finder kann Dinge, die Giggal.ai nicht kann. Wählen Sie es für diese Zwecke:',
  },
  others: {
    heading: 'Weitere Anymailfinder Alternativen',
    intro: 'Diese Tools finden E-Mails, prüfen sie oder beides. Die Preise stammen von den Websites der Anbieter am 27. November 2026.',
    items: [
      { name: 'Findymail', text: 'Findet und prüft E-Mails, mit einer Chrome-Erweiterung für LinkedIn und den Sales Navigator. Starter kostet 99 $ im Monat für 5.000 Finder-Credits und 5.000 Verifier-Credits.' },
      { name: 'LeadMagic', text: 'Eine Plattform für B2B-Daten mit E-Mail-Suche, Mobilnummern und Validierung. Die Validierung kostet 0,25 Credit pro eindeutigem Ergebnis, in Plänen ab 99 $ im Monat.' },
      { name: 'Scrubby', text: 'Ein Verifizierer für Catch-all-Adressen und Adressen hinter Gateways. Pay-as-you-go-Credits kosten 0,008 $ pro Stück und verfallen nie.' },
    ],
  },
  testHeading: 'Prüfen Sie einen Export aus Anymail Finder mit Giggal.ai',
  testSteps: [
    'Exportieren Sie eine Liste, die Sie schon mit Anymail Finder geprüft haben.',
    'Prüfen Sie sie hier mit den 1.000 Gratis-Credits. Ohne Karte.',
    'Vergleichen Sie die Zeilen, die Anymail Finder als riskant markiert hat, mit den Ergebnissen von Giggal.ai.',
  ],
  ctaHeadline: 'Prüfen Sie die E-Mails, die Sie schon gefunden haben',
  faqs: [
    {
      q: 'Was ist die beste Anymailfinder Alternative?',
      a: 'Das hängt von der Aufgabe ab. Zum Finden von E-Mails sehen Sie sich Findymail oder LeadMagic an. Wenn Sie eine vorhandene Liste prüfen wollen, kostet Giggal.ai 9,90 $ pro 10.000 Credits, ohne Abo und mit Credits, die nie verfallen.',
    },
    {
      q: 'Was kostet Anymail Finder?',
      a: 'Die Monatsabos reichen von 29 $ für 400 Credits bis 799 $ für 100.000 Credits. Bei jährlicher Zahlung sparen Sie 33 %. Die Prüfung einer E-Mail aus einer anderen Quelle kostet 0,2 Credit.',
    },
    {
      q: 'Hat Anymail Finder eine kostenlose Testphase?',
      a: 'Ja. Es gibt eine Testphase von 7 Tagen mit 100 Credits. Sie hinterlegen eine Karte, die geprüft, aber nicht belastet wird. Giggal.ai gibt 1.000 Gratis-Credits ohne Karte.',
    },
    {
      q: 'Kann Giggal.ai wie Anymail Finder E-Mail-Adressen finden?',
      a: 'Nein. Giggal.ai prüft nur Adressen, die Sie schon haben. Nutzen Sie zuerst einen E-Mail-Finder und prüfen Sie die Liste dann mit Giggal.ai, bevor Sie E-Mails versenden.',
    },
    {
      q: 'Verfallen die Credits bei Anymail Finder?',
      a: 'Sie werden ohne Obergrenze übertragen, solange Ihr Abo läuft. Wenn Sie kündigen, verfallen sie am Ende des Abrechnungszeitraums. Credits bei Giggal.ai verfallen nie.',
    },
  ],
  breadcrumb: 'Anymail Finder Alternative',
}

export default cfg
