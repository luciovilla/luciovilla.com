import { useState, useEffect } from 'react'
import NextLink from 'next/link'

export default function Nav() {
  const [animationClass, setAnimationClass] = useState(false)

  useEffect(() => {
    setAnimationClass(true)
  }, [])

  return (
    <nav className="backdrop-filter backdrop-blur-md z-10 w-full bg-white bg-opacity-60 px-4 sticky top-0 transition-colors">
      <div className="max-w-4xl w-full flex justify-between items-center py-4 sm:py-8 mx-auto">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <NextLink href="/">
          <a className="flex font-bold text-2xl tracking-tighter">
            <span className="z-10 text-blue">L</span>
            <span
              className={`text-yellow  z-0 ${
                animationClass ? 'transition duration-[2000ms] transform -translate-x-2' : ' opacity-0'
              }`}
            >
              V
            </span>
          </a>
        </NextLink>
        <div>
          <NextLink href="/#projects">
            <a className="p-2 sm:p-4 text-gray-900 hover:underline">Projects</a>
          </NextLink>
          <NextLink href="/notas">
            <a className="p-2 sm:p-4 text-gray-900 hover:underline">Blog</a>
          </NextLink>
          <NextLink href="/#about-me">
            <a className="p-2 sm:p-4 text-gray-900 hover:underline">About</a>
          </NextLink>
        </div>
      </div>
    </nav>
  )
}
