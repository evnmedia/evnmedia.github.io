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
                  alt="Benefits of Google Ads for ecommerce"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  The Benefits of Using Google Ads for Ecommerce Stores
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    Google Ads is a powerful advertising platform that offers numerous benefits for ecommerce stores
                    looking to drive more traffic, increase sales and revenue, and improve their overall online
                    presence. In this blog post, we'll discuss the benefits of using Google Ads for ecommerce stores.
                  </p>

                  <h2>Increased Visibility</h2>

                  <p>
                    One of the most significant benefits of using Google Ads for ecommerce stores is increased
                    visibility. Google Ads can help you reach a wider audience by placing your products and services at
                    the top of search engine results pages. By leveraging the power of Google's search network, your
                    ecommerce store can be seen by potential customers who are actively searching for products or
                    services similar to what you offer.
                  </p>

                  <h2>Targeted Advertising</h2>

                  <p>
                    Google Ads offers a variety of targeting options that allow you to reach your ideal audience. You
                    can target users based on their search terms, location, device, interests, and more. By targeting
                    the right people at the right time, you can increase the likelihood that your ads will be seen by
                    users who are most likely to be interested in your products or services.
                  </p>

                  <h2>Cost-Effective Advertising</h2>

                  <p>
                    Google Ads can be a cost-effective way to advertise your ecommerce store. You only pay for clicks or
                    impressions, which means you're only paying for the traffic you receive. By setting a budget and bid
                    strategy, you can control your advertising costs and ensure that you're getting the most value for
                    your advertising dollars.
                  </p>

                  <h2>Increased Website Traffic and Conversions</h2>

                  <p>
                    By increasing your visibility and targeting the right audience, Google Ads can help you drive more
                    traffic to your ecommerce store. This, in turn, can lead to increased conversions and sales. By
                    optimising your ads for relevant keywords and creating compelling ad copy and landing pages, you can
                    increase the likelihood that users will click on your ads and convert.
                  </p>

                  <h2>Detailed Performance Metrics</h2>

                  <p>
                    Google Ads provides detailed performance metrics that allow you to track the success of your
                    advertising campaigns. You can monitor important metrics like click-through rates, conversion rates,
                    and return on investment (ROI). By analysing these metrics, you can identify areas for improvement
                    and optimise your campaigns for better performance.
                  </p>

                  <h2>Retargeting Opportunities</h2>

                  <p>
                    Retargeting is a powerful technique that allows you to target users who have previously visited your
                    website. By using Google Ads' remarketing feature, you can target these users with highly relevant
                    ads, increasing the likelihood that they'll return to your site and make a purchase.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Google Ads offers numerous benefits for ecommerce stores looking to increase their online
                    visibility, drive more traffic and conversions, and improve their overall advertising performance.
                    By leveraging the power of targeted advertising, cost-effective advertising, detailed performance
                    metrics, and retargeting opportunities, you can take your ecommerce store to the next level and
                    achieve your business objectives.
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

