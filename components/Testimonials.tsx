'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mrs. Adebayo Folake',
    role: 'Parent of 2',
    content: 'Amazing quality! My kids absolutely love their new sneakers. The shoes are durable and comfortable. We\'ve been buying from KidSteps for over a year now.',
    rating: 5,
    image: '👩🏾',
  },
  {
    id: 2,
    name: 'Mr. Okonkwo James',
    role: 'Father of 3',
    content: 'Best online shoe store for children! Fast delivery, excellent customer service, and the prices are very reasonable. Highly recommended!',
    rating: 5,
    image: '👨🏿',
  },
  {
    id: 3,
    name: 'Mrs. Ibrahim Zainab',
    role: 'Mother of twins',
    content: 'I love the variety of shoes available. From school shoes to sandals, everything my twins need is here. The quality is outstanding!',
    rating: 5,
    image: '👩🏽',
  },
  {
    id: 4,
    name: 'Dr. Oluwaseun Grace',
    role: 'Pediatrician & Mom',
    content: 'As a doctor, I appreciate shoes that support healthy foot development. KidSteps offers exactly that - comfort, quality, and style!',
    rating: 5,
    image: '👩🏾‍⚕️',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-primary-100 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
            <span className="text-primary-700 font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative bg-white"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
            <div className="text-gray-600">Shoes Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
