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
    domains: ['images.unsplash.com', 'source.unsplash.com'],
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
    ]
  },
}

module.exports = nextConfig

