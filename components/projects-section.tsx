"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Calendar,
  TrendingUp,
  Users,
  BarChart3,
  Rocket,
  Globe,
  GraduationCap,
  Sprout,
} from "lucide-react"

type ProjectCategory = "All" | "Training" | "Analysis" | "Event Planning" | "Farming"

const projects = [
  {
    title: "Business Management System",
    status: "Ongoing",
    category: "Analysis" as ProjectCategory,
    company: "Entrepreneurship & Innovation (Founder & Lead Developer)",
    description:
      "Comprehensive SaaS retail system designed for MSMEs in Kenya, integrating FastAPI backend with React frontend and advanced business intelligence features.",
    image: "/business-management-dashboard.png",
    technologies: ["FastAPI", "React", "Stripe", "M-Pesa", "WhatsApp API", "Machine Learning"],
    features: [
      "Customizable SaaS retail system with onboarding flow",
      "Integrated Stripe and M-Pesa payment processing",
      "Smart Business Health Score analytics",
      "Supplier Recommendation Engine using ML",
      "WhatsApp Shopfront integration",
      "Goal-Based Savings Planner for MSMEs",
    ],
    icon: Rocket,
  },
  {
    title: "International Global Peace Summit Kenya 2023",
    status: "Completed",
    category: "Event Planning" as ProjectCategory,
    period: "February 9-11, 2023",
    company: "Global Peace Chain - Kenya (Host & Organizer)",
    description:
      "Successfully hosted and coordinated a major international summit bringing together global leaders to discuss peace, sustainability, and the UN SDGs.",
    image: "/international-conference-summit.jpg",
    technologies: ["Event Management", "Stakeholder Coordination", "Logistics", "International Relations"],
    features: [
      "Hosted 94 international delegates from multiple countries",
      "Coordinated 550+ participants across 3-day summit",
      "Managed international logistics and accommodations",
      "Facilitated panel discussions on global peace initiatives",
      "Organized networking sessions and cultural exchanges",
      "Produced comprehensive summit report and documentation",
    ],
    icon: Globe,
  },
  {
    title: "Youth Connekt Africa Summit Coordination",
    status: "Completed",
    category: "Event Planning" as ProjectCategory,
    period: "August 2023 - January 2024",
    company: "State Department for Youth Affairs (Secretary - Working Team)",
    description:
      "Led the coordination and planning of the Youth Connekt Africa Summit, managing stakeholder engagement and fundraising initiatives.",
    image: "/youth-summit-conference.jpg",
    technologies: ["Project Management", "Stakeholder Engagement", "Fundraising", "Strategic Planning"],
    features: [
      "Prepared YCA roadmap and provisional program",
      "Organized steering committee and local organizing committee meetings",
      "Coordinated stakeholders and partners meetings for fundraising",
      "Prepared YCA briefs and documentation for approval",
      "Managed progress reporting throughout the summit preparation",
      "Compiled comprehensive post-summit report",
    ],
    icon: Users,
  },
  {
    title: "Business Intelligence Project",
    status: "Ongoing",
    category: "Analysis" as ProjectCategory,
    period: "December 2024 - June 2025",
    company: "Moringa School",
    description:
      "Comprehensive business intelligence solution focusing on data-driven decision making and operational efficiency.",
    image: "/business-intelligence-dashboard.png",
    technologies: ["Power BI", "SQL", "Python", "Data Visualization"],
    features: [
      "Interactive dashboards for business metrics",
      "Automated reporting systems",
      "Predictive analytics for forecasting",
      "Real-time data monitoring",
    ],
    icon: BarChart3,
  },
  {
    title: "Customer Feedback Analysis",
    status: "Completed",
    category: "Analysis" as ProjectCategory,
    company: "Client Project",
    description: "Advanced sentiment analysis system to improve customer satisfaction through data-driven insights.",
    image: "/sentiment-analysis-dashboard.jpg",
    technologies: ["Python", "NLP", "Machine Learning", "Tableau"],
    features: [
      "Improved sentiment analysis accuracy by analyzing feedback polarity",
      "Interactive dashboards displaying trends in feedback and NPS",
      "Enhanced data cleaning and transformation processes",
      "Key recommendations for improving customer satisfaction",
    ],
    icon: TrendingUp,
  },
  {
    title: "HR Analytics Dashboard",
    status: "Completed",
    category: "Analysis" as ProjectCategory,
    period: "March 2024 - April 2024",
    company: "Corporate Client",
    description:
      "Comprehensive HR analytics solution providing insights into workforce trends and performance metrics.",
    image: "/images/hr-training.jpg",
    technologies: ["Power BI", "Excel", "Statistical Analysis", "Data Modeling"],
    features: [
      "Employee performance tracking and analysis",
      "Workforce trend identification and reporting",
      "Predictive modeling for HR planning",
      "Interactive visualizations for stakeholder presentations",
    ],
    icon: Users,
  },
  {
    title: "Corporate Training - Data Analytics",
    status: "Completed",
    category: "Training" as ProjectCategory,
    period: "November 2023",
    company: "Ministry of Health Somalia & Statistics Sweden",
    description:
      "Customized data analytics training program for 25 health ministry staff, significantly improving data literacy.",
    image: "/data-analytics-training-workshop.jpg",
    technologies: ["Power BI", "Excel", "Statistical Methods", "Training Delivery"],
    features: [
      "Designed curriculum for health data analytics",
      "Improved data literacy among 80% of participants",
      "Reduced report generation time by 40%",
      "Developed 5 data-driven health policy recommendations",
    ],
    icon: GraduationCap,
  },
  {
    title: "Dania (Coriander) Cultivation",
    status: "Ongoing",
    category: "Farming" as ProjectCategory,
    period: "July 2025 - Present",
    company: "Agricultural Enterprise",
    description:
      "Commercial production of dania (coriander) with focus on quality leafy greens for local markets using sustainable farming practices.",
    image: "/images/dania-farming.jpg",
    technologies: ["Organic Farming", "Mulching", "Drip Irrigation", "Market Gardening"],
    features: [
      "Systematic row planting with organic mulch application",
      "Water-efficient irrigation for consistent moisture",
      "Regular harvesting for fresh market supply",
      "Organic pest management practices",
      "Direct market linkages with restaurants and retailers",
      "Short crop cycle for quick returns",
    ],
    icon: Sprout,
  },
  {
    title: "Thorn Melon (Kiwano) Cultivation",
    status: "Ongoing",
    category: "Farming" as ProjectCategory,
    period: "July 2025 - Present",
    company: "Agricultural Enterprise",
    description:
      "Specialized cultivation of thorn melon (kiwano), a high-value exotic fruit with growing market demand in urban centers.",
    image: "/images/thorn-melon-field.webp",
    technologies: ["Specialty Crop Management", "Organic Farming", "Value Addition", "Export Market Access"],
    features: [
      "Cultivation of exotic high-value crop for premium markets",
      "Organic farming methods for quality produce",
      "Proper spacing and vine management techniques",
      "Harvest timing optimization for peak ripeness",
      "Market research for pricing and distribution",
      "Exploring export opportunities for international markets",
    ],
    icon: Sprout,
  },
  {
    title: "Carrot Production Project",
    status: "Ongoing",
    category: "Farming" as ProjectCategory,
    period: "July 2025 - Present",
    company: "Agricultural Enterprise",
    description:
      "Commercial carrot farming with focus on quality production, proper land preparation, and efficient irrigation systems.",
    image: "/images/carrots-harvest.jpg",
    technologies: ["Precision Agriculture", "Drip Irrigation", "Soil Management", "Post-Harvest Handling"],
    features: [
      "Systematic land preparation with irrigation infrastructure",
      "Optimal seed selection for local climate conditions",
      "Drip irrigation system for water conservation",
      "Soil testing and nutrient management",
      "Proper spacing for uniform root development",
      "Post-harvest handling for extended shelf life",
    ],
    icon: Sprout,
  },
  {
    title: "Cucumber Farming Project",
    status: "Ongoing",
    category: "Farming" as ProjectCategory,
    period: "July 2025 - Present",
    company: "Agricultural Enterprise",
    description:
      "Large-scale cucumber production using modern farming techniques with trellising systems for optimal yield and quality.",
    image: "/images/cucumber-field.jpg",
    technologies: ["Trellising Systems", "Drip Irrigation", "Integrated Pest Management", "Market Linkages"],
    features: [
      "Implemented vertical farming with support structures",
      "Optimized irrigation for water efficiency",
      "Regular monitoring and pest control protocols",
      "Direct market linkages for fresh produce",
      "Sustainable farming practices for soil health",
      "Quality control for premium market positioning",
    ],
    icon: Sprout,
  },
  {
    title: "Cassava Farming Initiative",
    status: "Ongoing",
    category: "Farming" as ProjectCategory,
    period: "July 2025 - Present",
    company: "Agricultural Enterprise",
    description:
      "Cassava cultivation as a staple crop with focus on improved varieties for both food security and commercial value.",
    image: "/images/farm-preparation.jpg",
    technologies: ["Improved Varieties", "Intercropping", "Value Chain Development", "Food Security"],
    features: [
      "Cultivation of improved cassava varieties",
      "Intercropping strategies for land optimization",
      "Focus on both subsistence and commercial production",
      "Exploring value addition opportunities (flour, chips)",
      "Contribution to local food security",
      "Long-term crop for sustainable income",
    ],
    icon: Sprout,
  },
  {
    title: "Maize Production",
    status: "Completed",
    category: "Farming" as ProjectCategory,
    period: "March 2025 - July 2025",
    company: "Agricultural Enterprise",
    description:
      "Successfully completed maize farming season with focus on food security and market surplus for commercial sale.",
    image: "/images/maize-farming.jpg",
    technologies: ["Drip Irrigation", "Crop Rotation", "Market Analysis", "Storage Management"],
    features: [
      "Successful harvest contributing to food security",
      "Drip irrigation system for water efficiency",
      "Timely weeding and pest management",
      "Optimal harvest timing for grain quality",
      "Post-harvest storage and market sale",
      "Lessons learned for future crop planning",
    ],
    icon: Sprout,
  },
  {
    title: "French Beans Production",
    status: "Completed",
    category: "Farming" as ProjectCategory,
    period: "September 2024 - April 2025",
    company: "Agricultural Enterprise",
    description:
      "Completed french beans farming project targeting export market with focus on quality standards and timely delivery.",
    image: "/images/french-beans-field.jpg",
    technologies: ["Export Standards", "Quality Control", "Contract Farming", "Cold Chain Management"],
    features: [
      "Production meeting export quality standards",
      "Proper spacing and staking for optimal growth",
      "Regular harvesting for tender pods",
      "Quality sorting and grading",
      "Market linkages with exporters",
      "Experience gained in high-value horticulture",
    ],
    icon: Sprout,
  },
]

const categories: ProjectCategory[] = ["All", "Training", "Analysis", "Event Planning", "Farming"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-muted/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-3xl leading-relaxed">
            A showcase of data science projects, training initiatives, event planning, and farming projects that
            demonstrate practical applications of analytics in solving real-world challenges.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge
                    variant={project.status === "Ongoing" ? "default" : "default"}
                    className={project.status === "Completed" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="font-medium">{project.company}</span>
                      {project.period && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{project.period}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Key Features & Achievements</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" className="px-8" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              <span>Discuss Your Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
