import GenerateTags from '@components/GenerateTags'
import { getNotionData, getPage } from '@lib/getNotionData'

export default async function RootHead({ params }: { params: { slug: string } }) {
  const database = await getNotionData(process.env.NOTION_DATABASE_ID)
  const filter = database.filter(
    (blog: any) => blog.properties.Slug.rich_text[0].plain_text === params.slug
  )
  const page = await getPage(filter[0].id)

  const pageTitle = page.properties.Post.title[0].plain_text || 'Notas - Lucio Villa'

  return (
    <GenerateTags
      title={pageTitle}
      description="My thoughts on web development, tech, music and random chisme."
      slug={`notas/${params.slug}`}
    />
  )
}
