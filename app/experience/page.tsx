
import { baseUrl } from 'app/url'
import Link from 'next/link'
import { getProjects } from './utils'

export const metadata = {
    title: 'Experience',
    description: 'Read my Experience.',
    openGraph: {
        title: 'Experience',
        description: 'Read my Experience.',
        type: 'website',
        url: `${baseUrl}/experience`,
        siteName: 'Elang Reza',
        locale: 'en_US',
        images: [
            {
                url: `${baseUrl}/experience/opengraph-image`,
                width: 1200,
                height: 630,
                alt: 'Elang Reza',
            },
        ],
    },
}

export default function Page() {
    let projects = getProjects()
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <Link href={`/experience#${project.section}`} id={project.section} key={index}>
                        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-0">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                <div className='text-sm'>
                                    <h2 className="text-sm font-bold tracking-tight">{project.title}</h2>
                                    <p className="text-neutral-600 dark:text-neutral-400">{project.role} at <b className="font-bold text-neutral-800 dark:text-neutral-200">{project.client}</b></p>
                                </div>
                                <span className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums mt-2 md:mt-0">
                                    {`${project.startMonth} ${project.startYear} - ${project.endMonth} ${project.endYear}`}
                                </span>
                            </div>

                            <p className="text-sm mb-4 text-neutral-800 dark:text-neutral-200">
                                {project.description}
                            </p>

                            {project.techStack && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-2 py-1 bg-neutral-800 border dark:border-neutral-700 border-blue-700 rounded text-xs  text-neutral-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-sm">
                                {project.tasks.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
