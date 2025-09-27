'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Armchair, Bed, Utensils, Briefcase, Chrome as Home, Sparkles } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Living Room',
    description: 'Elegant sofas, chairs, and tables',
    icon: Armchair,
    count: 120,
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 2,
    name: 'Bedroom',
    description: 'Luxurious beds and wardrobes',
    icon: Bed,
    count: 89,
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: 3,
    name: 'Dining Room',
    description: 'Beautiful dining sets and storage',
    icon: Utensils,
    count: 67,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 4,
    name: 'Office',
    description: 'Professional furniture solutions',
    icon: Briefcase,
    count: 94,
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-orange-600 to-yellow-600',
  },
  {
    id: 5,
    name: 'Outdoor',
    description: 'Weather-resistant patio furniture',
    icon: Home,
    count: 45,
    image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-teal-600 to-cyan-600',
  },
  {
    id: 6,
    name: 'Premium',
    description: 'Luxury designer collections',
    icon: Sparkles,
    count: 32,
    image: 'https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    gradient: 'from-purple-600 to-indigo-600',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-playfair text-white mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect furniture for every room in your home with our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card 
                className="group glass border-white/20 overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70`} />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Count Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-3 py-1 rounded-full glass text-white text-sm font-medium">
                      {category.count} items
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}