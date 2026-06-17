import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SEOHead } from "@/components/seo/seo-head";
import { CateringInquiryForm } from "@/components/sections/catering-inquiry-form";
import { CateringSection } from "@/components/sections/catering-section";
import { FamilyPacksSection } from "@/components/sections/family-packs-section";
import { FAQSection } from "@/components/sections/faq-section";

export const metadata: Metadata = SEOHead({
  title: "Mexican Catering in Denver | Parties, Birthdays & Graduations",
  description:
    "Call La Gaviota Mexican Restaurant for Mexican catering and party packages in Denver for birthdays, graduations, anniversaries and family gatherings.",
  path: "/catering",
  image: "/images/alambre.webp",
});

export default function CateringPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Catering", href: "/catering" }]} />
      <CateringSection />
      <FamilyPacksSection />
      <section className="section-pad bg-background">
        <div className="container-page max-w-3xl">
          <CateringInquiryForm />
        </div>
      </section>
      <FAQSection />
    </>
  );
}
