'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  network: string;
  networkType: 'eth' | 'base' | 'bnb' | 'cmc';
  link: string;
  index?: number;
  topBorderClass?: string;
}

const networkColors: Record<string, { badge: string; glow: string }> = {
  eth: {
    badge: 'network-badge-eth',
    glow: 'hover:border-blue-500/40 hover:shadow-blue-500/10',
  },
  base: {
    badge: 'network-badge-base',
    glow: 'hover:border-violet-500/40 hover:shadow-violet-500/10',
  },
  bnb: {
    badge: 'network-badge-bnb',
    glow: 'hover:border-yellow-500/40 hover:shadow-yellow-500/10',
  },
  cmc: {
    badge: 'network-badge-cmc',
    glow: 'hover:border-green-500/40 hover:shadow-green-500/10',
  },
};

export default function ProjectCard({
  name,
  description,
  network,
  networkType,
  link,
  index = 0,
  topBorderClass = 'top-border-blue',
}: ProjectCardProps) {
  const colors = networkColors[networkType];

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`block card-glass ${topBorderClass} p-6 group border border-white/8 hover:border-opacity-60 ${colors.glow} hover:shadow-lg transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
          {name}
        </h3>
        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0 mt-1" />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {network}
        </span>
        <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
          <ExternalLink className="w-3 h-3" />
          View Live
        </span>
      </div>
    </motion.a>
  );
}
