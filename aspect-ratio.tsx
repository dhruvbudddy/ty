'use client';

import { motion } from 'framer-motion';
import { Rocket, Globe, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { icon: Rocket, value: '60+', label: 'Projects Delivered' },
  { icon: Globe, value: 'Global', label: 'Client Reach' },
  { icon: TrendingUp, value: 'CMC', label: 'Listed Projects' },
  { icon: Zap, value: 'Fast', label: 'Deployment' },
];

export default function StatsBar() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-violet-600/5 to-blue-600/5 border-y border-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
