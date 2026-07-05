import { siteConfig } from "@/data/static";
import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Folio First Consulting | Free Financial Consultation",
    description: "Get expert help with taxation, compliance, audit, and corporate law. Contact Folio First Consulting for a free consultation.",
    alternates: {
        canonical: `${siteConfig.url || 'https://foliofirstconsulting.com'}/contact`,
    },
    openGraph: {
        title: "Contact Folio First Consulting | Free Financial Consultation",
        description: "Get expert help with taxation, compliance, audit, and corporate law. Contact Folio First Consulting for a free consultation.",
        url: `${siteConfig.url || 'https://foliofirstconsulting.com'}/contact`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Folio First Consulting",
        description: "Free consultation for taxation, compliance, audit, and corporate law.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    const siteUrl = siteConfig.url || 'https://foliofirstconsulting.com';

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "email": siteConfig.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "New Delhi",
            "addressCountry": "IN",
            "streetAddress": siteConfig.address,
        },
        "areaServed": "India",
        "url": siteUrl,
        "openingHours": "Mo-Sa 10:00-19:00",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <ContactClient />
        </>
    );
}
