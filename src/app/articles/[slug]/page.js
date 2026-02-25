import { articles, siteConfig } from "@/data/static";
import { notFound } from "next/navigation";
import ArticleDetailClient from "./ArticleDetailClient";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) return { title: "Article Not Found" };

    const siteUrl = siteConfig.url || 'https://foliofirst.in';
    const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
    const heroImage = article.featuredImage || `https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1600&auto=format&fit=crop`;

    return {
        title: `${article.title} | Folio First Insights`,
        description: article.excerpt,
        keywords: `${article.title.split(' ').join(', ')}, Folio First, Share Recovery, IEPF`,
        alternates: {
            canonical: canonicalUrl,
        },
        authors: [{ name: "Folio First Consulting" }],
        openGraph: {
            type: "article",
            url: canonicalUrl,
            siteName: "Folio First Consulting",
            title: article.title,
            description: article.excerpt,
            publishedTime: new Date(article.date).toISOString() || new Date().toISOString(),
            images: [
                {
                    url: heroImage,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [heroImage],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function ArticlePage({ params }) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    const siteUrl = siteConfig.url || 'https://foliofirst.in';
    const heroImage = article.featuredImage || `https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1600&auto=format&fit=crop`;
    const publishDate = new Date(article.date).toISOString() || new Date().toISOString();

    // JSON-LD for BlogPosting
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "image": heroImage,
        "author": {
            "@type": "Organization",
            "name": "Folio First Consulting",
            "url": siteUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "Folio First Consulting",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        },
        "datePublished": publishDate,
        "dateModified": publishDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteUrl}/articles/${article.slug}`
        }
    };

    // Calculate reading time roughly (words / 200 wpm)
    // Strip HTML tags for word count if content is HTML string, or just count string length roughly
    const wordCount = typeof article.content === 'string'
        ? article.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length
        : 800; // fallback default
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    // Get 3 related articles (excluding current one)
    const relatedArticles = articles
        .filter(a => a.slug !== article.slug)
        .slice(0, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <ArticleDetailClient
                article={article}
                relatedArticles={relatedArticles}
                readingTime={readingTime}
                heroImage={heroImage}
            />
        </>
    );
}
