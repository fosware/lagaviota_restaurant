import { AboutSection } from "@/components/sections/about-section";
import { CarryoutSection } from "@/components/sections/carryout-section";
import { CateringSection } from "@/components/sections/catering-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeGallerySection } from "@/components/sections/home-gallery-section";
import { MenuHighlights } from "@/components/sections/menu-highlights";
import { QuickActions } from "@/components/sections/quick-actions";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <MenuHighlights />
      <CateringSection />
      <CarryoutSection />
      <HomeGallerySection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
