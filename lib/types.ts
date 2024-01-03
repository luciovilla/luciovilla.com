export type SpotifyAPIResponse = {
  item: {
    album: {
      images: Array<{ width: number; url: string }>;
    };
    artists: Array<{ name: string }>;
    external_urls: {
      spotify: string;
    };
    name: string;
  };
  is_playing: boolean;
};

export type NowPlayingSong = {
  albumImageUrl: {
    url: string;
  };
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
  albumArt: {
    url: string;
  };
};

export type TopTracks = {
  tracks?: Song[];
};

export type ProjectProps = {
  title?: string;
  projRole: string;
  image?: string;
  width?: number;
  height?: number;
  url?: string;
  summary: string;
  awards?: string;
  tools?: string;
};
