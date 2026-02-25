"use client"

import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, MessageCircle, Clock, CheckCircle2, ChevronRight, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/static";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ArticleDetailClient({ article, relatedArticles, readingTime, heroImage }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    
    // For sharing
    const [pageUrl, setPageUrl] = useState("");
    
    useEffect(() => {
        setPageUrl(window.location.href);
    }, []);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(article.title)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(article.title)}`
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#d5ad5c]/30 selection:text-[#232323]">

            {/* LUXURY PARALLAX HERO */}
            <section className="relative min-h-[70vh] flex flex-col justify-end pt-32 pb-20 bg-[#1A1A1A] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
                        <Image
                            src={heroImage}
                            alt={article.title}
                            fill
                            className="object-cover grayscale-[0.2] rounded-2xl"
                            priority
                            sizes="100vw"
                        />
                    </motion.div>
                </div>
                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-[#1A1A1A]/30 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent z-0"></div>
                
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 mb-8 text-sm font-bold tracking-widest uppercase text-[#d5ad5c]">
                            <Link href="/articles" className="hover:text-white transition-colors flex items-center gap-1">
                                <ArrowLeft className="h-4 w-4" /> All Insights
                            </Link>
                            <span className="text-white/30">/</span>
                            <span className="text-white">Article</span>
                        </div>

                        {/* Top Taxonomy Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="bg-[#d5ad5c] text-[#1A1A1A] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                                Finance
                            </span>
                            <span className="flex items-center gap-1.5 text-gray-300 text-sm font-medium bg-white/5 backdrop-blur-md px-4 py-1.5 border border-white/10 rounded-full">
                                <Clock className="h-4 w-4 text-[#d5ad5c]" /> {readingTime} Min Read
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            {article.title}
                        </h1>

                        {/* Bottom Meta Row */}
                        <div className="flex flex-wrap items-center gap-6 mt-auto">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-[#232323] border border-white/20 flex items-center justify-center p-0.5">
                                    <div className="w-full h-full bg-[#d5ad5c] rounded-full flex items-center justify-center text-[#1A1A1A]">
                                        <User className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">Folio First Consulting</span>
                                    <span className="text-gray-400 text-xs">Editorial Team</span>
                                </div>
                            </div>
                            
                            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
                            
                            <div className="flex items-center gap-2 text-gray-300">
                                <Calendar className="h-4 w-4 text-[#d5ad5c]" />
                                <span className="text-sm font-medium">{article.date}</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* ARTICLE CONTENT LAYOUT */}
            <section className="py-14 bg-white relative">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* LEFT: STICKY DESKTOP SHARE BAR */}
                        <div className="hidden lg:block w-20 shrink-0 relative">
                            <div className="sticky top-32 flex flex-col items-center gap-4">
                                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Share Article</span>
                                <div className="h-12 w-px bg-gray-200 my-2"></div>
                                <a href={shareLinks.facebook} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#1877F2] hover:text-[#1877F2] hover:bg-[#1877F2]/5 transition-all outline-none">
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href={shareLinks.twitter} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#1DA1F2] hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/5 transition-all outline-none">
                                    <Twitter className="h-5 w-5" fill="currentColor" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all outline-none">
                                    <Linkedin className="h-5 w-5" fill="currentColor" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* CENTER: MAIN CONTENT REPOSITORY */}
                        <article className="flex-1 max-w-3xl lg:px-4">
                            
                            {/* The Lead Intro (Drop Cap included via CSS) */}
                            <div className="text-2xl lg:text-3xl text-gray-500 font-light leading-[1.6] mb-8 tracking-tight first-letter:text-7xl first-letter:font-black first-letter:text-[#d5ad5c] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                                {article.excerpt}
                            </div>

                            {/* Rich Content Injection & Styling Engine */}
                            <div className="prose-folio w-full">
                                {article.content}
                            </div>

                            {/* MOBILE SHARE BAR (Bottom of post) */}
                            <div className="lg:hidden mt-12 pt-8 border-t border-gray-100">
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Share this article</div>
                                <div className="flex gap-4">
                                    <a href={shareLinks.facebook} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 bg-gray-50">
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a href={shareLinks.twitter} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 bg-gray-50">
                                        <Twitter className="h-5 w-5" fill="currentColor" />
                                    </a>
                                    <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 bg-gray-50">
                                        <Linkedin className="h-5 w-5" fill="currentColor" />
                                    </a>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>
            </section>

            {/* RELATED ARTICLES SECTION */}
            {relatedArticles.length > 0 && (
                <section className="py-12 bg-[#FAFAFA] border-t border-gray-100">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#232323] tracking-tight">Keep Reading</h2>
                            <Link href="/articles" className="hidden sm:flex items-center gap-2 font-bold text-[#232323] hover:text-[#d5ad5c] transition-colors group">
                                View All Insights <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedArticles.map((relArticle, index) => (
                                <Link key={relArticle.slug} href={`/articles/${relArticle.slug}`} className="group block h-full">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col relative">
                                        
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ad5c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"></div>

                                        <div className="relative h-56 overflow-hidden bg-[#1A1A1A]">
                                            <Image
                                                src={relArticle.featuredImage || "/images/placeholder.svg"}
                                                alt={relArticle.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out relative z-10 rounded-2xl"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent relative z-20 pointer-events-none opacity-80"></div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow relative z-30 bg-white">
                                            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">
                                                <Calendar className="h-3 w-3 text-[#d5ad5c]" />
                                                {relArticle.date}
                                            </div>
                                            <h3 className="text-xl font-bold text-[#232323] mb-4 leading-snug group-hover:text-[#d5ad5c] transition-colors duration-300 line-clamp-2">
                                                {relArticle.title}
                                            </h3>
                                            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-[#232323] font-bold text-sm">
                                                <span className="uppercase tracking-wider">Read Article</span>
                                                <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#d5ad5c] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1">
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        {/* Mobile view all link */}
                        <div className="mt-8 text-center sm:hidden">
                            <Link href="/articles" className="inline-flex items-center gap-2 font-bold text-[#1A1A1A] bg-white border border-gray-200 px-8 py-4 rounded-full shadow-sm">
                                View All Insights <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

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
                            Ready to Secure Your Investments?
                        </h2>
                        <p className="text-lg md:text-xl text-yellow-50 mb-10 font-medium px-4 max-w-2xl mx-auto">
                            Stop navigating complex regulations alone. Speak with an expert advisor today and get your assets recovered.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button 
                                size="lg" 
                                className="bg-white text-[#b38e4a] hover:bg-[#FAFAFA] h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`, '_blank')}
                            >
                                <MessageCircle className="h-6 w-6 text-[#25D366]" strokeWidth={2.5}/> Discuss Your Case
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
