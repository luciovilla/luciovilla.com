import Container from '@layouts/Container'
import useSWR from 'swr'
import fetcher from '@lib/fetcher'
import { TopTracks } from '@lib/types'
import Track from '@components/Track'

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)

  return (
    <Container
      title="My Top Tracks - Lucio Villa"
      description="A daily update of my top tracks on Spotify."
    >
      <div className="my-16 mx-auto flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
          Top Tracks
        </h1>
        <p className="mb-10 text-gray-600">
          A daily update of my top tracks on Spotify (Mostly Bad Bunny...).
        </p>

        {data && (
          <ol className="w-full max-w-md list-outside list-decimal">
            {data.tracks.map((track) => (
              <Track key={track.songUrl} track={track} />
            ))}
          </ol>
        )}
      </div>
    </Container>
  )
}
