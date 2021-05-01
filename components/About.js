import React from 'react'
import Image from 'next/image'
import NowPlaying from './NowPlaying'

export default function About() {
  return (
    <section id="about-me" className="relative w-full space-y-20 max-w-4xl m-auto mb-40">
      <h3 className="pt-5 text-center uppercase text-gray-600 w-full m-auto">
        About me{' '}
        <span className="inline-block w-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </h3>
      <div className="flex flex-wrap-reverse">
        <div className="w-full md:w-3/4 md:pr-12">
          <div className="md:pr-12">
            <p className="mt-4 leading-relaxed">
              I'm a front-end developer and designer currently working at The Washington Post as a
              Design Editor. Providing project and technical feedback to a team of over 30
              designers, improving developer workflows and pushing for brand consistency.
            </p>
            <p className="mt-4 leading-relaxed">
              Previously I worked at The San Francisco Chronicle as an Interactive Producer and Hoy
              (Chicago Tribune's Spanish daily newspaper) as a News Applications Developer.
            </p>
            <p className="mt-4 leading-relaxed">
              During my time in San Francisco I helped instruct a class on editorial web design and
              development at the Graduate School of Journalism in UC Berkeley and was the chapter
              president for the Bay Area chapter of the National Association of Hispanic Journalists
              (NAHJ).
            </p>

            <p className="mt-4 leading-relaxed">
              Outside of work, I was listed in Editor &amp; Publisher’s 2019 “
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
              ” I also co-founded{' '}
              <a
                className="underline"
                href="http://www.codelatino.com/"
                target="_blank"
                rel="noreferrer"
              >
                Code Latino Chicago
              </a>
              , a community empowering Latinos into web development, during my time in Chicago.
            </p>

            <p className="mt-4  leading-relaxed ">
              I’m originally from Compton, CA, and graduated from Cal State Fullerton (Go Titans!)
              with a Bachelor’s Degree in Photo Communications. Prior to being a communications
              major I was studying Computer Science at Cal Poly Pomona (Go Broncos!) before I
              transferred to Fullerton.
            </p>
            <div className="mt-4 border-t pt-2">
              <NowPlaying />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 ml-auto md:pl-4 pt-4 md:pt-0">
          <div className="max-w-full image-shadow">
            <Image alt="..." src="/me.jpg" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}
