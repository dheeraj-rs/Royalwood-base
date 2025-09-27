'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const productData = {
  1: {
    id: 1,
    name: "Royal Oak Dining Set",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
    category: "Dining Room",
    isNew: true,
    discount: 25,
    description: "Transform your dining experience with our Royal Oak Dining Set. Crafted from premium solid oak wood, this elegant set includes a spacious dining table and six matching chairs with comfortable upholstered seats.",
    features: [
      "Solid oak wood construction",
      "Seats up to 6 people comfortably",
      "Scratch-resistant finish",
      "Easy assembly with included hardware",
      "Matching upholstered chairs"
    ],
    specifications: {
      "Material": "Solid Oak Wood",
      "Dimensions": "72\" L x 36\" W x 30\" H",
      "Weight": "150 lbs",
      "Color": "Natural Oak",
      "Assembly": "Required",
      "Warranty": "5 Years"
    },
    inStock: true,
    stockCount: 12
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = productData[productId as keyof typeof productData];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button className="gradient-gold text-black">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of product ${product.id} to cart`);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-yellow-400">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-yellow-400">Products</Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden glass">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-4 left-4 gradient-gold text-black font-semibold">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-yellow-400 scale-105' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-gray-300 border-gray-600">
                    {product.category}
                  </Badge>
                  {product.isNew && (
                    <Badge className="bg-green-500 text-white">New</Badge>
                  )}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-gradient">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.discount > 0 && (
                    <Badge className="bg-red-500 text-white">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`font-medium ${product.inStock ? 'text-green-400' : 'text-red-400'}`}>
                  {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
                </span>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-white font-medium">Quantity:</label>
                  <div className="flex items-center border border-white/20 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-white hover:bg-white/10"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 text-white font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="text-white hover:bg-white/10"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 gradient-gold text-black font-semibold hover:scale-105 transition-transform duration-200"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`glass border-white/20 hover:bg-white/10 ${
                      isWishlisted ? 'text-red-400' : 'text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                    {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  </Button>
                  <Button variant="outline" className="glass border-white/20 text-white hover:bg-white/10">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 glass rounded-lg p-4">
                  <Truck className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">Free Shipping</div>
                    <div className="text-gray-400 text-sm">On orders over $500</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass rounded-lg p-4">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">5 Year Warranty</div>
                    <div className="text-gray-400 text-sm">Full coverage</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass rounded-lg p-4">
                  <RotateCcw className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">30 Day Returns</div>
                    <div className="text-gray-400 text-sm">No questions asked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 glass">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-6">
                <Card className="glass border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-white/10">
                          <span className="text-gray-300">{key}:</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card className="glass border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Customer Reviews</h3>
                    <div className="space-y-6">
                      {/* Review Summary */}
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gradient">{product.rating}</div>
                          <div className="flex items-center justify-center mt-1">
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
                          <div className="text-gray-400 text-sm">{product.reviews} reviews</div>
                        </div>
                      </div>
                      
                      {/* Sample Reviews */}
                      <div className="space-y-4">
                        <div className="border-b border-white/10 pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-white font-medium">Sarah M.</span>
                            <span className="text-gray-400 text-sm">Verified Purchase</span>
                          </div>
                          <p className="text-gray-300">
                            "Absolutely love this dining set! The quality is exceptional and it looks stunning in our dining room. Assembly was straightforward and the finish is beautiful."
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="shipping" className="mt-6">
                <Card className="glass border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Shipping Information</h3>
                    <div className="space-y-4 text-gray-300">
                      <div>
                        <h4 className="text-white font-medium mb-2">Delivery Options</h4>
                        <ul className="space-y-2">
                          <li>• Standard Delivery: 5-7 business days - FREE on orders over $500</li>
                          <li>• Express Delivery: 2-3 business days - $99</li>
                          <li>• White Glove Service: Professional setup included - $199</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Return Policy</h4>
                        <p>30-day return policy. Items must be in original condition. Return shipping costs apply unless item is defective.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}