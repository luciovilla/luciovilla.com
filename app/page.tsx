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
          <h2 className="mb-2 sm:text-lg">
            Senior Software Engineer at The Washington Post
          </h2>
          <p className="mt-1 sm:text-lg">
            First-generation Latino, software engineer and web designer.
            Previously at Vox Media, San Francisco Chronicle, Chicago Tribune's
            Spanish daily (Hoy Chicago) and formerly a photojournalist.{" "}
            <NowPlaying />
          </p>
          <HomeLinks />
        </div>
      </div>
    </div>
  );
}
