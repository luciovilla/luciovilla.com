export default function HomeLinks() {
  const links = [
    { href: "mailto:me@luciovilla.com?subject=Hola Lucio!", title: "Email" },
    { href: "https://github.com/luciovilla", title: "Github" },
    { href: "https://twitter.com/luciovilla", title: "Twitter" },
    { href: "https://www.linkedin.com/in/luciovilla", title: "LinkedIn" },
  ];
  return (
    <div className="mt-3 flex">
      <div className="space-x-2 text-sm">
        {links.map((link) => {
          return (
            <a key={link.title} className="underline" href={link.href}>
              {link.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
