/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
    images: {
        remotePatterns: [
            {
                hostname: '**.googleusercontent.com',
            },
        ],
    },
    env: {
        // ⚠️ Make sure data put here isn't sensitive ⚠️
        // Everything below is accessible on the internet without requiring authentication.
        WEBSITE_URL: process.env.WEBSITE_URL,
    },
};

export default nextConfig;
