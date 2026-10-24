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

const fr: SpfPageStrings = {
  metaTitle: 'Vérificateur SPF : Vérifier et Générer un Enregistrement SPF | Giggal.ai',
  ogTitle: 'Vérificateur SPF : Vérifier et Générer un Enregistrement SPF',
  description:
    'Vérifiez gratuitement l\'enregistrement SPF de n\'importe quel domaine. Analysez chaque mécanisme, comptez les requêtes DNS par rapport à la limite de 10, détectez les erreurs ou générez un nouvel enregistrement.',
  ogImage: '/og-image.png',
  ogAlt: 'Vérificateur et générateur d\'enregistrement SPF',
  crumb: 'Vérificateur SPF',
  appName: 'Vérificateur SPF',
  featureList: [
    'Sans inscription ni carte bancaire',
    'Comptage en direct des requêtes DNS',
    'Analyse syntaxique stricte RFC 7208',
    'Recommandations de correction immédiates',
  ],
  h1: 'Vérificateur et générateur d\'enregistrement SPF',
  heroIntro:
    'Analysez l\'enregistrement SPF d\'un domaine dans le DNS public. L\'outil détaille chaque mécanisme, compte les requêtes DNS consommées par rapport à la limite de 10 de la RFC 7208 et met en évidence les erreurs de configuration.',
  howTitle: 'Comment vérifier un enregistrement SPF',
  howSteps: [
    'Saisissez un nom de domaine dans le champ ci-dessus. Une adresse e-mail complète fonctionne aussi : l\'outil extrait automatiquement le domaine.',
    'Cliquez sur Vérifier l\'enregistrement SPF. L\'outil interroge les serveurs DNS publics faisant autorité, exactement comme le ferait un serveur de messagerie récepteur.',
    'Consultez d\'abord le résumé global : il indique si l\'enregistrement est valide, s\'il comporte des avertissements ou s\'il est rompu.',
    'Examinez ensuite la liste des alertes et avertissements éventuels. Chaque point explique précisément quelle modification apporter.',
    'En dessous, chaque terme de l\'enregistrement est expliqué avec son coût en requêtes DNS. Dépliez les directives include pour voir ce que chaque service délègue.',
  ],
  howNote:
    'L\'URL de la page conserve votre recherche. Vous pouvez partager ce lien direct avec un collègue ou le support de votre hébergeur. Notez une limite : un serveur récepteur évalue le SPF en fonction de l\'adresse IP du serveur expéditeur. Cet outil n\'ayant pas de message sous la main, il valide la syntaxe et la conformité DNS de l\'enregistrement. Il ne peut pas exécuter les macros dynamiques dépendant de l\'IP du client.',
  imageAlt: 'Illustration d\'un enregistrement SPF décomposé en mécanismes avec jauge de requêtes DNS sur 10.',
  whatTitle: 'Qu\'est-ce qu\'un enregistrement SPF ?',
  whatIntro:
    'Un enregistrement SPF est un enregistrement TXT publié dans la zone DNS d\'un domaine. Il spécifie quels serveurs de messagerie sont autorisés à envoyer des e-mails au nom de ce domaine. SPF signifie Sender Policy Framework et ses spécifications sont régies par la [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Un domaine utilisant Google Workspace dispose généralement d\'un enregistrement comme celui-ci :',
  whatAfter: [
    '`v=spf1` identifie le début de l\'enregistrement SPF. `include:_spf.google.com` autorise l\'ensemble des serveurs gérés par Google. `~all` indique aux serveurs récepteurs de marquer comme suspect tout e-mail provenant d\'un serveur non listé.',
    'Lorsqu\'un message arrive, le serveur récepteur extrait le domaine de l\'adresse de retour technique (le Return-Path ou enveloppe). Il consulte l\'enregistrement SPF de ce domaine et vérifie si l\'adresse IP émettrice y figure. Le SPF ne vérifie pas l\'adresse d\'expéditeur visible (From) affichée dans le client de messagerie. C\'est pourquoi le SPF travaille conjointement avec DKIM et DMARC. Pour comprendre leur fonctionnement combiné, consultez [SPF, DKIM et DMARC expliqués](/blog/spf-dkim-dmarc-explained).',
    'Depuis février 2024, [Gmail exige SPF ou DKIM](https://support.google.com/a/answer/81126) pour tous les expéditeurs, et les deux pour les expéditeurs en masse. Yahoo applique des exigences identiques.',
  ],
  partsTitle: 'Que signifie chaque terme d\'un enregistrement SPF',
  partsIntro:
    'Un enregistrement SPF est une séquence de mécanismes et de modificateurs séparés par des espaces. Les serveurs récepteurs lisent de gauche à droite et s\'arrêtent au premier terme correspondant à l\'IP d\'envoi.',
  thPart: 'Terme',
  thDoes: 'Rôle',
  thLookup: 'Requête DNS',
  lookupLabel: 'Requête DNS : ',
  parts: [
    { part: 'v=spf1', does: 'Identifie l\'enregistrement TXT comme SPF. Doit être le premier élément, écrit exactement ainsi.', lookup: 'Non' },
    { part: 'ip4:192.0.2.10', does: 'Autorise une adresse IPv4 unique ou une plage CIDR comme 192.0.2.0/24.', lookup: 'Non' },
    { part: 'ip6:2001:db8::/32', does: 'Autorise une adresse ou une plage CIDR IPv6.', lookup: 'Non' },
    { part: 'a', does: 'Autorise les adresses IP résolues pour le domaine lui-même, ou pour le domaine indiqué après deux-points.', lookup: 'Oui' },
    { part: 'mx', does: 'Autorise les adresses IP des serveurs de réception MX du domaine.', lookup: 'Oui' },
    { part: 'include:_spf.google.com', does: 'Autorise tous les serveurs couverts par l\'enregistrement SPF d\'un autre domaine. C\'est le moyen standard d\'intégrer un service tiers.', lookup: 'Oui, + imbriquées' },
    { part: 'exists:%{i}.example.com', does: 'Correspond si une requête DNS renvoie une adresse A. Utilisé par certains grands expéditeurs avec des macros.', lookup: 'Oui' },
    { part: 'ptr', does: 'Vérifie par résolution DNS inverse (PTR). La RFC 7208 déconseille formellement son usage en raison de sa lenteur et de son manque de fiabilité.', lookup: 'Oui' },
    { part: '~all ou -all', does: 'Définit le traitement appliqué à tous les serveurs non explicitement autorisés. Doit toujours figurer en fin d\'enregistrement.', lookup: 'Non' },
    { part: 'redirect=example.net', does: 'Délègue la politique SPF à celle d\'un autre domaine. Est ignoré si le terme all est présent.', lookup: 'Oui' },
  ],
  partsAfter: [
    'Tout mécanisme peut être précédé d\'un qualificateur qui détermine le résultat de l\'évaluation en cas de correspondance. `+` signifie Pass (réussite) et constitue la valeur par défaut implicite. `-` signifie Fail (échec strict), `~` signifie Softfail (échec partiel) et `?` signifie Neutral (neutre). Ainsi, le mot `all` peut conclure un enregistrement sous la forme `-all`, `~all` ou `?all`.',
    'Les mécanismes sont insensibles à la casse : `Include:` fonctionne de la même manière que `include:`. La RFC 7208 recommande de clore tout enregistrement par un mécanisme all ou un modificateur redirect. Sans conclusion explicite, les serveurs non listés reçoivent un résultat Neutral.',
  ],
  limitTitle: 'La limite stricte des 10 requêtes DNS',
  limitParas: [
    'Chaque terme include, a, mx, ptr, exists et redirect force le serveur récepteur à effectuer une requête de résolution DNS. La RFC 7208 plafonne ce total à 10 requêtes par évaluation. Les requêtes effectuées à l\'intérieur des include comptent également, de sorte qu\'un seul include peut engendrer plusieurs requêtes. ip4, ip6 et all ne consomment aucune requête. Si un enregistrement dépasse 10 requêtes, les serveurs récepteurs arrêtent l\'évaluation et renvoient un Permerror : le contrôle SPF échoue.',
    'Atteindre cette limite arrive vite. Nous avons mesuré dans le DNS public le coût des includes courants : Google Workspace consomme 1 requête, Microsoft 365 consomme 1 requête, Salesforce en consomme 2, Mailgun en consomme 5 et Freshdesk 7. Une entreprise sur Google Workspace qui associe Mailgun et Freshdesk atteint déjà 13 requêtes. Une [étude de 2024 sur les enregistrements SPF](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) couvrant .com, .net, .org et .se a révélé que 6,5 % des domaines dépassaient les 10 requêtes, et les enregistrements de seulement deux hébergeurs étaient responsables de 83,7 % de ces dépassements.',
    'Ces coûts évoluent également dans le temps. L\'include de Google coûtait 4 requêtes jusqu\'en décembre 2025, date à laquelle [Google a remplacé ses includes imbriqués par une liste plate](https://www.uriports.com/blog/google-simplifies-its-spf-record/). De nombreux tutoriels et générateurs SPF indiquent encore l\'ancien chiffre de 4. L\'outil ci-dessus interroge le DNS en temps réel pour mesurer le coût exact.',
    'Dépasser la limite ne fait pas nécessairement échouer tous les messages de façon uniforme. Comme [l\'explique Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), les serveurs récepteurs évaluent les termes de gauche à droite et s\'arrêtent dès la première correspondance. Les e-mails envoyés par un service listé en premier peuvent réussir, tandis que ceux d\'un service listé plus loin échouent. Cette disparité rend les pannes difficiles à diagnostiquer si l\'on ne compte pas l\'intégralité des requêtes de l\'arbre SPF.',
    'Il existe une seconde limite : les requêtes infructueuses (void lookups), par exemple un include pointant vers un domaine supprimé ou introuvable. La RFC 7208 stipule que les serveurs doivent abandonner l\'évaluation après 2 requêtes vides successives.',
  ],
  underTitle: 'Comment rester sous la limite des 10 requêtes DNS',
  underSteps: [
    'Supprimez les includes des services et outils marketing que vous n\'utilisez plus.',
    'Supprimez les includes que vos prestataires n\'exigent plus. Mailchimp, Postmark, Brevo et Klaviyo ne requièrent plus d\'include sur votre domaine racine. SendGrid et Amazon SES délèguent leur envoi via un sous-domaine dédié. Consultez la liste détaillée ci-dessous.',
    'Déclarez vos propres serveurs de messagerie avec ip4 et ip6 au lieu de a ou mx. La RFC 7208 préconise cet ordre, et les adresses IP brutes ne consomment aucune requête DNS.',
    'Envoyez vos e-mails transactionnels ou marketing depuis un sous-domaine dédié, comme newsletter.exemple.fr. Chaque sous-domaine possède son propre enregistrement et dispose de son propre quota de 10 requêtes.',
  ],
  underNote:
    'Certains prestataires proposent le « SPF flattening », qui remplace les includes par la liste des adresses IP directes. Cela réduit les requêtes DNS, mais lorsque les fournisseurs modifient leurs plages IP, votre enregistrement statique devient obsolète. Microsoft déconseille le flattening pour les services dont les adresses changent fréquemment et demande une révision trimestrielle minimale si vous y recourez.',
  servicesTitle: 'Includes SPF pour Google Workspace, Microsoft 365 et autres services',
  servicesIntro:
    'Voici les valeurs include recommandées dans la documentation officielle de chaque service, avec leur coût en requêtes DNS mesuré sur le DNS public le 12 octobre 2026. Vérifiez toujours la documentation de votre compte, car certains services attribuent des sous-domaines régionaux spécifiques.',
  thService: 'Service',
  thInclude: 'Valeur include',
  thLookups: 'Requêtes DNS',
  lookupCount: (n) => `${n} ${n === 1 ? 'requête' : 'requêtes'}`,
  servicesNote:
    'HubSpot génère un include unique par portail client sous la forme [id].hubspotemail.net. Récupérez votre valeur exacte dans les paramètres de votre compte HubSpot. Il consomme 1 requête DNS.',
  notNeededTitle: 'Services ne nécessitant généralement aucun include SPF',
  notNeededIntro:
    'Le contrôle SPF s\'effectue sur le domaine de l\'adresse de retour d\'enveloppe (Return-Path), et non sur l\'en-tête From visible. La plupart des plateformes d\'envoi actuelles utilisent leur propre domaine de retour ou un sous-domaine CNAME dédié. Ajouter un include sur votre domaine apex ne fait que consommer inutilement vos requêtes DNS.',
  notNeededAfter: 'L\'outil ci-dessus met en évidence ces includes superflus s\'il en détecte dans votre enregistrement.',
  createTitle: 'Comment créer un enregistrement SPF',
  createIntro:
    'Basculez sur l\'onglet Créer ci-dessus pour utiliser le générateur SPF interactif. Cochez les services qui envoient des e-mails pour votre domaine, et l\'outil compose automatiquement la syntaxe tout en surveillant le compteur de requêtes DNS. Si votre domaine possède déjà un enregistrement, chargez-le d\'abord pour l\'ajuster sans écraser vos réglages. Voici les étapes recommandées :',
  createSteps: [
    'Recensez tous les services habilités à émettre des e-mails pour votre domaine : serveurs internes, suite bureautique, CRM, plateforme d\'assistance, outil de facturation et formulaires de contact. Vos rapports DMARC permettent d\'identifier les flux d\'envoi oubliés.',
    'Récupérez la valeur include de chaque prestataire dans sa documentation ou sélectionnez-le directement dans notre outil. Pour vos serveurs dédiés, privilégiez leurs adresses IP.',
    'Sélectionnez la terminaison appropriée : ~all ou -all. La section suivante détaille leurs implications respectives.',
    'Publiez l\'entrée comme un enregistrement TXT unique sur le nom d\'hôte racine de votre zone DNS (souvent représenté par @). Si un enregistrement commençant par v=spf1 existe déjà, modifiez-le sans créer de seconde entrée.',
    'Patientez quelques minutes pour la propagation DNS, puis lancez une vérification avec cet outil pour confirmer la validité du résultat.',
  ],
  createParas: [
    'Chaque sous-domaine émetteur requiert son propre enregistrement, car les sous-domaines n\'héritent pas du SPF de leur domaine parent. Un domaine ou sous-domaine qui n\'envoie jamais de courrier électronique doit impérativement être protégé avec : `v=spf1 -all`. La RFC 7208 qualifie cela de bonne pratique reconnue pour empêcher toute usurpation d\'identité. Le [NCSC britannique](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) recommande d\'y adjoindre une politique DMARC p=reject et un enregistrement MX nul (Null MX).',
    'Un enregistrement dépassant 255 caractères doit être découpé en plusieurs chaînes entre guillemets au sein du même enregistrement TXT. Les serveurs récepteurs concatènent ces chaînes sans ajouter d\'espace : assurez-vous d\'inclure les espaces de séparation à l\'intérieur des segments. Vérifiez les directives de votre hébergeur DNS pour les chaînes longues.',
  ],
  endingTitle: '~all ou -all : quelle terminaison choisir',
  endingIntro: 'Les principaux fournisseurs de messagerie et comités d\'experts ont des recommandations différentes :',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) recommande ~all (Softfail).',
    'Le [M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), consortium regroupant les grands acteurs du courrier électronique, préconise la terminaison en ~all afin d\'éviter le rejet brutal des messages avant le traitement de la politique DMARC.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) recommande -all (Fail strict), à condition que DKIM et DMARC soient intégralement configurés.',
  ],
  endingParas: [
    'Le principal inconvénient de -all réside dans le fait que certains serveurs récepteurs rejettent immédiatement le message lors de la connexion SMTP initiale, avant même d\'avoir évalué la politique DMARC. La [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), norme DMARC de 2026, souligne que ces messages rejetés prématurément ne génèrent aucun rapport DMARC, ce qui complique grandement le dépannage de vos envois légitimes.',
    'En pratique, ~all s\'avère le choix le plus sûr pour les domaines actifs, en particulier pendant la phase de recensement de vos flux d\'envoi. Si votre domaine est protégé par une règle DMARC quarantine ou reject, c\'est DMARC qui déterminera le sort du message. Réservez -all aux domaines purement défensifs qui n\'émettent jamais d\'e-mails. N\'utilisez jamais +all (qui autorise tout le web) et évitez ?all (équivalent à une absence totale de politique).',
  ],
  resultsTitle: 'Signification des diagnostics du vérificateur SPF',
  thResult: 'Diagnostic',
  thMeaning: 'Signification',
  thAction: 'Mesure à prendre',
  results: [
    {
      result: 'Enregistrement SPF valide',
      meaning: 'Un enregistrement unique, correctement formaté, respectant la limite de 10 requêtes et conclu par ~all ou -all.',
      action: 'Aucune action requise. Vérifiez à nouveau lors de l’ajout d’un nouvel outil d’envoi.',
    },
    {
      result: 'Enregistrement fonctionnel avec avertissements',
      meaning: 'L’enregistrement est utilisable par les récepteurs, mais présente des faiblesses : 9 ou 10 requêtes DNS utilisées, absence de modificateur all ou présence de ptr.',
      action: 'Corrigez les avertissements signalés. Ils se transforment souvent en erreurs bloquantes lors du prochain ajout de service.',
    },
    {
      result: 'Enregistrement SPF rompu',
      meaning: 'L’enregistrement génère un Permerror DNS, provoquant l’échec du contrôle SPF pour tous les e-mails de votre domaine.',
      action: 'Résolvez sans attendre les erreurs signalées. Les causes les plus fréquentes sont la présence de doublons TXT et le dépassement des 10 requêtes.',
    },
    {
      result: 'L’enregistrement SPF ne protège pas le domaine',
      meaning: 'L’enregistrement se termine par +all ou inclut un enregistrement qui le fait, autorisant n’importe quel serveur sur Internet à émettre en votre nom.',
      action: 'Remplacez +all par ~all ou -all.',
    },
    {
      result: 'Aucun enregistrement SPF',
      meaning: 'Le domaine ne publie aucun enregistrement TXT débutant par v=spf1.',
      action: 'Créez-en un via l’onglet Créer. Un domaine inactif doit publier v=spf1 -all.',
    },
    {
      result: 'Le domaine n’existe pas',
      meaning: 'Aucun enregistrement DNS n’a été trouvé pour ce nom de domaine (NXDOMAIN).',
      action: 'Vérifiez l’orthographe saisie et assurez-vous que le domaine est convenablement enregistré et actif.',
    },
  ],
  receiverIntro:
    'Les serveurs de messagerie récepteurs appliquent une terminologie normalisée pour qualifier le résultat d\'un contrôle SPF. Ces résultats figurent dans les en-têtes Authentication-Results et dans les rapports DMARC agrégés :',
  spfResults: [
    { result: 'pass', meaning: 'Le serveur expéditeur est explicitement autorisé par l’enregistrement SPF.' },
    { result: 'fail', meaning: 'Le serveur expéditeur n’est pas autorisé (-all). Le serveur récepteur peut rejeter le message.' },
    { result: 'softfail', meaning: 'Le serveur n’est probablement pas autorisé (~all). La RFC 7208 stipule que ce statut ne doit pas justifier à lui seul le rejet du message.' },
    { result: 'neutral', meaning: 'L’enregistrement n’émet aucun avis sur ce serveur (?all). Équivaut fonctionnellement à une absence de politique.' },
    { result: 'none', meaning: 'Le domaine ne publie aucun enregistrement SPF.' },
    { result: 'temperror', meaning: 'Une erreur DNS temporaire est survenue lors de la résolution. L’expéditeur peut retenter la transmission ultérieurement.' },
    { result: 'permerror', meaning: 'L’enregistrement SPF est mal formé ou enfreint les limites (ex. >10 requêtes). Seule une modification DNS peut corriger ce statut.' },
  ],
  errorsTitle: 'Erreurs courantes sur les enregistrements SPF et solutions',
  errorsIntro:
    'Une [analyse de 12 millions de domaines populaires réalisée en 2023](https://arxiv.org/abs/2502.08240) a constaté que 56,5 % publiaient un enregistrement SPF, et que 2,9 % d\'entre eux contenaient des erreurs bloquantes. L\'anomalie la plus répandue était un include ou redirect pointant vers un domaine dépourvu de SPF, suivi de près par le dépassement du quota de requêtes DNS.',
  errors: [
    {
      title: 'Deux enregistrements SPF sur le même domaine',
      text: 'Cette erreur survient généralement lorsqu’un nouveau service demande d’ajouter un enregistrement TXT et qu’une seconde ligne est créée au lieu de modifier la première. Publier plusieurs entrées SPF entraîne automatiquement un Permerror. Fusionnez l’ensemble des mécanismes dans une seule entrée commençant par v=spf1 et finissant par un unique all.',
    },
    {
      title: 'Include pointant vers un domaine invalide ou vide',
      text: 'Si une directive include cible un domaine ne publiant aucun enregistrement SPF valide, l’ensemble de votre politique SPF échoue avec une erreur Permerror. Cela provient généralement d’une faute de frappe ou d’un service résilié. Supprimez l’include obsolète ou rectifiez sa valeur.',
    },
    {
      title: '+all, ?all ou omission de la conclusion all',
      text: '`+all` autorise l’intégralité des serveurs d’Internet et détruit toute sécurité. `?all` ou l’absence de clause finale renvoie un statut Neutral traité comme une absence de protection. Terminez toujours votre politique par ~all ou -all.',
    },
    {
      title: 'Présence du mécanisme ptr',
      text: 'La RFC 7208 déconseille formellement le mécanisme ptr. Lourd en ressources, il consomme une requête DNS et souffre de défaillances fréquentes lors de résolutions DNS lentes. Remplacez-le par des directives ip4 et ip6 explicites.',
    },
    {
      title: 'Erreurs de syntaxe et de ponctuation',
      text: 'Un espace inséré après les deux-points, un bloc IPv4 incomplet ou un terme inconnu déclenchent un Permerror immédiat. Une erreur plus insidieuse, `include=example.com` (avec un signe égal au lieu de deux-points), est ignorée comme modificateur inconnu : le service visé n’est alors jamais autorisé. Notre vérificateur détecte chacune de ces anomalies.',
    },
  ],
  mythsTitle: 'Trois idées reçues fréquentes sur le SPF',
  myths: [
    '« Un enregistrement SPF ne doit jamais comporter de majuscules. » La RFC 7208 précise expressément que les noms et mécanismes sont insensibles à la casse.',
    '« Un enregistrement SPF ne peut pas dépasser 255 caractères. » La limite de 255 caractères s’applique à chaque chaîne individuelle dans l’enregistrement DNS TXT. Un enregistrement plus long est simplement fragmenté en plusieurs chaînes concaténées.',
    '« On peut déclarer jusqu’à 10 directives include. » La limite s’applique au nombre total de requêtes DNS récursives, et non au nombre littéral de termes include déclarés.',
  ],
  authTitle: 'Le SPF au sein de la chaîne d\'authentification des e-mails',
  authParas: [
    'Un statut SPF pass ne garantit pas à lui seul une sécurité totale. Selon l\'étude de 2023 précitée, 34,7 % des domaines autorisent indirectement plus de 100 000 adresses IP distinctes. De plus, le SPF échoue presque systématiquement lors du transfert automatique d\'e-mails, l\'IP du serveur relais n\'étant pas répertoriée dans votre enregistrement.',
    'DKIM résout cette limite en apposant une signature cryptographique sur le contenu du message, préservée lors des transferts. DMARC fait la synthèse en vérifiant la conformité du domaine visible (From) avec SPF ou DKIM, et ordonne aux serveurs destinataires la conduite à tenir en cas d\'échec. Configurez ces défenses complémentaires grâce à notre [générateur de DKIM](/dkim-generator) et notre [générateur de DMARC](/dmarc-generator). Utilisez notre [recherche MX](/mx-lookup) pour identifier vos serveurs de réception.',
    'Aucun protocole d\'authentification ne protège toutefois contre les adresses destinataires invalides ou inexistantes. Celles-ci génèrent des rebonds qui dégradent votre réputation d\'expéditeur. Nettoyez vos adresses avec notre [vérificateur d\'e-mail](/email-checker) ou traitez vos listes complètes via notre [vérificateur d\'e-mails en masse](/bulk-email-verifier). Pour partager une synthèse claire avec vos équipes, consultez la [définition de l\'enregistrement SPF dans le glossaire](/glossary/spf).',
  ],
  faqTitle: 'Foire aux questions',
  faqs: [
    {
      q: 'Qu\'est-ce qu\'un enregistrement SPF ?',
      a: 'Il s\'agit d\'un enregistrement TXT configuré dans la zone DNS de votre domaine listant l\'ensemble des serveurs autorisés à envoyer des messages en son nom. Les serveurs récepteurs le consultent pour valider la légitimité des e-mails entrants. SPF signifie Sender Policy Framework et est encadré par la RFC 7208.',
    },
    {
      q: 'Comment vérifier mon enregistrement SPF ?',
      a: 'Saisissez votre nom de domaine dans le champ de vérification situé en haut de cette page. Dans une invite de commande, vous pouvez exécuter nslookup -type=txt exemple.fr sous Windows ou dig txt exemple.fr sous Linux/macOS. Recherchez la ligne TXT commençant par v=spf1.',
    },
    {
      q: 'Un domaine peut-il comporter deux enregistrements SPF ?',
      a: 'Non. La RFC 7208 interdit formellement d\'avoir plus d\'un enregistrement SPF par nom de domaine. La présence de multiples entrées entraîne un Permerror immédiat et fait échouer la validation de tous vos e-mails. Vous devez regrouper tous vos mécanismes dans un seul et même enregistrement.',
    },
    {
      q: 'Que signifie un Permerror SPF ?',
      a: 'Le statut Permerror (Permanent Error) indique que le serveur destinataire n\'a pas pu interpréter votre politique SPF. Les déclencheurs habituels sont la présence de doublons TXT, le dépassement du plafond de 10 requêtes DNS, ou une directive include pointant vers un domaine inexistant ou erroné.',
    },
    {
      q: 'Quelle est la différence entre ~all et -all ?',
      a: 'Avec ~all (Softfail), les serveurs non listés génèrent un avertissement sans rejet immédiat. Avec -all (Fail strict), le message non autorisé est explicitement rejeté par les serveurs stricts. Google recommande ~all, tandis que Microsoft préconise -all dès lors que DKIM et DMARC sont opérationnels.',
    },
    {
      q: 'Les sous-domaines ont-ils besoin d\'un enregistrement SPF distinct ?',
      a: 'Oui, dès lors qu\'ils émettent des e-mails. Un sous-domaine n\'hérite pas automatiquement de la politique SPF de son domaine principal. Si mail.exemple.fr émet des messages, il doit disposer de sa propre entrée. S\'il n\'envoie rien, appliquez-lui v=spf1 -all.',
    },
    {
      q: 'Quel est le délai de propagation d\'une modification SPF ?',
      a: 'Le délai dépend directement de la durée de vie (TTL) configurée sur l\'enregistrement DNS existant. Si le TTL est de 3600 secondes, la mise à jour prendra au maximum une heure. Bien que certains hébergeurs évoquent un délai théorique de 24 à 48 heures, les changements sont effectifs sur la plupart des résolveurs en quelques minutes.',
    },
    {
      q: 'Le SPF reste-t-il nécessaire si DKIM est déjà configuré ?',
      a: 'Absolument. Gmail et Yahoo imposent désormais SPF et DKIM pour tous les expéditeurs réguliers et volumineux. De plus, DMARC valide l\'authentification si au moins l\'un des deux protocoles est aligné, ce qui garantit une délivrabilité optimale même si l\'un d\'eux rencontre une anomalie.',
    },
    {
      q: 'Le SPF empêche-t-il totalement l\'usurpation d\'identité par e-mail ?',
      a: 'Pas à lui seul. Le protocole SPF valide uniquement l\'adresse technique de retour d\'enveloppe (Return-Path), et non l\'adresse d\'expéditeur visible (From) affichée dans la boîte de réception. C\'est l\'alignement DMARC qui vient combler cette lacune en exigeant la concordance entre les deux adresses.',
    },
  ],
  ctaHeadline: 'Validez vos adresses avant chaque envoi',
}

