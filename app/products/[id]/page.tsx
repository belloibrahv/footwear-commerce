'use client';

import { useState, use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/data';
import { Star, ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const { addToCart } = useCart();
  const router = useRouter();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <Link
          href="/products"
          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                  -{discount}%
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-4 ring-primary-600' : 'ring-2 ring-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                {product.category.replace('-', ' ')}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₦{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-primary-600 text-white ring-2 ring-primary-600'
                          : 'bg-white text-gray-700 ring-1 ring-gray-300 hover:ring-primary-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Color
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        selectedColor === color
                          ? 'bg-primary-600 text-white ring-2 ring-primary-600'
                          : 'bg-white text-gray-700 ring-1 ring-gray-300 hover:ring-primary-600'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  if (selectedSize && selectedColor && product) {
                    addToCart(product, quantity, selectedSize, selectedColor);
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 2000);
                  }
                }}
                className="btn-primary w-full flex items-center justify-center space-x-2"
                disabled={!selectedSize || !selectedColor}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}</span>
              </button>
              
              <button
                onClick={() => {
                  if (selectedSize && selectedColor && product) {
                    addToCart(product, quantity, selectedSize, selectedColor);
                    router.push('/cart');
                  }
                }}
                className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                disabled={!selectedSize || !selectedColor}
              >
                <span>Buy Now</span>
              </button>

              {!selectedSize || !selectedColor ? (
                <p className="text-sm text-gray-600 text-center">
                  Please select size and color
                </p>
              ) : null}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 space-y-4">
              <h3 className="font-bold text-lg">Product Details</h3>
              <p className="text-gray-700">{product.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span>Free shipping on orders over ₦10,000</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span>Secure payment options</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
