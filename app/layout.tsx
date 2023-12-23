import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Script from "next/script";
import React from "react";

import "./global.css";
import Nav from "@components/Nav";
import { defaultMeta } from "@lib/metadata-defaults";

const inter = localFont({
  src: "../public/fonts/inter-var.woff2",
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  ...defaultMeta
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200">
        <Nav />
        <main id="skip" className="px-8">
          {children}
          <SpeedInsights />
        </main>
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
  );
}
