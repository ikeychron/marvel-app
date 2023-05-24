/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
    ],
  },
};

module.exports = nextConfig;

