/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "playstation-aem-content.netlify.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
