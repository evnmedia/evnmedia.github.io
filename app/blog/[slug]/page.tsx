import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

const articles = [
  {
    slug: "reduce-cart-abandonment-rates",
    title: "5 Effective Strategies to Reduce Cart Abandonment Rates in E-Commerce",
    excerpt:
      "One of the biggest challenges that e-commerce stores face is cart abandonment. Cart abandonment refers to the act of a customer adding...",
    image: "/blog-cart-abandonment.png",
    date: "2024-01-15",
  },
  {
    slug: "optimising-bidding-strategies",
    title: "Optimising bidding strategies in Google Ads for maximum ROI",
    excerpt: "To get the most out of your Google Ads campaigns, it is essential to optimise your bidding strategy.",
    image: "/blog-bidding-strategies.png",
    date: "2024-01-15",
  },
  // ... add all other articles with their images
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <Button variant="ghost" asChild className="-ml-4">
                <Link href="/blog" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <div className="aspect-[2/1] relative overflow-hidden rounded-lg">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter leading-tight">{article.title}</h1>
              <p className="text-sm text-muted-foreground">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-muted-foreground">{article.excerpt}</p>
                <p className="text-muted-foreground">Full article content coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

