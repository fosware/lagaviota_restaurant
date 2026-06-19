"use client";

import { useI18n } from "@/lib/i18n";

export function SkipLink() {
  const { t } = useI18n();

  return (
    <a className="skip-link" href="#main-content">
      {t("cta.skipToContent")}
    </a>
  );
}