const es: SpfPageStrings = {
  metaTitle: 'Verificador SPF: Comprobar y Generar Registro SPF Gratis | Giggal.ai',
  ogTitle: 'Verificador SPF: Comprobar y Generar Registro SPF Gratis',
  description:
    'Comprueba gratis el registro SPF de cualquier dominio. Consulta el significado de cada parte, cuenta las consultas DNS frente al límite de 10, detecta errores o genera un nuevo registro.',
  ogImage: '/og-image.png',
  ogAlt: 'Verificador y generador de registro SPF',
  crumb: 'Verificador SPF',
  appName: 'Verificador SPF',
  featureList: [
    'Sin registro ni tarjeta requerida',
    'Recuento en directo de consultas DNS',
    'Análisis riguroso según RFC 7208',
    'Instrucciones de corrección claras',
  ],
  h1: 'Verificador y generador de registro SPF',
  heroIntro:
    'Comprueba el registro SPF de un dominio en el DNS público. La herramienta desglosa cada término, calcula las consultas DNS frente al límite de 10 de la RFC 7208 y detecta errores de configuración.',
  howTitle: 'Cómo comprobar un registro SPF',
  howSteps: [
    'Escribe un dominio en el campo superior. También puedes pegar una dirección de correo completa: la herramienta extraerá el dominio automáticamente.',
    'Haz clic en Comprobar registro SPF. La consulta se realiza en servidores DNS públicos autorizados, de la misma forma que lo hace un servidor de correo receptor.',
    'Revisa primero el resumen: indica si el registro es válido, si presenta advertencias o si está roto.',
    'A continuación, consulta la lista de problemas detectados. Cada punto explica con exactitud qué corregir.',
    'Debajo encontrarás la explicación de cada término del registro y las consultas DNS que consume. Puedes desplegar cada include para ver qué autoriza.',
  ],
  howNote:
    'El enlace en la barra de direcciones guarda esta misma comprobación SPF para que puedas compartirlo con un compañero o tu proveedor de DNS. Ten en cuenta una limitación: los servidores receptores evalúan el SPF según la IP del servidor que entrega el mensaje. Al no tener un mensaje real que analizar, esta herramienta valida el registro y su árbol DNS público. No puede evaluar macros SPF dinámicas que dependen de la IP del remitente.',
  imageAlt: 'Ilustración de un registro SPF dividido en partes con contador de consultas DNS sobre un total de 10.',
  whatTitle: '¿Qué es un registro SPF?',
  whatIntro:
    'Un registro SPF es un registro TXT en el DNS de un dominio que enumera los servidores autorizados para enviar correos en su nombre. SPF significa Sender Policy Framework y sus reglas están recogidas en la [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Un dominio configurado con Google Workspace suele tener un registro como este:',
  whatAfter: [
    '`v=spf1` identifica el inicio del registro SPF. `include:_spf.google.com` autoriza a todos los servidores de la lista oficial de Google. `~all` indica a los servidores de destino que traten con sospecha los correos procedentes de cualquier otro servidor.',
    'Al recibir un correo, el servidor de destino toma el dominio de la dirección de rebote (Return-Path o Envelope From), consulta su registro SPF y comprueba si la IP del servidor emisor está autorizada. SPF no comprueba la dirección From visible en la bandeja de entrada. Por este motivo se combina con DKIM y DMARC. Para entender cómo se integran, consulta [SPF, DKIM y DMARC explicados](/blog/spf-dkim-dmarc-explained).',
    'Desde febrero de 2024, [Gmail exige SPF o DKIM](https://support.google.com/a/answer/81126) a todos los remitentes, y ambos a quienes realizan envíos masivos. Yahoo aplica los mismos requisitos.',
  ],
  partsTitle: 'Qué significa cada parte del registro SPF',
  partsIntro:
    'Un registro SPF se compone de términos separados por espacios. Los servidores de destino leen de izquierda a derecha y se detienen en el primer término que coincide con el servidor de envío.',
  thPart: 'Término',
  thDoes: 'Qué hace',
  thLookup: 'Consulta DNS',
  lookupLabel: 'Consulta DNS: ',
  parts: [
    { part: 'v=spf1', does: 'Identifica el registro TXT como SPF. Debe figurar al principio y escribirse exactamente así.', lookup: 'No' },
    { part: 'ip4:192.0.2.10', does: 'Autoriza una dirección IPv4 concreta o un rango CIDR como 192.0.2.0/24.', lookup: 'No' },
    { part: 'ip6:2001:db8::/32', does: 'Autoriza una dirección o un rango IPv6.', lookup: 'No' },
    { part: 'a', does: 'Autoriza las direcciones IP del propio dominio o del dominio indicado tras los dos puntos.', lookup: 'Sí' },
    { part: 'mx', does: 'Autoriza los servidores definidos en los registros MX receptores del dominio.', lookup: 'Sí' },
    { part: 'include:_spf.google.com', does: 'Autoriza todos los servidores que autoriza el registro SPF de otro dominio. Es la forma estándar de integrar servicios externos.', lookup: 'Sí, más anidadas' },
    { part: 'exists:%{i}.example.com', does: 'Coincide si la consulta DNS devuelve una dirección A. Utilizado por remitentes complejos mediante macros.', lookup: 'Sí' },
    { part: 'ptr', does: 'Comprueba el nombre mediante resolución inversa (PTR). La RFC 7208 desaconseja su uso por lentitud e inestabilidad.', lookup: 'Sí' },
    { part: '~all o -all', does: 'Determina qué ocurre con los servidores no autorizados explícitamente. Se coloca al final.', lookup: 'No' },
    { part: 'redirect=example.net', does: 'Aplica el registro SPF de otro dominio en lugar de este. Se ignora si el registro contiene all.', lookup: 'Sí' },
  ],
  partsAfter: [
    'Cualquier mecanismo puede llevar un calificador inicial que define el resultado en caso de coincidencia. `+` significa Pass (aprobado) y es el valor por defecto si se omite. `-` significa Fail (rechazo estricto), `~` significa Softfail (falso suave) y `?` significa Neutral (neutro). Por eso la palabra all suele cerrar los registros como `-all`, `~all` o `?all`.',
    'Los nombres no distinguen entre mayúsculas y minúsculas: `Include:` funciona igual que `include:`. La RFC 7208 aconseja cerrar todo registro con all o con un modificador redirect. Sin una regla de cierre explícita, los servidores no listados obtienen un resultado neutral.',
  ],
  limitTitle: 'El límite estricto de 10 consultas DNS',
  limitParas: [
    'Cada include, a, mx, ptr, exists y redirect obliga al servidor de destino a realizar una consulta de resolución DNS. La RFC 7208 establece un límite máximo de 10 consultas por validación. Las consultas realizadas dentro de los include anidados también cuentan, por lo que un solo include puede sumar varias consultas. ip4, ip6 y all no generan ninguna consulta. Si un registro supera las 10 consultas, los servidores receptores abortan el análisis con un error permanente (Permerror) y el SPF falla.',
    'Llegar a este límite es muy fácil. Hemos medido el coste de includes comunes en DNS público: Google Workspace consume 1 consulta, Microsoft 365 consume 1 consulta, Salesforce consume 2, Mailgun consume 5 y Freshdesk 7. Una empresa en Google Workspace que sume Mailgun y Freshdesk ya alcanza 13 consultas. Un [estudio de 2024 sobre registros SPF](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) en dominios .com, .net, .org y .se reveló que el 6,5 % superaba las 10 consultas, y que los includes de solo dos proveedores de hosting causaban el 83,7 % de estos casos.',
    'Los costes también cambian con el tiempo. El include de Google costaba 4 consultas hasta diciembre de 2025, cuando [Google sustituyó sus includes anidados por una lista plana](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Muchos manuales y generadores antiguos todavía mencionan el valor de 4. Nuestra herramienta analiza el árbol DNS en tiempo real para contar el número exacto.',
    'Superar el límite no siempre hace fallar todos los mensajes de forma predecible. Como [explica Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), los servidores evalúan los mecanismos de izquierda a derecha y se detienen en la primera coincidencia. Los correos de un proveedor listado al inicio pueden pasar, mientras que los de un servicio al final fallan. Por eso es indispensable contar las consultas del registro al completo.',
    'Existe además un segundo límite: las consultas vacías (void lookups), que ocurren al consultar dominios inexistentes o sin registros. La RFC 7208 obliga a los servidores a detener la evaluación tras 2 consultas vacías consecutivas.',
  ],
  underTitle: 'Cómo mantenerse por debajo de las 10 consultas DNS',
  underSteps: [
    'Elimina includes de herramientas y servicios que ya no utilices.',
    'Elimina includes que los proveedores ya no solicitan. Plataformas como Mailchimp, Postmark, Brevo y Klaviyo ya no precisan un include en tu dominio principal. SendGrid y Amazon SES gestionan sus envíos en subdominios dedicados. Consulta la lista inferior.',
    'Define tus propios servidores de correo con ip4 e ip6 en lugar de mecanismos a o mx. La RFC 7208 recomienda este orden y las direcciones IP directas no consumen consultas DNS.',
    'Envía correos masivos o transaccionales a través de un subdominio dedicado, como noticias.ejemplo.es. Cada subdominio tiene su propio registro y dispone de su propio cupo de 10 consultas.',
  ],
  underNote:
    'Algunos servicios ofrecen aplanamiento de SPF (SPF flattening), reemplazando los includes por sus direcciones IP resultantes. Aunque reduce consultas DNS, los proveedores actualizan sus rangos de IP periódicamente y un registro aplanado queda desactualizado. Microsoft desaconseja aplanar registros salvo en servicios con rangos fijos y exige revisiones trimestrales.',
  servicesTitle: 'Includes SPF para Google Workspace, Microsoft 365 y otros proveedores',
  servicesIntro:
    'Estos son los valores include recomendados en la documentación oficial de cada servicio, con las consultas DNS medidas en DNS público a 12 de octubre de 2026. Comprueba siempre la documentación de tu proveedor por si tu cuenta requiere una variante regional.',
  thService: 'Servicio',
  thInclude: 'Include',
  thLookups: 'Consultas DNS',
  lookupCount: (n) => `${n} ${n === 1 ? 'consulta' : 'consultas'}`,
  servicesNote:
    'HubSpot asigna a cada cuenta un include exclusivo que termina en hubspotemail.net. Debes copiarlo desde los ajustes de correo de HubSpot. Consume 1 consulta.',
  notNeededTitle: 'Servicios que generalmente no necesitan un include SPF',
  notNeededIntro:
    'El control SPF se valida contra la dirección de rebote técnica (Return-Path), no contra el campo From visible. La mayoría de proveedores de email marketing actuales gestionan sus propios rebotes en sus servidores o mediante subdominios CNAME. Añadir su include a tu dominio principal solo consume consultas DNS sin aportar protección.',
  notNeededAfter: 'Nuestro verificador resalta estos includes redundantes si los detecta en tu registro.',
  createTitle: 'Cómo crear un registro SPF',
  createIntro:
    'Pasa a la pestaña Crear para utilizar el generador interactivo de SPF. Marca los servicios que envían correos en tu nombre y la herramienta generará la sintaxis adecuada mientras supervisa el consumo de consultas DNS. Si tu dominio ya tiene un registro, cárgalo primero para complementarlo en lugar de sobreescribirlo. Estos son los pasos recomendados :',
  createSteps: [
    'Haz un inventario de todos los servicios que envían correos desde tu dominio: correo corporativo, boletines, CRM, help desk, facturación y formularios web. Los informes DMARC ayudan a identificar remitentes olvidados.',
    'Localiza el include de cada servicio o selecciónalo en nuestra herramienta. Para servidores propios, añade sus direcciones IP.',
    'Elige la regla de cierre: ~all o -all. La siguiente sección detalla las implicaciones de cada una.',
    'Publica la regla como un único registro TXT en el nodo raíz de tu dominio (habitualmente indicado con @ en tu panel DNS). Si ya existe un registro que empiece por v=spf1, edítalo en lugar de añadir uno nuevo.',
    'Espera unos minutos a la propagación DNS y vuelve a verificar el dominio con este analizador para confirmar que todo funciona.',
  ],
  createParas: [
    'Cada subdominio emisor necesita su propio registro, ya que no heredan la configuración del dominio principal. Un dominio o subdominio que nunca envíe correos debe protegerse expresamente con: `v=spf1 -all`. La RFC 7208 define esto como una práctica recomendada esencial para evitar la suplantación. El [NCSC del Reino Unido](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) recomienda añadir también una regla DMARC con p=reject y un registro MX nulo a los dominios inactivos.',
    'Los registros que superen los 255 caracteres deben dividirse en varias cadenas entrecomilladas dentro del mismo registro TXT. Los servidores receptores unen estas cadenas sin insertar espacios, por lo que el espacio debe figurar dentro de las comillas. Revisa la documentación de tu proveedor DNS sobre cadenas largas.',
  ],
  endingTitle: '~all o -all: qué cierre utilizar',
  endingIntro: 'Los principales proveedores y organizaciones de la industria no coinciden plenamente:',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) recomienda usar ~all (Softfail).',
    'El [M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), consorcio internacional de operadores de correo, recomienda que los registros terminen en ~all y solicita a los receptores no rechazar mensajes por SPF antes de evaluar la alineación DMARC.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) recomienda -all (Fail estricto), siempre que DKIM y DMARC estén plenamente operativos.',
  ],
  endingParas: [
    'El inconveniente de -all es que algunos servidores receptores descartan los mensajes durante la negociación SMTP inicial, antes de verificar la política DMARC. La norma [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), estándar DMARC de 2026, destaca que esos mensajes descartados nunca se reflejan en los informes DMARC agregados, lo que dificulta diagnosticar entregas legítimas perdidas.',
    'En la práctica, ~all es la alternativa más prudente para dominios activos, especialmente mientras terminas de mapear todos tus canales de envío. Si dispones de una política DMARC en quarantine o reject, DMARC determinará el destino final del correo. Reserva -all para dominios inactivos o puramente defensivos. Nunca uses +all (autoriza a todo Internet) y evita ?all (equivalente a no tener protección).',
  ],
  resultsTitle: 'Qué significan los resultados de la comprobación SPF',
  thResult: 'Resultado',
  thMeaning: 'Significado',
  thAction: 'Qué hacer',
  results: [
    {
      result: 'Registro SPF válido',
      meaning: 'Registro único, sintaxis correcta, dentro del límite de 10 consultas y finalizado en ~all o -all.',
      action: 'Ninguna acción necesaria. Comprueba de nuevo al añadir un nuevo servicio emisor.',
    },
    {
      result: 'Registro SPF funcional con advertencias',
      meaning: 'Los servidores pueden interpretarlo, pero contiene debilidades como 9 o 10 consultas, ausencia de regla all o uso de ptr.',
      action: 'Corrige las advertencias indicadas antes de que se conviertan en errores al sumar otro proveedor.',
    },
    {
      result: 'Registro SPF roto',
      meaning: 'El registro genera un Permerror en destino, provocando el fallo del SPF en todos los envíos del dominio.',
      action: 'Soluciona los errores señalados. Las causas más comunes son registros duplicados y superar las 10 consultas.',
    },
    {
      result: 'El registro SPF no protege el dominio',
      meaning: 'El registro finaliza en +all o incluye un término que lo hace, autorizando a cualquier servidor de Internet a enviar en tu nombre.',
      action: 'Cambia +all por ~all o -all.',
    },
    {
      result: 'Sin registro SPF',
      meaning: 'El dominio no tiene ningún registro TXT que empiece por v=spf1.',
      action: 'Crea uno en la pestaña Crear. Un dominio que no envíe correo debe tener v=spf1 -all.',
    },
    {
      result: 'El dominio no existe',
      meaning: 'El DNS no devuelve ningún registro para este dominio (NXDOMAIN).',
      action: 'Comprueba que el nombre esté bien escrito y que el dominio esté activo y registrado.',
    },
  ],
  receiverIntro:
    'Los servidores receptores emplean términos estandarizados para clasificar el resultado del análisis SPF en los encabezados Authentication-Results y en los informes DMARC:',
  spfResults: [
    { result: 'pass', meaning: 'El servidor emisor está expresamente autorizado por la política SPF.' },
    { result: 'fail', meaning: 'El servidor no está autorizado (-all). El receptor puede descartar el mensaje.' },
    { result: 'softfail', meaning: 'El servidor probablemente no esté autorizado (~all). La RFC 7208 indica que este estado no debe provocar el rechazo por sí solo.' },
    { result: 'neutral', meaning: 'El registro no define una regla para este servidor (?all). Equivale a no tener SPF.' },
    { result: 'none', meaning: 'El dominio no publica ningún registro SPF.' },
    { result: 'temperror', meaning: 'Fallo temporal en la resolución DNS. El emisor puede reintentar el envío más tarde.' },
    { result: 'permerror', meaning: 'El registro contiene errores sintácticos o supera límites técnicos. Requiere una corrección en el DNS.' },
  ],
  errorsTitle: 'Errores frecuentes en registros SPF y cómo corregirlos',
  errorsIntro:
    'Un [estudio de 2023 sobre 12 millones de dominios populares](https://arxiv.org/abs/2502.08240) halló SPF en el 56,5 % de ellos y errores graves en el 2,9 % de los registros configurados. El fallo más común fue incluir dominios que carecen de registro SPF propio, seguido inmediatamente por exceder el límite de consultas DNS.',
  errors: [
    {
      title: 'Dos registros SPF en el mismo dominio',
      text: 'Suele ocurrir al dar de alta una herramienta nueva cuando su guía indica “añade este registro TXT” y se crea una entrada adicional en vez de editar la existente. Tener dos registros SPF genera un Permerror automático. Combina todos los mecanismos en una sola entrada que comience por v=spf1 y termine con un único all.',
    },
    {
      title: 'Include que apunta a un dominio sin SPF o inexistente',
      text: 'Si un include referencia un dominio sin registro SPF válido, toda la comprobación SPF falla con un Permerror. Suele deberse a erratas tipográficas o a proveedores dados de baja. Elimina o corrige el include afectado.',
    },
    {
      title: '+all, ?all o falta de regla all final',
      text: '`+all` autoriza a todos los servidores del mundo y desactiva la protección. `?all` o la omisión del cierre devuelven un estado neutral inútil. Concluye siempre tu registro con ~all o -all.',
    },
    {
      title: 'Uso del mecanismo ptr',
      text: 'La RFC 7208 desaconseja el uso de ptr por su excesiva lentitud y consumo de consultas DNS. Sustitúyelo por entradas ip4 e ip6 directas para los servidores correspondientes.',
    },
    {
      title: 'Errores tipográficos en la sintaxis',
      text: 'Un espacio tras los dos puntos, una dirección IPv4 incompleta o palabras no reconocidas causan un Permerror. Un fallo sutil es escribir `include=example.com` con signo igual en lugar de dos puntos: el DNS lo ignora como modificador desconocido y el servicio nunca queda autorizado. Nuestra herramienta detecta estos fallos al instante.',
    },
  ],
  mythsTitle: 'Tres mitos habituales sobre el registro SPF',
  myths: [
    '«Un registro SPF no puede tener letras mayúsculas.» La RFC 7208 define los términos como totalmente insensibles a mayúsculas y minúsculas.',
    '«Un registro SPF tiene un tope máximo de 255 caracteres.» El límite de 255 caracteres aplica a cada subcadena dentro del registro DNS TXT. Los registros largos se dividen en varias cadenas que el servidor receptor une automáticamente.',
    '«Se pueden incluir hasta 10 términos include.» La limitación aplica al total de consultas DNS recursivas que genera el árbol SPF, no al número de directivas include escritas.',
  ],
  authTitle: 'El SPF dentro de la autenticación del correo electrónico',
  authParas: [
    'Un resultado pass en SPF tiene limitaciones. En el estudio de 2023, el 34,7 % de los dominios analizados autorizaban indirectamente más de 100.000 direcciones IP. Además, el SPF falla habitualmente ante el reenvío automático de correos, ya que la IP del servidor que reenvía no figura en el registro original.',
    'DKIM complementa esta carencia firmando criptográficamente el mensaje, resistiendo a los reenvíos. DMARC coordina ambos protocolos comprobando que el dominio del campo From coincida con el validado por SPF o DKIM, e indica a los servidores de destino cómo actuar si ninguno supera la prueba. Configura los registros complementarios con nuestro [generador DKIM](/dkim-generator) y nuestro [generador DMARC](/dmarc-generator). Emplea nuestra [consulta MX](/mx-lookup) para revisar la recepción de tu dominio.',
    'La autenticación tampoco solventa los envíos a buzones inexistentes. Los correos que rebotan perjudican la reputación de tu dominio. Limpia direcciones individuales con el [verificador de email](/email-checker) o valida listas completas con nuestro [verificador masivo de emails](/bulk-email-verifier). Si necesitas una referencia técnica rápida para tu equipo, consulta la entrada sobre [registro SPF en el glosario](/glossary/spf).',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Qué es un registro SPF?',
      a: 'Es un registro TXT configurado en el DNS de tu dominio que detalla los servidores autorizados para enviar correos en su nombre. Los servidores destinatarios lo leen para verificar la autenticidad del remitente. Las siglas corresponden a Sender Policy Framework y se rigen por la RFC 7208.',
    },
    {
      q: '¿Cómo puedo verificar mi registro SPF?',
      a: 'Escribe tu dominio en el verificador situado en la parte superior de esta página. También puedes ejecutar nslookup -type=txt ejemplo.es en la consola de Windows o dig txt ejemplo.es en macOS y Linux. Localiza la línea TXT que empieza por v=spf1.',
    },
    {
      q: '¿Puede un dominio tener dos registros SPF?',
      a: 'No. La RFC 7208 prohíbe explícitamente tener más de un registro SPF por nombre de dominio. Si existen dos o más, los servidores receptores devuelven un error permanente y el SPF fallará en todos tus envíos. Debes unificar todos los mecanismos en una única entrada TXT.',
    },
    {
      q: '¿Qué significa un Permerror en SPF?',
      a: 'Indica un fallo permanente que impide al servidor receptor interpretar el registro SPF. Suele originarse por registros duplicados, superar las 10 consultas DNS o apuntar un include hacia un dominio sin registro SPF válido.',
    },
    {
      q: '¿Cuál es la diferencia entre ~all y -all?',
      a: 'Con ~all (Softfail), los correos no autorizados se catalogan con sospecha pero no suelen rechazarse de inmediato. Con -all (Fail estricto), se indica el rechazo directo del correo no autorizado. Google sugiere ~all y Microsoft recomienda -all cuando DKIM y DMARC ya están en marcha.',
    },
    {
      q: '¿Necesitan los subdominios su propio registro SPF?',
      a: 'Sí, siempre que emitan correos electrónicos. Los subdominios no heredan la regla SPF del dominio principal. Si boletin.ejemplo.es envía mensajes, debe publicar su propio registro. Si nunca envía correos, debe configurarse con v=spf1 -all.',
    },
    {
      q: '¿Cuánto tarda en propagarse un cambio en el registro SPF?',
      a: 'El tiempo máximo viene fijado por el TTL del registro DNS anterior. Si el TTL es de 3600 segundos, la propagación tardará hasta una hora. Aunque algunos proveedores mencionan hasta 48 horas como margen máximo de seguridad, la mayoría de resolutores actualizan la información en pocos minutos.',
    },
    {
      q: '¿Es necesario SPF si ya cuento con DKIM?',
      a: 'Sí, es la mejor práctica recomendada. Proveedores como Gmail y Yahoo exigen ambos mecanismos para remitentes habituales. Además, DMARC valida el correo si al menos uno de los dos métodos se alinea correctamente, asegurando la máxima entregabilidad.',
    },
    {
      q: '¿Evita el registro SPF la suplantación de identidad por correo?',
      a: 'No por sí solo. El SPF valida únicamente la dirección técnica de rebote (Return-Path), no el remitente visible (From). Los spammers pueden superar el SPF con su propio dominio y falsear el campo From. DMARC resuelve esta brecha al exigir que ambos dominios coincidan.',
    },
  ],
  ctaHeadline: 'Verifica tus listas de correo antes de enviar',
}

