import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              HELLO! My name IS SAMWEL jane
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Data Scientist</span>
              <br />
              <span className="text-primary">& Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I Transform Data into Actionable Insights with a unique blend of technical expertise, business acumen, and
              commitment to social impact through data-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                <a href="#contact">Hire me</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-2 border-foreground/20 hover:border-primary hover:text-primary bg-transparent"
                asChild
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image with Diagonal Separator */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background to-transparent z-10 hidden lg:block" />
            <div
              className="absolute left-0 top-0 bottom-0 w-24 bg-background z-10 hidden lg:block"
              style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
              }}
            />

            <div className="relative h-[500px] lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl lg:rounded-none overflow-hidden">
              <img
                src="/images/profile-photo.jpg"
                alt="Samwel Jane - Data Scientist"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
