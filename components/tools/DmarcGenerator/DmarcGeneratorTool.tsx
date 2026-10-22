'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Copy, Check, AlertTriangle, Info, ChevronDown, FileCheck } from 'lucide-react'
import {
  generateDmarcRecord,
  cleanDmarcRecord,
  normalizeDomainInput,
  validateMailtoList,
  type DmarcPolicy,
  type DmarcAlignment,
  type DmarcFailureOption,
  type CleanedDmarcResult,
} from '@/lib/tools/dmarcGeneratorCore'
import { dmarcToolStrings, dmarcWarningText, dmarcChangeText, type DmarcToolStrings } from '@/lib/i18n/tools/dmarcToolStrings'
import type { Locale } from '@/lib/i18n/clusters'

// The three policy levels, in the order a domain should move through them.
// Their names and descriptions live in lib/i18n/tools/dmarcToolStrings.ts.
const POLICIES: DmarcPolicy[] = ['none', 'quarantine', 'reject']
const FAILURE_OPTIONS: DmarcFailureOption[] = ['0', '1', 'd', 's']

// Record syntax, so it stays the same in every language.
const IMPORT_PLACEHOLDER = 'v=DMARC1; p=quarantine; pct=50; rua=mailto:dmarc@example.com'

/** Fills the {slot} markers of a strings-file template with text or elements. */
function fill(template: string, slots: Record<string, React.ReactNode>): React.ReactNode[] {
  return template.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part)
    return m && m[1] in slots ? <React.Fragment key={i}>{slots[m[1]]}</React.Fragment> : part
  })
}

const inputClass =
  'w-full text-sm px-3.5 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono'
const selectClass = 'w-full text-sm px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-700'
const advLabelClass = 'block text-xs font-bold text-slate-700 mb-1'

