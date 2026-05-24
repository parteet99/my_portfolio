import { resume } from "@/data/resume";

/** Print-optimized resume markup (light theme, A4-friendly). */
export function ResumePrintDocument() {
  return (
    <article
      id="resume-print-document"
      className="resume-print-doc bg-white text-zinc-900"
    >
      <header className="resume-print-header">
        <div>
          <h1 className="resume-print-name">{resume.name}</h1>
          <p className="resume-print-title">{resume.title}</p>
        </div>
        <div className="resume-print-contact">
          <p>{resume.email}</p>
          <p>{resume.phone}</p>
          <p>{resume.location}</p>
          <p>{resume.links.linkedin}</p>
          <p>{resume.links.github}</p>
        </div>
      </header>

      <section className="resume-print-section">
        <h2>Summary</h2>
        <p>{resume.summary}</p>
      </section>

      <section className="resume-print-section">
        <h2>Skills</h2>
        <p className="resume-print-skills">{resume.skills.join(" · ")}</p>
      </section>

      <section className="resume-print-section">
        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="resume-print-entry">
            <div className="resume-print-entry-head">
              <strong>{job.role}</strong>
              <span>
                {job.company}
                {job.location ? ` · ${job.location}` : ""}
              </span>
              <span className="resume-print-period">{job.period}</span>
            </div>
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-print-section">
        <h2>Education</h2>
        {resume.education.map((edu) => (
          <div key={`${edu.school}-${edu.period}`} className="resume-print-entry">
            <div className="resume-print-entry-head">
              <strong>{edu.degree}</strong>
              <span>{edu.school}</span>
              <span className="resume-print-period">{edu.period}</span>
            </div>
            {edu.details ? <p className="resume-print-details">{edu.details}</p> : null}
          </div>
        ))}
      </section>
    </article>
  );
}
