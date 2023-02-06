import Script from 'next/script'

import './global.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  )
}
