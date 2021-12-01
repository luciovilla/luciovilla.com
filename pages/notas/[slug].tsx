/* eslint-disable @next/next/no-img-element */
import BlogLayout from '../../layouts/BlogLayout'
import { getNotionData, getPage, getBlocks } from '../../lib/getNotionData'
import { Text, ListItem, Heading, ToDo, Toggle } from '../../components/ContentBlocks'
import { PostType, BlockType } from '../../lib/types'

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

      {blocks.map((block: BlockType) => {
        const { type, id } = block
        const value = block[type]
        const { text } = value

        switch (type) {
          case 'paragraph':
            return (
              <p className="mb-4" key={id}>
                {Text({ text: value.text, id })}
              </p>
            )

          case 'heading_1':
            return <Heading text={text} level={type} key={id} />

          case 'heading_2':
            return <Heading text={text} level={type} key={id} />

          case 'heading_3':
            return <Heading text={text} level={type} key={id} />

          case 'bulleted_list_item':
          case 'numbered_list_item':
            return <ListItem key={id} text={value.text} id={id} />

          case 'to_do':
            return <ToDo key={id} value={value} text={value.text} id={id} />

          case 'toggle':
            return <Toggle key={id} text={value.text} />

          case 'image':
            const imageSrc = value.type === 'external' ? value.external.url : value.file.url
            const caption = value.caption.length ? value.caption[0].plain_text : ''
            return (
              <figure>
                <img alt={caption} src={imageSrc} />
                {caption && <figcaption className="mt-2">{caption}</figcaption>}
              </figure>
            )

          default:
            return `Unsupported block (${
              type === 'unsupported' ? 'unsupported by Notion API' : type
            })`
        }
      })}
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
    }
  }
}

export default Post
