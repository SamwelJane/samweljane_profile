import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Users, Globe } from "lucide-react"

const skills = [
  "Machine Learning & AI",
  "Predictive Modeling",
  "Data Visualization",
  "SQL & Database Management",
  "Microsoft Power BI & Tableau",
  "Statistics & Analytics",
  "Business Strategy",
  "Project Management",
  "Python Programming",
  "Training & Mentorship",
  "Event Planning",
  "Project Design",
  "M&E",
]

const highlights = [
  {
    icon: Brain,
    title: "Technical Expertise",
    description:
      "Advanced skills in machine learning, AI, and predictive modeling with hands-on experience in real-world applications.",
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description:
      "Proven track record of using data-driven insights to drive business growth and improve operational efficiency.",
  },
  {
    icon: Users,
    title: "Mentorship & Training",
    description:
      "Experienced technical mentor at Moringa School, helping students develop data science skills and career readiness.",
  },
  {
    icon: Globe,
    title: "Global Leadership",
    description:
      "International conference speaker and peace initiative leader, representing Kenya on global platforms.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            I Transform Data Into <span className="text-primary">Actionable Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-3xl leading-relaxed">
            With a unique blend of technical expertise, business acumen, and commitment to social impact through
            data-driven solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With a strong foundation in Applied Bioengineering and specialized training in Data Science, I bring a
                unique perspective to solving complex problems through data analysis and machine learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans from technical mentoring at Moringa School to delivering corporate training for
                international organizations, always focusing on practical applications that drive real-world impact.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
              <img
                src="/images/hr-training.jpg"
                alt="Samwel Jane - Training Session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <highlight.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
