import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

const loadCustomFont = fetch(new URL('../../public/fonts/inter-var.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const postTitle = searchParams.get('title')
    const fontData = await loadCustomFont

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5'
          }}
        >
          <div
            style={{
              fontSize: 130,
              fontFamily: 'Inter',
              fontStyle: 'normal',
              color: 'black',
              lineHeight: '1.4'
            }}
          >
            {postTitle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate social image`, {
      status: 500
    })
  }
}
