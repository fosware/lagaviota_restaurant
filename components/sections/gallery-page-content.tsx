"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";
import { CallButton } from "./call-button";
import { GalleryGrid } from "./gallery-grid";

export function GalleryPageContent() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-10 sm:pb-20 lg:pt-12">
      <div className="coastal-wave absolute inset-x-0 top-0 h-24 rotate-180 opacity-45" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
          <SectionHeading
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.pageTitle")}
            description={t("gallery.pageDescription")}
          />
          <div className="relative overflow-hidden rounded-lg border bg-card/96 p-5 shadow-sm">
            <span
              className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
              aria-hidden="true"
            />
            <p className="text-sm font-black uppercase text-accent">{t("gallery.hungry")}</p>
            <p className="mt-2 text-2xl font-black">{t("gallery.callAhead")}</p>
            <p className="mt-2 text-sm font-bold leading-5 text-muted-foreground">
              {t("gallery.chooseCraving")}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <CallButton label={t("cta.callToOrder")} />
              <Button asChild variant="outline">
                <Link href="/menu">{t("cta.viewMenu")}</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
  );
}
