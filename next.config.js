/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions:true
    },
    basePath: '/github-pages',
    reactStrictMode: true,
    output: 'export',

}

module.exports = nextConfig
