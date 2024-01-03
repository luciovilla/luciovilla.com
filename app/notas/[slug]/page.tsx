import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";
import { allPosts } from "contentlayer/generated";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }));
}

const timestamp = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};

export async function generateMetadata({
  params
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post?._id) {
    return;
  }

  const title = post.title;
  const description = post.description;
  const publishedTime = post.date?.start;
  // const modifiedTime = pageData.last_edited_time;
  const postURL = `${DOMAIN}/notas/${post.slug}`;
  const socialImage = `${DOMAIN}/api/social-image?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      // modifiedTime,
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

const PostLayout = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  // Return 404 page if slug not found
  if (!post?.slug) {
    notFound();
  }

  const postURL = `${DOMAIN}/notas/${params.slug}`;
  const postTitle = post?.title || "Post Needs Title";
  const socialImage = `https://luciovilla.com/api/social-image?title=${postTitle}`;

  // TO DO: look into how latest Next.js does this now
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle,
    datePublished: post.date?.start,
    // dateModified: modifiedTime,
    image: socialImage,
    url: postURL,
    author: {
      "@type": "Person",
      name: "Lucio Villa"
    }
  };

  return (
    <article className="prose mx-auto my-16 w-full max-w-2xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="mb-4 tracking-tight">{post.title}</h1>
      <div className="mb-4 text-sm">
        {post.date?.start && (
          <time dateTime={post.date.start}>{timestamp(post.date.start)}</time>
        )}
        {/* {post.showUpdatedTimestamp && post (
          <span className="pl-1 text-sm">
            / Updated: {timestamp(modifiedTime)}
          </span>
        )} */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  );
};

export default PostLayout;
