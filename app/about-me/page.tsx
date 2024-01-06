import Image from "next/image";

import Awards from "@components/Awards";
import Footer from "@components/Footer";
import TopSongs from "@components/TopSongs";
import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";

import profilePic from "../../public/me.jpg";

export const metadata = {
  title: "About Me",
  openGraph: {
    title: "About Me",
    url: `${DOMAIN}/about-me`
  },
  twitter: {
    ...defaultMeta.twitter,
    title: "About Me"
  },
  alternates: {
    canonical: `${DOMAIN}/about-me`
  }
};

export default function AboutMe() {
  return (
    <>
      <section
        id="about-me"
        className="relative m-auto my-16 mb-40 w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          About Me
        </h1>
        <div className="flex flex-wrap-reverse">
          <div className="w-full md:w-4/5 md:pr-12">
            <div className="mt-4 space-y-2 leading-relaxed md:pr-12">
              <p>
                Hola! My name is Lucio Villa and I am not your typical software
                engineer. With a background in photojournalism and experience
                building websites (ask me about my high school web design
                competition days!) I learned that I can combine my skills in web
                development in the world of journalism when The New York Times
                published their multimedia interactive project called{" "}
                <a
                  href="https://www.nytimes.com/2022/12/23/insider/snow-fall-at-10-how-it-changed-journalism.html"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Snow Fall
                </a>{" "}
                back in 2012.
              </p>
              <p>
                Now currently working as a Senior Software Engineer at The
                Washington Post where I help build and maintain the media
                players.
              </p>
              <p>
                Previously worked at Vox Media, The Washington Post (I left and
                cameback), San Francisco Chronicle and Chicago Tribune where I
                had built, designed and maintained frontend platforms at each
                organization. Throughout my career using technologies like
                PHP/Wordpress, Python/Django, Grunt.js, Node.js, Gatsby,
                Next.js, React and TypeScript to name a few.
              </p>
              <p>Outside of work:</p>
              <ul className="list-outside list-disc space-y-2 pl-4">
                <li>
                  A contributor of{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Next.js
                  </a>
                  , an open-source web development React framework.
                </li>
                <li>
                  Helped instruct a class on editorial web design and
                  development in the Graduate School of Journalism at the
                  University of California, Berkeley.
                </li>
                <li>
                  Listed in Editor &amp; Publisher's 2019 “
                  <a
                    className="underline underline-offset-2"
                    href="https://editorandpublisher.pressreader.com/editor-publisher/20190401"
                    target="_blank"
                    rel="noreferrer"
                  >
                    25 Under 35: The Future Generation of Newspaper Leaders
                  </a>
                </li>
                <li>
                  Fullstack Academy's “
                  <a
                    href="https://www.fullstackacademy.com/blog/developers-that-work-in-media"
                    className="underline underline-offset-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    15 Developers to Follow If You Want to Work in Media.
                  </a>
                </li>
                <li>
                  Co-founded{" "}
                  <a
                    className="underline underline-offset-2"
                    href="https://gozamos.com/latino-tech-pioneer-lucio-villa-leaves-his-mark-in-chicago/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code Latino Chicago
                  </a>{" "}
                  a community empowering Latinos into web development.
                </li>
                <li>
                  Lifetime member of the National Association of Hispanic
                  Journalists (NAHJ) and previously served on the local chapter
                  boards in DC, Bay Area and Chicago.
                </li>
              </ul>

              <p>
                I'm originally from Compton, CA and graduated from Cal State
                Fullerton (Go Titans!) with a Bachelor's Degree in Photo
                Communications.
              </p>
            </div>
          </div>
          <div className="w-1/2 pt-4 sm:mx-auto sm:w-1/5 md:ml-auto md:pl-4 md:pt-0">
            <div className="max-w-full">
              <Image
                alt="..."
                src={profilePic}
                placeholder="blur"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <Awards />
      <TopSongs />
      <Footer />
    </>
  );
}