const nl: SpfPageStrings = {
  metaTitle: 'SPF Checker: Gratis SPF Record Check en Generator | Giggal.ai',
  ogTitle: 'SPF Checker: Gratis SPF Record Check en Generator',
  description:
    'Controleer gratis het SPF-record van elk domein. Bekijk wat elk onderdeel betekent, tel DNS-lookups tegen de limiet van 10, vind configuratiefouten of maak een nieuw SPF-record aan.',
  ogImage: '/og-image.png',
  ogAlt: 'SPF Record Checker en Generator',
  crumb: 'SPF Checker',
  appName: 'SPF Checker',
  featureList: [
    'Geen registratie of creditcard vereist',
    'Live teller voor DNS-lookups',
    'Strikte controle volgens RFC 7208',
    'Directe suggesties voor probleemoplossing',
  ],
  h1: 'SPF Record Checker en Generator',
  heroIntro:
    'Controleer het SPF-record van een domein in openbare DNS. De tool ontleedt elk onderdeel, telt het aantal DNS-lookups tegen de RFC 7208-limiet van 10 en spoort configuratiefouten direct op.',
  howTitle: 'Hoe controleer je een SPF-record',
  howSteps: [
    'Vul hierboven een domeinnaam in. Een compleet e-mailadres mag ook; de tool gebruikt alleen het domeingedeelte.',
    'Klik op SPF-record controleren. De check leest het huidige record uit in openbare DNS, precies zoals een ontvangende mailserver dat doet.',
    'Lees eerst het overzicht. Dat toont direct of het record geldig is, waarschuwingen bevat of defect is.',
    'Bekijk vervolgens de lijst met eventuele problemen. Elk punt legt uit wat er aangepast moet worden.',
    'Daaronder wordt elk onderdeel van het record uitgelegd met de bijbehorende DNS-lookups. Vouw een include open om te zien wat de service erachter autoriseert.',
  ],
  howNote:
    'De link in de adresbalk herhaalt deze controle. Je kunt deze URL delen met een collega of je hostingprovider. Let op een beperking: een ontvangende server toetst SPF aan het IP-adres van de verzendende server. Deze tool heeft geen e-mailbericht om te analyseren en valideert het record zelf in DNS. Dynamische SPF-macro’s die afhangen van het verzendende IP kunnen niet live worden geëvalueerd.',
  imageAlt: 'Illustratie van een opgesplitst SPF-record met een teller van het aantal gebruikte DNS-lookups op een maximum van 10.',
  whatTitle: 'Wat is een SPF-record?',
  whatIntro:
    'Een SPF-record is een TXT-record in de DNS van een domein. Het vermeldt welke mailservers namens dat domein e-mail mogen versturen. SPF staat voor Sender Policy Framework en de officiële specificaties zijn vastgelegd in [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Een domein dat Google Workspace gebruikt heeft doorgaans een record zoals dit:',
  whatAfter: [
    '`v=spf1` geeft aan dat het om een SPF-record gaat. `include:_spf.google.com` autoriseert alle verzendende servers uit de lijst van Google zelf. `~all` verzoekt ontvangende servers om e-mail van niet-vermelde servers als verdacht te behandelen.',
    'Wanneer een e-mail binnenkomt, leest de ontvangende server het domein uit het Return-Path (de envelope sender). De server haalt het SPF-record van dat domein op en controleert of het IP-adres van de afzender daarin voorkomt. SPF controleert niet het zichtbare Van-adres (From header). Daarom werkt SPF nauw samen met DKIM en DMARC. Lees [SPF, DKIM en DMARC uitgelegd](/blog/spf-dkim-dmarc-explained) om te zien hoe deze drie standaarden elkaar aanvullen.',
    'Sinds februari 2024 stelt [Gmail strenge eisen aan SPF of DKIM](https://support.google.com/a/answer/81126) voor alle verzenders, en beide voor bulkverzenders. Yahoo hanteert vergelijkbare regels.',
  ],
  partsTitle: 'Wat elk onderdeel van het SPF-record betekent',
  partsIntro:
    'Een SPF-record bestaat uit termen gescheiden door spaties. Ontvangende servers lezen van links naar rechts en stoppen bij de eerste term die overeenkomt met de verzendende server.',
  thPart: 'Onderdeel',
  thDoes: 'Functie',
  thLookup: 'DNS-lookup',
  lookupLabel: 'DNS-lookup: ',
  parts: [
    { part: 'v=spf1', does: 'Markeert het TXT-record als SPF. Moet vooraan staan en exact zo geschreven zijn.', lookup: 'Nee' },
    { part: 'ip4:192.0.2.10', does: 'Autoriseert een specifiek IPv4-adres of een IP-reeks zoals 192.0.2.0/24.', lookup: 'Nee' },
    { part: 'ip6:2001:db8::/32', does: 'Autoriseert een IPv6-adres of -reeks.', lookup: 'Nee' },
    { part: 'a', does: 'Autoriseert de IP-adressen van het domein zelf, of van het domein dat na de dubbele punt volgt.', lookup: 'Ja' },
    { part: 'mx', does: 'Autoriseert de ontvangende mailservers uit de MX-records van het domein.', lookup: 'Ja' },
    { part: 'include:_spf.google.com', does: 'Autoriseert alle servers die in het SPF-record van een ander domein staan. Zo voeg je externe diensten toe.', lookup: 'Ja, plus genest' },
    { part: 'exists:%{i}.example.com', does: 'Geldt als een DNS-zoekopdracht een A-record oplevert. Grote verzenders gebruiken dit met macro’s.', lookup: 'Ja' },
    { part: 'ptr', does: 'Controleert op basis van reverse DNS. RFC 7208 raadt dit sterk af wegens traagheid en onbetrouwbaarheid.', lookup: 'Ja' },
    { part: '~all of -all', does: 'Bepaalt wat er gebeurt met servers die niet in het record staan. Komt altijd aan het einde.', lookup: 'Nee' },
    { part: 'redirect=example.net', does: 'Past het SPF-record van een ander domein toe in plaats van dit record. Wordt genegeerd als all aanwezig is.', lookup: 'Ja' },
  ],
  partsAfter: [
    'Elk mechanisme kan beginnen met een kwalificatie (qualifier) die het resultaat bepaalt bij een match. `+` staat voor Pass en is de standaardwaarde (wordt meestal weggelaten). `-` staat voor Fail, `~` voor Softfail en `?` voor Neutral. Daarom kan de term all eindigen als `-all`, `~all` of `?all`.',
    'De mechanismen zijn hoofdletterongevoelig: `Include:` werkt exact hetzelfde als `include:`. RFC 7208 adviseert elk record af te sluiten met all of redirect. Zonder afsluitende term krijgen niet-vermelde servers een neutraal resultaat.',
  ],
  limitTitle: 'De strikte limiet van 10 DNS-lookups',
  limitParas: [
    'Elke include, a, mx, ptr, exists en redirect dwingt de ontvangende mailserver om een DNS-opdracht uit te voeren. RFC 7208 staat maximaal 10 van deze lookups toe. Lookups binnen geneste include-records tellen mee, waardoor één enkele include al meerdere lookups kan verbruiken. ip4, ip6 en all kosten geen lookups. Als een record meer dan 10 lookups vereist, stopt de ontvangende server met een Permerror en faalt de SPF-controle.',
    'De limiet van 10 is sneller bereikt dan gedacht. We hebben in openbare DNS de kosten van veelgebruikte diensten gemeten: Google Workspace kost 1 lookup, Microsoft 365 kost 1 lookup, Salesforce 2, Mailgun 5 en Freshdesk 7. Een organisatie op Google Workspace die Mailgun en Freshdesk toevoegt, zit al op 13 lookups. Een [onderzoek uit 2024 naar SPF-records](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) op .com, .net, .org en .se toonde aan dat 6,5% meer dan 10 lookups nodig had. De records van slechts twee hostingproviders veroorzaakten 83,7% van deze overschrijdingen.',
    'Bovendien veranderen deze kosten doorlopend. De include van Google kostte tot december 2025 4 lookups, totdat [Google de geneste includes verving door een platte lijst](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Veel handleidingen en generators tonen nog het oude getal 4. Onze tool telt bij elke controle de actuele actieve lookups in DNS.',
    'Het overschrijden van de limiet laat e-mail niet altijd direct overal falen. Zoals [Microsoft toelicht](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), evalueren servers van links naar rechts en stoppen ze bij de eerste match. E-mail van een provider die vooraan staat kan slagen, terwijl een latere provider faalt. Dit zorgt voor willekeurige bezorgproblemen, tenzij je het hele record doorlicht.',
    'Er geldt nog een tweede limiet: lookups die niets opleveren (void lookups), zoals een include die verwijst naar een opgeheven domein. RFC 7208 schrijft voor dat ontvangende servers moeten stoppen na 2 opeenvolgende void lookups.',
  ],
  underTitle: 'Onder de 10 DNS-lookups blijven',
  underSteps: [
    'Verwijder includes van verouderde marketingtools en diensten die je niet meer gebruikt.',
    'Verwijder includes die leveranciers niet langer vereisen. Mailchimp, Postmark, Brevo en Klaviyo hebben geen include meer nodig op je hoofddomein. SendGrid en Amazon SES routeren via een subdomein. Bekijk de lijst hieronder.',
    'Gebruik ip4 en ip6 voor je eigen mailservers in plaats van a of mx. RFC 7208 beveelt deze volgorde aan en IP-adressen kosten 0 DNS-lookups.',
    'Verstuur bulk- of marketingmail via een subdomein zoals nieuwsbrief.voorbeeld.nl. Elk subdomein heeft een eigen SPF-record en een eigen quotum van 10 lookups.',
  ],
  underNote:
    'Sommige diensten bieden SPF-flattening aan, waarbij includes worden omgezet in directe IP-adressen. Dit bespaart lookups, maar externe providers wijzigen hun IP-reeksen regelmatig. Een platgeslagen record wordt dan snel ongeldig. Microsoft ontraadt flattening voor dynamische clouddiensten en adviseert minimaal elk kwartaal een handmatige audit.',
  servicesTitle: 'SPF-includes voor Google Workspace, Microsoft 365 en andere diensten',
  servicesIntro:
    'Dit zijn de officiële include-waarden uit de documentatie van veelgebruikte diensten, inclusief het aantal DNS-lookups zoals gemeten op 12 oktober 2026. Controleer altijd de documentatie van je eigen account voor regionale afwijkingen.',
  thService: 'Dienst',
  thInclude: 'Include',
  thLookups: 'DNS-lookups',
  lookupCount: (n) => `${n} ${n === 1 ? 'lookup' : 'lookups'}`,
  servicesNote:
    'HubSpot geeft elk account een unieke include eindigend op hubspotemail.net. Kopieer deze uit je HubSpot-instellingen. Deze kost 1 lookup.',
  notNeededTitle: 'Diensten die meestal geen SPF-include nodig hebben',
  notNeededIntro:
    'SPF wordt gecontroleerd op het Return-Path-adres en niet op het zichtbare Van-adres. Veel moderne verzendplatforms gebruiken hun eigen domein voor bounces of een CNAME-subdomein. Een include op je hoofddomein kost alleen onnodige DNS-lookups.',
  notNeededAfter: 'Onze checker markeert deze overbodige includes direct als ze in je record staan.',
  createTitle: 'Hoe maak je een SPF-record aan',
  createIntro:
    'Gebruik het tabblad Aanmaken hierboven als interactieve SPF-generator. Vink de diensten aan die namens jouw domein mail versturen; de tool stelt het record samen en bewaakt het aantal DNS-lookups. Laad een bestaand record eerst in om het aan te vullen zonder instellingen te overschrijven. Volg deze stappen:',
  createSteps: [
    'Breng alle verzendende bronnen in kaart: e-mailsuite, nieuwsbrieven, CRM, helpdesk, facturatie en websiteformulieren. DMARC-rapporten tonen verzenders die je over het hoofd hebt gezien.',
    'Zoek de officiële include-waarde van elke dienst op of vink de dienst aan in de tool. Gebruik voor eigen servers directe IP-adressen.',
    'Kies de afsluiting: ~all of -all. Het volgende gedeelte legt het verschil uit.',
    'Publiceer het als één enkel TXT-record op het hoofddomein (@ in je DNS-paneel). Als er al een record staat dat begint met v=spf1, pas dat dan aan in plaats van een tweede toe te voegen.',
    'Wacht enkele minuten op DNS-synchronisatie en controleer het domein opnieuw met deze SPF-checker.',
  ],
  createParas: [
    'Elk verzendend subdomein heeft een eigen SPF-record nodig, omdat subdomeinen het record van het hoofddomein niet overnemen. Een domein dat nooit mail verstuurt moet beschermd worden met: `v=spf1 -all`. RFC 7208 noemt dit een bewezen best practice tegen spoofing. Het [Britse NCSC](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) adviseert om bij inactieve domeinen ook DMARC met p=reject en een Null MX-record in te stellen.',
    'Een record van meer dan 255 tekens moet binnen hetzelfde TXT-record worden opgesplitst in meerdere strings tussen aanhalingstekens. Ontvangende servers voegen deze strings zonder spaties samen; plaats spaties dus binnen de aanhalingstekens. Raadpleeg je DNS-provider voor de exacte invoer bij lange waarden.',
  ],
  endingTitle: '~all of -all: welke afsluiting moet je kiezen',
  endingIntro: 'Grote e-mailproviders hebben hier verschillende visies op:',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) adviseert ~all (Softfail).',
    'Het [M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), een mondiaal samenwerkingsverband van e-mailproviders, raadt ~all aan zodat ontvangende servers mail niet weigeren vóórdat DMARC is geëvalueerd.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) adviseert -all (Fail), mits DKIM en DMARC volledig zijn ingericht.',
  ],
  endingParas: [
    'Het gevaar van -all is dat sommige ontvangende servers berichten tijdens de SMTP-verbinding direct weigeren, nog vóór DMARC wordt getoetst. De officiële standaard [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989) (DMARC 2026) benadrukt dat deze geweigerde berichten niet in DMARC-rapporten verschijnen, waardoor afleverproblemen onzichtbaar blijven.',
    'In de praktijk is ~all de veiligste keuze voor actieve domeinen, zeker zolang je nog niet alle verzendbronnen in kaart hebt. Met een actief DMARC-beleid op quarantine of reject bepaalt DMARC de afhandeling. Gebruik -all voor domeinen die nooit e-mail verzenden. Gebruik nooit +all (laat iedereen toe) en vermijd ?all (neutral, gelijk aan geen beveiliging).',
  ],
  resultsTitle: 'Wat betekenen de resultaten van de SPF-check',
  thResult: 'Resultaat',
  thMeaning: 'Betekenis',
  thAction: 'Actie',
  results: [
    {
      result: 'Geldig SPF-record',
      meaning: 'Eén enkel, leesbaar record binnen de limiet van 10 lookups en afgesloten met ~all of -all.',
      action: 'Geen actie vereist. Controleer opnieuw zodra je een nieuwe verzenddienst toevoegt.',
    },
    {
      result: 'Werkend SPF-record met waarschuwingen',
      meaning: 'Ontvangende servers kunnen het verwerken, maar er zijn risico’s zoals 9 of 10 lookups, ontbrekende all of een ptr-term.',
      action: 'Los de waarschuwingen op. Ze worden vaak fatale fouten zodra je nog een tool aansluit.',
    },
    {
      result: 'Defect SPF-record',
      meaning: 'Het record veroorzaakt een Permerror, waardoor SPF voor alle uitgaande e-mail faalt.',
      action: 'Herstel de fouten direct. De meest voorkomende oorzaken zijn dubbele TXT-records en meer dan 10 lookups.',
    },
    {
      result: 'SPF-record beschermt het domein niet',
      meaning: 'Het record eindigt op +all of bevat een include die dat doet, waardoor elke mailserver ter wereld namens jou mag zenden.',
      action: 'Vervang +all door ~all of -all.',
    },
    {
      result: 'Geen SPF-record aanwezig',
      meaning: 'Het domein publiceert geen enkel TXT-record dat begint met v=spf1.',
      action: 'Maak een record aan via het tabblad Aanmaken. Een inactief domein hoort v=spf1 -all te hebben.',
    },
    {
      result: 'Domeinnaam bestaat niet',
      meaning: 'DNS kan geen enkel record voor dit domein vinden (NXDOMAIN).',
      action: 'Controleer op typefouten en verifieer of het domein actief geregistreerd staat.',
    },
  ],
  receiverIntro:
    'Ontvangende mailservers hanteren gestandaardiseerde statussen voor SPF-uitkomsten in de Authentication-Results headers en DMARC-rapporten :',
  spfResults: [
    { result: 'pass', meaning: 'De verzendende server is geautoriseerd door het SPF-record.' },
    { result: 'fail', meaning: 'De server is niet geautoriseerd (-all). De ontvanger kan het bericht weigeren.' },
    { result: 'softfail', meaning: 'De server is waarschijnlijk niet geautoriseerd (~all). RFC 7208 stelt dat dit alleen niet tot weigering mag leiden.' },
    { result: 'neutral', meaning: 'Het record doet geen uitspraak over deze server (?all). Functioneel gelijk aan geen record.' },
    { result: 'none', meaning: 'Het domein heeft geen SPF-record.' },
    { result: 'temperror', meaning: 'Tijdelijke DNS-fout tijdens de controle. De verzender kan het later opnieuw proberen.' },
    { result: 'permerror', meaning: 'Het record bevat een syntaxisfout of overschrijdt technische limieten. Alleen een DNS-correctie lost dit op.' },
  ],
  errorsTitle: 'Veelvoorkomende SPF-fouten en oplossingen',
  errorsIntro:
    'Een [onderzoek uit 2023 naar 12 miljoen populaire domeinen](https://arxiv.org/abs/2502.08240) wees uit dat 56,5% een SPF-record had en dat 2,9% van die records ernstige fouten bevatte. De meest voorkomende fout was een include of redirect naar een domein zonder SPF, op de voet gevolgd door het overschrijden van de lookup-limiet.',
  errors: [
    {
      title: 'Twee SPF-records op hetzelfde domein',
      text: 'Dit ontstaat vaak wanneer een handleiding aangeeft “voeg dit TXT-record toe” en er een tweede record wordt aangemaakt naast het bestaande. Twee records leveren direct een Permerror op. Voeg alle termen samen in één enkel TXT-record dat begint met v=spf1 en eindigt met één all.',
    },
    {
      title: 'Een include die nergens naar verwijst',
      text: 'Als een include verwijst naar een domein zonder geldig SPF-record, faalt de hele controle met een Permerror. Dit ontstaat door typefouten of opgeheven leveranciers. Verwijder de include of werk de waarde bij.',
    },
    {
      title: '+all, ?all of geen afsluitend all-mechanisme',
      text: '`+all` autoriseert het hele internet en schakelt bescherming uit. `?all` of het weglaten van all geeft een neutraal resultaat. Sluit je record altijd af met ~all of -all.',
    },
    {
      title: 'ptr-mechanisme in het record',
      text: 'RFC 7208 raadt ptr met klem af. Het is traag, kost een lookup en is storingsgevoelig bij DNS-problemen. Vervang ptr door directe ip4- en ip6-vermeldingen.',
    },
    {
      title: 'Typefouten en verkeerde leestekens',
      text: 'Een spatie na een dubbele punt, een onvolledig IPv4-adres of een onbekend trefwoord veroorzaken een Permerror. Een subtielere fout is `include=example.com` met een gelijkheidsteken: dit wordt genegeerd als onbekende modifier waardoor de dienst nooit geautoriseerd raakt. Onze checker spoort dit direct op.',
    },
  ],
  mythsTitle: 'Drie hardnekkige fabels over SPF',
  myths: [
    '“Een SPF-record mag geen hoofdletters bevatten.” RFC 7208 specificeert dat mechanismen volledig hoofdletterongevoelig zijn.',
    '“Een SPF-record mag maximaal 255 tekens lang zijn.” De limiet van 255 tekens geldt per afzonderlijke string. Langere records worden opgedeeld in meerdere aaneengesloten strings binnen hetzelfde DNS TXT-record.',
    '“Je mag maximaal 10 include-mechanismen gebruiken.” De limiet van 10 geldt voor het totale aantal gegenereerde DNS-lookups, niet voor het aantal geschreven include-termen.',
  ],
  authTitle: 'SPF als onderdeel van e-mailauthenticatie',
  authParas: [
    'Een SPF-pass heeft grenzen. In de studie uit 2023 autoriseerde 34,7% van de domeinen indirect meer dan 100.000 IP-adressen. Bovendien faalt SPF bij automatische e-mail forwarding, omdat de doorsturende server niet in jouw SPF-record staat.',
    'DKIM vangt dit op met een cryptografische handtekening op het bericht zelf, die bij doorsturen intact blijft. DMARC controleert of het domein in het Van-adres overeenkomt met het domein dat door SPF of DKIM is goedgekeurd, en vertelt ontvangende servers wat ze bij falen moeten doen. Configureer de overige protocollen met de [DKIM generator](/dkim-generator) en de [DMARC generator](/dmarc-generator). Gebruik de [MX lookup](/mx-lookup) om je inkomende servers te controleren.',
    'Authenticatie helpt niet tegen verzending naar niet-bestaande adressen. Die leiden tot bounces die je reputatie beschadigen. Controleer losse adressen met de [e-mail checker](/email-checker) of valideer complete lijsten met de [bulk e-mail verifier](/bulk-email-verifier). Zoek je een beknopte definitie voor je team, bekijk dan het [SPF-record overzicht in de begrippenlijst](/glossary/spf).',
  ],
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Wat is een SPF-record?',
      a: 'Het is een TXT-record in de DNS van je domein dat aangeeft welke mailservers namens dat domein e-mail mogen verzenden. Ontvangende servers controleren dit om spoofing tegen te gaan. SPF staat voor Sender Policy Framework en is vastgelegd in RFC 7208.',
    },
    {
      q: 'Hoe controleer ik mijn SPF-record?',
      a: 'Vul je domeinnaam in bij de checker bovenaan deze pagina. In de terminal kun je nslookup -type=txt voorbeeld.nl uitvoeren op Windows, of dig txt voorbeeld.nl op macOS en Linux. Zoek naar de regel die begint met v=spf1.',
    },
    {
      q: 'Mag een domein twee SPF-records hebben?',
      a: 'Nee. RFC 7208 verbiedt meer dan één SPF-record per domeinnaam. Twee records leiden direct tot een Permerror waardoor alle e-mail faalt op SPF. Voeg alle gegevens samen in één enkel record.',
    },
    {
      q: 'Wat betekent een Permerror bij SPF?',
      a: 'Een Permerror (permanente fout) betekent dat de ontvangende server het record niet kon interpreteren. Veelvoorkomende oorzaken zijn dubbele SPF-records, meer dan 10 DNS-lookups of een ongeldige include.',
    },
    {
      q: 'Wat is het verschil tussen ~all en -all?',
      a: 'Met ~all (Softfail) worden niet-geautoriseerde servers als verdacht gemarkeerd maar meestal niet geweigerd. Met -all (Fail) wordt directe weigering gevraagd. Google adviseert ~all; Microsoft adviseert -all zodra DKIM en DMARC werken.',
    },
    {
      q: 'Hebben subdomeinen een eigen SPF-record nodig?',
      a: 'Ja, als ze zelfstandig e-mail versturen. Een subdomein erft het SPF-record van het hoofddomein niet automatisch. Als nieuws.voorbeeld.nl mail verstuurt, heeft het een eigen record nodig. Zo niet, bescherm het dan met v=spf1 -all.',
    },
    {
      q: 'Hoe lang duurt het voordat een SPF-wijziging actief is?',
      a: 'Dat hangt af van de TTL (Time to Live) van het oude record. Bij een TTL van 3600 seconden duurt dit maximaal een uur. Hoewel providers een marge van 24 tot 48 uur noemen, is de wijziging bij de meeste resolvers binnen enkele minuten zichtbaar.',
    },
    {
      q: 'Is SPF nodig als ik al DKIM gebruik?',
      a: 'Ja, beide zijn nodig. Gmail en Yahoo eisen zowel SPF als DKIM voor regelmatige verzenders. Bovendien slaagt DMARC als een van beide correct aansluit, wat zorgt voor een betrouwbaardere aflevering.',
    },
    {
      q: 'Voorkomt SPF e-mailspoofing volledig?',
      a: 'Niet op zichzelf. SPF controleert alleen het technische Return-Path-adres en niet het zichtbare Van-adres. Spammers kunnen SPF laten slagen op een eigen domein en toch jouw naam tonen. DMARC lost dit op door afstemming tussen beide adressen af te dwingen.',
    },
  ],
  ctaHeadline: 'Controleer adressen vóórdat je verstuurt',
}

