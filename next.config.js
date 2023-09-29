/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        staticFormsPrivateKey: process.env.STATIC_FORMS_PRIVATE_KEY
    }
}

module.exports = nextConfig
