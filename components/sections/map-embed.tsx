"use client";

import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

export function MapEmbed() {
  const { t } = useI18n();

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card shadow-sm">
      <div
        className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
        aria-hidden="true"
      />
      <div className="border-b bg-background p-4 pt-5">
        <p className="text-sm font-black uppercase text-primary">{t("contact.mapLabel")}</p>
        <p className="mt-1 text-sm font-bold text-muted-foreground">{business.address}</p>
      </div>
      <iframe
        title={t("contact.mapLabel")}
        src={business.mapEmbed}
        className="h-[320px] w-full md:h-[430px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
