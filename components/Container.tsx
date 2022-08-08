import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Nav from './Nav'
import Footer from './Footer'

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Lucio Villa - Latino, Engineer, Designer',
    description:
      'First-generation Latino, software engineer and web designer. Currently a Senior Engineer at Vox Media.',
    image: 'https://luciovilla.com/site.png',
    type: 'website',
    ...customMeta
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
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-28929069-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-28929069-1');
        `}
      </Script>
      <Nav />
      <main id="skip" className="px-8">
        {children}
      </main>
      <Footer />
    </>
  )
}
