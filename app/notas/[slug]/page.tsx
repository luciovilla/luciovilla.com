import { notFound } from 'next/navigation'
import { getNotionData, getPage, getBlocks } from '@lib/getNotionData'
import { RenderBlocks } from '@components/ContentBlocks'
import { DOMAIN } from '@lib/globals'

const databaseId = process.env.NOTION_DATABASE_ID

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const database = await getNotionData(databaseId)
  const page = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  )

  if (page.length === 0) {
    return
  }

  const pageData = await getPage(page[0].id)
  const title = pageData.properties.Post.title[0].plain_text
  const description = pageData.properties.Description.rich_text[0].plain_text
  const publishedTime = pageData.properties.Date.date.start
  const modifiedTime = pageData.last_edited_time
  const postURL = `${DOMAIN}/notas/${params.slug}`
  const socialImage = `https://luciovilla.com/api/social-image?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      modifiedTime,
      type: 'article',
      url: postURL,
      images: [{ url: socialImage }]
    },
    twitter: {
      title,
      description,
      images: [socialImage]
    },
    alternates: {
      canonical: postURL
    }
  }
}

export async function generateStaticParams() {
  const notas: any = await getNotionData(databaseId)

  return notas.map((nota) => ({
    slug: nota.properties.Slug.rich_text[0].plain_text
  }))
}

const Post = async ({ params }) => {
  const database = await getNotionData(databaseId)
  const post = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  )

  // Return not found if slug not found in Notion
  if (post.length === 0) {
    notFound()
  }

  const page = await getPage(post[0].id)
  const blocks = await getBlocks(post[0].id)

  // Return not found if page is empty instead of showing a blank page
  if (!page || !blocks) {
    notFound()
  }

  const timestamp = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <article className="my-16 mx-auto w-full max-w-2xl">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
        {page.properties.Post.title[0].plain_text}
      </h1>
      <div className="mb-4 text-sm text-gray-800">
        <span>{timestamp(page.properties.Date.date.start)}</span>
        {page.properties.Show_updated_timestamp.checkbox && page.last_edited_time && (
          <span className="pl-1 text-sm text-gray-700">
            / Updated: {timestamp(page.last_edited_time)}
          </span>
        )}
      </div>
      <RenderBlocks blocks={blocks} />
    </article>
  )
}

export default Post
