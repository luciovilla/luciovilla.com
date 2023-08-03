export default function Footer() {
  return (
    <footer className="mx-auto mb-8 w-full max-w-2xl text-center">
      <hr className="mb-6 w-full border border-gray-200" />
      <div className="w-full pb-16">
        Site built with TypeScript, Next.js, Tailwind CSS and deployed on
        Vercel. View{" "}
        <a
          href="https://github.com/luciovilla/luciovilla.com"
          className="underline transition hover:text-gray-600"
          target="_blank"
          rel="noreferrer"
        >
          source
        </a>
        .
      </div>
    </footer>
  );
}
