import React from 'react'

export default function Nav() {
  return (
    <nav id="header" className="w-full top-0 bg-white z-10 lg:pt-6">
      <div className="w-full md:w-4/5 container mx-auto flex flex-wrap items-center justify-between mt-0 px-4 py-2">
        <div className="flex items-center font-bold text-2xl tracking-tighter px-4">LV</div>
        <div
          className="px-0 flex-grow lg:flex lg:items-center lg:w-auto lg:block text-black p-4 lg:p-0 center"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-center">
            <li className="mr-3 inline-block py-2 px-4 hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="mr-3 inline-block py-2 px-4 hover:underline">
              <a href="#about-me">About</a>
            </li>
            <li className="hidden md:inline-block inline-block py-2 pl-4 hover:underline">
              <a href="#awards">Awards/Honors</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
