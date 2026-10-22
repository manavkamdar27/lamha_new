import type { MetadataRoute } from "next";
import { cityPages, cityPagePath } from "@/data/city-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lamhaagroup.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/banquet-hall-bensalem-pa`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-catering-nj`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = cityPages.map((page) => ({
    url: `${baseUrl}${cityPagePath(page.slug)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...cityRoutes];
}
