// All page copy for the SPF checker, one object per language the page ships in.
// The page is components/tools/SpfChecker/SpfCheckerPage.tsx; the URLs live in
// CLUSTERS.spfChecker (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/spfToolStrings.ts, which also holds the localized reasons for
// the "services that usually don't need an include" list (notNeededReasons).
//
// Inline markup (rendered by the page's Text helper): **bold**, `code`,
// [label](/english-path) for an internal link and [label](https://...) for an
// external one, which opens in a new tab. Internal paths are always English; the
// page routes each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface SpfPageStrings {
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
  howSteps: [string, string, string, string, string]
  howNote: string
  imageAlt: string
  whatTitle: string
  /** Before the example record. */
  whatIntro: string
  /** After the example record. */
  whatAfter: [string, string, string]
  partsTitle: string
  partsIntro: string
  thPart: string
  thDoes: string
  thLookup: string
  /** Label before the lookup answer on phones, where the header is hidden. Ends with a space. */
  lookupLabel: string
  /** Each part of a record. Lookups per RFC 7208 section 4.6.4. */
  parts: { part: string; does: string; lookup: string }[]
  partsAfter: [string, string]
  limitTitle: string
  limitParas: [string, string, string, string, string]
  underTitle: string
  underSteps: [string, string, string, string]
  underNote: string
  servicesTitle: string
  servicesIntro: string
  thService: string
  thInclude: string
  thLookups: string
  /** Lookup count on phones, after the service name: "1 lookup", "5 lookups". */
  lookupCount: (n: number) => string
  servicesNote: string
  notNeededTitle: string
  notNeededIntro: string
  notNeededAfter: string
  createTitle: string
  createIntro: string
  createSteps: [string, string, string, string, string]
  createParas: [string, string]
  endingTitle: string
  endingIntro: string
  endingList: [string, string, string]
  endingParas: [string, string]
  resultsTitle: string
  thResult: string
  thMeaning: string
  thAction: string
  /** What the tool shows, in the order it checks. */
  results: { result: string; meaning: string; action: string }[]
  receiverIntro: string
  /** Results a receiver can reach (RFC 7208 section 2.6). */
  spfResults: { result: string; meaning: string }[]
  errorsTitle: string
  errorsIntro: string
  errors: { title: string; text: string }[]
  mythsTitle: string
  myths: [string, string, string]
  authTitle: string
  authParas: [string, string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: SpfPageStrings = {
  metaTitle: 'SPF Checker: Free SPF Record Check and Generator | Giggal.ai',
  ogTitle: 'SPF Checker: Free SPF Record Check and Generator',
  description:
    'Check any domain’s SPF record for free. See what each part means, count DNS lookups against the limit of 10, find errors, or create a new SPF record.',
  ogImage: '/tools/spf-checker-og-v2.webp',
  ogAlt: 'Free SPF Record Checker and Generator',
  crumb: 'SPF Record Checker',
  appName: 'Free SPF Record Checker and Generator',
  featureList: [
    'Check the SPF record of any domain',
    'Explains each part of the record in plain English',
    'Counts DNS lookups against the limit of 10, including nested includes',
    'Flags multiple records, void lookups, +all, ptr and syntax errors',
    'Creates a new SPF record from a list of common email services',
  ],
  h1: 'SPF Record Checker and Generator',
  heroIntro:
    'Check the SPF record of any domain, or create a new one. The SPF checker explains every part of the record and counts its DNS lookups against the limit of 10.',
  howTitle: 'How to check an SPF record',
  howSteps: [
    'Type a domain into the box above. A full email address works too. The tool keeps only the domain.',
    'Click Check SPF record. The SPF record check reads the live record from public DNS, the same record a receiving server reads.',
    'Read the summary first. It tells you whether the record is valid, has warnings, or is broken.',
    'Then read the list of problems, if there are any. Each one says what to change.',
    'Below that, each part of the record is explained, with the DNS lookups it costs. Open an include to see what the service behind it allows.',
  ],
  howNote:
    'The link in your address bar runs the same SPF check again, so you can send it to a colleague or your DNS host. One limit: a receiver checks SPF against the IP address of the server that sent a message. This SPF analyzer has no message to look at, so it checks the record itself. It can’t evaluate parts built from SPF macros, which change for every sending server.',
  imageAlt: 'Illustration of an SPF record split into its parts, with a counter showing DNS lookups used out of 10.',
  whatTitle: 'What is an SPF record?',
  whatIntro:
    'An SPF record is a TXT record in a domain’s DNS. It lists the servers that may send email for that domain. SPF stands for Sender Policy Framework, and the rules are in [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). A domain that uses Google Workspace often has a record like this one:',
  whatAfter: [
    '`v=spf1` marks it as an SPF record. `include:_spf.google.com` allows every server in Google’s own list. `~all` tells receivers to treat mail from any other server with suspicion.',
    'When a message arrives, the receiving server takes the domain from the bounce address, called the Return-Path. It reads that domain’s SPF record and checks whether the sending server’s IP address is on the list. SPF does not look at the From address you see in your inbox. That is why it works together with DKIM and DMARC. For how the three fit, see [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).',
    'Since February 2024, [Gmail requires SPF or DKIM](https://support.google.com/a/answer/81126) from every sender, and both from bulk senders. Yahoo has the same rules.',
  ],
  partsTitle: 'What each part of an SPF record means',
  partsIntro:
    'An SPF record is a list of terms separated by spaces. Receivers read them from left to right and stop at the first one that matches the sending server.',
  thPart: 'Part',
  thDoes: 'What it does',
  thLookup: 'DNS lookup',
  lookupLabel: 'DNS lookup: ',
  parts: [
    { part: 'v=spf1', does: 'Marks the TXT record as SPF. It must come first, written exactly like this.', lookup: 'No' },
    { part: 'ip4:192.0.2.10', does: 'Allows one IPv4 address, or a range like 192.0.2.0/24.', lookup: 'No' },
    { part: 'ip6:2001:db8::/32', does: 'Allows one IPv6 address or range.', lookup: 'No' },
    { part: 'a', does: 'Allows the IP addresses of the domain itself, or of a domain you name after a colon.', lookup: 'Yes' },
    { part: 'mx', does: 'Allows the servers in the domain’s MX records, the ones that receive its mail.', lookup: 'Yes' },
    { part: 'include:_spf.google.com', does: 'Allows every server that another domain’s SPF record allows. This is how you add a service.', lookup: 'Yes, plus its own' },
    { part: 'exists:%{i}.example.com', does: 'Matches when a DNS lookup finds an address. Large senders use it with macros.', lookup: 'Yes' },
    { part: 'ptr', does: 'Matches by reverse DNS. RFC 7208 says not to use it, because it is slow and unreliable.', lookup: 'Yes' },
    { part: '~all or -all', does: 'Decides what happens to every server you didn’t list. It goes at the end.', lookup: 'No' },
    { part: 'redirect=example.net', does: 'Uses another domain’s SPF record instead of this one. Ignored when the record has all.', lookup: 'Yes' },
  ],
  partsAfter: [
    'Any part can start with a qualifier that sets the result when it matches. `+` means pass and is the default, so nobody writes it. `-` means fail, `~` means soft fail, and `?` means neutral. That is why the same word, all, can end a record as `-all`, `~all` or `?all`.',
    'Names are not case-sensitive, so `Include:` works as well as `include:`. RFC 7208 recommends ending every record with all or a redirect. Without either, servers you didn’t list get a neutral result.',
  ],
  limitTitle: 'The 10 DNS lookup limit',
  limitParas: [
    'Every include, a, mx, ptr, exists and redirect makes the receiver run a DNS lookup. RFC 7208 allows 10 in total. Lookups inside an include count too, so one include can cost several. ip4, ip6 and all cost nothing. When a record needs more than 10, receivers stop and return a permerror, and SPF fails.',
    'The limit is easy to reach. We measured what common includes cost against live DNS: Google Workspace 1, Microsoft 365 1, Salesforce 2, Mailgun 5 and Freshdesk 7. A company on Google Workspace that adds Mailgun and Freshdesk already needs 13 lookups. A [2024 study of SPF records](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) in .com, .net, .org and .se found that 6.5% needed more than 10 lookups. Includes of just two hosting providers’ records caused 83.7% of those cases.',
    'Costs also change. Google’s include cost 4 lookups until December 2025, when [Google replaced its nested includes with a flat list](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Some SPF guides and generators still say 4. The checker above counts the real number every time you run it.',
    'Going over the limit doesn’t always break every message. [Microsoft points out](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) that receivers stop at the first match. Mail from a server listed early can still pass, while mail from a server listed late fails. That makes the problem look random, so count the full record.',
    'There is a second limit. A lookup that finds nothing is a void lookup, for example an include of a domain that no longer exists. RFC 7208 says receivers should stop after 2 of these.',
  ],
  underTitle: 'How to get under 10 lookups',
  underSteps: [
    'Remove includes for services you no longer use.',
    'Remove includes a service no longer asks for. Mailchimp, Postmark, Brevo and Klaviyo don’t need one on your main domain, and SendGrid and Amazon SES put theirs on a subdomain. The list is further down.',
    'List your own servers with ip4 and ip6 instead of a or mx. RFC 7208 recommends this order, and IP addresses cost no lookups.',
    'Send some mail from a subdomain, such as news.example.com. Each subdomain has its own record and its own 10 lookups.',
  ],
  underNote:
    'Some services offer SPF flattening, which replaces includes with the IP addresses behind them. It saves lookups, but providers change their addresses, and a flattened record doesn’t follow. Microsoft advises flattening only services with stable, documented IP ranges, never Microsoft 365 itself, and checking the result at least every quarter.',
  servicesTitle: 'SPF includes for Google Workspace, Microsoft 365 and other services',
  servicesIntro:
    'These are the include values from each service’s setup guide, with the DNS lookups each one costs. We measured the costs against live DNS on 12 October 2026. When you set up a service, copy the value from its own guide, because some depend on your region or account.',
  thService: 'Service',
  thInclude: 'Include',
  thLookups: 'Lookups',
  lookupCount: (n) => `${n} lookup${n === 1 ? '' : 's'}`,
  servicesNote:
    'HubSpot gives every account its own include, ending in hubspotemail.net. Copy it from your HubSpot email settings. It costs 1 lookup.',
  notNeededTitle: 'Services that usually don’t need an include',
  notNeededIntro:
    'SPF is checked against the bounce address, not the From address. Many sending services now use a bounce address of their own, or a subdomain of yours. An include for them on your main domain does nothing except use up lookups.',
  notNeededAfter: 'The checker flags these includes when it finds them in your record.',
  createTitle: 'How to create an SPF record',
  createIntro:
    'Use the Create tab above to generate an SPF record. Tick the services that send your mail, and the SPF record maker writes the record and counts its lookups. If your domain already has a record, load it first, so you add to it instead of replacing it. These are the steps behind it:',
  createSteps: [
    'List every service that sends email as your domain. Think beyond your mailbox provider: newsletters, your CRM, the help desk, billing, website forms. DMARC reports show senders you forgot.',
    'Find the include for each one in its setup guide, or tick it in the tool. For your own mail servers, use their IP addresses.',
    'Choose the ending: ~all or -all. The next section explains the difference.',
    'Publish it as one TXT record on the domain itself. Most DNS hosts call that name @. If a record starting with v=spf1 already exists, edit it instead of adding a second one.',
    'Wait a few minutes and check the domain again with the SPF checker.',
  ],
  createParas: [
    'Each name that sends mail needs its own record, because subdomains don’t use the parent’s record. A domain or subdomain that never sends mail should still get one: `v=spf1 -all`. RFC 7208 calls this a well-established best practice. It stops others from sending mail that passes as that name. The [UK NCSC](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) suggests adding a DMARC record with p=reject and a null MX record to such domains too.',
    'A record longer than 255 characters has to be split into several strings within the same TXT record. Receivers join the strings without spaces, so put the space inside a string, not between them. Check how your DNS host handles long values.',
  ],
  endingTitle: '~all or -all: which ending to use',
  endingIntro: 'The big providers don’t agree, and each has a reason.',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) recommends ~all.',
    '[M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), an industry group whose members include large mailbox providers and senders, says records should end in ~all. It also asks receivers not to reject on an SPF fail until DMARC has run.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) recommends -all, as long as DKIM and DMARC are set up too.',
  ],
  endingParas: [
    'The risk with -all is that some receivers reject the message during delivery, before DMARC is checked. [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), the 2026 DMARC standard, notes that such mail never appears in your DMARC reports. That makes problems harder to find.',
    'In practice, ~all is the safer choice for a domain that sends mail, especially while you are still finding all your senders. If you have DMARC at quarantine or reject, DMARC decides what happens to failing mail anyway. Use -all on domains that send no mail at all. Never use +all, which lets every server pass, and avoid ?all, which counts the same as having no record.',
  ],
  resultsTitle: 'What your SPF check result means',
  thResult: 'Result',
  thMeaning: 'What it means',
  thAction: 'What to do',
  results: [
    {
      result: 'Valid SPF record',
      meaning: 'One record, readable, within 10 lookups, ending in ~all or -all.',
      action: 'Nothing. Check again after you add a new service that sends mail for you.',
    },
    {
      result: 'Working SPF record with warnings',
      meaning: 'Receivers can use it, but something weakens it, such as 9 or 10 lookups, no all at the end, or ptr.',
      action: 'Fix the warnings listed under the record. They often turn into errors when you add one more service.',
    },
    {
      result: 'SPF record is broken',
      meaning: 'Receivers get a permerror, so SPF fails for all mail from the domain.',
      action: 'Fix the errors listed. The most common are two records and more than 10 lookups.',
    },
    {
      result: 'SPF record doesn’t protect the domain',
      meaning: 'The record ends in +all, or includes a record that does, so every server on the internet passes.',
      action: 'Change +all to ~all or -all.',
    },
    {
      result: 'No SPF record',
      meaning: 'The domain publishes no TXT record that starts with v=spf1.',
      action: 'Create one with the Create tab. A domain that never sends mail should get v=spf1 -all.',
    },
    {
      result: 'Domain doesn’t exist',
      meaning: 'DNS has no record of the domain at all.',
      action: 'Check the spelling, and check that the domain is registered.',
    },
  ],
  receiverIntro:
    'Receiving servers use their own words for the outcome of an SPF check. You see them in message headers, as in spf=pass or spf=softfail, and in DMARC reports:',
  spfResults: [
    { result: 'pass', meaning: 'The sending server is allowed.' },
    { result: 'fail', meaning: 'The server is not allowed (-all). Receivers may reject the message.' },
    { result: 'softfail', meaning: 'The server is probably not allowed (~all). RFC 7208 says receivers shouldn’t reject on this alone.' },
    { result: 'neutral', meaning: 'The record says nothing about this server (?all). It counts the same as having no record.' },
    { result: 'none', meaning: 'The domain has no SPF record.' },
    { result: 'temperror', meaning: 'A DNS lookup failed for a moment. The sender may retry later.' },
    { result: 'permerror', meaning: 'The record is broken and can’t be read. Only a fix in DNS helps.' },
  ],
  errorsTitle: 'Common SPF record errors and how to fix them',
  errorsIntro:
    'A [2023 scan of 12 million popular domains](https://arxiv.org/abs/2502.08240) found SPF on 56.5% of them, and errors in 2.9% of the SPF records. The most common error was an include or redirect pointing to a name with no SPF record. Too many lookups came second.',
  errors: [
    {
      title: 'Two SPF records on one domain',
      text: 'This often happens when a new service’s setup guide says “add this TXT record” and someone adds it next to the old one. Two records cause a permerror. Merge them into one. Start with one v=spf1, list every include and IP address, and end with one all.',
    },
    {
      title: 'An include that points nowhere',
      text: 'If an include points to a domain with no SPF record, the whole record fails with a permerror. It can be a typo, or a service that shut down or changed its include. Remove it or replace it with the current value from the service.',
    },
    {
      title: '+all, ?all or no all at the end',
      text: '`+all` allows every server on the internet, so the record protects nothing. `?all`, or no all at all, gives a neutral result, which receivers treat like no record. End the record with ~all or -all.',
    },
    {
      title: 'ptr in the record',
      text: 'RFC 7208 says ptr should not be used. It is slow, it costs a lookup, and it is less reliable than other mechanisms when DNS has problems. Replace it with ip4 and ip6 entries for the servers it was meant to cover.',
    },
    {
      title: 'Typing mistakes',
      text: 'A space after a colon, an IPv4 address with a missing part, or a word SPF doesn’t know all cause a permerror. One mistake is quieter: `include=example.com` with an equals sign is read as an unknown setting and skipped, so that service is never allowed. The checker flags all of these.',
    },
  ],
  mythsTitle: 'Three details SPF guides often get wrong',
  myths: [
    '“An SPF record can’t contain capital letters.” RFC 7208 says names are not case-sensitive.',
    '“An SPF record can be at most 255 characters.” The 255 limit applies to each string. A longer record is split into strings. RFC 7208 only asks that the whole DNS answer stay small, under about 450 bytes.',
    '“You can have up to 10 includes.” The limit counts DNS lookups, and lookups inside includes count too.',
  ],
  authTitle: 'SPF is one part of email authentication',
  authParas: [
    'An SPF pass has limits. In the same 2023 scan, 34.7% of the domains allowed mail from more than 100,000 IP addresses. SPF also breaks when someone forwards your message, because the forwarding server isn’t in your record.',
    'DKIM signs the message itself, so it usually survives forwarding. DMARC checks that SPF or DKIM passed for the same domain as the From address, and tells receivers what to do when neither did. Many sending services pass SPF with their own bounce domain, which doesn’t match your From address. A custom Return-Path at the service fixes that. Set up the other two records with the [DKIM generator](/dkim-generator) and the [DMARC generator](/dmarc-generator), and use the [MX lookup](/mx-lookup) to check where your domain receives mail.',
    'Authentication also doesn’t help with addresses that don’t exist. Mail to them bounces, and a high bounce rate hurts delivery. Check single addresses with the [email checker](/email-checker), or a whole list with the [bulk email verifier](/bulk-email-verifier). For a short definition to share with your team, see the [SPF record glossary entry](/glossary/spf).',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is an SPF record?',
      a: 'It’s a TXT record in your domain’s DNS that lists the servers allowed to send email for the domain. Receiving servers read it to decide whether a message really came from one of your servers. SPF stands for Sender Policy Framework and is defined in RFC 7208.',
    },
    {
      q: 'How do I check my SPF record?',
      a: 'Type your domain into the SPF checker at the top of this page. From a terminal, nslookup -type=txt example.com works on Windows, and dig txt example.com works on macOS and Linux. Look for the TXT record that starts with v=spf1.',
    },
    {
      q: 'Can a domain have two SPF records?',
      a: 'No. RFC 7208 allows one SPF record per domain name. With two, receivers return a permanent error and SPF fails for all your mail. Merge both into one record. Other TXT records, such as site verification codes, can stay.',
    },
    {
      q: 'What does SPF permerror mean?',
      a: 'It means the receiver couldn’t read your SPF record, so the check fails. The usual causes are two SPF records, more than 10 DNS lookups, or an include of a domain with no SPF record. A typing mistake can also cause it. The checker above names the cause.',
    },
    {
      q: 'What is the difference between ~all and -all?',
      a: 'With ~all, mail from servers you didn’t list gets a soft fail, and receivers usually accept it with more suspicion. With -all, it gets a fail, and some receivers reject it. Google recommends ~all. Microsoft recommends -all once DKIM and DMARC are set up.',
    },
    {
      q: 'Do subdomains need their own SPF record?',
      a: 'Yes, if they send email. A subdomain doesn’t use the SPF record of its parent domain. If news.example.com sends mail, it needs its own record. If it never sends mail, give it v=spf1 -all.',
    },
    {
      q: 'How long does an SPF record change take?',
      a: 'Up to the TTL of the old record. Resolvers that cached it keep the old answer until the TTL runs out, so a TTL of 3600 means up to an hour. Google says changes can take up to 48 hours, but most show up much sooner.',
    },
    {
      q: 'Do I need SPF if I already have DKIM?',
      a: 'It’s safer to have both. Gmail and Yahoo accept SPF or DKIM from small senders, but they require both from bulk senders. DMARC passes when either one passes and matches your From domain, so having both gives you a backup.',
    },
    {
      q: 'Does SPF stop email spoofing?',
      a: 'Not on its own. SPF checks the bounce address (the Return-Path), not the From address people see. A spammer can pass SPF with their own domain and still show your name in From. DMARC closes that gap by requiring the two domains to match.',
    },
  ],
  ctaHeadline: 'Check the addresses before you send',
  ctaSupporting:
    'SPF tells receivers your mail is really from you. Giggal checks that each address exists, catch-all domains included, so fewer messages bounce. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

