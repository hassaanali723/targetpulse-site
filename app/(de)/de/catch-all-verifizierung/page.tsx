import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/de/catch-all-verifizierung'
const DESC =
  'Catch-all-Verifizierung, die auf Accept-all-Domains gültig oder ungültig liefert, auch hinter Mimecast und Proofpoint. 98,5 % Genauigkeit, 1 Credit pro E-Mail.'

export const metadata: Metadata = {
  title: { absolute: 'Catch-All-Verifizierung: gültig statt riskant | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'Catch-All-Verifizierung: gültig statt riskant',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Catch-all-Verifizierung',
  h1Accent: 'Catch-all-Verifizierung',
  h1Tail: 'mit einer echten Antwort auf jede Adresse',
  intro:
    'Die meisten Verifizierer geben bei Catch-all- und Accept-all-Domains auf. Giggal.ai bestätigt, ob jedes Postfach wirklich existiert, auch hinter Sicherheits-Gateways wie Mimecast und Proofpoint, mit 98,5 % Genauigkeit.',
  toolLine: (
    <>
      Für eine einzelne Adresse nutzen Sie den{' '}
      <Link href="/de/email-adresse-pruefen" className="text-indigo-600 font-bold hover:underline">kostenlosen E-Mail-Prüfer</Link>.
    </>
  ),
  ctaPrimary: 'Catch-all-Adressen jetzt prüfen',
  ctaSecondary: { label: 'Preise ansehen', href: '/de/preise' },
  ctaNote: '1.000 Gratis-Credits zum Start. Keine Kreditkarte nötig.',
  card: {
    kicker: 'Tiefenprüfung aktiv', title: 'Ergebnisse der Liste', file: 'kontakte_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'In einer typischen Liste liegen etwa 30 % der Adressen auf Catch-all-Domains. Wir prüfen sie einzeln: die meisten sind gültig.',
    labels: { valid: 'Gültig', invalid: 'Ungültig', risky: 'Riskant' },
  },
  whatKicker: 'Der Hintergrund',
  whatTitle: 'Was ist eine Catch-all-Domain',
  whatParas: [
    'Eine Catch-all-Domain nimmt jede E-Mail an, die sie erreicht, auch an Adressen, die es nicht gibt. Der Server antwortet auf jede Adresse mit einer pauschalen Annahme, deshalb kann eine normale SMTP-Prüfung nicht sagen, ob dahinter ein echtes Postfach steckt.',
    'In einer typischen B2B-Liste liegen etwa 30 % der Kontakte auf Catch-all-Domains. Die meisten Tools erkennen das Muster, geben auf und markieren alles als riskant oder unbekannt. Übrig bleibt eine lange Liste von Kontakten, die Sie nicht sicher anschreiben können.',
    'Es bleiben zwei Möglichkeiten, beide schlecht: senden und Bounces, Spam-Traps und einen Reputationsschaden riskieren, oder löschen und echte Kunden verlieren. Die Catch-all-Verifizierung löst das Problem, indem sie die tatsächliche Existenz des Postfachs prüft, statt zu raten.',
  ],
  sameH3: 'Catch-all und Accept-all sind dasselbe',
  sameParas: [
    'Manche Verifizierer schreiben "accept all", andere "catch-all" oder "catchall". Gemeint ist eine einzige Konfiguration: eine Domain, deren Mailserver auf jeden Empfänger mit 250 OK antwortet. Welches Etikett Ihr letztes Tool auch benutzt hat, die Lösung ist dieselbe und steht auf dieser Seite.',
  ],
  howKicker: 'So funktioniert es',
  howTitle: 'Wie Giggal.ai Catch-all-E-Mails verifiziert',
  howText: 'Jede Catch-all-Adresse durchläuft mehrere Prüfebenen, die sich zu einem klaren Ergebnis verbinden. Sie sehen gültig oder ungültig, keinen technischen Bericht.',
  signals: [
    { title: 'Tiefenprüfung des Postfachs', body: 'Wir bestätigen die tatsächliche Existenz jedes Postfachs, nicht nur, dass die Domain alles annimmt. Wo eine normale SMTP-Prüfung eine pauschale Annahme sieht und aufhört, machen wir bis zu einer echten Antwort weiter.' },
    { title: 'Vertrauenssignale der Domain', body: 'Wir analysieren die Konfiguration jeder Domain: SPF-, DKIM- und DMARC-Einträge, SSL-Zertifikate und Hosting-Reputation. Gut konfigurierte Domains beherbergen deutlich häufiger echte Postfächer.' },
    { title: 'Sicherheits-Gateways', body: 'Adressen hinter Gateways wie Mimecast, Proofpoint und Barracuda werden direkt geprüft. Das Gateway verbirgt nicht mehr, ob hinter der Adresse ein echtes Postfach steht.' },
  ],
  compareKicker: 'Klare Ergebnisse',
  compareTitle: 'Von Vermutungen zu Ergebnissen',
  compareText: 'Der Unterschied zwischen einem typischen Verifizierer und Giggal.ai auf derselben Liste mit 48.000 E-Mails.',
  compare: {
    typicalLabel: 'Ein typischer Verifizierer', giggalLabel: 'Giggal.ai', count: '48.028 E-Mails geprüft', catchAllLabel: 'Catch-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Über 10.000 Catch-all-Kontakte, die Sie nicht sicher anschreiben können. Etwa 80 % davon sind echt, aber Sie wissen nicht, welche.',
    giggalNote: 'Rund 8.400 zusätzliche zustellbare Kontakte aus dem Catch-all-Stapel zurückgeholt. Jede Adresse hat ein klares Ergebnis.',
  },
  whoKicker: 'Für wen',
  whoTitle: 'Wer die Catch-all-Verifizierung nutzt',
  audience: [
    { title: 'Outreach-Teams', body: 'Sie senden nur an geprüfte Kontakte. Weniger Bounces, mehr Antworten, gesündere Versanddomains.' },
    { title: 'Agenturen', body: 'Bereinigen Sie die Listen jedes Kunden mit demselben Verifizierer, damit Reports und Zustellung planbar bleiben.' },
    { title: 'Sales Operations', body: 'Behalten Sie im CRM nur Kontakte, die Ihre Sequenzen und Updates wirklich erreichen.' },
    { title: 'Newsletter', body: 'Schützen Sie Öffnungen und Klicks, indem Sie Adressen entfernen, die echt aussehen, aber nie zugestellt werden.' },
  ],
  faqTitle: 'Häufige Fragen',
  faq: [
    { q: 'Was ist eine Catch-all-Domain?', a: 'Eine Domain, die jede gesendete E-Mail annimmt, auch an Adressen, die es nicht gibt. Der Server antwortet auf jede Adresse mit "ja, existiert", deshalb können klassische SMTP-Prüfungen nicht sagen, ob ein bestimmtes Postfach echt ist.' },
    { q: 'Kostet die Catch-all-Verifizierung zusätzliche Credits?', a: 'Nein. Sie kostet 1 Credit pro E-Mail, genau wie eine normale Prüfung.' },
    { q: 'Wie genau ist die Catch-all-Verifizierung?', a: 'Etwa 98,5 % auf Firmenlisten. Statt nur aus SMTP-Antworten zu raten, prüfen wir die tatsächliche Existenz des Postfachs, sodass das Ergebnis auch beim Versand hält.' },
    { q: 'Verlangsamt sie die Prüfung der restlichen Liste?', a: 'Nein. Die Catch-all-Prüfungen laufen parallel zur normalen Prüfung, nicht danach. Die ganze Liste ist in derselben Zeit fertig.' },
    { q: 'Kann ich nur die Catch-all-Adressen einer anderswo bereinigten Liste prüfen?', a: 'Ja. Öffnen Sie im Dashboard Catch-All Detection, fügen Sie nur die gewünschten Adressen ein oder laden Sie sie hoch und prüfen Sie diese. Der Preis ist derselbe: 1 Credit pro E-Mail.' },
    { q: 'Was passiert, wenn eine Catch-all-Prüfung "unbekannt" liefert?', a: 'Das ist selten, aber wenn wir zu keinem Ergebnis kommen, wird der Credit automatisch erstattet. Sie zahlen nur abgeschlossene Prüfungen.' },
  ],
  ctaHeadline: 'Prüfen Sie eine Liste und vergleichen Sie die Ergebnisse',
}

export default function CatchAllVerifizierungPage() {
  return <CatchAllPageL10n locale="de" content={content} />
}
