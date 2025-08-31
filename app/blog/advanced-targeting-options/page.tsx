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
                  alt="Advanced targeting options in Google Ads"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                  Advanced Targeting Options in Google Ads for Niche Audiences
                </h1>

                <div className="prose prose-gray max-w-none">
                  <p>
                    As more businesses move their marketing efforts online, it's becoming increasingly important to find
                    creative ways to target niche audiences. Thankfully, Google Ads offers advanced targeting options
                    that allow businesses to reach very specific audiences. In this blog post, we'll explore the
                    benefits of advanced targeting options in Google Ads for niche audiences and provide tips on how to
                    use these options to your advantage.
                  </p>

                  <h2>Reach Specific Demographics</h2>

                  <p>
                    Advanced targeting options in Google Ads allow businesses to reach specific demographics. For
                    example, you can target by age, gender, income level, and even parental status. This level of
                    targeting can be especially useful for businesses that offer niche products or services.
                  </p>

                  <h2>Leverage Custom Affinity Audiences</h2>

                  <p>
                    Custom affinity audiences allow businesses to target potential customers based on their interests,
                    passions, and habits. This targeting option is ideal for businesses looking to reach niche
                    audiences. By creating custom affinity audiences, businesses can ensure that their ads are being
                    shown to people who are most likely to be interested in their products or services.
                  </p>

                  <h2>Use In-Market Audiences</h2>

                  <p>
                    In-market audiences are groups of people who are actively searching for products or services that
                    are similar to yours. By targeting in-market audiences, businesses can reach potential customers who
                    are already looking for what they have to offer. This targeting option can be especially useful for
                    businesses in niche industries.
                  </p>

                  <h2>Utilise Geographic Targeting</h2>

                  <p>
                    Advanced targeting options in Google Ads also allow businesses to target specific geographic
                    locations. For example, if you run a brick-and-mortar store, you can target customers within a
                    certain radius of your location. This can help ensure that your ads are being seen by people who are
                    most likely to visit your store.
                  </p>

                  <h2>Consider Device Targeting</h2>

                  <p>
                    Finally, device targeting can also be an effective way to reach niche audiences. For example, if
                    your product or service is primarily used on mobile devices, you can target mobile users. This can
                    help ensure that your ads are being seen by people who are most likely to engage with your business.
                  </p>

                  <h2>Conclusion</h2>

                  <p>
                    Advanced targeting options in Google Ads are a powerful tool for businesses looking to reach niche
                    audiences. By using custom affinity audiences, in-market audiences, geographic targeting, and device
                    targeting, businesses can create highly targeted campaigns that are more likely to reach potential
                    customers. When combined with effective ad copy and landing pages, these targeting options can help
                    businesses drive more traffic, increase conversions, and grow their business.
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

