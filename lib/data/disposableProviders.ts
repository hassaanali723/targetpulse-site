// Curated reference data for the disposable email providers directory page,
// shared by all six languages. Text (blurbs, category labels) lives per
// language in lib/i18n/disposableProvidersStrings.ts, keyed by provider name;
// TypeScript fails the build if any language is missing a provider.
//
// This is DISPLAY content, not the detection source. Disposable detection runs
// in the backend against 100,000+ domains (see docs/DISPOSABLE_CHECK_GUIDE.md).
//
// Rules for editing this file:
// - Every domain here must be on a real disposable list. Each one was checked
//   against the 75,312-domain community list (git history, commit 045dd93)
//   on 2 Oct 2026. Do not add a domain from memory without checking it.
// - Blurbs (in the strings file) state only what is true of the whole
//   service. No numbers, timings or features unless the provider documents them.
// - Privacy alias services that are NOT on the disposable lists (for example
//   SimpleLogin) must not be listed, or the page would contradict the checker.
// - Adding a provider here means adding its blurb in all six languages.

export type ProviderCategory = 'timed' | 'public' | 'alias' | 'api'

export const CATEGORY_ORDER: ProviderCategory[] = ['timed', 'public', 'alias', 'api']

export const DISPOSABLE_PROVIDERS = [
  { name: 'Temp-Mail', domains: ['temp-mail.org', 'temp-mail.io'], category: 'timed' },
  { name: 'Mailinator', domains: ['mailinator.com', 'mailinator.net'], category: 'public' },
  { name: '10MinuteMail', domains: ['10minutemail.com', '10minutemail.net'], category: 'timed' },
  { name: 'Guerrilla Mail', domains: ['guerrillamail.com', 'sharklasers.com', 'grr.la', 'guerrillamail.net', 'guerrillamail.biz'], category: 'timed' },
  { name: 'YOPmail', domains: ['yopmail.com', 'yopmail.fr', 'yopmail.net'], category: 'public' },
  { name: 'Maildrop', domains: ['maildrop.cc'], category: 'public' },
  { name: 'Mohmal', domains: ['mohmal.com'], category: 'timed' },
  { name: 'EmailOnDeck', domains: ['emailondeck.com'], category: 'timed' },
  { name: 'Dropmail', domains: ['dropmail.me'], category: 'api' },
  { name: 'ThrowawayMail', domains: ['throwawaymail.com'], category: 'timed' },
  { name: 'TrashMail', domains: ['trashmail.com', 'trashmail.net'], category: 'alias' },
  { name: 'Temp Mail Plus', domains: ['tempmail.plus'], category: 'timed' },
  { name: 'Tempmailo', domains: ['tempmailo.com'], category: 'timed' },
  { name: 'Tempail', domains: ['tempail.com'], category: 'timed' },
  { name: 'Mint Email', domains: ['mintemail.com'], category: 'timed' },
  { name: 'Mailnesia', domains: ['mailnesia.com'], category: 'public' },
  { name: 'MailCatch', domains: ['mailcatch.com'], category: 'public' },
  { name: 'Spamgourmet', domains: ['spamgourmet.com'], category: 'alias' },
  { name: 'Dispostable', domains: ['dispostable.com'], category: 'public' },
  { name: 'Fake Mail Generator', domains: ['fakemailgenerator.com'], category: 'timed' },
  { name: 'GetAirMail', domains: ['getairmail.com'], category: 'timed' },
  { name: 'Inbox Kitten', domains: ['inboxkitten.com'], category: 'public' },
  { name: 'Burner Mail', domains: ['burnermail.io'], category: 'alias' },
  { name: 'addy.io', domains: ['addy.io'], category: 'alias' },
  { name: '33Mail', domains: ['33mail.com'], category: 'alias' },
  { name: 'Moakt', domains: ['moakt.com', 'moakt.cc'], category: 'timed' },
  { name: 'Minute Inbox', domains: ['minuteinbox.com'], category: 'timed' },
  { name: 'Harakirimail', domains: ['harakirimail.com'], category: 'public' },
  { name: 'Mailsac', domains: ['mailsac.com'], category: 'api' },
  { name: 'Email Fake', domains: ['email-fake.com', 'emailfake.com'], category: 'timed' },
  { name: 'Tmailor', domains: ['tmailor.com'], category: 'timed' },
  { name: 'Mail.tm', domains: ['mail.tm'], category: 'api' },
  { name: 'DiscardMail', domains: ['discard.email', 'discardmail.com'], category: 'public' },
  { name: 'Spambog', domains: ['spambog.com', 'spambog.ru'], category: 'public' },
  { name: 'Fakeinbox', domains: ['fakeinbox.com'], category: 'timed' },
] as const satisfies readonly { name: string; domains: readonly string[]; category: ProviderCategory }[]

