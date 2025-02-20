"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, BarChart, Target, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudyPage() {
  const achievements = [
    {
      title: "Return on Ad Spend",
      value: "8x",
      icon: BarChart,
    },
    {
      title: "Reduced CPC",
      value: "✓",
      icon: Target,
    },
    {
      title: "Maximised Conversions",
      value: "✓",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Button variant="ghost" asChild className="-ml-4 mb-8">
              <Link href="/" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter mb-6">Success Story: EducAd</h1>
              <p className="text-lg text-muted-foreground">
                How we helped EducAd Consulting achieve over 8x return on ad spend through optimised Google Ads
                campaigns
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Company Overview */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter">About EducAd Consulting</h2>
                <p className="text-muted-foreground">
                  EducAd Consulting is a London-based company that provides bespoke and independent educational advice
                  for private school applications and university admission placements. With experienced advisors and
                  consultants, they offer comprehensive knowledge of the UK university and school placement systems.
                </p>
                <p className="text-muted-foreground">
                  EducAd Consulting prioritises the child's potential and works closely with families at every stage of
                  their academic journey. They provide unbiased advice on private school and university placements in
                  London and throughout the UK.
                </p>
              </div>

              {/* Achievements Section */}
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <achievement.icon className="h-10 w-10 text-primary mb-4" />
                        <CardTitle>{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-3xl font-bold text-primary">{achievement.value}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter">Our Approach</h2>
                <p className="text-muted-foreground">
                  Our team was tasked with reducing CPC and maximising conversion rates in EducAd Consulting's Google
                  Ads campaigns. To achieve this, we implemented a comprehensive strategy that included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Optimising keywords for better targeting</li>
                  <li>Improving the Quality Score of individual ads</li>
                  <li>Implementing negative keywords to reduce irrelevant clicks</li>
                  <li>Adjusting ad scheduling for optimal performance</li>
                  <li>Utilising ad extensions to improve visibility</li>
                </ul>
                <p className="text-muted-foreground">
                  Through our efforts, we were able to maximise EducAd's conversion rates, while reducing CPC, achieving
                  over an 8x return on ad spend.
                </p>
              </div>

              {/* CTA Section */}
              <div className="bg-muted p-8 rounded-lg text-center space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter">Ready to Achieve Similar Results?</h2>
                <p className="text-muted-foreground">
                  Let us help you optimise your Google Ads campaigns and maximise your return on ad spend.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

