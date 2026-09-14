import fs from 'fs'
import path from 'path'

// Blog content lives as markdown files in content/blog/. Adding a post means
// adding a file, no component edits. We render markdown to HTML on the server
// (at build time via generateStaticParams) so every word is in the raw HTML.
//
// The renderer supports exactly the subset these posts use: H2/H3, paragraphs,
// links, bold (used only in table cells), one table, short bullet lists, and
// figures (a standalone image line, with an optional caption line below it).
// It is deliberately small rather than a full CommonMark implementation.

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  title: string
  description: string
  slug: string
  date: string // YYYY-MM-DD
  // Optional YYYY-MM-DD of the last substantive edit; falls back to `date`.
  updated: string
  author: string
  keyword: string
  // Optional top banner image, e.g. /blog/catch-all.jpg (file lives in public/).
  // Empty string when the post has no banner.
  image: string
  imageAlt: string
}

export interface TocItem {
  id: string
  text: string
}

export interface Post extends PostMeta {
  contentHtml: string
  // One entry per H2, in document order, for the table of contents.
  toc: TocItem[]
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2] }
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Inline formatting for a single text run: escape, then links, then bold.
function inline(text: string): string {
  let out = escapeHtml(text)
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
    const external = /^https?:\/\//.test(href)
    const attrs = external
      ? ` target="_blank" rel="noopener noreferrer nofollow"`
      : ''
    return `<a href="${href}" class="blog-link"${attrs}>${label}</a>`
  })
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  return out
}

function renderTable(lines: string[]): string {
  const rows = lines.map((l) =>
    l.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim()),
  )
  const header = rows[0]
  const body = rows.slice(2) // rows[1] is the |---|---| separator
  const thead =
    '<thead><tr>' + header.map((c) => `<th>${inline(c)}</th>`).join('') + '</tr></thead>'
  const tbody =
    '<tbody>' +
    body
      .map((r) => '<tr>' + r.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>')
      .join('') +
    '</tbody>'
  return `<div class="blog-table-wrap"><table class="blog-table">${thead}${tbody}</table></div>`
}

// A standalone image line, optionally followed by a caption line.
const IMAGE_RE = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/

function renderFigure(lines: string[]): string {
  const m = IMAGE_RE.exec(lines[0].trim())
  if (!m) return `<p>${inline(lines.join(' '))}</p>`
  const alt = escapeHtml(m[1]).replace(/"/g, '&quot;')
  const src = m[2].trim()
  const caption = lines.slice(1).join(' ').trim()
  const cap = caption ? `<figcaption>${inline(caption)}</figcaption>` : ''
  return `<figure class="blog-figure"><img src="${src}" alt="${alt}" loading="lazy" />${cap}</figure>`
}

// Stable, URL-safe anchor id from heading text (e.g. "1. What a catch-all" ->
// "1-what-a-catch-all"). Collisions are suffixed -2, -3, ... within a post.
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function renderMarkdown(body: string): { html: string; toc: TocItem[] } {
  const blocks = body.trim().split(/\n{2,}/)
  const html: string[] = []
  const toc: TocItem[] = []
  const used = new Set<string>()
  const uniqueId = (raw: string): string => {
    const base = slugify(raw) || 'section'
    let id = base
    let n = 2
    while (used.has(id)) id = `${base}-${n++}`
    used.add(id)
    return id
  }
  for (const block of blocks) {
    const lines = block.split('\n')
    if (block.startsWith('### ')) {
      const raw = block.slice(4).trim()
      html.push(`<h3 id="${uniqueId(raw)}">${inline(raw)}</h3>`)
    } else if (block.startsWith('## ')) {
      const raw = block.slice(3).trim()
      const id = uniqueId(raw)
      toc.push({ id, text: raw })
      html.push(`<h2 id="${id}">${inline(raw)}</h2>`)
    } else if (IMAGE_RE.test(lines[0].trim())) {
      html.push(renderFigure(lines))
    } else if (lines.every((l) => l.trim().startsWith('|'))) {
      html.push(renderTable(lines))
    } else if (lines.every((l) => l.trim().startsWith('- '))) {
      const items = lines.map((l) => `<li>${inline(l.trim().slice(2))}</li>`).join('')
      html.push(`<ul>${items}</ul>`)
    } else {
      html.push(`<p>${inline(lines.join(' '))}</p>`)
    }
  }
  return { html: html.join('\n'), toc }
}

// Localized posts live in a subfolder per language (content/blog/it/...).
// The English functions read the top level only: readdirSync lists the
// subfolder as a directory entry without ".md", so it is filtered out.
export type BlogLocale = 'en' | 'it'
function postsDir(locale: BlogLocale): string {
  return locale === 'en' ? POSTS_DIR : path.join(POSTS_DIR, locale)
}

export function getPostSlugs(locale: BlogLocale = 'en'): string[] {
  const dir = postsDir(locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string, locale: BlogLocale = 'en'): Post | null {
  const file = path.join(postsDir(locale), `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, body } = parseFrontmatter(raw)
  const { html, toc } = renderMarkdown(body)
  return {
    title: data.title || slug,
    description: data.description || '',
    slug: data.slug || slug,
    date: data.date || '',
    updated: data.updated || '',
    author: data.author || '',
    keyword: data.keyword || '',
    image: data.image || '',
    imageAlt: data.imageAlt || '',
    contentHtml: html,
    toc,
  }
}

export function getAllPosts(locale: BlogLocale = 'en'): PostMeta[] {
  return getPostSlugs(locale)
    .map((slug) => {
      const p = getPostBySlug(slug, locale)
      if (!p) return null
      const { contentHtml, toc, ...meta } = p
      return meta
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
