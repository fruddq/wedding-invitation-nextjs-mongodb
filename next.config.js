/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions:true
    },
    basePath: '/github-pages',
    reactStrictMode: true,

}

module.exports = nextConfig
