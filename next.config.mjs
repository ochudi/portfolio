/** @type {import('next').NextConfig} */
export const nextConfig = {
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
