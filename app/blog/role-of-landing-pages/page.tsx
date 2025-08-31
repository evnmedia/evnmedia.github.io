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
                  src="/blog-landing-pages.png"
                  alt="Landing page optimisation for Google Ads"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  The Role of Landing Pages in Google Ads Success
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    Google Ads is a highly effective way for businesses to reach their target audience and drive traffic
                    to their website. However, even the most well-crafted ads can fall flat if the landing page doesn't
                    deliver what the ad promises. In this blog post, we'll explore the role of landing pages in Google
                    Ads success.
                  </p>

                  <h2>Align your landing page with your ad</h2>

                  <p>
                    The landing page should be relevant to the ad that drove the user there. If the ad promises a
                    specific offer, make sure the landing page delivers on that promise. If the ad is promoting a
                    specific product or service, make sure the landing page highlights that product or service. By
                    aligning your landing page with your ad, you can increase the chances of the user taking the desired
                    action.
                  </p>

                  <h2>Keep it simple</h2>

                  <p>
                    Your landing page should be simple and easy to navigate. Users should be able to quickly find the
                    information they're looking for and take the desired action. Avoid cluttered designs and lengthy
                    copy, and instead focus on a clean and simple layout that makes it easy for users to engage with
                    your content.
                  </p>

                  <h2>Optimise for mobile</h2>

                  <p>
                    More and more users are browsing the web on mobile devices, so it's essential to have a landing page
                    that's optimised for mobile. Make sure your landing page is easy to navigate on a smaller screen,
                    and that the call-to-action is prominently displayed.
                  </p>

                  <h2>Use compelling visuals</h2>

                  <p>
                    Images and videos can help bring your landing page to life and make it more engaging for users. Use
                    high-quality visuals that are relevant to your product or service, and make sure they load quickly.
                  </p>

                  <h2>Test and optimise</h2>

                  <p>
                    Finally, it's important to continually test and optimise your landing page to ensure it's delivering
                    the best possible results. A/B testing can help you determine which landing page elements are most
                    effective at driving conversions, and you can use tools like Google Analytics to track user
                    behaviour and identify areas for improvement.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    The landing page is a critical element in the success of Google Ads campaigns. By aligning your
                    landing page with your ad, keeping it simple, optimising for mobile, using compelling visuals, and
                    testing and optimising on an ongoing basis, you can increase the effectiveness of your campaigns and
                    achieve better results. By continually refining and improving your landing page, you can ensure that
                    users have a positive experience and are more likely to take the desired action.
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

