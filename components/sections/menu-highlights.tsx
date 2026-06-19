"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useI18n } from "@/lib/i18n";
import { menuHighlights } from "@/lib/site";

export function MenuHighlights() {
  const { t } = useI18n();

  return (
    <section className="section-pad relative bg-[#cce8ec]">
      <div className="confetti-field absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t("menuHighlights.eyebrow")}
            title={t("menuHighlights.title")}
            description={t("menuHighlights.description")}
          />
          <Link
            href="/menu"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {t("cta.viewFullMenu")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map((item) => (
            <Link
              key={item.name}
              href="/menu"
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <div className="relative h-44">
                <span className="absolute inset-x-0 top-0 z-10 h-1 bg-[linear-gradient(90deg,#2f7d32,#ffffff,#c13f4f)]" aria-hidden="true" />
                <Image
                  src={item.image}
                  alt={`${item.name} from La Gaviota menu`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <p className="text-lg font-black">{item.name}</p>
                <p className="rounded-md bg-secondary px-2.5 py-1 text-sm font-black text-secondary-foreground">
                  {item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
