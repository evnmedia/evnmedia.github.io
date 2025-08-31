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
                  src="/blog-mobile-optimization.png"
                  alt="A close-up of two people's hands, one holding a smartphone and the other gesturing towards it"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  How to Optimise Google Ads for Mobile Users
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    With the growing use of mobile devices, it's important to ensure that your Google Ads campaigns are
                    optimised for mobile users. In fact, according to Google, more than half of all Google searches are
                    now conducted on mobile devices. In this blog post, we'll discuss some tips for optimising your
                    Google Ads for mobile users and improving the performance of your campaigns.
                  </p>

                  <h2>Create Mobile-Specific Ads</h2>

                  <p>
                    The first step in optimising your Google Ads for mobile users is to create mobile-specific ads. This
                    involves creating ads that are designed specifically for the smaller screens of mobile devices.
                    Consider using shorter headlines and descriptions, more eye-catching visuals, and a clear
                    call-to-action that is easy to click on.
                  </p>

                  <h2>Use Mobile-Friendly Landing Pages</h2>

                  <p>
                    In addition to creating mobile-specific ads, it's important to ensure that your landing pages are
                    mobile-friendly as well. This means using responsive design that adapts to the size of the user's
                    screen, avoiding large images or videos that can slow down loading times, and making sure that the
                    page is easy to navigate on a smaller screen.
                  </p>

                  <h2>Target Mobile Devices</h2>

                  <p>
                    Another way to optimise your Google Ads for mobile users is to target mobile devices specifically.
                    This means using bid adjustments to increase your bids for mobile devices, as well as targeting
                    specific mobile devices, such as smartphones or tablets. You can also use location targeting to
                    target users who are searching from a mobile device in a specific location.
                  </p>

                  <h2>Consider Mobile-Only Campaigns</h2>

                  <p>
                    If mobile users are a key part of your target audience, it may be worth considering creating
                    mobile-only campaigns. This allows you to create ads and landing pages that are specifically
                    designed for mobile users, and to target mobile devices with higher bids and more specific targeting
                    options.
                  </p>

                  <h2>Monitor Performance on Mobile Devices</h2>

                  <p>
                    Finally, it's important to monitor the performance of your Google Ads campaigns on mobile devices.
                    Use the device report in Google Ads to track the performance of your campaigns on mobile devices,
                    and make adjustments to your bids, targeting, and ad copy as needed.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Optimising your Google Ads campaigns for mobile users is essential in today's mobile-first world. By
                    creating mobile-specific ads, using mobile-friendly landing pages, targeting mobile devices
                    specifically, considering mobile-only campaigns, and monitoring performance on mobile devices, you
                    can improve the performance of your campaigns and reach more mobile users. With these tips in mind,
                    you can take your Google Ads campaigns to the next level and maximise your ROI.
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