const pl: SpfPageStrings = {
  metaTitle: 'SPF Checker: Sprawdź i Wygeneruj Rekord SPF za Darmo | Giggal.ai',
  ogTitle: 'SPF Checker: Sprawdź i Wygeneruj Rekord SPF za Darmo',
  description:
    'Sprawdź bezpłatnie rekord SPF dowolnej domeny. Zobacz znaczenie każdego mechanizmu, zlicz zapytania DNS względem limitu 10, wykryj błędy lub wygeneruj nowy rekord SPF.',
  ogImage: '/og-image.png',
  ogAlt: 'Narzędzie do sprawdzania i generowania rekordu SPF',
  crumb: 'SPF Checker',
  appName: 'SPF Checker',
  featureList: [
    'Bez rejestracji i karty płatniczej',
    'Licznik zapytań DNS w czasie rzeczywistym',
    'Rygorystyczna analiza według RFC 7208',
    'Praktyczne wskazówki naprawcze',
  ],
  h1: 'Narzędzie do sprawdzania i generowania rekordu SPF',
  heroIntro:
    'Sprawdź rekord SPF domeny w publicznym DNS. Narzędzie szczegółowo analizuje każdy mechanizm, zlicza zapytania DNS względem limitu 10 według RFC 7208 i natychmiast wskazuje błędy konfiguracji.',
  howTitle: 'Jak sprawdzić rekord SPF',
  howSteps: [
    'Wpisz nazwę domeny w polu powyżej. Pełny adres e-mail również zadziała – narzędzie automatycznie wyodrębni samą domenę.',
    'Kliknij Sprawdź rekord SPF. Narzędzie odpytuje publiczne serwery DNS w taki sam sposób, w jaki robi to serwer pocztowy odbiorcy.',
    'Najpierw sprawdź podsumowanie. Informuje ono, czy rekord jest prawidłowy, zawiera ostrzeżenia czy jest uszkodzony.',
    'Następnie zapoznaj się z listą wykrytych problemów. Każdy punkt precyzyjnie wyjaśnia, co należy zmienić.',
    'Poniżej znajdziesz objaśnienie każdego elementu rekordu wraz z liczbą zużywanych zapytań DNS. Rozwiń include, aby zobaczyć, co autoryzuje dana usługa.',
  ],
  howNote:
    'Link w pasku adresu zapisuje parametry tego testu, więc możesz łatwo przesłać go współpracownikowi lub administratorowi hostingu. Pamiętaj o ograniczeniu: serwer odbiorcy weryfikuje SPF na podstawie adresu IP serwera faktycznie przesyłającego wiadomość. To narzędzie analizuje samą konfigurację rekordu w DNS. Nie jest w stanie przetworzyć dynamicznych makr SPF zależnych od IP nadawcy.',
  imageAlt: 'Ilustracja rekordu SPF podzielonego na części ze wskaźnikiem zapytań DNS względem limitu 10.',
  whatTitle: 'Czym jest rekord SPF?',
  whatIntro:
    'Rekord SPF to rekord TXT w strefie DNS domeny, który określa listę serwerów uprawnionych do wysyłania poczty w jej imieniu. Skrót SPF oznacza Sender Policy Framework, a jego zasady definiuje standard [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Domena korzystająca z Google Workspace zazwyczaj posiada rekord w takiej postaci:',
  whatAfter: [
    '`v=spf1` identyfikuje początek rekordu SPF. `include:_spf.google.com` autoryzuje wszystkie serwery pocztowe z oficjalnej listy Google. `~all` instruuje serwery odbiorcze, aby traktowały pocztę z wszelkich innych serwerów jako podejrzaną.',
    'Gdy wiadomość trafia do odbiorcy, serwer pobiera domenę z technicznego adresu zwrotnego (Return-Path lub koperta). Następnie sprawdza rekord SPF tej domeny i weryfikuje, czy IP nadawcy znajduje się na liście. SPF nie sprawdza widocznego adresu nadawcy (From). Z tego względu SPF działa w ścisłym połączeniu z DKIM i DMARC. Aby poznać zasady ich współpracy, przeczytaj [SPF, DKIM i DMARC w przystępnym przewodniku](/blog/spf-dkim-dmarc-explained).',
    'Od lutego 2024 r. [Gmail wymaga SPF lub DKIM](https://support.google.com/a/answer/81126) od każdego nadawcy, a obu zabezpieczeń od nadawców masowych. Yahoo stosuje identyczne wymogi.',
  ],
  partsTitle: 'Co oznacza każdy element rekordu SPF',
  partsIntro:
    'Rekord SPF to ciąg mechanizmów i modyfikatorów oddzielonych spacjami. Serwery odbiorcze czytają go od lewej do prawej i zatrzymują się na pierwszej regule pasującej do serwera wysyłającego.',
  thPart: 'Element',
  thDoes: 'Działanie',
  thLookup: 'Zapytanie DNS',
  lookupLabel: 'Zapytanie DNS : ',
  parts: [
    { part: 'v=spf1', does: 'Oznacza rekord TXT jako SPF. Musi być na samym początku, dokładnie w tej formie.', lookup: 'Nie' },
    { part: 'ip4:192.0.2.10', does: 'Autoryzuje konkretny adres IPv4 lub zakres CIDR, np. 192.0.2.0/24.', lookup: 'Nie' },
    { part: 'ip6:2001:db8::/32', does: 'Autoryzuje adres lub zakres IPv6.', lookup: 'Nie' },
    { part: 'a', does: 'Autoryzuje adresy IP przypisane do domeny lub domeny podanej po dwukropku.', lookup: 'Tak' },
    { part: 'mx', does: 'Autoryzuje serwery odbiorcze zdefiniowane w rekordach MX domeny.', lookup: 'Tak' },
    { part: 'include:_spf.google.com', does: 'Autoryzuje wszystkie serwery, które autoryzuje rekord SPF innej domeny. Służy do integracji usług zewnętrznych.', lookup: 'Tak, plus zagnieżdżone' },
    { part: 'exists:%{i}.example.com', does: 'Dopasowuje, jeśli zapytanie DNS zwraca adres A. Stosowane przez zaawansowanych nadawców z makrami.', lookup: 'Tak' },
    { part: 'ptr', does: 'Dopasowuje po odwrotnym DNS (PTR). RFC 7208 odradza stosowanie ze względu na powolność i niestabilność.', lookup: 'Tak' },
    { part: '~all lub -all', does: 'Określa traktowanie wszystkich serwerów nieuwzględnionych na liście. Zawsze na końcu.', lookup: 'Nie' },
    { part: 'redirect=example.net', does: 'Stosuje rekord SPF innej domeny zamiast bieżącego. Jest ignorowany, gdy w rekordzie występuje all.', lookup: 'Tak' },
  ],
  partsAfter: [
    'Każdy mechanizm może zaczynać się od kwalifikatora określającego wynik testu w przypadku dopasowania. `+` oznacza Pass (zaliczone) i jest domyślny. `-` oznacza Fail (odrzucenie), `~` to Softfail (łagodne odrzucenie), a `?` oznacza Neutral. Dlatego rekordy kończą się regułą `-all`, `~all` lub `?all`.',
    'Wielkość liter nie ma znaczenia: `Include:` działa tak samo jak `include:`. Standard RFC 7208 zaleca kończenie każdego rekordu regułą all lub modyfikatorem redirect. Bez tego nieujęte serwery otrzymują wynik neutralny.',
  ],
  limitTitle: 'Rygorystyczny limit 10 zapytań DNS',
  limitParas: [
    'Każdy mechanizm include, a, mx, ptr, exists oraz redirect zmusza serwer odbiorczy do wykonania zapytania DNS. Standard RFC 7208 dopuszcza maksymalnie 10 zapytań DNS podczas jednej weryfikacji. Zapytania wewnątrz zagnieżdżonych rekordów include również się wliczają, więc pojedynczy include może kosztować kilka zapytań. Mechanizmy ip4, ip6 oraz all nie generują zapytań. Gdy rekord wymaga więcej niż 10 zapytań, serwer odbiorcy przerywa sprawdzanie błędem Permerror i test SPF kończy się porażką.',
    'Przekroczenie tego limitu jest bardzo łatwe. Zmierzyliśmy w publicznym DNS koszt popularnych usług: Google Workspace zużywa 1 zapytanie, Microsoft 365 zużywa 1 zapytanie, Salesforce 2, Mailgun 5, a Freshdesk 7. Firma na Google Workspace, która doda Mailguna i Freshdeska, potrzebuje już 13 zapytań. [Badanie z 2024 r. nad rekordami SPF](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) w domenach .com, .net, .org i .se wykazało, że 6,5% z nich przekraczało limit 10 zapytań, a rekordy zaledwie dwóch dostawców hostingu odpowiadały za 83,7% tych przypadków.',
    'Koszty te ulegają również zmianom. Include Google zużywał 4 zapytania aż do grudnia 2025 r., kiedy to [Google uprościło swoje zagnieżdżone include do płaskiej listy](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Wiele poradników i generatorów wciąż podaje starą wartość 4. Nasze narzędzie sprawdza bieżącą liczbę zapytań w czasie rzeczywistym.',
    'Przekroczenie limitu nie zawsze powoduje natychmiastowe odrzucenie każdego maila. Jak [wyjaśnia Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), serwery sprawdzają mechanizmy od lewej do prawej i zatrzymują się na pierwszym dopasowaniu. Wiadomość z usługi umieszczonej na początku rekordu może przejść pomyślnie, podczas gdy usługa z końca rekordu zawiedzie. Powoduje to pozorne wrażenie losowości błędów dostarczalności.',
    'Obowiązuje również drugi limit: zapytania puste (void lookups), np. include wskazujący na domenę, która już nie istnieje. Standard RFC 7208 nakazuje przerwanie weryfikacji po napotkaniu 2 takich zapytań.',
  ],
  underTitle: 'Jak utrzymać się poniżej limitu 10 zapytań DNS',
  underSteps: [
    'Usuń reguły include dla usług i narzędzi marketingowych, z których już nie korzystasz.',
    'Usuń wpisy include, których dostawcy już nie wymagają. Mailchimp, Postmark, Brevo i Klaviyo nie potrzebują include w domenie głównej. SendGrid i Amazon SES realizują wysyłkę z dedykowanych subdomen. Zobacz zestawienie poniżej.',
    'Wpisuj własne serwery pocztowe za pomocą mechanizmów ip4 i ip6 zamiast a lub mx. RFC 7208 zaleca tę kolejność, a adresy IP nie zużywają zapytań DNS.',
    'Wysyłaj mailingi i powiadomienia z dedykowanej subdomeny, np. newsletter.twojadomena.pl. Każda subdomena ma własny rekord SPF i własną pulę 10 zapytań.',
  ],
  underNote:
    'Niektóre serwisy oferują tzw. SPF flattening, czyli zastąpienie include bezpośrednimi adresami IP. Oszczędza to zapytania, lecz dostawcy regularnie modyfikują swoje zakresy IP. Statyczny rekord szybko staje się nieaktualny. Microsoft odradza spłaszczanie dla usług o dynamicznych adresach i zaleca regularny audyt co najmniej raz na kwartał.',
  servicesTitle: 'Wpisy include dla Google Workspace, Microsoft 365 i innych usług',
  servicesIntro:
    'Poniżej zebrano oficjalne wartości include z dokumentacji popularnych dostawców wraz z liczbą zapytań DNS zmierzoną w publicznym DNS 12 października 2026 r. Zawsze weryfikuj dokumentację własnego konta pod kątem specyfikacji regionalnych.',
  thService: 'Usługa',
  thInclude: 'Wartość include',
  thLookups: 'Zapytania DNS',
  lookupCount: (n) => `${n} ${n === 1 ? 'zapytanie' : n >= 2 && n <= 4 ? 'zapytania' : 'zapytań'}`,
  servicesNote:
    'HubSpot przydziela każdemu kontu unikalny include kończący się na hubspotemail.net. Należy go skopiować z ustawień e-mail w HubSpot. Zużywa 1 zapytanie.',
  notNeededTitle: 'Usługi, które zwykle nie wymagają wpisu SPF include',
  notNeededIntro:
    'Weryfikacja SPF odbywa się na adresie Return-Path, a nie na widocznym adresie From. Większość nowoczesnych platform mailingowych stosuje własną domenę zwrotną lub dedykowaną subdomenę CNAME. Dodawanie ich include do domeny głównej niepotrzebnie marnuje zapytania DNS.',
  notNeededAfter: 'Nasz weryfikator oznacza zbędne wpisy include, gdy wykryje je w Twoim rekordzie.',
  createTitle: 'Jak utworzyć rekord SPF',
  createIntro:
    'Przejdź do zakładki Generator powyżej. Zaznacz usługi wysyłające pocztę w Twoim imieniu, a narzędzie przygotuje poprawny rekord i na bieżąco zliczy zapytania DNS. Jeśli Twoja domena posiada już rekord, załaduj go najpierw, aby go uzupełnić zamiast nadpisywać. Oto zalecane kroki:',
  createSteps: [
    'Sporządź listę wszystkich systemów wysyłających pocztę z Twojej domeny: poczta firmowa, newslettery, CRM, helpdesk, fakturowanie i formularze kontaktowe. Raporty DMARC pomagają namierzyć pominięte źródła.',
    'Znajdź oficjalny include każdego dostawcy lub zaznacz go w naszym narzędziu. Dla serwerów własnych przygotuj ich adresy IP.',
    'Wybierz zakończenie: ~all lub -all. W kolejnej sekcji wyjaśniamy konsekwencje obu wariantów.',
    'Opublikuj regułę jako pojedynczy rekord TXT w domenie głównej (często oznaczanej jako @ w panelu DNS). Jeśli istnieje już rekord zaczynający się od v=spf1, zmodyfikuj go zamiast dodawać kolejny.',
    'Odczekaj kilka minut na propagację DNS i sprawdź domenę ponownie za pomocą tego weryfikatora SPF.',
  ],
  createParas: [
    'Każda subdomena wysyłająca pocztę musi posiadać własny rekord SPF, ponieważ nie dziedziczy konfiguracji z domeny głównej. Domena lub subdomena, która nigdy nie wysyła maili, powinna zostać zabezpieczona rekordem: `v=spf1 -all`. Standard RFC 7208 uznaje to za kluczową dobrą praktykę chroniącą przed podszywaniem się. [Brytyjskie NCSC](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) rekomenduje dodanie do nieaktywnych domen również polityki DMARC p=reject oraz pustego rekordu MX (Null MX).',
    'Rekord o długości przekraczającej 255 znaków musi zostać podzielony na kilka ciągów w cudzysłowach wewnątrz tego samego rekordu TXT. Serwery odbiorcze łączą te ciągi bez dodawania spacji, dlatego spacje rozdzielające muszą znajdować się wewnątrz ciągów. Sprawdź wytyczne swojego panelu DNS dotyczące długich wpisów.',
  ],
  endingTitle: '~all czy -all: które zakończenie wybrać',
  endingIntro: 'Najwięksi dostawcy poczty prezentują odmienne rekomendacje:',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) zaleca stosowanie ~all (Softfail).',
    '[M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), międzynarodowa organizacja zrzeszająca operatorów poczty, rekomenduje ~all, aby serwery nie odrzucały wiadomości przed weryfikacją DMARC.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) rekomenduje -all (Fail), pod warunkiem pełnego wdrożenia DKIM i DMARC.',
  ],
  endingParas: [
    'Ryzyko związane z -all polega na tym, że część serwerów odbiorczych odrzuca wiadomość już na etapie wstępnej sesji SMTP, zanim sprawdzi zasady DMARC. Standard [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989) (DMARC 2026) zauważa, że odrzucone w ten sposób wiadomości nie trafiają do raportów DMARC, co uniemożliwia diagnozę problemów z legalną pocztą.',
    'W praktyce ~all jest bezpieczniejszym wyborem dla domen aktywnych, zwłaszcza w trakcie mapowania wszystkich źródeł wysyłki. Przy aktywnej polityce DMARC na poziomie quarantine lub reject to DMARC decyduje o losie wiadomości. Regułę -all rezerwuj dla domen obronnych, które nie wysyłają żadnych wiadomości. Nigdy nie używaj +all (dopuszcza cały internet) i unikaj ?all (brak ochrony).',
  ],
  resultsTitle: 'Co oznaczają wyniki testu rekordu SPF',
  thResult: 'Wynik',
  thMeaning: 'Znaczenie',
  thAction: 'Działanie',
  results: [
    {
      result: 'Prawidłowy rekord SPF',
      meaning: 'Pojedynczy rekord, poprawny składniowo, mieszczący się w limicie 10 zapytań i zakończony ~all lub -all.',
      action: 'Brak działań. Sprawdź ponownie po dodaniu nowego narzędzia wysyłkowego.',
    },
    {
      result: 'Działający rekord SPF z ostrzeżeniami',
      meaning: 'Serwery mogą go przetworzyć, lecz zawiera wady: 9 lub 10 zapytań DNS, brak reguły all lub mechanizm ptr.',
      action: 'Popraw wskazane ostrzeżenia, zanim przekształcą się w błędy po podłączeniu kolejnej usługi.',
    },
    {
      result: 'Uszkodzony rekord SPF',
      meaning: 'Rekord wywołuje błąd Permerror, co powoduje odrzucenie testu SPF dla wszystkich wychodzących maili.',
      action: 'Niezwłocznie napraw błędy. Najczęstsze przyczyny to zduplikowane rekordy TXT i ponad 10 zapytań.',
    },
    {
      result: 'Rekord SPF nie chroni domeny',
      meaning: 'Rekord kończy się na +all lub zawiera regułę, która to robi, pozwalając każdemu serwerowi na świecie podszywać się pod Twoją domenę.',
      action: 'Zmień +all na ~all lub -all.',
    },
    {
      result: 'Brak rekordu SPF',
      meaning: 'Domena nie publikuje żadnego rekordu TXT zaczynającego się od v=spf1.',
      action: 'Utwórz rekord w zakładce Generator. Domena nieaktywna powinna mieć wpis v=spf1 -all.',
    },
    {
      result: 'Domena nie istnieje',
      meaning: 'Serwery DNS nie zwracają żadnych wpisów dla podanej nazwy domeny (NXDOMAIN).',
      action: 'Upewnij się, że nazwa została wpisana poprawnie i domena jest zarejestrowana.',
    },
  ],
  receiverIntro:
    'Serwery odbiorcze stosują znormalizowane statusy wyników weryfikacji SPF w nagłówkach Authentication-Results oraz w raportach DMARC :',
  spfResults: [
    { result: 'pass', meaning: 'Serwer wysyłający jest autoryzowany przez rekord SPF.' },
    { result: 'fail', meaning: 'Serwer nie jest autoryzowany (-all). Odbiorca może odrzucić wiadomość.' },
    { result: 'softfail', meaning: 'Serwer prawdopodobnie nie jest autoryzowany (~all). RFC 7208 wskazuje, że nie powinno to samodzielnie powodować odrzucenia.' },
    { result: 'neutral', meaning: 'Rekord nie określa reguły dla tego serwera (?all). Równoważne brakowi rekordu.' },
    { result: 'none', meaning: 'Domena nie posiada rekordu SPF.' },
    { result: 'temperror', meaning: 'Chwilowy błąd DNS podczas sprawdzania. Nadawca może ponowić próbę później.' },
    { result: 'permerror', meaning: 'Rekord jest błędnie sformatowany lub przekracza limity techniczne. Wymaga poprawki w DNS.' },
  ],
  errorsTitle: 'Typowe błędy w rekordach SPF i sposoby naprawy',
  errorsIntro:
    'Analiza [12 milionów popularnych domen z 2023 r.](https://arxiv.org/abs/2502.08240) wykazała obecność SPF w 56,5% z nich, a 2,9% rekordów zawierało krytyczne błędy. Najczęstszą usterką było odwoływanie się do domeny bez rekordu SPF, a zaraz za nią uplasowało się przekroczenie limitu zapytań DNS.',
  errors: [
    {
      title: 'Dwa rekordy SPF w tej samej domenie',
      text: 'Problem pojawia się zwykle podczas wdrażania nowej usługi, gdy instrukcja nakazuje „dodać rekord TXT” i tworzony jest kolejny wpis zamiast edycji starego. Dwa rekordy SPF skutkują natychmiastowym Permerror. Połącz wszystkie mechanizmy w jeden wpis TXT rozpoczynający się od v=spf1 i kończący się pojedynczym all.',
    },
    {
      title: 'Wpis include wskazujący na nieistniejącą regułę',
      text: 'Jeśli include wskazuje na domenę bez poprawnego SPF, cała weryfikacja kończy się błędem Permerror. Przyczyną bywają literówki lub wycofane usługi dostawców. Usuń lub zaktualizuj niepoprawny include.',
    },
    {
      title: '+all, ?all lub brak zakończenia all',
      text: '`+all` autoryzuje wszystkie komputery w sieci i usuwa jakąkolwiek ochronę. `?all` lub brak reguły zamykającej daje bezużyteczny status neutralny. Zawsze kończ rekord regułą ~all lub -all.',
    },
    {
      title: 'Obecność mechanizmu ptr',
      text: 'RFC 7208 stanowczo odradza mechanizm ptr. Jest powolny, zużywa cenne zapytanie DNS i często zawodzi przy problemach z DNS. Zastąp go bezpośrednimi wpisami ip4 oraz ip6.',
    },
    {
      title: 'Błędy składniowe i literówki',
      text: 'Spacja po dwukropku, niekompletny adres IPv4 czy nieznane słowo wywołują natychmiastowy Permerror. Bardziej podstępny błąd to `include=example.com` ze znakiem równości: serwery ignorują go jako nieznany modyfikator, przez co usługa nigdy nie zostaje autoryzowana. Nasz weryfikator natychmiast wychwytuje takie usterki.',
    },
  ],
  mythsTitle: 'Trzy częste mity na temat rekordu SPF',
  myths: [
    '„Rekord SPF nie może zawierać wielkich liter.” RFC 7208 precyzuje, że mechanizmy i nazwy są całkowicie niewrażliwe na wielkość liter.',
    '„Rekord SPF może mieć maksymalnie 255 znaków.” Limit 255 znaków dotyczy pojedynczego ciągu w rekordzie DNS TXT. Dłuższy rekord dzieli się na wiele ciągów, które serwer odbiorcy automatycznie łączy.',
    '„Można zdefiniować maksymalnie 10 mechanizmów include.” Limit dotyczy łącznej liczby zapytań DNS generowanych rekurencyjnie przez całe drzewo SPF, a nie liczby użytych słów include.',
  ],
  authTitle: 'SPF jako element kompleksowej ochrony poczty',
  authParas: [
    'Pozytywny wynik SPF ma swoje ograniczenia. W badaniu z 2023 r. aż 34,7% domen autoryzowało pośrednio ponad 100 000 adresów IP. Ponadto SPF niemal zawsze zawodzi przy automatycznym przekazywaniu wiadomości, ponieważ serwer pośredniczący nie widnieje w rekordzie nadawcy.',
    'Problem ten rozwiązuje DKIM za pomocą podpisu kryptograficznego wiadomości, który pozostaje nienaruszony przy przekazywaniu. Z kolei DMARC sprawdza zgodność domeny widocznej w nagłówku From z domeną uwierzytelnioną przez SPF lub DKIM i instruuje odbiorców, jak traktować podejrzaną pocztę. Skonfiguruj pozostałe filary za pomocą naszego [generatora DKIM](/dkim-generator) oraz [generatora DMARC](/dmarc-generator). Użyj narzędzia [MX lookup](/mx-lookup), aby sprawdzić konfigurację serwerów odbiorczych.',
    'Uwierzytelnianie nie zapobiega jednak wysyłce na nieistniejące skrzynki pocztowe, co generuje twarde odbicia i niszczy reputację nadawcy. Weryfikuj pojedyncze adresy za pomocą [testera e-mail](/email-checker) lub sprawdzaj całe bazy przez [masowy weryfikator adresów e-mail](/bulk-email-verifier). Zwięzłe podsumowanie dla zespołu znajdziesz w [haśle rekord SPF w słowniku pojęć](/glossary/spf).',
  ],
  faqTitle: 'Często zadawane pytania',
  faqs: [
    {
      q: 'Czym jest rekord SPF?',
      a: 'To rekord TXT w konfiguracji DNS domeny, który wskazuje serwery uprawnione do wysyłania e-maili w jej imieniu. Serwery odbiorcze sprawdzają go, aby zweryfikować autentyczność wiadomości. SPF to skrót od Sender Policy Framework i opiera się na standardzie RFC 7208.',
    },
    {
      q: 'Jak mogę sprawdzić swój rekord SPF?',
      a: 'Wpisz domenę w weryfikatorze u góry tej strony. W wierszu poleceń możesz wykonać polecenie nslookup -type=txt twojadomena.pl w systemie Windows lub dig txt twojadomena.pl w systemach macOS i Linux. Znajdź wpis TXT rozpoczynający się od v=spf1.',
    },
    {
      q: 'Czy domena może posiadać dwa rekordy SPF?',
      a: 'Nie. Standard RFC 7208 bezwzględnie zabrania posiadania więcej niż jednego rekordu SPF dla pojedynczej nazwy domeny. Obecność dwóch wpisów wywołuje Permerror i unieważnia SPF dla całej korespondencji. Należy połączyć wszystkie mechanizmy w jeden rekord.',
    },
    {
      q: 'Co oznacza Permerror w SPF?',
      a: 'Permerror (Permanent Error) oznacza błąd uniemożliwiający serwerowi odczytanie Twojej polityki SPF. Typowe powody to zduplikowane rekordy SPF, przekroczenie 10 zapytań DNS lub błędny wpis include.',
    },
    {
      q: 'Jaka jest różnica między ~all a -all?',
      a: 'Przy ~all (Softfail) wiadomości z nieautoryzowanych serwerów są oznaczane jako podejrzane, lecz zwykle nie są od razu odrzucane. Przy -all (Fail) serwer odbiorczy otrzymuje jasną dyspozycję odrzucenia. Google rekomenduje ~all, a Microsoft preferuje -all po wdrożeniu DKIM i DMARC.',
    },
    {
      q: 'Czy subdomeny potrzebują własnego rekordu SPF?',
      a: 'Tak, jeśli wysyłają wiadomości e-mail. Subdomena nie dziedziczy automatycznie rekordu SPF z domeny nadrzędnej. Jeśli mailing.twojadomena.pl wysyła pocztę, musi posiadać własny wpis. Jeśli nie wysyła niczego, zabezpiecz ją regułą v=spf1 -all.',
    },
    {
      q: 'Jak długo trwa propagacja zmian w rekordzie SPF?',
      a: 'Zależy to od wartości TTL (Time to Live) poprzedniego rekordu. Przy TTL równym 3600 sekund aktualizacja zajmuje do jednej godziny. Choć firmy hostingowe wspominają o marginesie 24-48 godzin, większość serwerów DNS widzi zmiany w ciągu kilkunastu minut.',
    },
    {
      q: 'Czy potrzebuję SPF, jeśli mam już skonfigurowany DKIM?',
      a: 'Tak, wdrożenie obu standardów to współczesny wymóg. Gmail oraz Yahoo wymagają zarówno SPF, jak i DKIM dla regularnych nadawców. Ponadto DMARC zalicza test, jeśli chociaż jeden z mechanizmów jest poprawnie dopasowany, co zabezpiecza dostarczalność.',
    },
    {
      q: 'Czy SPF całkowicie eliminuje podszywanie się pod nadawcę?',
      a: 'Samodzielnie nie. SPF weryfikuje wyłącznie techniczny adres zwrotny koperty (Return-Path), a nie widoczny w programie pocztowym adres From. Spamer może zaliczyć SPF na własnej domenie i wyświetlić Twoją nazwę w nagłówku From. Dopiero DMARC eliminuje tę lukę, wymuszając zgodność obu adresów.',
    },
  ],
  ctaHeadline: 'Sprawdź poprawność adresów przed wysyłką',
}

