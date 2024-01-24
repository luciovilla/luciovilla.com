import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RenderBlocks } from "@components/ContentBlocks";
import { getNotionData, getPage, getBlocks } from "@lib/getNotionData";
import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";

export async function generateMetadata({
  params
}): Promise<Metadata | undefined> {
  const database = await getNotionData();
  const page = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  );

  if (page.length === 0) {
    return;
  }

  const pageData = await getPage(page[0].id);
  const title = pageData.properties.Post.title[0].plain_text;
  const description = pageData.properties.Description.rich_text[0].plain_text;
  const publishedTime = pageData.properties.Date.date.start;
  const modifiedTime = pageData.last_edited_time;
  const postURL = `${DOMAIN}/notas/${params.slug}`;
  const socialImage = `https://luciovilla.com/api/social-image?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      modifiedTime,
      type: "article",
      url: postURL,
      images: [{ url: socialImage }]
    },
    twitter: {
      ...defaultMeta.twitter,
      title,
      images: [socialImage]
    },
    alternates: {
      canonical: postURL
    }
  };
}

export async function generateStaticParams() {
  const notas: any = await getNotionData();

  return notas.map((nota) => ({
    slug: nota.properties.Slug.rich_text[0].plain_text
  }));
}

const Post = async ({ params }) => {
  const database = await getNotionData();
  const post = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  );

  // Return not found if slug not found in Notion
  if (post.length === 0) {
    notFound();
  }

  const page = await getPage(post[0].id);
  const blocks = await getBlocks(post[0].id);

  // Return not found if page is empty instead of showing a blank page
  if (!page || !blocks) {
    notFound();
  }

  const timestamp = (timestamp: Date) => {
    const dateString = timestamp.toLocaleDateString("en-US", {
      dateStyle: "medium"
    });
    const timeString = timestamp
      .toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        timeStyle: "short"
      })
      .toLowerCase();
    const timezoneName = timestamp
      .toLocaleString("en-US", {
        timeZone: "America/New_York",
        timeZoneName: "short"
      })
      .split(" ")
      .pop();
    return dateString + " " + timeString + " " + timezoneName;
  };
  const title = page.properties.Post.title[0].plain_text;
  const publishedTime = new Date(page.properties.Date.date.start);
  const showUpdatedTimestamp = page.properties.Show_updated_timestamp.checkbox;
  const publishedTimestamp = publishedTime.toLocaleDateString("en-US", {
    dateStyle: "medium"
  });
  const modifiedTime = page.last_edited_time
    ? new Date(page.last_edited_time)
    : null;
  const postURL = `${DOMAIN}/notas/${params.slug}`;
  const socialImage = `https://luciovilla.com/api/social-image?title=${title}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    image: socialImage,
    url: postURL,
    author: {
      "@type": "Person",
      name: "Lucio Villa"
    }
  };

  return (
    <article className="mx-auto my-16 w-full max-w-2xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <div className="mb-4 text-sm">
        {showUpdatedTimestamp && modifiedTime ? (
          page.last_edited_time && (
            <time
              dateTime={modifiedTime.toISOString()}
              className="pl-1 text-sm"
            >
              Updated {timestamp(modifiedTime)}
            </time>
          )
        ) : (
          <time dateTime={publishedTime.toISOString()}>
            {publishedTimestamp}
          </time>
        )}
      </div>
      <RenderBlocks blocks={blocks} />
    </article>
  );
};

export default Post;
