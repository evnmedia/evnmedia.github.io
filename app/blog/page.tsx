"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    slug: "pros-and-cons-of-ppc",
    title: "Pros and Cons of PPC advertising",
    excerpt:
      "Pay-per-click (PPC) advertising is a popular form of online advertising where advertisers pay each time a user clicks on one of their...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DrabDfTR7tLssryIkSNX8J5yY05y3n.png",
    date: "2024-03-14",
  },
  {
    slug: "high-converting-campaigns",
    title: "Best practices for creating high-converting Google Ads campaigns",
    excerpt:
      "Google Ads is a powerful tool for businesses looking to reach their target audience and drive conversions. However, creating a...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hUrvkoMPfmCDpFrRMt9UbcyD15IJE6.png",
    date: "2024-03-14",
  },
  {
    slug: "importance-of-digital-marketing",
    title: "The importance of digital marketing",
    excerpt:
      "In today's digital age, it is more important than ever for businesses to utilise digital marketing as part of their marketing strategy....",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uqZcvP8BxN9UsGCWV1JVrg8h2On2P2.png",
    date: "2024-03-14",
  },
  {
    slug: "improving-quality-score",
    title: "Tips for improving Quality Score in Google Ads",
    excerpt:
      "Google Ads' Quality Score is a metric that measures the relevance and quality of your ads, keywords, and landing pages. A higher Quality...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SEI9CBMydl2PPcx4RaQK9VAgHynmLc.png",
    date: "2024-03-10",
  },
  {
    slug: "common-mistakes",
    title: "Common mistakes to avoid in Google Ads campaign management",
    excerpt:
      "Google Ads can be a highly effective tool for driving traffic, leads, and sales to your business. However, there are several common...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4TQ3T62ROOV5ac6YYd5vrXJsVpayw.png",
    date: "2024-03-10",
  },
  {
    slug: "optimise-for-mobile",
    title: "How to optimise Google Ads for mobile users",
    excerpt:
      "With the growing use of mobile devices, it's important to ensure that your Google Ads campaigns are optimised for mobile users. In fact,...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vsZYZWIqrMdI9wlltXA3gwbmeuBa0s.png",
    date: "2024-02-28",
  },
  {
    slug: "benefits-for-ecommerce",
    title: "The benefits of using Google Ads for ecommerce stores",
    excerpt:
      "Google Ads is a powerful advertising platform that offers numerous benefits for ecommerce stores looking to drive more traffic, increase...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-28",
  },
  {
    slug: "using-google-analytics",
    title: "Using Google Analytics to measure the success of your Google Ads campaigns",
    excerpt:
      "Google Analytics is a powerful tool that can help you measure the success of your Google Ads campaigns and gain insights into how your...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-28",
  },
  {
    slug: "leveraging-remarketing",
    title: "Leveraging Google Ads remarketing to increase conversions",
    excerpt:
      "Remarketing is a powerful tool for increasing conversions in Google Ads. Remarketing allows you to show ads to users who have already...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-15",
  },
  {
    slug: "lower-cost-per-click",
    title: "How to lower your cost-per-click in Google Ads",
    excerpt:
      "Google Ads can be an effective way to drive traffic and increase conversions for your business, but it can also become expensive if...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-15",
  },
  {
    slug: "impact-of-ad-copy",
    title: "The impact of ad copy and creative on Google Ads performance",
    excerpt:
      "Ad copy and creative are crucial components of Google Ads campaigns. They are the first thing that potential customers see when they...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-08",
  },
  {
    slug: "integrating-google-ads",
    title: "Integrating Google Ads with other digital marketing channels for a cohesive strategy",
    excerpt:
      "In today's digital age, businesses must consider the big picture when it comes to their marketing efforts. While Google Ads is an...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-02-08",
  },
  {
    slug: "advanced-targeting-options",
    title: "Advanced targeting options in Google Ads for niche audiences",
    excerpt:
      "As more businesses move their marketing efforts online, it's becoming increasingly important to find creative ways to target niche...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-27",
  },
  {
    slug: "automation-and-machine-learning",
    title: "Using automation and machine learning in Google Ads for optimal performance",
    excerpt:
      "Google Ads is a powerful tool for businesses looking to drive traffic and increase conversions. However, managing Google Ads campaigns...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-27",
  },
  {
    slug: "effective-ab-testing",
    title: "How to run effective A/B testing in Google Ads",
    excerpt:
      "A/B testing is a powerful tool for businesses looking to optimise their Google Ads campaigns. By testing different variations of ads,...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-27",
  },
  {
    slug: "role-of-landing-pages",
    title: "The role of landing pages in Google Ads success",
    excerpt:
      "Google Ads is a highly effective way for businesses to reach their target audience and drive traffic to their website. However, even the...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
  },
  {
    slug: "optimising-bidding-strategies",
    title: "Optimising bidding strategies in Google Ads for maximum ROI",
    excerpt: "To get the most out of your Google Ads campaigns, it is essential to optimise your bidding strategy.",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
  },
  {
    slug: "reduce-cart-abandonment-rates",
    title: "5 Effective Strategies to Reduce Cart Abandonment Rates in E-Commerce",
    excerpt:
      "One of the biggest challenges that e-commerce stores face is cart abandonment. Cart abandonment refers to the act of a customer adding...",
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
  },
]

export default function BlogPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Our Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, tips, and strategies for maximising your Google Ads performance and digital marketing success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <Card className="h-full flex flex-col transition-colors hover:bg-muted/50">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="leading-tight">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <p className="text-sm text-muted-foreground">
                        {new Date(article.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

