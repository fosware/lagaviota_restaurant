import type { MetadataRoute } from "next";
import { business, navItems } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...navItems, { label: "Family Packs", href: "/family-packs" }];

  return routes.map((item) => ({
    url: `${business.url}${item.href}`,
    lastModified: new Date("2026-06-17"),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
