/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co" // Spotify Album Art
      }
    ]
  }
};
