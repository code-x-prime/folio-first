import { siteConfig } from "@/data/static";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Folio First Consulting",
    description: "Read Folio First Consulting's Privacy Policy to understand how we collect, use, and protect your personal information.",
    alternates: { canonical: `${siteConfig.url}/privacy-policy` },
    robots: { index: true, follow: true },
};

const sections = [
    {
        title: "1. Information We Collect",
        content: [
            "Personal Identification Information: Name, email address, phone number, and address provided via our contact forms or consultation requests.",
            "Financial Information: Share folio numbers, Demat account details, PAN card numbers, and related documents submitted for our advisory services.",
            "Usage Data: IP address, browser type, pages visited, and time spent on our website, collected automatically via cookies and analytics tools.",
            "Communication Records: Emails, WhatsApp messages, and call records related to your service engagement.",
        ],
    },
    {
        title: "2. How We Use Your Information",
        content: [
            "To provide our financial advisory and recovery services as requested by you.",
            "To communicate with you regarding your case status, updates, and consultation follow-ups.",
            "To comply with legal obligations under SEBI, MCA, IEPF, and other regulatory frameworks.",
            "To improve our website and user experience through aggregated analytics.",
            "To send relevant financial insights, articles, and service updates (with your consent).",
        ],
    },
    {
        title: "3. Data Sharing & Disclosure",
        content: [
            "We do not sell, rent, or trade your personal information to third parties.",
            "We may share information with regulatory authorities (IEPF, SEBI, RTAs, Companies) only as required to process your claims.",
            "We may engage trusted third-party service providers under strict NDAs who assist in service delivery.",
            "We may disclose information if required by law, court order, or government authority.",
        ],
    },
    {
        title: "4. Data Security",
        content: [
            "We implement industry-standard security measures including encryption, secure servers, and access controls.",
            "All documents and financial data shared with us are handled with strict confidentiality.",
            "We require all employees and partners to sign Non-Disclosure Agreements (NDAs).",
            "While we strive to protect your data, no method of electronic transmission is 100% secure. We cannot guarantee absolute security.",
        ],
    },
    {
        title: "5. Cookies & Tracking",
        content: [
            "Our website uses cookies to enhance your browsing experience and analyze site traffic.",
            "Analytics cookies help us understand how visitors interact with our website.",
            "You can control or disable cookies through your browser settings at any time.",
            "Disabling cookies may affect certain features or functionality of our website.",
        ],
    },
    {
        title: "6. Data Retention",
        content: [
            "We retain your personal data only as long as necessary to provide our services or as required by applicable law.",
            "Financial records and case documents may be retained for up to 7 years for regulatory compliance.",
            "You may request deletion of your personal data by contacting us, subject to legal retention obligations.",
        ],
    },
    {
        title: "7. Your Rights",
        content: [
            "Right to Access: You may request a copy of the personal information we hold about you.",
            "Right to Correction: You may request correction of any inaccurate or incomplete information.",
            "Right to Deletion: You may request deletion of your personal data, subject to legal requirements.",
            "Right to Withdraw Consent: You may withdraw consent for marketing communications at any time.",
        ],
    },
    {
        title: "8. Third-Party Links",
        content: [
            "Our website may contain links to external websites (e.g., IEPF portal, MCA, SEBI). We are not responsible for the privacy practices of these sites.",
            "We encourage you to review the privacy policies of any third-party sites you visit.",
        ],
    },
    {
        title: "9. Changes to This Policy",
        content: [
            "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
            "Continued use of our services after any changes constitutes your acceptance of the updated policy.",
        ],
    },
    {
        title: "10. Contact Us",
        content: [
            `If you have questions about this Privacy Policy, please contact us at: ${siteConfig.email}`,
            `Phone: ${siteConfig.phone}`,
            `Address: ${siteConfig.address}`,
        ],
    },
];

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 text-lg font-light">
                        Effective Date: <span className="text-[#d5ad5c] font-semibold">February 22, 2026</span>
                    </p>
                    <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                        At Folio First Consulting, your privacy is our priority. This policy explains how we collect, use, and protect your personal information when you use our services.
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
