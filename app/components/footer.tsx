import { MoveUpRight } from "lucide-react"

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
    <footer className="py-8 mt-auto pointer-events-auto">
      <div className="flex justify-center">
        <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {links.map((l) => (
            <li key={l.name}>
              <a
                className="flex items-center transition-all text-blue-500 dark:text-blue-500 duration-300 hover:text-blue-600 hover:dark:text-blue-400 hover:underline align-middle relative py-1 cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
                href={l.url || '#'}
              >
                <MoveUpRight size={18} />
                <p className="ml-2 h-7">{l.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center mt-4 text-neutral-600 dark:text-neutral-300">
        elangreza © {new Date().getFullYear()}
      </p>
    </footer >
  )
}
