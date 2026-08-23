export type ResumeExperience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type ResumeEducation = {
  degree: string;
  school: string;
  period: string;
  details?: string;
};

export const resume = {
  name: "Parteetjot Singh",
  title: "Frontend Developer",
  location: "Available for remote & Hybrid",
  email: "parteet99@outlook.com",
  phone: "+91 97792 52782",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  summary:
    "Frontend developer focused on fast, accessible, and polished web experiences. I turn product ideas into responsive interfaces with clean architecture, thoughtful UX, and maintainable code.",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "HTML & CSS",
    "Tailwind CSS",
    "Git",
    "Responsive UI",
    "Performance",
    "ChatGPT",
    "Cursor IDE",
    "Vs Code IDE",
    "Postman"
  ],
  experience: [
    {
      role: "Junior Frontend Developer",
      company: "Asteron Technology",
      period: "Sept 2025 — August 2026",
      location: "Remote",
      highlights: [
        "Built and shipped responsive product interfaces with Next.js.",
        "Improved Core Web Vitals through image optimization, code splitting, and lazy loading.",
        "Partnered with design and backend teams to deliver accessible UI.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Asteron Technology",
      period: "March 2025 — August 2025",
      location: "Remote",
      highlights: [
        "Developed reusable component libraries and documented patterns for the team.",
        "Integrated REST APIs and handled loading, error, and empty states.",
      ],
    },
  ] satisfies ResumeExperience[],
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
