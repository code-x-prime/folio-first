import { siteConfig } from "@/data/static";
import ServicesClient from "./ServicesClient";

export const metadata = {
    title: "Our Services | IEPF Recovery, Share Transmission & Dematerialisation | Folio First",
    description: "Explore our expert financial consulting services: IEPF unclaimed dividend recovery, share transmission to legal heirs, dematerialisation of physical shares, and more. Free consultation available.",
    alternates: {
        canonical: `${siteConfig.url || 'https://foliofirst.in'}/services`,
    },
    openGraph: {
        title: "Our Services | IEPF Recovery, Share Transmission & Dematerialisation",
        description: "Explore expert financial consulting services: IEPF unclaimed dividend recovery, share transmission to legal heirs, and dematerialisation of physical shares.",
        url: `${siteConfig.url || 'https://foliofirst.in'}/services`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Services | Folio First Consulting",
        description: "IEPF recovery, share transmission, dematerialisation and more — expert financial consulting services.",
    },
    robots: { index: true, follow: true },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
