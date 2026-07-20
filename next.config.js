/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────
  //  DOMAIN MIGRATION: targetpulse.net  →  giggal.ai
  //
  //  Every request to any URL on targetpulse.net returns a 301
  //  permanent redirect to the SAME path on giggal.ai. This
  //  preserves URL structure so Google can transfer link equity
  //  per-URL, and users clicking old links / bookmarks land in
  //  the right place.
  //
  //  Keep this redirect running INDEFINITELY. Removing it later
  //  loses all residual traffic from bookmarks, backlinks, and
  //  cached search results.
  // ─────────────────────────────────────────────────────────────
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://giggal.ai/:path*',
        statusCode: 301,
      },
    ]
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
    ]
  },
}

module.exports = nextConfig
