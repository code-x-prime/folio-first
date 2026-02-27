import { siteConfig } from "@/data/static";
import AboutClient from "./AboutClient";

export const metadata = {
    title: "About Folio First Consulting | IEPF & Share Recovery Experts",
    description: "Learn about Folio First Consulting — India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation. Over 10 years of experience and 500+ cases resolved.",
    alternates: {
        canonical: `${siteConfig.url || 'https://https://foliofirstconsulting.com'}/about`,
    },
    openGraph: {
        title: "About Folio First Consulting | IEPF & Share Recovery Experts",
        description: "India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation. 10+ years experience, 500+ cases resolved.",
        url: `${siteConfig.url || 'https://https://foliofirstconsulting.com'}/about`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Folio First Consulting",
        description: "India's trusted experts in IEPF dividend recovery, share transmission, and dematerialisation.",
    },
    robots: { index: true, follow: true },
};

export default function AboutPage() {
    return <AboutClient />;
}
