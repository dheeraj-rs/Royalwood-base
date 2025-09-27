'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const initialCartItems = [
  {
    id: 1,
    name: "Royal Oak Dining Set",
    price: 2999,
    originalPrice: 3999,
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    quantity: 1,
    inStock: true,
  },
  {
    id: 2,
    name: "Luxury Velvet Sofa",
    price: 1899,
    originalPrice: 2299,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
    quantity: 1,
    inStock: true,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setDiscount(0.1);
    } else if (promoCode.toLowerCase() === 'welcome20') {
      setDiscount(0.2);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 500 ? 0 : 99;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
              <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Button asChild className="gradient-gold text-black font-semibold">
                <Link href="/products">
                  Continue Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-8">
            Shopping <span className="text-gradient">Cart</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="glass border-white/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                              <Link href={`/products/${item.id}`} className="hover:text-yellow-400">
                                {item.name}
                              </Link>
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-bold text-gradient">
                                ${item.price}
                              </span>
                              {item.originalPrice > item.price && (
                                <span className="text-gray-500 line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10 self-start"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/20 rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-white hover:bg-white/10"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="px-4 py-2 text-white font-medium">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-white hover:bg-white/10"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <div className="text-lg font-bold text-white">
                              ${(item.price * item.quantity).toLocaleString()}
                            </div>
                            {item.originalPrice > item.price && (
                              <div className="text-sm text-green-400">
                                Save ${((item.originalPrice - item.price) * item.quantity).toLocaleString()}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Promo Code</h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Button 
                      onClick={applyPromoCode}
                      variant="outline"
                      className="glass border-white/20 text-white hover:bg-white/10"
                    >
                      Apply
                    </Button>
                  </div>
                  {discount > 0 && (
                    <div className="mt-2 text-green-400 text-sm">
                      Promo code applied! {(discount * 100)}% discount
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-300">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount ({(discount * 100)}%)</span>
                        <span>-${discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    <Separator className="bg-white/20" />
                    
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total</span>
                      <span className="text-gradient">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6 gradient-gold text-black font-semibold hover:scale-105 transition-transform duration-200">
                    <Link href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>

                  <Button asChild variant="outline" className="w-full mt-3 glass border-white/20 text-white hover:bg-white/10">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <Card className="glass border-white/20">
                <CardContent className="p-4 text-center">
                  <div className="text-green-400 text-sm font-medium mb-1">🔒 Secure Checkout</div>
                  <div className="text-gray-400 text-xs">Your payment information is encrypted and secure</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}