import fs from 'fs'
import path from 'path'

// Blog content lives as markdown files in content/blog/. Adding a post means
// adding a file, no component edits. We render markdown to HTML on the server
// (at build time via generateStaticParams) so every word is in the raw HTML.
//
// The renderer supports exactly the subset these posts use: H2/H3, paragraphs,
// links, bold (used only in table cells), one table, and short bullet lists.
// It is deliberately small rather than a full CommonMark implementation.

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export interface PostMeta {
  title: string
  description: string
  slug: string
  date: string // YYYY-MM-DD
  author: string
  keyword: string
  // Optional top banner image, e.g. /blog/catch-all.jpg (file lives in public/).
  // Empty string when the post has no banner.
  image: string
  imageAlt: string
}

export interface Post extends PostMeta {
  contentHtml: string
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
      ? ` target="_blank" rel="noopener noreferrer"`
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

function renderMarkdown(body: string): string {
  const blocks = body.trim().split(/\n{2,}/)
  const html: string[] = []
  for (const block of blocks) {
    const lines = block.split('\n')
    if (block.startsWith('### ')) {
      html.push(`<h3>${inline(block.slice(4).trim())}</h3>`)
    } else if (block.startsWith('## ')) {
      html.push(`<h2>${inline(block.slice(3).trim())}</h2>`)
    } else if (lines.every((l) => l.trim().startsWith('|'))) {
      html.push(renderTable(lines))
    } else if (lines.every((l) => l.trim().startsWith('- '))) {
      const items = lines.map((l) => `<li>${inline(l.trim().slice(2))}</li>`).join('')
      html.push(`<ul>${items}</ul>`)
    } else {
      html.push(`<p>${inline(lines.join(' '))}</p>`)
    }
  }
  return html.join('\n')
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, body } = parseFrontmatter(raw)
  return {
    title: data.title || slug,
    description: data.description || '',
    slug: data.slug || slug,
    date: data.date || '',
    author: data.author || '',
    keyword: data.keyword || '',
    image: data.image || '',
    imageAlt: data.imageAlt || '',
    contentHtml: renderMarkdown(body),
  }
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const p = getPostBySlug(slug)
      if (!p) return null
      const { contentHtml, ...meta } = p
      return meta
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
