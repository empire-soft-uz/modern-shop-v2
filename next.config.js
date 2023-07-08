/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io/z6k3ktb71",
        pathname: "/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
