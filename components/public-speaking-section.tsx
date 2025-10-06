"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic2, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SpeakingEngagement {
  title: string
  event: string
  location: string
  date: string
  description: string
  topics: string[]
  images: string[]
}

const speakingEngagements: SpeakingEngagement[] = [
  {
    title: "UN World Tourism Week 2025",
    event: "United Nations World Tourism Week",
    location: "Mombasa, Kenya",
    date: "2025",
    description:
      "Participated as a panelist discussing the intersection of data science and sustainable tourism development, highlighting how analytics can drive tourism growth while preserving cultural heritage.",
    topics: ["Tourism Analytics", "Sustainable Development", "Data-Driven Tourism"],
    images: ["/images/un-tourism-mombasa.jpg"],
  },
  {
    title: "Youth Connekt Africa Summit 2024",
    event: "Youth Connekt Africa Summit",
    location: "Kigali, Rwanda",
    date: "2024",
    description:
      "Served as Secretary for the Youth Connekt Africa Summit Working Team, facilitating discussions on youth empowerment, innovation, and entrepreneurship across Africa.",
    topics: ["Youth Empowerment", "Innovation", "Pan-African Collaboration"],
    images: ["/images/youth-connekt-rwanda.jpg"],
  },
  {
    title: "UN World Tourism Week 2024",
    event: "United Nations World Tourism Week",
    location: "Kisumu, Kenya",
    date: "2024",
    description:
      "Delivered insights on leveraging data science for tourism sector growth in the Lake Victoria region, emphasizing the role of analytics in destination marketing and visitor experience enhancement.",
    topics: ["Tourism Data Analytics", "Regional Development", "Digital Marketing"],
    images: ["/images/panel-tourism-kisumu.jpg", "/images/tourism-panel.jpg"],
  },
  {
    title: "Decoding Tech Careers in Data Science",
    event: "X Space (Twitter Space)",
    location: "Virtual Event",
    date: "March 12, 2024",
    description:
      "Hosted an engaging X Space discussion on navigating data science careers, sharing insights on skill development, industry trends, and career pathways for aspiring data professionals.",
    topics: ["Career Development", "Data Science Skills", "Tech Industry Insights"],
    images: ["/images/decoding-tech-careers.jpg"],
  },
  {
    title: "Leveraging Data Science in HR",
    event: "HR Analytics Workshop",
    location: "Nairobi, Kenya",
    date: "2024",
    description:
      "Presented on the transformative power of data science in human resources, covering predictive analytics for talent acquisition, employee retention strategies, and workforce optimization.",
    topics: ["HR Analytics", "Predictive Modeling", "Workforce Optimization"],
    images: ["/images/hr-training.jpg", "/images/facilitator-poster.jpg"],
  },
  {
    title: "Positioning MSEs with Current Trends",
    event: "Zetech University Tech Forum",
    location: "Zetech University, Kenya",
    date: "2024",
    description:
      "Delivered a keynote on how Micro and Small Enterprises (MSEs) can leverage current technology trends, including data analytics and digital transformation, to scale their businesses.",
    topics: ["MSE Development", "Digital Transformation", "Business Analytics"],
    images: ["/images/zetech-university-presentation.jpg"],
  },
  {
    title: "Council of Governors Tourism Committee",
    event: "Council of Governors Meeting",
    location: "Office of the Council of Governors, Nairobi",
    date: "2023",
    description:
      "Presented to the Governors on the Committee on Tourism, discussing data-driven strategies for tourism development and regional collaboration across Kenyan counties.",
    topics: ["Tourism Policy", "Regional Development", "Data-Driven Governance"],
    images: ["/images/council-of-governors.jpg"],
  },
  {
    title: "Youth in Sustainable Development Goals",
    event: "Global Peace Chain Summit 2021",
    location: "Istanbul, Turkey", // Updated location to specify Istanbul
    date: "2021",
    description:
      "Participated in a panel discussion on the critical role of youth in achieving the United Nations Sustainable Development Goals, emphasizing innovation, technology, and youth-led initiatives for global peace and development.", // Updated to reflect panel discussion format
    topics: ["SDGs", "Youth Leadership", "Global Peace", "Innovation"],
    images: ["/images/youth-sdgs-turkey-panel.jpg"], // Updated to use new panel discussion image
  },
]

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group">
      <div className="aspect-video overflow-hidden rounded-lg bg-muted">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt="Speaking engagement"
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-background/60"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function PublicSpeakingSection() {
  return (
    <section id="speaking" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">PUBLIC SPEAKING</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Speaking Engagements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Sharing insights on data science, tourism, youth empowerment, and sustainable development across
            international and local platforms.
          </p>
        </div>

        <div className="space-y-8">
          {speakingEngagements.map((engagement, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <ImageCarousel images={engagement.images} />

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{engagement.title}</h3>
                    <p className="text-lg text-primary font-semibold mb-4">{engagement.event}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{engagement.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{engagement.date}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{engagement.description}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mic2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Topics Covered:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {engagement.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
