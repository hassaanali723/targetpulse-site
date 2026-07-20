'use client'

import React from 'react'
import { Plug, ArrowRight, Clock } from 'lucide-react'

type Integration = {
  name: string
  slug: string
  comingSoon?: boolean
}

const integrations: Integration[] = [
  { name: 'Mailchimp',        slug: 'mailchimp' },
  { name: 'Mailgun',          slug: 'mailgun' },
  { name: 'Mailjet',          slug: 'mailjet' },
  { name: 'SendGrid',         slug: 'sendgrid' },
  { name: 'ActiveCampaign',   slug: 'activecampaign' },
  { name: 'Campaign Monitor', slug: 'campaignmonitor' },
  { name: 'GetResponse',      slug: 'getresponse' },
  { name: 'AWeber',           slug: 'aweber' },
  { name: 'MailerLite',       slug: 'mailerlite' },
  { name: 'Drip',             slug: 'drip' },
  { name: 'Elastic Email',    slug: 'elasticemail' },
  { name: 'HubSpot',          slug: 'hubspot',  comingSoon: true },
  { name: 'Zoho CRM',         slug: 'zoho',     comingSoon: true },
  { name: 'Reply',            slug: 'reply',    comingSoon: true },
]

export default function HomeIntegrationsSection() {
  return (
    <div className="mt-14 md:mt-24 pt-12 md:pt-16 border-t border-slate-100">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-200/60 bg-primary-50/80 px-3 py-1 mb-4">
          <Plug className="w-3 h-3 text-primary-600" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-700">Integrations</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] text-slate-900 mb-3">
          Pull emails from the tools you already use
        </h2>
        <p className="text-[15px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Connect your CRM and email marketing platforms directly — import contacts in one click,
          verify in Giggal.ai, and keep your lists clean without manual exports.
        </p>
      </div>

      {/* Logo grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {integrations.map((i) => (
          <div
            key={i.slug}
            className={`group relative flex flex-col items-center justify-center gap-2 rounded-2xl border bg-white p-4 transition-all duration-300 ${
              i.comingSoon
                ? 'border-slate-100 opacity-70 hover:opacity-100'
                : 'border-slate-100 hover:border-primary-300/60 hover:shadow-[0_6px_24px_rgba(79, 70, 229,0.10)] hover:-translate-y-0.5'
            }`}
          >
            {/* Coming Soon badge */}
            {i.comingSoon && (
              <span className="absolute top-2 right-2 inline-flex items-center gap-0.5 text-[8px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-200/70 px-1.5 py-0.5 rounded-full">
                <Clock className="w-2 h-2" />
                Soon
              </span>
            )}

            {/* Logo */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white transition-transform duration-200 ${
              !i.comingSoon ? 'group-hover:scale-110' : ''
            }`}>
              <img
                src={`/integrations/${i.slug}.png`}
                alt={`${i.name} logo`}
                className={`w-full h-full object-contain ${i.comingSoon ? 'grayscale-[40%]' : ''}`}
                loading="lazy"
              />
            </div>

            {/* Name */}
            <div className="text-[12px] font-semibold text-slate-700 text-center leading-tight">
              {i.name}
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-10 flex items-center justify-center gap-2 text-[13px] text-slate-500">
        <span>Don&apos;t see your tool?</span>
        <a
          href="/contact-us"
          className="inline-flex items-center gap-1 font-semibold text-primary-700 hover:text-primary-800 transition-colors"
        >
          Request an integration
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
