"use client";

import useSWR from "swr";

import fetcher from "@lib/fetcher";
import { NowPlayingSong } from "@lib/types";

import AudioBars from "./icons/AudioBars";

export default function NowPlaying() {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  if (!data || error || data.status === 400) {
    return null;
  }

  return (
    <>
      {data.isPlaying ? "Currently listening to" : "Last listened to "}
      {data.isPlaying && <AudioBars />}
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
