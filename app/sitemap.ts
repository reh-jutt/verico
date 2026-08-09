import type { MetadataRoute } from "next";
import { ROUTES, SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.services}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.about}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.url}${ROUTES.contact}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
