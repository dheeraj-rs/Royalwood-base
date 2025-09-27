'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Leaf, Heart, Star, Clock } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Award, label: 'Years of Excellence', value: '15+' },
  { icon: Users, label: 'Happy Customers', value: '10K+' },
  { icon: Star, label: 'Premium Products', value: '500+' },
  { icon: Clock, label: 'Crafting Hours', value: '50K+' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Craftsmanship',
    description: 'Every piece is crafted with love and attention to detail, ensuring exceptional quality that lasts generations.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'We source only the finest sustainable materials, supporting both quality and environmental responsibility.',
  },
  {
    icon: Award,
    title: 'Timeless Design',
    description: 'Our designs blend classic elegance with modern functionality, creating furniture that never goes out of style.',
  },
];

const team = [
  {
    name: 'Alexander Royal',
    role: 'Founder & Master Craftsman',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With over 20 years of experience in fine furniture making, Alexander founded Royalwood with a vision to create heirloom-quality pieces.',
  },
  {
    name: 'Isabella Chen',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Isabella brings a modern aesthetic to traditional craftsmanship, ensuring each piece is both beautiful and functional.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Quality Assurance Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Marcus ensures every piece meets our exacting standards before it reaches your home, maintaining our reputation for excellence.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 gradient-gold text-black font-semibold">Our Story</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair text-white mb-6">
              Crafting <span className="text-gradient">Excellence</span> Since 2009
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              At Royalwood, we believe furniture is more than just functional pieces—it's about creating spaces that inspire, comfort, and bring families together. Our journey began with a simple mission: to craft heirloom-quality furniture that tells a story.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2009 by master craftsman Alexander Royal, Royalwood began as a small workshop with a big dream. Alexander's passion for woodworking started in his grandfather's garage, where he learned the traditional techniques that would later define our brand.
                </p>
                <p>
                  What started as custom pieces for friends and family quickly grew into a reputation for exceptional quality and timeless design. Today, we're proud to serve customers worldwide while maintaining the same attention to detail and commitment to craftsmanship that defined our early days.
                </p>
                <p>
                  Every piece that leaves our workshop carries with it the legacy of traditional craftsmanship combined with modern innovation, ensuring that your furniture will be treasured for generations to come.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden glass">
                <Image
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Craftsman at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg overflow-hidden glass">
                <Image
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Finished furniture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="glass border-white/20 text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-gold mb-6">
                    <value.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate individuals behind every piece of Royalwood furniture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="glass border-white/20 text-center animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-yellow-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our collection of handcrafted furniture and find the perfect pieces for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors duration-200"
            >
              Shop Collection
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}