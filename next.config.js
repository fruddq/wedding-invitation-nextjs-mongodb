/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    basePath: '/github-pages',
    reactStrictMode: true,
    trailingSlash: true,
  };
  
  module.exports = nextConfig;