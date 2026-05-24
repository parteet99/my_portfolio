import { ResumeSection } from "@/components/resume-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section
        id="introduction"
        className="scroll-mt-16 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-24 text-center sm:px-10"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Introduction
        </p>
        <h1 className="font-display max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Parteetjot Singh
        </h1>
        <p className="mt-3 text-xl font-medium text-zinc-700 dark:text-zinc-300">
          Frontend Developer
        </p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          I build fast, accessible, and polished interfaces for the web —
          turning ideas into experiences users love.
        </p>
      </section>

      <SkillsSection />

      <section
        id="qualifications"
        className="scroll-mt-16 border-t border-zinc-200 px-6 py-24 dark:border-zinc-800 sm:px-10"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Qualifications
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Education, certifications, and professional qualifications belong
            here.
          </p>
        </div>
      </section>

      <ResumeSection />
    </div>
  );
}
