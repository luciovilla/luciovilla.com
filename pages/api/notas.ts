import type { NextApiRequest, NextApiResponse } from 'next'
import { getNotas } from '../../lib/getNotas'
import { PostType } from '../../lib/types'

export default async function notas(req: NextApiRequest, res: NextApiResponse) {
  const response = await getNotas()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json('Failed to fetch las Notas.')
  }

  const allNotas = response.results.map((nota: PostType) => ({
    url: `https://luciovilla.com/notas/${nota.properties.Slug.rich_text[0].plain_text}`,
    title: nota.properties.Post.title[0].plain_text
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json(allNotas)
}
