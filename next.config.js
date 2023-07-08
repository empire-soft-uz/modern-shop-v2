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
<<<<<<< HEAD
}
=======
};
>>>>>>> dc8bbe42138d4ac54ffb27b09b5efece8b0d549f

module.exports = nextConfig;
