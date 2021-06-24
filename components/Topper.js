export default function Topper() {
  return (
    <div className="relative pt-16 pb-16 md:pb-32 flex items-center w-full min-h-[65vh] md:min-h-[75vh] max-w-screen-xl m-auto">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="w-full px-4">
          <div>
            <span className="font-semibold text-xl text-gray-500">Hola,</span>
            <h1 className="mt-1">
              <span className="font-semibold text-5xl">I’m Lucio</span>
              <p className="mt-1 text-gray-700">
                – a Senior Front-End Engineer at Vox Media. Previously worked within newsrooms as a
                designer and web developer at the Washington Post, San Francisco Chronicle and
                Chicago Tribune's Spanish daily (Hoy Chicago).
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
