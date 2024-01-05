import HomeLinks from "@components/HomeLinks";
import NowPlaying from "@components/NowPlaying";

export default function Home() {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-2xl items-center py-16 md:mb-32">
      <div className="mb-16 flex flex-col items-start justify-center">
        <div className="w-full">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Lucio Villa
          </h1>
          <h2 className="mb-2">
            Senior Software Engineer at The Washington Post
          </h2>
          <p className="mt-1 sm:text-lg">
            Hola! I'm a first-generation Latino, software engineer and web
            designer. Passionate about building web products, improving
            developer experience and making music playlists. <NowPlaying />
          </p>
          <HomeLinks />
        </div>
      </div>
    </div>
  );
}
