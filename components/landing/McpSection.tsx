'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Check, Copy, Bot, ArrowRight } from 'lucide-react'

const MCP_URL = 'https://mcp.giggal.ai/mcp'

// JSON config shared by most code clients (root key differs for VS Code).
const jsonConfig = (rootKey: 'mcpServers' | 'servers') => `{
  "${rootKey}": {
    "giggal": {
      "url": "${MCP_URL}",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`

const zedConfig = `{
  "context_servers": {
    "giggal": {
      "source": "custom",
      "url": "${MCP_URL}",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`

const claudeCodeCmd = `claude mcp add --transport http --scope user giggal \\
  ${MCP_URL} \\
  --header "Authorization: Bearer YOUR_API_KEY"`

const codexToml = `[mcp_servers.giggal]
url = "${MCP_URL}"
bearer_token_env_var = "GIGGAL_API_KEY"`

// A connector step. `img` is a screenshot shown only on the dedicated /mcp page
// (the landing-page section stays compact and links out instead).
interface Step { text: React.ReactNode; img?: string; alt?: string }

type Setup =
  | { kind: 'connector'; subtitle: string; steps: Step[] }
  | { kind: 'command'; boxLabel: string; code: string; note?: React.ReactNode }
  | { kind: 'config'; boxLabel: string; files: string[]; code: string; note?: React.ReactNode }

interface Tool { id: string; name: string; logo?: string; setup: Setup }

const REPLACE_KEY = <>Replace <span className="font-mono text-slate-700">YOUR_API_KEY</span> with your key from your Giggal.ai dashboard.</>

