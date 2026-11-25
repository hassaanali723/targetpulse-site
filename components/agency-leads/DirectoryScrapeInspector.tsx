'use client'

import { useState } from 'react'
import { Check, HelpCircle, Server, ShieldAlert, X, MailCheck } from 'lucide-react'

export type PlatformKey = 'hub' | 'clutch' | 'g2' | 'capterra' | 'goodfirms'

type ScrapeSample = {
  id: string
  company: string
  email: string
  sourceHint: string
  legacyStatus: 'Risky' | 'Unknown' | 'Accept-All'
  giggalStatus: 'Deliverable' | 'Undeliverable' | 'Role-Based' | 'Unknown (Refunded)'
  tone: 'good' | 'bad' | 'warn' | 'muted'
  mxHost: string
  protocolTrace: string[]
  explanation: string
}

const SAMPLES: Record<PlatformKey, { fileName: string; rows: ScrapeSample[] }> = {
  hub: {
    fileName: 'b2b_directory_sample.csv',
    rows: [
      {
        id: 'hub-1',
        company: 'Sample Studio (Clutch Export)',
        email: 'partner@agency-studio.example',
        sourceHint: 'Agency partner on catch-all Workspace domain',
        legacyStatus: 'Risky',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['MX lookup: Google Workspace', 'Catch-all server detected', 'Mailbox valid (98.5% accuracy)'],
        explanation: 'Typical catch-all Workspace agency domain. Standard checkers stop at Risky; Giggal.ai verifies the partner mailbox is deliverable.',
      },
      {
        id: 'hub-2',
        company: 'Sample SaaS (G2 Export)',
        email: 'reviewer@saas-vendor.example',
        sourceHint: 'Historical reviewer corporate alias',
        legacyStatus: 'Accept-All',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'mxa.seg-gateway.example',
        protocolTrace: ['Gateway detected: SEG filter', 'Deep mailbox check ran', 'Mailbox does not exist'],
        explanation: 'Former corporate account behind a security gateway. Giggal.ai detects that the underlying mailbox is inactive so you avoid a bounce.',
      },
      {
        id: 'hub-3',
        company: 'Sample App (Capterra Export)',
        email: 'support@b2b-software.example',
        sourceHint: 'Extracted from profile CTA',
        legacyStatus: 'Unknown',
        giggalStatus: 'Role-Based',
        tone: 'warn',
        mxHost: 'mail.b2b-software.example',
        protocolTrace: ['Domain MX confirmed', 'Flag: role_account = true', 'Separate from personal outreach'],
        explanation: 'Capterra listings frequently link to shared support@ desks. Giggal.ai flags role-based inboxes so sales teams filter them cleanly.',
      },
      {
        id: 'hub-4',
        company: 'Sample Dev Shop (GoodFirms Export)',
        email: 'director@offshore-dev.example',
        sourceHint: 'Shared Linux host with 451 greylisting',
        legacyStatus: 'Unknown',
        giggalStatus: 'Unknown (Refunded)',
        tone: 'muted',
        mxHost: 'mail.offshore-dev.example',
        protocolTrace: ['Server returned 451 defer', 'Marked Unknown cleanly', '1 credit refunded to retry later'],
        explanation: 'When shared hosting defers checks via greylisting, Giggal.ai marks the row Unknown and refunds your credit so you can retry later.',
      },
    ],
  },
  clutch: {
    fileName: 'clutch_agencies_sample.csv',
    rows: [
      {
        id: 'cl-1',
        company: 'Illustrative Design Studio',
        email: 'founder@design-studio.example',
        sourceHint: 'Co-Founder scraped from Team page',
        legacyStatus: 'Risky',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['MX: Google Workspace', 'Catch-all domain detected', 'Mailbox confirmed valid'],
        explanation: 'Many Clutch agencies enable catch-all routing on Google Workspace. Instead of leaving it Risky, Giggal.ai confirms the mailbox receives mail.',
      },
      {
        id: 'cl-2',
        company: 'Illustrative Web Shop',
        email: 'credits@theme-vendor.example',
        sourceHint: 'Crawled from website footer credit',
        legacyStatus: 'Risky',
        giggalStatus: 'Role-Based',
        tone: 'warn',
        mxHost: 'mx.theme-vendor.example',
        protocolTrace: ['Domain differs from agency', 'Flag: role_account = true', 'Filter before sequencing'],
        explanation: 'Website crawlers often pick up external theme footer aliases or generic addresses. Reviewing the domain and role flag prevents misdirected pitches.',
      },
      {
        id: 'cl-3',
        company: 'Illustrative Marketing Group',
        email: 'alex.former@marketing-agency.example',
        sourceHint: 'Former VP Growth (account closed)',
        legacyStatus: 'Accept-All',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'agency-example.mail.protection.outlook.com',
        protocolTrace: ['MX: Microsoft 365', 'Mailbox check ran past catch-all', 'No live mailbox found'],
        explanation: 'Agency staff turnover turns old directory contacts into dead aliases. Giggal.ai flags the closed mailbox on Microsoft 365 so you avoid a bounce.',
      },
      {
        id: 'cl-4',
        company: 'Illustrative Digital Partner',
        email: 'careers@digital-partner.example',
        sourceHint: 'Extracted from Join Us footer link',
        legacyStatus: 'Unknown',
        giggalStatus: 'Role-Based',
        tone: 'warn',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['Mailbox confirmed active', 'Flag: role_account = true', 'Remove for cold outreach'],
        explanation: 'Shared recruitment aliases like careers@ or jobs@ rarely belong to buyers. The role-based flag lets you filter them out in one click.',
      },
    ],
  },
  g2: {
    fileName: 'g2_vendors_reviewers_sample.csv',
    rows: [
      {
        id: 'g2-1',
        company: 'Illustrative SaaS Vendor',
        email: 'vp.sales@saas-vendor.example',
        sourceHint: 'Executive behind Proofpoint gateway',
        legacyStatus: 'Unknown',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'mxa.pphosted.example',
        protocolTrace: ['Gateway: Proofpoint SEG', 'Direct gateway check ran', 'Mailbox confirmed deliverable'],
        explanation: 'Enterprise software companies often sit behind Proofpoint or Mimecast gateways. Ordinary tools return Unknown; Giggal.ai verifies directly.',
      },
      {
        id: 'g2-2',
        company: 'Illustrative Analytics Co',
        email: 'past.reviewer@analytics-co.example',
        sourceHint: 'Corporate reviewer who switched jobs',
        legacyStatus: 'Risky',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['Catch-all domain checked', 'Mailbox test failed', 'Closed employee inbox flagged'],
        explanation: 'Tech reviewers frequently change companies after leaving a G2 review. Giggal.ai checks past catch-all routing and flags the closed inbox.',
      },
      {
        id: 'g2-3',
        company: 'Illustrative Acquired Tool',
        email: 'founders@acquired-tool.example',
        sourceHint: 'Sunset startup listed on G2',
        legacyStatus: 'Unknown',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'No active MX record',
        protocolTrace: ['DNS MX lookup executed', 'No active mail server found', 'Domain marked undeliverable'],
        explanation: 'After startup acquisitions or shutdowns, websites often redirect while email routing is turned off. Sending here causes instant hard bounces.',
      },
      {
        id: 'g2-4',
        company: 'Illustrative Cloud Vendor',
        email: 'cto@cloud-vendor.example',
        sourceHint: 'Mimecast protected vendor domain',
        legacyStatus: 'Accept-All',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'us-inbound.mimecast.example',
        protocolTrace: ['Gateway: Mimecast SEG', 'Mailbox signals checked', 'Executive inbox confirmed'],
        explanation: 'Mimecast often accepts test recipients across a domain. Giggal.ai verifies past the Secure Email Gateway to confirm the inbox is real.',
      },
    ],
  },
  capterra: {
    fileName: 'capterra_software_sample.csv',
    rows: [
      {
        id: 'cap-1',
        company: 'Illustrative ERP Vendor',
        email: 'cro@erp-vendor.example',
        sourceHint: 'Software executive on catch-all domain',
        legacyStatus: 'Risky',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['MX: Google Workspace', 'Catch-all server resolved', 'Mailbox confirmed valid'],
        explanation: 'Many B2B software vendors run Google Workspace catch-all domains. Giggal.ai resolves risky tags to a clear Deliverable result.',
      },
      {
        id: 'cap-2',
        company: 'Illustrative Legacy Tool',
        email: 'contact@retired-app.example',
        sourceHint: 'Inactive software listing on directory',
        legacyStatus: 'Unknown',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'No active MX record',
        protocolTrace: ['DNS lookup failed / parked', 'Zero working MX hosts', 'Zombie domain purged'],
        explanation: 'Discontinued software tools can remain indexed in directories for years. Real-time DNS and MX checks remove expired domains safely.',
      },
      {
        id: 'cap-3',
        company: 'Illustrative Helpdesk SaaS',
        email: 'support@b2b-tool.example',
        sourceHint: 'Extracted from profile Support CTA',
        legacyStatus: 'Unknown',
        giggalStatus: 'Role-Based',
        tone: 'warn',
        mxHost: 'mx.helpdesk.example',
        protocolTrace: ['Mailbox reachable', 'Flag: role_account = true', 'Shared support inbox flagged'],
        explanation: 'Directory listings commonly point to customer ticketing desks like support@ or help@. Filter role-based accounts before cold outreach.',
      },
      {
        id: 'cap-4',
        company: 'Illustrative Malformed Row',
        email: 'bad-scrape-url?utm=capterra',
        sourceHint: 'Scraper parsing error in CSV',
        legacyStatus: 'Unknown',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'Syntax check rejected',
        protocolTrace: ['RFC syntax check failed', 'Tracking string detected', 'Removed with 1 clean pass'],
        explanation: 'Scrapers copying tracking query strings into email columns create broken rows. Syntax validation removes malformed entries automatically.',
      },
    ],
  },
  goodfirms: {
    fileName: 'goodfirms_it_sample.csv',
    rows: [
      {
        id: 'gf-1',
        company: 'Illustrative IT Consultancy',
        email: 'director@it-consultancy.example',
        sourceHint: 'Managing Director on Workspace catch-all',
        legacyStatus: 'Accept-All',
        giggalStatus: 'Deliverable',
        tone: 'good',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['MX: Google Workspace', 'Catch-all check completed', 'Executive inbox confirmed'],
        explanation: 'Confirmed deliverable on an IT service domain configured as catch-all without sending any email to the prospect.',
      },
      {
        id: 'gf-2',
        company: 'Illustrative Dev Agency',
        email: 'dev@shared-cpanel.example',
        sourceHint: 'Shared cPanel host issuing 451 defer',
        legacyStatus: 'Unknown',
        giggalStatus: 'Unknown (Refunded)',
        tone: 'muted',
        mxHost: 'mail.shared-cpanel.example',
        protocolTrace: ['Host returned 451 greylist', 'Tagged Unknown honestly', 'Credit refunded automatically'],
        explanation: 'Offshore shared servers often enforce greylisting that delays new lookups. Unknown rows are refunded automatically so you can retry later.',
      },
      {
        id: 'gf-3',
        company: 'Illustrative Regional Studio',
        email: 'lead@expired-agency.example',
        sourceHint: 'Lapsed international agency domain',
        legacyStatus: 'Unknown',
        giggalStatus: 'Undeliverable',
        tone: 'bad',
        mxHost: 'NXDOMAIN (no DNS)',
        protocolTrace: ['Domain DNS lookup failed', 'No mail exchanger present', 'Hard bounce prevented'],
        explanation: 'Smaller consultancies frequently let secondary domains lapse. Authoritative DNS checks eliminate expired domains before dispatch.',
      },
      {
        id: 'gf-4',
        company: 'Illustrative Engineering Firm',
        email: 'hr@engineering-firm.example',
        sourceHint: 'Scraped from agency Careers portal',
        legacyStatus: 'Risky',
        giggalStatus: 'Role-Based',
        tone: 'warn',
        mxHost: 'aspmx.l.google.com',
        protocolTrace: ['Mailbox confirmed reachable', 'Flag: role_account = true', 'HR alias segregated'],
        explanation: 'Valid inbox on an engineering firm domain, but strictly used for developer hiring rather than B2B software buying.',
      },
    ],
  },
}

