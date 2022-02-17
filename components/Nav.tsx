import { useRouter } from 'next/router'
import clsx from 'clsx'

import NextLink from 'next/link'

function NavItem({ href, text }) {
  const router = useRouter()
  const slug = router.asPath.replace(/^\/([^\/]*).*$/, '/$1')
  const isActive = slug === href

  return (
    <NextLink href={href}>
      <a
        className={clsx(
          isActive ? 'font-semibold text-gray-800' : 'font-normal text-gray-600',
          'md:inline-block p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-100 transition-all'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Nav() {
  return (
    <div className="backdrop-filter backdrop-blur-md z-10 w-full bg-white bg-opacity-60 sticky top-0 flex flex-col justify-center px-4">
      <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto py-4 sm:py-8 text-gray-900">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="sm:ml-[-0.75rem]">
          <NavItem href="/" text="Home" />
          <NavItem href="/#projects" text="Projects" />
          <NavItem href="/notas" text="Blog" />
          <NavItem href="/#about-me" text="About Me" />
        </div>
      </nav>
    </div>
  )
}
