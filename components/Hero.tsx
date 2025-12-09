'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-primary-600">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Welcome to KidSteps</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Perfect Shoes for{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Every Step
              </span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Discover comfortable, stylish, and durable footwear for children. 
              From playful sneakers to elegant school shoes - we have it all!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">100+</div>
                <div className="text-gray-600 text-sm">Shoe Styles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">4.8★</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=800&fit=crop"
                alt="Children's Shoes"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-400"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
