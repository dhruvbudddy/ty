'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-blue-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/6 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px]"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Premier Blockchain Development Company</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">Building the Future</span>
          <br />
          <span className="gradient-text">of Web3,</span>
          <br />
          <span className="text-white">One Block at a Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help startups and enterprises launch powerful blockchain solutions &mdash; from tokens to full-scale decentralized ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gradient flex items-center gap-2 text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            <span className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Start Your Project
            </span>
          </Link>
          <Link href="/contact" className="btn-outline flex items-center gap-2 text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            <Phone className="w-4 h-4" />
            Book a Consultation
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center justify-center gap-3 text-sm text-gray-500"
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#080C14] bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span>Trusted by 60+ global clients</span>
          <span className="text-yellow-400">★★★★★</span>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
