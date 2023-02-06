'use client'

import useSWR from 'swr'
import fetcher from '@lib/fetcher'
import { NowPlayingSong } from '@lib/types'
import Image from 'next/image'

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  if (!data?.isPlaying) return null

  return (
    <>
      Currently listening to
      <span className="relative mx-1 inline-block h-4 w-4">
        <Image src={data.albumImageUrl.url} layout="fill" alt="album art" />
      </span>
      <a className="underline" href={data.songUrl} target="_blank" rel="noopener noreferrer">
        {data.title}
      </a>{' '}
      by {data.artist}.
    </>
  )
}