const TONE_BADGE = {
  good: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  bad: 'bg-rose-50 text-rose-700 ring-rose-200',
  warn: 'bg-amber-50 text-amber-700 ring-amber-200',
  muted: 'bg-slate-100 text-slate-600 ring-slate-200',
}

export default function DirectoryScrapeInspector({ platform }: { platform: PlatformKey }) {
  const dataset = SAMPLES[platform]
  const [selectedId, setSelectedId] = useState(dataset.rows[0].id)
  const active = dataset.rows.find((r) => r.id === selectedId) ?? dataset.rows[0]

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 bg-[radial-gradient(closest-side_at_30%_35%,rgba(199,210,254,0.55),transparent),radial-gradient(closest-side_at_75%_75%,rgba(167,243,208,0.45),transparent)] pointer-events-none"
      />
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-[0_30px_70px_-30px_rgba(30,27,75,0.32)] overflow-hidden text-left">
        <div className="flex items-center justify-between gap-2 px-4 h-10 border-b border-slate-100 bg-slate-50/90">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-300 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300 shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 shrink-0" />
            <span className="ml-1.5 text-[11px] font-semibold text-slate-500 truncate font-mono">
              {dataset.fileName} (illustrative)
            </span>
          </div>
          <span className="text-[11px] font-bold text-indigo-600 shrink-0">Click a row to inspect</span>
        </div>

        <div className="p-3 divide-y divide-slate-100">
          {dataset.rows.map((row) => {
            const isSelected = row.id === active.id
            return (
              <button
                key={row.id}
                type="button"
                onClick={() => setSelectedId(row.id)}
                className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                  isSelected ? 'bg-indigo-50/80 ring-1 ring-indigo-200' : 'hover:bg-slate-50'
                }`}
              >
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-slate-900 truncate">{row.email}</p>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {row.company} | {row.sourceHint}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-[10px] font-semibold text-slate-400 line-through">
                    {row.legacyStatus}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[11px] font-bold ring-1 ring-inset ${
                      TONE_BADGE[row.tone]
                    }`}
                  >
                    {row.tone === 'good' && <Check className="w-3 h-3" strokeWidth={3} />}
                    {row.tone === 'bad' && <X className="w-3 h-3" strokeWidth={3} />}
                    {row.tone === 'warn' && <ShieldAlert className="w-3 h-3" />}
                    {row.tone === 'muted' && <HelpCircle className="w-3 h-3" />}
                    {row.giggalStatus}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="bg-slate-900 text-slate-200 p-4 sm:p-5 border-t border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-1.5 font-mono text-indigo-300">
              <Server className="w-3.5 h-3.5" />
              <span>MX Host: {active.mxHost}</span>
            </div>
            <span className="text-slate-400 font-medium">
              Other tools say: <strong className="text-amber-300">{active.legacyStatus}</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {active.protocolTrace.map((step, idx) => (
              <div
                key={step}
                className="rounded-lg bg-slate-800/80 border border-slate-700/80 px-2.5 py-2 text-[11px] font-medium text-slate-200 flex items-start gap-1.5"
              >
                <span className="text-emerald-400 font-bold">{idx + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-1 flex items-start gap-2">
            <MailCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{active.explanation}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
