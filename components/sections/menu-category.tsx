"use client";

import Image from "next/image";
import {
  ArrowUp,
  Beef,
  Beer,
  Coffee,
  Fish,
  Ham,
  IceCreamBowl,
  Sandwich,
  Soup,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategoryText, useI18n } from "@/lib/i18n";
import type { MenuCategory as MenuCategoryType } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryIcons = {
  "Tacos La Gaviota": UtensilsCrossed,
  Burritos: Beef,
  "Burritos Smothered": Beef,
  "Breakfast Burritos": Coffee,
  "Platos de Desayuno": Coffee,
  Plates: UtensilsCrossed,
  Gorditas: Wheat,
  Seafood: Fish,
  Pupusas: Wheat,
  Sopes: Wheat,
  Tortas: Sandwich,
  Tostadas: Wheat,
  Combos: Ham,
  Sides: Soup,
  Extras: UtensilsCrossed,
  Postres: IceCreamBowl,
  Drinks: Beer,
};

const categoryAccent = {
  "Tacos La Gaviota": "bg-[#fde9b8] text-primary",
  Burritos: "bg-secondary/20 text-[#7d4e00]",
  "Burritos Smothered": "bg-secondary/20 text-[#7d4e00]",
  "Breakfast Burritos": "bg-[#fde9b8] text-primary",
  "Platos de Desayuno": "bg-[#fde9b8] text-primary",
  Plates: "bg-[#fde9b8] text-primary",
  Gorditas: "bg-secondary/20 text-[#7d4e00]",
  Seafood: "bg-primary/10 text-primary",
  Pupusas: "bg-accent/12 text-accent",
  Sopes: "bg-accent/12 text-accent",
  Tortas: "bg-secondary/18 text-[#7d4e00]",
  Tostadas: "bg-[#fde9b8] text-primary",
  Combos: "bg-[#fde9b8] text-primary",
  Sides: "bg-secondary/18 text-[#7d4e00]",
  Extras: "bg-muted text-primary",
  Postres: "bg-secondary/18 text-[#7d4e00]",
  Drinks: "bg-accent/12 text-accent",
};

export function MenuCategory({ category, index }: { category: MenuCategoryType; index: number }) {
  const { language, t } = useI18n();
  const categoryText = getCategoryText(category, language);
  const Icon = categoryIcons[category.name as keyof typeof categoryIcons] ?? Wheat;
  const accentClass = categoryAccent[category.name as keyof typeof categoryAccent] ?? "bg-muted text-primary";

  return (
    <Card
      id={category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
      className={cn(
        "scroll-mt-28 overflow-hidden bg-[#fdfdfd]",
        index === 0 && "lg:col-span-2",
      )}
    >
      <CardHeader className="border-b bg-card p-0">
        {category.image ? (
          <div className="relative h-48 overflow-hidden bg-muted">
            <Image
              src={category.image}
              alt={category.imageAlt ?? `${categoryText.name} at La Gaviota`}
              fill
              sizes={index === 0 ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1024px) 45vw, 100vw"}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/12 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                {categoryText.eyebrow ? (
                  <span className="inline-flex rounded-md bg-secondary px-2.5 py-1 text-xs font-black uppercase text-secondary-foreground">
                    {categoryText.eyebrow}
                  </span>
                ) : null}
                <CardTitle className="mt-3 flex items-center gap-3 text-background">
                  <span className={cn("grid size-11 shrink-0 place-items-center rounded-md bg-background", accentClass)}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {categoryText.name}
                </CardTitle>
              </div>
              <span className="rounded-md bg-background px-3 py-2 text-xs font-black uppercase text-primary">
                {category.items.length} {t("menuCategory.options")}
              </span>
            </div>
          </div>
        ) : null}
        <div className="p-5">
          {!category.image ? (
            <div className="flex items-start justify-between gap-4">
              <div>
                {categoryText.eyebrow ? <Badge variant="outline">{categoryText.eyebrow}</Badge> : null}
                <CardTitle className="mt-3 flex items-center gap-3">
                  <span className={cn("grid size-11 shrink-0 place-items-center rounded-md", accentClass)}>
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {categoryText.name}
                </CardTitle>
              </div>
              <span className="rounded-md bg-muted px-3 py-2 text-xs font-black uppercase text-muted-foreground">
                {category.items.length} {t("menuCategory.options")}
              </span>
            </div>
          ) : null}
          <p className="text-sm font-bold leading-6 text-muted-foreground">
            {categoryText.description}
          </p>
          {category.featured?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {category.featured.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-[#fde9b8] px-3 py-1 text-xs font-black text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="bg-[#fdfdfd]">
        <ul className="grid gap-0 divide-y divide-border/80">
          {category.items.map((item) => (
            <li key={`${category.name}-${item.name}`} className="grid gap-2 py-3.5 sm:grid-cols-[1fr_auto] sm:items-baseline">
              <div>
                <p className="font-black">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                ) : null}
              </div>
              {item.price ? (
                <span className="w-fit rounded-md bg-background px-2.5 py-1 text-sm font-black text-primary">
                  {item.price}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="border-t pt-4">
          <a
            href="#menu-map"
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-muted px-4 text-sm font-black text-primary hover:bg-[#fde9b8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
            {t("menuCategory.back")}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