const id: SpfPageStrings = {
  metaTitle: 'SPF Checker: Cek dan Buat SPF Record Gratis | Giggal.ai',
  ogTitle: 'SPF Checker: Cek dan Buat SPF Record Gratis',
  description:
    'Cek SPF record domain mana pun secara gratis. Pahami arti setiap bagian, hitung DNS lookup terhadap batas 10, temukan error konfigurasi, atau buat SPF record baru.',
  ogImage: '/og-image.png',
  ogAlt: 'Pemeriksa dan Generator SPF Record',
  crumb: 'SPF Checker',
  appName: 'SPF Checker',
  featureList: [
    'Tanpa perlu daftar akun',
    'Penghitung live DNS lookup',
    'Validasi ketat RFC 7208',
    'Panduan perbaikan langsung',
  ],
  h1: 'Pemeriksa dan Generator SPF Record',
  heroIntro:
    'Periksa SPF record domain di DNS publik. Alat ini menguraikan setiap mekanisme, menghitung DNS lookup terhadap batas 10 RFC 7208, dan menunjukkan error konfigurasi secara instan.',
  howTitle: 'Cara memeriksa SPF record',
  howSteps: [
    'Ketik nama domain pada kolom di atas. Alamat email lengkap juga bisa digunakan; alat ini otomatis mengambil bagian domainnya saja.',
    'Klik Periksa SPF record. Pemeriksaan membaca record aktif di DNS publik persis seperti yang dilakukan server email penerima.',
    'Baca ringkasannya terlebih dahulu. Ringkasan menunjukkan apakah record valid, memiliki peringatan, atau rusak.',
    'Tinjau daftar masalah yang ditemukan jika ada. Setiap item menjelaskan perubahan yang perlu dilakukan.',
    'Di bagian bawah, setiap komponen record diuraikan beserta jumlah DNS lookup yang digunakannya. Buka include untuk melihat layanan apa yang diizinkan.',
  ],
  howNote:
    'Tautan di bilah alamat browser menyimpan hasil pemeriksaan ini sehingga Anda dapat membagikannya kepada rekan tim atau penyedia hosting DNS Anda. Harap perhatikan batasannya: server penerima memverifikasi SPF berdasarkan alamat IP server pengirim pesan. Alat ini tidak memiliki pesan email nyata untuk dianalisis, sehingga memeriksa integritas record itu sendiri di DNS. Alat ini tidak dapat mengevaluasi makro dinamis yang berubah sesuai IP pengirim.',
  imageAlt: 'Ilustrasi SPF record yang dibagi menjadi beberapa komponen dengan indikator DNS lookup terhadap batas 10.',
  whatTitle: 'Apa itu SPF record?',
  whatIntro:
    'SPF record adalah TXT record pada DNS suatu domain yang memuat daftar server yang diizinkan mengirim email atas nama domain tersebut. SPF merupakan singkatan dari Sender Policy Framework, dengan ketentuan standar yang diatur dalam [RFC 7208](https://www.rfc-editor.org/rfc/rfc7208). Domain yang menggunakan Google Workspace umumnya memiliki record seperti ini :',
  whatAfter: [
    '`v=spf1` menandai bahwa ini adalah SPF record. `include:_spf.google.com` mengesahkan seluruh server dari daftar resmi Google. `~all` menginstruksikan server penerima untuk menandai email dari server lain sebagai mencurigakan.',
    'Saat email masuk, server penerima mengambil nama domain dari alamat bounce teknis (disebut Return-Path atau envelope sender). Server membaca SPF record domain tersebut dan memastikan apakah IP pengirim terdaftar. SPF tidak memeriksa alamat From yang tampak di kotak masuk. Karena itu SPF bekerja berdampingan dengan DKIM dan DMARC. Untuk memahami perpaduan ketiganya, baca [panduan lengkap SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained).',
    'Sejak Februari 2024, [Gmail mewajibkan SPF atau DKIM](https://support.google.com/a/answer/81126) bagi semua pengirim, serta keduanya bagi pengirim email massal. Yahoo menerapkan aturan serupa.',
  ],
  partsTitle: 'Arti setiap bagian dalam SPF record',
  partsIntro:
    'SPF record terdiri dari serangkaian istilah yang dipisahkan oleh spasi. Server penerima membaca dari kiri ke kanan dan berhenti pada istilah pertama yang cocok dengan server pengirim.',
  thPart: 'Komponen',
  thDoes: 'Fungsi',
  thLookup: 'DNS Lookup',
  lookupLabel: 'DNS Lookup: ',
  parts: [
    { part: 'v=spf1', does: 'Menandai TXT record sebagai SPF. Wajib berada di awal dan ditulis persis seperti ini.', lookup: 'Tidak' },
    { part: 'ip4:192.0.2.10', does: 'Mengizinkan alamat IPv4 tertentu atau rentang CIDR seperti 192.0.2.0/24.', lookup: 'Tidak' },
    { part: 'ip6:2001:db8::/32', does: 'Mengizinkan alamat atau rentang IPv6.', lookup: 'Tidak' },
    { part: 'a', does: 'Mengizinkan alamat IP dari domain itu sendiri, atau domain yang ditulis setelah tanda titik dua.', lookup: 'Ya' },
    { part: 'mx', does: 'Mengizinkan server penerima email dari MX record domain tersebut.', lookup: 'Ya' },
    { part: 'include:_spf.google.com', does: 'Mengizinkan semua server yang disahkan oleh SPF record domain lain. Ini cara standar menambahkan layanan pihak ketiga.', lookup: 'Ya, plus bersarang' },
    { part: 'exists:%{i}.example.com', does: 'Cocok jika kueri DNS menghasilkan alamat A. Digunakan oleh pengirim berskala besar menggunakan makro.', lookup: 'Ya' },
    { part: 'ptr', does: 'Mencocokkan melalui reverse DNS. RFC 7208 sangat tidak menyarankan penggunaannya karena lambat dan tidak stabil.', lookup: 'Ya' },
    { part: '~all atau -all', does: 'Menentukan tindakan untuk semua server yang tidak terdaftar. Wajib diletakkan di akhir.', lookup: 'Tidak' },
    { part: 'redirect=example.net', does: 'Menerapkan SPF record domain lain sebagai pengganti. Diabaikan jika record memiliki istilah all.', lookup: 'Ya' },
  ],
  partsAfter: [
    'Setiap mekanisme dapat diawali kualifikator yang menentukan status saat ada kecocokan. `+` berarti Pass (lolos) dan merupakan bawaan jika tidak ditulis. `-` berarti Fail (gagal mutlak), `~` berarti Softfail (gagal ringan), dan `?` berarti Neutral (netral). Oleh karena itu all biasanya ditulis sebagai `-all`, `~all`, atau `?all`.',
    'Penulisan tidak membedakan huruf besar dan kecil: `Include:` berfungsi sama persis dengan `include:`. RFC 7208 merekomendasikan mengakhiri setiap record dengan all atau redirect. Tanpa penutup ini, server yang tidak terdaftar akan berstatus netral.',
  ],
  limitTitle: 'Batas ketat 10 DNS lookup',
  limitParas: [
    'Setiap istilah include, a, mx, ptr, exists, dan redirect mewajibkan server penerima melakukan kueri resolusi DNS. RFC 7208 membatasi jumlah ini maksimal 10 lookup per evaluasi. Lookup di dalam include bersarang turut dihitung, sehingga satu include bisa menghabiskan beberapa lookup. ip4, ip6, dan all tidak menggunakan lookup. Jika sebuah record membutuhkan lebih dari 10 lookup, server penerima akan berhenti dan menghasilkan Permerror sehingga pemeriksaan SPF gagal.',
    'Batas ini sangat mudah terlampaui. Kami mengukur biaya lookup layanan populer di DNS publik: Google Workspace memerlukan 1 lookup, Microsoft 365 memerlukan 1 lookup, Salesforce 2, Mailgun 5, dan Freshdesk 7. Perusahaan pengguna Google Workspace yang menambahkan Mailgun dan Freshdesk sudah mencapai 13 lookup. [Riset tahun 2024 tentang SPF record](https://www.usenix.org/conference/usenixsecurity24/presentation/ashiq) pada domain .com, .net, .org, dan .se menunjukkan 6,5% domain melebihi batas 10 lookup, di mana include dari hanya dua penyedia hosting menyumbang 83,7% kasus tersebut.',
    'Biaya lookup juga dapat berubah sewaktu-waktu. Include Google sebelumnya membutuhkan 4 lookup hingga Desember 2025, saat [Google menyederhanakan include bersarang menjadi daftar tunggal](https://www.uriports.com/blog/google-simplifies-its-spf-record/). Banyak panduan dan generator lama masih menyebut angka 4. Pemeriksa kami menghitung jumlah lookup aktif sebenarnya secara langsung di DNS.',
    'Melebihi batas tidak selalu membuat seluruh email gagal secara merata. Seperti yang [dijelaskan Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure), server penerima mengevaluasi mekanisme dari kiri ke kanan dan berhenti pada kecocokan pertama. Email dari layanan yang ditulis di awal mungkin lolos, sedangkan layanan di bagian akhir akan gagal. Ini membuat masalah pengiriman terkesan acak jika Anda tidak menghitung lookup seluruh record.',
    'Terdapat pula batasan kedua: kueri kosong (void lookups), misalnya include yang mengarah ke domain yang sudah kedaluwarsa. RFC 7208 mewajibkan server penerima berhenti setelah menemukan 2 void lookup berturut-turut.',
  ],
  underTitle: 'Cara menjaga agar tetap di bawah 10 DNS lookup',
  underSteps: [
    'Hapus include dari layanan email marketing atau pihak ketiga yang sudah tidak Anda gunakan.',
    'Hapus include yang sudah tidak diwajibkan oleh penyedia layanan. Mailchimp, Postmark, Brevo, dan Klaviyo tidak lagi memerlukan include di domain utama Anda. SendGrid dan Amazon SES mengirim melalui subdomain terpisah. Lihat daftarnya di bawah.',
    'Gunakan mekanisme ip4 dan ip6 untuk server email Anda sendiri alih-alih mekanisme a atau mx. RFC 7208 merekomendasikan urutan ini dan alamat IP tidak memakai DNS lookup.',
    'Kirim email promosi atau transaksional menggunakan subdomain khusus, misalnya info.domainanda.com. Setiap subdomain memiliki SPF record sendiri dengan jatah 10 lookup masing-masing.',
  ],
  underNote:
    'Beberapa penyedia menawarkan fitur SPF flattening, yang mengganti include dengan daftar alamat IP langsung. Ini menghemat lookup, namun rentang IP penyedia rutin berubah sehingga record statis bisa usang. Microsoft melarang flattening untuk layanan cloud dinamis dan menyarankan audit berkala setiap kuartal jika Anda menggunakannya.',
  servicesTitle: 'Include SPF untuk Google Workspace, Microsoft 365, dan layanan lainnya',
  servicesIntro:
    'Berikut nilai include resmi dari dokumentasi setiap penyedia layanan beserta jumlah DNS lookup yang diukur di DNS publik per 12 Oktober 2026. Selalu pastikan dengan dokumentasi akun Anda karena beberapa layanan menggunakan subdomain regional tertentu.',
  thService: 'Layanan',
  thInclude: 'Nilai Include',
  thLookups: 'DNS Lookup',
  lookupCount: (n) => `${n} lookup`,
  servicesNote:
    'HubSpot memberikan include unik untuk setiap akun dengan akhiran hubspotemail.net. Salin nilai tersebut dari pengaturan email HubSpot Anda. Nilai ini menggunakan 1 lookup.',
  notNeededTitle: 'Layanan yang umumnya tidak memerlukan SPF include',
  notNeededIntro:
    'Verifikasi SPF diperiksa pada alamat Return-Path teknis dan bukan pada alamat From yang tampil di inbox. Sebagian besar platform pengiriman email saat ini menggunakan domain bounce mereka sendiri atau subdomain CNAME khusus. Menambahkan include mereka ke domain utama hanya membuang kuota DNS lookup tanpa memberi proteksi tambahan.',
  notNeededAfter: 'Pemeriksa kami akan menyoroti include yang tidak diperlukan ini jika ditemukan di dalam record Anda.',
  createTitle: 'Cara membuat SPF record baru',
  createIntro:
    'Gunakan tab Buat di atas sebagai generator SPF interaktif. Centang layanan yang mengirimkan email atas nama domain Anda, dan alat ini akan menyusun sintaks yang tepat sembari memantau jumlah DNS lookup. Jika domain Anda sudah memiliki record, muat terlebih dahulu agar Anda dapat melengkapinya tanpa menimpa konfigurasi yang sudah ada. Berikut langkah-langkahnya :',
  createSteps: [
    'Daftar semua layanan yang mengirim email dari domain Anda: paket email kantor, buletin berita, CRM, help desk, penagihan, dan formulir website. Laporan DMARC sangat membantu menemukan pengirim yang terlewat.',
    'Dapatkan nilai include dari panduan masing-masing layanan atau centang di alat ini. Untuk server mandiri, cantumkan alamat IP mereka.',
    'Pilih aturan penutup: ~all atau -all. Bagian berikutnya menjelaskan perbedaan dampaknya.',
    'Publikasikan sebagai satu TXT record pada root domain Anda (biasanya dilambangkan dengan @ pada panel DNS). Jika sudah ada record yang diawali v=spf1, perbarui record tersebut alih-alih membuat yang baru.',
    'Tunggu beberapa menit hingga DNS menyebar dan periksa kembali domain tersebut dengan SPF checker ini.',
  ],
  createParas: [
    'Setiap subdomain yang mengirim email membutuhkan SPF record sendiri karena subdomain tidak otomatis mewarisi record domain utama. Domain atau subdomain yang tidak pernah mengirim email harus dilindungi dengan: `v=spf1 -all`. RFC 7208 menyebut ini sebagai praktik terbaik untuk mencegah spoofing. [NCSC Inggris](https://www.ncsc.gov.uk/blog-post/protecting-parked-domains) juga merekomendasikan penambahan kebijakan DMARC p=reject dan Null MX record pada domain yang tidak aktif.',
    'Record yang melebihi 255 karakter harus dibagi menjadi beberapa string bertanda kutip di dalam TXT record yang sama. Server penerima akan menggabungkan string tersebut tanpa spasi, sehingga spasi pemisah harus disertakan di dalam tanda kutip. Periksa panduan DNS hosting Anda mengenai penulisan string panjang.',
  ],
  endingTitle: '~all atau -all: akhiran mana yang sebaiknya dipilih',
  endingIntro: 'Penyedia email terkemuka memiliki rekomendasi yang berbeda :',
  endingList: [
    '[Google](https://knowledge.workspace.google.com/admin/security/set-up-spf) merekomendasikan ~all (Softfail).',
    '[M3AAWG](https://www.m3aawg.org/sites/default/files/m3aawg-email-authentication-recommended-best-practices-09-2020.pdf), asosiasi penyedia email global, menyarankan ~all agar server penerima tidak menolak pesan sebelum evaluasi DMARC selesai.',
    '[Microsoft](https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure) merekomendasikan -all (Fail), asalkan DKIM dan DMARC sudah dikonfigurasi dengan benar.',
  ],
  endingParas: [
    'Kelemahan dari -all adalah beberapa server penerima langsung menolak pesan di sesi awal SMTP sebelum memeriksa DMARC. Standar [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989) (standar DMARC 2026) mencatat bahwa pesan yang ditolak lebih awal ini tidak pernah masuk dalam laporan agregat DMARC, sehingga mempersulit pelacakan kendala pengiriman email yang sah.',
    'Dalam praktiknya, ~all adalah pilihan paling aman untuk domain aktif, terutama saat Anda masih menginventarisasi semua pengirim email Anda. Jika DMARC Anda disetel ke quarantine atau reject, DMARC yang akan menentukan tindakan akhir. Gunakan -all pada domain cadangan yang tidak pernah mengirim email. Jangan pernah memakai +all (mengizinkan seluruh internet) dan hindari ?all (setara dengan tidak ada proteksi).',
  ],
  resultsTitle: 'Arti hasil pemeriksaan SPF record',
  thResult: 'Hasil',
  thMeaning: 'Arti',
  thAction: 'Tindakan',
  results: [
    {
      result: 'SPF record valid',
      meaning: 'Record tunggal, format benar, dalam batas 10 lookup, dan diakhiri dengan ~all atau -all.',
      action: 'Tidak ada tindakan yang diperlukan. Cek ulang jika Anda menghubungkan layanan pengiriman baru.',
    },
    {
      result: 'SPF record berfungsi dengan peringatan',
      meaning: 'Server penerima dapat memprosesnya, tetapi terdapat kelemahan seperti 9 atau 10 lookup, tanpa aturan all, atau memakai ptr.',
      action: 'Perbaiki peringatan yang muncul sebelum bertambah menjadi error saat menambah layanan baru.',
    },
    {
      result: 'SPF record rusak',
      meaning: 'Record menghasilkan Permerror sehingga verifikasi SPF gagal untuk seluruh email dari domain ini.',
      action: 'Segera perbaiki error yang tercantum. Penyebab paling sering adalah record ganda dan lebih dari 10 lookup.',
    },
    {
      result: 'SPF record tidak melindungi domain',
      meaning: 'Record diakhiri +all atau menyertakan include yang berakhiran demikian, sehingga semua server di internet diizinkan.',
      action: 'Ganti +all dengan ~all atau -all.',
    },
    {
      result: 'Tidak ada SPF record',
      meaning: 'Domain tidak memublikasikan TXT record yang diawali dengan v=spf1.',
      action: 'Buat record baru di tab Buat. Domain yang tidak aktif harus diatur ke v=spf1 -all.',
    },
    {
      result: 'Domain tidak ditemukan',
      meaning: 'DNS tidak menemukan record apa pun untuk domain ini (NXDOMAIN).',
      action: 'Periksa kembali ejaan domain dan pastikan nama domain terdaftar serta aktif.',
    },
  ],
  receiverIntro:
    'Server email penerima menggunakan terminologi standar untuk mengklasifikasikan hasil pemeriksaan SPF pada header Authentication-Results dan laporan DMARC :',
  spfResults: [
    { result: 'pass', meaning: 'Server pengirim secara eksplisit diizinkan oleh SPF record.' },
    { result: 'fail', meaning: 'Server pengirim tidak diizinkan (-all). Penerima dapat menolak pesan.' },
    { result: 'softfail', meaning: 'Server pengirim kemungkinan tidak diizinkan (~all). RFC 7208 menyatakan status ini sebaiknya tidak langsung ditolak.' },
    { result: 'neutral', meaning: 'Record tidak menentukan aturan untuk server ini (?all). Sama dengan tidak memiliki record.' },
    { result: 'none', meaning: 'Domain tidak memiliki SPF record.' },
    { result: 'temperror', meaning: 'Terjadi gangguan DNS sementara saat pemeriksaan. Pengirim dapat mencoba mengirim ulang nanti.' },
    { result: 'permerror', meaning: 'Format record salah atau melanggar batasan teknis. Hanya perbaikan DNS yang dapat mengatasinya.' },
  ],
  errorsTitle: 'Error umum pada SPF record dan solusinya',
  errorsIntro:
    'Sebuah [analisis pada 12 juta domain populer tahun 2023](https://arxiv.org/abs/2502.08240) menemukan SPF pada 56,5% domain dan 2,9% di antaranya memiliki error fatal. Kesalahan paling umum adalah include yang mengarah ke domain tanpa SPF, disusul oleh terlampauinya batas 10 DNS lookup.',
  errors: [
    {
      title: 'Dua SPF record pada domain yang sama',
      text: 'Kerap terjadi saat menambahkan layanan baru dan panduan menyebutkan “tambahkan TXT record ini”, lalu dibuat record baru alih-alih mengedit yang sudah ada. Dua SPF record otomatis menghasilkan Permerror. Gabungkan semua mekanisme ke dalam satu TXT record yang dimulai dengan v=spf1 dan diakhiri satu aturan all.',
    },
    {
      title: 'Include mengarah ke domain tanpa SPF',
      text: 'Jika include mengarah ke domain yang tidak memiliki SPF record valid, seluruh pengujian gagal dengan Permerror. Ini sering dipicu salah ketik atau layanan yang sudah tutup. Hapus atau perbarui nilai include tersebut.',
    },
    {
      title: '+all, ?all, atau tanpa aturan all di akhir',
      text: '`+all` mengizinkan seluruh server di internet dan menghilangkan fungsi keamanan. `?all` atau lupa menulis aturan all menghasilkan status netral. Selalu akhiri record dengan ~all atau -all.',
    },
    {
      title: 'Penggunaan mekanisme ptr',
      text: 'RFC 7208 secara tegas melarang mekanisme ptr. Mekanisme ini lambat, menghabiskan jatah lookup, dan rentan gagal saat DNS bermasalah. Ganti dengan mekanisme ip4 dan ip6 langsung.',
    },
    {
      title: 'Kesalahan ketik dan tanda baca',
      text: 'Spasi setelah titik dua, penulisan IPv4 yang tidak lengkap, atau istilah yang tidak dikenal akan menimbulkan Permerror. Kesalahan tersembunyi seperti `include=example.com` dengan tanda sama dengan akan diabaikan sebagai modifier asing sehingga layanan tersebut tidak pernah diotorisasi. Pemeriksa kami langsung mendeteksi masalah ini.',
    },
  ],
  mythsTitle: 'Tiga mitos umum seputar SPF record',
  myths: [
    '“SPF record tidak boleh menggunakan huruf besar.” RFC 7208 menyatakan bahwa mekanisme dan nama domain tidak membedakan huruf besar dan kecil.',
    '“SPF record maksimal hanya boleh 255 karakter.” Batas 255 karakter berlaku untuk tiap string dalam DNS TXT record. Record yang lebih panjang dipecah menjadi beberapa string bersambung.',
    '“Maksimal hanya boleh ada 10 include.” Batas 10 berlaku untuk total resolusi DNS lookup yang dihasilkan secara rekursif, bukan jumlah kata include yang tertulis.',
  ],
  authTitle: 'Peran SPF dalam ekosistem autentikasi email',
  authParas: [
    'Status lulus pada SPF memiliki keterbatasan. Dalam penelitian 2023, 34,7% domain secara tidak langsung mengizinkan lebih dari 100.000 alamat IP. Selain itu, SPF kerap gagal saat email diteruskan (forwarding) secara otomatis karena IP server penerus tidak tercantum di record Anda.',
    'DKIM mengatasi celah ini dengan menyematkan tanda tangan kriptografi pada isi pesan yang tetap utuh saat diteruskan. DMARC menyatukan keduanya dengan memastikan domain From cocok dengan domain yang divalidasi oleh SPF atau DKIM, serta memberi instruksi kepada penerima jika email gagal divalidasi. Konfigurasikan perlindungan lainnya dengan [generator DKIM](/dkim-generator) dan [generator DMARC](/dmarc-generator). Gunakan [pencarian MX](/mx-lookup) untuk memverifikasi server penerima Anda.',
    'Autentikasi juga tidak mencegah pengiriman email ke alamat yang tidak aktif atau salah ketik yang berujung bounce. Bersihkan alamat individual dengan [pemeriksa email](/email-checker) atau bersihkan seluruh basis data kontak Anda dengan [validasi email massal](/bulk-email-verifier). Untuk ringkasan praktis bagi tim Anda, baca penjelasan lengkap mengenai [SPF record di glosarium](/glossary/spf).',
  ],
  faqTitle: 'Pertanyaan umum seputar SPF record',
  faqs: [
    {
      q: 'Apa itu SPF record?',
      a: 'SPF record adalah TXT record di DNS domain Anda yang mencantumkan server mana saja yang berhak mengirim email atas nama domain tersebut. Server penerima membacanya untuk memverifikasi keaslian pengirim. SPF singkatan dari Sender Policy Framework yang distandardisasi dalam RFC 7208.',
    },
    {
      q: 'Bagaimana cara memeriksa SPF record saya?',
      a: 'Masukkan domain Anda pada kolom pemeriksa di bagian atas halaman ini. Di terminal atau command prompt, Anda dapat menjalankan nslookup -type=txt domainanda.com di Windows, atau dig txt domainanda.com di macOS dan Linux. Cari baris TXT yang diawali dengan v=spf1.',
    },
    {
      q: 'Bolehkah satu domain memiliki dua SPF record?',
      a: 'Tidak boleh. RFC 7208 secara tegas melarang lebih dari satu SPF record pada satu nama domain. Jika ada dua, server penerima akan mengembalikan Permerror dan verifikasi SPF gagal untuk seluruh email Anda. Gabungkan seluruh aturan ke dalam satu TXT record.',
    },
    {
      q: 'Apa arti Permerror pada SPF?',
      a: 'Permerror (Permanent Error) menandakan server penerima tidak dapat membaca atau memproses SPF record Anda. Penyebab utamanya meliputi record ganda, melebihi 10 DNS lookup, atau include yang mengarah ke domain tanpa SPF valid.',
    },
    {
      q: 'Apa perbedaan antara ~all dan -all?',
      a: 'Dengan ~all (Softfail), email dari server yang tidak terdaftar akan ditandai mencurigakan namun umumnya tetap diterima. Dengan -all (Fail), server diminta menolaknya secara tegas. Google menyarankan ~all, sedangkan Microsoft merekomendasikan -all jika DKIM dan DMARC telah aktif.',
    },
    {
      q: 'Apakah subdomain membutuhkan SPF record sendiri?',
      a: 'Ya, jika subdomain tersebut digunakan untuk mengirim email. Subdomain tidak otomatis mewarisi SPF record dari domain utama. Jika info.domainanda.com mengirim email, ia wajib memiliki record sendiri. Jika tidak pernah mengirim email, amankan dengan v=spf1 -all.',
    },
    {
      q: 'Berapa lama propagasi perubahan SPF record?',
      a: 'Tergantung pada nilai TTL (Time to Live) dari record sebelumnya. Jika TTL disetel 3600 detik, pembaruan memakan waktu maksimal satu jam. Meskipun penyedia domain sering menyebut rentang 24 hingga 48 jam, sebagian besar DNS resolver memperbaruinya dalam hitungan menit.',
    },
    {
      q: 'Apakah SPF tetap diperlukan jika sudah menggunakan DKIM?',
      a: 'Ya, keduanya sangat disarankan. Gmail dan Yahoo mewajibkan SPF dan DKIM untuk pengirim email rutin. Selain itu, DMARC akan lolos jika salah satu metode berhasil selaras, memberikan redundansi keamanan yang lebih baik.',
    },
    {
      q: 'Apakah SPF menghentikan pemalsuan email (spoofing) secara total?',
      a: 'Tidak sendirian. SPF hanya memvalidasi alamat Return-Path teknis, bukan alamat From yang terlihat oleh penerima di inbox. Pengirim spam bisa meloloskan SPF menggunakan domain mereka sendiri lalu memalsukan nama Anda di alamat From. DMARC menutup celah ini dengan mewajibkan keselarasan antara kedua domain.',
    },
  ],
  ctaHeadline: 'Verifikasi alamat email sebelum Anda mengirim',
}

export const SPF_PAGE_STRINGS: Partial<Record<Locale, SpfPageStrings>> & { en: SpfPageStrings } = {
  en,
  de,
  it,
  'pt-br': ptBr,
  fr,
  es,
  nl,
  pl,
  id,
}
