export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/api/og/*",
      disallow: "/api"
    },

    sitemap: "https://luciovilla.com/sitemap.xml"
  };
}
