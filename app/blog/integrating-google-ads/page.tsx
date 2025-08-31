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
                  src="/placeholder.svg"
                  alt="Integrating Google Ads with other digital marketing channels"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  Integrating Google Ads with Other Digital Marketing Channels for a Cohesive Strategy
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    In today's digital age, businesses must consider the big picture when it comes to their marketing
                    efforts. While Google Ads is an effective tool for driving traffic and conversions, it's just one
                    piece of the puzzle. To create a cohesive marketing strategy, businesses must integrate Google Ads
                    with other digital marketing channels. In this blog post, we'll explore the benefits of integrating
                    Google Ads with other digital marketing channels and provide tips on how to create a cohesive
                    marketing strategy.
                  </p>

                  <h2>Improve Audience Targeting</h2>

                  <p>
                    Integrating Google Ads with other digital marketing channels, such as social media advertising,
                    email marketing, and content marketing, allows you to improve audience targeting. By leveraging data
                    from other channels, you can create more accurate audience segments and target potential customers
                    with more relevant messaging.
                  </p>

                  <h2>Increase Brand Visibility</h2>

                  <p>
                    Using multiple digital marketing channels can help increase your brand's visibility. By leveraging
                    different channels, you can reach potential customers at different stages of the buyer journey and
                    increase brand recognition.
                  </p>

                  <h2>Create Consistent Messaging</h2>

                  <p>
                    Integrating Google Ads with other digital marketing channels can help create a consistent messaging
                    and brand voice. By using consistent messaging across all channels, you can create a cohesive brand
                    experience for potential customers.
                  </p>

                  <h2>Leverage Cross-Channel Remarketing</h2>

                  <p>
                    Cross-channel remarketing is a powerful way to target potential customers who have interacted with
                    your brand on one channel but haven't converted. By integrating Google Ads with other digital
                    marketing channels, you can create a more effective remarketing strategy and increase conversions.
                  </p>

                  <h2>Measure Cross-Channel Performance</h2>

                  <p>
                    Integrating Google Ads with other digital marketing channels allows you to measure cross-channel
                    performance and understand how each channel is contributing to your overall marketing goals. By
                    leveraging data from multiple channels, you can identify what's working and what's not, and make
                    data-driven decisions to optimise your marketing strategy.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Integrating Google Ads with other digital marketing channels is essential for creating a cohesive
                    marketing strategy. By improving audience targeting, increasing brand visibility, creating
                    consistent messaging, leveraging cross-channel remarketing, and measuring cross-channel performance,
                    businesses can create more effective and efficient marketing campaigns. Don't be afraid to
                    experiment with different channels and strategies to find what works best for your business. By
                    taking a holistic approach to your marketing efforts, you can drive more traffic, increase
                    conversions, and grow your business.
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

