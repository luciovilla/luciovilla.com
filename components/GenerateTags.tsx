const DOMAIN = 'https://luciovilla.com'

export default function GenerateTags({
  title,
  description,
  slug = '',
  image = 'site.png'
}: {
  title: string
  description: string
  image?: string
  slug?: string
}) {
  return (
    <>
      <title>{title}</title>
      <meta content={description} />
      <meta name="robots" content="follow, index" />
      <meta property="og:site_name" content="Lucio Villa" />
      <meta name="author" content="Lucio Villa" />
      <meta property="og:url" content={`${DOMAIN}/${slug}`} />
      <link rel="canonical" href={`${DOMAIN}/${slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:title" name="description" content={description} />
      <meta property="og:image" content={`${DOMAIN}/${image}`} />
      <meta name="twitter:title" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@luciovilla" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${DOMAIN}/${image}`} />
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        crossOrigin="anonymous"
        type="font/woff2"
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  )
}
