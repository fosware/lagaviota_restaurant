import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/seo-head";
import { AboutSection } from "@/components/sections/about-section";
import { CarryoutSection } from "@/components/sections/carryout-section";

export const metadata: Metadata = SEOHead({
  title: "About | Local Family Mexican & Central American Restaurant in Denver",
  description:
    "La Gaviota Mexican Restaurant is a local, family-operated Denver restaurant serving Mexican and Central American food, carryout and catering with family recipes.",
  path: "/about",
  image: "/images/pupusas.webp",
});

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <CarryoutSection />
    </>
  );
}
