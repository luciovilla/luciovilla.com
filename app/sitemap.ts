import { getNotionData } from "@lib/getNotionData";
import { PostType } from "@lib/types";

export default async function sitemap() {
  const postData: Object[] = await getNotionData();

  const notas = postData.map((nota: PostType) => ({
    url: `https://luciovilla.com/notas/${nota.properties.Slug.rich_text[0].plain_text}`,
    lastModified: nota.last_edited_time
  }));

  const routes = ["", "/about-me", "/notas", "/work"].map((route) => ({
    url: `https://luciovilla.com${route}`,
    lastModified: new Date().toISOString()
  }));

  return [...routes, ...notas];
}