const TOOLS: Tool[] = [
  {
    id: 'claude', name: 'Claude',
    setup: {
      kind: 'connector',
      subtitle: 'Add Giggal.ai as a custom connector in Claude — no config files, no API key to paste.',
      steps: [
        {
          text: <>In Claude (web or desktop), open <span className="font-semibold text-slate-700">Settings → Connectors</span>.</>,
          img: '/mcp/claude/1-connectors.jpeg',
          alt: 'Claude Settings with the Connectors tab open',
        },
        {
          text: <>Click <span className="font-semibold text-slate-700">Add</span> → <span className="font-semibold text-slate-700">Add custom connector</span>.</>,
          img: '/mcp/claude/2-add-custom-connector.jpeg',
          alt: 'The Add menu open showing Add custom connector',
        },
        {
          text: <>Name it <span className="font-mono text-slate-700">Giggal.ai</span>, paste the MCP URL below, then click <span className="font-semibold text-slate-700">Add</span>.</>,
          img: '/mcp/claude/3-paste-url.jpeg',
          alt: 'Add custom connector dialog with the Giggal.ai MCP URL filled in',
        },
        {
          text: <>Open the <span className="font-semibold text-slate-700">Giggal.ai</span> connector and click <span className="font-semibold text-slate-700">Connect</span>.</>,
          img: '/mcp/claude/4-connect.jpeg',
          alt: 'Giggal.ai connector page with the Connect button',
        },
        {
          text: <>Click <span className="font-semibold text-slate-700">Allow</span> to grant <span className="font-mono text-slate-700">verify:read</span> — verify addresses, check credits, and look up past verifications.</>,
          img: '/mcp/claude/5-allow.jpeg',
          alt: 'Giggal.ai authorization screen asking to allow Claude access',
        },
      ],
    },
  },
  {
    id: 'chatgpt', name: 'ChatGPT',
    setup: {
      kind: 'connector',
      subtitle: 'Add Giggal.ai as a custom plugin in ChatGPT — connected over OAuth, no API key to paste.',
      steps: [
        {
          text: <>In ChatGPT, open <span className="font-semibold text-slate-700">Plugins</span> from the sidebar, then click the <span className="font-semibold text-slate-700">+</span> in the top right.</>,
          img: '/mcp/chatgpt/1-plugins.jpeg',
          alt: 'ChatGPT Plugins page with the add button in the top right',
        },
        {
          text: <>Name it <span className="font-mono text-slate-700">Giggal.ai</span>, set <span className="font-semibold text-slate-700">Server URL</span> to the MCP URL below, choose <span className="font-semibold text-slate-700">Authentication → OAuth</span>, tick the confirmation, then click <span className="font-semibold text-slate-700">Create</span>.</>,
          img: '/mcp/chatgpt/2-new-plugin.jpeg',
          alt: 'ChatGPT New Plugin dialog with the Giggal.ai MCP server URL and OAuth selected',
        },
        {
          text: <>Open the <span className="font-semibold text-slate-700">Giggal.ai</span> plugin, click <span className="font-semibold text-slate-700">Connect</span>, then <span className="font-semibold text-slate-700">Sign in with Giggal.ai</span>.</>,
          img: '/mcp/chatgpt/3-connect.jpeg',
          alt: 'Add Giggal.ai to ChatGPT prompt with the Sign in with Giggal.ai button',
        },
        {
          text: <>Click <span className="font-semibold text-slate-700">Allow</span> to grant <span className="font-mono text-slate-700">verify:read</span> — verify addresses, check credits, and look up past verifications.</>,
          img: '/mcp/chatgpt/4-allow.jpeg',
          alt: 'Giggal.ai authorization screen asking to allow ChatGPT access',
        },
      ],
    },
  },
  {
    id: 'claude-code', name: 'Claude Code',
    setup: {
      kind: 'command', boxLabel: 'Terminal', code: claudeCodeCmd,
      note: <>{REPLACE_KEY} Already have a <span className="font-mono text-slate-700">giggal</span> server? Run <span className="font-mono text-slate-700">claude mcp remove giggal --scope user</span> first, then re-add.</>,
    },
  },
  {
    id: 'codex', name: 'Codex',
    setup: {
      kind: 'config', boxLabel: 'config.toml', files: ['~/.codex/config.toml', '%USERPROFILE%\\.codex\\config.toml'], code: codexToml,
      note: (
        <>
          Codex reads the token from an env var. Set it, reload your shell, then fully quit &amp; reopen Codex and run <span className="font-mono text-slate-700">/mcp</span> to confirm:
          <span className="mt-2 block bg-slate-100 border border-slate-200 rounded-lg p-2.5 font-mono text-[11px] text-slate-700 whitespace-pre-wrap">{`echo 'export GIGGAL_API_KEY="tp_live_..."' >> ~/.zshrc\nsource ~/.zshrc`}</span>
        </>
      ),
    },
  },
  {
    id: 'cursor', name: 'Cursor',
    setup: { kind: 'config', boxLabel: 'mcp.json', files: ['~/.cursor/mcp.json', '.cursor/mcp.json'], code: jsonConfig('mcpServers'), note: REPLACE_KEY },
  },
  {
    id: 'windsurf', name: 'Windsurf',
    setup: { kind: 'config', boxLabel: 'mcp_config.json', files: ['~/.codeium/windsurf/mcp_config.json'], code: jsonConfig('mcpServers'), note: REPLACE_KEY },
  },
  {
    id: 'vscode', name: 'VS Code',
    setup: { kind: 'config', boxLabel: 'mcp.json', files: ['.vscode/mcp.json'], code: jsonConfig('servers'), note: <>{REPLACE_KEY} VS Code uses <span className="font-mono text-slate-700">&quot;servers&quot;</span> instead of <span className="font-mono text-slate-700">&quot;mcpServers&quot;</span>.</> },
  },
  {
    id: 'cline', name: 'Cline',
    setup: { kind: 'config', boxLabel: 'cline_mcp_settings.json', files: ['~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'], code: jsonConfig('mcpServers'), note: <>{REPLACE_KEY} macOS path shown — adjust for your OS.</> },
  },
  {
    id: 'zed', name: 'Zed',
    setup: { kind: 'config', boxLabel: 'settings.json', files: ['~/.config/zed/settings.json'], code: zedConfig, note: REPLACE_KEY },
  },
]

