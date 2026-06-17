import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SEOHead } from "@/components/seo/seo-head";
import { FamilyPacksSection } from "@/components/sections/family-packs-section";
import { CateringSection } from "@/components/sections/catering-section";

export const metadata: Metadata = SEOHead({
  title: "Family Packs & Party Packages | La Gaviota Denver",
  description:
    "Ask La Gaviota Mexican Restaurant about family meals and party packages by phone for Denver gatherings and celebrations.",
  path: "/family-packs",
});

export default function FamilyPacksPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Family Packs", href: "/family-packs" }]} />
      <FamilyPacksSection />
      <CateringSection compact />
    </>
  );
}
