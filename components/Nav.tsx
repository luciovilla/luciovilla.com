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
          'rounded-lg p-2 transition-all hover:bg-gray-100 sm:py-2 sm:px-3 md:inline-block'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Nav() {
  return (
    <div className="sticky top-0 z-10 flex w-full flex-col justify-center bg-white/60 px-4 backdrop-blur-md">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between py-4 text-gray-900 sm:py-8">
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
