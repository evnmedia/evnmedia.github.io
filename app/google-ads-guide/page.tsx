"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function GoogleAdsGuidePage() {
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
            <h1 className="text-4xl font-bold tracking-tighter mb-6">Understanding Google Ads</h1>
            <p className="text-lg text-muted-foreground">
              Learn how Google Ads work and how they can benefit your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-gray max-w-3xl mx-auto"
          >
            <h2>Google Ads</h2>
            <p>
              When a user searches for something on Google, the search engine results page will display both paid
              advertisements and organic results. Advertisers use Google Ads to bid against each other on keywords, to
              have their adverts shown on the results page when users search for those keywords.
            </p>

            <p>
              Google charges advertisers every time their advert is clicked on. The price they charge per click varies,
              but will never go above a maximum price, which is predetermined by the advertiser (this is called the
              maximum bid). The advertiser will also set a daily budget, which will determine the maximum amount that
              Google can charge them per day on advertising. Google distributes the ads throughout the day to meet this
              budget.
            </p>

            <h3>Quality Score</h3>
            <p>Google assesses each advert, giving it a quality score from 1 to 10.</p>
            <p>This quality score is determined by:</p>
            <ul>
              <li>
                Expected click through rate – calculated by dividing the expected number of clicks by the number of
                people who will see the ad
              </li>
              <li>
                Relevance of each keyword to its ad group – Google wants to maintain a good user experience so will
                prioritise ads that are relevant to the keywords being searched
              </li>
              <li>Landing page relevance and quality – high-quality ads improve user experience</li>
              <li>
                Relevance of ad text – again, Google only wants ads that are related to the keyword being searched
              </li>
            </ul>

            <p>
              The quality score multiplied by the maximum bid for a keyword then determines the ad rank of an advert.
              The advert with the highest ad rank will then be shown first on the results page when that keyword is
              searched.
            </p>

            <h3>Example: Orange Vendor</h3>
            <p>
              An orange vendor wants to display their ad at the top of the first page on Google when the keyword
              "oranges" is searched. Many other orange vendors also want their ad to show first. The orange vendors then
              bid on this keyword. Google then determines each vendor's ad rank, based on their maximum bid and the
              quality score of their advert. Then, the adverts are displayed on the google results page, ordered by the
              adverts' ad ranks, with the ad with the highest ad rank being shown first.
            </p>

            <p>
              Advertisers typically create different ads under many different keywords, aiming to maximise the quality
              score of each ad in order to minimise the price they have to pay for each click. Also, to maximise
              returns, they continually manage their advertising campaigns to remove underperforming ads/keywords that
              are expensive and have a low conversion rate, while trying new adverts and keywords that they think could
              yield better results.
            </p>

            <h3>Example: Ad Rank Comparison</h3>
            <p>
              Advert 1 with a maximum bid of £5 and a quality score of 4 will have an ad rank of 20. Meanwhile, advert
              2, that has been optimised, might have a maximum bid of only £3 and a quality score of 8, giving it an ad
              rank of 24. This means that the advertiser is paying less for advert 2 despite it having a better location
              on the google results page, which will lead to more traffic to their website, ultimately leading to more
              sales conversions, all with a higher profit margin.
            </p>

            <h3>Summary</h3>
            <p>
              In summary, Google Ads allows businesses to pay for targeted site traffic, leading to more sales, and if
              done correctly, increased profits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Find Out How EVN Media Can Help</h2>
            <p className="text-lg text-muted-foreground">
              Let us help you optimise your Google Ads campaigns and maximise your return on ad spend.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

