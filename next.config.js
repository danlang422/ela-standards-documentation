/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ela-standards-documentation',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  trailingSlash: true,
}

module.exports = nextConfig