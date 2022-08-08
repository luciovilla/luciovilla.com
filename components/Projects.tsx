import Image from 'next/image'
import PlaceholderImage from './PlaceholderImage'
import { ProjectProps } from '../lib/types'
import projects from '../public/projects/list.json'
import ArrowIcon from './ArrowIcon'

export default function Projects() {
  return (
    <section id="projects" className="relative m-auto mb-40 space-y-20 w-full max-w-2xl">
      <div className="pt-5 m-auto w-full text-center text-gray-600 uppercase">
        Select Projects <ArrowIcon />
      </div>
      {projects.map((project: ProjectProps) => {
        return (
          <div className="flex flex-wrap" key={project.title}>
            {project.image && (
              <div className="pt-4 mb-2 w-full md:pt-0">
                <div className="max-w-full bg-transparent">
                  <Image
                    alt="..."
                    placeholder="blur"
                    blurDataURL={PlaceholderImage(project.width, project.height)}
                    src={`/${project.image}`}
                    width={project.width}
                    height={project.height}
                  />
                </div>
              </div>
            )}
            <div>
              <div className="md:pr-12">
                <div className="text-xl font-semibold md:text-3xl">{project.title}</div>
                <p className="mt-1 text-gray-800">{project.summary}</p>
                <div className="mt-3 leading-relaxed text-gray-800">
                  <b>Role:</b> {project.projRole}
                </div>
                {project.tools && (
                  <div className="mt-1 leading-relaxed text-gray-800">
                    <b>Tools:</b> {project.tools}
                  </div>
                )}
                {project.awards && (
                  <div className="mt-1 leading-relaxed text-gray-800">
                    <b>Awards:</b> {project.awards}
                  </div>
                )}
                {project.url && (
                  <div className="mt-1 text-lg leading-relaxed text-gray-600">
                    <a
                      className="text-sm underline"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project{' '}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
