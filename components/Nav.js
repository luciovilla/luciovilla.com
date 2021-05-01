import { useState, useEffect } from 'react'
import NextLink from 'next/link'

export default function Nav() {
  const [animationClass, setAnimationClass] = useState(false)

  useEffect(() => {
    setAnimationClass(true)
  }, [])

  return (
    <nav className="sticky-nav w-full bg-white bg-opacity-60 px-4">
      <div className="max-w-4xl w-full flex justify-between items-center py-4 sm:py-8 my-0 md:my-8 mx-auto">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="flex font-bold text-2xl tracking-tighter name-lv">
          L<span className={`${animationClass && 'fade-in'}`}>V</span>
        </div>
        <div>
          <NextLink href="/#projects">
            <a className="p-2 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">Projects</a>
          </NextLink>
          <NextLink href="/notas">
            <a className="p-2 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">Blog</a>
          </NextLink>
          <NextLink href="/#about-me">
            <a className="p-2 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">About</a>
          </NextLink>
        </div>
      </div>
    </nav>
  )
}
