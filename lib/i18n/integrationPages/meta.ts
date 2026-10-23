import type { Metadata } from 'next'
import { hreflangAlternates, type ClusterId } from '@/lib/i18n/clusters'
import type { PageMeta } from './types'

const OG_LOCALE: Record<string, string> = { it: 'it_IT', de: 'de_DE', es: 'es_LA', 'pt-br': 'pt_BR', fr: 'fr_FR', nl: 'nl_NL', pl: 'pl_PL', id: 'id_ID' }

/** Next metadata for an integration page in any language. */
export function integrationMetadata(meta: PageMeta, path: string, cluster: ClusterId, locale: string): Metadata {
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: path, languages: hreflangAlternates(cluster) },
    openGraph: {
      siteName: 'Giggal.ai',
      ...(OG_LOCALE[locale] ? { locale: OG_LOCALE[locale] } : {}),
      images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://giggal.ai${path}`,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: meta.ogTitle, description: meta.ogDescription },
  }
}
