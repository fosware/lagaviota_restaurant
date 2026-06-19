import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/seo-head";
import { GalleryPageContent } from "@/components/sections/gallery-page-content";

export const metadata: Metadata = SEOHead({
  title: "Gallery | Mexican & Central American Food Photos in Denver",
  description:
    "See tacos, seafood, pupusas, burritos, salsa bar and Mexican and Central American dishes from La Gaviota Mexican Restaurant in Denver.",
  path: "/gallery",
});

export default function GalleryPage() {
  return <GalleryPageContent />;
}
