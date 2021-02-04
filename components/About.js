/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function About() {
  return (
    <section className="relative py-20 w-full" id="about-me">
      <div className="container mx-auto px-4 pb-32 w-full md:w-4/5">
        <div className="text-center w-full mb-10 uppercase text-gray-600">
          About me
          <span className="inline-block w-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-wrap flex-wrap-reverse">
          <div className="w-full md:w-3/4 pr-6 md:pr-12">
            <div className="md:pr-12">
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                I'm a designer and web developer currently working at The Washington Post as a
                Design Editor.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Previously I worked at The San Francisco Chronicle, Hoy; Chicago Tribune's Spanish
                daily and The Chicago Reporter.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                During my time in San Francisco I helped instruct a class on editorial web design
                and development at the Graduate School of Journalism in UC Berkeley and was the
                board President of the Bay Area chapter of the National Association of Hispanic
                Journalists (NAHJ).
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Outside of work, I was listed in Editor &amp; Publisher’s 2019 “
                <a
                  className="underline"
                  href="https://www.editorandpublisher.com/feature/eps-25-under-35-2019-the-next-generation-of-newspaper-leaders-wants-to-keep-the-industry-moving/"
                  target="_blank"
                  rel="noreferrer"
                >
                  25 Under 35: The Future Generation of Newspaper Leaders.
                </a>
                ” I also co-founded{' '}
                <a
                  className="underline"
                  href="http://www.codelatino.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Latino Chicago
                </a>{' '}
                and the{' '}
                <a
                  className="underline"
                  href="https://www.meetup.com/Latino-Techies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Latino Techies Chicago Meetup
                </a>
                .
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                I’m originally from Compton, CA, and graduated from Cal State Fullerton (Go Titans)
                with a Bachelor’s Degree in Photo Communications. During my time at Fullerton I was
                a photo editor at The Daily Titan. Prior to being a journalism major I was studying
                Computer Science at Cal Poly Pomona (Go Broncos) where I was a photo editor at The
                Poly Post for two years before I transferred to Fullerton.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                I am currently serving on the board of the NAHJ DC Chapter and am a member of the following orgs: SND, ONA and
                IRE.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/4 ml-auto pl-4 pt-4 md:pt-0">
            <img alt="..." className="max-w-full rounded-lg shadow-xl" src="./me.jpg" />
          </div>
        </div>
      </div>
    </section>
  )
}
