import React from 'react'
import Container from '@layouts/Container'
import Topper from '@components/Topper'
import Projects from '@components/Projects'
import About from '@components/About'
import Awards from '@components/Awards'

export default function Home() {
  return (
    <Container>
      <Topper />
      <Projects />
      <About />
      <Awards />
    </Container>
  )
}
