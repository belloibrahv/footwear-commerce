'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">👟</span>
              <span className="text-2xl font-bold text-white">KidSteps</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted destination for quality children's footwear. 
              Comfort, style, and durability in every step.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">All Products</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
              <li><Link href="/icons" className="hover:text-primary-400 transition-colors">Icons Library</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=sneakers" className="hover:text-primary-400 transition-colors">Sneakers</Link></li>
              <li><Link href="/products?category=sandals" className="hover:text-primary-400 transition-colors">Sandals</Link></li>
              <li><Link href="/products?category=boots" className="hover:text-primary-400 transition-colors">Boots</Link></li>
              <li><Link href="/products?category=school-shoes" className="hover:text-primary-400 transition-colors">School Shoes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Tai Solarin University of Education, Ijebu Ode, Ogun State</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@kidsteps.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} KidSteps - Group 3, CSC 414 Electronic Commerce. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Built with ❤️ by 20 talented developers</p>
        </div>
      </div>
    </footer>
  );
}
