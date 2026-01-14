import { getProjectsSummary } from 'app/experience/utils'
import Link from 'next/link'

export function ExperienceSummary() {
  const projectSummary = getProjectsSummary().map((project) => ({
    ...project,
    period: project.period.replace(' - ', ' • ')
  }))

  return (
    <section className='py-4'>
      <div className='flex items-center justify-between'>
        <h1 className="mb-3 text-xl font-bold tracking-tighter">
          Recent Experience ( {projectSummary.length} )
        </h1>
        <Link href='/experience' className="mb-3 text-xl tracking-tighter transition-all text-blue-500 dark:text-blue-500 duration-300 hover:text-blue-600 hover:dark:text-blue-400 hover:underline flex align-middle relative py-1 cursor-pointer">
          See all experience
        </Link>
      </div>

      <div className="grid gap-6">
        {projectSummary.map((project, index) => (
          <Link href={`/experience#${project.section}`} key={index}>
            <div
              className="group relative flex flex-col p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
                    {project.role} <span className="text-neutral-300 dark:text-neutral-700 mx-1">•</span> {project.client}
                  </div>
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums whitespace-nowrap self-start sm:self-auto mt-1 sm:mt-0">
                  {project.period}
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
