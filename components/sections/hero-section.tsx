import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Beer,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Utensils,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/site";

const heroFavorites = [
  {
    label: "Tacos",
    note: "Salsa bar ready",
    icon: UtensilsCrossed,
    className: "bg-[#fff3df] text-primary",
  },
  {
    label: "Tamales",
    note: "Family favorites",
    icon: Wheat,
    className: "bg-secondary/28 text-[#7d5520]",
  },
  {
    label: "Micheladas",
    note: "Cold and casual",
    icon: Beer,
    className: "bg-accent/12 text-accent",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-accent" aria-hidden="true" />
      <div className="container-page relative grid min-h-[calc(86svh-76px)] items-start gap-10 py-10 sm:py-14 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-14">
        <div className="max-w-3xl">
          <Badge variant="accent">Fresh Mexican food / Comida mexicana fresca</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
            Authentic Mexican Food & Catering in Denver
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-muted-foreground sm:text-xl">
            Fresh ingredients, family recipes, tacos, tamales, seafood, pupusas and
            catering for parties, birthdays, graduations and special occasions.
          </p>
          <div className="mt-8 max-w-2xl rounded-lg border bg-card p-3 shadow-sm">
            <a
              href={business.phoneHref}
              aria-label={`Call La Gaviota at ${business.phoneDisplay}`}
              className="group flex min-h-16 items-center justify-between gap-4 rounded-md border border-primary/35 bg-[#fff3df] px-5 py-4 text-foreground transition-colors hover:bg-[#ffe9ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase text-primary">
                    Call to order / Llama para ordenar
                  </span>
                  <span className="block text-xl font-black">{business.phoneDisplay}</span>
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" variant="secondary" className="min-h-16 justify-start px-4">
                <Link href="/menu">
                  <Utensils aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-base">View Menu</span>
                    <span className="block text-xs font-bold opacity-75">Tacos, pupusas, seafood</span>
                  </span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="accent" className="min-h-16 justify-start px-4">
                <Link href="/catering">
                  <CalendarCheck aria-hidden="true" />
                  <span className="text-left">
                    <span className="block text-base">Get Catering</span>
                    <span className="block text-xs font-bold opacity-80">Parties and family events</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm font-black text-muted-foreground sm:grid-cols-3">
            <p className="flex items-center gap-2 rounded-md border bg-card p-3">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {business.shortHours}
            </p>
            <p className="flex items-center gap-2 rounded-md border bg-card p-3">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              South Quebec, Denver
            </p>
            <p className="flex items-center gap-2 rounded-md border bg-card p-3">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              Dine in or carryout
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="food-shadow overflow-hidden rounded-lg border-4 border-white bg-card">
            <Image
              src="/images/salsa-bar.webp"
              alt="La Gaviota salsa bar with fresh salsa choices"
              width={760}
              height={540}
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="relative z-10 -mt-7 mx-4 grid gap-3 rounded-lg border bg-card p-4 shadow-xl sm:mx-8 sm:grid-cols-3">
            {heroFavorites.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-md bg-muted/70 p-3 text-left"
              >
                <span className={`grid size-10 shrink-0 place-items-center rounded-md ${item.className}`}>
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-black text-foreground">{item.label}</span>
                  <span className="block text-xs font-bold text-muted-foreground">{item.note}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
