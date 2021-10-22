import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from './Nav'
import Footer from './Footer'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Lucio Villa – Software Engineer',
    description:
      'A first-generation Latino, designer and web developer. Currently a Senior Engineer at Vox Media.',
    image: 'https://luciovilla.com/site.png',
    type: 'website',
    ...customMeta,
  }
  const generateStructuredMetadata = () => {
    const schemaMetadata = {
      '@context': 'http://schema.org',
      '@type': 'Person',
      email: 'mailto:hi@luciovilla.com',
      jobTitle: 'Senior Engineer',
      worksFor: 'Vox Media',
    }

    return (
      <script
        type="application/ld+json"
        data-qa="schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMetadata) }}
      />
    )
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://luciovilla.com${router.asPath}`} />
        <link rel="canonical" href={`https://luciovilla.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lucio Villa" />
        <meta name="author" content="Lucio Villa" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@luciovilla" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
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
        {generateStructuredMetadata()}
      </Head>
      <Nav />
      <main id="skip" className="px-8">
        {children}
        <Footer />
      </main>
    </>
  )
}
