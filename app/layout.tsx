import Script from 'next/script'

import './global.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
