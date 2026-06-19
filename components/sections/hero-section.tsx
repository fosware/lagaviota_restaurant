"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="coastal-hero relative overflow-hidden text-background">
      <div className="papel-picado absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.07] grain" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="coastal-wave absolute inset-x-0 bottom-0 h-32" aria-hidden="true" />
      <div className="container-page relative grid min-h-[760px] items-start gap-10 py-10 sm:min-h-[780px] sm:py-14 lg:min-h-[820px] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-14">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-md border border-background/20 bg-background/12 px-3 py-1.5 text-sm font-black uppercase text-background shadow-sm backdrop-blur">
            {t("hero.badge")}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-background/76 sm:text-xl">
            {t("hero.description")}
          </p>
          <div className="mt-8 max-w-2xl rounded-lg border border-background/15 bg-background p-3 text-foreground shadow-2xl">
            <a
              href={business.phoneHref}
              aria-label={`${t("cta.callToOrder")} ${business.phoneDisplay}`}
              className="group flex min-h-16 items-center justify-between gap-4 rounded-md border border-primary/35 bg-[#cce8ec] px-5 py-4 text-foreground transition-colors hover:bg-[#aad8de] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase text-primary">
                    {t("hero.callEyebrow")}
                  </span>
                  <span className="block text-xl font-black">{business.phoneDisplay}</span>
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" variant="secondary" className="min-h-16 justify-start px-4">
                <Link href="/menu">
                  <Utensils aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-base">{t("cta.viewFullMenu")}</span>
                    <span className="block text-xs font-bold opacity-75">{t("hero.menuNote")}</span>
                  </span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="accent" className="min-h-16 justify-start px-4">
                <Link href={business.orderPath}>
                  <ShoppingBag aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-base">{t("cta.orderOnline")}</span>
                    <span className="block text-xs font-bold opacity-80">{t("hero.orderNote")}</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm font-black text-background sm:grid-cols-3">
            <p className="flex items-center gap-2 rounded-md border border-secondary/35 bg-[#0d1f26]/88 p-3 shadow-md backdrop-blur">
              <Clock className="size-4 shrink-0 text-secondary" aria-hidden="true" />
              {t("hours.short")}
            </p>
            <p className="flex items-center gap-2 rounded-md border border-secondary/35 bg-[#0d1f26]/88 p-3 shadow-md backdrop-blur">
              <MapPin className="size-4 shrink-0 text-secondary" aria-hidden="true" />
              {t("hero.location")}
            </p>
            <p className="flex items-center gap-2 rounded-md border border-secondary/35 bg-[#0d1f26]/88 p-3 shadow-md backdrop-blur">
              <CalendarCheck className="size-4 shrink-0 text-secondary" aria-hidden="true" />
              {t("hero.cateringByPhone")}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="food-shadow relative overflow-hidden rounded-lg border-4 border-background/18 bg-card">
            <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[linear-gradient(90deg,#2f7d32_0_33%,#ffffff_33%_66%,#c13f4f_66%)]" aria-hidden="true" />
            <Image
              src="/images/fajitas-combinadas.webp"
              alt="Fajitas combinadas plate from La Gaviota Mexican Restaurant in Denver"
              width={760}
              height={540}
              priority
              loading="eager"
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="relative z-10 -mt-7 mx-4 grid grid-cols-3 gap-2 rounded-lg border bg-background/96 p-3 text-foreground shadow-xl backdrop-blur sm:mx-8 sm:gap-3">
            {[
              { src: "/images/tostadas-de-asada.webp", label: t("hero.tostadas") },
              { src: "/images/pupusas.webp", label: t("hero.pupusas") },
              { src: "/images/siete-mares.webp", label: t("hero.sevenSeas") },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-2 rounded-md bg-[#fde9b8] p-2 sm:flex-row sm:items-center sm:gap-3">
                <span className="relative size-12 shrink-0 overflow-hidden rounded-md sm:size-14">
                  <Image src={item.src} alt={item.label} fill sizes="56px" className="object-cover" />
                </span>
                <span className="text-xs font-black leading-tight sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
