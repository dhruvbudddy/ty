import Link from 'next/link';
import { Zap, Mail, Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/directors-desk', label: "Director's Desk" },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Token Development',
  'Smart Contract Audit',
  'DApp Development',
  'Exchange Listings',
  'Blockchain Consulting',
  'Web3 Integration',
];

export default function Footer() {
  return (
    <footer className="relative bg-[#06090F] border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-violet-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 blur-md opacity-40" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Luminic</span>
                <span className="gradient-text"> Labs</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the decentralized future, block by block. Your trusted blockchain development partner in India.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>India</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@luminiclabs.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  info@luminiclabs.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:luminiclabs@gmail.com"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  luminiclabs@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/916201051548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-green-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  +91 6201051548 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="tel:+919905915043"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  +91 9905915043
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; 2025 Luminic Labs Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
