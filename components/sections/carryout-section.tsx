import Link from "next/link";
import { Beer, MonitorPlay, Salad, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/lib/site";
import { CallButton } from "./call-button";

const features = [
  { label: "Dine in or carryout", icon: ShoppingBag },
  { label: "Fresh salsa bar", icon: Salad },
  { label: "Micheladas and cold beer mentioned on the existing site", icon: Beer },
  { label: "Live soccer mentioned on the existing site", icon: MonitorPlay },
];

export function CarryoutSection() {
  return (
    <section className="section-pad bg-foreground text-background">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="Call ahead / Llama para ordenar"
          title="Call ahead. Pick up. Enjoy at home."
          description="Craving tacos, tamales or a full plate from La Gaviota? Call us to pre-order your carryout and enjoy fresh Mexican food wherever the day takes you."
          className="[&_h2]:text-background [&_p]:text-background/76"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.label} className="rounded-lg border border-background/16 bg-background/8 p-5">
              <feature.icon className="size-7 text-secondary" aria-hidden="true" />
              <p className="mt-4 text-lg font-black">{feature.label}</p>
            </div>
          ))}
          <CallButton label="Call to Pre-Order Carryout" size="lg" className="sm:col-span-2" />
          <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10 sm:col-span-2">
            <Link href="/contact">Find us at {business.addressStreet}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
