"use client";

import { CalendarCheck, Phone, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

export function CateringInquiryForm() {
  const { t } = useI18n();

  return (
    <Card className="papel-cutout relative overflow-hidden bg-card/96 shadow-sm">
      <div
        className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
        aria-hidden="true"
      />
      <CardHeader>
        <CardTitle>{t("cateringForm.title")}</CardTitle>
        <p className="text-sm font-bold leading-6 text-muted-foreground">
          {t("cateringForm.description")}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border bg-[#f5e6d3] p-4">
            <UsersRound className="size-6 text-primary" aria-hidden="true" />
            <p className="mt-3 text-sm font-black uppercase text-primary">{t("cateringForm.goodToKnow")}</p>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              {t("cateringForm.goodCopy")}
            </p>
          </div>
          <div className="rounded-md border bg-[#f5e6d3] p-4">
            <CalendarCheck className="size-6 text-accent" aria-hidden="true" />
            <p className="mt-3 text-sm font-black uppercase text-accent">{t("cateringForm.askAbout")}</p>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              {t("cateringForm.askCopy")}
            </p>
          </div>
          <Button asChild size="lg" className="sm:col-span-2">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              {t("cta.call")} {business.phoneDisplay}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
