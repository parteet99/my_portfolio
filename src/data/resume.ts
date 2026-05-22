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
  location: "Available for remote & on-site",
  email: "parteetjot@email.com",
  phone: "+1 (000) 000-0000",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    portfolio: "https://your-portfolio.vercel.app",
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
    "Accessibility",
    "ChatGPT",
    "Cursor IDE",
    "Vs Code IDE",
    "Postman"
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Your Company",
      period: "2024 — Present",
      location: "Remote",
      highlights: [
        "Built and shipped responsive product interfaces with React and Next.js.",
        "Improved Core Web Vitals through image optimization, code splitting, and lazy loading.",
        "Partnered with design and backend teams to deliver accessible, pixel-accurate UI.",
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Previous Company",
      period: "2022 — 2024",
      highlights: [
        "Developed reusable component libraries and documented patterns for the team.",
        "Integrated REST APIs and handled loading, error, and empty states.",
        "Contributed to CI workflows and code reviews to keep quality high.",
      ],
    },
  ] satisfies ResumeExperience[],
  education: [
    {
      degree: "Bachelor's in Computer Science (or related field)",
      school: "Your University",
      period: "2019 — 2023",
      details: "Relevant coursework: Web Development, Data Structures, Software Engineering",
    },
  ] satisfies ResumeEducation[],
} as const;

export const resumeFileName = "Parteetjot_Singh_Resume.pdf";
