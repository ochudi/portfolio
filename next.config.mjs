/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    logging: {},
  },
};

export default nextConfig;
