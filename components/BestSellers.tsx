'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import ProductCard from './ProductCard';
import { TrendingUp, Flame } from 'lucide-react';

export default function BestSellers() {
  // Get products with highest ratings
  const bestSellers = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 text-primary-200/20 text-9xl font-bold">🔥</div>
      <div className="absolute bottom-20 right-10 text-secondary-200/20 text-9xl font-bold">⭐</div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
            <Flame className="w-5 h-5" />
            <span className="font-bold">Hot Picks</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Sellers This Month
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most loved shoes - trusted by thousands of happy parents!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="relative">
              {/* Best seller badge */}
              {index < 3 && (
                <div className="absolute -top-4 -right-4 z-10 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-xl transform rotate-12">
                  #{index + 1}
                </div>
              )}
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
