import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const notas = allPosts.map((nota) => ({
    url: `https://luciovilla.com/notas/${nota.slug}`
  }));

  const routes = ["", "/about-me", "/notas", "/projects"].map((route) => ({
    url: `https://luciovilla.com${route}`
  }));

  return [...routes, ...notas];
}
