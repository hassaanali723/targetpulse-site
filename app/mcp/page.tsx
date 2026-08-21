import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { MailCheck, ListChecks, Coins, ArrowRight, Check } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { breadcrumbLd, faqPageLd, howToLd } from '@/lib/schema'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import McpSection from '@/components/landing/McpSection'

const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
const MCP_URL = 'https://mcp.giggal.ai/mcp'

export const metadata: Metadata = {
  title: 'Email Verification Tool for Claude & ChatGPT',
  description:
    'Connect Giggal.ai to Claude, ChatGPT, Cursor and VS Code over MCP and verify emails inside the conversation. Catch-all addresses resolved, not labelled.',
  alternates: { canonical: '/mcp' },
  openGraph: {
    siteName: 'Giggal.ai',
    title: 'An Email Verification Tool That Runs Inside Claude and ChatGPT',
    description:
      'Giggal.ai ships a remote MCP server, so Claude, ChatGPT, Cursor and VS Code can verify emails directly. Catch-all verification included.',
    url: 'https://giggal.ai/mcp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'An Email Verification Tool That Runs Inside Claude and ChatGPT',
    description:
      'Giggal.ai ships a remote MCP server, so Claude, ChatGPT, Cursor and VS Code can verify emails directly. Catch-all verification included.',
  },
}

// Rendered visibly at the foot of the page AND emitted as FAQPage JSON-LD from
// the same array, so the two can never drift.
const faqs: FaqItem[] = [
  {
    q: 'Can Claude verify email addresses?',
    a: 'Yes, once you connect an email verification tool over MCP. Giggal.ai runs a remote MCP server at https://mcp.giggal.ai/mcp that Claude Desktop and Claude Code can call directly. After it is connected you ask in plain English, for example "verify these eleven addresses and tell me which will bounce", and Claude calls the verify_emails tool and reports the result in the conversation.',
  },
  {
    q: 'Does this work with ChatGPT as well?',
    a: 'Yes. The server is a standard remote MCP server, so any client that supports remote MCP can use it, including ChatGPT on the plans where connectors are enabled, Cursor, VS Code, Windsurf, Cline and Zed. There is no separate build for each client and no SDK to install.',
  },
  {
    q: 'What can the AI agent actually do?',
    a: 'Three things. verify_emails checks a single address or a whole list. get_verification_details pulls the full per-address breakdown for a job, including status and reason codes. get_credit_balance reports how many credits are left, which is worth asking before a large run.',
  },
  {
    q: 'How does it handle catch-all addresses?',
    a: 'The same way the rest of Giggal.ai does. Around 30% of a B2B list sits on catch-all or accept-all domains that accept mail for every possible address, and most verifiers return those labelled risky or unknown. Giggal.ai resolves them to valid or invalid, along with mailboxes behind 15 named secure email gateways such as Proofpoint, Mimecast and Barracuda, so what comes back to the agent is an answer rather than a shrug.',
  },
  {
    q: 'Where do I find my API key?',
    a: 'In the Developer API tab of the Giggal.ai app, not in Settings. Paste it into your MCP client config alongside the server URL.',
  },
  {
    q: 'Does verifying through MCP cost more?',
    a: 'No. It spends the same credits as the dashboard or the REST API: one credit for a standard address, 1.5 for a catch-all inside a run or 2 standalone. New accounts get 1,000 free credits with no card, and credits never expire.',
  },
  {
    q: 'Should I clean a large list this way?',
    a: 'No. MCP is the right tool when verification is a step inside something you are already doing in the conversation, such as checking a dozen contacts before drafting outreach. For a list of tens of thousands, use the bulk upload in the app or the REST API, which are built for it.',
  },
]

const SETUP_STEPS = [
  {
    name: 'Create an account and get an API key',
    text: 'Sign up at Giggal.ai and open the Developer API tab in the app. Generate a key and copy it. New accounts include 1,000 free verification credits with no card required.',
  },
  {
    name: 'Add the MCP server to your client',
    text: 'Point your client at https://mcp.giggal.ai/mcp. In Claude Desktop add it under Settings then Connectors. In Claude Code run claude mcp add with the HTTP transport. Cursor, VS Code, Windsurf, Cline and Zed each read a JSON config file; the exact file path and snippet for each is shown on this page.',
  },
  {
    name: 'Paste in your API key',
    text: 'Add the API key to the server configuration so the client can authenticate. It is the same key the REST API uses.',
  },
  {
    name: 'Ask the agent to verify something',
    text: 'Restart the client so it picks up the new server, then ask in plain English, for example "verify hello@example.com and tell me whether it is a real mailbox". The agent calls verify_emails and reports back.',
  },
]

const capabilities = [
  {
    Icon: MailCheck,
    wrap: 'bg-indigo-600 shadow-indigo-600/10',
    tool: 'verify_emails',
    title: 'Verify any address',
    body: 'Check single emails or whole lists and get a clear valid or invalid result, catch-all and accept-all domains included, where other tools give up.',
  },
  {
    Icon: ListChecks,
    wrap: 'bg-emerald-500 shadow-emerald-500/10',
    tool: 'get_verification_details',
    title: 'Pull full results',
    body: 'Fetch the complete breakdown for a job, including per-address status, reason codes and deliverability scoring, without leaving your agent.',
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
  'No SDK, just an MCP URL',
]

export default function McpPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbLd('MCP', '/mcp')} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: 'https://giggal.ai/mcp#howto',
          name: 'Connect Giggal.ai email verification to Claude or ChatGPT over MCP',
          description:
            'Four steps to verify email addresses, catch-all included, from inside Claude, ChatGPT, Cursor or VS Code using the Giggal.ai remote MCP server.',
          steps: SETUP_STEPS,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          An email verification tool that runs inside{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            Claude and ChatGPT
          </span>
        </h1>

        <p className="text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          Giggal.ai ships a remote <strong className="text-indigo-600 font-extrabold">MCP server</strong>, so Claude,
          ChatGPT, Cursor, VS Code and friends can verify addresses, catch-all included, without you ever leaving
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

      {/* Why catch-all matters more in an agent than in a dashboard */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Why the catch-all result matters more here
        </h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Around 30% of a B2B list sits on catch-all or accept-all domains, which accept mail for
            every possible address whether or not a mailbox was ever created. Most verifiers hand
            those back labelled risky, unknown or accept-all, meaning they could not tell.
          </p>
          <p>
            That label is awkward in a dashboard. It is worse in a conversation, because the agent
            reports faithfully what it was given, and you end up with a reply telling you that a
            third of your addresses are uncertain. Which is the state you were in before you asked.
            Giggal.ai resolves those addresses to valid or invalid, and does the same for mailboxes
            behind 15 named secure email gateways including Proofpoint, Mimecast and Barracuda, so
            the agent has something to act on.
          </p>
          <p>
            There is a longer write-up of how this works in practice, with example prompts, in{' '}
            <Link
              href="/blog/verify-emails-inside-claude-and-chatgpt"
              className="text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors"
            >
              verifying emails inside Claude and ChatGPT
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-24 border-t border-slate-200 pt-12 space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Questions about MCP verification
        </h2>
        <FaqAccordion items={faqs} />
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
            Get your API key and connect in a minute
          </h2>
          <p className="text-sm text-indigo-100 max-w-lg mx-auto font-medium">
            Start with 1,000 free verification credits. No card required. Generate a key and paste the MCP URL into
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
