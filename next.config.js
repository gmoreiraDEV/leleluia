/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['www.datocms-assets.com'],
    },
    pageExtensions: ['.tsx', 'page.jsx'],
}

module.exports = nextConfig
