'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 rounded-full gradient-gold opacity-20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white text-sm font-medium">Premium Furniture Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-playfair text-white mb-6 animate-fade-up">
            Transform Your Space with
            <span className="block text-gradient">Royal Elegance</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover our exquisite collection of handcrafted furniture that blends timeless design with modern sophistication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="gradient-gold text-black font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
              <Link href="/products" className="flex items-center">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="glass text-white border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-200"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass rounded-lg p-6 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-gradient mb-2">500+</div>
              <div className="text-white">Premium Products</div>
            </div>
            <div className="glass rounded-lg p-6 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div className="glass rounded-lg p-6 hover:scale-105 transition-transform duration-200">
              <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-white">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}