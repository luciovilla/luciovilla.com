import hydrate from 'next-mdx-remote/hydrate'

import { getFiles, getFileBySlug } from '../../lib/mdx'
import NotasLayout from '../../layouts/notas'
import MDXComponents from '../../components/MDXComponents'

export default function Notas({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: {
      ...MDXComponents,
    },
  })

  return <NotasLayout frontMatter={frontMatter}>{content}</NotasLayout>
}

export async function getStaticPaths() {
  const posts = await getFiles('notas')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('notas', params.slug)

  return { props: { ...post } }
}
