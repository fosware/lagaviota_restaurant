"use client";

import { useState } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const [language, setLanguage] = useState<"EN" | "ES">("EN");

  return (
    <Button
      type="button"
      variant="outline"
      size={compact ? "sm" : "default"}
      aria-label="Toggle English and Spanish language preference"
      aria-pressed={language === "ES"}
      onClick={() => setLanguage((current) => (current === "EN" ? "ES" : "EN"))}
      className="border-primary/25 bg-background/80"
    >
      <Languages aria-hidden="true" />
      {language}
    </Button>
  );
}
