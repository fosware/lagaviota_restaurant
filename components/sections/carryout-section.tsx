"use client";

import Link from "next/link";
import { Beer, MonitorPlay, Salad, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";
import { CallButton } from "./call-button";

export function CarryoutSection() {
  const { t } = useI18n();
  const features = [
    { label: t("carryout.dine"), icon: ShoppingBag },
    { label: t("carryout.salsa"), icon: Salad },
    { label: t("carryout.drinks"), icon: Beer },
    { label: t("carryout.game"), icon: MonitorPlay },
  ];

  return (
    <section className="section-pad coastal-hero relative overflow-hidden text-background">
      <div className="papel-picado absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.1]" aria-hidden="true" />
      <div className="container-page relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow={t("carryout.eyebrow")}
          title={t("carryout.title")}
          description={t("carryout.description")}
          className="[&_h2]:text-background [&_p]:text-background/76"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.label} className="rounded-lg border border-background/18 bg-background/10 p-5 shadow-sm backdrop-blur">
              <feature.icon className="size-7 text-secondary" aria-hidden="true" />
              <p className="mt-4 text-lg font-black">{feature.label}</p>
            </div>
          ))}
          <CallButton label={t("cta.callToPreOrder")} size="lg" className="sm:col-span-2" />
          <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 sm:col-span-2">
            <Link href="/contact">{t("carryout.findUs")} {business.addressStreet}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
