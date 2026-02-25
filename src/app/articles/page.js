import { siteConfig } from "@/data/static";
import ArticlesClient from "./ArticlesClient";

export const metadata = {
    title: "Financial Insights & News | Articles by Folio First Consulting",
    description: "Stay informed with expert articles on IEPF regulations, share recovery, SEBI guidelines, and wealth management strategies from India's leading financial consulting firm.",
    alternates: {
        canonical: `${siteConfig.url || 'https://foliofirst.in'}/articles`,
    },
    openGraph: {
        title: "Financial Insights & News | Articles by Folio First Consulting",
        description: "Expert articles on IEPF regulations, share recovery, SEBI guidelines, and wealth management from India's leading financial consulting firm.",
        url: `${siteConfig.url || 'https://foliofirst.in'}/articles`,
        siteName: "Folio First Consulting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Financial Insights | Folio First Consulting",
        description: "Expert articles on IEPF, share recovery, dematerialisation and wealth management strategies.",
    },
    robots: { index: true, follow: true },
};

export default function ArticlesPage() {
    return <ArticlesClient />;
}
