/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lps.cognni.ai', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
