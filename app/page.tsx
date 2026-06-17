import { AboutSection } from "@/components/sections/about-section";
import { CarryoutSection } from "@/components/sections/carryout-section";
import { CateringSection } from "@/components/sections/catering-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { HeroSection } from "@/components/sections/hero-section";
import { MenuHighlights } from "@/components/sections/menu-highlights";
import { QuickActions } from "@/components/sections/quick-actions";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <MenuHighlights />
      <CateringSection />
      <CarryoutSection />
      <section className="section-pad bg-background">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Food that looks like lunch plans."
            description="A curated look at dishes and restaurant photos from the existing La Gaviota website assets."
          />
          <div className="mt-10">
            <GalleryGrid limit={6} />
          </div>
        </div>
      </section>
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
