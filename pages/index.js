import React from 'react'
import MetaHead from '../components/MetaHead'
import Nav from '../components/Nav'
import Topper from '../components/Topper'
import Projects from '../components/Projects'
import About from '../components/About'
import Awards from '../components/Awards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <MetaHead />
      <Nav />
      <Topper />
      <Projects />
      <About />
      <Awards />
      <Footer />
    </>
  )
}
