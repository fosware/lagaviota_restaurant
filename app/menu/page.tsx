import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SEOHead } from "@/components/seo/seo-head";
import { CallButton } from "@/components/sections/call-button";
import { MenuCategory } from "@/components/sections/menu-category";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { business, menuCategories } from "@/lib/site";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Phone, Soup, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = SEOHead({
  title: "Menu | Mexican Food, Tacos, Pupusas & Seafood in Denver",
  description:
    "Browse La Gaviota Mexican Restaurant menu categories including tacos, burritos, seafood, pupusas, tortas, tamales, drinks and more in Denver, CO.",
  path: "/menu",
});

export default function MenuPage() {
  const anchorFor = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <>
      <Breadcrumbs items={[{ label: "Menu", href: "/menu" }]} />
      <section className="bg-background pb-16 pt-10 sm:pb-20 lg:pt-12">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-start">
            <SectionHeading
              eyebrow="View Menu / Ver menu"
              title="A Menu Full of Mexican Favorites"
              description="Tacos, burritos, gorditas, seafood, pupusas, sopes, tortas, tostadas, tamales, drinks and more. Call to confirm current availability and party packages."
            />
            <div className="rounded-lg border bg-muted p-5">
              <p className="text-sm font-black uppercase text-primary">Order by phone</p>
              <p className="mt-2 text-2xl font-black">{business.phoneDisplay}</p>
              <p className="mt-2 text-sm font-bold leading-5 text-muted-foreground">
                Confirm availability before publication.
              </p>
              <div className="mt-4 grid gap-3">
                <CallButton label="Call to Pre-Order Carryout" />
                <Button asChild variant="outline">
                  <Link href="/catering">Ask About Party Packages</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Link
              href="#tacos-la-gaviota"
              className="group rounded-lg border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring sm:p-5"
            >
              <UtensilsCrossed className="size-7 text-primary" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">Start with tacos</p>
              <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
                Quick, familiar and easy to order for carryout.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-primary">
                Jump to tacos <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </Link>
            <Link
              href="#seafood"
              className="group rounded-lg border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring sm:p-5"
            >
              <Soup className="size-7 text-accent" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">Craving a full plate?</p>
              <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
                Seafood, soups, burritos and warm comfort dishes.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-accent">
                Browse plates <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
            </Link>
            <div className="rounded-lg border bg-accent p-4 text-accent-foreground shadow-sm sm:p-5">
              <CalendarCheck className="size-7" aria-hidden="true" />
              <p className="mt-3 text-xl font-black sm:mt-4">Feeding more people?</p>
              <p className="mt-2 text-sm font-bold leading-6 text-accent-foreground/82">
                Call for party packages, family meals and catering questions.
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-black underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>

          <nav className="mt-10 rounded-lg border bg-card p-3" aria-label="Menu categories">
            <ul className="flex gap-2 overflow-x-auto pb-1">
              {menuCategories.map((category) => (
                <li key={category.name} className="shrink-0">
                  <a
                    href={`#${anchorFor(category.name)}`}
                    className="inline-flex min-h-10 items-center rounded-md bg-muted px-4 text-sm font-black text-foreground hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {menuCategories.map((category, index) => (
              <MenuCategory key={category.name} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
