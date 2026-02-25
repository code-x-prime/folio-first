"use client"

import { Button } from "@/components/ui/button";
import { Check, CheckCircle2, FileText, ArrowLeft, MessageCircle, Clock, ShieldCheck, Download, ChevronRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/static";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ServiceDetailClient({ service, services }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="min-h-screen bg-[#FAFAFA] overflow-hidden">

            {/* LUXURY HERO HEADER */}
            <section className="relative min-h-[70vh] flex flex-col justify-end py-12 bg-[#1A1A1A] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
                        <Image
                            src={service.heroImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop"}
                            alt={service.title}
                            fill
                            className="object-cover grayscale-[0.2] rounded-2xl"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>
                </div>
                {/* Gradients & Glows */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent z-0"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[#d5ad5c]/10 to-transparent blur-3xl rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase text-[#d5ad5c]">
                            <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1">
                                <ArrowLeft className="h-4 w-4" /> All Services
                            </Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white">Service Details</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 max-w-2xl border-l-4 border-[#d5ad5c] pl-6">
                            {service.shortDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                size="lg" 
                                className="bg-[#d5ad5c] hover:bg-[#b38e4a] text-white h-16 rounded-full px-8 text-lg font-black shadow-[0_10px_20px_rgba(213,173,92,0.3)] hover:shadow-[0_15px_30px_rgba(213,173,92,0.4)] hover:-translate-y-1 transition-all flex items-center gap-3 w-full sm:w-auto"
                                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free assessment for my share/dividend recovery case. Please assist.')}`, '_blank')}
                            >
                                <MessageCircle className="h-6 w-6" strokeWidth={2.5}/> Free Assessment
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-16 rounded-full px-8 text-lg font-bold backdrop-blur-md transition-all flex items-center gap-3 w-full sm:w-auto"
                                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like to consult about my share/dividend recovery case. Please assist.')}`, '_blank')}
                            >
                                <Clock className="h-5 w-5" /> Consult Now
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* MAIN CONTENT LAYOUT */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">

                    {/* Left Body Content */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Overview */}
                        <section className="prose prose-lg max-w-3xl text-gray-600">
                            <h2 className="text-4xl font-bold text-[#232323] mb-4 tracking-tight">Overview</h2>
                            <div className="text-xl leading-relaxed font-light whitespace-pre-line text-gray-700">
                                {service.overview}
                            </div>
                        </section>

                        {/* Who Needs This */}
                        {service.whoNeeds && (
                            <section className="max-w-3xl">
                                <h2 className="text-3xl font-bold text-[#232323] mb-8 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-[#d5ad5c]/10 flex items-center justify-center text-[#d5ad5c] shadow-inner">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    Who Needs This Service?
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.whoNeeds.map((item, idx) => (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            key={idx} 
                                            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                        >
                                            <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                                                <Check className="h-4 w-4" strokeWidth={3} />
                                            </div>
                                            {typeof item === 'string' ? (
                                                <span className="text-[#232323] font-bold text-sm">{item}</span>
                                            ) : (
                                                <div>
                                                    <span className="text-[#232323] font-bold block text-sm">{item.title}</span>
                                                    <span className="text-gray-500 text-xs">{item.description}</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Benefits Grid */}
                        {service.benefits && (
                            <section className="max-w-3xl">
                                <h2 className="text-3xl font-bold text-[#232323] mb-8">Key Benefits</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.benefits.map((benefit, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                                            className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                        >
                                            {/* Hover top border gradient */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ad5c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            {/* Massive Background Index */}
                                            <div className="absolute -right-4 -bottom-4 text-8xl font-black text-gray-50 group-hover:text-gray-100 transition-colors pointer-events-none select-none z-0">
                                                0{idx + 1}
                                            </div>
                                            
                                            <div className="relative z-10">
                                                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#d5ad5c]/10 group-hover:text-[#d5ad5c] transition-colors mb-4 border border-gray-100 group-hover:border-[#d5ad5c]/30">
                                                    <TrendingUp className="h-5 w-5" />
                                                </div>
                                                {typeof benefit === 'string' ? (
                                                    <p className="text-[#232323] font-bold">{benefit}</p>
                                                ) : (
                                                    <div>
                                                        <strong className="block text-[#232323] font-bold text-lg mb-2">{benefit.title}</strong>
                                                        <p className="text-gray-500 font-light leading-relaxed">{benefit.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Document Requirements (2-Column Icon List) */}
                        <section className="max-w-3xl">
                            <h2 className="text-3xl font-bold text-[#232323] mb-8 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white shadow-inner">
                                    <FileText className="h-6 w-6" />
                                </div>
                                Required Documents
                            </h2>
                            <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                    {service.documents.map((doc, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group">
                                            <div className="h-6 w-6 rounded-full bg-[#d5ad5c]/10 flex items-center justify-center text-[#d5ad5c] shrink-0 mt-0.5 group-hover:bg-[#d5ad5c] group-hover:text-white transition-colors">
                                                <Check className="h-3 w-3" strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700 font-medium">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Premium Vertical Timeline */}
                        <section className="max-w-3xl pb-10">
                            <h2 className="text-3xl font-bold text-[#232323] mb-6">Process & Timeline</h2>
                            <div className="relative border-l-2 border-gray-200 ml-6 sm:ml-8 space-y-12">
                                {/* Glowing Timeline Line */}
                                <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-[#d5ad5c] via-[#b38e4a] to-transparent h-full origin-top origin"></div>

                                {service.process.map((step, idx) => {
                                    const title = typeof step === 'string' ? step.split(':')[0] : step.title;
                                    const desc = typeof step === 'string' ? step.split(':')[1] : step.description;
                                    const duration = typeof step === 'object' ? step.duration : null;

                                    return (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="relative group pl-8 sm:pl-12"
                                        >
                                            {/* Number Node */}
                                            <div className="absolute -left-[1.35rem] sm:-left-[1.65rem] top-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white border-4 border-[#d5ad5c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <span className="text-sm font-black text-[#232323]">{idx + 1}</span>
                                            </div>
                                            
                                            {/* Card */}
                                            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-gray-100 shadow-sm group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] group-hover:-translate-y-1 transition-all">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                    <h4 className="text-xl font-bold text-[#232323] group-hover:text-[#d5ad5c] transition-colors">{title}</h4>
                                                    {duration && (
                                                        <span className="px-4 py-1.5 bg-[#FAFAFA] text-gray-600 text-xs font-bold rounded-full border border-gray-100 w-fit flex items-center gap-2 tracking-widest uppercase">
                                                            <Clock className="w-3 h-3 text-[#d5ad5c]" /> {duration}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-gray-500 leading-relaxed font-light">{desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* FAQs */}
                        {service.faq && service.faq.length > 0 && (
                            <section className="max-w-3xl">
                                <h2 className="text-3xl font-bold text-[#232323] mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {service.faq.map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <h5 className="font-bold text-[#232323] mb-3 flex items-start gap-3 text-lg">
                                                <span className="text-[#d5ad5c] font-black text-xl">Q.</span> {item.question}
                                            </h5>
                                            <p className="text-gray-600 pl-8 font-light leading-relaxed">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Right Sticky Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 space-y-8">

                            {/* Luxury Consultation Glass Card */}
                            <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <ShieldCheck className="h-48 w-48" strokeWidth={1} />
                                </div>
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#d5ad5c]/20 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="h-16 w-16 bg-[#232323] rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner relative z-10">
                                    <ShieldCheck className="h-8 w-8 text-[#d5ad5c]" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4 tracking-tight relative z-10">Need Expert Counsel?</h3>
                                <p className="text-gray-400 mb-8 relative z-10 text-base leading-relaxed font-light">
                                    Navigate the regulatory complexities of <strong>{service.title}</strong> securely. Speak directly with our senior advisors today.
                                </p>
                                
                                <div className="space-y-4 relative z-10">
                                    <Button className="w-full bg-[#d5ad5c] hover:bg-white text-[#1A1A1A] h-14 rounded-full text-base font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all" asChild>
                                        <a href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=I need help with ${service.title}`} target="_blank" rel="noopener noreferrer">
                                            <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="mr-2" /> Chat on WhatsApp
                                        </a>
                                    </Button>
                                    <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white bg-transparent h-14 rounded-full text-base font-bold transition-all backdrop-blur-sm" asChild>
                                        <a href={`tel:${siteConfig.phone}`}>
                                            <Clock className="mr-2 h-4 w-4" /> Call {siteConfig.phone}
                                        </a>
                                    </Button>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-3 relative z-10">
                                    {["100% Confidential & Secure", "Expert Legal Support", "Rapid Processing Time"].map((badge, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                            <CheckCircle2 className="h-4 w-4 text-[#d5ad5c]" /> {badge}
                                        </div>
                                    ))}
                                </div>
                            </div>

                         

                            {/* Other Services Navigation */}
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-[#232323] mb-6 tracking-wide text-lg flex items-center gap-2">
                                    Explore Services
                                </h4>
                                <ul className="space-y-1">
                                    {services.filter(s => s.slug !== service.slug).slice(0, 5).map(s => (
                                        <li key={s.slug}>
                                            <Link href={`/services/${s.slug}`} className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                                                <span className="text-sm font-medium text-gray-600 group-hover:text-[#d5ad5c] transition-colors">{s.title}</span>
                                                <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-[#d5ad5c] transition-colors transform group-hover:translate-x-1" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* FULL WIDTH LUXURY STRIP (STANDARD BOTTOM CTA) */}
            <section className="py-12 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-gradient-to-r from-[#d5ad5c] via-[#b38e4a] to-[#d5ad5c] rounded-[2rem] p-8 md:p-12  relative overflow-hidden shadow-[0_20px_40px_rgba(213,173,92,0.3)] text-center group"
                    >
                        {/* Background floating shapes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[20px] border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[15px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out delay-100 pointer-events-none"></div>
                        
                        {/* Shine sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight text-shadow-sm">
                            Ready to Claim Your {service.title} Rights?
                        </h2>
                        <p className="text-lg md:text-xl text-yellow-50 mb-10 font-medium px-4 max-w-2xl mx-auto">
                            Don&apos;t let regulations stand in your way. Contact our premium advisory team today for a confidential, free consultation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button 
                                size="lg" 
                                className="bg-white text-[#b38e4a] hover:bg-[#FAFAFA] h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                            >
                                <MessageCircle className="h-6 w-6 text-[#25D366]" strokeWidth={2.5}/> Talk to an Expert
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-bold transition-all w-full sm:w-auto backdrop-blur-md"
                                onClick={() => window.location.href = `tel:${siteConfig.phone}`}
                            >
                                Call {siteConfig.phone}
                            </Button>
                        </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
