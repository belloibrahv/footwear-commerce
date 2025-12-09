'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Quality First',
      description: 'We prioritize quality in every pair of shoes we offer, ensuring durability and comfort.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We strive to exceed expectations in every interaction.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We continuously innovate to bring you the latest trends and technologies in children\'s footwear.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Growth',
      description: 'We grow with our customers, adapting to changing needs and preferences.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About KidSteps
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted destination for premium children's footwear
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  KidSteps was born from a simple vision: to provide parents with access to 
                  high-quality, comfortable, and stylish footwear for their children. As a group 
                  of 20 passionate computer science students from Tai Solarin University of Education, 
                  we recognized the need for a reliable online platform specializing in children's shoes.
                </p>
                <p>
                  Our journey began as a class project for CSC 414 Electronic Commerce, but it 
                  quickly evolved into something much more meaningful. We realized that by combining 
                  our technical skills with a genuine understanding of what parents and children need, 
                  we could create something truly special.
                </p>
                <p>
                  Today, KidSteps stands as a testament to innovation, teamwork, and dedication. 
                  We're proud to offer a curated selection of footwear that meets the highest 
                  standards of quality, comfort, and style.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop"
                alt="Children's Shoes"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the KidSteps family and give your children the comfort they deserve
            </p>
            <a href="/products" className="bg-white text-primary-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block">
              Start Shopping
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
