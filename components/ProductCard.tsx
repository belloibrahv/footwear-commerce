'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        
        {product.featured && (
          <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-primary-600 p-3 rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
            {product.category.replace('-', ' ')}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>

        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg text-gray-900 hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center space-x-2">
          <div className="flex flex-wrap gap-1">
            {product.colors.slice(0, 4).map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border-2 border-gray-300"
                style={{
                  background: color.toLowerCase().includes('multi')
                    ? 'linear-gradient(135deg, red, orange, yellow, green, blue, indigo, violet)'
                    : color.toLowerCase(),
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              ₦{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ₦{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          
          <Link href={`/products/${product.id}`} className="text-primary-600 font-semibold hover:underline">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
