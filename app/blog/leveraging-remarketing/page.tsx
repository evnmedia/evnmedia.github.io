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
                  src="/blog-remarketing.png"
                  alt="Leveraging Google Ads remarketing"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  Leveraging Google Ads Remarketing to Increase Conversions
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    Remarketing is a powerful tool for increasing conversions in Google Ads. Remarketing allows you to
                    show ads to users who have already interacted with your website or app, making it a valuable
                    strategy for increasing conversions and sales. In this blog post, we'll discuss some tips for
                    leveraging Google Ads remarketing to increase conversions.
                  </p>

                  <h2>Create Custom Audiences</h2>

                  <p>
                    To effectively use remarketing, it's important to create custom audiences based on your website
                    visitors. You can create custom audiences based on a variety of factors, such as page visits, time
                    spent on site, and specific actions taken on your website. By creating custom audiences, you can
                    target your ads to users who are most likely to convert.
                  </p>

                  <h2>Use Dynamic Remarketing</h2>

                  <p>
                    Dynamic remarketing allows you to show ads to users who have interacted with specific products on
                    your website. By using dynamic remarketing, you can show ads that are tailored to the specific
                    products that users have viewed, making it a more effective strategy for increasing conversions.
                  </p>

                  <h2>Set Up Frequency Capping</h2>

                  <p>
                    Frequency capping is a feature in Google Ads that allows you to limit the number of times your ads
                    are shown to the same user. By setting up frequency capping, you can prevent users from becoming
                    annoyed by seeing your ads too often, while still targeting them with your remarketing campaigns.
                  </p>

                  <h2>Create Compelling Ads</h2>

                  <p>
                    Creating compelling ads is important for any Google Ads campaign, but it's especially important for
                    remarketing. Your remarketing ads should be tailored to users who have already interacted with your
                    website, so they should be designed to re-engage those users and entice them to convert. Use
                    eye-catching visuals, compelling headlines, and clear calls to action to create ads that are
                    tailored to your remarketing audience.
                  </p>

                  <h2>Exclude Converted Users</h2>

                  <p>
                    To prevent wasted ad spend, it's important to exclude users who have already converted from your
                    remarketing campaigns. By excluding converted users, you can focus your remarketing efforts on users
                    who are still in the consideration phase and are more likely to convert.
                  </p>

                  <h2>Monitor and Adjust</h2>

                  <p>
                    Like any Google Ads campaign, it's important to monitor your remarketing campaigns and adjust your
                    strategy as needed. Review your campaign performance regularly and adjust your bids, targeting, and
                    ad creative to improve your results.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Remarketing is a powerful tool for increasing conversions in Google Ads. By creating custom
                    audiences, using dynamic remarketing, setting up frequency capping, creating compelling ads,
                    excluding converted users, and monitoring your campaigns, you can leverage remarketing to drive more
                    conversions and sales for your business.
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

