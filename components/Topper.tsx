export default function Topper() {
  return (
    <div className="relative pt-16 pb-16 md:pb-32 flex items-center w-full min-h-[65vh] md:min-h-[75vh] max-w-2xl m-auto">
      <div className="flex flex-col justify-center items-start mb-16">
        <div className="w-full">
          <h1 className="mb-1 font-bold text-3xl md:text-5xl tracking-tight">Lucio Villa</h1>
          <h2 className="mb-2 text-gray-700 sm:text-lg">Senior Engineer at Vox Media</h2>
          <p className="mt-1 sm:text-lg text-gray-800">
            First-generation Latino, software engineer and web designer. Previously worked within
            newsrooms at the Washington Post, San Francisco Chronicle, Chicago Tribune's Spanish
            daily (Hoy Chicago) and formerly a photojournalist.
          </p>

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
