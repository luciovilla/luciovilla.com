import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '@lib/spotify'
import { NowPlayingSong } from '@lib/types'

export default async function nowPlaying(
  req: NextApiRequest,
  res: NextApiResponse<NowPlayingSong>
) {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false })
  }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((artist) => artist.name).join(', ')
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title
  })
}
