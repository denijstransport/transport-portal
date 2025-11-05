/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Zorg dat lint/type fouten de build niet stoppen
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // App Router is prima; geen extra features nodig
  experimental: {}
};

export default nextConfig;
