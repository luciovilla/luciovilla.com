import Image from 'next/image'

export default function Track({ track }) {
  return (
    <li className="mt-8 flex w-full max-w-3xl flex-row items-center border-b border-gray-200 pb-2">
      {track.albumArt && (
        <div className="relative h-12 w-12">
          <Image src={track.albumArt.url} layout="fill" alt="album art" />
        </div>
      )}
      <div className="flex flex-col self-end pl-3">
        <a
          className="w-60 truncate font-medium text-gray-900 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p className="w-60 truncate text-gray-500 sm:w-96 md:w-full">{track.artist}</p>
      </div>
    </li>
  )
}
