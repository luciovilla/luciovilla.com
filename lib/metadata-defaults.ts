import type { Metadata } from "next";

export const defaultMeta: Metadata = {
  metadataBase: new URL("https://luciovilla.com"),
  title: {
    default: "Lucio Villa - Latino, Engineer, Designer",
    template: "%s - Lucio Villa"
  },
  description: "First-generation Latino, software engineer and web designer.",
  authors: [{ name: "Lucio Villa" }],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Lucio Villa - Latino, Engineer, Designer",
    siteName: "Luicio Villa",
    url: "https://luciovilla.com",
    type: "website",
    description: "First-generation Latino, software engineer and web designer.",
    images: [
      {
        url: "https://luciovilla.com/site.png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucio Villa",
    site: "@luciovilla",
    creator: "@luciovilla",
    images: ["https://luciovilla.com/site.png"]
  },
  alternates: {
    canonical: "https://luciovilla.com"
  },
  robots: {
    index: true,
    follow: true
  }
};
