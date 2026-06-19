"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { business } from "@/lib/site";

type CallButtonProps = {
  label?: string;
  size?: "default" | "lg" | "sm";
  className?: string;
};

export function CallButton({ label = `Call ${business.phoneDisplay}`, size = "default", className }: CallButtonProps) {
  const { t } = useI18n();
  const buttonLabel = label === `Call ${business.phoneDisplay}` ? `${t("cta.call")} ${business.phoneDisplay}` : label;

  return (
    <Button asChild size={size} className={className}>
      <a href={business.phoneHref} aria-label={`${t("cta.call")} ${business.phoneDisplay}`}>
        <Phone aria-hidden="true" />
        {buttonLabel}
      </a>
    </Button>
  );
}
