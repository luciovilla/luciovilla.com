/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co" // Spotify Album Art
      }
    ]
  }
};

module.exports = withContentlayer(nextConfig);
