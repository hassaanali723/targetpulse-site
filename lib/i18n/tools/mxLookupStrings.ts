// All page copy for the MX lookup, one object per language the page ships in.
// The page is components/tools/MxLookup/MxLookupPage.tsx; the URLs live in
// CLUSTERS.mxLookup (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/mxToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged (plan 30, section 4).

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface MxPageStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  appName: string
  featureList: string[]
  h1: string
  heroIntro: string
  howTitle: string
  howSteps: [string, string, string, string]
  howNote: string
  imageAlt: string
  whatTitle: string
  /** Before the example record. The first may carry a link. */
  whatBefore: [string, string]
  /** After the example record. The second may carry a link. */
  whatAfter: [string, string]
  priorityTitle: string
  priorityParas: [string, string]
  resultsTitle: string
  thResult: string
  thMeaning: string
  thAction: string
  /** Six rows, in the order the tool checks for them. */
  results: { result: string; meaning: string; action: string }[]
  resultsNote: string
  providersTitle: string
  providersIntro: string
  thProvider: string
  thRecords: string
  /** Notes by provider name; providers without a note are left out. */
  providerNotes: Record<string, string>
  providersAfter: string
  changeTitle: string
  changeParas: [string, string, string, string]
  mailboxTitle: string
  mailboxParas: [string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: MxPageStrings = {
  metaTitle: 'MX Record Lookup: Free MX Lookup for Any Domain | Giggal.ai',
  ogTitle: 'MX Record Lookup: Free MX Lookup for Any Domain',
  description:
    'Free MX lookup for any domain. See which mail servers receive its email, in the order senders try them, and spot missing or broken MX records.',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Free MX Record Lookup',
  crumb: 'MX Record Lookup',
  appName: 'Free MX Record Lookup',
  featureList: [
    'Look up the MX records of any domain',
    'Mail servers sorted by priority',
    'IPv4 and IPv6 addresses for each mail server',
    'Flags missing, null and broken MX records',
    'Recognizes common email providers',
  ],
  h1: 'MX Record Lookup',
  heroIntro: 'Run an MX lookup on any domain to see the mail servers that receive its email, in the order senders try them.',
  howTitle: 'How to check MX records for a domain',
  howSteps: [
    'To find MX records for a domain, type it into the box above. A full email address or a website link works too. The tool keeps only the domain.',
    'Click Look up MX records. The MX lookup reads the records from public DNS, so you see what a sender sees right now.',
    'Read the summary first. It tells you whether the domain can receive email.',
    'Then read the table. Each row is one mail server, with its priority number, its IP addresses and its TTL.',
  ],
  howNote:
    'If you changed your records recently and still see the old ones, wait for the TTL shown in the table to run out. TTL is the number of seconds resolvers may keep the previous answer. The link in your address bar runs the same MX record check again. You can send it to a colleague or to your DNS host.',
  imageAlt: "Illustration of an email following a domain's MX records to its mail servers in priority order.",
  whatTitle: 'What an MX record is',
  whatBefore: [
    'An MX record (mail exchanger record) is the DNS entry that tells other mail servers where to deliver email for a domain. When someone writes to anna@example.com, their mail server looks up the MX records for example.com and connects to the server named there. Reading those records is what an MX lookup, or mail server lookup, does. For a plain explanation with a step-by-step example, see the [MX record](/glossary/mx-record) entry in our glossary.',
    "Each record has two parts: a priority number and the name of a mail server. Google Workspace's setup guide asks for a single record like this one:",
  ],
  whatAfter: [
    "Older Workspace domains often still have five records instead, starting with ASPMX.L.GOOGLE.COM. Google still supports those, so there's no need to change them.",
    'MX records only handle incoming mail. Outgoing mail is covered by other records, mainly SPF, DKIM and DMARC. For how those three work, see [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'What the priority number means',
  priorityParas: [
    "Senders try the server with the lowest number first. If it doesn't answer, they move on to the next lowest. When two servers have the same number, senders pick between them at random, which spreads the load (RFC 5321, section 5.1).",
    "Only the order matters, not the size of the numbers. Priorities of 10 and 20 behave the same as 1 and 2. Gmail's own domain, for example, lists five servers at 5, 10, 20, 30 and 40.",
  ],
  resultsTitle: 'What your MX lookup result means',
  thResult: 'Result',
  thMeaning: 'What it means',
  thAction: 'What to do',
  results: [
    {
      result: 'Can receive email',
      meaning: 'The domain has MX records and every mail server has an IP address.',
      action: 'Nothing. If mail still doesn’t arrive, look at the mail server itself or at spam filtering.',
    },
    {
      result: 'Has MX records, but something needs fixing',
      meaning: 'At least one record has a problem. The tool lists it under the server.',
      action: 'Fix the record at your DNS host. The common problems are explained below this table.',
    },
    {
      result: 'Has no MX records',
      meaning: 'Senders fall back to the domain’s own address (its A or AAAA record).',
      action: 'Add MX records if the domain should receive email. Your email provider gives you the values.',
    },
    {
      result: 'Can’t receive email',
      meaning: 'No MX records and no address to fall back to.',
      action: 'Add MX records, or leave it if the domain isn’t used for email.',
    },
    {
      result: 'Accepts no email',
      meaning: 'The domain publishes a null MX record (0 .). It tells senders not to try (RFC 7505).',
      action: 'Nothing, if the domain isn’t used for email. Don’t keep one on a domain you send from, because replies and bounces can’t come back.',
    },
    {
      result: 'Doesn’t exist',
      meaning: 'DNS has no record of the domain at all.',
      action: 'Check the spelling, and check that the domain is registered.',
    },
  ],
  resultsNote:
    "The tool also flags four problems with individual records. A record can point to an IP address instead of a host name. The server name can be an alias (a CNAME), which RFC 2181 doesn't allow. The server name can have no IP address, so mail sent to it can't be delivered. Or the domain can publish a null MX next to normal MX records, which contradicts itself.",
  providersTitle: 'MX records for Google Workspace, Microsoft 365 and other providers',
  providersIntro:
    "If an MX records lookup shows one of these server names, you know who handles the domain's email. The number before each name is its priority. When you set up a provider, copy the values from its own setup page. Some of them depend on your domain or your region.",
  thProvider: 'Provider',
  thRecords: 'MX records',
  providerNotes: {
    'Google Workspace': 'Older setups use ASPMX.L.GOOGLE.COM plus four ALT servers. Google still supports them.',
    'Microsoft 365':
      'The first part is unique to your domain. Domains with DNSSEC get a name ending in mx.microsoft. Copy the exact value from the admin center.',
    'Zoho Mail': 'The ending follows your data center, for example mx.zoho.eu for the EU.',
    'iCloud Mail': 'For custom domains on iCloud+.',
    'Cloudflare Email Routing': 'Forwards mail to another inbox. Cloudflare sets the priorities for you.',
    'Amazon SES': 'For receiving mail. The middle part is your AWS region.',
    IONOS: 'Some countries use their own ending, such as mx00.ionos.de.',
  },
  providersAfter:
    'Sometimes the MX records point to Proofpoint, Mimecast or Barracuda instead. Those are security gateways. Mail goes through them first, gets filtered, and then moves on to the real mailbox provider, which the lookup can\'t see. Gateways also make email verification harder, because they answer for every address. Here is [how to verify emails behind a security gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).',
  changeTitle: 'Changing your MX records',
  changeParas: [
    "To move your email to a new provider, add the new provider's MX records at your DNS host and remove the old ones. Senders follow whatever DNS returns, so mail starts arriving at the new server as cached answers expire.",
    'How long that takes depends on the TTL of the old records. If you plan a move, lower the TTL to a few minutes beforehand. Do it at least one full TTL period ahead, so the old, longer TTL has run out by the day you switch. Raise it again once everything works. Keep the old mailbox open for a few days anyway, in case some mail still lands there.',
    "Providers often quote up to 48 or 72 hours for changes to show up. That's a safe outer limit, not the usual wait. Adding MX records to a domain that had none can take a little longer, because resolvers may also have cached the empty answer. How long they keep it is set by the domain's SOA record.",
    'After the switch, [update your SPF record](/spf-checker) so the new provider may send for you, and turn on its DKIM signing. If you send from your own server, the [DKIM generator](/dkim-generator) creates a key, and the [DMARC generator](/dmarc-generator) builds the DMARC record that ties both together.',
  ],
  mailboxTitle: "An MX lookup doesn't check the mailbox",
  mailboxParas: [
    "MX records tell you the domain accepts mail. They don't tell you that a particular address exists. jane@example.com can still bounce when example.com has perfect MX records, because Jane left the company or the address never existed.",
    'Checking the mailbox means asking the mail server, which is what an email verifier does. Use the [email checker](/email-checker) for one address, or the [bulk email verifier](/bulk-email-verifier) for a whole list before a campaign.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is an MX record?',
      a: 'It’s the DNS record that names the mail servers for a domain. When someone emails an address at that domain, their mail server looks up the MX records. That tells it where to deliver the message.',
    },
    {
      q: 'How do I check my MX records?',
      a: 'Type your domain into the MX lookup at the top of this page. From a terminal, nslookup -type=mx example.com works on Windows, and dig mx example.com works on macOS and Linux.',
    },
    {
      q: 'Can a domain have more than one MX record?',
      a: 'Yes, and most do. Senders try the record with the lowest priority number first and keep the others as backups. Records with the same number share the load.',
    },
    {
      q: 'What happens if a domain has no MX record?',
      a: 'Senders fall back to the domain’s own A or AAAA record and try to deliver there. That only works if a mail server runs on that address, so a domain that should receive email needs MX records.',
    },
    {
      q: 'Can an MX record point to an IP address or a CNAME?',
      a: 'No. It has to name a host that has its own A or AAAA record. An IP address in the record breaks the standard, and RFC 2181 says the name must not be an alias. Some senders cope with an alias, but you can’t count on it.',
    },
    {
      q: 'Who controls my MX records?',
      a: 'Whoever runs your domain’s DNS. That’s usually the registrar you bought the domain from, or a service like Cloudflare if you moved your name servers there. The records themselves are public, because every sender needs to read them.',
    },
    {
      q: 'How long do MX record changes take?',
      a: 'Up to the TTL of the old record. Resolvers that cached it keep the old answer until the TTL runs out, so a TTL of 3600 means up to an hour. Your DNS host may also take a few minutes to publish the change.',
    },
    {
      q: 'Do I need an MX record to send email?',
      a: 'No. MX records are for receiving mail. Sending depends on SPF, DKIM and DMARC. Some receiving servers do reject mail from a domain with no MX or A record at all. A domain like that can’t receive the reply.',
    },
  ],
  ctaHeadline: 'Check the mailbox, not just the domain',
  ctaSupporting:
    'MX records show that a domain can receive mail. Giggal checks whether the address itself exists, catch-all domains included. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

// German: formal "Sie", German spelling "MX-Lookup" (Ahrefs keyword "mx lookup"). Italian: informal "tu".
const de: MxPageStrings = {
  metaTitle: 'MX-Lookup: MX-Einträge einer Domain kostenlos prüfen | Giggal.ai',
  ogTitle: 'MX-Lookup: MX-Einträge einer Domain kostenlos prüfen',
  description:
    'Kostenloser MX-Lookup für jede Domain. Sehen Sie die Mailserver in der Reihenfolge ihrer Priorität und finden Sie fehlende oder fehlerhafte MX-Einträge.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser MX-Lookup von Giggal.ai',
  crumb: 'MX-Lookup',
  appName: 'Kostenloser MX-Lookup',
  featureList: [
    'MX-Einträge jeder Domain abfragen',
    'Mailserver nach Priorität sortiert',
    'IPv4- und IPv6-Adressen für jeden Mailserver',
    'Meldet fehlende, fehlerhafte und Null-MX-Einträge',
    'Erkennt gängige E-Mail-Anbieter',
  ],
  h1: 'MX-Lookup und MX-Check für jede Domain',
  heroIntro:
    'Mit dem MX-Lookup sehen Sie für jede Domain die Mailserver, die ihre E-Mails empfangen. Die Server stehen in der Reihenfolge, in der Absender sie ansteuern.',
  howTitle: 'So prüfen Sie die MX-Einträge einer Domain',
  howSteps: [
    'Geben Sie die Domain in das Feld oben ein. Eine vollständige E-Mail-Adresse oder ein Link zu einer Website funktioniert auch. Das Tool übernimmt nur die Domain.',
    'Klicken Sie auf "MX-Einträge abfragen". Der MX-Lookup liest die Einträge aus dem öffentlichen DNS. Sie sehen also, was ein Absender in diesem Moment sieht.',
    'Lesen Sie zuerst die Zusammenfassung. Sie zeigt, ob die Domain E-Mails empfangen kann.',
    'Lesen Sie danach die Tabelle. Jede Zeile zeigt einen Mailserver mit Prioritätszahl, IP-Adressen und TTL.',
  ],
  howNote:
    'Sie haben Ihre Einträge gerade geändert und sehen noch die alten? Dann warten Sie, bis die TTL aus der Tabelle abgelaufen ist. Die TTL gibt an, wie viele Sekunden Resolver die vorherige Antwort speichern dürfen. Der Link in Ihrer Adresszeile startet denselben MX-Check noch einmal. Sie können ihn an Kollegen oder an Ihren DNS-Anbieter senden.',
  imageAlt:
    'Illustration: Eine E-Mail folgt den MX-Einträgen einer Domain zu ihren Mailservern, in der Reihenfolge der Priorität.',
  whatTitle: 'Was ein MX-Eintrag ist',
  whatBefore: [
    'Ein MX-Eintrag ist der DNS-Eintrag, der anderen Mailservern sagt, wohin sie E-Mails für eine Domain zustellen sollen. MX steht für Mail Exchanger. Schreibt jemand an anna@beispiel.de, fragt sein Mailserver die MX-Einträge von beispiel.de ab. Dann verbindet er sich mit dem Server, der dort genannt ist. Genau diese Einträge liest ein MX-Lookup, auch MX-Check oder Mailserver-Abfrage genannt. Eine einfache Erklärung mit einem Schritt-für-Schritt-Beispiel finden Sie in unserem Glossar unter [MX-Eintrag](/glossary/mx-record).',
    'Jeder Eintrag besteht aus zwei Teilen: einer Prioritätszahl und dem Namen eines Mailservers. Die Einrichtungsanleitung von Google Workspace verlangt einen einzigen Eintrag wie diesen:',
  ],
  whatAfter: [
    'Ältere Workspace-Domains haben oft noch fünf Einträge, beginnend mit ASPMX.L.GOOGLE.COM. Google unterstützt diese weiterhin. Sie müssen sie also nicht ändern.',
    'MX-Einträge regeln nur eingehende E-Mails. Für ausgehende E-Mails sind andere Einträge zuständig, vor allem SPF, DKIM und DMARC. Wie diese drei funktionieren, lesen Sie in [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Was die Prioritätszahl bedeutet',
  priorityParas: [
    'Absender versuchen es zuerst beim Server mit der niedrigsten Zahl. Antwortet er nicht, gehen sie zum Server mit der nächsthöheren Zahl über. Haben zwei Server dieselbe Zahl, wählen Absender zufällig zwischen ihnen. So verteilt sich die Last (RFC 5321, Abschnitt 5.1).',
    'Es zählt nur die Reihenfolge, nicht die Höhe der Zahlen. Die Prioritäten 10 und 20 wirken genauso wie 1 und 2. Die Domain gmail.com listet zum Beispiel fünf Server mit den Prioritäten 5, 10, 20, 30 und 40.',
  ],
  resultsTitle: 'Was das Ergebnis Ihres MX-Checks bedeutet',
  thResult: 'Ergebnis',
  thMeaning: 'Bedeutung',
  thAction: 'Was zu tun ist',
  results: [
    {
      result: 'Kann E-Mails empfangen',
      meaning: 'Die Domain hat MX-Einträge, und jeder Mailserver hat eine IP-Adresse.',
      action: 'Nichts. Kommen trotzdem keine E-Mails an, prüfen Sie den Mailserver selbst oder den Spamfilter.',
    },
    {
      result: 'Hat MX-Einträge, aber etwas muss behoben werden',
      meaning: 'Mindestens ein Eintrag hat ein Problem. Das Tool nennt es unter dem betroffenen Server.',
      action: 'Korrigieren Sie den Eintrag bei Ihrem DNS-Anbieter. Die häufigen Probleme sind unter dieser Tabelle erklärt.',
    },
    {
      result: 'Hat keine MX-Einträge',
      meaning: 'Absender greifen auf die eigene Adresse der Domain zurück (ihren A- oder AAAA-Eintrag).',
      action: 'Legen Sie MX-Einträge an, wenn die Domain E-Mails empfangen soll. Die Werte bekommen Sie von Ihrem E-Mail-Anbieter.',
    },
    {
      result: 'Kann keine E-Mails empfangen',
      meaning: 'Keine MX-Einträge und keine Adresse, auf die Absender zurückgreifen können.',
      action: 'Legen Sie MX-Einträge an. Wird die Domain nicht für E-Mails genutzt, lassen Sie alles, wie es ist.',
    },
    {
      result: 'Nimmt keine E-Mails an',
      meaning: 'Die Domain veröffentlicht einen Null-MX-Eintrag (0 .). Er sagt Absendern, dass sie es nicht versuchen sollen (RFC 7505).',
      action: 'Nichts, wenn die Domain nicht für E-Mails genutzt wird. Auf einer Domain, von der Sie senden, gehört er nicht hin. Sonst kommen Antworten und Bounces nicht zurück.',
    },
    {
      result: 'Existiert nicht',
      meaning: 'Das DNS kennt die Domain überhaupt nicht.',
      action: 'Prüfen Sie die Schreibweise und ob die Domain registriert ist.',
    },
  ],
  resultsNote:
    'Das Tool meldet außerdem vier Probleme bei einzelnen Einträgen. Ein Eintrag kann auf eine IP-Adresse statt auf einen Hostnamen zeigen. Der Servername kann ein Alias sein (ein CNAME), was RFC 2181 nicht erlaubt. Dem Servernamen kann eine IP-Adresse fehlen. Dann lassen sich E-Mails an ihn nicht zustellen. Oder die Domain veröffentlicht einen Null-MX neben normalen MX-Einträgen, was sich widerspricht.',
  providersTitle: 'MX-Einträge für Google Workspace, Microsoft 365 und andere Anbieter',
  providersIntro:
    'Zeigt der MX-Lookup einen dieser Servernamen, wissen Sie, wer die E-Mails der Domain betreut. Die Zahl vor jedem Namen ist seine Priorität. Wenn Sie einen Anbieter einrichten, kopieren Sie die Werte von dessen eigener Einrichtungsseite. Manche Werte hängen von Ihrer Domain oder Ihrer Region ab.',
  thProvider: 'Anbieter',
  thRecords: 'MX-Einträge',
  providerNotes: {
    'Google Workspace': 'Ältere Einrichtungen nutzen ASPMX.L.GOOGLE.COM und vier ALT-Server. Google unterstützt sie weiterhin.',
    'Microsoft 365':
      'Der erste Teil gilt nur für Ihre Domain. Domains mit DNSSEC bekommen einen Namen, der auf mx.microsoft endet. Kopieren Sie den genauen Wert aus dem Admin Center.',
    'Zoho Mail': 'Die Endung richtet sich nach Ihrem Rechenzentrum, zum Beispiel mx.zoho.eu für die EU.',
    'iCloud Mail': 'Für eigene Domains mit iCloud+.',
    'Cloudflare Email Routing': 'Leitet E-Mails an ein anderes Postfach weiter. Cloudflare legt die Prioritäten selbst fest.',
    'Amazon SES': 'Für den Empfang von E-Mails. Der mittlere Teil ist Ihre AWS-Region.',
    IONOS: 'Manche Länder nutzen eine eigene Endung, zum Beispiel mx00.ionos.de.',
  },
  providersAfter:
    'Manchmal zeigen die MX-Einträge stattdessen auf Proofpoint, Mimecast oder Barracuda. Das sind Sicherheits-Gateways. E-Mails laufen zuerst durch sie und werden gefiltert. Danach gehen sie an den eigentlichen Postfachanbieter, den der MX-Lookup nicht sieht. Gateways erschweren auch die E-Mail-Verifizierung, weil sie für jede Adresse antworten. Hier lesen Sie, [wie Sie E-Mails hinter einem Sicherheits-Gateway prüfen](/blog/how-to-verify-emails-behind-secure-email-gateways).',
  changeTitle: 'MX-Einträge ändern',
  changeParas: [
    'Für den Wechsel zu einem neuen E-Mail-Anbieter legen Sie dessen MX-Einträge bei Ihrem DNS-Anbieter an und löschen die alten. Absender folgen dem, was das DNS zurückgibt. Neue E-Mails kommen deshalb nach und nach auf dem neuen Server an, während zwischengespeicherte Antworten ablaufen.',
    'Wie lange das dauert, hängt von der TTL der alten Einträge ab. Wenn Sie einen Wechsel planen, senken Sie die TTL vorher auf wenige Minuten. Tun Sie das mindestens eine volle TTL-Dauer im Voraus. Dann ist die alte, längere TTL am Tag des Wechsels abgelaufen. Erhöhen Sie die TTL wieder, sobald alles funktioniert. Lassen Sie das alte Postfach trotzdem noch einige Tage offen, falls dort noch E-Mails ankommen.',
    'Anbieter nennen oft bis zu 48 oder 72 Stunden, bis Änderungen sichtbar sind. Das ist eine sichere Obergrenze, nicht die übliche Wartezeit. Bekommt eine Domain zum ersten Mal MX-Einträge, kann es etwas länger dauern. Resolver haben dann eventuell auch die leere Antwort zwischengespeichert. Wie lange sie diese behalten, legt der SOA-Eintrag der Domain fest.',
    'Aktualisieren Sie nach dem Wechsel [Ihren SPF-Eintrag](/spf-checker), damit der neue Anbieter in Ihrem Namen senden darf. Aktivieren Sie außerdem die DKIM-Signatur des Anbieters. Wenn Sie von einem eigenen Server senden, erstellt der [DKIM-Generator](/dkim-generator) einen Schlüssel. Der [DMARC-Generator](/dmarc-generator) erstellt dann den DMARC-Eintrag, der beide verbindet.',
  ],
  mailboxTitle: 'Ein MX-Lookup prüft nicht das Postfach',
  mailboxParas: [
    'MX-Einträge zeigen, dass die Domain E-Mails annimmt. Sie zeigen nicht, ob eine bestimmte Adresse existiert. Eine E-Mail an jana@beispiel.de kann trotz einwandfreier MX-Einträge als Bounce zurückkommen. Vielleicht hat Jana die Firma verlassen, oder die Adresse gab es nie.',
    'Ob das Postfach existiert, erfahren Sie nur vom Mailserver selbst. Genau das fragt ein E-Mail-Verifizierer ab. Nutzen Sie den [E-Mail-Prüfer](/email-checker) für eine einzelne Adresse. Für eine ganze Liste vor einer Kampagne nutzen Sie die [E-Mail-Massenprüfung](/bulk-email-verifier).',
  ],
  faqTitle: 'Häufige Fragen zu MX-Einträgen',
  faqs: [
    {
      q: 'Was ist ein MX-Eintrag?',
      a: 'Das ist der DNS-Eintrag, der die Mailserver einer Domain nennt. Schreibt jemand an eine Adresse dieser Domain, fragt sein Mailserver die MX-Einträge ab. So erfährt er, wohin er die Nachricht zustellen soll.',
    },
    {
      q: 'Wie führe ich einen MX-Lookup für meine Domain durch?',
      a: 'Für einen schnellen MX-Check geben Sie Ihre Domain oben auf dieser Seite ein. Im Terminal nutzen Sie unter Windows nslookup -type=mx beispiel.de. Unter macOS und Linux funktioniert dig mx beispiel.de.',
    },
    {
      q: 'Kann eine Domain mehrere MX-Einträge haben?',
      a: 'Ja, die meisten Domains haben mehrere. Absender versuchen es zuerst beim Eintrag mit der niedrigsten Prioritätszahl. Die anderen dienen als Reserve. Einträge mit derselben Zahl teilen sich die Last.',
    },
    {
      q: 'Was passiert, wenn eine Domain keinen MX-Eintrag hat?',
      a: 'Absender greifen dann auf den A- oder AAAA-Eintrag der Domain zurück und versuchen, dorthin zuzustellen. Das funktioniert nur, wenn unter dieser Adresse ein Mailserver läuft. Eine Domain, die E-Mails empfangen soll, braucht deshalb MX-Einträge.',
    },
    {
      q: 'Kann ein MX-Eintrag auf eine IP-Adresse oder einen CNAME zeigen?',
      a: 'Nein. Er muss einen Host nennen, der einen eigenen A- oder AAAA-Eintrag hat. Eine IP-Adresse im Eintrag verstößt gegen den Standard. Laut RFC 2181 darf der Name außerdem kein Alias sein. Manche Absender kommen mit einem Alias zurecht, aber darauf können Sie sich nicht verlassen.',
    },
    {
      q: 'Wer verwaltet meine MX-Einträge?',
      a: 'Der Dienst, der das DNS Ihrer Domain betreibt. Meist ist das der Registrar, bei dem Sie die Domain gekauft haben. Haben Sie Ihre Nameserver zu einem Dienst wie Cloudflare verlegt, ist es dieser Dienst. Die Einträge selbst sind öffentlich, denn jeder Absender muss sie lesen können.',
    },
    {
      q: 'Wie lange dauert es, bis geänderte MX-Einträge gelten?',
      a: 'Höchstens so lange wie die TTL des alten Eintrags. Resolver, die ihn zwischengespeichert haben, behalten die alte Antwort, bis die TTL abläuft. Eine TTL von 3600 Sekunden bedeutet also bis zu einer Stunde. Ihr DNS-Anbieter braucht eventuell auch ein paar Minuten, um die Änderung zu veröffentlichen.',
    },
    {
      q: 'Brauche ich einen MX-Eintrag, um E-Mails zu senden?',
      a: 'Nein. MX-Einträge sind für den Empfang von E-Mails da. Für das Senden sind SPF, DKIM und DMARC wichtig. Manche empfangenden Server lehnen allerdings E-Mails von Domains ab, die weder einen MX- noch einen A-Eintrag haben. Eine solche Domain kann keine Antwort empfangen.',
    },
  ],
  ctaHeadline: 'Prüfen Sie das Postfach, nicht nur die Domain',
}

const it: MxPageStrings = {
  metaTitle: 'MX Lookup gratis: verifica i record MX di un dominio | Giggal.ai',
  ogTitle: 'MX Lookup gratis: verifica i record MX di un dominio',
  description:
    'MX Lookup gratis per qualsiasi dominio. Vedi quali server di posta ricevono le sue email, in ordine di priorità, e trova i record MX mancanti o errati.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'MX Lookup gratuito di Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'MX Lookup gratuito',
  featureList: [
    'Verifica i record MX di qualsiasi dominio',
    'Server di posta ordinati per priorità',
    'Indirizzi IPv4 e IPv6 di ogni server di posta',
    'Segnala i record MX mancanti, nulli ed errati',
    'Riconosce i provider di posta più comuni',
  ],
  h1: 'MX Lookup: verifica i record MX',
  heroIntro:
    'Fai un MX Lookup su qualsiasi dominio. Vedi quali server di posta ricevono le sue email e in che ordine li contattano i mittenti.',
  howTitle: 'Come verificare i record MX di un dominio',
  howSteps: [
    'Per trovare i record MX di un dominio, scrivilo nel campo qui sopra. Va bene anche un indirizzo email completo o il link di un sito. Lo strumento tiene solo il dominio.',
    "Clicca su Verifica i record MX. Lo strumento legge i record dal DNS pubblico, quindi vedi quello che vede adesso chi invia un'email a quel dominio.",
    'Leggi prima il riepilogo. Ti dice se il dominio può ricevere email.',
    'Poi guarda la tabella. Ogni riga è un server di posta, con il numero di priorità, gli indirizzi IP e il TTL.',
  ],
  howNote:
    'Se hai cambiato i record da poco e vedi ancora quelli vecchi, aspetta che scada il TTL indicato in tabella. Il TTL è il numero di secondi per cui i resolver possono tenere la risposta precedente. Il link nella barra degli indirizzi ripete lo stesso controllo dei record MX. Puoi inviarlo a un collega o al gestore del tuo DNS.',
  imageAlt: "Illustrazione di un'email che segue i record MX di un dominio fino ai suoi server di posta, in ordine di priorità.",
  whatTitle: "Cos'è un record MX",
  whatBefore: [
    "Un record MX (mail exchanger record) è la voce DNS che dice agli altri server di posta dove consegnare le email di un dominio. Quando qualcuno scrive ad anna@example.com, il suo server di posta cerca i record MX di example.com e si collega al server indicato. Un MX Lookup, detto anche ricerca del server di posta, legge proprio questi record. Per una spiegazione semplice con un esempio passo per passo, leggi la voce [record MX](/glossary/mx-record) del nostro glossario.",
    'Ogni record ha due parti: un numero di priorità e il nome di un server di posta. La guida di configurazione di Google Workspace chiede un solo record, come questo:',
  ],
  whatAfter: [
    'I domini Workspace più vecchi spesso hanno ancora cinque record, a partire da ASPMX.L.GOOGLE.COM. Google li supporta ancora, quindi non serve cambiarli.',
    'I record MX gestiscono solo la posta in arrivo. Per la posta in uscita servono altri record, soprattutto SPF, DKIM e DMARC. Per sapere come funzionano, leggi la nostra [guida a SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Cosa significa il numero di priorità',
  priorityParas: [
    "Chi invia l'email contatta per primo il server con il numero più basso. Se non risponde, passa al numero successivo. A parità di numero ne sceglie uno a caso, così il carico si distribuisce (RFC 5321, sezione 5.1).",
    "Conta solo l'ordine, non il valore dei numeri. Le priorità 10 e 20 funzionano come 1 e 2. Il dominio di Gmail, per esempio, elenca cinque server con priorità 5, 10, 20, 30 e 40.",
  ],
  resultsTitle: 'Cosa significa il risultato del tuo MX Lookup',
  thResult: 'Risultato',
  thMeaning: 'Cosa significa',
  thAction: 'Cosa fare',
  results: [
    {
      result: 'Può ricevere email',
      meaning: 'Il dominio ha record MX e ogni server di posta ha un indirizzo IP.',
      action: 'Niente. Se la posta continua a non arrivare, controlla il server di posta o il filtro antispam.',
    },
    {
      result: 'Ha record MX, ma qualcosa va corretto',
      meaning: 'Almeno un record ha un problema. Lo strumento lo mostra sotto il server.',
      action: 'Correggi il record presso il gestore del DNS. I problemi più comuni sono spiegati sotto questa tabella.',
    },
    {
      result: 'Non ha record MX',
      meaning: "Chi invia ripiega sull'indirizzo del dominio stesso (il suo record A o AAAA).",
      action: 'Aggiungi i record MX se il dominio deve ricevere email. I valori te li dà il tuo provider di posta.',
    },
    {
      result: 'Non può ricevere email',
      meaning: 'Nessun record MX e nessun indirizzo di riserva.',
      action: "Aggiungi i record MX, oppure lascia tutto com'è se il dominio non serve per le email.",
    },
    {
      result: 'Non accetta email',
      meaning: 'Il dominio pubblica un record MX nullo (0 .). Dice ai mittenti di non tentare la consegna (RFC 7505).',
      action: 'Niente, se il dominio non serve per le email. Non tenerlo su un dominio da cui invii, perché risposte e rimbalzi non possono tornare indietro.',
    },
    {
      result: 'Non esiste',
      meaning: 'Il DNS non ha nessun record di questo dominio.',
      action: 'Controlla che il nome sia scritto bene e che il dominio sia registrato.',
    },
  ],
  resultsNote:
    'Lo strumento segnala anche quattro problemi dei singoli record. Un record può puntare a un indirizzo IP invece che a un nome host. Il nome del server può essere un alias (un CNAME), cosa che la RFC 2181 non permette. Il nome del server può non avere un indirizzo IP, quindi la posta inviata lì non può essere consegnata. Oppure il dominio può pubblicare un MX nullo insieme a record MX normali, e le due cose si contraddicono.',
  providersTitle: 'Record MX per Google Workspace, Microsoft 365 e altri provider',
  providersIntro:
    'Se la ricerca dei record MX mostra uno di questi nomi di server, sai chi gestisce le email del dominio. Il numero prima di ogni nome è la sua priorità. Quando configuri un provider, copia i valori dalla sua pagina di configurazione. Alcuni dipendono dal tuo dominio o dalla tua regione.',
  thProvider: 'Provider',
  thRecords: 'Record MX',
  providerNotes: {
    'Google Workspace': 'Le configurazioni più vecchie usano ASPMX.L.GOOGLE.COM più quattro server ALT. Google li supporta ancora.',
    'Microsoft 365':
      "La prima parte è unica per il tuo dominio. I domini con DNSSEC ricevono un nome che finisce in mx.microsoft. Copia il valore esatto dall'interfaccia di amministrazione.",
    'Zoho Mail': "La parte finale dipende dal tuo data center, per esempio mx.zoho.eu per l'UE.",
    'iCloud Mail': 'Per i domini personalizzati su iCloud+.',
    'Cloudflare Email Routing': "Inoltra la posta a un'altra casella. Le priorità le imposta Cloudflare.",
    'Amazon SES': 'Per ricevere posta. La parte centrale è la tua regione AWS.',
    IONOS: 'In alcuni paesi il nome finisce in modo diverso, come mx00.ionos.de.',
  },
  providersAfter:
    'A volte i record MX puntano invece a Proofpoint, Mimecast o Barracuda. Sono gateway di sicurezza. La posta passa prima da loro, viene filtrata e poi arriva al vero provider della casella, che la ricerca non vede. I gateway rendono anche più difficile la verifica email, perché rispondono per ogni indirizzo. Qui trovi [come verificare le email dietro un gateway di sicurezza](/blog/how-to-verify-emails-behind-secure-email-gateways).',
  changeTitle: 'Come cambiare i tuoi record MX',
  changeParas: [
    'Per spostare la posta su un nuovo provider, aggiungi i suoi record MX presso il gestore del DNS e togli quelli vecchi. Chi invia segue quello che risponde il DNS. La posta inizia ad arrivare al nuovo server man mano che scadono le risposte in cache.',
    'Il tempo necessario dipende dal TTL dei vecchi record. Se pianifichi il cambio, abbassa prima il TTL a pochi minuti. Fallo con almeno un intero periodo di TTL di anticipo, così il vecchio TTL, più lungo, è già scaduto il giorno del cambio. Quando tutto funziona, rialzalo. Tieni comunque aperta la vecchia casella per qualche giorno, nel caso arrivi ancora qualche email.',
    "I provider spesso indicano fino a 48 o 72 ore perché le modifiche siano visibili. È un limite massimo prudente, non l'attesa normale. Aggiungere record MX a un dominio che non ne aveva può richiedere un po' di più. I resolver, infatti, possono avere in cache anche la risposta vuota. Per quanto tempo la tengono lo decide il record SOA del dominio.",
    'Dopo il cambio, [aggiorna il tuo record SPF](/spf-checker) per autorizzare il nuovo provider a inviare per te, e attiva la sua firma DKIM. Se invii dal tuo server, il [generatore DKIM](/dkim-generator) crea una chiave e il [generatore DMARC](/dmarc-generator) prepara il record DMARC che collega i due.',
  ],
  mailboxTitle: 'Un MX Lookup non verifica la casella di posta',
  mailboxParas: [
    "I record MX ti dicono che il dominio accetta posta. Non ti dicono se un certo indirizzo esiste. Un'email a giulia@example.com può rimbalzare anche se example.com ha record MX corretti, perché Giulia ha lasciato l'azienda o l'indirizzo non è mai esistito.",
    "Per controllare la casella bisogna chiedere al server di posta, ed è quello che fa uno strumento di verifica email. Usa la [verifica email](/email-checker) per un solo indirizzo, o la [verifica email in blocco](/bulk-email-verifier) per un'intera lista prima di una campagna.",
  ],
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: "Cos'è un record MX?",
      a: 'È il record DNS che indica i server di posta di un dominio. Quando qualcuno scrive a un indirizzo di quel dominio, il suo server di posta cerca i record MX. Così sa dove consegnare il messaggio.',
    },
    {
      q: 'Come faccio un MX Lookup del mio dominio?',
      a: 'Scrivi il dominio nel campo in cima a questa pagina. Da terminale, nslookup -type=mx example.com funziona su Windows e dig mx example.com funziona su macOS e Linux.',
    },
    {
      q: 'Un dominio può avere più di un record MX?',
      a: 'Sì, e la maggior parte ne ha più di uno. Chi invia prova prima il record con il numero di priorità più basso e tiene gli altri come riserva. I record con lo stesso numero si dividono il carico.',
    },
    {
      q: 'Cosa succede se un dominio non ha record MX?',
      a: "Chi invia ripiega sul record A o AAAA del dominio e prova a consegnare lì. Funziona solo se a quell'indirizzo c'è un server di posta. Per questo un dominio che deve ricevere email ha bisogno dei record MX.",
    },
    {
      q: 'Un record MX può puntare a un indirizzo IP o a un CNAME?',
      a: "No. Deve indicare un host che ha un proprio record A o AAAA. Un indirizzo IP nel record viola lo standard, e la RFC 2181 dice che il nome non deve essere un alias. Alcuni mittenti seguono comunque l'alias, ma non puoi contarci.",
    },
    {
      q: 'Chi gestisce i miei record MX?',
      a: 'Chi gestisce il DNS del tuo dominio. Di solito è il registrar da cui hai comprato il dominio, oppure un servizio come Cloudflare se ci hai spostato i name server. I record sono pubblici, perché ogni mittente deve poterli leggere.',
    },
    {
      q: 'Quanto ci mettono le modifiche ai record MX?',
      a: "Al massimo il TTL del vecchio record. I resolver che lo hanno in cache tengono la vecchia risposta finché il TTL non scade. Un TTL di 3600, quindi, vuol dire fino a un'ora. Anche il gestore del DNS può impiegare qualche minuto per pubblicare la modifica.",
    },
    {
      q: 'Mi serve un record MX per inviare email?',
      a: "No. I record MX servono per ricevere posta. L'invio dipende da SPF, DKIM e DMARC. Alcuni server di destinazione, però, rifiutano la posta da un dominio che non ha né record MX né record A. Un dominio così non può ricevere la risposta.",
    },
  ],
  ctaHeadline: 'Verifica la casella, non solo il dominio',
}


const fr: MxPageStrings = {
  metaTitle: 'MX Lookup : Vérifier les enregistrements MX d’un domaine | Giggal.ai',
  ogTitle: 'MX Lookup : Vérifier les enregistrements MX d’un domaine',
  description:
    'Outil gratuit de MX lookup pour n’importe quel domaine. Consultez la liste des serveurs de messagerie par ordre de priorité et détectez les anomalies DNS.',
  ogLocale: 'fr_FR',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Vérification gratuite des enregistrements MX par Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Vérificateur d’enregistrements MX gratuit',
  featureList: [
    'Interrogation des enregistrements MX pour tout domaine',
    'Serveurs de messagerie triés par ordre de priorité',
    'Adresses IPv4 et IPv6 pour chaque serveur',
    'Détection des erreurs de syntaxe, CNAME et Null MX',
    'Identification automatique du fournisseur d’e-mail',
  ],
  h1: 'Vérification des enregistrements MX (MX Lookup)',
  heroIntro:
    'Effectuez un MX lookup sur n’importe quel domaine pour afficher les serveurs qui reçoivent ses e-mails, classés dans l’ordre exact testé par les expéditeurs.',
  howTitle: 'Comment vérifier les enregistrements MX d’un domaine',
  howSteps: [
    'Saisissez le domaine dans le champ ci-dessus. Une adresse e-mail complète ou l’URL d’un site fonctionne également ; l’outil extrait automatiquement le domaine.',
    'Cliquez sur « Vérifier les enregistrements MX ». La requête interroge le DNS public en direct pour afficher ce que voit un serveur expéditeur à cet instant.',
    'Consultez le bandeau récapitulatif : il indique immédiatement si le domaine est configuré pour recevoir des messages.',
    'Analysez le tableau détaillé : chaque ligne présente un serveur de messagerie avec sa priorité, ses adresses IPv4/IPv6 et son TTL.',
  ],
  howNote:
    'Vous venez de mettre à jour vos enregistrements et voyez encore les anciens ? Patientez jusqu’à l’expiration du TTL indiqué dans le tableau. Le TTL (Time to Live) définit la durée de mise en cache chez les résolveurs DNS. Le lien dans votre barre d’adresse recharge exactement ce test.',
  imageAlt:
    'Schéma explicatif montrant l’acheminement d’un e-mail vers les serveurs MX d’un domaine selon leur priorité.',
  whatTitle: 'Qu’est-ce qu’un enregistrement MX ?',
  whatBefore: [
    'Un enregistrement MX (Mail Exchanger) est un enregistrement DNS qui indique aux serveurs tiers vers quelles machines acheminer les e-mails d’un domaine. Lorsqu’un message est envoyé à jean@exemple.fr, le serveur expéditeur interroge le DNS d’exemple.fr pour obtenir ses hôtes MX. Pour une explication pas à pas, consultez notre guide sur l’[enregistrement MX](/glossary/mx-record).',
    'Chaque enregistrement associe un indice de priorité et un nom d’hôte. Par exemple, la configuration standard de Google Workspace utilise un enregistrement unique :',
  ],
  whatAfter: [
    'Les anciens domaines configurés sous Google Workspace utilisent parfois cinq enregistrements débutant par ASPMX.L.GOOGLE.COM. Google continue de les prendre en charge sans modification obligatoire.',
    'Les enregistrements MX contrôlent uniquement la réception du courrier. L’authentification des e-mails sortants dépend d’autres protocoles, présentés dans notre guide [SPF, DKIM et DMARC expliqués](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Comprendre la priorité des serveurs MX',
  priorityParas: [
    'Les serveurs expéditeurs contactent en priorité l’hôte associé au plus petit numéro. En cas d’indisponibilité, ils basculent sur le suivant. Lorsque deux serveurs partagent la même priorité, la charge est répartie équitablement entre eux (RFC 5321, section 5.1).',
    'Seul l’ordre relatif compte, et non la valeur absolue. Des priorités fixées à 10 et 20 produisent exactement le même comportement que 1 et 2. Par exemple, gmail.com utilise cinq serveurs échelonnés à 5, 10, 20, 30 et 40.',
  ],
  resultsTitle: 'Signification des diagnostics du MX lookup',
  thResult: 'Statut',
  thMeaning: 'Explication technique',
  thAction: 'Mesure recommandée',
  results: [
    {
      result: 'Peut recevoir des e-mails',
      meaning: 'Le domaine possède des enregistrements MX valides et chaque serveur dispose d’adresses IP résolubles.',
      action: 'Aucune action requise. Si des messages n’arrivent pas, vérifiez les filtres antispam ou la configuration du serveur.',
    },
    {
      result: 'A des enregistrements MX, mais nécessite une correction',
      meaning: 'Un ou plusieurs enregistrements présentent une anomalie indiquée sous l’hôte concerné.',
      action: 'Corrigez l’enregistrement auprès de votre hébergeur DNS en suivant les explications ci-dessous.',
    },
    {
      result: 'N’a aucun enregistrement MX',
      meaning: 'Les expéditeurs se rabattent sur l’enregistrement A ou AAAA du domaine hôte (mécanisme de fallback).',
      action: 'Publiez des enregistrements MX si le domaine doit recevoir des e-mails de manière fiable.',
    },
    {
      result: 'Ne peut pas recevoir d’e-mails',
      meaning: 'Aucun enregistrement MX ni adresse IP hôte n’ont été trouvés dans le DNS.',
      action: 'Ajoutez des enregistrements MX fournis par votre prestataire de messagerie.',
    },
    {
      result: 'N’accepte aucun e-mail',
      meaning: 'Le domaine publie un enregistrement Null MX (0 .) qui signale explicitement le refus de tout courrier (RFC 7505).',
      action: 'À conserver si le domaine ne sert qu’au web. À supprimer impérativement si vous envoyez des e-mails avec ce domaine.',
    },
    {
      result: 'N’existe pas',
      meaning: 'Le serveur DNS renvoie une erreur NXDOMAIN pour ce nom de domaine.',
      action: 'Vérifiez l’orthographe et assurez-vous que le nom de domaine est bien réservé et actif.',
    },
  ],
  resultsNote:
    'L’outil contrôle également quatre anomalies fréquentes : l’utilisation d’une adresse IP brute au lieu d’un nom d’hôte, l’emploi d’un alias CNAME (interdit par la RFC 2181), l’absence d’adresse IP résoluble pour un serveur déclaré, et la présence erronée d’un Null MX combiné à des serveurs normaux.',
  providersTitle: 'Enregistrements MX de Google Workspace, Microsoft 365 et autres services',
  providersIntro:
    'La présence de ces noms d’hôte permet d’identifier immédiatement la plateforme qui héberge la messagerie d’un domaine. Lors de votre configuration, fiez-vous toujours aux paramètres exacts fournis dans votre console d’administration.',
  thProvider: 'Fournisseur',
  thRecords: 'Enregistrements MX',
  providerNotes: {
    'Google Workspace': 'Les anciennes configurations conservent ASPMX.L.GOOGLE.COM et ses quatre serveurs ALT.',
    'Microsoft 365': 'Le préfixe dépend de votre domaine. Les domaines protégés par DNSSEC se terminent en mx.microsoft.',
    'Zoho Mail': 'L’extension varie selon le centre de données (ex. mx.zoho.eu pour l’Union européenne).',
    'iCloud Mail': 'Utilisé pour les domaines personnalisés avec un abonnement iCloud+.',
    'Cloudflare Email Routing': 'Redirige le courrier vers une boîte externe. Cloudflare gère directement les priorités.',
    'Amazon SES': 'Configuration pour la réception d’e-mails entrants, dépendante de votre région AWS.',
    IONOS: 'Certaines zones géographiques emploient des extensions dédiées (ex. mx00.ionos.fr).',
    OVHcloud: 'OVH répartit le trafic sur cinq serveurs de mx0 à mx4 avec des priorités échelonnées de 1 à 200.',
  },
  providersAfter:
    'Il arrive que les enregistrements MX pointent vers Proofpoint, Mimecast ou Barracuda. Il s’agit de passerelles de sécurité de messagerie (SEG) qui filtrent le trafic avant redistribution. Pour en savoir plus, découvrez [comment vérifier des e-mails protégés par une passerelle de sécurité](/blog/how-to-verify-emails-behind-secure-email-gateways).',
  changeTitle: 'Modifier vos enregistrements MX sans interruption',
  changeParas: [
    'Lorsque vous changez de prestataire de messagerie, ajoutez les nouveaux enregistrements MX dans votre zone DNS puis supprimez les anciens. Les résolveurs adoptent progressivement les nouvelles valeurs au fur et à mesure de l’expiration de leurs caches.',
    'Pour une transition fluide, abaissez le TTL de vos anciens enregistrements à quelques minutes au moins 24 à 48 heures avant la bascule. Rehaussez-le une fois la migration validée. Conservez l’ancienne boîte active quelques jours pour recueillir les derniers messages en transit.',
    'La propagation complète peut requérir de quelques heures à 48 heures selon les caches des serveurs distants. Si vous configurez un domaine neuf, la prise en compte est généralement quasi immédiate.',
    'Après avoir mis à jour vos serveurs MX, ajustez votre [enregistrement SPF](/spf-checker) pour autoriser le nouveau fournisseur. Activez également la signature DKIM avec notre [générateur DKIM](/dkim-generator) et liez l’ensemble via notre [générateur DMARC](/dmarc-generator).',
  ],
  mailboxTitle: 'Le MX lookup vérifie le domaine, pas l’existence de la boîte mail',
  mailboxParas: [
    'Des enregistrements MX valides prouvent que le domaine est en mesure d’accepter du courrier, mais ne garantissent pas que l’adresse de votre destinataire existe réellement.',
    'Pour vérifier si une boîte aux lettres spécifique est active sans lui envoyer d’e-mail, utilisez notre [vérificateur d’e-mail](/email-checker) à l’unité ou notre [vérificateur d’e-mail en masse](/bulk-email-verifier) pour nettoyer vos listes de diffusion.',
  ],
  faqTitle: 'Foire aux questions sur les enregistrements MX',
  faqs: [
    {
      q: 'À quoi sert un enregistrement MX ?',
      a: 'Il s’agit d’une instruction DNS qui désigne les serveurs chargés de réceptionner les e-mails adressés à un nom de domaine. Sans lui, les serveurs distants ne savent pas où déposer les messages.',
    },
    {
      q: 'Comment tester les enregistrements MX d’un domaine ?',
      a: 'Saisissez le nom de domaine dans le vérificateur ci-dessus. En ligne de commande, vous pouvez exécuter nslookup -type=mx exemple.fr sous Windows ou dig mx exemple.fr sous macOS et Linux.',
    },
    {
      q: 'Peut-on configurer plusieurs enregistrements MX ?',
      a: 'Oui, la plupart des services professionnels en utilisent plusieurs pour assurer une redondance. Les expéditeurs s’adressent au serveur le plus prioritaire et basculent sur les suivants en cas de panne.',
    },
    {
      q: 'Que se passe-t-il si un domaine n’a pas d’enregistrement MX ?',
      a: 'La norme SMTP prévoit un repli sur l’enregistrement A ou AAAA du domaine. La remise échoue si aucun serveur de messagerie n’est configuré sur cette adresse IP.',
    },
    {
      q: 'Un enregistrement MX peut-il pointer vers une IP ou un CNAME ?',
      a: 'Non. Il doit obligatoirement désigner un nom d’hôte possédant un enregistrement A ou AAAA direct. La RFC 2181 proscrit l’usage d’alias CNAME pour les cibles MX.',
    },
    {
      q: 'Où gère-t-on les enregistrements MX ?',
      a: 'Dans la zone DNS de votre domaine, accessible auprès de votre bureau d’enregistrement (registrar) ou de votre gestionnaire de serveurs de noms comme Cloudflare.',
    },
    {
      q: 'Combien de temps prend la propagation d’un changement de MX ?',
      a: 'Le délai correspond au TTL de l’ancien enregistrement (généralement 1 heure à 24 heures). Une fois ce délai écoulé, l’ensemble des serveurs interroge les nouvelles valeurs.',
    },
    {
      q: 'Faut-il un enregistrement MX pour envoyer des e-mails ?',
      a: 'Techniquement non, les enregistrements MX ne gèrent que la réception. En pratique, la majorité des serveurs antispam rejettent les messages provenant de domaines dépourvus de tout enregistrement MX ou A.',
    },
  ],
  ctaHeadline: 'Vérifiez la boîte mail, pas seulement le domaine',
}

const es: MxPageStrings = {
  metaTitle: 'MX Lookup: Verificar registros MX de cualquier dominio | Giggal.ai',
  ogTitle: 'MX Lookup: Verificar registros MX de cualquier dominio',
  description:
    'Herramienta gratuita de MX lookup para cualquier dominio. Consulta los servidores de correo en orden de prioridad y detecta registros MX ausentes o erróneos.',
  ogLocale: 'es_ES',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Verificador gratuito de registros MX de Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Verificador de registros MX gratuito',
  featureList: [
    'Consulta de registros MX para cualquier dominio',
    'Servidores de correo ordenados por prioridad',
    'Direcciones IPv4 e IPv6 para cada servidor',
    'Detección de errores, CNAME y Null MX',
    'Identificación automática del proveedor de correo',
  ],
  h1: 'Verificación de registros MX (MX Lookup)',
  heroIntro:
    'Realiza una consulta MX en cualquier dominio para descubrir qué servidores reciben sus correos y en qué orden de prioridad intentan la entrega los remitentes.',
  howTitle: 'Cómo consultar los registros MX de un dominio',
  howSteps: [
    'Escribe el dominio en la casilla superior. También puedes pegar una dirección de correo o enlace web; la herramienta extraerá el dominio limpio.',
    'Haz clic en «Consultar registros MX». La herramienta consulta el DNS público en tiempo real para mostrar lo que ve cualquier remitente en este instante.',
    'Revisa el resumen superior: te indicará con claridad si el dominio está listo para recibir correo.',
    'Examina la tabla de servidores: cada fila muestra el servidor de correo, su prioridad numérica, sus direcciones IP y su TTL.',
  ],
  howNote:
    '¿Has cambiado tus registros hace poco y aún ves los anteriores? Espera a que venza el TTL de la tabla. El TTL indica los segundos que los resolvers DNS guardan la respuesta en caché. El enlace en tu navegador conserva la consulta para compartirla con tu equipo.',
  imageAlt:
    'Ilustración que muestra cómo un correo electrónico sigue los registros MX de un dominio en orden de prioridad.',
  whatTitle: 'Qué es un registro MX',
  whatBefore: [
    'Un registro MX (Mail Exchanger) es la entrada DNS que indica a otros servidores a dónde enviar los correos de un dominio. Cuando alguien escribe a sara@ejemplo.es, su servidor consulta los registros MX de ejemplo.es para conectarse al host indicado. Para una explicación paso a paso, consulta nuestro glosario sobre el [registro MX](/glossary/mx-record).',
    'Cada registro contiene un número de prioridad y un nombre de servidor. Por ejemplo, la documentación de Google Workspace establece una entrada única como esta:',
  ],
  whatAfter: [
    'Los dominios más antiguos con Google Workspace suelen tener cinco registros que empiezan por ASPMX.L.GOOGLE.COM. Google los sigue admitiendo, por lo que no es necesario cambiarlos.',
    'Los registros MX solo controlan la recepción. El envío y la autenticación dependen de otros protocolos explicados en nuestra guía de [SPF, DKIM y DMARC explicados](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Qué significa el número de prioridad',
  priorityParas: [
    'Los remitentes prueban primero el servidor con el número más bajo. Si no responde, pasan al siguiente. Si dos servidores tienen el mismo número, se reparte la carga entre ellos de forma equitativa (RFC 5321, sección 5.1).',
    'Solo importa el orden relativo, no la cifra exacta. Unos valores de 10 y 20 funcionan exactamente igual que 1 y 2. Por ejemplo, gmail.com utiliza servidores con prioridades 5, 10, 20, 30 y 40.',
  ],
  resultsTitle: 'Qué significa el resultado de tu consulta MX',
  thResult: 'Resultado',
  thMeaning: 'Significado técnico',
  thAction: 'Qué hacer',
  results: [
    {
      result: 'Puede recibir correos electrónicos',
      meaning: 'El dominio tiene registros MX válidos y cada servidor cuenta con direcciones IP resolubles.',
      action: 'Nada. Si no llegan los mensajes, comprueba el filtro antispam o la configuración del buzón.',
    },
    {
      result: 'Tiene registros MX, pero requiere corrección',
      meaning: 'Al menos un registro presenta un fallo. La herramienta lo detalla bajo el servidor afectado.',
      action: 'Corrige la entrada en tu proveedor de DNS siguiendo las advertencias de abajo.',
    },
    {
      result: 'No tiene registros MX',
      meaning: 'Los remitentes intentan recurrir a la dirección A o AAAA directa del dominio (mecanismo fallback).',
      action: 'Añade registros MX si el dominio debe recibir correo con normalidad.',
    },
    {
      result: 'No puede recibir correos',
      meaning: 'No hay registros MX ni direcciones IP a las que los remitentes puedan recurrir.',
      action: 'Configura los registros MX que te proporcione tu proveedor de correo.',
    },
    {
      result: 'No acepta correos electrónicos',
      meaning: 'El dominio publica un registro Null MX (0 .), señalando que rechaza todo mensaje entrante (RFC 7505).',
      action: 'Correcto si el dominio solo se usa para web. Elimínalo si envías correos desde este dominio.',
    },
    {
      result: 'No existe',
      meaning: 'El DNS no tiene constancia de este dominio (error NXDOMAIN).',
      action: 'Comprueba que el nombre esté bien escrito y registrado.',
    },
  ],
  resultsNote:
    'La herramienta también detecta cuatro problemas frecuentes: registros que apuntan a una IP numérica en vez de a un nombre de host, nombres de servidor que son alias CNAME (prohibido por la RFC 2181), servidores sin dirección IP válida y dominios que mezclan un Null MX con registros normales.',
  providersTitle: 'Registros MX para Google Workspace, Microsoft 365 y otros proveedores',
  providersIntro:
    'Si la búsqueda muestra alguno de estos servidores, sabrás al instante qué empresa gestiona el correo del dominio. Al configurarlos en tu zona DNS, copia los valores exactos indicados por tu proveedor.',
  thProvider: 'Proveedor',
  thRecords: 'Registros MX',
  providerNotes: {
    'Google Workspace': 'Las configuraciones antiguas usan ASPMX.L.GOOGLE.COM y cuatro servidores ALT.',
    'Microsoft 365': 'El valor exacto incluye un token exclusivo de tu dominio en el portal de administración.',
    'Zoho Mail': 'La terminación depende de tu centro de datos (por ejemplo, mx.zoho.eu en Europa).',
    'iCloud Mail': 'Para dominios personalizados configurados con iCloud+.',
    'Cloudflare Email Routing': 'Reenvía correos a buzones de destino. Cloudflare asigna las prioridades.',
    'Amazon SES': 'Para la recepción de mensajes en la región de AWS seleccionada.',
    IONOS: 'Algunos países utilizan terminaciones locales como mx00.ionos.es.',
    OVHcloud: 'OVH utiliza servidores desde mx0 hasta mx4 con prioridades escalonadas.',
  },
  providersAfter:
    'A veces los registros MX apuntan a Proofpoint, Mimecast o Barracuda. Son pasarelas de seguridad (SEG) que analizan el correo antes de pasarlo al buzón final. Si necesitas validar direcciones en estos entornos, consulta [cómo verificar correos tras un gateway de seguridad](/blog/verificar-correos-tras-un-gateway-de-seguridad).',
  changeTitle: 'Cómo cambiar tus registros MX sin perder mensajes',
  changeParas: [
    'Para migrar a otro proveedor, crea los nuevos registros MX en tu proveedor de DNS y elimina los antiguos. Los remitentes comenzarán a enviar al nuevo servidor a medida que caduquen las respuestas en caché.',
    'Para evitar incidencias, reduce el TTL de tus registros MX actuales a pocos minutos al menos uno o dos días antes del cambio. Vuelve a subir el TTL cuando todo funcione correctamente y mantén el buzón anterior activo unos días más.',
    'Muchos proveedores avisan de que los cambios pueden tardar hasta 48 horas en propagarse por completo en todo el mundo, aunque habitualmente se actualizan mucho antes.',
    'Al finalizar el cambio, recuerda actualizar tu [registro SPF](/spf-checker) para autorizar al nuevo servidor, activa las claves con nuestro [generador DKIM](/dkim-generator) y protégele con nuestro [generador DMARC](/dmarc-generator).',
  ],
  mailboxTitle: 'La consulta MX no verifica la existencia del buzón',
  mailboxParas: [
    'Que un dominio tenga registros MX correctos solo demuestra que puede recibir correo, pero no que una dirección concreta esté operativa.',
    'Para cerciorarte de que un buzón existe antes de lanzar tu campaña, utiliza nuestro [validador de correo](/email-checker) individual o el [validador de correos masivos](/bulk-email-verifier).',
  ],
  faqTitle: 'Preguntas frecuentes sobre registros MX',
  faqs: [
    {
      q: '¿Qué es un registro MX?',
      a: 'Es la entrada DNS que especifica los servidores encargados de recibir los correos de un dominio. Sin registros MX, los remitentes no saben a qué servidor entregar los mensajes.',
    },
    {
      q: '¿Cómo puedo consultar los registros MX de mi dominio?',
      a: 'Introduce tu dominio en el buscador superior. Desde la terminal puedes utilizar nslookup -type=mx ejemplo.es en Windows o dig mx ejemplo.es en Linux y macOS.',
    },
    {
      q: '¿Puede un dominio tener varios registros MX?',
      a: 'Sí, es la práctica recomendada para disponer de servidores de respaldo si el principal no responde.',
    },
    {
      q: '¿Qué ocurre si un dominio no tiene registros MX?',
      a: 'Los servidores remitentes intentan entregar el correo en la dirección IP del registro A del dominio. Si no hay un servidor de correo escuchando en esa IP, el mensaje rebotará.',
    },
    {
      q: '¿Puede un registro MX apuntar a una dirección IP o a un CNAME?',
      a: 'No. El estándar exige que apunte a un nombre de host con registro A o AAAA propio. La RFC 2181 prohíbe explícitamente el uso de alias CNAME.',
    },
    {
      q: '¿Quién administra mis registros MX?',
      a: 'La entidad donde gestionas la zona DNS de tu dominio, normalmente tu registrador o proveedores como Cloudflare.',
    },
    {
      q: '¿Cuánto tardan en propagarse los cambios de registros MX?',
      a: 'Depende del TTL configurado en el registro anterior, habitualmente entre 1 hora y 24 horas.',
    },
    {
      q: '¿Necesito un registro MX para enviar correos electrónicos?',
      a: 'No para enviar, pero muchos servidores de destino rechazan correos de dominios sin registros MX por considerarlos sospechosos o incapaces de recibir respuestas.',
    },
  ],
  ctaHeadline: 'Comprueba el buzón, no solo el dominio',
}

const ptBr: MxPageStrings = {
  metaTitle: 'MX Lookup: Verificar registros MX de qualquer domínio | Giggal.ai',
  ogTitle: 'MX Lookup: Verificar registros MX de qualquer domínio',
  description:
    'Ferramenta gratuita de MX lookup para qualquer domínio. Veja quais servidores recebem os e-mails, na ordem de prioridade, e identifique erros de DNS.',
  ogLocale: 'pt_BR',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Verificador gratuito de registros MX da Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Verificador de Registros MX Gratuito',
  featureList: [
    'Consulta de registros MX de qualquer domínio',
    'Servidores de e-mail ordenados por prioridade',
    'Endereços IPv4 e IPv6 para cada servidor',
    'Alerta de registros ausentes, CNAME e Null MX',
    'Identificação automática do provedor de e-mail',
  ],
  h1: 'Verificação de Registros MX (MX Lookup)',
  heroIntro:
    'Consulte os registros MX de qualquer domínio para ver quais servidores recebem seus e-mails, na ordem exata em que os remetentes tentam a entrega.',
  howTitle: 'Como consultar os registros MX de um domínio',
  howSteps: [
    'Digite o domínio no campo acima. Um endereço de e-mail completo ou link de site também funciona; a ferramenta extrai o domínio correto.',
    'Clique em «Consultar registros MX». A ferramenta consulta o DNS público em tempo real para exibir exatamente o que os servidores veem.',
    'Analise o resumo superior para saber imediatamente se o domínio está apto a receber mensagens.',
    'Consulte a tabela com os servidores de e-mail, prioridades, endereços IP e TTL.',
  ],
  howNote:
    'Atualizou seus registros recentemente e ainda vê os antigos? Aguarde o término do TTL exibido na tabela. O TTL define por quanto tempo os resolvedores DNS mantêm o registro em cache.',
  imageAlt:
    'Ilustração mostrando o fluxo de entrega de e-mail seguindo os registros MX em ordem de prioridade.',
  whatTitle: 'O que é um registro MX',
  whatBefore: [
    'Um registro MX (Mail Exchanger) é o registro DNS que orienta outros servidores sobre onde entregar as mensagens destinadas a um domínio. Ao enviar uma mensagem para contato@exemplo.com.br, o servidor consulta as entradas MX de exemplo.com.br. Veja detalhes completos no nosso glossário sobre [registro MX](/glossary/mx-record).',
    'Cada entrada é formada por um número de prioridade e pelo endereço do servidor de e-mail. A documentação do Google Workspace, por exemplo, utiliza uma entrada única:',
  ],
  whatAfter: [
    'Domínios mais antigos configurados no Google Workspace costumam ter cinco registros iniciando em ASPMX.L.GOOGLE.COM. O Google continua aceitando essa configuração normalmente.',
    'Os registros MX tratam apenas do recebimento de mensagens. Para autenticar envios e evitar spam, consulte nosso artigo sobre [SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'O que significa o número de prioridade',
  priorityParas: [
    'Os remetentes tentam primeiro o servidor com o menor valor numérico. Se houver falha, avançam para o seguinte. Servidores com valores idênticos dividem a carga de conexões (RFC 5321, seção 5.1).',
    'Apenas a ordem relativa importa. Prioridades 10 e 20 produzem o mesmo efeito prático que 1 e 2. O domínio gmail.com, por exemplo, adota os valores 5, 10, 20, 30 e 40.',
  ],
  resultsTitle: 'O que o diagnóstico do MX lookup indica',
  thResult: 'Resultado',
  thMeaning: 'Significado',
  thAction: 'Ação recomendada',
  results: [
    {
      result: 'Pode receber e-mails',
      meaning: 'O domínio possui registros MX válidos e todos os servidores têm endereços IP associados.',
      action: 'Nenhuma ação necessária. Caso mensagens não cheguem, verifique filtros de spam ou a caixa postal.',
    },
    {
      result: 'Possui registros MX, mas requer correção',
      meaning: 'Pelo menos um registro apresenta inconsistência técnica.',
      action: 'Corrija o apontamento no seu painel DNS de acordo com os detalhes abaixo.',
    },
    {
      result: 'Não possui registros MX',
      meaning: 'Remetentes tentarão a entrega no endereço IP direto do domínio (registro A/AAAA).',
      action: 'Adicione registros MX caso o domínio precise receber e-mails de forma confiável.',
    },
    {
      result: 'Não pode receber e-mails',
      meaning: 'Nenhum registro MX nem endereço IP de contingência foram localizados no DNS.',
      action: 'Configure os registros MX informados pelo seu provedor de e-mail.',
    },
    {
      result: 'Não aceita e-mails',
      meaning: 'O domínio publica um registro Null MX (0 .), informando que rejeita qualquer mensagem (RFC 7505).',
      action: 'Mantenha se o domínio for apenas institucional. Remova se for disparar e-mails por ele.',
    },
    {
      result: 'Não existe',
      meaning: 'O DNS não encontrou nenhuma informação para este domínio (NXDOMAIN).',
      action: 'Verifique a digitação e confira se o domínio está devidamente registrado.',
    },
  ],
  resultsNote:
    'A ferramenta monitora quatro erros graves: registros apontando para endereços IP em vez de nomes de host, uso de apelidos CNAME (proibido pela RFC 2181), servidores sem IP válido e registros Null MX combinados com entradas normais.',
  providersTitle: 'Registros MX para Google Workspace, Microsoft 365 e outros provedores',
  providersIntro:
    'Estes servidores ajudam a identificar de imediato qual empresa processa o correio eletrônico de um domínio. Ao configurar seu domínio, sempre consulte a documentação da sua hospedagem.',
  thProvider: 'Provedor',
  thRecords: 'Registros MX',
  providerNotes: {
    'Google Workspace': 'Configurações antigas mantêm o ASPMX.L.GOOGLE.COM e quatro servidores de contingência.',
    'Microsoft 365': 'O endereço incorpora um token específico do seu domínio informado no painel.',
    'Zoho Mail': 'A extensão depende do data center contratado (ex. mx.zoho.com ou mx.zoho.eu).',
    'iCloud Mail': 'Para domínios personalizados no plano iCloud+.',
    'Cloudflare Email Routing': 'Redireciona mensagens para caixas externas com prioridades automáticas.',
    'Amazon SES': 'Configuração para recebimento de e-mails em sua região da AWS.',
    IONOS: 'Pode variar conforme a região geográfica contratada.',
    OVHcloud: 'Utiliza múltiplos servidores de mx0 a mx4.',
  },
  providersAfter:
    'Em alguns casos, os registros MX apontam para Proofpoint, Mimecast ou Barracuda. São gateways de segurança (SEG) que inspecionam o tráfego antes da entrega. Entenda mais no guia sobre [como verificar e-mails atrás de gateways de segurança](/blog/verificar-emails-atras-de-gateways-de-seguranca).',
  changeTitle: 'Como alterar registros MX com segurança',
  changeParas: [
    'Para trocar de serviço de e-mail, cadastre as novas entradas MX no painel DNS e exclua as antigas. Os servidores externos migrarão o tráfego gradualmente.',
    'Reduza o TTL dos registros para alguns minutos com 24 a 48 horas de antecedência. Isso garante que a alteração seja reconhecida rapidamente em todo o mundo.',
    'Embora a propagação global costume levar algumas horas, serviços de suporte costumam citar até 48 horas como margem máxima de segurança.',
    'Após a mudança, atualize seu [registro SPF](/spf-checker), configure o [gerador DKIM](/dkim-generator) e valide a política no [gerador DMARC](/dmarc-generator).',
  ],
  mailboxTitle: 'O MX lookup verifica o domínio, não a existência da caixa postal',
  mailboxParas: [
    'Registros MX corretos confirmam que o domínio aceita e-mails, mas não atestam se o endereço destinatário realmente existe ou está ativo.',
    'Para testar a validade de uma conta individual antes do envio, use o nosso [verificador de e-mail](/email-checker). Para listas completas, use o [validador de e-mails em massa](/bulk-email-verifier).',
  ],
  faqTitle: 'Perguntas frequentes sobre registros MX',
  faqs: [
    {
      q: 'O que é um registro MX?',
      a: 'É uma configuração no DNS que aponta para quais servidores as mensagens de e-mail enviadas para o domínio devem ser encaminhadas.',
    },
    {
      q: 'Como verificar os registros MX do meu domínio?',
      a: 'Basta digitar o domínio no topo desta página. No terminal, use nslookup -type=mx exemplo.com.br no Windows ou dig mx exemplo.com.br no Linux/macOS.',
    },
    {
      q: 'Um domínio pode ter vários registros MX?',
      a: 'Sim, a maioria dos provedores utiliza múltiplos registros com diferentes prioridades para garantir alta disponibilidade.',
    },
    {
      q: 'O que acontece quando o domínio não tem registros MX?',
      a: 'O remetente tenta a entrega no endereço IP principal do domínio (registro A). Se não houver servidor de e-mail rodando ali, o envio falhará.',
    },
    {
      q: 'O registro MX pode apontar para um IP ou CNAME?',
      a: 'Não. Deve apontar para um nome de host com registro A ou AAAA próprio. A RFC 2181 veta explicitamente o uso de CNAMEs.',
    },
    {
      q: 'Quem administra os registros MX do meu domínio?',
      a: 'A empresa onde você gerencia a zona DNS, como seu registrador de domínio ou Cloudflare.',
    },
    {
      q: 'Quanto tempo demora a propagação do registro MX?',
      a: 'O tempo depende do TTL do registro anterior, variando geralmente de 1 a 24 horas.',
    },
    {
      q: 'É obrigatório ter registro MX para enviar e-mails?',
      a: 'Não para o envio técnico, mas muitos destinatários bloqueiam e-mails vindos de domínios sem MX por suspeita de spam e impossibilidade de resposta.',
    },
  ],
  ctaHeadline: 'Verifique a caixa postal, não apenas o domínio',
}

const nl: MxPageStrings = {
  metaTitle: 'MX Lookup: MX-records van elk domein controleren | Giggal.ai',
  ogTitle: 'MX Lookup: MX-records van elk domein controleren',
  description:
    'Gratis MX lookup voor elk domein. Bekijk welke mailservers e-mails ontvangen, gesorteerd op prioriteit, en spoor ontbrekende of foutieve records op.',
  ogLocale: 'nl_NL',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Gratis MX-record controle via Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Gratis MX-record checker',
  featureList: [
    'MX-records van elk domein opvragen',
    'Mailservers gesorteerd op prioriteit',
    'IPv4- en IPv6-adressen voor elke server',
    'Melding van ontbrekende, foutieve of Null MX-records',
    'Automatische herkenning van e-mailproviders',
  ],
  h1: 'MX-records controleren (MX Lookup)',
  heroIntro:
    'Voer een MX lookup uit voor elk domein om te zien welke mailservers de e-mail ontvangen, in de volgorde waarin verzenders ze proberen te bereiken.',
  howTitle: 'Hoe controleert u de MX-records van een domein?',
  howSteps: [
    'Voer de domeinnaam in het veld hierboven in. Een volledig e-mailadres of websitelink werkt ook; de tool isoleert automatisch het domein.',
    'Klik op «MX-records opvragen». De tool raadpleegt live het openbare DNS om exact weer te geven wat verzenders op dit moment zien.',
    'Bekijk de samenvatting bovenaan: deze toont direct of het domein gereed is om e-mails te ontvangen.',
    'Controleer de resultaattabel met mailservers, prioriteitscijfers, IP-adressen en TTL-waarden.',
  ],
  howNote:
    'Heeft u recent records aangepast en ziet u nog oude gegevens? Wacht tot de TTL uit de tabel is verstreken. De TTL geeft aan hoeveel seconden DNS-resolvers antwoorden cachen.',
  imageAlt:
    'Illustratie die toont hoe e-mail via MX-records naar mailservers wordt geleid op basis van prioriteit.',
  whatTitle: 'Wat is een MX-record?',
  whatBefore: [
    'Een MX-record (Mail Exchanger) is het DNS-record dat andere mailservers vertelt waar ze e-mail voor een domein moeten afleveren. Wanneer iemand mailt naar info@voorbeeld.nl, vraagt de server de MX-records op. Lees meer in onze woordenlijst onder [MX-record](/glossary/mx-record).',
    'Elk record bestaat uit een prioriteit en de hostnaam van een mailserver. Google Workspace hanteert bijvoorbeeld één record:',
  ],
  whatAfter: [
    'Oudere Workspace-configuraties gebruiken soms vijf records beginnend met ASPMX.L.GOOGLE.COM. Google blijft deze gewoon ondersteunen.',
    'MX-records regelen uitsluitend inkomende e-mail. Voor uitgaande e-mailbeveiliging verwijzen we naar onze gids over [SPF, DKIM en DMARC uitgelegd](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Wat betekent het prioriteitsnummer?',
  priorityParas: [
    'Verzenders proberen altijd eerst de server met het laagste nummer. Reageert die niet, dan gaan ze naar het volgende nummer. Servers met hetzelfde nummer verdelen het verkeer (RFC 5321, sectie 5.1).',
    'Alleen de volgorde telt, niet de absolute hoogte van het cijfer. Prioriteiten 10 en 20 werken identiek aan 1 en 2. Het domein gmail.com gebruikt bijvoorbeeld 5, 10, 20, 30 en 40.',
  ],
  resultsTitle: 'Wat de uitkomst van uw MX lookup betekent',
  thResult: 'Resultaat',
  thMeaning: 'Betekenis',
  thAction: 'Wat te doen',
  results: [
    {
      result: 'Kan e-mail ontvangen',
      meaning: 'Het domein heeft geldige MX-records en elke server heeft werkende IP-adressen.',
      action: 'Niets. Komen berichten niet aan, controleer dan de spamfilter of serverstatus.',
    },
    {
      result: 'Heeft MX-records, maar er moet iets worden opgelost',
      meaning: 'Minstens één record vertoont een technische afwijking.',
      action: 'Pas het record aan bij uw DNS-provider aan de hand van de details hieronder.',
    },
    {
      result: 'Heeft geen MX-records',
      meaning: 'Verzenders vallen terug op het A- of AAAA-adres van het hoofddomein.',
      action: 'Stel MX-records in als dit domein betrouwbaar e-mail moet ontvangen.',
    },
    {
      result: 'Kan geen e-mail ontvangen',
      meaning: 'Geen MX-records en geen fallback-adressen gevonden in DNS.',
      action: 'Voeg de MX-records toe die uw e-mailprovider voorschrijft.',
    },
    {
      result: 'Accepteert geen e-mail',
      meaning: 'Het domein publiceert een Null MX-record (0 .), waarmee het formeel aangeeft geen mail te willen (RFC 7505).',
      action: 'Laat staan voor websites zonder mail. Verwijder als u vanaf dit domein verzendt.',
    },
    {
      result: 'Bestaat niet',
      meaning: 'Het DNS kent dit domein niet (foutmelding NXDOMAIN).',
      action: 'Controleer de spelling en registratiestatus van de domeinnaam.',
    },
  ],
  resultsNote:
    'De tool signaleert tevens vier veelvoorkomende configuratiefouten: records die naar een IP-adres wijzen in plaats van een hostnaam, CNAME-aliassen (verboden volgens RFC 2181), ontbrekende IP-adressen en Null MX-records gemengd met gewone servers.',
  providersTitle: 'MX-records voor Google Workspace, Microsoft 365 en andere providers',
  providersIntro:
    'Wanneer u deze hostnamen herkent, weet u meteen welke dienstverlener de e-mail van het domein verwerkt. Neem bij het configureren altijd de gegevens over uit uw beheerpaneel.',
  thProvider: 'Provider',
  thRecords: 'MX-records',
  providerNotes: {
    'Google Workspace': 'Oudere installaties gebruiken ASPMX.L.GOOGLE.COM en vier extra servers.',
    'Microsoft 365': 'Het unieke adres bevat een klantspecifiek token uit het beheercentrum.',
    'Zoho Mail': 'Afhankelijk van het datacentrum (bijvoorbeeld mx.zoho.eu voor Europa).',
    'iCloud Mail': 'Voor eigen domeinen geconfigureerd via iCloud+.',
    'Cloudflare Email Routing': 'Schakelt inkomende berichten door naar externe adressen.',
    'Amazon SES': 'Voor e-mailontvangst in uw specifieke AWS-regio.',
    IONOS: 'Gebruikt soms landspecifieke extensies zoals mx00.ionos.nl.',
    OVHcloud: 'Gedistribueerd over meerdere servers van mx0 tot mx4.',
  },
  providersAfter:
    'Soms verwijzen MX-records naar Proofpoint, Mimecast of Barracuda. Dit zijn Secure Email Gateways die berichten inspecteren voor aflevering. Lees hoe u [e-mails verifieert achter een secure email gateway](/blog/e-mails-verifieren-achter-secure-email-gateway).',
  changeTitle: 'MX-records wijzigen zonder downtime',
  changeParas: [
    'Bij overstappen naar een andere e-mailprovider voegt u de nieuwe records toe in DNS en verwijdert u de oude. Externe servers schakelen geleidelijk over.',
    'Verlaag de TTL van uw MX-records één of twee dagen van tevoren naar enkele minuten. Zo merken resolvers de wijziging wereldwijd vrijwel direct op.',
    'Veel providers hanteren tot 48 uur als uiterste propagatieduur, maar doorgaans verloopt de omschakeling veel sneller.',
    'Vergeet na afloop niet uw [SPF-record](/spf-checker) aan te passen, DKIM-sleutels te genereren via de [DKIM-generator](/dkim-generator) en het beleid vast te leggen in de [DMARC-generator](/dmarc-generator).',
  ],
  mailboxTitle: 'Een MX lookup controleert niet of de individuele mailbox bestaat',
  mailboxParas: [
    'Geldige MX-records bewijzen dat het domein e-mail kan ontvangen, maar zeggen niets over individuele e-mailadressen.',
    'Om te testen of een specifiek adres bestaat zonder een bericht te sturen, gebruikt u onze [e-mail controle](/email-checker) voor losse adressen of de [bulk e-mailverificatie](/bulk-email-verifier) voor complete bestanden.',
  ],
  faqTitle: 'Veelgestelde vragen over MX-records',
  faqs: [
    {
      q: 'Wat is een MX-record?',
      a: 'Het is een DNS-vermelding die specificeert welke mailservers de inkomende e-mail voor een bepaald domein verwerken.',
    },
    {
      q: 'Hoe voer ik een MX lookup uit?',
      a: 'Typ uw domein bovenaan deze pagina in. In de terminal typt u nslookup -type=mx voorbeeld.nl (Windows) of dig mx voorbeeld.nl (Mac/Linux).',
    },
    {
      q: 'Kan een domein meerdere MX-records hebben?',
      a: 'Ja, de meeste zakelijke domeinen hebben meerdere records voor redundantie en taakverdeling.',
    },
    {
      q: 'Wat gebeurt er als een domein geen MX-record heeft?',
      a: 'Verzenders proberen het A-record van het domein. Draait daar geen mailserver op, dan bouncet de e-mail.',
    },
    {
      q: 'Mag een MX-record naar een IP-adres of CNAME wijzen?',
      a: 'Nee. Het moet altijd naar een hostnaam met een A- of AAAA-record wijzen. RFC 2181 verbiedt CNAME-aliassen.',
    },
    {
      q: 'Wie beheert mijn MX-records?',
      a: 'De beheerder van uw DNS-zone, meestal uw registrar of een dienst zoals Cloudflare.',
    },
    {
      q: 'Hoe lang duurt het voordat gewijzigde MX-records actief zijn?',
      a: 'Dat hangt af van de TTL van het oude record, doorgaans tussen 1 en 24 uur.',
    },
    {
      q: 'Heb ik een MX-record nodig om e-mails te versturen?',
      a: 'Technisch niet, maar ontvangende mailservers weigeren vaak berichten van domeinen zonder MX- of A-record.',
    },
  ],
  ctaHeadline: 'Controleer de mailbox, niet alleen het domein',
}

const pl: MxPageStrings = {
  metaTitle: 'MX Lookup: Sprawdź rekordy MX dowolnej domeny | Giggal.ai',
  ogTitle: 'MX Lookup: Sprawdź rekordy MX dowolnej domeny',
  description:
    'Darmowe narzędzie MX lookup dla dowolnej domeny. Zobacz serwery pocztowe w kolejności priorytetu i wykryj brakujące lub błędne rekordy MX.',
  ogLocale: 'pl_PL',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Darmowe sprawdzanie rekordów MX z Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Darmowy weryfikator rekordów MX',
  featureList: [
    'Odpytywanie rekordów MX dla dowolnej domeny',
    'Serwery pocztowe posortowane według priorytetu',
    'Adresy IPv4 i IPv6 dla każdego serwera',
    'Wykrywanie brakujących wpisów, aliasów CNAME i Null MX',
    'Automatyczne rozpoznawanie dostawcy poczty',
  ],
  h1: 'Sprawdzanie rekordów MX (MX Lookup)',
  heroIntro:
    'Sprawdź rekordy MX dowolnej domeny, aby zobaczyć, które serwery pocztowe odbierają wiadomości, w kolejności w jakiej nadawcy podejmują próby doręczenia.',
  howTitle: 'Jak sprawdzić rekordy MX dla domeny',
  howSteps: [
    'Wpisz nazwę domeny w polu powyżej. Pełny adres e-mail lub adres URL również zadziała – narzędzie samo wyodrębni właściwą domenę.',
    'Kliknij «Sprawdź rekordy MX». Narzędzie pobierze dane z publicznego DNS w czasie rzeczywistym, odzwierciedlając widok zewnętrznych serwerów.',
    'Sprawdź podsumowanie u góry: dowiesz się od razu, czy domena jest w stanie odbierać wiadomości.',
    'Przejrzyj tabelę serwerów: każdy wiersz zawiera serwer pocztowy, priorytet, adresy IP i czas TTL.',
  ],
  howNote:
    'Wprowadziłeś niedawno zmiany w DNS i nadal widzisz stare serwery? Poczekaj na wygaśnięcie czasu TTL widocznego w tabeli. Link w pasku przeglądarki pozwala zapisać lub udostępnić to samo badanie.',
  imageAlt:
    'Schemat przedstawiający kierowanie poczty e-mail do serwerów MX według określonego priorytetu.',
  whatTitle: 'Czym jest rekord MX?',
  whatBefore: [
    'Rekord MX (Mail Exchanger) to wpis w DNS wskazujący serwery pocztowe odpowiedzialne za odbiór wiadomości e-mail dla danej domeny. Gdy ktoś wysyła wiadomość na adres jan@przyklad.pl, jego serwer sprawdza rekordy MX domeny przyklad.pl. Szczegóły znajdziesz w naszym słowniku pod hasłem [rekord MX](/glossary/mx-record).',
    'Każdy rekord składa się z liczby priorytetu oraz nazwy hosta serwera pocztowego. Na przykład Google Workspace zaleca jeden główny wpis:',
  ],
  whatAfter: [
    'Starsze domeny w usłudze Google Workspace posiadają często pięć rekordów rozpoczynających się od ASPMX.L.GOOGLE.COM. Google nadal w pełni je obsługuje.',
    'Rekordy MX odpowiadają wyłącznie za odbiór wiadomości. Bezpieczeństwo i uwierzytelnianie wysyłki opisujemy w poradniku [SPF, DKIM i DMARC – wyjaśnienie](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Co oznacza priorytet serwera MX?',
  priorityParas: [
    'Nadawcy próbują najpierw nawiązać połączenie z serwerem o najniższym numerze priorytetu. Jeśli nie odpowiada, przechodzą do kolejnego. Serwery o tym samym numerze równoważą obciążenie (RFC 5321, sekcja 5.1).',
    'Liczy się wyłącznie kolejność, a nie bezwzględna wartość liczb. Wartości 10 i 20 działają dokładnie tak samo jak 1 i 2. Przykładowo domena gmail.com stosuje serwery o priorytetach 5, 10, 20, 30 i 40.',
  ],
  resultsTitle: 'Co oznacza wynik sprawdzenia rekordów MX?',
  thResult: 'Wynik',
  thMeaning: 'Znaczenie techniczne',
  thAction: 'Zalecane działanie',
  results: [
    {
      result: 'Może odbierać wiadomości e-mail',
      meaning: 'Domena posiada poprawne rekordy MX, a każdy serwer ma przypisane działające adresy IP.',
      action: 'Brak konieczności działań. W razie problemów z pocztą sprawdź filtry antyspamowe.',
    },
    {
      result: 'Ma rekordy MX, ale wymagają one naprawy',
      meaning: 'Co najmniej jeden rekord zawiera błąd techniczny opisany pod danym serwerem.',
      action: 'Skoryguj wpis w panelu DNS zgodnie z poniższymi wskazówkami.',
    },
    {
      result: 'Nie ma rekordów MX',
      meaning: 'Nadawcy próbują dostarczyć pocztę na główny adres IP domeny (rekord A/AAAA).',
      action: 'Dodaj rekordy MX, jeśli domena powinna bezawaryjnie odbierać pocztę.',
    },
    {
      result: 'Nie może odbierać wiadomości e-mail',
      meaning: 'Brak wpisów MX oraz brak awaryjnych adresów IP w systemie DNS.',
      action: 'Skonfiguruj rekordy MX przekazane przez dostawcę hostingu poczty.',
    },
    {
      result: 'Nie przyjmuje żadnych wiadomości e-mail',
      meaning: 'Domena publikuje rekord Null MX (0 .), jednoznacznie informując o odrzucaniu poczty (RFC 7505).',
      action: 'Pozostaw dla domen czysto witrynowych. Usuń natychmiast, jeśli wysyłasz z tej domeny maile.',
    },
    {
      result: 'Nie istnieje',
      meaning: 'Serwery DNS nie posiadają wpisów dla wskazanej nazwy domeny (NXDOMAIN).',
      action: 'Upewnij się, że nazwa została wpisana poprawnie i domena jest zarejestrowana.',
    },
  ],
  resultsNote:
    'Narzędzie diagnozuje cztery częste nieprawidłowości: użycie bezpośredniego adresu IP zamiast nazwy hosta, wskazanie aliasu CNAME (zakazane przez RFC 2181), brak rekordów adresowych IP dla serwera oraz łączenie rekordu Null MX z normalnymi wpisami.',
  providersTitle: 'Rekordy MX dla Google Workspace, Microsoft 365 i innych dostawców',
  providersIntro:
    'Nazwy serwerów pozwalają błyskawicznie ustalić, jaka infrastruktura obsługuje pocztę danej firmy. Konfigurując domenę, zawsze wprowadzaj dokładne dane ze swojego panelu klienta.',
  thProvider: 'Dostawca',
  thRecords: 'Wpisy MX',
  providerNotes: {
    'Google Workspace': 'Starsze konfiguracje zawierają ASPMX.L.GOOGLE.COM i cztery serwery zapasowe.',
    'Microsoft 365': 'Adres zawiera indywidualny token organizacji wygenerowany w centrum administracyjnym.',
    'Zoho Mail': 'Zależy od wybranego centrum danych (np. mx.zoho.eu w Europie).',
    'iCloud Mail': 'Dla domen własnych skonfigurowanych w ramach subskrypcji iCloud+.',
    'Cloudflare Email Routing': 'Przekierowuje pocztę na zewnętrzne skrzynki z automatycznymi priorytetami.',
    'Amazon SES': 'Dedykowane do odbioru poczty w wybranym regionie chmury AWS.',
    IONOS: 'Może posiadać lokalne rozszerzenia, np. mx00.ionos.pl.',
    OVHcloud: 'Rozdzielone pomiędzy serwery mx0 do mx4.',
  },
  providersAfter:
    'Czasami rekordy MX wskazują na Proofpoint, Mimecast lub Barracuda. Są to bramki bezpieczeństwa (SEG) filtrujące pocztę przed jej ostatecznym doręczeniem. Zobacz, [jak weryfikować adresy e-mail chronione bramkami bezpieczeństwa](/blog/weryfikacja-email-za-bramka-bezpieczenstwa).',
  changeTitle: 'Jak zmienić rekordy MX bez przestojów w poczcie',
  changeParas: [
    'Zmieniając operatora poczty, najpierw utwórz nowe rekordy MX w DNS, a następnie usuń dotychczasowe. Serwery nadawców zaczną stopniowo kierować ruch do nowego operatora.',
    'Na dzień lub dwa przed migracją skróć czas TTL obecnych wpisów MX do kilku minut. Dzięki temu serwery na świecie szybciej zauważą nową konfigurację.',
    'Dostawcy poczty informują zazwyczaj o 24 do 48 godzinach na pełną propagację zmian w globalnym DNS, choć w praktyce przebiega to znacznie szybciej.',
    'Po zmianie serwerów zaktualizuj swój [rekord SPF](/spf-checker), skonfiguruj klucze przez [generator DKIM](/dkim-generator) i zabezpiecz domenę w [generatorze DMARC](/dmarc-generator).',
  ],
  mailboxTitle: 'Sprawdzenie MX dotyczy domeny, a nie konkretnej skrzynki',
  mailboxParas: [
    'Poprawność rekordów MX dowodzi jedynie, że domena przyjmuje pocztę, ale nie gwarantuje, że szukana skrzynka pocztowa rzeczywiście istnieje.',
    'Przed wysyłką kampanii przetestuj konkretny adres przez nasz [weryfikator e-mail](/email-checker) lub sprawdź całą bazę odbiorców za pomocą narzędzia [masowa weryfikacja e-mail](/bulk-email-verifier).',
  ],
  faqTitle: 'Często zadawane pytania o rekordy MX',
  faqs: [
    {
      q: 'Do czego służy rekord MX?',
      a: 'To wpis w systemie DNS wskazujący, które serwery pocztowe odpowiadają za odbiór wiadomości e-mail kierowanych do danej domeny.',
    },
    {
      q: 'Jak sprawdzić rekordy MX mojej domeny?',
      a: 'Wpisz domenę w wyszukiwarce na tej stronie. W wierszu poleceń wpisz nslookup -type=mx przyklad.pl (Windows) lub dig mx przyklad.pl (macOS/Linux).',
    },
    {
      q: 'Czy domena może mieć więcej niż jeden rekord MX?',
      a: 'Tak, większość domen posiada kilka serwerów MX z różnymi priorytetami na wypadek awarii głównego serwera.',
    },
    {
      q: 'Co się stanie, gdy domena nie posiada rekordów MX?',
      a: 'Wiadomości będą kierowane pod adres IP rekordu A domeny. Jeśli nie ma tam aktywnego serwera pocztowego, e-mail zostanie odrzucony.',
    },
    {
      q: 'Czy rekord MX może wskazywać na adres IP lub alias CNAME?',
      a: 'Nie. Musi wskazywać na bezpośrednią nazwę hosta posiadającą rekord A lub AAAA. RFC 2181 zabrania wskazywania na CNAME.',
    },
    {
      q: 'Kto zarządza moimi rekordami MX?',
      a: 'Dostawca, u którego utrzymujesz strefę DNS domeny (rejestrator domeny lub dostawca DNS, np. Cloudflare).',
    },
    {
      q: 'Ile trwa propagacja zmienionych rekordów MX?',
      a: 'Zależy to od wartości TTL poprzedniego rekordu, najczęściej od 1 do 24 godzin.',
    },
    {
      q: 'Czy potrzebuję rekordu MX, aby wysyłać wiadomości e-mail?',
      a: 'Do samej wysyłki nie, jednak serwery odbiorców często automatycznie odrzucają e-maile z domen pozbawionych wpisów MX.',
    },
  ],
  ctaHeadline: 'Sprawdź skrzynkę pocztową, a nie tylko domenę',
}

const id: MxPageStrings = {
  metaTitle: 'MX Lookup: Cek MX Record Domain Apa Saja Gratis | Giggal.ai',
  ogTitle: 'MX Lookup: Cek MX Record Domain Apa Saja Gratis',
  description:
    'Alat MX lookup gratis untuk domain apa pun. Lihat server email mana yang menerima email sesuai urutan prioritas, serta temukan record yang rusak.',
  ogLocale: 'id_ID',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: 'Pemeriksaan MX record gratis dari Giggal.ai',
  crumb: 'MX Lookup',
  appName: 'Pengecek MX Record Gratis',
  featureList: [
    'Cek record MX untuk domain apa saja',
    'Server email diurutkan berdasarkan prioritas',
    'Alamat IPv4 dan IPv6 untuk setiap mail server',
    'Mendeteksi record yang hilang, CNAME, dan Null MX',
    'Mendeteksi penyedia layanan email secara otomatis',
  ],
  h1: 'Cek MX Record Domain (MX Lookup)',
  heroIntro:
    'Jalankan MX lookup pada domain apa pun untuk melihat server email yang menerima pesannya, sesuai urutan prioritas yang dicoba oleh pengirim.',
  howTitle: 'Cara memeriksa MX record suatu domain',
  howSteps: [
    'Ketik nama domain pada kolom di atas. Anda juga bisa memasukkan alamat email lengkap atau URL website; alat ini akan mengekstrak domainnya.',
    'Klik «Cek Record MX». Sistem akan membaca DNS publik secara langsung untuk menampilkan status rute email terkini.',
    'Perhatikan ringkasan di bagian atas: Anda akan langsung tahu apakah domain tersebut dapat menerima email.',
    'Lihat tabel detail server email lengkap dengan angka prioritas, alamat IP, dan nilai TTL.',
  ],
  howNote:
    'Baru saja memperbarui DNS dan masih melihat server lama? Tunggu hingga TTL pada tabel habis. TTL menunjukkan berapa detik resolver DNS menyimpan data dalam cache.',
  imageAlt:
    'Ilustrasi alur pengiriman email menuju mail server berdasarkan urutan prioritas record MX.',
  whatTitle: 'Apa itu MX Record?',
  whatBefore: [
    'MX record (Mail Exchanger) adalah catatan DNS yang memberi tahu server lain ke mana harus mengirimkan email untuk suatu domain. Saat seseorang mengirim email ke halo@contoh.id, server pengirim akan memeriksa MX record contoh.id. Pelajari selengkapnya di glosarium kami pada entri [MX record](/glossary/mx-record).',
    'Setiap baris record memuat nomor prioritas dan nama host mail server. Google Workspace misalnya, menggunakan satu record standar:',
  ],
  whatAfter: [
    'Domain lama di Google Workspace terkadang memiliki lima record yang dimulai dengan ASPMX.L.GOOGLE.COM. Google tetap mendukung konfigurasi ini.',
    'Record MX hanya mengatur penerimaan email. Untuk keamanan dan otentikasi email keluar, simak panduan [penjelasan SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  priorityTitle: 'Arti nomor prioritas pada MX record',
  priorityParas: [
    'Pengirim akan selalu mencoba server dengan angka prioritas terendah terlebih dahulu. Jika gagal, pengirim akan beralih ke server berikutnya. Server dengan angka sama akan berbagi beban penerimaan (RFC 5321, bagian 5.1).',
    'Yang terpenting adalah urutan relatifnya, bukan nilai mutlak angkanya. Prioritas 10 dan 20 berfungsi sama persis dengan 1 dan 2. Domain gmail.com menggunakan server dengan prioritas 5, 10, 20, 30, dan 40.',
  ],
  resultsTitle: 'Arti hasil diagnostik pemeriksaan MX',
  thResult: 'Hasil',
  thMeaning: 'Penjelasan',
  thAction: 'Tindakan yang disarankan',
  results: [
    {
      result: 'Dapat menerima email',
      meaning: 'Domain memiliki record MX valid dan setiap mail server memiliki alamat IP yang aktif.',
      action: 'Tidak ada tindakan diperlukan. Jika email belum masuk, periksa filter spam atau kuota hosting.',
    },
    {
      result: 'Memiliki record MX, tetapi ada yang perlu diperbaiki',
      meaning: 'Setidaknya satu record memiliki kendala teknis yang dijelaskan di bawah nama server.',
      action: 'Perbaiki record DNS Anda sesuai peringatan yang tertera di bawah ini.',
    },
    {
      result: 'Tidak memiliki record MX',
      meaning: 'Pengirim akan mencoba mengirim ke IP utama domain (record A/AAAA).',
      action: 'Tambahkan record MX agar domain dapat menerima email dengan stabil.',
    },
    {
      result: 'Tidak dapat menerima email',
      meaning: 'Tidak ditemukan record MX maupun alamat IP fallback pada DNS domain.',
      action: 'Segera masukkan record MX yang diberikan oleh penyedia hosting email Anda.',
    },
    {
      result: 'Tidak menerima email sama sekali',
      meaning: 'Domain menerbitkan record Null MX (0 .) yang secara tegas menolak semua email (RFC 7505).',
      action: 'Biarkan jika domain memang tidak menggunakan email. Hapus jika Anda mengirim email dari domain ini.',
    },
    {
      result: 'Tidak ditemukan / tidak ada',
      meaning: 'DNS tidak menemukan catatan untuk domain ini (NXDOMAIN).',
      action: 'Periksa kembali ejaan nama domain dan pastikan domain masih aktif terdaftar.',
    },
  ],
  resultsNote:
    'Alat ini juga mendeteksi empat masalah umum: record yang mengarah ke alamat IP langsung (bukan hostname), hostname berupa alias CNAME (dilarang oleh RFC 2181), server tanpa IP yang dapat dijangkau, dan record Null MX yang tercampur dengan record normal.',
  providersTitle: 'Record MX untuk Google Workspace, Microsoft 365, dan lainnya',
  providersIntro:
    'Melihat hostname server di bawah ini membantu Anda mengetahui penyedia mana yang mengelola email suatu domain. Saat menyetel DNS, selalu salin nilai resmi dari dasbor penyedia Anda.',
  thProvider: 'Penyedia',
  thRecords: 'Record MX',
  providerNotes: {
    'Google Workspace': 'Konfigurasi lama memakai ASPMX.L.GOOGLE.COM beserta empat server ALT.',
    'Microsoft 365': 'Menggunakan token unik domain yang tertera pada admin center.',
    'Zoho Mail': 'Disesuaikan dengan pusat data regional (seperti mx.zoho.com atau mx.zoho.eu).',
    'iCloud Mail': 'Untuk domain khusus yang menggunakan langganan iCloud+.',
    'Cloudflare Email Routing': 'Meneruskan email ke kotak masuk tujuan dengan prioritas otomatis.',
    'Amazon SES': 'Untuk penerimaan email di region AWS yang bersangkutan.',
    IONOS: 'Menggunakan domain lokal sesuai wilayah pembelian.',
    OVHcloud: 'Menggunakan server mx0 hingga mx4 dengan prioritas bertingkat.',
  },
  providersAfter:
    'Terkadang MX record mengarah ke Proofpoint, Mimecast, atau Barracuda. Ini adalah Secure Email Gateway yang menyaring ancaman sebelum email diteruskan. Pelajari [cara memverifikasi email di balik gateway keamanan](/blog/verifikasi-email-di-balik-secure-email-gateway).',
  changeTitle: 'Cara mengganti MX record tanpa email terputus',
  changeParas: [
    'Saat beralih ke penyedia baru, tambahkan MX record baru di DNS terlebih dahulu, baru hapus yang lama. Server di internet akan berpindah secara bertahap.',
    'Turunkan nilai TTL record MX menjadi beberapa menit, setidaknya satu atau dua hari sebelum migrasi. Ini mempercepat pengenalan data baru saat peralihan dilakukan.',
    'Penyedia sering menyebut waktu propagasi hingga 48 jam, namun pada praktiknya perubahan biasanya menyebar jauh lebih cepat.',
    'Setelah selesai, sesuaikan [record SPF](/spf-checker), buat kunci melalui [generator DKIM](/dkim-generator), dan tetapkan aturan pada [generator DMARC](/dmarc-generator).',
  ],
  mailboxTitle: 'Pemeriksaan MX mencakup domain, bukan kotak surat individual',
  mailboxParas: [
    'Record MX yang valid membuktikan bahwa domain siap menerima email, tetapi tidak membuktikan apakah alamat penerima tertentu benar-benar ada.',
    'Untuk memastikan alamat email aktif sebelum Anda mengirim, gunakan [cek email valid](/email-checker) untuk satu alamat atau [verifikasi email massal](/bulk-email-verifier) untuk daftar kontak.',
  ],
  faqTitle: 'Pertanyaan yang sering diajukan seputar record MX',
  faqs: [
    {
      q: 'Apa fungsi utama MX record?',
      a: 'Record MX berfungsi mengarahkan pengiriman email ke mail server yang bertanggung jawab mengelola kotak masuk domain tersebut.',
    },
    {
      q: 'Bagaimana cara cek MX record?',
      a: 'Masukkan nama domain pada kolom di atas. Lewat terminal, ketik nslookup -type=mx contoh.id di Windows atau dig mx contoh.id di Linux/Mac.',
    },
    {
      q: 'Bolehkah satu domain memiliki beberapa MX record?',
      a: 'Boleh, dan sangat disarankan sebagai cadangan jika server utama mengalami gangguan.',
    },
    {
      q: 'Apa yang terjadi jika domain tidak memiliki MX record?',
      a: 'Server pengirim akan mencoba mengirim ke IP pada record A domain. Jika di sana tidak ada server email, pesan akan gagal terkirim (bounce).',
    },
    {
      q: 'Bolehkah MX record mengarah ke alamat IP atau CNAME?',
      a: 'Tidak boleh. MX record wajib mengarah ke hostname dengan record A/AAAA langsung. RFC 2181 melarang penggunaan CNAME.',
    },
    {
      q: 'Di mana saya mengatur record MX domain saya?',
      a: 'Di pengaturan DNS pada registrar tempat Anda membeli domain atau pada layanan DNS seperti Cloudflare.',
    },
    {
      q: 'Berapa lama propagasi perubahan record MX?',
      a: 'Tergantung nilai TTL record sebelumnya, biasanya berlangsung antara 1 hingga 24 jam.',
    },
    {
      q: 'Apakah saya butuh MX record untuk mengirim email?',
      a: 'Secara teknis tidak, tetapi server tujuan biasanya menolak email dari domain tanpa MX record demi mencegah spam.',
    },
  ],
  ctaHeadline: 'Periksa kotak surat, bukan hanya domainnya',
}

const ja: MxPageStrings = {
  metaTitle: 'MXレコード確認ツール：ドメインのMXを無料で検索 | Giggal.ai',
  ogTitle: 'MXレコード確認ツール：ドメインのMXを無料で検索',
  description:
    'ドメインのMXレコードを無料で確認できます。どのメールサーバーがメールを受信するかを、送信側が試す順番で表示します。MXレコードの不足や設定ミスも見つけられます。',
  ogLocale: 'ja_JP',
  ogImage: '/tools/mx-lookup-og-v2.webp',
  ogAlt: '無料のMXレコード確認ツール',
  crumb: 'MXレコード確認',
  appName: '無料のMXレコード確認ツール',
  featureList: [
    '任意のドメインのMXレコードを確認',
    'メールサーバーを優先度の順に表示',
    '各メールサーバーのIPv4・IPv6アドレスを表示',
    'MXレコードの不足、Null MX、設定ミスを検出',
    '主なメールサービスを自動で判別',
  ],
  h1: 'MXレコード確認（MX Lookup）',
  heroIntro: 'ドメインのMXレコードを確認すると、そのドメインのメールを受信するメールサーバーが、送信側が試す順番で分かります。',
  howTitle: 'ドメインのMXレコードを確認する方法',
  howSteps: [
    '上の入力欄にドメインを入力します。メールアドレスやWebサイトのURLを入力しても構いません。ツールはドメイン部分だけを使います。',
    '「MXレコードを確認」をクリックします。公開DNSからレコードを読み取るため、送信側が今見ているものと同じ内容が表示されます。',
    'まず概要を読みます。そのドメインがメールを受信できるかどうかが分かります。',
    '次に表を読みます。1行が1台のメールサーバーで、優先度の数値、IPアドレス、TTLが表示されます。',
  ],
  howNote:
    'レコードを変更したのに古い内容が表示される場合は、表に表示されたTTLが切れるまで待ってください。TTLは、リゾルバーが前回の回答を保持できる秒数です。アドレスバーのURLを開くと、同じMXレコードの確認をもう一度実行できます。同僚やDNSの管理会社にそのまま送ることもできます。',
  imageAlt: 'メールがドメインのMXレコードに従い、優先度の順にメールサーバーへ届く様子のイラスト。',
  whatTitle: 'MXレコードとは',
  whatBefore: [
    'MXレコード（メールエクスチェンジャーレコード）は、ドメイン宛てのメールをどこに配信するかを他のメールサーバーに伝えるDNSの設定です。誰かが anna@example.com にメールを送ると、送信側のメールサーバーは example.com のMXレコードを調べ、そこに書かれたサーバーに接続します。このレコードを読み取るのが、MXレコードの確認（メールサーバーの検索）です。手順を追った例を含む分かりやすい説明は、用語集の[MXレコード](/glossary/mx-record)をご覧ください。',
    '各レコードは、優先度の数値とメールサーバー名の2つの部分でできています。Google Workspaceの設定ガイドでは、次のようなレコードを1つ設定するよう案内しています。',
  ],
  whatAfter: [
    '古いWorkspaceのドメインでは、ASPMX.L.GOOGLE.COM から始まる5つのレコードが今も残っていることがよくあります。Googleはこの設定も引き続きサポートしているため、変更する必要はありません。',
    'MXレコードが扱うのは受信メールだけです。送信メールは、主にSPF、DKIM、DMARCという別のレコードが扱います。この3つの仕組みは[SPF・DKIM・DMARCの解説](/blog/spf-dkim-dmarc-explained)をご覧ください。',
  ],
  priorityTitle: '優先度の数値の意味',
  priorityParas: [
    '送信側は、数値が最も小さいサーバーから先に試します。応答がなければ、次に小さい数値のサーバーに移ります。2台のサーバーが同じ数値の場合、送信側はどちらかをランダムに選ぶため、負荷が分散されます（RFC 5321、5.1節）。',
    '意味を持つのは順番だけで、数値の大きさは関係ありません。優先度10と20は、1と2と同じように動作します。たとえばGmail自身のドメインは、5、10、20、30、40の5台のサーバーを設定しています。',
  ],
  resultsTitle: 'MXレコード確認の結果の意味',
  thResult: '結果',
  thMeaning: '意味',
  thAction: '対応',
  results: [
    {
      result: 'メールを受信できます',
      meaning: 'ドメインにMXレコードがあり、すべてのメールサーバーにIPアドレスがあります。',
      action: '対応は不要です。それでもメールが届かない場合は、メールサーバー自体か迷惑メールフィルターを確認してください。',
    },
    {
      result: 'MXレコードはありますが、修正が必要な点があります',
      meaning: '少なくとも1つのレコードに問題があります。ツールはその問題をサーバーの下に表示します。',
      action: 'DNSの管理画面でレコードを修正してください。よくある問題は、この表の下で説明しています。',
    },
    {
      result: 'MXレコードがありません',
      meaning: '送信側は、ドメイン自体のアドレス（AレコードまたはAAAAレコード）に配信を試みます。',
      action: 'ドメインでメールを受信する場合は、MXレコードを追加してください。設定する値はメールサービスの事業者が案内しています。',
    },
    {
      result: 'メールを受信できません',
      meaning: 'MXレコードがなく、代わりに使えるアドレスもありません。',
      action: 'MXレコードを追加してください。ドメインをメールに使っていない場合は、そのままで構いません。',
    },
    {
      result: 'メールを一切受け付けません',
      meaning: 'ドメインがNull MXレコード（0 .）を公開しています。これは送信側に配信を試みないよう伝える設定です（RFC 7505）。',
      action: 'ドメインをメールに使っていない場合は、対応は不要です。メールの送信に使うドメインには設定しないでください。返信やバウンス通知が戻ってこなくなります。',
    },
    {
      result: '存在しません',
      meaning: 'DNSにそのドメインの記録がまったくありません。',
      action: 'つづりを確認し、ドメインが登録されているかも確認してください。',
    },
  ],
  resultsNote:
    'ツールは、個々のレコードについて4つの問題も検出します。1つ目は、レコードがホスト名ではなくIPアドレスを指している場合です。2つ目は、サーバー名がエイリアス（CNAME）の場合で、これはRFC 2181で認められていません。3つ目は、サーバー名にIPアドレスがなく、そのサーバー宛てのメールを配信できない場合です。4つ目は、ドメインが通常のMXレコードと一緒にNull MXを公開しており、設定が矛盾している場合です。',
  providersTitle: 'Google Workspace、Microsoft 365などのMXレコード',
  providersIntro:
    'MXレコードの確認でこれらのサーバー名が表示されたら、そのドメインのメールをどの事業者が扱っているかが分かります。各名前の前の数値は優先度です。メールサービスを設定するときは、その事業者の設定ページから値をコピーしてください。値の一部は、ドメインやリージョンによって変わります。',
  thProvider: 'メールサービス',
  thRecords: 'MXレコード',
  providerNotes: {
    'Google Workspace': '古い設定では ASPMX.L.GOOGLE.COM と4台のALTサーバーを使います。Googleはこの設定も引き続きサポートしています。',
    'Microsoft 365':
      '先頭の部分はドメインごとに異なります。DNSSECを使うドメインでは、mx.microsoft で終わる名前になります。正確な値は管理センターからコピーしてください。',
    'Zoho Mail': '末尾はデータセンターによって変わります。たとえばEUでは mx.zoho.eu です。',
    'iCloud Mail': 'iCloud+の独自ドメイン用です。',
    'Cloudflare Email Routing': 'メールを別の受信トレイに転送します。優先度はCloudflareが設定します。',
    'Amazon SES': 'メールの受信用です。中央の部分はAWSのリージョンです。',
    IONOS: '国によっては mx00.ionos.de のように独自の末尾を使います。',
  },
  providersAfter:
    'MXレコードが、Proofpoint、Mimecast、Barracudaを指している場合もあります。これらはセキュアメールゲートウェイ（SEG）です。メールはまずゲートウェイを通ってフィルタリングされ、その後で実際のメールサービスに届きます。その先のメールサービスは、MXレコードの確認では分かりません。ゲートウェイはどのメールアドレスにも応答するため、メールアドレスの検証も難しくなります。詳しくは[セキュアメールゲートウェイの背後にあるメールアドレスを検証する方法](/blog/how-to-verify-emails-behind-secure-email-gateways)をご覧ください。',
  changeTitle: 'MXレコードを変更する方法',
  changeParas: [
    'メールを新しいサービスに移すには、DNSの管理画面で新しいサービスのMXレコードを追加し、古いレコードを削除します。送信側はDNSが返す内容に従うため、キャッシュされた回答が期限切れになるにつれて、メールは新しいサーバーに届くようになります。',
    'かかる時間は、古いレコードのTTLによって決まります。移行を予定している場合は、事前にTTLを数分に下げてください。切り替え日までに古い長いTTLが切れるよう、少なくともTTLの1周期分前に変更します。すべて正常に動いたら、TTLを元に戻します。一部のメールが古いメールボックスに届く場合に備えて、古いメールボックスは数日間残しておいてください。',
    'メールサービスの事業者は、変更が反映されるまで最大48時間や72時間と案内することがよくあります。これは安全を見た上限で、通常の待ち時間ではありません。MXレコードがなかったドメインに追加する場合は、少し長くかかることがあります。リゾルバーが「レコードなし」という回答もキャッシュしている可能性があるためです。その保持期間は、ドメインのSOAレコードで決まります。',
    '切り替えた後は、新しいサービスが自社の代わりに送信できるよう[SPFレコードを更新](/spf-checker)し、そのサービスのDKIM署名を有効にしてください。自社のサーバーから送信する場合は、[DKIM生成ツール](/dkim-generator)で鍵を作成し、[DMARC生成ツール](/dmarc-generator)で両者をまとめるDMARCレコードを作成できます。',
  ],
  mailboxTitle: 'MXレコードの確認ではメールボックスの存在は分かりません',
  mailboxParas: [
    'MXレコードで分かるのは、ドメインがメールを受け付けることです。特定のメールアドレスが存在するかどうかは分かりません。example.com のMXレコードに問題がなくても、jane@example.com 宛てのメールはバウンスすることがあります。Janeさんが退職した場合や、そのメールアドレスが最初から存在しなかった場合です。',
    'メールボックスを確認するには、メールサーバーに問い合わせる必要があります。これがメールアドレス検証ツールの役割です。1件なら[メールアドレスの存在確認](/email-checker)を、配信前にリスト全体を確認するなら[メールアドレスの一括検証](/bulk-email-verifier)をお使いください。',
  ],
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'MXレコードとは何ですか？',
      a: 'ドメインのメールサーバーを指定するDNSレコードです。誰かがそのドメインのメールアドレスにメールを送ると、送信側のメールサーバーがMXレコードを調べます。それによって、メッセージの配信先が決まります。',
    },
    {
      q: '自分のドメインのMXレコードはどう確認しますか？',
      a: 'このページ上部のMXレコード確認ツールにドメインを入力してください。ターミナルからは、Windowsでは nslookup -type=mx example.com、macOSとLinuxでは dig mx example.com で確認できます。',
    },
    {
      q: '1つのドメインに複数のMXレコードを設定できますか？',
      a: 'はい。ほとんどのドメインは複数設定しています。送信側は優先度の数値が最も小さいレコードから先に試し、他のレコードは予備として使います。同じ数値のレコードは負荷を分け合います。',
    },
    {
      q: 'ドメインにMXレコードがないとどうなりますか？',
      a: '送信側は、ドメイン自体のAレコードまたはAAAAレコードに配信を試みます。これはそのアドレスでメールサーバーが動いている場合にのみ機能します。そのため、メールを受信するドメインにはMXレコードが必要です。',
    },
    {
      q: 'MXレコードでIPアドレスやCNAMEを指定できますか？',
      a: 'できません。自身のAレコードまたはAAAAレコードを持つホスト名を指定する必要があります。レコードにIPアドレスを書くと規格に反します。また、RFC 2181では、この名前をエイリアスにしてはならないと定めています。エイリアスに対応する送信側もありますが、それを前提にはできません。',
    },
    {
      q: 'MXレコードは誰が管理していますか？',
      a: 'ドメインのDNSを運用している事業者です。通常は、ドメインを購入したレジストラです。ネームサーバーをCloudflareなどのサービスに移した場合は、そのサービスです。どの送信側も読み取る必要があるため、レコード自体は公開されています。',
    },
    {
      q: 'MXレコードの変更が反映されるまでどのくらいかかりますか？',
      a: '最大で古いレコードのTTLの時間です。古いレコードをキャッシュしたリゾルバーは、TTLが切れるまで古い回答を使います。たとえばTTLが3600なら、最大1時間です。DNSの管理会社が変更を公開するまでに、さらに数分かかることもあります。',
    },
    {
      q: 'メールを送信するのにMXレコードは必要ですか？',
      a: '必要ありません。MXレコードはメールを受信するためのものです。送信にはSPF、DKIM、DMARCが関係します。ただし、MXレコードもAレコードもまったくないドメインからのメールを拒否する受信サーバーもあります。そのようなドメインは返信を受け取れません。',
    },
  ],
  ctaHeadline: 'ドメインだけでなく、メールボックスまで確認しましょう',
}

export const MX_PAGE_STRINGS: Partial<Record<Locale, MxPageStrings>> & { en: MxPageStrings } = {
  en,
  de,
  it,
  fr,
  es,
  'pt-br': ptBr,
  nl,
  pl,
  id,
  ja,
}
