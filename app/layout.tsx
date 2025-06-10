import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LuxeGems - Luxury Jewelry Marketplace",
  description: "Discover exquisite handcrafted jewelry pieces from around the world",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-muted/50">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">LuxeGems</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover exquisite handcrafted jewelry pieces from around the world.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/catalog" className="text-muted-foreground hover:text-foreground">
                          Catalog
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-muted-foreground hover:text-foreground">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-muted-foreground hover:text-foreground">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Customer Service</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Shipping Info
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Returns
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Size Guide
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Connect</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-foreground">
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                  <p>&copy; 2024 LuxeGems. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
