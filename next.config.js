/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
    basePath: '/github-pages',
    reactStrictMode: false,
    output: 'export',
    trailingSlash: true,
  
    exportPathMap: async function () {
      const paths = await generateStaticParams();
      const pathMap = {};
  
      paths.forEach((path) => {
        pathMap[`/admin/event/${path.params.eventName}`] = {
          page: '/admin/event/[eventName]',
          query: { eventName: path.params.eventName },
        };
      });
  
      return pathMap;
    },
  };
  
  module.exports = nextConfig;