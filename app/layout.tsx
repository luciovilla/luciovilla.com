import Script from 'next/script'
import localFont from 'next/font/local'

import './global.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { defaultMeta } from '@lib/metadata-defaults'

const inter = localFont({
  src: '../public/fonts/inter-var.woff2',
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  ...defaultMeta
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
