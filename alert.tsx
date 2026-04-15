'use client';

import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  accentColor?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  accentColor = 'blue',
}: ServiceCardProps) {
  const accentMap: Record<string, string> = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400',
    violet: 'from-violet-500/20 to-violet-600/20 border-violet-500/30 text-violet-400',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 text-cyan-400',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 text-green-400',
    amber: 'from-amber-500/20 to-amber-600/20 border-amber-500/30 text-amber-400',
  };
  const accent = accentMap[accentColor] || accentMap.blue;
  const parts = accent.split(' ');
  const iconBg = `bg-gradient-to-br ${parts[0]} ${parts[1]}`;
  const iconBorder = parts[2];
  const iconColor = parts[3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="card-glass card-glass-hover p-6 group cursor-default"
    >
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} border ${iconBorder} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
