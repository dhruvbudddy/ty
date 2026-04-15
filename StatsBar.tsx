'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Coins, FileCode2, Layers, ChartBar as BarChart3, MessageSquareCode, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Coins,
    title: 'Token Development',
    description: 'ERC-20, BEP-20, SPL and custom token creation with tokenomics design, vesting schedules, and multi-chain deployment.',
    accentColor: 'blue',
  },
  {
    icon: FileCode2,
    title: 'Smart Contract Development',
    description: 'Audited, gas-optimized smart contracts for DeFi, NFTs, DAOs, staking, and custom protocol logic.',
    accentColor: 'violet',
  },
  {
    icon: Layers,
    title: 'DApp Development',
    description: 'Full-stack decentralized applications with intuitive UIs, wallet integrations, and robust on-chain interactions.',
    accentColor: 'cyan',
  },
  {
    icon: BarChart3,
    title: 'Exchange Listings',
    description: 'Strategic CEX/DEX listing support including CoinMarketCap, CoinGecko, and top-tier exchange applications.',
    accentColor: 'green',
  },
  {
    icon: MessageSquareCode,
    title: 'Blockchain Consulting',
    description: 'Expert guidance on blockchain architecture, tokenomics strategy, regulatory compliance, and Web3 roadmap.',
    accentColor: 'amber',
  },
];

export default function HomeServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            End-to-End Blockchain Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to mainnet — we handle every layer of your blockchain product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
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
            href="/services"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
