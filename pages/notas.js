import Container from '../components/Container'
import Nota from '../components/Nota'
import { getAllFilesFrontMatter } from '../lib/mdx'

export default function Blog({ posts }) {
  return (
    <Container
      title="My Notas – Lucio Villa"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Notas
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          {`Blog posts about web development, tech and random chisme. So far, I've written ${posts.length} articles on this site.`}
        </p>

        {posts.map((frontMatter) => (
          <Nota key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('notas')

  return { props: { posts } }
}
