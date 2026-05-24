"use client";

import { useCallback, useRef } from "react";
import { resume, resumeFileName } from "@/data/resume";
import { ResumePrintDocument } from "@/components/resume-print";
import { SectionHeader, SectionShell, SkillPill, SurfaceCard } from "@/components/ui/section";

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
    <SectionShell id="resume" variant="muted">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          label="Resume"
          title="A snapshot of my journey"
          description="Experience, education, and skills — download a PDF copy if you'd like to share it with your team."
        />

        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 self-start rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/20 transition hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:self-auto"
        >
          <DownloadIcon />
          Download PDF
          <span className="sr-only">({resumeFileName})</span>
        </button>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
        <SurfaceCard as="div" className="hover:translate-y-0 hover:shadow-card">
          <header className="border-b border-border pb-6">
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {resume.name}
            </h3>
            <p className="mt-1 text-base font-medium text-accent">
              {resume.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {resume.summary}
            </p>
          </header>

          <div className="mt-6 space-y-8">
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Experience
              </h4>
              <ul className="mt-4 space-y-6">
                {resume.experience.map((job) => (
                  <li key={`${job.company}-${job.period}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-semibold text-foreground">
                        {job.role}
                      </p>
                      <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                      {job.highlights.slice(0, 2).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Education
              </h4>
              <ul className="mt-4 space-y-4">
                {resume.education.map((edu) => (
                  <li key={`${edu.school}-${edu.period}`}>
                    <p className="font-semibold text-foreground">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted">
                      {edu.school} · {edu.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SurfaceCard>

        <aside className="flex flex-col gap-4">
          <SurfaceCard as="div" className="hover:translate-y-0 hover:shadow-card">
            <h4 className="text-sm font-semibold text-foreground">
              Core skills
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <li key={skill}>
                  <SkillPill>{skill}</SkillPill>
                </li>
              ))}
            </ul>
          </SurfaceCard>

          <SurfaceCard as="div" className="hover:translate-y-0 hover:shadow-card">
            <h4 className="text-sm font-semibold text-foreground">Let&apos;s talk</h4>
            <p className="mt-2 text-sm text-muted">
              Happy to connect about roles, freelance work, or swapping ideas.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              <li>{resume.email}</li>
              <li>{resume.phone}</li>
              <li className="text-muted">{resume.location}</li>
            </ul>
          </SurfaceCard>
        </aside>
      </div>

      <div
        ref={printRootRef}
        className="sr-only"
        aria-hidden
      >
        <ResumePrintDocument />
      </div>
    </SectionShell>
  );
}
