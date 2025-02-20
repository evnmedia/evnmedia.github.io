"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Fingerprint,
  Users,
  Lightbulb,
  Award,
  Shield,
  Target,
  MessageSquare,
  HandshakeIcon,
  BarChart,
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      description:
        "We believe that honesty, transparency, and ethical behaviour are essential to building strong relationships with our clients and partners.",
      icon: Shield,
    },
    {
      title: "Professionalism",
      description:
        "We strive to maintain the highest standards of professionalism in all of our interactions, from the way we communicate with clients to the quality of our work.",
      icon: Fingerprint,
    },
    {
      title: "Collaboration",
      description:
        "We believe that the best results come from working closely with our clients and partners, fostering an environment of collaboration and mutual respect.",
      icon: Users,
    },
    {
      title: "Innovation",
      description:
        "We're committed to staying on the cutting edge of our industry, and we're always looking for new and innovative ways to help our clients succeed.",
      icon: Lightbulb,
    },
    {
      title: "Excellence",
      description:
        "We're passionate about delivering the highest quality work and achieving excellence in everything we do, from the smallest tasks to the biggest projects.",
      icon: Award,
    },
    {
      title: "Accountability",
      description:
        "We take responsibility for our actions and hold ourselves accountable for delivering on our promises and commitments to our clients and partners.",
      icon: CheckCircle,
    },
  ]

  const differentiators = [
    {
      title: "Tailored approach",
      description:
        "We understand that every client is unique, which is why we take a tailored approach to our work, developing customised strategies that fit each client's specific needs and goals.",
      icon: Target,
    },
    {
      title: "Communication",
      description:
        "We believe that open and honest communication is key to building strong relationships with our clients. That's why we prioritise communication and make sure we're always available to answer questions, provide updates, and offer guidance.",
      icon: MessageSquare,
    },
    {
      title: "Collaboration",
      description:
        "We see ourselves as partners with our clients, working closely with them to achieve their goals and deliver the best possible results.",
      icon: HandshakeIcon,
    },
    {
      title: "Results-driven",
      description:
        "Ultimately, we're focused on delivering results for our clients, and we measure our success by their success. We're passionate about helping our clients achieve their goals, and we'll do whatever it takes to make that happen.",
      icon: BarChart,
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
            <h1 className="text-4xl font-bold tracking-tighter mb-6">About EVN Media</h1>
            <p className="text-lg text-muted-foreground">
              At EVN Media, we hold ourselves to the highest standards of integrity, professionalism, and excellence.
              Our core values guide everything we do, from our interactions with clients and partners to the way we
              approach our work on a day-to-day basis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our work and shape our relationships with clients and partners.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">
              At EVN Media, we believe that what sets us apart is our unwavering commitment to excellence in everything
              we do.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <diff.icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle>{diff.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

