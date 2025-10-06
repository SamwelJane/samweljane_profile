import { Separator } from "@/components/ui/separator"
import { Mail, Phone, Linkedin, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Samwel Jane</h3>
            <p className="text-muted-foreground leading-relaxed">
              Data Scientist passionate about transforming data into actionable insights for business growth and
              societal impact. Committed to education, mentorship, and sustainable development through data-driven
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#accomplishments" className="text-muted-foreground hover:text-primary transition-colors">
                Accomplishments
              </a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">
                Education
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+254712197226" className="hover:text-primary transition-colors">
                  +254712197226
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:janesamwel94@gmail.com" className="hover:text-primary transition-colors">
                  janesamwel94@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/samwel-jane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>Juja, Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Samwel Jane. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Built with passion for data science and social impact.</p>
        </div>
      </div>
    </footer>
  )
}
