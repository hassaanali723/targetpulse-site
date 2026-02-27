import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/privacy-policy', '/refund-policy', '/terms-of-service'],
      },
    ],
    sitemap: 'https://targetpulse.net/sitemap.xml',
  }
}
