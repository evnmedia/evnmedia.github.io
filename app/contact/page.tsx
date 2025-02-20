"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to discuss how we can help optimise your Google Ads campaigns and achieve your
              advertising goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <Mail className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <Link href="mailto:management@uniplates.co.uk" className="hover:text-primary">
                      management@uniplates.co.uk
                    </Link>
                  </p>
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
                  <MapPin className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">London, United Kingdom</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
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
              Get in touch with our specialists to see how we can manage your Google Ads campaigns and achieve your
              advertising goals.
            </p>
            <div className="space-y-4">
              <p className="font-medium">Our guarantee:</p>
              <p className="text-muted-foreground">
                We guarantee that in one month&apos;s time, your adverts will be generating more profit for your
                business than they cost, or your money back.
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium mb-2">Email us at:</p>
              <Link href="mailto:management@uniplates.co.uk" className="text-primary hover:underline">
                management@uniplates.co.uk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