function initials(name: string) {
  const words = name.replace(/[^A-Za-z ]/g, '').split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return words.map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

function Logo({ tool, size }: { tool: Tool; size: 'sm' | 'lg' }) {
  const box = size === 'lg' ? 'w-10 h-10 text-sm' : 'w-7 h-7 text-[11px]'
  if (tool.logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={tool.logo} alt={tool.name} className={`${box} object-contain shrink-0`} />
  }
  return (
    <span className={`${box} rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-slate-500 shrink-0`}>
      {initials(tool.name)}
    </span>
  )
}

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard unavailable */ }
  }
  return (
    <button
      onClick={copy}
      className="shrink-0 flex items-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-lg transition-colors"
      aria-label={`${label} to clipboard`}
    >
      {copied ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> {label}</>}
    </button>
  )
}

function CodeBox({ label, code }: { label: string; code: string }) {
  return (
    <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80">
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        <CopyButton text={code} label="Copy" />
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed"><code>{code}</code></pre>
    </div>
  )
}

interface McpSectionProps {
  /** Show per-step screenshots. Used on the dedicated /mcp page only. */
  showImages?: boolean
  /** When set, renders a "full setup guide" link (landing page → /mcp). */
  detailsHref?: string
}

export default function McpSection({ showImages = false, detailsHref }: McpSectionProps) {
  const [selected, setSelected] = useState('claude')
  const tool = TOOLS.find((t) => t.id === selected) ?? TOOLS[0]
  const s = tool.setup

  return (
    <section id="mcp" className="max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Connect your favourite AI.</h2>
        <p className="text-sm md:text-base text-slate-600 font-medium">
          Plug Giggal.ai into your AI agent over MCP and verify emails — catch-all included — right inside Claude, Cursor, VS Code and more.
        </p>
      </div>

      {/* Tool selector row */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {TOOLS.map((t) => {
          const active = t.id === selected
          return (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border-2 text-sm font-bold transition-all ${
                active
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:-translate-y-0.5'
              }`}
            >
              <Logo tool={t} size="sm" />
              {t.name}
            </button>
          )
        })}
      </div>

      {/* Setup panel */}
      <div className="max-w-3xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
        <div key={selected} className="space-y-5 animate-[slideUp_0.28s_ease-out]">
        <div className="flex items-center gap-3.5">
          <Logo tool={tool} size="lg" />
          <div className="leading-tight">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Connect Giggal.ai in</span>
            <span className="text-lg font-black text-slate-900">{tool.name}</span>
          </div>
        </div>

        {s.kind === 'connector' ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-600 font-medium">{s.subtitle}</p>
            <ol className={showImages ? 'space-y-6' : 'space-y-2.5'}>
              {s.steps.map((step, i) => (
                <li key={i} className="space-y-3">
                  <div className="flex gap-3 text-sm text-slate-700 font-medium leading-relaxed">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-[11px] font-black flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span>{step.text}</span>
                  </div>
                  {showImages && step.img && (
                    <div className="pl-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={step.img}
                        alt={step.alt || ''}
                        loading="lazy"
                        className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 shadow-sm"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <CodeBox label="MCP Server URL" code={MCP_URL} />
          </div>
        ) : (
          <>
            {s.kind === 'config' && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">Paste into</span>
                {s.files.map((f) => (
                  <code key={f} className="font-mono text-xs bg-slate-100 border border-slate-200 rounded px-2 py-0.5 text-slate-700 break-all">{f}</code>
                ))}
              </div>
            )}
            <CodeBox label={s.boxLabel} code={s.code} />
            {s.note && <div className="text-xs text-slate-500 font-medium leading-relaxed">{s.note}</div>}
          </>
        )}

        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold border-t border-slate-100 pt-4">
          <Bot className="w-4 h-4 text-indigo-500" />
          Restart the client after adding, then just ask: <span className="text-slate-700">&ldquo;Is info@giggal.ai deliverable?&rdquo;</span>
        </div>
      </div>

      {/* Landing page → full guide (with screenshots) on /mcp */}
      {detailsHref && (
        <div className="text-center">
          <Link
            href={detailsHref}
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-indigo-500 font-bold rounded-xl text-slate-700 hover:text-indigo-700 transition-all text-sm card-vivid-shadow"
          >
            See the full setup guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  )
}
