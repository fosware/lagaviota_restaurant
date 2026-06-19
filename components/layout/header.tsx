"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navLabelForHref, useI18n } from "@/lib/i18n";
import { business, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import { MobileDrawer } from "./mobile-drawer";

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${business.name} ${t("nav.home")}`}
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-md border border-primary/18 bg-background shadow-sm">
            <Image
              src="/images/la-gaviota-mark.webp"
              alt=""
              width={48}
              height={48}
              priority
              className="size-11 object-contain"
            />
          </span>
          <span>
            <span className="block text-xl font-black leading-none text-primary">
              La Gaviota
            </span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-normal text-muted-foreground">
              {t("brand.category")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("cta.primaryNav")}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            const label = navLabelForHref(item.href, t);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={(event) => {
                  if (active) {
                    event.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
                  active
                    ? "bg-muted text-primary"
                    : "text-foreground hover:bg-muted hover:text-primary",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle compact />
          <Button asChild>
            <a href={business.phoneHref} aria-label={`${t("cta.callToOrder")} ${business.phoneDisplay}`}>
              <Phone aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label={t("cta.openMobileNav")}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <Menu aria-hidden="true" />
        </Button>
      </div>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
