import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
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
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <ContactSection />
      <section className="section-pad bg-muted/55">
        <div className="container-page max-w-3xl">
          <CateringInquiryForm />
        </div>
      </section>
    </>
  );
}
