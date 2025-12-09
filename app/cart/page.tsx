'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 10000 ? 0 : 1500;
  const tax = Math.round(subtotal * 0.075);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`}
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 text-center"
          >
            <div className="flex flex-col items-center justify-center py-12">
              <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Add some products to get started!
              </p>
              <Link href="/products" className="btn-primary inline-flex items-center space-x-2">
                <span>Continue Shopping</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <motion.div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">{item.product.category}</p>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span>Size: <span className="font-semibold">{item.size}</span></span>
                            <span>Color: <span className="font-semibold">{item.color}</span></span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                          className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                        >
                          <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-2 hover:bg-white rounded-md transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-2 hover:bg-white rounded-md transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">
                            ₦{(item.product.price * item.quantity).toLocaleString()}
                          </p>
                          {item.product.originalPrice && (
                            <p className="text-sm text-gray-500 line-through">
                              ₦{(item.product.originalPrice * item.quantity).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <Link
                href="/products"
                className="block text-center text-primary-600 hover:text-primary-700 font-medium py-4"
              >
                ← Continue Shopping
              </Link>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `₦${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (7.5%)</span>
                    <span className="font-semibold">₦{tax.toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link href="/checkout" className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2">
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="mt-6 text-sm text-gray-600 space-y-2">
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Free shipping on orders over ₦10,000</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>Secure payment options</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✓</span>
                    <span>30-day return policy</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
