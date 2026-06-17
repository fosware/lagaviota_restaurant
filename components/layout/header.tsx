"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { business, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";
import { MobileDrawer } from "./mobile-drawer";

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/94 backdrop-blur">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="La Gaviota Mexican Restaurant home"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <span className="grid size-12 place-items-center rounded-md bg-primary text-xl font-black text-primary-foreground">
            G
          </span>
          <span>
            <span className="block text-xl font-black leading-none text-primary">
              La Gaviota
            </span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-normal text-muted-foreground">
              Mexican Restaurant
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
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
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle compact />
          <Button asChild>
            <a href={business.phoneHref} aria-label={`Call to order at ${business.phoneDisplay}`}>
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
          aria-label="Open mobile navigation"
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
