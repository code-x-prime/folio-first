import { siteConfig } from "@/data/static";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Folio First Consulting | Financial Advisory, Taxation & Compliance India",
  description: "India's leading financial advisory firm offering expert services in taxation, compliance, audit, corporate law, dematerialisation, and financial consulting. Free consultation. 10+ years experience.",
  alternates: {
    canonical: `${siteConfig.url || 'https://foliofirstconsulting.com'}`,
  },
  keywords: "financial consulting India, taxation, compliance, audit, corporate law, dematerialisation, Folio First",
  openGraph: {
    title: "Folio First Consulting | Financial Advisory & Compliance Experts",
    description: "Comprehensive financial consulting services including taxation, compliance, audit, corporate law, and advisory. Free consultation.",
    url: `${siteConfig.url || 'https://foliofirstconsulting.com'}`,
    siteName: "Folio First Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folio First Consulting | Financial Advisory Experts",
    description: "India's trusted financial advisory for taxation, compliance, audit, and corporate law. 10+ years experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const siteUrl = siteConfig.url || 'https://foliofirstconsulting.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": siteConfig.name,
    "url": siteUrl,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressCountry": "IN",
      "streetAddress": siteConfig.address,
    },
    "areaServed": "India",
    "description": "Expert financial consulting services in taxation, compliance, audit, corporate law, and financial advisory.",
    "openingHours": "Mo-Sa 10:00-19:00",
    "sameAs": [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient />
    </>
  );
}
