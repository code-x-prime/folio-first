import { siteConfig, faqs } from "@/data/static";
import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, ShieldCheck, Clock, MessageCircle, FileText, TrendingUp } from "lucide-react";

export const metadata = {
    title: "About Folio First Consulting | IEPF & Share Recovery Experts",
    description: "Learn about Folio First Consulting — India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation. Over 10 years of experience and 500+ cases resolved.",
    alternates: {
        canonical: `${siteConfig.url || 'https://foliofirstconsulting.com'}/about`,
    },
    openGraph: {
        title: "About Folio First Consulting | IEPF & Share Recovery Experts",
        description: "India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation. 10+ years experience, 500+ cases resolved.",
        url: `${siteConfig.url || 'https://foliofirstconsulting.com'}/about`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Folio First Consulting",
        description: "India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation.",
    },
    robots: { index: true, follow: true },
};

const whatsappLink = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like a free consultation regarding my share/dividend recovery case. Please assist.')}`;

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] overflow-hidden">

            {/* PAGE HEADER */}
            <section className="relative min-h-[40vh] flex items-center py-12 bg-[#1A1A1A] overflow-hidden text-center justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#d5ad5c]/20 to-transparent -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10 mx-auto">
                            <span className="flex h-2 w-2 rounded-full bg-[#d5ad5c] animate-pulse"></span>
                            <span className="text-sm font-bold text-[#d5ad5c] tracking-widest uppercase">The Premier Advisory</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Pioneers in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5ad5c] via-yellow-400 to-[#d5ad5c] italic pr-2">Wealth Recovery</span>
                        </h1>

                        <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-2">
                            Your trusted, secure, and expert partner in navigating the complex landscape of financial recovery and share transmission.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="py-10 md:py-12 bg-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-50/50 rounded-l-[100px] -z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="relative order-2 lg:order-1 h-[380px] sm:h-[500px] lg:h-[700px] rounded-2xl overflow-hidden border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] group">
                            <Image
                                src="/images/about-page.jpg"
                                alt="Folio First Corporate Consultants"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out grayscale-[0.2] rounded-2xl"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A]/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-4 sm:left-8 bg-white/95 backdrop-blur-xl p-5 sm:p-7 rounded-xl border-l-4 border-[#d5ad5c] shadow-2xl max-w-[260px] sm:max-w-sm">
                                <Users className="h-8 w-8 text-[#d5ad5c] mb-4" />
                                <p className="text-[#232323] font-medium leading-relaxed italic text-lg shadow-sm">
                                    &quot;We treat every case as if it were our own family&apos;s wealth at stake. Dedication and transparency are our absolute pillars.&quot;
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] leading-tight mb-4">
                                Committed to <br />Unlocking Your Wealth
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Folio First Consulting was founded with a singular mission: to simplify the intricate and often frustrating process of recovering unclaimed financial assets.
                            </p>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                                <p>We understand that dealing with dormant share certificates, bureaucratic RTAs, and complex regulatory bodies like the IEPF can be overwhelming for individuals and families.</p>
                                <p>With over a decade of deep regulatory experience in the financial consultancy sector, our elite team of experts has successfully recovered crores of rupees for families across India. We believe that what is rightfully yours should be in your hands—and we leave no stone unturned to make that happen legally and swiftly.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-[#FAFAFA] border border-gray-100 p-6 rounded-xl hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="h-14 w-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#d5ad5c]/10 group-hover:border-[#d5ad5c]/40 transition-colors">
                                        <Clock className="h-6 w-6 text-gray-400 group-hover:text-[#d5ad5c] transition-colors" />
                                    </div>
                                    <h4 className="font-black text-4xl text-[#232323] mb-2 tracking-tight group-hover:text-[#d5ad5c] transition-colors">10<span className="text-[#d5ad5c]">+</span></h4>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
                                </div>
                                <div className="bg-[#1A1A1A] p-6 rounded-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d5ad5c]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/5 relative z-10">
                                        <TrendingUp className="h-6 w-6 text-[#d5ad5c]" />
                                    </div>
                                    <h4 className="font-black text-4xl text-white mb-2 tracking-tight relative z-10">100Cr<span className="text-[#d5ad5c]">+</span></h4>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest relative z-10">Wealth Recovered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-10 md:py-12 bg-[#1A1A1A] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#d5ad5c]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="group bg-[#232323]/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl hover:border-[#d5ad5c]/40 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="h-20 w-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#d5ad5c]/10 group-hover:border-[#d5ad5c]/30 transition-colors shadow-inner relative z-10">
                                <Target className="h-10 w-10 text-gray-400 group-hover:text-[#d5ad5c] transition-colors" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-[#d5ad5c] transition-colors relative z-10">Our Mission</h3>
                            <p className="text-gray-400 leading-relaxed text-xl font-light relative z-10">
                                To empower investors and their families by radically simplifying financial recovery processes, ensuring that absolutely no rightful wealth remains unclaimed or permanently forgotten due to procedural complexities.
                            </p>
                        </div>

                        <div className="group bg-[#232323]/80 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl hover:border-[#d5ad5c]/40 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="h-20 w-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#d5ad5c]/10 group-hover:border-[#d5ad5c]/30 transition-colors shadow-inner relative z-10">
                                <Users className="h-10 w-10 text-gray-400 group-hover:text-[#d5ad5c] transition-colors" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-[#d5ad5c] transition-colors relative z-10">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed text-xl font-light relative z-10">
                                To be universally recognized as India&apos;s most trusted, transparent, and efficient advisory for asset recovery—renowned for our unmatched integrity, deep regulatory expertise, and fiercely client-centric approach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY TRUST US */}
            <section className="py-10 md:py-12 bg-[#FAFAFA] relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gradient-radial from-[#d5ad5c]/5 to-transparent blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-4 block">The Advantage</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] leading-tight mb-4">Why Choose Folio First?</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mb-16">We don&apos;t just file papers; we engineer solutions to bypass bureaucratic hurdles seamlessly.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10">
                        {[
                            { title: "Deep Regulatory Knowledge", desc: "Decades of experience navigating SEBI, ROC, and IEPF frameworks rapidly.", icon: FileText },
                            { title: "End-to-End Support", desc: "From drafting affidavits to securing final credit, we handle the entire lifecycle.", icon: ShieldCheck },
                            { title: "Transparent Pricing", desc: "No hidden charges whatsoever. We strictly operate on a clear, success-aligned fee structure.", icon: ShieldCheck },
                            { title: "High Success Rate", desc: "A proven, documented track record of resolving the most convoluted and forgotten cases.", icon: TrendingUp }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-xl bg-white hover:bg-[#1A1A1A] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 hover:border-transparent relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -bottom-4 text-[10rem] font-black leading-none text-gray-50 group-hover:text-white/[0.03] transition-colors duration-500 pointer-events-none select-none z-0">0{idx + 1}</div>
                                <div className="h-16 w-16 rounded-2xl bg-[#FAFAFA] border border-gray-100 flex items-center justify-center mb-8 text-gray-400 group-hover:bg-[#d5ad5c]/10 group-hover:text-[#d5ad5c] group-hover:border-[#d5ad5c]/30 transition-colors shadow-inner relative z-10">
                                    <item.icon className="h-8 w-8" strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-2xl mb-4 text-[#232323] group-hover:text-white transition-colors relative z-10">{item.title}</h4>
                                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-400 transition-colors relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs - Using native details/summary for server-side */}
            <section className="py-10 md:py-12 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <span className="text-[#d5ad5c] font-black tracking-[0.2em] uppercase text-sm mb-4 block">Common Questions</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#232323] leading-tight mb-12">Frequently Asked Questions</h2>

                    <div className="w-full bg-[#FAFAFA] rounded-xl p-4 sm:p-8 shadow-sm border border-gray-100 space-y-2">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group border-b border-gray-200 last:border-0 px-2 sm:px-4">
                                <summary className="text-base md:text-lg font-bold text-[#232323] hover:text-[#d5ad5c] py-6 leading-snug cursor-pointer list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                                    {faq.question}
                                    <span className="text-[#d5ad5c] group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="text-gray-600 text-lg leading-relaxed pb-8 pt-2">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA STRIP */}
            <section className="py-10 md:py-12 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="w-full bg-gradient-to-r from-[#d5ad5c] via-[#b38e4a] to-[#d5ad5c] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_40px_rgba(213,173,92,0.3)] text-center group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[20px] border-white/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[15px] border-white/10 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight text-shadow-sm">
                                Ready to Claim Your Assets?
                            </h2>
                            <p className="text-lg md:text-xl text-yellow-50 mb-10 font-medium px-4 max-w-2xl mx-auto">
                                Don&apos;t let your hard-earned money go unclaimed. Contact our premium advisory team today for a free consultation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-white text-[#b38e4a] hover:bg-[#FAFAFA] h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-black shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all w-full sm:w-auto"
                                >
                                    <MessageCircle className="h-6 w-6 text-[#25D366]" strokeWidth={2.5} /> Talk to an Expert
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 sm:h-16 rounded-full px-8 sm:px-10 text-lg sm:text-xl font-bold transition-all w-full sm:w-auto backdrop-blur-md"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
