"use client"

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { services, siteConfig } from "@/data/static";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Services() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] overflow-hidden">

            {/* PAGE HEADER */}
            <section className="relative min-h-[40vh] flex items-center py-12 bg-[#1A1A1A] overflow-hidden text-center justify-center">
                {/* Background Gradients & Particles */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d5ad5c]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d5ad5c]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 mx-auto">
                            <span className="flex h-2 w-2 rounded-full bg-[#d5ad5c] animate-pulse"></span>
                            <span className="text-sm font-bold text-[#d5ad5c] tracking-widest uppercase">Expert Solutions</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Comprehensive <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5ad5c] via-yellow-400 to-[#d5ad5c] italic pr-2">Financial Solutions</span>
                        </h1>

                        <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-2">
                            Elite advisory for share recovery, transmission, and dematerialisation. We navigate the complexities so you can secure your legacy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="py-10 md:py-12  relative">
                {/* Subtle gradient background transition */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1A1A1A]/5 to-transparent -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                            >
                                {/* IMAGE SIDE */}
                                <div className="w-full lg:w-1/2">
                                    <Link href={`/services/${service.slug}`} className="block group relative">
                                        <div className="bg-[#1A1A1A] rounded-2xl aspect-[4/3] w-full relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-2 sm:border-4 border-white">

                                            {/* Glow behind image on hover */}
                                            <div className="absolute inset-0 bg-[#d5ad5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0"></div>

                                            <Image
                                                src={service.heroImage || "/images/placeholder.svg"}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out relative z-10 rounded-2xl"
                                                sizes="(max-width: 1024px) 100vw, 600px"
                                            />

                                            {/* Gradient dark overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent relative z-20 group-hover:opacity-80 transition-opacity duration-500"></div>

                                            {/* Glass Floating Badge */}
                                            <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 h-20 w-20 bg-white/10 backdrop-blur-xl rounded-[1.5rem] flex items-center justify-center text-white border border-white/20 shadow-2xl relative z-30 group-hover:-translate-y-2 group-hover:bg-[#d5ad5c] group-hover:border-[#d5ad5c] group-hover:text-[#1A1A1A] transition-all duration-500">
                                                <service.icon className="h-10 w-10" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* CONTENT SIDE */}
                                <div className="w-full lg:w-1/2 text-center lg:text-left">
                                    <span className="inline-block text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-4">Service {String(index + 1).padStart(2, '0')}</span>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-5 leading-[1.15] tracking-tight hover:text-[#d5ad5c] transition-colors duration-300">
                                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                    </h2>

                                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl mx-auto lg:mx-0">
                                        {service.shortDescription}
                                    </p>

                                    <div className="space-y-6 mb-12 max-w-lg mx-auto lg:mx-0 text-left">
                                        {/* Divider */}
                                        <div className="flex items-center gap-4">
                                            <div className="h-[2px] w-12 bg-gradient-to-r from-[#d5ad5c] to-transparent rounded-full"></div>
                                            <h4 className="font-bold text-[#232323] text-lg uppercase tracking-wider text-sm">Key Benefits</h4>
                                        </div>

                                        {/* Premium Pills */}
                                        <ul className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                            {service.benefits.slice(0, 4).map((benefit, i) => {
                                                const benefitText = typeof benefit === 'string' ? benefit : (benefit.title || benefit.description);
                                                return (
                                                    <li key={i} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-gray-100 shadow-sm hover:border-[#d5ad5c]/40 hover:shadow-md transition-all duration-300 group">
                                                        <span className="h-2 w-2 rounded-full bg-[#d5ad5c] group-hover:scale-150 transition-transform shrink-0"></span>
                                                        <span className="text-sm font-bold text-gray-700 max-w-[200px] truncate">{benefitText}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="bg-[#232323] hover:bg-[#d5ad5c] text-white hover:text-white h-14 md:h-16 rounded-full px-8 md:px-10 text-base md:text-lg font-bold shadow-[0_10px_20px_rgba(35,35,35,0.15)] hover:shadow-[0_15px_30px_rgba(213,173,92,0.3)] hover:-translate-y-1 transition-all group w-full sm:w-auto"
                                        asChild
                                    >
                                        <Link href={`/services/${service.slug}`}>
                                            Explore Details
                                            <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LUXURY CTA STRIP */}
            <section className="py-10 md:py-12 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full bg-gradient-to-r from-[#d5ad5c] via-[#b38e4a] to-[#d5ad5c] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_40px_rgba(213,173,92,0.3)] text-center group"
                    >
                        {/* Background floating shapes */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[20px] border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[15px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-1000 ease-in-out delay-100 pointer-events-none"></div>

                        {/* Shine sweep */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight text-shadow-sm">
                                Not Sure Which <br />Service You Need?
                            </h2>
                            <p className="text-lg md:text-xl text-yellow-50 mb-10 font-medium px-4 max-w-3xl mx-auto">
                                Every case is entirely unique. Speak directly with our senior experts to assess your specific situation and architect the best recovery route.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#b38e4a] hover:bg-[#FAFAFA] h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                                    onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                                >
                                    <MessageCircle className="h-6 w-6 text-[#25D366]" strokeWidth={2.5} /> Free Assessment
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
    )
}
