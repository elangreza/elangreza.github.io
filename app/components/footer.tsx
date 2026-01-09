function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {

  const links = [
    {
      name: "linkedIn",
      url: "https://id.linkedin.com/in/muhammad-reza-elang-erlangga-1b836715b"
    },
    {
      name: "github",
      url: "https://github.com/elangreza"
    },
    {
      name: "view source",
      url: "https://github.com/elangreza/elangreza.github.io"
    }
  ]

  return (
    <footer className="mb-16 pointer-events-auto" >
      <h1 className="mb-3 text-xl font-bold tracking-tighter">Visit my links</h1>
      <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {links.map((l) => (
          <li key={l.name}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={l.url || '#'}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{l.name}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        elangreza © {new Date().getFullYear()}
      </p>
    </footer >
  )
}
