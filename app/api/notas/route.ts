import { getNotas } from '@lib/getNotas'
import { PostType } from '@lib/types'
import { NextResponse } from 'next/server'

export async function GET() {
  const notas = await getNotas()

  const allNotas = notas.results.map((nota: PostType) => ({
    url: `https://luciovilla.com/notas/${nota.properties.Slug.rich_text[0].plain_text}`,
    title: nota.properties.Post.title[0].plain_text
  }))

  return NextResponse.json({ allNotas }, { status: 200 })
}
