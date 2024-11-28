/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Optimized for serverless deployment like Vercel
  experimental: {
    logging: 'verbose', // More detailed logging for debugging
  },
};
