import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const details = [
  "Locally owned and family-operated",
  "Fresh ingredients and family recipes",
  "Dine-in and carryout",
  "Salsa bar, micheladas and soccer mentioned on the existing site",
  "More than 15 years of local restaurant and catering experience",
];

export function AboutSection() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="A local family restaurant"
            title="A Denver spot for real cravings, family meals and celebrations."
            description="La Gaviota Mexican Restaurant serves Denver with fresh ingredients, family recipes and a menu made for every craving, from quick tacos to party catering."
          />
          <ul className="mt-7 grid gap-3">
            {details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm font-bold leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg border bg-muted food-shadow">
          <Image
            src="/images/pupusas.webp"
            alt="Pupusas served at La Gaviota Mexican Restaurant"
            width={760}
            height={620}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="aspect-[5/4] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
