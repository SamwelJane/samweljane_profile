import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Twitter, Linkedin, Calendar, MessageCircle, Heart, Share2 } from "lucide-react"

const socialActivities = [
  {
    platform: "LinkedIn",
    icon: Linkedin,
    handle: "@samwel-jane",
    url: "https://www.linkedin.com/in/samwel-jane",
    recentPosts: [
      {
        content:
          "Excited to share that I've been certified as a trainer for the ILO's Start and Improve Your Business programme! Looking forward to empowering more entrepreneurs across Kenya with data-driven business strategies. 🚀",
        date: "2 days ago",
        engagement: { likes: 45, comments: 12, shares: 8 },
        type: "achievement",
      },
      {
        content:
          "Just wrapped up an incredible training session with 25 health ministry officials from Somalia. Seeing 90% of participants demonstrate proficiency in Power BI and Excel was truly rewarding. Data literacy is transforming healthcare decision-making! 📊",
        date: "1 week ago",
        engagement: { likes: 78, comments: 23, shares: 15 },
        type: "professional",
      },
      {
        content:
          "Our Business Management System for MSMEs is making real impact! The Smart Business Health Score feature is helping small businesses in Kenya make data-driven decisions. Innovation meets social impact. 💡",
        date: "2 weeks ago",
        engagement: { likes: 92, comments: 18, shares: 24 },
        type: "project",
      },
    ],
  },
  {
    platform: "X (Twitter)",
    icon: Twitter,
    handle: "@samweljane",
    url: "https://twitter.com/samweljane",
    recentPosts: [
      {
        content:
          "Data science isn't just about algorithms - it's about creating solutions that matter. Working on ML models that help small businesses thrive in Kenya 🇰🇪 #DataScience #MachineLearning #SocialImpact",
        date: "3 days ago",
        engagement: { likes: 156, comments: 28, shares: 42 },
        type: "insight",
      },
      {
        content:
          "Proud to represent Kenya at international peace summits while building tech solutions at home. Global perspective, local impact. That's the way forward! 🌍✨ #GlobalPeace #TechForGood",
        date: "5 days ago",
        engagement: { likes: 203, comments: 35, shares: 67 },
        type: "personal",
      },
      {
        content:
          "Power BI tip: Use DAX measures for dynamic KPIs instead of calculated columns. Your dashboards will thank you! 📈 #PowerBI #DataVisualization #BusinessIntelligence",
        date: "1 week ago",
        engagement: { likes: 89, comments: 15, shares: 31 },
        type: "tip",
      },
    ],
  },
]

const getPostTypeColor = (type: string) => {
  switch (type) {
    case "achievement":
      return "bg-green-100 text-green-800"
    case "professional":
      return "bg-blue-100 text-blue-800"
    case "project":
      return "bg-purple-100 text-purple-800"
    case "insight":
      return "bg-orange-100 text-orange-800"
    case "personal":
      return "bg-pink-100 text-pink-800"
    case "tip":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function SocialActivitiesSection() {
  return (
    <section id="social-activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Recent Social Media Activities</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Stay updated with my latest insights, projects, and professional journey through my social media presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {socialActivities.map((platform, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <platform.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{platform.platform}</CardTitle>
                      <p className="text-sm text-muted-foreground">{platform.handle}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>Follow</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {platform.recentPosts.map((post, postIndex) => (
                    <div key={postIndex} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge variant="secondary" className={`text-xs ${getPostTypeColor(post.type)}`}>
                          {post.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed mb-3 text-balance">{post.content}</p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{post.engagement.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          <span>{post.engagement.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="h-3 w-3" />
                          <span>{post.engagement.shares}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <span>View All Posts</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Connect with me on social media for real-time updates and insights
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/samwel-jane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://twitter.com/samweljane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                <span>X (Twitter)</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
