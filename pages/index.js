import React from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Topper from '../components/Topper'
import Projects from '../components/Projects'
import About from '../components/About'
import Awards from '../components/Awards'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head />
      <Nav />
      <Topper />
      <Projects />
      <About />
      <Awards />
      <Footer />
    </>
  )
}
