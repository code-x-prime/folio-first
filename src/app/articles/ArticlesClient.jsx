"use client"

import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/static";
import { ArrowRight, Calendar, Search, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Articles() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Search State (UI functionality added)
    const [searchQuery, setSearchQuery] = useState("");

    // Filter articles based on search — split query into words for multi-word matching
    const filteredArticles = articles.filter(article => {
        const haystack = (article.title + ' ' + article.excerpt).toLowerCase();
        const words = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
        return words.length === 0 || words.every(word => haystack.includes(word));
    });

    const featuredArticle = filteredArticles[0];
    const gridArticles = filteredArticles.slice(1);

    return (
        <div className="min-h-screen bg-[#FAFAFA] overflow-hidden">

            {/* COMPACT SEARCH HERO */}
            <section className="relative flex items-center py-8 pt-28 bg-[#1A1A1A] overflow-hidden text-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                {/* Radial Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#d5ad5c]/20 to-transparent blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                ></motion.div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl w-full"
                    >
                        {/* PREMIUM SEARCH BAR (Glassmorphism) */}
                        <div className="relative max-w-2xl mx-auto group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#d5ad5c] to-yellow-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 shadow-2xl focus-within:border-[#d5ad5c]/50 focus-within:bg-white/15 transition-all duration-300">
                                <div className="pl-6 text-gray-400">
                                    <Search className="h-6 w-6" strokeWidth={2} />
                                </div>
                                <Input
                                    placeholder="Search by keyword, topic, or regulation..."
                                    className="flex-1 bg-transparent border-0 text-white placeholder:text-gray-500 text-lg h-14 focus-visible:ring-0 focus-visible:ring-offset-0 px-4"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="bg-[#d5ad5c] hover:bg-[#b38e4a] text-[#1A1A1A] px-8 h-14 rounded-full font-bold text-lg transition-colors shadow-lg shadow-[#d5ad5c]/20">
                                    Search
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            <section className="py-10 md:py-12 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    {/* Empty State */}
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-20 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
                            <Search className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-[#232323] mb-4">No insights found</h3>
                            <p className="text-gray-500 text-xl font-light">Try adjusting your search terms.</p>
                        </div>
                    )}

                    {/* FEATURED LARGE ARTICLE */}
                    {featuredArticle && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-16 md:mb-24"
                        >
                            <Link href={`/articles/${featuredArticle.slug}`} className="group block relative rounded-2xl bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">

                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    {/* Featured Image */}
                                    <div className="relative h-60 sm:h-80 lg:h-full w-full overflow-hidden bg-[#1A1A1A]">
                                        <div className="absolute inset-0 bg-[#d5ad5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>
                                        <Image
                                            src={featuredArticle.featuredImage || "/images/placeholder.svg"}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out relative z-10 rounded-2xl"
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 800px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A1A1A]/90 md:from-[#1A1A1A]/60 via-transparent to-transparent relative z-20 pointer-events-none"></div>

                                        {/* Floating Tags */}
                                        <div className="absolute top-8 left-8 flex gap-3 z-30">
                                            <span className="bg-[#d5ad5c] text-[#1A1A1A] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">Featured</span>
                                            <span className="bg-[#1A1A1A]/80 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                                                <Tag className="h-3 w-3" /> Insights
                                            </span>
                                        </div>
                                    </div>

                                    {/* Featured Content */}
                                    <div className="p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-white relative">
                                        {/* Gold Border Glow */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ad5c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-6 tracking-widest uppercase">
                                            <Calendar className="h-4 w-4 text-[#d5ad5c]" />
                                            {featuredArticle.date}
                                        </div>

                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#232323] mb-8 leading-[1.15] tracking-tight group-hover:text-[#d5ad5c] transition-colors duration-300">
                                            {featuredArticle.title}
                                        </h2>

                                        <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed mb-10 line-clamp-3">
                                            {featuredArticle.excerpt}
                                        </p>

                                        <div className="flex items-center gap-3 text-[#232323] font-bold text-lg mt-auto">
                                            <span className="border-b-2 border-transparent group-hover:border-[#d5ad5c] pb-1 transition-colors duration-300">Read Full Analysis</span>
                                            <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#d5ad5c] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2">
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* ARTICLES 3-COLUMN GRID */}
                    {gridArticles.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {gridArticles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Link href={`/articles/${article.slug}`} className="group block h-full">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col relative">

                                            {/* Top Gold Line */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d5ad5c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"></div>

                                            {/* Image Head */}
                                            <div className="relative h-64 overflow-hidden bg-[#1A1A1A]">
                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 bg-[#d5ad5c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl z-0 pointer-events-none"></div>

                                                <Image
                                                    src={article.featuredImage || "/images/placeholder.svg"}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out relative z-10 rounded-2xl"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 to-transparent relative z-20 pointer-events-none opacity-80"></div>

                                                {/* Floating Badges */}
                                                <div className="absolute top-5 left-5 flex gap-2 z-30">
                                                    <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider flex items-center gap-1">
                                                        <Tag className="h-3 w-3" /> Insight
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content Layout */}
                                            <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-30 bg-white">

                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">
                                                    <Calendar className="h-3.5 w-3.5 text-[#d5ad5c]" />
                                                    {article.date}
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#232323] mb-4 leading-snug tracking-tight group-hover:text-[#d5ad5c] transition-colors duration-300 line-clamp-3">
                                                    {article.title}
                                                </h3>

                                                <p className="text-gray-500 text-base font-light leading-relaxed mb-8 line-clamp-3">
                                                    {article.excerpt}
                                                </p>

                                                <div className="mt-auto pt-6 border-t border-gray-100">
                                                    <div className="flex items-center justify-between text-[#232323] font-bold text-sm">
                                                        <span className="uppercase tracking-wider">Read Article</span>
                                                        <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#d5ad5c] group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1">
                                                            <ArrowRight className="h-4 w-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
