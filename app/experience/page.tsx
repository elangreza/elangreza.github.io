
import { baseUrl } from 'app/url'

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


// TODO separate projects data into a separate file, and callable from API, also create detailed version like /blog/[slug]
// TODO create short version of experience in the home page or "/"
const projects = [
    {
        title: 'Bluebird Dispatch Squad',
        client: "PT Bluebird",
        role: "Contract - Backend Golang Developer",
        period: "February 2025 - July 2025",
        description: "Migrated legacy services to Go modules and improved system observability and stability.",
        techStack: ["Go", "gRPC", "REST", "MySQL", "Redis", "RabbitMQ", "YAML"],
        tasks: [
            "Migrated legacy services from GOPATH style to a Go modules-based repository using the Go-Kit generator library (orders-listener, orders, device, device-gateway, entity, service-type, vehicle, vault).",
            "Implemented APM-based logging across service and repository layers.",
            "Performed unit tests in the repository layer.",
            "Resolved a bug in the Architect common library.",
            "Contributed to cloud migration (GCP to Huawei Cloud) for 10–20 services using Jenkins and Argo CD.",
        ],
    },
    {
        title: '10x App',
        client: "Xquisite AI",
        role: "Freelance - Backend Developer",
        period: "July 2024 - November 2024",
        description: "Developed backend features for a sales module and approval workflows.",
        techStack: ["Go Fiber", "REST", "PostgreSQL", "YAML design"],
        tasks: [
            "Developed the backend for the sales module, focusing on the Opportunity API.",
            "Engineered a custom YAML-driven approval workflow system allowing tailored approval logic.",
            "Designed and implemented the Plan Canvas API for streamlined planning and visualization.",
        ],
    },
    {
        title: 'RCS (Regulatory Compliance System) Rebuild',
        client: "Gits Indonesia (for hukumonline.com)",
        role: "Freelance - Backend Developer",
        period: "October 2023 - April 2024",
        description: "Rebuilt backend systems for compliance and notification services.",
        techStack: ["Go", "NATS", "WebSocket", "gRPC", "JWT", "S3", "Gin-gonic"],
        tasks: [
            "Designed and implemented backend APIs for obligation and CMS services, including S3 proxy logic.",
            "Built a real-time notification service utilizing NATS and WebSockets.",
            "Improved document processing with a publish-subscribe pattern and concurrent Golang workers.",
            "Engineered service-to-service authentication via gRPC and JWT middleware.",
        ],
    },
    {
        title: 'Bravo LOS Platform',
        client: "BFI Finance",
        role: "Full Time - Backend Developer",
        period: "July 2022 - September 2023",
        description: "Developed APIs and workflows for a Loan Origination System.",
        techStack: ["Go", "gRPC", "Java", "BPMN Camunda", "RabbitMQ"],
        tasks: [
            "Designed and implemented APIs for a multi-product Loan Origination System (LOS).",
            "Built surveyor logic and assignment workflows using Java and BPMN Camunda with RabbitMQ coordination.",
            "Presented knowledge-sharing sessions on gRPC streaming with Google APIs and Golang.",
        ],
    },
    {
        title: 'Mapan Pulsa Plus and Paylater',
        client: "Sagara Technology",
        role: "Freelance - Backend Developer",
        period: "April 2022 - June 2022",
        description: "Designed core APIs for order processing and paylater systems.",
        techStack: ["Go", "PostgreSQL", "Apache Kafka"],
        tasks: [
            "Designed paylater core API and entity relationship diagrams.",
            "Developed core API with Echo framework, PostgreSQL, and Apache Kaa for resilient order processing.",
            "Implemented clean architecture structure.",
        ],
    },
    {
        title: 'Swadeli App',
        client: "Sagara Technology",
        role: "Freelance - Backend Developer",
        period: "January 2022 - April 2022",
        description: "Implemented backend architecture for back-office and mobile APIs.",
        techStack: ["Go (Fiber)", "PostgreSQL"],
        tasks: [
            "Designed and implemented architecture and ERDs for back-office API.",
            "Implemented pagination for mobile and desktop APIs using Go-Fiber and PostgreSQL.",
        ],
    },
    {
        title: 'Mapan Pulsa',
        client: "Sagara Technology",
        role: "Freelance - Backend Developer",
        period: "Dec 2021 - Jan 2022, Feb 2022",
        description: "Created analytics and banner APIs and integrated notifications.",
        techStack: ["Go", "Apache Kafka", "PostgresSQL"],
        tasks: [
            "Created banner API and Cron Jobs for managing banners.",
            "Created analytics API for backoffice dashboard (user, transaction, product analytics).",
            "Integrated notifications with gRPC protobuf and Apache Kafka.",
        ],
    },
    {
        title: 'Eclis.id Platform',
        client: "Eclis.id",
        role: "Full Time - Fullstack Developer",
        period: "May 2021 - June 2022",
        description: "Built document processing microservices and migrated web platforms.",
        techStack: ["React.js", "Next.js", "Python", "Go",],
        tasks: [
            "Migrated main and admin websites to Next.js (v4) with new authentication and rendering structure.",
            "Created document microservice V4 for PDF to structured JSON conversion using Python (OCR) and Go (processing).",
        ],
    },
    {
        title: 'AAM Abbott Website',
        client: "FR Web Dev",
        role: "Freelance - Project Lead",
        period: "March 2021 - May 2021",
        description: "Led the team and managed business logic implementation.",
        techStack: ["Project Management"],
        tasks: [
            "Established operation strategy and led the team.",
            "Designed business logic and managed cash-flow.",
        ],
    },
    {
        title: 'Riseloka Admin Website',
        client: "Riseloka Indonesia",
        role: "Freelance - Frontend Developer",
        period: "December 2020 - May 2021",
        description: "Developed frontend architecture for admin dashboard.",
        techStack: ["React.js", "Next.js", "React Hooks"],
        tasks: [
            "Created base architecture for frontend using Next.js.",
            "Implemented server-side and client-side fetching APIs.",
            "Designed custom hooks for auto-fetching data.",
        ],
    },
    {
        title: 'Kasumi Driver Management',
        client: "Boston Makmur Gemilang And Hampton Solution",
        role: "Full Time - Frontend Developer",
        period: "October 2019 - January 2021",
        description: "Developed frontend for driver management and mobile apps.",
        techStack: ["React.js", "Next.js", "React Native"],
        tasks: [
            "Created Frontend with Next.js for Kasumi Driver Management.",
            "Developed Kasumi Mobile Apps and QR-Code Scanner using React Native.",
            "Implemented frontend logic and API integration.",
        ],
    },
]

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="border-b border-neutral-200 dark:border-neutral-800 pb-12 last:border-0">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold tracking-tight">{project.title}</h2>
                                <p className="text-neutral-600 dark:text-neutral-400">{project.role} at <b className="font-bold text-neutral-800 dark:text-neutral-200">{project.client}</b></p>
                            </div>
                            <span className="text-sm text-neutral-500 dark:text-neutral-500 tabular-nums mt-2 md:mt-0">
                                {project.period}
                            </span>
                        </div>

                        <p className="mb-4 text-neutral-800 dark:text-neutral-200">
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
                ))}
            </div>
        </section>
    )
}
