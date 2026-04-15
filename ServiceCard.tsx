'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'RealLink',
    description: 'A real estate tokenization platform connecting property assets to blockchain for fractionalized ownership.',
    network: 'CoinMarketCap Listed',
    networkType: 'cmc' as const,
    link: 'https://coinmarketcap.com',
    topBorderClass: 'top-border-green',
  },
  {
    name: 'IDOL (MEET48)',
    description: 'Fan engagement token for the MEET48 idol economy, driving community governance and reward distribution.',
    network: 'CoinMarketCap Listed',
    networkType: 'cmc' as const,
    link: 'https://coinmarketcap.com',
    topBorderClass: 'top-border-green',
  },
  {
    name: 'SpaceCoin',
    description: 'Space-themed utility token with deflationary mechanics, staking rewards, and galactic gamification.',
    network: 'CoinMarketCap Listed',
    networkType: 'cmc' as const,
    link: 'https://coinmarketcap.com',
    topBorderClass: 'top-border-green',
  },
  {
    name: 'Astra AI',
    description: 'AI-powered DeFi protocol on Ethereum offering predictive trading signals and automated portfolio management.',
    network: 'Ethereum Mainnet',
    networkType: 'eth' as const,
    link: 'https://dexscreener.com',
    topBorderClass: 'top-border-blue',
  },
  {
    name: 'Vader AI',
    description: 'Autonomous trading agent on Base network combining LLM intelligence with on-chain execution strategies.',
    network: 'Base Network',
    networkType: 'base' as const,
    link: 'https://dexscreener.com',
    topBorderClass: 'top-border-violet',
  },
];

export default function HomeProjectsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-violet-400 text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Work, On-Chain
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Live projects that prove our capabilities — listed on major platforms and trading on DEXs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/portfolio"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
