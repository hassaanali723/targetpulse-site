/**
 * DMARC DNS resolution engine with organizational domain fallback and external report checks.
 * Uses public DoH (Google Public DNS & Cloudflare) for client-side resolution.
 */

import { resolveDns, answersOfType } from './dnsOverHttps'
import {
  parseDmarcRecord,
  getOrganizationalDomain,
  type DmarcValidationResult,
} from './dmarcCheckerPure'

export interface DmarcCheckOutcome {
  queriedHost: string
  effectiveHost: string
  domain: string
  orgDomain: string
  fallbackToOrgDomain: boolean
  dnssecValidated: boolean
  resolver: string
  rawRecords: string[]
  validation: DmarcValidationResult
}

export function cleanDomainInput(input: string): string {
  let clean = input.trim().toLowerCase()
  clean = clean.replace(/^(https?:\/\/)?(www\.)?/i, '')
  clean = clean.replace(/^mailto:/i, '')
  clean = clean.split('/')[0].split('?')[0].split(':')[0]
  clean = clean.replace(/^\._?dmarc\./i, '')
  clean = clean.replace(/^_dmarc\./i, '')
  clean = clean.replace(/\.$/, '')
  return clean
}

export async function checkDmarcDomain(inputDomain: string): Promise<DmarcCheckOutcome> {
  const domain = cleanDomainInput(inputDomain)
  if (!domain) {
    throw new Error('Please enter a valid domain name.')
  }

  const orgDomain = getOrganizationalDomain(domain)
  const primaryHost = `_dmarc.${domain}`

  // 1. Query primary hostname
  const res = await resolveDns(primaryHost, 'TXT')
  const txtAnswers = answersOfType(res, 'TXT')

  // Extract raw strings, clean quotes
  const dmarcRecords = txtAnswers
    .map((a) => a.data.replace(/^"|"$/g, '').trim())
    .filter((txt) => /v\s*=\s*DMARC1/i.test(txt))

  // If found at primary host
  if (dmarcRecords.length > 0) {
    const validation = parseDmarcRecord(dmarcRecords[0], domain, dmarcRecords.length)
    return {
      queriedHost: primaryHost,
      effectiveHost: primaryHost,
      domain,
      orgDomain,
      fallbackToOrgDomain: false,
      dnssecValidated: res.dnssecValidated,
      resolver: res.resolver,
      rawRecords: dmarcRecords,
      validation,
    }
  }

  // 2. If subdomain and no record found, fallback to Organizational Domain
  if (domain !== orgDomain) {
    const orgHost = `_dmarc.${orgDomain}`
    try {
      const orgRes = await resolveDns(orgHost, 'TXT')
      const orgTxtAnswers = answersOfType(orgRes, 'TXT')
      const orgDmarcRecords = orgTxtAnswers
        .map((a) => a.data.replace(/^"|"$/g, '').trim())
        .filter((txt) => /v\s*=\s*DMARC1/i.test(txt))

      if (orgDmarcRecords.length > 0) {
        const validation = parseDmarcRecord(orgDmarcRecords[0], orgDomain, orgDmarcRecords.length)
        return {
          queriedHost: primaryHost,
          effectiveHost: orgHost,
          domain,
          orgDomain,
          fallbackToOrgDomain: true,
          dnssecValidated: orgRes.dnssecValidated,
          resolver: orgRes.resolver,
          rawRecords: orgDmarcRecords,
          validation,
        }
      }
    } catch {
      // Fallback failed or org domain has no record
    }
  }

  // 3. No DMARC record found at either
  const emptyValidation = parseDmarcRecord('', domain, 0)
  return {
    queriedHost: primaryHost,
    effectiveHost: primaryHost,
    domain,
    orgDomain,
    fallbackToOrgDomain: false,
    dnssecValidated: res.dnssecValidated,
    resolver: res.resolver,
    rawRecords: [],
    validation: emptyValidation,
  }
}
