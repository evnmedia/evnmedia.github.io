"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChartIcon as ChartBar, LineChart, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-background" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Maximise Your ROAS with Data-Driven Google Ads
            </h1>
            <p className="text-xl text-muted-foreground">
              We help businesses optimise their Google Ads campaigns for maximum return on ad spend.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/services">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Data-Driven Google Ads Optimisation</h2>
              <p className="text-lg text-muted-foreground">
                We offer a comprehensive, data-driven strategy that includes keyword research, ad copy optimisation,
                targeting, and conversion tracking to ensure maximum ROAS for your Google Ads campaigns.
              </p>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold mb-2">Our Guarantee</h3>
                <p>
                  We guarantee that in one month&apos;s time, your adverts will be generating more profit for your
                  business than they cost, or your money back.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive Google Ads optimisation services designed to maximise your return on ad spend.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Keyword Research",
                description: "In-depth analysis to target the most valuable keywords for your business",
                icon: Target,
              },
              {
                title: "Ad Copy Optimisation",
                description: "Data-driven copywriting that converts clicks into customers",
                icon: ChartBar,
              },
              {
                title: "Audience Targeting",
                description: "Precise targeting to reach your ideal customers",
                icon: Users,
              },
              {
                title: "Performance Tracking",
                description: "Comprehensive analytics and reporting for continuous improvement",
                icon: LineChart,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <service.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link href="/google-ads-guide">Learn More About Google Ads</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-video">
              <Image src="/placeholder.svg" alt="Educad Case Study" fill className="object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Case Study: Educad</h2>
              <p className="text-lg text-muted-foreground">
                Our team are proud to work with Educad, an educational consulting firm. We have been working closely
                with them to build a leads-focused advertising strategy. Our optimisation of their Google Ads has
                generated them more than an 8x return on ad spend, which has allowed them to focus their efforts on
                client relations and reinvestment to grow their company.
              </p>
              <Button variant="outline" asChild>
                <Link href="/case-studies/educad">Read More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charity Section */}
      <section id="charity" className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Making a Difference</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                At EVN Media, we believe in using our skills and expertise to make a positive impact on the world.
                Through our pro bono digital marketing services, we help charities and non-profits amplify their message
                and reach a wider audience.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/charity">Partner With Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Book a consultation with one of our specialists to see how we can manage your Google Ads campaigns and
              achieve your advertising goals.
            </p>
            <div className="space-y-4">
              <p className="font-medium">Contact us at:</p>
              <p className="text-muted-foreground">Email: management@uniplates.co.uk</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

