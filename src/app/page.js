import { siteConfig } from "@/data/static";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Folio First Consulting | IEPF Recovery & Share Transmission Experts India",
  description: "India's most trusted financial consulting firm for IEPF unclaimed dividend recovery, share transmission to legal heirs, and dematerialisation of physical shares. Free consultation. 10+ years experience. 500+ cases resolved.",
  alternates: {
    canonical: `${siteConfig.url || 'https://https://foliofirstconsulting.com'}`,
  },
  keywords: "IEPF recovery, unclaimed dividend, share transmission, dematerialisation, financial consulting India, Folio First",
  openGraph: {
    title: "Folio First Consulting | IEPF Recovery & Share Transmission Experts",
    description: "Recover unclaimed dividends, transfer inherited shares, and dematerialise physical certificates with India's most trusted advisory. Free consultation.",
    url: `${siteConfig.url || 'https://https://foliofirstconsulting.com'}`,
    siteName: "Folio First Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Folio First Consulting | IEPF Recovery Experts",
    description: "India's trusted IEPF claim, share transmission and dematerialisation advisory. 10+ years, 500+ cases resolved.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const siteUrl = siteConfig.url || 'https://https://foliofirstconsulting.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": siteConfig.name,
    "url": siteUrl,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressCountry": "IN",
      "streetAddress": siteConfig.address,
    },
    "areaServed": "India",
    "description": "Expert financial consulting for IEPF unclaimed dividend recovery, share transmission, and dematerialisation of physical shares.",
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
