import type { Metadata } from "next";
import { SEOHead } from "@/components/seo/seo-head";
import { ContactSection } from "@/components/sections/contact-section";
import { CateringInquiryForm } from "@/components/sections/catering-inquiry-form";

export const metadata: Metadata = SEOHead({
  title: "Contact | Call La Gaviota Mexican Restaurant in Denver",
  description:
    "Contact La Gaviota Mexican Restaurant at 2280 S Quebec, Denver, CO 80231. Call 303-368-9941 for carryout and catering.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <section className="section-pad relative overflow-hidden bg-background">
        <div className="coastal-wave absolute inset-x-0 top-0 h-20 rotate-180 opacity-45" aria-hidden="true" />
        <div className="confetti-field absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div className="container-page relative max-w-3xl">
          <CateringInquiryForm />
        </div>
      </section>
    </>
  );
}
