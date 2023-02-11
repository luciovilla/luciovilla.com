import Link from 'next/link'
import { PostType } from '@lib/types'
import { getNotionData } from '@lib/getNotionData'
import { DOMAIN } from '@lib/globals'

export const metadata = {
  title: 'Notas',
  description: 'My thoughts on web development, tech, music and random chisme.',
  openGraph: {
    title: 'Notas',
    url: `${DOMAIN}/notas`
  },
  twitter: {
    title: 'Notas',
    card: 'summary_large_image',
    site: '@luciovilla',
    creator: '@luciovilla',
    images: ['https://luciovilla.com/site.png']
  },
  alternates: {
    canonical: `${DOMAIN}/notas`
  }
}

export default async function Blog() {
  const posts: Object[] = await getNotionData(process.env.NOTION_DATABASE_ID)

  return (
    <div className="my-16 mx-auto flex max-w-2xl flex-col items-start justify-center">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">Notas</h1>
      <p className="mb-10 text-gray-600">
        Blog posts about web development, tech and random chisme.
      </p>

      {posts.map((post: PostType) => (
        <Link
          key={post.id}
          href={`/notas/${post.properties.Slug.rich_text[0].plain_text}`}
          className="w-full"
        >
          <div className="mb-8 w-full">
            <h3 className="w-full text-xl font-medium text-gray-900">
              {post.properties.Post.title[0].plain_text}
            </h3>
            <p className="text-gray-700">{post.properties.Description.rich_text[0].plain_text}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
