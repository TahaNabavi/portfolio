import type { MetadataRoute } from "next";
import { getPackageDocs } from "@/features/docs/constants";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/info", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/projects", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/skills", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/feedback", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const docsRoutes = getPackageDocs("en").map((doc) => ({
    url: absoluteUrl(`/docs/${doc.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...docsRoutes,
  ];
}
