"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, articles, faqs, siteConfig } from "@/data/static";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Users, TrendingUp, MessageCircle, Star, FileText, History, Award, Briefcase, Smile, Zap, Phone } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      source: 'Homepage - Submit Your Query',
    };

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        e.target.reset();
      } else {
        alert("Failed to send enquiry. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex items-start min-h-[88vh] pt-20 md:pt-10 pb-8 md:pb-12 overflow-hidden bg-[#FAFAFA]">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d5ad5c]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d5ad5c]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center md:items-start">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl order-1 lg:order-1 text-center lg:text-left mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#d5ad5c]/40 shadow-md mb-8">
                <span className="flex h-2 w-2 rounded-full bg-[#d5ad5c] animate-pulse"></span>
                <span className="text-sm font-semibold text-[#232323]">India&apos;s Premier Recovery Advisory</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] leading-[1.15] mb-5 tracking-tight">
                Reclaim Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5ad5c] to-yellow-600 drop-shadow-sm">Financial Legacy</span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Navigate the bureaucratic maze of IEPF claims and share transmission with India&apos;s most trusted experts. Effortless, secure, and fully guided.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#232323] to-[#3a3a3a] hover:from-[#1a1a1a] hover:to-[#232323] text-white h-13 sm:h-14 px-7 rounded-full text-base md:text-lg shadow-[0_8px_30px_rgba(35,35,35,0.25)] hover:shadow-[0_12px_40px_rgba(35,35,35,0.45)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto py-2 md:py-0"
                  onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                >
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-13 sm:h-14 px-7 rounded-full text-base md:text-lg border-2 border-[#d5ad5c]/40 hover:border-[#d5ad5c] hover:bg-[#d5ad5c]/8 hover:text-[#232323] hover:shadow-[0_4px_20px_rgba(213,173,92,0.2)] transition-all duration-300 text-[#232323] font-semibold py-2 md:py-0">
                    Explore Services
                  </Button>
                </Link>
              </div>

              <div className="mt-6 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-2 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#d5ad5c]" /> <span>99% Success Rate</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                  <ShieldCheck className="h-4 w-4 text-[#d5ad5c]" /> <span>100% Secure Process</span>
                </div>
              </div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[260px] sm:h-[380px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end order-2 lg:order-2 overflow-hidden lg:overflow-visible"
            >
              {/* Blur glow behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d5ad5c]/40 via-[#d5ad5c]/10 to-transparent blur-[80px] rounded-full scale-90"></div>

              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-md lg:max-w-lg aspect-square lg:aspect-auto lg:h-[600px]"
              >
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-3xl border border-white/60 p-2">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#232323]">
                    <Image
                      src="/images/hero-section.jpg"
                      alt="Financial Consulting Premium"
                      fill
                      className="object-cover opacity-90 mix-blend-overlay scale-110 rounded-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#232323]/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Floating badge — hidden on mobile to avoid overflow */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden sm:flex absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-white/80 items-center gap-4 z-20"
                  >
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d5ad5c]/20 to-yellow-100 flex items-center justify-center text-[#d5ad5c] shadow-inner">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Assets Recovered</p>
                      <p className="text-2xl font-black text-[#232323] tracking-tight">₹100Cr+</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR (TRUST STRIP) */}
      <div className="relative z-20 -mt-10 md:-mt-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 md:p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center">
            {[
              { icon: History, value: "10+", label: "Years Experience" },
              { icon: TrendingUp, value: "₹100Cr+", label: "Assets Recovered" },
              { icon: Briefcase, value: "1000+", label: "Successful Cases" },
              { icon: Smile, value: "99.8%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
                <div className="h-12 w-12 rounded-xl bg-[#d5ad5c]/10 flex items-center justify-center text-[#d5ad5c] group-hover:bg-[#d5ad5c] group-hover:text-white transition-all duration-300">
                  <stat.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xl md:text-3xl font-black text-[#232323] tracking-tighter">{stat.value}</div>
                  <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* TRUSTED EXPERTS SECTION */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
                <Image
                  src="/images/who-we-are.jpg"
                  alt="Experts Reviewing Documents"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232323] via-transparent to-transparent opacity-60"></div>

                {/* Decorative element */}
                <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-white/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-white/30 rounded-br-3xl"></div>
              </div>

              {/* Back shadow element */}
              <div className="absolute top-10 -right-10 w-full h-full rounded-[2.5rem] bg-[#d5ad5c]/10 -z-10 blur-xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Who We Are</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] leading-tight mb-8">
                Your Trusted Partners in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5ad5c] to-yellow-600 italic px-2">Wealth Recovery.</span>
              </h2>

              <blockquote className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light leading-snug mb-10 border-l-4 border-[#d5ad5c] pl-6 sm:pl-8 py-2 relative">
                <span className="absolute -top-4 -left-3 text-6xl text-[#d5ad5c]/20 font-serif">&quot;</span>
                We handle the complex bureaucratic maze so you can reclaim your rightful financial assets without stress or delays.
              </blockquote>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Folio First Consulting is a specialized advisory firm. We focus entirely on retrieving seemingly lost investments, dealing with physical shares, and managing IEPF claims. We bring clarity and results to a process that is famously opaque.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-[#d5ad5c]/20 pt-10">
                <div className="group">
                  <p className="text-4xl sm:text-5xl font-black text-[#232323] mb-2 font-mono tracking-tighter group-hover:text-[#d5ad5c] transition-colors duration-500">5,000<span className="text-[#d5ad5c]">+</span></p>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Families Assisted</p>
                </div>
                <div className="group">
                  <p className="text-4xl sm:text-5xl font-black text-[#232323] mb-2 font-mono tracking-tighter group-hover:text-[#d5ad5c] transition-colors duration-500">10<span className="text-[#d5ad5c]">Yrs</span></p>
                  <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Domain Expertise</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUBMIT YOUR QUERY SECTION */}
      <section className="py-10 md:py-12  bg-[#FAFAFA] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Free Assessment</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#232323] leading-tight mb-8">
                Submit Your <span className="text-[#d5ad5c] italic pr-2">Query</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Get a free expert evaluation of your case. Our specialized team will review your details and contact you within 24 hours to architect the best recovery route.
              </p>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "100% Confidential", desc: "Your data is handled with complete discretion." },
                  { icon: Award, title: "Expert Assistance", desc: "Case handled by senior recovery architects." },
                  { icon: MessageCircle, title: "24/7 Support", desc: "Status updates via WhatsApp & Phone." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-6 w-6 rounded-full bg-[#d5ad5c]/10 flex items-center justify-center text-[#d5ad5c] shrink-0 mt-1">
                      <item.icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#232323] text-sm uppercase tracking-wide">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                    <Input name="name" placeholder="Rajesh Kumar" className="h-14 bg-[#FAFAFA] border-transparent focus:border-[#d5ad5c] focus:ring-[#d5ad5c] rounded-xl px-6" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Mobile Number</label>
                    <Input name="mobile" type="tel" placeholder="+91 98765 43210" className="h-14 bg-[#FAFAFA] border-transparent focus:border-[#d5ad5c] focus:ring-[#d5ad5c] rounded-xl px-6" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                    <Input name="email" type="email" placeholder="john@example.com" className="h-14 bg-[#FAFAFA] border-transparent focus:border-[#d5ad5c] focus:ring-[#d5ad5c] rounded-xl px-6" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Service Required</label>
                    <select name="service" className="flex h-14 w-full rounded-xl border-transparent bg-[#FAFAFA] px-6 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus:border-[#d5ad5c] focus:outline-none focus:ring-2 focus:ring-[#d5ad5c] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all appearance-none cursor-pointer">
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      <option value="other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Your Message / Case Details</label>
                  <Textarea name="message" placeholder="Briefly describe your situation (company name, number of shares, folio number etc.)" className="min-h-[120px] bg-[#FAFAFA] border-transparent focus:border-[#d5ad5c] focus:ring-[#d5ad5c] rounded-xl px-6 py-4 resize-none" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 bg-[#232323] hover:bg-[#d5ad5c] text-white h-16 rounded-xl text-lg font-black shadow-xl hover:shadow-[#d5ad5c]/20 transition-all group"
                  >
                    {isSubmitting ? "Processing..." : "Submit Query"}
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    className="h-16 rounded-xl border-2 border-[#25D366] text-[#128c3e] hover:bg-[#25D366]/5 px-8 flex gap-3 font-bold"
                    onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=Hi, I have a query regarding share recovery.`, '_blank')}
                  >
                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
                    WhatsApp
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-6 opacity-60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#d5ad5c]" />
                    No Hidden Charges
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d5ad5c]" />
                    100% Secure
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                    <Users className="h-3.5 w-3.5 text-[#d5ad5c]" />
                    Expert Assistance
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Global Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 20, x: "-50%" }}
              className="fixed bottom-10 left-1/2 z-[100] bg-[#232323] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10"
            >
              <div className="h-8 w-8 rounded-full bg-[#d5ad5c]/20 flex items-center justify-center text-[#d5ad5c]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-sm">Query Received</p>
                <p className="text-gray-400 text-xs text-balance">Our team will contact you within 24 hours.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* PREMIUM SERVICES GRID */}
      <section className="py-10 md:py-12 bg-[#1A1A1A] relative overflow-hidden">
        {/* Abstract Dark Backgrounds */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#d5ad5c]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] border border-[#d5ad5c]/10 rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] border border-[#d5ad5c]/20 rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl mx-auto md:mx-0">
              <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">Comprehensive<br />Financial Solutions</h2>
            </div>
            <p className="text-gray-400 text-lg max-w-md text-center md:text-right">
              We provide end-to-end assistance for all types of share-related complexities and IEPF claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative group bg-[#232323]/50 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 hover:border-[#d5ad5c]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl ${index === 1 ? 'lg:translate-y-8' : ''} ${index === 4 ? 'lg:translate-y-8' : ''}`}
              >
                {/* Top Gold Line */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#d5ad5c] to-yellow-300 group-hover:w-full transition-all duration-700 ease-in-out"></div>

                {/* Glow behind icon */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-[#d5ad5c]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="relative z-10 h-20 w-20 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#d5ad5c]/10 group-hover:border-[#d5ad5c]/30 transition-colors shadow-inner">
                  <service.icon className="h-10 w-10 text-gray-400 group-hover:text-[#d5ad5c] transition-colors" strokeWidth={1.2} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d5ad5c] transition-colors pr-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 line-clamp-3 text-[15px]">
                  {service.shortDescription}
                </p>

                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-bold text-white hover:text-[#d5ad5c] transition-colors group/link mt-auto">
                  Explore Service
                  <span className="ml-3 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-[#d5ad5c] group-hover/link:text-[#1A1A1A] transition-colors">
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-10 md:py-12 bg-[#FAFAFA] relative overflow-hidden">
        {/* Particles / Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#d5ad5c_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-[0.05]"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">How it Works</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#232323] tracking-tight">Streamlined 4-Step<br /> Recovery Process</h2>
          </div>

          <div className="relative">
            {/* Desktop Connector Line Behind */}
            <div className="hidden lg:block absolute top-[100px] left-[12%] w-[76%] h-[2px] bg-gray-200">
              <motion.div
                className="h-full bg-gradient-to-r from-[#d5ad5c] to-yellow-600 shadow-[0_0_15px_rgba(213,173,92,0.8)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              ></motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {[
                { step: "01", title: "Consultation", desc: "Free initial assessment and roadmap generation for your specific case.", icon: MessageCircle },
                { step: "02", title: "Documentation", desc: "Gathering, drafting, and legally verifying required affidavits and forms.", icon: FileText },
                { step: "03", title: "Execution", desc: "Filing and actively liaising with IEPF authorities and tracking progress.", icon: ShieldCheck },
                { step: "04", title: "Resolution", desc: "Shares successfully credited directly to your Demat and bank accounts.", icon: CheckCircle2 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative group pt-12 lg:pt-0"
                >
                  <div className="absolute -top-12 lg:-top-16 left-0 lg:left-1/2 lg:-translate-x-1/2 text-8xl md:text-[10rem] font-black text-gray-100/80 z-0 pointer-events-none select-none transition-colors group-hover:text-[#d5ad5c]/10 tracking-tighter">
                    {item.step}
                  </div>

                  <div className="relative z-10 flex flex-col lg:items-center text-left lg:text-center mt-8 lg:mt-0">
                    <div className="h-24 w-24 rounded-[2rem] bg-white shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:shadow-[#d5ad5c]/20 transition-all duration-300 relative">
                      {/* Pulse ring on hover */}
                      <div className="absolute inset-0 rounded-[2rem] border-2 border-[#d5ad5c] opacity-0 group-hover:animate-ping"></div>
                      <item.icon className="h-10 w-10 text-[#232323] group-hover:text-[#d5ad5c] transition-colors relative z-10" strokeWidth={1.5} />
                    </div>

                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-[#232323] mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-[15px] max-w-[280px] mx-auto lg:mx-0">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (PARALLAX SPLIT) */}
      <section className="py-10 md:py-12 bg-[#1A1A1A] relative overflow-hidden text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            <div className="order-2 lg:order-1 relative z-10">
              <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">The Advantage</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight">
                Why Industry Leaders <br /><span className="text-[#d5ad5c] italic">Choose Us</span>
              </h2>

              <div className="space-y-12">
                {[
                  { title: "Bank-Grade Security", desc: "Your sensitive financial documents are protected by enterprise-level encryption and strict non-disclosure agreements." },
                  { title: "Unmatched Expertise", desc: "Our former compliance officers know exactly how to bypass common bureaucratic roadblocks." },
                  { title: "Transparent Pricing", desc: "No hidden fees. You know exactly what it costs from day one, tied closely to successful outcomes." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="mt-2 h-4 w-4 rounded-full bg-[#d5ad5c] shadow-[0_0_20px_rgba(213,173,92,0.6)] shrink-0 group-hover:scale-[2] group-hover:bg-white transition-all duration-500"></div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d5ad5c] transition-colors">{feature.title}</h4>
                      <p className="text-gray-400 text-lg leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[600px] lg:h-[800px] rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              {/* Parallax Image Wrapper */}
              <motion.div
                style={{ y }}
                className="absolute -inset-[25%] w-[150%] h-[150%]"
              >
                <Image
                  src="/images/why-choose.jpg"
                  alt="Corporate Architecture"
                  fill
                  className="object-cover opacity-50 contrast-125 saturate-50 mix-blend-luminosity rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-transparent to-transparent opacity-90"></div>

              {/* Overlay Glass Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-10 left-6 right-6 lg:left-12 lg:right-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2rem] hover:bg-white/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-6 h-6 text-[#d5ad5c] fill-[#d5ad5c] drop-shadow-md" />)}
                  </div>
                  <span className="text-white font-black text-xl">5.0</span>
                </div>
                <p className="text-gray-100 text-xl font-medium leading-relaxed italic">&quot;They recovered my grandfather&apos;s lost shares in less than half the estimated time. Exceptional service and total transparency.&quot;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 border border-white/30"></div>
                  <div>
                    <p className="font-bold text-white">Rahul Sharma</p>
                    <p className="text-[#d5ad5c] text-sm font-bold uppercase tracking-wider">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ARTICLES / KNOWLEDGE HUB */}
      <section className="py-10 md:py-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Insights</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#232323] tracking-tight">Latest Financial Intel</h2>
            </div>
            <Link href="/articles">
              <Button variant="outline" className="rounded-full border-[#232323] text-[#232323] hover:bg-[#232323] hover:text-white px-10 h-14 text-lg font-bold">
                View All Articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured Large Article */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 group rounded-[2.5rem] overflow-hidden relative h-[500px] lg:h-[650px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <Link href={`/articles/${articles[0].slug}`} className="block w-full h-full relative z-10">
                <Image
                  src={articles[0].featuredImage}
                  alt={articles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 1000px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="px-5 py-2 rounded-full bg-[#d5ad5c] text-[#232323] text-sm font-black uppercase tracking-wider">{articles[0].date}</span>
                    <span className="text-white/80 text-sm font-bold flex items-center gap-1.5 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full"><Clock className="w-4 h-4" /> 5 min read</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 line-clamp-3 leading-[1.15] group-hover:text-[#d5ad5c] transition-colors">{articles[0].title}</h3>
                  <p className="text-gray-300 text-lg line-clamp-2 mb-8 max-w-2xl font-light">{articles[0].excerpt}</p>
                  <span className="text-white font-bold flex items-center gap-3 text-lg group-hover:gap-5 transition-all">
                    Read Full Article
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#d5ad5c]">
                      <ArrowRight className="w-5 h-5 text-white group-hover:text-[#1A1A1A]" />
                    </div>
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Smaller Articles */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {articles.slice(1, 3).map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group rounded-[2.5rem] overflow-hidden relative h-[300px] lg:h-[calc(325px-1rem)] shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white"
                >
                  <Link href={`/articles/${article.slug}`} className="block w-full h-full p-8 md:p-10 flex flex-col justify-end relative z-10 border border-gray-100 group-hover:border-[#d5ad5c]/30 transition-colors">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden  transition-opacity duration-700 pointer-events-none -z-10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 rounded-2xl"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                    </div>

                    <div className="flex flex-col h-full z-20">
                      <div className="flex items-center gap-3 mb-auto">
                        <span className="text-[#d5ad5c] text-sm font-black uppercase tracking-wider text-white transition-colors">{article.date}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#232323] mb-4 line-clamp-3 leading-snug text-white transition-colors">{article.title}</h3>
                        <span className="text-[#232323] font-bold flex items-center gap-2 text-[#d5ad5c] transition-colors">Read Article <ArrowRight className="w-4 h-4" /></span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-12 bg-[#FAFAFA] border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Clear Answers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] tracking-tight">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#d5ad5c]/15">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0 px-2 sm:px-4">
                <AccordionTrigger className="text-left text-xl font-bold text-[#232323] hover:text-[#d5ad5c] py-8 leading-snug hover:no-underline [&[data-state=open]]:text-[#d5ad5c]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* LUXURY CTA STRIP */}
      <section className="py-10 md:py-12 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-br from-[#c9a045] via-[#d5ad5c] to-[#e8c97a] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_25px_60px_rgba(213,173,92,0.4)] text-center group border border-[#e8c97a]/20"
          >
            {/* Background floating shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[20px] border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[15px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out delay-100 pointer-events-none"></div>

            {/* Shine sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight text-shadow-sm">
                Stop Waiting. <br />Start Recovering Your Wealth Now.
              </h2>
              <p className="text-lg md:text-xl text-yellow-50 mb-10 font-medium px-4 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have successfully reclaimed their dormant assets with Folio First Consulting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-[#b38e4a] hover:bg-[#FAFAFA] h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                  onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} /> Talk to an Expert
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-bold transition-all w-full sm:w-auto backdrop-blur-md"
                  asChild
                >
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
