"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLabelForHref, useI18n } from "@/lib/i18n";
import { business, navItems } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="coastal-hero relative overflow-hidden border-t pb-24 text-background lg:pb-0">
      <div className="papel-picado absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="confetti-field absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="container-page relative grid gap-8 py-12 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="text-2xl font-black text-secondary">La Gaviota</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-background/78">
            {t("footer.copy")}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <a href={business.phoneHref}>
                <Phone aria-hidden="true" />
                {t("cta.callToOrder")}
              </a>
            </Button>
            <Button asChild variant="outline" className="border-background/25 bg-transparent text-background hover:bg-background/10">
              <a href={business.mapsUrl} target="_blank" rel="noreferrer">
                {t("cta.getDirections")}
              </a>
            </Button>
            <Button asChild variant="accent">
              <Link href={business.orderPath}>
                {t("cta.orderOnline")}
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <p className="font-black text-secondary">{t("footer.pages")}</p>
          <nav className="mt-4 grid gap-2" aria-label={t("footer.pages")}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-background/78 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
              >
                {navLabelForHref(item.href, t)}
              </Link>
            ))}
          </nav>
        </div>
        <address className="not-italic">
          <p className="font-black text-secondary">{t("footer.contact")}</p>
          <div className="mt-4 space-y-3 text-sm font-bold text-background/78">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              {business.address}
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              <a href={business.phoneHref} className="hover:text-secondary">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="flex gap-2 break-all">
              <Mail className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden="true" />
              <a href={business.emailHref} className="hover:text-secondary">
                {business.email}
              </a>
            </p>
            <p>{t("hours.full")}</p>
          </div>
        </address>
      </div>
      <div className="border-t border-background/15 py-4 text-center text-xs font-bold text-background/60">
        <p>© 2026 La Gaviota Mexican Restaurant. {t("footer.bottom")}</p>
      </div>
    </footer>
  );
}
