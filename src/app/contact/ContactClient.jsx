"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/static";
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function ContactClient() {
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.target);
        const data = {
            name: `${formData.get('firstName')} ${formData.get('lastName')}`,
            mobile: formData.get('mobile'),
            email: formData.get('email'),
            service: 'Contact Page Inquiry',
            message: formData.get('message'),
            source: 'Contact Page',
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
        <div className="min-h-screen bg-[#FAFAFA] overflow-hidden">

            {/* ── LUXURY HERO SECTION ── */}
            <section className="relative min-h-[50vh] md:min-h-[40vh] flex items-center py-12 bg-[#1A1A1A] overflow-hidden text-center justify-center">
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                {/* Top-right gold glow */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-[#d5ad5c]/25 to-transparent blur-[100px] pointer-events-none"
                />
                {/* Bottom-left glow */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#d5ad5c]/15 to-transparent blur-[80px] pointer-events-none"
                />

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg">
                            <span className="flex h-2 w-2 rounded-full bg-[#d5ad5c] animate-pulse"></span>
                            <span className="text-sm font-bold text-[#d5ad5c] tracking-widest uppercase">Free Consultation</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tight drop-shadow-lg">
                            Let&apos;s Discuss <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5ad5c] via-yellow-400 to-[#d5ad5c] italic pr-2">Your Case</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-8 px-2">
                            Have questions about IEPF recovery, share transmission or dematerialisation? Our experts are standing by to help.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {["100% Confidential", "Expert Assistance", "Fast Response"].map((badge, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold text-white">
                                    <CheckCircle2 className="h-4 w-4 text-[#d5ad5c]" />
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── MAIN CONTENT LAYOUT ── */}
            <section className="py-10 md:py-14">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* ── LEFT: INFO PANEL ── */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                            className="lg:col-span-5 space-y-8"
                        >
                            <motion.div variants={fadeUp}>
                                <div className="text-sm font-bold text-[#d5ad5c] tracking-widest uppercase mb-4">Our Services</div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#232323] leading-[1.15] tracking-tight mb-5">
                                    Free Consultation<br />With Our Experts
                                </h2>
                                <p className="text-gray-500 text-xl font-light leading-relaxed">
                                    Whether you&apos;re recovering unclaimed dividends, transferring inherited shares, or dematerialising your portfolio — we provide targeted, discreet, and expert-led guidance.
                                </p>
                            </motion.div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {[
                                    { icon: <Phone className="h-5 w-5" />, title: "WhatsApp", content: "Chat with us", link: `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}` },
                                    { icon: <Mail className="h-5 w-5" />, title: "Email Us", content: siteConfig.email, link: `mailto:${siteConfig.email}` },
                                    { icon: <MapPin className="h-5 w-5" />, title: "Visit Us", content: siteConfig.address, link: null },
                                    { icon: <Clock className="h-5 w-5" />, title: "Business Hours", content: "Mon – Sat: 10:00 AM – 7:00 PM", link: null },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={fadeUp} custom={i}>
                                        <div className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300">
                                            <div className="h-12 w-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#d5ad5c] group-hover:text-white group-hover:border-[#d5ad5c] group-hover:shadow-[0_6px_16px_rgba(213,173,92,0.35)] transition-all duration-300 shrink-0">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</div>
                                                {item.link ? (
                                                    <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="font-bold text-[#232323] hover:text-[#d5ad5c] transition-colors text-base">
                                                        {item.content}
                                                    </a>
                                                ) : (
                                                    <p className="font-bold text-[#232323] text-base">{item.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* ── WHATSAPP CONVERSION BLOCK ── */}
                            <motion.div variants={fadeUp} custom={5}>
                                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#25D366] via-[#1aad51] to-[#128c3e] p-8 shadow-[0_20px_40px_rgba(37,211,102,0.25)]">
                                    {/* Glow rings */}
                                    <div className="absolute -top-16 -right-16 w-48 h-48 border-[16px] border-white/10 rounded-full pointer-events-none"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 border-[10px] border-white/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                                    <div className="flex items-start gap-6 relative z-10">
                                        <div className="h-16 w-16 bg-white/15 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-inner">
                                           <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-full mb-3">
                                                <Zap className="h-3 w-3" /> Instant Response in 5 Minutes
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-2">Prefer WhatsApp?</h3>
                                            <p className="text-green-100 text-sm mb-5 font-light">Chat directly with our recovery experts — no waiting, no IVR.</p>
                                            <button
                                                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                                                className="relative bg-white text-[#128c3e] font-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 animate-[pulse_3s_ease-in-out_infinite]"
                                            >
                                                <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="mr-2" /> Chat on WhatsApp Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── RIGHT: PREMIUM CONTACT FORM ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.97 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-7 relative"
                        >
                            {/* Blurred background art */}
                            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#d5ad5c]/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#d5ad5c]/8 rounded-full blur-2xl pointer-events-none"></div>

                            <div className="relative bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.07)] border border-gray-100 p-6 md:p-10 lg:p-12">
                                
                                {/* Average Response Banner */}
                                <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-7">
                                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>
                                    <span className="text-sm font-bold text-green-800">Average response time: <span className="text-green-600">10 minutes</span></span>
                                </div>

                                <h3 className="text-3xl font-black text-[#232323] mb-2 tracking-tight">Send Us a Message</h3>
                                <p className="text-gray-400 font-light mb-10">We&apos;ll get back to you within the hour.</p>

                                <form className="space-y-6" onSubmit={handleFormSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600 tracking-wide">First Name</label>
                                            <Input 
                                                name="firstName"
                                                placeholder="Rajesh" 
                                                className="h-12 md:h-14 bg-[#FAFAFA] border-gray-200 focus:border-[#d5ad5c] focus:ring-2 focus:ring-[#d5ad5c]/20 rounded-xl text-base transition-all duration-200 placeholder:text-gray-300" 
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600 tracking-wide">Last Name</label>
                                            <Input 
                                                name="lastName"
                                                placeholder="Kumar" 
                                                className="h-12 md:h-14 bg-[#FAFAFA] border-gray-200 focus:border-[#d5ad5c] focus:ring-2 focus:ring-[#d5ad5c]/20 rounded-xl text-base transition-all duration-200 placeholder:text-gray-300" 
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600 tracking-wide">Email Address</label>
                                        <Input 
                                            name="email"
                                            type="email" 
                                            placeholder="rajesh@example.com" 
                                            className="h-12 md:h-14 bg-[#FAFAFA] border-gray-200 focus:border-[#d5ad5c] focus:ring-2 focus:ring-[#d5ad5c]/20 rounded-xl text-base transition-all duration-200 placeholder:text-gray-300" 
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600 tracking-wide">Phone Number</label>
                                        <Input 
                                            name="mobile"
                                            type="tel" 
                                            placeholder="+91 98765 43210" 
                                            className="h-12 md:h-14 bg-[#FAFAFA] border-gray-200 focus:border-[#d5ad5c] focus:ring-2 focus:ring-[#d5ad5c]/20 rounded-xl text-base transition-all duration-200 placeholder:text-gray-300" 
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600 tracking-wide">Your Message</label>
                                        <Textarea 
                                            name="message"
                                            placeholder="Tell us about your query — share details about your case so we can help faster." 
                                            className="min-h-[130px] md:min-h-[160px] bg-[#FAFAFA] border-gray-200 focus:border-[#d5ad5c] focus:ring-2 focus:ring-[#d5ad5c]/20 rounded-xl text-base resize-none transition-all duration-200 placeholder:text-gray-300" 
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full h-14 md:h-16 rounded-xl bg-gradient-to-r from-[#d5ad5c] via-[#b38e4a] to-[#d5ad5c] text-white font-black text-base md:text-lg shadow-[0_10px_20px_rgba(213,173,92,0.35)] hover:shadow-[0_15px_30px_rgba(213,173,92,0.5)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <motion.div
                                            animate={isSubmitting ? { x: [0, 10, 0], opacity: [1, 0, 1] } : {}}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <Send className="h-5 w-5" />
                                        </motion.div>
                                    </motion.button>

                                    {/* Security notice */}
                                    <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
                                        <ShieldCheck className="h-4 w-4 text-[#d5ad5c]" />
                                        Your data is 100% secure and confidential.
                                    </p>
                                </form>

                                {/* Trust Mini Badges */}
                                <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                                    {[
                                        { stat: "500+", label: "Cases Resolved" },
                                        { stat: "₹100Cr+", label: "Wealth Recovered" },
                                        { stat: "10+", label: "Years Experience" },
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="text-xl font-black text-[#232323]">{item.stat}</div>
                                            <div className="text-xs text-gray-400 mt-1 font-medium">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MAP SECTION ── */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 h-[320px] md:h-[420px]">
                        {/* Embedded Google Maps iframe */}
                        <iframe
                            title="Folio First Consulting Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112217.47211100656!2d76.953179!3d28.463371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5e3415acc6737!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        {/* Floating Info Card */}
                        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-4 md:p-6 max-w-[220px] md:max-w-xs z-10 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 bg-[#d5ad5c]/10 rounded-xl flex items-center justify-center text-[#d5ad5c]">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="font-black text-[#232323] text-sm">Folio First Consulting</div>
                                    <div className="text-xs text-gray-400">Corporate Office</div>
                                </div>
                            </div>
                            <div className="space-y-2.5 text-sm">
                                <div className="flex items-start gap-2 text-gray-600">
                                    <MapPin className="h-4 w-4 text-[#d5ad5c] shrink-0 mt-0.5" />
                                    <span>{siteConfig.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="h-4 w-4 text-[#d5ad5c] shrink-0" />
                                    <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                                </div>
                            </div>
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 flex items-center justify-center gap-2 w-full bg-[#d5ad5c] hover:bg-[#b38e4a] text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-sm"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

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
                            <p className="font-bold text-sm">Message Sent</p>
                            <p className="text-gray-400 text-xs text-balance">Thank you! We&apos;ll contact you shortly.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
