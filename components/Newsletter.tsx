'use client';

import { motion } from 'framer-motion';
import { Mail, Gift, Bell } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700"></div>
      
      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-400"></div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Icons */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white/20 p-4 rounded-full"
            >
              <Gift className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="bg-white/20 p-4 rounded-full"
            >
              <Bell className="w-8 h-8" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="bg-white/20 p-4 rounded-full"
            >
              <Mail className="w-8 h-8" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get 15% Off Your First Order!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for exclusive deals, new arrivals, and parenting tips!
          </p>

          {/* Newsletter form */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              />
              <button className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              🎁 Plus get a welcome gift on your first purchase! No spam, unsubscribe anytime.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-1">Exclusive Deals</h3>
              <p className="text-sm text-white/80">Member-only discounts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🆕</div>
              <h3 className="font-bold mb-1">New Arrivals</h3>
              <p className="text-sm text-white/80">Be first to know</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold mb-1">Parenting Tips</h3>
              <p className="text-sm text-white/80">Expert advice weekly</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
