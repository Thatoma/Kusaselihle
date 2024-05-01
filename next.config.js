/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kusaselihle.vercel.app",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
