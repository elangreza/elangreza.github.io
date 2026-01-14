import { getProjectsSummary } from 'app/experience/utils';
import Link from 'next/link';

export function ExperienceSummary() {
  const projectSummary = getProjectsSummary()

  // Group by Start Year
  const groupedProjects: Record<string, typeof projectSummary> = {};

  projectSummary.forEach(project => {
    const year = project.startYear || 'Unknown';
    if (!groupedProjects[year]) {
      groupedProjects[year] = [];
    }
    groupedProjects[year].push(project);
  });

  // Sort years descending
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => Number(b) - Number(a));

  return (
    <section className='py-4'>
      <div className='flex items-center justify-between'>
        <h1 className="mb-3 text-xl font-bold tracking-tighter">
          Recent Experience ( {projectSummary.length} )
        </h1>
        <Link href='/experience' className="mb-3 text-xl tracking-tighter transition-all text-blue-600 dark:text-blue-500 duration-300 hover:text-blue-600 hover:dark:text-blue-400 hover:underline flex align-middle relative py-1 cursor-pointer">
          See all experience
        </Link>
      </div>

      <div className="grid gap-6">
        {sortedYears.map((year) => (
          <div key={year}>
            <h3 className="text-sm font-bold text-blue-600 dark:text-blue-500  mb-4 ">
              {year}
            </h3>
            <div className="space-y-3">
              {groupedProjects[year].map((project, idx) => {
                return (
                  <Link
                    href={`/experience#${project.section}`}
                    key={idx}
                    className="group flex items-baseline gap-3 text-sm transition-opacity hover:opacity-70"
                  >
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 whitespace-nowrap">
                      {project.title}
                    </span>
                    <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600">
                      —
                    </span>
                    <span className="text-neutral-500 dark:text-neutral-500 truncate">
                      {project.description}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href='/experience'
          className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors flex items-center gap-2 group"
        >
          <span className="group-hover:translate-x-1 transition-transform">→</span> Show all experience ({projectSummary.length} projects)
        </Link>
      </div>
    </section>
  )
}