// German: formal "Sie", URL /de/spf-generator. Italian: "tu", URL /it/record-spf. Brazilian Portuguese: "você", URL /pt-br/registro-spf.
const de: SpfPageStrings = {
  metaTitle: 'SPF-Generator: SPF-Eintrag erstellen und prüfen | Giggal.ai',
  ogTitle: 'SPF-Generator: SPF-Eintrag erstellen und prüfen',
  description:
    'Kostenloser SPF-Generator und SPF-Check: Prüfen Sie den SPF-Eintrag jeder Domain, finden Sie Fehler und prüfen Sie das Limit von 10 DNS-Abfragen.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser SPF-Generator und SPF-Check von Giggal.ai',
  crumb: 'SPF-Generator',
  appName: 'Kostenloser SPF-Check und SPF-Generator',
  featureList: [
    'SPF-Eintrag jeder Domain prüfen',
    'Erklärt jeden Teil des Eintrags in verständlichem Deutsch',
    'Prüft das Limit von 10 DNS-Abfragen, auch in verschachtelten includes',
    'Meldet mehrere Einträge, leere Abfragen (Void Lookups), +all, ptr und Syntaxfehler',
    'Erstellt einen neuen SPF-Eintrag aus einer Liste gängiger E-Mail-Dienste',
  ],
  h1: 'SPF-Eintrag prüfen und erstellen',
  heroIntro:
    'Prüfen Sie den SPF-Eintrag jeder Domain oder erstellen Sie mit dem SPF-Generator einen neuen. Das Tool erklärt jeden Teil des Eintrags, zählt seine DNS-Abfragen und prüft das Limit von 10.',
  howTitle: 'So prüfen Sie einen SPF-Eintrag',
  howSteps: [
    'Geben Sie eine Domain in das Feld oben ein. Eine vollständige E-Mail-Adresse funktioniert auch. Das Tool übernimmt nur die Domain.',
    'Klicken Sie auf "SPF-Eintrag prüfen". Der SPF-Check liest den aktuellen Eintrag aus dem öffentlichen DNS. Das ist derselbe Eintrag, den ein empfangender Server liest.',
    'Lesen Sie zuerst die Zusammenfassung. Sie zeigt, ob der Eintrag gültig ist, Warnungen hat oder fehlerhaft ist.',
    'Lesen Sie danach die Liste der Probleme, falls es welche gibt. Bei jedem Problem steht, was Sie ändern sollten.',
    'Darunter erklärt das Tool jeden Teil des Eintrags und zeigt, wie viele DNS-Abfragen er kostet. Öffnen Sie ein include, um zu sehen, was der Dienst dahinter erlaubt.',
  ],
  howNote:
    'Der Link in Ihrer Adresszeile startet denselben SPF-Check noch einmal. Sie können ihn an Kollegen oder an Ihren DNS-Anbieter senden. Eine Einschränkung: Ein Empfänger prüft SPF gegen die IP-Adresse des Servers, der die Nachricht gesendet hat. Dieses Tool hat keine Nachricht vor sich und prüft deshalb den Eintrag selbst. Teile, die aus SPF-Makros bestehen, kann es nicht auswerten. Diese Makros ändern sich mit jedem sendenden Server.',
  imageAlt:
    'Illustration: Ein SPF-Eintrag ist in seine Teile zerlegt. Ein Zähler zeigt, wie viele der 10 DNS-Abfragen genutzt sind.',
  whatTitle: 'Was ist ein SPF-Eintrag?',
  whatIntro:
    'Ein SPF-Eintrag ist ein TXT-Eintrag im DNS einer Domain. Er listet die Server auf, die E-Mails für diese Domain senden dürfen. SPF steht für Sender Policy Framework. Die Regeln stehen in [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Eine Domain, die Google Workspace nutzt, hat oft einen Eintrag wie diesen:',
  whatAfter: [
    '`v=spf1` kennzeichnet ihn als SPF-Eintrag. `include:_spf.google.com` erlaubt jeden Server aus Googles eigener Liste. `~all` sagt Empfängern, dass sie E-Mails von allen anderen Servern als verdächtig behandeln sollen.',
    'Kommt eine Nachricht an, nimmt der empfangende Server die Domain aus der Bounce-Adresse, dem sogenannten Return-Path. Er liest den SPF-Eintrag dieser Domain und prüft, ob die IP-Adresse des sendenden Servers auf der Liste steht. SPF prüft nicht die From-Adresse, die Sie in Ihrem Posteingang sehen. Deshalb arbeitet SPF mit DKIM und DMARC zusammen. Wie die drei zusammenpassen, lesen Sie in [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
    'Seit Februar 2024 [verlangt Gmail SPF oder DKIM](https://support.google.com/a/answer/81126) von jedem Absender und beides von Massenversendern. Yahoo hat dieselben Regeln.',
  ],
  partsTitle: 'Was die Teile eines SPF-Eintrags bedeuten',
  partsIntro:
    'Ein SPF-Eintrag besteht aus Teilen, die durch Leerzeichen getrennt sind. Empfänger lesen sie von links nach rechts. Sie hören beim ersten Teil auf, der auf den sendenden Server zutrifft.',
  thPart: 'Teil',
  thDoes: 'Was er bewirkt',
  thLookup: 'DNS-Abfrage',
  lookupLabel: 'DNS-Abfrage: ',
  parts: [
    { part: 'v=spf1', does: 'Kennzeichnet den TXT-Eintrag als SPF. Steht immer am Anfang und muss genau so geschrieben sein.', lookup: 'Nein' },
    { part: 'ip4:192.0.2.10', does: 'Erlaubt eine IPv4-Adresse oder einen Bereich wie 192.0.2.0/24.', lookup: 'Nein' },
    { part: 'ip6:2001:db8::/32', does: 'Erlaubt eine IPv6-Adresse oder einen IPv6-Bereich.', lookup: 'Nein' },
    { part: 'a', does: 'Erlaubt die IP-Adressen der Domain selbst oder einer Domain, die Sie nach einem Doppelpunkt nennen.', lookup: 'Ja' },
    { part: 'mx', does: 'Erlaubt die Server aus den MX-Einträgen der Domain, also die Server, die ihre E-Mails empfangen.', lookup: 'Ja' },
    { part: 'include:_spf.google.com', does: 'Erlaubt jeden Server, den der SPF-Eintrag einer anderen Domain erlaubt. So fügen Sie einen Dienst hinzu.', lookup: 'Ja, plus die darin enthaltenen' },
    { part: 'exists:%{i}.example.com', does: 'Greift, wenn eine DNS-Abfrage eine Adresse findet. Große Absender nutzen es mit Makros.', lookup: 'Ja' },
    { part: 'ptr', does: 'Prüft über Reverse DNS. Laut RFC 7208 soll man es nicht nutzen, weil es langsam und unzuverlässig ist.', lookup: 'Ja' },
    { part: '~all oder -all', does: 'Legt fest, was mit allen Servern passiert, die Sie nicht aufgeführt haben. Es steht am Ende.', lookup: 'Nein' },
    { part: 'redirect=example.net', does: 'Nutzt statt dieses Eintrags den SPF-Eintrag einer anderen Domain. Wird ignoriert, wenn der Eintrag all enthält.', lookup: 'Ja' },
  ],
  partsAfter: [
    'Jeder Teil kann mit einem Qualifier beginnen. Er legt das Ergebnis fest, wenn der Teil zutrifft. `+` bedeutet Pass und ist der Standard, deshalb schreibt ihn niemand. `-` bedeutet Fail, `~` bedeutet Softfail und `?` bedeutet Neutral. Deshalb kann dasselbe Wort, all, einen Eintrag als `-all`, `~all` oder `?all` beenden.',
    'Groß- und Kleinschreibung spielt bei den Namen keine Rolle. `Include:` funktioniert also genauso wie `include:`. RFC 7208 empfiehlt, jeden Eintrag mit all oder einem redirect zu beenden. Fehlt beides, bekommen nicht aufgeführte Server ein neutrales Ergebnis.',
  ],
  limitTitle: 'Das Limit von 10 DNS-Abfragen',
  limitParas: [
    'Jedes include, a, mx, ptr, exists und redirect löst beim Empfänger eine DNS-Abfrage aus. RFC 7208 erlaubt insgesamt 10. Abfragen innerhalb eines includes zählen mit. Ein einzelnes include kann also mehrere kosten. ip4, ip6 und all kosten nichts. Braucht ein Eintrag mehr als 10, brechen Empfänger ab und melden einen permerror. SPF schlägt dann fehl.',
    'Das Limit ist schnell erreicht. Wir haben mit echten DNS-Abfragen gemessen, was gängige includes kosten: Google Workspace 1, Microsoft 365 1, Salesforce 2, Mailgun 5 und Freshdesk 7. Eine Firma mit Google Workspace, die Mailgun und Freshdesk hinzufügt, braucht schon 13 Abfragen. Eine [Studie zu SPF-Einträgen aus dem Jahr 2024](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) untersuchte .com, .net, .org und .se. Dabei brauchten 6,5 % der Einträge mehr als 10 Abfragen. Bei 83,7 % dieser Fälle lag es an includes von nur zwei Hosting-Anbietern.',
    'Die Kosten ändern sich auch. Das include von Google kostete bis Dezember 2025 noch 4 Abfragen. Dann [ersetzte Google seine verschachtelten includes durch eine flache Liste](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Manche SPF-Anleitungen und SPF-Generatoren nennen noch 4. Das Tool oben zählt bei jedem Check die echte Zahl.',
    'Wird das Limit überschritten, scheitert nicht immer jede Nachricht. [Microsoft weist darauf hin](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), dass Empfänger beim ersten Treffer aufhören. E-Mails von einem Server, der weit vorne steht, können also noch bestehen. E-Mails von einem Server weiter hinten schlagen fehl. Dadurch wirkt das Problem zufällig. Zählen Sie deshalb die Abfragen des ganzen Eintrags.',
    'Es gibt ein zweites Limit. Eine Abfrage, die nichts findet, ist eine leere Abfrage (Void Lookup). Ein Beispiel ist ein include einer Domain, die es nicht mehr gibt. Laut RFC 7208 sollen Empfänger nach 2 solchen Abfragen abbrechen.',
  ],
  underTitle: 'So kommen Sie unter 10 DNS-Abfragen',
  underSteps: [
    'Entfernen Sie includes für Dienste, die Sie nicht mehr nutzen.',
    'Entfernen Sie includes, die ein Dienst nicht mehr verlangt. Mailchimp, Postmark, Brevo und Klaviyo brauchen auf Ihrer Hauptdomain kein include. SendGrid und Amazon SES setzen ihr include auf eine Subdomain. Die Liste steht weiter unten.',
    'Führen Sie Ihre eigenen Server mit ip4 und ip6 auf statt mit a oder mx. RFC 7208 empfiehlt diese Reihenfolge, und IP-Adressen kosten keine Abfragen.',
    'Senden Sie einen Teil Ihrer E-Mails von einer Subdomain, zum Beispiel news.beispiel.de. Jede Subdomain hat ihren eigenen Eintrag und ihre eigenen 10 Abfragen.',
  ],
  underNote:
    'Manche Dienste bieten SPF-Flattening an. Dabei werden includes durch die IP-Adressen dahinter ersetzt. Das spart Abfragen. Anbieter ändern aber ihre Adressen, und ein flacher Eintrag passt sich nicht an. Microsoft rät, Flattening nur für Dienste mit stabilen, dokumentierten IP-Bereichen zu nutzen, nie für Microsoft 365 selbst. Außerdem rät Microsoft, das Ergebnis mindestens einmal im Quartal zu prüfen.',
  servicesTitle: 'SPF-Includes für Google Workspace, Microsoft 365 und andere Dienste',
  servicesIntro:
    'Hier sehen Sie die include-Werte aus der Einrichtungsanleitung jedes Dienstes, mit den DNS-Abfragen, die jeder kostet. Wir haben die Kosten am 12. Oktober 2026 mit echten DNS-Abfragen gemessen. Wenn Sie einen Dienst einrichten, kopieren Sie den Wert aus dessen eigener Anleitung. Manche Werte hängen von Ihrer Region oder Ihrem Konto ab.',
  thService: 'Dienst',
  thInclude: 'Include',
  thLookups: 'Abfragen',
  lookupCount: (n) => `${n} ${n === 1 ? 'Abfrage' : 'Abfragen'}`,
  servicesNote:
    'HubSpot gibt jedem Konto ein eigenes include, das auf hubspotemail.net endet. Kopieren Sie es aus Ihren E-Mail-Einstellungen in HubSpot. Es kostet 1 Abfrage.',
  notNeededTitle: 'Dienste, die meist kein include brauchen',
  notNeededIntro:
    'SPF wird gegen die Bounce-Adresse geprüft, nicht gegen die From-Adresse. Viele Versanddienste nutzen heute eine eigene Bounce-Adresse oder eine Subdomain von Ihnen. Ein include für sie auf Ihrer Hauptdomain bringt dann nichts. Es verbraucht nur Abfragen.',
  notNeededAfter: 'Das Tool meldet diese includes, wenn es sie in Ihrem Eintrag findet.',
  createTitle: 'So erstellen Sie einen SPF-Eintrag mit dem SPF-Generator',
  createIntro:
    'Im Tab "SPF-Generator" oben erzeugen Sie einen SPF-Eintrag. Kreuzen Sie die Dienste an, die Ihre E-Mails senden. Das Tool erstellt dann den Eintrag und zählt seine Abfragen. Hat Ihre Domain schon einen Eintrag, laden Sie ihn zuerst. So ergänzen Sie ihn, statt ihn zu ersetzen. Diese Schritte stecken dahinter:',
  createSteps: [
    'Listen Sie jeden Dienst auf, der E-Mails mit Ihrer Domain sendet. Denken Sie dabei nicht nur an Ihren Postfachanbieter: Newsletter, CRM, Helpdesk, Rechnungsversand, Formulare auf der Website. DMARC-Berichte zeigen Absender, die Sie vergessen haben.',
    'Suchen Sie das include jedes Dienstes in dessen Einrichtungsanleitung, oder kreuzen Sie den Dienst im Tool an. Für Ihre eigenen Mailserver nutzen Sie deren IP-Adressen.',
    'Wählen Sie das Ende: ~all oder -all. Der nächste Abschnitt erklärt den Unterschied.',
    'Veröffentlichen Sie den Eintrag als einen einzigen TXT-Eintrag auf der Domain selbst. Die meisten DNS-Anbieter nennen diesen Namen @. Gibt es schon einen Eintrag, der mit v=spf1 beginnt, bearbeiten Sie ihn, statt einen zweiten anzulegen.',
    'Warten Sie ein paar Minuten und prüfen Sie die Domain dann noch einmal mit dem SPF-Check.',
  ],
  createParas: [
    'Jeder Name, der E-Mails sendet, braucht einen eigenen Eintrag. Subdomains nutzen den Eintrag der übergeordneten Domain nicht. Auch eine Domain oder Subdomain, die nie E-Mails sendet, sollte einen bekommen: `v=spf1 -all`. RFC 7208 nennt das eine seit Langem bewährte Praxis. So kann niemand sonst E-Mails senden, die unter diesem Namen SPF bestehen. Das [britische NCSC](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) schlägt vor, solchen Domains außerdem einen DMARC-Eintrag mit p=reject und einen Null-MX-Eintrag zu geben.',
    'Ein Eintrag mit mehr als 255 Zeichen muss in mehrere Strings innerhalb desselben TXT-Eintrags aufgeteilt werden. Empfänger fügen die Strings ohne Leerzeichen zusammen. Setzen Sie das Leerzeichen deshalb in einen String, nicht zwischen zwei Strings. Prüfen Sie, wie Ihr DNS-Anbieter lange Werte behandelt.',
  ],
  endingTitle: '~all oder -all: welches Ende Sie nutzen sollten',
  endingIntro: 'Die großen Anbieter sind sich nicht einig, und jeder hat einen Grund dafür.',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) empfiehlt ~all.',
    '[M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf) ist ein Branchenverband, zu dem große Postfachanbieter und Absender gehören. Er sagt, Einträge sollten auf ~all enden. Außerdem bittet er Empfänger, bei einem SPF-Fail nicht abzulehnen, bevor DMARC geprüft wurde.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) empfiehlt -all, sofern auch DKIM und DMARC eingerichtet sind.',
  ],
  endingParas: [
    'Das Risiko bei -all: Manche Empfänger lehnen die Nachricht schon bei der Zustellung ab, bevor DMARC geprüft wird. [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), der DMARC-Standard von 2026, weist darauf hin, dass solche E-Mails nie in Ihren DMARC-Berichten erscheinen. Dadurch sind Probleme schwerer zu finden.',
    'In der Praxis ist ~all für eine Domain, die E-Mails sendet, die sicherere Wahl. Das gilt vor allem, solange Sie noch nicht alle Ihre Absender kennen. Steht Ihr DMARC auf quarantine oder reject, entscheidet ohnehin DMARC, was mit fehlgeschlagenen E-Mails passiert. Nutzen Sie -all auf Domains, die überhaupt keine E-Mails senden. Nutzen Sie nie +all, denn damit besteht jeder Server. Vermeiden Sie auch ?all, das genauso zählt wie gar kein Eintrag.',
  ],
  resultsTitle: 'Was das Ergebnis Ihres SPF-Checks bedeutet',
  thResult: 'Ergebnis',
  thMeaning: 'Bedeutung',
  thAction: 'Was zu tun ist',
  results: [
    {
      result: 'Gültiger SPF-Eintrag',
      meaning: 'Ein einziger Eintrag, lesbar, mit höchstens 10 Abfragen und ~all oder -all am Ende.',
      action: 'Nichts. Prüfen Sie erneut, wenn Sie einen neuen Dienst hinzufügen, der E-Mails für Sie sendet.',
    },
    {
      result: 'Funktionierender SPF-Eintrag mit Warnungen',
      meaning: 'Empfänger können ihn nutzen, aber etwas schwächt ihn. Beispiele sind 9 oder 10 Abfragen, kein all am Ende oder ptr.',
      action: 'Beheben Sie die Warnungen unter dem Eintrag. Mit einem weiteren Dienst werden daraus oft Fehler.',
    },
    {
      result: 'SPF-Eintrag ist fehlerhaft',
      meaning: 'Empfänger bekommen einen permerror. SPF schlägt dann für alle E-Mails der Domain fehl.',
      action: 'Beheben Sie die aufgeführten Fehler. Am häufigsten sind zwei Einträge und mehr als 10 Abfragen.',
    },
    {
      result: 'SPF-Eintrag schützt die Domain nicht',
      meaning: 'Der Eintrag endet auf +all oder bindet einen Eintrag ein, der das tut. Damit besteht jeder Server im Internet.',
      action: 'Ändern Sie +all in ~all oder -all.',
    },
    {
      result: 'Kein SPF-Eintrag',
      meaning: 'Die Domain veröffentlicht keinen TXT-Eintrag, der mit v=spf1 beginnt.',
      action: 'Erstellen Sie einen im Tab "SPF-Generator". Eine Domain, die nie E-Mails sendet, sollte v=spf1 -all bekommen.',
    },
    {
      result: 'Domain existiert nicht',
      meaning: 'Das DNS kennt die Domain überhaupt nicht.',
      action: 'Prüfen Sie die Schreibweise und ob die Domain registriert ist.',
    },
  ],
  receiverIntro:
    'Empfangende Server nutzen eigene Begriffe für das Ergebnis einer SPF-Prüfung. Sie sehen sie in den Headern einer Nachricht, etwa spf=pass oder spf=softfail, und in DMARC-Berichten:',
  spfResults: [
    { result: 'pass', meaning: 'Der sendende Server ist erlaubt.' },
    { result: 'fail', meaning: 'Der Server ist nicht erlaubt (-all). Empfänger dürfen die Nachricht ablehnen.' },
    { result: 'softfail', meaning: 'Der Server ist wahrscheinlich nicht erlaubt (~all). Laut RFC 7208 sollen Empfänger nicht allein deshalb ablehnen.' },
    { result: 'neutral', meaning: 'Der Eintrag sagt nichts über diesen Server (?all). Das zählt genauso wie gar kein Eintrag.' },
    { result: 'none', meaning: 'Die Domain hat keinen SPF-Eintrag.' },
    { result: 'temperror', meaning: 'Eine DNS-Abfrage ist kurzzeitig fehlgeschlagen. Der Absender kann es später erneut versuchen.' },
    { result: 'permerror', meaning: 'Der Eintrag ist fehlerhaft und nicht lesbar. Nur eine Korrektur im DNS hilft.' },
  ],
  errorsTitle: 'Häufige Fehler im SPF-Eintrag und wie Sie sie beheben',
  errorsIntro:
    'Ein [Scan von 12 Millionen beliebten Domains aus dem Jahr 2023](https://arxiv.org/abs/2502.08240) fand SPF auf 56,5 % davon. 2,9 % der SPF-Einträge hatten Fehler. Am häufigsten zeigte ein include oder redirect auf einen Namen ohne SPF-Eintrag. Zu viele Abfragen kamen an zweiter Stelle.',
  errors: [
    {
      title: 'Zwei SPF-Einträge auf einer Domain',
      text: 'Das passiert oft, wenn die Anleitung eines neuen Dienstes sagt: "Fügen Sie diesen TXT-Eintrag hinzu". Dann legt ihn jemand zusätzlich zum alten an. Zwei Einträge führen zu einem permerror. Fassen Sie sie zu einem zusammen. Beginnen Sie mit einem v=spf1, führen Sie jedes include und jede IP-Adresse auf und enden Sie mit einem all.',
    },
    {
      title: 'Ein include, das ins Leere zeigt',
      text: 'Zeigt ein include auf eine Domain ohne SPF-Eintrag, schlägt der ganze Eintrag mit einem permerror fehl. Die Ursache kann ein Tippfehler sein. Oder ein Dienst wurde eingestellt oder hat sein include geändert. Entfernen Sie das include oder ersetzen Sie es durch den aktuellen Wert des Dienstes.',
    },
    {
      title: '+all, ?all oder kein all am Ende',
      text: '`+all` erlaubt jeden Server im Internet, der Eintrag schützt also nichts. `?all` oder gar kein all ergibt ein neutrales Ergebnis. Empfänger behandeln das wie keinen Eintrag. Beenden Sie den Eintrag mit ~all oder -all.',
    },
    {
      title: 'ptr im Eintrag',
      text: 'Laut RFC 7208 soll ptr nicht genutzt werden. Es ist langsam, kostet eine Abfrage und ist bei DNS-Problemen weniger zuverlässig als andere Mechanismen. Ersetzen Sie es durch ip4- und ip6-Angaben für die Server, die es abdecken sollte.',
    },
    {
      title: 'Tippfehler',
      text: 'Ein Leerzeichen nach einem Doppelpunkt, eine IPv4-Adresse mit fehlendem Teil oder ein Wort, das SPF nicht kennt: All das führt zu einem permerror. Ein Fehler fällt weniger auf. `include=beispiel.de` mit Gleichheitszeichen gilt als unbekannte Einstellung und wird übersprungen. Dieser Dienst ist dann nie erlaubt. Das Tool meldet alle diese Fehler.',
    },
  ],
  mythsTitle: 'Drei Details, die SPF-Anleitungen oft falsch darstellen',
  myths: [
    '"Ein SPF-Eintrag darf keine Großbuchstaben enthalten." Laut RFC 7208 spielt Groß- und Kleinschreibung bei den Namen keine Rolle.',
    '"Ein SPF-Eintrag darf höchstens 255 Zeichen lang sein." Die Grenze von 255 gilt für jeden einzelnen String. Ein längerer Eintrag wird in mehrere Strings aufgeteilt. RFC 7208 verlangt nur, dass die gesamte DNS-Antwort klein bleibt, unter etwa 450 Byte.',
    '"Sie können bis zu 10 includes haben." Das Limit zählt DNS-Abfragen, und Abfragen innerhalb von includes zählen mit.',
  ],
  authTitle: 'SPF ist ein Teil der E-Mail-Authentifizierung',
  authParas: [
    'Ein bestandener SPF-Check hat Grenzen. Im selben Scan von 2023 erlaubten 34,7 % der Domains E-Mails von mehr als 100.000 IP-Adressen. SPF scheitert außerdem, wenn jemand Ihre Nachricht weiterleitet. Der weiterleitende Server steht dann nicht in Ihrem Eintrag.',
    'DKIM signiert die Nachricht selbst und übersteht Weiterleitungen deshalb meist. DMARC prüft, ob SPF oder DKIM für dieselbe Domain wie die From-Adresse bestanden hat. Hat keines von beiden bestanden, sagt DMARC den Empfängern, was sie tun sollen. Viele Versanddienste bestehen SPF mit ihrer eigenen Bounce-Domain, die nicht zu Ihrer From-Adresse passt. Ein eigener Return-Path beim Dienst löst das. Richten Sie die beiden anderen Einträge mit dem [DKIM-Generator](/dkim-generator) und dem [DMARC-Generator](/dmarc-generator) ein. Mit dem [MX-Lookup](/mx-lookup) prüfen Sie, wo Ihre Domain E-Mails empfängt.',
    'Bei Adressen, die es nicht gibt, hilft Authentifizierung auch nicht. E-Mails an sie kommen als Bounce zurück, und eine hohe Bounce-Rate schadet der Zustellung. Prüfen Sie einzelne Adressen mit dem [E-Mail-Prüfer](/email-checker) oder eine ganze Liste mit der [E-Mail-Massenprüfung](/bulk-email-verifier). Eine kurze Definition für Ihr Team finden Sie im [Glossar unter SPF-Eintrag](/glossary/spf).',
  ],
  faqTitle: 'Häufige Fragen zum SPF-Eintrag',
  faqs: [
    {
      q: 'Was ist ein SPF-Eintrag?',
      a: 'Das ist ein TXT-Eintrag im DNS Ihrer Domain. Er listet die Server auf, die für die Domain E-Mails senden dürfen. Empfangende Server lesen ihn, um zu entscheiden, ob eine Nachricht wirklich von einem Ihrer Server kommt. SPF steht für Sender Policy Framework und ist in RFC 7208 definiert.',
    },
    {
      q: 'Wie prüfe ich meinen SPF-Eintrag, und wie erstelle ich einen neuen?',
      a: 'Geben Sie Ihre Domain oben auf dieser Seite ein und klicken Sie auf "SPF-Eintrag prüfen". Einen neuen Eintrag erstellen Sie im Tab "SPF-Generator". Im Terminal nutzen Sie unter Windows nslookup -type=txt beispiel.de, unter macOS und Linux dig txt beispiel.de. Suchen Sie den TXT-Eintrag, der mit v=spf1 beginnt.',
    },
    {
      q: 'Darf eine Domain zwei SPF-Einträge haben?',
      a: 'Nein. RFC 7208 erlaubt einen SPF-Eintrag pro Domainname. Bei zwei Einträgen melden Empfänger einen permanenten Fehler, und SPF schlägt für alle Ihre E-Mails fehl. Fassen Sie beide zu einem Eintrag zusammen. Andere TXT-Einträge, etwa Codes zur Website-Verifizierung, können bleiben.',
    },
    {
      q: 'Was bedeutet permerror bei SPF?',
      a: 'Der Empfänger konnte Ihren SPF-Eintrag nicht lesen, also schlägt die Prüfung fehl. Die üblichen Ursachen sind zwei SPF-Einträge, mehr als 10 DNS-Abfragen oder ein include einer Domain ohne SPF-Eintrag. Auch ein Tippfehler kann die Ursache sein. Das Tool oben nennt die Ursache.',
    },
    {
      q: 'Was ist der Unterschied zwischen ~all und -all?',
      a: 'Mit ~all bekommen E-Mails von nicht aufgeführten Servern einen Softfail. Empfänger nehmen sie meist an, behandeln sie aber mit mehr Misstrauen. Mit -all bekommen sie einen Fail, und manche Empfänger lehnen sie ab. Google empfiehlt ~all. Microsoft empfiehlt -all, sobald DKIM und DMARC eingerichtet sind.',
    },
    {
      q: 'Brauchen Subdomains einen eigenen SPF-Eintrag?',
      a: 'Ja, wenn sie E-Mails senden. Eine Subdomain nutzt den SPF-Eintrag ihrer übergeordneten Domain nicht. Sendet news.beispiel.de E-Mails, braucht sie einen eigenen Eintrag. Sendet sie nie E-Mails, geben Sie ihr v=spf1 -all.',
    },
    {
      q: 'Wie lange dauert es, bis ein geänderter SPF-Eintrag gilt?',
      a: 'Höchstens so lange wie die TTL des alten Eintrags. Resolver, die ihn zwischengespeichert haben, behalten die alte Antwort, bis die TTL abläuft. Eine TTL von 3600 Sekunden bedeutet also bis zu einer Stunde. Google nennt bis zu 48 Stunden, aber meist ist die Änderung viel früher sichtbar.',
    },
    {
      q: 'Brauche ich SPF, wenn ich schon DKIM habe?',
      a: 'Sicherer ist es, beides zu haben. Gmail und Yahoo akzeptieren von kleinen Absendern SPF oder DKIM. Von Massenversendern verlangen sie beides. DMARC besteht, wenn einer der beiden besteht und zu Ihrer From-Domain passt. Mit beiden haben Sie also eine Reserve.',
    },
    {
      q: 'Verhindert SPF E-Mail-Spoofing?',
      a: 'Nicht allein. SPF prüft die Bounce-Adresse (den Return-Path), nicht die From-Adresse, die Empfänger sehen. Ein Spammer kann SPF mit seiner eigenen Domain bestehen und trotzdem Ihren Namen im From anzeigen. DMARC schließt diese Lücke, denn es verlangt, dass die beiden Domains übereinstimmen.',
    },
  ],
  ctaHeadline: 'Prüfen Sie die Adressen, bevor Sie senden',
}