function StepNumber({ n }: { n: number }) {
  return (
    <span className="w-6 h-6 shrink-0 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
      {n}
    </span>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[11px] font-semibold text-slate-400">{children}</span>
}

function CopyButton({
  text,
  id,
  copiedField,
  onCopy,
  t,
}: {
  text: string
  id: string
  copiedField: string | null
  onCopy: (text: string, id: string) => void
  t: DmarcToolStrings
}) {
  const copied = copiedField === id
  return (
    <button
      type="button"
      onClick={() => onCopy(text, id)}
      className="shrink-0 text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-semibold"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
      <span className={copied ? 'text-emerald-400' : ''}>{copied ? t.copied : t.copy}</span>
    </button>
  )
}

function Warnings({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1.5">
      {items.map((w) => (
        <div key={w} className="text-xs md:text-sm text-amber-900 flex items-start gap-2 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>{w}</span>
        </div>
      ))}
    </div>
  )
}

// The last "what to do next" step changes with the level the user picked.
function nextLevelText(policy: DmarcPolicy, hasReports: boolean, t: DmarcToolStrings): string {
  if (!hasReports) {
    return t.nextLevel.noReports
  }
  if (policy === 'none') {
    return t.nextLevel.none
  }
  if (policy === 'quarantine') {
    return t.nextLevel.quarantine
  }
  return t.nextLevel.reject
}

export default function DmarcGeneratorTool({ locale = 'en' }: { locale?: Locale }) {
  const t = dmarcToolStrings(locale)
  // The three steps
  const [domain, setDomain] = useState('')
  const [aggregateReports, setAggregateReports] = useState('')
  const [policy, setPolicy] = useState<DmarcPolicy>('none')

  // Advanced settings
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [testingMode, setTestingMode] = useState(false)
  const [subdomainPolicy, setSubdomainPolicy] = useState<DmarcPolicy | 'inherit'>('inherit')
  const [nonExistentSubdomainPolicy, setNonExistentSubdomainPolicy] = useState<DmarcPolicy | 'none_specified'>('none_specified')
  const [dkimAlignment, setDkimAlignment] = useState<DmarcAlignment>('r')
  const [spfAlignment, setSpfAlignment] = useState<DmarcAlignment>('r')
  const [failureReports, setFailureReports] = useState('')
  const [failureOptions, setFailureOptions] = useState<DmarcFailureOption>('0')

  // Checking an existing record
  const [showCleaner, setShowCleaner] = useState(false)
  const [importText, setImportText] = useState('')
  const [cleanerResult, setCleanerResult] = useState<CleanedDmarcResult | null>(null)

  const [copiedField, setCopiedField] = useState<string | null>(null)

  const result = useMemo(
    () =>
      generateDmarcRecord({
        domain,
        policy,
        subdomainPolicy,
        nonExistentSubdomainPolicy,
        aggregateReports,
        failureReports,
        dkimAlignment,
        spfAlignment,
        // fo only matters when failure reports go somewhere.
        failureOptions: failureReports.trim() ? failureOptions : '0',
        // t=y does nothing on p=none, so it is only written for stricter levels.
        testingMode: testingMode && policy !== 'none',
      }),
    [
      domain,
      policy,
      subdomainPolicy,
      nonExistentSubdomainPolicy,
      aggregateReports,
      failureReports,
      dkimAlignment,
      spfAlignment,
      failureOptions,
      testingMode,
    ]
  )

  const cleanDomain = normalizeDomainInput(domain)
  // Loose on purpose: any labels separated by dots, so accented domains pass.
  const domainLooksWrong = cleanDomain !== '' && !/^[^\s.@/:]+(\.[^\s.@/:]+)+$/.test(cleanDomain)
  const ruaInvalid = !validateMailtoList(aggregateReports).valid
  const rufInvalid = !validateMailtoList(failureReports).valid
  const hasReports = aggregateReports.trim() !== '' && !ruaInvalid

  const handleClean = () => {
    if (!importText.trim()) return
    setCleanerResult(cleanDmarcRecord(importText, domain))
  }

  const handleCopy = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopiedField(fieldId)
    setTimeout(() => setCopiedField(null), 2500)
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">

      <div className="p-5 md:p-8 space-y-8">
        {/* Steps 1 and 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="dmarc-domain" className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <StepNumber n={1} />
              {t.domainLabel}
            </label>
            <input
              id="dmarc-domain"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder={t.domainPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className={`${inputClass} ${domainLooksWrong ? 'border-rose-400' : 'border-slate-300'}`}
            />
            <p className={`text-xs leading-relaxed ${domainLooksWrong ? 'text-rose-600 font-semibold' : 'text-slate-500'}`}>
              {domainLooksWrong ? t.domainInvalid : t.domainHelp}
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="dmarc-rua" className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <StepNumber n={2} />
              {t.ruaLabel}
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                {t.recommended}
              </span>
            </label>
            <input
              id="dmarc-rua"
              type="email"
              value={aggregateReports}
              onChange={(e) => setAggregateReports(e.target.value)}
              placeholder={cleanDomain && !domainLooksWrong ? `dmarc@${cleanDomain}` : t.ruaPlaceholder}
              autoComplete="off"
              spellCheck={false}
              className={`${inputClass} ${ruaInvalid ? 'border-rose-400' : 'border-slate-300'}`}
            />
            <p className={`text-xs leading-relaxed ${ruaInvalid ? 'text-rose-600 font-semibold' : 'text-slate-500'}`}>
              {ruaInvalid ? t.ruaInvalid : t.ruaHelp}
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <fieldset className="space-y-3">
          <legend className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <StepNumber n={3} />
            {t.policyLegend}
          </legend>
          <p className="text-xs text-slate-500 leading-relaxed">{t.policyIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {POLICIES.map((value) => {
              const opt = { value, ...t.policies[value] }
              const selected = policy === opt.value
              return (
                <label
                  key={opt.value}
                  className={`relative block p-4 rounded-xl border cursor-pointer transition-all ${
                    selected
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="dmarc-policy"
                    value={opt.value}
                    checked={selected}
                    onChange={() => setPolicy(opt.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selected ? 'border-indigo-600' : 'border-slate-300'
                        }`}
                      >
                        {selected && <span className="w-2 h-2 rounded-full bg-indigo-600" />}
                      </span>
                      {opt.title}
                    </span>
                    {opt.value === 'none' && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded">
                        {t.startHere}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{opt.text}</p>
                  <div className="mt-2">
                    {/* One string, so the HTML holds "p=quarantine" as a single word. */}
                    <Tag>{`p=${opt.value}`}</Tag>
                  </div>
                </label>
              )
            })}
          </div>
        </fieldset>

        {/* Advanced settings */}
        <div>
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            aria-expanded={showAdvanced}
            className="flex items-start gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 text-left"
          >
            <ChevronDown className={`w-4 h-4 mt-0.5 shrink-0 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
            <span>
              {t.advancedTitle}
              <span className="block font-medium text-slate-500 text-xs mt-0.5">{t.advancedHint}</span>
            </span>
          </button>

          {showAdvanced && (
            <div className="mt-4 p-4 md:p-5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Test mode */}
              <div className="md:col-span-2">
                <label
                  className={`flex items-start gap-2.5 text-sm ${
                    policy === 'none' ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={testingMode && policy !== 'none'}
                    disabled={policy === 'none'}
                    onChange={(e) => setTestingMode(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                  />
                  <span>
                    <span className="font-bold text-slate-800">{t.testMode}</span> <Tag>t=y</Tag>
                    <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {policy === 'none' ? t.testModeDisabled : t.testModeHelp}
                    </span>
                  </span>
                </label>
              </div>

              <div>
                <label htmlFor="dmarc-sp" className={advLabelClass}>
                  {t.spLabel} <Tag>sp=</Tag>
                </label>
                <select
                  id="dmarc-sp"
                  value={subdomainPolicy}
                  onChange={(e) => setSubdomainPolicy(e.target.value as DmarcPolicy | 'inherit')}
                  className={selectClass}
                >
                  <option value="inherit">{t.spInherit}</option>
                  {POLICIES.map((value) => (
                    <option key={value} value={value}>
                      {t.policies[value].title}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1">{t.spHelp}</p>
              </div>

              <div>
                <label htmlFor="dmarc-np" className={advLabelClass}>
                  {t.npLabel} <Tag>np=</Tag>
                </label>
                <select
                  id="dmarc-np"
                  value={nonExistentSubdomainPolicy}
                  onChange={(e) => setNonExistentSubdomainPolicy(e.target.value as DmarcPolicy | 'none_specified')}
                  className={selectClass}
                >
                  <option value="none_specified">{t.npInherit}</option>
                  {POLICIES.map((value) => (
                    <option key={value} value={value}>
                      {t.policies[value].title}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1">{t.npHelp}</p>
              </div>

              <div>
                <label htmlFor="dmarc-adkim" className={advLabelClass}>
                  {t.adkimLabel} <Tag>adkim=</Tag>
                </label>
                <select
                  id="dmarc-adkim"
                  value={dkimAlignment}
                  onChange={(e) => setDkimAlignment(e.target.value as DmarcAlignment)}
                  className={selectClass}
                >
                  <option value="r">{t.alignRelaxed}</option>
                  <option value="s">{t.alignStrict}</option>
                </select>
              </div>

              <div>
                <label htmlFor="dmarc-aspf" className={advLabelClass}>
                  {t.aspfLabel} <Tag>aspf=</Tag>
                </label>
                <select
                  id="dmarc-aspf"
                  value={spfAlignment}
                  onChange={(e) => setSpfAlignment(e.target.value as DmarcAlignment)}
                  className={selectClass}
                >
                  <option value="r">{t.alignRelaxed}</option>
                  <option value="s">{t.alignStrict}</option>
                </select>
              </div>

              <div>
                <label htmlFor="dmarc-ruf" className={advLabelClass}>
                  {t.rufLabel} <Tag>ruf=</Tag>
                </label>
                <input
                  id="dmarc-ruf"
                  type="email"
                  value={failureReports}
                  onChange={(e) => setFailureReports(e.target.value)}
                  placeholder={t.rufPlaceholder}
                  autoComplete="off"
                  spellCheck={false}
                  className={`${selectClass} font-mono ${rufInvalid ? 'border-rose-400' : ''}`}
                />
                <p className="text-xs text-slate-500 mt-1">{t.rufHelp}</p>
              </div>

              <div>
                <label htmlFor="dmarc-fo" className={advLabelClass}>
                  {t.foLabel} <Tag>fo=</Tag>
                </label>
                <select
                  id="dmarc-fo"
                  value={failureOptions}
                  onChange={(e) => setFailureOptions(e.target.value as DmarcFailureOption)}
                  disabled={!failureReports.trim()}
                  className={`${selectClass} disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {FAILURE_OPTIONS.map((value) => (
                    <option key={value} value={value}>
                      {t.foOptions[value]}
                    </option>
                  ))}
                </select>
                {!failureReports.trim() && (
                  <p className="text-xs text-slate-500 mt-1">{t.foNeedsRuf}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* The record */}
        <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 space-y-4 shadow-md">
          <div>
            <h3 className="text-base md:text-lg font-bold text-white">{t.recordTitle}</h3>
            <p className="text-xs md:text-sm text-slate-400 mt-0.5">{t.recordIntro}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3">
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.typeLabel}</div>
              <div className="font-mono text-sm text-slate-100">TXT</div>
            </div>

            <div className="flex items-start justify-between gap-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800">
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.hostLabel}</div>
                <div className="font-mono text-sm text-slate-100 select-all">{result.host}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {t.fullName}{' '}
                  <span className="font-mono text-slate-400">
                    _dmarc.{cleanDomain && !domainLooksWrong ? cleanDomain : t.yourDomain}
                  </span>
                </div>
              </div>
              <CopyButton text={result.host} id="host" copiedField={copiedField} onCopy={handleCopy} t={t} />
            </div>

            <div className="sm:col-span-2 flex items-start justify-between gap-3 p-3 bg-slate-950/80 rounded-lg border border-slate-800">
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t.valueLabel}</div>
                <div className="font-mono text-sm text-emerald-300 font-semibold break-all select-all">{result.record}</div>
              </div>
              <CopyButton text={result.record} id="record" copiedField={copiedField} onCopy={handleCopy} t={t} />
            </div>
          </div>
        </div>

        <Warnings items={result.warningItems.map((w) => dmarcWarningText(t, w))} />

        {/* A report address on another domain needs that domain's consent. */}
        {result.externalConsentRecords.length > 0 && (
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 md:p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{t.consentTitle}</span>
            </div>
            <p className="text-xs md:text-sm text-amber-900 leading-relaxed font-medium">{t.consentText}</p>
            {result.externalConsentRecords.map((cr) => (
              <div key={cr.destinationDomain} className="p-3 bg-white border border-amber-200 rounded-lg space-y-2 text-xs">
                <div className="font-semibold text-slate-800">
                  {fill(t.consentAddTo, { domain: <span className="font-mono text-indigo-600">{cr.destinationDomain}</span> })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-mono">
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded break-all">
                    <span className="text-slate-500">{t.consentName}</span>
                    <span className="text-slate-800 select-all font-semibold">{cr.host}</span>
                  </div>
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded break-all">
                    <span className="text-slate-500">{t.consentValue}</span>
                    <span className="text-emerald-700 select-all font-semibold">{cr.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* What to do next */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900">{t.nextTitle}</h3>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
            <li>
              {fill(t.nextCheck, {
                spf: (
                  <Link href={t.spfHref} className="text-indigo-600 font-semibold hover:underline">
                    {t.spfLabel}
                  </Link>
                ),
                guide: (
                  <Link href={t.guideHref} className="text-indigo-600 font-semibold hover:underline">
                    {t.guideLabel}
                  </Link>
                ),
              })}
            </li>
            <li>{t.nextSignIn}</li>
            <li>{t.nextAdd}</li>
            <li>{nextLevelText(policy, hasReports, t)}</li>
          </ol>
        </div>
      </div>

      {/* Check an existing record */}
      <div className="border-t border-slate-200 bg-slate-50/60 px-5 md:px-8 py-5">
        <button
          type="button"
          onClick={() => setShowCleaner(!showCleaner)}
          aria-expanded={showCleaner}
          className="flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 text-left"
        >
          <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${showCleaner ? 'rotate-180' : ''}`} />
          {t.cleanerToggle}
        </button>

        {showCleaner && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <label htmlFor="dmarc-import" className="block text-sm font-bold text-slate-800">
                {t.importLabel}
              </label>
              <textarea
                id="dmarc-import"
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder={IMPORT_PLACEHOLDER}
                rows={3}
                spellCheck={false}
                className="w-full text-sm font-mono p-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={handleClean}
                disabled={!importText.trim()}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.cleanButton}
              </button>
            </div>

            {cleanerResult && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4" />
                      {t.cleanedTitle}
                    </span>
                    <CopyButton
                      text={cleanerResult.cleanedRecord}
                      id="cleanedRecord"
                      copiedField={copiedField}
                      onCopy={handleCopy}
                      t={t}
                    />
                  </div>
                  <div className="p-3 bg-slate-950 font-mono text-sm text-emerald-300 rounded-lg break-all select-all">
                    {cleanerResult.cleanedRecord}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-bold text-slate-800">
                    {cleanerResult.changes.length === 0 ? t.alreadyClean : t.whatChanged(cleanerResult.changes.length)}
                  </div>
                  {cleanerResult.changes.map((c) => (
                    <div
                      key={c.tag + c.explanation}
                      className="p-3 bg-white border border-slate-200 rounded-xl text-sm flex items-start gap-3"
                    >
                      <span
                        className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-0.5 ${
                          c.action === 'removed'
                            ? 'bg-rose-100 text-rose-700'
                            : c.action === 'modernized'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {t.changeLabel[c.action]}
                      </span>
                      <p className="text-slate-700 leading-relaxed">{dmarcChangeText(t, c)}</p>
                    </div>
                  ))}
                </div>

                <Warnings items={cleanerResult.warningItems.map((w) => dmarcWarningText(t, w))} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
