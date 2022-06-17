export default function Topper() {
  return (
    <div className="flex relative items-center py-16 m-auto w-full max-w-2xl min-h-[65vh] md:pb-32 md:min-h-[75vh]">
      <div className="flex flex-col justify-center items-start mb-16">
        <div className="w-full">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">Lucio Villa</h1>
          <h2 className="mb-2 text-gray-700 sm:text-lg">Senior Engineer at Vox Media</h2>
          <p className="mt-1 text-gray-800 sm:text-lg">
            First-generation Latino, software engineer and web designer. Previously worked within
            newsrooms at the Washington Post, San Francisco Chronicle, Chicago Tribune's Spanish
            daily (Hoy Chicago) and formerly a photojournalist.
          </p>

          <div className="flex mt-3">
            <div className="text-sm">
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
