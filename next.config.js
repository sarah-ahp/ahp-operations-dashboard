/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // ISR: Revalidate every hour (3600 seconds)
  // Static export with client-side data refresh
}

module.exports = nextConfig
