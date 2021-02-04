import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

export default function Topper() {
  return (
    <>
      <div className="text-center w-full uppercase text-gray-600 pt-5 pb-20" id="projects">
        Recent Projects{' '}
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
      <section className="relative w-full last:pb-0">
        <Featured
          title="Serial Killer Series"
          projRole="Designer, developer, art director"
          image="projects/sk.jpg"
          width={2126}
          height={1222}
        />
        <Featured
          title="Mueller Report Illustrated"
          projRole="Designer, developer"
          image="projects/mri.jpg"
          width={1560}
          height={980}
        />
        <Featured
          title="Mekong River"
          projRole="Designer, developer"
          image="projects/mekong.jpg"
          width={1000}
          height={518}
        />
      </section>
    </>
  )
}

const Featured = ({ title, projRole, hasVideo, image, width, height }) => (
  <div className="container mx-auto pb-32 w-full md:w-4/5">
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-1/2 ml-auto px-4 md:pr-12 md:pl-6 md:pr-4">
        <div className="md:pr-12">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="mt-2 text-lg leading-relaxed text-gray-600">
            <b>Role:</b> {projRole}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mr-auto px-4 pt-4 md:pt-0">
        {hasVideo ? (
          <video className="max-w-full rounded-lg shadow-xl" muted playsInline autoPlay loop>
            <source src={`./video/${hasVideo}`} type="video/mp4" />
          </video>
        ) : (
          <div className="max-w-full image-shadow">
            <Image alt="..." src={`/${image}`} width={width} height={height} />
          </div>
        )}
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
