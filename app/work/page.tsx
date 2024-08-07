import Image from "next/image";

import PlaceholderImage from "@components/PlaceholderImage";
import { DOMAIN } from "@lib/globals";
import { defaultMeta } from "@lib/metadata-defaults";
import { ProjectProps } from "@lib/types";

import projects from "../../public/projects/list.json";

export const metadata = {
  title: "Selected Work",
  description: "My selected web portfolio.",
  openGraph: {
    title: "Selected Work",
    url: `${DOMAIN}/projects`
  },
  twitter: {
    ...defaultMeta.twitter,
    title: "Selected Work"
  },
  alternates: {
    canonical: `${DOMAIN}/projects`
  }
};

export default function Projects() {
  return (
    <section className="relative mx-auto my-16 mb-20 w-full max-w-2xl space-y-20">
      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        Selected Work
      </h1>
      {projects.map((project: ProjectProps) => {
        return (
          <div className="flex flex-wrap" key={project.title}>
            {project.image && (
              <div className="mb-2 w-full pt-4 shadow-sm md:pt-0">
                <div className="max-w-full bg-transparent">
                  <Image
                    alt=""
                    placeholder="blur"
                    blurDataURL={PlaceholderImage(
                      project.width,
                      project.height
                    )}
                    src={`/${project.image}`}
                    width={project.width}
                    height={project.height}
                  />
                </div>
              </div>
            )}
            <div>
              <div className="md:pr-12">
                <div className="text-xl font-semibold md:text-3xl">
                  {project.title}
                </div>
                <p className="mt-1">{project.summary}</p>
                <div className="mt-3 leading-relaxed">
                  <b>Role:</b> {project.projRole}
                </div>
                {project.tools && (
                  <div className="mt-1 leading-relaxed">
                    <b>Tools:</b> {project.tools}
                  </div>
                )}
                {project.awards && (
                  <div className="mt-1 leading-relaxed">
                    <b>Awards:</b> {project.awards}
                  </div>
                )}
                {project.url && (
                  <div className="mt-1 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    <a
                      className="text-sm underline"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
