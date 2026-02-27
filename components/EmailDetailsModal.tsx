'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, CheckCircle2, XCircle, AlertTriangle, HelpCircle, Shield, ShieldAlert, Server, Mail, ExternalLink } from 'lucide-react'

export type PublicEmailValidationResult = {
  email: string
  status: string
  is_valid: boolean
  risk_level: string
  deliverability_score: number
  details: {
    general: {
      domain: string
      reason: string
      validation_method: string
    }
    attributes: {
      free_email: boolean
      role_account: boolean
      disposable: boolean
      catch_all: boolean
      has_plus_tag: boolean
      mailbox_full: boolean
      no_reply: boolean
    }
    mail_server: {
      smtp_provider: string | null
      mx_record: string | null
      implicit_mx: string | null
    }
    blacklist: {
      is_blacklisted: boolean
      blacklists_found: string[]
      blacklist_reasons: string[]
      reputation_score: number
      last_checked: string
    }
    sub_status: string | null
  }
}

interface Props {
  open: boolean
  onClose: () => void
  emailDetails: PublicEmailValidationResult
}

const statusConfig: Record<string, { label: string; color: string; bg: string; border: string; icon: typeof CheckCircle2 }> = {
  deliverable: {
    label: 'Deliverable',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: CheckCircle2,
  },
  risky: {
    label: 'Risky',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: AlertTriangle,
  },
  undeliverable: {
    label: 'Undeliverable',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
    icon: XCircle,
  },
  unknown: {
    label: 'Unknown',
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    icon: HelpCircle,
  },
}

const riskConfig: Record<string, { label: string; color: string; bg: string }> = {
  low:    { label: 'Low Risk',    color: 'text-emerald-700', bg: 'bg-emerald-50' },
  medium: { label: 'Medium Risk', color: 'text-amber-700',   bg: 'bg-amber-50'   },
  high:   { label: 'High Risk',   color: 'text-rose-700',    bg: 'bg-rose-50'    },
}

function scoreColor(score: number) {
  if (score >= 80) return 'bg-emerald-500'
  if (score >= 50) return 'bg-amber-400'
  return 'bg-rose-500'
}

function Attribute({ label, value, goodWhenFalse = false }: { label: string; value: boolean; goodWhenFalse?: boolean }) {
  const isGood = goodWhenFalse ? !value : value
  return (
    <div className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium border ${
      isGood
        ? 'bg-emerald-50 border-emerald-100 text-emerald-700'
        : 'bg-rose-50 border-rose-100 text-rose-700'
    }`}>
      {isGood
        ? <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
        : <XCircle className="w-3.5 h-3.5 flex-shrink-0" />
      }
      {label}
    </div>
  )
}

export default function EmailDetailsModal({ open, onClose, emailDetails }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open || !mounted) return null

  const status = statusConfig[emailDetails.status] ?? statusConfig.unknown
  const risk   = riskConfig[emailDetails.risk_level] ?? riskConfig.medium
  const StatusIcon = status.icon
  const score  = emailDetails.deliverability_score ?? 0
  const { attributes, mail_server, blacklist, general } = emailDetails.details

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className={`px-6 pt-6 pb-4 ${status.bg} border-b ${status.border}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${status.bg} border-2 ${status.border}`}>
                <StatusIcon className={`w-5 h-5 ${status.color}`} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Verification Result</p>
                <p className="text-sm font-semibold text-slate-800 truncate">{emailDetails.email}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 rounded-full hover:bg-black/10 transition-colors"
            >
              <X className="w-4 h-4 text-slate-600" />
            </button>
          </div>

          {/* Status + Risk badges */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${status.bg} ${status.color} ${status.border}`}>
              <StatusIcon className="w-3 h-3" />
              {status.label}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${risk.bg} ${risk.color}`}>
              {risk.label}
            </span>
            {general.validation_method && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                via {general.validation_method.toUpperCase()}
              </span>
            )}
          </div>
        </div>

        <div className="px-6 py-5 space-y-5">

          {/* Deliverability Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Deliverability Score</span>
              <span className="text-lg font-bold text-slate-900">{score}<span className="text-sm font-medium text-slate-400">/100</span></span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${scoreColor(score)}`}
                style={{ width: `${score}%` }}
              />
            </div>
            {general.reason && (
              <p className="mt-2 text-xs text-slate-500">{general.reason}</p>
            )}
          </div>

          {/* Attributes */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Email Attributes</p>
            <div className="grid grid-cols-2 gap-2">
              <Attribute label="Not Disposable"   value={attributes.disposable}   goodWhenFalse />
              <Attribute label="Not Role Account" value={attributes.role_account}  goodWhenFalse />
              <Attribute label="Not Free Email"   value={attributes.free_email}    goodWhenFalse />
              <Attribute label="Mailbox Available" value={attributes.mailbox_full} goodWhenFalse />
              <Attribute label="No Plus Tag"      value={attributes.has_plus_tag}  goodWhenFalse />
              <Attribute label="Not Catch-All"    value={attributes.catch_all}     goodWhenFalse />
            </div>
          </div>

          {/* Mail Server */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Server className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Mail Server</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500 text-xs">Domain</span>
                <span className="font-medium text-slate-800 text-xs">{general.domain}</span>
              </div>
              {mail_server.smtp_provider && (
                <div className="flex justify-between gap-2">
                  <span className="text-slate-500 text-xs">Provider</span>
                  <span className="font-medium text-slate-800 text-xs capitalize">{mail_server.smtp_provider}</span>
                </div>
              )}
              {mail_server.mx_record && (
                <div className="flex justify-between gap-2 items-start">
                  <span className="text-slate-500 text-xs flex-shrink-0">MX Record</span>
                  <span className="font-medium text-slate-800 text-xs text-right truncate max-w-[60%]">{mail_server.mx_record}</span>
                </div>
              )}
            </div>
          </div>

          {/* Blacklist */}
          <div className={`rounded-2xl border p-4 ${blacklist.is_blacklisted ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50 border-emerald-100'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {blacklist.is_blacklisted
                  ? <ShieldAlert className="w-4 h-4 text-rose-600" />
                  : <Shield className="w-4 h-4 text-emerald-600" />
                }
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">Blacklist Status</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold ${blacklist.is_blacklisted ? 'text-rose-700' : 'text-emerald-700'}`}>
                  {blacklist.is_blacklisted ? 'Blacklisted' : 'Clean'}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${blacklist.is_blacklisted ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {blacklist.reputation_score}/100
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 p-5 text-center">
            <Mail className="w-8 h-8 text-primary-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-800 mb-1">Need to verify your full list?</p>
            <p className="text-xs text-slate-500 mb-4">Upload CSV files, verify in bulk, and get detailed reports — all in the app.</p>
            <a
              href="https://emailverifier.targetpulse.net/sign-up"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl text-sm font-semibold hover:from-primary-700 hover:to-primary-800 hover:shadow-lg transition-all duration-200"
            >
              Start verifying for free
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
