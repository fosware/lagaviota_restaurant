"use client";

import Link from "next/link";
import { CalendarCheck, Menu as MenuIcon, Phone } from "lucide-react";
import { business } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/96 px-3 py-2 shadow-[0_-10px_30px_rgba(33,24,20,0.14)] backdrop-blur lg:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={business.phoneHref}
          aria-label={`Call La Gaviota at ${business.phoneDisplay}`}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md bg-primary px-2 text-xs font-black text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          href="/menu"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md bg-muted px-2 text-xs font-black text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <MenuIcon className="size-4" aria-hidden="true" />
          Menu
        </Link>
        <Link
          href="/catering"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-md bg-accent px-2 text-xs font-black text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          Catering
        </Link>
      </div>
    </nav>
  );
}
