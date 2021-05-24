import Container from '../components/Container'

export default function BlogLayout({ children, data }) {
  return (
    <Container
      title={`${data.properties.Post.title[0].plain_text} – Lucio Villa`}
      description={data.properties.Description.rich_text[0].plain_text}
      date={new Date(data.properties.Date.date.start)}
      type="article"
    >
      <article className="max-w-2xl mx-auto my-16 w-full">
        {children}
      </article>
    </Container>
  )
}
