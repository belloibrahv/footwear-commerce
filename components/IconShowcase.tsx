'use client';

import { motion } from 'framer-motion';
import {
  ShoppingCart, Menu, X, Search, User, Heart, Star,
  ArrowRight, Sparkles, Truck, Shield, RefreshCw, Headphones,
  Users, Award, TrendingUp, SlidersHorizontal, ShoppingBag,
  Trash2, Plus, Minus, ArrowLeft, Check, Target, Facebook,
  Instagram, Twitter, Mail, Phone, MapPin, Package, CreditCard,
  Zap, Rocket, Eye, ThumbsUp, Gift, Tag
} from 'lucide-react';

const iconGroups = [
  {
    category: 'Navigation',
    icons: [
      { Icon: Menu, name: 'Menu', color: 'text-blue-600' },
      { Icon: X, name: 'Close', color: 'text-red-600' },
      { Icon: Search, name: 'Search', color: 'text-green-600' },
      { Icon: ArrowLeft, name: 'Back', color: 'text-purple-600' },
      { Icon: ArrowRight, name: 'Forward', color: 'text-purple-600' },
    ],
  },
  {
    category: 'E-Commerce',
    icons: [
      { Icon: ShoppingCart, name: 'Cart', color: 'text-primary-600' },
      { Icon: ShoppingBag, name: 'Bag', color: 'text-primary-600' },
      { Icon: Package, name: 'Package', color: 'text-orange-600' },
      { Icon: Tag, name: 'Tag', color: 'text-pink-600' },
      { Icon: Gift, name: 'Gift', color: 'text-red-600' },
      { Icon: CreditCard, name: 'Payment', color: 'text-indigo-600' },
    ],
  },
  {
    category: 'User & Social',
    icons: [
      { Icon: User, name: 'User', color: 'text-gray-600' },
      { Icon: Users, name: 'Users', color: 'text-gray-600' },
      { Icon: Heart, name: 'Favorite', color: 'text-red-600' },
      { Icon: Facebook, name: 'Facebook', color: 'text-blue-700' },
      { Icon: Instagram, name: 'Instagram', color: 'text-pink-600' },
      { Icon: Twitter, name: 'Twitter', color: 'text-blue-500' },
    ],
  },
  {
    category: 'Features',
    icons: [
      { Icon: Truck, name: 'Shipping', color: 'text-green-600' },
      { Icon: Shield, name: 'Security', color: 'text-blue-600' },
      { Icon: RefreshCw, name: 'Returns', color: 'text-orange-600' },
      { Icon: Headphones, name: 'Support', color: 'text-purple-600' },
      { Icon: Zap, name: 'Fast', color: 'text-yellow-600' },
      { Icon: Rocket, name: 'Launch', color: 'text-red-600' },
    ],
  },
  {
    category: 'Status & Actions',
    icons: [
      { Icon: Star, name: 'Rating', color: 'text-yellow-500' },
      { Icon: Award, name: 'Award', color: 'text-yellow-600' },
      { Icon: Check, name: 'Check', color: 'text-green-600' },
      { Icon: Plus, name: 'Add', color: 'text-blue-600' },
      { Icon: Minus, name: 'Remove', color: 'text-red-600' },
      { Icon: Trash2, name: 'Delete', color: 'text-red-600' },
    ],
  },
  {
    category: 'Business',
    icons: [
      { Icon: TrendingUp, name: 'Trending', color: 'text-green-600' },
      { Icon: Target, name: 'Target', color: 'text-primary-600' },
      { Icon: Sparkles, name: 'Special', color: 'text-purple-600' },
      { Icon: Eye, name: 'View', color: 'text-gray-600' },
      { Icon: ThumbsUp, name: 'Like', color: 'text-blue-600' },
      { Icon: SlidersHorizontal, name: 'Filter', color: 'text-gray-600' },
    ],
  },
  {
    category: 'Contact',
    icons: [
      { Icon: Mail, name: 'Email', color: 'text-blue-600' },
      { Icon: Phone, name: 'Phone', color: 'text-green-600' },
      { Icon: MapPin, name: 'Location', color: 'text-red-600' },
    ],
  },
];

export default function IconShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-10 h-10 text-primary-600" />
            <h1 className="text-5xl font-bold text-gray-900">Lucide Icons</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beautiful, consistent icons used throughout KidSteps. 
            All icons are fully customizable with Tailwind CSS.
          </p>
          <div className="mt-6 inline-flex items-center space-x-4 bg-primary-50 px-6 py-3 rounded-lg">
            <Check className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-900">1000+ Icons Available</span>
            <span className="text-gray-400">|</span>
            <Check className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-gray-900">Fully Integrated</span>
          </div>
        </motion.div>

        <div className="space-y-12">
          {iconGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <div className="w-1 h-8 bg-primary-600 rounded"></div>
                <span>{group.category}</span>
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {group.icons.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                    className="card p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className={`${item.color} mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.Icon className="w-10 h-10" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12 text-center"
        >
          <Rocket className="w-16 h-16 text-primary-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore More Icons?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Visit the Lucide website to browse 1000+ beautiful, customizable icons 
            that you can use in your project.
          </p>
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Browse All Icons</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <Package className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Tree-Shakeable</h3>
            <p className="text-sm text-gray-600">Only imports icons you actually use</p>
          </div>
          <div className="card p-6 text-center">
            <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Zero Dependencies</h3>
            <p className="text-sm text-gray-600">Lightweight and blazing fast</p>
          </div>
          <div className="card p-6 text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">TypeScript Ready</h3>
            <p className="text-sm text-gray-600">Full type definitions included</p>
          </div>
        </div>
      </div>
    </div>
  );
}
