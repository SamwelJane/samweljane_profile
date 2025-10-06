import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { AccomplishmentsSection } from "@/components/accomplishments-section"
import { EducationSection } from "@/components/education-section"
import { CertificatesSection } from "@/components/certificates-section"
import { SocialActivitiesSection } from "@/components/social-activities-section"
import { PublicSpeakingSection } from "@/components/public-speaking-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AccomplishmentsSection />
      <EducationSection />
      <CertificatesSection />
      <SocialActivitiesSection />
      <PublicSpeakingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
