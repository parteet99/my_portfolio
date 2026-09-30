export type ResumeProject = {
    name: string;
    description: string;
    url?: string;
    technologies: string[];
};

export type ResumeExperience = {
    role: string;
    company: string;
    period: string;
    location?: string;
    highlights: string[];
    projects?: ResumeProject[];
};

export type ResumeEducation = {
    degree: string;
    school: string;
    period: string;
    details?: string;
};

export type ResumePersonalProject = {
    name: string;
    description: string;
    url?: string;
    technologies: string[];
};

export const resume = {
    name: "Parteetjot Singh",
    title: "Junior Fullstack Developer",
    location: "Available for Remote & Hybrid",
    email: "parteet99@outlook.com",
    phone: "+91 97792 52782",

    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
    },

    summary:
        "Junior fullstack developer focused on building responsive, maintainable, and user-friendly web applications. Experienced with React, Next.js, Node.js, Express.js, PostgreSQL, REST APIs, authentication, and third-party integrations.",

    skills: [
        "TypeScript",
        "React",
        "Next.js",
        "HTML & CSS",
        "Tailwind CSS",
        "Responsive UI",
        "Node.js",
        "Express.js",
        "REST APIs",
        "API Integration",
        "JWT Authentication",
        "CRUD Operations",
        "Rate Limiting",
        "PostgreSQL",
        "SQL",
        "Database Design",
        "Cloudinary",
        "File Uploads",
        "Git",
        "GitHub",
        "Postman",
        "Performance",
        "Accessibility",
        "Pagination",
        "Search & Filtering",
        "AI-Assisted Development",
        "ChatGPT",
        "Cursor IDE",
        "VS Code",
    ],

    experience: [
        {
            role: "Junior Fullstack Developer",
            company: "Asteron Technology",
            period: "Sept 2025 — August 2026",
            location: "Remote",
            highlights: [
                "Built and shipped responsive full-stack web applications using Next.js, React, Node.js, and REST APIs.",
                "Integrated backend APIs, authentication, database-driven features, and third-party services into production applications.",
                "Improved application performance through image optimization, code splitting, lazy loading, and responsive UI practices.",
            ],

            projects: [
                {
                    name: "Proprytor",
                    description:
                        "A full-stack CA-based property viewing application that helps users discover and schedule property viewings, while providing administrators with tools to manage properties, listings, users, and viewing requests.",
                    url: "https://proprytor.com",
                    technologies: [
                        "Next.js",
                        "React",
                        "Node.js",
                        "Express.js",
                        "PostgreSQL",
                    ],
                },
            ],
        },

        {
            role: "Fullstack Developer Intern",
            company: "Asteron Technology",
            period: "March 2025 — August 2025",
            location: "Remote",

            highlights: [
                "Developed reusable React and Next.js components for production web applications.",
                "Integrated REST APIs and handled loading, validation, error, and empty states.",
                "Collaborated with developers and designers to implement responsive and accessible interfaces.",
            ],

            projects: [
                {
                    name: "Barnala Trucking driving school",
                    description:
                      "A full-stack trucking-based online driving school application designed to help new drivers develop theoretical and practical knowledge through structured lessons, organized quizzes, attendance tracking, and learner management features.",
                    url: "https://barnala.ca",
                    technologies: [
                        "Next.js",
                        "React",
                        "Node.js",
                        "Express.js",
                        "PostgreSQL",
                    ],
                },
            ],
        },
    ] satisfies ResumeExperience[],

    projects: [
        {
            name: "Memoza",
            description:
                "A full-stack note-taking application built with Next.js, Node.js, Express.js, and PostgreSQL, featuring authentication, folders, favorites, pinned notes, archiving, trash, search, pagination, and cloud image storage.",
            url: "",
            technologies: [
                "Next.js",
                "React",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "REST APIs",
                "JWT",
                "Cloudinary",
            ],
        },
    ] satisfies ResumeProject[],

    education: [
        {
            degree: "B.Tech — Computer Science & Engineering",
            school: "Amritsar Group of Colleges",
            period: "2019 — 2023",
            details:
                "Batch 2019–2023 · Coursework in web development and software engineering",
        },
    ] satisfies ResumeEducation[],
} as const;

export const resumeFileName = "Parteetjot_Singh_Resume.pdf";
