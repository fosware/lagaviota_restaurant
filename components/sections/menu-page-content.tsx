"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryText, useI18n } from "@/lib/i18n";
import { business, menuCategories } from "@/lib/site";
import { CallButton } from "./call-button";
import { MenuCategory } from "./menu-category";

const anchorFor = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function MenuPageContent() {
  const { language, t } = useI18n();
  const totalItems = menuCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <>
      <section className="relative overflow-hidden bg-foreground pb-12 pt-10 text-background sm:pb-16 lg:pt-12">
        <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#005f73_0_20%,#d97706_20%_40%,#e07850_40%_60%,#2f7d32_60%_80%,#0d1f26_80%)]" aria-hidden="true" />
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-secondary">{t("menuPage.eyebrow")}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">
                {t("menuPage.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-background/76">
                {t("menuPage.description")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CallButton label={t("cta.callToOrder")} size="lg" />
                <Button asChild size="lg" variant="secondary">
                  <Link href={business.orderPath}>
                    <ShoppingBag aria-hidden="true" />
                    {t("cta.orderOnline")}
                  </Link>
                </Button>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <p className="rounded-lg border border-background/15 bg-background/8 p-4">
                  <span className="block text-3xl font-black text-secondary">{menuCategories.length}</span>
                  <span className="text-sm font-bold text-background/72">{t("menuPage.categories")}</span>
                </p>
                <p className="rounded-lg border border-background/15 bg-background/8 p-4">
                  <span className="block text-3xl font-black text-secondary">{totalItems}+</span>
                  <span className="text-sm font-bold text-background/72">{t("menuPage.items")}</span>
                </p>
                <p className="rounded-lg border border-background/15 bg-background/8 p-4">
                  <span className="block text-3xl font-black text-secondary">$1.89</span>
                  <span className="text-sm font-bold text-background/72">{t("menuPage.tacosFrom")}</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["/images/fajitas-combinadas.webp", "/images/siete-mares.webp", "/images/pupusas.webp", "/images/torta.webp"].map((src, index) => (
                <div key={src} className={index === 0 ? "relative col-span-2 h-60 overflow-hidden rounded-lg border-4 border-background/12" : "relative h-36 overflow-hidden rounded-lg border-4 border-background/12"}>
                  <Image
                    src={src}
                    alt="Dish from La Gaviota Mexican Restaurant menu"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="confetti-field bg-[#cce8ec] py-5">
        <div className="container-page">
          <div className="grid gap-3 lg:grid-cols-3">
            <Link
              href="#tacos-la-gaviota"
              className="group rounded-lg border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring sm:p-5"
            >
              <UtensilsCrossed className="size-7 text-primary" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">{t("menuPage.startTacos")}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
                {t("menuPage.startTacosCopy")}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary">
                {t("menuPage.jumpTacos")} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </Link>
            <Link
              href="/catering"
              className="group rounded-lg border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring sm:p-5"
            >
              <CalendarCheck className="size-7 text-accent" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">{t("menuPage.feeding")}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
                {t("menuPage.feedingCopy")}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-accent">
                {t("menuPage.askCatering")} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </Link>
            <div className="rounded-lg border bg-accent p-4 text-accent-foreground shadow-sm sm:p-5">
              <MapPin className="size-7" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">{t("menuPage.findQuebec")}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-accent-foreground/82">
                {t("menuPage.findQuebecCopy")}
              </p>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                {t("cta.getDirections")} <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="confetti-field bg-background pb-16 pt-8 sm:pb-20">
        <div className="container-page">
          <nav id="menu-map" className="scroll-mt-28 rounded-lg border bg-card shadow-sm" aria-label={t("menuPage.categories")}>
            <div className="border-b bg-[#fde9b8] p-4 sm:flex sm:items-end sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-black uppercase text-primary">{t("menuPage.choose")}</p>
                <p className="mt-1 text-sm font-bold text-muted-foreground">
                  {t("menuPage.chooseCopy")}
                </p>
              </div>
              <a
                href={business.phoneHref}
                className="mt-3 inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-black text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring sm:mt-0"
              >
                {t("cta.callToOrder")}
              </a>
            </div>
            <ol className="p-2 sm:columns-2 lg:columns-3 xl:columns-4">
              {menuCategories.map((category, index) => {
                const categoryText = getCategoryText(category, language);

                return (
                  <li key={category.name} className="break-inside-avoid border-b">
                    <a
                      href={`#${anchorFor(category.name)}`}
                      className="group grid min-h-12 grid-cols-[2rem_1fr_auto] items-center gap-2 rounded-md px-2 py-2 text-sm font-black text-foreground transition-colors hover:bg-[#fde9b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                    >
                      <span className="text-xs font-black text-primary/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{categoryText.name}</span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                        {category.items.length}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {menuCategories.map((category, index) => (
              <MenuCategory key={category.name} category={category} index={index} />
            ))}
          </div>

          <div className="mt-10 rounded-lg border bg-[#fde9b8] p-5">
            <p className="text-sm font-black uppercase text-primary">{t("menuPage.quickNote")}</p>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              {t("menuPage.quickNoteCopy")}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <Button asChild variant="outline">
                <Link href={business.orderPath}>
                  {t("cta.orderOnline")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
