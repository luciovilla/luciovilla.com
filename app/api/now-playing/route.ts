import { getNowPlaying } from '@lib/spotify'
import { SpotifyAPIResponse } from '@lib/types'
import { NextResponse } from 'next/server'

export const revalidate = 30

export async function GET() {
  try {
    const response: SpotifyAPIResponse = await getNowPlaying()

    if (!response.item) {
      throw new Error()
    }

    const isPlaying = response.is_playing
    const title = response.item.name
    const artist = response.item.artists.map((artist) => artist.name).join(', ')
    const albumImageUrl = response.item.album.images.find((image) => image.width === 64)
    const songUrl = response.item.external_urls.spotify

    return NextResponse.json({ albumImageUrl, artist, isPlaying, songUrl, title }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ isPlaying: false }, { status: 200 })
  }
}
