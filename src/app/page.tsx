import { IntroductionSection } from "@/components/introduction-section";
import { QualificationsSection } from "@/components/qualifications-section";
import { ResumeSection } from "@/components/resume-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <IntroductionSection />

      <SkillsSection />

      <QualificationsSection />

      <ResumeSection />
    </div>
  );
}
