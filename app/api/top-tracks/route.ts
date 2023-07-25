import { NextResponse } from "next/server";

import { getTopTracks } from "@lib/spotify";

export async function GET() {
  try {
    const { items } = await getTopTracks();

    if (!items) {
      throw new Error();
    }

    const tracks = items.slice(0, 10).map((track) => ({
      artist: track.artists.map((artist) => artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      albumArt: track.album.images.find((image) => image.width === 64)
    }));

    return NextResponse.json({ tracks });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
