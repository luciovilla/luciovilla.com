import type { NextApiRequest, NextApiResponse } from 'next'
import { getTopTracks } from 'lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getTopTracks()
  const { items } = await response.json()
  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((artist) => artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumArt: track.album.images.find((image) => image.width === 64)
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracks })
}
