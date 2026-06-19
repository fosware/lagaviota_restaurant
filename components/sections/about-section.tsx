"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";

export function AboutSection() {
  const { t } = useI18n();
  const details = [
    t("about.local"),
    t("about.recipes"),
    t("about.dine"),
    t("about.salsa"),
    t("about.experience"),
  ];

  return (
    <section className="section-pad relative overflow-hidden bg-[#f5f0e8]">
      <div className="confetti-field absolute inset-0 opacity-[0.5]" aria-hidden="true" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
            description={t("about.description")}
          />
          <ul className="mt-7 grid gap-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 rounded-md border bg-background/86 p-3 text-sm font-bold leading-6 text-muted-foreground shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="food-shadow relative overflow-hidden rounded-lg border bg-muted">
          <div
            className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
            aria-hidden="true"
          />
          <Image
            src="/images/pupusas.webp"
            alt="Pupusas served at La Gaviota Mexican Restaurant"
            width={760}
            height={620}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
