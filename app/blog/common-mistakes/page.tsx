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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4TQ3T62ROOV5ac6YYd5vrXJsVpayw.png"
                  alt="A bird's-eye view of a workspace with multiple laptops, devices, and office supplies on a wooden table"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  Common Mistakes to Avoid in Google Ads Campaign Management
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    Google Ads can be a highly effective tool for driving traffic, leads, and sales to your business.
                    However, there are several common mistakes that advertisers make when managing their Google Ads
                    campaigns that can lead to wasted budget, poor performance, and missed opportunities. In this blog
                    post, we'll discuss some of the most common mistakes to avoid in Google Ads campaign management.
                  </p>

                  <h2>Failing to Define Clear Goals and KPIs</h2>

                  <p>
                    One of the most common mistakes that advertisers make is failing to define clear goals and KPIs for
                    their campaigns. Without clear goals, it can be difficult to know what success looks like, and it
                    can be even harder to measure performance and make data-driven decisions. Be sure to define clear
                    goals and KPIs for each of your campaigns, such as click-through rate, conversion rate, cost per
                    acquisition, and return on ad spend.
                  </p>

                  <h2>Ignoring Keyword Research and Match Types</h2>

                  <p>
                    Another common mistake is ignoring keyword research and match types. Failing to conduct thorough
                    keyword research and to use the appropriate match types can lead to wasted budget, poor quality
                    score, and low click-through rates. Be sure to conduct keyword research, use a variety of match
                    types, and regularly review and refine your keyword lists.
                  </p>

                  <h2>Neglecting Ad Copy and Creative</h2>

                  <p>
                    Ad copy and creative can make or break your Google Ads campaigns. Neglecting these elements can lead
                    to low click-through rates, poor quality score, and missed opportunities. Be sure to invest time and
                    resources into creating compelling ad copy and eye-catching creative that resonates with your target
                    audience.
                  </p>

                  <h2>Failing to Optimise for Conversions</h2>

                  <p>
                    One of the ultimate goals of most Google Ads campaigns is to drive conversions, such as leads or
                    sales. Failing to optimise for conversions can lead to poor performance and missed opportunities. Be
                    sure to use conversion tracking, optimise your campaigns for conversions, and regularly review and
                    refine your landing pages and conversion funnels.
                  </p>

                  <h2>Overlooking Data and Analytics</h2>

                  <p>
                    Finally, overlooking data and analytics is a common mistake that can lead to missed opportunities
                    and poor performance. Be sure to regularly review and analyse your campaign data, such as
                    click-through rates, conversion rates, and cost per acquisition. Use this data to make data-driven
                    decisions and to continually improve the performance of your campaigns.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    By avoiding these common mistakes and implementing best practices for Google Ads campaign
                    management, you can improve the performance of your campaigns and maximise your ROI. Be sure to
                    define clear goals and KPIs, conduct thorough keyword research, invest in compelling ad copy and
                    creative, optimise for conversions, and regularly review and analyse your campaign data. With these
                    tips in mind, you can take your Google Ads campaigns to the next level and achieve your business
                    objectives.
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

