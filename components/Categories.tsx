'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/lib/data';
import { Sparkles } from 'lucide-react';

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Shop by Category
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect shoes for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                className="card text-center p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
