import Link from 'next/link'
import { PostType } from '../lib/types'
import { getNotionData } from '../lib/getNotionData'
import Container from '../components/Container'

export default function Blog({ posts }: { posts: Object[] }) {
  return (
    <Container
      title="Notas - Lucio Villa"
      description="Thoughts on web development, tech, music and random chisme."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto my-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black">Notas</h1>
        <p className="text-gray-600 mb-10">
          Blog posts about web development, tech and random chisme.
        </p>

        {posts.map((post: PostType) => (
          <Link key={post.id} href={`/notas/${post.properties.Slug.rich_text[0].plain_text}`}>
            <a className="w-full">
              <div className="mb-8 w-full">
                <h3 className="text-xl font-medium w-full text-gray-900">
                  {post.properties.Post.title[0].plain_text}
                </h3>
                <p className="text-gray-700 text-md">
                  {post.properties.Description.rich_text[0].plain_text}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)

  return {
    props: {
      posts: database
    }
  }
}
