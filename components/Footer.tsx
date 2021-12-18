export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto w-full mb-8 text-center">
      <hr className="w-full border-1 border-gray-200 mb-8" />
      <div className="w-full pb-16 text-gray-500">
        Site built with TypeScript, Next.js, Tailwind CSS and deployed on Vercel. View{' '}
        <a
          href="https://github.com/luciovilla/luciovilla.com"
          className="underline text-gray-500 hover:text-gray-600 transition"
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
