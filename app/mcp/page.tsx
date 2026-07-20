import type { Metadata } from 'next'
import React from 'react'
import { MailCheck, ListChecks, Coins, ArrowRight, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import McpSection from '@/components/landing/McpSection'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const MCP_URL = 'https://mcp.giggal.ai/mcp'

export const metadata: Metadata = {
  title: 'MCP Server — Verify Emails From Your AI Agent',
  description:
    'Connect Giggal.ai to Claude, ChatGPT, Cursor, VS Code and more over MCP. Verify emails — catch-all included — straight from your AI agent.',
  keywords: [
    'Giggal MCP server',
    'email verification MCP',
    'MCP email verifier',
    'Model Context Protocol email',
    'verify emails in Claude',
    'verify emails in Cursor',
    'AI agent email verification',
  ],
  alternates: { canonical: '/mcp' },
  openGraph: {
    title: 'Giggal.ai MCP Server — Verify Emails From Your AI Agent',
    description:
      'Plug Giggal.ai into Claude, ChatGPT, Cursor, VS Code and more over MCP. Catch-all verification, right inside your agent.',
    url: 'https://giggal.ai/mcp',
    type: 'website',
  },
}

const capabilities = [
  {
    Icon: MailCheck,
    wrap: 'bg-indigo-600 shadow-indigo-600/10',
    tool: 'verify_emails',
    title: 'Verify any address',
    body: 'Check single emails or whole lists and get a clear valid / invalid verdict — including catch-all and accept-all domains other tools give up on.',
  },
  {
    Icon: ListChecks,
    wrap: 'bg-emerald-500 shadow-emerald-500/10',
    tool: 'get_verification_details',
    title: 'Pull full results',
    body: 'Fetch the complete breakdown for a job — per-address status, reason codes, and deliverability scoring — without leaving your agent.',
  },
  {
    Icon: Coins,
    wrap: 'bg-violet-600 shadow-violet-600/10',
    tool: 'get_credit_balance',
    title: 'Check your credits',
    body: 'Ask your agent how many verification credits are left before it kicks off a large run. No dashboard round-trip.',
  },
]

const points = [
  'Works with your existing API key',
  'Catch-all verification included',
  'No SDK — just an MCP URL',
]

export default function McpPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verify emails from{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            your AI agent
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Giggal.ai ships a remote <strong className="text-indigo-600 font-extrabold">MCP server</strong>, so Claude,
          ChatGPT, Cursor, VS Code and friends can verify addresses — catch-all included — without you ever leaving
          the chat.
        </p>

        {/* MCP URL */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 rounded-2xl px-5 py-3 card-vivid-shadow">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 shrink-0">MCP URL</span>
            <code className="font-mono text-xs sm:text-sm font-bold text-slate-800 break-all">{MCP_URL}</code>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-3 text-[13px] font-medium text-slate-600">
          {points.map((p) => (
            <span key={p} className="inline-flex items-center gap-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 shrink-0">
                <Check className="w-3 h-3 text-white" />
              </span>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Per-tool setup — with step screenshots (this page only) */}
      <McpSection showImages />

      {/* What your agent can do */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What your agent can do
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Three tools, exposed the moment you connect. Just ask in plain English.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map(({ Icon, wrap, tool, title, body }) => (
            <div
              key={tool}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[230px] hover:border-indigo-500/30 transition-all duration-300 card-vivid-shadow flex flex-col text-left space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <code className="inline-block font-mono text-[11px] bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-slate-600">
                  {tool}
                </code>
                <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Get your API key and connect in a minute
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Start with 1,000 free verification credits. No card required — generate a key and paste the MCP URL into
            your agent.
          </p>
          <div className="pt-4">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-600 font-extrabold rounded-2xl text-base transition-all shadow-md inline-flex items-center gap-2 hover:scale-[1.03] active:scale-95 duration-200"
            >
              Get your API key
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
