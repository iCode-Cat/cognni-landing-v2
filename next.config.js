/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lps.cognni.ai'],
  },
};

module.exports = nextConfig;
