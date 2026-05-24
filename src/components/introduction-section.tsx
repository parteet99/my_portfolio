import Image from "next/image";
import { NavHashLink } from "@/components/nav-hash-link";
import { resume } from "@/data/resume";

const highlights = [
  "React & Next.js",
  "Accessible UI",
  "Design-minded code",
] as const;

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="scroll-mt-16 relative overflow-hidden px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-16"
    >
      <div
        className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-xl">

          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Hey, I&apos;m <span className="text-accent">Parteetjot</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted">
            {resume.summary}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <NavHashLink
              href="#skills"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition hover:bg-accent/90"
            >
              See my work
            </NavHashLink>
            <NavHashLink
              href="#resume"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent/30 hover:bg-surface-muted"
            >
              View resume
            </NavHashLink>
          </div>
        </div>

        <aside className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-xs">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-card">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-full bg-accent/15"
                  aria-hidden
                />
                <Image
                  src="/P.png"
                  alt={resume.name}
                  width={112}
                  height={112}
                  className="relative h-28 w-28 rounded-full border-4 border-surface object-cover shadow-md"
                  priority
                />
              </div>
              <p className="font-display mt-5 text-xl font-bold text-foreground">
                {resume.name}
              </p>
              <p className="mt-1 text-sm font-medium text-accent">
                {resume.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Based in India · open to remote roles and collaborations that
                value clarity, craft, and kind teamwork.
              </p>
            </div>

            <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Focus</dt>
                <dd className="font-medium text-foreground text-right">
                  Frontend & UI
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Education</dt>
                <dd className="font-medium text-foreground text-right">
                  B.Tech CSE
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Availability</dt>
                <dd className="font-medium text-foreground text-right">
                  Open to opportunities
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
