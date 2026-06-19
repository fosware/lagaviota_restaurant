"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";
import { CallButton } from "./call-button";

export function CateringSection({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  const occasions = [
    t("catering.occasion.family"),
    t("catering.occasion.birthdays"),
    t("catering.occasion.graduations"),
    t("catering.occasion.anniversaries"),
    t("catering.occasion.special"),
  ];

  return (
    <section className={compact ? "relative bg-background py-10" : "section-pad relative bg-background"}>
      <div className="confetti-field absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="food-shadow relative overflow-hidden rounded-lg border bg-muted">
          <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[linear-gradient(90deg,#2f7d32_0_33%,#ffffff_33%_66%,#c13f4f_66%)]" aria-hidden="true" />
          <Image
            src="/images/alambre.webp"
            alt="Mexican catering dishes for parties in Denver"
            width={900}
            height={700}
            loading="eager"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow={t("catering.eyebrow")}
            title={t("catering.title")}
            description={t("catering.description")}
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {occasions.map((occasion) => (
              <p key={occasion} className="flex items-center gap-2 rounded-md border bg-card/95 p-3 text-sm font-black shadow-sm">
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                {occasion}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton label={t("cta.callForCatering")} size="lg" />
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                <CalendarCheck aria-hidden="true" />
                {t("cta.planEventMeal")}
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm font-bold text-muted-foreground">
            {t("catering.phoneDetails")} {business.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
