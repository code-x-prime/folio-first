import { siteConfig, services, articles } from "@/data/static";

export default function sitemap() {
  const baseUrl = siteConfig?.url || "https://foliofirstconsulting.com";
  const now = new Date();

  const staticRoutes = [
    {
      path: "",
      lastModified: now,
    },
    {
      path: "/about",
      lastModified: now,
    },
    {
      path: "/services",
      lastModified: now,
    },
    {
      path: "/articles",
      lastModified: now,
    },
    {
      path: "/contact",
      lastModified: now,
    },
    {
      path: "/privacy-policy",
      lastModified: now,
    },
    {
      path: "/terms-of-service",
      lastModified: now,
    },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date) || now,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: route.lastModified,
    })),
    ...serviceRoutes,
    ...articleRoutes,
  ];
}

