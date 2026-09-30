import { resume } from "@/data/resume";
import {
  SectionHeader,
  SectionShell,
  SkillPill,
  SurfaceCard,
} from "@/components/ui/section";

const skillCategories = [
  {
    title: "Fullstack Development",
    description:
      "A practical full-stack toolkit covering frontend development, backend APIs, databases, and the tools I use to build and ship web applications.",
    iconBg:
      "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Designing APIs, authentication flows, and backend features that connect the product together.",
    iconBg:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "JWT Authentication",
      "CRUD Operations",
      "Rate Limiting",
    ],
  },
  {
    title: "Database & Storage",
    description:
      "Working with relational data, queries, schema design, and application file storage.",
    iconBg:
      "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Cloudinary",
      "File Uploads",
    ],
  },
  {
    title: "Engineering & Tools",
    description:
      "The tools and practices I use to build, test, debug, and improve applications.",
    iconBg:
      "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
    skills: [
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
  },
] as const;

function CodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.964 0z" />
      <path d="M20 3v4M22 5h-4M4 17v4M2 19h4" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

const categoryIcons = [CodeIcon, SparklesIcon, WrenchIcon, DatabaseIcon] as const;

function skillsInCategory(
  names: readonly string[],
): (typeof resume.skills)[number][] {
  return resume.skills.filter((skill) =>
    (names as readonly string[]).includes(skill),
  );
}

export function SkillsSection() {
  const categorized = new Set(
    skillCategories.flatMap((category) => category.skills),
  );

  return (
    <SectionShell id="skills" variant="muted">
      <SectionHeader
        label="Skills"
        title="What I bring to the table"
        description="A practical mix of frontend craft, modern frameworks, and the habits that keep projects healthy long after launch."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = categoryIcons[categoryIndex];
          return (
            <SurfaceCard key={category.title}>
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${category.iconBg}`}
              >
                <Icon />
              </div>
              <h3 className="mt-5 font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skillsInCategory(category.skills).map((skill) => (
                  <li key={skill}>
                    <SkillPill>{skill}</SkillPill>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          );
        })}
      </div>
    </SectionShell>
  );
}
