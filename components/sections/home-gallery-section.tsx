"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryGrid } from "./gallery-grid";

export function HomeGallerySection() {
  const { t } = useI18n();

  return (
    <section className="section-pad relative overflow-hidden bg-background">
      <div className="coastal-wave absolute inset-x-0 top-0 h-20 rotate-180 opacity-45" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.5]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.homeTitle")}
          description={t("gallery.homeDescription")}
        />
        <div className="mt-10">
          <GalleryGrid limit={9} />
        </div>
      </div>
    </section>
  );
}
