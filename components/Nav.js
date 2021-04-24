import { useState, useEffect } from 'react'
import NextLink from 'next/link'

export default function Nav() {
  const [animationClass, setAnimationClass] = useState(false)

  useEffect(() => {
    setAnimationClass(true)
  }, [])

  return (
    <nav className="flex justify-between items-center max-w-4xl w-full py-8 px-4 my-0 md:my-8 mx-auto">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="flex items-center font-bold text-2xl tracking-tighter px-4 name-lv">
        L<span className={`${animationClass && 'fade-in'}`}>V</span>
      </div>
      <div>
        <NextLink href="/#projects">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">Projects</a>
        </NextLink>
        <NextLink href="/#about-me">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">About</a>
        </NextLink>
        <NextLink href="/#awards">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 hover:underline">
            Awards/Honors
          </a>
        </NextLink>
      </div>
    </nav>
  )
}
