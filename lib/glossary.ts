import fs from 'fs'
import path from 'path'
import { parseFrontmatter, renderMarkdown, type BlogLocale, type TocItem } from '@/lib/blog'
import { GLOSSARY_TERMS, glossaryEnSlug, type GlossaryCategory } from '@/lib/i18n/glossary'

// Glossary content lives as markdown in content/glossary/ (English) and
// content/glossary/<locale>/ (one file per language, named by that language's
// slug). Same renderer as the blog, so links are rewritten per locale and the
// same markdown subset applies. A term is only listed once its file exists.

const DIR = path.join(process.cwd(), 'content', 'glossary')

export interface TermMeta {
  title: string
  seoTitle?: string
  description: string
  slug: string
  // The English slug, the key into GLOSSARY_TERMS. Same as slug in English.
  en: string
  category: GlossaryCategory
  date: string
  updated: string
  keyword: string
  // Two plain sentences: the definition, shown on the hub and as the lead.
  short: string
  // English slugs of related terms, rewritten to the locale's slug at render.
  related: string[]
  cta: string
}

export interface Term extends TermMeta {
  contentHtml: string
  toc: TocItem[]
}

function dir(locale: BlogLocale): string {
  return locale === 'en' ? DIR : path.join(DIR, locale)
}

export function getTermSlugs(locale: BlogLocale = 'en'): string[] {
  const d = dir(locale)
  if (!fs.existsSync(d)) return []
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .filter((slug) => glossaryEnSlug(locale, slug) !== undefined)
}

export function getTermBySlug(slug: string, locale: BlogLocale = 'en'): Term | null {
  const en = glossaryEnSlug(locale, slug)
  if (!en) return null
  const file = path.join(dir(locale), `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  const { data, body } = parseFrontmatter(raw)
  const { html, toc } = renderMarkdown(body, locale)
  return {
    title: data.title || slug,
    seoTitle: data.seoTitle || '',
    description: data.description || '',
    slug,
    en,
    category: GLOSSARY_TERMS[en].category,
    date: data.date || '',
    updated: data.updated || '',
    keyword: data.keyword || '',
    short: data.short || data.description || '',
    related: (data.related || '')
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s in GLOSSARY_TERMS && s !== en),
    cta: data.cta || '',
    contentHtml: html,
    toc,
  }
}

export function getAllTerms(locale: BlogLocale = 'en'): TermMeta[] {
  return getTermSlugs(locale)
    .map((slug) => {
      const t = getTermBySlug(slug, locale)
      if (!t) return null
      const { contentHtml, toc, ...meta } = t
      return meta
    })
    .filter((t): t is TermMeta => t !== null)
    .sort((a, b) => a.title.localeCompare(b.title))
}
