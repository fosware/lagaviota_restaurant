"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, toggleLanguage, t } = useI18n();

  return (
    <Button
      type="button"
      variant="outline"
      size={compact ? "sm" : "default"}
      aria-label={t("language.label")}
      aria-pressed={language === "es"}
      onClick={toggleLanguage}
      className="border-primary/25 bg-background/80"
    >
      <Languages aria-hidden="true" />
      {t(`language.${language}`)}
    </Button>
  );
}
