import { resume } from "@/data/resume";
import { SectionHeader, SectionShell, SkillPill, SurfaceCard } from "@/components/ui/section";

function GraduationCapIcon() {
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
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  );
}

const focusAreas = [
  "Computer Science",
  "Software Engineering",
  "Web Development",
  "Data Structures",
] as const;

export function QualificationsSection() {
  return (
    <SectionShell id="qualifications">
      <SectionHeader
        label="Qualifications"
        title="Where I learned the craft"
        description="A solid engineering foundation from college — paired with hands-on building that keeps me curious and growing."
      />

      <div className="mt-14">
        <ol className="relative space-y-0">
          <div
            className="absolute left-[1.125rem] top-10 bottom-10 w-0.5 rounded-full bg-border sm:left-[1.375rem]"
            aria-hidden
          />

          {resume.education.map((edu, index) => (
            <li key={`${edu.school}-${edu.period}`} className="relative">
              <div className="flex gap-5 sm:gap-6">
                <div
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent shadow-sm ring-4 ring-background sm:h-11 sm:w-11"
                  aria-hidden
                >
                  <GraduationCapIcon />
                </div>

                <SurfaceCard className="mb-8 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {index === 0 ? "Undergraduate degree" : "Education"}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                        {edu.degree}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                      <CalendarIcon />
                      Batch {edu.period.replace(/\s*—\s*/g, "–")}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                    <span className="inline-flex items-center gap-2 font-medium text-foreground">
                      <BuildingIcon />
                      {edu.school}
                    </span>
                    <span
                      className="hidden text-border sm:inline"
                      aria-hidden
                    >
                      ·
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarIcon />
                      {edu.period}
                    </span>
                  </div>

                  {edu.details ? (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                      {edu.details}
                    </p>
                  ) : null}

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <li key={area}>
                        <SkillPill>{area}</SkillPill>
                      </li>
                    ))}
                  </ul>
                </SurfaceCard>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
