import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Globe, Award, Calendar, ExternalLink } from "lucide-react"

const accomplishments = [
  {
    title: "International Global Peace Summit Kenya 2023",
    description:
      "Successfully hosted major international summit with 94 international delegates and 550+ participants, focusing on peace, leadership, and sustainable development.",
    icon: Globe,
    category: "International Leadership",
    impact: "550+ participants, 94 countries represented",
    link: "https://drive.google.com/GPSK_link",
  },
  {
    title: "Ministry of Health Training Program",
    description:
      "Formulated and delivered masterclass training on Data Visualization for Ministry of Health officials, improving data literacy and decision-making capabilities.",
    icon: Users,
    category: "Professional Training",
    impact: "25 officials trained, 80% proficiency achieved",
  },
  {
    title: "Global Care Heroes Foundation",
    description:
      "Founded organization focusing on medical exchange programs, featured by Nation Media for community impact and healthcare initiatives.",
    icon: Award,
    category: "Social Impact",
    impact: "Featured by Nation Media",
  },
  {
    title: "Global Peace Chain Representative",
    description:
      "Represented Kenya in multiple international Global Peace Chain events across Malaysia, Turkey, and other countries, focusing on youth leadership and sustainable development.",
    icon: Globe,
    category: "International Representation",
    impact: "Multiple countries represented",
  },
  {
    title: "Tourism Ambassadors President",
    description:
      "Recognized as President of Tourism Ambassadors, promoting tourism and youth empowerment across Kenya with county-wide representation.",
    icon: Trophy,
    category: "Leadership Role",
    impact: "County-wide representation established",
  },
]

const conferences = [
  {
    title: "Global Peace Summit Kenya 2023",
    location: "Nairobi, Kenya",
    date: "February 9-11, 2023",
    role: "Host & Organizer",
    description:
      "Hosted international summit with 94 delegates and 550+ participants focusing on peace and sustainable development.",
  },
  {
    title: "Youth Connekt Africa Summit",
    location: "Kigali, Rwanda",
    date: "October 25-28, 2022",
    role: "Kenyan Representative",
    description:
      "Selected by State Department for Youth Affairs to represent Kenyan youth at prestigious continental summit.",
  },
  {
    title: "Global Peace Chain Summit",
    location: "Istanbul, Turkey",
    date: "October 25-28, 2021",
    role: "Panel Speaker",
    description:
      "Engaged in panel discussion on the role of young leaders in fostering sustainable leadership globally.",
  },
  {
    title: "Global Peace Chain Summit",
    location: "Istanbul, Turkey",
    date: "October 15-18, 2020",
    role: "Keynote Speaker",
    description:
      "Presented innovative solutions for achieving 2030 UN Sustainable Development Goals during COVID-19 challenges.",
  },
  {
    title: "Global Peace Chain Summit",
    location: "Kuala Lumpur, Malaysia",
    date: "February 25-28, 2020",
    role: "Speaker",
    description: "Presented on conflict resolution and youth skill development to global young leaders.",
  },
  {
    title: "International Conference on Environment and Energy",
    location: "Kabarak University, Kenya",
    date: "September 16-17, 2019",
    role: "Content Creator",
    description: "Spearheaded creation of educational materials on sustainable energy and climate change impacts.",
  },
]

const fellowships = [
  {
    title: "Youth Connekt Africa Fellow",
    organization: "Youth Connekt Africa Hub",
    period: "October 2022 - December 2023",
    focus: "Leadership, resource mobilization, technical growth, and project management",
  },
  {
    title: "Graduate of Sustainable Leadership",
    organization: "United People Global and Hurricane Island Science",
    period: "March - June 2021",
    focus: "Project management, sustainable leadership, and team management techniques",
  },
  {
    title: "Machine Learning Engineer",
    organization: "Omdena",
    period: "2023",
    focus: "Advanced machine learning applications and collaborative AI projects",
  },
  {
    title: "Global Citizenship Fellow",
    organization: "Ban Ki-Moon Foundation",
    period: "2022",
    focus: "Global citizenship, sustainable development, and international cooperation",
  },
]

export function AccomplishmentsSection() {
  return (
    <section id="accomplishments" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Accomplishments & Recognition</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            International recognition for leadership in data science education, peace initiatives, and sustainable
            development across multiple continents.
          </p>
        </div>

        {/* Major Accomplishments */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Major Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accomplishments.map((accomplishment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <accomplishment.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {accomplishment.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">{accomplishment.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{accomplishment.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary">{accomplishment.impact}</span>
                    {accomplishment.link && (
                      <a
                        href={accomplishment.link}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Report</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* International Conferences */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">International Conferences & Speaking</h3>
          <div className="space-y-4">
            {conferences.map((conference, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{conference.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{conference.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{conference.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="h-4 w-4" />
                          <span>{conference.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {conference.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fellowships & Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Fellowships & Professional Development</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {fellowships.map((fellowship, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{fellowship.title}</CardTitle>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <span className="font-medium">{fellowship.organization}</span>
                    <span>{fellowship.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="font-medium">Focus Areas:</span> {fellowship.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
