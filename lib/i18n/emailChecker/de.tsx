import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// German copy for /de/email-adresse-pruefen. Same sections, order and facts as
// the English /email-checker page. Keyword family from the German page:
// E-Mail-Adresse prüfen (primary), E-Mail prüfen, Mail-Adresse prüfen,
// E-Mail überprüfen, E-Mail-Prüfer, E-Mail-Checker, kostenlos, gültig.
// Formal address (Sie), as on the previous German page.

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'E-Mail-Adresse prüfen:',
    h1Rest: 'kostenloser E-Mail-Prüfer',
    intro:
      'Prüfen oder verifizieren Sie jede E-Mail-Adresse kostenlos online. Fügen Sie die Adresse ein, um Format, Mailserver und Postfach zu testen. Auf Catch-all-Domains prüft dieser E-Mail-Checker weiter und liefert gültig oder ungültig.',
  },
  tool: {
    caption: 'Ohne Anmeldung, ohne Karte. Eine Adresse pro Prüfung.',
    freeCredits:
      'Mehr Prüfungen nötig? Erstellen Sie ein Konto und erhalten Sie 1.000 kostenlose Credits. Keine Karte nötig.',
  },
  ratings: {
    reviews: (count) => `${count} Bewertungen`,
    ratedAria: (rating, platform) => `Giggal.ai mit ${rating.replace('.', ',')} von 5 auf ${platform} bewertet`,
  },
  awards: {
    headingLead: 'Giggal.ai ist ausgezeichnet als',
    headingRest: 'Leader auf SourceForge und Slashdot',
    showLabel: '{badge} anzeigen',
  },
  steps: {
    title: 'So prüfen Sie, ob eine E-Mail-Adresse gültig ist',
    intro:
      'Eine vollständige E-Mail-Prüfung, auch E-Mail-Verifizierung genannt, hat vier Schritte. Viele "geprüfte" Listen bouncen trotzdem, weil manche Checker nur den ersten Schritt ausführen.',
    items: [
      {
        title: 'Format',
        text: 'Ist die Adresse richtig aufgebaut: ein @, ein gültiger Name davor, eine Domain mit Endung wie .com oder .de? Dieser Schritt findet Tippfehler und sonst nichts.',
      },
      {
        title: 'Mailserver',
        text: 'Veröffentlicht die Domain Mailserver-Einträge (MX)? Ohne MX-Einträge kann dort kein Postfach existieren. Die Adresse ist dann ungültig, bevor eine Nachricht gesendet wird.',
      },
      {
        title: 'Postfach',
        text: 'Der Checker fragt den Mailserver, ob dieses Postfach existiert, ohne eine E-Mail zu senden. Ein Ja heißt, das Postfach existiert. Ein Nein heißt, es gibt dieses Postfach nicht.',
      },
      {
        title: 'Catch-all',
        text: 'Sagt der Server auch zu einer erfundenen Adresse Ja, hat Schritt drei nichts bewiesen. Hier zeigen die meisten E-Mail-Checker "Catch-all" an und hören auf. Giggal.ai prüft zusätzliche Signale, die ein echtes Postfach von einer Accept-all-Antwort unterscheiden, und liefert gültig oder ungültig.',
      },
    ],
    footnote:
      'Das Ergebnisfeld oben zeigt jeden Schritt, während er läuft. Um eine E-Mail-Adresse auf Gültigkeit zu prüfen, fügen Sie sie ein und klicken Sie auf die Schaltfläche. Eine Adresse dauert wenige Sekunden.',
  },
  results: {
    title: 'Was der E-Mail-Checker für jede Adresse anzeigt',
    intro: 'Jede Prüfung endet mit einem von drei Ergebnissen.',
    valid: {
      title: 'Gültig',
      text: 'Das Postfach existiert und hat die zusätzlichen Signale bestanden. Eine Mail an diese Adresse sollte ankommen.',
    },
    invalid: {
      title: 'Ungültig',
      text: 'Die Adresse hat ein fehlerhaftes Format oder keinen Mailserver, oder der Server hat das Postfach abgelehnt. Eine Mail an diese Adresse kommt als Bounce zurück.',
    },
    unknown: {
      title: 'Unbekannt',
      text: 'Hier selten. Der Server hat nicht rechtzeitig geantwortet oder verzögert neue Absender absichtlich. Prüfen Sie die Adresse später noch einmal, statt sie als ungültig zu behandeln.',
    },
    detailsIntro: 'Unter dem Ergebnis zeigt der E-Mail-Prüfer die Details, von denen die Zustellbarkeit abhängt:',
    details: [
      { lead: 'Der Mail-Anbieter', rest: ' (Google Workspace, Microsoft 365 oder ein Gateway wie Proofpoint)' },
      { lead: 'Der Mailserver, der geantwortet hat', rest: '' },
      {
        lead: 'Ob die Adresse eine Wegwerfadresse ist',
        rest: ' (ein temporäres Postfach, das bald verschwindet)',
        href: '/de/wegwerf-e-mail-pruefen',
      },
      {
        lead: 'Ob es eine Rollen-Adresse ist',
        rest: ' (info@, vertrieb@, support@, die in einem geteilten Postfach landen, nicht bei einer Person)',
      },
      {
        lead: 'Ob sie bei einem Freemail-Anbieter liegt',
        rest: ' wie Gmail oder Yahoo, was bei der Qualifizierung von B2B-Leads wichtig ist',
      },
    ],
  },
  exists: {
    title: 'Gibt es diese E-Mail-Adresse? So prüfen Sie, ob sie existiert',
    p1: 'Eine E-Mail-Adresse existiert, wenn ihr Postfach auf dem empfangenden Mailserver eingerichtet ist und Post annimmt. Um die E-Mail-Adresse zu überprüfen, fragt der E-Mail-Checker diesen Server direkt, ohne eine Nachricht zu senden. Das beweist, dass das Postfach vorhanden ist. Es beweist nicht, wem es gehört oder wie oft die Person es liest.',
    p2: 'Wenn Sie nicht sicher sind, ob eine Adresse in Ihren Kontakten existiert, prüfen Sie sie oben im E-Mail-Checker.',
    signsIntro: 'Adressen, die nicht existieren, zeigen meist eines dieser Merkmale:',
    signs: [
      { lead: 'Tippfehler in der Domain', rest: ' wie gmial.com oder yaho.com, die keinen Mailserver haben oder alles ablehnen.' },
      { lead: 'Keine Mailserver-Einträge', rest: ' auf der Domain, also kann keine Mail zugestellt werden.' },
      {
        lead: 'Ein abgelehntes Postfach:',
        rest: ' Die Domain ist echt, aber der Server meldet, dass es diese Person dort nicht gibt. Oft hat sie das Unternehmen verlassen.',
      },
      {
        lead: 'Zufällige Zeichenfolgen',
        rest: ' vor dem @, eingegeben von Bots oder von Personen, die ein Formular nicht ausfüllen wollten.',
      },
    ],
  },
  whySend: {
    title: 'Warum Sie eine E-Mail-Adresse vor dem Versand überprüfen sollten',
    p1: 'Eine Mail an eine Adresse, die nicht existiert, kommt als Hard Bounce zurück. Gmail, Outlook und andere Postfach-Anbieter zählen Ihre Bounces. Wenn zu viele Ihrer E-Mails bouncen, vertrauen sie Ihrer Absenderdomain weniger. Dann landen mehr Ihrer Mails im Spam oder werden blockiert, auch Mails an echte Personen. Die E-Mail-Prüfung findet diese Adressen vor dem Versand.',
    readMore: (
      <>
        Im Artikel{' '}
        <InlineLink href="/de/blog/hard-bounce-vs-soft-bounce">Hard Bounce vs. Soft Bounce</InlineLink> lesen Sie, was
        jeder Bounce-Code bedeutet und was Sie damit tun.
      </>
    ),
    bounceTitle: 'Niedrigere Bounce-Rate.',
    bounceText: 'Mit Giggal.ai bereinigte Listen bouncen meist unter 3 %.',
    benefits: [
      {
        title: 'Eine gute Absenderreputation.',
        text: 'Weniger Bounces halten Ihre Domain bei den Postfach-Anbietern in gutem Ansehen.',
      },
      {
        title: 'Bessere Zustellbarkeit.',
        text: 'Eine gute Reputation bedeutet, dass mehr Ihrer E-Mails im Posteingang landen statt im Spam-Ordner.',
      },
      {
        title: 'Sauberere Daten.',
        text: 'Ungültige Adressen verschwinden aus Ihrem CRM, bevor sie Zeit oder Versand-Credits kosten.',
      },
    ],
  },
  whenToUse: {
    title: 'Wann Sie einen E-Mail-Checker nutzen sollten',
    intro: 'Nutzen Sie diesen E-Mail-Prüfer immer dann, wenn eine einzelne Adresse über Ihren nächsten Schritt entscheidet:',
    items: [
      'Bevor Sie einem eingehenden Lead antworten, dessen Adresse von Hand getippt aussieht.',
      'Wenn die Mail an eine neue Anmeldung als Bounce zurückkommt und Sie wissen wollen, ob die Adresse je existiert hat.',
      'Bevor Sie an eine Adresse schreiben, die Sie auf einer Website oder in einem CRM gefunden haben.',
      'Um eine Adresse aus einer gekauften Liste zu testen, bevor Sie für die Bereinigung der ganzen Datei bezahlen.',
      'Um einen Kontakt auf einer Catch-all-Domain zu bestätigen, den ein anderes Tool als "riskant" markiert hat.',
    ],
  },
  catchAll: {
    title: 'Warum andere E-Mail-Checker bei Catch-all aufhören',
    paragraphs: [
      <>
        Manche Mailserver von Unternehmen nehmen jede Adresse an, echt oder erfunden. Das ist eine{' '}
        <InlineLink href="/de/catch-all-verifizierung">Catch-all-Domain</InlineLink>. Fragen Sie nach einem echten
        Mitarbeiter, sagt der Server Ja. Fragen Sie nach einem erfundenen Namen, sagt er ebenfalls Ja. Die normale
        Postfachprüfung beweist dort also nichts.
      </>,
      'Eine Catch-all-Domain zu erkennen ist einfach: Man testet eine erfundene Adresse und sieht, ob sie angenommen wird. Deshalb kann fast jeder E-Mail-Checker sagen, dass eine Domain Catch-all ist. Herauszufinden, welche Postfächer dahinter echt sind, ist viel mehr Arbeit. Darum bleiben die meisten E-Mail-Prüfer bei dieser Kennzeichnung stehen und überlassen Ihnen die Entscheidung. In B2B-Listen sind Catch-all-Adressen oft ein großer Teil der Kontakte, und viele davon sind echte Personen.',
      <>
        Giggal.ai prüft bei jeder Catch-all-Adresse die zusätzlichen Signale und liefert gültig oder ungültig. Deshalb
        erlaubt diese Seite auch nur wenige Prüfungen pro Besucher. Den vollständigen Hintergrund finden Sie im
        Artikel{' '}
        <InlineLink href="/de/blog/was-ist-eine-catch-all-e-mail-adresse">
          Was ist eine Catch-all-E-Mail-Adresse?
        </InlineLink>
      </>,
    ],
  },
  wholeList: {
    title: 'Ganze Liste statt einer einzelnen E-Mail-Adresse prüfen',
    list: (
      <>
        Der E-Mail-Checker auf dieser Seite prüft eine Adresse nach der anderen. Für die Massenprüfung einer Liste
        erstellen Sie ein Konto und laden eine CSV- oder Excel-Datei mit bis zu 50.000 Adressen hoch. Dann{' '}
        <InlineLink href="/de">bereinigen Sie Ihre E-Mail-Liste</InlineLink> mit denselben Prüfungen auf jeder Zeile.
        Sie starten mit 1.000 kostenlosen Credits, ohne Karte.
      </>
    ),
    api: (
      <>
        Um Adressen in Ihrer eigenen App oder Ihrem Anmeldeformular zu prüfen, nutzen Sie die{' '}
        <InlineLink href="/email-verification-api">E-Mail-Verifizierungs-API</InlineLink>. Sie führt dieselben Prüfungen
        aus und liefert das Ergebnis als JSON.
      </>
    ),
  },
  faqTitle: 'Häufige Fragen zum E-Mail-Checker',
  faqs: [
    {
      q: 'Was ist ein E-Mail-Checker?',
      a: 'Ein E-Mail-Checker zeigt Ihnen, ob eine E-Mail-Adresse gültig ist. Dazu prüft er das Format, den Mailserver und das Postfach selbst. Er heißt auch E-Mail-Prüfer oder E-Mail-Validator. Er funktioniert, ohne eine E-Mail an die Adresse zu senden.',
    },
    {
      q: 'Ist ein E-Mail-Checker dasselbe wie ein E-Mail-Prüfer?',
      a: 'Ja. E-Mail-Checker, E-Mail-Prüfer und E-Mail-Validator sind drei Namen für dieselbe Art von Tool. Alle prüfen eine E-Mail-Adresse anhand von Format, Mailserver und Postfach. Sie unterscheiden sich bei Catch-all-Domains. Viele hören dort mit "riskant" auf. Dieser Checker liefert gültig oder ungültig.',
    },
    {
      q: 'Wie funktioniert ein E-Mail-Checker?',
      a: 'Er führt vier Prüfungen nacheinander aus. Zuerst das Format der Adresse. Dann die Mailserver-Einträge der Domain. Dann fragt er den Mailserver, ob das Postfach existiert. Auf Catch-all-Domains sagt der Server zu jeder Adresse Ja. Dort prüft Giggal.ai zusätzliche Signale, um ein echtes Postfach von einem erfundenen zu unterscheiden.',
    },
    {
      q: 'Wie prüfe ich, ob eine E-Mail-Adresse gültig ist?',
      a: 'Fügen Sie die Adresse oben auf dieser Seite in den E-Mail-Checker ein und starten Sie die Prüfung. Nach wenigen Sekunden sehen Sie das Ergebnis: gültig, ungültig oder unbekannt. Darunter stehen der Grund und die Details zum Mailserver.',
    },
    {
      q: 'Kann ich prüfen, ob eine E-Mail-Adresse existiert, ohne eine E-Mail zu senden?',
      a: 'Ja. Der E-Mail-Checker fragt den empfangenden Mailserver, ob das Postfach existiert, und hört auf, bevor eine Nachricht gesendet wird. Im Posteingang der Person kommt nichts an.',
    },
    {
      q: 'Sendet der E-Mail-Checker eine E-Mail an die Adresse?',
      a: 'Nein. Die Prüfung spricht nur mit dem Mailserver. Der Inhaber der Adresse bekommt nichts und erfährt nicht, dass die Adresse geprüft wurde.',
    },
    {
      q: 'Ist ein E-Mail-Checker genau?',
      a: 'Das hängt vom Checker ab. Die meisten sind auf normalen Domains genau und geben bei Catch-all-Domains auf. Dort liefern sie "riskant" oder "unbekannt". Giggal.ai prüft auf Catch-all-Domains weiter und liefert gültig oder ungültig. Auf Business-Listen misst Giggal.ai eine Genauigkeit von 98,5 %.',
    },
    {
      q: 'Was bedeutet "gültig" auf einer Catch-all-Domain?',
      a: 'Dass das Postfach bestätigt wurde, nicht nur, dass die Domain den Empfänger angenommen hat. Der bloße Hinweis "Catch-all" sagt nur, dass der Server zu allem Ja sagt. Gültig heißt hier: Die Adresse hat die zusätzlichen Prüfungen bestanden, die ein echtes Postfach von einem unterscheiden, das bouncen wird.',
    },
    {
      q: 'Was bedeutet "unbekannt" bei einer E-Mail-Prüfung?',
      a: 'Der Mailserver hat nicht rechtzeitig eine klare Antwort gegeben. Oft verzögert er neue Absender absichtlich (Greylisting). Die Adresse ist damit nicht als ungültig erwiesen. Prüfen Sie sie später noch einmal.',
    },
    {
      q: 'Wie viele Adressen kann ich hier prüfen?',
      a: 'Einige pro Stunde, ohne Anmeldung und ohne Karte. Jede Prüfung führt alle Schritte vollständig aus, deshalb ist die Zahl klein. Für mehr Prüfungen erstellen Sie ein Konto.',
    },
    {
      q: 'Kann eine gültige E-Mail-Adresse trotzdem bouncen?',
      a: 'Ja, aber selten. Ein gültiges Ergebnis heißt, dass das Postfach zum Zeitpunkt der Prüfung existiert hat. Eine Mail kann trotzdem bouncen, wenn das Postfach voll ist oder der Mailserver eine Zeit lang ausfällt. Das gilt auch, wenn die Person das Unternehmen nach der Prüfung verlässt oder der Server Ihre Absenderdomain blockiert. Prüfen Sie Adressen möglichst kurz vor dem Versand.',
    },
    {
      q: 'Sind meine Daten geschützt?',
      a: 'Giggal.ai wird von TargetPulse Ltd betrieben und verarbeitet personenbezogene Daten nach der DSGVO. Die Datenschutzerklärung unter giggal.ai/de/datenschutz erklärt, welche Daten erhoben werden, wie sie genutzt werden und wie lange sie gespeichert bleiben.',
    },
    {
      q: 'Kann ich hier eine ganze Liste prüfen?',
      a: 'Nicht auf dieser Seite. Erstellen Sie ein Konto und laden Sie die Liste als CSV- oder Excel-Datei hoch. Jede Adresse durchläuft dieselben Prüfungen. Sie starten mit 1.000 kostenlosen Credits, ohne Karte.',
    },
  ],
  ctaHeadline: 'Prüfen Sie Ihre ganze Liste',
  related: [
    { href: '/de/email-adresse-pruefen/gibt-es-diese-email-adresse', label: 'Gibt es diese E-Mail-Adresse? So prüfen Sie es' },
    { href: '/de/catch-all-verifizierung', label: 'Catch-all-Verifizierung und riskante Adressen' },
    { href: '/de/preise', label: 'Preise und Credits' },
    { href: '/de/wegwerf-e-mail-pruefen', label: 'Wegwerf-E-Mail-Adressen erkennen' },
    { href: '/de/blog/was-ist-eine-catch-all-e-mail-adresse', label: 'Was ist eine Catch-all-E-Mail-Adresse?' },
  ],
}
