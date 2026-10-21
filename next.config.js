/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // Serve modern formats; next/image negotiates AVIF → WebP → original.
    formats: ['image/avif', 'image/webp'],
    // `domains` was deprecated in favour of `remotePatterns`. The unsplash hosts
    // it used to list are already covered by the wildcard below, so dropping it
    // changes nothing about which images load.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
      {
        // Long-lived caching for static image/font assets under /public.
        // These change only on deploy, so a 1-year TTL is safe and satisfies
        // Lighthouse's "efficient cache lifetimes" audit.
        source: '/:path*.(png|jpg|jpeg|webp|avif|gif|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // API docs moved from /api-reference → /public/docs
      { source: '/api-reference', destination: '/public/docs', permanent: true },
      // Old favicon URL Google still has cached; the SVG was replaced by
      // app/icon.png when the official brand mark landed.
      { source: '/icon.svg', destination: '/icon.png', permanent: true },
      // Free checker moved to the root on 2026-09-18 to match the localized
      // tool pages (/it/verifica-email, /de/email-adresse-pruefen). The team
      // had already placed links on /email-verifier before the page existed,
      // so that URL forwards too. Both point straight at the final URL.
      { source: '/tools/catch-all-email-checker', destination: '/email-checker', permanent: true },
      { source: '/email-verifier', destination: '/email-checker', permanent: true },
      // Strings Googlebot read out of page script data and tried as URLs
      // (Search Console 404 report, 2026-10-22): the "/mo" price suffix in
      // three languages and the API path from a docs code sample.
      { source: '/mo', destination: '/pricing', permanent: true },
      { source: '/mois', destination: '/fr/tarifs', permanent: true },
      { source: '/m%C3%AAs', destination: '/pt-br/precos', permanent: true },
      { source: '/v1/verify', destination: '/public/docs/verify-single', permanent: true },
      // Footer React keys (href + label) that Googlebot read from page script data
      // and crawled as URLs. The key bug is fixed in components/l10n/Footer.tsx;
      // these forward the URLs Google already recorded to the real pages.
      { source: '/deE-Mail-Verifizierungsdienst', destination: '/de', permanent: true },
      { source: '/de/wegwerf-e-mail-anbieterWegwerf-E-Mail-Anbieter', destination: '/de/wegwerf-e-mail-anbieter', permanent: true },
      { source: '/fr/glossaireGlossaire', destination: '/fr/glossaire', permanent: true },
      { source: '/pt-br/glossarioGloss%C3%A1rio', destination: '/pt-br/glossario', permanent: true },
      { source: '/de/glossarGlossar', destination: '/de/glossar', permanent: true },
      { source: '/es/glosarioGlosario', destination: '/es/glosario', permanent: true },
      { source: '/fr/blogBlog', destination: '/fr/blog', permanent: true },
      { source: '/de/blogBlog', destination: '/de/blog', permanent: true },
      { source: '/es/blogBlog', destination: '/es/blog', permanent: true },
      { source: '/pt-br/blogBlog', destination: '/pt-br/blog', permanent: true },
      { source: '/it/blogBlog', destination: '/it/blog', permanent: true },
      { source: '/fr/contactContact', destination: '/fr/contact', permanent: true },
      { source: '/pt-br/privacidadePrivacidade', destination: '/pt-br/privacidade', permanent: true },
      { source: '/fr/tarifsTarifs', destination: '/fr/tarifs', permanent: true },
      { source: '/de/preisePreise', destination: '/de/preise', permanent: true },
      { source: '/fr/integrationsInt%C3%A9grations', destination: '/fr/integrations', permanent: true },
      { source: '/pt-br/precosPre%C3%A7os', destination: '/pt-br/precos', permanent: true },
      { source: '/pt-br/integracoesIntegra%C3%A7%C3%B5es', destination: '/pt-br/integracoes', permanent: true },
      { source: '/pt-br/contatoContato', destination: '/pt-br/contato', permanent: true },
      { source: '/pt-br/reembolsosReembolsos', destination: '/pt-br/reembolsos', permanent: true },
      { source: '/fr/confidentialiteConfidentialit%C3%A9', destination: '/fr/confidentialite', permanent: true },
      { source: '/fr/remboursementsRemboursements', destination: '/fr/remboursements', permanent: true },
    ]
  },
}

module.exports = nextConfig
