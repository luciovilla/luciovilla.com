import React from 'react'
import Head from 'next/head'

const canonical_url = 'https://luciovilla.com'
const pageTitle = 'Lucio Villa, a designer and front-end developer.'
const siteImg = '/sitev2.gif'
const pageDescription =
  'Portfolio site of Lucio Villa, a designer and front-end developer.'
const generateStructuredMetadata = () => {
  const schemaMetadata = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    email: 'mailto:hi@luciovilla.com',
    jobTitle: 'Design Editor',
    worksFor: 'The Washington Post',
  }

  return (
    <script
      type="application/ld+json"
      data-qa="schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMetadata) }}
    />
  )
}
export default function MetaHead() {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Lucio Villa" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical_url} />
      <meta name="twitter:image" content="/site.png" />
      <meta property="og:image" content={siteImg} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:site" content="@luciovilla" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <link rel="canonical" href={canonical_url} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

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
