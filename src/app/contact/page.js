import { siteConfig } from "@/data/static";
import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Folio First Consulting | Free IEPF & Share Recovery Consultation",
    description: "Get expert help with IEPF claims, share transmission and dematerialisation. Contact Folio First Consulting for a free consultation.",
    alternates: {
        canonical: `${siteConfig.url || 'https://foliofirstconsulting.com'}/contact`,
    },
    openGraph: {
        title: "Contact Folio First Consulting | Free IEPF & Share Recovery Consultation",
        description: "Get expert help with IEPF claims, share transmission and dematerialisation. Contact Folio First Consulting for a free consultation.",
        url: `${siteConfig.url || 'https://foliofirstconsulting.com'}/contact`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Folio First Consulting",
        description: "Free consultation for IEPF claims, share recovery, and dematerialisation.",
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
        "telephone": siteConfig.phone,
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
