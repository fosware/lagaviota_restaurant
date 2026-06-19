"use client";

import { Phone, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

export function FamilyPacksSection() {
  const { t } = useI18n();

  return (
    <section className="section-pad relative overflow-hidden bg-[#f5f0e8]">
      <div className="confetti-field absolute inset-0 opacity-[0.5]" aria-hidden="true" />
      <div className="container-page relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow={t("family.eyebrow")}
          title={t("family.title")}
          description={t("family.description")}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="papel-cutout relative overflow-hidden rounded-lg border bg-card/96 p-5 shadow-sm">
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
              aria-hidden="true"
            />
            <UsersRound className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-black">{t("family.meals")}</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              {t("family.mealsCopy")}
            </p>
          </div>
          <div className="papel-cutout relative overflow-hidden rounded-lg border bg-card/96 p-5 shadow-sm">
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
              aria-hidden="true"
            />
            <Phone className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-black">{t("family.phone")}</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              {t("family.phoneCopy")}
            </p>
          </div>
          <Button asChild size="lg" className="sm:col-span-2">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              {t("cta.askPartyPackages")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
