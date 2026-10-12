/**
 * Shared helpers for tools that take a domain from the user.
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 */

/**
 * Turns whatever the user typed into a bare domain. Accepts a URL, an email
 * address or a host with a trailing dot, so "https://www.Example.com/about"
 * and "anna@example.com" both become "example.com".
 */
export function normalizeDomainInput(input: string): string {
  let d = input.trim().toLowerCase().replace(/^[a-z]+:\/\//, '')
  if (d.includes('@')) d = d.slice(d.lastIndexOf('@') + 1)
  d = d.split(/[/?#\s]/)[0]
  return d.replace(/^www\./, '').replace(/^_dmarc\./, '').replace(/\.$/, '')
}

/** Loose check: labels separated by dots, so accented domains pass too. */
export function looksLikeDomain(domain: string): boolean {
  return /^[^\s.@/:]+(\.[^\s.@/:]+)+$/.test(domain)
}
