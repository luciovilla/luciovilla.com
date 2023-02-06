'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({ href, text, isActive }: { href: string; text: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`rounded-lg p-2 transition-all hover:bg-gray-100 sm:py-2 sm:px-3 md:inline-block ${
        isActive && 'underline'
      }`}
    >
      <span>{text}</span>
    </Link>
  )
}

export default function Nav() {
  const pathName = usePathname()

  return (
    <div className="sticky top-0 z-10 flex w-full flex-col justify-center bg-white/60 px-4 backdrop-blur-md">
      <nav className="relative mx-auto flex w-full max-w-2xl items-center justify-between py-4 text-gray-900 sm:py-8">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="sm:ml-[-0.75rem]">
          <NavItem href="/" text="Home" isActive={pathName === '/'} />
          <NavItem href="/projects" text="Projects" isActive={pathName === '/projects'} />
          <NavItem href="/notas" text="Blog" isActive={pathName === '/notas'} />
          <NavItem href="/about-me" text="About Me" isActive={pathName === '/about-me'} />
        </div>
      </nav>
    </div>
  )
}
