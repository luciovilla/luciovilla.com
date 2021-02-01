import React from 'react'
import Head from 'next/head'

function IndexPage() {
  return (
    <Head>
      <title>Lucio Villa – A designer who codes</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-28929069-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-28929069-1');
        `,
        }}
      />
    </Head>
  )
}

export default IndexPage
