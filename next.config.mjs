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
        TEMPLATE_EXCEL_CE: process.env.TEMPLATE_EXCEL_CE,
        TEMPLATE_EXCEL_RM: process.env.TEMPLATE_EXCEL_RM,
        TEMPLATE_ACC: process.env.TEMPLATE_ACC,
        TEMPLATE_ACE: process.env.TEMPLATE_ACE,
        TEMPLATE_ARM: process.env.TEMPLATE_ARM,
        TEMPLATE_BC: process.env.TEMPLATE_BC,
        TEMPLATE_BCR: process.env.TEMPLATE_BCR,
        TEMPLATE_BA: process.env.TEMPLATE_BA,
        TEMPLATE_CC: process.env.TEMPLATE_CC,
        TEMPLATE_CE: process.env.TEMPLATE_CE,
        TEMPLATE_PVRF: process.env.TEMPLATE_PVRF,
        TEMPLATE_PVRI: process.env.TEMPLATE_PVRI,
        TEMPLATE_RM: process.env.TEMPLATE_RM,
        WEBSITE_URL: process.env.WEBSITE_URL,
    },
};

export default nextConfig;
