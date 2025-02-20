import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">EVN Media</h3>
            <p className="text-sm text-muted-foreground">
              Maximising your ROAS through data-driven Google Ads optimisation strategies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/services" className="block text-sm text-muted-foreground hover:text-foreground">
                Services
              </Link>
              <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/charity" className="block text-sm text-muted-foreground hover:text-foreground">
                Charity
              </Link>
              <Link href="/privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-sm text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: management@uniplates.co.uk</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/evn_media/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2023 EVN Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

