import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const education = [
  {
    degree: "Data Science Certification",
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    period: "June 2019 - December 2019",
    type: "Professional Certification",
    description:
      "Comprehensive data science program covering machine learning, statistical analysis, and business applications.",
    coursework: [
      "Descriptive & Predictive Analysis",
      "Mathematical Statistics",
      "Probability Distribution",
      "Exploratory Data Analysis",
      "Statistical Computing",
      "Machine Learning & Deep Learning",
      "Data Visualization",
    ],
    skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
  },
  {
    degree: "BSc in Applied Bioengineering",
    institution: "Jomo Kenyatta University of Agriculture and Technology",
    location: "Juja, Kenya",
    period: "September 2015 - April 2019",
    type: "Bachelor's Degree",
    description:
      "Interdisciplinary program combining engineering principles with biological systems and biotechnology applications.",
    coursework: [
      "Biochemistry",
      "Qualitative and Quantitative Analysis",
      "Biostatistics",
      "DNA Extraction & Gene Modification",
      "Drug Formulation",
      "Microbiology",
      "Laboratory Safety and Maintenance",
    ],
    skills: ["Biostatistics", "Laboratory Techniques", "Research Methods", "Quality Control", "Scientific Analysis"],
  },
  {
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    institution: "Kiamaina Secondary / Maryland Mountain High School",
    location: "Kenya",
    period: "January 2010 - November 2014",
    type: "Secondary Education",
    description:
      "Completed secondary education with focus on sciences and mathematics, providing strong foundation for technical studies.",
    coursework: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Kiswahili"],
    skills: ["Scientific Foundation", "Mathematical Analysis", "Critical Thinking", "Problem Solving"],
  },
]

const certifications = [
  {
    title: "Certified Trainer (GYB–SYB–IYB, SIYB Programme, ILO)",
    provider: "International Labour Organization",
    year: "August 2025",
    featured: true,
  },
  {
    title: "The Complete Cyber Security Course: Hackers Exposed!",
    provider: "Online Learning Platform",
    year: "2023",
  },
  {
    title: "Introduction to Business Analytics",
    provider: "Professional Development",
    year: "2023",
  },
  {
    title: "Microsoft Power BI - The Practical Guide 2024",
    provider: "Microsoft Learning",
    year: "2024",
  },
  {
    title: "Rasa for Beginners",
    provider: "AI/ML Platform",
    year: "2023",
  },
  {
    title: "Complete Chatbot Course Using Rasa Framework & Python",
    provider: "Technical Training",
    year: "2023",
  },
  {
    title: "Introduction to AWS",
    provider: "Amazon Web Services",
    year: "2023",
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    provider: "Database Training",
    year: "2023",
  },
  {
    title: "Positive Citizen Leadership on Sustainability",
    provider: "United People Global",
    year: "2022",
  },
  {
    title: "Machine Learning Engineer",
    provider: "Omdena",
    year: "2022",
  },
  {
    title: "Global Citizenship",
    provider: "Ban Ki-Moon Foundation",
    year: "2022",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Education & Qualifications</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Strong academic foundation in bioengineering and specialized training in data science, complemented by
            continuous professional development and industry certifications.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Formal Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                          <span className="font-medium">{edu.institution}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="mb-3">
                          {edu.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                      <ul className="space-y-2">
                        {edu.coursework.map((course, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
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

        {/* Professional Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`hover:shadow-md transition-shadow ${cert.featured ? "ring-2 ring-primary/20" : ""}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 ${cert.featured ? "bg-primary/20" : "bg-primary/10"} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <Award className={`h-4 w-4 ${cert.featured ? "text-primary" : "text-primary"}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm leading-tight mb-2">{cert.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{cert.provider}</span>
                        <Badge variant={cert.featured ? "default" : "outline"} className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                      {cert.featured && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Certified to train in Start and Improve Your Business programme
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
