"use client";

import { useCallback, useRef } from "react";
import { resume, resumeFileName } from "@/data/resume";
import { ResumePrintDocument } from "@/components/resume-print";

const PRINT_STYLES = `
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 10.5pt;
    line-height: 1.45;
    color: #18181b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .resume-print-doc { max-width: 100%; padding: 0; }
  .resume-print-header {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.85rem;
    border-bottom: 2px solid #7c3aed;
  }
  .resume-print-name {
    font-size: 22pt;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }
  .resume-print-title {
    margin-top: 0.2rem;
    font-size: 11pt;
    color: #7c3aed;
    font-weight: 600;
  }
  .resume-print-contact {
    text-align: right;
    font-size: 9pt;
    color: #52525b;
    line-height: 1.5;
  }
  .resume-print-section { margin-bottom: 0.85rem; }
  .resume-print-section h2 {
    font-size: 9.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #7c3aed;
    margin-bottom: 0.35rem;
  }
  .resume-print-section > p { color: #3f3f46; }
  .resume-print-skills { font-size: 9.5pt; }
  .resume-print-entry { margin-bottom: 0.65rem; }
  .resume-print-entry-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 0.5rem;
    margin-bottom: 0.2rem;
  }
  .resume-print-entry-head strong { font-size: 10.5pt; }
  .resume-print-entry-head span { font-size: 9.5pt; color: #52525b; }
  .resume-print-period { margin-left: auto; font-size: 9pt; color: #71717a; }
  .resume-print-entry ul {
    margin-left: 1.1rem;
    color: #3f3f46;
    font-size: 9.5pt;
  }
  .resume-print-entry li { margin-bottom: 0.12rem; }
  .resume-print-details { font-size: 9.5pt; color: #52525b; margin-top: 0.15rem; }
`;

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M12 15V3m0 12l4-4m-4 4l-4-4" />
      <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export function ResumeSection() {
  const printRootRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    const source = printRootRef.current;
    if (!source) return;

    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>${resume.name} — Resume</title>
          <style>${PRINT_STYLES}</style>
        </head>
        <body>${source.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();

    window.setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
  }, []);

  return (
    <section
      id="resume"
      className="scroll-mt-16 border-t border-zinc-200 px-6 py-24 dark:border-zinc-800 sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Resume
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className="group inline-flex shrink-0 items-center cursor-pointer justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:bg-right hover:shadow-violet-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          >
            <DownloadIcon />
            Download PDF
            <span className="sr-only">({resumeFileName})</span>
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500"
              aria-hidden
            />
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" aria-hidden />
            <div className="relative p-6 sm:p-8">
              <header className="border-b border-zinc-100 pb-6 dark:border-zinc-800">
                <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                  {resume.name}
                </h3>
                <p className="mt-1 text-base font-medium text-violet-600 dark:text-violet-400">
                  {resume.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {resume.summary}
                </p>
              </header>

              <div className="mt-6 space-y-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    Experience
                  </h4>
                  <ul className="mt-4 space-y-6">
                    {resume.experience.map((job) => (
                      <li key={`${job.company}-${job.period}`}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {job.role}
                          </p>
                          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {job.company}
                          {job.location ? ` · ${job.location}` : ""}
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {job.highlights.slice(0, 2).map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" aria-hidden />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    Education
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {resume.education.map((edu) => (
                      <li key={`${edu.school}-${edu.period}`}>
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {edu.school} · {edu.period}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Core skills
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-5 dark:border-zinc-800 dark:bg-zinc-900/40">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Contact
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>{resume.email}</li>
                <li>{resume.phone}</li>
                <li>{resume.location}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div
        ref={printRootRef}
        className="sr-only"
        aria-hidden
      >
        <ResumePrintDocument />
      </div>
    </section>
  );
}
