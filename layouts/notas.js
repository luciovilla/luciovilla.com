import { parseISO, format } from 'date-fns'
import Container from '../components/Container'
import Subscribe from '../components/newsletter/Subscribe'

export default function NotasLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Lucio Villa`}
      description={frontMatter.summary}
      image={`https://luciovilla.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between mb-2 items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {format(parseISO(frontMatter.publishedAt), 'MMMM d, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">{children}</div>
        <div className="mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  )
}
