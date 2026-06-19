"use client";

import { ContactCard } from "./contact-card";
import { HoursCard } from "./hours-card";
import { MapEmbed } from "./map-embed";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section className="section-pad relative overflow-hidden bg-[#f5f0e8]">
      <div className="papel-picado absolute inset-x-0 top-0 opacity-85" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.5]" aria-hidden="true" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="grid gap-6">
            <ContactCard />
            <HoursCard />
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
