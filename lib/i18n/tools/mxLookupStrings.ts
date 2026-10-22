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

export const MX_PAGE_STRINGS: Partial<Record<Locale, MxPageStrings>> & { en: MxPageStrings } = { en, de, it }
