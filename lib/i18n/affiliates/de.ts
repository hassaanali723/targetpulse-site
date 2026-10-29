import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// German copy of the affiliate page. Source: app/(en)/affiliates/page.tsx.
// Register: "Sie", as in lib/i18n/de.ts. Money as on the German site: "50 $", "20 %".

export const AFFILIATES_DE: AffiliatesContent = {
  meta: {
    title: 'Partnerprogramm: 20 % wiederkehrende Provision | Giggal.ai',
    description:
      'Das Partnerprogramm von Giggal.ai: 20 % wiederkehrende Provision auf jede Zahlung Ihrer geworbenen Kunden, 3 Monate Zuordnung, monatliche Auszahlung.',
    ogTitle: 'Partnerprogramm für E-Mail-Verifizierung: 20 % wiederkehrend',
    ogDescription:
      'Verdienen Sie 20 % wiederkehrende Provision für jeden Kunden, den Sie an Giggal.ai vermitteln. Ohne Zeitlimit, ohne Obergrenze.',
  },
  crumb: 'Partnerprogramm',
  h1Lead: '20 % wiederkehrend verdienen',
  h1Accent: 'jeden Monat, ohne Zeitlimit',
  intro: {
    before: 'Empfehlen Sie',
    after:
      'Ihrem Publikum und erhalten Sie 20 % Provision auf jede Zahlung Ihrer geworbenen Kunden, solange diese Kunden bleiben. Keine Obergrenze, kein Ablaufdatum.',
  },
  joinCta: 'Am Partnerprogramm teilnehmen',
  howCta: 'So funktioniert es',
  stats: [
    { value: '20 %', label: 'Wiederkehrend' },
    { value: '3 Monate', label: 'Zuordnung' },
    { value: 'Monatlich', label: 'Auszahlungen' },
    { value: '50 $', label: 'Mindestauszahlung' },
  ],
  why: {
    eyebrow: 'Warum teilnehmen',
    h2: 'Eines der großzügigsten Partnerprogramme unter den E-Mail-Tools',
    sub: 'Echte wiederkehrende Einnahmen statt einer einmaligen Prämie.',
    cards: [
      {
        title: '20 % wiederkehrend',
        body: 'Sie verdienen an jeder Zahlung Ihrer geworbenen Kunden, Monat für Monat, Jahr für Jahr.',
      },
      {
        title: 'Keine Verdienstobergrenze',
        body: 'Werben Sie 10 Kunden oder 10.000. Ihr Verdienst hat keine Obergrenze.',
      },
      {
        title: '3 Monate Zuordnung',
        body: 'Die Empfehlung zählt für Sie, wenn sich die Person innerhalb von 3 Monaten nach dem Klick auf Ihren Link registriert.',
      },
      {
        title: 'Monatliche Auszahlungen',
        body: 'Sie erhalten jeden Monat eine Auszahlung per PayPal oder Wise, sobald Sie das Minimum von 50 $ erreichen.',
      },
    ],
  },
  how: {
    eyebrow: 'So funktioniert es',
    h2: 'Von der Anmeldung zur ersten Auszahlung in Tagen statt Monaten',
    steps: [
      {
        title: 'In 30 Sekunden anmelden',
        body: 'Melden Sie sich für das Programm an und erhalten Sie sofort Ihren persönlichen Empfehlungslink. Kein Gespräch, keine Wartezeit.',
      },
      {
        title: 'Link teilen',
        body: 'Bewerben Sie Giggal.ai in Ihrem Blog, in Ihrem Newsletter, auf Social Media, auf YouTube oder direkt bei Kunden, die sauberere E-Mail-Listen brauchen.',
      },
      {
        title: 'Monatlich Geld erhalten',
        body: 'Sie erhalten 20 % jeder Zahlung Ihrer geworbenen Kunden. Die Erfassung läuft automatisch, die Auszahlung erfolgt jeden Monat.',
      },
    ],
  },
  earn: {
    eyebrow: 'Ihr Potenzial',
    h2: 'So viel können Sie verdienen',
    sub: 'Berechnet mit Kunden im 100K-Tarif, dem beliebtesten Tarif (76 $/Monat). Auch die anderen Tarife bringen 20 %.',
    colCustomers: 'Geworbene Kunden',
    colPlan: 'Im Tarif',
    colEarnings: 'Ihr monatlicher Verdienst',
    perMonth: '/Monat',
    note: 'Diese Zahlen sind Beispiele. Ihr tatsächlicher Verdienst hängt davon ab, welchen Tarif Ihre geworbenen Kunden wählen.',
  },
  who: {
    eyebrow: 'Für wen',
    h2: 'Für alle, denen Zustellbarkeit wichtig ist',
    sub: 'Wenn Ihr Publikum E-Mails versendet, ist es ein Publikum für Giggal.ai.',
    cards: [
      {
        title: 'E-Mail-Marketer',
        body: 'Empfehlen Sie das Tool, dem Sie beim Bereinigen von Listen vor Kampagnen schon vertrauen.',
      },
      {
        title: 'Agenturen',
        body: 'Erzielen Sie wiederkehrende Einnahmen mit jedem Kunden, den Sie zu Giggal.ai bringen.',
      },
      {
        title: 'Kursanbieter',
        body: 'Nehmen Sie Giggal.ai in den Lehrplan Ihres Kurses zu Cold-E-Mail oder Leadgenerierung auf.',
      },
      {
        title: 'SaaS-Communitys',
        body: 'Teilen Sie es mit Ihrem Publikum aus Marketern, Gründern und Growth-Profis.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Häufige Fragen',
    items: [
      {
        q: 'Wann und wie werde ich bezahlt?',
        a: 'Auszahlungen erfolgen monatlich per PayPal oder Wise (nach Ihrer Wahl), sobald Ihr offenes Guthaben 50 $ erreicht. Es gibt keinen rollierenden Einbehalt. Sobald ein geworbener Kunde zahlt, gehört die Provision Ihnen.',
      },
      {
        q: 'Wie lange läuft die Provision?',
        a: 'So lange, wie Ihr geworbener Kunde weiter zahlt. Bleibt er 3 Jahre Kunde, erhalten Sie 3 Jahre lang 20 % jeder Zahlung. Das sind echte wiederkehrende Einnahmen.',
      },
      {
        q: 'Was passiert, wenn mein geworbener Kunde kündigt?',
        a: 'Ab dem Moment der Kündigung erhalten Sie für diesen Kunden keine Provision mehr. Schließt er später mit demselben Konto wieder ein Abo ab, erhalten Sie wieder Provision.',
      },
      {
        q: 'Wie lange ist das Zuordnungsfenster?',
        a: 'Das Tracking läuft 3 Monate ab dem Klick auf Ihren Link. Registriert sich die Person in diesem Zeitraum, wird die Empfehlung Ihnen zugeordnet.',
      },
      {
        q: 'Darf ich auf YouTube, in Blogs und mit bezahlten Anzeigen werben?',
        a: 'Ja für YouTube, Blogs, Newsletter, Social Media und Reddit. Bezahlte Anzeigen auf unsere Markenbegriffe (z. B. "Giggal.ai") sind nicht erlaubt. Alles andere ist zulässig.',
      },
      {
        q: 'Muss ich Kunde sein, um teilzunehmen?',
        a: 'Nein, aber wir empfehlen dringend, das Produkt zuerst zu testen (Sie erhalten 1.000 kostenlose Credits). So können Sie es aus eigener Erfahrung empfehlen.',
      },
      {
        q: 'Gibt es eine Mindestauszahlung?',
        a: 'Ja, 50 $. Nicht ausgezahlte Provisionen werden von Monat zu Monat übertragen, bis Sie diesen Betrag erreichen. Dann werden sie automatisch ausgezahlt.',
      },
    ],
    more: 'Noch Fragen?',
    talk: 'Kontaktieren Sie uns',
  },
  final: {
    h2: 'Möchten Sie Empfehlungen in wiederkehrende Einnahmen verwandeln?',
    text: 'Melden Sie sich in 30 Sekunden an und verdienen Sie 20 % Provision auf jede Zahlung Ihrer geworbenen Kunden.',
    checks: ['Kostenlose Teilnahme', 'Keine Freigabe nötig', 'Dauerhafte Provisionen'],
  },
}
