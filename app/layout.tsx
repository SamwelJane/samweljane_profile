import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Samwel Jane - Data Scientist & Technical Mentor",
  description:
    "Professional portfolio of Samwel Jane, a passionate Data Scientist skilled in using data-driven insights for business growth and societal impact.",
  generator: "v0.app",
  keywords: ["Data Science", "Machine Learning", "Business Intelligence", "Technical Mentor", "Kenya"],
  authors: [{ name: "Samwel Jane" }],
  openGraph: {
    title: "Samwel Jane - Data Scientist & Technical Mentor",
    description:
      "Professional portfolio showcasing expertise in data science, machine learning, and international leadership.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
