import Image from "next/image";

import Awards from "@components/Awards";
import Footer from "@components/Footer";
import ArrowIcon from "@components/icons/ArrowIcon";
import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";

import profilePic from "../../public/me.jpg";

export const metadata = {
  title: "About Me",
  openGraph: {
    title: "About Me",
    url: `${DOMAIN}/about-me`,
  },
  twitter: {
    ...defaultMeta.twitter,
    title: "About Me",
  },
  alternates: {
    canonical: `${DOMAIN}/about-me`,
  },
};

export default function AboutMe() {
  return (
    <>
      <section
        id="about-me"
        className="relative m-auto mb-40 w-full max-w-2xl space-y-20"
      >
        <div className="m-auto w-full pt-5 text-center uppercase text-gray-600">
          About me <ArrowIcon />
        </div>
        <div className="flex flex-wrap-reverse">
          <div className="w-full text-gray-800 md:w-4/5 md:pr-12">
            <div className="md:pr-12">
              <p className="mt-4 leading-relaxed">
                Hola! My name is Lucio and I recently made the switch from the
                newsroom to product and now work as a Senior Software Engineer
                at The Washington Post.
              </p>
              <p className="mt-4 leading-relaxed" />
              <p className="mt-4 leading-relaxed">
                Previously at Vox Media, San Francisco Chronicle, Chicago
                Tribune's Spanish daily (Hoy Chicago), The Chicago Reporter and
                La Opinión.
              </p>
              <p className="mt-4 leading-relaxed">
                During my time in San Francisco I helped instruct a class on
                editorial web design and development in the Graduate School of
                Journalism at the University of California, Berkeley.
              </p>

              <p className="mt-4 leading-relaxed">
                Outside of work, I was listed in Editor &amp; Publisher's 2019 “
                <a
                  className="underline"
                  href="https://www.editorandpublisher.com/feature/eps-25-under-35-2019-the-next-generation-of-newspaper-leaders-wants-to-keep-the-industry-moving/"
                  target="_blank"
                  rel="noreferrer"
                >
                  25 Under 35: The Future Generation of Newspaper Leaders
                </a>
                ” and Fullstack Academy's “
                <a
                  className="underline"
                  href="https://www.fullstackacademy.com/blog/developers-that-work-in-media"
                  target="_blank"
                  rel="noreferrer"
                >
                  15 Developers to Follow If You Want to Work in Media.
                </a>
                ” I cofounded{" "}
                <a
                  className="underline"
                  href="http://www.codelatino.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Latino Chicago
                </a>
                , a community empowering Latinos into web development. A
                contributor of Next.js (
                <a
                  className="underline"
                  href="https://github.com/vercel/next.js/releases/tag/v9.4.3"
                  target="_blank"
                  rel="noreferrer"
                >
                  v9.4.3
                </a>
                ), an open-source web development React framework.
              </p>
              <p className="mt-4  leading-relaxed ">
                I am a lifetime member of the National Association of Hispanic
                Journalists (NAHJ) and previously served on the local chapter
                boards in DC, Bay Area and Chicago.
              </p>
              <p className="mt-4  leading-relaxed ">
                I'm originally from Compton, CA and graduated from Cal State
                Fullerton (Go Titans!) with a Bachelor's Degree in Photo
                Communications.
              </p>
            </div>
          </div>
          <div className="mx-auto w-1/2 pt-4 md:ml-auto md:w-1/5 md:pl-4 md:pt-0">
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
      <Footer />
    </>
  );
}
