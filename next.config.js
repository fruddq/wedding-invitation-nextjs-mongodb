/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the invalid 'images' property from the 'experimental' object
    experimental: {
      serverActions: true,
    },
  
    // Set the base path for the application
    basePath: '/github-pages',
  
    // Enable strict mode for React components
    reactStrictMode: true,
  
    // Set the output type to 'export'
    output: 'export',
  
    // Enable trailing slashes in URLs
    trailingSlash: true,
  
    // Use 'generateStaticParams' instead of 'exportPathMap' for dynamic routes
    async rewrites() {
      const paths = await generateStaticParams();
      const rewrites = [];
  
      paths.forEach((path) => {
        rewrites.push({
          source: `/admin/event/${path.params.eventName}`,
          destination: '/admin/event/[eventName]',
          query: { eventName: path.params.eventName },
        });
      });
  
      return rewrites;
    },
  };
  
  module.exports = nextConfig;