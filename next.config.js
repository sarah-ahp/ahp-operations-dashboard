/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable API routes (Vercel serverless)
  // output: 'export', 
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
