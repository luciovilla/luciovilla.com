import NowPlaying from './NowPlaying'

export default function Topper() {
  const links = [
    { href: 'mailto:me@luciovilla.com?subject=Hola Lucio!', title: 'Email' },
    { href: 'https://github.com/luciovilla', title: 'Github' },
    { href: 'https://twitter.com/luciovilla', title: 'Twitter' },
    { href: 'https://www.linkedin.com/in/luciovilla', title: 'LinkedIn' }
  ]

  return (
    <div className="relative m-auto flex min-h-[90vh] w-full max-w-2xl items-center py-16 md:pb-32">
      <div className="mb-16 flex flex-col items-start justify-center">
        <div className="w-full">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">Lucio Villa</h1>
          <h2 className="mb-2 text-gray-700 sm:text-lg">
            Senior Software Engineer at The Washington Post
          </h2>
          <p className="mt-1 text-gray-800 sm:text-lg">
            First-generation Latino, software engineer and web designer. Previously at Vox Media,
            San Francisco Chronicle, Chicago Tribune's Spanish daily (Hoy Chicago) and formerly a
            photojournalist. <NowPlaying />
          </p>

          <div className="mt-3 flex">
            <div className="space-x-2 text-sm">
              {links.map((link) => {
                return (
                  <a key={link.title} className="underline" href={link.href}>
                    {link.title}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
