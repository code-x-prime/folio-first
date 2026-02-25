"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services, siteConfig } from '@/data/static';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', isMega: true },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use only first 5 services for mega menu as requested
  const megaMenuServices = services.slice(0, 5);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
  
      <header className="sticky top-0 z-50 w-full flex flex-col transition-all duration-300">
        
        {/* Top Bar - hides on scroll to reduce height */}
        <div 
          className={cn(
            "bg-[#232323] text-white/90 text-[11px] md:text-xs font-medium w-full transition-all duration-300 overflow-hidden hidden sm:block",
            isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"
          )}
        >
          <div className="container mx-auto px-4 md:px-6 h-full flex justify-between items-center">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </a>
              <span className="w-px h-3 bg-white/20"></span>
              <a 
                href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Quick Link
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div 
          className={cn(
            "w-full transition-all duration-500 relative",
            isScrolled 
              ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 sm:py-4 border-b border-yellow-500/20" 
              : "bg-transparent py-4 sm:py-6"
          )}
        >
          {/* Subtle gold bottom gradient line on scroll */}
          <div 
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent transition-opacity duration-500"
            style={{ opacity: isScrolled ? 1 : 0 }}
          />

          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
            
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 group">
              <div 
                className={cn(
                  "relative transition-all duration-500 ease-in-out", 
                  isScrolled ? "w-36 sm:w-44 h-10 sm:h-12" : "w-44 sm:w-52 h-12 sm:h-14"
                )}
              >
                <Image 
                  src="/Foliofirst-Logo.png" 
                  alt="Folio First Consulting" 
                  fill
                  className="object-contain object-left group-hover:opacity-90 transition-opacity" 
                  priority 
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group h-full"
                  onMouseEnter={() => link.isMega && setMegaMenuOpen(true)}
                  onMouseLeave={() => link.isMega && setMegaMenuOpen(false)}
                >
                  <Link 
                    href={link.href} 
                    className={cn(
                      "flex items-center gap-1 text-[15px] font-semibold transition-colors py-2",
                      pathname === link.href || (link.isMega && pathname.startsWith('/services')) 
                        ? "text-primary" 
                        : "text-gray-800 hover:text-primary"
                    )}
                  >
                    {link.name}
                    {link.isMega && (
                      <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Animated Hover Underline Component */}
                  <span 
                    className={cn(
                      "absolute -bottom-[2px] left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 ease-out group-hover:w-full",
                      pathname === link.href ? "w-full" : ""
                    )}
                  />

                  {/* Mega Menu Dropdown */}
                  {link.isMega && (
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className={cn("fixed left-0 right-0 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 z-50  cursor-default pointer-events-none", isScrolled ? "top-[50px]" : "top-[100px]")}
                        >
                          <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white p-6 ring-1 ring-yellow-500/20 pointer-events-auto">
                            
                            {/* Glass overlay subtle glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 relative z-10">
                              {megaMenuServices.map((service, idx) => (
                                <Link 
                                  key={service.slug} 
                                  href={`/services/${service.slug}`}
                                  className="group/card flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/80 hover:shadow-[0_4px_20px_-4px_rgba(212,175,55,0.15)] transition-all duration-300 border border-transparent hover:border-yellow-500/30"
                                >
                                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-50 to-orange-50 text-yellow-600 shadow-sm border border-yellow-100 flex items-center justify-center shrink-0 group-hover/card:scale-110 group-hover/card:shadow-md transition-all duration-300">
                                    <service.icon className="h-6 w-6" strokeWidth={1.5} />
                                  </div>
                                  <div className="transform group-hover/card:translate-x-1 transition-transform duration-300">
                                    <h4 className="text-[15px] font-bold text-gray-900 group-hover/card:text-primary transition-colors leading-tight">
                                      {service.title}
                                    </h4>
                                    <p className="text-[13px] text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                                      {service.shortDescription}
                                    </p>
                                  </div>
                                </Link>
                              ))}

                              {/* View All Services Card CTA */}
                              <Link 
                                href="/services"
                                className="group/card flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-yellow-50/50 hover:to-orange-50/50 transition-all duration-300 border border-gray-200 hover:border-yellow-500/30 hover:shadow-sm"
                              >
                                <div>
                                  <span className="text-sm font-bold text-gray-900 group-hover/card:text-primary transition-colors block">
                                    View All Services
                                  </span>
                                  <span className="text-xs text-gray-500 mt-1 block">
                                    Explore our complete portfolio
                                  </span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                                  <ArrowRight className="h-4 w-4 text-primary" strokeWidth={2} />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center ml-4">
              <Link href="/contact" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <button className="relative px-7 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold rounded-full shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2">
                  Talk to Expert
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle button */}
            <button 
              className="lg:hidden relative z-50 p-2 -mr-2 text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-7 w-7" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-7 w-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%", borderTopLeftRadius: "100%" }}
              animate={{ x: 0, borderTopLeftRadius: 0 }}
              exit={{ x: "100%", borderTopLeftRadius: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.1)] flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Navigation Links Staggered Animation */}
              <div className="flex flex-col gap-6 relative z-10">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                    transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link 
                      href={link.href}
                      className="text-[22px] font-bold text-gray-800 hover:text-primary flex items-center justify-between group"
                    >
                      {link.name}
                      {link.isMega && <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />}
                    </Link>
                    
                    {/* Nested Mobile Mega Menu Links */}
                    {link.isMega && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: (i * 0.1) + 0.2, duration: 0.3 }}
                        className="mt-4 flex flex-col gap-3.5 pl-5 border-l-2 border-yellow-500/20"
                      >
                        {megaMenuServices.map((service) => (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="text-[15px] text-gray-600 font-medium hover:text-primary"
                          >
                            {service.title}
                          </Link>
                        ))}
                        <Link 
                          href="/services"
                          className="text-[15px] text-primary font-bold mt-2 flex items-center gap-1"
                        >
                          View All Services
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Bottom Contact / CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-auto pt-10 flex flex-col gap-5 relative z-10"
              >
                <div className="bg-gray-50 rounded-2xl p-4 flex flex-col gap-3 border border-gray-100/80 shadow-inner">
                  <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    {siteConfig.email}
                  </a>
                </div>

                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-[0_8px_20px_rgba(212,175,55,0.25)] text-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                    Talk to Expert
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </motion.div>

              {/* Mobile decorative background element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-tl-full -z-10 blur-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