export type ProviderName = (typeof DISPOSABLE_PROVIDERS)[number]['name']

const PROVIDER_DOMAINS = new Set<string>(DISPOSABLE_PROVIDERS.flatMap((p) => [...p.domains]))

// More well-known disposable domains, beyond the ones shown in the provider
// cards. Each domain appears once on the page: anything already in a provider
// card is filtered out here.
export const MORE_DISPOSABLE_DOMAINS: string[] = Array.from(new Set([
  'mailinator.org', '20minutemail.com', 'guerrillamailblock.com', 'spam4.me',
  'trashmail.me', 'trashmail.de', 'yopmail.pp.ua', 'getnada.com', 'nada.ltd',
  'temp-mail.ru', 'tempr.email', 'discardmail.de', 'mytrashmail.com', 'trbvm.com',
  'mailnull.com', 'spamgourmet.net', 'spamgourmet.org', 'mvrht.net',
  'incognitomail.com', 'incognitomail.org', 'jetable.org', 'anonbox.net',
  'mailexpire.com', 'spambox.us', 'throwam.com', 'tempinbox.com', 'tempmail.net',
  'tempemail.net', 'tempemail.com', 'temporarymail.com', 'temporary-mail.net',
  'disposablemail.com', 'emailtemporanea.net', 'email-temp.com', 'luxusmail.org',
  'maildrop.cf', 'mailinator2.com', 'binkmail.com', 'safetymail.info', 'bobmail.info',
  'devnullmail.com', 'spamherelots.com', 'suremail.info', 'thisisnotmyrealemail.com',
  'tradermail.info', 'veryrealemail.com', 'zippymail.info', 'notmailinator.com',
  'reallymymail.com', 'sogetthis.com', 'mailin8r.com', 'thankyou2010.com',
  'guerrillamail.de', 'guerrillamail.info', 'guerrillamail.org', 'pokemail.net',
  'spam.la', 'armyspy.com', 'cuvox.de', 'dayrep.com', 'einrot.com', 'fleckens.hu',
  'gustr.com', 'jourrapide.com', 'rhyta.com', 'superrito.com', 'teleworm.us',
  'yomail.info', 'maildim.com', 'mohmal.in', 'mohmal.tech', 'mohmal.im',
  'tempmailer.com', 'tempmailer.de', 'wegwerfmail.de', 'wegwerfmail.net', 'wegwerfmail.org',
  'byom.de', 'kurzepost.de', 'objectmail.com', 'proxymail.eu', 'rcpt.at',
  'trash-mail.at', 'trashmail.at', 'trashmail.io', 'fastmazda.com', 'mailtothis.com',
  '0clickemail.com', '10mail.org', '10mail.tk', 'emltmp.com', 'inboxbear.com',
  'mailpoof.com', 'tempmail.dev', 'etempmail.net', 'tempmailto.org', 'moakt.ws',
  'tmpmail.org', 'tmpmail.net', 'disbox.net', 'mailto.plus', 'fexpost.com', 'fexbox.org',
])).filter((d) => !PROVIDER_DOMAINS.has(d)).sort()
