import { siteConfig } from "@/data/static";

export default function robots() {
  const baseUrl = siteConfig?.url || "https://foliofirstconsulting.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl.replace(/^https?:\/\//, ""),
  };
}

