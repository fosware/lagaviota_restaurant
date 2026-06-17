import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { menuHighlights } from "@/lib/site";

export function MenuHighlights() {
  return (
    <section className="section-pad bg-muted/55">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="A menu full of Mexican favorites"
            title="Tacos, burritos, tamales, seafood, pupusas and more."
            description="Whether you are stopping in for lunch, picking up dinner or feeding the whole family, there is something waiting for you at La Gaviota."
          />
          <Link
            href="/menu"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-black text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View Full Menu
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {menuHighlights.map((item) => (
            <div
              key={item}
              className="flex min-h-20 items-center gap-3 rounded-lg border bg-card p-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-secondary-foreground">
                <Utensils className="size-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
