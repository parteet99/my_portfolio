import { resume } from "@/data/resume";

const skillCategories = [
  {
    title: "Languages & frameworks",
    description: "Core stack for building fast, polished web interfaces",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    border: "group-hover:border-violet-500/30",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Craft & quality",
    description: "Practices that keep UI reliable, fast, and inclusive",
    accent: "from-cyan-500/15 to-violet-500/10",
    border: "group-hover:border-cyan-500/30",
    skills: ["Git", "Responsive UI", "Performance", "Accessibility"],
  },
  {
    title: "Tools & workflow",
    description: "Everyday tools for building, testing, and shipping",
    accent: "from-fuchsia-500/15 to-violet-500/10",
    border: "group-hover:border-fuchsia-500/30",
    skills: ["ChatGPT", "Cursor IDE", "Postman", "Vs Code IDE"],
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

const categoryIcons = [CodeIcon, SparklesIcon, WrenchIcon] as const;

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
  const otherSkills = resume.skills.filter((skill) => !categorized.has(skill));

  return (
    <section
      id="skills"
      className="scroll-mt-16 relative overflow-hidden border-t border-zinc-200 px-6 py-24 dark:border-zinc-800 sm:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
        aria-hidden
      >
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgb(139 92 246 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(139 92 246 / 0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Skills
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            What I work with
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            From TypeScript and React to accessibility and performance — the
            stack and practices I use to ship polished frontend experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex];
            return (
              <article
                key={category.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none dark:hover:shadow-violet-500/5 ${category.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 ring-1 ring-violet-500/20 dark:bg-violet-500/15 dark:text-violet-400">
                    <Icon />
                  </div>
                  <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {category.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {skillsInCategory(category.skills).map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex items-center rounded-full border border-zinc-200/80 bg-zinc-50/90 px-3.5 py-1.5 text-sm font-medium text-zinc-800 transition-colors group-hover:border-violet-500/25 group-hover:bg-violet-500/10 group-hover:text-violet-800 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200 dark:group-hover:border-violet-500/30 dark:group-hover:bg-violet-500/15 dark:group-hover:text-violet-200">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          {otherSkills.length > 0 ? (
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur-sm md:col-span-2 lg:col-span-3 dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                Also
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {otherSkills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-flex rounded-full border border-zinc-200/80 bg-zinc-50/90 px-3.5 py-1.5 text-sm font-medium text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
