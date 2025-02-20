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
                  src="/placeholder.svg?height=400&width=800"
                  alt="Lower your cost-per-click in Google Ads"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  How to Lower Your Cost-Per-Click in Google Ads
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    Google Ads can be an effective way to drive traffic and increase conversions for your business, but
                    it can also become expensive if you're not managing your campaigns effectively. One of the biggest
                    challenges in Google Ads is managing your cost-per-click (CPC), which is the amount you pay each
                    time someone clicks on your ad. In this blog post, we'll discuss some tips for lowering your
                    cost-per-click in Google Ads.
                  </p>

                  <h2>Focus on Relevance</h2>

                  <p>
                    One of the most important factors in determining your CPC is the relevance of your ad. If your ad is
                    not relevant to the keywords you're targeting, you'll end up paying more per click. To lower your
                    CPC, focus on creating highly relevant ads that are closely tied to the keywords you're targeting.
                    This can improve your Quality Score, which is a key factor in determining your CPC.
                  </p>

                  <h2>Improve Your Quality Score</h2>

                  <p>
                    Improving your Quality Score is critical to lowering your CPC. Quality Score is a metric that Google
                    uses to determine the relevance and quality of your ads, keywords, and landing pages. The higher
                    your Quality Score, the lower your CPC will be. To improve your Quality Score, focus on creating
                    high-quality ads, using relevant keywords, and creating landing pages that are closely tied to your
                    ads.
                  </p>

                  <h2>Use Negative Keywords</h2>

                  <p>
                    Negative keywords are keywords that you don't want to trigger your ads. By using negative keywords,
                    you can prevent your ads from appearing for irrelevant searches, which can help lower your CPC. To
                    identify negative keywords, review your search term report and look for keywords that are triggering
                    your ads but aren't relevant to your business.
                  </p>

                  <h2>Target Specific Locations</h2>

                  <p>
                    If your business only serves a specific geographic area, it's important to target your ads to those
                    specific locations. This can help reduce your CPC and improve the relevance of your ads. By using
                    location targeting, you can ensure that your ads are only shown to users in your target area.
                  </p>

                  <h2>Test Different Ad Formats</h2>

                  <p>
                    Different ad formats can perform differently in terms of CPC. By testing different ad formats, such
                    as text ads, image ads, and video ads, you can identify the format that works best for your business
                    and helps lower your CPC.
                  </p>

                  <h2>Use Bid Adjustments</h2>

                  <p>
                    Bid adjustments allow you to increase or decrease your bids for specific targeting options, such as
                    device, time of day, and location. By using bid adjustments, you can lower your CPC for specific
                    targeting options that aren't performing well and increase your bids for targeting options that are
                    performing well.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Lowering your cost-per-click in Google Ads requires a focus on relevance, Quality Score, negative
                    keywords, specific location targeting, ad format testing, and bid adjustments. By implementing these
                    strategies, you can optimise your Google Ads campaigns, drive more traffic, and increase your ROI.
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

