"use client";

import Image from "next/image";
import useSWR from "swr";

import fetcher from "@lib/fetcher";
import { TopTracks } from "@lib/types";

import ArrowIcon from "./icons/ArrowIcon";

export default function TopSongs() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (!data?.tracks) {
    return null;
  }

  return (
    <section className="relative m-auto mb-20 w-full max-w-2xl px-4">
      <div className="mb-2 w-full text-lg uppercase">
        My Spotify Top Tracks <ArrowIcon />
      </div>

      <div className="mx-auto w-full">
        <div className="relative mb-8 flex">
          <ol className="list-outside list-decimal">
            {data.tracks.map((track) => (
              <li key={track.title} className="mt-2">
                <a
                  className="flex p-2 font-medium transition-shadow ease-in-out hover:shadow-2xl"
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play on Spotify"
                >
                  {track.albumArt && (
                    <div className="relative size-14">
                      <Image
                        src={track.albumArt.url}
                        className="object-fill"
                        alt="album art"
                        width={64}
                        height={64}
                      />
                    </div>
                  )}
                  <div className="flex flex-col self-end pl-3">
                    <p className="font-bold">{track.title}</p>
                    <p className="text-sm font-light">By {track.artist}</p>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
