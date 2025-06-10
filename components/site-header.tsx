"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ShoppingCart, User, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart"

export function SiteHeader() {
  const pathname = usePathname()
  const cart = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/catalog",
      label: "Catalog",
      active: pathname === "/catalog",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        route.active ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                LuxeGems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  route.active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>

            <Link href="/admin">
              <Button variant="ghost" size="icon" aria-label="Admin">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
                {isMounted && cart.getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px]">
                    {cart.getItemCount()}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
