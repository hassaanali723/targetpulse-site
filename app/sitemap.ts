import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://giggal.ai'
  const recent = new Date('2026-05-27')

  return [
    {
      url: baseUrl,
      lastModified: recent,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sign-up`,
      lastModified: recent,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: recent,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/affiliates`,
      lastModified: recent,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/catch-all-verification`,
      lastModified: recent,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: recent,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Legal pages — kept low priority so Google does NOT pick them for sitelinks
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date('2026-02-04'),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ]
}
