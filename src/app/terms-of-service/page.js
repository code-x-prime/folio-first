import { siteConfig } from "@/data/static";
import Link from "next/link";

export const metadata = {
    title: "Terms of Service | Folio First Consulting",
    description: "Review the Terms of Service governing the use of Folio First Consulting's website and financial advisory services.",
    alternates: { canonical: `${siteConfig.url}/terms-of-service` },
    robots: { index: true, follow: true },
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: [
            "By accessing or using the Folio First Consulting website and services, you agree to be bound by these Terms of Service.",
            "If you do not agree to these terms, please do not use our website or services.",
            "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance.",
        ],
    },
    {
        title: "2. Description of Services",
        content: [
            "Folio First Consulting provides financial advisory services including IEPF unclaimed dividend recovery, share transmission to legal heirs, dematerialisation of physical shares, KYC & folio updates, and duplicate share certificate assistance.",
            "Our services are advisory in nature. We act as facilitators and consultants — not as legal practitioners or attorneys.",
            "All case outcomes are subject to regulatory decisions by IEPF Authority, SEBI, RTAs, and companies, which are beyond our direct control.",
        ],
    },
    {
        title: "3. User Responsibilities",
        content: [
            "You agree to provide accurate, complete, and up-to-date information when engaging our services.",
            "You are responsible for ensuring all documents submitted are authentic and legally valid.",
            "You must not use our services for any unlawful purpose, including fraudulent claims or identity misrepresentation.",
            "You are responsible for maintaining the confidentiality of any login credentials or account information shared with us.",
        ],
    },
    {
        title: "4. Fees & Payment",
        content: [
            "Our fee structure varies by service type and case complexity. Fees will be clearly communicated before engagement.",
            "Some services are offered on a success-based fee model; others may have fixed consultation charges.",
            "All fees are exclusive of applicable government taxes (GST) unless stated otherwise.",
            "Payments made are non-refundable for work already completed, except in cases of proven service failure on our part.",
        ],
    },
    {
        title: "5. Confidentiality",
        content: [
            "All information you share with us is treated with strict confidentiality under a professional advisory relationship.",
            "We do not disclose your personal or financial information to third parties except as required to process your case or comply with law.",
            "We may ask you to sign a formal Non-Disclosure Agreement (NDA) for complex or high-value cases.",
        ],
    },
    {
        title: "6. Disclaimers & Limitation of Liability",
        content: [
            "Folio First Consulting provides services in good faith, but cannot guarantee specific outcomes as final decisions rest with regulatory authorities.",
            "We are not liable for delays, rejections, or losses caused by regulatory bodies, incomplete information provided by the client, or factors beyond our control.",
            "Our maximum liability in any case shall not exceed the fees paid by the client for that specific service.",
            "The information on our website is for general informational purposes only and does not constitute legal or financial advice.",
        ],
    },
    {
        title: "7. Intellectual Property",
        content: [
            "All content on this website — including text, graphics, logos, and code — is the property of Folio First Consulting.",
            "You may not reproduce, distribute, or create derivative works without our prior written consent.",
            "Our articles and blog posts are for educational purposes only and may not be republished without attribution.",
        ],
    },
    {
        title: "8. Third-Party Links & Services",
        content: [
            "Our website may link to third-party websites such as the IEPF portal, MCA, SEBI, and NSDL/CDSL.",
            "We are not responsible for the content, privacy practices, or availability of these external sites.",
            "Links are provided for convenience and do not imply endorsement.",
        ],
    },
    {
        title: "9. Termination",
        content: [
            "Either party may terminate a service engagement by providing written notice.",
            "We reserve the right to refuse or discontinue service to any user who violates these terms or engages in fraudulent activity.",
            "Upon termination, any outstanding fees for work completed remain payable.",
        ],
    },
    {
        title: "10. Governing Law",
        content: [
            "These Terms of Service are governed by and construed in accordance with the laws of India.",
            "Any disputes shall be subject to the exclusive jurisdiction of courts in Gurgaon, Haryana, India.",
            "We encourage resolving disputes amicably before pursuing legal action.",
        ],
    },
    {
        title: "11. Contact Us",
        content: [
            `For questions regarding these Terms of Service, contact us at: ${siteConfig.email}`,
            `Phone: ${siteConfig.phone}`,
            `Address: ${siteConfig.address}`,
        ],
    },
];

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            {/* Hero */}
            <section className="bg-[#1A1A1A] pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(213,173,92,0.15),_transparent_60%)] pointer-events-none" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="h-2 w-2 rounded-full bg-[#d5ad5c] animate-pulse" />
                        <span className="text-sm font-bold text-[#d5ad5c] tracking-widest uppercase">Legal</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400 text-lg font-light">
                        Effective Date: <span className="text-[#d5ad5c] font-semibold">February 22, 2026</span>
                    </p>
                    <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                        Please read these terms carefully before using Folio First Consulting&apos;s website or engaging our services. These terms govern your relationship with us.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="space-y-12">
                        {sections.map((section, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100">
                                <h2 className="text-xl md:text-2xl font-bold text-[#232323] mb-5 pb-3 border-b-2 border-[#d5ad5c]/30">
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.content.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d5ad5c] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Back link */}
                    <div className="mt-12 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#232323] font-bold hover:text-[#d5ad5c] transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
