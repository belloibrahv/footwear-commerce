'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { teamMembers } from '@/lib/data';
import { Users, Award } from 'lucide-react';

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerView >= teamMembers.length ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-8 h-8 text-primary-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our Amazing Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The brilliant minds behind KidSteps - Group 3, CSC 414 Electronic Commerce
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / itemsPerView)}%`,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeInOut',
              }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary-400 to-secondary-500 h-32 rounded-t-xl flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-primary-600 shadow-lg">
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      {member.role && member.role.toLowerCase().includes('lead') && (
                        <div className="absolute top-3 right-3">
                          <Award className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        </div>
                      )}
                    </div>

                    <div className="p-5 text-center space-y-2">
                      <h3 className="font-bold text-lg text-gray-900 line-clamp-2 min-h-[3.5rem]">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium">
                        {member.matricNumber}
                      </p>
                      {member.role && (
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(teamMembers.length / itemsPerView) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === idx
                    ? 'bg-primary-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
