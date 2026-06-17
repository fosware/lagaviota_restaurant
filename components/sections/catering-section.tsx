import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { business, cateringOccasions } from "@/lib/site";
import { CallButton } from "./call-button";

export function CateringSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "bg-background py-10" : "section-pad bg-background"}>
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border bg-muted food-shadow">
          <Image
            src="/images/alambre.webp"
            alt="Mexican catering dishes for parties in Denver"
            width={900}
            height={700}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Catering for your event / Catering para tu evento"
            title="Hosting a party? We will take care of the food."
            description="La Gaviota prepares Mexican dishes for parties, anniversaries, graduations, birthdays and special occasions. Call and ask about catering or party packages."
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {cateringOccasions.map((occasion) => (
              <p key={occasion} className="flex items-center gap-2 rounded-md border bg-card p-3 text-sm font-black">
                <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                {occasion}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton label="Call for Catering" size="lg" />
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">
                <CalendarCheck aria-hidden="true" />
                Plan Your Event Meal
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm font-bold text-muted-foreground">
            Party package details are handled by phone: {business.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
