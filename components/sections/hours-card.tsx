"use client";

import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

export function HoursCard() {
  const { t } = useI18n();

  return (
    <Card className="relative overflow-hidden bg-card/96 shadow-sm">
      <div
        className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent),var(--secondary),var(--primary))]"
        aria-hidden="true"
      />
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="size-5 text-primary" aria-hidden="true" />
          {t("contact.hoursTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4 border-b pb-3">
            <dt className="font-black">{t("hours.days")}</dt>
            <dd className="font-bold text-muted-foreground">{t("hours.time")}</dd>
          </div>
          <div className="rounded-md bg-[#f5e6d3] p-3 text-sm font-bold leading-6 text-muted-foreground">
            {t("contact.hoursNote")}
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
