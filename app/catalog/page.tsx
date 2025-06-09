"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, ShoppingCart, Heart, Filter, Grid, List, Search, Gem } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 100000])

  const products = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 45000,
      originalPrice: 52000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      category: "Rings",
      material: "18K Gold",
      stone: "Diamond",
      isNew: true,
      inStock: true,
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      price: 8500,
      originalPrice: 10000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      category: "Earrings",
      material: "Silver",
      stone: "Pearl",
      isNew: false,
      inStock: true,
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      price: 25000,
      originalPrice: 28000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      category: "Necklaces",
      material: "22K Gold",
      stone: "None",
      isNew: true,
      inStock: false,
    },
    {
      id: 4,
      name: "Emerald Tennis Bracelet",
      price: 35000,
      originalPrice: 40000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 67,
      category: "Bracelets",
      material: "Platinum",
      stone: "Emerald",
      isNew: false,
      inStock: true,
    },
    {
      id: 5,
      name: "Ruby Pendant Set",
      price: 18000,
      originalPrice: 22000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 93,
      category: "Sets",
      material: "18K Gold",
      stone: "Ruby",
      isNew: false,
      inStock: true,
    },
    {
      id: 6,
      name: "Sapphire Stud Earrings",
      price: 12000,
      originalPrice: 15000,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 78,
      category: "Earrings",
      material: "White Gold",
      stone: "Sapphire",
      isNew: true,
      inStock: true,
    },
  ]

  const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Sets", "Pendants"]
  const materials = ["18K Gold", "22K Gold", "Silver", "Platinum", "White Gold"]
  const stones = ["Diamond", "Ruby", "Emerald", "Sapphire", "Pearl", "None"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Gem className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">LuxeGems</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search products..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Filters</h2>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={100000} step={1000} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Materials</h3>
                  <div className="space-y-2">
                    {materials.map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} />
                        <label htmlFor={material} className="text-sm cursor-pointer">
                          {material}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stones */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Stones</h3>
                  <div className="space-y-2">
                    {stones.map((stone) => (
                      <div key={stone} className="flex items-center space-x-2">
                        <Checkbox id={stone} />
                        <label htmlFor={stone} className="text-sm cursor-pointer">
                          {stone}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold">Jewelry Catalog</h1>
                <Badge variant="secondary">{products.length} products</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  className={`group hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-64"
                      }`}
                    />
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600">New</Badge>
                    )}
                    {!product.inStock && <Badge className="absolute top-4 left-4 bg-red-500">Out of Stock</Badge>}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                    <div className="text-sm text-gray-600 mb-3">
                      <p>Material: {product.material}</p>
                      <p>Stone: {product.stone}</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-purple-600">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
