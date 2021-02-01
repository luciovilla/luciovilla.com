/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/framework/globals.css'
import '../styles/base.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
