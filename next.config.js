/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    poweredByHeader: false,
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200]
    },
    sentry: { hideSourceMaps: true },
}

module.exports = nextConfig
