import Script from 'next/script'
import localFont from '@next/font/local'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import './global.css'

const inter = localFont({
  src: '../public/fonts/inter-var.woff2',
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'Lucio Villa - Latino, Engineer, Designer',
    template: '%s | Lucio Villa'
  },
  description: 'First-generation Latino, software engineer and web designer.',
  authors: ['Lucio Villa'],
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    siteName: 'Luicio Villa',
    url: 'https://luciovilla.com',
    type: 'website',
    description: 'First-generation Latino, software engineer and web designer.',
    title: 'Lucio Villa - Latino, Engineer, Designer',
    images: [
      {
        url: 'https://luciovilla.com/site.png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucio Villa',
    description: 'First-generation Latino, software engineer and web designer.',
    site: '@luciovilla',
    creator: '@luciovilla',
    images: ['https://luciovilla.com/site.png']
  },
  alternates: {
    canonical: 'https://luciovilla.com'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        <main id="skip" className="px-8">
          {children}
        </main>
        <Footer />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JDMZNFHMVW" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDMZNFHMVW');
        `}
      </Script>
    </html>
  )
}
