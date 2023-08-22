/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: ['/src/lib/wedding'],
  },
}

module.exports = nextConfig
