"use client"

import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// TODO add a show more and show less if more than 7 projects

interface propsType {
  projectSummary: {
    section: string;
    title: string;
    client: string;
    role: string;
    description: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
  }[],
  maxShowMore: number
}

function CalculateTotalExperience(exp: propsType["projectSummary"]): string {
  return ""
}

export function ExperienceSummary({ projectSummary, maxShowMore = 7 }: propsType) {
  const [openShowMore, setOpenShowMore] = useState(false)

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
    <section className='py-4 text-sm'>
      <div className='flex items-center justify-between'>
        <h1 className="mb-3 text-base tracking-tighter">
          Recent Experience ( {projectSummary.length} )
        </h1>
        <Link href='/experience' className="mb-3 text-base tracking-tighter transition-all text-blue-600 dark:text-blue-500 duration-300 hover:text-blue-600 hover:dark:text-blue-400 hover:underline flex align-middle relative py-1 cursor-pointer">
          See all
        </Link>
      </div>

      <div className="grid gap-6 ">
        {sortedYears
          .slice(0, openShowMore ? sortedYears.length : maxShowMore)
          .map((year) => (
            <div key={year}>
              <h3 className=" text-blue-600 dark:text-blue-500  mb-4 ">
                [ {year} ]
              </h3>
              <div className="space-y-3">
                {groupedProjects[year].map((project, idx) => {
                  return (
                    <Link
                      href={`/experience#${project.section}`}
                      key={idx}
                      className="group flex items-baseline gap-3  transition-opacity hover:opacity-70"
                    ><p className='inline'>
                        <span className="text-neutral-900 dark:text-neutral-100">
                          {project.title}
                        </span>
                        {" "}  <MinusIcon size={24} className='inline text-gray-500' />
                        {" "}
                        <span className="text-neutral-500 dark:text-neutral-500">
                          {project.description}
                        </span>
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <section className='flex items-center gap-2 text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors group'>
          {sortedYears.length > maxShowMore && (openShowMore ?
            <ArrowUpIcon className='group-hover:-translate-y-1 transition-transform' size={16} /> :
            <ArrowDownIcon className='group-hover:translate-y-1 transition-transform' size={16} />)}
          {" "}
          {sortedYears.length > maxShowMore && (openShowMore ?
            <button onClick={() => setOpenShowMore(false)} className='cursor-pointer'>
              Show less
            </button> :
            <button onClick={() => setOpenShowMore(true)} className='cursor-pointer'>
              Show ({sortedYears.length - maxShowMore}) more years
            </button>
          )}
        </section>
        <Link
          href='/experience'
          className=" text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300 flex items-center gap-2 group"
        >
          <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={16} />
          {" "}Show all experience in detailed version ({projectSummary.length} projects)
        </Link>
      </div>
    </section>
  )
}
