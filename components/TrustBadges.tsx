'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Truck, CreditCard, Clock, ThumbsUp } from 'lucide-react';

const badges = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: '100% Authentic',
    description: 'Genuine products guaranteed',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Premium Quality',
    description: 'Tested for durability',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: 'Fast Delivery',
    description: '2-5 days nationwide',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: 'Secure Payment',
    description: 'Multiple payment options',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: '30-Day Returns',
    description: 'Easy return policy',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <ThumbsUp className="w-10 h-10" />,
    title: '24/7 Support',
    description: 'Always here for you',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`bg-gradient-to-br ${badge.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {badge.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-400">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
