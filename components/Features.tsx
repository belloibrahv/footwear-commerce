'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'On orders over ₦10,000',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: 'Safe & protected',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Always here to help',
    },
  ];

  return (
    <section className="py-16 bg-white border-y">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
