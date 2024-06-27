import HomeLinks from "@components/HomeLinks";
import NowPlaying from "@components/NowPlaying";

export default function Home() {
  return (
    <>
      <div className="relative mx-auto mt-10 flex min-h-[60svh] w-full max-w-2xl items-center py-16 md:mb-32">
        <div className="mb-16 flex flex-col items-start justify-center">
          <div className="w-full">
            <h1 className="mb-1 text-4xl font-bold tracking-tight md:text-5xl">
              Lucio Villa
            </h1>
            <p className="mb-2 text-xs sm:text-base">
              Senior Software Engineer at The Washington Post
            </p>
            <p className="mt-1 text-balance sm:text-pretty sm:text-lg">
              Hola! I'm a first-generation Latino, software engineer and web
              designer. At the intersection of tech and journalism, I'm
              passionate about building projects that tell a story, products
              that keep users engaged and the art of "scrollytelling".{" "}
              <NowPlaying />
            </p>
            <HomeLinks />
          </div>
        </div>
      </div>
    </>
  );
}
