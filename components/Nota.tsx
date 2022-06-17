import Link from 'next/link'

const Nota = ({ title, summary, slug }) => {
  return (
    <Link href={`/notas/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full text-lg font-medium text-gray-900 md:text-xl">{title}</h4>
          </div>
          <p className="text-gray-600">{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default Nota
