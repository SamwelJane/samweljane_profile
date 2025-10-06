import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Data Science Technical Mentor",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    period: "August 2021 - Present",
    type: "Full-time",
    description: "Leading technical education and student development in data science and analytics.",
    responsibilities: [
      "Facilitate live teaching sessions of instructional content",
      "Lead classroom team to identify and implement new technology solutions",
      "Support student growth through labs and practice sessions",
      "Provide timely and effective feedback on student work and assessments",
      "Support student development through one-on-ones and mentoring",
      "Manage product implementation of pilots and new educational products",
      "Supervise classroom system infrastructure and build quality assurance processes",
    ],
    skills: ["Data Science Education", "Technical Mentoring", "Curriculum Development", "Student Assessment"],
  },
  {
    title: "Secretary - Youth Connekt Africa Summit Working Team",
    company: "State Department for Youth Affairs and Creative Art",
    location: "Nairobi, Kenya",
    period: "August 2023 - January 2024",
    type: "Contract",
    description: "Coordinated major international youth summit with 550+ participants and 94 international delegates.",
    responsibilities: [
      "Assisted in preparation of YCA roadmap and strategic documents",
      "Organized steering committee and local organizing committee meetings",
      "Coordinated stakeholders and partners meetings for fundraising",
      "Prepared progress reports and post-summit documentation",
      "Managed logistics for international delegates and participants",
    ],
    skills: ["Event Management", "International Coordination", "Strategic Planning", "Stakeholder Management"],
  },
  {
    title: "Freelance Data Analyst",
    company: "Self-Employed",
    location: "Nairobi, Kenya",
    period: "June 2021 - August 2021",
    type: "Freelance",
    description:
      "Provided data analysis and visualization services to various clients, delivering actionable insights from complex datasets.",
    responsibilities: [
      "Analyzed and interpreted complex datasets to identify trends and patterns",
      "Created interactive dashboards and visualizations for client presentations",
      "Developed data-driven recommendations for business decision-making",
      "Cleaned and preprocessed data to ensure accuracy and reliability",
      "Collaborated with clients to understand their analytical needs and objectives",
    ],
    skills: ["Data Analysis", "Data Visualization", "Python", "Statistical Analysis", "Client Communication"],
  },
  {
    title: "ICT Consultant-Trainer",
    company: "National Industrial Training Authority (NITA)",
    location: "Nairobi, Kenya",
    period: "December 2018 - June 2021",
    type: "Contract",
    description: "Delivered comprehensive ICT training programs and technical consultancy services.",
    responsibilities: [
      "Provided training on Introduction to Computer and Computer Networking",
      "Delivered programming training in Python language",
      "Conducted Graphic Design training using Photoshop",
      "Trained participants in business skills and communication",
      "Developed curriculum and training materials for various ICT programs",
    ],
    skills: ["Python Programming", "Computer Networking", "Graphic Design", "Technical Training"],
  },
  {
    title: "Financial Advisor",
    company: "Britam Insurance Company",
    location: "Nairobi, Kenya",
    period: "January 2017 - June 2017",
    type: "Full-time",
    description: "Provided financial advisory services and insurance solutions to clients.",
    responsibilities: [
      "Marketing and sales of different insurance products",
      "Built and maintained relationships with clients",
      "Provided support, information, and guidance to clients",
      "Recommended service improvements based on client feedback",
    ],
    skills: ["Financial Advisory", "Insurance Sales", "Client Relationship Management", "Business Development"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            A diverse career spanning data science education, international project coordination, and technical training
            across multiple industries.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{experience.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <Badge variant="outline">{experience.type}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
