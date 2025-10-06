"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254712197226",
    href: "tel:+254712197226",
  },
  {
    icon: Mail,
    label: "Email",
    value: "janesamwel94@gmail.com",
    href: "mailto:janesamwel94@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Juja, Nairobi, Kenya",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "samwel-jane",
    href: "https://www.linkedin.com/in/samwel-jane",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your preferred form handling service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-3xl leading-relaxed">
            Ready to collaborate on data science projects, discuss training opportunities, or explore how data-driven
            insights can transform your organization? Let's start a conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, whether it's data science consulting, technical
                training, or collaborative projects that create positive impact.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-xs uppercase tracking-wide text-muted-foreground mb-1">
                          {contact.label}
                        </p>
                        {contact.href !== "#" ? (
                          <a
                            href={contact.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Available for:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Data Science Consulting & Projects</li>
                      <li>• Corporate Training & Workshops</li>
                      <li>• Technical Mentoring & Coaching</li>
                      <li>• International Speaking Engagements</li>
                      <li>• Collaborative Research Initiatives</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase tracking-wide">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
