"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Target, LineChart, Users, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Keyword Research",
      description: "In-depth analysis to target the most valuable keywords for your business",
      icon: Target,
    },
    {
      title: "Ad Copy Optimisation",
      description: "Data-driven copywriting that converts clicks into customers",
      icon: BarChart,
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
  ]

  const methodItems = [
    "Google Ads account optimisation",
    "Frequent monitoring and refining of strategies",
    "Regular performance reviews",
  ]

  const promiseItems = ["Comprehensive campaign management", "Maximised ROAS"]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Google Ads is an essential tool for any business looking to grow and reach new customers online. With our
              Google Ads service, we can help you take advantage of the vast audience that Google provides, and create
              targeted and effective advertising campaigns that bring you results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Comprehensive Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Our Google Ads optimisation services are designed to maximise your return on ad spend through a
              data-driven approach.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
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
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Our Promise</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {promiseItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <LineChart className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Our Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {methodItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
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

