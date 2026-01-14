
const projects = [
    {
        section: 'Bluebird-Dispatch-Squad',
        title: 'Bluebird Dispatch Squad',
        client: "DikshaTek (for PT Bluebird)",
        role: "Contract - Backend Golang Developer",

        startMonth: "February",
        startYear: "2025",
        endMonth: "July",
        endYear: "2025",
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
        section: '10x-App',
        title: '10x App',
        client: "Xquisite AI",
        role: "Freelance - Backend Developer",

        startMonth: "July",
        startYear: "2024",
        endMonth: "November",
        endYear: "2024",
        description: "Developed backend features for a sales module and approval workflows.",
        techStack: ["Go Fiber", "REST", "PostgreSQL", "YAML design"],
        tasks: [
            "Developed the backend for the sales module, focusing on the Opportunity API.",
            "Engineered a custom YAML-driven approval workflow system allowing tailored approval logic.",
            "Designed and implemented the Plan Canvas API for streamlined planning and visualization.",
        ],
    },
    {
        section: 'RCS-(Regulatory-Compliance-System)-Rebuild',
        title: 'RCS (Regulatory Compliance System) Rebuild',
        client: "Gits Indonesia (for hukumonline.com)",
        role: "Freelance - Backend Developer",

        startMonth: "October",
        startYear: "2023",
        endMonth: "April",
        endYear: "2024",
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
        section: 'Bravo-LOS-Platform',
        title: 'Bravo LOS Platform',
        client: "BFI Finance",
        role: "Full Time - Backend Developer",

        startMonth: "July",
        startYear: "2022",
        endMonth: "September",
        endYear: "2023",
        description: "Developed APIs and workflows for a Loan Origination System.",
        techStack: ["Go", "gRPC", "Java", "BPMN Camunda", "RabbitMQ"],
        tasks: [
            "Designed and implemented APIs for a multi-product Loan Origination System (LOS).",
            "Built surveyor logic and assignment workflows using Java and BPMN Camunda with RabbitMQ coordination.",
            "Presented knowledge-sharing sessions on gRPC streaming with Google APIs and Golang.",
        ],
    },
    {
        section: 'Mapan-Pulsa-Plus-and-Paylater',
        title: 'Mapan Pulsa Plus and Paylater',
        client: "PT Sagara Technology for (PT Mapan)",
        role: "Freelance - Backend Developer",

        startMonth: "April",
        startYear: "2022",
        endMonth: "June",
        endYear: "2022",
        description: "Designed core APIs for order processing and paylater systems.",
        techStack: ["Go", "PostgreSQL", "Apache Kafka"],
        tasks: [
            "Designed paylater core API and entity relationship diagrams.",
            "Developed core API with Echo framework, PostgreSQL, and Apache Kaa for resilient order processing.",
            "Implemented clean architecture structure.",
        ],
    },
    {
        section: 'Swadeli-App',
        title: 'Swadeli App',
        client: "PT Sagara Technology for (Swadeli)",
        role: "Freelance - Backend Developer",

        startMonth: "January",
        startYear: "2022",
        endMonth: "April",
        endYear: "2022",
        description: "Implemented backend architecture for back-office and mobile APIs.",
        techStack: ["Go (Fiber)", "PostgreSQL"],
        tasks: [
            "Designed and implemented architecture and ERDs for back-office API.",
            "Implemented pagination for mobile and desktop APIs using Go-Fiber and PostgreSQL.",
        ],
    },
    {
        section: 'Mapan-Pulsa',
        title: 'Mapan Pulsa',
        client: "PT Sagara Technology for (PT Mapan)",
        role: "Freelance - Backend Developer",

        startMonth: "December",
        startYear: "2021",
        endMonth: "February",
        endYear: "2022",
        description: "Created analytics and banner APIs and integrated notifications.",
        techStack: ["Go", "Apache Kafka", "PostgresSQL"],
        tasks: [
            "Created banner API and Cron Jobs for managing banners.",
            "Created analytics API for backoffice dashboard (user, transaction, product analytics).",
            "Integrated notifications with gRPC protobuf and Apache Kafka.",
        ],
    },
    {
        section: 'Eclis.id-Platform',
        title: 'Eclis.id Platform',
        client: "Eclis.id",
        role: "Full Time - Fullstack Developer",

        startMonth: "May",
        startYear: "2021",
        endMonth: "June",
        endYear: "2022",
        description: "Built document processing microservices and migrated web platforms.",
        techStack: ["React.js", "Next.js", "Python", "Go",],
        tasks: [
            "Migrated main and admin websites to Next.js (v4) with new authentication and rendering structure.",
            "Created document microservice V4 for PDF to structured JSON conversion using Python (OCR) and Go (processing).",
        ],
    },
    {
        section: 'AAM-Abbott-Website',
        title: 'AAM Abbott Website',
        client: "FR Web Dev",
        role: "Freelance - Project Lead",

        startMonth: "March",
        startYear: "2021",
        endMonth: "May",
        endYear: "2021",
        description: "Led the team and managed business logic implementation.",
        techStack: ["Project Management"],
        tasks: [
            "Established operation strategy and led the team.",
            "Designed business logic and managed cash-flow.",
        ],
    },
    {
        section: 'Riseloka-Admin-Website',
        title: 'Riseloka Admin Website',
        client: "Riseloka Indonesia",
        role: "Freelance - Frontend Developer",

        startMonth: "December",
        startYear: "2020",
        endMonth: "May",
        endYear: "2021",
        description: "Developed frontend architecture for admin dashboard.",
        techStack: ["React.js", "Next.js", "React Hooks"],
        tasks: [
            "Created base architecture for frontend using Next.js.",
            "Implemented server-side and client-side fetching APIs.",
            "Designed custom hooks for auto-fetching data.",
        ],
    },
    {
        section: 'Kasumi-Driver-Management',
        title: 'Kasumi Driver Management',
        client: "Boston Makmur Gemilang And Hampton Solution",
        role: "Full Time - Frontend Developer",

        startMonth: "October",
        startYear: "2019",
        endMonth: "January",
        endYear: "2021",
        description: "Developed frontend for driver management and mobile apps.",
        techStack: ["React.js", "Next.js", "React Native"],
        tasks: [
            "Created Frontend with Next.js for Kasumi Driver Management.",
            "Developed Kasumi Mobile Apps and QR-Code Scanner using React Native.",
            "Implemented frontend logic and API integration.",
        ],
    },
]

export function getProjects() {
    return projects
}

// getProjectsSummary create short version of experience in the home page or "/"
export function getProjectsSummary() {
    return projects.map((project) => ({
        section: project.section,
        title: project.title,
        client: project.client,
        role: project.role,

        description: project.description,
        startMonth: project.startMonth,
        startYear: project.startYear,
        endMonth: project.endMonth,
        endYear: project.endYear,
    }))
}
