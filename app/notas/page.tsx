import Link from "next/link";

import { getNotionData } from "@lib/getNotionData";
import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";
import { PostType } from "@lib/types";

export const metadata = {
  title: "Notas",
  description: "My thoughts on web development, tech, music and random chisme.",
  openGraph: {
    title: "Notas",
    url: `${DOMAIN}/notas`,
    images: [
      {
        url: "https://luciovilla.com/api/social-image?title=Just%20my%20notes%20on%20web%20dev,%20tech,%20music%20and%20random%20chisme"
      }
    ]
  },
  twitter: {
    ...defaultMeta.twitter,
    title: "Notas",
    images: [
      "https://luciovilla.com/api/social-image?title=Just%20my%20notes%20on%20web%20dev,%20tech,%20music%20and%20random%20chisme"
    ]
  },
  alternates: {
    canonical: `${DOMAIN}/notas`
  }
};

export default async function Blog() {
  const posts: Object[] = await getNotionData();

  return (
    <div className="mx-auto my-16 flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        Notas
      </h1>
      <p className="mb-10">
        My notes on web development, tech and random chisme.
      </p>

      {posts.map((post: PostType) => (
        <Link
          key={post.id}
          href={`/notas/${post.properties.Slug.rich_text[0].plain_text}`}
          className="w-full"
        >
          <div className="mb-8 w-full">
            <h3 className="w-full text-xl font-medium">
              {post.properties.Post.title[0].plain_text}
            </h3>
            <p>{post.properties.Description.rich_text[0].plain_text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
