/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/navle-dashboard',
  assetPrefix: '/navle-dashboard',
  trailingSlash: true,
}

export default nextConfig
