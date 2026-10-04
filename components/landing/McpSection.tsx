'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Check, Copy, ArrowRight } from 'lucide-react'
import ObfuscatedEmail from '@/components/ObfuscatedEmail'

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

interface Tool { id: string; name: string; setup: Setup }

const REPLACE_KEY = <>Replace <span className="font-mono text-white">YOUR_API_KEY</span> with your key from your Giggal.ai dashboard.</>

const TOOLS: Tool[] = [
  {
    id: 'claude', name: 'Claude',
    setup: {
      kind: 'connector',
      subtitle: 'Add Giggal.ai as a custom connector in Claude. No config files, no API key to paste.',
      steps: [
        {
          text: <>In Claude (web or desktop), open <span className="font-semibold text-white">Settings → Connectors</span>.</>,
          img: '/mcp/claude/1-connectors.jpeg',
          alt: 'Claude Settings with the Connectors tab open',
        },
        {
          text: <>Click <span className="font-semibold text-white">Add</span> → <span className="font-semibold text-white">Add custom connector</span>.</>,
          img: '/mcp/claude/2-add-custom-connector.jpeg',
          alt: 'The Add menu open showing Add custom connector',
        },
        {
          text: <>Name it <span className="font-mono text-white">Giggal.ai</span>, paste the MCP URL below, then click <span className="font-semibold text-white">Add</span>.</>,
          img: '/mcp/claude/3-paste-url.jpeg',
          alt: 'Add custom connector dialog with the Giggal.ai MCP URL filled in',
        },
        {
          text: <>Open the <span className="font-semibold text-white">Giggal.ai</span> connector and click <span className="font-semibold text-white">Connect</span>.</>,
          img: '/mcp/claude/4-connect.jpeg',
          alt: 'Giggal.ai connector page with the Connect button',
        },
        {
          text: <>Click <span className="font-semibold text-white">Allow</span> to grant <span className="font-mono text-white">verify:read</span>, which covers verifying addresses, checking credits and looking up past verifications.</>,
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
      subtitle: 'Add Giggal.ai as a custom plugin in ChatGPT, connected over OAuth, with no API key to paste.',
      steps: [
        {
          text: <>In ChatGPT, open <span className="font-semibold text-white">Plugins</span> from the sidebar, then click the <span className="font-semibold text-white">+</span> in the top right.</>,
          img: '/mcp/chatgpt/1-plugins.jpeg',
          alt: 'ChatGPT Plugins page with the add button in the top right',
        },
        {
          text: <>Name it <span className="font-mono text-white">Giggal.ai</span>, set <span className="font-semibold text-white">Server URL</span> to the MCP URL below, choose <span className="font-semibold text-white">Authentication → OAuth</span>, tick the confirmation, then click <span className="font-semibold text-white">Create</span>.</>,
          img: '/mcp/chatgpt/2-new-plugin.jpeg',
          alt: 'ChatGPT New Plugin dialog with the Giggal.ai MCP server URL and OAuth selected',
        },
        {
          text: <>Open the <span className="font-semibold text-white">Giggal.ai</span> plugin, click <span className="font-semibold text-white">Connect</span>, then <span className="font-semibold text-white">Sign in with Giggal.ai</span>.</>,
          img: '/mcp/chatgpt/3-connect.jpeg',
          alt: 'Add Giggal.ai to ChatGPT prompt with the Sign in with Giggal.ai button',
        },
        {
          text: <>Click <span className="font-semibold text-white">Allow</span> to grant <span className="font-mono text-white">verify:read</span>, which covers verifying addresses, checking credits and looking up past verifications.</>,
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
      note: <>{REPLACE_KEY} Already have a <span className="font-mono text-white">giggal</span> server? Run <span className="font-mono text-white">claude mcp remove giggal --scope user</span> first, then re-add.</>,
    },
  },
  {
    id: 'codex', name: 'Codex',
    setup: {
      kind: 'config', boxLabel: 'config.toml', files: ['~/.codex/config.toml', '%USERPROFILE%\\.codex\\config.toml'], code: codexToml,
      note: (
        <>
          Codex reads the token from an env var. Set it, reload your shell, then fully quit &amp; reopen Codex and run <span className="font-mono text-white">/mcp</span> to confirm:
          <span className="mt-2 block bg-white/5 border border-white/10 rounded-lg p-2.5 font-mono text-[11px] text-slate-200 whitespace-pre-wrap">{`echo 'export GIGGAL_API_KEY="tp_live_..."' >> ~/.zshrc\nsource ~/.zshrc`}</span>
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
    setup: { kind: 'config', boxLabel: 'mcp.json', files: ['.vscode/mcp.json'], code: jsonConfig('servers'), note: <>{REPLACE_KEY} VS Code uses <span className="font-mono text-white">&quot;servers&quot;</span> instead of <span className="font-mono text-white">&quot;mcpServers&quot;</span>.</> },
  },
  {
    id: 'cline', name: 'Cline',
    setup: { kind: 'config', boxLabel: 'cline_mcp_settings.json', files: ['~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json'], code: jsonConfig('mcpServers'), note: <>{REPLACE_KEY} macOS path shown, so adjust for your OS.</> },
  },
  {
    id: 'zed', name: 'Zed',
    setup: { kind: 'config', boxLabel: 'settings.json', files: ['~/.config/zed/settings.json'], code: zedConfig, note: REPLACE_KEY },
  },
]

// Every visible string, so a localized home can pass its own. Tool steps and
// notes are overridden per tool id; anything not given stays English.
export interface McpStrings {
  title: string
  subtitle: string
  toolsAria: string
  groups: [string, string]
  pasteInto: string
  or: string
  serverUrl: string
  copy: string
  copied: string
  copyAria: string
  restart: string
  askBefore: string
  askAfter: string
  guide: string
  tools?: Record<string, { subtitle?: string; steps?: React.ReactNode[]; note?: React.ReactNode }>
}

export const MCP_STRINGS_EN: McpStrings = {
  title: 'Connect your favourite AI.',
  subtitle: 'Plug Giggal.ai into your AI agent over MCP and verify emails, catch-all included, right inside Claude, Cursor, VS Code and more.',
  toolsAria: 'AI tools',
  groups: ['Chat apps', 'Code editors'],
  pasteInto: 'Paste into',
  or: ' or ',
  serverUrl: 'MCP Server URL',
  copy: 'Copy',
  copied: 'Copied',
  copyAria: 'Copy to clipboard',
  restart: 'Restart the client after adding, then just ask:',
  askBefore: '\u201cIs ',
  askAfter: ' deliverable?\u201d',
  guide: 'See the full setup guide',
}

// TOOLS with a locale's step and note text swapped in (screenshots kept).
function localizeTools(s: McpStrings): Tool[] {
  if (!s.tools) return TOOLS
  return TOOLS.map((tool) => {
    const o = s.tools?.[tool.id]
    if (!o) return tool
    const setup = tool.setup
    if (setup.kind === 'connector') {
      return {
        ...tool,
        setup: {
          ...setup,
          subtitle: o.subtitle ?? setup.subtitle,
          steps: setup.steps.map((st, i) => ({ ...st, text: o.steps?.[i] ?? st.text })),
        },
      }
    }
    return { ...tool, setup: { ...setup, note: o.note ?? setup.note } }
  })
}

function CopyButton({ text, s }: { text: string; s: McpStrings }) {
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
      className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-md transition-colors"
      aria-label={s.copyAria}
    >
      {copied ? <><Check className="w-3.5 h-3.5" /> {s.copied}</> : <><Copy className="w-3.5 h-3.5" /> {s.copy}</>}
    </button>
  )
}

// Small syntax colouring for the code boxes. Each rule is a sticky regex
// tried at the current position; anything unmatched stays plain.
type Lang = 'json' | 'toml' | 'shell' | 'url'
const STR = '"(?:[^"\\\\]|\\\\.)*"'
const RULES: Record<Lang, [RegExp, string][]> = {
  json: [
    [new RegExp(STR + '(?=\\s*:)', 'y'), 'text-sky-300'],
    [new RegExp(STR, 'y'), 'text-emerald-300'],
    [new RegExp('[{}\\[\\],:]', 'y'), 'text-slate-500'],
  ],
  toml: [
    [new RegExp('\\[[^\\]\\n]+\\]', 'y'), 'text-amber-300'],
    [new RegExp(STR, 'y'), 'text-emerald-300'],
    [new RegExp('[A-Za-z_][\\w-]*(?=\\s*=)', 'y'), 'text-sky-300'],
    [new RegExp('=', 'y'), 'text-slate-500'],
  ],
  shell: [
    [new RegExp('claude mcp (?:add|remove)', 'y'), 'text-amber-300'],
    [new RegExp(STR, 'y'), 'text-emerald-300'],
    [new RegExp('https?://\\S+', 'y'), 'text-emerald-300'],
    [new RegExp('--?[A-Za-z][\\w-]*', 'y'), 'text-sky-300'],
    [new RegExp('\\\\(?=\\n|$)', 'y'), 'text-slate-500'],
  ],
  url: [],
}

function highlight(code: string, lang: Lang): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let plain = ''
  let i = 0
  while (i < code.length) {
    let hit = false
    for (const [re, cls] of RULES[lang]) {
      re.lastIndex = i
      const m = re.exec(code)
      if (m && m[0].length > 0) {
        if (plain) { out.push(plain); plain = '' }
        out.push(<span key={i} className={cls}>{m[0]}</span>)
        i += m[0].length
        hit = true
        break
      }
    }
    if (!hit) plain += code[i++]
  }
  if (plain) out.push(plain)
  return out
}

function CodeBox({ label, code, lang = 'url', s }: { label: string; code: string; lang?: Lang; s: McpStrings }) {
  return (
    <div className="bg-slate-950 rounded-xl overflow-hidden ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-3 pl-4 pr-2 py-2 border-b border-white/10">
        <span className="text-xs font-mono text-slate-400 truncate">{label}</span>
        <CopyButton text={code} s={s} />
      </div>
      <pre className="p-4 overflow-x-auto font-mono text-[13px] text-slate-100 leading-relaxed"><code>{highlight(code, lang)}</code></pre>
    </div>
  )
}

// Tool list groups. Chat apps connect over OAuth; the rest take a config file
// or a terminal command.
const GROUPS: string[][] = [
  ['claude', 'chatgpt'],
  ['claude-code', 'codex', 'cursor', 'windsurf', 'vscode', 'cline', 'zed'],
]

// One tool's setup: title, steps or config, and notes.
function SetupBody({ tool, showImages, s: t }: { tool: Tool; showImages: boolean; s: McpStrings }) {
  const s = tool.setup
  return (
    <>
      <h3 className="text-xl font-extrabold text-white">{tool.name}</h3>

      {s.kind === 'connector' ? (
        <>
          <p className="mt-2 text-base text-slate-300">{s.subtitle}</p>
          <ol className={`mt-6 ${showImages ? 'space-y-8' : 'space-y-4'}`}>
            {s.steps.map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span className="shrink-0 w-7 h-7 rounded-full bg-indigo-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-base text-slate-300 leading-relaxed">{step.text}</p>
                  {showImages && step.img && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={step.img}
                      alt={step.alt || ''}
                      loading="lazy"
                      className="mt-4 w-full rounded-xl border border-white/10 bg-slate-800"
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <CodeBox label={t.serverUrl} code={MCP_URL} s={t} />
          </div>
        </>
      ) : (
        <>
          {s.kind === 'config' && (
            <p className="mt-2 text-base text-slate-300 leading-relaxed">
              {t.pasteInto}{' '}
              {s.files.map((f, i) => (
                <React.Fragment key={f}>
                  {i > 0 && t.or}
                  <code className="font-mono text-sm bg-white/10 rounded px-1.5 py-0.5 text-slate-100 break-all">{f}</code>
                </React.Fragment>
              ))}
            </p>
          )}
          <div className="mt-5">
            <CodeBox
              label={s.boxLabel}
              code={s.code}
              lang={s.kind === 'command' ? 'shell' : s.boxLabel.endsWith('.toml') ? 'toml' : 'json'}
              s={t}
            />
          </div>
          {s.note && <div className="mt-4 text-sm text-slate-400 leading-relaxed">{s.note}</div>}
        </>
      )}
    </>
  )
}

interface McpSectionProps {
  /** Show per-step screenshots. Used on the dedicated /mcp page only. */
  showImages?: boolean
  /** When set, renders a "full setup guide" link (landing page → /mcp). */
  detailsHref?: string
  /** Top border line. The home page draws its own section dividers. */
  divider?: boolean
  /** Localized text; English when left out. */
  strings?: McpStrings
}

export default function McpSection({ showImages = false, detailsHref, divider = true, strings = MCP_STRINGS_EN }: McpSectionProps) {
  const s = strings
  const tools = React.useMemo(() => localizeTools(s), [s])
  const [selected, setSelected] = useState('claude')
  const tool = tools.find((t) => t.id === selected) ?? tools[0]

  // Keep the window at the tallest tool's height. Home page only: the /mcp
  // guide has screenshots and is meant to grow.
  const measureRef = useRef<HTMLDivElement>(null)
  const [measuring, setMeasuring] = useState(false)
  const [minH, setMinH] = useState<number | undefined>(undefined)

  // Re-measure whenever the panel's width changes (first layout, styles or
  // fonts arriving, window resize), not on height changes, so it settles.
  const bodyRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (showImages || !bodyRef.current) return
    let lastWidth = -1
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width)
      if (w !== lastWidth) {
        lastWidth = w
        setMeasuring(true)
      }
    })
    ro.observe(bodyRef.current)
    document.fonts?.ready.then(() => setMeasuring(true))
    return () => ro.disconnect()
  }, [showImages])

  useEffect(() => {
    if (!measuring || !measureRef.current) return
    const heights = Array.from(measureRef.current.children, (c) => (c as HTMLElement).offsetHeight)
    const tallest = Math.max(0, ...heights)
    if (tallest > 0) setMinH(tallest)
    setMeasuring(false)
  }, [measuring])

  return (
    <section id="mcp" className={`cv-section max-w-6xl mx-auto px-6 py-20 md:py-24 ${divider ? 'border-t border-slate-200' : ''}`}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{s.title}</h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">{s.subtitle}</p>
      </div>

      {/* One dark app-style window: tool list on the left, setup on the right */}
      <div data-spotlight className="spotlight spotlight-dark relative mt-12 max-w-5xl mx-auto rounded-3xl bg-slate-900 overflow-hidden shadow-[0_24px_60px_-24px_rgba(15,23,42,0.5)] grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)]">
        {/* Tool list: a column on desktop, one scrolling row on phones */}
        <div
          role="tablist"
          aria-label={s.toolsAria}
          className="flex md:flex-col gap-1.5 md:gap-0.5 overflow-x-auto md:overflow-visible p-4 md:p-5 bg-slate-950/50 border-b md:border-b-0 md:border-r border-white/10"
        >
          {GROUPS.map((ids, gi) => (
            <React.Fragment key={s.groups[gi]}>
              <p className={`hidden md:block px-3 pb-2 text-xs font-semibold text-slate-500 ${gi > 0 ? 'pt-6' : 'pt-1'}`}>{s.groups[gi]}</p>
              {ids.map((id) => {
                const t = tools.find((x) => x.id === id)
                if (!t) return null
                const active = t.id === selected
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelected(t.id)}
                    className={`shrink-0 text-left px-3.5 py-2 md:py-2.5 rounded-lg text-[15px] transition-colors ${
                      active
                        ? 'bg-indigo-600 md:bg-indigo-500/20 text-white font-bold md:shadow-[inset_3px_0_0_#818cf8]'
                        : 'border border-white/10 md:border-0 text-slate-400 font-semibold hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t.name}
                  </button>
                )
              })}
            </React.Fragment>
          ))}
        </div>

        {/* Setup panel */}
        <div role="tabpanel" className="p-6 sm:p-8">
          <div ref={bodyRef} className="relative" style={minH ? { minHeight: minH } : undefined}>
            <SetupBody tool={tool} showImages={showImages} s={s} />
            {/* Invisible copies of every tool's setup, measured after load and
                on resize so the window keeps the tallest height and does not
                jump when you switch tools. Client only, never in the HTML. */}
            {measuring && (
              <div ref={measureRef} aria-hidden="true" className="absolute inset-x-0 top-0 invisible pointer-events-none">
                {tools.map((x) => (
                  <div key={x.id}>
                    <SetupBody tool={x} showImages={false} s={s} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="mt-6 pt-5 border-t border-white/10 text-sm text-slate-400">
            {s.restart}{' '}
            <span className="font-semibold text-white">{s.askBefore}<ObfuscatedEmail user="info" domain="giggal.ai" />{s.askAfter}</span>
          </p>
        </div>
      </div>

      {/* Landing page → full guide (with screenshots) on /mcp */}
      {detailsHref && (
        <div className="mt-8 text-center">
          <Link href={detailsHref} className="group inline-flex items-center gap-2 text-base font-bold text-indigo-600 hover:underline">
            {s.guide}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  )
}
