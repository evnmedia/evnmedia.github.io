"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen pt-20">
      <article className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Button variant="ghost" asChild className="-ml-4">
                <Link href="/blog" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="aspect-[2/1] relative overflow-hidden rounded-lg">
                <Image
                  src="/blog-digital-marketing.png"
                  alt="A team meeting with diverse professionals around a table, discussing a project"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  The Importance of Digital Marketing
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    In today's digital age, it is more important than ever for businesses to utilise digital marketing
                    as part of their marketing strategy. Digital marketing encompasses a range of techniques and tactics
                    that are designed to help businesses reach and engage with their target audience online. In this
                    blog post, we will explore the importance of digital marketing and why it should be a key part of
                    your overall marketing strategy.
                  </p>

                  <h2>Increased Reach</h2>

                  <p>
                    One of the primary benefits of digital marketing is that it allows you to reach a wider audience
                    than traditional marketing methods. With digital marketing, you can target specific demographics,
                    interests, and behaviours to ensure that your message is seen by the right people. This is in
                    contrast to traditional marketing methods, such as print or television advertising, which rely on
                    mass media to reach a large but often less targeted audience. By reaching the right people with the
                    right message, digital marketing can help you to achieve better results and higher ROI.
                  </p>

                  <h2>Cost-Effective</h2>

                  <p>
                    Another benefit of digital marketing is that it can be more cost-effective than traditional
                    marketing methods. With digital marketing, you have the ability to set a budget for your campaigns
                    and track the results in real-time. This means that you can adjust your campaigns as needed to
                    ensure that you are getting the best results for your budget. Additionally, many digital marketing
                    channels, such as social media and email marketing, offer low or no cost options, making them
                    accessible to businesses of all sizes.
                  </p>

                  <h2>Better Targeting</h2>

                  <p>
                    Digital marketing also offers better targeting than traditional marketing methods. By using data and
                    analytics, you can gain insights into your target audience's interests, behaviours, and preferences.
                    This information can be used to create highly targeted and personalised campaigns that are more
                    likely to resonate with your audience. Additionally, digital marketing offers the ability to
                    retarget people who have interacted with your brand previously, helping to increase the chances of
                    conversion.
                  </p>

                  <h2>Measurable Results</h2>

                  <p>
                    Digital marketing provides measurable results, allowing you to track and analyse the performance of
                    your campaigns. With data and analytics, you can gain insights into your audience's behaviour, as
                    well as track the success of your campaigns in real-time. This data can be used to optimise your
                    campaigns and make informed decisions about your marketing strategy. In contrast, traditional
                    marketing methods often rely on estimates and assumptions, making it more difficult to measure the
                    success of a campaign.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    By increasing reach, providing better targeting, and offering measurable results, digital marketing
                    can help businesses to achieve their marketing objectives more effectively and efficiently.
                    Additionally, the cost-effectiveness of digital marketing makes it accessible to businesses of all
                    sizes. With the right strategy and tactics, digital marketing can help you to connect with your
                    target audience, build brand awareness, and drive more traffic and conversions. If you're not
                    already incorporating digital marketing into your marketing strategy, now is the time to start.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  )
}

