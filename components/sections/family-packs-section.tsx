import { Phone, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/lib/site";

export function FamilyPacksSection() {
  return (
    <section className="section-pad bg-muted/55">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Family Packs / Party Packages"
          title="Food for the table, the family or the party."
          description="Call La Gaviota to ask what party packages are available today. The restaurant handles package details by phone so the order matches the size of your gathering."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <UsersRound className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-black">Family meals</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              Easy food for busy nights, soccer games, birthdays or weekend visits.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <Phone className="size-7 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-black">Order by phone</h3>
            <p className="mt-2 text-sm font-bold leading-6 text-muted-foreground">
              Confirm current options, menu availability and timing before your event.
            </p>
          </div>
          <Button asChild size="lg" className="sm:col-span-2">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Ask About Party Packages
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
