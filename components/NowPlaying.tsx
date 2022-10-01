import useSWR from 'swr'
import fetcher from '@lib/fetcher'
import { NowPlayingSong } from '@lib/types'

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  if (!data && !data?.artist && !data?.songUrl) return null

  return (
    <>
      Currently listening to
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mx-1 inline-block h-4 w-4" alt="album-art" src={data.albumImageUrl} />
      <a className="underline" href={data.songUrl} target="_blank" rel="noopener noreferrer">
        {data.title}
      </a>{' '}
      by {data.artist}.
    </>
  )
}
