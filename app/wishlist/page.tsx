"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { playfairDisplay } from "../../components/site-header"

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      originalPrice: 52000,
      image: "/placeholder.svg?height=300&width=300",
      category: "Rings",
      description: "A stunning 18K gold ring featuring a brilliant-cut diamond.",
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 8500,
      originalPrice: 10000,
      image: "/placeholder.svg?height=300&width=300",
      category: "Earrings",
      description: "Elegant silver earrings with lustrous freshwater pearls.",
      inStock: false,
    },
    {
      id: 3,
      name: "Emerald Tennis Bracelet",
      price: 35000,
      originalPrice: 40000,
      image: "/placeholder.svg?height=300&width=300",
      category: "Bracelets",
      description: "A classic platinum tennis bracelet adorned with vibrant emeralds.",
      inStock: true,
    },
  ])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  const moveToCart = (id: number) => {
    // In a real application, you'd add this item to the cart context/state
    console.log(`Moving item ${id} to cart`)
    removeFromWishlist(id)
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className={`text-3xl font-bold mb-8 text-center ${playfairDisplay.className}`}>Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600 mb-4">Your wishlist is currently empty. Start adding your favorite pieces!</p>
            <Link href="/catalog">
              <Button className="bg-black text-white hover:bg-gray-800">
                Discover Our Collection
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-gray-600">{item.category}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-black transition-colors">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-black">₹{item.price.toLocaleString()}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    className={`w-full ${item.inStock ? "bg-black text-white hover:bg-gray-800" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
                    disabled={!item.inStock}
                    onClick={() => moveToCart(item.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 