"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, Heart, Banknote } from "lucide-react"
import Link from "next/link"

export default function CharityPage() {
  const services = [
    {
      title: "Awareness",
      description:
        "We can help your organisation increase its visibility and reach a wider audience through targeted digital marketing campaigns, through Google Ads.",
      icon: Megaphone,
    },
    {
      title: "Engagement",
      description:
        "We can help you build meaningful connections with your supporters through engaging content and interactive campaigns, encouraging them to take action and support your cause.",
      icon: Heart,
    },
    {
      title: "Fundraising",
      description:
        "We can help you develop and execute successful fundraising campaigns, leveraging the power of digital channels to drive donations and support.",
      icon: Banknote,
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
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Making a Difference Together</h1>
            <p className="text-lg text-muted-foreground">
              At EVN Media, we believe in using our skills and expertise to make a positive impact on the world.
              That&apos;s why we&apos;re passionate about supporting charities and non-profits that are working to
              create a better future for all of us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="bg-background p-6 rounded-lg border space-y-6">
              <p className="text-lg">
                Through our pro bono digital marketing services, we help these organisations amplify their message,
                reach a wider audience, and inspire action. We believe that when we help these organisations achieve
                their goals, we&apos;re not only contributing to a more just and equitable society, but also fulfilling
                our own mission to make a meaningful difference in the world.
              </p>
              <p className="text-lg">
                Whether it&apos;s supporting environmental causes, fighting for social justice, or helping those in
                need, we&apos;re committed to using our talents to support organisations that are making a positive
                impact on our world. We invite you to join us in this mission, and to learn more about how we can help
                your charity or non-profit organisation achieve its goals through digital marketing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">How EVN can help</h2>
            <p className="text-lg text-muted-foreground">There are many ways we can help, but only if you reach out.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Make an Impact?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to learn more about how we can help your organisation achieve its goals through digital
              marketing.
            </p>
            <div className="space-y-4">
              <p className="font-medium">Get in touch:</p>
              <p className="text-muted-foreground">Email: management@uniplates.co.uk</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

