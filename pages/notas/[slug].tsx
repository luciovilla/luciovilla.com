import BlogLayout from '../../layouts/BlogLayout'
import { getNotionData, getPage, getBlocks } from '../../lib/getNotionData'
import { RenderBlocks } from '../../components/ContentBlocks'
import { PostType } from '../../lib/types'

type PostProps = {
  page: PostType
  blocks: any[]
}

const databaseId = process.env.NOTION_DATABASE_ID

const Post = ({ page, blocks }: PostProps) => {
  if (!page || !blocks) {
    return <div />
  }

  const timestamp = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <BlogLayout data={page}>
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">
        {page.properties.Post.title[0].plain_text}
      </h1>
      <div className="text-sm text-gray-800 mb-4">
        <span>{timestamp(page.properties.Date.date.start)}</span>
        {page.properties.Show_updated_timestamp.checkbox && page.last_edited_time && (
          <span className="text-sm text-gray-700 pl-1">
            / Updated: {timestamp(page.last_edited_time)}
          </span>
        )}
      </div>
      <RenderBlocks blocks={blocks} />
    </BlogLayout>
  )
}

export const getStaticPaths = async () => {
  const database = await getNotionData(databaseId)
  return {
    paths: database.map((page: any) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }) => {
  const database = await getNotionData(databaseId)
  const filter = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  )
  const page = await getPage(filter[0].id)
  const blocks = await getBlocks(filter[0].id)

  return {
    props: {
      page,
      blocks
    },
    revalidate: 60
  }
}

export default Post
