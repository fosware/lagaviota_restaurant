"use client";

import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin, ShoppingBag, Utensils } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

export function QuickActions() {
  const { t } = useI18n();
  const actions = [
    {
      title: t("quick.menu.title"),
      copy: t("quick.menu.copy"),
      href: "/menu",
      label: t("cta.openCarta"),
      icon: Utensils,
    },
    {
      title: t("quick.online.title"),
      copy: t("quick.online.copy"),
      href: business.orderPath,
      label: t("cta.orderPickup"),
      icon: ShoppingBag,
    },
    {
      title: t("quick.catering.title"),
      copy: t("quick.catering.copy"),
      href: "/catering",
      label: t("cta.askByPhone"),
      icon: CalendarCheck,
    },
    {
      title: t("quick.directions.title"),
      copy: t("quick.directions.copy"),
      href: business.mapsUrl,
      label: t("quick.directions.label"),
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <section className="relative border-y bg-[#cce8ec] py-6">
      <div className="confetti-field absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="container-page grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => (
          <Link key={action.title} href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noreferrer" : undefined} className="papel-cutout group relative flex min-h-28 items-center gap-4 overflow-hidden rounded-lg border bg-background/94 p-4 shadow-sm transition-colors hover:border-primary/45 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
            <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2f7d32,#d97706,#c13f4f)] opacity-80" aria-hidden="true" />
            <span className="grid size-11 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
              <action.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-black leading-tight">{action.title}</span>
              <span className="mt-1 block text-sm font-bold leading-5 text-muted-foreground">
                {action.copy}
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-black text-primary">
                {action.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
