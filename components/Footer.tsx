export default function Footer() {
  return (
    <footer className="mx-auto mb-8 w-full max-w-4xl text-center">
      <hr className="mb-8 w-full border border-gray-200" />
      <div className="w-full pb-16 text-gray-500">
        Site built with TypeScript, Next.js, Tailwind CSS and deployed on Vercel. View{' '}
        <a
          href="https://github.com/luciovilla/luciovilla.com"
          className="text-gray-500 underline transition hover:text-gray-600"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
        .
      </div>
    </footer>
  )
}
