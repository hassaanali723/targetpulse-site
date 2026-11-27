/**
 * DKIM DNS resolution engine with CNAME delegation chasing.
 * Zero server-side dependency; uses DoH (Google Public DNS & Cloudflare).
 */

import { resolveDns, answersOfType } from './dnsOverHttps'
import {
  parseDkimRecord,
  type DkimValidationResult,
} from './dkimCheckerPure'

export interface DkimCheckOutcome {
  selector: string
  domain: string
  queriedHost: string
  effectiveHost: string
  cnameChain: string[]
  dnssecValidated: boolean
  resolver: string
  rawRecords: string[]
  validation: DkimValidationResult
}

export function cleanDkimInputs(selector: string, domain: string): { sel: string; dom: string } {
  let cleanSel = selector.trim()
  // If user pasted full selector e.g. "google._domainkey.google.com"
  if (cleanSel.includes('._domainkey.')) {
    const parts = cleanSel.split('._domainkey.')
    cleanSel = parts[0]
  }
  cleanSel = cleanSel.replace(/\._domainkey$/i, '').trim()

  let cleanDom = domain.trim().toLowerCase()
  cleanDom = cleanDom.replace(/^(https?:\/\/)?(www\.)?/i, '')
  cleanDom = cleanDom.split('/')[0].split('?')[0].split(':')[0]
  cleanDom = cleanDom.replace(/\.$/, '')

  return { sel: cleanSel, dom: cleanDom }
}

export async function checkDkimSelector(
  rawSelector: string,
  rawDomain: string
): Promise<DkimCheckOutcome> {
  const { sel, dom } = cleanDkimInputs(rawSelector, rawDomain)

  if (!sel) throw new Error('Please enter a valid DKIM selector.')
  if (!dom) throw new Error('Please enter a valid domain name.')

  const initialHost = `${sel}._domainkey.${dom}`
  let currentHost = initialHost
  const cnameChain: string[] = []
  let dnssec = false
  let resolverName = 'Google Public DNS'
  let rawRecords: string[] = []

  // Chase CNAME up to 5 hops
  for (let hop = 0; hop < 5; hop++) {
    // 1. Query TXT
    const txtRes = await resolveDns(currentHost, 'TXT')
    dnssec = txtRes.dnssecValidated
    resolverName = txtRes.resolver

    const txtAnswers = answersOfType(txtRes, 'TXT')
    const dkimMatches = txtAnswers
      .map((a) => a.data.replace(/^"|"$/g, '').trim())
      .filter((txt) => /v\s*=\s*DKIM1|p\s*=/i.test(txt))

    if (dkimMatches.length > 0) {
      rawRecords = dkimMatches
      break
    }

    // 2. Query CNAME
    const cnameRes = await resolveDns(currentHost, 'CNAME')
    const cnameAnswers = answersOfType(cnameRes, 'CNAME')
    if (cnameAnswers.length > 0) {
      const target = cnameAnswers[0].data.replace(/\.$/, '').trim()
      cnameChain.push(target)
      currentHost = target
      continue
    }

    // No TXT and no CNAME at current host
    break
  }

  if (rawRecords.length > 0) {
    const validation = parseDkimRecord(rawRecords[0], sel, dom)
    return {
      selector: sel,
      domain: dom,
      queriedHost: initialHost,
      effectiveHost: currentHost,
      cnameChain,
      dnssecValidated: dnssec,
      resolver: resolverName,
      rawRecords,
      validation,
    }
  }

  // Not found
  const emptyValidation = parseDkimRecord('', sel, dom)
  return {
    selector: sel,
    domain: dom,
    queriedHost: initialHost,
    effectiveHost: currentHost,
    cnameChain,
    dnssecValidated: dnssec,
    resolver: resolverName,
    rawRecords: [],
    validation: emptyValidation,
  }
}
