import React from 'react'

export default function Footer() {
  return (
    <footer className="text-xs py-6 text-gray-600 border-t w-full text-center">
      Site built with Next.js and Tailwind CSS. View{' '}
      <a
        href="https://github.com/luciovilla/new-newsite"
        className="underline"
        target="_blank"
        rel="noopener"
      >
        source
      </a>
      .
    </footer>
  )
}
