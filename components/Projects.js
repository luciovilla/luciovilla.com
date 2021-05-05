import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default function Projects() {
  return (
    <section id="projects" className="relative w-full space-y-20 max-w-4xl m-auto mb-40">
      <div className="pt-5 text-center uppercase text-gray-600 w-full m-auto">
        Select Projects{' '}
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
      <Featured
        title="Serial Killer Series"
        tools="React, Next.js, React PLX (animation library), Adobe XD, Node"
        awards={`2x SND 2020 "Award of Excellence" awards.`}
        projRole="Responsible for the project concept, design, front-end development, commissioned and art directed illustrations."
        image="projects/sk.jpg"
        summary="A three-part investigation series on law enforcement’s failure to catch the most prolific serial killer in U.S. history."
        url="https://www.washingtonpost.com/graphics/2020/national/samuel-little-serial-killer/part-one/"
        width={2126}
        height={1222}
      />
      <Featured
        title="Mueller Report Illustrated"
        projRole="Front-end developer."
        tools="React, React PLX, ffmpeg, Node, Gulp"
        image="projects/mri.jpg"
        summary="A six-part interactive series on the obstruction investigation with audio and scrolling animations."
        url="https://www.washingtonpost.com/graphics/2019/politics/mueller-report-illustrated/about/"
        awards={`Malofiej International Awards Gold Medal, 2019 SND Best in Show, 2019 SND Gold Medal, 2019 SND Silver Medal, 2019 SND Bronze Medal, x2 2019 SND Award of Excellence, 
          2019 Scripps Howards Award Finalist, 2x ONA Finalist`}
        width={1560}
        height={980}
      />
      <Featured
        title="Mekong River"
        projRole="Designer and front-end developer."
        awards="2020 SND Award of Excellence"
        tools="Gulp, ScrollMagic.js, Node, Adobe XD"
        image="projects/mekong.jpg"
        summary="Inteactive story about displaced villages and a ruined ecosystem with audio narration from the reporter."
        url="https://www.washingtonpost.com/graphics/2020/world/the-mekong-river-basin-under-threat/"
        width={1000}
        height={518}
      />
      <Featured
        title="Military Helicopter"
        projRole="Designer and front-end developer."
        image="projects/helicopter.jpg"
        tools="React, Next.js, Adobe XD, Node, PLX animation library"
        awards="2020 SND Bronze Medal"
        summary="A reconstruction of the
          movements of two D.C. Army National Guard
          helicopters that parked nearly still in the air
          over protesters, using flight-tracking data, images and videos."
        url="https://www.washingtonpost.com/graphics/2020/investigations/helicopter-protests-washington-dc-national-guard/"
        width={1200}
        height={630}
      />
      <Featured
        title="Rose Garden Photo"
        tools="React, Next.js, Node, ScrollMonitor.js"
        projRole="Designer and front-end developer."
        image="projects/rose.jpg"
        summary="An interactive project that zooms and pans to show who attended a possible superspreader event at the White House."
        url="https://www.washingtonpost.com/graphics/2020/politics/coronavirus-attendees-barrett-nomination-ceremony/"
        width={1356}
        height={892}
      />

      <Featured
        title="Washington Post Project Template Generator"
        projRole="Part of the core developers and still continuing to update. Working on developer workflows, onboarding and documentation."
        image="projects/template.png"
        summary="A Node, React and Next.js based template that powers all of the custom interactive projects at The Washington Post. Four of the projects mentioned above were created using this template I helped develop."
        width={1036}
        height={574}
      />
    </section>
  )
}

const Featured = ({ title, projRole, image, width, height, url, summary, awards, tools }) => (
  <div className="">
    <div className="items-center flex flex-wrap flex-row-reverse">
      <div className="w-full md:w-1/2 mr-auto pt-4 md:pt-0 mb-5">
        <ConditionalWrapper
          condition={url}
          wrapper={(children) => (
            <a href={url} target="_blank" rel="noopener">
              {children}
            </a>
          )}
        >
          <>
            <div className="max-w-full image-shadow">
              <Image alt="..." src={`/${image}`} width={width} height={height} />
            </div>
          </>
        </ConditionalWrapper>
      </div>
      <div className="w-full md:w-1/2 ml-auto">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-1">{summary}</p>
          <div className="mt-4 leading-relaxed text-gray-700">
            <b>Role:</b> {projRole}
          </div>
          {tools && (
            <div className="mt-2 leading-relaxed text-gray-700">
              <b>Tools:</b> {tools}
            </div>
          )}
          {awards && (
            <div className="mt-2 leading-relaxed text-gray-700">
              <b>Awards:</b> {awards}
            </div>
          )}
          {url && (
            <div className="mt-2 text-lg leading-relaxed text-gray-600">
              <a className="underline text-sm" href={url} target="_blank" rel="noopener">
                View Project{' '}
                <span className="inline-block w-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

Featured.propTypes = {
  projRole: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hasVideo: PropTypes.string,
  image: PropTypes.string,
}

Featured.defaultProps = {
  image: '',
  hasVideo: '',
}
