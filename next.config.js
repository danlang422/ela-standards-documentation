/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The basePath is only needed for GitHub Pages deployment, not local development
  // basePath: process.env.NODE_ENV === 'production' ? '/ela-standards-documentation' : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  trailingSlash: true,
}

module.exports = nextConfig