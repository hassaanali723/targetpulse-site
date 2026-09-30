import fs from 'fs'
import path from 'path'

/**
 * Registry of well-known disposable, temporary, and burner email domains.
 * Loaded from lib/data/disposable_domains.txt (75,000+ domains) with bundled fallback.
 */

const FALLBACK_DOMAINS = [
  'mailinator.com',
  'mailinator.net',
  'mailinator.org',
  'tempmail.com',
  'temp-mail.org',
  'temp-mail.io',
  '10minutemail.com',
  '10minutemail.net',
  '20minutemail.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.biz',
  'guerrillamail.org',
  'guerrillamailblock.com',
  'sharklasers.com',
  'grr.la',
  'throwawaymail.com',
  'trashmail.com',
  'trashmail.net',
  'trashmail.me',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'dispostable.com',
  'getairmail.com',
  'fakemailgenerator.com',
  'mohmal.com',
  'emailondeck.com',
  'maildrop.cc',
  'burnermail.io',
  'inboxkitten.com',
  'nada.ltd',
  'getnada.com',
  'crazymailing.com',
  'mytemp.email',
  'generator.email',
  'tempinbox.com',
  'harakirimail.com',
  'abcvg.com',
  'fakemail.net',
  'tmailor.com',
  'inboxbear.com',
  'dropmail.me',
  'mintemail.com',
  'mailcatch.com',
  'mailnesia.com',
  'mytrashmail.com',
  'spamgourmet.com',
  'incognitomail.com',
  'binkmail.com',
  'safetymail.info',
  'disposablemail.com',
  'tempmailaddress.com',
  'temporary-mail.net',
  'discard.email',
  'discardmail.com',
  'spambog.com',
  'trashymail.com',
  'crazymail.com',
  'tempmailo.com',
  'tempr.email',
  'throwaway.email',
  'email-fake.com',
  'armyspy.com',
  'cuvox.de',
  'dayrep.com',
  'fleckens.hu',
  'gustr.com',
  'jourrapide.com',
  'rhyta.com',
  'superrito.com',
  'teleworm.us',
  'einrot.com',
  'mailnull.com',
  'zillamail.com',
  'anonymbox.com',
  'fakemail.io',
  'tempmailer.com',
  'fakeinbox.com',
  'mailpoof.com',
  'tempail.com',
  'temporarymail.com',
  'jetable.org',
  'maileater.com',
  'meltmail.com',
  'pookmail.com',
  'safe-mail.net',
  'sneakemail.com',
  'sofort-mail.de',
  'tempemail.co',
  'tempemail.net',
  'temporaryemail.us',
  'throwawayemailaddresses.com',
  'wegwerfmail.de',
  'wegwerfmail.net',
  'whyspam.me',
  'willselfdestruct.com',
]

function loadDisposableDomains(): Set<string> {
  const set = new Set<string>(FALLBACK_DOMAINS)

  try {
    const filePath = path.join(process.cwd(), 'lib', 'data', 'disposable_domains.txt')
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8')
      const lines = content.split(/\r?\n/)
      for (const line of lines) {
        const clean = line.trim().toLowerCase()
        if (clean && !clean.startsWith('#')) {
          set.add(clean)
        }
      }
    }
  } catch (err) {
    console.warn('[disposableDomains] Could not load data/disposable_domains.txt, using fallback list', err)
  }

  return set
}

export const KNOWN_DISPOSABLE_DOMAINS = loadDisposableDomains()

/**
 * Normalizes an email or domain and checks whether it belongs to a known disposable provider (O(1)).
 */
export function isDisposableDomain(input: string): boolean {
  if (!input) return false
  const trimmed = input.trim().toLowerCase()
  const domain = trimmed.includes('@') ? trimmed.split('@')[1] : trimmed
  if (!domain) return false

  if (KNOWN_DISPOSABLE_DOMAINS.has(domain)) return true

  // Check subdomains (e.g. sub.mailinator.com)
  const parts = domain.split('.')
  if (parts.length > 2) {
    const parentDomain = parts.slice(-2).join('.')
    if (KNOWN_DISPOSABLE_DOMAINS.has(parentDomain)) return true
  }

  return false
}
