'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    name: "Royal Oak Dining Set",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Dining Room",
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Luxury Velvet Sofa",
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 87,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Living Room",
    isBestseller: true,
    discount: 17,
  },
  {
    id: 3,
    name: "Executive Office Chair",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviews: 203,
    image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Office",
    discount: 25,
  },
  {
    id: 4,
    name: "Elegant Wardrobe",
    price: 1299,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 156,
    image: "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    category: "Bedroom",
    discount: 19,
  },
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 relative product-bg">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-playfair text-white mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our most popular furniture pieces, crafted with precision and designed to elevate your living space.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group glass border-white/20 overflow-hidden hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-red-500 text-white">Bestseller</Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge className="gradient-gold text-black font-semibold">
                      {product.discount}% OFF
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <Button size="icon" variant="secondary" className="h-8 w-8 glass">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 glass">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <Badge variant="outline" className="mb-3 text-gray-300 border-gray-600">
                  {product.category}
                </Badge>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  <Link href={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-300 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gradient">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  className="w-full gradient-gold text-black font-semibold hover:scale-105 transition-transform duration-200"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="glass text-white border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-200"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}