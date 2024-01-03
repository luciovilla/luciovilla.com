"use client";

import Image from "next/image";
import useSWR from "swr";

import fetcher from "@lib/fetcher";
import { NowPlayingSong } from "@lib/types";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  if (!data?.isPlaying) {
    return null;
  }

  return (
    <>
      Currently listening to
      <span className="mx-1 inline-block h-4 w-4">
        <Image
          src={data.albumImageUrl.url}
          width={16}
          height={16}
          alt="album art"
        />
      </span>
      <a
        className="underline underline-offset-2"
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.title}
      </a>{" "}
      by {data.artist}.
    </>
  );
}
