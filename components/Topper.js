import React from 'react'

export default function Topper() {
  return (
    <div className="relative pt-16 pb-16 md:pb-32 flex items-center w-full min-h-65 md:min-h-80 max-w-screen-xl m-auto">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <div className="w-full px-4">
          <div>
            <span className="font-semibold text-xl text-gray-500">Hola,</span>
            <h1 className="mt-1">
              <span className="font-semibold text-5xl">I'm Lucio</span>
              <p className="mt-1 text-xl text-gray-700">
                – a designer with a passion for coding engaging stories online. Currently a Design
                Editor at The Washington Post helping the News Design team advance in digital
                storytelling, mentoring designers, providing both design and technical feedback and
                while still leading my own projects.
              </p>
            </h1>
          </div>

          <div className="flex mt-3">
            <div className="text-sm text-gra">
              <a className="underline" href="mailto:hi@luciovilla.com?subject=Hola Lucio!">
                {' '}
                Email
              </a>{' '}
              |{' '}
              <a className="underline" href="https://github.com/luciovilla">
                Github
              </a>{' '}
              |{' '}
              <a className="underline" href="https://twitter.com/luciovilla">
                Twitter
              </a>{' '}
              |{' '}
              <a className="underline" href="https://www.linkedin.com/in/luciovilla">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
