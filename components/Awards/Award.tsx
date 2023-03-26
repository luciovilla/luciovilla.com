export default function Award({ award }) {
  return (
    <li>
      {award.from}:{' '}
      <a className="underline" rel="noreferrer" href={award.url} target="_blank">
        {award.name}
      </a>
    </li>
  )
}