const it: SpfPageStrings = {
  metaTitle: 'Record SPF: verifica e genera il record SPF gratis | Giggal.ai',
  ogTitle: 'Record SPF: verifica e genera il record SPF gratis',
  description:
    'Verifica gratis il record SPF di un dominio. Scopri cosa significa ogni parte, conta le ricerche DNS (massimo 10), trova gli errori o genera un nuovo record.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Verifica e generatore di record SPF gratis di Giggal.ai',
  crumb: 'Verifica record SPF',
  appName: 'Verifica e generatore di record SPF gratis',
  featureList: [
    'Verifica il record SPF di qualsiasi dominio',
    'Spiega ogni parte del record in italiano semplice',
    'Conta le ricerche DNS rispetto al limite di 10, anche negli include annidati',
    'Segnala record multipli, ricerche vuote, +all, ptr ed errori di sintassi',
    'Genera un nuovo record SPF da un elenco di servizi email comuni',
  ],
  h1: 'Verifica e genera il record SPF',
  heroIntro:
    'Verifica il record SPF di qualsiasi dominio o generane uno nuovo. Lo strumento spiega ogni parte del record e conta le sue ricerche DNS rispetto al limite di 10.',
  howTitle: 'Come verificare un record SPF',
  howSteps: [
    'Scrivi un dominio nel campo qui sopra. Va bene anche un indirizzo email completo. Lo strumento tiene solo il dominio.',
    'Clicca su Verifica il record SPF. Lo strumento legge dal DNS pubblico il record attuale, lo stesso che legge un server di destinazione.',
    'Leggi prima il riepilogo. Ti dice se il record è valido, se ha avvisi o se non funziona.',
    "Poi leggi l'elenco dei problemi, se ce ne sono. Per ognuno trovi cosa cambiare.",
    "Più in basso trovi la spiegazione di ogni parte del record, con le ricerche DNS che richiede. Apri un include per vedere cosa autorizza il servizio che c'è dietro.",
  ],
  howNote:
    "Il link nella barra degli indirizzi ripete la stessa verifica SPF, quindi puoi inviarlo a un collega o al gestore del tuo DNS. C'è un limite: il server di destinazione verifica SPF in base all'indirizzo IP del server che ha inviato il messaggio. Questo strumento non ha un messaggio da esaminare, quindi verifica il record in sé. Non può valutare le parti costruite con le macro SPF, che cambiano per ogni server di invio.",
  imageAlt: 'Illustrazione di un record SPF diviso nelle sue parti, con un contatore delle ricerche DNS usate su 10.',
  whatTitle: "Cos'è un record SPF?",
  whatIntro:
    'Un record SPF è un record TXT nel DNS di un dominio. Elenca i server che possono inviare email per quel dominio. SPF sta per Sender Policy Framework e le regole sono nella [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Un dominio che usa Google Workspace ha spesso un record come questo:',
  whatAfter: [
    "`v=spf1` indica che è un record SPF. `include:_spf.google.com` autorizza tutti i server dell'elenco di Google. `~all` dice ai server di destinazione di trattare con sospetto le email da qualsiasi altro server.",
    "Quando arriva un messaggio, il server di destinazione prende il dominio dall'indirizzo di rimbalzo, chiamato Return-Path. Legge il record SPF di quel dominio e controlla se l'indirizzo IP del server di invio è nell'elenco. SPF non guarda l'indirizzo From che vedi nella tua casella. Per questo funziona insieme a DKIM e DMARC. Per sapere come funzionano i tre record, leggi la nostra [guida a SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).",
    'Da febbraio 2024 [Gmail richiede SPF o DKIM](https://support.google.com/a/answer/81126) a ogni mittente, ed entrambi ai mittenti di massa. Yahoo ha le stesse regole.',
  ],
  partsTitle: 'Cosa significa ogni parte di un record SPF',
  partsIntro:
    'Un record SPF è un elenco di termini separati da spazi. I server di destinazione li leggono da sinistra a destra e si fermano al primo che corrisponde al server di invio.',
  thPart: 'Parte',
  thDoes: 'Cosa fa',
  thLookup: 'Ricerca DNS',
  lookupLabel: 'Ricerca DNS: ',
  parts: [
    { part: 'v=spf1', does: "Indica che il record TXT è un record SPF. Deve stare all'inizio, scritto esattamente così.", lookup: 'No' },
    { part: 'ip4:192.0.2.10', does: 'Autorizza un indirizzo IPv4, o un intervallo come 192.0.2.0/24.', lookup: 'No' },
    { part: 'ip6:2001:db8::/32', does: 'Autorizza un indirizzo o un intervallo IPv6.', lookup: 'No' },
    { part: 'a', does: 'Autorizza gli indirizzi IP del dominio stesso, o di un dominio che scrivi dopo i due punti.', lookup: 'Sì' },
    { part: 'mx', does: 'Autorizza i server nei record MX del dominio, cioè quelli che ricevono la sua posta.', lookup: 'Sì' },
    { part: 'include:_spf.google.com', does: 'Autorizza tutti i server che autorizza il record SPF di un altro dominio. È così che aggiungi un servizio.', lookup: 'Sì, più le sue' },
    { part: 'exists:%{i}.example.com', does: 'Corrisponde quando una ricerca DNS trova un indirizzo. I grandi mittenti lo usano con le macro.', lookup: 'Sì' },
    { part: 'ptr', does: 'Cerca la corrispondenza nel DNS inverso. La RFC 7208 dice di non usarlo, perché è lento e poco affidabile.', lookup: 'Sì' },
    { part: '~all o -all', does: 'Decide cosa succede a tutti i server che non hai elencato. Va alla fine.', lookup: 'No' },
    { part: 'redirect=example.net', does: 'Usa il record SPF di un altro dominio al posto di questo. Viene ignorato se il record contiene all.', lookup: 'Sì' },
  ],
  partsAfter: [
    'Ogni parte può iniziare con un qualificatore, che decide il risultato in caso di corrispondenza. `+` significa pass ed è il valore predefinito, quindi nessuno lo scrive. `-` significa fail, `~` significa softfail e `?` significa neutral. Per questo la stessa parola, all, può chiudere un record come `-all`, `~all` o `?all`.',
    'I nomi non distinguono tra maiuscole e minuscole, quindi `Include:` funziona come `include:`. La RFC 7208 consiglia di chiudere ogni record con all o un redirect. Senza nessuno dei due, i server non elencati ricevono un risultato neutro.',
  ],
  limitTitle: 'Il limite di 10 ricerche DNS',
  limitParas: [
    'Ogni include, a, mx, ptr, exists e redirect obbliga il server di destinazione a fare una ricerca DNS. La RFC 7208 ne permette 10 in tutto. Contano anche le ricerche dentro un include, quindi un solo include può costarne diverse. ip4, ip6 e all non costano nulla. Quando un record ne richiede più di 10, il server di destinazione si ferma e restituisce un permerror. A quel punto SPF fallisce.',
    "Il limite si raggiunge facilmente. Abbiamo misurato sul DNS pubblico quanto costano gli include più comuni: Google Workspace 1, Microsoft 365 1, Salesforce 2, Mailgun 5 e Freshdesk 7. Un'azienda che usa Google Workspace e aggiunge Mailgun e Freshdesk ha già bisogno di 13 ricerche. Uno [studio del 2024 sui record SPF](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) nei domini .com, .net, .org e .se ha rilevato che il 6,5% richiedeva più di 10 ricerche. Gli include dei record di due soli provider di hosting causavano l'83,7% di questi casi.",
    "Anche i costi cambiano. L'include di Google costava 4 ricerche fino a dicembre 2025, quando [Google ha sostituito i suoi include annidati con un unico elenco](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Alcune guide e alcuni generatori SPF dicono ancora 4. Lo strumento qui sopra conta il numero reale ogni volta che lo usi.",
    "Superare il limite non blocca sempre tutti i messaggi. [Microsoft fa notare](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) che i server di destinazione si fermano alla prima corrispondenza. Le email da un server elencato all'inizio possono ancora passare, mentre quelle da un server elencato alla fine falliscono. Per questo il problema sembra casuale. Conta sempre le ricerche dell'intero record.",
    "C'è un secondo limite. Una ricerca che non trova nulla è una ricerca vuota (void lookup), per esempio l'include di un dominio che non esiste più. La RFC 7208 dice che i server di destinazione dovrebbero fermarsi dopo 2 ricerche di questo tipo.",
  ],
  underTitle: 'Come restare entro le 10 ricerche DNS',
  underSteps: [
    'Togli gli include dei servizi che non usi più.',
    "Togli gli include che un servizio non chiede più. Mailchimp, Postmark, Brevo e Klaviyo non ne hanno bisogno sul dominio principale, mentre SendGrid e Amazon SES mettono il loro su un sottodominio. L'elenco è più in basso.",
    'Elenca i tuoi server con ip4 e ip6 invece di a o mx. La RFC 7208 consiglia questo ordine, e gli indirizzi IP non costano ricerche.',
    'Invia una parte delle email da un sottodominio, come news.example.com. Ogni sottodominio ha il suo record e le sue 10 ricerche.',
  ],
  underNote:
    "Alcuni servizi offrono l'appiattimento SPF (flattening), che sostituisce gli include con i loro indirizzi IP. Fa risparmiare ricerche, ma i provider cambiano i loro indirizzi e un record appiattito non si aggiorna. Microsoft consiglia di appiattire solo i servizi con intervalli IP stabili e documentati, mai Microsoft 365. Consiglia anche di ricontrollare il risultato almeno ogni tre mesi.",
  servicesTitle: 'Include SPF per Google Workspace, Microsoft 365 e altri servizi',
  servicesIntro:
    'Questi sono i valori include indicati nella guida di configurazione di ogni servizio, con le ricerche DNS che richiede ciascuno. Abbiamo misurato i costi sul DNS pubblico il 12 ottobre 2026. Quando configuri un servizio, copia il valore dalla sua guida, perché alcuni dipendono dalla tua regione o dal tuo account.',
  thService: 'Servizio',
  thInclude: 'Include',
  thLookups: 'Ricerche',
  lookupCount: (n) => `${n} ${n === 1 ? 'ricerca' : 'ricerche'}`,
  servicesNote:
    'HubSpot dà a ogni account un include diverso, che finisce in hubspotemail.net. Copialo dalle impostazioni email di HubSpot. Costa 1 ricerca.',
  notNeededTitle: 'Servizi che di solito non hanno bisogno di un include',
  notNeededIntro:
    "SPF si verifica sull'indirizzo di rimbalzo, non sull'indirizzo From. Molti servizi di invio ora usano un proprio indirizzo di rimbalzo, o un tuo sottodominio. Un loro include sul dominio principale non serve a niente e consuma solo ricerche DNS.",
  notNeededAfter: 'Lo strumento segnala questi include quando li trova nel tuo record.',
  createTitle: 'Come generare un record SPF',
  createIntro:
    'Usa la scheda Genera qui sopra per creare un record SPF. Spunta i servizi che inviano le tue email e il generatore scrive il record e conta le sue ricerche DNS. Se il tuo dominio ha già un record, caricalo prima, così lo completi invece di sostituirlo. Ecco i passaggi da seguire:',
  createSteps: [
    'Elenca ogni servizio che invia email con il tuo dominio. Non pensare solo al provider della casella: newsletter, CRM, helpdesk, fatturazione, moduli del sito. I report DMARC mostrano i mittenti che hai dimenticato.',
    "Trova l'include di ognuno nella sua guida di configurazione, o spuntalo nello strumento. Per i tuoi server di posta, usa i loro indirizzi IP.",
    'Scegli la chiusura: ~all o -all. La sezione successiva spiega la differenza.',
    'Pubblicalo come un unico record TXT sul dominio stesso. Molti gestori DNS chiamano questo nome @. Se esiste già un record che inizia con v=spf1, modificalo invece di aggiungerne un secondo.',
    'Aspetta qualche minuto e verifica di nuovo il dominio con lo strumento qui sopra.',
  ],
  createParas: [
    "Ogni nome di dominio che invia email ha bisogno del suo record, perché i sottodomini non usano il record del dominio padre. Anche un dominio o un sottodominio che non invia mai email dovrebbe averne uno: `v=spf1 -all`. La RFC 7208 la definisce una buona pratica consolidata. Così nessun altro può inviare email che superano SPF a nome di quel dominio. L'[NCSC britannico](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) suggerisce di aggiungere a questi domini anche un record DMARC con p=reject e un record MX nullo.",
    'Un record più lungo di 255 caratteri va diviso in più stringhe dentro lo stesso record TXT. I server di destinazione uniscono le stringhe senza spazi, quindi metti lo spazio dentro una stringa, non tra due stringhe. Controlla come il tuo gestore DNS tratta i valori lunghi.',
  ],
  endingTitle: '~all o -all: quale chiusura usare',
  endingIntro: "I grandi provider non sono d'accordo, e ognuno ha le sue ragioni.",
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) consiglia ~all.',
    '[M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), un gruppo di settore di cui fanno parte grandi provider di posta e grandi mittenti, dice che i record dovrebbero finire con ~all. Chiede anche ai server di destinazione di non rifiutare per un fail SPF prima del controllo DMARC.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) consiglia -all, a patto che siano configurati anche DKIM e DMARC.',
  ],
  endingParas: [
    'Il rischio di -all è che alcuni server di destinazione rifiutino il messaggio durante la consegna, prima di controllare DMARC. La [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), lo standard DMARC del 2026, fa notare che queste email non compaiono mai nei tuoi report DMARC. Così i problemi sono più difficili da trovare.',
    'In pratica ~all è la scelta più sicura per un dominio che invia email, soprattutto mentre stai ancora cercando tutti i tuoi mittenti. Se hai DMARC su quarantine o reject, è comunque DMARC a decidere cosa succede alle email che falliscono. Usa -all sui domini che non inviano nessuna email. Non usare mai +all, che fa passare ogni server, ed evita ?all, che vale come non avere nessun record.',
  ],
  resultsTitle: 'Cosa significa il risultato della tua verifica SPF',
  thResult: 'Risultato',
  thMeaning: 'Cosa significa',
  thAction: 'Cosa fare',
  results: [
    {
      result: 'Record SPF valido',
      meaning: 'Un solo record, leggibile, entro le 10 ricerche DNS, che finisce con ~all o -all.',
      action: 'Niente. Verifica di nuovo quando aggiungi un nuovo servizio che invia email per te.',
    },
    {
      result: 'Record SPF funzionante con avvisi',
      meaning: 'I server di destinazione possono usarlo, ma qualcosa lo indebolisce, per esempio 9 o 10 ricerche DNS, nessun all alla fine o un ptr.',
      action: 'Correggi gli avvisi elencati sotto il record. Spesso diventano errori quando aggiungi un altro servizio.',
    },
    {
      result: 'Record SPF non funzionante',
      meaning: 'I server di destinazione ricevono un permerror, quindi SPF fallisce per tutte le email del dominio.',
      action: 'Correggi gli errori elencati. I più comuni sono due record SPF e più di 10 ricerche DNS.',
    },
    {
      result: 'Record SPF che non protegge il dominio',
      meaning: 'Il record finisce con +all, o include un record che lo fa, quindi ogni server su internet passa.',
      action: 'Cambia +all in ~all o -all.',
    },
    {
      result: 'Nessun record SPF',
      meaning: 'Il dominio non pubblica nessun record TXT che inizia con v=spf1.',
      action: 'Creane uno con la scheda Genera. Un dominio che non invia mai email dovrebbe avere v=spf1 -all.',
    },
    {
      result: 'Dominio inesistente',
      meaning: 'Il DNS non ha nessun record di questo dominio.',
      action: 'Controlla che il nome sia scritto bene e che il dominio sia registrato.',
    },
  ],
  receiverIntro:
    "I server di destinazione usano parole proprie per l'esito di una verifica SPF. Le vedi nelle intestazioni dei messaggi, come spf=pass o spf=softfail, e nei report DMARC:",
  spfResults: [
    { result: 'pass', meaning: 'Il server di invio è autorizzato.' },
    { result: 'fail', meaning: 'Il server non è autorizzato (-all). Il server di destinazione può rifiutare il messaggio.' },
    { result: 'softfail', meaning: 'Il server probabilmente non è autorizzato (~all). La RFC 7208 dice di non rifiutare il messaggio solo per questo.' },
    { result: 'neutral', meaning: 'Il record non dice nulla su questo server (?all). Vale come non avere nessun record.' },
    { result: 'none', meaning: 'Il dominio non ha un record SPF.' },
    { result: 'temperror', meaning: 'Una ricerca DNS non è riuscita per un problema temporaneo. Il mittente può riprovare più tardi.' },
    { result: 'permerror', meaning: 'Il record contiene errori e non si può leggere. Solo una correzione nel DNS risolve il problema.' },
  ],
  errorsTitle: 'Errori comuni nel record SPF e come correggerli',
  errorsIntro:
    "Una [scansione del 2023 su 12 milioni di domini popolari](https://arxiv.org/abs/2502.08240) ha trovato SPF sul 56,5% dei domini ed errori nel 2,9% dei record SPF. L'errore più comune era un include o un redirect verso un nome senza record SPF. Al secondo posto c'erano le ricerche DNS in eccesso.",
  errors: [
    {
      title: 'Due record SPF sullo stesso dominio',
      text: 'Succede spesso quando la guida di un nuovo servizio dice “aggiungi questo record TXT” e qualcuno lo aggiunge accanto a quello vecchio. Due record causano un permerror. Uniscili in uno solo. Inizia con un solo v=spf1, elenca ogni include e indirizzo IP e chiudi con un solo all.',
    },
    {
      title: 'Un include che punta a un dominio senza SPF',
      text: "Se un include punta a un dominio senza record SPF, l'intero record fallisce con un permerror. Può essere un errore di battitura, o un servizio che ha chiuso o ha cambiato il suo include. Toglilo o sostituiscilo con il valore attuale del servizio.",
    },
    {
      title: '+all, ?all o nessun all alla fine',
      text: "`+all` autorizza ogni server su internet, quindi il record non protegge niente. `?all`, o l'assenza di all, dà un risultato neutro, che i server di destinazione trattano come l'assenza di un record. Chiudi il record con ~all o -all.",
    },
    {
      title: 'ptr nel record',
      text: 'La RFC 7208 dice che ptr non va usato. È lento, costa una ricerca DNS ed è meno affidabile di altri meccanismi quando il DNS ha problemi. Sostituiscilo con voci ip4 e ip6 per i server che doveva coprire.',
    },
    {
      title: 'Errori di battitura',
      text: "Uno spazio dopo i due punti, un indirizzo IPv4 incompleto o una parola che SPF non conosce causano tutti un permerror. Un errore è meno evidente: `include=example.com`, con il segno uguale, viene letto come un'impostazione sconosciuta e saltato. Così quel servizio non viene mai autorizzato. Lo strumento segnala tutti questi errori.",
    },
  ],
  mythsTitle: 'Tre dettagli che le guide SPF spesso sbagliano',
  myths: [
    '“Un record SPF non può contenere lettere maiuscole.” La RFC 7208 dice che i nomi non distinguono tra maiuscole e minuscole.',
    "“Un record SPF può avere al massimo 255 caratteri.” Il limite di 255 vale per ogni stringa. Un record più lungo si divide in più stringhe. La RFC 7208 chiede solo che l'intera risposta DNS resti piccola, sotto i 450 byte circa.",
    '“Puoi avere fino a 10 include.” Il limite conta le ricerche DNS, e contano anche quelle dentro gli include.',
  ],
  authTitle: "SPF è solo una parte dell'autenticazione email",
  authParas: [
    'Anche un SPF superato ha dei limiti. Nella stessa scansione del 2023, il 34,7% dei domini autorizzava email da più di 100.000 indirizzi IP. SPF si rompe anche quando qualcuno inoltra il tuo messaggio, perché il server che inoltra non è nel tuo record.',
    "DKIM firma il messaggio stesso, quindi di solito sopravvive all'inoltro. DMARC controlla che SPF o DKIM sia passato per lo stesso dominio dell'indirizzo From. Se nessuno dei due è passato, dice ai server di destinazione cosa fare. Molti servizi di invio superano SPF con un proprio dominio di rimbalzo, che non corrisponde al tuo indirizzo From. Un Return-Path personalizzato presso il servizio risolve il problema. Configura gli altri due record con il [generatore DKIM](/dkim-generator) e il [generatore DMARC](/dmarc-generator). Con l'[MX Lookup](/mx-lookup) verifichi dove il tuo dominio riceve la posta.",
    "Inoltre l'autenticazione non aiuta con gli indirizzi che non esistono. Le email inviate lì rimbalzano, e un alto tasso di rimbalzo danneggia la consegna. Verifica i singoli indirizzi con la [verifica email](/email-checker), o un'intera lista con la [verifica email in blocco](/bulk-email-verifier). Per una definizione breve da condividere con il tuo team, leggi la [voce del glossario sul record SPF](/glossary/spf).",
  ],
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: "Cos'è un record SPF?",
      a: 'È un record TXT nel DNS del tuo dominio che elenca i server autorizzati a inviare email per il dominio. I server di destinazione lo leggono per capire se un messaggio arriva davvero da uno dei tuoi server. SPF sta per Sender Policy Framework ed è definito nella RFC 7208.',
    },
    {
      q: 'Come verifico il mio record SPF?',
      a: 'Scrivi il tuo dominio nello strumento in cima a questa pagina. Da terminale, nslookup -type=txt example.com funziona su Windows e dig txt example.com funziona su macOS e Linux. Cerca il record TXT che inizia con v=spf1.',
    },
    {
      q: 'Un dominio può avere due record SPF?',
      a: 'No. La RFC 7208 permette un solo record SPF per ogni nome di dominio. Con due record, i server di destinazione restituiscono un errore permanente e SPF fallisce per tutte le tue email. Unisci i due in un solo record. Gli altri record TXT, come i codici di verifica dei siti, possono restare.',
    },
    {
      q: 'Cosa significa permerror in SPF?',
      a: 'Significa che il server di destinazione non è riuscito a leggere il tuo record SPF, quindi la verifica fallisce. Le cause più comuni sono due record SPF, più di 10 ricerche DNS o un include verso un dominio senza record SPF. Può causarlo anche un errore di battitura. Lo strumento qui sopra ti dice la causa.',
    },
    {
      q: "Che differenza c'è tra ~all e -all?",
      a: 'Con ~all, le email dai server non elencati ricevono un softfail, e di solito i server di destinazione le accettano con più sospetto. Con -all ricevono un fail, e alcuni server di destinazione le rifiutano. Google consiglia ~all. Microsoft consiglia -all quando DKIM e DMARC sono configurati.',
    },
    {
      q: 'I sottodomini hanno bisogno di un proprio record SPF?',
      a: 'Sì, se inviano email. Un sottodominio non usa il record SPF del dominio padre. Se news.example.com invia email, ha bisogno di un suo record. Se non invia mai email, dagli v=spf1 -all.',
    },
    {
      q: 'Quanto ci mette una modifica al record SPF?',
      a: "Al massimo il TTL del vecchio record. I resolver che lo hanno in cache tengono la vecchia risposta finché il TTL non scade. Un TTL di 3600, quindi, vuol dire fino a un'ora. Google dice che le modifiche possono richiedere fino a 48 ore, ma di solito si vedono molto prima.",
    },
    {
      q: 'Mi serve SPF se ho già DKIM?',
      a: 'È più sicuro averli entrambi. Gmail e Yahoo accettano SPF o DKIM dai piccoli mittenti, ma chiedono entrambi ai mittenti di massa. DMARC passa quando uno dei due passa e corrisponde al tuo dominio From, quindi averli entrambi ti dà una riserva.',
    },
    {
      q: 'SPF ferma lo spoofing delle email?',
      a: "Non da solo. SPF verifica l'indirizzo di rimbalzo (il Return-Path), non l'indirizzo From che vedono le persone. Uno spammer può superare SPF con il proprio dominio e mostrare comunque il tuo nome nel From. DMARC chiude questa falla perché richiede che i due domini corrispondano.",
    },
  ],
  ctaHeadline: 'Verifica gli indirizzi prima di inviare',
}

