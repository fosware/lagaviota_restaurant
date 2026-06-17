"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Clock, Mail, MapPin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "./language-toggle";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        type="button"
        aria-label="Close mobile navigation backdrop"
        className={cn(
          "absolute inset-0 bg-foreground/55 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[min(88vw,390px)] flex-col overflow-y-auto bg-background p-5 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b pb-5">
          <Link href="/" onClick={onClose} className="group">
            <span className="block text-2xl font-black leading-none text-primary">
              La Gaviota
            </span>
            <span className="mt-1 block text-sm font-bold text-muted-foreground">
              Mexican Restaurant
            </span>
          </Link>
          <Button
            ref={closeRef}
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Close mobile navigation"
            onClick={onClose}
          >
            <X aria-hidden="true" />
          </Button>
        </div>

        <nav className="py-5" aria-label="Mobile primary navigation">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={(event) => {
                      if (active) {
                        event.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      onClose();
                    }}
                    className={cn(
                      "block rounded-md px-3 py-3 text-lg font-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
                      active
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-4 border-t pt-5">
          <LanguageToggle />
          <Button asChild size="lg" className="w-full">
            <a href={business.phoneHref} aria-label={`Call ${business.name} at ${business.phoneDisplay}`}>
              <Phone aria-hidden="true" />
              Call to Order
            </a>
          </Button>
          <div className="space-y-3 text-sm font-bold text-muted-foreground">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {business.address}
            </p>
            <p className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {business.shortHours}
            </p>
            <p className="flex gap-2 break-all">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {business.email}
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
