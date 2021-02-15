import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default function Projects() {
  return (
    <>
      <div className="text-center w-full uppercase text-gray-600 pt-5 pb-20" id="projects">
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
      <section className="relative w-full last:pb-0 max-w-screen-xl m-auto">
        <Featured
          title="Serial Killer Series"
          projRole="Designer, developer, art director"
          image="projects/sk.jpg"
          summary="A three-part investigation of law enforcement’s failure to catch Samuel Little."
          url="https://www.washingtonpost.com/graphics/2020/national/samuel-little-serial-killer/part-one/"
          width={2126}
          height={1222}
        />
        <Featured
          title="Mueller Report Illustrated"
          projRole="Designer, developer"
          image="projects/mri.jpg"
          summary="A book and six-part digital series on the obstruction investigation."
          url="https://www.washingtonpost.com/graphics/2019/politics/mueller-report-illustrated/about/"
          width={1560}
          height={980}
        />
        <Featured
          title="Mekong River"
          projRole="Designer, developer"
          image="projects/mekong.jpg"
          summary="Story about displaced villages and a ruined ecosystem with audio narration from the reporter."
          url="https://www.washingtonpost.com/graphics/2020/world/the-mekong-river-basin-under-threat/"
          width={1000}
          height={518}
        />
        <Featured
          title="Military Helicopter"
          projRole="Designer, developer"
          image="projects/helicopter.jpg"
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
          projRole="Designer, developer"
          image="projects/rose.jpg"
          summary="An interactive project that zooms and pans to show who attended a possible superspreader event."
          url="https://www.washingtonpost.com/graphics/2020/politics/coronavirus-attendees-barrett-nomination-ceremony/"
          width={1356}
          height={892}
        />

        <Featured
          title="Washington Post Project Template Generator"
          projRole="Part of the core developers"
          image="projects/template.png"
          summary="A React and NEXT.js (contributor) based template for use by The Washington Post design and graphics
          teams."
          width={1036}
          height={574}
        />
      </section>
    </>
  )
}

const Featured = ({ title, projRole, image, width, height, url, summary }) => (
  <div className="container mx-auto pb-32 w-full md:w-4/5">
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-1/2 ml-auto px-4 md:pr-12 md:pl-6 md:pr-4">
        <div className="md:pr-12">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-1">{summary}</p>
          <div className="mt-2 leading-relaxed text-gray-700">
            <b>Role:</b> {projRole}
          </div>
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
      <div className="w-full md:w-1/2 mr-auto px-4 pt-4 md:pt-0">
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