const ptBr: SpfPageStrings = {
  metaTitle: 'Registro SPF: verificar e criar o registro SPF grátis | Giggal.ai',
  ogTitle: 'Registro SPF: verificar e criar o registro SPF grátis',
  description:
    'Verifique grátis o registro SPF de qualquer domínio. Entenda cada parte, conte as consultas DNS (o limite é 10), encontre erros ou crie um novo registro.',
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Verificador e gerador de registro SPF grátis da Giggal.ai',
  crumb: 'Registro SPF',
  appName: 'Verificador e gerador de registro SPF grátis',
  featureList: [
    'Verifica o registro SPF de qualquer domínio',
    'Explica cada parte do registro em linguagem simples',
    'Conta as consultas DNS, incluindo as de includes aninhados, e compara com o limite de 10',
    'Aponta registros duplicados, consultas vazias, +all, ptr e erros de sintaxe',
    'Cria um novo registro SPF a partir de uma lista de serviços de e-mail comuns',
  ],
  h1: 'Verificar e criar o registro SPF',
  heroIntro:
    'Verifique o registro SPF de qualquer domínio ou crie um novo. O verificador explica cada parte do registro e compara as consultas DNS dele com o limite de 10.',
  howTitle: 'Como verificar um registro SPF',
  howSteps: [
    'Digite um domínio no campo acima. Um endereço de e-mail completo também funciona. A ferramenta usa só o domínio.',
    'Clique em Verificar registro SPF. A verificação lê o registro atual no DNS público, o mesmo que um servidor de destino lê.',
    'Leia primeiro o resumo. Ele diz se o registro é válido, se tem avisos ou se está quebrado.',
    'Depois leia a lista de problemas, se houver. Cada item diz o que mudar.',
    'Abaixo, cada parte do registro é explicada, com as consultas DNS que ela gasta. Abra um include para ver o que o serviço por trás dele autoriza.',
  ],
  howNote:
    'O link na barra de endereço repete a mesma verificação de SPF. Você pode enviá-lo a um colega ou ao seu provedor de DNS. Há um limite: o servidor de destino verifica o SPF pelo IP do servidor que enviou a mensagem. Esta ferramenta não tem uma mensagem para analisar, então verifica o próprio registro. Ela não consegue avaliar partes feitas com macros SPF, que mudam a cada servidor de envio.',
  imageAlt: 'Ilustração de um registro SPF dividido em partes, com um contador das consultas DNS usadas de um total de 10.',
  whatTitle: 'O que é um registro SPF?',
  whatIntro:
    'Um registro SPF é um registro TXT no DNS de um domínio. Ele lista os servidores que podem enviar e-mail em nome desse domínio. SPF significa Sender Policy Framework, e as regras estão na [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Um domínio que usa o Google Workspace costuma ter um registro como este:',
  whatAfter: [
    '`v=spf1` indica que é um registro SPF. `include:_spf.google.com` autoriza todos os servidores da lista do próprio Google. `~all` pede aos servidores de destino que tratem com suspeita o e-mail de qualquer outro servidor.',
    'Quando uma mensagem chega, o servidor de destino pega o domínio do endereço de bounce, chamado Return-Path. Ele lê o registro SPF desse domínio e confere se o IP do servidor de envio está na lista. O SPF não olha o endereço From que você vê na caixa de entrada. Por isso ele trabalha junto com o DKIM e o DMARC. Para entender como os três se encaixam, leia [SPF, DKIM e DMARC explicados](/blog/spf-dkim-dmarc-explained).',
    'Desde fevereiro de 2024, o [Gmail exige SPF ou DKIM](https://support.google.com/a/answer/81126) de todo remetente, e os dois de remetentes em massa. O Yahoo tem as mesmas regras.',
  ],
  partsTitle: 'O que significa cada parte do registro SPF',
  partsIntro:
    'Um registro SPF é uma lista de termos separados por espaços. Os servidores de destino leem da esquerda para a direita e param no primeiro termo que corresponde ao servidor de envio.',
  thPart: 'Parte',
  thDoes: 'O que faz',
  thLookup: 'Consulta DNS',
  lookupLabel: 'Consulta DNS: ',
  parts: [
    { part: 'v=spf1', does: 'Marca o registro TXT como SPF. Deve vir primeiro, escrito exatamente assim.', lookup: 'Não' },
    { part: 'ip4:192.0.2.10', does: 'Autoriza um endereço IPv4 ou uma faixa como 192.0.2.0/24.', lookup: 'Não' },
    { part: 'ip6:2001:db8::/32', does: 'Autoriza um endereço ou uma faixa IPv6.', lookup: 'Não' },
    { part: 'a', does: 'Autoriza os endereços IP do próprio domínio, ou de um domínio indicado depois de dois-pontos.', lookup: 'Sim' },
    { part: 'mx', does: 'Autoriza os servidores dos registros MX do domínio, os que recebem os e-mails dele.', lookup: 'Sim' },
    { part: 'include:_spf.google.com', does: 'Autoriza todos os servidores que o registro SPF de outro domínio autoriza. É assim que você adiciona um serviço.', lookup: 'Sim, mais as internas' },
    { part: 'exists:%{i}.example.com', does: 'Corresponde quando uma consulta DNS encontra um endereço. Grandes remetentes usam isso com macros.', lookup: 'Sim' },
    { part: 'ptr', does: 'Corresponde pelo DNS reverso. A RFC 7208 diz para não usar, porque é lento e pouco confiável.', lookup: 'Sim' },
    { part: '~all ou -all', does: 'Decide o que acontece com todos os servidores que você não listou. Fica no final.', lookup: 'Não' },
    { part: 'redirect=example.net', does: 'Usa o registro SPF de outro domínio no lugar deste. É ignorado quando o registro tem all.', lookup: 'Sim' },
  ],
  partsAfter: [
    'Qualquer parte pode começar com um qualificador, que define o resultado quando ela corresponde. `+` significa pass e é o padrão, então ninguém o escreve. `-` significa fail, `~` significa softfail (falha leve) e `?` significa neutral (neutro). Por isso a mesma palavra, all, pode terminar um registro como `-all`, `~all` ou `?all`.',
    'Os nomes não diferenciam maiúsculas de minúsculas, então `Include:` funciona tão bem quanto `include:`. A RFC 7208 recomenda terminar todo registro com all ou com um redirect. Sem nenhum dos dois, os servidores que você não listou recebem um resultado neutro.',
  ],
  limitTitle: 'O limite de 10 consultas DNS',
  limitParas: [
    'Cada include, a, mx, ptr, exists e redirect faz o servidor de destino executar uma consulta DNS. A RFC 7208 permite 10 no total. As consultas dentro de um include também contam, então um só include pode custar várias. ip4, ip6 e all não custam nada. Quando um registro precisa de mais de 10, os servidores de destino param e devolvem um permerror, e o SPF falha.',
    'É fácil chegar ao limite. Medimos no DNS público o custo de includes comuns: Google Workspace 1, Microsoft 365 1, Salesforce 2, Mailgun 5 e Freshdesk 7. Uma empresa no Google Workspace que adiciona Mailgun e Freshdesk já precisa de 13 consultas. Um [estudo de 2024 sobre registros SPF](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) em .com, .net, .org e .se mostrou que 6,5% precisavam de mais de 10 consultas. Includes dos registros de apenas dois provedores de hospedagem causaram 83,7% desses casos.',
    'Os custos também mudam. O include do Google custava 4 consultas até dezembro de 2025, quando o [Google trocou os includes aninhados por uma lista simples](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Alguns guias e geradores de SPF ainda falam em 4. O verificador acima conta o número real cada vez que você o usa.',
    'Passar do limite nem sempre faz todas as mensagens falharem. A [Microsoft explica](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) que os servidores de destino param na primeira correspondência. O e-mail de um servidor listado no começo ainda pode passar, enquanto o de um servidor listado no fim falha. Isso faz o problema parecer aleatório, então conte as consultas do registro inteiro.',
    'Existe um segundo limite. Uma consulta que não encontra nada é uma consulta vazia (void lookup), por exemplo um include de um domínio que não existe mais. A RFC 7208 diz que os servidores de destino devem parar depois de 2 delas.',
  ],
  underTitle: 'Como ficar abaixo de 10 consultas',
  underSteps: [
    'Remova os includes de serviços que você não usa mais.',
    'Remova os includes que um serviço não pede mais. Mailchimp, Postmark, Brevo e Klaviyo não precisam de um no seu domínio principal. O SendGrid e o Amazon SES colocam o deles em um subdomínio. A lista está mais abaixo.',
    'Liste seus próprios servidores com ip4 e ip6 em vez de a ou mx. A RFC 7208 recomenda essa ordem, e endereços IP não gastam consultas.',
    'Envie parte dos e-mails por um subdomínio, como news.exemplo.com.br. Cada subdomínio tem o próprio registro e as próprias 10 consultas.',
  ],
  underNote:
    'Alguns serviços oferecem SPF flattening, que troca os includes pelos endereços IP por trás deles. Isso economiza consultas, mas os provedores mudam seus endereços, e um registro com flattening não acompanha a mudança. A Microsoft recomenda usar flattening só em serviços com faixas de IP estáveis e documentadas, nunca no próprio Microsoft 365. Ela também pede para revisar o resultado pelo menos a cada trimestre.',
  servicesTitle: 'Includes de SPF para Google Workspace, Microsoft 365 e outros serviços',
  servicesIntro:
    'Estes são os valores de include do guia de configuração de cada serviço, com as consultas DNS que cada um gasta. Medimos os custos no DNS público em 12 de outubro de 2026. Ao configurar um serviço, copie o valor do guia dele, porque alguns dependem da sua região ou conta.',
  thService: 'Serviço',
  thInclude: 'Include',
  thLookups: 'Consultas',
  lookupCount: (n) => `${n} ${n === 1 ? 'consulta' : 'consultas'}`,
  servicesNote:
    'O HubSpot dá a cada conta um include próprio, terminado em hubspotemail.net. Copie-o nas configurações de e-mail do HubSpot. Ele gasta 1 consulta.',
  notNeededTitle: 'Serviços que normalmente não precisam de include',
  notNeededIntro:
    'O SPF é verificado no endereço de bounce, não no endereço From. Muitos serviços de envio hoje usam um endereço de bounce próprio, ou um subdomínio seu. Um include deles no seu domínio principal só gasta consultas.',
  notNeededAfter: 'O verificador aponta esses includes quando os encontra no seu registro.',
  createTitle: 'Como criar um registro SPF',
  createIntro:
    'Use a aba Criar acima como gerador de SPF. Marque os serviços que enviam seus e-mails, e a ferramenta escreve o registro SPF e conta as consultas dele. Se o seu domínio já tem um registro, carregue-o primeiro, para completar o registro em vez de substituí-lo. Estes são os passos:',
  createSteps: [
    'Liste todos os serviços que enviam e-mail em nome do seu domínio. Pense além do provedor de e-mail: newsletters, CRM, help desk, cobrança, formulários do site. Os relatórios DMARC mostram remetentes que você esqueceu.',
    'Encontre o include de cada um no guia de configuração dele, ou marque o serviço na ferramenta. Para seus próprios servidores de e-mail, use os endereços IP deles.',
    'Escolha o final: ~all ou -all. A próxima seção explica a diferença.',
    'Publique-o como um único registro TXT no próprio domínio. A maioria dos provedores de DNS chama esse nome de @. Se já existe um registro que começa com v=spf1, edite-o em vez de adicionar um segundo.',
    'Espere alguns minutos e verifique o domínio de novo com o verificador de SPF.',
  ],
  createParas: [
    'Cada nome que envia e-mail precisa do próprio registro, porque subdomínios não usam o registro do domínio pai. Um domínio ou subdomínio que nunca envia e-mail também deve ter um: `v=spf1 -all`. A RFC 7208 chama isso de boa prática bem estabelecida. Isso impede que outros enviem e-mails que se passem por esse nome. O [NCSC do Reino Unido](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) sugere adicionar também a esses domínios um registro DMARC com p=reject e um registro MX nulo.',
    'Um registro com mais de 255 caracteres precisa ser dividido em várias strings dentro do mesmo registro TXT. Os servidores de destino juntam as strings sem espaços, então coloque o espaço dentro de uma string, não entre elas. Confira como o seu provedor de DNS trata valores longos.',
  ],
  endingTitle: '~all ou -all: qual final usar',
  endingIntro: 'Os grandes provedores não concordam, e cada um tem um motivo.',
  endingList: [
    'O [Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) recomenda ~all.',
    'O [M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), um grupo do setor que reúne grandes provedores de e-mail e remetentes, diz que os registros devem terminar em ~all. Ele também pede aos servidores de destino que não recusem por falha de SPF antes de o DMARC rodar.',
    'A [Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) recomenda -all, desde que o DKIM e o DMARC também estejam configurados.',
  ],
  endingParas: [
    'O risco do -all é que alguns servidores de destino recusam a mensagem durante a entrega, antes de verificar o DMARC. A [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), o padrão DMARC de 2026, observa que esses e-mails nunca aparecem nos seus relatórios DMARC. Isso torna os problemas mais difíceis de encontrar.',
    'Na prática, ~all é a escolha mais segura para um domínio que envia e-mail, principalmente enquanto você ainda descobre todos os seus remetentes. Se o seu DMARC está em quarantine ou reject, é ele que decide o que acontece com o e-mail que falha. Use -all em domínios que não enviam nenhum e-mail. Nunca use +all, que deixa todo servidor passar, e evite ?all, que equivale a não ter registro.',
  ],
  resultsTitle: 'O que significa o resultado da verificação de SPF',
  thResult: 'Resultado',
  thMeaning: 'O que significa',
  thAction: 'O que fazer',
  results: [
    {
      result: 'Registro SPF válido',
      meaning: 'Um único registro, legível, dentro de 10 consultas e terminado em ~all ou -all.',
      action: 'Nada. Verifique de novo depois de adicionar um serviço que envia e-mail por você.',
    },
    {
      result: 'Registro SPF que funciona, com avisos',
      meaning: 'Os servidores de destino conseguem usá-lo, mas algo o enfraquece, como 9 ou 10 consultas, falta de all no final ou ptr.',
      action: 'Corrija os avisos listados abaixo do registro. Eles costumam virar erros quando você adiciona mais um serviço.',
    },
    {
      result: 'Registro SPF quebrado',
      meaning: 'Os servidores de destino recebem um permerror, então o SPF falha para todo e-mail do domínio.',
      action: 'Corrija os erros listados. Os mais comuns são dois registros e mais de 10 consultas.',
    },
    {
      result: 'O registro SPF não protege o domínio',
      meaning: 'O registro termina em +all, ou inclui um registro que termina assim, então qualquer servidor da internet passa.',
      action: 'Troque +all por ~all ou -all.',
    },
    {
      result: 'Sem registro SPF',
      meaning: 'O domínio não publica nenhum registro TXT que comece com v=spf1.',
      action: 'Crie um na aba Criar. Um domínio que nunca envia e-mail deve ter v=spf1 -all.',
    },
    {
      result: 'O domínio não existe',
      meaning: 'O DNS não tem nenhum registro do domínio.',
      action: 'Confira a grafia e se o domínio está registrado.',
    },
  ],
  receiverIntro:
    'Os servidores de destino usam termos próprios para o resultado de uma verificação SPF. Você os vê nos cabeçalhos das mensagens, como spf=pass ou spf=softfail, e nos relatórios DMARC:',
  spfResults: [
    { result: 'pass', meaning: 'O servidor de envio está autorizado.' },
    { result: 'fail', meaning: 'O servidor não está autorizado (-all). O servidor de destino pode recusar a mensagem.' },
    { result: 'softfail', meaning: 'O servidor provavelmente não está autorizado (~all). A RFC 7208 diz que isso sozinho não deve causar recusa.' },
    { result: 'neutral', meaning: 'O registro não diz nada sobre este servidor (?all). Equivale a não ter registro.' },
    { result: 'none', meaning: 'O domínio não tem registro SPF.' },
    { result: 'temperror', meaning: 'Uma consulta DNS falhou por um momento. O remetente pode tentar de novo mais tarde.' },
    { result: 'permerror', meaning: 'O registro está quebrado e não pode ser lido. Só uma correção no DNS resolve.' },
  ],
  errorsTitle: 'Erros comuns no registro SPF e como corrigir',
  errorsIntro:
    'Uma [análise de 12 milhões de domínios populares feita em 2023](https://arxiv.org/abs/2502.08240) encontrou SPF em 56,5% deles e erros em 2,9% dos registros SPF. O erro mais comum foi um include ou redirect apontando para um nome sem registro SPF. O excesso de consultas ficou em segundo lugar.',
  errors: [
    {
      title: 'Dois registros SPF no mesmo domínio',
      text: 'Isso costuma acontecer quando o guia de um novo serviço diz “adicione este registro TXT” e alguém o adiciona ao lado do antigo. Dois registros causam um permerror. Junte os dois em um só. Comece com um v=spf1, liste todos os includes e endereços IP e termine com um único all.',
    },
    {
      title: 'Um include que não aponta para nada',
      text: 'Se um include aponta para um domínio sem registro SPF, o registro inteiro falha com um permerror. Pode ser um erro de digitação, ou um serviço que fechou ou mudou o include. Remova o include ou troque pelo valor atual do serviço.',
    },
    {
      title: '+all, ?all ou nenhum all no final',
      text: '`+all` autoriza todos os servidores da internet, então o registro não protege nada. `?all`, ou a falta de all, dá um resultado neutro, que os servidores de destino tratam como ausência de registro. Termine o registro com ~all ou -all.',
    },
    {
      title: 'ptr no registro',
      text: 'A RFC 7208 diz que o ptr não deve ser usado. Ele é lento, gasta uma consulta e é menos confiável que outros mecanismos quando o DNS tem problemas. Troque-o por entradas ip4 e ip6 para os servidores que ele deveria cobrir.',
    },
    {
      title: 'Erros de digitação',
      text: 'Um espaço depois de dois-pontos, um endereço IPv4 incompleto ou uma palavra que o SPF não conhece causam um permerror. Um erro é mais discreto: `include=example.com` com sinal de igual é lido como uma configuração desconhecida e ignorado. Assim, aquele serviço nunca é autorizado. O verificador aponta todos esses casos.',
    },
  ],
  mythsTitle: 'Três detalhes que os guias de SPF costumam errar',
  myths: [
    '“Um registro SPF não pode ter letras maiúsculas.” A RFC 7208 diz que os nomes não diferenciam maiúsculas de minúsculas.',
    '“Um registro SPF pode ter no máximo 255 caracteres.” O limite de 255 vale para cada string. Um registro mais longo é dividido em strings. A RFC 7208 só pede que a resposta DNS inteira continue pequena, abaixo de cerca de 450 bytes.',
    '“Você pode ter até 10 includes.” O limite conta consultas DNS, e as consultas dentro dos includes também contam.',
  ],
  authTitle: 'O SPF é uma parte da autenticação de e-mail',
  authParas: [
    'Um resultado pass no SPF tem limites. Na mesma análise de 2023, 34,7% dos domínios autorizavam e-mail de mais de 100.000 endereços IP. O SPF também quebra quando alguém encaminha sua mensagem, porque o servidor que encaminha não está no seu registro.',
    'O DKIM assina a própria mensagem, então costuma sobreviver ao encaminhamento. O DMARC confere se o SPF ou o DKIM passou para o mesmo domínio do endereço From. Ele também diz aos servidores de destino o que fazer quando nenhum dos dois passou. Muitos serviços de envio passam no SPF com o próprio domínio de bounce, que não bate com o seu endereço From. Um Return-Path personalizado no serviço resolve isso. Configure os outros dois registros com o [gerador de DKIM](/dkim-generator) e o [gerador de DMARC](/dmarc-generator). Use a [consulta MX](/mx-lookup) para ver onde o seu domínio recebe e-mail.',
    'A autenticação também não ajuda com endereços que não existem. E-mails para eles voltam como bounce, e uma taxa de bounce alta prejudica a entrega. Verifique endereços individuais com o [verificador de e-mail](/email-checker), ou uma lista inteira com o [validador de e-mail em massa](/bulk-email-verifier). Se quiser uma definição curta para compartilhar com a equipe, veja o [verbete sobre registro SPF no glossário](/glossary/spf).',
  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'O que é um registro SPF?',
      a: 'É um registro TXT no DNS do seu domínio que lista os servidores autorizados a enviar e-mail em nome do domínio. Os servidores de destino o leem para decidir se uma mensagem veio mesmo de um dos seus servidores. SPF significa Sender Policy Framework e está definido na RFC 7208.',
    },
    {
      q: 'Como verificar o meu registro SPF?',
      a: 'Digite seu domínio no verificador de SPF no topo desta página. No terminal, nslookup -type=txt exemplo.com.br funciona no Windows, e dig txt exemplo.com.br funciona no macOS e no Linux. Procure o registro TXT que começa com v=spf1.',
    },
    {
      q: 'Um domínio pode ter dois registros SPF?',
      a: 'Não. A RFC 7208 permite um registro SPF por nome de domínio. Com dois, os servidores de destino devolvem um erro permanente e o SPF falha para todos os seus e-mails. Junte os dois em um só registro. Outros registros TXT, como códigos de verificação de site, podem ficar.',
    },
    {
      q: 'O que significa permerror no SPF?',
      a: 'Significa que o servidor de destino não conseguiu ler seu registro SPF, então a verificação falha. As causas comuns são dois registros SPF, mais de 10 consultas DNS ou um include de um domínio sem registro SPF. Um erro de digitação também pode causar isso. O verificador acima mostra a causa.',
    },
    {
      q: 'Qual a diferença entre ~all e -all?',
      a: 'Com ~all, o e-mail de servidores que você não listou recebe um softfail, e os servidores de destino costumam aceitá-lo com mais suspeita. Com -all, ele recebe um fail, e alguns servidores o recusam. O Google recomenda ~all. A Microsoft recomenda -all depois que o DKIM e o DMARC estão configurados.',
    },
    {
      q: 'Os subdomínios precisam de um registro SPF próprio?',
      a: 'Sim, se enviam e-mail. Um subdomínio não usa o registro SPF do domínio pai. Se news.exemplo.com.br envia e-mail, ele precisa do próprio registro. Se nunca envia, dê a ele v=spf1 -all.',
    },
    {
      q: 'Quanto tempo leva uma alteração no registro SPF?',
      a: 'Até o TTL do registro antigo. Resolvers que o guardaram em cache mantêm a resposta antiga até o TTL acabar, então um TTL de 3600 significa até uma hora. O Google diz que alterações podem levar até 48 horas, mas a maioria aparece bem antes.',
    },
    {
      q: 'Preciso de SPF se já tenho DKIM?',
      a: 'É mais seguro ter os dois. Gmail e Yahoo aceitam SPF ou DKIM de remetentes pequenos, mas exigem os dois de remetentes em massa. O DMARC passa quando qualquer um deles passa e bate com o seu domínio From, então ter os dois dá uma garantia extra.',
    },
    {
      q: 'O SPF impede a falsificação de e-mail?',
      a: 'Não sozinho. O SPF verifica o endereço de bounce (o Return-Path), não o endereço From que as pessoas veem. Um spammer pode passar no SPF com o próprio domínio e ainda mostrar o seu nome no From. O DMARC fecha essa brecha ao exigir que os dois domínios batam.',
    },
  ],
  ctaHeadline: 'Verifique os endereços antes de enviar',
}

export const SPF_PAGE_STRINGS: Partial<Record<Locale, SpfPageStrings>> & { en: SpfPageStrings } = { en, de, it, 'pt-br': ptBr }
