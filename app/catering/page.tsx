import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/seo-head";
import { CateringInquiryForm } from "@/components/sections/catering-inquiry-form";
import { CateringSection } from "@/components/sections/catering-section";
import { FamilyPacksSection } from "@/components/sections/family-packs-section";
import { FAQSection } from "@/components/sections/faq-section";

export const metadata: Metadata = SEOHead({
  title: "Mexican & Central American Catering in Denver | Parties & Birthdays",
  description:
    "Call La Gaviota Mexican Restaurant for Mexican and Central American catering and party packages in Denver for birthdays, graduations, anniversaries and family gatherings.",
  path: "/catering",
  image: "/images/alambre.webp",
});

export default function CateringPage() {
  return (
    <>
      <CateringSection />
      <FamilyPacksSection />
      <section className="section-pad relative overflow-hidden bg-background">
        <div className="coastal-wave absolute inset-x-0 top-0 h-20 rotate-180 opacity-45" aria-hidden="true" />
        <div className="confetti-field absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div className="container-page relative max-w-3xl">
          <CateringInquiryForm />
        </div>
      </section>
      <FAQSection />
    </>
  );
}
