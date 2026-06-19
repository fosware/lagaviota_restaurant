import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/seo-head";
import { MenuPageContent } from "@/components/sections/menu-page-content";

export const metadata: Metadata = SEOHead({
  title: "Full Menu With Prices | Tacos, Pupusas & Seafood in Denver",
  description:
    "Browse La Gaviota Mexican Restaurant menu with prices for tacos, burritos, seafood, pupusas, tortas, tamales, drinks and more in Denver, CO.",
  path: "/menu",
});

export default function MenuPage() {
  return <MenuPageContent />;
}
