'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Bell, Star } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed! Welcome to Royalwood family.', {
      description: 'You\'ll receive your 10% discount code via email shortly.',
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass border-white/20 max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            {/* Header */}
            <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-white mb-4">
              Join the Royalwood Family
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and design inspiration.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <Gift className="w-6 h-6 text-white mr-3" />
                <span className="text-white font-medium">10% Off First Order</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Bell className="w-6 h-6 text-white mr-3" />
                <span className="text-white font-medium">Early Access to Sales</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Star className="w-6 h-6 text-white mr-3" />
                <span className="text-white font-medium">Exclusive Design Tips</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-white/20"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-black text-white hover:bg-black/80 font-semibold px-8"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>

            {/* Disclaimer */}
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}