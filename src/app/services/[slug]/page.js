import { services, siteConfig } from "@/data/static";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }) {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return { title: "Service Not Found" };

    const siteUrl = siteConfig.url || 'https://foliofirst.in';
    const canonicalUrl = `${siteUrl}/services/${service.slug}`;

    return {
        title: `${service.title} in India | Folio First Consulting`,
        description: `Expert assistance for ${service.title}. Recover your wealth securely. We handle IEPF claims, share recovery, and dematerialisation with ease.`,
        keywords: `${service.title}, IEPF, share recovery, dematerialisation, Folio First Consulting, wealth recovery India, financial consulting`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: "article",
            url: canonicalUrl,
            siteName: "Folio First Consulting",
            title: `${service.title} in India | Folio First Consulting`,
            description: `Expert assistance for ${service.title}. Recover your wealth securely. We handle IEPF claims, share recovery, and dematerialisation with ease.`,
            images: [
                {
                    url: service.heroImage || '/images/og-default.jpg',
                    width: 1200,
                    height: 630,
                    alt: service.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${service.title} in India | Folio First Consulting`,
            description: `Expert assistance for ${service.title}. We handle IEPF claims, share recovery, and dematerialisation with ease.`,
            images: [service.heroImage || '/images/og-default.jpg'],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default function ServicePage({ params }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const siteUrl = siteConfig.url || 'https://foliofirst.in';

    // JSON-LD for Service
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "Organization",
            "name": "Folio First Consulting",
            "url": siteUrl
        },
        "areaServed": "India",
        "url": `${siteUrl}/services/${service.slug}`
    };

    // JSON-LD for FAQ (if exists)
    const faqSchema = service.faq && service.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faq.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Clean the data of any functions (like Lucide icons) before passing to the Client Component
    const safeService = { ...service };
    delete safeService.icon;

    const safeServicesList = services.map(s => {
        const { icon, ...rest } = s;
        return rest;
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <ServiceDetailClient service={safeService} services={safeServicesList} />
        </>
    );
}
