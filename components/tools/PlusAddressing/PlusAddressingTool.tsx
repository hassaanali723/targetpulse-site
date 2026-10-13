'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Copy, Check, AlertTriangle, Info, Download, ArrowRight, CheckCircle2 } from 'lucide-react'
import { makePlusAddresses, findDuplicates, PlusInputError, type PlusResult } from '@/lib/tools/plusAddressingCore'

type Mode = 'create' | 'clean'

const TAG_IDEAS = ['newsletters', 'shopping', 'banking', 'jobs', 'travel']

async function copyText(text: string) {
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
}

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await copyText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : label}
    </button>
  )
}

function ProviderNote({ r }: { r: PlusResult }) {
  const p = r.provider
  if (!p) {
    return (
      <p className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>
          {r.domain} isn’t a provider we have rules for. If it runs on Google Workspace or Microsoft 365, plus addresses work there too.
          Otherwise send yourself a test email before you use one.
        </span>
      </p>
    )
  }
  const warn = p.support === 'other-separator' || p.support === 'tested'
  return (
    <p
      className={`text-sm leading-relaxed flex items-start gap-2 p-3 rounded-xl border ${
        warn ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
      }`}
    >
      {warn ? <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" /> : <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />}
      <span>
        <span className="font-bold">{p.name}:</span> {p.note}
      </span>
    </p>
  )
}

const textInput =
  'w-full text-base px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono'

export default function PlusAddressingTool() {
  const [mode, setMode] = useState<Mode>('create')
  const [address, setAddress] = useState('')
  const [tags, setTags] = useState('')
  const [listText, setListText] = useState('')
  const [stripAll, setStripAll] = useState(false)

  const created = useMemo(() => {
    if (!address.trim()) return { result: null, error: '' }
    try {
      return { result: makePlusAddresses(address, tags), error: '' }
    } catch (e) {
      return { result: null, error: e instanceof PlusInputError ? e.message : 'Check the address.' }
    }
  }, [address, tags])

  const cleaned = useMemo(() => (listText.trim() ? findDuplicates(listText, stripAll) : null), [listText, stripAll])

  const addTag = (t: string) => setTags((cur) => (cur.split(/[\n,;]+/).map((x) => x.trim()).includes(t) ? cur : cur.trim() ? `${cur.trim()}, ${t}` : t))

  const download = () => {
    if (!cleaned) return
    const blob = new Blob([cleaned.unique.join('\n') + '\n'], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'emails-without-duplicates.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const tabClass = (m: Mode) =>
    `flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
      mode === m ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="p-5 md:p-8 space-y-6">
        <div role="tablist" aria-label="Plus addressing tool mode" className="inline-flex w-full sm:w-auto p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" role="tab" aria-selected={mode === 'create'} onClick={() => setMode('create')} className={tabClass('create')}>
            Create<span className="hidden sm:inline"> plus addresses</span>
          </button>
          <button type="button" role="tab" aria-selected={mode === 'clean'} onClick={() => setMode('clean')} className={tabClass('clean')}>
            Clean<span className="hidden sm:inline"> a list</span>
          </button>
        </div>

        {mode === 'create' && (
          <div role="tabpanel" className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 min-w-0">
                <label htmlFor="pa-address" className="block text-sm font-bold text-slate-900">
                  Your email address
                </label>
                <input
                  id="pa-address"
                  type="email"
                  inputMode="email"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="jane@gmail.com"
                  className={textInput}
                />
              </div>
              <div className="space-y-1.5 min-w-0">
                <label htmlFor="pa-tags" className="block text-sm font-bold text-slate-900">
                  Tags, separated by commas
                </label>
                <input
                  id="pa-tags"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="newsletters, shopping"
                  className={textInput}
                />
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                  <span>Ideas:</span>
                  {TAG_IDEAS.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => addTag(t)}
                      className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-semibold"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div aria-live="polite" className="space-y-4">
              {created.error && <p className="text-sm text-rose-600 font-semibold">{created.error}</p>}
              {created.result && (
                <>
                  <ProviderNote r={created.result} />
                  {created.result.addresses.length > 0 ? (
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                          Your plus addresses ({created.result.addresses.length})
                        </span>
                        <CopyButton text={created.result.addresses.map((a) => a.address).join('\n')} label="Copy all" />
                      </div>
                      <ul className="divide-y divide-slate-100 bg-white">
                        {created.result.addresses.map((a) => (
                          <li key={a.tag} className="px-4 py-2.5 flex items-center justify-between gap-3">
                            <span className="font-mono text-sm text-slate-900 break-all min-w-0">
                              {created.result!.local}
                              <span className="text-indigo-600 font-bold">+{a.tag}</span>@{created.result!.domain}
                            </span>
                            <CopyButton text={a.address} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500">Add one or more tags to build your addresses.</p>
                  )}
                  {created.result.skipped.map((s) => (
                    <p key={s.tag} className="text-xs text-rose-700 font-medium">
                      Skipped “{s.tag}”: {s.reason}
                    </p>
                  ))}
                  {created.result.provider?.name === 'Gmail' && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To sort them in Gmail, create a filter with the plus address in the <span className="font-semibold">To</span> field, or search
                      for <span className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">deliveredto:{created.result.addresses[0]?.address ?? created.result.base}</span>.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {mode === 'clean' && (
          <div role="tabpanel" className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="pa-list" className="block text-sm font-bold text-slate-900">
                Paste your list
              </label>
              <textarea
                id="pa-list"
                rows={7}
                value={listText}
                onChange={(e) => setListText(e.target.value)}
                placeholder={'jane.doe@gmail.com\njanedoe+news@googlemail.com\nsam+promo@outlook.com\nsam@outlook.com'}
                spellCheck={false}
                className="w-full text-base sm:text-sm px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
              />
              <p className="text-xs text-slate-500">One address per line, or a column copied from a spreadsheet. Names and other text are ignored.</p>
            </div>
            <label className="flex items-start gap-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={stripAll}
                onChange={(e) => setStripAll(e.target.checked)}
                className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
              />
              <span>
                <span className="font-bold text-slate-800">Also treat + as a tag on company domains</span>
                <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Fine for lists of Google Workspace and Microsoft 365 users. Leave it off otherwise, because on some mail servers the + is part of
                  a real address.
                </span>
              </span>
            </label>

            <div aria-live="polite">
              {cleaned && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {[
                      ['Addresses found', cleaned.found],
                      ['After merging', cleaned.unique.length],
                      ['Duplicate groups', cleaned.groups.length],
                      ['Lines skipped', cleaned.invalid],
                    ].map(([label, n]) => (
                      <div key={label as string} className="p-3 rounded-xl border border-slate-200 bg-white">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
                        <div className="mt-1 text-xl font-black text-slate-900">{(n as number).toLocaleString('en-US')}</div>
                      </div>
                    ))}
                  </div>

                  {cleaned.groups.length > 0 ? (
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                        These addresses reach the same inbox
                      </div>
                      <ul className="divide-y divide-slate-100 bg-white max-h-80 overflow-y-auto">
                        {cleaned.groups.map((g) => (
                          <li key={g.key} className="px-4 py-3">
                            <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
                              <span className="font-mono font-bold text-slate-900 break-all">{g.key}</span>
                              {g.provider && <span className="text-xs text-slate-500">{g.provider}</span>}
                            </div>
                            <ul className="mt-1 space-y-0.5">
                              {g.members.map((m, i) => (
                                <li key={`${m}-${i}`} className="font-mono text-xs text-slate-600 break-all">
                                  {i === 0 ? 'kept: ' : 'merged: '}
                                  {m}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    cleaned.found > 0 && (
                      <p className="text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl p-3 font-medium">
                        No two addresses in this list reach the same inbox.
                      </p>
                    )
                  )}

                  {cleaned.unique.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3">
                      <CopyButton text={cleaned.unique.join('\n')} label={`Copy ${cleaned.unique.length.toLocaleString('en-US')} addresses`} />
                      <button
                        type="button"
                        onClick={download}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download as .txt
                      </button>
                    </div>
                  )}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    The first address of each group is kept exactly as written, so the person’s filters keep working.
                  </p>

                  {cleaned.unique.length > 0 && (
                    <div className="rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-base font-bold">No duplicates doesn’t mean no bounces</h3>
                        <p className="text-sm text-slate-300">Check that each address still exists before you send to the cleaned list.</p>
                      </div>
                      <Link
                        href="/bulk-email-verifier"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm whitespace-nowrap"
                      >
                        Verify the list
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
