"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { siteConfig, services } from '@/data/static';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Articles & Insights', href: '/articles' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const WhatsAppLink = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`;

  return (
    <footer className="relative bg-[#1A1A1A] text-gray-300 pt-16 md:pt-24 border-t-2 border-yellow-500/20 overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* TOP CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl p-8 md:p-12 mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)] group"
        >
          {/* CTA Background Shine Effect */}
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out skew-x-12"></div>

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Start Your Share Recovery Process Today
            </h3>
            <p className="text-yellow-50 font-medium text-lg flex items-center justify-center md:justify-start gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Trusted by 5000+ Investors Nationwide
            </p>
          </div>

          <a
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0"
          >
            <button className="bg-white text-yellow-600 hover:text-yellow-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
              <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
              WhatsApp Now
            </button>
          </a>
        </motion.div>

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative w-48 h-16 ">
              <Image
                src="/Foliofirst-Logo2.png"
                alt="Folio First Consulting"
                fill
                className="object-contain object-left scale-90"
              />
            </div>
            <p className="leading-relaxed text-gray-400 text-[15px] pr-4">
              India&apos;s premier advisory firm dedicated to resolving complex share-related issues. We specialize in IEPF recovery, share transmission, and dematerialisation services across India.
            </p>

            {/* Social Links - Facebook, Twitter/X, LinkedIn, Instagram */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Facebook', Icon: FaFacebookF, href: siteConfig.socials?.facebook || '#' },
                { name: 'X (Twitter)', Icon: FaXTwitter, href: siteConfig.socials?.twitter || '#' },
                { name: 'LinkedIn', Icon: FaLinkedinIn, href: siteConfig.socials?.linkedin || '#' },
                { name: 'Instagram', Icon: FaInstagram, href: siteConfig.socials?.instagram || '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/50 hover:text-yellow-400 transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:pl-8"
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-yellow-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-yellow-500" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-yellow-500 rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-yellow-500" />
                    <span className="group-hover:translate-x-1 transition-transform line-clamp-1">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h4 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-yellow-500 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="pt-2 text-gray-400 text-[15px] leading-snug">
                  {siteConfig.address}
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-white transition-colors pt-1">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="h-10 w-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-yellow-500/20 group-hover:border-yellow-500/50 group-hover:text-yellow-400 transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white transition-colors pt-1 break-all">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-white/10 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
            <p className="text-center md:text-left">
              &copy; {currentYear} Folio First Consulting. All rights reserved.
            </p>
            <nav aria-label="Footer legal links" className="flex items-center gap-1">
              <Link
                href="/privacy-policy"
                className="px-3 py-2 rounded-md hover:text-[#d5ad5c] hover:bg-white/5 transition-all duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-white/20 select-none">|</span>
              <Link
                href="/terms-of-service"
                className="px-3 py-2 rounded-md hover:text-[#d5ad5c] hover:bg-white/5 transition-all duration-200 font-medium"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
