'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data';
import ProductCard from './ProductCard';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-8 h-8 text-primary-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and loved children's footwear
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
