import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

const certificates = [
  {
    title: "Certified Trainer (GYB–SYB–IYB, SIYB Programme)",
    issuer: "International Labour Organization (ILO)",
    date: "August 2025",
    description: "Certified as competent to train in the Start and Improve Your Business programme",
    category: "Business Training",
    featured: true,
    image: "/images/facilitator-poster.jpg",
  },
  {
    title: "Machine Learning Engineer",
    issuer: "Omdena",
    date: "2023",
    description: "Advanced certification in machine learning engineering and deployment",
    category: "AI/ML",
  },
  {
    title: "Microsoft Power BI - The Practical Guide 2024",
    issuer: "Microsoft",
    date: "2024",
    description: "Comprehensive training in business intelligence and data visualization",
    category: "Data Visualization",
  },
  {
    title: "Complete Cyber Security Course: Hackers Exposed!",
    issuer: "Professional Development",
    date: "2023",
    description: "Advanced cybersecurity training and ethical hacking",
    category: "Cybersecurity",
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    issuer: "Professional Development",
    date: "2023",
    description: "Advanced database management and query optimization",
    category: "Database",
  },
  {
    title: "Introduction to AWS",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Cloud computing fundamentals and AWS services",
    category: "Cloud Computing",
  },
  {
    title: "Positive Citizen Leadership on Sustainability",
    issuer: "United People Global",
    date: "2022",
    description: "Leadership training focused on sustainable development",
    category: "Leadership",
  },
  {
    title: "Global Citizenship",
    issuer: "Ban Ki-Moon Foundation",
    date: "2022",
    description: "Global leadership and citizenship development program",
    category: "Leadership",
  },
]

const categoryColors = {
  "Business Training": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Data Visualization": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Cybersecurity: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Database: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  "Cloud Computing": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Leadership: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and specialized
            training programs.
          </p>
        </div>

        {/* Featured Certificate */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/facilitator-poster.jpg"
                  alt="Data Science Facilitator"
                  className="w-64 h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <Badge className={categoryColors["Business Training"]}>Featured Certification</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">Certified Trainer (ILO SIYB Programme)</h3>
                <p className="text-lg text-muted-foreground mb-4">International Labour Organization • August 2025</p>
                <p className="text-muted-foreground mb-6">
                  Certified as competent to train in the Start and Improve Your Business programme by the International
                  Labour Organization, enabling delivery of entrepreneurship training globally.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Recently Awarded</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates
            .filter((cert) => !cert.featured)
            .map((certificate, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <Badge className={categoryColors[certificate.category as keyof typeof categoryColors]}>
                      {certificate.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{certificate.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">{certificate.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{certificate.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Training Images */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Training & Speaking Engagements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="/images/hr-training.jpg"
                alt="HR Training Session at Moringa School"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Data Analytics Training</h4>
                  <p className="text-sm">Moringa School • Technical Mentoring</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="/images/tourism-panel.jpg"
                alt="Tourism Week Panel Discussion"
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">Tourism Week 2024</h4>
                  <p className="text-sm">Kisumu • Panel Discussion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
