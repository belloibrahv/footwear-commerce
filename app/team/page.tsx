'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import { Users, Award } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-10 h-10 text-primary-600" />
            <h1 className="text-5xl font-bold text-gray-900">Our Amazing Team</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the 20 talented students from Group 3, CSC 414 Electronic Commerce, 
            Tai Solarin University of Education, who brought KidSteps to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
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
                <h3 className="font-bold text-lg text-gray-900 min-h-[3.5rem]">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium">
                  {member.matricNumber}
                </p>
                {member.role && (
                  <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold bg-gray-100 px-3 py-1 rounded-full inline-block">
                    {member.role}
                  </p>
                )}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Together We Build Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This project represents the collaborative effort of 20 dedicated students 
            who combined their skills, creativity, and passion to create a modern 
            e-commerce platform for children's footwear.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
