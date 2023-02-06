import { getNotionData, getPage, getBlocks } from '@lib/getNotionData'
import { RenderBlocks } from '@components/ContentBlocks'

const databaseId = process.env.NOTION_DATABASE_ID

export async function generateStaticParams() {
  const notas: any = await getNotionData(databaseId)

  return notas.map((nota) => ({
    slug: nota.properties.Slug.rich_text[0].plain_text
  }))
}

const Post = async ({ params }) => {
  const database = await getNotionData(databaseId)
  const filter = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  )
  const page = await getPage(filter[0].id)
  const blocks = await getBlocks(filter[0].id)

  if (!page || !blocks) return null

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
