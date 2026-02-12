/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serverless deployment - no static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
