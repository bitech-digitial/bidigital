import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  experimental: {
    optimizeCss: true,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
    {
      source: '/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ],
}

export default nextConfig
