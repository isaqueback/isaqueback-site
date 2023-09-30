/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        staticFormsPrivateKey: process.env.STATIC_FORMS_PRIVATE_KEY
    },
    eslint: {
        ignoreDuringBuilds: true
    }
}

module.exports = nextConfig
